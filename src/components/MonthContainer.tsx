import type { MonthCount } from "../utils/friendUtils";
import { EmptyMonthContainer } from "./EmptyMonthContainer";
import { FriendInfo } from "./FriendInfo";

interface MonthContainerProps {
  monthBirthdays: MonthCount;
}

export function MonthContainer({ monthBirthdays }: MonthContainerProps) {
  const currentMonth = new Date().getMonth() + 1;
  const isCurrentMonth = monthBirthdays.number === currentMonth;

  return (
    <div
      className={`flex h-100 flex-col overflow-hidden rounded-xl border shadow-sm backdrop-blur-sm ${
        isCurrentMonth
          ? "border-primary/50 bg-white"
          : "border-white/50 bg-white/60"
      }`}
    >
      <div
        className={`border-muted flex items-center justify-between border-b px-4 py-3 ${isCurrentMonth ? "bg-surface" : ""}`}
      >
        <h3
          className={`text-lg font-bold ${
            isCurrentMonth ? "text-primary" : ""
          }`}
        >
          {monthBirthdays.name}
        </h3>
        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${
            isCurrentMonth
              ? "bg-primary/10 text-primary"
              : "bg-muted text-secondary"
          }`}
        >
          {monthBirthdays.friends.length} B-days
        </span>
      </div>
      {monthBirthdays.friends.length === 0 ? (
        <EmptyMonthContainer />
      ) : (
        <div className="flex-1 space-y-1 overflow-y-auto p-2">
          {monthBirthdays.friends.map((friend) => (
            <FriendInfo key={friend.id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
}
