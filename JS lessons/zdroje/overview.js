// overview.js

let jmeno = "Jakub"; // string
let vek = 20; // integer (number)
let vaha = 68.5; // float (number)
let je_nazivu = true; // boolean

const PI = 3.1415;

alert; // není důležité
prompt; // není důležité - přijímá hodnoty od uživatele
// prompt('Zadej věk:')

console.log('Toto je testovací text');

let datovy_typ = typeof jmeno;

// Operace
let a = 100 + 100;
let b = 100 - 100;
let c = 100 * 100;
let d = 100 / 100;
let e = 25 % 10;
let f = 10001111 % 10000;
let celeJmeno = jmeno + ' Novák';
// Jakub Novák

a > b;
a < b;
a >= b;
a <= b;
0 == '0'; // true (toto nepoužívat)
0 === '0'; // false
a !== b;

10 ** 2;
100 ** 0.5;

// Podmínky

if ('podmínka') {'činnost'}
if ('podmínka') {'činnost pro true'} else {'činnost pro false'}

if ('podmínka 1') {
} else if ('podmínka 2') {
} else if ('podmínka 3') {
} else {}

if ('podmínka 1') {}
if ('podmínka 2') {}
if ('podmínka 3') {}

// Pole
let roky = [2004, 2022, 2002, 2222, 2222, '2222', true];
// pořadí  0      1     2     3     4      5      6
// roky[2] -> 2002
// roky.indexOf(true) -> 6
// heteregonní datové typy
// délka (počet prvků)
let pocet = roky.length;
// přidat prvek
// odebrat prvek
// seřadit


// for cyklus
for (let poradi=0; poradi<10; poradi++) {

}

for (let poradi=0; true; poradi++) {
    if (poradi > 100) {break;}
}

// od 0 po 99 vykonává for cyklus
for (let poradi=0; poradi<100; poradi++) {
    if (poradi == 10) {
        continue;
    }

    console.log(pocet);
}

// while cyklus

let rok = 2000;

while (rok < 2024) {
    console.log(rok);
    rok = rok + 1; // rok += 1; rok++;
}

while (rok < 2024) {
    console.log(rok);
    rok = rok - 1; // rok += 1; rok++;
    if (rok === 0) { break; }
}


function vypoctiDan(castka) {
    let vysledek = castka * 0.15;
    return vysledek;
}

let dan = vypoctiDan(10000);
let dan1 = vypoctiDan(1000);
let dan2 = vypoctiDan(5000);


// OOP - objektově orientované programování
// snaha o modelování reálných prvků ze světa pomocí kódu
// výhody: přehlednější kód, snadná udžba, kratší kód, sémantika kódu
// problém rozdělím do menších problému
// např: tank rozdělím na motor, dělo, pásy, trup ...
// pak to dám vše dohromady

// Princip vztahu Třída - Instance
// Třída - obecný popis daného prvku - šablona
// Instance (objekt, kus prvku) - je konrétní výskat danehé prvku
// vlastnosti - informace a stavy o prvku
// metody (chování) - funkce a činnosti, které ten prvek umí

// vlastnosti OOP:
// Zapouzdření, Polymorfismus, Dědičnost, Kompozice
// -> zamezení opakování kódu


class Savec {
    #vek

    constructor() {
        this.#vek = 10;
        this.jmeno = "Jan";
    }

    jist() {

        this.#vek;
    }
    pohyb(x, y) {}
    pohyb(smer) {}
}


let savec = new Savec();
savec.#vek; // privatní proměnná
savec.jmeno; // veřejná proměnná

class SuchozemskySavec extends Savec {

    pohyb() {}

    skakat() {}
}


class Motor {
    constructor(palivo, objem) {
        this.palivo = palivo;
        this.objem = objem;
    }

    start() {}
    stop() {}
}

class Auto {
    constructor(vyrobce, model, hmotnost, motor) {
        // vlastnosti, atributy nebo-li stavy
        this.vyrobce = vyrobce;
        this.model = model;
        this.hmotnost = hmotnost;
        this.motor = motor;
    }

    jeAutoTezke() {
        // metoda = chování
        return this.hmotnost > 1500;
    }
}


let motor1 = new Motor();
let mojeAuto = new Auto('Škoda', 'Octavia', 1000, motor1);

mojeAuto.motor.start();

let tvojeAuto = new Auto('Škoda', 'Superb', 2000);

tvojeAuto.motor.start(); // toto vyhodí chybu


// dědičnost
class NakladniAuto extends Auto {
    constructor(vyrobce, model, hmotnost, motor, nakladniProstor) {
        Auto.call(this, vyrobce, model, hmotnost, motor); 
        this.nakladniProstor = nakladniProstor;
    }


    otevriNakladniProstor() {
        console.log('otevírám nakl prostor');
    }
}

let naklAuto = new NakladniAuto('Škoda', 'Octavia', 1000, motor1);
naklAuto.motor.start();
naklAuto.otevriNakladniProstor();


// OOP opakování
// OOP = object oriented programing
// modelování objetků realných objektů pomocí kódu
// 


// ---------------------------------------------------------------------------------------------

// DOM - Document object model - Document Elements - pouze prohlížeče
// HTML

let myElement = document.getElementById('id1');
// jeden prvek který má id="id1" nebo null

let myHeaders = document.getElementsByClassName('header');
// [<div class="header">, <div class="header">, ...]

let myParagraphs = document.getElementsByTagName('div');
// [<div class="header">, <div>, ...]

document.querySelector('div');
document.querySelector('div#mydiv');
document.querySelector('div.header#mydiv');
document.querySelector('body div.header #mydiv');
document.querySelector('body > div.header #mydiv');
document.querySelector('a[href^="www.seznam"]');
document.querySelectorAll
// vrace více prvků

document.createAttribute


// BOM - browser object model - 



// API = Application programable inteface
// aplikační rozhraní pro ovládání software
// obecný pojem