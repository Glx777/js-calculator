var screen = document.getElementById("numbers");
/* signs */
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var times = document.getElementById("times");
var division = document.getElementById("division");
var equal = document.getElementById("equal");
var clear = document.getElementById("clear");
var rmv = document.getElementById("rmv");

/* numbers */
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero_btn");
var dot = document.getElementById("dot");

var firstNum, secondNum, answer, operator;

plus.addEventListener("click", function() {
  firstNum = parseFloat(screen.innerHTML);
  operator = "+";
  screen.innerHTML = "";
});

minus.addEventListener("click", function() {
  firstNum = parseFloat(screen.innerHTML);
  operator = "-";
  screen.innerHTML = "";
});

times.addEventListener("click", function() {
  firstNum = parseFloat(screen.innerHTML);
  operator = "*";
  screen.innerHTML = "";
});

division.addEventListener("click", function() {
  firstNum = parseFloat(screen.innerHTML);
  operator = "/";
  screen.innerHTML = "";
});

clear.addEventListener("click", function() {
  if (screen.innerHTML.length === 0) {
    alert("There's nothing to remove!");
  } else {
    firstNum = 0;
    secondNum = 0;
    operator = "";
    answer = 0;
    screen.innerHTML = "";
  }
});

rmv.addEventListener("click", function() {
  var text = screen.innerHTML;
  if (text.length !== 0 || text.length > 1) {
    answer = text.substring(0, text.length - 1);
  } else {
    alert("field is empty!");
  }
  screen.innerHTML = answer;
});

equal.addEventListener("click", function() {
  if (screen.innerHTML != "") {
    secondNum = parseFloat(screen.innerHTML);
  }
  if (operator === "+") {
    answer = firstNum + secondNum;
    screen.innerHTML = answer;
  }
  if (operator === "-") {
    answer = firstNum - secondNum;
    screen.innerHTML = answer;
  }
  if (operator === "*") {
    answer = firstNum * secondNum;
    screen.innerHTML = answer;
  }
  if (operator === "/") {
    answer = firstNum / secondNum;
    if (answer.toString().length > 2) {
      screen.innerHTML = answer.toFixed(2);
    } else {
      screen.innerHTML = answer;
    }
  }
});

one.addEventListener("click", function() {
  if (screen.innerHTML.length > 11) {
    return false;
  } else {
    screen.innerHTML += 1;
  }
});

two.addEventListener("click", function() {
  if (screen.innerHTML.length > 11) {
    return false;
  } else {
    screen.innerHTML += 2;
  }
});

three.addEventListener("click", function() {
  if (screen.innerHTML.length > 11) {
    return false;
  } else {
    screen.innerHTML += 3;
  }
});

four.addEventListener("click", function() {
  if (screen.innerHTML.length > 11) {
    return false;
  } else {
    screen.innerHTML += 4;
  }
});

five.addEventListener("click", function() {
  if (screen.innerHTML.length > 11) {
    return false;
  } else {
    screen.innerHTML += 5;
  }
});

six.addEventListener("click", function() {
  if (screen.innerHTML.length > 11) {
    return false;
  } else {
    screen.innerHTML += 6;
  }
});

seven.addEventListener("click", function() {
  if (screen.innerHTML.length > 11) {
    return false;
  } else {
    screen.innerHTML += 7;
  }
});

eight.addEventListener("click", function() {
  if (screen.innerHTML.length > 11) {
    return false;
  } else {
    screen.innerHTML += 8;
  }
});

nine.addEventListener("click", function() {
  if (screen.innerHTML.length > 11) {
    return false;
  } else {
    screen.innerHTML += 9;
  }
});

zero.addEventListener("click", function() {
  if (screen.innerHTML.length > 11) {
    return false;
  } else {
    screen.innerHTML += 0;
  }
});

dot.addEventListener("click", function() {
  if (screen.innerHTML.slice(-1) === "." || screen.innerHTML === "" || screen.innerHTML.length > 11) {
    return false;
  } else {
    screen.innerHTML += ".";
  }
});
