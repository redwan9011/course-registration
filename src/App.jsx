
import './App.css'
import Blogs from './Components/blogs/Blogs'
import Cart from './Components/Carts/Cart'

function App() {
 

  return (
    <>
   <div className='max-w-6xl mx-auto'>
    <div className='text-center text-4xl font-bold my-8'>
    <h1>Course Registration</h1>
    </div>

    <div className='flex gap-8'>
    <Blogs></Blogs>
    <Cart></Cart>
    </div>
   </div>
    
 
    </>
  )
}

export default App
