import React from "react";

const SuccessBox = ({ children }) => {
  return (
    <div className="text-center bg-green-200 p-2 border rounded-lg border-green-300">
      {children}
    </div>
  );
};

export default SuccessBox;
