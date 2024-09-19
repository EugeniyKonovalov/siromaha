"use client";

import Card from "@/components/shared/Card";
import Image from "next/image";
import AddPostInput from "./AddPostInput";
import PostOptionsItem from "./PostOptionsItem";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

const AddPost = () => {
  const { user, isLoaded } = useUser();
  const [image, setImage] = useState<any>();

  if (!isLoaded) {
    return "Loading...";
  }

  return (
    <Card>
      <div className="flex gap-4 justify-between text-sm">
        <Image
          src={user?.imageUrl || "/noAvatar.png"}
          alt="avatar"
          width={48}
          height={48}
          className="w-12 h-12 object-cover rounded-full"
        />
        <div className="flex flex-col w-full gap-4">
          <AddPostInput image={image?.secure_url || ""} />
          <div className="flex items-center flex-wrap gap-4 text-gray-400">
            <CldUploadWidget
              uploadPreset="social"
              onSuccess={(result) => {
                setImage(result.info);
              }}
            >
              {({ open }) => {
                return (
                  <PostOptionsItem
                    imageUrl="/addimage.png"
                    name="Photo"
                    onClick={() => open()}
                  />
                );
              }}
            </CldUploadWidget>
            <PostOptionsItem imageUrl="/addvideo.png" name="Video" />
            <PostOptionsItem imageUrl="/poll.png" name="Poll" />
            <PostOptionsItem imageUrl="/addevent.png" name="Event" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AddPost;
