# メモ
## 詰まったこと気づいたこと
- これだと動かない（動くけど、クリックしたたんびにしか動かない。）
```js
start.addEventListener('click', function () {
    setInterval(TimerEvent, 1000);
    if (sec = 4) {
        sec = 0;
        min++;
    }
    if (min = 4) {
        min = 0;
        hour++;
    }
    console.log(hour + min + sec);
});
```
- 解決
```js
クリックしたときにsetInterval処理を使って、TimreEventを呼び出す。
start.addEventListener('click', function () {
    setInterval(TimerEvent, 1000);
});




function TimerEvent() {
    sec++;
    if (sec = 4) {
        sec = 0;
        min++;
    }
    if (min = 4) {
        min = 0;
        hour++;
    }
    console.log(hour + min + sec);
}