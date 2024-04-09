import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src='/noavatar.png' fill  />
        </div>
        <span className={styles.date}>12/08/2003</span>
      </div>
      <div className={styles.bottom}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link href={`/blog/${post.id}`}>READ MORE </Link>
      </div>
    </div>
  )
}

export default PostCard;
