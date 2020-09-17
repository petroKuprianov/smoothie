
	function fillnumber(value, element){
        $({numberValue: 0}).animate({numberValue: value}, {
				
            duration: 3000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд 
            easing: "linear",
            
            step: function(val) {
            
                $(`#${element}`).html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                
            }
            
        });
    }
	$(function() {
	
		var target_block = $("#visible"); // Ищем блок 
		var blockStatus = true;
		
		$(window).scroll(function() {
		
			var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
			
			if(scrollEvent && blockStatus) {
			
				blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
				
                fillnumber(4832,'count_1');
                fillnumber(2531,'count_2');
                fillnumber(1939,'count_3');
                fillnumber(7812,'count_4');
                
				
			}
			
		});
		
	});
	
