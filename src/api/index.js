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

export const fetchUserPosts = async (token) => {
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
    await fetch(`${URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`,
        },
      }),
<<<<<<< HEAD
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch(console.error);
    // const result = await newUser.json();
    // console.log("this is the sign up token", result.data.token);
    //  return result.data.token;
=======
    });
    const result = await newUser.json();
    console.log("console log for the result", result.data.token);
    return result.data;
>>>>>>> 1473c7ee87bf84e7437ff4945d845a7e0d0d6229
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (username, password, token) => {
  try {
    const login = await fetch(`${URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`,
          token,
        },
      }),
    });
    const result = await login.json();
    console.log(result.data.token);
    return result.data.token;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (
  title,
  description,
  price,
  delivery,
  location
) => {
  const token = localStorage.getItem("token");
  try {
    const newPost = await fetch(`${URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token} `,
      },
      body: JSON.stringify({
        post: {
          title: `${title}`,
          description: `${description}`,
          price: `${price}`,
          willDeliver: `${delivery}`,
          location: `${location}`,
        },
      }),
    });
    const result = await newPost.json();
    console.log(result.data.posts);
    return result.data.posts;
  } catch (error) {
    console.log(error);
  }
};

export const editPost = async (
  title,
  description,
  price,
  willDeliver,
  location
) => {
  const token = localStorage.getItem("token");
  try {
    const editPost = await fetch(`${URL}/posts`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token} `,
      },
      body: JSON.stringify({
        post: {
          title: `${title}`,
          description: `${description}`,
          price: `${price}`,
          location: `${location}`,
          willDeliver: `${willDeliver}`,
        },
      }),
    });
    const result = await editPost.json();
    console.log(result.data.posts);
    return result.data.posts;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async () => {
  const token = localStorage.getItem("token");
  try {
    const deleted = await fetch(`${URL}/posts/_id`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token} `,
      },
    });
    const result = await deleted.json();
    console.log(result.data.posts);
    return result.data.posts;
  } catch (error) {
    console.log(error);
  }
};

export const createMessage = async (content) => {
  const token = localStorage.getItem("token");
  try {
    const newMessage = await fetch(`${URL}/posts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token} `,
      },
      body: JSON.stringify({
        post: {
          message: {
            content: `${content}`,
          },
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
