import { IconType } from "react-icons";

const PostInteractionItem = ({
  Icon,
  count,
  title,
}: {
  Icon: IconType;
  count?: number;
  title: string;
}) => {
  return (
    <div className="flex items-center gap-2 bg-slate-700 p-2 rounded-lg">
      <Icon size={20} className="cursor-pointer fill-sky-600" />
      <span className="text-gray-400">|</span>
      <span className="text-md">
        {count} <span className="hidden sm:inline">{title}</span>
      </span>
    </div>
  );
};

export default PostInteractionItem;
