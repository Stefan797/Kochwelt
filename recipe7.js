/* Array für die Menge (z.B. 500 wenn 500g Tomatensoße verwendet werden) => Wichtig für den Portionsrechner*/
let quantity = [8, 600, 4, 4, 1, 1, 1];

/* Array für die Einheiten */
let unit = ['K', 'g', 'Tl', 'Tl', 'P', '', ''];

/* Array mit der Bezeichnung der Produkte im Plural */
let product = [
    'Vanilleeis',
    'Tiefkühlhimbeeren',
    'Rohrzucker oder andere Süßmittel',
    'Schokostreusel',
    'Vanillezucker',
    'Nach Wahl Eierlikör oder Amaretto',
    'Frische Pfefferminzblätter zum Verzieren'
];


/* Funktion, welche das jeweilige Rezept lädt. Funktionsname und Werte müssen jeweils angepasst werden. */

function loadIceCreamWithRaspberries() {

    document.getElementById('recipe-title').innerHTML = "Eis mit heißen Himbeeren";
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
    Gefrorene Himbeeren in einem Topf lansgam erhitzen, Rohrzucker und Vanillezucker zu geben. 
    <br><br>
    Den Boden der Eisschalen mit Amaretto oder Eierlikör leicht bedeckt einfüllen. 
    <br><br>
    Vanilleeis mit einem Eisportionierer je zwei Kugeln in die Eisschalen füllen, Schokostreusel und die heißen Himbeeren draufgeben. 
    <br><br>
    Zum Schluss mit Pfefferminzblättern verzieren.
    `;
    document.getElementById('food-picture').innerHTML = `<img class="fpic-one" src="img/EismitH.jpg"></img>`;
    document.getElementById('profile').innerHTML = `
    <img class="profile-pic mr-medium" src="img/profile.png"></img>
        <div class="profile-text-box">
          <p id="profile-name">Stefan</p><br>
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