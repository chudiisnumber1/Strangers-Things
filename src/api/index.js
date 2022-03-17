//fetch methods, get, post, patch, delete.

import Posts from "../components/Posts";

export const fetchPosts = async () => {
  try {
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts"
    )
      .then((response) => response.json())
      .then((Posts) => {
        console.log(Posts, "this is from fetch");
      });
    const data = response.data.posts;
    console.log(data, "data from the api");
    return data;
  } catch (error) {
    throw error;
  }
};

export const sendPosts = async () => {
  fetch("https://strangers-things.herokuapp.com/api/COHORT-NAME/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer ${token}",
    },
    body: JSON.stringify({
      user: {
        id,
      },
    }),
  });
  const data = response.data.posts;
  console.log(data, "data from the api");
  return data;
};

export const userSignUP = async (username, password) => {
  try {
    const newUser = await fetch(
      "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      }
    );
    const result = await newUser.json();
    console.log(result.data.token);
    return result.data.token;
  } catch (error) {
    console.log(error);
  }
};
export const userLogin = async (username, password) => {
  try {
    const newUser = await fetch(
      "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      }
    );
    const result = await newUser.json();
    console.log(result.data.token);
    return result.data.token;
  } catch (error) {
    console.log(error);
  }
};

// fetch("https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer ${token}",
//   },
//   body: JSON.stringify({
//     user: {
//       username,
//       password,
//     },
//   }),
// });
