import{t as b,b as V,f as En,L as nt,v as tt,I as ot}from"./index-DIth0oIc.js";import{k as rt,B as Ye,C as at,m as st,n as ct,l as lt,o as it,p as ut}from"./card-fxtljBLB.js";import{p as dt,q as pt,j as mt}from"./ItemCardList-C-RxMh7h.js";import{C as ht}from"./chevron-down-BphMwi9y.js";import{a as ft}from"./use-dark-mode-mdHJdo6o.js";import{E as gt}from"./ErrorBoundary-B5mn_yui.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],vt=rt("chevron-right",bt);function yo({type:n,id:o}){const a=dt(n,o),r=pt(n,o),g=a?n==="puzzle"?"Solved":"Completed":n==="puzzle"?"Mark as Solved":"Mark as Complete",h=a?`Mark ${n} as ${n==="puzzle"?"unsolved":"incomplete"}`:`Mark ${n} as ${n==="puzzle"?"solved":"complete"}`;return b.jsxs(Ye,{variant:a?"contained":"outlined",color:"completed",onClick:r,"aria-label":h,className:"gap-2 w-full sm:w-40",children:[a&&b.jsx(mt,{className:"h-4 w-4"}),g]})}function wo({error:n,slug:o,backRoute:a,contentType:r="puzzle"}){const[u,d]=V.useState(!0),g={import:{title:"Import Error",description:`Failed to import the ${r} file. Check the file path and module exports.`},parse:{title:"Parse Error",description:`The ${r} file has a syntax error.`},markdown:{title:"Markdown Processing Error",description:`The ${r} content has a markdown formatting error.`},unknown:{title:"Loading Error",description:`An unexpected error occurred while loading the ${r}.`}},{title:h,description:C}=g[n.type],f=r==="puzzle"?"Puzzle":"Expedition",m=r==="puzzle"?"Puzzle Library":"Expedition Library";return b.jsx("div",{className:"container mx-auto px-4 py-6 max-w-4xl",children:b.jsxs(at,{className:"border-destructive/50",children:[b.jsx(st,{children:b.jsxs(ct,{className:"flex items-center gap-3",children:[b.jsx(lt,{className:"text-destructive size-8"}),h," (Dev Mode)"]})}),b.jsxs(it,{className:"space-y-6",children:[b.jsx("p",{className:"text-muted-foreground",children:C}),o&&b.jsxs("p",{className:"text-sm text-foreground",children:[f," slug: ",b.jsx("code",{className:"bg-muted px-2 py-1 rounded",children:o})]}),b.jsxs("div",{className:"rounded-md bg-destructive/10 p-4 border border-destructive/30",children:[b.jsx("p",{className:"text-sm font-semibold text-destructive mb-2",children:"Error Message:"}),b.jsx("pre",{className:"text-sm bg-muted p-3 rounded overflow-x-auto whitespace-pre-wrap",children:n.message})]}),n.stack&&b.jsxs("div",{className:"space-y-2",children:[b.jsxs(Ye,{variant:"ghost",size:"sm",onClick:()=>d(!u),className:"text-xs flex items-center gap-1",children:[u?b.jsx(ht,{className:"size-3"}):b.jsx(vt,{className:"size-3"}),"Stack Trace"]}),u&&b.jsx("pre",{className:"text-xs p-3 bg-muted rounded overflow-x-auto whitespace-pre-wrap",children:n.stack})]}),b.jsxs("div",{className:"flex gap-3 flex-wrap",children:[b.jsxs(ut,{to:a,variant:"contained",color:"primary",children:["Back to ",m]}),b.jsx(Ye,{variant:"outlined",onClick:()=>window.location.reload(),children:"Reload Page"})]}),b.jsxs("div",{className:"border-t pt-4 text-sm text-muted-foreground",children:[b.jsx("p",{className:"font-semibold",children:"Development Mode:"}),b.jsx("p",{children:'This detailed error view only appears in development. In production, users will see a clean "Not Found" message.'})]})]})]})})}const yt="modulepreload",wt=function(n){return"/"+n},Mn={},xo=function(o,a,r){let u=Promise.resolve();if(a&&a.length>0){let C=function(f){return Promise.all(f.map(m=>Promise.resolve(m).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),h=g?.nonce||g?.getAttribute("nonce");u=C(a.map(f=>{if(f=wt(f),f in Mn)return;Mn[f]=!0;const m=f.endsWith(".css"),v=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${v}`))return;const w=document.createElement("link");if(w.rel=m?"stylesheet":yt,m||(w.as="script"),w.crossOrigin="",w.href=f,h&&w.setAttribute("nonce",h),document.head.appendChild(w),m)return new Promise((L,i)=>{w.addEventListener("load",L),w.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${f}`)))})}))}function d(g){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=g,window.dispatchEvent(h),!h.defaultPrevented)throw g}return u.then(g=>{for(const h of g||[])h.status==="rejected"&&d(h.reason);return o().catch(d)})};var An=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,xt=/\n/g,Ct=/^\s*/,kt=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Et=/^:\s*/,Mt=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,At=/^[;\s]*/,Tt=/^\s+|\s+$/g,St=`
`,Tn="/",Sn="*",J="",_t="comment",Nt="declaration";function $t(n,o){if(typeof n!="string")throw new TypeError("First argument must be a string");if(!n)return[];o=o||{};var a=1,r=1;function u(i){var l=i.match(xt);l&&(a+=l.length);var y=i.lastIndexOf(St);r=~y?i.length-y:r+i.length}function d(){var i={line:a,column:r};return function(l){return l.position=new g(i),f(),l}}function g(i){this.start=i,this.end={line:a,column:r},this.source=o.source}g.prototype.content=n;function h(i){var l=new Error(o.source+":"+a+":"+r+": "+i);if(l.reason=i,l.filename=o.source,l.line=a,l.column=r,l.source=n,!o.silent)throw l}function C(i){var l=i.exec(n);if(l){var y=l[0];return u(y),n=n.slice(y.length),l}}function f(){C(Ct)}function m(i){var l;for(i=i||[];l=v();)l!==!1&&i.push(l);return i}function v(){var i=d();if(!(Tn!=n.charAt(0)||Sn!=n.charAt(1))){for(var l=2;J!=n.charAt(l)&&(Sn!=n.charAt(l)||Tn!=n.charAt(l+1));)++l;if(l+=2,J===n.charAt(l-1))return h("End of comment missing");var y=n.slice(2,l-2);return r+=2,u(y),n=n.slice(l),r+=2,i({type:_t,comment:y})}}function w(){var i=d(),l=C(kt);if(l){if(v(),!C(Et))return h("property missing ':'");var y=C(Mt),D=i({type:Nt,property:_n(l[0].replace(An,J)),value:y?_n(y[0].replace(An,J)):J});return C(At),D}}function L(){var i=[];m(i);for(var l;l=w();)l!==!1&&(i.push(l),m(i));return i}return f(),L()}function _n(n){return n?n.replace(Tt,J):J}const Rt=`(() => {
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
    const oklchMatch = colorStr.match(
      /oklch\\(\\s*([\\d.]+)\\s+([\\d.]+)\\s+([\\d.]+)\\s*(?:\\/\\s*([\\d.]+%?))?\\s*\\)/
    );
    if (oklchMatch) {
      const l = parseFloat(oklchMatch[1]);
      const c = parseFloat(oklchMatch[2]);
      const h = parseFloat(oklchMatch[3]);
      let a = 1;
      if (oklchMatch[4] != null) {
        a = oklchMatch[4].endsWith("%") ? parseFloat(oklchMatch[4]) / 100 : parseFloat(oklchMatch[4]);
      }
      const rgb = oklchToRgb({ l, c, h, a });
      return rgb;
    }
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.fillStyle = "#000";
    ctx.fillStyle = colorStr;
    const resolved = ctx.fillStyle;
    if (resolved.startsWith("#")) {
      const hex = resolved.slice(1);
      return {
        r: parseInt(hex.slice(0, 2), 16) / 255,
        g: parseInt(hex.slice(2, 4), 16) / 255,
        b: parseInt(hex.slice(4, 6), 16) / 255,
        a: hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1
      };
    }
    const rgbaMatch = resolved.match(/rgba?\\(\\s*([\\d.]+),\\s*([\\d.]+),\\s*([\\d.]+)(?:,\\s*([\\d.]+))?\\s*\\)/);
    if (rgbaMatch) {
      return {
        r: parseFloat(rgbaMatch[1]) / 255,
        g: parseFloat(rgbaMatch[2]) / 255,
        b: parseFloat(rgbaMatch[3]) / 255,
        a: rgbaMatch[4] != null ? parseFloat(rgbaMatch[4]) : 1
      };
    }
    return { r: 0, g: 0, b: 0, a: 1 };
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
`,Ot=`/* Base Reset */
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
.peer { }`,It={"local:chomp:chomp-grid":{id:"local:chomp:chomp-grid",code:`function mount(options) {
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
}`,metadata:{title:"Chomp",description:"Interactive visualization of a chocolate grid for Chomp puzzle",dateCreated:"2025-11-02T00:00:00.000Z",lastUpdated:"2025-11-09T00:00:00.000Z",published:"published"},scope:"local",sourcePath:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/adversarial-games/chomp/_components/chomp-grid.md"}},Lt="/*! tailwindcss v4.1.14 | MIT License | https://tailwindcss.com */:root,:host{--radius:.5rem;--color-navy-50:oklch(97% .015 220);--color-navy-100:oklch(94% .02 220);--color-navy-200:oklch(88% .03 220);--color-navy-300:oklch(80% .045 220);--color-navy-400:oklch(68% .06 220);--color-navy-500:oklch(55% .075 220);--color-navy-600:oklch(45% .08 220);--color-navy-700:oklch(35% .075 220);--color-navy-800:oklch(27% .065 220);--color-navy-900:oklch(20% .05 220);--color-navy-950:oklch(15% .04 220);--color-stone-50:oklch(98% .01 250);--color-stone-100:oklch(95% .015 250);--color-stone-200:oklch(90% .025 250);--color-stone-300:oklch(83% .035 250);--color-stone-400:oklch(74% .045 250);--color-stone-500:oklch(65% .055 250);--color-stone-600:oklch(55% .06 250);--color-stone-700:oklch(45% .055 250);--color-stone-800:oklch(35% .045 250);--color-stone-900:oklch(27% .035 250);--color-stone-950:oklch(20% .025 250);--color-teal-50:oklch(97% .015 185);--color-teal-100:oklch(94% .025 185);--color-teal-200:oklch(88% .04 185);--color-teal-300:oklch(80% .055 185);--color-teal-400:oklch(70% .07 185);--color-teal-500:oklch(60% .08 185);--color-teal-600:oklch(50% .085 185);--color-teal-700:oklch(40% .08 185);--color-teal-800:oklch(32% .07 185);--color-teal-900:oklch(25% .055 185);--color-teal-950:oklch(18% .04 185);--color-evergreen-50:oklch(97% .02 155);--color-evergreen-100:oklch(93% .035 155);--color-evergreen-200:oklch(87% .055 155);--color-evergreen-300:oklch(79% .07 155);--color-evergreen-400:oklch(69% .085 155);--color-evergreen-500:oklch(59% .095 155);--color-evergreen-600:oklch(49% .1 155);--color-evergreen-700:oklch(41% .095 155);--color-evergreen-800:oklch(33% .08 155);--color-evergreen-900:oklch(27% .065 155);--color-evergreen-950:oklch(21% .05 155);--color-sand-50:oklch(98% .012 95);--color-sand-100:oklch(95% .02 95);--color-sand-200:oklch(90% .035 95);--color-sand-300:oklch(84% .05 95);--color-sand-400:oklch(76% .065 95);--color-sand-500:oklch(68% .08 95);--color-sand-600:oklch(60% .09 95);--color-sand-700:oklch(50% .085 95);--color-sand-800:oklch(40% .07 95);--color-sand-900:oklch(32% .055 95);--color-sand-950:oklch(26% .04 95);--color-error-50:oklch(97% .02 25);--color-error-100:oklch(94% .035 25);--color-error-200:oklch(88% .055 25);--color-error-300:oklch(80% .075 25);--color-error-400:oklch(70% .095 25);--color-error-500:oklch(60% .11 25);--color-error-600:oklch(50% .115 25);--color-error-700:oklch(42% .11 25);--color-error-800:oklch(34% .095 25);--color-error-900:oklch(28% .075 25);--color-error-950:oklch(22% .055 25);--color-warning-50:oklch(97% .02 75);--color-warning-100:oklch(94% .035 75);--color-warning-200:oklch(89% .06 75);--color-warning-300:oklch(82% .085 75);--color-warning-400:oklch(73% .105 75);--color-warning-500:oklch(65% .12 75);--color-warning-600:oklch(56% .125 75);--color-warning-700:oklch(47% .115 75);--color-warning-800:oklch(38% .095 75);--color-warning-900:oklch(30% .07 75);--color-warning-950:oklch(24% .05 75);--color-success-50:oklch(97% .02 165);--color-success-100:oklch(93% .035 165);--color-success-200:oklch(87% .055 165);--color-success-300:oklch(79% .075 165);--color-success-400:oklch(69% .095 165);--color-success-500:oklch(59% .11 165);--color-success-600:oklch(49% .115 165);--color-success-700:oklch(41% .105 165);--color-success-800:oklch(33% .09 165);--color-success-900:oklch(27% .07 165);--color-success-950:oklch(21% .05 165);--color-white:oklch(100% 0 0);--color-background:var(--color-stone-50);--color-foreground:var(--color-navy-950);--color-card:var(--color-white);--color-card-foreground:var(--color-navy-950);--color-popover:var(--color-white);--color-popover-foreground:var(--color-navy-950);--color-primary:var(--color-navy-600);--color-primary-foreground:var(--color-white);--color-secondary:var(--color-evergreen-600);--color-secondary-foreground:var(--color-white);--color-muted:var(--color-stone-100);--color-muted-foreground:var(--color-navy-600);--color-accent:var(--color-sand-600);--color-accent-foreground:var(--color-white);--color-destructive:var(--color-error-600);--color-destructive-foreground:var(--color-white);--color-success:var(--color-success-600);--color-success-foreground:var(--color-white);--color-completed:var(--color-evergreen-500);--color-completed-foreground:var(--color-white);--color-warning:var(--color-warning-600);--color-warning-foreground:var(--color-white);--color-info:var(--color-navy-500);--color-info-foreground:var(--color-white);--color-border:var(--color-stone-600);--color-input:var(--color-stone-300);--color-ring:var(--color-navy-400);--color-divider:var(--color-stone-200);--color-surface:var(--color-white);--color-text-secondary:var(--color-stone-600);--color-text-emphasis:var(--color-navy-600);--color-link:var(--color-navy-600);--color-link-hover:var(--color-navy-700);--color-select-hover:var(--color-navy-50);--color-select-hover-foreground:var(--color-navy-950);--color-checkbox-checked:var(--color-navy-600);--color-checkbox-checked-foreground:var(--color-white);--color-nav-foreground:var(--color-navy-600);--color-selection:var(--color-navy-200);--color-selection-foreground:var(--color-navy-900);--color-difficulty-easy:var(--color-success-100);--color-difficulty-easy-foreground:var(--color-success-800);--color-difficulty-medium:var(--color-navy-100);--color-difficulty-medium-foreground:var(--color-navy-800);--color-difficulty-hard:var(--color-warning-100);--color-difficulty-hard-foreground:var(--color-warning-800);--color-difficulty-expert:var(--color-error-100);--color-difficulty-expert-foreground:var(--color-error-800);--color-difficulty-open:var(--color-stone-200);--color-difficulty-open-foreground:var(--color-stone-900);--gradient-recommendation-start:var(--color-evergreen-500);--gradient-recommendation-end:var(--color-navy-500);--gradient-progress-start:var(--color-teal-600);--gradient-progress-end:var(--color-teal-500)}::-moz-selection{background-color:var(--color-selection);color:var(--color-selection-foreground)}::selection{background-color:var(--color-selection);color:var(--color-selection-foreground)}.dark{--color-background:oklch(10% .035 220);--color-foreground:var(--color-stone-200);--color-card:var(--color-navy-900);--color-card-foreground:var(--color-stone-200);--color-popover:var(--color-navy-900);--color-popover-foreground:var(--color-stone-200);--color-primary:var(--color-navy-400);--color-primary-foreground:var(--color-navy-950);--color-secondary:var(--color-evergreen-400);--color-secondary-foreground:var(--color-navy-950);--color-muted:var(--color-navy-800);--color-muted-foreground:var(--color-stone-400);--color-accent:var(--color-sand-400);--color-accent-foreground:var(--color-navy-950);--color-destructive:var(--color-error-400);--color-destructive-foreground:var(--color-navy-950);--color-success:var(--color-success-400);--color-success-foreground:var(--color-navy-950);--color-completed:var(--color-evergreen-300);--color-completed-foreground:var(--color-navy-950);--color-warning:var(--color-warning-400);--color-warning-foreground:var(--color-navy-950);--color-info:var(--color-navy-300);--color-info-foreground:var(--color-navy-950);--color-border:var(--color-navy-700);--color-input:var(--color-navy-600);--color-ring:var(--color-navy-400);--color-divider:var(--color-navy-700);--color-surface:var(--color-navy-900);--color-text-secondary:var(--color-stone-400);--color-text-emphasis:var(--color-stone-50);--color-link:var(--color-navy-400);--color-link-hover:var(--color-navy-300);--color-select-hover:var(--color-navy-800);--color-select-hover-foreground:var(--color-stone-200);--color-checkbox-checked:var(--color-navy-400);--color-checkbox-checked-foreground:var(--color-navy-950);--color-nav-foreground:var(--color-stone-200);--color-selection:var(--color-navy-700);--color-selection-foreground:var(--color-navy-100);--color-difficulty-easy:var(--color-success-900);--color-difficulty-easy-foreground:var(--color-success-200);--color-difficulty-medium:var(--color-navy-900);--color-difficulty-medium-foreground:var(--color-navy-200);--color-difficulty-hard:var(--color-warning-900);--color-difficulty-hard-foreground:var(--color-warning-200);--color-difficulty-expert:var(--color-error-900);--color-difficulty-expert-foreground:var(--color-error-200);--color-difficulty-open:var(--color-stone-700);--color-difficulty-open-foreground:var(--color-stone-200);--gradient-recommendation-start:var(--color-evergreen-600);--gradient-recommendation-end:var(--color-navy-600);--gradient-progress-start:var(--color-teal-600);--gradient-progress-end:var(--color-teal-500)}",Pt=300;function zt({blockData:n,blockId:o,inlineComponents:a}){const r=V.useRef(null),[u,d]=V.useState(Pt),[g]=ft(),h=V.useRef("");h.current||(h.current=Ft(n,Rt,Ot,Lt,a)),V.useEffect(()=>{const f=m=>{if(m.source===r.current?.contentWindow&&m.data?.event==="resize-request"){const{height:v}=m.data.data;typeof v=="number"&&v>0&&d(v)}};return window.addEventListener("message",f),()=>window.removeEventListener("message",f)},[]),V.useEffect(()=>{const f=r.current;if(!f||!f.contentWindow)return;const m=()=>{f.contentWindow?.postMessage({event:"theme-change",data:{theme:g?"dark":"light"}},"*")};return m(),f.addEventListener("load",m),()=>f.removeEventListener("load",m)},[g]);const C=typeof n.props?.minWidth=="number"?n.props.minWidth:0;return b.jsx("div",{className:`dynamic-block-container ${C>0?"overflow-x-auto":"flex justify-center"}`,children:b.jsx("iframe",{className:"border-0 block",ref:r,sandbox:"allow-scripts",srcDoc:h.current,style:{width:n.width||"100%",...C>0&&{minWidth:`${C}px`},height:`${u}px`},title:n.title||`Interactive content ${o}`})})}function Dt(n,o){if(!n.startsWith("./"))return n;if(!o)return console.error(`[DynamicBlock Error] Local component reference "${n}" requires sourceFile path, but none was provided.`),null;const a=n.substring(2),r=o.split(/[/\\]/);return`local:${r[r.length-2]||"unknown"}:${a}`}function Ft(n,o,a,r,u){let d=(n.mode==="dom"||n.mode==="canvas")&&n.code||"",g=n.mode==="dom"&&n.layout||"",h=n.mode==="dom"&&n.css||"",C=n.startLine;if(n.mode==="component"&&n.componentId)if(n.componentId.startsWith("#")){const i=n.componentId.substring(1),l=u?.[i];l?(d=l.code,g=l.layout||"",h=l.css||"",C=l.startLine):(console.error(`[DynamicBlock Error] Inline component not found: "${n.componentId}"
Expected: A :::component[${i}] definition in the same file.
Make sure the component is defined before it's used.`),d="",g="",h="")}else{const i=Dt(n.componentId,n.sourceFile);if(!i)d="",g="",h="";else{const l=It[i];if(l)d=l.code,g=l.layout||"",h=l.css||"";else{const y=n.componentId.startsWith("./");console.error(y?`[DynamicBlock Error] Local component not found: "${n.componentId}"
Expected: A file named "${n.componentId.substring(2)}.md" in _components/ subdirectory
Source file: ${n.sourceFile||"unknown"}
Resolved to scoped ID: ${i}
Make sure the _components/ directory exists and the component file is present.`:`[DynamicBlock Error] Shared component not found: "${n.componentId}"
Expected: A file named "${n.componentId}.md" in content/components/ (searched recursively)
Make sure the component file exists and has been registered in the component registry.`),d="",g="",h=""}}}const f=JSON.stringify(n.props||{}),m=n.mode==="canvas"?n.ariaLabel:void 0,v=JSON.stringify(m||null);let w="",L="";if(n.sourceFile&&C&&d){const i=n.sourceFile.indexOf("content/");w=`//# sourceURL=${i!==-1?n.sourceFile.substring(i):n.sourceFile.split("/").slice(-2).join("/")}
`;const y=C-2;y>0&&(L=`
`.repeat(y))}return`<!DOCTYPE html>
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
    ${r}

    ${a}
    ${h?`

    /* Custom CSS from author or inline component */
    ${h}`:""}
  </style>
</head>
<body>
  <div id="root">${g}</div>

  <!-- Runtime and globals script -->
  <script>
    // Component props (available globally)
    window.__COMPONENT_PROPS__ = ${f};

    // Canvas accessibility label (for canvas mode blocks)
    window.__CANVAS_ARIA_LABEL__ = ${v};

    // Injected sandbox runtime
    ${o}
  <\/script>

  <!-- User code script with source mapping -->
  <script>${w}${L}${d?`${d}`:""}<\/script>

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
</html>`}const Ht="dynamic-block-placeholder",Wt="data-dynamic-block-id",Ut="data-dynamic-block-react",Vt="data-content-link-react",jt="dynamic-block-container";function Co({content:n,dynamicBlocks:o=[],inlineComponents:a}){const[r,u]=V.useState(new Map),[d,g]=V.useState(new Map),[h,C]=V.useState(new Map),f=V.useCallback(m=>{if(!m)return;m.innerHTML=n;const v=new Map,w=new Map,L=new Map;let i=0;o.length>0&&m.querySelectorAll(`.${Ht}`).forEach(D=>{const Y=D.getAttribute(Wt);if(!Y)return;const z=parseInt(Y,10);if(isNaN(z)||z<0||z>=o.length)return;const k=document.createElement("div");k.setAttribute(Ut,z.toString()),k.className=jt,D.replaceWith(k),v.set(z,k)}),m.querySelectorAll('a[href^="/puzzle/"], a[href^="/expedition/"]').forEach(y=>{const D=y.getAttribute("href");if(!D||!D.startsWith("/puzzle/")&&!D.startsWith("/expedition/"))return;let Y={};const z=y.getAttribute("style");if(z)try{$t(z).forEach(X=>{if(X.type==="declaration"&&X.property&&X.value){const Ae=X.property.replace(/-([a-z])/g,Te=>Te[1].toUpperCase());Y[Ae]=X.value}})}catch(Q){console.warn(`Failed to parse inline styles for link: ${D}`,Q)}const k={href:D,text:y.textContent||"",className:y.getAttribute("class")||void 0,style:Object.keys(Y).length>0?Y:void 0,id:y.getAttribute("id")||void 0},W=document.createElement("span");W.setAttribute(Vt,i.toString()),W.style.display="contents",y.replaceWith(W),w.set(i,W),L.set(i,k),i++}),u(v),g(w),C(L)},[n,o]);return b.jsxs(b.Fragment,{children:[b.jsx("div",{ref:f,className:"markdown-content prose max-w-none space-y-4"}),Array.from(r.entries()).map(([m,v])=>{const w=o[m];return w?En.createPortal(b.jsx(gt,{context:"dynamic-block",children:b.jsx(zt,{blockId:m,blockData:w,inlineComponents:a})},m),v):null}),Array.from(h.entries()).map(([m,v])=>{const w=d.get(m);return w?En.createPortal(b.jsx(nt,{to:v.href,className:v.className,style:v.style,id:v.id,children:v.text},`link-${m}`),w):null})]})}/*! @license DOMPurify 3.3.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.0/LICENSE */const{entries:Dn,setPrototypeOf:Nn,isFrozen:Bt,getPrototypeOf:qt,getOwnPropertyDescriptor:Gt}=Object;let{freeze:O,seal:F,create:Xe}=Object,{apply:Ke,construct:Ze}=typeof Reflect<"u"&&Reflect;O||(O=function(o){return o});F||(F=function(o){return o});Ke||(Ke=function(o,a){for(var r=arguments.length,u=new Array(r>2?r-2:0),d=2;d<r;d++)u[d-2]=arguments[d];return o.apply(a,u)});Ze||(Ze=function(o){for(var a=arguments.length,r=new Array(a>1?a-1:0),u=1;u<a;u++)r[u-1]=arguments[u];return new o(...r)});const ke=I(Array.prototype.forEach),Yt=I(Array.prototype.lastIndexOf),$n=I(Array.prototype.pop),de=I(Array.prototype.push),Xt=I(Array.prototype.splice),Me=I(String.prototype.toLowerCase),Ue=I(String.prototype.toString),Ve=I(String.prototype.match),pe=I(String.prototype.replace),Kt=I(String.prototype.indexOf),Zt=I(String.prototype.trim),H=I(Object.prototype.hasOwnProperty),R=I(RegExp.prototype.test),me=Jt(TypeError);function I(n){return function(o){o instanceof RegExp&&(o.lastIndex=0);for(var a=arguments.length,r=new Array(a>1?a-1:0),u=1;u<a;u++)r[u-1]=arguments[u];return Ke(n,o,r)}}function Jt(n){return function(){for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return Ze(n,a)}}function p(n,o){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Me;Nn&&Nn(n,null);let r=o.length;for(;r--;){let u=o[r];if(typeof u=="string"){const d=a(u);d!==u&&(Bt(o)||(o[r]=d),u=d)}n[u]=!0}return n}function Qt(n){for(let o=0;o<n.length;o++)H(n,o)||(n[o]=null);return n}function G(n){const o=Xe(null);for(const[a,r]of Dn(n))H(n,a)&&(Array.isArray(r)?o[a]=Qt(r):r&&typeof r=="object"&&r.constructor===Object?o[a]=G(r):o[a]=r);return o}function he(n,o){for(;n!==null;){const r=Gt(n,o);if(r){if(r.get)return I(r.get);if(typeof r.value=="function")return I(r.value)}n=qt(n)}function a(){return null}return a}const Rn=O(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),je=O(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Be=O(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),eo=O(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),qe=O(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),no=O(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),On=O(["#text"]),In=O(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Ge=O(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ln=O(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ee=O(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),to=F(/\{\{[\w\W]*|[\w\W]*\}\}/gm),oo=F(/<%[\w\W]*|[\w\W]*%>/gm),ro=F(/\$\{[\w\W]*/gm),ao=F(/^data-[\-\w.\u00B7-\uFFFF]+$/),so=F(/^aria-[\-\w]+$/),Fn=F(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),co=F(/^(?:\w+script|data):/i),lo=F(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Hn=F(/^html$/i),io=F(/^[a-z][.\w]*(-[.\w]+)+$/i);var Pn=Object.freeze({__proto__:null,ARIA_ATTR:so,ATTR_WHITESPACE:lo,CUSTOM_ELEMENT:io,DATA_ATTR:ao,DOCTYPE_NAME:Hn,ERB_EXPR:oo,IS_ALLOWED_URI:Fn,IS_SCRIPT_OR_DATA:co,MUSTACHE_EXPR:to,TMPLIT_EXPR:ro});const fe={element:1,text:3,progressingInstruction:7,comment:8,document:9},uo=function(){return typeof window>"u"?null:window},po=function(o,a){if(typeof o!="object"||typeof o.createPolicy!="function")return null;let r=null;const u="data-tt-policy-suffix";a&&a.hasAttribute(u)&&(r=a.getAttribute(u));const d="dompurify"+(r?"#"+r:"");try{return o.createPolicy(d,{createHTML(g){return g},createScriptURL(g){return g}})}catch{return console.warn("TrustedTypes policy "+d+" could not be created."),null}},zn=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Wn(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:uo();const o=c=>Wn(c);if(o.version="3.3.0",o.removed=[],!n||!n.document||n.document.nodeType!==fe.document||!n.Element)return o.isSupported=!1,o;let{document:a}=n;const r=a,u=r.currentScript,{DocumentFragment:d,HTMLTemplateElement:g,Node:h,Element:C,NodeFilter:f,NamedNodeMap:m=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:v,DOMParser:w,trustedTypes:L}=n,i=C.prototype,l=he(i,"cloneNode"),y=he(i,"remove"),D=he(i,"nextSibling"),Y=he(i,"childNodes"),z=he(i,"parentNode");if(typeof g=="function"){const c=a.createElement("template");c.content&&c.content.ownerDocument&&(a=c.content.ownerDocument)}let k,W="";const{implementation:Q,createNodeIterator:X,createDocumentFragment:Ae,getElementsByTagName:Te}=a,{importNode:Un}=r;let $=zn();o.isSupported=typeof Dn=="function"&&typeof z=="function"&&Q&&Q.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:Se,ERB_EXPR:_e,TMPLIT_EXPR:Ne,DATA_ATTR:Vn,ARIA_ATTR:jn,IS_SCRIPT_OR_DATA:Bn,ATTR_WHITESPACE:Je,CUSTOM_ELEMENT:qn}=Pn;let{IS_ALLOWED_URI:Qe}=Pn,A=null;const en=p({},[...Rn,...je,...Be,...qe,...On]);let S=null;const nn=p({},[...In,...Ge,...Ln,...Ee]);let E=Object.seal(Xe(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),le=null,$e=null;const ee=Object.seal(Xe(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let tn=!0,Re=!0,on=!1,rn=!0,ne=!1,ge=!0,K=!1,Oe=!1,Ie=!1,te=!1,be=!1,ve=!1,an=!0,sn=!1;const Gn="user-content-";let Le=!0,ie=!1,oe={},re=null;const cn=p({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let ln=null;const un=p({},["audio","video","img","source","image","track"]);let Pe=null;const dn=p({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ye="http://www.w3.org/1998/Math/MathML",we="http://www.w3.org/2000/svg",j="http://www.w3.org/1999/xhtml";let ae=j,ze=!1,De=null;const Yn=p({},[ye,we,j],Ue);let xe=p({},["mi","mo","mn","ms","mtext"]),Ce=p({},["annotation-xml"]);const Xn=p({},["title","style","font","a","script"]);let ue=null;const Kn=["application/xhtml+xml","text/html"],Zn="text/html";let T=null,se=null;const Jn=a.createElement("form"),pn=function(e){return e instanceof RegExp||e instanceof Function},Fe=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(se&&se===e)){if((!e||typeof e!="object")&&(e={}),e=G(e),ue=Kn.indexOf(e.PARSER_MEDIA_TYPE)===-1?Zn:e.PARSER_MEDIA_TYPE,T=ue==="application/xhtml+xml"?Ue:Me,A=H(e,"ALLOWED_TAGS")?p({},e.ALLOWED_TAGS,T):en,S=H(e,"ALLOWED_ATTR")?p({},e.ALLOWED_ATTR,T):nn,De=H(e,"ALLOWED_NAMESPACES")?p({},e.ALLOWED_NAMESPACES,Ue):Yn,Pe=H(e,"ADD_URI_SAFE_ATTR")?p(G(dn),e.ADD_URI_SAFE_ATTR,T):dn,ln=H(e,"ADD_DATA_URI_TAGS")?p(G(un),e.ADD_DATA_URI_TAGS,T):un,re=H(e,"FORBID_CONTENTS")?p({},e.FORBID_CONTENTS,T):cn,le=H(e,"FORBID_TAGS")?p({},e.FORBID_TAGS,T):G({}),$e=H(e,"FORBID_ATTR")?p({},e.FORBID_ATTR,T):G({}),oe=H(e,"USE_PROFILES")?e.USE_PROFILES:!1,tn=e.ALLOW_ARIA_ATTR!==!1,Re=e.ALLOW_DATA_ATTR!==!1,on=e.ALLOW_UNKNOWN_PROTOCOLS||!1,rn=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ne=e.SAFE_FOR_TEMPLATES||!1,ge=e.SAFE_FOR_XML!==!1,K=e.WHOLE_DOCUMENT||!1,te=e.RETURN_DOM||!1,be=e.RETURN_DOM_FRAGMENT||!1,ve=e.RETURN_TRUSTED_TYPE||!1,Ie=e.FORCE_BODY||!1,an=e.SANITIZE_DOM!==!1,sn=e.SANITIZE_NAMED_PROPS||!1,Le=e.KEEP_CONTENT!==!1,ie=e.IN_PLACE||!1,Qe=e.ALLOWED_URI_REGEXP||Fn,ae=e.NAMESPACE||j,xe=e.MATHML_TEXT_INTEGRATION_POINTS||xe,Ce=e.HTML_INTEGRATION_POINTS||Ce,E=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&pn(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(E.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&pn(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(E.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(E.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ne&&(Re=!1),be&&(te=!0),oe&&(A=p({},On),S=[],oe.html===!0&&(p(A,Rn),p(S,In)),oe.svg===!0&&(p(A,je),p(S,Ge),p(S,Ee)),oe.svgFilters===!0&&(p(A,Be),p(S,Ge),p(S,Ee)),oe.mathMl===!0&&(p(A,qe),p(S,Ln),p(S,Ee))),e.ADD_TAGS&&(typeof e.ADD_TAGS=="function"?ee.tagCheck=e.ADD_TAGS:(A===en&&(A=G(A)),p(A,e.ADD_TAGS,T))),e.ADD_ATTR&&(typeof e.ADD_ATTR=="function"?ee.attributeCheck=e.ADD_ATTR:(S===nn&&(S=G(S)),p(S,e.ADD_ATTR,T))),e.ADD_URI_SAFE_ATTR&&p(Pe,e.ADD_URI_SAFE_ATTR,T),e.FORBID_CONTENTS&&(re===cn&&(re=G(re)),p(re,e.FORBID_CONTENTS,T)),Le&&(A["#text"]=!0),K&&p(A,["html","head","body"]),A.table&&(p(A,["tbody"]),delete le.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw me('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw me('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');k=e.TRUSTED_TYPES_POLICY,W=k.createHTML("")}else k===void 0&&(k=po(L,u)),k!==null&&typeof W=="string"&&(W=k.createHTML(""));O&&O(e),se=e}},mn=p({},[...je,...Be,...eo]),hn=p({},[...qe,...no]),Qn=function(e){let t=z(e);(!t||!t.tagName)&&(t={namespaceURI:ae,tagName:"template"});const s=Me(e.tagName),x=Me(t.tagName);return De[e.namespaceURI]?e.namespaceURI===we?t.namespaceURI===j?s==="svg":t.namespaceURI===ye?s==="svg"&&(x==="annotation-xml"||xe[x]):!!mn[s]:e.namespaceURI===ye?t.namespaceURI===j?s==="math":t.namespaceURI===we?s==="math"&&Ce[x]:!!hn[s]:e.namespaceURI===j?t.namespaceURI===we&&!Ce[x]||t.namespaceURI===ye&&!xe[x]?!1:!hn[s]&&(Xn[s]||!mn[s]):!!(ue==="application/xhtml+xml"&&De[e.namespaceURI]):!1},U=function(e){de(o.removed,{element:e});try{z(e).removeChild(e)}catch{y(e)}},Z=function(e,t){try{de(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch{de(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is")if(te||be)try{U(t)}catch{}else try{t.setAttribute(e,"")}catch{}},fn=function(e){let t=null,s=null;if(Ie)e="<remove></remove>"+e;else{const M=Ve(e,/^[\r\n\t ]+/);s=M&&M[0]}ue==="application/xhtml+xml"&&ae===j&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const x=k?k.createHTML(e):e;if(ae===j)try{t=new w().parseFromString(x,ue)}catch{}if(!t||!t.documentElement){t=Q.createDocument(ae,"template",null);try{t.documentElement.innerHTML=ze?W:x}catch{}}const N=t.body||t.documentElement;return e&&s&&N.insertBefore(a.createTextNode(s),N.childNodes[0]||null),ae===j?Te.call(t,K?"html":"body")[0]:K?t.documentElement:N},gn=function(e){return X.call(e.ownerDocument||e,e,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT|f.SHOW_PROCESSING_INSTRUCTION|f.SHOW_CDATA_SECTION,null)},He=function(e){return e instanceof v&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof m)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},bn=function(e){return typeof h=="function"&&e instanceof h};function B(c,e,t){ke(c,s=>{s.call(o,e,t,se)})}const vn=function(e){let t=null;if(B($.beforeSanitizeElements,e,null),He(e))return U(e),!0;const s=T(e.nodeName);if(B($.uponSanitizeElement,e,{tagName:s,allowedTags:A}),ge&&e.hasChildNodes()&&!bn(e.firstElementChild)&&R(/<[/\w!]/g,e.innerHTML)&&R(/<[/\w!]/g,e.textContent)||e.nodeType===fe.progressingInstruction||ge&&e.nodeType===fe.comment&&R(/<[/\w]/g,e.data))return U(e),!0;if(!(ee.tagCheck instanceof Function&&ee.tagCheck(s))&&(!A[s]||le[s])){if(!le[s]&&wn(s)&&(E.tagNameCheck instanceof RegExp&&R(E.tagNameCheck,s)||E.tagNameCheck instanceof Function&&E.tagNameCheck(s)))return!1;if(Le&&!re[s]){const x=z(e)||e.parentNode,N=Y(e)||e.childNodes;if(N&&x){const M=N.length;for(let P=M-1;P>=0;--P){const q=l(N[P],!0);q.__removalCount=(e.__removalCount||0)+1,x.insertBefore(q,D(e))}}}return U(e),!0}return e instanceof C&&!Qn(e)||(s==="noscript"||s==="noembed"||s==="noframes")&&R(/<\/no(script|embed|frames)/i,e.innerHTML)?(U(e),!0):(ne&&e.nodeType===fe.text&&(t=e.textContent,ke([Se,_e,Ne],x=>{t=pe(t,x," ")}),e.textContent!==t&&(de(o.removed,{element:e.cloneNode()}),e.textContent=t)),B($.afterSanitizeElements,e,null),!1)},yn=function(e,t,s){if(an&&(t==="id"||t==="name")&&(s in a||s in Jn))return!1;if(!(Re&&!$e[t]&&R(Vn,t))){if(!(tn&&R(jn,t))){if(!(ee.attributeCheck instanceof Function&&ee.attributeCheck(t,e))){if(!S[t]||$e[t]){if(!(wn(e)&&(E.tagNameCheck instanceof RegExp&&R(E.tagNameCheck,e)||E.tagNameCheck instanceof Function&&E.tagNameCheck(e))&&(E.attributeNameCheck instanceof RegExp&&R(E.attributeNameCheck,t)||E.attributeNameCheck instanceof Function&&E.attributeNameCheck(t,e))||t==="is"&&E.allowCustomizedBuiltInElements&&(E.tagNameCheck instanceof RegExp&&R(E.tagNameCheck,s)||E.tagNameCheck instanceof Function&&E.tagNameCheck(s))))return!1}else if(!Pe[t]){if(!R(Qe,pe(s,Je,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&Kt(s,"data:")===0&&ln[e])){if(!(on&&!R(Bn,pe(s,Je,"")))){if(s)return!1}}}}}}}return!0},wn=function(e){return e!=="annotation-xml"&&Ve(e,qn)},xn=function(e){B($.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||He(e))return;const s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:S,forceKeepAttr:void 0};let x=t.length;for(;x--;){const N=t[x],{name:M,namespaceURI:P,value:q}=N,ce=T(M),We=q;let _=M==="value"?We:Zt(We);if(s.attrName=ce,s.attrValue=_,s.keepAttr=!0,s.forceKeepAttr=void 0,B($.uponSanitizeAttribute,e,s),_=s.attrValue,sn&&(ce==="id"||ce==="name")&&(Z(M,e),_=Gn+_),ge&&R(/((--!?|])>)|<\/(style|title|textarea)/i,_)){Z(M,e);continue}if(ce==="attributename"&&Ve(_,"href")){Z(M,e);continue}if(s.forceKeepAttr)continue;if(!s.keepAttr){Z(M,e);continue}if(!rn&&R(/\/>/i,_)){Z(M,e);continue}ne&&ke([Se,_e,Ne],kn=>{_=pe(_,kn," ")});const Cn=T(e.nodeName);if(!yn(Cn,ce,_)){Z(M,e);continue}if(k&&typeof L=="object"&&typeof L.getAttributeType=="function"&&!P)switch(L.getAttributeType(Cn,ce)){case"TrustedHTML":{_=k.createHTML(_);break}case"TrustedScriptURL":{_=k.createScriptURL(_);break}}if(_!==We)try{P?e.setAttributeNS(P,M,_):e.setAttribute(M,_),He(e)?U(e):$n(o.removed)}catch{Z(M,e)}}B($.afterSanitizeAttributes,e,null)},et=function c(e){let t=null;const s=gn(e);for(B($.beforeSanitizeShadowDOM,e,null);t=s.nextNode();)B($.uponSanitizeShadowNode,t,null),vn(t),xn(t),t.content instanceof d&&c(t.content);B($.afterSanitizeShadowDOM,e,null)};return o.sanitize=function(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=null,s=null,x=null,N=null;if(ze=!c,ze&&(c="<!-->"),typeof c!="string"&&!bn(c))if(typeof c.toString=="function"){if(c=c.toString(),typeof c!="string")throw me("dirty is not a string, aborting")}else throw me("toString is not a function");if(!o.isSupported)return c;if(Oe||Fe(e),o.removed=[],typeof c=="string"&&(ie=!1),ie){if(c.nodeName){const q=T(c.nodeName);if(!A[q]||le[q])throw me("root node is forbidden and cannot be sanitized in-place")}}else if(c instanceof h)t=fn("<!---->"),s=t.ownerDocument.importNode(c,!0),s.nodeType===fe.element&&s.nodeName==="BODY"||s.nodeName==="HTML"?t=s:t.appendChild(s);else{if(!te&&!ne&&!K&&c.indexOf("<")===-1)return k&&ve?k.createHTML(c):c;if(t=fn(c),!t)return te?null:ve?W:""}t&&Ie&&U(t.firstChild);const M=gn(ie?c:t);for(;x=M.nextNode();)vn(x),xn(x),x.content instanceof d&&et(x.content);if(ie)return c;if(te){if(be)for(N=Ae.call(t.ownerDocument);t.firstChild;)N.appendChild(t.firstChild);else N=t;return(S.shadowroot||S.shadowrootmode)&&(N=Un.call(r,N,!0)),N}let P=K?t.outerHTML:t.innerHTML;return K&&A["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&R(Hn,t.ownerDocument.doctype.name)&&(P="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+P),ne&&ke([Se,_e,Ne],q=>{P=pe(P,q," ")}),k&&ve?k.createHTML(P):P},o.setConfig=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Fe(c),Oe=!0},o.clearConfig=function(){se=null,Oe=!1},o.isValidAttribute=function(c,e,t){se||Fe({});const s=T(c),x=T(e);return yn(s,x,t)},o.addHook=function(c,e){typeof e=="function"&&de($[c],e)},o.removeHook=function(c,e){if(e!==void 0){const t=Yt($[c],e);return t===-1?void 0:Xt($[c],t,1)[0]}return $n($[c])},o.removeHooks=function(c){$[c]=[]},o.removeAllHooks=function(){$=zn()},o}var ko=Wn();function Eo(n){const o=tt(),a=ot();return o.key!=="default"?{to:n,onClick:u=>{u.preventDefault(),a(-1)}}:{to:n}}export{yo as C,wo as D,Co as M,xo as _,ko as p,Eo as u};
