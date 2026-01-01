// JS
$(function () {
    "use strict";

    $("a").on("click",function(event){
        if(this.hash !==""){
            event.preventDefault();
            var hash = this.hash;

            $("html,body").animate(
                {
                    scrollTop: $(hash).offset().top - 50,
                },
                850
            );
        }
    });
    $(window).on("scroll",function(){
        var onScroll=$(this).scrollTop();

        if(onScroll>50){
            $(".navbar").addClass("navbar-fixed");
        }else{
            $(".navbar").removeClass("navbar-fixed");
        }

    });
    let filterizr;
    $(".filter-container").imagesLoaded(function () {
       filterizr = $(".filter-container").filterizr();
    });

    // Portfolio menu click
    $(".portfolio-filter-menu li").on("click", function () {
        $(".portfolio-filter-menu li").removeClass("active");
        $(this).addClass("active");
    });
    // Filter portfolio items based on category
    $('.portfolio-filter-menu li').on('click', function() {
        const filterValue = $(this).attr('data-filter');
        if (filterValue === 'all') {
            filterizr.filterizr('filter', filterValue);
        } else {
            filterizr.filterizr('filter', filterValue);
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".completed h4");
    const speed = 500; // lower is faster

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counters.forEach(counter => {
            const updateCount = () => {
              const target = +counter.innerText;
              let count = 0;
              const increment = target / speed;
              const animate = () => {
                if (count < target) {
                  count += increment;
                  counter.innerText = Math.ceil(count);
                  requestAnimationFrame(animate);
                } else {
                  counter.innerText = target;
                }
              };
              animate();
            };
            updateCount();
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.6 });

    observer.observe(document.querySelector(".completed"));
  });