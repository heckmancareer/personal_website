import{a as C,b as A,c as R,d as b,i as w}from"./chunk-IHMRKRWQ.js";import{Eb as y,J as l,Oa as g,Pb as v,S as d,aa as p,hb as f,ja as h,pa as m,ta as u,xa as c}from"./chunk-JAPGALFW.js";var x="@",s=class{constructor(e,t,r,o,n){this.doc=e,this.delegate=t,this.zone=r,this.animationType=o,this.moduleImpl=n,this._rendererFactoryPromise=null}loadImpl(){return(this.moduleImpl??import("./chunk-RR4AVVTH.js")).catch(t=>{throw new l(5300,!1)}).then(({\u0275createEngine:t,\u0275AnimationRendererFactory:r})=>{let o=t(this.animationType,this.doc),n=new r(this.delegate,o,this.zone);return this.delegate=n,n})}createRenderer(e,t){let r=this.delegate.createRenderer(e,t);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new a(r);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(n=>{let N=n.createRenderer(e,t);o.use(N)}).catch(n=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}},a=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,o){this.delegate.insertBefore(e,t,r,o)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,o){this.delegate.setAttribute(e,t,r,o)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,o){this.delegate.setStyle(e,t,r,o)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(o=>o.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(x)}};function P(i="animations"){return p([{provide:m,useFactory:(e,t,r)=>new s(e,t,r,i),deps:[y,C,c]},{provide:h,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var I=[{path:"",redirectTo:"/portfolio",pathMatch:"full"},{path:"portfolio",loadChildren:()=>import("./chunk-BVVVCVZ5.js").then(i=>i.PortfolioModule)}];var F={providers:[b(I),P()]};var M=(()=>{let e=class e{constructor(r){this.primengConfig=r,this.title="personal_website"}ngOnInit(){this.primengConfig.ripple=!0}};e.\u0275fac=function(o){return new(o||e)(u(w))},e.\u0275cmp=d({type:e,selectors:[["app-root"]],standalone:!0,features:[f],decls:1,vars:0,template:function(o,n){o&1&&g(0,"router-outlet")},dependencies:[v,R]});let i=e;return i})();A(M,F).catch(i=>console.error(i));
