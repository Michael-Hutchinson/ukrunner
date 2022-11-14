import { doc, getDoc, setDoc } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { db, storage } from '../helpers/firebase';
import { EditUser, User } from '../types/Users.types';

export const getUser = (
  userID: string,
  setFirstName?: (firstName: string) => void,
  setSurname?: (surname: string) => void,
  setProfilePicture?: (profilePicture: string) => void,
  setFileName?: (fileName: string) => void,
  setBio?: (bio: string) => void,
) => {
  const docRef = doc(db, 'users', userID);
  getDoc(docRef).then((response) => {
    if (response.data()) {
      const userData = response.data();
      if (setFirstName) {
        setFirstName(userData?.firstName);
      }
      if (setSurname) {
        setSurname(userData?.surname);
      }
      if (setProfilePicture) {
        setProfilePicture(userData?.profilePicture);
      }
      if (setBio) {
        setBio(userData?.bio);
      }
      if (setFileName) {
        setFileName(userData?.fileName);
      }
    }
  });
};

export const editUser = ({
  userID,
  firstName,
  surname,
  bio,
  file,
  fileName,
  originalProfilePicture,
  originalFileName,
  setSuccess,
  setSuccessMessage,
}: EditUser) => {
  let userData: User = {
    firstName,
    surname,
    bio,
  };
  if (file && fileName) {
    const userProfileRef = ref(storage, fileName);
    uploadBytes(userProfileRef, file).then(() => {
      getDownloadURL(userProfileRef).then((imageURL) => {
        userData = {
          ...userData,
          fileName,
          profilePicture: imageURL,
        };
        if (originalFileName && originalProfilePicture) {
          const deleteRef = ref(storage, originalFileName);
          deleteObject(deleteRef);
        }
        setDoc(doc(db, 'users', userID), userData).then(() => {
          setSuccess(true);
          setSuccessMessage('User profile edited');
        });
      });
    });
  } else {
    userData = {
      ...userData,
      fileName: originalFileName,
      profilePicture: originalProfilePicture,
    };
    setDoc(doc(db, 'users', userID), userData).then(() => {
      setSuccess(true);
      setSuccessMessage('User profile edited');
    });
  }
};
