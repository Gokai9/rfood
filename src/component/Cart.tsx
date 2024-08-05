import { toFloat } from "../utils/helper";
import { ICart } from "../utils/types";
import styles from "./Cart.module.css"

interface I {
    cart: ICart,
    deleteCart: (id: string) => void
}

export default function Cart({cart, deleteCart}: I) {
    return (
        <div className={styles.container}>
            <div>
                <h3>{cart.name}</h3>
                <p><span>{cart.amount}X</span>
                <span>@{toFloat(cart.price)}</span>
                <span>{toFloat(cart.amount * cart.price)}</span>
                </p>
            </div>
            <button className={styles.btn} onClick={() => deleteCart(cart.id)}>X</button>
        </div>
    )
}