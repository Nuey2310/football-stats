(this["webpackJsonpfootball-stats"]=this["webpackJsonpfootball-stats"]||[]).push([[0],{156:function(e,t,a){},232:function(e,t,a){},256:function(e,t,a){},300:function(e,t,a){},436:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(58),r=a.n(s),i=(a(232),a(106)),l=a(21),o=a(31),j=a.n(o),d=a(59),b=a(13),h=(a(156),a(476)),u=a(462),p=a(3),O=function(e){var t=e.id,a=e.name,n=e.lastUpdated,c=e.currentSeason;return Object(p.jsxs)(u.a,{children:[Object(p.jsx)(h.a,{align:"center",children:Object(p.jsx)(i.b,{to:{pathname:"/standings",aboutProps:{id:{id:t}}},children:a})}),Object(p.jsx)(h.a,{align:"center",children:null===c?"TBD":c.startDate}),Object(p.jsx)(h.a,{align:"center",children:null===c?"TBD":c.endDate}),Object(p.jsx)(h.a,{align:"center",children:n})]},t)},m=a(40),x=a.n(m),f=a(466),g=a(468),v=a(464),y=a(467),T=a(463),S=a(465),N=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(b.a)(s,2),i=r[0],l=r[1],o=Object(n.useState)(!1),m=Object(b.a)(o,2),N=m[0],w=m[1],C=[2e3,2001,2002,2003,2013,2014,2015,2016,2017,2018,2019,2021,2152],D=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://api.football-data.org/v2/competitions/",{headers:{"X-Auth-Token":"72aa30bc107e4c7fa1ca8f84861b8c95"}}).then((function(e){console.log(e.data.competitions),c(e.data.competitions)}));case 3:w(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){D()}),[]);var k=a.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())&&C.includes(e.id)}));return Object(p.jsx)("div",{className:"mainDiv",children:Object(p.jsx)("div",{className:"secondaryDiv",children:N?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{className:"mainHeading",children:"FOOTY"}),Object(p.jsx)("h3",{className:"subHeading",children:"Made by Dhairy Raval"}),Object(p.jsx)("p",{className:"searchText",children:"Search football competitions"}),Object(p.jsx)("form",{className:"competitionInputForm",children:Object(p.jsx)("input",{type:"text",placeholder:"Search Name",className:"competitionInput",onChange:function(e){l(e.target.value)}})}),Object(p.jsx)("br",{}),Object(p.jsx)(T.a,{children:Object(p.jsx)(v.a,{className:"mainTabelContainer",component:S.a,elevation:8,children:Object(p.jsxs)(f.a,{className:"mainTable","aria-label":"simple table",children:[Object(p.jsx)(y.a,{children:Object(p.jsxs)(u.a,{className:"headingRow",children:[Object(p.jsx)(h.a,{align:"center",children:Object(p.jsx)("p",{className:"headingCellText",children:"Competition Name"})}),Object(p.jsx)(h.a,{align:"center",children:Object(p.jsx)("p",{className:"headingCellText",children:"Current Season Start"})}),Object(p.jsx)(h.a,{align:"center",children:Object(p.jsx)("p",{className:"headingCellText",children:"Current Season End"})}),Object(p.jsx)(h.a,{align:"center",children:Object(p.jsx)("p",{className:"headingCellText",children:"Last Updated"})})]})}),Object(p.jsx)(g.a,{children:k.map((function(e){return 2014===e.id&&(e.name="La Liga"),Object(p.jsx)(O,{id:e.id,name:e.name,currentSeason:e.currentSeason,lastUpdated:e.lastUpdated},e.id)}))})]})})}),Object(p.jsx)("p",{className:"subText",children:"All football data provided by the Football-Data.org API"})]}):Object(p.jsx)("p",{children:"Loading . . ."})})})},w=(a(256),function(e){var t=e.match,a=Object(n.useState)("false"),c=Object(b.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)(null),l=Object(b.a)(i,2),o=l[0],h=l[1],u=Object(n.useState)(null),O=Object(b.a)(u,2),m=O[0],f=O[1],g=Object(n.useState)(0),v=Object(b.a)(g,2),y=v[0],T=v[1],S=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.homeTeam.id&&null!==t.awayTeam.id){e.next=3;break}return T(1),e.abrupt("return");case 3:return e.prev=3,e.next=6,x.a.all([x.a.get("https://api.football-data.org/v2/teams/".concat(t.homeTeam.id),{headers:{"X-Auth-Token":"72aa30bc107e4c7fa1ca8f84861b8c95"}}),x.a.get("https://api.football-data.org/v2/teams/".concat(t.awayTeam.id),{headers:{"X-Auth-Token":"72aa30bc107e4c7fa1ca8f84861b8c95"}})]).then(x.a.spread((function(e,t){h(e.data.crestUrl),f(t.data.crestUrl)})));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),e.t0.response&&e.t0.response.data&&(console.log(e.t0.response.data.message),r(e.t0.response.data.message));case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){S()}),[]),"false"!==s&&alert(s),Object(p.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-evenly",padding:"2%"},children:[Object(p.jsx)("div",{style:{display:"flex",alignItems:"center"},children:1===y?"TBA":Object(p.jsxs)(p.Fragment,{children:[t.homeTeam.name,null!==o?Object(p.jsx)("img",{src:o,alt:"homeTeamLogo",className:"teamLogo"}):null]})}),"SCHEDULED"===t.status?Object(p.jsx)("p",{children:" v "}):Object(p.jsxs)("p",{children:[t.score.fullTime.homeTeam,"-",t.score.fullTime.awayTeam]}),Object(p.jsx)("div",{style:{display:"flex",alignItems:"center"},children:1===y?"TBA":Object(p.jsxs)(p.Fragment,{children:[null!==m?Object(p.jsx)("img",{src:m,alt:"awayTeamLogo",className:"teamLogo"}):null,t.awayTeam.name]})}),Object(p.jsx)("p",{className:t.status,children:t.status})]})}),C=a(197),D=a.n(C),k=(a(257),function(e){var t=e.compId,a=Object(n.useState)("false"),c=Object(b.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)(!1),o=Object(b.a)(i,2),h=o[0],u=o[1],O=Object(n.useState)([]),m=Object(b.a)(O,2),f=m[0],g=m[1],v=Object(n.useState)(new Date),y=Object(b.a)(v,2),T=y[0],S=y[1],N=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://api.football-data.org/v2/competitions/".concat(t,"/matches"),{headers:{"X-Auth-Token":"72aa30bc107e4c7fa1ca8f84861b8c95"}}).then((function(e){g(e.data.matches)}));case 3:u(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),e.t0.response&&e.t0.response.data&&(console.log(e.t0.response.data.message),r(e.t0.response.data.message));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();if(Object(n.useEffect)((function(){N()}),[]),void 0===t)return Object(p.jsx)(l.a,{to:"/"});if("false"!==s)return alert(s),Object(p.jsx)(l.a,{to:"/"});var C=f.filter((function(e){return 0===e.utcDate.substring(0,10).localeCompare("".concat(T.getFullYear(),"-").concat(("0"+(T.getMonth()+1)).slice(-2),"-").concat(("0"+T.getDate()).slice(-2)))}));return Object(p.jsx)("div",{children:h?Object(p.jsxs)("div",{className:"mainMatchesContainer",children:[Object(p.jsx)("h2",{className:"mainHeadingText",children:"Match Stats:"}),Object(p.jsx)(D.a,{selected:T,onChange:function(e){return S(e)}}),Object(p.jsxs)("p",{children:["startDate.toString(): ",T.toString()]}),Object(p.jsx)("div",{className:"matchDayContainer",children:0===C.length?Object(p.jsx)("p",{children:"No games scheduled for the day"}):C.map((function(e){return Object(p.jsx)(w,{match:e},e.id)}))})]}):Object(p.jsx)("p",{className:"subText",children:"Loading . . ."})})}),L=(a(300),a(469)),I=a(470),A=a(474),F=a(215),E=a(216),U=a(94),M=a(218),B=function(e){var t=e.standing,a=e.color,c=[],s=Object(n.useState)("asc"),r=Object(b.a)(s,2),i=r[0],l=r[1],o=t.table;if("asc"===i)for(var j=0;j<o.length;j++){var d={name:o[j].team.name,position:o[j].position,played:o[j].playedGames,won:o[j].won,lost:o[j].lost,draw:o[j].draw,points:o[j].points,logo:o[j].team.crestUrl};c.push(d)}else for(var h=o.length-1;h>-1;h--){var u={name:o[h].team.name,position:o[h].position,played:o[h].playedGames,won:o[h].won,lost:o[h].lost,draw:o[h].draw,points:o[h].points,logo:o[h].team.crestUrl};c.push(u)}var O=function(e){var t=e.active,a=e.payload,n=e.label;return t&&a&&a.length?Object(p.jsxs)("div",{className:"tooltipContainer",children:[Object(p.jsx)("p",{className:"toolTipLabel",children:n}),Object(p.jsx)("img",{className:"toolTipImage",src:a[0].payload.logo,alt:"TeamLogo"}),Object(p.jsxs)("div",{className:"toolTipStatsContainer",children:[Object(p.jsxs)("p",{className:"toolTipStats",children:[Object(p.jsx)("strong",{children:"GP"}),Object(p.jsx)("br",{}),a[0].payload.played]}),Object(p.jsxs)("p",{className:"toolTipStats",children:[Object(p.jsx)("strong",{children:"W"}),Object(p.jsx)("br",{}),a[0].payload.won]}),Object(p.jsxs)("p",{className:"toolTipStats",children:[Object(p.jsx)("strong",{children:"L"}),Object(p.jsx)("br",{}),a[0].payload.lost]}),Object(p.jsxs)("p",{className:"toolTipStats",children:[Object(p.jsx)("strong",{children:"D"}),Object(p.jsx)("br",{}),a[0].payload.draw]}),Object(p.jsxs)("p",{className:"toolTipStats",children:[Object(p.jsx)("strong",{children:"Pos"}),Object(p.jsx)("br",{}),a[0].payload.position]}),Object(p.jsxs)("p",{className:"toolTipStats",children:[Object(p.jsx)("strong",{children:"P"}),Object(p.jsx)("br",{}),a[0].payload.points]})]})]}):null};return Object(p.jsxs)("div",{style:{width:"80%",height:"80%"},children:[Object(p.jsx)("button",{onClick:function(){l("asc"===i?"desc":"asc")},children:i}),Object(p.jsxs)("p",{children:[t.type," ",t.group]}),Object(p.jsx)(L.a,{width:"100%",height:"90%",children:Object(p.jsxs)(I.a,{data:c,layout:"vertical",margin:{top:5,right:30,left:20,bottom:5},children:[Object(p.jsx)(A.a,{strokeDasharray:"5 5"}),Object(p.jsx)(F.a,{dataKey:"points",type:"number"}),Object(p.jsx)(E.a,{dataKey:"name",type:"category",width:150,tick:{fontSize:12}}),Object(p.jsx)(U.a,{content:Object(p.jsx)(O,{})}),Object(p.jsx)(M.a,{dataKey:"points",fill:a})]})})]})},H=function(e){var t=e.location.aboutProps,a=["#6393e0","#3cb44b","#e6194b","#4363d8","#f58231","#911eb4","#46f0f0","#f032e6","#bcf60c","#ffe119","#fabebe","#008080","#9a6324","#fffac8","#800000","#aaffc3","#808000","#ffd8b1","#000075","#808080","#ffffff","#000000","#ff9900","#ace600","#ff3300"],c=Object(n.useState)([]),s=Object(b.a)(c,2),r=s[0],i=s[1],o=Object(n.useState)([]),h=Object(b.a)(o,2),u=h[0],O=h[1],m=Object(n.useState)([]),f=Object(b.a)(m,2),g=f[0],v=f[1],y=Object(n.useState)(!1),T=Object(b.a)(y,2),S=T[0],N=T[1],w=Object(n.useState)("false"),C=Object(b.a)(w,2),D=C[0],L=C[1],I=Object(n.useState)(800),A=Object(b.a)(I,2),F=A[0],E=A[1],U=Object(n.useState)(2),M=Object(b.a)(U,2),H=M[0],P=M[1],X=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://api.football-data.org/v2/competitions/".concat(t.id.id,"/standings"),{headers:{"X-Auth-Token":"72aa30bc107e4c7fa1ca8f84861b8c95"}}).then((function(e){i(e.data.competition),O(e.data.season),v(e.data.standings),E(150+30*e.data.standings[0].table.length),L("false")}));case 3:N(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),e.t0.response&&e.t0.response.data&&(console.log(e.t0.response.data.message),L(e.t0.response.data.message));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){X()}),[]);return void 0===t?Object(p.jsx)(l.a,{to:"/"}):"false"!==D?(alert(D),Object(p.jsx)(l.a,{to:"/"})):Object(p.jsx)("div",{className:"mainContainer",children:S?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"mainHeadingContainer",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(p.jsx)("h2",{className:"mainHeadingText",children:r.name}),Object(p.jsxs)("div",{className:"subHeadingContainer",style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",fontSize:"18px",width:"95%",justifySelf:"center"},children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Curent Match Day:"})," ",u.currentMatchday]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"StartDate:"})," ",u.startDate]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"EndDate:"})," ",u.endDate]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Winner:"})," ",null===u.winner?"TBA":u.winner.name]})]})]}),Object(p.jsx)("hr",{}),Object(p.jsx)("div",{className:"toggleButtonContainer",style:{display:"flex",justifyContent:"center"},children:Object(p.jsx)("button",{onClick:function(){P(1===H?2:1)},children:1===H?"Match Stats":"League Positions"})}),Object(p.jsx)("div",{className:"switchDisplayContainer",children:1===H?Object(p.jsx)(p.Fragment,{children:g.map((function(e,t){return Object(p.jsx)("div",{style:{display:"flex",alignContent:"center",justifyContent:"center",width:"90%",height:F},children:Object(p.jsx)(B,{standing:e,color:a[t]})},t)}))}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"matchesContainer",children:Object(p.jsx)(k,{compId:t.id.id})})})})]}):Object(p.jsx)("p",{className:"subText",children:"Loading . . ."})})},P=function(){return Object(p.jsx)(i.a,{children:Object(p.jsxs)(l.d,{children:[Object(p.jsx)(l.b,{exact:!0,path:"/",component:N}),Object(p.jsx)(l.b,{path:"/standings",component:H})]})})};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root"))}},[[436,1,2]]]);
//# sourceMappingURL=main.e5404189.chunk.js.map