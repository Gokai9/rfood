import { toFloat } from "../utils/helper"
import { ICart } from "../utils/types"
import Button from "./Button"
import CartModal from "./CartModal"
import styles from "./Modal.module.css"

interface I {
    carts: ICart[],
    total: string
}

export default function Modal({carts, total}: I) {
    return (
        <div className={styles.container}>
            <h1>Order Confirmed</h1>
            <p>We hope you enjoy your food!</p>
            <div className={styles.cmodal}>
                {carts.map(cart => <CartModal key={cart.id} cart={cart}/>)}
                <div className={styles.order}>Order Total <strong>{total}</strong></div>
            </div>
            <Button text="Start New Order" width="400px"/>
        </div>
    )
}