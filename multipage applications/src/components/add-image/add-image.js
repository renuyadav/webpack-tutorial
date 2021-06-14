import Flower from './flower.jpg';
import altText from './altText.txt';
import './add-image.scss';

function addImage(){
    const img = document.createElement('img');
    img.width = 300;
    img.alt = altText;
    img.src= Flower;
    img.classList.add("add-img");
    const body = document.querySelector('body');
    body.appendChild(img);
}
export default addImage;