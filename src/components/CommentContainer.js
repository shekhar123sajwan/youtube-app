import React from "react";

const CommentList = ({ commments }) => {
  return (
    <div>
      {commments?.map((comment) => {
        return (
          <>
            <div key={comment.id} className="bg-gray-500 p-2 my-1">
              <div className="flex align-middle">
                <img
                  className="rounded-full w-9 h-9"
                  src="https://avatars.githubusercontent.com/u/1?v=4"
                />
                <p className="ml-2 py-1 font-bold">{comment.name}</p>
              </div>
              <p className="py-1 text-sm">{comment.comment}</p>
              <p className="text-sm text-gray-400">{comment.time}</p>
            </div>
            {comment?.replies && (
              <div className="pl-12 border-l-2 border-gray-400 dark:border-white">
                <CommentList commments={comment.replies} />
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

const CommentContainer = () => {
  const commentsList = [
    {
      id: "1",
      name: "Sanket",
      comment: "Wow, I love this video. Thanks for sharing",
      time: "1 hour ago",
      replies: [],
    },
    {
      id: "2",
      name: "Sanket",
      comment: "Wow, I love this video. Thanks for sharing",
      time: "1 hour ago",
      replies: [
        {
          id: "3",
          name: "Sanket",
          comment: "Wow, I love this video. Thanks for sharing",
          time: "1 hour ago",
          replies: [
            {
              id: "10",
              name: "Sanket",
              comment: "Wow, I love this video. Thanks for sharing",
              time: "1 hour ago",
            },
            {
              id: "11",
              name: "Sanket",
              comment: "Wow, I love this video. Thanks for sharing",
              time: "1 hour ago",
            },
          ],
        },
        {
          id: "4",
          name: "Sanket",
          comment: "Wow, I love this video. Thanks for sharing",
          time: "1 hour ago",
        },
        {
          id: "5",
          name: "Sanket",
          comment: "Wow, I love this video. Thanks for sharing",
          time: "1 hour ago",
        },
      ],
    },
    {
      id: "6",
      name: "Sanket",
      comment: "Wow, I love this video. Thanks for sharing",
      time: "1 hour ago",
      replies: [
        {
          id: "7",
          name: "Sanket",
          comment: "lorem ipsum dolor sit amet sharing",
          time: "1 hour ago",
        },
      ],
    },
    {
      id: "8",
      name: "Sanket",
      comment: "lorem   ipsum dolor sit amet video. Thanks for sharing",
      time: "1 hour ago",
      replies: [],
    },
  ];

  return (
    <div className="m-1 p-1">
      <h1 className="text-2xl font-bold">Comments</h1>

      <CommentList commments={commentsList} />
    </div>
  );
};

export default CommentContainer;
