const sort = () => {
  const string = document.getElementById("number");
  const error = document.getElementById("error");
  const key = document.getElementById("key").value;

  if (key != "" && string.value.length != 0) {
    const number = string.value.split(",");
    binary_search(number, 0, number.length - 1, key);
  } else
    error.innerText = "You have not enter the number. Please enter the number";
};

const binary_search = (number, l, r, key) => {
  const result = document.getElementById("result");
  const box = number.slice(l, r + 1);
  animation(box);
  var flag = 0;
  let m;
  if (l <= r) {
    m = Math.floor((l + r) / 2);
    if (key == number[m]) {
      flag = key;
      error.innerText = "found";
    } else if (key < number[m]) {
      return binary_search(number, l, m - 1, key);
    } else {
      return binary_search(number, m + 1, r, key);
    }
  }
  if (flag != key) error.innerText = "Not found";
};

const animation = (box) => {
  const operation = document.getElementById("operation");
  let i = 0;
  console.log(box.length);
  box.forEach((element) => {
    i++;
    console.log(i + "i");
    if (box.length != i) {
      const p = document.createElement("p");
      p.innerHTML = element;
      operation.appendChild(p);
    } else {
      const p = document.createElement("p");
      const br = document.createElement("br");
      p.innerHTML = element;
      operation.appendChild(p).insertAdjacentElement("afterend", br);
    }
  });
};
