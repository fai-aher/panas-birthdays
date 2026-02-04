import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Friend } from "../../types";
import { calculateNextAge, daysUntilBirthday } from "../../utils/friendUtils";
import { FriendAvatar } from "./FriendAvatar";

interface FriendHoverCardProps {
  friend: Friend;
  isNextBirthday: boolean;
  rect: DOMRect;
  onClose: () => void;
  isClicked: boolean;
  isClosing: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function FriendHoverCard({
  friend,
  isNextBirthday,
  rect,
  onClose,
  isClicked,
  isClosing,
  onMouseEnter,
  onMouseLeave,
}: FriendHoverCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height,
  });

  // Handle keyboard events
  useEffect(() => {
    if (!isClicked) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isClicked, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (!isClicked) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isClicked]);

  // Focus management
  useEffect(() => {
    if (isClicked && cardRef.current && isExpanded) {
      cardRef.current.focus();
    }
  }, [isClicked, isExpanded]);

  useEffect(() => {
    if (isClosing) {
      // Animate back to original rect
      requestAnimationFrame(() => {
        setIsExpanded(false);
        setCoords({
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        });
      });
      return;
    }

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const targetWidth = 240;
    const estimatedHeight = 220;

    let targetTop = rect.top + rect.height / 2 - estimatedHeight / 2;
    let targetLeft = rect.left + rect.width / 2 - targetWidth / 2;

    if (targetTop < 20) targetTop = 20;
    if (targetTop + estimatedHeight > viewportHeight - 20)
      targetTop = viewportHeight - estimatedHeight - 20;
    if (targetLeft < 20) targetLeft = 20;
    if (targetLeft + targetWidth > viewportWidth - 20)
      targetLeft = viewportWidth - targetWidth - 20;

    // Trigger animation frame
    requestAnimationFrame(() => {
      setCoords({
        top: targetTop,
        left: targetLeft,
        width: targetWidth,
        height: estimatedHeight,
      });
      setIsExpanded(true);
    });
  }, [rect, isClosing]);

  const daysLeft = daysUntilBirthday(friend);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.stopPropagation();
      onClose();
    },
    [onClose],
  );

  return createPortal(
    <>
      {isClicked && (
        <div
          className={`fixed inset-0 z-9998 transition-colors duration-300 ${isClosing ? "bg-transparent" : "bg-black/10"}`}
          onClick={handleBackdropClick}
          onTouchStart={handleBackdropClick}
          aria-hidden="true"
        />
      )}
      <div
        ref={cardRef}
        role="dialog"
        aria-modal={isClicked ? "true" : undefined}
        aria-label={`${friend.name}'s birthday information`}
        tabIndex={isClicked ? 0 : -1}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "fixed",
          top: isExpanded ? coords.top : rect.top,
          left: isExpanded ? coords.left : rect.left,
          width: isExpanded ? coords.width : rect.width,
          height: isExpanded ? "auto" : rect.height,
          minHeight: isExpanded ? coords.height : rect.height,
          zIndex: 9999,
          transformOrigin: "center center",
          willChange: isClosing ? "transform, opacity" : "auto",
        }}
        className={`flex flex-col items-center overflow-hidden rounded-xl border bg-white shadow-2xl backdrop-blur-md transition-all duration-300 ease-out ${
          isExpanded ? "border-primary p-4" : "border-transparent p-2"
        }`}
      >
        <div
          className={`relative transition-all duration-300 ${
            isExpanded ? "mb-2" : "mb-0"
          }`}
        >
          {/* Shiny Ring */}
          <div
            className={`shiny-ring absolute -inset-2 rounded-full transition-opacity duration-300 ${isExpanded ? "opacity-100" : "opacity-0"}`}
          />
          <FriendAvatar
            src={friend.profilePicture}
            alt={`${friend.name}'s profile picture`}
            highlight={isNextBirthday}
            size={isExpanded ? "h-20 w-20" : "h-10 w-10"}
            ringWidth={isExpanded ? "ring-4" : "ring-2"}
            className="relative transition-all duration-300"
          />
        </div>

        <div
          className={`flex flex-col items-center transition-all duration-300 ${
            isExpanded ? "opacity-100" : "opacity-0"
          }`}
        >
          {isExpanded && (
            <>
              <h3 className="text-foreground text-xl font-bold">
                {friend.name}
              </h3>
              <div className="flex flex-col items-center gap-0.5 text-center">
                {isNextBirthday ? (
                  <>
                    <p className="text-primary text-base font-bold">
                      {daysLeft === 0
                        ? "Today!"
                        : daysLeft === 1
                          ? "Tomorrow!"
                          : `${daysLeft} days left`}
                    </p>
                    <p className="text-secondary text-base font-medium">
                      Turning {calculateNextAge(friend)}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-secondary text-base font-medium">
                      Turning {calculateNextAge(friend)}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {daysLeft === 0
                        ? "Today!"
                        : daysLeft === 1
                          ? "Tomorrow!"
                          : `${daysLeft} days left`}
                    </p>
                  </>
                )}
                <p className="text-muted-foreground mt-1 text-xs font-semibold tracking-wider uppercase">
                  {new Intl.DateTimeFormat("en-US", {
                    month: "long",
                    day: "numeric",
                  }).format(friend.birthDate)}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>,
    document.body,
  );
}
