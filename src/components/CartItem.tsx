import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
interface CartItemProps {
  item:any
}
const CartItem: React.FC <CartItemProps> = ({item}) => {


  const {handleAdd, handleMinus}: any= useContext(ShopContext)

  return (
    <div className=' w-full'>
      
    <div className='bg-white py-3 px-3 w-full mt-10 flex justify-around		items-center rounded-lg max-sm:flex-col max-sm:items-start max-sm:justify-start	'>
     <div className='w-48	max-sm:w-full '>
       <img src={item.image} className='w-full h-36 max-md:h-32 max-sm:h-24	 max-sm:h-36	'/>
    </div>
    <div>
      <p className='text-lg max-md:text-base	'>Product Name: <span className='text-xl font-secondary font-semibold	max-md:text-lg	'>{item.name}</span></p>
    </div>

    <div className='ml-10 max-sm:ml-0'>
      <p className='text-lg font-medium max-md:text-base'>Price: <span className='text-xl font-semibold	max-md:text-lg'>{item.price} PHP</span></p>
    </div>
    <div className='ml-10 flex flex-col gap-3 max-sm:ml-0'>
       <div>
       <button onClick={() => handleAdd(item.id)} className='py-3 px-3 bg-[#232f3e] text-white text-lg	rounded-md max-md:text-base	'>+</button>
       </div>
       <div>
       <button onClick={() => handleMinus(item.id)} className='py-3 px-3 bg-[#febd89]  text-2xl	rounded-md	max-md:text-xl		'>-</button>
       </div>
    </div>
    </div>

  </div>
  )
}

export default CartItem