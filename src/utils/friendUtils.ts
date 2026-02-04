import type { Friend, MonthCount } from "../types";

export const getFriendsByMonth = (
  month: number,
  friends: Friend[],
): Friend[] => {
  return friends
    .filter((friend) => friend.birthDate.getMonth() === month - 1)
    .sort((a, b) => a.birthDate.getDate() - b.birthDate.getDate());
};

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

export const calculateNextAge = (friend: Friend): number => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const birthYear = friend.birthDate.getFullYear();
  const birthMonth = friend.birthDate.getMonth();
  const birthDay = friend.birthDate.getDate();

  const todayMidnight = new Date(
    currentYear,
    today.getMonth(),
    today.getDate(),
  );
  const birthdayThisYear = new Date(currentYear, birthMonth, birthDay);
  const hasBirthdayPassed = todayMidnight > birthdayThisYear;

  return currentYear - birthYear + (hasBirthdayPassed ? 1 : 0);
};

export const daysUntilBirthday = (friend: Friend): number => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const birthMonth = friend.birthDate.getMonth();
  const birthDay = friend.birthDate.getDate();

  const todayMidnight = new Date(
    currentYear,
    today.getMonth(),
    today.getDate(),
  );

  let nextBirthday = new Date(currentYear, birthMonth, birthDay);

  if (todayMidnight > nextBirthday) {
    nextBirthday = new Date(currentYear + 1, birthMonth, birthDay);
  }

  const diffTime = nextBirthday.getTime() - todayMidnight.getTime();
  const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return days === 0 ? 0 : days;
};

export const getNextBirthdayFriend = (friends: Friend[]): Friend | null => {
  if (friends.length === 0) return null;

  return friends.reduce((closest, current) => {
    const closestDays = daysUntilBirthday(closest);
    const currentDays = daysUntilBirthday(current);
    return currentDays < closestDays ? current : closest;
  });
};

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

export const getFriendsThisMonth = (friends: Friend[]): Friend[] => {
  const currentMonth = new Date().getMonth();
  return friends.filter(
    (friend) => friend.birthDate.getMonth() === currentMonth,
  );
};

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

export const getMilestoneCount = (friends: Friend[]): number => {
  const milestones = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  return friends.filter((friend) => {
    const age = calculateNextAge(friend);
    return milestones.includes(age);
  }).length;
};

export const getTodayBirthdays = (friends: Friend[]): Friend[] => {
  const today = new Date();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();

  return friends.filter((friend) => {
    const birthMonth = friend.birthDate.getMonth();
    const birthDate = friend.birthDate.getDate();
    return birthMonth === todayMonth && birthDate === todayDate;
  });
};
