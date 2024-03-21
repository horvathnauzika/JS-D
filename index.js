import { ADATSZERKEZET } from "./adat.js";
import { htmlOsszeallit } from "./fuggvenyek.js";

const GALERIA = document.querySelector(".tartalom")
GALERIA.innerHTML += htmlOsszeallit(ADATSZERKEZET)

const KEP = document.querySelectorAll(".tartalom img")
for (let index = 0; index < KEP.length; index++) {
    KEP[index].addEventListener("mouseenter", function(){
        KEP[index].classList.add("kiv");
    })
}