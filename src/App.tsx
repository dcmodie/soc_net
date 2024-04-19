import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import FeedContainer from './pages/FeedContainer';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <QueryClientProvider client={queryClient}>
          <FeedContainer />
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
