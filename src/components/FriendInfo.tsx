import type { Friend } from "../data/mockFriends";
import { calculateNextAge } from "../utils/friendUtils";

interface FriendInfoProps {
  friend: Friend;
}

export function FriendInfo({ friend }: FriendInfoProps) {
  return (
    <div className="group flex items-center gap-3 p-2 rounded-lg hover:bg-card transition-all">
      <div
        className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 ring-2 ring-background shrink-0"
        style={{
          backgroundImage: `url("${friend.profilePicture}")`,
        }}
        aria-label={`${friend.name}'s profile picture`}
        role="img"
      ></div>
      <div className="flex-1 min-w-0">
        <p className="text-foreground text-sm font-semibold truncate">
          {friend.name}
        </p>
        <p className="text-muted-foreground text-xs truncate">
          Turning {calculateNextAge(friend)}
        </p>
      </div>
      <div className="shrink-0 bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold">
        {String(friend.birthDate.getDate()).padStart(2, "0")}
      </div>
    </div>
  );
}
