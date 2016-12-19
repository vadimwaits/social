$(document).ready(function() {
	//index slider adaptive height

	// var height1 = $('.index-slider>ul>li').find('img').css('height');
	// $(this).css("height",height1);

	//Audio player
	$('.audio').audioPlayer();

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

	//Custom scrollbar
	$(".pp-inner").mCustomScrollbar({
		axis:'y',
		setWidth: 755,
		setHeight: 700,
		theme:"light-3",

	});

	$('.hdr-search').on("click", function(e){
		$('.search-result-wr').addClass('action');
		e.stopPropagation();
	});

	$('.index-slider > ul').bxSlider({
		mode: 'fade',
		adaptiveHeight: true,
		auto: false,
		autoHover: true,
		nextText: '',
		prevText: '',
		// onSliderLoad: function(){
		//    	$('.index-slider ul>li, .index-slider .bx-viewport').css("height",height1);
		// }
	});

	var shopSlider = $('.si-slider > ul').bxSlider({
		auto: false,
		pager: false,
		slideWidth: 525,
		minSlides: 2,
		maxSlides: 2,
		slideMargin: 40,
		moveSlides: 1,
		nextText: '',
		prevText: '',
	});


	$('.it-login').on("click", function(e){
		$(this).toggleClass('action');
		$('.login-popup').toggle();
		e.stopPropagation();
	});

	$(document).click(function(){
	  $(".it-login").removeClass("action");
	  $('.search-result-wr').removeClass('action');
	  $('.login-popup').hide();
	});

	// Prevent events from getting pass .popup
	$(".login-popup").click(function(e){
	  e.stopPropagation();
	});

	$('.slide').on("click", function(e){
		$('.tab-content-inner-wr').addClass('active');
		$('.slide-back').show();
		e.preventDefault();
	});

	$('.slide-back').on("click", function() {
		$('.tab-content-inner-wr').removeClass('active');
		$(this).hide();
	});

	$('.popup-open').on("click", function(){
		$('body').addClass('overflow');
		$('.signup-popup, .overlay').show();
	});

	$('.media-bl').on("click", function(){
		$('body').addClass('overflow');
		$('.media-popup-wr, .overlay').show();
	});

	$('.text-media-bl').on("click", function(){
		$('body').addClass('overflow');		
		$('.text-media-popup, .overlay').show();
	});

	$('.edit-expand').on("click", function(){
		$('body').addClass('overflow');
		$('.cropper-popup-wr, .overlay').show();
	});

	$('.legal-pop').on("click", function(e){
		$('body').addClass('overflow');
		$('.legal-popup, .overlay').show();
		e.preventDefault();
	});

	$('.gallery-wr .gw-item').on("click", function(){
		var src = $(this).find('img').attr('src');
		$('.gallery-popup .gall-pop-pic').find('img').attr("src", src);
		$('body').addClass('overflow');
		$('.gallery-popup, .overlay').show();
	});

	$('.closer').on("click", function(){
		$('body').removeClass('overflow');		
		$('.pop').hide();
	});

    $('.box-drop').on('click', function(e){
        $(this).next('.hdr-pop').addClass('action-show');
        $('.box-drop').not(this).removeClass('');
        e.stopPropagation();
    });

    $('.hdr-pop').on('click', function(e){
    	e.stopPropagation();
    });

    $('.leave-comment').on("click", function(e){
    	$('.leave-comment').removeClass('action');
    	$(this).addClass('action');
    	$('.feed-item').removeClass('action');
    	$(this).closest('.feed-item').addClass('action');
    	e.stopPropagation();
    });

    $('html').on('click', function(){
        $('.hdr-pop').removeClass('action-show');
        $('.feed-item').removeClass('action');
    	$('.leave-comment').removeClass('action');
        $('.share-popup').detach().prependTo('main');
        $('.share-popup').hide();
        $('div.share').removeClass('action');
        $('.main-cont-nav > ul').removeClass('action');
    });

    $('.item-remove').on("click", function(e){
    	$(this).closest('.item').remove();
    	e.preventDefault();
    });

    $('.comment .author').on("click", function(e){
    	$('.comment-popup').detach().prependTo($(this).closest('.comment'));
    	$('.comment-popup').show();
    	e.preventDefault();
    });

	$('.comment-closer').on("click", function(){
		$(this).parent('.comment-popup').detach().prependTo('main');
		$(this).parent('.comment-popup').hide();
	});

    $('div.share').on("click", function(e){
    	$(this).addClass('action');
    	$('.share-popup').detach().prependTo(this);
    	$('.share-popup').show();
    	$('div.share').not(this).removeClass('action');
    	e.stopPropagation();
    });

    $('.activity-bl-wr .activity-switcher a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
 
        $('.activity-bl-wr ' + currentAttrValue).show().siblings().hide();
 
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });

    $('.cont-nav-hidden ul li a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');

        $('.hidden-cont').removeClass('active');
 		$('.hidden-cont' + currentAttrValue).addClass('active');
 
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });

	$('.media-player .next').on("click", function(){
		$(this).removeClass('visible');
		$('.media-player .prev').addClass('visible');
		$('.player-text').addClass('active');
	});

	$('.media-player .prev').on("click", function(){
		$(this).removeClass('visible');
		$('.media-player .next').addClass('visible');
		$('.player-text').removeClass('active');
	});

//content tabs ul into select view
	$('.main-cont-nav > ul').on("click", function(e){
		$(this).toggleClass('action');
		e.stopPropagation();
	});

	$('.main-cont-nav > ul li').on("click", function(){
		$('.main-cont-nav > ul li').removeClass('active');
		$(this).addClass('active');
	});

	$('.main-cont-nav > ul li.active').on("click", function(e){
		e.preventDefault();
	});

//status tabs

	$('.messages-box-wr .tab-link').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.messages-box-wr .tab-link').removeClass('current');
		$('.messages-box-wr .tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

//input grow

	$(".TextareaAutogrow").keyup(function (e) {
	    adaptiveheight(this);
	});
	i=0;
	j=0;
	function adaptiveheight(a) {
	    $(a).height(0);
	    var scrollval = $(a)[0].scrollHeight;
	    $(a).height(scrollval);
	    if (parseInt(a.style.height) > $(window).height()) {
	        if(j==0){
	            max=a.selectionEnd;
	        }
	        j++;
	        var i =a.selectionEnd;
	        console.log(i);
	        if(i >=max){
	            $(document).scrollTop(parseInt(a.style.height));
	        }else{
	            $(document).scrollTop(0);
	        }
	    }
	}

// call function for interactive bg

    $(".bg").interactive_bg({
	   strength: 35,              // Movement Strength when the cursor is moved. The higher, the faster it will reacts to your cursor. The default value is 25.
	   scale: 1,               // The scale in which the background will be zoomed when hovering. Change this to 1 to stop scaling. The default value is 1.05.
	   animationSpeed: "100ms",   // The time it takes for the scale to animate. This accepts CSS3 time function such as "100ms", "2.5s", etc. The default value is "100ms".
	   contain: true,             // This option will prevent the scaled object/background from spilling out of its container. Keep this true for interactive background. Set it to false if you want to make an interactive object instead of a background. The default value is true.
	   wrapContent: false 
    });

    // header messages-popup tabs

	$('.status-tabs-list .status-tab-link').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.status-tabs-list .status-tab-link').removeClass('action');
		$('.status-cont-tab .status-tab').removeClass('action');

		$(this).addClass('action');
		$("#"+tab_id).addClass('action');
	});

	// delete contact from add-contatc block
	$('.add-contact').on('click', '.contact > i', function(e) {
		$(this).parent('.contact').remove();
	});

	// add contact to add-contatc block
	$('.contact-list').on('click', '.cl-item', function(e) {
		var name = $(this).find('.fi-member-name').text();
		$('.add-contact').append('<div class="contact">' + name + '<i></i></div> ');
	});

	// $containerCol4 = $('.grid-col4').masonry({
	// 	  columnWidth: '.col4-grid-sizer',
	// 	  gutter: '.col4-gutter-sizer',
	// 	  isFitWidth: true
	//   });

    $('.cont-nav-hidden ul li a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');

        $('.hidden-cont').removeClass('active');
 		$('.hidden-cont' + currentAttrValue).addClass('active');
 
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });

});

$(window).on("load", function(){
	var $container = $('.grid').imagesLoaded( function() {
		$container.isotope({
			  itemSelector: '.grid-item',
			  percentPosition: true,
			  masonry: {
				  columnWidth: '.grid-sizer',
				  gutter: '.gutter-sizer',
			  }
			});

			// $container.isotope('layout');
		});

	var $containerCol4 = $('.grid-col4').imagesLoaded( function() {
		$containerCol4.isotope({
			  itemSelector: '.col4-grid-item',
			  percentPosition: false,
			  masonry: {
				  columnWidth: '.col4-grid-sizer',
				  gutter: '.col4-gutter-sizer',
				  isFitWidth: true
			  }
			});

			// $containerCol4.isotope('layout');
		});

		$('.cont-nav-hidden li.hidden').on("click", function(e){
			var $containerHidden = $('.container-hidden .grid-col4').imagesLoaded( function() {

				$containerHidden.isotope({
					  itemSelector: '.col4-grid-item',
					  percentPosition: false,
					  masonry: {
						  columnWidth: '.col4-grid-sizer',
						  gutter: '.col4-gutter-sizer',
						  isFitWidth: true
					  }
					});
				});
			e.preventDefault();
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

		
});

$(window).resize(function(){
      $(".bg > .ibg-bg").css({
        width: $(window).outerWidth(),
        height: $(window).outerHeight()
      })
});

	$(window).on("load resize", function(){
		//adaptive slider height on home page
	    var height =  $('.index-slider').height();
	   	$('.index-slider ul>li, .index-slider .bx-viewport').css("height",height);
	});


// 	var $containerCol4 = $('.grid-col4');

// 	$container.imagesLoaded( function() {
// 		$containerCol4.masonry({
// 		  itemSelector: '.col4-grid-item',
// 		  columnWidth: '.col4-grid-sizer',
// 		  gutter: '.col4-gutter-sizer',
// 		  percentPosition: true
// 		});

// 		$container.masonry('layout');
// 	});

// });