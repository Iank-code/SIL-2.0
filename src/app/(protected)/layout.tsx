"use client"

import Navbar from "@/components/navbar/Navbar";
import { SessionProvider, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ProtectedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { status } = useSession()

  if (status === "unauthenticated"){
    redirect("/")
  }
  return (
    <html>
      <body>
        <SessionProvider refetchInterval={2 * 60}>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
