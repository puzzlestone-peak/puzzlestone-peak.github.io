import{t as g,b as f,f as S,L as R,v as T,G as L}from"./index-BdwX92X6.js";import{B as _}from"./createLucideIcon-DsSOLlez.js";import{p as H,q as j,j as W}from"./ItemCardList-DvmhThDx.js";import{a as B}from"./use-dark-mode-CNQh-kvv.js";function he({type:e,id:o}){const r=H(e,o),c=j(e,o),h=r?e==="puzzle"?"Solved":"Completed":e==="puzzle"?"Mark as Solved":"Mark as Complete",a=r?`Mark ${e} as ${e==="puzzle"?"unsolved":"incomplete"}`:`Mark ${e} as ${e==="puzzle"?"solved":"complete"}`;return g.jsxs(_,{variant:r?"contained":"outlined",color:"completed",onClick:c,"aria-label":a,className:"gap-2 w-full sm:w-40",children:[r&&g.jsx(W,{className:"h-4 w-4"}),h]})}var M=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,D=/\n/g,q=/^\s*/,P=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,G=/^:\s*/,V=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,F=/^[;\s]*/,U=/^\s+|\s+$/g,Y=`
`,$="/",A="*",y="",X="comment",K="declaration";function J(e,o){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];o=o||{};var r=1,c=1;function d(t){var n=t.match(D);n&&(r+=n.length);var s=t.lastIndexOf(Y);c=~s?t.length-s:c+t.length}function p(){var t={line:r,column:c};return function(n){return n.position=new h(t),l(),n}}function h(t){this.start=t,this.end={line:r,column:c},this.source=o.source}h.prototype.content=e;function a(t){var n=new Error(o.source+":"+r+":"+c+": "+t);if(n.reason=t,n.filename=o.source,n.line=r,n.column=c,n.source=e,!o.silent)throw n}function i(t){var n=t.exec(e);if(n){var s=n[0];return d(s),e=e.slice(s.length),n}}function l(){i(q)}function u(t){var n;for(t=t||[];n=m();)n!==!1&&t.push(n);return t}function m(){var t=p();if(!($!=e.charAt(0)||A!=e.charAt(1))){for(var n=2;y!=e.charAt(n)&&(A!=e.charAt(n)||$!=e.charAt(n+1));)++n;if(n+=2,y===e.charAt(n-1))return a("End of comment missing");var s=e.slice(2,n-2);return c+=2,d(s),e=e.slice(n),c+=2,t({type:X,comment:s})}}function C(){var t=p(),n=i(P);if(n){if(m(),!i(G))return a("property missing ':'");var s=i(V),b=t({type:K,property:I(n[0].replace(M,y)),value:s?I(s[0].replace(M,y)):y});return i(F),b}}function w(){var t=[];u(t);for(var n;n=C();)n!==!1&&(t.push(n),u(t));return t}return l(),w()}function I(e){return e?e.replace(U,y):y}const Q=`(() => {
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
    const generateRule = (className) => {
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
      const spacingMatch = base.match(/^(p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr|gap|gap-x|gap-y|space-x|space-y|w|h|min-w|min-h|max-w|max-h|top|right|bottom|left|inset|inset-x|inset-y)-(.+)$/);
      if (spacingMatch) {
        const [, property, value] = spacingMatch;
        const spacing = spacingScale[value] || sizeValues[value] || parseArbitraryValue(value);
        if (!spacing) return null;
        const escapedClass = className.replace(/\\//g, "\\\\/").replace(/\\[/g, "\\\\[").replace(/]/g, "\\\\]").replace(/\\./g, "\\\\.");
        if (property === "space-x") {
          return \`.\${escapedClass} > * + * { margin-left: \${spacing}; }\`;
        }
        if (property === "space-y") {
          return \`.\${escapedClass} > * + * { margin-top: \${spacing}; }\`;
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
          "sm": "0.125rem",
          "md": "0.375rem",
          "lg": "0.5rem",
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
  function scanAndGenerateClasses(ctx) {
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
      const templateMatches = content.matchAll(/\`([^\`]*(?:p-|m-|bg-|text-|border-|rounded|flex|grid|w-|h-|gap-)[^\`]*)\`/g);
      for (const match of templateMatches) {
        const classes = match[1];
        const tailwindMatches = classes.matchAll(/\\b((?:p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr|gap|gap-x|gap-y|w|h|min-w|min-h|max-w|max-h|bg|text|border|rounded|flex|grid|inline|block|hidden|top|right|bottom|left|inset)(?:-[\\w[\\]/:.%-]+)?)\\b/g);
        for (const tailwindMatch of tailwindMatches) {
          if (tailwindMatch[1]) classNames.add(tailwindMatch[1]);
        }
      }
    });
    if (classNames.size > 0) {
      const allClasses = Array.from(classNames).join(" ");
      ctx.css(allClasses);
    }
  }
  function setupMutationObserver(ctx) {
    const config = window.$CONFIG || {};
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
        ctx.css(allClasses);
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
    const ctx = {
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
    window.sandboxContext = ctx;
    setupAutoResize(ctx);
    scanAndGenerateClasses(ctx);
    setupMutationObserver(ctx);
  }
  function setupAutoResize(ctx) {
    let lastHeight = 0;
    const updateHeight = () => {
      const root2 = document.getElementById("root");
      if (!root2) return;
      const currentHeight = root2.scrollHeight;
      if (currentHeight !== lastHeight) {
        lastHeight = currentHeight;
        ctx.requestResize(currentHeight);
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
  function executeMountIfExists(config = {}) {
    try {
      const ctx = window.sandboxContext;
      const root = document.getElementById("root");
      if (!root) {
        console.error("[DynamicBlock Error] Root element not found - cannot execute mount()");
        return;
      }
      if (typeof window.mount === "function") {
        try {
          window.mount(root, ctx, config);
        } catch (error) {
          console.error("[DynamicBlock Error] Error in mount() function:", error);
          console.error("Stack trace:", error.stack);
        }
      } else if (typeof window.draw !== "function") {
        console.error(
          "[DynamicBlock Error] No mount() or draw() function found in author code.\\nExpected: function mount(root, ctx, config) { ... } or function draw(canvas, theme, width) { ... }"
        );
      }
    } catch (error) {
      console.error("[DynamicBlock Error] Fatal error in executeMountIfExists():", error);
      console.error("Stack trace:", error.stack);
    }
  }
  function executeDrawIfExists() {
    try {
      const ctx = window.sandboxContext;
      const drawFn = window.draw;
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
        canvas.className = ctx.css("w-full");
        root.appendChild(canvas);
      }
      const autoRedrawConfig = window.autoRedraw || {
        onThemeChange: true,
        onResize: true
      };
      const themeChangeConfig = autoRedrawConfig.onThemeChange === false ? false : autoRedrawConfig.onThemeChange || 0;
      const resizeConfig = autoRedrawConfig.onResize === false ? false : autoRedrawConfig.onResize === true ? 150 : autoRedrawConfig.onResize;
      let resizeTimeout;
      const executeDraw = () => {
        try {
          const theme = ctx.theme;
          const width = window.innerWidth;
          drawFn(canvas, theme, width);
          requestAnimationFrame(() => {
            const root = document.getElementById("root");
            if (root) {
              const height = root.scrollHeight;
              if (height > 0) {
                ctx.requestResize(height);
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
        ctx.onThemeChange(() => {
          const debounce = typeof themeChangeConfig === "number" ? themeChangeConfig : 0;
          if (debounce === 0) {
            executeDraw();
          } else {
            setTimeout(executeDraw, debounce);
          }
        });
      }
      if (resizeConfig !== false) {
        ctx.onResize(() => {
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
  window.executeMountIfExists = executeMountIfExists;
  window.executeDrawIfExists = executeDrawIfExists;
})();
`,Z=`/* Base Reset */
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
.peer { }`,ee={},ne="/*! tailwindcss v4.1.14 | MIT License | https://tailwindcss.com */:root,:host{--radius:.5rem;--color-navy-50:oklch(97% .015 220);--color-navy-100:oklch(94% .02 220);--color-navy-200:oklch(88% .03 220);--color-navy-300:oklch(80% .045 220);--color-navy-400:oklch(68% .06 220);--color-navy-500:oklch(55% .075 220);--color-navy-600:oklch(45% .08 220);--color-navy-700:oklch(35% .075 220);--color-navy-800:oklch(27% .065 220);--color-navy-900:oklch(20% .05 220);--color-navy-950:oklch(15% .04 220);--color-stone-50:oklch(98% .01 250);--color-stone-100:oklch(95% .015 250);--color-stone-200:oklch(90% .025 250);--color-stone-300:oklch(83% .035 250);--color-stone-400:oklch(74% .045 250);--color-stone-500:oklch(65% .055 250);--color-stone-600:oklch(55% .06 250);--color-stone-700:oklch(45% .055 250);--color-stone-800:oklch(35% .045 250);--color-stone-900:oklch(27% .035 250);--color-stone-950:oklch(20% .025 250);--color-teal-50:oklch(97% .015 185);--color-teal-100:oklch(94% .025 185);--color-teal-200:oklch(88% .04 185);--color-teal-300:oklch(80% .055 185);--color-teal-400:oklch(70% .07 185);--color-teal-500:oklch(60% .08 185);--color-teal-600:oklch(50% .085 185);--color-teal-700:oklch(40% .08 185);--color-teal-800:oklch(32% .07 185);--color-teal-900:oklch(25% .055 185);--color-teal-950:oklch(18% .04 185);--color-evergreen-50:oklch(97% .02 155);--color-evergreen-100:oklch(93% .035 155);--color-evergreen-200:oklch(87% .055 155);--color-evergreen-300:oklch(79% .07 155);--color-evergreen-400:oklch(69% .085 155);--color-evergreen-500:oklch(59% .095 155);--color-evergreen-600:oklch(49% .1 155);--color-evergreen-700:oklch(41% .095 155);--color-evergreen-800:oklch(33% .08 155);--color-evergreen-900:oklch(27% .065 155);--color-evergreen-950:oklch(21% .05 155);--color-sand-50:oklch(98% .012 95);--color-sand-100:oklch(95% .02 95);--color-sand-200:oklch(90% .035 95);--color-sand-300:oklch(84% .05 95);--color-sand-400:oklch(76% .065 95);--color-sand-500:oklch(68% .08 95);--color-sand-600:oklch(60% .09 95);--color-sand-700:oklch(50% .085 95);--color-sand-800:oklch(40% .07 95);--color-sand-900:oklch(32% .055 95);--color-sand-950:oklch(26% .04 95);--color-error-50:oklch(97% .02 25);--color-error-100:oklch(94% .035 25);--color-error-200:oklch(88% .055 25);--color-error-300:oklch(80% .075 25);--color-error-400:oklch(70% .095 25);--color-error-500:oklch(60% .11 25);--color-error-600:oklch(50% .115 25);--color-error-700:oklch(42% .11 25);--color-error-800:oklch(34% .095 25);--color-error-900:oklch(28% .075 25);--color-error-950:oklch(22% .055 25);--color-warning-50:oklch(97% .02 75);--color-warning-100:oklch(94% .035 75);--color-warning-200:oklch(89% .06 75);--color-warning-300:oklch(82% .085 75);--color-warning-400:oklch(73% .105 75);--color-warning-500:oklch(65% .12 75);--color-warning-600:oklch(56% .125 75);--color-warning-700:oklch(47% .115 75);--color-warning-800:oklch(38% .095 75);--color-warning-900:oklch(30% .07 75);--color-warning-950:oklch(24% .05 75);--color-success-50:oklch(97% .02 165);--color-success-100:oklch(93% .035 165);--color-success-200:oklch(87% .055 165);--color-success-300:oklch(79% .075 165);--color-success-400:oklch(69% .095 165);--color-success-500:oklch(59% .11 165);--color-success-600:oklch(49% .115 165);--color-success-700:oklch(41% .105 165);--color-success-800:oklch(33% .09 165);--color-success-900:oklch(27% .07 165);--color-success-950:oklch(21% .05 165);--color-white:oklch(100% 0 0);--color-background:var(--color-stone-50);--color-foreground:var(--color-navy-950);--color-card:var(--color-white);--color-card-foreground:var(--color-navy-950);--color-popover:var(--color-white);--color-popover-foreground:var(--color-navy-950);--color-primary:var(--color-navy-600);--color-primary-foreground:var(--color-white);--color-secondary:var(--color-evergreen-600);--color-secondary-foreground:var(--color-white);--color-muted:var(--color-stone-100);--color-muted-foreground:var(--color-navy-600);--color-accent:var(--color-sand-600);--color-accent-foreground:var(--color-white);--color-destructive:var(--color-error-600);--color-destructive-foreground:var(--color-white);--color-success:var(--color-success-600);--color-success-foreground:var(--color-white);--color-completed:var(--color-evergreen-500);--color-completed-foreground:var(--color-white);--color-warning:var(--color-warning-600);--color-warning-foreground:var(--color-white);--color-info:var(--color-navy-500);--color-info-foreground:var(--color-white);--color-border:var(--color-stone-200);--color-input:var(--color-stone-300);--color-ring:var(--color-navy-400);--color-divider:var(--color-stone-200);--color-surface:var(--color-white);--color-text-secondary:var(--color-stone-600);--color-text-emphasis:var(--color-navy-600);--color-link:var(--color-navy-600);--color-link-hover:var(--color-navy-700);--color-select-hover:var(--color-navy-50);--color-select-hover-foreground:var(--color-navy-950);--color-checkbox-checked:var(--color-navy-600);--color-checkbox-checked-foreground:var(--color-white);--color-nav-foreground:var(--color-navy-600)}.dark{--color-background:oklch(10% .035 220);--color-foreground:var(--color-stone-50);--color-card:var(--color-navy-900);--color-card-foreground:var(--color-stone-50);--color-popover:var(--color-navy-900);--color-popover-foreground:var(--color-stone-50);--color-primary:var(--color-navy-400);--color-primary-foreground:var(--color-navy-950);--color-secondary:var(--color-evergreen-400);--color-secondary-foreground:var(--color-navy-950);--color-muted:var(--color-navy-800);--color-muted-foreground:var(--color-stone-400);--color-accent:var(--color-sand-400);--color-accent-foreground:var(--color-navy-950);--color-destructive:var(--color-error-400);--color-destructive-foreground:var(--color-navy-950);--color-success:var(--color-success-400);--color-success-foreground:var(--color-navy-950);--color-completed:var(--color-evergreen-300);--color-completed-foreground:var(--color-navy-950);--color-warning:var(--color-warning-400);--color-warning-foreground:var(--color-navy-950);--color-info:var(--color-navy-300);--color-info-foreground:var(--color-navy-950);--color-border:var(--color-navy-700);--color-input:var(--color-navy-600);--color-ring:var(--color-navy-400);--color-divider:var(--color-navy-700);--color-surface:var(--color-navy-900);--color-text-secondary:var(--color-stone-400);--color-text-emphasis:var(--color-stone-50);--color-link:var(--color-navy-400);--color-link-hover:var(--color-navy-300);--color-select-hover:var(--color-navy-800);--color-select-hover-foreground:var(--color-stone-50);--color-checkbox-checked:var(--color-navy-400);--color-checkbox-checked-foreground:var(--color-navy-950);--color-nav-foreground:var(--color-stone-50)}";function te({blockData:e,blockId:o}){const r=f.useRef(null),[c,d]=f.useState(300),[p]=B(),h=f.useRef("");return h.current||(h.current=oe(e,Q,Z,ne)),f.useEffect(()=>{const a=i=>{if(i.source===r.current?.contentWindow&&i.data?.event==="resize-request"){const{height:l}=i.data.data;typeof l=="number"&&l>0&&d(l)}};return window.addEventListener("message",a),()=>window.removeEventListener("message",a)},[]),f.useEffect(()=>{const a=r.current;if(!a||!a.contentWindow)return;const i=()=>{a.contentWindow?.postMessage({event:"theme-change",data:{theme:p?"dark":"light"}},"*")};return i(),a.addEventListener("load",i),()=>a.removeEventListener("load",i)},[p]),g.jsx("div",{className:"dynamic-block-container flex justify-center",children:g.jsx("iframe",{className:"border-0 block",ref:r,sandbox:"allow-scripts",srcDoc:h.current,style:{width:e.width||"100%",height:`${c}px`},title:`Interactive content ${o}`})})}function oe(e,o,r,c){let d=e.code||"",p=e.layout||"";if(e.mode==="component"&&e.componentId){const a=ee[e.componentId];a?(d=a.code,p=a.layout||""):(console.error(`[DynamicBlock Error] Component not found: "${e.componentId}"
Expected: A file named "${e.componentId}.md" in content/components/ (searched recursively)
Make sure the component file exists and has been registered in the component registry.`),d="",p="")}const h=JSON.stringify(e.config||{});return`<!DOCTYPE html>
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
      flex: 1;
      min-height: 0;
    }

    /* Theme CSS variables (light/dark mode) */
    ${c}

    ${r}
    ${e.css?`

    /* Custom CSS from author */
    ${e.css}`:""}
  </style>
</head>
<body>
  <div id="root">${p}</div>
  <script>
    // Component configuration (available globally)
    window.__COMPONENT_CONFIG__ = ${h};

    // Injected sandbox runtime
    ${o}

    // Author code (or component code)
    ${d?`
${d}`:""}

    // Execute mount() if defined, passing config
    if (typeof executeMountIfExists === 'function') {
      executeMountIfExists(window.__COMPONENT_CONFIG__);
    }

    // Execute draw() if defined
    if (typeof executeDrawIfExists === 'function') {
      executeDrawIfExists();
    }
  <\/script>
</body>
</html>`}const re="dynamic-block-placeholder",ae="data-dynamic-block-id",se="data-dynamic-block-react",ce="data-content-link-react",le="dynamic-block-container";function me({content:e,dynamicBlocks:o=[]}){const[r,c]=f.useState(new Map),[d,p]=f.useState(new Map),[h,a]=f.useState(new Map);f.useEffect(()=>()=>{c(new Map),p(new Map),a(new Map)},[e]);const i=f.useCallback(l=>{if(!l)return;l.innerHTML=e;const u=new Map,m=new Map,C=new Map;let w=0;o.length>0&&l.querySelectorAll(`.${re}`).forEach(s=>{const b=s.getAttribute(ae);if(!b)return;const v=parseInt(b,10);if(isNaN(v)||v<0||v>=o.length)return;const x=document.createElement("div");x.setAttribute(se,v.toString()),x.className=le,s.replaceWith(x),u.set(v,x)}),l.querySelectorAll('a[href^="/puzzle/"], a[href^="/expedition/"]').forEach(n=>{const s=n.getAttribute("href");if(!s||!s.startsWith("/puzzle/")&&!s.startsWith("/expedition/"))return;let b={};const v=n.getAttribute("style");if(v)try{J(v).forEach(k=>{if(k.type==="declaration"&&k.property&&k.value){const O=k.property.replace(/-([a-z])/g,z=>z[1].toUpperCase());b[O]=k.value}})}catch(N){console.warn(`Failed to parse inline styles for link: ${s}`,N)}const x={href:s,text:n.textContent||"",className:n.getAttribute("class")||void 0,style:Object.keys(b).length>0?b:void 0,id:n.getAttribute("id")||void 0},E=document.createElement("span");E.setAttribute(ce,w.toString()),E.style.display="contents",n.replaceWith(E),m.set(w,E),C.set(w,x),w++}),c(u),p(m),a(C)},[e,o]);return g.jsxs(g.Fragment,{children:[g.jsx("div",{ref:i,className:"markdown-content prose max-w-none space-y-4"}),Array.from(r.entries()).map(([l,u])=>{const m=o[l];return m?S.createPortal(g.jsx(te,{blockId:l,blockData:m},l),u):null}),Array.from(h.entries()).map(([l,u])=>{const m=d.get(l);return m?S.createPortal(g.jsx(R,{to:u.href,className:u.className,style:u.style,id:u.id,children:u.text},`link-${l}`),m):null})]})}function fe(e){const o=T(),r=L();return o.key!=="default"?{to:e,onClick:d=>{d.preventDefault(),r(-1)}}:{to:e}}export{he as C,me as M,fe as u};
