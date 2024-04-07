import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className="">
        <PostCard />
      </div>
      <div>
        <PostCard />
      </div>
      <div>
        <PostCard />
      </div>


    </div>
  );
};

export default BlogPage;
