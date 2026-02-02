export interface Friend {
  id: string;
  name: string;
  profilePicture: string;
  birthDate: Date;
  sex: "male" | "female";
}

export interface MonthCount {
  name: string;
  number: number;
  friends: Friend[];
}
