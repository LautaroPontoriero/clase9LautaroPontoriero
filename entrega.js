document.title = "comprapasajes.com ✈"
const tituloPrincipal = document.getElementsByTagName("span")[0],
h2 =  document.getElementById("h2"),
ingreso =  document.getElementById("ingreso"),
parrafo =  document.getElementsByTagName("p"),
parrafoClases =  document.getElementsByClassName("contenedor"),
contenedor =  document.getElementById("contenedor"),
input =  document.getElementById("ingreso");

const destino = [
    { id: 1, nombre: "bariloche", precio: 45000 },
    { id: 2, nombre: "cordoba", precio: 30000 },
    { id: 3, nombre: "rosario", precio: 25000 },
    { id: 4, nombre: "tucuman", precio: 35000 },
]

const muestraInput = document.querySelectorAll('input[type="text"]');
console.log(muestraInput);

const servicios = [
];
tituloPrincipal.innerText = "Comprapasajes.com ✈";
h2.innerText = "Viaja con locura 🤯";
ingreso.innerText = "Buscá tu destino!";
ingreso.onclick=()=>{
    console.log('Ingresó a su usuario');
}

function filtrarServicio(arr, filtro) {
    const filtrado = arr.filter((el) => {
      return el.nombre.includes(filtro);
    });
    return filtrado;
  }
btnSearch.addEventListener("click", () => {
    let resultado = filtrarServicio(destino, input.value.toLowerCase());
    console.log(resultado);
});

const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  
  let formulario= e.target
  console.log(formulario.children[0].value);
  console.log(formulario.children[1].value);
})
