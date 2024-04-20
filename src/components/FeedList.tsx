import PostCard from './PostCard';
import { savePost, fetchPosts } from '../api/Posts';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
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
  const query = useQuery({ queryKey: ['fetchPosts'], queryFn: fetchPosts });

  const renderList = () => {
    return query.data?.map((post) => {
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
