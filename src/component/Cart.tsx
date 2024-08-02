import { ICart } from "../utils/types";
import styles from "./Cart.module.css"

interface I {
    cart: ICart
}

export default function Cart({cart}: I) {
    return (
        <div className={styles.container}>
            <div>
                <h3>{cart.name}</h3>
                <p><span>{cart.amount}X</span>
                <span>@${cart.price}</span>
                </p>
            </div>
            <button>X</button>
        </div>
    )
}