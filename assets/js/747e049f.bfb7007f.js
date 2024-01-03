/*! For license information please see 747e049f.bfb7007f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[233435],{272775:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var t=r(824246),a=r(511151);const o={id:"backend-plugin-manager.dynamicpluginmanager.addbackendplugin",title:"DynamicPluginManager.addBackendPlugin()",description:"API reference for DynamicPluginManager.addBackendPlugin()"},c=void 0,u={id:"reference/backend-plugin-manager.dynamicpluginmanager.addbackendplugin",title:"DynamicPluginManager.addBackendPlugin()",description:"API reference for DynamicPluginManager.addBackendPlugin()",source:"@site/../docs/reference/backend-plugin-manager.dynamicpluginmanager.addbackendplugin.md",sourceDirName:"reference",slug:"/reference/backend-plugin-manager.dynamicpluginmanager.addbackendplugin",permalink:"/docs/reference/backend-plugin-manager.dynamicpluginmanager.addbackendplugin",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-manager.dynamicpluginmanager.addbackendplugin.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-manager.dynamicpluginmanager.addbackendplugin",title:"DynamicPluginManager.addBackendPlugin()",description:"API reference for DynamicPluginManager.addBackendPlugin()"}},i={},l=[{value:"Parameters",id:"parameters",level:2}];function s(e){const n=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-manager",children:(0,t.jsx)(n.code,{children:"@backstage/backend-plugin-manager"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-manager.dynamicpluginmanager",children:(0,t.jsx)(n.code,{children:"DynamicPluginManager"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-manager.dynamicpluginmanager.addbackendplugin",children:(0,t.jsx)(n.code,{children:"addBackendPlugin"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"addBackendPlugin(plugin: BackendDynamicPlugin): void;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"plugin"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-manager.backenddynamicplugin",children:"BackendDynamicPlugin"})}),(0,t.jsx)(n.td,{})]})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(n.p,{children:"void"})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(s,e)})):s(e)}},371426:(e,n,r)=>{var t=r(827378),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,u=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,o={},l=null,s=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(s=n.ref),n)c.call(n,t)&&!i.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:a,type:e,key:l,ref:s,props:o,_owner:u.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},541535:(e,n)=>{var r=Symbol.for("react.element"),t=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function h(e,n,r){this.props=e,this.context=n,this.refs=m,this.updater=r||y}function b(){}function _(e,n,r){this.props=e,this.context=n,this.refs=m,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var k=_.prototype=new b;k.constructor=_,g(k,h.prototype),k.isPureReactComponent=!0;var v=Array.isArray,j=Object.prototype.hasOwnProperty,x={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function S(e,n,t){var a,o={},c=null,u=null;if(null!=n)for(a in void 0!==n.ref&&(u=n.ref),void 0!==n.key&&(c=""+n.key),n)j.call(n,a)&&!P.hasOwnProperty(a)&&(o[a]=n[a]);var i=arguments.length-2;if(1===i)o.children=t;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(a in i=e.defaultProps)void 0===o[a]&&(o[a]=i[a]);return{$$typeof:r,type:e,key:c,ref:u,props:o,_owner:x.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var w=/\/+/g;function R(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function C(e,n,a,o,c){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var i=!1;if(null===e)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case t:i=!0}}if(i)return c=c(i=e),e=""===o?"."+R(i,0):o,v(c)?(a="",null!=e&&(a=e.replace(w,"$&/")+"/"),C(c,n,a,"",(function(e){return e}))):null!=c&&(E(c)&&(c=function(e,n){return{$$typeof:r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(c,a+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),n.push(c)),1;if(i=0,o=""===o?".":o+":",v(e))for(var l=0;l<e.length;l++){var s=o+R(u=e[l],l);i+=C(u,n,a,s,c)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),l=0;!(u=e.next()).done;)i+=C(u=u.value,n,a,s=o+R(u,l++),c);else if("object"===u)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function $(e,n,r){if(null==e)return e;var t=[],a=0;return C(e,t,"","",(function(e){return n.call(r,e,a++)})),t}function O(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},I={transition:null},M={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:I,ReactCurrentOwner:x};n.Children={map:$,forEach:function(e,n,r){$(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return $(e,(function(){n++})),n},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=h,n.Fragment=a,n.Profiler=c,n.PureComponent=_,n.StrictMode=o,n.Suspense=s,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,n.cloneElement=function(e,n,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=g({},e.props),o=e.key,c=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,u=x.current),void 0!==n.key&&(o=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in n)j.call(n,l)&&!P.hasOwnProperty(l)&&(a[l]=void 0===n[l]&&void 0!==i?i[l]:n[l])}var l=arguments.length-2;if(1===l)a.children=t;else if(1<l){i=Array(l);for(var s=0;s<l;s++)i[s]=arguments[s+2];a.children=i}return{$$typeof:r,type:e.type,key:o,ref:c,props:a,_owner:u}},n.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},n.createElement=S,n.createFactory=function(e){var n=S.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:O}},n.memo=function(e,n){return{$$typeof:d,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=I.transition;I.transition={};try{e()}finally{I.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return D.current.useCallback(e,n)},n.useContext=function(e){return D.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return D.current.useDeferredValue(e)},n.useEffect=function(e,n){return D.current.useEffect(e,n)},n.useId=function(){return D.current.useId()},n.useImperativeHandle=function(e,n,r){return D.current.useImperativeHandle(e,n,r)},n.useInsertionEffect=function(e,n){return D.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return D.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return D.current.useMemo(e,n)},n.useReducer=function(e,n,r){return D.current.useReducer(e,n,r)},n.useRef=function(e){return D.current.useRef(e)},n.useState=function(e){return D.current.useState(e)},n.useSyncExternalStore=function(e,n,r){return D.current.useSyncExternalStore(e,n,r)},n.useTransition=function(){return D.current.useTransition()},n.version="18.2.0"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Zo:()=>u,ah:()=>o});var t=r(667294);const a=t.createContext({});function o(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function u({components:e,children:n,disableParentContext:r}){let u;return u=r?"function"==typeof e?e({}):e||c:o(e),t.createElement(a.Provider,{value:u},n)}}}]);