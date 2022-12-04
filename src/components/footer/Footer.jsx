import React from "react";
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="contacto col-md-5 ">
                    <h5> Conocenos </h5>
                    <h5> Centro de ayuda </h5>
                
                </div>

                <div className="redes-footer col-md-4">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-whatsapp"></i>
                </div>
            </div>
            
            <br />
            <div className="byMC">
                <h6>By Muriel Carrasco Lara</h6>
            </div>

         </div>
        
    )
}

export default Footer;