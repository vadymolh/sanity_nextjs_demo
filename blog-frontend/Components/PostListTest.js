import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Router } from 'next/router';
import { useRouter } from "next/router";

const PostListTest = ({ posts, handleDelete}) => {
    //console.log("TEST:", posts.posts_[0].slug);
    const router = useRouter(); 
    console.log("IMAGE",posts);
    return (
        <div className={styles.feed}>
        {posts.map((post) =>(
            <div className={styles.post} key={post._id} onClick={()=> router.push(`/post/${post.slug.current}`)}>
                  <h2>{ post.title }</h2>
                  <img className={styles.mainImage} src={post.mainImage} />              
            </div>
         ) )}
         </div>
    );

}
//
export default PostListTest;