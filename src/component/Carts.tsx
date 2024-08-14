import styles from './Carts.module.css'
import EmptyCart from '../../public/assets/images/illustration-empty-cart.svg'
import { State } from '../utils/types'
import Cart from './Cart'
import { toFloat } from '../utils/helper'
import { useReducer, useState } from 'react'
import Modal from './Modal'
import { reducer } from '../reducer/reducer'

const initialState: State = {carts: []}
export default function Carts() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [c, setC] = useState<State>(state)
    const [showModal, setShowModal] = useState(false)
    const total = c.carts.reduce((acc, curValue) => {
        return acc += curValue.amount * curValue.price
    }, 0)
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Your Cart ({c.carts.length})</h1>
            {showModal ? <Modal carts={c.carts} total={toFloat(total)}/>: null}
            {c.carts.length > 0 ?
            <div className={styles.scart}>
            {c.carts.map((c) => <Cart key={c.id} cart={c}/>)}
            <p><span>Order Total: </span> <span>{toFloat(total)}</span></p>
            <button className={styles.btn} onClick={() => setShowModal(true)}>Confirm order</button>
            </div>: 
            <div className={styles.empty}>
            <img src={EmptyCart} alt="empty" />
            <p>Your added dessert will be appear here.</p>
            </div>}
        </div>
    )
}