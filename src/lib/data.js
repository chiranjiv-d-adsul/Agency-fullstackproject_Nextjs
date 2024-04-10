import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// TEMPORARY DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "......", userId: 1 },
//   { id: 2, title: "Post 2", body: "......", userId: 1 },
//   { id: 3, title: "Post 3", body: "......", userId: 2 },
//   { id: 4, title: "Post 4", body: "......", userId: 2 },
// ];

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

// temporary data
// const users = [
//   {
//     id: 1,
//     name: 'Leanne Graham',
//   },
//   {
//     id: 2,
//     name: 'Ervin Howell',
//   },
//   {
//     id: 3,
//     name: 'Clementine Bauch',
//   },
//   {
//     id: 4,
//     name: 'Patricia Lebsack',
//   },
//   {
//     id: 5,
//     name: 'Chelsey Dietrich',
//   },
//   {
//     id: 6,
//     name: 'Mrs. Dennis Schulist',
//   },
//   {
//     id: 7,
//     name: 'Kurtis Weissnat',
//   },
// ];

// const posts = [

//   {
//     userId: 1,
//     id: 1,
//     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
//   },
//   {
//     userId: 2,
//     id: 2,
//     title: 'qui est esse',
//     body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
//   },
//   {
//     userId: 3,
//     id: 3,
//     title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
//     body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
//   },
//   {
//     userId: 4,
//     id: 4,
//     title: 'eum et est occaecati',
//     body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
//   },
//   {
//     userId: 5,
//     id: 5,
//     title: 'nesciunt quas odio',
//     body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
//   },
//   {
//     userId: 6,
//     id: 6,
//     title: 'dolorem eum magni eos aperiam quia',
//     body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quasi quos',
//   },
// ]

// export const getPosts = async () => {
//       return posts;
// }

// export const getPost = async (id) => {
//   return posts.find(post => post.id === parseInt(id));
// }

// export const getUser = async (id) => {
//   return users.find(user => user.id ===  parseInt(id));

// }
