//import helloWorld from './hello-world.js';
//import addImage from './add-image';
import Button from './components/button/button';
import Heading from './components/heading/heading';

//helloWorld();
//addImage();
const heading = new Heading("single Page");
heading.render();

const btn = new Button();
btn.render();

if( process.env.NODE_ENV === "production") {
    console.log("productio mode");
}else{
    console.log("development mode");
}

btn.testdoesNotExist();