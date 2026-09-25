import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-CvEwutAq.js";import{Io as r,t as i,ul as a}from"./icons-BmsQWa6t.js";import{n as o,t as s}from"./FunctionButton-CAMkgGkx.js";function c(e){let[t,n]=(0,l.useState)(0);return(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,alignItems:`flex-start`,fontFamily:`Inter, sans-serif`},children:[(0,u.jsx)(s,{...e,onClick:()=>n(e=>e+1)}),(0,u.jsxs)(`span`,{style:{fontSize:12,opacity:.6},children:[`Нажато: `,t]})]})}var l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{l=t(),i(),o(),u=n(),d=`
Источник — Figma UI Kit «Практис»: **FunctionButton** (node 298:1029).

Кнопка-текст без фона и рамки — действие внутри другого блока: «Действие 1 | Действие 2» в
алерте, «Подробнее», «Скачать». Цвета — то же семейство, что у **IconButton**.

| Проп | Что делает | В Figma |
|---|---|---|
| \`variant\` | primary / secondary / red | Type |
| \`size\` | m — 14px, высота 25 · l — 16px, высота 28 | Size |
| \`icon\` + \`iconPosition\` | иконка слева или справа, 14 / 16px | Icon = Left / Right |
| \`disabled\` | заблокирована | State = Disabled |

Hover / Active / Focus работают сами. **Secondary** в покое серая, на ховере и нажатии синяя —
так в макете. Focus — рамка, только при переходе с клавиатуры (Tab). Длинная подпись — отточие.
«Ddark mode» из макета — это Primary в тёмной теме: переключи тему в тулбаре.
`,f=[`primary`,`secondary`,`red`],p=[`m`,`l`],m={title:`UI Kit/FunctionButton`,component:s,parameters:{layout:`padded`,docs:{description:{component:d}}},tags:[`autodocs`],argTypes:{variant:{control:`inline-radio`,options:f},size:{control:`inline-radio`,options:p},iconPosition:{control:`inline-radio`,options:[`start`,`end`]},disabled:{control:`boolean`},children:{control:`text`,name:`подпись`},icon:{control:!1},type:{control:!1,table:{category:`Для разработчиков — передаётся из кода`}},forceState:{control:!1,table:{category:`Для витрины`}}},args:{children:`Действие`,variant:`primary`,size:`m`,disabled:!1}},h={render:e=>(0,u.jsx)(c,{...e})},g={parameters:{docs:{description:{story:`Все состояния из макета, M и L. Hover, Active и Focus здесь показаны принудительно; вживую они работают сами.`}}},render:()=>{let e={fontSize:12,opacity:.6};return(0,u.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`90px repeat(6, 110px)`,rowGap:18,alignItems:`center`,fontFamily:`Inter, sans-serif`},children:[(0,u.jsx)(`span`,{}),p.flatMap(t=>f.map(n=>(0,u.jsxs)(`span`,{style:e,children:[n,` · `,t.toUpperCase()]},t+n))),[`default`,`hover`,`active`,`focus`,`disabled`].map(t=>(0,u.jsxs)(`div`,{style:{display:`contents`},children:[(0,u.jsx)(`span`,{style:e,children:t}),p.flatMap(e=>f.map(n=>(0,u.jsx)(`span`,{children:(0,u.jsx)(s,{variant:n,size:e,disabled:t===`disabled`,forceState:t===`hover`||t===`active`||t===`focus`?t:void 0,children:`Действие`})},e+n)))]},t))]})}},_={name:`С иконкой`,parameters:{docs:{description:{story:`Иконка слева или справа, 14px у M и 16px у L, зазор 4.`}}},render:()=>(0,u.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,alignItems:`flex-start`},children:p.map(e=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:24},children:[(0,u.jsx)(s,{size:e,icon:(0,u.jsx)(r,{}),children:`Скачать`}),(0,u.jsx)(s,{size:e,variant:`secondary`,icon:(0,u.jsx)(r,{}),children:`Скачать`}),(0,u.jsx)(s,{size:e,icon:(0,u.jsx)(a,{}),iconPosition:`end`,children:`Подробнее`}),(0,u.jsx)(s,{size:e,variant:`red`,icon:(0,u.jsx)(a,{}),iconPosition:`end`,children:`Отозвать`})]},e))})},v={name:`Как в алерте`,parameters:{docs:{description:{story:`Два действия через разделитель — так они стоят в алерте (Secondary, L).`}}},render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16},children:[(0,u.jsx)(s,{variant:`secondary`,size:`l`,children:`Действие 1`}),(0,u.jsx)(`span`,{style:{width:1,height:16,background:`#dddddd`}}),(0,u.jsx)(s,{variant:`secondary`,size:`l`,children:`Действие 2`})]})},y={name:`Длинная подпись`,render:()=>(0,u.jsx)(`div`,{style:{width:160},children:(0,u.jsx)(s,{children:`Отправить повторно на согласование`})})},b=[`Playground`,`States`,`WithIcon`,`InAlert`,`LongLabel`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Clicks {...args} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Все состояния из макета, M и L. Hover, Active и Focus здесь показаны принудительно; вживую они работают сами.'
      }
    }
  },
  render: () => {
    const head = {
      fontSize: 12,
      opacity: 0.6
    } as const;
    return <div style={{
      display: 'grid',
      gridTemplateColumns: '90px repeat(6, 110px)',
      rowGap: 18,
      alignItems: 'center',
      fontFamily: 'Inter, sans-serif'
    }}>
        <span />
        {SIZES.flatMap(s => VARIANTS.map(v => <span key={s + v} style={head}>{v} · {s.toUpperCase()}</span>))}
        {(['default', 'hover', 'active', 'focus', 'disabled'] as const).map(state => <div key={state} style={{
        display: 'contents'
      }}>
            <span style={head}>{state}</span>
            {SIZES.flatMap(s => VARIANTS.map(v => <span key={s + v}>
                  <FunctionButton variant={v} size={s} disabled={state === 'disabled'} forceState={state === 'hover' || state === 'active' || state === 'focus' ? state : undefined}>
                    Действие
                  </FunctionButton>
                </span>))}
          </div>)}
      </div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'С иконкой',
  parameters: {
    docs: {
      description: {
        story: 'Иконка слева или справа, 14px у M и 16px у L, зазор 4.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    alignItems: 'flex-start'
  }}>
      {SIZES.map(s => <div key={s} style={{
      display: 'flex',
      gap: 24
    }}>
          <FunctionButton size={s} icon={<IconDownload2 />}>Скачать</FunctionButton>
          <FunctionButton size={s} variant="secondary" icon={<IconDownload2 />}>Скачать</FunctionButton>
          <FunctionButton size={s} icon={<IconArrowRight />} iconPosition="end">Подробнее</FunctionButton>
          <FunctionButton size={s} variant="red" icon={<IconArrowRight />} iconPosition="end">Отозвать</FunctionButton>
        </div>)}
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Как в алерте',
  parameters: {
    docs: {
      description: {
        story: 'Два действия через разделитель — так они стоят в алерте (Secondary, L).'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 16
  }}>
      <FunctionButton variant="secondary" size="l">Действие 1</FunctionButton>
      <span style={{
      width: 1,
      height: 16,
      background: '#dddddd'
    }} /* разделитель из макета алерта */ />
      <FunctionButton variant="secondary" size="l">Действие 2</FunctionButton>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Длинная подпись',
  render: () => <div style={{
    width: 160
  }}>
      <FunctionButton>Отправить повторно на согласование</FunctionButton>
    </div>
}`,...y.parameters?.docs?.source}}}})))()}x();export{v as InAlert,y as LongLabel,h as Playground,g as States,_ as WithIcon,b as __namedExportsOrder,m as default};