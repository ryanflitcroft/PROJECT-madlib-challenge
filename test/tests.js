// IMPORT MODULES under test here:
// import { add } from '../calculator.js';
import { copyValueTo } from '../calculations.js';

const test = QUnit.test;

// name your test by what it is testing
test('copy value from input to span', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'banana';
    const input = document.createElement('input');
    const span = document.createElement('span');
    input.value = expected;
    
    console.log(input, span);
    console.log(input.value);
    //Act 
    // Call the function you're testing and set the result to a const
    copyValueTo(input, span);
    const actual = span.textContent; // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
