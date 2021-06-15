import './button.scss';
class Button {
  //  btnClass = 'btn';
    render(){
        const btn = document.createElement('button');
        btn.innerHTML = "Click Me";
        btn.classList.add('btn');
        const body = document.querySelector('body');
        btn.onclick = function() {
            const paragraph = document.createElement('p');
            paragraph.innerHTML = "btn is clicked";
            paragraph.classList.add('txt'); 
            body.appendChild(paragraph);
        }
        
        body.appendChild(btn);
    }
}

export default Button;