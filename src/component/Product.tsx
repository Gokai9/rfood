import styles from './Product.module.css'
import { Idessert, ICart} from '../utils/types';
import { toFloat } from '../utils/helper';
import { useState } from 'react';

interface BB {
    prod: Idessert,
    handleCart: (ic: ICart) => void,
    updateAmount: (id: string, amount: number) => void,
    deleteCart: (id: string) => void
}

export default function Product({prod, handleCart, updateAmount, deleteCart}: BB) {
    const [addAmount, setAddAmount] = useState(0)
    const [show, setShow] = useState(false)
    const reduceOne = (id: string) => {
        setAddAmount(addAmount - 1)
        updateAmount(id, -1)
        if (addAmount <= 1) {
          setShow(false)
          deleteCart(id)
        }
    }
    const addOne = (id: string) => {
        setAddAmount(addAmount + 1)
        updateAmount(id, 1)
    }
    const id = window.btoa(prod.category + prod.name)
    const but = <button className={styles.btn}><input type='button' value={'-'} onClick={() => reduceOne(id)} /><span>{addAmount}</span><input type='button' value={'+'} onClick={() => addOne(id)}/></button>
    const addbut = <button className={styles.btn} 
    onClick={() => {
        handleCart({id: id, image: {...prod.image}, name: prod.name, amount: 1, price: prod.price})
        setAddAmount(addAmount + 1)
        setShow(true)
    }}>
        Add to cart
        </button>
    return (
        <div className={styles.de}>
            <img className={styles.imag} src={`${"."}${prod.image.desktop}`} alt={prod.name} height={250} width={250}/>
                {show ? but : addbut}
            <p>{prod.category}</p>
            <p>{prod.name}</p>
            <p>{toFloat(prod.price)}</p>
        </div>
    )
}