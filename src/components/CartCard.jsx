import { useDispatch } from "react-redux";
import { rimuoviDalCarrello } from "../redux/cartSlice";
import { aggiungiProdotto } from "../redux/productSlice";

function CartCard({ product }) {
    const dispatch = useDispatch();
    const handleRimuoviDalCarrello = () => {
        dispatch(rimuoviDalCarrello(product));
        dispatch(aggiungiProdotto(product));
    }

    return (
        <>
            <div className="card">
                <h3>{product.name}</h3>
                <p>€ {product.finalPrice}</p>
                <button onClick={handleRimuoviDalCarrello}>Rimuovi dal carrello</button>
            </div>
        </>

    );
}
export default CartCard;