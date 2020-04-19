import React from 'react';
import {Link} from 'react-router-dom';

const Post = ({id, title, author, publishedAt}) => {
    return(
        <div>
            <Link to={`/post/${id}`}><h2>{title}</h2></Link>
    <p>Published by {author} on {publishedAt} </p>
        </div>
    )
    
    
}
export default Post