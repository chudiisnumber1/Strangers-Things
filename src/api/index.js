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

export const userSignUP = async (username, password) => {
  {
    /* can't await a component, have to create a function within*/
  }
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
  {
    /* can't await a component, have to create a function within*/
  }
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
