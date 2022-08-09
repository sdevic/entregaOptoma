

//Creo las variables para poder guardar los datos de carga
let cliente;
let producto;
let precio;
//creo un array, el primer item va a ser cero, lo hice para poder asignarles a futuro numero a la factura con el length pero estimo que lo voy a borrar y se lo voy a asignar con length +1, tambien le voy a crear mas objetos para poder usarlos como estadistica.
let facturas =[
    0,{
        cliente: "Florencia",
        producto: "Televisor",
        precio: 1000
    }
];


let seleccionarFac = document.querySelector("#btnFac");
seleccionarFac.addEventListener("click", cargarFactura);

//Al probar agregar un evento al boton cliente  me da un error , no entiendo el porque asi que aca abajo lo dejo como intente y no funciono
//let seleccionar = document.querySelector("#btnCli");
//seleccionar.addEventListener("click",  cargarClientes);



//Creo un constructor para poder guardar mis facturas en un objeto
class Factura{
    constructor(cliente, producto, precio){
        this.cliente = cliente;
        this.producto = producto;
        this.precio = precio;
    }
}


 



//Creo una funcion para cargar la factura y la guardo en el storage dentro de un array

function cargarFactura(){
        clientes.value="";
        productos.value="";
        valor.value="";
    
    document.getElementById("nuevaFactura").style.display = "block";
    document.getElementById("facturaGenerada").style.display = "none";
   
    const factura = document.querySelector('#cargaFactura');
         
    factura.addEventListener("submit",(e) =>{
        e.preventDefault();
        cliente =  clientes.value;
        producto = productos.value;
        precio = valor.value;
        let nFactura = new Factura(cliente, producto, precio);
        facturas.push(nFactura);
        localStorage.setItem("facturas", JSON.stringify(facturas));
        
        mostrarFacturaCargada();
   return  facturas;
   
       
        
        
        
        

        
    })
}

    


//muestra la factura cargada una vez apretado el boton y sin poder editar, lo hice con otro formulario pensando q asi se me iba a solucioar el problema de los objetos duplicados, pero no paso, no se si es mejor tener dos formularios en el html o grisar el que ya tengo, al margen, en la primera carga en array se completa bien, pero cuando vuelvo a cargarlo me duplica el objeto que pusheo y no se por que.
function mostrarFacturaCargada(){
    document.getElementById("facturaGenerada").style.display = "block";
    document.getElementById("nuevaFactura").style.display = "none";
    const volverFactura = document.querySelector('#verFactura');
    const nCliente = document.querySelector('#clientesFac');
    nCliente.value = cliente;
    const nProducto = document.querySelector('#productosFac');
    nProducto.value = producto;
    const nPrecio = document.querySelector('#valorFac');
    nPrecio.value = precio;
    
    
    volverFactura.addEventListener("submit",(e) =>{
        e.preventDefault();
      
        
        
        cargarFactura();
        

    })
}

function cargarClientes(){
    document.getElementById("facturaGenerada").style.display = "block";
    document.getElementById("nuevaFactura").style.display = "block";
    document.getElementById("nuevoCliente").style.display = "none";


}

