import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./tooltip-Dt-iiBvR.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{Mo as a,Wo as o,cs as s,mo as c,ni as ee,t as l}from"./icons-CXeS3Xzr.js";import{g as u,h as d}from"./tokens-BQ6gK8U-.js";import"./figma-colors-lO-pgkJ7.js";import{n as te,t as ne}from"./DropdownMenu-DKomm10u.js";import{n as re,t as f}from"./IconButton-CddcZKCT.js";import{n as ie,t as p}from"./Surface-DrGr8a0X.js";import{n as m,t as ae}from"./useFitText--KNQ3aVK.js";import{n as h,t as oe}from"./Tag-oTIrj8-1.js";import{n as g,t as _}from"./Card-z2bKDhVj.js";import{n as se,t as v}from"./StatCard-8J78Xlz0.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{y=`_card_s31o7_6`,b=`_inner_s31o7_10`,x=`_head_s31o7_17`,S=`_icon_s31o7_24`,C=`_tools_s31o7_40`,w=`_text_s31o7_50`,T=`_title_s31o7_58`,E=`_titleLive_s31o7_71`,D=`_sub_s31o7_75`,O=`_description_s31o7_82`,k=`_meta_s31o7_87`,A=`_sep_s31o7_92`,j=`_stats_s31o7_100`,M={card:y,inner:b,head:x,icon:S,tools:C,text:w,title:T,titleLive:E,sub:D,description:O,meta:k,sep:A,stats:j}})))()}function ce({children:e}){let t=(0,F.useRef)(null),{shown:n,truncated:i}=m(e,t,2);return(0,I.jsx)(r,{title:i?e:``,color:u.tooltipBg,children:(0,I.jsx)(`h4`,{ref:t,className:[M.title,i&&M.titleLive].filter(Boolean).join(` `),onClick:i?()=>t.current?.closest(`[data-surface]`)?.querySelector(`:scope > button, :scope > a`)?.click():void 0,children:n})})}function P({title:e,description:t,meta:n,icon:r,status:i,actions:a,menu:o,onMenuClick:s,className:c,children:l,...u}){let d=!!(a?.length||i||o?.length);return(0,I.jsx)(_,{...u,className:[M.card,c].filter(Boolean).join(` `),children:(0,I.jsxs)(`div`,{className:M.inner,children:[(r||d)&&(0,I.jsxs)(`div`,{className:M.head,children:[r&&(0,I.jsx)(p,{level:2,padding:0,className:M.icon,children:r}),d&&(0,I.jsxs)(`div`,{className:M.tools,children:[a?.map(e=>(0,I.jsx)(f,{icon:e.icon,label:e.label,variant:`secondary`,onClick:e.onClick},e.key)),i&&(0,I.jsx)(oe,{status:i.status,icon:i.icon,children:i.label}),o&&o.length>0&&(0,I.jsx)(ne,{items:o,onItemClick:s,placement:`bottomRight`,trigger:[`click`],children:(0,I.jsx)(f,{icon:(0,I.jsx)(ee,{}),label:`Ещё действия`,variant:`secondary`})})]})]}),(0,I.jsxs)(`div`,{className:M.text,children:[(0,I.jsx)(ce,{children:e}),(t||n)&&(0,I.jsxs)(`p`,{className:M.sub,children:[t&&(0,I.jsx)(`span`,{className:M.description,children:t}),t&&n&&(0,I.jsx)(`span`,{className:M.sep,"aria-hidden":!0,children:`•`}),t&&n&&` `,n&&(0,I.jsx)(`span`,{className:M.meta,children:n})]})]}),l&&(0,I.jsx)(`div`,{className:M.stats,children:l})]})})}var F,I;function L(){return(L=e((()=>{n(),F=t(),l(),d(),g(),te(),re(),ie(),ae(),h(),N(),I=i(),P.__docgenInfo={description:``,methods:[],displayName:`EntityCard`,props:{title:{required:!0,tsType:{name:`ReactNode`},description:``},description:{required:!1,tsType:{name:`ReactNode`},description:`Строка под заголовком: что это.`},meta:{required:!1,tsType:{name:`ReactNode`},description:`Мелкая строка после описания: «Изменён 5 мин назад».`},icon:{required:!1,tsType:{name:`ReactNode`},description:`Иконка сущности в подложке слева сверху.`},status:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ label: ReactNode; status: TagStatus; icon?: boolean }`,signature:{properties:[{key:`label`,value:{name:`ReactNode`,required:!0}},{key:`status`,value:{name:`union`,raw:`'default' | 'success' | 'error' | 'processing' | 'warning'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'processing'`},{name:`literal`,value:`'warning'`}],required:!0}},{key:`icon`,value:{name:`boolean`,required:!1}}]}},description:`Статус справа сверху — Tag.`},actions:{required:!1,tsType:{name:`Array`,elements:[{name:`EntityCardAction`}],raw:`EntityCardAction[]`},description:`Кнопки-иконки справа сверху.`},menu:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:`DropdownMenuOption | DropdownMenuGroup | DropdownMenuDivider`,elements:[{name:`DropdownMenuOption`},{name:`DropdownMenuGroup`},{name:`DropdownMenuDivider`}]}],raw:`DropdownMenuEntry[]`},description:`Пункты меню «⋮». Нет пунктов — нет кнопки.`},onMenuClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:`Показатели — обычно StatCard.`}},composes:[`Omit`]}})))()}function R(){let[e,t]=(0,B.useState)(`Нажмите кнопку, меню или саму карточку`);return{log:e,setLog:t,actions:e=>[{key:`view`,icon:(0,V.jsx)(c,{}),label:`Посмотреть`,onClick:()=>t(`«${e}» — посмотреть`)},{key:`copy`,icon:(0,V.jsx)(s,{}),label:`Скопировать`,onClick:()=>t(`«${e}» — скопировать`)},{key:`edit`,icon:(0,V.jsx)(a,{}),label:`Редактировать`,onClick:()=>t(`«${e}» — редактировать`)}],onMenu:e=>n=>t(`«${e}» — ${G.find(e=>e.key===n)?.label.toLowerCase()}`)}}function le(){let{log:e,actions:t,onMenu:n}=R();return(0,V.jsxs)(U,{children:[(0,V.jsx)(W,{children:q.map(e=>(0,V.jsxs)(P,{icon:(0,V.jsx)(o,{}),title:e.name,description:e.place,meta:e.changed,status:{label:e.status[0],status:e.status[1]},actions:t(e.name),menu:G,onMenuClick:n(e.name),children:[(0,V.jsx)(v,{title:`Заявок`,value:e.requests,note:e.late?`просрочено ${e.late}`:`без просрочек`}),(0,V.jsx)(v,{title:`Сумма`,value:e.sum,unit:`₽`})]},e.name))}),(0,V.jsx)(K,{children:e})]})}function z(){let{log:e,setLog:t,actions:n,onMenu:r}=R(),[i,a]=(0,B.useState)(null);return(0,V.jsxs)(U,{children:[(0,V.jsx)(W,{children:q.slice(0,2).map(e=>(0,V.jsxs)(P,{icon:(0,V.jsx)(o,{}),title:e.name,description:e.place,meta:e.changed,status:{label:e.status[0],status:e.status[1]},actions:n(e.name),menu:G,onMenuClick:r(e.name),onClick:()=>{a(e.name),t(`Открыта карточка «${e.name}»`)},selected:i===e.name,actionLabel:`Открыть ${e.name}`,children:[(0,V.jsx)(v,{title:`Заявок`,value:e.requests}),(0,V.jsx)(v,{title:`Сумма`,value:e.sum,unit:`₽`})]},e.name))}),(0,V.jsx)(K,{children:e})]})}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{B=t(),l(),se(),L(),V=i(),H={title:`UI Kit/Карточки/EntityCard`,id:`ui-kit-entitycard`,component:P,parameters:{layout:`padded`,docs:{description:{component:"\nСоставная карточка «сущность в сущности»: карточка записи (договор, форма, процесс) с её\nпоказателями внутри — плитками **StatCard**. В Figma UI Kit «Практис» такой нет — собрана по правилам\nкита из его частей: **Card** (основа, ховер), **Surface** (подложка иконки), **IconButton** (действия),\n**Tag** (статус), **DropdownMenu** (меню «⋮»), **StatCard** (показатели). На согласовании у дизайнера.\n\n| Проп | Значения | Стиль |\n|---|---|---|\n| `title` | заголовок, до 2 строк | Heading H4 18 |\n| `description`, `meta` | что это; мелкая строка («Изменён 5 мин назад») через точку | Base 14 / Small 12, text/grey-secondary |\n| `icon` | иконка сущности | подложка 40, скругление 12, иконка 24 |\n| `actions` | `{ key, icon, label, onClick }[]` — кнопки справа сверху | IconButton, через 8 |\n| `status` | `{ label, status }` | Tag |\n| `menu`, `onMenuClick` | пункты меню «⋮» | DropdownMenu |\n| `children` | показатели — обычно StatCard; в карточке ~430 — по два в ряд | сетка auto-fit от 160 через 16 |\n| `onClick` / `href`, `selected` | вся карточка открывает запись; кнопки внутри работают отдельно | как у Card |\n\n**Подложки** — по правилу кита: на сером фоне карточка белая (20), плитки внутри — серые (12).\n\n**Иконки кнопок — Stroke** (`src/icons`): набор Fat — только для стрелок.\n"}}},tags:[`autodocs`],argTypes:{title:{control:`text`},description:{control:`text`},meta:{control:`text`},icon:{control:!1,table:{category:`Для разработчиков — передаётся из кода`}},actions:{control:!1,table:{category:`Для разработчиков — передаётся из кода`}},status:{control:!1,table:{category:`Для разработчиков — передаётся из кода`}},menu:{control:!1,table:{category:`Для разработчиков — передаётся из кода`}},children:{control:!1,table:{category:`Для разработчиков — передаётся из кода`}}},args:{title:`Договор подряда № 45-П`,description:`ЖК «Северный», корпус 3`,meta:`Изменён 5 мин назад`}},U=({children:e})=>(0,V.jsx)(`div`,{style:{padding:24,background:`var(--surface-grey, #f5f8fb)`,borderRadius:12},children:e}),W=({children:e})=>(0,V.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(420px, 1fr))`,gap:16},children:e}),G=[{key:`archive`,label:`В архив`},{key:`history`,label:`История изменений`},{key:`delete`,label:`Удалить`}],K=({children:e})=>(0,V.jsx)(`p`,{style:{margin:`16px 0 0`,fontFamily:`Inter, sans-serif`,fontSize:14,color:`var(--text-grey-secondary)`},children:e}),q=[{name:`Договор подряда № 45-П`,place:`ЖК «Северный», корпус 3`,changed:`Изменён 5 мин назад`,status:[`Действует`,`success`],requests:36,sum:248e4,late:4},{name:`Договор поставки № 12-М`,place:`ЖК «Северный», корпус 1`,changed:`Изменён вчера`,status:[`Приостановлен`,`warning`],requests:12,sum:94e4,late:0},{name:`Договор подряда № 51-П`,place:`Школа на 1100 мест`,changed:`Изменён 10 мин назад`,status:[`Расторгнут`,`error`],requests:8,sum:312500,late:2},{name:`Договор на проектирование № 7-ПР`,place:`Квартал «Лесной», очередь 2`,changed:`Изменён 3 мин назад`,status:[`Действует`,`success`],requests:54,sum:612e4,late:0}],J={render:e=>(0,V.jsx)(()=>{let{log:t,actions:n,onMenu:r}=R();return(0,V.jsxs)(U,{children:[(0,V.jsx)(`div`,{style:{maxWidth:560},children:(0,V.jsxs)(P,{...e,icon:(0,V.jsx)(o,{}),status:{label:`Действует`,status:`success`},actions:n(String(e.title)),menu:G,onMenuClick:r(String(e.title)),children:[(0,V.jsx)(v,{title:`Заявок`,value:36,delta:{value:`+6`,period:`за неделю`}}),(0,V.jsx)(v,{title:`Сумма`,value:248e4,unit:`₽`})]})}),(0,V.jsx)(K,{children:t})]})},{})},Y={name:`Список карточек`,parameters:{docs:{description:{story:`Как на странице раздела: карточки через 16 на сером фоне. Кнопки, статус и меню «⋮» — справа сверху; показатели — плитки StatCard.`}}},render:()=>(0,V.jsx)(le,{})},X={name:`Кликабельная`,parameters:{docs:{description:{story:`Вся карточка открывает запись: ховер — синяя обводка, открытая — 2px. Кнопки, меню и плитки внутри нажимаются отдельно.`}}},render:()=>(0,V.jsx)(z,{})},Z={name:`Длинный текст и без частей`,parameters:{docs:{description:{story:`Заголовок — до 2 строк с отточием; описание и мета переносятся. Слева — карточка без иконки, кнопок и меню: только статус и показатели.`}}},render:()=>(0,V.jsx)(U,{children:(0,V.jsxs)(W,{children:[(0,V.jsxs)(P,{icon:(0,V.jsx)(o,{}),title:`Договор генерального подряда на строительство объекта «Многоквартирный жилой дом с подземной автостоянкой» № 2026/145-ГП`,description:`ЖК «Северный», корпус 3, секции 1–4, включая благоустройство прилегающей территории`,meta:`Изменён 28 сентября 2026 в 17:40`,status:{label:`Действует`,status:`success`},actions:[{key:`view`,icon:(0,V.jsx)(c,{}),label:`Посмотреть`}],menu:G,children:[(0,V.jsx)(v,{title:`Заявок`,value:36}),(0,V.jsx)(v,{title:`Сумма`,value:12676938080,unit:`₽`})]}),(0,V.jsxs)(P,{title:`Договор поставки № 12-М`,description:`ЖК «Северный», корпус 1`,status:{label:`Приостановлен`,status:`warning`},children:[(0,V.jsx)(v,{title:`Заявок`,value:12}),(0,V.jsx)(v,{title:`Просрочено`,value:3,tone:`danger`})]})]})})},Q=[`Playground`,`List`,`Clickable`,`Edge`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: a => {
    const Inner = () => {
      const {
        log,
        actions,
        onMenu
      } = useLog();
      return <Page>
          <div style={{
          maxWidth: 560
        }}>
            <EntityCard {...a} icon={<IconDoc />} status={{
            label: 'Действует',
            status: 'success'
          }} actions={actions(String(a.title))} menu={MENU} onMenuClick={onMenu(String(a.title))}>
              <StatCard title="Заявок" value={36} delta={{
              value: '+6',
              period: 'за неделю'
            }} />
              <StatCard title="Сумма" value={2480000} unit="₽" />
            </EntityCard>
          </div>
          <Log>{log}</Log>
        </Page>;
    };
    return <Inner />;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Список карточек',
  parameters: {
    docs: {
      description: {
        story: 'Как на странице раздела: карточки через 16 на сером фоне. Кнопки, статус и меню «⋮» — справа сверху; показатели — плитки StatCard.'
      }
    }
  },
  render: () => <ListStory />
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Кликабельная',
  parameters: {
    docs: {
      description: {
        story: 'Вся карточка открывает запись: ховер — синяя обводка, открытая — 2px. Кнопки, меню и плитки внутри нажимаются отдельно.'
      }
    }
  },
  render: () => <ClickableStory />
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Длинный текст и без частей',
  parameters: {
    docs: {
      description: {
        story: 'Заголовок — до 2 строк с отточием; описание и мета переносятся. Слева — карточка без иконки, кнопок и меню: только статус и показатели.'
      }
    }
  },
  render: () => <Page>
      <Grid>
        <EntityCard icon={<IconDoc />} title="Договор генерального подряда на строительство объекта «Многоквартирный жилой дом с подземной автостоянкой» № 2026/145-ГП" description="ЖК «Северный», корпус 3, секции 1–4, включая благоустройство прилегающей территории" meta="Изменён 28 сентября 2026 в 17:40" status={{
        label: 'Действует',
        status: 'success'
      }} actions={[{
        key: 'view',
        icon: <IconEye />,
        label: 'Посмотреть'
      }]} menu={MENU}>
          <StatCard title="Заявок" value={36} />
          <StatCard title="Сумма" value={12676938080} unit="₽" />
        </EntityCard>
        <EntityCard title="Договор поставки № 12-М" description="ЖК «Северный», корпус 1" status={{
        label: 'Приостановлен',
        status: 'warning'
      }}>
          <StatCard title="Заявок" value={12} />
          <StatCard title="Просрочено" value={3} tone="danger" />
        </EntityCard>
      </Grid>
    </Page>
}`,...Z.parameters?.docs?.source}}}})))()}$();export{X as Clickable,Z as Edge,Y as List,J as Playground,Q as __namedExportsOrder,H as default};