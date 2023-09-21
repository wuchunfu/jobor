import{d as B,U as T,m as R,i as q,B as L,C as S,I,W as E,T as l,E as i,H as e,a2 as $,X as U,G as N,Y as O,F as z,a8 as F,aa as D,h as v,ak as K}from"./index-04cf60af.js";import{u as C}from"./useRequest-4a6f3b67.js";import{s as b}from"./sysApi-dd37c5a5.js";import{N as V,a as s}from"./FormItem-960404fe.js";import{N as f}from"./Input-d7ad98e8.js";import{N as M}from"./Switch-bf288972.js";import{u as G,_ as H}from"./useTableData-de23e2bc.js";import{_ as W,a as j}from"./EditButton.vue_vue_type_script_setup_true_lang-3dcaf37c.js";import{_ as X}from"./TooltipText.vue_vue_type_script_setup_true_lang-dced7f62.js";import"./Icon-b6ee2b01.js";import"./get-a19d687e.js";import"./Dropdown-ff39b5a5.js";import"./FocusDetector-40d296f1.js";import"./Forward-9eb42cee.js";const Y={flex:"","justify-end":""},P=B({__name:"ApiModal",props:{record:null},emits:["refresh"],setup(x,{emit:g}){const y=x,{record:a}=T(y),d=R(!1),h=R(null),{run:_,loading:w}=C(b.createApi),{run:k,loading:c}=C(b.editApi),o=R({name:"",title:"",dom:"",group:"",method:"",path:"",enabled:!1,enabled_audit:!1}),A={title:{required:!0,message:"请输入标题",trigger:"blur"},name:{required:!0,message:"请输入名称",trigger:"blur"}};function u(){d.value=!0,a!=null&&a.value&&(o.value={name:a.value.name,title:a.value.title,dom:a.value.dom,group:a.value.group,method:a.value.method,path:a.value.path,enabled:a.value.enabled,enabled_audit:a.value.enabled_audit})}const r=q(()=>!!(a!=null&&a.value));function m(){var p;(p=h.value)==null||p.validate(async t=>{if(t)return;const{result:n}=a!=null&&a.value?await k(a==null?void 0:a.value.id,o.value):await _(o.value);n&&(d.value=!1,g("refresh"))})}return(p,t)=>(L(),S(z,null,[I("span",{onClick:u},[E(p.$slots,"default")]),l(e(O),{show:d.value,"onUpdate:show":t[11]||(t[11]=n=>d.value=n),title:"API接口",preset:"card","auto-focus":!1,"w-200":""},{default:i(()=>[l(e(V),{ref_key:"formRef",ref:h,model:o.value,rules:A},{default:i(()=>[l(e(s),{path:"title",label:"中文名"},{default:i(()=>[l(e(f),{value:o.value.title,"onUpdate:value":t[0]||(t[0]=n=>o.value.title=n),placeholder:"输入中文名",onKeydown:t[1]||(t[1]=$(F(()=>{},["prevent"]),["enter"]))},null,8,["value"])]),_:1}),l(e(s),{path:"name",label:"API名"},{default:i(()=>[l(e(f),{value:o.value.name,"onUpdate:value":t[2]||(t[2]=n=>o.value.name=n),disabled:e(r),placeholder:"输入角色名",onKeydown:t[3]||(t[3]=$(F(()=>{},["prevent"]),["enter"]))},null,8,["value","disabled"])]),_:1}),l(e(s),{path:"dom",label:"域"},{default:i(()=>[l(e(f),{value:o.value.dom,"onUpdate:value":t[4]||(t[4]=n=>o.value.dom=n),placeholder:"所属域"},null,8,["value"])]),_:1}),l(e(s),{path:"group",label:"组"},{default:i(()=>[l(e(f),{value:o.value.group,"onUpdate:value":t[5]||(t[5]=n=>o.value.group=n),placeholder:"所属组"},null,8,["value"])]),_:1}),l(e(s),{path:"method",label:"方法"},{default:i(()=>[l(e(f),{value:o.value.method,"onUpdate:value":t[6]||(t[6]=n=>o.value.method=n),placeholder:"方法"},null,8,["value"])]),_:1}),l(e(s),{path:"path",label:"路径"},{default:i(()=>[l(e(f),{value:o.value.path,"onUpdate:value":t[7]||(t[7]=n=>o.value.path=n),placeholder:"方法"},null,8,["value"])]),_:1}),l(e(s),{path:"enabled",label:"启用接口"},{default:i(()=>[l(e(M),{value:o.value.enabled,"onUpdate:value":t[8]||(t[8]=n=>o.value.enabled=n),placeholder:"启用接口"},null,8,["value"])]),_:1}),l(e(s),{path:"enabled_audit",label:"启用审计"},{default:i(()=>[l(e(M),{value:o.value.enabled_audit,"onUpdate:value":t[9]||(t[9]=n=>o.value.enabled_audit=n),placeholder:"启用审计"},null,8,["value"])]),_:1}),I("div",Y,[l(e(U),{type:"primary",loading:e(w)||e(c),onClick:t[10]||(t[10]=n=>m())},{default:i(()=>[N(" 确定 ")]),_:1},8,["loading"])])]),_:1},8,["model"])]),_:1},8,["show"])],64))}}),pe=B({__name:"ApiPage",setup(x){const{dataSource:g,loading:y,refresh:a,tableFilter:d,total:h,pagination:_}=G(b.getApiList),{loading:w,run:k}=C(b.syncApi);async function c(){const{result:u}=await k();u&&a()}async function o(u){const{result:r}=await b.delApi(u);r&&a()}const A=[{title:"序号",key:"id",width:"65"},{title:"标题",key:"title",resizable:!0,render(u){return v(X,{label:u.description},{default:()=>u.title})}},{title:"名称",key:"name",resizable:!0,ellipsis:{tooltip:!0}},{title:"分组",key:"group",width:"120"},{title:"请求方法",key:"method",width:"80",render:u=>{var p;const r=(p=u.method)==null?void 0:p.toUpperCase(),m=K[r];return v("div",{style:{color:m,fontWeight:"bolder"}},{default:()=>u.method})}},{title:"路径",key:"path",width:"16%",resizable:!0,ellipsis:{tooltip:!0}},{title:"更新时间",key:"updated_at",width:"185"},{title:"操作",key:"action",width:"170",fixed:"right",render(u){return[v(P,{record:u,onRefresh:a},{default:()=>v(W)}),v(j,{confirmText:"是否删除该API",delFunction:()=>o(u.id)})]}}];return(u,r)=>(L(),S("div",null,[l(H,{"table-filter":e(d),"onUpdate:tableFilter":r[1]||(r[1]=m=>D(d)?d.value=m:null),data:e(g),loading:e(y),columns:A,total:e(h),pagination:e(_),"search-key":"name","search-place-holder":"请输入API名",onRefresh:e(a)},{header:i(()=>[l(P,{onRefresh:e(a)},{default:i(()=>[l(e(U),{type:"primary"},{default:i(()=>[N(" 新增API ")]),_:1})]),_:1},8,["onRefresh"]),l(e(U),{quaternary:"",type:"primary",loading:e(w),style:{"margin-left":"5px"},onClick:r[0]||(r[0]=m=>c())},{default:i(()=>[N(" 同步 ")]),_:1},8,["loading"])]),_:1},8,["table-filter","data","loading","total","pagination","onRefresh"])]))}});export{pe as default};
