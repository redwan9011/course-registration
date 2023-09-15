import { useEffect } from "react";
import { useState } from "react";
import profile from '../../assets/Frame.svg'
import Cart from "../Carts/Cart";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
    // eslint-disable-next-line no-unused-vars
    const [blogs, setBlogs] = useState([])
    const [carts, setCarts] = useState([])
    const [totalTime, setTotalTime] = useState(0)
    const [remaining, setRemaining] = useState(20)
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])



    const handleCarSection = (cart) =>{

        const isShowCart = carts.find(name => name.id === cart.id);
        let times = cart.time_in_hours
        const remainingHour = 20;
        
        if(isShowCart){
            return toast("This cart is already selected")
        }
        else{
            carts.map(time =>{
                times = times + time.time_in_hours
            })
            const remainingTime = remainingHour - times
          
            if(times > remainingHour || remainingTime  < 0){
                return toast("not allow to over 20 hour")
            }
            else{
                setTotalTime(times)
                setRemaining(remainingTime)
            }

           

            const newCarts = [...carts, cart]
            setCarts(newCarts)
        }
       
      
    }

    return (
       <div className='flex gap-8'>
        {/* blog section */}
         <div className="w-9/12">
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
                      <button onClick={ ()=>handleCarSection(blog)} className="w-11/12 rounded-md bg-blue-600 py-1 text-white text-normal ">Select</button>
                      <ToastContainer 
                      position="top-center"
                      autoClose={3000}
                      closeOnClick
                      />
                      </div>
                      </div>

                    ))
                }
            </div>
        </div>
       {/* cart section */}


        <div className="w-3/12  shadow-2xl h-fit p-5">
        <div className="pb-5">
            
            {
                <Cart carts ={carts} totalTime={totalTime} remaining={remaining}></Cart>
            }

        </div>
       
        </div>
       </div>
    );
};

export default Blogs;