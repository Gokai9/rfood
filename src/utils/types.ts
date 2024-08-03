
export interface Idessert {
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
export interface  Ide {
    "prod": Idessert
}

export interface ICart {
    id: string,
    "image": {
        "thumbnail": string;
        "mobile": string;
        "tablet": string;
        "desktop": string;
   },
   "name": string;
   "amount": number;
   "price": number
}

export interface Icarts {
    "cartsD": ICart[],
    deleteCart: (id: string) => void
}
export interface CC {
    handleCart: (ic: ICart) => void,
    updateAmount: (id: string, amount: number) => void,
    deleteCart: (id: string) => void
}
