# What is JavaScript?
**_NOTE_**:  The contents here are available in [MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#javascript_running_order)

### A high-level definition

JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area. 

* HTML is the markup language that we use to structure and give meaning to our web content, for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.

* CSS is a language of style rules that we use to apply styling to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns.

* JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)

### So what can JS really do?

The core client-side JavaScript language consists of some common programming features that allow you to do things like: 

* store useful values inside variables. 
* Operations on pieces of text (known as "strings" in programming).
* Running code in response to certain events occurring on a web page. For example, a button that when it clicked, it runs a function.

### What is JavaScript doing on your page?

***Let's Recap***

* When you load a web page in your browser, you are running your code *(the HTML, CSS, and JavaScript)* inside an execution environment *(the browser tab)*. This is like a factory that takes in raw materials *(the code)* and outputs a product *(the web page)*.

* A very common use of JavaScript is to dynamically modify HTML and CSS to update a user interface, via the Document Object Model API (as mentioned above). *Note* that the code in your web documents is generally loaded and executed in the order it appears on the page.

**_NOTE:_** *Errors may occur if JavaScript is loaded and run before the HTML and CSS that it is 
intended to modify*. 


### **Learn About APIs**
* **[What Are API's](/What%20are%20APIs%3F.md)**


### **Browser Security**

Each browser tab has its own separate bucket for running code in (these buckets are called "execution environments" in technical terms) — this means that in most cases the code in each tab is run completely separately, and the code in one tab cannot directly affect the code in another tab — or on another website. This is a good security measure — if this were not the case, then pirates could start writing code to steal information from other websites, and other such bad things.


## JavaScript running order 

When the browser encounters a block of JavaScript code, it runs it in an order of top to bottom. This means that you need to be careful what order you put your code in.

```JAVASCRIPT
const para = document.querySelector("p");

para.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  para.textContent = `Player 1: ${name}`;
}
```

Here we are selecting a text paragraph (line 1), then attaching an event listener to it (line 3) so that when the paragraph is clicked, the `updateName()` code block (lines 5–8) is run. The `updateName()` code block (these types of reusable code blocks are called "functions") asks the user for a new name, and then inserts that name into the paragraph to update the display.

If you swapped the order of the first two lines of code, it would no longer work — instead, you'd get an error returned in the [browser developer console](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) — `TypeError: para is undefined`. This means that the `para` object does not exist yet, so we can't add an event listener to it.






















