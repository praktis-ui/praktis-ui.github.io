import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./MultiSelect-CdE_MqqG.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),i=t(),a={title:`UI Kit/Поля и выбор/MultiSelect`,id:`ui-kit-multiselect`,component:r,parameters:{layout:`padded`,docs:{description:{component:`
Источник — Figma UI Kit «Практис»: **Select / Multi** (node 1148:2420).

Построен на **UI Kit/Select**: та же обвязка (label / required / infoText / errorMessage), те же
стили поля, размеры s/m, состояния loading и loadError, та же фиксированная ширина 200px.
Отличия — то, ради чего мультиселект и нужен.

## Теги

Выбранное показывается тегами — это атом **multi-select__value** из макета, в коде
\`MultiSelectTag\` (самостоятельный компонент, см. **UI Kit/MultiSelectTag**). Тег никогда не
шире поля: длинный текст уходит в отточие **на максимальной ширине**, а следующий тег
переносится на строку ниже. Крестик удаляет тег, не открывая список.

Тег один на оба размера поля (18px, текст 12px): поле m = 9 + 18 + 9 = 36, поле s = 6 + 18 + 6 = 30.
Тег размера m (14px) — для ячеек таблицы, в поле мультиселекта он не используется.

## Два режима

- **«Если нужно видеть все»** (по умолчанию) — поле растёт по высоте под все теги.
- **«Если нужно в 1 строку»** (\`singleLine\`) — теги в одну строку, не поместившиеся
  сворачиваются в **«+N»**: тот же тег без крестика, при наведении — тултип со списком скрытого.
  Сколько тегов влезло, antd считает сам.

## Список

В списке — чекбоксы, как в макете DropdownMenu («использование в мультиселектах»). Пункты
рисуются нашим **UI Kit/DropdownMenuItem** с \`mark="checkbox"\` — тот же компонент, что в
дропдаун-меню, второй отрисовки пункта в ките нет.

Поиск по вводу в само поле выключен: в макете для длинных списков поиск — отдельное поле над
списком. Включается снаружи через \`showSearch\`.
`},story:{height:`420px`}}},decorators:[e=>(0,i.jsx)(`div`,{style:{minHeight:360},children:(0,i.jsx)(e,{})})],tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`s`,`m`]},singleLine:{control:`boolean`},status:{control:`select`,options:[void 0,`error`,`warning`]},disabled:{control:`boolean`},required:{control:`boolean`},loading:{control:`boolean`},loadError:{control:`boolean`}},args:{size:`m`,options:[{value:`p1`,label:`Пункт`},{value:`p2`,label:`Какой-то пункт`},{value:`p3`,label:`Длинный текст пункта`},{value:`p4`,label:`Пункт`},{value:`p5`,label:`Норм пункт`},{value:`p6`,label:`Какой-то пункт`},{value:`p7`,label:`Очень длинное название пункта, которое не помещается в ширину поля`},{value:`p8`,label:`Заблокированный пункт`,disabled:!0}],placeholder:`Please select`,label:`Label`,required:!0,infoText:`Можно выбрать несколько`,errorMessage:`Поле обязательно для заполнения`}},o={},s={args:{label:void 0,infoText:void 0}},c={parameters:{docs:{description:{story:`Режим по умолчанию — «Если нужно видеть все» из макета. Поле хагается по высоте под все теги; тег с длинным текстом занимает всю ширину и обрезается отточием.`}}},args:{label:void 0,infoText:void 0,defaultValue:[`p1`,`p2`,`p3`,`p4`,`p5`,`p6`,`p7`]}},l={parameters:{docs:{description:{story:`«Если нужно в 1 строку» из макета. Наведи на «+N» — тултип перечисляет скрытые теги.`}}},args:{label:void 0,infoText:void 0,singleLine:!0,defaultValue:[`p1`,`p2`,`p3`,`p5`,`p6`]}},u={render:e=>(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:12},children:[(0,i.jsx)(r,{...e,size:`s`,label:void 0,infoText:void 0,defaultValue:[`p1`,`p2`]}),(0,i.jsx)(r,{...e,size:`m`,label:void 0,infoText:void 0,defaultValue:[`p1`,`p2`]})]})},d={parameters:{docs:{description:{story:`Default → Filled → Disabled → Disabled + Filled → Loading → Error. У Disabled + Filled теги без крестиков, как в макете.`}}},render:e=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`,alignItems:`flex-start`},children:[(0,i.jsx)(r,{...e,label:void 0,infoText:void 0}),(0,i.jsx)(r,{...e,label:void 0,infoText:void 0,defaultValue:[`p1`,`p2`]}),(0,i.jsx)(r,{...e,label:void 0,infoText:void 0,disabled:!0}),(0,i.jsx)(r,{...e,label:void 0,infoText:void 0,disabled:!0,defaultValue:[`p1`,`p2`]}),(0,i.jsx)(r,{...e,label:void 0,infoText:void 0,loading:!0}),(0,i.jsx)(r,{...e,label:void 0,infoText:void 0,status:`error`})]})},f={args:{defaultValue:[`p1`,`p2`]}},p={args:{disabled:!0,defaultValue:[`p1`,`p2`]}},m={args:{loading:!0}},h={args:{loadError:!0}},g={args:{status:`error`}},_={parameters:{docs:{description:{story:`Список открыт принудительно: пункты с чекбоксами — тот же **DropdownMenuItem**, что в дропдаун-меню.`}}},args:{label:void 0,infoText:void 0,defaultValue:[`p1`,`p3`],open:!0}},v=[`Playground`,`Bare`,`SeeAll`,`SingleLine`,`Sizes`,`States`,`WithLabel`,`Disabled`,`Loading`,`LoadError`,`Error`,`OpenList`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    infoText: undefined
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Режим по умолчанию — «Если нужно видеть все» из макета. Поле хагается по высоте под все теги; тег с длинным текстом занимает всю ширину и обрезается отточием.'
      }
    }
  },
  args: {
    label: undefined,
    infoText: undefined,
    defaultValue: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'] satisfies MultiSelectValue[]
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '«Если нужно в 1 строку» из макета. Наведи на «+N» — тултип перечисляет скрытые теги.'
      }
    }
  },
  args: {
    label: undefined,
    infoText: undefined,
    singleLine: true,
    defaultValue: ['p1', 'p2', 'p3', 'p5', 'p6'] satisfies MultiSelectValue[]
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12
  }}>
      <MultiSelect {...args} size="s" label={undefined} infoText={undefined} defaultValue={['p1', 'p2']} />
      <MultiSelect {...args} size="m" label={undefined} infoText={undefined} defaultValue={['p1', 'p2']} />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default → Filled → Disabled → Disabled + Filled → Loading → Error. У Disabled + Filled теги без крестиков, как в макете.'
      }
    }
  },
  render: args => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }}>
      <MultiSelect {...args} label={undefined} infoText={undefined} />
      <MultiSelect {...args} label={undefined} infoText={undefined} defaultValue={['p1', 'p2']} />
      <MultiSelect {...args} label={undefined} infoText={undefined} disabled />
      <MultiSelect {...args} label={undefined} infoText={undefined} disabled defaultValue={['p1', 'p2']} />
      <MultiSelect {...args} label={undefined} infoText={undefined} loading />
      <MultiSelect {...args} label={undefined} infoText={undefined} status="error" />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ['p1', 'p2']
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: ['p1', 'p2']
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    loadError: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Список открыт принудительно: пункты с чекбоксами — тот же **DropdownMenuItem**, что в дропдаун-меню.'
      }
    }
  },
  args: {
    label: undefined,
    infoText: undefined,
    defaultValue: ['p1', 'p3'],
    open: true
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{s as Bare,p as Disabled,g as Error,h as LoadError,m as Loading,_ as OpenList,o as Playground,c as SeeAll,l as SingleLine,u as Sizes,d as States,f as WithLabel,v as __namedExportsOrder,a as default};