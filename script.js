function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'skyblue';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = '#181A1B';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});




		function copy(copyId){
			var $inp=$("<input>");
			$("body").append($inp);
			$inp.val($(""+copyId).text()).select();
			document.execCommand("copy");
			$inp.remove();
			$(".alert").fadeIn(500,function(){
				$(".alert").fadeOut();
			});
		}
		$(document).ready(function(){
			$("#copyButton1").click(function(){
				copy('#text1');
			});
			$("#copyButton2").click(function(){
				copy('#text2');
			});
      $("#copyButton3").click(function(){
				copy('#text3');
			});
			$("#copyButton4").click(function(){
				copy('#text4');
			});
      $("#copyButton5").click(function(){
				copy('#text5');
			});
			$("#copyButton6").click(function(){
				copy('#text6');
			});
      $("#copyButton7").click(function(){
				copy('#text7');
			});
			$("#copyButton8").click(function(){
				copy('#text8');
			});
      $("#copyButton9").click(function(){
				copy('#text9');
			});
      $("#copyButton10").click(function(){
				copy('#text10');
			});


      $("#copyButton11").click(function(){
				copy('#text11');
			});
			$("#copyButton12").click(function(){
				copy('#text12');
			});
      $("#copyButton13").click(function(){
				copy('#text13');
			});
			$("#copyButton14").click(function(){
				copy('#text14');
			});
      $("#copyButton15").click(function(){
				copy('#text15');
			});
			$("#copyButton16").click(function(){
				copy('#text16');
			});
      $("#copyButton17").click(function(){
				copy('#text17');
			});
			$("#copyButton18").click(function(){
				copy('#text18');
			});
      $("#copyButton19").click(function(){
				copy('#text19');
			});
      $("#copyButton20").click(function(){
				copy('#text20');
			});
	   $("#copyButton10").click(function(){
				copy('#text10');
			});


      $("#copyButton11").click(function(){
				copy('#text11');
			});
			$("#copyButton12").click(function(){
				copy('#text12');
			});
      $("#copyButton13").click(function(){
				copy('#text13');
			});
			$("#copyButton14").click(function(){
				copy('#text14');
			});
      $("#copyButton15").click(function(){
				copy('#text15');
			});
			$("#copyButton16").click(function(){
				copy('#text16');
			});
      $("#copyButton17").click(function(){
				copy('#text17');
			});
			$("#copyButton18").click(function(){
				copy('#text18');
			});
			$("#copyButton10").click(function(){
				copy('#text10');
			});


      		$("#copyButton21").click(function(){
				copy('#text21');
			});
			$("#copyButton22").click(function(){
				copy('#text22');
			});
            $("#copyButton23").click(function(){
				copy('#text23');
			});
			$("#copyButton24").click(function(){
				copy('#text24');
			});
      		$("#copyButton25").click(function(){
				copy('#text25');
			});
			$("#copyButton26").click(function(){
				copy('#text26');
			});
     		$("#copyButton27").click(function(){
				copy('#text27');
			});
			$("#copyButton28").click(function(){
				copy('#text28');
			});
		});