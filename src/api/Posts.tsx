import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const savePost = async (postData) => {
  const postD = { userId: '222', text: 'hello' };
  const url = 'http://localhost:8000/posts/';
  //console.log('got data for save', JSON.stringify(postData));
  const result = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  const json = await result.json();
  return json;
};

const fetchPosts = async () => {
  const result = await fetch('http://localhost:8000/posts/');
  const json = await result.json();
  console.log('got posts: ', json);
  return json;
};

export { savePost, fetchPosts };

// const response = await fetch(url, {
//   method: "POST", // *GET, POST, PUT, DELETE, etc.
//   body: JSON.stringify(data), // body data type must match "Content-Type" header
// });
//http://localhost:8000/posts/
