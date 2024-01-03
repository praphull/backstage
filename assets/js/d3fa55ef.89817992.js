/*! For license information please see d3fa55ef.89817992.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[29540],{278246:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var n=r(824246),o=r(511151);const i={id:"plugin-playlist.personallistfilter.isownedplaylist",title:"PersonalListFilter.isOwnedPlaylist",description:"API reference for PersonalListFilter.isOwnedPlaylist"},s=void 0,l={id:"reference/plugin-playlist.personallistfilter.isownedplaylist",title:"PersonalListFilter.isOwnedPlaylist",description:"API reference for PersonalListFilter.isOwnedPlaylist",source:"@site/../docs/reference/plugin-playlist.personallistfilter.isownedplaylist.md",sourceDirName:"reference",slug:"/reference/plugin-playlist.personallistfilter.isownedplaylist",permalink:"/docs/reference/plugin-playlist.personallistfilter.isownedplaylist",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-playlist.personallistfilter.isownedplaylist.md",tags:[],version:"current",frontMatter:{id:"plugin-playlist.personallistfilter.isownedplaylist",title:"PersonalListFilter.isOwnedPlaylist",description:"API reference for PersonalListFilter.isOwnedPlaylist"}},u={},a=[];function c(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-playlist",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-playlist"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-playlist.personallistfilter",children:(0,n.jsx)(t.code,{children:"PersonalListFilter"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-playlist.personallistfilter.isownedplaylist",children:(0,n.jsx)(t.code,{children:"isOwnedPlaylist"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"readonly isOwnedPlaylist: (playlist: Playlist) => boolean;\n"})})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,i={},a=null,c=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,n)&&!u.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:c,props:i,_owner:l.current}}t.Fragment=i,t.jsx=a,t.jsxs=a},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,_={};function m(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||y}function b(){}function v(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var g=v.prototype=new b;g.constructor=v,h(g,m.prototype),g.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,j={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var o,i={},s=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(s=""+t.key),t)S.call(t,o)&&!P.hasOwnProperty(o)&&(i[o]=t[o]);var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){for(var a=Array(u),c=0;c<u;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===i[o]&&(i[o]=u[o]);return{$$typeof:r,type:e,key:s,ref:l,props:i,_owner:j.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var O=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,i,s){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var u=!1;if(null===e)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case n:u=!0}}if(u)return s=s(u=e),e=""===i?"."+E(u,0):i,w(s)?(o="",null!=e&&(o=e.replace(O,"$&/")+"/"),R(s,t,o,"",(function(e){return e}))):null!=s&&(x(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(O,"$&/")+"/")+e)),t.push(s)),1;if(u=0,i=""===i?".":i+":",w(e))for(var a=0;a<e.length;a++){var c=i+E(l=e[a],a);u+=R(l,t,o,c,s)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),a=0;!(l=e.next()).done;)u+=R(l=l.value,t,o,c=i+E(l,a++),s);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function C(e,t,r){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},F={transition:null},L={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:F,ReactCurrentOwner:j};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=s,t.PureComponent=v,t.StrictMode=i,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),i=e.key,s=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,l=j.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)S.call(t,a)&&!P.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==u?u[a]:t[a])}var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){u=Array(a);for(var c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}return{$$typeof:r,type:e.type,key:i,ref:s,props:o,_owner:l}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=F.transition;F.transition={};try{e()}finally{F.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,r){return I.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,r){return I.current.useReducer(e,t,r)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return I.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>l,ah:()=>i});var n=r(667294);const o=n.createContext({});function i(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function l({components:e,children:t,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||s:i(e),n.createElement(o.Provider,{value:l},t)}}}]);