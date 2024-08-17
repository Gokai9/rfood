import IconAdd from '/assets/images/icon-add-to-cart.svg'
import IconCarbon from '/assets/images/icon-carbon-neutral.svg'
import IconDecrement from '/assets/images/icon-decrement-quantity.svg'
import IconIncrement from '/assets/images/icon-increment-quantity.svg'
import IconOrder from '/assets/images/icon-order-confirmed.svg'
import IconRemove from '../../public/assets/images/icon-remove-item.svg'

export default function Icon({i}:{i: string}) {
    let ic = IconAdd
    switch (i) {
        case "IconAdd":
            ic = IconAdd
            break;
        case "IconCarbon":
            ic = IconCarbon
            break;
        case "IconDecrement":
            ic = IconDecrement
            break;
        case "IconIncrement":
            ic = IconIncrement
            break;
        case "IconOrder":
            ic = IconOrder
            break;
        case "IconRemove":
            ic = IconRemove
            break
        default:
            break;
    }
    return <img src={ic} alt="" />
}