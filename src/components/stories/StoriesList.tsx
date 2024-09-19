"use client";

import { StoriesType } from "@/types/stories";
import StoriesItem from "./StoriesItem";
import { useOptimistic, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { CldUploadWidget } from "next-cloudinary";
import AddStories from "./AddStories";
import { addStory } from "@/lib/actions/stories";

const StoriesList = ({
  stories,
  userId,
}: {
  stories: StoriesType[];
  userId: string;
}) => {
  const { user } = useUser();

  const [storiesList, setStoriesList] = useState<StoriesType[]>(stories);
  const [img, setImg] = useState<any>(null);

  const [optimisticStories, addOptimisticStory] = useOptimistic(
    storiesList,
    (state, value: StoriesType) => [
      value,
      ...state?.filter((story) => story?.userId !== userId),
    ]
  );

  const addStoryAction = async () => {
    if (!img?.secure_url) return;

    addOptimisticStory({
      id: Math.random(),
      img: img?.secure_url,
      createdAt: new Date(),
      expiresAt: new Date(),
      userId: userId,
      user: {
        id: userId,
        username: "Sending...",
        avatar: user?.imageUrl || "/noAvatar.png",
        name: "",
        surename: "",
        createdAt: new Date(),
      },
    });

    try {
      const createdStory = await addStory(img?.secure_url);
      setStoriesList((prev) => [
        createdStory,
        ...prev?.filter((story) => story?.userId !== userId),
      ]);
      setImg(null);
    } catch (error) {}
  };

  return (
    <div className="flex gap-8 w-max">
      <CldUploadWidget
        uploadPreset="social"
        onSuccess={(result) => {
          setImg(result.info);
        }}
      >
        {({ open }) => {
          return (
            <AddStories
              open={open}
              imgUrl={img?.secure_url || user?.imageUrl || "/noAvatar.png"}
              isSelectImg={!!img?.secure_url}
              action={addStoryAction}
            />
          );
        }}
      </CldUploadWidget>
      {optimisticStories?.map((story) => (
        <StoriesItem
          key={story?.id}
          imgUrl={story?.img}
          name={story?.user?.username}
        />
      ))}
    </div>
  );
};

export default StoriesList;
