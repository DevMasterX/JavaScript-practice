// const scrollElem = document.querySelector ('.scroll');
// const scrollValueElem = document.querySelector('.scroll-value')

// const throttleHandler = _.throttle(setScrollValue, 500)
// scrollElem.addEventListener('scroll', throttleHandler, {leading: false});

// function setScrollValue (event) {
//     scrollValueElem.textContent = `${Math.ceil(scrollElem.scrollTop)}px`
// }


// const inputElem = document.querySelector('input');
// const searchValueElem = document.querySelector ('.search-value')

// const debounceHandler = _.debounce(setSearchValue, 500, {maxWait: 2000})

// inputElem.addEventListener('input', debounceHandler)

// function setSearchValue() {
//     searchValueElem.textContent = inputElem.value;
// }



const loginElem = document.querySelector('input[name="login"]');
const passwordElem = document.querySelector('input[name="password"]')

const debounceHandler = _.debounce(checkValidation, 300)

loginElem.addEventListener('input', debounceHandler)
passwordElem.addEventListener('input', debounceHandler)

function checkValidation(event) { 
    console.log(event);
    console.log(event.target.name);
    
    if (event.target.name === 'login' && event.target.value.length < 10) {
        loginElem.nextElementSibling.textContent = 'filed length must be min 10 chars'
    } else { 
        loginElem.nextElementSibling.textContent = '';
    }

}