import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import"./figma-colors-lO-pgkJ7.js";import{n,t as r}from"./DragHandle-DKSGYi1Q.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i=t(),a={title:`UI Kit/Кнопки/DragHandle`,id:`ui-kit-drag-handle`,component:r,parameters:{layout:`centered`,docs:{description:{component:"\nИсточник — Figma UI Kit «Практис»: **Cell Drag and drop** (node 7373:3773) — шесть точек, за\nкоторые тянут строку таблицы или карточку.\n\nАтом только рисует ручку и её состояния — само перетаскивание делает тот, кто её ставит\n(`@dnd-kit`): **Table** с `onRowsReorder`, **ObjectCardGrid** в режиме редактирования. Отдельно\nручку ставят, только если собираете свой список с перестановкой — тогда в неё передаются\n`attributes`, `listeners` и `ref` (`setActivatorNodeRef`) из `useSortable`.\n\n| Что | Как |\n|---|---|\n| Размер | `size` — 16 (строки таблиц, как в макете) или 20 (карточки) |\n| Фон | `tone` — default: серая, на светлом; onDark: белая, на фото карточки объекта и тёмном |\n| Состояния | Default → Hover → Press, цвета — токены Figma; фокус с клавиатуры — рамка |\n| Подпись | `label` — для экранного диктора и подсказки, по умолчанию «Перетащить» |\n\nЭто кнопка: доступна с клавиатуры, курсор — «рука». Палец тянет ручку, а не прокручивает страницу.\n"}}},tags:[`autodocs`],argTypes:{size:{control:`inline-radio`,options:[16,20]},tone:{control:`inline-radio`,options:[`default`,`onDark`]},label:{control:`text`}},args:{size:16,tone:`default`,label:`Перетащить`}},o={render:e=>e.tone===`onDark`?(0,i.jsx)(`div`,{style:{padding:16,borderRadius:8,background:`var(--grey-800)`},children:(0,i.jsx)(r,{...e})}):(0,i.jsx)(r,{...e})},s={display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8,fontFamily:`Inter, sans-serif`,fontSize:12,color:`var(--text-grey-secondary)`},c={default:[[`Default`,void 0,`grey/350`],[`Hover`,`var(--grey-400)`,`grey/400`],[`Press`,`var(--icon-grey-default)`,`grey/600`]],onDark:[[`Default`,void 0,`icon/white`],[`Hover`,`var(--white-600)`,`white/600`],[`Press`,`var(--white-500)`,`white/500`]]},l={name:`Состояния`,parameters:{docs:{description:{story:'Две версии: серая — на светлом (строки таблиц, белые и серые подложки), белая `tone="onDark"` — на фото карточки объекта и тёмном. Цвета — токены Figma. Первая ручка в каждом ряду живая: наведите и нажмите.'}}},render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[`default`,`onDark`].map(e=>(0,i.jsx)(`div`,{style:{display:`flex`,gap:40,padding:`16px 24px`,borderRadius:8,background:e===`onDark`?`var(--grey-800)`:`var(--bg-white-page-full)`,boxShadow:e===`onDark`?void 0:`inset 0 0 0 1px var(--grey-330)`},children:c[e].map(([t,n,a])=>(0,i.jsxs)(`div`,{style:{...s,color:e===`onDark`?`var(--text-white-secondary)`:s.color},children:[(0,i.jsx)(r,{size:20,tone:e,style:n?{color:n}:void 0,tabIndex:n?-1:void 0}),(0,i.jsx)(`span`,{children:t}),(0,i.jsx)(`code`,{style:{fontSize:11},children:a})]},t))},e))})},u={name:`Размеры и фон`,parameters:{docs:{description:{story:`16 — строки таблиц, 20 — карточки. onDark — на фото карточки объекта.`}}},render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:32,alignItems:`center`},children:[(0,i.jsxs)(`div`,{style:s,children:[(0,i.jsx)(r,{size:16}),`16`]}),(0,i.jsxs)(`div`,{style:s,children:[(0,i.jsx)(r,{size:20}),`20`]}),(0,i.jsxs)(`div`,{style:{...s,padding:16,borderRadius:8,background:`var(--grey-800)`,color:`var(--text-white-primary)`},children:[(0,i.jsx)(r,{size:20,tone:`onDark`}),`onDark 20`]})]})},d=[`Playground`,`States`,`Sizes`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => args.tone === 'onDark' ? <div style={{
    padding: 16,
    borderRadius: 8,
    background: 'var(--grey-800)'
  }}>
        <DragHandle {...args} />
      </div> : <DragHandle {...args} />
}`,...o.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Состояния',
  parameters: {
    docs: {
      description: {
        story: 'Две версии: серая — на светлом (строки таблиц, белые и серые подложки), белая \`tone="onDark"\` — на фото карточки объекта и тёмном. Цвета — токены Figma. Первая ручка в каждом ряду живая: наведите и нажмите.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      {(['default', 'onDark'] as const).map(tone => <div key={tone} style={{
      display: 'flex',
      gap: 40,
      padding: '16px 24px',
      borderRadius: 8,
      background: tone === 'onDark' ? 'var(--grey-800)' : 'var(--bg-white-page-full)',
      boxShadow: tone === 'onDark' ? undefined : 'inset 0 0 0 1px var(--grey-330)'
    }}>
          {STATES[tone].map(([name, color, token]) => <div key={name} style={{
        ...cell,
        color: tone === 'onDark' ? 'var(--text-white-secondary)' : cell.color
      }}>
              <DragHandle size={20} tone={tone} style={color ? {
          color
        } : undefined} tabIndex={color ? -1 : undefined} />
              <span>{name}</span>
              <code style={{
          fontSize: 11
        }}>{token}</code>
            </div>)}
        </div>)}
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Размеры и фон',
  parameters: {
    docs: {
      description: {
        story: '16 — строки таблиц, 20 — карточки. onDark — на фото карточки объекта.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    alignItems: 'center'
  }}>
      <div style={cell}>
        <DragHandle size={16} />
        16
      </div>
      <div style={cell}>
        <DragHandle size={20} />
        20
      </div>
      <div style={{
      ...cell,
      padding: 16,
      borderRadius: 8,
      background: 'var(--grey-800)',
      color: 'var(--text-white-primary)'
    }}>
        <DragHandle size={20} tone="onDark" />
        onDark 20
      </div>
    </div>
}`,...u.parameters?.docs?.source}}}})))()}f();export{o as Playground,u as Sizes,l as States,d as __namedExportsOrder,a as default};