import friendsData from "./friends.json";

export interface Friend {
  id: string;
  name: string;
  profilePicture: string;
  birthDate: Date;
}

// Convert JSON data to Friend objects with Date instances
// Parse dates in local timezone to avoid UTC conversion issues
export const mockFriends: Friend[] = friendsData.map((friend) => {
  const [yearStr, monthStr, dayStr] = String(friend.birthDate).split("-");
  const year = Number(yearStr);
  const month = Number(monthStr);
  const day = Number(dayStr);

  return {
    ...friend,
    birthDate: new Date(year, month - 1, day),
  };
});
