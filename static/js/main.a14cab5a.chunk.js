(this.webpackJsonpnewreact=this.webpackJsonpnewreact||[]).push([[0],{12:function(e,a,n){},13:function(e,a,n){},15:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(6),o=n.n(i),c=(n(12),n(1)),l=n(2),s=n(4),m=n(3),h=function(e){e.Rebots;throw new Error("Nooo!")},u=function(e){e.searchfiel;var a=e.searchChange;return r.a.createElement("input",{type:"search",placeholder:"search rebots",onChange:a})},d=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],f=function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(e){var t;return Object(c.a)(this,n),(t=a.call(this,e)).state={hasError:!1},t}return Object(l.a)(n,[{key:"componentDidCatch",value:function(e,a){this.state({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"ooops. that is not good"):this.props.children}}]),n}(t.Component),b=(n(13),function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"1px solid black",height:"800px"}},e.children)}),p=function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(){var e;return Object(c.a)(this,n),(e=a.call(this)).onSearchChange=function(a){e.setState({Searchfield:a.target.value})},e.state={Rebots:d,Searchfield:""},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,a=e.Rebots,n=e.Searchfield,t=a.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())}));return a.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f2"},"Robot Freinds"),r.a.createElement(u,{searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(f,null,r.a.createElement(h,{Rebots:t})))):r.a.createElement("h1",null,"Loading..")}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.a14cab5a.chunk.js.map