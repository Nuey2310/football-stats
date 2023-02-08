(this["webpackJsonpfootball-stats"]=this["webpackJsonpfootball-stats"]||[]).push([[0],{158:function(e,t,a){},237:function(e,t,a){},261:function(e,t,a){},305:function(e,t,a){},441:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(57),i=a.n(c),r=(a(237),a(72)),o=a(21),l=a(31),j=a.n(l),d=a(58),b=a(13),h=(a(158),a(476)),m=a(462),u=a(1),O=function(e){var t=e.id,a=e.name,n=e.lastUpdated,s=e.currentSeason;return Object(u.jsxs)(m.a,{children:[Object(u.jsx)(h.a,{align:"center",children:Object(u.jsx)(r.b,{to:{pathname:"/standings",aboutProps:{id:{id:t}}},children:a})}),Object(u.jsx)(h.a,{align:"center",children:null===s?"TBD":s.startDate}),Object(u.jsx)(h.a,{align:"center",children:null===s?"TBD":s.endDate}),Object(u.jsx)(h.a,{align:"center",children:n})]},t)},A=a(73),x=a.n(A),p=a(466),g=a(468),f=a(464),C=a(467),T=a(463),S=a(465),v=Object({NODE_ENV:"production",PUBLIC_URL:"/football-stats",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,w=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),i=Object(b.a)(c,2),r=i[0],o=i[1],l=Object(n.useState)(!1),A=Object(b.a)(l,2),w=A[0],y=A[1],N=[2e3,2001,2002,2003,2013,2014,2015,2016,2017,2018,2019,2021,2152],E=Object(n.useRef)(),I=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://api.football-data.org/v4/competitions/",{headers:{"X-Auth-Token":"".concat(v)},crossDomain:!0}).then((function(e){s(e.data.competitions)}));case 3:y(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){I()}),[]);var D=a.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())&&N.includes(e.id)}));return Object(u.jsx)("div",{children:w?Object(u.jsxs)("div",{className:"mainDiv",children:[Object(u.jsx)("h1",{className:"mainHeading",children:"FOOTBALL-STATS"}),Object(u.jsx)("button",{className:"subHeading",onClick:function(){E.current.scrollIntoView({behavior:"smooth"})},children:"Made by Dhairy Raval"}),Object(u.jsx)("p",{className:"searchText",children:"Search football competitions"}),Object(u.jsx)("form",{className:"competitionInputForm",children:Object(u.jsx)("input",{type:"text",placeholder:"Search Name",className:"competitionInput",onChange:function(e){o(e.target.value)}})}),Object(u.jsx)("br",{}),Object(u.jsx)(T.a,{children:Object(u.jsx)(f.a,{className:"mainTableContainer",component:S.a,elevation:8,children:Object(u.jsxs)(p.a,{className:"mainTable","aria-label":"simple table",children:[Object(u.jsx)(C.a,{children:Object(u.jsxs)(m.a,{className:"headingRow",children:[Object(u.jsx)(h.a,{align:"center",children:Object(u.jsx)("p",{className:"headingCellText",children:"Competition Name"})}),Object(u.jsx)(h.a,{align:"center",children:Object(u.jsx)("p",{className:"headingCellText",children:"Current Season Start"})}),Object(u.jsx)(h.a,{align:"center",children:Object(u.jsx)("p",{className:"headingCellText",children:"Current Season End"})}),Object(u.jsx)(h.a,{align:"center",children:Object(u.jsx)("p",{className:"headingCellText",children:"Last Updated"})})]})}),Object(u.jsx)(g.a,{children:D.map((function(e){return 2014===e.id&&(e.name="La Liga"),Object(u.jsx)(O,{id:e.id,name:e.name,currentSeason:e.currentSeason,lastUpdated:e.lastUpdated},e.id)}))})]})})}),Object(u.jsxs)("p",{className:"subText",children:["All football data provided by"," ",Object(u.jsx)("a",{href:"https://www.football-data.org/",target:"_blank",rel:"noreferrer noopener",className:"attribution",children:"Football-Data.org API"})," ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"Photo by"," ",Object(u.jsx)("a",{href:"https://unsplash.com/@06mather?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",target:"_blank",rel:"noreferrer noopener",className:"attribution",children:"Mathias Herheim"})," ","on"," ",Object(u.jsx)("a",{href:"https://unsplash.com/collections/1791496/soccer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",target:"_blank",rel:"noreferrer noopener",className:"attribution",children:"Unsplash"})]}),Object(u.jsxs)("div",{className:"socialLinksContainer",ref:E,children:[Object(u.jsx)("a",{href:"https://github.com/Nuey2310",target:"_blank",rel:"noreferrer noopener",className:"socialLinks",children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABLxJREFUeJzV21+IVVUUBvDf3ImmDNNBwYSQplTG6kHxoVKM6q2HHvpPYfZfCMkeCoOKCKlETFIIi6KHnoyCjMAiegkrrTAjaDCzzDIlM5kcJ7Gybg97rnO5jfeeuWede68fLJjLbL69vnX23mevtffpUjxm4HLMQz8uwDRMRs9Imz/xOw5iL3biS2zDzy3wMRRdWIT1+A7lnLYb67BwhLtj0YtH8b38ousFY4U0ejoGU7Aaw4oTXmtHsUoKetvQjeUY1DrhtXYYy1AqWOv/0I/Pczgebdswu1DFVbgbxwoW1IwNY0mBunXjhQ4Q2sjWK2BK9OCdDhCX1TYZ3WOEiH+/A0SN196LCEK30+vJ19pbck6H02HON7LnmxV/Twc4H2WLxyu+X2e+6pq1YczKKr5b/k3ObtyCD4IEbMed+DAHx1YZ14PlAQ4/V8V3H/7OwfVUlePLcvr1QK3Y2vRyipTC5s227sJrVb9vxcaR/gYxgP1SUvOPJPAcTMfFUr0AHsezVTyLsCWHX4cxU6o9jInVYobsTWNwP4RrZBuG86UnX4t5Ab49fapOe8WltA9mENkMrg3wbQiTKoTVT2OpNAwjcFUQTy2uDOCYiPsrPyoB6JICEIX9gVzViKoPLlWz/i0SM/TL+FR6lRaFjUF+XlFNuj6ItIzrChBdjTlBfq6tJo2o3pal3eOZBYiuxe4AX3eS1oAZuCjIsQH8FcRVDzsCOPoxvSQdWkRhbyBXK/pZUJI2F1E4HMjVin7mlqShEIVjgVyt6GdOSTqri0I5kKse/g3i6SsZTTwiMDGQqx4mNW6SCdNKYs/ZMhcdcmJmEE8vKR2N2gQdw4Qg5+phT5C/J6IPEM7GbcGctbgafZGE0bW/nxS3FkSU66ptGA4EB6As1eOLSIjWBfu5j3QVJToAZelAJWq17sGGAnzcTjpHy0PymVSnOzrG//bjXs0nSCVcLyUuRTykN0lFxzwkG3AWzsWrp2hzCK/gdlzSQPSFuEEa7j8WJLxiK+HmAKJNRissrzdo+1KDAKwoWHS13QjnB5EtGxEwFb/UaXdpgwD04kSLAnBepdOIAsOQ0W31fOnOX22bwQbiK9jRAvEDjBZFN2d0rB4m4rGRv7+Q5vozI2IO4GtpvciCfQH+NMK71T8WionqcY0XuSx4O8ifenZZdYdd4uqCe6SVvJMDsKvSUWUKlPFyTqcr6JOG/cPafJGxDsbUOtnYm5k8dkLaxGyRdl1bMzpY5Ag4Iu1ZxsSqAjsu45sOCMDKeh33SgXHwudemwLwq5r8pLYeMIgnMzrZDMoFcmfBE9IUOIkzxmj0Iu5Q85oIwgTZTo6nFtD3x1I+kgmz8Ydi14NW2pAmTr+WdIDjUdZ0mS7y1LhdtqZZ8aRFMm/BpJ32hoDvjHqki8ftFjNe2yzwqL5HKnS2W9R4nnz4PYWSdPG43eIa2RoFf0O0WGu/EMtqRxV/KHMSs6TEpt2iK/aRuFsumVGS7t7+lsPxvHbIGFfeWo1e6frpkNYJPyJldVEHLyGYhEfwreKE75IKLafM5zsBXdIlxLViTnQGpJW9iOSsJXNnOhZgrnTJsU8qn/ca/arruJSKH8QPUuC+wifSGUNh+A+k1NAh6mv4dwAAAABJRU5ErkJggg==",alt:"githubLogo",className:"socialLinksImages"})}),Object(u.jsx)("a",{href:"https://www.linkedin.com/in/dhairy-raval-2896b219a/",target:"_blank",rel:"noreferrer noopener",className:"socialLinks",children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC1ElEQVR4nO2bvWsUQRiHn7scGjF+kyAKgp6K2CmKhQfaSEArC0GwsRDF2loigqVYKGhh0liYoBb+BQYkglESRUihXMCPKKIQG/GOSLSY9YjJxH1n3dw7y8wDA4G8885vfrczszO7CwupAQPAJNAAfhW8NJK+DAAHLf1tsQoY9EDwUpfBpK8LOj/ugbh2lbH5JoTwy9uuBMCMeW0xWqXWAVwC9hAoJcwMuVVbiBKTJcwysVxbiRLNEmYsBEtZW4A2wRtQyVDnPXANeJH8XQUOABeA1flJax8u6+YdYOUieTYBTx3z+VDEgRPAihQzq8B3DzolLi5zwHXgR0pMHbjvkFMdFwPGhXHPswjRwsWA0hLkVMdF7F5h3L4sQjSRThh1oCsl126Kd4rkFPwAWLdI53cCLz3okFPJshf4DNzE3AhNAbswN0JngWWOudSJmyFtAdoEb4DLZugTMCqIO2bJOwJ8Tam3hb+P5maBIeAhZr75ghmu3cA24AhwnBxOs6QzpvQW95ul7mFBvdNz4oeAHYI6FeAMZmLOtAr4OAT6gJPAG0HsT+A2sB94laUx3wy4AlzGfWV6BxwC3ro26JMBo5gj+qxMA6cwc4cYnwyYwFzS/8MIcM+lgk8G5MVVl+AsZ4LtYC1wFLO5mgEeA4+QzQ3PgNeYvYkIX5bBP5zA3DPMz3EL6BDm6LfUL8Qy2AvcBTZY/ncOuCjM80TaoE8GVIAb/PtXPo/sMd4HaaM+GVAFtqfE9JDymkvCtLRR3wyQsFkQU0gDeoRxEgNmpI36ZICUzjyTFdGAXIkGaAvQJhqgLUCbaIC2AG2iAdoCtIkGaAvQJhqgLUAbl0PRTmCjIM5m6npB3TVCHV2CXN3CXPH9gOCHQDQAaGqLUKRZBj5qq1BkqgwMa6tQZBjC/myu9Ywh6A8nIX462zIhhCvB+vH0XGqYx8t1ivfis600kr70Y3mu+Buyua88tVHckgAAAABJRU5ErkJggg==",alt:"linkedinLogo",className:"socialLinksImages"})}),Object(u.jsx)("a",{href:"mailto:dhairyraval@gmail.com",target:"_blank",rel:"noreferrer noopener",className:"socialLinks",children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAzpJREFUeJzt2UmoHFUUxvHfy1MTI4pTVHBIogiKBhQNClkogghx4UIXgQgS54UI6kIxIIouogsJQcEkiAuHILhQEAdUEhcSxWEjcURFJcJTBKMvxiTP1y5OF6luuzr9qru6KuT+4Wz63nPrnq/vcE4ViUQikUgkEolEIpFIHHZMDNBncsB+TeVftMo4Xow/286Hsu3H7UVBzusjwBRmDiLSocAEfirjuABn4UXMqv+fLGMf4HLMLyPA33gJp+AivN2AgAa1L3AdjsXT7VjmTDbYb7ih/dvV+KwBARbZTtwmDu4r8UOurbQAmW3BiWJPre4avG7bhbVYKLbuev/ftkML0MIvWNlun4978XuNge/DBixqz+lSfFnQdyQCZLZZ7C84HuuwZ4yBz+JlnNOewxF4SFx5RT4jFaAltsAVuf5n4jkHEo+qbCuW5557Hj4ewG/kAmT/xHocnfNbhjcqCPxzB7YfcRbdY/CVV4kAmX2Fy7r8r8InIwj8Z6zRmbQtwbY5jlOpAC2RNa7TmXRMYBW+KzHeH3hA5+qCO/BXifEqFyCzHTr3KByFu0VOcTD/vXgSJ3WNsRjvDDGvsQmQrYbHxZ2c5zg8it09fGZF2r2ky2cCdxq+MOtJvzK3lGo59ovM8f0ebaeJZOp8cYX9iFfEQdfNGfhUpOTDMOeSfhi1W7ipa7zu1dCPeWLbZCzH9JDzmTPDPGxtbpwjsUmUpPlrrIgLsV1Ucotyv6/UP9FpjADP5MY4Ae91tW/BqT2et0CcD/tyfb/HBbk+tzRdgNdEJQbn4uuCftN4AQ/iflGy7izouwvX5Ob1cFMF+FBUY0QpOsoiaQZ35ea2uWkCfIOT234361zGo7SnxAqbxOtNEWAKZ4uT+4mKAs/bWyKfWIiP6hZgWtTgx+DVMQSf2Q4sFbfEt3UJMCOuptPV85rsV6wQ7wSm6hDgVlyi+PQeh/2DGw2WKI1UgEdwvd45fR32GK4Vq3IsAjyved8K3tS/2uxJlcVQ0+gZa79PY4cF/QTYO7ZZVE9hLP0E2FDBROri2aKGyaIGvCveuC4T7+XqPuTK2G5sxH3idX0ikUgkEolEIpFIJBKJhP8A5V6X+gv4To0AAAAASUVORK5CYII=",alt:"emailLogo",className:"socialLinksImages"})})]})]}):Object(u.jsx)("div",{className:"loadingContainer",children:Object(u.jsx)("p",{children:"Loading . . ."})})})},y=(a(261),function(e){var t=e.standings,a=e.match,s=Object(n.useState)(null),c=Object(b.a)(s,2),i=c[0],r=c[1],o=Object(n.useState)(null),l=Object(b.a)(o,2),O=l[0],A=l[1],x=Object(n.useState)(0),g=Object(b.a)(x,2),v=g[0],w=g[1],y=Object(n.useState)(!0),N=Object(b.a)(y,2),E=N[0],I=N[1],D=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==a.homeTeam.id&&null!==a.awayTeam.id){e.next=4;break}return w(1),I(!0),e.abrupt("return");case 4:t.forEach((function(e){e.table.forEach((function(e){e.team.id===a.homeTeam.id?r(e.team.crestUrl):e.team.id===a.awayTeam.id&&A(e.team.crestUrl)}))}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){D()}),[]),Object(u.jsx)(u.Fragment,{children:E?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(T.a,{container:!0,style:{marginBottom:"3em",justifyContent:"center"},children:Object(u.jsx)(f.a,{className:"matchTableContainer",component:S.a,elevation:1,children:Object(u.jsx)(p.a,{className:"matchTable","aria-label":"simple table",children:Object(u.jsx)(C.a,{children:Object(u.jsxs)(m.a,{className:"matchTableRow",children:[Object(u.jsx)(h.a,{style:{width:"30%"},children:Object(u.jsx)("div",{className:"matchTeamContainer",children:1===v?"TBA":Object(u.jsxs)(u.Fragment,{children:[a.homeTeam.name,null!==i?Object(u.jsx)("img",{src:i,alt:"homeTeamLogo",className:"teamLogo"}):null]})})}),Object(u.jsx)(h.a,{children:Object(u.jsx)("div",{className:"matchScoreContainer",children:"SCHEDULED"===a.status?Object(u.jsx)("p",{children:"vs."}):Object(u.jsxs)("p",{children:[a.score.fullTime.homeTeam," -","  ",a.score.fullTime.awayTeam]})})}),Object(u.jsx)(h.a,{style:{width:"30%"},children:Object(u.jsx)("div",{className:"matchTeamContainer",children:1===v?"TBA":Object(u.jsxs)(u.Fragment,{children:[a.awayTeam.name,null!==O?Object(u.jsx)("img",{src:O,alt:"awayTeamLogo",className:"teamLogo"}):null]})})}),Object(u.jsx)(h.a,{children:Object(u.jsx)("p",{className:a.status,children:a.status})}),Object(u.jsx)(h.a,{children:Object(u.jsx)("p",{className:"matchStatus",children:a.stage})})]})})})})})}):Object(u.jsx)("p",{children:"Loading . . ."})})}),N=a(199),E=a.n(N),I=(a(262),Object({NODE_ENV:"production",PUBLIC_URL:"/football-stats",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY),D=function(e){var t=e.standings,a=e.compId,s=Object(n.useState)("false"),c=Object(b.a)(s,2),i=c[0],r=c[1],l=Object(n.useState)(!1),h=Object(b.a)(l,2),m=h[0],O=h[1],A=Object(n.useState)([]),p=Object(b.a)(A,2),g=p[0],f=p[1],C=Object(n.useState)(new Date),T=Object(b.a)(C,2),S=T[0],v=T[1],w=[],N=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://api.football-data.org/v4/competitions/".concat(a,"/matches"),{headers:{"X-Auth-Token":"".concat(I),"Content-Type":"application/json"},crossDomain:!0}).then((function(e){f(e.data.matches)}));case 3:O(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),e.t0.response&&e.t0.response.data&&(console.log(e.t0.response.data.message),r(e.t0.response.data.message));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();if(Object(n.useEffect)((function(){N()}),[]),g.forEach((function(e){var t=new Date(e.utcDate),a=new Date(t.getTime()+6e4*t.getTimezoneOffset());w.push(new Date(a))})),void 0===a)return Object(u.jsx)(o.a,{to:"/"});if("false"!==i)return alert(i),Object(u.jsx)(o.a,{to:"/"});var D=g.filter((function(e){return 0===e.utcDate.substring(0,10).localeCompare("".concat(S.getFullYear(),"-").concat(("0"+(S.getMonth()+1)).slice(-2),"-").concat(("0"+S.getDate()).slice(-2)))})),B=Object(n.forwardRef)((function(e,t){var a=e.value,n=e.onClick;return Object(u.jsxs)("button",{className:"customDateInput",onClick:n,ref:t,children:[Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABFElEQVRoge2aUQ6DIAyG/y27xS7kk/d/VjmHexgSjCDgyii1X0KMQAo/pTUqQD4DgBnAastk66iobd8xeYP4g/Vi37EZj903tf8knEhTfCEjAIOje1MrE+tfWkrtGzvnA2ciQgNSCfjF/nKmPLUyuf1LKbW/axcZIylme/VXYo70vQKZ/ZQrB+xzfY0HYon96Hyp93xtNEZY8wrU9bS9HKI98vj7LK6x2zliPKJCuBGKkRitsllWzN7SIxuhFVortmUhxiMqhBtihFwJ9tR7NHVbFrf2iKbfmqgQbogRoumXG5p+uaFCuCFGiKZfbpR4hPWnVDEeUSHc8GPEAHijrx89JlQ54nuSoNaJBuqyIHKEQ+HABzez1Jjdw5d1AAAAAElFTkSuQmCC",alt:"calendarLogo",style:{height:"auto",width:"20%"}}),a]})}));return Object(u.jsx)("div",{children:m?Object(u.jsxs)("div",{className:"mainMatchesContainer",children:[Object(u.jsx)("h2",{className:"mainHeadingText",children:"Fixtures / Results :"}),Object(u.jsx)(E.a,{selected:S,onChange:function(e){return v(e)},highlightDates:w,disabledKeyboardNavigation:!0,customInput:Object(u.jsx)(B,{})}),Object(u.jsxs)("div",{className:"matchDayContainer",children:[0===D.length?Object(u.jsx)("p",{children:"No games scheduled for the day"}):D.map((function(e){return Object(u.jsx)(y,{standings:t,match:e},e.id)})),Object(u.jsx)("a",{className:"calendarCitation",href:"https://icons8.com/icon/23/calendar",target:"_blank",rel:"noreferrer noopener",children:"Calendar icon by Icons8"})]})]}):Object(u.jsx)("p",{className:"subText",children:"Loading . . ."})})},B=(a(305),a(469)),L=a(470),k=a(474),H=a(217),U=a(218),K=a(95),F=a(220),P=function(e){var t=e.standing,a=e.color,s=[],c=Object(n.useState)("ASC"),i=Object(b.a)(c,2),r=i[0],o=i[1],l=t.table;if("ASC"===r)for(var j=0;j<l.length;j++){var d={name:l[j].team.name,position:l[j].position,played:l[j].playedGames,won:l[j].won,lost:l[j].lost,draw:l[j].draw,points:l[j].points,logo:l[j].team.crestUrl};s.push(d)}else for(var h=l.length-1;h>-1;h--){var m={name:l[h].team.name,position:l[h].position,played:l[h].playedGames,won:l[h].won,lost:l[h].lost,draw:l[h].draw,points:l[h].points,logo:l[h].team.crestUrl};s.push(m)}var O=function(e){var t=e.active,a=e.payload,n=e.label;return t&&a&&a.length?Object(u.jsxs)("div",{className:"tooltipContainer",children:[Object(u.jsx)("p",{className:"toolTipLabel",children:n}),null===a[0].payload.logo?Object(u.jsx)("p",{className:"toolTipImageAltTxt",children:"Team-logo unavailable"}):Object(u.jsx)("img",{className:"toolTipImage",src:a[0].payload.logo,alt:"TeamLogo"}),Object(u.jsxs)("div",{className:"toolTipStatsContainer",children:[Object(u.jsxs)("p",{className:"toolTipStats",children:[Object(u.jsx)("strong",{children:"GP"}),Object(u.jsx)("br",{}),a[0].payload.played]}),Object(u.jsxs)("p",{className:"toolTipStats",children:[Object(u.jsx)("strong",{children:"W"}),Object(u.jsx)("br",{}),a[0].payload.won]}),Object(u.jsxs)("p",{className:"toolTipStats",children:[Object(u.jsx)("strong",{children:"L"}),Object(u.jsx)("br",{}),a[0].payload.lost]}),Object(u.jsxs)("p",{className:"toolTipStats",children:[Object(u.jsx)("strong",{children:"D"}),Object(u.jsx)("br",{}),a[0].payload.draw]}),Object(u.jsxs)("p",{className:"toolTipStats",children:[Object(u.jsx)("strong",{children:"Pos"}),Object(u.jsx)("br",{}),a[0].payload.position]}),Object(u.jsxs)("p",{className:"toolTipStats",children:[Object(u.jsx)("strong",{children:"P"}),Object(u.jsx)("br",{}),a[0].payload.points]})]})]}):null};return Object(u.jsxs)("div",{className:"graphContainer",children:[Object(u.jsx)("button",{className:"changeOrderBtn",id:r,onClick:function(){o("ASC"===r?"DESC":"ASC")},children:r}),Object(u.jsxs)("p",{children:[t.type," ",t.group]}),Object(u.jsx)(B.a,{width:"90%",height:"80%",children:Object(u.jsxs)(L.a,{data:s,layout:"vertical",barCategoryGap:"15%",children:[Object(u.jsx)(k.a,{strokeDasharray:"5 5"}),Object(u.jsx)(H.a,{dataKey:"points",type:"number"}),Object(u.jsx)(U.a,{dataKey:"name",type:"category",width:125,tick:{fontSize:14}}),Object(u.jsx)(K.a,{content:Object(u.jsx)(O,{})}),Object(u.jsx)(F.a,{dataKey:"points",type:"monotone",stroke:"#8a8a8a",fill:a,animationDuration:800,radius:[0,10,10,0]})]})})]})},R=Object({NODE_ENV:"production",PUBLIC_URL:"/football-stats",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,Q=function(e){var t=e.location.aboutProps,a=["#6393e0","#3cb44b","#e6194b","#4363d8","#f58231","#911eb4","#46f0f0","#f032e6","#bcf60c","#ffe119","#fabebe","#008080","#9a6324","#fffac8","#800000","#aaffc3","#808000","#ffd8b1","#000075","#808080","#ffffff","#000000","#ff9900","#ace600","#ff3300"],s=Object(n.useState)([]),c=Object(b.a)(s,2),i=c[0],l=c[1],h=Object(n.useState)([]),m=Object(b.a)(h,2),O=m[0],A=m[1],p=Object(n.useState)([]),g=Object(b.a)(p,2),f=g[0],C=g[1],T=Object(n.useState)(!1),S=Object(b.a)(T,2),v=S[0],w=S[1],y=Object(n.useState)("false"),N=Object(b.a)(y,2),E=N[0],I=N[1],B=Object(n.useState)(800),L=Object(b.a)(B,2),k=L[0],H=L[1],U=Object(n.useState)(2),K=Object(b.a)(U,2),F=K[0],Q=K[1],V=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://api.football-data.org/v4/competitions/".concat(t.id.id,"/standings"),{headers:{"X-Auth-Token":"".concat(R)},crossDomain:!0}).then((function(e){l(e.data.competition),A(e.data.season),C(e.data.standings),H(200+30*e.data.standings[0].table.length),I("false")}));case 3:w(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),e.t0.response&&e.t0.response.data&&(console.log(e.t0.response.data.message),I(e.t0.response.data.message));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){V()}),[]);return void 0===t?Object(u.jsx)(o.a,{to:"/"}):"false"!==E?(alert(E),Object(u.jsx)(o.a,{to:"/"})):Object(u.jsx)("div",{className:"mainContainer",children:v?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"mainHeadingContainer",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(u.jsx)("h2",{className:"mainHeadingText",children:i.name.toUpperCase()}),Object(u.jsxs)("div",{className:"subHeadingContainer",style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",fontSize:"18px",width:"95%"},children:[Object(u.jsxs)("p",{style:{padding:"1%",textAlign:"center"},children:[Object(u.jsx)("strong",{children:"Start Date:"})," ",O.startDate]}),Object(u.jsxs)("p",{style:{padding:"1%",textAlign:"center"},children:[Object(u.jsx)("strong",{children:"End Date:"})," ",O.endDate]}),Object(u.jsxs)("p",{style:{padding:"1%",textAlign:"center"},children:[Object(u.jsx)("strong",{children:"Round:"})," ",O.currentMatchday]}),Object(u.jsxs)("p",{style:{padding:"1%",textAlign:"center"},children:[Object(u.jsx)("strong",{children:"Winner:"})," ",null===O.winner?"TBA":O.winner.name]})]})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"ButtonsContainer",style:{display:"flex",justifyContent:"space-evenly"},children:[Object(u.jsx)(r.b,{to:"/",children:"<BACK"}),Object(u.jsx)("button",{onClick:function(){Q(1===F?2:1)},children:1===F?"Fixtures/Results":"League Positions"})]}),Object(u.jsx)("div",{className:"switchDisplayContainer",children:1===F?Object(u.jsx)(u.Fragment,{children:f.map((function(e,t){return Object(u.jsx)("div",{className:"rankGraphContainer",style:{display:"flex",alignContent:"center",justifyContent:"center",width:"100%",height:k,marginTop:"1.5em",marginBottom:"3em"},children:Object(u.jsx)(P,{standing:e,color:a[t]})},t)}))}):Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"matchesContainer",children:Object(u.jsx)(D,{standings:f,compId:t.id.id})})})})]}):Object(u.jsx)("p",{className:"subText",children:"Loading . . ."})})},V=function(){return Object(u.jsx)(r.a,{children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{exact:!0,path:"/",component:w}),Object(u.jsx)(o.b,{path:"/standings",component:Q})]})})};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(V,{})}),document.getElementById("root"))}},[[441,1,2]]]);
//# sourceMappingURL=main.6122c51c.chunk.js.map