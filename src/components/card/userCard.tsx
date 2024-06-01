import React from "react";
import { AvatarProfile } from "../avator/avator";
import Link from "next/link";

interface userData {
  id: number;
  name: string;
  email: string;
}
interface propType {
  userData: userData;
  albums?: number;
}
// #DAE7FF4D
export default function UserCard({ userData, albums }: propType) {
  console.log(albums);
  return (
    <Link
      href={`/user/${userData.id}`}
      className="flex flex-col gap-2 justify-flex-start bg-[#DAE7FF4D] rounded-md py-8 px-6 max-[600px]:text-sm flex-nowrap"
    >
      <AvatarProfile name={`${userData.name}`} bg="#DAE7FF" />
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-bold max-[600px]:text-sm">
          {userData.name}
        </h3>
        <span className=" flex flex-nowrap text-md max-[600px]:text-sm">
          {userData.email}
        </span>
        <span className="text-md max-[600px]:text-sm">
          {albums && albums} albums
        </span>
      </div>
    </Link>
  );
}
