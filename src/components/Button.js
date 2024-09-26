import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-gray-500 border-2 hover:bg-blue-700 text-white text-sm py-1 px-3 rounded-xl dark:bg-black">
      {name}
    </button>
  );
};

export default Button;
