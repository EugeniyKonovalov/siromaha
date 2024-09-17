"use client";

import Button from "@/components/shared/Button";
import { useFormStatus } from "react-dom";

const UpdateBtn = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      className="h-9 disabled:bg-opacity-50 disabled:cursor-not-allowed"
      type="submit"
      disabled={pending}
    >
      {pending ? "Updating..." : "Update"}
    </Button>
  );
};

export default UpdateBtn;
