export interface Friend {
  id: string;
  name: string;
  profilePicture: string;
  birthDate: Date;
}

export interface MonthCount {
  name: string;
  number: number;
  friends: Friend[];
}
