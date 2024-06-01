import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "../ui/button";

export default function AuthenticateButton() {
  const { data: session, status } = useSession();
  return (
    <Button onClick={() => signIn("google", { callbackUrl: "/home" })}>
      {status === "authenticated"
        ? `Signed in as ${session.user!.email}`
        : "Login With Google"}
    </Button>
  );
}
