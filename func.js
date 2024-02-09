let btns = document.querySelector('.button');
let stop = true;
const zero = document.querySelector('.zero');
let firstNumber = "";
let operator = "";
// let secondNumber = "";
let condition = false;
let resultTop = document.querySelector('.result-top');

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
         
          if (parseFloat(zero.innerHTML) != 0) {
            result1 = parseFloat(firstNumber) / parseFloat(zero.innerHTML);
          } else {
            result1 = "Cannot divide by zero";
          }
      }
      zero.innerHTML = result1;

    
    }

    firstNumber = "";
    stop = true; //برای اینکه عدد بعد مساوی اپدیت شود
    condition = false; //برای انکه بعد وارد کردن عدد دوباره عملیات از سر گرفته شود
    history();

    zero.innerHTML = pow2; //pow2
    resultTop.innerHTML = `sqr(${num}) `;
    zero.innerHTML = pow3; //pow3
    resultTop.innerHTML = `sqr(${num1}) `;
    zero.innerHTML = sqr; //sqrt
    resultTop.innerHTML = `sqrt(${num2}) `;
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
  }else if (event.target.classList.contains("percent")){
  

      let currentNumber = parseFloat(zero.innerHTML);
      let percentValue = currentNumber / 100;
      zero.innerHTML = percentValue;
      stop = true;
   
    

  }
}

/*---------------------------------------history--memory--------------------------------------- */

let textHistory = document.querySelector(".p-history");
let historydiv = document.querySelector(".history");
let trashbtn = document.querySelector(".trash");

trashbtn.addEventListener("click", Trashbtnfunc);

function history() {
  textHistory.style.display = "none";

  let newdiv = document.createElement("div");
  newdiv.classList.add("newdivhistory");
  historydiv.appendChild(newdiv);
  let newp1 = document.createElement("p");
  newp1.classList.add("new1class");
  let newp2 = document.createElement("p");
  newp2.classList.add("new2class");

  newp1.innerHTML = resultTop.innerHTML + "=";
  newp2.innerHTML = zero.innerHTML;

  newdiv.appendChild(newp1);
  newdiv.appendChild(newp2);
}

let divHandM = document.querySelector(".left-text");
let memoryDiv = document.querySelector(".memory-div");
let historybtn = document.querySelector(".his-btn");
let memorybtn = document.querySelector(".mem-btn");
divHandM.addEventListener("click", hisandmemoryfun);

function hisandmemoryfun(event) {
  if (event.target.classList.contains("his-btn")) {
    memoryDiv.style.width = "0";
    historybtn.style.borderBottom = " 3px solid rgb(228, 137, 19)";
    memorybtn.style.borderBottom = "none";
  }
  if (event.target.classList.contains("mem-btn")) {
    memoryDiv.style.width = "380px";
    memorybtn.style.borderBottom = " 3px solid rgb(228, 137, 19)";
    historybtn.style.borderBottom = "none";
  }
}

let mcbtn = document.querySelector(".MCbtn");
let mrbtn = document.querySelector(".MRbtn");
let Mplusbtn = document.querySelector(".Mplus");
let Mminusbtn = document.querySelector(".Mminus");
let MSbtn = document.querySelector(".MS");
let memoryNum = document.querySelector(".memory-num");
let memoryText = document.querySelector(".memory-text");
let allmemorybtn = document.querySelector(".memory-btn");
let memoryValue = null;

allmemorybtn.addEventListener("click", allmemorybtnfun);

function allmemorybtnfun(event) {
  if (event.target.classList.contains("MS")) {
    if (!isNaN(parseFloat(zero.innerHTML))){

      memoryValue = parseFloat(zero.innerHTML);
      memoryNum.innerHTML = memoryValue;
      memoryText.style.display = "none";
      mcbtn.style.color = "black";
      mrbtn.style.color = "black";
      mcbtn.style.cursor = "pointer";
      mrbtn.style.cursor = "pointer";
    }
  } else if (event.target.classList.contains("Mminus")) {
    if (!isNaN(parseFloat(zero.innerHTML))) {
      memoryValue = (memoryValue !== null ? memoryValue : 0) - parseFloat(zero.innerHTML);
      memoryNum.innerHTML = memoryValue;
  }

    memoryText.style.display = "none";
  } else if (event.target.classList.contains("Mplus")) {
    if (!isNaN(parseFloat(zero.innerHTML))) {
      memoryValue = (memoryValue !== null ? memoryValue : 0) + parseFloat(zero.innerHTML);
      memoryNum.innerHTML = memoryValue;
  }

  } else if (event.target.classList.contains("MRbtn")) {
    if (memoryValue !== null) {
      zero.innerHTML = memoryValue;
      stop = false;
    }
  } else if (event.target.classList.contains("MCbtn")) {
    memoryValue = null;
    memoryText.style.display = "block";
    memoryNum.innerHTML = "";
  }
}

function Trashbtnfunc() {
  let hitorytrash = document.querySelectorAll(".newdivhistory");

  hitorytrash.forEach((element) => {
    element.remove();
  });
  textHistory.style.display = "block";

  memoryNum.remove();
  memoryText.style.display = "block";


}

/*---------------------------------------theme--------------------------------------- */

const btn= document.querySelector(".icon-bar")
const body= document.querySelector("body")

function btnclick(){
    if(body.classList.contains("main")){

        body.classList.remove("main")
        body.classList.add("green")

    }else if(body.classList.contains("green")){

        body.classList.remove("green")
        body.classList.add("blue")

    }else if(body.classList.contains("blue")){

        body.classList.remove("blue")
        body.classList.add("pink")

    }else if(body.classList.contains("pink")){

        body.classList.remove("pink")
        body.classList.add("main")
    }

}

btn.addEventListener("click",btnclick)