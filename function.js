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
var cnt = 0;

//画像切り替え関数 
function changeIMGa() {

//画像番号を進める 
    if (cnt === 4) {
        cnt = 0;
    } else {
        cnt++;
    }

//画像を切り替える 
    document.getElementById("gazoA").src = img[cnt].src;
}

//画像切り替え関数 
function changeIMGb() {
    var cnt = Math.floor(Math.random() * 5);
    document.getElementById("gazoB").src = img[cnt].src;
}


//画像切り替え関数 
function changeIMGc() {
//var cnt = 0;
//画像番号を進める 
    if (cnt === 4) {
        cnt = 0;
    } else {
        cnt++;
    }

//画像を切り替える 
    document.getElementById("gazoC").src = img[cnt].src;
}
