function AddToDiv() {
    var eldiv = document.getElementById('id_div');
    eldiv.innerHTML = '<p> Add to div text !</p>'
}

function DW(){
    document.writeln(" any test");
    console.log ("Не вдалося відкрити вказане посилання");

}
function test() {
    alert(" Test");
    let isBoss = confirm ("Ти тут головний?");
alert (isBoss); // true, якщо натиснута OК

let age = prompt ('Скільки тобі років?', 100);
alert ("Тобі $ {age} років!"); // Тобі 100 років! (оператор)



}
function testMas() {
var mas = new Array(1,2,3);
mas.top='top';
mas[4] = 4;
for(a in mas)
console.log(mas[a]); //1, 2, 3, 'top'
for(b of mas)
console.log(b); //1, 2, 3
var m = new Array("aa","bb","cc")
m[4] =5;
for(b of m)
console.log(b); //1, 2, 3
}