import type { MonthCount } from "../../types";
import { FriendInfo } from "../ui/FriendInfo";
import { EmptyMonthContainer } from "./EmptyMonthContainer";

interface MonthContainerProps {
  monthBirthdays: MonthCount;
  globalMaxBirthdays: number;
}

export function MonthContainer({
  monthBirthdays,
  globalMaxBirthdays,
}: MonthContainerProps) {
  const currentMonth = new Date().getMonth() + 1;
  const isCurrentMonth = monthBirthdays.number === currentMonth;

  // Constants consistent with FriendInfo height + gap + padding
  const ITEM_HEIGHT = 60; // Approximate height of one friend item (40px img + padding/border)
  const HEADER_HEIGHT = 58; // Header height
  const PADDING_BOTTOM = 16; // Bottom padding

  const desktopMax = Math.min(globalMaxBirthdays, 6);
  const mobileMax = 6;

  const desktopHeight =
    HEADER_HEIGHT + PADDING_BOTTOM + desktopMax * ITEM_HEIGHT;
  const mobileMaxHeight =
    HEADER_HEIGHT + PADDING_BOTTOM + mobileMax * ITEM_HEIGHT;

  return (
    <div
      style={
        {
          "--desktop-height": `${desktopHeight}px`,
          "--mobile-max-height": `${mobileMaxHeight}px`,
        } as React.CSSProperties
      }
      className={`flex h-auto w-full flex-col overflow-hidden rounded-xl border shadow-sm backdrop-blur-sm sm:h-[var(--desktop-height)] max-h-[var(--mobile-max-height)] sm:max-h-none ${isCurrentMonth
          ? "border-primary/50 bg-white"
          : "border-white/50 bg-white/60"
        }`}
    >
      <div
        className={`border-muted flex items-center justify-between border-b px-4 py-3 ${isCurrentMonth ? "bg-surface" : ""}`}
      >
        <h3
          className={`text-lg font-bold ${isCurrentMonth ? "text-primary" : ""
            }`}
        >
          {monthBirthdays.name}
        </h3>
        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${isCurrentMonth
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
