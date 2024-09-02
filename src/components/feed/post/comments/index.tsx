import AddComment from "./AddComment";
import CommentItem from "./CommentItem";

const Comments = () => {
  return (
    <div className="flex flex-col gap-10">
      <AddComment />
      <div className="flex flex-col gap-8">
        <CommentItem />
      </div>
    </div>
  );
};

export default Comments;
