// function navbar() {
//     document.addEventListener("DOMContentLoaded", function () {
//         const hamIcon = document.querySelector(".ham");
//         const navList = document.querySelector(".nav-list");
      
//         hamIcon.addEventListener("click", function () {
//           navList.classList.toggle("show");
//           hamIcon.classList.toggle("cross");
//         });
      
//         // Close the navigation bar when a link is clicked
//         navList.addEventListener("click", function () {
//           navList.classList.remove("show");
//           hamIcon.classList.remove("cross");
//         });
//       });
      
// }
// navbar();

function counter(){
    $(document).ready(function () {
        // Function to increment and animate counters on scroll
        function animateCounterOnScroll(counterId, maxValue) {
            let counter = 0;
            let animated = false;
            $(window).scroll(function () {
                const scrollPosition = $(this).scrollTop();
                const elementOffset = $(counterId).offset().top - $(window).height() + 100;
    
                if (scrollPosition > elementOffset && !animated) {
                    animated = true;
    
                    $({ count: 0 }).animate({ count: maxValue }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $(counterId + ' .count').text(Math.floor(this.count));
                        },
                        complete: function () {
                            $(counterId + ' .count').text(maxValue);
                        }
                    });
    
                    // Add the animation class to trigger CSS animation
                    $(counterId).addClass('animated fadeInUp');
                }
            });
        }
    
        // Call the function for each counter
        animateCounterOnScroll('#facultyCounter', 45);
        animateCounterOnScroll('#researchCounter', 40);
        animateCounterOnScroll('#doctoratesCounter', 10);
    });
    
}
counter();

function swiper() {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 5,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}

swiper();


function secure() {
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        alert("Right-clicking is disabled.");
      });
      
      document.addEventListener("keydown", function (e) {
        if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I") || (e.ctrlKey && e.key === "U") || (e.ctrlKey && e.key === "u")) {
          e.preventDefault();
          alert("Access to view page source or inspect element is disabled.");
        }
      });
      
      
}

secure();