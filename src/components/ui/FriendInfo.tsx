import { useRef, useState } from "react";
import { friends } from "../../data/friends";
import type { Friend } from "../../types";
import { FriendHoverCard } from "./FriendHoverCard";
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
  const [isClicked, setIsClicked] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const startClosing = () => {
    setIsClosing(true);
    closeTimeoutRef.current = window.setTimeout(() => {
      setShouldRender(false);
      setIsClosing(false);
      setIsClicked(false);
    }, 300); // Animation duration
  };

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isClicked) {
      clearCloseTimeout();
      setIsClosing(false);
      setRect(e.currentTarget.getBoundingClientRect());
      setShouldRender(true);
    }
  };

  const handleCardEnter = () => {
    if (!isClicked) {
      clearCloseTimeout();
      setIsClosing(false);
      setShouldRender(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      closeTimeoutRef.current = window.setTimeout(() => {
        startClosing();
      }, 100);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    clearCloseTimeout();
    setRect(e.currentTarget.getBoundingClientRect());
    setShouldRender(true);
    setIsClicked(true);
    setIsClosing(false);
  };

  const handleClose = () => {
    startClosing();
  };


  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={`group relative flex items-center gap-3 rounded-lg border border-transparent p-2 transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-50 ${isNextBirthday ? "border-muted bg-white" : ""
          }`}
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
          className={`h-10 w-10 shrink-0 rounded-full object-cover ring-2 ${isNextBirthday ? "ring-primary" : "ring-background"
            }`}
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
          className={`shrink-0 rounded px-2 py-1 text-xs font-bold ${isNextBirthday
            ? "bg-primary text-white"
            : "bg-primary/10 text-primary"
            }`}
        >
          {String(friend.birthDate.getDate()).padStart(2, "0")}
        </div>
      </div>

      {shouldRender && rect && (
        <FriendHoverCard
          friend={friend}
          isNextBirthday={isNextBirthday}
          rect={rect}
          onClose={handleClose}
          isClicked={isClicked}
          isClosing={isClosing}
          onMouseEnter={handleCardEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </>
  );
}
