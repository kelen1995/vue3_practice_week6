(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6822ea30"],{"057f":function(e,t,n){var r=n("c6b6"),o=n("fc6a"),c=n("241c").f,a=n("4dae"),i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],l=function(e){try{return c(e)}catch(t){return a(i)}};e.exports.f=function(e){return i&&"Window"==r(e)?l(e):c(o(e))}},"0cb2":function(e,t,n){var r=n("e330"),o=n("7b0b"),c=Math.floor,a=r("".charAt),i=r("".replace),l=r("".slice),d=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,s,b){var f=n+e.length,p=r.length,m=u;return void 0!==s&&(s=o(s),m=d),i(b,m,(function(o,i){var d;switch(a(i,0)){case"$":return"$";case"&":return e;case"`":return l(t,0,n);case"'":return l(t,f);case"<":d=s[l(i,1,-1)];break;default:var u=+i;if(0===u)return o;if(u>p){var b=c(u/10);return 0===b?o:b<=p?void 0===r[b-1]?a(i,1):r[b-1]+a(i,1):o}d=r[u-1]}return void 0===d?"":d}))}},"107c":function(e,t,n){var r=n("d039"),o=n("da84"),c=o.RegExp;e.exports=r((function(){var e=c("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"14c3":function(e,t,n){var r=n("da84"),o=n("c65b"),c=n("825a"),a=n("1626"),i=n("c6b6"),l=n("9263"),d=r.TypeError;e.exports=function(e,t){var n=e.exec;if(a(n)){var r=o(n,e,t);return null!==r&&c(r),r}if("RegExp"===i(e))return o(l,e,t);throw d("RegExp#exec called on incompatible receiver")}},"1dde":function(e,t,n){var r=n("d039"),o=n("b622"),c=n("2d00"),a=o("species");e.exports=function(e){return c>=51||!r((function(){var t=[],n=t.constructor={};return n[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"428f":function(e,t,n){var r=n("da84");e.exports=r},"4dae":function(e,t,n){var r=n("da84"),o=n("23cb"),c=n("07fa"),a=n("8418"),i=r.Array,l=Math.max;e.exports=function(e,t,n){for(var r=c(e),d=o(t,r),u=o(void 0===n?r:n,r),s=i(l(u-d,0)),b=0;d<u;d++,b++)a(s,b,e[d]);return s.length=b,s}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").filter,c=n("1dde"),a=c("filter");r({target:"Array",proto:!0,forced:!a},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},5319:function(e,t,n){"use strict";var r=n("2ba4"),o=n("c65b"),c=n("e330"),a=n("d784"),i=n("d039"),l=n("825a"),d=n("1626"),u=n("5926"),s=n("50c4"),b=n("577e"),f=n("1d80"),p=n("8aa5"),m=n("dc4a"),g=n("0cb2"),h=n("14c3"),v=n("b622"),O=v("replace"),j=Math.max,E=Math.min,y=c([].concat),x=c([].push),N=c("".indexOf),V=c("".slice),w=function(e){return void 0===e?e:String(e)},P=function(){return"$0"==="a".replace(/./,"$0")}(),k=function(){return!!/./[O]&&""===/./[O]("a","$0")}(),M=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));a("replace",(function(e,t,n){var c=k?"$":"$0";return[function(e,n){var r=f(this),c=void 0==e?void 0:m(e,O);return c?o(c,e,r,n):o(t,b(r),e,n)},function(e,o){var a=l(this),i=b(e);if("string"==typeof o&&-1===N(o,c)&&-1===N(o,"$<")){var f=n(t,a,i,o);if(f.done)return f.value}var m=d(o);m||(o=b(o));var v=a.global;if(v){var O=a.unicode;a.lastIndex=0}var P=[];while(1){var k=h(a,i);if(null===k)break;if(x(P,k),!v)break;var M=b(k[0]);""===M&&(a.lastIndex=p(i,s(a.lastIndex),O))}for(var U="",S=0,B=0;B<P.length;B++){k=P[B];for(var D=b(k[0]),C=j(E(u(k.index),i.length),0),$=[],I=1;I<k.length;I++)x($,w(k[I]));var _=k.groups;if(m){var T=y([D],$,C,i);void 0!==_&&x(T,_);var R=b(r(o,void 0,T))}else R=g(D,i,C,$,_,o);C>=S&&(U+=V(i,S,C)+R,S=C+D.length)}return U+V(i,S)}]}),!M||!P||k)},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},6407:function(e,t,n){"use strict";var r=n("7a23"),o={"aria-label":"Page navigation example"},c={class:"pagination justify-content-center"},a=Object(r["createElementVNode"])("span",{"aria-hidden":"true"},"«",-1),i=[a],l=["onClick"],d={class:"page-link",href:"#"},u=Object(r["createElementVNode"])("span",{"aria-hidden":"true"},"»",-1),s=[u];function b(e,t,n,a,u,b){return Object(r["openBlock"])(),Object(r["createElementBlock"])("nav",o,[Object(r["createElementVNode"])("ul",c,[Object(r["createElementVNode"])("li",{class:Object(r["normalizeClass"])(["page-item",{disabled:!n.pagination.has_pre}])},[Object(r["createElementVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=Object(r["withModifiers"])((function(e){return b.switchPage(n.pagination.current_page-1)}),["prevent"]))},i)],2),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(n.pagination.total_pages,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{class:"page-item",key:e+1234,onClick:Object(r["withModifiers"])((function(t){return b.switchPage(e)}),["prevent"])},[Object(r["createElementVNode"])("a",d,Object(r["toDisplayString"])(e),1)],8,l)})),128)),Object(r["createElementVNode"])("li",{class:Object(r["normalizeClass"])(["page-item",{disabled:!n.pagination.has_next}])},[Object(r["createElementVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=Object(r["withModifiers"])((function(e){return b.switchPage(n.pagination.current_page+1)}),["prevent"]))},s)],2)])])}var f={props:["pagination"],data:function(){return{}},methods:{switchPage:function(e){this.$emit("switch-page",e)}}},p=n("6b0d"),m=n.n(p);const g=m()(f,[["render",b]]);t["a"]=g},"746f":function(e,t,n){var r=n("428f"),o=n("1a2d"),c=n("e538"),a=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});o(t,e)||a(t,e,{value:c.f(e)})}},8418:function(e,t,n){"use strict";var r=n("a04b"),o=n("9bf2"),c=n("5c6c");e.exports=function(e,t,n){var a=r(t);a in e?o.f(e,a,c(0,n)):e[a]=n}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("c65b"),o=n("e330"),c=n("577e"),a=n("ad6d"),i=n("9f7f"),l=n("5692"),d=n("7c73"),u=n("69f3").get,s=n("fce3"),b=n("107c"),f=l("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,m=p,g=o("".charAt),h=o("".indexOf),v=o("".replace),O=o("".slice),j=function(){var e=/a/,t=/b*/g;return r(p,e,"a"),r(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),E=i.BROKEN_CARET,y=void 0!==/()??/.exec("")[1],x=j||y||E||s||b;x&&(m=function(e){var t,n,o,i,l,s,b,x=this,N=u(x),V=c(e),w=N.raw;if(w)return w.lastIndex=x.lastIndex,t=r(m,w,V),x.lastIndex=w.lastIndex,t;var P=N.groups,k=E&&x.sticky,M=r(a,x),U=x.source,S=0,B=V;if(k&&(M=v(M,"y",""),-1===h(M,"g")&&(M+="g"),B=O(V,x.lastIndex),x.lastIndex>0&&(!x.multiline||x.multiline&&"\n"!==g(V,x.lastIndex-1))&&(U="(?: "+U+")",B=" "+B,S++),n=new RegExp("^(?:"+U+")",M)),y&&(n=new RegExp("^"+U+"$(?!\\s)",M)),j&&(o=x.lastIndex),i=r(p,k?n:x,B),k?i?(i.input=O(i.input,S),i[0]=O(i[0],S),i.index=x.lastIndex,x.lastIndex+=i[0].length):x.lastIndex=0:j&&i&&(x.lastIndex=x.global?i.index+i[0].length:o),y&&i&&i.length>1&&r(f,i[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)})),i&&P)for(i.groups=s=d(null),l=0;l<P.length;l++)b=P[l],s[b[0]]=i[b[1]];return i}),e.exports=m},"99af":function(e,t,n){"use strict";var r=n("23e7"),o=n("da84"),c=n("d039"),a=n("e8b5"),i=n("861d"),l=n("7b0b"),d=n("07fa"),u=n("8418"),s=n("65f0"),b=n("1dde"),f=n("b622"),p=n("2d00"),m=f("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",v=o.TypeError,O=p>=51||!c((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),j=b("concat"),E=function(e){if(!i(e))return!1;var t=e[m];return void 0!==t?!!t:a(e)},y=!O||!j;r({target:"Array",proto:!0,forced:y},{concat:function(e){var t,n,r,o,c,a=l(this),i=s(a,0),b=0;for(t=-1,r=arguments.length;t<r;t++)if(c=-1===t?a:arguments[t],E(c)){if(o=d(c),b+o>g)throw v(h);for(n=0;n<o;n++,b++)n in c&&u(i,b,c[n])}else{if(b>=g)throw v(h);u(i,b++,c)}return i.length=b,i}})},"9f7f":function(e,t,n){var r=n("d039"),o=n("da84"),c=o.RegExp,a=r((function(){var e=c("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),i=a||r((function(){return!c("a","y").sticky})),l=a||r((function(){var e=c("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:l,MISSED_STICKY:i,UNSUPPORTED_Y:a}},a4d3:function(e,t,n){"use strict";var r=n("23e7"),o=n("da84"),c=n("d066"),a=n("2ba4"),i=n("c65b"),l=n("e330"),d=n("c430"),u=n("83ab"),s=n("4930"),b=n("d039"),f=n("1a2d"),p=n("e8b5"),m=n("1626"),g=n("861d"),h=n("3a9b"),v=n("d9b5"),O=n("825a"),j=n("7b0b"),E=n("fc6a"),y=n("a04b"),x=n("577e"),N=n("5c6c"),V=n("7c73"),w=n("df75"),P=n("241c"),k=n("057f"),M=n("7418"),U=n("06cf"),S=n("9bf2"),B=n("37e8"),D=n("d1e7"),C=n("f36a"),$=n("6eeb"),I=n("5692"),_=n("f772"),T=n("d012"),R=n("90e3"),A=n("b622"),F=n("e538"),L=n("746f"),J=n("d44e"),z=n("69f3"),K=n("b727").forEach,Y=_("hidden"),Q="Symbol",W="prototype",q=A("toPrimitive"),G=z.set,H=z.getterFor(Q),X=Object[W],Z=o.Symbol,ee=Z&&Z[W],te=o.TypeError,ne=o.QObject,re=c("JSON","stringify"),oe=U.f,ce=S.f,ae=k.f,ie=D.f,le=l([].push),de=I("symbols"),ue=I("op-symbols"),se=I("string-to-symbol-registry"),be=I("symbol-to-string-registry"),fe=I("wks"),pe=!ne||!ne[W]||!ne[W].findChild,me=u&&b((function(){return 7!=V(ce({},"a",{get:function(){return ce(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=oe(X,t);r&&delete X[t],ce(e,t,n),r&&e!==X&&ce(X,t,r)}:ce,ge=function(e,t){var n=de[e]=V(ee);return G(n,{type:Q,tag:e,description:t}),u||(n.description=t),n},he=function(e,t,n){e===X&&he(ue,t,n),O(e);var r=y(t);return O(n),f(de,r)?(n.enumerable?(f(e,Y)&&e[Y][r]&&(e[Y][r]=!1),n=V(n,{enumerable:N(0,!1)})):(f(e,Y)||ce(e,Y,N(1,{})),e[Y][r]=!0),me(e,r,n)):ce(e,r,n)},ve=function(e,t){O(e);var n=E(t),r=w(n).concat(xe(n));return K(r,(function(t){u&&!i(je,n,t)||he(e,t,n[t])})),e},Oe=function(e,t){return void 0===t?V(e):ve(V(e),t)},je=function(e){var t=y(e),n=i(ie,this,t);return!(this===X&&f(de,t)&&!f(ue,t))&&(!(n||!f(this,t)||!f(de,t)||f(this,Y)&&this[Y][t])||n)},Ee=function(e,t){var n=E(e),r=y(t);if(n!==X||!f(de,r)||f(ue,r)){var o=oe(n,r);return!o||!f(de,r)||f(n,Y)&&n[Y][r]||(o.enumerable=!0),o}},ye=function(e){var t=ae(E(e)),n=[];return K(t,(function(e){f(de,e)||f(T,e)||le(n,e)})),n},xe=function(e){var t=e===X,n=ae(t?ue:E(e)),r=[];return K(n,(function(e){!f(de,e)||t&&!f(X,e)||le(r,de[e])})),r};if(s||(Z=function(){if(h(ee,this))throw te("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?x(arguments[0]):void 0,t=R(e),n=function(e){this===X&&i(n,ue,e),f(this,Y)&&f(this[Y],t)&&(this[Y][t]=!1),me(this,t,N(1,e))};return u&&pe&&me(X,t,{configurable:!0,set:n}),ge(t,e)},ee=Z[W],$(ee,"toString",(function(){return H(this).tag})),$(Z,"withoutSetter",(function(e){return ge(R(e),e)})),D.f=je,S.f=he,B.f=ve,U.f=Ee,P.f=k.f=ye,M.f=xe,F.f=function(e){return ge(A(e),e)},u&&(ce(ee,"description",{configurable:!0,get:function(){return H(this).description}}),d||$(X,"propertyIsEnumerable",je,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:Z}),K(w(fe),(function(e){L(e)})),r({target:Q,stat:!0,forced:!s},{for:function(e){var t=x(e);if(f(se,t))return se[t];var n=Z(t);return se[t]=n,be[n]=t,n},keyFor:function(e){if(!v(e))throw te(e+" is not a symbol");if(f(be,e))return be[e]},useSetter:function(){pe=!0},useSimple:function(){pe=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!u},{create:Oe,defineProperty:he,defineProperties:ve,getOwnPropertyDescriptor:Ee}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:ye,getOwnPropertySymbols:xe}),r({target:"Object",stat:!0,forced:b((function(){M.f(1)}))},{getOwnPropertySymbols:function(e){return M.f(j(e))}}),re){var Ne=!s||b((function(){var e=Z();return"[null]"!=re([e])||"{}"!=re({a:e})||"{}"!=re(Object(e))}));r({target:"JSON",stat:!0,forced:Ne},{stringify:function(e,t,n){var r=C(arguments),o=t;if((g(t)||void 0!==e)&&!v(e))return p(t)||(t=function(e,t){if(m(o)&&(t=i(o,this,e,t)),!v(t))return t}),r[1]=t,a(re,null,r)}})}if(!ee[q]){var Ve=ee.valueOf;$(ee,q,(function(e){return i(Ve,this)}))}J(Z,Q),T[Y]=!0},ac1f:function(e,t,n){"use strict";var r=n("23e7"),o=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},bd81:function(e,t,n){"use strict";var r=n("7a23"),o={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},c={class:"modal-dialog"},a={class:"modal-content border-0"},i=Object(r["createElementVNode"])("div",{class:"modal-header bg-danger text-white"},[Object(r["createElementVNode"])("h5",{id:"delProductModalLabel",class:"modal-title"},[Object(r["createElementVNode"])("span",null,"刪除產品")]),Object(r["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),l={class:"modal-body"},d=Object(r["createTextVNode"])(" 是否刪除 "),u={class:"text-danger"},s=Object(r["createTextVNode"])(" 商品(刪除後將無法恢復)。 "),b={class:"modal-footer"},f=Object(r["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function p(e,t,n,p,m,g){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",o,[Object(r["createElementVNode"])("div",c,[Object(r["createElementVNode"])("div",a,[i,Object(r["createElementVNode"])("div",l,[d,Object(r["createElementVNode"])("strong",u,Object(r["toDisplayString"])(m.title),1),s]),Object(r["createElementVNode"])("div",b,[f,Object(r["createElementVNode"])("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=function(){return g.deleteProduct&&g.deleteProduct.apply(g,arguments)})}," 確認刪除 ")])])])],512)}var m=n("7b17"),g={data:function(){return{modal:"",data:"",title:""}},methods:{deleteProduct:function(){this.$emit("delete-product",this.data.status,this.data.cart)},openModal:function(e,t,n){this.modal.show(),this.title=t,this.data={status:e,cart:n}},hideModal:function(){this.modal.hide()}},mounted:function(){this.modal=new m["a"](document.getElementById("delProductModal"),{})}},h=n("6b0d"),v=n.n(h);const O=v()(g,[["render",p]]);t["a"]=O},ca0a:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o={class:"container"},c={class:"text-end mt-4"},a={class:"table mt-4"},i=Object(r["createElementVNode"])("thead",null,[Object(r["createElementVNode"])("tr",null,[Object(r["createElementVNode"])("th",{width:"120"},"分類"),Object(r["createElementVNode"])("th",null,"產品名稱"),Object(r["createElementVNode"])("th",{width:"120"},"原價"),Object(r["createElementVNode"])("th",{width:"120"},"售價"),Object(r["createElementVNode"])("th",{width:"100"},"是否啟用"),Object(r["createElementVNode"])("th",{width:"120"},"編輯")])],-1),l={class:"text-end"},d={class:"text-end"},u={key:0,class:"text-success"},s={key:1},b={class:"btn-group"},f=["onClick"],p=["onClick"];function m(e,t,n,m,g,h){var v=Object(r["resolveComponent"])("pagination"),O=Object(r["resolveComponent"])("productModal"),j=Object(r["resolveComponent"])("delProductModal");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createElementVNode"])("div",o,[Object(r["createElementVNode"])("div",c,[Object(r["createElementVNode"])("button",{class:"btn btn-primary",type:"button",onClick:t[0]||(t[0]=function(e){return h.showProductModal("add")})}," 建立新的產品 ")]),Object(r["createElementVNode"])("table",a,[i,Object(r["createElementVNode"])("tbody",null,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(g.products,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("tr",{key:e.id},[Object(r["createElementVNode"])("td",null,Object(r["toDisplayString"])(e.category),1),Object(r["createElementVNode"])("td",null,Object(r["toDisplayString"])(e.title),1),Object(r["createElementVNode"])("td",l,Object(r["toDisplayString"])(e.origin_price),1),Object(r["createElementVNode"])("td",d,Object(r["toDisplayString"])(e.price),1),Object(r["createElementVNode"])("td",null,[e.is_enabled?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",u,"啟用")):(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",s,"未啟用"))]),Object(r["createElementVNode"])("td",null,[Object(r["createElementVNode"])("div",b,[Object(r["createElementVNode"])("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:function(t){return h.showProductModal("edit",e)}}," 編輯 ",8,f),Object(r["createElementVNode"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(t){return h.showProductModal("delete",e)}}," 刪除 ",8,p)])])])})),128))])]),Object(r["createVNode"])(v,{pagination:g.pagination,onSwitchPage:h.getProducts},null,8,["pagination","onSwitchPage"])]),Object(r["createVNode"])(O,{onUpdateProduct:h.updateProduct,ref:"productModal"},null,8,["onUpdateProduct"]),Object(r["createVNode"])(j,{onDeleteProduct:h.deleteProduct,ref:"delProductModal"},null,8,["onDeleteProduct"])],64)}var g=n("5530"),h=(n("99af"),n("ac1f"),n("5319"),function(e){return{all:e=e||new Map,on:function(t,n){var r=e.get(t);r?r.push(n):e.set(t,[n])},off:function(t,n){var r=e.get(t);r&&(n?r.splice(r.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var r=e.get(t);r&&r.slice().map((function(e){e(n)})),(r=e.get("*"))&&r.slice().map((function(e){e(t,n)}))}}}),v=h(),O=v,j=n("6407"),E=(n("a4d3"),n("e01a"),{id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"}),y={class:"modal-dialog modal-xl"},x={class:"modal-content border-0"},N=Object(r["createElementVNode"])("div",{class:"modal-header bg-dark text-white"},[Object(r["createElementVNode"])("h5",{id:"productModalLabel",class:"modal-title"},[Object(r["createElementVNode"])("span",null,"新增產品")]),Object(r["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),V={class:"modal-body"},w={class:"row"},P={class:"col-sm-4"},k={class:"mb-2"},M={class:"mb-3"},U=Object(r["createElementVNode"])("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),S=["src","alt"],B={key:0},D=["onUpdate:modelValue"],C=["src"],$={class:"col-sm-8"},I={class:"mb-3"},_=Object(r["createElementVNode"])("label",{for:"title",class:"form-label"},"標題",-1),T={class:"row"},R={class:"mb-3 col-md-6"},A=Object(r["createElementVNode"])("label",{for:"category",class:"form-label"},"分類",-1),F={class:"mb-3 col-md-6"},L=Object(r["createElementVNode"])("label",{for:"price",class:"form-label"},"單位",-1),J={class:"row"},z={class:"mb-3 col-md-6"},K=Object(r["createElementVNode"])("label",{for:"origin_price",class:"form-label"},"原價",-1),Y={class:"mb-3 col-md-6"},Q=Object(r["createElementVNode"])("label",{for:"price",class:"form-label"},"售價",-1),W=Object(r["createElementVNode"])("hr",null,null,-1),q={class:"mb-3"},G=Object(r["createElementVNode"])("label",{for:"description",class:"form-label"},"產品描述",-1),H={class:"mb-3"},X=Object(r["createElementVNode"])("label",{for:"content",class:"form-label"},"說明內容",-1),Z={class:"mb-3"},ee={class:"form-check"},te=Object(r["createElementVNode"])("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),ne={class:"modal-footer"},re=Object(r["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function oe(e,t,n,o,c,a){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",E,[Object(r["createElementVNode"])("div",y,[Object(r["createElementVNode"])("div",x,[N,Object(r["createElementVNode"])("div",V,[Object(r["createElementVNode"])("div",w,[Object(r["createElementVNode"])("div",P,[Object(r["createElementVNode"])("div",k,[Object(r["createElementVNode"])("div",M,[U,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.product.imageUrl=e})},null,512),[[r["vModelText"],c.product.imageUrl]])]),Object(r["createElementVNode"])("img",{class:"img-fluid",src:c.product.imageUrl,alt:c.product.id},null,8,S)]),Array.isArray(c.product.imagesUrl)?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",B,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.product.imagesUrl,(function(e,t){return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:t+99},[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":function(e){return c.product.imagesUrl[t]=e}},null,8,D),[[r["vModelText"],c.product.imagesUrl[t]]]),Object(r["createElementVNode"])("img",{class:"img-fluid",src:c.product.imagesUrl[t],alt:""},null,8,C)],64)})),128)),!c.product.imagesUrl.length||c.product.imagesUrl[c.product.imagesUrl.length-1]?(Object(r["openBlock"])(),Object(r["createElementBlock"])("button",{key:0,class:"btn btn-outline-primary btn-sm d-block w-100",type:"button",onClick:t[1]||(t[1]=function(e){return c.product.imagesUrl.push("")})}," 新增圖片 ")):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("button",{class:"btn btn-outline-danger btn-sm d-block w-100",type:"button",onClick:t[2]||(t[2]=function(e){return c.product.imagesUrl.pop()})}," 刪除圖片 ")])):Object(r["createCommentVNode"])("",!0)]),Object(r["createElementVNode"])("div",$,[Object(r["createElementVNode"])("div",I,[_,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.product.title=e})},null,512),[[r["vModelText"],c.product.title]])]),Object(r["createElementVNode"])("div",T,[Object(r["createElementVNode"])("div",R,[A,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.product.category=e})},null,512),[[r["vModelText"],c.product.category]])]),Object(r["createElementVNode"])("div",F,[L,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":t[5]||(t[5]=function(e){return c.product.unit=e})},null,512),[[r["vModelText"],c.product.unit]])])]),Object(r["createElementVNode"])("div",J,[Object(r["createElementVNode"])("div",z,[K,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":t[6]||(t[6]=function(e){return c.product.origin_price=e})},null,512),[[r["vModelText"],c.product.origin_price,void 0,{number:!0}]])]),Object(r["createElementVNode"])("div",Y,[Q,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":t[7]||(t[7]=function(e){return c.product.price=e})},null,512),[[r["vModelText"],c.product.price,void 0,{number:!0}]])])]),W,Object(r["createElementVNode"])("div",q,[G,Object(r["withDirectives"])(Object(r["createElementVNode"])("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":t[8]||(t[8]=function(e){return c.product.description=e})},"\n                ",512),[[r["vModelText"],c.product.description]])]),Object(r["createElementVNode"])("div",H,[X,Object(r["withDirectives"])(Object(r["createElementVNode"])("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":t[9]||(t[9]=function(e){return c.product.content=e})},"\n                ",512),[[r["vModelText"],c.product.content]])]),Object(r["createElementVNode"])("div",Z,[Object(r["createElementVNode"])("div",ee,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[10]||(t[10]=function(e){return c.product.is_enabled=e})},null,512),[[r["vModelCheckbox"],c.product.is_enabled]]),te])])])])]),Object(r["createElementVNode"])("div",ne,[re,Object(r["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[11]||(t[11]=function(){return a.updateProduct&&a.updateProduct.apply(a,arguments)})}," 確認 ")])])])],512)}var ce=n("7b17"),ae={data:function(){return{modal:"",product:{imagesUrl:[]}}},methods:{updateProduct:function(){this.$emit("update-product",this.product)},toggleModal:function(){this.modal.toggle()}},mounted:function(){var e=this;this.modal=new ce["a"](document.getElementById("productModal"),{}),O.on("openModal",(function(t){e.product=t}))}},ie=n("6b0d"),le=n.n(ie);const de=le()(ae,[["render",oe]]);var ue=de,se=n("bd81"),be={data:function(){return{products:[],tempProduct:{imagesUrl:[]},isNew:!1,pagination:{},apiUrl:"https://vue3-course-api.hexschool.io/v2",apiPath:"kn99"}},components:{pagination:j["a"],productModal:ue,delProductModal:se["a"]},methods:{getProducts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.axios.get("".concat(this.apiUrl,"/api/").concat(this.apiPath,"/admin/products?page=").concat(t)).then((function(t){e.products=t.data.products,e.pagination=t.data.pagination})).catch((function(e){console.log(e.response)}))},showProductModal:function(e,t){switch(e){case"add":this.tempProduct={imagesUrl:[]},this.isNew=!0,this.toggleProductModal();break;case"edit":this.tempProduct=Object(g["a"])({},t),this.isNew=!1,this.toggleProductModal();break;case"delete":this.tempProduct=Object(g["a"])({},t),this.toggleDelProductModal("open");break;default:break}},toggleProductModal:function(){O.emit("openModal",this.tempProduct),this.$refs.productModal.toggleModal()},updateProduct:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.tempProduct,n="post",r="".concat(this.apiUrl,"/api/").concat(this.apiPath,"/admin/product"),o="產品新增完成";this.isNew||(n="put",r="".concat(this.apiUrl,"/api/").concat(this.apiPath,"/admin/product/").concat(t.id),o="產品修改完成"),this.axios[n](r,{data:t}).then((function(){alert(o),e.toggleProductModal(),e.getProducts(e.pagination.current_page),e.tempProduct={imagesUrl:[]}})).catch((function(e){console.log(e),alert("產品新增失敗")}))},deleteProduct:function(){var e=this;this.axios.delete("".concat(this.apiUrl,"/api/").concat(this.apiPath,"/admin/product/").concat(this.tempProduct.id)).then((function(){e.toggleDelProductModal("hide"),e.getProducts()})).catch((function(e){console.log(e),alert("產品刪除失敗")}))},toggleDelProductModal:function(e){"open"===e?this.$refs.delProductModal.openModal("single",this.tempProduct.title):this.$refs.delProductModal.hideModal()},checkUser:function(){var e=this,t=document.cookie.replace(/(?:(?:^|.*;\s*)hextoken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.axios.defaults.headers.common.Authorization=t,this.axios.post("".concat(this.apiUrl,"/api/user/check")).then((function(){e.getProducts()})).catch((function(t){console.log(t),e.$router.push("/login")}))}},mounted:function(){this.checkUser()}};const fe=le()(be,[["render",m]]);t["default"]=fe},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),o=n("6eeb"),c=n("9263"),a=n("d039"),i=n("b622"),l=n("9112"),d=i("species"),u=RegExp.prototype;e.exports=function(e,t,n,s){var b=i(e),f=!a((function(){var t={};return t[b]=function(){return 7},7!=""[e](t)})),p=f&&!a((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[d]=function(){return n},n.flags="",n[b]=/./[b]),n.exec=function(){return t=!0,null},n[b](""),!t}));if(!f||!p||n){var m=r(/./[b]),g=t(b,""[e],(function(e,t,n,o,a){var i=r(e),l=t.exec;return l===c||l===u.exec?f&&!a?{done:!0,value:m(t,n,o)}:{done:!0,value:i(n,t,o)}:{done:!1}}));o(String.prototype,e,g[0]),o(u,b,g[1])}s&&l(u[b],"sham",!0)}},dbb4:function(e,t,n){var r=n("23e7"),o=n("83ab"),c=n("56ef"),a=n("fc6a"),i=n("06cf"),l=n("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,n,r=a(e),o=i.f,d=c(r),u={},s=0;while(d.length>s)n=o(r,t=d[s++]),void 0!==n&&l(u,t,n);return u}})},e01a:function(e,t,n){"use strict";var r=n("23e7"),o=n("83ab"),c=n("da84"),a=n("e330"),i=n("1a2d"),l=n("1626"),d=n("3a9b"),u=n("577e"),s=n("9bf2").f,b=n("e893"),f=c.Symbol,p=f&&f.prototype;if(o&&l(f)&&(!("description"in p)||void 0!==f().description)){var m={},g=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:u(arguments[0]),t=d(p,this)?new f(e):void 0===e?f():f(e);return""===e&&(m[t]=!0),t};b(g,f),g.prototype=p,p.constructor=g;var h="Symbol(test)"==String(f("test")),v=a(p.toString),O=a(p.valueOf),j=/^Symbol\((.*)\)[^)]+$/,E=a("".replace),y=a("".slice);s(p,"description",{configurable:!0,get:function(){var e=O(this),t=v(e);if(i(m,e))return"";var n=h?y(t,7,-1):E(t,j,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:g})}},e439:function(e,t,n){var r=n("23e7"),o=n("d039"),c=n("fc6a"),a=n("06cf").f,i=n("83ab"),l=o((function(){a(1)})),d=!i||l;r({target:"Object",stat:!0,forced:d,sham:!i},{getOwnPropertyDescriptor:function(e,t){return a(c(e),t)}})},e538:function(e,t,n){var r=n("b622");t.f=r},fce3:function(e,t,n){var r=n("d039"),o=n("da84"),c=o.RegExp;e.exports=r((function(){var e=c(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-6822ea30.bbf230e8.js.map