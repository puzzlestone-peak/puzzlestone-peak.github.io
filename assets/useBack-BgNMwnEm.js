import{t as m,b as W,f as kn,L as et,v as nt,I as tt}from"./index-DIth0oIc.js";import{k as rt,B as Ye,C as ot,m as at,n as st,l as ct,o as lt,p as it}from"./card-fxtljBLB.js";import{p as ut,q as dt,j as pt}from"./ItemCardList-C-RxMh7h.js";import{C as mt}from"./chevron-down-BphMwi9y.js";import{a as ft}from"./use-dark-mode-mdHJdo6o.js";import{E as ht}from"./ErrorBoundary-B5mn_yui.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],bt=rt("chevron-right",gt);function hr({type:n,id:r}){const s=ut(n,r),o=dt(n,r),f=s?n==="puzzle"?"Solved":"Completed":n==="puzzle"?"Mark as Solved":"Mark as Complete",y=s?`Mark ${n} as ${n==="puzzle"?"unsolved":"incomplete"}`:`Mark ${n} as ${n==="puzzle"?"solved":"complete"}`;return m.jsxs(Ye,{variant:s?"contained":"outlined",color:"completed",onClick:o,"aria-label":y,className:"gap-2 w-full sm:w-40",children:[s&&m.jsx(pt,{className:"h-4 w-4"}),f]})}function gr({error:n,slug:r,backRoute:s,contentType:o="puzzle"}){const[u,p]=W.useState(!0),f={import:{title:"Import Error",description:`Failed to import the ${o} file. Check the file path and module exports.`},parse:{title:"Parse Error",description:`The ${o} file has a syntax error.`},markdown:{title:"Markdown Processing Error",description:`The ${o} content has a markdown formatting error.`},unknown:{title:"Loading Error",description:`An unexpected error occurred while loading the ${o}.`}},{title:y,description:h}=f[n.type],w=o==="puzzle"?"Puzzle":"Expedition",b=o==="puzzle"?"Puzzle Library":"Expedition Library";return m.jsx("div",{className:"container mx-auto px-4 py-6 max-w-4xl",children:m.jsxs(ot,{className:"border-destructive/50",children:[m.jsx(at,{children:m.jsxs(st,{className:"flex items-center gap-3",children:[m.jsx(ct,{className:"text-destructive size-8"}),y," (Dev Mode)"]})}),m.jsxs(lt,{className:"space-y-6",children:[m.jsx("p",{className:"text-muted-foreground",children:h}),r&&m.jsxs("p",{className:"text-sm text-foreground",children:[w," slug: ",m.jsx("code",{className:"bg-muted px-2 py-1 rounded",children:r})]}),m.jsxs("div",{className:"rounded-md bg-destructive/10 p-4 border border-destructive/30",children:[m.jsx("p",{className:"text-sm font-semibold text-destructive mb-2",children:"Error Message:"}),m.jsx("pre",{className:"text-sm bg-muted p-3 rounded overflow-x-auto whitespace-pre-wrap",children:n.message})]}),n.stack&&m.jsxs("div",{className:"space-y-2",children:[m.jsxs(Ye,{variant:"ghost",size:"sm",onClick:()=>p(!u),className:"text-xs flex items-center gap-1",children:[u?m.jsx(mt,{className:"size-3"}):m.jsx(bt,{className:"size-3"}),"Stack Trace"]}),u&&m.jsx("pre",{className:"text-xs p-3 bg-muted rounded overflow-x-auto whitespace-pre-wrap",children:n.stack})]}),m.jsxs("div",{className:"flex gap-3 flex-wrap",children:[m.jsxs(it,{to:s,variant:"contained",color:"primary",children:["Back to ",b]}),m.jsx(Ye,{variant:"outlined",onClick:()=>window.location.reload(),children:"Reload Page"})]}),m.jsxs("div",{className:"border-t pt-4 text-sm text-muted-foreground",children:[m.jsx("p",{className:"font-semibold",children:"Development Mode:"}),m.jsx("p",{children:'This detailed error view only appears in development. In production, users will see a clean "Not Found" message.'})]})]})]})})}var An=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,vt=/\n/g,yt=/^\s*/,wt=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,xt=/^:\s*/,Ct=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Et=/^[;\s]*/,kt=/^\s+|\s+$/g,At=`
`,Mn="/",Tn="*",J="",Mt="comment",Tt="declaration";function St(n,r){if(typeof n!="string")throw new TypeError("First argument must be a string");if(!n)return[];r=r||{};var s=1,o=1;function u(i){var l=i.match(vt);l&&(s+=l.length);var g=i.lastIndexOf(At);o=~g?i.length-g:o+i.length}function p(){var i={line:s,column:o};return function(l){return l.position=new f(i),w(),l}}function f(i){this.start=i,this.end={line:s,column:o},this.source=r.source}f.prototype.content=n;function y(i){var l=new Error(r.source+":"+s+":"+o+": "+i);if(l.reason=i,l.filename=r.source,l.line=s,l.column=o,l.source=n,!r.silent)throw l}function h(i){var l=i.exec(n);if(l){var g=l[0];return u(g),n=n.slice(g.length),l}}function w(){h(yt)}function b(i){var l;for(i=i||[];l=M();)l!==!1&&i.push(l);return i}function M(){var i=p();if(!(Mn!=n.charAt(0)||Tn!=n.charAt(1))){for(var l=2;J!=n.charAt(l)&&(Tn!=n.charAt(l)||Mn!=n.charAt(l+1));)++l;if(l+=2,J===n.charAt(l-1))return y("End of comment missing");var g=n.slice(2,l-2);return o+=2,u(g),n=n.slice(l),o+=2,i({type:Mt,comment:g})}}function N(){var i=p(),l=h(wt);if(l){if(M(),!h(xt))return y("property missing ':'");var g=h(Ct),z=i({type:Tt,property:Sn(l[0].replace(An,J)),value:g?Sn(g[0].replace(An,J)):J});return h(Et),z}}function D(){var i=[];b(i);for(var l;l=N();)l!==!1&&(i.push(l),b(i));return i}return w(),D()}function Sn(n){return n?n.replace(kt,J):J}const _t=`(() => {
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
      getColor: (name) => {
        const value = getComputedStyle(document.documentElement).getPropertyValue(\`--color-\${name}\`);
        return value.trim();
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
`,Nt=`/* Base Reset */
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
.peer { }`,Rt={"local:_components:chocolate-grid":{id:"local:_components:chocolate-grid",code:`function mount(options) {
  const { root, api, props } = options;
  const rows = props.rows || 2;
  const cols = props.cols || 3;
  const mouldy = props.mouldy || [0, 0]; // [row, col]
  const eaten = props.eaten || []; // Array of [row, col] pairs

  const container = document.getElementById('grid-container');
  container.style.gridTemplateColumns = \`repeat(\${cols}, 60px)\`;
  container.style.gridTemplateRows = \`repeat(\${rows}, 60px)\`;

  // Create grid squares
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const square = document.createElement('div');
      square.className = 'chocolate-square';
      square.dataset.row = row;
      square.dataset.col = col;

      // Check if this square is mouldy
      if (mouldy[0] === row && mouldy[1] === col) {
        square.classList.add('mouldy');
        square.textContent = '🤢';
      }

      // Check if this square is already eaten
      const isEaten = eaten.some(([r, c]) => r === row && c === col);
      if (isEaten) {
        square.classList.add('eaten');
      }

      container.appendChild(square);
    }
  }

  resizeToContent();
}`,layout:'<div id="grid-container"></div>',metadata:{title:"Chocolate Grid",description:"Interactive visualization of a chocolate grid for Chomp puzzle",dateCreated:"2025-11-02T00:00:00.000Z",lastUpdated:"2025-11-02T00:00:00.000Z",published:"published"},scope:"local",sourcePath:"/home/runner/work/puzzlestone-peak/puzzlestone-peak/apps/web/content/puzzles/adversarial-games/chomp/_components/chocolate-grid.md"}},$t="/*! tailwindcss v4.1.14 | MIT License | https://tailwindcss.com */:root,:host{--radius:.5rem;--color-navy-50:oklch(97% .015 220);--color-navy-100:oklch(94% .02 220);--color-navy-200:oklch(88% .03 220);--color-navy-300:oklch(80% .045 220);--color-navy-400:oklch(68% .06 220);--color-navy-500:oklch(55% .075 220);--color-navy-600:oklch(45% .08 220);--color-navy-700:oklch(35% .075 220);--color-navy-800:oklch(27% .065 220);--color-navy-900:oklch(20% .05 220);--color-navy-950:oklch(15% .04 220);--color-stone-50:oklch(98% .01 250);--color-stone-100:oklch(95% .015 250);--color-stone-200:oklch(90% .025 250);--color-stone-300:oklch(83% .035 250);--color-stone-400:oklch(74% .045 250);--color-stone-500:oklch(65% .055 250);--color-stone-600:oklch(55% .06 250);--color-stone-700:oklch(45% .055 250);--color-stone-800:oklch(35% .045 250);--color-stone-900:oklch(27% .035 250);--color-stone-950:oklch(20% .025 250);--color-teal-50:oklch(97% .015 185);--color-teal-100:oklch(94% .025 185);--color-teal-200:oklch(88% .04 185);--color-teal-300:oklch(80% .055 185);--color-teal-400:oklch(70% .07 185);--color-teal-500:oklch(60% .08 185);--color-teal-600:oklch(50% .085 185);--color-teal-700:oklch(40% .08 185);--color-teal-800:oklch(32% .07 185);--color-teal-900:oklch(25% .055 185);--color-teal-950:oklch(18% .04 185);--color-evergreen-50:oklch(97% .02 155);--color-evergreen-100:oklch(93% .035 155);--color-evergreen-200:oklch(87% .055 155);--color-evergreen-300:oklch(79% .07 155);--color-evergreen-400:oklch(69% .085 155);--color-evergreen-500:oklch(59% .095 155);--color-evergreen-600:oklch(49% .1 155);--color-evergreen-700:oklch(41% .095 155);--color-evergreen-800:oklch(33% .08 155);--color-evergreen-900:oklch(27% .065 155);--color-evergreen-950:oklch(21% .05 155);--color-sand-50:oklch(98% .012 95);--color-sand-100:oklch(95% .02 95);--color-sand-200:oklch(90% .035 95);--color-sand-300:oklch(84% .05 95);--color-sand-400:oklch(76% .065 95);--color-sand-500:oklch(68% .08 95);--color-sand-600:oklch(60% .09 95);--color-sand-700:oklch(50% .085 95);--color-sand-800:oklch(40% .07 95);--color-sand-900:oklch(32% .055 95);--color-sand-950:oklch(26% .04 95);--color-error-50:oklch(97% .02 25);--color-error-100:oklch(94% .035 25);--color-error-200:oklch(88% .055 25);--color-error-300:oklch(80% .075 25);--color-error-400:oklch(70% .095 25);--color-error-500:oklch(60% .11 25);--color-error-600:oklch(50% .115 25);--color-error-700:oklch(42% .11 25);--color-error-800:oklch(34% .095 25);--color-error-900:oklch(28% .075 25);--color-error-950:oklch(22% .055 25);--color-warning-50:oklch(97% .02 75);--color-warning-100:oklch(94% .035 75);--color-warning-200:oklch(89% .06 75);--color-warning-300:oklch(82% .085 75);--color-warning-400:oklch(73% .105 75);--color-warning-500:oklch(65% .12 75);--color-warning-600:oklch(56% .125 75);--color-warning-700:oklch(47% .115 75);--color-warning-800:oklch(38% .095 75);--color-warning-900:oklch(30% .07 75);--color-warning-950:oklch(24% .05 75);--color-success-50:oklch(97% .02 165);--color-success-100:oklch(93% .035 165);--color-success-200:oklch(87% .055 165);--color-success-300:oklch(79% .075 165);--color-success-400:oklch(69% .095 165);--color-success-500:oklch(59% .11 165);--color-success-600:oklch(49% .115 165);--color-success-700:oklch(41% .105 165);--color-success-800:oklch(33% .09 165);--color-success-900:oklch(27% .07 165);--color-success-950:oklch(21% .05 165);--color-white:oklch(100% 0 0);--color-background:var(--color-stone-50);--color-foreground:var(--color-navy-950);--color-card:var(--color-white);--color-card-foreground:var(--color-navy-950);--color-popover:var(--color-white);--color-popover-foreground:var(--color-navy-950);--color-primary:var(--color-navy-600);--color-primary-foreground:var(--color-white);--color-secondary:var(--color-evergreen-600);--color-secondary-foreground:var(--color-white);--color-muted:var(--color-stone-100);--color-muted-foreground:var(--color-navy-600);--color-accent:var(--color-sand-600);--color-accent-foreground:var(--color-white);--color-destructive:var(--color-error-600);--color-destructive-foreground:var(--color-white);--color-success:var(--color-success-600);--color-success-foreground:var(--color-white);--color-completed:var(--color-evergreen-500);--color-completed-foreground:var(--color-white);--color-warning:var(--color-warning-600);--color-warning-foreground:var(--color-white);--color-info:var(--color-navy-500);--color-info-foreground:var(--color-white);--color-border:var(--color-stone-600);--color-input:var(--color-stone-300);--color-ring:var(--color-navy-400);--color-divider:var(--color-stone-200);--color-surface:var(--color-white);--color-text-secondary:var(--color-stone-600);--color-text-emphasis:var(--color-navy-600);--color-link:var(--color-navy-600);--color-link-hover:var(--color-navy-700);--color-select-hover:var(--color-navy-50);--color-select-hover-foreground:var(--color-navy-950);--color-checkbox-checked:var(--color-navy-600);--color-checkbox-checked-foreground:var(--color-white);--color-nav-foreground:var(--color-navy-600);--color-selection:var(--color-navy-200);--color-selection-foreground:var(--color-navy-900);--color-difficulty-easy:var(--color-success-100);--color-difficulty-easy-foreground:var(--color-success-800);--color-difficulty-medium:var(--color-navy-100);--color-difficulty-medium-foreground:var(--color-navy-800);--color-difficulty-hard:var(--color-warning-100);--color-difficulty-hard-foreground:var(--color-warning-800);--color-difficulty-expert:var(--color-error-100);--color-difficulty-expert-foreground:var(--color-error-800);--color-difficulty-open:var(--color-stone-200);--color-difficulty-open-foreground:var(--color-stone-900);--gradient-recommendation-start:var(--color-evergreen-500);--gradient-recommendation-end:var(--color-navy-500);--gradient-progress-start:var(--color-teal-600);--gradient-progress-end:var(--color-teal-500)}::-moz-selection{background-color:var(--color-selection);color:var(--color-selection-foreground)}::selection{background-color:var(--color-selection);color:var(--color-selection-foreground)}.dark{--color-background:oklch(10% .035 220);--color-foreground:var(--color-stone-200);--color-card:var(--color-navy-900);--color-card-foreground:var(--color-stone-200);--color-popover:var(--color-navy-900);--color-popover-foreground:var(--color-stone-200);--color-primary:var(--color-navy-400);--color-primary-foreground:var(--color-navy-950);--color-secondary:var(--color-evergreen-400);--color-secondary-foreground:var(--color-navy-950);--color-muted:var(--color-navy-800);--color-muted-foreground:var(--color-stone-400);--color-accent:var(--color-sand-400);--color-accent-foreground:var(--color-navy-950);--color-destructive:var(--color-error-400);--color-destructive-foreground:var(--color-navy-950);--color-success:var(--color-success-400);--color-success-foreground:var(--color-navy-950);--color-completed:var(--color-evergreen-300);--color-completed-foreground:var(--color-navy-950);--color-warning:var(--color-warning-400);--color-warning-foreground:var(--color-navy-950);--color-info:var(--color-navy-300);--color-info-foreground:var(--color-navy-950);--color-border:var(--color-navy-700);--color-input:var(--color-navy-600);--color-ring:var(--color-navy-400);--color-divider:var(--color-navy-700);--color-surface:var(--color-navy-900);--color-text-secondary:var(--color-stone-400);--color-text-emphasis:var(--color-stone-50);--color-link:var(--color-navy-400);--color-link-hover:var(--color-navy-300);--color-select-hover:var(--color-navy-800);--color-select-hover-foreground:var(--color-stone-200);--color-checkbox-checked:var(--color-navy-400);--color-checkbox-checked-foreground:var(--color-navy-950);--color-nav-foreground:var(--color-stone-200);--color-selection:var(--color-navy-700);--color-selection-foreground:var(--color-navy-100);--color-difficulty-easy:var(--color-success-900);--color-difficulty-easy-foreground:var(--color-success-200);--color-difficulty-medium:var(--color-navy-900);--color-difficulty-medium-foreground:var(--color-navy-200);--color-difficulty-hard:var(--color-warning-900);--color-difficulty-hard-foreground:var(--color-warning-200);--color-difficulty-expert:var(--color-error-900);--color-difficulty-expert-foreground:var(--color-error-200);--color-difficulty-open:var(--color-stone-700);--color-difficulty-open-foreground:var(--color-stone-200);--gradient-recommendation-start:var(--color-evergreen-600);--gradient-recommendation-end:var(--color-navy-600);--gradient-progress-start:var(--color-teal-600);--gradient-progress-end:var(--color-teal-500)}",It=300;function Ot({blockData:n,blockId:r,inlineComponents:s}){const o=W.useRef(null),[u,p]=W.useState(It),[f]=ft(),y=W.useRef("");return y.current||(y.current=Pt(n,_t,Nt,$t,s)),W.useEffect(()=>{const h=w=>{if(w.source===o.current?.contentWindow&&w.data?.event==="resize-request"){const{height:b}=w.data.data;typeof b=="number"&&b>0&&p(b)}};return window.addEventListener("message",h),()=>window.removeEventListener("message",h)},[]),W.useEffect(()=>{const h=o.current;if(!h||!h.contentWindow)return;const w=()=>{h.contentWindow?.postMessage({event:"theme-change",data:{theme:f?"dark":"light"}},"*")};return w(),h.addEventListener("load",w),()=>h.removeEventListener("load",w)},[f]),m.jsx("div",{className:"dynamic-block-container flex justify-center",children:m.jsx("iframe",{className:"border-0 block",ref:o,sandbox:"allow-scripts",srcDoc:y.current,style:{width:n.width||"100%",height:`${u}px`},title:n.title||`Interactive content ${r}`})})}function Lt(n,r){if(!n.startsWith("./"))return n;if(!r)return console.error(`[DynamicBlock Error] Local component reference "${n}" requires sourceFile path, but none was provided.`),null;const s=n.substring(2),o=r.split(/[/\\]/);return`local:${o[o.length-2]||"unknown"}:${s}`}function Pt(n,r,s,o,u){let p=n.code||"",f=n.layout||"",y=n.css||"",h=n.startLine;if(n.mode==="component"&&n.componentId)if(n.componentId.startsWith("#")){const i=n.componentId.substring(1),l=u?.[i];l?(p=l.code,f=l.layout||"",y=l.css||"",h=l.startLine):(console.error(`[DynamicBlock Error] Inline component not found: "${n.componentId}"
Expected: A :::component[${i}] definition in the same file.
Make sure the component is defined before it's used.`),p="",f="",y="")}else{const i=Lt(n.componentId,n.sourceFile);if(!i)p="",f="",y="";else{const l=Rt[i];if(l)p=l.code,f=l.layout||"";else{const g=n.componentId.startsWith("./");console.error(g?`[DynamicBlock Error] Local component not found: "${n.componentId}"
Expected: A file named "${n.componentId.substring(2)}.md" in _components/ subdirectory
Source file: ${n.sourceFile||"unknown"}
Resolved to scoped ID: ${i}
Make sure the _components/ directory exists and the component file is present.`:`[DynamicBlock Error] Shared component not found: "${n.componentId}"
Expected: A file named "${n.componentId}.md" in content/components/ (searched recursively)
Make sure the component file exists and has been registered in the component registry.`),p="",f="",y=""}}}const w=JSON.stringify(n.props||{}),b=n.mode==="canvas"?n.ariaLabel:void 0,M=JSON.stringify(b||null);let N="",D="";if(n.sourceFile&&h&&p){const i=n.sourceFile.indexOf("content/");N=`//# sourceURL=${i!==-1?n.sourceFile.substring(i):n.sourceFile.split("/").slice(-2).join("/")}
`;const g=h-2;g>0&&(D=`
`.repeat(g))}return`<!DOCTYPE html>
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
    ${o}

    ${s}
    ${y?`

    /* Custom CSS from author or inline component */
    ${y}`:""}
  </style>
</head>
<body>
  <div id="root">${f}</div>

  <!-- Runtime and globals script -->
  <script>
    // Component props (available globally)
    window.__COMPONENT_PROPS__ = ${w};

    // Canvas accessibility label (for canvas mode blocks)
    window.__CANVAS_ARIA_LABEL__ = ${M};

    // Injected sandbox runtime
    ${r}
  <\/script>

  <!-- User code script with source mapping -->
  <script>${N}${D}${p?`${p}`:""}<\/script>

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
</html>`}const Dt="dynamic-block-placeholder",zt="data-dynamic-block-id",Ft="data-dynamic-block-react",Ht="data-content-link-react",Wt="dynamic-block-container";function br({content:n,dynamicBlocks:r=[],inlineComponents:s}){const[o,u]=W.useState(new Map),[p,f]=W.useState(new Map),[y,h]=W.useState(new Map);W.useEffect(()=>()=>{u(new Map),f(new Map),h(new Map)},[n]);const w=W.useCallback(b=>{if(!b)return;b.innerHTML=n;const M=new Map,N=new Map,D=new Map;let i=0;r.length>0&&b.querySelectorAll(`.${Dt}`).forEach(z=>{const Y=z.getAttribute(zt);if(!Y)return;const P=parseInt(Y,10);if(isNaN(P)||P<0||P>=r.length)return;const x=document.createElement("div");x.setAttribute(Ft,P.toString()),x.className=Wt,z.replaceWith(x),M.set(P,x)}),b.querySelectorAll('a[href^="/puzzle/"], a[href^="/expedition/"]').forEach(g=>{const z=g.getAttribute("href");if(!z||!z.startsWith("/puzzle/")&&!z.startsWith("/expedition/"))return;let Y={};const P=g.getAttribute("style");if(P)try{St(P).forEach(X=>{if(X.type==="declaration"&&X.property&&X.value){const Me=X.property.replace(/-([a-z])/g,Te=>Te[1].toUpperCase());Y[Me]=X.value}})}catch(Q){console.warn(`Failed to parse inline styles for link: ${z}`,Q)}const x={href:z,text:g.textContent||"",className:g.getAttribute("class")||void 0,style:Object.keys(Y).length>0?Y:void 0,id:g.getAttribute("id")||void 0},U=document.createElement("span");U.setAttribute(Ht,i.toString()),U.style.display="contents",g.replaceWith(U),N.set(i,U),D.set(i,x),i++}),u(M),f(N),h(D)},[n,r]);return m.jsxs(m.Fragment,{children:[m.jsx("div",{ref:w,className:"markdown-content prose max-w-none space-y-4"}),Array.from(o.entries()).map(([b,M])=>{const N=r[b];return N?kn.createPortal(m.jsx(ht,{context:"dynamic-block",children:m.jsx(Ot,{blockId:b,blockData:N,inlineComponents:s})},b),M):null}),Array.from(y.entries()).map(([b,M])=>{const N=p.get(b);return N?kn.createPortal(m.jsx(et,{to:M.href,className:M.className,style:M.style,id:M.id,children:M.text},`link-${b}`),N):null})]})}/*! @license DOMPurify 3.3.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.0/LICENSE */const{entries:Dn,setPrototypeOf:_n,isFrozen:Ut,getPrototypeOf:Vt,getOwnPropertyDescriptor:Bt}=Object;let{freeze:I,seal:F,create:Xe}=Object,{apply:Ke,construct:Ze}=typeof Reflect<"u"&&Reflect;I||(I=function(r){return r});F||(F=function(r){return r});Ke||(Ke=function(r,s){for(var o=arguments.length,u=new Array(o>2?o-2:0),p=2;p<o;p++)u[p-2]=arguments[p];return r.apply(s,u)});Ze||(Ze=function(r){for(var s=arguments.length,o=new Array(s>1?s-1:0),u=1;u<s;u++)o[u-1]=arguments[u];return new r(...o)});const Ee=O(Array.prototype.forEach),jt=O(Array.prototype.lastIndexOf),Nn=O(Array.prototype.pop),de=O(Array.prototype.push),Gt=O(Array.prototype.splice),Ae=O(String.prototype.toLowerCase),Ue=O(String.prototype.toString),Ve=O(String.prototype.match),pe=O(String.prototype.replace),qt=O(String.prototype.indexOf),Yt=O(String.prototype.trim),H=O(Object.prototype.hasOwnProperty),$=O(RegExp.prototype.test),me=Xt(TypeError);function O(n){return function(r){r instanceof RegExp&&(r.lastIndex=0);for(var s=arguments.length,o=new Array(s>1?s-1:0),u=1;u<s;u++)o[u-1]=arguments[u];return Ke(n,r,o)}}function Xt(n){return function(){for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return Ze(n,s)}}function d(n,r){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ae;_n&&_n(n,null);let o=r.length;for(;o--;){let u=r[o];if(typeof u=="string"){const p=s(u);p!==u&&(Ut(r)||(r[o]=p),u=p)}n[u]=!0}return n}function Kt(n){for(let r=0;r<n.length;r++)H(n,r)||(n[r]=null);return n}function q(n){const r=Xe(null);for(const[s,o]of Dn(n))H(n,s)&&(Array.isArray(o)?r[s]=Kt(o):o&&typeof o=="object"&&o.constructor===Object?r[s]=q(o):r[s]=o);return r}function fe(n,r){for(;n!==null;){const o=Bt(n,r);if(o){if(o.get)return O(o.get);if(typeof o.value=="function")return O(o.value)}n=Vt(n)}function s(){return null}return s}const Rn=I(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Be=I(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),je=I(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Zt=I(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ge=I(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Jt=I(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),$n=I(["#text"]),In=I(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),qe=I(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),On=I(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ke=I(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Qt=F(/\{\{[\w\W]*|[\w\W]*\}\}/gm),er=F(/<%[\w\W]*|[\w\W]*%>/gm),nr=F(/\$\{[\w\W]*/gm),tr=F(/^data-[\-\w.\u00B7-\uFFFF]+$/),rr=F(/^aria-[\-\w]+$/),zn=F(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),or=F(/^(?:\w+script|data):/i),ar=F(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Fn=F(/^html$/i),sr=F(/^[a-z][.\w]*(-[.\w]+)+$/i);var Ln=Object.freeze({__proto__:null,ARIA_ATTR:rr,ATTR_WHITESPACE:ar,CUSTOM_ELEMENT:sr,DATA_ATTR:tr,DOCTYPE_NAME:Fn,ERB_EXPR:er,IS_ALLOWED_URI:zn,IS_SCRIPT_OR_DATA:or,MUSTACHE_EXPR:Qt,TMPLIT_EXPR:nr});const he={element:1,text:3,progressingInstruction:7,comment:8,document:9},cr=function(){return typeof window>"u"?null:window},lr=function(r,s){if(typeof r!="object"||typeof r.createPolicy!="function")return null;let o=null;const u="data-tt-policy-suffix";s&&s.hasAttribute(u)&&(o=s.getAttribute(u));const p="dompurify"+(o?"#"+o:"");try{return r.createPolicy(p,{createHTML(f){return f},createScriptURL(f){return f}})}catch{return console.warn("TrustedTypes policy "+p+" could not be created."),null}},Pn=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Hn(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:cr();const r=c=>Hn(c);if(r.version="3.3.0",r.removed=[],!n||!n.document||n.document.nodeType!==he.document||!n.Element)return r.isSupported=!1,r;let{document:s}=n;const o=s,u=o.currentScript,{DocumentFragment:p,HTMLTemplateElement:f,Node:y,Element:h,NodeFilter:w,NamedNodeMap:b=n.NamedNodeMap||n.MozNamedAttrMap,HTMLFormElement:M,DOMParser:N,trustedTypes:D}=n,i=h.prototype,l=fe(i,"cloneNode"),g=fe(i,"remove"),z=fe(i,"nextSibling"),Y=fe(i,"childNodes"),P=fe(i,"parentNode");if(typeof f=="function"){const c=s.createElement("template");c.content&&c.content.ownerDocument&&(s=c.content.ownerDocument)}let x,U="";const{implementation:Q,createNodeIterator:X,createDocumentFragment:Me,getElementsByTagName:Te}=s,{importNode:Wn}=o;let R=Pn();r.isSupported=typeof Dn=="function"&&typeof P=="function"&&Q&&Q.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:Se,ERB_EXPR:_e,TMPLIT_EXPR:Ne,DATA_ATTR:Un,ARIA_ATTR:Vn,IS_SCRIPT_OR_DATA:Bn,ATTR_WHITESPACE:Je,CUSTOM_ELEMENT:jn}=Ln;let{IS_ALLOWED_URI:Qe}=Ln,k=null;const en=d({},[...Rn,...Be,...je,...Ge,...$n]);let T=null;const nn=d({},[...In,...qe,...On,...ke]);let C=Object.seal(Xe(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),le=null,Re=null;const ee=Object.seal(Xe(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let tn=!0,$e=!0,rn=!1,on=!0,ne=!1,ge=!0,K=!1,Ie=!1,Oe=!1,te=!1,be=!1,ve=!1,an=!0,sn=!1;const Gn="user-content-";let Le=!0,ie=!1,re={},oe=null;const cn=d({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let ln=null;const un=d({},["audio","video","img","source","image","track"]);let Pe=null;const dn=d({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ye="http://www.w3.org/1998/Math/MathML",we="http://www.w3.org/2000/svg",B="http://www.w3.org/1999/xhtml";let ae=B,De=!1,ze=null;const qn=d({},[ye,we,B],Ue);let xe=d({},["mi","mo","mn","ms","mtext"]),Ce=d({},["annotation-xml"]);const Yn=d({},["title","style","font","a","script"]);let ue=null;const Xn=["application/xhtml+xml","text/html"],Kn="text/html";let A=null,se=null;const Zn=s.createElement("form"),pn=function(e){return e instanceof RegExp||e instanceof Function},Fe=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(se&&se===e)){if((!e||typeof e!="object")&&(e={}),e=q(e),ue=Xn.indexOf(e.PARSER_MEDIA_TYPE)===-1?Kn:e.PARSER_MEDIA_TYPE,A=ue==="application/xhtml+xml"?Ue:Ae,k=H(e,"ALLOWED_TAGS")?d({},e.ALLOWED_TAGS,A):en,T=H(e,"ALLOWED_ATTR")?d({},e.ALLOWED_ATTR,A):nn,ze=H(e,"ALLOWED_NAMESPACES")?d({},e.ALLOWED_NAMESPACES,Ue):qn,Pe=H(e,"ADD_URI_SAFE_ATTR")?d(q(dn),e.ADD_URI_SAFE_ATTR,A):dn,ln=H(e,"ADD_DATA_URI_TAGS")?d(q(un),e.ADD_DATA_URI_TAGS,A):un,oe=H(e,"FORBID_CONTENTS")?d({},e.FORBID_CONTENTS,A):cn,le=H(e,"FORBID_TAGS")?d({},e.FORBID_TAGS,A):q({}),Re=H(e,"FORBID_ATTR")?d({},e.FORBID_ATTR,A):q({}),re=H(e,"USE_PROFILES")?e.USE_PROFILES:!1,tn=e.ALLOW_ARIA_ATTR!==!1,$e=e.ALLOW_DATA_ATTR!==!1,rn=e.ALLOW_UNKNOWN_PROTOCOLS||!1,on=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ne=e.SAFE_FOR_TEMPLATES||!1,ge=e.SAFE_FOR_XML!==!1,K=e.WHOLE_DOCUMENT||!1,te=e.RETURN_DOM||!1,be=e.RETURN_DOM_FRAGMENT||!1,ve=e.RETURN_TRUSTED_TYPE||!1,Oe=e.FORCE_BODY||!1,an=e.SANITIZE_DOM!==!1,sn=e.SANITIZE_NAMED_PROPS||!1,Le=e.KEEP_CONTENT!==!1,ie=e.IN_PLACE||!1,Qe=e.ALLOWED_URI_REGEXP||zn,ae=e.NAMESPACE||B,xe=e.MATHML_TEXT_INTEGRATION_POINTS||xe,Ce=e.HTML_INTEGRATION_POINTS||Ce,C=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&pn(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(C.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&pn(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(C.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(C.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ne&&($e=!1),be&&(te=!0),re&&(k=d({},$n),T=[],re.html===!0&&(d(k,Rn),d(T,In)),re.svg===!0&&(d(k,Be),d(T,qe),d(T,ke)),re.svgFilters===!0&&(d(k,je),d(T,qe),d(T,ke)),re.mathMl===!0&&(d(k,Ge),d(T,On),d(T,ke))),e.ADD_TAGS&&(typeof e.ADD_TAGS=="function"?ee.tagCheck=e.ADD_TAGS:(k===en&&(k=q(k)),d(k,e.ADD_TAGS,A))),e.ADD_ATTR&&(typeof e.ADD_ATTR=="function"?ee.attributeCheck=e.ADD_ATTR:(T===nn&&(T=q(T)),d(T,e.ADD_ATTR,A))),e.ADD_URI_SAFE_ATTR&&d(Pe,e.ADD_URI_SAFE_ATTR,A),e.FORBID_CONTENTS&&(oe===cn&&(oe=q(oe)),d(oe,e.FORBID_CONTENTS,A)),Le&&(k["#text"]=!0),K&&d(k,["html","head","body"]),k.table&&(d(k,["tbody"]),delete le.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw me('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw me('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');x=e.TRUSTED_TYPES_POLICY,U=x.createHTML("")}else x===void 0&&(x=lr(D,u)),x!==null&&typeof U=="string"&&(U=x.createHTML(""));I&&I(e),se=e}},mn=d({},[...Be,...je,...Zt]),fn=d({},[...Ge,...Jt]),Jn=function(e){let t=P(e);(!t||!t.tagName)&&(t={namespaceURI:ae,tagName:"template"});const a=Ae(e.tagName),v=Ae(t.tagName);return ze[e.namespaceURI]?e.namespaceURI===we?t.namespaceURI===B?a==="svg":t.namespaceURI===ye?a==="svg"&&(v==="annotation-xml"||xe[v]):!!mn[a]:e.namespaceURI===ye?t.namespaceURI===B?a==="math":t.namespaceURI===we?a==="math"&&Ce[v]:!!fn[a]:e.namespaceURI===B?t.namespaceURI===we&&!Ce[v]||t.namespaceURI===ye&&!xe[v]?!1:!fn[a]&&(Yn[a]||!mn[a]):!!(ue==="application/xhtml+xml"&&ze[e.namespaceURI]):!1},V=function(e){de(r.removed,{element:e});try{P(e).removeChild(e)}catch{g(e)}},Z=function(e,t){try{de(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch{de(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is")if(te||be)try{V(t)}catch{}else try{t.setAttribute(e,"")}catch{}},hn=function(e){let t=null,a=null;if(Oe)e="<remove></remove>"+e;else{const E=Ve(e,/^[\r\n\t ]+/);a=E&&E[0]}ue==="application/xhtml+xml"&&ae===B&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const v=x?x.createHTML(e):e;if(ae===B)try{t=new N().parseFromString(v,ue)}catch{}if(!t||!t.documentElement){t=Q.createDocument(ae,"template",null);try{t.documentElement.innerHTML=De?U:v}catch{}}const _=t.body||t.documentElement;return e&&a&&_.insertBefore(s.createTextNode(a),_.childNodes[0]||null),ae===B?Te.call(t,K?"html":"body")[0]:K?t.documentElement:_},gn=function(e){return X.call(e.ownerDocument||e,e,w.SHOW_ELEMENT|w.SHOW_COMMENT|w.SHOW_TEXT|w.SHOW_PROCESSING_INSTRUCTION|w.SHOW_CDATA_SECTION,null)},He=function(e){return e instanceof M&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof b)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},bn=function(e){return typeof y=="function"&&e instanceof y};function j(c,e,t){Ee(c,a=>{a.call(r,e,t,se)})}const vn=function(e){let t=null;if(j(R.beforeSanitizeElements,e,null),He(e))return V(e),!0;const a=A(e.nodeName);if(j(R.uponSanitizeElement,e,{tagName:a,allowedTags:k}),ge&&e.hasChildNodes()&&!bn(e.firstElementChild)&&$(/<[/\w!]/g,e.innerHTML)&&$(/<[/\w!]/g,e.textContent)||e.nodeType===he.progressingInstruction||ge&&e.nodeType===he.comment&&$(/<[/\w]/g,e.data))return V(e),!0;if(!(ee.tagCheck instanceof Function&&ee.tagCheck(a))&&(!k[a]||le[a])){if(!le[a]&&wn(a)&&(C.tagNameCheck instanceof RegExp&&$(C.tagNameCheck,a)||C.tagNameCheck instanceof Function&&C.tagNameCheck(a)))return!1;if(Le&&!oe[a]){const v=P(e)||e.parentNode,_=Y(e)||e.childNodes;if(_&&v){const E=_.length;for(let L=E-1;L>=0;--L){const G=l(_[L],!0);G.__removalCount=(e.__removalCount||0)+1,v.insertBefore(G,z(e))}}}return V(e),!0}return e instanceof h&&!Jn(e)||(a==="noscript"||a==="noembed"||a==="noframes")&&$(/<\/no(script|embed|frames)/i,e.innerHTML)?(V(e),!0):(ne&&e.nodeType===he.text&&(t=e.textContent,Ee([Se,_e,Ne],v=>{t=pe(t,v," ")}),e.textContent!==t&&(de(r.removed,{element:e.cloneNode()}),e.textContent=t)),j(R.afterSanitizeElements,e,null),!1)},yn=function(e,t,a){if(an&&(t==="id"||t==="name")&&(a in s||a in Zn))return!1;if(!($e&&!Re[t]&&$(Un,t))){if(!(tn&&$(Vn,t))){if(!(ee.attributeCheck instanceof Function&&ee.attributeCheck(t,e))){if(!T[t]||Re[t]){if(!(wn(e)&&(C.tagNameCheck instanceof RegExp&&$(C.tagNameCheck,e)||C.tagNameCheck instanceof Function&&C.tagNameCheck(e))&&(C.attributeNameCheck instanceof RegExp&&$(C.attributeNameCheck,t)||C.attributeNameCheck instanceof Function&&C.attributeNameCheck(t,e))||t==="is"&&C.allowCustomizedBuiltInElements&&(C.tagNameCheck instanceof RegExp&&$(C.tagNameCheck,a)||C.tagNameCheck instanceof Function&&C.tagNameCheck(a))))return!1}else if(!Pe[t]){if(!$(Qe,pe(a,Je,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&qt(a,"data:")===0&&ln[e])){if(!(rn&&!$(Bn,pe(a,Je,"")))){if(a)return!1}}}}}}}return!0},wn=function(e){return e!=="annotation-xml"&&Ve(e,jn)},xn=function(e){j(R.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||He(e))return;const a={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:T,forceKeepAttr:void 0};let v=t.length;for(;v--;){const _=t[v],{name:E,namespaceURI:L,value:G}=_,ce=A(E),We=G;let S=E==="value"?We:Yt(We);if(a.attrName=ce,a.attrValue=S,a.keepAttr=!0,a.forceKeepAttr=void 0,j(R.uponSanitizeAttribute,e,a),S=a.attrValue,sn&&(ce==="id"||ce==="name")&&(Z(E,e),S=Gn+S),ge&&$(/((--!?|])>)|<\/(style|title|textarea)/i,S)){Z(E,e);continue}if(ce==="attributename"&&Ve(S,"href")){Z(E,e);continue}if(a.forceKeepAttr)continue;if(!a.keepAttr){Z(E,e);continue}if(!on&&$(/\/>/i,S)){Z(E,e);continue}ne&&Ee([Se,_e,Ne],En=>{S=pe(S,En," ")});const Cn=A(e.nodeName);if(!yn(Cn,ce,S)){Z(E,e);continue}if(x&&typeof D=="object"&&typeof D.getAttributeType=="function"&&!L)switch(D.getAttributeType(Cn,ce)){case"TrustedHTML":{S=x.createHTML(S);break}case"TrustedScriptURL":{S=x.createScriptURL(S);break}}if(S!==We)try{L?e.setAttributeNS(L,E,S):e.setAttribute(E,S),He(e)?V(e):Nn(r.removed)}catch{Z(E,e)}}j(R.afterSanitizeAttributes,e,null)},Qn=function c(e){let t=null;const a=gn(e);for(j(R.beforeSanitizeShadowDOM,e,null);t=a.nextNode();)j(R.uponSanitizeShadowNode,t,null),vn(t),xn(t),t.content instanceof p&&c(t.content);j(R.afterSanitizeShadowDOM,e,null)};return r.sanitize=function(c){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=null,a=null,v=null,_=null;if(De=!c,De&&(c="<!-->"),typeof c!="string"&&!bn(c))if(typeof c.toString=="function"){if(c=c.toString(),typeof c!="string")throw me("dirty is not a string, aborting")}else throw me("toString is not a function");if(!r.isSupported)return c;if(Ie||Fe(e),r.removed=[],typeof c=="string"&&(ie=!1),ie){if(c.nodeName){const G=A(c.nodeName);if(!k[G]||le[G])throw me("root node is forbidden and cannot be sanitized in-place")}}else if(c instanceof y)t=hn("<!---->"),a=t.ownerDocument.importNode(c,!0),a.nodeType===he.element&&a.nodeName==="BODY"||a.nodeName==="HTML"?t=a:t.appendChild(a);else{if(!te&&!ne&&!K&&c.indexOf("<")===-1)return x&&ve?x.createHTML(c):c;if(t=hn(c),!t)return te?null:ve?U:""}t&&Oe&&V(t.firstChild);const E=gn(ie?c:t);for(;v=E.nextNode();)vn(v),xn(v),v.content instanceof p&&Qn(v.content);if(ie)return c;if(te){if(be)for(_=Me.call(t.ownerDocument);t.firstChild;)_.appendChild(t.firstChild);else _=t;return(T.shadowroot||T.shadowrootmode)&&(_=Wn.call(o,_,!0)),_}let L=K?t.outerHTML:t.innerHTML;return K&&k["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&$(Fn,t.ownerDocument.doctype.name)&&(L="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+L),ne&&Ee([Se,_e,Ne],G=>{L=pe(L,G," ")}),x&&ve?x.createHTML(L):L},r.setConfig=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Fe(c),Ie=!0},r.clearConfig=function(){se=null,Ie=!1},r.isValidAttribute=function(c,e,t){se||Fe({});const a=A(c),v=A(e);return yn(a,v,t)},r.addHook=function(c,e){typeof e=="function"&&de(R[c],e)},r.removeHook=function(c,e){if(e!==void 0){const t=jt(R[c],e);return t===-1?void 0:Gt(R[c],t,1)[0]}return Nn(R[c])},r.removeHooks=function(c){R[c]=[]},r.removeAllHooks=function(){R=Pn()},r}var vr=Hn();function yr(n){const r=nt(),s=tt();return r.key!=="default"?{to:n,onClick:u=>{u.preventDefault(),s(-1)}}:{to:n}}export{hr as C,gr as D,br as M,vr as p,yr as u};
