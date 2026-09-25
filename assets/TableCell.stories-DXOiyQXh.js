import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-r_k3QGfr.js";import{H as r,Io as i,Si as a,fo as o,ft as s,t as c}from"./icons-CxwqsfdL.js";import{n as l,t as u}from"./IconButton-CKOMo9B2.js";import{i as d,n as f,r as p,t as m}from"./TableCellParts-D3aVnSuV.js";import{n as h,t as g}from"./Input-9NCNgVW2.js";import{n as _,t as v}from"./Tag-CACNRLA2.js";function y({text:e=`Cell content`,withCheckbox:t,withShevron:n,withNumber:i,withIconStart:o,withIconEnd:s,withSecondary:c,withActions:l,...d}){let[f,m]=(0,x.useState)(!1),[h,g]=(0,x.useState)(!1);return(0,S.jsx)(p,{...d,checkbox:t?{checked:f,onChange:m}:void 0,shevron:n?{open:h,onToggle:()=>g(e=>!e)}:void 0,number:i?`1.1`:void 0,iconStart:o?(0,S.jsx)(a,{size:16}):void 0,iconEnd:s?(0,S.jsx)(a,{size:16}):void 0,secondary:c?`Cell secondary content`:void 0,actions:l?(0,S.jsx)(u,{label:`Удалить`,icon:(0,S.jsx)(r,{})}):void 0,children:e})}function b(){let[e,t]=(0,x.useState)(!0),[n,c]=(0,x.useState)(!1);return(0,S.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`120px ${w}px`,alignItems:`center`,rowGap:8,fontFamily:`Inter, sans-serif`},children:[[`Text`,(0,S.jsx)(p,{children:`Обычная ячейка с текстом`})],[`Text + icons`,(0,S.jsx)(p,{iconStart:(0,S.jsx)(s,{size:16}),iconEnd:(0,S.jsx)(i,{size:16}),children:`Иконка спереди`})],[`Double text`,(0,S.jsx)(p,{secondary:`Второстепенный текст`,children:`Главный текст ячейки`})],[`Status`,(0,S.jsx)(p,{children:(0,S.jsx)(v,{status:`success`,icon:!0,children:`Аккредитован`})})],[`Status + текст`,(0,S.jsx)(p,{secondary:`До 12.12.2026`,children:(0,S.jsx)(v,{status:`warning`,icon:!0,children:`С условием`})})],[`Icons`,(0,S.jsxs)(p,{align:`center`,children:[(0,S.jsx)(a,{size:16}),(0,S.jsx)(a,{size:16}),(0,S.jsx)(a,{size:16})]})],[`Tag`,(0,S.jsx)(p,{children:(0,S.jsx)(m,{tags:[{key:`1`,label:`Мало текста`},{key:`2`,label:`Текста много и он не помещается`},{key:`3`,label:`Ещё тег`},{key:`4`,label:`И ещё один`}]})})],[`Button`,(0,S.jsx)(p,{actions:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(u,{label:`Скачать`,icon:(0,S.jsx)(i,{})}),(0,S.jsx)(u,{label:`Посмотреть`,icon:(0,S.jsx)(o,{})}),(0,S.jsx)(u,{label:`Удалить`,icon:(0,S.jsx)(r,{})})]})})],[`Checkbox`,(0,S.jsx)(p,{checkbox:{checked:e,onChange:t}})],[`Input`,(0,S.jsx)(p,{children:(0,S.jsx)(g,{size:`s`,defaultValue:`Заполненный инпут`})})],[`SDR`,(0,S.jsx)(p,{number:`1.1`,children:`Обычная ячейка с текстом`})],[`Checkbox + Text`,(0,S.jsx)(p,{checkbox:{checked:e,onChange:t},children:`Ячейка с чекбоксом и текстом`})],[`Shevron + Text`,(0,S.jsx)(p,{shevron:{open:n,onToggle:()=>c(e=>!e)},children:`Ячейка с шевроном и текстом`})]].map(([e,t])=>(0,S.jsxs)(`div`,{style:{display:`contents`},children:[(0,S.jsx)(`span`,{style:{fontSize:12,opacity:.6},children:e}),t]},e))})}var x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{x=t(),c(),h(),d(),l(),_(),f(),S=n(),C=`
Источник — Figma UI Kit «Практис»: **Table-cell** (node 1641:3670). Этап 2 таблицы: ячейка тела
как самостоятельная молекула.

## Слоты вместо вариантов

В макете у ячейки ось **Content** (Text, Text + icons, Double text, Icons, Status, Tag, Button,
Checkbox, Input) и много скрытых слоёв внутри. Здесь это одна ячейка со слотами в порядке
макета:

**чекбокс → шеврон → номер → иконка → содержимое → иконка → действия**

| Content в макете | Как собирается |
|---|---|
| Text | строка |
| Text + icons | строка + \`iconStart\` / \`iconEnd\` |
| Double text | строка + \`secondary\` |
| Icons | иконки + \`align="center"\` |
| Status | \`Tag\` + (\`secondary\`) |
| Tag | \`TableTags\` |
| Button | \`actions\` без содержимого |
| Checkbox | только \`checkbox\` |
| Input | \`Input\` из кита |
| SDR / Checkbox+Text / Shevron+Text | \`number\` / \`checkbox\` / \`shevron\` рядом со строкой |

## Текст

Строка — до двух строк; не влезла — отточие посреди слова и полный текст в тултипе, как в
шапке. В двойном тексте обе строки в одну строку с отточием, как в макете.

## Что не здесь

**Ховер строки** (\`grey/250\`), **отступ вложенности** и **шеврон строк дерева** — это
делает таблица (**UI Kit/Table/Table**): antd сам считает отступ по уровню строки. Внутри
таблицы ячейка отдаёт паддинги, высоту и линию td таблицы — остаётся только содержимое.
Кнопки-действия — общий компонент **UI Kit/IconButton**, статус — **UI Kit/Tag**.
`,w=280,T=({children:e})=>(0,S.jsx)(`div`,{style:{width:w},children:e}),E={control:!1,table:{category:`Для разработчиков — передаётся из кода`}},D={control:`boolean`,table:{category:`Слоты`}},O={title:`UI Kit/Table/Cell`,component:p,parameters:{layout:`padded`,docs:{description:{component:C}}},tags:[`autodocs`],argTypes:{text:{control:`text`,name:`текст`},size:{control:`inline-radio`,options:[`large`,`medium`,`small`]},align:{control:`inline-radio`,options:[`start`,`center`]},withCheckbox:{...D,name:`чекбокс`},withShevron:{...D,name:`шеврон`},withNumber:{...D,name:`номер`},withIconStart:{...D,name:`иконка слева`},withIconEnd:{...D,name:`иконка справа`},withSecondary:{...D,name:`вторая строка`},withActions:{...D,name:`действия`},children:E,secondary:E,checkbox:E,shevron:E,number:E,iconStart:E,iconEnd:E,actions:E},args:{text:`Cell content`,size:`large`,align:`start`,withCheckbox:!1,withShevron:!1,withNumber:!1,withIconStart:!1,withIconEnd:!1,withSecondary:!1,withActions:!1}},k={parameters:{docs:{description:{story:`Слоты включаются в панели «Слоты». Чекбокс и шеврон кликаются.`}}},render:e=>(0,S.jsx)(T,{children:(0,S.jsx)(y,{...e})})},A={parameters:{docs:{description:{story:`Все Content-варианты из макета — одна ячейка, разные слоты. Чекбокс и шеврон кликаются, у кнопок и «+N» есть тултипы.`}}},render:()=>(0,S.jsx)(b,{})},j={render:()=>(0,S.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[`large`,`medium`,`small`].map(e=>(0,S.jsx)(T,{children:(0,S.jsx)(p,{size:e,secondary:`Cell secondary content`,children:`Cell content`})},e))})},M={parameters:{docs:{description:{story:`Одна ширина колонки. Короткий текст — одна строка; длиннее — две; не влез в две — отточие посреди слова и тултип. В двойном тексте обе строки в одну строку.`}}},render:()=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,S.jsx)(T,{children:(0,S.jsx)(p,{children:`Короткий текст`})}),(0,S.jsx)(T,{children:(0,S.jsx)(p,{children:`Текст подлиннее, который переносится на вторую строку`})}),(0,S.jsx)(T,{children:(0,S.jsx)(p,{children:`Обычная ячейка с текстом, но текста много и он не помещается в эту ячейку, ему мало места`})}),(0,S.jsx)(T,{children:(0,S.jsx)(p,{secondary:`Второстепенный текст тоже бывает длинным и не помещается`,children:`Главный текст ячейки, который не помещается`})})]})},N=[`Playground`,`Contents`,`Sizes`,`LongText`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Слоты включаются в панели «Слоты». Чекбокс и шеврон кликаются.'
      }
    }
  },
  render: args => <Col>
      <LiveCell {...args} />
    </Col>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Все Content-варианты из макета — одна ячейка, разные слоты. Чекбокс и шеврон кликаются, у кнопок и «+N» есть тултипы.'
      }
    }
  },
  render: () => <ContentsExample />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      {(['large', 'medium', 'small'] satisfies TableCellSize[]).map(size => <Col key={size}>
          <TableCell size={size} secondary="Cell secondary content">
            Cell content
          </TableCell>
        </Col>)}
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Одна ширина колонки. Короткий текст — одна строка; длиннее — две; не влез в две — отточие посреди слова и тултип. В двойном тексте обе строки в одну строку.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <Col>
        <TableCell>Короткий текст</TableCell>
      </Col>
      <Col>
        <TableCell>Текст подлиннее, который переносится на вторую строку</TableCell>
      </Col>
      <Col>
        <TableCell>Обычная ячейка с текстом, но текста много и он не помещается в эту ячейку, ему мало места</TableCell>
      </Col>
      <Col>
        <TableCell secondary="Второстепенный текст тоже бывает длинным и не помещается">Главный текст ячейки, который не помещается</TableCell>
      </Col>
    </div>
}`,...M.parameters?.docs?.source}}}})))()}P();export{A as Contents,M as LongText,k as Playground,j as Sizes,N as __namedExportsOrder,O as default};