(()=>{var e={};e.id=608,e.ids=[608],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5293:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var r=n(482),s=n(9108),a=n(2563),i=n.n(a),o=n(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);n.d(t,l);let d=["",{children:["(home)",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,9955)),"E:\\react\\nico\\learn-nextjs14\\app\\(home)\\page.tsx"]}]},{loading:[()=>Promise.resolve().then(n.bind(n,3465)),"E:\\react\\nico\\learn-nextjs14\\app\\(home)\\loading.tsx"]}]},{layout:[()=>Promise.resolve().then(n.bind(n,2917)),"E:\\react\\nico\\learn-nextjs14\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(n.bind(n,1429)),"E:\\react\\nico\\learn-nextjs14\\app\\not-found.tsx"]}],c=["E:\\react\\nico\\learn-nextjs14\\app\\(home)\\page.tsx"],u="/(home)/page",m={require:n,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/(home)/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3004:(e,t,n)=>{Promise.resolve().then(n.bind(n,2944))},720:(e,t,n)=>{Promise.resolve().then(n.bind(n,8049)),Promise.resolve().then(n.bind(n,8354))},8245:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,2583,23)),Promise.resolve().then(n.t.bind(n,6840,23)),Promise.resolve().then(n.t.bind(n,8771,23)),Promise.resolve().then(n.t.bind(n,3225,23)),Promise.resolve().then(n.t.bind(n,9295,23)),Promise.resolve().then(n.t.bind(n,3982,23))},9158:(e,t,n)=>{Promise.resolve().then(n.bind(n,8354))},5303:()=>{},2944:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(5344),s=n(6506),a=n(8083),i=n.n(a),o=n(8428);function l({title:e,id:t,poster_path:n}){let a=(0,o.useRouter)();return(0,r.jsxs)("div",{className:i().movie,children:[r.jsx("img",{src:n,alt:e,onClick:()=>{if(!a)return r.jsx("p",{children:"Loading..."});a.push(`/movies/${t}`)}}),r.jsx(s.default,{href:`/movies/${t}`,children:e})]})}},8049:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(5344),s=n(6506),a=n(8428),i=n(4392),o=n.n(i);function l(){let e=(0,a.usePathname)();return r.jsx("nav",{className:o().nav,children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[r.jsx(s.default,{href:"/",children:"Home"})," ","/"===e?"\uD83D\uDD25":""]}),(0,r.jsxs)("li",{children:[r.jsx(s.default,{href:"/about-us",children:"About Us"})," ","/about-us"===e?"\uD83D\uDD25":""]})]})})}},425:e=>{e.exports={container:"home_container__STkGE"}},8083:e=>{e.exports={movie:"movie_movie__n6Ry2"}},4392:e=>{e.exports={nav:"navigation_nav___kX_6",detailNav:"navigation_detailNav__OVU_s"}},3465:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var r=n(5036);let s=(0,n(970).default)(()=>n.e(351).then(n.bind(n,4351)),{loadableGenerated:{modules:["E:\\react\\nico\\learn-nextjs14\\app\\(home)\\loading.tsx -> ../../components/Loading"]},ssr:!1});function a(){return r.jsx(s,{})}},9955:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x,dynamic:()=>u,metadata:()=>m});var r=n(5036),s=n(425),a=n.n(s),i=n(6450);let o=(0,n(6843).createProxy)(String.raw`E:\react\nico\learn-nextjs14\components\movie.tsx`),{__esModule:l,$$typeof:d}=o,c=o.default,u="force-dynamic",m={title:"Home"};async function p(){let e=await fetch(i.T);return await e.json()}async function x(){let e=await p();return r.jsx("div",{className:a().container,children:e.map(e=>r.jsx(c,{id:e.id,title:e.title,poster_path:e.poster_path},e.id))})}},2917:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i,metadata:()=>a});var r=n(5036);n(6540);let s=(0,n(970).default)(()=>n.e(751).then(n.bind(n,6751)),{loadableGenerated:{modules:["E:\\react\\nico\\learn-nextjs14\\app\\layout.tsx -> ../components/navgation"]},ssr:!1}),a={title:{template:"%s | Next Movies",default:"Next Movies"},description:"The best movies on the best framework"};function i({children:e}){return r.jsx("html",{lang:"en",children:(0,r.jsxs)("body",{children:[r.jsx(s,{}),e]})})}},1429:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a,metadata:()=>s});var r=n(5036);let s={title:"Not found"};function a(){return r.jsx("h1",{children:"Not found!"})}},6450:(e,t,n)=>{"use strict";n.d(t,{T:()=>r});let r="https://nomad-movies.nomadcoders.workers.dev/movies"},6540:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[440],()=>n(5293));module.exports=r})();