interface Post {
  id: number;
  userId: number;
  text: string;
}

const PostCard = ({ id, text, userId }: Post) => {
  return <div className="list-item">{text}</div>;
};

export default PostCard;
