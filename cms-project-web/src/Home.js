import React from 'react';
import BlogsList from './BlogsList';
import useFetch from './Hook/useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div className='loading'>Loading....</div> }
            { blogs && <BlogsList  blogs = { blogs } title = "Heading one"/> }
        </div>
    );
}

export default Home;
