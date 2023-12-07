import { CiLocationOn } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuTwitter } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
const Footer = () => {
  return (
    <div className='w-full  bg-[#e0e0e0] mt-10 	'>

<div className='grid grid-cols-3 gap-4 place-items-center py-10 w-full max-md:grid-cols-1 max-md:place-items-start'>
<div className='	'>
<div>
<h1 className='text-2xl	font-semibold	text-[#fbaf32] '>Our Address</h1>
            <p className='border-b-2 border-b-[#45c113]	 w-14	mt-1 mb-10'></p>
</div>

<div className='flex flex-col gap-2'>
<div className='flex gap-2'>
              <p className='text-2xl	text-[#cd6f09]'><CiLocationOn/></p>
              <p className='text-base font-medium	font-primary	'>St Clare College of Caloocan</p>
            </div>


            <div className='flex  gap-2'>
              <p className='text-2xl	text-[#cd6f09]'><IoIosCall/></p>
              <p className='text-base font-medium	font-primary	'>+012 345 67890</p>
            </div>

            <div className='flex gap-2'>
              <p className='text-2xl	text-[#cd6f09]'><MdOutlineMailOutline/></p>
              <p className='text-base font-medium	font-primary	'>info@domain.com</p>
            </div>
</div>

<div className='flex gap-2 mt-4'>
<p className='bg-[#cd6f09] text-white text-2xl	py-2 px-2 rounded-full	'><LuTwitter/></p>
     <p className='bg-[#cd6f09] text-white text-2xl	py-2 px-2 rounded-full	'><FaFacebookF/></p>
     <p className='bg-[#cd6f09] text-white text-2xl	py-2 px-2 rounded-full	'><FaYoutube/></p>
     <p className='bg-[#cd6f09] text-white text-2xl	py-2 px-2 rounded-full	'><FaInstagram/></p>
</div>
</div>

<div className='mr-24'>
<div>
<h1 className='text-2xl	font-semibold	text-[#fbaf32] '>Quick Links
</h1>
            <p className='border-b-2 border-b-[#45c113]	 w-14	mt-1 mb-10'></p>
</div>

<div className='flex flex-col gap-2 text-left '>


<div className='flex gap-2'>
              <p className='text-2xl	text-[#cd6f09]'><MdKeyboardArrowRight/></p>
              <p className='text-base font-medium	font-primary	'>Term of use</p>
            </div>


            <div className='flex  gap-2 '>
              <p className='text-2xl	text-[#cd6f09]'><MdKeyboardArrowRight/></p>
              <p className='text-base font-medium	font-primary	'>Privacy policy</p>
            </div>

            <div className='flex gap-2 '>
              <p className='text-2xl	text-[#cd6f09]'><MdKeyboardArrowRight/></p>
              <p className='text-base font-medium	font-primary	'>Cookies</p>
            </div>

            <div className='flex gap-2'>
              <p className='text-2xl	text-[#cd6f09]'><MdKeyboardArrowRight/></p>
              <p className='text-base font-medium	font-primary	'>Help</p>
            </div>

            <div className='flex gap-2 '>
              <p className='text-2xl	text-[#cd6f09]'><MdKeyboardArrowRight/></p>
              <p className='text-base font-medium	font-primary	'>FAQs</p>
            </div>
</div>
</div>


<div className=''>
<div className='w-full'>
<h1 className='text-2xl	font-semibold	text-[#fbaf32] '>Newsletter</h1>
<p className='border-b-2 border-b-[#45c113]	 w-14	mt-1 mb-10'></p>
</div>

<div className='mt-16 mr-3'>
<p className='text-base font-medium	font-primary'>Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo dictum nec non quam. Tortor eu placerat rhoncus, lorem quam iaculis felis, sed lacus neque id eros.</p>
</div>

<div className='mt-3 d-flex items-center w-full  '>
        <div>
          <input type='text' placeholder='Your Email Address'
          className='text-slate-400	 text-left py-2 px-2'
          />
        </div>
        <div>
          <button className='py-2 px-3 bg-[#fbaf32] text-white border border-[#fbaf32]	'>Submit</button>
        </div>
       </div>
</div>
</div>



    </div>
  )
}

export default Footer