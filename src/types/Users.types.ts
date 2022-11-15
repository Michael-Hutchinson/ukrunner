import { NavigateFunction } from 'react-router-dom';

export interface User {
  firstName: string;
  surname: string;
  bio: string;
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
}
