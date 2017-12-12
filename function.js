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
var luck = 3;

//ミリ秒オリンピック選手で170　一般200~300
var fps = 250;

//キャラクターHP
var cHP_MAX = 500;
var cHP = 500;

//キャラクター攻撃力
var cAtk = 100;

//道中1設定
//攻撃力
var mAtk1 = 15;

//HP
var mHP1_MAX = 300;
var mHP1 = 300;

//HP数値などの初期化
window.onload = function () {
    document.getElementById("cHP").textContent = cHP;
    document.getElementById("mobHP").textContent = mHP1;
}


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

//スタートボタン
var slotFlg = 0;
function startInterval() {
    if (slotFlg === 0) {
        intervalID1 = setInterval('changeIMGa();', fps);
        intervalID2 = setInterval('changeIMGb();', fps);
        intervalID3 = setInterval('changeIMGc();', fps);

        slotFlg = 1;
        document.getElementById('start-sound').play();
    }
}

var count = 0;

//stopボタンを押すとタイマーを停止1
function stopInterval1() {
    if (slotFlg === 1) {
        clearInterval(intervalID1);
        document.getElementById('sound-file').play();

        if (count < 2) {
            count = count + 1;
        } else {
            bingo();
            count = 0;
            slotFlg = 0;
        }
    }

}

//stopボタンを押すとタイマーを停止2
function stopInterval2() {
    if (slotFlg === 1) {
        clearInterval(intervalID2);
        document.getElementById('sound-file').play();

        if (count < 2) {
            count = count + 1;
        } else {
            bingo();
            count = 0;
            slotFlg = 0;
        }
    }
}

//stopボタンを押すとタイマーを停止3
function stopInterval3() {
    if (slotFlg === 1) {
        document.getElementById('sound-file').play();
//        slotFlg = 0;
        clearInterval(intervalID3);

        if (count < 2) {
            count = count + 1;
        } else {
            bingo();
            count = 0;
            slotFlg = 0;
        }
    }
}


function MYtoMOB1(myAtk) {
    mHP1 = mHP1 - myAtk;
//    alert("ダメージを与えた！ +" + myAtk);
//    alert("敵のHP残り" + mHP1 + "/自分のHP" + cHP);
    myHPstyle();
    mobHPstyle();
}

function MOB1toMY(mobAtk) {
    cHP = cHP - mAtk1;
//    alert("ダメージを受けた！ -" + mobAtk);
//    alert("敵のHP残り" + mHP1 + "/自分のHP" + cHP);
    myHPstyle();
    mobHPstyle();
}

//自分のHPゲージを変更するCSS
function myHPstyle() {
    document.getElementById("cHP").style.width = (cHP / cHP_MAX * 100) + "%";
    document.getElementById("cHP").textContent = cHP;
}

//MOBゲージを変更するCSS
function mobHPstyle() {
    document.getElementById("mobHP").style.width = (mHP1 / mHP1_MAX * 100) + "%";
    document.getElementById("mobHP").textContent = mHP1;
    if (mHP1 <= 0) {
        document.getElementById("mobHP").textContent = "ゲームクリア！　スコア：" + cHP;
    }
}

function bingo() {
//    alert("bingo！");
    //揃った場合
    if (cntA === cntB && cntB === cntC) {
        MYtoMOB1(cAtk);
        document.getElementById('bingo').play();
        //揃わなかった場合
    } else {
        MOB1toMY(mAtk1);
    }
}