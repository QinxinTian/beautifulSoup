$(document).ready(function(){
			$(".main .rgstr-btn button").click(function(){
				$('.main .wrapper').addClass('move');
				/*$('.body').css('background','#e0b722');*/
				$(".main .login-btn button").removeClass('active');
				$(this).addClass('active');

			});
			$(".main .login-btn button").click(function(){
				$('.main .wrapper').removeClass('move');
				/*$('.body').css('background','#ff4931');*/
				$(".main .rgstr-btn button").removeClass('active');
				$(this).addClass('active');
			});
		});