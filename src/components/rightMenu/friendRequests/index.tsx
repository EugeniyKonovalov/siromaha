import Card from "@/components/ui/Card";
import Link from "next/link";
import FriendRequestsItem from "./FriendRequestsItem";

const FriendRequests = () => {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex w-full items-center justify-between">
        <span className="text-gray-300">Friend Requests</span>
        <Link href={"/"} className="text-sky-500 text-xs hover:underline">
          See all
        </Link>
      </div>
      <FriendRequestsItem
        imageUrl="/pexels-thinoshi-liyanage.jpg"
        name="Daenerys Targaryen"
      />
      <FriendRequestsItem
        imageUrl="/pexels-thinoshi-liyanage.jpg"
        name="Daenerys Targaryen"
      />
      <FriendRequestsItem
        imageUrl="/pexels-thinoshi-liyanage.jpg"
        name="Daenerys Targaryen"
      />
    </Card>
  );
};

export default FriendRequests;
