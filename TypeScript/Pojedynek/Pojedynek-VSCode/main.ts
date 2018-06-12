import { Greeter } from "./app"
import { Hafn, Bohater, Zdarzenie } from "./app"

window.onload = () => {
  var el = document.getElementById('content');
  var greeter = new Greeter(el);
  greeter.start();

  var tbl = document.getElementById('tablica');
  var hafn = new Hafn(tbl);

  var ekran = document.getElementById('ekran');
  var statystyki = document.getElementById('stat');
  var bohater = new Bohater(statystyki,1,1,[1],1);
  bohater.opiszBohatera();
  var zdarzenie = new Zdarzenie(ekran);
  var losowanie = Math.floor(Math.random() * 14);
  zdarzenie.spotkajWroga(losowanie);

};