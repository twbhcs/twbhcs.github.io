// ==UserScript==
// @name         shennong.h3yun.net
// @namespace    h3yun
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://shennong.h3yun.net/*
// @require      https://unpkg.com/vue@2.6.14/dist/vue.min.js
// @require      https://unpkg.com/lodash@4.17.21/lodash.js
// @require      https://unpkg.com/mqtt/dist/mqtt.min.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=h3yun.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    debugger;
    // Your code here...
    console.log("begin")

})();

function loadScript(url, callback) {
    const script = document.createElement('script');
    script.type = "text/javaScript";
    if (script.readyState) {//IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null; callback();
            }
        };

    } else {//其他浏览器
        script.onload = function () { callback(); };
    }
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

loadScript('https://unpkg.com/vue@2.6.14/dist/vue.min.js', function () {
    let d = document.createElement("div");
    d.id = "xapp";
    d.innerHTML = GM_getResourceText("page");
    document.body.appendChild(d);
    GM_addStyle(document.querySelector("#xcss").innerText);
    eval(document.querySelector("#xjs").innerText);
});
loadScript('https://unpkg.com/axios@1.7.7/dist/axios.min.js', function () { });
loadScript('https://unpkg.com/lodash@4.17.21/lodash.js', function () { });
loadScript('https://unpkg.com/mqtt/dist/mqtt.min.js', function () { });

