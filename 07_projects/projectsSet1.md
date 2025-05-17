# Projects Related to DOM

## Project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```javascript
console.log("Color Changer")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click',function(e){
    const id = e.target.id;

    switch(id){
            case 'grey':
                  body.style.backgroundColor=id;
                  break;
      
            case 'white':
            body.style.backgroundColor=id;
            break;

            case 'blue':
            body.style.backgroundColor=id;
            break;

            case 'yellow':
            body.style.backgroundColor=id;
            break;
      
            default:
                  console.log("No matching id found");
                  break;
    }
  })
});


```

## Project 2 

```javascript
console.log("BMI Calculator");

const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```

## Project 3

```javascript
console.log("Digital Clock");

const clock = document.getElementById('clock');

setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
},1000);

```