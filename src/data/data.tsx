import menu1 from '../assets/menu1.jpg'
import menu2 from '../assets/menu2.jpg'
import menu3 from '../assets/menu3.jpg'
import menu4 from '../assets/menu4.jpg'
import menu5 from '../assets/menu5.jpg'
import menu6 from '../assets/menu6.jpg'
import menu7 from '../assets/menu7.jpg'
import menu8 from '../assets/menu8.jpg'
import menu9 from '../assets/menu9.jpg'
import menu10 from '../assets/menu10.jpg'
import menu11 from '../assets/menu11.jpg'
import menu12 from '../assets/menu12.jpg'


interface menus  { 

 id: number
 name:string
 image:any
 description:string
 price: number
}
export const menuData: menus[] = [

    {
        id:1,
        name:"Mini cheese Burger",
        image: menu1,
        description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil ",
        price: 70

    },


    
    {
        id:2,
        name:"Adobo",
        image: menu2,
        description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil ",
        price: 100

    },


    {
        id:3,
        name:"Long Silog",
        image: menu3,
        description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil ",
        price: 60

    },


    {
        id:4,
        name:"Bibol Express",
        image: menu4,
        description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil ",
        price: 130

    },


    {
        id:5,
        name:"Chicken Curry",
        image: menu5,
description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil ",       
 price: 120

    },

    {
        id:6,
        name:"Carbonara",
        image: menu6,
        description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil ",        
        price:30

    },

    {
        id:7,
        name:"Beef Steak ",
        image: menu7,
        description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil ",
        price: 400

    },

    {
        id:8,
        name:"Spaghetti",
        image: menu8,
        description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil ",        
        price: 140

    },

    {
        id:9,
        name:"Lechon Liempo",
        image: menu9,
        description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil ",
        price: 300

    },


    
    {
        id:10,
        name:"Sinigang",
        image: menu10,
        description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil ",        
        price: 150

    },


    {
        id:11,
        name:"palabok",
        image: menu11,
        description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil ",        
        price: 130

    },


    
    {
        id:12,
        name:"Sisig",
        image: menu12,
        description: "Lorem ipsum dolor sit amet elit. Phasel nec preti facil ",       
         price: 70

    },

    

]