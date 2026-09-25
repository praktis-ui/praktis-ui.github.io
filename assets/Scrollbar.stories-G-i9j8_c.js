import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{_ as t,g as n,n as r}from"./iframe-r_k3QGfr.js";import{n as i,r as a,t as o}from"./Scrollbar-Bl0XBjVL.js";function s({size:e=`s`,style:n,children:r,asClassOnly:i=!1}){let{token:s}=t.useToken(),c={height:180,width:280,padding:12,border:`1px solid ${s.colorBorder}`,borderRadius:6,color:s.colorText,background:s.colorBgContainer,...n};return i?(0,l.jsx)(`div`,{className:a[e],style:{...c,overflowY:`auto`},children:r}):(0,l.jsx)(o,{size:e,style:c,children:r})}function c({suffix:e=``}){return(0,l.jsx)(l.Fragment,{children:d.map(t=>(0,l.jsxs)(`div`,{style:{padding:`6px 0`},children:[t,e]},t))})}var l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),i(),l=r(),u=`
Источник — Figma UI Kit «Практис»: **Scrollbar-margins** (node 1900:1275).

Это не отдельный элемент на странице, а внешний вид **нативного** скроллбара у прокручиваемой
области. Свой скроллбар рисовать не стали сознательно: подменённый ломает инерционную прокрутку,
тачпад и доступность, а выглядит так же. Всё, что описано в макете — толщина, поля, скругление
и два цвета — нативный умеет сам.

## Размеры

Обе величины из макета, вместе с полями вокруг полосы:

| Вариант | Полоса | Поля | Всего |
|---|---|---|---|
| \`s\` | 6px | по 8px | **22px** |
| \`xs\` | 4px | по 4px | **12px** |

Поля («margins» в названии компонента) сделаны прозрачной рамкой поверх \`background-clip\`:
обычными отступами нативный скроллбар не подвинуть. Дорожка — \`black/200\`, бегунок —
\`black/310\`, оба скруглены в пилюлю.

Вертикальный и горизонтальный из макета — это один и тот же класс: направление выбирает браузер
по тому, что именно не помещается.

## Как применять

Либо обернуть содержимое в \`<Scrollbar size="xs">\` и ограничить ему высоту, либо — если
прокручиваемая коробка уже есть — взять готовый класс \`scrollbarClass.xs\` и повесить на неё
(см. историю **OwnBox**).

## Про «на маке полос не видно, на винде некрасивые»

Это ровно та проблема, которую компонент и закрывает. Как только задан \`::-webkit-scrollbar\`,
браузер переключается на «кастомный» скроллбар: он **всегда виден и занимает место**, системная
настройка «показывать полосы только при прокрутке» на него больше не действует. Замерено —
ширина, которую полоса занимает:

| | обычная полоса | наша |
|---|---|---|
| Safari | **0px** — не видно вовсе | 22px |
| Chrome со скрытыми полосами | 15px, стандартная серая | 22px |

То есть одно и то же правило решает обе беды сразу: на маке полоса появляется, на винде
стандартная серая заменяется нашей. Рисовать свой скроллбар на JS для этого не нужно.

## Чего не переносили

Вариант **Position** (Top / Centre / Down) — это три кадра, где бегунок показан в разных местах
дорожки, для удобства дизайнеров. В жизни его двигает браузер.

В **Firefox** толщину в пикселях задать нельзя — там только «обычный» и «тонкий», поэтому
\`s\` и \`xs\` отличаются, но не ровно на 22 и 12 пикселей. Цвета применяются в обеих.
`,d=Array.from({length:14},(e,t)=>`Строка ${t+1} — прокрути меня, чтобы увидеть полосу`),f={title:`UI Kit/Scrollbar`,component:o,parameters:{layout:`centered`,docs:{description:{component:u}}},tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:[`s`,`xs`]},children:{control:!1,table:{category:`Для разработчиков — передаётся из кода`}}},args:{size:`s`}},p={render:e=>(0,l.jsx)(s,{size:e.size,children:(0,l.jsx)(c,{})})},m={parameters:{docs:{description:{story:"Слева `s` (22px), справа `xs` (12px). Обе величины — вместе с полями вокруг полосы."}}},render:()=>(0,l.jsx)(`div`,{style:{display:`flex`,gap:24},children:[`s`,`xs`].map(e=>(0,l.jsxs)(`div`,{children:[(0,l.jsxs)(`div`,{style:{marginBottom:8,fontSize:12,opacity:.6},children:[`size="`,e,`"`]}),(0,l.jsx)(s,{size:e,children:(0,l.jsx)(c,{})})]},e))})},h={parameters:{docs:{description:{story:`Отдельного «горизонтального» варианта в коде нет: направление определяется тем, что не помещается.`}}},render:e=>(0,l.jsx)(s,{size:e.size,style:{height:`auto`,whiteSpace:`nowrap`},children:(0,l.jsx)(`div`,{style:{padding:`6px 0`},children:`Очень длинная строка, которая не помещается по ширине и поэтому прокручивается вбок — и ещё немного текста для верности`})})},g={render:e=>(0,l.jsx)(s,{size:e.size,style:{whiteSpace:`nowrap`},children:(0,l.jsx)(c,{suffix:` — и ещё немного текста, чтобы не помещалось и по ширине тоже`})})},_={parameters:{docs:{description:{story:'Если своя прокручиваемая область уже есть, оборачивать её в `<Scrollbar>` незачем — достаточно повесить класс: `<div className={scrollbarClass.xs} style={{ overflowY: "auto" }}>`.'}}},render:()=>(0,l.jsx)(s,{size:`xs`,asClassOnly:!0,children:(0,l.jsx)(c,{})})},v=[`Playground`,`Sizes`,`Horizontal`,`Both`,`OwnBox`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <DemoBox size={args.size}>
      <Lines />
    </DemoBox>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Слева \`s\` (22px), справа \`xs\` (12px). Обе величины — вместе с полями вокруг полосы.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24
  }}>
      {(['s', 'xs'] satisfies ScrollbarSize[]).map(size => <div key={size}>
          <div style={{
        marginBottom: 8,
        fontSize: 12,
        opacity: 0.6
      }}>size=&quot;{size}&quot;</div>
          <DemoBox size={size}>
            <Lines />
          </DemoBox>
        </div>)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Отдельного «горизонтального» варианта в коде нет: направление определяется тем, что не помещается.'
      }
    }
  },
  render: args => <DemoBox size={args.size} style={{
    height: 'auto',
    whiteSpace: 'nowrap'
  }}>
      <div style={{
      padding: '6px 0'
    }}>
        Очень длинная строка, которая не помещается по ширине и поэтому прокручивается вбок — и ещё немного текста для верности
      </div>
    </DemoBox>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <DemoBox size={args.size} style={{
    whiteSpace: 'nowrap'
  }}>
      <Lines suffix=" — и ещё немного текста, чтобы не помещалось и по ширине тоже" />
    </DemoBox>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Если своя прокручиваемая область уже есть, оборачивать её в \`<Scrollbar>\` незачем — достаточно повесить класс: \`<div className={scrollbarClass.xs} style={{ overflowY: "auto" }}>\`.'
      }
    }
  },
  render: () => <DemoBox size="xs" asClassOnly>
      <Lines />
    </DemoBox>
}`,..._.parameters?.docs?.source}}}})))()}y();export{g as Both,h as Horizontal,_ as OwnBox,p as Playground,m as Sizes,v as __namedExportsOrder,f as default};