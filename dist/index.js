"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  FlipDishChat: () => FlipDishChat,
  FlipDishProvider: () => FlipDishProvider,
  useFlipDish: () => useFlipDish
});
module.exports = __toCommonJS(index_exports);

// #style-inject:#style-inject
function styleInject(css, { insertAt } = {}) {
  if (!css || typeof document === "undefined") return;
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

// src/styles.css
styleInject('*,\n::before,\n::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x: ;\n  --tw-pan-y: ;\n  --tw-pinch-zoom: ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position: ;\n  --tw-gradient-via-position: ;\n  --tw-gradient-to-position: ;\n  --tw-ordinal: ;\n  --tw-slashed-zero: ;\n  --tw-numeric-figure: ;\n  --tw-numeric-spacing: ;\n  --tw-numeric-fraction: ;\n  --tw-ring-inset: ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur: ;\n  --tw-brightness: ;\n  --tw-contrast: ;\n  --tw-grayscale: ;\n  --tw-hue-rotate: ;\n  --tw-invert: ;\n  --tw-saturate: ;\n  --tw-sepia: ;\n  --tw-drop-shadow: ;\n  --tw-backdrop-blur: ;\n  --tw-backdrop-brightness: ;\n  --tw-backdrop-contrast: ;\n  --tw-backdrop-grayscale: ;\n  --tw-backdrop-hue-rotate: ;\n  --tw-backdrop-invert: ;\n  --tw-backdrop-opacity: ;\n  --tw-backdrop-saturate: ;\n  --tw-backdrop-sepia: ;\n  --tw-contain-size: ;\n  --tw-contain-layout: ;\n  --tw-contain-paint: ;\n  --tw-contain-style: ;\n}\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x: ;\n  --tw-pan-y: ;\n  --tw-pinch-zoom: ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position: ;\n  --tw-gradient-via-position: ;\n  --tw-gradient-to-position: ;\n  --tw-ordinal: ;\n  --tw-slashed-zero: ;\n  --tw-numeric-figure: ;\n  --tw-numeric-spacing: ;\n  --tw-numeric-fraction: ;\n  --tw-ring-inset: ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur: ;\n  --tw-brightness: ;\n  --tw-contrast: ;\n  --tw-grayscale: ;\n  --tw-hue-rotate: ;\n  --tw-invert: ;\n  --tw-saturate: ;\n  --tw-sepia: ;\n  --tw-drop-shadow: ;\n  --tw-backdrop-blur: ;\n  --tw-backdrop-brightness: ;\n  --tw-backdrop-contrast: ;\n  --tw-backdrop-grayscale: ;\n  --tw-backdrop-hue-rotate: ;\n  --tw-backdrop-invert: ;\n  --tw-backdrop-opacity: ;\n  --tw-backdrop-saturate: ;\n  --tw-backdrop-sepia: ;\n  --tw-contain-size: ;\n  --tw-contain-layout: ;\n  --tw-contain-paint: ;\n  --tw-contain-style: ;\n}\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  border-width: 0;\n  border-style: solid;\n  border-color: #e5e7eb;\n}\n::before,\n::after {\n  --tw-content: "";\n}\nhtml,\n:host {\n  line-height: 1.5;\n  -webkit-text-size-adjust: 100%;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  font-family:\n    ui-sans-serif,\n    system-ui,\n    sans-serif,\n    "Apple Color Emoji",\n    "Segoe UI Emoji",\n    "Segoe UI Symbol",\n    "Noto Color Emoji";\n  font-feature-settings: normal;\n  font-variation-settings: normal;\n  -webkit-tap-highlight-color: transparent;\n}\nbody {\n  margin: 0;\n  line-height: inherit;\n}\nhr {\n  height: 0;\n  color: inherit;\n  border-top-width: 1px;\n}\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\na {\n  color: inherit;\n  text-decoration: inherit;\n}\nb,\nstrong {\n  font-weight: bolder;\n}\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n  font-feature-settings: normal;\n  font-variation-settings: normal;\n  font-size: 1em;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\ntable {\n  text-indent: 0;\n  border-color: inherit;\n  border-collapse: collapse;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  font-feature-settings: inherit;\n  font-variation-settings: inherit;\n  font-size: 100%;\n  font-weight: inherit;\n  line-height: inherit;\n  letter-spacing: inherit;\n  color: inherit;\n  margin: 0;\n  padding: 0;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\ninput:where([type=button]),\ninput:where([type=reset]),\ninput:where([type=submit]) {\n  -webkit-appearance: button;\n  background-color: transparent;\n  background-image: none;\n}\n:-moz-focusring {\n  outline: auto;\n}\n:-moz-ui-invalid {\n  box-shadow: none;\n}\nprogress {\n  vertical-align: baseline;\n}\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\nsummary {\n  display: list-item;\n}\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nlegend {\n  padding: 0;\n}\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\ndialog {\n  padding: 0;\n}\ntextarea {\n  resize: vertical;\n}\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\nbutton,\n[role=button] {\n  cursor: pointer;\n}\n:disabled {\n  cursor: default;\n}\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n[hidden]:where(:not([hidden=until-found])) {\n  display: none;\n}\n:root {\n  --background: 0 0% 100%;\n  --foreground: 240 10% 3.9%;\n  --card: 0 0% 100%;\n  --card-foreground: 240 10% 3.9%;\n  --popover: 0 0% 100%;\n  --popover-foreground: 240 10% 3.9%;\n  --primary: 240 5.9% 10%;\n  --primary-foreground: 0 0% 98%;\n  --secondary: 240 4.8% 95.9%;\n  --secondary-foreground: 240 5.9% 10%;\n  --muted: 240 4.8% 95.9%;\n  --muted-foreground: 240 3.8% 46.1%;\n  --accent: 240 4.8% 95.9%;\n  --accent-foreground: 240 5.9% 10%;\n  --destructive: 0 84.2% 60.2%;\n  --destructive-foreground: 0 0% 98%;\n  --border: 240 5.9% 90%;\n  --input: 240 5.9% 90%;\n  --ring: 240 5.9% 10%;\n  --radius: 0.5rem;\n}\n* {\n  border-color: hsl(var(--border));\n}\nbody {\n  background-color: hsl(var(--background));\n  color: hsl(var(--foreground));\n}\n.prose {\n  color: var(--tw-prose-body);\n  max-width: 65ch;\n}\n.prose :where(p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n}\n.prose :where([class~=lead]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-lead);\n  font-size: 1.25em;\n  line-height: 1.6;\n  margin-top: 1.2em;\n  margin-bottom: 1.2em;\n}\n.prose :where(a):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-links);\n  text-decoration: underline;\n  font-weight: 500;\n}\n.prose :where(strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-bold);\n  font-weight: 600;\n}\n.prose :where(a strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(blockquote strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(thead th strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: decimal;\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n  padding-inline-start: 1.625em;\n}\n.prose :where(ol[type=A]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: upper-alpha;\n}\n.prose :where(ol[type=a]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: lower-alpha;\n}\n.prose :where(ol[type=A s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: upper-alpha;\n}\n.prose :where(ol[type=a s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: lower-alpha;\n}\n.prose :where(ol[type=I]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: upper-roman;\n}\n.prose :where(ol[type=i]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: lower-roman;\n}\n.prose :where(ol[type=I s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: upper-roman;\n}\n.prose :where(ol[type=i s]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: lower-roman;\n}\n.prose :where(ol[type="1"]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: decimal;\n}\n.prose :where(ul):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  list-style-type: disc;\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n  padding-inline-start: 1.625em;\n}\n.prose :where(ol > li):not(:where([class~=not-prose], [class~=not-prose] *))::marker {\n  font-weight: 400;\n  color: var(--tw-prose-counters);\n}\n.prose :where(ul > li):not(:where([class~=not-prose], [class~=not-prose] *))::marker {\n  color: var(--tw-prose-bullets);\n}\n.prose :where(dt):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  margin-top: 1.25em;\n}\n.prose :where(hr):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-color: var(--tw-prose-hr);\n  border-top-width: 1px;\n  margin-top: 3em;\n  margin-bottom: 3em;\n}\n.prose :where(blockquote):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 500;\n  font-style: italic;\n  color: var(--tw-prose-quotes);\n  border-inline-start-width: 0.25rem;\n  border-inline-start-color: var(--tw-prose-quote-borders);\n  quotes: "\\201c""\\201d""\\2018""\\2019";\n  margin-top: 1.6em;\n  margin-bottom: 1.6em;\n  padding-inline-start: 1em;\n}\n.prose :where(blockquote p:first-of-type):not(:where([class~=not-prose], [class~=not-prose] *))::before {\n  content: open-quote;\n}\n.prose :where(blockquote p:last-of-type):not(:where([class~=not-prose], [class~=not-prose] *))::after {\n  content: close-quote;\n}\n.prose :where(h1):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 800;\n  font-size: 2.25em;\n  margin-top: 0;\n  margin-bottom: 0.8888889em;\n  line-height: 1.1111111;\n}\n.prose :where(h1 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 900;\n  color: inherit;\n}\n.prose :where(h2):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 700;\n  font-size: 1.5em;\n  margin-top: 2em;\n  margin-bottom: 1em;\n  line-height: 1.3333333;\n}\n.prose :where(h2 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 800;\n  color: inherit;\n}\n.prose :where(h3):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  font-size: 1.25em;\n  margin-top: 1.6em;\n  margin-bottom: 0.6em;\n  line-height: 1.6;\n}\n.prose :where(h3 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 700;\n  color: inherit;\n}\n.prose :where(h4):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  margin-top: 1.5em;\n  margin-bottom: 0.5em;\n  line-height: 1.5;\n}\n.prose :where(h4 strong):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 700;\n  color: inherit;\n}\n.prose :where(img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(picture):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  display: block;\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(video):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(kbd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-weight: 500;\n  font-family: inherit;\n  color: var(--tw-prose-kbd);\n  box-shadow: 0 0 0 1px var(--tw-prose-kbd-shadows), 0 3px 0 var(--tw-prose-kbd-shadows);\n  font-size: 0.875em;\n  border-radius: 0.3125rem;\n  padding-top: 0.1875em;\n  padding-inline-end: 0.375em;\n  padding-bottom: 0.1875em;\n  padding-inline-start: 0.375em;\n}\n.prose :where(code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-code);\n  font-weight: 600;\n  font-size: 0.875em;\n}\n.prose :where(code):not(:where([class~=not-prose], [class~=not-prose] *))::before {\n  content: "`";\n}\n.prose :where(code):not(:where([class~=not-prose], [class~=not-prose] *))::after {\n  content: "`";\n}\n.prose :where(a code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(h1 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(h2 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n  font-size: 0.875em;\n}\n.prose :where(h3 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n  font-size: 0.9em;\n}\n.prose :where(h4 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(blockquote code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(thead th code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: inherit;\n}\n.prose :where(pre):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-pre-code);\n  background-color: var(--tw-prose-pre-bg);\n  overflow-x: auto;\n  font-weight: 400;\n  font-size: 0.875em;\n  line-height: 1.7142857;\n  margin-top: 1.7142857em;\n  margin-bottom: 1.7142857em;\n  border-radius: 0.375rem;\n  padding-top: 0.8571429em;\n  padding-inline-end: 1.1428571em;\n  padding-bottom: 0.8571429em;\n  padding-inline-start: 1.1428571em;\n}\n.prose :where(pre code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  background-color: transparent;\n  border-width: 0;\n  border-radius: 0;\n  padding: 0;\n  font-weight: inherit;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit;\n}\n.prose :where(pre code):not(:where([class~=not-prose], [class~=not-prose] *))::before {\n  content: none;\n}\n.prose :where(pre code):not(:where([class~=not-prose], [class~=not-prose] *))::after {\n  content: none;\n}\n.prose :where(table):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  width: 100%;\n  table-layout: auto;\n  margin-top: 2em;\n  margin-bottom: 2em;\n  font-size: 0.875em;\n  line-height: 1.7142857;\n}\n.prose :where(thead):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-bottom-width: 1px;\n  border-bottom-color: var(--tw-prose-th-borders);\n}\n.prose :where(thead th):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-headings);\n  font-weight: 600;\n  vertical-align: bottom;\n  padding-inline-end: 0.5714286em;\n  padding-bottom: 0.5714286em;\n  padding-inline-start: 0.5714286em;\n}\n.prose :where(tbody tr):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-bottom-width: 1px;\n  border-bottom-color: var(--tw-prose-td-borders);\n}\n.prose :where(tbody tr:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-bottom-width: 0;\n}\n.prose :where(tbody td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  vertical-align: baseline;\n}\n.prose :where(tfoot):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  border-top-width: 1px;\n  border-top-color: var(--tw-prose-th-borders);\n}\n.prose :where(tfoot td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  vertical-align: top;\n}\n.prose :where(th, td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  text-align: start;\n}\n.prose :where(figure > *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.prose :where(figcaption):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  color: var(--tw-prose-captions);\n  font-size: 0.875em;\n  line-height: 1.4285714;\n  margin-top: 0.8571429em;\n}\n.prose {\n  --tw-prose-body: #374151;\n  --tw-prose-headings: #111827;\n  --tw-prose-lead: #4b5563;\n  --tw-prose-links: #111827;\n  --tw-prose-bold: #111827;\n  --tw-prose-counters: #6b7280;\n  --tw-prose-bullets: #d1d5db;\n  --tw-prose-hr: #e5e7eb;\n  --tw-prose-quotes: #111827;\n  --tw-prose-quote-borders: #e5e7eb;\n  --tw-prose-captions: #6b7280;\n  --tw-prose-kbd: #111827;\n  --tw-prose-kbd-shadows: rgb(17 24 39 / 10%);\n  --tw-prose-code: #111827;\n  --tw-prose-pre-code: #e5e7eb;\n  --tw-prose-pre-bg: #1f2937;\n  --tw-prose-th-borders: #d1d5db;\n  --tw-prose-td-borders: #e5e7eb;\n  --tw-prose-invert-body: #d1d5db;\n  --tw-prose-invert-headings: #fff;\n  --tw-prose-invert-lead: #9ca3af;\n  --tw-prose-invert-links: #fff;\n  --tw-prose-invert-bold: #fff;\n  --tw-prose-invert-counters: #9ca3af;\n  --tw-prose-invert-bullets: #4b5563;\n  --tw-prose-invert-hr: #374151;\n  --tw-prose-invert-quotes: #f3f4f6;\n  --tw-prose-invert-quote-borders: #374151;\n  --tw-prose-invert-captions: #9ca3af;\n  --tw-prose-invert-kbd: #fff;\n  --tw-prose-invert-kbd-shadows: rgb(255 255 255 / 10%);\n  --tw-prose-invert-code: #fff;\n  --tw-prose-invert-pre-code: #d1d5db;\n  --tw-prose-invert-pre-bg: rgb(0 0 0 / 50%);\n  --tw-prose-invert-th-borders: #4b5563;\n  --tw-prose-invert-td-borders: #374151;\n  font-size: 1rem;\n  line-height: 1.75;\n}\n.prose :where(picture > img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.prose :where(li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.prose :where(ol > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-inline-start: 0.375em;\n}\n.prose :where(ul > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-inline-start: 0.375em;\n}\n.prose :where(.prose > ul > li p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.75em;\n  margin-bottom: 0.75em;\n}\n.prose :where(.prose > ul > li > p:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.25em;\n}\n.prose :where(.prose > ul > li > p:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 1.25em;\n}\n.prose :where(.prose > ol > li > p:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.25em;\n}\n.prose :where(.prose > ol > li > p:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 1.25em;\n}\n.prose :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.75em;\n  margin-bottom: 0.75em;\n}\n.prose :where(dl):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.25em;\n  margin-bottom: 1.25em;\n}\n.prose :where(dd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.5em;\n  padding-inline-start: 1.625em;\n}\n.prose :where(hr + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose :where(h2 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose :where(h3 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose :where(h4 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose :where(thead th:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-inline-start: 0;\n}\n.prose :where(thead th:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-inline-end: 0;\n}\n.prose :where(tbody td, tfoot td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-top: 0.5714286em;\n  padding-inline-end: 0.5714286em;\n  padding-bottom: 0.5714286em;\n  padding-inline-start: 0.5714286em;\n}\n.prose :where(tbody td:first-child, tfoot td:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-inline-start: 0;\n}\n.prose :where(tbody td:last-child, tfoot td:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-inline-end: 0;\n}\n.prose :where(figure):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 2em;\n  margin-bottom: 2em;\n}\n.prose :where(.prose > :first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose :where(.prose > :last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 0;\n}\n.prose-sm {\n  font-size: 0.875rem;\n  line-height: 1.7142857;\n}\n.prose-sm :where(p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.1428571em;\n  margin-bottom: 1.1428571em;\n}\n.prose-sm :where([class~=lead]):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 1.2857143em;\n  line-height: 1.5555556;\n  margin-top: 0.8888889em;\n  margin-bottom: 0.8888889em;\n}\n.prose-sm :where(blockquote):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.3333333em;\n  margin-bottom: 1.3333333em;\n  padding-inline-start: 1.1111111em;\n}\n.prose-sm :where(h1):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 2.1428571em;\n  margin-top: 0;\n  margin-bottom: 0.8em;\n  line-height: 1.2;\n}\n.prose-sm :where(h2):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 1.4285714em;\n  margin-top: 1.6em;\n  margin-bottom: 0.8em;\n  line-height: 1.4;\n}\n.prose-sm :where(h3):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 1.2857143em;\n  margin-top: 1.5555556em;\n  margin-bottom: 0.4444444em;\n  line-height: 1.5555556;\n}\n.prose-sm :where(h4):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.4285714em;\n  margin-bottom: 0.5714286em;\n  line-height: 1.4285714;\n}\n.prose-sm :where(img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.7142857em;\n  margin-bottom: 1.7142857em;\n}\n.prose-sm :where(picture):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.7142857em;\n  margin-bottom: 1.7142857em;\n}\n.prose-sm :where(picture > img):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.prose-sm :where(video):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.7142857em;\n  margin-bottom: 1.7142857em;\n}\n.prose-sm :where(kbd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 0.8571429em;\n  border-radius: 0.3125rem;\n  padding-top: 0.1428571em;\n  padding-inline-end: 0.3571429em;\n  padding-bottom: 0.1428571em;\n  padding-inline-start: 0.3571429em;\n}\n.prose-sm :where(code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 0.8571429em;\n}\n.prose-sm :where(h2 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 0.9em;\n}\n.prose-sm :where(h3 code):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 0.8888889em;\n}\n.prose-sm :where(pre):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 0.8571429em;\n  line-height: 1.6666667;\n  margin-top: 1.6666667em;\n  margin-bottom: 1.6666667em;\n  border-radius: 0.25rem;\n  padding-top: 0.6666667em;\n  padding-inline-end: 1em;\n  padding-bottom: 0.6666667em;\n  padding-inline-start: 1em;\n}\n.prose-sm :where(ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.1428571em;\n  margin-bottom: 1.1428571em;\n  padding-inline-start: 1.5714286em;\n}\n.prose-sm :where(ul):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.1428571em;\n  margin-bottom: 1.1428571em;\n  padding-inline-start: 1.5714286em;\n}\n.prose-sm :where(li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.2857143em;\n  margin-bottom: 0.2857143em;\n}\n.prose-sm :where(ol > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-inline-start: 0.4285714em;\n}\n.prose-sm :where(ul > li):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-inline-start: 0.4285714em;\n}\n.prose-sm :where(.prose-sm > ul > li p):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.5714286em;\n  margin-bottom: 0.5714286em;\n}\n.prose-sm :where(.prose-sm > ul > li > p:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.1428571em;\n}\n.prose-sm :where(.prose-sm > ul > li > p:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 1.1428571em;\n}\n.prose-sm :where(.prose-sm > ol > li > p:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.1428571em;\n}\n.prose-sm :where(.prose-sm > ol > li > p:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 1.1428571em;\n}\n.prose-sm :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.5714286em;\n  margin-bottom: 0.5714286em;\n}\n.prose-sm :where(dl):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.1428571em;\n  margin-bottom: 1.1428571em;\n}\n.prose-sm :where(dt):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.1428571em;\n}\n.prose-sm :where(dd):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0.2857143em;\n  padding-inline-start: 1.5714286em;\n}\n.prose-sm :where(hr):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 2.8571429em;\n  margin-bottom: 2.8571429em;\n}\n.prose-sm :where(hr + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose-sm :where(h2 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose-sm :where(h3 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose-sm :where(h4 + *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose-sm :where(table):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 0.8571429em;\n  line-height: 1.5;\n}\n.prose-sm :where(thead th):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-inline-end: 1em;\n  padding-bottom: 0.6666667em;\n  padding-inline-start: 1em;\n}\n.prose-sm :where(thead th:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-inline-start: 0;\n}\n.prose-sm :where(thead th:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-inline-end: 0;\n}\n.prose-sm :where(tbody td, tfoot td):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-top: 0.6666667em;\n  padding-inline-end: 1em;\n  padding-bottom: 0.6666667em;\n  padding-inline-start: 1em;\n}\n.prose-sm :where(tbody td:first-child, tfoot td:first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-inline-start: 0;\n}\n.prose-sm :where(tbody td:last-child, tfoot td:last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  padding-inline-end: 0;\n}\n.prose-sm :where(figure):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 1.7142857em;\n  margin-bottom: 1.7142857em;\n}\n.prose-sm :where(figure > *):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.prose-sm :where(figcaption):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  font-size: 0.8571429em;\n  line-height: 1.3333333;\n  margin-top: 0.6666667em;\n}\n.prose-sm :where(.prose-sm > :first-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-top: 0;\n}\n.prose-sm :where(.prose-sm > :last-child):not(:where([class~=not-prose], [class~=not-prose] *)) {\n  margin-bottom: 0;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.invisible {\n  visibility: hidden;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.inset-0 {\n  inset: 0px;\n}\n.-bottom-12 {\n  bottom: -3rem;\n}\n.-left-12 {\n  left: -3rem;\n}\n.-left-4 {\n  left: -1rem;\n}\n.-right-1 {\n  right: -0.25rem;\n}\n.-right-12 {\n  right: -3rem;\n}\n.-right-4 {\n  right: -1rem;\n}\n.-top-1 {\n  top: -0.25rem;\n}\n.-top-12 {\n  top: -3rem;\n}\n.left-1\\/2 {\n  left: 50%;\n}\n.left-\\[50\\%\\] {\n  left: 50%;\n}\n.right-4 {\n  right: 1rem;\n}\n.top-1\\/2 {\n  top: 50%;\n}\n.top-4 {\n  top: 1rem;\n}\n.top-\\[50\\%\\] {\n  top: 50%;\n}\n.z-50 {\n  z-index: 50;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.-ml-2 {\n  margin-left: -0.5rem;\n}\n.-ml-4 {\n  margin-left: -1rem;\n}\n.-mt-4 {\n  margin-top: -1rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.ml-1 {\n  margin-left: 0.25rem;\n}\n.mr-1 {\n  margin-right: 0.25rem;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.mt-auto {\n  margin-top: auto;\n}\n.line-clamp-2 {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.aspect-\\[4\\/3\\] {\n  aspect-ratio: 4/3;\n}\n.aspect-square {\n  aspect-ratio: 1 / 1;\n}\n.h-1\\.5 {\n  height: 0.375rem;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.h-11 {\n  height: 2.75rem;\n}\n.h-12 {\n  height: 3rem;\n}\n.h-16 {\n  height: 4rem;\n}\n.h-2 {\n  height: 0.5rem;\n}\n.h-3 {\n  height: 0.75rem;\n}\n.h-4 {\n  height: 1rem;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.h-8 {\n  height: 2rem;\n}\n.h-9 {\n  height: 2.25rem;\n}\n.h-auto {\n  height: auto;\n}\n.h-full {\n  height: 100%;\n}\n.max-h-\\[60vh\\] {\n  max-height: 60vh;\n}\n.max-h-\\[85\\%\\] {\n  max-height: 85%;\n}\n.min-h-\\[2\\.5em\\] {\n  min-height: 2.5em;\n}\n.w-1\\.5 {\n  width: 0.375rem;\n}\n.w-10 {\n  width: 2.5rem;\n}\n.w-12 {\n  width: 3rem;\n}\n.w-16 {\n  width: 4rem;\n}\n.w-2 {\n  width: 0.5rem;\n}\n.w-20 {\n  width: 5rem;\n}\n.w-3 {\n  width: 0.75rem;\n}\n.w-4 {\n  width: 1rem;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-8 {\n  width: 2rem;\n}\n.w-9 {\n  width: 2.25rem;\n}\n.w-full {\n  width: 100%;\n}\n.min-w-0 {\n  min-width: 0px;\n}\n.max-w-\\[80px\\] {\n  max-width: 80px;\n}\n.max-w-\\[85\\%\\] {\n  max-width: 85%;\n}\n.max-w-\\[95\\%\\] {\n  max-width: 95%;\n}\n.max-w-lg {\n  max-width: 32rem;\n}\n.max-w-none {\n  max-width: none;\n}\n.max-w-sm {\n  max-width: 24rem;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.shrink-0 {\n  flex-shrink: 0;\n}\n.grow-0 {\n  flex-grow: 0;\n}\n.basis-\\[55\\%\\] {\n  flex-basis: 55%;\n}\n.basis-full {\n  flex-basis: 100%;\n}\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-\\[-50\\%\\] {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-\\[-50\\%\\] {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-90 {\n  --tw-rotate: 90deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  50% {\n    transform: none;\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n}\n.animate-bounce {\n  animation: bounce 1s infinite;\n}\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n.animate-ping {\n  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n}\n@keyframes pulse {\n  50% {\n    opacity: .5;\n  }\n}\n.animate-pulse {\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.animate-spin {\n  animation: spin 1s linear infinite;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-col-reverse {\n  flex-direction: column-reverse;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-end {\n  align-items: flex-end;\n}\n.items-center {\n  align-items: center;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-0\\.5 {\n  gap: 0.125rem;\n}\n.gap-1 {\n  gap: 0.25rem;\n}\n.gap-1\\.5 {\n  gap: 0.375rem;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.gap-3 {\n  gap: 0.75rem;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.space-y-0 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0px * var(--tw-space-y-reverse));\n}\n.space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\n.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));\n}\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n.space-y-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-y-auto {\n  overflow-y: auto;\n}\n.scroll-smooth {\n  scroll-behavior: smooth;\n}\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.whitespace-pre-wrap {\n  white-space: pre-wrap;\n}\n.break-words {\n  overflow-wrap: break-word;\n}\n.rounded-2xl {\n  border-radius: 1rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-lg {\n  border-radius: var(--radius);\n}\n.rounded-md {\n  border-radius: calc(var(--radius) - 2px);\n}\n.rounded-sm {\n  border-radius: calc(var(--radius) - 4px);\n}\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n.rounded-b-none {\n  border-bottom-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n.rounded-t-lg {\n  border-top-left-radius: var(--radius);\n  border-top-right-radius: var(--radius);\n}\n.rounded-bl-sm {\n  border-bottom-left-radius: calc(var(--radius) - 4px);\n}\n.rounded-br-sm {\n  border-bottom-right-radius: calc(var(--radius) - 4px);\n}\n.border {\n  border-width: 1px;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-b-0 {\n  border-bottom-width: 0px;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-background {\n  border-color: hsl(var(--background));\n}\n.border-destructive\\/20 {\n  border-color: hsl(var(--destructive) / 0.2);\n}\n.border-input {\n  border-color: hsl(var(--input));\n}\n.border-muted-foreground\\/20 {\n  border-color: hsl(var(--muted-foreground) / 0.2);\n}\n.border-primary {\n  border-color: hsl(var(--primary));\n}\n.border-transparent {\n  border-color: transparent;\n}\n.bg-background {\n  background-color: hsl(var(--background));\n}\n.bg-background\\/80 {\n  background-color: hsl(var(--background) / 0.8);\n}\n.bg-background\\/95 {\n  background-color: hsl(var(--background) / 0.95);\n}\n.bg-black\\/80 {\n  background-color: rgb(0 0 0 / 0.8);\n}\n.bg-card {\n  background-color: hsl(var(--card));\n}\n.bg-card\\/50 {\n  background-color: hsl(var(--card) / 0.5);\n}\n.bg-destructive {\n  background-color: hsl(var(--destructive));\n}\n.bg-destructive\\/10 {\n  background-color: hsl(var(--destructive) / 0.1);\n}\n.bg-foreground\\/30 {\n  background-color: hsl(var(--foreground) / 0.3);\n}\n.bg-green-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(74 222 128 / var(--tw-bg-opacity, 1));\n}\n.bg-green-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity, 1));\n}\n.bg-muted {\n  background-color: hsl(var(--muted));\n}\n.bg-muted\\/10 {\n  background-color: hsl(var(--muted) / 0.1);\n}\n.bg-muted\\/20 {\n  background-color: hsl(var(--muted) / 0.2);\n}\n.bg-muted\\/30 {\n  background-color: hsl(var(--muted) / 0.3);\n}\n.bg-primary {\n  background-color: hsl(var(--primary));\n}\n.bg-primary\\/5 {\n  background-color: hsl(var(--primary) / 0.05);\n}\n.bg-red-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 113 113 / var(--tw-bg-opacity, 1));\n}\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));\n}\n.bg-secondary {\n  background-color: hsl(var(--secondary));\n}\n.object-cover {\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n.p-0 {\n  padding: 0px;\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.p-3 {\n  padding: 0.75rem;\n}\n.p-4 {\n  padding: 1rem;\n}\n.p-6 {\n  padding: 1.5rem;\n}\n.px-0 {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.px-2\\.5 {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.py-0\\.5 {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\n.py-12 {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\n.pb-4 {\n  padding-bottom: 1rem;\n}\n.pl-0 {\n  padding-left: 0px;\n}\n.pl-11 {\n  padding-left: 2.75rem;\n}\n.pl-2 {\n  padding-left: 0.5rem;\n}\n.pl-4 {\n  padding-left: 1rem;\n}\n.pr-12 {\n  padding-right: 3rem;\n}\n.pt-0 {\n  padding-top: 0px;\n}\n.pt-4 {\n  padding-top: 1rem;\n}\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.text-right {\n  text-align: right;\n}\n.font-mono {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-\\[10px\\] {\n  font-size: 10px;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.leading-none {\n  line-height: 1;\n}\n.leading-relaxed {\n  line-height: 1.625;\n}\n.tracking-\\[0\\.5em\\] {\n  letter-spacing: 0.5em;\n}\n.tracking-tight {\n  letter-spacing: -0.025em;\n}\n.text-card-foreground {\n  color: hsl(var(--card-foreground));\n}\n.text-destructive {\n  color: hsl(var(--destructive));\n}\n.text-destructive-foreground {\n  color: hsl(var(--destructive-foreground));\n}\n.text-foreground {\n  color: hsl(var(--foreground));\n}\n.text-muted-foreground {\n  color: hsl(var(--muted-foreground));\n}\n.text-primary {\n  color: hsl(var(--primary));\n}\n.text-primary-foreground {\n  color: hsl(var(--primary-foreground));\n}\n.text-secondary-foreground {\n  color: hsl(var(--secondary-foreground));\n}\n.underline {\n  text-decoration-line: underline;\n}\n.underline-offset-2 {\n  text-underline-offset: 2px;\n}\n.underline-offset-4 {\n  text-underline-offset: 4px;\n}\n.opacity-30 {\n  opacity: 0.3;\n}\n.opacity-70 {\n  opacity: 0.7;\n}\n.opacity-75 {\n  opacity: 0.75;\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.shadow-xl {\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.outline {\n  outline-style: solid;\n}\n.ring-offset-background {\n  --tw-ring-offset-color: hsl(var(--background));\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.backdrop-blur {\n  --tw-backdrop-blur: blur(8px);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.backdrop-blur-sm {\n  --tw-backdrop-blur: blur(4px);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.backdrop-filter {\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-colors {\n  transition-property:\n    color,\n    background-color,\n    border-color,\n    text-decoration-color,\n    fill,\n    stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-transform {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n.duration-300 {\n  transition-duration: 300ms;\n}\n@keyframes enter {\n  from {\n    opacity: var(--tw-enter-opacity, 1);\n    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));\n  }\n}\n@keyframes exit {\n  to {\n    opacity: var(--tw-exit-opacity, 1);\n    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));\n  }\n}\n.animate-in {\n  animation-name: enter;\n  animation-duration: 150ms;\n  --tw-enter-opacity: initial;\n  --tw-enter-scale: initial;\n  --tw-enter-rotate: initial;\n  --tw-enter-translate-x: initial;\n  --tw-enter-translate-y: initial;\n}\n.fade-in {\n  --tw-enter-opacity: 0;\n}\n.zoom-in-95 {\n  --tw-enter-scale: .95;\n}\n.slide-in-from-bottom {\n  --tw-enter-translate-y: 100%;\n}\n.slide-in-from-bottom-2 {\n  --tw-enter-translate-y: 0.5rem;\n}\n.duration-200 {\n  animation-duration: 200ms;\n}\n.duration-300 {\n  animation-duration: 300ms;\n}\n.running {\n  animation-play-state: running;\n}\n.\\[animation-delay\\:-0\\.15s\\] {\n  animation-delay: -0.15s;\n}\n.\\[animation-delay\\:-0\\.3s\\] {\n  animation-delay: -0.3s;\n}\n.dark\\:prose-invert:is(.dark *) {\n  --tw-prose-body: var(--tw-prose-invert-body);\n  --tw-prose-headings: var(--tw-prose-invert-headings);\n  --tw-prose-lead: var(--tw-prose-invert-lead);\n  --tw-prose-links: var(--tw-prose-invert-links);\n  --tw-prose-bold: var(--tw-prose-invert-bold);\n  --tw-prose-counters: var(--tw-prose-invert-counters);\n  --tw-prose-bullets: var(--tw-prose-invert-bullets);\n  --tw-prose-hr: var(--tw-prose-invert-hr);\n  --tw-prose-quotes: var(--tw-prose-invert-quotes);\n  --tw-prose-quote-borders: var(--tw-prose-invert-quote-borders);\n  --tw-prose-captions: var(--tw-prose-invert-captions);\n  --tw-prose-kbd: var(--tw-prose-invert-kbd);\n  --tw-prose-kbd-shadows: var(--tw-prose-invert-kbd-shadows);\n  --tw-prose-code: var(--tw-prose-invert-code);\n  --tw-prose-pre-code: var(--tw-prose-invert-pre-code);\n  --tw-prose-pre-bg: var(--tw-prose-invert-pre-bg);\n  --tw-prose-th-borders: var(--tw-prose-invert-th-borders);\n  --tw-prose-td-borders: var(--tw-prose-invert-td-borders);\n}\n.file\\:border-0::file-selector-button {\n  border-width: 0px;\n}\n.file\\:bg-transparent::file-selector-button {\n  background-color: transparent;\n}\n.file\\:text-sm::file-selector-button {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.file\\:font-medium::file-selector-button {\n  font-weight: 500;\n}\n.placeholder\\:text-muted-foreground::-moz-placeholder {\n  color: hsl(var(--muted-foreground));\n}\n.placeholder\\:text-muted-foreground::placeholder {\n  color: hsl(var(--muted-foreground));\n}\n.last\\:border-0:last-child {\n  border-width: 0px;\n}\n.last\\:pb-0:last-child {\n  padding-bottom: 0px;\n}\n.hover\\:scale-105:hover {\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.hover\\:bg-accent:hover {\n  background-color: hsl(var(--accent));\n}\n.hover\\:bg-destructive\\/80:hover {\n  background-color: hsl(var(--destructive) / 0.8);\n}\n.hover\\:bg-destructive\\/90:hover {\n  background-color: hsl(var(--destructive) / 0.9);\n}\n.hover\\:bg-muted:hover {\n  background-color: hsl(var(--muted));\n}\n.hover\\:bg-primary\\/80:hover {\n  background-color: hsl(var(--primary) / 0.8);\n}\n.hover\\:bg-primary\\/90:hover {\n  background-color: hsl(var(--primary) / 0.9);\n}\n.hover\\:bg-secondary\\/80:hover {\n  background-color: hsl(var(--secondary) / 0.8);\n}\n.hover\\:text-accent-foreground:hover {\n  color: hsl(var(--accent-foreground));\n}\n.hover\\:text-primary\\/80:hover {\n  color: hsl(var(--primary) / 0.8);\n}\n.hover\\:underline:hover {\n  text-decoration-line: underline;\n}\n.hover\\:opacity-100:hover {\n  opacity: 1;\n}\n.hover\\:shadow-md:hover {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus\\:ring-2:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-ring:focus {\n  --tw-ring-color: hsl(var(--ring));\n}\n.focus\\:ring-offset-2:focus {\n  --tw-ring-offset-width: 2px;\n}\n.focus-visible\\:outline-none:focus-visible {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus-visible\\:ring-2:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow),\n    var(--tw-ring-shadow),\n    var(--tw-shadow, 0 0 #0000);\n}\n.focus-visible\\:ring-primary\\/20:focus-visible {\n  --tw-ring-color: hsl(var(--primary) / 0.2);\n}\n.focus-visible\\:ring-ring:focus-visible {\n  --tw-ring-color: hsl(var(--ring));\n}\n.focus-visible\\:ring-offset-2:focus-visible {\n  --tw-ring-offset-width: 2px;\n}\n.disabled\\:pointer-events-none:disabled {\n  pointer-events: none;\n}\n.disabled\\:cursor-not-allowed:disabled {\n  cursor: not-allowed;\n}\n.disabled\\:opacity-50:disabled {\n  opacity: 0.5;\n}\n.data-\\[state\\=open\\]\\:bg-accent[data-state=open] {\n  background-color: hsl(var(--accent));\n}\n.data-\\[state\\=open\\]\\:text-muted-foreground[data-state=open] {\n  color: hsl(var(--muted-foreground));\n}\n.data-\\[state\\=open\\]\\:animate-in[data-state=open] {\n  animation-name: enter;\n  animation-duration: 150ms;\n  --tw-enter-opacity: initial;\n  --tw-enter-scale: initial;\n  --tw-enter-rotate: initial;\n  --tw-enter-translate-x: initial;\n  --tw-enter-translate-y: initial;\n}\n.data-\\[state\\=closed\\]\\:animate-out[data-state=closed] {\n  animation-name: exit;\n  animation-duration: 150ms;\n  --tw-exit-opacity: initial;\n  --tw-exit-scale: initial;\n  --tw-exit-rotate: initial;\n  --tw-exit-translate-x: initial;\n  --tw-exit-translate-y: initial;\n}\n.data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed] {\n  --tw-exit-opacity: 0;\n}\n.data-\\[state\\=open\\]\\:fade-in-0[data-state=open] {\n  --tw-enter-opacity: 0;\n}\n.data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed] {\n  --tw-exit-scale: .95;\n}\n.data-\\[state\\=open\\]\\:zoom-in-95[data-state=open] {\n  --tw-enter-scale: .95;\n}\n.data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state=closed] {\n  --tw-exit-translate-x: -50%;\n}\n.data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state=closed] {\n  --tw-exit-translate-y: -48%;\n}\n.data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state=open] {\n  --tw-enter-translate-x: -50%;\n}\n.data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state=open] {\n  --tw-enter-translate-y: -48%;\n}\n@supports (backdrop-filter: var(--tw)) {\n  .supports-\\[backdrop-filter\\]\\:bg-background\\/60 {\n    background-color: hsl(var(--background) / 0.6);\n  }\n}\n@media (min-width: 640px) {\n  .sm\\:flex {\n    display: flex;\n  }\n  .sm\\:max-w-\\[425px\\] {\n    max-width: 425px;\n  }\n  .sm\\:basis-\\[45\\%\\] {\n    flex-basis: 45%;\n  }\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n  .sm\\:justify-end {\n    justify-content: flex-end;\n  }\n  .sm\\:justify-between {\n    justify-content: space-between;\n  }\n  .sm\\:space-x-2 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n    margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n  }\n  .sm\\:rounded-lg {\n    border-radius: var(--radius);\n  }\n  .sm\\:text-left {\n    text-align: left;\n  }\n}\n@media (min-width: 768px) {\n  .md\\:-ml-4 {\n    margin-left: -1rem;\n  }\n  .md\\:basis-\\[40\\%\\] {\n    flex-basis: 40%;\n  }\n  .md\\:pl-4 {\n    padding-left: 1rem;\n  }\n}\n.\\[\\&\\>ol\\]\\:list-decimal > ol {\n  list-style-type: decimal;\n}\n.\\[\\&\\>ol\\]\\:pl-4 > ol {\n  padding-left: 1rem;\n}\n.\\[\\&\\>p\\:last-child\\]\\:mb-0 > p:last-child {\n  margin-bottom: 0px;\n}\n.\\[\\&\\>p\\]\\:mb-2 > p {\n  margin-bottom: 0.5rem;\n}\n.\\[\\&\\>ul\\]\\:list-disc > ul {\n  list-style-type: disc;\n}\n.\\[\\&\\>ul\\]\\:pl-4 > ul {\n  padding-left: 1rem;\n}\n');

// src/components/FlipDishChat.tsx
var import_react4 = __toESM(require("react"));

// src/context/FlipDishProvider.tsx
var import_react = require("react");

// src/api/flipdish-api.ts
var globalConfig = null;
function setFlipdishConfig(config) {
  globalConfig = {
    phoneAgentBase: config.phoneAgentBase || "https://phone-agent.online-ordering-integration.flipdishdev.com",
    mainApiBase: config.mainApiBase || "https://api-prod-staging.my.flipdishdev.com",
    bearerToken: config.bearerToken,
    appId: config.appId,
    storeId: config.storeId,
    serverUrl: config.serverUrl
  };
}
function getConfig() {
  if (globalConfig) {
    return globalConfig;
  }
  throw new Error("Flipdish config not set. Call setFlipdishConfig() before using the API.");
}
var FlipdishApiError = class extends Error {
  constructor(message, statusCode, errorCode, userMessage) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.userMessage = userMessage;
    this.name = "FlipdishApiError";
  }
};
var FlipdishAPI = class {
  _config = null;
  get config() {
    if (!this._config) {
      this._config = getConfig();
    }
    return this._config;
  }
  // ----------------------------------------
  // Helper Methods
  // ----------------------------------------
  buildPhoneAgentHeaders(chatId, token) {
    const headers = {
      "Content-Type": "application/json"
    };
    if (chatId) {
      headers["chat-id"] = chatId;
    }
    if (token) {
      headers["x-flipdish-token"] = token;
    }
    return headers;
  }
  buildMainApiHeaders(token) {
    const headers = {
      "Content-Type": "application/json",
      "accept": "application/json",
      "Flipdish-White-Label-Id": this.config.appId,
      "flipdish-app-type": "Web",
      "flipdish-language": "en"
    };
    if (token) {
      headers["X-Flipdish-Token"] = token;
    }
    return headers;
  }
  async callProxy(action, args) {
    if (!this.config.serverUrl) {
      throw new Error("Server URL not configured");
    }
    console.log(`\u{1F310} Proxying ${action} to ${this.config.serverUrl}`);
    try {
      const response = await fetch(`${this.config.serverUrl}/api`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, args })
      });
      const text = await response.text();
      const data = text ? JSON.parse(text) : {};
      console.log(`\u2705 Proxy response for ${action}:`, response.status, response.ok, data);
      if (!response.ok) {
        console.error(`\u274C Proxy error for ${action}:`, data.error);
        const errorCode = data.code || (response.status === 401 ? "TOKEN_EXPIRED" : void 0);
        throw new FlipdishApiError(
          data.error || `Proxy failed with status ${response.status}`,
          response.status,
          errorCode
        );
      }
      return data;
    } catch (error) {
      if (error instanceof FlipdishApiError) throw error;
      throw new FlipdishApiError(error.message || "Network error connecting to Proxy", 500);
    }
  }
  // ----------------------------------------
  // AUTH METHODS
  // ----------------------------------------
  async sendOTP(phoneNumber, captchaToken) {
    if (this.config.serverUrl) {
      return this.callProxy("sendOTP", [phoneNumber, captchaToken]);
    }
    const cleanedPhone = phoneNumber.replace(/[\s-]/g, "");
    console.log("\u{1F510} Sending OTP to:", cleanedPhone);
    const headers = {
      "Content-Type": "application/json"
    };
    if (captchaToken) {
      headers["h-captcha-response"] = captchaToken;
    }
    const response = await fetch(`${this.config.mainApiBase}/Account/RequestPhoneLoginCodeSms`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        PhoneNumber: cleanedPhone
      })
    });
    const data = await response.json();
    if (!data.Success) {
      console.log("\u274C OTP send failed:", data.UserMessage);
      return {
        success: false,
        error: data.UserMessage || "Failed to send SMS code"
      };
    }
    console.log("\u2705 OTP sent successfully");
    return {
      success: true,
      message: "SMS code sent successfully"
    };
  }
  async verifyOTP(phoneNumber, otpCode, chatId) {
    if (this.config.serverUrl) {
      return this.callProxy("verifyOTP", [phoneNumber, otpCode, chatId, this.config.appId]);
    }
    const cleanedPhone = phoneNumber.replace(/[\s-]/g, "");
    console.log("\u{1F510} Verifying OTP for:", cleanedPhone);
    const response = await fetch(`${this.config.mainApiBase}/Account/LoginUsingPhoneNumber`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
        "Flipdish-White-Label-Id": this.config.appId
      },
      body: JSON.stringify({
        PhoneNumber: cleanedPhone,
        SmsCode: otpCode
      })
    });
    const xFlipdishToken = response.headers.get("x-flipdish-token");
    const data = await response.json();
    if (!data.Success) {
      console.log("\u274C OTP verification failed:", data.UserMessage);
      return {
        success: false,
        error: data.UserMessage || "Invalid OTP code"
      };
    }
    const token = xFlipdishToken || data.Data;
    if (!token) {
      console.error("\u274C No token received in OTP verification response");
      return {
        success: false,
        error: "Authentication successful but no token received"
      };
    }
    console.log("\u2705 OTP verified successfully");
    let context;
    if (chatId) {
      try {
        context = await this.getCustomerContext(chatId, token);
      } catch (error) {
        console.warn("\u26A0\uFE0F Failed to load customer context:", error);
      }
    }
    return {
      success: true,
      token,
      user: {
        phoneNumber: cleanedPhone
      },
      context
    };
  }
  // ----------------------------------------
  // SESSION METHODS
  // ----------------------------------------
  async createSession(token, chatId) {
    if (this.config.serverUrl) {
      return this.callProxy("createSession", [
        this.config.appId,
        this.config.storeId,
        token,
        this.config.bearerToken,
        chatId
      ]);
    }
    console.log("\u{1F4DE} Creating chat session (authenticated:", !!token, ")");
    const headers = {
      "Authorization": `Bearer ${this.config.bearerToken}`,
      "Content-Type": "application/json"
    };
    if (token) {
      headers["x-flipdish-token"] = token;
    }
    const response = await fetch(`${this.config.phoneAgentBase}/chat/session`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        brandId: this.config.appId,
        storeId: this.config.storeId
      })
    });
    const data = await response.json();
    if (!response.ok || !data.data?.chatId) {
      console.log("\u274C Session creation failed:", data.serverErrorMessage);
      throw new FlipdishApiError(
        data.serverErrorMessage || "Failed to create session",
        response.status
      );
    }
    console.log("\u2705 Session created:", data.data.chatId);
    return { chatId: data.data.chatId };
  }
  // ----------------------------------------
  // RESTAURANT METHODS
  // ----------------------------------------
  async getRestaurantStatus(storeId) {
    if (this.config.serverUrl) {
      const targetStoreId2 = storeId || this.config.storeId;
      return this.callProxy("getRestaurantStatus", [targetStoreId2]);
    }
    const targetStoreId = storeId || this.config.storeId;
    console.log("\u{1F3EA} Checking restaurant status for store:", targetStoreId);
    const response = await fetch(
      `${this.config.mainApiBase}/Restaurant/PickupRestaurantDetails/${targetStoreId}`,
      {
        method: "GET",
        headers: {
          "accept": "application/json"
        }
      }
    );
    if (!response.ok) {
      const errorText = await response.text();
      console.log("\u274C Failed to get restaurant status:", errorText);
      throw new FlipdishApiError("Failed to fetch restaurant status", response.status);
    }
    const data = await response.json();
    if (!data.Success || !data.Data) {
      throw new FlipdishApiError("Invalid response from restaurant API", 500);
    }
    const status = {
      isOpen: data.Data.IsOpen || false,
      openTimeMessage: data.Data.OpenTimeMessage || "",
      secondsUntilOpens: data.Data.SecondsUntilRestaurantOpens,
      secondsUntilCloses: data.Data.SecondsUntilRestaurantCloses,
      restaurantName: data.Data.RestaurantName || ""
    };
    console.log(`   ${status.isOpen ? "\u2713 OPEN" : "\u26A0\uFE0F  CLOSED"}: ${status.openTimeMessage}`);
    return status;
  }
  // ----------------------------------------
  // CUSTOMER METHODS
  // ----------------------------------------
  async getCustomerContext(chatId, token) {
    if (this.config.serverUrl) {
      return this.callProxy("getCustomerContext", [chatId, token]);
    }
    console.log("\u{1F464} Getting customer context for chat:", chatId);
    const response = await fetch(
      `${this.config.phoneAgentBase}/tools/get-customer-context`,
      {
        method: "GET",
        headers: this.buildPhoneAgentHeaders(chatId, token)
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new FlipdishApiError(
        data.serverErrorMessage || "Failed to get customer context",
        response.status
      );
    }
    const customer = data.data?.customer;
    return {
      id: customer?.customerId ? String(customer.customerId) : void 0,
      phoneNumber: customer?.customerPhoneNumber,
      email: customer?.email,
      name: customer?.name
    };
  }
  // ----------------------------------------
  // PAYMENT METHODS
  // ----------------------------------------
  async getPaymentAccounts(token) {
    if (this.config.serverUrl) {
      return this.callProxy("getPaymentAccounts", [token, this.config.appId]);
    }
    console.log("\u{1F4B3} Fetching payment accounts");
    const response = await fetch(
      `${this.config.mainApiBase}/Payment/PaymentAccountsV2`,
      {
        method: "GET",
        headers: this.buildMainApiHeaders(token)
      }
    );
    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        throw new FlipdishApiError("Token expired or invalid", response.status, "TOKEN_EXPIRED");
      }
      const errorText = await response.text();
      throw new FlipdishApiError(`Payment API error: ${errorText}`, response.status);
    }
    const data = await response.json();
    if (!data.Success || !data.Data) {
      throw new FlipdishApiError("Invalid payment accounts response", 500);
    }
    console.log(`\u{1F4B3} Found ${data.Data.length} payment accounts`);
    const defaultAccount = data.Data.find((acc) => acc.IsDefaultPaymentMethod);
    return {
      accounts: data.Data,
      defaultAccountId: defaultAccount?.PaymentAccountId || null
    };
  }
  async addCard(token, card) {
    if (this.config.serverUrl) {
      return this.callProxy("addCard", [token, card, this.config.appId]);
    }
    console.log("\u{1F4B3} Adding new card");
    const response = await fetch(
      `${this.config.mainApiBase}/Payment/CardPaymentAccount`,
      {
        method: "POST",
        headers: this.buildMainApiHeaders(token),
        body: JSON.stringify(card)
      }
    );
    if (!response.ok) {
      const errorText = await response.text();
      throw new FlipdishApiError(`Add card failed: ${errorText}`, response.status);
    }
    const data = await response.json();
    if (!data.Success) {
      throw new FlipdishApiError(data.UserMessage || "Failed to add payment method", 400);
    }
    console.log("\u{1F4B3} Card added successfully");
    return data.Data;
  }
  async setDefaultPayment(token, paymentAccountId) {
    if (this.config.serverUrl) {
      return this.callProxy("setDefaultPayment", [token, paymentAccountId, this.config.appId]);
    }
    console.log("\u{1F4B3} Setting default payment account:", paymentAccountId);
    const response = await fetch(
      `${this.config.mainApiBase}/Payment/SetDefaultPaymentAccount?PaymentAccountId=${paymentAccountId}`,
      {
        method: "POST",
        headers: this.buildMainApiHeaders(token)
      }
    );
    if (!response.ok) {
      throw new FlipdishApiError(`Set default failed: ${response.status}`, response.status);
    }
    const data = await response.json();
    if (!data.Success) {
      throw new FlipdishApiError("Failed to set default payment account", 400);
    }
    console.log("\u{1F4B3} Default payment account set");
  }
  async deletePaymentAccount(token, paymentAccountId) {
    if (this.config.serverUrl) {
      return this.callProxy("deletePaymentAccount", [token, paymentAccountId, this.config.appId]);
    }
    console.log("\u{1F4B3} Deleting payment account:", paymentAccountId);
    const response = await fetch(
      `${this.config.mainApiBase}/Payment/PaymentAccount?PaymentAccountId=${paymentAccountId}`,
      {
        method: "DELETE",
        headers: this.buildMainApiHeaders(token)
      }
    );
    if (!response.ok) {
      const errorText = await response.text();
      throw new FlipdishApiError(`Delete failed: ${errorText}`, response.status);
    }
    const data = await response.json();
    if (!data.Success) {
      throw new FlipdishApiError(data.UserMessage || "Failed to delete payment method", 400);
    }
    console.log("\u{1F4B3} Payment account deleted");
  }
  // ----------------------------------------
  // BASKET METHODS
  // ----------------------------------------
  async getBasket(chatId, token) {
    if (this.config.serverUrl) {
      return this.callProxy("getBasket", [chatId, token]);
    }
    console.log(`\u{1F6D2} Getting basket (${token ? "authenticated" : "guest"})`);
    const response = await fetch(
      `${this.config.phoneAgentBase}/tools/basket/summary`,
      {
        method: "GET",
        headers: this.buildPhoneAgentHeaders(chatId, token)
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new FlipdishApiError(
        data.serverErrorMessage || "Failed to get basket",
        response.status,
        response.status === 401 || response.status === 403 ? "TOKEN_EXPIRED" : void 0
      );
    }
    return data.data || {
      basketMenuItems: [],
      totalPrice: 0
    };
  }
  async updateBasket(chatId, payload, token) {
    if (this.config.serverUrl) {
      return this.callProxy("updateBasket", [chatId, payload, token]);
    }
    const endpoint = token ? `${this.config.phoneAgentBase}/tools/basket/update-items` : `${this.config.phoneAgentBase}/tools/basket/guest/update-items`;
    console.log(`\u{1F6D2} Updating basket (${token ? "authenticated" : "guest"})`);
    console.log(`   Payload: ${JSON.stringify(payload)}`);
    const response = await fetch(endpoint, {
      method: "POST",
      headers: this.buildPhoneAgentHeaders(chatId, token),
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (!response.ok) {
      console.log(`   \u274C Error ${response.status}: ${JSON.stringify(data)}`);
      throw new FlipdishApiError(
        data.customerErrorMessage || data.serverErrorMessage || "Failed to update basket",
        response.status,
        response.status === 401 || response.status === 403 ? "TOKEN_EXPIRED" : void 0,
        data.customerErrorMessage
      );
    }
    console.log("   \u2713 Basket updated");
    return data.data;
  }
  async clearBasket(chatId, token) {
    if (this.config.serverUrl) {
      return this.callProxy("clearBasket", [chatId, token]);
    }
    console.log("\u{1F6D2} Clearing basket");
    const basket = await this.getBasket(chatId, token);
    if (basket.basketMenuItems.length === 0) {
      console.log("   Basket already empty");
      return;
    }
    const removeItems = basket.basketMenuItems.map((item) => ({
      menuItemId: item.menuItemId,
      quantity: item.quantity
    }));
    await this.updateBasket(chatId, { removeMenuItems: removeItems }, token);
    console.log("\u{1F6D2} Basket cleared");
  }
  // ----------------------------------------
  // MENU METHODS
  // ----------------------------------------
  async searchMenu(chatId, query, token) {
    if (this.config.serverUrl) {
      return this.callProxy("searchMenu", [chatId, query, token]);
    }
    console.log("\u{1F50D} Searching menu for:", query);
    const response = await fetch(
      `${this.config.phoneAgentBase}/tools/menu/search/text`,
      {
        method: "POST",
        headers: this.buildPhoneAgentHeaders(chatId, token),
        body: JSON.stringify({
          searchTerms: [query]
        })
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new FlipdishApiError(
        data.serverErrorMessage || "Menu search failed",
        response.status,
        response.status === 401 || response.status === 403 ? "TOKEN_EXPIRED" : void 0
      );
    }
    console.log(`\u{1F50D} Found ${data.data?.items?.length || 0} items`);
    return (data.data?.items || []).map((item) => ({
      menuItemId: item.menuItemId || item.MenuItemId,
      name: item.name || item.Name,
      description: item.description || item.Description,
      menuSectionName: item.menuSectionName || item.MenuSectionName,
      price: item.price || item.Price,
      // Map possible image fields
      imageUrl: item.imageUrl || item.ImageUrl || item.ImageName,
      // Map option sets - search/text API returns optionSets (MenuItemOptionSetText[])
      optionSets: item.optionSets || item.OptionSets
    }));
  }
  // ----------------------------------------
  // ORDER METHODS
  // ----------------------------------------
  async submitOrder(chatId, token, paymentAccountId) {
    if (this.config.serverUrl) {
      return this.callProxy("submitOrder", [
        chatId,
        token,
        paymentAccountId,
        this.config.appId,
        this.config.bearerToken
      ]);
    }
    console.log("\u{1F4E6} Submitting order");
    let accountId = paymentAccountId;
    if (!accountId) {
      const { defaultAccountId } = await this.getPaymentAccounts(token);
      if (!defaultAccountId) {
        return {
          success: false,
          error: "No payment method available",
          errorCode: "NO_PAYMENT_METHOD"
        };
      }
      accountId = defaultAccountId;
    }
    const response = await fetch(
      `${this.config.phoneAgentBase}/tools/order/submit`,
      {
        method: "POST",
        headers: this.buildPhoneAgentHeaders(chatId, token),
        body: JSON.stringify({
          paymentAccountId: accountId
        })
      }
    );
    const data = await response.json();
    if (!response.ok) {
      console.log("\u274C Order submission failed:", data.serverErrorMessage);
      return {
        success: false,
        error: data.customerErrorMessage || data.serverErrorMessage || "Order failed",
        errorCode: response.status === 401 ? "TOKEN_EXPIRED" : void 0
      };
    }
    console.log("\u2705 Order submitted:", data.data?.orderId);
    try {
      await this.clearBasket(chatId, token);
    } catch (error) {
      console.warn("\u26A0\uFE0F Failed to clear basket after submit:", error);
    }
    return {
      success: true,
      orderId: data.data?.orderId,
      leadTimePrompt: data.data?.leadTimePrompt
    };
  }
};
var flipdishApi = new FlipdishAPI();

// src/context/FlipDishProvider.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function setCookie(name, value, days) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=/";
}
function getCookie(name) {
  if (typeof document === "undefined") return "";
  return document.cookie.split("; ").reduce((r2, v) => {
    const parts = v.split("=");
    return parts[0] === name ? decodeURIComponent(parts[1]) : r2;
  }, "");
}
var FlipDishContext = (0, import_react.createContext)(null);
function FlipDishProvider({ config, children }) {
  const [sessionId, setSessionId] = (0, import_react.useState)(null);
  const [isInitialized, setIsInitialized] = (0, import_react.useState)(false);
  const [token, setToken] = (0, import_react.useState)(null);
  const [phoneNumber, setPhoneNumber] = (0, import_react.useState)(null);
  const [restaurantStatus, setRestaurantStatus] = (0, import_react.useState)(null);
  const [basketItems, setBasketItems] = (0, import_react.useState)([]);
  const [menuItems, setMenuItems] = (0, import_react.useState)([]);
  const [paymentAccounts, setPaymentAccounts] = (0, import_react.useState)([]);
  const [selectedPaymentAccountId, setSelectedPaymentAccountId] = (0, import_react.useState)(null);
  const [isBasketOpen, setBasketOpen] = (0, import_react.useState)(false);
  const [messages, setMessages] = (0, import_react.useState)([]);
  const [isLoading, setIsLoading] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const stored = getCookie("flipdish_auth");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.token && parsed.phoneNumber) {
          setToken(parsed.token);
          setPhoneNumber(parsed.phoneNumber);
        }
      } catch {
      }
    }
  }, []);
  (0, import_react.useEffect)(() => {
    if (token && phoneNumber) {
      setCookie("flipdish_auth", JSON.stringify({ token, phoneNumber }), 30);
    } else {
      setCookie("flipdish_auth", "", -1);
    }
  }, [token, phoneNumber]);
  const initializingRef = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    if (isInitialized || initializingRef.current) return;
    initializingRef.current = true;
    const init = async () => {
      try {
        setFlipdishConfig({
          appId: config.appId,
          storeId: config.storeId,
          bearerToken: config.bearerToken,
          serverUrl: config.serverUrl
        });
        const rawStoredSessionId = getCookie("flipdish_session_id");
        const storedSessionId = rawStoredSessionId && rawStoredSessionId !== "undefined" && rawStoredSessionId !== "null" ? rawStoredSessionId : void 0;
        const storedConfigHash = getCookie("flipdish_config_hash");
        const currentConfigHash = `${config.appId}:${config.storeId}`;
        let validStoredSession = storedSessionId && storedConfigHash === currentConfigHash ? storedSessionId : void 0;
        const clearSessionCookies = () => {
          console.warn("\u{1F504} Clearing invalid session cookies...");
          setCookie("flipdish_session_id", "", -1);
          setCookie("flipdish_config_hash", "", -1);
          setCookie("flipdish_auth", "", -1);
          setToken(null);
          setPhoneNumber(null);
        };
        let sessionResult;
        try {
          sessionResult = await flipdishApi.createSession(token || void 0, validStoredSession);
          if (validStoredSession) {
            try {
              await flipdishApi.getBasket(sessionResult.chatId, token || void 0);
              console.log("\u2705 Existing session validated successfully");
            } catch (validationError) {
              if (validationError.errorCode === "TOKEN_EXPIRED" || validationError.statusCode === 401 || validationError.statusCode === 403) {
                console.warn("\u26A0\uFE0F Stored session expired, creating fresh session...");
                clearSessionCookies();
                sessionResult = await flipdishApi.createSession(void 0, void 0);
              } else {
                throw validationError;
              }
            }
          }
        } catch (sessionError) {
          if (validStoredSession && (sessionError.errorCode === "TOKEN_EXPIRED" || sessionError.statusCode === 401 || sessionError.statusCode === 403)) {
            console.warn("\u26A0\uFE0F createSession failed with stored session, retrying fresh...");
            clearSessionCookies();
            sessionResult = await flipdishApi.createSession(void 0, void 0);
          } else {
            throw sessionError;
          }
        }
        const { chatId, basket: initialBasket, menu: initialMenu } = sessionResult;
        setSessionId(chatId);
        if (chatId && chatId !== "undefined") {
          setCookie("flipdish_session_id", chatId, 30);
          setCookie("flipdish_config_hash", currentConfigHash, 30);
        }
        if (initialMenu && initialMenu.length > 0) {
          setMenuItems(initialMenu);
          console.log(`\u{1F4CB} Menu loaded: ${initialMenu.length} items`);
        } else if (chatId) {
          console.warn("\u26A0\uFE0F Initial menu empty. Updates to items with options may fail until items are viewed in chat.");
        }
        const status = await flipdishApi.getRestaurantStatus();
        console.log("\u{1F3EA} Restaurant status received:", status);
        setRestaurantStatus(status);
        if (initialBasket) {
          setBasketItems(initialBasket.basketMenuItems || []);
        } else {
          const basket = await flipdishApi.getBasket(chatId, token || void 0);
          setBasketItems(basket.basketMenuItems || []);
        }
        if (token) {
          try {
            await flipdishApi.getCustomerContext(chatId, token);
            console.log("\u2705 Customer context restored from cached token");
          } catch (error) {
            if (error.errorCode === "TOKEN_EXPIRED" || error.statusCode === 401 || error.statusCode === 403) {
              console.warn("\u26A0\uFE0F Auth token expired, clearing credentials...");
              clearSessionCookies();
            } else {
              console.warn("\u26A0\uFE0F Failed to restore customer context:", error);
            }
          }
          if (token) {
            try {
              const { accounts } = await flipdishApi.getPaymentAccounts(token);
              setPaymentAccounts(accounts);
            } catch (error) {
              if (error.errorCode === "TOKEN_EXPIRED" || error.statusCode === 401 || error.statusCode === 403) {
                console.warn("\u26A0\uFE0F Payment accounts fetch failed - token expired");
                clearSessionCookies();
              }
            }
          }
        }
        setMessages([]);
        if (config.initialSearch) {
          try {
            const items = await flipdishApi.searchMenu(chatId, config.initialSearch, token || void 0);
            console.log("\u{1F50D} Initial search for", config.initialSearch, "returned", items?.length || 0, "items");
            if (items && items.length > 0) {
              setMenuItems((prev) => {
                const merged = [...prev];
                for (const item of items) {
                  if (!merged.find((m) => m.menuItemId === item.menuItemId)) {
                    merged.push(item);
                  }
                }
                return merged;
              });
              const toolCallId = `call_init_${Date.now()}`;
              setMessages((prev) => [
                ...prev,
                {
                  role: "assistant",
                  content: "",
                  tool_calls: [{
                    id: toolCallId,
                    type: "function",
                    function: {
                      name: "search_menu",
                      arguments: JSON.stringify({ query: config.initialSearch })
                    }
                  }]
                },
                {
                  role: "tool",
                  tool_call_id: toolCallId,
                  content: JSON.stringify({
                    displayType: "menu_cards",
                    items: items.slice(0, 3)
                  })
                },
                {
                  role: "assistant",
                  content: "Welcome! \u{1F44B} Here are some popular items to get you started. Feel free to ask me about the menu or add items to your basket!"
                }
              ]);
            } else {
              console.warn("\u26A0\uFE0F Initial search returned 0 items - refreshing session...");
              document.cookie = "flipdish_session_id=; Max-Age=0; path=/";
              document.cookie = "flipdish_config_hash=; Max-Age=0; path=/";
              document.cookie = "flipdish_auth=; Max-Age=0; path=/";
              window.location.reload();
              return;
            }
          } catch (error) {
            console.warn("Initial search failed:", error);
            setMessages((prev) => [...prev, {
              role: "assistant",
              content: "Welcome! \u{1F44B} I'm here to help you browse the menu and place your order. Just ask about any dish or tell me what you're craving!"
            }]);
          }
        }
        setIsInitialized(true);
      } catch (error) {
        console.error("Failed to initialize FlipDish:", error);
        setIsInitialized(true);
      }
    };
    init();
  }, [config.appId, config.storeId, config.bearerToken, config.serverUrl, token, isInitialized]);
  const initiateOTP = (0, import_react.useCallback)(async (phone, captchaToken) => {
    try {
      const result = await flipdishApi.sendOTP(phone, captchaToken);
      return result;
    } catch (error) {
      return { success: false, error: error.message };
    }
  }, []);
  const verifyOTP = (0, import_react.useCallback)(async (phone, code) => {
    try {
      const result = await flipdishApi.verifyOTP(phone, code, sessionId || void 0);
      if (result.success && result.token) {
        setToken(result.token);
        setPhoneNumber(phone);
        setCookie("flipdish_auth", JSON.stringify({ token: result.token, phoneNumber: phone }), 30);
        const { accounts } = await flipdishApi.getPaymentAccounts(result.token);
        setPaymentAccounts(accounts);
        return { success: true, context: result.context };
      }
      return { success: false, error: result.error, context: result.context };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }, [sessionId]);
  const logout = (0, import_react.useCallback)(() => {
    setToken(null);
    setPhoneNumber(null);
    setPaymentAccounts([]);
    setSelectedPaymentAccountId(null);
    setCookie("flipdish_auth", "", -1);
  }, []);
  const refreshBasket = (0, import_react.useCallback)(async () => {
    if (!sessionId) return;
    const basket = await flipdishApi.getBasket(sessionId, token || void 0);
    setBasketItems(basket.basketMenuItems || []);
  }, [sessionId, token]);
  const updateBasket = (0, import_react.useCallback)(async (action) => {
    if (!sessionId) return;
    try {
      if (action.type === "clear") {
        await flipdishApi.clearBasket(sessionId, token || void 0);
      } else {
        const payload = {};
        if (action.type === "add") {
          payload.addMenuItems = [{
            menuItemId: action.menuItemId,
            quantity: action.quantity,
            optionSelections: action.optionSelections
          }];
        } else if (action.type === "remove") {
          payload.removeMenuItems = [{
            menuItemId: action.menuItemId,
            quantity: action.quantity,
            optionSelections: action.optionSelections
          }];
        }
        console.log("Sending updateBasket payload:", JSON.stringify(payload, null, 2));
        await flipdishApi.updateBasket(sessionId, payload, token || void 0);
        if (action.type === "add") {
          setBasketOpen(true);
        }
      }
      await refreshBasket();
    } catch (error) {
      console.error("Failed to update basket:", error);
      throw error;
    }
  }, [sessionId, token, refreshBasket]);
  const addMenuItems = (0, import_react.useCallback)((newItems) => {
    setMenuItems((current) => {
      const existingIds = new Set(current.map((i) => i.menuItemId));
      const uniqueNew = newItems.filter((i) => !existingIds.has(i.menuItemId));
      if (uniqueNew.length === 0) return current;
      return [...current, ...uniqueNew];
    });
  }, []);
  const placeOrder = (0, import_react.useCallback)(async (paymentAccountId) => {
    let authToken = token;
    if (!authToken) {
      const cached = getCookie("flipdish_auth");
      if (cached) {
        try {
          authToken = JSON.parse(cached).token || null;
        } catch {
          authToken = null;
        }
      }
    }
    if (!sessionId || !authToken) {
      console.error("\u274C placeOrder: Missing sessionId or token", { sessionId, hasToken: !!authToken });
      return { success: false, error: "Not authenticated" };
    }
    console.log("\u{1F4E6} placeOrder: Submitting order", { sessionId, tokenLength: authToken.length });
    try {
      const result = await flipdishApi.submitOrder(sessionId, authToken, paymentAccountId);
      if (result.success) {
        await refreshBasket();
      }
      return result;
    } catch (error) {
      return { success: false, error: error.message };
    }
  }, [sessionId, token, refreshBasket]);
  const addMessage = (0, import_react.useCallback)((message) => {
    setMessages((prev) => [...prev, message]);
  }, []);
  const sendMessage = (0, import_react.useCallback)(async (message) => {
    if (!sessionId) {
      throw new Error("Session not initialized");
    }
    setIsLoading(true);
    try {
      const userMessage = { role: "user", content: message };
      const newMessages = [...messages, userMessage];
      setMessages(newMessages);
      const apiMessages = newMessages.filter((msg) => {
        const isDummyToolCall = msg.tool_calls?.some((tc) => tc.id.startsWith("call_init_"));
        const isDummyToolResponse = msg.tool_call_id?.startsWith("call_init_");
        return !isDummyToolCall && !isDummyToolResponse;
      });
      const chatRequest = {
        messages: apiMessages,
        chatId: sessionId,
        token: token || void 0,
        menuItems
      };
      const res = await fetch(`${config.serverUrl}/api`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "chat", args: [chatRequest] })
      });
      if (!res.ok) {
        const errorData = await res.text();
        throw new Error(`Chat request failed: ${errorData}`);
      }
      const response = await res.json();
      if (response.allMessages) {
        setMessages(response.allMessages.filter((m) => m.role !== "system"));
      } else {
        setMessages([...newMessages, response.message]);
      }
      if (response.toolCalls && response.toolCalls.length > 0 || response.orderSubmitted) {
        await refreshBasket();
        if (response.basketUpdated) {
          setBasketOpen(true);
        }
      }
      return response;
    } finally {
      setIsLoading(false);
    }
  }, [sessionId, token, messages, config.serverUrl, menuItems, refreshBasket]);
  const isAuthenticated = !!token;
  const isRestaurantOpen = restaurantStatus?.isOpen ?? false;
  const basketTotal = basketItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const defaultPaymentAccount = paymentAccounts.find((a) => a.PaymentAccountId === selectedPaymentAccountId) || paymentAccounts.find((a) => a.IsDefaultPaymentMethod) || null;
  const value = {
    sessionId,
    isInitialized,
    isAuthenticated,
    token,
    phoneNumber,
    initiateOTP,
    verifyOTP,
    logout,
    restaurantStatus,
    isRestaurantOpen,
    basketItems,
    basketTotal,
    refreshBasket,
    updateBasket,
    menuItems,
    addMenuItems,
    paymentAccounts,
    defaultPaymentAccount,
    placeOrder,
    setPaymentMethod: setSelectedPaymentAccountId,
    addMessage,
    sendMessage,
    messages,
    isLoading,
    isBasketOpen,
    setBasketOpen
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipDishContext.Provider, { value, children });
}
function useFlipDish() {
  const context = (0, import_react.useContext)(FlipDishContext);
  if (!context) {
    throw new Error("useFlipDish must be used within a FlipDishProvider");
  }
  return context;
}

// src/components/FlipDishChat.tsx
var import_lucide_react5 = require("lucide-react");

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// node_modules/tailwind-merge/dist/bundle-mjs.mjs
var concatArrays = (array1, array2) => {
  const combinedArray = new Array(array1.length + array2.length);
  for (let i = 0; i < array1.length; i++) {
    combinedArray[i] = array1[i];
  }
  for (let i = 0; i < array2.length; i++) {
    combinedArray[array1.length + i] = array2[i];
  }
  return combinedArray;
};
var createClassValidatorObject = (classGroupId, validator) => ({
  classGroupId,
  validator
});
var createClassPartObject = (nextPart = /* @__PURE__ */ new Map(), validators = null, classGroupId) => ({
  nextPart,
  validators,
  classGroupId
});
var CLASS_PART_SEPARATOR = "-";
var EMPTY_CONFLICTS = [];
var ARBITRARY_PROPERTY_PREFIX = "arbitrary..";
var createClassGroupUtils = (config) => {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = (className) => {
    if (className.startsWith("[") && className.endsWith("]")) {
      return getGroupIdForArbitraryProperty(className);
    }
    const classParts = className.split(CLASS_PART_SEPARATOR);
    const startIndex = classParts[0] === "" && classParts.length > 1 ? 1 : 0;
    return getGroupRecursive(classParts, startIndex, classMap);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    if (hasPostfixModifier) {
      const modifierConflicts = conflictingClassGroupModifiers[classGroupId];
      const baseConflicts = conflictingClassGroups[classGroupId];
      if (modifierConflicts) {
        if (baseConflicts) {
          return concatArrays(baseConflicts, modifierConflicts);
        }
        return modifierConflicts;
      }
      return baseConflicts || EMPTY_CONFLICTS;
    }
    return conflictingClassGroups[classGroupId] || EMPTY_CONFLICTS;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
var getGroupRecursive = (classParts, startIndex, classPartObject) => {
  const classPathsLength = classParts.length - startIndex;
  if (classPathsLength === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[startIndex];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  if (nextClassPartObject) {
    const result = getGroupRecursive(classParts, startIndex + 1, nextClassPartObject);
    if (result) return result;
  }
  const validators = classPartObject.validators;
  if (validators === null) {
    return void 0;
  }
  const classRest = startIndex === 0 ? classParts.join(CLASS_PART_SEPARATOR) : classParts.slice(startIndex).join(CLASS_PART_SEPARATOR);
  const validatorsLength = validators.length;
  for (let i = 0; i < validatorsLength; i++) {
    const validatorObj = validators[i];
    if (validatorObj.validator(classRest)) {
      return validatorObj.classGroupId;
    }
  }
  return void 0;
};
var getGroupIdForArbitraryProperty = (className) => className.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const content = className.slice(1, -1);
  const colonIndex = content.indexOf(":");
  const property = content.slice(0, colonIndex);
  return property ? ARBITRARY_PROPERTY_PREFIX + property : void 0;
})();
var createClassMap = (config) => {
  const {
    theme,
    classGroups
  } = config;
  return processClassGroups(classGroups, theme);
};
var processClassGroups = (classGroups, theme) => {
  const classMap = createClassPartObject();
  for (const classGroupId in classGroups) {
    const group = classGroups[classGroupId];
    processClassesRecursively(group, classMap, classGroupId, theme);
  }
  return classMap;
};
var processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  const len = classGroup.length;
  for (let i = 0; i < len; i++) {
    const classDefinition = classGroup[i];
    processClassDefinition(classDefinition, classPartObject, classGroupId, theme);
  }
};
var processClassDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
  if (typeof classDefinition === "string") {
    processStringDefinition(classDefinition, classPartObject, classGroupId);
    return;
  }
  if (typeof classDefinition === "function") {
    processFunctionDefinition(classDefinition, classPartObject, classGroupId, theme);
    return;
  }
  processObjectDefinition(classDefinition, classPartObject, classGroupId, theme);
};
var processStringDefinition = (classDefinition, classPartObject, classGroupId) => {
  const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
  classPartObjectToEdit.classGroupId = classGroupId;
};
var processFunctionDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
  if (isThemeGetter(classDefinition)) {
    processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
    return;
  }
  if (classPartObject.validators === null) {
    classPartObject.validators = [];
  }
  classPartObject.validators.push(createClassValidatorObject(classGroupId, classDefinition));
};
var processObjectDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
  const entries = Object.entries(classDefinition);
  const len = entries.length;
  for (let i = 0; i < len; i++) {
    const [key, value] = entries[i];
    processClassesRecursively(value, getPart(classPartObject, key), classGroupId, theme);
  }
};
var getPart = (classPartObject, path) => {
  let current = classPartObject;
  const parts = path.split(CLASS_PART_SEPARATOR);
  const len = parts.length;
  for (let i = 0; i < len; i++) {
    const part = parts[i];
    let next = current.nextPart.get(part);
    if (!next) {
      next = createClassPartObject();
      current.nextPart.set(part, next);
    }
    current = next;
  }
  return current;
};
var isThemeGetter = (func) => "isThemeGetter" in func && func.isThemeGetter === true;
var createLruCache = (maxCacheSize) => {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {
      }
    };
  }
  let cacheSize = 0;
  let cache = /* @__PURE__ */ Object.create(null);
  let previousCache = /* @__PURE__ */ Object.create(null);
  const update = (key, value) => {
    cache[key] = value;
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = /* @__PURE__ */ Object.create(null);
    }
  };
  return {
    get(key) {
      let value = cache[key];
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache[key]) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (key in cache) {
        cache[key] = value;
      } else {
        update(key, value);
      }
    }
  };
};
var IMPORTANT_MODIFIER = "!";
var MODIFIER_SEPARATOR = ":";
var EMPTY_MODIFIERS = [];
var createResultObject = (modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition, isExternal) => ({
  modifiers,
  hasImportantModifier,
  baseClassName,
  maybePostfixModifierPosition,
  isExternal
});
var createParseClassName = (config) => {
  const {
    prefix,
    experimentalParseClassName
  } = config;
  let parseClassName = (className) => {
    const modifiers = [];
    let bracketDepth = 0;
    let parenDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    const len = className.length;
    for (let index = 0; index < len; index++) {
      const currentCharacter = className[index];
      if (bracketDepth === 0 && parenDepth === 0) {
        if (currentCharacter === MODIFIER_SEPARATOR) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + 1;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === "[") bracketDepth++;
      else if (currentCharacter === "]") bracketDepth--;
      else if (currentCharacter === "(") parenDepth++;
      else if (currentCharacter === ")") parenDepth--;
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.slice(modifierStart);
    let baseClassName = baseClassNameWithImportantModifier;
    let hasImportantModifier = false;
    if (baseClassNameWithImportantModifier.endsWith(IMPORTANT_MODIFIER)) {
      baseClassName = baseClassNameWithImportantModifier.slice(0, -1);
      hasImportantModifier = true;
    } else if (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER)
    ) {
      baseClassName = baseClassNameWithImportantModifier.slice(1);
      hasImportantModifier = true;
    }
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return createResultObject(modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition);
  };
  if (prefix) {
    const fullPrefix = prefix + MODIFIER_SEPARATOR;
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.slice(fullPrefix.length)) : createResultObject(EMPTY_MODIFIERS, false, className, void 0, true);
  }
  if (experimentalParseClassName) {
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => experimentalParseClassName({
      className,
      parseClassName: parseClassNameOriginal
    });
  }
  return parseClassName;
};
var createSortModifiers = (config) => {
  const modifierWeights = /* @__PURE__ */ new Map();
  config.orderSensitiveModifiers.forEach((mod, index) => {
    modifierWeights.set(mod, 1e6 + index);
  });
  return (modifiers) => {
    const result = [];
    let currentSegment = [];
    for (let i = 0; i < modifiers.length; i++) {
      const modifier = modifiers[i];
      const isArbitrary = modifier[0] === "[";
      const isOrderSensitive = modifierWeights.has(modifier);
      if (isArbitrary || isOrderSensitive) {
        if (currentSegment.length > 0) {
          currentSegment.sort();
          result.push(...currentSegment);
          currentSegment = [];
        }
        result.push(modifier);
      } else {
        currentSegment.push(modifier);
      }
    }
    if (currentSegment.length > 0) {
      currentSegment.sort();
      result.push(...currentSegment);
    }
    return result;
  };
};
var createConfigUtils = (config) => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  sortModifiers: createSortModifiers(config),
  ...createClassGroupUtils(config)
});
var SPLIT_CLASSES_REGEX = /\s+/;
var mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds,
    sortModifiers
  } = configUtils;
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = "";
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      isExternal,
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    if (isExternal) {
      result = originalClassName + (result.length > 0 ? " " + result : result);
      continue;
    }
    let hasPostfixModifier = !!maybePostfixModifierPosition;
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = modifiers.length === 0 ? "" : modifiers.length === 1 ? modifiers[0] : sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.indexOf(classId) > -1) {
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i = 0; i < conflictGroups.length; ++i) {
      const group = conflictGroups[i];
      classGroupsInConflict.push(modifierId + group);
    }
    result = originalClassName + (result.length > 0 ? " " + result : result);
  }
  return result;
};
var twJoin = (...classLists) => {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index < classLists.length) {
    if (argument = classLists[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
var toValue = (mix) => {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
var createTailwindMerge = (createConfigFirst, ...createConfigRest) => {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall;
  const initTailwindMerge = (classList) => {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  };
  const tailwindMerge = (classList) => {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  };
  functionToCall = initTailwindMerge;
  return (...args) => functionToCall(twJoin(...args));
};
var fallbackThemeArr = [];
var fromTheme = (key) => {
  const themeGetter = (theme) => theme[key] || fallbackThemeArr;
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
var arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
var arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
var fractionRegex = /^\d+\/\d+$/;
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
var shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var isFraction = (value) => fractionRegex.test(value);
var isNumber = (value) => !!value && !Number.isNaN(Number(value));
var isInteger = (value) => !!value && Number.isInteger(Number(value));
var isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
var isTshirtSize = (value) => tshirtUnitRegex.test(value);
var isAny = () => true;
var isLengthOnly = (value) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
);
var isNever = () => false;
var isShadow = (value) => shadowRegex.test(value);
var isImage = (value) => imageRegex.test(value);
var isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value);
var isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever);
var isArbitraryValue = (value) => arbitraryValueRegex.test(value);
var isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
var isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber);
var isArbitraryWeight = (value) => getIsArbitraryValue(value, isLabelWeight, isAny);
var isArbitraryFamilyName = (value) => getIsArbitraryValue(value, isLabelFamilyName, isNever);
var isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever);
var isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage);
var isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow);
var isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
var isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
var isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
var isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
var isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
var isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
var isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
var isArbitraryVariableWeight = (value) => getIsArbitraryVariable(value, isLabelWeight, true);
var getIsArbitraryValue = (value, testLabel, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
var getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
  const result = arbitraryVariableRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return shouldMatchNoLabel;
  }
  return false;
};
var isLabelPosition = (label) => label === "position" || label === "percentage";
var isLabelImage = (label) => label === "image" || label === "url";
var isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size";
var isLabelLength = (label) => label === "length";
var isLabelNumber = (label) => label === "number";
var isLabelFamilyName = (label) => label === "family-name";
var isLabelWeight = (label) => label === "number" || label === "weight";
var isLabelShadow = (label) => label === "shadow";
var getDefaultConfig = () => {
  const themeColor = fromTheme("color");
  const themeFont = fromTheme("font");
  const themeText = fromTheme("text");
  const themeFontWeight = fromTheme("font-weight");
  const themeTracking = fromTheme("tracking");
  const themeLeading = fromTheme("leading");
  const themeBreakpoint = fromTheme("breakpoint");
  const themeContainer = fromTheme("container");
  const themeSpacing = fromTheme("spacing");
  const themeRadius = fromTheme("radius");
  const themeShadow = fromTheme("shadow");
  const themeInsetShadow = fromTheme("inset-shadow");
  const themeTextShadow = fromTheme("text-shadow");
  const themeDropShadow = fromTheme("drop-shadow");
  const themeBlur = fromTheme("blur");
  const themePerspective = fromTheme("perspective");
  const themeAspect = fromTheme("aspect");
  const themeEase = fromTheme("ease");
  const themeAnimate = fromTheme("animate");
  const scaleBreak = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const scalePosition = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ];
  const scalePositionWithArbitrary = () => [...scalePosition(), isArbitraryVariable, isArbitraryValue];
  const scaleOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const scaleOverscroll = () => ["auto", "contain", "none"];
  const scaleUnambiguousSpacing = () => [isArbitraryVariable, isArbitraryValue, themeSpacing];
  const scaleInset = () => [isFraction, "full", "auto", ...scaleUnambiguousSpacing()];
  const scaleGridTemplateColsRows = () => [isInteger, "none", "subgrid", isArbitraryVariable, isArbitraryValue];
  const scaleGridColRowStartAndEnd = () => ["auto", {
    span: ["full", isInteger, isArbitraryVariable, isArbitraryValue]
  }, isInteger, isArbitraryVariable, isArbitraryValue];
  const scaleGridColRowStartOrEnd = () => [isInteger, "auto", isArbitraryVariable, isArbitraryValue];
  const scaleGridAutoColsRows = () => ["auto", "min", "max", "fr", isArbitraryVariable, isArbitraryValue];
  const scaleAlignPrimaryAxis = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"];
  const scaleAlignSecondaryAxis = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"];
  const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
  const scaleSizing = () => [isFraction, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...scaleUnambiguousSpacing()];
  const scaleColor = () => [themeColor, isArbitraryVariable, isArbitraryValue];
  const scaleBgPosition = () => [...scalePosition(), isArbitraryVariablePosition, isArbitraryPosition, {
    position: [isArbitraryVariable, isArbitraryValue]
  }];
  const scaleBgRepeat = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }];
  const scaleBgSize = () => ["auto", "cover", "contain", isArbitraryVariableSize, isArbitrarySize, {
    size: [isArbitraryVariable, isArbitraryValue]
  }];
  const scaleGradientStopPosition = () => [isPercent, isArbitraryVariableLength, isArbitraryLength];
  const scaleRadius = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    themeRadius,
    isArbitraryVariable,
    isArbitraryValue
  ];
  const scaleBorderWidth = () => ["", isNumber, isArbitraryVariableLength, isArbitraryLength];
  const scaleLineStyle = () => ["solid", "dashed", "dotted", "double"];
  const scaleBlendMode = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
  const scaleMaskImagePosition = () => [isNumber, isPercent, isArbitraryVariablePosition, isArbitraryPosition];
  const scaleBlur = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    themeBlur,
    isArbitraryVariable,
    isArbitraryValue
  ];
  const scaleRotate = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleScale = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleSkew = () => [isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleTranslate = () => [isFraction, "full", ...scaleUnambiguousSpacing()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [isTshirtSize],
      breakpoint: [isTshirtSize],
      color: [isAny],
      container: [isTshirtSize],
      "drop-shadow": [isTshirtSize],
      ease: ["in", "out", "in-out"],
      font: [isAnyNonArbitrary],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [isTshirtSize],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [isTshirtSize],
      shadow: [isTshirtSize],
      spacing: ["px", isNumber],
      text: [isTshirtSize],
      "text-shadow": [isTshirtSize],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", isFraction, isArbitraryValue, isArbitraryVariable, themeAspect]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isNumber, isArbitraryValue, isArbitraryVariable, themeContainer]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": scaleBreak()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": scaleBreak()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: scalePositionWithArbitrary()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: scaleOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": scaleOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": scaleOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: scaleOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": scaleOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": scaleOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: scaleInset()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": scaleInset()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": scaleInset()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: scaleInset()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: scaleInset()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: scaleInset()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: scaleInset()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: scaleInset()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: scaleInset()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [isInteger, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [isFraction, "full", "auto", themeContainer, ...scaleUnambiguousSpacing()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [isNumber, isFraction, "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [isInteger, "first", "last", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": scaleGridAutoColsRows()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": scaleGridAutoColsRows()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: scaleUnambiguousSpacing()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": scaleUnambiguousSpacing()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": scaleUnambiguousSpacing()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...scaleAlignPrimaryAxis(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...scaleAlignSecondaryAxis(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...scaleAlignPrimaryAxis()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": scaleAlignPrimaryAxis()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...scaleAlignSecondaryAxis(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: scaleUnambiguousSpacing()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: scaleUnambiguousSpacing()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: scaleUnambiguousSpacing()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: scaleMargin()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: scaleMargin()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: scaleMargin()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: scaleMargin()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: scaleMargin()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: scaleMargin()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: scaleMargin()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: scaleMargin()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: scaleMargin()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: scaleSizing()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [themeContainer, "screen", ...scaleSizing()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          themeContainer,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...scaleSizing()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          themeContainer,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [themeBreakpoint]
          },
          ...scaleSizing()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...scaleSizing()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...scaleSizing()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...scaleSizing()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", themeText, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [themeFontWeight, isArbitraryVariableWeight, isArbitraryWeight]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", isPercent, isArbitraryValue]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isArbitraryVariableFamilyName, isArbitraryFamilyName, themeFont]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [themeTracking, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [isNumber, "none", isArbitraryVariable, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          themeLeading,
          ...scaleUnambiguousSpacing()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: scaleColor()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: scaleColor()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...scaleLineStyle(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [isNumber, "from-font", "auto", isArbitraryVariable, isArbitraryLength]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: scaleColor()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [isNumber, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: scaleUnambiguousSpacing()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryVariable, isArbitraryValue]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: scaleBgPosition()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: scaleBgRepeat()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: scaleBgSize()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, isInteger, isArbitraryVariable, isArbitraryValue],
          radial: ["", isArbitraryVariable, isArbitraryValue],
          conic: [isInteger, isArbitraryVariable, isArbitraryValue]
        }, isArbitraryVariableImage, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: scaleColor()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: scaleColor()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: scaleColor()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: scaleColor()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: scaleRadius()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": scaleRadius()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": scaleRadius()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": scaleRadius()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": scaleRadius()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": scaleRadius()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": scaleRadius()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": scaleRadius()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": scaleRadius()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": scaleRadius()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": scaleRadius()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": scaleRadius()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": scaleRadius()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": scaleRadius()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": scaleRadius()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: scaleBorderWidth()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": scaleBorderWidth()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": scaleBorderWidth()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": scaleBorderWidth()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": scaleBorderWidth()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": scaleBorderWidth()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": scaleBorderWidth()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": scaleBorderWidth()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": scaleBorderWidth()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": scaleBorderWidth()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": scaleBorderWidth()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: scaleColor()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": scaleColor()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": scaleColor()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": scaleColor()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": scaleColor()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": scaleColor()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": scaleColor()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": scaleColor()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": scaleColor()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: scaleColor()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...scaleLineStyle(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", isNumber, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: scaleColor()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: scaleColor()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", themeInsetShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": scaleColor()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: scaleBorderWidth()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: scaleColor()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [isNumber, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": scaleColor()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": scaleBorderWidth()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": scaleColor()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", themeTextShadow, isArbitraryVariableShadow, isArbitraryShadow]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": scaleColor()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...scaleBlendMode(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": scaleBlendMode()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [isNumber]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": scaleMaskImagePosition()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": scaleMaskImagePosition()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": scaleColor()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": scaleColor()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": scaleMaskImagePosition()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": scaleMaskImagePosition()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": scaleColor()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": scaleColor()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": scaleMaskImagePosition()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": scaleMaskImagePosition()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": scaleColor()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": scaleColor()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": scaleMaskImagePosition()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": scaleMaskImagePosition()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": scaleColor()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": scaleColor()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": scaleMaskImagePosition()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": scaleMaskImagePosition()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": scaleColor()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": scaleColor()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": scaleMaskImagePosition()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": scaleMaskImagePosition()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": scaleColor()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": scaleColor()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": scaleMaskImagePosition()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": scaleMaskImagePosition()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": scaleColor()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": scaleColor()
      }],
      "mask-image-radial": [{
        "mask-radial": [isArbitraryVariable, isArbitraryValue]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": scaleMaskImagePosition()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": scaleMaskImagePosition()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": scaleColor()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": scaleColor()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": scalePosition()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [isNumber]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": scaleMaskImagePosition()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": scaleMaskImagePosition()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": scaleColor()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": scaleColor()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: scaleBgPosition()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: scaleBgRepeat()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: scaleBgSize()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", isArbitraryVariable, isArbitraryValue]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: scaleBlur()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeDropShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": scaleColor()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": scaleBlur()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": scaleUnambiguousSpacing()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [isNumber, "initial", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", themeEase, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", themeAnimate, isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [themePerspective, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": scalePositionWithArbitrary()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: scaleRotate()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": scaleRotate()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": scaleRotate()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": scaleRotate()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: scaleScale()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": scaleScale()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": scaleScale()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": scaleScale()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: scaleSkew()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": scaleSkew()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": scaleSkew()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [isArbitraryVariable, isArbitraryValue, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: scalePositionWithArbitrary()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: scaleTranslate()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": scaleTranslate()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": scaleTranslate()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": scaleTranslate()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: scaleColor()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: scaleColor()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryVariable, isArbitraryValue]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...scaleColor()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isNumber, isArbitraryVariableLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...scaleColor()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
};
var twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);

// src/utils/cn.ts
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/FlipDishChat.tsx
var import_react_markdown = __toESM(require("react-markdown"));
var import_remark_gfm = __toESM(require("remark-gfm"));
var import_react_hcaptcha = __toESM(require("@hcaptcha/react-hcaptcha"));

// src/components/ui/card.tsx
var React2 = __toESM(require("react"));
var import_jsx_runtime2 = require("react/jsx-runtime");
var Card = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
var CardHeader = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
var CardTitle = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
var CardDescription = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
var CardContent = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
var CardFooter = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

// src/components/ui/button.tsx
var React5 = __toESM(require("react"));

// node_modules/@radix-ui/react-slot/dist/index.mjs
var React4 = __toESM(require("react"), 1);

// node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React3 = __toESM(require("react"), 1);
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}

// node_modules/@radix-ui/react-slot/dist/index.mjs
var import_jsx_runtime3 = require("react/jsx-runtime");
var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
var use = React4[" use ".trim().toString()];
function isPromiseLike(value) {
  return typeof value === "object" && value !== null && "then" in value;
}
function isLazyComponent(element) {
  return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
  const Slot2 = React4.forwardRef((props, forwardedRef) => {
    let { children, ...slotProps } = props;
    if (isLazyComponent(children) && typeof use === "function") {
      children = use(children._payload);
    }
    const childrenArray = React4.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map((child) => {
        if (child === slottable) {
          if (React4.Children.count(newElement) > 1) return React4.Children.only(null);
          return React4.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: React4.isValidElement(newElement) ? React4.cloneElement(newElement, void 0, newChildren) : null });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
  const SlotClone = React4.forwardRef((props, forwardedRef) => {
    let { children, ...slotProps } = props;
    if (isLazyComponent(children) && typeof use === "function") {
      children = use(children._payload);
    }
    if (React4.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== React4.Fragment) {
        props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
      }
      return React4.cloneElement(children, props2);
    }
    return React4.Children.count(children) > 1 ? React4.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = /* @__PURE__ */ Symbol("radix.slottable");
function isSlottable(child) {
  return React4.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/class-variance-authority/dist/index.mjs
var falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
var cx = clsx;
var cva = (base, config) => (props) => {
  var _config_compoundVariants;
  if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  const { variants, defaultVariants } = config;
  const getVariantClassNames = Object.keys(variants).map((variant) => {
    const variantProp = props === null || props === void 0 ? void 0 : props[variant];
    const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
    if (variantProp === null) return null;
    const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
    return variants[variant][variantKey];
  });
  const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
    let [key, value] = param;
    if (value === void 0) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
  const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
    let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
    return Object.entries(compoundVariantOptions).every((param2) => {
      let [key, value] = param2;
      return Array.isArray(value) ? value.includes({
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key]) : {
        ...defaultVariants,
        ...propsWithoutUndefined
      }[key] === value;
    }) ? [
      ...acc,
      cvClass,
      cvClassName
    ] : acc;
  }, []);
  return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};

// src/components/ui/button.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React5.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/components/ui/input.tsx
var React6 = __toESM(require("react"));
var import_jsx_runtime5 = require("react/jsx-runtime");
var Input = React6.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/ui/avatar.tsx
var React12 = __toESM(require("react"));

// node_modules/@radix-ui/react-avatar/dist/index.mjs
var React11 = __toESM(require("react"), 1);

// node_modules/@radix-ui/react-context/dist/index.mjs
var React7 = __toESM(require("react"), 1);
var import_jsx_runtime6 = require("react/jsx-runtime");
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React7.createContext(defaultContext);
    BaseContext.displayName = rootComponentName + "Context";
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React7.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext22(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React7.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext22];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React7.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React7.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React7.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var React8 = __toESM(require("react"), 1);
function useCallbackRef(callback) {
  const callbackRef = React8.useRef(callback);
  React8.useEffect(() => {
    callbackRef.current = callback;
  });
  return React8.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}

// node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var React9 = __toESM(require("react"), 1);
var useLayoutEffect2 = globalThis?.document ? React9.useLayoutEffect : () => {
};

// node_modules/@radix-ui/react-primitive/dist/index.mjs
var React10 = __toESM(require("react"), 1);
var ReactDOM = __toESM(require("react-dom"), 1);
var import_jsx_runtime7 = require("react/jsx-runtime");
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot2 = createSlot(`Primitive.${node}`);
  const Node = React10.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot2 : node;
    if (typeof window !== "undefined") {
      window[/* @__PURE__ */ Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-use-is-hydrated/dist/index.mjs
var import_shim = require("use-sync-external-store/shim");
function useIsHydrated() {
  return (0, import_shim.useSyncExternalStore)(
    subscribe,
    () => true,
    () => false
  );
}
function subscribe() {
  return () => {
  };
}

// node_modules/@radix-ui/react-avatar/dist/index.mjs
var import_jsx_runtime8 = require("react/jsx-runtime");
var AVATAR_NAME = "Avatar";
var [createAvatarContext, createAvatarScope] = createContextScope(AVATAR_NAME);
var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
var Avatar = React11.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAvatar, ...avatarProps } = props;
    const [imageLoadingStatus, setImageLoadingStatus] = React11.useState("idle");
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      AvatarProvider,
      {
        scope: __scopeAvatar,
        imageLoadingStatus,
        onImageLoadingStatusChange: setImageLoadingStatus,
        children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Primitive.span, { ...avatarProps, ref: forwardedRef })
      }
    );
  }
);
Avatar.displayName = AVATAR_NAME;
var IMAGE_NAME = "AvatarImage";
var AvatarImage = React11.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAvatar, src, onLoadingStatusChange = () => {
    }, ...imageProps } = props;
    const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);
    const imageLoadingStatus = useImageLoadingStatus(src, imageProps);
    const handleLoadingStatusChange = useCallbackRef((status) => {
      onLoadingStatusChange(status);
      context.onImageLoadingStatusChange(status);
    });
    useLayoutEffect2(() => {
      if (imageLoadingStatus !== "idle") {
        handleLoadingStatusChange(imageLoadingStatus);
      }
    }, [imageLoadingStatus, handleLoadingStatusChange]);
    return imageLoadingStatus === "loaded" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Primitive.img, { ...imageProps, ref: forwardedRef, src }) : null;
  }
);
AvatarImage.displayName = IMAGE_NAME;
var FALLBACK_NAME = "AvatarFallback";
var AvatarFallback = React11.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAvatar, delayMs, ...fallbackProps } = props;
    const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);
    const [canRender, setCanRender] = React11.useState(delayMs === void 0);
    React11.useEffect(() => {
      if (delayMs !== void 0) {
        const timerId = window.setTimeout(() => setCanRender(true), delayMs);
        return () => window.clearTimeout(timerId);
      }
    }, [delayMs]);
    return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Primitive.span, { ...fallbackProps, ref: forwardedRef }) : null;
  }
);
AvatarFallback.displayName = FALLBACK_NAME;
function resolveLoadingStatus(image, src) {
  if (!image) {
    return "idle";
  }
  if (!src) {
    return "error";
  }
  if (image.src !== src) {
    image.src = src;
  }
  return image.complete && image.naturalWidth > 0 ? "loaded" : "loading";
}
function useImageLoadingStatus(src, { referrerPolicy, crossOrigin }) {
  const isHydrated = useIsHydrated();
  const imageRef = React11.useRef(null);
  const image = (() => {
    if (!isHydrated) return null;
    if (!imageRef.current) {
      imageRef.current = new window.Image();
    }
    return imageRef.current;
  })();
  const [loadingStatus, setLoadingStatus] = React11.useState(
    () => resolveLoadingStatus(image, src)
  );
  useLayoutEffect2(() => {
    setLoadingStatus(resolveLoadingStatus(image, src));
  }, [image, src]);
  useLayoutEffect2(() => {
    const updateStatus = (status) => () => {
      setLoadingStatus(status);
    };
    if (!image) return;
    const handleLoad = updateStatus("loaded");
    const handleError = updateStatus("error");
    image.addEventListener("load", handleLoad);
    image.addEventListener("error", handleError);
    if (referrerPolicy) {
      image.referrerPolicy = referrerPolicy;
    }
    if (typeof crossOrigin === "string") {
      image.crossOrigin = crossOrigin;
    }
    return () => {
      image.removeEventListener("load", handleLoad);
      image.removeEventListener("error", handleError);
    };
  }, [image, crossOrigin, referrerPolicy]);
  return loadingStatus;
}
var Root = Avatar;
var Image = AvatarImage;
var Fallback = AvatarFallback;

// src/components/ui/avatar.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var Avatar2 = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
  Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  }
));
Avatar2.displayName = Root.displayName;
var AvatarImage2 = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
  Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage2.displayName = Image.displayName;
var AvatarFallback2 = React12.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
  Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback2.displayName = Fallback.displayName;

// src/components/MenuItemCard.tsx
var import_react3 = require("react");
var import_lucide_react4 = require("lucide-react");

// src/components/ui/carousel.tsx
var React13 = __toESM(require("react"));
var import_embla_carousel_react = __toESM(require("embla-carousel-react"));
var import_lucide_react = require("lucide-react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var CarouselContext = React13.createContext(null);
function useCarousel() {
  const context = React13.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
var Carousel = React13.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = (0, import_embla_carousel_react.default)(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React13.useState(false);
    const [canScrollNext, setCanScrollNext] = React13.useState(false);
    const onSelect = React13.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React13.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = React13.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = React13.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React13.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React13.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api.off("reInit", onSelect);
        api.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "div",
          {
            ref,
            onKeyDown: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
var CarouselContent = React13.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = React13.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = React13.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react.ArrowLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = React13.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react.ArrowRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";

// src/components/MenuItemOptionModal.tsx
var import_react2 = require("react");

// src/components/ui/dialog.tsx
var React14 = __toESM(require("react"));
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var Dialog = DialogPrimitive.Root;
var DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React14.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(DialogPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(DialogOverlay, {}),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react2.X, { className: "h-4 w-4" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// src/components/MenuItemOptionModal.tsx
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime12 = require("react/jsx-runtime");
function MenuItemOptionModal({ isOpen, onClose, item }) {
  const { updateBasket } = useFlipDish();
  const optionSets = item.optionSets || [];
  const [currentSetIndex, setCurrentSetIndex] = (0, import_react2.useState)(0);
  const [selections, setSelections] = (0, import_react2.useState)([]);
  const [isAdding, setIsAdding] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    if (isOpen) {
      console.log("[OptionModal] Opening for item:", item.name, "optionSets:", optionSets);
      setCurrentSetIndex(0);
      setSelections([]);
      setIsAdding(false);
    }
  }, [isOpen, item]);
  const currentSet = optionSets[currentSetIndex];
  if (!currentSet) {
    console.log("[OptionModal] No current set at index:", currentSetIndex, "total sets:", optionSets.length);
    return null;
  }
  const handleOptionSelect = (option) => {
    console.log("[OptionModal] Selected option:", option.name, "for set:", currentSet.optionSetId);
    const existingSelectionIndex = selections.findIndex((s) => s.optionSetId === currentSet.optionSetId);
    const newSelection = {
      optionSetId: currentSet.optionSetId,
      selectedOptions: [option.name]
      // Single select for now
    };
    let newSelections = [...selections];
    if (existingSelectionIndex >= 0) {
      newSelections[existingSelectionIndex] = newSelection;
    } else {
      newSelections.push(newSelection);
    }
    setSelections(newSelections);
    if (currentSetIndex < optionSets.length - 1) {
      setCurrentSetIndex(currentSetIndex + 1);
    } else {
      submitOrder(newSelections);
    }
  };
  const handleSkip = () => {
    console.log("[OptionModal] Skipping set:", currentSet.optionSetId);
    if (currentSetIndex < optionSets.length - 1) {
      setCurrentSetIndex(currentSetIndex + 1);
    } else {
      submitOrder(selections);
    }
  };
  const handleBack = () => {
    if (currentSetIndex > 0) {
      setCurrentSetIndex(currentSetIndex - 1);
    }
  };
  const submitOrder = async (finalSelections) => {
    console.log("[OptionModal] Submitting with selections:", finalSelections);
    setIsAdding(true);
    try {
      const optionSelections = finalSelections.map((s) => ({
        optionSetId: s.optionSetId,
        selectedOptions: s.selectedOptions
      }));
      console.log("[OptionModal] Calling updateBasket with optionSelections:", optionSelections);
      await updateBasket({
        type: "add",
        menuItemId: item.menuItemId,
        quantity: 1,
        optionSelections
      });
      onClose();
    } catch (error) {
      console.error("[OptionModal] Failed to add item with options:", error);
    } finally {
      setIsAdding(false);
    }
  };
  const isOptional = !currentSet.required || currentSet.min === 0;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Dialog, { open: isOpen, onOpenChange: (open) => !open && onClose(), children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(DialogContent, { className: "sm:max-w-[425px]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(DialogHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogTitle, { children: item.name }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(DialogDescription, { children: [
        currentSet.optionSetId,
        currentSet.required && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-destructive ml-1", children: "*" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "grid gap-4 py-4 max-h-[60vh] overflow-y-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "text-sm text-muted-foreground", children: [
        currentSet.required ? "Required - " : "Optional - ",
        "Select ",
        currentSet.min === currentSet.max ? currentSet.min : `${currentSet.min}-${currentSet.max}`
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "grid gap-2", children: currentSet.options.map((option, idx) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
        Button,
        {
          variant: "outline",
          className: "justify-between h-auto py-3 px-4",
          onClick: () => handleOptionSelect(option),
          disabled: isAdding,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: option.name }),
            option.price && option.price > 0 && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("span", { className: "text-muted-foreground", children: [
              "+",
              option.price.toFixed(2)
            ] })
          ]
        },
        `${currentSet.optionSetId}-${option.name}-${idx}`
      )) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(DialogFooter, { className: "flex flex-row justify-between sm:justify-between w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "flex-1", children: currentSetIndex > 0 && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(Button, { variant: "ghost", onClick: handleBack, disabled: isAdding, className: "gap-1 pl-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react3.ArrowLeft, { className: "w-4 h-4" }),
        "Back"
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "flex-1 flex justify-end", children: isOptional && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Button, { variant: "secondary", onClick: handleSkip, disabled: isAdding, children: currentSetIndex < optionSets.length - 1 ? "Skip" : "Add Without" }) })
    ] })
  ] }) });
}

// src/components/MenuItemCard.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function MenuItemCard({ item, compact = false }) {
  const { updateBasket } = useFlipDish();
  const [isLoading, setIsLoading] = (0, import_react3.useState)(false);
  const [isAdded, setIsAdded] = (0, import_react3.useState)(false);
  const [isModalOpen, setIsModalOpen] = (0, import_react3.useState)(false);
  const handleAdd = async () => {
    if (item.optionSets && item.optionSets.length > 0) {
      setIsModalOpen(true);
      return;
    }
    setIsLoading(true);
    try {
      await updateBasket({
        type: "add",
        menuItemId: item.menuItemId,
        quantity: 1
      });
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2e3);
    } catch (err) {
      console.error("Failed to add item", err);
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Card, { className: "w-full bg-card border shadow-sm hover:shadow-md transition-all h-full flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "aspect-[4/3] relative overflow-hidden bg-muted rounded-t-lg", children: item.imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "img",
        {
          src: item.imageUrl,
          alt: item.name,
          className: "w-full h-full object-cover transition-transform hover:scale-105"
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "w-full h-full flex items-center justify-center text-muted-foreground bg-primary/5", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-3xl font-bold opacity-30", children: item.name.charAt(0).toUpperCase() }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(CardContent, { className: "p-3 space-y-1 flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CardTitle, { className: "text-sm font-semibold truncate", title: item.name, children: item.name }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-sm font-medium text-primary", children: item.price.toFixed(2) }),
          item.menuSectionName && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-[10px] text-muted-foreground uppercase truncate max-w-[80px]", children: item.menuSectionName })
        ] }),
        item.description && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-xs text-muted-foreground line-clamp-2 min-h-[2.5em]", children: item.description })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CardFooter, { className: "p-3 pt-0 mt-auto", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        Button,
        {
          size: "sm",
          className: "w-full h-8 text-xs gap-1.5",
          variant: isAdded ? "outline" : "default",
          onClick: handleAdd,
          disabled: isLoading,
          children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react4.Loader2, { className: "w-3 h-3 animate-spin" }) : isAdded ? /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react4.Check, { className: "w-3 h-3" }),
            "Added"
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react4.Plus, { className: "w-3 h-3" }),
            item.optionSets && item.optionSets.length > 0 ? "Customize" : "Add"
          ] })
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      MenuItemOptionModal,
      {
        isOpen: isModalOpen,
        onClose: () => setIsModalOpen(false),
        item
      }
    )
  ] });
}
function MenuItemCarousel({ items }) {
  if (!items || items.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    Carousel,
    {
      opts: {
        align: "start",
        dragFree: true
      },
      className: "w-full max-w-[95%]",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CarouselContent, { className: "-ml-2 md:-ml-4", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CarouselItem, { className: "pl-2 md:pl-4 basis-[55%] sm:basis-[45%] md:basis-[40%]", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(MenuItemCard, { item }) }, item.menuItemId)) }),
        items.length > 2 && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CarouselPrevious, { className: "hidden sm:flex -left-4 w-8 h-8" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CarouselNext, { className: "hidden sm:flex -right-4 w-8 h-8" })
        ] })
      ]
    }
  );
}

// src/components/FlipDishChat.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var HCAPTCHA_SITE_KEY = "2c7e95e0-4170-40d2-adee-3a925b66f284";
function AuthModal({ isOpen, onClose, onSuccess }) {
  const { initiateOTP, verifyOTP } = useFlipDish();
  const [phone, setPhone] = (0, import_react4.useState)("");
  const [code, setCode] = (0, import_react4.useState)("");
  const [step, setStep] = (0, import_react4.useState)("phone");
  const [loading, setLoading] = (0, import_react4.useState)(false);
  const [error, setError] = (0, import_react4.useState)("");
  const captchaRef = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    if (code.length === 4 && !loading) {
      handleVerify();
    }
  }, [code]);
  if (!isOpen) return null;
  const handleSendCode = async () => {
    setLoading(true);
    setError("");
    try {
      let captchaToken;
      if (captchaRef.current) {
        const res = await captchaRef.current.execute({ async: true });
        captchaToken = res?.response;
      }
      const result = await initiateOTP(phone, captchaToken);
      if (result.success) {
        setStep("code");
      } else {
        setError(result.error || "Failed to send code");
      }
    } catch (err) {
      setError(err.message || "Captcha verification failed");
    } finally {
      setLoading(false);
      captchaRef.current?.resetCaptcha();
    }
  };
  const handleVerify = async () => {
    if (code.length !== 4) return;
    setLoading(true);
    setError("");
    const result = await verifyOTP(phone, code);
    setLoading(false);
    if (result.success) {
      if (onSuccess) onSuccess();
      onClose();
    } else {
      setError(result.error || "Invalid code");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Card, { className: "w-full max-w-sm shadow-lg animate-in fade-in zoom-in-95 duration-200", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CardTitle, { className: "text-xl", children: "Sign In" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Button, { variant: "ghost", size: "icon", onClick: onClose, className: "h-8 w-8 p-0", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.X, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CardContent, { className: "pt-4", children: step === "phone" ? /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-sm text-muted-foreground", children: "Enter your phone number to receive a verification code" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          Input,
          {
            type: "tel",
            value: phone,
            onChange: (e) => setPhone(e.target.value),
            placeholder: "+353 89 123 4567"
          }
        ),
        error && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-destructive text-xs", children: error })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Button, { variant: "outline", className: "flex-1", onClick: onClose, children: "Cancel" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Button, { className: "flex-1", onClick: handleSendCode, disabled: loading || !phone, children: [
          loading ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.Loader2, { className: "w-4 h-4 animate-spin mr-2" }) : null,
          "Send Code"
        ] })
      ] })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Button, { variant: "link", className: "px-0 h-auto text-muted-foreground", onClick: () => setStep("phone"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.ChevronLeft, { className: "w-4 h-4 mr-1" }),
        "Back"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("p", { className: "text-sm text-muted-foreground", children: [
        "Enter the 4-digit code sent to ",
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "font-medium text-foreground", children: phone })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          Input,
          {
            type: "text",
            value: code,
            onChange: (e) => setCode(e.target.value),
            placeholder: "0000",
            className: "text-center text-2xl tracking-[0.5em] font-mono",
            maxLength: 4,
            disabled: loading
          }
        ),
        error && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-destructive text-xs", children: error }),
        loading && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex items-center justify-center gap-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.Loader2, { className: "w-4 h-4 animate-spin" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: "Verifying..." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_hcaptcha.default, { ref: captchaRef, sitekey: HCAPTCHA_SITE_KEY, size: "invisible" })
  ] }) });
}
function BasketPanel({ isOpen, onClose, onSignInNeeded }) {
  const { basketItems, basketTotal, isAuthenticated, defaultPaymentAccount, placeOrder, addMessage, updateBasket, menuItems, addMenuItems, sessionId } = useFlipDish();
  const [isPlacingOrder, setIsPlacingOrder] = import_react4.default.useState(false);
  const [updatingItemId, setUpdatingItemId] = import_react4.default.useState(null);
  const [error, setError] = import_react4.default.useState(null);
  const getOptionSelections = (item, explicitMenuItem) => {
    if (!item.menuItemOptionSetItems || item.menuItemOptionSetItems.length === 0) return void 0;
    const menuItem = explicitMenuItem || menuItems.find((m) => m.menuItemId === item.menuItemId);
    if (!menuItem || !menuItem.optionSets) return void 0;
    const selections = [];
    if (menuItem.optionSets) {
      menuItem.optionSets.forEach((optionSet) => {
        const selectedOptionsInSet = [];
        optionSet.options.forEach((option) => {
          const found = item.menuItemOptionSetItems?.find(
            (i) => i.name === option.name
          );
          if (found) {
            selectedOptionsInSet.push(option.name);
          }
        });
        if (selectedOptionsInSet.length > 0) {
          selections.push({
            optionSetId: optionSet.optionSetId,
            selectedOptions: selectedOptionsInSet
          });
        }
      });
    }
    return selections.length > 0 ? selections : void 0;
  };
  const handleUpdateQuantity = async (item, delta, idx) => {
    console.log(`\u{1F518} Update Quantity Clicked:`, { item, delta, idx });
    setUpdatingItemId(idx);
    try {
      let menuItem = void 0;
      if (item.menuItemOptionSetItems && item.menuItemOptionSetItems.length > 0) {
        menuItem = menuItems.find((m) => m.menuItemId === item.menuItemId);
        if (!menuItem && sessionId) {
          console.log(`\u26A0\uFE0F Item ${item.menuItemId} missing definition. Attempting lazy fetch...`);
          try {
            const results = await flipdishApi.searchMenu(sessionId, item.name);
            const found = results.find((m) => m.menuItemId === item.menuItemId);
            if (found) {
              console.log(`\u2705 Lazy fetch successful for ${item.name}`);
              addMenuItems([found]);
              menuItem = found;
            } else {
              console.warn(`\u274C Lazy fetch returned results but ID mismatch or not found.`);
            }
          } catch (err) {
            console.error("Lazy fetch failed:", err);
          }
        }
        if (!menuItem) {
          alert("System Error: Menu item definition missing. Cannot update options. Please reload or contact support.");
          throw new Error(`Menu item definition not found for ID ${item.menuItemId}`);
        }
      } else {
      }
      const optionSelections = getOptionSelections(item, menuItem);
      await updateBasket({
        type: delta > 0 ? "add" : "remove",
        menuItemId: item.menuItemId,
        quantity: Math.abs(delta),
        optionSelections
      });
    } catch (e) {
      console.error("Failed to update quantity", e);
      if (e instanceof Error && !e.message.includes("Menu item definition")) {
      }
    } finally {
      setUpdatingItemId(null);
    }
  };
  const buildConfirmationMessage = (leadTimePrompt, orderId) => {
    let message = "Thanks! Your order has been placed.";
    if (leadTimePrompt) {
      const trimmed = leadTimePrompt.replace(/^Tell the user:\s*/i, "").trim();
      message = trimmed.replace(/^"+|"+$/g, "") || message;
    }
    if (orderId) {
      message += `
Order ID: ${orderId}`;
    }
    return message;
  };
  const handleCheckout = async () => {
    setError(null);
    if (!isAuthenticated) {
      onClose();
      onSignInNeeded();
      return;
    }
    setIsPlacingOrder(true);
    console.log("\u{1F6D2} Placing order...");
    const result = await placeOrder(defaultPaymentAccount?.PaymentAccountId);
    setIsPlacingOrder(false);
    if (result.success) {
      addMessage({
        role: "assistant",
        content: buildConfirmationMessage(result.leadTimePrompt, result.orderId)
      });
      onClose();
    } else {
      setError(result.error || "Failed to place order");
    }
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "absolute inset-0 bg-background/80 backdrop-blur-sm flex items-end justify-center z-50", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Card, { className: "w-full max-h-[85%] flex flex-col rounded-b-none border-b-0 shadow-xl animate-in slide-in-from-bottom duration-300", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 border-b", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CardTitle, { children: "Your Basket" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Button, { variant: "ghost", size: "icon", onClick: onClose, className: "h-8 w-8 p-0", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.X, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "flex-1 overflow-y-auto p-4", children: basketItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "text-center py-12 space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "bg-muted w-16 h-16 rounded-full flex items-center justify-center mx-auto", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.ShoppingCart, { className: "w-8 h-8 text-muted-foreground" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-muted-foreground", children: "Your basket is empty" })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "space-y-4", children: basketItems.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "flex justify-between items-start pb-4 border-b last:border-0 last:pb-0", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "font-medium text-sm", children: item.name }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "font-semibold text-sm text-right", children: item.totalPrice.toFixed(2) })
      ] }),
      item.menuItemOptionSetItems && item.menuItemOptionSetItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-xs text-muted-foreground mt-1", children: item.menuItemOptionSetItems.map((opt) => opt.name).join(", ") }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "flex items-center gap-3 mt-3", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex items-center border rounded-md shadow-sm bg-background", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "button",
          {
            className: "p-1 px-2 hover:bg-muted text-muted-foreground transition-colors disabled:opacity-50",
            onClick: () => handleUpdateQuantity(item, -1, idx),
            disabled: updatingItemId === idx,
            children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.Minus, { className: "w-3 h-3" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "text-xs font-medium w-6 text-center", children: updatingItemId === idx ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.Loader2, { className: "w-3 h-3 animate-spin mx-auto" }) : item.quantity }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "button",
          {
            className: "p-1 px-2 hover:bg-muted text-muted-foreground transition-colors disabled:opacity-50",
            onClick: () => handleUpdateQuantity(item, 1, idx),
            disabled: updatingItemId === idx,
            children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.Plus, { className: "w-3 h-3" })
          }
        )
      ] }) })
    ] }) }, idx)) }) }),
    basketItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "p-4 border-t bg-muted/20", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex justify-between items-center mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "text-muted-foreground", children: "Total" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "text-xl font-bold", children: basketTotal.toFixed(2) })
      ] }),
      isAuthenticated && defaultPaymentAccount && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("p", { className: "text-xs text-muted-foreground mb-4", children: [
        "Payment: ",
        defaultPaymentAccount.Description
      ] }),
      error && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-md", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-xs text-destructive font-medium", children: error }) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Button, { className: "w-full", onClick: handleCheckout, disabled: isPlacingOrder, children: isPlacingOrder ? /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.Loader2, { className: "w-4 h-4 animate-spin mr-2" }),
        "Processing..."
      ] }) : isAuthenticated ? "Buy Now" : "Log in to Checkout" })
    ] })
  ] }) });
}
function PaymentMethodPanel({ isOpen, onClose }) {
  const { paymentAccounts, defaultPaymentAccount, setPaymentMethod, logout } = useFlipDish();
  const handleLogout = () => {
    logout();
    onClose();
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Card, { className: "w-full max-w-sm shadow-lg animate-in fade-in zoom-in-95 duration-200", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CardTitle, { className: "text-xl", children: "Payment Methods" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Button, { variant: "ghost", size: "icon", onClick: onClose, className: "h-8 w-8 p-0", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.X, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(CardContent, { className: "pt-4 space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "space-y-2", children: paymentAccounts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-sm text-muted-foreground text-center py-4", children: "No payment methods found" }) : paymentAccounts.map((account) => {
        const isSelected = defaultPaymentAccount?.PaymentAccountId === account.PaymentAccountId;
        return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
          "div",
          {
            className: cn(
              "flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors",
              isSelected ? "bg-primary/5 border-primary" : "hover:bg-muted"
            ),
            onClick: () => setPaymentMethod(account.PaymentAccountId),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "bg-muted p-2 rounded-full", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.CreditCard, { className: "w-4 h-4 text-muted-foreground" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "flex flex-col", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "text-sm font-medium", children: account.Description }) })
              ] }),
              isSelected && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.Check, { className: "w-4 h-4 text-primary" })
            ]
          },
          account.PaymentAccountId
        );
      }) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Button, { variant: "destructive", className: "w-full", onClick: handleLogout, children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.LogOut, { className: "w-4 h-4 mr-2" }),
        "Log Out"
      ] })
    ] })
  ] }) });
}
function FlipDishChat() {
  const {
    messages,
    sendMessage,
    isLoading,
    isInitialized,
    isAuthenticated,
    isRestaurantOpen,
    restaurantStatus,
    basketItems,
    logout,
    phoneNumber,
    addMenuItems,
    isBasketOpen,
    setBasketOpen
  } = useFlipDish();
  const [input, setInput] = (0, import_react4.useState)("");
  const [showAuth, setShowAuth] = (0, import_react4.useState)(false);
  const [showProfile, setShowProfile] = (0, import_react4.useState)(false);
  const [returnToBasket, setReturnToBasket] = (0, import_react4.useState)(false);
  const scrollRef = (0, import_react4.useRef)(null);
  const inputRef = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    if (!isLoading) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isLoading]);
  (0, import_react4.useEffect)(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);
  (0, import_react4.useEffect)(() => {
    messages.forEach((msg) => {
      if (msg.role === "tool") {
        try {
          const content = JSON.parse(msg.content);
          if (content.displayType === "menu_cards" && content.items && Array.isArray(content.items)) {
            addMenuItems(content.items);
          }
        } catch {
        }
      }
    });
  }, [messages, addMenuItems]);
  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const message = input;
    setInput("");
    try {
      const response = await sendMessage(message);
      if (response.tokenExpired) {
        logout();
        window.location.reload();
        return;
      }
      if (response.authRequired) {
        setReturnToBasket(true);
        setShowAuth(true);
      }
      if (response.orderSubmitted && isBasketOpen) {
        setBasketOpen(false);
      }
    } catch (error) {
      console.error("Chat error:", error);
    }
  };
  const renderMessageContent = (msg) => {
    if (msg.role === "user") {
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "flex flex-col gap-1 items-end", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "bg-primary text-primary-foreground rounded-2xl rounded-br-sm px-5 py-3 text-sm shadow-sm", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "whitespace-pre-wrap leading-relaxed", children: msg.content }) }) });
    }
    if (msg.role === "tool") {
      try {
        const content = JSON.parse(msg.content);
        if (content.displayType === "menu_cards" && content.items?.length > 0) {
          return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "w-full pl-11 mb-2", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(MenuItemCarousel, { items: content.items }) });
        }
      } catch (e) {
        return null;
      }
      return null;
    }
    if (msg.role === "assistant") {
      if (!msg.content) return null;
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex gap-3 max-w-[85%] animate-in fade-in slide-in-from-bottom-2 duration-300", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Avatar2, { className: "h-8 w-8 mt-1 border shadow-sm bg-card", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(AvatarImage2, { src: "/placeholder-logo.png" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(AvatarFallback2, { className: "bg-background text-[10px] font-bold text-muted-foreground", children: "AI" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "flex flex-col gap-1", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "bg-card text-card-foreground border rounded-2xl rounded-bl-sm px-5 py-3 text-sm shadow-sm overflow-hidden prose prose-sm dark:prose-invert max-w-none leading-relaxed break-words [&>p]:mb-2 [&>p:last-child]:mb-0 [&>ul]:list-disc [&>ul]:pl-4 [&>ol]:list-decimal [&>ol]:pl-4", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          import_react_markdown.default,
          {
            remarkPlugins: [import_remark_gfm.default],
            components: {
              // Use defaults but ensure links open in new tab
              a: (props) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("a", { target: "_blank", rel: "noopener noreferrer", className: "text-primary underline underline-offset-2 hover:text-primary/80", ...props })
            },
            children: msg.content
          }
        ) }) })
      ] });
    }
    return null;
  };
  const visibleMessages = messages.filter((m) => {
    if (m.role === "system") return false;
    if (m.role === "tool") {
      try {
        const content = JSON.parse(m.content);
        return content.displayType === "menu_cards";
      } catch {
        return false;
      }
    }
    return true;
  });
  if (!isInitialized) {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex flex-col h-full bg-background items-center justify-center space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.Loader2, { className: "w-8 h-8 animate-spin text-primary" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-sm text-muted-foreground font-medium", children: "Connecting..." })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Card, { className: "flex flex-col h-full rounded-xl border shadow-lg overflow-hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(CardHeader, { className: "flex flex-row items-center justify-between p-4 border-b space-y-0 text-left bg-card/50", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Avatar2, { className: "h-10 w-10 border-2 border-background shadow-sm", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(AvatarImage2, { src: "/placeholder-logo.png" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(AvatarFallback2, { className: "bg-primary text-primary-foreground font-semibold", children: restaurantStatus?.restaurantName?.charAt(0) || "F" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex flex-col gap-0.5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CardTitle, { className: "text-base font-semibold leading-none", children: "FlipDish" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: cn(
              "flex h-2 w-2 rounded-full",
              isRestaurantOpen ? "bg-green-500" : "bg-red-500"
            ), children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: cn(
              "animate-ping absolute inline-flex h-2 w-2 rounded-full opacity-75",
              isRestaurantOpen ? "bg-green-400" : "bg-red-400"
            ) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CardDescription, { className: "text-xs font-medium", children: isRestaurantOpen ? "Online & Ordering" : "Currently Closed" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
          Button,
          {
            variant: "secondary",
            size: "icon",
            onClick: () => setBasketOpen(true),
            className: "relative h-9 w-9 rounded-full shadow-sm",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.ShoppingCart, { className: "h-4 w-4" }),
              basketItems.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "absolute -top-1 -right-1 h-5 w-5 bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-background shadow-sm", children: basketItems.length })
            ]
          }
        ),
        isAuthenticated ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          Button,
          {
            variant: "ghost",
            size: "icon",
            onClick: () => setShowProfile(true),
            title: "Profile & Payment",
            className: "h-9 w-9 rounded-full",
            children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.User, { className: "h-4 w-4 text-muted-foreground" })
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          Button,
          {
            variant: "ghost",
            size: "icon",
            onClick: () => setShowAuth(true),
            title: "Sign in",
            className: "h-9 w-9 rounded-full",
            children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.LogIn, { className: "h-4 w-4 text-muted-foreground" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(CardContent, { className: "flex-1 overflow-y-auto p-4 space-y-6 bg-muted/10 scroll-smooth", ref: scrollRef, children: [
      visibleMessages.map((msg, idx) => {
        if (msg.role === "assistant") {
          const nextMsg = visibleMessages[idx + 1];
          if (nextMsg && nextMsg.role === "tool") {
            try {
              const content = JSON.parse(nextMsg.content);
              if (content.displayType === "menu_cards") {
                return null;
              }
            } catch {
            }
          }
        }
        return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react4.default.Fragment, { children: renderMessageContent(msg) }, idx);
      }),
      isLoading && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex gap-3 max-w-[85%] animate-pulse", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Avatar2, { className: "h-8 w-8 mt-1 border shadow-sm", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(AvatarFallback2, { className: "bg-background text-[10px]", children: "AI" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "bg-card border rounded-2xl rounded-bl-sm px-5 py-4 shadow-sm flex items-center gap-1.5 w-20", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:-0.3s]" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:-0.15s]" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(CardFooter, { className: "p-4 bg-background border-t", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
      "form",
      {
        onSubmit: (e) => {
          e.preventDefault();
          handleSend();
        },
        className: "flex w-full items-end gap-2 relative",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "relative flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            Input,
            {
              ref: inputRef,
              value: input,
              onChange: (e) => setInput(e.target.value),
              placeholder: "Type a message...",
              disabled: isLoading,
              className: "pr-12 py-6 bg-muted/30 border-muted-foreground/20 focus-visible:ring-primary/20 rounded-xl"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
            Button,
            {
              type: "submit",
              size: "icon",
              disabled: isLoading || !input.trim(),
              className: cn(
                "h-12 w-12 rounded-xl shrink-0 shadow-sm transition-all",
                input.trim() ? "bg-primary hover:bg-primary/90" : "bg-muted text-muted-foreground"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react5.Send, { className: "h-5 w-5" }),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "sr-only", children: "Send" })
              ]
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      AuthModal,
      {
        isOpen: showAuth,
        onClose: () => setShowAuth(false),
        onSuccess: () => {
          if (returnToBasket) {
            setBasketOpen(true);
            setReturnToBasket(false);
          }
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      BasketPanel,
      {
        isOpen: isBasketOpen,
        onClose: () => setBasketOpen(false),
        onSignInNeeded: () => {
          setReturnToBasket(true);
          setShowAuth(true);
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      PaymentMethodPanel,
      {
        isOpen: showProfile,
        onClose: () => setShowProfile(false)
      }
    )
  ] });
}
//# sourceMappingURL=index.js.map