/* Array für die Menge (z.B. 500 wenn 500g Tomatensoße verwendet werden) => Wichtig für den Portionsrechner*/
let quantity = [300, 250, 1, 1, 1, 3, 1, '', '', ''];

/* Array für die Einheiten */
let unit = ['g', 'ml', 'Bund', '', 'El', '', 'Tl', '', '', ''];

/* Array mit der Bezeichnung der Produkte im Plural */
let product = [
    'Brötchen vom Vortag',
    'Milch',
    'Petersilie(n)',
    'Zwiebel',
    'Butter',
    'Ei(er)',
    'abgeriebene Zitronenschale',
    'Salz',
    'Pfeffer',
    'Muskatnuss, frisch gerieben'
];


/* Funktion, welche das jeweilige Rezept lädt. Funktionsname und Werte müssen jeweils angepasst werden. */

function loadSemmelknödel() {

    document.getElementById('recipe-title').innerHTML = "Bayrische Semmelknödel";
    document.getElementById('time-info').innerHTML = "45 min";
    document.getElementById('difficulty-info').innerHTML = "mittel";
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
    document.getElementById('time3-info').innerHTML = "Gesamtzeit ca. 45 Minuten";
    document.getElementById('preparation-text').innerHTML = `
        Die Semmeln in dünne Scheiben schneiden und in eine große Schüssel geben. Die Milch erhitzen und darüber gießen, 20 Min. quellen lassen.
    <br><br>
        Die Petersilie waschen und trockenschütteln, die Blätter fein hacken. Die Zwiebel schälen und in kleine Würfel schneiden. Die Butter erhitzen, die Zwiebel darin glasig andünsten und beiseite stellen. In einem großen, weiten Topf reichlich Salzwasser zum Kochen bringen.
    <br><br>
        Die eingeweichten Semmeln mit Eiern, Zwiebel und Petersilie gut vermengen. Mit Salz, Pfeffer, Muskat und Zitronenschale würzen. Mit angefeuchteten Händen kleine Knödel formen und im siedenden Wasser 20 Min. ziehen (nicht kochen!) lassen.
    `;
    document.getElementById('food-picture').innerHTML = `<img class="fpic-one" src="img/Semmelknödel.jpg"></img>`;
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
