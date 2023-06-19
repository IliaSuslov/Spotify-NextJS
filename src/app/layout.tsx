import { Figtree } from "next/font/google";

import SideMenu from "./components/SideMenu";
import ToasterProvider from "../../providers/ToasterProvider";
import UserProvider from "../../providers/UserProvider";
import ModalProvider from "../../providers/ModalProvider";
import SupabaseProvider from "../../providers/SupabaseProvider";
import Player from "./components/Player";

import "./globals.css";
import getSongsByUserId from "../../actions/getSongsByUserId";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify Clone",
  description: "Spotify Clone",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <SideMenu songs={userSongs}>{children}</SideMenu>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
