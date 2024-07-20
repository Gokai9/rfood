import styles from './Dessert.module.css'

interface Idessert {
    "image": {
        "thumbnail": string;
        "mobile": string;
        "tablet": string;
        "desktop": string;
   },
   "name": string;
   "category": string;
   "price": number
}
interface  Ide {
    "dat": Idessert
}

export default function Dessert({dat}:Ide) {
    console.log(`${"."}${dat.image.desktop}`)
    return (
        <div className={styles.de}>
            <img src={`${"."}${dat.image.desktop}`} alt={dat.name} height={250} width={250}/>
            <p>{dat.category}</p>
            <p>{dat.name}</p>
            <p>{dat.price}</p>
        </div>
    )
}