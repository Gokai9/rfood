import datas from "../data.json"
import { CC } from "../utils/types"
import Dessert from "./Product"
import styles from './ProductsLists.module.css'


export default function DessertsList({handleCart, updateAmount, deleteCart}:CC) {
   
    return (
        <div className={styles.des}>
            <h1>Dessert</h1>
            <div className={styles.prodgrid}>
            {datas.map(data => <Dessert key={data.name} prod={data} handleCart={handleCart} updateAmount={updateAmount} deleteCart={deleteCart}/>)}
            </div>
        </div>
    )
}