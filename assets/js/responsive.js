// header
var header = document.getElementById('header');
var menu_mobile = document.querySelector('.btn_menu_mobile');
var header_height = header.clientHeight;

// close or open mobile menu
menu_mobile.onclick = function(){
    if(header.clientHeight === header_height){
        header.style.height = 'auto';
    }
    else{
        header.style.height = '4.5rem';
    }
}

// auto close mobile menu
var menuItems = document.querySelectorAll('.navigation li a[href*="#"]');
for(var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i];
    
    menuItem.onclick = function(event) {
        var parentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('sub_nav');
        console.log(parentMenu)
        if(parentMenu){
            event.preventDefault();
        }
        else{
            header.style.height = '4.5rem';
        }
    }
}