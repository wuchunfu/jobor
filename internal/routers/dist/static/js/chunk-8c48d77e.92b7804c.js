(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8c48d77e"],{"26e4":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"100%"}},[a("el-pagination",{staticStyle:{margin:"5px 0"},attrs:{small:t.small,"page-size":t.pageSize,"current-page":t.currentPage,"pager-count":t.pagerCount,"page-sizes":t.pageSizes,layout:t.layout,total:t.total},on:{"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"size-change":t.handleSizeChange,"current-change":t.handleIndexChange}})],1)},l=[],n={name:"Pagination",props:{small:{default:function(){return!1}},pageSizes:{require:!0,default:function(){return[5,10,25,50,100,200]}},limit:{default:10},page:{default:function(){return 1}},pagerCount:{default:7},total:{default:0},layout:{type:String,default:"prev, pager, next, jumper,sizes,total"},background:{type:Boolean,default:!0}},data:function(){return{}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},created:function(){},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t})},handleIndexChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize})}}},o=n,r=a("2877"),s=Object(r["a"])(o,i,l,!1,null,"91b9180e",null);e["a"]=s.exports},"73f5":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{margin:"10px"}},[a("div",{staticStyle:{margin:"5px 0"}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.SearchForm,size:"small"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",{attrs:{label:""}},[a("el-input",{attrs:{placeholder:"名称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getData(e)}},model:{value:t.SearchForm.name,callback:function(e){t.$set(t.SearchForm,"name",e)},expression:"SearchForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:""}},[a("portal_type_select",{ref:"portalTypeSelect",attrs:{selectList:t.select_types,single_selection:!1},on:{"update:selectList":function(e){t.select_types=e},"update:select-list":function(e){t.select_types=e}}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.getData}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.NewRow}},[t._v("新增")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},on:{click:function(e){return t.getData()}}},[t._v("刷新")])],1)],1)],1),t._v(" "),a("div",{staticStyle:{"margin-top":"10px"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{border:"",data:t.tableData,size:"mini"}},[a("el-table-column",{attrs:{type:"selection",width:"45",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"名称",prop:"name"}}),t._v(" "),a("el-table-column",{attrs:{label:"描述",prop:"description","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{label:"URL",prop:"url"}}),t._v(" "),a("el-table-column",{attrs:{label:"图标",prop:"icon"}}),t._v(" "),a("el-table-column",{attrs:{label:"类型",prop:"type"}}),t._v(" "),a("el-table-column",{attrs:{label:"更新者",prop:"by_update",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"更新时间",prop:"mtime",width:"140"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticStyle:{color:"#e6a23c"},attrs:{type:"text",size:"mini"},on:{click:function(a){return t.showEdit(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{staticStyle:{color:"#f56c6c"},attrs:{type:"text",size:"mini"},on:{click:function(a){return t.ConfirmDelRows(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticStyle:{"margin-top":"5px"}},[a("div",{staticStyle:{display:"inline"}}),t._v(" "),a("div",{staticClass:"block",staticStyle:{float:"right",display:"inline"}},[a("pagination",{attrs:{total:t.total,page:t.page,limit:t.limit},on:{"update:page":function(e){t.page=e},"update:limit":function(e){t.limit=e},pagination:function(e){return t.getData()}}})],1)])],1),t._v(" "),a("el-dialog",{attrs:{title:t.title,visible:t.NewOrUpdate},on:{"update:visible":function(e){t.NewOrUpdate=e}}},[a("el-form",{ref:"RowData",attrs:{"label-width":"80px",model:t.RowData,size:"small"}},[a("el-form-item",{attrs:{label:"名称",prop:"name",rules:[{required:!0,message:"请输入名称",trigger:"blur"}]}},[a("el-input",{model:{value:t.RowData.name,callback:function(e){t.$set(t.RowData,"name",e)},expression:"RowData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.RowData.description,callback:function(e){t.$set(t.RowData,"description",e)},expression:"RowData.description"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"URL",prop:"url",rules:[{required:!0,message:"请输入URL",trigger:"blur"},{pattern:/(https?|ftp|http):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/,message:"请输入正确URL格式：https://www.example.com",trigger:"blur"}]}},[a("el-input",{model:{value:t.RowData.url,callback:function(e){t.$set(t.RowData,"url",e)},expression:"RowData.url"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"图标",prop:"icon"}},[a("el-input",{model:{value:t.RowData.icon,callback:function(e){t.$set(t.RowData,"icon",e)},expression:"RowData.icon"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("portal_type_select",{ref:"portalType",attrs:{selectId:t.RowData.type,allowCreate:!0},on:{"update:selectId":function(e){return t.$set(t.RowData,"type",e)},"update:select-id":function(e){return t.$set(t.RowData,"type",e)}}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.NewOrUpdate=!1}}},[t._v("取 消")]),t._v(" "),t.RowData.id?a("el-button",{attrs:{plain:!0,type:"warning",loading:t.action_loading},on:{click:function(e){return t.CreateOrUpdate("PUT",!1)}}},[t._v("更新")]):t._e(),t._v(" "),t.RowData.id?t._e():a("el-button",{attrs:{plain:!0,type:"warning",loading:t.action_loading},on:{click:function(e){return t.CreateOrUpdate("POST",!0)}}},[t._v("保存并继续")]),t._v(" "),t.RowData.id?t._e():a("el-button",{attrs:{plain:!0,type:"primary",loading:t.action_loading},on:{click:function(e){return t.CreateOrUpdate("POST",!1)}}},[t._v("保 存")])],1)],1)],1)},l=[],n=(a("7f7f"),a("26e4")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t.single_selection?a("el-select",{attrs:{filterable:"",placeholder:"类型，单选",clearable:t.clearable,"allow-create":t.allowCreate,"collapse-tags":t.collapse_tags},model:{value:t.select_id,callback:function(e){t.select_id=e},expression:"select_id"}},t._l(t.data_list,(function(t,e){return a("el-option",{key:e,attrs:{label:t.type,value:t.type}})})),1):a("el-select",{attrs:{filterable:"",placeholder:"类型，多选",multiple:"",clearable:t.clearable,"allow-create":t.allowCreate,"collapse-tags":t.collapse_tags},model:{value:t.select_list,callback:function(e){t.select_list=e},expression:"select_list"}},t._l(t.data_list,(function(t,e){return a("el-option",{key:e,attrs:{label:t.type,value:t.type}})})),1)],1)},r=[],s={name:"portal_type_select",props:{single_selection:{default:!0},clearable:{default:!0},allowCreate:{default:!1},collapse_tags:{default:!0},selectId:{type:String,required:!1},selectList:{type:Array,required:!1},selectValue:{required:!1}},data:function(){return{url:this.$store.state.urls.portal_url,data_list:[],select_id:this.selectId,select_list:this.selectList,total:0,page:1,limit:10}},watch:{select_id:function(t){this.$emit("update:selectId",t)},selectId:function(t){this.select_id=t},select_list:function(t){this.$emit("update:selectList",t)},selectList:function(t){this.select_list=t}},methods:{getData:function(){var t=this,e={};this.loading=!0,this.$store.dispatch("common/Query",{url:this.url+"-type",data:e}).then((function(e){t.data_list=e.data.data.list})).catch((function(t){}))},handleChange:function(t){this.$emit("update:selectValue",t)}},mounted:function(){this.getData()}},c=s,u=a("2877"),p=Object(u["a"])(c,o,r,!1,null,"c4ba5408",null),d=p.exports,m={name:"portal",data:function(){return{SearchForm:{},RowData:{name:"",description:"",id:"",url:"",icon:"",type:""},NewOrUpdate:!1,action_loading:!1,again_loading:!1,title:"新增",select_types:[],type_list:[],tableData:[],total:0,page:1,limit:10,loading:!1,url:this.$store.state.urls.portal_url}},methods:{getData:function(){var t=this,e={pageSize:this.limit,pageNumber:this.page,name:this.SearchForm.name,types:this.select_types};this.loading=!0,this.$store.dispatch("common/Query",{url:this.url,data:e}).then((function(e){t.tableData=e.data.data.list,t.total=e.data.data.total,t.loading=!1})).catch((function(e){t.loading=!1}))},CreateOrUpdate:function(t,e){var a=this;this.$refs.RowData.validate((function(i){if(i){var l=JSON.parse(JSON.stringify(a.RowData)),n=a.url;"PUT"===t&&(n=n+"/"+l.id),"POST"===t&&delete l.id,a.action_loading=!0,a.$store.dispatch("common/CreateUpdate",{url:n,method:t,data:l}).then((function(t){a.$message.success(t.data.message),!1===e&&(a.NewOrUpdate=!1),a.getData(),a.$refs.portalTypeSelect.getData(),a.action_loading=!1})).catch((function(t){a.action_loading=!1}))}else a.$message.warning("请输入完整数据")}))},showEdit:function(t){this.NewOrUpdate=!0,this.title="编辑",this.RowData.id=t.id,this.RowData.name=t.name,this.RowData.description=t.description,this.RowData.url=t.url,this.RowData.icon=t.icon,this.RowData.type=t.type},NewRow:function(){this.NewOrUpdate=!0,this.title="添加",this.RowData.id="",this.RowData.name="",this.RowData.description="",this.RowData.url="",this.RowData.icon="",this.RowData.type=""},ConfirmDelRows:function(t){var e=this;this.$confirm("确认删除角色："+t.name,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.action_loading=!0,e.$store.dispatch("common/Delete",{url:e.url,data:{rows:[t.id]}}).then((function(t){e.$message.success(t.data.message),e.getData(),e.$refs.portalTypeSelect.getData(),e.action_loading=!1})).catch((function(t){e.action_loading=!1}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}},mounted:function(){this.getData()},components:{pagination:n["a"],portal_type_select:d}},g=m,f=Object(u["a"])(g,i,l,!1,null,"70606a0f",null);e["default"]=f.exports}}]);