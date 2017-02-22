// ==UserScript==
// @name         HipChat4k
// @domain       sinaxti.hipchat.com
// @version      0.1
// @description  Make emoticons bigger!
// @author       Guilherme Haschel
// @icon         https://bytebucket.org/echo__off/hipchat4k/raw/65e6aba901bb94f0107c3d6f8ba82df8906c4c83/hd-48.png
// @icon64       https://bytebucket.org/echo__off/hipchat4k/raw/65e6aba901bb94f0107c3d6f8ba82df8906c4c83/hd-64.png
// @include      https://sinaxti.hipchat.com/chat/*
// @match        https://sinaxti.hipchat.com/chat/*
// @updateURL    https://bitbucket.org/echo__off/hipchat4k/raw/42c016b8ef9c714e8fec15eabf813ed4408be088/userscript.js
// @downloadURL  https://bitbucket.org/echo__off/hipchat4k/raw/42c016b8ef9c714e8fec15eabf813ed4408be088/userscript.js
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
