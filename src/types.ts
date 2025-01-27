export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
  }
  
  export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  