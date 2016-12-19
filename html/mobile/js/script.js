$(document).ready(function() {
	$('.home-slider > ul').bxSlider({
		mode: 'horizontal',
		controls: false,
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 1,
	});

	$('.shop-slider-wr > ul').bxSlider({
		mode: 'horizontal',
		auto: false,
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 1,
		controls: false,
	});

	// $('.home-slider ul>li, .home-slider .bx-viewport').css("height",height1);

    $('html').on('click', function(){
     //    $('.hdr-pop').removeClass('action-show');
     //    $('.feed-item').removeClass('action');
    	// $('.leave-comment').removeClass('action');
     //    $('.share-popup').detach().prependTo('main');
     //    $('.share-popup').hide();
     //    $('div.share').removeClass('action');
        $('.main-cont-nav > ul').removeClass('action');
        $('.item-select > ul').removeClass('action');
        $('.share-hidden').removeClass('active');
        $('.aside-wr').removeClass('action');
        $('.hdr-toolbar-mobile').removeClass('action');
    });

	$('.share-hidden, .aside-wr, .hdr-toolbar-mobile').on("click", function(e){
		e.stopPropagation(e);
	});

	$('.hdr-nav').on("click", function(e){
		$('.hdr-toolbar-mobile').addClass('action');
		e.stopPropagation(e);
	});

	$('.hdr-toolbar-mobile > .closer').on("click", function(){
		$(this).parent('.hdr-toolbar-mobile').removeClass('action');
	});

    $('.item-remove').on("click", function(e){
    	$(this).closest('.item').remove();
    	e.preventDefault();
    });

    $('.hidden-menu').on("click", function(e){
    	$('.aside-wr').toggleClass('action');
    	e.stopPropagation(e);
    });

//Image cropper
	$('#image').cropper({
	  aspectRatio: 1 / 1,
	  preview: '.crop-preview',
	  toggleDragModeOnDblclick: false,
	  dragMode:'move',
	  viewMode:'2',
	  crop: function(e) {
	    // Output the result data for cropping image.
	    console.log(e.x);
	    console.log(e.y);
	    console.log(e.width);
	    console.log(e.height);
	    console.log(e.rotate);
	    console.log(e.scaleX);
	    console.log(e.scaleY);
	  }
	});

//status tabs

	$('.messages-box-wr .tab-link').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.messages-box-wr .tab-link').removeClass('current');
		$('.messages-box-wr .tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

  	$('.activity-bl-wr .activity-switcher a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
 
        $('.activity-bl-wr ' + currentAttrValue).show().siblings().hide();
 
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });

//content tabs ul into select view
	$('.main-cont-nav > ul').on("click", function(e){
		$(this).toggleClass('action');
		e.stopPropagation(e);
	});

	$('.main-cont-nav > ul li').on("click", function(){
		$('.main-cont-nav > ul li').removeClass('active');
		$(this).addClass('active');
	});

	$('.main-cont-nav > ul li.active').on("click", function(e){
		e.preventDefault();
	});

	$('.activity-switcher > ul').on("click", function(e){
		$(this).toggleClass('action');
		e.stopPropagation(e);
	});

	$('.activity-switcher > ul li').on("click", function(){
		$('.activity-switcher > ul li').not(this).removeClass('active');
		$(this).addClass('active');
	});

	$('.activity-switcher > ul li.active').on("click", function(e){
		e.preventDefault();
	});

	$('.item-select > ul').on("click", function(e){
		$(this).toggleClass('action');
		e.stopPropagation();
	});

	$('.item-select > ul li').on("click", function(){
		$('.item-select > ul li').removeClass('active');
		$(this).addClass('active');
	});

	$('.item-select > ul li.active').on("click", function(e){
		e.preventDefault(e);
	});

	$('.file-btn').on("click", function(){
		$(this).change(function(){
	        var filename = $(this).val();
	        var fileWr = $(this).parent('label').find('.filename-wr');
	        $(fileWr).html(filename);
		});
	});


	$('.media-bl').on("click", function(){
		$('body').addClass('overflow');
		$('.media-popup-wr, .overlay').show();
	});

	$('.text-media-bl').on("click", function(){
		$('body').addClass('overflow');		
		$('.text-media-popup, .overlay').show();
	});

	$('.share').on("click", function(e){
		$(this).closest('.feed-item').find('.share-hidden').toggleClass('active');
		e.stopPropagation();
	});

	$('.closer').on("click", function(){
		$('body').removeClass('overflow');
		$('.pop').hide();
	});

	$('.gallery-wr .gw-item').on("click", function(){
		var src = $(this).find('img').attr('src');
		$('.gallery-popup .gall-pop-pic').find('img').attr("src", src);
		$('body').addClass('overflow');
		$('.gallery-popup, .overlay').show();
	});

	var $containerShop = $('.shop-items-wr').imagesLoaded( function() {
		$containerShop.isotope({
			  itemSelector: '.shop-grid-item',
			  percentPosition: true,
			  masonry: {
				  columnWidth: '.shop-grid-sizer',
				  gutter: '.shop-grid-gutter-sizer',
			  }
			});

			// $container.isotope('layout');
		});



//content with scrollable top
	// var topOffset = $('body').offset().top;

	// $('body').on({
	//     "touchstart": function(e) {
	//     				var topOffset = $('body').scrollTop();
	// 		var firstSlideH = $('.section-scroll').height();

	//         if ( topOffset > firstSlideH ) {
	// 			console.log('do nothing');
	// 			$('header').removeClass('underlayed');
	// 		}

	//         if ( topOffset <= firstSlideH ) {
	// 			console.log('scroll to top');
	// 			$('header').addClass('underlayed');
	// 		}
	//     }
	// });

// var glOffset = null;

// 	$('body').on({

// 	    "touchend": function(e) { 
// 			var topOffset = $('body').scrollTop();
// 			var firstSlideH = $('.section-scroll').height();

// 			var move = 0;

// 			console.log('end');

// 			if (glOffset > topOffset) {
// 				move = -1;
// 			} else {
// 				move = 1;
// 			}

// 			console.log(topOffset, move);

// 	        if ( topOffset > firstSlideH ) {
// 				console.log('content');
// 				// $('header').removeClass('underlayed');
// 				$(document).scrollTop(firstSlideH);
// 			}

// 	        if ( topOffset < firstSlideH ) {
// 				console.log('top');
// 				// $('header').addClass('underlayed');
// 				  // var x = jQuery(this).offset().top;
//    			// 	  $('html,body').animate({scrollTop: x}, 500);
//    				// $(document).scrollTop("#top");
   				
// 			}
// 			if ( topOffset <= firstSlideH ) {
// 				console.log('top');
// 				  // var x = jQuery(this).offset().top;
//    			// 	  $('html,body').animate({scrollTop: x}, 500);
//    				$(document).scrollTop(0);
// 			}
// 	    },

// 	    "touchstart": function(e) { 
// 			glOffset = $('body').scrollTop();
// 			console.log('start');
// 	    }
// 	});


});