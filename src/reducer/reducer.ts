import { Action, State } from "../utils/types";
import { createContext, Dispatch } from 'react';

const initialState: State = {carts: []}
const initialDispatch: Dispatch<Action> = () => {}
export const cartsContext = createContext<State>(initialState);
export const cartsDispatchContext = createContext<Dispatch<Action>>(initialDispatch);

//reducer run two times
export function reducer(state: State, action: Action): State  {
    switch (action.type) {
        case 'deleteCart':
            return {
                carts: [...state.carts.filter((cart) => cart.id !== action.payload.id)]
            }
        case 'addCart':
            return {
                carts: [...state.carts, action.payload],
            }
        case 'addAmount':
            return {
                carts: [...state.carts.filter((cart) => {
                    if (cart.id === action.payload.id) {
                        cart.amount = action.payload.amount;
                        return cart
                    }
                    return cart
                })]
            }
        case 'subAmount':
            return {
                carts: state.carts.filter((cart) => {
                    if (cart.id === action.payload.id) {
                        cart.amount = action.payload.amount;
                        if (cart.amount === 0) { return}
                        return cart
                    }
                    return cart
                })
            }
        default:
            return {
                carts: []
            }
    }
}