//import helloWorld from './hello-world.js';
//import addImage from './add-image';
import Button from './components/button/button';
import Heading from './components/heading/heading';
import _ from 'lodash';

//helloWorld();
//addImage();
const heading = new Heading();
heading.render(_.upperFirst("hello world"));

const btn = new Button();
btn.render();

if( process.env.NODE_ENV === "production") {
    console.log("productio mode");
}else{
    console.log("development mode");
}

btn.testdoesNotExist();