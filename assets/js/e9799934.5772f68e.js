"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[482],{3048:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>a});var n=d(4848),i=d(8453);const s={id:"create-array-field",sidebar_position:3,title:"createArrayField",tags:["Core","Array field"]},l=void 0,t={id:"api/core/create-array-field",title:"createArrayField",description:"Creates field, which contains an array of primary values (check createField api docs) or an array of objects with subfields",source:"@site/docs/api/core/create-array-field.md",sourceDirName:"api/core",slug:"/api/core/create-array-field",permalink:"/docs/api/core/create-array-field",draft:!1,unlisted:!1,editUrl:"https://github.com/movpushmov/effector-reform/tree/main/docs/docs/api/core/create-array-field.md",tags:[{label:"Core",permalink:"/docs/tags/core"},{label:"Array field",permalink:"/docs/tags/array-field"}],version:"current",sidebarPosition:3,frontMatter:{id:"create-array-field",sidebar_position:3,title:"createArrayField",tags:["Core","Array field"]},sidebar:"apiSidebar",previous:{title:"createField",permalink:"/docs/api/core/create-field"},next:{title:"createForm",permalink:"/docs/api/core/create-form"}},c={},a=[{value:"Formulae",id:"formulae",level:3},{value:"Examples",id:"examples",level:3},{value:"Limitations",id:"limitations",level:3},{value:"API reference",id:"api-reference",level:3}];function o(e){const r={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Creates field, which contains an array of primary values (check ",(0,n.jsx)(r.a,{href:"./create-field",children:"createField api docs"}),") or an array of objects with subfields"]}),"\n",(0,n.jsx)(r.h3,{id:"formulae",children:"Formulae"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"interface CreateArrayFieldOptions {\n  forkOnCreateForm?: boolean;\n  clearOuterErrorOnChange?: boolean;\n}\n\nfunction createArrayField<\n  T extends PrimaryValue | AnySchema,\n  Value = UserFormSchema<T>,\n>(values: T[], overrides?: CreateArrayFieldOptions): ArrayField<T, Value>;\n"})}),"\n",(0,n.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:'import { createArrayField } from "@effector-reform/core";\nimport { createEvent, sample, createEffect } from "effector";\n\nconst arrayFieldPrimary = createArrayField<number>([]);\nconst addNumber = createEvent<number>();\n\nconst logFx = createEffect(console.log);\n\nsample({\n  clock: addNumber,\n  target: arrayFieldPrimary.push,\n});\n\nsample({\n  clock: arrayFieldPrimary.changed,\n  target: logFx,\n});\n\naddNumber(10); // logFx -> [10]\naddNumber(20); // logFx -> [10, 20]\n'})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"array field with primary values"})}),"\n",(0,n.jsx)(r.h3,{id:"limitations",children:"Limitations"}),"\n",(0,n.jsxs)(r.p,{children:["By the some reasons, you can't use dynamic array field subfields in\neffector logic, cause the sample/split/etc target must be static. But\nyou can use prime values from ",(0,n.jsx)(r.code,{children:"form"})," or in ",(0,n.jsx)(r.code,{children:"validation"})," or in ",(0,n.jsx)(r.code,{children:"react"})," with ",(0,n.jsx)(r.code,{children:"@effector-reform/react"})]}),"\n",(0,n.jsx)(r.h3,{id:"api-reference",children:"API reference"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"T \u2014 raw item type, U \u2014 ready schema type"}),(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(r.em,{children:[(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"Note"})}),": you can use any variant of schema values in array field api"]})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"field.change([10])\nfield.change([{ name: 'John' }])\nfield.change([{ name: createField('John') }])\nfield.change([{ names: createArrayField<string>(['John']) }])\n"})}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"name"}),(0,n.jsx)(r.th,{children:"type"}),(0,n.jsx)(r.th,{children:"description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"changeError"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"EventCallable<FieldError>"})}),(0,n.jsx)(r.td,{children:"change outer array field error"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"change"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"EventCallable<T[]>"})}),(0,n.jsxs)(r.td,{children:["change array field values, like:",(0,n.jsx)("br",{}),(0,n.jsx)(r.code,{children:"field.change([10, 20])"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"push"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"EventCallable<PushPayload<T>>"})}),(0,n.jsxs)(r.td,{children:["push item at the and of array, like:",(0,n.jsx)("br",{}),(0,n.jsx)(r.code,{children:"field.push(10)"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"swap"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"EventCallable<SwapPayload>"})}),(0,n.jsxs)(r.td,{children:["swap items by indexes, like:",(0,n.jsx)("br",{}),(0,n.jsx)(r.code,{children:"field.swap({ indexA: 2, indexB: 10 })"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"move"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"EventCallable<MovePayload>"})}),(0,n.jsxs)(r.td,{children:["move item by indexes, like:",(0,n.jsx)("br",{}),(0,n.jsx)(r.code,{children:"field.move({ from: 2, to: 10 })"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"insert"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"EventCallable<InsertOrReplacePayload<T>>"})}),(0,n.jsxs)(r.td,{children:["insert item at the index, like:",(0,n.jsx)("br",{}),(0,n.jsx)(r.code,{children:"field.insert({ index: 2, value: 10 })"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"unshift"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"EventCallable<UnshiftPayload<T>>"})}),(0,n.jsxs)(r.td,{children:["unshift value (place at the start), like:",(0,n.jsx)("br",{}),(0,n.jsx)(r.code,{children:"field.unshift(2)"}),(0,n.jsx)("br",{}),"or",(0,n.jsx)("br",{}),(0,n.jsx)(r.code,{children:"field.unshift([2, 4])"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"remove"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"EventCallable<RemovePayload>"})}),(0,n.jsxs)(r.td,{children:["remove item by index, like:",(0,n.jsx)("br",{}),(0,n.jsx)(r.code,{children:"field.remove({ index: 10 })"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"pop"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"EventCallable<void>"})}),(0,n.jsxs)(r.td,{children:["pop item (remove last element), like:",(0,n.jsx)("br",{}),(0,n.jsx)(r.code,{children:"field.pop()"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"replace"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"EventCallable<InsertOrReplacePayload<T>>"})}),(0,n.jsxs)(r.td,{children:["replace item by index, like:",(0,n.jsx)("br",{}),(0,n.jsx)(r.code,{children:"field.replace({ index: 2, value: 10 })"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"reset"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"EventCallable<void>"})}),(0,n.jsx)(r.td,{children:"reset field values"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"changed"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Event<U[]>"})}),(0,n.jsx)(r.td,{children:"triggered when values changed"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"errorChanged"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Event<FieldError>"})}),(0,n.jsx)(r.td,{children:"triggered when outer or inner error changed"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"pushed"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Event<{ params: PushPayload<T>; result: U[] }>"})}),(0,n.jsx)(r.td,{children:"triggered when pushed"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"swapped"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Event<{ params: SwapPayload; result: U[] }>"})}),(0,n.jsx)(r.td,{children:"triggered when swapped"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"moved"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Event<{ params: MovePayload; result: U[] }>"})}),(0,n.jsx)(r.td,{children:"triggered when moved"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"inserted"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Event<{ params: InsertOrReplacePayload<T>; result: U[]; }>"})}),(0,n.jsx)(r.td,{children:"triggered when inserted"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"unshifted"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Event<{ params: UnshiftPayload<T>; result: U[]; }>"})}),(0,n.jsx)(r.td,{children:"triggered when unshifted"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"removed"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Event<{ params: RemovePayload; result: U[] }>"})}),(0,n.jsx)(r.td,{children:"triggered when removed"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"popped"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Event<U[]>"})}),(0,n.jsx)(r.td,{children:"triggered when popped"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"replaced"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Event<{ params: InsertOrReplacePayload<T>; result: U[]; }>"})}),(0,n.jsx)(r.td,{children:"triggered when replaced"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"$values"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Store<U[]>"})}),(0,n.jsx)(r.td,{children:"primary values (or objects with subfields)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"$error"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Store<FieldError>"})}),(0,n.jsx)(r.td,{children:"error of array field"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"$isDirty"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Store<boolean>"})}),(0,n.jsx)(r.td,{children:"is field changed"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"$isValid"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Store<boolean>"})}),(0,n.jsx)(r.td,{children:"is field valid"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fork"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"(options?: CreateArrayFieldOptions) => ArrayField<T>"})}),(0,n.jsx)(r.td,{children:"fork field (create field independent copy)"})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,r,d)=>{d.d(r,{R:()=>l,x:()=>t});var n=d(6540);const i={},s=n.createContext(i);function l(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);