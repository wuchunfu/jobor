import{aj as r,d as u,i as p,B as c,D as d,a9 as m,H as s}from"./index-04cf60af.js";import{u as y}from"./useRequest-4a6f3b67.js";import{h as R}from"./Dropdown-ff39b5a5.js";const f={getRoleListAll(){return r("GET /sys/roles",{params:{}})},getRoleById(e){return r(["GET /sys/role/:id",e],{})},getRoleList(e){return r("GET /sys/role",{params:e})},getRoleTreeList(e){return r("GET /sys/role-tree",{params:e})},createRole(e){return r("POST /sys/role",{data:e})},editRole(e,o){return r(["PUT /sys/role/:id",e],{data:o})},delRole(e){return r(["DELETE /sys/role/:id",e])}},_=u({__name:"RoleSelect",props:{keyName:{default:"id"}},setup(e){const o=e,{data:l,loading:n}=y(f.getRoleListAll,{auto:!0}),i=p(()=>l.value?l.value.list.map(t=>({label:`${t.title} | ${t.name}`,value:t[o.keyName]})):[]);return(a,t)=>(c(),d(s(R),m({loading:s(n),options:s(i),filterable:"",placeholder:"请选择部门"},a.$attrs),null,16,["loading","options"]))}});export{_,f as r};
