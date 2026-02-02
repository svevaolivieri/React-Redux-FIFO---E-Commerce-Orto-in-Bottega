import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
name: 'cart',
initialState: {arrayCarrello: []},

reducers: {
    aggiungiAlCarrello: (state, action) => {
        const prodotto = action.payload;
        state.arrayCarrello.push(prodotto);
    },

    rimuoviDalCarrello: (state, action) => {
        const prodotto = action.payload;
        state.arrayCarrello = state.arrayCarrello.filter(p => p.id !== prodotto.id)
    },

    completaAcquisto: (state) => {
        state.arrayCarrello = []
    }
}

})

export const { aggiungiAlCarrello, rimuoviDalCarrello, completaAcquisto} = cartSlice.actions;
export default cartSlice.reducer;