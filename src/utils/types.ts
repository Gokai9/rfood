
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
    "id": string;
    "image": {
        "thumbnail": string;
        "mobile": string;
        "tablet": string;
        "desktop": string;
   },
   "name": string;
   "amount": number;
   "price": number;
   "show": boolean;
}

export interface Action {
    type: string;
    payload: ICart;
    show?: boolean
}

export interface State {
    carts: ICart[];
}