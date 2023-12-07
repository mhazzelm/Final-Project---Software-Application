import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
const Header = () => {

    const [navbar, setNavbar] = useState<boolean>(false)

    function handleNav (){
        setNavbar(!navbar)
    }

  return (
  
  <div>

<div className='flex items-center justify-between py-3 px-3  absolute w-full	z-40 max-md:hidden'>
    
    <div className='w-4/12 	'>
    <h1 className='text-[#fbaf32] font-primary text-4xl	font-semibold	'>Food <span className='text-[#719a0a] font-secondary text-5xl font-semibold hover:text-[#fbaf32] cursor-pointer	'>Hunt</span></h1>

    </div>
   
<div className='flex items-center justify-center gap-4 w-full'>
        <div>
            <Link to='/'><p className='text-[#fbaf32] text-lg	font-primary text-center	font-medium	 cursor-pointer'>Home</p> </Link>
        </div>

        <div>
        <Link to='/about'> <p className='text-white text-lg font-primary font-medium	 cursor-pointer	'>About</p></Link>
        </div>


        <div>
        <Link to='/feature'> <p className='text-white text-lg	font-primary font-medium  cursor-pointer	'>Feature </p></Link>
        </div>

        <div>
        <Link to='/menu'>  <p className='text-white text-lg	font-primary font-medium  cursor-pointer	'>Menu</p></Link>
        </div>

        <div>
        <Link to='/booking'>  <p className='text-white text-lg	font-primary font-medium  cursor-pointer	'>Booking</p></Link>
        </div>
    </div>

    <div className='mr-4'>
     <Link to='/cart'><h1 className='text-white text-2xl	'><FaCartShopping /></h1></Link>
    </div>


</div>  






   <div className='max-md:block md:hidden'>
<div className=' px-3 flex items-center justify-between   w-full z-40 bg-white shadow shadow-blue-500/40'>
    <div>
    <h1 className='text-[#fbaf32] font-primary text-4xl	font-semibold	py-3'>Food <span className='text-[#719a0a] font-secondary text-5xl font-semibold hover:text-[#fbaf32] cursor-pointer	'>Hunt</span></h1>

    </div>

    <div>
        <button onClick={handleNav}>{navbar ? <h1 className='text-3xl shadow shadow-blue-500/40'><IoMdClose/></h1> : <h1 className='text-3xl shadow shadow-blue-500/40'><GiHamburgerMenu/></h1>}</button>
    </div>
</div>

<div className='px-3 z-40 absolute bg-white w-full  shadow-md	shadow-[#757575]	 '>
    {navbar && (
        <div className='w-full flex flex-col gap-2'>
             <div>
           <Link to='/'> <p className='text-[#fbaf32] text-lg	font-primary	font-medium	 cursor-pointer'>Home</p></Link> 
        </div>

        <div>
        <Link to='/about'><p className='text-[#757575] text-lg font-primary font-medium	 cursor-pointer	'>About</p></Link> 
        </div>


        <div>
        <Link to='/feature'> <p className='text-[#757575] text-lg	font-primary font-medium  cursor-pointer	'>Feature </p></Link> 
        </div>

        <div>
        <Link to='/menu'>  <p className='text-[#757575] text-lg	font-primary font-medium  cursor-pointer	'>Menu</p></Link>
        </div>

        <div>
        <Link to='/booking'> <p className='text-[#757575] text-lg	font-primary font-medium  cursor-pointer	'>Booking</p></Link>
        </div>
        <div className='mb-4'>
        <Link to='/cart'> <h1 className='text-[#757575]  text-2xl	'><FaCartShopping /></h1></Link>
            </div>
        </div>
    )}
</div>
</div>
   

  </div>
  
  )
}

export default Header