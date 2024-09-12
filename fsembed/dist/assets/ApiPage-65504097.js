import{d as B,T,m as R,i as q,B as L,C as S,G as $,V as E,S as l,E as i,J as e,a4 as F,W as U,X as N,Y as O,F as V,a8 as I,aa as z,h as v,ak as D}from "./index-bbb52c5f.js";import{u as C}from "./useRequest-1c3afba9.js";import{s as b}from "./sysApi-cbbdeda6.js";import{N as K,a as s}from "./FormItem-9f1c1532.js";import{b as m}from "./Icon-01f3be5d.js";import{N as M}from "./Switch-eb6978c1.js";import{u as G,_ as W}from "./useTableData-66353f3c.js";import{_ as j,a as H}from "./EditButton.vue_vue_type_script_setup_true_lang-6838874c.js";import{_ as J}from "./TooltipText.vue_vue_type_script_setup_true_lang-7f7f941d.js";import"./get-e68d4109.js";import"./Dropdown-cc67fbc4.js";import"./FocusDetector-fac0e688.js";import"./Forward-2b3a5ea4.js";const X={flex:"","justify-end":""},P=B({__name:"ApiModal",props:{record:null},emits:["refresh"],setup(x, {emit:g}){const y=x,{record:a}=T(y),d=R(!1),h=R(null),{run:_,loading:w}=C(b.createApi),{run:k,loading:c}=C(b.editApi),o=R({name:"",title:"",dom:"",group:"",method:"",path:"",enabled:!1,enabled_audit:!1}),A={title:{required:!0,message:"请输入标题",trigger:"blur"},name:{required:!0,message:"请输入名称",trigger:"blur"}};function u(){d.value=!0,a!=null&&a.value&&(o.value={name:a.value.name,title:a.value.title,dom:a.value.dom,group:a.value.group,method:a.value.method,path:a.value.path,enabled:a.value.enabled,enabled_audit:a.value.enabled_audit})}const r=q(()=>!!(a!=null&&a.value));function f(){var p;(p=h.value)==null||p.validate(async t=>{if(t)return;const{result:n}=a!=null&&a.value?await k(a==null?void 0:a.value.id,o.value):await _(o.value);n&&(d.value=!1,g("refresh"))})}return(p, t)=>(L(),S(V,null,[$("span",{onClick:u},[E(p.$slots,"default")]),l(e(O),{show:d.value,"onUpdate:show":t[11]||(t[11]= n=>d.value=n),title:"API接口",preset:"card","auto-focus":!1,"w-200":""},{default:i(()=>[l(e(K),{ref_key:"formRef",ref:h,model:o.value,rules:A},{default:i(()=>[l(e(s),{path:"title",label:"中文名"},{default:i(()=>[l(e(m),{value:o.value.title,"onUpdate:value":t[0]||(t[0]= n=>o.value.title=n),placeholder:"输入中文名",onKeydown:t[1]||(t[1]=F(I(()=>{},["prevent"]),["enter"]))},null,8,["value"])]),_:1}),l(e(s),{path:"name",label:"API名"},{default:i(()=>[l(e(m),{value:o.value.name,"onUpdate:value":t[2]||(t[2]= n=>o.value.name=n),disabled:e(r),placeholder:"输入角色名",onKeydown:t[3]||(t[3]=F(I(()=>{},["prevent"]),["enter"]))},null,8,["value","disabled"])]),_:1}),l(e(s),{path:"dom",label:"域"},{default:i(()=>[l(e(m),{value:o.value.dom,"onUpdate:value":t[4]||(t[4]= n=>o.value.dom=n),placeholder:"所属域"},null,8,["value"])]),_:1}),l(e(s),{path:"group",label:"组"},{default:i(()=>[l(e(m),{value:o.value.group,"onUpdate:value":t[5]||(t[5]= n=>o.value.group=n),placeholder:"所属组"},null,8,["value"])]),_:1}),l(e(s),{path:"method",label:"方法"},{default:i(()=>[l(e(m),{value:o.value.method,"onUpdate:value":t[6]||(t[6]= n=>o.value.method=n),placeholder:"方法"},null,8,["value"])]),_:1}),l(e(s),{path:"path",label:"路径"},{default:i(()=>[l(e(m),{value:o.value.path,"onUpdate:value":t[7]||(t[7]= n=>o.value.path=n),placeholder:"方法"},null,8,["value"])]),_:1}),l(e(s),{path:"enabled",label:"启用接口"},{default:i(()=>[l(e(M),{value:o.value.enabled,"onUpdate:value":t[8]||(t[8]= n=>o.value.enabled=n),placeholder:"启用接口"},null,8,["value"])]),_:1}),l(e(s),{path:"enabled_audit",label:"启用审计"},{default:i(()=>[l(e(M),{value:o.value.enabled_audit,"onUpdate:value":t[9]||(t[9]= n=>o.value.enabled_audit=n),placeholder:"启用审计"},null,8,["value"])]),_:1}),$("div",X,[l(e(U),{type:"primary",loading:e(w)||e(c),onClick:t[10]||(t[10]= n=>f())},{default:i(()=>[N(" 确定 ")]),_:1},8,["loading"])])]),_:1},8,["model"])]),_:1},8,["show"])],64))}}),se=B({__name:"ApiPage",setup(x){const{dataSource:g,loading:y,refresh:a,tableFilter:d,total:h,pagination:_}=G(b.getApiList),{loading:w,run:k}=C(b.syncApi);async function c(){const{result:u}=await k();u&&a()}async function o(u){const{result:r}=await b.delApi(u);r&&a()}const A=[{title:"序号",key:"id",width:"65"},{title:"标题",key:"title",resizable:!0,render(u){return v(J,{label:u.description},{default:()=>u.title})}},{title:"名称",key:"name",resizable:!0,ellipsis:{tooltip:!0}},{title:"分组",key:"group",width:"120"},{title:"请求方法",key:"method",width:"80",render: u=>{var p;const r=(p=u.method)==null?void 0:p.toUpperCase(),f=D[r];return v("div",{style:{color:f,fontWeight:"bolder"}},{default:()=>u.method})}},{title:"路径",key:"path",width:"16%",resizable:!0,ellipsis:{tooltip:!0}},{title:"更新时间",key:"updated_at",width:"185"},{title:"操作",key:"action",width:"170",fixed:"right",render(u){return[v(P,{record:u,onRefresh:a},{default:()=>v(j)}),v(H,{confirmText:"是否删除该API",delFunction:()=>o(u.id)})]}}];return(u, r)=>(L(),S("div",null,[l(W,{"table-filter":e(d),"onUpdate:tableFilter":r[1]||(r[1]= f=>z(d)?d.value=f:null),data:e(g),loading:e(y),columns:A,total:e(h),pagination:e(_),"search-key":"name","search-place-holder":"请输入API名",onRefresh:e(a)},{header:i(()=>[l(P,{onRefresh:e(a)},{default:i(()=>[l(e(U),{type:"primary"},{default:i(()=>[N(" 新增API ")]),_:1})]),_:1},8,["onRefresh"]),l(e(U),{quaternary:"",type:"primary",loading:e(w),style:{"margin-left":"5px"},onClick:r[0]||(r[0]= f=>c())},{default:i(()=>[N(" 同步 ")]),_:1},8,["loading"])]),_:1},8,["table-filter","data","loading","total","pagination","onRefresh"])]))}});export{se as default};