declare global {
  export interface Date {
    toDate: () => Date;
  }
}

export interface IBlog {
  title: string;
  body: string;
  date: Date;
  categories: string[];
}
