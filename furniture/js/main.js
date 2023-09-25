$(document).ready(function(){
    const swiper = new Swiper('.visual', {

        loop: true, //무한반복
        effect: "fade", //fade 효과로 팝업 넘김 (지우면 좌우 슬라이드)
        
        autoplay: { //자동실행
            delay: 3000, //하나의 팝업이 머무는 시간
            disableOnInteraction: false,
        },

        // 팝업의 갯수 표시와 현재 팝업순서 
        pagination: {
          el: '.ctrl_paging',
          //clickable: true, //팝업 순서 표시 클릭
          type: "fraction", //숫자로 팝업 수 표시
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.ctrl_next',
          prevEl: '.ctrl_prev',
        },
    });
    const swiper_banner = new Swiper('.banner', { 
      slidesPerView: 1, 
      spaceBetween: 16, 
      breakpoints: {
          640: {    
              slidesPerView: 2,
              spaceBetween: 16,
          },
          800: {    
              slidesPerView: 3,
              spaceBetween: 20,
          },
          1000: {    
              slidesPerView: 4,
              spaceBetween: 20,
          },
          1240: {    
            slidesPerView: 4,
            spaceBetween: 30,
        },
      },
    });

});