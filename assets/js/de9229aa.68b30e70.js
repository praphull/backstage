/*! For license information please see de9229aa.68b30e70.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[685802],{50514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(824246),o=n(511151);const i={id:"concepts",title:"Concepts",description:"A list of important permission framework concepts"},s=void 0,a={id:"permissions/concepts",title:"Concepts",description:"A list of important permission framework concepts",source:"@site/../docs/permissions/concepts.md",sourceDirName:"permissions",slug:"/permissions/concepts",permalink:"/docs/permissions/concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/permissions/concepts.md",tags:[],version:"current",frontMatter:{id:"concepts",title:"Concepts",description:"A list of important permission framework concepts"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/permissions/overview"},next:{title:"Getting Started",permalink:"/docs/permissions/getting-started"}},c={},u=[{value:"Permission",id:"permission",level:3},{value:"Policy",id:"policy",level:3},{value:"Policy decision versus enforcement",id:"policy-decision-versus-enforcement",level:3},{value:"Resources and rules",id:"resources-and-rules",level:3},{value:"Conditional decisions",id:"conditional-decisions",level:3}];function l(e){const t=Object.assign({h3:"h3",p:"p"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"permission",children:"Permission"}),"\n",(0,r.jsx)(t.p,{children:"Any action that a user performs within Backstage may be represented as a permission. More complex actions, like executing a software template, may require authorization for multiple permissions throughout the flow. Permissions are identified by a unique name and optionally include a set of attributes that describe the corresponding action. Plugins are responsible for defining and exposing the permissions they enforce."}),"\n",(0,r.jsx)(t.h3,{id:"policy",children:"Policy"}),"\n",(0,r.jsx)(t.p,{children:"User permissions are authorized by a central, user-defined permission policy. At a high level, a policy is a function that receives a Backstage user and permission, and returns a decision to allow or deny. Policies are expressed as code, which decouples the framework from any particular authorization model, like role-based access control (RBAC) or attribute-based access control (ABAC)."}),"\n",(0,r.jsx)(t.h3,{id:"policy-decision-versus-enforcement",children:"Policy decision versus enforcement"}),"\n",(0,r.jsx)(t.p,{children:"Two important responsibilities of any authorization system are to decide if a user can do something, and to enforce that decision. In the Backstage permission framework, policies are responsible for decisions and plugins (typically backends) are responsible for enforcing them."}),"\n",(0,r.jsx)(t.h3,{id:"resources-and-rules",children:"Resources and rules"}),"\n",(0,r.jsx)(t.p,{children:"In many cases, a permission represents a user's interaction with another object. This object likely has information that policy authors can use to define more granular access. The permission framework introduces two abstractions to account for this: resources and rules. Resources represent the objects that users interact with. Rules are predicate-based controls that tap into a resource's data. For example, the catalog plugin defines a resource for catalog entities and a rule to check if an entity has a given annotation."}),"\n",(0,r.jsx)(t.h3,{id:"conditional-decisions",children:"Conditional decisions"}),"\n",(0,r.jsx)(t.p,{children:'Rules need additional data before they can be used in a decision. For example, the catalog plugin\'s "has annotation" rule needs to know what annotation to look for on a given entity. Once a rule is bound to relevant information it forms a condition. Conditions are then used to return a conditional decision from a policy. Conditional decisions tell the permission framework to delegate evaluation to the plugin that owns the corresponding resource. Permission requests that result in a conditional decision are allowed if all of the provided conditions evaluate to be true. This conditional behavior avoids coupling between policies and resource schemas, and allows plugins to evaluate complex rules in an efficient way. For example, a plugin may convert a conditional decision to a database query instead of loading and filtering objects in memory.'})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:i,_owner:a.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}function b(){}function _(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var g=_.prototype=new b;g.constructor=_,m(g,v.prototype),g.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,x={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,i={},s=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)k.call(t,o)&&!j.hasOwnProperty(o)&&(i[o]=t[o]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:n,type:e,key:s,ref:a,props:i,_owner:x.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var R=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,i,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return s=s(c=e),e=""===i?"."+E(c,0):i,w(s)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),P(s,t,o,"",(function(e){return e}))):null!=s&&(C(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(R,"$&/")+"/")+e)),t.push(s)),1;if(c=0,i=""===i?".":i+":",w(e))for(var u=0;u<e.length;u++){var l=i+E(a=e[u],u);c+=P(a,t,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(a=e.next()).done;)c+=P(a=a.value,t,o,l=i+E(a,u++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function O(e,t,n){if(null==e)return e;var r=[],o=0;return P(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},I={transition:null},T={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:I,ReactCurrentOwner:x};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=s,t.PureComponent=_,t.StrictMode=i,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),i=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=x.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)k.call(t,u)&&!j.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){c=Array(u);for(var l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:n,type:e.type,key:i,ref:s,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return A.current.useCallback(e,t)},t.useContext=function(e){return A.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return A.current.useDeferredValue(e)},t.useEffect=function(e,t){return A.current.useEffect(e,t)},t.useId=function(){return A.current.useId()},t.useImperativeHandle=function(e,t,n){return A.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return A.current.useMemo(e,t)},t.useReducer=function(e,t,n){return A.current.useReducer(e,t,n)},t.useRef=function(e){return A.current.useRef(e)},t.useState=function(e){return A.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return A.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return A.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||s:i(e),r.createElement(o.Provider,{value:a},t)}}}]);