import AddtoCart from './AddtoCart';
import styles from './Product.module.css'
import { Idessert, CC, ICart } from '../utils/types';
import { Dispatch, SetStateAction } from 'react';

interface BB {
    prod: Idessert,
    handleCart: (ic: ICart) => void
}

export default function Product({prod, handleCart}: BB) {

    
    return (
        <div className={styles.de}>
            <img className={styles.imag} src={`${"."}${prod.image.desktop}`} alt={prod.name} height={250} width={250}/>
            <button className={styles.btn} onClick={() => handleCart({image: {...prod.image}, name: prod.name, amount: 1, price: prod.price})}>Add to Cart</button>
            <p>{prod.category}</p>
            <p>{prod.name}</p>
            <p>{prod.price}</p>
        </div>
    )
}