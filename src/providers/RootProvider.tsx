import LeftMenu from "@/components/leftMenu";
import RightMenu from "@/components/rightMenu";
import { ReactNode } from "react";

const RootProvider = ({
  children,
  params,
}: {
  children: ReactNode;
  params: { id: string };
}) => {
  return (
    <section className="flex gap-6 pt-6">
      <aside className="hidden xl:block w-[20%]">
        <LeftMenu />
      </aside>
      <div className="w-full lg:w-[60%] xl:w-[70%]">{children}</div>
      <aside className="hidden lg:block w-[40%] xl:w-[30%]">
        <RightMenu userId={params?.id} />
      </aside>
    </section>
  );
};

export default RootProvider;
