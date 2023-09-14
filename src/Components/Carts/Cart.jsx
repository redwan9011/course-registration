import PropTypes from 'prop-types';

const Cart = ({carts, totalTime, remaining}) => {
    return (
        <div>
            <div className='pb-5'>
                <h1 className='font-bold text-blue-600'>Credits Hour Remaining {remaining} hr</h1>
            </div>
            <hr />
       <div className='pb-5'>
       <h1 className="font-bold text-xl pb-2 pt-2">Course name</h1>
       {
                carts.map((cart, idx) =>(
                    <div key={idx} >
                   <div >
                   <p className='text-gray-500 py-1'>{cart.id} {cart.title} </p>
                   
                   </div>
                  
                </div> 
                
                ))
            }
       </div>
            <hr />
            <div className='pt-5 pb-5'>
                <h4>Total Credit Hour: {totalTime}</h4>
            </div>
            <hr />
        
        </div>
    );
};
Cart.propTypes = { 
    carts: PropTypes.array,
    totalTime:PropTypes.number,
    remaining: PropTypes.number
}
export default Cart;