import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import"./figma-colors-lO-pgkJ7.js";import{n as r,t as i}from"./Button-DIhGMxSW.js";import{r as a,t as o}from"./Surface-i_8E7dtq.js";import{i as s,r as c,t as l}from"./FileItem-CoPZkmBw.js";function u({size:e}){return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,width:282},children:[(0,p.jsx)(l,{size:e,name:`Имя файла`,onView:h,onDownload:h,onDelete:h}),(0,p.jsx)(l,{size:e,name:`Паспорт`,note:`от 15.03.2025`,onView:h}),(0,p.jsx)(l,{size:e,name:`Имя файла`,status:`loading`,progress:20,onCancel:h}),(0,p.jsx)(l,{size:e,name:`Имя файла`,status:`error`,onDelete:h})]})}function d(){let[e,t]=(0,f.useState)([{id:1,name:`Исполнительная схема.pdf`,progress:0},{id:2,name:`Акт освидетельствования скрытых работ.pdf`,progress:35}]);return(0,f.useEffect)(()=>{let e=setInterval(()=>t(e=>e.map(e=>e.progress<100?{...e,progress:Math.min(100,e.progress+7)}:e)),300);return()=>clearInterval(e)},[]),(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,maxWidth:600},children:[(0,p.jsxs)(c,{children:[e.map(e=>e.progress<100?(0,p.jsx)(l,{name:e.name,status:`loading`,progress:e.progress,onCancel:()=>t(t=>t.filter(t=>t.id!==e.id))},e.id):(0,p.jsx)(l,{name:e.name,note:`только что`,onView:h,onDownload:h,onDelete:()=>t(t=>t.filter(t=>t.id!==e.id))},e.id)),(0,p.jsx)(l,{name:`Сертификат.pdf`,status:`error`,onDelete:h})]}),(0,p.jsx)(`div`,{children:(0,p.jsx)(i,{variant:`stroke`,size:`small`,onClick:()=>t(e=>[...e,{id:Date.now(),name:`Файл ${e.length+1}.pdf`,progress:0}]),children:`Добавить файл`})})]})}var f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{f=t(),r(),a(),s(),p=n(),m={title:`UI Kit/Карточки/FileItem`,id:`ui-kit-fileitem`,parameters:{layout:`padded`,docs:{description:{component:"\nПлашка файла — Figma UI Kit «Практис», **File-downloaded** (страница Upload, node 1666:1818). Одна и та же — в\nзагрузке файлов, в таблице (колонка «Документы») и в карточке замечания.\n\n| Проп | Значения | В Figma |\n|---|---|---|\n| — | цвет сам противоположен фону: в серой карточке белая, в белой — серая | Type = White / Dark |\n| `size` | `m` — 40 (загрузка, таблицы L / M), `s` — 34 (таблицы S). В таблице ставится сам | — |\n| `status` | `default`, `loading` + `progress` (полоса внизу, «Отменить»), `error` (красная, только «Удалить») | Status = Default / Processing / Erorre |\n| наведение | фон bg/grey-hover | Status = Hover |\n| `onView` / `onDownload` / `onDelete` / `onCancel` | есть — есть кнопка | Eye / Download / Trash / Cancel |\n| `note` | мелкий серый текст справа: «от 15.03.2025» | Add_text |\n\nНесколько файлов — **FileList**: через 8, не влезают — перенос. Ширина плашки — по месту, от 200 до 282.\nДлинное имя — отточие и тултип.\n"}}},tags:[`autodocs`],argTypes:{name:{control:`text`},size:{control:`inline-radio`,options:[`m`,`s`]},status:{control:`inline-radio`,options:[`default`,`loading`,`error`]},progress:{control:{type:`range`,min:0,max:100,step:5},if:{arg:`status`,eq:`loading`}},note:{control:`text`,name:`текст справа`},view:{control:`boolean`,name:`кнопка «Посмотреть»`,table:{category:`Слоты`}},download:{control:`boolean`,name:`кнопка «Скачать»`,table:{category:`Слоты`}},remove:{control:`boolean`,name:`кнопка «Удалить»`,table:{category:`Слоты`}}},args:{name:`Паспорт качества`,size:`m`,status:`default`,progress:40,note:`от 15.03.2025`,view:!0,download:!0,remove:!0}},h=()=>{},g={render:({name:e,size:t,status:n,progress:r,note:i,view:a,download:o,remove:s})=>(0,p.jsx)(`div`,{style:{width:360},children:(0,p.jsx)(l,{name:e??``,size:t,status:n,progress:r,note:i||void 0,onView:a?h:void 0,onDownload:o?h:void 0,onDelete:s?h:void 0,onCancel:h})})},_={fontFamily:`Inter, sans-serif`,fontSize:12,color:`var(--text-black-secondary)`},v={name:`Состояния и фон`,parameters:{docs:{description:{story:`Как в макете: обычная, с текстом справа, грузится, ошибка — на белом и на сером. Цвет плашки задавать не нужно: она сама противоположна фону. Наведите — фон bg/grey-hover.`}}},render:()=>(0,p.jsx)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`},children:[`m`,`s`].map(e=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,p.jsx)(`span`,{style:_,children:e===`m`?`M — 40`:`S — 34`}),(0,p.jsxs)(`div`,{style:{display:`flex`,gap:24},children:[(0,p.jsx)(o,{on:`grey`,level:2,children:(0,p.jsx)(u,{size:e})}),(0,p.jsx)(o,{on:`white`,level:2,children:(0,p.jsx)(u,{size:e})})]})]},e))})},y={name:`Загрузка`,parameters:{docs:{description:{story:`Файлы грузятся — полоса растёт; догрузился — обычная плашка. «Отменить» и «Удалить» убирают файл.`}}},render:()=>(0,p.jsx)(d,{})},b=[`Playground`,`States`,`Upload`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: ({
    name,
    size,
    status,
    progress,
    note,
    view,
    download,
    remove
  }: Partial<Args>) => <div style={{
    width: 360
  }}>
      <FileItem name={name ?? ''} size={size} status={status} progress={progress} note={note || undefined} onView={view ? noop : undefined} onDownload={download ? noop : undefined} onDelete={remove ? noop : undefined} onCancel={noop} />
    </div>
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Состояния и фон',
  parameters: {
    docs: {
      description: {
        story: 'Как в макете: обычная, с текстом справа, грузится, ошибка — на белом и на сером. Цвет плашки задавать не нужно: она сама противоположна фону. Наведите — фон bg/grey-hover.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap'
  }}>
      {(['m', 's'] as FileItemSize[]).map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
          <span style={label}>{size === 'm' ? 'M — 40' : 'S — 34'}</span>
          <div style={{
        display: 'flex',
        gap: 24
      }}>
            <Surface on="grey" level={2}>
              <Column size={size} />
            </Surface>
            <Surface on="white" level={2}>
              <Column size={size} />
            </Surface>
          </div>
        </div>)}
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Загрузка',
  parameters: {
    docs: {
      description: {
        story: 'Файлы грузятся — полоса растёт; догрузился — обычная плашка. «Отменить» и «Удалить» убирают файл.'
      }
    }
  },
  render: () => <UploadDemo />
}`,...y.parameters?.docs?.source}}}})))()}x();export{g as Playground,v as States,y as Upload,b as __namedExportsOrder,m as default};