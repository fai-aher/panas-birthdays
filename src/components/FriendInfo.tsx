import type { Friend } from "../data/mockFriends";

interface FriendInfoProps {
  friend: Friend;
}

function FriendInfo({ friend }: FriendInfoProps) {
  const calculateNextAge = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const birthYear = friend.birthDate.getFullYear();
    const birthMonth = friend.birthDate.getMonth();
    const birthDay = friend.birthDate.getDate();

    const birthdayThisYear = new Date(currentYear, birthMonth, birthDay);
    const hasBirthdayPassed = today > birthdayThisYear;

    return currentYear - birthYear + (hasBirthdayPassed ? 1 : 0);
  };

  return (
    <div className="group flex items-center gap-3 p-2 rounded-lg hover:bg-card transition-all cursor-pointer">
      <div
        className="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 ring-2 ring-background shrink-0"
        style={{
          backgroundImage: `url("${friend.profilePicture}")`,
        }}
      ></div>
      <div className="flex-1 min-w-0">
        <p className="text-foreground text-sm font-semibold truncate">
          {friend.name}
        </p>
        <p className="text-muted-foreground text-xs truncate">
          Turning {calculateNextAge()}
        </p>
      </div>
      <div className="shrink-0 bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold">
        {String(friend.birthDate.getDate()).padStart(2, "0")}
      </div>
    </div>
  );
}

export default FriendInfo;
