(()=>{var e={};e.id=608,e.ids=[608],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5293:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var n=r(482),s=r(9108),a=r(2563),i=r.n(a),o=r(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["(home)",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9955)),"E:\\react\\nico\\learn-nextjs14\\app\\(home)\\page.tsx"]}]},{loading:[()=>Promise.resolve().then(r.bind(r,3465)),"E:\\react\\nico\\learn-nextjs14\\app\\(home)\\loading.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,331)),"E:\\react\\nico\\learn-nextjs14\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,1429)),"E:\\react\\nico\\learn-nextjs14\\app\\not-found.tsx"]}],c=["E:\\react\\nico\\learn-nextjs14\\app\\(home)\\page.tsx"],u="/(home)/page",x={require:r,loadChunk:()=>Promise.resolve()},m=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/(home)/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3004:(e,t,r)=>{Promise.resolve().then(r.bind(r,2944))},1483:(e,t,r)=>{Promise.resolve().then(r.bind(r,8049))},8245:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},5303:()=>{},2944:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(5344),s=r(6506),a=r(8083),i=r.n(a),o=r(8428);function l({title:e,id:t,poster_path:r}){let a=(0,o.useRouter)();return(0,n.jsxs)("div",{className:i().movie,children:[n.jsx("img",{src:r,alt:e,onClick:()=>{a.push(`/movies/${t}`)}}),n.jsx(s.default,{prefetch:!0,href:`/movies/${t}`,children:e})]})}},8049:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(5344),s=r(6506),a=r(8428),i=r(4392),o=r.n(i);function l(){let e=(0,a.usePathname)();return n.jsx("nav",{className:o().nav,children:(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[n.jsx(s.default,{href:"/",children:"Home"})," ","/"===e?"\uD83D\uDD25":""]}),(0,n.jsxs)("li",{children:[n.jsx(s.default,{href:"/about-us",children:"About Us"})," ","/about-us"===e?"\uD83D\uDD25":""]})]})})}},425:e=>{e.exports={container:"home_container__STkGE"}},8083:e=>{e.exports={movie:"movie_movie__n6Ry2"}},4392:e=>{e.exports={nav:"navigation_nav___kX_6",detailNav:"navigation_detailNav__OVU_s"}},3465:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(5036),s=r(4351);function a(){return n.jsx(s.Z,{})}},9955:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m,metadata:()=>u});var n=r(5036);let s=(0,r(6843).createProxy)(String.raw`E:\react\nico\learn-nextjs14\components\movie.tsx`),{__esModule:a,$$typeof:i}=s,o=s.default;var l=r(425),d=r.n(l),c=r(527);let u={title:"Home"};async function x(){let e=await fetch(c.T);return await e.json()}async function m(){let e=await x();return n.jsx("div",{className:d().container,children:e.map(e=>n.jsx(o,{id:e.id,title:e.title,poster_path:e.poster_path},e.id))})}},527:(e,t,r)=>{"use strict";r.d(t,{T:()=>n});let n="https://nomad-movies.nomadcoders.workers.dev/movies"},331:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d,metadata:()=>l});var n=r(5036);r(6540);let s=(0,r(6843).createProxy)(String.raw`E:\react\nico\learn-nextjs14\components\navgation.tsx`),{__esModule:a,$$typeof:i}=s,o=s.default,l={title:{template:"%s | Next Movies",default:"Next Movies"},description:"The best movies on the best framework"};function d({children:e}){return n.jsx("html",{lang:"en",children:(0,n.jsxs)("body",{children:[n.jsx(o,{}),e]})})}},1429:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,metadata:()=>s});var n=r(5036);let s={title:"Not found"};function a(){return n.jsx("h1",{children:"Not found!"})}},4351:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(5036);function s(){return n.jsx("h2",{children:"Loading"})}},6540:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[532],()=>r(5293));module.exports=n})();