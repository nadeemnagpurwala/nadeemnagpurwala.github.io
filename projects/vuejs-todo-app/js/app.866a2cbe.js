(function(t){function e(e){for(var a,r,o=e[0],d=e[1],u=e[2],l=0,p=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var d=n[o];0!==i[d]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=d;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},"08c4":function(t,e,n){"use strict";var a=n("6000"),i=n.n(a);i.a},"149a":function(t,e,n){"use strict";var a=n("d94e"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("AddTask",{attrs:{title:t.titleAdd},on:{"add:task":t.addTask}}),n("br"),n("Tasks",{attrs:{title:t.titleList,tasks:t.tasks},on:{"delete:task":t.deleteTask,"update:task":t.updateTask}})],1)},s=[],r=(n("99af"),n("4de4"),n("d81d"),n("2909")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.title))]),n("table",[t._m(0),t._l(t.tasks,(function(e){return n("tr",{key:e.id,class:{"is-completed":e.completed}},[n("td",[n("input",{attrs:{type:"checkbox"},domProps:{checked:e.completed},on:{click:function(n){return t.updateTaskStatus(e)}}})]),n("td",[t._v(t._s(e.id))]),t.editMode===e.id?n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"task.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name of the task"},domProps:{value:e.name},on:{input:function(n){n.target.composing||t.$set(e,"name",n.target.value)}}})]):n("td",[t._v(t._s(e.name))]),e.completed?n("td",[t._v("Yes")]):n("td",[t._v("No")]),t.editMode===e.id?n("td",[n("button",{staticClass:"btn btn-success",on:{click:function(n){return t.updateTask(e)}}},[t._v("Save")]),n("button",{staticClass:"btn btn-default",on:{click:function(n){return t.cancelEdit(e)}}},[t._v("Cancel")])]):n("td",[n("button",{staticClass:"btn btn-info",on:{click:function(n){return t.setEditMode(e)}}},[t._v("Edit")]),n("button",{staticClass:"btn btn-danger",on:{click:function(n){return t.$emit("delete:task",e.id)}}},[t._v("Delete")])])])}))],2)])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Mark Complete")]),n("th",[t._v("Id")]),n("th",[t._v("Name")]),n("th",[t._v("Completed")]),n("th",[t._v("Action")])])}],u=(n("b0c0"),{name:"Tasks",props:{title:String,tasks:Array},data:function(){return{editMode:"",oldData:""}},methods:{updateTaskStatus:function(t){t.completed=!t.completed},setEditMode:function(t){this.editMode=t.id,this.oldData=JSON.parse(JSON.stringify(t))},updateTask:function(t){if(""===t.name)return!1;this.$emit("update:task",t.id,t),this.editMode=null},cancelEdit:function(t){t.name=this.oldData.name,this.editMode=null}}}),c=u,l=(n("08c4"),n("2877")),p=Object(l["a"])(c,o,d,!1,null,"edcb8ba8",null),f=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.title))]),n("form",{on:{submit:function(e){return e.preventDefault(),t.addTask(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name of the task"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"hidden"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}}),n("input",{staticClass:"btn btn-success",attrs:{type:"submit",value:"Save"}})])])},v=[],h={name:"AddTask",props:{title:String},data:function(){return{name:"",id:"4"}},methods:{addTask:function(){if(""===this.name)return!1;var t={id:this.id++,name:this.name,completed:!1};this.$emit("add:task",t),this.name=""}}},k=h,b=(n("149a"),Object(l["a"])(k,m,v,!1,null,"27f00300",null)),_=b.exports,y={name:"App",components:{Tasks:f,AddTask:_},data:function(){return{titleAdd:"Add new task",titleList:"Tasks for the day",tasks:[{id:1,name:"Study",completed:!0},{id:2,name:"Watch webseries",completed:!1},{id:3,name:"Create a todo app in vue js",completed:!1}]}},methods:{deleteTask:function(t){this.tasks=this.tasks.filter((function(e){return e.id!==t}))},addTask:function(t){this.tasks=[].concat(Object(r["a"])(this.tasks),[t])},updateTask:function(t,e){this.tasks=this.tasks.map((function(n){return n.id===t?e:n}))}}},g=y,T=(n("034f"),Object(l["a"])(g,i,s,!1,null,null,null)),O=T.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(O)}}).$mount("#app")},6e3:function(t,e,n){},"85ec":function(t,e,n){},d94e:function(t,e,n){}});
//# sourceMappingURL=app.866a2cbe.js.map