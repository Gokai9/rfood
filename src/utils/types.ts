import { Dispatch, SetStateAction } from "react";

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
    "cartsD": ICart[]
}
export interface CC {
    handleCart: (ic: ICart) => void
}
