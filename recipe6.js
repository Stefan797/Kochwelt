/* Array für die Menge (z.B. 500 wenn 500g Tomatensoße verwendet werden) => Wichtig für den Portionsrechner*/
let quantity = [4, 300, 1, 1, 2, 1, 1, 100, 1, 20, 1/2, 1/2, 1/2, 1/2, 1/2, 1/2, 1/2];

/* Array für die Einheiten */
let unit = ['', 'g', '', '', '', '', '', 'g', 'El', 'ml', 'El', 'El', 'El', 'El', 'El', 'El', 'El'];

/* Array mit der Bezeichnung der Produkte im Plural */
let product = [
    'Taco-Shell(s)',
    'Rinder-Hackfleisch',
    'gelbe Paprika(s)',
    'rote Chili-Schote(n)',
    'Frühlingszwiebel(n)',
    'Knoblauchzehe(n)',
    'kleine(s) Salatherz(en)',
    'Cheddar-Käse',
    'Tomatenmark',
    'Olivenöl',
    'feingemahlenes Meersalz',
    'gemahlener bunter Pfeffer',
    'mildes Paprika-Pulver',
    'gemahlenes Korianderkorn',
    'gemahlener Kreuzkümmel',
    'gerebelter Oregano',
    'weißer Rohrzucker',
];


/* Funktion, welche das jeweilige Rezept lädt. Funktionsname und Werte müssen jeweils angepasst werden. */

function loadTaco() {

    document.getElementById('recipe-title').innerHTML = "Mexikanische Tacos";
    document.getElementById('time-info').innerHTML = "30 min";
    document.getElementById('difficulty-info').innerHTML = "simpel";
    document.getElementById('calendar-info').innerHTML = "22.01.2021";

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


    document.getElementById('time2-info').innerHTML = "ca. 30 Minuten";
    document.getElementById('time3-info').innerHTML = "Gesamtzeit ca. 30 Minuten";
    document.getElementById('preparation-text').innerHTML = `
        Zuerst schneidet man die Paprika, die Frühlingzwiebeln, den Knoblauch und die Chili in winzige Würfel.
        <br><br>
        Das klein geschnittene Gemüse brät man anschließend in Olivenöl an und gibt nach zwei Minuten die Gewürzmischung hinzu.
        <br><br>
        Weitere zwei Minuten später fügt man das Rinder-Hackfleisch und einen Esslöffel Tomatenmark dazu und brät auch dies scharf an.
        <br><br>
        Währenddessen wärmt man die Taco-Shells im vorgeheizten Backofen bei 180 Grad fünf Minuten auf.
        <br><br>
        Zum Servieren legt man jeweils ein Salatblatt in den Taco, gibt zwei Esslöffel der Fleisch-Gemüsemischung darauf und bestreut sie mit dem geriebenen Cheddar.
        <br><br>
        Am besten serviert man die Tacos mit Dips wie Pico de Gallo, Sour Cream, Guacamole oder Salsa Roja. Guten Appetit!
    `;
    document.getElementById('food-picture').innerHTML = `<img class="fpic-one" src="img/Taco.jpg"></img>`;
    document.getElementById('profile').innerHTML = `
    <img class="profile-pic mr-medium" src="img/profile.png"></img>
        <div class="profile-text-box">
            <p id="profile-name">Destay</p>
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