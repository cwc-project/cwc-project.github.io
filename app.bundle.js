!function(e){function t(t){for(var n,o,i=t[0],c=t[1],u=t[2],p=0,f=[];p<i.length;p++)o=i[p],r[o]&&f.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(s&&s(t);f.length;)f.shift()();return l.push.apply(l,u||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(l.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={0:0},l=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=c;l.push([354,1]),a()}({342:function(e,t,a){},343:function(e,t,a){},344:function(e,t,a){},345:function(e,t,a){},346:function(e,t,a){},354:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(11),o=a.n(l),i=a(9),c=a(13),u=a(36),s=a.n(u),p=a(37),f=a.n(p),m=function(){return{type:"TOGGLE_TAB",activeTab:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1"}},d=a(20),b=a.n(d),g=function(e,t){return b.a.get("http://localhost:9000/api/user/login",{}).then(function(e){return console.log(e.data)})};function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){h(e,t,a[t])})}return e}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{modal:!1,activeTab:"1"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_MODAL":return v({},e,{modal:!e.modal});case"TOGGLE_TAB":return v({},e,{activeTab:t.activeTab});default:return e}};function E(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{details:{},status:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_USER":return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){E(e,t,a[t])})}return e}({},e,{details:t.user});default:return e}},T=Object(c.c)({rsEffects:y,user:O}),w=[f.a,s.a],j=Object(c.d)(T,c.a.apply(void 0,w)),N=(a(69),a(0)),P=a.n(N),S=a(3),k=a.n(S),C=a(12),_=a(355),x=(a(342),k()(["d-flex","justify-content-between","align-items-center","bg-light","border-bottom","shadow-sm","mb-5","py-3","px-5"],"header"));function R(e){var t=e.onToggle;return r.a.createElement("header",{className:x},r.a.createElement("h5",{className:"font-weight-normal mb-0"},"CWC-project v. 2.0"),r.a.createElement(_.a,{color:"link",className:"text-decoration-none",onClick:function(){return t()}},"Log in ",r.a.createElement(C.LogIn,null)))}R.propTypes={onToggle:P.a.func.isRequired};var q=Object(i.b)(null,function(e){return{onToggle:function(t){e(m(t)),e({type:"TOGGLE_MODAL"})}}})(R),L=a(370),G=(a(343),a(371)),M=a(368),D=a(369),I=(a(344),a(363)),F=a(364),A=a(365),U=a(366),V=a(367),z=(a(345),a(356)),B=a(357),J=a(358),W=a(359),$=a(360),H=a(372),K=a(361),Q=a(362),X=(a(346),["p-1"]),Y=["mb-1"],Z=["float-right","mt-3"],ee=["btn","btn-light","border-0","shadow-none"],te=k()(X),ae=k()(Y),ne=k()(Z),re=k()(ee);function le(e){var t=e.props,a=t.id,n=t.btnValue,l=t.validation,o=t.emailFeedback,i=t.passFeedback,c=t.emailInfo,u=e.state,s=u.email,p=u.pass,f=e.handleChange,m=e.passToggle,d=e.handleSubmit,b=k()(""!==s.valid&&l?s.valid?"is-valid":"is-invalid":""),g=k()(""!==p.valid&&l?p.valid?"is-valid":"is-invalid":"");return r.a.createElement(z.a,{className:te,onSubmit:d},r.a.createElement(B.a,{className:ae},r.a.createElement(J.a,{for:"".concat(a,"Email")},"E-mail*"),r.a.createElement(W.a,null,r.a.createElement($.a,{type:"email",className:b,id:"".concat(a,"Email"),name:"email",value:s.value,onChange:f,required:!0}),r.a.createElement(H.a,{addonType:"append",className:"append"},"@"),!!o&&r.a.createElement(K.a,null,o)),!!c&&r.a.createElement(Q.a,null,c)),r.a.createElement(B.a,{className:ae},r.a.createElement(J.a,{for:"".concat(a,"Pass")},"Password*"),r.a.createElement(W.a,null,r.a.createElement($.a,{type:p.hide?"password":"text",className:g,id:"".concat(a,"Pass"),name:"pass",value:p.value,onChange:f,required:!0}),r.a.createElement(H.a,{addonType:"append",className:"append"},r.a.createElement("span",{className:"input-group-text p-0"},r.a.createElement("button",{color:"link",onClick:m,className:re},p.hide?r.a.createElement(C.EyeOff,{className:"pass-icon"}):r.a.createElement(C.Eye,{className:"pass-icon"})))),!!i&&r.a.createElement(K.a,null,i))),r.a.createElement(_.a,{color:"primary",outline:!0,className:ne},n))}function oe(e){return(oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ie(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){fe(e,t,a[t])})}return e}function ce(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ue(e){return(ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function se(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function pe(e,t){return(pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function fe(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}le.propTypes={props:P.a.shape({id:P.a.string.isRequired,btnValue:P.a.string,validation:P.a.bool,emailFeedback:P.a.string,passFeedback:P.a.string,emailInfo:P.a.string}),state:P.a.shape({email:P.a.shape({value:P.a.string.isRequired,valid:P.a.oneOfType([P.a.string,P.a.bool]).isRequired}),pass:P.a.shape({value:P.a.string.isRequired,valid:P.a.oneOfType([P.a.string,P.a.bool]).isRequired,hide:P.a.bool.isRequired})}),handleChange:P.a.func.isRequired},le.defaultProps={btnValue:"submit"};var me=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=ue(t).call(this,e),a=!r||"object"!==oe(r)&&"function"!=typeof r?se(n):r,fe(se(a),"handleChange",function(e){var t=e.target,n=t.name,r=t.value;a.setState(function(e){return ie({},e,fe({},n,ie({},e[n],{value:r,valid:!a.props.validation||a.handleCheck(n,r)})))})}),fe(se(a),"passToggle",function(e){var t=a.state.pass;a.setState({pass:ie({},t,{hide:!t.hide})}),e.preventDefault()}),fe(se(a),"handleSubmit",function(e){var t=a.state,n=t.email,r=t.pass,l=a.props.logUser;e.preventDefault(),n.valid&&r.valid?(console.log("good"),l()):console.log("invalid")}),a.state={email:{value:"",valid:""},pass:{value:"",valid:"",hide:!0}},a}var a,l,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pe(e,t)}(t,n["PureComponent"]),a=t,(l=[{key:"handleCheck",value:function(e,t){return this.regExp(e).test(t)}},{key:"regExp",value:function(e){switch(e){case"email":return/^[a-z0-9]+[\w-\.]*\@[a-z0-9]+[\w-\.]*\.[a-z]{2,3}/i;case"pass":return/^(?=.*\d)(?=.*[a-z])[\w!@#$%^&*]{6,}$/i}}},{key:"render",value:function(){return r.a.createElement(le,{props:this.props,state:this.state,handleChange:this.handleChange,passToggle:this.passToggle,handleSubmit:this.handleSubmit})}}])&&ce(a.prototype,l),o&&ce(a,o),t}();var de=Object(i.b)(null,function(e){return{logUser:function(){return e(g())}}})(me),be=["text-primary"],ge=["pb-1","pl-1"],ve=k()(ge),he=k()(be,"regNavLink");function ye(e){var t=e.activeTab,a=e.toggleTab;return r.a.createElement("div",null,r.a.createElement(I.a,{tabs:!0},r.a.createElement(F.a,null,r.a.createElement(A.a,{className:k()({active:"1"===t},he),onClick:function(){return a("1")}},"Sign In ",r.a.createElement(C.User,{className:ve}))),r.a.createElement(F.a,null,r.a.createElement(A.a,{className:k()({active:"2"===t},he),onClick:function(){return a("2")}},"Sign Up ",r.a.createElement(C.UserPlus,{className:ve})))),r.a.createElement(U.a,{activeTab:t},r.a.createElement(V.a,{tabId:"1"},r.a.createElement(de,{id:"log",btnValue:"Log in"})),r.a.createElement(V.a,{tabId:"2"},r.a.createElement(de,{id:"reg",btnValue:"Register",validation:!0,emailFeedback:"Incorrect email format. Example: example@email.com",passFeedback:"Password length should be not less than 6 characters. Please use at least one letter and one number."}))))}ye.propTypes={activeTab:P.a.string.isRequired,toggleTab:P.a.func.isRequired};var Ee=Object(i.b)(function(e){return{activeTab:e.rsEffects.activeTab}},function(e){return{toggleTab:function(t){return e(m(t))}}})(ye),Oe=["border-bottom-0","pb-0"],Te=["pt-0"],we=k()(Oe),je=k()(Te);function Ne(e){var t=e.modal,a=e.toggleModal;return r.a.createElement("div",null,r.a.createElement(G.a,{className:"reg-modal",isOpen:t},r.a.createElement(M.a,{className:we,toggle:a}),r.a.createElement(D.a,{className:je},r.a.createElement(Ee,null))))}Ne.propTypes={modal:P.a.bool.isRequired,toggleModal:P.a.func.isRequired};var Pe=Object(i.b)(function(e){return{modal:e.rsEffects.modal}},function(e){return{toggleModal:function(){return e({type:"TOGGLE_MODAL"})}}})(Ne),Se=k()(["text-center"]);function ke(e){var t=e.onToggle;return r.a.createElement("main",null,r.a.createElement(L.a,{className:Se},r.a.createElement("h1",{className:"heading-greeting"},"CWC2"),r.a.createElement("div",null,r.a.createElement("p",null,"Todo based application. Built with ReactJS, NodeJS/Express, MongoDb."),r.a.createElement("p",null,"For using please ",r.a.createElement(_.a,{color:"link",className:"p-0 align-baseline",onClick:function(){return t()}},"sign in")," or ",r.a.createElement(_.a,{color:"link",className:"p-0 align-baseline",onClick:function(){return t("2")}},"register"),".")),r.a.createElement(Pe,null)))}ke.propTypes={onToggle:P.a.func.isRequired};var Ce=Object(i.b)(null,function(e){return{onToggle:function(t){e(m(t)),e({type:"TOGGLE_MODAL"})}}})(ke),_e=["mt-5"],xe=["w-75"],Re=["text-muted","text-center","mt-4"],qe=k()(_e),Le=k()(xe),Ge=k()(Re);function Me(){return r.a.createElement("footer",{className:qe},r.a.createElement("hr",{className:Le}),r.a.createElement("p",{className:Ge},"© 2018-2019 CWC-project"))}var De=document.getElementById("app");o.a.render(r.a.createElement(i.a,{store:j},r.a.createElement(function(){return r.a.createElement(n.Fragment,null,r.a.createElement(q,null),r.a.createElement(Ce,null),r.a.createElement(Me,null))},null)),De)}});