//fetch methods, get, post, patch, delete.

const URL = "https://strangers-things.herokuapp.com/api/2202-FTB-ET-WEB-FT";

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${URL}/posts`); //awaits fetch post function
    const results = await response.json(); //logs the fetch post into a json file format, which is essentially an array of objects
    return results.data.posts; //navigates through this new array of objects to find posts
  } catch (error) {
    //in case nothing is returned need an error to be thrown so it doesn't just keep running
    console.log(error);
  }
};

export const fetchUserPosts = async () => {
  try {
    const token = localStorage.getItem("token"); //assigns token a key from local storage
    if (token) {
      //checking if token is a valid value
      const response = await fetch(`${URL}/posts`, {
        method: "GET", //instead of posting to API, we are know getting
        headers: {
          "Content-Type": "application/json", //makes sure that the data we receive is in json format
          Authorization: `Bearer ${token} `, //requires a token to be present for this to run
        },
      });
      const results = await response.json(); //await response so that we aren't returning posts before the token is validated
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
        //converts an objects to a json string
        user: {
          username, //username passed through the component
          password, //password pass through the component
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
    const login = await fetch(`${URL}/users/login`, {
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
    const result = await login.json();
    console.log(result.data.token);
    return result.data.token;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (title, description, price, willDeliver) => {
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
          title,
          description,
          price,
          willDeliver,
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
          title,
          description,
          price,
          location,
          willDeliver,
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
      //not sure if this is right, need to find a way to target id with fetch method for patch, edit, and create
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
            content,
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
