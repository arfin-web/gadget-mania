import { createSlice } from '@reduxjs/toolkit'

export interface cartState {
    items: string[]
}

const initialState: cartState = {
    items: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop()
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer