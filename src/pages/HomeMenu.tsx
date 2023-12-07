import { menuData } from "../data/data"
import beefsteak from '../assets/menu7.jpg'
const HomeMenu = () => {



  return (


    <>
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
    </>
    
  )
}

export default HomeMenu