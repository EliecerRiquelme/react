
const Swal = require('sweetalert2');

export function ConfMsgPopUp(msg, title, iconType, cancelButton, confMsg) {
    return Swal.fire({
        title: title || '¿Está seguro?',
        text: msg || "Se sobreescribirá la información",
        icon: iconType || 'warning',
        showCancelButton: cancelButton,
        confirmButtonColor: '#61dafb',
        focusCancel: true, 
        // cancelButtonColor: '#d33',
        confirmButtonText: confMsg || 'Aceptar'
      })
}

export function MsgPopUp(msg, title, type) {
    Swal.fire({
        icon: type || 'error',
        title: title || '',
        text: msg ||'Ha ocurrido un error',
      })
}

export function toastMsgPopUp(msg, title, type, time) {
    Swal.fire({
        
        // background: '#2AE300',
        // color: 'white',
        icon: type || 'error',
        // iconColor: 'white',
        position: 'bottom-end',
        showConfirmButton: false,
        title: title || 'Ha ocurrido un error',
        text: msg ||'',
        timer: time || 3000,
        timerProgressBar: true,
        toast: true,didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
      })
}

export function toastMsgPopUpNoTimer(msg, title, type) {
    return Swal.fire({
        
        icon: type || 'error',
        position: 'bottom-end',
        showConfirmButton: false,
        title: title || 'Ha ocurrido un error',
        text: msg ||'',
        toast: true,
      })
}

export function formatoMoneda(currency) {
    let currencyFormato = {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0
    };     
    let moneda = new Intl.NumberFormat('es-ES', currencyFormato);
    return moneda
}

export function guardarDataLocal(items, nombre){
    let dataLocalStr = JSON.stringify(items, nombre);
    localStorage.setItem(nombre, dataLocalStr);
}

export function cargarDataLocal(nombre){
    let localData = JSON.parse(localStorage.getItem(nombre)) || [];
    return localData;
}