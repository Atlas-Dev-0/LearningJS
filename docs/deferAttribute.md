## HTML defer Attribute

### Definition and Usage

The `defer` attribute is a boolean attribute.

When present, it specifies that the script is executed when the page has finished parsing.

**Note:** The `defer` attribute is only for external scripts (should only be used if the `src` attribute is present).

**Note:** There are several ways an external script can be executed:

* If `async` is present: The script is executed asynchronously with the rest of the page (the script will be executed while the page continues the parsing)
* If `async` is not present and `defer` is present: The script is executed when the page has finished parsing
- If neither `async` or `defer` is present: The script is fetched and executed immediately, before the browser continues parsing the page

#### Example: 
```html
<script src="demo_defer.js" defer></script>
```


