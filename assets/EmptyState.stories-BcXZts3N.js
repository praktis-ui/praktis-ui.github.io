import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n,t as r}from"./Table-DRhCx_B0.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{Wo as a,ir as o,t as s}from"./icons-B1LEmBjt.js";import{m as c}from"./tokens-Cf9IueZ-.js";import{a as l,i as u}from"./iframe-BbKzeMWs.js";import{n as d,t as f}from"./InputSearch-DUPnqUY7.js";import{n as p,t as m}from"./Select-Di3wnAEz.js";function h({children:e,width:t=600,height:n=420}){return(0,y.jsx)(`div`,{style:{width:t,height:n,background:`var(--surface-white, #ffffff)`,borderRadius:12,boxShadow:`0 0 0 1px #eef3f9`},children:e})}function g({size:e=`m`,title:t=``,description:n=``,withAction:r=!0,withSecondary:i=!1}){let[s,c]=(0,v.useState)(``);return(0,y.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,y.jsx)(h,{children:(0,y.jsx)(u,{size:e,title:t,description:n||void 0,icon:(0,y.jsx)(a,{}),action:r?{label:`Загрузить`,icon:(0,y.jsx)(o,{size:14}),onClick:()=>c(`нажали «Загрузить»`)}:void 0,secondaryAction:i?{label:`Шаблон`,onClick:()=>c(`нажали «Шаблон»`)}:void 0})}),(0,y.jsx)(`span`,{style:{fontFamily:`Inter, sans-serif`,fontSize:12,color:`#7e7e7e`,minHeight:15},children:s})]})}function _(){let[e,t]=(0,v.useState)(``),n=(0,v.useMemo)(()=>C.filter(t=>`${t.code} ${t.name}`.toLowerCase().includes(e.trim().toLowerCase())),[e]);return(0,y.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,width:900},children:[(0,y.jsx)(`div`,{style:{width:300},children:(0,y.jsx)(f,{placeholder:`Поиск по шифру и названию`,value:e,onChange:e=>t(e.target.value)})}),(0,y.jsx)(r,{columns:w,dataSource:n,pagination:!1,searchQuery:e,onSearchReset:()=>t(``)})]})}var v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{v=t(),s(),c(),d(),p(),n(),l(),y=i(),b={title:`UI Kit/Сообщения и окна/EmptyState/EmptyState`,id:`ui-kit-emptystate-emptystate`,parameters:{layout:`padded`,docs:{description:{component:`
Источник — Figma UI Kit «Практис»: «Пустые страницы и ошибки» (canvas 7768:4600), «Компоненты
уведомлений» (7768:9898).

**EmptyState** — плашка на месте содержимого, которого нет: пустой список, «ничего не найдено».
Страницы 404 и 500 — отдельно, **ErrorPage**.

| Проп | Значения | В Figma |
|---|---|---|
| \`size\` | \`m\` / \`s\` / \`xs\` | Size = M / S / XS |
| \`kind="notFound"\` | «ничего не найдено» — готовые иконка и текст «Упс! Такого не нашлось» | поиск по таблице |
| \`onReset\` | у \`notFound\` — кнопка «Сбросить» (очистить поиск) | поиск по таблице |
| \`title\`, \`description\` | текст | заголовок и пояснение |
| \`icon\` | иконка кита (размер задаёт компонент), по умолчанию документ | Icon |
| \`image\` | картинка вместо иконки | — |
| \`action\` | основная кнопка \`{ label, icon, onClick, href }\` | button |
| \`secondaryAction\` | вторая кнопка (обведённая), перед основной | secondButton |

| Размер | Иконка | Заголовок | Пояснение | Кнопка |
|---|---|---|---|---|
| M | 80 | Heading/2, 24 | Large XL, 20 | L |
| S | 40 | Heading/3, 20 | Large, 16 | M |
| XS | 30 | Heading/5, 16 | Base, 14 | S |

Плашка занимает всю ширину и высоту места, куда её поставили, содержимое — по центру. Текст — не
шире 460.

**Текст обязателен — просто «Нет данных» не бывает** (правило дизайнера):
- **можно создать или загрузить** — заголовок «пока ничего нет», мелко коротко что сделать, и кнопка;
- **появится само, вручную не добавить** — заголовок и мелко, чего ждать.

**Пусто везде в ките — эта плашка, а не заглушка antd.** Table, Select и MultiSelect ставят её
сами (в таблице — S, в выпадающем списке — XS) и различают «нет данных» и «ничего не найдено»:
у Table для этого \`searchQuery\` и \`onSearchReset\`, у Select — то, что введено в его поиск.
Текст для пустого места им передают в \`emptyState\`; не передали — запасной «Здесь пока ничего нет»
(«Вариантов пока нет» в выпадающем списке). Остальным компонентам antd запасной текст подставляет
ThemeProvider.

**Решено по-своему:** в макете вторая кнопка тоже синяя — сделана обведённой (как на странице 500).
`}}},tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:[`m`,`s`,`xs`]},title:{control:`text`},description:{control:`text`},withAction:{control:`boolean`,name:`кнопка`,table:{category:`Слоты`}},withSecondary:{control:`boolean`,name:`вторая кнопка`,table:{category:`Слоты`}}},args:{size:`m`,title:`Пока нет ни одного листа`,description:`Загрузите лист, чтобы начать работу`,withAction:!0,withSecondary:!1}},x={render:e=>(0,y.jsx)(g,{...e})},S={name:`Размеры M / S / XS`,parameters:{docs:{description:{story:`Как в компоненте макета, в подложках одной ширины (418).`}}},render:()=>(0,y.jsx)(`div`,{style:{display:`flex`,gap:24,alignItems:`flex-start`},children:[`m`,`s`,`xs`].map(e=>(0,y.jsx)(h,{width:418,height:320,children:(0,y.jsx)(u,{size:e,title:`Пока нет ни одного листа`,description:`Загрузите лист, чтобы начать работу`,action:{label:`Загрузить`}})},e))})},C=[{key:`1`,code:`ГЦ-11-17-40-КЖ1`,name:`Железобетонные конструкции, корпус 1`,status:`В работе`},{key:`2`,code:`ГЦ-11-17-40-КЖ2`,name:`Железобетонные конструкции, корпус 2`,status:`Согласовано`},{key:`3`,code:`ГЦ-11-17-40-АР`,name:`Архитектурные решения`,status:`В работе`},{key:`4`,code:`ГЦ-11-17-40-ОВ`,name:`Отопление и вентиляция`,status:`На проверке`}],w=[{title:`Шифр`,dataIndex:`code`,width:200},{title:`Название`,dataIndex:`name`},{title:`Статус`,dataIndex:`status`,width:160}],T={name:`Ничего не найдено (таблица)`,parameters:{docs:{description:{story:"Правило макета: ничего не найдено — показываем шапку таблицы и плашку S. «Сбросить» в плашке и крестик в поиске очищают запрос. Введи, например, «мост». Таблице достаточно передать `searchQuery` и `onSearchReset` — плашку она ставит сама."}}},render:()=>(0,y.jsx)(_,{})},E={name:`Правило текста: создать / ждать`,parameters:{docs:{description:{story:`Слева — на месте можно создать: что сделать и кнопка. Справа — появится само: чего ждать, без кнопки. Просто «Нет данных» не бывает.`}}},render:()=>(0,y.jsxs)(`div`,{style:{display:`flex`,gap:24},children:[(0,y.jsx)(h,{width:418,height:280,children:(0,y.jsx)(u,{size:`s`,title:`Пока нет ни одного листа`,description:`Загрузите лист, чтобы начать работу`,action:{label:`Загрузить`,icon:(0,y.jsx)(o,{size:14})}})}),(0,y.jsx)(h,{width:418,height:280,children:(0,y.jsx)(u,{size:`s`,title:`Замечаний пока нет`,description:`Они появятся, когда проверяющий посмотрит документы`})})]})},D=[`Москва`,`Санкт-Петербург`,`Казань`,`Екатеринбург`].map(e=>({value:e,label:e})),O={name:`Пусто везде в ките`,parameters:{docs:{description:{story:"Таблица и селекты ставят плашку сами, текст места передаётся в `emptyState`. Пустая таблица — S; пустой выпадающий список — XS; в Select с поиском ввели то, чего нет, — «ничего не найдено» XS. Открой селекты."},story:{height:`560px`}}},render:()=>(0,y.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,width:900,minHeight:520},children:[(0,y.jsx)(r,{columns:w,dataSource:[],pagination:!1,emptyState:{title:`Пока нет ни одного листа`,description:`Загрузите лист, чтобы начать работу`,action:{label:`Загрузить`,icon:(0,y.jsx)(o,{size:14})}}}),(0,y.jsxs)(`div`,{style:{display:`flex`,gap:24},children:[(0,y.jsx)(m,{label:`Подрядчик`,placeholder:`Выберите`,options:[],emptyState:{title:`Подрядчиков пока нет`,description:`Появятся после аккредитации`}}),(0,y.jsx)(m,{label:`Поиск по городам`,placeholder:`Начните вводить`,options:D,showSearch:!0})]})]})},k=[`Playground`,`Sizes`,`NoResults`,`TextRule`,`Everywhere`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <Live {...args} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Размеры M / S / XS',
  parameters: {
    docs: {
      description: {
        story: 'Как в компоненте макета, в подложках одной ширины (418).'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'flex-start'
  }}>
      {(['m', 's', 'xs'] as const).map(size => <Box key={size} width={418} height={320}>
          <EmptyState size={size} title="Пока нет ни одного листа" description="Загрузите лист, чтобы начать работу" action={{
        label: 'Загрузить'
      }} />
        </Box>)}
    </div>
}`,...S.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Ничего не найдено (таблица)',
  parameters: {
    docs: {
      description: {
        story: 'Правило макета: ничего не найдено — показываем шапку таблицы и плашку S. «Сбросить» в плашке и крестик в поиске очищают запрос. Введи, например, «мост». Таблице достаточно передать \`searchQuery\` и \`onSearchReset\` — плашку она ставит сама.'
      }
    }
  },
  render: () => <NoResultsDemo />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Правило текста: создать / ждать',
  parameters: {
    docs: {
      description: {
        story: 'Слева — на месте можно создать: что сделать и кнопка. Справа — появится само: чего ждать, без кнопки. Просто «Нет данных» не бывает.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24
  }}>
      <Box width={418} height={280}>
        <EmptyState size="s" title="Пока нет ни одного листа" description="Загрузите лист, чтобы начать работу" action={{
        label: 'Загрузить',
        icon: <IconPlus size={buttonIconSize} />
      }} />
      </Box>
      <Box width={418} height={280}>
        <EmptyState size="s" title="Замечаний пока нет" description="Они появятся, когда проверяющий посмотрит документы" />
      </Box>
    </div>
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Пусто везде в ките',
  parameters: {
    docs: {
      description: {
        story: 'Таблица и селекты ставят плашку сами, текст места передаётся в \`emptyState\`. Пустая таблица — S; пустой выпадающий список — XS; в Select с поиском ввели то, чего нет, — «ничего не найдено» XS. Открой селекты.'
      },
      story: {
        height: '560px'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    width: 900,
    minHeight: 520
  }}>
      <Table<Row> columns={COLUMNS} dataSource={[]} pagination={false} emptyState={{
      title: 'Пока нет ни одного листа',
      description: 'Загрузите лист, чтобы начать работу',
      action: {
        label: 'Загрузить',
        icon: <IconPlus size={buttonIconSize} />
      }
    }} />
      <div style={{
      display: 'flex',
      gap: 24
    }}>
        <Select label="Подрядчик" placeholder="Выберите" options={[]} emptyState={{
        title: 'Подрядчиков пока нет',
        description: 'Появятся после аккредитации'
      }} />
        <Select label="Поиск по городам" placeholder="Начните вводить" options={CITY_OPTIONS} showSearch />
      </div>
    </div>
}`,...O.parameters?.docs?.source}}}})))()}A();export{O as Everywhere,T as NoResults,x as Playground,S as Sizes,E as TextRule,k as __namedExportsOrder,b as default};