/*! For license information please see f306b10d.51a51056.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[330588],{7853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=n(824246),s=n(511151);const o={id:"plugin-linguist-backend.linguisttagsprocessoroptions",title:"LinguistTagsProcessorOptions",description:"API reference for LinguistTagsProcessorOptions"},i=void 0,c={id:"reference/plugin-linguist-backend.linguisttagsprocessoroptions",title:"LinguistTagsProcessorOptions",description:"API reference for LinguistTagsProcessorOptions",source:"@site/../docs/reference/plugin-linguist-backend.linguisttagsprocessoroptions.md",sourceDirName:"reference",slug:"/reference/plugin-linguist-backend.linguisttagsprocessoroptions",permalink:"/docs/reference/plugin-linguist-backend.linguisttagsprocessoroptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-linguist-backend.linguisttagsprocessoroptions.md",tags:[],version:"current",frontMatter:{id:"plugin-linguist-backend.linguisttagsprocessoroptions",title:"LinguistTagsProcessorOptions",description:"API reference for LinguistTagsProcessorOptions"}},u={},a=[{value:"Properties",id:"properties",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-linguist-backend",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-linguist-backend"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-linguist-backend.linguisttagsprocessoroptions",children:(0,r.jsx)(t.code,{children:"LinguistTagsProcessorOptions"})})]}),"\n",(0,r.jsx)(t.p,{children:"The constructor options for building the LinguistTagsProcessor"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export interface LinguistTagsProcessorOptions \n"})}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Modifiers"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-linguist-backend.linguisttagsprocessoroptions.bytesthreshold",children:"bytesThreshold?"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"number"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," How many bytes must exist of a language in a repo before we consider it for adding a tag to the entity. This can be used if some repos have short utility scripts that may not be the primary language for the repo."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-linguist-backend.linguisttagsprocessoroptions.cachettl",children:"cacheTTL?"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/types.humanduration",children:"HumanDuration"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Determines how long to cache language breakdowns for entities in the processor. Considering how often this processor runs, caching can help move some read traffic off of the linguist DB."]}),(0,r.jsx)(t.p,{children:"If this caching is using up too much memory, you can disable it by setting cacheTTL to 0."})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-linguist-backend.linguisttagsprocessoroptions.discovery",children:"discovery"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/backend-plugin-api.discoveryservice",children:"DiscoveryService"})}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-linguist-backend.linguisttagsprocessoroptions.languagemap",children:"languageMap?"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Record<string, string | undefined>"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Optional map that gives full control over which linguist languages should be included as tags and how they should be represented. The keys should be exact matches to languages in the linguist and the values should be how they render as backstage tags. Keep in mind that backstage has character requirements for tags. If you map a key to a falsey value, it will not be emitted as a tag."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-linguist-backend.linguisttagsprocessoroptions.languagetypes",children:"languageTypes?"})}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/plugin-linguist-common.languagetype",children:"LanguageType"}),"[]"]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Which linguist file types to process tags for."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-linguist-backend.linguisttagsprocessoroptions.logger",children:"logger"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"Logger"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-linguist-backend.linguisttagsprocessoroptions.shouldprocessentity",children:"shouldProcessEntity?"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-linguist-backend.shouldprocessentity",children:"ShouldProcessEntity"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," A function which determines which entities should be processed by the LinguistTagProcessor."]}),(0,r.jsx)(t.p,{children:"The default is to process all entities of kind=Component"})]})]})]})]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},371426:(e,t,n)=>{var r=n(827378),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,o={},a=null,l=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!u.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:a,ref:l,props:o,_owner:c.current}}t.Fragment=o,t.jsx=a,t.jsxs=a},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,y={};function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function j(){}function x(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=b.prototype;var m=x.prototype=new j;m.constructor=x,g(m,b.prototype),m.isPureReactComponent=!0;var v=Array.isArray,_=Object.prototype.hasOwnProperty,k={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var s,o={},i=null,c=null;if(null!=t)for(s in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)_.call(t,s)&&!S.hasOwnProperty(s)&&(o[s]=t[s]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var a=Array(u),l=0;l<u;l++)a[l]=arguments[l+2];o.children=a}if(e&&e.defaultProps)for(s in u=e.defaultProps)void 0===o[s]&&(o[s]=u[s]);return{$$typeof:n,type:e,key:i,ref:c,props:o,_owner:k.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,s,o,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return i=i(u=e),e=""===o?"."+E(u,0):o,v(i)?(s="",null!=e&&(s=e.replace(P,"$&/")+"/"),T(i,t,s,"",(function(e){return e}))):null!=i&&(O(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,s+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(u=0,o=""===o?".":o+":",v(e))for(var a=0;a<e.length;a++){var l=o+E(c=e[a],a);u+=T(c,t,s,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(c=e.next()).done;)u+=T(c=c.value,t,s,l=o+E(c,a++),i);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function C(e,t,n){if(null==e)return e;var r=[],s=0;return T(e,r,"","",(function(e){return t.call(n,e,s++)})),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},L={transition:null},I={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:L,ReactCurrentOwner:k};t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=s,t.Profiler=i,t.PureComponent=x,t.StrictMode=o,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=g({},e.props),o=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)_.call(t,a)&&!S.hasOwnProperty(a)&&(s[a]=void 0===t[a]&&void 0!==u?u[a]:t[a])}var a=arguments.length-2;if(1===a)s.children=r;else if(1<a){u=Array(a);for(var l=0;l<a;l++)u[l]=arguments[l+2];s.children=u}return{$$typeof:n,type:e.type,key:o,ref:i,props:s,_owner:c}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return $.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>o});var r=n(667294);const s=r.createContext({});function o(e){const t=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||i:o(e),r.createElement(s.Provider,{value:c},t)}}}]);