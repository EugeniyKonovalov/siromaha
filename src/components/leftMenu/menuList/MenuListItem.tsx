import Image from "next/image";
import Link from "next/link";

const MenuListItem = ({
  href,
  imgUrl,
  title,
}: {
  href: string;
  imgUrl: string;
  title: string;
}) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-700 "
    >
      <Image src={imgUrl} alt="link icon" width={20} height={20} />
      <span>{title}</span>
    </Link>
  );
};

export default MenuListItem;
