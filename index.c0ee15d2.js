var e,t,n,r,o,_,i,u={},l=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(e,t){for(var n in t)e[n]=t[n];return e}function s(e){var t=e.parentNode;t&&t.removeChild(e)}function p(t,n,r){var o,_,i,u={};for(i in n)"key"==i?o=n[i]:"ref"==i?_=n[i]:u[i]=n[i];if(arguments.length>2&&(u.children=arguments.length>3?e.call(arguments,2):r),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===u[i]&&(u[i]=t.defaultProps[i]);return f(t,u,o,_,null)}function f(e,r,o,_,i){var u={type:e,props:r,key:o,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==i?++n:i};return null==i&&null!=t.vnode&&t.vnode(u),u}function d(e){return e.children}function h(e,t){this.props=e,this.context=t}function v(e,t){if(null==t)return e.__?v(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?v(e):null}function y(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return y(e)}}function m(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!b.__r++||_!==t.debounceRendering)&&((_=t.debounceRendering)||o)(b)}function b(){for(var e;b.__r=r.length;)e=r.sort((function(e,t){return e.__v.__b-t.__v.__b})),r=[],e.some((function(e){var t,n,r,o,_,i;e.__d&&(_=(o=(t=e).__v).__e,(i=t.__P)&&(n=[],(r=a({},o)).__v=o.__v+1,O(i,o,r,t.__n,void 0!==i.ownerSVGElement,null!=o.__h?[_]:null,n,null==_?v(o):_,o.__h),$(n,o),o.__e!=_&&y(o)))}))}function g(e,t,n,r,o,_,i,c,a,s){var p,h,y,m,b,g,w,S=r&&r.__k||l,P=S.length;for(n.__k=[],p=0;p<t.length;p++)if(null!=(m=n.__k[p]=null==(m=t[p])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?f(null,m,null,null,m):Array.isArray(m)?f(d,{children:m},null,null,null):m.__b>0?f(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(y=S[p])||y&&m.key==y.key&&m.type===y.type)S[p]=void 0;else for(h=0;h<P;h++){if((y=S[h])&&m.key==y.key&&m.type===y.type){S[h]=void 0;break}y=null}O(e,m,y=y||u,o,_,i,c,a,s),b=m.__e,(h=m.ref)&&y.ref!=h&&(w||(w=[]),y.ref&&w.push(y.ref,null,m),w.push(h,m.__c||b,m)),null!=b?(null==g&&(g=b),"function"==typeof m.type&&m.__k===y.__k?m.__d=a=k(m,a,e):a=E(e,m,y,S,b,a),"function"==typeof n.type&&(n.__d=a)):a&&y.__e==a&&a.parentNode!=e&&(a=v(y))}for(n.__e=g,p=P;p--;)null!=S[p]&&("function"==typeof n.type&&null!=S[p].__e&&S[p].__e==n.__d&&(n.__d=v(r,p+1)),U(S[p],S[p]));if(w)for(p=0;p<w.length;p++)T(w[p],w[++p],w[++p])}function k(e,t,n){for(var r,o=e.__k,_=0;o&&_<o.length;_++)(r=o[_])&&(r.__=e,t="function"==typeof r.type?k(r,t,n):E(n,r,r,o,r.__e,t));return t}function w(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){w(e,t)})):t.push(e)),t}function E(e,t,n,r,o,_){var i,u,l;if(void 0!==t.__d)i=t.__d,t.__d=void 0;else if(null==n||o!=_||null==o.parentNode)e:if(null==_||_.parentNode!==e)e.appendChild(o),i=null;else{for(u=_,l=0;(u=u.nextSibling)&&l<r.length;l+=2)if(u==o)break e;e.insertBefore(o,_),i=_}return void 0!==i?i:o.nextSibling}function S(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||c.test(t)?n:n+"px"}function P(e,t,n,r,o){var _;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||S(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||S(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])_=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=n,n?r||e.addEventListener(t,_?x:C,_):e.removeEventListener(t,_?x:C,_);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function C(e){this.l[e.type+!1](t.event?t.event(e):e)}function x(e){this.l[e.type+!0](t.event?t.event(e):e)}function O(n,r,o,_,i,l,c,p,f){var y,m,b,k,w,E,S,C,x,O,$,T=r.type;if(void 0!==r.constructor)return null;null!=o.__h&&(f=o.__h,p=r.__e=o.__e,r.__h=null,l=[p]),(y=t.__b)&&y(r);try{e:if("function"==typeof T){if(C=r.props,x=(y=T.contextType)&&_[y.__c],O=y?x?x.props.value:y.__:_,o.__c?S=(m=r.__c=o.__c).__=m.__E:("prototype"in T&&T.prototype.render?r.__c=m=new T(C,O):(r.__c=m=new h(C,O),m.constructor=T,m.render=H),x&&x.sub(m),m.props=C,m.state||(m.state={}),m.context=O,m.__n=_,b=m.__d=!0,m.__h=[]),null==m.__s&&(m.__s=m.state),null!=T.getDerivedStateFromProps&&(m.__s==m.state&&(m.__s=a({},m.__s)),a(m.__s,T.getDerivedStateFromProps(C,m.__s))),k=m.props,w=m.state,b)null==T.getDerivedStateFromProps&&null!=m.componentWillMount&&m.componentWillMount(),null!=m.componentDidMount&&m.__h.push(m.componentDidMount);else{if(null==T.getDerivedStateFromProps&&C!==k&&null!=m.componentWillReceiveProps&&m.componentWillReceiveProps(C,O),!m.__e&&null!=m.shouldComponentUpdate&&!1===m.shouldComponentUpdate(C,m.__s,O)||r.__v===o.__v){m.props=C,m.state=m.__s,r.__v!==o.__v&&(m.__d=!1),m.__v=r,r.__e=o.__e,r.__k=o.__k,r.__k.forEach((function(e){e&&(e.__=r)})),m.__h.length&&c.push(m);break e}null!=m.componentWillUpdate&&m.componentWillUpdate(C,m.__s,O),null!=m.componentDidUpdate&&m.__h.push((function(){m.componentDidUpdate(k,w,E)}))}m.context=O,m.props=C,m.state=m.__s,(y=t.__r)&&y(r),m.__d=!1,m.__v=r,m.__P=n,y=m.render(m.props,m.state,m.context),m.state=m.__s,null!=m.getChildContext&&(_=a(a({},_),m.getChildContext())),b||null==m.getSnapshotBeforeUpdate||(E=m.getSnapshotBeforeUpdate(k,w)),$=null!=y&&y.type===d&&null==y.key?y.props.children:y,g(n,Array.isArray($)?$:[$],r,o,_,i,l,c,p,f),m.base=r.__e,r.__h=null,m.__h.length&&c.push(m),S&&(m.__E=m.__=null),m.__e=!1}else null==l&&r.__v===o.__v?(r.__k=o.__k,r.__e=o.__e):r.__e=function(t,n,r,o,_,i,l,c){var a,p,f,d=r.props,h=n.props,y=n.type,m=0;if("svg"===y&&(_=!0),null!=i)for(;m<i.length;m++)if((a=i[m])&&"localName"in a==!!y&&(y?a.localName===y:3===a.nodeType)){t=a,i[m]=null;break}if(null==t){if(null===y)return document.createTextNode(h);t=_?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,h.is&&h),i=null,c=!1}if(null===y)d===h||c&&t.data===h||(t.data=h);else{if(i=i&&e.call(t.childNodes),p=(d=r.props||u).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!c){if(null!=i)for(d={},m=0;m<t.attributes.length;m++)d[t.attributes[m].name]=t.attributes[m].value;(f||p)&&(f&&(p&&f.__html==p.__html||f.__html===t.innerHTML)||(t.innerHTML=f&&f.__html||""))}if(function(e,t,n,r,o){var _;for(_ in n)"children"===_||"key"===_||_ in t||P(e,_,null,n[_],r);for(_ in t)o&&"function"!=typeof t[_]||"children"===_||"key"===_||"value"===_||"checked"===_||n[_]===t[_]||P(e,_,t[_],n[_],r)}(t,h,d,_,c),f)n.__k=[];else if(m=n.props.children,g(t,Array.isArray(m)?m:[m],n,r,o,_&&"foreignObject"!==y,i,l,i?i[0]:r.__k&&v(r,0),c),null!=i)for(m=i.length;m--;)null!=i[m]&&s(i[m]);c||("value"in h&&void 0!==(m=h.value)&&(m!==d.value||m!==t.value||"progress"===y&&!m)&&P(t,"value",m,d.value,!1),"checked"in h&&void 0!==(m=h.checked)&&m!==t.checked&&P(t,"checked",m,d.checked,!1))}return t}(o.__e,r,o,_,i,l,c,f);(y=t.diffed)&&y(r)}catch(n){r.__v=null,(f||null!=l)&&(r.__e=p,r.__h=!!f,l[l.indexOf(p)]=null),t.__e(n,r,o)}}function $(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function T(e,n,r){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,r)}}function U(e,n,r){var o,_;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||T(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(_=0;_<o.length;_++)o[_]&&U(o[_],n,"function"!=typeof e.type);r||null==e.__e||s(e.__e),e.__e=e.__d=void 0}function H(e,t,n){return this.constructor(e,n)}function A(n,r,o){var _,i,l;t.__&&t.__(n,r),i=(_="function"==typeof o)?null:o&&o.__k||r.__k,l=[],O(r,n=(!_&&o||r).__k=p(d,null,[n]),i||u,u,void 0!==r.ownerSVGElement,!_&&o?[o]:i?null:r.firstChild?e.call(r.childNodes):null,l,!_&&o?o:i?i.__e:r.firstChild,_),$(l,n)}function L(e,t){A(e,t,L)}function N(t,n,r){var o,_,i,u=a({},t.props);for(i in n)"key"==i?o=n[i]:"ref"==i?_=n[i]:u[i]=n[i];return arguments.length>2&&(u.children=arguments.length>3?e.call(arguments,2):r),f(t.type,u,o||t.key,_||t.ref,null)}function j(e,t){var n={__c:t="__cC"+i++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(m)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}e=l.slice,t={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e}},n=0,h.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof e&&(e=e(a({},n),this.props)),e&&a(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),m(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),m(this))},h.prototype.render=d,r=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b.__r=0,i=0;var D=function(e,t,n,r){var o;t[0]=0;for(var _=1;_<t.length;_++){var i=t[_++],u=t[_]?(t[0]|=i?1:2,n[t[_++]]):t[++_];3===i?r[0]=u:4===i?r[1]=Object.assign(r[1]||{},u):5===i?(r[1]=r[1]||{})[t[++_]]=u:6===i?r[1][t[++_]]+=u+"":i?(o=e.apply(u,D(e,u,n,["",null])),r.push(o),u[0]?t[0]|=2:(t[_-2]=0,t[_]=o)):r.push(u)}return r},R=new Map;var M=function(e){var t=R.get(this);return t||(t=new Map,R.set(this,t)),(t=D(this,t.get(e)||(t.set(e,t=function(e){for(var t,n,r=1,o="",_="",i=[0],u=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,e,o):3===r&&(e||o)?(i.push(3,e,o),r=2):2===r&&"..."===o&&e?i.push(4,e,0):2===r&&o&&!e?i.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(i.push(r,0,o,n),r=6),e&&(i.push(r,e,0,n),r=6)),o=""},l=0;l<e.length;l++){l&&(1===r&&u(),u(l));for(var c=0;c<e[l].length;c++)t=e[l][c],1===r?"<"===t?(u(),i=[i],r=3):o+=t:4===r?"--"===o&&">"===t?(r=1,o=""):o=t+o[0]:_?t===_?_="":o+=t:'"'===t||"'"===t?_=t:">"===t?(u(),r=1):r&&("="===t?(r=5,n=o,o=""):"/"===t&&(r<5||">"===e[l][c+1])?(u(),3===r&&(i=i[0]),r=i,(i=i[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(u(),r=2):o+=t),3===r&&"!--"===o&&(r=4,i=i[0])}return u(),i}(e)),t),arguments,[])).length>1?t:t[0]}.bind(p);"undefined"!=typeof window&&window.__PREACT_DEVTOOLS__&&window.__PREACT_DEVTOOLS__.attachPreact("10.6.0",t,{Fragment:d,Component:h});var W={};function I(e){return e.type===d?"Fragment":"function"==typeof e.type?e.type.displayName||e.type.name:"string"==typeof e.type?e.type:"#text"}var F=[],z=[];function V(){return F.length>0?F[F.length-1]:null}var q=!1;function B(e){return"function"==typeof e.type&&e.type!=d}function Y(e){for(var t=[e],n=e;null!=n.__o;)t.push(n.__o),n=n.__o;return t.reduce((function(e,t){e+="  in "+I(t);var n=t.__source;return n?e+=" (at "+n.fileName+":"+n.lineNumber+")":q||(q=!0,console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")),e+"\n"}),"")}var J="function"==typeof WeakMap,K=h.prototype.setState;h.prototype.setState=function(e,t){return null==this.__v?null==this.state&&console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n'+Y(V())):null==this.__P&&console.warn('Can\'t call "this.setState" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n'+Y(this.__v)),K.call(this,e,t)};var X=h.prototype.forceUpdate;function G(e){var t=e.props,n=I(e),r="";for(var o in t)if(t.hasOwnProperty(o)&&"children"!==o){var _=t[o];"function"==typeof _&&(_="function "+(_.displayName||_.name)+"() {}"),_=Object(_)!==_||_.toString?_+"":Object.prototype.toString.call(_),r+=" "+o+"="+JSON.stringify(_)}var i=t.children;return"<"+n+r+(i&&i.length?">..</"+n+">":" />")}h.prototype.forceUpdate=function(e){return null==this.__v?console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n'+Y(V())):null==this.__P&&console.warn('Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n'+Y(this.__v)),X.call(this,e)},function(){!function(){var e=t.__b,n=t.diffed,r=t.__,o=t.vnode,_=t.__r;t.diffed=function(e){B(e)&&z.pop(),F.pop(),n&&n(e)},t.__b=function(t){B(t)&&F.push(t),e&&e(t)},t.__=function(e,t){z=[],r&&r(e,t)},t.vnode=function(e){e.__o=z.length>0?z[z.length-1]:null,o&&o(e)},t.__r=function(e){B(e)&&z.push(e),_&&_(e)}}();var e=!1,n=t.__b,r=t.diffed,o=t.vnode,_=t.__e,i=t.__,u=t.__h,l=J?{useEffect:new WeakMap,useLayoutEffect:new WeakMap,lazyPropTypes:new WeakMap}:null,c=[];t.__e=function(e,t,n){if(t&&t.__c&&"function"==typeof e.then){var r=e;e=new Error("Missing Suspense. The throwing component was: "+I(t));for(var o=t;o;o=o.__)if(o.__c&&o.__c.__c){e=r;break}if(e instanceof Error)throw e}try{_(e,t,n),"function"!=typeof e.then&&setTimeout((function(){throw e}))}catch(e){throw e}},t.__=function(e,t){if(!t)throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");var n;switch(t.nodeType){case 1:case 11:case 9:n=!0;break;default:n=!1}if(!n){var r=I(e);throw new Error("Expected a valid HTML node as a second argument to render.\tReceived "+t+" instead: render(<"+r+" />, "+t+");")}i&&i(e,t)},t.__b=function(t){var r=t.type,o=function e(t){return t?"function"==typeof t.type?e(t.__):t:{}}(t.__);if(e=!0,void 0===r)throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports"+G(t)+"\n\n"+Y(t));if(null!=r&&"object"==typeof r){if(void 0!==r.__k&&void 0!==r.__e)throw new Error("Invalid type passed to createElement(): "+r+"\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My"+I(t)+" = "+G(r)+";\n  let vnode = <My"+I(t)+" />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n"+Y(t));throw new Error("Invalid type passed to createElement(): "+(Array.isArray(r)?"array":r))}if("thead"!==r&&"tfoot"!==r&&"tbody"!==r||"table"===o.type?"tr"===r&&"thead"!==o.type&&"tfoot"!==o.type&&"tbody"!==o.type&&"table"!==o.type?console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent."+G(t)+"\n\n"+Y(t)):"td"===r&&"tr"!==o.type?console.error("Improper nesting of table. Your <td> should have a <tr> parent."+G(t)+"\n\n"+Y(t)):"th"===r&&"tr"!==o.type&&console.error("Improper nesting of table. Your <th> should have a <tr>."+G(t)+"\n\n"+Y(t)):console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent."+G(t)+"\n\n"+Y(t)),void 0!==t.ref&&"function"!=typeof t.ref&&"object"!=typeof t.ref&&!("$$typeof"in t))throw new Error('Component\'s "ref" property should be a function, or an object created by createRef(), but got ['+typeof t.ref+"] instead\n"+G(t)+"\n\n"+Y(t));if("string"==typeof t.type)for(var _ in t.props)if("o"===_[0]&&"n"===_[1]&&"function"!=typeof t.props[_]&&null!=t.props[_])throw new Error("Component's \""+_+'" property should be a function, but got ['+typeof t.props[_]+"] instead\n"+G(t)+"\n\n"+Y(t));if("function"==typeof t.type&&t.type.propTypes){if("Lazy"===t.type.displayName&&l&&!l.lazyPropTypes.has(t.type)){var i="PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try{var u=t.type();l.lazyPropTypes.set(t.type,!0),console.warn(i+"Component wrapped in lazy() is "+I(u))}catch(t){console.warn(i+"We will log the wrapped component's name once it is loaded.")}}var c=t.props;t.type.__f&&delete(c=function(e,t){for(var n in t)e[n]=t[n];return e}({},c)).ref,function(e,t,n,r,o){Object.keys(e).forEach((function(n){var _;try{_=e[n](t,n,r,"prop",null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){_=e}!_||_.message in W||(W[_.message]=!0,console.error("Failed prop type: "+_.message+(o&&"\n"+o()||"")))}))}(t.type.propTypes,c,0,I(t),(function(){return Y(t)}))}n&&n(t)},t.__h=function(t,n,r){if(!t||!e)throw new Error("Hook can only be invoked from render methods.");u&&u(t,n,r)};var a=function(e,t){return{get:function(){var n="get"+e+t;c&&c.indexOf(n)<0&&(c.push(n),console.warn("getting vnode."+e+" is deprecated, "+t))},set:function(){var n="set"+e+t;c&&c.indexOf(n)<0&&(c.push(n),console.warn("setting vnode."+e+" is not allowed, "+t))}}},s={nodeName:a("nodeName","use vnode.type"),attributes:a("attributes","use vnode.props"),children:a("children","use vnode.props.children")},p=Object.create({},s);t.vnode=function(e){var t=e.props;if(null!==e.type&&null!=t&&("__source"in t||"__self"in t)){var n=e.props={};for(var r in t){var _=t[r];"__source"===r?e.__source=_:"__self"===r?e.__self=_:n[r]=_}}e.__proto__=p,o&&o(e)},t.diffed=function(t){if(t.__k&&t.__k.forEach((function(e){if(e&&void 0===e.type){delete e.__,delete e.__b;var n=Object.keys(e).join(",");throw new Error("Objects are not valid as a child. Encountered an object with the keys {"+n+"}.\n\n"+Y(t))}})),e=!1,r&&r(t),null!=t.__k)for(var n=[],o=0;o<t.__k.length;o++){var _=t.__k[o];if(_&&null!=_.key){var i=_.key;if(-1!==n.indexOf(i)){console.error('Following component has two or more children with the same key attribute: "'+i+'". This may cause glitches and misbehavior in rendering process. Component: \n\n'+G(t)+"\n\n"+Y(t));break}n.push(i)}}}}();var Z,Q,ee,te=0,ne=[],re=t.__b,oe=t.__r,_e=t.diffed,ie=t.__c,ue=t.unmount;function le(e,n){t.__h&&t.__h(Q,e,te||n),te=0;var r=Q.__H||(Q.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function ce(e){return te=1,ae(ge,e)}function ae(e,t,n){var r=le(Z++,2);return r.t=e,r.__c||(r.__=[n?n(t):ge(void 0,t),function(e){var t=r.t(r.__[0],e);r.__[0]!==t&&(r.__=[t,r.__[1]],r.__c.setState({}))}],r.__c=Q),r.__}function se(e,n){var r=le(Z++,4);!t.__s&&be(r.__H,n)&&(r.__=e,r.__H=n,Q.__h.push(r))}function pe(e){return te=5,fe((function(){return{current:e}}),[])}function fe(e,t){var n=le(Z++,7);return be(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function de(e){var t=Q.context[e.__c],n=le(Z++,9);return n.c=e,t?(null==n.__&&(n.__=!0,t.sub(Q)),t.props.value):e.__}function he(){ne.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(ye),e.__H.__h.forEach(me),e.__H.__h=[]}catch(Q){e.__H.__h=[],t.__e(Q,e.__v)}})),ne=[]}t.__b=function(e){Q=null,re&&re(e)},t.__r=function(e){oe&&oe(e),Z=0;var t=(Q=e.__c).__H;t&&(t.__h.forEach(ye),t.__h.forEach(me),t.__h=[])},t.diffed=function(e){_e&&_e(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==ne.push(n)&&ee===t.requestAnimationFrame||((ee=t.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),ve&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);ve&&(t=requestAnimationFrame(n))})(he)),Q=null},t.__c=function(e,n){n.some((function(e){try{e.__h.forEach(ye),e.__h=e.__h.filter((function(e){return!e.__||me(e)}))}catch(ee){n.some((function(e){e.__h&&(e.__h=[])})),n=[],t.__e(ee,e.__v)}})),ie&&ie(e,n)},t.unmount=function(e){ue&&ue(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach(ye)}catch(e){t.__e(e,n.__v)}};var ve="function"==typeof requestAnimationFrame;function ye(e){var t=Q;"function"==typeof e.__c&&e.__c(),Q=t}function me(e){var t=Q;e.__c=e.__(),Q=t}function be(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function ge(e,t){return"function"==typeof t?t(e):t}let ke;const we=(e,t)=>{if(ke=void 0,t&&"click"===t.type){if(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)return e;const n=t.target.closest("a[href]");if(!n||n.origin!=location.origin||/^#/.test(n.getAttribute("href"))||!/^(_?self)?$/i.test(n.target))return e;ke=!0,t.preventDefault(),t=n.href.replace(location.origin,"")}else"string"==typeof t?ke=!0:t=location.pathname+location.search;return!0===ke?history.pushState(null,"",t):!1===ke&&history.replaceState(null,"",t),t};function Ee(e){const[t,n]=ae(we,e.url||location.pathname+location.search),r=!0===ke,o=fe((()=>{const e=new URL(t,location.origin),o=e.pathname.replace(/(.)\/$/g,"$1");return{url:t,path:o,query:Object.fromEntries(e.searchParams),route:n,wasPush:r}}),[t]);return se((()=>(addEventListener("click",n),addEventListener("popstate",n),()=>{removeEventListener("click",n),removeEventListener("popstate",n)})),[]),p(Ee.ctx.Provider,{value:o},e.children)}const Se=Promise.resolve();function Pe(e){const[t,n]=ae((e=>e+1),0),{url:r,query:o,wasPush:_,path:i}=$e(),{rest:u=i,params:l={}}=de(xe),c=pe(!1),a=pe(i),s=pe(0),f=pe(),d=pe(),h=pe(),v=pe(!1),y=pe();y.current=!1,f.current=fe((()=>{let t,n,r;return this.__v&&this.__v.__k&&this.__v.__k.reverse(),s.current++,d.current=f.current,w(e.children).some((e=>{if(((e,t,n)=>{e=e.split("/").filter(Boolean),t=(t||"").split("/").filter(Boolean);for(let r,o,_=0;_<Math.max(e.length,t.length);_++){let[,i,u,l]=(t[_]||"").match(/^(:?)(.*?)([+*?]?)$/);if(r=e[_],i||u!=r){if(!i&&r&&"*"==l){n.rest="/"+e.slice(_).map(decodeURIComponent).join("/");break}if(!i||!r&&"?"!=l&&"*"!=l)return;if(o="+"==l||"*"==l,o?r=e.slice(_).map(decodeURIComponent).join("/"):r&&(r=decodeURIComponent(r)),n.params[u]=r,u in n||(n[u]=r),o)break}}return n})(u,e.props.path,r={path:u,query:o,params:l,rest:""}))return t=N(e,r);e.props.default&&(n=N(e,r))})),p(xe.Provider,{value:r},t||n)}),[r]);const m=d.current;return d.current=null,this.__c=t=>{y.current=!0,d.current=m,e.onLoadStart&&e.onLoadStart(r),c.current=!0;let o=s.current;t.then((()=>{o===s.current&&(d.current=null,Se.then(n))}))},se((()=>{const t=this.__v&&this.__v.__e;y.current?v.current||h.current||(h.current=t):(!v.current&&h.current&&(h.current!==t&&h.current.remove(),h.current=null),v.current=!0,a.current!==i&&(_&&scrollTo(0,0),e.onLoadEnd&&c.current&&e.onLoadEnd(r),e.onRouteChange&&e.onRouteChange(r),c.current=!1,a.current=i))}),[i,_,t]),[p(Ce,{r:f}),p(Ce,{r:d})]}const Ce=({r:e})=>e.current;Pe.Provider=Ee,Ee.ctx=j({});const xe=j({}),Oe=e=>p(e.component,e),$e=()=>de(Ee.ctx);function Te(e){let t,n;return r=>{const[,o]=ce(0),_=pe(n);if(t||(t=e().then((e=>n=e&&e.default||e))),void 0!==n)return p(n,r);throw _.current||(_.current=t.then((()=>o(1)))),t}}const Ue=t.__e;function He(e){return this.__c=Ae,this.componentDidCatch=e.onError,e.children}function Ae(e){e.then((()=>this.forceUpdate()))}let Le;function Ne(e){if("undefined"==typeof document)wmr.ssr.head.elements.add({type:"link",props:{rel:"stylesheet",href:e}});else{if(document.querySelector('link[rel=stylesheet][href="'+e+'"]'))return;const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}}t.__e=(e,t,n)=>{if(e&&e.then){let r=t;for(;r=r.__;)if(r.__c&&r.__c.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),t.__k||(t.__k=[]),r.__c.__c(e,t)}Ue&&Ue(e,t,n)},null;const je="header_n5ls8w",De="nav_n5ls8w",Re="HeaderCounter_n5ls8w",Me=({value:e=0,title:t=""})=>M`<output style=${{padding:10}}>${t}: ${e}</output>`;function We(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var r in t)if("__source"!==r&&e[r]!==t[r])return!0;return!1}function Ie(e){this.props=e}(Ie.prototype=new h).isPureReactComponent=!0,Ie.prototype.shouldComponentUpdate=function(e,t){return We(this.props,e)||We(this.state,t)};var Fe=t.__b;t.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Fe&&Fe(e)};var ze=t.__e;t.__e=function(e,t,n){if(e.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t);ze(e,t,n)};var Ve=t.unmount;function qe(){this.__u=0,this.t=null,this.__b=null}function Be(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function Ye(){this.u=null,this.o=null}t.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&!0===e.__h&&(e.type=null),Ve&&Ve(e)},(qe.prototype=new h).__c=function(e,t){var n=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(n);var o=Be(r.__v),_=!1,i=function(){_||(_=!0,n.__R=null,o?o(u):u())};n.__R=i;var u=function(){if(!--r.__u){if(r.state.__e){var e=r.state.__e;r.__v.__k[0]=function e(t,n,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map((function(t){return e(t,n,r)})),t.__c&&t.__c.__P===n&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(e,e.__c.__P,e.__c.__O)}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate()}},l=!0===t.__h;r.__u++||l||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(i,i)},qe.prototype.componentWillUnmount=function(){this.t=[]},qe.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function e(t,n,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),t.__c.__H=null),null!=(t=function(e,t){for(var n in t)e[n]=t[n];return e}({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=n),t.__c=null),t.__k=t.__k&&t.__k.map((function(t){return e(t,n,r)}))),t}(this.__b,n,r.__O=r.__P)}this.__b=null}var o=t.__e&&p(d,null,e.fallback);return o&&(o.__h=null),[p(d,null,t.__e?null:e.children),o]};var Je=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(Ye.prototype=new h).__e=function(e){var t=this,n=Be(t.__v),r=t.o.get(e);return r[0]++,function(o){var _=function(){t.props.revealOrder?(r.push(o),Je(t,e,r)):o()};n?n(_):_()}},Ye.prototype.render=function(e){this.u=null,this.o=new Map;var t=w(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Ye.prototype.componentDidUpdate=Ye.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(t,n){Je(e,n,t)}))};var Ke="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,Xe=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ge="undefined"!=typeof document,Ze=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(e)};h.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(h.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})}));var Qe=t.event;function et(){}function tt(){return this.cancelBubble}function nt(){return this.defaultPrevented}t.event=function(e){return Qe&&(e=Qe(e)),e.persist=et,e.isPropagationStopped=tt,e.isDefaultPrevented=nt,e.nativeEvent=e};var rt={configurable:!0,get:function(){return this.class}},ot=t.vnode;t.vnode=function(e){var t=e.type,n=e.props,r=n;if("string"==typeof t){var o=-1===t.indexOf("-");for(var _ in r={},n){var i=n[_];Ge&&"children"===_&&"noscript"===t||"value"===_&&"defaultValue"in n&&null==i||("defaultValue"===_&&"value"in n&&null==n.value?_="value":"download"===_&&!0===i?i="":/ondoubleclick/i.test(_)?_="ondblclick":/^onchange(textarea|input)/i.test(_+t)&&!Ze(n.type)?_="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(_)?_=_.toLowerCase():o&&Xe.test(_)?_=_.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===i&&(i=void 0),r[_]=i)}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=w(n.children).forEach((function(e){e.props.selected=-1!=r.value.indexOf(e.props.value)}))),"select"==t&&null!=r.defaultValue&&(r.value=w(n.children).forEach((function(e){e.props.selected=r.multiple?-1!=r.defaultValue.indexOf(e.props.value):r.defaultValue==e.props.value}))),e.props=r,n.class!=n.className&&(rt.enumerable="className"in n,null!=n.className&&(r.class=n.className),Object.defineProperty(r,"className",rt))}e.$$typeof=Ke,ot&&ot(e)};var _t=t.__r;function it(e){let t;const n=new Set,r=(e,r)=>{const o="function"==typeof e?e(t):e;if(o!==t){const e=t;t=r?o:Object.assign({},t,o),n.forEach((n=>n(t,e)))}},o=()=>t,_={setState:r,getState:o,subscribe:(e,r,_)=>r||_?((e,r=o,_=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let i=r(t);function u(){const n=r(t);if(!_(i,n)){const t=i;e(i=n,t)}}return n.add(u),()=>n.delete(u)})(e,r,_):(n.add(e),()=>n.delete(e)),destroy:()=>n.clear()};return t=e(r,o,_),_}t.__r=function(e){_t&&_t(e)};const ut="undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent)?function(e,n){var r=le(Z++,3);!t.__s&&be(r.__H,n)&&(r.__=e,r.__H=n,Q.__H.__h.push(r))}:se;function lt(e){const n="function"==typeof e?it(e):e,r=(e=n.getState,r=Object.is)=>{const[,o]=ae((e=>e+1),0),_=n.getState(),i=pe(_),u=pe(e),l=pe(r),c=pe(!1),a=pe();let s;void 0===a.current&&(a.current=e(_));let p=!1;(i.current!==_||u.current!==e||l.current!==r||c.current)&&(s=e(_),p=!r(a.current,s)),ut((()=>{p&&(a.current=s),i.current=_,u.current=e,l.current=r,c.current=!1}));const f=pe(_);ut((()=>{const e=()=>{try{const e=n.getState(),t=u.current(e);l.current(a.current,t)||(i.current=e,a.current=t,o())}catch(e){c.current=!0,o()}},t=n.subscribe(e);return n.getState()!==f.current&&e(),t}),[]);const d=p?s:a.current;return function(e,n){t.useDebugValue&&t.useDebugValue(n?n(e):e)}(d),d};return Object.assign(r,n),r[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const e=[r,n];return{next(){const t=e.length<=0;return{value:e.shift(),done:t}}}},r}const ct=lt((e=>({count:0,increment:()=>e((e=>({count:e.count+1}))),decrement:()=>e((e=>({count:0==e.count?0:e.count-1})))}))),at=()=>{const e=ct((e=>e.count));return M`<div class=${Re}><${Me} value=${e} title="Count"/></div>`},st=[{name:"Home",path:"/"},{name:"About",path:"/about"},{name:"Movies",path:"/movies"},{name:"Error",path:"/error"}];function pt(){const{url:e}=$e();return M`<header class=${je}><nav class=${De}>${st.map((e=>M`<a href=${e.path} key=${e.name}>${e.name}</a>`))}</nav><${at}/><label> URL: <input readonly value=${e} ref=${e=>e&&(e.size=e.value.length)}/></label></header>`}const ft=()=>M`<section><h1>404: Not Found</h1><p>It's gone :(</p></section>`,dt=Te((()=>import("./chunks/index.d4062f2d.js"))),ht=Te((()=>import("./chunks/index.4992d639.js"))),vt=Te((()=>import("./chunks/index.b1a995b3.js"))),yt=()=>M`<${He}><${Pe}><${Oe} path="/" component=${dt}/><${Oe} path="/about" component=${ht}/><${Oe} path="/movies" component=${vt}/><${Oe} default component=${ft}/><//><//>`;function mt(){return M`<${Ee}><div class="app"><${pt}/><${yt}/></div><//>`}async function bt(e){return await(t=M`<${mt} ...${e}/>`,import("./chunks/prerender.58f1f6ea.js").then((e=>e.default(t,n))));var t,n}!function(e,t){if("undefined"==typeof window)return;let n=document.querySelector("script[type=isodata]");t=t||n&&n.parentNode||document.body,!Le&&n?L(e,t):A(e,t),Le=!0}(M`<${mt}/>`);export{mt as App,N as B,Me as O,lt as a,ct as c,d,t as l,M as m,bt as prerender,Ne as s,p as v};