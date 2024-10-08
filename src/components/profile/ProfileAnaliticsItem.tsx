const ProfileAnaliticsItem = ({
  title,
  count,
}: {
  title: string;
  count: number | undefined;
}) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <span className="font-medium">{count}</span>
      <span className="text-sm">{title}</span>
    </div>
  );
};

export default ProfileAnaliticsItem;
