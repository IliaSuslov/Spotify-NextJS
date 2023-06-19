"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SideMenuRoute from "./SideMenuRoute";
import Library from "./Library";
import { Song } from "../../../types";

import { twMerge } from "tailwind-merge";
import usePlayer from "../hooks/usePlayer";



export default function SideMenu({
  children,
  songs,
}: {
  children: React.ReactNode;
  songs: Song[];
}) {
  const pathname = usePathname();
  const player = usePlayer()
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );

  return (
    <div className={twMerge('flex h-full', player.activeId && "h-[calc(100%-80px)]")}>
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-5">
            {routes.map((route) => (
              <SideMenuRoute key={route.label} {...route} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library songs={songs} />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
}