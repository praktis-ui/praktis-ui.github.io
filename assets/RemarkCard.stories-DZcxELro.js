import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{Ss as r,gc as i,ma as a,t as o,u as s,wn as c}from"./icons-CXeS3Xzr.js";import{h as l}from"./tokens-BQ6gK8U-.js";import"./figma-colors-lO-pgkJ7.js";import{n as u,t as ee}from"./Button-DIhGMxSW.js";import{n as d,t as f}from"./Avatar-CQtJ6_k6.js";import{r as p,t as m}from"./Surface-i_8E7dtq.js";import{i as h,r as te,t as ne}from"./FileItem-CoPZkmBw.js";import{n as g,t as re}from"./Card-Tau5mbm5.js";var _,v,y,b,x,S,C,w,T,E,D,O,k,ie,ae,A,oe,se,j;function M(){return(M=e((()=>{_=`_card_6kyty_27`,v=`_body_6kyty_32`,y=`_head_6kyty_39`,b=`_date_6kyty_47`,x=`_resolved_6kyty_55`,S=`_author_6kyty_66`,C=`_authorText_6kyty_73`,w=`_authorName_6kyty_80`,T=`_authorPosition_6kyty_81`,E=`_line_6kyty_97`,D=`_lineIcon_6kyty_104`,O=`_text_6kyty_109`,k=`_divider_6kyty_123`,ie=`_meta_6kyty_131`,ae=`_metaItem_6kyty_137`,A=`_metaIcon_6kyty_144`,oe=`_metaAvatar_6kyty_145`,se=`_metaText_6kyty_154`,j={card:_,body:v,head:y,date:b,resolved:x,author:S,authorText:C,authorName:w,authorPosition:T,line:E,lineIcon:D,text:O,divider:k,meta:ie,metaItem:ae,metaIcon:A,metaAvatar:oe,metaText:se}})))()}function N({date:e,author:t,text:n,maxLines:o,status:l=`open`,onResolve:u,resolving:d,resolveLabel:p=`Снять`,resolvedLabel:m=`Снято`,resolvedNote:h,deadline:g,assignee:_,category:v,files:y,onClick:b,href:x,selected:S,actionLabel:C=`Показать замечание в документе`,forceState:w,className:T}){let E=l===`resolved`,D=g!=null||_!=null||v!=null;return(0,P.jsx)(re,{fill:E?`outline`:`solid`,onClick:b,href:x,selected:S,actionLabel:C,forceState:w,padding:`12px 16px`,className:[j.card,T].filter(Boolean).join(` `),children:(0,P.jsxs)(`div`,{className:j.body,children:[(0,P.jsxs)(`div`,{className:j.head,children:[(0,P.jsx)(`span`,{className:j.date,children:e}),E?(0,P.jsxs)(`span`,{className:j.resolved,children:[(0,P.jsx)(c,{size:14,"aria-hidden":!0}),m]}):u&&(0,P.jsx)(ee,{variant:`stroke`,size:`small`,icon:(0,P.jsx)(c,{size:14}),loading:d,onClick:u,children:p})]}),(0,P.jsxs)(`div`,{className:j.author,children:[(0,P.jsx)(f,{name:t.name,src:t.avatarSrc,size:`m`}),(0,P.jsxs)(`span`,{className:j.authorText,children:[(0,P.jsx)(`span`,{className:j.authorName,children:t.name}),t.position&&(0,P.jsx)(`span`,{className:j.authorPosition,children:t.position})]})]}),(0,P.jsxs)(`div`,{className:j.line,children:[(0,P.jsx)(r,{className:j.lineIcon,"aria-hidden":!0}),(0,P.jsx)(`span`,{className:j.text,style:o?{WebkitLineClamp:o}:void 0,"data-clamp":o?``:void 0,children:n})]}),E&&h&&(0,P.jsxs)(`div`,{className:j.line,children:[(0,P.jsx)(s,{className:j.lineIcon,"aria-hidden":!0}),(0,P.jsx)(`span`,{className:j.text,children:h})]}),y&&y.length>0&&(0,P.jsx)(te,{children:y.map(({key:e,...t})=>(0,P.jsx)(ne,{...t},e))}),D&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`hr`,{className:j.divider}),(0,P.jsxs)(`div`,{className:j.meta,children:[g!=null&&(0,P.jsxs)(`span`,{className:j.metaItem,children:[(0,P.jsx)(i,{size:16,className:j.metaIcon,"aria-hidden":!0}),(0,P.jsx)(`span`,{className:j.metaText,children:g})]}),_&&(0,P.jsxs)(`span`,{className:j.metaItem,children:[(0,P.jsx)(f,{name:_.name,src:_.avatarSrc,size:`s`,className:j.metaAvatar}),(0,P.jsx)(`span`,{className:j.metaText,title:_.name,children:_.name})]}),v!=null&&(0,P.jsxs)(`span`,{className:j.metaItem,children:[(0,P.jsx)(a,{size:16,className:j.metaIcon,"aria-hidden":!0}),(0,P.jsx)(`span`,{className:j.metaText,children:v})]})]})]})]})})}var P;function F(){return(F=e((()=>{o(),l(),d(),u(),g(),h(),M(),P=n(),N.__docgenInfo={description:``,methods:[],displayName:`RemarkCard`,props:{date:{required:!0,tsType:{name:`ReactNode`},description:``},author:{required:!0,tsType:{name:`RemarkAuthor`},description:``},text:{required:!0,tsType:{name:`ReactNode`},description:`Текст замечания.`},maxLines:{required:!1,tsType:{name:`number`},description:`Обрезать текст до N строк с отточием. По умолчанию — целиком.`},status:{required:!1,tsType:{name:`union`,raw:`'open' | 'resolved'`,elements:[{name:`literal`,value:`'open'`},{name:`literal`,value:`'resolved'`}]},description:`open — действует, resolved — снято.`,defaultValue:{value:`'open'`,computed:!1}},onResolve:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Снять замечание. Нет — кнопки нет (например, нет прав).`},resolving:{required:!1,tsType:{name:`boolean`},description:`Идёт снятие — кнопка с загрузкой.`},resolveLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Снять'`,computed:!1}},resolvedLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Снято'`,computed:!1}},resolvedNote:{required:!1,tsType:{name:`ReactNode`},description:`Причина снятия («Замечание неактуально») — у снятого.`},deadline:{required:!1,tsType:{name:`ReactNode`},description:`Срок («5 дней»).`},assignee:{required:!1,tsType:{name:`RemarkPerson`},description:`Исполнитель.`},category:{required:!1,tsType:{name:`ReactNode`},description:`Категория («Нарушение ЧТУ»).`},files:{required:!1,tsType:{name:`Array`,elements:[{name:`RemarkFile`}],raw:`RemarkFile[]`},description:``},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(e: MouseEvent<HTMLElement>) => void`,signature:{arguments:[{type:{name:`MouseEvent`,elements:[{name:`HTMLElement`}],raw:`MouseEvent<HTMLElement>`},name:`e`}],return:{name:`void`}}},description:`Нажатие на карточку — например, перейти к месту замечания в документе.`},href:{required:!1,tsType:{name:`string`},description:``},selected:{required:!1,tsType:{name:`boolean`},description:`Это замечание сейчас открыто (выбрано). Только у кликабельной.`},actionLabel:{required:!1,tsType:{name:`string`},description:`Подпись нажатия для экранного диктора. По умолчанию — «Показать замечание в документе».`,defaultValue:{value:`'Показать замечание в документе'`,computed:!1}},forceState:{required:!1,tsType:{name:`union`,raw:`'hover' | 'active' | 'focus'`,elements:[{name:`literal`,value:`'hover'`},{name:`literal`,value:`'active'`},{name:`literal`,value:`'focus'`}]},description:`Принудительное состояние — только для витрины.`},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}function I({children:e}){return(0,z.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:24,alignItems:`flex-start`},children:[`white`,`grey`].map(t=>(0,z.jsxs)(m,{on:t===`white`?`grey`:`white`,style:{width:q},children:[(0,z.jsx)(`div`,{style:{marginBottom:12,fontFamily:`Inter, sans-serif`,fontSize:12,color:`#66788c`},children:t===`white`?`На белом`:`На сером`}),(0,z.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:e(t)})]},t))})}function L({children:e}){return(0,z.jsx)(`div`,{style:{fontFamily:`Inter, sans-serif`,fontSize:12,color:`#66788c`,marginTop:8},children:e})}function ce(){let[e,t]=(0,R.useState)(`2`),[n,r]=(0,R.useState)(null),[i,a]=(0,R.useState)({3:!0}),o=[{id:`1`,date:`16.09.2025`,text:U},{id:`2`,date:`18.09.2025`,text:`Не хватает документа «Эл/энергия». Прикрепить очень важные файлы, которые крайне необходимы.`},{id:`3`,date:`21.09.2025`,text:U}],s=e=>{r(e),setTimeout(()=>{r(null),a(t=>({...t,[e]:!0}))},1200)};return(0,z.jsx)(m,{on:`grey`,style:{width:q},children:(0,z.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:o.map(r=>(0,z.jsx)(N,{...i[r.id]?K:G,date:r.date,text:r.text,onResolve:()=>s(r.id),resolving:n===r.id,onClick:()=>t(r.id),selected:e===r.id},r.id))})})}var R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,le;function ue(){return(ue=e((()=>{R=t(),p(),F(),z=n(),B="\nИсточник — Figma UI Kit «Практис», карточка замечания «Comment» (node 14511:10933).\n\n| Проп | Значения | В Figma |\n|---|---|---|\n| `status` | `open` — действует / `resolved` — снято | Actively = Yes / No |\n| `onResolve`, `resolving` | кнопка «Снять» (stroke S) и загрузка; нет `onResolve` — нет кнопки (нет прав) | кнопка в шапке |\n| `resolvedNote` | причина снятия под текстом («Замечание неактуально») | Comment Container 2 |\n| `deadline`, `assignee`, `category` | низ карточки; нет ни одного — нет и черты | item × 3 |\n| `files` | плашки файлов (**FileItem**): посмотреть, скачать | File |\n| `maxLines` | обрезать текст до N строк | — |\n| `onClick` / `href`, `selected` | кликабельная: ведёт к месту замечания; `selected` — открыто сейчас | Status = Hover |\n\n**Открытое и снятое.** Открытое — с подложкой: на белом серая, на сером белая (как у Surface). Снятое —\nбез заливки, с тонкой обводкой: оно «отошло на второй план» на любом фоне.\n\n**Нажимается или нет — зависит от системы.** Где карточки только для чтения — не передавать\n`onClick`: без ховера и без курсора-руки. Где карточка ведёт к месту в документе — передать `onClick`\n(или `href`) и `selected` у открытого сейчас. «Снять» и файлы нажимаются отдельно и там, и там.\n\n**Состояния кликабельной карточки** (общие для всех карточек кита, решение Анастасии 2026-09-25):\n\n| Состояние | Обводка | Заливка |\n|---|---|---|\n| ховер | 1px primary #3c83f6 | своя |\n| нажатие | 2px #1a68e8 | своя |\n| выбрана | 2px primary | своя |\n| выбрана + ховер / нажатие | 2px #1a68e8 | своя |\n| фокус с клавиатуры | кольцо кита снаружи | своя |\n\nЗаливки у состояний нет: на белой карточке любая заливка читается как сильное затемнение.\n\n**Отличия от макета:** скругление — по вложенности подложек (в макете 6 везде); файлы — внутри карточки\nпод текстом (в макете — строкой под карточкой, вне заливки); иконки текста и причины — залитые\n`IconCommentFill` / `IconXCircleFill` (добавлены в кит из макета).\n",V={name:`Тестов Я. Т.`,position:`Менеджер по качеству`},H={name:`Иванов И. И.`},U=`Файл составлен неккорректно. Исправил ошибки и прикрепил правильный файл. ВАЖНО`,W=`Замечание с оооооочень длинным названием, которое уходит в несколько строк, и мы можем видеть полное название замечания для нашего удобства — если не обрезать его по числу строк`,G={date:`16.09.2025`,author:V,text:U,status:`open`,onResolve:()=>{},deadline:`5 дней`,assignee:H,category:`Нарушение ЧТУ`},K={date:`21.09.2025`,author:V,text:U,status:`resolved`,resolvedNote:`Замечание неактуально`,assignee:H,category:`Нарушение ЧТУ`},q=420,J={title:`UI Kit/Карточки/RemarkCard`,id:`ui-kit-remarkcard`,component:N,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:B}}},argTypes:{status:{control:`inline-radio`,options:[`open`,`resolved`]},text:{control:`text`},date:{control:`text`},deadline:{control:`text`},category:{control:`text`},resolvedNote:{control:`text`},maxLines:{control:{type:`number`,min:1,max:10}},forceState:{table:{disable:!0}},onClick:{table:{disable:!0}},href:{table:{disable:!0}},className:{table:{disable:!0}}},args:{...G}},Y={args:{...G,clickable:!0,selected:!1,resolving:!1},argTypes:{clickable:{control:`boolean`,name:`нажимается (ведёт в документ)`}},render:({clickable:e,...t})=>(0,z.jsx)(I,{children:()=>(0,z.jsx)(N,{...t,onClick:e?()=>{}:void 0})})},X={name:`Все состояния кликабельной`,parameters:{docs:{description:{story:`Кликабельная карточка (ведёт к месту в документе): открытое и снятое замечание во всех состояниях.`}}},render:()=>(0,z.jsx)(I,{children:()=>[G,K].map((e,t)=>(0,z.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,z.jsxs)(L,{children:[t===0?`Открытое`:`Снятое`,` — обычное`]}),(0,z.jsx)(N,{...e,onClick:()=>{}}),(0,z.jsx)(L,{children:`ховер`}),(0,z.jsx)(N,{...e,onClick:()=>{},forceState:`hover`}),(0,z.jsx)(L,{children:`нажатие`}),(0,z.jsx)(N,{...e,onClick:()=>{},forceState:`active`}),(0,z.jsx)(L,{children:`выбрано (открыто в документе)`}),(0,z.jsx)(N,{...e,onClick:()=>{},selected:!0}),(0,z.jsx)(L,{children:`выбрано + ховер`}),(0,z.jsx)(N,{...e,onClick:()=>{},selected:!0,forceState:`hover`}),(0,z.jsx)(L,{children:`фокус с клавиатуры`}),(0,z.jsx)(N,{...e,onClick:()=>{},forceState:`focus`})]},t))})},Z={name:`Не нажимается (только чтение)`,parameters:{docs:{description:{story:"Система, где карточки не нажимаются: без `onClick` — ни ховера, ни курсора-руки. «Снять» работает."}}},render:()=>(0,z.jsx)(I,{children:()=>(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(N,{...G}),(0,z.jsx)(N,{...K})]})})},Q={name:`Ведёт в документ (список)`,parameters:{docs:{description:{story:"Система, где карточка ведёт к месту замечания: нажатие выбирает карточку (`selected`) — это замечание открыто в документе. «Снять» — с загрузкой, после неё карточка становится снятой."}}},render:()=>(0,z.jsx)(ce,{})},$={name:`Крайние случаи`,parameters:{docs:{description:{story:"Длинные имена и текст, обрезка до 3 строк (`maxLines`), нет прав на «Снять», нет низа, файлы, узкая карточка 250."}}},render:()=>(0,z.jsx)(I,{children:()=>(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(L,{children:`длинное, maxLines = 3, нет прав на «Снять»`}),(0,z.jsx)(N,{...G,onResolve:void 0,maxLines:3,text:W,author:{name:`Константинопольский Александр Владимирович`,position:`Главный инженер проекта по качеству строительно-монтажных работ`},assignee:{name:`Константинопольский Александр Владимирович`},category:`Нарушение требований к оформлению исполнительной документации`}),(0,z.jsx)(L,{children:`без низа (нет срока, исполнителя, категории)`}),(0,z.jsx)(N,{date:`16.09.2025`,author:V,text:U,onResolve:()=>{}}),(0,z.jsx)(L,{children:`с файлами`}),(0,z.jsx)(N,{...G,files:[{key:`a`,name:`Акт КС-2 корпус 1.pdf`,onView:()=>{},onDownload:()=>{}},{key:`b`,name:`Исполнительная схема с оооочень длинным именем.dwg`,onDownload:()=>{}}]}),(0,z.jsx)(L,{children:`идёт снятие`}),(0,z.jsx)(N,{...G,resolving:!0}),(0,z.jsx)(L,{children:`узкая — 250`}),(0,z.jsx)(`div`,{style:{width:250},children:(0,z.jsx)(N,{...G})})]})})},le=[`Playground`,`States`,`ReadOnly`,`InDocument`,`Edge`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}})))()}ue();export{$ as Edge,Q as InDocument,Y as Playground,Z as ReadOnly,X as States,le as __namedExportsOrder,J as default};