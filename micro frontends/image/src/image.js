import Heading from './components/heading/heading';
import addImage from './components/add-image/add-image';
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst("image component"));

addImage();
//image.render();

if( process.env.NODE_ENV === "production") {
    console.log("productio mode");
}else{
    console.log("development mode");
}

