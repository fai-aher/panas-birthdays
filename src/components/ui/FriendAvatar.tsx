import { useState } from "react";

interface FriendAvatarProps {
  src: string;
  alt: string;
  highlight?: boolean;
  fallbackSrc?: string;
  size?: string;
  ringWidth?: string;
  className?: string;
}

export function FriendAvatar({
  src,
  alt,
  highlight = false,
  fallbackSrc = "pics/default-user.png",
  size = "h-10 w-10",
  ringWidth = "ring-2",
  className = "",
}: FriendAvatarProps) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={`shrink-0 rounded-full object-cover ${
        highlight ? "ring-primary" : "ring-background"
      } ${size} ${ringWidth} ${className}`}
    />
  );
}
