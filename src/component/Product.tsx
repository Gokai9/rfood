import AddtoCart from './AddtoCart';
import styles from './Product.module.css'
import { Ide } from '../utils/types';

export default function Product({dat}:Ide) {
    return (
        <div className={styles.de}>
            <img className={styles.imag} src={`${"."}${dat.image.desktop}`} alt={dat.name} height={250} width={250}/>
            <AddtoCart />
            <p>{dat.category}</p>
            <p>{dat.name}</p>
            <p>{dat.price}</p>
        </div>
    )
}