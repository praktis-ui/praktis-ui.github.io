import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-r_k3QGfr.js";import{n as r,t as i}from"./ShahmatkaCell-DtQzQvQ4.js";import{n as a,t as o}from"./ShahmatkaLocationHeader-DMiSoBh4.js";import{n as s,r as c,t as l}from"./ShahmatkaWorkRow-CNu8Jzt-.js";var u,d,f,p,m,h,g;function _(){return(_=e((()=>{u=t(),r(),a(),c(),d=n(),f=[`Подвал`,`Этаж 1`,`Котлован`,`Фасад Торцевой`],p=[{contractor:`ООО "Ромашка"`,title:`Бетонирование монолитных перекрытий`,cells:[{variant:`empty`},{variant:`quadrants`,date:`done`,materials:`required`,protocols:`done`,schemes:`required`},{variant:`awaiting-signature`},{variant:`empty`}]},{contractor:`ООО "Ромашка"`,title:`СТК Кабели магистральные (стояки) АППЗ`,cells:[{variant:`awaiting-other-signature`},{variant:`awaiting-signature`},{variant:`empty`},{variant:`remarks`}]},{contractor:`Подрядчик не назначен`,title:`СТК Монтаж приемо-контрольного оборудования`,cells:[{variant:`quadrants`,date:`pending`,materials:`pending`,protocols:`pending`,schemes:`pending`},{variant:`quadrants`,date:`pending`,materials:`pending`,protocols:`pending`,schemes:`pending`},{variant:`awaiting-other-signature`},{variant:`empty`}]}],m={title:`UI Kit/Shahmatka/Example`},h={render:()=>(0,d.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`300px repeat(${f.length}, 98px)`,gap:4},children:[(0,d.jsx)(l,{}),f.map(e=>(0,d.jsx)(o,{label:e},e)),p.map(e=>(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)(s,{contractor:e.contractor,title:e.title}),e.cells.map((t,n)=>(0,d.jsx)(i,{...t,onClick:()=>console.log(`open act details:`,e.title,f[n])},f[n]))]},e.title))]})},g=[`MiniTable`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: \`300px repeat(\${locations.length}, 98px)\`,
    gap: 4
  }}>
      <ShahmatkaTableCorner />
      {locations.map(label => <ShahmatkaLocationHeader key={label} label={label} />)}

      {rows.map(row => <Fragment key={row.title}>
          <ShahmatkaWorkRow contractor={row.contractor} title={row.title} />
          {row.cells.map((cell, i) => <ShahmatkaCell key={locations[i]} {...cell} onClick={() => console.log('open act details:', row.title, locations[i])} />)}
        </Fragment>)}
    </div>
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as MiniTable,g as __namedExportsOrder,m as default};