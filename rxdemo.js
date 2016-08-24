/**
 * Created by namitamalik on 8/24/16.
 */
var a = [
    "Namita",
    "Amit",
    "Rohit",
    "Neetika"
];

var source1 = Rx.Observable.from(a)
    .map(x => Rx.Observable.of('Hello ' + x))
    .mergeAll();
source1.subscribe(x => document.getElementById('text').innerText = x);

var source2 = Rx.Observable.from(a)
    .flatMap(x => Rx.Observable.of('Hello ' + x));
source2.subscribe(x => console.log(x));