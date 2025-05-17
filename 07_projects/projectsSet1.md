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