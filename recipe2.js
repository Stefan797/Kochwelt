/* Array für die Menge (z.B. 500 wenn 500g Tomatensoße verwendet werden) => Wichtig für den Portionsrechner*/
let quantity = [4, 1, 2, 1, 1, ''];

/* Array für die Einheiten */
let unit = ['Stück', 'Stück', 'EL', 'Bund', 'TL', '', '', ''];

/* Array mit der Bezeichnung der Produkte im Plural */
let product = [
    'Tomate(n)',
    'Paprikaschote(n), grün',
    'Kräuter der Provence',
    'Dill',
    'Senf',
    'etwas Salz und weißer Pfeffer',
    'etwas Olivenöl',
    'etwas Balsamico',
];


/* Funktion, welche das jeweilige Rezept lädt. Funktionsname und Werte müssen jeweils angepasst werden. */

function loadAntipasti() {

    document.getElementById('recipe-title').innerHTML = "Antipasti";
    document.getElementById('time-info').innerHTML = "15 min";
    document.getElementById('difficulty-info').innerHTML = "normal";
    document.getElementById('calendar-info').innerHTML = "01.02.2021";

    /* Tabelle mit den Zutaten */
    for (let i = 0; i < quantity.length; i++) {
        document.getElementById('ingredients').innerHTML += `
        <tr>
            <td class="pt-small pb-small pl-medium">${quantity[i]}</td>
            <td class="pt-small pb-small">${unit[i]}</td>
            <td class="pt-small pb-small pr-medium">${product[i]}</td>
        </tr>
    `
    };


    document.getElementById('time2-info').innerHTML = "ca. 15 Minuten";
    document.getElementById('time3-info').innerHTML = "Gesamtzeit ca. 15 Minuten";
    document.getElementById('preparation-text').innerHTML = `
    Die Tomaten quer halbieren, die Kerne mit einem Teelöffel ausstechen. Die Paprika in große Stücke zerteilen. Das Gemüse auf einem Blech auslegen.<br>
    <br>Den Ofen auf 180 Grad vorheizen.<br>

    Den Dill hacken und mit den anderen Zutaten zu einer Marinade verrühren. Das Gemüse großzügig mit der Marinade bepinseln und im vorgeheizten Ofen ca. 30 Minuten backen.<br>
    <br>
    Kalt mit Fladenbrot servieren.
    `;
    document.getElementById('food-picture').innerHTML = `<img class="fpic-one" src="img/paprika-tomaten-vorspeise.jpg"></img>`;
    document.getElementById('profile').innerHTML = `
    <img class="profile-pic mr-medium" src="img/profile.png"></img>
        <div class="profile-text-box">
            <p id="profile-name">Benjamin</p>
            <span id="profile-text">Hobbykoch</span>
        </div>
    `;

}


/* Funktion zum Berechnen der Portionen */
/* Annahme: alle Rezepte werden zunächst für 4 Portionen angelegt */

function calculate() {
    let portionfield = +document.getElementById('portionfield').value;

    if (portionfield < 0) {
        alert("Bitte geben Sie eine Zahl größer als 0 ein.");
    } else {

        /* Tabelle mit den Zutaten wird gelöscht und dann - nach Berechnung - neu erzeugt */
        document.getElementById('ingredients').innerHTML = '';

        for (let i = 0; i < quantity.length; i++) {
            if (quantity[i] == '') {
                document.getElementById('ingredients').innerHTML += `
                    <tr>
                        <td class="pt-small pb-small pl-medium">${quantity[i]}</td>
                        <td class="pt-small pb-small">${unit[i]}</td>
                        <td class="pt-small pb-small pr-medium">${product[i]}</td>
                    </tr>`
            } else {
                document.getElementById('ingredients').innerHTML += `
                <tr>
                    <td class="pt-small pb-small pl-medium">${quantity[i] / 4 * portionfield}</td>
                    <td class="pt-small pb-small">${unit[i]}</td>
                    <td class="pt-small pb-small pr-medium">${product[i]}</td>
                </tr>`
            };
        }
    }

}