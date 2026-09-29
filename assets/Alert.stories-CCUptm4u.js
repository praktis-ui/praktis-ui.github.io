import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{i as n,n as r,r as i,t as a}from"./useAlerts-DabJ2IoO.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Button-GZMQfLYZ.js";function l({withTitle:e=!0,withText:t=!0,actionsCount:n=2,closable:r=!0,...a}){let[o,s]=(0,f.useState)(!0),[l,u]=(0,f.useState)(null),d=[{label:`Действие 1`,onClick:()=>u(`Действие 1`)},{label:`Действие 2`,onClick:()=>u(`Действие 2`)}].slice(0,n);return o?(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,alignItems:`flex-start`},children:[(0,p.jsx)(i,{...a,title:e?a.title??`Info title`:void 0,text:t?a.text??`Notification text`:void 0,actions:n?d:void 0,onClose:r?()=>s(!1):void 0}),l&&(0,p.jsxs)(`span`,{style:{fontSize:12,color:`#7e7e7e`,fontFamily:`Inter, sans-serif`},children:[`Нажато: `,l]})]}):(0,p.jsx)(c,{variant:`link`,onClick:()=>s(!0),children:`Закрыт крестиком — показать снова`})}function u(){let[e,t]=r(),[n,i]=(0,f.useState)([]),a=e=>i(t=>[e,...t].slice(0,4));return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,alignItems:`flex-start`,fontFamily:`Inter, sans-serif`},children:[t,(0,p.jsx)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:h.map(t=>(0,p.jsxs)(c,{variant:`stroke`,onClick:()=>e.toast({color:t,title:g[t],text:`Закроется сам через 10 секунд.`,onClose:()=>a(`закрыт: ${g[t]}`)}),children:[`Toast `,t]},t))}),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,p.jsx)(c,{variant:`stroke`,onClick:()=>{let t=e.toast({color:`warning`,title:`Файл уже загружен`,text:`С кнопками уведомление само не закрывается.`,actions:[{label:`Заменить`,onClick:()=>{a(`нажато: Заменить`),e.close(t)}},{label:`Оставить`,onClick:()=>{a(`нажато: Оставить`),e.close(t)}}]})},children:`Toast с действиями`}),(0,p.jsx)(c,{variant:`stroke`,onClick:()=>e.banner({color:`error`,text:`Вы не можете подать акт на согласование: истек срок подачи документов (с 21 по 25 марта). Обратитесь к заказчику.`}),children:`Banner`})]}),n.length>0&&(0,p.jsx)(`div`,{style:{fontSize:12,color:`#7e7e7e`},children:n.join(` · `)})]})}function d(){let e=(0,f.useRef)(null),[t,n]=r({device:`mob`,getContainer:()=>e.current??document.body});return(0,p.jsxs)(`div`,{ref:e,style:{position:`relative`,width:360,height:740,overflow:`hidden`,borderRadius:24,boxShadow:`0 0 0 1px #dddddd`,background:`#f5f8fb`,padding:16,boxSizing:`border-box`,transform:`translateZ(0)`},children:[n,(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,alignItems:`flex-start`},children:[(0,p.jsx)(c,{variant:`stroke`,onClick:()=>t.toast({color:`success`,title:`Данные сохранены`}),children:`Toast`}),(0,p.jsx)(c,{variant:`stroke`,onClick:()=>t.banner({color:`error`,text:`Вы не можете подать акт на согласование: истек срок подачи документов. Обратитесь к заказчику.`}),children:`Banner`})]})]})}var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{f=t(),s(),n(),a(),p=o(),m=`
Источник — Figma UI Kit «Практис»: **Alert** (node 1603:3714), описание — node 1597:3877.

Один вид в трёх ролях:

| Роль | Где | Ширина | Закрывается |
|---|---|---|---|
| **inline** | внутри блока страницы, про этот блок | по контейнеру | крестиком (если есть) |
| **banner** | поверх страницы: сверху по центру, 80px от верха | по экрану, не больше 1000 | сам через 30 с или крестиком |
| **toast** | поверх страницы: справа внизу, 32 от краёв, между несколькими 12 | по тексту, не больше 460 | сам через 10 с; с кнопками-действиями — нет |

На мобильном banner и toast **всегда снизу**, во всю ширину, 16 от краёв. Пока курсор на
уведомлении, оно не закрывается.

**Цвета:** info, error, warning, success, neutral. **Слоты:** заголовок, текст, кнопки-действия
(до двух, **FunctionButton** кита через разделитель), крестик. Иконка есть всегда.

Inline — это компонент \`<Alert>\`. Banner и toast показываются хуком:
\`const [alerts, holder] = useAlerts()\` → \`alerts.toast({ color: 'success', title: 'Сохранено' })\`.
`,h=[`info`,`error`,`warning`,`success`,`neutral`],g={info:`Акт отправлен на проверку`,error:`Не удалось подписать документ`,warning:`Срок аккредитации истекает`,success:`Договор подписан`,neutral:`Черновик сохранён`},_=e=>({control:`boolean`,name:e,table:{category:`Слоты`}}),v={control:!1,table:{category:`Для разработчиков — передаётся из кода`}},y={title:`UI Kit/Сообщения и окна/Alert`,id:`ui-kit-alert`,component:i,parameters:{layout:`padded`,docs:{description:{component:m}}},tags:[`autodocs`],argTypes:{color:{control:`inline-radio`,options:h},type:{control:`inline-radio`,options:[`inline`,`banner`,`toast`]},device:{control:`inline-radio`,options:[`web`,`mob`]},title:{control:`text`},text:{control:`text`},withTitle:_(`заголовок`),withText:_(`текст`),actionsCount:{control:`inline-radio`,options:[0,1,2],name:`кнопки-действия`,table:{category:`Слоты`}},closable:_(`крестик`),actions:v,onClose:v},args:{color:`info`,type:`inline`,device:`web`,title:`Info title`,text:`Notification text`,withTitle:!0,withText:!0,actionsCount:2,closable:!0}},b=({children:e})=>(0,p.jsx)(`div`,{style:{width:400},children:e}),x={parameters:{docs:{description:{story:`Слоты — в панели «Слоты». Крестик скрывает алерт, действия нажимаются.`}}},render:e=>(0,p.jsx)(b,{children:(0,p.jsx)(l,{...e})})},S={name:`Все цвета: inline и toast, веб и мобильный`,parameters:{docs:{description:{story:`Как в компоненте макета. Всё живое: крестик скрывает, действия нажимаются. Inline тянется по контейнеру (здесь 400), toast на вебе — по тексту, на мобильном — во всю ширину.`}}},render:()=>(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(4, 400px)`,gap:20,alignItems:`start`},children:h.map(e=>[`web`,`mob`].flatMap(t=>[`inline`,`toast`].map(n=>(0,p.jsx)(l,{color:e,type:n,device:t},e+t+n))))})},C={name:`Варианты из макета`,parameters:{docs:{description:{story:`«Без крестика и кнопок» и «без заголовка» — просто не переданные слоты.`}}},render:()=>(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, max-content)`,gap:20},children:h.map(e=>(0,p.jsxs)(`div`,{style:{display:`contents`},children:[(0,p.jsx)(l,{color:e,type:`toast`,actionsCount:0,closable:!1}),(0,p.jsx)(l,{color:e,type:`toast`,withTitle:!1,actionsCount:0})]},e))})},w={name:`Inline в блоке`,parameters:{docs:{description:{story:`Inline стоит внутри блока и относится к нему — ширина по блоку.`}}},render:()=>(0,p.jsxs)(`div`,{style:{width:720,padding:24,border:`1px solid #eef3f9`,borderRadius:12,display:`flex`,flexDirection:`column`,gap:16,fontFamily:`Inter, sans-serif`},children:[(0,p.jsx)(`div`,{style:{fontSize:20,fontWeight:500,color:`#41484a`},children:`Загрузка акта выполненных работ`}),(0,p.jsx)(i,{color:`info`,text:`На данной странице предусмотрена возможность загружать только акты КС, которые соответствуют установленным требованиям. Пожалуйста, обратите внимание, что другие формы документов приняты не будут.`})]})},T={name:`Длинный текст`,parameters:{docs:{description:{story:`Toast растёт по тексту до 460, дальше текст переносится (текст не шире 368).`}}},render:()=>(0,p.jsx)(l,{color:`error`,type:`toast`,actionsCount:0,title:`Не удалось отправить акт`,text:`Вы не можете подать акт на согласование: истек срок подачи документов (с 21 по 25 марта). Обратитесь к заказчику.`})},E={name:`Toast и Banner поверх страницы`,parameters:{docs:{description:{story:`Toast — справа внизу, закрывается сам через 10 с (пока курсор на нём — нет); с кнопками-действиями не закрывается сам. Banner — сверху по центру, 30 с. Несколько toast — списком через 12.`}}},render:()=>(0,p.jsx)(u,{})},D={name:`Мобильный`,parameters:{docs:{description:{story:`На мобильном toast и banner всегда снизу, во всю ширину, 16 от краёв (рамка телефона 360×740).`}}},render:()=>(0,p.jsx)(d,{})},O=[`Playground`,`Colors`,`Variants`,`InBlock`,`LongText`,`Toasts`,`Mobile`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Слоты — в панели «Слоты». Крестик скрывает алерт, действия нажимаются.'
      }
    }
  },
  render: args => <Box>
      <Live {...args as Partial<Args>} />
    </Box>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Все цвета: inline и toast, веб и мобильный',
  parameters: {
    docs: {
      description: {
        story: 'Как в компоненте макета. Всё живое: крестик скрывает, действия нажимаются. Inline тянется по контейнеру (здесь 400), toast на вебе — по тексту, на мобильном — во всю ширину.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 400px)',
    gap: 20,
    alignItems: 'start'
  }}>
      {COLORS.map(color => (['web', 'mob'] as const).flatMap(device => (['inline', 'toast'] as const).map(type => <Live key={color + device + type} color={color} type={type} device={device} />)))}
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Варианты из макета',
  parameters: {
    docs: {
      description: {
        story: '«Без крестика и кнопок» и «без заголовка» — просто не переданные слоты.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, max-content)',
    gap: 20
  }}>
      {COLORS.map(color => <div key={color} style={{
      display: 'contents'
    }}>
          <Live color={color} type="toast" actionsCount={0} closable={false} />
          <Live color={color} type="toast" withTitle={false} actionsCount={0} />
        </div>)}
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Inline в блоке',
  parameters: {
    docs: {
      description: {
        story: 'Inline стоит внутри блока и относится к нему — ширина по блоку.'
      }
    }
  },
  render: () => <div style={{
    width: 720,
    padding: 24,
    border: '1px solid #eef3f9',
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    fontFamily: 'Inter, sans-serif'
  }}>
      <div style={{
      fontSize: 20,
      fontWeight: 500,
      color: '#41484a'
    }}>Загрузка акта выполненных работ</div>
      <Alert color="info" text="На данной странице предусмотрена возможность загружать только акты КС, которые соответствуют установленным требованиям. Пожалуйста, обратите внимание, что другие формы документов приняты не будут." />
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Длинный текст',
  parameters: {
    docs: {
      description: {
        story: 'Toast растёт по тексту до 460, дальше текст переносится (текст не шире 368).'
      }
    }
  },
  render: () => <Live color="error" type="toast" actionsCount={0} title="Не удалось отправить акт" text="Вы не можете подать акт на согласование: истек срок подачи документов (с 21 по 25 марта). Обратитесь к заказчику." />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Toast и Banner поверх страницы',
  parameters: {
    docs: {
      description: {
        story: 'Toast — справа внизу, закрывается сам через 10 с (пока курсор на нём — нет); с кнопками-действиями не закрывается сам. Banner — сверху по центру, 30 с. Несколько toast — списком через 12.'
      }
    }
  },
  render: () => <ToastsDemo />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Мобильный',
  parameters: {
    docs: {
      description: {
        story: 'На мобильном toast и banner всегда снизу, во всю ширину, 16 от краёв (рамка телефона 360×740).'
      }
    }
  },
  render: () => <MobileDemo />
}`,...D.parameters?.docs?.source}}}})))()}k();export{S as Colors,w as InBlock,T as LongText,D as Mobile,x as Playground,E as Toasts,C as Variants,O as __namedExportsOrder,y as default};