function retornarF() {
    let fecha;
    fecha=new Date();
    let cad=fecha.getDate() + '/' + (fecha.getMonth()+1) + '/' + 
    fecha.getFullYear();
    return cad;
}

function retornarH() {
    let fecha;
    fecha=new Date();   
    let cad=fecha.getHours() + ':' + fecha.getMinutes() + ':' +
    fecha.getSeconds(); 
    return cad; 
}