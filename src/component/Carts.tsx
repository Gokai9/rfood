import styles from './Carts.module.css'

export default function Carts() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Your Cart</h1>
            <p>Your added dessert will be appear here.</p>
        </div>
    )
}