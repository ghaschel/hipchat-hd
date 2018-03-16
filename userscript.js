// ==UserScript==
// @name         HipChat HD
// @domain       *.hipchat.com
// @version      0.1
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
    var makeItHD = function(){
        $('img.remoticon').each(function(idx, el){
            var bkp = el.src;
            bkp = bkp.replace('@2x', '@4x');
            el.src = bkp;
            el.removeAttribute('height');
            el.removeAttribute('width');
        });
    };
    $('.hc-main-col').bind('DOMSubtreeModified', function(){
        var isChat = $('header.aui-page-header.lobby-header').length === 0;
        if (isChat) {
            makeItHD();
        }
    });
})();
