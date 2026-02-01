import type { Friend } from "../types";
import friendsData from "./friends.json";

// Convert JSON data to Friend objects with Date instances
// Parse dates in local timezone to avoid UTC conversion issues
export const friends: Friend[] = friendsData.map((friend) => {
  const [yearStr, monthStr, dayStr] = String(friend.birthDate).split("-");
  const year = Number(yearStr);
  const month = Number(monthStr);
  const day = Number(dayStr);

  return {
    ...friend,
    birthDate: new Date(year, month - 1, day),
  };
});
