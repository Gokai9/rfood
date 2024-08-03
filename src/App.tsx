import { useState } from 'react'
import './App.css'
import Carts from './component/Carts'
import DessertsList from './component/DessertsList'
import { ICart} from './utils/types'


function App() {
  const [cartsD, setCartsD] = useState<ICart[]>([])
  
  const updateAmount = (id:string, amount: number) => {
    const cart = cartsD.filter(c => {
      if (c.id === id) {
        c.amount += amount
        return c
      }
      return c
    })
    setCartsD([...cart])
  }
  const handleCart = (ic: ICart) => {
    setCartsD([...cartsD, ic])
}
  const deleteCart = (id: string) => {
    const carts = cartsD.filter(cart => cart.id !== id)
    setCartsD(carts)
  }
  return (
    <div className='app'>
      <DessertsList handleCart={handleCart} updateAmount={updateAmount} deleteCart={deleteCart}/>
      <Carts cartsD={cartsD} deleteCart={deleteCart}/>
    </div>
  )
}

export default App
