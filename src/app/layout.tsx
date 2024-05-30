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
}: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <SessionProvider refetchInterval={2 * 60}>
            <Navbar />
            {children}
          </SessionProvider>
        </Provider>
      </body>
    </html>
  );
}
