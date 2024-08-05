import { toFloat } from "../utils/helper";
import { ICart } from "../utils/types";
import styles from "./CartModal.module.css"

interface I {
    cart: ICart,
}

export default function CartModal({cart}: I) {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img height={50} width={50} src={cart.image.desktop} alt={cart.name} />
                <div className={styles.detail}>
                <strong>{cart.name}</strong>
                <div><span>{cart.amount}X</span>
                <span>@{toFloat(cart.price)}</span>
                </div>
                </div>
            </div>
            <span>{toFloat(cart.amount * cart.price)}</span>
        </div>
        <hr />
        </>
    )
}