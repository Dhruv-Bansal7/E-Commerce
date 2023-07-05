// copy menu for mobile
function copyMenu() {
    //copy  inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    //copy inside nav to nav
    let mainNav = document.querySelector('.header-nav nav');
    let navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    //copy .header-top .wrapper to .thetop-nav
    let topNav = document.querySelector('.header-top .wrapper');
    let topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

//show mobile menu 
const menuButton = document.querySelector('.trigger'),
       closeButton = document.querySelector('.t-close'),
       addclass = document.querySelector('.site');
menuButton.addEventListener('click', function() {
    addclass.classList.toggle('showmenu')
})       
closeButton.addEventListener('click' ,  function() {
    addclass.classList.remove('showmenu')
})

// show submenu on mobile 
const submenu = document.querySelector('.header-main .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if(this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')
}



// var dropdown = document.getElementsByClassName(".icon-small");
// var i;
// var women = document.querySelector('.has-child ul');
// var show = document.querySelector('.has-child mega');

// for (i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var dropdownContent = this.show;
//     var drop = this.women
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//     if (drop.style.display === "block") {
//       dropdownContent.style.display = "none";
//     } else {
//       drop.style.display = "block";
//     }
//   });
// }




// slider
const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
        nextEL: '.swiper-button-next',
        prevEL: '.swiper-button-next',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
  });


//   show search 
const searchButton = document.querySelector('.t-search'),
      tClose = document.querySelector('.search-close'),
      showClass = document.querySelector('.site .search-bar');
searchButton.addEventListener('click',function() {
    showClass.classList.toggle('showsearch');
})      
tClose.addEventListener('click', function() {
    showClass.classList.remove('showsearch');
})

//show dpt menu
const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
      dptClass = document.querySelector('.site');
dptButton.addEventListener('click', function() {
    dptClass.classList.toggle('showdpt')
})














