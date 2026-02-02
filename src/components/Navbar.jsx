import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav>
                    <div className="logo-text">
                        <h3>L'orto in Bottega</h3>
                    </div>
                <div className="container-nav">
                    <ul>
                        <li>
                            <NavLink title="Home" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink title="Negozi" to="/negozi">Negozi</NavLink>
                        </li>
                        <li>
                            <NavLink title="Chi Siamo" to="/chi-siamo">Chi siamo</NavLink>
                        </li>           
                        <li className="carrello">
                            <NavLink title="Carrello" to="/cart">Vai al carrello</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;