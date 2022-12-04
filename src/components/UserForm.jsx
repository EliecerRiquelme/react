import React, {useState, useContext} from 'react';
import {collection, addDoc, getFirestore} from 'firebase/firestore';
import {MsgPopUp, toastMsgPopUpNoTimer, ConfMsgPopUp} from '../utils/functions.js'
import {CartContext} from './CartContext';
import {guardarDataLocal, cargarDataLocal} from '../utils/functions.js';

const UserForm = ({items, total}) => {
    

    const {clear} = useContext(CartContext);
    const [sending, setSending] = useState(false);

    async function trySendOrder(){

        let nombres = document.getElementById("nombres").value.trim();
        let apellidos = document.getElementById("apellidos").value.trim();
        let identity = document.getElementById("identity").value.trim();
        let edad = document.getElementById("edad").value.trim();
        let pais = document.getElementById("countries").value;
        let telephone = document.getElementById("tel").value.trim();
        let mailUser = document.getElementById("user").value.trim();
        let mailServer = document.getElementById("userServer").value.trim()
        let mail = mailUser +"@"+ mailServer;

        if (nombres === '' || apellidos === '' || identity === '' || edad === '' || telephone === '' || mailUser === '' || mailServer === ''){
            MsgPopUp('Información incompleta. No es posible procesar la orden.','', 'error')
        } else {
            let confirmationProm = await ConfMsgPopUp(`¿Desea realizar la compra por ${total}?`,null,null,true);
            if (confirmationProm.isConfirmed){
            sendOrder(nombres, apellidos, identity, edad, pais, telephone, mail, items, total)
            }
        }

    }

    async function sendOrder(nombres, apellidos, identity, edad, pais, telephone, mail, items, total) {
        setSending(true);
        const date = new Date().toJSON();
        let toast = toastMsgPopUpNoTimer('',"Enviando orden",'info')
        const db = getFirestore();
        const ordersCollection = collection(db,'orders_MarketPlace');
        let itemsInCart = [];
        items.forEach((item) => { itemsInCart.push(
            {id: item.id,
            title: item.Nombre,
            price: item.Precio,
            quantity: item.seleccionados})
        })
        const order = {
            buyer: {name: nombres,
                    lastName: apellidos,
                    id: identity,
                    age: edad,
                    country: pais,
                    phone: telephone,
                    email: mail },
            items: itemsInCart,
            date: date,
            total: total
        }
        let resp = await addDoc(ordersCollection, order);
        let orderId = resp.id;
        console.log('Compra realizada : ',order);
        toast.close();
        setSending(false);
        MsgPopUp('La orden fue cargada exitosamente con el id: '+orderId,'', 'success');
        let compras = cargarDataLocal("Compra");
        compras.length === 0 && guardarDataLocal(itemsInCart, "Compra");
        compras.length > 0 && guardarDataLocal([...compras,...itemsInCart], "Compra");
        clear();
        cleanForm();    
        return orderId;
    }

    async function tryCleanForm(){
        let confirmationProm = await ConfMsgPopUp('¿Desea limpiar todo el formulario?',null,null,true);
        if (confirmationProm.isConfirmed){
            cleanForm();
            MsgPopUp('Se ha limpiado el formulario','','success');
            console.log("Se ha limpiado el formulario");
        }
    }

    function cleanForm(){
        const formInputs = [document.getElementById("nombres"), document.getElementById("apellidos"), document.getElementById("identity"), document.getElementById("edad"), document.getElementById("tel"), document.getElementById("user"), document.getElementById("userServer")];
        formInputs.forEach((input) => input.value='');
        document.getElementById("countries").value='Argentina';
    }

    return (
    <div className="buyerForm">
        <fieldset >
        <hr/>
            <legend>Información de contacto</legend>
            <form action="" method="get">
                <div id="initFields" className="input-group mb-3">
                    <div className="input-group mb-3">
                        <input id="nombres" type="text" className="form-control" placeholder="Nombres" aria-label="nombres"/>
                        <input id="apellidos" type="text" className="form-control" placeholder="Apellidos" aria-label="apellidos"/>
                        <input id="identity" type="text" className="form-control" placeholder="Identificación" aria-label="identificacion"/>
                        <input id="tel" type="tel" className="form-control" placeholder="Teléfono" aria-label="telefono"/>
                    </div>
                    <div id="initFields__EdadPais" className="input-group mb-3">
                        <input id="edad" type="number" className="form-control" placeholder="Edad" aria-label="edad"/>
                        <div id="initfield__EdadPais__Pais">
                            <label>País:</label>
                            <select className="form-select form-select-sm" name="" id="countries">
                                <option value="Argentina">Argentina</option>
                                <option value="Brasil">Brasil</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Chile">Chile</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Peru">Perú</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Venezuela">Venezuela</option>
                            </select>
                        </div>
                    </div>
                </div>
                <fieldset id="credenciales" className="credentials">
                    <legend>Credenciales de acceso</legend>
                        <div className="input-group mb-3">
                            <input id="user" type="text" className="form-control" placeholder="Usuario" aria-label="Username"/>
                            <div id="server">
                                <span className="input-group-text">@</span>
                                <input id="userServer" type="text" className="form-control" placeholder="Dominio" aria-label="Server"/>
                            </div>
                        </div>
                </fieldset>
                <hr/>
                <div className="buttons">
                        <button id="botonLimpiar" type="button" className="btn btn-secondary" onClick={() => tryCleanForm()}>Limpiar</button>
                        <button id="botonEnviar" type="button" className="btn btn-primary" onClick = {() => trySendOrder()}>{sending ? (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span className="visually-hidden">Enviando...</span></>) : "Comprar"}</button>
                </div>
            </form>
        </fieldset>
    </div>)
}

export default UserForm;