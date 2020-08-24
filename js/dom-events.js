// First things first.. is our file loading into the browser?
// alert( "DOM EVENTS JS LOADED" );
// console.log( "DOM EVENTS JS LOADED" );
// Normally the above is removed once you know its working.

/**
 * Targetting vis the DOM (Document Object Model) in JavaScript
 */

 const myH2 = document.getElementById( 'target-me');
 console.log( myH2 ); // We can see in the console if we successfully grabbed the element

 // Lets try and grab the proceeding paragraph...
 const myP = document.querySelector( "#target-me + p" ); // Target a <p> DIRECTLY
                                                         // AFTER the element with id="target-me"
console.log( myP );

// Lets grab the hover button
const hoverButton = document.querySelector( "p > button" ); // Remember querySelector grabs the FIRST match only
console.log( hoverButton );

// Lets grab the first span
const firstSpan = document.querySelector( "p > span:nth-child(2) " );
console.log(firstSpan);

// Lets grab the click button
const clickButton = document.querySelector( "p > button:nth-of-type(2)" );
console.log(clickButton);

// Lets grab the second Span
const secondSpan = document.querySelector("p > span:nth-child(4)");
console.log(secondSpan);

/**
 * DOM / ELEMENT Manipulation
 */

 // We can use JavaScript to cupdate / replace the content in elements.
 myH2.textContent = "This H2 was found and updated!";
 console.log("Outputted string into our <h2> element!");

 // We are replacing the existing CSS String.
 myH2.className = "salmon-coloured-text";
 console.log( ' Change the H2 font color to "salmon"');