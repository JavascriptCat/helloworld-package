function helloWorld() {
    console.log('helloworld-package version 1.0.0');
    console.log('All elements with a class/id named \"hello-world\" now have the text: \"Hello World\"'); 
    let hwIdElement = document.querySelectorAll('#hello-world');
    let hwClassElement = document.querySelectorAll('.hello-world');

    if (hwClassElement.innerHTML || hwIdElement.innerHTML) {
        hwClassElement.innerHTML = "Hello world.";
        hwIdElement.innerHTML = "Hello world."
    } else {
        console.log('1 or more of your elements do not have the \"innerHTML\" property.');
    }
}
module.exports.createHelloWorld = helloWorld;