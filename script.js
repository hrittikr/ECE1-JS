function calculate() {
  let input = document.getElementById("nums").value;
  let arr = input.split(",");
  let op = document.getElementById("operation").value;

  let result = Number(arr[0]);


  for (let i = 1; i < arr.length; i++) {
    let num = Number(arr[i]);


    if (op === "add") {
      result += num;
    } else if (op === "sub") {
      result -= num;
    } else if (op === "mul") {
      result *= num;
    } else if (op === "div") {
      result /= num;
    }
  }

  document.getElementById("result").innerHTML =
    "Result = " + result;
}
