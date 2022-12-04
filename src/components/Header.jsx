import logo from '../logo.svg';
import React from 'react';
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom';

const Header = () => {
    const categories = ['Libros', 'Mascotas', 'Tecnologia'];
    return (
        <div>
            <header className="App-header">
                <div className="App-header brand col-3">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Link to={'/'} className="nav-link" ><h2>MarketPlace</h2></Link>
                </div>
                <nav className="navbar navbar-dark navbar-expand-lg App-header-options col-7">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link active" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/load'} className="nav-link">Carga</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={'#'} className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categorías
                                    </Link>
                                    <ul className="dropdown-menu">
                                        {categories.map( cat => {
                                            return(<li key={`${cat}_item`}><Link to={`/category/${cat}`} className="dropdown-item" >{cat}</Link></li>)
                                        })}
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Ingrese búsqueda" aria-label="Buscar" />
                                <button className="btn btn-outline-primary" type="submit">Buscar</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <CartWidget />
            </header>
            <hr />
        </div>)
}

export default Header;