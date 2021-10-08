// import functions
import { copyValueTo } from './calculations.js';


// reference needed DOM elements
const input1 = document.getElementById('noun-1-input');
const input2 = document.getElementById('noun-2-input');
const input3 = document.getElementById('adjective-1-input');
const input4 = document.getElementById('adjective-2-input');
const input5 = document.getElementById('adjective-3-input');
const input6 = document.getElementById('verb-1-input');
const input7 = document.getElementById('noun-3-input');
const input8 = document.getElementById('noun-4-input');
const input9 = document.getElementById('verb-2-input');
const input10 = document.getElementById('adjective-4-input');

const span1 = document.getElementById('noun-1');
const span2 = document.getElementById('noun-2');
const span3 = document.getElementById('adjective-1');
const span4 = document.getElementById('adjective-2');
const span5 = document.getElementById('adjective-3');
const span6 = document.getElementById('verb-1');
const span7 = document.getElementById('noun-3');
const span8 = document.getElementById('noun-4');
const span9 = document.getElementById('verb-2');
const span10 = document.getElementById('adjective-4');

const submitButton = document.getElementById('submit-button');

// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)

    submitButton.addEventListener('click', () => {
        copyValueTo(input1, span1);
    });

