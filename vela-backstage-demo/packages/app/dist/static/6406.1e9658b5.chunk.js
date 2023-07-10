"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6406],{66406:function(U,I,R){R.r(I),R.d(I,{a:function(){return S},s:function(){return K}});var T=R(26312),W=Object.defineProperty,u=(F,w)=>W(F,"name",{value:w,configurable:!0});function z(F,w){return w.forEach(function(g){g&&typeof g!="string"&&!Array.isArray(g)&&Object.keys(g).forEach(function(s){if(s!=="default"&&!(s in F)){var P=Object.getOwnPropertyDescriptor(g,s);Object.defineProperty(F,s,P.get?P:{enumerable:!0,get:function(){return g[s]}})}})}),Object.freeze(F)}u(z,"_mergeNamespaces");var S={exports:{}};(function(F,w){(function(g){g(T.a.exports)})(function(g){var s=g.Pos;function P(t){var e=t.flags;return e!=null?e:(t.ignoreCase?"i":"")+(t.global?"g":"")+(t.multiline?"m":"")}u(P,"regexpFlags");function x(t,e){for(var n=P(t),r=n,a=0;a<e.length;a++)r.indexOf(e.charAt(a))==-1&&(r+=e.charAt(a));return n==r?t:new RegExp(t.source,r)}u(x,"ensureFlags");function j(t){return/\\s|\\n|\n|\\W|\\D|\[\^/.test(t.source)}u(j,"maybeMultiline");function y(t,e,n){e=x(e,"g");for(var r=n.line,a=n.ch,l=t.lastLine();r<=l;r++,a=0){e.lastIndex=a;var i=t.getLine(r),f=e.exec(i);if(f)return{from:s(r,f.index),to:s(r,f.index+f[0].length),match:f}}}u(y,"searchRegexpForward");function M(t,e,n){if(!j(e))return y(t,e,n);e=x(e,"gm");for(var r,a=1,l=n.line,i=t.lastLine();l<=i;){for(var f=0;f<a&&!(l>i);f++){var d=t.getLine(l++);r=r==null?d:r+`
`+d}a=a*2,e.lastIndex=n.ch;var c=e.exec(r);if(c){var h=r.slice(0,c.index).split(`
`),o=c[0].split(`
`),v=n.line+h.length-1,m=h[h.length-1].length;return{from:s(v,m),to:s(v+o.length-1,o.length==1?m+o[0].length:o[o.length-1].length),match:c}}}}u(M,"searchRegexpForwardMultiline");function _(t,e,n){for(var r,a=0;a<=t.length;){e.lastIndex=a;var l=e.exec(t);if(!l)break;var i=l.index+l[0].length;if(i>t.length-n)break;(!r||i>r.index+r[0].length)&&(r=l),a=l.index+1}return r}u(_,"lastMatchIn");function B(t,e,n){e=x(e,"g");for(var r=n.line,a=n.ch,l=t.firstLine();r>=l;r--,a=-1){var i=t.getLine(r),f=_(i,e,a<0?0:i.length-a);if(f)return{from:s(r,f.index),to:s(r,f.index+f[0].length),match:f}}}u(B,"searchRegexpBackward");function N(t,e,n){if(!j(e))return B(t,e,n);e=x(e,"gm");for(var r,a=1,l=t.getLine(n.line).length-n.ch,i=n.line,f=t.firstLine();i>=f;){for(var d=0;d<a&&i>=f;d++){var c=t.getLine(i--);r=r==null?c:c+`
`+r}a*=2;var h=_(r,e,l);if(h){var o=r.slice(0,h.index).split(`
`),v=h[0].split(`
`),m=i+o.length,O=o[o.length-1].length;return{from:s(m,O),to:s(m+v.length-1,v.length==1?O+v[0].length:v[v.length-1].length),match:h}}}}u(N,"searchRegexpBackwardMultiline");var b,E;String.prototype.normalize?(b=u(function(t){return t.normalize("NFD").toLowerCase()},"doFold"),E=u(function(t){return t.normalize("NFD")},"noFold")):(b=u(function(t){return t.toLowerCase()},"doFold"),E=u(function(t){return t},"noFold"));function p(t,e,n,r){if(t.length==e.length)return n;for(var a=0,l=n+Math.max(0,t.length-e.length);;){if(a==l)return a;var i=a+l>>1,f=r(t.slice(0,i)).length;if(f==n)return i;f>n?l=i:a=i+1}}u(p,"adjustPos");function A(t,e,n,r){if(!e.length)return null;var a=r?b:E,l=a(e).split(/\r|\n\r?/);e:for(var i=n.line,f=n.ch,d=t.lastLine()+1-l.length;i<=d;i++,f=0){var c=t.getLine(i).slice(f),h=a(c);if(l.length==1){var o=h.indexOf(l[0]);if(o==-1)continue e;var n=p(c,h,o,a)+f;return{from:s(i,p(c,h,o,a)+f),to:s(i,p(c,h,o+l[0].length,a)+f)}}else{var v=h.length-l[0].length;if(h.slice(v)!=l[0])continue e;for(var m=1;m<l.length-1;m++)if(a(t.getLine(i+m))!=l[m])continue e;var O=t.getLine(i+l.length-1),L=a(O),D=l[l.length-1];if(L.slice(0,D.length)!=D)continue e;return{from:s(i,p(c,h,v,a)+f),to:s(i+l.length-1,p(O,L,D.length,a))}}}}u(A,"searchStringForward");function C(t,e,n,r){if(!e.length)return null;var a=r?b:E,l=a(e).split(/\r|\n\r?/);e:for(var i=n.line,f=n.ch,d=t.firstLine()-1+l.length;i>=d;i--,f=-1){var c=t.getLine(i);f>-1&&(c=c.slice(0,f));var h=a(c);if(l.length==1){var o=h.lastIndexOf(l[0]);if(o==-1)continue e;return{from:s(i,p(c,h,o,a)),to:s(i,p(c,h,o+l[0].length,a))}}else{var v=l[l.length-1];if(h.slice(0,v.length)!=v)continue e;for(var m=1,n=i-l.length+1;m<l.length-1;m++)if(a(t.getLine(n+m))!=l[m])continue e;var O=t.getLine(i+1-l.length),L=a(O);if(L.slice(L.length-l[0].length)!=l[0])continue e;return{from:s(i+1-l.length,p(O,L,O.length-l[0].length,a)),to:s(i,p(c,h,v.length,a))}}}}u(C,"searchStringBackward");function k(t,e,n,r){this.atOccurrence=!1,this.afterEmptyMatch=!1,this.doc=t,n=n?t.clipPos(n):s(0,0),this.pos={from:n,to:n};var a;typeof r=="object"?a=r.caseFold:(a=r,r=null),typeof e=="string"?(a==null&&(a=!1),this.matches=function(l,i){return(l?C:A)(t,e,i,a)}):(e=x(e,"gm"),!r||r.multiline!==!1?this.matches=function(l,i){return(l?N:M)(t,e,i)}:this.matches=function(l,i){return(l?B:y)(t,e,i)})}u(k,"SearchCursor"),k.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(t){var e=this.doc.clipPos(t?this.pos.from:this.pos.to);if(this.afterEmptyMatch&&this.atOccurrence&&(e=s(e.line,e.ch),t?(e.ch--,e.ch<0&&(e.line--,e.ch=(this.doc.getLine(e.line)||"").length)):(e.ch++,e.ch>(this.doc.getLine(e.line)||"").length&&(e.ch=0,e.line++)),g.cmpPos(e,this.doc.clipPos(e))!=0))return this.atOccurrence=!1;var n=this.matches(t,e);if(this.afterEmptyMatch=n&&g.cmpPos(n.from,n.to)==0,n)return this.pos=n,this.atOccurrence=!0,this.pos.match||!0;var r=s(t?this.doc.firstLine():this.doc.lastLine()+1,0);return this.pos={from:r,to:r},this.atOccurrence=!1},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(t,e){if(!!this.atOccurrence){var n=g.splitLines(t);this.doc.replaceRange(n,this.pos.from,this.pos.to,e),this.pos.to=s(this.pos.from.line+n.length-1,n[n.length-1].length+(n.length==1?this.pos.from.ch:0))}}},g.defineExtension("getSearchCursor",function(t,e,n){return new k(this.doc,t,e,n)}),g.defineDocExtension("getSearchCursor",function(t,e,n){return new k(this,t,e,n)}),g.defineExtension("selectMatches",function(t,e){for(var n=[],r=this.getSearchCursor(t,this.getCursor("from"),e);r.findNext()&&!(g.cmpPos(r.to(),this.getCursor("to"))>0);)n.push({anchor:r.from(),head:r.to()});n.length&&this.setSelections(n,0)})})})();var $=S.exports,K=Object.freeze(z({__proto__:null,[Symbol.toStringTag]:"Module",default:$},[S.exports]))}}]);})();

//# sourceMappingURL=6406.1e9658b5.chunk.js.map