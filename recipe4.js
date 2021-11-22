/* Array für die Menge (z.B. 500 wenn 500g Tomatensoße verwendet werden) => Wichtig für den Portionsrechner*/
let quantity = [500, 1000, 200, 2, '', '', ''];

/* Array für die Einheiten */
let unit = ['g', 'g', 'ml', 'Stück', '', '', ''];

/* Array mit der Bezeichnung der Produkte im Plural */
let product = [
    'Spaghetti',
    'Speck',
    'Sahne',
    'Eier',
    'Salz',
    'Pfeffer',
    'ggf. Schnittlauch oder Petersilie',
    'Salz',
    'Pfeffer',
    'scharfes Paprikapulver'
];


/* Funktion, welche das jeweilige Rezept lädt. Funktionsname und Werte müssen jeweils angepasst werden. */

function loadSpaghettiCarbonara() {

    document.getElementById('recipe-title').innerHTML = "Spaghetti Carbonara";
    document.getElementById('time-info').innerHTML = "15 min";
    document.getElementById('difficulty-info').innerHTML = "simple";
    document.getElementById('calendar-info').innerHTML = "26.01.2021";

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
    Spaghetti in reichlich Salzwasser al dente kochen. Ggf. etwas Nudelwasser abschöpfen und beiseite stellen.
    <br><br>
    Speck in der Pfanne mit wenig Öl knusprig anbraten. Mit etwas Sahne ablöschen.
    <br><br>
    Nun die Spaghetti noch tropfnass hinzugeben. Mit der restlichen Sahne übergießen und bei schwacher Hitze vermengen. Mit reichlich Salz und Pfeffer würzen.
    <br><br>
    Pfanne von der Herdplatte nehmen, die rohe Eier über die Spaghetti geben und sofort unter ständigem Rühren eine cremige Konsistenz erzeugen. Das Ei darf nicht gerinnen. Gegebenenfalls kann das Nudelwasser hinzugefügt werden, falls mehr Flüssigkeit benötigt wird.
    <br><br>
    Mit klein geschnittenem Schnittlauch oder Petersilie garnieren und sofort servieren.
    <br><br>
    `;
    document.getElementById('food-picture').innerHTML = `<img class="fpic-one" src="img/spaghetti-carbonara.jpg"></img>`;
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