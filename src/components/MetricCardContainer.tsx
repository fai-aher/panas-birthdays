import { useMemo } from "react";
import { Calendar, PartyPopper, TrendingUp, User } from "lucide-react";
import { mockFriends } from "../data/mockFriends";
import {
  daysUntilBirthday,
  getFriendsThisMonth,
  getMilestoneCount,
  getMostCommonAge,
  getNextBirthdayFriend,
  getRelativeBirthdayText,
} from "../utils/friendUtils";
import { MetricCard } from "./MetricCard";

export function MetricCardContainer() {
  const nextFriend = useMemo(
    () => getNextBirthdayFriend(mockFriends),
    [],
  );
  const thisMonthCount = useMemo(
    () => getFriendsThisMonth(mockFriends).length,
    [],
  );
  const mostCommonAge = useMemo(
    () => getMostCommonAge(mockFriends),
    [],
  );
  const milestoneCount = useMemo(
    () => getMilestoneCount(mockFriends),
    [],
  );

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto max-w-400">
      <MetricCard title="Total Friends" icon={User}>
        <p className="text-foreground text-3xl font-bold">{mockFriends.length}</p>
      </MetricCard>

      <MetricCard title="Next Up" icon={PartyPopper}>
        {nextFriend ? (
          <>
            <p className="text-foreground text-xl font-bold truncate">
              {nextFriend.name}
            </p>
            <p className="text-primary text-sm font-semibold">
              {getRelativeBirthdayText(daysUntilBirthday(nextFriend))}
            </p>
          </>
        ) : (
          <p className="text-muted-foreground text-sm">No upcoming birthdays</p>
        )}
      </MetricCard>

      <MetricCard title="This Month" icon={Calendar}>
        <p className="text-foreground text-3xl font-bold">{thisMonthCount}</p>
      </MetricCard>

      <MetricCard title="Monthly Highlight" icon={TrendingUp}>
        <div className="flex flex-col gap-1 mt-1">
          <div className="flex justify-between items-center text-sm">
            <span className="text-foreground font-semibold">
              Most Common Age
            </span>
            <span className="text-primary font-bold">
              {mostCommonAge ?? "N/A"}
            </span>
          </div>
          <div className="flex justify-between items-center text-xs text-muted-foreground">
            <span>Milestone Birthdays</span>
            <span>{milestoneCount} Friends</span>
          </div>
        </div>
      </MetricCard>
    </section>
  );
}
