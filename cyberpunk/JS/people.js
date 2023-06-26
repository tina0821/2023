
/*按鈕*/
var R1_img1 = document.getElementById('R1_img1');
var R1_img2 = document.getElementById('R1_img2');
var R1_img3 = document.getElementById('R1_img3');
var R1_img4 = document.getElementById('R1_img4');
var R1_img5 = document.getElementById('R1_img5');
var R1_img6 = document.getElementById('R1_img6');

/*背景*/
var R2_img1 = document.getElementById('R2_img1');
var R2_img2 = document.getElementById('R2_img2');
var R2_img3 = document.getElementById('R2_img3');
var R2_img4 = document.getElementById('R2_img4');
var R2_img5 = document.getElementById('R2_img5');
var R2_img6 = document.getElementById('R2_img6');

/*人物*/
var R3_img1 = document.getElementById('R3_img1');
var R3_img2 = document.getElementById('R3_img2');
var R3_img3 = document.getElementById('R3_img3');
var R3_img4 = document.getElementById('R3_img4');
var R3_img5 = document.getElementById('R3_img5');
var R3_img6 = document.getElementById('R3_img6');

/*介紹*/
var name1 = document.getElementById('name1');
var name2 = document.getElementById('name2');
var name3 = document.getElementById('name3');
var name4 = document.getElementById('name4');
var name5 = document.getElementById('name5');
var name6 = document.getElementById('name6');

function listBtn1() {
    if (R2_img1.style.display == 'none') {
        R2_img1.style.display = 'block';
        R2_img2.style.display = 'none';
        R2_img3.style.display = 'none';
        R2_img4.style.display = 'none';
        R2_img5.style.display = 'none';
        R2_img6.style.display = 'none';

        R3_img1.style.display = 'block';
        R3_img2.style.display = 'none';
        R3_img3.style.display = 'none';
        R3_img4.style.display = 'none';
        R3_img5.style.display = 'none';
        R3_img6.style.display = 'none';

        name1.style.display = 'block';
        name2.style.display = 'none';
        name3.style.display = 'none';
        name4.style.display = 'none';
        name5.style.display = 'none';
        name6.style.display = 'none';
    }
    highlightImage(R1_img1);
    unhighlightImage(R1_img2, R1_img3, R1_img4, R1_img5, R1_img6);
}

function listBtn2() {
    if (R2_img2.style.display == 'none') {
        R2_img1.style.display = 'none';
        R2_img2.style.display = 'block';
        R2_img3.style.display = 'none';
        R2_img4.style.display = 'none';
        R2_img5.style.display = 'none';
        R2_img6.style.display = 'none';

        R3_img1.style.display = 'none';
        R3_img2.style.display = 'block';
        R3_img3.style.display = 'none';
        R3_img4.style.display = 'none';
        R3_img5.style.display = 'none';
        R3_img6.style.display = 'none';

        name1.style.display = 'none';
        name2.style.display = 'block';
        name3.style.display = 'none';
        name4.style.display = 'none';
        name5.style.display = 'none';
        name6.style.display = 'none';

        highlightImage(R1_img2);
        unhighlightImage(R1_img1, R1_img3, R1_img4, R1_img5, R1_img6);
    }
}

function listBtn3() {
    if (R2_img3.style.display == 'none') {
        R2_img1.style.display = 'none';
        R2_img2.style.display = 'none';
        R2_img3.style.display = 'block';
        R2_img4.style.display = 'none';
        R2_img5.style.display = 'none';
        R2_img6.style.display = 'none';

        R3_img1.style.display = 'none';
        R3_img2.style.display = 'none';
        R3_img3.style.display = 'block';
        R3_img4.style.display = 'none';
        R3_img5.style.display = 'none';
        R3_img6.style.display = 'none';

        name1.style.display = 'none';
        name2.style.display = 'none';
        name3.style.display = 'block';
        name4.style.display = 'none';
        name5.style.display = 'none';
        name6.style.display = 'none';

        highlightImage(R1_img3);
        unhighlightImage(R1_img1, R1_img2, R1_img4, R1_img5, R1_img6);
    }
}

function listBtn4() {
    if (R2_img4.style.display == 'none') {
        R2_img1.style.display = 'none';
        R2_img2.style.display = 'none';
        R2_img3.style.display = 'none';
        R2_img4.style.display = 'block';
        R2_img5.style.display = 'none';
        R2_img6.style.display = 'none';

        R3_img1.style.display = 'none';
        R3_img2.style.display = 'none';
        R3_img3.style.display = 'none';
        R3_img4.style.display = 'block';
        R3_img5.style.display = 'none';
        R3_img6.style.display = 'none';

        name1.style.display = 'none';
        name2.style.display = 'none';
        name3.style.display = 'none';
        name4.style.display = 'block';
        name5.style.display = 'none';
        name6.style.display = 'none';

        highlightImage(R1_img4);
        unhighlightImage(R1_img1, R1_img2, R1_img3, R1_img5, R1_img6);
    }
}

function listBtn5() {
    if (R2_img5.style.display == 'none') {
        R2_img1.style.display = 'none';
        R2_img2.style.display = 'none';
        R2_img3.style.display = 'none';
        R2_img4.style.display = 'none';
        R2_img5.style.display = 'block';
        R2_img6.style.display = 'none';

        R3_img1.style.display = 'none';
        R3_img2.style.display = 'none';
        R3_img3.style.display = 'none';
        R3_img4.style.display = 'none';
        R3_img5.style.display = 'block';
        R3_img6.style.display = 'none';

        name1.style.display = 'none';
        name2.style.display = 'none';
        name3.style.display = 'none';
        name4.style.display = 'none';
        name5.style.display = 'block';
        name6.style.display = 'none';

        highlightImage(R1_img5);
        unhighlightImage(R1_img1, R1_img2, R1_img3, R1_img4, R1_img6);
    }
}

function listBtn6() {
    if (R2_img6.style.display == 'none') {
        R2_img1.style.display = 'none';
        R2_img2.style.display = 'none';
        R2_img3.style.display = 'none';
        R2_img4.style.display = 'none';
        R2_img5.style.display = 'none';
        R2_img6.style.display = 'block';

        R3_img1.style.display = 'none';
        R3_img2.style.display = 'none';
        R3_img3.style.display = 'none';
        R3_img4.style.display = 'none';
        R3_img5.style.display = 'none';
        R3_img6.style.display = 'block';

        name1.style.display = 'none';
        name2.style.display = 'none';
        name3.style.display = 'none';
        name4.style.display = 'none';
        name5.style.display = 'none';
        name6.style.display = 'block';

        highlightImage(R1_img6);
        unhighlightImage(R1_img1, R1_img2, R1_img3, R1_img4, R1_img5);
    }
}

function highlightImage(img) {
    img.style.outline = 'none'; //去掉預設的外框
    img.style.boxShadow = ' 2px 0px 13px 3px #fff'; //添加陰影效果
    img.style.border = '2px solid #fff'; //添加邊框效果
}

function unhighlightImage(img, img1, img2, img3, img4) {
    img.style.outline = '';
    img.style.boxShadow = '';
    img.style.border = '';

    img1.style.outline = '';
    img1.style.boxShadow = '';
    img1.style.border = '';

    img2.style.outline = '';
    img2.style.boxShadow = '';
    img2.style.border = '';

    img3.style.outline = '';
    img3.style.boxShadow = '';
    img3.style.border = '';

    img4.style.outline = '';
    img4.style.boxShadow = '';
    img4.style.border = '';
  }
