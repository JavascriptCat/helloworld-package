# What is this

This is a basic hello world package. This is the first package I have made on this account. This is just a simple package, and it does not really have any purpose.

-If you download this you're cool 😎😎

# Installation

```sh
npm i helloworld-package --save
```

# Usage

To use this package, you make an html file, and do all the stuff you want to do in that file, but if you want one of your element's text to be "Hello World" just give it an id or class of "hello-world"

```html
<p id="hello-world"></p>
```
In that example we are giving the paragraph element an id of "hello-world."

Next, in your javascript file, use the following. 

```js
const helloWorld = require("helloworld-package");
helloWorld.createHelloWorld();
```
All you have to do now is run your "index.html" file or if you're using Node.js enter this into your terminal.

```sh
cd <path to your main javascript file>
node <main javascript file>
```