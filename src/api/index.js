//fetch methods, get, post, patch, delete.

const URL = "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT";

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${URL}/posts`);
    const results = await response.json();
    return results.data.posts;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserPosts = async () => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await fetch(`${URL}/posts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token} `,
        },
      });
      const results = await response.json();
      return results.data.posts;
    }
  } catch (error) {
    console.log(error);
  }
};

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

// fetch(
//   "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT/posts/5e8d1bd48829fb0017d2233b",
//   {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer ${token}",
//     },
//   }
// )
//   .then((response) => response.json())
//   .then((result) => {
//     console.log(result);
//   })
//   .catch(console.error);
