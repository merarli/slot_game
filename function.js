/* global countup */

//画像を配列に格納する
var img = new Array();

img[0] = new Image();
img[0].src = "img/slot5.jpg";
img[1] = new Image();
img[1].src = "img/slot4.jpg";
img[2] = new Image();
img[2].src = "img/slot3.jpg";
img[3] = new Image();
img[3].src = "img/slot2.jpg";
img[4] = new Image();
img[4].src = "img/slot1.jpg";
var cntA = 0;
var cntB = 0;
var cntC = 0;

//ゲーム設定変数

//推奨3~5
var luck = 5;

//ミリ秒オリンピック選手で170　一般200~300
var fps = 250;

//キャラクターHP
var cHP = 500;

//キャラクター攻撃力
var cAtk = 100;

//道中1設定
//攻撃力
var mAtk1 = 15;

//HP
var mHP1 = 300;

//画像切り替え関数 
function changeIMGa() {
    cntA = Math.floor(Math.random() * luck);
    document.getElementById("gazoA").src = img[cntA].src;
}

//画像切り替え関数 
function changeIMGb() {
    cntB = Math.floor(Math.random() * luck);
    document.getElementById("gazoB").src = img[cntB].src;
}


//画像切り替え関数 
function changeIMGc() {
    cntC = Math.floor(Math.random() * luck);
    document.getElementById("gazoC").src = img[cntC].src;
}


var slotFlg = 0;
function startInterval() {
    if (slotFlg === 0) {
        intervalID1 = setInterval('changeIMGa();', fps);
        intervalID2 = setInterval('changeIMGb();', fps);
        intervalID3 = setInterval('changeIMGc();', fps);
        slotFlg = 1;
    }
}


//stopボタンを押すとタイマーを停止
function stopInterval() {
    if (slotFlg === 1) {

        clearInterval(intervalID1);
        if (cntA === cntB && cntB === cntC) {
            MYtoMOB1(cAtk);
        } else {
            MOB1toMY(mAtk1);
        }
        slotFlg = 0;
    }
}

function MYtoMOB1(myAtk) {
    mHP1 = mHP1 - myAtk;
    alert("ダメージを与えた！ +" + myAtk);
    alert("敵のHP残り" + mHP1 + "/自分のHP" + cHP);
}

function MOB1toMY(mobAtk) {
    cHP = cHP - mAtk1;
    alert("ダメージを受けた！ -" + mobAtk);
    alert("敵のHP残り" + mHP1 + "/自分のHP" + cHP);
}