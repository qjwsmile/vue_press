(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{492:function(t,e,n){},495:function(t,e,n){"use strict";n(492)},496:function(t,e,n){},497:function(t,e,n){"use strict";n.r(e);var r=n(58),i=(n(44),n(31),n(43),n(25),n(32),n(257),n(258),n(494),{name:"",data:function(){return{strs:[{title:"你现在的努力、辛苦、压力",stop:[7,10]},{title:"承受的一切"},{title:"都是为了攒够能力和本钱"},{title:"去做自己更喜欢的事"},{title:"去为自己争取选择的权利"},{title:"加油！！！"}],currentIndex:0,spans:null,el:null}},mounted:function(){var t=this;if(this.el=document.querySelector(".hero .description"),this.el)this.init();else var e=this,n=setInterval((function(){t.el&&(n&&clearInterval(n),e.init()),t.el=document.querySelector(".hero .description")}),100)},methods:{init:function(){var t=this;this.currentIndex==this.strs.length&&(this.currentIndex=0),this.el.innerHTML=this.strs[this.currentIndex].title,this.el.innerHTML=this.el.textContent.replace(/\S/g,"<span>$&</span>");var e=0;this.spans=Object(r.a)(document.querySelectorAll(".hero .description span")),this.spans.forEach((function(n,r){e+=.15,t.strs[t.currentIndex].hasOwnProperty("stop")&&(t.strs[t.currentIndex].stop instanceof Array?t.strs[t.currentIndex].stop.includes(r)&&(e+=.25):t.strs[t.currentIndex].stop==r&&(e+=.25)),n.style.setProperty("--delay","".concat(e,"s"))})),this.el.addEventListener("animationend",this.lastEnd)},lastEnd:function(t){var e=this;t.target==document.querySelector(".hero .description span:last-child")&&(this.el.classList.add("ended"),setTimeout((function(){e.el.removeEventListener("animationend",e.lastEnd);var t=0;e.spans.reverse().forEach((function(n,r){e.el.classList.remove("ended"),n.style.width="2ch",n.style.animation="0.1s text-out ease-in-out forwards",t+=.05,n.style.animationDelay="".concat(t,"s")})),e.el.addEventListener("animationend",e.firstEnd)}),2e3))},firstEnd:function(t){t.target==document.querySelector(".hero .description span:first-child")&&(this.spans.forEach((function(t){t.remove()})),this.el.removeEventListener("animationend",this.firstEnd),this.currentIndex++,this.init())}}}),a=(n(495),n(9)),s=Object(a.a)(i,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero"},[e("p",{staticClass:"description"})])}],!1,null,null,null);e.default=s.exports},498:function(t,e,n){"use strict";n(496)},518:function(t,e,n){"use strict";n.r(e);var r={name:"home",components:{NewFont:n(497).default},props:{},data:function(){return{}},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},filters:{},computed:{},watch:{},methods:{}},i=(n(498),n(9)),a=Object(i.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container "},[e("div",{staticClass:"line"}),this._v(" "),e("div",{staticClass:"font"},[e("new-font")],1),this._v(" "),this._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"gov"},[e("a",{attrs:{href:"https://beian.miit.gov.cn/"}},[this._v("京ICP备2021014780号")])])}],!1,null,"ce901f3c",null);e.default=a.exports},548:function(t,e,n){"use strict";n.r(e);var r=n(518),i=n(544),a=n(545),s=n(546),o=(n(31),n(43),n(259),n(260),n(111),n(75),n(25),n(32),n(35),n(110),n(76),/#.*$/),c=/\.(md|html)$/,u=/\/$/,l=/^[a-z]+:/i;function h(t){return decodeURI(t).replace(o,"").replace(c,"")}function d(t){return l.test(t)}function f(t){if(d(t))return t;var e=t.match(o),n=e?e[0]:"",r=h(t);return u.test(r)?t:r+".html"+n}function p(t,e,n){if(d(e))return{type:"external",path:e};n&&(e=function(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var a=t.replace(/^\//,"").split("/"),s=0;s<a.length;s++){var o=a[s];".."===o?i.pop():"."!==o&&i.push(o)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));for(var r=h(e),i=0;i<t.length;i++)if(h(t[i].regularPath)===r)return Object.assign({},t[i],{type:"page",path:f(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function b(t,e,n,r){var i=n.pages,a=n.themeConfig,s=r&&a.locales&&a.locales[r]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return m(t);var o=s.sidebar||a.sidebar;if(o){var c=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(r=t,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var r;return{}}(e,o),u=c.base,l=c.config;return"auto"===l?m(t):l?l.map((function(t){return function t(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return p(n,e,r);if(Array.isArray(e))return Object.assign(p(n,e[0],r),{title:e[1]});var a=e.children||[];return 0===a.length&&e.path?Object.assign(p(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:a.map((function(e){return t(e,n,r,i+1)})),collapsable:!1!==e.collapsable}}(t,i,u)})):[]}return[]}function m(t){var e=function(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}var v={name:"Layout",components:{Home:r.default,Page:a.a,Sidebar:s.a,Navbar:i.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return b(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},g=n(9),y=Object(g.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom"),t._v(" "),n("Vssue",{staticClass:"theme-default-content content_default",attrs:{options:{locale:"zh"}}})]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=y.exports}}]);