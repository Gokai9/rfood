export function toFloat(price:number) {
    const pricefloat = price.toFixed(2)
    return "$" + pricefloat
}