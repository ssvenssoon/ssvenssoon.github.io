if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const t=e=>n(e,r),a={module:{uri:r},exports:o,require:t};s[r]=Promise.all(i.map((e=>a[e]||t(e)))).then((e=>(l(...e),o)))}}define(["./workbox-13d6fed4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/apple-icon-180.5fda0c22.png",revision:null},{url:"assets/hbo-2.9c8018e4.png",revision:null},{url:"assets/icon.d89457dc.png",revision:null},{url:"assets/index.2f7ccd14.js",revision:null},{url:"assets/index.af2e2557.css",revision:null},{url:"assets/logo-1.0cc8292d.jpg",revision:null},{url:"assets/placeholder.1a8352b9.png",revision:null},{url:"assets/TV_grid_sm@3x.b8084df9.png",revision:null},{url:"assets/tv-series.6997956c.webp",revision:null},{url:"assets/vendor.e4e39002.js",revision:null},{url:"index.html",revision:"15e567ce05b0ccd6d5ebd9378e0be86e"},{url:"manifest.webmanifest",revision:"cdaaaf9216b05f68a5f011cafc97082c"},{url:"manifest-icon-192.maskable.png",revision:"f54b3c3b38d9672b800ff0b0829f9484"},{url:"manifest-icon-512.maskable.png",revision:"634da22baa871351487bfee0e580d611"},{url:"manifest.webmanifest",revision:"cdaaaf9216b05f68a5f011cafc97082c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute("https://api.tvmaze.com/search/shows?q=${this.names}",new e.NetworkFirst,"GET")}));
