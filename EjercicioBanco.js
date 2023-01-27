let password="1234";
let userName="juanito";
let usuarioIngresado;
let contraseñaIngresada;
let primerMensaje="Ingrese su Nombre de Usuario. Ayuda: "+userName;
do{
    usuarioIngresado=prompt(primerMensaje);
    primerMensaje="Usuario No Existente, Ingrese otra vez. Ayuda: "+userName;
}while(usuarioIngresado!=userName);

let primerMensajeContraseña="Bienvenido "+userName+". Ingrese su Contraseña. Ayuda: "+password;
do{
    contraseñaIngresada=prompt(primerMensajeContraseña);
    primerMensajeContraseña="Contraseña Invalida, Ingrese otra vez. Ayuda: "+password;
}while(contraseñaIngresada!=password);
alert("Usuario Autenticado");