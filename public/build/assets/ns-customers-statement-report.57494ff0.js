import{n as b}from"./currency.ec2e3443.js";import{_ as c}from"./lang.2d0006f0.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{b1 as a,aA as l,aB as e,y as i,ao as s,az as h,L as x,b6 as f,b8 as m}from"./runtime-core.esm-bundler.aa7a54f6.js";const y={name:"ns-customers-statement-report",props:["store-logo","store-name","search-url"],data(){return{startDate:moment().startOf("day"),endDate:moment().endOf("day"),selectedCustomer:null,ns:window.ns,report:{total_purchases:0,total_orders:0,account_amount:0,owed_amount:0,credit_limit_amount:0,orders:[],wallet_transactions:[]}}},mounted(){},computed:{selectedCustomerName(){return this.selectedCustomer===null?c("N/A"):this.selectedCustomer.name}},methods:{__:c,nsCurrency:b,printSaleReport(){this.$htmlToPaper("report")},setStartDate(n){this.startDate=n},setEndDate(n){this.endDate=n},handleSelectedCustomer(n){this.selectedCustomer=n,nsHttpClient.post(`/api/reports/customers-statement/${n.id}`,{rangeStarts:this.startDate.format("YYYY-MM-DD HH:mm:ss"),rangeEnds:this.endDate.format("YYYY-MM-DD HH:mm:ss")}).subscribe({next:r=>{this.report=r},error:r=>{nsSnackBar.error(r.message||c("An unexpected error occured")).subscribe()}})}}},C={id:"report-section"},v={class:"flex -mx-2"},w={class:"px-2"},g={class:"px-2"},D={key:0,class:"px-2"},S={class:"ns-button"},k=e("i",{class:"las la-sync-alt text-xl"},null,-1),N={class:"pl-2"},Y={class:"px-2"},B={class:"ns-button"},H=e("i",{class:"las la-print text-xl"},null,-1),L={class:"pl-2"},O={id:"report",class:"anim-duration-500 fade-in-entrance"},A={class:"flex w-full"},E={class:"my-4 flex justify-between w-full"},M={class:"text-primary"},T={class:"pb-1 border-b border-dashed border-box-edge"},j={class:"pb-1 border-b border-dashed border-box-edge"},P={class:"pb-1 border-b border-dashed border-box-edge"},R={class:"pb-1 border-b border-dashed border-box-edge"},V=["src","alt"],z={class:"shadow rounded"},F={class:"ns-box"},U={class:"text-center ns-box-header p-2"},W={class:"font-bold"},q={class:"border-b ns-box-body"},G={class:"table ns-table w-full"},I={class:"text-primary"},J={class:""},K={width:"200",class:"font-semibold p-2 border text-left bg-success-secondary border-info-primary text-white print:text-black"},Q={class:"p-2 border text-right border-info-primary"},X={class:""},Z={width:"200",class:"font-semibold p-2 border text-left bg-warning-secondary border-info-primary text-white print:text-black"},$={class:"p-2 border text-right border-info-primary"},ee={class:""},te={width:"200",class:"font-semibold p-2 border text-left bg-info-secondary border-info-primary text-white print:text-black"},se={class:"p-2 border text-right border-info-primary"},re={class:""},oe={width:"200",class:"font-semibold p-2 border text-left border-info-primary"},de={class:"p-2 border text-right border-info-primary"},ne={class:""},ae={width:"200",class:"font-semibold p-2 border text-left border-info-primary"},le={class:"p-2 border text-right border-info-primary"},ce=e("br",null,null,-1),ie=e("br",null,null,-1),_e={key:0,class:"shadow rounded overflow-hidden"},he={class:"ns-box"},me={class:"text-center ns-box-header p-2"},ue={class:"font-bold"},be={class:"border-b ns-box-body"},pe={class:"table ns-table w-full"},xe={class:"p-2 border text-left"},fe={class:"p-2 border text-right"},ye={class:"text-primary"},Ce={width:"200",class:"font-semibold p-2 border text-left"},ve={class:"p-2 border text-right"};function we(n,r,ge,De,o,t){const _=m("ns-date-time-picker"),u=m("ns-search");return a(),l("div",C,[e("div",v,[e("div",w,[i(_,{date:o.startDate,onChange:r[0]||(r[0]=d=>t.setStartDate(d))},null,8,["date"])]),e("div",g,[i(_,{date:o.endDate,onChange:r[1]||(r[1]=d=>t.setEndDate(d))},null,8,["date"])]),o.selectedCustomer?(a(),l("div",D,[e("div",S,[e("button",{onClick:r[2]||(r[2]=d=>t.handleSelectedCustomer(o.selectedCustomer)),class:"rounded flex justify-between text-primary shadow py-1 items-center px-2"},[k,e("span",N,s(t.__("Load")),1)])])])):h("",!0),e("div",Y,[e("div",B,[e("button",{onClick:r[3]||(r[3]=d=>t.printSaleReport()),class:"rounded flex justify-between text-primary shadow py-1 items-center px-2"},[H,e("span",L,s(t.__("Print")),1)])])])]),e("div",null,[i(u,{placeholder:t.__("Search Customer..."),label:"name",value:"id",onSelect:r[4]||(r[4]=d=>t.handleSelectedCustomer(d)),url:n.searchUrl},null,8,["placeholder","url"])]),e("div",O,[e("div",A,[e("div",E,[e("div",M,[e("ul",null,[e("li",T,s(t.__("Date : {date}").replace("{date}",o.ns.date.current)),1),e("li",j,s(t.__("Document : Customer Statement")),1),e("li",P,s(t.__("Customer : {selectedCustomerName}").replace("{selectedCustomerName}",t.selectedCustomerName)),1),e("li",R,s(t.__("By : {user}").replace("{user}",o.ns.user.username)),1)])]),e("div",null,[e("img",{class:"w-24",src:n.storeLogo,alt:n.storeName},null,8,V)])])]),e("div",z,[e("div",F,[e("div",U,[e("h3",W,s(t.__("Summary")),1)]),e("div",q,[e("table",G,[e("tbody",I,[e("tr",J,[e("td",K,s(t.__("Total Purchases")),1),e("td",Q,s(t.nsCurrency(o.report.purchases_amount)),1)]),e("tr",X,[e("td",Z,s(t.__("Due Amount")),1),e("td",$,s(t.nsCurrency(o.report.owed_amount)),1)]),e("tr",ee,[e("td",te,s(t.__("Wallet Balance")),1),e("td",se,s(t.nsCurrency(o.report.account_amount)),1)]),e("tr",re,[e("td",oe,s(t.__("Credit Limit")),1),e("td",de,s(t.nsCurrency(o.report.credit_limit_amount)),1)]),e("tr",ne,[e("td",ae,s(t.__("Total Orders")),1),e("td",le,s(o.report.total_orders),1)])])])])])]),ce,ie,o.report.orders.length>0?(a(),l("div",_e,[e("div",he,[e("div",me,[e("h3",ue,s(t.__("Orders")),1)]),e("div",be,[e("table",pe,[e("thead",null,[e("tr",null,[e("th",xe,s(t.__("Order")),1),e("th",fe,s(t.__("Total")),1)])]),e("tbody",ye,[(a(!0),l(x,null,f(o.report.orders,d=>(a(),l("tr",{class:"",key:d.id},[e("td",Ce,s(d.code),1),e("td",ve,s(t.nsCurrency(d.total)),1)]))),128))])])])])])):h("",!0)])])}var Be=p(y,[["render",we]]);export{Be as default};