import styles from './Carts.module.css'
import EmptyCart from '/assets/images/illustration-empty-cart.svg'
import Cart from './Cart'
import { toFloat } from '../utils/helper'
import { useContext, useState } from 'react'
import Modal from './Modal'
import { cartsContext } from '../reducer/reducer'

export default function Carts() {
    const state = useContext(cartsContext)
    const [showModal, setShowModal] = useState(false)
    const total = state.carts.reduce((acc, curValue) => {
        return acc += curValue.amount * curValue.price
    }, 0)
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Your Cart ({state.carts.length})</h1>
            {showModal ? <Modal carts={state.carts} total={toFloat(total)}/>: null}
            {state.carts.length > 0 ?
            <div className={styles.scart}>
            {state.carts.map((c) => <Cart key={c.id} cart={c}/>)}
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