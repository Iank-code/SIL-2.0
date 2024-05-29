import React from "react";
import { useSession, signOut } from "next-auth/react";
import AuthenticateButton from "../authenticateButton/AuthenticateButton";
import { Button } from "../ui/button";
import { AvatarProfile } from "../avator/avator";

export default function Navbar() {
  const { data: session, status } = useSession();
  return (
    <div className="flex items-center justify-between p-7 mb-5 shadow-md max-[600px]:p-3 ">
      <span className="font-bold text-2xl max-[600px]:text-sm max-[600px]:wrap">
        Savannah Informatics - Frontend Role
      </span>
      {session ? (
        <div className="flex items-center gap-4">
          <AvatarProfile name={`${session.user!.name}`} />
          <h4 className="max-[600px]:hidden">{session.user!.name}</h4>
          <Button
            onClick={() => signOut("google")}
          >
            Logout
          </Button>
        </div>
      ) : (
        <div>
          <AuthenticateButton />
        </div>
      )}
    </div>
  );
}
