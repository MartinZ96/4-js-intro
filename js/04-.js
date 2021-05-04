const a = 12
const b = 14

if (a > b){
    console.log('Pomidoras');
}
else {
    console.log('Bandykite kitą kartą');
}

if (a < b){
    console.log('Pomidoras');
}
else {
    console.log('Bandykite kitą kartą');
}

if (a == b){
    console.log('Pomidoras');
}
else {
    console.log('Bandykite kitą kartą');
}

if (a != b){
    console.log('Pomidoras');
}
else {
    console.log('Bandykite kitą kartą');
}

if (a >= b){
    console.log('Pomidoras');
}
else {
    console.log('Bandykite kitą kartą');
}

if (a <= b){
    console.log('Pomidoras');
}
else {
    console.log('Bandykite kitą kartą');
}

const sveiki = 'sveiki gyvi visi';
const sveikiSize = sveiki.length
console.log(sveiki.length);

const rimtas = `Pasisveikinimas "${sveiki}" ilgis yra net ${sveikiSize}.`;
console.log(rimtas);

const p1 = 'gaidys'
const p2 = 'vista'

const gaidysSize = p1.length
const vistaSize = p2.length

if (p1.length > p2.length){
    console.log('gaidys ilgesnis uz vista');
} else {
    console.log('vista negali buti ilgesne');
}

if (p1.length < p2.length){
    console.log('gaidys ilgesnis uz vista');
} else {
    console.log('vista negali buti ilgesne');
}

if (p1.length === p2.length){
    console.log('gaidys ilgesnis uz vista');
} else {
    console.log('vista negali buti ilgesne ar lygi');
}

if (p1.length !== p2.length){
    console.log('nera lygus');
} else {
    console.log('vista ir gaidys negali buti lygus');
}

if (p1.length >= p2.length){
    console.log('lygu arba daugiau');
} else {
    console.log('vista ir gaidys negali buti lygus');
}

if (p1.length <= p2.length){
    console.log('lygu arba daugiau');
} else {
    console.log('vista ir gaidys negali buti lygus');
}

const manomarks = [3, 5, 7, 8];
const manomarksCount = manomarks.length;
const tavomarks = [7, 8, 9]
const tavomarksCount = tavomarks.length;

const mano = `turiu ${manomarksCount} pazymius.`;
console.log(mano);
const tavo = `kitas turi ${tavomarksCount} pazymius.`;
console.log(tavo);

if (manomarks.length > tavomarks.length){
    console.log('turiu daugiau pazymiu');
} else {
    console.log('tu turi daugiau pazymiu');
}

if (manomarks.length < tavomarks.length){
    console.log('turiu daugiau pazymiu');
} else {
    console.log('tu turi daugiau pazymiu');
}

if (manomarks.length === tavomarks.length){
    console.log('turim po lygiai pazymiu');
} else {
    console.log('neturim po lygiai pazymiu');
}

if (manomarks.length !== tavomarks.length){
    console.log('neturim lygiai pazymiu');
} else {
    console.log('turim lygiai pazymiu');
}

if (manomarks.length >= tavomarks.length){
    console.log('turiu daugiau arba tiek pat pazymiu');
} else {
    console.log('tu turi daugiau pazymiu');
}

if (manomarks.length <= tavomarks.length){
    console.log('turiu maziau arba tiek pat pazymiu');
} else {
    console.log('tu turi maziau pazymiu');
}