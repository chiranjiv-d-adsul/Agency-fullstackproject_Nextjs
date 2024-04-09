import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";



// FETCH DATA WITH AN API
// const getData = async () => {
//   // const response = await fetch("https://jsonplaceholder.typicode.com/posts", {cache:"no-store"});
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}});
//   // revalidate will refresh data at every 3600 seconds means 1 hour

//   // if we dont want to cache data then we can use cache:"no-store" if our data is changing everthing then. if we want to cache data then we can use cache:"default" and
//   // if we want to cache data for a specific time then we can use cache:"max-age=3600" where 3600 is the time in seconds
//   //
//   const data = await response.json();
//   if (!response.ok) {
//     throw new Error("Something went wrong");
//   }

//   return data;
// };

const BlogPage = async () => {
  // const posts = await getData();

  // FETCH DATA WITHOUT AN API
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
