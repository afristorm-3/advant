var touch = false, clickEv = 'click';

/*Slider main*/
function slider_main(){
  "use strict";

  $('.carousel').carousel({
    interval: false, 
     pause: false  
  })
}

/* slider product*/
function slider_product(){
  "use strict";

  /* Home1 */
  
  /* Slider Thumb */
  if($(".slider-3itemsc").length){
    $(".slider-3itemsc").owlCarousel({
      navigation : true,
      pagination: false,
      autoPlay: false,
      items: 3,
      slideSpeed : 200,
      paginationSpeed : 800,
      rewindSpeed : 1000,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      itemsTablet: [768,3],
      itemsTabletSmall: [540,3],
      itemsMobile : [360,3],
      navigationText: ['<i class="fa fa-angle-left" title="Previous" data-toggle="tooltip" data-placement="top"></i>', '<i class="fa fa-angle-right" title="Next" data-toggle="tooltip" data-placement="top"></i>']
    });
  }
  /* Slider Relatedpro */
  if($(".related-products .rp-slider").length){
    $(".related-products .rp-slider").owlCarousel({
      navigation : true,
      pagination: false,
      items: 4,
      slideSpeed : 200,
      paginationSpeed : 800,
      rewindSpeed : 1000,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [991,3],
      itemsTablet: [767,2],
      itemsTabletSmall: [540,2],
      itemsMobile : [480,1],
      navigationText: ['<i class="fa fa-angle-left" title="Previous" data-toggle="tooltip" data-placement="top"></i>', '<i class="fa fa-angle-right" title="Next" data-toggle="tooltip" data-placement="top"></i>']
    });
  }
  
  $("#gallery_main_qs .qs-vertical-slider").owlCarousel({
    navigation : true,
    pagination: false,
    items: 3,
    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,2],
    itemsTablet: [768,2],
    itemsTabletSmall: [540,1],
    itemsMobile : [360,1],
    navigationText: ['<i class="fa fa-angle-left" title="Previous" data-toggle="tooltip" data-placement="top"></i>', '<i class="fa fa-angle-right" title="Next" data-toggle="tooltip" data-placement="top"></i>']
  });

  if($(".home_latestproducts_content").length){
    $(".home_latestproducts_content").owlCarousel({
      navigation : true,
      pagination: false,
      autoPlay: false,
      items: 4,
      slideSpeed : 200,
      paginationSpeed : 800,
      rewindSpeed : 1000,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [991,2],
      itemsTablet: [767,2],
      itemsTabletSmall: [540,1],
      itemsMobile : [360,1],
      navigationText: ['<i class="fa fa-angle-left" title="Previous" data-toggle="tooltip" data-placement="top"></i>', '<i class="fa fa-angle-right" title="Next" data-toggle="tooltip" data-placement="top"></i>']
    });
  }


  if($("#home3_partner_content").length){
    $("#home3_partner_content").owlCarousel({
      navigation : true,
      pagination: false,
      autoPlay: true,
      items: 6,
      slideSpeed : 200,
      paginationSpeed : 800,
      rewindSpeed : 1000,
      itemsDesktop : [1199,6],
      itemsDesktopSmall : [979,5],
      itemsTablet: [768,4],
      itemsTabletSmall: [540,3],
      itemsMobile : [360,2],
      navigationText: ['<i class="fa fa-angle-left" title="Previous" data-toggle="tooltip" data-placement="top"></i>', '<i class="fa fa-angle-right" title="Next" data-toggle="tooltip" data-placement="top"></i>']
    });
  }
  
}

/* Handle dropdown box */
function handleDropdown(){
  "use strict";
  if($('.dropdown-toggle').length){
    $('.dropdown-toggle').parent().hover(function (){
      if(touch == false && getWidthBrowser() > 767 ){
        $(this).find('.dropdown-menu').stop(true, true).slideDown(300);
      }
    }, function (){
      if(touch == false && getWidthBrowser() > 767 ){
        $(this).find('.dropdown-menu').hide();
      }
    });
  }
  
  $('nav .dropdown-menu').each(function(){
    $(this).find('li').last().addClass('last');
  });
  
      
  $('.dropdown').on('click', function() {
      if(touch == false && getWidthBrowser() > 767 ){
        var href = $(this).find('.dropdown-link').attr('href');
        window.location = href;
      }
  });
  
  $('.cart-link').on('click', function() {
    if(touch == false && getWidthBrowser() > 767 ){
      var href = $(this).find('.dropdown-link').attr('href');
      window.location = href;
    }
  });
  
}

/* Fucntion get width browser */
function getWidthBrowser() {
  "use strict";
	var myWidth;

	if( typeof( window.innerWidth ) == 'number' ) { 
		//Non-IE 
		myWidth = window.innerWidth;
		//myHeight = window.innerHeight; 
	} 
	else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) { 
		//IE 6+ in 'standards compliant mode' 
		myWidth = document.documentElement.clientWidth; 
		//myHeight = document.documentElement.clientHeight; 
	} 
	else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) { 
		//IE 4 compatible 
		myWidth = document.body.clientWidth; 
		//myHeight = document.body.clientHeight; 
	}
	
	return myWidth;
}

// handle scroll-to-top button
function handleScrollTop() {
  "use strict";
  function totop_button(a) {
    var b = $("#scroll-to-top"),
        f = $(".cart-float-right");

    if (a == "on") { 
      f.addClass("on fadeInRight ").removeClass("off fadeOutRight");
      b.addClass("on fadeInRight ").removeClass("off fadeOutRight"); 
    } else {
      f.addClass("off fadeOutRight animated").removeClass("on fadeInRight");
      b.addClass("off fadeOutRight animated").removeClass("on fadeInRight"); 
    }
  }
  $(window).scroll(function() {
    var b = $(this).scrollTop();
    var c = $(this).height();
    if (b > 0) { 
      var d = b + c / 2;
    } 
    else { 
      var d = 1 ;
    }    
    if (d < 1e3 && d < c) { 
      totop_button("off");
    } 
    else {
      totop_button("on"); 
    }
  });  
  $("#scroll-to-top").click(function (e) {
    e.preventDefault();
    $('body,html').animate({scrollTop:0},800,'swing');
  });
}   

//newsletter popup
function ModalNewsletter(){
  "use strict";
  $('#newsletter-popup').modal('toggle');
  $('.nl-wraper-popup').addClass('animated'); 
  var tnout = 20 ;
  setTimeout (function() { 
  $('#newsletter-popup').modal('hide');
  }, tnout*1000 );
}
      
function checkcookie(){
  "use strict";
    $.cookie('mello-cookie', 'deactive', { expires: 10});
}

/* Handle product quantity */
function handleQuantity(){
  "use strict";
  if($('.quantity-wrapper').length){
    $('.quantity-wrapper').on(clickEv, '.qty-up', function() {
      var $this = $(this);

      var qty = $this.data('src');
      $(qty).val(parseInt($(qty).val()) + 1);
    });
    $('.quantity-wrapper').on(clickEv, '.qty-down', function() {
      var $this = $(this);
      var qty = $this.data('src');

      if(parseInt($(qty).val()) > 1)
        $(qty).val(parseInt($(qty).val()) - 1);
    });
  }
}
function colorwarches(){
  "use strict";
   jQuery('.swatch :radio').change(function() {
     var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
     var optionValue = jQuery(this).val();
     jQuery(this)
       .closest('form')
       .find('.single-option-selector')
       .eq(optionIndex)
       .val(optionValue)
       .trigger('change');
   }); 
}

/* Handle Grid - List */
function handleGridList(){
  "use strict";
  if($('#goList').length){
    $('#goList').on(clickEv, function(e){
      $(this).parent().find('li').removeClass('active');
      $(this).addClass('active');
      $('.collection-items').addClass('full_width ListMode');
      $('.collection-items').removeClass('no_full_width GridMode');
      $('.collection-items .row-left').addClass('col-md-5');
      $('.collection-items .row-right').addClass('col-md-7');
      $('.collection-items .product-item').removeClass('col-sm-3 col-sm-4');
      $('.grid-mode').addClass("hide");
      $('.list-mode').removeClass("hide");
    });
  }
  
  if($('#goGrid').length){
    $('#goGrid').on(clickEv, function(e){
      $(this).parent().find('li').removeClass('active');
      $(this).addClass('active');
      $('.collection-items').removeClass('full_width ListMode');
      $('.collection-items').addClass('no_full_width GridMode');
      $('.collection-items .row-left').removeClass('col-md-5');
      $('.collection-items .row-right').removeClass('col-md-7');
      
        $('.collection-items .product-item').addClass('col-sm-4');
      
      $('.grid-mode').removeClass("hide");
      $('.list-mode').addClass("hide");
    });
  }
}

function toggleTagsFilter(){ 
  "use strict";

  if(window.innerWidth >= 768 ){
    var tagsbutton = document.getElementById( 'showTagsFilter' ),    
        tagscontent = document.getElementById( 'tags-filter-content' );    
    if(tagsbutton != null ){
      tagsbutton.onclick = function() {
        classie.toggle( this, 'closed' );
        classie.toggle( tagscontent, 'tags-closed' );
        if(classie.has( this, 'closed' ))
          $('#showTagsFilter').html("Filter <i class='fa fa-angle-down'></i>");
        else $('#showTagsFilter').html("Filter <i class='fa fa-angle-up'></i>");
      };
    }
  }
}

/* Handle Map with GMap */
function handleMap(){
  "use strict";
  if(jQuery().gMap){
    if($('#contact_map').length){
      $('#contact_map').gMap({
        zoom: 17,
        scrollwheel: false,
        maptype: 'ROADMAP',
        markers:[
          {
            address: '474 Ontario St Toronto, ON M4X 1M7 Canada',
            html: '_address'
          }
        ]
      });
    }
  }
}

function toggleLeftMenu(){
  "use strict";

  if(window.innerWidth <= 767 ){
    $('#showLeftPush').click(function(){
      if($('.mobile-navigation').hasClass('active')){
        $('.mobile-navigation').removeClass('active');
      }
      else{
        $('.mobile-navigation').addClass('active');
      }
    });
  }
};

/* Function update scroll product thumbs */
function updateScrollThumbsQS(){
  "use strict";
  if($('#gallery_main_qs').length){
    
    $('#quick-shop-image .fancybox').on(clickEv, function() {

      var _items = [];
      var _index = 0;
      var product_images = $('#gallery_main_qs .image-thumb');
      product_images.each(function(key, val) {
        _items.push({'href' : val.href, 'title' : val.title});
        if($(this).hasClass('active')){
          _index = key;
        }
      });
      $.fancybox(_items,{
        closeBtn: true,
        index: _index,
        helpers: {
          buttons: {}
        }
      });
      return false;
    });

    $('#quick-shop-image').on(clickEv, '.image-thumb', function() {
      var $this = $(this);
      var background = $('.product-image .main-image .main-image-bg');
      var parent = $this.parents('.product-image-wrapper');
      var src_original = $this.attr('data-image-zoom');
      var src_display = $this.attr('data-image');
      
      background.show();
      
      parent.find('.image-thumb').removeClass('active');
      $this.addClass('active');
      
      parent.find('.main-image').find('img').attr('data-zoom-image', src_original);
      parent.find('.main-image').find('img').attr('src', src_display).load(function() {
        background.hide();
      });
      
      return false;
    });
  }
}

function showMenuMobile(){
  "use strict";
  
  $('.navigation_mobile .arrow').click(function(){
    if($(this).attr('class')=='arrow class_test'){
      $('.navigation_mobile .arrow').removeClass('class_test');
      $('.navigation_mobile').removeClass('active');
      $('.navigation_mobile').find('.menu-mobile-container').hide("slow");
    }
    else{
      $('.navigation_mobile .arrow').removeClass('class_test');
      $(this).addClass('class_test');
      $('.navigation_mobile').each(function(){
        if($(this).find('.arrow').attr('class')=='arrow class_test'){
          $(this).find('.menu-mobile-container').show( "slow" );
          $(this).addClass('active');
        }
        else{
          $(this).find('.menu-mobile-container').hide("slow");
          $(this).removeClass('active');
        }
      });
    }
  });
  
}

$( window ).resize(function() {

  toggleLeftMenu();


});
      
$(window).ready(function($) {
  
  slider_main();
  
  slider_product();
  
  handleDropdown();
  
  handleScrollTop();
  
  colorwarches();
  
  $('[data-toggle="tooltip"]').tooltip();
  
  handleQuantity();
  
  handleGridList();
  
  toggleTagsFilter();
  
  handleMap();
  
  toggleLeftMenu();

  showMenuMobile();
  
  updateScrollThumbsQS();
});
     
      
$(window).load(function() { 
  ModalNewsletter();
  $.cookie('mello-cookie', 'active', { expires: 10});
  
});