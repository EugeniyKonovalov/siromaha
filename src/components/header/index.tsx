import Link from "next/link";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import UserAuth from "./UserAuth";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <header className="h-24 flex items-center justify-between">
      <div className="md:hidden lg:block w-[20%]">
        <Link href={"/"} className="font-bold text-xl text-sky-600">
          SIROMAHA
        </Link>
      </div>
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        <Menu />
        <SearchInput />
      </div>
      <div className="w-full md:w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <UserAuth />
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
