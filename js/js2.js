$("#left_list >div").click(function(){
			var win_width = $(window).width()
			if(win_width<800){
			$("#right").stop(true).animate({
					   left:'0%',
					},300);}
			
		})