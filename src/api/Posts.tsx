const savePost = async (postData) => {
  const postD = { userId: '222', text: 'hello' };
  const url = 'http://localhost:8000/posts/';
  console.log('posting ', JSON.stringify(postD));
  const result = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(postD),
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
