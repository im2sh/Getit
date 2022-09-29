import React from "react";
import Comment from "./Comment";
const comments = [
  {
    name: "이석환",
    comment: "반갑습니다.",
  },
  {
    name: "황효성",
    comment: "아니!!!",
  },
  {
    name: "이태곤",
    comment: "창목이는 좀 맞아야 돼",
  },
];
function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
