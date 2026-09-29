import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./tooltip-Dt-iiBvR.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{I as a,Ss as o,Wo as s,gc as c,ma as ee,mo as te,t as l,u as ne,wn as re}from"./icons-CXeS3Xzr.js";import{g as u,h as d}from"./tokens-BQ6gK8U-.js";import"./figma-colors-lO-pgkJ7.js";import{n as f,t as ie}from"./Button-GZMQfLYZ.js";import{n as p,t as ae}from"./Avatar-CQtJ6_k6.js";import{n as m,t as h}from"./IconButton-CddcZKCT.js";import{n as g,t as _}from"./Surface-DrGr8a0X.js";import{n as oe,t as se}from"./useFitText--KNQ3aVK.js";import{n as ce,t as le}from"./Card-z2bKDhVj.js";var v,y,ue,de,fe,b;function pe(){return(pe=e((()=>{v=`_list_htql9_11`,y=`_file_htql9_17`,ue=`_icon_htql9_29`,de=`_name_htql9_36`,fe=`_action_htql9_50`,b={list:v,file:y,icon:ue,name:de,action:fe}})))()}function me({name:e,onView:t,onDownload:n,icon:i,className:o}){let c=(0,ge.useRef)(null),{shown:ee,truncated:l}=oe(e,c,1);return(0,x.jsxs)(_,{level:3,style:{padding:`4px 6px 4px 8px`},className:[b.file,o].filter(Boolean).join(` `),children:[(0,x.jsx)(`span`,{className:b.icon,"aria-hidden":!0,children:i??(0,x.jsx)(s,{size:16})}),(0,x.jsx)(r,{title:l?e:``,color:u.tooltipBg,children:(0,x.jsx)(`span`,{ref:c,className:b.name,children:ee})}),t&&(0,x.jsx)(`span`,{className:b.action,children:(0,x.jsx)(h,{icon:(0,x.jsx)(te,{size:20}),label:`Посмотреть ${e}`,onClick:t})}),n&&(0,x.jsx)(`span`,{className:b.action,children:(0,x.jsx)(h,{icon:(0,x.jsx)(a,{size:20}),label:`Скачать ${e}`,onClick:n})})]})}function he({children:e,className:t}){return(0,x.jsx)(`div`,{className:[b.list,t].filter(Boolean).join(` `),children:e})}var ge,x;function _e(){return(_e=e((()=>{n(),ge=t(),l(),d(),m(),g(),se(),pe(),x=i(),me.__docgenInfo={description:``,methods:[],displayName:`FileItem`,props:{name:{required:!0,tsType:{name:`string`},description:``},onView:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Посмотреть файл. Нет — кнопки нет.`},onDownload:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Скачать. Нет — кнопки нет.`},icon:{required:!1,tsType:{name:`ReactNode`},description:`Значок слева. По умолчанию — документ.`},className:{required:!1,tsType:{name:`string`},description:``}}},he.__docgenInfo={description:`Ряд плашек файлов: через 8, не влезают — перенос.`,methods:[],displayName:`FileList`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var ve,ye,S,C,w,T,E,D,O,k,A,j,M,N,P,be,xe,Se,F;function Ce(){return(Ce=e((()=>{ve=`_card_6kyty_27`,ye=`_body_6kyty_32`,S=`_head_6kyty_39`,C=`_date_6kyty_47`,w=`_resolved_6kyty_55`,T=`_author_6kyty_66`,E=`_authorText_6kyty_73`,D=`_authorName_6kyty_80`,O=`_authorPosition_6kyty_81`,k=`_line_6kyty_97`,A=`_lineIcon_6kyty_104`,j=`_text_6kyty_109`,M=`_divider_6kyty_123`,N=`_meta_6kyty_131`,P=`_metaItem_6kyty_137`,be=`_metaIcon_6kyty_144`,xe=`_metaAvatar_6kyty_145`,Se=`_metaText_6kyty_154`,F={card:ve,body:ye,head:S,date:C,resolved:w,author:T,authorText:E,authorName:D,authorPosition:O,line:k,lineIcon:A,text:j,divider:M,meta:N,metaItem:P,metaIcon:be,metaAvatar:xe,metaText:Se}})))()}function I({date:e,author:t,text:n,maxLines:r,status:i=`open`,onResolve:a,resolving:s,resolveLabel:te=`Снять`,resolvedLabel:l=`Снято`,resolvedNote:u,deadline:d,assignee:f,category:p,files:m,onClick:h,href:g,selected:_,actionLabel:oe=`Показать замечание в документе`,forceState:se,className:ce}){let v=i===`resolved`,y=d!=null||f!=null||p!=null;return(0,L.jsx)(le,{fill:v?`outline`:`solid`,onClick:h,href:g,selected:_,actionLabel:oe,forceState:se,padding:`12px 16px`,className:[F.card,ce].filter(Boolean).join(` `),children:(0,L.jsxs)(`div`,{className:F.body,children:[(0,L.jsxs)(`div`,{className:F.head,children:[(0,L.jsx)(`span`,{className:F.date,children:e}),v?(0,L.jsxs)(`span`,{className:F.resolved,children:[(0,L.jsx)(re,{size:14,"aria-hidden":!0}),l]}):a&&(0,L.jsx)(ie,{variant:`stroke`,size:`small`,icon:(0,L.jsx)(re,{size:14}),loading:s,onClick:a,children:te})]}),(0,L.jsxs)(`div`,{className:F.author,children:[(0,L.jsx)(ae,{name:t.name,src:t.avatarSrc,size:`m`}),(0,L.jsxs)(`span`,{className:F.authorText,children:[(0,L.jsx)(`span`,{className:F.authorName,children:t.name}),t.position&&(0,L.jsx)(`span`,{className:F.authorPosition,children:t.position})]})]}),(0,L.jsxs)(`div`,{className:F.line,children:[(0,L.jsx)(o,{className:F.lineIcon,"aria-hidden":!0}),(0,L.jsx)(`span`,{className:F.text,style:r?{WebkitLineClamp:r}:void 0,"data-clamp":r?``:void 0,children:n})]}),v&&u&&(0,L.jsxs)(`div`,{className:F.line,children:[(0,L.jsx)(ne,{className:F.lineIcon,"aria-hidden":!0}),(0,L.jsx)(`span`,{className:F.text,children:u})]}),m&&m.length>0&&(0,L.jsx)(he,{children:m.map(({key:e,...t})=>(0,L.jsx)(me,{...t},e))}),y&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`hr`,{className:F.divider}),(0,L.jsxs)(`div`,{className:F.meta,children:[d!=null&&(0,L.jsxs)(`span`,{className:F.metaItem,children:[(0,L.jsx)(c,{size:16,className:F.metaIcon,"aria-hidden":!0}),(0,L.jsx)(`span`,{className:F.metaText,children:d})]}),f&&(0,L.jsxs)(`span`,{className:F.metaItem,children:[(0,L.jsx)(ae,{name:f.name,src:f.avatarSrc,size:`s`,className:F.metaAvatar}),(0,L.jsx)(`span`,{className:F.metaText,title:f.name,children:f.name})]}),p!=null&&(0,L.jsxs)(`span`,{className:F.metaItem,children:[(0,L.jsx)(ee,{size:16,className:F.metaIcon,"aria-hidden":!0}),(0,L.jsx)(`span`,{className:F.metaText,children:p})]})]})]})]})})}var L;function we(){return(we=e((()=>{l(),d(),p(),f(),ce(),_e(),Ce(),L=i(),I.__docgenInfo={description:``,methods:[],displayName:`RemarkCard`,props:{date:{required:!0,tsType:{name:`ReactNode`},description:``},author:{required:!0,tsType:{name:`RemarkAuthor`},description:``},text:{required:!0,tsType:{name:`ReactNode`},description:`Текст замечания.`},maxLines:{required:!1,tsType:{name:`number`},description:`Обрезать текст до N строк с отточием. По умолчанию — целиком.`},status:{required:!1,tsType:{name:`union`,raw:`'open' | 'resolved'`,elements:[{name:`literal`,value:`'open'`},{name:`literal`,value:`'resolved'`}]},description:`open — действует, resolved — снято.`,defaultValue:{value:`'open'`,computed:!1}},onResolve:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Снять замечание. Нет — кнопки нет (например, нет прав).`},resolving:{required:!1,tsType:{name:`boolean`},description:`Идёт снятие — кнопка с загрузкой.`},resolveLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Снять'`,computed:!1}},resolvedLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Снято'`,computed:!1}},resolvedNote:{required:!1,tsType:{name:`ReactNode`},description:`Причина снятия («Замечание неактуально») — у снятого.`},deadline:{required:!1,tsType:{name:`ReactNode`},description:`Срок («5 дней»).`},assignee:{required:!1,tsType:{name:`RemarkPerson`},description:`Исполнитель.`},category:{required:!1,tsType:{name:`ReactNode`},description:`Категория («Нарушение ЧТУ»).`},files:{required:!1,tsType:{name:`Array`,elements:[{name:`RemarkFile`}],raw:`RemarkFile[]`},description:``},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(e: MouseEvent<HTMLElement>) => void`,signature:{arguments:[{type:{name:`MouseEvent`,elements:[{name:`HTMLElement`}],raw:`MouseEvent<HTMLElement>`},name:`e`}],return:{name:`void`}}},description:`Нажатие на карточку — например, перейти к месту замечания в документе.`},href:{required:!1,tsType:{name:`string`},description:``},selected:{required:!1,tsType:{name:`boolean`},description:`Это замечание сейчас открыто (выбрано). Только у кликабельной.`},actionLabel:{required:!1,tsType:{name:`string`},description:`Подпись нажатия для экранного диктора. По умолчанию — «Показать замечание в документе».`,defaultValue:{value:`'Показать замечание в документе'`,computed:!1}},forceState:{required:!1,tsType:{name:`union`,raw:`'hover' | 'active' | 'focus'`,elements:[{name:`literal`,value:`'hover'`},{name:`literal`,value:`'active'`},{name:`literal`,value:`'focus'`}]},description:`Принудительное состояние — только для витрины.`},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}function R({children:e}){return(0,V.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:24,alignItems:`flex-start`},children:[`white`,`grey`].map(t=>(0,V.jsxs)(_,{on:t===`white`?`grey`:`white`,style:{width:J},children:[(0,V.jsx)(`div`,{style:{marginBottom:12,fontFamily:`Inter, sans-serif`,fontSize:12,color:`#66788c`},children:t===`white`?`На белом`:`На сером`}),(0,V.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:e(t)})]},t))})}function z({children:e}){return(0,V.jsx)(`div`,{style:{fontFamily:`Inter, sans-serif`,fontSize:12,color:`#66788c`,marginTop:8},children:e})}function Te(){let[e,t]=(0,B.useState)(`2`),[n,r]=(0,B.useState)(null),[i,a]=(0,B.useState)({3:!0}),o=[{id:`1`,date:`16.09.2025`,text:W},{id:`2`,date:`18.09.2025`,text:`Не хватает документа «Эл/энергия». Прикрепить очень важные файлы, которые крайне необходимы.`},{id:`3`,date:`21.09.2025`,text:W}],s=e=>{r(e),setTimeout(()=>{r(null),a(t=>({...t,[e]:!0}))},1200)};return(0,V.jsx)(_,{on:`grey`,style:{width:J},children:(0,V.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:o.map(r=>(0,V.jsx)(I,{...i[r.id]?q:K,date:r.date,text:r.text,onResolve:()=>s(r.id),resolving:n===r.id,onClick:()=>t(r.id),selected:e===r.id},r.id))})})}var B,V,Ee,H,U,W,G,K,q,J,De,Y,X,Z,Q,$,Oe;function ke(){return(ke=e((()=>{B=t(),g(),we(),V=i(),Ee="\nИсточник — Figma UI Kit «Практис», карточка замечания «Comment» (node 14511:10933).\n\n| Проп | Значения | В Figma |\n|---|---|---|\n| `status` | `open` — действует / `resolved` — снято | Actively = Yes / No |\n| `onResolve`, `resolving` | кнопка «Снять» (stroke S) и загрузка; нет `onResolve` — нет кнопки (нет прав) | кнопка в шапке |\n| `resolvedNote` | причина снятия под текстом («Замечание неактуально») | Comment Container 2 |\n| `deadline`, `assignee`, `category` | низ карточки; нет ни одного — нет и черты | item × 3 |\n| `files` | плашки файлов (**FileItem**): посмотреть, скачать | File |\n| `maxLines` | обрезать текст до N строк | — |\n| `onClick` / `href`, `selected` | кликабельная: ведёт к месту замечания; `selected` — открыто сейчас | Status = Hover |\n\n**Открытое и снятое.** Открытое — с подложкой: на белом серая, на сером белая (как у Surface). Снятое —\nбез заливки, с тонкой обводкой: оно «отошло на второй план» на любом фоне.\n\n**Нажимается или нет — зависит от системы.** Где карточки только для чтения — не передавать\n`onClick`: без ховера и без курсора-руки. Где карточка ведёт к месту в документе — передать `onClick`\n(или `href`) и `selected` у открытого сейчас. «Снять» и файлы нажимаются отдельно и там, и там.\n\n**Состояния кликабельной карточки** (общие для всех карточек кита, решение Анастасии 2026-09-25):\n\n| Состояние | Обводка | Заливка |\n|---|---|---|\n| ховер | 1px primary #3c83f6 | своя |\n| нажатие | 2px #1a68e8 | своя |\n| выбрана | 2px primary | своя |\n| выбрана + ховер / нажатие | 2px #1a68e8 | своя |\n| фокус с клавиатуры | кольцо кита снаружи | своя |\n\nЗаливки у состояний нет: на белой карточке любая заливка читается как сильное затемнение.\n\n**Отличия от макета:** скругление — по вложенности подложек (в макете 6 везде); файлы — внутри карточки\nпод текстом (в макете — строкой под карточкой, вне заливки); иконки текста и причины — залитые\n`IconCommentFill` / `IconXCircleFill` (добавлены в кит из макета).\n",H={name:`Тестов Я. Т.`,position:`Менеджер по качеству`},U={name:`Иванов И. И.`},W=`Файл составлен неккорректно. Исправил ошибки и прикрепил правильный файл. ВАЖНО`,G=`Замечание с оооооочень длинным названием, которое уходит в несколько строк, и мы можем видеть полное название замечания для нашего удобства — если не обрезать его по числу строк`,K={date:`16.09.2025`,author:H,text:W,status:`open`,onResolve:()=>{},deadline:`5 дней`,assignee:U,category:`Нарушение ЧТУ`},q={date:`21.09.2025`,author:H,text:W,status:`resolved`,resolvedNote:`Замечание неактуально`,assignee:U,category:`Нарушение ЧТУ`},J=420,De={title:`UI Kit/Карточки/RemarkCard`,id:`ui-kit-remarkcard`,component:I,parameters:{layout:`padded`,docs:{description:{component:Ee}}},argTypes:{status:{control:`inline-radio`,options:[`open`,`resolved`]},text:{control:`text`},date:{control:`text`},deadline:{control:`text`},category:{control:`text`},resolvedNote:{control:`text`},maxLines:{control:{type:`number`,min:1,max:10}},forceState:{table:{disable:!0}},onClick:{table:{disable:!0}},href:{table:{disable:!0}},className:{table:{disable:!0}}},args:{...K}},Y={args:{...K,clickable:!0,selected:!1,resolving:!1},argTypes:{clickable:{control:`boolean`,name:`нажимается (ведёт в документ)`}},render:({clickable:e,...t})=>(0,V.jsx)(R,{children:()=>(0,V.jsx)(I,{...t,onClick:e?()=>{}:void 0})})},X={name:`Все состояния кликабельной`,parameters:{docs:{description:{story:`Кликабельная карточка (ведёт к месту в документе): открытое и снятое замечание во всех состояниях.`}}},render:()=>(0,V.jsx)(R,{children:()=>[K,q].map((e,t)=>(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,V.jsxs)(z,{children:[t===0?`Открытое`:`Снятое`,` — обычное`]}),(0,V.jsx)(I,{...e,onClick:()=>{}}),(0,V.jsx)(z,{children:`ховер`}),(0,V.jsx)(I,{...e,onClick:()=>{},forceState:`hover`}),(0,V.jsx)(z,{children:`нажатие`}),(0,V.jsx)(I,{...e,onClick:()=>{},forceState:`active`}),(0,V.jsx)(z,{children:`выбрано (открыто в документе)`}),(0,V.jsx)(I,{...e,onClick:()=>{},selected:!0}),(0,V.jsx)(z,{children:`выбрано + ховер`}),(0,V.jsx)(I,{...e,onClick:()=>{},selected:!0,forceState:`hover`}),(0,V.jsx)(z,{children:`фокус с клавиатуры`}),(0,V.jsx)(I,{...e,onClick:()=>{},forceState:`focus`})]},t))})},Z={name:`Не нажимается (только чтение)`,parameters:{docs:{description:{story:"Система, где карточки не нажимаются: без `onClick` — ни ховера, ни курсора-руки. «Снять» работает."}}},render:()=>(0,V.jsx)(R,{children:()=>(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(I,{...K}),(0,V.jsx)(I,{...q})]})})},Q={name:`Ведёт в документ (список)`,parameters:{docs:{description:{story:"Система, где карточка ведёт к месту замечания: нажатие выбирает карточку (`selected`) — это замечание открыто в документе. «Снять» — с загрузкой, после неё карточка становится снятой."}}},render:()=>(0,V.jsx)(Te,{})},$={name:`Крайние случаи`,parameters:{docs:{description:{story:"Длинные имена и текст, обрезка до 3 строк (`maxLines`), нет прав на «Снять», нет низа, файлы, узкая карточка 250."}}},render:()=>(0,V.jsx)(R,{children:()=>(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(z,{children:`длинное, maxLines = 3, нет прав на «Снять»`}),(0,V.jsx)(I,{...K,onResolve:void 0,maxLines:3,text:G,author:{name:`Константинопольский Александр Владимирович`,position:`Главный инженер проекта по качеству строительно-монтажных работ`},assignee:{name:`Константинопольский Александр Владимирович`},category:`Нарушение требований к оформлению исполнительной документации`}),(0,V.jsx)(z,{children:`без низа (нет срока, исполнителя, категории)`}),(0,V.jsx)(I,{date:`16.09.2025`,author:H,text:W,onResolve:()=>{}}),(0,V.jsx)(z,{children:`с файлами`}),(0,V.jsx)(I,{...K,files:[{key:`a`,name:`Акт КС-2 корпус 1.pdf`,onView:()=>{},onDownload:()=>{}},{key:`b`,name:`Исполнительная схема с оооочень длинным именем.dwg`,onDownload:()=>{}}]}),(0,V.jsx)(z,{children:`идёт снятие`}),(0,V.jsx)(I,{...K,resolving:!0}),(0,V.jsx)(z,{children:`узкая — 250`}),(0,V.jsx)(`div`,{style:{width:250},children:(0,V.jsx)(I,{...K})})]})})},Oe=[`Playground`,`States`,`ReadOnly`,`InDocument`,`Edge`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    ...OPEN,
    clickable: true,
    selected: false,
    resolving: false
  } as PlaygroundArgs,
  argTypes: {
    clickable: {
      control: 'boolean',
      name: 'нажимается (ведёт в документ)'
    }
  },
  render: ({
    clickable,
    ...args
  }) => <OnBackgrounds>{() => <RemarkCard {...args} onClick={clickable ? () => {} : undefined} />}</OnBackgrounds>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Все состояния кликабельной',
  parameters: {
    docs: {
      description: {
        story: 'Кликабельная карточка (ведёт к месту в документе): открытое и снятое замечание во всех состояниях.'
      }
    }
  },
  render: () => <OnBackgrounds>
      {() => ([OPEN, RESOLVED] as const).map((base, i) => <div key={i} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
            <Label>{i === 0 ? 'Открытое' : 'Снятое'} — обычное</Label>
            <RemarkCard {...base} onClick={() => {}} />
            <Label>ховер</Label>
            <RemarkCard {...base} onClick={() => {}} forceState="hover" />
            <Label>нажатие</Label>
            <RemarkCard {...base} onClick={() => {}} forceState="active" />
            <Label>выбрано (открыто в документе)</Label>
            <RemarkCard {...base} onClick={() => {}} selected />
            <Label>выбрано + ховер</Label>
            <RemarkCard {...base} onClick={() => {}} selected forceState="hover" />
            <Label>фокус с клавиатуры</Label>
            <RemarkCard {...base} onClick={() => {}} forceState="focus" />
          </div>)}
    </OnBackgrounds>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Не нажимается (только чтение)',
  parameters: {
    docs: {
      description: {
        story: 'Система, где карточки не нажимаются: без \`onClick\` — ни ховера, ни курсора-руки. «Снять» работает.'
      }
    }
  },
  render: () => <OnBackgrounds>
      {() => <>
          <RemarkCard {...OPEN} />
          <RemarkCard {...RESOLVED} />
        </>}
    </OnBackgrounds>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'Ведёт в документ (список)',
  parameters: {
    docs: {
      description: {
        story: 'Система, где карточка ведёт к месту замечания: нажатие выбирает карточку (\`selected\`) — это замечание открыто в документе. «Снять» — с загрузкой, после неё карточка становится снятой.'
      }
    }
  },
  render: () => <ListDemo />
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'Крайние случаи',
  parameters: {
    docs: {
      description: {
        story: 'Длинные имена и текст, обрезка до 3 строк (\`maxLines\`), нет прав на «Снять», нет низа, файлы, узкая карточка 250.'
      }
    }
  },
  render: () => <OnBackgrounds>
      {() => <>
          <Label>длинное, maxLines = 3, нет прав на «Снять»</Label>
          <RemarkCard {...OPEN} onResolve={undefined} maxLines={3} text={longText} author={{
        name: 'Константинопольский Александр Владимирович',
        position: 'Главный инженер проекта по качеству строительно-монтажных работ'
      }} assignee={{
        name: 'Константинопольский Александр Владимирович'
      }} category="Нарушение требований к оформлению исполнительной документации" />
          <Label>без низа (нет срока, исполнителя, категории)</Label>
          <RemarkCard date="16.09.2025" author={author} text={text} onResolve={() => {}} />
          <Label>с файлами</Label>
          <RemarkCard {...OPEN} files={[{
        key: 'a',
        name: 'Акт КС-2 корпус 1.pdf',
        onView: () => {},
        onDownload: () => {}
      }, {
        key: 'b',
        name: 'Исполнительная схема с оооочень длинным именем.dwg',
        onDownload: () => {}
      }]} />
          <Label>идёт снятие</Label>
          <RemarkCard {...OPEN} resolving />
          <Label>узкая — 250</Label>
          <div style={{
        width: 250
      }}>
            <RemarkCard {...OPEN} />
          </div>
        </>}
    </OnBackgrounds>
}`,...$.parameters?.docs?.source}}}})))()}ke();export{$ as Edge,Q as InDocument,Y as Playground,Z as ReadOnly,X as States,Oe as __namedExportsOrder,De as default};