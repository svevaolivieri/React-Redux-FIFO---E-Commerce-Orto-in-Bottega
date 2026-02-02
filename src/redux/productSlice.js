import { createSelector, createSlice } from '@reduxjs/toolkit';
import { Frutta, Latticini, Verdura } from '../classi/Prodotto';

const inventario = [
    new Frutta('Kiwi', new Date('2026-01-23'), new Date('2026-02-05'), 1.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSASJU4H5xJDJbWovuFcTSgGNLi2w_m4JIPuw&s'),
    new Frutta('Banana', new Date('2026-01-22'), new Date('2026-02-28'), 2.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTd74CnYYntCy_NlQPYmSLH2h3LGho09OvpQ&s'),
    new Frutta('Pera', new Date('2026-01-23'), new Date('2026-01-27'), 3.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPmEFUa29CSvLVh9HXS3LUimWX6emejwyPQ&s'),

    new Verdura('Zucchina', new Date('2026-01-23'), new Date('2026-01-26'), 2.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ93qV44Lkiw_KWQLf5HJBm0C_0WICtkfE23Q&s'),
    new Verdura('Insalata', new Date('2026-01-23'), new Date('2026-01-27'), 2.00, 'https://static.vecteezy.com/ti/foto-gratuito/t1/48241421-verde-burro-lattuga-verdura-foto.JPG'),
    new Verdura('Carota', new Date('2026-01-21'), new Date('2026-01-29'), 1.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPeXaUxdw6iZHIhKlpYQMdT0Y6i9HWMJ_bKA&s'),

    new Latticini('Provola', new Date('2026-01-23'), new Date('2026-01-30'), 7.00, 'https://www.assolatte.it/zpublish/4/uploads/4/salut_news/14691981104531146385_provola.jpg'),
    new Latticini('Mozzarella', new Date('2026-01-20'), new Date('2026-01-31'), 12.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvrgL9ADHSg-0azI-LBUiYyzdeoyuINmIupw&s'),
    new Latticini('Formaggio', new Date('2026-01-23'), new Date('2026-01-26'), 9.00, '	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ48HV5guSkTRaWvHugI3c5Svra-sSXLafmzw&s'),
]
    ;

const inventarioRedux = inventario.map(prodotto => prodotto.toObject());

export const productSlice = createSlice({
    name: 'product',
    initialState: { arrayProdotti: inventarioRedux },

    reducers: {
        aggiungiProdotto: (state, action) => {
            const prodotto = action.payload;
            state.arrayProdotti.push(prodotto);
        },

        rimuoviProdotto: (state, action) => {
            const prodotto = action.payload;
            state.arrayProdotti = state.arrayProdotti.filter(p => p.id !== prodotto.id)
        }

    }

})
export const selectorProducts = createSelector(
    [(state) => state.product.arrayProdotti],
    (products) => {
        return [...products].sort((a, b) => {
            if (a.toBeExpired && !b.toBeExpired) return -1;
            if (!a.toBeExpired && b.toBeExpired) return 1;
            if (a.toBeExpired && b.toBeExpired) {
                return parseDate(a.expiryDate) - parseDate(b.expiryDate);
            }

            return parseDate(a.arrivalDate) - parseDate(b.arrivalDate);
        });
    },
);

function parseDate(dataInStringa) {
    const [day, month, year] = dataInStringa.split('/');
    return new Date(year, month - 1, day).getTime();
}

export const { aggiungiProdotto, rimuoviProdotto } = productSlice.actions;
export default productSlice.reducer;

