(function(root, $, undefined) {
  "use strict";
  jQuery(function() {
    // DOM ready, take it away
    console.log("loaded 11");
  
    var defaultSliderOptions = {
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      lazyLoad: "ondemand",
      autoplay: true,
      autoplaySpeed: 5000,
      centerMode: false,
      arrows: false,
    };
  
    function slickInit(el, options) {
      console.log("el s", el);
      el.not('.slick-initialized').slick(options).on("setPosition", function(event, slick) {
        slick.$slides.css("height", slick.$slideTrack.height() + "px");
      });
    }
  
    var max768 = window.matchMedia("(max-width: 700px)");
  
    function resize() {
  
    }
  
    if ($(".vl-slider").length > 0) {
  
  
      $.each($(".vl-slider"), function(index, slider) {
  
  
        var theSlider = $(slider).find(".vc_column-inner > .wpb_wrapper");
        var options = Object.assign({
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: true
              }
            }]
        }, defaultSliderOptions);
  
        // var options = {
        // 	infinite: true,
        // 	slidesToScroll: 1,
        // 	slidesToShow: 1,
        // 	lazyLoad: "ondemand",
        // 	autoplay: true,
        // 	autoplaySpeed: 5000,
        // 	centerMode: false,
        // 	arrows: false,
        // 	responsive: [
        // 		{
        // 			breakpoint: 768,
        // 			settings: {
        // 				arrows: true
        // 			}
        // 		}]
        // }
  
        if ($(slider).hasClass("vl-dots")) {
          options.dots = true;
        }
  
        if ($(slider).hasClass("vl-arrows")) {
          options.arrows = true;
        }
  
        if ($(slider).hasClass("vl-sync-with-vl-a")) {
          options.asNavFor = '.vl-a .slick-slider';
        }
  
        if ($(slider).hasClass("vl-sync-with-vl-b")) {
          options.asNavFor = '.vl-b .slick-slider';
        }
  
        if ($(slider).hasClass("vl-sync-with-link-vl-1")) {
          $(`.link-vl-1 p:nth-of-type(1) a`).addClass("active");
          theSlider.on("beforeChange", function(
            event,
            slick,
            currentSlide,
            nextSlide
          ) {
            // then let's do this before changing slides
            // let index = nextSlide != 0 ? nextSlide :
  
            // console.log("nextSlide", nextSlide);
            $(`.link-vl-1 a`).removeClass("active");
            $(`.link-vl-1 p:nth-of-type(${nextSlide + 1}) a`
            // $(`.link-vl-1 .wpb_text_column:nth-of-type(${nextSlide + 1}) a`
            ).addClass("active");
          });
        }
  
        // console.log("options", options);
        slickInit($(theSlider), options);
  
  
      })
    }
  
    if ($(".link-vl-1").length > 0) {
  
      if (max768.matches) {
  
        // $.each($(".link-vl-1 a"), function(index, elem) {
        // 	var highlightSlider = $(elem).find(".vc_column-inner > .wpb_wrapper");
        // 	var options = Object.assign({}, defaultSliderOptions);
        // 	slickInit($(highlightSlider), options);
        // })
  
        //trying out styling
  
  
      } else {
        $.each($(".link-vl-1 a"), function(index, elem) {
          $(elem).attr("index", index)
        })
        setTimeout(function() {
          $(".link-vl-1 a").unbind('click').bind('click', function(e) {
            e.preventDefault();
            $(`.link-vl-1 a`).removeClass("active");
            var $el = $(e.currentTarget);
            var index = $el.attr("index");
            var sliderToMove = $(".vl-sync-with-link-vl-1.vl-slider");
            $el.addClass("active");
  
  
            sliderToMove.find(".vc_column-inner > .wpb_wrapper").slick(
              "slickGoTo",
              parseInt(index)
            );
          })
        }, 10)
      }
    }
  
    function toggleBelgium() {
      console.log("toggleBelgium");
      jQuery(".portugal").fadeOut(400, 'swing', jQuery(".belgium").fadeIn())
      jQuery(".btnBelgium").addClass('active');
      jQuery(".btnPortugal").removeClass('active');
    }
  
    function togglePortugal() {
      console.log("togglePortugal");
      jQuery(".belgium").fadeOut(400, 'swing', jQuery(".portugal").fadeIn())
      jQuery(".btnBelgium").removeClass('active');
      jQuery(".btnPortugal").addClass('active');
    }
  
    if (jQuery(".belgium").length > 1) {
      console.log("bb");
      jQuery('*').removeClass("tm-animation");
  
      jQuery(".btnBelgium").click(toggleBelgium);
      jQuery(".btnPortugal").click(togglePortugal);
      toggleBelgium();
    }
  
    // $(window).resize(function() {
    // 	$.each($(".vl-slider"), function(index, slider) {
    // 		$(slider).height($(slider).width() * 56.25 %);
    // 		console.log('$(slider).width() * 56.25 % +"px"', $(slider).width() * 56.25 % +"px");
    // 	})
    // });
  
    // $(window).resize(function() {
  
    // });
  
  
  
    //// Larissa adds scripts here
    const accordions = document.querySelectorAll('.accordion-digital-marketing h6')
  
  
    function getElements() {
  
      let i = 0;
      for (i = 0; i < accordions.length; i++) {
        let node = accordions[i];
        let string = accordions[i].textContent;
  
        let arr = string.split(' ');
        let acronym = arr[0];
        arr = arr.slice(1);
        arr = arr.join(' ');
  
        if (acronym.length != 1) {
          node.innerHTML = ('<span class="accordion-item">' + acronym + ' </span>' + arr + '<span class="accordion-icon"></span>');
          const spanItem = document.querySelectorAll(".accordion-item")
  
          spanItem.forEach(element => {
            element.style.fontWeight = "900";
            element.style.marginRight = "100px";
            element.style.fontSize = "2rem";
          })
  
        }
  
      }
    }
  
    getElements();
  
  
    let testimonialItem = document.querySelectorAll(".testimonial-item");
    let testimonialName = document.querySelectorAll(".tm-testimonial.style-carousel .testimonial-name");
    let mainCoursesTitle = document.querySelectorAll(".available-courses-main-title");
    let secondaryCoursesTitle = document.querySelectorAll(".available-courses-secondary-title");
  
  
    let orange = {
      boxShadow: "0 25px 60px 0 rgba(236, 113, 75, 0.97)",
      color: "rgba(236, 113, 75, 0.97)"
    }
  
    let pink = {
      boxShadow: "0 25px 60px 0 #db4bec",
      color: "#db4bec"
    }
  
    let blue = {
      boxShadow: "0 25px 60px 0 #4060e1",
      color: "#4060e1"
    }
  
    let green = {
      boxShadow: "0 25px 60px 0 #4becac",
      color: "#4becac"
    }
  
    let cyan = {
      boxShadow: "0 25px 60px 0 #35ffff",
      color: "#35ffff"
    }
  
    if(testimonialItem && testimonialName){
      testimonialItem[0].style.boxShadow = orange.boxShadow;
      testimonialItem[1].style.boxShadow = pink.boxShadow;
      testimonialItem[2].style.boxShadow = blue.boxShadow;
      testimonialItem[3].style.boxShadow = green.boxShadow;
      
      testimonialName[0].style.color = orange.color;
      testimonialName[1].style.color = pink.color;
      testimonialName[2].style.color = blue.color;
      testimonialName[3].style.color = green.color;	
    } else {
    console.log('oi');
    }
  
  
    
    if(mainCoursesTitle){
      mainCoursesTitle[0].style.color = orange.color;
      //mainCoursesTitle[1].style.color = pink.color;
      //mainCoursesTitle[2].style.color = blue.color;		
      //mainCoursesTitle[3].style.color = green.color;				
      //mainCoursesTitle[4].style.color = cyan.color;//
    } else {
  console.log('não deu');}
      
    
  
    
    
  
  })(undefined, jQuery);