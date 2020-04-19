import React from 'react';
import posts from '../assets/POSTS';
import Post from './Post';

const Home = () => {
    return (
        posts.map(element => (
            <Post key={element.id} id={element.id} title={element.title} author={element.author} publishedAt={element.publishedAt} />
        ))
    )
}

export default Home; 