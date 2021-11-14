(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{325:function(e,t,n){e.exports=n(613)},483:function(e,t,n){},506:function(e,t){},508:function(e,t){},545:function(e,t){},546:function(e,t){},603:function(e,t,n){},604:function(e,t,n){},605:function(e,t,n){},606:function(e,t,n){},607:function(e,t,n){},608:function(e,t,n){},609:function(e,t,n){},612:function(e,t,n){},613:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(37),o=n.n(c),s=n(10),i=n(11),l=n(13),u=n(12),m=n(14),p=n(31),d=n(17),h=n(26),f=n(76),g=n(622),b=n(619),v=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.heading,n=e.confirmText,a=e.cancelText,c=e.modal,o=e.onSubmit,s=e.onCancel;return r.a.createElement(b.a,{open:c.isOpen},r.a.createElement("button",{type:"button",className:"btn-close modal-close",onClick:function(){return o()}}),r.a.createElement("h2",null,t),r.a.createElement(b.a.Actions,null,r.a.createElement("button",{type:"button",className:"btn-cancel",onClick:function(){return s()}},a),r.a.createElement("button",{type:"button",className:"btn btn-green",onClick:function(){return o()}},n)))}}]),t}(a.Component);v.defaultProps={heading:"",cancelText:"Cancel"};var E=v,O=(n(483),n(24)),j=n.n(O),w=n(38),y=n(308),k=n.n(y),N=Object({NODE_ENV:"production",PUBLIC_URL:"/react-template"}).BASE_URL,x=k.a.create({baseURL:N}),C=function(){var e=Object(w.a)(j.a.mark(function e(t){var n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.post("/authorization/refresh",{refresh_token:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(w.a)(j.a.mark(function e(){var t;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.get("items.json");case 3:t=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error("Items loading failed");case 9:return e.abrupt("return",t.data);case 10:case"end":return e.stop()}},e,null,[[0,6]])}));return function(){return e.apply(this,arguments)}}(),I=n(309),T=n.n(I),M=n(310),A=n.n(M),L=function(e){var t=new Date,n=A.a.decode(e),a=n&&n.valid_through;return!!T()(a).isAfter(t)};!function(e,t){var n=(e=Math.abs(e)%100)%10;e>10&&e<20?t[2]:n>1&&n<5?t[1]:1===n?t[0]:t[2]}(22,["strom","stromy","stromov"]);var F=function(e,t){return function(e,t){localStorage.setItem("accessToken",e),localStorage.setItem("refreshToken",t)}(e,t),{type:"Sign-in success",payload:{accessToken:e,refreshToken:t}}},$=function(){return localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("prevUrl"),{type:"Sign-out called"}},z=function(){return function(){var e=Object(w.a)(j.a.mark(function e(t){var n,a,r;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=!1,!(a={accessToken:localStorage.getItem("accessToken"),refreshToken:localStorage.getItem("refreshToken")}).accessToken||null===a.accessToken){e.next=6;break}return e.next=5,L(a.accessToken);case 5:n=e.sent;case 6:if(!n){e.next=8;break}return e.abrupt("return",t(F(a.accessToken,a.refreshToken)));case 8:if(!a.refreshToken||null===a.refreshToken){e.next=12;break}return e.next=11,L(a.refreshToken);case 11:n=e.sent;case 12:if(!n){e.next=23;break}return e.prev=13,e.next=16,C(a.refreshToken);case 16:r=e.sent,e.next=22;break;case 19:return e.prev=19,e.t0=e.catch(13),e.abrupt("return",t($()));case 22:return e.abrupt("return",t(F(r.data.token,r.data.refresh_token)));case 23:return e.abrupt("return",t($()));case 24:case"end":return e.stop()}},e,null,[[13,19]])}));return function(t){return e.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(w.a)(j.a.mark(function t(n){var a,r;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=parseInt(e&&e.response&&e.response.status,10),r=e&&e.response&&e.response.data&&e.response.data.error,404===a&&"Invalid token"===r&&n($());case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},W=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.cancelModal,n=e.openCancelModal,a=e.closeCancelModal,c=e.logOut;return r.a.createElement(g.a,{className:"aside",vertical:"true",visible:!0,width:"thin"},r.a.createElement(E,{heading:"Do you really want to sign out?",confirmText:"Sign out",modal:t,onSubmit:function(){return c()},onCancel:function(){return a()}}),r.a.createElement("div",{className:"sidebar-logo-wrap"},r.a.createElement("div",{className:"sidebar-text"},"Your logo"),r.a.createElement("div",{className:"sidebar-wrapper"},r.a.createElement("div",{className:"sidebar-logo"}))),r.a.createElement("ul",{className:"nav"},r.a.createElement("li",null,r.a.createElement(f.a,{to:"/items",isActive:function(e,t){return!!t.pathname.match(/^\/(item|edit-item|create-item)/)}},r.a.createElement("div",{className:"link-wrap"},r.a.createElement("div",{className:"right-border"}),r.a.createElement("div",{className:"link-text"},"Items list")))),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/page2",isActive:function(e,t){return!!t.pathname.match(/^\/page2/)}},r.a.createElement("div",{className:"link-wrap"},r.a.createElement("div",{className:"right-border"}),r.a.createElement("div",{className:"link-text"},"Page 2")))),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/page3",isActive:function(e,t){return!!t.pathname.match(/^\/(page3|edit-page3|create-page3)/)}},r.a.createElement("div",{className:"link-wrap"},r.a.createElement("div",{className:"right-border"}),r.a.createElement("div",{className:"link-text"},"Page 3"))))),r.a.createElement("div",{className:"sidebar-logout"},r.a.createElement("button",{type:"button",className:"logout-btn",onClick:function(){return n()}},"Sign out")))}}]),t}(a.Component),U=Object(d.c)(function(e){return{cancelModal:e.ui.cancelModal}},function(e){return{logOut:function(){return e(function(e){return e({type:"Temp auth sign out"}),e({type:"Close cancel modal"})})},openCancelModal:function(){return e({type:"Open cancel modal"})},closeCancelModal:function(){return e({type:"Close cancel modal"})}}})(W),B=n(3),D=n.n(B),H=n(620),_=(n(603),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).hideMessage=function(){setTimeout(function(){n.onCloseMessage()},5e3)},n.onCloseMessage=function(){var e=n.props,t=e.type,a=e.hideErrorMessage,r=e.hideSuccessMessage,c=e.hideWarningMessage;switch(t){case"error":return void a();case"success":return void r();case"warning":return void c();default:return void a()}},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){"success"===this.props.type&&this.hideMessage()}},{key:"render",value:function(){var e=this,t=this.props,n=t.text,a=t.type,c=t.show,o=D()({message:!0,success:"success"===a,error:"error"===a,warning:"warning"===a});return r.a.createElement(H.a,{in:c,timeout:500,unmountOnExit:!0,classNames:"message"},r.a.createElement("div",{className:o},r.a.createElement("div",{className:"msg-wrap"},r.a.createElement("div",{className:"msg-bg"}),r.a.createElement("div",{className:"msg-content"},r.a.createElement("div",{className:"close-btn",onClick:function(){return e.onCloseMessage()}}),r.a.createElement("div",{className:"msg-icon"}),n))))}}]),t}(a.Component));_.defaultProps={type:"error"};var R=Object(d.c)(null,function(e){return{hideErrorMessage:function(){return e({type:"Hide error message"})},hideSuccessMessage:function(){return e({type:"Hide success message"})},hideWarningMessage:function(){return e({type:"Hide warning message"})}}})(_),G=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.errorMsg,n=e.successMsg,a=e.warningMsg;return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null),r.a.createElement("div",{className:"main-content"},r.a.createElement(R,{text:t.text,show:t.show}),r.a.createElement(R,{type:"success",text:n.text,show:n.show}),r.a.createElement(R,{type:"warning",text:a.text,show:a.show}),this.props.children))}}]),t}(a.Component),J=Object(d.c)(function(e){return Object(h.a)({},e.ui)},function(e){return{}})(G),Y=n(121),V=function(e){return{isAuthorized:e.auth.isAuthorized}},q=function(e){return{checkAndRenewTokens:function(){return e(z())}}},K=(n(604),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).componentDidMount=function(){(0,e.props.clearServerErrors)()},e.onChangeInput=function(t,n){e.setState(Object(Y.a)({},t,n))},e.validateForm=function(){var t=e.state,n=t.login,a=t.password;return(n.length<5||a.length<5)&&(e.setState({validError:!0}),!0)},e.onSubmitForm=function(){var t=e.props.onSubmit,n=e.state,a=n.login,r=n.password,c=e.validateForm();e.setState({formWasSent:!0}),c||t(a,r)},e.clearErrors=function(){(0,e.props.clearServerErrors)(),e.setState({validError:!1})},e.state={login:"",password:"",formWasSent:!1,validError:!1,errorText:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.serverError,a=t.loginError,c=this.state,o=c.login,s=c.password,i=c.formWasSent,l=c.validError,u=D()({"login-row":!0,error:a||i&&o.length<5}),m=D()({"login-row":!0,pass:!0,error:a||i&&s.length<5}),p="";switch(!0){case a:p="Incorrect username or password";break;case n:p="Something went wrong";break;case l:switch(!0){case 0===o.length&&0===s.length:p="Please enter username and password";break;case 0!==o.length&&0===s.length:p="Please enter password";break;case 0===o.length&&0!==s.length:p="Please enter username";break;case o.length<5||s.length<5:p="Login or password are less than 5 characters";break;default:p="Incorrect username or password"}break;default:p="Something went wrong"}return r.a.createElement("div",{className:"ext-page-wrap login-wrap"},r.a.createElement("div",{className:"login-form"},r.a.createElement("div",{className:"login-logo-wrap"},r.a.createElement("div",{className:"logo-text"},"Your logo"),r.a.createElement("div",{className:"logo-wrapper"},r.a.createElement("div",{className:"login-logo"}))),!!(n||a||l)&&r.a.createElement("div",{className:"login-error"},p),r.a.createElement("div",{className:u},r.a.createElement("label",{htmlFor:""},"Username"),r.a.createElement("input",{id:"login",type:"text",value:o,onChange:function(t){return e.onChangeInput("login",t.target.value)},onFocus:this.clearErrors})),r.a.createElement("div",{className:m},r.a.createElement("label",{htmlFor:""},"Password"),r.a.createElement("input",{id:"password",type:"password",value:s,onChange:function(t){return e.onChangeInput("password",t.target.value)},onFocus:this.clearErrors})),r.a.createElement("button",{type:"button",className:"btn btn-green btn-login",onClick:function(){return e.onSubmitForm()}},"Sign in")))}}]),t}(a.Component)),Q=Object(d.c)(function(e){return Object(h.a)({},e.auth)},function(e){return{onSubmit:function(t,n){return e({type:"Temp auth sign in"})},clearServerErrors:function(){return e({type:"Clearing sign-in error"})}}})(function(e){var t=function(t){function n(){return Object(s.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,t),Object(i.a)(n,[{key:"render",value:function(){var t=this.props.isAuthorized,n=localStorage.getItem("prevUrl");return t?r.a.createElement(p.a,{to:n&&n.length>1?n:"/items"}):r.a.createElement(e,this.props)}}]),n}(a.Component);return Object(d.c)(V,q)(t)}(K)),X=(n(605),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,n=e.onClickItem;return r.a.createElement("div",{className:"row",onClick:function(){return n(t)}},r.a.createElement("div",{className:"cols-wrap"},r.a.createElement("div",{className:"col item-name"},t.name),r.a.createElement("div",{className:"col item-color"},t.color)))}}]),t}(a.Component)),Z=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.value,a=e.onChange,c=e.maxLength,o=e.isTextarea,s=e.classNameText,i=n.length;return r.a.createElement("div",{className:"input-wrap"+(o&&s.length>0?" ".concat(s):"")},r.a.createElement("label",{htmlFor:"address"},t),r.a.createElement("div",{className:"input-content"},o?r.a.createElement("textarea",{type:"text",value:n,onChange:function(e){return a(e.target.value)},maxLength:c}):r.a.createElement("input",{type:"text",value:n,onChange:function(e){return a(e.target.value)},maxLength:c}),r.a.createElement("div",{className:"counter"},i,"/",c)))}}]),t}(a.Component);Z.defaultProps={isTextarea:!1,classNameText:""};var ee=Z,te=n(30),ne=function(e){return{type:"Items list loading success",payload:{items:e||[]}}},ae=function(e){return{type:"Item created successfully",payload:{item:e}}},re=function(e){return{type:"Add item data",payload:{item:e}}},ce=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onSubmitForm=function(){var t=e.props.onSubmit,n=e.validateForm();e.setState({formWasSent:!0}),n||(e.setState({formWasSent:!1}),t())},e.validateForm=function(){var t=e.props.item;return 0===t.name.length||t.name.length>60||(0===t.color.length||t.color.length>50)},e.state={formWasSent:!1,validationError:!1},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.item,a=t.setItemName,c=t.setItemColor,o=this.state.formWasSent,s=0===n.name.length||n.name.length>60,i=0===n.color.length||n.color.length>50,l=D()({"form-row":!0,error:o&&s}),u=D()({"form-row":!0,error:o&&s}),m="";0===n.name.length&&(m="Item name field cannot be empty"),n.name.length>60&&(m="The maximum length of the item name has been exceeded");var p="";return 0===n.color.length&&(p="Item color field cannot be empty"),n.color.length>50&&(p="The maximum length of the item color has been exceeded"),r.a.createElement("div",{className:"form-wrap"},r.a.createElement("div",{className:l},r.a.createElement(ee,{label:"Item name",value:n.name,onChange:a,maxLength:60}),!(!o||!s)&&r.a.createElement("div",{className:"input-text"},m)),r.a.createElement("div",{className:u},r.a.createElement(ee,{label:"Item color",value:n.color,onChange:c,maxLength:50}),!(!o||!i)&&r.a.createElement("div",{className:"input-text"},p)),r.a.createElement("div",{className:"form-row special"},r.a.createElement("button",{type:"button",className:"btn btn-green",onClick:function(){return e.onSubmitForm()}},"Submit")))}}]),t}(a.Component),oe=Object(d.c)(null,function(e){return{setItemName:function(t){return e(function(e){return{type:"Set item name",payload:{value:e}}}(t))},setItemColor:function(t){return e(function(e){return{type:"Set item color",payload:{value:e}}}(t))}}})(ce),se=(n(606),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("svg",{className:"spinner-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},r.a.createElement("path",{className:"track",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"}),r.a.createElement("path",{className:"moving",d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 16 16",to:"360 16 16",dur:"0.8s",repeatCount:"indefinite"}))))}}]),t}(a.Component)),ie=function(e){return{isAuthorized:e.auth.isAuthorized}},le=function(e){return{checkAndRenewTokens:function(){return e(z())}}},ue=function(e){var t=function(t){function n(){return Object(s.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,t),Object(i.a)(n,[{key:"render",value:function(){var t=this.props.isAuthorized,n=this.props.location.pathname;return localStorage.setItem("prevUrl",n),t?r.a.createElement(e,this.props):r.a.createElement(p.a,{to:"/"})}}]),n}(a.Component);return Object(d.c)(ie,le)(t)},me=(n(607),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).componentDidMount=function(){(0,n.props.getItemsList)()},n.renderItemsList=function(e,t){var a=n.props.onClickItem;return r.a.createElement(X,{key:"".concat(e.id,"_").concat(t),item:e,onClickItem:function(e){return a(e)}})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.ready,n=e.loading,a=e.items,c=e.newItem,o=e.onCreateItem,s=D()({"page-content":!0,forms:!0,hollow:0===a.length});return r.a.createElement("div",{className:"page-wrapper"},!!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:s},r.a.createElement("div",{className:"form-header"},"Add new item"),r.a.createElement(oe,{item:c,submitText:"Add",onSubmit:function(){return o()}}),0!==a.length?a.map(this.renderItemsList):r.a.createElement("div",{className:"hollow-text"},"No items for now. ",r.a.createElement("br",null),"Create your first item")),r.a.createElement("div",{className:"page-footer"})),!!n&&r.a.createElement(se,null))}}]),t}(a.Component)),pe=Object(d.c)(function(e){return Object(h.a)({},e.itemsList)},function(e){return{getItemsList:function(t){return e(function(){var e=Object(w.a)(j.a.mark(function e(t){var n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"Items loading start"}),t({type:"Hide error message"}),e.prev=2,e.next=5,S();case 5:n=e.sent,e.next=13;break;case 8:return e.prev=8,e.t0=e.catch(2),t(P(e.t0)),t({type:"Show error message",payload:{text:"Items loading failed!"}}),e.abrupt("return",t({type:"Failure during items list load"}));case 13:return e.abrupt("return",t(ne(n)));case 14:case"end":return e.stop()}},e,null,[[2,8]])}));return function(t){return e.apply(this,arguments)}}())},onClickItem:function(t){return e(function(e){return function(){var t=Object(w.a)(j.a.mark(function t(n){return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(re(e)),console.log("item.id: ",e.id),t.abrupt("return",n(Object(te.d)("/item/".concat(e.id))));case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}(t))},onCreateItem:function(){return e(function(){var e=Object(w.a)(j.a.mark(function e(t,n){var a,r,c;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"Item creation start"}),a=n(),r=a.itemsList.newItem,c=a.itemsList.items,r.id=c.length,t({type:"Show success message",payload:{text:"New item created!"}}),e.abrupt("return",t(ae(r)));case 7:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}())}}})(ue(me)),de=(n(608),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.ready,n=e.loading,a=e.item,c=e.onGoBack;return r.a.createElement("div",{className:"page-wrapper"},!!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page-header"},r.a.createElement("button",{type:"button",className:"btn btn-back",onClick:function(){return c()}},"Back")),r.a.createElement("div",{className:"page-content forms"},r.a.createElement("div",{className:"title-wrap"},r.a.createElement("h1",{className:"page-title"},a.name)),r.a.createElement("div",{className:"item-info"},"Color: ",a.color))),!!n&&r.a.createElement(se,null))}}]),t}(a.Component)),he=Object(d.c)(function(e){return Object(h.a)({},e.itemInfo)},function(e){return{onGoBack:function(){return e(Object(te.d)("/items"))}}})(ue(de)),fe=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page-wrapper"},"Page 2")}}]),t}(a.Component),ge=Object(d.c)(function(e){return{}},function(e){return{}})(ue(fe)),be=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page-wrapper"},"Page 3")}}]),t}(a.Component),ve=Object(d.c)(function(e){return{}},function(e){return{}})(ue(be)),Ee=(n(609),ue(function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"not-found-layout"},r.a.createElement("div",{className:"not-found-wrap"},r.a.createElement("div",{className:"not-found-code"},"404"),r.a.createElement("div",{className:"not-found-text"},"Page is not found")))}}]),t}(a.Component))),Oe=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:Q}),r.a.createElement(J,null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/items",component:pe}),r.a.createElement(p.b,{path:"/item/:itemId",component:he}),r.a.createElement(p.b,{path:"/page2",component:ge}),r.a.createElement(p.b,{path:"/page3",component:ve}),r.a.createElement(p.b,{path:"*",component:Ee}))))}}]),t}(a.Component),je=Object(p.g)(Object(d.c)(function(e){return{}},function(e){return{}})(Oe));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var we,ye=n(313),ke=n(292),Ne=n(74),xe=n(314),Ce=n(56),Se=n(35),Ie=n(45),Te=n.n(Ie),Me={errorMsg:{show:!1,text:"",timeout:5e3},successMsg:{show:!1,text:"",timeout:5e3},warningMsg:{show:!1,text:"",timeout:5e3},cancelModal:{isOpen:!1}},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Show error message":return Te()(e,{errorMsg:{show:{$set:!0},text:{$set:t.payload.text}}});case"Hide error message":return Te()(e,{errorMsg:{show:{$set:!1},text:{$set:""}}});case"Show success message":return Te()(e,{successMsg:{show:{$set:!0},text:{$set:t.payload.text}}});case"Hide success message":return Te()(e,{successMsg:{show:{$set:!1},text:{$set:""}}});case"Hide warning message":return Te()(e,{warningMsg:{show:{$set:!1},text:{$set:""}}});case"Open cancel modal":return Te()(e,{cancelModal:{isOpen:{$set:!0}}});case"Close cancel modal":return Te()(e,{cancelModal:{isOpen:{$set:!1}}});case"Temp auth sign out":return Me;default:return e}},Le={isAuthorized:!0,userLogin:"",tokens:null,loading:!1,loginError:!1,serverError:!1},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Temp auth sign in":return{isAuthorized:!0};case"Temp auth sign out":return{isAuthorized:!1};case"Sign-in start":return Object(h.a)({},e,{loading:!0,isAuthorized:!1,userLogin:""});case"Sign-in success":return Object(h.a)({},e,{tokens:t.payload,loading:!1,isAuthorized:!0});case"Login failure":return Object(h.a)({},e,{tokens:null,loading:!1,isAuthorized:!1,loginError:!0});case"Sign-in failed":return Object(h.a)({},e,{tokens:null,loading:!1,isAuthorized:!1,serverError:!0});case"Sign-out called":return Object(h.a)({},e,{tokens:null,loading:!1,isAuthorized:!1,serverError:!1,loginError:!1});case"Clearing sign-in error":return Object(h.a)({},e,{loginError:!1,serverError:!1});default:return e}},$e={ready:!1,loading:!1,items:[],newItem:{name:"",color:""}},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Items loading start":return Object(h.a)({},e,{ready:!1,loading:!0,items:[]});case"Items list loading success":return Object(h.a)({},e,{ready:!0,loading:!1,items:t.payload.items.items});case"Failure during items list load":return Object(h.a)({},e,{ready:!1,loading:!1});case"Set item name":return Te()(e,{newItem:{name:{$set:t.payload.value}}});case"Set item color":return Te()(e,{newItem:{color:{$set:t.payload.value}}});case"Item created successfully":return Te()(e,{items:{$push:[t.payload.item]},newItem:{name:{$set:""},color:{$set:""}}});case"Temp auth sign out":return $e;default:return e}},Pe={ready:!1,loading:!1,item:{}},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Add item data":return Object(h.a)({},e,{ready:!0,loading:!1,item:t.payload.item});case"Temp auth sign out":return Pe;default:return e}},Ue=(n(611),n(612),Object(Se.b)()),Be=Object(Ce.createStore)((we=Ue,Object(Ce.combineReducers)({router:Object(Ne.b)(we),auth:Fe,ui:Ae,itemsList:ze,itemInfo:We})),Object(xe.composeWithDevTools)(Object(Ce.applyMiddleware)(ye.a,Object(ke.a)(Ue))));o.a.render(r.a.createElement(d.a,{store:Be},r.a.createElement(Ne.a,{history:Ue},r.a.createElement(je,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[325,1,2]]]);
//# sourceMappingURL=main.22ea7655.chunk.js.map