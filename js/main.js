import { lista_componentes } from "./data.js";

let div_root = document.querySelector(".root")

let bloques_principales = `
    <h3>Componentes del computador</h3>
    <input type="text" class="entrada_texto">
    <div class="lista_items"></div>
`;

div_root.innerHTML = bloques_principales;

function cargar_items(texto){
    let div_items = document.querySelector(".lista_items")
    div_items.innerHTML= "";
    lista_componentes.forEach((elemento)=>{
        if(texto == ""|| texto == elemento.nombre){
            let div = document.createElement("div")
            div.classList.add("item")

            div.innerHTML = `<img src="${elemento.img}" alt="">`;
            div_items.appendChild(div);
        }
    })

    }
    


let entrada = document.querySelector(".entrada_texto")
cargar_items("");

entrada.addEventListener("input",()=>{
    cargar_items(entrada.value);
});
