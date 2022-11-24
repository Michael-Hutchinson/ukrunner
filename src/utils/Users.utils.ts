import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { auth, db, storage } from '../helpers/firebase';
import { EditUser, GetUser, RegisterUser, User } from '../types/Users.types';

export const getUser = ({
  userID,
  setFirstName,
  setSurname,
  setProfilePicture,
  setFileName,
  setBio,
  setUser,
  navigate,
}: GetUser) => {
  const docRef = doc(db, 'users', userID);
  getDoc(docRef).then((response) => {
    if (response.data()) {
      const user = response.id;
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
      if (setUser) {
        setUser(user);
      }
    } else if (navigate) {
      navigate('/user-not-found');
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
      fileName: originalFileName || '',
      profilePicture: originalProfilePicture || '',
    };
    setDoc(doc(db, 'users', userID), userData).then(() => {
      setSuccess(true);
      setSuccessMessage('User profile edited');
    });
  }
};

export const registerUser = ({
  firstName,
  surname,
  email,
  password,
  setRegisterError,
  signInWithEmailAndPassword,
}: RegisterUser) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const userID = userCredential.user.uid;
      const userData: User = {
        firstName,
        surname,
      };
      setDoc(doc(db, 'users', userID), userData).then(() => {
        signInWithEmailAndPassword(email, password);
      });
    })
    .catch((error) => {
      setRegisterError(error);
    });
};
