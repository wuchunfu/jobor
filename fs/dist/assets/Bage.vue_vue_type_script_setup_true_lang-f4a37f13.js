import{d as p,B as d,C as f,I as t,aV as g,V as u}from"./index-04cf60af.js";const b={style:{"line-height":"inherit","vertical-align":"baseline",position:"relative",display:"inline-block"}},y={style:{display:"inline-block","margin-left":"6px"}},N=p({__name:"Bage",props:{text:{default:""},color:{default:"#f90"},type:{default:"processing"}},setup(s){const e=s,a="#e6ebf1",c="#f90",l="#19be6b",i="#ed4014",r="#e6ebf1",n="#2d8cf0",o={processing:n,primary:n,success:l,error:i,info:r,warning:c,blue:"#1890ff",green:"#52c41a",red:"#f5222d",yellow:"#fadb14",pink:"#eb2f96",magenta:"#eb2f96",volcano:"#fa541c",orange:"#fa8c16",gold:"#faad14",lime:"#a0d911",cyan:"#13c2c2",geekblue:"#2f54eb",purple:"#722ed1",default:a};return(I,z)=>(d(),f("span",b,[t("span",{style:g({"background-color":o[e.type]?o[e.type]:e.color,position:"relative",width:"6px",height:"6px",display:"inline-block","border-radius":"50%","vertical-align":"middle",top:"-1px"})},null,4),t("span",y,u(e.text),1)]))}});export{N as _};