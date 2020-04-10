let num = document.getElementsByClassName('num');
let display = document.getElementById('display');
// 空の変数を用意
let occupation = "";

// for文で押したボタン要素を取得
for (let i = 0; i < num.length; i++) {
    let btn = num[i];

btn.addEventListener('click', function() {
    switch (btn.classList.contains('cal')) {
        case true:
            if (btn.classList.contains('operator')) {
                add(btn);
            } else {
                cal(btn);
            }
            break;
        case false:
            add(btn);
            break;
        default:
            break;
    }
});
// ディスプレイに追加していく関数
function add (btn)
{
    // TODO innerHTMLを調べる
    occupation += btn.dataset.value;
    display.innerHTML = occupation;
}

// 計算する関数
function cal (btn)
{
    if (btn.classList.contains('clear')) {
        occupation = "";
        display.innerHTML = occupation;
    } else if (btn.classList.contains('delete')) {
        occupation = occupation.slice(0, -1);
        display.innerHTML = occupation;
    } else if (btn.classList.contains('equal')) {
        occupation = eval(occupation);
        display.innerHTML = occupation;
    }
}

}