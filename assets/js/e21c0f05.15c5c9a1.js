/*! For license information please see e21c0f05.15c5c9a1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[821287],{4721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(824246),s=n(511151);const o={id:"custom-rules",title:"Defining custom permission rules",description:"How to define custom permission rules for existing resources"},i=void 0,a={id:"permissions/custom-rules",title:"Defining custom permission rules",description:"How to define custom permission rules for existing resources",source:"@site/../docs/permissions/custom-rules.md",sourceDirName:"permissions",slug:"/permissions/custom-rules",permalink:"/docs/permissions/custom-rules",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/permissions/custom-rules.md",tags:[],version:"current",frontMatter:{id:"custom-rules",title:"Defining custom permission rules",description:"How to define custom permission rules for existing resources"},sidebar:"docs",previous:{title:"Frontend Integration",permalink:"/docs/permissions/frontend-integration"},next:{title:"1. Tutorial setup",permalink:"/docs/permissions/plugin-authors/01-setup"}},u={},c=[{value:"Define a custom rule",id:"define-a-custom-rule",level:2},{value:"Provide the rule during plugin setup",id:"provide-the-rule-during-plugin-setup",level:2},{value:"Use the rule in a policy",id:"use-the-rule-in-a-policy",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",h2:"h2",pre:"pre",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["For some use cases, you may want to define custom ",(0,r.jsx)(t.a,{href:"/docs/permissions/concepts#resources-and-rules",children:"rules"})," in addition to the ones provided by a plugin. In the ",(0,r.jsx)(t.a,{href:"/docs/permissions/writing-a-policy",children:"previous section"})," we used the ",(0,r.jsx)(t.code,{children:"isEntityOwner"})," rule to control access for catalog entities. Let's extend this policy with a custom rule that checks what ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/system-model#system",children:"system"})," an entity is part of."]}),"\n",(0,r.jsx)(t.h2,{id:"define-a-custom-rule",children:"Define a custom rule"}),"\n",(0,r.jsxs)(t.p,{children:["Plugins should export a rule factory that provides type-safety that ensures compatibility with the plugin's backend. The catalog plugin exports ",(0,r.jsx)(t.code,{children:"createCatalogPermissionRule"})," from ",(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-backend/alpha"})," for this purpose. Note: the ",(0,r.jsx)(t.code,{children:"/alpha"})," path segment is temporary until this API is marked as stable. For this example, we'll define the rule in ",(0,r.jsx)(t.code,{children:"packages/backend/src/customPermissionRules/isInSystem.ts"}),", but you can put it anywhere that's accessible by your ",(0,r.jsx)(t.code,{children:"backend"})," package."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:'title="packages/backend/src/customPermissionRules/isInSystem.ts"',children:"import type { Entity } from '@backstage/catalog-model';\nimport { createCatalogPermissionRule } from '@backstage/plugin-catalog-backend/alpha';\nimport { createConditionFactory } from '@backstage/plugin-permission-node';\nimport { z } from 'zod';\n\nexport const isInSystemRule = createCatalogPermissionRule({\n  name: 'IS_IN_SYSTEM',\n  description: 'Checks if an entity is part of the system provided',\n  resourceType: 'catalog-entity',\n  paramsSchema: z.object({\n    systemRef: z\n      .string()\n      .describe('SystemRef to check the resource is part of'),\n  }),\n  apply: (resource: Entity, { systemRef }) => {\n    if (!resource.relations) {\n      return false;\n    }\n\n    return resource.relations\n      .filter(relation => relation.type === 'partOf')\n      .some(relation => relation.targetRef === systemRef);\n  },\n  toQuery: ({ systemRef }) => ({\n    key: 'relations.partOf',\n    values: [systemRef],\n  }),\n});\n\nexport const isInSystemRuleFactory = createConditionFactory(isInSystemRule);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["For a more detailed explanation on defining rules, refer to the ",(0,r.jsx)(t.a,{href:"/docs/permissions/plugin-authors/03-adding-a-resource-permission-check#adding-support-for-conditional-decisions",children:"documentation for plugin authors"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"provide-the-rule-during-plugin-setup",children:"Provide the rule during plugin setup"}),"\n",(0,r.jsxs)(t.p,{children:["Now that we have a custom rule defined, we need provide it to the catalog plugin. This step is important because the catalog plugin will use the rule's ",(0,r.jsx)(t.code,{children:"toQuery"})," and ",(0,r.jsx)(t.code,{children:"apply"})," methods while evaluating conditional authorize results. There's no guarantee that the catalog and permission backends are running on the same server, so we must explicitly link the rule to ensure that it's available at runtime."]}),"\n",(0,r.jsxs)(t.p,{children:["The api for providing custom rules may differ between plugins, but there should typically be some integration point during the creation of the backend router. For the catalog, this integration point is exposed via ",(0,r.jsx)(t.code,{children:"CatalogBuilder.addPermissionRules"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"import { CatalogBuilder } from '@backstage/plugin-catalog-backend';\nimport { isInSystemRule } from '../customPermissionRules/isInSystem';\n\n...\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n  builder.addPermissionRules(isInSystemRule);\n  ...\n  return router;\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"The new rule is now ready for use in a permission policy!"}),"\n",(0,r.jsx)(t.h2,{id:"use-the-rule-in-a-policy",children:"Use the rule in a policy"}),"\n",(0,r.jsx)(t.p,{children:"Let's bring this all together by extending the example policy from the previous section."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/permission.ts"',children:"...\n/* highlight-add-next-line */\nimport { isInSystemRuleFactory } from '../customPermissionRules/isInSystem';\n\nclass TestPermissionPolicy implements PermissionPolicy {\n  async handle(\n    request: PolicyQuery,\n    user?: BackstageIdentityResponse,\n  ): Promise<PolicyDecision> {\n    if (isResourcePermission(request.permission, 'catalog-entity')) {\n      return createCatalogConditionalDecision(\n        request.permission,\n        /* highlight-remove-start */\n        catalogConditions.isEntityOwner({\n          claims: user?.identity.ownershipEntityRefs ?? [],\n        }),\n        /* highlight-remove-end */\n        /* highlight-add-start */\n        {\n          anyOf: [\n            catalogConditions.isEntityOwner({\n              claims: user?.identity.ownershipEntityRefs ?? []\n            }),\n            isInSystemRuleFactory({ systemRef: 'interviewing' }),\n          ]\n        }\n        /* highlight-add-end */\n      );\n    }\n\n    return { result: AuthorizeResult.ALLOW };\n  }\n}\n\n...\n"})}),"\n",(0,r.jsx)(t.p,{children:"The updated policy will allow catalog entity resource permissions if any of the following are true:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"User owns the target entity"}),"\n",(0,r.jsxs)(t.li,{children:["Target entity is part of the ",(0,r.jsx)(t.code,{children:"'interviewing'"})," system"]}),"\n"]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},371426:(e,t,n)=>{var r=n(827378),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!u.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:c,ref:l,props:o,_owner:a.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var x=v.prototype=new b;x.constructor=v,h(x,g.prototype),x.isPureReactComponent=!0;var _=Array.isArray,k=Object.prototype.hasOwnProperty,w={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,r){var s,o={},i=null,a=null;if(null!=t)for(s in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,s)&&!j.hasOwnProperty(s)&&(o[s]=t[s]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}if(e&&e.defaultProps)for(s in u=e.defaultProps)void 0===o[s]&&(o[s]=u[s]);return{$$typeof:n,type:e,key:i,ref:a,props:o,_owner:w.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,s,o,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return i=i(u=e),e=""===o?"."+E(u,0):o,_(i)?(s="",null!=e&&(s=e.replace(P,"$&/")+"/"),C(i,t,s,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,s+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(u=0,o=""===o?".":o+":",_(e))for(var c=0;c<e.length;c++){var l=o+E(a=e[c],c);u+=C(a,t,s,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(a=e.next()).done;)u+=C(a=a.value,t,s,l=o+E(a,c++),i);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function O(e,t,n){if(null==e)return e;var r=[],s=0;return C(e,r,"","",(function(e){return t.call(n,e,s++)})),r}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},T={transition:null},F={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:T,ReactCurrentOwner:w};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=s,t.Profiler=i,t.PureComponent=v,t.StrictMode=o,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=h({},e.props),o=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=w.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)k.call(t,c)&&!j.hasOwnProperty(c)&&(s[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)s.children=r;else if(1<c){u=Array(c);for(var l=0;l<c;l++)u[l]=arguments[l+2];s.children=u}return{$$typeof:n,type:e.type,key:o,ref:i,props:s,_owner:a}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=R,t.createFactory=function(e){var t=R.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return $.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>o});var r=n(667294);const s=r.createContext({});function o(e){const t=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||i:o(e),r.createElement(s.Provider,{value:a},t)}}}]);