//EventListeners
document.querySelector('#menu').addEventListener('click',toggleMenu);
/*function declaration*/
// function toggleMenu(){

// }

/*function expression*/
// const toggle = function() {

// }



/*arrow syntax*/
const toggleMenu = ()=> {
    document.querySelector('#navigation').classList.toggle('show');

} 