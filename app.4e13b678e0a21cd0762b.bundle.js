!function(e){function t(t){for(var r,c,i=t[0],u=t[1],l=t[2],p=0,f=[];p<i.length;p++)c=i[p],a[c]&&f.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);f.length;)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={0:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=u;o.push([380,1]),n()}({363:function(e,t,n){},368:function(e,t,n){},369:function(e,t,n){},370:function(e,t,n){},371:function(e,t,n){},379:function(e,t,n){},380:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"REG_USER",function(){return P}),n.d(r,"LOGIN_USER",function(){return S}),n.d(r,"LOGOUT_USER",function(){return R}),n.d(r,"FETCH_USER",function(){return _}),n.d(r,"ERR_LOGIN",function(){return k}),n.d(r,"ERR_REG",function(){return N}),n.d(r,"login",function(){return L}),n.d(r,"reg",function(){return x}),n.d(r,"logout",function(){return I});var a=n(1),o=n.n(a),c=n(22),i=n(10),u=n(23),l=n(11),s=n(52),p=n.n(s),f=n(53),m=n.n(f),d=n(54),b=function(){return{type:"TOGGLE_MODAL"}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1";return{type:"TOGGLE_TAB",activeTab:e}},y=n(27),h=n.n(y),v="Use at least 1 character for name.",E="Incorrect email format. Example: example@email.com",O="Password length should be not less than 6 characters. Please use at least one letter and one number.",j="https://cwc-project.herokuapp.com/api";function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){T(e,t,n[t])})}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P="REG_USER",S="LOGIN_USER",R="LOGOUT_USER",_="FETCH_USER",k="ERR_LOGIN",N="ERR_REG",C=function(){return{type:_}},q=function(e){return{type:S,user:e}},G=function(){return{type:R}},L=function(e,t){return function(n){return n(C()),h.a.post("".concat(j,"/user/login"),w({},e)).then(function(e){var t=e.data;return n(q(t))}).then(function(){return t.replace("/projects")}).catch(function(e){return n(function(e){return{type:k,err:e}}(e))})}},x=function(e,t){return function(n){return n(C()),h.a.post("".concat(j,"/user/register"),w({},e)).then(function(e){var t=e.data;return n(q(t))}).then(function(){return t.replace("/projects")}).catch(function(e){return n(function(e){return{type:N,err:e}}(e))})}},I=function(e,t){return function(n){return h()("".concat(j,"/user/logout"),{method:"POST",headers:{Authorization:"Bearer ".concat(e)}}).then(function(){return n(G())}).catch(function(e){return console.error("Unable to logout: ".concat(e)),n(G())}).finally(function(){return t.replace("/")})}},A=function(e){return{type:"ERR_PROJECTS",err:e}};function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){D(e,t,n[t])})}return e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F={err:{log:"",reg:"",projects:""}},U=function(e){var t=e.response?e.response.data:e;return t.formatErr?function(e){var t=e.nameErr,n=void 0!==t&&t,r=e.emailErr,a=void 0!==r&&r,o=e.passErr;return n?v:a?E:void 0!==o&&o?O:""}(t.formatErr):t="string"==typeof t.error?t.error:e.toString()},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return{err:M({},e.err,{log:U(t.err)})};case N:return{err:M({},e.err,{reg:U(t.err)})};case"ERR_PROJECTS":return{err:M({},e.err,{projects:U(t.err)})};case"TOGGLE_MODAL":return{err:M({},e.err,{log:"",reg:""})};case R:return F;default:return e}};function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){B(e,t,n[t])})}return e}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var H={modal:!1,activeTab:"1"},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_MODAL":return z({},e,{modal:!e.modal});case"TOGGLE_TAB":return z({},e,{activeTab:t.activeTab});case S:return z({},e,{modal:!1});default:return e}};function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){$(e,t,n[t])})}return e}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var K,Q={authToken:"",info:{},loggedIn:!1,loading:!1};try{K=W({},Q,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"state";try{var t=sessionStorage.getItem(e);if(null===t)return;return JSON.parse(t)}catch(e){return}}("user"))}catch(e){K=Q}function X(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){Z(e,t,n[t])})}return e}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ee,te={projects:[],loading:!1},ne=Object(l.c)({errors:J,rsEffects:V,user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return W({},e,{loading:!0});case S:return{authToken:t.user.authToken,info:W({},t.user.info),loggedIn:!0,loading:!1};case R:return Q;case k:case N:return W({},e,{loading:!1});default:return e}},projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PROJECTS":return Y({},e,{loading:!0});case"GET_PROJECTS":return{projects:t.projects,loading:!1};case"ADD_PROJECT":return Y({},e,{projects:[].concat(X(e.projects),[t.project])});case"ERR_PROJECTS":return Y({},e,{loading:!1});default:return e}}}),re=[m.a,d.a,(ee="user",function(e){return function(t){return function(n){var r=t(n);try{var a=JSON.stringify(ee?e.getState()[ee]:e.getState());sessionStorage.setItem(ee||"state",a)}catch(e){console.error("loadStateToStorage",e)}return r}}}),p.a],ae=Object(l.e)(ne,l.a.apply(void 0,re)),oe=(n(90),n(25)),ce=n(402),ie=n(3),ue=n.n(ie),le=n(0),se=n.n(le),pe=n(12),fe=n(55),me=n(404),de=n(381),be=n(382),ge=n(383);n(363);function ye(e){return(ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function he(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ve(e){return(ve=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ee(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Oe(e,t){return(Oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var je=ue()(["d-flex","justify-content-between","align-items-center","bg-light","border-bottom","shadow-sm","mb-5","py-3","px-5"],"header"),we=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=ve(t).call(this,e),n=!a||"object"!==ye(a)&&"function"!=typeof a?Ee(r):a,function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(Ee(n),"toggle",function(){var e=n.state.dropdownOpen;n.setState({dropdownOpen:!e})}),n.state={dropdownOpen:!1},n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Oe(e,t)}(t,a["PureComponent"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.onToggle,n=e.loggedIn,r=e.userName,a=e.onLogout,c=this.state.dropdownOpen,i=n?o.a.createElement(me.a,{isOpen:c,toggle:this.toggle},o.a.createElement(de.a,{color:"link",className:"text-decoration-none",caret:!0},r),o.a.createElement(be.a,{right:!0},o.a.createElement(ge.a,{onClick:a},o.a.createElement(pe.LogOut,null),"  Log out"))):o.a.createElement(fe.a,{color:"link",className:"text-decoration-none",onClick:function(){return t()}},"Log in ",o.a.createElement(pe.LogIn,null));return o.a.createElement("header",{className:je},o.a.createElement("h5",{className:"font-weight-normal mb-0"},"CWC-project v. 2.0"),i)}}])&&he(n.prototype,r),c&&he(n,c),t}();we.propTypes={onToggle:se.a.func.isRequired,onLogout:se.a.func.isRequired,loggedIn:se.a.bool.isRequired,userName:se.a.string},we.defaultProps={userName:"user_name"};var Te=Object(l.d)(oe.g,Object(i.b)(function(e){return{user:e.user}},null,function(e,t,n){var r=e.user.authToken,a=t.dispatch,o=n.history;return{loggedIn:e.user.loggedIn,userName:e.user.info.name,onLogout:function(){return a(I(r,o))},onToggle:function(e){a(g(e)),a({type:"TOGGLE_MODAL"})}}}))(we),Pe=(n(368),n(403)),Se=n(398),Re=n(399),_e=(n(369),n(393)),ke=n(394),Ne=n(395),Ce=n(396),qe=n(397),Ge=(n(370),n(385)),Le=n(386),xe=n(387),Ie=n(388),Ae=n(389),Me=n(405),De=n(390),Fe=n(391),Ue=n(392),Je=(n(371),n(384)),ze=ue()(["overflow-hidden","text-truncate"]),Be=function(e){var t=e.err[e.type];return t?o.a.createElement(Je.a,{color:"danger",className:ze},t):""},He=Object(i.b)(function(e){return{err:e.errors.err}})(Be);Be.propTypes={type:se.a.oneOf(["log","reg","projects"]).isRequired,err:se.a.shape({log:se.a.string.isRequired,reg:se.a.string.isRequired,projects:se.a.string.isRequired}).isRequired};var Ve=["p-1"],We=["mb-1"],$e=["float-right","mt-3"],Ke=["btn","btn-light","border-0","shadow-none"],Qe=["input-group-text"],Xe=["input-group-text","p-0"],Ye=ue()(Ve),Ze=ue()(We),et=ue()($e),tt=ue()(Ke),nt=ue()(Qe),rt=ue()(Xe);function at(e){var t=e.props,n=t.id,r=t.type,c=t.btnValue,i=t.validation,u=t.optionFileds,l=t.nameFeedback,s=t.emailFeedback,p=t.passFeedback,f=t.emailInfo,m=t.loading,d=e.state,b=d.name,g=d.email,y=d.pass,h=e.handleChange,v=e.passToggle,E=e.handleSubmit,O=ue()({"is-valid":i&&!0===b.valid,"is-invalid":i&&!1===b.valid}),j=ue()({"is-valid":i&&!0===g.valid,"is-invalid":i&&!1===g.valid}),w=ue()({"is-valid":i&&!0===y.valid,"is-invalid":i&&!1===y.valid});return o.a.createElement(Ge.a,{className:Ye,onSubmit:E},o.a.createElement("fieldset",{disabled:m?"disabled":""},"name"===u?o.a.createElement(Le.a,{className:Ze},o.a.createElement(xe.a,{for:"".concat(n,"name")},"Name*"),o.a.createElement(Ie.a,null,o.a.createElement(Ae.a,{type:"text",className:O,id:"".concat(n,"name"),name:"name",value:b.value,onChange:h,required:!0}),o.a.createElement(Me.a,{addonType:"append",className:"append"},o.a.createElement("span",{className:nt},o.a.createElement(pe.User,{className:"input-addon-icon"}))),!!l&&o.a.createElement(De.a,null,l))):"",o.a.createElement(Le.a,{className:Ze},o.a.createElement(xe.a,{for:"".concat(n,"Email")},"E-mail*"),o.a.createElement(Ie.a,null,o.a.createElement(Ae.a,{type:"email",className:j,id:"".concat(n,"Email"),name:"email",value:g.value,onChange:h,required:!0}),o.a.createElement(Me.a,{addonType:"append",className:"append"},"@"),!!s&&o.a.createElement(De.a,null,s)),!!f&&o.a.createElement(Fe.a,null,f)),o.a.createElement(Le.a,{className:Ze},o.a.createElement(xe.a,{for:"".concat(n,"Pass")},"Password*"),o.a.createElement(Ie.a,null,o.a.createElement(Ae.a,{type:y.hide?"password":"text",className:w,id:"".concat(n,"Pass"),name:"pass",value:y.value,onChange:h,required:!0}),o.a.createElement(Me.a,{addonType:"append",className:"append"},o.a.createElement("span",{className:rt},o.a.createElement("button",{color:"link",type:"button",onClick:v,className:tt},y.hide?o.a.createElement(pe.EyeOff,{className:"input-addon-icon"}):o.a.createElement(pe.Eye,{className:"input-addon-icon"})))),!!p&&o.a.createElement(De.a,null,p))),o.a.createElement(He,{type:r}),o.a.createElement(fe.a,{color:"primary",outline:!0,className:et},m?o.a.createElement(a.Fragment,null,o.a.createElement(Ue.a,{color:"primary",size:"sm"})," Loading ..."):c)))}function ot(e){return(ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ct(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){ft(e,t,n[t])})}return e}function it(){return(it=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ut(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function lt(e){return(lt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function st(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function pt(e,t){return(pt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ft(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}at.propTypes={props:se.a.shape({id:se.a.string.isRequired,type:se.a.oneOf(["log","reg"]).isRequired,optionFileds:se.a.oneOf(["name"]),btnValue:se.a.string,validation:se.a.bool,nameFeedback:se.a.string,emailFeedback:se.a.string,passFeedback:se.a.string,emailInfo:se.a.string,loading:se.a.bool}),state:se.a.shape({name:se.a.shape({value:se.a.string.isRequired,valid:se.a.oneOfType([se.a.string,se.a.bool]).isRequired}).isRequired,email:se.a.shape({value:se.a.string.isRequired,valid:se.a.oneOfType([se.a.string,se.a.bool]).isRequired}).isRequired,pass:se.a.shape({value:se.a.string.isRequired,valid:se.a.oneOfType([se.a.string,se.a.bool]).isRequired,hide:se.a.bool.isRequired}).isRequired,err:se.a.string}).isRequired,handleChange:se.a.func.isRequired,passToggle:se.a.func.isRequired,handleSubmit:se.a.func.isRequired},at.defaultProps={props:{btnValue:"submit"}};var mt=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=lt(t).call(this,e),n=!a||"object"!==ot(a)&&"function"!=typeof a?st(r):a,ft(st(n),"handleChange",function(e){var t=e.target,r=t.name,a=t.value,o=it({},n.state),c=n.props.validation,i=a.trimStart();o[r]&&n.setState(function(e){return ct({},e,ft({},r,ct({},e[r],{value:i,valid:!c||n.handleCheck(r,i)})))})}),ft(st(n),"passToggle",function(e){var t=n.state.pass;n.setState({pass:ct({},t,{hide:!t.hide})}),e.preventDefault()}),ft(st(n),"handleSubmit",function(e){e.preventDefault();var t=n.state,r=t.name,a=t.email,o=t.pass,c=n.props,i=c.type,u=c.userActions,l=u.login,s=u.reg;if(a.valid&&o.valid&&(r.valid||"reg"!==i)){var p={email:a.value.toLowerCase(),pass:o.value};"log"!==i?"reg"===i&&(p=ct({},p,{name:r.value.trimEnd()}),n.submitAction(s,p)):n.submitAction(l,p)}}),ft(st(n),"submitAction",function(e,t){e(t,n.props.history)}),ft(st(n),"handleCheck",function(e,t){return n.regExps[e].test(t)}),n.state={name:{value:"",valid:""},email:{value:"",valid:""},pass:{value:"",valid:"",hide:!0}},n.regExps={name:/.{1,}/i,email:/^[a-z0-9]+[\w-.]*@[a-z0-9]+[\w-.]*\.[a-z]{2,3}/i,pass:/^(?=.*\d)(?=.*[a-z])[\w!@#$%^&*]{6,}$/i},n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pt(e,t)}(t,a["PureComponent"]),n=t,(r=[{key:"render",value:function(){return o.a.createElement(at,{props:this.props,state:this.state,handleChange:this.handleChange,passToggle:this.passToggle,handleSubmit:this.handleSubmit})}}])&&ut(n.prototype,r),c&&ut(n,c),t}(),dt=Object(l.d)(oe.g,Object(i.b)(function(e){return{loading:e.user.loading}},function(e){return{userActions:Object(l.b)(r,e)}}))(mt);mt.propTypes={validation:se.a.bool,type:se.a.oneOf(["log","reg"]).isRequired,history:se.a.shape({push:se.a.func,location:se.a.object}).isRequired,userActions:se.a.shape({reg:se.a.func.isRequired,login:se.a.func.isRequired}).isRequired},mt.defaultProps={validation:!1};var bt=["text-primary"],gt=["pb-1","pl-1"],yt=ue()(gt),ht=ue()(bt,"reg-link");function vt(e){var t=e.activeTab,n=e.toggleTab;return o.a.createElement("div",null,o.a.createElement(_e.a,{tabs:!0},o.a.createElement(ke.a,null," ",o.a.createElement(Ne.a,{className:ue()({active:"1"===t},ht),onClick:function(){return n("1")}},"Sign In",o.a.createElement(pe.User,{className:yt}))),o.a.createElement(ke.a,null,o.a.createElement(Ne.a,{className:ue()({active:"2"===t},ht),onClick:function(){return n("2")}},"Sign Up",o.a.createElement(pe.UserPlus,{className:yt})))),o.a.createElement(Ce.a,{activeTab:t},o.a.createElement(qe.a,{tabId:"1"},o.a.createElement(dt,{id:"log",type:"log",btnValue:"Log in"})),o.a.createElement(qe.a,{tabId:"2"},o.a.createElement(dt,{id:"reg",type:"reg",btnValue:"Register",validation:!0,optionFileds:"name",nameFeedback:v,emailFeedback:E,passFeedback:O}))))}vt.propTypes={activeTab:se.a.string.isRequired,toggleTab:se.a.func.isRequired};var Et=Object(i.b)(function(e){return{activeTab:e.rsEffects.activeTab}},function(e){return{toggleTab:function(t){return e(g(t))}}})(vt),Ot=["border-bottom-0","pb-0"],jt=["pt-0"],wt=ue()(Ot),Tt=ue()(jt);function Pt(e){var t=e.modal,n=e.toggleModal;return o.a.createElement("div",null,o.a.createElement(Pe.a,{className:"reg-modal",isOpen:t},o.a.createElement(Se.a,{className:wt,toggle:n}),o.a.createElement(Re.a,{className:Tt},o.a.createElement(Et,null))))}Pt.propTypes={modal:se.a.bool.isRequired,toggleModal:se.a.func.isRequired};var St=Object(i.b)(function(e){return{modal:e.rsEffects.modal}},function(e){return{toggleModal:function(){return e({type:"TOGGLE_MODAL"})}}})(Pt);function Rt(e){return(Rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function kt(e,t){return!t||"object"!==Rt(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Nt(e){return(Nt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ct(e,t){return(Ct=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var qt=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),kt(this,Nt(t).apply(this,arguments))}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ct(e,t)}(t,a["PureComponent"]),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.history;return e.loggedIn&&t.replace("/projects"),null}},{key:"render",value:function(){var e=this.props.onToggle;return o.a.createElement("main",null,o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{className:"heading-greeting"},"CWC2"),o.a.createElement("div",null,o.a.createElement("p",null,"Todo based application. Built with ReactJS, NodeJS/Express, MongoDb."),o.a.createElement("p",null,"For using please ",o.a.createElement(fe.a,{color:"link",className:"p-0 align-baseline",onClick:function(){return e()}},"sign in")," or ",o.a.createElement(fe.a,{color:"link",className:"p-0 align-baseline",onClick:function(){return e("2")}},"register"),".")),o.a.createElement(St,null)))}}])&&_t(n.prototype,r),c&&_t(n,c),t}();qt.propTypes={loggedIn:se.a.bool.isRequired,history:se.a.object.isRequired,onToggle:se.a.func.isRequired};var Gt=Object(i.b)(function(e){return{loggedIn:e.user.loggedIn}},function(e){return{onToggle:function(t){e(g(t)),e({type:"TOGGLE_MODAL"})}}})(qt),Lt=["mt-5"],xt=["w-75"],It=["text-muted","text-center","mt-4"],At=ue()(Lt),Mt=ue()(xt),Dt=ue()(It);function Ft(){return o.a.createElement("footer",{className:At},o.a.createElement("hr",{className:Mt}),o.a.createElement("p",{className:Dt},"© 2018-2019 CWC-project"))}var Ut=n(400);n(379);function Jt(e){var t=e.projects;return o.a.createElement(Ge.a,{className:"projects-list"},o.a.createElement(Ie.a,null,o.a.createElement(Ut.a,{className:"projects-badge"},t.length),o.a.createElement(Ae.a,{className:"projects-select",type:"select",name:"select"},t.map(function(e){var t=e._id,n=e.title;return o.a.createElement("option",{key:t},n)})),o.a.createElement(Me.a,{addonType:"append"},o.a.createElement(fe.a,{color:"primary"},o.a.createElement(pe.ChevronsRight,null)))))}Jt.propTypes={projects:se.a.array.isRequired};var zt=ue()(["mt-4"]);function Bt(e){var t=e.projects,n=e.loading,r=e.toggleModal;return o.a.createElement(o.a.Fragment,null,n?o.a.createElement(Ue.a,{color:"primary"}):o.a.createElement(o.a.Fragment,null,t.length>0&&o.a.createElement(Jt,{projects:t}),o.a.createElement(He,{type:"projects"}),o.a.createElement(fe.a,{color:"primary",className:zt,onClick:r},o.a.createElement(pe.Plus,null)," ",t.length?"Add new project":"Create your first project")))}function Ht(e){return(Ht="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Vt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Wt(e,t){return!t||"object"!==Ht(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function $t(e){return($t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Kt(e,t){return(Kt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Bt.propTypes={projects:se.a.array.isRequired,loading:se.a.bool.isRequired,toggleModal:se.a.func.isRequired};var Qt=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=Wt(this,$t(t).call(this,e))).getProjects=e.getProjects,n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Kt(e,t)}(t,a["PureComponent"]),n=t,(r=[{key:"componentDidMount",value:function(){this.getProjects()}},{key:"render",value:function(){return o.a.createElement(Bt,this.props)}}])&&Vt(n.prototype,r),c&&Vt(n,c),t}(),Xt=Object(i.b)(function(e){var t=e.projects,n=e.user;return{projects:t.projects,loading:t.loading,authToken:n.authToken}},null,function(e,t){var n=e.authToken,r=e.projects,a=e.loading,o=t.dispatch;return{projects:r,loading:a,toggleModal:function(){return o({type:"TOGGLE_MODAL"})},getProjects:function(){return o((e=n,function(t){return t({type:"FETCH_PROJECTS"}),h()({url:"".concat(j,"/projects"),method:"GET",headers:{Authorization:"Bearer ".concat(e)}}).then(function(e){var n=e.data;return t({type:"GET_PROJECTS",projects:n.projects})}).catch(function(e){return t(A(e))})}));var e}}})(Qt);Qt.propTypes={getProjects:se.a.func.isRequired};var Yt=n(401);function Zt(e){return(Zt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function en(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function tn(e,t){return!t||"object"!==Zt(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function nn(e){return(nn=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function rn(e,t){return(rn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var an=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=tn(this,nn(t).call(this,e))).title=o.a.createRef(),n.toggleModal=e.toggleModal,n.addProject=e.addProject,n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&rn(e,t)}(t,a["PureComponent"]),n=t,(r=[{key:"render",value:function(){var e=this,t=this.props.modal;return o.a.createElement(Pe.a,{isOpen:t,fade:!0},o.a.createElement(Se.a,{toggle:this.toggleModal},"Add new project"),o.a.createElement(Re.a,null,o.a.createElement(Ge.a,{onSubmit:function(t){t.preventDefault(),e.addProject(e.title.current.value.trim())}},o.a.createElement(Ae.a,{placeholder:"Insert project title",innerRef:this.title,required:!0}))),o.a.createElement(Yt.a,null,o.a.createElement(fe.a,{color:"primary",onClick:function(){return e.addProject(e.title.current.value.trim())}},"Submit new project"),o.a.createElement(fe.a,{color:"secondary",onClick:this.toggleModal},"Cancel")))}}])&&en(n.prototype,r),c&&en(n,c),t}();an.propTypes={modal:se.a.bool,toggleModal:se.a.func.isRequired,addProject:se.a.func.isRequired},an.defaultProps={modal:!1};var on=Object(i.b)(function(e){var t=e.rsEffects,n=e.user;return{modal:t.modal,authToken:n.authToken}},null,function(e,t,n){var r=e.authToken,a=e.modal,o=t.dispatch;n.history;return{modal:a,toggleModal:Object(l.b)(b,o),addProject:function(e){return o(function(e,t){return function(n){return h()({url:"".concat(j,"/projects"),method:"POST",headers:{Authorization:"Bearer ".concat(t)},data:{title:e}}).then(function(t){var r=t.data;return n({type:"ADD_PROJECT",project:{title:e,_id:r.id}})}).then(function(){return n({type:"TOGGLE_MODAL"})}).catch(function(e){return n(A(e))})}}(e,r))}}})(an),cn=ue()(["mb-4"]);function un(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:cn},"404 PAGE NOT FOUND"),o.a.createElement(u.b,{to:"/",replace:!0},"Go to Home page"))}function ln(){return(ln=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function sn(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var pn=function(e){var t=e.component,n=e.loggedIn,r=sn(e,["component","loggedIn"]);return o.a.createElement(oe.b,ln({},r,{render:function(e){return n?o.a.createElement(t,e):o.a.createElement(oe.a,{to:"/"})}}))},fn=Object(i.b)(function(e){return{loggedIn:e.user.loggedIn}})(pn);pn.propTypes={component:se.a.object.isRequired,loggedIn:se.a.bool.isRequired};var mn=ue()(["text-center"]);var dn=document.getElementById("app");Object(c.render)(o.a.createElement(i.a,{store:ae},o.a.createElement(u.a,null,o.a.createElement(function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(Te,null),o.a.createElement(ce.a,{className:mn},o.a.createElement(oe.d,null,o.a.createElement(oe.b,{exact:!0,path:"/",component:Gt}),o.a.createElement(fn,{exact:!0,path:"/projects",component:Xt}),o.a.createElement(oe.b,{component:un})),o.a.createElement(oe.b,{path:"/projects",component:on})),o.a.createElement(Ft,null))},null))),dn)}});