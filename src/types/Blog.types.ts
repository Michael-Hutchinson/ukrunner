import { Timestamp } from 'firebase/firestore';

declare global {
  export interface Date {
    toDate: () => Date;
  }
}

export interface IBlog {
  title: string;
  body: string;
  date: Timestamp;
  categories: string[];
  image?: string;
  fileName?: string;
}
