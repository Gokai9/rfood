import styles from './Product.module.css'
import { Idessert, ICart, State} from '../utils/types';
import { toFloat } from '../utils/helper';
import { useReducer, useState } from 'react';
import { reducer } from '../reducer/reducer';

interface BB {
    prod: Idessert,
}
 
const initialState: State = {carts: []}
export default function Product({prod}: BB) {
    const id = window.btoa(prod.category + prod.name)
    const [state, dispatch] = useReducer(reducer, initialState)
    const [addAmount, setAddAmount] = useState(0)
    const [show, setShow] = useState(false)
    const reduceOne = (cart: ICart) => {
        setAddAmount(addAmount - 1)
        dispatch({type: 'subAmount', payload: cart})
        setShow(state.carts.filter(cart => cart.id === id)[0].show)
    }
    const addOne = (cart: ICart) => {
        setAddAmount(addAmount + 1)
        dispatch({type: 'addAmount', payload: cart})
    }
    const but = <button className={styles.btnone}><input type='button' value={'-'} onClick={() => reduceOne({...prod, id: id, amount: addAmount, show: true})} /><span>{addAmount}</span><input type='button' value={'+'} onClick={() => addOne({...prod, id: id, amount: addAmount, show: true})}/></button>
    const addbut = <button className={styles.btn} 
    onClick={() => {
        dispatch({type: 'addCart', payload: {id: id, image: {...prod.image}, name: prod.name, amount: 1, price: prod.price, show: true}})
        setAddAmount(addAmount + 1)
    }}>
        Add to cart
        </button>
    return (
        <div className={styles.de}>
            <img className={styles.imag} src={`${"."}${prod.image.desktop}`} alt={prod.name} height={250} width={250}/>
                {show ? but : addbut}
            <p>{prod.category}</p>
            <p>{prod.name}</p>
            <p>{toFloat(prod.price)}</p>
        </div>
    )
}