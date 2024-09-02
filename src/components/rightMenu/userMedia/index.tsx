import Card from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";
import UserMediaItem from "./UserMediaItem";

const UserMedia = ({ userId }: { userId: string | number }) => {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex w-full items-center justify-between">
        <span className="text-gray-300">User Media</span>
        <Link href={"/"} className="text-sky-500 text-xs hover:underline">
          See all
        </Link>
      </div>
      <div className="flex gap-4 justify-between flex-wrap">
        <UserMediaItem imgUrl="/pexels-erikmdr-prcfi-5.jpg" />
        <UserMediaItem imgUrl="/pexels-kammeran-gonzalez-keola.jpg" />
        <UserMediaItem imgUrl="/pexels-nana-3.jpg" />
        <UserMediaItem imgUrl="/pexels-kammeran-gonzalez-keola.jpg" />
        <UserMediaItem imgUrl="/pexels-helloaesthe.jpg" />
        <UserMediaItem imgUrl="/pexels-mrvyyl-23.jpg" />
        <UserMediaItem imgUrl="/pexels-kammeran-gonzalez-keola.jpg" />
        <UserMediaItem imgUrl="/pexels-erikmdr-prcfi-5.jpg" />
      </div>
    </Card>
  );
};

export default UserMedia;
