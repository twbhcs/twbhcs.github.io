// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ops.techoa.h3yun.net/*
// @require      https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/vue/2.6.14/vue.min.js
// @require      https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/lodash.js/4.17.21/lodash.min.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=h3yun.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

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

loadScript('https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/vue/2.6.14/vue.min.js', function () {
    let d = document.createElement("div");
    d.id = "xapp";
    d.innerHTML = GM_getResourceText("page");
    document.body.appendChild(d);
    GM_addStyle(document.querySelector("#xcss").innerText);
    eval(document.querySelector("#xjs").innerText);
});
loadScript('https://unpkg.com/axios@1.7.7/dist/axios.min.js', function () { });
loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js', function () { });

