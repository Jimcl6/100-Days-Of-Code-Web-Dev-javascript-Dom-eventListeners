// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and
//    save it in a variable with a name of your choice
// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
//    BONUS: Try using the variable from (1) to get access to the
//    sibling element (i.e. the <p> element next to the <h1> element)
// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)
// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class)
//    and store it in a new variable with a name of your choice
// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice

// Answer

// 1. Select the <h1> element by "drilling into the DOM" and
//    save it in a variable with a name of your choice
let mainHeader = document.body.children[0];
console.log(mainHeader);
// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
// console.dir(mainHeader.parentNode); // <--- this code works but problem is what if the parent node is not an HTML element, this would then return a Document node. Hence, better to use "parentElement".
// correct answer is:
console.dir(mainHeader.parentElement);

//    BONUS: Try using the variable from (1) to get access to the
//    sibling element (i.e. the <p> element next to the <h1> element)
console.dir(mainHeader.nextSibling);
// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)
let newVariable = document.getElementById("main-header");

// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class)
//    and store it in a new variable with a name of your choice
console.dir(mainHeader.nextElementSibling);
// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice
let changeValue = mainHeader.nextElementSibling.nextElementSibling;
changeValue.textContent = "Hello Sample";
