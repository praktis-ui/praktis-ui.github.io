import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{i as r,l as i,m as a,o,s}from"./tokens-Cf9IueZ-.js";import{n as c,t as l}from"./Button.module-B0EJstAv.js";function u({label:e,value:t,kind:n=`fill`}){return(0,h.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12},children:[(0,h.jsx)(f,{value:t,kind:n}),(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2,fontFamily:`Inter, sans-serif`},children:[(0,h.jsx)(`span`,{style:{fontSize:13},children:e}),(0,h.jsx)(`code`,{style:{fontSize:12,opacity:.6},children:t})]})]})}function d({label:e,varName:t,kind:n=`fill`}){let r=(0,m.useRef)(null),[i,a]=(0,m.useState)(``);return(0,m.useLayoutEffect)(()=>{r.current&&a(getComputedStyle(r.current).getPropertyValue(t).trim())}),(0,h.jsxs)(`div`,{ref:r,className:l.button,style:{display:`flex`,alignItems:`center`,gap:12,background:`none`,border:`none`,padding:0,height:`auto`},children:[(0,h.jsx)(f,{value:`var(${t})`,kind:n}),(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2,fontFamily:`Inter, sans-serif`},children:[(0,h.jsx)(`span`,{style:{fontSize:13},children:e}),(0,h.jsx)(`code`,{style:{fontSize:12,opacity:.6},children:i||`…`})]})]})}function f({value:e,kind:t}){return t===`fill`?(0,h.jsx)(`div`,{style:{width:36,height:36,borderRadius:6,flexShrink:0,border:`1px solid rgba(128,128,128,0.25)`,background:e}}):(0,h.jsx)(`div`,{style:{width:36,height:36,borderRadius:6,flexShrink:0,display:`flex`,alignItems:`center`,justifyContent:`center`,border:`1px solid rgba(128,128,128,0.25)`,fontFamily:`Inter, sans-serif`,fontSize:13,color:e},children:`Аа`})}function p({children:e}){return(0,h.jsx)(`div`,{style:{fontFamily:`Inter, sans-serif`,fontSize:12,letterSpacing:`0.06em`,textTransform:`uppercase`,opacity:.5},children:e})}var m,h,g,_,v,y,b;function x(){return(x=e((()=>{m=t(),a(),c(),h=n(),g=[{label:`border`,light:r.border,dark:s.border},{label:`textPrimary`,light:r.textPrimary,dark:s.textPrimary,kind:`text`},{label:`disabledBg`,light:r.disabledBg,dark:s.disabledBg},{label:`disabledText`,light:r.disabledText,dark:s.disabledText,kind:`text`},{label:`danger text (hover)`,light:o.textHover,dark:i.text,kind:`text`}],_=[{title:`Secondary`,rows:[{label:`bg`,var:`--btn-secondary-bg`},{label:`text`,var:`--btn-secondary-color`,kind:`text`},{label:`hover bg`,var:`--btn-secondary-hover-bg`},{label:`active bg`,var:`--btn-secondary-active-bg`}]},{title:`Secondary danger`,rows:[{label:`bg`,var:`--btn-secondary-danger-bg`},{label:`text`,var:`--btn-secondary-danger-color`,kind:`text`},{label:`hover bg`,var:`--btn-secondary-danger-hover-bg`},{label:`hover text`,var:`--btn-secondary-danger-hover-color`,kind:`text`},{label:`active bg`,var:`--btn-secondary-danger-active-bg`}]},{title:`Stroke`,rows:[{label:`hover`,var:`--btn-stroke-hover`,kind:`text`},{label:`active`,var:`--btn-stroke-active`,kind:`text`}]},{title:`Stroke danger`,rows:[{label:`border/text`,var:`--btn-stroke-danger-default-border`,kind:`text`},{label:`hover`,var:`--btn-stroke-danger-hover`,kind:`text`},{label:`active`,var:`--btn-stroke-danger-active`,kind:`text`}]},{title:`Link`,rows:[{label:`hover bg`,var:`--btn-link-hover-bg`},{label:`hover text`,var:`--btn-link-hover-color`,kind:`text`},{label:`active bg`,var:`--btn-link-active-bg`},{label:`active text`,var:`--btn-link-active-color`,kind:`text`}]},{title:`Link danger`,rows:[{label:`text`,var:`--btn-link-danger-color`,kind:`text`},{label:`hover bg`,var:`--btn-link-danger-hover-bg`},{label:`hover text`,var:`--btn-link-danger-hover-color`,kind:`text`},{label:`active bg`,var:`--btn-link-danger-active-bg`},{label:`active text`,var:`--btn-link-danger-active-color`,kind:`text`}]}],v={title:`Foundations/Colors`},y={render:()=>(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:28},children:[(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,h.jsx)(p,{children:`Акцент — не меняется между темами`}),(0,h.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:20},children:[(0,h.jsx)(u,{label:`colors.primary`,value:r.primary}),(0,h.jsx)(u,{label:`colors.primaryHover`,value:r.primaryHover}),(0,h.jsx)(u,{label:`colors.primaryActive`,value:r.primaryActive}),(0,h.jsx)(u,{label:`dangerColors.text`,value:o.text,kind:`text`}),(0,h.jsx)(u,{label:`dangerColors.textHover`,value:o.textHover,kind:`text`}),(0,h.jsx)(d,{label:`--btn-focus-ring`,varName:`--btn-focus-ring`})]})]}),(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,h.jsx)(p,{children:`Нейтральные — полная пара light/dark уже в tokens.ts`}),(0,h.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:32},children:g.map(e=>(0,h.jsxs)(`div`,{style:{display:`flex`,gap:20},children:[(0,h.jsx)(u,{label:`${e.label} (light)`,value:e.light,kind:e.kind}),(0,h.jsx)(u,{label:`${e.label} (dark)`,value:e.dark,kind:e.kind})]},e.label))})]}),_.map(e=>(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,h.jsxs)(p,{children:[e.title,` — live из --btn-*, реагирует на тумблер темы`]}),(0,h.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:20},children:e.rows.map(e=>(0,h.jsx)(d,{label:e.label,varName:e.var,kind:e.kind},e.var))})]},e.title))]})},b=[`Palette`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 28
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
        <SectionHeading>Акцент — не меняется между темами</SectionHeading>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 20
      }}>
          <StaticSwatch label="colors.primary" value={colors.primary} />
          <StaticSwatch label="colors.primaryHover" value={colors.primaryHover} />
          <StaticSwatch label="colors.primaryActive" value={colors.primaryActive} />
          <StaticSwatch label="dangerColors.text" value={dangerColors.text} kind="text" />
          <StaticSwatch label="dangerColors.textHover" value={dangerColors.textHover} kind="text" />
          <LiveSwatch label="--btn-focus-ring" varName="--btn-focus-ring" />
        </div>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
        <SectionHeading>Нейтральные — полная пара light/dark уже в tokens.ts</SectionHeading>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 32
      }}>
          {neutralPairs.map(p => <div key={p.label} style={{
          display: 'flex',
          gap: 20
        }}>
              <StaticSwatch label={\`\${p.label} (light)\`} value={p.light} kind={p.kind} />
              <StaticSwatch label={\`\${p.label} (dark)\`} value={p.dark} kind={p.kind} />
            </div>)}
        </div>
      </div>

      {cssVarSections.map(section => <div key={section.title} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
          <SectionHeading>{section.title} — live из --btn-*, реагирует на тумблер темы</SectionHeading>
          <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 20
      }}>
            {section.rows.map(row => <LiveSwatch key={row.var} label={row.label} varName={row.var} kind={row.kind} />)}
          </div>
        </div>)}
    </div>
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as Palette,b as __namedExportsOrder,v as default};