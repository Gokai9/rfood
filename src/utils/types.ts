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
export interface  Ide {
    "dat": Idessert
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
    "carts": ICart[]
}