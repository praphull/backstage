/*! For license information please see 3fd91607.c01827e1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[799149],{725167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(824246),o=n(511151);const i={id:"backend-tasks.taskscheduledefinitionconfig.initialdelay",title:"TaskScheduleDefinitionConfig.initialDelay",description:"API reference for TaskScheduleDefinitionConfig.initialDelay"},a=void 0,s={id:"reference/backend-tasks.taskscheduledefinitionconfig.initialdelay",title:"TaskScheduleDefinitionConfig.initialDelay",description:"API reference for TaskScheduleDefinitionConfig.initialDelay",source:"@site/../docs/reference/backend-tasks.taskscheduledefinitionconfig.initialdelay.md",sourceDirName:"reference",slug:"/reference/backend-tasks.taskscheduledefinitionconfig.initialdelay",permalink:"/docs/reference/backend-tasks.taskscheduledefinitionconfig.initialdelay",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-tasks.taskscheduledefinitionconfig.initialdelay.md",tags:[],version:"current",frontMatter:{id:"backend-tasks.taskscheduledefinitionconfig.initialdelay",title:"TaskScheduleDefinitionConfig.initialDelay",description:"API reference for TaskScheduleDefinitionConfig.initialDelay"}},c={},u=[{value:"Remarks",id:"remarks",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-tasks",children:(0,r.jsx)(t.code,{children:"@backstage/backend-tasks"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-tasks.taskscheduledefinitionconfig",children:(0,r.jsx)(t.code,{children:"TaskScheduleDefinitionConfig"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-tasks.taskscheduledefinitionconfig.initialdelay",children:(0,r.jsx)(t.code,{children:"initialDelay"})})]}),"\n",(0,r.jsx)(t.p,{children:"The amount of time that should pass before the first invocation happens."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"initialDelay?: string | HumanDuration;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"This can be useful in cold start scenarios to stagger or delay some heavy compute jobs. If no value is given for this field then the first invocation will happen as soon as possible according to the cadence."}),"\n",(0,r.jsxs)(t.p,{children:["NOTE: This is a per-worker delay. If you have a cluster of workers all collaborating on a task that has its ",(0,r.jsx)(t.code,{children:"scope"})," field set to ",(0,r.jsx)(t.code,{children:"'global'"}),', then you may still see the task being processed by other long-lived workers, while any given single worker is in its initial sleep delay time e.g. after a deployment. Therefore, this parameter is not useful for "globally" pausing work; its main intended use is for individual machines to get a chance to reach some equilibrium at startup before triggering heavy batch workloads.']})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:i,_owner:s.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,k={};function m(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||y}function b(){}function g(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var _=g.prototype=new b;_.constructor=g,h(_,m.prototype),_.isPureReactComponent=!0;var v=Array.isArray,S=Object.prototype.hasOwnProperty,j={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var o,i={},a=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,o)&&!x.hasOwnProperty(o)&&(i[o]=t[o]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:n,type:e,key:a,ref:s,props:i,_owner:j.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function D(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return a=a(c=e),e=""===i?"."+R(c,0):i,v(a)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),D(a,t,o,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),t.push(a)),1;if(c=0,i=""===i?".":i+":",v(e))for(var u=0;u<e.length;u++){var l=i+R(s=e[u],u);c+=D(s,t,o,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)c+=D(s=s.value,t,o,l=i+R(s,u++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function O(e,t,n){if(null==e)return e;var r=[],o=0;return D(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},P={transition:null},I={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:P,ReactCurrentOwner:j};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=a,t.PureComponent=g,t.StrictMode=i,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=j.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)S.call(t,u)&&!x.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){c=Array(u);for(var l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:n,type:e.type,key:i,ref:a,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=P.transition;P.transition={};try{e()}finally{P.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,n){return T.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,n){return T.current.useReducer(e,t,n)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return T.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return T.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||a:i(e),r.createElement(o.Provider,{value:s},t)}}}]);