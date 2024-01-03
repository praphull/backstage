/*! For license information please see 0ff9af89.d9df35bf.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[398729],{561567:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var n=r(824246),o=r(511151);const i={id:"plugin-lighthouse-common.lighthouserestapi.fromconfig",title:"LighthouseRestApi.fromConfig()",description:"API reference for LighthouseRestApi.fromConfig()"},u=void 0,s={id:"reference/plugin-lighthouse-common.lighthouserestapi.fromconfig",title:"LighthouseRestApi.fromConfig()",description:"API reference for LighthouseRestApi.fromConfig()",source:"@site/../docs/reference/plugin-lighthouse-common.lighthouserestapi.fromconfig.md",sourceDirName:"reference",slug:"/reference/plugin-lighthouse-common.lighthouserestapi.fromconfig",permalink:"/docs/reference/plugin-lighthouse-common.lighthouserestapi.fromconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-lighthouse-common.lighthouserestapi.fromconfig.md",tags:[],version:"current",frontMatter:{id:"plugin-lighthouse-common.lighthouserestapi.fromconfig",title:"LighthouseRestApi.fromConfig()",description:"API reference for LighthouseRestApi.fromConfig()"}},c={},a=[{value:"Parameters",id:"parameters",level:2}];function f(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-lighthouse-common",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-lighthouse-common"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-lighthouse-common.lighthouserestapi",children:(0,n.jsx)(t.code,{children:"LighthouseRestApi"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-lighthouse-common.lighthouserestapi.fromconfig",children:(0,n.jsx)(t.code,{children:"fromConfig"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"static fromConfig(config: Config): LighthouseRestApi;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"config"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/config.config",children:"Config"})}),(0,n.jsx)(t.td,{})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-lighthouse-common.lighthouserestapi",children:"LighthouseRestApi"})})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,i={},a=null,f=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(f=t.ref),t)u.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:f,props:i,_owner:s.current}}t.Fragment=i,t.jsx=a,t.jsxs=a},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}function _(){}function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=g.prototype;var v=b.prototype=new _;v.constructor=b,m(v,g.prototype),v.isPureReactComponent=!0;var j=Array.isArray,x=Object.prototype.hasOwnProperty,S={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var o,i={},u=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(u=""+t.key),t)x.call(t,o)&&!R.hasOwnProperty(o)&&(i[o]=t[o]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var a=Array(c),f=0;f<c;f++)a[f]=arguments[f+2];i.children=a}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:r,type:e,key:u,ref:s,props:i,_owner:S.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var E=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,i,u){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return u=u(c=e),e=""===i?"."+w(c,0):i,j(u)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),$(u,t,o,"",(function(e){return e}))):null!=u&&(k(u)&&(u=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(E,"$&/")+"/")+e)),t.push(u)),1;if(c=0,i=""===i?".":i+":",j(e))for(var a=0;a<e.length;a++){var f=i+w(s=e[a],a);c+=$(s,t,o,f,u)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),a=0;!(s=e.next()).done;)c+=$(s=s.value,t,o,f=i+w(s,a++),u);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function O(e,t,r){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},L={transition:null},I={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:L,ReactCurrentOwner:S};t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=u,t.PureComponent=b,t.StrictMode=i,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,u=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,s=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(a in t)x.call(t,a)&&!R.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==c?c[a]:t[a])}var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){c=Array(a);for(var f=0;f<a;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:r,type:e.type,key:i,ref:u,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return A.current.useCallback(e,t)},t.useContext=function(e){return A.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return A.current.useDeferredValue(e)},t.useEffect=function(e,t){return A.current.useEffect(e,t)},t.useId=function(){return A.current.useId()},t.useImperativeHandle=function(e,t,r){return A.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return A.current.useMemo(e,t)},t.useReducer=function(e,t,r){return A.current.useReducer(e,t,r)},t.useRef=function(e){return A.current.useRef(e)},t.useState=function(e){return A.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return A.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return A.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>s,ah:()=>i});var n=r(667294);const o=n.createContext({});function i(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const u={};function s({components:e,children:t,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||u:i(e),n.createElement(o.Provider,{value:s},t)}}}]);