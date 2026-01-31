import friendsData from "./friends.json";

export interface Friend {
  id: string;
  name: string;
  profilePicture: string;
  birthDate: Date;
}

// Convert JSON data to Friend objects with Date instances
export const mockFriends: Friend[] = friendsData.map((friend) => ({
  ...friend,
  birthDate: new Date(friend.birthDate),
}));
