var home = document.getElementById('home');
var about = document.getElementById('about');
var contact = document.getElementById('contact');
var blog = document.getElementById('blog');
var other = document.getElementById('other');

function myFunction(x) {
    var dropList = document.getElementById('myDropdown');

    x.classList.toggle("change");


    if (x.classList.value == 'container change') {
        dropList.style.visibility = "visible";

    } else if (x.classList.value != 'container change') {
        dropList.style.visibility = "hidden";
    }

}

function homeNav() {
   
    home.style.background = 'rgb(244, 244, 245)';

    about.style.background = 'white';
    contact.style.background = 'white';
    blog.style.background = 'white';
    other.style.background = 'white';

    home.href = "https://google\.com";
    window.open(
        home.href,'_blank'
    );

}

function aboutNav() {
    about.style.background = 'rgb(244, 244, 245)';

    home.style.background = 'white';
    contact.style.background = 'white';
    blog.style.background = 'white';
    other.style.background = 'white';

    about.href = "https://google\.com";
    window.open(
        about.href,'_blank'
    );
}

clickCount = 0;

document.addEventListener("click", function () {
    menubar = document.getElementById('myDropdown');
    ;
    
    
    
    clickCount++;
  
 
    if (clickCount !==1 && menubar.style.visibility === 'visible') {
       
        document.getElementById('hello').click();
      clickCount =3;
    }


    if(clickCount>1){
        clickCount = 0;
    } 
    
})
