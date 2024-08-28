import React, { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-4 bg-slate-600 rounded-lg shadow-md">{children}</div>
  );
};

export default Card;
