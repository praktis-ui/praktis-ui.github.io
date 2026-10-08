import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Table-CuZ-5vC5.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import"./figma-colors-lO-pgkJ7.js";import{i,n as a,r as o,t as s}from"./tableExampleData-BlxNn5Ba.js";var c,l,u,d;function f(){return(f=e((()=>{t(),i(),c=r(),l={title:`UI Kit/Данные/Table/Вложенная таблица`,id:`ui-kit-table-nested`,parameters:{layout:`padded`,docs:{description:{component:`
Таблица в таблице. Источник — Figma UI Kit «Практис», пример «Журнал входного контроля материалов»
(node 15215:19569): строки — накладные (ТТН), под раскрытой строкой — таблица её материалов.

| Проп у \`Table\` | Что |
|---|---|
| \`nestedTable(row)\` | что показать под строкой — обычно \`<Table>\` кита с \`pagination={false}\` |
| \`rowHasNested(row)\` | у каких строк есть вложенная таблица (по умолчанию у всех); у остальных — место под шеврон, текст ровно |

Шеврон стоит перед текстом первой колонки, в шапке — шеврон «раскрыть / свернуть все». Раскрытая строка —
серая подложка с полями 20, внутри белая карточка со скруглением 12 и тонкой обводкой; появляется плавно.
Колонки внутренней таблицы свои, ширины задаются как обычно.

Как у любой таблицы кита: первая колонка тянется на свободное место, но не уже 300 (её \`width\` — тоже
минимум); не влезает — таблица прокручивается вбок тонкой полосой кита. Ячейка со списком документов
(**FileList** + **FileItem**) растягивает строку под себя, остальные ячейки остаются наверху.
`}}},tags:[`autodocs`]},u={name:`Вложенная таблица`,parameters:{docs:{description:{story:`Как в макете: ТТН 1 раскрыта. Шеврон у строки — раскрыть одну, в шапке — раскрыть или свернуть все. У ТТН 4 материалов нет — шеврона нет, текст стоит ровно.`}}},render:()=>(0,c.jsx)(n,{columns:a,dataSource:s,pagination:!1,expandable:{defaultExpandedRowKeys:[`t1`]},rowHasNested:e=>e.materials.length>0,nestedTable:e=>(0,c.jsx)(n,{columns:o,dataSource:e.materials,pagination:!1})})},d=[`Nested`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Вложенная таблица',
  parameters: {
    docs: {
      description: {
        story: 'Как в макете: ТТН 1 раскрыта. Шеврон у строки — раскрыть одну, в шапке — раскрыть или свернуть все. У ТТН 4 материалов нет — шеврона нет, текст стоит ровно.'
      }
    }
  },
  render: () => <Table<Invoice> columns={INVOICE_COLUMNS} dataSource={INVOICES} pagination={false} expandable={{
    defaultExpandedRowKeys: ['t1']
  }} rowHasNested={r => r.materials.length > 0} nestedTable={r => <Table<Material> columns={MATERIAL_COLUMNS} dataSource={r.materials} pagination={false} />} />
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Nested,d as __namedExportsOrder,l as default};