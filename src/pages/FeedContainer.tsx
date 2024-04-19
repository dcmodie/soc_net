import FeedList from '../components/FeedList';
import { savePost, fetchPosts } from '../api/Posts';
import { useEffect, useState } from 'react';

import EditPostModal from '../components/EditPostModal';
const FeedContainer = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts().then((result) => {
      console.log('got posts in FeedContainer ', result);
      setPosts(result);
    });
  }, []);

  return (
    <div className="feed-container">
      <div style={{ width: '400px' }}></div>
      <div>num posts{posts.length}</div>
      <FeedList posts={posts} />
      <EditPostModal />
      <div style={{ width: '400px' }}></div>
    </div>
  );
};

export default FeedContainer;
