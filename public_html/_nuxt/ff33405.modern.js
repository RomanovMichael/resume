(window.webpackJsonp=window.webpackJsonp||[]).push([[7,10,13],{391:function(t,e,o){var content=o(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("6e29be0e",content,!0,{sourceMap:!1})},392:function(t,e,o){var content=o(404);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("1873969c",content,!0,{sourceMap:!1})},397:function(t,e,o){"use strict";o.r(e);var r={data:()=>({scrollLight:0}),methods:{scrollTo(t){setTimeout((()=>{this.$gsap.to(window,{duration:.56,top:250,scrollTo:"#"+t})}),50)}},computed:{navLight:()=>window.screenY},mounted(){window.addEventListener("scroll",(()=>{var t=window.scrollY;document.querySelectorAll(".section").forEach(((e,i)=>{e.offsetTop-230<=t&&document.querySelectorAll(".nav__item").forEach((t=>{t.classList.contains("is-active")&&t.classList.remove("is-active"),document.querySelectorAll(".nav__item")[i].classList.add("is-active")}))}))}))}},n=(o(401),o(4)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"nav mt-64"},[e("ul",{staticClass:"nav__list"},[e("li",[e("div",{staticClass:"nav__item transition-all flex --align-center --gap-16 py-8",on:{click:function(e){return t.scrollTo("about")}}},[e("span",{staticClass:"nav__item-indicator transition-all"}),t._v(" "),e("span",{staticClass:"nav__item-text transition-all"},[t._v("обо мне")])])]),t._v(" "),e("li",[e("div",{staticClass:"nav__item transition-all flex --align-center --gap-16 py-8",on:{click:function(e){return t.scrollTo("exp")}}},[e("span",{staticClass:"nav__item-indicator transition-all"}),t._v(" "),e("span",{staticClass:"nav__item-text transition-all"},[t._v("опыт")])])]),t._v(" "),e("li",[e("div",{staticClass:"nav__item transition-all flex --align-center --gap-16 py-8",on:{click:function(e){return t.scrollTo("projects")}}},[e("span",{staticClass:"nav__item-indicator transition-all"}),t._v(" "),e("span",{staticClass:"nav__item-text transition-all"},[t._v("проекты")])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:o(397).default})},400:function(t,e,o){var content=o(413);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("340cb195",content,!0,{sourceMap:!1})},401:function(t,e,o){"use strict";o(391)},402:function(t,e,o){var r=o(31)((function(i){return i[1]}));r.push([t.i,".nav__item{cursor:pointer}.nav__item-indicator{background-color:#64748b;height:1px;transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);width:2rem}.nav__item-text{color:#64748b;font-size:.75rem;font-weight:700;text-transform:uppercase}.nav__item:hover .nav__item-text{color:var(--color__white)}.nav__item.is-active .nav__item-indicator,.nav__item:hover .nav__item-indicator{background-color:var(--color__white);width:4rem}.nav__item.is-active .nav__item-text{color:var(--color__white)}@media screen and (max-width:991px){.nav{display:none}}",""]),r.locals={},t.exports=r},403:function(t,e,o){"use strict";o(392)},404:function(t,e,o){var r=o(31)((function(i){return i[1]}));r.push([t.i,".header__socials{gap:1.25rem}.header__social{color:var(--color__white-opacity);display:block;height:1.75rem;position:relative;transition:all .3s ease;width:1.75rem}.header__social svg{height:100%;left:0;-o-object-fit:contain;object-fit:contain;position:absolute;top:0;width:100%}.header__social:hover{color:var(--color__white);transition:all .3s ease}",""]),r.locals={},t.exports=r},410:function(t,e,o){"use strict";o.r(e);var r={},n=(o(412),o(4)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"header py-80 flex --direction-column --just-space --align-stretch --nowrap"},[e("div",{staticClass:"header__side --top"},[e("a",{staticClass:"header__title",attrs:{href:"/"}},[t._v("Миша Романов")]),t._v(" "),e("h2",{staticClass:"header__subtitle"},[t._v("Frontend разработчик")]),t._v(" "),e("p",{staticClass:"header__desc mt-16"},[t._v("\n      I build accessible, inclusive products and digital experiences for the\n      web.\n    ")]),t._v(" "),e("Nav",{staticClass:"header__nav"})],1),t._v(" "),e("div",{staticClass:"header__side --bott"},[e("a",{staticClass:"header__download flex --align-center --gap-4 mt-16",attrs:{href:"#",target:"_blank"}},[e("span",{staticClass:"header__download-text transition-all"},[t._v("Cкачать резюме")]),t._v(" "),e("span",{staticClass:"header__download-thumb transition-all"},[e("svg",{staticClass:"ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z","clip-rule":"evenodd"}})])])]),t._v(" "),e("Socials",{staticClass:"mt-24"})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:o(397).default,Socials:o(411).default,Header:o(410).default})},411:function(t,e,o){"use strict";o.r(e);var r={},n=(o(403),o(4)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"header__socials flex --align-center"},[e("a",{staticClass:"header__social",attrs:{target:"_blank",href:"https://github.com/RomanovMichael"}},[e("svg",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"}})])]),t._v(" "),e("a",{staticClass:"header__social",attrs:{target:"_blank",href:"https://vk.com/id143368521"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",fill:"currentColor",viewBox:"0 0 50 50"}},[e("path",{attrs:{d:"M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37.72,33l-3.73-0.01 c0,0-0.08,0.01-0.21,0.01c-0.3,0-0.92-0.08-1.65-0.58c-1.31-0.91-2.56-3.17-3.55-3.17c-0.07,0-0.13,0.01-0.19,0.03 c-0.86,0.27-1.12,1.13-1.12,2.18c0,0.37-0.26,0.54-0.96,0.54h-1.93c-2.16,0-4.25-0.05-6.6-2.62c-3.46-3.79-6.7-10.53-6.7-10.53 s-0.18-0.39,0.01-0.62c0.18-0.21,0.6-0.23,0.76-0.23c0.04,0,0.06,0,0.06,0h4c0,0,0.37,0.07,0.64,0.27c0.23,0.17,0.35,0.48,0.35,0.48 s0.68,1.32,1.53,2.81c1.43,2.46,2.2,3.28,2.75,3.28c0.09,0,0.18-0.02,0.27-0.07c0.82-0.45,0.58-4.09,0.58-4.09s0.01-1.32-0.42-1.9 c-0.33-0.46-0.96-0.59-1.24-0.63c-0.22-0.03,0.14-0.55,0.62-0.79c0.62-0.3,1.65-0.36,2.89-0.36h0.6c1.17,0.02,1.2,0.14,1.66,0.25 c1.38,0.33,0.91,1.62,0.91,4.71c0,0.99-0.18,2.38,0.53,2.85c0.05,0.03,0.12,0.05,0.21,0.05c0.46,0,1.45-0.59,3.03-3.26 c0.88-1.52,1.56-3.03,1.56-3.03s0.15-0.27,0.38-0.41c0.22-0.13,0.22-0.13,0.51-0.13h0.03c0.32,0,3.5-0.03,4.2-0.03h0.08 c0.67,0,1.28,0.01,1.39,0.42c0.16,0.62-0.49,1.73-2.2,4.03c-2.82,3.77-3.14,3.49-0.8,5.67c2.24,2.08,2.7,3.09,2.78,3.22 C39.68,32.88,37.72,33,37.72,33z"}})])]),t._v(" "),e("a",{staticClass:"header__social",attrs:{target:"_blank",href:"https://t.me/misha_romanov"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",fill:"currentColor",viewBox:"0 0 50 50"}},[e("path",{attrs:{d:"M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375\tc0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219\tc-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966\tc0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693\tc0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351\tc0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"}})])])])}),[],!1,null,null,null);e.default=component.exports},412:function(t,e,o){"use strict";o(400)},413:function(t,e,o){var r=o(31)((function(i){return i[1]}));r.push([t.i,".header{color:var(--color__white);flex-shrink:0;max-height:100vh;position:sticky;top:0;z-index:1}.header__title{color:inherit;font-size:3rem;font-weight:700}.header__subtitle{color:inherit;font-size:1.25rem;line-height:1.75rem;margin-top:.75rem}.header__desc{color:var(--color__white-opacity);font-size:1.125rem;margin:0;max-width:20rem}.header__download-text{border-bottom:1px solid transparent;color:var(--color__white);font-size:.875rem;font-weight:550;line-height:1.25rem}.header__download:hover .header__download-text{border-color:var(--color__green)}.header__download-thumb{color:var(--color__white);height:1rem;position:relative;width:1rem}.header__download-thumb svg{height:100%;left:0;position:absolute;top:0;width:100%}.header__download:hover .header__download-thumb{transform:translateX(20%)}@media screen and (max-width:991px){.header{padding-bottom:0!important;position:relative}}",""]),r.locals={},t.exports=r}}]);