if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>n(e,l),a={module:{uri:l},exports:t,require:o};s[l]=Promise.all(i.map((e=>a[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-13d6fed4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/apple-icon-180.5fda0c22.png",revision:null},{url:"assets/hbo-2.9c8018e4.png",revision:null},{url:"assets/icon.d89457dc.png",revision:null},{url:"assets/index.194fc79b.js",revision:null},{url:"assets/index.2883c29e.css",revision:null},{url:"assets/placeholder.1a8352b9.png",revision:null},{url:"assets/TV_grid_sm@3x.b8084df9.png",revision:null},{url:"assets/tv-series.6997956c.webp",revision:null},{url:"assets/vendor.9df06d96.js",revision:null},{url:"index.html",revision:"d61815e0b1347c7cd5f7149bf929bfd5"},{url:"manifest.webmanifest",revision:"cdaaaf9216b05f68a5f011cafc97082c"},{url:"manifest-icon-192.maskable.png",revision:"f54b3c3b38d9672b800ff0b0829f9484"},{url:"manifest-icon-512.maskable.png",revision:"634da22baa871351487bfee0e580d611"},{url:"manifest.webmanifest",revision:"cdaaaf9216b05f68a5f011cafc97082c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute("https://api.tvmaze.com/search/shows?q=${this.names}",new e.NetworkFirst,"GET")}));
