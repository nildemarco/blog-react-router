import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../assets/POSTS'

const PostDetails = (props) => {
    const contenido = posts.filter(elemento => elemento.id == props.match.params.id)
    console.log(contenido)
    return(
        <>
        <p>{contenido[0].content}</p>
        <Link to='/'><p>Back</p></Link>
        </>
    );
}

export default PostDetails;