function imprimir(){
    let nombre =  document.getElementById("username").value;
    let apellido =  document.getElementById("lastname").value;
    let edad =  document.getElementById("age").value;
    let correo =  document.getElementById("email").value;

    if (edad >= 18 ){
        alert(`hola ${nombre} ${apellido}, has aplicado correctamente te contactaremos en ${correo}`);
    }
    else{
        alert(`hola ${nombre}${apellido},no cumples con la edad requerida`);
    }
    if(nombre ==  "" || apellido =="" || edad =="" || correo ==""){
        alert(`por favor ingrese todos los campos`);
    }
}
