import aboutImage from '../assets/about.jpg'
const HomeAbout = () => {
  return (
    <div className='py-3 px-3 w-full flex items-center justify-center gap-6 max-md:flex-col'>
     
     <div className='w-6/12	max-md:w-full'>
    
    <div className='flex justify-center items-center'>
       <img src={aboutImage} className='max-sm:h-[400px] max-sm:w-full'/>
    </div>


     </div>
     <div className='w-6/12	max-md:w-full max-md:flex max-md:justify-center max-md:items-center max-md:flex-col'>
        <div className='mb-2 '>
            <p className='text-[#719a0a] text-xl max-lg:text-lg	'>About Us</p>
        </div>
        <div>
            <h1 className='text-5xl	font-homefont mb-10 max-lg:text-3xl'>Cooking Since 1990</h1>
        </div>
        <div className='w-11/12	'>

            <p className='leading-6	mb-10 text-lg		max-lg:text-base	'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.</p>
            <p className='leading-6	mb-10 text-lg		max-lg:text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
            </p>
        </div>
        </div> 
    </div>
  )
}

export default HomeAbout