$(document).ready(function(){
  $(".wynik").text("Nowa treść");
  console.log(($("p").text())); // odczytanie tekstu z jakiegoś znacznika
  $("#przycisk").click(function(){
    var vnk = parseInt($("#vnk").val());
    var nk = parseInt($("#vnk").val());
    var R = vnk / nk * 100;
    var div2 = '<div class="wspolczynnik">'+R+'</div>';
    $("div.wynik").after(div2);
  });
  $("input").mouseover(function(){
    $(this).addClass("tloBlue");
  });
  $("input").mouseout(function(){
    $(this).addClass("tloWhite");
  });
  // podczas opuszczenia myszką obszaru input przywróć poprzedni kolor tła
	// wywołania jQuery
});
