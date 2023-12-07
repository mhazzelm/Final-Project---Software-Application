import { menuData } from "../data/data"
import beefsteak from '../assets/menu7.jpg'
import carousel1 from '../assets/carousel-1.jpg'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const Booking = () => {


  return (
    <div className='relative w-full'>

<div className='w-full'>
        <img src={carousel1} className='h-[400px] w-full brightness-50'/>
     </div>
     <div className='absolute top-48 w-full flex items-center justify-center flex-col '>
   <div>
    <h1 className='text-[#fbaf32] text-5xl			font-homefont'>Booking</h1>
   </div>
   <div className='flex items-center gap-2 mt-8'>
   <Link to='/'> <h1 className='text-white text-3xl	font-primary font-medium	'>Home / </h1></Link>
   <Link to='/booking'><h1 className='text-white text-3xl	font-primary font-medium'>Booking </h1></Link>
   </div>
     </div>

     <div className=' gap-10 px-10 w-full flex items-center justify-around bg-[#e0e0e0] max-md:flex-col'>

<div className='w-2/4	 px-8 py-3 max-md:w-full'>
  <div>
      <h1 className='text-[#719a0a] text-xl	max-xl:text-lg'>Book A Table</h1>
  </div>

  <div className='mt-2 mb-10'>
      <h1 className='text-5xl	font-homefont mb-2 max-xl:text-3xl'>Book Your Table For Private</h1>
      <h1 className='text-5xl	font-homefont max-xl:text-3xl'>Dinners & Happy Hours</h1>
  </div>

  <div className='w-11/12	'>

      <p className='leading-6	mb-10 text-lg		max-xl:text-base	'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.</p>
      <p className='leading-6	mb-10 text-lg		max-xl:text-base	'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
      </p>
  </div>
</div>

<div className='w-2/4	py-3 max-md:w-full'>

  <div className='bg-[#fbaf32] py-20 flex items-center flex-col justify-center w-full'>
    
    <div className='w-full px-3 py-2'>
    <div className='relative flex '>
    <div className='w-full'>
    <input type='text' className='text-slate-50 h-[55px] w-full text-left px-3  border-2 border-[#fff] bg-transparent '
    placeholder='Name'
    />
    </div>
    <div className='absolute right-2 top-5'>
      <p className='text-white text-xl	'><FaUser/></p>
    </div>
    </div>
    </div>

    <div className='w-full px-3 py-2'>
    <div className='relative flex '>
    <div className='w-full'>
    <input type='text' className='text-slate-50 h-[55px] w-full text-left px-3  border-2 border-[#fff] bg-transparent '
    placeholder='Email'
    />
    </div>
    <div className='absolute right-2 top-5'>
   <p className='text-white text-xl'> <MdEmail /></p>

    </div>
    </div>
    </div>

    <div className='w-full px-3 py-2'>
    <div className='relative flex '>
    <div className='w-full'>
    <input type='text' className='text-slate-50 h-[55px] w-full text-left px-3  border-2 border-[#fff] bg-transparent '
    placeholder='Mobile'
    />
    </div>
    <div className='absolute right-2 top-4'>
    <p className='text-white text-xl'> <IoPhonePortraitOutline /></p>
    </div>
    </div>
    </div>

    <div className='w-full px-3 py-2'>
    <div className='relative flex '>
    <div className='w-full'>
    <input type='text' className='text-slate-50 h-[55px] w-full text-left px-3  border-2 border-[#fff] bg-transparent '
    placeholder='Guest'
    />
    </div>
    <div className='absolute right-2 top-4'>
    <p className='text-white text-2xl	'> <MdKeyboardArrowDown /></p>
    </div>
    </div>
    </div>

    <div className='w-full px-3 py-2'>
    
    <div className='text-center'>
      <button className='bg-[#fff] w-full py-3 text-xl text-[#fbaf32]	font-semibold rounded-md		'>Book Now</button>
    </div>
    </div>
  </div>
</div>
</div>

<div className='py-3 px-3 w-full '>

<div className='flex items-center flex-col w-full '>
 <div>
 <h1 className='text-[#719a0a] text-xl max-lg:text-base	'>Food Menu</h1>
 </div>
 <div className='mt-6'>
     <h1 className='text-5xl	font-homefont mb-2 max-lg:text-3xl'>Delicious Food Menu</h1>
 </div>

 <div className='mt-8 flex items-center gap-3'>
     <button className='text-white bg-[#719a0a] text-2xl	font-semibold	py-2 px-3 w-32	rounded-lg	max-lg:text-xl	max-lg:w-full'>Foods</button>
     <button className='text-white bg-[#fbaf32] text-2xl	font-semibold py-2 px-3 w-32	rounded-lg	max-lg:text-xl max-lg:w-full'>Burger</button>
     <button className='text-white bg-[#fbaf32] text-2xl	font-semibold py-2 px-3 w-36	rounded-lg	max-lg:text-xl max-lg:w-full'>Coffe</button>
     <button className='text-white bg-[#fbaf32] text-2xl	font-semibold py-2 px-3 w-36	rounded-lg	max-lg:text-xl max-lg:w-full'>Beverages</button>
 </div>
</div>
</div>

<div className='py-3 px-3 w-full flex items-center justify-center max-lg:flex-col'>

<div className="w-3/6 flex items-center jusify-center flex-col max-lg:w-full max-lg:items-start max-lg:jusify-start">
{
     menuData.map((item) => (
         <div className='flex items-center justify-center gap-2 mt-10' key={item.id}> 
         <div className="w-36 flex items-center justify-center max-xl:w-28	">
             <img src={item.image} className=" w-full  rounded-full object-cover	h-28	"/>
         </div>
         
         <div className="w-56">
             <h1 className="text-2xl	font-secondary font-semibold max-xl:text-xl">{item.name}</h1>
             <p className="font-medium text-[#757575] text-lg max-xl:text-base		">{item.description}</p>
             </div>

             <div className="ml-3">
                 <p className="text-center text-xl font-semibold	max-xl:text-lg	 ">PHP {item.price.toFixed(2)}</p>
             </div>
          </div>
     ))
   }
</div>




<div className="w-3/6  max-lg:w-full max-lg:mt-16">
 <img src={beefsteak} className="h-[1000px] w-full rounded-xl max-lg:h-[500px] 	" />

</div>

</div>
    </div>
  )
}

export default Booking