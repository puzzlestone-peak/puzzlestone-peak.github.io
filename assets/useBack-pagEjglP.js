import{t as L,b as ue,r as yt,G as zt,L as Ht,v as Ft,I as Ut}from"./index-DIth0oIc.js";import{k as jt,B as gn,C as Vt,m as qt,n as Bt,l as Wt,o as Gt,p as Xt}from"./card-fxtljBLB.js";import{p as Yt,q as Zt,j as Kt}from"./ItemCardList-C-RxMh7h.js";import{C as Jt}from"./chevron-left-ClYT8ZkK.js";import{a as Qt}from"./use-dark-mode-mdHJdo6o.js";import{E as er}from"./ErrorBoundary-B5mn_yui.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],tr=jt("chevron-right",nr);function Jr({type:e,id:r}){const c=Yt(e,r),s=Zt(e,r),m=c?e==="puzzle"?"Solved":"Completed":e==="puzzle"?"Mark as Solved":"Mark as Complete",l=c?`Mark ${e} as ${e==="puzzle"?"unsolved":"incomplete"}`:`Mark ${e} as ${e==="puzzle"?"solved":"complete"}`;return L.jsxs(gn,{variant:c?"contained":"outlined",color:"completed",onClick:s,"aria-label":l,className:"gap-2 w-full sm:w-40",children:[c&&L.jsx(Kt,{className:"h-4 w-4"}),m]})}function Qr({error:e,slug:r,backRoute:c,contentType:s="puzzle"}){const[p,h]=ue.useState(!0),m={import:{title:"Import Error",description:`Failed to import the ${s} file. Check the file path and module exports.`},parse:{title:"Parse Error",description:`The ${s} file has a syntax error.`},markdown:{title:"Markdown Processing Error",description:`The ${s} content has a markdown formatting error.`},unknown:{title:"Loading Error",description:`An unexpected error occurred while loading the ${s}.`}},{title:l,description:a}=m[e.type],o=s==="puzzle"?"Puzzle":"Expedition",d=s==="puzzle"?"Puzzle Library":"Expedition Library";return L.jsx("div",{className:"container mx-auto px-4 py-6 max-w-4xl",children:L.jsxs(Vt,{className:"border-destructive/50",children:[L.jsx(qt,{children:L.jsxs(Bt,{className:"flex items-center gap-3",children:[L.jsx(Wt,{className:"text-destructive size-8"}),l," (Dev Mode)"]})}),L.jsxs(Gt,{className:"space-y-6",children:[L.jsx("p",{className:"text-muted-foreground",children:a}),r&&L.jsxs("p",{className:"text-sm text-foreground",children:[o," slug: ",L.jsx("code",{className:"bg-muted px-2 py-1 rounded",children:r})]}),L.jsxs("div",{className:"rounded-md bg-destructive/10 p-4 border border-destructive/30",children:[L.jsx("p",{className:"text-sm font-semibold text-destructive mb-2",children:"Error Message:"}),L.jsx("pre",{className:"text-sm bg-muted p-3 rounded overflow-x-auto whitespace-pre-wrap",children:e.message})]}),e.stack&&L.jsxs("div",{className:"space-y-2",children:[L.jsxs(gn,{variant:"ghost",size:"sm",onClick:()=>h(!p),className:"text-xs flex items-center gap-1",children:[p?L.jsx(Jt,{className:"size-3"}):L.jsx(tr,{className:"size-3"}),"Stack Trace"]}),p&&L.jsx("pre",{className:"text-xs p-3 bg-muted rounded overflow-x-auto whitespace-pre-wrap",children:e.stack})]}),L.jsxs("div",{className:"flex gap-3 flex-wrap",children:[L.jsxs(Xt,{to:c,variant:"contained",color:"primary",children:["Back to ",d]}),L.jsx(gn,{variant:"outlined",onClick:()=>window.location.reload(),children:"Reload Page"})]}),L.jsxs("div",{className:"border-t pt-4 text-sm text-muted-foreground",children:[L.jsx("p",{className:"font-semibold",children:"Development Mode:"}),L.jsx("p",{children:'This detailed error view only appears in development. In production, users will see a clean "Not Found" message.'})]})]})]})})}const rr="modulepreload",or=function(e){return"/"+e},Bn={},eo=function(r,c,s){let p=Promise.resolve();if(c&&c.length>0){let a=function(o){return Promise.all(o.map(d=>Promise.resolve(d).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),l=m?.nonce||m?.getAttribute("nonce");p=a(c.map(o=>{if(o=or(o),o in Bn)return;Bn[o]=!0;const d=o.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${g}`))return;const x=document.createElement("link");if(x.rel=d?"stylesheet":rr,d||(x.as="script"),x.crossOrigin="",x.href=o,l&&x.setAttribute("nonce",l),document.head.appendChild(x),d)return new Promise((P,C)=>{x.addEventListener("load",P),x.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${o}`)))})}))}function h(m){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=m,window.dispatchEvent(l),!l.defaultPrevented)throw m}return p.then(m=>{for(const l of m||[])l.status==="rejected"&&h(l.reason);return r().catch(h)})};var Te={},ye={},je={},le={},ce={},sn={},Wn;function Et(){return Wn||(Wn=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Doctype=e.CDATA=e.Tag=e.Style=e.Script=e.Comment=e.Directive=e.Text=e.Root=e.isTag=e.ElementType=void 0;var r;(function(s){s.Root="root",s.Text="text",s.Directive="directive",s.Comment="comment",s.Script="script",s.Style="style",s.Tag="tag",s.CDATA="cdata",s.Doctype="doctype"})(r=e.ElementType||(e.ElementType={}));function c(s){return s.type===r.Tag||s.type===r.Script||s.type===r.Style}e.isTag=c,e.Root=r.Root,e.Text=r.Text,e.Directive=r.Directive,e.Comment=r.Comment,e.Script=r.Script,e.Style=r.Style,e.Tag=r.Tag,e.CDATA=r.CDATA,e.Doctype=r.Doctype})(sn)),sn}var T={},Gn;function Xn(){if(Gn)return T;Gn=1;var e=T&&T.__extends||(function(){var t=function(i,u){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,_){y.__proto__=_}||function(y,_){for(var I in _)Object.prototype.hasOwnProperty.call(_,I)&&(y[I]=_[I])},t(i,u)};return function(i,u){if(typeof u!="function"&&u!==null)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");t(i,u);function y(){this.constructor=i}i.prototype=u===null?Object.create(u):(y.prototype=u.prototype,new y)}})(),r=T&&T.__assign||function(){return r=Object.assign||function(t){for(var i,u=1,y=arguments.length;u<y;u++){i=arguments[u];for(var _ in i)Object.prototype.hasOwnProperty.call(i,_)&&(t[_]=i[_])}return t},r.apply(this,arguments)};Object.defineProperty(T,"__esModule",{value:!0}),T.cloneNode=T.hasChildren=T.isDocument=T.isDirective=T.isComment=T.isText=T.isCDATA=T.isTag=T.Element=T.Document=T.CDATA=T.NodeWithChildren=T.ProcessingInstruction=T.Comment=T.Text=T.DataNode=T.Node=void 0;var c=Et(),s=(function(){function t(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(t.prototype,"parentNode",{get:function(){return this.parent},set:function(i){this.parent=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"previousSibling",{get:function(){return this.prev},set:function(i){this.prev=i},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"nextSibling",{get:function(){return this.next},set:function(i){this.next=i},enumerable:!1,configurable:!0}),t.prototype.cloneNode=function(i){return i===void 0&&(i=!1),R(this,i)},t})();T.Node=s;var p=(function(t){e(i,t);function i(u){var y=t.call(this)||this;return y.data=u,y}return Object.defineProperty(i.prototype,"nodeValue",{get:function(){return this.data},set:function(u){this.data=u},enumerable:!1,configurable:!0}),i})(s);T.DataNode=p;var h=(function(t){e(i,t);function i(){var u=t!==null&&t.apply(this,arguments)||this;return u.type=c.ElementType.Text,u}return Object.defineProperty(i.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),i})(p);T.Text=h;var m=(function(t){e(i,t);function i(){var u=t!==null&&t.apply(this,arguments)||this;return u.type=c.ElementType.Comment,u}return Object.defineProperty(i.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),i})(p);T.Comment=m;var l=(function(t){e(i,t);function i(u,y){var _=t.call(this,y)||this;return _.name=u,_.type=c.ElementType.Directive,_}return Object.defineProperty(i.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),i})(p);T.ProcessingInstruction=l;var a=(function(t){e(i,t);function i(u){var y=t.call(this)||this;return y.children=u,y}return Object.defineProperty(i.prototype,"firstChild",{get:function(){var u;return(u=this.children[0])!==null&&u!==void 0?u:null},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"childNodes",{get:function(){return this.children},set:function(u){this.children=u},enumerable:!1,configurable:!0}),i})(s);T.NodeWithChildren=a;var o=(function(t){e(i,t);function i(){var u=t!==null&&t.apply(this,arguments)||this;return u.type=c.ElementType.CDATA,u}return Object.defineProperty(i.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),i})(a);T.CDATA=o;var d=(function(t){e(i,t);function i(){var u=t!==null&&t.apply(this,arguments)||this;return u.type=c.ElementType.Root,u}return Object.defineProperty(i.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),i})(a);T.Document=d;var g=(function(t){e(i,t);function i(u,y,_,I){_===void 0&&(_=[]),I===void 0&&(I=u==="script"?c.ElementType.Script:u==="style"?c.ElementType.Style:c.ElementType.Tag);var w=t.call(this,_)||this;return w.name=u,w.attribs=y,w.type=I,w}return Object.defineProperty(i.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"tagName",{get:function(){return this.name},set:function(u){this.name=u},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"attributes",{get:function(){var u=this;return Object.keys(this.attribs).map(function(y){var _,I;return{name:y,value:u.attribs[y],namespace:(_=u["x-attribsNamespace"])===null||_===void 0?void 0:_[y],prefix:(I=u["x-attribsPrefix"])===null||I===void 0?void 0:I[y]}})},enumerable:!1,configurable:!0}),i})(a);T.Element=g;function x(t){return(0,c.isTag)(t)}T.isTag=x;function P(t){return t.type===c.ElementType.CDATA}T.isCDATA=P;function C(t){return t.type===c.ElementType.Text}T.isText=C;function S(t){return t.type===c.ElementType.Comment}T.isComment=S;function E(t){return t.type===c.ElementType.Directive}T.isDirective=E;function k(t){return t.type===c.ElementType.Root}T.isDocument=k;function $(t){return Object.prototype.hasOwnProperty.call(t,"children")}T.hasChildren=$;function R(t,i){i===void 0&&(i=!1);var u;if(C(t))u=new h(t.data);else if(S(t))u=new m(t.data);else if(x(t)){var y=i?O(t.children):[],_=new g(t.name,r({},t.attribs),y);y.forEach(function(ae){return ae.parent=_}),t.namespace!=null&&(_.namespace=t.namespace),t["x-attribsNamespace"]&&(_["x-attribsNamespace"]=r({},t["x-attribsNamespace"])),t["x-attribsPrefix"]&&(_["x-attribsPrefix"]=r({},t["x-attribsPrefix"])),u=_}else if(P(t)){var y=i?O(t.children):[],I=new o(y);y.forEach(function(N){return N.parent=I}),u=I}else if(k(t)){var y=i?O(t.children):[],w=new d(y);y.forEach(function(N){return N.parent=w}),t["x-mode"]&&(w["x-mode"]=t["x-mode"]),u=w}else if(E(t)){var q=new l(t.name,t.data);t["x-name"]!=null&&(q["x-name"]=t["x-name"],q["x-publicId"]=t["x-publicId"],q["x-systemId"]=t["x-systemId"]),u=q}else throw new Error("Not implemented yet: ".concat(t.type));return u.startIndex=t.startIndex,u.endIndex=t.endIndex,t.sourceCodeLocation!=null&&(u.sourceCodeLocation=t.sourceCodeLocation),u}T.cloneNode=R;function O(t){for(var i=t.map(function(y){return R(y,!0)}),u=1;u<i.length;u++)i[u].prev=i[u-1],i[u-1].next=i[u];return i}return T}var Yn;function wt(){return Yn||(Yn=1,(function(e){var r=ce&&ce.__createBinding||(Object.create?(function(l,a,o,d){d===void 0&&(d=o);var g=Object.getOwnPropertyDescriptor(a,o);(!g||("get"in g?!a.__esModule:g.writable||g.configurable))&&(g={enumerable:!0,get:function(){return a[o]}}),Object.defineProperty(l,d,g)}):(function(l,a,o,d){d===void 0&&(d=o),l[d]=a[o]})),c=ce&&ce.__exportStar||function(l,a){for(var o in l)o!=="default"&&!Object.prototype.hasOwnProperty.call(a,o)&&r(a,l,o)};Object.defineProperty(e,"__esModule",{value:!0}),e.DomHandler=void 0;var s=Et(),p=Xn();c(Xn(),e);var h={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},m=(function(){function l(a,o,d){this.dom=[],this.root=new p.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof o=="function"&&(d=o,o=h),typeof a=="object"&&(o=a,a=void 0),this.callback=a??null,this.options=o??h,this.elementCB=d??null}return l.prototype.onparserinit=function(a){this.parser=a},l.prototype.onreset=function(){this.dom=[],this.root=new p.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},l.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},l.prototype.onerror=function(a){this.handleCallback(a)},l.prototype.onclosetag=function(){this.lastNode=null;var a=this.tagStack.pop();this.options.withEndIndices&&(a.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(a)},l.prototype.onopentag=function(a,o){var d=this.options.xmlMode?s.ElementType.Tag:void 0,g=new p.Element(a,o,void 0,d);this.addNode(g),this.tagStack.push(g)},l.prototype.ontext=function(a){var o=this.lastNode;if(o&&o.type===s.ElementType.Text)o.data+=a,this.options.withEndIndices&&(o.endIndex=this.parser.endIndex);else{var d=new p.Text(a);this.addNode(d),this.lastNode=d}},l.prototype.oncomment=function(a){if(this.lastNode&&this.lastNode.type===s.ElementType.Comment){this.lastNode.data+=a;return}var o=new p.Comment(a);this.addNode(o),this.lastNode=o},l.prototype.oncommentend=function(){this.lastNode=null},l.prototype.oncdatastart=function(){var a=new p.Text(""),o=new p.CDATA([a]);this.addNode(o),a.parent=o,this.lastNode=a},l.prototype.oncdataend=function(){this.lastNode=null},l.prototype.onprocessinginstruction=function(a,o){var d=new p.ProcessingInstruction(a,o);this.addNode(d)},l.prototype.handleCallback=function(a){if(typeof this.callback=="function")this.callback(a,this.dom);else if(a)throw a},l.prototype.addNode=function(a){var o=this.tagStack[this.tagStack.length-1],d=o.children[o.children.length-1];this.options.withStartIndices&&(a.startIndex=this.parser.startIndex),this.options.withEndIndices&&(a.endIndex=this.parser.endIndex),o.children.push(a),d&&(a.prev=d,d.next=a),a.parent=o,this.lastNode=null},l})();e.DomHandler=m,e.default=m})(ce)),ce}var ln={},Zn;function ar(){return Zn||(Zn=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.CARRIAGE_RETURN_PLACEHOLDER_REGEX=e.CARRIAGE_RETURN_PLACEHOLDER=e.CARRIAGE_RETURN_REGEX=e.CARRIAGE_RETURN=e.CASE_SENSITIVE_TAG_NAMES_MAP=e.CASE_SENSITIVE_TAG_NAMES=void 0,e.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],e.CASE_SENSITIVE_TAG_NAMES_MAP=e.CASE_SENSITIVE_TAG_NAMES.reduce(function(r,c){return r[c.toLowerCase()]=c,r},{}),e.CARRIAGE_RETURN="\r",e.CARRIAGE_RETURN_REGEX=new RegExp(e.CARRIAGE_RETURN,"g"),e.CARRIAGE_RETURN_PLACEHOLDER="__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_".concat(Date.now().toString(),"__"),e.CARRIAGE_RETURN_PLACEHOLDER_REGEX=new RegExp(e.CARRIAGE_RETURN_PLACEHOLDER,"g")})(ln)),ln}var Kn;function Ct(){if(Kn)return le;Kn=1,Object.defineProperty(le,"__esModule",{value:!0}),le.formatAttributes=s,le.escapeSpecialCharacters=h,le.revertEscapedCharacters=m,le.formatDOM=l;var e=wt(),r=ar();function c(a){return r.CASE_SENSITIVE_TAG_NAMES_MAP[a]}function s(a){for(var o={},d=0,g=a.length;d<g;d++){var x=a[d];o[x.name]=x.value}return o}function p(a){a=a.toLowerCase();var o=c(a);return o||a}function h(a){return a.replace(r.CARRIAGE_RETURN_REGEX,r.CARRIAGE_RETURN_PLACEHOLDER)}function m(a){return a.replace(r.CARRIAGE_RETURN_PLACEHOLDER_REGEX,r.CARRIAGE_RETURN)}function l(a,o,d){var g,x,P,C;o===void 0&&(o=null);for(var S=[],E,k=0,$=a.length;k<$;k++){var R=a[k];switch(R.nodeType){case 1:{var O=p(R.nodeName);E=new e.Element(O,s(R.attributes)),E.children=l(O==="template"?R.content.childNodes:R.childNodes,E);break}case 3:E=new e.Text(m((g=R.nodeValue)!==null&&g!==void 0?g:""));break;case 8:E=new e.Comment((x=R.nodeValue)!==null&&x!==void 0?x:"");break;default:continue}var t=(P=S[k-1])!==null&&P!==void 0?P:null;t&&(t.next=E),E.parent=o,E.prev=t,E.next=null,S.push(E)}return d&&(E=new e.ProcessingInstruction(d.substring(0,d.indexOf(" ")).toLowerCase(),d),E.next=(C=S[0])!==null&&C!==void 0?C:null,E.parent=o,S.unshift(E),S[1]&&(S[1].prev=S[0])),S}return le}var Jn;function sr(){if(Jn)return je;Jn=1,Object.defineProperty(je,"__esModule",{value:!0}),je.default=E;var e=Ct(),r="html",c="head",s="body",p=/<([a-zA-Z]+[0-9]?)/,h=/<head[^]*>/i,m=/<body[^]*>/i,l=function(k,$){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},a=function(k,$){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},o=typeof window=="object"&&window.DOMParser;if(typeof o=="function"){var d=new o,g="text/html";a=function(k,$){return $&&(k="<".concat($,">").concat(k,"</").concat($,">")),d.parseFromString(k,g)},l=a}if(typeof document=="object"&&document.implementation){var x=document.implementation.createHTMLDocument();l=function(k,$){if($){var R=x.documentElement.querySelector($);return R&&(R.innerHTML=k),x}return x.documentElement.innerHTML=k,x}}var P=typeof document=="object"&&document.createElement("template"),C;P&&P.content&&(C=function(k){return P.innerHTML=k,P.content.childNodes});var S=function(){return document.createDocumentFragment().childNodes};function E(k){var $,R,O,t,i,u;k=(0,e.escapeSpecialCharacters)(k);var y=p.exec(k),_=($=y?.[1])===null||$===void 0?void 0:$.toLowerCase();switch(_){case r:{var I=a(k);if(!h.test(k)){var w=I.querySelector(c);(R=w?.parentNode)===null||R===void 0||R.removeChild(w)}if(!m.test(k)){var w=I.querySelector(s);(O=w?.parentNode)===null||O===void 0||O.removeChild(w)}return I.querySelectorAll(r)}case c:case s:{var q=l(k).querySelectorAll(_);return m.test(k)&&h.test(k)?(i=(t=q[0].parentNode)===null||t===void 0?void 0:t.childNodes)!==null&&i!==void 0?i:S():q}default:{if(C)return C(k);var w=l(k,s).querySelector(s);return(u=w?.childNodes)!==null&&u!==void 0?u:S()}}}return je}var Qn;function ir(){if(Qn)return ye;Qn=1;var e=ye&&ye.__importDefault||function(h){return h&&h.__esModule?h:{default:h}};Object.defineProperty(ye,"__esModule",{value:!0}),ye.default=p;var r=e(sr()),c=Ct(),s=/<(![a-zA-Z\s]+)>/;function p(h){if(typeof h!="string")throw new TypeError("First argument must be a string");if(!h)return[];var m=s.exec(h),l=m?m[1]:void 0;return(0,c.formatDOM)((0,r.default)(h),null,l)}return ye}var Ve={},K={},_e={},et;function lr(){if(et)return _e;et=1;var e=0;_e.SAME=e;var r=1;return _e.CAMELCASE=r,_e.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1},_e}var nt;function cr(){if(nt)return K;nt=1;const e=0,r=1,c=2,s=3,p=4,h=5,m=6;function l(t){return o.hasOwnProperty(t)?o[t]:null}function a(t,i,u,y,_,I,w){this.acceptsBooleans=i===c||i===s||i===p,this.attributeName=y,this.attributeNamespace=_,this.mustUseProperty=u,this.propertyName=t,this.type=i,this.sanitizeURL=I,this.removeEmptyString=w}const o={};["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"].forEach(t=>{o[t]=new a(t,e,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(([t,i])=>{o[t]=new a(t,r,!1,i,null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(t=>{o[t]=new a(t,c,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(t=>{o[t]=new a(t,c,!1,t,null,!1,!1)}),["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(t=>{o[t]=new a(t,s,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(t=>{o[t]=new a(t,s,!0,t,null,!1,!1)}),["capture","download"].forEach(t=>{o[t]=new a(t,p,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(t=>{o[t]=new a(t,m,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(t=>{o[t]=new a(t,h,!1,t.toLowerCase(),null,!1,!1)});const g=/[\-\:]([a-z])/g,x=t=>t[1].toUpperCase();["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(t=>{const i=t.replace(g,x);o[i]=new a(i,r,!1,t,null,!1,!1)}),["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(t=>{const i=t.replace(g,x);o[i]=new a(i,r,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(t=>{const i=t.replace(g,x);o[i]=new a(i,r,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(t=>{o[t]=new a(t,r,!1,t.toLowerCase(),null,!1,!1)});const P="xlinkHref";o[P]=new a("xlinkHref",r,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(t=>{o[t]=new a(t,r,!1,t.toLowerCase(),null,!0,!0)});const{CAMELCASE:C,SAME:S,possibleStandardNames:E}=lr(),$=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD"+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",R=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+$+"]*$")),O=Object.keys(E).reduce((t,i)=>{const u=E[i];return u===S?t[i]=i:u===C?t[i.toLowerCase()]=i:t[i]=u,t},{});return K.BOOLEAN=s,K.BOOLEANISH_STRING=c,K.NUMERIC=h,K.OVERLOADED_BOOLEAN=p,K.POSITIVE_NUMERIC=m,K.RESERVED=e,K.STRING=r,K.getPropertyInfo=l,K.isCustomAttribute=R,K.possibleStandardNames=O,K}var Se={},Ee={},cn,tt;function ur(){if(tt)return cn;tt=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,c=/^\s*/,s=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,p=/^:\s*/,h=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,m=/^[;\s]*/,l=/^\s+|\s+$/g,a=`
`,o="/",d="*",g="",x="comment",P="declaration";function C(E,k){if(typeof E!="string")throw new TypeError("First argument must be a string");if(!E)return[];k=k||{};var $=1,R=1;function O(N){var A=N.match(r);A&&($+=A.length);var Z=N.lastIndexOf(a);R=~Z?N.length-Z:R+N.length}function t(){var N={line:$,column:R};return function(A){return A.position=new i(N),_(),A}}function i(N){this.start=N,this.end={line:$,column:R},this.source=k.source}i.prototype.content=E;function u(N){var A=new Error(k.source+":"+$+":"+R+": "+N);if(A.reason=N,A.filename=k.source,A.line=$,A.column=R,A.source=E,!k.silent)throw A}function y(N){var A=N.exec(E);if(A){var Z=A[0];return O(Z),E=E.slice(Z.length),A}}function _(){y(c)}function I(N){var A;for(N=N||[];A=w();)A!==!1&&N.push(A);return N}function w(){var N=t();if(!(o!=E.charAt(0)||d!=E.charAt(1))){for(var A=2;g!=E.charAt(A)&&(d!=E.charAt(A)||o!=E.charAt(A+1));)++A;if(A+=2,g===E.charAt(A-1))return u("End of comment missing");var Z=E.slice(2,A-2);return R+=2,O(Z),E=E.slice(A),R+=2,N({type:x,comment:Z})}}function q(){var N=t(),A=y(s);if(A){if(w(),!y(p))return u("property missing ':'");var Z=y(h),Xe=N({type:P,property:S(A[0].replace(e,g)),value:Z?S(Z[0].replace(e,g)):g});return y(m),Xe}}function ae(){var N=[];I(N);for(var A;A=q();)A!==!1&&(N.push(A),I(N));return N}return _(),ae()}function S(E){return E?E.replace(l,g):g}return cn=C,cn}var rt;function dr(){if(rt)return Ee;rt=1;var e=Ee&&Ee.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Ee,"__esModule",{value:!0}),Ee.default=c;const r=e(ur());function c(s,p){let h=null;if(!s||typeof s!="string")return h;const m=(0,r.default)(s),l=typeof p=="function";return m.forEach(a=>{if(a.type!=="declaration")return;const{property:o,value:d}=a;l?p(o,d,a):d&&(h=h||{},h[o]=d)}),h}return Ee}var Ae={},ot;function pr(){if(ot)return Ae;ot=1,Object.defineProperty(Ae,"__esModule",{value:!0}),Ae.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,r=/-([a-z])/g,c=/^[^-]+$/,s=/^-(webkit|moz|ms|o|khtml)-/,p=/^-(ms)-/,h=function(o){return!o||c.test(o)||e.test(o)},m=function(o,d){return d.toUpperCase()},l=function(o,d){return"".concat(d,"-")},a=function(o,d){return d===void 0&&(d={}),h(o)?o:(o=o.toLowerCase(),d.reactCompat?o=o.replace(p,l):o=o.replace(s,l),o.replace(r,m))};return Ae.camelCase=a,Ae}var Me,at;function fr(){if(at)return Me;at=1;var e=Me&&Me.__importDefault||function(p){return p&&p.__esModule?p:{default:p}},r=e(dr()),c=pr();function s(p,h){var m={};return!p||typeof p!="string"||(0,r.default)(p,function(l,a){l&&a&&(m[(0,c.camelCase)(l,h)]=a)}),m}return s.default=s,Me=s,Me}var st;function xt(){return st||(st=1,(function(e){var r=Se&&Se.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(e,"__esModule",{value:!0}),e.returnFirstArg=e.canTextBeChildOfNode=e.ELEMENTS_WITH_NO_TEXT_CHILDREN=e.PRESERVE_CUSTOM_ATTRIBUTES=void 0,e.isCustomComponent=h,e.setStyleProp=l;var c=yt(),s=r(fr()),p=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);function h(d,g){return d.includes("-")?!p.has(d):!!(g&&typeof g.is=="string")}var m={reactCompat:!0};function l(d,g){if(typeof d=="string"){if(!d.trim()){g.style={};return}try{g.style=(0,s.default)(d,m)}catch{g.style={}}}}e.PRESERVE_CUSTOM_ATTRIBUTES=Number(c.version.split(".")[0])>=16,e.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);var a=function(d){return!e.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(d.name)};e.canTextBeChildOfNode=a;var o=function(d){return d};e.returnFirstArg=o})(Se)),Se}var it;function kt(){if(it)return Ve;it=1,Object.defineProperty(Ve,"__esModule",{value:!0}),Ve.default=h;var e=cr(),r=xt(),c=["checked","value"],s=["input","select","textarea"],p={reset:!0,submit:!0};function h(l,a){l===void 0&&(l={});var o={},d=!!(l.type&&p[l.type]);for(var g in l){var x=l[g];if((0,e.isCustomAttribute)(g)){o[g]=x;continue}var P=g.toLowerCase(),C=m(P);if(C){var S=(0,e.getPropertyInfo)(C);switch(c.includes(C)&&s.includes(a)&&!d&&(C=m("default"+P)),o[C]=x,S?.type){case e.BOOLEAN:o[C]=!0;break;case e.OVERLOADED_BOOLEAN:x===""&&(o[C]=!0);break}continue}r.PRESERVE_CUSTOM_ATTRIBUTES&&(o[g]=x)}return(0,r.setStyleProp)(l.style,o),o}function m(l){return e.possibleStandardNames[l]}return Ve}var we={},lt;function hr(){if(lt)return we;lt=1;var e=we&&we.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(we,"__esModule",{value:!0}),we.default=h;var r=yt(),c=e(kt()),s=xt(),p={cloneElement:r.cloneElement,createElement:r.createElement,isValidElement:r.isValidElement};function h(l,a){var o,d,g,x,P;a===void 0&&(a={});for(var C=[],S=typeof a.replace=="function",E=(o=a.transform)!==null&&o!==void 0?o:s.returnFirstArg,k=(d=a.library)!==null&&d!==void 0?d:p,$=k.cloneElement,R=k.createElement,O=k.isValidElement,t=l.length,i=0;i<t;i++){var u=l[i];if(S){var y=(g=a.replace)===null||g===void 0?void 0:g.call(a,u,i);if(O(y)){t>1&&(y=$(y,{key:(x=y.key)!==null&&x!==void 0?x:i})),C.push(E(y,u,i));continue}}if(u.type==="text"){var _=!u.data.trim().length;if(_&&u.parent&&!(0,s.canTextBeChildOfNode)(u.parent)||a.trim&&_)continue;C.push(E(u.data,u,i));continue}var I=u,w={};m(I)?((0,s.setStyleProp)(I.attribs.style,I.attribs),w=I.attribs):I.attribs&&(w=(0,c.default)(I.attribs,I.name));var q=void 0;switch(u.type){case"script":case"style":u.children[0]&&(w.dangerouslySetInnerHTML={__html:u.children[0].data});break;case"tag":u.name==="textarea"&&u.children[0]?w.defaultValue=u.children[0].data:!((P=u.children)===null||P===void 0)&&P.length&&(q=h(u.children,a));break;default:continue}t>1&&(w.key=i),C.push(E(R(u.name,w,q),u,i))}return C.length===1?C[0]:C}function m(l){return s.PRESERVE_CUSTOM_ATTRIBUTES&&l.type==="tag"&&(0,s.isCustomComponent)(l.name,l.attribs)}return we}var ct;function mr(){return ct||(ct=1,(function(e){var r=Te&&Te.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(e,"__esModule",{value:!0}),e.htmlToDOM=e.domToReact=e.attributesToProps=e.Text=e.ProcessingInstruction=e.Element=e.Comment=void 0,e.default=l;var c=r(ir());e.htmlToDOM=c.default;var s=r(kt());e.attributesToProps=s.default;var p=r(hr());e.domToReact=p.default;var h=wt();Object.defineProperty(e,"Comment",{enumerable:!0,get:function(){return h.Comment}}),Object.defineProperty(e,"Element",{enumerable:!0,get:function(){return h.Element}}),Object.defineProperty(e,"ProcessingInstruction",{enumerable:!0,get:function(){return h.ProcessingInstruction}}),Object.defineProperty(e,"Text",{enumerable:!0,get:function(){return h.Text}});var m={lowerCaseAttributeNames:!1};function l(a,o){var d;if(typeof a!="string")throw new TypeError("First argument must be a string");return a?(0,p.default)((0,c.default)(a,(d=o?.htmlparser2)!==null&&d!==void 0?d:m),o):[]}})(Te)),Te}var We=mr();const ut=zt(We),gr=ut.default||ut,br=`(() => {
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
`,vr=`/* Base Reset */
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
.peer { }`,yr={"local:chomp:chomp-grid":{id:"local:chomp:chomp-grid",code:`function mount(options) {
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
}`,metadata:{title:"Chomp",description:"Interactive visualization of a chocolate grid for Chomp puzzle",dateCreated:"2025-11-02T00:00:00.000Z",lastUpdated:"2025-11-09T00:00:00.000Z",published:"published"},scope:"local",sourcePath:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/adversarial-games/chomp/_components/chomp-grid.md"}},Er=`/* Theme overrides and customizations */

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

  /* Stone */
  --color-stone-50: oklch(0.98 0.010 250);
  --color-stone-100: oklch(0.95 0.015 250);
  --color-stone-200: oklch(0.90 0.025 250);
  --color-stone-300: oklch(0.83 0.035 250);
  --color-stone-400: oklch(0.74 0.045 250);
  --color-stone-500: oklch(0.65 0.055 250);
  --color-stone-600: oklch(0.55 0.060 250);
  --color-stone-700: oklch(0.45 0.055 250);
  --color-stone-800: oklch(0.35 0.045 250);
  --color-stone-900: oklch(0.27 0.035 250);
  --color-stone-950: oklch(0.20 0.025 250);

  /* Teal */
  --color-teal-50: oklch(0.97 0.015 185);
  --color-teal-100: oklch(0.94 0.025 185);
  --color-teal-200: oklch(0.88 0.040 185);
  --color-teal-300: oklch(0.80 0.055 185);
  --color-teal-400: oklch(0.70 0.070 185);
  --color-teal-500: oklch(0.60 0.080 185);
  --color-teal-600: oklch(0.50 0.085 185);
  --color-teal-700: oklch(0.40 0.080 185);
  --color-teal-800: oklch(0.32 0.070 185);
  --color-teal-900: oklch(0.25 0.055 185);
  --color-teal-950: oklch(0.18 0.040 185);

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

  /* Pure white */
  --color-white: oklch(1 0 0);
}

/* Semantic UI Theme Variables */

:root {
  /* Base colors */
  --color-background: var(--color-stone-50);
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
  --color-muted: var(--color-stone-100);
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
  --color-border: var(--color-stone-600);
  --color-input: var(--color-stone-300);
  --color-ring: var(--color-navy-400);

  /* Additional semantic colors for UI elements */
  --color-divider: var(--color-stone-200);
  --color-surface: var(--color-white);
  --color-text-secondary: var(--color-stone-600);
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
  --color-difficulty-open: var(--color-stone-200);
  --color-difficulty-open-foreground: var(--color-stone-900);

  /* Gradients */
  --gradient-recommendation-start: var(--color-evergreen-500);
  --gradient-recommendation-end: var(--color-navy-500);
  --gradient-progress-start: var(--color-teal-600);
  --gradient-progress-end: var(--color-teal-500);
}


.dark {
  /* Base colors */
  --color-background: oklch(0.10 0.035 220); /* darker than navy-950, almost pure black */
  --color-foreground: var(--color-stone-200);

  /* Card */
  --color-card: var(--color-navy-900);
  --color-card-foreground: var(--color-stone-200);

  /* Popover */
  --color-popover: var(--color-navy-900);
  --color-popover-foreground: var(--color-stone-200);

  /* Primary */
  --color-primary: var(--color-navy-400);
  --color-primary-foreground: var(--color-navy-950);

  /* Secondary */
  --color-secondary: var(--color-evergreen-400);
  --color-secondary-foreground: var(--color-navy-950);

  /* Muted */
  --color-muted: var(--color-navy-800);
  --color-muted-foreground: var(--color-stone-400);

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
  --color-text-secondary: var(--color-stone-400);
  --color-text-emphasis: var(--color-stone-50);
  --color-link: var(--color-navy-400);
  --color-link-hover: var(--color-navy-300);

  /* Select component */
  --color-select-hover: var(--color-navy-800);
  --color-select-hover-foreground: var(--color-stone-200);

  /* Checkbox */
  --color-checkbox-checked: var(--color-navy-400);
  --color-checkbox-checked-foreground: var(--color-navy-950);

  /* Navigation */
  --color-nav-foreground: var(--color-stone-200);

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
  --color-difficulty-open: var(--color-stone-700);
  --color-difficulty-open-foreground: var(--color-stone-200);

  /* Gradients - dark mode */
  --gradient-recommendation-start: var(--color-evergreen-600);
  --gradient-recommendation-end: var(--color-navy-600);
  --gradient-progress-start: var(--color-teal-600);
  --gradient-progress-end: var(--color-teal-500);
}
`,wr=300;function Cr({blockData:e,blockId:r,inlineComponents:c}){const s=ue.useRef(null),[p,h]=ue.useState(wr),[m]=Qt(),l=ue.useRef("");l.current||(l.current=kr(e,br,vr,Er,c)),ue.useEffect(()=>{const o=d=>{if(d.source===s.current?.contentWindow&&d.data?.event==="resize-request"){const{height:g}=d.data.data;typeof g=="number"&&g>0&&h(g)}};return window.addEventListener("message",o),()=>window.removeEventListener("message",o)},[]),ue.useEffect(()=>{const o=s.current;if(!o||!o.contentWindow)return;const d=()=>{o.contentWindow?.postMessage({event:"theme-change",data:{theme:m?"dark":"light"}},"*")};return d(),o.addEventListener("load",d),()=>o.removeEventListener("load",d)},[m]);const a=typeof e.props?.minWidth=="number"?e.props.minWidth:0;return L.jsx("div",{className:`dynamic-block-container ${a>0?"overflow-x-auto":"flex justify-center"}`,children:L.jsx("iframe",{className:"border-0 block",ref:s,sandbox:"allow-scripts",srcDoc:l.current,style:{width:e.width||"100%",...a>0&&{minWidth:`${a}px`},height:`${p}px`},title:e.title||`Interactive content ${r}`})})}function xr(e,r){if(!e.startsWith("./"))return e;if(!r)return console.error(`[DynamicBlock Error] Local component reference "${e}" requires sourceFile path, but none was provided.`),null;const c=e.substring(2),s=r.split(/[/\\]/);return`local:${s[s.length-2]||"unknown"}:${c}`}function kr(e,r,c,s,p){let h=(e.mode==="dom"||e.mode==="canvas")&&e.code||"",m=e.mode==="dom"&&e.layout||"",l=e.mode==="dom"&&e.css||"",a=e.startLine;if(e.mode==="component"&&e.componentId)if(e.componentId.startsWith("#")){const C=e.componentId.substring(1),S=p?.[C];S?(h=S.code,m=S.layout||"",l=S.css||"",a=S.startLine):(console.error(`[DynamicBlock Error] Inline component not found: "${e.componentId}"
Expected: A :::component[${C}] definition in the same file.
Make sure the component is defined before it's used.`),h="",m="",l="")}else{const C=xr(e.componentId,e.sourceFile);if(!C)h="",m="",l="";else{const S=yr[C];if(S)h=S.code,m=S.layout||"",l=S.css||"";else{const E=e.componentId.startsWith("./");console.error(E?`[DynamicBlock Error] Local component not found: "${e.componentId}"
Expected: A file named "${e.componentId.substring(2)}.md" in _components/ subdirectory
Source file: ${e.sourceFile||"unknown"}
Resolved to scoped ID: ${C}
Make sure the _components/ directory exists and the component file is present.`:`[DynamicBlock Error] Shared component not found: "${e.componentId}"
Expected: A file named "${e.componentId}.md" in content/components/ (searched recursively)
Make sure the component file exists and has been registered in the component registry.`),h="",m="",l=""}}}const o=JSON.stringify(e.props||{}),d=e.mode==="canvas"?e.ariaLabel:void 0,g=JSON.stringify(d||null);let x="",P="";if(e.sourceFile&&a&&h){const C=e.sourceFile.indexOf("content/");x=`//# sourceURL=${C!==-1?e.sourceFile.substring(C):e.sourceFile.split("/").slice(-2).join("/")}
`;const E=a-2;E>0&&(P=`
`.repeat(E))}return`<!DOCTYPE html>
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
    ${s}

    ${c}
    ${l?`

    /* Custom CSS from author or inline component */
    ${l}`:""}
  </style>
</head>
<body>
  <div id="root">${m}</div>

  <!-- Runtime and globals script -->
  <script>
    // Component props (available globally)
    window.__COMPONENT_PROPS__ = ${o};

    // Canvas accessibility label (for canvas mode blocks)
    window.__CANVAS_ARIA_LABEL__ = ${g};

    // Injected sandbox runtime
    ${r}
  <\/script>

  <!-- User code script with source mapping -->
  <script>${x}${P}${h?`${h}`:""}<\/script>

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
</html>`}function no({content:e,dynamicBlocks:r=[],inlineComponents:c}){const s=ue.useMemo(()=>{const p={replace(h){if(h instanceof We.Element){if(h.attribs?.class?.split(/\s+/).includes("dynamic-block-placeholder")&&h.attribs["data-dynamic-block-id"]){const m=parseInt(h.attribs["data-dynamic-block-id"],10);if(isNaN(m)||m<0||m>=r.length)return;const l=r[m];return l?L.jsx(er,{context:"dynamic-block",children:L.jsx(Cr,{blockId:m,blockData:l,inlineComponents:c})}):void 0}if(h.name==="a"){const m=h.attribs?.href;if(m?.startsWith("/puzzle/")||m?.startsWith("/expedition/")){const l=We.attributesToProps(h.attribs,"a"),{href:a,...o}=l;return L.jsx(Ht,{to:m,...o,children:We.domToReact(h.children,p)})}}}}};return gr(e,p)},[e,r,c]);return L.jsx("div",{className:"markdown-content prose max-w-none space-y-4",children:s})}/*! @license DOMPurify 3.3.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.0/LICENSE */const{entries:Tt,setPrototypeOf:dt,isFrozen:Tr,getPrototypeOf:_r,getOwnPropertyDescriptor:Sr}=Object;let{freeze:G,seal:J,create:bn}=Object,{apply:vn,construct:yn}=typeof Reflect<"u"&&Reflect;G||(G=function(r){return r});J||(J=function(r){return r});vn||(vn=function(r,c){for(var s=arguments.length,p=new Array(s>2?s-2:0),h=2;h<s;h++)p[h-2]=arguments[h];return r.apply(c,p)});yn||(yn=function(r){for(var c=arguments.length,s=new Array(c>1?c-1:0),p=1;p<c;p++)s[p-1]=arguments[p];return new r(...s)});const qe=X(Array.prototype.forEach),Ar=X(Array.prototype.lastIndexOf),pt=X(Array.prototype.pop),Re=X(Array.prototype.push),Mr=X(Array.prototype.splice),Ge=X(String.prototype.toLowerCase),un=X(String.prototype.toString),dn=X(String.prototype.match),Ne=X(String.prototype.replace),Rr=X(String.prototype.indexOf),Nr=X(String.prototype.trim),Q=X(Object.prototype.hasOwnProperty),W=X(RegExp.prototype.test),Oe=Or(TypeError);function X(e){return function(r){r instanceof RegExp&&(r.lastIndex=0);for(var c=arguments.length,s=new Array(c>1?c-1:0),p=1;p<c;p++)s[p-1]=arguments[p];return vn(e,r,s)}}function Or(e){return function(){for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return yn(e,c)}}function M(e,r){let c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ge;dt&&dt(e,null);let s=r.length;for(;s--;){let p=r[s];if(typeof p=="string"){const h=c(p);h!==p&&(Tr(r)||(r[s]=h),p=h)}e[p]=!0}return e}function Ir(e){for(let r=0;r<e.length;r++)Q(e,r)||(e[r]=null);return e}function oe(e){const r=bn(null);for(const[c,s]of Tt(e))Q(e,c)&&(Array.isArray(s)?r[c]=Ir(s):s&&typeof s=="object"&&s.constructor===Object?r[c]=oe(s):r[c]=s);return r}function Ie(e,r){for(;e!==null;){const s=Sr(e,r);if(s){if(s.get)return X(s.get);if(typeof s.value=="function")return X(s.value)}e=_r(e)}function c(){return null}return c}const ft=G(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),pn=G(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),fn=G(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Pr=G(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),hn=G(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Lr=G(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ht=G(["#text"]),mt=G(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),mn=G(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),gt=G(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Be=G(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),$r=J(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Dr=J(/<%[\w\W]*|[\w\W]*%>/gm),zr=J(/\$\{[\w\W]*/gm),Hr=J(/^data-[\-\w.\u00B7-\uFFFF]+$/),Fr=J(/^aria-[\-\w]+$/),_t=J(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ur=J(/^(?:\w+script|data):/i),jr=J(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),St=J(/^html$/i),Vr=J(/^[a-z][.\w]*(-[.\w]+)+$/i);var bt=Object.freeze({__proto__:null,ARIA_ATTR:Fr,ATTR_WHITESPACE:jr,CUSTOM_ELEMENT:Vr,DATA_ATTR:Hr,DOCTYPE_NAME:St,ERB_EXPR:Dr,IS_ALLOWED_URI:_t,IS_SCRIPT_OR_DATA:Ur,MUSTACHE_EXPR:$r,TMPLIT_EXPR:zr});const Pe={element:1,text:3,progressingInstruction:7,comment:8,document:9},qr=function(){return typeof window>"u"?null:window},Br=function(r,c){if(typeof r!="object"||typeof r.createPolicy!="function")return null;let s=null;const p="data-tt-policy-suffix";c&&c.hasAttribute(p)&&(s=c.getAttribute(p));const h="dompurify"+(s?"#"+s:"");try{return r.createPolicy(h,{createHTML(m){return m},createScriptURL(m){return m}})}catch{return console.warn("TrustedTypes policy "+h+" could not be created."),null}},vt=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function At(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:qr();const r=v=>At(v);if(r.version="3.3.0",r.removed=[],!e||!e.document||e.document.nodeType!==Pe.document||!e.Element)return r.isSupported=!1,r;let{document:c}=e;const s=c,p=s.currentScript,{DocumentFragment:h,HTMLTemplateElement:m,Node:l,Element:a,NodeFilter:o,NamedNodeMap:d=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:g,DOMParser:x,trustedTypes:P}=e,C=a.prototype,S=Ie(C,"cloneNode"),E=Ie(C,"remove"),k=Ie(C,"nextSibling"),$=Ie(C,"childNodes"),R=Ie(C,"parentNode");if(typeof m=="function"){const v=c.createElement("template");v.content&&v.content.ownerDocument&&(c=v.content.ownerDocument)}let O,t="";const{implementation:i,createNodeIterator:u,createDocumentFragment:y,getElementsByTagName:_}=c,{importNode:I}=s;let w=vt();r.isSupported=typeof Tt=="function"&&typeof R=="function"&&i&&i.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:q,ERB_EXPR:ae,TMPLIT_EXPR:N,DATA_ATTR:A,ARIA_ATTR:Z,IS_SCRIPT_OR_DATA:Xe,ATTR_WHITESPACE:En,CUSTOM_ELEMENT:Mt}=bt;let{IS_ALLOWED_URI:wn}=bt,F=null;const Cn=M({},[...ft,...pn,...fn,...hn,...ht]);let j=null;const xn=M({},[...mt,...mn,...gt,...Be]);let z=Object.seal(bn(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ce=null,Ye=null;const de=Object.seal(bn(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let kn=!0,Ze=!0,Tn=!1,_n=!0,pe=!1,Le=!0,se=!1,Ke=!1,Je=!1,fe=!1,$e=!1,De=!1,Sn=!0,An=!1;const Rt="user-content-";let Qe=!0,xe=!1,he={},me=null;const Mn=M({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Rn=null;const Nn=M({},["audio","video","img","source","image","track"]);let en=null;const On=M({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ze="http://www.w3.org/1998/Math/MathML",He="http://www.w3.org/2000/svg",ne="http://www.w3.org/1999/xhtml";let ge=ne,nn=!1,tn=null;const Nt=M({},[ze,He,ne],un);let Fe=M({},["mi","mo","mn","ms","mtext"]),Ue=M({},["annotation-xml"]);const Ot=M({},["title","style","font","a","script"]);let ke=null;const It=["application/xhtml+xml","text/html"],Pt="text/html";let U=null,be=null;const Lt=c.createElement("form"),In=function(n){return n instanceof RegExp||n instanceof Function},rn=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(be&&be===n)){if((!n||typeof n!="object")&&(n={}),n=oe(n),ke=It.indexOf(n.PARSER_MEDIA_TYPE)===-1?Pt:n.PARSER_MEDIA_TYPE,U=ke==="application/xhtml+xml"?un:Ge,F=Q(n,"ALLOWED_TAGS")?M({},n.ALLOWED_TAGS,U):Cn,j=Q(n,"ALLOWED_ATTR")?M({},n.ALLOWED_ATTR,U):xn,tn=Q(n,"ALLOWED_NAMESPACES")?M({},n.ALLOWED_NAMESPACES,un):Nt,en=Q(n,"ADD_URI_SAFE_ATTR")?M(oe(On),n.ADD_URI_SAFE_ATTR,U):On,Rn=Q(n,"ADD_DATA_URI_TAGS")?M(oe(Nn),n.ADD_DATA_URI_TAGS,U):Nn,me=Q(n,"FORBID_CONTENTS")?M({},n.FORBID_CONTENTS,U):Mn,Ce=Q(n,"FORBID_TAGS")?M({},n.FORBID_TAGS,U):oe({}),Ye=Q(n,"FORBID_ATTR")?M({},n.FORBID_ATTR,U):oe({}),he=Q(n,"USE_PROFILES")?n.USE_PROFILES:!1,kn=n.ALLOW_ARIA_ATTR!==!1,Ze=n.ALLOW_DATA_ATTR!==!1,Tn=n.ALLOW_UNKNOWN_PROTOCOLS||!1,_n=n.ALLOW_SELF_CLOSE_IN_ATTR!==!1,pe=n.SAFE_FOR_TEMPLATES||!1,Le=n.SAFE_FOR_XML!==!1,se=n.WHOLE_DOCUMENT||!1,fe=n.RETURN_DOM||!1,$e=n.RETURN_DOM_FRAGMENT||!1,De=n.RETURN_TRUSTED_TYPE||!1,Je=n.FORCE_BODY||!1,Sn=n.SANITIZE_DOM!==!1,An=n.SANITIZE_NAMED_PROPS||!1,Qe=n.KEEP_CONTENT!==!1,xe=n.IN_PLACE||!1,wn=n.ALLOWED_URI_REGEXP||_t,ge=n.NAMESPACE||ne,Fe=n.MATHML_TEXT_INTEGRATION_POINTS||Fe,Ue=n.HTML_INTEGRATION_POINTS||Ue,z=n.CUSTOM_ELEMENT_HANDLING||{},n.CUSTOM_ELEMENT_HANDLING&&In(n.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(z.tagNameCheck=n.CUSTOM_ELEMENT_HANDLING.tagNameCheck),n.CUSTOM_ELEMENT_HANDLING&&In(n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(z.attributeNameCheck=n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),n.CUSTOM_ELEMENT_HANDLING&&typeof n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(z.allowCustomizedBuiltInElements=n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),pe&&(Ze=!1),$e&&(fe=!0),he&&(F=M({},ht),j=[],he.html===!0&&(M(F,ft),M(j,mt)),he.svg===!0&&(M(F,pn),M(j,mn),M(j,Be)),he.svgFilters===!0&&(M(F,fn),M(j,mn),M(j,Be)),he.mathMl===!0&&(M(F,hn),M(j,gt),M(j,Be))),n.ADD_TAGS&&(typeof n.ADD_TAGS=="function"?de.tagCheck=n.ADD_TAGS:(F===Cn&&(F=oe(F)),M(F,n.ADD_TAGS,U))),n.ADD_ATTR&&(typeof n.ADD_ATTR=="function"?de.attributeCheck=n.ADD_ATTR:(j===xn&&(j=oe(j)),M(j,n.ADD_ATTR,U))),n.ADD_URI_SAFE_ATTR&&M(en,n.ADD_URI_SAFE_ATTR,U),n.FORBID_CONTENTS&&(me===Mn&&(me=oe(me)),M(me,n.FORBID_CONTENTS,U)),Qe&&(F["#text"]=!0),se&&M(F,["html","head","body"]),F.table&&(M(F,["tbody"]),delete Ce.tbody),n.TRUSTED_TYPES_POLICY){if(typeof n.TRUSTED_TYPES_POLICY.createHTML!="function")throw Oe('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof n.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Oe('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');O=n.TRUSTED_TYPES_POLICY,t=O.createHTML("")}else O===void 0&&(O=Br(P,p)),O!==null&&typeof t=="string"&&(t=O.createHTML(""));G&&G(n),be=n}},Pn=M({},[...pn,...fn,...Pr]),Ln=M({},[...hn,...Lr]),$t=function(n){let f=R(n);(!f||!f.tagName)&&(f={namespaceURI:ge,tagName:"template"});const b=Ge(n.tagName),D=Ge(f.tagName);return tn[n.namespaceURI]?n.namespaceURI===He?f.namespaceURI===ne?b==="svg":f.namespaceURI===ze?b==="svg"&&(D==="annotation-xml"||Fe[D]):!!Pn[b]:n.namespaceURI===ze?f.namespaceURI===ne?b==="math":f.namespaceURI===He?b==="math"&&Ue[D]:!!Ln[b]:n.namespaceURI===ne?f.namespaceURI===He&&!Ue[D]||f.namespaceURI===ze&&!Fe[D]?!1:!Ln[b]&&(Ot[b]||!Pn[b]):!!(ke==="application/xhtml+xml"&&tn[n.namespaceURI]):!1},ee=function(n){Re(r.removed,{element:n});try{R(n).removeChild(n)}catch{E(n)}},ie=function(n,f){try{Re(r.removed,{attribute:f.getAttributeNode(n),from:f})}catch{Re(r.removed,{attribute:null,from:f})}if(f.removeAttribute(n),n==="is")if(fe||$e)try{ee(f)}catch{}else try{f.setAttribute(n,"")}catch{}},$n=function(n){let f=null,b=null;if(Je)n="<remove></remove>"+n;else{const H=dn(n,/^[\r\n\t ]+/);b=H&&H[0]}ke==="application/xhtml+xml"&&ge===ne&&(n='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+n+"</body></html>");const D=O?O.createHTML(n):n;if(ge===ne)try{f=new x().parseFromString(D,ke)}catch{}if(!f||!f.documentElement){f=i.createDocument(ge,"template",null);try{f.documentElement.innerHTML=nn?t:D}catch{}}const B=f.body||f.documentElement;return n&&b&&B.insertBefore(c.createTextNode(b),B.childNodes[0]||null),ge===ne?_.call(f,se?"html":"body")[0]:se?f.documentElement:B},Dn=function(n){return u.call(n.ownerDocument||n,n,o.SHOW_ELEMENT|o.SHOW_COMMENT|o.SHOW_TEXT|o.SHOW_PROCESSING_INSTRUCTION|o.SHOW_CDATA_SECTION,null)},on=function(n){return n instanceof g&&(typeof n.nodeName!="string"||typeof n.textContent!="string"||typeof n.removeChild!="function"||!(n.attributes instanceof d)||typeof n.removeAttribute!="function"||typeof n.setAttribute!="function"||typeof n.namespaceURI!="string"||typeof n.insertBefore!="function"||typeof n.hasChildNodes!="function")},zn=function(n){return typeof l=="function"&&n instanceof l};function te(v,n,f){qe(v,b=>{b.call(r,n,f,be)})}const Hn=function(n){let f=null;if(te(w.beforeSanitizeElements,n,null),on(n))return ee(n),!0;const b=U(n.nodeName);if(te(w.uponSanitizeElement,n,{tagName:b,allowedTags:F}),Le&&n.hasChildNodes()&&!zn(n.firstElementChild)&&W(/<[/\w!]/g,n.innerHTML)&&W(/<[/\w!]/g,n.textContent)||n.nodeType===Pe.progressingInstruction||Le&&n.nodeType===Pe.comment&&W(/<[/\w]/g,n.data))return ee(n),!0;if(!(de.tagCheck instanceof Function&&de.tagCheck(b))&&(!F[b]||Ce[b])){if(!Ce[b]&&Un(b)&&(z.tagNameCheck instanceof RegExp&&W(z.tagNameCheck,b)||z.tagNameCheck instanceof Function&&z.tagNameCheck(b)))return!1;if(Qe&&!me[b]){const D=R(n)||n.parentNode,B=$(n)||n.childNodes;if(B&&D){const H=B.length;for(let Y=H-1;Y>=0;--Y){const re=S(B[Y],!0);re.__removalCount=(n.__removalCount||0)+1,D.insertBefore(re,k(n))}}}return ee(n),!0}return n instanceof a&&!$t(n)||(b==="noscript"||b==="noembed"||b==="noframes")&&W(/<\/no(script|embed|frames)/i,n.innerHTML)?(ee(n),!0):(pe&&n.nodeType===Pe.text&&(f=n.textContent,qe([q,ae,N],D=>{f=Ne(f,D," ")}),n.textContent!==f&&(Re(r.removed,{element:n.cloneNode()}),n.textContent=f)),te(w.afterSanitizeElements,n,null),!1)},Fn=function(n,f,b){if(Sn&&(f==="id"||f==="name")&&(b in c||b in Lt))return!1;if(!(Ze&&!Ye[f]&&W(A,f))){if(!(kn&&W(Z,f))){if(!(de.attributeCheck instanceof Function&&de.attributeCheck(f,n))){if(!j[f]||Ye[f]){if(!(Un(n)&&(z.tagNameCheck instanceof RegExp&&W(z.tagNameCheck,n)||z.tagNameCheck instanceof Function&&z.tagNameCheck(n))&&(z.attributeNameCheck instanceof RegExp&&W(z.attributeNameCheck,f)||z.attributeNameCheck instanceof Function&&z.attributeNameCheck(f,n))||f==="is"&&z.allowCustomizedBuiltInElements&&(z.tagNameCheck instanceof RegExp&&W(z.tagNameCheck,b)||z.tagNameCheck instanceof Function&&z.tagNameCheck(b))))return!1}else if(!en[f]){if(!W(wn,Ne(b,En,""))){if(!((f==="src"||f==="xlink:href"||f==="href")&&n!=="script"&&Rr(b,"data:")===0&&Rn[n])){if(!(Tn&&!W(Xe,Ne(b,En,"")))){if(b)return!1}}}}}}}return!0},Un=function(n){return n!=="annotation-xml"&&dn(n,Mt)},jn=function(n){te(w.beforeSanitizeAttributes,n,null);const{attributes:f}=n;if(!f||on(n))return;const b={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:j,forceKeepAttr:void 0};let D=f.length;for(;D--;){const B=f[D],{name:H,namespaceURI:Y,value:re}=B,ve=U(H),an=re;let V=H==="value"?an:Nr(an);if(b.attrName=ve,b.attrValue=V,b.keepAttr=!0,b.forceKeepAttr=void 0,te(w.uponSanitizeAttribute,n,b),V=b.attrValue,An&&(ve==="id"||ve==="name")&&(ie(H,n),V=Rt+V),Le&&W(/((--!?|])>)|<\/(style|title|textarea)/i,V)){ie(H,n);continue}if(ve==="attributename"&&dn(V,"href")){ie(H,n);continue}if(b.forceKeepAttr)continue;if(!b.keepAttr){ie(H,n);continue}if(!_n&&W(/\/>/i,V)){ie(H,n);continue}pe&&qe([q,ae,N],qn=>{V=Ne(V,qn," ")});const Vn=U(n.nodeName);if(!Fn(Vn,ve,V)){ie(H,n);continue}if(O&&typeof P=="object"&&typeof P.getAttributeType=="function"&&!Y)switch(P.getAttributeType(Vn,ve)){case"TrustedHTML":{V=O.createHTML(V);break}case"TrustedScriptURL":{V=O.createScriptURL(V);break}}if(V!==an)try{Y?n.setAttributeNS(Y,H,V):n.setAttribute(H,V),on(n)?ee(n):pt(r.removed)}catch{ie(H,n)}}te(w.afterSanitizeAttributes,n,null)},Dt=function v(n){let f=null;const b=Dn(n);for(te(w.beforeSanitizeShadowDOM,n,null);f=b.nextNode();)te(w.uponSanitizeShadowNode,f,null),Hn(f),jn(f),f.content instanceof h&&v(f.content);te(w.afterSanitizeShadowDOM,n,null)};return r.sanitize=function(v){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=null,b=null,D=null,B=null;if(nn=!v,nn&&(v="<!-->"),typeof v!="string"&&!zn(v))if(typeof v.toString=="function"){if(v=v.toString(),typeof v!="string")throw Oe("dirty is not a string, aborting")}else throw Oe("toString is not a function");if(!r.isSupported)return v;if(Ke||rn(n),r.removed=[],typeof v=="string"&&(xe=!1),xe){if(v.nodeName){const re=U(v.nodeName);if(!F[re]||Ce[re])throw Oe("root node is forbidden and cannot be sanitized in-place")}}else if(v instanceof l)f=$n("<!---->"),b=f.ownerDocument.importNode(v,!0),b.nodeType===Pe.element&&b.nodeName==="BODY"||b.nodeName==="HTML"?f=b:f.appendChild(b);else{if(!fe&&!pe&&!se&&v.indexOf("<")===-1)return O&&De?O.createHTML(v):v;if(f=$n(v),!f)return fe?null:De?t:""}f&&Je&&ee(f.firstChild);const H=Dn(xe?v:f);for(;D=H.nextNode();)Hn(D),jn(D),D.content instanceof h&&Dt(D.content);if(xe)return v;if(fe){if($e)for(B=y.call(f.ownerDocument);f.firstChild;)B.appendChild(f.firstChild);else B=f;return(j.shadowroot||j.shadowrootmode)&&(B=I.call(s,B,!0)),B}let Y=se?f.outerHTML:f.innerHTML;return se&&F["!doctype"]&&f.ownerDocument&&f.ownerDocument.doctype&&f.ownerDocument.doctype.name&&W(St,f.ownerDocument.doctype.name)&&(Y="<!DOCTYPE "+f.ownerDocument.doctype.name+`>
`+Y),pe&&qe([q,ae,N],re=>{Y=Ne(Y,re," ")}),O&&De?O.createHTML(Y):Y},r.setConfig=function(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};rn(v),Ke=!0},r.clearConfig=function(){be=null,Ke=!1},r.isValidAttribute=function(v,n,f){be||rn({});const b=U(v),D=U(n);return Fn(b,D,f)},r.addHook=function(v,n){typeof n=="function"&&Re(w[v],n)},r.removeHook=function(v,n){if(n!==void 0){const f=Ar(w[v],n);return f===-1?void 0:Mr(w[v],f,1)[0]}return pt(w[v])},r.removeHooks=function(v){w[v]=[]},r.removeAllHooks=function(){w=vt()},r}var to=At();function ro(e){const r=Ft(),c=Ut();return r.key!=="default"?{to:e,onClick:p=>{p.preventDefault(),c(-1)}}:{to:e}}export{Jr as C,Qr as D,no as M,eo as _,to as p,ro as u};
