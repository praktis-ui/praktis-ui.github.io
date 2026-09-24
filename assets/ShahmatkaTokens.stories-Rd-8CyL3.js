import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-Cfof-CBm.js";import{n as r,t as i}from"./ShahmatkaLegend-lwqiK5sG.js";function a({name:e,kind:t}){let n=(0,o.useRef)(null),[r,i]=(0,o.useState)(``);return(0,o.useLayoutEffect)(()=>{n.current&&i(getComputedStyle(n.current).getPropertyValue(e).trim())}),(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[t===`fill`?(0,s.jsx)(`div`,{ref:n,style:{width:40,height:40,borderRadius:6,flexShrink:0,border:`1px solid rgba(128,128,128,0.25)`,background:`var(${e})`}}):(0,s.jsx)(`div`,{ref:n,style:{width:40,height:40,borderRadius:6,flexShrink:0,display:`flex`,alignItems:`center`,justifyContent:`center`,border:`1px solid rgba(128,128,128,0.25)`,fontFamily:`Inter, sans-serif`,fontSize:14,color:`var(${e})`},children:`Аа`}),(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2,fontFamily:`Inter, sans-serif`},children:[(0,s.jsx)(`code`,{style:{fontSize:12.5},children:e}),(0,s.jsx)(`code`,{style:{fontSize:12,opacity:.6},children:r||`…`})]})]})}var o,s,c,l,u,d;function f(){return(f=e((()=>{o=t(),r(),s=n(),c=[{title:`Нейтральные и структура`,tokens:[{name:`--shahmatka-border`,kind:`fill`},{name:`--shahmatka-text`,kind:`text`},{name:`--shahmatka-header-bg`,kind:`fill`},{name:`--shahmatka-cell-empty-bg`,kind:`fill`},{name:`--shahmatka-row-bg`,kind:`fill`},{name:`--shahmatka-badge-bg`,kind:`fill`},{name:`--shahmatka-badge-text`,kind:`text`},{name:`--shahmatka-legend-bg`,kind:`fill`}]},{title:`Статус-заливки`,tokens:[{name:`--shahmatka-cell-pending-bg`,kind:`fill`},{name:`--shahmatka-cell-required-bg`,kind:`fill`},{name:`--shahmatka-cell-done-bg`,kind:`fill`},{name:`--shahmatka-cell-awaiting-signature-bg`,kind:`fill`},{name:`--shahmatka-cell-awaiting-other-bg`,kind:`fill`},{name:`--shahmatka-cell-remarks-bg`,kind:`fill`}]},{title:`Акцент`,tokens:[{name:`--shahmatka-cell-awaiting-other-border`,kind:`fill`},{name:`--shahmatka-hover-border`,kind:`fill`}]}],l={title:`UI Kit/Shahmatka/Tokens`},u={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32},children:[(0,s.jsx)(i,{}),(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:c.map(e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,s.jsx)(`div`,{style:{fontFamily:`Inter, sans-serif`,fontSize:12,letterSpacing:`0.06em`,textTransform:`uppercase`,opacity:.5},children:e.title}),(0,s.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:20},children:e.tokens.map(e=>(0,s.jsx)(a,{...e},e.name))})]},e.title))})]})},d=[`Reference`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <ShahmatkaLegend />
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
        {groups.map(group => <div key={group.title} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
            <div style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 12,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          opacity: 0.5
        }}>
              {group.title}
            </div>
            <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 20
        }}>
              {group.tokens.map(token => <Swatch key={token.name} {...token} />)}
            </div>
          </div>)}
      </div>
    </div>
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Reference,d as __namedExportsOrder,l as default};