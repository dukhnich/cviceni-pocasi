import predpoved from "./data.js";

const main = document.querySelector('.container');
main.innerHTML = ''

Object.keys(predpoved).forEach(key => {
    const day = predpoved[key];
    const teploty = [day.denni_teplota, day.ranni_teplota, day.odpoledni_teplota, day.vecerni_teplota];
    const section = document.createElement('section');
    section.classList.add('days__item', `days__item--${key}`)
    section.innerHTML += `
        <a href="detail?den=${key}" class="days__link">
            <h2>${day.den}</h2>
            <p>Teplota: ${Math.min(...teploty)} - ${Math.max(...teploty)} °C</p>
            <p>Stav: ${day.stav_pocasi}</p>
        <a>
    `
    main.appendChild(section);

})