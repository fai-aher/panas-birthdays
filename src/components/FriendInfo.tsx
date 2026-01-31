import type { Friend } from "../data/mockFriends";
import { calculateNextAge } from "../utils/friendUtils";

interface FriendInfoProps {
  friend: Friend;
}

export function FriendInfo({ friend }: FriendInfoProps) {
  return (
    <div className="group flex items-center gap-3 rounded-lg p-2">
      <img
        src={friend.profilePicture}
        alt={`${friend.name}'s profile picture`}
        className="ring-background h-10 w-10 shrink-0 rounded-full object-cover ring-2"
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{friend.name}</p>
        <p className="text-secondary truncate text-xs">
          Turning {calculateNextAge(friend)}
        </p>
      </div>
      <div className="bg-primary/10 text-primary shrink-0 rounded px-2 py-1 text-xs font-bold">
        {String(friend.birthDate.getDate()).padStart(2, "0")}
      </div>
    </div>
  );
}
