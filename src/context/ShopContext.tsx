
import {createContext,useState ,ReactNode} from 'react'
import { menuData } from "../data/data";


export const ShopContext = createContext<null>(null);


const getDefault = () => {
    let cart: any = {}

    for(let i = 1 ; i <= menuData.length; i++){
        cart[i] = 0
    }

    return cart
}

export const ShopContextProvider: React.FC <{children: ReactNode}> = ({children}) => {
    const [cartItem, setCartItem] = useState(getDefault())


    const getTotalAmount = () => {
        let total = 0;

        for(let item in cartItem){
            if(cartItem[item] > 0){
                let itemInfo: any = menuData.find((product) => product.id == parseInt(item))
                total += cartItem[item] * itemInfo.price
            }            

        }

return total;        
    }

 
   const handleAdd = (itemID:number) => {
    setCartItem((parameter:any) => ({...parameter, [itemID]:parameter[itemID] + 1}))
   
   }


   const handleMinus = (itemID:number) => {
    setCartItem((parameter:any) => ({...parameter, [itemID]:parameter[itemID] - 1}))
   
   }


    const values: any = {handleAdd, cartItem, getTotalAmount, handleMinus}
    return (
        <ShopContext.Provider value={values}>{children}</ShopContext.Provider>
    )
}