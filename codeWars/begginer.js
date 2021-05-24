function check(a, x){
for(let i=0; i<a.length ; i++){
const lego = a[i];
if(lego == x){
        return true
        }
    }
    return false;
}

console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), '->', false);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);
