"use client";

import { api } from "@/convex/_generated/api";
import { Preloaded, useMutation, usePreloadedQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  preloadedUserInfo: Preloaded<typeof api.users.readUser>;
};

const ProfileComponent = ({ preloadedUserInfo }: Props) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const userInfo = usePreloadedQuery(preloadedUserInfo);

  //   const updatedUserMutation = useMutation(api.users.updateUser);

  return <div>ProfileComponent</div>;
};

export default ProfileComponent;
