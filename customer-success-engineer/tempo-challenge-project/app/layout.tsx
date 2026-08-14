import { CroctProvider } from "@croct/plug-next/CroctProvider";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { fraunces, inter, plexMono } from "./fonts";
import EventTracker from "@/components/EventTracker";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tempo — Time-blocking for focused teams",
  description:
    "Tempo scans your team's week, finds the gaps between meetings, and quietly blocks off real focus time — before it gets booked over.",
  openGraph: {
    title: "Tempo — Time-blocking for focused teams",
    description:
      "Turn empty calendars into deep work. Free for teams up to 5, no credit card required.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (<html
    lang="en"
    className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}
  >
    <body>
      <CroctProvider>
        {children}
      </CroctProvider>
      <EventTracker />
    </body>
  </html>);
}
