(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7719],{51247:function(T){function o(e){return e?typeof e=="string"?e:e.source:null}function m(e){return t("(",e,")*")}function d(e){return t("(",e,")?")}function t(...e){return e.map(a=>o(a)).join("")}function A(...e){return"("+e.map(a=>o(a)).join("|")+")"}function R(e){const n={"builtin-name":["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"]},a={literal:["true","false","undefined","null"]},b=/""|"[^"]+"/,I=/''|'[^']+'/,c=/\[\]|\[[^\]]+\]/,r=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,O=/(\.|\/)/,_=A(b,I,c,r),g=t(d(/\.|\.\/|\//),_,m(t(O,_))),C=t("(",c,"|",r,")(?==)"),s={begin:g,lexemes:/[\w.\/]+/},N=e.inherit(s,{keywords:a}),E={begin:/\(/,end:/\)/},p={className:"attr",begin:C,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,N,E]}}},P={begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},i={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,P,p,N,E],returnEnd:!0},H=e.inherit(s,{className:"name",keywords:n,starts:e.inherit(i,{end:/\)/})});E.contains=[H];const u=e.inherit(s,{keywords:n,className:"name",starts:e.inherit(i,{end:/\}\}/})}),l=e.inherit(s,{keywords:n,className:"name"}),S=e.inherit(s,{className:"name",keywords:n,starts:e.inherit(i,{end:/\}\}/})});return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,skip:!0},e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[u],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[l]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[u]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[l]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[S]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[S]}]}}T.exports=R}}]);})();

//# sourceMappingURL=react-syntax-highlighter_languages_highlight_handlebars.2cca5e16.chunk.js.map