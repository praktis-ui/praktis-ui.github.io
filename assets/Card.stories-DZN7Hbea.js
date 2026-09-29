import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Button-GZMQfLYZ.js";import{n as i,t as a}from"./Surface-DrGr8a0X.js";import{n as o,t as s}from"./Tag-oTIrj8-1.js";import{n as c,t as l}from"./Card-z2bKDhVj.js";function u({children:e}){return(0,d.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:24,alignItems:`flex-start`},children:[`white`,`grey`].map(t=>(0,d.jsxs)(a,{on:t===`white`?`grey`:`white`,style:{width:p},children:[(0,d.jsx)(`div`,{style:{marginBottom:12,fontFamily:`Inter, sans-serif`,fontSize:12,color:`#66788c`},children:t===`white`?`На белом`:`На сером`}),(0,d.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:e})]},t))})}var d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),i(),o(),c(),d=t(),f='\n**Card** — основа любой карточки кита: подложка (Surface) + состояния нажатия + структура.\n\n**Структура — как у модалки** (решение Анастасии 2026-09-29): шапка наверху, кнопки внизу, в середине\nчто угодно; сверху ещё строка тегов. Все части необязательные, порядок — всегда этот:\n\n| Часть | Проп | Вид |\n|---|---|---|\n| 1. теги / статусы, дата | `tags`, `date` | облако `Tag`, переносится; дата мелко (12) справа |\n| 2. заголовок | `heading`, `headingLevel` | на всю строку, в сколько угодно строк; H3 20 (4 — 18, 5 — 16) |\n| 3. пояснение | `description` | 14, text/black-secondary |\n| 4. содержимое | `children` | что угодно: таблица, поля, список |\n| 5. кнопки | `buttons` | внизу справа, через 16 — как в модалке |\n\nМежду частями 16, заголовок → пояснение 8, перед кнопками 24. Ни одной части не передано — просто подложка,\nвнутри `children` как есть (так построены RemarkCard, StatCard, EntityCard).\n\n**Цвет и форма** — как у Surface: противоположный фону, скругление по вложенности, без обводки и **без тени**.\n`fill="outline"` — без заливки, с тонкой обводкой.\n\n**Кликабельная** (`onClick` / `href`) — только обводка, без заливки: ховер 1px primary, нажатие 2px темнее,\nвыбрана (`selected`) 2px primary, фокус — кольцо кита. Кнопки внутри нажимаются отдельно.\n',p=520,m=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s,{status:`success`,children:`Подписан`}),(0,d.jsx)(s,{status:`warning`,children:`На согласовании`})]}),h=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{variant:`secondary`,children:`Выгрузить`}),(0,d.jsx)(r,{variant:`primary`,children:`Добавить`})]}),g=(0,d.jsx)(`div`,{style:{fontFamily:`Inter, sans-serif`,fontSize:14,color:`#41484a`},children:`Здесь содержимое раздела: таблица, поля, список.`}),_={title:`UI Kit/Карточки/Card`,id:`ui-kit-card`,component:l,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:f}}},argTypes:{heading:{control:`text`},description:{control:`text`},date:{control:`text`},headingLevel:{control:`inline-radio`,options:[3,4,5]},tags:{control:!1},buttons:{control:!1},children:{control:!1},forceState:{table:{disable:!0}},onClick:{table:{disable:!0}},href:{table:{disable:!0}}}},v={args:{heading:`Договоры объекта`,description:`Действующие договоры и дополнительные соглашения по объекту «Чистое небо».`,date:`28.09.2026`,headingLevel:3,withTags:!0,withButtons:!0,withContent:!0,clickable:!1},argTypes:{withTags:{control:`boolean`,name:`теги`},withButtons:{control:`boolean`,name:`кнопки`},withContent:{control:`boolean`,name:`содержимое`},clickable:{control:`boolean`,name:`нажимается`}},render:({withTags:e,withButtons:t,withContent:n,clickable:r,...i})=>(0,d.jsx)(u,{children:(0,d.jsx)(l,{...i,tags:e?m:void 0,buttons:t?h:void 0,onClick:r?()=>{}:void 0,actionLabel:r?`Открыть раздел`:void 0,children:n?g:void 0})})},y={name:`Структура: части по желанию`,parameters:{docs:{description:{story:`Любой набор частей — порядок сохраняется. Длинный заголовок переносится, не обрезается.`}}},render:()=>(0,d.jsxs)(u,{children:[(0,d.jsx)(l,{tags:m,date:`28.09.2026`,heading:`Договоры объекта «Многоквартирный дом со встроенными помещениями, корпус 1, очередь 7, Санкт-Петербург»`,description:`Действующие договоры и дополнительные соглашения по объекту.`,buttons:h,children:g}),(0,d.jsx)(l,{heading:`Только заголовок и кнопки`,buttons:(0,d.jsx)(r,{variant:`primary`,children:`Добавить`})}),(0,d.jsx)(l,{tags:(0,d.jsx)(s,{status:`processing`,children:`В работе`}),heading:`Теги и заголовок, заголовок H5`,headingLevel:5}),(0,d.jsx)(l,{heading:`Заголовок и пояснение`,description:`Без тегов, без содержимого и без кнопок.`})]})},b={name:`Кликабельная: состояния`,parameters:{docs:{description:{story:`Ховер, нажатие, выбрана, фокус — только обводкой. Кнопки внутри нажимаются отдельно.`}}},render:()=>(0,d.jsxs)(u,{children:[[void 0,`hover`,`active`,`focus`].map(e=>(0,d.jsx)(l,{onClick:()=>{},actionLabel:`Открыть раздел`,forceState:e,tags:(0,d.jsx)(s,{status:`success`,children:`Подписан`}),heading:e===void 0?`Обычная`:e===`hover`?`Ховер`:e===`active`?`Нажатие`:`Фокус с клавиатуры`,buttons:(0,d.jsx)(r,{variant:`secondary`,children:`Выгрузить`})},e??`default`)),(0,d.jsx)(l,{onClick:()=>{},actionLabel:`Открыть раздел`,selected:!0,tags:(0,d.jsx)(s,{status:`success`,children:`Подписан`}),heading:`Выбрана`,buttons:(0,d.jsx)(r,{variant:`secondary`,children:`Выгрузить`})})]})},x=[`Playground`,`Structure`,`States`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'Договоры объекта',
    description: 'Действующие договоры и дополнительные соглашения по объекту «Чистое небо».',
    date: '28.09.2026',
    headingLevel: 3,
    withTags: true,
    withButtons: true,
    withContent: true,
    clickable: false
  } as PlaygroundArgs,
  argTypes: {
    withTags: {
      control: 'boolean',
      name: 'теги'
    },
    withButtons: {
      control: 'boolean',
      name: 'кнопки'
    },
    withContent: {
      control: 'boolean',
      name: 'содержимое'
    },
    clickable: {
      control: 'boolean',
      name: 'нажимается'
    }
  },
  render: ({
    withTags,
    withButtons,
    withContent,
    clickable,
    ...args
  }) => <OnBackgrounds>
      <Card {...args} tags={withTags ? tags : undefined} buttons={withButtons ? buttons : undefined} onClick={clickable ? () => {} : undefined} actionLabel={clickable ? 'Открыть раздел' : undefined}>
        {withContent ? content : undefined}
      </Card>
    </OnBackgrounds>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Структура: части по желанию',
  parameters: {
    docs: {
      description: {
        story: 'Любой набор частей — порядок сохраняется. Длинный заголовок переносится, не обрезается.'
      }
    }
  },
  render: () => <OnBackgrounds>
      <Card tags={tags} date="28.09.2026" heading="Договоры объекта «Многоквартирный дом со встроенными помещениями, корпус 1, очередь 7, Санкт-Петербург»" description="Действующие договоры и дополнительные соглашения по объекту." buttons={buttons}>
        {content}
      </Card>
      <Card heading="Только заголовок и кнопки" buttons={<Button variant="primary">Добавить</Button>} />
      <Card tags={<Tag status="processing">В работе</Tag>} heading="Теги и заголовок, заголовок H5" headingLevel={5} />
      <Card heading="Заголовок и пояснение" description="Без тегов, без содержимого и без кнопок." />
    </OnBackgrounds>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Кликабельная: состояния',
  parameters: {
    docs: {
      description: {
        story: 'Ховер, нажатие, выбрана, фокус — только обводкой. Кнопки внутри нажимаются отдельно.'
      }
    }
  },
  render: () => <OnBackgrounds>
      {([undefined, 'hover', 'active', 'focus'] as const).map(force => <Card key={force ?? 'default'} onClick={() => {}} actionLabel="Открыть раздел" forceState={force} tags={<Tag status="success">Подписан</Tag>} heading={force === undefined ? 'Обычная' : force === 'hover' ? 'Ховер' : force === 'active' ? 'Нажатие' : 'Фокус с клавиатуры'} buttons={<Button variant="secondary">Выгрузить</Button>} />)}
      <Card onClick={() => {}} actionLabel="Открыть раздел" selected tags={<Tag status="success">Подписан</Tag>} heading="Выбрана" buttons={<Button variant="secondary">Выгрузить</Button>} />
    </OnBackgrounds>
}`,...b.parameters?.docs?.source}}}})))()}S();export{v as Playground,b as States,y as Structure,x as __namedExportsOrder,_ as default};