import style from './css/index.scss'

$('.carousel').carousel({
    interval: 2000,
    wrap: true
})
// Slider
// Początek przycisku dodawania
$('.btn-number').click(function (e) {
    e.preventDefault();
    let fieldName = $(this).attr('data-field');
    let type = $(this).attr('data-type');
    var input = $("input[name='" + fieldName + "']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if (type == 'minus') {
            if (currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            }
            if (parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }
        } else if (type == 'plus') {

            if (currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if (parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }
        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function () {
    $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function () {
    let minValue = parseInt($(this).attr('min'));
    let maxValue = parseInt($(this).attr('max'));
    let valueCurrent = parseInt($(this).val());
    let name = $(this).attr('name');
    if (valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if (valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
});
//koniec przycisku dodawania
//znikanie strony
function hide() {
    if (document.getElementById('alarm').innerHTML == "") {
        if (document.getElementById("buttonLog").innerText == "Wyloguj") {
            document.getElementById("about").style.transition = "opacity 600ms, visibility 600ms";
            document.getElementById("about").style.opacity = "0";
            document.getElementById("about").style.visibility = "hidden";
            setTimeout(() => { document.getElementById("about").style.display = "none"; }, 700);
            setTimeout(() => { document.getElementById("next").style.display = "block"; }, 700);
            setTimeout(() => {
                document.getElementById("next").style.transition = "opacity 600ms, visibility 600ms";
                document.getElementById("next").style.opacity = "1";
                document.getElementById("next").style.visibility = "visible";
            }, 800);
            if (city == "Paryż") {
                document.getElementById("Boeing").style.display = "block";
                document.getElementById("Boeing").style.visibility = "visible";
            }
            if (city == "Warszawa") {
                document.getElementById("Embrear").style.display = "block";
                document.getElementById("Embrear").style.visibility = "visible";
            }
            if (city == "New York") {
                document.getElementById("Dreamliner").style.display = "block";
                document.getElementById("Dreamliner").style.visibility = "visible";
            }
        }
        else {
            alert("Zaloguj się")
        }
    }
    else {
        alert("Daty są błędne")
    }

}
//znikanie strony
//pogoda dla celu wylotu

const btn = document.querySelector('#btn');
const sb = document.querySelector('#mySelect')
let city = (sb.selectedIndex);
const expr = city;
switch (expr) {
    case 0:
        city = "Paryż"
        break;
    case 1:
        city = "Warszawa"
        break;
    case 2:
        city = "New York"
        break;
}
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=cff54392609650f604500218080453ce")
    .then((resp) => resp.json())
    .then((data) => {
        var array = [data.main.temp + " °C"];
        document.getElementById("output").innerText = array;
        array[2] = new Image();
        array[2].src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
        document.getElementById("output").appendChild(array[2]);
    })
fetch("https://api.openweathermap.org/data/2.5/weather?q=Katowice&units=metric&APPID=cff54392609650f604500218080453ce")
    .then((resp) => resp.json())
    .then((data) => {
        var array = [data.main.temp + " °C"];
        document.getElementById("outputKatowice").innerText = array;
        array[2] = new Image();
        array[2].src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
        document.getElementById("outputKatowice").appendChild(array[2]);
    })
//pogoda dla celu wylotu
//pogoda guzik
function weather() {
    const btn = document.querySelector('#btn');
    const sb = document.querySelector('#mySelect')
    city = (sb.selectedIndex);
    const expr = city;
    switch (expr) {
        case 0:
            city = "Paryż"
            break;
        case 1:
            city = "Warszawa"
            break;
        case 2:
            city = "New York"
            break;
    }
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=cff54392609650f604500218080453ce")
        .then((resp) => resp.json())
        .then((data) => {
            var array = [data.main.temp + " °C"];
            document.getElementById("output").innerText = array;
            array[2] = new Image();
            array[2].src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            document.getElementById("output").appendChild(array[2]);
        })
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Katowice&units=metric&APPID=cff54392609650f604500218080453ce")
        .then((resp) => resp.json())
        .then((data) => {
            var array = [data.main.temp + " °C"];
            document.getElementById("outputKatowice").innerText = array;
            array[2] = new Image();
            array[2].src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            document.getElementById("outputKatowice").appendChild(array[2]);
        })
}

//pogoda dla celu wylotu
//pogoda guzik
//js dla zmiany koloru siedzeń
var remembered_id = null
function colorChangeMove(clicked_id) {
    if (document.getElementsByClassName("mystyle").length < document.getElementById("peopleValue").value) {
        var element = document.getElementById(clicked_id);
        element.classList.toggle("mystyle");
        remembered_id = clicked_id;
    }
    else if (clicked_id == remembered_id) {
        var element = document.getElementById(clicked_id);
        element.classList.toggle("mystyle");
        remembered_id = clicked_id;
    }
}

//js dla zmiany koloru siedzeń
//alarm jeśli daty są złe
const interval2 = setInterval(function () {
    var currentdate = new Date();
    var g1 = new Date(document.getElementById('PlaneDate').value);
    var g2 = new Date(document.getElementById('PlaneDate2').value);
    if (g1.getTime() === g2.getTime()) {
        document.getElementById('alarm').innerHTML = "Daty są błędne";
    }
    else {
        if (g1.getTime() > g2.getTime()) {
            document.getElementById('alarm').innerHTML = "Daty są błędne";
        }
        else {
            if (g1.getTime() < currentdate.getTime()) {
                document.getElementById('alarm').innerHTML = "Daty są błędne";
            }

            else {
                document.getElementById('alarm').innerHTML = ""
            }
        }
    }
}, 1000)
//alarm jeśli daty są złe
//fetch dla json
fetch("/api")
    .then(res => res.json())
//fetch dla json
//fetch logowanie
const btn2 = document.querySelector('#login');
btn2.onclick = (event) => {
    event.preventDefault();
    fetch("/api")
        .then((resp) => resp.json())
        .then((data) => {
            document.getElementById("InputEmail").value;
            document.getElementById("InputPassword").value;
            for (let i = 0; i < data.Data.length; i++) {
                var password = [data.Data[i].Password];
                var userName = [data.Data[i].Name];
                if (userName == document.getElementById("InputEmail").value && password == document.getElementById("InputPassword").value) {
                    document.getElementById("zalogowany").innerText = "Zalogowany"
                    document.getElementById("close").click();
                    document.getElementById("buttonLog").innerText = "Wyloguj";
                    document.getElementById("emailHelp").innerText = "";
                    break;
                } else {
                    document.getElementById("emailHelp").innerText = "Nieprawidłowe Hasło lub Nazwa użytkownika";
                }
            }
        })
};
//fetch logowanie
//wylogowanie
const btn3 = document.querySelector('#buttonLog');
btn3.onclick = (event) => {
    if (document.getElementById("buttonLog").innerText == "Wyloguj") {
        event.stopPropagation();
        document.getElementById("PopUp");
        document.getElementById("zalogowany").innerText = "";
        document.getElementById("buttonLog").innerText = "Zaloguj";
    }
};
//wylogowanie
//znikanie strony2
function hide2() {
    if (document.querySelectorAll('.mystyle').length == document.getElementById("peopleValue").value) {
        document.getElementById("next").style.transition = "opacity 600ms, visibility 600ms";
        document.getElementById("next").style.opacity = "0";
        document.getElementById("next").style.visibility = "hidden";
        setTimeout(() => { document.getElementById("next").style.display = "none"; }, 700);
        setTimeout(() => { document.getElementById("next3").style.display = "block"; }, 700);
        setTimeout(() => {
            document.getElementById("next3").style.transition = "opacity 600ms, visibility 600ms";
            document.getElementById("next3").style.opacity = "1";
            document.getElementById("next3").style.visibility = "visible";
        }, 800);
        if (city == "Paryż") {
            var itm = document.getElementById("Boeing");
            var cln = itm.cloneNode(true);
            document.getElementById("miejsce").appendChild(cln);
        }
        if (city == "Warszawa") {
            var itm = document.getElementById("Embrear");
            var cln = itm.cloneNode(true);
            document.getElementById("miejsce").appendChild(cln);
        }
        if (city == "New York") {
            var itm = document.getElementById("Dreamliner");
            var cln = itm.cloneNode(true);
            document.getElementById("miejsce").appendChild(cln);
        }
        //prognoza
        var g1 = new Date(document.getElementById('PlaneDate').value)
        var today23 = new Date();
        today23.setDate(today23.getDate() + 17);
        if (g1.getTime() < today23) {
            fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=cff54392609650f604500218080453ce")
                .then((resp) => resp.json())
                .then((data) => {
                    var theDate = new Date(data.dt * 1000);
                    let dateString = theDate.toLocaleDateString();
                    var array = [data.main.temp + " °C", " - " + dateString];
                    document.getElementById("outpu").innerText = array;
                    array[2] = new Image();
                    array[2].src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
                    document.getElementById("outpu").appendChild(array[2]);
                })

            fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&APPID=cff54392609650f604500218080453ce")
                .then((resp) => resp.json())
                .then((data) => {
                    let outputParameter = 2;
                    for (i = 5; i < 46;) {
                        var theDate = new Date(data.list[i].dt * 1000);
                        let dateString = theDate.toLocaleDateString();
                        var array = [data.list[i].main.temp + " °C", " - " + dateString];
                        document.getElementById("outpu" + outputParameter).innerText = array;
                        array[2] = new Image();
                        array[2].src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + "@2x.png";
                        document.getElementById("outpu" + outputParameter).appendChild(array[2]);
                        outputParameter++;
                        i = i + 8;
                    }
                })
        }
        //prognoza
        //api loty
        let i = 0
        let sky = String
        const interval4 = setInterval(function () {
            if (city === "Paryż") {
                sky = "PARI"
            } else {
                if (city === "Warszawa") {
                    sky = "WAW"
                }
                else {
                    if (city === "New York") {
                        sky = "NYCA"
                    }
                }
            }
            day = document.getElementById("PlaneDate").value
            var d = new Date(day);
            d.setDate(d.getDate(day) + i);
            var dd = d.getDate();
            if (dd < 10) {
                dd = "0" + dd
            }
            var mm = d.getMonth() + 1;
            if (mm < 10) {
                mm = "0" + mm
            }
            var y = d.getFullYear();
            var day = y + '-' + mm + '-' + dd;
            i++
            fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/PLN/en-US/KTW-sky/" + sky + "-sky/" + day + "", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "aab0b3f37cmshf42ea651703c8d8p152d63jsnecc9386e9565",
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
                }
            })
                .then(res => res.json())
                .then((data) => {
                    var price = [data.Quotes[0].MinPrice];
                    var currency = [data.Currencies[0].Symbol];
                    if (document.getElementById("Radios1").checked) {
                        var bagaz = document.getElementById("Radios1").value
                    }
                    if (document.getElementById("Radios2").checked) {
                        var bagaz = document.getElementById("Radios2").value
                    }
                    if (document.getElementById("Radios3").checked) {
                        var bagaz = document.getElementById("Radios3").value
                    }
                    document.getElementById("cena").innerText = ((parseInt(price) + parseInt(bagaz)) * (document.getElementById("peopleValue").value)) + currency;
                    document.getElementById("cena").style.background = "none"
                    clearInterval(interval4);
                })
                .catch(err => {
                });
        }, 1000)
    }
    else {
        alert("Wybierz siedzenia")
    }
    //api loty
}
//znikanie strony2
//czas

fetch("https://world-time2.p.rapidapi.com/timezone/Europe/Warsaw", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "aab0b3f37cmshf42ea651703c8d8p152d63jsnecc9386e9565",
        "x-rapidapi-host": "world-time2.p.rapidapi.com"
    }
})
    .then(res => res.json())
    .then((data) => {
        const unixTimestamp = data.unixtime
        var milliseconds = unixTimestamp * 1000
        var dateObject = new Date(milliseconds)
        var humanDateFormat = dateObject.toLocaleString()
        document.getElementById('time').innerHTML = "Katowice - " + humanDateFormat
        const interval3 = setInterval(function () {
            milliseconds = milliseconds + 1000
            var dateObject = new Date(milliseconds)
            var humanDateFormat = dateObject.toLocaleString()
            document.getElementById('time').innerHTML = "Katowice - " + humanDateFormat
        }, 1000)
    });
//czas
//przelicznik
currency.addEventListener("change", function () {
    fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${this.value}/?format=json`)
        .then((resp) => resp.json())
        .then(function (data) {
            const currency = document.getElementById("currency");
            const selected = document.getElementById("selected");
            const value = document.getElementById("cena").innerText;
            const currency2 = document.getElementById("currency").value;
            var value2 = value.slice(0, -2);
            switch (currency2) {
                case 'eur':
                    selected.innerHTML = (`po przeliczeniu to: ${((value2) / (data.rates[0].mid)).toFixed(2)} ` + `\u20AC`)
                    break;
                case 'chf':
                    selected.innerHTML = (`po przeliczeniu to: ${((value2) / (data.rates[0].mid)).toFixed(2)} ` + `\u20A3`)
                    break;
                case 'usd':
                    selected.innerHTML = (`po przeliczeniu to: ${((value2) / (data.rates[0].mid)).toFixed(2)} ` + `	\u0024`)
                    break;
            }
        })
})
//przelicznik

document.getElementById("someLink").addEventListener("click", hide);
document.getElementById("hide2").addEventListener("click", hide2);
document.getElementById("mySelect").addEventListener("click", weather);

document.getElementById("Embrear1").addEventListener("click", colorChangeMove.bind(null, "Embrear1"));
document.getElementById("Embrear2").addEventListener("click", colorChangeMove.bind(null, "Embrear2"));
document.getElementById("Embrear3").addEventListener("click", colorChangeMove.bind(null, "Embrear3"));
document.getElementById("Embrear4").addEventListener("click", colorChangeMove.bind(null, "Embrear4"));
document.getElementById("Embrear5").addEventListener("click", colorChangeMove.bind(null, "Embrear5"));
document.getElementById("Embrear6").addEventListener("click", colorChangeMove.bind(null, "Embrear6"));
document.getElementById("Embrear7").addEventListener("click", colorChangeMove.bind(null, "Embrear7"));
document.getElementById("Embrear8").addEventListener("click", colorChangeMove.bind(null, "Embrear8"));
document.getElementById("Embrear9").addEventListener("click", colorChangeMove.bind(null, "Embrear9"));
document.getElementById("Embrear10").addEventListener("click", colorChangeMove.bind(null, "Embrear10"));
document.getElementById("Embrear11").addEventListener("click", colorChangeMove.bind(null, "Embrear11"));
document.getElementById("Embrear12").addEventListener("click", colorChangeMove.bind(null, "Embrear12"));
document.getElementById("Embrear13").addEventListener("click", colorChangeMove.bind(null, "Embrear13"));
document.getElementById("Embrear14").addEventListener("click", colorChangeMove.bind(null, "Embrear14"));
document.getElementById("Embrear15").addEventListener("click", colorChangeMove.bind(null, "Embrear15"));
document.getElementById("Embrear16").addEventListener("click", colorChangeMove.bind(null, "Embrear16"));
document.getElementById("Embrear17").addEventListener("click", colorChangeMove.bind(null, "Embrear17"));
document.getElementById("Embrear18").addEventListener("click", colorChangeMove.bind(null, "Embrear18"));
document.getElementById("Embrear19").addEventListener("click", colorChangeMove.bind(null, "Embrear19"));
document.getElementById("Embrear20").addEventListener("click", colorChangeMove.bind(null, "Embrear20"));
document.getElementById("Embrear21").addEventListener("click", colorChangeMove.bind(null, "Embrear21"));
document.getElementById("Embrear22").addEventListener("click", colorChangeMove.bind(null, "Embrear22"));
document.getElementById("Embrear23").addEventListener("click", colorChangeMove.bind(null, "Embrear23"));
document.getElementById("Embrear24").addEventListener("click", colorChangeMove.bind(null, "Embrear24"));
document.getElementById("Embrear25").addEventListener("click", colorChangeMove.bind(null, "Embrear25"));
document.getElementById("Embrear26").addEventListener("click", colorChangeMove.bind(null, "Embrear26"));
document.getElementById("Embrear27").addEventListener("click", colorChangeMove.bind(null, "Embrear27"));
document.getElementById("Embrear28").addEventListener("click", colorChangeMove.bind(null, "Embrear28"));
document.getElementById("Embrear29").addEventListener("click", colorChangeMove.bind(null, "Embrear29"));
document.getElementById("Embrear30").addEventListener("click", colorChangeMove.bind(null, "Embrear30"));
document.getElementById("Embrear31").addEventListener("click", colorChangeMove.bind(null, "Embrear31"));
document.getElementById("Embrear32").addEventListener("click", colorChangeMove.bind(null, "Embrear32"));
document.getElementById("Embrear33").addEventListener("click", colorChangeMove.bind(null, "Embrear33"));
document.getElementById("Embrear34").addEventListener("click", colorChangeMove.bind(null, "Embrear34"));
document.getElementById("Embrear35").addEventListener("click", colorChangeMove.bind(null, "Embrear35"));
document.getElementById("Embrear36").addEventListener("click", colorChangeMove.bind(null, "Embrear36"));
document.getElementById("Embrear37").addEventListener("click", colorChangeMove.bind(null, "Embrear37"));
document.getElementById("Embrear38").addEventListener("click", colorChangeMove.bind(null, "Embrear38"));
document.getElementById("Embrear39").addEventListener("click", colorChangeMove.bind(null, "Embrear39"));
document.getElementById("Embrear40").addEventListener("click", colorChangeMove.bind(null, "Embrear40"));
document.getElementById("Embrear41").addEventListener("click", colorChangeMove.bind(null, "Embrear41"));
document.getElementById("Embrear42").addEventListener("click", colorChangeMove.bind(null, "Embrear42"));
document.getElementById("Embrear43").addEventListener("click", colorChangeMove.bind(null, "Embrear43"));
document.getElementById("Embrear44").addEventListener("click", colorChangeMove.bind(null, "Embrear44"));
document.getElementById("Embrear45").addEventListener("click", colorChangeMove.bind(null, "Embrear45"));
document.getElementById("Embrear46").addEventListener("click", colorChangeMove.bind(null, "Embrear46"));
document.getElementById("Embrear47").addEventListener("click", colorChangeMove.bind(null, "Embrear47"));
document.getElementById("Embrear48").addEventListener("click", colorChangeMove.bind(null, "Embrear48"));
document.getElementById("Embrear49").addEventListener("click", colorChangeMove.bind(null, "Embrear49"));
document.getElementById("Embrear50").addEventListener("click", colorChangeMove.bind(null, "Embrear50"));
document.getElementById("Embrear51").addEventListener("click", colorChangeMove.bind(null, "Embrear51"));
document.getElementById("Embrear52").addEventListener("click", colorChangeMove.bind(null, "Embrear52"));
document.getElementById("Embrear53").addEventListener("click", colorChangeMove.bind(null, "Embrear53"));
document.getElementById("Embrear54").addEventListener("click", colorChangeMove.bind(null, "Embrear54"));
document.getElementById("Embrear55").addEventListener("click", colorChangeMove.bind(null, "Embrear55"));
document.getElementById("Embrear56").addEventListener("click", colorChangeMove.bind(null, "Embrear56"));
document.getElementById("Embrear57").addEventListener("click", colorChangeMove.bind(null, "Embrear57"));
document.getElementById("Embrear58").addEventListener("click", colorChangeMove.bind(null, "Embrear58"));
document.getElementById("Embrear59").addEventListener("click", colorChangeMove.bind(null, "Embrear59"));
document.getElementById("Embrear60").addEventListener("click", colorChangeMove.bind(null, "Embrear60"));
document.getElementById("Embrear61").addEventListener("click", colorChangeMove.bind(null, "Embrear61"));
document.getElementById("Embrear62").addEventListener("click", colorChangeMove.bind(null, "Embrear62"));



document.getElementById("Boeing1").addEventListener("click", colorChangeMove.bind(null, "Boeing1"));
document.getElementById("Boeing2").addEventListener("click", colorChangeMove.bind(null, "Boeing2"));
document.getElementById("Boeing3").addEventListener("click", colorChangeMove.bind(null, "Boeing3"));
document.getElementById("Boeing4").addEventListener("click", colorChangeMove.bind(null, "Boeing4"));
document.getElementById("Boeing5").addEventListener("click", colorChangeMove.bind(null, "Boeing5"));
document.getElementById("Boeing6").addEventListener("click", colorChangeMove.bind(null, "Boeing6"));
document.getElementById("Boeing7").addEventListener("click", colorChangeMove.bind(null, "Boeing7"));
document.getElementById("Boeing8").addEventListener("click", colorChangeMove.bind(null, "Boeing8"));
document.getElementById("Boeing9").addEventListener("click", colorChangeMove.bind(null, "Boeing9"));
document.getElementById("Boeing10").addEventListener("click", colorChangeMove.bind(null, "Boeing10"));
document.getElementById("Boeing11").addEventListener("click", colorChangeMove.bind(null, "Boeing11"));
document.getElementById("Boeing12").addEventListener("click", colorChangeMove.bind(null, "Boeing12"));
document.getElementById("Boeing13").addEventListener("click", colorChangeMove.bind(null, "Boeing13"));
document.getElementById("Boeing14").addEventListener("click", colorChangeMove.bind(null, "Boeing14"));
document.getElementById("Boeing15").addEventListener("click", colorChangeMove.bind(null, "Boeing15"));
document.getElementById("Boeing16").addEventListener("click", colorChangeMove.bind(null, "Boeing16"));
document.getElementById("Boeing17").addEventListener("click", colorChangeMove.bind(null, "Boeing17"));
document.getElementById("Boeing18").addEventListener("click", colorChangeMove.bind(null, "Boeing18"));
document.getElementById("Boeing19").addEventListener("click", colorChangeMove.bind(null, "Boeing19"));
document.getElementById("Boeing20").addEventListener("click", colorChangeMove.bind(null, "Boeing20"));
document.getElementById("Boeing21").addEventListener("click", colorChangeMove.bind(null, "Boeing21"));
document.getElementById("Boeing22").addEventListener("click", colorChangeMove.bind(null, "Boeing22"));
document.getElementById("Boeing23").addEventListener("click", colorChangeMove.bind(null, "Boeing23"));
document.getElementById("Boeing24").addEventListener("click", colorChangeMove.bind(null, "Boeing24"));
document.getElementById("Boeing25").addEventListener("click", colorChangeMove.bind(null, "Boeing25"));
document.getElementById("Boeing26").addEventListener("click", colorChangeMove.bind(null, "Boeing26"));
document.getElementById("Boeing27").addEventListener("click", colorChangeMove.bind(null, "Boeing27"));
document.getElementById("Boeing28").addEventListener("click", colorChangeMove.bind(null, "Boeing28"));
document.getElementById("Boeing29").addEventListener("click", colorChangeMove.bind(null, "Boeing29"));
document.getElementById("Boeing30").addEventListener("click", colorChangeMove.bind(null, "Boeing30"));
document.getElementById("Boeing31").addEventListener("click", colorChangeMove.bind(null, "Boeing31"));
document.getElementById("Boeing32").addEventListener("click", colorChangeMove.bind(null, "Boeing32"));
document.getElementById("Boeing33").addEventListener("click", colorChangeMove.bind(null, "Boeing33"));
document.getElementById("Boeing34").addEventListener("click", colorChangeMove.bind(null, "Boeing34"));
document.getElementById("Boeing35").addEventListener("click", colorChangeMove.bind(null, "Boeing35"));
document.getElementById("Boeing36").addEventListener("click", colorChangeMove.bind(null, "Boeing36"));
document.getElementById("Boeing37").addEventListener("click", colorChangeMove.bind(null, "Boeing37"));
document.getElementById("Boeing38").addEventListener("click", colorChangeMove.bind(null, "Boeing38"));
document.getElementById("Boeing39").addEventListener("click", colorChangeMove.bind(null, "Boeing39"));
document.getElementById("Boeing40").addEventListener("click", colorChangeMove.bind(null, "Boeing40"));
document.getElementById("Boeing41").addEventListener("click", colorChangeMove.bind(null, "Boeing41"));
document.getElementById("Boeing42").addEventListener("click", colorChangeMove.bind(null, "Boeing42"));
document.getElementById("Boeing43").addEventListener("click", colorChangeMove.bind(null, "Boeing43"));
document.getElementById("Boeing44").addEventListener("click", colorChangeMove.bind(null, "Boeing44"));
document.getElementById("Boeing45").addEventListener("click", colorChangeMove.bind(null, "Boeing45"));
document.getElementById("Boeing46").addEventListener("click", colorChangeMove.bind(null, "Boeing46"));
document.getElementById("Boeing47").addEventListener("click", colorChangeMove.bind(null, "Boeing47"));
document.getElementById("Boeing48").addEventListener("click", colorChangeMove.bind(null, "Boeing48"));
document.getElementById("Boeing49").addEventListener("click", colorChangeMove.bind(null, "Boeing49"));
document.getElementById("Boeing50").addEventListener("click", colorChangeMove.bind(null, "Boeing50"));
document.getElementById("Boeing51").addEventListener("click", colorChangeMove.bind(null, "Boeing51"));
document.getElementById("Boeing52").addEventListener("click", colorChangeMove.bind(null, "Boeing52"));
document.getElementById("Boeing53").addEventListener("click", colorChangeMove.bind(null, "Boeing53"));
document.getElementById("Boeing54").addEventListener("click", colorChangeMove.bind(null, "Boeing54"));
document.getElementById("Boeing55").addEventListener("click", colorChangeMove.bind(null, "Boeing55"));
document.getElementById("Boeing56").addEventListener("click", colorChangeMove.bind(null, "Boeing56"));
document.getElementById("Boeing57").addEventListener("click", colorChangeMove.bind(null, "Boeing57"));
document.getElementById("Boeing58").addEventListener("click", colorChangeMove.bind(null, "Boeing58"));
document.getElementById("Boeing59").addEventListener("click", colorChangeMove.bind(null, "Boeing59"));
document.getElementById("Boeing60").addEventListener("click", colorChangeMove.bind(null, "Boeing60"));
document.getElementById("Boeing61").addEventListener("click", colorChangeMove.bind(null, "Boeing61"));
document.getElementById("Boeing62").addEventListener("click", colorChangeMove.bind(null, "Boeing62"));
document.getElementById("Boeing63").addEventListener("click", colorChangeMove.bind(null, "Boeing63"));
document.getElementById("Boeing64").addEventListener("click", colorChangeMove.bind(null, "Boeing64"));
document.getElementById("Boeing65").addEventListener("click", colorChangeMove.bind(null, "Boeing65"));
document.getElementById("Boeing66").addEventListener("click", colorChangeMove.bind(null, "Boeing66"));
document.getElementById("Boeing67").addEventListener("click", colorChangeMove.bind(null, "Boeing67"));
document.getElementById("Boeing68").addEventListener("click", colorChangeMove.bind(null, "Boeing68"));
document.getElementById("Boeing69").addEventListener("click", colorChangeMove.bind(null, "Boeing69"));
document.getElementById("Boeing70").addEventListener("click", colorChangeMove.bind(null, "Boeing70"));
document.getElementById("Boeing71").addEventListener("click", colorChangeMove.bind(null, "Boeing71"));
document.getElementById("Boeing72").addEventListener("click", colorChangeMove.bind(null, "Boeing72"));
document.getElementById("Boeing73").addEventListener("click", colorChangeMove.bind(null, "Boeing73"));
document.getElementById("Boeing74").addEventListener("click", colorChangeMove.bind(null, "Boeing74"));
document.getElementById("Boeing75").addEventListener("click", colorChangeMove.bind(null, "Boeing75"));
document.getElementById("Boeing76").addEventListener("click", colorChangeMove.bind(null, "Boeing76"));
document.getElementById("Boeing77").addEventListener("click", colorChangeMove.bind(null, "Boeing77"));
document.getElementById("Boeing78").addEventListener("click", colorChangeMove.bind(null, "Boeing78"));
document.getElementById("Boeing79").addEventListener("click", colorChangeMove.bind(null, "Boeing79"));
document.getElementById("Boeing80").addEventListener("click", colorChangeMove.bind(null, "Boeing80"));
document.getElementById("Boeing81").addEventListener("click", colorChangeMove.bind(null, "Boeing81"));
document.getElementById("Boeing82").addEventListener("click", colorChangeMove.bind(null, "Boeing82"));
document.getElementById("Boeing83").addEventListener("click", colorChangeMove.bind(null, "Boeing83"));
document.getElementById("Boeing84").addEventListener("click", colorChangeMove.bind(null, "Boeing84"));
document.getElementById("Boeing85").addEventListener("click", colorChangeMove.bind(null, "Boeing85"));
document.getElementById("Boeing86").addEventListener("click", colorChangeMove.bind(null, "Boeing86"));
document.getElementById("Boeing87").addEventListener("click", colorChangeMove.bind(null, "Boeing87"));
document.getElementById("Boeing88").addEventListener("click", colorChangeMove.bind(null, "Boeing88"));
document.getElementById("Boeing89").addEventListener("click", colorChangeMove.bind(null, "Boeing89"));
document.getElementById("Boeing90").addEventListener("click", colorChangeMove.bind(null, "Boeing90"));
document.getElementById("Boeing91").addEventListener("click", colorChangeMove.bind(null, "Boeing91"));
document.getElementById("Boeing92").addEventListener("click", colorChangeMove.bind(null, "Boeing92"));
document.getElementById("Boeing93").addEventListener("click", colorChangeMove.bind(null, "Boeing93"));
document.getElementById("Boeing94").addEventListener("click", colorChangeMove.bind(null, "Boeing94"));
document.getElementById("Boeing95").addEventListener("click", colorChangeMove.bind(null, "Boeing95"));
document.getElementById("Boeing96").addEventListener("click", colorChangeMove.bind(null, "Boeing96"));
document.getElementById("Boeing97").addEventListener("click", colorChangeMove.bind(null, "Boeing97"));
document.getElementById("Boeing98").addEventListener("click", colorChangeMove.bind(null, "Boeing98"));
document.getElementById("Boeing99").addEventListener("click", colorChangeMove.bind(null, "Boeing99"));
document.getElementById("Boeing100").addEventListener("click", colorChangeMove.bind(null, "Boeing100"));

document.getElementById("Dreamliner1").addEventListener("click", colorChangeMove.bind(null, "Dreamliner1"));
document.getElementById("Dreamliner2").addEventListener("click", colorChangeMove.bind(null, "Dreamliner2"));
document.getElementById("Dreamliner3").addEventListener("click", colorChangeMove.bind(null, "Dreamliner3"));
document.getElementById("Dreamliner4").addEventListener("click", colorChangeMove.bind(null, "Dreamliner4"));
document.getElementById("Dreamliner5").addEventListener("click", colorChangeMove.bind(null, "Dreamliner5"));
document.getElementById("Dreamliner6").addEventListener("click", colorChangeMove.bind(null, "Dreamliner6"));
document.getElementById("Dreamliner7").addEventListener("click", colorChangeMove.bind(null, "Dreamliner7"));
document.getElementById("Dreamliner8").addEventListener("click", colorChangeMove.bind(null, "Dreamliner8"));
document.getElementById("Dreamliner9").addEventListener("click", colorChangeMove.bind(null, "Dreamliner9"));
document.getElementById("Dreamliner10").addEventListener("click", colorChangeMove.bind(null, "Dreamliner10"));
document.getElementById("Dreamliner11").addEventListener("click", colorChangeMove.bind(null, "Dreamliner11"));
document.getElementById("Dreamliner12").addEventListener("click", colorChangeMove.bind(null, "Dreamliner12"));
document.getElementById("Dreamliner13").addEventListener("click", colorChangeMove.bind(null, "Dreamliner13"));
document.getElementById("Dreamliner14").addEventListener("click", colorChangeMove.bind(null, "Dreamliner14"));
document.getElementById("Dreamliner15").addEventListener("click", colorChangeMove.bind(null, "Dreamliner15"));
document.getElementById("Dreamliner16").addEventListener("click", colorChangeMove.bind(null, "Dreamliner16"));
document.getElementById("Dreamliner17").addEventListener("click", colorChangeMove.bind(null, "Dreamliner17"));
document.getElementById("Dreamliner18").addEventListener("click", colorChangeMove.bind(null, "Dreamliner18"));
document.getElementById("Dreamliner19").addEventListener("click", colorChangeMove.bind(null, "Dreamliner19"));
document.getElementById("Dreamliner20").addEventListener("click", colorChangeMove.bind(null, "Dreamliner20"));
document.getElementById("Dreamliner21").addEventListener("click", colorChangeMove.bind(null, "Dreamliner21"));
document.getElementById("Dreamliner22").addEventListener("click", colorChangeMove.bind(null, "Dreamliner22"));
document.getElementById("Dreamliner23").addEventListener("click", colorChangeMove.bind(null, "Dreamliner23"));
document.getElementById("Dreamliner24").addEventListener("click", colorChangeMove.bind(null, "Dreamliner24"));
document.getElementById("Dreamliner25").addEventListener("click", colorChangeMove.bind(null, "Dreamliner25"));
document.getElementById("Dreamliner26").addEventListener("click", colorChangeMove.bind(null, "Dreamliner26"));
document.getElementById("Dreamliner27").addEventListener("click", colorChangeMove.bind(null, "Dreamliner27"));
document.getElementById("Dreamliner28").addEventListener("click", colorChangeMove.bind(null, "Dreamliner28"));
document.getElementById("Dreamliner29").addEventListener("click", colorChangeMove.bind(null, "Dreamliner29"));
document.getElementById("Dreamliner30").addEventListener("click", colorChangeMove.bind(null, "Dreamliner30"));
document.getElementById("Dreamliner31").addEventListener("click", colorChangeMove.bind(null, "Dreamliner31"));
document.getElementById("Dreamliner32").addEventListener("click", colorChangeMove.bind(null, "Dreamliner32"));
document.getElementById("Dreamliner33").addEventListener("click", colorChangeMove.bind(null, "Dreamliner33"));
document.getElementById("Dreamliner34").addEventListener("click", colorChangeMove.bind(null, "Dreamliner34"));
document.getElementById("Dreamliner35").addEventListener("click", colorChangeMove.bind(null, "Dreamliner35"));
document.getElementById("Dreamliner36").addEventListener("click", colorChangeMove.bind(null, "Dreamliner36"));
document.getElementById("Dreamliner37").addEventListener("click", colorChangeMove.bind(null, "Dreamliner37"));
document.getElementById("Dreamliner38").addEventListener("click", colorChangeMove.bind(null, "Dreamliner38"));
document.getElementById("Dreamliner39").addEventListener("click", colorChangeMove.bind(null, "Dreamliner39"));
document.getElementById("Dreamliner40").addEventListener("click", colorChangeMove.bind(null, "Dreamliner40"));
document.getElementById("Dreamliner41").addEventListener("click", colorChangeMove.bind(null, "Dreamliner41"));
document.getElementById("Dreamliner42").addEventListener("click", colorChangeMove.bind(null, "Dreamliner42"));
document.getElementById("Dreamliner43").addEventListener("click", colorChangeMove.bind(null, "Dreamliner43"));
document.getElementById("Dreamliner44").addEventListener("click", colorChangeMove.bind(null, "Dreamliner44"));
document.getElementById("Dreamliner45").addEventListener("click", colorChangeMove.bind(null, "Dreamliner45"));
document.getElementById("Dreamliner46").addEventListener("click", colorChangeMove.bind(null, "Dreamliner46"));
document.getElementById("Dreamliner47").addEventListener("click", colorChangeMove.bind(null, "Dreamliner47"));
document.getElementById("Dreamliner48").addEventListener("click", colorChangeMove.bind(null, "Dreamliner48"));
document.getElementById("Dreamliner49").addEventListener("click", colorChangeMove.bind(null, "Dreamliner49"));
document.getElementById("Dreamliner50").addEventListener("click", colorChangeMove.bind(null, "Dreamliner50"));
document.getElementById("Dreamliner51").addEventListener("click", colorChangeMove.bind(null, "Dreamliner51"));
document.getElementById("Dreamliner52").addEventListener("click", colorChangeMove.bind(null, "Dreamliner52"));
document.getElementById("Dreamliner53").addEventListener("click", colorChangeMove.bind(null, "Dreamliner53"));
document.getElementById("Dreamliner54").addEventListener("click", colorChangeMove.bind(null, "Dreamliner54"));
document.getElementById("Dreamliner55").addEventListener("click", colorChangeMove.bind(null, "Dreamliner55"));
document.getElementById("Dreamliner56").addEventListener("click", colorChangeMove.bind(null, "Dreamliner56"));
document.getElementById("Dreamliner57").addEventListener("click", colorChangeMove.bind(null, "Dreamliner57"));
document.getElementById("Dreamliner58").addEventListener("click", colorChangeMove.bind(null, "Dreamliner58"));
document.getElementById("Dreamliner59").addEventListener("click", colorChangeMove.bind(null, "Dreamliner59"));
document.getElementById("Dreamliner60").addEventListener("click", colorChangeMove.bind(null, "Dreamliner60"));
document.getElementById("Dreamliner61").addEventListener("click", colorChangeMove.bind(null, "Dreamliner61"));
document.getElementById("Dreamliner62").addEventListener("click", colorChangeMove.bind(null, "Dreamliner62"));
document.getElementById("Dreamliner63").addEventListener("click", colorChangeMove.bind(null, "Dreamliner63"));
document.getElementById("Dreamliner64").addEventListener("click", colorChangeMove.bind(null, "Dreamliner64"));
document.getElementById("Dreamliner65").addEventListener("click", colorChangeMove.bind(null, "Dreamliner65"));
document.getElementById("Dreamliner66").addEventListener("click", colorChangeMove.bind(null, "Dreamliner66"));
document.getElementById("Dreamliner67").addEventListener("click", colorChangeMove.bind(null, "Dreamliner67"));
document.getElementById("Dreamliner68").addEventListener("click", colorChangeMove.bind(null, "Dreamliner68"));
document.getElementById("Dreamliner69").addEventListener("click", colorChangeMove.bind(null, "Dreamliner69"));
document.getElementById("Dreamliner70").addEventListener("click", colorChangeMove.bind(null, "Dreamliner70"));
document.getElementById("Dreamliner71").addEventListener("click", colorChangeMove.bind(null, "Dreamliner71"));
document.getElementById("Dreamliner72").addEventListener("click", colorChangeMove.bind(null, "Dreamliner72"));
document.getElementById("Dreamliner73").addEventListener("click", colorChangeMove.bind(null, "Dreamliner73"));
document.getElementById("Dreamliner74").addEventListener("click", colorChangeMove.bind(null, "Dreamliner74"));
document.getElementById("Dreamliner75").addEventListener("click", colorChangeMove.bind(null, "Dreamliner75"));
document.getElementById("Dreamliner76").addEventListener("click", colorChangeMove.bind(null, "Dreamliner76"));
document.getElementById("Dreamliner77").addEventListener("click", colorChangeMove.bind(null, "Dreamliner77"));
document.getElementById("Dreamliner78").addEventListener("click", colorChangeMove.bind(null, "Dreamliner78"));
document.getElementById("Dreamliner79").addEventListener("click", colorChangeMove.bind(null, "Dreamliner79"));
document.getElementById("Dreamliner80").addEventListener("click", colorChangeMove.bind(null, "Dreamliner80"));
document.getElementById("Dreamliner81").addEventListener("click", colorChangeMove.bind(null, "Dreamliner81"));
document.getElementById("Dreamliner82").addEventListener("click", colorChangeMove.bind(null, "Dreamliner82"));
document.getElementById("Dreamliner83").addEventListener("click", colorChangeMove.bind(null, "Dreamliner83"));
document.getElementById("Dreamliner84").addEventListener("click", colorChangeMove.bind(null, "Dreamliner84"));
document.getElementById("Dreamliner85").addEventListener("click", colorChangeMove.bind(null, "Dreamliner85"));
document.getElementById("Dreamliner86").addEventListener("click", colorChangeMove.bind(null, "Dreamliner86"));
document.getElementById("Dreamliner87").addEventListener("click", colorChangeMove.bind(null, "Dreamliner87"));
document.getElementById("Dreamliner88").addEventListener("click", colorChangeMove.bind(null, "Dreamliner88"));
document.getElementById("Dreamliner89").addEventListener("click", colorChangeMove.bind(null, "Dreamliner89"));
document.getElementById("Dreamliner90").addEventListener("click", colorChangeMove.bind(null, "Dreamliner90"));
document.getElementById("Dreamliner91").addEventListener("click", colorChangeMove.bind(null, "Dreamliner91"));
document.getElementById("Dreamliner92").addEventListener("click", colorChangeMove.bind(null, "Dreamliner92"));
document.getElementById("Dreamliner93").addEventListener("click", colorChangeMove.bind(null, "Dreamliner93"));
document.getElementById("Dreamliner94").addEventListener("click", colorChangeMove.bind(null, "Dreamliner94"));
document.getElementById("Dreamliner95").addEventListener("click", colorChangeMove.bind(null, "Dreamliner95"));
document.getElementById("Dreamliner96").addEventListener("click", colorChangeMove.bind(null, "Dreamliner96"));
document.getElementById("Dreamliner97").addEventListener("click", colorChangeMove.bind(null, "Dreamliner97"));
document.getElementById("Dreamliner98").addEventListener("click", colorChangeMove.bind(null, "Dreamliner98"));
document.getElementById("Dreamliner99").addEventListener("click", colorChangeMove.bind(null, "Dreamliner99"));
document.getElementById("Dreamliner100").addEventListener("click", colorChangeMove.bind(null, "Dreamliner100"));
document.getElementById("Dreamliner101").addEventListener("click", colorChangeMove.bind(null, "Dreamliner101"));
document.getElementById("Dreamliner102").addEventListener("click", colorChangeMove.bind(null, "Dreamliner102"));
document.getElementById("Dreamliner103").addEventListener("click", colorChangeMove.bind(null, "Dreamliner103"));
document.getElementById("Dreamliner104").addEventListener("click", colorChangeMove.bind(null, "Dreamliner104"));
document.getElementById("Dreamliner105").addEventListener("click", colorChangeMove.bind(null, "Dreamliner105"));
document.getElementById("Dreamliner106").addEventListener("click", colorChangeMove.bind(null, "Dreamliner106"));
document.getElementById("Dreamliner107").addEventListener("click", colorChangeMove.bind(null, "Dreamliner107"));
document.getElementById("Dreamliner108").addEventListener("click", colorChangeMove.bind(null, "Dreamliner108"));
document.getElementById("Dreamliner109").addEventListener("click", colorChangeMove.bind(null, "Dreamliner109"));
document.getElementById("Dreamliner110").addEventListener("click", colorChangeMove.bind(null, "Dreamliner110"));
document.getElementById("Dreamliner111").addEventListener("click", colorChangeMove.bind(null, "Dreamliner111"));
document.getElementById("Dreamliner112").addEventListener("click", colorChangeMove.bind(null, "Dreamliner112"));
document.getElementById("Dreamliner113").addEventListener("click", colorChangeMove.bind(null, "Dreamliner113"));
document.getElementById("Dreamliner114").addEventListener("click", colorChangeMove.bind(null, "Dreamliner114"));
document.getElementById("Dreamliner115").addEventListener("click", colorChangeMove.bind(null, "Dreamliner115"));
document.getElementById("Dreamliner116").addEventListener("click", colorChangeMove.bind(null, "Dreamliner116"));
document.getElementById("Dreamliner117").addEventListener("click", colorChangeMove.bind(null, "Dreamliner117"));
document.getElementById("Dreamliner118").addEventListener("click", colorChangeMove.bind(null, "Dreamliner118"));
document.getElementById("Dreamliner119").addEventListener("click", colorChangeMove.bind(null, "Dreamliner119"));
document.getElementById("Dreamliner120").addEventListener("click", colorChangeMove.bind(null, "Dreamliner120"));
document.getElementById("Dreamliner121").addEventListener("click", colorChangeMove.bind(null, "Dreamliner121"));
document.getElementById("Dreamliner122").addEventListener("click", colorChangeMove.bind(null, "Dreamliner122"));
document.getElementById("Dreamliner123").addEventListener("click", colorChangeMove.bind(null, "Dreamliner123"));
document.getElementById("Dreamliner124").addEventListener("click", colorChangeMove.bind(null, "Dreamliner124"));
document.getElementById("Dreamliner125").addEventListener("click", colorChangeMove.bind(null, "Dreamliner125"));
document.getElementById("Dreamliner126").addEventListener("click", colorChangeMove.bind(null, "Dreamliner126"));
document.getElementById("Dreamliner127").addEventListener("click", colorChangeMove.bind(null, "Dreamliner127"));
document.getElementById("Dreamliner128").addEventListener("click", colorChangeMove.bind(null, "Dreamliner128"));
document.getElementById("Dreamliner129").addEventListener("click", colorChangeMove.bind(null, "Dreamliner129"));
document.getElementById("Dreamliner130").addEventListener("click", colorChangeMove.bind(null, "Dreamliner130"));
document.getElementById("Dreamliner131").addEventListener("click", colorChangeMove.bind(null, "Dreamliner131"));
document.getElementById("Dreamliner132").addEventListener("click", colorChangeMove.bind(null, "Dreamliner132"));
document.getElementById("Dreamliner133").addEventListener("click", colorChangeMove.bind(null, "Dreamliner133"));
document.getElementById("Dreamliner134").addEventListener("click", colorChangeMove.bind(null, "Dreamliner134"));
document.getElementById("Dreamliner135").addEventListener("click", colorChangeMove.bind(null, "Dreamliner135"));
document.getElementById("Dreamliner136").addEventListener("click", colorChangeMove.bind(null, "Dreamliner136"));
document.getElementById("Dreamliner137").addEventListener("click", colorChangeMove.bind(null, "Dreamliner137"));
document.getElementById("Dreamliner138").addEventListener("click", colorChangeMove.bind(null, "Dreamliner138"));
document.getElementById("Dreamliner139").addEventListener("click", colorChangeMove.bind(null, "Dreamliner139"));
document.getElementById("Dreamliner140").addEventListener("click", colorChangeMove.bind(null, "Dreamliner140"));
document.getElementById("Dreamliner141").addEventListener("click", colorChangeMove.bind(null, "Dreamliner141"));
document.getElementById("Dreamliner142").addEventListener("click", colorChangeMove.bind(null, "Dreamliner142"));
document.getElementById("Dreamliner143").addEventListener("click", colorChangeMove.bind(null, "Dreamliner143"));
document.getElementById("Dreamliner144").addEventListener("click", colorChangeMove.bind(null, "Dreamliner144"));
