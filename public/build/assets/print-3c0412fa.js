var c=Object.defineProperty;var u=(t,e,s)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var o=(t,e,s)=>(u(t,typeof e!="symbol"?e+"":e,s),s);class d{constructor({urls:e,options:s}){o(this,"urls");o(this,"options");o(this,"printingURL",{refund:"refund_printing_url",sale:"sale_printing_url",payment:"payment_printing_url"});this.urls=e,this.options=s}processRegularPrinting(e,s){const n=document.querySelector("#printing-section");n&&n.remove();const p=this.urls[this.printingURL[s]].replace("{reference_id}",e),r=document.createElement("iframe");r.id="printing-section",r.className="hidden",r.src=p,document.body.appendChild(r),setTimeout(()=>{document.querySelector("#printing-section").remove()},5e3)}process(e,s,n="aloud"){switch(this.options.ns_pos_printing_gateway){case"default":this.processRegularPrinting(e,s);break;default:this.processCustomPrinting(e,this.options.ns_pos_printing_gateway,s,n);break}}processCustomPrinting(e,s,n,p="aloud"){const r={printed:!1,reference_id:e,gateway:s,document:n,mode:p};nsHooks.applyFilters("ns-custom-print",{params:r,promise:()=>new Promise((i,a)=>{a({status:"failed",message:__("The selected print gateway doesn't support this type of printing.","NsPrintAdapter")})})}).promise().then(i=>{nsSnackBar.success(i.message).subscribe()}).catch(i=>{nsSnackBar.error(i.message||__("An error unexpected occured while printing.")).subscribe()})}}export{d as P};
