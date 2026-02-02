import { friends } from "../../data/friends";
import type { Friend } from "../../types";
import {
  calculateNextAge,
  daysUntilBirthday,
  getNextBirthdayFriend,
  getRelativeBirthdayText,
} from "../../utils/friendUtils";

interface FriendInfoProps {
  friend: Friend;
}

export function FriendInfo({ friend }: FriendInfoProps) {
  const isNextBirthday = getNextBirthdayFriend(friends)!.id === friend.id;

  return (
    <div
      className={`group flex items-center gap-3 rounded-lg p-2 ${isNextBirthday ? "border-muted border bg-white" : ""}`}
    >
      <img
        src={friend.profilePicture}
        alt={`${friend.name}'s profile picture`}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src =
            friend.sex === "male"
              ? "/pics/default-man.jpg"
              : "/pics/default-woman.jpg";
        }}
        className={`h-10 w-10 shrink-0 rounded-full object-cover ring-2 ${isNextBirthday ? "ring-primary" : "ring-background"}`}
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{friend.name}</p>
        {isNextBirthday ? (
          <p className="text-primary truncate text-xs font-semibold">
            {getRelativeBirthdayText(daysUntilBirthday(friend))}
          </p>
        ) : (
          <p className="text-secondary truncate text-xs">
            Turning {calculateNextAge(friend)}
          </p>
        )}
      </div>
      <div
        className={`shrink-0 rounded px-2 py-1 text-xs font-bold ${isNextBirthday ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}
      >
        {String(friend.birthDate.getDate()).padStart(2, "0")}
      </div>
    </div>
  );
}
