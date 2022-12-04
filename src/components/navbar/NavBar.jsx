import React from "react";
import Logo from "../../assets/logo.png";
import CartWidget from "../Cart/CartWidget";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

const NavBar = () => {
    const { cart } = useCartContext();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark color-fondo">
        <div className="container-fluid row">
            <img className="foto-logo" src={Logo}  alt="logo"></img>
            <NavLink className="navbar-brand col-md-2" >CLOTHES AND SHOES</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse col-md-4" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-link active" aria-current="page" to='/' >Productos</NavLink>
                    <NavLink className="nav-link" to='/category/:Mujer' >Mujer</NavLink>
                    <NavLink className="nav-link" to='/category/:Hombre' >Hombre</NavLink>
                    <NavLink className="nav-link disabled" to='/'>Promociones</NavLink>
                </div>
            </div>
            <form className="d-flex col-md-3">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-light" type="submit">Search</button>
            </form>
                    <div className="col-md-1" >
                        {cart.length ===0 ? null : <CartWidget /> }
                        
                    </div>
            </div>
        </nav>
    )
}

export default NavBar;
