(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[92],{17648:function(o){function r(n){const i="[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?",g="[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",a={$pattern:i,keyword:"and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote require import with|0"},e={className:"subst",begin:/#\{/,end:/\}/,keywords:a},s={className:"number",begin:"(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[1-9][0-9_]*(\\.[0-9_]+([eE][-+]?[0-9]+)?)?)",relevance:0},t=`[/|([{<"']`,E={className:"string",begin:"~[a-z](?="+t+")",contains:[{endsParent:!0,contains:[{contains:[n.BACKSLASH_ESCAPE,e],variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/\//,end:/\//},{begin:/\|/,end:/\|/},{begin:/\(/,end:/\)/},{begin:/\[/,end:/\]/},{begin:/\{/,end:/\}/},{begin:/</,end:/>/}]}]}]},l={className:"string",begin:"~[A-Z](?="+t+")",contains:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/\//,end:/\//},{begin:/\|/,end:/\|/},{begin:/\(/,end:/\)/},{begin:/\[/,end:/\]/},{begin:/\{/,end:/\}/},{begin:/</,end:/>/}]},b={className:"string",contains:[n.BACKSLASH_ESCAPE,e],variants:[{begin:/"""/,end:/"""/},{begin:/'''/,end:/'''/},{begin:/~S"""/,end:/"""/,contains:[]},{begin:/~S"/,end:/"/,contains:[]},{begin:/~S'''/,end:/'''/,contains:[]},{begin:/~S'/,end:/'/,contains:[]},{begin:/'/,end:/'/},{begin:/"/,end:/"/}]},c={className:"function",beginKeywords:"def defp defmacro",end:/\B\b/,contains:[n.inherit(n.TITLE_MODE,{begin:i,endsParent:!0})]},S=n.inherit(c,{className:"class",beginKeywords:"defimpl defmodule defprotocol defrecord",end:/\bdo\b|$|;/}),d=[b,l,E,n.HASH_COMMENT_MODE,S,c,{begin:"::"},{className:"symbol",begin:":(?![\\s:])",contains:[b,{begin:g}],relevance:0},{className:"symbol",begin:i+":(?!:)",relevance:0},s,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))"},{begin:"->"},{begin:"("+n.RE_STARTERS_RE+")\\s*",contains:[n.HASH_COMMENT_MODE,{begin:/\/: (?=\d+\s*[,\]])/,relevance:0,contains:[s]},{className:"regexp",illegal:"\\n",contains:[n.BACKSLASH_ESCAPE,e],variants:[{begin:"/",end:"/[a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}],relevance:0}];return e.contains=d,{name:"Elixir",keywords:a,contains:d}}o.exports=r}}]);})();

//# sourceMappingURL=react-syntax-highlighter_languages_highlight_elixir.8b2c1f02.chunk.js.map