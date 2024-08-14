import { useReducer } from "react";
import { toFloat } from "../utils/helper";
import { ICart, State } from "../utils/types";
import styles from "./Cart.module.css"
import { reducer } from "../reducer/reducer";

interface I {
    cart: ICart,
}
const initialState: State = {carts: []}
export default function Cart({cart}: I) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className={styles.container}>
            <div>
                <h3>{cart.name}</h3>
                <p><span>{cart.amount}X</span>
                <span>@{toFloat(cart.price)}</span>
                <span>{toFloat(cart.amount * cart.price)}</span>
                </p>
            </div>
            <button className={styles.btn} onClick={() => dispatch({type: 'deleteCart', payload: cart})}>X</button>
        </div>
    )
}