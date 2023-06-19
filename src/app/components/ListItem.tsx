"use client";

import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

interface ListItemProps {
  image?: any;
  name: string;
  href: string;
}
export default function ListItem({ image, name, href }: ListItemProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(href);
  };
  return (
    <button
      onClick={handleClick}
      className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
    >
      <div className="flex justify-center items-center relative min-h-[64px] min-w-[64px]">
        {image || <AiFillHeart className="text-green-500" size={38} />}
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
        <FaPlay className="text-black" />
      </div>
    </button>
  );
}
