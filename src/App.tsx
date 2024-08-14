import { useReducer } from 'react'
import './App.css'
import Carts from './component/Carts'
import DessertsList from './component/DessertsList'
import { reducer, cartsContext, cartsDispatchContext } from './reducer/reducer'
import { State } from './utils/types'

const initialState: State = {carts: []}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='app'>
      <cartsContext.Provider value={state}>
        <cartsDispatchContext.Provider value={dispatch}>
        <DessertsList />
        <Carts />
        </cartsDispatchContext.Provider>
      </cartsContext.Provider>
      
    </div>
  )
}

export default App
