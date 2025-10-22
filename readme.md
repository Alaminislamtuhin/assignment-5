
                           //** Ans The All Question**//


ans no: 1
(a) getElementById (): getElementById are selects a single element based on its
 unique id atribute.

(b) getElementByClassName () : getElementByClassName are selects all elements 
that have a specific class name.

(c)querySelector() : Selects the first element that matches a specified CSS selector. This can be an ID, a class, a tag name, an attribute, or any combination of these.

(d) querySelectorAll (): selects all element that match a specified css selectors.


ans no: 2

Creating and inserting a new element into the Document Object Model. using JavaScript involves two main steps: creating the element.
Use the document.createElement() method to create a new element node.

***** like a examle:

const Heading = document.createElement('h1');

Heading.textContent = 'Hello, 
Heading.style.color = 'red'; 

const bodyElement = document.body; 

bodyElement.appendChild(Heading);

ans no: 3

Event bubbling is the default JavaScript behavior where an event, like a click, triggered on a specific HTML element propagates  upwards through its parent elements, all the way to the root of the Document Object Model (DOM).


ans no :4 

Event delegation in JavaScript is a technique where a single event listener attached to a parent element to manage events triggered by child elements.  than adding separate event listeners to each child. This approach leverages the concept of event bubbling,this  event triggered on a child element propagaets up to its parent elements.


ans no: 5

(a)  preventDefault(): this method prevents the browser's default action associated with a specific event.

(b)  stopPropagation():  This method prevents the event from propagating further up or down the DOM tree.



