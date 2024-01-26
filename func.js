let btns = document.querySelector(".button");
let stop = true;
const zero = document.querySelector(".zero");
let firstNumber = "";
let operator = "";
// let secondNumber = "";
let condition = false;
let resultTop = document.querySelector(".result-top");

btns.addEventListener("click", clickfunc);

function clickfunc(event) {
  if (event.target.classList.contains("number")) {
    if (stop) {
      zero.innerHTML = event.target.innerHTML;
      stop = false;
      // console.log();
    } else {
      zero.innerHTML += event.target.innerHTML;
    }
  } else if (event.target.classList.contains("operatorH")) {
    stop = true;
    if (!condition) {
      firstNumber = zero.innerHTML;
      operator = event.target.innerHTML;
      resultTop.innerHTML = `${firstNumber} ${operator} `;
      condition = true;
      return; //برای اینکه عدد اولی  پاک شود
    } else {
      resultTop.innerHTML = `${firstNumber} ${operator} ${zero.innerHTML}`;

      let result1;
      switch (operator) {
        case "-":
          result1 = parseFloat(firstNumber) - parseFloat(zero.innerHTML);
          break;
        case "+":
          result1 = parseFloat(firstNumber) + parseFloat(zero.innerHTML);
          break;
        case "×":
          result1 = parseFloat(firstNumber) * parseFloat(zero.innerHTML);
          break;
        case "÷":
          // result1=  parseFloat(firstNumber) / parseFloat(zero.innerHTML)

          if (parseFloat(zero.innerHTML) != 0) {
            result1 = parseFloat(firstNumber) / parseFloat(zero.innerHTML);
          } else {
            result1 = "Cannot divide by zero";
          }
      }
      zero.innerHTML = result1;
    }
  } else if (event.target.classList.contains("equals")) {
    if (firstNumber !== "" && operator !== "") {
      resultTop.innerHTML = `${firstNumber} ${operator} ${zero.innerHTML}`;

      let result1;
      switch (operator) {
        case "-":
          result1 = parseFloat(firstNumber) - parseFloat(zero.innerHTML);
          break;
        case "+":
          result1 = parseFloat(firstNumber) + parseFloat(zero.innerHTML);
          break;
        case "×":
          result1 = parseFloat(firstNumber) * parseFloat(zero.innerHTML);
          break;
        case "÷":
          // result1=  parseFloat(firstNumber) / parseFloat(zero.innerHTML)
          if (parseFloat(zero.innerHTML) != 0) {
            result1 = parseFloat(firstNumber) / parseFloat(zero.innerHTML);
          } else {
            result1 = "Cannot divide by zero";
          }
      }
      zero.innerHTML = result1;

      // resultTop.innerHTML=""
    }

    history();
    stop = true; //برای اینکه عدد بعد مساوی اپدیت شود
    condition = false; //برای انکه بعد وارد کردن عدد دوباره عملیات از سر گرفته شود

    zero.innerHTML = pow2; ///pow2
    resultTop.innerHTML = `sqr(${num}) `;
    zero.innerHTML = pow3; //pow3
    resultTop.innerHTML = `sqr(${num1}) `;
    zero.innerHTML = sqr; //sqr
    resultTop.innerHTML = `sqr(${num2}) `;
    zero.innerHTML = res; //1/x
    resultTop.innerHTML = `1/(${x}) `;
  } else if (event.target.classList.contains("clear")) {
    // zero.innerHTML=""
    firstNumber = "";
    operator = "";
    resultTop.innerHTML = "";
    condition = false;
    zero.innerHTML = "0";
    stop = true;
  } else if (event.target.classList.contains("CE")) {
    firstNumber = "";
    operator = "";
    resultTop.innerHTML = "";
    condition = false;
    zero.innerHTML = "0";
    stop = true;
  } else if (event.target.classList.contains("delete")) {
    zero.innerHTML = zero.innerHTML.substring(0, zero.innerHTML.length - 1);

    if (firstNumber.innerHTML == "" || zero.innerHTML == "") {
      zero.innerHTML = "0";
      stop = true; // برای اینکه بعد گذاشتن صفر و وارد کردن عدد دیگر صفر قبلی پاک شود و عدد بگیرد
    }
  } else if (event.target.classList.contains("pow2")) {
    let num = parseFloat(zero.innerHTML);
    let pow2 = Math.pow(num, 2);
    zero.innerHTML = pow2;
    resultTop.innerHTML = `sqr(${num}) `;
    stop = true;
  } else if (event.target.classList.contains("pow3")) {
    let num1 = parseFloat(zero.innerHTML);
    let pow3 = Math.pow(num1, 3);
    zero.innerHTML = pow3;
    resultTop.innerHTML = `sqr(${num1}) `;
    stop = true;
  } else if (event.target.classList.contains("sqrt")) {
    let num2 = parseFloat(zero.innerHTML);
    let sqr = Math.sqrt(num2);
    zero.innerHTML = sqr;
    resultTop.innerHTML = `sqrt(${num2}) `;
    stop = true;
  } else if (event.target.classList.contains("1x-btn")) {
    let x = parseFloat(zero.innerHTML);
    if (x != 0) {
      let res = 1 / x;
      zero.innerHTML = res;
      resultTop.innerHTML = `1/(${x}) `;
      stop = true;
    } else {
      zero.innerHTML = "Cannot divide by zero";
      resultTop.innerHTML = `1/(${x}) `;
      stop = true;
    }
  } else if (event.target.classList.contains("dot")) {
    if (!zero.innerHTML.includes(".")) {
      zero.innerHTML += ".";
      stop = false;
    }
  } else if (event.target.classList.contains("positiveNegative")) {
    if (zero.innerHTML !== "0") {
      if (zero.innerHTML.includes("-")) {
        zero.innerHTML = zero.innerHTML.substring(1);
      } else {
        zero.innerHTML = "-" + zero.innerHTML;
      }
    }
  }
}

/*---------------------------------------history--------------------------------------- */

let textHistory = document.querySelector(".p-history");
let historydiv = document.querySelector(".history");

function history() {
  textHistory.style.display = "none";

  let newp1 = document.createElement("p");
  newp1.classList.add("new1class");
  let newp2 = document.createElement("p");
  newp2.classList.add("new2class");

  newp1.innerHTML = resultTop.innerHTML + "=";
  newp2.innerHTML = zero.innerHTML;

  historydiv.append(newp1);
  historydiv.append(newp2);
}
