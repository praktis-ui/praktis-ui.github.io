import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CvEwutAq.js";import{n,t as r}from"./Select-BkEg3YO6.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),i=t(),a={title:`UI Kit/Select`,component:r,parameters:{layout:`padded`,docs:{description:{component:`
Источник — Figma UI Kit «Практис»: компонент Select (node 814:2546/2547). Та же обвязка
(label/required/infoText/errorMessage через InputChrome) и те же border-токены \`border/input-*\`,
что у **UI Kit/Input** (\`default\`/\`hover\`/\`focus\`/\`error\`/\`disabled\`) — применены на все
узлы поля прямо в Figma-файле, значения совпали 1:1 с Input/Password/Search, то есть это реально
общие токены семейства «инпуты и селекты», как и задумывалось при их создании. По пути нашли и
поправили в самом Figma-файле реальный баг (\`Size=s, Type=behind, State=hover\` был на
default-сером вместо hover-серого) и добавили рамку disabled/disabled-filled — в Figma её не
было вовсе, унифицировано так же, как у Input/Password/Search 2026-09-10. Size=xs/xxs из Figma
не сделаны (не нужны).

## Ширина

Решение Анастасии (2026-09-16): ширина поля — фиксированная (200px по умолчанию, задаётся
разработчиком через className/style под конкретный интерфейс), НЕ хаг и НЕ просто минимум —
длинное значение в опциях никогда не раздувает поле, а обрезается эллипсисом (см. Value-тултип
ниже). Дропдаун по умолчанию той же ширины, что поле (antd \`popupMatchSelectWidth\`, по
умолчанию \`true\`) — можно переопределить отдельно от поля через этот же проп (прокидывается
насквозь), если интерфейсу нужен более широкий список — см. историю **CustomDropdownWidth**.

## Value-тултип

Так же, как у Input — длинный выбранный текст обрезается эллипсисом, при наведении показывает
тултип с полным значением. Источник текста другой (не \`<input>.value\`, а лейбл выбранной
опции), но поведение и механизм тултипа переиспользованы 1:1 через общий \`InputChrome\`.

## Loading / Load error

Этого сценария нет в готовом виде в antd — в Figma State=loading/refresh описывает асинхронную
загрузку опций. Сделано как два доп. пропа:

- **\`loading\`** — спиннер (новая иконка, вращение — CSS-анимация, в Figma статичный кадр) и
  текст «Loading...» вместо обычного плейсхолдера; дропдаун временно не открывается.
- **\`loadError\`** — красная рамка (как \`status="error"\`) и иконка рефреша вместо шеврона;
  клик по иконке вызывает \`onRetry\`; дропдаун тоже не открывается, пока не перезагрузят.

## Дропдаун со списком опций

Источник — отдельный компонент Figma UI Kit «Практис»: DropdownMenu/DropdownMenuItem
(node 189:2587) — общий для Select и в перспективе любого dropdown-меню кита, не специфичный
для Select. Цвета/паддинги/радиус пунктов — через antd component tokens (\`optionSelectedBg\`,
\`optionActiveBg\` и т.д.), тень/скроллбар/спецкомбинации цветов (наведено+выбрано — отдельный,
более тёмный синий; выбранный-и-задизейбленный пункт — единственный disabled-случай БЕЗ
приглушения текста, для дефолтно выбранных пунктов, которые нельзя развыбрать) — в
\`Select.module.css\`. Готча по пути: antd по умолчанию рендерит дропдаун в \`document.body\`,
вне \`[data-theme]\`-обёртки из \`ThemeProvider\` (portal сохраняет React-контекст темы для antd
token'ов, но не DOM-вложенность для обычного CSS) — тёмная тема для CSS-переопределений не
работала бы без явного \`getPopupContainer\`, который ищет ближайший \`[data-theme]\`-предок.

## Чего нет

Мультиселект (\`mode="multiple"/"tags"\`) в Figma для этого компонента не описан — проп
прокидывается насквозь через antd, но специально не сверялся с макетом. Сепаратор
(\`Sep\` в Figma — линия/подпись/оба) в коде не реализован — у нашего Select нет группировки
опций, где он бы понадобился.
`},story:{height:`360px`}}},decorators:[e=>(0,i.jsx)(`div`,{style:{minHeight:300},children:(0,i.jsx)(e,{})})],tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`s`,`m`]},status:{control:`select`,options:[void 0,`error`,`warning`]},disabled:{control:`boolean`},required:{control:`boolean`},loading:{control:`boolean`},loadError:{control:`boolean`}},args:{placeholder:`Please select`,size:`m`,label:`Label`,required:!0,options:[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`},{value:`date`,label:`Date`}],errorMessage:`Поле обязательно для заполнения`}},o={},s={args:{label:void 0}},c={render:e=>(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:12},children:[(0,i.jsx)(r,{...e,size:`s`,label:void 0}),(0,i.jsx)(r,{...e,size:`m`,label:void 0})]})},l={parameters:{docs:{description:{story:`Default → Hover → Focused (кликни) → Filled → Error → Disabled → Disabled+Filled.`}}},render:e=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,i.jsx)(r,{...e,label:void 0}),(0,i.jsx)(r,{...e,label:void 0,defaultValue:`apple`}),(0,i.jsx)(r,{...e,label:void 0,status:`error`}),(0,i.jsx)(r,{...e,label:void 0,disabled:!0}),(0,i.jsx)(r,{...e,label:void 0,disabled:!0,defaultValue:`apple`})]})},u={},d={args:{required:!0}},f={args:{status:`error`}},p={args:{disabled:!0}},m={args:{disabled:!0,defaultValue:`apple`}},h={parameters:{docs:{description:{story:`Наведи на иконку ⓘ — она станет акцентно-синей и покажет тултип с infoText.`}}},args:{infoText:`Подсказка рядом с лейблом`}},g={args:{loading:!0}},_={args:{loadError:!0,errorMessage:`Не удалось загрузить список`},render:e=>(0,i.jsx)(r,{...e,onRetry:()=>alert(`onRetry`)})},v={args:{label:void 0,defaultValue:`apple`,options:[{value:`apple`,label:`Apple (выбран по умолчанию, нельзя развыбрать)`,disabled:!0},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry (обычный disabled)`,disabled:!0},{value:`date`,label:`Date`}]},parameters:{docs:{description:{story:`Открой дропдаун: Apple — выбран и задизейблен (нельзя развыбрать, текст полной яркости); Cherry — обычный disabled (нельзя выбрать, текст приглушён).`}}}},y={args:{label:`Адрес`,defaultValue:`address`,options:[{value:`address`,label:`Санкт-Петербург, Ушаковская наб., 3, корп. 1с`}]},parameters:{docs:{description:{story:`Наведи на обрезанное значение — появится тултип с полным текстом. Поле не раздувается под длинное значение.`}}}},b={args:{label:void 0,options:[{value:`a`,label:`Короткая опция`},{value:`b`,label:`Длинная подпись опции, не влезающая в узкое поле`},{value:`c`,label:`Ещё одна длинная опция для примера`}]},render:e=>(0,i.jsx)(r,{...e,popupMatchSelectWidth:360}),parameters:{docs:{description:{story:"Поле — 200px (дефолт), дропдаун — 360px через `popupMatchSelectWidth` (обычный проп antd, прокидывается насквозь). Длинные подписи в списке не обрезаются, хотя само поле остаётся узким."}}}},x={args:{label:`Имя`,status:`error`,defaultValue:`apple`,errorMessage:`Не можем принять некоторые символы - удалите их немедленно`},decorators:[e=>(0,i.jsx)(`div`,{style:{width:250},children:(0,i.jsx)(e,{})})]},S=[`Playground`,`Bare`,`Sizes`,`States`,`WithLabel`,`Required`,`Error`,`Disabled`,`DisabledFilled`,`WithInfoTooltip`,`Loading`,`LoadError`,`DropdownOptionStates`,`LongValueTooltip`,`CustomDropdownWidth`,`LongErrorMessage`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12
  }}>
      <Select {...args} size="s" label={undefined} />
      <Select {...args} size="m" label={undefined} />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default → Hover → Focused (кликни) → Filled → Error → Disabled → Disabled+Filled.'
      }
    }
  },
  render: args => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}>
      <Select {...args} label={undefined} />
      <Select {...args} label={undefined} defaultValue="apple" />
      <Select {...args} label={undefined} status="error" />
      <Select {...args} label={undefined} disabled />
      <Select {...args} label={undefined} disabled defaultValue="apple" />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'apple'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    loadError: true,
    errorMessage: 'Не удалось загрузить список'
  },
  render: args => <Select {...args} onRetry={() => alert('onRetry')} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    defaultValue: 'apple',
    options: [{
      value: 'apple',
      label: 'Apple (выбран по умолчанию, нельзя развыбрать)',
      disabled: true
    }, {
      value: 'banana',
      label: 'Banana'
    }, {
      value: 'cherry',
      label: 'Cherry (обычный disabled)',
      disabled: true
    }, {
      value: 'date',
      label: 'Date'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Открой дропдаун: Apple — выбран и задизейблен (нельзя развыбрать, текст полной яркости); Cherry — обычный disabled (нельзя выбрать, текст приглушён).'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Адрес',
    defaultValue: 'address',
    options: [{
      value: 'address',
      label: 'Санкт-Петербург, Ушаковская наб., 3, корп. 1с'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Наведи на обрезанное значение — появится тултип с полным текстом. Поле не раздувается под длинное значение.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    options: [{
      value: 'a',
      label: 'Короткая опция'
    }, {
      value: 'b',
      label: 'Длинная подпись опции, не влезающая в узкое поле'
    }, {
      value: 'c',
      label: 'Ещё одна длинная опция для примера'
    }]
  },
  render: args => <Select {...args} popupMatchSelectWidth={360} />,
  parameters: {
    docs: {
      description: {
        story: 'Поле — 200px (дефолт), дропдаун — 360px через \`popupMatchSelectWidth\` (обычный проп antd, прокидывается насквозь). Длинные подписи в списке не обрезаются, хотя само поле остаётся узким.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Имя',
    status: 'error',
    defaultValue: 'apple',
    errorMessage: 'Не можем принять некоторые символы - удалите их немедленно'
  },
  decorators: [Story => <div style={{
    width: 250
  }}><Story /></div>]
}`,...x.parameters?.docs?.source}}}})))()}C();export{s as Bare,b as CustomDropdownWidth,p as Disabled,m as DisabledFilled,v as DropdownOptionStates,f as Error,_ as LoadError,g as Loading,x as LongErrorMessage,y as LongValueTooltip,o as Playground,d as Required,c as Sizes,l as States,h as WithInfoTooltip,u as WithLabel,S as __namedExportsOrder,a as default};