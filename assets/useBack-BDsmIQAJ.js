import{t as L,b as ue,r as yt,G as zt,L as Ht,v as Ft,I as Ut}from"./index-DIth0oIc.js";import{m as jt,B as gn,C as Vt,o as qt,p as Bt,n as Wt,q as Gt,s as Xt}from"./card-CeispfCi.js";import{p as Yt,q as Zt,j as Kt}from"./ItemCardList-DC-u4o5t.js";import{C as Jt}from"./chevron-left-CY6pwb5D.js";import{a as Qt}from"./use-dark-mode-mdHJdo6o.js";import{E as eo}from"./ErrorBoundary-Ch767kHG.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],to=jt("chevron-right",no);function Qo({type:e,id:o}){const i=Yt(e,o),l=Zt(e,o),m=i?e==="puzzle"?"Solved":"Completed":e==="puzzle"?"Mark as Solved":"Mark as Complete",s=i?`Mark ${e} as ${e==="puzzle"?"unsolved":"incomplete"}`:`Mark ${e} as ${e==="puzzle"?"solved":"complete"}`;return L.jsxs(gn,{variant:i?"contained":"outlined",color:"completed",onClick:l,"aria-label":s,className:"gap-2 w-full sm:w-40",children:[i&&L.jsx(Kt,{className:"h-4 w-4"}),m]})}function er({error:e,slug:o,backRoute:i,contentType:l="puzzle"}){const[p,f]=ue.useState(!0),m={import:{title:"Import Error",description:`Failed to import the ${l} file. Check the file path and module exports.`},parse:{title:"Parse Error",description:`The ${l} file has a syntax error.`},markdown:{title:"Markdown Processing Error",description:`The ${l} content has a markdown formatting error.`},unknown:{title:"Loading Error",description:`An unexpected error occurred while loading the ${l}.`}},{title:s,description:a}=m[e.type],r=l==="puzzle"?"Puzzle":"Expedition",d=l==="puzzle"?"Puzzle Library":"Expedition Library";return L.jsx("div",{className:"container mx-auto px-4 py-6 max-w-4xl",children:L.jsxs(Vt,{className:"border-destructive/50",children:[L.jsx(qt,{children:L.jsxs(Bt,{className:"flex items-center gap-3",children:[L.jsx(Wt,{className:"text-destructive size-8"}),s," (Dev Mode)"]})}),L.jsxs(Gt,{className:"space-y-6",children:[L.jsx("p",{className:"text-muted-foreground",children:a}),o&&L.jsxs("p",{className:"text-sm text-foreground",children:[r," slug: ",L.jsx("code",{className:"bg-muted px-2 py-1 rounded",children:o})]}),L.jsxs("div",{className:"rounded-md bg-destructive/10 p-4 border border-destructive/30",children:[L.jsx("p",{className:"text-sm font-semibold text-destructive mb-2",children:"Error Message:"}),L.jsx("pre",{className:"text-sm bg-muted p-3 rounded overflow-x-auto whitespace-pre-wrap",children:e.message})]}),e.stack&&L.jsxs("div",{className:"space-y-2",children:[L.jsxs(gn,{variant:"ghost",size:"sm",onClick:()=>f(!p),className:"text-xs flex items-center gap-1",children:[p?L.jsx(Jt,{className:"size-3"}):L.jsx(to,{className:"size-3"}),"Stack Trace"]}),p&&L.jsx("pre",{className:"text-xs p-3 bg-muted rounded overflow-x-auto whitespace-pre-wrap",children:e.stack})]}),L.jsxs("div",{className:"flex gap-3 flex-wrap",children:[L.jsxs(Xt,{to:i,variant:"contained",color:"primary",children:["Back to ",d]}),L.jsx(gn,{variant:"outlined",onClick:()=>window.location.reload(),children:"Reload Page"})]}),L.jsxs("div",{className:"border-t pt-4 text-sm text-muted-foreground",children:[L.jsx("p",{className:"font-semibold",children:"Development Mode:"}),L.jsx("p",{children:'This detailed error view only appears in development. In production, users will see a clean "Not Found" message.'})]})]})]})})}const oo="modulepreload",ro=function(e){return"/"+e},Bn={},nr=function(o,i,l){let p=Promise.resolve();if(i&&i.length>0){let a=function(r){return Promise.all(r.map(d=>Promise.resolve(d).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),s=m?.nonce||m?.getAttribute("nonce");p=a(i.map(r=>{if(r=ro(r),r in Bn)return;Bn[r]=!0;const d=r.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${g}`))return;const C=document.createElement("link");if(C.rel=d?"stylesheet":oo,d||(C.as="script"),C.crossOrigin="",C.href=r,s&&C.setAttribute("nonce",s),document.head.appendChild(C),d)return new Promise((P,E)=>{C.addEventListener("load",P),C.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${r}`)))})}))}function f(m){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=m,window.dispatchEvent(s),!s.defaultPrevented)throw m}return p.then(m=>{for(const s of m||[])s.status==="rejected"&&f(s.reason);return o().catch(f)})};var Te={},ye={},je={},se={},ie={},ln={},Wn;function kt(){return Wn||(Wn=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Doctype=e.CDATA=e.Tag=e.Style=e.Script=e.Comment=e.Directive=e.Text=e.Root=e.isTag=e.ElementType=void 0;var o;(function(l){l.Root="root",l.Text="text",l.Directive="directive",l.Comment="comment",l.Script="script",l.Style="style",l.Tag="tag",l.CDATA="cdata",l.Doctype="doctype"})(o=e.ElementType||(e.ElementType={}));function i(l){return l.type===o.Tag||l.type===o.Script||l.type===o.Style}e.isTag=i,e.Root=o.Root,e.Text=o.Text,e.Directive=o.Directive,e.Comment=o.Comment,e.Script=o.Script,e.Style=o.Style,e.Tag=o.Tag,e.CDATA=o.CDATA,e.Doctype=o.Doctype})(ln)),ln}var T={},Gn;function Xn(){if(Gn)return T;Gn=1;var e=T&&T.__extends||(function(){var t=function(c,u){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,_){y.__proto__=_}||function(y,_){for(var I in _)Object.prototype.hasOwnProperty.call(_,I)&&(y[I]=_[I])},t(c,u)};return function(c,u){if(typeof u!="function"&&u!==null)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");t(c,u);function y(){this.constructor=c}c.prototype=u===null?Object.create(u):(y.prototype=u.prototype,new y)}})(),o=T&&T.__assign||function(){return o=Object.assign||function(t){for(var c,u=1,y=arguments.length;u<y;u++){c=arguments[u];for(var _ in c)Object.prototype.hasOwnProperty.call(c,_)&&(t[_]=c[_])}return t},o.apply(this,arguments)};Object.defineProperty(T,"__esModule",{value:!0}),T.cloneNode=T.hasChildren=T.isDocument=T.isDirective=T.isComment=T.isText=T.isCDATA=T.isTag=T.Element=T.Document=T.CDATA=T.NodeWithChildren=T.ProcessingInstruction=T.Comment=T.Text=T.DataNode=T.Node=void 0;var i=kt(),l=(function(){function t(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(t.prototype,"parentNode",{get:function(){return this.parent},set:function(c){this.parent=c},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"previousSibling",{get:function(){return this.prev},set:function(c){this.prev=c},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"nextSibling",{get:function(){return this.next},set:function(c){this.next=c},enumerable:!1,configurable:!0}),t.prototype.cloneNode=function(c){return c===void 0&&(c=!1),R(this,c)},t})();T.Node=l;var p=(function(t){e(c,t);function c(u){var y=t.call(this)||this;return y.data=u,y}return Object.defineProperty(c.prototype,"nodeValue",{get:function(){return this.data},set:function(u){this.data=u},enumerable:!1,configurable:!0}),c})(l);T.DataNode=p;var f=(function(t){e(c,t);function c(){var u=t!==null&&t.apply(this,arguments)||this;return u.type=i.ElementType.Text,u}return Object.defineProperty(c.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),c})(p);T.Text=f;var m=(function(t){e(c,t);function c(){var u=t!==null&&t.apply(this,arguments)||this;return u.type=i.ElementType.Comment,u}return Object.defineProperty(c.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),c})(p);T.Comment=m;var s=(function(t){e(c,t);function c(u,y){var _=t.call(this,y)||this;return _.name=u,_.type=i.ElementType.Directive,_}return Object.defineProperty(c.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),c})(p);T.ProcessingInstruction=s;var a=(function(t){e(c,t);function c(u){var y=t.call(this)||this;return y.children=u,y}return Object.defineProperty(c.prototype,"firstChild",{get:function(){var u;return(u=this.children[0])!==null&&u!==void 0?u:null},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"childNodes",{get:function(){return this.children},set:function(u){this.children=u},enumerable:!1,configurable:!0}),c})(l);T.NodeWithChildren=a;var r=(function(t){e(c,t);function c(){var u=t!==null&&t.apply(this,arguments)||this;return u.type=i.ElementType.CDATA,u}return Object.defineProperty(c.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),c})(a);T.CDATA=r;var d=(function(t){e(c,t);function c(){var u=t!==null&&t.apply(this,arguments)||this;return u.type=i.ElementType.Root,u}return Object.defineProperty(c.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),c})(a);T.Document=d;var g=(function(t){e(c,t);function c(u,y,_,I){_===void 0&&(_=[]),I===void 0&&(I=u==="script"?i.ElementType.Script:u==="style"?i.ElementType.Style:i.ElementType.Tag);var w=t.call(this,_)||this;return w.name=u,w.attribs=y,w.type=I,w}return Object.defineProperty(c.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"tagName",{get:function(){return this.name},set:function(u){this.name=u},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"attributes",{get:function(){var u=this;return Object.keys(this.attribs).map(function(y){var _,I;return{name:y,value:u.attribs[y],namespace:(_=u["x-attribsNamespace"])===null||_===void 0?void 0:_[y],prefix:(I=u["x-attribsPrefix"])===null||I===void 0?void 0:I[y]}})},enumerable:!1,configurable:!0}),c})(a);T.Element=g;function C(t){return(0,i.isTag)(t)}T.isTag=C;function P(t){return t.type===i.ElementType.CDATA}T.isCDATA=P;function E(t){return t.type===i.ElementType.Text}T.isText=E;function S(t){return t.type===i.ElementType.Comment}T.isComment=S;function k(t){return t.type===i.ElementType.Directive}T.isDirective=k;function x(t){return t.type===i.ElementType.Root}T.isDocument=x;function $(t){return Object.prototype.hasOwnProperty.call(t,"children")}T.hasChildren=$;function R(t,c){c===void 0&&(c=!1);var u;if(E(t))u=new f(t.data);else if(S(t))u=new m(t.data);else if(C(t)){var y=c?O(t.children):[],_=new g(t.name,o({},t.attribs),y);y.forEach(function(ae){return ae.parent=_}),t.namespace!=null&&(_.namespace=t.namespace),t["x-attribsNamespace"]&&(_["x-attribsNamespace"]=o({},t["x-attribsNamespace"])),t["x-attribsPrefix"]&&(_["x-attribsPrefix"]=o({},t["x-attribsPrefix"])),u=_}else if(P(t)){var y=c?O(t.children):[],I=new r(y);y.forEach(function(N){return N.parent=I}),u=I}else if(x(t)){var y=c?O(t.children):[],w=new d(y);y.forEach(function(N){return N.parent=w}),t["x-mode"]&&(w["x-mode"]=t["x-mode"]),u=w}else if(k(t)){var q=new s(t.name,t.data);t["x-name"]!=null&&(q["x-name"]=t["x-name"],q["x-publicId"]=t["x-publicId"],q["x-systemId"]=t["x-systemId"]),u=q}else throw new Error("Not implemented yet: ".concat(t.type));return u.startIndex=t.startIndex,u.endIndex=t.endIndex,t.sourceCodeLocation!=null&&(u.sourceCodeLocation=t.sourceCodeLocation),u}T.cloneNode=R;function O(t){for(var c=t.map(function(y){return R(y,!0)}),u=1;u<c.length;u++)c[u].prev=c[u-1],c[u-1].next=c[u];return c}return T}var Yn;function wt(){return Yn||(Yn=1,(function(e){var o=ie&&ie.__createBinding||(Object.create?(function(s,a,r,d){d===void 0&&(d=r);var g=Object.getOwnPropertyDescriptor(a,r);(!g||("get"in g?!a.__esModule:g.writable||g.configurable))&&(g={enumerable:!0,get:function(){return a[r]}}),Object.defineProperty(s,d,g)}):(function(s,a,r,d){d===void 0&&(d=r),s[d]=a[r]})),i=ie&&ie.__exportStar||function(s,a){for(var r in s)r!=="default"&&!Object.prototype.hasOwnProperty.call(a,r)&&o(a,s,r)};Object.defineProperty(e,"__esModule",{value:!0}),e.DomHandler=void 0;var l=kt(),p=Xn();i(Xn(),e);var f={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},m=(function(){function s(a,r,d){this.dom=[],this.root=new p.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof r=="function"&&(d=r,r=f),typeof a=="object"&&(r=a,a=void 0),this.callback=a??null,this.options=r??f,this.elementCB=d??null}return s.prototype.onparserinit=function(a){this.parser=a},s.prototype.onreset=function(){this.dom=[],this.root=new p.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},s.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},s.prototype.onerror=function(a){this.handleCallback(a)},s.prototype.onclosetag=function(){this.lastNode=null;var a=this.tagStack.pop();this.options.withEndIndices&&(a.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(a)},s.prototype.onopentag=function(a,r){var d=this.options.xmlMode?l.ElementType.Tag:void 0,g=new p.Element(a,r,void 0,d);this.addNode(g),this.tagStack.push(g)},s.prototype.ontext=function(a){var r=this.lastNode;if(r&&r.type===l.ElementType.Text)r.data+=a,this.options.withEndIndices&&(r.endIndex=this.parser.endIndex);else{var d=new p.Text(a);this.addNode(d),this.lastNode=d}},s.prototype.oncomment=function(a){if(this.lastNode&&this.lastNode.type===l.ElementType.Comment){this.lastNode.data+=a;return}var r=new p.Comment(a);this.addNode(r),this.lastNode=r},s.prototype.oncommentend=function(){this.lastNode=null},s.prototype.oncdatastart=function(){var a=new p.Text(""),r=new p.CDATA([a]);this.addNode(r),a.parent=r,this.lastNode=a},s.prototype.oncdataend=function(){this.lastNode=null},s.prototype.onprocessinginstruction=function(a,r){var d=new p.ProcessingInstruction(a,r);this.addNode(d)},s.prototype.handleCallback=function(a){if(typeof this.callback=="function")this.callback(a,this.dom);else if(a)throw a},s.prototype.addNode=function(a){var r=this.tagStack[this.tagStack.length-1],d=r.children[r.children.length-1];this.options.withStartIndices&&(a.startIndex=this.parser.startIndex),this.options.withEndIndices&&(a.endIndex=this.parser.endIndex),r.children.push(a),d&&(a.prev=d,d.next=a),a.parent=r,this.lastNode=null},s})();e.DomHandler=m,e.default=m})(ie)),ie}var cn={},Zn;function ao(){return Zn||(Zn=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.CARRIAGE_RETURN_PLACEHOLDER_REGEX=e.CARRIAGE_RETURN_PLACEHOLDER=e.CARRIAGE_RETURN_REGEX=e.CARRIAGE_RETURN=e.CASE_SENSITIVE_TAG_NAMES_MAP=e.CASE_SENSITIVE_TAG_NAMES=void 0,e.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],e.CASE_SENSITIVE_TAG_NAMES_MAP=e.CASE_SENSITIVE_TAG_NAMES.reduce(function(o,i){return o[i.toLowerCase()]=i,o},{}),e.CARRIAGE_RETURN="\r",e.CARRIAGE_RETURN_REGEX=new RegExp(e.CARRIAGE_RETURN,"g"),e.CARRIAGE_RETURN_PLACEHOLDER="__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_".concat(Date.now().toString(),"__"),e.CARRIAGE_RETURN_PLACEHOLDER_REGEX=new RegExp(e.CARRIAGE_RETURN_PLACEHOLDER,"g")})(cn)),cn}var Kn;function Et(){if(Kn)return se;Kn=1,Object.defineProperty(se,"__esModule",{value:!0}),se.formatAttributes=l,se.escapeSpecialCharacters=f,se.revertEscapedCharacters=m,se.formatDOM=s;var e=wt(),o=ao();function i(a){return o.CASE_SENSITIVE_TAG_NAMES_MAP[a]}function l(a){for(var r={},d=0,g=a.length;d<g;d++){var C=a[d];r[C.name]=C.value}return r}function p(a){a=a.toLowerCase();var r=i(a);return r||a}function f(a){return a.replace(o.CARRIAGE_RETURN_REGEX,o.CARRIAGE_RETURN_PLACEHOLDER)}function m(a){return a.replace(o.CARRIAGE_RETURN_PLACEHOLDER_REGEX,o.CARRIAGE_RETURN)}function s(a,r,d){var g,C,P,E;r===void 0&&(r=null);for(var S=[],k,x=0,$=a.length;x<$;x++){var R=a[x];switch(R.nodeType){case 1:{var O=p(R.nodeName);k=new e.Element(O,l(R.attributes)),k.children=s(O==="template"?R.content.childNodes:R.childNodes,k);break}case 3:k=new e.Text(m((g=R.nodeValue)!==null&&g!==void 0?g:""));break;case 8:k=new e.Comment((C=R.nodeValue)!==null&&C!==void 0?C:"");break;default:continue}var t=(P=S[x-1])!==null&&P!==void 0?P:null;t&&(t.next=k),k.parent=r,k.prev=t,k.next=null,S.push(k)}return d&&(k=new e.ProcessingInstruction(d.substring(0,d.indexOf(" ")).toLowerCase(),d),k.next=(E=S[0])!==null&&E!==void 0?E:null,k.parent=r,S.unshift(k),S[1]&&(S[1].prev=S[0])),S}return se}var Jn;function lo(){if(Jn)return je;Jn=1,Object.defineProperty(je,"__esModule",{value:!0}),je.default=k;var e=Et(),o="html",i="head",l="body",p=/<([a-zA-Z]+[0-9]?)/,f=/<head[^]*>/i,m=/<body[^]*>/i,s=function(x,$){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},a=function(x,$){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},r=typeof window=="object"&&window.DOMParser;if(typeof r=="function"){var d=new r,g="text/html";a=function(x,$){return $&&(x="<".concat($,">").concat(x,"</").concat($,">")),d.parseFromString(x,g)},s=a}if(typeof document=="object"&&document.implementation){var C=document.implementation.createHTMLDocument();s=function(x,$){if($){var R=C.documentElement.querySelector($);return R&&(R.innerHTML=x),C}return C.documentElement.innerHTML=x,C}}var P=typeof document=="object"&&document.createElement("template"),E;P&&P.content&&(E=function(x){return P.innerHTML=x,P.content.childNodes});var S=function(){return document.createDocumentFragment().childNodes};function k(x){var $,R,O,t,c,u;x=(0,e.escapeSpecialCharacters)(x);var y=p.exec(x),_=($=y?.[1])===null||$===void 0?void 0:$.toLowerCase();switch(_){case o:{var I=a(x);if(!f.test(x)){var w=I.querySelector(i);(R=w?.parentNode)===null||R===void 0||R.removeChild(w)}if(!m.test(x)){var w=I.querySelector(l);(O=w?.parentNode)===null||O===void 0||O.removeChild(w)}return I.querySelectorAll(o)}case i:case l:{var q=s(x).querySelectorAll(_);return m.test(x)&&f.test(x)?(c=(t=q[0].parentNode)===null||t===void 0?void 0:t.childNodes)!==null&&c!==void 0?c:S():q}default:{if(E)return E(x);var w=s(x,l).querySelector(l);return(u=w?.childNodes)!==null&&u!==void 0?u:S()}}}return je}var Qn;function co(){if(Qn)return ye;Qn=1;var e=ye&&ye.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(ye,"__esModule",{value:!0}),ye.default=p;var o=e(lo()),i=Et(),l=/<(![a-zA-Z\s]+)>/;function p(f){if(typeof f!="string")throw new TypeError("First argument must be a string");if(!f)return[];var m=l.exec(f),s=m?m[1]:void 0;return(0,i.formatDOM)((0,o.default)(f),null,s)}return ye}var Ve={},K={},_e={},et;function so(){if(et)return _e;et=1;var e=0;_e.SAME=e;var o=1;return _e.CAMELCASE=o,_e.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1},_e}var nt;function io(){if(nt)return K;nt=1;const e=0,o=1,i=2,l=3,p=4,f=5,m=6;function s(t){return r.hasOwnProperty(t)?r[t]:null}function a(t,c,u,y,_,I,w){this.acceptsBooleans=c===i||c===l||c===p,this.attributeName=y,this.attributeNamespace=_,this.mustUseProperty=u,this.propertyName=t,this.type=c,this.sanitizeURL=I,this.removeEmptyString=w}const r={};["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"].forEach(t=>{r[t]=new a(t,e,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(([t,c])=>{r[t]=new a(t,o,!1,c,null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(t=>{r[t]=new a(t,i,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(t=>{r[t]=new a(t,i,!1,t,null,!1,!1)}),["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(t=>{r[t]=new a(t,l,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(t=>{r[t]=new a(t,l,!0,t,null,!1,!1)}),["capture","download"].forEach(t=>{r[t]=new a(t,p,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(t=>{r[t]=new a(t,m,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(t=>{r[t]=new a(t,f,!1,t.toLowerCase(),null,!1,!1)});const g=/[\-\:]([a-z])/g,C=t=>t[1].toUpperCase();["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(t=>{const c=t.replace(g,C);r[c]=new a(c,o,!1,t,null,!1,!1)}),["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(t=>{const c=t.replace(g,C);r[c]=new a(c,o,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(t=>{const c=t.replace(g,C);r[c]=new a(c,o,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(t=>{r[t]=new a(t,o,!1,t.toLowerCase(),null,!1,!1)});const P="xlinkHref";r[P]=new a("xlinkHref",o,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(t=>{r[t]=new a(t,o,!1,t.toLowerCase(),null,!0,!0)});const{CAMELCASE:E,SAME:S,possibleStandardNames:k}=so(),$=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD"+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",R=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+$+"]*$")),O=Object.keys(k).reduce((t,c)=>{const u=k[c];return u===S?t[c]=c:u===E?t[c.toLowerCase()]=c:t[c]=u,t},{});return K.BOOLEAN=l,K.BOOLEANISH_STRING=i,K.NUMERIC=f,K.OVERLOADED_BOOLEAN=p,K.POSITIVE_NUMERIC=m,K.RESERVED=e,K.STRING=o,K.getPropertyInfo=s,K.isCustomAttribute=R,K.possibleStandardNames=O,K}var Se={},ke={},sn,tt;function uo(){if(tt)return sn;tt=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,o=/\n/g,i=/^\s*/,l=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,p=/^:\s*/,f=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,m=/^[;\s]*/,s=/^\s+|\s+$/g,a=`
`,r="/",d="*",g="",C="comment",P="declaration";function E(k,x){if(typeof k!="string")throw new TypeError("First argument must be a string");if(!k)return[];x=x||{};var $=1,R=1;function O(N){var A=N.match(o);A&&($+=A.length);var Z=N.lastIndexOf(a);R=~Z?N.length-Z:R+N.length}function t(){var N={line:$,column:R};return function(A){return A.position=new c(N),_(),A}}function c(N){this.start=N,this.end={line:$,column:R},this.source=x.source}c.prototype.content=k;function u(N){var A=new Error(x.source+":"+$+":"+R+": "+N);if(A.reason=N,A.filename=x.source,A.line=$,A.column=R,A.source=k,!x.silent)throw A}function y(N){var A=N.exec(k);if(A){var Z=A[0];return O(Z),k=k.slice(Z.length),A}}function _(){y(i)}function I(N){var A;for(N=N||[];A=w();)A!==!1&&N.push(A);return N}function w(){var N=t();if(!(r!=k.charAt(0)||d!=k.charAt(1))){for(var A=2;g!=k.charAt(A)&&(d!=k.charAt(A)||r!=k.charAt(A+1));)++A;if(A+=2,g===k.charAt(A-1))return u("End of comment missing");var Z=k.slice(2,A-2);return R+=2,O(Z),k=k.slice(A),R+=2,N({type:C,comment:Z})}}function q(){var N=t(),A=y(l);if(A){if(w(),!y(p))return u("property missing ':'");var Z=y(f),Xe=N({type:P,property:S(A[0].replace(e,g)),value:Z?S(Z[0].replace(e,g)):g});return y(m),Xe}}function ae(){var N=[];I(N);for(var A;A=q();)A!==!1&&(N.push(A),I(N));return N}return _(),ae()}function S(k){return k?k.replace(s,g):g}return sn=E,sn}var ot;function po(){if(ot)return ke;ot=1;var e=ke&&ke.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(ke,"__esModule",{value:!0}),ke.default=i;const o=e(uo());function i(l,p){let f=null;if(!l||typeof l!="string")return f;const m=(0,o.default)(l),s=typeof p=="function";return m.forEach(a=>{if(a.type!=="declaration")return;const{property:r,value:d}=a;s?p(r,d,a):d&&(f=f||{},f[r]=d)}),f}return ke}var Ae={},rt;function ho(){if(rt)return Ae;rt=1,Object.defineProperty(Ae,"__esModule",{value:!0}),Ae.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,o=/-([a-z])/g,i=/^[^-]+$/,l=/^-(webkit|moz|ms|o|khtml)-/,p=/^-(ms)-/,f=function(r){return!r||i.test(r)||e.test(r)},m=function(r,d){return d.toUpperCase()},s=function(r,d){return"".concat(d,"-")},a=function(r,d){return d===void 0&&(d={}),f(r)?r:(r=r.toLowerCase(),d.reactCompat?r=r.replace(p,s):r=r.replace(l,s),r.replace(o,m))};return Ae.camelCase=a,Ae}var Me,at;function fo(){if(at)return Me;at=1;var e=Me&&Me.__importDefault||function(p){return p&&p.__esModule?p:{default:p}},o=e(po()),i=ho();function l(p,f){var m={};return!p||typeof p!="string"||(0,o.default)(p,function(s,a){s&&a&&(m[(0,i.camelCase)(s,f)]=a)}),m}return l.default=l,Me=l,Me}var lt;function Ct(){return lt||(lt=1,(function(e){var o=Se&&Se.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(e,"__esModule",{value:!0}),e.returnFirstArg=e.canTextBeChildOfNode=e.ELEMENTS_WITH_NO_TEXT_CHILDREN=e.PRESERVE_CUSTOM_ATTRIBUTES=void 0,e.isCustomComponent=f,e.setStyleProp=s;var i=yt(),l=o(fo()),p=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);function f(d,g){return d.includes("-")?!p.has(d):!!(g&&typeof g.is=="string")}var m={reactCompat:!0};function s(d,g){if(typeof d=="string"){if(!d.trim()){g.style={};return}try{g.style=(0,l.default)(d,m)}catch{g.style={}}}}e.PRESERVE_CUSTOM_ATTRIBUTES=Number(i.version.split(".")[0])>=16,e.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);var a=function(d){return!e.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(d.name)};e.canTextBeChildOfNode=a;var r=function(d){return d};e.returnFirstArg=r})(Se)),Se}var ct;function xt(){if(ct)return Ve;ct=1,Object.defineProperty(Ve,"__esModule",{value:!0}),Ve.default=f;var e=io(),o=Ct(),i=["checked","value"],l=["input","select","textarea"],p={reset:!0,submit:!0};function f(s,a){s===void 0&&(s={});var r={},d=!!(s.type&&p[s.type]);for(var g in s){var C=s[g];if((0,e.isCustomAttribute)(g)){r[g]=C;continue}var P=g.toLowerCase(),E=m(P);if(E){var S=(0,e.getPropertyInfo)(E);switch(i.includes(E)&&l.includes(a)&&!d&&(E=m("default"+P)),r[E]=C,S?.type){case e.BOOLEAN:r[E]=!0;break;case e.OVERLOADED_BOOLEAN:C===""&&(r[E]=!0);break}continue}o.PRESERVE_CUSTOM_ATTRIBUTES&&(r[g]=C)}return(0,o.setStyleProp)(s.style,r),r}function m(s){return e.possibleStandardNames[s]}return Ve}var we={},st;function mo(){if(st)return we;st=1;var e=we&&we.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(we,"__esModule",{value:!0}),we.default=f;var o=yt(),i=e(xt()),l=Ct(),p={cloneElement:o.cloneElement,createElement:o.createElement,isValidElement:o.isValidElement};function f(s,a){var r,d,g,C,P;a===void 0&&(a={});for(var E=[],S=typeof a.replace=="function",k=(r=a.transform)!==null&&r!==void 0?r:l.returnFirstArg,x=(d=a.library)!==null&&d!==void 0?d:p,$=x.cloneElement,R=x.createElement,O=x.isValidElement,t=s.length,c=0;c<t;c++){var u=s[c];if(S){var y=(g=a.replace)===null||g===void 0?void 0:g.call(a,u,c);if(O(y)){t>1&&(y=$(y,{key:(C=y.key)!==null&&C!==void 0?C:c})),E.push(k(y,u,c));continue}}if(u.type==="text"){var _=!u.data.trim().length;if(_&&u.parent&&!(0,l.canTextBeChildOfNode)(u.parent)||a.trim&&_)continue;E.push(k(u.data,u,c));continue}var I=u,w={};m(I)?((0,l.setStyleProp)(I.attribs.style,I.attribs),w=I.attribs):I.attribs&&(w=(0,i.default)(I.attribs,I.name));var q=void 0;switch(u.type){case"script":case"style":u.children[0]&&(w.dangerouslySetInnerHTML={__html:u.children[0].data});break;case"tag":u.name==="textarea"&&u.children[0]?w.defaultValue=u.children[0].data:!((P=u.children)===null||P===void 0)&&P.length&&(q=f(u.children,a));break;default:continue}t>1&&(w.key=c),E.push(k(R(u.name,w,q),u,c))}return E.length===1?E[0]:E}function m(s){return l.PRESERVE_CUSTOM_ATTRIBUTES&&s.type==="tag"&&(0,l.isCustomComponent)(s.name,s.attribs)}return we}var it;function go(){return it||(it=1,(function(e){var o=Te&&Te.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(e,"__esModule",{value:!0}),e.htmlToDOM=e.domToReact=e.attributesToProps=e.Text=e.ProcessingInstruction=e.Element=e.Comment=void 0,e.default=s;var i=o(co());e.htmlToDOM=i.default;var l=o(xt());e.attributesToProps=l.default;var p=o(mo());e.domToReact=p.default;var f=wt();Object.defineProperty(e,"Comment",{enumerable:!0,get:function(){return f.Comment}}),Object.defineProperty(e,"Element",{enumerable:!0,get:function(){return f.Element}}),Object.defineProperty(e,"ProcessingInstruction",{enumerable:!0,get:function(){return f.ProcessingInstruction}}),Object.defineProperty(e,"Text",{enumerable:!0,get:function(){return f.Text}});var m={lowerCaseAttributeNames:!1};function s(a,r){var d;if(typeof a!="string")throw new TypeError("First argument must be a string");return a?(0,p.default)((0,i.default)(a,(d=r?.htmlparser2)!==null&&d!==void 0?d:m),r):[]}})(Te)),Te}var We=go();const ut=zt(We),bo=ut.default||ut,vo=`(() => {
  function createCSSGenerator() {
    const generatedClasses = /* @__PURE__ */ new Set();
    const styleSheet = new CSSStyleSheet();
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, styleSheet];
    const spacingScale = {
      "0": "0",
      "px": "1px",
      "0.5": "0.125rem",
      "1": "0.25rem",
      "1.5": "0.375rem",
      "2": "0.5rem",
      "2.5": "0.625rem",
      "3": "0.75rem",
      "3.5": "0.875rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "11": "2.75rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "28": "7rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "52": "13rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "72": "18rem",
      "80": "20rem",
      "96": "24rem"
    };
    const sizeValues = {
      "auto": "auto",
      "full": "100%",
      "screen": "100vw",
      // for width
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content"
    };
    const parseArbitraryValue = (value) => {
      const match = value.match(/^\\[(.+)\\]$/);
      return match ? match[1] : null;
    };
    const parseOpacity = (className) => {
      const match = className.match(/^(.+?)\\/(\\d+)$/);
      if (match) {
        return { base: match[1], opacity: (parseInt(match[2]) / 100).toString() };
      }
      return { base: className, opacity: null };
    };
    const findMatchingBracket = (str, startIndex) => {
      if (str[startIndex] !== "[") {
        return -1;
      }
      let depth = 0;
      for (let i = startIndex; i < str.length; i++) {
        const char = str[i];
        if (char === "[") {
          depth++;
        } else if (char === "]") {
          depth--;
          if (depth === 0) {
            return i;
          }
        }
      }
      return -1;
    };
    const parseArbitrarySelector = (className) => {
      if (!className.startsWith("[")) {
        return null;
      }
      const closingBracketIndex = findMatchingBracket(className, 0);
      if (closingBracketIndex === -1 || className[closingBracketIndex + 1] !== ":") {
        return null;
      }
      const bracketContent = className.substring(1, closingBracketIndex);
      if (!bracketContent.startsWith("&")) {
        return null;
      }
      const selector = bracketContent.substring(1);
      const baseClass = className.substring(closingBracketIndex + 2);
      return { selector, baseClass };
    };
    const generateRule = (className) => {
      const arbitrarySelector = parseArbitrarySelector(className);
      if (arbitrarySelector) {
        const { selector, baseClass } = arbitrarySelector;
        const baseRule = generateRule(baseClass);
        if (!baseRule) return null;
        const escapedClass = className.replace(/:/g, "\\\\:").replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/&/g, "\\\\&").replace(/>/g, "\\\\>").replace(/\\*/g, "\\\\*").replace(/\\(/g, "\\\\(").replace(/\\)/g, "\\\\)").replace(/\\+/g, "\\\\+").replace(/~/g, "\\\\~").replace(/=/g, "\\\\=").replace(/\\./g, "\\\\.");
        const selectorEnd = baseRule.indexOf("{");
        const declarations = baseRule.substring(selectorEnd);
        return \`.\${escapedClass}\${selector} \${declarations}\`;
      }
      const variantMatch = className.match(/^(hover|focus|active|disabled|dark):(.+)$/);
      if (variantMatch) {
        const [, variant, baseClass] = variantMatch;
        const baseRule = generateRule(baseClass);
        if (!baseRule) return null;
        const escapedClass = className.replace(/:/g, "\\\\:").replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]");
        const selectorEnd = baseRule.indexOf("{");
        const baseSelector = baseRule.substring(0, selectorEnd).trim();
        const declarations = baseRule.substring(selectorEnd);
        if (variant === "hover") {
          return \`.\${escapedClass}:hover \${declarations}\`;
        } else if (variant === "focus") {
          return \`.\${escapedClass}:focus \${declarations}\`;
        } else if (variant === "active") {
          return \`.\${escapedClass}:active \${declarations}\`;
        } else if (variant === "disabled") {
          return \`.\${escapedClass}:disabled \${declarations}\`;
        } else if (variant === "dark") {
          const pseudoMatch = baseSelector.match(/(:(?:hover|focus|active|disabled|focus-visible)(?:\\([^)]*\\))?)$/);
          const pseudoSelector = pseudoMatch ? pseudoMatch[1] : "";
          return \`.dark .\${escapedClass}\${pseudoSelector} \${declarations}\`;
        }
      }
      const { base, opacity } = parseOpacity(className);
      const spacingMatch = base.match(/^(px|py|pt|pb|pl|pr|mx|my|mt|mb|ml|mr|gap-x|gap-y|space-x|space-y|min-w|min-h|max-w|max-h|inset-x|inset-y|p|m|gap|w|h|top|right|bottom|left|inset)-(.+)$/);
      if (spacingMatch) {
        const [, property, value] = spacingMatch;
        const spacing = spacingScale[value] || sizeValues[value] || parseArbitraryValue(value);
        if (!spacing) return null;
        const escapedClass = className.replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/\\./g, "\\\\.");
        if (property === "space-x") {
          return \`.\${escapedClass} > :not(:last-child) { --tw-space-x-reverse: 0; margin-inline-start: calc(\${spacing} * var(--tw-space-x-reverse)); margin-inline-end: calc(\${spacing} * calc(1 - var(--tw-space-x-reverse))); }\`;
        }
        if (property === "space-y") {
          return \`.\${escapedClass} > :not(:last-child) { --tw-space-y-reverse: 0; margin-block-start: calc(\${spacing} * var(--tw-space-y-reverse)); margin-block-end: calc(\${spacing} * calc(1 - var(--tw-space-y-reverse))); }\`;
        }
        const propertyMap = {
          "p": ["padding"],
          "px": ["padding-left", "padding-right"],
          "py": ["padding-top", "padding-bottom"],
          "pt": ["padding-top"],
          "pb": ["padding-bottom"],
          "pl": ["padding-left"],
          "pr": ["padding-right"],
          "m": ["margin"],
          "mx": ["margin-left", "margin-right"],
          "my": ["margin-top", "margin-bottom"],
          "mt": ["margin-top"],
          "mb": ["margin-bottom"],
          "ml": ["margin-left"],
          "mr": ["margin-right"],
          "gap": ["gap"],
          "gap-x": ["column-gap"],
          "gap-y": ["row-gap"],
          "w": ["width"],
          "h": ["height"],
          "min-w": ["min-width"],
          "min-h": ["min-height"],
          "max-w": ["max-width"],
          "max-h": ["max-height"],
          "top": ["top"],
          "right": ["right"],
          "bottom": ["bottom"],
          "left": ["left"],
          "inset": ["top", "right", "bottom", "left"],
          "inset-x": ["left", "right"],
          "inset-y": ["top", "bottom"]
        };
        const properties = propertyMap[property];
        if (!properties) return null;
        const declarations = properties.map((prop) => \`\${prop}: \${spacing}\`).join("; ");
        return \`.\${escapedClass} { \${declarations}; }\`;
      }
      const textSizeMatch = base.match(/^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/);
      if (textSizeMatch) {
        const [, size] = textSizeMatch;
        const escapedClass = className.replace(/\\//g, "\\\\/");
        const sizeMap = {
          "xs": { fontSize: "0.75rem", lineHeight: "1rem" },
          "sm": { fontSize: "0.875rem", lineHeight: "1.25rem" },
          "base": { fontSize: "1rem", lineHeight: "1.5rem" },
          "lg": { fontSize: "1.125rem", lineHeight: "1.75rem" },
          "xl": { fontSize: "1.25rem", lineHeight: "1.75rem" },
          "2xl": { fontSize: "1.5rem", lineHeight: "2rem" },
          "3xl": { fontSize: "1.875rem", lineHeight: "2.25rem" },
          "4xl": { fontSize: "2.25rem", lineHeight: "2.5rem" },
          "5xl": { fontSize: "3rem", lineHeight: "1" },
          "6xl": { fontSize: "3.75rem", lineHeight: "1" },
          "7xl": { fontSize: "4.5rem", lineHeight: "1" },
          "8xl": { fontSize: "6rem", lineHeight: "1" },
          "9xl": { fontSize: "8rem", lineHeight: "1" }
        };
        const { fontSize, lineHeight } = sizeMap[size];
        return \`.\${escapedClass} { font-size: \${fontSize}; line-height: \${lineHeight}; }\`;
      }
      const fontWeightMatch = base.match(/^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/);
      if (fontWeightMatch) {
        const [, weight] = fontWeightMatch;
        const escapedClass = className.replace(/\\//g, "\\\\/");
        const weightMap = {
          "thin": "100",
          "extralight": "200",
          "light": "300",
          "normal": "400",
          "medium": "500",
          "semibold": "600",
          "bold": "700",
          "extrabold": "800",
          "black": "900"
        };
        return \`.\${escapedClass} { font-weight: \${weightMap[weight]}; }\`;
      }
      const fontFamilyMatch = base.match(/^font-(sans|serif|mono)$/);
      if (fontFamilyMatch) {
        const [, family] = fontFamilyMatch;
        const escapedClass = className.replace(/\\//g, "\\\\/");
        const familyMap = {
          "sans": "'Poppins', ui-sans-serif, system-ui, -apple-system, sans-serif",
          "serif": "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
          "mono": "'Space Mono', ui-monospace, 'Cascadia Code', monospace"
        };
        return \`.\${escapedClass} { font-family: \${familyMap[family]}; }\`;
      }
      const lineHeightMatch = base.match(/^leading-(.+)$/);
      if (lineHeightMatch) {
        const [, value] = lineHeightMatch;
        const heightMap = {
          "none": "1",
          "tight": "1.25",
          "snug": "1.375",
          "normal": "1.5",
          "relaxed": "1.625",
          "loose": "2"
        };
        const lineHeight = heightMap[value] || parseArbitraryValue(value);
        if (!lineHeight) return null;
        const escapedClass = className.replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/\\./g, "\\\\.");
        return \`.\${escapedClass} { line-height: \${lineHeight}; }\`;
      }
      const flexMatch = base.match(/^flex-(.+)$/);
      if (flexMatch) {
        const [, value] = flexMatch;
        const escapedClass = className.replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/\\(/g, "\\\\(").replace(/\\)/g, "\\\\)").replace(/\\./g, "\\\\.");
        const arbitraryValue = parseArbitraryValue(value);
        if (arbitraryValue) {
          const flexValue = arbitraryValue.replace(/_/g, " ");
          return \`.\${escapedClass} { flex: \${flexValue}; }\`;
        }
        const customPropMatch = value.match(/^\\((.+)\\)$/);
        if (customPropMatch) {
          const customProp = customPropMatch[1];
          return \`.\${escapedClass} { flex: var(\${customProp}); }\`;
        }
        const fractionMatch = value.match(/^(\\d+)\\/(\\d+)$/);
        if (fractionMatch) {
          const [, numerator, denominator] = fractionMatch;
          return \`.\${escapedClass} { flex: calc(\${numerator} / \${denominator} * 100%); }\`;
        }
        const numericMatch = value.match(/^(\\d+)$/);
        if (numericMatch) {
          const number = numericMatch[1];
          return \`.\${escapedClass} { flex: \${number}; }\`;
        }
      }
      const gridColsMatch = base.match(/^grid-cols-(.+)$/);
      if (gridColsMatch) {
        const [, value] = gridColsMatch;
        const escapedClass = className.replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/\\(/g, "\\\\(").replace(/\\)/g, "\\\\)").replace(/\\./g, "\\\\.");
        if (value === "none") {
          return \`.\${escapedClass} { grid-template-columns: none; }\`;
        }
        if (value === "subgrid") {
          return \`.\${escapedClass} { grid-template-columns: subgrid; }\`;
        }
        const arbitraryValue = parseArbitraryValue(value);
        if (arbitraryValue) {
          const colsValue = arbitraryValue.replace(/_/g, " ");
          return \`.\${escapedClass} { grid-template-columns: \${colsValue}; }\`;
        }
        const customPropMatch = value.match(/^\\((.+)\\)$/);
        if (customPropMatch) {
          const customProp = customPropMatch[1];
          return \`.\${escapedClass} { grid-template-columns: var(\${customProp}); }\`;
        }
        const numericMatch = value.match(/^(\\d+)$/);
        if (numericMatch) {
          const number = numericMatch[1];
          return \`.\${escapedClass} { grid-template-columns: repeat(\${number}, minmax(0, 1fr)); }\`;
        }
      }
      const gridRowsMatch = base.match(/^grid-rows-(.+)$/);
      if (gridRowsMatch) {
        const [, value] = gridRowsMatch;
        const escapedClass = className.replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/\\(/g, "\\\\(").replace(/\\)/g, "\\\\)").replace(/\\./g, "\\\\.");
        if (value === "none") {
          return \`.\${escapedClass} { grid-template-rows: none; }\`;
        }
        if (value === "subgrid") {
          return \`.\${escapedClass} { grid-template-rows: subgrid; }\`;
        }
        const arbitraryValue = parseArbitraryValue(value);
        if (arbitraryValue) {
          const rowsValue = arbitraryValue.replace(/_/g, " ");
          return \`.\${escapedClass} { grid-template-rows: \${rowsValue}; }\`;
        }
        const customPropMatch = value.match(/^\\((.+)\\)$/);
        if (customPropMatch) {
          const customProp = customPropMatch[1];
          return \`.\${escapedClass} { grid-template-rows: var(\${customProp}); }\`;
        }
        const numericMatch = value.match(/^(\\d+)$/);
        if (numericMatch) {
          const number = numericMatch[1];
          return \`.\${escapedClass} { grid-template-rows: repeat(\${number}, minmax(0, 1fr)); }\`;
        }
      }
      const colStartMatch = base.match(/^col-start-(.+)$/);
      if (colStartMatch) {
        const [, value] = colStartMatch;
        const escapedClass = className.replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/\\(/g, "\\\\(").replace(/\\)/g, "\\\\)").replace(/\\./g, "\\\\.");
        if (value === "auto") {
          return \`.\${escapedClass} { grid-column-start: auto; }\`;
        }
        const arbitraryValue = parseArbitraryValue(value);
        if (arbitraryValue) {
          return \`.\${escapedClass} { grid-column-start: \${arbitraryValue}; }\`;
        }
        const customPropMatch = value.match(/^\\((.+)\\)$/);
        if (customPropMatch) {
          const customProp = customPropMatch[1];
          return \`.\${escapedClass} { grid-column-start: var(\${customProp}); }\`;
        }
        const numericMatch = value.match(/^(\\d+)$/);
        if (numericMatch) {
          const number = numericMatch[1];
          return \`.\${escapedClass} { grid-column-start: \${number}; }\`;
        }
      }
      const colEndMatch = base.match(/^col-end-(.+)$/);
      if (colEndMatch) {
        const [, value] = colEndMatch;
        const escapedClass = className.replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/\\(/g, "\\\\(").replace(/\\)/g, "\\\\)").replace(/\\./g, "\\\\.");
        if (value === "auto") {
          return \`.\${escapedClass} { grid-column-end: auto; }\`;
        }
        const arbitraryValue = parseArbitraryValue(value);
        if (arbitraryValue) {
          return \`.\${escapedClass} { grid-column-end: \${arbitraryValue}; }\`;
        }
        const customPropMatch = value.match(/^\\((.+)\\)$/);
        if (customPropMatch) {
          const customProp = customPropMatch[1];
          return \`.\${escapedClass} { grid-column-end: var(\${customProp}); }\`;
        }
        const numericMatch = value.match(/^(\\d+)$/);
        if (numericMatch) {
          const number = numericMatch[1];
          return \`.\${escapedClass} { grid-column-end: \${number}; }\`;
        }
      }
      const colSpanMatch = base.match(/^col-span-(.+)$/);
      if (colSpanMatch) {
        const [, value] = colSpanMatch;
        const escapedClass = className.replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/\\(/g, "\\\\(").replace(/\\)/g, "\\\\)").replace(/\\./g, "\\\\.");
        if (value === "full") {
          return \`.\${escapedClass} { grid-column: 1 / -1; }\`;
        }
        const arbitraryValue = parseArbitraryValue(value);
        if (arbitraryValue) {
          return \`.\${escapedClass} { grid-column: \${arbitraryValue}; }\`;
        }
        const customPropMatch = value.match(/^\\((.+)\\)$/);
        if (customPropMatch) {
          const customProp = customPropMatch[1];
          return \`.\${escapedClass} { grid-column: var(\${customProp}); }\`;
        }
        const numericMatch = value.match(/^(\\d+)$/);
        if (numericMatch) {
          const number = numericMatch[1];
          return \`.\${escapedClass} { grid-column: span \${number} / span \${number}; }\`;
        }
      }
      const colMatch = base.match(/^col-(.+)$/);
      if (colMatch) {
        const [, value] = colMatch;
        if (value.startsWith("start-") || value.startsWith("end-") || value.startsWith("span-")) {
        } else {
          const escapedClass = className.replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/\\(/g, "\\\\(").replace(/\\)/g, "\\\\)").replace(/\\./g, "\\\\.");
          if (value === "auto") {
            return \`.\${escapedClass} { grid-column: auto; }\`;
          }
          const arbitraryValue = parseArbitraryValue(value);
          if (arbitraryValue) {
            return \`.\${escapedClass} { grid-column: \${arbitraryValue}; }\`;
          }
          const customPropMatch = value.match(/^\\((.+)\\)$/);
          if (customPropMatch) {
            const customProp = customPropMatch[1];
            return \`.\${escapedClass} { grid-column: var(\${customProp}); }\`;
          }
        }
      }
      const rowStartMatch = base.match(/^row-start-(.+)$/);
      if (rowStartMatch) {
        const [, value] = rowStartMatch;
        const escapedClass = className.replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/\\(/g, "\\\\(").replace(/\\)/g, "\\\\)").replace(/\\./g, "\\\\.");
        if (value === "auto") {
          return \`.\${escapedClass} { grid-row-start: auto; }\`;
        }
        const arbitraryValue = parseArbitraryValue(value);
        if (arbitraryValue) {
          return \`.\${escapedClass} { grid-row-start: \${arbitraryValue}; }\`;
        }
        const customPropMatch = value.match(/^\\((.+)\\)$/);
        if (customPropMatch) {
          const customProp = customPropMatch[1];
          return \`.\${escapedClass} { grid-row-start: var(\${customProp}); }\`;
        }
        const numericMatch = value.match(/^(\\d+)$/);
        if (numericMatch) {
          const number = numericMatch[1];
          return \`.\${escapedClass} { grid-row-start: \${number}; }\`;
        }
      }
      const rowEndMatch = base.match(/^row-end-(.+)$/);
      if (rowEndMatch) {
        const [, value] = rowEndMatch;
        const escapedClass = className.replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/\\(/g, "\\\\(").replace(/\\)/g, "\\\\)").replace(/\\./g, "\\\\.");
        if (value === "auto") {
          return \`.\${escapedClass} { grid-row-end: auto; }\`;
        }
        const arbitraryValue = parseArbitraryValue(value);
        if (arbitraryValue) {
          return \`.\${escapedClass} { grid-row-end: \${arbitraryValue}; }\`;
        }
        const customPropMatch = value.match(/^\\((.+)\\)$/);
        if (customPropMatch) {
          const customProp = customPropMatch[1];
          return \`.\${escapedClass} { grid-row-end: var(\${customProp}); }\`;
        }
        const numericMatch = value.match(/^(\\d+)$/);
        if (numericMatch) {
          const number = numericMatch[1];
          return \`.\${escapedClass} { grid-row-end: \${number}; }\`;
        }
      }
      const rowSpanMatch = base.match(/^row-span-(.+)$/);
      if (rowSpanMatch) {
        const [, value] = rowSpanMatch;
        const escapedClass = className.replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/\\(/g, "\\\\(").replace(/\\)/g, "\\\\)").replace(/\\./g, "\\\\.");
        if (value === "full") {
          return \`.\${escapedClass} { grid-row: 1 / -1; }\`;
        }
        const arbitraryValue = parseArbitraryValue(value);
        if (arbitraryValue) {
          return \`.\${escapedClass} { grid-row: \${arbitraryValue}; }\`;
        }
        const customPropMatch = value.match(/^\\((.+)\\)$/);
        if (customPropMatch) {
          const customProp = customPropMatch[1];
          return \`.\${escapedClass} { grid-row: var(\${customProp}); }\`;
        }
        const numericMatch = value.match(/^(\\d+)$/);
        if (numericMatch) {
          const number = numericMatch[1];
          return \`.\${escapedClass} { grid-row: span \${number} / span \${number}; }\`;
        }
      }
      const rowMatch = base.match(/^row-(.+)$/);
      if (rowMatch) {
        const [, value] = rowMatch;
        if (value.startsWith("start-") || value.startsWith("end-") || value.startsWith("span-")) {
        } else {
          const escapedClass = className.replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/\\(/g, "\\\\(").replace(/\\)/g, "\\\\)").replace(/\\./g, "\\\\.");
          if (value === "auto") {
            return \`.\${escapedClass} { grid-row: auto; }\`;
          }
          const arbitraryValue = parseArbitraryValue(value);
          if (arbitraryValue) {
            return \`.\${escapedClass} { grid-row: \${arbitraryValue}; }\`;
          }
          const customPropMatch = value.match(/^\\((.+)\\)$/);
          if (customPropMatch) {
            const customProp = customPropMatch[1];
            return \`.\${escapedClass} { grid-row: var(\${customProp}); }\`;
          }
        }
      }
      const autoColsMatch = base.match(/^auto-cols-(.+)$/);
      if (autoColsMatch) {
        const [, value] = autoColsMatch;
        const escapedClass = className.replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/\\(/g, "\\\\(").replace(/\\)/g, "\\\\)").replace(/\\./g, "\\\\.");
        if (value === "auto") {
          return \`.\${escapedClass} { grid-auto-columns: auto; }\`;
        }
        if (value === "min") {
          return \`.\${escapedClass} { grid-auto-columns: min-content; }\`;
        }
        if (value === "max") {
          return \`.\${escapedClass} { grid-auto-columns: max-content; }\`;
        }
        if (value === "fr") {
          return \`.\${escapedClass} { grid-auto-columns: minmax(0, 1fr); }\`;
        }
        const arbitraryValue = parseArbitraryValue(value);
        if (arbitraryValue) {
          return \`.\${escapedClass} { grid-auto-columns: \${arbitraryValue}; }\`;
        }
        const customPropMatch = value.match(/^\\((.+)\\)$/);
        if (customPropMatch) {
          const customProp = customPropMatch[1];
          return \`.\${escapedClass} { grid-auto-columns: var(\${customProp}); }\`;
        }
      }
      const autoRowsMatch = base.match(/^auto-rows-(.+)$/);
      if (autoRowsMatch) {
        const [, value] = autoRowsMatch;
        const escapedClass = className.replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/\\(/g, "\\\\(").replace(/\\)/g, "\\\\)").replace(/\\./g, "\\\\.");
        if (value === "auto") {
          return \`.\${escapedClass} { grid-auto-rows: auto; }\`;
        }
        if (value === "min") {
          return \`.\${escapedClass} { grid-auto-rows: min-content; }\`;
        }
        if (value === "max") {
          return \`.\${escapedClass} { grid-auto-rows: max-content; }\`;
        }
        if (value === "fr") {
          return \`.\${escapedClass} { grid-auto-rows: minmax(0, 1fr); }\`;
        }
        const arbitraryValue = parseArbitraryValue(value);
        if (arbitraryValue) {
          return \`.\${escapedClass} { grid-auto-rows: \${arbitraryValue}; }\`;
        }
        const customPropMatch = value.match(/^\\((.+)\\)$/);
        if (customPropMatch) {
          const customProp = customPropMatch[1];
          return \`.\${escapedClass} { grid-auto-rows: var(\${customProp}); }\`;
        }
      }
      const gridFlowMatch = base.match(/^grid-flow-(.+)$/);
      if (gridFlowMatch) {
        const [, value] = gridFlowMatch;
        const escapedClass = className.replace(/\\//g, "\\\\/");
        if (value === "row") {
          return \`.\${escapedClass} { grid-auto-flow: row; }\`;
        }
        if (value === "col") {
          return \`.\${escapedClass} { grid-auto-flow: column; }\`;
        }
        if (value === "dense") {
          return \`.\${escapedClass} { grid-auto-flow: dense; }\`;
        }
        if (value === "row-dense") {
          return \`.\${escapedClass} { grid-auto-flow: row dense; }\`;
        }
        if (value === "col-dense") {
          return \`.\${escapedClass} { grid-auto-flow: column dense; }\`;
        }
      }
      const layoutUtilities = {
        // Display
        "flex": "display: flex",
        "inline-flex": "display: inline-flex",
        "grid": "display: grid",
        "inline-grid": "display: inline-grid",
        "block": "display: block",
        "inline-block": "display: inline-block",
        "inline": "display: inline",
        "hidden": "display: none",
        // Flex direction
        "flex-row": "flex-direction: row",
        "flex-row-reverse": "flex-direction: row-reverse",
        "flex-col": "flex-direction: column",
        "flex-col-reverse": "flex-direction: column-reverse",
        // Flex wrap
        "flex-wrap": "flex-wrap: wrap",
        "flex-wrap-reverse": "flex-wrap: wrap-reverse",
        "flex-nowrap": "flex-wrap: nowrap",
        // Flex shrink/grow
        "shrink-0": "flex-shrink: 0",
        "shrink": "flex-shrink: 1",
        "grow-0": "flex-grow: 0",
        "grow": "flex-grow: 1",
        // Flex sizing (common static values)
        "flex-1": "flex: 1 1 0%",
        "flex-auto": "flex: 1 1 auto",
        "flex-initial": "flex: 0 1 auto",
        "flex-none": "flex: none",
        // Flex/Grid alignment
        "items-start": "align-items: flex-start",
        "items-end": "align-items: flex-end",
        "items-center": "align-items: center",
        "items-baseline": "align-items: baseline",
        "items-stretch": "align-items: stretch",
        "justify-start": "justify-content: flex-start",
        "justify-end": "justify-content: flex-end",
        "justify-center": "justify-content: center",
        "justify-between": "justify-content: space-between",
        "justify-around": "justify-content: space-around",
        "justify-evenly": "justify-content: space-evenly",
        "place-content-center": "place-content: center",
        "place-content-start": "place-content: start",
        "place-content-end": "place-content: end",
        // Position
        "relative": "position: relative",
        "absolute": "position: absolute",
        "fixed": "position: fixed",
        "sticky": "position: sticky",
        // Overflow
        "overflow-hidden": "overflow: hidden",
        "overflow-auto": "overflow: auto",
        "overflow-scroll": "overflow: scroll",
        "overflow-x-hidden": "overflow-x: hidden",
        "overflow-y-hidden": "overflow-y: hidden",
        "overflow-x-auto": "overflow-x: auto",
        "overflow-y-auto": "overflow-y: auto",
        // Cursor
        "cursor-pointer": "cursor: pointer",
        "cursor-default": "cursor: default",
        "cursor-not-allowed": "cursor: not-allowed",
        // Text align
        "text-left": "text-align: left",
        "text-center": "text-align: center",
        "text-right": "text-align: right",
        // Text decoration
        "underline": "text-decoration: underline",
        "overline": "text-decoration: overline",
        "line-through": "text-decoration: line-through",
        "no-underline": "text-decoration: none",
        // Pointer events
        "pointer-events-none": "pointer-events: none",
        "pointer-events-auto": "pointer-events: auto",
        // Aspect ratio
        "aspect-square": "aspect-ratio: 1 / 1",
        "aspect-video": "aspect-ratio: 16 / 9",
        // Shadow
        "shadow": "box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "shadow-sm": "box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "shadow-md": "box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        "shadow-lg": "box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        "shadow-none": "box-shadow: none",
        // Outline
        "outline-none": "outline: 2px solid transparent; outline-offset: 2px",
        // Opacity (common values)
        "opacity-0": "opacity: 0",
        "opacity-50": "opacity: 0.5",
        "opacity-100": "opacity: 1",
        // Appearance
        "appearance-none": "appearance: none; -webkit-appearance: none; -moz-appearance: none",
        // Border
        "border": "border-width: 1px; border-style: solid",
        // Peer
        "peer": ""
      };
      if (layoutUtilities[className]) {
        return \`.\${className} { \${layoutUtilities[className]}; }\`;
      }
      const opacityMatch = base.match(/^opacity-(\\d+)$/);
      if (opacityMatch) {
        const [, value] = opacityMatch;
        const opacityValue = parseInt(value) / 100;
        const escapedClass = className.replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/\\./g, "\\\\.");
        return \`.\${escapedClass} { opacity: \${opacityValue}; }\`;
      }
      const colorMatch = base.match(/^(bg|text|border|ring|outline|fill)-(.+)$/);
      if (colorMatch) {
        const [, property, colorName] = colorMatch;
        const escapedClass = className.replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/\\./g, "\\\\.");
        const propertyMap = {
          "bg": "background-color",
          "text": "color",
          "border": "border-color",
          "ring": "--tw-ring-color",
          "outline": "outline-color",
          "fill": "fill"
        };
        const cssProp = propertyMap[property];
        if (!cssProp) return null;
        if (opacity) {
          return \`.\${escapedClass} { \${cssProp}: oklch(from var(--color-\${colorName}) l c h / \${opacity}); }\`;
        } else {
          return \`.\${escapedClass} { \${cssProp}: var(--color-\${colorName}); }\`;
        }
      }
      if (className === "transition-colors") {
        return \`.transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }\`;
      }
      if (className === "transition") {
        return \`.transition { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }\`;
      }
      if (className === "transition-opacity") {
        return \`.transition-opacity { transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }\`;
      }
      const borderWidthMatch = base.match(/^border(-[trbl])?-(\\d+)$/);
      if (borderWidthMatch) {
        const [, side, width] = borderWidthMatch;
        const escapedClass = className.replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/\\./g, "\\\\.");
        if (side) {
          const sideMap = {
            "-t": "border-top-width",
            "-r": "border-right-width",
            "-b": "border-bottom-width",
            "-l": "border-left-width"
          };
          return \`.\${escapedClass} { \${sideMap[side]}: \${width}px; }\`;
        } else {
          return \`.\${escapedClass} { border-width: \${width}px; }\`;
        }
      }
      const roundedMatch = base.match(/^rounded(-[trblxy])?(-(.+))?$/);
      if (roundedMatch) {
        const [, corner, , value] = roundedMatch;
        const escapedClass = className.replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/\\./g, "\\\\.");
        const roundedValues = {
          "none": "0",
          "sm": "calc(var(--radius) - 4px)",
          "md": "calc(var(--radius) - 2px)",
          "lg": "var(--radius)",
          "xl": "0.75rem",
          "2xl": "1rem",
          "3xl": "1.5rem",
          "full": "9999px"
        };
        const radiusValue = value ? roundedValues[value] || spacingScale[value] || parseArbitraryValue(value) : "0.25rem";
        if (!radiusValue) return null;
        const cornerMap = {
          "-t": ["border-top-left-radius", "border-top-right-radius"],
          "-r": ["border-top-right-radius", "border-bottom-right-radius"],
          "-b": ["border-bottom-left-radius", "border-bottom-right-radius"],
          "-l": ["border-top-left-radius", "border-bottom-left-radius"],
          "-tl": ["border-top-left-radius"],
          "-tr": ["border-top-right-radius"],
          "-bl": ["border-bottom-left-radius"],
          "-br": ["border-bottom-right-radius"]
        };
        if (corner && cornerMap[corner]) {
          const declarations = cornerMap[corner].map((prop) => \`\${prop}: \${radiusValue}\`).join("; ");
          return \`.\${escapedClass} { \${declarations}; }\`;
        } else {
          return \`.\${escapedClass} { border-radius: \${radiusValue}; }\`;
        }
      }
      const ringMatch = className.match(/^ring(-offset)?(-(\\d+))?$/);
      if (ringMatch) {
        const [, offset, , width] = ringMatch;
        const escapedClass = className.replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/\\./g, "\\\\.");
        if (offset) {
          const ringWidth = width || "2";
          return \`.\${escapedClass} { --tw-ring-offset-width: \${ringWidth}px; }\`;
        } else {
          const ringWidth = width || "3";
          return \`.\${escapedClass} { --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(\${ringWidth}px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); }\`;
        }
      }
      if (className === "ring-offset-background") {
        return \`.ring-offset-background { --tw-ring-offset-color: var(--color-background); }\`;
      }
      const focusVisibleMatch = className.match(/^focus-visible:(.+)$/);
      if (focusVisibleMatch) {
        const [, baseClass] = focusVisibleMatch;
        const baseRule = generateRule(baseClass);
        if (!baseRule) return null;
        const escapedClass = className.replace(/:/g, "\\\\:").replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/\\./g, "\\\\.");
        return \`.\${escapedClass}:focus-visible \${baseRule.substring(baseRule.indexOf("{"))}\`;
      }
      const dataMatch = className.match(/^data-\\[(.+?)\\]:(.+)$/);
      if (dataMatch) {
        const [, dataAttr, baseClass] = dataMatch;
        const baseRule = generateRule(baseClass);
        if (!baseRule) return null;
        const escapedClass = className.replace(/:/g, "\\\\:").replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/=/g, "\\\\=").replace(/\\./g, "\\\\.");
        return \`.\${escapedClass}[data-\${dataAttr}] \${baseRule.substring(baseRule.indexOf("{"))}\`;
      }
      return null;
    };
    const css = (classNames) => {
      const classes = classNames.trim().split(/\\s+/).filter(Boolean);
      for (const className of classes) {
        if (generatedClasses.has(className)) continue;
        const rule = generateRule(className);
        if (rule) {
          try {
            styleSheet.insertRule(rule, styleSheet.cssRules.length);
            generatedClasses.add(className);
          } catch (error) {
            console.error(\`[DynamicBlock Error] Failed to generate CSS for class: \${className}\`, error);
          }
        }
      }
      return classNames;
    };
    return css;
  }
  function createUIHelpers(cssGenerator) {
    const isSelector = (arg) => typeof arg === "string";
    const applyClasses = (element, baseClasses, customClassName) => {
      const allClasses = customClassName ? \`\${baseClasses} \${customClassName}\`.replace(/\\s+/g, " ").trim() : baseClasses;
      cssGenerator(allClasses);
      if (element instanceof SVGElement) {
        element.setAttribute("class", allClasses);
      } else {
        element.className = allClasses;
      }
    };
    const applyStyles = (element, styles) => {
      if (!styles) return;
      Object.entries(styles).forEach(([property, value]) => {
        if (element instanceof HTMLElement) {
          element.style.setProperty(property, value);
        } else {
          const currentStyle = element.getAttribute("style") || "";
          const newStyle = \`\${currentStyle}\${currentStyle ? "; " : ""}\${property}: \${value}\`;
          element.setAttribute("style", newStyle);
        }
      });
    };
    return {
      /**
       * Button helper - creates or enhances button elements
       */
      button(selectorOrOptions, options) {
        const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50";
        const getVariantClasses = (variant2 = "contained", color2 = "primary", size2 = "md") => {
          const variantBaseMap = {
            contained: "",
            outlined: "border bg-background",
            text: "",
            ghost: ""
          };
          const variantColorMap = {
            contained: \`bg-\${color2} text-\${color2}-foreground hover:bg-\${color2}/80\`,
            outlined: \`border-\${color2} text-\${color2} hover:bg-\${color2}/20\`,
            text: \`text-\${color2} hover:bg-\${color2}/20\`,
            ghost: \`text-\${color2} hover:bg-\${color2} hover:text-background\`
          };
          const sizeMap = {
            sm: "h-9 rounded-md px-3 text-sm",
            md: "h-10 px-4 py-2",
            lg: "h-12 rounded-md px-6 text-base",
            xl: "h-14 rounded-md px-8 text-lg",
            icon: "h-10 w-10"
          };
          const variantBase = variantBaseMap[variant2] || variantBaseMap.contained;
          const variantColor = variantColorMap[variant2] || variantColorMap.contained;
          const sizeClasses = sizeMap[size2] || sizeMap.md;
          return \`\${baseClasses} \${variantBase} \${variantColor} \${sizeClasses}\`.replace(/\\s+/g, " ").trim();
        };
        if (isSelector(selectorOrOptions)) {
          const elements = document.querySelectorAll(selectorOrOptions);
          elements.forEach((btn2) => {
            const { variant: variant2, color: color2, size: size2, disabled: disabled2, onClick: onClick2, className: className2, style: style2 } = options || {};
            applyClasses(btn2, getVariantClasses(variant2, color2, size2), className2);
            applyStyles(btn2, style2);
            if (disabled2 !== void 0) btn2.disabled = disabled2;
            if (onClick2) btn2.addEventListener("click", onClick2);
          });
          return elements;
        }
        const { label, variant, color, size, disabled, onClick, className, style } = selectorOrOptions;
        const btn = document.createElement("button");
        btn.type = "button";
        if (label) btn.textContent = label;
        applyClasses(btn, getVariantClasses(variant, color, size), className);
        applyStyles(btn, style);
        if (disabled) btn.disabled = disabled;
        if (onClick) btn.addEventListener("click", onClick);
        return btn;
      },
      /**
       * Input helper - creates or enhances input elements
       */
      input(selectorOrOptions, options) {
        const baseClasses = "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
        if (isSelector(selectorOrOptions)) {
          const elements = document.querySelectorAll(selectorOrOptions);
          elements.forEach((input2) => {
            const { type: type2, placeholder: placeholder2, disabled: disabled2, value: value2, onInput: onInput2, onChange: onChange2, className: className2, style: style2 } = options || {};
            applyClasses(input2, baseClasses, className2);
            applyStyles(input2, style2);
            if (type2) input2.type = type2;
            if (placeholder2) input2.placeholder = placeholder2;
            if (disabled2 !== void 0) input2.disabled = disabled2;
            if (value2 !== void 0) input2.value = value2;
            if (onInput2) input2.addEventListener("input", onInput2);
            if (onChange2) input2.addEventListener("change", onChange2);
          });
          return elements;
        }
        const { type, placeholder, disabled, value, onInput, onChange, className, style } = selectorOrOptions;
        const input = document.createElement("input");
        input.type = type || "text";
        applyClasses(input, baseClasses, className);
        applyStyles(input, style);
        if (placeholder) input.placeholder = placeholder;
        if (disabled) input.disabled = disabled;
        if (value !== void 0) input.value = value;
        if (onInput) input.addEventListener("input", onInput);
        if (onChange) input.addEventListener("change", onChange);
        return input;
      },
      /**
       * Textarea helper - creates or enhances textarea elements
       */
      textarea(selectorOrOptions, options) {
        const baseClasses = "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
        if (isSelector(selectorOrOptions)) {
          const elements = document.querySelectorAll(selectorOrOptions);
          elements.forEach((textarea2) => {
            const { placeholder: placeholder2, rows: rows2, disabled: disabled2, value: value2, onInput: onInput2, onChange: onChange2, className: className2, style: style2 } = options || {};
            applyClasses(textarea2, baseClasses, className2);
            applyStyles(textarea2, style2);
            if (placeholder2) textarea2.placeholder = placeholder2;
            if (rows2) textarea2.rows = rows2;
            if (disabled2 !== void 0) textarea2.disabled = disabled2;
            if (value2 !== void 0) textarea2.value = value2;
            if (onInput2) textarea2.addEventListener("input", onInput2);
            if (onChange2) textarea2.addEventListener("change", onChange2);
          });
          return elements;
        }
        const { placeholder, rows, disabled, value, onInput, onChange, className, style } = selectorOrOptions;
        const textarea = document.createElement("textarea");
        applyClasses(textarea, baseClasses, className);
        applyStyles(textarea, style);
        if (placeholder) textarea.placeholder = placeholder;
        if (rows) textarea.rows = rows;
        if (disabled) textarea.disabled = disabled;
        if (value !== void 0) textarea.value = value;
        if (onInput) textarea.addEventListener("input", onInput);
        if (onChange) textarea.addEventListener("change", onChange);
        return textarea;
      },
      /**
       * Select helper - creates or enhances select elements
       * Uses native HTML select with chevron icon styling to match shadcn
       */
      select(selectorOrOptions, options) {
        const createSelectWrapper = (items2, value2, placeholder2, disabled2, onChange2, className2, style2) => {
          const wrapper = document.createElement("div");
          applyClasses(wrapper, "relative w-full", className2);
          applyStyles(wrapper, style2);
          const select = document.createElement("select");
          const selectClasses = "sandbox-select flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer";
          applyClasses(select, selectClasses);
          if (placeholder2) {
            const placeholderOption = document.createElement("option");
            placeholderOption.value = "";
            placeholderOption.textContent = placeholder2;
            placeholderOption.disabled = true;
            placeholderOption.selected = true;
            select.appendChild(placeholderOption);
            select.required = true;
          }
          if (items2) {
            items2.forEach((item) => {
              const option = document.createElement("option");
              option.value = item.value;
              option.textContent = item.label;
              select.appendChild(option);
            });
          }
          if (value2) {
            select.value = value2;
            if (placeholder2) select.required = false;
          }
          if (disabled2) select.disabled = disabled2;
          if (onChange2) {
            select.addEventListener("change", (e) => {
              const newValue = e.target.value;
              if (placeholder2) {
                select.required = newValue === "";
              }
              onChange2(newValue);
            });
          }
          const chevron = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          applyClasses(chevron, "h-4 w-4 opacity-50 pointer-events-none");
          chevron.style.position = "absolute";
          chevron.style.right = "0.75rem";
          chevron.style.top = "50%";
          chevron.style.transform = "translateY(-50%)";
          chevron.setAttribute("xmlns", "http://www.w3.org/2000/svg");
          chevron.setAttribute("width", "24");
          chevron.setAttribute("height", "24");
          chevron.setAttribute("viewBox", "0 0 24 24");
          chevron.setAttribute("fill", "none");
          chevron.setAttribute("stroke", "currentColor");
          chevron.setAttribute("stroke-width", "2");
          chevron.setAttribute("stroke-linecap", "round");
          chevron.setAttribute("stroke-linejoin", "round");
          const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
          polyline.setAttribute("points", "6 9 12 15 18 9");
          chevron.appendChild(polyline);
          select.style.paddingRight = "2.5rem";
          wrapper.appendChild(select);
          wrapper.appendChild(chevron);
          return wrapper;
        };
        if (isSelector(selectorOrOptions)) {
          const elements = document.querySelectorAll(selectorOrOptions);
          const wrappers = [];
          elements.forEach((select) => {
            const { items: items2, value: value2, placeholder: placeholder2, disabled: disabled2, onChange: onChange2, className: className2, style: style2 } = options || {};
            const wrapper = createSelectWrapper(items2, value2, placeholder2, disabled2, onChange2, className2, style2);
            select.replaceWith(wrapper);
            wrappers.push(wrapper);
          });
          return document.querySelectorAll(".relative:has(select)");
        }
        const { items, value, placeholder, disabled, onChange, className, style } = selectorOrOptions;
        return createSelectWrapper(items, value, placeholder, disabled, onChange, className, style);
      },
      /**
       * Checkbox helper - creates checkbox elements matching shadcn Radix UI styling
       * Uses custom div-based checkbox with check icon for visual parity
       */
      checkbox(selectorOrOptions, options) {
        const createCheckbox = (checked2, label2, disabled2, onChange2, className2, style2) => {
          const wrapper = document.createElement("div");
          applyClasses(wrapper, "flex items-center gap-2", className2);
          applyStyles(wrapper, style2);
          const checkboxContainer = document.createElement("button");
          checkboxContainer.type = "button";
          checkboxContainer.role = "checkbox";
          checkboxContainer.setAttribute("aria-checked", checked2 ? "true" : "false");
          const checkboxClasses = "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer";
          applyClasses(checkboxContainer, checkboxClasses);
          const updateCheckboxStyles = (isChecked2) => {
            if (isChecked2) {
              checkboxContainer.style.backgroundColor = "var(--color-checkbox-checked)";
              checkboxContainer.style.color = "var(--color-checkbox-checked-foreground)";
            } else {
              checkboxContainer.style.backgroundColor = "";
              checkboxContainer.style.color = "";
            }
          };
          updateCheckboxStyles(!!checked2);
          if (disabled2) {
            checkboxContainer.disabled = true;
          }
          const checkIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          applyClasses(checkIcon, "h-4 w-4");
          checkIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
          checkIcon.setAttribute("width", "24");
          checkIcon.setAttribute("height", "24");
          checkIcon.setAttribute("viewBox", "0 0 24 24");
          checkIcon.setAttribute("fill", "none");
          checkIcon.setAttribute("stroke", "currentColor");
          checkIcon.setAttribute("stroke-width", "2");
          checkIcon.setAttribute("stroke-linecap", "round");
          checkIcon.setAttribute("stroke-linejoin", "round");
          const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
          polyline.setAttribute("points", "20 6 9 17 4 12");
          checkIcon.appendChild(polyline);
          if (checked2) {
            checkboxContainer.appendChild(checkIcon);
          }
          let isChecked = !!checked2;
          checkboxContainer.addEventListener("click", (e) => {
            if (disabled2) return;
            e.preventDefault();
            isChecked = !isChecked;
            checkboxContainer.setAttribute("aria-checked", isChecked ? "true" : "false");
            updateCheckboxStyles(isChecked);
            if (isChecked) {
              checkboxContainer.appendChild(checkIcon);
            } else {
              if (checkIcon.parentNode === checkboxContainer) {
                checkboxContainer.removeChild(checkIcon);
              }
            }
            if (onChange2) onChange2(isChecked);
          });
          wrapper.appendChild(checkboxContainer);
          if (label2) {
            const labelEl = document.createElement("label");
            applyClasses(labelEl, "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer");
            labelEl.textContent = label2;
            labelEl.addEventListener("click", () => {
              if (!disabled2) checkboxContainer.click();
            });
            wrapper.appendChild(labelEl);
          }
          return wrapper;
        };
        if (isSelector(selectorOrOptions)) {
          const elements = document.querySelectorAll(selectorOrOptions);
          elements.forEach((el) => {
            const { checked: checked2, label: label2, disabled: disabled2, onChange: onChange2, className: className2, style: style2 } = options || {};
            const checkboxWrapper = createCheckbox(checked2, label2, disabled2, onChange2, className2, style2);
            el.replaceWith(checkboxWrapper);
          });
          return document.querySelectorAll(selectorOrOptions);
        }
        const { checked, label, disabled, onChange, className, style } = selectorOrOptions;
        return createCheckbox(checked, label, disabled, onChange, className, style);
      },
      /**
       * Radio helper - creates radio button elements matching shadcn Radix UI styling
       * Uses custom button-based radio with circle fill indicator for visual parity
       */
      radio(selectorOrOptions, options) {
        const createRadio = (name2, value2, checked2, label2, disabled2, onChange2, className2, style2) => {
          const wrapper = document.createElement("div");
          applyClasses(wrapper, "flex items-center gap-2", className2);
          applyStyles(wrapper, style2);
          const radioContainer = document.createElement("button");
          radioContainer.type = "button";
          radioContainer.role = "radio";
          radioContainer.setAttribute("aria-checked", checked2 ? "true" : "false");
          radioContainer.setAttribute("data-name", name2);
          radioContainer.setAttribute("data-value", value2);
          const radioClasses = "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer flex items-center justify-center";
          applyClasses(radioContainer, radioClasses);
          if (disabled2) {
            radioContainer.disabled = true;
          }
          const circleIndicator = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          circleIndicator.setAttribute("xmlns", "http://www.w3.org/2000/svg");
          circleIndicator.setAttribute("width", "24");
          circleIndicator.setAttribute("height", "24");
          circleIndicator.setAttribute("viewBox", "0 0 24 24");
          circleIndicator.setAttribute("fill", "none");
          circleIndicator.setAttribute("stroke", "currentColor");
          circleIndicator.setAttribute("stroke-width", "2");
          circleIndicator.setAttribute("stroke-linecap", "round");
          circleIndicator.setAttribute("stroke-linejoin", "round");
          applyClasses(circleIndicator, "h-3.5 w-3.5 fill-primary");
          const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          circle.setAttribute("cx", "12");
          circle.setAttribute("cy", "12");
          circle.setAttribute("r", "10");
          circleIndicator.appendChild(circle);
          if (checked2) {
            radioContainer.appendChild(circleIndicator);
          }
          radioContainer.addEventListener("click", (e) => {
            if (disabled2) return;
            e.preventDefault();
            const allRadiosInGroup = document.querySelectorAll(\`[role="radio"][data-name="\${name2}"]\`);
            allRadiosInGroup.forEach((radio) => {
              radio.setAttribute("aria-checked", "false");
              while (radio.firstChild) {
                radio.removeChild(radio.firstChild);
              }
            });
            radioContainer.setAttribute("aria-checked", "true");
            radioContainer.appendChild(circleIndicator);
            if (onChange2) onChange2(value2);
          });
          wrapper.appendChild(radioContainer);
          if (label2) {
            const labelEl = document.createElement("label");
            applyClasses(labelEl, "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer");
            labelEl.textContent = label2;
            labelEl.addEventListener("click", () => {
              if (!disabled2) radioContainer.click();
            });
            wrapper.appendChild(labelEl);
          }
          return wrapper;
        };
        if (isSelector(selectorOrOptions)) {
          const elements = document.querySelectorAll(selectorOrOptions);
          elements.forEach((el) => {
            const { name: name2, value: value2, checked: checked2, label: label2, disabled: disabled2, onChange: onChange2, className: className2, style: style2 } = options || {};
            const radioWrapper = createRadio(name2, value2, checked2, label2, disabled2, onChange2, className2, style2);
            el.replaceWith(radioWrapper);
          });
          return document.querySelectorAll(selectorOrOptions);
        }
        const { name, value, checked, label, disabled, onChange, className, style } = selectorOrOptions;
        return createRadio(name, value, checked, label, disabled, onChange, className, style);
      }
    };
  }
  function scanAndGenerateClasses(api) {
    const classNames = /* @__PURE__ */ new Set();
    const elements = document.querySelectorAll("[class]");
    elements.forEach((element) => {
      const classList = element.className;
      if (typeof classList === "string") {
        classList.split(/\\s+/).forEach((cls) => {
          if (cls) classNames.add(cls);
        });
      }
    });
    const scripts = document.querySelectorAll("script");
    scripts.forEach((script) => {
      const content = script.textContent || "";
      const stringMatches = content.matchAll(/(?:className|class)\\s*[=:]\\s*["'\`]([^"'\`]+)["'\`]/g);
      for (const match of stringMatches) {
        const classes = match[1];
        classes.split(/\\s+/).forEach((cls) => {
          if (cls) classNames.add(cls);
        });
      }
      const templateMatches = content.matchAll(/\`([^\`]*(?:p-|m-|bg-|text-|border-|rounded|flex|grid|grid-cols-|grid-rows-|grid-flow-|auto-cols-|auto-rows-|col-|row-|w-|h-|gap-)[^\`]*)\`/g);
      for (const match of templateMatches) {
        const classes = match[1];
        const tailwindMatches = classes.matchAll(/\\b((?:p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr|gap|gap-x|gap-y|w|h|min-w|min-h|max-w|max-h|bg|text|border|rounded|flex|grid|grid-cols|grid-rows|grid-flow|auto-cols|auto-rows|col|row|inline|block|hidden|top|right|bottom|left|inset)(?:-[\\w[\\]/:.%-]+)?)\\b/g);
        for (const tailwindMatch of tailwindMatches) {
          if (tailwindMatch[1]) classNames.add(tailwindMatch[1]);
        }
      }
    });
    if (classNames.size > 0) {
      const allClasses = Array.from(classNames).join(" ");
      api.css(allClasses);
    }
  }
  function setupMutationObserver(api) {
    const sandboxWindow2 = window;
    const config = sandboxWindow2.$CONFIG || {};
    const autoDetectClasses = config.autoDetectClasses !== false;
    if (!autoDetectClasses) {
      return;
    }
    const observer = new MutationObserver((mutations) => {
      const classNames = /* @__PURE__ */ new Set();
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node;
            if (element.className && typeof element.className === "string") {
              element.className.split(/\\s+/).forEach((cls) => {
                if (cls) classNames.add(cls);
              });
            }
            element.querySelectorAll("[class]").forEach((child) => {
              if (typeof child.className === "string") {
                child.className.split(/\\s+/).forEach((cls) => {
                  if (cls) classNames.add(cls);
                });
              }
            });
          }
        });
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          const element = mutation.target;
          if (element.className && typeof element.className === "string") {
            element.className.split(/\\s+/).forEach((cls) => {
              if (cls) classNames.add(cls);
            });
          }
        }
      }
      if (classNames.size > 0) {
        const allClasses = Array.from(classNames).join(" ");
        api.css(allClasses);
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"]
    });
  }
  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
  function parseColor(input) {
    const cssVar = getComputedStyle(document.documentElement).getPropertyValue(\`--color-\${input}\`).trim();
    const colorStr = cssVar || input;
    const oklchMatch = colorStr.match(/oklch\\(([^)]+)\\)/);
    if (oklchMatch) {
      const parts = oklchMatch[1].split("/");
      const channels = parts[0].trim().split(/\\s+/);
      if (channels.length === 3) {
        const parseVal = (s, pctScale) => s.endsWith("%") ? parseFloat(s) / 100 * pctScale : parseFloat(s);
        const l = parseVal(channels[0], 1);
        const c = parseVal(channels[1], 1);
        const h = parseVal(channels[2], 360);
        let a2 = 1;
        if (parts[1] != null) {
          const alphaStr = parts[1].trim();
          a2 = alphaStr.endsWith("%") ? parseFloat(alphaStr) / 100 : parseFloat(alphaStr);
        }
        if (!isNaN(l) && !isNaN(c) && !isNaN(h) && !isNaN(a2)) {
          return oklchToRgb({ l, c, h, a: a2 });
        }
      }
    }
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = colorStr;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
    return { r: r / 255, g: g / 255, b: b / 255, a: a / 255 };
  }
  function srgbToLinear(c) {
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }
  function linearToSrgb(c) {
    return c <= 31308e-7 ? c * 12.92 : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
  }
  function rgbToOklab(rgb) {
    const r = srgbToLinear(rgb.r);
    const g = srgbToLinear(rgb.g);
    const b = srgbToLinear(rgb.b);
    const l_ = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
    const m_ = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
    const s_ = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;
    const l = Math.cbrt(l_);
    const m = Math.cbrt(m_);
    const s = Math.cbrt(s_);
    return {
      L: 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
      a: 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
      b: 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
      alpha: rgb.a
    };
  }
  function oklabToRgb(lab) {
    const l = lab.L + 0.3963377774 * lab.a + 0.2158037573 * lab.b;
    const m = lab.L - 0.1055613458 * lab.a - 0.0638541728 * lab.b;
    const s = lab.L - 0.0894841775 * lab.a - 1.291485548 * lab.b;
    const l3 = l * l * l;
    const m3 = m * m * m;
    const s3 = s * s * s;
    return {
      r: clamp(linearToSrgb(4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3), 0, 1),
      g: clamp(linearToSrgb(-1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3), 0, 1),
      b: clamp(linearToSrgb(-0.0041960863 * l3 - 0.7034186147 * m3 + 1.707614701 * s3), 0, 1),
      a: lab.alpha
    };
  }
  function oklabToOklch(lab) {
    const c = Math.sqrt(lab.a * lab.a + lab.b * lab.b);
    let h = Math.atan2(lab.b, lab.a) * 180 / Math.PI;
    if (h < 0) h += 360;
    return { l: lab.L, c, h, a: lab.alpha };
  }
  function oklchToOklab(oklch) {
    const hRad = oklch.h * Math.PI / 180;
    return {
      L: oklch.l,
      a: oklch.c * Math.cos(hRad),
      b: oklch.c * Math.sin(hRad),
      alpha: oklch.a
    };
  }
  function rgbToOklch(rgb) {
    return oklabToOklch(rgbToOklab(rgb));
  }
  function oklchToRgb(oklch) {
    return oklabToRgb(oklchToOklab(oklch));
  }
  function rgbToHsl(rgb) {
    const { r, g, b } = rgb;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;
    const l = (max + min) / 2;
    if (d === 0) return { h: 0, s: 0, l: l * 100, a: rgb.a };
    const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    let h = 0;
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
    return { h: h * 360, s: s * 100, l: l * 100, a: rgb.a };
  }
  function hslToRgb(hsl) {
    const h = hsl.h / 360;
    const s = hsl.s / 100;
    const l = hsl.l / 100;
    if (s === 0) return { r: l, g: l, b: l, a: hsl.a };
    const hue2rgb = (p2, q2, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p2 + (q2 - p2) * 6 * t;
      if (t < 1 / 2) return q2;
      if (t < 2 / 3) return p2 + (q2 - p2) * (2 / 3 - t) * 6;
      return p2;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    return {
      r: hue2rgb(p, q, h + 1 / 3),
      g: hue2rgb(p, q, h),
      b: hue2rgb(p, q, h - 1 / 3),
      a: hsl.a
    };
  }
  function formatOklch(oklch) {
    const l = Math.round(oklch.l * 1e3) / 1e3;
    const c = Math.round(oklch.c * 1e3) / 1e3;
    const h = Math.round(oklch.h * 100) / 100;
    if (oklch.a < 1) {
      const a = Math.round(oklch.a * 1e3) / 1e3;
      return \`oklch(\${l} \${c} \${h} / \${a})\`;
    }
    return \`oklch(\${l} \${c} \${h})\`;
  }
  function determineAdjustSpace(opts) {
    if (opts.space) return opts.space;
    const hasOklch = opts.lightness != null || opts.chroma != null || opts.hue != null;
    const hasHsl = opts.saturation != null;
    const hasRgb = opts.red != null || opts.green != null || opts.blue != null;
    if (hasHsl && !hasOklch && !hasRgb) return "hsl";
    if (hasRgb && !hasOklch && !hasHsl) return "rgb";
    if (hasOklch && !hasHsl && !hasRgb) return "oklch";
    if (!hasOklch && !hasHsl && !hasRgb) return "oklch";
    throw new Error(
      "[getColor] Cannot mix channels from different color spaces. Use the space parameter to disambiguate, or only use channels from one space."
    );
  }
  function adjustColor(input, opts) {
    const rgba = parseColor(input);
    const space = determineAdjustSpace(opts);
    const alphaAdj = opts.alpha ?? 0;
    if (space === "oklch") {
      const oklch = rgbToOklch(rgba);
      oklch.l = clamp(oklch.l + (opts.lightness ?? 0), 0, 1);
      oklch.c = Math.max(0, oklch.c + (opts.chroma ?? 0));
      oklch.h = ((oklch.h + (opts.hue ?? 0)) % 360 + 360) % 360;
      oklch.a = clamp(oklch.a + alphaAdj, 0, 1);
      return formatOklch(oklch);
    }
    if (space === "hsl") {
      const hsl = rgbToHsl(rgba);
      hsl.h = ((hsl.h + (opts.hue ?? 0)) % 360 + 360) % 360;
      hsl.s = clamp(hsl.s + (opts.saturation ?? 0), 0, 100);
      hsl.l = clamp(hsl.l + (opts.lightness ?? 0), 0, 100);
      hsl.a = clamp(hsl.a + alphaAdj, 0, 1);
      const rgb = hslToRgb(hsl);
      return formatOklch(rgbToOklch(rgb));
    }
    const r = clamp(rgba.r + (opts.red ?? 0) / 255, 0, 1);
    const g = clamp(rgba.g + (opts.green ?? 0) / 255, 0, 1);
    const b = clamp(rgba.b + (opts.blue ?? 0) / 255, 0, 1);
    const a = clamp(rgba.a + alphaAdj, 0, 1);
    return formatOklch(rgbToOklch({ r, g, b, a }));
  }
  function initializeSandbox() {
    const themeChangeCallbacks = [];
    const resizeCallbacks = [];
    let currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    const cssGenerator = createCSSGenerator();
    const api = {
      get theme() {
        return currentTheme;
      },
      size: {
        get width() {
          return window.innerWidth;
        }
      },
      onResize: (callback) => {
        resizeCallbacks.push(callback);
        callback(window.innerWidth);
      },
      onThemeChange: (callback) => {
        themeChangeCallbacks.push(callback);
        callback(currentTheme);
      },
      requestResize: (height) => {
        window.parent.postMessage(
          {
            event: "resize-request",
            data: { height }
          },
          "*"
        );
      },
      getColor: (color, adjust) => {
        if (adjust) {
          return adjustColor(color, adjust);
        }
        const cssVar = getComputedStyle(document.documentElement).getPropertyValue(\`--color-\${color}\`).trim();
        if (cssVar) return cssVar;
        return formatOklch(rgbToOklch(parseColor(color)));
      },
      getFont: (name) => {
        if (name === "default") {
          const value = getComputedStyle(document.body).fontFamily;
          return value.trim();
        } else if (name === "mono") {
          return '"Space Mono", ui-monospace, "Cascadia Code", monospace';
        }
        return "";
      },
      css: cssGenerator,
      ui: createUIHelpers(cssGenerator),
      emit: (event, data) => {
        void event;
        void data;
      }
    };
    window.addEventListener("message", (event) => {
      if (event.data?.event === "theme-change") {
        const newTheme = event.data.data.theme;
        if (newTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        currentTheme = newTheme;
        themeChangeCallbacks.forEach((callback) => {
          try {
            callback(newTheme);
          } catch (error) {
            console.error("[DynamicBlock Error] Error in onThemeChange callback:", error);
            console.error("Stack trace:", error.stack);
          }
        });
      }
    });
    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        const newWidth = window.innerWidth;
        resizeCallbacks.forEach((callback) => {
          try {
            callback(newWidth);
          } catch (error) {
            console.error("[DynamicBlock Error] Error in onResize callback:", error);
            console.error("Stack trace:", error.stack);
          }
        });
      }, 150);
    });
    const sandboxWindow2 = window;
    sandboxWindow2.sandboxContext = api;
    setupAutoResize(api);
    scanAndGenerateClasses(api);
    setupMutationObserver(api);
  }
  function setupAutoResize(api) {
    let lastHeight = 0;
    const updateHeight = () => {
      const root2 = document.getElementById("root");
      if (!root2) return;
      const currentHeight = root2.scrollHeight;
      if (currentHeight !== lastHeight) {
        lastHeight = currentHeight;
        api.requestResize(currentHeight);
      }
    };
    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });
    const root = document.getElementById("root");
    if (root) {
      resizeObserver.observe(root);
    }
    setTimeout(updateHeight, 0);
  }
  initializeSandbox();
  function executeMountIfExists(props = {}) {
    try {
      const sandboxWindow2 = window;
      const api = sandboxWindow2.sandboxContext;
      const root = document.getElementById("root");
      if (!root) {
        console.error("[DynamicBlock Error] Root element not found - cannot execute mount()");
        return;
      }
      if (typeof sandboxWindow2.mount === "function") {
        try {
          sandboxWindow2.mount({ root, api, props });
        } catch (error) {
          console.error("[DynamicBlock Error] Error in mount() function:", error);
          console.error("Stack trace:", error.stack);
        }
      }
    } catch (error) {
      console.error("[DynamicBlock Error] Fatal error in executeMountIfExists():", error);
      console.error("Stack trace:", error.stack);
    }
  }
  function executeDrawIfExists(props = {}) {
    try {
      const sandboxWindow2 = window;
      const api = sandboxWindow2.sandboxContext;
      const drawFn = sandboxWindow2.draw;
      if (!api) {
        console.error("[DynamicBlock Error] Sandbox context not initialized");
        return;
      }
      if (typeof drawFn !== "function") {
        return;
      }
      let canvas = document.querySelector("canvas");
      if (!canvas) {
        const root = document.getElementById("root");
        if (!root) {
          console.error("[DynamicBlock Error] Root element not found - cannot create canvas");
          return;
        }
        root.innerHTML = "";
        canvas = document.createElement("canvas");
        canvas.className = api.css("[&:not([width])]:w-full [&[width]]:mx-auto");
        root.appendChild(canvas);
      }
      const ariaLabel = sandboxWindow2.__CANVAS_ARIA_LABEL__;
      if (ariaLabel && typeof ariaLabel === "string") {
        canvas.setAttribute("aria-label", ariaLabel);
      }
      const autoRedrawConfig = sandboxWindow2.autoRedraw || {
        onThemeChange: true,
        onResize: true
      };
      const themeChangeConfig = autoRedrawConfig.onThemeChange === false ? false : autoRedrawConfig.onThemeChange || 0;
      const resizeConfig = autoRedrawConfig.onResize === false ? false : autoRedrawConfig.onResize === true ? 150 : autoRedrawConfig.onResize;
      let resizeTimeout;
      const executeDraw = () => {
        try {
          const theme = api.theme;
          const width = window.innerWidth;
          drawFn({ canvas, api, theme, width, props });
          requestAnimationFrame(() => {
            const root = document.getElementById("root");
            if (root) {
              const height = root.scrollHeight;
              if (height > 0) {
                api.requestResize(height);
              }
            }
          });
        } catch (error) {
          console.error("[DynamicBlock Error] Error in draw() function:", error);
          console.error("Stack trace:", error.stack);
        }
      };
      executeDraw();
      if (themeChangeConfig !== false) {
        api.onThemeChange(() => {
          const debounce = typeof themeChangeConfig === "number" ? themeChangeConfig : 0;
          if (debounce === 0) {
            executeDraw();
          } else {
            setTimeout(executeDraw, debounce);
          }
        });
      }
      if (resizeConfig !== false) {
        api.onResize(() => {
          clearTimeout(resizeTimeout);
          const debounce = typeof resizeConfig === "number" ? resizeConfig : 150;
          resizeTimeout = window.setTimeout(executeDraw, debounce);
        });
      }
    } catch (error) {
      console.error("[DynamicBlock Error] Fatal error setting up draw():", error);
      console.error("Stack trace:", error.stack);
    }
  }
  const sandboxWindow = window;
  sandboxWindow.executeMountIfExists = executeMountIfExists;
  sandboxWindow.executeDrawIfExists = executeDrawIfExists;
})();
`,yo=`/* Base Reset */
*, ::before, ::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: var(--color-border);
}

html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
  font-family: 'Poppins', ui-sans-serif, system-ui, -apple-system, sans-serif;
  font-feature-settings: normal;
  font-variation-settings: normal;
}

body {
  margin: 0;
  line-height: inherit;
  color: var(--color-foreground);
  background-color: var(--color-background);
}

/* Reset margins on common elements */
h1, h2, h3, h4, h5, h6, p, blockquote, pre, ul, ol, dl, figure, hr {
  margin: 0;
}

/* Reset list styles */
ul, ol {
  padding: 0;
  list-style: none;
}

/* Reset buttons and inputs */
button, input, optgroup, select, textarea {
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}

button, select {
  text-transform: none;
}

button, input:where([type='button']), input:where([type='reset']), input:where([type='submit']) {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
  cursor: pointer;
}

button:disabled, input:disabled {
  cursor: default;
}

/* Reset form elements */
input::placeholder, textarea::placeholder {
  opacity: 1;
  color: var(--color-muted-foreground);
}

/* Reset tables */
table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}

/* Link styles */
a {
  color: var(--color-link);
  text-decoration: none;
}

a:hover {
  color: var(--color-link-hover);
  text-decoration: underline;
}

/* Reset headings */
h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}

/* Reset images and media */
img, svg, video, canvas, audio, iframe, embed, object {
  display: block;
  vertical-align: middle;
}

img, video {
  max-width: 100%;
  height: auto;
}

/* Sandbox-specific UI styles */
.sandbox-select:invalid {
  color: var(--color-muted-foreground) !important;
}

.sandbox-select option {
  background-color: var(--color-popover) !important;
  color: var(--color-popover-foreground) !important;
  padding: 0.375rem 0.5rem !important;
}

.sandbox-select option:disabled {
  color: var(--color-muted-foreground) !important;
  background-color: var(--color-popover) !important;
}

.sandbox-select option:checked {
  background-color: var(--color-select-hover) !important;
  color: var(--color-select-hover-foreground) !important;
}

.sandbox-select option:hover,
.sandbox-select option:focus,
.sandbox-select option:active {
  background-color: var(--color-select-hover) !important;
  color: var(--color-select-hover-foreground) !important;
}

/* Peer helper class for Radix UI components */
.peer { }`,ko={"local:chomp:chomp-grid":{id:"local:chomp:chomp-grid",code:`function mount(options) {
  const { root, api, props } = options;
  const { grid } = props;
  const rows = grid.length;
  const cols = grid.map(row => row.length).reduce((r1, r2) => Math.max(r1, r2), 0);

  const squareMaxSize = 80;
  const container = document.getElementById('chocolate-bar');
  container.style.width = '100%';
  container.style.maxWidth = \`\${cols * squareMaxSize}px\`;
  container.style.gridTemplateColumns = \`repeat(\${cols}, min(calc(100% / \${cols}), \${squareMaxSize}px))\`;
  container.style.gridTemplateRows = \`repeat(\${rows}, min(calc(100% / \${rows}), \${squareMaxSize}px))\`;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const square = grid[r]?.[c] ?? '';
      if (square === '') {
        continue;
      }

      const squareElem = document.createElement('div');
      squareElem.classList.add('square');
      squareElem.style.gridArea = \`\${r + 1} / \${c + 1}\`;
     
      const symbol = square.slice(0, 1);
      const label = square.slice(1);
      if (symbol === '@') {
        // Poisoned
        const poisonElem = document.createElement('div');
        poisonElem.innerHTML = POISON_SVG_SRC;
        squareElem.append(poisonElem);
      } else {
        squareElem.innerText = label;
      }

      if (symbol === '@' || symbol === '#') {
        // Chocolate
        squareElem.classList.add('chocolate-square');
      } else if (symbol === '*') {
        // Empty
        squareElem.classList.add('empty-square');
      }

      container.append(squareElem);
    }
  }
}

const POISON_SVG_SRC = \`<svg xmlns="http://www.w3.org/2000/svg" style="width: 100%;" fill="currentColor" viewBox="708.58 90.47 2680.31 2520.48"><path d="M2048.859 1705.741c51.147-21.832 101.317-46.539 151.816-69.867l283.902-131.016 195.587-90.045c59.707-27.107 200.694-83.688 243.44-123.368 55.44-51.464 32.88-134.958 90.133-188.494 29.867-27.904 72.427-42.085 112.987-40.517 41.227 1.595 79.12 20.117 106.64 50.704q2.667 2.968 5.2 6.067 2.507 3.101 4.88 6.323 2.347 3.221 4.56 6.557 2.187 3.336 4.213 6.779 2.027 3.443 3.893 6.981 1.84 3.539 3.52 7.168 1.68 3.627 3.147 7.333 1.493 3.707 2.8 7.485 1.307 3.776 2.4 7.613 1.12 3.84 2.027 7.728.933 3.888 1.653 7.819.72 3.928 1.227 7.888.533 3.963.853 7.944.32 3.981.453 7.973.107 3.995.027 7.989-.08 3.995-.347 7.979c-.88 14.464-4.107 35.053-15.627 45.109 5.947 1.144 11.6 2.733 17.307 4.712 39.253 13.589 73.6 42.579 91.493 80.467q1.68 3.595 3.173 7.269 1.493 3.672 2.8 7.416 1.307 3.744 2.427 7.549 1.12 3.803 2.053 7.659.933 3.856 1.653 7.752.747 3.899 1.28 7.827.56 3.928.88 7.88.347 3.952.507 7.915.133 3.963.08 7.928-.053 3.965-.293 7.925-.24 3.957-.693 7.899-.453 3.941-1.093 7.853-.64 3.915-1.467 7.792-.853 3.875-1.867 7.707-1.04 3.829-2.267 7.603-1.2 3.773-2.613 7.483-1.307 3.512-2.773 6.955-1.467 3.445-3.12 6.808-1.653 3.365-3.467 6.645-1.813 3.277-3.787 6.461-1.973 3.181-4.107 6.264-2.107 3.08-4.4 6.048-2.293 2.971-4.72 5.821-2.427 2.853-4.987 5.579-2.56 2.725-5.28 5.32-2.693 2.595-5.52 5.051-2.827 2.456-5.787 4.765-2.933 2.312-6 4.472-3.067 2.16-6.213 4.163-3.173 2.005-6.427 3.848-3.253 1.843-6.613 3.52-3.333 1.677-6.773 3.184c-44.693 20.099-94 16.635-136.667-6.821-20.107-11.048-39.627-24.76-61.253-32.728-22.88-8.427-43.067-7.677-66.133-.659-39.253 11.939-76.507 32.453-113.413 50.147l-147.894 69.781-415.542 189.192c8.752 5.387 18.056 10.059 27.24 14.659 91.827 46.011 187.382 85.797 280.411 129.461L2871.71 2082.6c41.92 19.629 83.68 40.221 126.347 58.149 15.467 6.499 36.96 16.568 53.733 16.731 59.653.576 93.28-41.803 146-58.773 36.32-11.691 74.88-5.859 108.293 11.768q3.36 1.795 6.64 3.752 3.28 1.957 6.48 4.075 3.173 2.117 6.24 4.387 3.067 2.269 6.027 4.688 2.96 2.419 5.787 4.979 2.827 2.56 5.547 5.259 2.693 2.696 5.253 5.523 2.587 2.824 5.013 5.773 2.427 2.949 4.693 6.016 2.293 3.064 4.4 6.237 2.133 3.173 4.107 6.445 1.973 3.275 3.76 6.64 1.813 3.365 3.44 6.816 1.653 3.451 3.12 6.979 1.467 3.528 2.747 7.123 1.28 3.595 2.4 7.248c12.027 38.819 9.013 82.661-10 118.741-24.24 46.011-60.48 65.277-108.24 79.811 7.867 15.237 11.04 34.435 11.84 51.405q.16 3.736.133 7.475-.027 3.739-.24 7.469-.187 3.733-.587 7.451-.4 3.72-.96 7.413-.587 3.693-1.333 7.355-.773 3.661-1.707 7.283-.933 3.619-2.053 7.187-1.093 3.571-2.4 7.08-1.28 3.509-2.747 6.949-1.44 3.443-3.093 6.808-1.627 3.365-3.413 6.645-1.787 3.283-3.733 6.469-1.947 3.189-4.053 6.277-2.107 3.088-4.373 6.069-2.267 2.979-4.667 5.845-2.4 2.864-4.933 5.608c-28.213 30.736-66.32 47.179-107.68 49.016q-3.947.197-7.92.168-3.973-.029-7.92-.285-3.947-.256-7.893-.739-3.92-.483-7.84-1.192-3.893-.707-7.76-1.637-3.84-.931-7.627-2.083-3.813-1.149-7.52-2.515-3.733-1.365-7.36-2.944c-47.467-20.328-82.667-61.864-92.08-112.765-4.08-21.987-5.093-45.645-13.44-66.52-9.12-22.811-26.133-35.453-46.507-47.805-33.333-20.197-70.587-35.139-106-51.405l-172.632-79.304-589.473-265.811c-94.816 38.963-188.23 83.123-281.064 126.587l-328.832 154.408-152.755 71.597c-38.315 17.56-80.731 33.384-115.728 57.029-33.979 22.957-33.976 60.453-40.891 97.027-7.829 41.419-29.408 74.461-64.515 97.949-36.011 24.091-74.016 32.984-117.029 23.829-39.107-8.323-83.872-32.683-105.787-67.144-26.344-41.427-20.616-93.928-10.813-139.478l-7.403-2.296c-42.861-13.448-72.661-33.904-93.621-74.8q-1.896-3.659-3.605-7.405-1.712-3.747-3.232-7.576-1.523-3.829-2.851-7.728-1.328-3.901-2.461-7.861-1.133-3.96-2.067-7.973-.933-4.013-1.667-8.067-.731-4.056-1.259-8.141-.531-4.085-.856-8.192-.323-4.107-.443-8.227-.12-4.117-.035-8.237.088-4.117.379-8.227.291-4.109.787-8.2.499-4.091 1.197-8.149.699-4.061 1.6-8.08.901-4.021 2.003-7.992 1.101-3.971 2.397-7.88c12.029-36.059 37.016-64.293 71.136-80.904 55.16-26.853 113.653-19.808 164.616 13.005 19.061 12.272 38.672 28.573 60.243 35.749 17.592 5.853 31.909 2.403 48.936-3.632 28.683-10.168 56.672-26.456 84.125-39.704q62.861-30.277 126.595-58.675c157.256-71.752 316.456-140.59 470.889-218.256q-4.608-2.568-9.36-4.867c-47.584-22.941-96.304-43.984-144.376-65.907l-254.88-116.768-161.267-73.813c-35.104-16.437-69.771-34.531-105.517-49.525-12.064-5.061-26.339-10.957-39.608-10.896-41.867.195-82.091 50.021-123.211 63.781-35.552 11.901-73.6 6.352-106.613-10.411q-3.469-1.757-6.848-3.685-3.379-1.925-6.659-4.019-3.277-2.091-6.451-4.341-3.171-2.248-6.229-4.653-3.059-2.405-5.992-4.957-2.936-2.552-5.741-5.245-2.805-2.693-5.477-5.523-2.669-2.827-5.195-5.784-2.528-2.957-4.907-6.035-2.376-3.08-4.6-6.269-2.224-3.192-4.288-6.491-2.064-3.296-3.96-6.691-1.899-3.397-3.627-6.88-1.731-3.485-3.285-7.051-1.555-3.565-2.931-7.205-1.376-3.637-2.573-7.339-1.237-3.821-2.285-7.699-1.048-3.877-1.904-7.803-.856-3.925-1.517-7.888-.664-3.96-1.131-7.949-.469-3.992-.739-8-.272-4.005-.347-8.024-.075-4.016.051-8.029.123-4.016.443-8.021.317-4.003.835-7.987.515-3.984 1.227-7.936.709-3.955 1.613-7.869.904-3.912 2-7.779 1.093-3.864 2.379-7.669 1.283-3.808 2.749-7.547 1.469-3.739 3.12-7.4 1.651-3.664 3.477-7.24c21.64-41.944 58.771-62.877 102.232-76.581-5.016-12.667-8.787-25.112-10.291-38.704-4.685-42.333 9.949-85.413 36.747-118.125 28.256-34.499 67.693-54.205 111.784-58.32 23.2-1.997 49.827 4.485 70.843 14.051 52.235 23.779 76.173 64.328 85.171 119.173 3.685 22.459 6.035 45.141 14.397 66.501 7.483 19.115 18.269 32.043 35.771 42.624 25.733 15.56 55.459 26.256 83.083 38.181l152.206 67.021c62.144 29.229 122.813 61.552 184.931 90.797 50.475 23.765 102.219 44.933 152.995 68.064l299.102 136.182zM2001.376 92.878c53.384-7.344 152.128 3.617 207.28 12.417 165.878 26.466 328.376 98.927 429.009 238.639 77.059 106.976 98.685 229.251 88.232 358.848-4.347 53.856-14.773 110.701-39.12 159.411-26.091 52.211-73.645 92.989-83.037 152.886-7.005 44.68 5.261 67.032 30.504 101.907 14.656 20.245 22.203 36.805 17.933 62.035-9.587 56.661-55.283 125.773-102.283 158.326-57.432 39.776-78.128-1.267-131.165-10.165-13.256-2.224-25.211.925-36.085 8.715-36.621 26.221-20.296 71.512-27.379 109.072-4.112 21.805-18.325 36.245-36.288 48.235-20.376 13.6-48.419 25.928-73.461 20.653-21.181-4.461-31.565-22.459-42.365-39.243-2.811 20.467-6.469 37.885-21.571 53.093q-1.277 1.283-2.619 2.496-1.339 1.216-2.739 2.363-1.4 1.147-2.856 2.221-1.453 1.077-2.963 2.077-1.507 1-3.064 1.923-1.555.923-3.155 1.768-1.6.843-3.243 1.605-1.64.763-3.317 1.44-1.677.68-3.387 1.275-1.709.592-3.445 1.099-1.736.507-3.496.925-1.76.421-3.539.749-1.779.331-3.573.571-1.792.24-3.595.389-1.805.149-3.613.208-1.808.059-3.616.027c-25.973-.28-44.96-12.405-62.728-30.293-7.619-8.605-13.467-17.915-19.488-27.648-14.499 24.019-33.925 46.568-61.872 54.557-19.152 5.475-40.885 3.485-58.227-6.552-24.525-14.197-32.251-37.611-38.915-63.384-3.235 5.323-6.797 10.749-10.712 15.589-10.157 12.565-27.776 20.149-43.613 21.403-24.992 1.981-51.768-8.971-70.421-25.237-30.784-26.848-20.528-56.851-23.643-92.296-1.963-22.355-11.427-45.08-29.104-59.547-39.811-32.576-70.477 19.261-108.083 22.965-21.893 2.157-41.451-9.427-57.709-22.891-47.032-38.947-116.776-130.589-96.165-195.046 4.112-12.856 11.675-22.867 19.619-33.552 25.592-34.427 34.875-60.163 23.472-103.152-10.8-40.712-39.645-72.307-62.824-106.285-39.56-57.992-57.139-134.936-63.165-203.952q-.557-6.387-.963-12.787-.403-6.4-.648-12.808-.248-6.408-.339-12.819-.091-6.411-.027-12.824.067-6.411.285-12.821.221-6.408.597-12.808.379-6.403.909-12.792.533-6.389 1.221-12.765.688-6.376 1.531-12.731.843-6.357 1.837-12.691.997-6.336 2.149-12.643 1.149-6.309 2.453-12.587 1.304-6.28 2.76-12.523 1.456-6.245 3.064-12.453 1.608-6.205 3.365-12.373 1.76-6.165 3.667-12.288 1.909-6.123 3.965-12.195 2.056-6.075 4.259-12.096 2.203-6.021 4.552-11.987 2.349-5.968 4.843-11.875 2.493-5.907 5.131-11.752 2.635-5.845 5.413-11.624 2.779-5.779 5.696-11.488 2.917-5.709 5.973-11.347 3.056-5.637 6.248-11.197 3.192-5.56 6.517-11.043 3.328-5.483 6.787-10.88 3.459-5.4 7.048-10.712 3.587-5.315 7.304-10.539 3.717-5.224 7.563-10.355 3.843-5.133 7.808-10.171 3.968-5.037 8.056-9.976C1618.025 153.226 1804.1 110.12 2001.375 92.876zm342.83 937.644c43.773-3.197 87.635-17.379 117.021-51.627 27.357-31.888 37.571-76.917 34.056-118.149-3.013-35.328-17.968-69.072-45.749-91.779-38.013-31.069-94.36-43.011-142.515-38.661-1.344.12-2.677.325-4.005.56-49.728 6.147-102.224 21.227-134.147 62.803-20.293 26.424-25.779 58.803-21.219 91.304 5.947 42.389 27.712 81.933 62.419 107.403 38.928 28.568 86.613 38.776 134.139 38.147zm-561.321-1.645c51.141-7.237 101.432-23.736 134.048-66.603 24.853-32.661 38.547-79.448 32.904-120.344-4.133-29.949-20.624-54.013-44.496-71.997-36.664-27.619-87.045-42.52-132.795-38.92-50.819 4.341-103.528 15.36-138.291 56.277-25.016 29.448-32.915 68.163-29.683 105.957 3.387 39.573 18.611 78.739 49.84 104.525 33.299 27.496 82.552 36.552 124.755 31.699 1.245-.144 2.48-.381 3.717-.595zm274.096 154.968c12.568 14.741 27.651 35.725 48.84 36.864 12.048.645 24.261-6.421 32.688-14.579 12.043-11.659 18.341-27.789 18.464-44.456.309-41.216-46.653-119.971-75.731-148.608-11.208-11.04-19.784-15.307-35.643-15.005q-3.784.085-7.557.408c-44.693 24.021-78.653 86.08-93.269 133.798-5.928 19.349-7.859 40.128 2.253 58.483 6.699 12.163 19.011 22.837 32.389 26.912 8.467 2.579 16.456 1.504 24.195-2.715 13.259-7.227 30.848-36.251 46.541-33.533 2.349.408 4.667 1.461 6.829 2.432z"/></svg>\`;`,layout:`<div id="grid-container">
  <div id="chocolate-bar"></div>
</div>`,css:`:root {
  --chocolate-base-color: #622c06;
  --chocolate-top-border-color: #7b3f10;
  --chocolate-bottom-border-color: #3b1d07;
}

.dark {
  --chocolate-base-color: #a16944;
  --chocolate-top-border-color: #c4916b;
  --chocolate-bottom-border-color: #6d3e1a;
}

#grid-container {
  display: flex;
  justify-content: center;
}

#chocolate-bar {
  display: grid;
}

.square {
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2rem;
  font-weight: bold;
}

.chocolate-square {
  background-color: var(--chocolate-base-color);
  border: 10px solid var(--chocolate-top-border-color);
  border-top-color: var(--chocolate-top-border-color);
  border-left-color: var(--chocolate-top-border-color);
  border-bottom-color: var(--chocolate-bottom-border-color);
  border-right-color: var(--chocolate-bottom-border-color);

  color: var(--color-background);
}

.empty-square {
  color: var(--color-foreground);
}`,metadata:{title:"Chomp",description:"Interactive visualization of a chocolate grid for Chomp puzzle",dateCreated:"2025-11-02T00:00:00.000Z",lastUpdated:"2025-11-09T00:00:00.000Z",published:"published"},scope:"local",sourcePath:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/adversarial-games/chomp/_components/chomp-grid.md"}},wo=`/* Theme overrides and customizations */

:root {
  --width-container: 1000px;
}

/* Text selection styling (applied to both main app and iframes) */
::selection {
  background-color: var(--color-selection);
  color: var(--color-selection-foreground);
}


:root {
  --radius: 0.5rem;

  /* Navy */
  --color-navy-50: oklch(0.97 0.015 220);
  --color-navy-100: oklch(0.94 0.020 220);
  --color-navy-200: oklch(0.88 0.030 220);
  --color-navy-300: oklch(0.80 0.045 220);
  --color-navy-400: oklch(0.68 0.060 220);
  --color-navy-500: oklch(0.55 0.075 220);
  --color-navy-600: oklch(0.45 0.080 220);
  --color-navy-700: oklch(0.35 0.075 220);
  --color-navy-800: oklch(0.27 0.065 220);
  --color-navy-900: oklch(0.20 0.050 220);
  --color-navy-950: oklch(0.15 0.040 220);

  /* Frost */
  --color-frost-50: oklch(0.98 0.010 250);
  --color-frost-100: oklch(0.95 0.015 250);
  --color-frost-200: oklch(0.90 0.025 250);
  --color-frost-300: oklch(0.83 0.035 250);
  --color-frost-400: oklch(0.74 0.045 250);
  --color-frost-500: oklch(0.65 0.055 250);
  --color-frost-600: oklch(0.55 0.060 250);
  --color-frost-700: oklch(0.45 0.055 250);
  --color-frost-800: oklch(0.35 0.045 250);
  --color-frost-900: oklch(0.27 0.035 250);
  --color-frost-950: oklch(0.20 0.025 250);

  /* Lagoon */
  --color-lagoon-50: oklch(0.97 0.015 185);
  --color-lagoon-100: oklch(0.94 0.025 185);
  --color-lagoon-200: oklch(0.88 0.040 185);
  --color-lagoon-300: oklch(0.80 0.055 185);
  --color-lagoon-400: oklch(0.70 0.070 185);
  --color-lagoon-500: oklch(0.60 0.080 185);
  --color-lagoon-600: oklch(0.50 0.085 185);
  --color-lagoon-700: oklch(0.40 0.080 185);
  --color-lagoon-800: oklch(0.32 0.070 185);
  --color-lagoon-900: oklch(0.25 0.055 185);
  --color-lagoon-950: oklch(0.18 0.040 185);

  /* Evergreen */
  --color-evergreen-50: oklch(0.97 0.020 155);
  --color-evergreen-100: oklch(0.93 0.035 155);
  --color-evergreen-200: oklch(0.87 0.055 155);
  --color-evergreen-300: oklch(0.79 0.070 155);
  --color-evergreen-400: oklch(0.69 0.085 155);
  --color-evergreen-500: oklch(0.59 0.095 155);
  --color-evergreen-600: oklch(0.49 0.100 155);
  --color-evergreen-700: oklch(0.41 0.095 155);
  --color-evergreen-800: oklch(0.33 0.080 155);
  --color-evergreen-900: oklch(0.27 0.065 155);
  --color-evergreen-950: oklch(0.21 0.050 155);

  /* Sand */
  --color-sand-50: oklch(0.98 0.012 95);
  --color-sand-100: oklch(0.95 0.020 95);
  --color-sand-200: oklch(0.90 0.035 95);
  --color-sand-300: oklch(0.84 0.050 95);
  --color-sand-400: oklch(0.76 0.065 95);
  --color-sand-500: oklch(0.68 0.080 95);
  --color-sand-600: oklch(0.60 0.090 95);
  --color-sand-700: oklch(0.50 0.085 95);
  --color-sand-800: oklch(0.40 0.070 95);
  --color-sand-900: oklch(0.32 0.055 95);
  --color-sand-950: oklch(0.26 0.040 95);

  /* Error */
  --color-error-50: oklch(0.97 0.020 25);
  --color-error-100: oklch(0.94 0.035 25);
  --color-error-200: oklch(0.88 0.055 25);
  --color-error-300: oklch(0.80 0.075 25);
  --color-error-400: oklch(0.70 0.095 25);
  --color-error-500: oklch(0.60 0.110 25);
  --color-error-600: oklch(0.50 0.115 25);
  --color-error-700: oklch(0.42 0.110 25);
  --color-error-800: oklch(0.34 0.095 25);
  --color-error-900: oklch(0.28 0.075 25);
  --color-error-950: oklch(0.22 0.055 25);

  /* Warning */
  --color-warning-50: oklch(0.97 0.020 75);
  --color-warning-100: oklch(0.94 0.035 75);
  --color-warning-200: oklch(0.89 0.060 75);
  --color-warning-300: oklch(0.82 0.085 75);
  --color-warning-400: oklch(0.73 0.105 75);
  --color-warning-500: oklch(0.65 0.120 75);
  --color-warning-600: oklch(0.56 0.125 75);
  --color-warning-700: oklch(0.47 0.115 75);
  --color-warning-800: oklch(0.38 0.095 75);
  --color-warning-900: oklch(0.30 0.070 75);
  --color-warning-950: oklch(0.24 0.050 75);

  /* Success */
  --color-success-50: oklch(0.97 0.020 165);
  --color-success-100: oklch(0.93 0.035 165);
  --color-success-200: oklch(0.87 0.055 165);
  --color-success-300: oklch(0.79 0.075 165);
  --color-success-400: oklch(0.69 0.095 165);
  --color-success-500: oklch(0.59 0.110 165);
  --color-success-600: oklch(0.49 0.115 165);
  --color-success-700: oklch(0.41 0.105 165);
  --color-success-800: oklch(0.33 0.090 165);
  --color-success-900: oklch(0.27 0.070 165);
  --color-success-950: oklch(0.21 0.050 165);

  /* ======================================================
     Tailwind-like Colour Palette
     Inspired by standard Tailwind CSS v4 colours for
     diagrams and illustrations. For website UI, use the
     mountain theme palette above or semantic colours
     instead.
     ====================================================== */

  /* Red */
  --color-red-50: oklch(0.971 0.008 17.38);
  --color-red-100: oklch(0.936 0.019 17.717);
  --color-red-200: oklch(0.885 0.037 18.334);
  --color-red-300: oklch(0.808 0.068 19.571);
  --color-red-400: oklch(0.704 0.115 22.216);
  --color-red-500: oklch(0.637 0.142 25.331);
  --color-red-600: oklch(0.577 0.147 27.325);
  --color-red-700: oklch(0.505 0.128 27.518);
  --color-red-800: oklch(0.444 0.106 26.899);
  --color-red-900: oklch(0.396 0.085 25.723);
  --color-red-950: oklch(0.258 0.055 26.042);
  --color-red: var(--color-red-400);

  /* Orange */
  --color-orange-50: oklch(0.980 0.010 73.684);
  --color-orange-100: oklch(0.954 0.023 75.164);
  --color-orange-200: oklch(0.901 0.046 70.697);
  --color-orange-300: oklch(0.837 0.077 66.29);
  --color-orange-400: oklch(0.750 0.110 55.934);
  --color-orange-500: oklch(0.705 0.128 47.604);
  --color-orange-600: oklch(0.646 0.133 41.116);
  --color-orange-700: oklch(0.553 0.117 38.402);
  --color-orange-800: oklch(0.470 0.094 37.304);
  --color-orange-900: oklch(0.408 0.074 38.172);
  --color-orange-950: oklch(0.266 0.047 36.259);
  --color-orange: var(--color-orange-400);

  /* Amber */
  --color-amber-50: oklch(0.987 0.013 95.277);
  --color-amber-100: oklch(0.962 0.035 95.617);
  --color-amber-200: oklch(0.924 0.072 95.746);
  --color-amber-300: oklch(0.879 0.101 91.605);
  --color-amber-400: oklch(0.828 0.113 84.429);
  --color-amber-500: oklch(0.769 0.113 70.08);
  --color-amber-600: oklch(0.666 0.107 58.318);
  --color-amber-700: oklch(0.555 0.098 48.998);
  --color-amber-800: oklch(0.473 0.082 46.201);
  --color-amber-900: oklch(0.414 0.067 45.904);
  --color-amber-950: oklch(0.279 0.046 45.635);
  --color-amber: var(--color-amber-400);

  /* Yellow */
  --color-yellow-50: oklch(0.987 0.016 102.212);
  --color-yellow-100: oklch(0.973 0.043 103.193);
  --color-yellow-200: oklch(0.945 0.077 101.54);
  --color-yellow-300: oklch(0.905 0.109 98.111);
  --color-yellow-400: oklch(0.852 0.119 91.936);
  --color-yellow-500: oklch(0.795 0.110 86.047);
  --color-yellow-600: oklch(0.681 0.097 75.834);
  --color-yellow-700: oklch(0.554 0.081 66.442);
  --color-yellow-800: oklch(0.476 0.068 61.907);
  --color-yellow-900: oklch(0.421 0.057 57.708);
  --color-yellow-950: oklch(0.286 0.040 53.813);
  --color-yellow: var(--color-yellow-400);

  /* Lime */
  --color-lime-50: oklch(0.986 0.019 120.757);
  --color-lime-100: oklch(0.967 0.040 122.328);
  --color-lime-200: oklch(0.938 0.076 124.321);
  --color-lime-300: oklch(0.897 0.118 126.665);
  --color-lime-400: oklch(0.841 0.143 128.85);
  --color-lime-500: oklch(0.768 0.140 130.85);
  --color-lime-600: oklch(0.648 0.120 131.684);
  --color-lime-700: oklch(0.532 0.094 131.589);
  --color-lime-800: oklch(0.453 0.074 130.933);
  --color-lime-900: oklch(0.405 0.061 131.063);
  --color-lime-950: oklch(0.274 0.043 132.109);
  --color-lime: var(--color-lime-400);

  /* Green */
  --color-green-50: oklch(0.982 0.011 155.826);
  --color-green-100: oklch(0.962 0.026 156.743);
  --color-green-200: oklch(0.925 0.050 155.995);
  --color-green-300: oklch(0.871 0.090 154.449);
  --color-green-400: oklch(0.792 0.125 151.711);
  --color-green-500: oklch(0.723 0.131 149.579);
  --color-green-600: oklch(0.627 0.116 149.214);
  --color-green-700: oklch(0.527 0.092 150.069);
  --color-green-800: oklch(0.448 0.071 151.328);
  --color-green-900: oklch(0.393 0.057 152.535);
  --color-green-950: oklch(0.266 0.039 152.934);
  --color-green: var(--color-green-400);

  /* Emerald */
  --color-emerald-50: oklch(0.979 0.013 166.113);
  --color-emerald-100: oklch(0.950 0.031 163.051);
  --color-emerald-200: oklch(0.905 0.056 164.15);
  --color-emerald-300: oklch(0.845 0.086 164.978);
  --color-emerald-400: oklch(0.765 0.106 163.223);
  --color-emerald-500: oklch(0.696 0.102 162.48);
  --color-emerald-600: oklch(0.596 0.087 163.225);
  --color-emerald-700: oklch(0.508 0.071 165.612);
  --color-emerald-800: oklch(0.432 0.057 166.913);
  --color-emerald-900: oklch(0.378 0.046 168.94);
  --color-emerald-950: oklch(0.262 0.031 172.552);
  --color-emerald: var(--color-emerald-400);

  /* Teal */
  --color-teal-50: oklch(0.984 0.008 180.72);
  --color-teal-100: oklch(0.953 0.031 180.801);
  --color-teal-200: oklch(0.910 0.058 180.426);
  --color-teal-300: oklch(0.855 0.083 181.071);
  --color-teal-400: oklch(0.777 0.091 181.912);
  --color-teal-500: oklch(0.704 0.084 182.503);
  --color-teal-600: oklch(0.600 0.071 184.704);
  --color-teal-700: oklch(0.511 0.058 186.391);
  --color-teal-800: oklch(0.437 0.047 188.216);
  --color-teal-900: oklch(0.386 0.038 188.416);
  --color-teal-950: oklch(0.277 0.028 192.524);
  --color-teal: var(--color-teal-400);

  /* Cyan */
  --color-cyan-50: oklch(0.984 0.011 200.873);
  --color-cyan-100: oklch(0.956 0.027 203.388);
  --color-cyan-200: oklch(0.917 0.048 205.041);
  --color-cyan-300: oklch(0.865 0.076 207.078);
  --color-cyan-400: oklch(0.789 0.092 211.53);
  --color-cyan-500: oklch(0.715 0.086 215.221);
  --color-cyan-600: oklch(0.609 0.076 221.723);
  --color-cyan-700: oklch(0.520 0.063 223.128);
  --color-cyan-800: oklch(0.450 0.051 224.283);
  --color-cyan-900: oklch(0.398 0.042 227.392);
  --color-cyan-950: oklch(0.302 0.034 229.695);
  --color-cyan: var(--color-cyan-400);

  /* Sky */
  --color-sky-50: oklch(0.977 0.008 236.62);
  --color-sky-100: oklch(0.951 0.016 236.824);
  --color-sky-200: oklch(0.901 0.035 230.902);
  --color-sky-300: oklch(0.828 0.067 230.318);
  --color-sky-400: oklch(0.746 0.096 232.661);
  --color-sky-500: oklch(0.685 0.101 237.323);
  --color-sky-600: oklch(0.588 0.095 241.966);
  --color-sky-700: oklch(0.500 0.080 242.749);
  --color-sky-800: oklch(0.443 0.066 240.79);
  --color-sky-900: oklch(0.391 0.054 240.876);
  --color-sky-950: oklch(0.293 0.040 243.157);
  --color-sky: var(--color-sky-400);

  /* Blue */
  --color-blue-50: oklch(0.970 0.008 254.604);
  --color-blue-100: oklch(0.932 0.019 255.585);
  --color-blue-200: oklch(0.882 0.035 254.128);
  --color-blue-300: oklch(0.809 0.063 251.813);
  --color-blue-400: oklch(0.707 0.099 254.624);
  --color-blue-500: oklch(0.623 0.128 259.815);
  --color-blue-600: oklch(0.546 0.147 262.881);
  --color-blue-700: oklch(0.488 0.146 264.376);
  --color-blue-800: oklch(0.424 0.119 265.638);
  --color-blue-900: oklch(0.379 0.088 265.522);
  --color-blue-950: oklch(0.282 0.055 267.935);
  --color-blue: var(--color-blue-400);

  /* Indigo */
  --color-indigo-50: oklch(0.962 0.011 272.314);
  --color-indigo-100: oklch(0.930 0.020 272.788);
  --color-indigo-200: oklch(0.870 0.039 274.039);
  --color-indigo-300: oklch(0.785 0.069 274.713);
  --color-indigo-400: oklch(0.673 0.109 276.935);
  --color-indigo-500: oklch(0.585 0.140 277.117);
  --color-indigo-600: oklch(0.511 0.157 276.966);
  --color-indigo-700: oklch(0.457 0.144 277.023);
  --color-indigo-800: oklch(0.398 0.117 277.366);
  --color-indigo-900: oklch(0.359 0.086 278.697);
  --color-indigo-950: oklch(0.257 0.054 281.288);
  --color-indigo: var(--color-indigo-400);

  /* Violet */
  --color-violet-50: oklch(0.969 0.010 293.756);
  --color-violet-100: oklch(0.943 0.017 294.588);
  --color-violet-200: oklch(0.894 0.034 293.283);
  --color-violet-300: oklch(0.811 0.067 293.571);
  --color-violet-400: oklch(0.702 0.110 293.541);
  --color-violet-500: oklch(0.606 0.150 292.717);
  --color-violet-600: oklch(0.541 0.169 293.009);
  --color-violet-700: oklch(0.491 0.162 292.581);
  --color-violet-800: oklch(0.432 0.139 292.759);
  --color-violet-900: oklch(0.380 0.113 293.745);
  --color-violet-950: oklch(0.283 0.085 291.089);
  --color-violet: var(--color-violet-400);

  /* Purple */
  --color-purple-50: oklch(0.977 0.008 308.299);
  --color-purple-100: oklch(0.946 0.020 307.174);
  --color-purple-200: oklch(0.902 0.038 306.703);
  --color-purple-300: oklch(0.827 0.071 306.383);
  --color-purple-400: oklch(0.714 0.122 305.504);
  --color-purple-500: oklch(0.627 0.159 303.9);
  --color-purple-600: oklch(0.558 0.173 302.321);
  --color-purple-700: oklch(0.496 0.159 301.924);
  --color-purple-800: oklch(0.438 0.131 303.724);
  --color-purple-900: oklch(0.381 0.106 304.987);
  --color-purple-950: oklch(0.291 0.089 302.717);
  --color-purple: var(--color-purple-400);

  /* Fuchsia */
  --color-fuchsia-50: oklch(0.977 0.010 320.058);
  --color-fuchsia-100: oklch(0.952 0.022 318.852);
  --color-fuchsia-200: oklch(0.903 0.046 319.62);
  --color-fuchsia-300: oklch(0.833 0.087 321.434);
  --color-fuchsia-400: oklch(0.740 0.143 322.16);
  --color-fuchsia-500: oklch(0.667 0.177 322.15);
  --color-fuchsia-600: oklch(0.591 0.176 322.896);
  --color-fuchsia-700: oklch(0.518 0.152 323.949);
  --color-fuchsia-800: oklch(0.452 0.127 324.591);
  --color-fuchsia-900: oklch(0.401 0.102 325.612);
  --color-fuchsia-950: oklch(0.293 0.082 325.661);
  --color-fuchsia: var(--color-fuchsia-400);

  /* Pink */
  --color-pink-50: oklch(0.971 0.008 343.198);
  --color-pink-100: oklch(0.948 0.017 342.258);
  --color-pink-200: oklch(0.899 0.037 343.231);
  --color-pink-300: oklch(0.823 0.072 346.018);
  --color-pink-400: oklch(0.718 0.121 349.761);
  --color-pink-500: oklch(0.656 0.145 354.308);
  --color-pink-600: oklch(0.592 0.149 0.584);
  --color-pink-700: oklch(0.525 0.134 3.958);
  --color-pink-800: oklch(0.459 0.112 3.815);
  --color-pink-900: oklch(0.408 0.092 2.432);
  --color-pink-950: oklch(0.284 0.065 3.907);
  --color-pink: var(--color-pink-400);

  /* Rose */
  --color-rose-50: oklch(0.969 0.009 12.422);
  --color-rose-100: oklch(0.941 0.018 12.58);
  --color-rose-200: oklch(0.892 0.035 10.001);
  --color-rose-300: oklch(0.810 0.070 11.638);
  --color-rose-400: oklch(0.712 0.116 13.428);
  --color-rose-500: oklch(0.645 0.148 16.439);
  --color-rose-600: oklch(0.586 0.152 17.585);
  --color-rose-700: oklch(0.514 0.133 16.935);
  --color-rose-800: oklch(0.455 0.113 13.697);
  --color-rose-900: oklch(0.410 0.095 10.272);
  --color-rose-950: oklch(0.271 0.063 12.094);
  --color-rose: var(--color-rose-400);

  /* Slate */
  --color-slate-50: oklch(0.984 0.002 247.858);
  --color-slate-100: oklch(0.968 0.004 247.896);
  --color-slate-200: oklch(0.929 0.008 255.508);
  --color-slate-300: oklch(0.869 0.013 252.894);
  --color-slate-400: oklch(0.704 0.024 256.788);
  --color-slate-500: oklch(0.554 0.028 257.417);
  --color-slate-600: oklch(0.446 0.026 257.281);
  --color-slate-700: oklch(0.372 0.026 257.287);
  --color-slate-800: oklch(0.279 0.025 260.031);
  --color-slate-900: oklch(0.208 0.025 265.755);
  --color-slate-950: oklch(0.129 0.025 264.695);
  --color-slate: var(--color-slate-400);

  /* Gray */
  --color-gray-50: oklch(0.985 0.001 247.839);
  --color-gray-100: oklch(0.967 0.002 264.542);
  --color-gray-200: oklch(0.928 0.004 264.531);
  --color-gray-300: oklch(0.872 0.006 258.338);
  --color-gray-400: oklch(0.707 0.013 261.325);
  --color-gray-500: oklch(0.551 0.016 264.364);
  --color-gray-600: oklch(0.446 0.018 256.802);
  --color-gray-700: oklch(0.373 0.020 259.733);
  --color-gray-800: oklch(0.278 0.020 256.848);
  --color-gray-900: oklch(0.210 0.020 264.665);
  --color-gray-950: oklch(0.130 0.017 261.692);
  --color-gray: var(--color-gray-400);

  /* Zinc */
  --color-zinc-50: oklch(0.985 0 0);
  --color-zinc-100: oklch(0.967 0.001 286.375);
  --color-zinc-200: oklch(0.920 0.002 286.32);
  --color-zinc-300: oklch(0.871 0.004 286.286);
  --color-zinc-400: oklch(0.705 0.009 286.067);
  --color-zinc-500: oklch(0.552 0.010 285.938);
  --color-zinc-600: oklch(0.442 0.010 285.786);
  --color-zinc-700: oklch(0.370 0.008 285.805);
  --color-zinc-800: oklch(0.274 0.004 286.033);
  --color-zinc-900: oklch(0.210 0.004 285.885);
  --color-zinc-950: oklch(0.141 0.003 285.823);
  --color-zinc: var(--color-zinc-400);

  /* Neutral */
  --color-neutral-50: oklch(0.985 0 0);
  --color-neutral-100: oklch(0.970 0 0);
  --color-neutral-200: oklch(0.922 0 0);
  --color-neutral-300: oklch(0.870 0 0);
  --color-neutral-400: oklch(0.708 0 0);
  --color-neutral-500: oklch(0.556 0 0);
  --color-neutral-600: oklch(0.439 0 0);
  --color-neutral-700: oklch(0.371 0 0);
  --color-neutral-800: oklch(0.269 0 0);
  --color-neutral-900: oklch(0.205 0 0);
  --color-neutral-950: oklch(0.145 0 0);
  --color-neutral: var(--color-neutral-400);

  /* Stone */
  --color-stone-50: oklch(0.985 0.001 106.423);
  --color-stone-100: oklch(0.970 0.001 106.424);
  --color-stone-200: oklch(0.923 0.002 48.717);
  --color-stone-300: oklch(0.869 0.003 56.366);
  --color-stone-400: oklch(0.709 0.006 56.259);
  --color-stone-500: oklch(0.553 0.008 58.071);
  --color-stone-600: oklch(0.444 0.007 73.639);
  --color-stone-700: oklch(0.374 0.006 67.558);
  --color-stone-800: oklch(0.268 0.004 34.298);
  --color-stone-900: oklch(0.216 0.004 56.043);
  --color-stone-950: oklch(0.147 0.002 49.25);
  --color-stone: var(--color-stone-400);

  /* Pure white */
  --color-white: oklch(1 0 0);
}

/* Semantic UI Theme Variables */

:root {
  /* Base colors */
  --color-background: var(--color-frost-50);
  --color-foreground: var(--color-navy-950);

  /* Card */
  --color-card: var(--color-white);
  --color-card-foreground: var(--color-navy-950);

  /* Popover */
  --color-popover: var(--color-white);
  --color-popover-foreground: var(--color-navy-950);

  /* Primary */
  --color-primary: var(--color-navy-600);
  --color-primary-foreground: var(--color-white);

  /* Secondary */
  --color-secondary: var(--color-evergreen-600);
  --color-secondary-foreground: var(--color-white);

  /* Muted */
  --color-muted: var(--color-frost-100);
  --color-muted-foreground: var(--color-navy-600);

  /* Accent */
  --color-accent: var(--color-sand-600);
  --color-accent-foreground: var(--color-white);

  /* Destructive */
  --color-destructive: var(--color-error-600);
  --color-destructive-foreground: var(--color-white);

  /* Success */
  --color-success: var(--color-success-600);
  --color-success-foreground: var(--color-white);

  /* Completed (for puzzle/expedition completion badges) */
  --color-completed: var(--color-evergreen-500);
  --color-completed-foreground: var(--color-white);

  /* Warning */
  --color-warning: var(--color-warning-600);
  --color-warning-foreground: var(--color-white);

  /* Info */
  --color-info: var(--color-navy-500);
  --color-info-foreground: var(--color-white);

  /* Border */
  --color-border: var(--color-frost-600);
  --color-input: var(--color-frost-300);
  --color-ring: var(--color-navy-400);

  /* Additional semantic colors for UI elements */
  --color-divider: var(--color-frost-200);
  --color-surface: var(--color-white);
  --color-text-secondary: var(--color-frost-600);
  --color-text-emphasis: var(--color-navy-600);
  --color-link: var(--color-navy-600);
  --color-link-hover: var(--color-navy-700);

  /* Select component */
  --color-select-hover: var(--color-navy-50);
  --color-select-hover-foreground: var(--color-navy-950);

  /* Checkbox */
  --color-checkbox-checked: var(--color-navy-600);
  --color-checkbox-checked-foreground: var(--color-white);

  /* Navigation */
  --color-nav-foreground: var(--color-navy-600);

  /* Text selection */
  --color-selection: var(--color-navy-200);
  --color-selection-foreground: var(--color-navy-900);

  /* Difficulty levels (puzzles) */
  --color-difficulty-easy: var(--color-success-100);
  --color-difficulty-easy-foreground: var(--color-success-800);
  --color-difficulty-medium: var(--color-navy-100);
  --color-difficulty-medium-foreground: var(--color-navy-800);
  --color-difficulty-hard: var(--color-warning-100);
  --color-difficulty-hard-foreground: var(--color-warning-800);
  --color-difficulty-expert: var(--color-error-100);
  --color-difficulty-expert-foreground: var(--color-error-800);
  --color-difficulty-open: var(--color-frost-200);
  --color-difficulty-open-foreground: var(--color-frost-900);

  /* Gradients */
  --gradient-recommendation-start: var(--color-evergreen-500);
  --gradient-recommendation-end: var(--color-navy-500);
  --gradient-progress-start: var(--color-lagoon-600);
  --gradient-progress-end: var(--color-lagoon-500);
}


.dark {
  /* Base colors */
  --color-background: oklch(0.10 0.035 220); /* darker than navy-950, almost pure black */
  --color-foreground: var(--color-frost-200);

  /* Card */
  --color-card: var(--color-navy-900);
  --color-card-foreground: var(--color-frost-200);

  /* Popover */
  --color-popover: var(--color-navy-900);
  --color-popover-foreground: var(--color-frost-200);

  /* Primary */
  --color-primary: var(--color-navy-400);
  --color-primary-foreground: var(--color-navy-950);

  /* Secondary */
  --color-secondary: var(--color-evergreen-400);
  --color-secondary-foreground: var(--color-navy-950);

  /* Muted */
  --color-muted: var(--color-navy-800);
  --color-muted-foreground: var(--color-frost-400);

  /* Accent */
  --color-accent: var(--color-sand-400);
  --color-accent-foreground: var(--color-navy-950);

  /* Destructive */
  --color-destructive: var(--color-error-400);
  --color-destructive-foreground: var(--color-navy-950);

  /* Success */
  --color-success: var(--color-success-400);
  --color-success-foreground: var(--color-navy-950);

  /* Completed (for puzzle/expedition completion badges) */
  --color-completed: var(--color-evergreen-300);
  --color-completed-foreground: var(--color-navy-950);

  /* Warning */
  --color-warning: var(--color-warning-400);
  --color-warning-foreground: var(--color-navy-950);

  /* Info */
  --color-info: var(--color-navy-300);
  --color-info-foreground: var(--color-navy-950);

  /* Border */
  --color-border: var(--color-navy-700);
  --color-input: var(--color-navy-600);
  --color-ring: var(--color-navy-400);

  /* Additional semantic colors for UI elements */
  --color-divider: var(--color-navy-700);
  --color-surface: var(--color-navy-900);
  --color-text-secondary: var(--color-frost-400);
  --color-text-emphasis: var(--color-frost-50);
  --color-link: var(--color-navy-400);
  --color-link-hover: var(--color-navy-300);

  /* Select component */
  --color-select-hover: var(--color-navy-800);
  --color-select-hover-foreground: var(--color-frost-200);

  /* Checkbox */
  --color-checkbox-checked: var(--color-navy-400);
  --color-checkbox-checked-foreground: var(--color-navy-950);

  /* Navigation */
  --color-nav-foreground: var(--color-frost-200);

  /* Text selection */
  --color-selection: var(--color-navy-700);
  --color-selection-foreground: var(--color-navy-100);

  /* Difficulty levels (puzzles) - dark mode */
  --color-difficulty-easy: var(--color-success-900);
  --color-difficulty-easy-foreground: var(--color-success-200);
  --color-difficulty-medium: var(--color-navy-900);
  --color-difficulty-medium-foreground: var(--color-navy-200);
  --color-difficulty-hard: var(--color-warning-900);
  --color-difficulty-hard-foreground: var(--color-warning-200);
  --color-difficulty-expert: var(--color-error-900);
  --color-difficulty-expert-foreground: var(--color-error-200);
  --color-difficulty-open: var(--color-frost-700);
  --color-difficulty-open-foreground: var(--color-frost-200);

  /* Gradients - dark mode */
  --gradient-recommendation-start: var(--color-evergreen-600);
  --gradient-recommendation-end: var(--color-navy-600);
  --gradient-progress-start: var(--color-lagoon-600);
  --gradient-progress-end: var(--color-lagoon-500);
}
`,Eo=300;function Co({blockData:e,blockId:o,inlineComponents:i}){const l=ue.useRef(null),[p,f]=ue.useState(Eo),[m]=Qt(),s=ue.useRef("");s.current||(s.current=To(e,vo,yo,wo,i)),ue.useEffect(()=>{const r=d=>{if(d.source===l.current?.contentWindow&&d.data?.event==="resize-request"){const{height:g}=d.data.data;typeof g=="number"&&g>0&&f(g)}};return window.addEventListener("message",r),()=>window.removeEventListener("message",r)},[]),ue.useEffect(()=>{const r=l.current;if(!r||!r.contentWindow)return;const d=()=>{r.contentWindow?.postMessage({event:"theme-change",data:{theme:m?"dark":"light"}},"*")};return d(),r.addEventListener("load",d),()=>r.removeEventListener("load",d)},[m]);const a=typeof e.props?.minWidth=="number"?e.props.minWidth:0;return L.jsx("div",{className:`dynamic-block-container ${a>0?"overflow-x-auto":"flex justify-center"}`,children:L.jsx("iframe",{className:"border-0 block",ref:l,sandbox:"allow-scripts",srcDoc:s.current,style:{width:e.width||"100%",...a>0&&{minWidth:`${a}px`},height:`${p}px`},title:e.title||`Interactive content ${o}`})})}function xo(e,o){if(!e.startsWith("./"))return e;if(!o)return console.error(`[DynamicBlock Error] Local component reference "${e}" requires sourceFile path, but none was provided.`),null;const i=e.substring(2),l=o.split(/[/\\]/);return`local:${l[l.length-2]||"unknown"}:${i}`}function To(e,o,i,l,p){let f=(e.mode==="dom"||e.mode==="canvas")&&e.code||"",m=e.mode==="dom"&&e.layout||"",s=e.mode==="dom"&&e.css||"",a=e.startLine;if(e.mode==="component"&&e.componentId)if(e.componentId.startsWith("#")){const E=e.componentId.substring(1),S=p?.[E];S?(f=S.code,m=S.layout||"",s=S.css||"",a=S.startLine):(console.error(`[DynamicBlock Error] Inline component not found: "${e.componentId}"
Expected: A :::component[${E}] definition in the same file.
Make sure the component is defined before it's used.`),f="",m="",s="")}else{const E=xo(e.componentId,e.sourceFile);if(!E)f="",m="",s="";else{const S=ko[E];if(S)f=S.code,m=S.layout||"",s=S.css||"";else{const k=e.componentId.startsWith("./");console.error(k?`[DynamicBlock Error] Local component not found: "${e.componentId}"
Expected: A file named "${e.componentId.substring(2)}.md" in _components/ subdirectory
Source file: ${e.sourceFile||"unknown"}
Resolved to scoped ID: ${E}
Make sure the _components/ directory exists and the component file is present.`:`[DynamicBlock Error] Shared component not found: "${e.componentId}"
Expected: A file named "${e.componentId}.md" in content/components/ (searched recursively)
Make sure the component file exists and has been registered in the component registry.`),f="",m="",s=""}}}const r=JSON.stringify(e.props||{}),d=e.mode==="canvas"?e.ariaLabel:void 0,g=JSON.stringify(d||null);let C="",P="";if(e.sourceFile&&a&&f){const E=e.sourceFile.indexOf("content/");C=`//# sourceURL=${E!==-1?e.sourceFile.substring(E):e.sourceFile.split("/").slice(-2).join("/")}
`;const k=a-2;k>0&&(P=`
`.repeat(k))}return`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data:;">
  <style>
    /* Prevent scrollbars in iframe while allowing content to expand */
    html, body {
      margin: 0;
      padding: 0;
      overflow: hidden;
      height: auto;
      min-height: 0;
    }

    body {
      display: flex;
      flex-direction: column;
    }

    #root {
      /* flex: 1; */
      /* min-height: 0; */
    }

    /* Theme CSS variables (light/dark mode) */
    ${l}

    ${i}
    ${s?`

    /* Custom CSS from author or inline component */
    ${s}`:""}
  </style>
</head>
<body>
  <div id="root">${m}</div>

  <!-- Runtime and globals script -->
  <script>
    // Component props (available globally)
    window.__COMPONENT_PROPS__ = ${r};

    // Canvas accessibility label (for canvas mode blocks)
    window.__CANVAS_ARIA_LABEL__ = ${g};

    // Injected sandbox runtime
    ${o}
  <\/script>

  <!-- User code script with source mapping -->
  <script>${C}${P}${f?`${f}`:""}<\/script>

  <!-- Execution script -->
  <script>
    // Execute mount() if defined, passing props
    if (typeof executeMountIfExists === 'function') {
      executeMountIfExists(window.__COMPONENT_PROPS__);
    }

    // Execute draw() if defined, passing props
    if (typeof executeDrawIfExists === 'function') {
      executeDrawIfExists(window.__COMPONENT_PROPS__);
    }
  <\/script>
</body>
</html>`}function tr({content:e,dynamicBlocks:o=[],inlineComponents:i}){const l=ue.useMemo(()=>{const p={replace(f){if(f instanceof We.Element){if(f.attribs?.class?.split(/\s+/).includes("dynamic-block-placeholder")&&f.attribs["data-dynamic-block-id"]){const m=parseInt(f.attribs["data-dynamic-block-id"],10);if(isNaN(m)||m<0||m>=o.length)return;const s=o[m];return s?L.jsx(eo,{context:"dynamic-block",children:L.jsx(Co,{blockId:m,blockData:s,inlineComponents:i})}):void 0}if(f.name==="a"){const m=f.attribs?.href;if(m?.startsWith("/puzzle/")||m?.startsWith("/expedition/")){const s=We.attributesToProps(f.attribs,"a"),{href:a,...r}=s;return L.jsx(Ht,{to:m,...r,children:We.domToReact(f.children,p)})}}}}};return bo(e,p)},[e,o,i]);return L.jsx("div",{className:"markdown-content prose max-w-none space-y-4",children:l})}/*! @license DOMPurify 3.3.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.0/LICENSE */const{entries:Tt,setPrototypeOf:dt,isFrozen:_o,getPrototypeOf:So,getOwnPropertyDescriptor:Ao}=Object;let{freeze:G,seal:J,create:bn}=Object,{apply:vn,construct:yn}=typeof Reflect<"u"&&Reflect;G||(G=function(o){return o});J||(J=function(o){return o});vn||(vn=function(o,i){for(var l=arguments.length,p=new Array(l>2?l-2:0),f=2;f<l;f++)p[f-2]=arguments[f];return o.apply(i,p)});yn||(yn=function(o){for(var i=arguments.length,l=new Array(i>1?i-1:0),p=1;p<i;p++)l[p-1]=arguments[p];return new o(...l)});const qe=X(Array.prototype.forEach),Mo=X(Array.prototype.lastIndexOf),pt=X(Array.prototype.pop),Re=X(Array.prototype.push),Ro=X(Array.prototype.splice),Ge=X(String.prototype.toLowerCase),un=X(String.prototype.toString),dn=X(String.prototype.match),Ne=X(String.prototype.replace),No=X(String.prototype.indexOf),Oo=X(String.prototype.trim),Q=X(Object.prototype.hasOwnProperty),W=X(RegExp.prototype.test),Oe=Io(TypeError);function X(e){return function(o){o instanceof RegExp&&(o.lastIndex=0);for(var i=arguments.length,l=new Array(i>1?i-1:0),p=1;p<i;p++)l[p-1]=arguments[p];return vn(e,o,l)}}function Io(e){return function(){for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return yn(e,i)}}function M(e,o){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ge;dt&&dt(e,null);let l=o.length;for(;l--;){let p=o[l];if(typeof p=="string"){const f=i(p);f!==p&&(_o(o)||(o[l]=f),p=f)}e[p]=!0}return e}function Po(e){for(let o=0;o<e.length;o++)Q(e,o)||(e[o]=null);return e}function re(e){const o=bn(null);for(const[i,l]of Tt(e))Q(e,i)&&(Array.isArray(l)?o[i]=Po(l):l&&typeof l=="object"&&l.constructor===Object?o[i]=re(l):o[i]=l);return o}function Ie(e,o){for(;e!==null;){const l=Ao(e,o);if(l){if(l.get)return X(l.get);if(typeof l.value=="function")return X(l.value)}e=So(e)}function i(){return null}return i}const ht=G(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),pn=G(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),hn=G(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Lo=G(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),fn=G(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),$o=G(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ft=G(["#text"]),mt=G(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),mn=G(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),gt=G(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Be=G(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Do=J(/\{\{[\w\W]*|[\w\W]*\}\}/gm),zo=J(/<%[\w\W]*|[\w\W]*%>/gm),Ho=J(/\$\{[\w\W]*/gm),Fo=J(/^data-[\-\w.\u00B7-\uFFFF]+$/),Uo=J(/^aria-[\-\w]+$/),_t=J(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),jo=J(/^(?:\w+script|data):/i),Vo=J(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),St=J(/^html$/i),qo=J(/^[a-z][.\w]*(-[.\w]+)+$/i);var bt=Object.freeze({__proto__:null,ARIA_ATTR:Uo,ATTR_WHITESPACE:Vo,CUSTOM_ELEMENT:qo,DATA_ATTR:Fo,DOCTYPE_NAME:St,ERB_EXPR:zo,IS_ALLOWED_URI:_t,IS_SCRIPT_OR_DATA:jo,MUSTACHE_EXPR:Do,TMPLIT_EXPR:Ho});const Pe={element:1,text:3,progressingInstruction:7,comment:8,document:9},Bo=function(){return typeof window>"u"?null:window},Wo=function(o,i){if(typeof o!="object"||typeof o.createPolicy!="function")return null;let l=null;const p="data-tt-policy-suffix";i&&i.hasAttribute(p)&&(l=i.getAttribute(p));const f="dompurify"+(l?"#"+l:"");try{return o.createPolicy(f,{createHTML(m){return m},createScriptURL(m){return m}})}catch{return console.warn("TrustedTypes policy "+f+" could not be created."),null}},vt=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function At(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Bo();const o=v=>At(v);if(o.version="3.3.0",o.removed=[],!e||!e.document||e.document.nodeType!==Pe.document||!e.Element)return o.isSupported=!1,o;let{document:i}=e;const l=i,p=l.currentScript,{DocumentFragment:f,HTMLTemplateElement:m,Node:s,Element:a,NodeFilter:r,NamedNodeMap:d=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:g,DOMParser:C,trustedTypes:P}=e,E=a.prototype,S=Ie(E,"cloneNode"),k=Ie(E,"remove"),x=Ie(E,"nextSibling"),$=Ie(E,"childNodes"),R=Ie(E,"parentNode");if(typeof m=="function"){const v=i.createElement("template");v.content&&v.content.ownerDocument&&(i=v.content.ownerDocument)}let O,t="";const{implementation:c,createNodeIterator:u,createDocumentFragment:y,getElementsByTagName:_}=i,{importNode:I}=l;let w=vt();o.isSupported=typeof Tt=="function"&&typeof R=="function"&&c&&c.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:q,ERB_EXPR:ae,TMPLIT_EXPR:N,DATA_ATTR:A,ARIA_ATTR:Z,IS_SCRIPT_OR_DATA:Xe,ATTR_WHITESPACE:kn,CUSTOM_ELEMENT:Mt}=bt;let{IS_ALLOWED_URI:wn}=bt,F=null;const En=M({},[...ht,...pn,...hn,...fn,...ft]);let j=null;const Cn=M({},[...mt,...mn,...gt,...Be]);let z=Object.seal(bn(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ee=null,Ye=null;const de=Object.seal(bn(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let xn=!0,Ze=!0,Tn=!1,_n=!0,pe=!1,Le=!0,le=!1,Ke=!1,Je=!1,he=!1,$e=!1,De=!1,Sn=!0,An=!1;const Rt="user-content-";let Qe=!0,Ce=!1,fe={},me=null;const Mn=M({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Rn=null;const Nn=M({},["audio","video","img","source","image","track"]);let en=null;const On=M({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ze="http://www.w3.org/1998/Math/MathML",He="http://www.w3.org/2000/svg",ne="http://www.w3.org/1999/xhtml";let ge=ne,nn=!1,tn=null;const Nt=M({},[ze,He,ne],un);let Fe=M({},["mi","mo","mn","ms","mtext"]),Ue=M({},["annotation-xml"]);const Ot=M({},["title","style","font","a","script"]);let xe=null;const It=["application/xhtml+xml","text/html"],Pt="text/html";let U=null,be=null;const Lt=i.createElement("form"),In=function(n){return n instanceof RegExp||n instanceof Function},on=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(be&&be===n)){if((!n||typeof n!="object")&&(n={}),n=re(n),xe=It.indexOf(n.PARSER_MEDIA_TYPE)===-1?Pt:n.PARSER_MEDIA_TYPE,U=xe==="application/xhtml+xml"?un:Ge,F=Q(n,"ALLOWED_TAGS")?M({},n.ALLOWED_TAGS,U):En,j=Q(n,"ALLOWED_ATTR")?M({},n.ALLOWED_ATTR,U):Cn,tn=Q(n,"ALLOWED_NAMESPACES")?M({},n.ALLOWED_NAMESPACES,un):Nt,en=Q(n,"ADD_URI_SAFE_ATTR")?M(re(On),n.ADD_URI_SAFE_ATTR,U):On,Rn=Q(n,"ADD_DATA_URI_TAGS")?M(re(Nn),n.ADD_DATA_URI_TAGS,U):Nn,me=Q(n,"FORBID_CONTENTS")?M({},n.FORBID_CONTENTS,U):Mn,Ee=Q(n,"FORBID_TAGS")?M({},n.FORBID_TAGS,U):re({}),Ye=Q(n,"FORBID_ATTR")?M({},n.FORBID_ATTR,U):re({}),fe=Q(n,"USE_PROFILES")?n.USE_PROFILES:!1,xn=n.ALLOW_ARIA_ATTR!==!1,Ze=n.ALLOW_DATA_ATTR!==!1,Tn=n.ALLOW_UNKNOWN_PROTOCOLS||!1,_n=n.ALLOW_SELF_CLOSE_IN_ATTR!==!1,pe=n.SAFE_FOR_TEMPLATES||!1,Le=n.SAFE_FOR_XML!==!1,le=n.WHOLE_DOCUMENT||!1,he=n.RETURN_DOM||!1,$e=n.RETURN_DOM_FRAGMENT||!1,De=n.RETURN_TRUSTED_TYPE||!1,Je=n.FORCE_BODY||!1,Sn=n.SANITIZE_DOM!==!1,An=n.SANITIZE_NAMED_PROPS||!1,Qe=n.KEEP_CONTENT!==!1,Ce=n.IN_PLACE||!1,wn=n.ALLOWED_URI_REGEXP||_t,ge=n.NAMESPACE||ne,Fe=n.MATHML_TEXT_INTEGRATION_POINTS||Fe,Ue=n.HTML_INTEGRATION_POINTS||Ue,z=n.CUSTOM_ELEMENT_HANDLING||{},n.CUSTOM_ELEMENT_HANDLING&&In(n.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(z.tagNameCheck=n.CUSTOM_ELEMENT_HANDLING.tagNameCheck),n.CUSTOM_ELEMENT_HANDLING&&In(n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(z.attributeNameCheck=n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),n.CUSTOM_ELEMENT_HANDLING&&typeof n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(z.allowCustomizedBuiltInElements=n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),pe&&(Ze=!1),$e&&(he=!0),fe&&(F=M({},ft),j=[],fe.html===!0&&(M(F,ht),M(j,mt)),fe.svg===!0&&(M(F,pn),M(j,mn),M(j,Be)),fe.svgFilters===!0&&(M(F,hn),M(j,mn),M(j,Be)),fe.mathMl===!0&&(M(F,fn),M(j,gt),M(j,Be))),n.ADD_TAGS&&(typeof n.ADD_TAGS=="function"?de.tagCheck=n.ADD_TAGS:(F===En&&(F=re(F)),M(F,n.ADD_TAGS,U))),n.ADD_ATTR&&(typeof n.ADD_ATTR=="function"?de.attributeCheck=n.ADD_ATTR:(j===Cn&&(j=re(j)),M(j,n.ADD_ATTR,U))),n.ADD_URI_SAFE_ATTR&&M(en,n.ADD_URI_SAFE_ATTR,U),n.FORBID_CONTENTS&&(me===Mn&&(me=re(me)),M(me,n.FORBID_CONTENTS,U)),Qe&&(F["#text"]=!0),le&&M(F,["html","head","body"]),F.table&&(M(F,["tbody"]),delete Ee.tbody),n.TRUSTED_TYPES_POLICY){if(typeof n.TRUSTED_TYPES_POLICY.createHTML!="function")throw Oe('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof n.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Oe('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');O=n.TRUSTED_TYPES_POLICY,t=O.createHTML("")}else O===void 0&&(O=Wo(P,p)),O!==null&&typeof t=="string"&&(t=O.createHTML(""));G&&G(n),be=n}},Pn=M({},[...pn,...hn,...Lo]),Ln=M({},[...fn,...$o]),$t=function(n){let h=R(n);(!h||!h.tagName)&&(h={namespaceURI:ge,tagName:"template"});const b=Ge(n.tagName),D=Ge(h.tagName);return tn[n.namespaceURI]?n.namespaceURI===He?h.namespaceURI===ne?b==="svg":h.namespaceURI===ze?b==="svg"&&(D==="annotation-xml"||Fe[D]):!!Pn[b]:n.namespaceURI===ze?h.namespaceURI===ne?b==="math":h.namespaceURI===He?b==="math"&&Ue[D]:!!Ln[b]:n.namespaceURI===ne?h.namespaceURI===He&&!Ue[D]||h.namespaceURI===ze&&!Fe[D]?!1:!Ln[b]&&(Ot[b]||!Pn[b]):!!(xe==="application/xhtml+xml"&&tn[n.namespaceURI]):!1},ee=function(n){Re(o.removed,{element:n});try{R(n).removeChild(n)}catch{k(n)}},ce=function(n,h){try{Re(o.removed,{attribute:h.getAttributeNode(n),from:h})}catch{Re(o.removed,{attribute:null,from:h})}if(h.removeAttribute(n),n==="is")if(he||$e)try{ee(h)}catch{}else try{h.setAttribute(n,"")}catch{}},$n=function(n){let h=null,b=null;if(Je)n="<remove></remove>"+n;else{const H=dn(n,/^[\r\n\t ]+/);b=H&&H[0]}xe==="application/xhtml+xml"&&ge===ne&&(n='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+n+"</body></html>");const D=O?O.createHTML(n):n;if(ge===ne)try{h=new C().parseFromString(D,xe)}catch{}if(!h||!h.documentElement){h=c.createDocument(ge,"template",null);try{h.documentElement.innerHTML=nn?t:D}catch{}}const B=h.body||h.documentElement;return n&&b&&B.insertBefore(i.createTextNode(b),B.childNodes[0]||null),ge===ne?_.call(h,le?"html":"body")[0]:le?h.documentElement:B},Dn=function(n){return u.call(n.ownerDocument||n,n,r.SHOW_ELEMENT|r.SHOW_COMMENT|r.SHOW_TEXT|r.SHOW_PROCESSING_INSTRUCTION|r.SHOW_CDATA_SECTION,null)},rn=function(n){return n instanceof g&&(typeof n.nodeName!="string"||typeof n.textContent!="string"||typeof n.removeChild!="function"||!(n.attributes instanceof d)||typeof n.removeAttribute!="function"||typeof n.setAttribute!="function"||typeof n.namespaceURI!="string"||typeof n.insertBefore!="function"||typeof n.hasChildNodes!="function")},zn=function(n){return typeof s=="function"&&n instanceof s};function te(v,n,h){qe(v,b=>{b.call(o,n,h,be)})}const Hn=function(n){let h=null;if(te(w.beforeSanitizeElements,n,null),rn(n))return ee(n),!0;const b=U(n.nodeName);if(te(w.uponSanitizeElement,n,{tagName:b,allowedTags:F}),Le&&n.hasChildNodes()&&!zn(n.firstElementChild)&&W(/<[/\w!]/g,n.innerHTML)&&W(/<[/\w!]/g,n.textContent)||n.nodeType===Pe.progressingInstruction||Le&&n.nodeType===Pe.comment&&W(/<[/\w]/g,n.data))return ee(n),!0;if(!(de.tagCheck instanceof Function&&de.tagCheck(b))&&(!F[b]||Ee[b])){if(!Ee[b]&&Un(b)&&(z.tagNameCheck instanceof RegExp&&W(z.tagNameCheck,b)||z.tagNameCheck instanceof Function&&z.tagNameCheck(b)))return!1;if(Qe&&!me[b]){const D=R(n)||n.parentNode,B=$(n)||n.childNodes;if(B&&D){const H=B.length;for(let Y=H-1;Y>=0;--Y){const oe=S(B[Y],!0);oe.__removalCount=(n.__removalCount||0)+1,D.insertBefore(oe,x(n))}}}return ee(n),!0}return n instanceof a&&!$t(n)||(b==="noscript"||b==="noembed"||b==="noframes")&&W(/<\/no(script|embed|frames)/i,n.innerHTML)?(ee(n),!0):(pe&&n.nodeType===Pe.text&&(h=n.textContent,qe([q,ae,N],D=>{h=Ne(h,D," ")}),n.textContent!==h&&(Re(o.removed,{element:n.cloneNode()}),n.textContent=h)),te(w.afterSanitizeElements,n,null),!1)},Fn=function(n,h,b){if(Sn&&(h==="id"||h==="name")&&(b in i||b in Lt))return!1;if(!(Ze&&!Ye[h]&&W(A,h))){if(!(xn&&W(Z,h))){if(!(de.attributeCheck instanceof Function&&de.attributeCheck(h,n))){if(!j[h]||Ye[h]){if(!(Un(n)&&(z.tagNameCheck instanceof RegExp&&W(z.tagNameCheck,n)||z.tagNameCheck instanceof Function&&z.tagNameCheck(n))&&(z.attributeNameCheck instanceof RegExp&&W(z.attributeNameCheck,h)||z.attributeNameCheck instanceof Function&&z.attributeNameCheck(h,n))||h==="is"&&z.allowCustomizedBuiltInElements&&(z.tagNameCheck instanceof RegExp&&W(z.tagNameCheck,b)||z.tagNameCheck instanceof Function&&z.tagNameCheck(b))))return!1}else if(!en[h]){if(!W(wn,Ne(b,kn,""))){if(!((h==="src"||h==="xlink:href"||h==="href")&&n!=="script"&&No(b,"data:")===0&&Rn[n])){if(!(Tn&&!W(Xe,Ne(b,kn,"")))){if(b)return!1}}}}}}}return!0},Un=function(n){return n!=="annotation-xml"&&dn(n,Mt)},jn=function(n){te(w.beforeSanitizeAttributes,n,null);const{attributes:h}=n;if(!h||rn(n))return;const b={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:j,forceKeepAttr:void 0};let D=h.length;for(;D--;){const B=h[D],{name:H,namespaceURI:Y,value:oe}=B,ve=U(H),an=oe;let V=H==="value"?an:Oo(an);if(b.attrName=ve,b.attrValue=V,b.keepAttr=!0,b.forceKeepAttr=void 0,te(w.uponSanitizeAttribute,n,b),V=b.attrValue,An&&(ve==="id"||ve==="name")&&(ce(H,n),V=Rt+V),Le&&W(/((--!?|])>)|<\/(style|title|textarea)/i,V)){ce(H,n);continue}if(ve==="attributename"&&dn(V,"href")){ce(H,n);continue}if(b.forceKeepAttr)continue;if(!b.keepAttr){ce(H,n);continue}if(!_n&&W(/\/>/i,V)){ce(H,n);continue}pe&&qe([q,ae,N],qn=>{V=Ne(V,qn," ")});const Vn=U(n.nodeName);if(!Fn(Vn,ve,V)){ce(H,n);continue}if(O&&typeof P=="object"&&typeof P.getAttributeType=="function"&&!Y)switch(P.getAttributeType(Vn,ve)){case"TrustedHTML":{V=O.createHTML(V);break}case"TrustedScriptURL":{V=O.createScriptURL(V);break}}if(V!==an)try{Y?n.setAttributeNS(Y,H,V):n.setAttribute(H,V),rn(n)?ee(n):pt(o.removed)}catch{ce(H,n)}}te(w.afterSanitizeAttributes,n,null)},Dt=function v(n){let h=null;const b=Dn(n);for(te(w.beforeSanitizeShadowDOM,n,null);h=b.nextNode();)te(w.uponSanitizeShadowNode,h,null),Hn(h),jn(h),h.content instanceof f&&v(h.content);te(w.afterSanitizeShadowDOM,n,null)};return o.sanitize=function(v){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=null,b=null,D=null,B=null;if(nn=!v,nn&&(v="<!-->"),typeof v!="string"&&!zn(v))if(typeof v.toString=="function"){if(v=v.toString(),typeof v!="string")throw Oe("dirty is not a string, aborting")}else throw Oe("toString is not a function");if(!o.isSupported)return v;if(Ke||on(n),o.removed=[],typeof v=="string"&&(Ce=!1),Ce){if(v.nodeName){const oe=U(v.nodeName);if(!F[oe]||Ee[oe])throw Oe("root node is forbidden and cannot be sanitized in-place")}}else if(v instanceof s)h=$n("<!---->"),b=h.ownerDocument.importNode(v,!0),b.nodeType===Pe.element&&b.nodeName==="BODY"||b.nodeName==="HTML"?h=b:h.appendChild(b);else{if(!he&&!pe&&!le&&v.indexOf("<")===-1)return O&&De?O.createHTML(v):v;if(h=$n(v),!h)return he?null:De?t:""}h&&Je&&ee(h.firstChild);const H=Dn(Ce?v:h);for(;D=H.nextNode();)Hn(D),jn(D),D.content instanceof f&&Dt(D.content);if(Ce)return v;if(he){if($e)for(B=y.call(h.ownerDocument);h.firstChild;)B.appendChild(h.firstChild);else B=h;return(j.shadowroot||j.shadowrootmode)&&(B=I.call(l,B,!0)),B}let Y=le?h.outerHTML:h.innerHTML;return le&&F["!doctype"]&&h.ownerDocument&&h.ownerDocument.doctype&&h.ownerDocument.doctype.name&&W(St,h.ownerDocument.doctype.name)&&(Y="<!DOCTYPE "+h.ownerDocument.doctype.name+`>
`+Y),pe&&qe([q,ae,N],oe=>{Y=Ne(Y,oe," ")}),O&&De?O.createHTML(Y):Y},o.setConfig=function(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};on(v),Ke=!0},o.clearConfig=function(){be=null,Ke=!1},o.isValidAttribute=function(v,n,h){be||on({});const b=U(v),D=U(n);return Fn(b,D,h)},o.addHook=function(v,n){typeof n=="function"&&Re(w[v],n)},o.removeHook=function(v,n){if(n!==void 0){const h=Mo(w[v],n);return h===-1?void 0:Ro(w[v],h,1)[0]}return pt(w[v])},o.removeHooks=function(v){w[v]=[]},o.removeAllHooks=function(){w=vt()},o}var or=At();function rr(e){const o=Ft(),i=Ut();return o.key!=="default"?{to:e,onClick:p=>{p.preventDefault(),i(-1)}}:{to:e}}export{Qo as C,er as D,tr as M,nr as _,or as p,rr as u};
