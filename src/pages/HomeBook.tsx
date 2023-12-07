import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const HomeBook = () => {
  return (
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
  )
}

export default HomeBook