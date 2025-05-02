/*! 183-1-RELEASE 2015-11-15 */!function(e,t){e.TRC=e.TRC||{},TRC.blocker=TRC.blocker||{states:{ABP_DETECTION_DISABLED:-2,ABP_NOT_DETECTED:0,ABP_DETECTED:1},createBlockDetectionDiv:function(e){var n=t.createElement("div");return n.className=e,n.appendChild(t.createTextNode(".")),t.documentElement.appendChild(n),n},isBlockDetectedOnDiv:function(e){return e.offsetHeight?(TRC.pConsole("page","warn","No AdBlockPlus detected on div with class: "+e.className),!1):(TRC.pConsole("page","warn","AdBlockPlus detected on div with class: "+e.className),!0)},isBlockDetectedOnClassNames:function(e){var n,s,o=e.length;for(n=0;o>n;n++)if(e[n]){s=this.createBlockDetectionDiv(e[n]);try{if(this.isBlockDetectedOnDiv(s))return!0}catch{TRC.pConsole("page","error","unable to inspect offsetHeight of div with class: "+s.className)}finally{t.documentElement.removeChild(s)}}return!1},getBlockedState:function(e){return e&&this.isBlockDetectedOnClassNames(e)?this.states.ABP_DETECTED:this.states.ABP_NOT_DETECTED}}}(window,document),function(e,t){function D(e,t){var n,o,s=100;for(n in e){if("*"===n){s=e[n];break}o=new RegExp(n),t.match(o)&&(s=e[n])}return s}function ce(){return!!(null!==f&&(w=D(f,TRC.publisherId),te>w))&&(W(),TRC.pConsole("page","info","queue disabled!!! "),!0)}function d(){}function re(){for(;msg=g.shift();)switch(msg.notify){case"newPageLoad":TRC.reset()}}function oe(e){for(var n,s=/^(.*\/libtrc\/.+\/)loader\.js(?:\?(.*))?$/,t=0;t<e.length;t++)(n=e[t].src.match(s))&&(TRC.baseDomain=n[1],TRC.pConsole("page","info","base domain set to : "+TRC.baseDomain))}function E(){for(var e;e=m.shift();)switch(e.notify){case"videoPlay":this.preloadRequestLoader?!function(e){TRC.aspect.after(n,"handleLoadResponse",function(){n.playVideo(e)},!0)}(e):n.playVideo(e);break;case"videoDone":try{TRC.dispatch("videoDone",e)}catch(e){n.error("Problem in videoDone",e)}}}function J(e,t,n){var s=e.split(t);return s.slice(0,n-1).concat(s.length>=n?s.slice(n-1).join(t):[])}function Z(e){var n,s=[{key:"?",index:0},{key:"://",index:1},{key:"//",index:1},{key:"/",index:0}],t=0,i=s.length,o=e;for(t;i>t;t++)n=J(o,s[t].key,2),o=n.length>1?n[s[t].index]:n[0];return o}function A(){if(r=null,p)for(;i.length;)n.pollTillContainerAvailable(i.shift());else p=!0,n.loadRBox.apply(n,i),i=[],(d=E)()}function b(){}function X(){return i.length?c?(c=!1,void A()):(r!=null&&TRC.Timeout.clear(r),void(r=TRC.Timeout.set(A,n.trcRequestDelay))):c=!1}function S(){}function Y(){TRC.eventDelegator.subscribe("user_id_ready",q)}function q(){try{K.call(null,v)}catch(e){TRC.pConsole("errors","error","error in handleSocials",e.message)}}function K(e){for(var t;t=e.shift();)n.sendEvent("social",{st:t.name,"unescape-d":encodeURIComponent(__trcJSONify({data:t.val}))},null,!1,null,null)}function U(e,t){var n,s,o=!0;try{e.modes[t]&&(n=e.modes[t]["visibility-constraints"],n&&"object"==typeof n&&TRC.ignoreVisibilityConstraints!==!0&&(s=window.innerWidth||document.body.clientWidth,(n.minWidth&&s<n.minWidth||n.maxWidth&&s>n.maxWidth)&&(o=!1,TRC.pConsole("page","info","Mode '"+t+"' will not be displayed due to visibility constraints",n,"object"))))}catch(e){TRC.pConsole("page","error","Error while evaluating visibility constraints of mode '"+t+"': "+e.message)}return o}function W(){o=[]}function V(e){var n,o=s.global["use-loader-host"]?Z(TRC.baseDomain):null,i=o||"cdn.taboola.com";if(TRC.implLoaded)return void TRC.trcReady();a||(n=t.getElementsByTagName("script"),a=t.createElement("script"),n.length&&n[0].parentNode.insertBefore(a,n[0]),a.charset="UTF-8",a.type="text/javascript",a.src=z+"//"+i+"/libtrc/"+e,TRC.utm.push((new Date).getTime()-TRC.utm.start),TRC.pConsole("page","debug","loading impl file : '"+e+"'"))}function u(e,n){var o=t.getElementsByTagName("script"),s=t.createElement("script");n&&n.async?s.setAttribute("async",""):s.setAttribute("defer",""),s.src=e,o[0].parentNode.insertBefore(s,o[0]),TRC.pConsole("page","debug","loading : "+s.src)}function B(){if(h.length){for(var e,t;e=h.shift();)for(t in e)"onclick"==t?o.onclick=e[t]:l[t]=e[t];V("impl.183-1-RELEASE.js")}}function P(){re(),B(),b(),d(),S()}function x(t){var n,o;ne(t)||(ee(t),t.mode?(TRC.pConsole("page","info","push to '_taboola' - mode : "+t.mode,t,"object"),U(s,t.mode)&&i.push(t)):t.notify?"newPageLoad"==t.notify?(TRC.pConsole("page","info","push to '_taboola' - notification : newPageLoad"),I(),g.push(t)):m.push(t):(o=ae(t))?v.push({name:o,val:t[o]}):t.nextDaisyChain?H(t.nextDaisyChain):(n=Q("taboolax-load",e.location),(s.global["inject-taboolax"]||n)&&!_&&$(t)&&(y=n?C[n]:y,_=!0,L(y)),h.push(t)),t.flush&&(c=!0))}function H(e){var t="";"string"==typeof e?n.preloadRequest&&n.preloadRequest[e]?(TRC.pConsole("page","info","push to '_taboola' - nextDaisyChain : "+e),n.preloadRequest[e].dc.renderAd()):t=e:t="non recognized value",t&&(window.__trcError?__trcError("unrecognized nextDaisyChain : "+t):TRC.pConsole("page","error","unrecognized nextDaisyChain : "+e))}function ae(e){try{for(var t in e)if(0==t.indexOf("social-")&&e.hasOwnProperty(t))return t}catch{}return null}function ne(e){return!!e.throttle_pub&&("object"==typeof e.throttle_pub&&(f=e.throttle_pub),!0)}function ee(e){var t;try{if(!e.onrender)return;TRC.eventDelegator?t=TRC.eventDelegator.subscribe:(TRC.subscriptionRegister=[],t=function(e,t,n,s){TRC.subscriptionRegister.push({event:e,handler:t,container:s})}),t("onrender",e.onrender,e.container?N(e.container):null)}catch(e){__trcError&&__trcError("extractSubscription",e)}}function Q(e,t){var n,s,o=t.search.substr(1).split(/&/);for(n=0;n<o.length;n++)if(s=o[n].split(new RegExp("="),2),s[0]==e)return s[1];return null}function N(e){return"string"==typeof e?e:msg.container.id||"trc_cont_ "+parseInt(1e4*Math.random())}function $(t){var n;for(n in t)if(j.hasOwnProperty(n))return e[ie]=j[n],j[n];return null}function I(){i=[],h=[],m=[],g=[],v=[]}function T(e){if(e){TRC._taboolaClone.push(e);for(var t,n=0;n<arguments.length;n++)if(e=arguments[n],TRC.pConsole("page","debug","push to '_taboola'",e,"object"),e instanceof Array)for(t=0;t<e.length;t++)x(e[t]);else x(e);return P(),arguments.length}}function O(){var n;s.global["inject-comscore"]&&(e._comscore=e._comscore||[],u(("https:"==t.location.protocol?"https://sb":"http://b")+".scorecardresearch.com/beacon.js",{async:!0}),n={c1:"7",c2:"13739933",c3:"20121515121"},e._comscore.push(n),TRC.pConsole("page","info","injected comsocre",n,"object"))}function R(){s.global["inject-mdotlabs"]&&(u("//tags.mdotlabs.com/tracking.php?siteID=tBjQ&customUserValue="+TRC.publisherId,{async:!0}),TRC.pConsole("page","info","injected mdotlabs with publisher id : "+TRC.publisherId))}function G(){TRC.useStorageDetection=!!(s.global&&s.global["use-storage-detection"]===!0)}function L(e){u(e+"/"+TRC.publisherId+"/load.js",{async:!0}),TRC.pConsole("page","info","injected taboola-x with publisher id : "+TRC.publisherId)}if(!e.TRC||!e.TRC.utm){e.TRC&&(TRC.utm=[]),s={modes:{"ab_thumbnails-a_2x6":{"component-id":"rbox-blended",tabbed:!1,header:"No Header",expandable:!1,"list-size":10,orientation:"horizontal","navigation-type":"none","auto-scroll":"none","loading-animation-url":"hide","thumbnail-width":"6","thumbnail-height":"5",format:{views:"Views: %s",uploader:"By: %s",duration:"Duration: %s",rating:"Rating: %s"},"detail-order":"title,uploader",icons:!1,"format-number":function(e){for(var n,t="";e.length>3&&(n=e.match(/\d{3}\s*$/));)t=n.toString().replace(/\s+/,"")+","+t,e=e.replace(/\d{3}\s*$/,"",!1);return t=e+","+t,t.replace(/,$/,"")},"change-url":function(e){return e},"list-suffix":function(e,t){if(TRCImpl&&TRCImpl.modes[t.mode_name]&&!TRCImpl.modes[t.mode_name]["mode-is-responsive"])for(var s,n=0;n<t.boxes.length;n++)t.boxes[n].style.height="auto",n%(t.boxes.length/t.rows)==0&&n!=0&&(s=document.createElement("div"),s.style.clear="both",s.style.width="100%",e.insertBefore(s,t.boxes[n]))},"item-renderer":function(e,t){typeof window.trc_itemRenderer=="function"&&window.trc_itemRenderer(document.createElement("div"),t,!1)},title:"Related Videos","format-title":"%s","format-duration":"%s","format-description":"%s","format-category":"%s","format-uploader":"Read on %s","format-views":function(e){return"Views: "+this.formatNumber(e,!1)},"format-rating":"Rating: %s","format-published-date":function(e){return this.dateFormatISO(e,!1)},"sponsored-location":"top","thumbnail-position":"top","color-scheme":"White","pager-button-style":'<span class="pager-cont">&laquo;</span>|<span class="pager-cont">&raquo;</span>',"pager-position":"start","pager-type-style":"numbers",template:"Default","pager-button-location":"pager","pager-button-active-image":"","pager-button-inactive-image":"","pager-button-hover-image":"","pager-style-active-image":"","pager-style-inactive-image":"","pager-style-hover-image":"","lightbox-display-title":!0,"detail-order-ad":"title","layout-template":"Horizontal 4","style-template":"Light","attribution-position":"bottom","shade-scroll":!1,"attribution-text":"by Taboola","required-attributes":"none","auto-advance-animation":"down","auto-advance":"-1","format-external-data":"%s","item-data-filter":function(){},"gam-allow-trc-ads":!1,"thumbnail-position-ad":"inherit","impl-class":"TRCRBox","player-embed-code":function(){return""},"player-container-id":"trc_Embed_Container_Id","render-player-info":!1,"player-thumbnail-width":"75","player-thumbnail-height":"200","player-detail-order":"title,description","use-cdn-recommendations":!1,"syndicated-attribution":"","syndicated-attribution-tooltip":"","syndicated-attribution-position":"bottom-right","detail-order-syndicated":"title,branding","format-syndicator":function(e){return"Read on "+e},"syndicated-static-text":"","syndicated-static-text-position":"top-right","quantcast-label":"","cyclical-paging":!1,"after-visible":function(){},"link-target":"normal","auto-syndicated-attribution":!0,"remove-url-playvideo-behavior":!1,"auto-size":!1,"auto-size-rules":[{minWc:120,maxWc:349,minWsRange:8,maxWsRange:8,n:1},{minWc:350,maxWc:499,minWsRange:8,maxWsRange:9,n:2},{minWc:500,maxWc:749,minWsRange:8,maxWsRange:10,n:3},{minWc:750,maxWc:999,minWsRange:8,maxWsRange:11,n:4},{minWc:1e3,maxWc:1249,minWsRange:7,maxWsRange:11,n:5},{minWc:1250,maxWc:1499,minWsRange:6,maxWsRange:11,n:6},{minWc:1500,maxWc:1749,minWsRange:6,maxWsRange:12,n:7},{minWc:1750,maxWc:1920,minWsRange:6,maxWsRange:13,n:8}],rows:2,"widget-creator-layout":"autowidget-template-static","widget-creator-revision":"8134193","details-inline-with-title":"","mode-is-responsive":!0,"responsive-extra-columns":1,"responsive-rules":[{minWidth:0,maxWidth:499,margin:{v:2,h:2},rows:6,cells:1,virtualThumbWidth:2,virtualThumbHeight:1},{minWidth:500,maxWidth:820,margin:{v:6.75,h:6.75},rows:3,cells:2,virtualThumbWidth:16,virtualThumbHeight:9},{minWidth:821,margin:{v:5.38,h:5.38},rows:6,cells:2,virtualThumbWidth:16,virtualThumbHeight:9}],"image-lazy-load-space":200,"has-image-lazy-load":!1,"use-css-important":!0,"image-url-prefix":null,"image-size-factor":1,"image-min-width":100,"image-size-round":1,"image-max-dimension":1e3,"image-min-dimension":100,"mode-has-userx":!0,"min-width-for-disclosure":225,"min-width-for-attribution":325,"hide-disclosure-when-no-place":!1,"hide-attribution-when-no-place":!1,"disclosure-link-text-sponsored":"Sponsored Links","disclosure-link-text-hybrid":"Promoted Links","disclosure-link-text-organic":"","disclosure-position":"bottom","header-right":"No Header","use-browser-line-clamp":!0,"use-dpr-images":!0,slider:!1,"slider-slide-from":"bottom","slider-min-effective-scroll-size":20,"slider-transition-duration":600,"slider-transition-delay":200,"slider-background-color":"#666","slider-close-btn-font-size":"30px","slider-close-btn-size":"24px","slider-close-btn-color":"#FFF","slider-scroll-ref-element":function(){return window},"slider-z-index":25e5,"mode-adc-config":null,"images-radius":"0","visibility-constraints":{},"ios-sc-link-target-mode":null,"has-expand-animation":!1,"expand-animation-duration":1e3,"expand-animation-max-height":1e3,"read-more-config":null,"enable-read-more":!1,"mode-has-adchoice":!0,"adchoice-large":!1,"adchoice-position":"auto","adchoice-target-url":"","read-more-box-selector":""},"ab_thumbnails-a_abp-mode":{"component-id":"rbox-blended",tabbed:!1,header:"You May Like",expandable:!1,"list-size":10,orientation:"horizontal","navigation-type":"none","auto-scroll":"none","loading-animation-url":"hide","thumbnail-width":"2","thumbnail-height":"1",format:{views:"Views: %s",uploader:"By: %s",duration:"Duration: %s",rating:"Rating: %s"},"detail-order":"title,uploader",icons:!1,"format-number":function(e){for(var n,t="";e.length>3&&(n=e.match(/\d{3}\s*$/));)t=n.toString().replace(/\s+/,"")+","+t,e=e.replace(/\d{3}\s*$/,"",!1);return t=e+","+t,t.replace(/,$/,"")},"change-url":function(e){return e},"list-suffix":function(){},"item-renderer":function(e,t){typeof window.trc_itemRenderer=="function"&&window.trc_itemRenderer(document.createElement("div"),t,!1)},title:"Related Videos","format-title":"%s","format-duration":"%s","format-description":"%s","format-category":"%s","format-uploader":"Read on %s","format-views":function(e){return"Views: "+this.formatNumber(e,!1)},"format-rating":"Rating: %s","format-published-date":function(e){return this.dateFormatISO(e,!1)},"sponsored-location":"top","thumbnail-position":"start","color-scheme":"White","pager-button-style":'<span class="pager-cont">&laquo;</span>|<span class="pager-cont">&raquo;</span>',"pager-position":"start","pager-type-style":"numbers",template:"Default","pager-button-location":"pager","pager-button-active-image":"","pager-button-inactive-image":"","pager-button-hover-image":"","pager-style-active-image":"","pager-style-inactive-image":"","pager-style-hover-image":"","lightbox-display-title":!0,"detail-order-ad":"title","layout-template":"Horizontal 4","style-template":"Light","attribution-position":"top","shade-scroll":!1,"attribution-text":"by Taboola","required-attributes":"none","auto-advance-animation":"down","auto-advance":"-1","format-external-data":"%s","item-data-filter":function(){},"gam-allow-trc-ads":!1,"thumbnail-position-ad":"inherit","impl-class":"TRCRBox","player-embed-code":function(){return""},"player-container-id":"trc_Embed_Container_Id","render-player-info":!1,"player-thumbnail-width":"75","player-thumbnail-height":"200","player-detail-order":"title,description","use-cdn-recommendations":!1,"syndicated-attribution":"","syndicated-attribution-tooltip":"","syndicated-attribution-position":"bottom-right","detail-order-syndicated":"title,branding","format-syndicator":function(e){return"Read on "+e},"syndicated-static-text":"","syndicated-static-text-position":"top-right","quantcast-label":"","cyclical-paging":!1,"after-visible":function(){},"link-target":"normal","auto-syndicated-attribution":!0,"remove-url-playvideo-behavior":!1,"auto-size":!1,"auto-size-rules":[{minWc:120,maxWc:349,minWsRange:8,maxWsRange:8,n:1},{minWc:350,maxWc:499,minWsRange:8,maxWsRange:9,n:2},{minWc:500,maxWc:749,minWsRange:8,maxWsRange:10,n:3},{minWc:750,maxWc:999,minWsRange:8,maxWsRange:11,n:4},{minWc:1e3,maxWc:1249,minWsRange:7,maxWsRange:11,n:5},{minWc:1250,maxWc:1499,minWsRange:6,maxWsRange:11,n:6},{minWc:1500,maxWc:1749,minWsRange:6,maxWsRange:12,n:7},{minWc:1750,maxWc:1920,minWsRange:6,maxWsRange:13,n:8}],rows:2,"widget-creator-layout":"autowidget-template-stream","widget-creator-revision":"7718319","details-inline-with-title":"","mode-is-responsive":!0,"responsive-extra-columns":1,"responsive-rules":[{minWidth:0,margin:{v:2,h:2},rows:2,cells:1,virtualThumbWidth:244,virtualThumbHeight:138}],"image-lazy-load-space":200,"has-image-lazy-load":!1,"use-css-important":!0,"image-url-prefix":null,"image-size-factor":1,"image-min-width":100,"image-size-round":1,"image-max-dimension":1e3,"image-min-dimension":100,"mode-has-userx":!0,"min-width-for-disclosure":225,"min-width-for-attribution":325,"hide-disclosure-when-no-place":!1,"hide-attribution-when-no-place":!1,"disclosure-link-text-sponsored":"Sponsored Links","disclosure-link-text-hybrid":"Promoted Links","disclosure-link-text-organic":"","disclosure-position":"top","header-right":"No Header","use-browser-line-clamp":!0,"use-dpr-images":!0,slider:!1,"slider-slide-from":"bottom","slider-min-effective-scroll-size":20,"slider-transition-duration":600,"slider-transition-delay":200,"slider-background-color":"#666","slider-close-btn-font-size":"30px","slider-close-btn-size":"24px","slider-close-btn-color":"#FFF","slider-scroll-ref-element":function(){return window},"slider-z-index":25e5,"mode-adc-config":null,"images-radius":"0","visibility-constraints":{},"ios-sc-link-target-mode":null,"has-expand-animation":!1,"expand-animation-duration":1e3,"expand-animation-max-height":1e3,"read-more-config":null,"enable-read-more":!1,"mode-has-adchoice":!0,"adchoice-large":!1,"adchoice-position":"auto","adchoice-target-url":"","read-more-box-selector":""},"ab_thumbnails-a_text-under":{"component-id":"rbox-blended",tabbed:!1,header:"No Header",expandable:!1,"list-size":10,orientation:"horizontal","navigation-type":"none","auto-scroll":"none","loading-animation-url":"hide","thumbnail-width":"6","thumbnail-height":"5",format:{views:"Views: %s",uploader:"By: %s",duration:"Duration: %s",rating:"Rating: %s"},"detail-order":"title,uploader",icons:!1,"format-number":function(e){for(var n,t="";e.length>3&&(n=e.match(/\d{3}\s*$/));)t=n.toString().replace(/\s+/,"")+","+t,e=e.replace(/\d{3}\s*$/,"",!1);return t=e+","+t,t.replace(/,$/,"")},"change-url":function(e){return e},"list-suffix":function(e,t){if(TRCImpl&&TRCImpl.modes[t.mode_name]&&!TRCImpl.modes[t.mode_name]["mode-is-responsive"])for(var s,n=0;n<t.boxes.length;n++)t.boxes[n].style.height="auto",n%(t.boxes.length/t.rows)==0&&n!=0&&(s=document.createElement("div"),s.style.clear="both",s.style.width="100%",e.insertBefore(s,t.boxes[n]))},"item-renderer":function(e,t){typeof window.trc_itemRenderer=="function"&&window.trc_itemRenderer(document.createElement("div"),t,!1)},title:"Related Videos","format-title":"%s","format-duration":"%s","format-description":"%s","format-category":"%s","format-uploader":"Read on %s","format-views":function(e){return"Views: "+this.formatNumber(e,!1)},"format-rating":"Rating: %s","format-published-date":function(e){return this.dateFormatISO(e,!1)},"sponsored-location":"top","thumbnail-position":"top","color-scheme":"White","pager-button-style":'<span class="pager-cont">&laquo;</span>|<span class="pager-cont">&raquo;</span>',"pager-position":"start","pager-type-style":"numbers",template:"Default","pager-button-location":"pager","pager-button-active-image":"","pager-button-inactive-image":"","pager-button-hover-image":"","pager-style-active-image":"","pager-style-inactive-image":"","pager-style-hover-image":"","lightbox-display-title":!0,"detail-order-ad":"title","layout-template":"Horizontal 4","style-template":"Light","attribution-position":"bottom","shade-scroll":!1,"attribution-text":"by Taboola","required-attributes":"none","auto-advance-animation":"down","auto-advance":"-1","format-external-data":"%s","item-data-filter":function(){},"gam-allow-trc-ads":!1,"thumbnail-position-ad":"inherit","impl-class":"TRCRBox","player-embed-code":function(){return""},"player-container-id":"trc_Embed_Container_Id","render-player-info":!1,"player-thumbnail-width":"75","player-thumbnail-height":"200","player-detail-order":"title,description","use-cdn-recommendations":!1,"syndicated-attribution":"","syndicated-attribution-tooltip":"","syndicated-attribution-position":"bottom-right","detail-order-syndicated":"title,branding","format-syndicator":function(e){return"Read on "+e},"syndicated-static-text":"","syndicated-static-text-position":"top-right","quantcast-label":"","cyclical-paging":!1,"after-visible":function(){},"link-target":"normal","auto-syndicated-attribution":!0,"remove-url-playvideo-behavior":!1,"auto-size":!1,"auto-size-rules":[{minWc:120,maxWc:349,minWsRange:8,maxWsRange:8,n:1},{minWc:350,maxWc:499,minWsRange:8,maxWsRange:9,n:2},{minWc:500,maxWc:749,minWsRange:8,maxWsRange:10,n:3},{minWc:750,maxWc:999,minWsRange:8,maxWsRange:11,n:4},{minWc:1e3,maxWc:1249,minWsRange:7,maxWsRange:11,n:5},{minWc:1250,maxWc:1499,minWsRange:6,maxWsRange:11,n:6},{minWc:1500,maxWc:1749,minWsRange:6,maxWsRange:12,n:7},{minWc:1750,maxWc:1920,minWsRange:6,maxWsRange:13,n:8}],rows:2,"widget-creator-layout":"autowidget-template-static","widget-creator-revision":"8134193","details-inline-with-title":"","mode-is-responsive":!0,"responsive-extra-columns":1,"responsive-rules":[{minWidth:0,maxWidth:499,margin:{v:2,h:2},rows:6,cells:1,virtualThumbWidth:2,virtualThumbHeight:1},{minWidth:500,maxWidth:820,margin:{v:2,h:2},rows:3,cells:2,virtualThumbWidth:210,virtualThumbHeight:119},{minWidth:821,margin:{v:2,h:2},rows:2,cells:3,virtualThumbWidth:210,virtualThumbHeight:119}],"image-lazy-load-space":200,"has-image-lazy-load":!1,"use-css-important":!0,"image-url-prefix":null,"image-size-factor":1,"image-min-width":100,"image-size-round":1,"image-max-dimension":1e3,"image-min-dimension":100,"mode-has-userx":!0,"min-width-for-disclosure":225,"min-width-for-attribution":325,"hide-disclosure-when-no-place":!1,"hide-attribution-when-no-place":!1,"disclosure-link-text-sponsored":"Sponsored Links","disclosure-link-text-hybrid":"Promoted Links","disclosure-link-text-organic":"","disclosure-position":"bottom","header-right":"No Header","use-browser-line-clamp":!0,"use-dpr-images":!0,slider:!1,"slider-slide-from":"bottom","slider-min-effective-scroll-size":20,"slider-transition-duration":600,"slider-transition-delay":200,"slider-background-color":"#666","slider-close-btn-font-size":"30px","slider-close-btn-size":"24px","slider-close-btn-color":"#FFF","slider-scroll-ref-element":function(){return window},"slider-z-index":25e5,"mode-adc-config":null,"images-radius":"0","visibility-constraints":{},"ios-sc-link-target-mode":null,"has-expand-animation":!1,"expand-animation-duration":1e3,"expand-animation-max-height":1e3,"read-more-config":null,"enable-read-more":!1,"mode-has-adchoice":!0,"adchoice-large":!1,"adchoice-position":"auto","adchoice-target-url":"","read-more-box-selector":""},"ab_thumbnails-a_text-under2":{"component-id":"rbox-blended",tabbed:!1,header:"No Header",expandable:!1,"list-size":10,orientation:"horizontal","navigation-type":"none","auto-scroll":"none","loading-animation-url":"hide","thumbnail-width":"6","thumbnail-height":"5",format:{views:"Views: %s",uploader:"By: %s",duration:"Duration: %s",rating:"Rating: %s"},"detail-order":"title,uploader",icons:!1,"format-number":function(e){for(var n,t="";e.length>3&&(n=e.match(/\d{3}\s*$/));)t=n.toString().replace(/\s+/,"")+","+t,e=e.replace(/\d{3}\s*$/,"",!1);return t=e+","+t,t.replace(/,$/,"")},"change-url":function(e){return e},"list-suffix":function(e,t){if(TRCImpl&&TRCImpl.modes[t.mode_name]&&!TRCImpl.modes[t.mode_name]["mode-is-responsive"])for(var s,n=0;n<t.boxes.length;n++)t.boxes[n].style.height="auto",n%(t.boxes.length/t.rows)==0&&n!=0&&(s=document.createElement("div"),s.style.clear="both",s.style.width="100%",e.insertBefore(s,t.boxes[n]))},"item-renderer":function(e,t){typeof window.trc_itemRenderer=="function"&&window.trc_itemRenderer(document.createElement("div"),t,!1)},title:"Related Videos","format-title":"%s","format-duration":"%s","format-description":"%s","format-category":"%s","format-uploader":"Read on %s","format-views":function(e){return"Views: "+this.formatNumber(e,!1)},"format-rating":"Rating: %s","format-published-date":function(e){return this.dateFormatISO(e,!1)},"sponsored-location":"top","thumbnail-position":"top","color-scheme":"White","pager-button-style":'<span class="pager-cont">&laquo;</span>|<span class="pager-cont">&raquo;</span>',"pager-position":"start","pager-type-style":"numbers",template:"Default","pager-button-location":"pager","pager-button-active-image":"","pager-button-inactive-image":"","pager-button-hover-image":"","pager-style-active-image":"","pager-style-inactive-image":"","pager-style-hover-image":"","lightbox-display-title":!0,"detail-order-ad":"title","layout-template":"Horizontal 4","style-template":"Light","attribution-position":"bottom","shade-scroll":!1,"attribution-text":"by Taboola","required-attributes":"none","auto-advance-animation":"down","auto-advance":"-1","format-external-data":"%s","item-data-filter":function(){},"gam-allow-trc-ads":!1,"thumbnail-position-ad":"inherit","impl-class":"TRCRBox","player-embed-code":function(){return""},"player-container-id":"trc_Embed_Container_Id","render-player-info":!1,"player-thumbnail-width":"75","player-thumbnail-height":"200","player-detail-order":"title,description","use-cdn-recommendations":!1,"syndicated-attribution":"","syndicated-attribution-tooltip":"","syndicated-attribution-position":"bottom-right","detail-order-syndicated":"title,branding","format-syndicator":function(e){return"Read on "+e},"syndicated-static-text":"","syndicated-static-text-position":"top-right","quantcast-label":"","cyclical-paging":!1,"after-visible":function(){},"link-target":"normal","auto-syndicated-attribution":!0,"remove-url-playvideo-behavior":!1,"auto-size":!1,"auto-size-rules":[{minWc:120,maxWc:349,minWsRange:8,maxWsRange:8,n:1},{minWc:350,maxWc:499,minWsRange:8,maxWsRange:9,n:2},{minWc:500,maxWc:749,minWsRange:8,maxWsRange:10,n:3},{minWc:750,maxWc:999,minWsRange:8,maxWsRange:11,n:4},{minWc:1e3,maxWc:1249,minWsRange:7,maxWsRange:11,n:5},{minWc:1250,maxWc:1499,minWsRange:6,maxWsRange:11,n:6},{minWc:1500,maxWc:1749,minWsRange:6,maxWsRange:12,n:7},{minWc:1750,maxWc:1920,minWsRange:6,maxWsRange:13,n:8}],rows:2,"widget-creator-layout":"autowidget-template-static","widget-creator-revision":"8134193","details-inline-with-title":"","mode-is-responsive":!0,"responsive-extra-columns":1,"responsive-rules":[{minWidth:0,maxWidth:499,margin:{v:2,h:2},rows:6,cells:1,virtualThumbWidth:2,virtualThumbHeight:1},{minWidth:500,maxWidth:820,margin:{v:6.75,h:6.75},rows:3,cells:2,virtualThumbWidth:16,virtualThumbHeight:9},{minWidth:821,margin:{v:5.38,h:5.38},rows:2,cells:3,virtualThumbWidth:16,virtualThumbHeight:9}],"image-lazy-load-space":200,"has-image-lazy-load":!1,"use-css-important":!0,"image-url-prefix":null,"image-size-factor":1,"image-min-width":100,"image-size-round":1,"image-max-dimension":1e3,"image-min-dimension":100,"mode-has-userx":!0,"min-width-for-disclosure":225,"min-width-for-attribution":325,"hide-disclosure-when-no-place":!1,"hide-attribution-when-no-place":!1,"disclosure-link-text-sponsored":"Sponsored Links","disclosure-link-text-hybrid":"Promoted Links","disclosure-link-text-organic":"","disclosure-position":"bottom","header-right":"No Header","use-browser-line-clamp":!0,"use-dpr-images":!0,slider:!1,"slider-slide-from":"bottom","slider-min-effective-scroll-size":20,"slider-transition-duration":600,"slider-transition-delay":200,"slider-background-color":"#666","slider-close-btn-font-size":"30px","slider-close-btn-size":"24px","slider-close-btn-color":"#FFF","slider-scroll-ref-element":function(){return window},"slider-z-index":25e5,"mode-adc-config":null,"images-radius":"0","visibility-constraints":{},"ios-sc-link-target-mode":null,"has-expand-animation":!1,"expand-animation-duration":1e3,"expand-animation-max-height":1e3,"read-more-config":null,"enable-read-more":!1,"mode-has-adchoice":!0,"adchoice-large":!1,"adchoice-position":"auto","adchoice-target-url":"","read-more-box-selector":""},"mobile-thumbnails-a":{"component-id":"rbox-blended",tabbed:!1,header:"No Header",expandable:!1,"list-size":10,orientation:"horizontal","navigation-type":"none","auto-scroll":"none","loading-animation-url":"hide","thumbnail-width":"2","thumbnail-height":"1",format:{views:"Views: %s",uploader:"By: %s",duration:"Duration: %s",rating:"Rating: %s"},"detail-order":"title,uploader",icons:!1,"format-number":function(e){for(var n,t="";e.length>3&&(n=e.match(/\d{3}\s*$/));)t=n.toString().replace(/\s+/,"")+","+t,e=e.replace(/\d{3}\s*$/,"",!1);return t=e+","+t,t.replace(/,$/,"")},"change-url":function(e){return e},"list-suffix":function(e,t){if(TRCImpl&&TRCImpl.modes[t.mode_name]&&!TRCImpl.modes[t.mode_name]["mode-is-responsive"])for(var s,n=0;n<t.boxes.length;n++)t.boxes[n].style.height="auto",n%(t.boxes.length/t.rows)==0&&n!=0&&(s=document.createElement("div"),s.style.clear="both",s.style.width="100%",e.insertBefore(s,t.boxes[n]))},"item-renderer":function(e,t){typeof window.trc_itemRenderer=="function"&&window.trc_itemRenderer(document.createElement("div"),t,!1)},title:"Related Videos","format-title":"%s","format-duration":"%s","format-description":"%s","format-category":"%s","format-uploader":"Read on %s","format-views":function(e){return"Views: "+this.formatNumber(e,!1)},"format-rating":"Rating: %s","format-published-date":function(e){return this.dateFormatISO(e,!1)},"sponsored-location":"top","thumbnail-position":"top","color-scheme":"White","pager-button-style":'<span class="pager-cont">&laquo;</span>|<span class="pager-cont">&raquo;</span>',"pager-position":"start","pager-type-style":"numbers",template:"Default","pager-button-location":"pager","pager-button-active-image":"","pager-button-inactive-image":"","pager-button-hover-image":"","pager-style-active-image":"","pager-style-inactive-image":"","pager-style-hover-image":"","lightbox-display-title":!0,"detail-order-ad":"title","layout-template":"Horizontal 4","style-template":"Light","attribution-position":"bottom","shade-scroll":!1,"attribution-text":"by Taboola","required-attributes":"none","auto-advance-animation":"down","auto-advance":"-1","format-external-data":"%s","item-data-filter":function(){},"gam-allow-trc-ads":!1,"thumbnail-position-ad":"inherit","impl-class":"TRCRBox","player-embed-code":function(){return""},"player-container-id":"trc_Embed_Container_Id","render-player-info":!1,"player-thumbnail-width":"75","player-thumbnail-height":"200","player-detail-order":"title,description","use-cdn-recommendations":!1,"syndicated-attribution":"","syndicated-attribution-tooltip":"","syndicated-attribution-position":"bottom-right","detail-order-syndicated":"title,branding","format-syndicator":function(e){return"Read at "+e},"syndicated-static-text":"","syndicated-static-text-position":"top-right","quantcast-label":"","cyclical-paging":!1,"after-visible":function(){},"link-target":"normal","auto-syndicated-attribution":!0,"remove-url-playvideo-behavior":!1,"auto-size":!1,"auto-size-rules":[{minWc:120,maxWc:349,minWsRange:8,maxWsRange:8,n:1},{minWc:350,maxWc:499,minWsRange:8,maxWsRange:9,n:2},{minWc:500,maxWc:749,minWsRange:8,maxWsRange:10,n:3},{minWc:750,maxWc:999,minWsRange:8,maxWsRange:11,n:4},{minWc:1e3,maxWc:1249,minWsRange:7,maxWsRange:11,n:5},{minWc:1250,maxWc:1499,minWsRange:6,maxWsRange:11,n:6},{minWc:1500,maxWc:1749,minWsRange:6,maxWsRange:12,n:7},{minWc:1750,maxWc:1920,minWsRange:6,maxWsRange:13,n:8}],rows:4,"widget-creator-layout":"autowidget-template-static","widget-creator-revision":"7718648","details-inline-with-title":"","mode-is-responsive":!0,"responsive-extra-columns":1,"responsive-rules":[{minWidth:0,margin:{v:0,h:0},rows:4,cells:1,virtualThumbWidth:320,virtualThumbHeight:180}],"image-lazy-load-space":200,"has-image-lazy-load":!1,"use-css-important":!0,"image-url-prefix":null,"image-size-factor":1,"image-min-width":100,"image-size-round":1,"image-max-dimension":1e3,"image-min-dimension":100,"mode-has-userx":!0,"min-width-for-disclosure":225,"min-width-for-attribution":325,"hide-disclosure-when-no-place":!1,"hide-attribution-when-no-place":!1,"disclosure-link-text-sponsored":"Sponsored Links","disclosure-link-text-hybrid":"Promoted Links","disclosure-link-text-organic":"","disclosure-position":"bottom","header-right":"No Header","use-browser-line-clamp":!0,"use-dpr-images":!0,slider:!1,"slider-slide-from":"bottom","slider-min-effective-scroll-size":20,"slider-transition-duration":600,"slider-transition-delay":200,"slider-background-color":"#666","slider-close-btn-font-size":"30px","slider-close-btn-size":"24px","slider-close-btn-color":"#FFF","slider-scroll-ref-element":function(){return window},"slider-z-index":25e5,"mode-adc-config":null,"images-radius":"0","visibility-constraints":{},"ios-sc-link-target-mode":null,"has-expand-animation":!1,"expand-animation-duration":1e3,"expand-animation-max-height":1e3,"read-more-config":null,"enable-read-more":!1,"mode-has-adchoice":!0,"adchoice-large":!1,"adchoice-position":"auto","adchoice-target-url":"","read-more-box-selector":""},"organic-thumbnails-a":{"component-id":"rbox-blended",tabbed:!1,header:"No Header",expandable:!1,"list-size":10,orientation:"horizontal","navigation-type":"none","auto-scroll":"none","loading-animation-url":"hide","thumbnail-width":"2","thumbnail-height":"1",format:{views:"Views: %s",uploader:"By: %s",duration:"Duration: %s",rating:"Rating: %s"},"detail-order":"title,uploader",icons:!1,"format-number":function(e){for(var n,t="";e.length>3&&(n=e.match(/\d{3}\s*$/));)t=n.toString().replace(/\s+/,"")+","+t,e=e.replace(/\d{3}\s*$/,"",!1);return t=e+","+t,t.replace(/,$/,"")},"change-url":function(e){return e},"list-suffix":function(){},"item-renderer":function(e,t){typeof window.trc_itemRenderer=="function"&&window.trc_itemRenderer(document.createElement("div"),t,!1)},title:"Related Videos","format-title":"%s","format-duration":"%s","format-description":"%s","format-category":"%s","format-uploader":"Read on %s","format-views":function(e){return"Views: "+this.formatNumber(e,!1)},"format-rating":"Rating: %s","format-published-date":function(e){return this.dateFormatISO(e,!1)},"sponsored-location":"top","thumbnail-position":"start","color-scheme":"White","pager-button-style":'<span class="pager-cont">&laquo;</span>|<span class="pager-cont">&raquo;</span>',"pager-position":"start","pager-type-style":"numbers",template:"Default","pager-button-location":"pager","pager-button-active-image":"","pager-button-inactive-image":"","pager-button-hover-image":"","pager-style-active-image":"","pager-style-inactive-image":"","pager-style-hover-image":"","lightbox-display-title":!0,"detail-order-ad":"title","layout-template":"Horizontal 4","style-template":"Light","attribution-position":"bottom","shade-scroll":!1,"attribution-text":"by Taboola","required-attributes":"none","auto-advance-animation":"down","auto-advance":"-1","format-external-data":"%s","item-data-filter":function(){},"gam-allow-trc-ads":!1,"thumbnail-position-ad":"inherit","impl-class":"TRCRBox","player-embed-code":function(){return""},"player-container-id":"trc_Embed_Container_Id","render-player-info":!1,"player-thumbnail-width":"75","player-thumbnail-height":"200","player-detail-order":"title,description","use-cdn-recommendations":!1,"syndicated-attribution":"","syndicated-attribution-tooltip":"","syndicated-attribution-position":"bottom-right","detail-order-syndicated":"title,branding","format-syndicator":function(e){return"Read on "+e},"syndicated-static-text":"","syndicated-static-text-position":"top-right","quantcast-label":"","cyclical-paging":!1,"after-visible":function(){},"link-target":"normal","auto-syndicated-attribution":!0,"remove-url-playvideo-behavior":!1,"auto-size":!1,"auto-size-rules":[{minWc:120,maxWc:349,minWsRange:8,maxWsRange:8,n:1},{minWc:350,maxWc:499,minWsRange:8,maxWsRange:9,n:2},{minWc:500,maxWc:749,minWsRange:8,maxWsRange:10,n:3},{minWc:750,maxWc:999,minWsRange:8,maxWsRange:11,n:4},{minWc:1e3,maxWc:1249,minWsRange:7,maxWsRange:11,n:5},{minWc:1250,maxWc:1499,minWsRange:6,maxWsRange:11,n:6},{minWc:1500,maxWc:1749,minWsRange:6,maxWsRange:12,n:7},{minWc:1750,maxWc:1920,minWsRange:6,maxWsRange:13,n:8}],rows:4,"widget-creator-layout":"autowidget-template-stream","widget-creator-revision":"7718319","details-inline-with-title":"","mode-is-responsive":!0,"responsive-extra-columns":1,"responsive-rules":[{minWidth:0,margin:{v:2,h:2},rows:4,cells:1,virtualThumbWidth:244,virtualThumbHeight:138}],"image-lazy-load-space":200,"has-image-lazy-load":!1,"use-css-important":!0,"image-url-prefix":null,"image-size-factor":1,"image-min-width":100,"image-size-round":1,"image-max-dimension":1e3,"image-min-dimension":100,"mode-has-userx":!0,"min-width-for-disclosure":225,"min-width-for-attribution":325,"hide-disclosure-when-no-place":!1,"hide-attribution-when-no-place":!1,"disclosure-link-text-sponsored":"Sponsored Links","disclosure-link-text-hybrid":"Promoted Links","disclosure-link-text-organic":"","disclosure-position":"bottom","header-right":"No Header","use-browser-line-clamp":!0,"use-dpr-images":!0,slider:!1,"slider-slide-from":"bottom","slider-min-effective-scroll-size":20,"slider-transition-duration":600,"slider-transition-delay":200,"slider-background-color":"#666","slider-close-btn-font-size":"30px","slider-close-btn-size":"24px","slider-close-btn-color":"#FFF","slider-scroll-ref-element":function(){return window},"slider-z-index":25e5,"mode-adc-config":null,"images-radius":"0","visibility-constraints":{},"ios-sc-link-target-mode":null,"has-expand-animation":!1,"expand-animation-duration":1e3,"expand-animation-max-height":1e3,"read-more-config":null,"enable-read-more":!1,"mode-has-adchoice":!0,"adchoice-large":!1,"adchoice-position":"auto","adchoice-target-url":"","read-more-box-selector":""},"rbox-blended":{"component-id":"rbox-blended",tabbed:!1,header:"Videos",expandable:!1,"list-size":10,orientation:"vertical","navigation-type":"scrolling","auto-scroll":"none","loading-animation-url":"hide","thumbnail-width":"75","thumbnail-height":"55",format:{views:"Views: %s",uploader:"By: %s",duration:"Duration: %s",rating:"Rating: %s"},"detail-order":"title,description",icons:!1,"format-number":function(e){for(var n,t="";e.length>3&&(n=e.match(/\d{3}\s*$/));)t=n.toString().replace(/\s+/,"")+","+t,e=e.replace(/\d{3}\s*$/,"",!1);return t=e+","+t,t.replace(/,$/,"")},"change-url":function(e){return e},"list-suffix":function(){},"item-renderer":function(e,t){typeof window.trc_itemRenderer=="function"&&window.trc_itemRenderer(document.createElement("div"),t,!1)},title:"Related Videos","format-title":"%s","format-duration":"%s","format-description":"%s","format-category":"%s","format-uploader":"User: %s","format-views":function(e){return"Views: "+this.formatNumber(e,!1)},"format-rating":"Rating: %s","format-published-date":function(e){return this.dateFormatISO(e,!1)},"sponsored-location":"top","thumbnail-position":"start","color-scheme":"White","pager-button-style":'<span class="pager-cont">&laquo;</span>|<span class="pager-cont">&raquo;</span>',"pager-position":"start","pager-type-style":"numbers",template:"Default","pager-button-location":"pager","pager-button-active-image":"","pager-button-inactive-image":"","pager-button-hover-image":"","pager-style-active-image":"","pager-style-inactive-image":"","pager-style-hover-image":"","lightbox-display-title":!0,"detail-order-ad":"title","layout-template":"Horizontal 4","style-template":"Light","attribution-position":"bottom","shade-scroll":!1,"attribution-text":'<span>by<span style="font-size:12px;">Taboola</span></span>',"required-attributes":"none","auto-advance-animation":"down","auto-advance":"-1","format-external-data":"%s","item-data-filter":function(){},"gam-allow-trc-ads":!1,"thumbnail-position-ad":"inherit","impl-class":"TRCRBox","player-embed-code":function(){return""},"player-container-id":"trc_Embed_Container_Id","render-player-info":!1,"player-thumbnail-width":"75","player-thumbnail-height":"200","player-detail-order":"title,description","use-cdn-recommendations":!1,"syndicated-attribution":"","syndicated-attribution-tooltip":"","syndicated-attribution-position":"bottom-right","detail-order-syndicated":"branding,title","format-syndicator":function(e){return e},"syndicated-static-text":"Sponsored","syndicated-static-text-position":"top-right","quantcast-label":"","cyclical-paging":!1,"after-visible":function(){},"link-target":"normal","auto-syndicated-attribution":!0,"remove-url-playvideo-behavior":!1,"auto-size":!1,"auto-size-rules":[{minWc:120,maxWc:249,minWsRange:8,maxWsRange:8,n:1},{minWc:250,maxWc:379,minWsRange:8,maxWsRange:9,n:2},{minWc:380,maxWc:609,minWsRange:8,maxWsRange:10,n:3},{minWc:610,maxWc:749,minWsRange:8,maxWsRange:11,n:4},{minWc:750,maxWc:1029,minWsRange:7,maxWsRange:11,n:5},{minWc:1030,maxWc:1419,minWsRange:6,maxWsRange:11,n:6},{minWc:1420,maxWc:1729,minWsRange:6,maxWsRange:12,n:7},{minWc:1730,maxWc:1920,minWsRange:6,maxWsRange:13,n:8}],rows:1,"widget-creator-layout":"autowidget-template","widget-creator-revision":"-1","details-inline-with-title":"","mode-is-responsive":!1,"responsive-extra-columns":1,"responsive-rules":null,"image-lazy-load-space":200,"has-image-lazy-load":!1,"use-css-important":!1,"image-url-prefix":null,"image-size-factor":1,"image-min-width":100,"image-size-round":1,"image-max-dimension":1e3,"image-min-dimension":100,"mode-has-userx":!0,"min-width-for-disclosure":225,"min-width-for-attribution":325,"hide-disclosure-when-no-place":!1,"hide-attribution-when-no-place":!1,"disclosure-link-text-sponsored":"Sponsored Links","disclosure-link-text-hybrid":"Promoted Links","disclosure-link-text-organic":"","disclosure-position":"top","header-right":"No Header","use-browser-line-clamp":!0,"use-dpr-images":!0,slider:!1,"slider-slide-from":"bottom","slider-min-effective-scroll-size":20,"slider-transition-duration":600,"slider-transition-delay":200,"slider-background-color":"#666","slider-close-btn-font-size":"30px","slider-close-btn-size":"24px","slider-close-btn-color":"#FFF","slider-scroll-ref-element":function(){return window},"slider-z-index":25e5,"mode-adc-config":null,"images-radius":"0","visibility-constraints":{},"ios-sc-link-target-mode":null,"has-expand-animation":!1,"expand-animation-duration":1e3,"expand-animation-max-height":1e3,"read-more-config":null,"enable-read-more":!1,"mode-has-adchoice":!0,"adchoice-large":!1,"adchoice-position":"auto","adchoice-target-url":"","read-more-box-selector":""},"thumbnails-a":{"component-id":"rbox-blended",tabbed:!1,header:"No Header",expandable:!1,"list-size":10,orientation:"horizontal","navigation-type":"none","auto-scroll":"none","loading-animation-url":"hide","thumbnail-width":"2","thumbnail-height":"1",format:{views:"Views: %s",uploader:"By: %s",duration:"Duration: %s",rating:"Rating: %s"},"detail-order":"title,uploader",icons:!1,"format-number":function(e){for(var n,t="";e.length>3&&(n=e.match(/\d{3}\s*$/));)t=n.toString().replace(/\s+/,"")+","+t,e=e.replace(/\d{3}\s*$/,"",!1);return t=e+","+t,t.replace(/,$/,"")},"change-url":function(e){return e},"list-suffix":function(){},"item-renderer":function(e,t){typeof window.trc_itemRenderer=="function"&&window.trc_itemRenderer(document.createElement("div"),t,!1)},title:"Related Videos","format-title":"%s","format-duration":"%s","format-description":"%s","format-category":"%s","format-uploader":"Read on %s","format-views":function(e){return"Views: "+this.formatNumber(e,!1)},"format-rating":"Rating: %s","format-published-date":function(e){return this.dateFormatISO(e,!1)},"sponsored-location":"top","thumbnail-position":"start","color-scheme":"White","pager-button-style":'<span class="pager-cont">&laquo;</span>|<span class="pager-cont">&raquo;</span>',"pager-position":"start","pager-type-style":"numbers",template:"Default","pager-button-location":"pager","pager-button-active-image":"","pager-button-inactive-image":"","pager-button-hover-image":"","pager-style-active-image":"","pager-style-inactive-image":"","pager-style-hover-image":"","lightbox-display-title":!0,"detail-order-ad":"title","layout-template":"Horizontal 4","style-template":"Light","attribution-position":"bottom","shade-scroll":!1,"attribution-text":"by Taboola","required-attributes":"none","auto-advance-animation":"down","auto-advance":"-1","format-external-data":"%s","item-data-filter":function(){},"gam-allow-trc-ads":!1,"thumbnail-position-ad":"inherit","impl-class":"TRCRBox","player-embed-code":function(){return""},"player-container-id":"trc_Embed_Container_Id","render-player-info":!1,"player-thumbnail-width":"75","player-thumbnail-height":"200","player-detail-order":"title,description","use-cdn-recommendations":!1,"syndicated-attribution":"","syndicated-attribution-tooltip":"","syndicated-attribution-position":"bottom-right","detail-order-syndicated":"title,branding","format-syndicator":function(e){return"Read on "+e},"syndicated-static-text":"","syndicated-static-text-position":"top-right","quantcast-label":"","cyclical-paging":!1,"after-visible":function(){},"link-target":"normal","auto-syndicated-attribution":!0,"remove-url-playvideo-behavior":!1,"auto-size":!1,"auto-size-rules":[{minWc:120,maxWc:349,minWsRange:8,maxWsRange:8,n:1},{minWc:350,maxWc:499,minWsRange:8,maxWsRange:9,n:2},{minWc:500,maxWc:749,minWsRange:8,maxWsRange:10,n:3},{minWc:750,maxWc:999,minWsRange:8,maxWsRange:11,n:4},{minWc:1e3,maxWc:1249,minWsRange:7,maxWsRange:11,n:5},{minWc:1250,maxWc:1499,minWsRange:6,maxWsRange:11,n:6},{minWc:1500,maxWc:1749,minWsRange:6,maxWsRange:12,n:7},{minWc:1750,maxWc:1920,minWsRange:6,maxWsRange:13,n:8}],rows:4,"widget-creator-layout":"autowidget-template-stream","widget-creator-revision":"7718319","details-inline-with-title":"","mode-is-responsive":!0,"responsive-extra-columns":1,"responsive-rules":[{minWidth:0,margin:{v:2,h:2},rows:12,cells:1,virtualThumbWidth:244,virtualThumbHeight:138}],"image-lazy-load-space":200,"has-image-lazy-load":!1,"use-css-important":!0,"image-url-prefix":null,"image-size-factor":1,"image-min-width":100,"image-size-round":1,"image-max-dimension":1e3,"image-min-dimension":100,"mode-has-userx":!0,"min-width-for-disclosure":225,"min-width-for-attribution":325,"hide-disclosure-when-no-place":!1,"hide-attribution-when-no-place":!1,"disclosure-link-text-sponsored":"Sponsored Links","disclosure-link-text-hybrid":"Promoted Links","disclosure-link-text-organic":"","disclosure-position":"bottom","header-right":"No Header","use-browser-line-clamp":!0,"use-dpr-images":!0,slider:!1,"slider-slide-from":"bottom","slider-min-effective-scroll-size":20,"slider-transition-duration":600,"slider-transition-delay":200,"slider-background-color":"#666","slider-close-btn-font-size":"30px","slider-close-btn-size":"24px","slider-close-btn-color":"#FFF","slider-scroll-ref-element":function(){return window},"slider-z-index":25e5,"mode-adc-config":null,"images-radius":"0","visibility-constraints":{},"ios-sc-link-target-mode":null,"has-expand-animation":!1,"expand-animation-duration":1e3,"expand-animation-max-height":1e3,"read-more-config":null,"enable-read-more":!1,"mode-has-adchoice":!0,"adchoice-large":!1,"adchoice-position":"auto","adchoice-target-url":"","read-more-box-selector":""},"thumbnails-b":{"component-id":"rbox-blended",tabbed:!1,header:"No Header",expandable:!1,"list-size":10,orientation:"horizontal","navigation-type":"none","auto-scroll":"none","loading-animation-url":"hide","thumbnail-width":"6","thumbnail-height":"5",format:{views:"Views: %s",uploader:"By: %s",duration:"Duration: %s",rating:"Rating: %s"},"detail-order":"title",icons:!1,"format-number":function(e){for(var n,t="";e.length>3&&(n=e.match(/\d{3}\s*$/));)t=n.toString().replace(/\s+/,"")+","+t,e=e.replace(/\d{3}\s*$/,"",!1);return t=e+","+t,t.replace(/,$/,"")},"change-url":function(e){return e},"list-suffix":function(e,t){if(TRCImpl&&TRCImpl.modes[t.mode_name]&&!TRCImpl.modes[t.mode_name]["mode-is-responsive"])for(var s,n=0;n<t.boxes.length;n++)t.boxes[n].style.height="auto",n%(t.boxes.length/t.rows)==0&&n!=0&&(s=document.createElement("div"),s.style.clear="both",s.style.width="100%",e.insertBefore(s,t.boxes[n]))},"item-renderer":function(e,t){typeof window.trc_itemRenderer=="function"&&window.trc_itemRenderer(document.createElement("div"),t,!1)},title:"Related Videos","format-title":"%s","format-duration":"%s","format-description":"%s","format-category":"%s","format-uploader":"User: %s","format-views":function(e){return"Views: "+this.formatNumber(e,!1)},"format-rating":"Rating: %s","format-published-date":function(e){return this.dateFormatISO(e,!1)},"sponsored-location":"top","thumbnail-position":"top","color-scheme":"White","pager-button-style":'<span class="pager-cont">&laquo;</span>|<span class="pager-cont">&raquo;</span>',"pager-position":"start","pager-type-style":"numbers",template:"Default","pager-button-location":"pager","pager-button-active-image":"","pager-button-inactive-image":"","pager-button-hover-image":"","pager-style-active-image":"","pager-style-inactive-image":"","pager-style-hover-image":"","lightbox-display-title":!0,"detail-order-ad":"title","layout-template":"Horizontal 4","style-template":"Light","attribution-position":"none","shade-scroll":!1,"attribution-text":"by Taboola","required-attributes":"none","auto-advance-animation":"down","auto-advance":"-1","format-external-data":"%s","item-data-filter":function(){},"gam-allow-trc-ads":!1,"thumbnail-position-ad":"inherit","impl-class":"TRCRBox","player-embed-code":function(){return""},"player-container-id":"trc_Embed_Container_Id","render-player-info":!1,"player-thumbnail-width":"75","player-thumbnail-height":"200","player-detail-order":"title,description","use-cdn-recommendations":!1,"syndicated-attribution":"","syndicated-attribution-tooltip":"","syndicated-attribution-position":"bottom-right","detail-order-syndicated":"title,branding","format-syndicator":function(e){return e},"syndicated-static-text":"","syndicated-static-text-position":"top-right","quantcast-label":"","cyclical-paging":!1,"after-visible":function(){},"link-target":"normal","auto-syndicated-attribution":!0,"remove-url-playvideo-behavior":!1,"auto-size":!1,"auto-size-rules":[{minWc:120,maxWc:349,minWsRange:8,maxWsRange:8,n:1},{minWc:350,maxWc:499,minWsRange:8,maxWsRange:9,n:2},{minWc:500,maxWc:749,minWsRange:8,maxWsRange:10,n:3},{minWc:750,maxWc:999,minWsRange:8,maxWsRange:11,n:4},{minWc:1e3,maxWc:1249,minWsRange:7,maxWsRange:11,n:5},{minWc:1250,maxWc:1499,minWsRange:6,maxWsRange:11,n:6},{minWc:1500,maxWc:1749,minWsRange:6,maxWsRange:12,n:7},{minWc:1750,maxWc:1920,minWsRange:6,maxWsRange:13,n:8}],rows:2,"widget-creator-layout":"autowidget-template-static","widget-creator-revision":"8516872","details-inline-with-title":"","mode-is-responsive":!0,"responsive-extra-columns":1,"responsive-rules":[{minWidth:0,margin:{v:0,h:0},rows:1,cells:1,virtualThumbWidth:3,virtualThumbHeight:2}],"image-lazy-load-space":200,"has-image-lazy-load":!1,"use-css-important":!0,"image-url-prefix":null,"image-size-factor":1,"image-min-width":100,"image-size-round":1,"image-max-dimension":1e3,"image-min-dimension":100,"mode-has-userx":!0,"min-width-for-disclosure":225,"min-width-for-attribution":325,"hide-disclosure-when-no-place":!1,"hide-attribution-when-no-place":!1,"disclosure-link-text-sponsored":"Sponsored Links","disclosure-link-text-hybrid":"Promoted Links","disclosure-link-text-organic":"","disclosure-position":"none","header-right":"No Header","use-browser-line-clamp":!0,"use-dpr-images":!0,slider:!1,"slider-slide-from":"bottom","slider-min-effective-scroll-size":20,"slider-transition-duration":600,"slider-transition-delay":200,"slider-background-color":"#666","slider-close-btn-font-size":"30px","slider-close-btn-size":"24px","slider-close-btn-color":"#FFF","slider-scroll-ref-element":function(){return window},"slider-z-index":25e5,"mode-adc-config":null,"images-radius":"0","visibility-constraints":{},"ios-sc-link-target-mode":null,"has-expand-animation":!1,"expand-animation-duration":1e3,"expand-animation-max-height":1e3,"read-more-config":null,"enable-read-more":!1,"mode-has-adchoice":!1,"adchoice-large":!1,"adchoice-position":"auto","adchoice-target-url":"","read-more-box-selector":""},"thumbnails-c":{"component-id":"rbox-blended",tabbed:!1,header:"No Header",expandable:!1,"list-size":10,orientation:"horizontal","navigation-type":"none","auto-scroll":"none","loading-animation-url":"hide","thumbnail-width":"6","thumbnail-height":"5",format:{views:"Views: %s",uploader:"By: %s",duration:"Duration: %s",rating:"Rating: %s"},"detail-order":"title",icons:!1,"format-number":function(e){for(var n,t="";e.length>3&&(n=e.match(/\d{3}\s*$/));)t=n.toString().replace(/\s+/,"")+","+t,e=e.replace(/\d{3}\s*$/,"",!1);return t=e+","+t,t.replace(/,$/,"")},"change-url":function(e){return e},"list-suffix":function(){},"item-renderer":function(e,t){typeof window.trc_itemRenderer=="function"&&window.trc_itemRenderer(document.createElement("div"),t,!1)},title:"Related Videos","format-title":"%s","format-duration":"%s","format-description":"%s","format-category":"%s","format-uploader":"User: %s","format-views":function(e){return"Views: "+this.formatNumber(e,!1)},"format-rating":"Rating: %s","format-published-date":function(e){return this.dateFormatISO(e,!1)},"sponsored-location":"top","thumbnail-position":"start","color-scheme":"White","pager-button-style":'<span class="pager-cont">&laquo;</span>|<span class="pager-cont">&raquo;</span>',"pager-position":"start","pager-type-style":"numbers",template:"Default","pager-button-location":"pager","pager-button-active-image":"","pager-button-inactive-image":"","pager-button-hover-image":"","pager-style-active-image":"","pager-style-inactive-image":"","pager-style-hover-image":"","lightbox-display-title":!0,"detail-order-ad":"title","layout-template":"Horizontal 4","style-template":"Light","attribution-position":"none","shade-scroll":!1,"attribution-text":"by Taboola","required-attributes":"none","auto-advance-animation":"down","auto-advance":"-1","format-external-data":"%s","item-data-filter":function(){},"gam-allow-trc-ads":!1,"thumbnail-position-ad":"inherit","impl-class":"TRCRBox","player-embed-code":function(){return""},"player-container-id":"trc_Embed_Container_Id","render-player-info":!1,"player-thumbnail-width":"75","player-thumbnail-height":"200","player-detail-order":"title,description","use-cdn-recommendations":!1,"syndicated-attribution":"","syndicated-attribution-tooltip":"","syndicated-attribution-position":"bottom-right","detail-order-syndicated":"title,branding","format-syndicator":function(e){return e},"syndicated-static-text":"","syndicated-static-text-position":"top-right","quantcast-label":"","cyclical-paging":!1,"after-visible":function(){},"link-target":"normal","auto-syndicated-attribution":!0,"remove-url-playvideo-behavior":!1,"auto-size":!1,"auto-size-rules":[{minWc:120,maxWc:349,minWsRange:8,maxWsRange:8,n:1},{minWc:350,maxWc:499,minWsRange:8,maxWsRange:9,n:2},{minWc:500,maxWc:749,minWsRange:8,maxWsRange:10,n:3},{minWc:750,maxWc:999,minWsRange:8,maxWsRange:11,n:4},{minWc:1e3,maxWc:1249,minWsRange:7,maxWsRange:11,n:5},{minWc:1250,maxWc:1499,minWsRange:6,maxWsRange:11,n:6},{minWc:1500,maxWc:1749,minWsRange:6,maxWsRange:12,n:7},{minWc:1750,maxWc:1920,minWsRange:6,maxWsRange:13,n:8}],rows:2,"widget-creator-layout":"autowidget-template-stream","widget-creator-revision":"8516813","details-inline-with-title":"","mode-is-responsive":!0,"responsive-extra-columns":1,"responsive-rules":[{minWidth:0,margin:{v:0,h:0},rows:1,cells:1,virtualThumbWidth:120,virtualThumbHeight:80}],"image-lazy-load-space":200,"has-image-lazy-load":!1,"use-css-important":!0,"image-url-prefix":null,"image-size-factor":1,"image-min-width":100,"image-size-round":1,"image-max-dimension":1e3,"image-min-dimension":100,"mode-has-userx":!0,"min-width-for-disclosure":225,"min-width-for-attribution":325,"hide-disclosure-when-no-place":!1,"hide-attribution-when-no-place":!1,"disclosure-link-text-sponsored":"Sponsored Links","disclosure-link-text-hybrid":"Promoted Links","disclosure-link-text-organic":"","disclosure-position":"none","header-right":"No Header","use-browser-line-clamp":!0,"use-dpr-images":!0,slider:!1,"slider-slide-from":"bottom","slider-min-effective-scroll-size":20,"slider-transition-duration":600,"slider-transition-delay":200,"slider-background-color":"#666","slider-close-btn-font-size":"30px","slider-close-btn-size":"24px","slider-close-btn-color":"#FFF","slider-scroll-ref-element":function(){return window},"slider-z-index":25e5,"mode-adc-config":null,"images-radius":"0","visibility-constraints":{},"ios-sc-link-target-mode":null,"has-expand-animation":!1,"expand-animation-duration":1e3,"expand-animation-max-height":1e3,"read-more-config":null,"enable-read-more":!1,"mode-has-adchoice":!1,"adchoice-large":!1,"adchoice-position":"auto","adchoice-target-url":"","read-more-box-selector":""}},language:"en",testmode:!1,direction:"ltr","default-thumbnail":"http://cdn.taboolasyndication.com/libtrc/static/thumbnails/759bc49732394dde468c8d65a464e1a4.png",domains:"","sponsored-link-text":"Sponsored Link","sponsored-video-text":"Sponsored Video","branding-url":{},"configuration-version":"0","external-credentials":null,"brightcove-list-id":null,"publisher-start":function(){},"get-user":function(){return null},"get-creator":function(){for(var t=document.getElementsByTagName("head")[0].getElementsByTagName("meta",!1),e=0;e<t.length;e++)if(t[e].name=="uploader"||t[e].name=="item-uploader")return t[e].content},"get-views":function(){for(var t=document.getElementsByTagName("head")[0].getElementsByTagName("meta",!1),e=0;e<t.length;e++)if(t[e].name=="views"||t[e].name=="item-views")return t[e].content},"get-rating":function(){for(var t=document.getElementsByTagName("head")[0].getElementsByTagName("meta",!1),e=0;e<t.length;e++)if((t[e].name=="rating"||t[e].name=="item-rating")&&!isNaN(parseFloat(t[e].content)))return t[e].content},"get-tags":function(){return[]},"logo-image":"http://cdn.taboolasyndication.com/taboola/powered-by.png",has_valid_rss:!1,actionscript_version:"3","brightcove-uses-reference":!1,"publisher-end":function(){},"ie-logo-image":"http://cdn.taboolasyndication.com/taboola/powered-by-small.gif",attribution:!0,"notify-loaded":!0,metafields:"","normalize-item-id":function(e,t,n){return!n&&t=="text"&&typeof e=="string"&&e.search(new RegExp("^https?://"))==0&&(e=e.replace(/\?.*/,"",!1)),e.toLowerCase()},"normalize-item-url":function(e){return e},"read-paused-bcplayer":!1,"normalize-request-param":function(e,t){if(t=="thumbnails-a"){var n="",s=navigator.userAgent.toLowerCase();typeof e.uip!="undefined"&&typeof e.uip=="string"&&s.match(/(iphone|ipod|android.*mobile|iemobile|blackberry|bb10|opera\smini)/i)&&(n="Mobile ",e.uip=n+e.uip)}return e},"normalize-log-param":function(e,t){return t},timeout:8e3,"prenormalize-item-id":{host:!0,fragment:"^(/video/|!)",query:["p","id"],"truncate-at":["search.searchcompletion.com","org.mozilla.javascript.undefined"],"trailing-dirsep":!0},"prenormalize-item-url":!1,"loader-impl":null,"trc-network-mapping":{"gawker.com":"gawkermedia-gawker","www.jalopnik.com":"jalopnik","es.gizmodo.com":"gawkermedia-gizmodoespanol","gizmodo.com":"gawkermedia-gizmodo","deadspin.com":"gawkermedia-deadspin","kotaku.com":"gawkermedia-kotaku","io9.com":"gawkermedia-io9","lifehacker.com":"gawkermedia-lifehacker","jezebel.com":"gawkermedia-jezebel","jalopnik.com":"gawkermedia-jalopnik"},"trc-skip-failover":!1,"backstage-domain-url":"","adc-config":null,"link-target-conf":null,"ios-sc-link-target":{NAV:"_self",NT:"_self",SP:"_self"},"small-ios-device":"iPhone|iPod","read-more-debug":!1,"read-more-devices":"smart_phone",global:{"abp-detection-enabled":!0,"css-isolation":!1,"disclosure-enabled":!0,"enable-organic-redirect":!0,"enable-read-more":!0,"enable-social-events":!0,"explore-delay":500,"has-adchoice":!0,"has-userx":!0,"image-url-prefix":"https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_80%2Ch_{h}%2Cw_{w}%2Cc_fill%2Cg_faces%2Ce_sharpen/","inject-comscore":!0,"inject-mdotlabs":!1,"inject-taboolax":!0,"ios-sc-link-target":{NAV:"_top",NT:"_top",SP:"_top"},"publisher-onclick-nt-enabled":!1,"requests-domain":"trc.taboola.com","send-avail-as-get":!1,"send-avail-as-post":!0,"send-event-as-post":!0,"send-full-list":!0,"send-variant-warning":!0,"send-visible-as-get":!1,"stop-channels-threshold":"0.8","switch-abp-class":!1,"syndication-embed-code":function(){},"syndicator-affiliate-id":"dailyrecord","thumb-lazy-load-method":"PAGE_LOAD,PAGE_INTERACTIVE,RBOX_VISIBLE","thumb-lazy-load-switch":!1,"tmp-use-pb-params":!0,"touchstart-enabled":!0,"trc-request-delay":500,"use-abp-uim":!0,"use-calibration-uim":!1,"use-delay-image-load":!0,"use-storage-detection":!0,"visible-delay":500,style:`.ab_thumbnails-a_2x6 .video-title{font-family:Arial, Helvetica, sans-serif;font-size:17px;line-height:18.0px;font-weight:bold;max-height:60.0px;*height:60.0px;color:#222;text-decoration:none;}.ab_thumbnails-a_2x6 .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;}.ab_thumbnails-a_2x6 .trc_rbox_div{width:auto;_width:99%;height:410px;border-width:0;padding:0;}.ab_thumbnails-a_2x6 .videoCube .video-duration{left:36px;display:none;}.ab_thumbnails-a_2x6 .videoCube .video-label-box{margin-left:0;margin-right:0px;}.ab_thumbnails-a_2x6 .video-label,.ab_thumbnails-a_2x6 .sponsored,.ab_thumbnails-a_2x6 .sponsored-url{font-family:'ProximaNovaCond' georgia,times,serif;}.ab_thumbnails-a_2x6 .trc_rbox_header{font-family:'ProximaNovaCond', 'sans-serif';font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0;}.ab_thumbnails-a_2x6 .sponsored-url{font-size:9px;font-weight:bold;text-decoration:underline;color:green;}.ab_thumbnails-a_2x6 .sponsored{font-size:9px;font-weight:normal;text-decoration:none;color:#9C9A9C;}.ab_thumbnails-a_2x6 .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_2x6 .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_2x6 .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_2x6 .video-uploader{font-size:15.0px;font-weight:bold;text-decoration:none;color:#C34B9E;}.ab_thumbnails-a_2x6 .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_2x6 .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_2x6 .sponsored-default .video-title{max-height:2.58em;*height:2.58em;}.ab_thumbnails-a_2x6 .sponsored-default .video-description{max-height:2.2em;*height:2.2em;}.ab_thumbnails-a_2x6 .videoCube{width:auto;_width:auto;background-color:transparent;border-width:1px;border-color:#D6D5D3;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;}.ab_thumbnails-a_2x6 div.videoCube:hover,.ab_thumbnails-a_2x6  div.videoCube_hover{background-color:transparent;}.ab_thumbnails-a_2x6 .sponsored-default{background-color:#F7F6C6;}.ab_thumbnails-a_2x6 div.sponsored-default:hover,.ab_thumbnails-a_2x6  div.sponsored-default.videoCube_hover{background-color:inherit;}.ab_thumbnails-a_2x6 .videoCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.ab_thumbnails-a_2x6 .videoCube:hover .thumbnail-overlay,.ab_thumbnails-a_2x6  .videoCube_hover .thumbnail-overlay{background-image:null;}.ab_thumbnails-a_2x6 .trc_rbox_border_elm{border-color:darkgray;}.ab_thumbnails-a_2x6 .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.ab_thumbnails-a_2x6 div.videoCube:hover .thumbBlock{border-color:inherit;}.ab_thumbnails-a_2x6 .pager_enabled{color:#0056b3;}.ab_thumbnails-a_2x6 .trc_pager_counter{color:#000000;}.ab_thumbnails-a_2x6 .pager_disabled{color:#7d898f;}.ab_thumbnails-a_2x6 .trc_pager_prev:hover,.ab_thumbnails-a_2x6  .trc_pager_next:hover{color:#6497ED;}.ab_thumbnails-a_2x6 .trc_pager_selected{color:#0056b3;}.ab_thumbnails-a_2x6 .trc_pager_unselected{color:#7d898f;}.ab_thumbnails-a_2x6 div.trc_pager_pages div:hover{color:#6497ED;}.ab_thumbnails-a_2x6 .trc_lightbox_overlay{background-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.ab_thumbnails-a_2x6 .video-label-box{text-align:left;}.ab_thumbnails-a_2x6 .trc_sponsored_overlay{background-color:black;}.ab_thumbnails-a_2x6 .thumbnail-emblem{background-position:5% 5%;}.ab_thumbnails-a_2x6 .videoCube .sponsored{margin-top:-7px;}.ab_thumbnails-a_2x6{width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;}.ab_thumbnails-a_2x6 .videoCube.vertical{border-style:solid none none none;}.ab_thumbnails-a_2x6 .videoCube.horizontal{border-style:none;}.ab_thumbnails-a_2x6 .trc_pager_prev,.ab_thumbnails-a_2x6 .trc_pager_next{font-size:12px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_2x6 .trc_pager_pages div{font-size:12px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_2x6 .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_2x6 .trc_pager div{font-family:serif;}.ab_thumbnails-a_2x6 .playerCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.ab_thumbnails-a_2x6 .playerCube:hover .thumbnail-overlay,.ab_thumbnails-a_2x6  .playerCube_hover .thumbnail-overlay{background-image:null;}.ab_thumbnails-a_2x6 .playerCube .videoCube{background-color:transparent;border-color:#D6D5D3;border-width:1px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;margin-left:0px;margin-top:0px;padding:3px;}.ab_thumbnails-a_2x6 .playerCube .videoCube.horizontal{border-style:none none none none;}.ab_thumbnails-a_2x6 .playerCube .videoCube .video-label-box{margin-left:81px;margin-right:0px;}.ab_thumbnails-a_2x6 .playerCube .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_2x6 .playerCube .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_2x6 .playerCube .video-label-box{text-align:left;}.ab_thumbnails-a_2x6 .playerCube .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_2x6 .playerCube .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_2x6 .playerCube .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;text-decoration:none;max-height:2.2em;*height:2.2em;color:black;}.ab_thumbnails-a_2x6 .playerCube .videoCube .video-duration{display:block;left:36px;}.ab_thumbnails-a_2x6 .playerCube .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.ab_thumbnails-a_2x6 .playerCube .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_2x6 .playerCube .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_2x6 .playerCube .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_2x6 .playerCube .video-title{font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;}.ab_thumbnails-a_2x6 .playerCube div.videoCube:hover,.ab_thumbnails-a_2x6  div.videoCube_hover{background-color:transparent;}.ab_thumbnails-a_2x6 .whatsThisSyndicated{font-family:Arial, Verdana, sans-serif;font-size:9px;font-weight:normal;color:black;text-decoration:none;padding:0;}.ab_thumbnails-a_2x6 div.syndicatedItem:hover,.ab_thumbnails-a_2x6  div.syndicatedItem.videoCube_hover{background-color:transparent;}.ab_thumbnails-a_2x6 div.syndicatedItem:hover .thumbBlock{border-color:inherit;}.ab_thumbnails-a_2x6 .videoCube.syndicatedItem{background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px;}.ab_thumbnails-a_2x6 .videoCube.syndicatedItem.horizontal{border-style:none;}.ab_thumbnails-a_2x6 .videoCube.syndicatedItem .thumbBlock{border-color:darkgray;border-width:0px;}.ab_thumbnails-a_2x6 .videoCube.syndicatedItem .thumbnail-overlay{background-image:null;background-position:5% 5%;}.ab_thumbnails-a_2x6 .videoCube.syndicatedItem.vertical{border-style:solid none none none;}.ab_thumbnails-a_2x6 .videoCube.syndicatedItem .video-duration{display:none;left:36px;}.ab_thumbnails-a_2x6 .videoCube.syndicatedItem .video-label-box{margin-left:0px;}.ab_thumbnails-a_2x6 .syndicatedItem{background-color:transparent;}.ab_thumbnails-a_2x6 .syndicatedItem .video-description{max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:10px;font-weight:normal;line-height:11px;text-decoration:none;}.ab_thumbnails-a_2x6 .syndicatedItem .video-title{max-height:60.0px;*height:60.0px;color:#222;font-family:'ProximaNovaCond' georgia,times,serif;font-size:17px;line-height:18.0px;font-weight:bold;text-decoration:none;}.ab_thumbnails-a_2x6 .syndicatedItem .sponsored{color:#9C9A9C;font-size:9px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_2x6 .syndicatedItem .sponsored-url{color:green;font-size:9px;font-weight:bold;text-decoration:underline;}.ab_thumbnails-a_2x6 .syndicatedItem .video-category{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_2x6 .syndicatedItem .video-duration-detail{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_2x6 .syndicatedItem .video-external-data{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_2x6 .syndicatedItem .video-published-date{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_2x6 .syndicatedItem .video-rating{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_2x6 .syndicatedItem .video-uploader{color:#C34B9E;font-size:15.0px;font-weight:bold;text-decoration:underline;}.ab_thumbnails-a_2x6 .syndicatedItem .video-views{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_2x6 .syndicatedItem .branding{color:#C34B9E;font-size:15.0px;font-weight:bold;text-decoration:none;font-family:'ProximaNovaCond' georgia,times,serif;background-image:null;text-align:left;}.ab_thumbnails-a_2x6 .videoCube.syndicatedItem .thumbBlock .branding{text-align:left;background-color:transparent;display:none;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;}.ab_thumbnails-a_2x6 .videoCube.syndicatedItem .thumbBlock .static-text{text-align:left;background-color:black;display:none;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;}.ab_thumbnails-a_2x6 .videoCube.syndicatedItem:hover .thumbnail-overlay,.ab_thumbnails-a_2x6  .videoCube_hover.syndicatedItem .thumbnail-overl{:null;}.ab_thumbnails-a_2x6 .videoCube.thumbnail_start .thumbBlock_holder{width:33%;_width:33%;}.ab_thumbnails-a_abp-mode .video-title{font-family:Arial, Helvetica, sans-serif;font-size:18px;line-height:1.3em;font-weight:bold;max-height:2.6em;*height:2.6em;color:#000000;text-decoration:none;}.ab_thumbnails-a_abp-mode .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;}.ab_thumbnails-a_abp-mode .trc_rbox_div{width:auto;_width:99%;height:410px;border-width:0;padding:0;}.ab_thumbnails-a_abp-mode .videoCube .video-duration{left:36px;display:none;}.ab_thumbnails-a_abp-mode .videoCube .video-label-box{margin-left:0;margin-right:0px;}.ab_thumbnails-a_abp-mode .video-label,.ab_thumbnails-a_abp-mode .sponsored,.ab_thumbnails-a_abp-mode .sponsored-url{font-family:'ProximaNovaCond', 'sans-serif';}.ab_thumbnails-a_abp-mode .trc_rbox_header{font-family:'ProximaNovaCond', 'sans-serif';font-size:22.4px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 5px 0;}.ab_thumbnails-a_abp-mode .sponsored-url{font-size:9px;font-weight:bold;text-decoration:underline;color:green;}.ab_thumbnails-a_abp-mode .sponsored{font-size:9px;font-weight:normal;text-decoration:none;color:#9C9A9C;}.ab_thumbnails-a_abp-mode .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_abp-mode .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_abp-mode .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_abp-mode .video-uploader{font-size:15.0px;font-weight:normal;text-decoration:none;color:#e21638;}.ab_thumbnails-a_abp-mode .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_abp-mode .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_abp-mode .sponsored-default .video-title{max-height:2.58em;*height:2.58em;}.ab_thumbnails-a_abp-mode .sponsored-default .video-description{max-height:2.2em;*height:2.2em;}.ab_thumbnails-a_abp-mode .videoCube{width:auto;_width:auto;background-color:transparent;border-width:1px;border-color:#D6D5D3;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;}.ab_thumbnails-a_abp-mode div.videoCube:hover,.ab_thumbnails-a_abp-mode  div.videoCube_hover{background-color:transparent;}.ab_thumbnails-a_abp-mode .sponsored-default{background-color:#F7F6C6;}.ab_thumbnails-a_abp-mode div.sponsored-default:hover,.ab_thumbnails-a_abp-mode  div.sponsored-default.videoCube_hover{background-color:inherit;}.ab_thumbnails-a_abp-mode .videoCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.ab_thumbnails-a_abp-mode .videoCube:hover .thumbnail-overlay,.ab_thumbnails-a_abp-mode  .videoCube_hover .thumbnail-overlay{background-image:null;}.ab_thumbnails-a_abp-mode .trc_rbox_border_elm{border-color:darkgray;}.ab_thumbnails-a_abp-mode .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.ab_thumbnails-a_abp-mode div.videoCube:hover .thumbBlock{border-color:inherit;}.ab_thumbnails-a_abp-mode .pager_enabled{color:#0056b3;}.ab_thumbnails-a_abp-mode .trc_pager_counter{color:#000000;}.ab_thumbnails-a_abp-mode .pager_disabled{color:#7d898f;}.ab_thumbnails-a_abp-mode .trc_pager_prev:hover,.ab_thumbnails-a_abp-mode  .trc_pager_next:hover{color:#6497ED;}.ab_thumbnails-a_abp-mode .trc_pager_selected{color:#0056b3;}.ab_thumbnails-a_abp-mode .trc_pager_unselected{color:#7d898f;}.ab_thumbnails-a_abp-mode div.trc_pager_pages div:hover{color:#6497ED;}.ab_thumbnails-a_abp-mode .trc_lightbox_overlay{background-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.ab_thumbnails-a_abp-mode .video-label-box{text-align:left;}.ab_thumbnails-a_abp-mode .trc_sponsored_overlay{background-color:black;}.ab_thumbnails-a_abp-mode .thumbnail-emblem{background-position:5% 5%;}.ab_thumbnails-a_abp-mode .videoCube .sponsored{margin-top:-7px;}.ab_thumbnails-a_abp-mode{width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 30px 30px 30px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;}.ab_thumbnails-a_abp-mode .videoCube.vertical{border-style:solid none none none;}.ab_thumbnails-a_abp-mode .videoCube.horizontal{border-style:none;}.ab_thumbnails-a_abp-mode .trc_pager_prev,.ab_thumbnails-a_abp-mode .trc_pager_next{font-size:12px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_abp-mode .trc_pager_pages div{font-size:12px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_abp-mode .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_abp-mode .trc_pager div{font-family:serif;}.ab_thumbnails-a_abp-mode .playerCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.ab_thumbnails-a_abp-mode .playerCube:hover .thumbnail-overlay,.ab_thumbnails-a_abp-mode  .playerCube_hover .thumbnail-overlay{background-image:null;}.ab_thumbnails-a_abp-mode .playerCube .videoCube{background-color:transparent;border-color:#D6D5D3;border-width:1px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;margin-left:0px;margin-top:0px;padding:3px;}.ab_thumbnails-a_abp-mode .playerCube .videoCube.horizontal{border-style:none none none none;}.ab_thumbnails-a_abp-mode .playerCube .videoCube .video-label-box{margin-left:81px;margin-right:0px;}.ab_thumbnails-a_abp-mode .playerCube .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_abp-mode .playerCube .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_abp-mode .playerCube .video-label-box{text-align:left;}.ab_thumbnails-a_abp-mode .playerCube .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_abp-mode .playerCube .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_abp-mode .playerCube .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;text-decoration:none;max-height:2.2em;*height:2.2em;color:black;}.ab_thumbnails-a_abp-mode .playerCube .videoCube .video-duration{display:block;left:36px;}.ab_thumbnails-a_abp-mode .playerCube .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.ab_thumbnails-a_abp-mode .playerCube .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_abp-mode .playerCube .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_abp-mode .playerCube .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_abp-mode .playerCube .video-title{font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;}.ab_thumbnails-a_abp-mode .playerCube div.videoCube:hover,.ab_thumbnails-a_abp-mode  div.videoCube_hover{background-color:transparent;}.ab_thumbnails-a_abp-mode .whatsThisSyndicated{font-family:Arial, Verdana, sans-serif;font-size:9px;font-weight:normal;color:black;text-decoration:none;padding:0;}.ab_thumbnails-a_abp-mode div.syndicatedItem:hover,.ab_thumbnails-a_abp-mode  div.syndicatedItem.videoCube_hover{background-color:transparent;}.ab_thumbnails-a_abp-mode div.syndicatedItem:hover .thumbBlock{border-color:inherit;}.ab_thumbnails-a_abp-mode .videoCube.syndicatedItem{background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px;}.ab_thumbnails-a_abp-mode .videoCube.syndicatedItem.horizontal{border-style:none;}.ab_thumbnails-a_abp-mode .videoCube.syndicatedItem .thumbBlock{border-color:darkgray;border-width:0px;}.ab_thumbnails-a_abp-mode .videoCube.syndicatedItem .thumbnail-overlay{background-image:null;background-position:5% 5%;}.ab_thumbnails-a_abp-mode .videoCube.syndicatedItem.vertical{border-style:solid none none none;}.ab_thumbnails-a_abp-mode .videoCube.syndicatedItem .video-duration{display:none;left:36px;}.ab_thumbnails-a_abp-mode .videoCube.syndicatedItem .video-label-box{margin-left:0px;}.ab_thumbnails-a_abp-mode .syndicatedItem{background-color:transparent;}.ab_thumbnails-a_abp-mode .syndicatedItem .video-description{max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:10px;font-weight:normal;line-height:11px;text-decoration:none;}.ab_thumbnails-a_abp-mode .syndicatedItem .video-title{max-height:2.6em;*height:2.6em;color:#000000;font-family:'ProximaNovaCond', 'sans-serif';font-size:18px;line-height:1.3em;font-weight:bold;text-decoration:none;}.ab_thumbnails-a_abp-mode .syndicatedItem .sponsored{color:#9C9A9C;font-size:9px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_abp-mode .syndicatedItem .sponsored-url{color:green;font-size:9px;font-weight:bold;text-decoration:underline;}.ab_thumbnails-a_abp-mode .syndicatedItem .video-category{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_abp-mode .syndicatedItem .video-duration-detail{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_abp-mode .syndicatedItem .video-external-data{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_abp-mode .syndicatedItem .video-published-date{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_abp-mode .syndicatedItem .video-rating{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_abp-mode .syndicatedItem .video-uploader{color:#e21638;font-size:15.0px;font-weight:normal;text-decoration:underline;}.ab_thumbnails-a_abp-mode .syndicatedItem .video-views{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_abp-mode .syndicatedItem .branding{color:#e21638;font-size:15.0px;font-weight:normal;text-decoration:none;font-family:'ProximaNovaCond', 'sans-serif';background-image:null;text-align:left;}.ab_thumbnails-a_abp-mode .videoCube.syndicatedItem .thumbBlock .branding{text-align:left;background-color:transparent;display:none;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;}.ab_thumbnails-a_abp-mode .videoCube.syndicatedItem .thumbBlock .static-text{text-align:left;background-color:black;display:none;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;}.ab_thumbnails-a_abp-mode .videoCube.syndicatedItem:hover .thumbnail-overlay,.ab_thumbnails-a_abp-mode  .videoCube_hover.syndicatedItem .thumbnail-overl{:null;}.ab_thumbnails-a_abp-mode .videoCube.thumbnail_start .thumbBlock_holder{width:33%;_width:33%;}.ab_thumbnails-a_text-under .video-title{font-family:Arial, Helvetica, sans-serif;font-size:16px;line-height:20.0px;font-weight:bold;max-height:60.0px;*height:60.0px;color:#222;text-decoration:none;}.ab_thumbnails-a_text-under .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;}.ab_thumbnails-a_text-under .trc_rbox_div{width:auto;_width:99%;height:410px;border-width:0;padding:0;}.ab_thumbnails-a_text-under .videoCube .video-duration{left:36px;display:none;}.ab_thumbnails-a_text-under .videoCube .video-label-box{margin-left:0;margin-right:0px;}.ab_thumbnails-a_text-under .video-label,.ab_thumbnails-a_text-under .sponsored,.ab_thumbnails-a_text-under .sponsored-url{font-family:ProximaNovaCond, sans-serif;}.ab_thumbnails-a_text-under .trc_rbox_header{font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0;}.ab_thumbnails-a_text-under .sponsored-url{font-size:9px;font-weight:bold;text-decoration:underline;color:green;}.ab_thumbnails-a_text-under .sponsored{font-size:9px;font-weight:normal;text-decoration:none;color:#9C9A9C;}.ab_thumbnails-a_text-under .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under .video-uploader{font-size:15.0px;font-weight:bold;text-decoration:none;color:#C34B9E;}.ab_thumbnails-a_text-under .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under .sponsored-default .video-title{max-height:2.58em;*height:2.58em;}.ab_thumbnails-a_text-under .sponsored-default .video-description{max-height:2.2em;*height:2.2em;}.ab_thumbnails-a_text-under .videoCube{width:auto;_width:auto;background-color:transparent;border-width:1px;border-color:#D6D5D3;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;}.ab_thumbnails-a_text-under div.videoCube:hover,.ab_thumbnails-a_text-under  div.videoCube_hover{background-color:transparent;}.ab_thumbnails-a_text-under .sponsored-default{background-color:#F7F6C6;}.ab_thumbnails-a_text-under div.sponsored-default:hover,.ab_thumbnails-a_text-under  div.sponsored-default.videoCube_hover{background-color:inherit;}.ab_thumbnails-a_text-under .videoCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.ab_thumbnails-a_text-under .videoCube:hover .thumbnail-overlay,.ab_thumbnails-a_text-under  .videoCube_hover .thumbnail-overlay{background-image:null;}.ab_thumbnails-a_text-under .trc_rbox_border_elm{border-color:darkgray;}.ab_thumbnails-a_text-under .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.ab_thumbnails-a_text-under div.videoCube:hover .thumbBlock{border-color:inherit;}.ab_thumbnails-a_text-under .pager_enabled{color:#0056b3;}.ab_thumbnails-a_text-under .trc_pager_counter{color:#000000;}.ab_thumbnails-a_text-under .pager_disabled{color:#7d898f;}.ab_thumbnails-a_text-under .trc_pager_prev:hover,.ab_thumbnails-a_text-under  .trc_pager_next:hover{color:#6497ED;}.ab_thumbnails-a_text-under .trc_pager_selected{color:#0056b3;}.ab_thumbnails-a_text-under .trc_pager_unselected{color:#7d898f;}.ab_thumbnails-a_text-under div.trc_pager_pages div:hover{color:#6497ED;}.ab_thumbnails-a_text-under .trc_lightbox_overlay{background-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.ab_thumbnails-a_text-under .video-label-box{text-align:left;}.ab_thumbnails-a_text-under .trc_sponsored_overlay{background-color:black;}.ab_thumbnails-a_text-under .thumbnail-emblem{background-position:5% 5%;}.ab_thumbnails-a_text-under .videoCube .sponsored{margin-top:-7px;}.ab_thumbnails-a_text-under{width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;}.ab_thumbnails-a_text-under .videoCube.vertical{border-style:solid none none none;}.ab_thumbnails-a_text-under .videoCube.horizontal{border-style:none;}.ab_thumbnails-a_text-under .trc_pager_prev,.ab_thumbnails-a_text-under .trc_pager_next{font-size:12px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_text-under .trc_pager_pages div{font-size:12px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_text-under .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under .trc_pager div{font-family:serif;}.ab_thumbnails-a_text-under .playerCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.ab_thumbnails-a_text-under .playerCube:hover .thumbnail-overlay,.ab_thumbnails-a_text-under  .playerCube_hover .thumbnail-overlay{background-image:null;}.ab_thumbnails-a_text-under .playerCube .videoCube{background-color:transparent;border-color:#D6D5D3;border-width:1px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;margin-left:0px;margin-top:0px;padding:3px;}.ab_thumbnails-a_text-under .playerCube .videoCube.horizontal{border-style:none none none none;}.ab_thumbnails-a_text-under .playerCube .videoCube .video-label-box{margin-left:81px;margin-right:0px;}.ab_thumbnails-a_text-under .playerCube .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under .playerCube .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under .playerCube .video-label-box{text-align:left;}.ab_thumbnails-a_text-under .playerCube .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under .playerCube .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under .playerCube .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;text-decoration:none;max-height:2.2em;*height:2.2em;color:black;}.ab_thumbnails-a_text-under .playerCube .videoCube .video-duration{display:block;left:36px;}.ab_thumbnails-a_text-under .playerCube .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.ab_thumbnails-a_text-under .playerCube .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under .playerCube .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under .playerCube .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under .playerCube .video-title{font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;}.ab_thumbnails-a_text-under .playerCube div.videoCube:hover,.ab_thumbnails-a_text-under  div.videoCube_hover{background-color:transparent;}.ab_thumbnails-a_text-under .whatsThisSyndicated{font-family:Arial, Verdana, sans-serif;font-size:9px;font-weight:normal;color:black;text-decoration:none;padding:0;}.ab_thumbnails-a_text-under div.syndicatedItem:hover,.ab_thumbnails-a_text-under  div.syndicatedItem.videoCube_hover{background-color:transparent;}.ab_thumbnails-a_text-under div.syndicatedItem:hover .thumbBlock{border-color:inherit;}.ab_thumbnails-a_text-under .videoCube.syndicatedItem{background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px;}.ab_thumbnails-a_text-under .videoCube.syndicatedItem.horizontal{border-style:none;}.ab_thumbnails-a_text-under .videoCube.syndicatedItem .thumbBlock{border-color:darkgray;border-width:0px;}.ab_thumbnails-a_text-under .videoCube.syndicatedItem .thumbnail-overlay{background-image:null;background-position:5% 5%;}.ab_thumbnails-a_text-under .videoCube.syndicatedItem.vertical{border-style:solid none none none;}.ab_thumbnails-a_text-under .videoCube.syndicatedItem .video-duration{display:none;left:36px;}.ab_thumbnails-a_text-under .videoCube.syndicatedItem .video-label-box{margin-left:0px;}.ab_thumbnails-a_text-under .syndicatedItem{background-color:transparent;}.ab_thumbnails-a_text-under .syndicatedItem .video-description{max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:10px;font-weight:normal;line-height:11px;text-decoration:none;}.ab_thumbnails-a_text-under .syndicatedItem .video-title{max-height:60.0px;*height:60.0px;color:#222;font-family:ProximaNovaCond, sans-serif;font-size:16px;line-height:20.0px;font-weight:bold;text-decoration:none;}.ab_thumbnails-a_text-under .syndicatedItem .sponsored{color:#9C9A9C;font-size:9px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_text-under .syndicatedItem .sponsored-url{color:green;font-size:9px;font-weight:bold;text-decoration:underline;}.ab_thumbnails-a_text-under .syndicatedItem .video-category{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_text-under .syndicatedItem .video-duration-detail{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_text-under .syndicatedItem .video-external-data{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_text-under .syndicatedItem .video-published-date{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_text-under .syndicatedItem .video-rating{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_text-under .syndicatedItem .video-uploader{color:#C34B9E;font-size:15.0px;font-weight:bold;text-decoration:underline;}.ab_thumbnails-a_text-under .syndicatedItem .video-views{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_text-under .syndicatedItem .branding{color:#C34B9E;font-size:15.0px;font-weight:bold;text-decoration:none;font-family:ProximaNovaCond, sans-serif;background-image:null;text-align:left;}.ab_thumbnails-a_text-under .videoCube.syndicatedItem .thumbBlock .branding{text-align:left;background-color:transparent;display:none;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;}.ab_thumbnails-a_text-under .videoCube.syndicatedItem .thumbBlock .static-text{text-align:left;background-color:black;display:none;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;}.ab_thumbnails-a_text-under .videoCube.syndicatedItem:hover .thumbnail-overlay,.ab_thumbnails-a_text-under  .videoCube_hover.syndicatedItem .thumbnail-overl{:null;}.ab_thumbnails-a_text-under .videoCube.thumbnail_start .thumbBlock_holder{width:40%;_width:40%;}.ab_thumbnails-a_text-under2 .video-title{font-family:Arial, Helvetica, sans-serif;font-size:16px;line-height:18.0px;font-weight:bold;max-height:60.0px;*height:60.0px;color:#222;text-decoration:none;}.ab_thumbnails-a_text-under2 .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;}.ab_thumbnails-a_text-under2 .trc_rbox_div{width:auto;_width:99%;height:410px;border-width:0;padding:0;}.ab_thumbnails-a_text-under2 .videoCube .video-duration{left:36px;display:none;}.ab_thumbnails-a_text-under2 .videoCube .video-label-box{margin-left:0;margin-right:0px;}.ab_thumbnails-a_text-under2 .video-label,.ab_thumbnails-a_text-under2 .sponsored,.ab_thumbnails-a_text-under2 .sponsored-url{font-family:'ProximaNovaCond' georgia,times,serif;}.ab_thumbnails-a_text-under2 .trc_rbox_header{font-family:'ProximaNovaCond', 'sans-serif';font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0;}.ab_thumbnails-a_text-under2 .sponsored-url{font-size:9px;font-weight:bold;text-decoration:underline;color:green;}.ab_thumbnails-a_text-under2 .sponsored{font-size:9px;font-weight:normal;text-decoration:none;color:#9C9A9C;}.ab_thumbnails-a_text-under2 .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under2 .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under2 .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under2 .video-uploader{font-size:13.0px;font-weight:bold;text-decoration:none;color:#C34B9E;}.ab_thumbnails-a_text-under2 .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under2 .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under2 .sponsored-default .video-title{max-height:2.58em;*height:2.58em;}.ab_thumbnails-a_text-under2 .sponsored-default .video-description{max-height:2.2em;*height:2.2em;}.ab_thumbnails-a_text-under2 .videoCube{width:auto;_width:auto;background-color:transparent;border-width:1px;border-color:#D6D5D3;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;}.ab_thumbnails-a_text-under2 div.videoCube:hover,.ab_thumbnails-a_text-under2  div.videoCube_hover{background-color:transparent;}.ab_thumbnails-a_text-under2 .sponsored-default{background-color:#F7F6C6;}.ab_thumbnails-a_text-under2 div.sponsored-default:hover,.ab_thumbnails-a_text-under2  div.sponsored-default.videoCube_hover{background-color:inherit;}.ab_thumbnails-a_text-under2 .videoCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.ab_thumbnails-a_text-under2 .videoCube:hover .thumbnail-overlay,.ab_thumbnails-a_text-under2  .videoCube_hover .thumbnail-overlay{background-image:null;}.ab_thumbnails-a_text-under2 .trc_rbox_border_elm{border-color:darkgray;}.ab_thumbnails-a_text-under2 .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.ab_thumbnails-a_text-under2 div.videoCube:hover .thumbBlock{border-color:inherit;}.ab_thumbnails-a_text-under2 .pager_enabled{color:#0056b3;}.ab_thumbnails-a_text-under2 .trc_pager_counter{color:#000000;}.ab_thumbnails-a_text-under2 .pager_disabled{color:#7d898f;}.ab_thumbnails-a_text-under2 .trc_pager_prev:hover,.ab_thumbnails-a_text-under2  .trc_pager_next:hover{color:#6497ED;}.ab_thumbnails-a_text-under2 .trc_pager_selected{color:#0056b3;}.ab_thumbnails-a_text-under2 .trc_pager_unselected{color:#7d898f;}.ab_thumbnails-a_text-under2 div.trc_pager_pages div:hover{color:#6497ED;}.ab_thumbnails-a_text-under2 .trc_lightbox_overlay{background-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.ab_thumbnails-a_text-under2 .video-label-box{text-align:left;}.ab_thumbnails-a_text-under2 .trc_sponsored_overlay{background-color:black;}.ab_thumbnails-a_text-under2 .thumbnail-emblem{background-position:5% 5%;}.ab_thumbnails-a_text-under2 .videoCube .sponsored{margin-top:-7px;}.ab_thumbnails-a_text-under2{width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;}.ab_thumbnails-a_text-under2 .videoCube.vertical{border-style:solid none none none;}.ab_thumbnails-a_text-under2 .videoCube.horizontal{border-style:none;}.ab_thumbnails-a_text-under2 .trc_pager_prev,.ab_thumbnails-a_text-under2 .trc_pager_next{font-size:12px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_text-under2 .trc_pager_pages div{font-size:12px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_text-under2 .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under2 .trc_pager div{font-family:serif;}.ab_thumbnails-a_text-under2 .playerCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.ab_thumbnails-a_text-under2 .playerCube:hover .thumbnail-overlay,.ab_thumbnails-a_text-under2  .playerCube_hover .thumbnail-overlay{background-image:null;}.ab_thumbnails-a_text-under2 .playerCube .videoCube{background-color:transparent;border-color:#D6D5D3;border-width:1px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;margin-left:0px;margin-top:0px;padding:3px;}.ab_thumbnails-a_text-under2 .playerCube .videoCube.horizontal{border-style:none none none none;}.ab_thumbnails-a_text-under2 .playerCube .videoCube .video-label-box{margin-left:81px;margin-right:0px;}.ab_thumbnails-a_text-under2 .playerCube .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under2 .playerCube .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under2 .playerCube .video-label-box{text-align:left;}.ab_thumbnails-a_text-under2 .playerCube .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under2 .playerCube .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under2 .playerCube .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;text-decoration:none;max-height:2.2em;*height:2.2em;color:black;}.ab_thumbnails-a_text-under2 .playerCube .videoCube .video-duration{display:block;left:36px;}.ab_thumbnails-a_text-under2 .playerCube .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.ab_thumbnails-a_text-under2 .playerCube .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under2 .playerCube .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under2 .playerCube .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.ab_thumbnails-a_text-under2 .playerCube .video-title{font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;}.ab_thumbnails-a_text-under2 .playerCube div.videoCube:hover,.ab_thumbnails-a_text-under2  div.videoCube_hover{background-color:transparent;}.ab_thumbnails-a_text-under2 .whatsThisSyndicated{font-family:Arial, Verdana, sans-serif;font-size:9px;font-weight:normal;color:black;text-decoration:none;padding:0;}.ab_thumbnails-a_text-under2 div.syndicatedItem:hover,.ab_thumbnails-a_text-under2  div.syndicatedItem.videoCube_hover{background-color:transparent;}.ab_thumbnails-a_text-under2 div.syndicatedItem:hover .thumbBlock{border-color:inherit;}.ab_thumbnails-a_text-under2 .videoCube.syndicatedItem{background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px;}.ab_thumbnails-a_text-under2 .videoCube.syndicatedItem.horizontal{border-style:none;}.ab_thumbnails-a_text-under2 .videoCube.syndicatedItem .thumbBlock{border-color:darkgray;border-width:0px;}.ab_thumbnails-a_text-under2 .videoCube.syndicatedItem .thumbnail-overlay{background-image:null;background-position:5% 5%;}.ab_thumbnails-a_text-under2 .videoCube.syndicatedItem.vertical{border-style:solid none none none;}.ab_thumbnails-a_text-under2 .videoCube.syndicatedItem .video-duration{display:none;left:36px;}.ab_thumbnails-a_text-under2 .videoCube.syndicatedItem .video-label-box{margin-left:0px;}.ab_thumbnails-a_text-under2 .syndicatedItem{background-color:transparent;}.ab_thumbnails-a_text-under2 .syndicatedItem .video-description{max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:10px;font-weight:normal;line-height:11px;text-decoration:none;}.ab_thumbnails-a_text-under2 .syndicatedItem .video-title{max-height:60.0px;*height:60.0px;color:#222;font-family:'ProximaNovaCond' georgia,times,serif;font-size:16px;line-height:18.0px;font-weight:bold;text-decoration:none;}.ab_thumbnails-a_text-under2 .syndicatedItem .sponsored{color:#9C9A9C;font-size:9px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_text-under2 .syndicatedItem .sponsored-url{color:green;font-size:9px;font-weight:bold;text-decoration:underline;}.ab_thumbnails-a_text-under2 .syndicatedItem .video-category{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_text-under2 .syndicatedItem .video-duration-detail{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_text-under2 .syndicatedItem .video-external-data{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_text-under2 .syndicatedItem .video-published-date{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_text-under2 .syndicatedItem .video-rating{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_text-under2 .syndicatedItem .video-uploader{color:#C34B9E;font-size:13.0px;font-weight:bold;text-decoration:underline;}.ab_thumbnails-a_text-under2 .syndicatedItem .video-views{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.ab_thumbnails-a_text-under2 .syndicatedItem .branding{color:#C34B9E;font-size:13.0px;font-weight:bold;text-decoration:none;font-family:'ProximaNovaCond' georgia,times,serif;background-image:null;text-align:left;}.ab_thumbnails-a_text-under2 .videoCube.syndicatedItem .thumbBlock .branding{text-align:left;background-color:transparent;display:none;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;}.ab_thumbnails-a_text-under2 .videoCube.syndicatedItem .thumbBlock .static-text{text-align:left;background-color:black;display:none;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;}.ab_thumbnails-a_text-under2 .videoCube.syndicatedItem:hover .thumbnail-overlay,.ab_thumbnails-a_text-under2  .videoCube_hover.syndicatedItem .thumbnail-overl{:null;}.ab_thumbnails-a_text-under2 .videoCube.thumbnail_start .thumbBlock_holder{width:33%;_width:33%;}.mobile-thumbnails-a .video-title{font-family:Arial, Helvetica, sans-serif;font-size:22.4px;line-height:1.3em;font-weight:bold;max-height:2.6em;*height:2.6em;color:#000000;text-decoration:none;}.mobile-thumbnails-a .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;}.mobile-thumbnails-a .trc_rbox_div{width:auto;_width:99%;height:410px;border-width:0;padding:0;}.mobile-thumbnails-a .videoCube .video-duration{left:36px;display:none;}.mobile-thumbnails-a .videoCube .video-label-box{margin-left:0;margin-right:0px;}.mobile-thumbnails-a .video-label,.mobile-thumbnails-a .sponsored,.mobile-thumbnails-a .sponsored-url{font-family:'ProximaNovaCond','sans-serif';}.mobile-thumbnails-a .trc_rbox_header{font-family:'ProximaNovaCond','sans-serif';font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0;}.mobile-thumbnails-a .sponsored-url{font-size:9px;font-weight:bold;text-decoration:underline;color:green;}.mobile-thumbnails-a .sponsored{font-size:9px;font-weight:normal;text-decoration:none;color:#9C9A9C;}.mobile-thumbnails-a .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.mobile-thumbnails-a .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.mobile-thumbnails-a .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.mobile-thumbnails-a .video-uploader{font-size:15.0px;font-weight:normal;text-decoration:none;color:#e21638;}.mobile-thumbnails-a .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.mobile-thumbnails-a .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.mobile-thumbnails-a .sponsored-default .video-title{max-height:2.58em;*height:2.58em;}.mobile-thumbnails-a .sponsored-default .video-description{max-height:2.2em;*height:2.2em;}.mobile-thumbnails-a .videoCube{width:auto;_width:auto;background-color:transparent;border-width:1px;border-color:#D6D5D3;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;}.mobile-thumbnails-a div.videoCube:hover,.mobile-thumbnails-a  div.videoCube_hover{background-color:transparent;}.mobile-thumbnails-a .sponsored-default{background-color:#F7F6C6;}.mobile-thumbnails-a div.sponsored-default:hover,.mobile-thumbnails-a  div.sponsored-default.videoCube_hover{background-color:inherit;}.mobile-thumbnails-a .videoCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.mobile-thumbnails-a .videoCube:hover .thumbnail-overlay,.mobile-thumbnails-a  .videoCube_hover .thumbnail-overlay{background-image:null;}.mobile-thumbnails-a .trc_rbox_border_elm{border-color:darkgray;}.mobile-thumbnails-a .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.mobile-thumbnails-a div.videoCube:hover .thumbBlock{border-color:inherit;}.mobile-thumbnails-a .pager_enabled{color:#0056b3;}.mobile-thumbnails-a .trc_pager_counter{color:#000000;}.mobile-thumbnails-a .pager_disabled{color:#7d898f;}.mobile-thumbnails-a .trc_pager_prev:hover,.mobile-thumbnails-a  .trc_pager_next:hover{color:#6497ED;}.mobile-thumbnails-a .trc_pager_selected{color:#0056b3;}.mobile-thumbnails-a .trc_pager_unselected{color:#7d898f;}.mobile-thumbnails-a div.trc_pager_pages div:hover{color:#6497ED;}.mobile-thumbnails-a .trc_lightbox_overlay{background-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.mobile-thumbnails-a .video-label-box{text-align:left;}.mobile-thumbnails-a .trc_sponsored_overlay{background-color:black;}.mobile-thumbnails-a .thumbnail-emblem{background-position:5% 5%;}.mobile-thumbnails-a .videoCube .sponsored{margin-top:-7px;}.mobile-thumbnails-a{width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;}.mobile-thumbnails-a .videoCube.vertical{border-style:solid none none none;}.mobile-thumbnails-a .videoCube.horizontal{border-style:none;}.mobile-thumbnails-a .trc_pager_prev,.mobile-thumbnails-a .trc_pager_next{font-size:12px;font-weight:normal;text-decoration:none;}.mobile-thumbnails-a .trc_pager_pages div{font-size:12px;font-weight:normal;text-decoration:none;}.mobile-thumbnails-a .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.mobile-thumbnails-a .trc_pager div{font-family:serif;}.mobile-thumbnails-a .playerCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.mobile-thumbnails-a .playerCube:hover .thumbnail-overlay,.mobile-thumbnails-a  .playerCube_hover .thumbnail-overlay{background-image:null;}.mobile-thumbnails-a .playerCube .videoCube{background-color:transparent;border-color:#D6D5D3;border-width:1px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;margin-left:0px;margin-top:0px;padding:3px;}.mobile-thumbnails-a .playerCube .videoCube.horizontal{border-style:none none none none;}.mobile-thumbnails-a .playerCube .videoCube .video-label-box{margin-left:81px;margin-right:0px;}.mobile-thumbnails-a .playerCube .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.mobile-thumbnails-a .playerCube .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.mobile-thumbnails-a .playerCube .video-label-box{text-align:left;}.mobile-thumbnails-a .playerCube .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.mobile-thumbnails-a .playerCube .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.mobile-thumbnails-a .playerCube .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;text-decoration:none;max-height:2.2em;*height:2.2em;color:black;}.mobile-thumbnails-a .playerCube .videoCube .video-duration{display:block;left:36px;}.mobile-thumbnails-a .playerCube .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.mobile-thumbnails-a .playerCube .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.mobile-thumbnails-a .playerCube .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.mobile-thumbnails-a .playerCube .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.mobile-thumbnails-a .playerCube .video-title{font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;}.mobile-thumbnails-a .playerCube div.videoCube:hover,.mobile-thumbnails-a  div.videoCube_hover{background-color:transparent;}.mobile-thumbnails-a .whatsThisSyndicated{font-family:Arial, Verdana, sans-serif;font-size:9px;font-weight:normal;color:black;text-decoration:none;padding:0;}.mobile-thumbnails-a div.syndicatedItem:hover,.mobile-thumbnails-a  div.syndicatedItem.videoCube_hover{background-color:transparent;}.mobile-thumbnails-a div.syndicatedItem:hover .thumbBlock{border-color:inherit;}.mobile-thumbnails-a .videoCube.syndicatedItem{background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px;}.mobile-thumbnails-a .videoCube.syndicatedItem.horizontal{border-style:none;}.mobile-thumbnails-a .videoCube.syndicatedItem .thumbBlock{border-color:darkgray;border-width:0px;}.mobile-thumbnails-a .videoCube.syndicatedItem .thumbnail-overlay{background-image:null;background-position:5% 5%;}.mobile-thumbnails-a .videoCube.syndicatedItem.vertical{border-style:solid none none none;}.mobile-thumbnails-a .videoCube.syndicatedItem .video-duration{display:none;left:36px;}.mobile-thumbnails-a .videoCube.syndicatedItem .video-label-box{margin-left:0px;}.mobile-thumbnails-a .syndicatedItem{background-color:transparent;}.mobile-thumbnails-a .syndicatedItem .video-description{max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:10px;font-weight:normal;line-height:11px;text-decoration:none;}.mobile-thumbnails-a .syndicatedItem .video-title{max-height:2.6em;*height:2.6em;color:#000000;font-family:'ProximaNovaCond','sans-serif';font-size:22.4px;line-height:1.3em;font-weight:bold;text-decoration:none;}.mobile-thumbnails-a .syndicatedItem .sponsored{color:#9C9A9C;font-size:9px;font-weight:normal;text-decoration:none;}.mobile-thumbnails-a .syndicatedItem .sponsored-url{color:green;font-size:9px;font-weight:bold;text-decoration:underline;}.mobile-thumbnails-a .syndicatedItem .video-category{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.mobile-thumbnails-a .syndicatedItem .video-duration-detail{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.mobile-thumbnails-a .syndicatedItem .video-external-data{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.mobile-thumbnails-a .syndicatedItem .video-published-date{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.mobile-thumbnails-a .syndicatedItem .video-rating{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.mobile-thumbnails-a .syndicatedItem .video-uploader{color:#e21638;font-size:15.0px;font-weight:normal;text-decoration:underline;}.mobile-thumbnails-a .syndicatedItem .video-views{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.mobile-thumbnails-a .syndicatedItem .branding{color:#e21638;font-size:15.0px;font-weight:normal;text-decoration:none;font-family:'ProximaNovaCond','sans-serif';background-image:null;text-align:left;}.mobile-thumbnails-a .videoCube.syndicatedItem .thumbBlock .branding{text-align:left;background-color:transparent;display:none;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;}.mobile-thumbnails-a .videoCube.syndicatedItem .thumbBlock .static-text{text-align:left;background-color:black;display:none;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;}.mobile-thumbnails-a .videoCube.syndicatedItem:hover .thumbnail-overlay,.mobile-thumbnails-a  .videoCube_hover.syndicatedItem .thumbnail-overl{:null;}.mobile-thumbnails-a .videoCube.thumbnail_start .thumbBlock_holder{width:40%;_width:40%;}.organic-thumbnails-a .video-title{font-family:Arial, Helvetica, sans-serif;font-size:22.4px;line-height:1.3em;font-weight:bold;max-height:2.6em;*height:2.6em;color:#000000;text-decoration:none;}.organic-thumbnails-a .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;}.organic-thumbnails-a .trc_rbox_div{width:auto;_width:99%;height:410px;border-width:0;padding:0;}.organic-thumbnails-a .videoCube .video-duration{left:36px;display:none;}.organic-thumbnails-a .videoCube .video-label-box{margin-left:0;margin-right:0px;}.organic-thumbnails-a .video-label,.organic-thumbnails-a .sponsored,.organic-thumbnails-a .sponsored-url{font-family:'ProximaNovaCond', 'sans-serif';}.organic-thumbnails-a .trc_rbox_header{font-family:'ProximaNovaCond', 'sans-serif';font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0;}.organic-thumbnails-a .sponsored-url{font-size:9px;font-weight:bold;text-decoration:underline;color:green;}.organic-thumbnails-a .sponsored{font-size:9px;font-weight:normal;text-decoration:none;color:#9C9A9C;}.organic-thumbnails-a .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbnails-a .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbnails-a .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbnails-a .video-uploader{font-size:15.0px;font-weight:normal;text-decoration:none;color:#e21638;}.organic-thumbnails-a .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbnails-a .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbnails-a .sponsored-default .video-title{max-height:2.58em;*height:2.58em;}.organic-thumbnails-a .sponsored-default .video-description{max-height:2.2em;*height:2.2em;}.organic-thumbnails-a .videoCube{width:auto;_width:auto;background-color:transparent;border-width:1px;border-color:#D6D5D3;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;}.organic-thumbnails-a div.videoCube:hover,.organic-thumbnails-a  div.videoCube_hover{background-color:transparent;}.organic-thumbnails-a .sponsored-default{background-color:#F7F6C6;}.organic-thumbnails-a div.sponsored-default:hover,.organic-thumbnails-a  div.sponsored-default.videoCube_hover{background-color:inherit;}.organic-thumbnails-a .videoCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.organic-thumbnails-a .videoCube:hover .thumbnail-overlay,.organic-thumbnails-a  .videoCube_hover .thumbnail-overlay{background-image:null;}.organic-thumbnails-a .trc_rbox_border_elm{border-color:darkgray;}.organic-thumbnails-a .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.organic-thumbnails-a div.videoCube:hover .thumbBlock{border-color:inherit;}.organic-thumbnails-a .pager_enabled{color:#0056b3;}.organic-thumbnails-a .trc_pager_counter{color:#000000;}.organic-thumbnails-a .pager_disabled{color:#7d898f;}.organic-thumbnails-a .trc_pager_prev:hover,.organic-thumbnails-a  .trc_pager_next:hover{color:#6497ED;}.organic-thumbnails-a .trc_pager_selected{color:#0056b3;}.organic-thumbnails-a .trc_pager_unselected{color:#7d898f;}.organic-thumbnails-a div.trc_pager_pages div:hover{color:#6497ED;}.organic-thumbnails-a .trc_lightbox_overlay{background-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.organic-thumbnails-a .video-label-box{text-align:left;}.organic-thumbnails-a .trc_sponsored_overlay{background-color:black;}.organic-thumbnails-a .thumbnail-emblem{background-position:5% 5%;}.organic-thumbnails-a .videoCube .sponsored{margin-top:-7px;}.organic-thumbnails-a{width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;}.organic-thumbnails-a .videoCube.vertical{border-style:solid none none none;}.organic-thumbnails-a .videoCube.horizontal{border-style:none;}.organic-thumbnails-a .trc_pager_prev,.organic-thumbnails-a .trc_pager_next{font-size:12px;font-weight:normal;text-decoration:none;}.organic-thumbnails-a .trc_pager_pages div{font-size:12px;font-weight:normal;text-decoration:none;}.organic-thumbnails-a .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbnails-a .trc_pager div{font-family:serif;}.organic-thumbnails-a .playerCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.organic-thumbnails-a .playerCube:hover .thumbnail-overlay,.organic-thumbnails-a  .playerCube_hover .thumbnail-overlay{background-image:null;}.organic-thumbnails-a .playerCube .videoCube{background-color:transparent;border-color:#D6D5D3;border-width:1px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;margin-left:0px;margin-top:0px;padding:3px;}.organic-thumbnails-a .playerCube .videoCube.horizontal{border-style:none none none none;}.organic-thumbnails-a .playerCube .videoCube .video-label-box{margin-left:81px;margin-right:0px;}.organic-thumbnails-a .playerCube .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbnails-a .playerCube .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbnails-a .playerCube .video-label-box{text-align:left;}.organic-thumbnails-a .playerCube .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbnails-a .playerCube .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbnails-a .playerCube .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;text-decoration:none;max-height:2.2em;*height:2.2em;color:black;}.organic-thumbnails-a .playerCube .videoCube .video-duration{display:block;left:36px;}.organic-thumbnails-a .playerCube .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.organic-thumbnails-a .playerCube .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbnails-a .playerCube .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbnails-a .playerCube .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbnails-a .playerCube .video-title{font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;}.organic-thumbnails-a .playerCube div.videoCube:hover,.organic-thumbnails-a  div.videoCube_hover{background-color:transparent;}.organic-thumbnails-a .whatsThisSyndicated{font-family:Arial, Verdana, sans-serif;font-size:9px;font-weight:normal;color:black;text-decoration:none;padding:0;}.organic-thumbnails-a div.syndicatedItem:hover,.organic-thumbnails-a  div.syndicatedItem.videoCube_hover{background-color:transparent;}.organic-thumbnails-a div.syndicatedItem:hover .thumbBlock{border-color:inherit;}.organic-thumbnails-a .videoCube.syndicatedItem{background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px;}.organic-thumbnails-a .videoCube.syndicatedItem.horizontal{border-style:none;}.organic-thumbnails-a .videoCube.syndicatedItem .thumbBlock{border-color:darkgray;border-width:0px;}.organic-thumbnails-a .videoCube.syndicatedItem .thumbnail-overlay{background-image:null;background-position:5% 5%;}.organic-thumbnails-a .videoCube.syndicatedItem.vertical{border-style:solid none none none;}.organic-thumbnails-a .videoCube.syndicatedItem .video-duration{display:none;left:36px;}.organic-thumbnails-a .videoCube.syndicatedItem .video-label-box{margin-left:0px;}.organic-thumbnails-a .syndicatedItem{background-color:transparent;}.organic-thumbnails-a .syndicatedItem .video-description{max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:10px;font-weight:normal;line-height:11px;text-decoration:none;}.organic-thumbnails-a .syndicatedItem .video-title{max-height:2.6em;*height:2.6em;color:#000000;font-family:'ProximaNovaCond', 'sans-serif';font-size:22.4px;line-height:1.3em;font-weight:bold;text-decoration:none;}.organic-thumbnails-a .syndicatedItem .sponsored{color:#9C9A9C;font-size:9px;font-weight:normal;text-decoration:none;}.organic-thumbnails-a .syndicatedItem .sponsored-url{color:green;font-size:9px;font-weight:bold;text-decoration:underline;}.organic-thumbnails-a .syndicatedItem .video-category{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.organic-thumbnails-a .syndicatedItem .video-duration-detail{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.organic-thumbnails-a .syndicatedItem .video-external-data{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.organic-thumbnails-a .syndicatedItem .video-published-date{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.organic-thumbnails-a .syndicatedItem .video-rating{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.organic-thumbnails-a .syndicatedItem .video-uploader{color:#e21638;font-size:15.0px;font-weight:normal;text-decoration:underline;}.organic-thumbnails-a .syndicatedItem .video-views{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.organic-thumbnails-a .syndicatedItem .branding{color:#e21638;font-size:15.0px;font-weight:normal;text-decoration:none;font-family:'ProximaNovaCond', 'sans-serif';background-image:null;text-align:left;}.organic-thumbnails-a .videoCube.syndicatedItem .thumbBlock .branding{text-align:left;background-color:transparent;display:none;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;}.organic-thumbnails-a .videoCube.syndicatedItem .thumbBlock .static-text{text-align:left;background-color:black;display:none;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;}.organic-thumbnails-a .videoCube.syndicatedItem:hover .thumbnail-overlay,.organic-thumbnails-a  .videoCube_hover.syndicatedItem .thumbnail-overl{:null;}.organic-thumbnails-a .videoCube.thumbnail_start .thumbBlock_holder{width:33%;_width:33%;}.rbox-blended .video-title{font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;text-decoration:none;}.rbox-blended .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;}.rbox-blended .trc_rbox_div{width:auto;_width:99%;height:410px;border-width:1px;padding:0;}.rbox-blended .videoCube .video-duration{left:36px;display:block;}.rbox-blended .videoCube .video-label-box{margin-left:81px;margin-right:0px;}.rbox-blended .video-label,.rbox-blended .sponsored,.rbox-blended .sponsored-url{font-family:Arial, Helvetica, sans-serif;}.rbox-blended .trc_rbox_header{font-family:Arial, Helvetica, sans-serif;font-size:16px;font-weight:bold;text-decoration:none;color:black;border-width:0;background:transparent;border-style:none none solid none;border-color:#D6D5D3;padding:0;}.rbox-blended .sponsored-url{font-size:9px;font-weight:bold;text-decoration:underline;color:green;}.rbox-blended .sponsored{font-size:9px;font-weight:normal;text-decoration:none;color:#9C9A9C;}.rbox-blended .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .sponsored-default .video-title{max-height:2.58em;*height:2.58em;}.rbox-blended .sponsored-default .video-description{max-height:2.2em;*height:2.2em;}.rbox-blended .videoCube{width:auto;_width:auto;background-color:transparent;border-width:1px;border-color:#D6D5D3;padding:3px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;}.rbox-blended div.videoCube:hover,.rbox-blended  div.videoCube_hover{background-color:transparent;}.rbox-blended .sponsored-default{background-color:#F7F6C6;}.rbox-blended div.sponsored-default:hover,.rbox-blended  div.sponsored-default.videoCube_hover{background-color:inherit;}.rbox-blended .videoCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.rbox-blended .videoCube:hover .thumbnail-overlay,.rbox-blended  .videoCube_hover .thumbnail-overlay{background-image:null;}.rbox-blended .trc_rbox_border_elm{border-color:darkgray;}.rbox-blended .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.rbox-blended div.videoCube:hover .thumbBlock{border-color:inherit;}.rbox-blended .pager_enabled{color:#0056b3;}.rbox-blended .trc_pager_counter{color:#000000;}.rbox-blended .pager_disabled{color:#7d898f;}.rbox-blended .trc_pager_prev:hover,.rbox-blended  .trc_pager_next:hover{color:#6497ED;}.rbox-blended .trc_pager_selected{color:#0056b3;}.rbox-blended .trc_pager_unselected{color:#7d898f;}.rbox-blended div.trc_pager_pages div:hover{color:#6497ED;}.rbox-blended .trc_lightbox_overlay{background-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.rbox-blended .video-label-box{text-align:left;}.rbox-blended .trc_sponsored_overlay{background-color:black;}.rbox-blended .thumbnail-emblem{background-position:5% 5%;}.rbox-blended .videoCube .sponsored{margin-top:-7px;}.rbox-blended{width:300px;_width:300px;border-width:0px;border-style:solid solid solid solid;border-color:#000000;padding:0;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;}.rbox-blended .videoCube.vertical{border-style:solid none none none;}.rbox-blended .videoCube.horizontal{border-style:none none none solid;}.rbox-blended .trc_pager_prev,.rbox-blended .trc_pager_next{font-size:12px;font-weight:normal;text-decoration:none;}.rbox-blended .trc_pager_pages div{font-size:12px;font-weight:normal;text-decoration:none;}.rbox-blended .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .trc_pager div{font-family:serif;}.rbox-blended .playerCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.rbox-blended .playerCube:hover .thumbnail-overlay,.rbox-blended  .playerCube_hover .thumbnail-overlay{background-image:null;}.rbox-blended .playerCube .videoCube{background-color:transparent;border-color:#D6D5D3;border-width:1px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;margin-left:0px;margin-top:0px;padding:3px;}.rbox-blended .playerCube .videoCube.horizontal{border-style:none none none none;}.rbox-blended .playerCube .videoCube .video-label-box{margin-left:81px;margin-right:0px;}.rbox-blended .playerCube .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .playerCube .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .playerCube .video-label-box{text-align:left;}.rbox-blended .playerCube .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .playerCube .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .playerCube .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;text-decoration:none;max-height:2.2em;*height:2.2em;color:black;}.rbox-blended .playerCube .videoCube .video-duration{display:block;left:36px;}.rbox-blended .playerCube .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.rbox-blended .playerCube .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .playerCube .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .playerCube .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.rbox-blended .playerCube .video-title{font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;}.rbox-blended .playerCube div.videoCube:hover,.rbox-blended  div.videoCube_hover{background-color:transparent;}.rbox-blended .whatsThisSyndicated{font-family:Arial, Verdana, sans-serif;font-size:9px;font-weight:normal;color:black;text-decoration:none;padding:0;}.rbox-blended div.syndicatedItem:hover,.rbox-blended  div.syndicatedItem.videoCube_hover{background-color:transparent;}.rbox-blended div.syndicatedItem:hover .thumbBlock{border-color:inherit;}.rbox-blended .videoCube.syndicatedItem{background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px;}.rbox-blended .videoCube.syndicatedItem.horizontal{border-style:none none none solid;}.rbox-blended .videoCube.syndicatedItem .thumbBlock{border-color:darkgray;border-width:0px;}.rbox-blended .videoCube.syndicatedItem .thumbnail-overlay{background-image:null;background-position:5% 5%;}.rbox-blended .videoCube.syndicatedItem.vertical{border-style:solid none none none;}.rbox-blended .videoCube.syndicatedItem .video-duration{display:block;left:36px;}.rbox-blended .videoCube.syndicatedItem .video-label-box{margin-left:0px;}.rbox-blended .syndicatedItem{background-color:transparent;}.rbox-blended .syndicatedItem .video-description{max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:10px;font-weight:normal;line-height:11px;text-decoration:none;}.rbox-blended .syndicatedItem .video-title{max-height:2.58em;*height:2.58em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:17.5px;font-weight:bold;text-decoration:none;}.rbox-blended .syndicatedItem .sponsored{color:#9C9A9C;font-size:9px;font-weight:normal;text-decoration:none;}.rbox-blended .syndicatedItem .sponsored-url{color:green;font-size:9px;font-weight:bold;text-decoration:underline;}.rbox-blended .syndicatedItem .video-category{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.rbox-blended .syndicatedItem .video-duration-detail{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.rbox-blended .syndicatedItem .video-external-data{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.rbox-blended .syndicatedItem .video-published-date{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.rbox-blended .syndicatedItem .video-rating{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.rbox-blended .syndicatedItem .video-uploader{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.rbox-blended .syndicatedItem .video-views{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.rbox-blended .syndicatedItem .branding{color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;}.rbox-blended .videoCube.syndicatedItem .thumbBlock .branding{text-align:left;background-color:transparent;display:block;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;}.rbox-blended .videoCube.syndicatedItem .thumbBlock .static-text{text-align:left;background-color:black;display:block;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;}.rbox-blended .videoCube.syndicatedItem:hover .thumbnail-overlay,.rbox-blended  .videoCube_hover.syndicatedItem .thumbnail-overl{:null;}.rbox-blended .videoCube.thumbnail_start .thumbBlock_holder{width:40%;_width:40%;}.thumbnails-a .video-title{font-family:Arial, Helvetica, sans-serif;font-size:22.4px;line-height:1.3em;font-weight:bold;max-height:2.6em;*height:2.6em;color:#000000;text-decoration:none;}.thumbnails-a .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;}.thumbnails-a .trc_rbox_div{width:auto;_width:99%;height:410px;border-width:0;padding:0;}.thumbnails-a .videoCube .video-duration{left:36px;display:none;}.thumbnails-a .videoCube .video-label-box{margin-left:0;margin-right:0px;}.thumbnails-a .video-label,.thumbnails-a .sponsored,.thumbnails-a .sponsored-url{font-family:'ProximaNovaCond', 'sans-serif';}.thumbnails-a .trc_rbox_header{font-family:'ProximaNovaCond', 'sans-serif';font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0;}.thumbnails-a .sponsored-url{font-size:9px;font-weight:bold;text-decoration:underline;color:green;}.thumbnails-a .sponsored{font-size:9px;font-weight:normal;text-decoration:none;color:#9C9A9C;}.thumbnails-a .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-a .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-a .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-a .video-uploader{font-size:15.0px;font-weight:normal;text-decoration:none;color:#e21638;}.thumbnails-a .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-a .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-a .sponsored-default .video-title{max-height:2.58em;*height:2.58em;}.thumbnails-a .sponsored-default .video-description{max-height:2.2em;*height:2.2em;}.thumbnails-a .videoCube{width:auto;_width:auto;background-color:transparent;border-width:1px;border-color:#D6D5D3;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;}.thumbnails-a div.videoCube:hover,.thumbnails-a  div.videoCube_hover{background-color:transparent;}.thumbnails-a .sponsored-default{background-color:#F7F6C6;}.thumbnails-a div.sponsored-default:hover,.thumbnails-a  div.sponsored-default.videoCube_hover{background-color:inherit;}.thumbnails-a .videoCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.thumbnails-a .videoCube:hover .thumbnail-overlay,.thumbnails-a  .videoCube_hover .thumbnail-overlay{background-image:null;}.thumbnails-a .trc_rbox_border_elm{border-color:darkgray;}.thumbnails-a .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.thumbnails-a div.videoCube:hover .thumbBlock{border-color:inherit;}.thumbnails-a .pager_enabled{color:#0056b3;}.thumbnails-a .trc_pager_counter{color:#000000;}.thumbnails-a .pager_disabled{color:#7d898f;}.thumbnails-a .trc_pager_prev:hover,.thumbnails-a  .trc_pager_next:hover{color:#6497ED;}.thumbnails-a .trc_pager_selected{color:#0056b3;}.thumbnails-a .trc_pager_unselected{color:#7d898f;}.thumbnails-a div.trc_pager_pages div:hover{color:#6497ED;}.thumbnails-a .trc_lightbox_overlay{background-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbnails-a .video-label-box{text-align:left;}.thumbnails-a .trc_sponsored_overlay{background-color:black;}.thumbnails-a .thumbnail-emblem{background-position:5% 5%;}.thumbnails-a .videoCube .sponsored{margin-top:-7px;}.thumbnails-a{width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;}.thumbnails-a .videoCube.vertical{border-style:solid none none none;}.thumbnails-a .videoCube.horizontal{border-style:none;}.thumbnails-a .trc_pager_prev,.thumbnails-a .trc_pager_next{font-size:12px;font-weight:normal;text-decoration:none;}.thumbnails-a .trc_pager_pages div{font-size:12px;font-weight:normal;text-decoration:none;}.thumbnails-a .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-a .trc_pager div{font-family:serif;}.thumbnails-a .playerCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.thumbnails-a .playerCube:hover .thumbnail-overlay,.thumbnails-a  .playerCube_hover .thumbnail-overlay{background-image:null;}.thumbnails-a .playerCube .videoCube{background-color:transparent;border-color:#D6D5D3;border-width:1px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;margin-left:0px;margin-top:0px;padding:3px;}.thumbnails-a .playerCube .videoCube.horizontal{border-style:none none none none;}.thumbnails-a .playerCube .videoCube .video-label-box{margin-left:81px;margin-right:0px;}.thumbnails-a .playerCube .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-a .playerCube .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-a .playerCube .video-label-box{text-align:left;}.thumbnails-a .playerCube .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-a .playerCube .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-a .playerCube .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;text-decoration:none;max-height:2.2em;*height:2.2em;color:black;}.thumbnails-a .playerCube .videoCube .video-duration{display:block;left:36px;}.thumbnails-a .playerCube .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.thumbnails-a .playerCube .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-a .playerCube .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-a .playerCube .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-a .playerCube .video-title{font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;}.thumbnails-a .playerCube div.videoCube:hover,.thumbnails-a  div.videoCube_hover{background-color:transparent;}.thumbnails-a .whatsThisSyndicated{font-family:Arial, Verdana, sans-serif;font-size:9px;font-weight:normal;color:black;text-decoration:none;padding:0;}.thumbnails-a div.syndicatedItem:hover,.thumbnails-a  div.syndicatedItem.videoCube_hover{background-color:transparent;}.thumbnails-a div.syndicatedItem:hover .thumbBlock{border-color:inherit;}.thumbnails-a .videoCube.syndicatedItem{background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px;}.thumbnails-a .videoCube.syndicatedItem.horizontal{border-style:none;}.thumbnails-a .videoCube.syndicatedItem .thumbBlock{border-color:darkgray;border-width:0px;}.thumbnails-a .videoCube.syndicatedItem .thumbnail-overlay{background-image:null;background-position:5% 5%;}.thumbnails-a .videoCube.syndicatedItem.vertical{border-style:solid none none none;}.thumbnails-a .videoCube.syndicatedItem .video-duration{display:none;left:36px;}.thumbnails-a .videoCube.syndicatedItem .video-label-box{margin-left:0px;}.thumbnails-a .syndicatedItem{background-color:transparent;}.thumbnails-a .syndicatedItem .video-description{max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:10px;font-weight:normal;line-height:11px;text-decoration:none;}.thumbnails-a .syndicatedItem .video-title{max-height:2.6em;*height:2.6em;color:#000000;font-family:'ProximaNovaCond', 'sans-serif';font-size:22.4px;line-height:1.3em;font-weight:bold;text-decoration:none;}.thumbnails-a .syndicatedItem .sponsored{color:#9C9A9C;font-size:9px;font-weight:normal;text-decoration:none;}.thumbnails-a .syndicatedItem .sponsored-url{color:green;font-size:9px;font-weight:bold;text-decoration:underline;}.thumbnails-a .syndicatedItem .video-category{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-a .syndicatedItem .video-duration-detail{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-a .syndicatedItem .video-external-data{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-a .syndicatedItem .video-published-date{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-a .syndicatedItem .video-rating{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-a .syndicatedItem .video-uploader{color:#e21638;font-size:15.0px;font-weight:normal;text-decoration:none;}.thumbnails-a .syndicatedItem .video-views{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-a .syndicatedItem .branding{color:#e21638;font-size:15.0px;font-weight:normal;text-decoration:none;font-family:'ProximaNovaCond', 'sans-serif';background-image:null;text-align:left;}.thumbnails-a .videoCube.syndicatedItem .thumbBlock .branding{text-align:left;background-color:transparent;display:none;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;}.thumbnails-a .videoCube.syndicatedItem .thumbBlock .static-text{text-align:left;background-color:black;display:none;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;}.thumbnails-a .videoCube.syndicatedItem:hover .thumbnail-overlay,.thumbnails-a  .videoCube_hover.syndicatedItem .thumbnail-overl{:null;}.thumbnails-a .videoCube.thumbnail_start .thumbBlock_holder{width:33%;_width:33%;}.thumbnails-b .video-title{font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:96.0px;font-weight:600;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;}.thumbnails-b .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;}.thumbnails-b .trc_rbox_div{width:auto;_width:99%;height:410px;border-width:0;padding:0;}.thumbnails-b .videoCube .video-duration{left:36px;display:none;}.thumbnails-b .videoCube .video-label-box{margin-left:0;margin-right:0px;}.thumbnails-b .video-label,.thumbnails-b .sponsored,.thumbnails-b .sponsored-url{font-family:ProximaNovaCond, sans-serif;}.thumbnails-b .trc_rbox_header{font-family:ProximaNovaCond, sans-serif;font-size:14.0px;font-weight:normal;text-decoration:none;color:#aaa;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 16px 0;}.thumbnails-b .sponsored-url{font-size:9px;font-weight:bold;text-decoration:underline;color:green;}.thumbnails-b .sponsored{font-size:9px;font-weight:normal;text-decoration:none;color:#9C9A9C;}.thumbnails-b .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-b .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-b .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-b .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-b .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-b .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-b .sponsored-default .video-title{max-height:2.58em;*height:2.58em;}.thumbnails-b .sponsored-default .video-description{max-height:2.2em;*height:2.2em;}.thumbnails-b .videoCube{width:auto;_width:auto;background-color:transparent;border-width:1px;border-color:#D6D5D3;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;}.thumbnails-b div.videoCube:hover,.thumbnails-b  div.videoCube_hover{background-color:transparent;}.thumbnails-b .sponsored-default{background-color:#F7F6C6;}.thumbnails-b div.sponsored-default:hover,.thumbnails-b  div.sponsored-default.videoCube_hover{background-color:inherit;}.thumbnails-b .videoCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.thumbnails-b .videoCube:hover .thumbnail-overlay,.thumbnails-b  .videoCube_hover .thumbnail-overlay{background-image:null;}.thumbnails-b .trc_rbox_border_elm{border-color:darkgray;}.thumbnails-b .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.thumbnails-b div.videoCube:hover .thumbBlock{border-color:inherit;}.thumbnails-b .pager_enabled{color:#0056b3;}.thumbnails-b .trc_pager_counter{color:#000000;}.thumbnails-b .pager_disabled{color:#7d898f;}.thumbnails-b .trc_pager_prev:hover,.thumbnails-b  .trc_pager_next:hover{color:#6497ED;}.thumbnails-b .trc_pager_selected{color:#0056b3;}.thumbnails-b .trc_pager_unselected{color:#7d898f;}.thumbnails-b div.trc_pager_pages div:hover{color:#6497ED;}.thumbnails-b .trc_lightbox_overlay{background-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbnails-b .video-label-box{text-align:left;}.thumbnails-b .trc_sponsored_overlay{background-color:black;}.thumbnails-b .thumbnail-emblem{background-position:5% 5%;}.thumbnails-b .videoCube .sponsored{margin-top:-7px;}.thumbnails-b{width:300px;_width:300px;border-width:1px 0px 1px 0px;border-style:none;border-color:#aaa;padding:10px 0px 20px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;}.thumbnails-b .videoCube.vertical{border-style:solid none none none;}.thumbnails-b .videoCube.horizontal{border-style:none;}.thumbnails-b .trc_pager_prev,.thumbnails-b .trc_pager_next{font-size:12px;font-weight:normal;text-decoration:none;}.thumbnails-b .trc_pager_pages div{font-size:12px;font-weight:normal;text-decoration:none;}.thumbnails-b .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-b .trc_pager div{font-family:serif;}.thumbnails-b .playerCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.thumbnails-b .playerCube:hover .thumbnail-overlay,.thumbnails-b  .playerCube_hover .thumbnail-overlay{background-image:null;}.thumbnails-b .playerCube .videoCube{background-color:transparent;border-color:#D6D5D3;border-width:1px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;margin-left:0px;margin-top:0px;padding:3px;}.thumbnails-b .playerCube .videoCube.horizontal{border-style:none none none none;}.thumbnails-b .playerCube .videoCube .video-label-box{margin-left:81px;margin-right:0px;}.thumbnails-b .playerCube .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-b .playerCube .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-b .playerCube .video-label-box{text-align:left;}.thumbnails-b .playerCube .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-b .playerCube .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-b .playerCube .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;text-decoration:none;max-height:2.2em;*height:2.2em;color:black;}.thumbnails-b .playerCube .videoCube .video-duration{display:block;left:36px;}.thumbnails-b .playerCube .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.thumbnails-b .playerCube .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-b .playerCube .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-b .playerCube .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-b .playerCube .video-title{font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;}.thumbnails-b .playerCube div.videoCube:hover,.thumbnails-b  div.videoCube_hover{background-color:transparent;}.thumbnails-b .whatsThisSyndicated{font-family:Arial, Verdana, sans-serif;font-size:9px;font-weight:normal;color:black;text-decoration:none;padding:0;}.thumbnails-b div.syndicatedItem:hover,.thumbnails-b  div.syndicatedItem.videoCube_hover{background-color:transparent;}.thumbnails-b div.syndicatedItem:hover .thumbBlock{border-color:inherit;}.thumbnails-b .videoCube.syndicatedItem{background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px;}.thumbnails-b .videoCube.syndicatedItem.horizontal{border-style:none;}.thumbnails-b .videoCube.syndicatedItem .thumbBlock{border-color:darkgray;border-width:0px;}.thumbnails-b .videoCube.syndicatedItem .thumbnail-overlay{background-image:null;background-position:5% 5%;}.thumbnails-b .videoCube.syndicatedItem.vertical{border-style:solid none none none;}.thumbnails-b .videoCube.syndicatedItem .video-duration{display:none;left:36px;}.thumbnails-b .videoCube.syndicatedItem .video-label-box{margin-left:0px;}.thumbnails-b .syndicatedItem{background-color:transparent;}.thumbnails-b .syndicatedItem .video-description{max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:10px;font-weight:normal;line-height:11px;text-decoration:none;}.thumbnails-b .syndicatedItem .video-title{max-height:72.0px;*height:72.0px;color:#000000;font-family:ProximaNovaCond, sans-serif;font-size:20.0px;line-height:24.0px;font-weight:600;text-decoration:none;}.thumbnails-b .syndicatedItem .sponsored{color:#9C9A9C;font-size:9px;font-weight:normal;text-decoration:none;}.thumbnails-b .syndicatedItem .sponsored-url{color:green;font-size:9px;font-weight:bold;text-decoration:underline;}.thumbnails-b .syndicatedItem .video-category{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-b .syndicatedItem .video-duration-detail{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-b .syndicatedItem .video-external-data{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-b .syndicatedItem .video-published-date{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-b .syndicatedItem .video-rating{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-b .syndicatedItem .video-uploader{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-b .syndicatedItem .video-views{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-b .syndicatedItem .branding{color:#aaa;font-size:15.0px;font-weight:400;text-decoration:none;font-family:ProximaNovaCond, sans-serif;background-image:null;text-align:left;}.thumbnails-b .videoCube.syndicatedItem .thumbBlock .branding{text-align:left;background-color:transparent;display:none;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;}.thumbnails-b .videoCube.syndicatedItem .thumbBlock .static-text{text-align:left;background-color:black;display:none;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;}.thumbnails-b .videoCube.syndicatedItem:hover .thumbnail-overlay,.thumbnails-b  .videoCube_hover.syndicatedItem .thumbnail-overl{:null;}.thumbnails-b .videoCube.thumbnail_start .thumbBlock_holder{width:40%;_width:40%;}.thumbnails-c .video-title{font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:22.0px;font-weight:600;max-height:66.0px;*height:66.0px;color:#000000;text-decoration:none;}.thumbnails-c .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;}.thumbnails-c .trc_rbox_div{width:auto;_width:99%;height:410px;border-width:0;padding:0;}.thumbnails-c .videoCube .video-duration{left:36px;display:none;}.thumbnails-c .videoCube .video-label-box{margin-left:0;margin-right:0px;}.thumbnails-c .video-label,.thumbnails-c .sponsored,.thumbnails-c .sponsored-url{font-family:ProximaNovaCond, sans-serif;}.thumbnails-c .trc_rbox_header{font-family:ProximaNovaCond, sans-serif;font-size:14.0px;font-weight:normal;text-decoration:none;color:#aaa;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 16px 0;}.thumbnails-c .sponsored-url{font-size:9px;font-weight:bold;text-decoration:underline;color:green;}.thumbnails-c .sponsored{font-size:9px;font-weight:normal;text-decoration:none;color:#9C9A9C;}.thumbnails-c .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-c .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-c .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-c .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-c .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-c .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-c .sponsored-default .video-title{max-height:2.58em;*height:2.58em;}.thumbnails-c .sponsored-default .video-description{max-height:2.2em;*height:2.2em;}.thumbnails-c .videoCube{width:auto;_width:auto;background-color:transparent;border-width:1px;border-color:#D6D5D3;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;}.thumbnails-c div.videoCube:hover,.thumbnails-c  div.videoCube_hover{background-color:transparent;}.thumbnails-c .sponsored-default{background-color:#F7F6C6;}.thumbnails-c div.sponsored-default:hover,.thumbnails-c  div.sponsored-default.videoCube_hover{background-color:inherit;}.thumbnails-c .videoCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.thumbnails-c .videoCube:hover .thumbnail-overlay,.thumbnails-c  .videoCube_hover .thumbnail-overlay{background-image:null;}.thumbnails-c .trc_rbox_border_elm{border-color:darkgray;}.thumbnails-c .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.thumbnails-c div.videoCube:hover .thumbBlock{border-color:inherit;}.thumbnails-c .pager_enabled{color:#0056b3;}.thumbnails-c .trc_pager_counter{color:#000000;}.thumbnails-c .pager_disabled{color:#7d898f;}.thumbnails-c .trc_pager_prev:hover,.thumbnails-c  .trc_pager_next:hover{color:#6497ED;}.thumbnails-c .trc_pager_selected{color:#0056b3;}.thumbnails-c .trc_pager_unselected{color:#7d898f;}.thumbnails-c div.trc_pager_pages div:hover{color:#6497ED;}.thumbnails-c .trc_lightbox_overlay{background-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbnails-c .video-label-box{text-align:left;}.thumbnails-c .trc_sponsored_overlay{background-color:black;}.thumbnails-c .thumbnail-emblem{background-position:5% 5%;}.thumbnails-c .videoCube .sponsored{margin-top:-7px;}.thumbnails-c{width:300px;_width:300px;border-width:1px 0px 1px 0px;border-style:none;border-color:#aaa;padding:10px 0px 20px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;}.thumbnails-c .videoCube.vertical{border-style:solid none none none;}.thumbnails-c .videoCube.horizontal{border-style:none;}.thumbnails-c .trc_pager_prev,.thumbnails-c .trc_pager_next{font-size:12px;font-weight:normal;text-decoration:none;}.thumbnails-c .trc_pager_pages div{font-size:12px;font-weight:normal;text-decoration:none;}.thumbnails-c .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-c .trc_pager div{font-family:serif;}.thumbnails-c .playerCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.thumbnails-c .playerCube:hover .thumbnail-overlay,.thumbnails-c  .playerCube_hover .thumbnail-overlay{background-image:null;}.thumbnails-c .playerCube .videoCube{background-color:transparent;border-color:#D6D5D3;border-width:1px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;margin-left:0px;margin-top:0px;padding:3px;}.thumbnails-c .playerCube .videoCube.horizontal{border-style:none none none none;}.thumbnails-c .playerCube .videoCube .video-label-box{margin-left:81px;margin-right:0px;}.thumbnails-c .playerCube .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-c .playerCube .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-c .playerCube .video-label-box{text-align:left;}.thumbnails-c .playerCube .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-c .playerCube .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-c .playerCube .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;text-decoration:none;max-height:2.2em;*height:2.2em;color:black;}.thumbnails-c .playerCube .videoCube .video-duration{display:block;left:36px;}.thumbnails-c .playerCube .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.thumbnails-c .playerCube .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-c .playerCube .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-c .playerCube .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-c .playerCube .video-title{font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;}.thumbnails-c .playerCube div.videoCube:hover,.thumbnails-c  div.videoCube_hover{background-color:transparent;}.thumbnails-c .whatsThisSyndicated{font-family:Arial, Verdana, sans-serif;font-size:9px;font-weight:normal;color:black;text-decoration:none;padding:0;}.thumbnails-c div.syndicatedItem:hover,.thumbnails-c  div.syndicatedItem.videoCube_hover{background-color:transparent;}.thumbnails-c div.syndicatedItem:hover .thumbBlock{border-color:inherit;}.thumbnails-c .videoCube.syndicatedItem{background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px;}.thumbnails-c .videoCube.syndicatedItem.horizontal{border-style:none;}.thumbnails-c .videoCube.syndicatedItem .thumbBlock{border-color:darkgray;border-width:0px;}.thumbnails-c .videoCube.syndicatedItem .thumbnail-overlay{background-image:null;background-position:5% 5%;}.thumbnails-c .videoCube.syndicatedItem.vertical{border-style:solid none none none;}.thumbnails-c .videoCube.syndicatedItem .video-duration{display:none;left:36px;}.thumbnails-c .videoCube.syndicatedItem .video-label-box{margin-left:0px;}.thumbnails-c .syndicatedItem{background-color:transparent;}.thumbnails-c .syndicatedItem .video-description{max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:10px;font-weight:normal;line-height:11px;text-decoration:none;}.thumbnails-c .syndicatedItem .video-title{max-height:66.0px;*height:66.0px;color:#000000;font-family:ProximaNovaCond, sans-serif;font-size:18.0px;line-height:22.0px;font-weight:600;text-decoration:none;}.thumbnails-c .syndicatedItem .sponsored{color:#9C9A9C;font-size:9px;font-weight:normal;text-decoration:none;}.thumbnails-c .syndicatedItem .sponsored-url{color:green;font-size:9px;font-weight:bold;text-decoration:underline;}.thumbnails-c .syndicatedItem .video-category{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-c .syndicatedItem .video-duration-detail{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-c .syndicatedItem .video-external-data{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-c .syndicatedItem .video-published-date{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-c .syndicatedItem .video-rating{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-c .syndicatedItem .video-uploader{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-c .syndicatedItem .video-views{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-c .syndicatedItem .branding{color:#aaa;font-size:15.0px;font-weight:400;text-decoration:none;font-family:ProximaNovaCond, sans-serif;background-image:null;text-align:left;}.thumbnails-c .videoCube.syndicatedItem .thumbBlock .branding{text-align:left;background-color:transparent;display:none;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;}.thumbnails-c .videoCube.syndicatedItem .thumbBlock .static-text{text-align:left;background-color:black;display:none;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;}.thumbnails-c .videoCube.syndicatedItem:hover .thumbnail-overlay,.thumbnails-c  .videoCube_hover.syndicatedItem .thumbnail-overl{:null;}.thumbnails-c .videoCube.thumbnail_start .thumbBlock_holder{width:40%;_width:40%;}.ab_thumbnails-a_2x6 img {
        max-width: none;
}

/* override bootstrap default span definitions */
.ab_thumbnails-a_2x6 [class*=span] {
    float:none;
    margin-left:0;
}


.ab_thumbnails-a_2x6 .trc_rbox_header {
        line-height: 1.2em;
        position: relative;
        display: none;
        width: 100%;
	background: transparent;
	height: auto;
}

.ab_thumbnails-a_2x6 .trc_rbox_header_span .trc_header_right_column {
        display: none;
	background: transparent;
	height: auto;
}

.ab_thumbnails-a_2x6 .trc_rbox_header .logoDiv {
        font-size: inherit;
        line-height: normal;
}

.ab_thumbnails-a_2x6 .logoDiv a {
    font-size: 100%;
}

.ab_thumbnails-a_2x6 .logoDiv a span {
    display: inline;
    color: #000000;
    font-weight: normal;
    font-size: 11.0px;
}

.ab_thumbnails-a_2x6 .videoCube a {
    padding: 0;
}

.ab_thumbnails-a_2x6 .thumbBlock {
    margin: 0;
}

.trc_elastic .ab_thumbnails-a_2x6 .video-label-box {
    height: 80.0px;
}

.ab_thumbnails-a_2x6 .videoCube .video-label-box {
    margin-top: 14px;
}

.ab_thumbnails-a_2x6 .videoCube .video-label-box .video-title {
    text-decoration: none;
    margin: 0 0 15px 0;
}

.ab_thumbnails-a_2x6 .videoCube:hover .video-label-box .video-title {
    text-decoration: underline;
}

.ab_thumbnails-a_2x6 .video-label-box .branding {
    display: block;
}

.ab_thumbnails-a_2x6 .syndicatedItem .branding {
    line-height: 18.0px;
}
.ab_thumbnails-a_2x6 .trc_header_left_column {
	background: transparent;
	height: auto;
}

.ab_thumbnails-a_2x6 .trc_rbox_header .logoDiv a {
	font-size: 100%;
}

.ab_thumbnails-a_2x6 .trc_rbox_header .trc_header_ext {
	position: relative;
	top: auto;
	right: auto;
}

.ab_thumbnails-a_2x6 .trc_rbox_outer .trc_rbox_div .video-label-box .video-uploader {
	line-height: 18.0px;
	color: #C34B9E !important;
}

.ab_thumbnails-a_2x6 .trc_rbox_outer .trc_rbox_div .syndicatedItem .video-label-box .branding {
	color: #C34B9E !important;
}

.ab_thumbnails-a_2x6 .trc_rbox_outer .trc_rbox_div .video-label-box .video-uploader:after, .ab_thumbnails-a_2x6 .trc_rbox_outer .trc_rbox_div .video-label-box .branding:after {
    content: '';
    vertical-align: middle;
    background: url('http://cdn.taboolasyndication.com/libtrc/static/thumbnails/fe5147aac013b3f5495231f578248c44.png') no-repeat;
    background-size: 10px 10px;
    width: 10px;
    height: 10px;
    position: absolute;
    display: inline-block;
    margin: 4px 0 0 3px;
}

.trc_rbox_container .ab_thumbnails-a_2x6 .trc_rbox_outer .trc_rbox_div .videoCube {
    margin-bottom: 13px;
    padding-bottom: 10px;
    margin-left: 36px;
}

.trc_related_container .ab_thumbnails-a_2x6 .trc_rbox_outer {
	margin-left: -36px;
}

.trc_rbox_container .ab_thumbnails-a_2x6 {
	margin-bottom: 5px;
}

@media screen and (min-width: 821px) {
	.trc_rbox_container .ab_thumbnails-a_2x6 .trc_rbox_outer .trc_rbox_div .videoCube {
	    width: calc(50% - 36px); 
	}
}
@media screen and (min-width: 500px) and (max-width: 820px) {
	.trc_rbox_container .ab_thumbnails-a_2x6 .trc_rbox_outer .trc_rbox_div .videoCube {
	    width: calc(50% - 36px); 
	}
}

@media screen and (max-width: 499px) {
	.trc_rbox_container .ab_thumbnails-a_2x6 .trc_rbox_outer .trc_rbox_div .videoCube {
	    margin-left: 2%;
	}
	.trc_related_container .ab_thumbnails-a_2x6 .trc_rbox_outer {
		margin-left: -2%;
	}
	.ab_thumbnails-a_2x6 .videoCube .video-label-box .video-title {
	    text-decoration: none;
	    margin: 5px 0 5px 0px;
	}
}
.ab_thumbnails-a_abp-mode img {
        max-width: none;
}

/* override bootstrap default span definitions */
.ab_thumbnails-a_abp-mode [class*=span] {
    float:none;
    margin-left:0;
}

.ab_thumbnails-a_abp-mode .trc_rbox_div {
	margin-bottom: 5px;
}

.ab_thumbnails-a_abp-mode .trc_rbox_header {
        line-height: 1.2em;
        position: relative;
        display: inline-block;
        width: 100%;
	background: transparent;
	height: auto;
}

.ab_thumbnails-a_abp-mode .trc_rbox_header_span .trc_header_right_column {
        display: none;
	background: transparent;
	height: auto;
}

.ab_thumbnails-a_abp-mode .trc_rbox_header .logoDiv {
        font-size: inherit;
        line-height: normal;
}

.ab_thumbnails-a_abp-mode .logoDiv a {
    font-size: 100%;
}

.ab_thumbnails-a_abp-mode .logoDiv a span {
    display: inline;
    color: #000000;
    font-weight: normal;
    font-size: 11.0px;
}

.ab_thumbnails-a_abp-mode .videoCube a {
    padding: 0;
}

.trc_elastic .ab_thumbnails-a_abp-mode .trc_rbox_outer .videoCube {
	margin-bottom: 18px;
}

.ab_thumbnails-a_abp-mode .thumbBlock {
    margin: 0;
}

.trc_elastic .ab_thumbnails-a_abp-mode .video-label-box {
    height: 76.0px;
}

.ab_thumbnails-a_abp-mode .videoCube .video-label-box .video-title {
    text-decoration: none;
    margin-bottom: 5px;
}

.ab_thumbnails-a_abp-mode .videoCube:hover .video-label-box .video-title {
    text-decoration: none;
}

.ab_thumbnails-a_abp-mode .video-label-box .branding {
    display: block;
}

.ab_thumbnails-a_abp-mode .syndicatedItem .branding {
    line-height: 24.0px;
}
.ab_thumbnails-a_abp-mode .videoCube:hover .branding {
    text-decoration: underline;
}
.ab_thumbnails-a_abp-mode .syndicatedItem .branding:after{
      content: '';
	  vertical-align: middle;
	  box-sizing: border-box;
	    font-weight: bold;
	  width: 16px;
	  height: 16px;
	  margin: 6px 0 0 6px;
	  position: absolute;
	  background: url(http://resources.taboola.com/libtrc/static/thumbnails/c7fc2f0b4979bf67ff12483fef7c054a.png) no-repeat 0 0;
	  display: inline-block;
}
.ab_thumbnails-a_abp-mode .trc_header_left_column {
	background: transparent;
	height: auto;
	width: 48%;
	display: inline-block;
}

.ab_thumbnails-a_abp-mode .trc_rbox_header .logoDiv a {
	font-size: 100%;
}

.ab_thumbnails-a_abp-mode .videoCube .video-label-box {
	margin-top: 25px;
}

.ab_thumbnails-a_abp-mode .trc_rbox_header .trc_header_ext {
	position: relative;
	top: auto;
	right: auto;
}
.ab_thumbnails-a_abp-mode .video-uploader {
  line-height: 24.0px;
}
.ab_thumbnails-a_abp-mode .videoCube .video-label dt {
  font-weight: normal;
  line-height: 24.0px;
}
.ab_thumbnails-a_abp-mode .video-uploader:after{
      content: '';
	  vertical-align: middle;
	  background: url(http://resources.taboola.com/libtrc/static/thumbnails/c7fc2f0b4979bf67ff12483fef7c054a.png) no-repeat 0 0;
	  box-sizing: border-box;
	  width: 16px;
	  height: 16px;
	  margin: 6px 0 0 6px;
	  position: absolute;
	  display: inline-block;
}
.trc_elastic .ab_thumbnails-a_abp-mode .thumbnail_start .thumbBlock_holder {
  margin-right: 18px;
}

@media screen and (max-width: 799px) {
    .ab_thumbnails-a_abp-mode .trc_rbox_outer .trc_rbox_div .videoCube .video-label-box {
		 display: inline-block;
		 margin-top: 15px;
		 
	}
	.ab_thumbnails-a_abp-mode .trc_rbox_outer .trc_rbox_div .videoCube .thumbBlock_holder {
		 width: 100%;
		 
	}
	.ab_thumbnails-a_abp-mode .trc_rbox_outer .trc_rbox_div .videoCube .video-label-box .video-title {
		font-size: 22px;
	}
}
@media screen and (min-width: 600px) and (max-width: 799px) {
	.trc_elastic .ab_thumbnails-a_abp-mode .trc_rbox_outer .videoCube{
		padding: 0 82px 0 82px;
		margin-bottom: 34px;
	}	
	  .ab_thumbnails-a_abp-mode .trc_rbox_outer .trc_rbox_div .videoCube .video-label-box {
		 padding: 0 16px 0 16px;
		 
	}
}
@media screen and (max-width: 599px) {
	  .ab_thumbnails-a_abp-mode .trc_rbox_outer .trc_rbox_div .videoCube .video-label-box {
		 padding: 0 19px 0 19px;
	}
	.trc_elastic .ab_thumbnails-a_abp-mode .trc_rbox_outer .videoCube.syndicatedItem{
		margin-bottom: 44px;
	}
	.trc_elastic .ab_thumbnails-a_abp-mode .trc_rbox_outer .videoCube{
		margin-bottom: 36px;
	}
	/*.ab_thumbnails-a_abp-mode .trc_rbox_outer .trc_rbox_div .videoCube .video-label-box {
		  height: 85px;  
	}
	.ab_thumbnails-a_abp-mode .trc_rbox_outer .trc_rbox_div .videoCube .video-label-box .video-title {
	  height: 56px;
	}*/
}
.ab_thumbnails-a_text-under img {
        max-width: none;
}

/* override bootstrap default span definitions */
.ab_thumbnails-a_text-under [class*=span] {
    float:none;
    margin-left:0;
}


.ab_thumbnails-a_text-under .trc_rbox_header {
        line-height: 1.2em;
        position: relative;
        display: none;
        width: 100%;
	background: transparent;
	height: auto;
}

.ab_thumbnails-a_text-under .trc_rbox_header_span .trc_header_right_column {
        display: none;
	background: transparent;
	height: auto;
}

.ab_thumbnails-a_text-under .trc_rbox_header .logoDiv {
        font-size: inherit;
        line-height: normal;
}

.ab_thumbnails-a_text-under .logoDiv a {
    font-size: 100%;
}

.ab_thumbnails-a_text-under .logoDiv a span {
    display: inline;
    color: #000000;
    font-weight: normal;
    font-size: 11.0px;
}

.ab_thumbnails-a_text-under .videoCube a {
    padding: 0;
}

.ab_thumbnails-a_text-under .thumbBlock {
    margin: 0;
}

.trc_elastic .ab_thumbnails-a_text-under .video-label-box {
    height: 80.0px;
}

.ab_thumbnails-a_text-under .videoCube .video-label-box {
    margin-top: 5px;
}

.ab_thumbnails-a_text-under .videoCube .video-label-box .video-title {
    text-decoration: none;
    margin: 0;
}

.ab_thumbnails-a_text-under .videoCube:hover .video-label-box .video-title {
    text-decoration: underline;
}

.ab_thumbnails-a_text-under .video-label-box .branding {
    display: block;
}

.ab_thumbnails-a_text-under .syndicatedItem .branding {
    line-height: 20.0px;
}
.ab_thumbnails-a_text-under .trc_header_left_column {
	background: transparent;
	height: auto;
}

.ab_thumbnails-a_text-under .trc_rbox_header .logoDiv a {
	font-size: 100%;
}

.ab_thumbnails-a_text-under .trc_rbox_header .trc_header_ext {
	position: relative;
	top: auto;
	right: auto;
}

.ab_thumbnails-a_text-under .video-uploader {
	line-height: 20.0px;
}

.ab_thumbnails-a_text-under .video-uploader:after, .ab_thumbnails-a_text-under .branding:after {
	content: '';
    vertical-align: middle;
    background: url('http://resources.taboola.com/libtrc/static/thumbnails/fe5147aac013b3f5495231f578248c44.png') no-repeat;
    //background: url('http://cdn.taboolasyndication.com/libtrc/static/thumbnails/fe5147aac013b3f5495231f578248c44.png') no-repeat;
    background-size: 10px 10px;
    width: 10px;
    height: 10px;
    position: absolute;
    display: inline-block;
    margin: 5px 0 0 3px;
}
.ab_thumbnails-a_text-under2 img {
        max-width: none;
}

/* override bootstrap default span definitions */
.ab_thumbnails-a_text-under2 [class*=span] {
    float:none;
    margin-left:0;
}


.ab_thumbnails-a_text-under2 .trc_rbox_header {
        line-height: 1.2em;
        position: relative;
        display: none;
        width: 100%;
	background: transparent;
	height: auto;
}

.ab_thumbnails-a_text-under2 .trc_rbox_header_span .trc_header_right_column {
        display: none;
	background: transparent;
	height: auto;
}

.ab_thumbnails-a_text-under2 .trc_rbox_header .logoDiv {
        font-size: inherit;
        line-height: normal;
}

.ab_thumbnails-a_text-under2 .logoDiv a {
    font-size: 100%;
}

.ab_thumbnails-a_text-under2 .logoDiv a span {
    display: inline;
    color: #000000;
    font-weight: normal;
    font-size: 11.0px;
}

.ab_thumbnails-a_text-under2 .videoCube a {
    padding: 0;
}

.ab_thumbnails-a_text-under2 .thumbBlock {
    margin: 0;
}

.trc_elastic .ab_thumbnails-a_text-under2 .video-label-box {
    height: 80.0px;
}

.ab_thumbnails-a_text-under2 .videoCube .video-label-box {
    margin-top: 14px;
}

.ab_thumbnails-a_text-under2 .videoCube .video-label-box .video-title {
    text-decoration: none;
    margin: 0 0 15px 0;
}

.ab_thumbnails-a_text-under2 .videoCube:hover .video-label-box .video-title {
    text-decoration: underline;
}

.ab_thumbnails-a_text-under2 .video-label-box .branding {
    display: block;
}

.ab_thumbnails-a_text-under2 .syndicatedItem .branding {
    line-height: 18.0px;
}
.ab_thumbnails-a_text-under2 .trc_header_left_column {
	background: transparent;
	height: auto;
}

.ab_thumbnails-a_text-under2 .trc_rbox_header .logoDiv a {
	font-size: 100%;
}

.ab_thumbnails-a_text-under2 .trc_rbox_header .trc_header_ext {
	position: relative;
	top: auto;
	right: auto;
}

.ab_thumbnails-a_text-under2 .trc_rbox_outer .trc_rbox_div .video-label-box .video-uploader {
	line-height: 18.0px;
	color: #C34B9E !important;
}

.ab_thumbnails-a_text-under2 .trc_rbox_outer .trc_rbox_div .syndicatedItem .video-label-box .branding {
	color: #C34B9E !important;
}

.ab_thumbnails-a_text-under2 .trc_rbox_outer .trc_rbox_div .video-label-box .video-uploader:after, .ab_thumbnails-a_text-under2 .trc_rbox_outer .trc_rbox_div .video-label-box .branding:after {
    content: '';
    vertical-align: middle;
    background: url('http://cdn.taboolasyndication.com/libtrc/static/thumbnails/fe5147aac013b3f5495231f578248c44.png') no-repeat;
    background-size: 10px 10px;
    width: 10px;
    height: 10px;
    position: absolute;
    display: inline-block;
    margin: 4px 0 0 3px;
}

.trc_rbox_container .ab_thumbnails-a_text-under2 .trc_rbox_outer .trc_rbox_div .videoCube {
    margin-bottom: 13px;
    padding-bottom: 10px;
    margin-left: 36px;
}

.trc_related_container .ab_thumbnails-a_text-under2 .trc_rbox_outer {
	margin-left: -36px;
}

.trc_rbox_container .ab_thumbnails-a_text-under2 {
	margin-bottom: 5px;
}

@media screen and (min-width: 821px) {
	.trc_rbox_container .ab_thumbnails-a_text-under2 .trc_rbox_outer .trc_rbox_div .videoCube {
	    width: calc(33.33% - 36px); 
	}
}
@media screen and (min-width: 500px) and (max-width: 820px) {
	.trc_rbox_container .ab_thumbnails-a_text-under2 .trc_rbox_outer .trc_rbox_div .videoCube {
	    width: calc(50% - 36px); 
	}
}

@media screen and (max-width: 499px) {
	.trc_rbox_container .ab_thumbnails-a_text-under2 .trc_rbox_outer .trc_rbox_div .videoCube {
	    margin-left: 2%;
	}
	.trc_related_container .ab_thumbnails-a_text-under2 .trc_rbox_outer {
		margin-left: -2%;
	}
	.ab_thumbnails-a_text-under2 .videoCube .video-label-box .video-title {
	    text-decoration: none;
	    margin: 5px 0 5px 0px;
	}
}
.mobile-thumbnails-a img {
        max-width: none;
}

/* override bootstrap default span definitions */
.mobile-thumbnails-a [class*=span] {
    float:none;
    margin-left:0;
}


.mobile-thumbnails-a .trc_rbox_header {
        line-height: 1.2em;
        position: relative;
        display: none;
        width: 100%;
	background: transparent;
	height: auto;
}

.mobile-thumbnails-a .trc_rbox_header_span .trc_header_right_column {
        display: none;
	background: transparent;
	height: auto;
}

.mobile-thumbnails-a .trc_rbox_header .logoDiv {
        font-size: inherit;
        line-height: normal;
}

.mobile-thumbnails-a .logoDiv a {
    font-size: 100%;
}

.mobile-thumbnails-a .logoDiv a span {
    display: inline;
    color: #000000;
    font-weight: normal;
    font-size: 11.0px;
}

.mobile-thumbnails-a .videoCube a {
    padding: 0;
}

.mobile-thumbnails-a .thumbBlock {
    margin: 0;
}

.trc_elastic .mobile-thumbnails-a .video-label-box {
    height: 90.0px;
}

.mobile-thumbnails-a .videoCube .video-label-box {
    margin-top: 5px;
}

.mobile-thumbnails-a .videoCube .video-label-box .video-title {
    text-decoration: none;
    margin: 0;
}

.mobile-thumbnails-a .videoCube:hover .video-label-box .video-title {
    text-decoration: underline;
}

.mobile-thumbnails-a .video-label-box .branding {
    display: block;
}

.mobile-thumbnails-a .syndicatedItem .branding {
    line-height: 30.0px;
}
.mobile-thumbnails-a .trc_header_left_column {
	background: transparent;
	height: auto;
	width: 48%;
	display: inline-block;
}

.mobile-thumbnails-a .trc_rbox_header .logoDiv a {
	font-size: 100%;
}

.mobile-thumbnails-a .trc_rbox_header .trc_header_ext {
	position: relative;
	top: auto;
	right: auto;
}
.mobile-thumbnails-a .video-uploader {
  padding-left: 2px;
  line-height: 24.0px;
}
.mobile-thumbnails-a .videoCube .video-label dt {
  font-weight: normal;
  line-height: 24.0px;
}
.mobile-thumbnails-a .video-uploader:after{
      content: '\\203A';
	  vertical-align: middle;
	  color: #E21638;
	  box-sizing: border-box;
	    font-weight: bold;
	  width: 16px;
	  height: 16px;
	  font-family: ProximaNovaCond;
	  margin: -2px 0 0 6px;
	  position: absolute;
	  font-size: 20px;
}
.trc_elastic .mobile-thumbnails-a .thumbnail_start .thumbBlock_holder {
  margin-right: 18px;
}
.mobile-thumbnails-a .syndicatedItem .branding:after{
      content: '\\203A';
	  vertical-align: middle;
	  color: #E21638;
	  box-sizing: border-box;
	    font-weight: bold;
	  width: 16px;
	  height: 16px;
	  font-family: ProximaNovaCond;
	  margin: -2px 0 0 6px;
	  position: absolute;
	  font-size: 20px;
}
.mobile-thumbnails-a .videoCube:hover .branding {
    text-decoration: underline;
}
.trc_elastic .mobile-thumbnails-a .trc_rbox_outer .videoCube {
	margin-bottom: 40px;
}
.organic-thumbnails-a img {
        max-width: none;
}

/* override bootstrap default span definitions */
.organic-thumbnails-a [class*=span] {
    float:none;
    margin-left:0;
}

.organic-thumbnails-a .trc_rbox_div {
	margin-bottom: 5px;
}

.organic-thumbnails-a .trc_rbox_header {
        line-height: 1.2em;
        position: relative;
        display: inline-block;
        width: 100%;
	background: transparent;
	height: auto;
}

.organic-thumbnails-a .trc_rbox_header_span .trc_header_right_column {
        display: none;
	background: transparent;
	height: auto;
}

.organic-thumbnails-a .trc_rbox_header .logoDiv {
        font-size: inherit;
        line-height: normal;
}

.organic-thumbnails-a .logoDiv a {
    font-size: 100%;
}

.organic-thumbnails-a .logoDiv a span {
    display: inline;
    color: #000000;
    font-weight: normal;
    font-size: 11.0px;
}

.organic-thumbnails-a .videoCube a {
    padding: 0;
}

.trc_elastic .organic-thumbnails-a .trc_rbox_outer .videoCube {
	margin-bottom: 57px;
}

.organic-thumbnails-a .thumbBlock {
    margin: 0;
}

.trc_elastic .organic-thumbnails-a .video-label-box {
    height: 76.0px;
}

.organic-thumbnails-a .videoCube .video-label-box .video-title {
    text-decoration: none;
    margin-bottom: 5px;
}

.organic-thumbnails-a .videoCube:hover .video-label-box .video-title {
    text-decoration: none;
}

.organic-thumbnails-a .video-label-box .branding {
    display: block;
}

.organic-thumbnails-a .syndicatedItem .branding {
    line-height: 24.0px;
}
.organic-thumbnails-a .videoCube:hover .branding {
    text-decoration: underline;
}
.organic-thumbnails-a .syndicatedItem .branding:after{
      content: '';
	  vertical-align: middle;
	  box-sizing: border-box;
	    font-weight: bold;
	  width: 16px;
	  height: 16px;
	  margin: 6px 0 0 6px;
	  position: absolute;
	  background: url(http://resources.taboola.com/libtrc/static/thumbnails/c7fc2f0b4979bf67ff12483fef7c054a.png) no-repeat 0 0;
	  display: inline-block;
}
.organic-thumbnails-a .trc_header_left_column {
	background: transparent;
	height: auto;
	width: 48%;
	display: inline-block;
}

.organic-thumbnails-a .trc_rbox_header .logoDiv a {
	font-size: 100%;
}

.organic-thumbnails-a .trc_rbox_header .trc_header_ext {
	position: relative;
	top: auto;
	right: auto;
}
.organic-thumbnails-a .video-uploader {
  line-height: 24.0px;
}
.organic-thumbnails-a .videoCube .video-label dt {
  font-weight: normal;
  line-height: 24.0px;
}
.organic-thumbnails-a .video-uploader:after{
      content: '';
	  vertical-align: middle;
	  background: url(http://resources.taboola.com/libtrc/static/thumbnails/c7fc2f0b4979bf67ff12483fef7c054a.png) no-repeat 0 0;
	  box-sizing: border-box;
	  width: 16px;
	  height: 16px;
	  margin: 6px 0 0 6px;
	  position: absolute;
	  display: inline-block;
}
.trc_elastic .organic-thumbnails-a .thumbnail_start .thumbBlock_holder {
  margin-right: 18px;
}
@media screen and (min-width: 799px) {
	.organic-thumbnails-a .videoCube a.item-label-href{
	  display: table;
	  vertical-align: middle;
	}
	.organic-thumbnails-a .videoCube .video-label-box {
		display: table-cell;
		  vertical-align: middle;
	}	
}
@media screen and (min-width: 1025px) {
	.organic-thumbnails-a .videoCube a.item-label-href{
	  height: 119px;
	}
}
@media screen and (min-width: 995px) and (max-width: 1024px) {
	.organic-thumbnails-a .videoCube a.item-label-href{
	  height: 116px;
	}
}
@media screen and (min-width: 945px) and (max-width: 994px) {
	.organic-thumbnails-a .videoCube a.item-label-href{
	  height: 110px;
	}
}
@media screen and (min-width: 900px) and (max-width: 945px) {
	.organic-thumbnails-a .videoCube a.item-label-href{
	  height: 103px;
	}
}
@media screen and (min-width: 860px) and (max-width: 899px) {
	.organic-thumbnails-a .videoCube a.item-label-href{
	  height: 98px;
	}
}
@media screen and (min-width: 860px) and (max-width: 899px) {
	.organic-thumbnails-a .videoCube a.item-label-href{
	  height: 98px;
	}
}
@media screen and (min-width: 830px) and (max-width: 859px) {
	.organic-thumbnails-a .videoCube a.item-label-href{
	  height: 94px;
	}
}
@media screen and (min-width: 800px) and (max-width: 829px) {
	.organic-thumbnails-a .videoCube a.item-label-href{
	  height: 91px;
	}
}
@media screen and (max-width: 799px) {
    .organic-thumbnails-a .trc_rbox_outer .trc_rbox_div .videoCube .video-label-box {
		 display: inline-block;
		 margin-top: 15px;
		 
	}
	.organic-thumbnails-a .trc_rbox_outer .trc_rbox_div .videoCube .thumbBlock_holder {
		 width: 100%;
		 
	}
	.organic-thumbnails-a .trc_rbox_outer .trc_rbox_div .videoCube .video-label-box .video-title {
		font-size: 22px;
	}
}
@media screen and (min-width: 600px) and (max-width: 799px) {
	.trc_elastic .organic-thumbnails-a .trc_rbox_outer .videoCube{
		padding: 0 82px 0 82px;
		margin-bottom: 34px;
	}	
	  .organic-thumbnails-a .trc_rbox_outer .trc_rbox_div .videoCube .video-label-box {
		 padding: 0 16px 0 16px;
		 
	}
	.organic-thumbnails-a .trc-widget-footer{
		padding-right: 82px;
	}
}
@media screen and (max-width: 599px) {
	  .organic-thumbnails-a .trc_rbox_outer .trc_rbox_div .videoCube .video-label-box {
		 padding: 0 19px 0 19px;
	}
	.trc_elastic .organic-thumbnails-a .trc_rbox_outer .videoCube.syndicatedItem{
		margin-bottom: 44px;
	}
	.trc_elastic .organic-thumbnails-a .trc_rbox_outer .videoCube{
		margin-bottom: 36px;
	}
}
.thumbnails-a img {
        max-width: none;
}

/* override bootstrap default span definitions */
.thumbnails-a [class*=span] {
    float:none;
    margin-left:0;
}

.thumbnails-a .trc_rbox_div {
	margin-bottom: 5px;
}

.thumbnails-a .trc_rbox_header {
        line-height: 1.2em;
        position: relative;
        display: inline-block;
        width: 100%;
	background: transparent;
	height: auto;
}

.thumbnails-a .trc_rbox_header_span .trc_header_right_column {
        display: none;
	background: transparent;
	height: auto;
}

.thumbnails-a .trc_rbox_header .logoDiv {
        font-size: inherit;
        line-height: normal;
}

.thumbnails-a .logoDiv a {
    font-size: 100%;
}

.thumbnails-a .logoDiv a span {
    display: inline;
    color: #000000;
    font-weight: normal;
    font-size: 11.0px;
}

.thumbnails-a .videoCube a {
    padding: 0;
}

.trc_elastic .thumbnails-a .trc_rbox_outer .videoCube {
	margin-bottom: 57px;
}

.thumbnails-a .thumbBlock {
    margin: 0;
}

.trc_elastic .thumbnails-a .video-label-box {
    height: 76.0px;
}

.thumbnails-a .videoCube .video-label-box .video-title {
    text-decoration: none;
    margin-bottom: 5px;
}

.thumbnails-a .videoCube:hover .video-label-box .video-title {
    text-decoration: none;
}

.thumbnails-a .video-label-box .branding {
    display: block;
}

.thumbnails-a .syndicatedItem .branding {
    line-height: 24.0px;
}
.thumbnails-a .videoCube:hover .branding {
    text-decoration: underline;
}
.thumbnails-a .syndicatedItem .branding:after{
      content: '';
	  vertical-align: middle;
	  box-sizing: border-box;
	    font-weight: bold;
	  width: 16px;
	  height: 16px;
	  margin: 6px 0 0 6px;
	  position: absolute;
	  background: url(http://resources.taboola.com/libtrc/static/thumbnails/c7fc2f0b4979bf67ff12483fef7c054a.png) no-repeat 0 0;
	  display: inline-block;
}
.thumbnails-a .trc_header_left_column {
	background: transparent;
	height: auto;
	width: 48%;
	display: inline-block;
}

.thumbnails-a .trc_rbox_header .logoDiv a {
	font-size: 100%;
}

.thumbnails-a .trc_rbox_header .trc_header_ext {
	position: relative;
	top: auto;
	right: auto;
}
.thumbnails-a .video-uploader {
  line-height: 24.0px;
}
.thumbnails-a .videoCube .video-label dt {
  font-weight: normal;
  line-height: 24.0px;
}
.thumbnails-a .video-uploader:after{
      content: '';
	  vertical-align: middle;
	  background: url(http://resources.taboola.com/libtrc/static/thumbnails/c7fc2f0b4979bf67ff12483fef7c054a.png) no-repeat 0 0;
	  box-sizing: border-box;
	  width: 16px;
	  height: 16px;
	  margin: 6px 0 0 6px;
	  position: absolute;
	  display: inline-block;
}
.trc_elastic .thumbnails-a .thumbnail_start .thumbBlock_holder {
  margin-right: 18px;
}
@media screen and (min-width: 799px) {
	.thumbnails-a .videoCube a.item-label-href{
	  display: table;
	  vertical-align: middle;
	}
	.thumbnails-a .videoCube .video-label-box {
		display: table-cell;
		  vertical-align: middle;
	}	
}
@media screen and (min-width: 1025px) {
	.thumbnails-a .videoCube a.item-label-href{
	  height: 119px;
	}
}
@media screen and (min-width: 995px) and (max-width: 1024px) {
	.thumbnails-a .videoCube a.item-label-href{
	  height: 116px;
	}
}
@media screen and (min-width: 945px) and (max-width: 994px) {
	.thumbnails-a .videoCube a.item-label-href{
	  height: 110px;
	}
}
@media screen and (min-width: 900px) and (max-width: 945px) {
	.thumbnails-a .videoCube a.item-label-href{
	  height: 103px;
	}
}
@media screen and (min-width: 860px) and (max-width: 899px) {
	.thumbnails-a .videoCube a.item-label-href{
	  height: 98px;
	}
}
@media screen and (min-width: 860px) and (max-width: 899px) {
	.thumbnails-a .videoCube a.item-label-href{
	  height: 98px;
	}
}
@media screen and (min-width: 830px) and (max-width: 859px) {
	.thumbnails-a .videoCube a.item-label-href{
	  height: 94px;
	}
}
@media screen and (min-width: 800px) and (max-width: 829px) {
	.thumbnails-a .videoCube a.item-label-href{
	  height: 91px;
	}
}
@media screen and (max-width: 799px) {
    .thumbnails-a .trc_rbox_outer .trc_rbox_div .videoCube .video-label-box {
		 display: inline-block;
		 margin-top: 15px;
		 
	}
	.thumbnails-a .trc_rbox_outer .trc_rbox_div .videoCube .thumbBlock_holder {
		 width: 100%;
		 
	}
	.thumbnails-a .trc_rbox_outer .trc_rbox_div .videoCube .video-label-box .video-title {
		font-size: 22px;
	}
}
@media screen and (min-width: 600px) and (max-width: 799px) {
	.trc_elastic .thumbnails-a .trc_rbox_outer .videoCube{
		padding: 0 82px 0 82px;
		margin-bottom: 34px;
	}	
	  .thumbnails-a .trc_rbox_outer .trc_rbox_div .videoCube .video-label-box {
		 padding: 0 16px 0 16px;
		 
	}
	.thumbnails-a .trc-widget-footer{
		padding-right: 82px;
	}
}
@media screen and (max-width: 599px) {
	  .thumbnails-a .trc_rbox_outer .trc_rbox_div .videoCube .video-label-box {
		 padding: 0 19px 0 19px;
	}
	.trc_elastic .thumbnails-a .trc_rbox_outer .videoCube.syndicatedItem{
		margin-bottom: 44px;
	}
	.trc_elastic .thumbnails-a .trc_rbox_outer .videoCube{
		margin-bottom: 36px;
	}
}
.thumbnails-b img {
        max-width: none;
}

/* override bootstrap default span definitions */
.thumbnails-b [class*=span] {
    float:none;
    margin-left:0;
}


.thumbnails-b .trc_rbox_header {
        line-height: 1.2em;
        position: relative;
        display: none;
        width: 100%;
	background: transparent;
	height: auto;
}

.thumbnails-b .trc_rbox_header_span .trc_header_right_column {
        display: none;
	background: transparent;
	height: auto;
}

.thumbnails-b .trc_rbox_header .logoDiv {
        font-size: inherit;
        line-height: normal;
}

.thumbnails-b .logoDiv a {
    font-size: 100%;
}

.thumbnails-b .logoDiv a span {
    display: inline;
    color: #000000;
    font-weight: normal;
    font-size: 11px;
}

.thumbnails-b .videoCube a {
    padding: 0;
}

.thumbnails-b .thumbBlock {
    margin: 0;
}

.trc_elastic .thumbnails-b .video-label-box {
    height: 105.0px;
}

.thumbnails-b .videoCube .video-label-box {
    margin-top: 20px;
}

.thumbnails-b .videoCube .video-label-box .video-title {
    text-decoration: none;
    margin: 0 0 13px 0;
}

.thumbnails-b .videoCube:hover .video-label-box .video-title {
    text-decoration: underline;
}

.thumbnails-b .video-label-box .branding {
    display: block;
}

.thumbnails-b .syndicatedItem .branding {
    line-height: 18.0px;
}
.thumbnails-b .trc_header_left_column {
	width: 48%;
	display: inline-block;
	background: transparent;
	height: auto;
}

.thumbnails-b .trc_rbox_header .logoDiv a {
	font-size: 100%;
}

.thumbnails-b .trc_rbox_header .trc_header_ext {
	position: relative;
	top: auto;
	right: auto;
}
.trc_elastic .trc_rbox.thumbnails-b .trc_rbox_div{
	width: 300px;
    margin: auto;
}
.trc_elastic .thumbnails-b .trc_rbox_outer .videoCube {
	margin-bottom: 0px;
}
.thumbnails-c img {
        max-width: none;
}

/* override bootstrap default span definitions */
.thumbnails-c [class*=span] {
    float:none;
    margin-left:0;
}

.thumbnails-c .trc_rbox_div {
	margin-bottom: 0;
}

.thumbnails-c .trc_rbox_header {
        line-height: 1.2em;
        position: relative;
        display: none;
        width: 100%;
	background: transparent;
	height: auto;
}

.thumbnails-c .trc_rbox_header_span .trc_header_right_column {
        display: none;
	background: transparent;
	height: auto;
}

.thumbnails-c .trc_rbox_header .logoDiv {
        font-size: inherit;
        line-height: normal;
}

.thumbnails-c .logoDiv a {
    font-size: 100%;
}

.thumbnails-c .logoDiv a span {
    display: inline;
    color: #000000;
    font-weight: normal;
    font-size: 11px;
}

.thumbnails-c .videoCube a {
    padding: 0;
}

.trc_elastic .thumbnails-c .trc_rbox_outer .videoCube {
	margin-bottom: 0px;
}

.thumbnails-c .thumbBlock {
    margin: 0;
}

.trc_elastic .thumbnails-c .trc_rbox_outer .video-label-box {
    height: 100.0px;
}

.thumbnails-c .videoCube .video-label-box .video-title {
    text-decoration: none;
    margin-bottom: 10px;
}

.thumbnails-c .videoCube:hover .video-label-box .video-title {
    text-decoration: underline;
}

.thumbnails-c .video-label-box .branding {
    display: block;
}

.thumbnails-c .syndicatedItem .branding {
    line-height: 18.0px;
}
.thumbnails-c .trc_header_left_column {
	width: 48%;
	display: inline-block;
	background: transparent;
	height: auto;
}

.thumbnails-c .trc_rbox_header .logoDiv a {
	font-size: 100%;
}

.thumbnails-c .videoCube .video-label-box {
	margin-top: 0px;
}

.thumbnails-c .trc_rbox_header .trc_header_ext {
	position: relative;
	top: auto;
	right: auto;
}
.thumbnails-c .videoCube.thumbnail_start .thumbBlock_holder {
    width: 120px;
    height: 80px;
}
.trc_elastic .trc_rbox.thumbnails-c .trc_rbox_div{
	width: 300px;
    margin: auto;
}
`,locale:{rbox:{'":{"MIME-Version':null,"Sponsored Link":[null,"Sponsored Link"],"Sponsored Link:":[null,"Sponsored Link:"],"Sponsored Video:":[null,"Sponsored Video:"],"Sponsored Video":[null,"Sponsored Video"],"in %1 Seconds":[null,"%1"],"%1 of %2":[null,"%1 of %2"]}}}},TRC.utm.start=(new Date).getTime(),TRC._taboolaClone=[],TRC.PROTOCOL=e.location.protocol.match(/http/)?e.location.protocol:"http:",TRC.SYNDICATED_CLASS_NAME="syndicatedItem",TRC.SPONSORED_CONTAINER_CLASS_NAME="trc-content-sponsored",e._tblConsole=e._tblConsole||[],TRC.pConsole=function(t,n,s,o,i){try{e._tblConsole.length>400&&(e._tblConsole=[]),_tblConsole.push({service:"RBox",tab:t,log:{type:n,title:s,infoValue:o,infoType:i||"string",tstmp:(new Date).getTime()}})}catch{}},TRC.pConsole("","time","loader.js loaded",""),TRC.pConsole("page","info","user agent",navigator.userAgent),TRC.styleInjected=!1;var s,w,z=TRC.PROTOCOL,F="_taboola",n=null,h=[],M=e.onerror,a=null,i=[],g=[],r=null,p=!1,m=[],v=[],l={publisher:TRC.publisherId="gawkermedia-network"},c=!1,o=null,k=!1,te=100*Math.random(),f=null,se=z+"//netstorage.taboola.com/libtrc/common/cross-check.js",j={video:"video",article:"article",category:"category",home:"home",search:"search",photo:"photo",video_source:"video"},ie="pm_pgtp",C={prod:"//widget.perfectmarket.com",sb:"//widget.sandbox.perfectmarket.com"},y=C.prod,_=!1;if(TRC.pConsole("page","info","from global params : publisher-id was set to - "+l.publisher),e.onerror=function(e,t,n){try{/taboola(syndication)?\.com/.test(t)&&__trcError&&__trcError(e,n+"@"+t)}catch{}return M&&M(e,t,n)},TRC.isKilled=function(){return!!k||!w&&(k=ce())},TRC.reset=function(){TRC.pConsole("page","debug","reset RBox"),i=[],r=null,p=!1,_=!1,e.taboola_view_id=null,TRC._taboolaClone=[],m=[],l={publisher:TRC.publisherId="gawkermedia-network"},c=!1,d=function(){},b=function(){},O();try{TRC.daisyChainReset(),TRC.Timeout.reset(),TRC.Interval.reset(),n&&e.TRCImpl&&(n.reset(),e.TRCImpl=n=null),TRC.brightcoveMedia&&TRC.brightcoveMedia.reset(),TRC.eventDelegator&&TRC.eventDelegator.resetEvents()}catch(e){TRC.pConsole("errors","error","error in TRC.reset",e.message)}},TRC.ready=function(t){return s.defaults=t,s.version="183-1-RELEASE-8604966",s.global["tmp-disable-cv"]||(TRC.version=s.version),TRC.pConsole("page","info","configuration version +  : "+s.version),TRC.publisherId=l.publisher,e.TRCImpl=n=new TRC.Manager(s,l),TRC.isInteractive=!1,(b=X)(),s.global["enable-social-events"]&&(S=Y)(),n.onclick=o.onclick,n.invisible&&TRC.aspect.after(n,"internalDrawRBox",function(){(d=E)()},!0),n},G(),oe(t.getElementsByTagName("script")),o=e[F]=e[F]||[],!o.registered){for(o.push=T,o.registered=!0;o.length;)T(o.shift());s.global["enable-cross-check"]&&u(se,{async:!0}),O(),R()}}}(window,document)