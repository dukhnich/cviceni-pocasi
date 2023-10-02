import predpoved from "./data.js";
const urlParams = new URLSearchParams(window.location.search);
const day = urlParams.get('den');
// const day = window.location.hash.slice(1);
const dayData = predpoved[day];
const main = document.querySelector('.container');
main.innerHTML = ''
console.log(dayData)
if (!dayData) {
    main.innerHTML = `<h1>Incorrect day<h1>`
} else {
    main.innerHTML = `
        <a href="index.html">Back</a>
        <h1>${dayData.den}</h1>
        <section class="day__section day__section--temperatures">
            <h2>Teplota</h2>
            <p>Ráno: ${dayData.ranni_teplota} °C</p>
            <p>Den: ${dayData.denni_teplota} °C</p>
            <p>Odpoledne: ${dayData.odpoledni_teplota} °C</p>
            <p>Večer: ${dayData.vecerni_teplota} °C</p>
        </section>
        <section class="day__section day__section--details">
            <h2>Detaily</h2>
            <p>Stav: ${dayData.stav_pocasi}</p>
            <p>Rychlost větru: ${dayData.rychlost_vetru} km/h</p>
            <p>Tlak: ${dayData.tlak} hPa</p>
        </section>
        <section class="day__section day__section--description">
            <p>${dayData.popis_pocasi}</p>
        </section>
    `
    document.title = dayData.den;
}