// ==UserScript==
// @name         HipChat HD
// @domain       *.hipchat.com
// @version      0.2
// @description  Make emoticons bigger!
// @author       Guilherme Haschel
// @icon         https://raw.githubusercontent.com/ghaschel/hipchat-hd/master/hd-48.png
// @icon64       https://raw.githubusercontent.com/ghaschel/hipchat-hd/master/hd-64.png
// @include      https://*.hipchat.com/chat/*
// @match        https://*.hipchat.com/chat/*
// @updateURL    https://raw.githubusercontent.com/ghaschel/hipchat-hd/master/userscript.js
// @downloadURL  https://raw.githubusercontent.com/ghaschel/hipchat-hd/master/userscript.js
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    var sheet = (function() {
        var style = document.createElement("style");
        style.appendChild(document.createTextNode(""));
        document.head.appendChild(style);
        return style.sheet;
    })();

    sheet.insertRule("#hipchat .hc-tooltip .smileys-selection, body .hc-tooltip .smileys-selection { width: 184px; }", sheet.length);

    var makeItHD = function(){
        var smileys = document.querySelectorAll('.smiley-icon > .hc-tooltip  img.remoticon:not(.changed)');
        var emoticons = document.querySelectorAll('.hc-chat-scrollbox.message-list img.remoticon:not(.changed)');

        emoticons.forEach(function(el, idx){
            el.src = el.src.replace('@2x', '@4x');;
            el.classList.add('changed');
            el.removeAttribute('height');
            el.removeAttribute('width');
            console.log(el);
        });

        smileys.forEach(function(el, idx) {
            el.classList.add('changed');
            el.attributes.height.value = 40;
            el.attributes.width.value = 40;
        });
    };

    new MutationObserver(function(mutations) {
        var isChat = document.querySelectorAll('header.aui-page-header.lobby-header').length === 0;
        if (isChat) {
            makeItHD();
        }
    }).observe(
        document.querySelector('.hc-main-col'),
        { subtree: true, childList: true }
    );
})();