//fetch methods, get, post, patch, delete.

import Posts from "../components/Posts";
const URL = "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT";

export const fetchPosts = async () => {
  try {
    const response = fetch(`${URL}/Posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: Bearer`${token}`,
        body: JSON.stringify({
          username,
          password,
        }),
      },
    });
    const results = response.JSON();
    return results.data.token;
  } catch (error) {
    console.log(error);
  }
};

// export const sendPosts = async () => {
//   fetch("https://strangers-things.herokuapp.com/api/COHORT-NAME/posts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer ${token}",
//     },
//     // body: JSON.stringify({
//     //   user: {
//     //     id,
//     //   },
//     // }),
//   });
//   const data = response.data.posts;
//   console.log(data, "data from the api");
//   return data;
// };

export const userSignUP = async (username, password) => {
  try {
    const newUser = await fetch(`${URL}/users/register`, {
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
    });
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

fetch(
  "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts/5e8d1bd48829fb0017d2233b",
  {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer ${token}",
    },
  }
)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
  })
  .catch(console.error);
