export const fetchPosts = async () => {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts"
  );
  const data = response.json();
  return data;
};
