import styles from '../styles/Home.module.css'

const PostListTest = ({ posts, handleDelete}) => {
    console.log(posts);
    return (
        <div className={styles.container}>
        {posts.map((post) =>(
            <div className={styles.card} key={post.id}>
              <h2>{ post.title }</h2>
              <p>{ post.content }</p>
              <button onClick={()=> handleDelete(post.id)}>Delete Post</button>
            </div>
         ) )}
         </div>
    );

}

export default PostListTest;