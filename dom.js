// document.body.children[1].children[0].href = 'https://www.google.com/';
// above syntax is a method known as "drilling in to Elements":- this method requires us to have full awareness of our DOM structure in
// order for us to make changes to our HTML elements, and if there changes in our HTML file, our Javascript code would have to be changed
// as well.

// document.getElementsByID('sample-id')
// above syntax is a method known as query selecting:- Selecting elements does not require us full knowledge of our DOM Structure
// We can select our HTML elements in a way that is similar to selecting elements in our CSS files.


let anchorElement = document.getElementById('external-link');

anchorElement.href = 'https://www.google.com';