(this["webpackJsonpcalculator-react"]=this["webpackJsonpcalculator-react"]||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var s=a(0),i=a(1),n=a.n(i),c=a(3),r=a.n(c),l=(a(14),a(4)),o=a(5),j=a(6),b=a(8),d=a(7),u=function(t){return Object(s.jsx)("div",{className:"d-inline",children:Object(s.jsx)("input",{placeholder:t.data.placeholder,name:t.data.name,onChange:t.data.onChange})})},h=[{id:1,placeholder:"first value",name:"firstVal"},{id:2,placeholder:"second value",name:"secondVal"}],O=function(t){Object(b.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(o.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))).state={firstVal:0,secondVal:0},t.updateInputValue=function(e){var a=e.target,s=a.name,i=a.value;t.setState(Object(l.a)({},s,parseFloat(i)))},t.add=function(){var e=t.state,a=e.firstVal,s=e.secondVal;alert("The SUM is "+(a+s))},t.substract=function(){var e=t.state,a=e.firstVal,s=e.secondVal;alert("The DIF is "+(a-s))},t.multiplication=function(){var e=t.state,a=e.firstVal,s=e.secondVal;alert("Result is "+a*s)},t.division=function(){var e=t.state,a=e.firstVal,s=e.secondVal;alert("Result is "+a/s)},t}return Object(j.a)(a,[{key:"render",value:function(){var t,e=this,a=h.map((function(t){return Object(s.jsx)(u,{data:{placeholder:t.placeholder,name:t.name,onChange:function(t){return e.updateInputValue(t)}}})})),i=this.state,n=i.firstVal,c=i.secondVal,r=n+c,l=n-c,o=n*c,j=0===n||0===c,b=isNaN(n)||isNaN(c);return t=0===n||0===c?0:n/c,Object(s.jsxs)("div",{children:[a,Object(s.jsx)("button",{onClick:this.add,children:"+"}),Object(s.jsx)("button",{onClick:this.substract,children:"-"}),Object(s.jsx)("button",{onClick:this.multiplication,children:"*"}),Object(s.jsx)("button",{onClick:this.division,children:"/"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),b?Object(s.jsxs)("div",{children:["Sum: ",Object(s.jsx)("br",{}),Object(s.jsx)("br",{})," Substract: ",Object(s.jsx)("br",{}),Object(s.jsx)("br",{})," Multiplictaion: ",Object(s.jsx)("br",{}),Object(s.jsx)("br",{})," Division: ",Object(s.jsx)("br",{})]}):Object(s.jsxs)("div",{children:["Sum: ",this.state.firstVal," + ",this.state.secondVal," = ",r," ",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"Substract: ",this.state.firstVal," - ",this.state.secondVal," ="," ",l,Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"Multiplictaion: ",this.state.firstVal," * ",this.state.secondVal," ="," ",o,Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),j?Object(s.jsx)("div",{children:"Division:"}):Object(s.jsxs)("div",{children:["Division: ",this.state.firstVal," / ",this.state.secondVal," ="," ",t]})]})]})}}]),a}(n.a.Component);r.a.render(Object(s.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.09238b5a.chunk.js.map