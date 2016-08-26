/**
 * Created by namitamalik on 8/24/16.
 */
var visitors = [
    "Namita",
    "Amit",
    "Rohit",
    "Neetika"
];

var source = Rx.Observable.from(visitors)
    .flatMap(x => Rx.Observable.of('Hello ' + x));
source.subscribe(x => document.getElementById('flatMap').innerText += x+"\n");