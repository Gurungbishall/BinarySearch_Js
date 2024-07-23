let i = 0;
let animationTimeout;

const btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
  event.preventDefault();

  i = 0;

  clearTimeout(animationTimeout);

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
});

const binary_search = (numbers, l, r, key) => {
  if (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    animationTimeout = setTimeout(() => {
      animation(numbers.slice(l, r + 1), l, r, mid);
      if (numbers[mid] == key) {
        i++;
        error.innerHTML = `The number ${key} is found in the array.`;
      } else if (numbers[mid] > key) {
        i++;
        binary_search(numbers, l, mid - 1, key);
      } else {
        i++;
        binary_search(numbers, mid + 1, r, key);
      }
    }, 1000);
  } else {
    error.innerHTML = `The number ${key} is not found in the array.`;
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
