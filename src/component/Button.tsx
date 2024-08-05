import styles from './Button.module.css'

export default function Button({text, width}: {text:string, width: string}) {
    return (
        <button className={styles.btn} style={{width:`${width}`}}>{text}</button>
    )
}