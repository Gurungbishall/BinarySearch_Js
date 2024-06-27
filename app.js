let i;
const search = () => {
  i = 1;
  const string = document.getElementById("number");
  const error = document.getElementById("error");
  const key = document.getElementById("key").value;
  const operation = document.getElementById("operation");
  operation.innerHTML = "";
  error.innerHTML = "";

  if (key != "" && string.value.length != 0) {
    const number = string.value.split(",").map(Number);
    binary_search(number, 0, number.length - 1, key);
  } else
    error.innerText = "You have not enter the number. Please enter the number";
};

const binary_search = (number, l, r, key) => {
  const box = number.slice(l, r + 1);
  var flag = 0;
  if (l <= r) {
    animation(box);
    const mid = l + Math.floor((r - l) / 2);
    if (key == number[mid]) {
      i++;
      flag = key;
      error.innerHTML = "The number " + key + " is there in the array";
    } else if (key < number[mid]) {
      i++;
      setTimeout(() => binary_search(number, l, mid - 1, key), 1000);
    } else {
      i++;
      setTimeout(() => binary_search(number, mid + 1, r, key), 1000);
    }
  } else {
    if (flag != key)
      error.innerHTML = "The number " + key + " is not there in the array";
  }
};

const animation = (box) => {
  const operation = document.getElementById("operation");
  const div = document.createElement("div");
  div.setAttribute("class", "sort");

  const inner_div = document.createElement("p");
  inner_div.innerHTML = "Step:" + i;
  div.appendChild(inner_div);

  box.forEach((element) => {
    const inner_div = document.createElement("div");
    inner_div.innerHTML = element;
    div.appendChild(inner_div);
  });
  console.log(i);
  operation.appendChild(div);
};
