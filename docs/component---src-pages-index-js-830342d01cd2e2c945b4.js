(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));a("a1Th"),a("I5cv"),a("KKXr"),a("9VmF"),a("Z2Ku"),a("L9s1"),a("OG14"),a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("T39b"),a("Vd3H"),a("Oyvg"),a("pIFo");var r=a("q1tI"),n=a.n(r),o=a("Wbzz"),s=a("Bl7J");var c=function(e){var t,a;a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r;r=o;function o(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).state={checked:!1},t}var s=o.prototype;return s.renderIcon=function(){var e,t=this.props.value;if(["JP","FR","RU","PT","ES","IT","DE"].indexOf(t)>=0)e=t.toLowerCase();else switch(t){case"SC":e="cn";break;case"KO":e="kr";break;case"JA":e="jp";break;case"EN":e="gb";break;case"BP":e="br";break;case"ZH":e="cn";break;default:e="cn"}var a="flag-icon flag-icon-"+e;return n.a.createElement("span",{className:a})},s.render=function(){var e=this,t=this.props,a=t.value,r=t.onSelect,o=this.state.checked;return n.a.createElement("div",{className:"flex flex-row justify-around rounded-full w-20 mx-3 my-2 px-3 py-1 hover:bg-gray-400 bg-gray-"+(o?"400":"200"),role:"button",onClick:function(){e.setState({checked:!o}),r&&r(a)}},this.renderIcon(),n.a.createElement("p",{className:"select-none"},a))},o}(r.Component);var i=function(e){var t,a;a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r;r=o;function o(){return e.apply(this,arguments)||this}return o.prototype.render=function(){var e=this.props.onSelect,t=["JP","FR","RU","PT","SC","ES","KO","IT","JA","DE","EN","BP","ZH"];return t.sort(),n.a.createElement("div",{className:"flex flex-row flex-wrap w-full justify-start flex-wrap py-2"},t.map((function(t){return n.a.createElement(c,{key:t,value:t,onSelect:e})})))},o}(r.Component);var l=/name="([^"]*)"/,u=/>(.*)</;var p=function(e){var t,a;a=e,(t=c).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r;r=c;function c(t){var a;return(a=e.call(this,t)||this).onSelect=function(e){var t=a.state.selectedLanguages;t.has(e)?t.delete(e):t.add(e),a.setState({selectedLanguages:t},a.searchText())},a.renderIcon=function(e){var t;if(["JP","FR","RU","PT","ES","IT","DE"].indexOf(e)>=0)t=e.toLowerCase();else switch(e){case"SC":t="cn";break;case"KO":t="kr";break;case"JA":t="jp";break;case"EN":t="gb";break;case"BP":t="br";break;case"ZH":t="cn";break;default:t="cn"}return n.a.createElement("span",{className:"flag-icon flag-icon-"+t})},a.renderResults=function(){var e=a.state,t=e.results,r=e.showAlert,o=[];return t.sort().forEach((function(e){var t=e[0],s=e[1];s=s.trim(),t=t.trim(),o.push(n.a.createElement("div",{key:t+s,className:"flex-grow sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 py-2"},n.a.createElement("div",{className:"bg-gray-200 rounded px-2 py-2 shadow h-full"},n.a.createElement("div",{role:"button",className:"hover:bg-gray-400 hover:text-black text-gray-200 cursor-pointer px-2 rounded flex flex-row",onClick:function(){return a.setState({showAlert:!0},(function(){navigator.clipboard.writeText(s),setTimeout((function(){return a.setState({showAlert:!1})}),1e3)}))}},a.renderIcon(t),n.a.createElement("p",{className:"px-1"},r?"Copied!":"Copy text")),n.a.createElement("p",{className:"px-2 py-2"},s))))})),n.a.createElement("div",{className:"flex flex-row flex-wrap"},o)},a.renderSelector=function(){var e=a.state,t=e.variables,r=e.selectedVariable,o=[];return t.forEach((function(e){o.push(n.a.createElement("option",{key:e,value:e},e))})),n.a.createElement("select",{className:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",value:r,required:!0,onChange:function(e){a.setState({selectedVariable:e.target.value},(function(){return a.searchText()}))}},o)},a.state={selectedLanguages:new Set,inputText:"",results:[],variables:[],selectedVariable:"",showAlert:!1},a}var p=c.prototype;return p.search=function(){var e=this,t=this.assets;if(t){var a=this.state.inputText;if(""===a)this.setState({variables:[]});else{for(var r=[],n=0;n<t.length;n+=1)if(t[n].toLowerCase().includes(a.toLowerCase())){var o=l.exec(t[n]);o&&o[1].length>0&&r.indexOf(o[1])<0&&o[1].toUpperCase()===o[1]&&r.push(o[1])}r.sort((function(e){return e.length})),this.setState({variables:r},(function(){return e.searchText()}))}}},p.searchText=function(){var e,t=this.assets,a=this.state,r=a.variables,n=a.selectedLanguages,o=this.state.selectedVariable||r[0],s=[];0===r.length||t.forEach((function(t){if(t.startsWith("LANGUAGE")&&(e=t.substring(10).trim()),t.includes('"'+o+'"')&&(0===n.size||n.has(e))){var a=u.exec(t);if(a&&a[1].length>0){var r=("\t"+a[1]+"\n\n").replace(/&quot;/g,'"').replace(/&lt;/g,"");s.push([e,r])}}})),this.setState({results:s})},p.componentDidMount=function(){var e=this;this._isMounted=!0,fetch(Object(o.withPrefix)("/trimmedAssets.txt")).then((function(e){return e.text()})).then((function(t){e.assets=t.split("\n");var a=function(e,t){t||(t=window.location.href),e=e.replace(/[[\]]/g,"\\$&");var a=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null}("search");a&&e.setState({inputText:a},(function(){e.search()}))})),window.onpopstate=function(){if(e._isMounted&&window.location.href.includes("search=")){var t=window.location.href.split("search=")[1];e.setState({inputText:t,selectedVariable:""},(function(){e.search()}))}}},p.render=function(){var e=this,t=this.state.inputText;return n.a.createElement(s.a,null,n.a.createElement("div",null,n.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"text"},"Text to search for"),n.a.createElement("input",{id:"text",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",value:t,placeholder:"Text",onChange:function(t){return e.setState({inputText:t.target.value})},onBlur:function(){var a=window.location.protocol+"//";a+=window.location.host+window.location.pathname,(a+="?search="+t)!==window.location.href&&(window.history.pushState({path:a},"",a),e.setState({selectedVariable:""},(function(){return e.search()})))},onKeyPress:function(a){if("Enter"===a.key){var r=window.location.protocol+"//";r+=window.location.host+window.location.pathname,(r+="?search="+t)!==window.location.href&&(window.history.pushState({path:r},"",r),e.setState({selectedVariable:""},(function(){return e.search()}))),a.preventDefault()}}}),n.a.createElement(i,{onSelect:this.onSelect}),this.renderSelector(),this.renderResults()))},c}(r.Component)}}]);
//# sourceMappingURL=component---src-pages-index-js-830342d01cd2e2c945b4.js.map