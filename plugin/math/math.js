!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).RevealMath=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=function(t){return t&&t.Math==Math&&t},n=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||function(){return this}()||Function("return this")(),r={},o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a=Function.prototype.call,c=a.bind?a.bind(a):function(){return a.apply(a,arguments)},u={},f={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,l=s&&!f.call({1:2},1);u.f=l?function(t){var e=s(this,t);return!!e&&e.enumerable}:f;var p,h,v=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},d=Function.prototype,y=d.bind,m=d.call,g=y&&y.bind(m),b=y?function(t){return t&&g(m,t)}:function(t){return t&&function(){return m.apply(t,arguments)}},w=b,j=w({}.toString),x=w("".slice),O=function(t){return x(j(t),8,-1)},E=b,S=o,T=O,P=n.Object,L=E("".split),M=S((function(){return!P("z").propertyIsEnumerable(0)}))?function(t){return"String"==T(t)?L(t,""):P(t)}:P,k=n.TypeError,_=function(t){if(null==t)throw k("Can't call method on "+t);return t},R=M,A=_,I=function(t){return R(A(t))},F=function(t){return"function"==typeof t},C=F,N=function(t){return"object"==typeof t?null!==t:C(t)},G=n,J=F,D=function(t){return J(t)?t:void 0},$=function(t,e){return arguments.length<2?D(G[t]):G[t]&&G[t][e]},H=b({}.isPrototypeOf),z=$("navigator","userAgent")||"",U=n,W=z,q=U.process,X=U.Deno,B=q&&q.versions||X&&X.version,K=B&&B.v8;K&&(h=(p=K.split("."))[0]>0&&p[0]<4?1:+(p[0]+p[1])),!h&&W&&(!(p=W.match(/Edge\/(\d+)/))||p[1]>=74)&&(p=W.match(/Chrome\/(\d+)/))&&(h=+p[1]);var Q=h,Y=Q,V=o,Z=!!Object.getOwnPropertySymbols&&!V((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&Y&&Y<41})),tt=Z&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,et=$,nt=F,rt=H,ot=tt,it=n.Object,at=ot?function(t){return"symbol"==typeof t}:function(t){var e=et("Symbol");return nt(e)&&rt(e.prototype,it(t))},ct=n.String,ut=function(t){try{return ct(t)}catch(t){return"Object"}},ft=F,st=ut,lt=n.TypeError,pt=function(t){if(ft(t))return t;throw lt(st(t)+" is not a function")},ht=pt,vt=function(t,e){var n=t[e];return null==n?void 0:ht(n)},dt=c,yt=F,mt=N,gt=n.TypeError,bt={exports:{}},wt=n,jt=Object.defineProperty,xt=function(t,e){try{jt(wt,t,{value:e,configurable:!0,writable:!0})}catch(n){wt[t]=e}return e},Ot=xt,Et="__core-js_shared__",St=n[Et]||Ot(Et,{}),Tt=St;(bt.exports=function(t,e){return Tt[t]||(Tt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.19.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var Pt=_,Lt=n.Object,Mt=function(t){return Lt(Pt(t))},kt=Mt,_t=b({}.hasOwnProperty),Rt=Object.hasOwn||function(t,e){return _t(kt(t),e)},At=b,It=0,Ft=Math.random(),Ct=At(1..toString),Nt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Ct(++It+Ft,36)},Gt=n,Jt=bt.exports,Dt=Rt,$t=Nt,Ht=Z,zt=tt,Ut=Jt("wks"),Wt=Gt.Symbol,qt=Wt&&Wt.for,Xt=zt?Wt:Wt&&Wt.withoutSetter||$t,Bt=function(t){if(!Dt(Ut,t)||!Ht&&"string"!=typeof Ut[t]){var e="Symbol."+t;Ht&&Dt(Wt,t)?Ut[t]=Wt[t]:Ut[t]=zt&&qt?qt(e):Xt(e)}return Ut[t]},Kt=c,Qt=N,Yt=at,Vt=vt,Zt=function(t,e){var n,r;if("string"===e&&yt(n=t.toString)&&!mt(r=dt(n,t)))return r;if(yt(n=t.valueOf)&&!mt(r=dt(n,t)))return r;if("string"!==e&&yt(n=t.toString)&&!mt(r=dt(n,t)))return r;throw gt("Can't convert object to primitive value")},te=Bt,ee=n.TypeError,ne=te("toPrimitive"),re=function(t,e){if(!Qt(t)||Yt(t))return t;var n,r=Vt(t,ne);if(r){if(void 0===e&&(e="default"),n=Kt(r,t,e),!Qt(n)||Yt(n))return n;throw ee("Can't convert object to primitive value")}return void 0===e&&(e="number"),Zt(t,e)},oe=at,ie=function(t){var e=re(t,"string");return oe(e)?e:e+""},ae=N,ce=n.document,ue=ae(ce)&&ae(ce.createElement),fe=function(t){return ue?ce.createElement(t):{}},se=fe,le=!i&&!o((function(){return 7!=Object.defineProperty(se("div"),"a",{get:function(){return 7}}).a})),pe=i,he=c,ve=u,de=v,ye=I,me=ie,ge=Rt,be=le,we=Object.getOwnPropertyDescriptor;r.f=pe?we:function(t,e){if(t=ye(t),e=me(e),be)try{return we(t,e)}catch(t){}if(ge(t,e))return de(!he(ve.f,t,e),t[e])};var je={},xe=n,Oe=N,Ee=xe.String,Se=xe.TypeError,Te=function(t){if(Oe(t))return t;throw Se(Ee(t)+" is not an object")},Pe=i,Le=le,Me=Te,ke=ie,_e=n.TypeError,Re=Object.defineProperty;je.f=Pe?Re:function(t,e,n){if(Me(t),e=ke(e),Me(n),Le)try{return Re(t,e,n)}catch(t){}if("get"in n||"set"in n)throw _e("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var Ae=je,Ie=v,Fe=i?function(t,e,n){return Ae.f(t,e,Ie(1,n))}:function(t,e,n){return t[e]=n,t},Ce={exports:{}},Ne=F,Ge=St,Je=b(Function.toString);Ne(Ge.inspectSource)||(Ge.inspectSource=function(t){return Je(t)});var De,$e,He,ze=Ge.inspectSource,Ue=F,We=ze,qe=n.WeakMap,Xe=Ue(qe)&&/native code/.test(We(qe)),Be=bt.exports,Ke=Nt,Qe=Be("keys"),Ye=function(t){return Qe[t]||(Qe[t]=Ke(t))},Ve={},Ze=Xe,tn=n,en=b,nn=N,rn=Fe,on=Rt,an=St,cn=Ye,un=Ve,fn="Object already initialized",sn=tn.TypeError,ln=tn.WeakMap;if(Ze||an.state){var pn=an.state||(an.state=new ln),hn=en(pn.get),vn=en(pn.has),dn=en(pn.set);De=function(t,e){if(vn(pn,t))throw new sn(fn);return e.facade=t,dn(pn,t,e),e},$e=function(t){return hn(pn,t)||{}},He=function(t){return vn(pn,t)}}else{var yn=cn("state");un[yn]=!0,De=function(t,e){if(on(t,yn))throw new sn(fn);return e.facade=t,rn(t,yn,e),e},$e=function(t){return on(t,yn)?t[yn]:{}},He=function(t){return on(t,yn)}}var mn={set:De,get:$e,has:He,enforce:function(t){return He(t)?$e(t):De(t,{})},getterFor:function(t){return function(e){var n;if(!nn(e)||(n=$e(e)).type!==t)throw sn("Incompatible receiver, "+t+" required");return n}}},gn=i,bn=Rt,wn=Function.prototype,jn=gn&&Object.getOwnPropertyDescriptor,xn=bn(wn,"name"),On=xn&&"something"===function(){}.name,En=xn&&(!gn||gn&&jn(wn,"name").configurable),Sn=n,Tn=F,Pn=Rt,Ln=Fe,Mn=xt,kn=ze,_n={EXISTS:xn,PROPER:On,CONFIGURABLE:En}.CONFIGURABLE,Rn=mn.get,An=mn.enforce,In=String(String).split("String");(Ce.exports=function(t,e,n,r){var o,i=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,c=!!r&&!!r.noTargetGet,u=r&&void 0!==r.name?r.name:e;Tn(n)&&("Symbol("===String(u).slice(0,7)&&(u="["+String(u).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!Pn(n,"name")||_n&&n.name!==u)&&Ln(n,"name",u),(o=An(n)).source||(o.source=In.join("string"==typeof u?u:""))),t!==Sn?(i?!c&&t[e]&&(a=!0):delete t[e],a?t[e]=n:Ln(t,e,n)):a?t[e]=n:Mn(e,n)})(Function.prototype,"toString",(function(){return Tn(this)&&Rn(this).source||kn(this)}));var Fn={},Cn=Math.ceil,Nn=Math.floor,Gn=function(t){var e=+t;return e!=e||0===e?0:(e>0?Nn:Cn)(e)},Jn=Gn,Dn=Math.max,$n=Math.min,Hn=Gn,zn=Math.min,Un=function(t){return t>0?zn(Hn(t),9007199254740991):0},Wn=function(t){return Un(t.length)},qn=I,Xn=function(t,e){var n=Jn(t);return n<0?Dn(n+e,0):$n(n,e)},Bn=Wn,Kn=function(t){return function(e,n,r){var o,i=qn(e),a=Bn(i),c=Xn(r,a);if(t&&n!=n){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},Qn={includes:Kn(!0),indexOf:Kn(!1)},Yn=Rt,Vn=I,Zn=Qn.indexOf,tr=Ve,er=b([].push),nr=function(t,e){var n,r=Vn(t),o=0,i=[];for(n in r)!Yn(tr,n)&&Yn(r,n)&&er(i,n);for(;e.length>o;)Yn(r,n=e[o++])&&(~Zn(i,n)||er(i,n));return i},rr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],or=nr,ir=rr.concat("length","prototype");Fn.f=Object.getOwnPropertyNames||function(t){return or(t,ir)};var ar={};ar.f=Object.getOwnPropertySymbols;var cr=$,ur=Fn,fr=ar,sr=Te,lr=b([].concat),pr=cr("Reflect","ownKeys")||function(t){var e=ur.f(sr(t)),n=fr.f;return n?lr(e,n(t)):e},hr=Rt,vr=pr,dr=r,yr=je,mr=o,gr=F,br=/#|\.prototype\./,wr=function(t,e){var n=xr[jr(t)];return n==Er||n!=Or&&(gr(e)?mr(e):!!e)},jr=wr.normalize=function(t){return String(t).replace(br,".").toLowerCase()},xr=wr.data={},Or=wr.NATIVE="N",Er=wr.POLYFILL="P",Sr=wr,Tr=n,Pr=r.f,Lr=Fe,Mr=Ce.exports,kr=xt,_r=function(t,e){for(var n=vr(e),r=yr.f,o=dr.f,i=0;i<n.length;i++){var a=n[i];hr(t,a)||r(t,a,o(e,a))}},Rr=Sr,Ar=function(t,e){var n,r,o,i,a,c=t.target,u=t.global,f=t.stat;if(n=u?Tr:f?Tr[c]||kr(c,{}):(Tr[c]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(a=Pr(n,r))&&a.value:n[r],!Rr(u?r:c+(f?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;_r(i,o)}(t.sham||o&&o.sham)&&Lr(i,"sham",!0),Mr(n,r,i,t)}},Ir=nr,Fr=rr,Cr=Object.keys||function(t){return Ir(t,Fr)},Nr=i,Gr=b,Jr=c,Dr=o,$r=Cr,Hr=ar,zr=u,Ur=Mt,Wr=M,qr=Object.assign,Xr=Object.defineProperty,Br=Gr([].concat),Kr=!qr||Dr((function(){if(Nr&&1!==qr({b:1},qr(Xr({},"a",{enumerable:!0,get:function(){Xr(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=qr({},t)[n]||$r(qr({},e)).join("")!=r}))?function(t,e){for(var n=Ur(t),r=arguments.length,o=1,i=Hr.f,a=zr.f;r>o;)for(var c,u=Wr(arguments[o++]),f=i?Br($r(u),i(u)):$r(u),s=f.length,l=0;s>l;)c=f[l++],Nr&&!Jr(a,u,c)||(n[c]=u[c]);return n}:qr,Qr=Kr;function Yr(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Vr(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Yr(Object(n),!0).forEach((function(e){eo(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Yr(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Zr(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function to(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){Zr(i,r,o,a,c,"next",t)}function c(t){Zr(i,r,o,a,c,"throw",t)}a(void 0)}))}}function eo(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function no(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function ro(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function oo(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return ro(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ro(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}Ar({target:"Object",stat:!0,forced:Object.assign!==Qr},{assign:Qr});!function(t){var e=function(t){var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=S(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=s(t,e,n);if("normal"===u.type){if(r=n.done?v:p,u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=v,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var l="suspendedStart",p="suspendedYield",h="executing",v="completed",d={};function y(){}function m(){}function g(){}var b={};u(b,i,(function(){return this}));var w=Object.getPrototypeOf,j=w&&w(w(M([])));j&&j!==n&&r.call(j,i)&&(b=j);var x=g.prototype=y.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function M(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:k}}function k(){return{value:e,done:!0}}return m.prototype=g,u(x,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(E.prototype),u(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new E(f(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=M,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),f=r.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:M(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}({exports:{}});var io={};io[Bt("toStringTag")]="z";var ao="[object z]"===String(io),co=n,uo=ao,fo=F,so=O,lo=Bt("toStringTag"),po=co.Object,ho="Arguments"==so(function(){return arguments}()),vo=uo?so:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=po(t),lo))?n:ho?so(e):"Object"==(r=so(e))&&fo(e.callee)?"Arguments":r},yo=vo,mo=ao?{}.toString:function(){return"[object "+yo(this)+"]"},go=ao,bo=Ce.exports,wo=mo;go||bo(Object.prototype,"toString",wo,{unsafe:!0});var jo=n.Promise,xo=Ce.exports,Oo=n,Eo=F,So=Oo.String,To=Oo.TypeError,Po=b,Lo=Te,Mo=function(t){if("object"==typeof t||Eo(t))return t;throw To("Can't set "+So(t)+" as a prototype")},ko=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Po(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return Lo(n),Mo(r),e?t(n,r):n.__proto__=r,n}}():void 0),_o=je.f,Ro=Rt,Ao=Bt("toStringTag"),Io=$,Fo=je,Co=i,No=Bt("species"),Go=H,Jo=n.TypeError,Do=pt,$o=b(b.bind),Ho=function(t,e){return Do(t),void 0===e?t:$o?$o(t,e):function(){return t.apply(e,arguments)}},zo={},Uo=zo,Wo=Bt("iterator"),qo=Array.prototype,Xo=vo,Bo=vt,Ko=zo,Qo=Bt("iterator"),Yo=function(t){if(null!=t)return Bo(t,Qo)||Bo(t,"@@iterator")||Ko[Xo(t)]},Vo=c,Zo=pt,ti=Te,ei=ut,ni=Yo,ri=n.TypeError,oi=c,ii=Te,ai=vt,ci=Ho,ui=c,fi=Te,si=ut,li=function(t){return void 0!==t&&(Uo.Array===t||qo[Wo]===t)},pi=Wn,hi=H,vi=function(t,e){var n=arguments.length<2?ni(t):e;if(Zo(n))return ti(Vo(n,t));throw ri(ei(t)+" is not iterable")},di=Yo,yi=function(t,e,n){var r,o;ii(t);try{if(!(r=ai(t,"return"))){if("throw"===e)throw n;return n}r=oi(r,t)}catch(t){o=!0,r=t}if("throw"===e)throw n;if(o)throw r;return ii(r),n},mi=n.TypeError,gi=function(t,e){this.stopped=t,this.result=e},bi=gi.prototype,wi=Bt("iterator"),ji=!1;try{var xi=0,Oi={next:function(){return{done:!!xi++}},return:function(){ji=!0}};Oi[wi]=function(){return this},Array.from(Oi,(function(){throw 2}))}catch(t){}var Ei,Si,Ti,Pi,Li=b,Mi=o,ki=F,_i=vo,Ri=ze,Ai=function(){},Ii=[],Fi=$("Reflect","construct"),Ci=/^\s*(?:class|function)\b/,Ni=Li(Ci.exec),Gi=!Ci.exec(Ai),Ji=function(t){if(!ki(t))return!1;try{return Fi(Ai,Ii,t),!0}catch(t){return!1}},Di=!Fi||Mi((function(){var t;return Ji(Ji.call)||!Ji(Object)||!Ji((function(){t=!0}))||t}))?function(t){if(!ki(t))return!1;switch(_i(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return Gi||!!Ni(Ci,Ri(t))}:Ji,$i=Di,Hi=ut,zi=n.TypeError,Ui=Te,Wi=function(t){if($i(t))return t;throw zi(Hi(t)+" is not a constructor")},qi=Bt("species"),Xi=Function.prototype,Bi=Xi.apply,Ki=Xi.bind,Qi=Xi.call,Yi="object"==typeof Reflect&&Reflect.apply||(Ki?Qi.bind(Bi):function(){return Qi.apply(Bi,arguments)}),Vi=$("document","documentElement"),Zi=b([].slice),ta=/(?:ipad|iphone|ipod).*applewebkit/i.test(z),ea="process"==O(n.process),na=n,ra=Yi,oa=Ho,ia=F,aa=Rt,ca=o,ua=Vi,fa=Zi,sa=fe,la=ta,pa=ea,ha=na.setImmediate,va=na.clearImmediate,da=na.process,ya=na.Dispatch,ma=na.Function,ga=na.MessageChannel,ba=na.String,wa=0,ja={},xa="onreadystatechange";try{Ei=na.location}catch(t){}var Oa=function(t){if(aa(ja,t)){var e=ja[t];delete ja[t],e()}},Ea=function(t){return function(){Oa(t)}},Sa=function(t){Oa(t.data)},Ta=function(t){na.postMessage(ba(t),Ei.protocol+"//"+Ei.host)};ha&&va||(ha=function(t){var e=fa(arguments,1);return ja[++wa]=function(){ra(ia(t)?t:ma(t),void 0,e)},Si(wa),wa},va=function(t){delete ja[t]},pa?Si=function(t){da.nextTick(Ea(t))}:ya&&ya.now?Si=function(t){ya.now(Ea(t))}:ga&&!la?(Pi=(Ti=new ga).port2,Ti.port1.onmessage=Sa,Si=oa(Pi.postMessage,Pi)):na.addEventListener&&ia(na.postMessage)&&!na.importScripts&&Ei&&"file:"!==Ei.protocol&&!ca(Ta)?(Si=Ta,na.addEventListener("message",Sa,!1)):Si=xa in sa("script")?function(t){ua.appendChild(sa("script")).onreadystatechange=function(){ua.removeChild(this),Oa(t)}}:function(t){setTimeout(Ea(t),0)});var Pa,La,Ma,ka,_a,Ra,Aa,Ia,Fa={set:ha,clear:va},Ca=n,Na=/ipad|iphone|ipod/i.test(z)&&void 0!==Ca.Pebble,Ga=/web0s(?!.*chrome)/i.test(z),Ja=n,Da=Ho,$a=r.f,Ha=Fa.set,za=ta,Ua=Na,Wa=Ga,qa=ea,Xa=Ja.MutationObserver||Ja.WebKitMutationObserver,Ba=Ja.document,Ka=Ja.process,Qa=Ja.Promise,Ya=$a(Ja,"queueMicrotask"),Va=Ya&&Ya.value;Va||(Pa=function(){var t,e;for(qa&&(t=Ka.domain)&&t.exit();La;){e=La.fn,La=La.next;try{e()}catch(t){throw La?ka():Ma=void 0,t}}Ma=void 0,t&&t.enter()},za||qa||Wa||!Xa||!Ba?!Ua&&Qa&&Qa.resolve?((Aa=Qa.resolve(void 0)).constructor=Qa,Ia=Da(Aa.then,Aa),ka=function(){Ia(Pa)}):qa?ka=function(){Ka.nextTick(Pa)}:(Ha=Da(Ha,Ja),ka=function(){Ha(Pa)}):(_a=!0,Ra=Ba.createTextNode(""),new Xa(Pa).observe(Ra,{characterData:!0}),ka=function(){Ra.data=_a=!_a}));var Za=Va||function(t){var e={fn:t,next:void 0};Ma&&(Ma.next=e),La||(La=e,ka()),Ma=e},tc={},ec=pt,nc=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=ec(e),this.reject=ec(n)};tc.f=function(t){return new nc(t)};var rc,oc,ic,ac,cc=Te,uc=N,fc=tc,sc=n,lc="object"==typeof window,pc=Ar,hc=n,vc=$,dc=c,yc=jo,mc=Ce.exports,gc=function(t,e,n){for(var r in e)xo(t,r,e[r],n);return t},bc=ko,wc=function(t,e,n){t&&!Ro(t=n?t:t.prototype,Ao)&&_o(t,Ao,{configurable:!0,value:e})},jc=function(t){var e=Io(t),n=Fo.f;Co&&e&&!e[No]&&n(e,No,{configurable:!0,get:function(){return this}})},xc=pt,Oc=F,Ec=N,Sc=function(t,e){if(Go(e,t))return t;throw Jo("Incorrect invocation")},Tc=ze,Pc=function(t,e,n){var r,o,i,a,c,u,f,s=n&&n.that,l=!(!n||!n.AS_ENTRIES),p=!(!n||!n.IS_ITERATOR),h=!(!n||!n.INTERRUPTED),v=ci(e,s),d=function(t){return r&&yi(r,"normal",t),new gi(!0,t)},y=function(t){return l?(fi(t),h?v(t[0],t[1],d):v(t[0],t[1])):h?v(t,d):v(t)};if(p)r=t;else{if(!(o=di(t)))throw mi(si(t)+" is not iterable");if(li(o)){for(i=0,a=pi(t);a>i;i++)if((c=y(t[i]))&&hi(bi,c))return c;return new gi(!1)}r=vi(t,o)}for(u=r.next;!(f=ui(u,r)).done;){try{c=y(f.value)}catch(t){yi(r,"throw",t)}if("object"==typeof c&&c&&hi(bi,c))return c}return new gi(!1)},Lc=function(t,e){if(!e&&!ji)return!1;var n=!1;try{var r={};r[wi]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(t){}return n},Mc=function(t,e){var n,r=Ui(t).constructor;return void 0===r||null==(n=Ui(r)[qi])?e:Wi(n)},kc=Fa.set,_c=Za,Rc=function(t,e){if(cc(t),uc(e)&&e.constructor===t)return e;var n=fc.f(t);return(0,n.resolve)(e),n.promise},Ac=function(t,e){var n=sc.console;n&&n.error&&(1==arguments.length?n.error(t):n.error(t,e))},Ic=tc,Fc=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},Cc=mn,Nc=Sr,Gc=lc,Jc=ea,Dc=Q,$c=Bt("species"),Hc="Promise",zc=Cc.get,Uc=Cc.set,Wc=Cc.getterFor(Hc),qc=yc&&yc.prototype,Xc=yc,Bc=qc,Kc=hc.TypeError,Qc=hc.document,Yc=hc.process,Vc=Ic.f,Zc=Vc,tu=!!(Qc&&Qc.createEvent&&hc.dispatchEvent),eu=Oc(hc.PromiseRejectionEvent),nu="unhandledrejection",ru=!1,ou=Nc(Hc,(function(){var t=Tc(Xc),e=t!==String(Xc);if(!e&&66===Dc)return!0;if(Dc>=51&&/native code/.test(t))return!1;var n=new Xc((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))};return(n.constructor={})[$c]=r,!(ru=n.then((function(){}))instanceof r)||!e&&Gc&&!eu})),iu=ou||!Lc((function(t){Xc.all(t).catch((function(){}))})),au=function(t){var e;return!(!Ec(t)||!Oc(e=t.then))&&e},cu=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;_c((function(){for(var r=t.value,o=1==t.state,i=0;n.length>i;){var a,c,u,f=n[i++],s=o?f.ok:f.fail,l=f.resolve,p=f.reject,h=f.domain;try{s?(o||(2===t.rejection&&lu(t),t.rejection=1),!0===s?a=r:(h&&h.enter(),a=s(r),h&&(h.exit(),u=!0)),a===f.promise?p(Kc("Promise-chain cycle")):(c=au(a))?dc(c,a,l,p):l(a)):p(r)}catch(t){h&&!u&&h.exit(),p(t)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&fu(t)}))}},uu=function(t,e,n){var r,o;tu?((r=Qc.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),hc.dispatchEvent(r)):r={promise:e,reason:n},!eu&&(o=hc["on"+t])?o(r):t===nu&&Ac("Unhandled promise rejection",n)},fu=function(t){dc(kc,hc,(function(){var e,n=t.facade,r=t.value;if(su(t)&&(e=Fc((function(){Jc?Yc.emit("unhandledRejection",r,n):uu(nu,n,r)})),t.rejection=Jc||su(t)?2:1,e.error))throw e.value}))},su=function(t){return 1!==t.rejection&&!t.parent},lu=function(t){dc(kc,hc,(function(){var e=t.facade;Jc?Yc.emit("rejectionHandled",e):uu("rejectionhandled",e,t.value)}))},pu=function(t,e,n){return function(r){t(e,r,n)}},hu=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=2,cu(t,!0))},vu=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw Kc("Promise can't be resolved itself");var r=au(e);r?_c((function(){var n={done:!1};try{dc(r,e,pu(vu,n,t),pu(hu,n,t))}catch(e){hu(n,e,t)}})):(t.value=e,t.state=1,cu(t,!1))}catch(e){hu({done:!1},e,t)}}};if(ou&&(Bc=(Xc=function(t){Sc(this,Bc),xc(t),dc(rc,this);var e=zc(this);try{t(pu(vu,e),pu(hu,e))}catch(t){hu(e,t)}}).prototype,(rc=function(t){Uc(this,{type:Hc,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=gc(Bc,{then:function(t,e){var n=Wc(this),r=n.reactions,o=Vc(Mc(this,Xc));return o.ok=!Oc(t)||t,o.fail=Oc(e)&&e,o.domain=Jc?Yc.domain:void 0,n.parent=!0,r[r.length]=o,0!=n.state&&cu(n,!1),o.promise},catch:function(t){return this.then(void 0,t)}}),oc=function(){var t=new rc,e=zc(t);this.promise=t,this.resolve=pu(vu,e),this.reject=pu(hu,e)},Ic.f=Vc=function(t){return t===Xc||t===ic?new oc(t):Zc(t)},Oc(yc)&&qc!==Object.prototype)){ac=qc.then,ru||(mc(qc,"then",(function(t,e){var n=this;return new Xc((function(t,e){dc(ac,n,t,e)})).then(t,e)}),{unsafe:!0}),mc(qc,"catch",Bc.catch,{unsafe:!0}));try{delete qc.constructor}catch(t){}bc&&bc(qc,Bc)}pc({global:!0,wrap:!0,forced:ou},{Promise:Xc}),wc(Xc,Hc,!1),jc(Hc),ic=vc(Hc),pc({target:Hc,stat:!0,forced:ou},{reject:function(t){var e=Vc(this);return dc(e.reject,void 0,t),e.promise}}),pc({target:Hc,stat:!0,forced:ou},{resolve:function(t){return Rc(this,t)}}),pc({target:Hc,stat:!0,forced:iu},{all:function(t){var e=this,n=Vc(e),r=n.resolve,o=n.reject,i=Fc((function(){var n=xc(e.resolve),i=[],a=0,c=1;Pc(t,(function(t){var u=a++,f=!1;c++,dc(n,e,t).then((function(t){f||(f=!0,i[u]=t,--c||r(i))}),o)})),--c||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=Vc(e),r=n.reject,o=Fc((function(){var o=xc(e.resolve);Pc(t,(function(t){dc(o,e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}});var du,yu=je,mu=Te,gu=I,bu=Cr,wu=i?Object.defineProperties:function(t,e){mu(t);for(var n,r=gu(e),o=bu(e),i=o.length,a=0;i>a;)yu.f(t,n=o[a++],r[n]);return t},ju=Te,xu=wu,Ou=rr,Eu=Ve,Su=Vi,Tu=fe,Pu=Ye("IE_PROTO"),Lu=function(){},Mu=function(t){return"<script>"+t+"</"+"script>"},ku=function(t){t.write(Mu("")),t.close();var e=t.parentWindow.Object;return t=null,e},_u=function(){try{du=new ActiveXObject("htmlfile")}catch(t){}var t,e;_u="undefined"!=typeof document?document.domain&&du?ku(du):((e=Tu("iframe")).style.display="none",Su.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Mu("document.F=Object")),t.close(),t.F):ku(du);for(var n=Ou.length;n--;)delete _u.prototype[Ou[n]];return _u()};Eu[Pu]=!0;var Ru=Object.create||function(t,e){var n;return null!==t?(Lu.prototype=ju(t),n=new Lu,Lu.prototype=null,n[Pu]=t):n=_u(),void 0===e?n:xu(n,e)},Au=je,Iu=Bt("unscopables"),Fu=Array.prototype;null==Fu[Iu]&&Au.f(Fu,Iu,{configurable:!0,value:Ru(null)});var Cu=Qn.includes,Nu=function(t){Fu[Iu][t]=!0};Ar({target:"Array",proto:!0},{includes:function(t){return Cu(this,t,arguments.length>1?arguments[1]:void 0)}}),Nu("includes");var Gu=N,Ju=O,Du=Bt("match"),$u=function(t){var e;return Gu(t)&&(void 0!==(e=t[Du])?!!e:"RegExp"==Ju(t))},Hu=n.TypeError,zu=vo,Uu=n.String,Wu=Bt("match"),qu=Ar,Xu=function(t){if($u(t))throw Hu("The method doesn't accept regular expressions");return t},Bu=_,Ku=function(t){if("Symbol"===zu(t))throw TypeError("Cannot convert a Symbol value to a string");return Uu(t)},Qu=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[Wu]=!1,"/./"[t](e)}catch(t){}}return!1},Yu=b("".indexOf);qu({target:"String",proto:!0,forced:!Qu("includes")},{includes:function(t){return!!~Yu(Ku(Bu(this)),Ku(Xu(t)),arguments.length>1?arguments[1]:void 0)}});var Vu=["local","version","extensions"],Zu=function(){var t,e={messageStyle:"none",tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],skipTags:["script","noscript","style","textarea","pre"]},skipStartupTypeset:!0};return{id:"mathjax2",init:function(n){var r=(t=n).getConfig().mathjax2||t.getConfig().math||{},o=Vr(Vr({},e),r),i=(o.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js")+"?config="+(o.config||"TeX-AMS_HTML-full");o.tex2jax=Vr(Vr({},e.tex2jax),r.tex2jax),o.mathjax=o.config=null,function(t,e){var n=this,r=document.querySelector("head"),o=document.createElement("script");o.type="text/javascript",o.src=t;var i=function(){"function"==typeof e&&(e.call(),e=null)};o.onload=i,o.onreadystatechange=function(){"loaded"===n.readyState&&i()},r.appendChild(o)}(i,(function(){MathJax.Hub.Config(o),MathJax.Hub.Queue(["Typeset",MathJax.Hub,t.getRevealElement()]),MathJax.Hub.Queue(t.layout),t.on("slidechanged",(function(t){MathJax.Hub.Queue(["Typeset",MathJax.Hub,t.currentSlide])}))}))}}},tf=Zu,ef=Plugin=Object.assign(tf(),{KaTeX:function(){var t,e={version:"latest",delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],ignoredTags:["script","noscript","style","textarea","pre"]},n=function(t){return new Promise((function(e,n){var r=document.createElement("script");r.type="text/javascript",r.onload=e,r.onerror=n,r.src=t,document.head.append(r)}))};function r(){return(r=to(regeneratorRuntime.mark((function t(e){var r,o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=oo(e),t.prev=1,r.s();case 3:if((o=r.n()).done){t.next=9;break}return i=o.value,t.next=7,n(i);case 7:t.next=3;break;case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),r.e(t.t0);case 14:return t.prev=14,r.f(),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[1,11,14,17]])})))).apply(this,arguments)}return{id:"katex",init:function(n){var o=this,i=(t=n).getConfig().katex||{},a=Vr(Vr({},e),i);a.local,a.version,a.extensions;var c=no(a,Vu),u=a.local||"https://cdn.jsdelivr.net/npm/katex",f=a.local?"":"@"+a.version,s=u+f+"/dist/katex.min.css",l=u+f+"/dist/contrib/mhchem.min.js",p=u+f+"/dist/contrib/auto-render.min.js",h=[u+f+"/dist/katex.min.js"];a.extensions&&a.extensions.includes("mhchem")&&h.push(l),h.push(p);var v,d,y=function(){renderMathInElement(n.getSlidesElement(),c),t.layout()};v=s,(d=document.createElement("link")).rel="stylesheet",d.href=v,document.head.appendChild(d),function(t){return r.apply(this,arguments)}(h).then((function(){t.isReady()?y():t.on("ready",y.bind(o))}))}}},MathJax2:Zu,MathJax3:function(){var t={tex:{inlineMath:[["$","$"],["\\(","\\)"]]},options:{skipHtmlTags:["script","noscript","style","textarea","pre"]},startup:{ready:function(){MathJax.startup.defaultReady(),MathJax.startup.promise.then((function(){Reveal.layout()}))}}};return{id:"mathjax3",init:function(e){var n=e.getConfig().mathjax3||{},r=Vr(Vr({},t),n);r.tex=Vr(Vr({},t.tex),n.tex),r.options=Vr(Vr({},r.options),t.options),r.startup=Vr(Vr({},t.startup),n.startup);var o=r.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";r.mathjax=null,window.MathJax=r,function(t,e){var n=document.createElement("script");n.type="text/javascript",n.id="MathJax-script",n.src=t,n.async=!0,n.onload=function(){"function"==typeof e&&(e.call(),e=null)},document.head.appendChild(n)}(o,(function(){Reveal.addEventListener("slidechanged",(function(t){MathJax.typeset()}))}))}}}});return ef}));