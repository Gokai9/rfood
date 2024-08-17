import styles from './Product.module.css'
import { ICart, Ide} from '../utils/types';
import { toFloat } from '../utils/helper';
import { useContext, useState } from 'react';
import { cartsDispatchContext} from '../reducer/reducer';
import Icon from './Icon';

export default function Product({prod}: Ide) {
    const id = window.btoa(prod.category + prod.name)
    const dispatch = useContext(cartsDispatchContext)
    const [addAmount, setAddAmount] = useState(0)
    const [show, setShow] = useState(false)
    const reduceOne = (cart: ICart) => {
        setAddAmount((amount) => {
            const a = amount - 1
            cart.amount = a
            dispatch({type: 'subAmount', payload: cart})
            if (a < 1) {
                setShow(false)
            }
            return a
        })
    }
    const addOne = (cart: ICart) => {
        setAddAmount((amount) => {
            const a = amount + 1
            cart.amount = a
            dispatch({type: 'addAmount', payload: cart})
            return a
        })
    }
    const but = <button className={styles.btn}>
        <span className={styles.btnone} onClick={() => reduceOne({...prod, id: id, amount: addAmount, show: true})}><Icon i="IconDecrement"/></span><span>{addAmount}</span>
        <span className={styles.btnone} onClick={() => addOne({...prod, id: id, amount: addAmount, show: true})}><Icon i='IconIncrement' /></span></button>
    const addbut = <span className={styles.btn} 
    onClick={() => {
        dispatch({type: 'addCart', payload: {id: id, image: {...prod.image}, name: prod.name, amount: 1, price: prod.price, show: true}})
        setAddAmount(addAmount + 1)
        setShow(true)
    }}>
        <Icon i="AddCart" />
        Add to cart
        </span>
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