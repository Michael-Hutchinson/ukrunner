import { doc, getDoc } from 'firebase/firestore';

import { db } from '../helpers/firebase';

const getUser = (
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

export default getUser;
