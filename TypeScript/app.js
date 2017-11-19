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
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
    var tbl = document.getElementById('tablica');
    var hafn = new Hafn(tbl);
};
//# sourceMappingURL=app.js.map