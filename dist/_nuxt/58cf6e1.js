(window.webpackJsonp=window.webpackJsonp||[]).push([[12,2,3,5,7,8,9,10,11],{450:function(t,e,r){var content=r(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("039ee18f",content,!0,{sourceMap:!1})},451:function(t,e,r){var content=r(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("159a61c9",content,!0,{sourceMap:!1})},452:function(t,e,r){var content=r(463);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("6e29be0e",content,!0,{sourceMap:!1})},453:function(t,e,r){var content=r(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("1873969c",content,!0,{sourceMap:!1})},454:function(t,e,r){"use strict";r(450)},455:function(t,e,r){var o=r(49)((function(i){return i[1]}));o.push([t.i,".links__item{flex-wrap:nowrap;margin-right:1rem;margin-top:.25rem}.links__item-icon{color:var(--color__white);display:block;flex-shrink:0;height:.75rem;position:relative;width:.75rem}.links__item-icon svg{height:100%;left:0;position:absolute;top:0;width:100%}.links__item-text{color:var(--color__white);word-break:normal}.links__item:hover .links__item-icon,.links__item:hover .links__item-text{color:var(--color__green)}",""]),o.locals={},t.exports=o},456:function(t,e,r){"use strict";r(451)},457:function(t,e,r){var o=r(49)((function(i){return i[1]}));o.push([t.i,".tag{background-color:rgba(45,212,191,.1);border-radius:2rem;color:var(--color__green);font-size:.75rem;font-weight:600;line-height:1.25rem;padding:.25rem .75rem}",""]),o.locals={},t.exports=o},458:function(t,e,r){"use strict";r.r(e);r(66),r(12),r(20);var o={data:function(){return{scrollLight:0}},methods:{scrollTo:function(t){var e=this;setTimeout((function(){e.$gsap.to(window,{duration:.56,top:250,scrollTo:"#"+t})}),50)}},computed:{navLight:function(){return window.screenY}},mounted:function(){window.addEventListener("scroll",(function(){var t=window.scrollY;document.querySelectorAll(".section").forEach((function(e,i){e.offsetTop-230<=t&&document.querySelectorAll(".nav__item").forEach((function(t){t.classList.contains("is-active")&&t.classList.remove("is-active"),document.querySelectorAll(".nav__item")[i].classList.add("is-active")}))}))}))}},n=(r(462),r(7)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"nav mt-64"},[e("ul",{staticClass:"nav__list"},[e("li",[e("div",{staticClass:"nav__item transition-all flex --align-center --gap-16",on:{click:function(e){return t.scrollTo("about")}}},[e("span",{staticClass:"nav__item-indicator transition-all"}),t._v(" "),e("span",{staticClass:"nav__item-text transition-all"},[t._v("обо мне")])])]),t._v(" "),e("li",[e("div",{staticClass:"nav__item transition-all flex --align-center --gap-16",on:{click:function(e){return t.scrollTo("exp")}}},[e("span",{staticClass:"nav__item-indicator transition-all"}),t._v(" "),e("span",{staticClass:"nav__item-text transition-all"},[t._v("опыт")])])]),t._v(" "),e("li",[e("div",{staticClass:"nav__item transition-all flex --align-center --gap-16",on:{click:function(e){return t.scrollTo("projects")}}},[e("span",{staticClass:"nav__item-indicator transition-all"}),t._v(" "),e("span",{staticClass:"nav__item-text transition-all"},[t._v("проекты")])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:r(458).default})},459:function(t,e,r){"use strict";r.r(e);var o={props:["linksArr"]},n=(r(454),r(7)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"links flex --align-center"},t._l(t.linksArr,(function(link,r){return e("a",{key:r,staticClass:"links__item transition-all flex --align-center --gap-4",attrs:{target:"_blank",href:link.url}},[e("span",{staticClass:"links__item-icon transition-all"},[e("svg",{staticClass:"mr-1 h-3 w-3",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{d:"M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"}}),e("path",{attrs:{d:"M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"}})])]),t._v(" "),e("span",{staticClass:"links__item-text transition-all"},[t._v(t._s(link.text))])])})),0)}),[],!1,null,null,null);e.default=component.exports},460:function(t,e,r){"use strict";r.r(e);var o={props:["tagsArr"]},n=(r(456),r(7)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tags flex --gap-8 --align-center"},t._l(t.tagsArr,(function(r,o){return e("div",{key:o,staticClass:"tag flex --align-center"},[t._v(t._s(r))])})),0)}),[],!1,null,null,null);e.default=component.exports},461:function(t,e,r){var content=r(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("340cb195",content,!0,{sourceMap:!1})},462:function(t,e,r){"use strict";r(452)},463:function(t,e,r){var o=r(49)((function(i){return i[1]}));o.push([t.i,".nav__item{cursor:pointer;padding-bottom:.875rem;padding-top:.875rem}.nav__item-indicator{background-color:#64748b;height:1px;transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);width:2rem}.nav__item-text{color:#64748b;font-size:.75rem;font-weight:700;text-transform:uppercase}.nav__item:hover .nav__item-text{color:var(--color__white)}.nav__item.is-active .nav__item-indicator,.nav__item:hover .nav__item-indicator{background-color:var(--color__white);width:4rem}.nav__item.is-active .nav__item-text{color:var(--color__white)}@media screen and (max-width:991px){.nav{display:none}}",""]),o.locals={},t.exports=o},464:function(t,e,r){"use strict";r(453)},465:function(t,e,r){var o=r(49)((function(i){return i[1]}));o.push([t.i,".header__socials{gap:1.25rem}.header__social{color:var(--color__white-opacity);display:block;height:1.75rem;position:relative;transition:all .3s ease;width:1.75rem}.header__social svg{height:100%;left:0;-o-object-fit:contain;object-fit:contain;position:absolute;top:0;width:100%}.header__social:hover{color:var(--color__white);transition:all .3s ease}",""]),o.locals={},t.exports=o},466:function(t,e,r){var content=r(475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("b433f43a",content,!0,{sourceMap:!1})},467:function(t,e,r){var content=r(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("d028649a",content,!0,{sourceMap:!1})},468:function(t,e,r){var content=r(479);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("d51ca4b0",content,!0,{sourceMap:!1})},469:function(t,e,r){var content=r(481);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("0d65f3f4",content,!0,{sourceMap:!1})},470:function(t,e,r){"use strict";r.r(e);var o={},n=(r(472),r(7)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"header py-80 flex --direction-column --just-space --align-stretch --nowrap"},[e("div",{staticClass:"header__side --top"},[e("a",{staticClass:"header__title",attrs:{href:"/"}},[t._v("Миша Романов")]),t._v(" "),e("h2",{staticClass:"header__subtitle"},[t._v("Frontend разработчик")]),t._v(" "),e("a",{staticClass:"header__download flex --align-center --gap-4 mt-16",attrs:{href:"https://drive.google.com/file/d/13k46G0f3aeI4iHbwmOft-LzBbsMUyORb/view?usp=sharing",target:"_blank"}},[e("span",{staticClass:"header__download-text transition-all"},[t._v("Cкачать резюме")]),t._v(" "),e("span",{staticClass:"header__download-thumb transition-all"},[e("svg",{staticClass:"ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z","clip-rule":"evenodd"}})])])]),t._v(" "),e("Nav",{staticClass:"header__nav"})],1),t._v(" "),e("div",{staticClass:"header__side --bott"},[e("Socials",{staticClass:"mt-24"})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:r(458).default,Socials:r(471).default,Header:r(470).default})},471:function(t,e,r){"use strict";r.r(e);var o={},n=(r(464),r(7)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"header__socials flex --align-center"},[e("a",{staticClass:"header__social",attrs:{target:"_blank",href:"https://github.com/RomanovMichael"}},[e("svg",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"}})])]),t._v(" "),e("a",{staticClass:"header__social",attrs:{target:"_blank",href:"https://vk.com/id143368521"}},[e("svg",{attrs:{"enable-background":"new 0 0 100 100",stroke:"currentColor",fill:"currentColor",version:"1.1",viewBox:"0 0 100 100",width:"100px","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("path",{attrs:{d:"M50,3.84C24.506,3.84,3.84,24.506,3.84,50S24.506,96.16,50,96.16S96.16,75.494,96.16,50S75.494,3.84,50,3.84  z M74.808,67.517c-1.97,1.232-9.975,1.599-11.913,0.191c-1.063-0.772-2.035-1.738-2.958-2.658c-0.646-0.643-1.379-0.955-1.934-1.653  c-0.453-0.571-0.764-1.245-1.241-1.809c-0.805-0.946-2.044-1.751-3.024-0.595c-1.476,1.739,0.232,5.154-1.736,6.453  c-0.66,0.436-1.326,0.562-2.151,0.5l-1.827,0.083c-1.073,0.021-2.773,0.031-3.994-0.189c-1.362-0.246-2.487-0.99-3.719-1.536  c-2.338-1.037-4.565-2.45-6.26-4.407c-4.613-5.33-10.809-12.66-13.216-19.361c-0.495-1.377-1.803-4.104-0.563-5.285  c1.686-1.225,9.961-1.57,11.252,0.324c0.524,0.77,0.855,1.896,1.226,2.769c0.462,1.088,0.712,2.113,1.434,3.076  c0.639,0.854,1.11,1.713,1.604,2.649c0.555,1.051,1.079,2.059,1.754,3.026c0.458,0.658,1.669,1.967,2.434,2.064  c1.868,0.239,1.752-4.3,1.613-5.408c-0.133-1.068-0.167-2.201-0.132-3.284c0.03-0.924,0.113-2.226-0.434-2.98  c-0.892-1.23-2.879-0.31-3.034-1.963c0.328-0.469,0.259-0.885,2.45-1.607c1.726-0.567,2.841-0.549,3.979-0.458  c2.32,0.186,4.78-0.442,7.02,0.31c2.14,0.721,1.809,3.762,1.737,5.584c-0.097,2.487,0.007,4.915,0,7.44  c-0.003,1.149-0.049,2.268,1.353,2.174c1.314-0.087,1.448-1.193,2.075-2.105c0.872-1.272,1.673-2.562,2.561-3.829  c1.197-1.713,1.559-3.638,2.686-5.393c0.403-0.627,0.75-1.963,1.371-2.459c0.47-0.377,1.363-0.18,1.932-0.18h1.353  c1.035,0,2.091-0.008,3.155,0.029c1.532,0.053,3.248-0.299,4.767-0.084c6.555,0.925-8.239,14.938-7.469,17.44  c0.532,1.728,3.907,3.659,5.125,5.074C73.701,61.345,78.679,65.092,74.808,67.517z",stroke:"currentColor",fill:"currentColor"}})])]),t._v(" "),e("a",{staticClass:"header__social",attrs:{target:"_blank",href:"https://t.me/misha_romanov"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",fill:"currentColor",viewBox:"0 0 50 50"}},[e("path",{attrs:{d:"M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375\tc0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219\tc-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966\tc0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693\tc0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351\tc0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"}})])])])}),[],!1,null,null,null);e.default=component.exports},472:function(t,e,r){"use strict";r(461)},473:function(t,e,r){var o=r(49)((function(i){return i[1]}));o.push([t.i,".header{color:var(--color__white);flex-shrink:0;max-height:100vh;position:sticky;top:0;z-index:1}.header__title{color:inherit;font-size:3rem;font-weight:700}.header__subtitle{color:inherit;font-size:1.25rem;line-height:1.75rem;margin-top:.75rem}.header__desc{color:var(--color__white-opacity);font-size:1.125rem;margin:0;max-width:20rem}.header__download-text{border-bottom:1px solid transparent;color:var(--color__white);font-size:.875rem;font-weight:550;line-height:1.25rem;opacity:.4}.header__download:hover .header__download-text{border-color:var(--color__green);opacity:1}.header__download-thumb{color:var(--color__white);height:1rem;opacity:.4;position:relative;width:1rem}.header__download-thumb svg{height:100%;left:0;position:absolute;top:0;width:100%}.header__download:hover .header__download-thumb{opacity:1;transform:translateX(20%)}@media screen and (max-width:991px){.header{padding-bottom:0!important;position:relative}}@media screen and (max-width:640px){.header__title{font-size:2rem;line-height:2.5rem}.header__subtitle{font-size:1.125rem;margin-top:0!important}}",""]),o.locals={},t.exports=o},474:function(t,e,r){"use strict";r(466)},475:function(t,e,r){var o=r(49)((function(i){return i[1]}));o.push([t.i,".about p{color:var(--color__white-opacity);font-size:1.125rem;margin:0}.about p a{color:var(--color__white);font-weight:600}.about p a:hover{color:var(--color__green)}@media screen and (max-width:640px){.about p{font-size:1rem;line-height:1.375rem}}",""]),o.locals={},t.exports=o},476:function(t,e,r){"use strict";r(467)},477:function(t,e,r){var o=r(49)((function(i){return i[1]}));o.push([t.i,".exp__item{grid-gap:1rem;border-radius:.375rem;display:grid;font-size:.875rem;gap:1rem;grid-template-columns:repeat(8,minmax(0,1fr));line-height:1.125rem;padding:1.25rem}.exp__item:hover{background-color:rgba(35,54,86,.27);box-shadow:0 0 0 0 transparent,0 0 0 0 transparent,inset 0 1px 0 0 rgba(148,163,184,.1);filter:drop-shadow(rgba(0,0,0,.04) 0 .625rem .5rem) drop-shadow(rgba(0,0,0,.1) 0 .25rem .25rem)}.exp__list:has(>:hover) .exp__item:not(:hover){opacity:.5}.exp__item:first-child{margin-top:0!important}.exp__item-terms{color:#64748b;font-size:.75rem;font-weight:600;grid-column:span 2/span 2;line-height:1.125rem;text-transform:uppercase}.exp__item-content{grid-column:span 6/span 6}.exp__item-name{color:var(--color__white);font-size:1rem;font-weight:600;line-height:1.125rem}.exp__item-name-thumb{color:var(--color__white);display:block;height:.9rem;margin-left:.25rem;position:relative;width:.9rem}.exp__item-name-thumb svg{height:100%;left:0;position:absolute;top:0;width:100%}.exp__item-name:hover{color:var(--color__green)}.exp__item-name:hover .exp__item-name-thumb{color:var(--color__green);transform:translate(20%,-20%)}.exp__item-desc{color:var(--color__white-opacity);font-size:.875rem;line-height:1.25rem;margin:0;max-width:90%}@media screen and (max-width:640px){.exp__item{grid-template-columns:none;padding-left:0!important;padding-right:0!important;position:relative}.exp__item-content,.exp__item-terms{grid-column:unset}.exp__item-desc{max-width:100%}.exp__item-desc,.exp__item-links{margin-top:1rem!important}.exp__item-tags{margin-top:1.125rem!important}.exp__list:has(>:hover) .exp__item:not(:hover){opacity:1}.exp__item:hover{background-color:transparent;box-shadow:none;filter:none}}",""]),o.locals={},t.exports=o},478:function(t,e,r){"use strict";r(468)},479:function(t,e,r){var o=r(49)((function(i){return i[1]}));o.push([t.i,".projects__item-gal-wrap{border:2px solid rgba(226,232,240,.1);border-radius:.3rem;overflow:hidden}.projects__item:hover .projects__item-gal-wrap{border-color:rgba(226,232,240,.3)}.projects__item-gall-image{overflow:hidden;padding-bottom:55%;position:relative}.projects__item-gall-image img{height:100%;left:0;-o-object-fit:cover;object-fit:cover;position:absolute;top:0;width:100%}.projects__item-gal-wrap.--desk{width:100%}.projects__item-gal-wrap.--mob{width:55%}.projects__item-gal-wrap.--mob .image-thumb{padding-bottom:208%}.exp__item-name.projects__item-name{pointer-events:none}@media screen and (max-width:620px){.projects__item-content{margin-top:1rem!important}}",""]),o.locals={},t.exports=o},480:function(t,e,r){"use strict";r(469)},481:function(t,e,r){var o=r(49)((function(i){return i[1]}));o.push([t.i,".exp__item{grid-gap:1rem;border-radius:.375rem;display:grid;font-size:.875rem;gap:1rem;grid-template-columns:repeat(8,minmax(0,1fr));line-height:1.125rem;padding:1.25rem}.exp__item:hover{background-color:rgba(35,54,86,.27);box-shadow:0 0 0 0 transparent,0 0 0 0 transparent,inset 0 1px 0 0 rgba(148,163,184,.1);filter:drop-shadow(rgba(0,0,0,.04) 0 .625rem .5rem) drop-shadow(rgba(0,0,0,.1) 0 .25rem .25rem)}.exp__list:has(>:hover) .exp__item:not(:hover){opacity:.5}.exp__item:first-child{margin-top:0!important}.exp__item-terms{color:#64748b;font-size:.75rem;font-weight:600;grid-column:span 2/span 2;line-height:1.125rem;text-transform:uppercase}.exp__item-content{grid-column:span 6/span 6}.exp__item-name{color:var(--color__white);font-size:1rem;font-weight:600;line-height:1.125rem}.exp__item-name-thumb{color:var(--color__white);display:block;height:.9rem;margin-left:.25rem;position:relative;width:.9rem}.exp__item-name-thumb svg{height:100%;left:0;position:absolute;top:0;width:100%}.exp__item-name:hover{color:var(--color__green)}.exp__item-name:hover .exp__item-name-thumb{color:var(--color__green);transform:translate(20%,-20%)}.exp__item-desc{color:var(--color__white-opacity);font-size:.875rem;line-height:1.25rem;margin:0;max-width:90%}@media screen and (max-width:640px){.exp__item{grid-template-columns:none;padding-left:0!important;padding-right:0!important;position:relative}.exp__item-content,.exp__item-terms{grid-column:unset}.exp__item-desc{max-width:100%}.exp__item-desc,.exp__item-links{margin-top:1rem!important}.exp__item-tags{margin-top:1.125rem!important}.exp__list:has(>:hover) .exp__item:not(:hover){opacity:1}.exp__item:hover{background-color:transparent;box-shadow:none;filter:none}}",""]),o.locals={},t.exports=o},482:function(t,e,r){var content=r(489);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("24abdc06",content,!0,{sourceMap:!1})},485:function(t,e,r){"use strict";r.r(e);var o={},n=(r(474),r(7)),component=Object(n.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"about pt-80 section",attrs:{id:"about"}},[e("div",{staticClass:"about__label section__label"},[t._v("Обо мне")]),t._v(" "),e("p",{},[t._v("Однажды, попробовав сверстать свою первую  "),e("a",{staticClass:"transition-all",attrs:{target:"_blank",href:"https://romanovmichael.github.io/shirts/"}},[t._v("страничку,")]),t._v(" я потерял счет времени и забвенно влюбился в мир веб-разработки.")]),t._v(" "),e("p",{staticClass:"mt-24"},[t._v('Продолжил реализовывать более сложные проекты в рамках обучающих программ профессий "Web-разработчик" и "Frontend разбработчик"')]),t._v(" "),e("p",{staticClass:"mt-24"},[t._v("Получил опыт коммерческой разработки в агентстве 3owls, где имел честь поработать над интересными проектами. ")]),t._v(" "),e("p",{staticClass:"mt-24"},[t._v("Активно тренируюсь и изучаю новые технологии.")]),t._v(" "),e("p",{staticClass:"mt-24"},[t._v("Если я не за компьютером, то обычно учусь, занимаюсь гимнастикой или плаваю.")])])}],!1,null,null,null);e.default=component.exports},486:function(t,e,r){"use strict";r.r(e);r(32);var o={data:function(){return{expArr:[{id:1,term:"Сен 2022 — Окт 2023",name:{title:"Web-разработчик · 3owls",url:"https://3owls.ru"},desc:"Разработка лендингов и многостраничных сайтов.  <br>Поддержка существующих проектов.  Взаимодействие с другими командами. Реализация встраиваемых микроприложений и виджетов.",tags:["JavaScript","Vue","SCSS","Nuxt","jQuery","PHP","Bitrix"]},{id:2,term:"Сен 2023 — Наст.",name:{title:"Наставник · Loftschool",url:"https://loftschool.com"},desc:"Объясняя другим, лучше понимаешь сам. Счастье - помогать людям, закрепляя знания и прокачивая навыки.",links:[{text:"Истории выпускников LoftSchool | Михаил Романов",url:"https://loftschool.com/blog/posts/kak-vizhat-maksimum-iz-obucheniya"}],tags:["JavaScript"]}]}}},n=(r(476),r(7)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"exp section pt-80",attrs:{id:"exp"}},[e("div",{staticClass:"exp__label section__label"},[t._v("Опыт")]),t._v(" "),e("div",{staticClass:"exp__list"},t._l(t.expArr,(function(r){return e("div",{key:r.id,staticClass:"exp__item transition-all --just-space mt-16"},[r.term?e("div",{staticClass:"exp__item-terms",domProps:{innerHTML:t._s(r.term)}}):t._e(),t._v(" "),e("div",{staticClass:"exp__item-content"},[r.name?e("a",{staticClass:"exp__item-name transition-all flex --align-end",attrs:{target:"_blank",href:r.name.url}},[t._v("\n                    "+t._s(r.name.title)+"\n                    "),e("span",{staticClass:"exp__item-name-thumb transition-all"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z","clip-rule":"evenodd"}})])])]):t._e(),t._v(" "),r.desc?e("p",{staticClass:"exp__item-desc mt-8",domProps:{innerHTML:t._s(r.desc)}}):t._e(),t._v(" "),r.links?e("div",{staticClass:"exp__item-links mt-8"},[e("Links",{attrs:{linksArr:r.links}})],1):t._e(),t._v(" "),r.tags?e("div",{staticClass:"exp__item-tags mt-16"},[e("Tags",{attrs:{tagsArr:r.tags}})],1):t._e()])])})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Links:r(459).default,Tags:r(460).default})},487:function(t,e,r){"use strict";r.r(e);r(32);var o={data:function(){return{projectsArr:[{id:2,name:{title:"Landing Page для мастера перманентного макияжа"},image:{size:"--desk",src:"/projects/nataleebrows.png"},desc:"Разработал дизайн и сверстал лендинг. Приправил анимациями и прелоадерами на Green Socks",links:[{text:"Web",url:"https://nataleeromanova.vercel.app/"}],tags:["Design","Nuxt","GSAP"]},{id:1,name:{title:"Верстка для Chess Club Dubai"},image:{size:"--desk",src:"/projects/chss.jpg"},desc:"12-и колоночная верстка по дизайн-макетам Figma. Формирование структур данных о курсах и их вывод в компонентах.",links:[{text:"Web",url:"https://chessclub.ae"}],tags:["Nuxt","SCSS","Grid"]},{id:1,name:{title:"Калькуляция для Remlabs"},image:{size:"--desk",src:"/projects/calc.jpg"},desc:"Автономный калькулятор стоимости натяжных потолков с реактивным расчетом для компании Remlabs. Включены параметры площади, материалов, типов конструкций, основного и доп. освещений.",links:[{text:"Web",url:"https://remlabs.ru/services/stretch-roof/"}],tags:["Vue","SCSS","PHP"]},{id:2,term:"Сен 2023 — Наст.",name:{title:"ChatGPT Voice Telegram Bot"},image:{size:"--desk",src:"/projects/gpt-bot.jpg"},desc:"Интеграция СhatGPT API и Telegram API. Телеграм бот обрабатывает сообщения в текстовом и аудио формате. Голосовые сообщения из формата .ogg конвертируются в .mp3, а затем транскрибируются в текст. Аудио сохраняются в файловую систему.",links:[{text:"Code",url:"https://github.com/RomanovMichael/chatGPT-tg-bot"}],tags:["Node.js"]},{id:3,term:"Сен 2023 — Наст.",name:{title:"Гео-отзыв"},image:{size:"--desk",src:"/projects/geo-review.jpg"},desc:"Интерактивное приложение, в котором можно оставить отзыв о любом месте. По клику в любой точке карты открывается балун с формой. После публикации отзыва на карте создается метка со списком всех отзывов по координатам. При изменении масштаба карты метки объединяются в кластеры. Данные хранятся в LocalStorage.",links:[{text:"Code",url:"https://github.com/RomanovMichael/course-javascript/tree/geo-review/projects/geo-review"}],tags:["JavaScript","YMaps"]},{id:2,name:{title:"ByCars - Авто c пробегом"},image:{size:"--desk",src:"/projects/100up.png"},desc:"Тестовый кейс, в рамках которого осваивал концепии бутстрап сеток, попапов, компонентов.",links:[{text:"Code",url:"https://github.com/RomanovMichael/test-task-100up"},{text:"Web",url:"https://romanovmichael.github.io/test-task-100up/"}],tags:["SCSS","JavaScript","Swiper","FancyBox","Bootstrap","Mobile First"]},{id:1,name:{title:"Surfboard"},image:{size:"--desk",src:"/projects/surfboard.jpg"},desc:"Адаптивный одностраничный сайт компании по продаже досок для серфинга с OPS, кастомным аудиоплеером, слайдерами и аккордеонами.",links:[{text:"Code",url:"https://github.com/RomanovMichael/surfproject"},{text:"Web",url:"https://romanovmichael.github.io/surfproject/"}],tags:["JavaScript","HTML5","SCSS","jQuery","YMaps"]},{id:2,term:"Сен 2023 — Наст.",name:{title:"Loft-photo",url:"https://loftschool.com"},desc:"Мобильное приложение на базе VK. Cвайпай и взаимодействуй с фотографиями друзей. Лайки, комменты и личный кабинет с лентой. Данные хранятся в объекте DB на стороне сервера.",image:{size:"--mob",src:"/projects/loft-photo.jpg"},links:[{text:"Code",url:"https://github.com/RomanovMichael/loft-photo/tree/master/projects/loft-photo"}],tags:["JavaScript","VK API"]},{id:2,term:"Сен 2023 — Наст.",name:{title:"Mega Chat",url:"https://loftschool.com"},image:{size:"--desk",src:"/projects/mega-chat.jpg"},desc:"Многопользовательский чат (серверная часть + фронт часть). Пользователь может отправлять сообщения в общий чат и менять своё изображение несколькими способами. Отображается количество участников чата.",links:[{text:"Code",url:"https://github.com/RomanovMichael/course-javascript/tree/vp2-chat/projects/mega-chat-3"}],tags:["JavaScript","Node.js","WebSocket"]},{id:2,term:"Сен 2023 — Наст.",name:{title:"Air Asia"},image:{size:"--desk",src:"/projects/asia.jpg"},desc:"Ламповый сайт из нескольких страниц со статичным лейаутом в рамках обучения.",links:[{text:"Code",url:"https://github.com/RomanovMichael/asiaproject"},{text:"Web",url:"https://romanovmichael.github.io/asiaproject/"}],tags:["HTML","CSS"]},{id:2,term:"Сен 2023 — Наст.",name:{title:"LoftMovie",url:"https://loftschool.com"},image:{size:"--desk",src:"/projects/loft-movie.jpg"},desc:"Cервис поиска информации о любимых фильмах и актерах в двух цветовых темах. По запросу возвращает списки релевантных актеров и фильмов. Просмотр полной информации на детальной странице. Добавление в избранное.",links:[{text:"Code",url:"https://github.com/RomanovMichael/LoftMovie"}],tags:["React"]},{id:2,name:{title:"Квиз для k-lestnica"},image:{size:"--desk",src:"/projects/kitch.jpg"},desc:"Пошаговый квиз для расчета стоимости изготовления кухонь на заказ с учетом материала и стиля комплектующих.",links:[{text:"Web",url:"https://k-lestnica.ru/izgotovlenie-kukhon.html"}],tags:["CSS","PHP"]}]}}},n=(r(478),r(480),r(7)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"projects-section section pt-80",attrs:{id:"projects"}},[e("div",{staticClass:"projects__label section__label"},[t._v("Проекты")]),t._v(" "),e("div",{staticClass:"exp__list"},t._l(t.projectsArr,(function(r){return e("div",{key:r.id,staticClass:"exp__item projects__item transition-all --just-space mt-16"},[r?e("div",{staticClass:"exp__item-terms projects__item-gall flex --just-center"},[e("div",{staticClass:"projects__item-gal-wrap transition-all",class:r.image.size},[e("nuxt-picture",{staticClass:"lazy projects__item-gall-image image-thumb",attrs:{quality:"100",sizes:"sm:641px, md:641px, lg:641px",format:"webp",src:"".concat(r.image.src),alt:r.name.title}})],1)]):t._e(),t._v(" "),e("div",{staticClass:"exp__item-content projects__item-content"},[r.name?e("a",{staticClass:"exp__item-name projects__item-name transition-all flex --align-end",attrs:{target:"_blank",href:r.name.url}},[t._v("\n          "+t._s(r.name.title)+"\n        ")]):t._e(),t._v(" "),r.desc?e("p",{staticClass:"exp__item-desc mt-8",domProps:{innerHTML:t._s(r.desc)}}):t._e(),t._v(" "),r.links?e("div",{staticClass:"exp__item-links mt-8"},[e("Links",{attrs:{linksArr:r.links}})],1):t._e(),t._v(" "),r.tags?e("div",{staticClass:"exp__item-tags mt-16"},[e("Tags",{attrs:{tagsArr:r.tags}})],1):t._e()])])})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Links:r(459).default,Tags:r(460).default})},488:function(t,e,r){"use strict";r(482)},489:function(t,e,r){var o=r(49)((function(i){return i[1]}));o.push([t.i,".page__content{max-width:45rem}.home-page{padding-left:13.5rem;padding-right:13.5rem}@media screen and (max-width:1680px){.home-page{padding-left:8.5rem;padding-right:8.5rem}}@media screen and (max-width:1580px){.home-page{padding-left:6.5rem;padding-right:6.5rem}}@media screen and (max-width:1440px){.home-page{padding-left:3.5rem;padding-right:3.5rem}}@media screen and (max-width:1199px){.page__content{max-width:35rem}.home-page{padding-left:1.5rem;padding-right:1.5rem}}@media screen and (max-width:991px){.home-page{flex-direction:column}.page__content{max-width:100%}}@media screen and (max-width:640px){.home-page{padding-left:1.5rem!important;padding-right:1.5rem!important}}",""]),o.locals={},t.exports=o},501:function(t,e,r){"use strict";r.r(e);var o={methods:{}},n=(r(488),r(7)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page home-page flex --just-space --align-stretch --nowrap"},[e("Header"),t._v(" "),e("div",{staticClass:"page__content pb-80 --z-1"},[e("About"),t._v(" "),e("Exp"),t._v(" "),e("Projects")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(470).default,About:r(485).default,Exp:r(486).default,Projects:r(487).default})}}]);