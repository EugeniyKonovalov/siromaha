import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaLink,
  FaMapMarkedAlt,
  FaUniversity,
} from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";

const UserInfo = ({ userId }: { userId: string | number }) => {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex w-full items-center justify-between">
        <span className="text-gray-300">User Information</span>
        <Link href={"/"} className="text-sky-500 text-xs hover:underline">
          See all
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-gray-300">
        <div className="flex items-center gap-2">
          <span className="text-xl text-white">Tiny Konovalova</span>
          <span className="text-sm">@tinyko</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          obcaecati!
        </p>
        <div className="flex gap-2 items-center">
          <FaMapMarkedAlt size={16} className="text-sky-500" />
          <span>
            Living in <b>Ukraine</b>
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <FaUniversity size={16} className="text-sky-500" />
          <span>
            Went to <b>Harvard School</b>
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <MdHomeWork size={16} className="text-sky-500" />
          <span>
            Work at <b>Google inc.</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <FaLink size={16} className="text-sky-500" />
            <Link href={"/"} className="text-sky-300 font-medium">
              tiny.com
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <FaCalendarAlt size={16} className="text-sky-500" />
            <span>Joined August 2024</span>
          </div>
        </div>
      </div>
      <Button className="bg-sky-600 text-white text-xs px-2 py-2 rounded-md">
        Follow
      </Button>
      <span className="text-red-500 self-end text-xs cursor-pointer">
        Block User
      </span>
    </Card>
  );
};

export default UserInfo;
