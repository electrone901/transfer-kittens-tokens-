(this["webpackJsonpcats-react"]=this["webpackJsonpcats-react"]||[]).push([[0],{102:function(e,t){},118:function(e,t){},120:function(e,t){},138:function(e,t){},165:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),c=n(83),o=n.n(c),s=(n(48),n(1)),i=n.n(s),l=n(10),u=n(13),d=(n(49),n(88),n.p,n(33)),h=n.n(d),p=n(25),j=n(19),b=n.n(j),m=h()("production");function f(){return x.apply(this,arguments)}function x(){return(x=Object(l.a)(i.a.mark((function e(){var t,n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.connect)(Object.assign({deps:{keyStore:new p.keyStores.BrowserLocalStorageKeyStore}},m));case 2:return t=e.sent,n=new p.WalletConnection(t),r=n.getAccountId(),e.next=7,new p.Contract(n.account(),m.contractName,{viewMethods:["ft_balance_of","storage_balance_of"],changeMethods:["storage_deposit","buy_tokens","send_tokens"]});case 7:return a=e.sent,e.abrupt("return",{accountId:r,contract:a,walletConnection:n});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O="1",g=(b()(3).times(Math.pow(10,13)).toFixed(),b()(1).times(Math.pow(10,24)).toFixed(),n(0));function w(e){var t=e.accountId,n=e.contract,a=r.useState(""),c=Object(u.a)(a,2),o=c[0],s=c[1],d=r.useState(0),h=Object(u.a)(d,2),p=h[0],j=h[1],m=r.useState(0),f=Object(u.a)(m,2),x=f[0],w=f[1],v=r.useState(null),k=Object(u.a)(v,2),N=k[0],_=k[1];function y(e){return S.apply(this,arguments)}function S(){return(S=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=N){e.next=3;break}return e.next=3,n.storage_deposit({account_id:t},"200000000000000",b()(.00125).times(Math.pow(10,24)).add(O).toFixed());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return I=Object(l.a)(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=N){e.next=5;break}return e.next=3,y(t);case 3:e.next=7;break;case 5:return e.next=7,n.send_tokens({receiver_id:t,amount:r},"200000000000000",b()(.00125).times(Math.pow(10,24)).add(O).toFixed());case 7:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}return r.useEffect((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.storage_balance_of({account_id:t});case 2:r=e.sent,_(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=function(){var e=Object(l.a)(i.a.mark((function e(){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.ft_balance_of({account_id:t});case 2:r=e.sent,w(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(n),r(),e()}),[t,w,n]),Object(g.jsxs)("main",{className:"container",children:[Object(g.jsx)("div",{className:"jumbotron-mg pt-3",children:Object(g.jsx)("div",{className:"container push-spaces",children:"Transfer Kittens tokens to you friends and make their day better."})}),Object(g.jsx)("div",{className:"transfer-main text-center",children:Object(g.jsxs)("div",{className:"transfer-card",children:[Object(g.jsx)("h1",{children:"Transfer Kittens Tokens "}),Object(g.jsxs)("h6",{children:["Your balance: ",x," Kittens"]}),Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e,t){I.apply(this,arguments)}(o,p)},className:"transfer-form",children:[Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("label",{htmlFor:"exampleEmailInput",children:"Enter receiver address."}),Object(g.jsx)("input",{onChange:function(e){s(e.target.value)},className:"u-full-width",name:"amount",type:"text",placeholder:"username.near"})]}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("label",{htmlFor:"exampleEmailInput",children:"Kittens tokens transfer amount:"}),Object(g.jsx)("input",{onChange:function(e){j(e.target.value)},className:"u-full-width",name:"amount",type:"number",placeholder:"1"})]}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{className:"row center-row",children:Object(g.jsx)("input",{className:"button-primary",type:"submit",value:"Transfer"})})]})]})})]})}var v=n.p+"static/media/logo.165ed9ec.png";function k(e){var t=e.login,n=e.logout,r=e.accountId,a=e.isSignedIn,c=e.childern;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("header",{className:"header",children:Object(g.jsxs)("div",{className:"center-row row",children:[Object(g.jsx)("div",{className:"six columns ",children:Object(g.jsx)("div",{className:"center-column",children:Object(g.jsx)("img",{src:v,width:"64px",height:"64px",alt:"my logo"})})}),Object(g.jsx)("div",{className:"three columns",children:Object(g.jsx)("h4",{children:Object(g.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://explorer.testnet.near.org/accounts/".concat(r),children:r})})}),Object(g.jsx)("div",{className:"three columns text-end",children:a?Object(g.jsx)("button",{className:"button button-secondary",onClick:n,children:"Logout"}):Object(g.jsx)("button",{className:"button",onClick:t,children:"Login"})})]})}),c]})}var N=h()("production").contractName;function _(){var e=a.a.useState({}),t=Object(u.a)(e,2),n=t[0],r=n.accountId,c=n.contract,o=n.walletConnection,s=t[1],d=a.a.useState(!1),h=Object(u.a)(d,2),p=h[0],j=h[1];function b(){o.signOut(),window.location.replace(window.location.origin+window.location.pathname)}function m(){o.requestSignIn(N)}return a.a.useEffect((function(){function e(){return e=Object(l.a)(i.a.mark((function e(){var t,n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,n=t.accountId,r=t.contract,a=t.walletConnection,s({accountId:n,contract:r,walletConnection:a}),j(a.isSignedIn());case 8:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s,j]),p?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(k,{isSignedIn:p,logout:b,login:m,accountId:r}),Object(g.jsx)(w,{contract:c,accountId:r})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(k,{isSignedIn:p,logout:b,login:m,accountId:r}),Object(g.jsx)("main",{children:Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"row center-column",children:[Object(g.jsx)("h2",{children:"Kittens Token"}),Object(g.jsx)("p",{children:"The coin that makes your date!"}),Object(g.jsxs)("div",{className:"center-column",children:[Object(g.jsx)("p",{children:"Login to transfer tokens."}),Object(g.jsx)("button",{className:"button button-primary",onClick:m,children:"Login"})]})]})})})]})}var y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,166)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(_,{})}),document.getElementById("root")),y()},33:function(e,t){var n="0t.testnet";e.exports=function(e){switch(e){case"production":case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:n,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"development":case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:n,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};case"betanet":return{networkId:"betanet",nodeUrl:"https://rpc.betanet.near.org",contractName:n,walletUrl:"https://wallet.betanet.near.org",helperUrl:"https://helper.betanet.near.org",explorerUrl:"https://explorer.betanet.near.org"};case"local":return{networkId:"local",nodeUrl:"http://localhost:3030",keyPath:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/transfer-kittens-tokens-",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).HOME,"/.near/validator_key.json"),walletUrl:"http://localhost:4000/wallet",contractName:n};case"test":case"ci":return{networkId:"shared-test",nodeUrl:"https://rpc.ci-testnet.near.org",contractName:n,masterAccount:"test.near"};case"ci-betanet":return{networkId:"shared-test-staging",nodeUrl:"https://rpc.ci-betanet.near.org",contractName:n,masterAccount:"test.near"};default:throw Error("Unconfigured environment '".concat(e,"'. Can be configured in src/config.js."))}}},48:function(e,t,n){},88:function(e,t,n){},93:function(e,t){}},[[165,1,2]]]);
//# sourceMappingURL=main.6329364d.chunk.js.map