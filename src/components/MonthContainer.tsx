import type { MonthCount } from "../data/mockFriends";
import { EmptyMonthContainer } from "./EmptyMonthContainer";
import { FriendInfo } from "./FriendInfo";

interface MonthContainerProps {
  monthBirthdays: MonthCount;
}

export function MonthContainer({ monthBirthdays }: MonthContainerProps) {
  return (
    <div className="flex flex-col rounded-xl bg-white/60 backdrop-blur-sm border border-white/50 shadow-sm overflow-hidden h-100">
      <div className="px-4 py-3 border-b border-border flex justify-between items-center bg-card/50">
        <h3 className="text-foreground text-lg font-bold">
          {monthBirthdays.name}
        </h3>
        <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
          {monthBirthdays.friends.length} B-days
        </span>
      </div>
      {monthBirthdays.friends.length === 0 ? (
        <EmptyMonthContainer />
      ) : (
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {monthBirthdays.friends.map((friend) => (
            <FriendInfo key={friend.id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
}
