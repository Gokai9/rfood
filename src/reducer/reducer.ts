import { Action, State } from "../utils/types";
import { createContext, Dispatch } from 'react';

const initialState: State = {carts: []}
const initialDispatch: Dispatch<Action> = () => {}
export const cartsContext = createContext<State>(initialState);
export const cartsDispatchContext = createContext<Dispatch<Action>>(initialDispatch);


export function reducer(state: State, action: Action): State  {
    switch (action.type) {
        case 'deleteCart':
            return {
                carts: state.carts.filter((cart) => cart.id !== action.payload.id)
            }
        case 'addCart':
            console.log(state)
            return {
                carts: [...state.carts, action.payload],
            }
        case 'addAmount':
            return {
                carts: state.carts.filter((cart) => {
                    if (cart.id === action.payload.id) {
                        cart.amount += 1;
                    }
                }),
            }
        case 'subAmount':
            return {
                carts: state.carts.filter((cart) => {
                    if (cart.amount > 1 && cart.id === action.payload.id) {
                        cart.amount -= 1;
                        return cart
                    }
                })
            }
        default:
            return {
                carts: []
            }
    }
}