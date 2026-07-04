import type { Metadata } from "next";
import "./globals.css";

import Music from "@/components/music/Music";

export const metadata: Metadata = {
  title: "Happy Birthday ❤️",
  description: "Birthday Surprise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Music />
        {children}
      </body>
    </html>
  );
}