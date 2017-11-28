/* global countup */

//画像を配列に格納する
var img = new Array();

img[0] = new Image();
img[0].src = "img/slot1.jpg";
img[1] = new Image();
img[1].src = "img/slot2.jpg";
img[2] = new Image();
img[2].src = "img/slot3.jpg";
img[3] = new Image();
img[3].src = "img/slot4.jpg";
img[4] = new Image();
img[4].src = "img/slot5.jpg";

var timer_id;
var mawasu = function () {
    //1000ミリ秒（1秒）毎に関数「showNowDate()」を呼び出す
    timer_id = setInterval("changeIMGb()", 100);
    setInterval("changeIMGa()", 100);
    setInterval("changeIMGc()", 100);

}




var cnt = 0;
//画像切り替え関数 
function changeIMGa() {

//画像番号を進める 
    if (cnt == 4) {
        cnt = 0;
    } else {
        cnt++;
    }

//画像を切り替える 
    document.getElementById("gazoA").src = img[cnt].src;
}

//画像切り替え関数 
function changeIMGb() {
//var cnt = 0;
//画像番号を進める 
//    var cnt = Math.floor(Math.random() * 5);
//    if (cnt == 4) {
//        cnt = 0;
//    } else {
//        cnt++;
//    }

//画像を切り替える 

    var cnt = Math.floor(Math.random() * 5);
    document.getElementById("gazoB").src = img[cnt].src;


}

var foo = function(){
    setInterval(changeIMGb(), 100);
}


//画像切り替え関数 
function changeIMGc() {
//var cnt = 0;
//画像番号を進める 
    if (cnt == 4) {
        cnt = 0;
    } else {
        cnt++;
    }

//画像を切り替える 
    document.getElementById("gazoC").src = img[cnt].src;
}

function botton(){
    foo();
}