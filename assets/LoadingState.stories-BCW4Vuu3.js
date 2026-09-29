import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./react-dom-BzEl8usk.js";import{n as r,t as i}from"./useAlerts-DabJ2IoO.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{n as o,t as s}from"./Spinner-FQin62xI.js";import"./figma-colors-lO-pgkJ7.js";import{n as c,t as l}from"./Button-GZMQfLYZ.js";var u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{u=`_root_1jyjw_17`,d=`_s_1jyjw_30`,f=`_xs_1jyjw_31`,p=`_text_1jyjw_33`,m=`_title_1jyjw_42`,h=`_description_1jyjw_43`,g=`_wrap_1jyjw_64`,_=`_layer_1jyjw_68`,v=`_fullscreen_1jyjw_80`,y={root:u,s:d,xs:f,text:p,title:m,description:h,wrap:g,layer:_,"loading-in":`_loading-in_1jyjw_1`,fullscreen:v}})))()}function x(e,t=0){let[n,r]=(0,C.useState)(e&&t<=0);return(0,C.useEffect)(()=>{if(!e||t<=0){r(e);return}let n=setTimeout(()=>r(!0),t);return()=>clearTimeout(n)},[e,t]),n}function S({title:e=`Загрузка…`,description:t,onCancel:n,cancelLabel:r=`Отменить`,size:i=`s`,fullscreen:a=!1,spinning:o=!0,delay:c,children:u,getContainer:d,className:f}){let p=x(o,c),m=(0,C.useRef)(null),h=(0,C.useRef)(n);(0,C.useEffect)(()=>{h.current=n}),(0,C.useEffect)(()=>{if(!a||!p)return;let e=m.current,t=document.activeElement;(e?.querySelector(`button`)??e)?.focus();let n=t=>{if(t.key===`Escape`&&h.current?.(),t.key===`Tab`&&e){let n=e.querySelector(`button`);t.preventDefault(),(n??e).focus()}};return document.addEventListener(`keydown`,n),()=>{document.removeEventListener(`keydown`,n),t?.focus?.()}},[a,p]);let g=(0,T.jsxs)(`div`,{className:[y.root,y[i],!a&&u===void 0&&f].filter(Boolean).join(` `),role:`status`,"aria-live":`polite`,children:[(0,T.jsx)(s,{tone:`block`,size:E[i]}),(0,T.jsxs)(`div`,{className:y.text,children:[(0,T.jsx)(`p`,{className:y.title,children:e}),t&&(0,T.jsx)(`p`,{className:y.description,children:t})]}),n&&(0,T.jsx)(l,{variant:`primary`,size:D[i],onClick:n,children:r})]});return a?p?(0,w.createPortal)((0,T.jsx)(`div`,{ref:m,className:[y.layer,y.fullscreen,f].filter(Boolean).join(` `),tabIndex:-1,"aria-modal":`true`,role:`dialog`,"aria-label":typeof e==`string`?e:`Загрузка`,children:g}),d?.()??document.body):null:u===void 0?p?g:null:(0,T.jsxs)(`div`,{className:[y.wrap,f].filter(Boolean).join(` `),"aria-busy":p,children:[(0,T.jsx)(`div`,{className:y.content,inert:p,children:u}),p&&(0,T.jsx)(`div`,{className:y.layer,children:g})]})}var C,w,T,E,D;function O(){return(O=e((()=>{C=t(),w=n(),c(),o(),b(),T=a(),E={s:48,xs:30},D={s:`middle`,xs:`small`},S.__docgenInfo={description:``,methods:[],displayName:`LoadingState`,props:{title:{required:!1,tsType:{name:`ReactNode`},description:`Заголовок. По умолчанию «Загрузка…».`,defaultValue:{value:`'Загрузка…'`,computed:!1}},description:{required:!1,tsType:{name:`ReactNode`},description:`Мелко под заголовком: чего ждать («это может занять до 1 минуты»).`},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`«Отменить» — прервать загрузку и вернуться назад. Нет — нет кнопки.`},cancelLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Отменить'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'s' | 'xs'`,elements:[{name:`literal`,value:`'s'`},{name:`literal`,value:`'xs'`}]},description:`s — как в макете (крутилка 48, 20 / 16); xs — маленький блок (30, 16 / 14).`,defaultValue:{value:`'s'`,computed:!1}},fullscreen:{required:!1,tsType:{name:`boolean`},description:`На весь экран, экран заблокирован.`,defaultValue:{value:`false`,computed:!1}},spinning:{required:!1,tsType:{name:`boolean`},description:`С children: показывать ли загрузку поверх них. По умолчанию true.`,defaultValue:{value:`true`,computed:!1}},delay:{required:!1,tsType:{name:`number`},description:`Показать не сразу, а через столько мс — чтобы быстрая загрузка не мигала.`},children:{required:!1,tsType:{name:`ReactNode`},description:`Содержимое, поверх которого загрузка (как у antd Spin).`},getContainer:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => HTMLElement`,signature:{arguments:[],return:{name:`HTMLElement`}}},description:"Куда вставлять fullscreen — ближайший `[data-theme]`, если тема не на body."},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}function k({size:e,title:t,description:n,withCancel:r}){let[i,a]=(0,M.useState)(0);return(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,N.jsx)(`div`,{style:F,children:(0,N.jsx)(S,{size:e,title:t,description:n||void 0,onCancel:r?()=>a(e=>e+1):void 0})}),(0,N.jsx)(`span`,{style:I,children:i?`«Отменить» нажата: ${i}`:`Блок 360 в высоту — загрузка по центру.`})]})}function A(){let[e,t]=(0,M.useState)(!1),n=(0,M.useRef)(void 0);return(0,M.useEffect)(()=>()=>clearTimeout(n.current),[]),(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,alignItems:`flex-start`},children:[(0,N.jsx)(l,{variant:`stroke`,onClick:()=>{t(!0),n.current=setTimeout(()=>t(!1),2500)},disabled:e,children:`Обновить данные`}),(0,N.jsx)(S,{spinning:e,size:`xs`,description:`Обновляем этапы`,onCancel:()=>t(!1),children:(0,N.jsx)(`div`,{style:{...F,height:`auto`,width:520,padding:`8px 20px`,fontFamily:`Inter, sans-serif`,fontSize:14},children:z.map(e=>(0,N.jsx)(`p`,{style:{margin:`12px 0`,color:`var(--text-black-primary)`},children:e},e))})})]})}function j(){let[e,t]=(0,M.useState)(!1),[n,i]=(0,M.useState)(``),[a,o]=r(),s=(0,M.useRef)(void 0);(0,M.useEffect)(()=>()=>clearTimeout(s.current),[]);let c=e=>{i(``),t(!0),s.current=setTimeout(()=>{t(!1),e?a.toast({color:`error`,title:`Не удалось сформировать данные`,text:`Произошел сбой. Попробуйте еще раз.`}):i(`Данные сформированы — здесь открылся бы раздел с ними.`)},3e3)};return(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,alignItems:`flex-start`},children:[o,(0,N.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,N.jsx)(l,{variant:`primary`,onClick:()=>c(!1),children:`Сформировать ОЖР`}),(0,N.jsx)(l,{variant:`stroke`,onClick:()=>c(!0),children:`Сформировать с ошибкой`})]}),(0,N.jsx)(`span`,{style:I,children:n||`Загрузка — 3 секунды. «Отменить» или Esc — прервать.`}),(0,N.jsx)(S,{fullscreen:!0,spinning:e,description:`Пожалуйста, подождите, это может занять до 1 минуты`,onCancel:()=>{clearTimeout(s.current),t(!1),i(`Отменено — вернулись на предыдущий экран.`)}})]})}var M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{M=t(),i(),c(),O(),N=a(),P={title:`UI Kit/Сообщения и окна/LoadingState`,id:`ui-kit-loadingstate`,parameters:{layout:`padded`,docs:{description:{component:`
Источник — Figma UI Kit «Практис»: **Page loading** (node 9256:6882) — загрузка на месте будущего
содержимого. Как [antd Spin](https://ant.design/components/spin): крутилка на месте блока, поверх
блока или на весь экран; вид — наш.

| Где | Как |
|---|---|
| На месте содержимого (блок, панель, список) | \`<LoadingState />\` вместо содержимого |
| Поверх блока — содержимое видно, но недоступно | \`<LoadingState spinning={loading}>…содержимое…</LoadingState>\` |
| На весь экран — экран заблокирован | \`<LoadingState fullscreen spinning={loading} onCancel={…} />\` |

| Проп | |
|---|---|
| \`title\` | по умолчанию «Загрузка…» |
| \`description\` | мелко — чего ждать: «Пожалуйста, подождите, это может занять до 1 минуты» |
| \`onCancel\` | кнопка «Отменить» — прервать и вернуться на предыдущий экран; на весь экран ещё и Esc |
| \`size\` | \`s\` — как в макете (крутилка 48, текст 20 / 16); \`xs\` — для маленьких блоков (30, 16 / 14) |
| \`delay\` | показать через N мс — быструю загрузку не видно, ничего не мигает |

Раскладка — как у **EmptyState** того же размера: пустота и загрузка занимают одно место.
Своего кружка и «Загружаем…» не рисовать — только этот компонент.

**Ошибка загрузки** — загрузку закрыть и показать алерт справа внизу:
\`alerts.toast({ color: 'error', title: 'Не удалось сформировать данные', text: 'Произошел сбой. Попробуйте еще раз.' })\`
(**useAlerts** — отступы 32 от краёв и 10 секунд, как на полотне).
`}}},tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:[`s`,`xs`]},title:{control:`text`},description:{control:`text`},withCancel:{control:`boolean`,name:`кнопка «Отменить»`}},args:{size:`s`,title:`Загрузка…`,description:`Пожалуйста, подождите, это может занять до 1 минуты`,withCancel:!0}},F={height:360,borderRadius:12,background:`var(--bg-white-page-full)`,boxShadow:`inset 0 0 0 1px var(--grey-330)`},I={fontFamily:`Inter, sans-serif`,fontSize:12,color:`var(--text-black-secondary)`},L={parameters:{docs:{description:{story:`На месте содержимого: блок ждёт данные.`}}},render:e=>(0,N.jsx)(k,{...e})},R={name:`Размеры`,parameters:{docs:{description:{story:"`s` — как в макете, для страницы и больших блоков. `xs` — для маленьких блоков и панелей, по правилам EmptyState XS; в макете его нет."}}},render:()=>(0,N.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 320px`,gap:24},children:[(0,N.jsx)(`div`,{style:F,children:(0,N.jsx)(S,{description:`Пожалуйста, подождите, это может занять до 1 минуты`,onCancel:()=>{}})}),(0,N.jsx)(`div`,{style:{...F,height:200},children:(0,N.jsx)(S,{size:`xs`,description:`Считаем показатели`})})]})},z=[`Разработка проектной документации`,`Экспертиза проекта`,`Получение разрешения на строительство`,`Подготовка площадки`],B={name:`Поверх блока`,parameters:{docs:{description:{story:`Содержимое остаётся на месте под размытым фоном и недоступно (мышь и Tab), пока идёт загрузка. Нажмите «Обновить данные» — 2,5 секунды загрузки.`}}},render:()=>(0,N.jsx)(A,{})},V={name:`На весь экран`,parameters:{docs:{description:{story:`Флоу из макета (формирование ОЖР): экран блокируется — можно дождаться или нажать «Отменить» и вернуться на предыдущий экран. Готово — открывается раздел с данными. Ошибка — загрузка закрывается, справа внизу алерт на 10 секунд.`}}},render:()=>(0,N.jsx)(j,{})},H=[`Playground`,`Sizes`,`OverBlock`,`Fullscreen`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'На месте содержимого: блок ждёт данные.'
      }
    }
  },
  render: args => <PlaygroundDemo {...args as Partial<Args>} />
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Размеры',
  parameters: {
    docs: {
      description: {
        story: '\`s\` — как в макете, для страницы и больших блоков. \`xs\` — для маленьких блоков и панелей, по правилам EmptyState XS; в макете его нет.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 320px',
    gap: 24
  }}>
      <div style={frame}>
        <LoadingState description="Пожалуйста, подождите, это может занять до 1 минуты" onCancel={() => {}} />
      </div>
      <div style={{
      ...frame,
      height: 200
    }}>
        <LoadingState size="xs" description="Считаем показатели" />
      </div>
    </div>
}`,...R.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Поверх блока',
  parameters: {
    docs: {
      description: {
        story: 'Содержимое остаётся на месте под размытым фоном и недоступно (мышь и Tab), пока идёт загрузка. Нажмите «Обновить данные» — 2,5 секунды загрузки.'
      }
    }
  },
  render: () => <OverBlockDemo />
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'На весь экран',
  parameters: {
    docs: {
      description: {
        story: 'Флоу из макета (формирование ОЖР): экран блокируется — можно дождаться или нажать «Отменить» и вернуться на предыдущий экран. Готово — открывается раздел с данными. Ошибка — загрузка закрывается, справа внизу алерт на 10 секунд.'
      }
    }
  },
  render: () => <FullscreenDemo />
}`,...V.parameters?.docs?.source}}}})))()}U();export{V as Fullscreen,B as OverBlock,L as Playground,R as Sizes,H as __namedExportsOrder,P as default};