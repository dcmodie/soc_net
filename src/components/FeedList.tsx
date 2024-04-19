import PostCard from './PostCard';

interface Post {
  id: number;
  userId: number;
  text: string;
}

interface FeedListProps {
  posts: Post[];
}

const FeedList = (props: FeedListProps) => {
  const { posts } = props;
  const renderList = () => {
    return posts.map((post) => {
      return <PostCard {...post}></PostCard>;
    });
  };

  return (
    <div className="list-page">
      <div>{renderList()}</div>
    </div>
  );
};

export default FeedList;
