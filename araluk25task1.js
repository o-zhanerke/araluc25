// 1-тапсырма
let num1 = +prompt("Бірінші саны енгіз:");
let num2 = +prompt("Екінші санды енгіз:");
let tanba = prompt("Таңба");

function calculator(a, b, i) {
  if (i == "+") {
    return a + b;
  } else if (i == "-") {
    return a - b;
  } else if (i == "*") {
    return a * b;
  } else if (i == "/") {
    return a / b;
  }
}

var jauap = calculator(num1, num2, tanba);

alert(jauap);

const constructor = (x, y, z) => {};

alert((result = constructor(num1, num2, tanda)));

// 2-тапсырма

// 3-тапсырма
function tabu() {
  var oi_san = parseInt(Math.random() * 100);
  console.log(oi_san);

  while (true) {
    var san = +prompt("Sandy tap");

    if (oi_san == san) {
      return "Durys";
    }
    if (
      (san - oi_san <= 5 && san - oi_san > 0) ||
      (oi_san - san <= 5 && oi_san - san > 0)
    ) {
      alert("Жақын");
    } else {
      alert("Алыс");
    }
  }
}
alert(tabu());

// қосымша тапсырма
let a = 15;
let b = 20;

a = a ^ b;
b = a ^ b;
a = a ^ b;

alert(a);
alert(b);
