/**
 * The DOM (Document Object Model) is the central element to interact between javascript and web page.
 * DOM is an object representation of all the html elements
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
 */

/**
 * You need to change the color of the html element with the id "change-my-color"
 */
export function getElementFromDomAndChangeColorToRed() {
  // Write your code here
  document.getElementById("change-my-color").style.color = "red";

}

/**
 * You need to add two paragraph in the div with id "add-your-elements-in-this-element"
 * The first paragraph must contain  "Bonjour", the second "Toto"
 */
export function addElementsInDOM() {
  // Write your code here
  const elem = document.createElement("p");
  const node = document.createTextNode("Bonjour");
  elem.appendChild(node);
  const element = document.getElementById("add-your-elements-in-this-element");
  element.appendChild(elem);

  const a = document.createElement("p");
  const b = document.createTextNode("Toto");
  a.appendChild(b);
  const c = document.getElementById("add-your-elements-in-this-element");
  c.appendChild(a);

}

/**ul
 * You get a list of elements, and you have to add it in a html list, the list
 * should be in the element with id "add-list-here"
 * Each element in the list should have the background color indicated in the color key of the listElements
 * @param {array<{name: string, color: string}>} listElements
 */
export function addAListInDomFromAnArrayOfObjects(listElements) {
  // Write your code here

  const element = document.getElementById('add-list-here');

 const ul = document.createElement('ul');
 listElements.forEach(item => {
   const list = document.createElement('li');
   list.textContent = item.name;
   list.style.backgroundColor = item.color;
   ul.appendChild(list);
 });
 element.appendChild(ul);

 

}

