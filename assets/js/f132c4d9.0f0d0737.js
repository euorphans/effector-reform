"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7599],{2263:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>t,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=d(4848),i=d(8453);const a={id:"use-array-field",sidebar_position:2,title:"useArrayField",tags:["React","Array field"]},s=void 0,c={id:"api/react/use-array-field",title:"useArrayField",description:"Use array field model in react component",source:"@site/docs/api/react/use-array-field.md",sourceDirName:"api/react",slug:"/api/react/use-array-field",permalink:"/effector-reform/docs/api/react/use-array-field",draft:!1,unlisted:!1,editUrl:"https://github.com/movpushmov/effector-reform/tree/main/docs/docs/api/react/use-array-field.md",tags:[{label:"React",permalink:"/effector-reform/docs/tags/react"},{label:"Array field",permalink:"/effector-reform/docs/tags/array-field"}],version:"current",sidebarPosition:2,frontMatter:{id:"use-array-field",sidebar_position:2,title:"useArrayField",tags:["React","Array field"]},sidebar:"apiSidebar",previous:{title:"useField",permalink:"/effector-reform/docs/api/react/use-field"},next:{title:"useForm",permalink:"/effector-reform/docs/api/react/use-form"}},t={},l=[{value:"Formulae",id:"formulae",level:3},{value:"Examples",id:"examples",level:3},{value:"API Reference",id:"api-reference",level:3}];function o(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Use array field model in react component"}),"\n",(0,n.jsx)(r.h3,{id:"formulae",children:"Formulae"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"function useArrayField<\n  T extends ArrayField<any>,\n  Value extends ArrayFieldItemType = T extends ArrayField<any, any, infer D>\n    ? D\n    : never,\n  Meta extends object = T extends ArrayField<any, infer D> ? D : any,\n>(field: T): ReactArrayFieldApi<Value, Meta>\n"})}),"\n",(0,n.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:'import { createArrayField, createField } from "@effector-reform/core";\nimport { useArrayField, useField } from "@effector-reform/react";\nimport { useCallback } from "react";\n\nconst newIncomeField = createField(0);\nconst incomesField = createArrayField<number>([]);\n\nconst Field = () => {\n  const newIncome = useField(newIncomeField);\n  const incomes = useArrayField(incomesField);\n\n  const addIncome = useCallback(() => {\n    incomes.push(newIncome.value);\n    newIncome.reset();\n  }, [newIncome.value, incomes.push]);\n\n  return (\n    <>\n      <p>My budget</p>\n\n      <div>\n        {incomes.values.map(income => <span>${income}</span>)}\n      </div>\n\n      <p>add income</p>\n\n      <input\n        type="number"\n        value={newIncome.value}\n        onChange={(event) => newIncome.onChange(parseInt(event.currentTarget.value))}\n      />\n\n      <button onClick={addIncome}>\n        add\n      </button>\n    </>\n  )\n}\n'})}),"\n",(0,n.jsx)(r.h3,{id:"api-reference",children:"API Reference"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"name"}),(0,n.jsx)(r.th,{children:"type"}),(0,n.jsx)(r.th,{children:"description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"values"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"(T extends ReadyFieldsGroupSchema ? ReactFields<T> : T)[]"})}),(0,n.jsx)(r.td,{children:"array field values"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"meta"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Meta"})}),(0,n.jsx)(r.td,{children:"array field meta"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"error"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"FieldError"})}),(0,n.jsx)(r.td,{children:"array field error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"isValid"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"boolean"})}),(0,n.jsx)(r.td,{children:"is array field valid"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"isDirty"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"boolean"})}),(0,n.jsx)(r.td,{children:"is array field changed"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"onReset"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"() => void"})}),(0,n.jsx)(r.td,{children:"reset array field values"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"onChange"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"(values: Payload[]) => void"})}),(0,n.jsx)(r.td,{children:"change array field values"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"onChangeError"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"(error: FieldError) => void"})}),(0,n.jsx)(r.td,{children:"change array field outer error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"onChangeMeta"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"(meta: Meta) => void"})}),(0,n.jsx)(r.td,{children:"change field meta"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"onPush"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"(payload: PushPayload<Payload>) => void"})}),(0,n.jsxs)(r.td,{children:["push item ",(0,n.jsx)(r.a,{href:"../core/create-array-field",children:"reference"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"onSwap"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"(payload: SwapPayload) => void"})}),(0,n.jsxs)(r.td,{children:["swap items ",(0,n.jsx)(r.a,{href:"../core/create-array-field",children:"reference"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"onMove"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"(payload: MovePayload) => void"})}),(0,n.jsxs)(r.td,{children:["move item ",(0,n.jsx)(r.a,{href:"../core/create-array-field",children:"reference"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"onInsert"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"(payload: InsertOrReplacePayload<Payload>) => void"})}),(0,n.jsxs)(r.td,{children:["insert item ",(0,n.jsx)(r.a,{href:"../core/create-array-field",children:"reference"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"onUnshift"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"(payload: UnshiftPayload<Payload>) => void"})}),(0,n.jsxs)(r.td,{children:["unshift item(s) ",(0,n.jsx)(r.a,{href:"../core/create-array-field",children:"reference"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"onRemove"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"(payload: RemovePayload) => void"})}),(0,n.jsxs)(r.td,{children:["remove item ",(0,n.jsx)(r.a,{href:"../core/create-array-field",children:"reference"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"onPop"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"(payload: void) => void"})}),(0,n.jsxs)(r.td,{children:["pop item ",(0,n.jsx)(r.a,{href:"../core/create-array-field",children:"reference"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"onReplace"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"(payload: InsertOrReplacePayload<Payload>) => void"})}),(0,n.jsxs)(r.td,{children:["replace item ",(0,n.jsx)(r.a,{href:"../core/create-array-field",children:"reference"})]})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,r,d)=>{d.d(r,{R:()=>s,x:()=>c});var n=d(6540);const i={},a=n.createContext(i);function s(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);