Zde máte cheatsheet pro základy JavaScriptu:

# JavaScript - Základní Cheatsheet

## Proměnné a datové typy

### Deklarace proměnné
```javascript
let variableName;
const constantName = value;
```

### Datové typy
- `string` - řetězec znaků
- `number` - číslo (celé nebo desetinné)
- `boolean` - pravda/nepravda
- `null` - hodnota reprezentující nic
- `undefined` - hodnota, která nebyla přiřazena
- `object` - objekt (včetně objektů, polí, funkcí)
- `array` - pole (speciální typ objektu)

## Operátory

### Aritmetické operátory
- `+` sčítání
- `-` odčítání
- `*` násobení
- `/` dělení
- `%` modulo (zbytek po dělení)

### Porovnávací operátory
- `==` rovná se (s konverzí typů)
- `===` rovná se (bez konverze typů)
- `!=` nerovná se (s konverzí typů)
- `!==` nerovná se (bez konverze typů)
- `<` menší než
- `>` větší než
- `<=` menší nebo rovno
- `>=` větší nebo rovno

### Logické operátory
- `&&` logický a (AND)
- `||` logický nebo (OR)
- `!` logická negace (NOT)

## Řídící struktury

### Podmínka if-else
```javascript
if (condition) {
  // kód pokud platí podmínka
} else {
  // kód pokud podmínka neplatí
}
```

### Cyklus while
```javascript
while (condition) {
  // kód, který se opakuje, dokud platí podmínka
}
```

### Cyklus for
```javascript
for (initialization; condition; increment) {
  // kód, který se opakuje, dokud platí podmínka
}
```

### Switch
```javascript
switch (expression) {
  case value1:
    // kód pro hodnotu 1
    break;
  case value2:
    // kód pro hodnotu 2
    break;
  default:
    // kód pro ostatní případy
}
```

## Funkce

### Deklarace funkce
```javascript
function functionName(parameter1, parameter2) {
  // kód funkce
  return returnValue; // volitelné
}
```

### Volání funkce
```javascript
const result = functionName(arg1, arg2);
```

## Pole (Arrays)

### Vytvoření pole
```javascript
const arrayName = [element1, element2, ...];
```

### Přístup k prvkům pole
```javascript
const element = arrayName[index];
```

### Modifikace pole
```javascript
arrayName[index] = newValue;
```

### Délka pole
```javascript
const length = arrayName.length;
```

## Objekty

### Vytvoření objektu
```javascript
const obj = {
  key1: value1,
  key2: value2,
  // ...
};
```

### Přístup k hodnotám objektu
```javascript
const value = obj.key;
```

### Modifikace objektu
```javascript
obj.key = newValue;
```

## Závěr

Toto je pouze základní cheatsheet pro základy JavaScriptu. Existuje mnohem více konceptů a funkcionalit, které můžete zkoumat a využívat.
Here's a cheat sheet for the JavaScript `Date` and `Math` objects with some commonly used methods and properties for each:

**Date Object:**

1. **Creating Dates:**
   - `new Date()`: Create a new date object representing the current date and time.
   - `new Date(milliseconds)`: Create a date object from milliseconds since January 1, 1970 (Unix Epoch).
   - `new Date("YYYY-MM-DD")`: Create a date object from a date string.
   - `new Date(YYYY, MM, DD)`: Create a date object with specific year, month, and day.

2. **Getting Date Components:**
   - `.getFullYear()`: Get the year (4 digits).
   - `.getMonth()`: Get the month (0-11).
   - `.getDate()`: Get the day of the month (1-31).
   - `.getDay()`: Get the day of the week (0-6, 0=Sunday).
   - `.getHours()`: Get the hour (0-23).
   - `.getMinutes()`: Get the minutes (0-59).
   - `.getSeconds()`: Get the seconds (0-59).
   - `.getTime()`: Get the timestamp in milliseconds since the Unix Epoch.

3. **Setting Date Components:**
   - `.setFullYear(year)`: Set the year.
   - `.setMonth(month)`: Set the month (0-11).
   - `.setDate(day)`: Set the day of the month (1-31).
   - `.setHours(hour)`: Set the hour (0-23).
   - `.setMinutes(minute)`: Set the minutes (0-59).
   - `.setSeconds(second)`: Set the seconds (0-59).
   - `.setMilliseconds(ms)`: Set the milliseconds.

4. **Formatting Dates:**
   - `.toDateString()`: Get a string representation of the date (e.g., "Tue Sep 21 2023").
   - `.toLocaleDateString()`: Get a localized date string.
   - `.toISOString()`: Get a string in ISO 8601 format (e.g., "2023-09-21T00:00:00.000Z").

**Math Object:**

1. **Math Constants:**
   - `Math.PI`: The mathematical constant π (pi).
   - `Math.E`: The mathematical constant e (base of natural logarithms).

2. **Basic Math Functions:**
   - `Math.abs(x)`: Returns the absolute value of x.
   - `Math.round(x)`: Rounds x to the nearest integer.
   - `Math.floor(x)`: Rounds x down to the nearest integer.
   - `Math.ceil(x)`: Rounds x up to the nearest integer.

3. **Trigonometry:**
   - `Math.sin(x)`: Sine of x (in radians).
   - `Math.cos(x)`: Cosine of x (in radians).
   - `Math.tan(x)`: Tangent of x (in radians).
   - `Math.atan(x)`: Arctangent of x (in radians).

4. **Random Numbers:**
   - `Math.random()`: Generates a random number between 0 (inclusive) and 1 (exclusive).
   - `Math.floor(Math.random() * (max - min + 1)) + min`: Generates a random integer between min and max (inclusive).

5. **Exponents and Logarithms:**
   - `Math.pow(base, exponent)`: Returns base raised to the exponent.
   - `Math.sqrt(x)`: Square root of x.
   - `Math.log(x)`: Natural logarithm of x (base e).
   - `Math.exp(x)`: Exponential function of x (e^x).

6. **Minimum and Maximum:**
   - `Math.min(x1, x2, ...xn)`: Returns the minimum value among the arguments.
   - `Math.max(x1, x2, ...xn)`: Returns the maximum value among the arguments.

These cheat sheets should help you work with the `Date` and `Math` objects in JavaScript. Remember to refer to the official JavaScript documentation for more details and advanced usage.

Zde máte cheatsheet pro práci s JavaScriptovým DOM (Document Object Model) a BOM (Browser Object Model):

# JavaScript DOM (Document Object Model) & BOM (Browser Object Model) Cheatsheet

## DOM (Document Object Model)

### Získání elementů:
```javascript
// Získání elementu podle ID
const elementById = document.getElementById("elementId");

// Získání elementů podle třídy
const elementsByClass = document.getElementsByClassName("className");

// Získání elementů podle názvu tagu
const elementsByTag = document.getElementsByTagName("tagName");

// Získání prvního elementu vyhovujícího selektoru
const elementBySelector = document.querySelector("selector");

// Získání všech elementů vyhovujících selektoru
const elementsBySelectorAll = document.querySelectorAll("selector");
```

### Práce s atributy:
```javascript
// Získání hodnoty atributu
const attributeValue = element.getAttribute("attributeName");

// Nastavení hodnoty atributu
element.setAttribute("attributeName", "attributeValue");

// Odebrání atributu
element.removeAttribute("attributeName");
```

### Práce s obsahem:
```javascript
// Získání textového obsahu elementu
const textContent = element.textContent;

// Nastavení textového obsahu elementu
element.textContent = "Nový obsah";

// Získání HTML obsahu elementu
const innerHTML = element.innerHTML;

// Nastavení HTML obsahu elementu
element.innerHTML = "<p>Nový HTML obsah</p>";
```

### Události:
```javascript
// Přidání posluchače události
element.addEventListener("eventName", eventHandler);

// Odebrání posluchače události
element.removeEventListener("eventName", eventHandler);
```

### Třídy:
```javascript
// Přidání třídy
element.classList.add("className");

// Odebrání třídy
element.classList.remove("className");

// Přepnutí třídy (přidá, pokud neexistuje; jinak odebere)
element.classList.toggle("className");

// Ověření, zda element obsahuje určitou třídu
const hasClass = element.classList.contains("className");
```

## BOM (Browser Object Model)

### Globální objekty:
```javascript
// Získání globálního objektu okna (prohlížeče)
const windowObject = window;

// Získání globálního objektu dokumentu
const documentObject = document;

// Získání globálního objektu obrazovky
const screenObject = screen;

// Získání globálního objektu historie prohlížeče
const historyObject = history;

// Získání globálního objektu umožňujícího ovládání prohlížeče
const navigatorObject = navigator;
```

### Práce s oknem:
```javascript
// Otevření nového okna
const newWindow = window.open("https://www.example.com", "_blank");

// Uzavření aktuálního okna
window.close();

// Získání šířky a výšky okna
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

// Posunutí okna na určené souřadnice
window.moveTo(x, y);

// Změna velikosti okna
window.resizeTo(width, height);
```

### Práce s URL:
```javascript
// Získání aktuální URL
const currentURL = window.location.href;

// Přesměrování na jinou URL
window.location.href = "https://www.new-url.com";

// Obnovení stránky
window.location.reload();
```

### Zobrazení oznámení:
```javascript
// Zobrazení alertu s textovou zprávou
window.alert("Toto je zpráva v alertu.");

// Zobrazení potvrzovacího okna
const userConfirmation = window.confirm("Jste si jistí?");

// Zobrazení promptu pro zadání hodnoty
const userInput = window.prompt("Zadejte něco:");
```

Tento cheatsheet vám poskytuje základní informace o práci s JavaScriptovým DOM (Document Object Model) a BOM (Browser Object Model). Samozřejmě existuje mnohem více funkcí a vlastností, které můžete využít.

Zde je cheatsheet pro události v JavaScriptu:

```javascript
// Přidání posluchače události
element.addEventListener('událost', funkce);

// Odebrání posluchače události
element.removeEventListener('událost', funkce);

// Typické události
element.click(); // Kliknutí na prvek
element.submit(); // Odeslání formuláře
element.focus(); // Získání focusu
element.blur(); // Ztráta focusu

// Události myši
click // Kliknutí myší
mousedown // Stisknutí tlačítka myši
mouseup // Uvolnění tlačítka myši
mousemove // Pohyb myši nad prvkem
mouseenter // Vstup myši na prvek
mouseleave // Opouštění prvku myší
mouseover // Najetí myší na prvek
mouseout // Odejít myší z prvku

// Události klávesnice
keydown // Stisknutí klávesy
keyup // Uvolnění klávesy
keypress // Stisknutí a uvolnění klávesy

// Události formuláře
submit // Odeslání formuláře
change // Změna hodnoty elementu (input, select, ...)
input // Vstup dat do elementu
focus // Získání focusu na element
blur // Ztráta focusu na element
reset // Resetování formuláře

// Události okna a dokumentu
load // Dokument nebo obrázek byl načten
unload // Dokument byl odstraněn
resize // Změna velikosti okna
scroll // Skrolování okna nebo elementu
DOMContentLoaded // Dokument byl kompletně načten

// Vlastní události
const vlastniUdalost = new Event('nazevUdalosti');
element.dispatchEvent(vlastniUdalost);

// Zabránění výchozímu chování události
event.preventDefault();

// Zastavení dalšího šíření události (bublinka nebo zachycení)
event.stopPropagation();

// Získání cílového elementu události
const cílovýElement = event.target;

// Získání aktuálního elementu, který zpracovává událost (pro zachycení)
const aktuálníElement = event.currentTarget;

// Získání klávesy, která byla stisknuta
const stisknutáKlávesa = event.key;

// Získání pozice myši
const x = event.clientX;
const y = event.clientY;

// Získání typu události
const typUdálosti = event.type;
```

Toto je základní seznam různých událostí a funkcí používaných pro práci s událostmi v JavaScriptu. Můžete je dále kombinovat a používat v různých kontextech pro interaktivní webové aplikace.

Here's a cheat sheet for jQuery, a popular JavaScript library for simplifying DOM manipulation and handling events:

**jQuery Basics:**

1. **Selecting Elements:**
   - `$(selector)`: Select elements in the DOM using a CSS selector.

2. **Chaining:**
   - You can chain multiple jQuery methods together to operate on the same set of elements.

3. **Document Ready:**
   - `$(document).ready(function() {...})` or `$(function() {...})`: Ensures your code runs after the document is fully loaded.

**DOM Manipulation:**

4. **Getting and Setting Content:**
   - `$(element).text()`: Get or set the text content of an element.
   - `$(element).html()`: Get or set the HTML content of an element.
   - `$(element).val()`: Get or set the value of form elements.

5. **Adding and Removing Elements:**
   - `$(parent).append(element)`: Add an element as the last child of the parent.
   - `$(parent).prepend(element)`: Add an element as the first child of the parent.
   - `$(element).remove()`: Remove an element from the DOM.

6. **Modifying Attributes:**
   - `$(element).attr(name)`: Get the value of an attribute.
   - `$(element).attr(name, value)`: Set the value of an attribute.
   - `$(element).removeAttr(name)`: Remove an attribute.

**CSS Manipulation:**

7. **Styling Elements:**
   - `$(element).css(property)`: Get the value of a CSS property.
   - `$(element).css(property, value)`: Set the value of a CSS property.

8. **Adding and Removing Classes:**
   - `$(element).addClass(class)`: Add a CSS class to an element.
   - `$(element).removeClass(class)`: Remove a CSS class from an element.
   - `$(element).toggleClass(class)`: Toggle a CSS class on/off.

**Events:**

9. **Handling Events:**
   - `$(element).click(handler)`: Attach a click event handler.
   - `$(element).on(event, handler)`: Attach a general event handler.
   - `$(element).off(event, handler)`: Remove an event handler.

10. **Event Shorthand:**
    - `$(element).hover(inHandler, outHandler)`: Shorthand for mouseenter and mouseleave events.
    - `$(element).submit(handler)`: Attach a form submission handler.

**Animation:**

11. **Basic Animation:**
    - `$(element).hide()`: Hide an element.
    - `$(element).show()`: Show an element.
    - `$(element).toggle()`: Toggle the visibility of an element.

12. **Custom Animations:**
    - `$(element).animate(properties, duration, easing, callback)`: Create custom animations.

**AJAX:**

13. **Loading Data:**
    - `$.get(url, data, success)`: Load data using GET.
    - `$.post(url, data, success)`: Load data using POST.
    - `$.ajax(options)`: Advanced AJAX requests.

14. **Handling AJAX Responses:**
    - `$.ajaxSuccess(handler)`: Attach a global handler for successful AJAX requests.
    - `$.ajaxError(handler)`: Attach a global handler for AJAX errors.

Remember that jQuery is a versatile library with many plugins and features, so this cheat sheet covers the basics. For more in-depth information and specific use cases, refer to the official jQuery documentation.

Zde máte cheatsheet pro objektově orientované programování (OOP) v JavaScriptu:

# Objektově orientované programování (OOP) v JavaScriptu - Cheatsheet

## Objekty a Třídy

### Vytvoření třídy
```javascript
class ClassName {
  constructor(param1, param2) {
    this.property1 = param1;
    this.property2 = param2;
  }

  method1() {
    // Metoda třídy
  }
}
```

### Vytvoření instance třídy
```javascript
const instance = new ClassName(arg1, arg2);
```

### Dědičnost (Rodičovská a Dceřiná třída)
```javascript
class ParentClass {
  // Rodičovská třída
}

class ChildClass extends ParentClass {
  constructor(param1, param2, param3) {
    super(param1, param2);
    this.property3 = param3;
  }

  method2() {
    // Metoda dceřiné třídy
  }
}
```

## Konstruktor a Metody

### Konstruktor
```javascript
class ClassName {
  constructor(param1, param2) {
    this.property1 = param1;
    this.property2 = param2;
  }
}
```

### Metody
```javascript
class ClassName {
  method1() {
    // Metoda třídy
  }
}
```

## Dědičnost a Super

### Volání metody rodičovské třídy (super)
```javascript
class ChildClass extends ParentClass {
  method2() {
    super.method1(); // Volání metody rodičovské třídy
  }
}
```

## Zapouzdření, Dědičnost, a Polymorfismus

### Zapouzdření (Private, Protected, Public)
```javascript
class ClassName {
  #privateProperty; // Privátní vlastnost
  _protectedProperty; // Chráněná vlastnost

  constructor() {
    this.#privateProperty = value;
    this._protectedProperty = value;
    this.publicProperty = value;
  }

  #privateMethod() {
    // Privátní metoda
  }

  _protectedMethod() {
    // Chráněná metoda
  }

  publicMethod() {
    // Veřejná metoda
  }
}
```

### Polymorfismus
```javascript
class Shape {
  area() {
    // Metoda pro výpočet plochy
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}
```

## Závěr

Toto je základní cheatsheet pro objektově orientované programování (OOP) v JavaScriptu. OOP v JavaScriptu může být rozsáhlé a komplexní téma, takže se určitě vyplatí prozkoumat více zdrojů a praktikovat vytváření a práci s třídami, instancemi, metodami a dědičností.