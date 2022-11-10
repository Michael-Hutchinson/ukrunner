import { doc, getDoc } from 'firebase/firestore';

import { db } from '../helpers/firebase';

const getUser = (userID: string) => {
  const docRef = doc(db, 'users', userID);
  getDoc(docRef).then((response) => {
    if (response.data()) {
      const userData = response.data();
      console.log(userData);
    }
  });
};

export default getUser;
