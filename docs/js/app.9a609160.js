(function(){var e={6565:function(e,r,a){"use strict";var t=a(1076);t.Z.defaults.baseURL="http://localhost:5039/api";let s=localStorage.getItem("authToken");t.Z.defaults.headers.common["Authorization"]=`Bearer ${s}`,r.Z=t.Z},8011:function(e,r,a){"use strict";var t=a(9242),s=(a(560),a(3396)),o=a(7139);const l=[];function u(e){e.keys().forEach((r=>{const a=e(r),t=r.replace("./","").replace(".vue","");l.push({path:`/${t.toLowerCase()}`,name:t,component:a.default||a,meta:a.default.meta||{},viewName:a.default.viewName||t})}))}u(a(4012));var n=l,i=a(4870),d=a(2483),c=a(1013),m=a(7718),f=a(6281),p=a(9156),h=a(9159),v=a(8777),w=a(3140),g=a(9657),_=a(5030),k={__name:"App",setup(e){const r=(0,s.Fl)((()=>localStorage.getItem("authToken")?((0,c.U)().loginByToken(localStorage.getItem("authToken")),n.filter((e=>e.meta.requiresAuth))):n.filter((e=>!e.meta.requiresAuth)))),a=(0,d.tv)(),t=(0,i.iH)(!0),l=e=>{a.push(e)};return(e,a)=>{const u=(0,s.up)("v-list-item-content"),n=(0,s.up)("v-list-item-group"),i=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(m.q,null,{default:(0,s.w5)((()=>[(0,s.Wm)(g.V,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),app:""},{default:(0,s.w5)((()=>[(0,s.Wm)(h.iE,null,{default:(0,s.w5)((()=>[(0,s.Wm)(n,null,{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.value,((e,r)=>((0,s.wg)(),(0,s.j4)(v.l,{key:r,onClick:r=>l(e.path)},{default:(0,s.w5)((()=>[(0,s.Wm)(u,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.viewName),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(f.L,{app:""},{default:(0,s.w5)((()=>[(0,s.Wm)(p.g,{onClick:a[1]||(a[1]=e=>t.value=!t.value)}),(0,s.Wm)(_.q,null,{default:(0,s.w5)((()=>[(0,s.Uk)("Application")])),_:1})])),_:1}),(0,s.Wm)(w.O,null,{default:(0,s.w5)((()=>[(0,s.Wm)(i)])),_:1})])),_:1})}}},W=a(89);const b=(0,W.Z)(k,[["__scopeId","data-v-0a292cff"]]);var M=b,P=(a(9773),a(8324)),y=(0,P.Rd)();async function U(){const e=await a.e(461).then(a.t.bind(a,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}const $=[...n],D=(0,d.p7)({history:(0,d.PO)("/blackjack.console/"),routes:$});var V=D,E=a(1020);U();const q=(0,E.WB)();(0,t.ri)(M).use((0,E.WB)()).use(V).use(y).use(q).mount("#app")},4811:function(e,r,a){"use strict";a.d(r,{D:function(){return o}});var t=a(1020),s=a(6565);const o=(0,t.Q_)("partie",{id:"partie",state:()=>({gainPerDayList:[],partie:null,allGain:0,allMise:0,partieNumber:0,errorMessage:!1}),actions:{createPartie(e){this.$state.errorMessage=!1,s.Z.post("/Partie/add",e,{headers:{"Content-Type":"application/json"}}).then((e=>{e.data.success?(this.$state.errorMessage=!1,this.$state.partie=e.data.partie):e.data.error&&(this.$state.errorMessage=e.data.error,console.error("Erreur lors de la requête API:",e.data.error))})).catch((e=>{e.response&&e.response.data.error?(this.$state.errorMessage=e.response.data.error,console.error("Erreur lors de la requête API:",e.response.data.error)):console.error("Erreur lors de la requête API",e)}))},endPartie(e){this.$state.errorMessage=!1,s.Z.post("/Partie/endPartie",e,{headers:{"Content-Type":"application/json"}}).catch((e=>{e.response&&e.response.data.error?(this.$state.errorMessage=e.response.data.error,console.error("Erreur lors de la requête API:",e.response.data.error)):console.error("Erreur lors de la requête API",e)}))},clearData(){this.$state.partie=null},fetchAllGain(){this.$state.errorMessage=!1,s.Z.get("/Partie/getTotalGain").then((e=>{200===e.status?(this.$state.errorMessage=!1,console.log("response",e),this.$state.allGain=e.data):e.data.error&&(this.$state.errorMessage=e.data.error,console.error("Erreur lors de la requête API:",e.data.error))})).catch((e=>{e.response&&e.response.data.error?(this.$state.errorMessage=e.response.data.error,console.error("Erreur lors de la requête API:",e.response.data.error)):console.error("Erreur lors de la requête API",e)}))},fetchAllMise(){this.$state.errorMessage=!1,s.Z.get("/Partie/getTotalMise").then((e=>{200===e.status?(this.$state.errorMessage=!1,console.log("response",e),this.$state.allMise=e.data):e.data.error&&(this.$state.errorMessage=e.data.error,console.error("Erreur lors de la requête API:",e.data.error))})).catch((e=>{e.response&&e.response.data.error?(this.$state.errorMessage=e.response.data.error,console.error("Erreur lors de la requête API:",e.response.data.error)):console.error("Erreur lors de la requête API",e)}))},fetchGainPerDayList(){this.$state.errorMessage=!1,s.Z.get("/Partie/getGainPerDayList").then((e=>{200===e.status?(this.$state.errorMessage=!1,console.log("response",e),this.$state.gainPerDayList=e.data):e.data.error&&(this.$state.errorMessage=e.data.error,console.error("Erreur lors de la requête API:",e.data.error))})).catch((e=>{e.response&&e.response.data.error?(this.$state.errorMessage=e.response.data.error,console.error("Erreur lors de la requête API:",e.response.data.error)):console.error("Erreur lors de la requête API",e)}))},fetchPartieNumber(){this.$state.errorMessage=!1,s.Z.get("/Partie/countAllPartie").then((e=>{200===e.status?(this.$state.errorMessage=!1,console.log("response",e),this.$state.partieNumber=e.data):e.data.error&&(this.$state.errorMessage=e.data.error,console.error("Erreur lors de la requête API:",e.data.error))})).catch((e=>{e.response&&e.response.data.error?(this.$state.errorMessage=e.response.data.error,console.error("Erreur lors de la requête API:",e.response.data.error)):console.error("Erreur lors de la requête API",e)}))}}})},1013:function(e,r,a){"use strict";a.d(r,{U:function(){return o}});var t=a(1020),s=a(6565);const o=(0,t.Q_)("users",{id:"users",state:()=>({users:[],user:null,errorMessage:!1,succes:!1}),actions:{addUser(e){this.$state.errorMessage=!1,this.$state.succes=!1,s.Z.post("/Joueur/add",e,{headers:{"Content-Type":"application/json"}}).then((e=>{e.data.success?(this.$state.errorMessage=!1,this.$state.succes=!0):e.data.error&&(this.$state.errorMessage=e.data.error,console.error("Erreur lors de la requête API:",e.data.error))})).catch((e=>{e.response&&e.response.data.error?(this.$state.errorMessage=e.response.data.error,console.error("Erreur lors de la requête API:",e.response.data.error)):console.error("Erreur lors de la requête API",e)}))},loginUser(e){this.$state.errorMessage=!1,this.$state.succes=!1,s.Z.post("/Joueur/login",e,{headers:{"Content-Type":"application/json"}}).then((e=>{e.data.success?(localStorage.setItem("authToken",e.data.token),this.$state.errorMessage=!1,this.$state.succes=!0,this.$state.user=e.data.user):e.data.error&&(this.$state.errorMessage=e.data.error,console.error("Erreur lors de la requête API:",e.data.error))})).catch((e=>{e.response&&e.response.data.error?(this.$state.errorMessage=e.response.data.error,console.error("Erreur lors de la requête API:",e.response.data.error)):console.error("Erreur lors de la requête API",e)}))},loginByToken(e){this.$state.errorMessage=!1,s.Z.post(`/Joueur/getByToken?token=${e}`,{token:e}).then((e=>{e.data.success?(this.$state.errorMessage=!1,this.$state.user=e.data.user):e.data.error&&(this.$state.errorMessage=e.data.error,console.error("Erreur lors de la requête API:",e.data.error))})).catch((e=>{e.response&&e.response.data.error?(this.$state.errorMessage=e.response.data.error,console.error("Erreur lors de la requête API:",e.response.data.error)):console.error("Erreur lors de la requête API",e)}))},logout(){this.user=null,localStorage.removeItem("authToken")},UpdateMoney(e){this.$state.errorMessage=!1,this.$state.succes=!1,s.Z.post("/Joueur/UpdateMoney",e,{headers:{"Content-Type":"application/json"}}).then((e=>{e.data.success?(this.$state.errorMessage=!1,this.$state.succes=!0):e.data.error&&(this.$state.errorMessage=e.data.error,console.error("Erreur lors de la requête API:",e.data.error))})).catch((e=>{e.response&&e.response.data.error?(this.$state.errorMessage=e.response.data.error,console.error("Erreur lors de la requête API:",e.response.data.error)):console.error("Erreur lors de la requête API",e)}))}},getters:{isLoggedIn:e=>!!e.user,IdUser:e=>e.user.iD_joueur,getUserMoney:e=>e.user.argent}})},4462:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return g}});var t=a(3396),s=a(7718),o=a(702),l=a(9752),u=a(6572),n=a(1888),i=a(1334),d=a(3369),c=a(3140);const m=e=>((0,t.dD)("data-v-2a564680"),e=e(),(0,t.Cn)(),e),f=m((()=>(0,t._)("h1",null,"Bienvenue sur notre site de Blackjack",-1)));function p(e,r,a,m,p,h){return(0,t.wg)(),(0,t.j4)(s.q,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c.O,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d.K,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l._,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u.E,null,{default:(0,t.w5)((()=>[f])),_:1}),(0,t.Wm)(n.Z,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Ici, vous pouvez jouer au Blackjack en ligne avec des joueurs du monde entier. Amusez-vous! ")])),_:1}),(0,t.Wm)(i.h,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o.T,{color:"primary",to:"/playgame"},{default:(0,t.w5)((()=>[(0,t.Uk)("Jouer maintenant")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var h={meta:{requiresAuth:!0},viewName:"Home"},v=a(89);const w=(0,v.Z)(h,[["render",p],["__scopeId","data-v-2a564680"]]);var g=w},3081:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return h}});var t=a(3396),s=a(702),o=a(9752),l=a(6572),u=a(1888),n=a(6422),i=a(3369),d=a(2013);function c(e,r,a,c,m,f){return(0,t.wg)(),(0,t.j4)(i.K,{fluid:""},{default:(0,t.w5)((()=>[(0,t.Wm)(o._,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l.E,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Détails du compte ")])),_:1}),(0,t.Wm)(u.Z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(n.O,{ref:"form",modelValue:e.valid,"onUpdate:modelValue":r[4]||(r[4]=r=>e.valid=r),"lazy-validation":""},{default:(0,t.w5)((()=>[(0,t.Wm)(d.h,{modelValue:e.user.username,"onUpdate:modelValue":r[0]||(r[0]=r=>e.user.username=r),rules:e.usernameRules,label:"Nom d'utilisateur",required:""},null,8,["modelValue","rules"]),(0,t.Wm)(d.h,{modelValue:e.user.firstName,"onUpdate:modelValue":r[1]||(r[1]=r=>e.user.firstName=r),rules:e.nameRules,label:"Prénom",required:""},null,8,["modelValue","rules"]),(0,t.Wm)(d.h,{modelValue:e.user.lastName,"onUpdate:modelValue":r[2]||(r[2]=r=>e.user.lastName=r),rules:e.nameRules,label:"Nom",required:""},null,8,["modelValue","rules"]),(0,t.Wm)(d.h,{modelValue:e.user.email,"onUpdate:modelValue":r[3]||(r[3]=r=>e.user.email=r),rules:e.emailRules,label:"Email",required:""},null,8,["modelValue","rules"]),(0,t.Wm)(s.T,{onClick:f.submit,disabled:!e.valid},{default:(0,t.w5)((()=>[(0,t.Uk)("Envoyer")])),_:1},8,["onClick","disabled"])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})}var m={meta:{requiresAuth:!0},viewName:"Compte Utilisateur",data:()=>({valid:!0,user:{username:"",firstName:"",lastName:"",email:""},usernameRules:[e=>!!e||"Le nom d'utilisateur est requis",e=>e.length<=15||"Le nom d'utilisateur doit être inférieur à 15 caractères"],nameRules:[e=>!!e||"Le nom est requis",e=>e.length<=50||"Le nom doit être inférieur à 50 caractères"],emailRules:[e=>!!e||"E-mail est requis",e=>/.+@.+/.test(e)||"E-mail doit être valide"]}),methods:{submit(){this.$refs.form.validate()}}},f=a(89);const p=(0,f.Z)(m,[["render",c]]);var h=p},7667:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return b}});var t=a(3396),s=a(7139),o=a(9242),l=a(702),u=a(9752),n=a(6572),i=a(1888),d=a(6422),c=a(3369),m=a(6824),f=a(8521),p=a(9671),h=a(2013);function v(e,r,a,v,w,g){return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(p.v,{modelValue:v.showSnackbar,"onUpdate:modelValue":r[0]||(r[0]=e=>v.showSnackbar=e),color:"error",timeout:3e3,"auto-height":"","multi-line":""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(v.$state.errorMessage),1)])),_:1},8,["modelValue"]),(0,t.Wm)(c.K,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m.o,{justify:"center"},{default:(0,t.w5)((()=>[(0,t.Wm)(f.D,{cols:"12",sm:"8",md:"6"},{default:(0,t.w5)((()=>[(0,t.Wm)(u._,null,{default:(0,t.w5)((()=>[(0,t.Wm)(n.E,{class:"headline"},{default:(0,t.w5)((()=>[(0,t.Uk)("Connexion")])),_:1}),(0,t.Wm)(i.Z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d.O,{ref:"form",modelValue:w.valid,"onUpdate:modelValue":r[4]||(r[4]=e=>w.valid=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(h.h,{modelValue:w.name,"onUpdate:modelValue":r[1]||(r[1]=e=>w.name=e),rules:w.nameRules,label:"Nom d'utilisateur"},null,8,["modelValue","rules"]),(0,t.Wm)(h.h,{modelValue:w.password,"onUpdate:modelValue":r[2]||(r[2]=e=>w.password=e),rules:w.passwordRules,label:"Mot de passe",type:"password"},null,8,["modelValue","rules"]),(0,t.Wm)(l.T,{type:"submit",color:"primary",disabled:!w.valid,onClick:r[3]||(r[3]=(0,o.iM)((e=>v.loginUser({nom:this.name,password:this.password})),["prevent"]))},{default:(0,t.w5)((()=>[(0,t.Uk)("Se connecter ")])),_:1},8,["disabled"])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})],64)}var w=a(1013),g=a(4870),_={viewName:"Se connecter",setup(){const{loginUser:e,$state:r}=(0,w.U)(),a=(0,g.iH)(!1);(0,t.YP)((()=>r.errorMessage),(e=>{a.value=!1!==e,!1===a.value&&(r.errorMessage=a.value)})),(0,t.YP)((()=>r.succes),(e=>{1==e&&(window.location.href="/acceuilsite")}));const s=()=>{a.value=!1,r.errorMessage=!1};return{loginUser:e,showSnackbar:a,$state:r,closeSnackbar:s}},data(){return{valid:!1,name:"",password:"",nameRules:[e=>!!e||"Nom d'utilisateur est nécessaire"],passwordRules:[e=>!!e||"Mot de passe est nécessaire"]}}},k=a(89);const W=(0,k.Z)(_,[["render",v],["__scopeId","data-v-476311a2"]]);var b=W},3488:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return j}});var t=a(3396),s=a(7139),o=a(702),l=a(9752),u=a(6572),n=a(1888),i=a(1334),d=a(4009),c=a(9234),m=a(3369),f=a(6824),p=a(8521),h=a(9671),v=a(2013);const w=(0,t._)("h2",null,"Jeu de Blackjack ",-1),g=(0,t._)("span",{class:"headline"},"Entrez votre mise",-1),_={key:1},k=(0,t._)("h2",null,"Votre main :",-1),W=["src","alt"],b={key:0},M=(0,t._)("h2",null,"Main du croupier :",-1),P=["src","alt"];function y(e,r,a,y,U,$){return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(d.B,{modelValue:y.showWinDialog,"onUpdate:modelValue":r[0]||(r[0]=e=>y.showWinDialog=e),"max-width":"500",persistent:""},{default:(0,t.w5)((()=>[(0,t.Wm)(l._,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u.E,{class:"headline"},{default:(0,t.w5)((()=>[(0,t.Uk)("Félicitations, vous avez gagné !")])),_:1}),(0,t.Wm)(n.Z,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Votre gain est de "+(0,s.zw)(y.potentialGain)+".",1)])),_:1}),(0,t.Wm)(i.h,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c.C),(0,t.Wm)(o.T,{color:"green darken-1",text:"",onClick:y.closeWinDialog},{default:(0,t.w5)((()=>[(0,t.Uk)("Terminer")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(d.B,{modelValue:y.showLoseDialog,"onUpdate:modelValue":r[1]||(r[1]=e=>y.showLoseDialog=e),"max-width":"500",persistent:""},{default:(0,t.w5)((()=>[(0,t.Wm)(l._,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u.E,{class:"headline"},{default:(0,t.w5)((()=>[(0,t.Uk)("Dommage, vous avez perdu !")])),_:1}),(0,t.Wm)(i.h,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c.C),(0,t.Wm)(o.T,{color:"red",text:"",onClick:y.closeLoseDialog},{default:(0,t.w5)((()=>[(0,t.Uk)("Terminer")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(d.B,{modelValue:y.showDrawDialog,"onUpdate:modelValue":r[2]||(r[2]=e=>y.showDrawDialog=e),"max-width":"500",persistent:""},{default:(0,t.w5)((()=>[(0,t.Wm)(l._,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u.E,{class:"headline"},{default:(0,t.w5)((()=>[(0,t.Uk)("Match nul !")])),_:1}),(0,t.Wm)(i.h,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c.C),(0,t.Wm)(o.T,{color:"blue",text:"",onClick:y.closeDrawDialog},{default:(0,t.w5)((()=>[(0,t.Uk)("Terminer")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(m.K,null,{default:(0,t.w5)((()=>[(0,t.Wm)(f.o,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p.D,null,{default:(0,t.w5)((()=>[(0,t._)("h1",null,"Argent disponible : "+(0,s.zw)(y.money),1),(0,t._)("div",null,[w,y.isGameStarted?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(o.T,{key:0,onClick:y.openDialog},{default:(0,t.w5)((()=>[(0,t.Uk)("Jouer")])),_:1},8,["onClick"])),(0,t.Wm)(d.B,{modelValue:y.dialog,"onUpdate:modelValue":r[4]||(r[4]=e=>y.dialog=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(l._,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u.E,null,{default:(0,t.w5)((()=>[g])),_:1}),(0,t.Wm)(n.Z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(v.h,{modelValue:y.bet,"onUpdate:modelValue":r[3]||(r[3]=e=>y.bet=e),label:"Mise",type:"number",rules:[e=>!!e||"Mise requise"]},null,8,["modelValue","rules"]),(0,t._)("p",null,"Gain potentiel : "+(0,s.zw)(y.potentialGain),1)])),_:1}),(0,t.Wm)(i.h,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c.C),(0,t.Wm)(o.T,{color:"green darken-1",text:"",onClick:y.startGameWithBet},{default:(0,t.w5)((()=>[(0,t.Uk)("Commencer le jeu")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),y.isGameStarted?((0,t.wg)(),(0,t.iD)("div",_,[(0,t._)("h2",null,"Votre mise : "+(0,s.zw)(y.bet),1),(0,t._)("h2",null,"Gain potentiel : "+(0,s.zw)(y.potentialGain),1),k,(0,t.Wm)(f.o,null,{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(y.main,((e,r)=>((0,t.wg)(),(0,t.j4)(p.D,{key:r},{default:(0,t.w5)((()=>[(0,t._)("img",{src:e.textCarte,alt:e.valeur},null,8,W)])),_:2},1024)))),128))])),_:1}),(0,t.Wm)(o.T,{onClick:y.hit,class:"mt-5"},{default:(0,t.w5)((()=>[(0,t.Uk)("Hit")])),_:1},8,["onClick"]),(0,t.Wm)(o.T,{onClick:y.stand,class:"mt-5"},{default:(0,t.w5)((()=>[(0,t.Uk)("Stand")])),_:1},8,["onClick"]),(0,t._)("div",null,[(0,t._)("p",null,"Total des points : "+(0,s.zw)(y.points),1)]),y.isStand?((0,t.wg)(),(0,t.iD)("div",b,[M,(0,t.Wm)(f.o,null,{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(y.dealerMains,((e,r)=>((0,t.wg)(),(0,t.j4)(p.D,{key:r},{default:(0,t.w5)((()=>[(0,t._)("img",{src:e.textCarte,alt:e.valeur},null,8,P)])),_:2},1024)))),128))])),_:1}),(0,t._)("div",null,[(0,t._)("p",null,"Total des points du croupier : "+(0,s.zw)(y.dealerPoints),1)])])):(0,t.kq)("",!0)])):(0,t.kq)("",!0)])])),_:1})])),_:1}),(0,t.Wm)(h.v,{modelValue:y.showNotification,"onUpdate:modelValue":r[6]||(r[6]=e=>y.showNotification=e),timeout:3e3,color:"info",right:"",bottom:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(y.notificationMessage)+" ",1),(0,t.Wm)(o.T,{color:"pink",text:"",onClick:r[5]||(r[5]=e=>y.showNotification=!1)},{default:(0,t.w5)((()=>[(0,t.Uk)("Fermer")])),_:1})])),_:1},8,["modelValue"])])),_:1})],64)}var U=a(4870),$=a(4811),D=a(1013),V=(a(560),a(1020)),E=a(6565);const q=(0,V.Q_)("carte",{id:"carte",state:()=>({cartes:[],cartesMain:[],cartesDealers:[],errorMessage:!1}),actions:{CreatePaquet(){this.$state.errorMessage=!1,E.Z.get("/Carte/getAll").then((e=>{e.data.success?(this.$state.errorMessage=!1,this.$state.cartes=e.data.cartes):e.data.error&&(this.$state.errorMessage=e.data.error,console.error("Erreur lors de la requête API:",e.data.error))})).catch((e=>{e.response&&e.response.data.error?(this.$state.errorMessage=e.response.data.error,console.error("Erreur lors de la requête API:",e.response.data.error)):console.error("Erreur lors de la requête API",e)}))},Hit(e){this.$state.errorMessage=!1,E.Z.post("/Carte/Hit",e,{headers:{"Content-Type":"application/json"}}).then((e=>{e.data.success?(this.$state.errorMessage=!1,this.$state.cartes=e.data.cartes,this.$state.cartesMain.push(e.data.carte)):e.data.error&&(this.$state.errorMessage=e.data.error,console.error("Erreur lors de la requête API:",e.data.error))})).catch((e=>{e.response&&e.response.data.error?(this.$state.errorMessage=e.response.data.error,console.error("Erreur lors de la requête API:",e.response.data.error)):console.error("Erreur lors de la requête API",e)}))},dealerHit(e){this.$state.errorMessage=!1,E.Z.post("/Carte/Hit",e,{headers:{"Content-Type":"application/json"}}).then((e=>{e.data.success?(this.$state.errorMessage=!1,this.$state.cartes=e.data.cartes,this.$state.cartesDealers.push(e.data.carte)):e.data.error&&(this.$state.errorMessage=e.data.error,console.error("Erreur lors de la requête API:",e.data.error))})).catch((e=>{e.response&&e.response.data.error?(this.$state.errorMessage=e.response.data.error,console.error("Erreur lors de la requête API:",e.response.data.error)):console.error("Erreur lors de la requête API",e)}))},clearData(){this.$state.cartes=[],this.$state.cartesMain=[],this.$state.cartesDealers=[]}},getters:{getCartes:e=>e.cartes,getMain:e=>e.cartesMain,getDealerMain:e=>e.cartesDealers}});var A={meta:{requiresAuth:!0},viewName:"Jouer",setup(){const e=(0,D.U)(),r=q(),a=(0,$.D)(),s=(0,U.iH)(0),o=(0,U.iH)(!1),l=(0,U.iH)(!1),u=(0,U.iH)(!1),n=(0,U.iH)(!1),i=(0,U.iH)(!1);let d=(0,U.iH)(null);const c=(0,U.iH)(!1),m=()=>{u.value=!1,r.clearData(),l.value=!1},f=()=>{n.value=!1,r.clearData(),l.value=!1},p=()=>{i.value=!1,r.clearData(),l.value=!1},h=(0,t.Fl)((()=>{const e=r.getCartes;return Boolean(e&&Object.keys(e).length)})),v=(0,t.Fl)((()=>r.getCartes)),w=(0,t.Fl)((()=>r.getMain)),g=(0,t.Fl)((()=>r.getDealerMain)),_=(0,t.Fl)((()=>{let e=w.value.reduce(((e,r)=>e+(r.valeur>=10?10:r.valeur)),0);const r=w.value.filter((e=>1===e.valeur)).length;return e<21&&(e+=10*r),e>21&&(e-=10*r),e>=21&&j(),e})),k=(0,t.Fl)((()=>{let e=g.value.reduce(((e,r)=>e+(r.valeur>=10?10:r.valeur)),0);const r=g.value.filter((e=>1===e.valeur)).length;return e<21&&(e+=10*r),e>21&&(e-=10*r),e})),W=(0,t.Fl)((()=>_.value>=21)),b=()=>{q().Hit(v.value)},M=e=>2.5*e,P=(0,t.Fl)((()=>M(s.value))),y=(0,U.iH)(!1),V=(0,U.iH)(""),E=()=>{if(c.value=!1,s.value<=0)alert("Entrez une mise valide");else{r.clearData(),o.value=!1;const l=e.IdUser;var a=e.user;if(a.argent-=s.value,a.argent<0)alert("vous n avez pas assé d argent pour miser cette somme");else{var t={mise:s.value,iD_joueur:l,resultat:"waiting"};e.UpdateMoney(a),(0,$.D)().createPartie(t),r.CreatePaquet()}}},A=()=>{o.value=!0},C=async()=>{do{await r.dealerHit(v.value),await new Promise((e=>setTimeout(e,1e3)))}while(k.value<17);j(k.value)},I=()=>{l.value=!0,C()},j=r=>{let t;switch(!0){case 21===_.value:t="win",V.value="Vous avez eu le Blackjack !",u.value=!0;break;case r>21:t="win",V.value="le croupier a depassé 21 vous gagner",u.value=!0;break;case r<_.value:t="win",V.value="le croupier a fait moins de points que vous, vous gagnez",u.value=!0;break;case _.value>21:t="Loose",V.value="Vous avez dépassé 21 et vous avez perdu.",n.value=!0;break;case r>_.value&&r<=21:t="Loose",V.value="Le croupier a une meilleure main que vous, vous perdez",n.value=!0;break;case _.value===r:t="Draw",V.value="Égalité",i.value=!0;break;default:break}const o=e.IdUser,l={ID_partie:a.partie.iD_partie,Resultat:t,Mise:s.value,ID_joueur:o};var d=e.user;if("win"==t?d.argent+=2.5*s.value:"Draw"==t&&(d.argent+=1*s.value),l.Resultat){if(c.value)return;c.value=!0,e.UpdateMoney(d),a.endPartie(l)}y.value=!0,setTimeout((()=>y.value=!1),3e3)};return(0,t.m0)((async()=>{d.value=await e.getUserMoney})),{bet:s,dialog:o,potentialGain:P,startGameWithBet:E,openDialog:A,isGameStarted:h,hit:b,cartes:v,main:w,points:_,isGameOver:W,announceResult:j,showNotification:y,showLoseDialog:n,showDrawDialog:i,closeLoseDialog:f,closeDrawDialog:p,notificationMessage:V,stand:I,isStand:l,dealerMains:g,dealerPoints:k,showWinDialog:u,closeWinDialog:m,money:d}}},C=a(89);const I=(0,C.Z)(A,[["render",y]]);var j=I},3420:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return b}});var t=a(3396),s=a(7139),o=a(9242),l=a(702),u=a(9752),n=a(6572),i=a(1888),d=a(6422),c=a(3369),m=a(6824),f=a(8521),p=a(9671),h=a(2013);function v(e,r,a,v,w,g){return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(p.v,{modelValue:v.showSnackbar,"onUpdate:modelValue":r[0]||(r[0]=e=>v.showSnackbar=e),color:"error",timeout:3e3,"auto-height":"","multi-line":""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(v.$state.errorMessage),1)])),_:1},8,["modelValue"]),(0,t.Wm)(c.K,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m.o,{justify:"center"},{default:(0,t.w5)((()=>[(0,t.Wm)(f.D,{cols:"12",sm:"8",md:"6"},{default:(0,t.w5)((()=>[(0,t.Wm)(u._,null,{default:(0,t.w5)((()=>[(0,t.Wm)(n.E,{class:"headline"},{default:(0,t.w5)((()=>[(0,t.Uk)("Inscription")])),_:1}),(0,t.Wm)(i.Z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d.O,{ref:"form",modelValue:w.valid,"onUpdate:modelValue":r[5]||(r[5]=e=>w.valid=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(h.h,{modelValue:w.name,"onUpdate:modelValue":r[1]||(r[1]=e=>w.name=e),rules:w.nameRules,label:"Nom d'utilisateur"},null,8,["modelValue","rules"]),(0,t.Wm)(h.h,{modelValue:w.password,"onUpdate:modelValue":r[2]||(r[2]=e=>w.password=e),rules:w.passwordRules,label:"Mot de passe",type:"password"},null,8,["modelValue","rules"]),(0,t.Wm)(h.h,{modelValue:w.confirmPassword,"onUpdate:modelValue":r[3]||(r[3]=e=>w.confirmPassword=e),rules:w.confirmPasswordRules,label:"Confirmez le mot de passe",type:"password"},null,8,["modelValue","rules"]),(0,t.Wm)(l.T,{type:"submit",color:"primary",disabled:!w.valid,onClick:r[4]||(r[4]=(0,o.iM)((e=>v.addUser({nom:this.name,password:this.password})),["prevent"]))},{default:(0,t.w5)((()=>[(0,t.Uk)("S'inscrire ")])),_:1},8,["disabled"])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})],64)}var w=a(1013),g=a(4870),_={viewName:"S'inscrire",setup(){const{addUser:e,$state:r}=(0,w.U)(),a=(0,g.iH)(!1);(0,t.YP)((()=>r.errorMessage),(e=>{a.value=!1!==e,0==a.value&&(r.errorMessage=a.value)}));const s=()=>{a.value=!1,r.errorMessage=!1};return{addUser:e,showSnackbar:a,$state:r,closeSnackbar:s}},data(){return{valid:!1,user:{},name:"",password:"",confirmPassword:"",nameRules:[e=>!!e||"Nom d'utilisateur est nécessaire"],passwordRules:[e=>!!e||"Mot de passe est nécessaire"],confirmPasswordRules:[]}},created(){this.confirmPasswordRules=[e=>!!e||"Confirmation du mot de passe est nécessaire",e=>e===this.password||"Les mots de passe ne correspondent pas"]},methods:{}},k=a(89);const W=(0,k.Z)(_,[["render",v],["__scopeId","data-v-98fecb24"]]);var b=W},6372:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return k}});var t=a(3396),s=a(7139),o=a(4870),l=a(4811),u=a(9752),n=a(6572),i=a(1332),d=a(1888),c=a(3369),m=a(6824),f=a(8521),p=a(4286),h=a(6225);const v={meta:{requiresAuth:!0},viewName:"Statistique Général"};var w=Object.assign(v,{__name:"StatistiqueView",setup(e){const r=(0,l.D)(),a=(0,o.iH)(0),v=(0,o.iH)(0),w=(0,o.iH)([]),g=(0,o.iH)([]),_=(0,o.iH)(0),k=async()=>{try{await r.fetchAllGain(),await r.fetchAllMise(),await r.fetchGainPerDayList(),await r.fetchPartieNumber(),_.value=r.partieNumber,a.value=r.allGain,v.value=r.allMise,w.value=r.gainPerDayList.map((e=>e.date)),g.value=r.gainPerDayList.map((e=>e.gainDuCasino))}catch(e){console.error("Erreur lors de la récupération des données :",e)}};return(0,t.bv)((()=>{k()})),(0,t.YP)((()=>r.allGain),(e=>{a.value=e})),(0,t.YP)((()=>r.allMise),(e=>{v.value=e})),(0,t.YP)((()=>r.partieNumber),(e=>{_.value=e})),(0,t.YP)((()=>r.gainPerDayList),(e=>{w.value=e.map((e=>e.date)),g.value=e.map((e=>e.gainDuCasino))}),{immediate:!0}),(e,r)=>((0,t.wg)(),(0,t.j4)(c.K,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u._,null,{default:(0,t.w5)((()=>[(0,t.Wm)(n.E,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Statistiques des Joueurs ")])),_:1}),(0,t.Wm)(i.Q,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Total Gagné et Total Misé ")])),_:1}),(0,t.Wm)(d.Z,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m.o,null,{default:(0,t.w5)((()=>[(0,t.Wm)(f.D,{cols:"12",sm:"6"},{default:(0,t.w5)((()=>[(0,t.Wm)(u._,{class:"mb-4"},{default:(0,t.w5)((()=>[(0,t.Wm)(n.E,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Gain des joueurs")])),_:1}),(0,t.Wm)(i.Q,{class:"text-h5 font-weight-bold"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(a.value),1)])),_:1})])),_:1})])),_:1}),(0,t.Wm)(f.D,{cols:"12",sm:"6"},{default:(0,t.w5)((()=>[(0,t.Wm)(u._,{class:"mb-4"},{default:(0,t.w5)((()=>[(0,t.Wm)(n.E,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Mise des joueurs")])),_:1}),(0,t.Wm)(i.Q,{class:"text-h5 font-weight-bold"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(v.value),1)])),_:1})])),_:1})])),_:1}),(0,t.Wm)(f.D,{cols:"12",sm:"6"},{default:(0,t.w5)((()=>[(0,t.Wm)(u._,{class:"mb-4"},{default:(0,t.w5)((()=>[(0,t.Wm)(n.E,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Bénéfice du Casino")])),_:1}),(0,t.Wm)(i.Q,{class:"text-h5 font-weight-bold"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(v.value-a.value),1)])),_:1})])),_:1})])),_:1}),(0,t.Wm)(f.D,{cols:"12",sm:"6"},{default:(0,t.w5)((()=>[(0,t.Wm)(u._,{class:"mb-4"},{default:(0,t.w5)((()=>[(0,t.Wm)(n.E,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Nombre de partie")])),_:1}),(0,t.Wm)(i.Q,{class:"text-h5 font-weight-bold"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(_.value),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(p.C,{class:"v-sheet--offset mx-auto my-8",color:"cyan",elevation:"12","max-width":"calc(100% - 32px)",rounded:"lg"},{default:(0,t.w5)((()=>[(0,t.Wm)(h.T,{labels:w.value,"model-value":g.value,color:"white","line-width":"2",padding:"16",class:"sparkline-graph","auto-draw":""},null,8,["labels","model-value"])])),_:1})])),_:1}))}}),g=a(89);const _=(0,g.Z)(w,[["__scopeId","data-v-063b04df"]]);var k=_},4012:function(e,r,a){var t={"./AcceuilSite.vue":4462,"./AcountUser.vue":3081,"./LoginUser.vue":7667,"./PlayGame.vue":3488,"./RegisterUser.vue":3420,"./StatistiqueView.vue":6372};function s(e){var r=o(e);return a(r)}function o(e){if(!a.o(t,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t[e]}s.keys=function(){return Object.keys(t)},s.resolve=o,e.exports=s,s.id=4012}},r={};function a(t){var s=r[t];if(void 0!==s)return s.exports;var o=r[t]={exports:{}};return e[t].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(r,t,s,o){if(!t){var l=1/0;for(d=0;d<e.length;d++){t=e[d][0],s=e[d][1],o=e[d][2];for(var u=!0,n=0;n<t.length;n++)(!1&o||l>=o)&&Object.keys(a.O).every((function(e){return a.O[e](t[n])}))?t.splice(n--,1):(u=!1,o<l&&(l=o));if(u){e.splice(d--,1);var i=s();void 0!==i&&(r=i)}}return r}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[t,s,o]}}(),function(){a.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(r,{a:r}),r}}(),function(){var e,r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};a.t=function(t,s){if(1&s&&(t=this(t)),8&s)return t;if("object"===typeof t&&t){if(4&s&&t.__esModule)return t;if(16&s&&"function"===typeof t.then)return t}var o=Object.create(null);a.r(o);var l={};e=e||[null,r({}),r([]),r(r)];for(var u=2&s&&t;"object"==typeof u&&!~e.indexOf(u);u=r(u))Object.getOwnPropertyNames(u).forEach((function(e){l[e]=function(){return t[e]}}));return l["default"]=function(){return t},a.d(o,l),o}}(),function(){a.d=function(e,r){for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(r,t){return a.f[t](e,r),r}),[]))}}(),function(){a.u=function(e){return"js/webfontloader.299f0267.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={},r="blackjack.console:";a.l=function(t,s,o,l){if(e[t])e[t].push(s);else{var u,n;if(void 0!==o)for(var i=document.getElementsByTagName("script"),d=0;d<i.length;d++){var c=i[d];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==r+o){u=c;break}}u||(n=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.setAttribute("data-webpack",r+o),u.src=t),e[t]=[s];var m=function(r,a){u.onerror=u.onload=null,clearTimeout(f);var s=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),s&&s.forEach((function(e){return e(a)})),r)return r(a)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=m.bind(null,u.onerror),u.onload=m.bind(null,u.onload),n&&document.head.appendChild(u)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/blackjack.console/"}(),function(){var e={143:0};a.f.j=function(r,t){var s=a.o(e,r)?e[r]:void 0;if(0!==s)if(s)t.push(s[2]);else{var o=new Promise((function(a,t){s=e[r]=[a,t]}));t.push(s[2]=o);var l=a.p+a.u(r),u=new Error,n=function(t){if(a.o(e,r)&&(s=e[r],0!==s&&(e[r]=void 0),s)){var o=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;u.message="Loading chunk "+r+" failed.\n("+o+": "+l+")",u.name="ChunkLoadError",u.type=o,u.request=l,s[1](u)}};a.l(l,n,"chunk-"+r,r)}},a.O.j=function(r){return 0===e[r]};var r=function(r,t){var s,o,l=t[0],u=t[1],n=t[2],i=0;if(l.some((function(r){return 0!==e[r]}))){for(s in u)a.o(u,s)&&(a.m[s]=u[s]);if(n)var d=n(a)}for(r&&r(t);i<l.length;i++)o=l[i],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},t=self["webpackChunkblackjack_console"]=self["webpackChunkblackjack_console"]||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var t=a.O(void 0,[998],(function(){return a(8011)}));t=a.O(t)})();
//# sourceMappingURL=app.9a609160.js.map