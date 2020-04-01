
$(document).ready(function(){
    $('.news-list').owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.slider-left').owlCarousel({
        loop:true,
        nav:false,
        autoplay:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.product-list-home').owlCarousel({
        loop:true,
        nav:true,
        navText: [
            '<i class="fas fa-chevron-left fa-lg"></i>',
            '<i class="fas fa-chevron-right fa-lg"></i>'
        ],
        dots:false,
        // autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:5
            }
        }

    })
    $('.category-list').owlCarousel({
        nav:false,
        dots:false,
        autoWidth:true
    })

    $('.list-brand').owlCarousel({
        loop:true,
        nav:false,
        autoplay:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:10
            }
        }
    })
    $('.article-home').owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        dots:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                navText: [
                    '<i class="fas fa-chevron-left fa-2x"></i>',
                    '<i class="fas fa-chevron-right fa-2x"></i>'
                ],
            },
            768:{
                items:3
            },
            1000:{
                items:4,
                navText: [
                    '<i class="fas fa-caret-left"></i>',
                    '<i class="fas fa-caret-right"></i>'
                ],
            }
        }
    })

    $('.menu-bar').click(function(){
        $('#menuTop').css({"width":"90%"});
        var x = document.getElementById("menuTop");
        if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
          
    })
    $('.fa-chevron-circle-left').click(function(){
        $("#menuTop").toggle();
    });

    $('.rotate').click(function(){
        $('.down').children().toggleClass("rote");
        $(this).next('.level2').slideToggle();
    });     
    $('.down').click(function(){
        $(this).toggleClass("rote");
    });     

    var scrollTrigger = 500, // px
    backToTop = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('.scroll-to-top').show();
      } else {
        $('.scroll-to-top').hide();
      }
    };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('.scroll-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
        scrollTop: 0
        }, 700);
    });

      //sticky
      $('#main').waypoint(
        function(direction){
            if(direction == "down"){
                $('#header').addClass('sticky');
            }else{
                $('#header').removeClass('sticky');
            }
        },{
            offset: '-200px'
        }
    )

    $('#main').waypoint(
        function(direction){
            if(direction == "down"){
                $('.header').addClass('sticky');
            }else{
                $('.header').removeClass('sticky');
            }
        },{
            offset: '-100px'
        }
    )


    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
          $('#logo , .not-pro , #map-header').hide();
          $('.nav-one , #header-top').show();
        } else {
          $('#logo , .not-pro , #map-header' ).show();
          $('.nav-one').hide();
        }
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $("#header-bottom").css({
                'margin': '0px 60px',
                'position':'relative',
                'top':'-55px'
            });
        } else {
            $("#header-bottom").css({
                'margin': 'auto',
                'position':'static'
            });
        }
    });

    $('.list-news-top').owlCarousel({
        loop:true,
        nav:true,
        navText: [
            '<i class="fas fa-chevron-left fa-2x"></i>',
            '<i class="fas fa-chevron-right fa-2x"></i>'
        ],
        dots:false,
        responsive:{
            0:{
                items:2,
                nav:false
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});