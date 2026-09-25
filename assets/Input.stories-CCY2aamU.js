import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-r_k3QGfr.js";import{Qt as n,t as r}from"./icons-CxwqsfdL.js";import{n as i,t as a}from"./Input-9NCNgVW2.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{r(),i(),o=t(),s={title:`UI Kit/Input`,component:a,parameters:{layout:`centered`,docs:{description:{component:`
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
`}}},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`s`,`m`]},status:{control:`select`,options:[void 0,`error`,`warning`]},disabled:{control:`boolean`},required:{control:`boolean`},label:{control:`text`},infoText:{control:`text`},errorMessage:{control:`text`}},args:{placeholder:`Field content`,size:`m`,label:`Label`,required:!0,disabled:!1,errorMessage:`Поле обязательно для заполнения`}},c={},l={args:{label:void 0}},u={render:e=>(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:12},children:[(0,o.jsx)(a,{...e,size:`s`,label:void 0,placeholder:`Small`}),(0,o.jsx)(a,{...e,size:`m`,label:void 0,placeholder:`Middle`})]})},d={parameters:{docs:{description:{story:`Default → Hover → Focused → Error → Disabled из флоу заполнения. Наведи или кликни, чтобы увидеть hover/focus вживую.`}}},render:e=>(0,o.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:(0,o.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,o.jsx)(a,{...e,label:void 0,placeholder:`Default`}),(0,o.jsx)(a,{...e,label:void 0,placeholder:`С значением`,defaultValue:`Field content`}),(0,o.jsx)(a,{...e,label:void 0,status:`error`,placeholder:`Error`}),(0,o.jsx)(a,{...e,label:void 0,disabled:!0,placeholder:`Disabled`})]})})},f={},p={args:{required:!0}},m={args:{status:`error`,defaultValue:``}},h={parameters:{docs:{description:{story:`Один и тот же status="error" — разница только в том, пустое поле или заполненное неправильными данными.`}}},render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:24},children:[(0,o.jsx)(a,{label:`Имя`,required:!0,status:`error`,placeholder:`Введите имя`,errorMessage:`Поле обязательно для заполнения`}),(0,o.jsx)(a,{label:`Имя`,required:!0,status:`error`,defaultValue:`Field content`,errorMessage:`Не можем принять некоторые символы`})]})},g={args:{disabled:!0,defaultValue:`Field content`}},_={parameters:{docs:{description:{story:`Наведи на иконку ⓘ — она станет акцентно-синей и покажет тултип с infoText.`}}},args:{infoText:`Подсказка рядом с лейблом`}},v={args:{label:void 0,prefix:(0,o.jsx)(n,{size:14})}},y={args:{label:void 0,allowClear:!0,defaultValue:`Field content`}},b={args:{label:`Адрес`,defaultValue:`Санкт-Петербург, Ушаковская наб., 3, корп. 1с`},decorators:[e=>(0,o.jsx)(`div`,{style:{width:250},children:(0,o.jsx)(e,{})})],parameters:{docs:{description:{story:`Наведи на обрезанное значение — появится тултип с полным текстом. Тултип показывается, только когда значение реально обрезано, а не всегда.`}}}},x={args:{label:`Имя`,status:`error`,defaultValue:`Field content`,errorMessage:`Не можем принять некоторые символы - удалите их немедленно`},decorators:[e=>(0,o.jsx)(`div`,{style:{width:250},children:(0,o.jsx)(e,{})})],parameters:{docs:{description:{story:`Тот же механизм обрезки-с-тултипом, что и у значения поля, только для errorMessage.`}}}},S=[`Playground`,`Bare`,`Sizes`,`States`,`WithLabel`,`Required`,`Error`,`ErrorVariants`,`Disabled`,`WithInfoTooltip`,`WithIcon`,`AllowClear`,`LongValueTooltip`,`LongErrorMessage`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12
  }}>
      <Input {...args} size="s" label={undefined} placeholder="Small" />
      <Input {...args} size="m" label={undefined} placeholder="Middle" />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    defaultValue: ''
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'Field content'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    prefix: <IconSearch size={14} />
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    allowClear: true,
    defaultValue: 'Field content'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}}})))()}C();export{y as AllowClear,l as Bare,g as Disabled,m as Error,h as ErrorVariants,x as LongErrorMessage,b as LongValueTooltip,c as Playground,p as Required,u as Sizes,d as States,v as WithIcon,_ as WithInfoTooltip,f as WithLabel,S as __namedExportsOrder,s as default};