/* Array für die Menge (z.B. 500 wenn 500g Tomatensoße verwendet werden) => Wichtig für den Portionsrechner*/
let quantity = [500, 1, 2, 1, 1, ''];

/* Array für die Einheiten */
let unit = ['g', 'Stück', 'EL', 'Stück', 'Spritzer', ''];

/* Array mit der Bezeichnung der Produkte im Plural */
let product = [
    'Erdbeeren',
    'Avocado(s)',
    'Honig',
    'Zitrone(n), Saft davon',
    'weißer Balsamico',
    'etwas Salz und weißer Pfeffer',

];


/* Funktion, welche das jeweilige Rezept lädt. Funktionsname und Werte müssen jeweils angepasst werden. */

function loadAvocadoStrawberry() {

    document.getElementById('recipe-title').innerHTML = "Avocado - Erdbeeer - Vorspeise";
    document.getElementById('time-info').innerHTML = "10 min";
    document.getElementById('difficulty-info').innerHTML = "simple";
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


    document.getElementById('time2-info').innerHTML = "ca. 10 Minuten";
    document.getElementById('time3-info').innerHTML = "Gesamtzeit ca. 10 Minuten";
    document.getElementById('preparation-text').innerHTML = `
    Die Erdbeeren waschen, putzen und in gleichmäßige Scheiben schneiden. Mit Honig, einer Prise Salz und etwas Pfeffer würzen und leicht mischen. 
    Die Avocado schälen, entkernen und ebenfalls in Scheiben schneiden, ca. gleich groß wie die Erdbeerscheiben, und sofort mit Zitronensaft beträufeln. 
    Erdbeer- und Avocadoscheiben behutsam und kurz miteinander mischen und auf einem großen flachen Teller anrichten. Ein paar Tropfen Balsamico darüber träufeln.<br><br>

    Diese leichte Vorspeise schmeckt an einem lauen Sommerabend richtig gut und eignet sich auch perfekt für ein Menü, da sie sehr schnell gemacht ist und auch optisch etwas hermacht. 
    Gut dazu harmoniert frisches Baguette und fruchtiger Weißwein, z. B. Gelber Muskateller.
    `;
    document.getElementById('food-picture').innerHTML = `<img class="fpic-one" src="img/avocado-erdbeer-vorspeise.jpg"></img>`;
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
/**
 * This function calculates the amount of ingredients 
 */
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