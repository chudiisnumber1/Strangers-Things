export const fetchPosts = async () => {
  try {
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts"
    );
    const result = await response.json();
    const data = await result.data.posts;
    return data;
  } catch (error) {
    throw error;
  }
};
//   return data;

// export const function fetchProfile = async () => {
//     const
// }
