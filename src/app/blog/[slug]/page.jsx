
import Image from "next/image";
import styles from "./post.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// // FETCH DATA WITH AN API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };


const SinglePostPage = async ({ params }) => {
  // from params we can reach our slug
  const { slug } = params;

  // FETCH DATA WITH AN API
  // const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/noavatar.png" fill
        className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          {post.title}
        </h1>
        <div className={styles.detail}>
      <Image src="/noavatar.png"
      width={50}
      height={50}
      />
     { post && (

     <Suspense fallback={<div>Loading...</div>}>
      <PostUser  userId={post.userId}/>
      </Suspense>
       )}

      <div className={styles.detailText}>
        <span className={styles.detailTitle}>Date</span>
        <span className={styles.detailValue}>12/08/2003</span>
      </div>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>

  );
};

export default SinglePostPage;