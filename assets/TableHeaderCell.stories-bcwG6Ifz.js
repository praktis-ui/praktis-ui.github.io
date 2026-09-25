import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./tooltip-D6AQNFSz.js";import{n as i,t as a}from"./Checkbox-BZ8dNFdo.js";import{l as o,n as s,u as c}from"./iframe-r_k3QGfr.js";import{a as l,n as u,o as d,r as f,t as p}from"./TableHeaderAtoms-DbOpa6WD.js";import{n as m,t as h}from"./useFitText--KNQ3aVK.js";var g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{g=`_cell_1hws9_20`,_=`_large_1hws9_32`,v=`_medium_1hws9_36`,y=`_small_1hws9_40`,b=`_left_1hws9_44`,x=`_right_1hws9_48`,S=`_wrapper_1hws9_52`,C=`_title_1hws9_72`,w=`_atoms_1hws9_91`,T={cell:g,large:_,medium:v,small:y,left:b,right:x,wrapper:S,title:C,atoms:w}})))()}function D({title:e,size:t=`large`,position:n=`center`,checkbox:i,shevron:o,sort:s,search:l,className:d,...h}){let g=(0,O.useRef)(null),{shown:_,truncated:v}=m(e,g,2),y=(0,k.jsx)(`span`,{ref:g,className:T.title,children:_});return(0,k.jsx)(`div`,{...h,className:[T.cell,T[t],n!==`center`&&T[n],d].filter(Boolean).join(` `),children:(0,k.jsxs)(`div`,{className:T.wrapper,children:[i&&(0,k.jsx)(a,{checked:i.checked,indeterminate:i.indeterminate,disabled:i.disabled,"aria-label":`Выбрать все`,onChange:e=>i.onChange(e.target.checked)}),o&&(0,k.jsx)(u,{open:o.open,onClick:o.onToggle}),(0,k.jsx)(r,{title:v?e:``,color:c.tooltipBg,children:y}),(s||l)&&(0,k.jsxs)(`span`,{className:T.atoms,children:[s&&(0,k.jsx)(f,{order:s.order,onClick:s.onChange}),l&&(0,k.jsx)(p,{active:l.active,onClick:l.onClick})]})]})})}var O,k;function A(){return(A=e((()=>{n(),O=t(),o(),i(),E(),l(),h(),k=s(),D.__docgenInfo={description:``,methods:[],displayName:`TableHeaderCell`,props:{title:{required:!0,tsType:{name:`ReactNode`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'large' | 'medium' | 'small'`,elements:[{name:`literal`,value:`'large'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'small'`}]},description:``,defaultValue:{value:`'large'`,computed:!1}},position:{required:!1,tsType:{name:`union`,raw:`'left' | 'center' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'right'`}]},description:``,defaultValue:{value:`'center'`,computed:!1}},checkbox:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ checked: boolean; indeterminate?: boolean; disabled?: boolean; onChange: (checked: boolean) => void }`,signature:{properties:[{key:`checked`,value:{name:`boolean`,required:!0}},{key:`indeterminate`,value:{name:`boolean`,required:!1}},{key:`disabled`,value:{name:`boolean`,required:!1}},{key:`onChange`,value:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}},required:!0}}]}},description:`Чекбокс «выбрать все строки». Не передан — чекбокса нет.`},shevron:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ open: boolean; onToggle: () => void }`,signature:{properties:[{key:`open`,value:{name:`boolean`,required:!0}},{key:`onToggle`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}}]}},description:`Шеврон «раскрыть/свернуть все». Не передан — шеврона нет.`},sort:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ order: SortOrder; onChange: () => void }`,signature:{properties:[{key:`order`,value:{name:`union`,raw:`'ascend' | 'descend' | null`,elements:[{name:`literal`,value:`'ascend'`},{name:`literal`,value:`'descend'`},{name:`null`}],required:!0}},{key:`onChange`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}}]}},description:"Сортировка. Не передана — стрелок нет. `order: null` — колонка сортируемая, но не отсортирована."},search:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ active: boolean; onClick: () => void }`,signature:{properties:[{key:`active`,value:{name:`boolean`,required:!0}},{key:`onClick`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}}]}},description:`Поиск по колонке. Не передан — лупы нет.`}},composes:[`Omit`]}})))()}function j(e){let{withCheckbox:t=!1,withShevron:n=!1,withSort:r=!0,withSearch:i=!0,...a}=e,[o,s]=(0,P.useState)(null),[c,l]=(0,P.useState)(!1),[u,f]=(0,P.useState)(!1),[p,m]=(0,P.useState)(!1);return(0,F.jsx)(D,{title:`Table header`,...a,checkbox:t?{checked:p,onChange:m}:void 0,shevron:n?{open:u,onToggle:()=>f(e=>!e)}:void 0,sort:r?{order:o,onChange:()=>s(d)}:void 0,search:i?{active:c,onClick:()=>l(e=>!e)}:void 0})}function M(){let e={fontSize:12,color:`#7e7e7e`,textAlign:`center`},t={fontSize:12,color:`#7e7e7e`},n={display:`flex`,justifyContent:`center`},r=(0,F.jsx)(`span`,{style:{...n,color:`#cbcbcb`,fontSize:12},children:`нет`});return(0,F.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`120px repeat(4, 110px)`,rowGap:18,alignItems:`center`,fontFamily:`Inter, sans-serif`},children:[(0,F.jsx)(`span`,{}),(0,F.jsx)(`span`,{style:e,children:`Default`}),(0,F.jsx)(`span`,{style:e,children:`Hover`}),(0,F.jsx)(`span`,{style:e,children:`Actived`}),(0,F.jsx)(`span`,{style:e,children:`Actived-Hover`}),(0,F.jsx)(`span`,{style:t,children:`Sort · вниз`}),(0,F.jsx)(`span`,{style:n,children:(0,F.jsx)(f,{})}),(0,F.jsx)(`span`,{style:n,children:(0,F.jsx)(f,{hovered:!0})}),(0,F.jsx)(`span`,{style:n,children:(0,F.jsx)(f,{order:`descend`})}),(0,F.jsx)(`span`,{style:n,children:(0,F.jsx)(f,{order:`descend`,hovered:!0})}),(0,F.jsx)(`span`,{style:t,children:`Sort · вверх`}),r,r,(0,F.jsx)(`span`,{style:n,children:(0,F.jsx)(f,{order:`ascend`})}),(0,F.jsx)(`span`,{style:n,children:(0,F.jsx)(f,{order:`ascend`,hovered:!0})}),(0,F.jsx)(`span`,{style:t,children:`Search`}),(0,F.jsx)(`span`,{style:n,children:(0,F.jsx)(p,{})}),(0,F.jsx)(`span`,{style:n,children:(0,F.jsx)(p,{hovered:!0})}),(0,F.jsx)(`span`,{style:n,children:(0,F.jsx)(p,{active:!0})}),(0,F.jsx)(`span`,{style:n,children:(0,F.jsx)(p,{active:!0,hovered:!0})}),(0,F.jsx)(`span`,{style:t,children:`Shevron · свёрнут`}),(0,F.jsx)(`span`,{style:n,children:(0,F.jsx)(u,{})}),(0,F.jsx)(`span`,{style:n,children:(0,F.jsx)(u,{hovered:!0})}),r,r,(0,F.jsx)(`span`,{style:t,children:`Shevron · раскрыт`}),(0,F.jsx)(`span`,{style:n,children:(0,F.jsx)(u,{open:!0})}),(0,F.jsx)(`span`,{style:n,children:(0,F.jsx)(u,{open:!0,hovered:!0})}),r,r]})}function N(e){let[t,n]=(0,P.useState)(null),[r,i]=(0,P.useState)(!1),[a,o]=(0,P.useState)(!1),[s,c]=(0,P.useState)(!1);return(0,F.jsx)(`div`,{style:{width:240},children:(0,F.jsx)(D,{title:`Table header`,position:e.checkbox||e.shevron?`left`:`center`,checkbox:e.checkbox?{checked:s,onChange:c}:void 0,shevron:e.shevron?{open:a,onToggle:()=>o(e=>!e)}:void 0,sort:e.sort?{order:t,onChange:()=>n(d)}:void 0,search:e.search?{active:r,onClick:()=>i(e=>!e)}:void 0})})}var P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{P=t(),l(),A(),F=s(),I={title:`UI Kit/Table/HeaderCell`,component:D,parameters:{layout:`padded`,docs:{description:{component:`
Источник — Figma UI Kit «Практис»: **Table / Table-item / Table-header** (node 1641:3592) и
**Header's atoms** — Shevron, Sort, Search. Первый этап таблицы: атомы и ячейка шапки как
самостоятельные компоненты, из них потом собирается шапка таблицы.

## Атомы

Кнопки 16×16, у каждого своя реакция на ховер. Цвета по состояниям у всех одинаковые:
покой \`icon/grey-default\` → ховер \`text/grey-secondary\` → активен \`icon/accent-default\` →
активен и под курсором \`icon/accent-hover\`.

- **Sort** — две стрелки. При активной сортировке синей становится только стрелка направления.
  Порядок — те же значения, что у antd Table: \`ascend\` / \`descend\` / \`null\`.
- **Search** — лупа; «включён» — поиск по колонке активен.
- **Shevron** — раскрыть/свернуть вложенные строки; на ховере акцентный, как в описании
  макета. Вариант \`Type=No\` — пустое место под шеврон у строки без вложенностей.

**Filter** из того же набора пока не делаем.

## Ячейка шапки

Слоты в порядке макета: чекбокс «выбрать все» → шеврон → заголовок → сортировка → поиск.
Каждый включается своим пропом — в Figma это скрытые слои одного компонента.

- \`size\` — large / medium / small: 54 / 46 / 38px.
- \`position\` — где колонка стоит: \`left\` скругляет левый верхний угол и убирает левый
  разделитель, \`right\` — правый, \`center\` — разделители с обеих сторон.
- Длинный заголовок — как в макете, всегда до двух строк. Влез — показывается целиком
  («с расширением столбца»). Не влез — отточие в конце второй строки, посреди слова, как в
  макете, и полный текст в тултипе («не помещается»).

Своего ховера у шапки нет — меняются только атомы (описание в макете).
`}}},tags:[`autodocs`],argTypes:{title:{control:`text`,description:`Текст заголовка.`},size:{control:`inline-radio`,options:[`large`,`medium`,`small`]},position:{control:`inline-radio`,options:[`left`,`center`,`right`]},withCheckbox:{control:`boolean`,name:`чекбокс «выбрать все»`,table:{category:`Слоты`}},withShevron:{control:`boolean`,name:`шеврон «раскрыть все»`,table:{category:`Слоты`}},withSort:{control:`boolean`,name:`сортировка`,table:{category:`Слоты`}},withSearch:{control:`boolean`,name:`поиск`,table:{category:`Слоты`}},checkbox:{control:!1,table:{category:`Для разработчиков — передаётся из кода`}},shevron:{control:!1,table:{category:`Для разработчиков — передаётся из кода`}},sort:{control:!1,table:{category:`Для разработчиков — передаётся из кода`}},search:{control:!1,table:{category:`Для разработчиков — передаётся из кода`}}},args:{title:`Table header`,size:`large`,position:`left`,withCheckbox:!1,withShevron:!1,withSort:!0,withSearch:!0}},L={parameters:{docs:{description:{story:`Слоты включаются переключателями в панели «Слоты». Всё кликается: сортировка идёт по кругу нет → по возрастанию → по убыванию → нет.`}}},render:e=>(0,F.jsx)(`div`,{style:{width:240},children:(0,F.jsx)(j,{...e})})},R={parameters:{docs:{description:{story:"Все состояния атомов из макета. Ховер здесь показан принудительно, чтобы состояния стояли рядом; вживую он работает от мыши. У шеврона нет «активного» — он только меняет направление. Вариант `Type=No` — пустое место под шеврон, в матрице его не видно."}}},render:()=>(0,F.jsx)(M,{})},z={render:()=>(0,F.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 240px)`,gap:16},children:[`large`,`medium`,`small`].flatMap(e=>[`left`,`center`,`right`].map(t=>(0,F.jsx)(j,{size:e,position:t},e+t)))})},B={parameters:{docs:{description:{story:`Чекбокс «выбрать все», шеврон «раскрыть все», только сортировка, только поиск и всё вместе. Всё кликается.`}}},render:()=>(0,F.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:16},children:[(0,F.jsx)(N,{checkbox:!0}),(0,F.jsx)(N,{shevron:!0}),(0,F.jsx)(N,{sort:!0}),(0,F.jsx)(N,{search:!0}),(0,F.jsx)(N,{checkbox:!0,shevron:!0,sort:!0,search:!0})]})},V=[`Короткий заголовок`,`Заголовок столбца, который переносится`,`Пример заголовка столбца с длинным текстом, который не помещается`],H={parameters:{docs:{description:{story:`Одна ширина колонки, разная длина заголовка. Короткий — в одну строку. Длиннее — переносится на вторую. Не влез и в две — отточие в конце второй строки и полный текст в тултипе при наведении.`}}},render:()=>(0,F.jsx)(`div`,{style:{display:`flex`,gap:16,alignItems:`flex-start`},children:V.map(e=>(0,F.jsx)(`div`,{style:{width:240},children:(0,F.jsx)(j,{title:e,withSearch:!1})},e))})},U={render:()=>(0,F.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`200px 360px 160px 180px`},children:[(0,F.jsx)(j,{title:`Номер договора`,position:`left`,withCheckbox:!0}),(0,F.jsx)(j,{title:`Объект`}),(0,F.jsx)(j,{title:`Дата договора`}),(0,F.jsx)(j,{title:`Статус`,position:`right`})]})},W=[`Playground`,`Atoms`,`SizesAndPositions`,`Variants`,`LongTitle`,`AsHeaderRow`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Слоты включаются переключателями в панели «Слоты». Всё кликается: сортировка идёт по кругу нет → по возрастанию → по убыванию → нет.'
      }
    }
  },
  render: args => <div style={{
    width: 240
  }}>
      <LiveCell {...args} />
    </div>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Все состояния атомов из макета. Ховер здесь показан принудительно, чтобы состояния стояли рядом; вживую он работает от мыши. У шеврона нет «активного» — он только меняет направление. Вариант \`Type=No\` — пустое место под шеврон, в матрице его не видно.'
      }
    }
  },
  render: () => <AtomMatrix />
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 240px)',
    gap: 16
  }}>
      {(['large', 'medium', 'small'] satisfies TableHeaderSize[]).flatMap(size => (['left', 'center', 'right'] satisfies TableHeaderPosition[]).map(position => <LiveCell key={size + position} size={size} position={position} />))}
    </div>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Чекбокс «выбрать все», шеврон «раскрыть все», только сортировка, только поиск и всё вместе. Всё кликается.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16
  }}>
      <VariantCell checkbox />
      <VariantCell shevron />
      <VariantCell sort />
      <VariantCell search />
      <VariantCell checkbox shevron sort search />
    </div>
}`,...B.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Одна ширина колонки, разная длина заголовка. Короткий — в одну строку. Длиннее — переносится на вторую. Не влез и в две — отточие в конце второй строки и полный текст в тултипе при наведении.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'flex-start'
  }}>
      {LONG_TITLES.map(title => <div key={title} style={{
      width: 240
    }}>
          <LiveCell title={title} withSearch={false} />
        </div>)}
    </div>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '200px 360px 160px 180px'
  }}>
      <LiveCell title="Номер договора" position="left" withCheckbox />
      <LiveCell title="Объект" />
      <LiveCell title="Дата договора" />
      <LiveCell title="Статус" position="right" />
    </div>
}`,...U.parameters?.docs?.source}}}})))()}G();export{U as AsHeaderRow,R as Atoms,H as LongTitle,L as Playground,z as SizesAndPositions,B as Variants,W as __namedExportsOrder,I as default};