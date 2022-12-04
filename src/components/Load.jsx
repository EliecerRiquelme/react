
import React from 'react';
import {ConfMsgPopUp, MsgPopUp, toastMsgPopUpNoTimer} from '../utils/functions.js';
import {collection, addDoc, getFirestore} from 'firebase/firestore';

async function addMockToFirebase() {
    const stockData = 'stock.json';
    const db = getFirestore();
    const productsTestCollection = collection(db,'stock_MarketPlace');
    let response = await fetch(stockData);  
    let data = await response.json();
    let resp = [];
    let ids = [];
    let success = true;
    let msg = '';
    let toast = toastMsgPopUpNoTimer('',"Cargando datos a Firebase",'info')
    
    await Promise.all(data.map(async (doc) =>{
        try {
            resp = await addDoc(productsTestCollection, doc);
            ids.push(resp.id)
        }catch(error){
            success = false;
            console.log("Se ha presentado el siguiente error durante el proceso de carga", error);
        }finally{
            msg ="La carga ha " + (success ? "sido exitosa" : "fallado");
            console.log(msg);
        }
    }))
    toast.close();
    let confirmSucess = await ConfMsgPopUp(msg,' ', success ? 'success' : 'error',false);
    confirmSucess.isConfirmed && success && MsgPopUp('Fueron cargados productos con los siguientes ids: '+ids.join(', '),'', 'info')
}

const Load = () => {
    
    return (
        <div>
            <hr />
            <h1>Funcionalidad de carga</h1>
                <p>Cargar información a <code>Firebase</code>.</p>
                <div id="CargarMock"  >
                    <button onClick={()=>addMockToFirebase()} className="btn btn-outline-primary">Agregar Mock de datos a Firebase</button>
                </div>
                <a className="App-link" href="https://github.com/Adn1217/React_MarketPlace"
                target="_blank" rel="noopener noreferrer"> Repositorio donde se encuentra mi aplicación de mercado en línea desarrollada en <strong>React</strong>.</a>
            <hr />
        </div>)
}

export default Load;