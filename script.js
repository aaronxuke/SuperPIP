// ==UserScript==
// @name         超级画中画+倍速
// @namespace     https://www.zhihu.com/people/qinlili233
// @version      0.2
// @description  画中画切换+倍速切换
// @author       琴梨梨
// @grant        none
// @match        */*
//@run-at  document-end
// ==/UserScript==

(function() {
    'use strict';
    //初始化视频数量
    let videoID=0
    let pipON=false
    let rate=1
    //注册键盘监听
    document.onkeydown = function (event) {
        var e = event || window.event;
        if (e && e.keyCode == 189) {
            //按下减号
            if(pipON){
                if(videoID > 0){
                    videoID--;
                    document.getElementsByTagName("video")[videoID].requestPictureInPicture();
                }
                else{
                    console.log("这是第一个视频了,关闭画中画");
                    document.exitPictureInPicture();
                    pipON=false;
                }
            }
            else{
                console.log("尚未开启画中画,不做处理");
            }
        }
        if (e && e.keyCode == 187) {
            //按下加号
            if(pipON){videoID++;};
            if(document.getElementsByTagName("video")[videoID]){
                document.getElementsByTagName("video")[videoID].requestPictureInPicture();
                pipON=true;
                console.log("页面上第"+videoID+"个视频进入画中画");
            }
            else{
                console.log("页面上没有第"+videoID+"个视频了");
                if(videoID > 0){
                    videoID--;
                }
            }
        }
        if (e && e.keyCode == 219) {
            //按下左括号
            rate=rate-0.1;
            document.getElementsByTagName("video")[videoID].playbackRate=rate;
            console.log("第"+videoID+"个视频"+rate+"倍速");
        }
        if (e && e.keyCode == 221) {
            //按下右括号
            rate=rate+0.1;
            document.getElementsByTagName("video")[videoID].playbackRate=rate;
            console.log("第"+videoID+"个视频"+rate+"倍速");

        }

    };
})();
