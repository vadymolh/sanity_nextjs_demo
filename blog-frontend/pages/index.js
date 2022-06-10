import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import PostListTest from '../Components/PostListTest';
import Toolbar from '../Components/Toolbar';

const Home =  (posts_)=> {
  const [name, setName] = useState('Defaulty');
  const [age, setAge] = useState(11);
  const [posts, setPosts] = useState(posts_);

  const handleClick = (name, e) =>{
    console.log('clicked by ' + name, e.target);
  }
  const handleDelete = (id) =>{
      const updatedPosts = posts.filter(post => post._id !== id);
      setPosts(updatedPosts);
  }

  useEffect(() => {
    console.log('useEffect called');
  }, [age]);
  
  return (
    <div className={styles.container}>
       <h2>Homepage</h2>
       <button onClick={(e)=> {setAge(age+1);
       setName("Vadym");
       }
      }>ClickME</button>
       <p>Hello {name} you are {age}</p>
      <PostListTest posts={posts} handleDelete={handleDelete}/>
    </div>
    
      )
}


export const getServerSideProps = async (pageContext)=>{
  
  const query = encodeURIComponent(`*[_type == "post"]{title, _id, slug}`);
  const url = `https://f1gl4ktq.api.sanity.io/v1/data/query/production?query=${query}`;
  
  const res = await fetch(url).then(data => data.json());
  const posts = res.result;
  //console.log(posts.posts_);
  if (!posts) {
      return { 
          notFound: true
       };
  }
  
  return {
      props: {
          posts_: posts,
          
      }
  }
};



export default Home;
