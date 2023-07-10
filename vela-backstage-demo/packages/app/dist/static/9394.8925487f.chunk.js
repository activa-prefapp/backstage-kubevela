"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9394],{27486:function(ne,W,y){y.d(W,{C:function(){return _},P:function(){return U},R:function(){return N}});var b=Object.defineProperty,V=(P,R)=>b(P,"name",{value:R,configurable:!0});class _{constructor(R){this.getStartOfToken=()=>this._start,this.getCurrentPosition=()=>this._pos,this.eol=()=>this._sourceText.length===this._pos,this.sol=()=>this._pos===0,this.peek=()=>this._sourceText.charAt(this._pos)?this._sourceText.charAt(this._pos):null,this.next=()=>{const v=this._sourceText.charAt(this._pos);return this._pos++,v},this.eat=v=>{if(this._testNextCharacter(v))return this._start=this._pos,this._pos++,this._sourceText.charAt(this._pos-1)},this.eatWhile=v=>{let h=this._testNextCharacter(v),T=!1;for(h&&(T=h,this._start=this._pos);h;)this._pos++,h=this._testNextCharacter(v),T=!0;return T},this.eatSpace=()=>this.eatWhile(/[\s\u00a0]/),this.skipToEnd=()=>{this._pos=this._sourceText.length},this.skipTo=v=>{this._pos=v},this.match=(v,h=!0,T=!1)=>{let n=null,C=null;return typeof v=="string"?(C=new RegExp(v,T?"i":"g").test(this._sourceText.substr(this._pos,v.length)),n=v):v instanceof RegExp&&(C=this._sourceText.slice(this._pos).match(v),n=C==null?void 0:C[0]),C!=null&&(typeof v=="string"||C instanceof Array&&this._sourceText.startsWith(C[0],this._pos))?(h&&(this._start=this._pos,n&&n.length&&(this._pos+=n.length)),C):!1},this.backUp=v=>{this._pos-=v},this.column=()=>this._pos,this.indentation=()=>{const v=this._sourceText.match(/\s*/);let h=0;if(v&&v.length!==0){const T=v[0];let n=0;for(;T.length>n;)T.charCodeAt(n)===9?h+=2:h++,n++}return h},this.current=()=>this._sourceText.slice(this._start,this._pos),this._start=0,this._pos=0,this._sourceText=R}_testNextCharacter(R){const v=this._sourceText.charAt(this._pos);let h=!1;return typeof R=="string"?h=v===R:h=R instanceof RegExp?R.test(v):R(v),h}}V(_,"CharacterStream");class N{constructor(R,v){this.containsPosition=h=>this.start.line===h.line?this.start.character<=h.character:this.end.line===h.line?this.end.character>=h.character:this.start.line<=h.line&&this.end.line>=h.line,this.start=R,this.end=v}setStart(R,v){this.start=new U(R,v)}setEnd(R,v){this.end=new U(R,v)}}V(N,"Range");class U{constructor(R,v){this.lessThanOrEqualTo=h=>this.line<h.line||this.line===h.line&&this.character<=h.character,this.line=R,this.character=v}setLine(R){this.line=R}setCharacter(R){this.character=R}}V(U,"Position")},59394:function(ne,W,y){y.r(W);var b=y(26312),V=y(8258),_=y(79646),N=y(58867),U=y(88076),P=y(82437),R=y(59303),v=y(49546),h=y(95115),T=y(99633),n=y(7699),C=y(27486),w=y(48250),B=y(14862),s=y(2784),a=y(28316),A=Object.defineProperty,E=(i,o)=>A(i,"name",{value:o,configurable:!0});function L(i){let o;return Y(i,r=>{switch(r.kind){case"Query":case"ShortQuery":case"Mutation":case"Subscription":case"FragmentDefinition":o=r;break}}),o}E(L,"getDefinitionState");function K(i,o,r){return r===B.S.name&&i.getQueryType()===o?B.S:r===B.T.name&&i.getQueryType()===o?B.T:r===B.a.name&&(0,_.Gv)(o)?B.a:"getFields"in o?o.getFields()[r]:null}E(K,"getFieldDef");function Y(i,o){const r=[];let t=i;for(;t!=null&&t.kind;)r.push(t),t=t.prevState;for(let e=r.length-1;e>=0;e--)o(r[e])}E(Y,"forEachState");function k(i){const o=Object.keys(i),r=o.length,t=new Array(r);for(let e=0;e<r;++e)t[e]=i[o[e]];return t}E(k,"objectValues");function I(i,o){return z(o,Z(i.string))}E(I,"hintList");function z(i,o){if(!o)return S(i,t=>!t.isDeprecated);const r=i.map(t=>({proximity:te(Z(t.label),o),entry:t}));return S(S(r,t=>t.proximity<=2),t=>!t.entry.isDeprecated).sort((t,e)=>(t.entry.isDeprecated?1:0)-(e.entry.isDeprecated?1:0)||t.proximity-e.proximity||t.entry.label.length-e.entry.label.length).map(t=>t.entry)}E(z,"filterAndSortList");function S(i,o){const r=i.filter(o);return r.length===0?i:r}E(S,"filterNonEmpty");function Z(i){return i.toLowerCase().replace(/\W/g,"")}E(Z,"normalizeText");function te(i,o){let r=ie(o,i);return i.length>o.length&&(r-=i.length-o.length-1,r+=i.indexOf(o)===0?0:.5),r}E(te,"getProximity");function ie(i,o){let r,t;const e=[],u=i.length,l=o.length;for(r=0;r<=u;r++)e[r]=[r];for(t=1;t<=l;t++)e[0][t]=t;for(r=1;r<=u;r++)for(t=1;t<=l;t++){const p=i[r-1]===o[t-1]?0:1;e[r][t]=Math.min(e[r-1][t]+1,e[r][t-1]+1,e[r-1][t-1]+p),r>1&&t>1&&i[r-1]===o[t-2]&&i[r-2]===o[t-1]&&(e[r][t]=Math.min(e[r][t],e[r-2][t-2]+p))}return e[u][l]}E(ie,"lexicalDistance");const re={command:"editor.action.triggerSuggest",title:"Suggestions"},ge=E(i=>{const o=[];if(i)try{(0,N.Vn)((0,U.Qc)(i),{FragmentDefinition(r){o.push(r)}})}catch{return[]}return o},"collectFragmentDefs");function oe(i,o,r,t,e,u){var l;const p=Object.assign(Object.assign({},u),{schema:i}),c=t||Ee(o,r),d=c.state.kind==="Invalid"?c.state.prevState:c.state;if(!d)return[];const g=d.kind,D=d.step,F=_e(i,c.state);if(g===n.R.DOCUMENT)return I(c,[{label:"query",kind:n.C.Function},{label:"mutation",kind:n.C.Function},{label:"subscription",kind:n.C.Function},{label:"fragment",kind:n.C.Function},{label:"{",kind:n.C.Constructor}]);if(g===n.R.IMPLEMENTS||g===n.R.NAMED_TYPE&&((l=d.prevState)===null||l===void 0?void 0:l.kind)===n.R.IMPLEMENTS)return ae(c,d,i,o,F);if(g===n.R.SELECTION_SET||g===n.R.FIELD||g===n.R.ALIASED_FIELD)return se(c,F,p);if(g===n.R.ARGUMENTS||g===n.R.ARGUMENT&&D===0){const f=F.argDefs;if(f)return I(c,f.map(m=>{var O;return{label:m.name,insertText:m.name+": ",command:re,detail:String(m.type),documentation:(O=m.description)!==null&&O!==void 0?O:void 0,kind:n.C.Variable,type:m.type}}))}if((g===n.R.OBJECT_VALUE||g===n.R.OBJECT_FIELD&&D===0)&&F.objectFieldDefs){const f=k(F.objectFieldDefs),m=g===n.R.OBJECT_VALUE?n.C.Value:n.C.Field;return I(c,f.map(O=>{var x;return{label:O.name,detail:String(O.type),documentation:(x=O.description)!==null&&x!==void 0?x:void 0,kind:m,type:O.type}}))}if(g===n.R.ENUM_VALUE||g===n.R.LIST_VALUE&&D===1||g===n.R.OBJECT_FIELD&&D===2||g===n.R.ARGUMENT&&D===2)return le(c,F,o,i);if(g===n.R.VARIABLE&&D===1){const f=(0,_.xC)(F.inputType),m=X(o,i,c);return I(c,m.filter(O=>O.detail===(f==null?void 0:f.name)))}return g===n.R.TYPE_CONDITION&&D===1||g===n.R.NAMED_TYPE&&d.prevState!=null&&d.prevState.kind===n.R.TYPE_CONDITION?ce(c,F,i):g===n.R.FRAGMENT_SPREAD&&D===1?ue(c,F,i,o,Array.isArray(e)?e:ge(e)):g===n.R.VARIABLE_DEFINITION&&D===2||g===n.R.LIST_TYPE&&D===1||g===n.R.NAMED_TYPE&&d.prevState&&(d.prevState.kind===n.R.VARIABLE_DEFINITION||d.prevState.kind===n.R.LIST_TYPE||d.prevState.kind===n.R.NON_NULL_TYPE)?pe(c,i):g===n.R.DIRECTIVE?fe(c,d,i):[]}E(oe,"getAutocompleteSuggestions");const $=` {
  $1
}`,he=E(i=>{const o=i.type;return(0,_.Gv)(o)||(0,_.HG)(o)&&(0,_.Gv)(o.ofType)||(0,_.zM)(o)&&((0,_.Gv)(o.ofType)||(0,_.HG)(o.ofType)&&(0,_.Gv)(o.ofType.ofType))?$:null},"getInsertText");function se(i,o,r){var t;if(o.parentType){const e=o.parentType;let u=[];return"getFields"in e&&(u=k(e.getFields())),(0,_.Gv)(e)&&u.push(P.hU),e===((t=r==null?void 0:r.schema)===null||t===void 0?void 0:t.getQueryType())&&u.push(P.Az,P.tF),I(i,u.map((l,p)=>{var c;const d={sortText:String(p)+l.name,label:l.name,detail:String(l.type),documentation:(c=l.description)!==null&&c!==void 0?c:void 0,deprecated:Boolean(l.deprecationReason),isDeprecated:Boolean(l.deprecationReason),deprecationReason:l.deprecationReason,kind:n.C.Field,type:l.type},g=he(l);return g&&(d.insertText=l.name+g,d.insertTextFormat=n.I.Snippet,d.command=re),d}))}return[]}E(se,"getSuggestionsForFieldNames");function le(i,o,r,t){const e=(0,_.xC)(o.inputType),u=X(r,t,i).filter(l=>l.detail===e.name);if(e instanceof _.mR){const l=e.getValues();return I(i,l.map(p=>{var c;return{label:p.name,detail:String(e),documentation:(c=p.description)!==null&&c!==void 0?c:void 0,deprecated:Boolean(p.deprecationReason),isDeprecated:Boolean(p.deprecationReason),deprecationReason:p.deprecationReason,kind:n.C.EnumMember,type:e}}).concat(u))}else if(e===R.EZ)return I(i,u.concat([{label:"true",detail:String(R.EZ),documentation:"Not false.",kind:n.C.Variable,type:R.EZ},{label:"false",detail:String(R.EZ),documentation:"Not true.",kind:n.C.Variable,type:R.EZ}]));return u}E(le,"getSuggestionsForInputValues");function ae(i,o,r,t,e){if(o.needsSeparator)return[];const u=r.getTypeMap(),l=k(u).filter(_.oT),p=l.map(({name:f})=>f),c=new Set;Q(t,(f,m)=>{var O,x,G,j,M;if(m.name&&(m.kind===n.R.INTERFACE_DEF&&!p.includes(m.name)&&c.add(m.name),m.kind===n.R.NAMED_TYPE&&((O=m.prevState)===null||O===void 0?void 0:O.kind)===n.R.IMPLEMENTS)){if(e.interfaceDef){if((x=e.interfaceDef)===null||x===void 0?void 0:x.getInterfaces().find(({name:ee})=>ee===m.name))return;const q=r.getType(m.name),J=(G=e.interfaceDef)===null||G===void 0?void 0:G.toConfig();e.interfaceDef=new _.oW(Object.assign(Object.assign({},J),{interfaces:[...J.interfaces,q||new _.oW({name:m.name,fields:{}})]}))}else if(e.objectTypeDef){if((j=e.objectTypeDef)===null||j===void 0?void 0:j.getInterfaces().find(({name:ee})=>ee===m.name))return;const q=r.getType(m.name),J=(M=e.objectTypeDef)===null||M===void 0?void 0:M.toConfig();e.objectTypeDef=new _.h6(Object.assign(Object.assign({},J),{interfaces:[...J.interfaces,q||new _.oW({name:m.name,fields:{}})]}))}}});const d=e.interfaceDef||e.objectTypeDef,D=((d==null?void 0:d.getInterfaces())||[]).map(({name:f})=>f),F=l.concat([...c].map(f=>({name:f}))).filter(({name:f})=>f!==(d==null?void 0:d.name)&&!D.includes(f));return I(i,F.map(f=>{const m={label:f.name,kind:n.C.Interface,type:f};return f!=null&&f.description&&(m.documentation=f.description),m}))}E(ae,"getSuggestionsForImplements");function ce(i,o,r,t){let e;if(o.parentType)if((0,_.m0)(o.parentType)){const u=(0,_.fU)(o.parentType),l=r.getPossibleTypes(u),p=Object.create(null);l.forEach(c=>{c.getInterfaces().forEach(d=>{p[d.name]=d})}),e=l.concat(k(p))}else e=[o.parentType];else{const u=r.getTypeMap();e=k(u).filter(_.Gv)}return I(i,e.map(u=>{const l=(0,_.xC)(u);return{label:String(u),documentation:(l==null?void 0:l.description)||"",kind:n.C.Field}}))}E(ce,"getSuggestionsForFragmentTypeConditions");function ue(i,o,r,t,e){if(!t)return[];const u=r.getTypeMap(),l=L(i.state),p=de(t);e&&e.length>0&&p.push(...e);const c=p.filter(d=>u[d.typeCondition.name.value]&&!(l&&l.kind===n.R.FRAGMENT_DEFINITION&&l.name===d.name.value)&&(0,_.Gv)(o.parentType)&&(0,_.Gv)(u[d.typeCondition.name.value])&&(0,v.zR)(r,o.parentType,u[d.typeCondition.name.value]));return I(i,c.map(d=>({label:d.name.value,detail:String(u[d.typeCondition.name.value]),documentation:`fragment ${d.name.value} on ${d.typeCondition.name.value}`,kind:n.C.Field,type:u[d.typeCondition.name.value]})))}E(ue,"getSuggestionsForFragmentSpread");const Te=E((i,o)=>{var r,t,e,u,l,p,c,d,g,D;if(((r=i.prevState)===null||r===void 0?void 0:r.kind)===o)return i.prevState;if(((e=(t=i.prevState)===null||t===void 0?void 0:t.prevState)===null||e===void 0?void 0:e.kind)===o)return i.prevState.prevState;if(((p=(l=(u=i.prevState)===null||u===void 0?void 0:u.prevState)===null||l===void 0?void 0:l.prevState)===null||p===void 0?void 0:p.kind)===o)return i.prevState.prevState.prevState;if(((D=(g=(d=(c=i.prevState)===null||c===void 0?void 0:c.prevState)===null||d===void 0?void 0:d.prevState)===null||g===void 0?void 0:g.prevState)===null||D===void 0?void 0:D.kind)===o)return i.prevState.prevState.prevState.prevState},"getParentDefinition");function X(i,o,r){let t=null,e;const u=Object.create({});return Q(i,(l,p)=>{if((p==null?void 0:p.kind)===n.R.VARIABLE&&p.name&&(t=p.name),(p==null?void 0:p.kind)===n.R.NAMED_TYPE&&t){const c=Te(p,n.R.TYPE);c!=null&&c.type&&(e=o.getType(c==null?void 0:c.type))}t&&e&&(u[t]||(u[t]={detail:e.toString(),insertText:r.string==="$"?t:"$"+t,label:t,type:e,kind:n.C.Variable},t=null,e=null))}),k(u)}E(X,"getVariableCompletions");function de(i){const o=[];return Q(i,(r,t)=>{t.kind===n.R.FRAGMENT_DEFINITION&&t.name&&t.type&&o.push({kind:n.R.FRAGMENT_DEFINITION,name:{kind:h.h.NAME,value:t.name},selectionSet:{kind:n.R.SELECTION_SET,selections:[]},typeCondition:{kind:n.R.NAMED_TYPE,name:{kind:h.h.NAME,value:t.type}}})}),o}E(de,"getFragmentDefinitions");function pe(i,o,r){const t=o.getTypeMap(),e=k(t).filter(_.j$);return I(i,e.map(u=>({label:u.name,documentation:u.description,kind:n.C.Variable})))}E(pe,"getSuggestionsForVariableDefinition");function fe(i,o,r,t){var e;if(!((e=o.prevState)===null||e===void 0)&&e.kind){const u=r.getDirectives().filter(l=>ve(o.prevState,l));return I(i,u.map(l=>({label:l.name,documentation:l.description||"",kind:n.C.Function})))}return[]}E(fe,"getSuggestionsForDirective");function Ee(i,o){let r=null,t=null,e=null;const u=Q(i,(l,p,c,d)=>{if(d===o.line&&l.getCurrentPosition()>=o.character)return r=c,t=Object.assign({},p),e=l.current(),"BREAK"});return{start:u.start,end:u.end,string:e||u.string,state:t||u.state,style:r||u.style}}E(Ee,"getTokenAtPosition");function Q(i,o){const r=i.split(`
`),t=(0,w.o)();let e=t.startState(),u="",l=new C.C("");for(let p=0;p<r.length;p++){for(l=new C.C(r[p]);!l.eol()&&(u=t.token(l,e),o(l,e,u,p)!=="BREAK"););o(l,e,u,p),e.kind||(e=t.startState())}return{start:l.getStartOfToken(),end:l.getCurrentPosition(),string:l.current(),state:e,style:u}}E(Q,"runOnlineParser");function ve(i,o){var r;if(!i||!i.kind)return!1;const t=i.kind,e=o.locations;switch(t){case n.R.QUERY:return e.indexOf(T.B.QUERY)!==-1;case n.R.MUTATION:return e.indexOf(T.B.MUTATION)!==-1;case n.R.SUBSCRIPTION:return e.indexOf(T.B.SUBSCRIPTION)!==-1;case n.R.FIELD:case n.R.ALIASED_FIELD:return e.indexOf(T.B.FIELD)!==-1;case n.R.FRAGMENT_DEFINITION:return e.indexOf(T.B.FRAGMENT_DEFINITION)!==-1;case n.R.FRAGMENT_SPREAD:return e.indexOf(T.B.FRAGMENT_SPREAD)!==-1;case n.R.INLINE_FRAGMENT:return e.indexOf(T.B.INLINE_FRAGMENT)!==-1;case n.R.SCHEMA_DEF:return e.indexOf(T.B.SCHEMA)!==-1;case n.R.SCALAR_DEF:return e.indexOf(T.B.SCALAR)!==-1;case n.R.OBJECT_TYPE_DEF:return e.indexOf(T.B.OBJECT)!==-1;case n.R.FIELD_DEF:return e.indexOf(T.B.FIELD_DEFINITION)!==-1;case n.R.INTERFACE_DEF:return e.indexOf(T.B.INTERFACE)!==-1;case n.R.UNION_DEF:return e.indexOf(T.B.UNION)!==-1;case n.R.ENUM_DEF:return e.indexOf(T.B.ENUM)!==-1;case n.R.ENUM_VALUE:return e.indexOf(T.B.ENUM_VALUE)!==-1;case n.R.INPUT_DEF:return e.indexOf(T.B.INPUT_OBJECT)!==-1;case n.R.INPUT_VALUE_DEF:switch((r=i.prevState)===null||r===void 0?void 0:r.kind){case n.R.ARGUMENTS_DEF:return e.indexOf(T.B.ARGUMENT_DEFINITION)!==-1;case n.R.INPUT_DEF:return e.indexOf(T.B.INPUT_FIELD_DEFINITION)!==-1}}return!1}E(ve,"canUseDirective");function _e(i,o){let r,t,e,u,l,p,c,d,g,D,F;return Y(o,f=>{var m;switch(f.kind){case n.R.QUERY:case"ShortQuery":D=i.getQueryType();break;case n.R.MUTATION:D=i.getMutationType();break;case n.R.SUBSCRIPTION:D=i.getSubscriptionType();break;case n.R.INLINE_FRAGMENT:case n.R.FRAGMENT_DEFINITION:f.type&&(D=i.getType(f.type));break;case n.R.FIELD:case n.R.ALIASED_FIELD:{!D||!f.name?l=null:(l=g?K(i,g,f.name):null,D=l?l.type:null);break}case n.R.SELECTION_SET:g=(0,_.xC)(D);break;case n.R.DIRECTIVE:e=f.name?i.getDirective(f.name):null;break;case n.R.INTERFACE_DEF:f.name&&(c=null,F=new _.oW({name:f.name,interfaces:[],fields:{}}));break;case n.R.OBJECT_TYPE_DEF:f.name&&(F=null,c=new _.h6({name:f.name,interfaces:[],fields:{}}));break;case n.R.ARGUMENTS:{if(!f.prevState)t=null;else switch(f.prevState.kind){case n.R.FIELD:t=l&&l.args;break;case n.R.DIRECTIVE:t=e&&e.args;break;case n.R.ALIASED_FIELD:{const M=(m=f.prevState)===null||m===void 0?void 0:m.name;if(!M){t=null;break}const H=g?K(i,g,M):null;if(!H){t=null;break}t=H.args;break}default:t=null;break}break}case n.R.ARGUMENT:if(t){for(let M=0;M<t.length;M++)if(t[M].name===f.name){r=t[M];break}}p=r==null?void 0:r.type;break;case n.R.ENUM_VALUE:const O=(0,_.xC)(p);u=O instanceof _.mR?O.getValues().find(M=>M.value===f.name):null;break;case n.R.LIST_VALUE:const x=(0,_.tf)(p);p=x instanceof _.p2?x.ofType:null;break;case n.R.OBJECT_VALUE:const G=(0,_.xC)(p);d=G instanceof _.sR?G.getFields():null;break;case n.R.OBJECT_FIELD:const j=f.name&&d?d[f.name]:null;p=j==null?void 0:j.type;break;case n.R.NAMED_TYPE:f.name&&(D=i.getType(f.name));break}}),{argDef:r,argDefs:t,directiveDef:e,enumValue:u,fieldDef:l,inputType:p,objectFieldDefs:d,parentType:g,type:D,interfaceDef:F,objectTypeDef:c}}E(_e,"getTypeInfo"),b.C.registerHelper("hint","graphql",(i,o)=>{const r=o.schema;if(!r)return;const t=i.getCursor(),e=i.getTokenAt(t),u=e.type!==null&&/"|\w/.test(e.string[0])?e.start:e.end,l=new C.P(t.line,u),c={list:oe(r,i.getValue(),l,e,o.externalFragments).map(d=>({text:d.label,type:d.type,description:d.documentation,isDeprecated:d.isDeprecated,deprecationReason:d.deprecationReason})),from:{line:t.line,ch:u},to:{line:t.line,ch:e.end}};return(c==null?void 0:c.list)&&c.list.length>0&&(c.from=b.C.Pos(c.from.line,c.from.ch),c.to=b.C.Pos(c.to.line,c.to.ch),b.C.signal(i,"hasCompletion",i,c,e)),c})},48250:function(ne,W,y){y.d(W,{o:function(){return U}});var b=y(7699),V=y(95115),_=Object.defineProperty,N=(s,a)=>_(s,"name",{value:a,configurable:!0});function U(s={eatWhitespace:a=>a.eatWhile(b.i),lexRules:b.L,parseRules:b.P,editorConfig:{}}){return{startState(){const a={level:0,step:0,name:null,kind:null,type:null,rule:null,needsSeparator:!1,prevState:null};return h(s.parseRules,a,V.h.DOCUMENT),a},token(a,A){return P(a,A,s)}}}N(U,"onlineParser");function P(s,a,A){var E;if(a.inBlockstring)return s.match(/.*"""/)?(a.inBlockstring=!1,"string"):(s.skipToEnd(),"string");const{lexRules:L,parseRules:K,eatWhitespace:Y,editorConfig:k}=A;if(a.rule&&a.rule.length===0?T(a):a.needsAdvance&&(a.needsAdvance=!1,n(a,!0)),s.sol()){const S=(k==null?void 0:k.tabSize)||2;a.indentLevel=Math.floor(s.indentation()/S)}if(Y(s))return"ws";const I=B(L,s);if(!I)return s.match(/\S+/)||s.match(/\s/),h(v,a,"Invalid"),"invalidchar";if(I.kind==="Comment")return h(v,a,"Comment"),"comment";const z=R({},a);if(I.kind==="Punctuation"){if(/^[{([]/.test(I.value))a.indentLevel!==void 0&&(a.levels=(a.levels||[]).concat(a.indentLevel+1));else if(/^[})\]]/.test(I.value)){const S=a.levels=(a.levels||[]).slice(0,-1);a.indentLevel&&S.length>0&&S[S.length-1]<a.indentLevel&&(a.indentLevel=S[S.length-1])}}for(;a.rule;){let S=typeof a.rule=="function"?a.step===0?a.rule(I,s):null:a.rule[a.step];if(a.needsSeparator&&(S=S==null?void 0:S.separator),S){if(S.ofRule&&(S=S.ofRule),typeof S=="string"){h(K,a,S);continue}if(!((E=S.match)===null||E===void 0)&&E.call(S,I))return S.update&&S.update(a,I),I.kind==="Punctuation"?n(a,!0):a.needsAdvance=!0,S.style}w(a)}return R(a,z),h(v,a,"Invalid"),"invalidchar"}N(P,"getToken");function R(s,a){const A=Object.keys(a);for(let E=0;E<A.length;E++)s[A[E]]=a[A[E]];return s}N(R,"assign");const v={Invalid:[],Comment:[]};function h(s,a,A){if(!s[A])throw new TypeError("Unknown rule: "+A);a.prevState=Object.assign({},a),a.kind=A,a.name=null,a.type=null,a.rule=s[A],a.step=0,a.needsSeparator=!1}N(h,"pushRule");function T(s){!s.prevState||(s.kind=s.prevState.kind,s.name=s.prevState.name,s.type=s.prevState.type,s.rule=s.prevState.rule,s.step=s.prevState.step,s.needsSeparator=s.prevState.needsSeparator,s.prevState=s.prevState.prevState)}N(T,"popRule");function n(s,a){var A;if(C(s)&&s.rule){const E=s.rule[s.step];if(E.separator){const L=E.separator;if(s.needsSeparator=!s.needsSeparator,!s.needsSeparator&&L.ofRule)return}if(a)return}for(s.needsSeparator=!1,s.step++;s.rule&&!(Array.isArray(s.rule)&&s.step<s.rule.length);)T(s),s.rule&&(C(s)?!((A=s.rule)===null||A===void 0)&&A[s.step].separator&&(s.needsSeparator=!s.needsSeparator):(s.needsSeparator=!1,s.step++))}N(n,"advanceRule");function C(s){const a=Array.isArray(s.rule)&&typeof s.rule[s.step]!="string"&&s.rule[s.step];return a&&a.isList}N(C,"isList");function w(s){for(;s.rule&&!(Array.isArray(s.rule)&&s.rule[s.step].ofRule);)T(s);s.rule&&n(s,!1)}N(w,"unsuccessful");function B(s,a){const A=Object.keys(s);for(let E=0;E<A.length;E++){const L=a.match(s[A[E]]);if(L&&L instanceof Array)return{kind:A[E],value:L[0]}}}N(B,"lex")}}]);})();

//# sourceMappingURL=9394.8925487f.chunk.js.map