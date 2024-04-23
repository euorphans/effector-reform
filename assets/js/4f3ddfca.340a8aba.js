"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[254],{8727:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>o});var d=n(4848),i=n(8453);const t={id:"use-field",sidebar_position:1,title:"useField",tags:["React","Primary field"]},l=void 0,s={id:"api/react/use-field",title:"useField",description:"Use primary field model in react component",source:"@site/docs/api/react/use-field.md",sourceDirName:"api/react",slug:"/api/react/use-field",permalink:"/docs/api/react/use-field",draft:!1,unlisted:!1,editUrl:"https://github.com/movpushmov/effector-reform/tree/main/docs/docs/api/react/use-field.md",tags:[{label:"React",permalink:"/docs/tags/react"},{label:"Primary field",permalink:"/docs/tags/primary-field"}],version:"current",sidebarPosition:1,frontMatter:{id:"use-field",sidebar_position:1,title:"useField",tags:["React","Primary field"]},sidebar:"apiSidebar",previous:{title:"createForm",permalink:"/docs/api/core/create-form"},next:{title:"useArrayField",permalink:"/docs/api/react/use-array-field"}},c={},o=[{value:"Formulae",id:"formulae",level:3},{value:"Examples",id:"examples",level:3},{value:"API Reference",id:"api-reference",level:3}];function a(e){const r={code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.p,{children:"Use primary field model in react component"}),"\n",(0,d.jsx)(r.h3,{id:"formulae",children:"Formulae"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-ts",children:"function useField<T extends PrimaryField<any>>(field: T);\n"})}),"\n",(0,d.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,d.jsx)(r.pre,{children:(0,d.jsx)(r.code,{className:"language-tsx",children:'import { createField } from "@effector-reform/core";\nimport { useField } from "@effector-reform/react";\n\nconst nameField = createField(\'\');\n\nconst Field = () => {\n  const field = useField(nameField);\n\n  return (\n    <>\n      <input\n        value={field.value}\n        onChange={(event) => field.onChange(event.currentTarget.value)}\n        onBlur={field.onBlur}\n        onFocus={field.onFocus}\n      />\n    </>\n  );\n}\n'})}),"\n",(0,d.jsx)(r.h3,{id:"api-reference",children:"API Reference"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"name"}),(0,d.jsx)(r.th,{children:"type"}),(0,d.jsx)(r.th,{children:"description"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"value"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"T"})}),(0,d.jsx)(r.td,{children:"field value"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"error"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"FieldError"})}),(0,d.jsx)(r.td,{children:"field outer error"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"isValid"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"boolean"})}),(0,d.jsx)(r.td,{children:"is field valid"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"isDirty"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"boolean"})}),(0,d.jsx)(r.td,{children:"is field changed"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"onChangeError"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"(newError: FieldError) => void"})}),(0,d.jsx)(r.td,{children:"change field error"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"onChange"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"(newValue: T) => void"})}),(0,d.jsx)(r.td,{children:"change field value"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"onFocus"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"() => void"})}),(0,d.jsx)(r.td,{children:"focus field"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"onBlur"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"() => void"})}),(0,d.jsx)(r.td,{children:"blur field"})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>s});var d=n(6540);const i={},t=d.createContext(i);function l(e){const r=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),d.createElement(t.Provider,{value:r},e.children)}}}]);