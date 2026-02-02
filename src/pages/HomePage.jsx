import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { selectorProducts } from "../redux/productSlice";

function HomePage() {
    const prodottiHome = useSelector(selectorProducts);
    return (
        <>
            <div className="container-homepage">
                {prodottiHome.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );


}
export default HomePage;