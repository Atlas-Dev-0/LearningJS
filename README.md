haahha# What is JavaScript?
***Note Created by Kenneth Gonzales***

**_NOTE_**:  The contents here are available in [MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#javascript_running_order)

### A high-level definition

JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area. 

*  **HTML** is the markup language that we use to structure and give meaning to our web content, for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.

* **CSS** is a language of style rules that we use to apply styling to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns.

* **JavaScript** is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)

### So what can JS really do?

The core client-side JavaScript language consists of some common programming features that allow you to do things like: 

* Store useful values inside variables. 
* Operations on pieces of text (known as "strings" in programming).
* Running code in response to certain events occurring on a web page. For example, a button that when it clicked, it runs a function.

### What is JavaScript doing on your page?

***Let's Recap***

* When you load a web page in your browser, you are running your code *(the HTML, CSS, and JavaScript)* inside an execution environment *(the browser tab)*. This is like a factory that takes in raw materials *(the code)* and outputs a product *(the web page)*.

* A very common use of JavaScript is to dynamically modify HTML and CSS to update a user interface, via the Document Object Model API (as mentioned above). *Note* that the code in your web documents is generally loaded and executed in the order it appears on the page.

**_NOTE:_** *Errors may occur if JavaScript is loaded and run before the HTML and CSS that it is 
intended to modify*. 


### **Learn About APIs**
* **[What Are API's](/WhatAreAPIs.md)**


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


### **Learn About:** 
* **[Interpreted versus compiled code](InterpretedAndCompiledCode.md)**
* **[Server-side versus client-side code](/ServerSideAndClientSide.md)**
* **[Dynamic versus Static Code](/DynamicVersusStaticCode.md)**

# How to add JavaScript to your page?

JavaScript is applied to your HTML page in a similar manner to CSS. Whereas CSS uses [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) elements to apply external stylesheets and [`<style>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) elements to apply internal stylesheets to HTML, JavaScript only needs one friend in the world of HTML — the [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) element. Let's learn how this works.

### Internal JavaScript

**Internal JavaScript** is JavaScript code that is added using `<script>` element inside the html just before the closing `</head>` element.

We'll add some JavaScript inside our [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) element to make the page do something more interesting:

```Html
<head>
	<script>
		document.addEventListener("DOMContentLoaded", () => {
		  function createParagraph() {
		    const para = document.createElement("p");
		    para.textContent = "You clicked the button!";
		    document.body.appendChild(para);
		  }
		
		  const buttons = document.querySelectorAll("button");
		
		  for (const button of buttons) {
		    button.addEventListener("click", createParagraph);
		  }
		});
	</script>
</head>
```

### External JavaScript

**External JavaScript** is JavaScript code that is created in another file that is named "script.js" and is later linked to the main html page using the  ``<script src="script.js" defer></script>`` syntax.

**HTML file:**
```html
<script src="script.js" defer></script>
```

**script.js:**
```javascript
function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```


### Inline JavaScript handlers

Sometimes, I come across bits of actual JavaScript code living inside HTML. 

***For example:***

**JavaScript**
```JS
function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}
```

**HTML**
```HTML
<button onclick="createParagraph()">Click me!</button>
```

The above code will create a button that will append a paragraph to the html page displaying "You clicked the button". See the example -> [here]((https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#inline_javascript_handlers).

**Please don't do this, however.** It is bad practice to pollute your HTML with JavaScript, and it is inefficient — you'd have to include the `onclick="createParagraph()"` attribute on every button you want the JavaScript to apply to.

### Using addEventListener instead

Instead of including JavaScript in your HTML, use a pure JavaScript construct. The `querySelectorAll()` function allows you to select all the buttons on a page. You can then loop through the buttons, assigning a handler for each using `addEventListener()`. The code for this is shown below:

```JS
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

This might be a bit longer than the `onclick` attribute, but it will work for all buttons — no matter how many are on the page, nor how many are added or removed. The JavaScript does not need to be changed.

### Script loading strategies

There are a number of issues involved with getting scripts to load at the right time. Nothing is as simple as it seems! A common problem is that all the HTML on a page is loaded in the order in which it appears. If you are using JavaScript to manipulate elements on the page (or more accurately, the [Document Object Model](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#the_document_object_model)), your code won't work if the JavaScript is loaded and parsed before the HTML you are trying to do something to.

In the above code examples, in the internal and external examples the JavaScript is loaded and run in the head of the document, before the HTML body is parsed. This could cause an error, so we've used some constructs to get around it.

In the internal example, you can see this structure around the code

```js
document.addEventListener("DOMContentLoaded", () => {
  // …
});
```

This is an event listener, which listens for the browser's `DOMContentLoaded` event, which signifies that the HTML body is completely loaded and parsed. The JavaScript inside this block will not run until after that event is fired, therefore the error is avoided (you'll [learn about events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) later in the course).

In the external example, we use a more modern JavaScript feature to solve the problem, the `defer` attribute, which tells the browser to continue downloading the HTML content once the `<script>` tag element has been reached.

#### [What is 'defer' attribute?](/deferAttribute.md)

```HTML
<script src="script.js" defer></script>
```
In this case both the script and the HTML will load simultaneously and the code will work.

An old-fashioned solution to this problem used to be to put your script element right at the bottom of the body (e.g. just before the `</body>` tag), so that it would load after all the HTML has been parsed. *The problem with this solution is that loading/parsing of the script is completely blocked until the HTML DOM has been loaded. On larger sites with lots of JavaScript, this can cause a major performance issue, slowing down your site.*

### `Async` and `Defer`

There are actually two modern features we can use to bypass the problem of the blocking script — `async` and `defer` (which we saw above). Let's look at the difference between these two.

Scripts loaded using the `async` attribute will download the script without blocking the page while the script is being fetched. However, once the download is complete, the script will execute, which blocks the page from rendering. You get no guarantee that scripts will run in any specific order. It is best to use `async` when the scripts in the page run independently from each other and depend on no other script on the page.

#### Example: 

#### Async
When you add the `async` attribute to a `<script>` tag, it tells the browser to continue parsing the HTML document while the script is being fetched in the background. Once the script is downloaded, it will be executed asynchronoulsy, meaning it won't block the rendering of the page.

```HTML 
<!DOCTYPE html>
<html>
<head>
  <title>Async Example</title>
</head>
<body>
  <h1>Hello, world!</h1>
  <script async src="script.js"></script>
</body>
</html>

<!-- In this example, the browser will fetch the script.js file asynchronously while it continues parsing the HTML. Once the script is downloaded, it will be executed independently of the HTML parsing. -->
```
#### Defer
Similar to `async`, the `defer` attribute allows the HTML parsing to continue while the script is being fetched. However, scripts with `defer` attribute will be executed in the order they appear in the HTML, just because the `DOMContentLoaded` event fires. Here's an example.

```HTML
<!DOCTYPE html>
<html>
<head>
  <title>Defer Example</title>
</head>
<body>
  <h1>Hello, world!</h1>

  <script defer src="script1.js"></script>
  <script defer src="script2.js"></script>
</body>
</html>

<!-- In this example, both script1.js and script2.js will be fetched asynchronously, allowing the HTML parsing to proceed. However, they will be executed in the order they appear in the HTML, just before the DOMContentLoaded event fires.

It's worth noting that async and defer are optional attributes, and you can also include scripts without them. In that case, the default behavior is similar to having no attribute at all, and the script will be fetched and executed synchronously, blocking the HTML parsing until it completes.
 -->
```

### **Learn About**:
* [**Choosing the Right Placement for JavaScript](/JsPositioning.md)
* [**JavaScript Cheat Sheet Doc](/JSCheatSheet.md)

