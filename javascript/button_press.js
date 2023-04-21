var eval_string = "";
function addToEvalString(input_val) {
  console.log("hello");
  eval_string = eval_string + input_val;
  let input3_value = document.getElementById("input3");
  input3_value.value = eval_string;
}

function showResult() {
  let input2_value = document.getElementById("input2");
  if (eval_string == "") {
    input2_value.value = "0";
  } else {
    input2_value.value = eval(eval_string);
    eval_string = "";
  }
}

function clearFunction() {
  eval_string = "";
  let input3_value = document.getElementById("input3");
  input3_value.value = eval_string;
  let input2_value = document.getElementById("input2");
  input2_value.value = eval_string;
}

function squareFunction() {
  let input3_value = document.getElementById("input3");
  input3_value.value = eval_string + "^2";
  let input2_value = document.getElementById("input2");
  input2_value.value = eval(eval_string * eval_string);
  eval_string = "";
}

function percentFunction() {
  let input3_value = document.getElementById("input3");
  input3_value.value = eval_string + "%";
  eval_string = eval(eval_string / 100);
  eval_string += "*";
}

function plusMinus() {
  let arrayOfEval = eval_string.split("");
  arrayOfEval[eval_string.length - 1] = eval(
    eval_string.charAt(eval_string.length - 1) * -1
  );
  eval_string = arrayOfEval.join("");
  let input3_value = document.getElementById("input3");
  input3_value.value = eval_string;
}
