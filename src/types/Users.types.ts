import { NavigateFunction } from 'react-router-dom';

export interface User {
  firstName: string;
  surname: string;
  bio?: string;
  profilePicture?: string;
  fileName?: string;
}

export interface EditUser {
  userID: string;
  firstName: string;
  surname: string;
  bio: string;
  file?: File;
  fileName?: string;
  originalProfilePicture?: string;
  originalFileName?: string;
  setSuccess: (success: boolean) => void;
  setSuccessMessage: (successMessage: string) => void;
}

export interface GetUser {
  userID: string;
  setFirstName?: (firstName: string) => void;
  setSurname?: (surname: string) => void;
  setProfilePicture?: (profilePicture: string) => void;
  setFileName?: (fileName: string) => void;
  setBio?: (bio: string) => void;
  setUser?: (user: string) => void;
  navigate?: NavigateFunction;
  setFollowers?: (followers: string[]) => void;
  setFollowing?: (following: string[]) => void;
}

export interface RegisterUser {
  firstName: string;
  surname: string;
  email: string;
  password: string;
  setRegisterError: (registerError: { code: string; message: string }) => void;
  signInWithEmailAndPassword: (email: string, password: string) => void;
}

export interface FollowUser {
  userToFollow: string;
  currentUser: string;
  setIsFollowing: (isFollowing: boolean) => void;
}
