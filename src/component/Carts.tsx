import styles from './Carts.module.css'
import EmptyCart from '../../public/assets/images/illustration-empty-cart.svg'
import { Icarts } from '../utils/types'

export default function Carts({cartsD}: Icarts) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Your Cart ({cartsD.length})</h1>
            {cartsD.length > 0 ? <ul>{cartsD.map((c) => <li>{c.name}</li>)}</ul>: 
            <div>
            <img src={EmptyCart} alt="empty" />
            <p>Your added dessert will be appear here.</p>
            </div>}
        </div>
    )
}