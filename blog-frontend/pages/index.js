import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import PostListTest from '../Components/PostListTest';
import Toolbar from '../Components/Toolbar';
import imageUrlBuilder from '@sanity/image-url'

const Home =  ({posts_})=> {
  const [name, setName] = useState('Defaulty');
  const [age, setAge] = useState(11);
  const [posts, setPosts] = useState(posts_);

  const [mappedPosts, setMappedPosts] = useState([]);

  const handleClick = (name, e) =>{
    console.log('clicked by ' + name, e.target);
  }
  const handleDelete = (id) =>{
      const updatedPosts = posts.filter(post => post._id !== id);
      setPosts(updatedPosts);
  }
  console.log("TEST1",posts_);

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: 'f1gl4ktq',
      dataset: 'production'
    });
    console.log("TEST",posts_);
    if (posts_){
      setMappedPosts(posts_.map(p=>{
        return {...p, 
              mainImage: imgBuilder.image(p.mainImage).width(500).height(250)}
      }))
    } 
     }, []);
  
  return (
    <div className={styles.container}>
       <h2>Homepage</h2>
       
       <p>Hello {name} you are {age}</p>
      <PostListTest posts={mappedPosts} handleDelete={handleDelete}/>
    </div>
    
      )
}


export const getServerSideProps = async (pageContext)=>{
  
  const query = encodeURIComponent(`*[_type == "post"]`); //{title, _id, slug}
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
