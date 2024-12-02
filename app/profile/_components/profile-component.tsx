"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Preloaded, useMutation, usePreloadedQuery } from "convex/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowLeft, Camera } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  preloadedUserInfo: Preloaded<typeof api.users.readUser>;
};

const ProfileComponent = ({ preloadedUserInfo }: Props) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const userInfo = usePreloadedQuery(preloadedUserInfo);

  //   const updatedUserMutation = useMutation(api.users.updateUser);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: userInfo?.name || "",
    },
  });

  const onSubmit = () => {
    return;
  };

  const handleProfileImageChange = () => {
    return;
  };

  return (
    <>
      <header className="bg-gray-600 p-4 flex items-center">
        <Link href="/chat">
          <Button className="mr-4" variant="ghost" size="icon">
            <ArrowLeft className="w-6 h-6" />
          </Button>
        </Link>
        <h1>Profile</h1>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4 flex flex-col items-center">
          <div className="relative mb-6">
            <Avatar className="size-32">
              <AvatarImage
                src={userInfo?.profileImage}
                alt={userInfo?.name || ""}
              />
              <AvatarFallback>{userInfo?.name || ""}</AvatarFallback>
            </Avatar>
            <label
              htmlFor="profile-image"
              className="absolute bottom-0 right-0 bg-cyan-500 rounded-full p-2 cursor-pointer hover:bg-sky-300"
            >
              <Camera />
              <input
                type="file"
                id="profile-image"
                className="hidden"
                accept="image/*"
                onChange={handleProfileImageChange}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
