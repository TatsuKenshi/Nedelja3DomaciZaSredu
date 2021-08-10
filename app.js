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
