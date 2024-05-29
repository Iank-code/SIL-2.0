"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/lib/store";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });
import "./globals.css";

export default function RootLayout({
  children,
  session,
}: Readonly<{ children: React.ReactNode, session: any }>) {
  console.log(typeof session)
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <SessionProvider session={session} refetchInterval={2 * 60}>
            <Navbar />
            {children}
          </SessionProvider>
        </Provider>
      </body>
    </html>
  );
}
