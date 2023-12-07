import carousel1 from '../assets/carousel-1.jpg'
import { Link } from 'react-router-dom'
import { PiHamburgerDuotone } from "react-icons/pi";
import { FaGlassCheers } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { menuData } from '../data/data';
import ItemMenu from './ItemMenu';
const Menu = () => {
  return (
    <div className='relative w-full'>

<div className='w-full'>
        <img src={carousel1} className='h-[400px] w-full brightness-50'/>
     </div>
     <div className='absolute top-48 w-full flex items-center justify-center flex-col '>
   <div>
    <h1 className='text-[#fbaf32] text-5xl			font-homefont'>Menu</h1>
   </div>
   <div className='flex items-center gap-2 mt-8'>
   <Link to='/'> <h1 className='text-white text-3xl	font-primary font-medium	'>Home / </h1></Link>
   <Link to='/about'><h1 className='text-white text-3xl	font-primary font-medium'>Menu </h1></Link>
   </div>
     </div>

     <div className='py-3 px-3 w-full mt-10 bg-[#e0e0e0]'>
<div className='grid grid-cols-3 gap-10 py-10	place-items-center max-md:grid-cols-2	'>

<div className='flex items-center justify-center flex-col bg-white py-4 px-3 rounded-lg	'>
    <div>
 <h1 className='text-7xl text-[#fbaf32] max-lg:text-5xl  max-sm:text-4xl'><PiHamburgerDuotone/></h1>
    </div>

    <div className='mt-2'>
        <h1 className='text-3xl	font-primary font-semibold text-[#454545] max-lg:text-2xl max-sm:text-xl		'>Burgers</h1>
    </div>

    <div className='mt-3'>
        <p className='text-[#757575] text-center text-lg	max-lg:text-base max-sm:text-sm'>Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non vulputa. Aliquam metus tortor auctor quis sem.</p>
    </div>

    <div className='mt-4'>
        <button className=' text-[#fbaf32] font-semibold '>View Menu</button>
        <div className='border-b-2 border-[#fbaf32]'>
            
        </div>
    </div>
</div>

<div className='flex items-center justify-center flex-col bg-white py-4 px-3 rounded-lg	'>
    <div>
 <h1 className='text-7xl text-[#fbaf32] max-lg:text-5xl max-sm:text-4xl'><FaCoffee/></h1>
    </div>

    <div className='mt-2'>
        <h1 className='text-3xl	font-primary font-semibold text-[#454545]	max-lg:text-2xl max-sm:text-xl'>Coffe</h1>
    </div>

    <div className='mt-3'>
        <p className='text-[#757575] text-center text-lg	max-lg:text-base max-sm:text-sm'>Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non vulputa. Aliquam metus tortor auctor quis sem.</p>
    </div>

    <div className='mt-4'>
        <button className=' text-[#fbaf32] font-semibold'>View Menu</button>
        <div className='border-b-2 border-[#fbaf32]'>
            
        </div>
    </div>
</div>

<div className='flex items-center justify-center flex-col bg-white py-4 px-3 rounded-lg	'>
    <div>
 <h1 className='text-7xl text-[#fbaf32] max-lg:text-5xl max-sm:text-4xl'><FaGlassCheers/></h1>
    </div>

    <div className='mt-2'>
        <h1 className='text-3xl	font-primary font-semibold text-[#454545]	max-lg:text-2xl max-sm:text-xl'>Beverages</h1>
    </div>

    <div className='mt-3'>
        <p className='text-[#757575] text-center text-lg	max-lg:text-base max-sm:text-sm		'>Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non vulputa. Aliquam metus tortor auctor quis sem.</p>
    </div>

    <div className='mt-4'>
        <button className=' text-[#fbaf32] font-semibold'>View Menu</button>
        <div className='border-b-2 border-[#fbaf32]'>
            
        </div>
    </div>
</div>


</div>
</div>

<div className=' bg-[#e0e0e0] py-3 px-3 grid grid-cols-3 place-items-center gap-10 w-full mt-20 max-lg:grid-cols-2 max-md:grid-cols-1'>
 {
  menuData.map((item) => (
    <>
<ItemMenu item={item}/>
    </>
  ))
 }
</div>
    </div>
  )
}

export default Menu