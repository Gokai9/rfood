import { useState } from 'react'
import './App.css'
import Carts from './component/Carts'
import Desserts from './component/ProductsLists'
import { Icarts, ICart } from './utils/types'


function App() {
  const [cartsD, setCartsD] = useState<ICart[]>([])
  const handleCart = (ic: ICart) => {
    setCartsD([...cartsD, ic])
}
  return (
    <div className='app'>
      <Desserts handleCart={handleCart}/>
      <Carts cartsD={cartsD} />
    </div>
  )
}

export default App
