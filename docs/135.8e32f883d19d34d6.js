"use strict";(self.webpackChunkpaises_app=self.webpackChunkpaises_app||[]).push([[135],{3654:(R,O,c)=>{c.d(O,{$:()=>A});var o=c(1223),V=c(520);let A=(()=>{class m{constructor(g){this.http=g,this.URI="https://restcountries.com/v3.1/name",this.URLCODE="https://restcountries.com/v3.1/alpha?codes",this.URLCAPITAL="https://restcountries.com/v3.1/capital",this.URLREGION="https://restcountries.com/v3.1/region"}getByCountry(g){return this.http.get(`${this.URI}/${g}`)}getByCode(g){return this.http.get(`${this.URLCODE}=${g}`)}getByCapitalCity(g){return this.http.get(`${this.URLCAPITAL}/${g}`)}getByRegion(g){return this.http.get(`${this.URLREGION}/${g}`)}}return m.\u0275fac=function(g){return new(g||m)(o.LFG(V.eN))},m.\u0275prov=o.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},415:(R,O,c)=>{c.d(O,{N:()=>W});var o=c(1223),V=c(727);class A extends V.w0{constructor(a,u){super()}schedule(a,u=0){return this}}const m={setInterval(y,a,...u){const{delegate:l}=m;return(null==l?void 0:l.setInterval)?l.setInterval(y,a,...u):setInterval(y,a,...u)},clearInterval(y){const{delegate:a}=m;return((null==a?void 0:a.clearInterval)||clearInterval)(y)},delegate:void 0};var p=c(8737);const d={now:()=>(d.delegate||Date).now(),delegate:void 0};class M{constructor(a,u=M.now){this.schedulerActionCtor=a,this.now=u}schedule(a,u=0,l){return new this.schedulerActionCtor(this,a).schedule(l,u)}}M.now=d.now;const G=new class C extends M{constructor(a,u=M.now){super(a,u),this.actions=[],this._active=!1,this._scheduled=void 0}flush(a){const{actions:u}=this;if(this._active)return void u.push(a);let l;this._active=!0;do{if(l=a.execute(a.state,a.delay))break}while(a=u.shift());if(this._active=!1,l){for(;a=u.shift();)a.unsubscribe();throw l}}}(class g extends A{constructor(a,u){super(a,u),this.scheduler=a,this.work=u,this.pending=!1}schedule(a,u=0){if(this.closed)return this;this.state=a;const l=this.id,h=this.scheduler;return null!=l&&(this.id=this.recycleAsyncId(h,l,u)),this.pending=!0,this.delay=u,this.id=this.id||this.requestAsyncId(h,this.id,u),this}requestAsyncId(a,u,l=0){return m.setInterval(a.flush.bind(a,this),l)}recycleAsyncId(a,u,l=0){if(null!=l&&this.delay===l&&!1===this.pending)return u;m.clearInterval(u)}execute(a,u){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const l=this._execute(a,u);if(l)return l;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(a,u){let h,l=!1;try{this.work(a)}catch(b){l=!0,h=b||new Error("Scheduled action threw falsy error")}if(l)return this.unsubscribe(),h}unsubscribe(){if(!this.closed){const{id:a,scheduler:u}=this,{actions:l}=u;this.work=this.state=this.scheduler=null,this.pending=!1,(0,p.P)(l,this),null!=a&&(this.id=this.recycleAsyncId(u,a,null)),this.delay=null,super.unsubscribe()}}});var re=c(4482),$=c(5403),D=c(7579),N=c(2382);let W=(()=>{class y{constructor(){this.terminoEvent=new o.vpe,this.onDebounce=new o.vpe,this.termino="",this.debouncer=new D.x}ngOnInit(){this.debouncer.pipe(function w(y,a=G){return(0,re.e)((u,l)=>{let h=null,b=null,_=null;const F=()=>{if(h){h.unsubscribe(),h=null;const B=b;b=null,l.next(B)}};function oe(){const B=_+y,k=a.now();if(k<B)return h=this.schedule(void 0,B-k),void l.add(h);F()}u.subscribe((0,$.x)(l,B=>{b=B,_=a.now(),h||(h=a.schedule(oe,y),l.add(h))},()=>{F(),l.complete()},void 0,()=>{b=h=null}))})}(300)).subscribe(u=>this.onDebounce.emit(u))}onSubmit(){this.terminoEvent.emit(this.termino)}onPress(){this.debouncer.next(this.termino)}}return y.\u0275fac=function(u){return new(u||y)},y.\u0275cmp=o.Xpm({type:y,selectors:[["app-search-bar"]],inputs:{placeholder:"placeholder"},outputs:{terminoEvent:"terminoEvent",onDebounce:"onDebounce"},decls:2,vars:2,consts:[[3,"ngSubmit"],["type","text","name","termino",1,"form-control",3,"ngModel","placeholder","ngModelChange","input"]],template:function(u,l){1&u&&(o.TgZ(0,"form",0),o.NdJ("ngSubmit",function(){return l.onSubmit()}),o.TgZ(1,"input",1),o.NdJ("ngModelChange",function(b){return l.termino=b})("input",function(){return l.onPress()}),o.qZA()()),2&u&&(o.xp6(1),o.Q6J("ngModel",l.termino)("placeholder",l.placeholder))},directives:[N._Y,N.JL,N.F,N.Fj,N.JJ,N.On],encapsulation:2}),y})()},3631:(R,O,c)=>{c.d(O,{B:()=>m});var o=c(9808),V=c(2382),A=c(1223);let m=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=A.oAB({type:p}),p.\u0275inj=A.cJS({imports:[[V.u5,o.ez]]}),p})()},4952:(R,O,c)=>{c.d(O,{c:()=>g});var o=c(1223),V=c(9808),A=c(9060);const m=function(d){return["/pais",d]};function p(d,M){if(1&d&&(o.TgZ(0,"tr")(1,"td"),o._uU(2),o.qZA(),o.TgZ(3,"td"),o._UZ(4,"img",2),o.qZA(),o.TgZ(5,"td"),o._uU(6),o.qZA(),o.TgZ(7,"td"),o._uU(8),o.ALo(9,"number"),o.qZA(),o.TgZ(10,"td")(11,"a",3),o._uU(12),o.qZA()()()),2&d){const C=M.$implicit,G=M.index;o.xp6(2),o.hij(" ",G+1," "),o.xp6(2),o.Q6J("src",C.flags.svg,o.LSH),o.xp6(2),o.hij(" ",C.name.official," "),o.xp6(2),o.hij(" ",o.lcZ(9,6,C.population)," HAB. "),o.xp6(3),o.Q6J("routerLink",o.VKq(8,m,C.cca2)),o.xp6(1),o.hij(" Link ",C.cca2," ")}}let g=(()=>{class d{constructor(){this.paises=[]}ngOnInit(){}}return d.\u0275fac=function(C){return new(C||d)},d.\u0275cmp=o.Xpm({type:d,selectors:[["app-table-country"]],inputs:{paises:"paises"},decls:15,vars:1,consts:[[1,"table","table-hover"],[4,"ngFor","ngForOf"],[1,"small-flag",3,"src"],[3,"routerLink"]],template:function(C,G){1&C&&(o.TgZ(0,"table",0)(1,"thead")(2,"tr")(3,"th"),o._uU(4," #"),o.qZA(),o.TgZ(5,"th"),o._uU(6," Bandera"),o.qZA(),o.TgZ(7,"th"),o._uU(8," Nombre"),o.qZA(),o.TgZ(9,"th"),o._uU(10," Poblacion"),o.qZA(),o.TgZ(11,"th"),o._uU(12," Ver + "),o.qZA()()(),o.TgZ(13,"tbody"),o.YNc(14,p,13,10,"tr",1),o.qZA()()),2&C&&(o.xp6(14),o.Q6J("ngForOf",G.paises))},directives:[V.sg,A.yS],pipes:[V.JJ],styles:[".small-flag[_ngcontent-%COMP%]{width:70px;height:40px}"]}),d})()},3819:(R,O,c)=>{c.d(O,{h:()=>m});var o=c(9808),V=c(9060),A=c(1223);let m=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=A.oAB({type:p}),p.\u0275inj=A.cJS({imports:[[V.Bz,o.ez]]}),p})()},2382:(R,O,c)=>{c.d(O,{Fj:()=>l,u5:()=>bn,JJ:()=>Je,JL:()=>Ke,F:()=>te,On:()=>Ce,_Y:()=>ft});var o=c(1223),V=c(9808),A=c(8306),m=c(4742),p=c(8421),g=c(7669),d=c(5403),M=c(3268),C=c(1810),Fe=c(2076),re=c(4004);let $=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),w=(()=>{class n extends ${}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const D=new o.OlP("NgValueAccessor"),y={provide:D,useExisting:(0,o.Gpc)(()=>l),multi:!0},u=new o.OlP("CompositionEventMode");let l=(()=>{class n extends ${constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function a(){const n=(0,V.q)()?(0,V.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",null==e?"":e)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(u,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([y]),o.qOj]}),n})();const _=new o.OlP("NgValidators"),F=new o.OlP("NgAsyncValidators");function Pe(n){return null!=n}function Ie(n){const t=(0,o.QGY)(n)?(0,Fe.D)(n):n;return(0,o.CqO)(t),t}function Re(n){let t={};return n.forEach(e=>{t=null!=e?Object.assign(Object.assign({},t),e):t}),0===Object.keys(t).length?null:t}function ke(n,t){return t.map(e=>e(n))}function Ue(n){return n.map(t=>function Bt(n){return!n.validate}(t)?t:e=>t.validate(e))}function ie(n){return null!=n?function Le(n){if(!n)return null;const t=n.filter(Pe);return 0==t.length?null:function(e){return Re(ke(e,t))}}(Ue(n)):null}function se(n){return null!=n?function je(n){if(!n)return null;const t=n.filter(Pe);return 0==t.length?null:function(e){return function G(...n){const t=(0,g.jO)(n),{args:e,keys:r}=(0,m.D)(n),i=new A.y(s=>{const{length:f}=e;if(!f)return void s.complete();const E=new Array(f);let T=f,I=f;for(let ne=0;ne<f;ne++){let Oe=!1;(0,p.Xf)(e[ne]).subscribe((0,d.x)(s,En=>{Oe||(Oe=!0,I--),E[ne]=En},()=>T--,void 0,()=>{(!T||!Oe)&&(I||s.next(r?(0,C.n)(r,E):E),s.complete())}))}});return t?i.pipe((0,M.Z)(t)):i}(ke(e,t).map(Ie)).pipe((0,re.U)(Re))}}(Ue(n)):null}function He(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function ae(n){return n?Array.isArray(n)?n:[n]:[]}function q(n,t){return Array.isArray(n)?n.includes(t):n===t}function Ye(n,t){const e=ae(t);return ae(n).forEach(i=>{q(e,i)||e.push(i)}),e}function qe(n,t){return ae(t).filter(e=>!q(n,e))}class ze{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=ie(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=se(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class S extends ze{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class v extends ze{get formDirective(){return null}get path(){return null}}class Ze{constructor(t){this._cd=t}is(t){var e,r,i;return"submitted"===t?!!(null===(e=this._cd)||void 0===e?void 0:e.submitted):!!(null===(i=null===(r=this._cd)||void 0===r?void 0:r.control)||void 0===i?void 0:i[t])}}let Je=(()=>{class n extends Ze{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(S,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[o.qOj]}),n})(),Ke=(()=>{class n extends Ze{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(v,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))("ng-submitted",r.is("submitted"))},features:[o.qOj]}),n})();function U(n,t){ce(n,t),t.valueAccessor.writeValue(n.value),function Lt(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Xe(n,t)})}(n,t),function Ht(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function jt(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Xe(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function Ut(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function K(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function ce(n,t){const e=function $e(n){return n._rawValidators}(n);null!==t.validator?n.setValidators(He(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=function We(n){return n._rawAsyncValidators}(n);null!==t.asyncValidator?n.setAsyncValidators(He(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();K(t._rawValidators,i),K(t._rawAsyncValidators,i)}function Xe(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function fe(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}const L="VALID",X="INVALID",P="PENDING",j="DISABLED";function ge(n){return(ee(n)?n.validators:n)||null}function rt(n){return Array.isArray(n)?ie(n):n||null}function me(n,t){return(ee(t)?t.asyncValidators:n)||null}function ot(n){return Array.isArray(n)?se(n):n||null}function ee(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}const _e=n=>n instanceof ve;function st(n){return(n=>n instanceof ut)(n)?n.value:n.getRawValue()}function at(n,t){const e=_e(n),r=n.controls;if(!(e?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[t])throw new o.vHH(1001,"")}function lt(n,t){_e(n),n._forEachChild((r,i)=>{if(void 0===t[i])throw new o.vHH(1002,"")})}class ye{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=rt(this._rawValidators),this._composedAsyncValidatorFn=ot(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===L}get invalid(){return this.status===X}get pending(){return this.status==P}get disabled(){return this.status===j}get enabled(){return this.status!==j}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=rt(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=ot(t)}addValidators(t){this.setValidators(Ye(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Ye(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(qe(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(qe(t,this._rawAsyncValidators))}hasValidator(t){return q(this._rawValidators,t)}hasAsyncValidator(t){return q(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=P,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=j,this.errors=null,this._forEachChild(r=>{r.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=L,this._forEachChild(r=>{r.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===L||this.status===P)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?j:L}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=P,this._hasOwnPendingAsyncValidator=!0;const e=Ie(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function qt(n,t,e){if(null==t||(Array.isArray(t)||(t=t.split(e)),Array.isArray(t)&&0===t.length))return null;let r=n;return t.forEach(i=>{r=_e(r)?r.controls.hasOwnProperty(i)?r.controls[i]:null:(n=>n instanceof Zt)(r)&&r.at(i)||null}),r}(this,t,".")}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?j:this.errors?X:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(P)?P:this._anyControlsHaveStatus(X)?X:L}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){ee(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class ut extends ye{constructor(t=null,e,r){super(ge(e),me(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ee(e)&&e.initialValueIsDefault&&(this.defaultValue=this._isBoxedValue(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){fe(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){fe(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class ve extends ye{constructor(t,e,r){super(ge(e),me(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){lt(this,t),Object.keys(t).forEach(r=>{at(this,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{this.controls[r]&&this.controls[r].patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=st(e),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const r=this.controls[e];if(this.contains(e)&&t(r))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,r)=>((e.enabled||this.disabled)&&(t[r]=e.value),t))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,s)=>{r=e(r,i,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}}class Zt extends ye{constructor(t,e,r){super(ge(e),me(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[t]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,r={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){lt(this,t),t.forEach((r,i)=>{at(this,i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>st(t))}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_syncPendingControls(){let t=this.controls.reduce((e,r)=>!!r._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,r)=>{t(e,r)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}const Jt={provide:v,useExisting:(0,o.Gpc)(()=>te)},H=(()=>Promise.resolve(null))();let te=(()=>{class n extends v{constructor(e,r){super(),this.submitted=!1,this._directives=new Set,this.ngSubmit=new o.vpe,this.form=new ve({},ie(e),se(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){H.then(()=>{const r=this._findContainer(e.path);e.control=r.registerControl(e.name,e.control),U(e.control,e),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){H.then(()=>{const r=this._findContainer(e.path);r&&r.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){H.then(()=>{const r=this._findContainer(e.path),i=new ve({});(function et(n,t){ce(n,t)})(i,e),r.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){H.then(()=>{const r=this._findContainer(e.path);r&&r.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,r){H.then(()=>{this.form.get(e.path).setValue(r)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,function nt(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this._directives),this.ngSubmit.emit(e),!1}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(_,10),o.Y36(F,10))},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(e,r){1&e&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([Jt]),o.qOj]}),n})();const Qt={provide:S,useExisting:(0,o.Gpc)(()=>Ce)},ht=(()=>Promise.resolve(null))();let Ce=(()=>{class n extends S{constructor(e,r,i,s,f){super(),this._changeDetectorRef=f,this.control=new ut,this._registered=!1,this.update=new o.vpe,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function he(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===l?e=s:function Yt(n){return Object.getPrototypeOf(n.constructor)===w}(s)?r=s:i=s}),i||r||e||null}(0,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){const r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),function de(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){U(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){ht.then(()=>{var r;this.control.setValue(e,{emitViewToModelChange:!1}),null===(r=this._changeDetectorRef)||void 0===r||r.markForCheck()})}_updateDisabled(e){const r=e.isDisabled.currentValue,i=""===r||r&&"false"!==r;ht.then(()=>{var s;i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),null===(s=this._changeDetectorRef)||void 0===s||s.markForCheck()})}_getPath(e){return this._parent?function Z(n,t){return[...t.path,n]}(e,this._parent):[e]}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(v,9),o.Y36(_,10),o.Y36(F,10),o.Y36(D,10),o.Y36(o.sBO,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([Qt]),o.qOj,o.TTD]}),n})(),ft=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})(),gt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})(),Dn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[gt]]}),n})(),bn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[Dn]}),n})()}}]);