import { useEffect } from "react";
import { useState } from "react";
import profile from '../../assets/Frame.svg'

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
            <div className="blogs grid grid-cols-3 gap-5 ">
                {
                    blogs.map((blog, idx) =>(
                      <div key={idx} className="shadow-2xl bg-white px-3 py-5 space-y-2 rounded-md">
                        <img className="w-full" src={blog.cover_image} alt="" />
                        <h1 className="font-bold text-lg">{blog.title}</h1> 
                        <p className="text-gray-600"> {blog.mini_text} </p>
                        <div className="flex justify-between text-xl text-gray-800 ">
                            <small>$ price: {blog.price}</small>
                           <div className="flex gap-2">
                           <img src={profile} alt="" />
                            <small>  Credit:  {blog.time_in_hours}hr</small>
                           </div>
                        </div>
                      <div className="pt-2 text-center">
                      <button className="w-11/12 rounded-md bg-blue-600 py-1 text-white text-normal ">Select</button>
                      </div>
                      </div>

                    ))
                }
            </div>
        </div>
    );
};

export default Blogs;