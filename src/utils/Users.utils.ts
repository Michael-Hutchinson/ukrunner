import { createUserWithEmailAndPassword } from 'firebase/auth';
import { arrayRemove, arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { auth, db, storage } from '../helpers/firebase';
import { EditUser, FollowerData, FollowUser, GetUser, RegisterUser, User } from '../types/Users.types';

export const fetchUserDetails = async (userID: string) => {
  const docRef = doc(db, 'users', userID);
  const response = await getDoc(docRef);
  const userData = response.data();
  if (userData) {
    return {
      firstName: userData.firstName,
      surname: userData.surname,
      profilePicture: userData.profilePicture,
      bio: userData.bio,
    };
  }
  return null;
};

export const getUser = async ({
  userID,
  setFirstName,
  setSurname,
  setProfilePicture,
  setFileName,
  setBio,
  setUser,
  navigate,
  setFollowers,
  setFollowing,
}: GetUser) => {
  try {
    const docRef = doc(db, 'users', userID);
    const response = await getDoc(docRef);
    const userData = response.data();

    if (userData) {
      setFirstName?.(userData.firstName);
      setSurname?.(userData.surname);
      setProfilePicture?.(userData.profilePicture);
      setBio?.(userData.bio);
      setFileName?.(userData.fileName);
      setUser?.(response.id);
      setFollowers?.(userData.followers || []);
      setFollowing?.(userData.following || []);
    } else {
      navigate?.('/user-not-found');
    }
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    navigate?.('/error');
  }
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
      fileName: originalFileName ?? '',
      profilePicture: originalProfilePicture ?? '',
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

export const followUser = ({ userToFollow, currentUser, setIsFollowing }: FollowUser) => {
  updateDoc(doc(db, 'users', userToFollow), { followers: arrayUnion(currentUser) }).then(() => {
    updateDoc(doc(db, 'users', currentUser), { following: arrayUnion(userToFollow) }).then(() => {
      setIsFollowing(true);
    });
  });
};

export const unfollowUser = ({ userToFollow, currentUser, setIsFollowing }: FollowUser) => {
  updateDoc(doc(db, 'users', userToFollow), { followers: arrayRemove(currentUser) }).then(() => {
    updateDoc(doc(db, 'users', currentUser), { following: arrayRemove(userToFollow) }).then(() => {
      setIsFollowing(false);
    });
  });
};

export const getFollowers = (setFollowers: (followers: string[]) => void, userID: string) => {
  const docRef = doc(db, 'users', userID);
  getDoc(docRef).then((response) => {
    if (response.data()) {
      const followerData = response.data();
      setFollowers(followerData?.followers || []);
    }
  });
};

export const getFollowing = (setFollowing: (following: string[]) => void, userID: string) => {
  const docRef = doc(db, 'users', userID);
  getDoc(docRef).then((response) => {
    if (response.data()) {
      const followingData = response.data();
      setFollowing(followingData?.following || []);
    }
  });
};

export const getModalFollow = async ({ userIDS, setDisplayUsers }: FollowerData) => {
  const users: { firstName: string; surname: string; profilePicture: string; userID: string }[] = [];
  for (let i = 0; i < userIDS.length; i += 1) {
    const userDoc = doc(db, 'users', userIDS[i]);
    await getDoc(userDoc).then((response) => {
      if (response.data()) {
        const data = response.data();
        users.push({
          firstName: data?.firstName,
          surname: data?.surname,
          profilePicture: data?.profilePicture,
          userID: userIDS[i],
        });
      }
    });
  }
  setDisplayUsers(users);
};
