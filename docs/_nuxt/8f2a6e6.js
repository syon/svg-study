(window.webpackJsonp=window.webpackJsonp||[]).push([[10,4,6],{260:function(t,n,e){var content=e(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(106).default)("47493413",content,!0,{sourceMap:!1})},261:function(t,n,e){var content=e(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(106).default)("75a052f0",content,!0,{sourceMap:!1})},267:function(t,n,e){"use strict";e(260)},268:function(t,n,e){var r=e(105)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.connector[data-v-0fc7adc6]{\n  fill:none;\n  stroke:#4169e1;\n  stroke-width:3px\n}\n.zz-handle[data-v-0fc7adc6],.zz-point[data-v-0fc7adc6]{\n  fill:rgba(30,144,255,.2);\n  cursor:pointer\n}\n.zz-handle[data-v-0fc7adc6],.zz-handleline[data-v-0fc7adc6],.zz-point[data-v-0fc7adc6]{\n  stroke:#1e90ff;\n  stroke-width:1\n}\ntext[data-v-0fc7adc6]{\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},269:function(t,n,e){"use strict";e(261)},270:function(t,n,e){var r=e(105)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.connector[data-v-af072a24]{\n  fill:none;\n  stroke:#639;\n  stroke-width:3px\n}\n.zz-point[data-v-af072a24]{\n  fill:rgba(144,30,255,.2);\n  stroke:#8a2be2;\n  stroke-width:1;\n  cursor:pointer\n}\n.zz-handle[data-v-af072a24]{\n  fill:rgba(0,0,0,.1);\n  cursor:not-allowed\n}\n.zz-handle[data-v-af072a24],.zz-handleline[data-v-af072a24]{\n  stroke:silver;\n  stroke-width:1\n}\ntext[data-v-af072a24]{\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},275:function(t,n,e){var content=e(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(106).default)("7d1755a9",content,!0,{sourceMap:!1})},284:function(t,n,e){"use strict";e.r(n);e(107);var r={data:function(){return{isDragging:!1,dragProp:"",startPoint:{x:200,y:200},startHandle:{x:350,y:150},endHandle:{x:400,y:500},endPoint:{x:600,y:340}}},computed:{sp:function(){return this.startPoint},sh:function(){return this.startHandle},eh:function(){return this.endHandle},ep:function(){return this.endPoint},startHandlePath:function(){var t=this.sp,n=this.sh;return"M".concat(t.x,",").concat(t.y," L").concat(n.x,",").concat(n.y)},endHandlePath:function(){var t=this.ep,n=this.eh;return"M".concat(t.x,",").concat(t.y," L").concat(n.x,",").concat(n.y)},connectorData:function(){var t=this.sp,n=this.sh,e=this.eh,r=this.ep;return"M".concat(t.x,",").concat(t.y," C").concat(n.x,",").concat(n.y," ").concat(e.x,",").concat(e.y," ").concat(r.x,",").concat(r.y)}},methods:{dragStart:function(t){this.isDragging=!0,this.dragProp=t},dragStop:function(){this.isDragging=!1},onMousemove:function(t){if(!this.isDragging)return!1;var n=t.offsetX,e=t.offsetY;this[this.dragProp].x=n,this[this.dragProp].y=e}}},o=(e(267),e(45)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("g",{on:{mousemove:t.onMousemove,pointerup:t.dragStop}},[e("path",{staticClass:"connector",attrs:{d:t.connectorData}}),t._v(" "),e("text",{attrs:{x:"10",y:"20","font-size":"12","font-family":"monospace"}},[t._v('\n    <path d="'+t._s(t.connectorData)+'"/>\n  ')]),t._v(" "),e("g",[e("g",[e("rect",{staticClass:"zz-point",attrs:{x:t.sp.x-5,y:t.sp.y-5,width:"10",height:"10"},on:{pointerdown:function(n){return t.dragStart("startPoint")}}}),t._v(" "),e("text",{attrs:{x:t.sp.x+15,y:t.sp.y+15,"font-size":"12"}},[t._v("\n        x:"+t._s(t.sp.x)+" y:"+t._s(t.sp.y)+"\n      ")])]),t._v(" "),e("g",[e("rect",{staticClass:"zz-point",attrs:{x:t.ep.x-5,y:t.ep.y-5,width:"10",height:"10"},on:{pointerdown:function(n){return t.dragStart("endPoint")}}}),t._v(" "),e("text",{attrs:{x:t.ep.x+15,y:t.ep.y+15,"font-size":"12"}},[t._v("\n        x:"+t._s(t.ep.x)+" y:"+t._s(t.ep.y)+"\n      ")])]),t._v(" "),e("g",[e("path",{staticClass:"zz-handleline",attrs:{d:t.startHandlePath}}),t._v(" "),e("circle",{staticClass:"zz-handle",attrs:{cx:t.sh.x,cy:t.sh.y,r:"5"},on:{pointerdown:function(n){return t.dragStart("startHandle")}}}),t._v(" "),e("text",{attrs:{x:t.sh.x+15,y:t.sh.y+15,"font-size":"12"}},[t._v("\n        x:"+t._s(t.sh.x)+" y:"+t._s(t.sh.y)+"\n      ")])]),t._v(" "),e("g",[e("path",{staticClass:"zz-handleline",attrs:{d:t.endHandlePath}}),t._v(" "),e("circle",{staticClass:"zz-handle",attrs:{cx:t.eh.x,cy:t.eh.y,r:"5"},on:{pointerdown:function(n){return t.dragStart("endHandle")}}}),t._v(" "),e("text",{attrs:{x:t.eh.x+15,y:t.eh.y+15,"font-size":"12"}},[t._v("\n        x:"+t._s(t.eh.x)+" y:"+t._s(t.eh.y)+"\n      ")])])])])}),[],!1,null,"0fc7adc6",null);n.default=component.exports},285:function(t,n,e){"use strict";e.r(n);e(107);var r={data:function(){return{isDragging:!1,dragProp:"",startPoint:{x:120,y:400},endPoint:{x:650,y:120}}},computed:{sp:function(){return this.startPoint},sh:function(){return{x:(this.sp.x+this.ep.x)/2,y:this.sp.y}},eh:function(){return{x:(this.sp.x+this.ep.x)/2,y:this.ep.y}},ep:function(){return this.endPoint},direction:function(){return Math.abs(this.ep.x-this.sp.x)>=Math.abs(this.ep.y-this.sp.y)?"horizontal":"vertical"},startHandlePath:function(){var t=this.sp,n=this.sh;return"M".concat(t.x,",").concat(t.y," L").concat(n.x,",").concat(n.y)},endHandlePath:function(){var t=this.ep,n=this.eh;return"M".concat(t.x,",").concat(t.y," L").concat(n.x,",").concat(n.y)},connectorData:function(){var t=this.sp,n=this.sh,e=this.eh,r=this.ep;return"M".concat(t.x,",").concat(t.y," C").concat(n.x,",").concat(n.y," ").concat(e.x,",").concat(e.y," ").concat(r.x,",").concat(r.y)}},methods:{dragStart:function(t){this.isDragging=!0,this.dragProp=t},dragStop:function(){this.isDragging=!1},onMousemove:function(t){if(!this.isDragging)return!1;var n=t.offsetX,e=t.offsetY;this[this.dragProp].x=n,this[this.dragProp].y=e}}},o=(e(269),e(45)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("g",{on:{mousemove:t.onMousemove,pointerup:t.dragStop}},[e("path",{staticClass:"connector",attrs:{d:t.connectorData}}),t._v(" "),e("text",{attrs:{x:"10",y:"580","font-size":"12","font-family":"monospace"}},[t._v('\n    <path d="'+t._s(t.connectorData)+'"/>\n  ')]),t._v(" "),e("g",[e("g",[e("rect",{staticClass:"zz-point",attrs:{x:t.sp.x-5,y:t.sp.y-5,width:"10",height:"10"},on:{pointerdown:function(n){return t.dragStart("startPoint")}}}),t._v(" "),e("text",{attrs:{x:t.sp.x+15,y:t.sp.y+15,"font-size":"12"}},[t._v("\n        x:"+t._s(t.sp.x)+" y:"+t._s(t.sp.y)+"\n      ")])]),t._v(" "),e("g",[e("rect",{staticClass:"zz-point",attrs:{x:t.ep.x-5,y:t.ep.y-5,width:"10",height:"10"},on:{pointerdown:function(n){return t.dragStart("endPoint")}}}),t._v(" "),e("text",{attrs:{x:t.ep.x+15,y:t.ep.y+15,"font-size":"12"}},[t._v("\n        x:"+t._s(t.ep.x)+" y:"+t._s(t.ep.y)+"\n      ")])]),t._v(" "),e("g",[e("path",{staticClass:"zz-handleline",attrs:{d:t.startHandlePath}}),t._v(" "),e("circle",{staticClass:"zz-handle",attrs:{cx:t.sh.x,cy:t.sh.y,r:"5"}}),t._v(" "),e("text",{attrs:{x:t.sh.x+15,y:t.sh.y+15,"font-size":"12"}},[t._v("\n        x:"+t._s(t.sh.x)+" y:"+t._s(t.sh.y)+"\n      ")])]),t._v(" "),e("g",[e("path",{staticClass:"zz-handleline",attrs:{d:t.endHandlePath}}),t._v(" "),e("circle",{staticClass:"zz-handle",attrs:{cx:t.eh.x,cy:t.eh.y,r:"5"}}),t._v(" "),e("text",{attrs:{x:t.eh.x+15,y:t.eh.y+15,"font-size":"12"}},[t._v("\n        x:"+t._s(t.eh.x)+" y:"+t._s(t.eh.y)+"\n      ")])])])])}),[],!1,null,"af072a24",null);n.default=component.exports},287:function(t,n,e){"use strict";e(275)},288:function(t,n,e){var r=e(105)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nbody{\n  background-color:#eeeff2\n}\n#canvas{\n  width:800px;\n  margin:2rem auto\n}\nsvg{\n  border:1px solid #eee;\n  box-shadow:0 2px 12px 4px rgba(0,0,0,.01);\n  margin:0 auto;\n  background-color:#fff\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},309:function(t,n,e){"use strict";e.r(n);var r={name:"Step1Page"},o=(e(287),e(45)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",[e("div",{attrs:{id:"canvas"}},[e("svg",{attrs:{width:"800",height:"600",xmlns:"http://www.w3.org/2000/svg"}},[e("editable-bezier"),t._v(" "),e("auto-bezier-debug")],1)])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{EditableBezier:e(284).default,AutoBezierDebug:e(285).default})}}]);