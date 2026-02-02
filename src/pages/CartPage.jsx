import CartCard from "../components/CartCard";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { completaAcquisto } from "../redux/cartSlice";
import { useDispatch} from "react-redux";


function CartPage() {
    const prodottiCarrello = useSelector((state) => state.cart.arrayCarrello);
    const total = prodottiCarrello.reduce((sum, product) => sum + product.finalPrice, 0);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handeCompletaAcquisto = () => {
        dispatch(completaAcquisto());
        navigate("/");
    }



    if (prodottiCarrello.length === 0) {
        return (
            <div className="container">
                <div className="container-checkout">
                    <h2>Il tuo carrello è vuoto</h2>
                    <p>Non ci sono prodotti pronti per il checkout.</p>
                    <Link to="/" className="checkout-btn">
                        Torna allo Shop
                    </Link>
                </div>
            </div>
        );
    }
    return (
        <>
            <div>
                {prodottiCarrello.map((product) => (
                    <CartCard key={product.id} product={product} />
                ))}
            </div>
            <div className="container-checkout">
                <div className="div-checkout">
                    <span>Articoli</span>
                    <span>{prodottiCarrello.length}</span>
                    <span>Totale</span>
                    <span>€{total.toFixed(2)}</span>
                </div>
                <button onClick={handeCompletaAcquisto} className="checkout-btn">
                    Completa l'ordine
                </button>
            </div>
        </>
    );
}

export default CartPage;