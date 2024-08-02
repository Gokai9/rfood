import { useState } from 'react'
import './App.css'
import Carts from './component/Carts'
import Desserts from './component/ProductsLists'
import { Icarts, ICart } from './utils/types'


function App() {
  const [cartsD, setCartsD] = useState<ICart[]>([])
  const [addAmount, setAddAmount] = useState(1)
  const [show, setShow] = useState(false)
  const [disabled, setDisabled] = useState(false)
    const substractAmount = () => {
        setAddAmount(addAmount - 1)
        if (addAmount < 1) {
          setDisabled(!disabled)
        }
    }
    const addOne = () => {
        setAddAmount(addAmount + 1)
    }
  const handleCart = (ic: ICart) => {
    setCartsD([...cartsD, ic])
    setShow(!show)
}
  const deleteCard = () => {

  }
  const updateAmount = (amount: number) => {
    
  }
  return (
    <div className='app'>
      <Desserts handleCart={handleCart}/>
      <Carts cartsD={cartsD} />
    </div>
  )
}

export default App
