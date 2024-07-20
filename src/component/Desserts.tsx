import datas from "../data.json"
import Dessert from "./Dessert"
import styles from './Desserts.module.css'

export default function Desserts() {
    return (
        <div className={styles.des}>
            <h1>Dessert</h1>
            {datas.map(data => <Dessert key={data.name} dat={data}/>)}
        </div>
    )
}