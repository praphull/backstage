"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[216],{"../plugins/home/src/componentRenderers/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ComponentAccordion:()=>ComponentAccordion.D,ComponentTab:()=>ComponentTab,ComponentTabs:()=>ComponentTabs});var ComponentAccordion=__webpack_require__("../plugins/home/src/componentRenderers/ComponentAccordion.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),Tabs=__webpack_require__("../node_modules/@material-ui/core/esm/Tabs/Tabs.js"),Tab=__webpack_require__("../node_modules/@material-ui/core/esm/Tab/Tab.js"),InfoCard=__webpack_require__("../packages/core-components/src/layout/InfoCard/InfoCard.tsx");const ComponentTabs=props=>{const{title,tabs}=props,[value,setValue]=react.useState(0);return(0,jsx_runtime.jsxs)(InfoCard.r,{title,children:[(0,jsx_runtime.jsx)(Tabs.Z,{value,onChange:(_event,newValue)=>{setValue(newValue)},children:tabs.map((t=>(0,jsx_runtime.jsx)(Tab.Z,{label:t.label},t.label)))}),tabs.map((({Component},idx)=>(0,jsx_runtime.jsx)("div",{...idx!==value?{style:{display:"none"}}:{},children:(0,jsx_runtime.jsx)(Component,{})},idx)))]})};try{ComponentTabs.displayName="ComponentTabs",ComponentTabs.__docgenInfo={description:"",displayName:"ComponentTabs",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"TabType[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/home/src/componentRenderers/ComponentTabs/ComponentTabs.tsx#ComponentTabs"]={docgenInfo:ComponentTabs.__docgenInfo,name:"ComponentTabs",path:"../plugins/home/src/componentRenderers/ComponentTabs/ComponentTabs.tsx#ComponentTabs"})}catch(__react_docgen_typescript_loader_error){}const ComponentTab=props=>{const{title,Content,ContextProvider,...childProps}=props;return ContextProvider?(0,jsx_runtime.jsx)(ContextProvider,{...childProps,children:(0,jsx_runtime.jsx)(Content,{})}):(0,jsx_runtime.jsx)(Content,{})};try{ComponentTab.displayName="ComponentTab",ComponentTab.__docgenInfo={description:"",displayName:"ComponentTab",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},Content:{defaultValue:null,description:"",name:"Content",required:!0,type:{name:"() => Element"}},ContextProvider:{defaultValue:null,description:"",name:"ContextProvider",required:!1,type:{name:"(props: any) => Element"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/home/src/componentRenderers/ComponentTabs/ComponentTab.tsx#ComponentTab"]={docgenInfo:ComponentTab.__docgenInfo,name:"ComponentTab",path:"../plugins/home/src/componentRenderers/ComponentTabs/ComponentTab.tsx#ComponentTab"})}catch(__react_docgen_typescript_loader_error){}}}]);