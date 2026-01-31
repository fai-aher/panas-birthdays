import type { Friend } from "../data/mockFriends";

export interface MonthCount {
  name: string;
  number: number;
  friends: Friend[];
}

/**
 * Filter friends by month and sort by day
 * @param month - Month number (1-12)
 * @returns Array of friends with birthdays in the specified month
 */
export const getFriendsByMonth = (
  month: number,
  friends: Friend[],
): Friend[] => {
  return friends
    .filter((friend) => friend.birthDate.getMonth() === month - 1)
    .sort((a, b) => a.birthDate.getDate() - b.birthDate.getDate());
};

/**
 * Get all 12 months with their friend counts and sorted friends
 * @returns Array of months with friend data
 */
export const getMonthsWithCounts = (friends: Friend[]): MonthCount[] => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months.map((name, index) => ({
    name,
    number: index + 1,
    friends: getFriendsByMonth(index + 1, friends),
  }));
};

/**
 * Calculate the next birthday age for a friend
 * @param friend - Friend object with birthDate
 * @returns The age the friend will turn on their next birthday
 */
export const calculateNextAge = (friend: Friend): number => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const birthYear = friend.birthDate.getFullYear();
  const birthMonth = friend.birthDate.getMonth();
  const birthDay = friend.birthDate.getDate();

  // Normalize to midnight for day-based comparison
  const todayMidnight = new Date(currentYear, today.getMonth(), today.getDate());
  const birthdayThisYear = new Date(currentYear, birthMonth, birthDay);
  const hasBirthdayPassed = todayMidnight > birthdayThisYear;

  return currentYear - birthYear + (hasBirthdayPassed ? 1 : 0);
};

/**
 * Calculate days until a friend's next birthday
 * @param friend - Friend object with birthDate
 * @returns Number of days until next birthday
 */
export const daysUntilBirthday = (friend: Friend): number => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const birthMonth = friend.birthDate.getMonth();
  const birthDay = friend.birthDate.getDate();

  // Normalize today's date to midnight for day-based comparison
  const todayMidnight = new Date(currentYear, today.getMonth(), today.getDate());

  let nextBirthday = new Date(currentYear, birthMonth, birthDay);

  // If birthday has passed this year, calculate for next year
  if (todayMidnight > nextBirthday) {
    nextBirthday = new Date(currentYear + 1, birthMonth, birthDay);
  }

  const diffTime = nextBirthday.getTime() - todayMidnight.getTime();
  const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  // Handle edge case where birthday is today
  return days === 0 ? 0 : days;
};

/**
 * Get the friend with the next upcoming birthday
 * @param friends - Array of friends
 * @returns Friend with the soonest birthday, or null if no friends
 */
export const getNextBirthdayFriend = (friends: Friend[]): Friend | null => {
  if (friends.length === 0) return null;

  return friends.reduce((closest, current) => {
    const closestDays = daysUntilBirthday(closest);
    const currentDays = daysUntilBirthday(current);
    return currentDays < closestDays ? current : closest;
  });
};

/**
 * Get human-readable text for days until birthday
 * @param days - Number of days
 * @returns Formatted string like "Tomorrow", "In 3 days", etc.
 */
export const getRelativeBirthdayText = (days: number): string => {
  if (days === 0) return "Today";
  if (days === 1) return "Tomorrow";
  if (days <= 7) return `In ${days} days`;
  if (days <= 27) {
    const weeks = Math.round(days / 7);
    return `In ${weeks} week${weeks > 1 ? "s" : ""}`;
  }
  const averageDaysPerMonth = 365.25 / 12;
  const months = Math.round(days / averageDaysPerMonth);
  return `In ${months} month${months > 1 ? "s" : ""}`;
};

/**
 * Get friends with birthdays in the current month
 * @param friends - Array of friends
 * @returns Array of friends with birthdays this month
 */
export const getFriendsThisMonth = (friends: Friend[]): Friend[] => {
  const currentMonth = new Date().getMonth();
  return friends.filter(
    (friend) => friend.birthDate.getMonth() === currentMonth,
  );
};

/**
 * Calculate the most common age among friends
 * @param friends - Array of friends
 * @returns Most common age, or null if no friends
 */
export const getMostCommonAge = (friends: Friend[]): number | null => {
  if (friends.length === 0) return null;

  const ageCounts: Record<number, number> = {};

  friends.forEach((friend) => {
    const age = calculateNextAge(friend);
    ageCounts[age] = (ageCounts[age] || 0) + 1;
  });

  let mostCommonAge = null;
  let maxCount = 0;

  for (const [age, count] of Object.entries(ageCounts)) {
    if (count > maxCount) {
      maxCount = count;
      mostCommonAge = parseInt(age);
    }
  }

  return mostCommonAge;
};

/**
 * Count friends reaching milestone ages (30, 40, 50, etc.) this year
 * @param friends - Array of friends
 * @returns Number of friends reaching milestone ages
 */
export const getMilestoneCount = (friends: Friend[]): number => {
  const milestones = [30, 40, 50, 60, 70, 80, 90, 100];
  return friends.filter((friend) => {
    const age = calculateNextAge(friend);
    return milestones.includes(age);
  }).length;
};
