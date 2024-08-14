import datas from "../data.json"
import Dessert from "./Product"
import styles from './ProductsLists.module.css'

export default function DessertsList() {
   
    return (
        <div className={styles.des}>
            <h1>Dessert</h1>
            <div className={styles.prodgrid}>
            {datas.map(data => <Dessert key={data.name} prod={data}/>)}
            </div>
        </div>
    )
}