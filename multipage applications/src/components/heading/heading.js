import './heading.css';
class Heading {
    render(pageName){
        const heading = document.createElement('h1');
        heading.innerHTML = `I am learning Webpack, it's awesome!!! ${pageName}`;
        heading.classList.add('heading');
        const body = document.querySelector('body');                
        body.appendChild(heading);
    }
}

export default Heading;