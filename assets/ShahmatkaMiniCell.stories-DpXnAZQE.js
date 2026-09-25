import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CvEwutAq.js";import{n,t as r}from"./ShahmatkaMiniCell-DcdQr115.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=t(),a={title:`UI Kit/Shahmatka/MiniCell`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{status:{control:`select`,options:[`pending`,`required`,`done`,`sample`]},corner:{control:`select`,options:[`top-left`,`top-right`,`bottom-left`,`bottom-right`]}},args:{label:`д`,status:`pending`,corner:`top-left`}},o={decorators:[e=>(0,i.jsx)(`div`,{style:{width:49,height:34},children:(0,i.jsx)(e,{})})]},s={render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,gap:8},children:[`pending`,`required`,`done`,`sample`].map(e=>(0,i.jsx)(`div`,{style:{width:49,height:34},children:(0,i.jsx)(r,{label:`д`,status:e,corner:`top-left`})},e))})},c=[`Playground`,`AllStatuses`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    width: 49,
    height: 34
  }}><Story /></div>]
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8
  }}>
      {(['pending', 'required', 'done', 'sample'] as const).map(status => <div key={status} style={{
      width: 49,
      height: 34
    }}>
          <ShahmatkaMiniCell label="д" status={status} corner="top-left" />
        </div>)}
    </div>
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as AllStatuses,o as Playground,c as __namedExportsOrder,a as default};