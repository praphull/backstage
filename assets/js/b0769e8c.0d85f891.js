/*! For license information please see b0769e8c.0d85f891.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[541623],{631126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(824246),i=n(511151);const o={id:"index",title:"Utility APIs",sidebar_label:"Overview",description:"Working with Utility APIs in the New Frontend System"},s=void 0,a={id:"frontend-system/utility-apis/index",title:"Utility APIs",description:"Working with Utility APIs in the New Frontend System",source:"@site/../docs/frontend-system/utility-apis/01-index.md",sourceDirName:"frontend-system/utility-apis",slug:"/frontend-system/utility-apis/index",permalink:"/docs/frontend-system/utility-apis/index",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/frontend-system/utility-apis/01-index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"index",title:"Utility APIs",sidebar_label:"Overview",description:"Working with Utility APIs in the New Frontend System"},sidebar:"docs",previous:{title:"Testing",permalink:"/docs/frontend-system/building-plugins/testing"},next:{title:"Creating APIs",permalink:"/docs/frontend-system/utility-apis/creating"}},u={},c=[{value:"Creating utility APIs",id:"creating-utility-apis",level:2},{value:"Consuming utility APIs",id:"consuming-utility-apis",level:2},{value:"Configuring utility APIs",id:"configuring-utility-apis",level:2},{value:"Migrating from the old frontend system",id:"migrating-from-the-old-frontend-system",level:2}];function l(e){const t=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a",h2:"h2"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"NOTE: The new frontend system is in alpha and is only supported by a small number of plugins."})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["As described ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/utility-apis",children:"in the architecture section"}),', utility APIs are pieces of shared functionality - interfaces that can be requested by plugins to use. They are defined by a TypeScript interface as well as a reference (an "API ref") used to access its implementation. They can be provided both by plugins and the core framework, and are themselves ',(0,r.jsx)(t.a,{href:"/docs/frontend-system/architecture/extensions",children:"extensions"})," that can accept inputs, be declaratively configured in your app-config, or transparently be replaced entirely with custom implementations that fulfill the same contract."]}),"\n",(0,r.jsx)(t.h2,{id:"creating-utility-apis",children:"Creating utility APIs"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["For details, ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/utility-apis/creating",children:"see the main article"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Backstage apps, plugins, and the core Backstage framework can all expose utility APIs for general use."}),"\n",(0,r.jsx)(t.p,{children:"Some are available out of the box, such as the API for reading app configuration. Some are provided by third party plugins, such as the catalog client API that both the catalog itself and your own code can leverage to talk to the catalog backend. Some, you may create yourself and make available inside your Backstage instance for use within your private ecosystem of plugins."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/frontend-system/utility-apis/creating",children:"The main article"})," describes the process of creating and exposing utility APIs of your own, for sharing functionality or configurability across plugins and apps."]}),"\n",(0,r.jsx)(t.h2,{id:"consuming-utility-apis",children:"Consuming utility APIs"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["For details, ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/utility-apis/consuming",children:"see the main article"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Once utility APIs are created, there are a few ways that they can be accessed to be consumed."}),"\n",(0,r.jsx)(t.p,{children:"Some utility APIs in turn depend on other utility APIs. This powerful composability lets you leverage already-written reusable pieces. In particular, you may want to rely on Backstage's framework-provided APIs e.g. for reading app configuration and many other use cases. Sometimes you request utility APIs inside your React components, e.g. for accessing i18n strings, or emitting analytics events."}),"\n",(0,r.jsxs)(t.p,{children:["These are described in detail in ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/utility-apis/consuming",children:"the main article"})]}),"\n",(0,r.jsx)(t.h2,{id:"configuring-utility-apis",children:"Configuring utility APIs"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["For details, ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/utility-apis/configuring",children:"see the main article"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Most utility APIs are usable directly without any configuration. But they are proper extensions, and can therefore have their implementations entirely swapped out by your app for advanced use cases. They can also be built with the ability to configured in your app-config, or to have inputs that extend their functionality."}),"\n",(0,r.jsxs)(t.p,{children:["These cases are all described in ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/utility-apis/configuring",children:"the main article"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"migrating-from-the-old-frontend-system",children:"Migrating from the old frontend system"}),"\n",(0,r.jsxs)(t.p,{children:["If you want to learn how to migrate your own utility APIs from the old frontend system to the new one, that's described in ",(0,r.jsx)(t.a,{href:"/docs/frontend-system/utility-apis/migrating",children:"a dedicated migration guide"}),"."]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},371426:(e,t,n)=>{var r=n(827378),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!u.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:l,props:o,_owner:a.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var _=v.prototype=new b;_.constructor=v,h(_,g.prototype),_.isPureReactComponent=!0;var x=Array.isArray,w=Object.prototype.hasOwnProperty,j={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var i,o={},s=null,a=null;if(null!=t)for(i in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,i)&&!k.hasOwnProperty(i)&&(o[i]=t[i]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}if(e&&e.defaultProps)for(i in u=e.defaultProps)void 0===o[i]&&(o[i]=u[i]);return{$$typeof:n,type:e,key:s,ref:a,props:o,_owner:j.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var I=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,i,o,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return s=s(u=e),e=""===o?"."+A(u,0):o,x(s)?(i="",null!=e&&(i=e.replace(I,"$&/")+"/"),C(s,t,i,"",(function(e){return e}))):null!=s&&(P(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,i+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(I,"$&/")+"/")+e)),t.push(s)),1;if(u=0,o=""===o?".":o+":",x(e))for(var c=0;c<e.length;c++){var l=o+A(a=e[c],c);u+=C(a,t,i,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(a=e.next()).done;)u+=C(a=a.value,t,i,l=o+A(a,c++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function E(e,t,n){if(null==e)return e;var r=[],i=0;return C(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},$={transition:null},T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:$,ReactCurrentOwner:j};t.Children={map:E,forEach:function(e,t,n){E(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=i,t.Profiler=s,t.PureComponent=v,t.StrictMode=o,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=h({},e.props),o=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=j.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)w.call(t,c)&&!k.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){u=Array(c);for(var l=0;l<c;l++)u[l]=arguments[l+2];i.children=u}return{$$typeof:n,type:e.type,key:o,ref:s,props:i,_owner:a}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return R.current.useCallback(e,t)},t.useContext=function(e){return R.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return R.current.useDeferredValue(e)},t.useEffect=function(e,t){return R.current.useEffect(e,t)},t.useId=function(){return R.current.useId()},t.useImperativeHandle=function(e,t,n){return R.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return R.current.useMemo(e,t)},t.useReducer=function(e,t,n){return R.current.useReducer(e,t,n)},t.useRef=function(e){return R.current.useRef(e)},t.useState=function(e){return R.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return R.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return R.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>o});var r=n(667294);const i=r.createContext({});function o(e){const t=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||s:o(e),r.createElement(i.Provider,{value:a},t)}}}]);