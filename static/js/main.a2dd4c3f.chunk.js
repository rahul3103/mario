(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,n){e.exports=n.p+"static/media/mario.dbe70930.png"},117:function(e,t,n){e.exports=n.p+"static/media/mushroom.0ad9b5a9.png"},118:function(e,t,n){e.exports=n.p+"static/media/arrow.e4a9dc72.png"},197:function(e,t,n){e.exports=n(337)},202:function(e,t,n){},337:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(15),s=n.n(o),l=(n(202),n(40)),i=n(41),c=n(42),u=n(44),m=n(43),h=n(45),d=n(16),g=n(120),v=n(115),p=n(116),f=n.n(p),b=n(117),w=n.n(b),y={gridCell:{backgroundColor:"#fff",height:40}},C=function(e){var t=e.mushroom,n=e.mario,a=n&&f.a||t&&w.a;return r.a.createElement("div",{style:y.gridCell},a&&r.a.createElement("img",{style:{marginTop:n?0:5},width:30,height:n?40:30,alt:"mushroom",src:a}))},E={display:"grid",gridGap:2,backgroundColor:"lightgrey",padding:2,margin:"0 auto"},k=function(e){var t=e.rows,n=e.columns,a=e.marioPos,o=e.mushroomsPos,s=Array.from({length:n},function(e,t){return t}),l=Array.from({length:t},function(e,t){return t}),i=40*n+2*n+2,c="40px ".repeat(n),u=l.map(function(e){return s.map(function(t){var s=e*n+t+1,l=a[0]*n+a[1]+1;return r.a.createElement(C,{mushroom:o.includes(s),mario:l===s,key:e+" "+t})})});return r.a.createElement("div",{style:Object(v.a)({},E,{width:i,gridTemplateColumns:c})},u)},S=n(118),O=n.n(S),x=function(e,t){return{direction:null,currentPos:[0,0],mushrooms:function(e,t){for(var n=[];n.length<e;){var a=Math.floor(Math.random()*e*t)+1;-1===n.indexOf(a)&&n.push(a)}return n}(e,t),timer:!1}},j=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).checkMushroom=function(){var e=n.state,t=e.mushrooms,a=e.currentPos,r=n.props.columns,o=a[0]*r+a[1]+1;return t.indexOf(o)>-1&&(t=t.filter(function(e){return e!==o})),t},n.moveMario=function(){var e=n.state,t=e.currentPos,a=e.direction,r=Object(g.a)(t),o=n.props,s=o.rows,l=o.columns,i=o.updateMove,c=o.changeStatus,u=n.checkMushroom();if(u.length>0){switch(a){case 40:r[0]===s-1?(r[0]-=1,n.changeDirection({keyCode:38})):r[0]+=1;break;case 38:0===r[0]?(r[0]+=1,n.changeDirection({keyCode:40})):r[0]-=1;break;case 39:r[1]===l-1?(r[1]-=1,n.changeDirection({keyCode:37})):r[1]+=1;break;case 37:0===r[1]?(r[1]+=1,n.changeDirection({keyCode:39})):r[1]-=1}n.setState({currentPos:r,mushrooms:u}),i()}else c(2),clearInterval(n.moveMarioInterval)},n.changeDirection=function(e){var t=e.keyCode,a=n.state.timer;[37,38,39,40].includes(t)&&n.state.mushrooms.length>0&&(a||(a=!0,n.moveMarioInterval=setInterval(n.moveMario,300)),n.setState({direction:t,timer:a}))},n.state=x(e.rows,e.columns),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this._grid.focus()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.status,a=t.rows,r=t.columns;2===e.status&&1===n&&this.setState(x(a,r))}},{key:"render",value:function(){var e=this,t=this.props,n=t.rows,a=t.columns,o=t.travelledCells;return r.a.createElement("div",{ref:function(t){return e._grid=t},tabIndex:"0",onKeyDown:this.changeDirection,style:{height:"100vh"}},r.a.createElement("h2",{style:{padding:"20px 0 20px 0"}},"Total Moves: ",o),r.a.createElement(k,{mushroomsPos:this.state.mushrooms,rows:n,columns:a,marioPos:this.state.currentPos}),r.a.createElement("div",null,r.a.createElement("img",{width:100,src:O.a,alt:"arrow"}),r.a.createElement("p",null,"Use above keys to navigate Mario")))}}]),t}(a.Component),M=function(e){var t=e.open,n=e.travelledCells,a=e.changeStatus;return r.a.createElement(d.b,{open:t,"aria-labelledby":"simple-dialog-title"},r.a.createElement(d.c,{id:"simple-dialog-title"},"Game Finished"),r.a.createElement("div",{style:{width:250,textAlign:"center"}},r.a.createElement("p",null,"Total move to save Princess: ",n),r.a.createElement(d.d,{style:{margin:15},variant:"extended",onClick:function(){return a(1)},"aria-label":"Restart"},r.a.createElement(d.f,null,"refresh")," Restart")))},P=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={rows:"",columns:"",status:0,travelledCells:0},n.handleChange=function(e){return function(t){t.target.value.match(/^(\s*|\d+)$/)&&n.setState(Object(l.a)({},e,Number(t.target.value)))}},n.changeStatus=function(e){var t=n.state.travelledCells;1===e&&(t=0),n.setState({status:e,travelledCells:t})},n.renderSizeComp=function(){var e=n.state,t=e.columns,a=e.rows;return r.a.createElement("div",{style:{marginTop:"10%"}},r.a.createElement(d.g,{label:"Rows",value:n.state.rows,onChange:n.handleChange("rows"),margin:"normal"}),r.a.createElement("br",null),r.a.createElement(d.g,{label:"Columns",value:n.state.columns,onChange:n.handleChange("columns"),margin:"normal"}),r.a.createElement("br",null),r.a.createElement(d.a,{style:{backgroundColor:"grey"},onClick:function(){return n.changeStatus(1)},disabled:!(t>0&&a>0)},"Submit"))},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.columns,a=t.rows,o=t.travelledCells,s=t.status;return r.a.createElement(d.e,{container:!0,style:{textAlign:"center"}},r.a.createElement(d.e,{item:!0,xs:12,md:9,lg:12},0===s?this.renderSizeComp():r.a.createElement(j,{columns:n,rows:a,changeStatus:this.changeStatus,travelledCells:o,updateMove:function(){return e.setState({travelledCells:o+1})},status:s}),r.a.createElement(M,{changeStatus:this.changeStatus,travelledCells:o,open:2===s})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[197,2,1]]]);
//# sourceMappingURL=main.a2dd4c3f.chunk.js.map