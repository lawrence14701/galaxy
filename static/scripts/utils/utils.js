define([],function(){function a(a){return'<iframe src="'+a+'" frameborder="0" style="width: 100%; height: 100%;"/>'}function b(a,c){for(var d in a){var e=a[d];if(_.isObject(e)){var f=c(e);f&&(a[d]=f),b(e,c)}}}function c(a){var b,c,d,e;return c=/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,b=a.replace(c,'<a href="$1" target="_blank">$1</a>'),d=/(^|[^\/])(www\.[\S]+(\b|$))/gim,b=b.replace(d,'$1<a href="http://$2" target="_blank">$2</a>'),e=/(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim,b=b.replace(e,'<a href="mailto:$1">$1</a>')}function d(a){return JSON.parse(JSON.stringify(a)||null)}function e(a){return/^[\],:{}\s]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))}function f(a){return $("<div/>").text(a).html()}function g(a){if(a instanceof Array||(a=[a]),0===a.length)return!0;for(var b in a)if(["__null__","__undefined__",null,void 0].indexOf(a[b])>-1)return!0;return!1}function h(a){if($.isArray(a)){var a=a.toString().replace(/,/g,", "),b=a.lastIndexOf(", ");return-1!=b&&(a=a.substr(0,b)+" or "+a.substr(b+2)),a}return""}function i(a){top.__utils__get__=top.__utils__get__||{};var b=JSON.stringify(a);a.cache&&top.__utils__get__[b]?(a.success&&a.success(top.__utils__get__[b]),window.console.debug("utils.js::get() - Fetching from cache ["+a.url+"].")):j({url:a.url,data:a.data,success:function(c){top.__utils__get__[b]=c,a.success&&a.success(c)},error:function(b,c){a.error&&a.error(b,c)}})}function j(a){var b={contentType:"application/json",type:a.type||"GET",data:a.data||{},url:a.url};"GET"==b.type||"DELETE"==b.type?($.isEmptyObject(b.data)||(b.url+=-1==b.url.indexOf("?")?"?":"&",b.url+=$.param(b.data,!0)),b.data=null):(b.dataType="json",b.url=b.url,b.data=JSON.stringify(b.data)),$.ajax(b).done(function(b){if("string"==typeof b)try{b=b.replace("Infinity,",'"Infinity",'),b=jQuery.parseJSON(b)}catch(c){console.debug(c)}a.success&&a.success(b)}).fail(function(b){var c=null;try{c=jQuery.parseJSON(b.responseText)}catch(d){c=b.responseText}a.error&&a.error(c,b.status)}).always(function(){a.complete&&a.complete()})}function k(a,b){var c=$('<div class="'+a+'"></div>');c.appendTo(":eq(0)");var d=c.css(b);return c.remove(),d}function l(a){$('link[href^="'+a+'"]').length||$('<link href="'+Galaxy.root+a+'" rel="stylesheet">').appendTo("head")}function m(a,b){return a?_.defaults(a,b):b}function n(a,b){for(var c=1,d=0;b>d;d++)c*=10;return Math.round(a*c)/c}function o(a,b,c){c=void 0!==c?c:1;var d="";if(a>=u)a/=u,d="TB";else if(a>=t)a/=t,d="GB";else if(a>=s)a/=s,d="MB";else if(a>=r)a/=r,d="KB";else{if(!(a>0))return b?"0 b":"<strong>-</strong>";d="b"}var e="b"==d?a:n(a,c);return b?e+" "+d:"<strong>"+e+"</strong> "+d}function p(){return top.__utils__uid__=top.__utils__uid__||0,"uid-"+top.__utils__uid__++}function q(){var a=new Date,b=(a.getHours()<10?"0":"")+a.getHours(),c=(a.getMinutes()<10?"0":"")+a.getMinutes();return datetime=a.getDate()+"/"+(a.getMonth()+1)+"/"+a.getFullYear()+", "+b+":"+c}var r=1024,s=r*r,t=s*r,u=t*r;return{cssLoadFile:l,cssGetAttribute:k,get:i,merge:m,iframe:a,bytesToString:o,uid:p,time:q,request:j,sanitize:f,textify:h,isEmpty:g,deepeach:b,isJSON:e,clone:d,linkify:c}});
//# sourceMappingURL=../../maps/utils/utils.js.map