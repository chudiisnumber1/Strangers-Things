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
    const newUser = await fetch(`${URL}/users/login`, {
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

export const createPost = async (title, description, price, willDeliver) => {
  const token = localStorage.getItem("token");
  try {
    const newMessage = await fetch(`${URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token} `,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          willDeliver,
        },
      }),
    });
    const result = await newMessage.json();
    console.log(result.data.posts);
    return result.data.posts;
  } catch (error) {
    console.log(error);
  }
};

export const editPost = async (title, description, price, willDeliver) => {
  const token = localStorage.getItem("token");
  try {
    const newMessage = await fetch(`${URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token} `,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          willDeliver,
        },
      }),
    });
    const result = await newMessage.json();
    console.log(result.data.posts);
    return result.data.posts;
  } catch (error) {
    console.log(error);
  }
};
