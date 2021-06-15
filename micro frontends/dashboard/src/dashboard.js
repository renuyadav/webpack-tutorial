import NavBar from './components/navigation/navBar';

const url = window.location.pathname;
console.log("url>>" + url);

const navList = 
    [
        {
        url: "/hello-world-page",
        title : "Home"
        },
        {
            url: "/image-page",
            title : "Image Page"
        }
    ];

const navigationBar = new NavBar();
navigationBar.render(navList);


if(url === "/hello-world-page"){
import ('HelloWorldApp/HelloWorldPage').then(helloWorldPageModule =>{
    const  HelloWorldPage = helloWorldPageModule.default;
    const helloPage = new HelloWorldPage();
    helloPage.render();
});
}
if(url === "/image-page"){
import ('imageApp/imagePage').then(imagePageModule =>{
    const ImagePage = imagePageModule.default;
    const imgPage = new ImagePage();
    imgPage.render();
})
}