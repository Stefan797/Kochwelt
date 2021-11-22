/* Array für die Menge (z.B. 500 wenn 500g Tomatensoße verwendet werden) => Wichtig für den Portionsrechner*/
let quantity = [1, 1, 20, 20, 10, 500, 300, '', '', ''];

/* Array für die Einheiten */
let unit = ['', '', 'g', 'g', 'g', 'ml', 'g', '', '', ''];

/* Array mit der Bezeichnung der Produkte im Plural */
let product = [
    'Salatgurke(n)',
    'Schalotte(n)',
    'Petersilie',
    'Dill',
    'Basilikum',
    'Gemüsebrühe',
    'Joghurt (3,5 % Fett)',
    'Salz',
    'Pfeffer',
    'scharfes Paprikapulver'
];


/* Funktion, welche das jeweilige Rezept lädt. Funktionsname und Werte müssen jeweils angepasst werden. */

function loadCucumberSoup() {

    document.getElementById('recipe-title').innerHTML = "Kalte Gurkensuppe";
    document.getElementById('time-info').innerHTML = "20 min";
    document.getElementById('difficulty-info').innerHTML = "simple";
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


    document.getElementById('time2-info').innerHTML = "ca. 20 Minuten";
    document.getElementById('time3-info').innerHTML = "Gesamtzeit ca. 20 Minuten";
    document.getElementById('preparation-text').innerHTML = `
    Gurke waschen, schälen und in grobe Stücke schneiden. Schalotte schälen und fein würfeln. Kräuter waschen, trocken schütteln, Blättchen abzupfen und grob hacken. Einige Dillspitzen beiseitelegen.
    <br><br>
    Gurke, Schalotte, Kräuter und Brühe fein pürieren. Joghurt dazugeben und das Ganze noch einmal kurz pürieren. Mit Salz und Pfeffer würzen. Zugedeckt für 1–2 Stunden kalt stellen.
    <br><br>
    Vor dem Servieren nochmal kurz durchrühren. In 4 Schälchen oder Gläsern füllen. Gegebenenfalls mit Dillspitzen garnieren.
    `;
    document.getElementById('food-picture').innerHTML = `<img class="fpic-one" src="img/cucumber-soup.jpg"></img>`;
    document.getElementById('profile').innerHTML = `
    <img class="profile-pic mr-medium" src="img/profile.png"></img>
        <div class="profile-text-box">
            <p id="profile-name">Paul</p>
            <span id="profile-text">Kochliebhaber und Programmierneuling</span>
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