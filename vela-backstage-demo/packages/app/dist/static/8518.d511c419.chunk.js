"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8518],{48518:function(X,z,N){N.r(z),N.d(z,{c:function(){return Q}});var G=N(26312),H=Object.defineProperty,_=(x,j)=>H(x,"name",{value:j,configurable:!0});function B(x,j){return j.forEach(function(s){s&&typeof s!="string"&&!Array.isArray(s)&&Object.keys(s).forEach(function(o){if(o!=="default"&&!(o in x)){var d=Object.getOwnPropertyDescriptor(s,o);Object.defineProperty(x,o,d.get?d:{enumerable:!0,get:function(){return s[o]}})}})}),Object.freeze(x)}_(B,"_mergeNamespaces");var $={exports:{}};(function(x,j){(function(s){s(G.a.exports)})(function(s){var o={},d=/[^\s\u00a0]/,m=s.Pos,V=s.cmpPos;function W(t){var l=t.search(d);return l==-1?0:l}_(W,"firstNonWS"),s.commands.toggleComment=function(t){t.toggleComment()},s.defineExtension("toggleComment",function(t){t||(t=o);for(var l=this,n=1/0,e=this.listSelections(),g=null,c=e.length-1;c>=0;c--){var a=e[c].from(),r=e[c].to();a.line>=n||(r.line>=n&&(r=m(n,0)),n=a.line,g==null?l.uncomment(a,r,t)?g="un":(l.lineComment(a,r,t),g="line"):g=="un"?l.uncomment(a,r,t):l.lineComment(a,r,t))}});function K(t,l,n){return/\bstring\b/.test(t.getTokenTypeAt(m(l.line,0)))&&!/^[\'\"\`]/.test(n)}_(K,"probablyInsideString");function I(t,l){var n=t.getMode();return n.useInnerComments===!1||!n.innerMode?n:t.getModeAt(l)}_(I,"getMode"),s.defineExtension("lineComment",function(t,l,n){n||(n=o);var e=this,g=I(e,t),c=e.getLine(t.line);if(!(c==null||K(e,t,c))){var a=n.lineComment||g.lineComment;if(!a){(n.blockCommentStart||g.blockCommentStart)&&(n.fullLines=!0,e.blockComment(t,l,n));return}var r=Math.min(l.ch!=0||l.line==t.line?l.line+1:l.line,e.lastLine()+1),L=n.padding==null?" ":n.padding,f=n.commentBlankLines||t.line==l.line;e.operation(function(){if(n.indent){for(var v=null,i=t.line;i<r;++i){var u=e.getLine(i),h=u.slice(0,W(u));(v==null||v.length>h.length)&&(v=h)}for(var i=t.line;i<r;++i){var u=e.getLine(i),b=v.length;!f&&!d.test(u)||(u.slice(0,b)!=v&&(b=W(u)),e.replaceRange(v+a+L,m(i,0),m(i,b)))}}else for(var i=t.line;i<r;++i)(f||d.test(e.getLine(i)))&&e.replaceRange(a+L,m(i,0))})}}),s.defineExtension("blockComment",function(t,l,n){n||(n=o);var e=this,g=I(e,t),c=n.blockCommentStart||g.blockCommentStart,a=n.blockCommentEnd||g.blockCommentEnd;if(!c||!a){(n.lineComment||g.lineComment)&&n.fullLines!=!1&&e.lineComment(t,l,n);return}if(!/\bcomment\b/.test(e.getTokenTypeAt(m(t.line,0)))){var r=Math.min(l.line,e.lastLine());r!=t.line&&l.ch==0&&d.test(e.getLine(r))&&--r;var L=n.padding==null?" ":n.padding;t.line>r||e.operation(function(){if(n.fullLines!=!1){var f=d.test(e.getLine(r));e.replaceRange(L+a,m(r)),e.replaceRange(c+L,m(t.line,0));var v=n.blockCommentLead||g.blockCommentLead;if(v!=null)for(var i=t.line+1;i<=r;++i)(i!=r||f)&&e.replaceRange(v+L,m(i,0))}else{var u=V(e.getCursor("to"),l)==0,h=!e.somethingSelected();e.replaceRange(a,l),u&&e.setSelection(h?l:e.getCursor("from"),l),e.replaceRange(c,t)}})}}),s.defineExtension("uncomment",function(t,l,n){n||(n=o);var e=this,g=I(e,t),c=Math.min(l.ch!=0||l.line==t.line?l.line:l.line-1,e.lastLine()),a=Math.min(t.line,c),r=n.lineComment||g.lineComment,L=[],f=n.padding==null?" ":n.padding,v;e:{if(!r)break e;for(var i=a;i<=c;++i){var u=e.getLine(i),h=u.indexOf(r);if(h>-1&&!/comment/.test(e.getTokenTypeAt(m(i,h+1)))&&(h=-1),h==-1&&d.test(u)||h>-1&&d.test(u.slice(0,h)))break e;L.push(u)}if(e.operation(function(){for(var C=a;C<=c;++C){var p=L[C-a],O=p.indexOf(r),k=O+r.length;O<0||(p.slice(k,k+f.length)==f&&(k+=f.length),v=!0,e.replaceRange("",m(C,O),m(C,k)))}}),v)return!0}var b=n.blockCommentStart||g.blockCommentStart,S=n.blockCommentEnd||g.blockCommentEnd;if(!b||!S)return!1;var D=n.blockCommentLead||g.blockCommentLead,T=e.getLine(a),A=T.indexOf(b);if(A==-1)return!1;var M=c==a?T:e.getLine(c),y=M.indexOf(S,c==a?A+b.length:0),U=m(a,A+1),w=m(c,y+1);if(y==-1||!/comment/.test(e.getTokenTypeAt(U))||!/comment/.test(e.getTokenTypeAt(w))||e.getRange(U,w,`
`).indexOf(S)>-1)return!1;var E=T.lastIndexOf(b,t.ch),R=E==-1?-1:T.slice(0,t.ch).indexOf(S,E+b.length);if(E!=-1&&R!=-1&&R+S.length!=t.ch)return!1;R=M.indexOf(S,l.ch);var F=M.slice(l.ch).lastIndexOf(b,R-l.ch);return E=R==-1||F==-1?-1:l.ch+F,R!=-1&&E!=-1&&E!=l.ch?!1:(e.operation(function(){e.replaceRange("",m(c,y-(f&&M.slice(y-f.length,y)==f?f.length:0)),m(c,y+S.length));var C=A+b.length;if(f&&T.slice(C,C+f.length)==f&&(C+=f.length),e.replaceRange("",m(a,A),m(a,C)),D)for(var p=a+1;p<=c;++p){var O=e.getLine(p),k=O.indexOf(D);if(!(k==-1||d.test(O.slice(0,k)))){var P=k+D.length;f&&O.slice(P,P+f.length)==f&&(P+=f.length),e.replaceRange("",m(p,k),m(p,P))}}}),!0)})})})();var J=$.exports,Q=Object.freeze(B({__proto__:null,[Symbol.toStringTag]:"Module",default:J},[$.exports]))}}]);})();

//# sourceMappingURL=8518.d511c419.chunk.js.map