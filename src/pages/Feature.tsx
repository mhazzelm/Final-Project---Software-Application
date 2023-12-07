import carousel1 from '../assets/carousel-1.jpg'
import { Link } from 'react-router-dom'

import feature1 from '../assets/feature-1.jpg'
import feature2 from '../assets/feature-2.jpg'
import feature3 from '../assets/feature-3.jpg'
import feature4 from '../assets/feature-4.jpg'
import { LuChefHat } from "react-icons/lu";
import { FaBowlFood } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiHamburgerDuotone } from "react-icons/pi";
import { FaGlassCheers } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
const Feature = () => {
  return (
    <div className='relative w-full'>

<div className='w-full'>
        <img src={carousel1} className='h-[400px] w-full brightness-50'/>
     </div>
     <div className='absolute top-48 w-full flex items-center justify-center flex-col '>
   <div>
    <h1 className='text-[#fbaf32] text-5xl			font-homefont'>Feature</h1>
   </div>
   <div className='flex items-center gap-2 mt-8'>
   <Link to='/'> <h1 className='text-white text-3xl	font-primary font-medium	'>Home / </h1></Link>
   <Link to='/feature'><h1 className='text-white text-3xl	font-primary font-medium'>Feature </h1></Link>
   </div>
     </div>


     <div className='py-3 px-3 w-full flex items-center justify-center gap-6 max-sm:flex-col'>
    
    <div className='w-3/6 flex items-center justify-center flex-col mt-10 max-sm:w-full'>
      <div>
      <p className='text-[#719a0a] text-xl max-lg:text-lg	'>Why Choose Us</p>
      </div>
      <div className='mt-1'>
      <h1 className='text-5xl	font-homefont mb-2 max-lg:text-4xl'>Our Key Features
</h1>
      </div>

      <div className='grid grid-cols-2 gap-1	place-items-center mt-10'>
        <div>
            <img src={feature1} className='transform transition-transform duration-300 ease-in-out hover:scale-110'/>
        </div>
        <div>
        <img src={feature2} className='transform transition-transform duration-300 ease-in-out hover:scale-110'/>
        </div>
        <div>
        <img src={feature3} className='transform transition-transform duration-300 ease-in-out hover:scale-110'/>
        </div>
        <div>
        <img src={feature4} className='transform transition-transform duration-300 ease-in-out hover:scale-110'/>
        </div>
      </div>

<div className='w-11/12 mt-6	'>
    <p  className='leading-6	mb-10 text-lg max-lg:text-base	'>Lorem ipsum dolor sit amet consec adipis elit. Phasel nec preti mi. Curabit facilis ornare velit non vulputa. Aliquam metus tortor, auctor id gravida condime, viverra quis sem. Curabit non nisl nec nisi sceleri maximus</p>
</div>

<div className='w-11/12 text-center mt-4'>
<button className='bg-[#fbaf32] w-full py-3 text-xl text-white	font-semibold rounded-md '>Book A Table</button>
</div>

    </div>

    <div className='w-3/6 max-sm:w-full'>
        
        <div className='grid grid-cols-2 place-items-center  gap-6	'>
       
       <div>
        <div>
            <h1 className='text-5xl	text-[#fbaf32] max-lg:text-3xl'><LuChefHat /></h1>
        </div>

        <div className='mt-2'>
            <h1 className='text-2xl	 font-semibold	font-primary mb-2'>World’s best Chef</h1>
            <p className='text-base max-lg:text-sm	'>Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput metus tortor</p>
        </div>
       </div>


       <div>
        <div>
            <h1 className='text-5xl	text-[#fbaf32] max-lg:text-3xl'><FaBowlFood /></h1>
        </div>

        <div className='mt-2'>
            <h1 className='text-2xl	 font-semibold	font-primary mb-2 max-lg:text-xl	'>Natural ingredients</h1>
            <p className='text-base max-lg:text-sm	'>Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput metus tortor</p>
        </div>
       </div>



       <div>
        <div>
            <h1 className='text-5xl	text-[#fbaf32] max-lg:text-3xl'><FaAward /></h1>
        </div>

        <div className='mt-2'>
            <h1 className='text-2xl	 font-semibold	font-primary mb-2 max-lg:text-xl'>Best quality products
</h1>
            <p className='text-base	max-lg:text-sm'>Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput metus tortor</p>
        </div>
       </div>

       <div>
        <div>
            <h1 className='text-5xl	text-[#fbaf32] max-lg:text-3xl'><CiDeliveryTruck /></h1>
        </div>

        <div className='mt-2'>
            <h1 className='text-2xl	 font-semibold	font-primary mb-2 max-lg:text-xl'>Fastest door delivery
</h1>
            <p className='text-base	max-lg:text-sm	'>Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput metus tortor</p>
        </div>
       </div>
        </div>
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
    </div>
  )
}

export default Feature