import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Statistic-NEk7Xitu.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Tag-oTIrj8-1.js";var o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{i(),t(),o=r(),s="\nПоказатель «подпись — значение»: подпись серая мелкая сверху, значение крупнее под ней. В antd —\n**Statistic**. Источник — поля под фото карточки объекта (Figma UI Kit «Практис», Оbject card\n6038:15787): подпись 13 text/grey-secondary, значение 16 Medium в одну строку с отточием.\n\n| Проп | Значения | |\n|---|---|---|\n| `title` | подпись | Mobile/Base-Normal 13 |\n| `value` | текст или число; числа — с разрядами через пробел (12 676 938 080) | Heading/5 16 |\n| `tone` | `default` — чёрный; `danger` — красный (алерт); `warning` — оранжевый (предупреждение); `success` — зелёный; `accent` — синий (инфо) | text/…-primary, text/accent |\n| `device` | `mob` — значение 15 | Mobile/H5 |\n| `prefix`, `suffix`, `precision`, `loading` | как у antd Statistic | |\n\nДля строки «подпись — значение» рядом (в карточке, модалке) — **TextLine**.\n",c=[`default`,`danger`,`warning`,`success`,`accent`],l={default:[`Проектировщик`,`ООО “Сэтл”`],danger:[`Дата сдачи`,`19.07.2025`],warning:[`Дата сдачи`,`06.10.2025`],success:[`Статус проверки`,`Принято`],accent:[`Новых замечаний`,`12`]},u={title:`UI Kit/Данные/Statistic`,id:`ui-kit-statistic`,parameters:{layout:`padded`,docs:{description:{component:s}}},tags:[`autodocs`],argTypes:{title:{control:`text`},value:{control:`text`},tone:{control:`inline-radio`,options:c},device:{control:`inline-radio`,options:[`web`,`mob`]}},args:{title:`Сумма договоров`,value:`12676938080`,tone:`default`,device:`web`}},d=({children:e})=>(0,o.jsx)(`div`,{style:{width:184},children:e}),f={parameters:{docs:{description:{story:`Число — с разрядами через пробел. Попробуйте текст.`}}},render:e=>(0,o.jsx)(d,{children:(0,o.jsx)(n,{title:e.title,value:e.value,tone:e.tone,device:e.device,suffix:/^\d+$/.test(e.value??``)?`₽`:void 0})})},p={name:`Цвета значения`,render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:24},children:c.map(e=>(0,o.jsx)(d,{children:(0,o.jsx)(n,{tone:e,title:l[e][0],value:l[e][1]})},e))})},m={name:`Числа, длинный текст, телефон, не текст`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:24},children:[(0,o.jsx)(d,{children:(0,o.jsx)(n,{title:`АВР согласовано`,value:12676938080,suffix:`₽`})}),(0,o.jsx)(d,{children:(0,o.jsx)(n,{title:`Тех. заказчик`,value:`ООО «Строительная компания Северо-Запад»`})}),(0,o.jsx)(d,{children:(0,o.jsx)(n,{title:`Остаток по договорам`,value:938080,suffix:`₽`,device:`mob`})}),(0,o.jsx)(d,{children:(0,o.jsx)(n,{title:`Проверка`,formatter:()=>(0,o.jsx)(a,{status:`success`,children:`Принято`})})})]})},h=[`Playground`,`Tones`,`Kinds`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Число — с разрядами через пробел. Попробуйте текст.'
      }
    }
  },
  render: (a: Partial<Args>) => <Box>
      <Statistic title={a.title} value={a.value} tone={a.tone} device={a.device} suffix={/^\\d+$/.test(a.value ?? '') ? '₽' : undefined} />
    </Box>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Цвета значения',
  render: () => <div style={{
    display: 'flex',
    gap: 24
  }}>
      {TONES.map(tone => <Box key={tone}>
          <Statistic tone={tone} title={TONE_TEXT[tone][0]} value={TONE_TEXT[tone][1]} />
        </Box>)}
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Числа, длинный текст, телефон, не текст',
  render: () => <div style={{
    display: 'flex',
    gap: 24
  }}>
      <Box>
        <Statistic title="АВР согласовано" value={12676938080} suffix="₽" />
      </Box>
      <Box>
        <Statistic title="Тех. заказчик" value="ООО «Строительная компания Северо-Запад»" />
      </Box>
      <Box>
        <Statistic title="Остаток по договорам" value={938080} suffix="₽" device="mob" />
      </Box>
      <Box>
        <Statistic title="Проверка" formatter={() => <Tag status="success">Принято</Tag>} />
      </Box>
    </div>
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as Kinds,f as Playground,p as Tones,h as __namedExportsOrder,u as default};