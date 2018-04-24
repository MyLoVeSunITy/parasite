$(document).ready(function(){
  $('.slick-container').slick({
    slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	dots: true,
	infinite: true,
  });
});
window.onload = function() // дожидаемся загрузки страницы
{
     initializeTimer(); // вызываем функцию инициализации таймера
}
function initializeTimer() {
	var currentDate = new Date();
	var endDate = new Date(currentDate.getTime() + (21 * 35 * 60 * 1000));//24*60*60*1000
	var seconds = (endDate-currentDate) / 1000; // определяем количество секунд до истечения таймера
	if (seconds > 0) {
		var minutes = seconds/60; // определяем количество минут до истечения таймера
		var hours = minutes/60; // определяем количество часов до истечения таймера
		minutes = (hours - Math.floor(hours)) * 60; // подсчитываем кол-во оставшихся минут в текущем часе
		hours = Math.floor(hours)%60; // целое количество часов до истечения таймера
		seconds = Math.floor((minutes - Math.floor(minutes)) * 60); // подсчитываем кол-во оставшихся секунд в текущей минуте
		minutes = Math.floor(minutes); // округляем до целого кол-во оставшихся минут в текущем часе
		setTimePage(hours,minutes,seconds); // выставляем начальные значения таймера
		function secOut() {
		  if (seconds == 0) { // если секунду закончились то
			  if (minutes == 0) { // если минуты закончились то
				  if (hours == 0) { // если часы закончились то
					  showMessage(timerId); // выводим сообщение об окончании отсчета
				  }
				  else {
					  hours--; // уменьшаем кол-во часов
					  minutes = 59; // обновляем минуты 
					  seconds = 59; // обновляем секунды
				  }
			  }
			  else {
				  minutes--; // уменьшаем кол-во минут
				  seconds = 59; // обновляем секунды
			  }
		  }
		  else {
			  seconds--; // уменьшаем кол-во секунд
		  }
		  setTimePage(hours,minutes,seconds); // обновляем значения таймера на странице
		}
		timerId = setInterval(secOut, 1000) // устанавливаем вызов функции через каждую секунду
	}
	else {
		alert("Установленая дата уже прошла");
	}
}
function setTimePage(h,m,s) {
	var element = document.getElementById("timer");
	element.innerHTML = "<p class=mt-4>До конца акции осталось:</p><div class='timer-counter ml-3'><span class=hours>"+h+"</span><p>часов</p></div><div class=timer-counter><span class=minutes>"+m+"</span><p>минут</p></div><div class=timer-counter><span class=seconds>"+s+"</span><p>секунд</p></div>";
	var element2 = document.getElementById("timer2");
	element2.innerHTML = "<p class=mt-4>До конца акции осталось:</p><div class='timer-counter ml-3'><span class=hours>"+h+"</span><p>часов</p></div><div class=timer-counter><span class=minutes>"+m+"</span><p>минут</p></div><div class=timer-counter><span class=seconds>"+s+"</span><p>секунд</p></div>";
	var element3 = document.getElementById("timer3");
	element3.innerHTML = "<p class=mt-4>До конца акции осталось:</p><div class='timer-counter ml-3'><span class=hours>"+h+"</span><p>часов</p></div><div class=timer-counter><span class=minutes>"+m+"</span><p>минут</p></div><div class=timer-counter><span class=seconds>"+s+"</span><p>секунд</p></div>";
	var element4 = document.getElementById("timer4");
	element4.innerHTML = "<p class=mt-4>До конца акции осталось:</p><div class='timer-counter ml-3'><span class=hours>"+h+"</span><p>часов</p></div><div class=timer-counter><span class=minutes>"+m+"</span><p>минут</p></div><div class=timer-counter><span class=seconds>"+s+"</span><p>секунд</p></div>";
	$("input[type='tel']").inputmask("+7(999)999-99-99"); 
}
function showMessage(timerId) { 
	alert("Время истекло!");
	clearInterval(timerId);
}
