import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{r as n,t as r}from"./DatePicker-CyWQgz83.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./Button-DIhGMxSW.js";function s(){let[e,t]=(0,c.useState)(!0);return(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,width:240},children:[(0,l.jsx)(r,{label:`Дата отображения аналитики`,required:!0,errorMessage:`Проверьте дату`,onValidChange:t}),(0,l.jsx)(o,{variant:`primary`,disabled:!e,children:`Применить`})]})}var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{c=t(),a(),n(),l=i(),u={title:`UI Kit/Поля и выбор/DatePicker`,id:`ui-kit-datepicker`,component:r,parameters:{layout:`centered`,docs:{description:{component:`
Источник — Figma UI Kit «Практис»: Datapicker (node 1253:4599) — сам компонент плюс отдельный
фрейм **«Флоу ручного ввода даты»** с правилами ввода. Обвязка и токены поля те же, что у
**UI Kit/Input** и **UI Kit/Select** (label/required/infoText/errorMessage через общий
\`InputChrome\`). Size=xs из Figma не делали — как и у Select, нужны только s/m.

## Маска и правила ввода

То, из-за чего компонент вообще заводили: у antd «из коробки» поле принимает свободный текст.
Маска здесь **своя** (\`MaskedDateInput\`), не антдшная. У antd маска тоже есть, но она
**ячейковая**: поле разбито на три независимых кусочка ДД / ММ / ГГГГ, курсор прыгает по ним,
каждый правится отдельно. Во фрейме описана другая модель — **поток цифр**, как в маске
телефона, и три пункта флоу ячейковая маска не делает в принципе:

- «Удалили. **Цифры перестроились**» — цифры сдвигаются, а не оставляют дырку в своей ячейке;
- «Вводим в начало цифры. **Дата двигается**» — вставка в середину двигает остальные;
- «**Выделили всё** → Удалили → Появился плейсхолдер» — выделение работает как в обычном поле.

Что даёт наша маска:

- принимаются **только цифры**, максимум **8** (в месячном варианте — 6);
- точка ставится сама, как только группа заполнена;
- плейсхолдер (\`ДД.ММ.ГГГГ\` / \`ММ.ГГГГ\`) виден, пока поле пустое, и пропадает с первой цифрой
  — шаблон поверх поля не рисуется, как и в макете;
- выделение, Backspace, Delete, вставка из буфера — нативные, вставленный мусор
  («дата 24/05/2023 г») отфильтруется до цифр.

Чего в antd нет и что дописано сверху — **ошибка после расфокусировки**: если дату начали
вводить, но не закончили или ввели несуществующую (32.13.2023), поле краснеет при потере
фокуса, как во фрейме. Пока пользователь печатает, незаконченная дата ошибкой не считается,
и **набранный текст остаётся в поле** — чтобы было видно, что исправлять. Когда пользователь
возвращается править, краснота снимается с первой же цифры, а проверка повторяется на выходе.
Пустое поле ошибкой не считается никогда (краснеть ему не за что), но у поля с \`required\`
пустое значение не считается и принимаемым — см. «Применить» ниже.

## Очистка

Крестик \`allowClear\` включён по умолчанию и появляется при наведении, когда в поле есть
подтверждённая дата — иконка своя, та же, что у **UI Kit/InputSearch**. В покое на его месте
иконка календаря, как в Figma. Выключается через \`allowClear={false}\`.

## Варианты и язык

\`mode\` — два варианта: **\`date\`** (выбор дня, по умолчанию) и **\`month\`** (выбор
только месяца). Маска и плейсхолдер идут в комплекте с вариантом: \`ДД.ММ.ГГГГ\` и
\`ММ.ГГГГ\`. Названия месяцев, дни недели и «Сегодня» — по-русски: локаль antd и dayjs задана
один раз в \`ThemeProvider\`, отдельной настройки в компоненте не требуется.

## Кнопка «Применить»

Правила из того же фрейма (активна, если дату не меняли или ввели полностью и валидно; иначе
заблокирована) — это логика экрана, а не поля. Поле лишь сообщает наружу через
\`onValidChange\`, можно ли принимать текущее значение — см. историю **ApplyButton**.
Случай «стёрли дату и ничего пока не вводили» тоже учтён: у поля с \`required\` пустое значение
принимаемым не считается, при этом краснеть полю не за что — пустота это про обязательность,
а не про ошибку ввода.
`}}},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`s`,`m`]},mode:{control:`inline-radio`,options:[`date`,`month`]},status:{control:`select`,options:[void 0,`error`,`warning`]},disabled:{control:`boolean`},required:{control:`boolean`},loading:{control:`boolean`},allowClear:{control:`boolean`}},args:{size:`m`,label:`Дата отображения аналитики`,required:!0,errorMessage:`Проверьте дату`}},d={},f={args:{label:void 0}},p={render:e=>(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:12},children:[(0,l.jsx)(r,{...e,size:`s`,label:void 0}),(0,l.jsx)(r,{...e,size:`m`,label:void 0})]})},m={parameters:{docs:{description:{story:`Кликни в поле и печатай. Только цифры, максимум 8, точки автоматически. Попробуй то, что описано во фрейме: удалить цифру в середине (остальные перестроятся), встать в начало и вписать цифру (дата поедет вправо), выделить всё и удалить (вернётся плейсхолдер), вставить из буфера «дата 24/05/2023 г» (останутся только цифры). Введи «55» и уведи фокус — поле покраснеет, но «55» останется на месте; вернись и допечатай — краснота уйдёт с первой цифры. Когда дата введена целиком, при наведении справа появляется крестик.`}}},args:{label:void 0}},h={parameters:{docs:{description:{story:`Default → Filled → Error → Disabled → Loading. Hover/focus — нативные, наведи и кликни.`}}},render:e=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[(0,l.jsx)(r,{...e,label:void 0}),(0,l.jsx)(r,{...e,label:void 0,status:`error`}),(0,l.jsx)(r,{...e,label:void 0,disabled:!0}),(0,l.jsx)(r,{...e,label:void 0,loading:!0})]})},g={parameters:{docs:{description:{story:`Кликни в поле — панель откроется сразу на выборе месяца. Ввод руками тоже по маске, но короче: ММ.ГГГГ.`}}},args:{mode:`month`,label:`Месяц отчёта`}},_={render:e=>(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:12},children:[(0,l.jsx)(r,{...e,mode:`date`,label:`Дата`}),(0,l.jsx)(r,{...e,mode:`month`,label:`Месяц`})]})},v={},y={args:{status:`error`}},b={args:{disabled:!0}},x={args:{loading:!0}},S={args:{infoText:`За какую дату показывать аналитику`}},C={parameters:{docs:{description:{story:`Кнопка активна, пока значение можно принять: поле не трогали либо дата введена полностью и валидна. Начни вводить и уведи фокус, не закончив — кнопка заблокируется.`}}},render:()=>(0,l.jsx)(s,{})},w=[`Playground`,`Bare`,`Sizes`,`ManualInput`,`States`,`MonthMode`,`Modes`,`WithLabel`,`Error`,`Disabled`,`Loading`,`WithInfoTooltip`,`ApplyButton`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12
  }}>
      <DatePicker {...args} size="s" label={undefined} />
      <DatePicker {...args} size="m" label={undefined} />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Кликни в поле и печатай. Только цифры, максимум 8, точки автоматически. Попробуй то, что описано во фрейме: удалить цифру в середине (остальные перестроятся), встать в начало и вписать цифру (дата поедет вправо), выделить всё и удалить (вернётся плейсхолдер), вставить из буфера «дата 24/05/2023 г» (останутся только цифры). Введи «55» и уведи фокус — поле покраснеет, но «55» останется на месте; вернись и допечатай — краснота уйдёт с первой цифры. Когда дата введена целиком, при наведении справа появляется крестик.'
      }
    }
  },
  args: {
    label: undefined
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default → Filled → Error → Disabled → Loading. Hover/focus — нативные, наведи и кликни.'
      }
    }
  },
  render: args => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}>
      <DatePicker {...args} label={undefined} />
      <DatePicker {...args} label={undefined} status="error" />
      <DatePicker {...args} label={undefined} disabled />
      <DatePicker {...args} label={undefined} loading />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Кликни в поле — панель откроется сразу на выборе месяца. Ввод руками тоже по маске, но короче: ММ.ГГГГ.'
      }
    }
  },
  args: {
    mode: 'month',
    label: 'Месяц отчёта'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12
  }}>
      <DatePicker {...args} mode="date" label="Дата" />
      <DatePicker {...args} mode="month" label="Месяц" />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    infoText: 'За какую дату показывать аналитику'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Кнопка активна, пока значение можно принять: поле не трогали либо дата введена полностью и валидна. Начни вводить и уведи фокус, не закончив — кнопка заблокируется.'
      }
    }
  },
  render: () => <ApplyExample />
}`,...C.parameters?.docs?.source}}}})))()}T();export{C as ApplyButton,f as Bare,b as Disabled,y as Error,x as Loading,m as ManualInput,_ as Modes,g as MonthMode,d as Playground,p as Sizes,h as States,S as WithInfoTooltip,v as WithLabel,w as __namedExportsOrder,u as default};