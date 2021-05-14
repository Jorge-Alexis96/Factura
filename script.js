let facturaProducto = document.getElementById("facturaProducto");
let inputCantidad = document.getElementById("inputCantidad");
let inputDescripcion = document.getElementById("inputDescripcion");
let inputPrecio = document.getElementById("inputPrecio");
let inputTotal = document.getElementById("inputTotal");
let addProducto = document.getElementById("agregarProducto");
let tBody = document.getElementById("tbody");
let precioTotal = document.getElementById("precioTotal");
let guardarFactura = document.getElementById("guardarFactura");
let inputNombre = document.getElementById("inputNombre");
let inputFecha = document.getElementById("inputFecha");
let inputRuc = document.getElementById("inputRuc");
let inputNro = document.getElementById("inputNro");

let factura = {
  nombre: "",
  fecha: "",
  ruc: "",
  nro: 0,
};

inputPrecio.onchange = () => {
  let total = inputCantidad.value * inputPrecio.value;
  inputTotal.value = total.toFixed(2);
};

inputPrecio.onkeyup = () => {
  let total = inputCantidad.value * inputPrecio.value;
  inputTotal.value = total.toFixed(2);
};

inputCantidad.onchange = () => {
  let total = inputCantidad.value * inputPrecio.value;
  inputTotal.value = total.toFixed(2);
};

inputCantidad.onkeyup = () => {
  let total = inputCantidad.value * inputPrecio.value;
  inputTotal.value = total.toFixed(2);
};

addProducto.onclick = (e) => {
  e.preventDefault();
  let producto = {
    cantidad: inputCantidad.value,
    descripcion: inputDescripcion.value,
    precio: inputPrecio.value,
    total: inputTotal.value,
  };
  agregarProducto(producto);
  obtenerSumaTotal();
  limpiarFormularioAgregarProducto();
};

guardarFactura.onclick = () => {
  factura.nombre = inputNombre.value;
  factura.fecha = inputFecha.value;
  factura.ruc = inputRuc.value;
  factura.nro = inputNro.value;

  console.log(factura);
  tBody.innerText = "";
  limpiarFactura();
};

// Funciones

const agregarProducto = (e) => {
  let fila = document.createElement("tr");
  let tdNro = document.createElement("td");
  tdNro.setAttribute("class", "tableBody");
  tdNro.innerText = e.cantidad;
  let tdDes = document.createElement("td");
  tdDes.setAttribute("class", "tableBody");
  tdDes.innerText = e.descripcion;
  let tdPrec = document.createElement("td");
  tdPrec.setAttribute("class", "tableBody");
  tdPrec.innerText = e.precio;
  let tdTot = document.createElement("td");
  tdTot.setAttribute("class", "tableBody");
  tdTot.innerText = e.total;

  fila.appendChild(tdNro);
  fila.appendChild(tdDes);
  fila.appendChild(tdPrec);
  fila.appendChild(tdTot);

  tBody.appendChild(fila);
};

const obtenerSumaTotal = () => {
  let total = 0;
  let celdasPrecio = document.querySelectorAll("td + td + td +td");
  for (let i = 0; i < celdasPrecio.length; ++i) {
    total += parseFloat(celdasPrecio[i].firstChild.data);
  }
  precioTotal.innerText = total.toFixed(2);
};

const limpiarFormularioAgregarProducto = () => {
  inputCantidad.value = "";
  inputDescripcion.value = "";
  inputPrecio.value = "";
  inputTotal.value = "0.00";
  inputCantidad.focus();
};

const limpiarFactura = () => {
  inputNombre.value = "";
  inputFecha.value = "";
  inputRuc.value = "";
  inputNro.value = "";
  inputNombre.focus()
}
