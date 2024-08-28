import Card from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";

const Birthdays = () => {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="flex w-full items-center justify-between">
          <span className="text-gray-300">Friend Requests</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={"/pexels-eda-karabulut.jpg"}
              alt="user avatar"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
            <span className="font-semibold">Missandei</span>
          </div>
          <div className="flex gap-3 justify-end">
            <button className="bg-sky-600 text-white text-xs px-2 py-1 rounded-md">
              Celebrate
            </button>
          </div>
        </div>
        <div className="flex p-4 bg-slate-700 rounded-lg items-center gap-4">
          <Image src={"/gift.png"} alt="" width={24} height={24} />
          <Link href={"/"} className="flex flex-col gap-1 text-xs">
            <span className="text-gray-200 font-semibold">
              Upcoming Birthdays
            </span>
            <span className="text-gray-300">
              See other 16 upcoming Birthdays
            </span>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default Birthdays;
