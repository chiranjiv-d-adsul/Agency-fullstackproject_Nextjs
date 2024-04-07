import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src='/noavatar.png' fill />
        </div>
        <span className={styles.date}>12/08/2003</span>
      </div>
      <div className={styles.bottom}>
        <h1>Title</h1>
        <p>Content</p>
        <Link href='/blog/post'>READ MORE </Link>
      </div>
    </div>
  )
}

export default PostCard;
