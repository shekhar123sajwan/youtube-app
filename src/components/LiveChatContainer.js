import React, { useEffect, useState } from "react";
import { randomString, randomUserName } from "../utils/helpers";

const ChatList = ({ chat }) => {
  return (
    <div className="flex items-center shadow-md p-2">
      <img
        src="https://avatars.githubusercontent.com/u/1?v=4"
        className="rounded-full w-7 h-7"
      />
      <p className="ml-2 text-sm font-bold">{chat.name}</p>
      <p className=" ml-3 text-sm">{chat.message}</p>
    </div>
  );
};

const LiveChatContainer = () => {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const data = [
        { id: randomString(), name: randomUserName(), message: randomString() },
      ];
      setChatList((prev) => {
        const newChatList = [...prev];
        if (newChatList.length > 15) {
          newChatList.splice(newChatList.length - 1, 1);
        }
        newChatList.unshift(...data);
        return newChatList;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="mx-2 p-3 grow border-2 border-gray-50 ">
      <h1 className="font-bold text-lg">Live Chat</h1>
      <div
        className="flex flex-col-reverse overflow-y-scroll h-[500px]"
        id="chat-log"
      >
        {chatList.map((chat) => (
          <ChatList key={chat.id} chat={chat} />
        ))}
      </div>
    </div>
  );
};

export default LiveChatContainer;
