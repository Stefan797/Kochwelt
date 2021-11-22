/* Array für die Menge (z.B. 500 wenn 500g Tomatensoße verwendet werden) => Wichtig für den Portionsrechner*/
let quantity = [250, 250, 1, 80, 1, 1];

/* Array für die Einheiten */
let unit = ['g', 'g', 'B', 'g', 'P', 'P'];

/* Array mit der Bezeichnung der Produkte im Plural */
let product = [
    'Magerquark',
    'Mascarpone',
    'Becher Schlagsahne (geschlagen)',
    'Zucker',
    'Spekulatius',
    'TK Beeren'
];


/* Funktion, welche das jeweilige Rezept lädt. Funktionsname und Werte müssen jeweils angepasst werden. */

function loadTiramisuWithBerries() {

    document.getElementById('recipe-title').innerHTML = "Beerentiramisu";
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
    Magerquack mit Mascarpone zusammenrühren; mit Zucker nach Geschmack süßen, geschlagene Sahne unterheben.  
    <br><br>
    In einem Gefäß schichten: <br>
    
    Eine Hälfte der Creme als Bodenschicht, Schicht Spekulatius, Schicht TK Beeren gefroren auf den Keksen verteilen.  
    <br>
    Die andere Hälte der Creme zum Abschluss.
    <br><br>
    Wenn man die Nachspeise gleich essen möchte, ist es besser frische Beeren zu nehmen.
    `;
    document.getElementById('food-picture').innerHTML = `<img class="fpic-one" src="img/tiramisu.jpg"></img>`;
    document.getElementById('profile').innerHTML = `
    <img class="profile-pic mr-medium" src="img/profile.png"></img>
        <div class="profile-text-box">
            <p id="profile-name">Stefan</p>
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