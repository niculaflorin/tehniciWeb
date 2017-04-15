$(document).ready(function(){
	var timer =null;

	$(".item").on({
		mouseenter: function(e){
			$(this).children(".hover-box").stop().animate({
				height: "85px",
				overflow: "visible"
			},700);

			$(this).children(".col-content").stop().animate({
				padding: "10px",
				fontSize: "30px"
			});
		},
		mouseleave: function(e) {
			$(this).children(".hover-box").stop().animate({
				height: "0px",
				overflow: "hidden"
			},700);

			$(this).children(".col-content").stop().animate({
				padding: "40px",
				fontSize: "50px"
			});
		},
		click: function(){
			var width = 917;
			var speed = 100;
			var speedNext = 3000;
			var pause = 5000;
			var slideCurent = 1;
			var slideNo = 4;
			var description = $(this).data('description');
			var imgUrl = $(this).data('img');
			var imgUrl1 = $(this).data('img1');
			var count = $(this).data('count');
			console.log(count);
			$('#modal-description').html(description);
			$('.bg-app').animate({'height' : 600},200);
			$('ul.slides li').each(function(index){
				$('.pag').append('<div class="slide-count" data-count="'+ (index)+'"></div>')
			});
			$(".detail-box").fadeIn();
			timer = $(".slides").animate({'margin-left': 0}, 100);
					

			var timer = setInterval(function(){
	            $(".slides").animate({'margin-left': '-='+width}, speed, function() {	            	
	                if (++slideCurent === slideNo) {
	                    slideCurent = 1;
	                    $(".slides").animate({'margin-left': 0}, 100);
	                }
	            });
			},pause);

			$(".next").click(function(){
				if (++slideCurent === slideNo) {
	                    slideCurent = 1;
	                    $(".slides").animate({'margin-left': 0}, 100);
	            } else {   
					$(".slides").animate({'margin-left': '-='+width}, 100);
				}
	            clearInterval(timer);
	            timer = false;
	            $(".slide-count").css('background-color', '#8c8c8c');
				console.log(slideCurent);		
				$("[data-count="+(slideCurent-1)+"]").css('background-color', '#6ddfff');
			});

			$(".prev").click(function(){
				if(--slideCurent == 0){
					slideCurent = slideNo-1;
	                $(".slides").animate({'margin-left': +-(slideCurent-1)*width}, 100);
	                
				}
				else{
				$(".slides").animate({'margin-left': '+='+width}, speed);
				};
				clearInterval(timer); 
				timer = false;
				$(".slide-count").css('background-color', '#8c8c8c');
				console.log(slideCurent);		
				$("[data-count="+(slideCurent-1)+"]").css('background-color', '#6ddfff');
			});

			$(document).on("click",".slide-count",function(){
				
				$(".slides").animate({'margin-left': -($(this).data("count"))*width}, 100);
				$(".slide-count").css('background-color', '#8c8c8c');
				$(this).css('background-color', '#6ddfff');
				clearInterval(timer);
				slideCurent = $(this).data("count")+1; 
				timer = false;
			});

			$("body").keydown(function(e){
				if(e.which == 37){
					if(--slideCurent == 0){
						slideCurent = slideNo-1;
	                	$(".slides").animate({'margin-left': +-(slideCurent-1)*width}, 100);
					} else {
						$(".slides").animate({'margin-left': '+='+width}, speed);
					};
					clearInterval(timer); 
					timer = false;
					$(".slide-count").css('background-color', '#8c8c8c');
					console.log(slideCurent);		
					$("[data-count="+(slideCurent-1)+"]").css('background-color', '#6ddfff');

				
				} else if(e.which == 39){
							if (++slideCurent === slideNo) {
	                    		slideCurent = 1;
	                    		$(".slides").animate({'margin-left': 0}, 100);
	            			} else {   
								$(".slides").animate({'margin-left': '-='+width}, 100);
							}
	            				clearInterval(timer);
	            				timer = false;
				            	$(".slide-count").css('background-color', '#8c8c8c');
								console.log(slideCurent);		
								$("[data-count="+(slideCurent-1)+"]").css('background-color', '#6ddfff');
						}


				console.log(event.which);
			});

		}
	});

	$(".exit").click(function(e){
		e.stopPropagation();   
		$(this).parent().fadeOut();
		$('.bg-app').animate({'height' : 170},200);
	});
});
