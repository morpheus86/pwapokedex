(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(74)},71:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(22),c=a.n(s),o=a(16),i=a(15),l=a(40),p=a(41),m=(a(52),a(7)),u=a(8),h=a(10),v=a(9),E=a(11),d=a(38),g=a(14),f=a(13),b=a.n(f),w=a(20),k=a(21),O=a.n(k),N=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},y=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},j=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(v.a)(t).call(this,e))).state={hasError:!1},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),t}(n.Component),_=(a(71),Object(n.lazy)(function(){return a.e(3).then(a.bind(null,80))})),S=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestPokemons()}},{key:"render",value:function(){var e=this.props,t=e.pokemons,a=e.searchField,s=e.onSearchChange,c=e.isPending,o=t&&t.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(N,{searchChange:s}),r.a.createElement(y,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},c?r.a.createElement("h1",null,"Loading"):r.a.createElement(j,null,r.a.createElement(_,{pokemons:o,isPending:c})))))}}]),t}(n.Component),P=Object(i.b)(function(e){return{searchField:e.searchPokemons.searchField,pokemons:e.requestPokemons.pokemons,isPending:e.requestPokemons.isPending}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestPokemons:function(){return e(function(){var e=Object(w.a)(b.a.mark(function e(t){var a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"REQUEST_ROBOTS_PENDING"}),e.next=5,O.a.get("https://pokeapi.co/api/v2/pokemon/?limit=850");case 5:a=e.sent,n=a.data,t({type:"REQUEST_ROBOTS_SUCCESS",payload:n.results}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:"REQUEST_ROBOTS_FAILED",payload:e.t0});case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}())}}})(S),C=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.chain,a=e.img,n=e.evolve_from,s=e.name,c=a&&a,o=t&&t.evolves_to.length>1?t.evolves_to[0].species.url.split("/")[t.evolves_to[0].species.url.split("/").length-2]:null,i=n&&n.split("/")[n.split("/").length-2],l="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(o,".png?size=200x200"),p=i&&"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(i,".png?size=200x200");return i?r.a.createElement("div",{className:"evolutions"},r.a.createElement("div",{className:"evolution-row"},r.a.createElement("div",{className:"evolution-row-inner"},r.a.createElement("div",{className:"evolution-sprite monster-sprite"},r.a.createElement("img",{src:p,alt:""})),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg"},r.a.createElement("path",{d:"M24 16V8l16 16-16 16v-8H8V16z"})),r.a.createElement("div",{className:"evolution-sprite monster-sprite"},r.a.createElement("img",{src:c,alt:""}))),r.a.createElement("div",{className:"evolution-row-inner"},r.a.createElement("div",{className:"evolution-sprite monster-sprite"},r.a.createElement("img",{src:c,alt:""})),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg"},r.a.createElement("path",{d:"M24 16V8l16 16-16 16v-8H8V16z"})),r.a.createElement("div",{className:"evolution-sprite monster-sprite"},r.a.createElement("img",{src:l,alt:""}))))):o?r.a.createElement("div",{className:"evolutions"},r.a.createElement("div",{className:"evolution-row"},r.a.createElement("div",{className:"evolution-row-inner"},r.a.createElement("div",{className:"evolution-sprite monster-sprite"},r.a.createElement("img",{src:c,alt:""})),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg"},r.a.createElement("path",{d:"M24 16V8l16 16-16 16v-8H8V16z"})),r.a.createElement("div",{className:"evolution-sprite monster-sprite"},r.a.createElement("img",{src:l,alt:""}))),r.a.createElement("div",{className:"evolution-label"},r.a.createElement("span",null,r.a.createElement("strong",null),".")))):r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,s," ")," has no evolutions"))}}]),t}(n.Component),R=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.name,t=this.props.match.params.id;this.props.poke(e),this.props.spec(e),this.props.char(t)}},{key:"render",value:function(){var e=this.props.pokemon,t=e.sprites,a=e.abilities,n=e.height,s=e.name,c=e.stats,o=e.types,i=e.weight,l=this.props.chararcter,p=l.id,m=l.chain,u=t&&t.front_default,h=a&&a?a.map(function(e){return e.ability.name}).join(", "):"NA",v=o&&o.map(function(e){return e.type.name}).join(", "),E=c&&c.map(function(e){return r.a.createElement("div",{className:"row align-items-center",key:e.stat.name},r.a.createElement("div",{className:"col-12 col-md-".concat(3)},e.stat.name,":"),r.a.createElement("div",{className:"col-12 col-md".concat(9)},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar ",style:{width:"".concat(e.base_stat/1.7,"%"),backgroundColor:"#c2185b"},role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,e.base_stat)))))}),d=c&&c.map(function(e){return"".concat(e.effort," ").concat(e.stat.name)}).join(", "),g=this.props.species&&this.props.species.capture_rate?this.props.species.capture_rate:"NA",f=this.props.species&&this.props.species.hatch_counter?this.props.species.hatch_counter:"NA",b=this.props.species.egg_groups&&this.props.species.egg_groups?this.props.species.egg_groups.map(function(e){return e.name}).join(", "):"NA",w=this.props.species.evolves_from_species&&this.props.species.evolves_from_species.url,k=this.props.species.shape&&this.props.species.shape.name?this.props.species.shape.name:"NA";return this.props.match.params.id&&r.a.createElement("div",{className:"tc"},r.a.createElement("article",{className:"mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10"},r.a.createElement("div",{className:"tc"},r.a.createElement("h5",null,"Id: ",p),r.a.createElement("img",{alt:"pokemon",src:u,className:"br-100 h4 w4 dib ba b--black-05 pa2",title:"Photo of pokemon"}),r.a.createElement("h1",{className:"f3 mb2"},r.a.createElement("a",{href:"#",className:"f5 fw4 gray mt0"},s)),r.a.createElement("div",{className:"monster-minutia"},r.a.createElement("strong",null,"Type: "),v))),r.a.createElement("article",{className:"mw7 center bg-white br4 pa3 pa4-ns mv3 ba b--black-10"},r.a.createElement("div",{className:"tc"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-md-9"},E),r.a.createElement("div",{className:"row mt-1"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"f3 mb2 bg-green"},"Profile"),r.a.createElement("div",{className:"monster-minutia"},r.a.createElement("strong",null,"Height: "),r.a.createElement("span",null,n," m"),r.a.createElement("strong",null,"Weight: "),r.a.createElement("span",null,i," kg")),r.a.createElement("div",{className:"monster-minutia"},r.a.createElement("strong",null,"Catch Rate: "),r.a.createElement("span",null,g),r.a.createElement("strong",null,"Egg groups: "),r.a.createElement("span",null,b)),r.a.createElement("div",{className:"monster-minutia"},r.a.createElement("strong",null,"Abilities: "),r.a.createElement("span",null,h," "),r.a.createElement("strong",null,"EVs: "),r.a.createElement("span",null,d)),r.a.createElement("div",{className:"monster-minutia"},r.a.createElement("strong",null,"Hash Steps: "),r.a.createElement("span",null,f),r.a.createElement("strong",null,"Shape: "),r.a.createElement("span",null,k))),r.a.createElement("div",{className:"f3 mb2 bg-green"},"Evolution"),r.a.createElement(C,{id:p,chain:m,img:u,evolve_from:w,name:s})))}}]),t}(n.Component),T=Object(i.b)(function(e){return{pokemon:e.requestPokemon.pokemon,chararcter:e.requestPokemon.characteristics,species:e.requestPokemonSpecies.species}},function(e){return{poke:function(t){return e(function(e){return function(){var t=Object(w.a)(b.a.mark(function t(a){var n,r,s;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="https://pokeapi.co/api/v2/pokemon/".concat(e),t.next=4,O.a.get(n);case 4:r=t.sent,s=r.data,a({type:"GET_POKEMON_BY_NAME",pokemon:s}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:"GETTING_POKEMON_FAILED",error:t.t0});case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()}(t))},char:function(t){return e(function(e){return function(){var t=Object(w.a)(b.a.mark(function t(a){var n,r,s;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="https://pokeapi.co/api/v2/evolution-chain/".concat(e),t.next=4,O.a.get(n);case 4:r=t.sent,s=r.data,a({type:"GET_CHARACTERISTICS",char:s}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()}(t))},spec:function(t){return e(function(e){return function(){var t=Object(w.a)(b.a.mark(function t(a){var n,r,s;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="https://pokeapi.co/api/v2/pokemon-species/".concat(e),t.next=4,O.a.get(n);case 4:r=t.sent,s=r.data,a({type:"GET_SPECIES",species:s}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:"GET_SPECIES_ERROR",error:t.t0});case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(R),A=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",component:P}),r.a.createElement(g.a,{path:"/pokemon/:name/:id",component:T}))))}}]),t}(n.Component),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var G=a(18),L={searchField:""},F={pokemons:[],isPending:!0},D={pokemon:[],characteristics:[]},H={species:[]},M=(a(73),Object(p.createLogger)()),U=Object(o.c)({requestPokemons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{pokemons:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload});default:return e}},searchPokemons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestPokemon:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_POKEMON_BY_NAME":return Object(G.a)({},e,{pokemon:t.pokemon});case"GETTING_POKEMON_FAILED":return Object(G.a)({},e,{error:t.error});case"GET_CHARACTERISTICS":return Object(G.a)({},e,{characteristics:t.char});default:return e}},requestPokemonSpecies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_SPECIES":return Object(G.a)({},e,{species:t.species});case"GET_SPECIES_ERROR":return Object(G.a)({},e,{error:t.error});default:return e}}}),q=Object(o.d)(U,Object(o.a)(l.a,M));c.a.render(r.a.createElement(i.a,{store:q},r.a.createElement(A,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pwapokedex",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/pwapokedex","/service-worker.js");x?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):I(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):I(t,e)})}}()}},[[43,1,2]]]);
//# sourceMappingURL=main.899a8596.chunk.js.map