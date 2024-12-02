import { api } from "@/convex/_generated/api";
import { auth } from "@clerk/nextjs/server";
import { preloadQuery } from "convex/nextjs";
import React from "react";
import ProfileComponent from "./_components/profile-component";

type Props = {};

const Profile = async (props: Props) => {
  const { userId } = await auth();

  const preloadedUserInfo = await preloadQuery(api.users.readUser, {
    userId: userId!,
  });
  return (
    <div className="flex flex-col h-screen bg-blend-darken text-gray-100">
      <ProfileComponent preloadedUserInfo={preloadedUserInfo} />
    </div>
  );
};

export default Profile;
