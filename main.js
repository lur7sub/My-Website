//  nav-link 滑動
$(".navbar .nav-link").click(function () {
    // 取得滑動目標
        const target = $(this).attr("href") //選到點擊的目標並取出其href值 存入target
    // 取得滑動所在目標
        const position = $(target).offset().top //選到target取出其屬性top的值
    // 取得導覽列的高度
        const navbarHeight = $(".navbar").outerHeight() //選到navbar取出其高度 存入navbarHeight
        // 先取消, 再執行滑動動畫
    $("html,body").stop().animate({ //選到html and body標籤 先取消 再做動畫
        scrollTop: position - navbarHeight //animate有很多動畫 用物件溝通要使用滑動 scollTop: 滑動到
    }, 500)
});

// 打字機
let TW = {
    app: document.getElementById('app'),
    typewriter: new Typewriter(this.app,{
        loop: false
    })
}
TW.typewriter.typeString('<strong><span style="color: #27ae60;">嗨，我是呂學奇。</span></strong>')
.pauseFor(1000)
.start();


// goToTop 滑動
$(".goback-Btn").click(function () {
    // 先取消, 再執行滑動動畫
    $("html,body").stop().animate({
        scrollTop: 0
    }, 600)
});
