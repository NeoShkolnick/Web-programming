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

form = document.getElementById('task_4_3')
form.addEventListener("submit",function(event) {
  let elements = Object.values(event.currentTarget.getElementsByTagName('input'));
  let M = elements.reduce(function(acc, el, i) {
    let value = parseFloat(el.value);
    if (isNaN(value)) {
      elements[i].classList.add('is-invalid');
    } else {
      elements[i].classList.remove('is-invalid');
    }
    if (i % 6 === 0) {
      return [...acc, [value]];
    } else {
      return [...acc.slice(0,-1), [...acc[acc.length-1], value]];
    }
  }, []);

  let sumOfMajorDiagonal = 0;
  for (let i = 0; i < 6; i++) {
    sumOfMajorDiagonal += M[i][i];
  }
  console.log(sumOfMajorDiagonal);
  console.log(M.map(function(cur){
    return cur.map(function(el){
      return el - sumOfMajorDiagonal;
    });
  }));
  event.preventDefault();
});
