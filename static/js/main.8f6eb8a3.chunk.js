(this["webpackJsonpreact-js-randomizer"]=this["webpackJsonpreact-js-randomizer"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),l=n.n(o),c=n(4),u=n(7),s=n(3);n(13);var i=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)(""),i=Object(s.a)(l,2),m=i[0],d=i[1],p=function(){var e=n[Math.floor(Math.random()*n.length)],t=n.map((function(t){return t===e?Object(c.a)({},t,{selected:!0}):Object(c.a)({},t,{selected:!1})}));o(t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container mx-auto bg-white shadow-xl w-full sm:w-2/4 h-auto p-4 rounded-md"},r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),""!==m.length){var t={text:m,selected:!1},a=[].concat(Object(u.a)(n),[t]);d(""),o(a)}}},r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:"bg-transparent hover:shadow-sm text-gray-600 placeholder-gray-400 py-2 px-4 mr-3 my-3 focus:outline-none focus:bg-white focus:shadow-sm focus:border-gray-300 rounded-full",placeholder:"Enter Options",value:m,onChange:function(e){d(e.target.value)}}),r.a.createElement("button",{className:"bg-transparent text-pink-300 py-2 px-4 font-extrabold border border-transparent hover:border-pink-200 focus:outline-none rounded-full"},"Add")),0===n.length&&r.a.createElement("div",null,r.a.createElement("small",{className:"text-gray-400"},r.a.createElement("i",null,"Enter options to Randomize"))),n.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("small",{className:"text-gray-400"},r.a.createElement("i",null,"Entered options to Randomize"),r.a.createElement("i",{className:"text-red-300"}," ","(Double click your option to remove it)")),r.a.createElement("ul",{className:"text-gray-600 my-3"},n.map((function(e,t){return r.a.createElement("li",{className:"p-2 px-4 m-2 cursor-pointer hover:line-through hover:bg-red-100 rounded-full ".concat(e.selected?"bg-green-100 font-extrabold":""),key:t,onDoubleClick:function(){return function(e){var t=n.filter((function(t,n){return n!==e}));o(t)}(t)}},e.text)}))),r.a.createElement("button",{className:"w-full bg-transparent text-pink-300 py-2 px-4 font-extrabold border border-transparent hover:border-pink-200 focus:outline-none rounded-full",onClick:function(){for(var e=0;e<Math.floor(20*Math.random());e++)setTimeout(p,100*e)}},"Randomize"),r.a.createElement("button",{className:"bg-transparent hover:bg-red-300 text-red-300 hover:text-white py-2 px-4 my-3 hover:border-red-300 focus:outline-none rounded-full",onClick:function(){o([])}},"Reset")))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.8f6eb8a3.chunk.js.map