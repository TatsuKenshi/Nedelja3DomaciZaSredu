console.log(`-------------------------------`);
console.log(`---------- Zadatak 1 ----------`);
console.log(`-------------------------------`);

// * 1. Napisati funkciju koja vraca najduzi palindrom u datom stringu.
// Napomena: nije potrebno da se ispituje da li je uneti string palindrom, neka se podrazumeva da jeste
// Primer: "HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"
// Ispis: "12345678987654321"

let string = "HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE";

function palindrom(a) {
  let max = "";
  let newString = "";

  for (let a = 0; a < string.length - 1; a++) {
    for (let j = 3; j < string.length + 1 - a; j++) {
      newString = string.substr(a, j);
      if (
        newString.split("").reverse().join("") === newString &&
        newString.length > max.length
      ) {
        max = newString;
      }
    }
  }
  return max;
}
let confirm = palindrom(string);
console.log(confirm);

console.log(`-------------------------------`);
console.log(`---------- Zadatak 2 ----------`);
console.log(`-------------------------------`);

// 2. Napisati funkciju koja vrsi sumiranje i mnozenje jednog niza i vratiti te vrednosti u niz

let niz1 = [1, 3, 5, 2, 4, 6];
console.log(niz1);

function vratiUNiz(niz) {
  let zbir = 0;
  let proizvod = 1;
  for (let i = 0; i < niz1.length; i++) {
    zbir += niz1[i];
    proizvod *= niz1[i];
  }

  niz1.unshift(zbir, proizvod);
  return niz1;
}

console.log(vratiUNiz(niz1));

console.log(`-------------------------------`);
console.log(`---------- Zadatak 3 ----------`);
console.log(`-------------------------------`);

// 3. Napisati funkciju koja iz datog niza izbacuje null, undefined, NaN, 0, "" itd...

let niz2 = [
  3,
  5,
  "",
  1,
  "strat",
  NaN,
  4,
  undefined,
  "lp",
  0,
  null,
  "sg",
  7,
  "flyingV",
];

console.log(niz2);

function izbaciFalsy(niz) {
  let noviNiz2 = niz2.filter(Boolean);
  niz2 = [...noviNiz2];
  return niz2;
}

console.log(izbaciFalsy(niz2));

console.log(`-------------------------------`);
console.log(`---------- Zadatak 4 ----------`);
console.log(`-------------------------------`);

// 4 За првих 100 бројева исписати:
//       ако је дељив са 3  Fizz, са 5  Buzz, и са оба  FizzBuzz, у супротном Broj
//       Ако је дељив са 3,5,7 - FizzBuzzZazz
//       3,5 - FizzBuzz
//       3,7 - FizzZazz
//       5,7 - BuzzZazz

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 !== 0 && i % 7 !== 0) {
    console.log("Fizz");
  } else if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0 && i % 5 !== 0 && i % 7 === 0) {
    console.log("FizzZazz");
  } else if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
    console.log("FizzBuzzZazz");
  } else if (i % 3 !== 0 && i % 5 === 0 && i % 7 !== 0) {
    console.log("Buzz");
  } else if (i % 3 !== 0 && i % 5 === 0 && i % 7 === 0) {
    console.log("BuzzZazz");
  } else if (i % 3 !== 0 && i % 5 !== 0 && i % 7 === 0) {
    console.log("Zazz");
  } else {
    console.log(i);
  }
}

console.log(`-------------------------------`);
console.log(`---------- Zadatak 5 ----------`);
console.log(`-------------------------------`);

// 5 5. Izvrsiti inverziju brojeva bez pomocne promenljive.
//      Pr: x = 5 y = 9
//      Resenje: x = 9 y = 5
//      pom = "ne mozete koristiti"

let x = 5;
let y = 9;

x = x * y;
y = x / y;
x = x / y;

console.log(`X je sada ${x}`);
console.log(`Y je sada ${y}`);
