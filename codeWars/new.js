function correctPolishLetters(string) {
  const polska = [ą, ć, ę, ł, ń, ó, ś, ź, ż]
  const norm = [a, c, e, l, n, o, s, z, z]
  const newArray = [];
  for (const letter of string) {
    switch (letter) {
      case 'ą': letter = 'a'; break;
      case 'ć': letter = 'c'; break;
      case 'ę': letter = 'e'; break;
      case 'ł': letter = 'l'; break;
      case 'ń': letter = 'n'; break;
      case 'ó': letter = 'o'; break;
      case 'ś': letter = 's'; break;
      case 'ź': letter = 'z'; break;
      case 'ż': letter = 'z'; break;
      default:
        break;
    }

  }
  newArray.push(letter);
  newArray.join('');
}
newArray = []

console.log(newArray);
/*
const newArray = [];
for (let letter of string) {

  switch (letter){
    case 'ć': letter = 'c'; break;
  }
newArray.push(letter);
}
newArray = ["v", 'a', 'r', 'd', 'a', 's', ' ',]

newArray.join('');
'Vardas '







/*There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
*/