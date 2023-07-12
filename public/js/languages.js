const flagsElement = document.getElementById("flags");

const textsTochange = document.querySelectorAll("[data-section]")

//funcion que se encarga de leer el json del idioma seleccionado

const changeLanguage = async language => { 
    const requestJson = await fetch(`./languages/${language}.json`)
    const texts = await requestJson.json()

    for (const textTochange of textsTochange) {
        const section = textTochange.dataset.section;
        const value = textTochange.dataset.value
        
        textTochange.innerHTML = texts[section][value];
    }
}
flagsElement.addEventListener("click", e => {
    changeLanguage(e.target.parentElement.dataset.language);
})