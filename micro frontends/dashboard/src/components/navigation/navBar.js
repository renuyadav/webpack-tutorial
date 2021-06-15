import './navBar.scss'
class NavBar {

    render(listItems){
        const navListItems = listItems.map(item =>{
            return `<li><a href=${item.url}>${item.title}</a></li>`
        })
        const navList = document.createElement('ul');
        navList.innerHTML = navListItems.join("");
        navList.classList.add('nav');
        const body = document.querySelector('body');
        body.appendChild(navList);
    }
}
export default NavBar;