1.  Answer the question no.1

    The difference between getElementById, getElementByClassName and querySelector / querySelectorAll:

    - getElementById: getElementById is a fundamental part of Document object Model(DOM). its used to access a specific html element form a webpage by its unique id name.

    Example: document.getElementById("name-of-id")

    - getElementByClassName: getElementByClassName is a part of DOM. use to select html element base on their class names.Its returns a live HTML collection (an array like object) of all child element of bases the specific class names.

    Example: document.getElementByClassName("class-names")

    - querySelector: Its return the first element within the document that names matches the specific css selector. if matches no found, its return null. Its allows developers to easy to find and access element by CSS selector, such as IDs, tag names to then manipulate the content.

    example: document.querySelector(".main-content") #to get the first element with the name of class main-content.

    querySelectorAll: Its return a static NodeList containing all elements within the document or the specific element that match given css selector or group selector.

    example: document.querySelectorAll('.card).

2.  Answer the question no.2

    I show how to create and insert a new element into the DOM step by step.

    1. First we use the document.createElement() method and passing the html tag name. For example:

    const newParagraph = document.createElement("p")

    2. Then you can set the property like textContent or innerText to add content, and use method setAttribute() to add attributes. For example:

    newParagraph.text = "Hello World"
    newParagraph.setAttribute("id", "myNewText")

    3. After all use the appendChild() method to on a parent element to add the new element. For example:

    document.body.appendChild(newParagraph); #add to the end of the body

3.  Answer the question no.3

    Event bubbling is a javaScripts mechanism that triggered an event on a nested element. First runs its handler then propagates through its parent elements to the document object.

        Example:

        HTML:
        <div id="parent">
            <button id="child"> Click </button>
        </div>

        JS:
        document.getElementById("parent").addEventListener("click", function() {
        console.log("Parent clicked");
        });

        document.getElementById("child").addEventListener("click", function() {
        console.log("Child clicked");
        });

    When you clicked the child button then, "Child clicked" is logged.
    Then, the event bubbles up to the parent div, "Parent clicked" is logged.

4.  Answer the question no.4

    Event delegation is a technic in JS for adding event listener to multiple child elements, you attached a single event listener to a parent element for triggered its children.
    Its very helpful because, less memory usage and boost the performance to execution and its works even a new child elements are added later or keep clean the code.

5.  Answer the question no.5

    Difference between preventDefault() and stopPropagation() method:

        *preventDefault(): preventDefault stops default action or behavior of an element. when its works then the element wll not navigate but event bubbling still happens.

        *event.stopPropagation(): event.stopPropagation works for stops the event from bubbling up to parents, it does not prevent the default browser.

    After all we say that preventDefault() stop browser's default action like link navigation, form submission etc. And stopPropagation() stop event from bubbling up to parents.
