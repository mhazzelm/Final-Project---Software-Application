import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

interface ItemData {
item:any,

}
const ItemMenu: React.FC  <ItemData> =  ({item}) => {


const {handleAdd}: any= useContext(ShopContext)

  return (
    <div  className='bg-white w-full	flex justify-center	 items-center	 flex-col py-4 max-md:w-11/12	rounded-md' >
        <div className='w-2/4  mb-3		'>
          <img src={item.image} className='w-full h-52	rounded-lg		'/>
        </div>

        <div className=''>
            <p className='text-2xl	font-secondary font-semibold'>{item.name}</p> 
        </div>

       
         <div className=''>
         
    <div className='mt-3'>
        <p className='text-[#757575] text-center text-lg	max-lg:text-base max-sm:text-sm'>{item.description}</p>
    </div>

    <div className='mt-2 text-center'>
           <p className='font-medium	text-lg	max-sm:text-base max-sm:text-xl	'><span className='font-semibold text-xl	max-lg:text-lg	 max-sm:text-base		max-sm:text-2xl'>PHP {item.price}</span>  </p>
         </div>

    <div className='mt-4 mb-4 text-center'>
         <button  className='text-lg bg-[#fbaf32] py-3 px-4 rounded-full	text-white' onClick={() => handleAdd(item.id)}>Add to Cart
       
        </button>
         </div>
         </div>
    </div>
  )
}

export default ItemMenu