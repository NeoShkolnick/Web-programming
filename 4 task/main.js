let form = document.getElementById('task_4_1')
form.addEventListener("submit",function(event) {
  let input = event.currentTarget.elements.sideOfSquare;
  let sideOfSquare = parseFloat(input.value);
  if (isNaN(sideOfSquare) || sideOfSquare <= 0) {
    input.classList.add('is-invalid');
  } else {
    input.classList.remove('is-invalid');
    console.log(sideOfSquare ** 2);
  }
  event.preventDefault();
});

form = document.getElementById('task_4_2')
form.addEventListener("submit",function(event) {
  let input = event.currentTarget.elements.valueOfX;
  let valueOfX = parseFloat(input.value);
  if (isNaN(valueOfX)) {
    input.classList.add('is-invalid');
  } else {
    input.classList.remove('is-invalid');
    let ans = 1;
    for (let i = 1; i<= 10; i++) {
      ans *= (valueOfX ** i + i + 1)
    }
    console.log(ans);
  }
  event.preventDefault();
});
