import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CvEwutAq.js";import{n,t as r}from"./ShahmatkaCell-BWMxbydr.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i=t(),a=[`none`,`pending`,`required`,`done`],o={title:`UI Kit/Shahmatka/Cell`,component:r,parameters:{layout:`centered`,docs:{description:{component:'\n## Два вида ячеек шахматки\n\n**1. Составная — `variant="quadrants"`.** 4 независимых пропа: `date` / `materials` / `protocols` / `schemes` (буквы д/м/п/с на скриншотах). Каждое поле передаётся отдельно, любым подмножеством:\n\n| Значение поля | Как выглядит | Смысл |\n|---|---|---|\n| не передано / `null` | квадрант не рисуется вовсе | для этой работы такой тип данных не нужен |\n| `"pending"` | белый, буква видна | по умолчанию — ещё не запланировано, данные не требуются прямо сейчас |\n| `"required"` | жёлтый | обязательно, но не заполнено |\n| `"done"` | зелёный | заполнено |\n\nБэку не нужно присылать все 4 поля разом, и фронту не нужен отдельный компонент под «ячейку с одной буквой» — история **PartialFill** ниже рисует только «д» через `<ShahmatkaCell variant="quadrants" date="done" />`, остальные 3 квадранта остаются пустыми сами.\n\n**2. Плоская, без квадрантов — статус самого акта.** НЕ выводится автоматически из состояния квадрантов — даже если все 4 поля `"done"`, это другое состояние, чем `variant="signed"`. Определяется отдельным полем на бэке (сформирован ли акт и в каком он статусе):\n\n- `"awaiting-signature"` — акт ждёт вашей подписи (сплошной оранжевый)\n- `"awaiting-other-signature"` — ждёт подписи другой стороной (штриховка)\n- `"remarks"` — есть замечания к акту (сплошной розовый)\n- `"signed"` — все подписали (сплошной зелёный, без букв)\n\nПлюс `variant="empty"` — работ на локации нет вовсе (ни квадрантов, ни статуса акта).\n\n### Кто решает, какой вид показывать\n\nКомпонент сам ничего не выбирает — какой из двух видов рендерить, решает вызывающий код по бизнес-статусу с бэка. Пока акт не сформирован — всегда `quadrants`. Как только акт сформирован — один из плоских статусов, независимо от того, что было в квадрантах до этого.\n'}}},tags:[`autodocs`]},s={argTypes:{variant:{control:`select`,options:[`empty`,`quadrants`,`awaiting-signature`,`awaiting-other-signature`,`remarks`,`signed`]},date:{control:`select`,options:a,if:{arg:`variant`,eq:`quadrants`}},materials:{control:`select`,options:a,if:{arg:`variant`,eq:`quadrants`}},protocols:{control:`select`,options:a,if:{arg:`variant`,eq:`quadrants`}},schemes:{control:`select`,options:a,if:{arg:`variant`,eq:`quadrants`}}},args:{variant:`quadrants`,date:`done`,materials:`required`,protocols:`done`,schemes:`required`},render:e=>{if(e.variant!==`quadrants`)return(0,i.jsx)(r,{variant:e.variant});let t=e=>e===`none`?void 0:e;return(0,i.jsx)(r,{variant:`quadrants`,date:t(e.date),materials:t(e.materials),protocols:t(e.protocols),schemes:t(e.schemes)})}},c={parameters:{docs:{description:{story:'Бэк прислал только дату — `<ShahmatkaCell variant="quadrants" date="done" />`. Поля `materials`/`protocols`/`schemes` не переданы вовсе (не `null`, а просто отсутствуют в props) — соответствующие квадранты не рисуются, как «поле не нужно для этой работы» из легенды.'}}},render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,i.jsx)(r,{variant:`quadrants`,date:`done`}),(0,i.jsx)(r,{variant:`quadrants`,materials:`required`}),(0,i.jsx)(r,{variant:`quadrants`,date:`done`,schemes:`pending`})]})},l={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[(0,i.jsx)(r,{variant:`empty`}),(0,i.jsx)(r,{variant:`quadrants`,date:`pending`,materials:`pending`,protocols:`pending`,schemes:`pending`}),(0,i.jsx)(r,{variant:`quadrants`,date:`pending`,materials:`pending`,protocols:`pending`}),(0,i.jsx)(r,{variant:`quadrants`,date:`required`,materials:`required`,protocols:`required`,schemes:`required`}),(0,i.jsx)(r,{variant:`quadrants`,date:`done`,materials:`required`,protocols:`done`,schemes:`required`}),(0,i.jsx)(r,{variant:`quadrants`,date:`done`,materials:`done`,protocols:`done`,schemes:`done`}),(0,i.jsx)(r,{variant:`awaiting-signature`}),(0,i.jsx)(r,{variant:`awaiting-other-signature`}),(0,i.jsx)(r,{variant:`remarks`}),(0,i.jsx)(r,{variant:`signed`})]})},u={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,fontFamily:`Inter, sans-serif`,fontSize:14,color:`#41484a`},children:[(0,i.jsx)(`p`,{style:{margin:0},children:`Наведите курсор на ячейки — у «пустой» (нет работ) ховера нет, у остальных есть.`}),(0,i.jsxs)(`div`,{style:{display:`flex`,gap:8},children:[(0,i.jsx)(r,{variant:`empty`}),(0,i.jsx)(r,{variant:`quadrants`,date:`done`,materials:`required`,protocols:`done`,schemes:`required`}),(0,i.jsx)(r,{variant:`awaiting-signature`}),(0,i.jsx)(r,{variant:`signed`})]})]})},d=[`Playground`,`PartialFill`,`States`,`Hover`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: 'select',
      options: ['empty', 'quadrants', 'awaiting-signature', 'awaiting-other-signature', 'remarks', 'signed']
    },
    date: {
      control: 'select',
      options: quadrantOptions,
      if: {
        arg: 'variant',
        eq: 'quadrants'
      }
    },
    materials: {
      control: 'select',
      options: quadrantOptions,
      if: {
        arg: 'variant',
        eq: 'quadrants'
      }
    },
    protocols: {
      control: 'select',
      options: quadrantOptions,
      if: {
        arg: 'variant',
        eq: 'quadrants'
      }
    },
    schemes: {
      control: 'select',
      options: quadrantOptions,
      if: {
        arg: 'variant',
        eq: 'quadrants'
      }
    }
  },
  args: {
    variant: 'quadrants',
    date: 'done',
    materials: 'required',
    protocols: 'done',
    schemes: 'required'
  },
  render: args => {
    if (args.variant !== 'quadrants') {
      return <ShahmatkaCell variant={args.variant} />;
    }
    const toStatus = (v: ShahmatkaQuadrantStatus | 'none') => v === 'none' ? undefined : v;
    return <ShahmatkaCell variant="quadrants" date={toStatus(args.date)} materials={toStatus(args.materials)} protocols={toStatus(args.protocols)} schemes={toStatus(args.schemes)} />;
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Бэк прислал только дату — \`<ShahmatkaCell variant="quadrants" date="done" />\`. ' + 'Поля \`materials\`/\`protocols\`/\`schemes\` не переданы вовсе (не \`null\`, а просто отсутствуют в props) — ' + 'соответствующие квадранты не рисуются, как «поле не нужно для этой работы» из легенды.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }}>
      <ShahmatkaCell variant="quadrants" date="done" />
      <ShahmatkaCell variant="quadrants" materials="required" />
      <ShahmatkaCell variant="quadrants" date="done" schemes="pending" />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8
  }}>
      <ShahmatkaCell variant="empty" />
      <ShahmatkaCell variant="quadrants" date="pending" materials="pending" protocols="pending" schemes="pending" />
      <ShahmatkaCell variant="quadrants" date="pending" materials="pending" protocols="pending" />
      <ShahmatkaCell variant="quadrants" date="required" materials="required" protocols="required" schemes="required" />
      <ShahmatkaCell variant="quadrants" date="done" materials="required" protocols="done" schemes="required" />
      <ShahmatkaCell variant="quadrants" date="done" materials="done" protocols="done" schemes="done" />
      <ShahmatkaCell variant="awaiting-signature" />
      <ShahmatkaCell variant="awaiting-other-signature" />
      <ShahmatkaCell variant="remarks" />
      <ShahmatkaCell variant="signed" />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
    color: '#41484a'
  }}>
      <p style={{
      margin: 0
    }}>Наведите курсор на ячейки — у «пустой» (нет работ) ховера нет, у остальных есть.</p>
      <div style={{
      display: 'flex',
      gap: 8
    }}>
        <ShahmatkaCell variant="empty" />
        <ShahmatkaCell variant="quadrants" date="done" materials="required" protocols="done" schemes="required" />
        <ShahmatkaCell variant="awaiting-signature" />
        <ShahmatkaCell variant="signed" />
      </div>
    </div>
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Hover,c as PartialFill,s as Playground,l as States,d as __namedExportsOrder,o as default};