import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Surface-DrGr8a0X.js";import{n as i,t as a}from"./StackedBar-CfZjM3rG.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i(),o=t(),s={title:`UI Kit/Данные/StackedBar`,id:`ui-kit-stackedbar`,parameters:{layout:`padded`,docs:{description:{component:"\nПолоса из сегментов по доле значения: состав («на согласовании 5, согласовано 2…») или прогресс\n(один сегмент + остаток). Источник — Figma «Сенкевич-Анастасия», карточка «Действия за период»\n(node 4791:131382), экземпляр «Stacked Progress Bar».\n\n| Проп | Значения | В Figma |\n|---|---|---|\n| `segments` | `{ value, color, label? }[]` — ширина по доле `value` | Bar Segment |\n| `color` | `info` · `success` · `warning` · `danger` · `neutral` | Bar Segment / Info · Success · Warning · Danger; `neutral` в макете нет |\n| `total` | всего; больше суммы — справа остаток | Bar Segment / Remaining |\n| `showCount` | число в центре сегмента; не влезает — прячется | Bar Fill |\n| `legend` | легенда под полосой у сегментов с `label` | ряд под карточкой |\n\n**Цвета статусов заявок:** на согласовании — `info` (голубой), согласовано — `success`, на доработке —\n`warning`, просрочено — `danger`, в работе — `neutral` (серый: grey/500 + grey/350, на ступень темнее\nцветных, чтобы штрих был виден и не сливался с остатком). Подложка …/400 (красный — 500), полосы и\nплашка числа …/350, число …/800.\n\n**Наведение:** сегмент плавно поднимается на 2 (.2s, как анимации antd) и показывает тултип кита\n«На согласовании: 5». При `prefers-reduced-motion` — без движения.\n\n**Размеры:** высота 24, между сегментами 2, скругление 4; плашка числа 2/4, скругление 2, Small Medium 12;\nлегенда — на 24 ниже полосы (в макете 32), квадрат 16 → подпись 12, пункты через 16, Base Normal 14.\n\n**Штриховка** — в макете собрана из сотен линий, здесь обычный CSS-паттерн: полосы 3px шагом 8\n(в макете 7,8), наклон 45°.\n\n**Остаток** — подложка Surface: цвет противоположен фону (на белой карточке серый, на серой — белый).\n\n**Отличия от макета (согласовано):** квадрат легенды — цвета сегмента (в макете у синего темнее);\nчисло на плашке — …/800 (в макете main/600, контраст был ≈1.9:1); легенда на 24 ниже, а не на 32.\n"}}},tags:[`autodocs`],argTypes:{info:{name:`На согласовании (info)`,control:{type:`number`,min:0},table:{category:`Сегменты`}},success:{name:`Согласовано (success)`,control:{type:`number`,min:0},table:{category:`Сегменты`}},warning:{name:`На доработке (warning)`,control:{type:`number`,min:0},table:{category:`Сегменты`}},danger:{name:`Просрочено (danger)`,control:{type:`number`,min:0},table:{category:`Сегменты`}},neutral:{name:`В работе (neutral)`,control:{type:`number`,min:0},table:{category:`Сегменты`}},total:{control:{type:`number`,min:0},description:`0 — без остатка`},showCount:{control:`boolean`},legend:{control:`boolean`}},args:{info:5,success:2,warning:2,danger:1,neutral:4,total:0,showCount:!0,legend:!0}},c=({children:e})=>(0,o.jsx)(`div`,{style:{padding:24,background:`var(--surface-grey, #f5f8fb)`,borderRadius:12},children:(0,o.jsx)(r,{children:e})}),l=e=>[{value:e.info,color:`info`,label:`На согласовании`},{value:e.success,color:`success`,label:`Согласовано`},{value:e.warning,color:`warning`,label:`На доработке`},{value:e.danger,color:`danger`,label:`Просрочено`},{value:e.neutral,color:`neutral`,label:`В работе`}],u={render:e=>(0,o.jsx)(c,{children:(0,o.jsx)(a,{segments:l(e),total:e.total||void 0,showCount:e.showCount,legend:e.legend})})},d={name:`Цвета сегментов`,parameters:{docs:{description:{story:`Пять цветов и их смысл в статусах заявок. Наведите на сегмент — тултип.`}}},render:()=>(0,o.jsx)(c,{children:(0,o.jsxs)(`div`,{style:{display:`grid`,gap:16},children:[(0,o.jsx)(a,{legend:!1,segments:[{value:12,color:`info`,label:`info — На согласовании`}]}),(0,o.jsx)(a,{legend:!1,segments:[{value:8,color:`success`,label:`success — Согласовано`}]}),(0,o.jsx)(a,{legend:!1,segments:[{value:5,color:`warning`,label:`warning — На доработке`}]}),(0,o.jsx)(a,{legend:!1,segments:[{value:3,color:`danger`,label:`danger — Просрочено`}]}),(0,o.jsx)(a,{legend:!1,segments:[{value:16,color:`neutral`,label:`neutral — В работе`}]})]})})},f={name:`С остатком`,parameters:{docs:{description:{story:"`total` больше суммы — справа остаток. На белой карточке он серый, на серой — белый (Surface)."}}},render:()=>(0,o.jsxs)(`div`,{style:{padding:24,background:`var(--surface-grey, #f5f8fb)`,borderRadius:12,display:`grid`,gap:16},children:[(0,o.jsx)(r,{children:(0,o.jsx)(a,{legend:!1,showCount:!1,segments:[{value:28,color:`success`,label:`Согласовано`}],total:36})}),(0,o.jsx)(r,{children:(0,o.jsx)(r,{children:(0,o.jsx)(a,{legend:!1,showCount:!1,segments:[{value:28,color:`success`,label:`Согласовано`}],total:36})})})]})},p={name:`Узкие сегменты и длинная легенда`,parameters:{docs:{description:{story:`Сегмент уже плашки — число прячется, ширина не меньше 4. Легенда переносится.`}}},render:()=>(0,o.jsx)(c,{children:(0,o.jsx)(`div`,{style:{maxWidth:360},children:(0,o.jsx)(a,{segments:[{value:120,color:`neutral`,label:`В работе у подрядчика`},{value:3,color:`info`,label:`На повторном согласовании в экспертизе`},{value:1,color:`danger`,label:`Просрочено`},{value:40,color:`success`,label:`Согласовано`}]})})})},m=[`Playground`,`Colors`,`Remaining`,`Edge`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: a => <Page>
      <StackedBar segments={statuses(a as Args)} total={(a as Args).total || undefined} showCount={(a as Args).showCount} legend={(a as Args).legend} />
    </Page>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Цвета сегментов',
  parameters: {
    docs: {
      description: {
        story: 'Пять цветов и их смысл в статусах заявок. Наведите на сегмент — тултип.'
      }
    }
  },
  render: () => <Page>
      <div style={{
      display: 'grid',
      gap: 16
    }}>
        <StackedBar legend={false} segments={[{
        value: 12,
        color: 'info',
        label: 'info — На согласовании'
      }]} />
        <StackedBar legend={false} segments={[{
        value: 8,
        color: 'success',
        label: 'success — Согласовано'
      }]} />
        <StackedBar legend={false} segments={[{
        value: 5,
        color: 'warning',
        label: 'warning — На доработке'
      }]} />
        <StackedBar legend={false} segments={[{
        value: 3,
        color: 'danger',
        label: 'danger — Просрочено'
      }]} />
        <StackedBar legend={false} segments={[{
        value: 16,
        color: 'neutral',
        label: 'neutral — В работе'
      }]} />
      </div>
    </Page>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'С остатком',
  parameters: {
    docs: {
      description: {
        story: '\`total\` больше суммы — справа остаток. На белой карточке он серый, на серой — белый (Surface).'
      }
    }
  },
  render: () => <div style={{
    padding: 24,
    background: 'var(--surface-grey, #f5f8fb)',
    borderRadius: 12,
    display: 'grid',
    gap: 16
  }}>
      <Surface>
        <StackedBar legend={false} showCount={false} segments={[{
        value: 28,
        color: 'success',
        label: 'Согласовано'
      }]} total={36} />
      </Surface>
      <Surface>
        <Surface>
          <StackedBar legend={false} showCount={false} segments={[{
          value: 28,
          color: 'success',
          label: 'Согласовано'
        }]} total={36} />
        </Surface>
      </Surface>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Узкие сегменты и длинная легенда',
  parameters: {
    docs: {
      description: {
        story: 'Сегмент уже плашки — число прячется, ширина не меньше 4. Легенда переносится.'
      }
    }
  },
  render: () => <Page>
      <div style={{
      maxWidth: 360
    }}>
        <StackedBar segments={[{
        value: 120,
        color: 'neutral',
        label: 'В работе у подрядчика'
      }, {
        value: 3,
        color: 'info',
        label: 'На повторном согласовании в экспертизе'
      }, {
        value: 1,
        color: 'danger',
        label: 'Просрочено'
      }, {
        value: 40,
        color: 'success',
        label: 'Согласовано'
      }]} />
      </div>
    </Page>
}`,...p.parameters?.docs?.source}}}})))()}h();export{d as Colors,p as Edge,u as Playground,f as Remaining,m as __namedExportsOrder,s as default};