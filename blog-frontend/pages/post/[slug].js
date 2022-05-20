
export const Post = () => {
    //console.log('Post');
    return (<div>I'm a Post</div>
 
    )
};


export const getServerSideProps = async (pageContext)=>{
    const pageSlug = pageContext.query.slug;
    console.log(pageSlug);

    return {
        props: {
            title: "default title",
            slug: pageSlug
        }
    }
};

export default Post;