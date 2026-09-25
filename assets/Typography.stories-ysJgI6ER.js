import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,f as n,l as r,n as i,p as a,s as o}from"./iframe-CvEwutAq.js";function s(e,t){return{fontSize:e.fontSize,fontWeight:e.fontWeight,lineHeight:e.lineHeight,fontStyle:e.fontStyle,textDecoration:e.textDecoration,...t?{fontFeatureSettings:n}:null}}function c({children:e}){return(0,l.jsx)(`div`,{style:{fontSize:12,letterSpacing:`0.06em`,textTransform:`uppercase`,opacity:.5},children:e})}var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),l=i(),u=[{label:`Regular`,weight:400},{label:`Medium`,weight:500},{label:`SemiBold`,weight:600},{label:`Bold`,weight:700}],d={title:`Foundations/Typography`},f={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,fontFamily:o,color:`#41484a`},children:[(0,l.jsx)(c,{children:`Шрифт`}),(0,l.jsxs)(`p`,{style:{margin:0,fontSize:13.5,opacity:.7,maxWidth:560},children:[o,` — единственный шрифт кита. Загружается через Google Fonts (4 начертания, см. `,(0,l.jsx)(`code`,{children:`.storybook/preview-head.html`}),`).`]}),(0,l.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10},children:u.map(({label:e,weight:t})=>(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:16},children:[(0,l.jsxs)(`code`,{style:{fontSize:12,opacity:.5,width:90},children:[t,` · `,e]}),(0,l.jsx)(`span`,{style:{fontSize:22,fontWeight:t},children:`Договор №123-45`})]},t))})]})},p=[{label:`TableBase`,note:`Используется в числовых ячейках в таблицах, для упрощения сравнения данных (табличные цифры).`,variants:[{name:`Normal`,style:a.tableBase.normal},{name:`Medium`,style:a.tableBase.medium},{name:`Strong`,style:a.tableBase.strong}]},{label:`Base`,variants:[{name:`Normal`,style:a.base.normal},{name:`Medium`,style:a.base.medium},{name:`Strong`,style:a.base.strong},{name:`Underline`,style:a.base.underline},{name:`Delete`,style:a.base.delete},{name:`Italic`,style:a.base.italic}]},{label:`Small`,variants:[{name:`Normal`,style:a.small.normal},{name:`Medium`,style:a.small.medium},{name:`Strong`,style:a.small.strong},{name:`Underline`,style:a.small.underline},{name:`Delete`,style:a.small.delete},{name:`Italic`,style:a.small.italic}]},{label:`Large`,variants:[{name:`Normal`,style:a.large.normal},{name:`Medium`,style:a.large.medium},{name:`Strong`,style:a.large.strong},{name:`Underline`,style:a.large.underline},{name:`Delete`,style:a.large.delete},{name:`Italic`,style:a.large.italic}]},{label:`XL`,variants:[{name:`Normal`,style:a.xl.normal},{name:`Medium`,style:a.xl.medium},{name:`Strong`,style:a.xl.strong},{name:`Underline`,style:a.xl.underline},{name:`Delete`,style:a.xl.delete},{name:`Italic`,style:a.xl.italic}]}],m=[{label:`Mega`,style:t.mega},{label:`Heading 1`,style:t.h1},{label:`Heading 2`,style:t.h2},{label:`Heading 3`,style:t.h3},{label:`Heading 4`,style:t.h4},{label:`Heading 5`,style:t.h5}],h={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32,fontFamily:o,color:`#282828`},children:[(0,l.jsx)(`p`,{style:{margin:0,fontSize:13.5,opacity:.6,maxWidth:620},children:`Роли использования (что для чего) пока не расставлены — это только сама шкала: имя, размер, начертание, line-height. 1:1 из Figma.`}),(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24},children:[(0,l.jsx)(c,{children:`Text`}),p.map(e=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:40,paddingBottom:20,borderBottom:`1px solid rgba(128,128,128,0.15)`},children:[(0,l.jsxs)(`div`,{style:{width:220,flexShrink:0,display:`flex`,flexDirection:`column`,gap:4},children:[(0,l.jsx)(`span`,{style:{fontSize:22,fontWeight:500},children:e.label}),(0,l.jsxs)(`code`,{style:{fontSize:12,opacity:.55},children:[e.variants[0].style.fontSize,`px / line-height 120%`]}),e.note&&(0,l.jsx)(`span`,{style:{fontSize:12,opacity:.55,maxWidth:300},children:e.note})]}),(0,l.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:e.variants.map(t=>(0,l.jsxs)(`span`,{style:s(t.style,e.label===`TableBase`),children:[e.label,` `,t.name]},t.name))})]},e.label))]}),(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4},children:[(0,l.jsx)(c,{children:`Heading`}),m.map(e=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:40,alignItems:`baseline`,padding:`16px 0`,borderBottom:`1px solid rgba(128,128,128,0.15)`},children:[(0,l.jsxs)(`div`,{style:{width:220,flexShrink:0,display:`flex`,flexDirection:`column`,gap:4},children:[(0,l.jsx)(`code`,{style:{fontSize:12,opacity:.55},children:e.label}),(0,l.jsxs)(`code`,{style:{fontSize:12,opacity:.55},children:[e.style.fontSize,`px / line-height 120%`]})]}),(0,l.jsx)(`span`,{style:s(e.style),children:e.label})]},e.label))]})]})},g=[`Typeface`,`Styles`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    fontFamily,
    color: '#41484a'
  }}>
      <SectionHeading>Шрифт</SectionHeading>
      <p style={{
      margin: 0,
      fontSize: 13.5,
      opacity: 0.7,
      maxWidth: 560
    }}>
        {fontFamily} — единственный шрифт кита. Загружается через Google Fonts (4 начертания,
        см. <code>.storybook/preview-head.html</code>).
      </p>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }}>
        {weights.map(({
        label,
        weight
      }) => <div key={weight} style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: 16
      }}>
            <code style={{
          fontSize: 12,
          opacity: 0.5,
          width: 90
        }}>{weight} · {label}</code>
            <span style={{
          fontSize: 22,
          fontWeight: weight
        }}>Договор №123-45</span>
          </div>)}
      </div>
    </div>
}`,...f.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    fontFamily,
    color: '#282828'
  }}>
      <p style={{
      margin: 0,
      fontSize: 13.5,
      opacity: 0.6,
      maxWidth: 620
    }}>
        Роли использования (что для чего) пока не расставлены — это только сама шкала: имя,
        размер, начертание, line-height. 1:1 из Figma.
      </p>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
        <SectionHeading>Text</SectionHeading>
        {textGroups.map(group => <div key={group.label} style={{
        display: 'flex',
        gap: 40,
        paddingBottom: 20,
        borderBottom: '1px solid rgba(128,128,128,0.15)'
      }}>
            <div style={{
          width: 220,
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}>
              <span style={{
            fontSize: 22,
            fontWeight: 500
          }}>{group.label}</span>
              <code style={{
            fontSize: 12,
            opacity: 0.55
          }}>{group.variants[0].style.fontSize}px / line-height 120%</code>
              {group.note && <span style={{
            fontSize: 12,
            opacity: 0.55,
            maxWidth: 300
          }}>{group.note}</span>}
            </div>
            <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
              {group.variants.map(v => <span key={v.name} style={sampleStyle(v.style, group.label === 'TableBase')}>
                  {group.label} {v.name}
                </span>)}
            </div>
          </div>)}
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>
        <SectionHeading>Heading</SectionHeading>
        {headingGroups.map(h => <div key={h.label} style={{
        display: 'flex',
        gap: 40,
        alignItems: 'baseline',
        padding: '16px 0',
        borderBottom: '1px solid rgba(128,128,128,0.15)'
      }}>
            <div style={{
          width: 220,
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}>
              <code style={{
            fontSize: 12,
            opacity: 0.55
          }}>{h.label}</code>
              <code style={{
            fontSize: 12,
            opacity: 0.55
          }}>{h.style.fontSize}px / line-height 120%</code>
            </div>
            <span style={sampleStyle(h.style)}>{h.label}</span>
          </div>)}
      </div>
    </div>
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as Styles,f as Typeface,g as __namedExportsOrder,d as default};