import Image from "next/image";
import styles from "./post.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";

export async function generateStaticParams() {
  const start = performance.now();
  const res = await fetch("https://agency-xi-one.vercel.app/api/blog");
  const posts = await res.json();
  const end = performance.now();
  console.log("Static Params fetch time:", end - start, "ms");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Fetch Data with an API
const getData = async (slug) => {
    const start = performance.now();
  const res = await fetch(`https://agency-xi-one.vercel.app/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  const end = performance.now();
  console.log(`Fetch time for slug ${slug}:`, end - start, "ms");
  return data;
};


export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt={post.title} fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
