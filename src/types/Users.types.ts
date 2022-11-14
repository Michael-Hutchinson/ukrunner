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
