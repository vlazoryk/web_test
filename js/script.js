function AddToDiv() {
  var eldiv = document.getElementById("id_div");
  eldiv.innerHTML = "<p> Add to div text !</p>";
}

function DW() {
  document.writeln(" any test");
  console.log("Не вдалося відкрити вказане посилання");
}

function test() {
  alert(" Test");
  let isBoss = confirm("Ти тут головний?");
  alert(isBoss); // true, якщо натиснута OК

  let age = prompt("Скільки тобі років?", 100);
  alert(`Тобі ${age} років!`); // Тобі 100 років! (оператор)
}
