import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';

export default function Home() {
  const [name, setName] = useState('Defaulty');
  const [age, setAge] = useState(11);
  const [posts, setPosts] = useState([
    {id:1, title: 'Post 1', content: 'Content 1'},
    {id:2, title: 'Post 2', content: 'Content 2'},
    {id:3, title: 'Post 3', content: 'Content 3'},]);

  const handleClick = (name, e) =>{
    console.log('clicked by ' + name, e.target);
  }

  useEffect(() => {
    console.log('useEffect');
  });
  
  return (
    <div className={styles.container}>
       <h2>Homepage</h2>
       <button onClick={(e)=> {setAge(age+1);
       setName("Vadym");
       }
      }>ClickME</button>
       <p>Hello {name} you are {age}</p>

       {posts.map((post) =>(
          <div className={styles.card} key={post.id}>
            <h2>{ post.title }</h2>
            <p>{ post.content }</p>
          </div>
       ) )}

    </div>
      )
}
