import PostCard from './PostCard';
import { savePost, fetchPosts } from '../api/Posts';
import { useQuery } from '@tanstack/react-query';
interface Post {
  id: number;
  userId: number;
  text: string;
}

const FeedList = () => {
  const query = useQuery({ queryKey: ['fetchPosts'], queryFn: fetchPosts });

  const renderList = () => {
    return query.data?.map((post: Post) => {
      return <PostCard key={post.id} {...post}></PostCard>;
    });
  };

  return (
    <div className="list-page">
      <div>{renderList()}</div>
    </div>
  );
};

export default FeedList;
