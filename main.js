class Prenda{
    constructor(id,marca,talle,color,tipo){
        this.id = id;
        this.marca = marca;
        this.talle = talle;
        this.color = color
        this.tipo = tipo;
    }
}

let remeras = [];
let pantalones = []; 
let zapatillas = [];

const agregarPrenda = (prenda) => {
    if (prenda.tipo == 'R'){
        remeras.push(prenda)
    }

    else if (prenda.tipo == 'P'){
        pantalones.push(prenda)
    }
    else if (prenda.tipo == 'Z'){
        zapatillas.push(prenda)
    }
}

let cantidadPrendas = parseInt(prompt('Cuantas prendas desea cargar?:'));
var idI = 0

if (cantidadPrendas > 0){
    for (let i = 0; i < cantidadPrendas;i++){
        idI += 1
        let tipoPrenda = prompt('Va a cargar una remera "R", un pantalon "P" o un par de zapatillas "Z"?:')
        if (tipoPrenda == 'R'){
            let id = idI;
            let marca = prompt('Ingrese el nombre del marca:');
            let talle = prompt('Ingrese un talle:');
            let color = prompt('Ingrese el color:');
            let tipo = tipoPrenda
            let remera = new Prenda(id,marca,talle,color,tipo);
            agregarPrenda(remera);
        }
        else if (tipoPrenda == 'P'){
            let id = idI;
            let marca = prompt('Ingrese el nombre del modeloo:');
            let talle = parseInt(prompt('Ingrese un talle:'));
            let color = prompt('Ingrese el color:');
            let tipo = tipoPrenda
            let pantalon = new Prenda(id,marca,talle,color,tipo);
            agregarPrenda(pantalon);
        }
        else if (tipoPrenda == 'Z'){
            let id = idI;
            let marca = prompt('Ingrese el nombre del marca:');
            let talle = parseInt(prompt('Ingrese un talle:'));
            let color = prompt('Ingrese el color:')
            let tipo = tipoPrenda
            let zapatiila = new Prenda(id,marca,talle,color,tipo);
            agregarPrenda(zapatiila);
        }
        else{
            alert('Esa opcion no es valida:');
            i -= 1;
            idI -= 1;
        }
    }              
}
else{
    alert('No se va a cargar ninguna prenda')
}



let mostrarProductos = prompt('Desea ver los productos Almacenados? "S" para si, Cualquier otra tecla para no.')

if (mostrarProductos == 'S'){
    for (let i = 0; i < remeras.length; i++){
        alert(`Remera: ${remeras[i].marca}\nTalle: ${remeras[i].talle}\nColor: ${remeras[i].color}\nId: ${remeras[i].id}`)
    }
    for (let i = 0; i < pantalones.length; i++){
        alert(`Pantalon: ${pantalones[i].marca}\nTalle: ${pantalones[i].talle}\nColor: ${pantalones[i].color}\nId: ${pantalones[i].id}`)
    }
    for (let i = 0; i < zapatillas.length; i++){
        alert(`Zapatilla: ${zapatillas[i].marca}\nTalle: ${zapatillas[i].talle}\nColor: ${zapatillas[i].color}\nId: ${zapatillas[i].id}`)
    }
}
else{
    alert('Usted selecciono "No"')
}

const buscarPrenda = (id) =>{
    let arrayId = remeras.concat(pantalones,zapatillas)
    let encontrar = arrayId.find((prenda)=>prenda.id == id)
    if (encontrar === undefined){
         return alert('No se encontro ningun ID')
    }
    else{
        return alert(`Tipo: ${encontrar.tipo}\nMarca: ${encontrar.marca}\nTalle: ${encontrar.talle}\nColor: ${encontrar.color}\nId: ${encontrar.id}`);
    }
}

let queBuscar = prompt('Si desea buscar alguna prenda por su ID presione "S". Si no, cualquier tecla menos "S"');

if(queBuscar == "S"){
    let buscar = prompt('Ingrese el id de la prenda que desea informacion:');
    buscarPrenda(buscar);
}
else{
    alert('No va a buscar nada.')
}

const filtrarPrenda = (marcaFiltrar) =>{
    let arrayMarca = remeras.concat(pantalones,zapatillas)
    let encontrarTodo = arrayMarca.filter((prenda)=>prenda.marca == marcaFiltrar);
        return encontrarTodo;
}


let marcaFiltrar = prompt('Que marca desea encontar? Si no desea buscar nada escriba "ESC"')

if (marcaFiltrar != 'ESC'){
    let marcaEncontrada = filtrarPrenda(marcaFiltrar);

document.write(`<h1>Prendas ${marcaFiltrar} encontradas:</h1><hr>`);

for (let i = 0;i<marcaEncontrada.length;i++){
    document.write(` </br> <strong>Nº: ${i+1}</strong></br> Tipo: ${marcaEncontrada[i].tipo} </br> color: ${marcaEncontrada[i].color} </br> talle: ${marcaEncontrada[i].talle} 
     `)
}
}
else{
    alert('No buscara nada.')
}
