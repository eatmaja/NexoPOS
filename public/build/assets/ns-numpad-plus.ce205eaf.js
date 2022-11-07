import{_ as m,o as t,a as i,F as h,g as p,r as V,t as v,e as c,n as f,b as _}from"./bootstrap.5d9ac093.js";var b=(e,n)=>{const s=e.__vccOpts||e;for(const[u,l]of n)s[u]=l;return s};const w={name:"ns-numpad",props:["value","currency","floating","limit"],data(){return{number:parseInt(1+new Array(parseInt(ns.currency.ns_currency_precision)).fill("").map(e=>0).join("")),screenValue:0,order:null,cursor:parseInt(ns.currency.ns_currency_precision),orderSubscription:null,allSelected:!0,keys:[...[7,8,9].map(e=>({identifier:e,value:e})),...[4,5,6].map(e=>({identifier:e,value:e})),...[1,2,3].map(e=>({identifier:e,value:e})),{identifier:"backspace",icon:"la-backspace"},{identifier:0,value:0},{identifier:"next",value:m("Enter")}]}},mounted(){this.floating&&this.value>0?this.screenValue=parseFloat(this.value/this.number):this.screenValue=this.value||0;const e=new Array(10).fill("").map((n,s)=>s);nsHotPress.create("numpad-keys").whenVisible([".is-popup"]).whenPressed(e,(n,s)=>{this.inputValue({value:s})}),nsHotPress.create("numpad-backspace").whenVisible([".is-popup"]).whenPressed("backspace",()=>this.inputValue({identifier:"backspace"})),nsHotPress.create("numpad-increase").whenVisible([".is-popup"]).whenPressed("+",()=>this.increaseBy({value:1})),nsHotPress.create("numpad-reduce").whenVisible([".is-popup"]).whenPressed("-",()=>this.increaseBy({value:-1})),nsHotPress.create("numpad-save").whenVisible([".is-popup"]).whenPressed("enter",()=>this.inputValue({identifier:"next"}))},watch:{value(){this.value.toString().length>0?this.floating?this.screenValue=Math.round(this.value*this.number).toString():this.screenValue=this.value:this.screenValue=""}},beforeDestroy(){nsHotPress.destroy("numpad-backspace"),nsHotPress.destroy("numpad-increase"),nsHotPress.destroy("numpad-reduce"),nsHotPress.destroy("numpad-save")},methods:{increaseBy(e){let n=parseInt(1+new Array(this.cursor).fill("").map(s=>0).join(""));this.screenValue=(parseFloat(e.value)*n+(parseFloat(this.screenValue)||0)).toString(),this.allSelected=!1},inputValue(e){let n=parseInt(1+new Array(this.cursor).fill("").map(u=>0).join(""));if(e.identifier==="next"){this.$emit("next",this.floating&&this.screenValue.length>0?parseFloat(this.screenValue/n):this.screenValue);return}else if(e.identifier==="backspace")this.allSelected?(this.screenValue="0",this.allSelected=!1):this.screenValue=this.screenValue.toString().substr(0,this.screenValue.length-1);else if(e.value.toString().match(/^\d+$/)){if(this.limit>0&&this.screenValue.length>=this.limit)return;this.allSelected?(this.screenValue=e.value.toString(),this.allSelected=!1):(this.screenValue+=""+e.value.toString(),this.mode==="percentage"&&(this.screenValue=this.screenValue>100?100:this.screenValue))}const s=this.floating&&this.screenValue.length>0&&this.screenValue!=="0"?parseFloat(this.screenValue/this.number):this.screenValue;this.$emit("changed",s)}}},P={id:"numpad",class:"grid grid-flow-row grid-cols-3 grid-rows-3"},S=["onClick"],y={key:0};function H(e,n,s,u,l,o){return t(),i("div",P,[(t(!0),i(h,null,p(l.keys,(r,d)=>(t(),i("div",{onClick:a=>o.inputValue(r),key:d,class:"select-none ns-numpad-key border-l border-b h-24 font-bold flex items-center justify-center cursor-pointer"},[r.value!==void 0?(t(),i("span",y,v(r.value),1)):c("",!0),r.icon?(t(),i("i",{key:1,class:f(["las",r.icon])},null,2)):c("",!0)],8,S))),128)),V(e.$slots,"numpad-footer")])}var A=b(w,[["render",H]]);const $={name:"ns-numpad-plus",props:["value","currency","limit"],data(){return{screenValue:0,order:null,cursor:parseInt(ns.currency.ns_currency_precision),orderSubscription:null,allSelected:!0,keyRows:[[7,8,9].map(e=>({identifier:e,value:e})),[4,5,6].map(e=>({identifier:e,value:e})),[1,2,3].map(e=>({identifier:e,value:e})),[{identifier:".",value:"."},{identifier:0,value:0},{identifier:"backspace",icon:"la-backspace"}],[{identifier:"next",value:m("Enter")}]]}},mounted(){this.screenValue=this.value||0;const e=new Array(10).fill("").map((n,s)=>s);nsHotPress.create("numpad-keys").whenVisible([".is-popup"]).whenPressed(e,(n,s)=>{this.inputValue({value:s})}),nsHotPress.create("numpad-backspace").whenVisible([".is-popup"]).whenPressed("backspace",()=>this.inputValue({identifier:"backspace"})),nsHotPress.create("numpad-increase").whenVisible([".is-popup"]).whenPressed("+",()=>this.increaseBy({value:1})),nsHotPress.create("numpad-dot").whenVisible([".is-popup"]).whenPressed(".",()=>this.inputValue({identifier:"."})),nsHotPress.create("numpad-reduce").whenVisible([".is-popup"]).whenPressed("-",()=>this.increaseBy({value:-1})),nsHotPress.create("numpad-save").whenVisible([".is-popup"]).whenPressed("enter",()=>this.inputValue({identifier:"next"}))},watch:{value(){this.value.toString().length>0?this.screenValue=this.value:this.screenValue=""}},beforeDestroy(){nsHotPress.destroy("numpad-backspace"),nsHotPress.destroy("numpad-increase"),nsHotPress.destroy("numpad-reduce"),nsHotPress.destroy("numpad-save"),nsHotPress.destroy("numpad-dot")},methods:{increaseBy(e){this.screenValue=(parseFloat(e.value)+(parseFloat(this.screenValue)||0)).toString(),this.allSelected=!1},inputValue(e){if(e.identifier==="next"){this.$emit("next",this.screenValue);return}else if(e.identifier==="backspace")this.allSelected?(this.screenValue="0",this.allSelected=!1):this.screenValue=this.screenValue.toString().substr(0,this.screenValue.length-1);else if(e.identifier===".")this.allSelected?(this.screenValue="0.",this.allSelected=!1):this.screenValue.toString().match(/^[0-9][1-9]*\.[0-9]*$/)===null&&(this.screenValue=this.screenValue+=".");else if(e.value.toString().match(/^\d+$/)){if(this.limit>0&&this.screenValue.length>=this.limit)return;this.allSelected?(this.screenValue=e.value.toString(),this.allSelected=!1):(this.screenValue+=""+e.value.toString(),this.mode==="percentage"&&(this.screenValue=this.screenValue>100?100:this.screenValue))}this.$emit("changed",this.screenValue)}}},x={id:"numpad-holder"},k={id:"numpad",class:"grid grid-flow-row grid-cols-3 grid-rows-1 text-lg"},B=["onClick"],F={key:0};function C(e,n,s,u,l,o){return t(),i("div",x,[(t(!0),i(h,null,p(l.keyRows,(r,d)=>(t(),i("div",{key:d},[_("div",k,[(t(!0),i(h,null,p(r,(a,g)=>(t(),i("div",{onClick:I=>o.inputValue(a),key:g,class:f([r.length===1?"col-span-3":"","select-none ns-numpad-key border-l border-b h-24 font-bold flex items-center justify-center cursor-pointer"])},[a.value!==void 0?(t(),i("span",F,v(a.value),1)):c("",!0),a.icon?(t(),i("i",{key:1,class:f(["las",a.icon])},null,2)):c("",!0)],10,B))),128)),V(e.$slots,"numpad-footer")])]))),128))])}var N=b($,[["render",C]]);export{b as _,N as a,A as n};