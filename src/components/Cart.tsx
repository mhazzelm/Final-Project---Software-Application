import carousel1 from '../assets/carousel-1.jpg'
import { Link } from 'react-router-dom'
import { menuData } from '../data/data'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import CartItem from './CartItem';
const Cart = () => {
  const {cartItem, getTotalAmount}: any = useContext(ShopContext)
  
  const total = getTotalAmount();
  return (
    <div className='relative w-full'>

    <div className='w-full'>
            <img src={carousel1} className='h-[400px] w-full brightness-50'/>
         </div>
         <div className='absolute top-48 w-full flex items-center justify-center flex-col '>
       <div>
        <h1 className='text-[#fbaf32] text-5xl			font-homefont'>Cart</h1>
       </div>
       <div className='flex items-center gap-2 mt-8'>
       <Link to='/'> <h1 className='text-white text-3xl	font-primary font-medium	'>Home / </h1></Link>
       <Link to='/about'><h1 className='text-white text-3xl	font-primary font-medium'>Cart </h1></Link>
       </div>
         </div>

<div>
{
        menuData.map((item) => {
            if(cartItem[item.id] > 0){
                return <CartItem item={item}/>
            }
        })
    }
</div>

<div className='w-full'>
    {
        total > 0 ? (
            <div className='flex items-center justify-between mt-10'>
              <div>
              <p className='text-2xl font-semibold	max-md:text-xl	'>Total Amount : <span className='text-3xl	font-bold max-md:text-2xl		max-sm:text-lg'>{total} PHP</span></p>
              </div>

              <div>
             <Link to='/'>  <button className='px-4 py-3 text-xl	bg-[#232f3e] text-white  rounded-full max-md:text-lg	max-sm:text-lg		'>Back to Home</button></Link> 
              </div>

            </div>
        ) : (
            <div className='h-screen w-full flex items-center justify-center'>
              <h1 className='text-3xl font-semibold'>Not Found Items!!!</h1>
            </div>
        )
    }
</div>
        </div>
  )
}

export default Cart