(window.webpackJsonp=window.webpackJsonp||[]).push([[5,8,10],{392:function(t,e,o){var content=o(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("6e29be0e",content,!0,{sourceMap:!1})},393:function(t,e,o){var content=o(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("1873969c",content,!0,{sourceMap:!1})},398:function(t,e,o){"use strict";o.r(e);var r={data:()=>({scrollLight:0}),methods:{scrollTo(t){setTimeout((()=>{this.$gsap.to(window,{duration:.56,top:250,scrollTo:"#"+t})}),50)}},computed:{navLight:()=>window.screenY},mounted(){window.addEventListener("scroll",(()=>{var t=window.scrollY;document.querySelectorAll(".section").forEach(((e,i)=>{e.offsetTop-230<=t&&document.querySelectorAll(".nav__item").forEach((t=>{t.classList.contains("is-active")&&t.classList.remove("is-active"),document.querySelectorAll(".nav__item")[i].classList.add("is-active")}))}))}))}},n=(o(402),o(4)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"nav mt-64"},[e("ul",{staticClass:"nav__list"},[e("li",[e("div",{staticClass:"nav__item transition-all flex --align-center --gap-16",on:{click:function(e){return t.scrollTo("about")}}},[e("span",{staticClass:"nav__item-indicator transition-all"}),t._v(" "),e("span",{staticClass:"nav__item-text transition-all"},[t._v("обо мне")])])]),t._v(" "),e("li",[e("div",{staticClass:"nav__item transition-all flex --align-center --gap-16",on:{click:function(e){return t.scrollTo("exp")}}},[e("span",{staticClass:"nav__item-indicator transition-all"}),t._v(" "),e("span",{staticClass:"nav__item-text transition-all"},[t._v("опыт")])])]),t._v(" "),e("li",[e("div",{staticClass:"nav__item transition-all flex --align-center --gap-16",on:{click:function(e){return t.scrollTo("projects")}}},[e("span",{staticClass:"nav__item-indicator transition-all"}),t._v(" "),e("span",{staticClass:"nav__item-text transition-all"},[t._v("проекты")])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:o(398).default})},401:function(t,e,o){var content=o(413);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("340cb195",content,!0,{sourceMap:!1})},402:function(t,e,o){"use strict";o(392)},403:function(t,e,o){var r=o(31)((function(i){return i[1]}));r.push([t.i,".nav__item{cursor:pointer;padding-bottom:.875rem;padding-top:.875rem}.nav__item-indicator{background-color:#64748b;height:1px;transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);width:2rem}.nav__item-text{color:#64748b;font-size:.75rem;font-weight:700;text-transform:uppercase}.nav__item:hover .nav__item-text{color:var(--color__white)}.nav__item.is-active .nav__item-indicator,.nav__item:hover .nav__item-indicator{background-color:var(--color__white);width:4rem}.nav__item.is-active .nav__item-text{color:var(--color__white)}@media screen and (max-width:991px){.nav{display:none}}",""]),r.locals={},t.exports=r},404:function(t,e,o){"use strict";o(393)},405:function(t,e,o){var r=o(31)((function(i){return i[1]}));r.push([t.i,".header__socials{gap:1.25rem}.header__social{color:var(--color__white-opacity);display:block;height:1.75rem;position:relative;transition:all .3s ease;width:1.75rem}.header__social svg{height:100%;left:0;-o-object-fit:contain;object-fit:contain;position:absolute;top:0;width:100%}.header__social:hover{color:var(--color__white);transition:all .3s ease}",""]),r.locals={},t.exports=r},410:function(t,e,o){"use strict";o.r(e);var r={},n=(o(412),o(4)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"header py-80 flex --direction-column --just-space --align-stretch --nowrap"},[e("div",{staticClass:"header__side --top"},[e("a",{staticClass:"header__title",attrs:{href:"/"}},[t._v("Миша Романов")]),t._v(" "),e("h2",{staticClass:"header__subtitle"},[t._v("Frontend разработчик")]),t._v(" "),e("a",{staticClass:"header__download flex --align-center --gap-4 mt-16",attrs:{href:"https://drive.google.com/file/d/13k46G0f3aeI4iHbwmOft-LzBbsMUyORb/view?usp=sharing",target:"_blank"}},[e("span",{staticClass:"header__download-text transition-all"},[t._v("Cкачать резюме")]),t._v(" "),e("span",{staticClass:"header__download-thumb transition-all"},[e("svg",{staticClass:"ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z","clip-rule":"evenodd"}})])])]),t._v(" "),e("Nav",{staticClass:"header__nav"})],1),t._v(" "),e("div",{staticClass:"header__side --bott"},[e("Socials",{staticClass:"mt-24"})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:o(398).default,Socials:o(411).default,Header:o(410).default})},411:function(t,e,o){"use strict";o.r(e);var r={},n=(o(404),o(4)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"header__socials flex --align-center"},[e("a",{staticClass:"header__social",attrs:{target:"_blank",href:"https://github.com/RomanovMichael"}},[e("svg",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"}})])]),t._v(" "),e("a",{staticClass:"header__social",attrs:{target:"_blank",href:"https://vk.com/id143368521"}},[e("svg",{attrs:{"enable-background":"new 0 0 100 100",stroke:"currentColor",fill:"currentColor",version:"1.1",viewBox:"0 0 100 100",width:"100px","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("path",{attrs:{d:"M50,3.84C24.506,3.84,3.84,24.506,3.84,50S24.506,96.16,50,96.16S96.16,75.494,96.16,50S75.494,3.84,50,3.84  z M74.808,67.517c-1.97,1.232-9.975,1.599-11.913,0.191c-1.063-0.772-2.035-1.738-2.958-2.658c-0.646-0.643-1.379-0.955-1.934-1.653  c-0.453-0.571-0.764-1.245-1.241-1.809c-0.805-0.946-2.044-1.751-3.024-0.595c-1.476,1.739,0.232,5.154-1.736,6.453  c-0.66,0.436-1.326,0.562-2.151,0.5l-1.827,0.083c-1.073,0.021-2.773,0.031-3.994-0.189c-1.362-0.246-2.487-0.99-3.719-1.536  c-2.338-1.037-4.565-2.45-6.26-4.407c-4.613-5.33-10.809-12.66-13.216-19.361c-0.495-1.377-1.803-4.104-0.563-5.285  c1.686-1.225,9.961-1.57,11.252,0.324c0.524,0.77,0.855,1.896,1.226,2.769c0.462,1.088,0.712,2.113,1.434,3.076  c0.639,0.854,1.11,1.713,1.604,2.649c0.555,1.051,1.079,2.059,1.754,3.026c0.458,0.658,1.669,1.967,2.434,2.064  c1.868,0.239,1.752-4.3,1.613-5.408c-0.133-1.068-0.167-2.201-0.132-3.284c0.03-0.924,0.113-2.226-0.434-2.98  c-0.892-1.23-2.879-0.31-3.034-1.963c0.328-0.469,0.259-0.885,2.45-1.607c1.726-0.567,2.841-0.549,3.979-0.458  c2.32,0.186,4.78-0.442,7.02,0.31c2.14,0.721,1.809,3.762,1.737,5.584c-0.097,2.487,0.007,4.915,0,7.44  c-0.003,1.149-0.049,2.268,1.353,2.174c1.314-0.087,1.448-1.193,2.075-2.105c0.872-1.272,1.673-2.562,2.561-3.829  c1.197-1.713,1.559-3.638,2.686-5.393c0.403-0.627,0.75-1.963,1.371-2.459c0.47-0.377,1.363-0.18,1.932-0.18h1.353  c1.035,0,2.091-0.008,3.155,0.029c1.532,0.053,3.248-0.299,4.767-0.084c6.555,0.925-8.239,14.938-7.469,17.44  c0.532,1.728,3.907,3.659,5.125,5.074C73.701,61.345,78.679,65.092,74.808,67.517z",stroke:"currentColor",fill:"currentColor"}})])]),t._v(" "),e("a",{staticClass:"header__social",attrs:{target:"_blank",href:"https://t.me/misha_romanov"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",fill:"currentColor",viewBox:"0 0 50 50"}},[e("path",{attrs:{d:"M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375\tc0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219\tc-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966\tc0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693\tc0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351\tc0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"}})])])])}),[],!1,null,null,null);e.default=component.exports},412:function(t,e,o){"use strict";o(401)},413:function(t,e,o){var r=o(31)((function(i){return i[1]}));r.push([t.i,".header{color:var(--color__white);flex-shrink:0;max-height:100vh;position:sticky;top:0;z-index:1}.header__title{color:inherit;font-size:3rem;font-weight:700}.header__subtitle{color:inherit;font-size:1.25rem;line-height:1.75rem;margin-top:.75rem}.header__desc{color:var(--color__white-opacity);font-size:1.125rem;margin:0;max-width:20rem}.header__download-text{border-bottom:1px solid transparent;color:var(--color__white);font-size:.875rem;font-weight:550;line-height:1.25rem;opacity:.4}.header__download:hover .header__download-text{border-color:var(--color__green);opacity:1}.header__download-thumb{color:var(--color__white);height:1rem;opacity:.4;position:relative;width:1rem}.header__download-thumb svg{height:100%;left:0;position:absolute;top:0;width:100%}.header__download:hover .header__download-thumb{opacity:1;transform:translateX(20%)}@media screen and (max-width:991px){.header{padding-bottom:0!important;position:relative}}@media screen and (max-width:640px){.header__title{font-size:2rem;line-height:2.5rem}.header__subtitle{font-size:1.125rem;margin-top:0!important}}",""]),r.locals={},t.exports=r}}]);