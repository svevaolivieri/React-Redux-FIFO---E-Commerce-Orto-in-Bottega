import { useDispatch } from "react-redux";
import { aggiungiAlCarrello } from "../redux/cartSlice";
import { rimuoviProdotto } from "../redux/productSlice";


function ProductCard({ product }) {
    const dispatch = useDispatch();
    const handleAggiungiAlCarrello = () => {
        dispatch(aggiungiAlCarrello(product));
        dispatch(rimuoviProdotto(product));
    }



    return (
        <>
            <div className="product-card">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <p className="data"><strong>Data di arrivo: </strong>{product.arrivalDate}</p>
                <p className="data"><strong> Data di scadenza: </strong>{product.expiryDate}</p>
                <div className="div-prezzo">
                    {product.toBeExpired &&(
                        <p className="old-price">€ {product.price}</p>
                    ) } 
                        <p className="price">€ {product.finalPrice}</p>
                    
                </div>
                <button onClick={handleAggiungiAlCarrello}>Aggiungi al carrello</button>
            </div>
        </>

    );
}
export default ProductCard;