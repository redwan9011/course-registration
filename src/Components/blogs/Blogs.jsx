import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    // eslint-disable-next-line no-unused-vars
    const [blogs, setBlogs] = useState([])
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])


    return (
        <div className="w-10/12">
            <div className="blogs grid grid-cols-3 ">
                {
                    blogs.map((blog, idx) =>(
                      <div key={idx}>
                        <img src={blog.cover_image} alt="" />
                        <h1>{blog.title}</h1> 
                      </div>

                    ))
                }
            </div>
        </div>
    );
};

export default Blogs;