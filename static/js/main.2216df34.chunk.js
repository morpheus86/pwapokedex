(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.name,a=e.idx;return r.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{alt:"pokemon-img",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(a,".png?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t)))}},45:function(e,t,a){e.exports=a(80)},73:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),s=a.n(c),o=a(16),i=a(15),l=a(42),p=a(43),u=(a(54),a(9)),m=a(10),h=a(12),E=a(11),d=a(13),v=a(25),b=a(14),g=a(8),f=a.n(g),k=a(21),O=a(22),N=a.n(O),_=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},y=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},w=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(E.a)(t).call(this,e))).state={hasError:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),t}(n.Component),j=(a(73),Object(n.lazy)(function(){return a.e(3).then(a.bind(null,81))})),S=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestPokemons()}},{key:"render",value:function(){var e=this.props,t=e.pokemons,a=e.searchField,c=e.onSearchChange,s=e.isPending,o=t&&t.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(_,{searchChange:c}),r.a.createElement(y,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},s?r.a.createElement("h1",null,"Loading"):r.a.createElement(w,null,r.a.createElement(j,{pokemons:o,isPending:s})))))}}]),t}(n.Component),P=Object(i.b)(function(e){return{searchField:e.searchPokemons.searchField,pokemons:e.requestPokemons.pokemons,isPending:e.requestPokemons.isPending}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestPokemons:function(){return e(function(){var e=Object(k.a)(f.a.mark(function e(t){var a,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"REQUEST_ROBOTS_PENDING"}),e.next=5,N.a.get("https://pokeapi.co/api/v2/pokemon/?limit=850");case 5:a=e.sent,n=a.data,t({type:"REQUEST_ROBOTS_SUCCESS",payload:n.results}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:"REQUEST_ROBOTS_FAILED",payload:e.t0});case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}())}}})(S),C=a(39),R=a.n(C),T=a(40),A=function(e){var t=e.pokemons,a=t.length>0?r.a.createElement("div",null,t.map(function(e,a){var n=t[a].url.split("/")[t[a].url.split("/").length-2];return r.a.createElement(R.a,{key:a,offset:200,once:!0,debounce:!0},r.a.createElement(v.b,{to:"/pokemon/".concat(t[a].name,"/").concat(a+1)},r.a.createElement(T.a,{id:e.id,name:e.name,idx:n})))})):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Loading..."));return r.a.createElement("div",null,a)},I=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.name,t=this.props.match.params.id;this.props.poke(e),this.props.spec(e),this.props.char(t)}},{key:"render",value:function(){var e=this.props.pokemon,t=e.sprites,a=e.abilities,n=e.height,c=e.name,s=e.stats,o=e.types,i=e.weight,l=this.props.chararcter,p=l.id,u=l.chain,m=t&&t.front_default,h=a&&a?a.map(function(e){return e.ability.name}).join(", "):"NA",E=o&&o.map(function(e){return e.type.name}).join(", "),d=s&&s.map(function(e){return r.a.createElement("div",{className:"row align-items-center",key:e.stat.name},r.a.createElement("div",{className:"col-12 col-md-".concat(3)},e.stat.name,":"),r.a.createElement("div",{className:"col-12 col-md".concat(9)},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar ",style:{width:"".concat(e.base_stat/1.7,"%"),backgroundColor:"#c2185b"},role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},r.a.createElement("small",null,e.base_stat)))))}),v=s&&s.map(function(e){return"".concat(e.effort," ").concat(e.stat.name)}).join(", "),b=this.props.species&&this.props.species.capture_rate?this.props.species.capture_rate:"NA",g=this.props.species&&this.props.species.hatch_counter?this.props.species.hatch_counter:"NA",f=this.props.species.egg_groups&&this.props.species.egg_groups?this.props.species.egg_groups.map(function(e){return e.name}).join(", "):"NA",k=this.props.species.evolves_from_species&&this.props.species.evolves_from_species.url,O=this.props.species.shape&&this.props.species.shape.name?this.props.species.shape.name:"NA";return this.props.match.params.id&&r.a.createElement("div",{className:"tc"},r.a.createElement("article",{className:"mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10"},r.a.createElement("div",{className:"tc"},r.a.createElement("h5",null,"Id: ",p),r.a.createElement("img",{alt:"pokemon",src:m,className:"br-100 h4 w4 dib ba b--black-05 pa2",title:"Photo of pokemon"}),r.a.createElement("h1",{className:"f3 mb2"},r.a.createElement("a",{href:"#",className:"f5 fw4 gray mt0"},c)),r.a.createElement("div",{className:"monster-minutia"},r.a.createElement("strong",null,"Type: "),E))),r.a.createElement("article",{className:"mw7 center bg-white br4 pa3 pa4-ns mv3 ba b--black-10"},r.a.createElement("div",{className:"tc"},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-md-9"},d),r.a.createElement("div",{className:"row mt-1"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"f3 mb2 bg-green"},"Profile"),r.a.createElement("div",{className:"monster-minutia"},r.a.createElement("strong",null,"Height: "),r.a.createElement("span",null,n," m"),r.a.createElement("strong",null,"Weight: "),r.a.createElement("span",null,i," kg")),r.a.createElement("div",{className:"monster-minutia"},r.a.createElement("strong",null,"Catch Rate: "),r.a.createElement("span",null,b),r.a.createElement("strong",null,"Egg groups: "),r.a.createElement("span",null,f)),r.a.createElement("div",{className:"monster-minutia"},r.a.createElement("strong",null,"Abilities: "),r.a.createElement("span",null,h," "),r.a.createElement("strong",null,"EVs: "),r.a.createElement("span",null,v)),r.a.createElement("div",{className:"monster-minutia"},r.a.createElement("strong",null,"Hash Steps: "),r.a.createElement("span",null,g),r.a.createElement("strong",null,"Shape: "),r.a.createElement("span",null,O))),r.a.createElement("div",{className:"f3 mb2 bg-green"},"Evolution"),r.a.createElement(A,{id:p,chain:u,img:m,evolve_from:k,name:c})))}}]),t}(n.Component),x=Object(i.b)(function(e){return{pokemon:e.requestPokemon.pokemon,chararcter:e.requestPokemon.characteristics,species:e.requestPokemonSpecies.species}},function(e){return{poke:function(t){return e(function(e){return function(){var t=Object(k.a)(f.a.mark(function t(a){var n,r,c;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="https://pokeapi.co/api/v2/pokemon/".concat(e),t.next=4,N.a.get(n);case 4:r=t.sent,c=r.data,a({type:"GET_POKEMON_BY_NAME",pokemon:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:"GETTING_POKEMON_FAILED",error:t.t0});case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()}(t))},char:function(t){return e(function(e){return function(){var t=Object(k.a)(f.a.mark(function t(a){var n,r,c;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="https://pokeapi.co/api/v2/evolution-chain/".concat(e),t.next=4,N.a.get(n);case 4:r=t.sent,c=r.data,a({type:"GET_CHARACTERISTICS",char:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()}(t))},spec:function(t){return e(function(e){return function(){var t=Object(k.a)(f.a.mark(function t(a){var n,r,c;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="https://pokeapi.co/api/v2/pokemon-species/".concat(e),t.next=4,N.a.get(n);case 4:r=t.sent,c=r.data,a({type:"GET_SPECIES",species:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:"GET_SPECIES_ERROR",error:t.t0});case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(I),G=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement("div",null,r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:P}),r.a.createElement(b.a,{path:"/pokemon/:name/:id",component:x}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=a(18),L={searchField:""},D={pokemons:[],isPending:!0},q={pokemon:[],characteristics:[]},B={species:[]},H=(a(79),Object(p.createLogger)()),M=Object(o.c)({requestPokemons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{pokemons:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload});default:return e}},searchPokemons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestPokemon:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_POKEMON_BY_NAME":return Object(F.a)({},e,{pokemon:t.pokemon});case"GETTING_POKEMON_FAILED":return Object(F.a)({},e,{error:t.error});case"GET_CHARACTERISTICS":return Object(F.a)({},e,{characteristics:t.char});default:return e}},requestPokemonSpecies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_SPECIES":return Object(F.a)({},e,{species:t.species});case"GET_SPECIES_ERROR":return Object(F.a)({},e,{error:t.error});default:return e}}}),U=Object(o.d)(M,Object(o.a)(l.a,H));s.a.render(r.a.createElement(i.a,{store:U},r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.2216df34.chunk.js.map