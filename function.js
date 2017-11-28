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
var cntA = 0;
var cntB = 0;
var cntC = 0;

//画像切り替え関数 
function changeIMGa() {
    cntA = Math.floor(Math.random() * 5);
    document.getElementById("gazoA").src = img[cntA].src;
}

//画像切り替え関数 
function changeIMGb() {
    cntB = Math.floor(Math.random() * 5);
    document.getElementById("gazoB").src = img[cntB].src;
}


//画像切り替え関数 
function changeIMGc() {
    cntC = Math.floor(Math.random() * 5);
    document.getElementById("gazoC").src = img[cntC].src;
}


var slotFlg = 0;
function startInterval() {
//        intervalID = setInterval(changeIMGb(), 100);
    if (slotFlg === 0) {
        intervalID = setInterval('changeIMGb();changeIMGa();changeIMGc();', 100);
        slotFlg = 1;
    }

}


//stopボタンを押すとタイマーを停止
function stopInterval() {
    if (slotFlg === 1) {

        clearInterval(intervalID);
        if (cntA === cntB && cntB === cntC) {
            alert("あたり！");
        } else {
            alert("はずれ！");
        }
        slotFlg = 0;
    }
}