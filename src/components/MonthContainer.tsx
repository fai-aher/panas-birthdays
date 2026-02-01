import type { MonthCount } from "../utils/friendUtils";
import { EmptyMonthContainer } from "./EmptyMonthContainer";
import { FriendInfo } from "./FriendInfo";

interface MonthContainerProps {
  monthBirthdays: MonthCount;
}

export function MonthContainer({ monthBirthdays }: MonthContainerProps) {
  return (
    <div className="flex h-100 flex-col overflow-hidden rounded-xl border border-white/50 bg-white shadow-sm backdrop-blur-sm">
      <div className="border-muted flex items-center justify-between border-b px-4 py-3">
        <h3 className="text-lg font-bold">{monthBirthdays.name}</h3>
        <span className="text-secondary bg-muted rounded-full px-2 py-1 text-xs font-medium">
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
