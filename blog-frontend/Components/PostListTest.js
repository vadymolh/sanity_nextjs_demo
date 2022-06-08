import styles from '../styles/Home.module.css'
import Link from 'next/link'

const PostListTest = ({ posts, handleDelete}) => {
    console.log(posts);
    return (
        <div className={styles.container}>
        {posts.map((post) =>(
            <div className={styles.card} key={post.id}>
              <Link href={"/post/" + post.id}  key={post.id}>
                <a>
                  <h2>{ post.title }</h2>
                </a>
              </Link>
              <p>{ post.content }</p>
              <button onClick={()=> handleDelete(post.id)}>Delete Post</button>
            </div>
         ) )}
         </div>
    );

}

export default PostListTest;