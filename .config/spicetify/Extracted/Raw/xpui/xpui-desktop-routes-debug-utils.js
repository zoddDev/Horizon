(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/Oxm":function(e,t,a){e.exports={container:"a10a122a3a9f1c7c1186b97c67aa6477-scss",setting:"_97b41149e6cad9d73d790b94872e4c07-scss",textInput:"d6246c48f288ff392accc6e7e6535d09-scss",buttonDebug:"ab21e7867ae0fc55ef0cde0b6557a1ec-scss"}},"476S":function(e,t,a){e.exports={container:"_8587af534b5e6abc8bd55dd582768fb6-scss",title:"_776a90ea965a54d2874f47da4f84c502-scss"}},"7JuA":function(e){e.exports=JSON.parse('{"en":"English (English)","ar":"العَرَبِيَّة (Arabic)","zh-TW":"中文 (Chinese)","he":"עברית (Hebrew)","hu":"Magyar (Hungarian)","cs":"Čeština (Czech)","de":"Deutsch (German)","es":"Español (Spanish)","es-419":"Español (International Spanish)","fi":"Suomeksi (Finnish)","fr":"Français (French)","fr-CA":"Français Canadien (Canadian French)","el":"Eλληνικά (Greek)","id":"Bahasa Indonesia (Indonesian)","it":"Italiano (Italian)","ja":"日本語 (Japanese)","ms":"Melayu (Malay)","nl":"Nederlands (Dutch)","pl":"Polski (Polish)","pt-BR":"Português do Brasil (Brazilian Portuguese)","ru":"Русский (Russian)","sv":"Svenska (Swedish)","th":"ภาษาไทย (Thai)","tr":"Türkçe (Turkish)","vi":"Tiếng Việt (Vietnamese)"}')},KKaQ:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a("OvAC"),l=a.n(n),s=a("mXGw"),r=a("/m4v"),c=a("/BVi"),o=a("7JuA"),u=a("0QmJ"),i=a("7A1p");function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const p=Object(c.a)(),d=Object.entries(o).map(([e,t])=>({key:e,value:t})),v=[{enumKey:"quiet",enumValue:0},{enumKey:"normal",enumValue:1},{enumKey:"loud",enumValue:2}],g=[{enumKey:"minimized",enumValue:"minimized"},{enumKey:"normal",enumValue:"normal"},{enumKey:"off",enumValue:"off"}],f=["filter-explicit-content","publish-playlist","publish-activity","public-toplist"],E=["incognito-enabled"],O=()=>{const e=Object(r.c)(),t=Object(r.d)(i.f),[a,n]=Object(s.useState)({formats:[],values:{"incognito-enabled":t},languages:d,autoStart:g,loudness:v}),l=Object(s.useCallback)((t,a)=>f.includes(t)?p.put("sp://product-state/v1/values/"+t,a):E.includes(t)?e(Object(u.E)(a)):p.put("sp://prefs/v1",{[t]:a}),[e]);return Object(s.useEffect)(()=>{p.get("sp://playback/v1/formats").then(e=>{const t=[{enumKey:"automatic",enumValue:0,supported:!0},...e.filter(e=>e.supported)].map(e=>b(b({},e),{},{enumKey:e.enumKey.toLocaleLowerCase()}));n(e=>b(b({},e),{},{formats:t}))});const e=p.sub("sp://product-state/v1/values",e=>{n(t=>b(b({},t),{},{values:b(b({},t.values),e)}))}),t=p.sub("sp://scrobble/v1/incognito",e=>{n(t=>b(b({},t),{},{values:b(b({},t.values),{},{"incognito-enabled":e.enabled})}))}),a=p.sub("sp://prefs/v1",e=>{n(t=>b(b({},t),{},{values:b(b({},t.values),e)}))});return()=>{a.cancel(),e.cancel(),t.cancel()}},[]),{settings:a,setValue:l}}},dAEf:function(e,t,a){"use strict";a.r(t),a.d(t,"DebugUtils",(function(){return d}));var n=a("mXGw"),l=a.n(n),s=a("476S"),r=a.n(s),c=a("KKaQ"),o=a("hPDf"),u=a("/BVi");const i=Object(u.a)();window.abba={get:async function(e,t){const a=await i.get("sp://product-state/v1/values");let n={},l="";if(a.abbaOverrides?l=a.abbaOverrides:a.abbaoverrides&&(l=a.abbaoverrides),l)try{n=JSON.parse(l)}catch(e){}Object.prototype.hasOwnProperty.call(n,e)?setTimeout(()=>t(null,n[e]),0):i.post("sp://abba/v1/flags",{flags:[e]}).then(a=>{const{flags:n=[]}=a,l=n[0]&&n[0].featureName===e&&n[0].cell;t(null,l||null)}).catch(e=>{t(e)})},getAll:function(e){i.get("sp://abba/v1/all_flags").then(t=>{const{flags:a=[]}=t,n=a.reduce((e,t)=>(e[t.featureName]=t.cell,e),{});e(null,JSON.stringify(n,null,2))}).catch(t=>{e(t)})},getRequestedFlagNames:function(e){i.get("sp://abba/v1/requested_flag_names").then(t=>{e(null,JSON.stringify(t.sort(),null,2))}).catch(t=>{e(t)})}};var m=a("/Oxm"),b=a.n(m);const p=()=>{const[e,t]=Object(n.useState)(60),[a,s]=Object(n.useState)("stream"),[r,c]=Object(n.useState)("");return l.a.createElement("div",{className:b.a.container},l.a.createElement("h2",null,"Ad Debug"),l.a.createElement("div",{className:b.a.setting},l.a.createElement("p",null,"Stream time (in seconds)"),l.a.createElement("input",{className:b.a.textInput,type:"text",value:e,onChange:e=>{const a=e.target.value;t(a)}}),l.a.createElement("button",{className:b.a.buttonDebug,onClick:()=>{o.a.increaseStreamTime(e)}},"Add time"),l.a.createElement("button",{className:b.a.buttonDebug,onClick:()=>{o.a.increaseStreamTime(1200)}},"Add 20 minutes")),l.a.createElement("div",{className:b.a.setting},l.a.createElement("p",null,"Override Country"),l.a.createElement("select",{value:r,onBlur:()=>{},onChange:e=>{c(e.target.value)}},l.a.createElement("option",{value:"US"},"USA"),l.a.createElement("option",{value:"UK"},"United Kingdom"),l.a.createElement("option",{value:"JP"},"Japan"),l.a.createElement("option",{value:"BR"},"Brasil"),l.a.createElement("option",{value:"AU"},"Australia"),l.a.createElement("option",{value:"SE"},"Sweden"),l.a.createElement("option",{value:""},"Clear Override")),l.a.createElement("button",{className:b.a.buttonDebug,onClick:()=>{o.a.overrideCountry(r)}},"Override")),l.a.createElement("div",{className:b.a.setting},l.a.createElement("p",null,"Clear ad in slot"),l.a.createElement("select",{value:a,onBlur:()=>{},onChange:e=>{s(e.target.value)}},l.a.createElement("option",{value:"stream"},"STREAM"),l.a.createElement("option",{value:"billboard"},"BILLBOARD OVERLAY"),l.a.createElement("option",{value:"promotedsong"},"PROMOTED SONG"),l.a.createElement("option",{value:"hpto"},"HPTO"),l.a.createElement("option",{value:"leaderboard"},"LEADERBOARD")),l.a.createElement("button",{className:b.a.buttonDebug,onClick:()=>{o.a.clearSlot(a)}},"Clear slot"),l.a.createElement("p",null,"Trigger ad in slot"),l.a.createElement("select",{value:a,onBlur:()=>{},onChange:e=>{s(e.target.value)}},l.a.createElement("option",{value:"stream"},"STREAM"),l.a.createElement("option",{value:"billboard"},"BILLBOARD OVERLAY"),l.a.createElement("option",{value:"promotedsong"},"PROMOTED SONG"),l.a.createElement("option",{value:"hpto"},"HPTO"),l.a.createElement("option",{value:"leaderboard"},"LEADERBOARD")),l.a.createElement("button",{className:b.a.buttonDebug,onClick:()=>{o.a.triggerSlot(a)}},"Trigger slot")),l.a.createElement("button",{className:b.a.buttonDebug,onClick:()=>{o.a.queueVideoAd()}},"Queue Video Ad"))},d=()=>{const{settings:e}=Object(c.a)();return e.values["app.enable-developer-mode"]?l.a.createElement("div",{className:r.a.container},l.a.createElement("h1",{className:r.a.title},"Debug Utils"),l.a.createElement(p,null)):null};t.default=d}}]);