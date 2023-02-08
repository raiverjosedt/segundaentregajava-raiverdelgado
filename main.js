class Cliente {
    constructor(nombre, apellido, dni, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.saldo = saldo;
    }
}


const raiver = new Cliente("raiver", "delgado", 25120345, 1000);
const mari = new Cliente("mari", "serrano", 25120346, 2000);
const gustavo = new Cliente("gustavo" , "serrano", 25120347, 3000);


const arrayClientes = [raiver, mari,gustavo];

console.log(arrayClientes);


function menu() {
    alert("Bienvenido a TELEFONIA CLARO");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Nuevo cliente \n 2) Eliminar Cliente \n 3) Consulta de Cliente \n 4) Salir"));
    return opcion;
}


function nuevoCliente() {
    let nombre = prompt("Ingrese el nombre del cliente:");
    let apellido = prompt("Ingrese el apellido del Cliente:");
    let dni = parseInt(prompt("Ingrese el dni del cliente: "));
    let saldo = parseInt(prompt("Ingrese el saldo: "));
    let cliente = new Cliente(nombre, apellido, dni, saldo);
    arrayClientes.push(cliente);
    console.log(arrayClientes);
}


function eliminarCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let cliente = arrayClientes.find( cliente => cliente.dni === dni);
    let indice = arrayClientes.indexOf(cliente);
    arrayClientes.splice(indice, 1);
    console.log(arrayClientes);
}


function consultaCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    console.log(cliente);
}


function salir() {
    alert("Gracias por utilizar CLARO");
}

let opcion = menu(); 

switch(opcion) {
    case 1: 
        nuevoCliente();
        break;
    case 2: 
        eliminarCliente();
        break;
    case 3:
        consultaCliente();
        break;
    case 4: 
        salir();
        break;
    default: 
        alert("NO ERES CLIENTE CLARO")
        break;
}