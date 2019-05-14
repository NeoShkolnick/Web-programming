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
  let matrix = elements.reduce(function(acc, el, i) {
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
    sumOfMajorDiagonal += matrix[i][i];
  }
  console.log(sumOfMajorDiagonal);
  console.log(matrix.map(function(cur){
    return cur.map(function(el){
      return el - sumOfMajorDiagonal;
    });
  }));
  event.preventDefault();
});


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getArray(n) {
  let resArr = []
  for (let i = 0; i < n; i++) {
    resArr.push(getRandomInt(-100,101));
  }
  return resArr;
}

function getResultArray(a) {
  console.log(a);
  let n = a.length;
  let tmpArr = a.reduce(function(acc, el) {
    return [...acc, ...el];
  }, []);
  tmpArr.sort((a, b) => (a-b));
  let resArr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      resArr[n - i] = tmpArr.slice(n * (i - 1), n * i);
    } else {
      resArr[n - i] = tmpArr.slice(n * (i - 1), n * i).reverse();
    }
  }
  return resArr;
}

form = document.getElementById('task_4_4')
form.addEventListener("submit",function(event) {
  let n = event.currentTarget.getElementsByTagName('select')[0].value;
  let divForAns = document.getElementById('answerOfTask_4_4');
  let matrix = []
  for (let i = 0; i < n; i++) {
    matrix[i] = getArray(n);
  }
  let sortMatrix = getResultArray(matrix);
  let tmp = sortMatrix.map(function(cur) {
    return '<tr>' + cur.map(function(cur) {
      return '<td>' + cur + '</td>';
    }).join('') + '</tr>';
  });
  divForAns.innerHTML = '<table class="table table-bordered"><tbody>' + tmp.join('') + '</tbody></table>';
  event.preventDefault();
});
