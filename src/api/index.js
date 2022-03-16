export const fetchPosts = async () => {
  try {
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts"
    );
    const result = await response.json();
    const data = result.data.posts;
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

// fetch("https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer TOKEN_STRING_HERE",
//   },
//   body: JSON.stringify({
//     user: {
//       username:
//       password:
//     }
//   }),
// }
// );
