
# Web browser

A web browser (usually referred to as browser) is a program capable of downloading websites from specific addresses and displaying them to users.

A modern web browsers is, essentially, made of:

* A GUI consisting of an address bar and a page viewport
* An HTTP client
* An HTML+CSS+JavaScript interpreter

## Browsing cycle

A normal browser algorithm goes like this:

1. A user enters an address in the address bar (the user knows beforehand that this address points to a functioning web server)
2. Using the HTTP protocol, the browser connects to the server pointed by that address and the server sends back an HTML page (it's assumed it has one)
3. The browser parses the HTML and creates the HTML nodes tree
4. If one of the nodes "wants" to download an external resource, do it
5. Draw the HTML (styled with any CSS code present in the page) in the page viewport
6. Execute any JavaScript code in the page.
