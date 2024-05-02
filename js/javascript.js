
        
                            $(function(){

                                $("#phone").mask("8 (999) 999-99-99");

                                }
                                );
                            $(function(){

                                $("#phone1").mask("8 (999) 999-99-99");

                                }
                                );

                              function showFile(e) {
                                let files = e.target.files;
                                for (var i = 0, f; f = files[i]; i++) {
                                  if (!f.type.match('image.*')) continue;
                                  var fr = new FileReader();
                                  fr.onload = (function(theFile) {
                                    return function(e) {
                                      var div = document.createElement('div');
                                      div.innerHTML = "<img src='" + e.target.result + "' />";
                                      document.getElementById('list').insertBefore(div, null);
                                    };
                                  })(f);
                             
                                  fr.readAsDataURL(f);
                                }
                              }
							document.getElementById('files').addEventListener('change', showFile, false);


                            

                            $(function() {
                              document.getElementById('ajax-contact-form').addEventListener('submit', function(evt){
                                var http = new XMLHttpRequest(), f = this;
                                var th = $(this);
                                evt.preventDefault();
                                http.open("POST", "contact.php", true);
                                http.onreadystatechange = function() {
                                  if (http.readyState == 4 && http.status == 200) {
                                    alert(http.responseText);
                                    if (http.responseText.indexOf(f.nameFF.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
                                      th.trigger("reset");
                                    }
                                  }
                                }
                                http.onerror = function() {
                                  alert('Ошибка, попробуйте еще раз');
                                }
                                http.send(new FormData(f));
                              }, false);
                             
                            });

                            document.addEventListener('click', function(e) {
                                var map = document.querySelector('#map-wrap iframe')
                                if(e.target.id === 'map-wrap') {
                                    map.style.pointerEvents = 'all'
                                } else {
                                    map.style.pointerEvents = 'none'
                                }});


$('.about__frame__main').magnificPopup({
		
		delegate: 'a',
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false,

		},
		gallery: {
			enabled:true
		}
	});

$('.work__process').magnificPopup({
		
		delegate: 'a',
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false,

		},
		gallery: {
			enabled:true
		}
	});


	$('.popup-youtube').magnificPopup({
        type: 'iframe',
        preloader: false
    });


    


$("a.scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});
$("form.scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('action');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});


var idleTime = 0;
$(document).ready(function () {
    // Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 5000); // 5 sec

    // Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });

    function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 1) { // 10 sec
        setTimeout(function() {
location.href = '#popup';});
    };
};
});


