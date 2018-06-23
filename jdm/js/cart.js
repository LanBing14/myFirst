;(function () {
    var checkBox = document.querySelectorAll('.checkBox');
    var checkTop = document.querySelector('.content_header .checkBox');
    var checkBottom = document.querySelectorAll('.content_bottom .checkBox');
    // console.log(checkBox);
    var currentLength = 0;

    // 点击每一个按钮都能切换背景图片
    checkBox.forEach(function (v,i) {
        v.addEventListener('click',function () {
            this.classList.toggle("current");
        })
    })


    //点击上边的按钮,地面随着变换
    checkTop.addEventListener('click',function (){
        if (this.classList.contains("current")) {
            checkBottom.forEach(function (v,i) {
                v.classList.add("current");
            })
            currentLength = checkBottom.length;
        } else {
            checkBottom.forEach(function (v,i) {
                v.classList.remove("current");
            })
            currentLength = 0;
        }
    })

    checkBottom.forEach(function (v,i) {
        v.addEventListener('click',function () {
            if (this.classList.contains("current")){
                currentLength++;
                currentLength === checkBottom.length ?checkTop.classList.add("current"):checkTop.classList.remove("current")
            } else {
                currentLength--;
                checkTop.classList.remove("current")
            }
        })
    })
})()