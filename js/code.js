var modal = document.getElementById('myModal');
var div_open = document.getElementById("myBtn");
var div_close = document.getElementsByClassName("btn_close")[0];
  
div_open.onclick = function() {
    modal.style.display = "block";
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
}

div_close.onclick = function() {
    modal.style.display = "none";
    document.body.style.position = '';
    document.body.style.top = '';
}


//var cources_left = document.getElementById('cources_left');
//var cources_right = document.getElementById('cources_right');
//var slider_1 = document.getElementsByClassName('slider_1')[0];
//var slider_2 = document.getElementsByClassName('slider_2')[0];
//var slider_3 = document.getElementsByClassName('slider_3')[0];
//cources_right.onclick = () =>   {
//    if (slider_2.style.display == 'none') {
//        slider_1.style.display = 'none';
//        slider_2.style.display = 'flex';
//       alert( "Правильно!" );
//    }
//    else if (slider_1.style.display == 'none') {
//        slider_2.style.display = 'none';
//        slider_1.style.display = 'flex';
//        }
//    else {
//            alert( "Все неправильно!" );
//       }
//   }
    
    


