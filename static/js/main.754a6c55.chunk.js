(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/loading.c5590569.svg"},36:function(e,t,a){e.exports={Home:"home_Home__U7vAx"}},37:function(e,t,a){e.exports={Card:"gradientCard_Card__WOMtt"}},38:function(e,t,a){e.exports=a(84)},43:function(e,t,a){},47:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(29),r=a.n(c),l=(a(43),a(1)),i=a(2),s=a(6),u=a(4),m=a(5),d=a(14),p=a(12),h=a(30),E=a.n(h),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{position:"absolute",display:"flex",justifyContent:"center",height:"100vh",width:"100vw",top:0,bottom:0,left:0,right:0,backgroundColor:"white"}},o.a.createElement("img",{src:E.a,alt:"loading"}))}}]),t}(n.Component),v=a(31),g=a.n(v)()(),b=a(32),N={domain:"dev-p6v8iy5w.auth0.com",clientId:"dG8SZNuPt8TIQExvtwkA3QweeRRkkIy6",callbackUrl:"http://localhost:3000/callback",apiURL:"http://productos"},k=function(){function e(){Object(l.a)(this,e),this.auth0=new b.a.WebAuth({domain:N.domain,clientID:N.clientId,redirectUri:N.callbackUrl,responseType:"token id_token",scope:"read:productos",audience:N.apiURL}),this.login=this.login.bind(this),this.logout=this.logout.bind(this),this.handleAuthentication=this.handleAuthentication.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.getAccessToken=this.getAccessToken.bind(this),this.getIdToken=this.getIdToken.bind(this),this.renewSession=this.renewSession.bind(this)}return Object(i.a)(e,[{key:"login",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var e=this;this.auth0.parseHash(function(t,a){a&&a.accessToken&&a.idToken?e.setSession(a):t&&(g.replace("/productos"),console.log(t),alert("Error: ".concat(t.error,". Check the console for further details.")))})}},{key:"getAccessToken",value:function(){return localStorage.getItem("accessToken")}},{key:"getIdToken",value:function(){return localStorage.getItem("idToken")}},{key:"setSession",value:function(e){var t=1e3*e.expiresIn+(new Date).getTime();this.accessToken=e.accessToken,this.idToken=e.idToken,this.expiresAt=t,localStorage.setItem("idToken",this.idToken),localStorage.setItem("accessToken",this.accessToken),localStorage.setItem("expiresAt",this.expiresAt),g.replace("/productos")}},{key:"renewSession",value:function(){var e=this;this.auth0.checkSession({},function(t,a){a&&a.accessToken&&a.idToken?e.setSession(a):t&&(e.logout(),console.log(t),alert("Could not get a new token (".concat(t.error,": ").concat(t.error_description,").")))})}},{key:"logout",value:function(){this.accessToken=null,this.idToken=null,this.expiresAt=0,localStorage.removeItem("idToken"),localStorage.removeItem("accessToken"),localStorage.removeItem("expiresAt"),this.auth0.logout({returnTo:window.location.origin}),g.replace("/productos")}},{key:"isAuthenticated",value:function(){var e=localStorage.getItem("expiresAt");return(new Date).getTime()<e}}]),e}(),j=(a(47),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={isLogin:!1},a.logout=function(){a.props.auth.logout()},a.login=function(){a.props.auth.login()},a.loginbtn=function(){return o.a.createElement("button",{onClick:a.login,className:"header-log-btn"},o.a.createElement("i",{className:"fas fa-sign-out-alt header-log-text"})," login")},a.logoutbtn=function(){return o.a.createElement("button",{onClick:a.logout,className:"header-log-btn"},o.a.createElement("i",{className:"fas fa-sign-in-alt header-log-text"})," logout")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.auth.isAuthenticated();this.setState({isLogin:e})}},{key:"render",value:function(){var e=this.props.auth.isAuthenticated;return o.a.createElement("header",{className:"header"},o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"header-top-bar"},e()?this.logoutbtn():this.loginbtn()),o.a.createElement("div",{className:"header-logo"},o.a.createElement("img",{src:"./img/logo.png",alt:"logo"}))))}}]),t}(n.Component)),y=Object(p.e)(j),O=(a(56),function(){return o.a.createElement("div",{className:"section-container"},o.a.createElement("div",{className:"nosotros-text contenido-container"},o.a.createElement("div",{className:"line-title"},o.a.createElement("h2",null,"Sobre nosotros")),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum sed justo non vulputate. Pellentesque condimentum, justo a pulvinar interdum, diam justo vestibulum quam, et blandit sapien mi vitae nisl. Etiam vel dignissim nulla, et condimentum dolor.")),o.a.createElement("div",{className:"nosotros-list contenido-container"},o.a.createElement("div",{className:"item"},o.a.createElement("div",{className:"icon"},o.a.createElement("i",{class:"fas fa-dollar-sign"})),o.a.createElement("h3",null,"Consectetur adipiscing elit."),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")),o.a.createElement("div",{className:"item"},o.a.createElement("div",{className:"icon"},o.a.createElement("i",{class:"fas fa-truck"})),o.a.createElement("h3",null,"Consectetur adipiscing elit."),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")),o.a.createElement("div",{className:"item"},o.a.createElement("div",{className:"icon"},o.a.createElement("i",{class:"fas fa-globe-americas"})),o.a.createElement("h3",null," Lorem ipsum"),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "))))}),w=(a(57),function(){return o.a.createElement("div",{className:"section-container"},o.a.createElement("div",{className:"contenido-container noFound-container"},o.a.createElement("h1",null," 404 error"),o.a.createElement("h2",null," Not found ")))}),A=a(35),x=a.n(A),T=a(7),I=(a(76),function(e){var t=e.producto,a=t.imagen,n=t.nombre,c=t.precio,r=t.id;return o.a.createElement("div",{className:"producto"},o.a.createElement("img",{src:"/img/".concat(a,".png"),alt:n}),o.a.createElement("div",{className:"producto-body"},o.a.createElement("h3",null,n," "),o.a.createElement("p",null,"Precio:  ",o.a.createElement("span",{className:"precio"},"$",c)),o.a.createElement(T.a,{to:"/producto/".concat(r),className:"link"}," Mas Informacion ")))}),C=(a(77),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handle=function(){console.log("click")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"buscador-container"},o.a.createElement("input",{className:"buscador",type:"text",placeholder:"Encuentralo al toque...",onChange:this.handle}),o.a.createElement("div",{className:"icon-container"},o.a.createElement("i",{className:"fas fa-search icon"})))}}]),t}(n.Component)),L=(a(78),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={productos:null,terminoBusqueda:""},a.getApiData=function(){var e=a.props.auth.getAccessToken,t={Authorization:"Bearer ".concat(e())};x.a.get("http://localhost:8080/productos",{headers:t}).then(function(e){return a.setState(function(t){return a.props.handlerproducts(e.data),{productos:e.data}})})},a.loginHandle=function(){a.props.auth.login()},a.renderProductos=function(){return a.state.productos?a.state.productos.map(function(e,t){return o.a.createElement(I,{key:t,producto:e})}):o.a.createElement("p",null,"cargando")},a.renderLoginBtn=function(){return o.a.createElement("div",{className:" productos-contenedor-login"},o.a.createElement("h2",null," Ingresa para disfrutar del mejor contenido!"),o.a.createElement("button",{className:"productos-login-btn",onClick:a.loginHandle}," Iniciar sesion"))},a.renderBuscador=function(){return o.a.createElement(C,{className:""})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.props.auth.getAccessToken()&&this.getApiData()}},{key:"render",value:function(){var e=this.props.auth.isAuthenticated;return o.a.createElement("div",{className:"section-container fadeIn"},e()&&this.renderBuscador(),o.a.createElement("div",{className:"productos"},e()?this.renderProductos():this.renderLoginBtn()))}}]),t}(n.Component)),S=(a(79),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).renderLoginBtn=function(){return o.a.createElement("div",{className:" productos-contenedor-login"},o.a.createElement("h2",null," Ingresa para disfrutar del mejor contenido!"),o.a.createElement("button",{className:"productos-login-btn",onClick:a.loginHandle}," Iniciar sesion"))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderinfo",value:function(){var e=this.props.producto,t=e.imagen,a=e.nombre,n=e.precio,c=e.descripcion;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"info-producto"},o.a.createElement("div",{className:"info-producto-img"},o.a.createElement("img",{src:"/img/".concat(t,".png"),alt:"imagen"})),o.a.createElement("div",{className:"info-producto-body"},o.a.createElement("h1",null,a),o.a.createElement("span",{className:"precio"},"$ ",n),o.a.createElement("p",null,c))))}},{key:"renderProductoDesconocido",value:function(){return o.a.createElement("div",{className:" productos-contenedor-login"},o.a.createElement("h2",null,"Parece que este producto no esta disponible en este momento!"),o.a.createElement("p",null,"haz click en volver para ver nuestras ofertas."),o.a.createElement(T.a,{className:"productos-login-btn",to:"/"},"Volver"))}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},this.props.auth.isAuthenticated()?this.props.producto?this.renderinfo():this.renderProductoDesconocido():this.renderLoginBtn())}}]),t}(n.Component)),P=(a(80),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",{className:"navegacion"},o.a.createElement(T.b,{exact:!0,className:"link",to:"/nosotros",activeClassName:"active"}," Nosotros "),o.a.createElement(T.b,{exact:!0,className:"link",to:"/productos",activeClassName:"active"}," Productos "),o.a.createElement(T.b,{exact:!0,className:"link",to:"/contacto",activeClassName:"active"}," Contacto "),o.a.createElement("span",{className:"nav-span"}))}}]),t}(n.Component)),B=(a(81),function(){return o.a.createElement("div",{className:"section-container fadeIn"},o.a.createElement("div",{className:"contenido-container"},o.a.createElement("div",{className:"line-title flex-title"},o.a.createElement("h2",{className:""},"Ponte en contacto")),o.a.createElement("div",{className:"contact-hero"},o.a.createElement("div",{className:"contact-menu-item"},o.a.createElement("i",{class:"fas fa-map-marker-alt"}),o.a.createElement("h3",null,"DIRECCION"),o.a.createElement("h5",null," lorem ipsum "),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt")),o.a.createElement("div",{className:"contact-menu-item"},o.a.createElement("i",{class:"fas fa-phone"}),o.a.createElement("h3",null,"TELEFONOS"),o.a.createElement("h5",null," lorem ipsum "),o.a.createElement("p",null,"Lorem ipsum dolor sit amet "),o.a.createElement("h5",null," lorem ipsum "),o.a.createElement("p",null,"Lorem ipsum dolor sit amet ")),o.a.createElement("div",{className:"contact-menu-item"},o.a.createElement("i",{class:"far fa-comment-alt"}),o.a.createElement("h3",null,"EMAIL"),o.a.createElement("h5",null," lorem ipsum "),o.a.createElement("p",null,"Lorem ipsum dolor sit amet "),o.a.createElement("h5",null," lorem ipsum "),o.a.createElement("p",null,"Lorem ipsum dolor sit amet ")))),o.a.createElement("div",{className:"contact-form contenido-container"},o.a.createElement("form",null,o.a.createElement("legend",null,"Envianos tu mensaje!"),o.a.createElement("div",{className:"input-field"},o.a.createElement("label",null,"Nombre: "),o.a.createElement("input",{type:"text",name:"nombre",id:"nombre",className:"input",placeholder:"ejem: Manuel Rivero"})),o.a.createElement("div",{className:"input-field"},o.a.createElement("label",null,"Email: "),o.a.createElement("input",{type:"text",name:"email",id:"email",className:"input",placeholder:"ejem: exaple@123.com"})),o.a.createElement("div",{className:"input-field"},o.a.createElement("label",null,"Mensaje: "),o.a.createElement("textarea",{name:"mensaje",id:"mensaje",className:"input",placeholder:"Escribe tu mensaje aqui..."}," ")),o.a.createElement("div",{className:"input-field"},o.a.createElement("button",{type:"submit",className:"btn"},"Enviar")))))}),q=a(36),D=a.n(q),_=a(37),M=a.n(_);function H(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:[M.a.Card,"fadeUp"].join(" ")},o.a.createElement("div",{className:"fadeDown",style:{marginBottom:"5rem"}},e.children)))}function U(e){var t=o.a.createElement("div",null,o.a.createElement("h1",null,"Lo mas exclusivo a menor precio!"),o.a.createElement("p",null,"Ingresa para obtener los mejores descuentos y premios asombrosos."),o.a.createElement("button",{onClick:function(){e.auth.login()}},"Log in"),o.a.createElement(T.a,{to:"/productos"},"Empezar a comprar!"));return e.auth.isAuthenticated()&&(t=o.a.createElement("div",null,o.a.createElement("h1",null,"Bienvenido! estas listo para ver el mejor contenido"),o.a.createElement(T.a,{to:"/productos"},"Empezar a comprar!"))),o.a.createElement("div",{className:[D.a.Home,"section-container"].join(" ")},o.a.createElement(H,null,t))}a(82);var R=new k,W=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={productos:[]},e.handlerproducts=e.handlerproducts.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handlerproducts",value:function(e){this.setState(function(t){return{productos:e}})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"routes"},o.a.createElement(p.b,{history:g,basename:"https://manuelrivero.github.io/"},o.a.createElement(y,{auth:R}),o.a.createElement(P,null),o.a.createElement(p.c,null,o.a.createElement(p.a,{path:"/callback",render:function(e){return function(e){var t=e.location;/access_token|id_token|error/.test(t.hash)&&R.handleAuthentication()}(e),o.a.createElement(f,e)}}),o.a.createElement(p.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(U,Object.assign({auth:R},e))}}),o.a.createElement(p.a,{exact:!0,path:"/productos",render:function(t){return o.a.createElement(L,Object.assign({auth:R},t,{handlerproducts:e.handlerproducts}))}}),o.a.createElement(p.a,{exact:!0,path:"/producto/:productoid",render:function(t){var a=t.match.params.productoid;return o.a.createElement(S,Object.assign({auth:R},t,{producto:e.state.productos[a]}))}}),o.a.createElement(p.a,{exact:!0,path:"/nosotros",component:O}),o.a.createElement(p.a,{exact:!0,path:"/contacto",component:B}),o.a.createElement(p.a,{component:w}))))}}]),t}(o.a.Component),z=(a(83),function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("div",{className:"footer-c-1 "},o.a.createElement("div",{className:"footer-item"},o.a.createElement("h2",null," Lorem ipsum "),o.a.createElement("i",{className:"fab fa-facebook icon"}),o.a.createElement("i",{className:"fab fa-instagram icon"}),o.a.createElement("i",{className:"fab fa-twitter icon"})),o.a.createElement("div",{className:"footer-item"},o.a.createElement("h2",null," Lorem ipsum "),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum sed justo non vulputate. Pellentesque condimentum."))),o.a.createElement("div",{className:"footer-c-2"},o.a.createElement("span",{className:"divider"}),o.a.createElement("div",{className:"footer-item "},o.a.createElement("img",{className:"logo",src:"./img/logo.png",alt:"logo"}),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum sed justo non vulputate. Pellentesque condimentum, justo a pulvinar interdum, diam justo vestibulum quam, et blandit sapien mi vitae nisl. Etiam vel dignissim nulla, et condimentum dolor. In sagittis semper risus ut laoreet. Phasellus ac aliquet justo"))))}),F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={productos:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.setState({productos:null})}},{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(W,null),o.a.createElement(z,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.754a6c55.chunk.js.map