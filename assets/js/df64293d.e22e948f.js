"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9665],{8964:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=t(4848),i=t(8453);const n={id:"create-field",sidebar_position:4,title:"copy",tags:["Core","Copy fields"]},c=void 0,s={id:"api/core/create-field",title:"copy",description:"Copies passed field",source:"@site/docs/api/core/copy.md",sourceDirName:"api/core",slug:"/api/core/create-field",permalink:"/effector-reform/docs/api/core/create-field",draft:!1,unlisted:!1,editUrl:"https://github.com/movpushmov/effector-reform/tree/main/docs/docs/api/core/copy.md",tags:[{label:"Core",permalink:"/effector-reform/docs/tags/core"},{label:"Copy fields",permalink:"/effector-reform/docs/tags/copy-fields"}],version:"current",sidebarPosition:4,frontMatter:{id:"create-field",sidebar_position:4,title:"copy",tags:["Core","Copy fields"]},sidebar:"apiSidebar",next:{title:"createField",permalink:"/effector-reform/docs/api/core/create-field"}},a={},l=[{value:"Formulae",id:"formulae",level:3},{value:"Examples",id:"examples",level:3}];function d(e){const o={code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p,{children:"Copies passed field"}),"\n",(0,r.jsx)(o.h3,{id:"formulae",children:"Formulae"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-ts",children:"export function copy<T extends PrimitiveField>(field: T): T;\nexport function copy<T extends ArrayField<any>>(field: T): T;\nexport function copy<T extends PrimitiveField | ArrayField<any>>(field: T): T;\n"})}),"\n",(0,r.jsx)(o.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-ts",children:'import { createField, copy } from "@effector-reform/core";\n\nconst field = createField(10);\nconst anotherField = copy(field);\n\nfield.change(20);\n\nconsole.log(field.$value.getState() === anotherField.$value.getState()); // false\n'})})]})}function p(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,o,t)=>{t.d(o,{R:()=>c,x:()=>s});var r=t(6540);const i={},n=r.createContext(i);function c(e){const o=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(n.Provider,{value:o},e.children)}}}]);