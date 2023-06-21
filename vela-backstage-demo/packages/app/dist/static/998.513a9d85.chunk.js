"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[998],{27486:function(H,U,s){s.d(U,{C:function(){return $},P:function(){return A},R:function(){return T}});var D=Object.defineProperty,I=(L,c)=>D(L,"name",{value:c,configurable:!0});class ${constructor(c){this.getStartOfToken=()=>this._start,this.getCurrentPosition=()=>this._pos,this.eol=()=>this._sourceText.length===this._pos,this.sol=()=>this._pos===0,this.peek=()=>this._sourceText.charAt(this._pos)?this._sourceText.charAt(this._pos):null,this.next=()=>{const i=this._sourceText.charAt(this._pos);return this._pos++,i},this.eat=i=>{if(this._testNextCharacter(i))return this._start=this._pos,this._pos++,this._sourceText.charAt(this._pos-1)},this.eatWhile=i=>{let o=this._testNextCharacter(i),m=!1;for(o&&(m=o,this._start=this._pos);o;)this._pos++,o=this._testNextCharacter(i),m=!0;return m},this.eatSpace=()=>this.eatWhile(/[\s\u00a0]/),this.skipToEnd=()=>{this._pos=this._sourceText.length},this.skipTo=i=>{this._pos=i},this.match=(i,o=!0,m=!1)=>{let g=null,R=null;return typeof i=="string"?(R=new RegExp(i,m?"i":"g").test(this._sourceText.substr(this._pos,i.length)),g=i):i instanceof RegExp&&(R=this._sourceText.slice(this._pos).match(i),g=R==null?void 0:R[0]),R!=null&&(typeof i=="string"||R instanceof Array&&this._sourceText.startsWith(R[0],this._pos))?(o&&(this._start=this._pos,g&&g.length&&(this._pos+=g.length)),R):!1},this.backUp=i=>{this._pos-=i},this.column=()=>this._pos,this.indentation=()=>{const i=this._sourceText.match(/\s*/);let o=0;if(i&&i.length!==0){const m=i[0];let g=0;for(;m.length>g;)m.charCodeAt(g)===9?o+=2:o++,g++}return o},this.current=()=>this._sourceText.slice(this._start,this._pos),this._start=0,this._pos=0,this._sourceText=c}_testNextCharacter(c){const i=this._sourceText.charAt(this._pos);let o=!1;return typeof c=="string"?o=i===c:o=c instanceof RegExp?c.test(i):c(i),o}}I($,"CharacterStream");class T{constructor(c,i){this.containsPosition=o=>this.start.line===o.line?this.start.character<=o.character:this.end.line===o.line?this.end.character>=o.character:this.start.line<=o.line&&this.end.line>=o.line,this.start=c,this.end=i}setStart(c,i){this.start=new A(c,i)}setEnd(c,i){this.end=new A(c,i)}}I(T,"Range");class A{constructor(c,i){this.lessThanOrEqualTo=o=>this.line<o.line||this.line===o.line&&this.character<=o.character,this.line=c,this.character=i}setLine(c){this.line=c}setCharacter(c){this.character=c}}I(A,"Position")},20998:function(H,U,s){s.r(U);var D=s(26312),I=s(99283),$=s(18744),T=s(65328),A=s(74251),L=s(53213),c=s(50097),i=s(79629),o=s(89741),m=s(2012),g=s(1366),R=s(90490),W=s(55189),w=s(23105),e=s(81420),n=s(95810),f=s(48893),p=s(55596),x=s(95115),G=s(34130),M=s(88076),P=s(86519),E=s(61424),k=s(79646);function h(t){return{Field(l){const r=t.getFieldDef(),d=r==null?void 0:r.deprecationReason;if(r&&d!=null){const a=t.getParentType();a!=null||(0,E.k)(!1),t.reportError(new P.__(`The field ${a.name}.${r.name} is deprecated. ${d}`,{nodes:l}))}},Argument(l){const r=t.getArgument(),d=r==null?void 0:r.deprecationReason;if(r&&d!=null){const a=t.getDirective();if(a!=null)t.reportError(new P.__(`Directive "@${a.name}" argument "${r.name}" is deprecated. ${d}`,{nodes:l}));else{const u=t.getParentType(),v=t.getFieldDef();u!=null&&v!=null||(0,E.k)(!1),t.reportError(new P.__(`Field "${u.name}.${v.name}" argument "${r.name}" is deprecated. ${d}`,{nodes:l}))}}},ObjectField(l){const r=(0,k.xC)(t.getParentInputType());if((0,k.hL)(r)){const d=r.getFields()[l.name.value],a=d==null?void 0:d.deprecationReason;a!=null&&t.reportError(new P.__(`The input field ${r.name}.${d.name} is deprecated. ${a}`,{nodes:l}))}},EnumValue(l){const r=t.getEnumValue(),d=r==null?void 0:r.deprecationReason;if(r&&d!=null){const a=(0,k.xC)(t.getInputType());a!=null||(0,E.k)(!1),t.reportError(new P.__(`The enum value "${a.name}.${r.name}" is deprecated. ${d}`,{nodes:l}))}}}}var ne=s(7699),O=s(27486),Z=s(48250),te=s(2784),ie=s(28316),q=Object.defineProperty,N=(t,l)=>q(t,"name",{value:l,configurable:!0});const _=[I.t,$.q,T.P,A.L,L.y,c.o,i.I,o.J,m.k,g.g,R.L,W.P];function Y(t,l,r,d,a){const u=w.i.filter(y=>!(y===e.J||y===n.i||d&&y===f.a));return r&&Array.prototype.push.apply(u,r),a&&Array.prototype.push.apply(u,_),(0,p.Gu)(t,l,u).filter(y=>{if(y.message.indexOf("Unknown directive")!==-1&&y.nodes){const S=y.nodes[0];if(S&&S.kind===x.h.DIRECTIVE){const C=S.name.value;if(C==="arguments"||C==="argumentDefinitions")return!1}}return!0})}N(Y,"validateWithCustomRules");const Q={Error:"Error",Warning:"Warning",Information:"Information",Hint:"Hint"},j={[Q.Error]:1,[Q.Warning]:2,[Q.Information]:3,[Q.Hint]:4},V=N((t,l)=>{if(!t)throw new Error(l)},"invariant");function z(t,l=null,r,d,a){var u,v;let y=null;a&&(typeof a=="string"?t+=`

`+a:t+=`

`+a.reduce((S,C)=>(S+=(0,G.S)(C)+`

`,S),""));try{y=(0,M.Qc)(t)}catch(S){if(S instanceof P.__){const C=K((v=(u=S.locations)===null||u===void 0?void 0:u[0])!==null&&v!==void 0?v:{line:0,column:0},t);return[{severity:j.Error,message:S.message,source:"GraphQL: Syntax",range:C}]}throw S}return J(y,l,r,d)}N(z,"getDiagnostics");function J(t,l=null,r,d){if(!l)return[];const a=F(Y(l,t,r,d),v=>B(v,j.Error,"Validation")),u=F((0,p.Gu)(l,t,[h]),v=>B(v,j.Warning,"Deprecation"));return a.concat(u)}N(J,"validateQuery");function F(t,l){return Array.prototype.concat.apply([],t.map(l))}N(F,"mapCat");function B(t,l,r){if(!t.nodes)return[];const d=[];return t.nodes.forEach(a=>{const u=a.kind!=="Variable"&&"name"in a&&a.name!==void 0?a.name:"variable"in a&&a.variable!==void 0?a.variable:a;if(u){V(t.locations,"GraphQL validation error requires locations.");const v=t.locations[0],y=b(u),S=v.column+(y.end-y.start);d.push({source:`GraphQL: ${r}`,message:t.message,severity:l,range:new O.R(new O.P(v.line-1,v.column-1),new O.P(v.line-1,S))})}}),d}N(B,"annotations");function K(t,l){const r=(0,Z.o)(),d=r.startState(),a=l.split(`
`);V(a.length>=t.line,"Query text must have more lines than where the error happened");let u=null;for(let C=0;C<t.line;C++)for(u=new O.C(a[C]);!u.eol()&&r.token(u,d)!=="invalidchar";);V(u,"Expected Parser stream to be available.");const v=t.line-1,y=u.getStartOfToken(),S=u.getCurrentPosition();return new O.R(new O.P(v,y),new O.P(v,S))}N(K,"getRange");function b(t){const r=t.loc;return V(r,"Expected ASTNode to have a location."),r}N(b,"getLocation");const X=["error","warning","information","hint"],ee={"GraphQL: Validation":"validation","GraphQL: Deprecation":"deprecation","GraphQL: Syntax":"syntax"};D.C.registerHelper("lint","graphql",(t,l)=>{const r=l.schema;return z(t,r,l.validationRules,void 0,l.externalFragments).map(u=>({message:u.message,severity:u.severity?X[u.severity-1]:X[0],type:u.source?ee[u.source]:void 0,from:D.C.Pos(u.range.start.line,u.range.start.character),to:D.C.Pos(u.range.end.line,u.range.end.character)}))})},48250:function(H,U,s){s.d(U,{o:function(){return A}});var D=s(7699),I=s(95115),$=Object.defineProperty,T=(e,n)=>$(e,"name",{value:n,configurable:!0});function A(e={eatWhitespace:n=>n.eatWhile(D.i),lexRules:D.L,parseRules:D.P,editorConfig:{}}){return{startState(){const n={level:0,step:0,name:null,kind:null,type:null,rule:null,needsSeparator:!1,prevState:null};return o(e.parseRules,n,I.h.DOCUMENT),n},token(n,f){return L(n,f,e)}}}T(A,"onlineParser");function L(e,n,f){var p;if(n.inBlockstring)return e.match(/.*"""/)?(n.inBlockstring=!1,"string"):(e.skipToEnd(),"string");const{lexRules:x,parseRules:G,eatWhitespace:M,editorConfig:P}=f;if(n.rule&&n.rule.length===0?m(n):n.needsAdvance&&(n.needsAdvance=!1,g(n,!0)),e.sol()){const h=(P==null?void 0:P.tabSize)||2;n.indentLevel=Math.floor(e.indentation()/h)}if(M(e))return"ws";const E=w(x,e);if(!E)return e.match(/\S+/)||e.match(/\s/),o(i,n,"Invalid"),"invalidchar";if(E.kind==="Comment")return o(i,n,"Comment"),"comment";const k=c({},n);if(E.kind==="Punctuation"){if(/^[{([]/.test(E.value))n.indentLevel!==void 0&&(n.levels=(n.levels||[]).concat(n.indentLevel+1));else if(/^[})\]]/.test(E.value)){const h=n.levels=(n.levels||[]).slice(0,-1);n.indentLevel&&h.length>0&&h[h.length-1]<n.indentLevel&&(n.indentLevel=h[h.length-1])}}for(;n.rule;){let h=typeof n.rule=="function"?n.step===0?n.rule(E,e):null:n.rule[n.step];if(n.needsSeparator&&(h=h==null?void 0:h.separator),h){if(h.ofRule&&(h=h.ofRule),typeof h=="string"){o(G,n,h);continue}if(!((p=h.match)===null||p===void 0)&&p.call(h,E))return h.update&&h.update(n,E),E.kind==="Punctuation"?g(n,!0):n.needsAdvance=!0,h.style}W(n)}return c(n,k),o(i,n,"Invalid"),"invalidchar"}T(L,"getToken");function c(e,n){const f=Object.keys(n);for(let p=0;p<f.length;p++)e[f[p]]=n[f[p]];return e}T(c,"assign");const i={Invalid:[],Comment:[]};function o(e,n,f){if(!e[f])throw new TypeError("Unknown rule: "+f);n.prevState=Object.assign({},n),n.kind=f,n.name=null,n.type=null,n.rule=e[f],n.step=0,n.needsSeparator=!1}T(o,"pushRule");function m(e){!e.prevState||(e.kind=e.prevState.kind,e.name=e.prevState.name,e.type=e.prevState.type,e.rule=e.prevState.rule,e.step=e.prevState.step,e.needsSeparator=e.prevState.needsSeparator,e.prevState=e.prevState.prevState)}T(m,"popRule");function g(e,n){var f;if(R(e)&&e.rule){const p=e.rule[e.step];if(p.separator){const x=p.separator;if(e.needsSeparator=!e.needsSeparator,!e.needsSeparator&&x.ofRule)return}if(n)return}for(e.needsSeparator=!1,e.step++;e.rule&&!(Array.isArray(e.rule)&&e.step<e.rule.length);)m(e),e.rule&&(R(e)?!((f=e.rule)===null||f===void 0)&&f[e.step].separator&&(e.needsSeparator=!e.needsSeparator):(e.needsSeparator=!1,e.step++))}T(g,"advanceRule");function R(e){const n=Array.isArray(e.rule)&&typeof e.rule[e.step]!="string"&&e.rule[e.step];return n&&n.isList}T(R,"isList");function W(e){for(;e.rule&&!(Array.isArray(e.rule)&&e.rule[e.step].ofRule);)m(e);e.rule&&g(e,!1)}T(W,"unsuccessful");function w(e,n){const f=Object.keys(e);for(let p=0;p<f.length;p++){const x=n.match(e[f[p]]);if(x&&x instanceof Array)return{kind:f[p],value:x[0]}}}T(w,"lex")}}]);})();

//# sourceMappingURL=998.513a9d85.chunk.js.map