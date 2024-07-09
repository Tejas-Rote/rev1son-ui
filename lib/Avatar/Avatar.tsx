import React from "react";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "small" | "medium" | "large";
  className?: string;
  initials?: string;
}

const sizeClasses = {
  small: "w-8 h-8",
  medium: "w-12 h-12",
  large: "w-16 h-16",
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "medium",
  className,
  initials,
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-full bg-secondary ${sizeClasses[size]} ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="rounded-full w-full h-full object-cover"
        />
      ) : (
        <span className="text-white text-center">{initials}</span>
      )}
    </div>
  );
};

export default Avatar;
