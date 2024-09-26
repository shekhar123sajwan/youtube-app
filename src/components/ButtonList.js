import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "all",
    "shorts",
    "music",
    "sports",
    "gaming",
    "news",
    "live",
    "trending",
    "latest",
    "gaming",
    "news",
    "live",
    "trending",
    "latest",
    "gaming",
    "news",
    "latest",
    "gaming",
    "news",
    "live",
    "trending",
    "latest",
    "gaming",
    "news",
    "latest",
    "gaming",
    "news",
    "live",
    "trending",
    "latest",
    "gaming",
    "news",
    "live",
    "trending",
    "latest",
  ];
  return (
    <div className="p-4 flex ">
      <div>
        {list.map((item, index) => (
          <Button key={index} name={item} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
