import carousel1 from '../assets/carousel-1.jpg'
import carousel3 from '../assets/carousel-3.jpg'
import carousel2 from '../assets/carousel-2.jpg'
import HomeBook from './HomeBook'
import HomeAbout from './HomeAbout'
import HomeFeature from './HomeFeature'
import HomeMenu from './HomeMenu'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
  <>
    <div className='w-full'>
<div id="carouselExampleSlidesOnly" className="carousel slide  " data-bs-ride="carousel">
  <div className="carousel-inner ">

    <div className="carousel-item active ">
      <div className='relative'>
      <img src={carousel1}  className="d-block w-100 	h-[720px] brightness-50	" alt="..."/>
      </div>
      <div className='absolute top-48 w-full flex items-center justify-center flex-col'>
        <div className='w-full'>
          <h1 className='text-7xl	text-center	text-white font-homefont mb-2 font-semibold	max-xl:text-6xl max-lg:text-5xl max-sm:text-4xl	'>Best <span className='text-[#fbaf32] '>Quality</span> </h1>
          <h1 className='text-white text-center font-homefont text-7xl font-semibold max-xl:text-6xl max-lg:text-5xl max-sm:text-4xl'>Ingredients</h1>
        </div>

        <div className='mt-10 w-3/5  max-md:w-4/5	max-sm:w-full px-3	'>
          <p className='text-white text-center font-sans text-2xl font-semibold		max-xl:text-xl max-sm:text-lg	 	'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus sed tempora quasi unde aut ducimus odit qui libero earum sequi eveniet, repellat, illum ab? Ex numquam fugiat earum hic recusandae?</p>
        </div>

        <div className='flex items-center justify-center gap-5 mt-14'>
        <div>
       <Link to='/menu'>   
       <button className='text-white text-xl	font-bold	 bg-[#fbaf32]	px-3 py-3 rounded-md hover:bg-transparent		border-2 border-[#fbaf32]	 transition delay-150 duration-300 ease-in-out	 max-lg:text-lg max-sm:text-base	'>View Menu</button></Link> 
        </div>

        <div>
        <Link to='/booking'>     <button  className='text-white text-xl font-bold	 bg-[#719a0a] px-3 py-3 rounded-md 	 hover:bg-transparent		border-2 border-[#719a0a]	 transition delay-150 duration-300 ease-in-out max-lg:text-lg	max-sm:text-base	'>Book Table</button></Link> 
        </div>
        </div>
      </div>
    </div>



     <div className="carousel-item">
     <div className='relative'>
      <img src={carousel2}  className="d-block w-100 	h-[720px] brightness-50	" alt="..."/>
      </div>

      <div className='absolute top-48 w-full flex items-center justify-center flex-col'>
        <div className='mt-5 w-full'>
          <h1 className='text-7xl	text-center	text-white font-homefont mb-2 font-semibold	max-xl:text-6xl max-lg:text-5xl max-sm:text-4xl
'>World's <span className='text-[#fbaf32] '>Quality</span> Chef </h1>
         
        </div>

        <div className='mt-10 w-3/5  max-md:w-4/5	max-sm:w-full px-3
	'>
          <p className='text-white text-center font-sans text-2xl font-semibold	 	max-xl:text-xl max-sm:text-lg	
	'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus sed tempora quasi unde aut ducimus odit qui libero earum sequi eveniet, repellat, illum ab? Ex numquam fugiat earum hic recusandae?</p>
        </div>

        <div className='flex items-center justify-center gap-5 mt-14'>
        <div>
        <Link to='/menu'>   <button className='text-white text-xl	font-bold	 bg-[#fbaf32]	px-3 py-3 rounded-md hover:bg-transparent		border-2 border-[#fbaf32]	 transition delay-150 duration-300 ease-in-out	max-lg:text-lg max-sm:text-base	'>View Menu</button></Link>   
        </div>

        <div>
        <Link to='/menu'>  <button  className='text-white text-xl font-bold	 bg-[#719a0a] px-3 py-3 rounded-md 	 hover:bg-transparent		border-2 border-[#719a0a]	 transition delay-150 duration-300 ease-in-out	max-lg:text-lg	max-sm:text-base	'>Book Table</button></Link>
        </div>
        </div>
      </div>
    </div>

    
     <div className="carousel-item">
     <div className='relative'>
      <img src={carousel3}  className="d-block w-100 	h-[720px] brightness-50	" alt="..."/>
      </div>

      <div className='absolute top-48 w-full flex items-center justify-center flex-col'>
        <div className='mt-5 w-full'>
          <h1 className='text-7xl		text-white font-homefont mb-2 font-semibold text-center	max-xl:text-6xl max-lg:text-5xl max-sm:text-4xl'>Fastest Order  <span className='text-[#fbaf32] '>Delivery</span>  </h1>
         
        </div>

        <div className='mt-10 w-3/5 max-md:w-4/5		'>
          <p className='text-white text-center font-sans text-2xl font-semibold			max-xl:text-xl max-sm:w-full px-3
'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus sed tempora quasi unde aut ducimus odit qui libero earum sequi eveniet, repellat, illum ab? Ex numquam fugiat earum hic recusandae?</p>
        </div>

        <div className='flex items-center justify-center gap-5 mt-14'>
        <div>
       <Link to='/menu'>   <button className='text-white text-xl	font-bold	 bg-[#fbaf32]	px-3 py-3 rounded-md hover:bg-transparent		border-2 border-[#fbaf32]	 transition delay-150 duration-300 ease-in-out	max-lg:text-lg max-sm:text-lg	
	 '>View Menu</button> </Link>
        </div>

        <div>
        <Link to='/booking'>   <button  className='text-white text-xl font-bold	 bg-[#719a0a] px-3 py-3 rounded-md 	 hover:bg-transparent		border-2 border-[#719a0a]	 transition delay-150 duration-300 ease-in-out	max-lg:text-lg	max-sm:text-lg	
'>Book Table</button> </Link>
        </div>
        </div>
      </div>
    </div>  
  </div>
</div>


    </div>

    <div>
      <HomeBook/>
    </div>

    <div>
      <HomeAbout/>
    </div>

    <div>
      <HomeFeature/>
    </div>

    <div>
      <HomeMenu/>
    </div>
  </>
  )
}

export default Home