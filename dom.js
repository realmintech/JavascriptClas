let look = document.querySelector('#look');
let prev = look.previousElementSibling
let nextSiblings = look.nextElementSibling;
let parent = look.parentElement.previousElementSibling;
console.log(parent)
// console.log(nextSiblings)
// console.log(prev)

while(prev){
    console.log(prev)
    prev = prev.previousElementSibling;
    
}

while(nextSiblings){
    console.log(nextSiblings);
    nextSiblings = nextSiblings.nextElementSibling;
    
    // break;
}

