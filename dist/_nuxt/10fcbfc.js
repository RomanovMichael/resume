(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{452:function(t,n,o){var content=o(463);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(50).default)("6e29be0e",content,!0,{sourceMap:!1})},458:function(t,n,o){"use strict";o.r(n);o(66),o(12),o(20);var e={data:function(){return{scrollLight:0}},methods:{scrollTo:function(t){var n=this;setTimeout((function(){n.$gsap.to(window,{duration:.56,top:250,scrollTo:"#"+t})}),50)}},computed:{navLight:function(){return window.screenY}},mounted:function(){window.addEventListener("scroll",(function(){var t=window.scrollY;document.querySelectorAll(".section").forEach((function(n,i){n.offsetTop-230<=t&&document.querySelectorAll(".nav__item").forEach((function(t){t.classList.contains("is-active")&&t.classList.remove("is-active"),document.querySelectorAll(".nav__item")[i].classList.add("is-active")}))}))}))}},l=(o(462),o(7)),component=Object(l.a)(e,(function(){var t=this,n=t._self._c;return n("nav",{staticClass:"nav mt-64"},[n("ul",{staticClass:"nav__list"},[n("li",[n("div",{staticClass:"nav__item transition-all flex --align-center --gap-16",on:{click:function(n){return t.scrollTo("about")}}},[n("span",{staticClass:"nav__item-indicator transition-all"}),t._v(" "),n("span",{staticClass:"nav__item-text transition-all"},[t._v("обо мне")])])]),t._v(" "),n("li",[n("div",{staticClass:"nav__item transition-all flex --align-center --gap-16",on:{click:function(n){return t.scrollTo("exp")}}},[n("span",{staticClass:"nav__item-indicator transition-all"}),t._v(" "),n("span",{staticClass:"nav__item-text transition-all"},[t._v("опыт")])])]),t._v(" "),n("li",[n("div",{staticClass:"nav__item transition-all flex --align-center --gap-16",on:{click:function(n){return t.scrollTo("projects")}}},[n("span",{staticClass:"nav__item-indicator transition-all"}),t._v(" "),n("span",{staticClass:"nav__item-text transition-all"},[t._v("проекты")])])])])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Nav:o(458).default})},462:function(t,n,o){"use strict";o(452)},463:function(t,n,o){var e=o(49)((function(i){return i[1]}));e.push([t.i,".nav__item{cursor:pointer;padding-bottom:.875rem;padding-top:.875rem}.nav__item-indicator{background-color:#64748b;height:1px;transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);width:2rem}.nav__item-text{color:#64748b;font-size:.75rem;font-weight:700;text-transform:uppercase}.nav__item:hover .nav__item-text{color:var(--color__white)}.nav__item.is-active .nav__item-indicator,.nav__item:hover .nav__item-indicator{background-color:var(--color__white);width:4rem}.nav__item.is-active .nav__item-text{color:var(--color__white)}@media screen and (max-width:991px){.nav{display:none}}",""]),e.locals={},t.exports=e}}]);