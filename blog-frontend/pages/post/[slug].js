import styles from '../../styles/Post.module.css'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import { useState, useEffect } from 'react'
import Toolbar from '../../Components/Toolbar'

export const Post = ({ title, body, image}) => {
    //console.log(title, body, image);
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const imgBuilder = imageUrlBuilder({
            projectId: 'f1gl4ktq',
            dataset: 'production'
        })
        setImageUrl(imgBuilder.image(image))

    },[image]);
    return (
            <div className={styles.main}>
                <h1>{title}</h1>
                    {imageUrl && <img className={styles.mainImage} src={imageUrl} alt={title}/>}
                <div className={styles.card}>
                    <BlockContent blocks={body} />
                </div>
            </div>
   
    )
};


export const getServerSideProps = async (pageContext)=>{
    const pageSlug = pageContext.query.slug;
    console.log(pageSlug);

    const query = encodeURIComponent(`*[_type == "post" && slug.current == "${pageSlug}"]`);
    const url = `https://f1gl4ktq.api.sanity.io/v1/data/query/production?query=${query}`;
    
    const res = await fetch(url).then(data => data.json());
    const post = res.result[0];
    
    if (!post) {
        return { 
            notFound: true
         };
    }
    
    return {
        props: {
            title: post.title,
            body: post.body,
            image: post.mainImage,
        }
    }
};

export default Post;