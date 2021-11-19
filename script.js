window.onscroll = function showHeader(){
    var header = document.querySelector('.header-top');
    if(window.pageYOffset > 200){
        header.classList.add('header_fixed');
    }else {
        header.classList.remove("header_fixed")
    }
}


const burger = document.querySelector('.header-burger'),
      nav = document.querySelector('.header-ul'),
      links = document.querySelectorAll('.header-ul li')

      function slider(){
          burger.addEventListener('click', () => {
              nav.classList.toggle('nav-active');
              console.log('buerd')
              burger.classList.toggle('toggle');
        
              links.forEach((link, index) => {
                  if(link.style.animation){
                      link.style.animation = "";
                  }else{
                      link.style.animation = `navLinkFade .5s ease forwards ${index/7 + 0.3}s`
                  }
              })

          })

      }

      slider()