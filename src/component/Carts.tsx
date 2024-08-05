import styles from './Carts.module.css'
import EmptyCart from '../../public/assets/images/illustration-empty-cart.svg'
import { Icarts } from '../utils/types'
import Cart from './Cart'
import { toFloat } from '../utils/helper'
import { useState } from 'react'
import Modal from './Modal'

export default function Carts({cartsD, deleteCart}: Icarts) {
    const [showModal, setShowModal] = useState(false)
    const total = cartsD.reduce((acc, curValue) => {
        return acc += curValue.amount * curValue.price
    }, 0)
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Your Cart ({cartsD.length})</h1>
            {showModal ? <Modal carts={cartsD} total={toFloat(total)}/>: null}
            {cartsD.length > 0 ?
            <div className={styles.scart}>
            {cartsD.map((c) => <Cart key={c.id} cart={c} deleteCart={deleteCart}/>)}
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