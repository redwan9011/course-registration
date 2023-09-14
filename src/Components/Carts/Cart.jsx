import PropTypes from 'prop-types';

const Cart = ({carts}) => {
    return (
        <div>
            {
                carts.map((cart, idx) =>(
                    <div key={idx} >
                   <div >
                   <p className='text-gray-500 py-1'> {cart.title} </p>
                   </div>
                </div> 
                ))
            }
        
        </div>
    );
};
Cart.propTypes = { 
    carts: PropTypes.array
   
}
export default Cart;