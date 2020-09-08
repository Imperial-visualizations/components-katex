//
//
//
//

var script = {
    name:"iv-loading-spinner",
        props: {
          spinnerScaling: {
            type: Number,
            default: 1
      }
    },
    computed: {
      scaling: function () {
        if (this.spinnerScaling != 0) {
          return {
            'border': 8*this.spinnerScaling + "px solid #c8cac8", 
            'border-top': 8*this.spinnerScaling + "px solid #3498db",
            'border-radius': 50 + "%",
            'width': 20*this.spinnerScaling + "px",
            'height': 20*this.spinnerScaling + "px",
          }
        } else {
          return {
            'border': 8 + "px solid #c8cac8", 
            'border-top': 8 + "px solid #3498db",
            'border-radius': 100 + "%",
            'width': 20 + "px",
            'height': 20 + "px",
          }
        }
      }
    }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "loadingSpinner", style: _vm.scaling })
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-b9cf8790_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* The container <div> - needed to position the dropdown content */\n.loadingSpinner[data-v-b9cf8790] {\n  animation: spin-data-v-b9cf8790 1.5s linear infinite;\n}\n@keyframes spin-data-v-b9cf8790 {\n0% { transform: rotate(0deg);\n}\n100% { transform: rotate(360deg);\n}\n}\n", map: {"version":3,"sources":["/home/robert/ImpVis/KatexComponents/node_modules/@impvis/components/src/components/LoadingSpinner/LoadingSpinner.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsCA,kEAAA;AACA;EACA,oDAAA;AACA;AAEA;AACA,KAAA,uBAAA;AAAA;AACA,OAAA,yBAAA;AAAA;AACA","file":"LoadingSpinner.vue","sourcesContent":["<template>\n    <div class=\"loadingSpinner\" v-bind:style=\"scaling\"></div>\n</template>\n\n<script>\nexport default {\n    name:\"iv-loading-spinner\",\n        props: {\n          spinnerScaling: {\n            type: Number,\n            default: 1\n      }\n    },\n    computed: {\n      scaling: function () {\n        if (this.spinnerScaling != 0) {\n          return {\n            'border': 8*this.spinnerScaling + \"px solid #c8cac8\", \n            'border-top': 8*this.spinnerScaling + \"px solid #3498db\",\n            'border-radius': 50 + \"%\",\n            'width': 20*this.spinnerScaling + \"px\",\n            'height': 20*this.spinnerScaling + \"px\",\n          }\n        } else {\n          return {\n            'border': 8 + \"px solid #c8cac8\", \n            'border-top': 8 + \"px solid #3498db\",\n            'border-radius': 100 + \"%\",\n            'width': 20 + \"px\",\n            'height': 20 + \"px\",\n          }\n        }\n      }\n    }\n}\n</script>\n\n<style scoped>\n/* The container <div> - needed to position the dropdown content */\n.loadingSpinner {\n  animation: spin 1.5s linear infinite;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n</style>"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-b9cf8790";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

//
var script$1 = {
    name:"iv-equation-box",
    components:{
        'iv-loading-spinner':__vue_component__
    },
    mounted(){
        this.render();
    },
    props:{
        stylise: {
            type: Boolean,
            default: true,
        },
        equation: {
            type: String,
            default: String.raw` f({x}) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi `,
        }
    },
    data(){
        return {
            loaded:false
        }
    },
    methods:{
        async render(){
            let katex = await import('./katex-c15bfc10.js');
            await import('./katex.min-388670ac.js');
            //Here v-show MUST be used, because otherwise the equationBox element does not exist in the DOM!
            //An alternate approach would be to set this loaded = true in the line above and then await the next vue update to be sure
            //This method should be more performant though.
            katex.render(this.equation,this.$refs.equationBox,{throwOnError:false,errorColor:"black",displayMode:true});
            this.loaded = true;
        }
    },
    watch:{
        equation: function(){
            this.render();
        }
    }
};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "iv-equation-box", class: { equationbox: _vm.stylise } },
    [
      !_vm.loaded ? _c("iv-loading-spinner") : _vm._e(),
      _vm._v(" "),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.loaded,
            expression: "loaded"
          }
        ],
        ref: "equationBox"
      })
    ],
    1
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-477a4e53_0", { source: "\n.iv-equation-box{\n    display:inline-block;\n}\n.equationbox{\n    border-style: solid;\n    border-color: #37578b;\n    border-radius: 0.5rem;\n    background-color: #daeced;\n    display: inline-block;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n}\n", map: {"version":3,"sources":["/home/robert/ImpVis/KatexComponents/src/components/EquationBox/EquationBox.vue"],"names":[],"mappings":";AAoDA;IACA,oBAAA;AACA;AACA;IACA,mBAAA;IACA,qBAAA;IACA,qBAAA;IACA,yBAAA;IACA,qBAAA;IACA,oBAAA;IACA,qBAAA;AACA","file":"EquationBox.vue","sourcesContent":["<template>\n    <div class=\"iv-equation-box\" :class=\"{ equationbox: stylise }\">\n        <iv-loading-spinner v-if=\"!loaded\"/>\n        <div ref='equationBox' v-show=\"loaded\"></div>\n    </div>\n</template>\n\n<script>\nimport LoadingSpinner from \"@impvis/components/src/components/LoadingSpinner\";\nexport default {\n    name:\"iv-equation-box\",\n    components:{\n        'iv-loading-spinner':LoadingSpinner\n    },\n    mounted(){\n        this.render();\n    },\n    props:{\n        stylise: {\n            type: Boolean,\n            default: true,\n        },\n        equation: {\n            type: String,\n            default: String.raw` f({x}) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi `,\n        }\n    },\n    data(){\n        return {\n            loaded:false\n        }\n    },\n    methods:{\n        async render(){\n            let katex = await import(\"katex\");\n            await import(\"katex/dist/katex.min.css\");\n            //Here v-show MUST be used, because otherwise the equationBox element does not exist in the DOM!\n            //An alternate approach would be to set this loaded = true in the line above and then await the next vue update to be sure\n            //This method should be more performant though.\n            katex.render(this.equation,this.$refs.equationBox,{throwOnError:false,errorColor:\"black\",displayMode:true});\n            this.loaded = true;\n        }\n    },\n    watch:{\n        equation: function(){\n            this.render();\n        }\n    }\n}\n</script>\n\n<style>\n.iv-equation-box{\n    display:inline-block;\n}\n.equationbox{\n    border-style: solid;\n    border-color: #37578b;\n    border-radius: 0.5rem;\n    background-color: #daeced;\n    display: inline-block;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n}\n</style>"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    createInjector,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//

var script$2 = {
    name:"iv-hover-text",
    props:{
        hoverElement:{
            type: String,
            default: "Hover over me"
        },
        defaultText:{
            type: String,
            default: "This is a secret message."
        }
    },
    data: function () {
        return {
            positions: {
                clientX: undefined,
                clientY: undefined
            },
            showContent: false
        }
    },
    computed: {
        moveDiv: function () {
            return {
                left: this.positions.clientX + 'px', top: this.positions.clientY + 'px'
            }
        }
    },
    methods:{
        updatePosition(event){
            var rect = event.target.getBoundingClientRect();
            this.positions.clientX = event.clientX - rect.left + 3;
            this.positions.clientY = event.clientY - rect.top + 3;
            console.log(event.target);
        }
    }
};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "dropdown" }, [
    _c(
      "div",
      {
        staticClass: "dropdownhover",
        on: {
          mouseover: function($event) {
            _vm.showContent = true;
          },
          mouseleave: function($event) {
            _vm.showContent = false;
          },
          mousemove: _vm.updatePosition
        }
      },
      [_vm._t("default", [_vm._v(_vm._s(_vm.hoverElement))])],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.showContent,
            expression: "showContent"
          }
        ],
        staticClass: "dropdown-content",
        style: _vm.moveDiv
      },
      [_vm._t("hoverElement", [_vm._v(_vm._s(_vm.defaultText))])],
      2
    )
  ])
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = function (inject) {
    if (!inject) return
    inject("data-v-e5f60ec0_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* The container <div> - needed to position the dropdown content */\n.dropdown[data-v-e5f60ec0] {\n    font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    position: relative;\n    font-size: 16px;\n    font-weight: normal;\n    letter-spacing: .05rem;\n}\n\n/* Dropdown hover */\n.dropdownhover[data-v-e5f60ec0] {\n    display: inline-block;\n    padding: 6px 12px 5px 10px;\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n/* Dropdown hover on hover */\n.dropdownhover[data-v-e5f60ec0]:hover {\n    background-color: #2980B9;\n    -webkit-box-shadow:0 0 7.5px rgba(9, 89, 160, 0.9); \n    -moz-box-shadow: 0 0 7.5px rgba(9, 89, 160, 0.9); \n    box-shadow:0 0 7.5px rgba(9, 89, 160, 0.9);\n    -webkit-transition: all 0.4s ease-in-out;\n    -moz-transition:    all 0.4s ease-in-out;\n    -ms-transition:     all 0.4s ease-in-out;\n    -o-transition:      all 0.4s ease-in-out;\n    transition:         all 0.4s ease-in-out;\n}\n\n/* Dropdown Content*/\n.dropdown-content[data-v-e5f60ec0] {\n    position: absolute;\n    display: inline-block;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    color: black;\n    font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 12px;\n    font-weight: normal;\n    letter-spacing: .05rem;\n    text-align: center;\n    background-color: #f1f1f1;\n    color: black;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    padding: 0px 12px 5px 10px;\n    word-wrap: break-word;\n}\n\n", map: {"version":3,"sources":["/home/robert/ImpVis/KatexComponents/node_modules/@impvis/components/src/components/HoverText/HoverText.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAoDA,kEAAA;AACA;IACA,uFAAA;IACA,kBAAA;IACA,eAAA;IACA,mBAAA;IACA,sBAAA;AACA;;AAEA,mBAAA;AACA;IACA,qBAAA;IACA,0BAAA;IACA,eAAA;IACA,0BAAA;AACA;;AAEA,4BAAA;AACA;IACA,yBAAA;IACA,kDAAA;IACA,gDAAA;IACA,0CAAA;IACA,wCAAA;IACA,wCAAA;IACA,wCAAA;IACA,wCAAA;IACA,wCAAA;AACA;;AAEA,oBAAA;AACA;IACA,kBAAA;IACA,qBAAA;IACA,oCAAA;IACA,YAAA;IACA,uFAAA;IACA,eAAA;IACA,mBAAA;IACA,sBAAA;IACA,kBAAA;IACA,yBAAA;IACA,YAAA;IACA,4CAAA;IACA,0BAAA;IACA,qBAAA;AACA","file":"HoverText.vue","sourcesContent":["<template>\n    <div class=\"dropdown\">\n        <div @mouseover=\"showContent=true\" @mouseleave=\"showContent=false\" @mousemove=\"updatePosition\" class=\"dropdownhover\">\n            <slot>{{hoverElement}}</slot>\n        </div>\n        <div class=\"dropdown-content\" v-show=\"showContent\" v-bind:style=\"moveDiv\">        \n            <slot name=\"hoverElement\">{{defaultText}}</slot>\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    name:\"iv-hover-text\",\n    props:{\n        hoverElement:{\n            type: String,\n            default: \"Hover over me\"\n        },\n        defaultText:{\n            type: String,\n            default: \"This is a secret message.\"\n        }\n    },\n    data: function () {\n        return {\n            positions: {\n                clientX: undefined,\n                clientY: undefined\n            },\n            showContent: false\n        }\n    },\n    computed: {\n        moveDiv: function () {\n            return {\n                left: this.positions.clientX + 'px', top: this.positions.clientY + 'px'\n            }\n        }\n    },\n    methods:{\n        updatePosition(event){\n            var rect = event.target.getBoundingClientRect();\n            this.positions.clientX = event.clientX - rect.left + 3;\n            this.positions.clientY = event.clientY - rect.top + 3;\n            console.log(event.target);\n        }\n    }\n}\n</script>\n\n<style scoped>\n/* The container <div> - needed to position the dropdown content */\n.dropdown {\n    font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    position: relative;\n    font-size: 16px;\n    font-weight: normal;\n    letter-spacing: .05rem;\n}\n\n/* Dropdown hover */\n.dropdownhover {\n    display: inline-block;\n    padding: 6px 12px 5px 10px;\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n/* Dropdown hover on hover */\n.dropdownhover:hover {\n    background-color: #2980B9;\n    -webkit-box-shadow:0 0 7.5px rgba(9, 89, 160, 0.9); \n    -moz-box-shadow: 0 0 7.5px rgba(9, 89, 160, 0.9); \n    box-shadow:0 0 7.5px rgba(9, 89, 160, 0.9);\n    -webkit-transition: all 0.4s ease-in-out;\n    -moz-transition:    all 0.4s ease-in-out;\n    -ms-transition:     all 0.4s ease-in-out;\n    -o-transition:      all 0.4s ease-in-out;\n    transition:         all 0.4s ease-in-out;\n}\n\n/* Dropdown Content*/\n.dropdown-content {\n    position: absolute;\n    display: inline-block;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    color: black;\n    font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    font-size: 12px;\n    font-weight: normal;\n    letter-spacing: .05rem;\n    text-align: center;\n    background-color: #f1f1f1;\n    color: black;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    padding: 0px 12px 5px 10px;\n    word-wrap: break-word;\n}\n\n</style>"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = "data-v-e5f60ec0";
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    createInjector,
    undefined,
    undefined
  );

//

var script$3 = {
    name:"iv-equation-box-advance",
    components: {
        "iv-equation-box": __vue_component__$1,
        "iv-hover-text": __vue_component__$2
    },
    props: {
        myEquation: {
            type: String,
            default: String.raw` $$ \textbf{F} = m \textbf{a} $$`,
        },
        symbol1: {
            type: String,
            default: String.raw` $$ \textbf{F} $$`
        },
        symbol2: {
            type: String,
            default: String.raw` $$ m $$`
        },
        symbol3: {
            type: String,
            default: String.raw` $$ \textbf{a} $$`
        },
    }
};

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("iv-hover-text", {
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function() {
          return [
            _c("iv-equation-box", { attrs: { equation: _vm.myEquation } })
          ]
        },
        proxy: true
      },
      {
        key: "hoverElement",
        fn: function() {
          return [
            _c("h3", [
              _vm._v(
                "This is Newton's 2nd Law of Motion for a body of constant mass."
              )
            ]),
            _vm._v(" "),
            _c("iv-equation-box", {
              attrs: { equation: _vm.symbol1, stylise: false }
            }),
            _vm._v("\n        : Force\n        "),
            _c("br"),
            _vm._v(" "),
            _c("iv-equation-box", {
              attrs: { equation: _vm.symbol2, stylise: false }
            }),
            _vm._v("\n        : mass\n        "),
            _c("br"),
            _vm._v(" "),
            _c("iv-equation-box", {
              attrs: { equation: _vm.symbol3, stylise: false }
            }),
            _vm._v("\n        : acceleration\n    ")
          ]
        },
        proxy: true
      }
    ])
  })
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = function (inject) {
    if (!inject) return
    inject("data-v-474fb194_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"EquationBoxAdvance.vue"}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$3 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    false,
    createInjector,
    undefined,
    undefined
  );

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    EquationBox: __vue_component__$1,
    EquationBoxAdvance: __vue_component__$3
});

const ImpVisKatex = {
    install(Vue){
        for(const componentName in components){
            const component = components[componentName];
            Vue.component(component.name,component);
        }
    }
};
if(typeof window !== 'undefined' && window.Vue){
    window.Vue.use(ImpVisKatex);
}

export default ImpVisKatex;
