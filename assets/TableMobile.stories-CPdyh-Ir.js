import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./Table-CuZ-5vC5.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{Mo as a,W as o,cs as s,t as c}from"./icons-CXeS3Xzr.js";import"./figma-colors-lO-pgkJ7.js";import{n as l,r as u}from"./iframe-RsNs7Awo.js";import{n as d,t as f}from"./IconButton-BXhYSndo.js";import{n as p,t as m}from"./Tag-oTIrj8-1.js";import{n as h,t as g}from"./TableCellParts-B9b7PbWm.js";import{i as _,n as v,r as y,t as b}from"./tableExampleData-BlxNn5Ba.js";function x({children:e}){return(0,w.jsx)(l,{mode:`mob`,children:(0,w.jsx)(`div`,{style:{width:360,height:740,overflow:`auto`,padding:12,boxSizing:`border-box`,borderRadius:24,background:`var(--bg-grey-page-full)`,boxShadow:`inset 0 0 0 1px var(--grey-330)`},children:e})})}function S(){let[e,t]=(0,C.useState)(D.slice(0,5)),[n,i]=(0,C.useState)(!1);return(0,w.jsx)(x,{children:(0,w.jsx)(r,{columns:O,dataSource:e,pagination:!1,onLoadMore:()=>{i(!0),setTimeout(()=>{t(e=>[...e,...Array.from({length:Math.min(5,18-e.length)},(t,n)=>({...D[(e.length+n)%D.length],key:`s${e.length+n}`}))]),i(!1)},800)},hasMore:e.length<18,loadingMore:n})})}var C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{C=t(),c(),u(),d(),p(),n(),h(),_(),w=i(),T={title:`UI Kit/Данные/Table/На телефоне`,id:`ui-kit-table-mobile`,parameters:{layout:`padded`,docs:{description:{component:`
**Table на телефоне** — та же таблица, те же колонки: на телефоне каждая строка становится карточкой. Ничего
дописывать не нужно — кит решает сам (макеты «Исполнительная документация», договоры и ЖВК):

| В таблице | На карточке |
|---|---|
| первая колонка | заголовок (15 Medium) |
| теги статуса (\`Tag\`) | наверху, слева |
| кнопки-иконки (\`IconButton\`, и у первой колонки тоже) | наверху, справа |
| кнопки с текстом (\`FunctionButton\`) | внизу, во всю ширину |
| короткие значения во всех строках (до 16 знаков: даты, числа, «25 м²») | «подпись — значение», по два в ряд |
| длинный текст, теги, файлы | на всю ширину |
| вложенная таблица (\`nestedTable\`) | под карточкой по шеврону, серыми карточками |

Ничего не скрывается. Явно — \`mobile\` у колонки: \`'title' | 'status' | 'actions' | 'footer' | 'full' | 'half'\`.

**Телефон** — ширина окна до 601 или мобильный браузер; от 602 (планшет) таблица обычная. Показать мобильный вид на
большом экране — \`ThemeProvider device="mob"\` (в Storybook — «Устройство» в панели сверху) или \`device="mob"\` у таблицы.

**Страницы** — подгрузка при прокрутке: по \`pagination.pageSize\` строк (по умолчанию 10). Данные с сервера —
\`onLoadMore\` + \`hasMore\` (+ \`loadingMore\`): таблица попросит ещё, когда дочитали до конца.
`}}},tags:[`autodocs`]},E=[`Устройство пешеходных дорожек из тротуарной плитки`,`Полный комплекс строительных работ по устройству внутренних систем отопления и вентиляции, водопровода и канализации`,`Создание детской площадки с современными игровыми элементами`,`Облагораживание водоема с устройством зоны отдыха`,`Установка освещения на территории общественного парка`],D=Array.from({length:23},(e,t)=>({key:`c${t}`,name:E[t%E.length],contractor:[`ИП «Садовод»`,`ООО «СэтлТех»`,`ЗАО «ЭкоСтрой»`,`ООО «СветТех»`][t%4],number:`0${t%9+1}.05.2025 ГП-${[`Пешеход`,`Отделка`,`Детская`,`Водоем`][t%4]}`,work:[`Укладка плитки`,`Установка оборудования`,`Очистка территории`,`Монтаж светильников`][t%4],location:t%3?[`Корпус 1 - Секция 1, 2, 3, 4`]:[`Корпус 1 - Секция 3,4,5`,`Корпус 2 - Секция 1, 2, 3, 4`],status:t%5==1?{text:`Черновик - ИД 0%`,status:`default`}:{text:`В работе - ИД ${t*10%100}%`,status:`processing`}})),O=[{title:`Название договора`,dataIndex:`name`},{title:`Подрядчик`,dataIndex:`contractor`,width:220},{title:`Номер договора`,dataIndex:`number`,width:220},{title:`Вид работ`,dataIndex:`work`,width:220},{title:`Локация`,dataIndex:`location`,width:260,render:e=>(0,w.jsx)(g,{tags:e.map(e=>({key:e,label:e}))})},{title:`Статус`,dataIndex:`status`,width:180,render:e=>(0,w.jsx)(m,{status:e.status,children:e.text})},{key:`actions`,width:120,fixed:`right`,render:()=>(0,w.jsxs)(`span`,{style:{display:`flex`,gap:4},children:[(0,w.jsx)(f,{icon:(0,w.jsx)(s,{}),label:`Копировать`}),(0,w.jsx)(f,{icon:(0,w.jsx)(a,{}),label:`Изменить`}),(0,w.jsx)(f,{variant:`red`,icon:(0,w.jsx)(o,{}),label:`Удалить`})]})}],k={name:`Договоры`,parameters:{docs:{description:{story:`Те же колонки, что у таблицы на компьютере. Статус — наверх, кнопки-иконки — к нему, название — заголовком, остальное — полями; «Локация» с тегами — на всю ширину. 23 договора: по 10, остальные подгружаются при прокрутке.`}}},render:()=>(0,w.jsx)(x,{children:(0,w.jsx)(r,{columns:O,dataSource:D})})},A={name:`Накладные с материалами`,parameters:{docs:{description:{story:`Вложенная таблица: накладная — карточка, по шеврону под ней — карточки материалов (серые). «Подписать», «Исправить» (FunctionButton) — внизу во всю ширину; «Использовано | Остаток» — по два в ряд; документы — во всю ширину.`}}},render:()=>(0,w.jsx)(x,{children:(0,w.jsx)(r,{columns:v,dataSource:b,pagination:!1,expandable:{defaultExpandedRowKeys:[`t1`]},rowHasNested:e=>e.materials.length>0,nestedTable:e=>(0,w.jsx)(r,{columns:y,dataSource:e.materials,pagination:!1})})})},j={name:`Подгрузка с сервера`,parameters:{docs:{description:{story:`Сервер отдаёт по 5: долистали до конца — «Загружаем…», через 0,8 с — ещё 5. Всего 18.`}}},render:()=>(0,w.jsx)(S,{})},M=[`Contracts`,`Nested`,`LoadMore`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Договоры',
  parameters: {
    docs: {
      description: {
        story: 'Те же колонки, что у таблицы на компьютере. Статус — наверх, кнопки-иконки — к нему, название — заголовком, остальное — полями; «Локация» с тегами — на всю ширину. 23 договора: по 10, остальные подгружаются при прокрутке.'
      }
    }
  },
  render: () => <Phone>
      <Table<Contract> columns={CONTRACT_COLUMNS} dataSource={CONTRACTS} />
    </Phone>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Накладные с материалами',
  parameters: {
    docs: {
      description: {
        story: 'Вложенная таблица: накладная — карточка, по шеврону под ней — карточки материалов (серые). «Подписать», «Исправить» (FunctionButton) — внизу во всю ширину; «Использовано | Остаток» — по два в ряд; документы — во всю ширину.'
      }
    }
  },
  render: () => <Phone>
      <Table<Invoice> columns={INVOICE_COLUMNS} dataSource={INVOICES} pagination={false} expandable={{
      defaultExpandedRowKeys: ['t1']
    }} rowHasNested={r => r.materials.length > 0} nestedTable={r => <Table<Material> columns={MATERIAL_COLUMNS} dataSource={r.materials} pagination={false} />} />
    </Phone>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Подгрузка с сервера',
  parameters: {
    docs: {
      description: {
        story: 'Сервер отдаёт по 5: долистали до конца — «Загружаем…», через 0,8 с — ещё 5. Всего 18.'
      }
    }
  },
  render: () => <ServerDemo />
}`,...j.parameters?.docs?.source}}}})))()}N();export{k as Contracts,j as LoadMore,A as Nested,M as __namedExportsOrder,T as default};