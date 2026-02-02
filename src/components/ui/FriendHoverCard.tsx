import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Friend } from "../../types";
import {
    calculateNextAge,
    daysUntilBirthday,
    getRelativeBirthdayText,
} from "../../utils/friendUtils";

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

    useEffect(() => {
        if (isClosing) {
            // Animate back to original rect
            setIsExpanded(false);
            setCoords({
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
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

    return createPortal(
        <>
            {isClicked && (
                <div
                    className={`fixed inset-0 z-[9998] transition-colors duration-300 ${isClosing ? "bg-transparent" : "bg-black/10"}`} // Subtle backdrop transition
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                    onTouchStart={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                />
            )}
            <div
                ref={cardRef}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={{
                    position: "fixed",
                    top: isExpanded ? coords.top : rect.top,
                    left: isExpanded ? coords.left : rect.left,
                    width: isExpanded ? coords.width : rect.width,
                    height: isExpanded ? "auto" : rect.height,
                    minHeight: isExpanded ? coords.height : rect.height,
                    zIndex: 9999,
                    transformOrigin: "center center",
                }}
                className={`flex flex-col items-center overflow-hidden rounded-xl border bg-white shadow-2xl backdrop-blur-md transition-all duration-300 ease-out ${isExpanded ? "border-primary p-4" : "border-transparent p-2"
                    }`}
            >
                <div
                    className={`relative transition-all duration-300 ${isExpanded ? "mb-2" : "mb-0"
                        }`}
                >
                    {/* Shiny Ring */}
                    <div
                        className={`shiny-ring absolute -inset-2 rounded-full transition-opacity duration-300 ${isExpanded ? "opacity-100" : "opacity-0"}`}
                    />
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
                        className={`relative rounded-full object-cover ring-2 transition-all duration-300 ${isExpanded ? "h-20 w-20 ring-4" : "h-10 w-10"
                            } ${isNextBirthday ? "ring-primary" : "ring-background"}`}
                    />
                </div>

                <div
                    className={`flex flex-col items-center transition-all duration-300 ${isExpanded ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {isExpanded && (
                        <>
                            <h3 className="text-xl font-bold text-foreground">
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
                                <p className="text-muted-foreground mt-1 text-xs font-semibold uppercase tracking-wider">
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
