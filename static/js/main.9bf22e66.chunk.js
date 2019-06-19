(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,n){e.exports=n(76)},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(24),c=n.n(s),o=n(18),i=n(17),l=n(41),m=n(42),p=(n(54),n(8)),u=n(9),h=n(11),E=n(10),v=n(12),d=n(26),g=n(16),f=n(15),b=n.n(f),w=n(21),k=n(22),N=n.n(k),O=function(e){var t=e.name,n=e.idx;e.count;return r.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{alt:"pokemon-img",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t)))},_=n(44),j=function(e){var t=e.pokemons;return t.length>0?r.a.createElement(_.a,{className:"",width:1e3,height:800,columnCount:5,columnWidth:200,rowCount:20,rowHeight:200,overscanRowsCount:3},function(e){var n=e.columnIndex,a=e.rowIndex,s=e.style,c=n+5*a,o=t&&t[c]?t[c].url.split("/")[t[c].url.split("/").length-2]:null,i=t&&t[c]?t[c].name:null,l=t&&t[c]?t[c].id:null;return r.a.createElement(d.b,{to:"/pokemon/".concat(i,"/").concat(c+1)},r.a.createElement(O,{id:l,name:i,idx:o,style:s}))}):r.a.createElement("div",null,"Loading ...")},y=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},S=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},C=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(E.a)(t).call(this,e))).state={hasError:!1},n}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),t}(a.Component),P=(n(74),function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestPokemons()}},{key:"render",value:function(){var e=this.props,t=e.pokemons,n=e.searchField,a=e.onSearchChange,s=e.isPending,c=t&&t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(y,{searchChange:a}),r.a.createElement(S,null,s?r.a.createElement("h1",null,"Loading"):r.a.createElement(C,null,r.a.createElement(j,{pokemons:c,isPending:s}))))}}]),t}(a.Component)),x=Object(i.b)(function(e){return{searchField:e.searchPokemons.searchField,pokemons:e.requestPokemons.pokemons,isPending:e.requestPokemons.isPending}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestPokemons:function(){return e(function(){var e=Object(w.a)(b.a.mark(function e(t){var n,a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"REQUEST_ROBOTS_PENDING"}),e.next=5,N.a.get("https://pokeapi.co/api/v2/pokemon/?limit=850");case 5:n=e.sent,a=n.data,t({type:"REQUEST_ROBOTS_SUCCESS",payload:a.results}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:"REQUEST_ROBOTS_FAILED",payload:e.t0});case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}())}}})(P),R=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.chain,n=e.img,a=e.evolve_from,s=e.name,c=n&&n,o=t&&t.evolves_to.length>1?t.evolves_to[0].species.url.split("/")[t.evolves_to[0].species.url.split("/").length-2]:null,i=a&&a.split("/")[a.split("/").length-2],l="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(o,".png?size=200x200"),m=i&&"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(i,".png?size=200x200");return i?r.a.createElement("div",{className:"evolutions"},r.a.createElement("div",{className:"evolution-row"},r.a.createElement("div",{className:"evolution-row-inner"},r.a.createElement("div",{className:"evolution-sprite monster-sprite"},r.a.createElement("img",{src:m,alt:""})),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg"},r.a.createElement("path",{d:"M24 16V8l16 16-16 16v-8H8V16z"})),r.a.createElement("div",{className:"evolution-sprite monster-sprite"},r.a.createElement("img",{src:c,alt:""}))),r.a.createElement("div",{className:"evolution-row-inner"},r.a.createElement("div",{className:"evolution-sprite monster-sprite"},r.a.createElement("img",{src:c,alt:""})),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg"},r.a.createElement("path",{d:"M24 16V8l16 16-16 16v-8H8V16z"})),r.a.createElement("div",{className:"evolution-sprite monster-sprite"},r.a.createElement("img",{src:l,alt:""}))))):o?r.a.createElement("div",{className:"evolutions"},r.a.createElement("div",{className:"evolution-row"},r.a.createElement("div",{className:"evolution-row-inner"},r.a.createElement("div",{className:"evolution-sprite monster-sprite"},r.a.createElement("img",{src:c,alt:""})),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"svg"},r.a.createElement("path",{d:"M24 16V8l16 16-16 16v-8H8V16z"})),r.a.createElement("div",{className:"evolution-sprite monster-sprite"},r.a.createElement("img",{src:l,alt:""}))),r.a.createElement("div",{className:"evolution-label"},r.a.createElement("span",null,r.a.createElement("strong",null),".")))):r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,s," ")," has no evolutions"))}}]),t}(a.Component),T=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.name,t=this.props.match.params.id;this.props.poke(e),this.props.spec(e),this.props.char(t)}},{key:"render",value:function(){var e=this.props.pokemon,t=e.sprites,n=e.abilities,a=e.height,s=e.name,c=e.stats,o=e.types,i=e.weight,l=this.props.chararcter,m=l.id,p=l.chain,u=t&&t.front_default,h=n&&n?n.map(function(e){return e.ability.name}).join(", "):"NA",E=o&&o.map(function(e){return e.type.name}).join(", "),v=c&&c.map(function(e){return r.a.createElement("div",{className:"row align-items-center",key:e.stat.name},r.a.createElement("div",{className:"col-12 col-md-".concat(3)},e.stat.name,":"),r.a.createElement("div",{className:"col-12 col-md".concat(9)},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar ",style:{width:"".concat(e.base_stat/1.7,"%"),backgroundColor:"#c2185b"},role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,e.base_stat)))))}),d=c&&c.map(function(e){return"".concat(e.effort," ").concat(e.stat.name)}).join(", "),g=this.props.species&&this.props.species.capture_rate?this.props.species.capture_rate:"NA",f=this.props.species&&this.props.species.hatch_counter?this.props.species.hatch_counter:"NA",b=this.props.species.egg_groups&&this.props.species.egg_groups?this.props.species.egg_groups.map(function(e){return e.name}).join(", "):"NA",w=this.props.species.evolves_from_species&&this.props.species.evolves_from_species.url,k=this.props.species.shape&&this.props.species.shape.name?this.props.species.shape.name:"NA";return this.props.match.params.id&&r.a.createElement("div",{className:"tc"},r.a.createElement("article",{className:"mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10"},r.a.createElement("div",{className:"tc"},r.a.createElement("h5",null,"Id: ",m),r.a.createElement("img",{alt:"pokemon",src:u,className:"br-100 h4 w4 dib ba b--black-05 pa2",title:"Photo of pokemon"}),r.a.createElement("h1",{className:"f3 mb2"},r.a.createElement("a",{href:"#",className:"f5 fw4 gray mt0"},s)),r.a.createElement("div",{className:"monster-minutia"},r.a.createElement("strong",null,"Type: "),E))),r.a.createElement("article",{className:"mw7 center bg-white br4 pa3 pa4-ns mv3 ba b--black-10"},r.a.createElement("div",{className:"tc"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-md-9"},v),r.a.createElement("div",{className:"row mt-1"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"f3 mb2 bg-green"},"Profile"),r.a.createElement("div",{className:"monster-minutia"},r.a.createElement("strong",null,"Height: "),r.a.createElement("span",null,a," m"),r.a.createElement("strong",null,"Weight: "),r.a.createElement("span",null,i," kg")),r.a.createElement("div",{className:"monster-minutia"},r.a.createElement("strong",null,"Catch Rate: "),r.a.createElement("span",null,g),r.a.createElement("strong",null,"Egg groups: "),r.a.createElement("span",null,b)),r.a.createElement("div",{className:"monster-minutia"},r.a.createElement("strong",null,"Abilities: "),r.a.createElement("span",null,h," "),r.a.createElement("strong",null,"EVs: "),r.a.createElement("span",null,d)),r.a.createElement("div",{className:"monster-minutia"},r.a.createElement("strong",null,"Hash Steps: "),r.a.createElement("span",null,f),r.a.createElement("strong",null,"Shape: "),r.a.createElement("span",null,k))),r.a.createElement("div",{className:"f3 mb2 bg-green"},"Evolution"),r.a.createElement(R,{id:m,chain:p,img:u,evolve_from:w,name:s})))}}]),t}(a.Component),I=Object(i.b)(function(e){return{pokemon:e.requestPokemon.pokemon,chararcter:e.requestPokemon.characteristics,species:e.requestPokemonSpecies.species}},function(e){return{poke:function(t){return e(function(e){return function(){var t=Object(w.a)(b.a.mark(function t(n){var a,r,s;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a="https://pokeapi.co/api/v2/pokemon/".concat(e),t.next=4,N.a.get(a);case 4:r=t.sent,s=r.data,n({type:"GET_POKEMON_BY_NAME",pokemon:s}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n({type:"GETTING_POKEMON_FAILED",error:t.t0});case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()}(t))},char:function(t){return e(function(e){return function(){var t=Object(w.a)(b.a.mark(function t(n){var a,r,s;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a="https://pokeapi.co/api/v2/evolution-chain/".concat(e),t.next=4,N.a.get(a);case 4:r=t.sent,s=r.data,n({type:"GET_CHARACTERISTICS",char:s}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()}(t))},spec:function(t){return e(function(e){return function(){var t=Object(w.a)(b.a.mark(function t(n){var a,r,s;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a="https://pokeapi.co/api/v2/pokemon-species/".concat(e),t.next=4,N.a.get(a);case 4:r=t.sent,s=r.data,n({type:"GET_SPECIES",species:s}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n({type:"GET_SPECIES_ERROR",error:t.t0});case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(T),A=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{basename:"/pwapokedex/"},r.a.createElement("div",null,r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",component:x}),r.a.createElement(g.a,{path:"/pokemon/:name/:id",component:I}))))}}]),t}(a.Component),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var F=n(19),H={searchField:""},D={pokemons:[],isPending:!0},M={pokemon:[],characteristics:[]},q={species:[]},B=(n(75),Object(m.createLogger)()),U=Object(o.c)({requestPokemons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{pokemons:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload});default:return e}},searchPokemons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestPokemon:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_POKEMON_BY_NAME":return Object(F.a)({},e,{pokemon:t.pokemon});case"GETTING_POKEMON_FAILED":return Object(F.a)({},e,{error:t.error});case"GET_CHARACTERISTICS":return Object(F.a)({},e,{characteristics:t.char});default:return e}},requestPokemonSpecies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_SPECIES":return Object(F.a)({},e,{species:t.species});case"GET_SPECIES_ERROR":return Object(F.a)({},e,{error:t.error});default:return e}}}),V=Object(o.d)(U,Object(o.a)(l.a,B));c.a.render(r.a.createElement(i.a,{store:V},r.a.createElement(A,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/pwapokedex",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/pwapokedex","/service-worker.js");G?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):L(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):L(e)})}}()}},[[45,1,2]]]);
//# sourceMappingURL=main.9bf22e66.chunk.js.map