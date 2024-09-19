"use client";

import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";

import { User } from "@prisma/client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

import { useActionState, useState } from "react";
import { MdClose } from "react-icons/md";
import UpdateBtn from "./UpdateBtn";
import { updateProfile } from "@/lib/actions/user";
import useDisclosure from "@/hooks/useDisclosure";

const UpdateUser = ({ user }: { user: User }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [cover, setCover] = useState<any>();

  const [state, formAction] = useActionState(updateProfile, {
    success: false,
    error: false,
  });

  const onOpenHandler = (): void => {
    onOpen();
  };

  const onCloseHandler = (): void => {
    onClose();
  };

  return (
    <div>
      <Button className="bg-transparent px-0" onClick={onOpenHandler}>
        <span className="text-sky-500 text-xs hover:underline">Update</span>
      </Button>
      {isOpen ? (
        <div className="fixed overscroll-none w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
          <form
            action={(formData) =>
              formAction({
                formData,
                cover: cover?.secure_url || user?.cover || "",
              })
            }
            className="p-12 bg-slate-700 rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/3 relative"
          >
            <Button
              className="bg-transparent px-0 absolute right-2 top-3 "
              onClick={onCloseHandler}
            >
              <MdClose size={20} />
            </Button>
            <h1 className="text-lg">Update profile</h1>
            <p className="mt-4 text-xs text-gray-300">
              Use the navbar profile button to change the avatar or username
            </p>

            <div className="flex flex-col gap-6 my-4">
              <CldUploadWidget
                uploadPreset="social"
                onSuccess={(result) => setCover(result.info)}
              >
                {({ open }) => {
                  return (
                    <div className="flex flex-col gap-2">
                      <label htmlFor="" className="text-xs text-gray-300">
                        Cover Picture
                      </label>
                      <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => open()}
                      >
                        <Image
                          src={
                            cover?.secure_url || user?.cover || "/noCover.jpg"
                          }
                          alt=""
                          width={48}
                          height={32}
                          className="w-12 h-8 rounded-md object-cover shadow-lg"
                        />
                        <span className="text-xs underline text-gray-400">
                          Change
                        </span>
                      </div>
                    </div>
                  );
                }}
              </CldUploadWidget>

              <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
                <Input
                  label="First Name"
                  input={{
                    type: "text",
                    name: "name",
                    id: "name",
                    placeholder: user?.name || "John",
                  }}
                />
                <Input
                  label="Surname"
                  input={{
                    type: "text",
                    name: "surename",
                    id: "surename",
                    placeholder: user?.surename || "Doe",
                  }}
                />
                <Input
                  label="Description"
                  input={{
                    type: "text",
                    name: "description",
                    id: "description",
                    placeholder: user?.description || "Life is beautiful...",
                  }}
                />
                <Input
                  label="City"
                  input={{
                    type: "text",
                    name: "city",
                    id: "city",
                    placeholder: user?.city || "Leopolis",
                  }}
                />
                <Input
                  label="School"
                  input={{
                    type: "text",
                    name: "school",
                    id: "school",
                    placeholder: user?.school || "MIT",
                  }}
                />
                <Input
                  label="Work"
                  input={{
                    type: "text",
                    name: "work",
                    id: "work",
                    placeholder: user?.work || "Google Inc.",
                  }}
                />
                <Input
                  label="Website"
                  input={{
                    type: "text",
                    name: "website",
                    id: "website",
                    placeholder: user?.website || "https://example.com",
                  }}
                />
              </div>
              <UpdateBtn />
            </div>
            {state?.success ? (
              <span className="text-green-600">Profile has been updated!</span>
            ) : null}
            {state?.error ? (
              <span className="text-red-600">Something went wrong!</span>
            ) : null}
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default UpdateUser;
