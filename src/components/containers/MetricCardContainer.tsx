import { Calendar, PartyPopper, TrendingUp, User } from "lucide-react";
import { friends } from "../../data/friends";
import {
  daysUntilBirthday,
  getFriendsThisMonth,
  getMilestoneCount,
  getMostCommonAge,
  getNextBirthdayFriend,
  getRelativeBirthdayText,
} from "../../utils/friendUtils";
import { MetricCard } from "../ui/MetricCard";

export function MetricCardContainer() {
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
          <>
            <p className="truncate text-xl font-bold">{nextFriend.name}</p>
            <p className="text-primary text-sm font-semibold">
              {getRelativeBirthdayText(daysUntilBirthday(nextFriend))}
            </p>
          </>
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
