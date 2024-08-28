import Card from "@/components/ui/Card";
import MoreBtn from "@/components/ui/MoreBtn";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Ad = ({ size }: { size?: "sm" | "md" | "lg" }) => {
  return (
    <Card>
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center justify-between ">
          <span className="text-gray-400 font-medium">Sponsored Ads</span>{" "}
          <MoreBtn size={20} />
        </div>
        <div className={cn("flex flex-col gap-4", { "gap-2": size === "sm" })}>
          <div
            className={cn(
              "relative w-full h-48",
              { "h-24": size === "sm" },
              { "h-36": size === "md" }
            )}
          >
            <Image
              src={"/pexels-andres-alaniz.jpg"}
              fill
              alt="ad image"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"/pexels-erikmdr-prcfi-5.jpg"}
              alt="user avatar"
              width={24}
              height={24}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span
              className={cn("font-medium text-sky-400", {
                "text-sm": size === "sm",
              })}
            >
              BigChef Lounge
            </span>
          </div>
          <p
            className={cn("text-sm line-clamp-4", {
              "text-xs line-clamp-2": size === "sm",
            })}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            quam molestiae quaerat ab earum impedit vero? Autem beatae esse
            facere modi, expedita minima tenetur nemo quasi amet qui, aspernatur
            animi!
          </p>
          <button className="bg-slate-700 p-2 text-xs rounded-lg">
            Learn more
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Ad;
