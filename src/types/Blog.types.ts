declare global {
  export interface Date {
    toDate: () => Date;
  }
}

export interface IBlog {
  title: string;
  body: string;
  date: Date;
}

export interface IBlogCategory {
  id: number;
  value: string;
}
