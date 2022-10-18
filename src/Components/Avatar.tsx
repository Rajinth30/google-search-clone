import React, { FC } from "react";

interface Props {
  url: string;
  className?: string;
}

const Avatar: FC<Props> = ({ url, className }) => {
  return (
    <div>
      <img
        src={url}
        alt="Profile Photo"
        loading="lazy"
        className={`h-10 w-10 rounded-full object-cover cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      />
    </div>
  );
};

export default Avatar;
