var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
var Hafn = (function () {
    function Hafn(element) {
        this.list = ['miecz', 'zbroja', 'wlocznia']; // dopisalem
        this.element = element;
        var kostkaDoGry = Math.floor(Math.random() * 3);
        var numerNaStrone = this.list[kostkaDoGry];
        this.element.innerHTML += "Wybieram z tablicy: " + numerNaStrone + ". ";
        this.element.innerHTML += "Losuje jakas wartosc od 0 do 100: " + Math.floor(Math.random() * 100);
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        // this.span.innerText = new Date().toUTCString();
    }
    Hafn.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Hafn.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Hafn;
}());
var r_zdarzenia = ['wrog', 'nieznajomy', 'przedmiot', 'nic'];
var r_nieznajomego = ['zlodziej', 'dobry_d', 'zly_d', 'czarodziej'];
var r_przedmiotu = ['miecz', 'zbroja', 'eliksir', 'mieso', 'zloto', 'trucizna'];
var OpisSwiata = (function () {
    function OpisSwiata() {
    }
    return OpisSwiata;
}());
var swiat = [
    { opis: 'nic', prawdo: 40, rodzaj: [1], sila: 7 },
    { opis: 'oblesny gnom', prawdo: 10, rodzaj: [1], sila: 2 },
    { opis: 'wielki smok', prawdo: 5, rodzaj: [1], sila: 7 },
    { opis: 'straszny troll', prawdo: 10, rodzaj: [1], sila: 3 },
    { opis: 'zlodzieja', prawdo: 1, rodzaj: [2], sila: 1 },
    { opis: 'czarodzieja', prawdo: 6, rodzaj: [2], sila: 1 },
    { opis: 'dobrego duszka', prawdo: 5, rodzaj: [2], sila: 1 },
    { opis: 'zlego ducha', prawdo: 5, rodzaj: [2], sila: 1 },
    { opis: 'miecz', prawdo: 2, rodzaj: [3], sila: 1 },
    { opis: 'zbroje', prawdo: 2, rodzaj: [3], sila: 1 },
    { opis: 'magiczny eliksir', prawdo: 4, rodzaj: [3], sila: 1 },
    { opis: 'sztuke miesa', prawdo: 4, rodzaj: [3], sila: 1 },
    { opis: 'zloto', prawdo: 5, rodzaj: [3], sila: 1 },
    { opis: 'trucizne', prawdo: 3, rodzaj: [3], sila: 1 }
];
var Bohater = (function () {
    function Bohater(element, wytrzymalosc, sila, bagaz, zloto) {
        this.element = element;
        this.wytrzymalosc = wytrzymalosc;
        this.sila = sila;
        this.bagaz = bagaz;
        this.zloto = zloto;
    }
    Bohater.prototype.opiszBohatera = function () {
        // description
        this.element.innerHTML += "Bohater: wytrzymalosc:" + this.wytrzymalosc + " , bagaz: " + this.bagaz + " , zloto: " + this.zloto;
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
    };
    return Bohater;
}());
;
var Zdarzenie = (function () {
    function Zdarzenie(element) {
        this.element = element;
        //this.element.innerHTML += "Zdarzenie: ";
        //this.span = document.createElement('span');
        //this.element.appendChild(this.span);
    }
    Zdarzenie.prototype.spotkajWroga = function (kogo) {
        // description
        this.element.innerHTML += "Spotkales: " + swiat[kogo].opis + " , rodzaj: " + swiat[kogo].rodzaj + " , sila: " + swiat[kogo].sila;
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
    };
    Zdarzenie.prototype.spotkajNieznajomego = function (kogo) {
        // description
    };
    Zdarzenie.prototype.znajdzPrzedmiot = function (jaki) {
        // description
    };
    return Zdarzenie;
}());
;
function fight() {
    alert('fight');
}
function flee() {
    alert('flee');
}
function talk() {
    alert('talk');
}
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
    var tbl = document.getElementById('tablica');
    var hafn = new Hafn(tbl);
    var ekran = document.getElementById('ekran');
    var statystyki = document.getElementById('stat');
    var bohater = new Bohater(statystyki, 1, 1, [1], 1);
    bohater.opiszBohatera();
    var zdarzenie = new Zdarzenie(ekran);
    var losowanie = Math.floor(Math.random() * 14);
    zdarzenie.spotkajWroga(losowanie);
};
//# sourceMappingURL=app.js.map