import Card from "@/components/ui/Card";
import MenuListItem from "./MenuListItem";
import { menuList } from "@/lib/menuList";
import { Fragment } from "react";

const MenuList = () => {
  return (
    <Card className="flex flex-col gap-2">
      {menuList?.map((list) => (
        <Fragment key={list?.id}>
          <MenuListItem
            href={list.href}
            imgUrl={list.imgUrl}
            title={list.title}
          />
          <hr className="border-t-1 border-slate-700/10  last:hidden" />
        </Fragment>
      ))}
    </Card>
  );
};

export default MenuList;
18 - 22;
