import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-CvEwutAq.js";import{Qt as r,t as i}from"./icons-BmsQWa6t.js";import{n as a,t as o}from"./Input-fi10s-Qi.js";function s(){let[e,t]=(0,c.useState)(``),[n,r]=(0,c.useState)(!1),[i,a]=(0,c.useState)(``);return(0,c.useEffect)(()=>{if(!e)return;let t,n=setTimeout(()=>{r(!0),t=setTimeout(()=>{r(!1),a(e)},1e3)},400);return()=>{clearTimeout(n),clearTimeout(t),r(!1)}},[e]),(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,width:300},children:[(0,l.jsx)(o,{label:`ИНН`,placeholder:`Введите ИНН`,value:e,onChange:e=>t(e.target.value),loading:n}),(0,l.jsx)(`span`,{style:{fontFamily:`Inter, sans-serif`,fontSize:12,color:`#7e7e7e`},children:i?`проверено: ${i}`:`начни печатать`})]})}var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{c=t(),i(),a(),l=n(),u={title:`UI Kit/Input`,component:o,parameters:{layout:`centered`,docs:{description:{component:`
Источник — Figma UI Kit «Практис»: компонент Input (node 784:880/784:904, вид) и отдельный
поведенческий фрейм **«Правила импутов»** (node 7742:2198, как оно должно себя вести — это не
сам компонент, а фрейм-документация с описанием флоу).

## Флоу заполнения

Ховер/фокус — НЕ пропы, а нативные псевдоклассы \`:hover\`/\`:focus\`, отдельно включать не нужно.

1. **Default** — пустое поле с плейсхолдером, что нужно ввести.
2. **Hover** — навели на поле.
3. **Focused** — начали вводить текст, виден курсор.
4. **Заполнено, потеряли фокус** — если значение длиннее поля, оно анхорится влево и
   обрезается многоточием (обычный \`text-overflow: ellipsis\`, без единой строчки JS). При
   наведении на обрезанное значение появляется тултип с полным текстом — история
   **LongValueTooltip**. Клик в поле ещё раз ставит курсор туда, где кликнули, без
   многоточия; как только поле снова теряет фокус — опять обрезается.

## Error

Красная обводка — двух видов, но это один и тот же \`status="error"\`, разница только в том,
пустое поле или нет:

1. **Пустое** — пользователь пропустил обязательное поле (обычно \`errorMessage\` —
   «Поле обязательно для заполнения»).
2. **Заполненное некорректными данными** — значение есть, но не проходит валидацию
   (\`errorMessage\` — пояснение, что не так).

Оба вида рядом — история **ErrorVariants**. Если \`errorMessage\` не помещается в отведённое
место — он тоже обрезается многоточием, и при наведении показывает тултип с полным текстом
(история **LongErrorMessage**) — тот же механизм обрезки, что и у самого значения.

## Иконка информации

Проп \`infoText\` добавляет иконку ⓘ рядом с лейблом. При наведении иконка становится
акцентно-синей (\`#3c83f6\` — отдельный токен, не тот же синий, что у фокуса поля) и
показывает тултип с текстом \`infoText\` — история **WithInfoTooltip**.

## Disabled

Едва заметная рамка (\`#f2f2f2\`, black/250) — до 2026-09-10 была только у **InputSearch**,
здесь Figma рисовал disabled без рамки вовсе. Унифицировано на все инпуты кита: без неё поле
теряется на похожих светлых подложках (например у Shahmatka) — сознательное отступление от
узкой Figma-спеки конкретно Input в пользу общего паттерна.

Заведён настоящий Figma-токен \`border/input-disabled\` (коллекция Colors, рядом с остальными
\`border/*\`, алиас на примитив \`black/250\`) — не просто цвет в коде, реальная переменная в
дизайн-системе. Применён на disabled-состояния поля во всех трёх: **Input** (8 вариантов,
рамки не было вовсе), **InputPassword** (4 варианта, та же история) и **InputSearch**
(4 варианта × 2 узла — рамка уже была, но напрямую на примитиве \`black/250\` в обход
семантического слоя, переподключена на этот же токен).

По итогам проверки остальных состояний оказалось, что рамка везде — default/hover/focus/error
— тоже сидела на голых примитивах \`Palette\` (\`black/350\`, \`black/400\`, \`blue/600\`,
\`red/main\`) в обход семантического слоя \`Colors\`. Заведены ещё 4 токена по тому же образцу —
\`border/input-default\`, \`border/input-hover\`, \`border/input-focus\`, \`border/input-error\`
— и применены на все узлы полей всех трёх компонентов (Search — без error, там такого варианта
в Figma нет). Заодно нашлась и человеческая ошибка: фокус-рамка Search была на отдельном
акцентном синем (\`#3c83f6\`), а не на общем \`blue/600\`, как у Input/Password — унифицировано
на \`border/input-focus\` и в Figma, и в коде.

## Чего нет

\`TextArea\` / \`OTP\` — отдельные компоненты antd, не сделаны. \`Password\`/\`Search\` — см.
**UI Kit/InputPassword** и **UI Kit/InputSearch**. Остальной проп-интерфейс antd Input (prefix/
suffix/addonBefore/addonAfter/allowClear/onChange/...) прокидывается насквозь без ограничений.
`}}},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`s`,`m`]},status:{control:`select`,options:[void 0,`error`,`warning`]},disabled:{control:`boolean`},required:{control:`boolean`},label:{control:`text`},infoText:{control:`text`},loading:{control:`boolean`,name:`loading (загрузка)`},errorMessage:{control:`text`}},args:{placeholder:`Field content`,size:`m`,label:`Label`,required:!0,disabled:!1,errorMessage:`Поле обязательно для заполнения`}},d={},f={args:{label:void 0}},p={render:e=>(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:12},children:[(0,l.jsx)(o,{...e,size:`s`,label:void 0,placeholder:`Small`}),(0,l.jsx)(o,{...e,size:`m`,label:void 0,placeholder:`Middle`})]})},m={parameters:{docs:{description:{story:`Default → Hover → Focused → Error → Disabled из флоу заполнения. Наведи или кликни, чтобы увидеть hover/focus вживую.`}}},render:e=>(0,l.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:(0,l.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,l.jsx)(o,{...e,label:void 0,placeholder:`Default`}),(0,l.jsx)(o,{...e,label:void 0,placeholder:`С значением`,defaultValue:`Field content`}),(0,l.jsx)(o,{...e,label:void 0,status:`error`,placeholder:`Error`}),(0,l.jsx)(o,{...e,label:void 0,disabled:!0,placeholder:`Disabled`})]})})},h={},g={args:{required:!0}},_={args:{status:`error`,defaultValue:``}},v={parameters:{docs:{description:{story:`Один и тот же status="error" — разница только в том, пустое поле или заполненное неправильными данными.`}}},render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:24},children:[(0,l.jsx)(o,{label:`Имя`,required:!0,status:`error`,placeholder:`Введите имя`,errorMessage:`Поле обязательно для заполнения`}),(0,l.jsx)(o,{label:`Имя`,required:!0,status:`error`,defaultValue:`Field content`,errorMessage:`Не можем принять некоторые символы`})]})},y={args:{disabled:!0,defaultValue:`Field content`}},b={parameters:{docs:{description:{story:`Наведи на иконку ⓘ — она станет акцентно-синей и покажет тултип с infoText.`}}},args:{infoText:`Подсказка рядом с лейблом`}},x={args:{label:void 0,prefix:(0,l.jsx)(r,{size:14})}},S={args:{label:void 0,allowClear:!0,defaultValue:`Field content`}},C={args:{label:`Адрес`,defaultValue:`Санкт-Петербург, Ушаковская наб., 3, корп. 1с`},decorators:[e=>(0,l.jsx)(`div`,{style:{width:250},children:(0,l.jsx)(e,{})})],parameters:{docs:{description:{story:`Наведи на обрезанное значение — появится тултип с полным текстом. Тултип показывается, только когда значение реально обрезано, а не всегда.`}}}},w={args:{label:`Имя`,status:`error`,defaultValue:`Field content`,errorMessage:`Не можем принять некоторые символы - удалите их немедленно`},decorators:[e=>(0,l.jsx)(`div`,{style:{width:250},children:(0,l.jsx)(e,{})})],parameters:{docs:{description:{story:`Тот же механизм обрезки-с-тултипом, что и у значения поля, только для errorMessage.`}}}},T={name:`Загрузка`,parameters:{docs:{description:{story:"Проп `loading`: спиннер справа в поле (тот же, что у Select в загрузке), печатать можно — например, пока идёт проверка значения. В Figma у полей загрузки нет. Слева — живой пример: начни печатать."}}},render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`flex-start`},children:[(0,l.jsx)(s,{}),(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,width:300},children:[(0,l.jsx)(o,{size:`m`,defaultValue:`7801234567`,loading:!0}),(0,l.jsx)(o,{size:`s`,defaultValue:`7801234567`,loading:!0})]})]})},E=[`Playground`,`Bare`,`Sizes`,`States`,`WithLabel`,`Required`,`Error`,`ErrorVariants`,`Disabled`,`WithInfoTooltip`,`WithIcon`,`AllowClear`,`LongValueTooltip`,`LongErrorMessage`,`Loading`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12
  }}>
      <Input {...args} size="s" label={undefined} placeholder="Small" />
      <Input {...args} size="m" label={undefined} placeholder="Middle" />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default → Hover → Focused → Error → Disabled из флоу заполнения. Наведи или кликни, чтобы увидеть hover/focus вживую.'
      }
    }
  },
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <div style={{
      display: 'flex',
      gap: 12
    }}>
        <Input {...args} label={undefined} placeholder="Default" />
        <Input {...args} label={undefined} placeholder="С значением" defaultValue="Field content" />
        <Input {...args} label={undefined} status="error" placeholder="Error" />
        <Input {...args} label={undefined} disabled placeholder="Disabled" />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    defaultValue: ''
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Один и тот же status="error" — разница только в том, пустое поле или заполненное неправильными данными.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24
  }}>
      <Input label="Имя" required status="error" placeholder="Введите имя" errorMessage="Поле обязательно для заполнения" />
      <Input label="Имя" required status="error" defaultValue="Field content" errorMessage="Не можем принять некоторые символы" />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'Field content'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Наведи на иконку ⓘ — она станет акцентно-синей и покажет тултип с infoText.'
      }
    }
  },
  args: {
    infoText: 'Подсказка рядом с лейблом'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    prefix: <IconSearch size={14} />
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    allowClear: true,
    defaultValue: 'Field content'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Адрес',
    defaultValue: 'Санкт-Петербург, Ушаковская наб., 3, корп. 1с'
  },
  decorators: [Story => <div style={{
    width: 250
  }}><Story /></div>],
  parameters: {
    docs: {
      description: {
        story: 'Наведи на обрезанное значение — появится тултип с полным текстом. Тултип показывается, только когда значение реально обрезано, а не всегда.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Имя',
    status: 'error',
    defaultValue: 'Field content',
    errorMessage: 'Не можем принять некоторые символы - удалите их немедленно'
  },
  decorators: [Story => <div style={{
    width: 250
  }}><Story /></div>],
  parameters: {
    docs: {
      description: {
        story: 'Тот же механизм обрезки-с-тултипом, что и у значения поля, только для errorMessage.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Загрузка',
  parameters: {
    docs: {
      description: {
        story: 'Проп \`loading\`: спиннер справа в поле (тот же, что у Select в загрузке), печатать можно — например, пока идёт проверка значения. В Figma у полей загрузки нет. Слева — живой пример: начни печатать.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'flex-start'
  }}>
      <CheckDemo />
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      width: 300
    }}>
        <Input size="m" defaultValue="7801234567" loading />
        <Input size="s" defaultValue="7801234567" loading />
      </div>
    </div>
}`,...T.parameters?.docs?.source}}}})))()}D();export{S as AllowClear,f as Bare,y as Disabled,_ as Error,v as ErrorVariants,T as Loading,w as LongErrorMessage,C as LongValueTooltip,d as Playground,g as Required,p as Sizes,m as States,x as WithIcon,b as WithInfoTooltip,h as WithLabel,E as __namedExportsOrder,u as default};