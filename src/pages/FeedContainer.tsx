import FeedList from '../components/FeedList';
//import { useEffect, useState } from 'react';

import EditPostModal from '../components/EditPostModal';

const FeedContainer = () => {
  return (
    <div className="feed-container">
      <div style={{ width: '400px' }}></div>
      <FeedList />
      <EditPostModal />
      <div style={{ width: '400px' }}></div>
    </div>
  );
};

export default FeedContainer;
