import { Calendar, PartyPopper, TrendingUp, User } from "lucide-react";
import { friends } from "../../data/friends";
import {
  daysUntilBirthday,
  getFriendsThisMonth,
  getMilestoneCount,
  getMostCommonAge,
  getNextBirthdayFriend,
  getRelativeBirthdayText,
  getTodayBirthdays,
} from "../../utils/friendUtils";
import { BirthdayCelebration } from "../ui/BirthdayCelebration";
import { FriendAvatar } from "../ui/FriendAvatar";
import { MetricCard } from "../ui/MetricCard";

export function MetricCardContainer() {
  const todayBirthdays = getTodayBirthdays(friends);

  // If there are birthdays today, show the celebration component
  if (todayBirthdays.length > 0) {
    return <BirthdayCelebration birthdayFriends={todayBirthdays} />;
  }

  // Otherwise, show the regular metrics
  const nextFriend = getNextBirthdayFriend(friends);
  const thisMonthCount = getFriendsThisMonth(friends).length;
  const mostCommonAge = getMostCommonAge(friends);
  const milestoneCount = getMilestoneCount(friends);

  return (
    <section className="mx-auto grid max-w-400 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard title="Total Friends" icon={User}>
        <p className="text-3xl font-bold">{friends.length}</p>
      </MetricCard>

      <MetricCard title="Next Up" icon={PartyPopper}>
        {nextFriend ? (
          <div className="flex items-center gap-4">
            <FriendAvatar
              src={nextFriend.profilePicture}
              alt={`${nextFriend.name}'s profile picture`}
              highlight={true}
              size="h-12 w-12 lg:h-16 lg:w-16"
              ringWidth="ring-0"
              className="border-primary border-4 shadow-sm"
            />
            <div className="flex flex-col">
              <p className="truncate text-xl font-bold">{nextFriend.name}</p>
              <p className="text-primary text-sm font-semibold">
                {getRelativeBirthdayText(daysUntilBirthday(nextFriend))}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-secondary text-sm">No upcoming birthdays</p>
        )}
      </MetricCard>

      <MetricCard title="This Month" icon={Calendar}>
        <p className="text-3xl font-bold">{thisMonthCount}</p>
      </MetricCard>

      <MetricCard title="Monthly Highlight" icon={TrendingUp}>
        <div className="mt-1 flex flex-col gap-1">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold">Most Common Age</span>
            <span className="text-primary font-bold">
              {mostCommonAge ?? "N/A"}
            </span>
          </div>
          <div className="text-secondary flex items-center justify-between text-xs">
            <span>Milestone Birthdays</span>
            <span>{milestoneCount} Friends</span>
          </div>
        </div>
      </MetricCard>
    </section>
  );
}
