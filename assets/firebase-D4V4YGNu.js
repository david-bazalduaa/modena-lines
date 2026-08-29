var yp=Object.defineProperty;var Tp=(r,e,t)=>e in r?yp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var M=(r,e,t)=>Tp(r,typeof e!="symbol"?e+"":e,t);const Ap=()=>{};var Pc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Rp=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],B=r[t++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|B&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},kh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,B=o?r[s+1]:0,u=s+2<r.length,c=u?r[s+2]:0,C=i>>2,f=(i&3)<<4|B>>4;let m=(B&15)<<2|c>>6,T=c&63;u||(T=64,o||(m=64)),n.push(t[C],t[f],t[m],t[T])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Lh(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Rp(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],B=s<r.length?t[r.charAt(s)]:0;++s;const c=s<r.length?t[r.charAt(s)]:64;++s;const f=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||B==null||c==null||f==null)throw new vp;const m=i<<2|B>>4;if(n.push(m),c!==64){const T=B<<4&240|c>>2;if(n.push(T),f!==64){const P=c<<6&192|f;n.push(P)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class vp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pp=function(r){const e=Lh(r);return kh.encodeByteArray(e,!0)},Yi=function(r){return Pp(r).replace(/\./g,"")},Vh=function(r){try{return kh.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=()=>Sp().__FIREBASE_DEFAULTS__,Op=()=>{if(typeof process>"u"||typeof Pc>"u")return;const r=Pc.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Np=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Vh(r[1]);return e&&JSON.parse(e)},Io=()=>{try{return Ap()||bp()||Op()||Np()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},xh=r=>{var e,t;return(t=(e=Io())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},Fp=r=>{const e=xh(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},Mh=()=>{var r;return(r=Io())==null?void 0:r.config},Gh=r=>{var e;return(e=Io())==null?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Yi(JSON.stringify(t)),Yi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe())}function Vp(){var e;const r=(e=Io())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fB(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Mp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gp(){const r=Qe();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Hp(){return!Vp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dB(){try{return typeof indexedDB=="object"}catch{return!1}}function pB(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function Uh(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="FirebaseError";class Pt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Up,Object.setPrototypeOf(this,Pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ar.prototype.create)}}class ar{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Jp(i,n):"Error",B=`${this.serviceName}: ${o} (${s}).`;return new Pt(s,B,n)}}function Jp(r,e){try{let t=0,n="";for(;t<r.length;){const s=r.indexOf("{$",t);if(s===-1){n+=r.substring(t);break}const i=r.indexOf("}",s+2);if(i===-1){n+=r.substring(t);break}const o=r.substring(s+2,i),B=e[o];n+=r.substring(t,s)+(B!=null?String(B):`<${o}?>`),t=i+1}return n}catch{return r}}function jp(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function An(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(Sc(i)&&Sc(o)){if(!An(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Sc(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function hs(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Cs(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function qp(r,e){const t=new Kp(r,e);return t.subscribe.bind(t)}class Kp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");zp(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=ma),s.error===void 0&&(s.error=ma),s.complete===void 0&&(s.complete=ma);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zp(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function ma(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=1e3,Wp=2,$p=14400*1e3,Yp=.5;function bc(r,e=Qp,t=Wp){const n=e*Math.pow(t,r),s=Math.round(Yp*n*(Math.random()-.5)*2);return Math.min($p,n+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(r){return r&&r._delegate?r._delegate:r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Jh(r){return(await fetch(r,{credentials:"include"})).ok}class Rt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Hh;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eg(e))try{this.getOrInitializeService({instanceIdentifier:jn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jn){return this.instances.has(e)}getOptions(e=jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const B=this.normalizeInstanceIdentifier(i);n===B&&o.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Zp(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=jn){return this.component?this.component.multipleInstances?e:jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zp(r){return r===jn?void 0:r}function eg(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ae||(ae={}));const ng={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},rg=ae.INFO,sg={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},ig=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=sg[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wo{constructor(e){this.name=e,this._logLevel=rg,this._logHandler=ig,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ng[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const og=(r,e)=>e.some(t=>r instanceof t);let Oc,Nc;function ag(){return Oc||(Oc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bg(){return Nc||(Nc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jh=new WeakMap,Ma=new WeakMap,qh=new WeakMap,Ea=new WeakMap,gB=new WeakMap;function ug(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(Dn(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&jh.set(t,r)}).catch(()=>{}),gB.set(e,r),e}function cg(r){if(Ma.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});Ma.set(r,e)}let Ga={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Ma.get(r);if(e==="objectStoreNames")return r.objectStoreNames||qh.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Dn(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function lg(r){Ga=r(Ga)}function hg(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(_a(this),e,...t);return qh.set(n,e.sort?e.sort():[e]),Dn(n)}:Bg().includes(r)?function(...e){return r.apply(_a(this),e),Dn(jh.get(this))}:function(...e){return Dn(r.apply(_a(this),e))}}function Cg(r){return typeof r=="function"?hg(r):(r instanceof IDBTransaction&&cg(r),og(r,ag())?new Proxy(r,Ga):r)}function Dn(r){if(r instanceof IDBRequest)return ug(r);if(Ea.has(r))return Ea.get(r);const e=Cg(r);return e!==r&&(Ea.set(r,e),gB.set(e,r)),e}const _a=r=>gB.get(r);function Kh(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),B=Dn(o);return n&&o.addEventListener("upgradeneeded",u=>{n(Dn(o.result),u.oldVersion,u.newVersion,Dn(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),B.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),B}const fg=["get","getKey","getAll","getAllKeys","count"],dg=["put","add","delete","clear"],Da=new Map;function Fc(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Da.get(e))return Da.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=dg.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||fg.includes(t)))return;const i=async function(o,...B){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return n&&(c=c.index(B.shift())),(await Promise.all([c[t](...B),s&&u.done]))[0]};return Da.set(e,i),i}lg(r=>({...r,get:(e,t,n)=>Fc(e,t)||r.get(e,t,n),has:(e,t)=>!!Fc(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(gg(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function gg(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ha="@firebase/app",Lc="0.16.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new wo("@firebase/app"),mg="@firebase/app-compat",Eg="@firebase/analytics-compat",_g="@firebase/analytics",Dg="@firebase/app-check-compat",Ig="@firebase/app-check",wg="@firebase/auth",yg="@firebase/auth-compat",Tg="@firebase/database",Ag="@firebase/data-connect",Rg="@firebase/database-compat",vg="@firebase/functions",Pg="@firebase/functions-compat",Sg="@firebase/installations",bg="@firebase/installations-compat",Og="@firebase/messaging",Ng="@firebase/messaging-compat",Fg="@firebase/performance",Lg="@firebase/performance-compat",kg="@firebase/remote-config",Vg="@firebase/remote-config-compat",xg="@firebase/storage",Mg="@firebase/storage-compat",Gg="@firebase/firestore",Hg="@firebase/ai",Ug="@firebase/firestore-compat",Jg="firebase",jg="12.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua="[DEFAULT]",qg={[Ha]:"fire-core",[mg]:"fire-core-compat",[_g]:"fire-analytics",[Eg]:"fire-analytics-compat",[Ig]:"fire-app-check",[Dg]:"fire-app-check-compat",[wg]:"fire-auth",[yg]:"fire-auth-compat",[Tg]:"fire-rtdb",[Ag]:"fire-data-connect",[Rg]:"fire-rtdb-compat",[vg]:"fire-fn",[Pg]:"fire-fn-compat",[Sg]:"fire-iid",[bg]:"fire-iid-compat",[Og]:"fire-fcm",[Ng]:"fire-fcm-compat",[Fg]:"fire-perf",[Lg]:"fire-perf-compat",[kg]:"fire-rc",[Vg]:"fire-rc-compat",[xg]:"fire-gcs",[Mg]:"fire-gcs-compat",[Gg]:"fire-fst",[Ug]:"fire-fst-compat",[Hg]:"fire-vertex","fire-js":"fire-js",[Jg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=new Map,Kg=new Map,Ja=new Map;function kc(r,e){try{r.container.addComponent(e)}catch(t){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Mt(r){const e=r.name;if(Ja.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;Ja.set(e,r);for(const t of Rs.values())kc(t,r);for(const t of Kg.values())kc(t,r);return!0}function Br(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Ct(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qt=new ar("app","Firebase",zg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=jg;function zh(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:Ua,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw qt.create("bad-app-name",{appName:String(s)});if(t||(t=Mh()),!t)throw qt.create("no-options");const i=Rs.get(s);if(i)if(An(t,i.options)){if(An(n,i.config))return i;throw qt.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(n)})}else throw qt.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new tg(s);for(const u of Ja.values())o.addComponent(u);const B=new Qg(t,n,o);return Rs.set(s,B),B}function yo(r=Ua){const e=Rs.get(r);if(!e&&r===Ua&&Mh())return zh();if(!e)throw qt.create("no-app",{appName:r});return e}function Wg(){return Array.from(Rs.values())}function Dt(r,e,t){let n=qg[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${n}" with version "${e}":`];s&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(o.join(" "));return}Mt(new Rt(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g="firebase-heartbeat-database",Yg=1,vs="firebase-heartbeat-store";let Ia=null;function Qh(){return Ia||(Ia=Kh($g,Yg,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(vs)}catch(t){console.warn(t)}}}}).catch(r=>{throw qt.create("idb-open",{originalErrorMessage:r.message})})),Ia}async function Xg(r){try{const t=(await Qh()).transaction(vs),n=await t.objectStore(vs).get(Wh(r));return await t.done,n}catch(e){if(e instanceof Pt)Xt.warn(e.message);else{const t=qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(t.message)}}}async function Vc(r,e){try{const n=(await Qh()).transaction(vs,"readwrite");await n.objectStore(vs).put(e,Wh(r)),await n.done}catch(t){if(t instanceof Pt)Xt.warn(t.message);else{const n=qt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Xt.warn(n.message)}}}function Wh(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=1024,em=30;class tm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rm(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=xc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>em){const o=sm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Xt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xc(),{heartbeatsToSend:n,unsentEntries:s}=nm(this._heartbeatsCache.heartbeats),i=Yi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Xt.warn(t),""}}}function xc(){return new Date().toISOString().substring(0,10)}function nm(r,e=Zg){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Mc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Mc(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class rm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dB()?pB().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Xg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Vc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Vc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Mc(r){return Yi(JSON.stringify({version:2,heartbeats:r})).length}function sm(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(r){Mt(new Rt("platform-logger",e=>new pg(e),"PRIVATE")),Mt(new Rt("heartbeat",e=>new tm(e),"PRIVATE")),Dt(Ha,Lc,r),Dt(Ha,Lc,"esm2020"),Dt("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */im("");var Gc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var In,$h;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,E){function D(){}D.prototype=E.prototype,A.F=E.prototype,A.prototype=new D,A.prototype.constructor=A,A.D=function(R,y,S){for(var _=Array(arguments.length-2),et=2;et<arguments.length;et++)_[et-2]=arguments[et];return E.prototype[y].apply(R,_)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,E,D){D||(D=0);const R=Array(16);if(typeof E=="string")for(var y=0;y<16;++y)R[y]=E.charCodeAt(D++)|E.charCodeAt(D++)<<8|E.charCodeAt(D++)<<16|E.charCodeAt(D++)<<24;else for(y=0;y<16;++y)R[y]=E[D++]|E[D++]<<8|E[D++]<<16|E[D++]<<24;E=A.g[0],D=A.g[1],y=A.g[2];let S=A.g[3],_;_=E+(S^D&(y^S))+R[0]+3614090360&4294967295,E=D+(_<<7&4294967295|_>>>25),_=S+(y^E&(D^y))+R[1]+3905402710&4294967295,S=E+(_<<12&4294967295|_>>>20),_=y+(D^S&(E^D))+R[2]+606105819&4294967295,y=S+(_<<17&4294967295|_>>>15),_=D+(E^y&(S^E))+R[3]+3250441966&4294967295,D=y+(_<<22&4294967295|_>>>10),_=E+(S^D&(y^S))+R[4]+4118548399&4294967295,E=D+(_<<7&4294967295|_>>>25),_=S+(y^E&(D^y))+R[5]+1200080426&4294967295,S=E+(_<<12&4294967295|_>>>20),_=y+(D^S&(E^D))+R[6]+2821735955&4294967295,y=S+(_<<17&4294967295|_>>>15),_=D+(E^y&(S^E))+R[7]+4249261313&4294967295,D=y+(_<<22&4294967295|_>>>10),_=E+(S^D&(y^S))+R[8]+1770035416&4294967295,E=D+(_<<7&4294967295|_>>>25),_=S+(y^E&(D^y))+R[9]+2336552879&4294967295,S=E+(_<<12&4294967295|_>>>20),_=y+(D^S&(E^D))+R[10]+4294925233&4294967295,y=S+(_<<17&4294967295|_>>>15),_=D+(E^y&(S^E))+R[11]+2304563134&4294967295,D=y+(_<<22&4294967295|_>>>10),_=E+(S^D&(y^S))+R[12]+1804603682&4294967295,E=D+(_<<7&4294967295|_>>>25),_=S+(y^E&(D^y))+R[13]+4254626195&4294967295,S=E+(_<<12&4294967295|_>>>20),_=y+(D^S&(E^D))+R[14]+2792965006&4294967295,y=S+(_<<17&4294967295|_>>>15),_=D+(E^y&(S^E))+R[15]+1236535329&4294967295,D=y+(_<<22&4294967295|_>>>10),_=E+(y^S&(D^y))+R[1]+4129170786&4294967295,E=D+(_<<5&4294967295|_>>>27),_=S+(D^y&(E^D))+R[6]+3225465664&4294967295,S=E+(_<<9&4294967295|_>>>23),_=y+(E^D&(S^E))+R[11]+643717713&4294967295,y=S+(_<<14&4294967295|_>>>18),_=D+(S^E&(y^S))+R[0]+3921069994&4294967295,D=y+(_<<20&4294967295|_>>>12),_=E+(y^S&(D^y))+R[5]+3593408605&4294967295,E=D+(_<<5&4294967295|_>>>27),_=S+(D^y&(E^D))+R[10]+38016083&4294967295,S=E+(_<<9&4294967295|_>>>23),_=y+(E^D&(S^E))+R[15]+3634488961&4294967295,y=S+(_<<14&4294967295|_>>>18),_=D+(S^E&(y^S))+R[4]+3889429448&4294967295,D=y+(_<<20&4294967295|_>>>12),_=E+(y^S&(D^y))+R[9]+568446438&4294967295,E=D+(_<<5&4294967295|_>>>27),_=S+(D^y&(E^D))+R[14]+3275163606&4294967295,S=E+(_<<9&4294967295|_>>>23),_=y+(E^D&(S^E))+R[3]+4107603335&4294967295,y=S+(_<<14&4294967295|_>>>18),_=D+(S^E&(y^S))+R[8]+1163531501&4294967295,D=y+(_<<20&4294967295|_>>>12),_=E+(y^S&(D^y))+R[13]+2850285829&4294967295,E=D+(_<<5&4294967295|_>>>27),_=S+(D^y&(E^D))+R[2]+4243563512&4294967295,S=E+(_<<9&4294967295|_>>>23),_=y+(E^D&(S^E))+R[7]+1735328473&4294967295,y=S+(_<<14&4294967295|_>>>18),_=D+(S^E&(y^S))+R[12]+2368359562&4294967295,D=y+(_<<20&4294967295|_>>>12),_=E+(D^y^S)+R[5]+4294588738&4294967295,E=D+(_<<4&4294967295|_>>>28),_=S+(E^D^y)+R[8]+2272392833&4294967295,S=E+(_<<11&4294967295|_>>>21),_=y+(S^E^D)+R[11]+1839030562&4294967295,y=S+(_<<16&4294967295|_>>>16),_=D+(y^S^E)+R[14]+4259657740&4294967295,D=y+(_<<23&4294967295|_>>>9),_=E+(D^y^S)+R[1]+2763975236&4294967295,E=D+(_<<4&4294967295|_>>>28),_=S+(E^D^y)+R[4]+1272893353&4294967295,S=E+(_<<11&4294967295|_>>>21),_=y+(S^E^D)+R[7]+4139469664&4294967295,y=S+(_<<16&4294967295|_>>>16),_=D+(y^S^E)+R[10]+3200236656&4294967295,D=y+(_<<23&4294967295|_>>>9),_=E+(D^y^S)+R[13]+681279174&4294967295,E=D+(_<<4&4294967295|_>>>28),_=S+(E^D^y)+R[0]+3936430074&4294967295,S=E+(_<<11&4294967295|_>>>21),_=y+(S^E^D)+R[3]+3572445317&4294967295,y=S+(_<<16&4294967295|_>>>16),_=D+(y^S^E)+R[6]+76029189&4294967295,D=y+(_<<23&4294967295|_>>>9),_=E+(D^y^S)+R[9]+3654602809&4294967295,E=D+(_<<4&4294967295|_>>>28),_=S+(E^D^y)+R[12]+3873151461&4294967295,S=E+(_<<11&4294967295|_>>>21),_=y+(S^E^D)+R[15]+530742520&4294967295,y=S+(_<<16&4294967295|_>>>16),_=D+(y^S^E)+R[2]+3299628645&4294967295,D=y+(_<<23&4294967295|_>>>9),_=E+(y^(D|~S))+R[0]+4096336452&4294967295,E=D+(_<<6&4294967295|_>>>26),_=S+(D^(E|~y))+R[7]+1126891415&4294967295,S=E+(_<<10&4294967295|_>>>22),_=y+(E^(S|~D))+R[14]+2878612391&4294967295,y=S+(_<<15&4294967295|_>>>17),_=D+(S^(y|~E))+R[5]+4237533241&4294967295,D=y+(_<<21&4294967295|_>>>11),_=E+(y^(D|~S))+R[12]+1700485571&4294967295,E=D+(_<<6&4294967295|_>>>26),_=S+(D^(E|~y))+R[3]+2399980690&4294967295,S=E+(_<<10&4294967295|_>>>22),_=y+(E^(S|~D))+R[10]+4293915773&4294967295,y=S+(_<<15&4294967295|_>>>17),_=D+(S^(y|~E))+R[1]+2240044497&4294967295,D=y+(_<<21&4294967295|_>>>11),_=E+(y^(D|~S))+R[8]+1873313359&4294967295,E=D+(_<<6&4294967295|_>>>26),_=S+(D^(E|~y))+R[15]+4264355552&4294967295,S=E+(_<<10&4294967295|_>>>22),_=y+(E^(S|~D))+R[6]+2734768916&4294967295,y=S+(_<<15&4294967295|_>>>17),_=D+(S^(y|~E))+R[13]+1309151649&4294967295,D=y+(_<<21&4294967295|_>>>11),_=E+(y^(D|~S))+R[4]+4149444226&4294967295,E=D+(_<<6&4294967295|_>>>26),_=S+(D^(E|~y))+R[11]+3174756917&4294967295,S=E+(_<<10&4294967295|_>>>22),_=y+(E^(S|~D))+R[2]+718787259&4294967295,y=S+(_<<15&4294967295|_>>>17),_=D+(S^(y|~E))+R[9]+3951481745&4294967295,A.g[0]=A.g[0]+E&4294967295,A.g[1]=A.g[1]+(y+(_<<21&4294967295|_>>>11))&4294967295,A.g[2]=A.g[2]+y&4294967295,A.g[3]=A.g[3]+S&4294967295}n.prototype.v=function(A,E){E===void 0&&(E=A.length);const D=E-this.blockSize,R=this.C;let y=this.h,S=0;for(;S<E;){if(y==0)for(;S<=D;)s(this,A,S),S+=this.blockSize;if(typeof A=="string"){for(;S<E;)if(R[y++]=A.charCodeAt(S++),y==this.blockSize){s(this,R),y=0;break}}else for(;S<E;)if(R[y++]=A[S++],y==this.blockSize){s(this,R),y=0;break}}this.h=y,this.o+=E},n.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var E=1;E<A.length-8;++E)A[E]=0;E=this.o*8;for(var D=A.length-8;D<A.length;++D)A[D]=E&255,E/=256;for(this.v(A),A=Array(16),E=0,D=0;D<4;++D)for(let R=0;R<32;R+=8)A[E++]=this.g[D]>>>R&255;return A};function i(A,E){var D=B;return Object.prototype.hasOwnProperty.call(D,A)?D[A]:D[A]=E(A)}function o(A,E){this.h=E;const D=[];let R=!0;for(let y=A.length-1;y>=0;y--){const S=A[y]|0;R&&S==E||(D[y]=S,R=!1)}this.g=D}var B={};function u(A){return-128<=A&&A<128?i(A,function(E){return new o([E|0],E<0?-1:0)}):new o([A|0],A<0?-1:0)}function c(A){if(isNaN(A)||!isFinite(A))return f;if(A<0)return U(c(-A));const E=[];let D=1;for(let R=0;A>=D;R++)E[R]=A/D|0,D*=4294967296;return new o(E,0)}function C(A,E){if(A.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(A.charAt(0)=="-")return U(C(A.substring(1),E));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const D=c(Math.pow(E,8));let R=f;for(let S=0;S<A.length;S+=8){var y=Math.min(8,A.length-S);const _=parseInt(A.substring(S,S+y),E);y<8?(y=c(Math.pow(E,y)),R=R.j(y).add(c(_))):(R=R.j(D),R=R.add(c(_)))}return R}var f=u(0),m=u(1),T=u(16777216);r=o.prototype,r.m=function(){if(V(this))return-U(this).m();let A=0,E=1;for(let D=0;D<this.g.length;D++){const R=this.i(D);A+=(R>=0?R:4294967296+R)*E,E*=4294967296}return A},r.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(P(this))return"0";if(V(this))return"-"+U(this).toString(A);const E=c(Math.pow(A,6));var D=this;let R="";for(;;){const y=ke(D,E).g;D=K(D,y.j(E));let S=((D.g.length>0?D.g[0]:D.h)>>>0).toString(A);if(D=y,P(D))return S+R;for(;S.length<6;)S="0"+S;R=S+R}},r.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function P(A){if(A.h!=0)return!1;for(let E=0;E<A.g.length;E++)if(A.g[E]!=0)return!1;return!0}function V(A){return A.h==-1}r.l=function(A){return A=K(this,A),V(A)?-1:P(A)?0:1};function U(A){const E=A.g.length,D=[];for(let R=0;R<E;R++)D[R]=~A.g[R];return new o(D,~A.h).add(m)}r.abs=function(){return V(this)?U(this):this},r.add=function(A){const E=Math.max(this.g.length,A.g.length),D=[];let R=0;for(let y=0;y<=E;y++){let S=R+(this.i(y)&65535)+(A.i(y)&65535),_=(S>>>16)+(this.i(y)>>>16)+(A.i(y)>>>16);R=_>>>16,S&=65535,_&=65535,D[y]=_<<16|S}return new o(D,D[D.length-1]&-2147483648?-1:0)};function K(A,E){return A.add(U(E))}r.j=function(A){if(P(this)||P(A))return f;if(V(this))return V(A)?U(this).j(U(A)):U(U(this).j(A));if(V(A))return U(this.j(U(A)));if(this.l(T)<0&&A.l(T)<0)return c(this.m()*A.m());const E=this.g.length+A.g.length,D=[];for(var R=0;R<2*E;R++)D[R]=0;for(R=0;R<this.g.length;R++)for(let y=0;y<A.g.length;y++){const S=this.i(R)>>>16,_=this.i(R)&65535,et=A.i(y)>>>16,xn=A.i(y)&65535;D[2*R+2*y]+=_*xn,re(D,2*R+2*y),D[2*R+2*y+1]+=S*xn,re(D,2*R+2*y+1),D[2*R+2*y+1]+=_*et,re(D,2*R+2*y+1),D[2*R+2*y+2]+=S*et,re(D,2*R+2*y+2)}for(A=0;A<E;A++)D[A]=D[2*A+1]<<16|D[2*A];for(A=E;A<2*E;A++)D[A]=0;return new o(D,0)};function re(A,E){for(;(A[E]&65535)!=A[E];)A[E+1]+=A[E]>>>16,A[E]&=65535,E++}function De(A,E){this.g=A,this.h=E}function ke(A,E){if(P(E))throw Error("division by zero");if(P(A))return new De(f,f);if(V(A))return E=ke(U(A),E),new De(U(E.g),U(E.h));if(V(E))return E=ke(A,U(E)),new De(U(E.g),E.h);if(A.g.length>30){if(V(A)||V(E))throw Error("slowDivide_ only works with positive integers.");for(var D=m,R=E;R.l(A)<=0;)D=Ve(D),R=Ve(R);var y=ye(D,1),S=ye(R,1);for(R=ye(R,2),D=ye(D,2);!P(R);){var _=S.add(R);_.l(A)<=0&&(y=y.add(D),S=_),R=ye(R,1),D=ye(D,1)}return E=K(A,y.j(E)),new De(y,E)}for(y=f;A.l(E)>=0;){for(D=Math.max(1,Math.floor(A.m()/E.m())),R=Math.ceil(Math.log(D)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),S=c(D),_=S.j(E);V(_)||_.l(A)>0;)D-=R,S=c(D),_=S.j(E);P(S)&&(S=m),y=y.add(S),A=K(A,_)}return new De(y,A)}r.B=function(A){return ke(this,A).h},r.and=function(A){const E=Math.max(this.g.length,A.g.length),D=[];for(let R=0;R<E;R++)D[R]=this.i(R)&A.i(R);return new o(D,this.h&A.h)},r.or=function(A){const E=Math.max(this.g.length,A.g.length),D=[];for(let R=0;R<E;R++)D[R]=this.i(R)|A.i(R);return new o(D,this.h|A.h)},r.xor=function(A){const E=Math.max(this.g.length,A.g.length),D=[];for(let R=0;R<E;R++)D[R]=this.i(R)^A.i(R);return new o(D,this.h^A.h)};function Ve(A){const E=A.g.length+1,D=[];for(let R=0;R<E;R++)D[R]=A.i(R)<<1|A.i(R-1)>>>31;return new o(D,A.h)}function ye(A,E){const D=E>>5;E%=32;const R=A.g.length-D,y=[];for(let S=0;S<R;S++)y[S]=E>0?A.i(S+D)>>>E|A.i(S+D+1)<<32-E:A.i(S+D);return new o(y,A.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,$h=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=C,In=o}).apply(typeof Gc<"u"?Gc:typeof self<"u"?self:typeof window<"u"?window:{});var vi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yh,fs,Xh,Hi,ja,Zh,eC,tC;(function(){var r,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof vi=="object"&&vi];for(var l=0;l<a.length;++l){var h=a[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=t(this);function s(a,l){if(l)e:{var h=n;a=a.split(".");for(var d=0;d<a.length-1;d++){var v=a[d];if(!(v in h))break e;h=h[v]}a=a[a.length-1],d=h[a],l=l(d),l!=d&&l!=null&&e(h,a,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(l){var h=[],d;for(d in l)Object.prototype.hasOwnProperty.call(l,d)&&h.push([d,l[d]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function B(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function u(a,l,h){return a.call.apply(a.bind,arguments)}function c(a,l,h){return c=u,c.apply(null,arguments)}function C(a,l){var h=Array.prototype.slice.call(arguments,1);return function(){var d=h.slice();return d.push.apply(d,arguments),a.apply(this,d)}}function f(a,l){function h(){}h.prototype=l.prototype,a.Z=l.prototype,a.prototype=new h,a.prototype.constructor=a,a.Ob=function(d,v,b){for(var J=Array(arguments.length-2),se=2;se<arguments.length;se++)J[se-2]=arguments[se];return l.prototype[v].apply(d,J)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function T(a){const l=a.length;if(l>0){const h=Array(l);for(let d=0;d<l;d++)h[d]=a[d];return h}return[]}function P(a,l){for(let d=1;d<arguments.length;d++){const v=arguments[d];var h=typeof v;if(h=h!="object"?h:v?Array.isArray(v)?"array":h:"null",h=="array"||h=="object"&&typeof v.length=="number"){h=a.length||0;const b=v.length||0;a.length=h+b;for(let J=0;J<b;J++)a[h+J]=v[J]}else a.push(v)}}class V{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function U(a){o.setTimeout(()=>{throw a},0)}function K(){var a=A;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class re{constructor(){this.h=this.g=null}add(l,h){const d=De.get();d.set(l,h),this.h?this.h.next=d:this.g=d,this.h=d}}var De=new V(()=>new ke,a=>a.reset());class ke{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Ve,ye=!1,A=new re,E=()=>{const a=Promise.resolve(void 0);Ve=()=>{a.then(D)}};function D(){for(var a;a=K();){try{a.h.call(a.g)}catch(h){U(h)}var l=De;l.j(a),l.h<100&&(l.h++,a.next=l.g,l.g=a)}ye=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};o.addEventListener("test",h,l),o.removeEventListener("test",h,l)}catch{}return a})();function _(a){return/^[\s\xa0]*$/.test(a)}function et(a,l){y.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,l)}f(et,y),et.prototype.init=function(a,l){const h=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget,l||(h=="mouseover"?l=a.fromElement:h=="mouseout"&&(l=a.toElement)),this.relatedTarget=l,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&et.Z.h.call(this)},et.prototype.h=function(){et.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var xn="closure_listenable_"+(Math.random()*1e6|0),Kd=0;function zd(a,l,h,d,v){this.listener=a,this.proxy=null,this.src=l,this.type=h,this.capture=!!d,this.ha=v,this.key=++Kd,this.da=this.fa=!1}function Ci(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function fi(a,l,h){for(const d in a)l.call(h,a[d],d,a)}function Qd(a,l){for(const h in a)l.call(void 0,a[h],h,a)}function vu(a){const l={};for(const h in a)l[h]=a[h];return l}const Pu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Su(a,l){let h,d;for(let v=1;v<arguments.length;v++){d=arguments[v];for(h in d)a[h]=d[h];for(let b=0;b<Pu.length;b++)h=Pu[b],Object.prototype.hasOwnProperty.call(d,h)&&(a[h]=d[h])}}function di(a){this.src=a,this.g={},this.h=0}di.prototype.add=function(a,l,h,d,v){const b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);const J=Wo(a,l,d,v);return J>-1?(l=a[J],h||(l.fa=!1)):(l=new zd(l,this.src,b,!!d,v),l.fa=h,a.push(l)),l};function Qo(a,l){const h=l.type;if(h in a.g){var d=a.g[h],v=Array.prototype.indexOf.call(d,l,void 0),b;(b=v>=0)&&Array.prototype.splice.call(d,v,1),b&&(Ci(l),a.g[h].length==0&&(delete a.g[h],a.h--))}}function Wo(a,l,h,d){for(let v=0;v<a.length;++v){const b=a[v];if(!b.da&&b.listener==l&&b.capture==!!h&&b.ha==d)return v}return-1}var $o="closure_lm_"+(Math.random()*1e6|0),Yo={};function bu(a,l,h,d,v){if(Array.isArray(l)){for(let b=0;b<l.length;b++)bu(a,l[b],h,d,v);return null}return h=Fu(h),a&&a[xn]?a.J(l,h,B(d)?!!d.capture:!1,v):Wd(a,l,h,!1,d,v)}function Wd(a,l,h,d,v,b){if(!l)throw Error("Invalid event type");const J=B(v)?!!v.capture:!!v;let se=Zo(a);if(se||(a[$o]=se=new di(a)),h=se.add(l,h,d,J,b),h.proxy)return h;if(d=$d(),h.proxy=d,d.src=a,d.listener=h,a.addEventListener)S||(v=J),v===void 0&&(v=!1),a.addEventListener(l.toString(),d,v);else if(a.attachEvent)a.attachEvent(Nu(l.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return h}function $d(){function a(h){return l.call(a.src,a.listener,h)}const l=Yd;return a}function Ou(a,l,h,d,v){if(Array.isArray(l))for(var b=0;b<l.length;b++)Ou(a,l[b],h,d,v);else d=B(d)?!!d.capture:!!d,h=Fu(h),a&&a[xn]?(a=a.i,b=String(l).toString(),b in a.g&&(l=a.g[b],h=Wo(l,h,d,v),h>-1&&(Ci(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete a.g[b],a.h--)))):a&&(a=Zo(a))&&(l=a.g[l.toString()],a=-1,l&&(a=Wo(l,h,d,v)),(h=a>-1?l[a]:null)&&Xo(h))}function Xo(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[xn])Qo(l.i,a);else{var h=a.type,d=a.proxy;l.removeEventListener?l.removeEventListener(h,d,a.capture):l.detachEvent?l.detachEvent(Nu(h),d):l.addListener&&l.removeListener&&l.removeListener(d),(h=Zo(l))?(Qo(h,a),h.h==0&&(h.src=null,l[$o]=null)):Ci(a)}}}function Nu(a){return a in Yo?Yo[a]:Yo[a]="on"+a}function Yd(a,l){if(a.da)a=!0;else{l=new et(l,this);const h=a.listener,d=a.ha||a.src;a.fa&&Xo(a),a=h.call(d,l)}return a}function Zo(a){return a=a[$o],a instanceof di?a:null}var ea="__closure_events_fn_"+(Math.random()*1e9>>>0);function Fu(a){return typeof a=="function"?a:(a[ea]||(a[ea]=function(l){return a.handleEvent(l)}),a[ea])}function je(){R.call(this),this.i=new di(this),this.M=this,this.G=null}f(je,R),je.prototype[xn]=!0,je.prototype.removeEventListener=function(a,l,h,d){Ou(this,a,l,h,d)};function $e(a,l){var h,d=a.G;if(d)for(h=[];d;d=d.G)h.push(d);if(a=a.M,d=l.type||l,typeof l=="string")l=new y(l,a);else if(l instanceof y)l.target=l.target||a;else{var v=l;l=new y(d,a),Su(l,v)}v=!0;let b,J;if(h)for(J=h.length-1;J>=0;J--)b=l.g=h[J],v=pi(b,d,!0,l)&&v;if(b=l.g=a,v=pi(b,d,!0,l)&&v,v=pi(b,d,!1,l)&&v,h)for(J=0;J<h.length;J++)b=l.g=h[J],v=pi(b,d,!1,l)&&v}je.prototype.N=function(){if(je.Z.N.call(this),this.i){var a=this.i;for(const l in a.g){const h=a.g[l];for(let d=0;d<h.length;d++)Ci(h[d]);delete a.g[l],a.h--}}this.G=null},je.prototype.J=function(a,l,h,d){return this.i.add(String(a),l,!1,h,d)},je.prototype.K=function(a,l,h,d){return this.i.add(String(a),l,!0,h,d)};function pi(a,l,h,d){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();let v=!0;for(let b=0;b<l.length;++b){const J=l[b];if(J&&!J.da&&J.capture==h){const se=J.listener,Oe=J.ha||J.src;J.fa&&Qo(a.i,J),v=se.call(Oe,d)!==!1&&v}}return v&&!d.defaultPrevented}function Xd(a,l){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(a,l||0)}function Lu(a){a.g=Xd(()=>{a.g=null,a.i&&(a.i=!1,Lu(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class Zd extends R{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Lu(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zr(a){R.call(this),this.h=a,this.g={}}f(zr,R);var ku=[];function Vu(a){fi(a.g,function(l,h){this.g.hasOwnProperty(h)&&Xo(l)},a),a.g={}}zr.prototype.N=function(){zr.Z.N.call(this),Vu(this)},zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ta=o.JSON.stringify,ep=o.JSON.parse,tp=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function xu(){}function Mu(){}var Qr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function na(){y.call(this,"d")}f(na,y);function ra(){y.call(this,"c")}f(ra,y);var Mn={},Gu=null;function gi(){return Gu=Gu||new je}Mn.Ia="serverreachability";function Hu(a){y.call(this,Mn.Ia,a)}f(Hu,y);function Wr(a){const l=gi();$e(l,new Hu(l))}Mn.STAT_EVENT="statevent";function Uu(a,l){y.call(this,Mn.STAT_EVENT,a),this.stat=l}f(Uu,y);function Ye(a){const l=gi();$e(l,new Uu(l,a))}Mn.Ja="timingevent";function Ju(a,l){y.call(this,Mn.Ja,a),this.size=l}f(Ju,y);function $r(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},l)}function Yr(){this.g=!0}Yr.prototype.ua=function(){this.g=!1};function np(a,l,h,d,v,b){a.info(function(){if(a.g)if(b){var J="",se=b.split("&");for(let Ce=0;Ce<se.length;Ce++){var Oe=se[Ce].split("=");if(Oe.length>1){const xe=Oe[0];Oe=Oe[1];const bt=xe.split("_");J=bt.length>=2&&bt[1]=="type"?J+(xe+"="+Oe+"&"):J+(xe+"=redacted&")}}}else J=null;else J=b;return"XMLHTTP REQ ("+d+") [attempt "+v+"]: "+l+`
`+h+`
`+J})}function rp(a,l,h,d,v,b,J){a.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+v+"]: "+l+`
`+h+`
`+b+" "+J})}function fr(a,l,h,d){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+ip(a,h)+(d?" "+d:"")})}function sp(a,l){a.info(function(){return"TIMEOUT: "+l})}Yr.prototype.info=function(){};function ip(a,l){if(!a.g)return l;if(!l)return null;try{const b=JSON.parse(l);if(b){for(a=0;a<b.length;a++)if(Array.isArray(b[a])){var h=b[a];if(!(h.length<2)){var d=h[1];if(Array.isArray(d)&&!(d.length<1)){var v=d[0];if(v!="noop"&&v!="stop"&&v!="close")for(let J=1;J<d.length;J++)d[J]=""}}}}return ta(b)}catch{return l}}var mi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ju={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},qu;function sa(){}f(sa,xu),sa.prototype.g=function(){return new XMLHttpRequest},qu=new sa;function Xr(a){return encodeURIComponent(String(a))}function op(a){var l=1;a=a.split(":");const h=[];for(;l>0&&a.length;)h.push(a.shift()),l--;return a.length&&h.push(a.join(":")),h}function rn(a,l,h,d){this.j=a,this.i=l,this.l=h,this.S=d||1,this.V=new zr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ku}function Ku(){this.i=null,this.g="",this.h=!1}var zu={},ia={};function oa(a,l,h){a.M=1,a.A=_i(St(l)),a.u=h,a.R=!0,Qu(a,null)}function Qu(a,l){a.F=Date.now(),Ei(a),a.B=St(a.A);var h=a.B,d=a.S;Array.isArray(d)||(d=[String(d)]),ac(h.i,"t",d),a.C=0,h=a.j.L,a.h=new Ku,a.g=Tc(a.j,h?l:null,!a.u),a.P>0&&(a.O=new Zd(c(a.Y,a,a.g),a.P)),l=a.V,h=a.g,d=a.ba;var v="readystatechange";Array.isArray(v)||(v&&(ku[0]=v.toString()),v=ku);for(let b=0;b<v.length;b++){const J=bu(h,v[b],d||l.handleEvent,!1,l.h||l);if(!J)break;l.g[J.key]=J}l=a.J?vu(a.J):{},a.u?(a.v||(a.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,l)):(a.v="GET",a.g.ea(a.B,a.v,null,l)),Wr(),np(a.i,a.v,a.B,a.l,a.S,a.u)}rn.prototype.ba=function(a){a=a.target;const l=this.O;l&&an(a)==3?l.j():this.Y(a)},rn.prototype.Y=function(a){try{if(a==this.g)e:{const se=an(this.g),Oe=this.g.ya(),Ce=this.g.ca();if(!(se<3)&&(se!=3||this.g&&(this.h.h||this.g.la()||fc(this.g)))){this.K||se!=4||Oe==7||(Oe==8||Ce<=0?Wr(3):Wr(2)),aa(this);var l=this.g.ca();this.X=l;var h=ap(this);if(this.o=l==200,rp(this.i,this.v,this.B,this.l,this.S,se,l),this.o){if(this.U&&!this.L){t:{if(this.g){var d,v=this.g;if((d=v.g?v.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(d)){var b=d;break t}}b=null}if(a=b)fr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ba(this,a);else{this.o=!1,this.m=3,Ye(12),Gn(this),Zr(this);break e}}if(this.R){a=!0;let xe;for(;!this.K&&this.C<h.length;)if(xe=Bp(this,h),xe==ia){se==4&&(this.m=4,Ye(14),a=!1),fr(this.i,this.l,null,"[Incomplete Response]");break}else if(xe==zu){this.m=4,Ye(15),fr(this.i,this.l,h,"[Invalid Chunk]"),a=!1;break}else fr(this.i,this.l,xe,null),Ba(this,xe);if(Wu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),se!=4||h.length!=0||this.h.h||(this.m=1,Ye(16),a=!1),this.o=this.o&&a,!a)fr(this.i,this.l,h,"[Invalid Chunked Response]"),Gn(this),Zr(this);else if(h.length>0&&!this.W){this.W=!0;var J=this.j;J.g==this&&J.aa&&!J.P&&(J.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),pa(J),J.P=!0,Ye(11))}}else fr(this.i,this.l,h,null),Ba(this,h);se==4&&Gn(this),this.o&&!this.K&&(se==4?Dc(this.j,this):(this.o=!1,Ei(this)))}else Ip(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,Ye(12)):(this.m=0,Ye(13)),Gn(this),Zr(this)}}}catch{}finally{}};function ap(a){if(!Wu(a))return a.g.la();const l=fc(a.g);if(l==="")return"";let h="";const d=l.length,v=an(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Gn(a),Zr(a),"";a.h.i=new o.TextDecoder}for(let b=0;b<d;b++)a.h.h=!0,h+=a.h.i.decode(l[b],{stream:!(v&&b==d-1)});return l.length=0,a.h.g+=h,a.C=0,a.h.g}function Wu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Bp(a,l){var h=a.C,d=l.indexOf(`
`,h);return d==-1?ia:(h=Number(l.substring(h,d)),isNaN(h)?zu:(d+=1,d+h>l.length?ia:(l=l.slice(d,d+h),a.C=d+h,l)))}rn.prototype.cancel=function(){this.K=!0,Gn(this)};function Ei(a){a.T=Date.now()+a.H,$u(a,a.H)}function $u(a,l){if(a.D!=null)throw Error("WatchDog timer not null");a.D=$r(c(a.aa,a),l)}function aa(a){a.D&&(o.clearTimeout(a.D),a.D=null)}rn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(sp(this.i,this.B),this.M!=2&&(Wr(),Ye(17)),Gn(this),this.m=2,Zr(this)):$u(this,this.T-a)};function Zr(a){a.j.I==0||a.K||Dc(a.j,a)}function Gn(a){aa(a);var l=a.O;l&&typeof l.dispose=="function"&&l.dispose(),a.O=null,Vu(a.V),a.g&&(l=a.g,a.g=null,l.abort(),l.dispose())}function Ba(a,l){try{var h=a.j;if(h.I!=0&&(h.g==a||ua(h.h,a))){if(!a.L&&ua(h.h,a)&&h.I==3){try{var d=h.Ba.g.parse(l)}catch{d=null}if(Array.isArray(d)&&d.length==3){var v=d;if(v[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<a.F)Ti(h),wi(h);else break e;da(h),Ye(18)}}else h.xa=v[1],0<h.xa-h.K&&v[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=$r(c(h.Va,h),6e3));Zu(h.h)<=1&&h.ta&&(h.ta=void 0)}else Un(h,11)}else if((a.L||h.g==a)&&Ti(h),!_(l))for(v=h.Ba.g.parse(l),l=0;l<v.length;l++){let Ce=v[l];const xe=Ce[0];if(!(xe<=h.K))if(h.K=xe,Ce=Ce[1],h.I==2)if(Ce[0]=="c"){h.M=Ce[1],h.ba=Ce[2];const bt=Ce[3];bt!=null&&(h.ka=bt,h.j.info("VER="+h.ka));const Jn=Ce[4];Jn!=null&&(h.za=Jn,h.j.info("SVER="+h.za));const Bn=Ce[5];Bn!=null&&typeof Bn=="number"&&Bn>0&&(d=1.5*Bn,h.O=d,h.j.info("backChannelRequestTimeoutMs_="+d)),d=h;const un=a.g;if(un){const Ri=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ri){var b=d.h;b.g||Ri.indexOf("spdy")==-1&&Ri.indexOf("quic")==-1&&Ri.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(ca(b,b.h),b.h=null))}if(d.G){const ga=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;ga&&(d.wa=ga,ge(d.J,d.G,ga))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-a.F,h.j.info("Handshake RTT: "+h.T+"ms")),d=h;var J=a;if(d.na=yc(d,d.L?d.ba:null,d.W),J.L){ec(d.h,J);var se=J,Oe=d.O;Oe&&(se.H=Oe),se.D&&(aa(se),Ei(se)),d.g=J}else Ec(d);h.i.length>0&&yi(h)}else Ce[0]!="stop"&&Ce[0]!="close"||Un(h,7);else h.I==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?Un(h,7):fa(h):Ce[0]!="noop"&&h.l&&h.l.qa(Ce),h.A=0)}}Wr(4)}catch{}}var up=class{constructor(a,l){this.g=a,this.map=l}};function Yu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Xu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Zu(a){return a.h?1:a.g?a.g.size:0}function ua(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function ca(a,l){a.g?a.g.add(l):a.h=l}function ec(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}Yu.prototype.cancel=function(){if(this.i=tc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function tc(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const h of a.g.values())l=l.concat(h.G);return l}return T(a.i)}var nc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cp(a,l){if(a){a=a.split("&");for(let h=0;h<a.length;h++){const d=a[h].indexOf("=");let v,b=null;d>=0?(v=a[h].substring(0,d),b=a[h].substring(d+1)):v=a[h],l(v,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function sn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;a instanceof sn?(this.l=a.l,es(this,a.j),this.o=a.o,this.g=a.g,ts(this,a.u),this.h=a.h,la(this,Bc(a.i)),this.m=a.m):a&&(l=String(a).match(nc))?(this.l=!1,es(this,l[1]||"",!0),this.o=ns(l[2]||""),this.g=ns(l[3]||"",!0),ts(this,l[4]),this.h=ns(l[5]||"",!0),la(this,l[6]||"",!0),this.m=ns(l[7]||"")):(this.l=!1,this.i=new ss(null,this.l))}sn.prototype.toString=function(){const a=[];var l=this.j;l&&a.push(rs(l,rc,!0),":");var h=this.g;return(h||l=="file")&&(a.push("//"),(l=this.o)&&a.push(rs(l,rc,!0),"@"),a.push(Xr(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&a.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(rs(h,h.charAt(0)=="/"?Cp:hp,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",rs(h,dp)),a.join("")},sn.prototype.resolve=function(a){const l=St(this);let h=!!a.j;h?es(l,a.j):h=!!a.o,h?l.o=a.o:h=!!a.g,h?l.g=a.g:h=a.u!=null;var d=a.h;if(h)ts(l,a.u);else if(h=!!a.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var v=l.h.lastIndexOf("/");v!=-1&&(d=l.h.slice(0,v+1)+d)}if(v=d,v==".."||v==".")d="";else if(v.indexOf("./")!=-1||v.indexOf("/.")!=-1){d=v.lastIndexOf("/",0)==0,v=v.split("/");const b=[];for(let J=0;J<v.length;){const se=v[J++];se=="."?d&&J==v.length&&b.push(""):se==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),d&&J==v.length&&b.push("")):(b.push(se),d=!0)}d=b.join("/")}else d=v}return h?l.h=d:h=a.i.toString()!=="",h?la(l,Bc(a.i)):h=!!a.m,h&&(l.m=a.m),l};function St(a){return new sn(a)}function es(a,l,h){a.j=h?ns(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function ts(a,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);a.u=l}else a.u=null}function la(a,l,h){l instanceof ss?(a.i=l,pp(a.i,a.l)):(h||(l=rs(l,fp)),a.i=new ss(l,a.l))}function ge(a,l,h){a.i.set(l,h)}function _i(a){return ge(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ns(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function rs(a,l,h){return typeof a=="string"?(a=encodeURI(a).replace(l,lp),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function lp(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var rc=/[#\/\?@]/g,hp=/[#\?:]/g,Cp=/[#\?]/g,fp=/[#\?@]/g,dp=/#/g;function ss(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function Hn(a){a.g||(a.g=new Map,a.h=0,a.i&&cp(a.i,function(l,h){a.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}r=ss.prototype,r.add=function(a,l){Hn(this),this.i=null,a=dr(this,a);let h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(l),this.h+=1,this};function sc(a,l){Hn(a),l=dr(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function ic(a,l){return Hn(a),l=dr(a,l),a.g.has(l)}r.forEach=function(a,l){Hn(this),this.g.forEach(function(h,d){h.forEach(function(v){a.call(l,v,d,this)},this)},this)};function oc(a,l){Hn(a);let h=[];if(typeof l=="string")ic(a,l)&&(h=h.concat(a.g.get(dr(a,l))));else for(a=Array.from(a.g.values()),l=0;l<a.length;l++)h=h.concat(a[l]);return h}r.set=function(a,l){return Hn(this),this.i=null,a=dr(this,a),ic(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},r.get=function(a,l){return a?(a=oc(this,a),a.length>0?String(a[0]):l):l};function ac(a,l,h){sc(a,l),h.length>0&&(a.i=null,a.g.set(dr(a,l),T(h)),a.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(let d=0;d<l.length;d++){var h=l[d];const v=Xr(h);h=oc(this,h);for(let b=0;b<h.length;b++){let J=v;h[b]!==""&&(J+="="+Xr(h[b])),a.push(J)}}return this.i=a.join("&")};function Bc(a){const l=new ss;return l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),l}function dr(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function pp(a,l){l&&!a.j&&(Hn(a),a.i=null,a.g.forEach(function(h,d){const v=d.toLowerCase();d!=v&&(sc(this,d),ac(this,v,h))},a)),a.j=l}function gp(a,l){const h=new Yr;if(o.Image){const d=new Image;d.onload=C(on,h,"TestLoadImage: loaded",!0,l,d),d.onerror=C(on,h,"TestLoadImage: error",!1,l,d),d.onabort=C(on,h,"TestLoadImage: abort",!1,l,d),d.ontimeout=C(on,h,"TestLoadImage: timeout",!1,l,d),o.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=a}else l(!1)}function mp(a,l){const h=new Yr,d=new AbortController,v=setTimeout(()=>{d.abort(),on(h,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:d.signal}).then(b=>{clearTimeout(v),b.ok?on(h,"TestPingServer: ok",!0,l):on(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(v),on(h,"TestPingServer: error",!1,l)})}function on(a,l,h,d,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),d(h)}catch{}}function Ep(){this.g=new tp}function ha(a){this.i=a.Sb||null,this.h=a.ab||!1}f(ha,xu),ha.prototype.g=function(){return new Di(this.i,this.h)};function Di(a,l){je.call(this),this.H=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(Di,je),r=Di.prototype,r.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=l,this.readyState=1,os(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(l.body=a),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,is(this)),this.readyState=0},r.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,os(this)),this.g&&(this.readyState=3,os(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;uc(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function uc(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}r.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?is(this):os(this),this.readyState==3&&uc(this)}},r.Oa=function(a){this.g&&(this.response=this.responseText=a,is(this))},r.Na=function(a){this.g&&(this.response=a,is(this))},r.ga=function(){this.g&&is(this)};function is(a){a.readyState=4,a.l=null,a.j=null,a.B=null,os(a)}r.setRequestHeader=function(a,l){this.A.append(a,l)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=l.next();return a.join(`\r
`)};function os(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function cc(a){let l="";return fi(a,function(h,d){l+=d,l+=":",l+=h,l+=`\r
`}),l}function Ca(a,l,h){e:{for(d in h){var d=!1;break e}d=!0}d||(h=cc(h),typeof a=="string"?h!=null&&Xr(h):ge(a,l,h))}function Te(a){je.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Te,je);var _p=/^https?$/i,Dp=["POST","PUT"];r=Te.prototype,r.Fa=function(a){this.H=a},r.ea=function(a,l,h,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():qu.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(b){lc(this,b);return}if(a=h||"",h=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var v in d)h.set(v,d[v]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const b of d.keys())h.set(b,d.get(b));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),v=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Dp,l,void 0)>=0)||d||v||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,J]of h)this.g.setRequestHeader(b,J);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(b){lc(this,b)}};function lc(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.o=5,hc(a),Ii(a)}function hc(a){a.A||(a.A=!0,$e(a,"complete"),$e(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,$e(this,"complete"),$e(this,"abort"),Ii(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ii(this,!0)),Te.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Cc(this):this.Xa())},r.Xa=function(){Cc(this)};function Cc(a){if(a.h&&typeof i<"u"){if(a.v&&an(a)==4)setTimeout(a.Ca.bind(a),0);else if($e(a,"readystatechange"),an(a)==4){a.h=!1;try{const b=a.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var d;if(d=b===0){let J=String(a.D).match(nc)[1]||null;!J&&o.self&&o.self.location&&(J=o.self.location.protocol.slice(0,-1)),d=!_p.test(J?J.toLowerCase():"")}h=d}if(h)$e(a,"complete"),$e(a,"success");else{a.o=6;try{var v=an(a)>2?a.g.statusText:""}catch{v=""}a.l=v+" ["+a.ca()+"]",hc(a)}}finally{Ii(a)}}}}function Ii(a,l){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const h=a.g;a.g=null,l||$e(a,"ready");try{h.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function an(a){return a.g?a.g.readyState:0}r.ca=function(){try{return an(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),ep(l)}};function fc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ip(a){const l={};a=(a.g&&an(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<a.length;d++){if(_(a[d]))continue;var h=op(a[d]);const v=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=l[v]||[];l[v]=b,b.push(h)}Qd(l,function(d){return d.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function as(a,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||l}function dc(a){this.za=0,this.i=[],this.j=new Yr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=as("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=as("baseRetryDelayMs",5e3,a),this.Za=as("retryDelaySeedMs",1e4,a),this.Ta=as("forwardChannelMaxRetries",2,a),this.va=as("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Yu(a&&a.concurrentRequestLimit),this.Ba=new Ep,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=dc.prototype,r.ka=8,r.I=1,r.connect=function(a,l,h,d){Ye(0),this.W=a,this.H=l||{},h&&d!==void 0&&(this.H.OSID=h,this.H.OAID=d),this.F=this.X,this.J=yc(this,null,this.W),yi(this)};function fa(a){if(pc(a),a.I==3){var l=a.V++,h=St(a.J);if(ge(h,"SID",a.M),ge(h,"RID",l),ge(h,"TYPE","terminate"),Bs(a,h),l=new rn(a,a.j,l),l.M=2,l.A=_i(St(h)),h=!1,o.navigator&&o.navigator.sendBeacon)try{h=o.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&o.Image&&(new Image().src=l.A,h=!0),h||(l.g=Tc(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Ei(l)}wc(a)}function wi(a){a.g&&(pa(a),a.g.cancel(),a.g=null)}function pc(a){wi(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ti(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function yi(a){if(!Xu(a.h)&&!a.m){a.m=!0;var l=a.Ea;Ve||E(),ye||(Ve(),ye=!0),A.add(l,a),a.D=0}}function wp(a,l){return Zu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=l.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=$r(c(a.Ea,a,l),Ic(a,a.D)),a.D++,!0)}r.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const v=new rn(this,this.j,a);let b=this.o;if(this.U&&(b?(b=vu(b),Su(b,this.U)):b=this.U),this.u!==null||this.R||(v.J=b,b=null),this.S)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var d=this.i[h];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(l+=d,l>4096){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=mc(this,v,l),h=St(this.J),ge(h,"RID",a),ge(h,"CVER",22),this.G&&ge(h,"X-HTTP-Session-Id",this.G),Bs(this,h),b&&(this.R?l="headers="+Xr(cc(b))+"&"+l:this.u&&Ca(h,this.u,b)),ca(this.h,v),this.Ra&&ge(h,"TYPE","init"),this.S?(ge(h,"$req",l),ge(h,"SID","null"),v.U=!0,oa(v,h,null)):oa(v,h,l),this.I=2}}else this.I==3&&(a?gc(this,a):this.i.length==0||Xu(this.h)||gc(this))};function gc(a,l){var h;l?h=l.l:h=a.V++;const d=St(a.J);ge(d,"SID",a.M),ge(d,"RID",h),ge(d,"AID",a.K),Bs(a,d),a.u&&a.o&&Ca(d,a.u,a.o),h=new rn(a,a.j,h,a.D+1),a.u===null&&(h.J=a.o),l&&(a.i=l.G.concat(a.i)),l=mc(a,h,1e3),h.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),ca(a.h,h),oa(h,d,l)}function Bs(a,l){a.H&&fi(a.H,function(h,d){ge(l,d,h)}),a.l&&fi({},function(h,d){ge(l,d,h)})}function mc(a,l,h){h=Math.min(a.i.length,h);const d=a.l?c(a.l.Ka,a.l,a):null;e:{var v=a.i;let se=-1;for(;;){const Oe=["count="+h];se==-1?h>0?(se=v[0].g,Oe.push("ofs="+se)):se=0:Oe.push("ofs="+se);let Ce=!0;for(let xe=0;xe<h;xe++){var b=v[xe].g;const bt=v[xe].map;if(b-=se,b<0)se=Math.max(0,v[xe].g-100),Ce=!1;else try{b="req"+b+"_"||"";try{var J=bt instanceof Map?bt:Object.entries(bt);for(const[Jn,Bn]of J){let un=Bn;B(Bn)&&(un=ta(Bn)),Oe.push(b+Jn+"="+encodeURIComponent(un))}}catch(Jn){throw Oe.push(b+"type="+encodeURIComponent("_badmap")),Jn}}catch{d&&d(bt)}}if(Ce){J=Oe.join("&");break e}}J=void 0}return a=a.i.splice(0,h),l.G=a,J}function Ec(a){if(!a.g&&!a.v){a.Y=1;var l=a.Da;Ve||E(),ye||(Ve(),ye=!0),A.add(l,a),a.A=0}}function da(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=$r(c(a.Da,a),Ic(a,a.A)),a.A++,!0)}r.Da=function(){if(this.v=null,_c(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=$r(c(this.Wa,this),a)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ye(10),wi(this),_c(this))};function pa(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function _c(a){a.g=new rn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var l=St(a.na);ge(l,"RID","rpc"),ge(l,"SID",a.M),ge(l,"AID",a.K),ge(l,"CI",a.F?"0":"1"),!a.F&&a.ia&&ge(l,"TO",a.ia),ge(l,"TYPE","xmlhttp"),Bs(a,l),a.u&&a.o&&Ca(l,a.u,a.o),a.O&&(a.g.H=a.O);var h=a.g;a=a.ba,h.M=1,h.A=_i(St(l)),h.u=null,h.R=!0,Qu(h,a)}r.Va=function(){this.C!=null&&(this.C=null,wi(this),da(this),Ye(19))};function Ti(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Dc(a,l){var h=null;if(a.g==l){Ti(a),pa(a),a.g=null;var d=2}else if(ua(a.h,l))h=l.G,ec(a.h,l),d=1;else return;if(a.I!=0){if(l.o)if(d==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var v=a.D;d=gi(),$e(d,new Ju(d,h)),yi(a)}else Ec(a);else if(v=l.m,v==3||v==0&&l.X>0||!(d==1&&wp(a,l)||d==2&&da(a)))switch(h&&h.length>0&&(l=a.h,l.i=l.i.concat(h)),v){case 1:Un(a,5);break;case 4:Un(a,10);break;case 3:Un(a,6);break;default:Un(a,2)}}}function Ic(a,l){let h=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(h*=2),h*l}function Un(a,l){if(a.j.info("Error code "+l),l==2){var h=c(a.bb,a),d=a.Ua;const v=!d;d=new sn(d||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||es(d,"https"),_i(d),v?gp(d.toString(),h):mp(d.toString(),h)}else Ye(2);a.I=0,a.l&&a.l.pa(l),wc(a),pc(a)}r.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ye(2)):(this.j.info("Failed to ping google.com"),Ye(1))};function wc(a){if(a.I=0,a.ja=[],a.l){const l=tc(a.h);(l.length!=0||a.i.length!=0)&&(P(a.ja,l),P(a.ja,a.i),a.h.i.length=0,T(a.i),a.i.length=0),a.l.oa()}}function yc(a,l,h){var d=h instanceof sn?St(h):new sn(h);if(d.g!="")l&&(d.g=l+"."+d.g),ts(d,d.u);else{var v=o.location;d=v.protocol,l=l?l+"."+v.hostname:v.hostname,v=+v.port;const b=new sn(null);d&&es(b,d),l&&(b.g=l),v&&ts(b,v),h&&(b.h=h),d=b}return h=a.G,l=a.wa,h&&l&&ge(d,h,l),ge(d,"VER",a.ka),Bs(a,d),d}function Tc(a,l,h){if(l&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Aa&&!a.ma?new Te(new ha({ab:h})):new Te(a.ma),l.Fa(a.L),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ac(){}r=Ac.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Ai(){}Ai.prototype.g=function(a,l){return new ct(a,l)};function ct(a,l){je.call(this),this.g=new dc(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(a?a["X-WebChannel-Client-Profile"]=l.sa:a={"X-WebChannel-Client-Profile":l.sa}),this.g.U=a,(a=l&&l.Qb)&&!_(a)&&(this.g.u=a),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!_(l)&&(this.g.G=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new pr(this)}f(ct,je),ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ct.prototype.close=function(){fa(this.g)},ct.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.v&&(h={},h.__data__=ta(a),a=h);l.i.push(new up(l.Ya++,a)),l.I==3&&yi(l)},ct.prototype.N=function(){this.g.l=null,delete this.j,fa(this.g),delete this.g,ct.Z.N.call(this)};function Rc(a){na.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const h in l){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}f(Rc,na);function vc(){ra.call(this),this.status=1}f(vc,ra);function pr(a){this.g=a}f(pr,Ac),pr.prototype.ra=function(){$e(this.g,"a")},pr.prototype.qa=function(a){$e(this.g,new Rc(a))},pr.prototype.pa=function(a){$e(this.g,new vc)},pr.prototype.oa=function(){$e(this.g,"b")},Ai.prototype.createWebChannel=Ai.prototype.g,ct.prototype.send=ct.prototype.o,ct.prototype.open=ct.prototype.m,ct.prototype.close=ct.prototype.close,tC=function(){return new Ai},eC=function(){return gi()},Zh=Mn,ja={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},mi.NO_ERROR=0,mi.TIMEOUT=8,mi.HTTP_ERROR=6,Hi=mi,ju.COMPLETE="complete",Xh=ju,Mu.EventType=Qr,Qr.OPEN="a",Qr.CLOSE="b",Qr.ERROR="c",Qr.MESSAGE="d",je.prototype.listen=je.prototype.J,fs=Mu,Te.prototype.listenOnce=Te.prototype.K,Te.prototype.getLastError=Te.prototype.Ha,Te.prototype.getLastErrorCode=Te.prototype.ya,Te.prototype.getStatus=Te.prototype.ca,Te.prototype.getResponseJson=Te.prototype.La,Te.prototype.getResponseText=Te.prototype.la,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Fa,Yh=Te}).apply(typeof vi<"u"?vi:typeof self<"u"?self:typeof window<"u"?window:{});/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.8.6
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository github:le0pard/re2js
* @license MIT
*/var fe,k=(fe=class{},M(fe,"FOLD_CASE",1),M(fe,"LITERAL",2),M(fe,"CLASS_NL",4),M(fe,"DOT_NL",8),M(fe,"ONE_LINE",16),M(fe,"NON_GREEDY",32),M(fe,"PERL_X",64),M(fe,"UNICODE_GROUPS",128),M(fe,"WAS_DOLLAR",256),M(fe,"LOOKBEHIND",512),M(fe,"MATCH_NL",fe.CLASS_NL|fe.DOT_NL),M(fe,"PERL",fe.CLASS_NL|fe.ONE_LINE|fe.PERL_X|fe.UNICODE_GROUPS),M(fe,"POSIX",0),M(fe,"UNANCHORED",0),M(fe,"ANCHOR_START",1),M(fe,"ANCHOR_BOTH",2),fe);const gr={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},Ps=128,qa=new Int32Array(Ps),Ka=new Int32Array(Ps),Pi=65535;for(let r=0;r<Ps;r++)r>=97&&r<=122?qa[r]=r-32:qa[r]=r,r>=65&&r<=90?Ka[r]=r+32:Ka[r]=r;var xa,O=(xa=class{static toUpperCase(r){if(r<Ps)return qa[r];const e=String.fromCodePoint(r).toUpperCase(),t=e.codePointAt(0)>Pi?2:1;if(e.length>t)return r;const n=String.fromCodePoint(e.codePointAt(0)).toLowerCase(),s=n.codePointAt(0)>Pi?2:1;return n.length>s||n.codePointAt(0)!==r?r:e.codePointAt(0)}static toLowerCase(r){if(r<Ps)return Ka[r];const e=String.fromCodePoint(r).toLowerCase(),t=e.codePointAt(0)>Pi?2:1;if(e.length>t)return r;const n=String.fromCodePoint(e.codePointAt(0)).toUpperCase(),s=n.codePointAt(0)>Pi?2:1;return n.length>s||n.codePointAt(0)!==r?r:e.codePointAt(0)}},M(xa,"CODES",new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["'",39],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["`",96],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]])),xa),p=class{constructor(r,e=!1){this.data=r,this.isStride1=e,this.SIZE=e?2:3}getLo(r){return this.data[r*this.SIZE]}getHi(r){return this.data[r*this.SIZE+1]}getStride(r){return this.isStride1?1:this.data[r*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const nC=new Uint8Array(256);for(let r=0,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-";r<64;r++)nC[e.charCodeAt(r)]=r;const rC=r=>{const e=[];let t=0,n=0;for(let s=0;s<r.length;s++){let i=nC[r.charCodeAt(s)];t|=(i&31)<<n,(i&32)===0?(e.push(t),t=0,n=0):n+=5}return e},g=(r,e)=>{const t=rC(r),n=e?t.length/2:t.length/3,s=new Uint32Array(n*3);let i=0,o=0;for(let B=0;B<n;B++)i+=t[o++],s[B*3]=i,i+=t[o++],s[B*3+1]=i,s[B*3+2]=e?1:t[o++];return s},om=r=>{const e=rC(r),t=new Map;let n=0;for(let s=0;s<e.length;s+=2){n+=e[s];const i=e[s+1],o=i>>>1^-(i&1);t.set(n,n+o)}return t};var Si=class{constructor(r){this.initializer=r,this.cache=new Map}has(r){return r in this.initializer}get(r){if(this.cache.has(r))return this.cache.get(r);const e=this.initializer[r],t=e?e():null;return this.cache.set(r,t),t}},hn,nt=(hn=class{static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=om("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static get Print(){return this._Print||(this._Print=new p(g("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}static get Upper(){return this.CATEGORIES.get("Lu")}},M(hn,"_CASE_ORBIT",null),M(hn,"_Print",null),M(hn,"CATEGORIES",new Si({C:()=>new p(g("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new p(g("AfgDgB",!0)),Cf:()=>new p(g("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new p(g("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new p(g("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new p(g("gg2B--B",!0)),L:()=>new p(g("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new p(g("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new p(g("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new p(g("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new p(g("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new p(g("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new p(g("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new p(g("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new p(g("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new p(g("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new p(g("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new p(g("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new p(g("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new p(g("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new p(g("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new p(g("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new p(g("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new p(g("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new p(g("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new p(g("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new p(g("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new p(g("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new p(g("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new p(g("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new p(g("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new p(g("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new p(g("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new p(g("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new p(g("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new p(g("ohIA",!0)),Zp:()=>new p(g("phIA",!0)),Zs:()=>new p(g("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new p(g("wBJIFbF",!0)),Alphabetic:()=>new p(g("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new p(g("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new p(g("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new p(g("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new p(g("7-8DE",!0)),Emoji_Modifier_Base:()=>new p(g("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new p(g("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new p(g("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new p(g("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new p(g("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new p(g("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new p(g("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new p(g("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new p(g("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new p(g("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))})),M(hn,"SCRIPTS",new Si({Adlam:()=>new p(g("go6DrCFJFB",!0)),Ahom:()=>new p(g("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new p(g("ggxCmS",!0)),Arabic:()=>new p(g("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new p(g("xpBlBDxBDCks9BE",!0)),Avestan:()=>new p(g("g4iC1BEG",!0)),Balinese:()=>new p(g("g4GsCCxB",!0)),Bamum:()=>new p(g("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new p(g("w26CdDF",!0)),Batak:()=>new p(g("g+GzBJD",!0)),Bengali:()=>new p(g("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new p(g("g17CYDY",!0)),Bhaiksuki:()=>new p(g("ggnCICsBCNLc",!0)),Bopomofo:()=>new p(g("qXB6wLqBxDf",!0)),Brahmi:()=>new p(g("ggkCtCFjBKA",!0)),Braille:()=>new p(g("ggK-H",!0)),Buginese:()=>new p(g("gwGbDB",!0)),Buhid:()=>new p(g("g6FT",!0)),Canadian_Aboriginal:()=>new p(g("ggF-TxRlC7tgCP",!0)),Carian:()=>new p(g("g1gCwB",!0)),Caucasian_Albanian:()=>new p(g("wphCzBMA",!0)),Chakma:()=>new p(g("gokC0BCR",!0)),Cham:()=>new p(g("gwqB2BKNDJDD",!0)),Cherokee:()=>new p(g("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new p(g("w9jCb",!0)),Common:()=>new p(g("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new p(g("ifNxkKzDGG",!0)),Cuneiform:()=>new p(g("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new p(g("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new p(g("w8rCiD",!0)),Cyrillic:()=>new p(g("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new p(g("gghCvC",!0)),Devanagari:()=>new p(g("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new p(g("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new p(g("ggmC7B",!0)),Duployan:()=>new p(g("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new p(g("ggsC1iBL68D",!0)),Elbasan:()=>new p(g("gohCnB",!0)),Elymaic:()=>new p(g("g-jCW",!0)),Ethiopic:()=>new p(g("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new p(g("gqjClBEcJB",!0)),Georgian:()=>new p(g("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new p(g("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new p(g("w5gCa",!0)),Grantha:()=>new p(g("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new p(g("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new p(g("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new p(g("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new p(g("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new p(g("go4C5B",!0)),Han:()=>new p(g("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new p(g("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new p(g("gojCnBJJ",!0)),Hanunoo:()=>new p(g("g5FU",!0)),Hatran:()=>new p(g("gniCSCBGE",!0)),Hebrew:()=>new p(g("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new p(g("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new p(g("giiCVCI",!0)),Inherited:()=>new p(g("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new p(g("g7iCSGH",!0)),Inscriptional_Parthian:()=>new p(g("g6iCVDH",!0)),Javanese:()=>new p(g("gsqBtCDJFB",!0)),Kaithi:()=>new p(g("gkkCiCLA",!0)),Kannada:()=>new p(g("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new p(g("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new p(g("g4nCQCoBEc",!0)),Kayah_Li:()=>new p(g("goqBtBCA",!0)),Kharoshthi:()=>new p(g("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new p(g("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new p(g("g8F9CDJHJnPf",!0)),Khojki:()=>new p(g("gwkCRCuB",!0)),Khudawadi:()=>new p(g("w1kC6BGJ",!0)),Kirat_Rai:()=>new p(g("gq7C5B",!0)),Lao:()=>new p(g("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new p(g("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new p(g("ggH3BEOEC",!0)),Limbu:()=>new p(g("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new p(g("gwhC2JKVLH",!0)),Linear_B:()=>new p(g("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new p(g("wmpBvBx1eA",!0)),Lycian:()=>new p(g("g0gCc",!0)),Lydian:()=>new p(g("gpiCZGA",!0)),Mahajani:()=>new p(g("wqkCmB",!0)),Makasar:()=>new p(g("g3nCY",!0)),Malayalam:()=>new p(g("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new p(g("giCbDA",!0)),Manichaean:()=>new p(g("g2iCmBFL",!0)),Marchen:()=>new p(g("wjnCfDVCN",!0)),Masaram_Gondi:()=>new p(g("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new p(g("gy7C6C",!0)),Meetei_Mayek:()=>new p(g("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new p(g("gg6DkGDP",!0)),Meroitic_Cursive:()=>new p(g("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new p(g("gsiCf",!0)),Miao:()=>new p(g("g47CqCF4BIQ",!0)),Modi:()=>new p(g("gwlCkCMJ",!0)),Mongolian:()=>new p(g("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new p(g("gy6CeCJFB",!0)),Multani:()=>new p(g("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new p(g("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new p(g("gkiCeJI",!0)),Nag_Mundari:()=>new p(g("wm5DpB",!0)),Nandinagari:()=>new p(g("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new p(g("gsGrBFZHKEB",!0)),Newa:()=>new p(g("gglC7CCE",!0)),Nko:()=>new p(g("g+B6BDC",!0)),Nushu:()=>new p(g("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new p(g("go4DsBENDJFB",!0)),Ogham:()=>new p(g("g0Fc",!0)),Ol_Chiki:()=>new p(g("wiHvB",!0)),Ol_Onal:()=>new p(g("wu5DqBFA",!0)),Old_Hungarian:()=>new p(g("gkjCyBOyBIF",!0)),Old_Italic:()=>new p(g("g4gCjBKC",!0)),Old_North_Arabian:()=>new p(g("g0iCf",!0)),Old_Permic:()=>new p(g("w6gCqB",!0)),Old_Persian:()=>new p(g("g9gCjBFN",!0)),Old_Sogdian:()=>new p(g("g4jCnB",!0)),Old_South_Arabian:()=>new p(g("gziCf",!0)),Old_Turkic:()=>new p(g("ggjCoC",!0)),Old_Uyghur:()=>new p(g("w7jCZ",!0)),Oriya:()=>new p(g("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new p(g("wlhCjBFjB",!0)),Osmanya:()=>new p(g("gkhCdDJ",!0)),Pahawh_Hmong:()=>new p(g("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new p(g("gjiCf",!0)),Pau_Cin_Hau:()=>new p(g("g2mC4B",!0)),Phags_Pa:()=>new p(g("giqB3B",!0)),Phoenician:()=>new p(g("goiCbEA",!0)),Psalter_Pahlavi:()=>new p(g("g8iCRIDNG",!0)),Rejang:()=>new p(g("wpqBjBMA",!0)),Runic:()=>new p(g("g1FqCEK",!0)),Samaritan:()=>new p(g("ggCtBDO",!0)),Saurashtra:()=>new p(g("gkqBlCJL",!0)),Sharada:()=>new p(g("gskC-ChsCH",!0)),Shavian:()=>new p(g("wihCvB",!0)),Siddham:()=>new p(g("gslC1BDlB",!0)),Sidetic:()=>new p(g("gqiCZ",!0)),SignWriting:()=>new p(g("gg2DrUQECO",!0)),Sinhala:()=>new p(g("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new p(g("w5jCpB",!0)),Sora_Sompeng:()=>new p(g("wmkCYIJ",!0)),Soyombo:()=>new p(g("wymCyC",!0)),Sundanese:()=>new p(g("g8G-BhIH",!0)),Sunuwar:()=>new p(g("g+mChBPJ",!0)),Syloti_Nagri:()=>new p(g("ggqBsB",!0)),Syriac:()=>new p(g("g4BNC7BDCxIK",!0)),Tagalog:()=>new p(g("g4FVKA",!0)),Tagbanwa:()=>new p(g("g7FMCCCB",!0)),Tai_Le:()=>new p(g("wqGdDE",!0)),Tai_Tham:()=>new p(g("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new p(g("g0qBiCZE",!0)),Tai_Yo:()=>new p(g("g25DeCVJB",!0)),Takri:()=>new p(g("g0lC5BHJ",!0)),Tamil:()=>new p(g("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new p(g("wz6CuCCJ",!0)),Tangut:()=>new p(g("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new p(g("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new p(g("g8BxB",!0)),Thai:()=>new p(g("hwD5BGb",!0)),Tibetan:()=>new p(g("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new p(g("wpL3BIBPA",!0)),Tirhuta:()=>new p(g("gklCnCJJ",!0)),Todhri:()=>new p(g("guhCzB",!0)),Tolong_Siki:()=>new p(g("wtnCrBFJ",!0)),Toto:()=>new p(g("w04De",!0)),Tulu_Tigalari:()=>new p(g("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new p(g("g8gCdCA",!0)),Unknown:()=>new p(g("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new p(g("gopBrJ",!0)),Vithkuqi:()=>new p(g("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new p(g("g24D5BGA",!0)),Warang_Citi:()=>new p(g("glmCyCNA",!0)),Yezidi:()=>new p(g("g0jCpBCCDB",!0)),Yi:()=>new p(g("ggoBskBE2B",!0)),Zanabazar_Square:()=>new p(g("gwmCnC",!0))})),M(hn,"FOLD_CATEGORIES",new Si({L:()=>new p(g("laA",!0)),LC:()=>new p(g("laA",!0)),Ll:()=>new p(g("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new p(g("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new p(g("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new p(g("5cgBgBlgHAB",!1)),Mn:()=>new p(g("5cgBgBlgHAB",!1)),Emoji:()=>new p(g("8mJA",!0)),Extended_Pictographic:()=>new p(g("8mJA",!0)),Lowercase:()=>new p(g("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new p(g("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new p(g("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))})),M(hn,"FOLD_SCRIPT",new Si({Common:()=>new p(g("8cgBgB",!1)),Greek:()=>new p(g("1FwUwU",!1)),Inherited:()=>new p(g("5cgBgBlgHAB",!1))})),hn),de,q=(de=class{static is32(e,t){let n=0,s=e.length;for(;n<s;){const i=n+Math.floor((s-n)/2),o=e.getLo(i),B=e.getHi(i);if(o<=t&&t<=B){const u=e.getStride(i);return(t-o)%u===0}t<o?s=i:n=i+1}return!1}static is(e,t){if(t<=de.MAX_LATIN1){for(let n=0;n<e.length;n++){if(t>e.getHi(n))continue;const s=e.getLo(n);if(t<s)return!1;const i=e.getStride(n);return(t-s)%i===0}return!1}return e.length>0&&t>=e.getLo(0)&&de.is32(e,t)}static isUpper(e){if(e<=de.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return de.is(nt.Upper,e)}static isPrint(e){return e<=de.MAX_LATIN1?e>=32&&e<de.MAX_ASCII||e>=161&&e!==173:de.is(nt.Print,e)}static simpleFold(e){if(nt.CASE_ORBIT.has(e))return nt.CASE_ORBIT.get(e);const t=O.toLowerCase(e);return t!==e?t:O.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e===t)return!0;if(e<0||t<0)return!1;if(e<=de.MAX_ASCII&&t<=de.MAX_ASCII)return 65<=e&&e<=90&&(e|=32),65<=t&&t<=90&&(t|=32),e===t;for(let n=de.simpleFold(e);n!==e;n=de.simpleFold(n))if(n===t)return!0;return!1}},M(de,"MAX_RUNE",1114111),M(de,"MAX_ASCII",127),M(de,"MAX_LATIN1",255),M(de,"MAX_BMP",65535),M(de,"MIN_FOLD",65),M(de,"MAX_FOLD",125251),M(de,"MIN_HIGH_SURROGATE",55296),M(de,"MAX_HIGH_SURROGATE",56319),M(de,"MIN_LOW_SURROGATE",56320),M(de,"MAX_LOW_SURROGATE",57343),M(de,"MIN_SUPPLEMENTARY_CODE_POINT",65536),de);const mB=256,sC=new Uint8Array(mB);for(let r=0;r<mB;r++)sC[r]=97<=r&&r<=122||65<=r&&r<=90||48<=r&&r<=57||r===95?1:0;let wa=null,ya=null;var Ee,W=(Ee=class{static emptyInts(){return[]}static isByteArray(e){return Array.isArray(e)||e instanceof Uint8Array}static isalnum(e){return O.CODES.get("0")<=e&&e<=O.CODES.get("9")||O.CODES.get("a")<=e&&e<=O.CODES.get("z")||O.CODES.get("A")<=e&&e<=O.CODES.get("Z")}static unhex(e){return O.CODES.get("0")<=e&&e<=O.CODES.get("9")?e-O.CODES.get("0"):O.CODES.get("a")<=e&&e<=O.CODES.get("f")?e-O.CODES.get("a")+10:O.CODES.get("A")<=e&&e<=O.CODES.get("F")?e-O.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(q.isPrint(e))Ee.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case O.CODES.get('"'):t+='\\"';break;case O.CODES.get("\\"):t+="\\\\";break;case O.CODES.get("	"):t+="\\t";break;case O.CODES.get(`
`):t+="\\n";break;case O.CODES.get("\r"):t+="\\r";break;case O.CODES.get("\b"):t+="\\b";break;case O.CODES.get("\f"):t+="\\f";break;default:{let n=e.toString(16);e<256?(t+="\\x",n.length===1&&(t+="0"),t+=n):t+=`\\x{${n}}`;break}}return t}static stringToRunes(e){const t=String(e),n=[];let s=0;for(;s<t.length;){const i=t.codePointAt(s);n.push(i),s+=i>q.MAX_BMP?2:1}return n}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<mB?sC[e]===1:!1}static emptyOpContext(e,t){let n=0;return e<0&&(n|=Ee.EMPTY_BEGIN_TEXT|Ee.EMPTY_BEGIN_LINE),e===10&&(n|=Ee.EMPTY_BEGIN_LINE),t<0&&(n|=Ee.EMPTY_END_TEXT|Ee.EMPTY_END_LINE),t===10&&(n|=Ee.EMPTY_END_LINE),Ee.isWordRune(e)!==Ee.isWordRune(t)?n|=Ee.EMPTY_WORD_BOUNDARY:n|=Ee.EMPTY_NO_WORD_BOUNDARY,n}static quoteMeta(e){return e.split("").map(t=>Ee.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>q.MAX_BMP?2:1}static toArray(e){const t=e.length,n=new Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return wa||(wa=new TextEncoder),wa.encode(e);{let t=[],n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===q.MIN_HIGH_SURROGATE&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===q.MIN_LOW_SURROGATE?(i=q.MIN_SUPPLEMENTARY_CODE_POINT+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){ya||(ya=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return ya.decode(t)}else{let t=[],n=0,s=0;for(;n<e.length;){let i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[n++];t[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[n++],B=e[n++],u=e[n++],c=((i&7)<<18|(o&63)<<12|(B&63)<<6|u&63)-q.MIN_SUPPLEMENTARY_CODE_POINT;t[s++]=String.fromCharCode(q.MIN_HIGH_SURROGATE+(c>>10)),t[s++]=String.fromCharCode(q.MIN_LOW_SURROGATE+(c&1023))}else{let o=e[n++],B=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|B&63)}}return t.join("")}}},M(Ee,"METACHARACTERS","\\.+*?()|[]{}^$"),M(Ee,"EMPTY_BEGIN_LINE",1),M(Ee,"EMPTY_END_LINE",2),M(Ee,"EMPTY_BEGIN_TEXT",4),M(Ee,"EMPTY_END_TEXT",8),M(Ee,"EMPTY_WORD_BOUNDARY",16),M(Ee,"EMPTY_NO_WORD_BOUNDARY",32),M(Ee,"EMPTY_ALL",-1),Ee);const iC=(r=[],e=0)=>{const t=Object.create(null);for(let n=0;n<r.length;n++){const s=r[n],i=e+n;t[s]=i,t[i]=s}return Object.freeze(t)};var _n,tr=(_n=class{getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===_n.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===_n.Encoding.UTF_16}},M(_n,"Encoding",iC(["UTF_16","UTF_8"])),_n),Hc=class extends tr{constructor(r=null){super(),this.bytes=r}getEncoding(){return tr.Encoding.UTF_8}asCharSequence(){return W.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},am=class extends tr{constructor(r=null){super(),this.charSequence=r}getEncoding(){return tr.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return W.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},zn=class{static utf16(r){return new am(r)}static utf8(r){return W.isByteArray(r)?new Hc(r):new Hc(W.stringToUtf8ByteArray(r))}},Xe=class{static EOF(){return-8}constructor(){this.end=0}canCheckPrefix(){return!0}endPos(){return this.end}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},Bm=class extends Xe{constructor(r,e=0,t=r.length){super(),this.bytes=r,this.start=e,this.end=t}hasString(r,e){const t=r.bytes;if(t.length===0)return!0;const n=this.indexOf(this.bytes,t,this.start+e);return n!==-1&&n<=this.end-t.length}hasAnyString(r,e){return r.ac8?r.ac8.searchUTF8(this.bytes,this.start+e,this.end):!1}step(r){if(r+=this.start,r>=this.end)return Xe.EOF();const e=this.bytes[r]&255;if(e<128)return e<<3|1;if(e>=194&&e<=223&&r+1<this.end){const t=this.bytes[r+1]&255;return(t&192)!==128?e<<3|1:((e&31)<<6|t&63)<<3|2}else if(e>=224&&e<=239&&r+2<this.end){const t=this.bytes[r+1]&255;if((t&192)!==128)return e<<3|1;const n=this.bytes[r+2]&255;return(n&192)!==128?e<<3|1:((e&15)<<12|(t&63)<<6|n&63)<<3|3}else if(e>=240&&e<=244&&r+3<this.end){const t=this.bytes[r+1]&255;if((t&192)!==128)return e<<3|1;const n=this.bytes[r+2]&255;if((n&192)!==128)return e<<3|1;const s=this.bytes[r+3]&255;return(s&192)!==128?e<<3|1:((e&7)<<18|(t&63)<<12|(n&63)<<6|s&63)<<3|4}else return e<<3|1}index(r,e){e+=this.start;const t=this.indexOf(this.bytes,r.prefixUTF8,e);return t<0?t:t-e}context(r){r+=this.start;let e=-1;if(r>this.start&&r<=this.end){let n=r-1;if(e=this.bytes[n--],e>=128){let s=r-4;for(s<this.start&&(s=this.start);n>=s&&(this.bytes[n]&192)===128;)n--;n<this.start&&(n=this.start),e=this.step(n-this.start)>>3}}const t=r<this.end?this.step(r-this.start)>>3:-1;return W.emptyOpContext(e,t)}indexOf(r,e,t=0){let n=e.length;if(n===0)return t<=this.end?t:-1;const s=e[0];let i=this.end-n;const o=typeof r.indexOf=="function";let B=t;for(;B<=i;){if(o){if(B=r.indexOf(s,B),B===-1||B>i)return-1}else{for(;B<=i&&r[B]!==s;)B++;if(B>i)return-1}let u=!0;for(let c=1;c<n;c++)if(r[B+c]!==e[c]){u=!1;break}if(u)return B;B++}return-1}prefixLength(r){return r.prefixUTF8.length}},um=class extends Xe{constructor(r,e=0,t=r.length){super(),this.charSequence=r,this.start=e,this.end=t}hasString(r,e){const t=this.charSequence.indexOf(r.str,this.start+e);return t!==-1&&t<=this.end-r.str.length}hasAnyString(r,e){return r.ac16?r.ac16.searchUTF16(this.charSequence,this.start+e,this.end):!1}step(r){if(r+=this.start,r>=this.end)return Xe.EOF();const e=this.charSequence.charCodeAt(r);if(e<q.MIN_HIGH_SURROGATE||e>q.MAX_HIGH_SURROGATE||r+1>=this.end)return e<<3|1;const t=this.charSequence.charCodeAt(r+1);return t>=q.MIN_LOW_SURROGATE&&t<=q.MAX_LOW_SURROGATE?(e-q.MIN_HIGH_SURROGATE)*1024+(t-q.MIN_LOW_SURROGATE)+q.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:e<<3|1}index(r,e){e+=this.start;const t=this.charSequence.indexOf(r.prefix,e);return t<0||t>this.end-r.prefix.length?-1:t-e}context(r){r+=this.start;const e=r>this.start&&r<=this.end?this.charSequence.charCodeAt(r-1):-1,t=r<this.end?this.charSequence.charCodeAt(r):-1;return W.emptyOpContext(e,t)}prefixLength(r){return r.prefix.length}},me=class{static fromUTF8(r,e=0,t=r.length){return new Bm(r,e,t)}static fromUTF16(r,e=0,t=r.length){return new um(r,e,t)}},Xs=class extends Error{constructor(r){super(r),this.name="RE2JSException"}},pe=class extends Xs{constructor(r,e=null){let t=`error parsing regexp: ${r}`;e&&(t+=`: \`${e}\``),super(t),this.name="RE2JSSyntaxException",this.message=t,this.error=r,this.input=e}getDescription(){return this.error}getPattern(){return this.input}},cm=class extends Xs{constructor(r){super(r),this.name="RE2JSCompileException"}},tt=class extends Xs{constructor(r){super(r),this.name="RE2JSGroupException"}},lm=class extends Xs{constructor(r){super(r),this.name="RE2JSFlagsException"}},ms=class extends Xs{constructor(r){super(r),this.name="RE2JSInternalException"}},Yn,Uc=(Yn=class{static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(n=>{const s=n.codePointAt(0);return s===O.CODES.get("\\")||s===O.CODES.get("$")?`\\${n}`:n}).join(""):e.indexOf("$")<0?e:e.split("").map(n=>n.codePointAt(0)===O.CODES.get("$")?"$$":n).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const n=this.patternInput.re2();this.patternGroupCount=n.numberOfCapturingGroups(),this.groups=[],this.namedGroups=n.namedGroups,this.numberOfInstructions=n.numberOfInstructions(),t instanceof tr?this.resetMatcherInput(t):W.isByteArray(t)?this.resetMatcherInput(zn.utf8(t)):this.resetMatcherInput(zn.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return e instanceof tr||(W.isByteArray(e)?e=zn.utf8(e):e=zn.utf16(e)),this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new tt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new tt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if(typeof e=="string"){const s=this.namedGroups[e];if(!Number.isFinite(s))throw new tt(`group '${e}' not found`);e=s}const t=this.start(e),n=this.end(e);return t<0&&n<0?null:this.substring(t,n)}getNamedGroups(){if(!this.hasMatch)throw new tt("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new tt(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new tt("perhaps no match attempted");if(e===0||this.hasGroups)return;const t=this.matcherInputLength,n=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!n[0])throw new tt("inconsistency in matching group data");this.groups=n[1],this.hasGroups=!0}matches(){return this.genMatch(0,k.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,k.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new tt(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?me.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):me.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=t&7}return this.genMatch(e,k.UNANCHORED)}genMatch(e,t){const n=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return n[0]?(this.groups=n[1],this.hasMatch=!0,this.hasGroups=this.patternGroupCount===0,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?W.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let n="";const s=this.start(),i=this.end();return this.appendPos<s&&(n+=this.substring(this.appendPos,s)),this.appendPos=i,n+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),n}appendReplacementInternalJava(e){let t="",n=0;const s=e.length;let i=0;for(;i<s;){const o=e.codePointAt(i);if(o===O.CODES.get("\\")){if(n<i&&(t+=e.substring(n,i)),i++,i>=s)throw new tt("character to be escaped is missing");n=i,i++;continue}if(o===O.CODES.get("$")){if(n<i&&(t+=e.substring(n,i)),i+1>=s)throw new tt("Illegal group reference: group index is missing");const B=e.codePointAt(i+1);if(O.CODES.get("0")<=B&&B<=O.CODES.get("9")){let u=B-O.CODES.get("0"),c=i+2;for(;c<s;c++){const f=e.codePointAt(c);if(f<O.CODES.get("0")||f>O.CODES.get("9")||u*10+f-O.CODES.get("0")>this.patternGroupCount)break;u=u*10+f-O.CODES.get("0")}if(u>this.patternGroupCount)throw new tt(`n > number of groups: ${u}`);const C=this.group(u);C!==null&&(t+=C),i=c,n=i}else if(B===O.CODES.get("{")){let u=i+2;for(;u<s&&e.codePointAt(u)!==O.CODES.get("}");)u++;if(u>=s)throw new tt("named capture group is missing trailing '}'");const c=e.substring(i+2,u),C=this.group(c);C!==null&&(t+=C),i=u+1,n=i}else throw new tt("Illegal group reference");continue}i++}return n<s&&(t+=e.substring(n,s)),t}appendReplacementInternalJs(e){let t="",n=0;const s=e.length;for(let i=0;i<s-1;i++)if(e.codePointAt(i)===O.CODES.get("$")){let o=e.codePointAt(i+1);if(O.CODES.get("$")===o){n<i&&(t+=e.substring(n,i)),t+="$",i++,n=i+1;continue}else if(O.CODES.get("&")===o){n<i&&(t+=e.substring(n,i));const B=this.group(0);B!==null?t+=B:t+="$&",i++,n=i+1;continue}else if(O.CODES.get("`")===o){n<i&&(t+=e.substring(n,i)),t+=this.substring(0,this.start(0)),i++,n=i+1;continue}else if(O.CODES.get("'")===o){n<i&&(t+=e.substring(n,i)),t+=this.substring(this.end(0),this.matcherInputLength),i++,n=i+1;continue}else if(O.CODES.get("1")<=o&&o<=O.CODES.get("9")){let B=o-O.CODES.get("0");for(n<i&&(t+=e.substring(n,i)),i+=2;i<s&&(o=e.codePointAt(i),!(o<O.CODES.get("0")||o>O.CODES.get("9")||B*10+o-O.CODES.get("0")>this.patternGroupCount));i++)B=B*10+o-O.CODES.get("0");if(B>this.patternGroupCount){t+=`$${B}`,n=i,i--;continue}const u=this.group(B);u!==null&&(t+=u),n=i,i--;continue}else if(o===O.CODES.get("<")){n<i&&(t+=e.substring(n,i)),i++;let B=i+1;for(;B<e.length&&e.codePointAt(B)!==O.CODES.get(">")&&e.codePointAt(B)!==O.CODES.get(" ");)B++;if(B===e.length||e.codePointAt(B)!==O.CODES.get(">")){t+=e.substring(i-1,B+1),n=B+1,i=B;continue}const u=e.substring(i+1,B);if(Object.prototype.hasOwnProperty.call(this.namedGroups,u)){const c=this.group(u);c!==null&&(t+=c)}else t+=`$<${u}>`;n=B+1,i=B;continue}}return n<s&&(t+=e.substring(n,s)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,n=!1){let s="";this.reset();const i=typeof e=="function",o=Object.keys(this.namedGroups).length>0;let B=null;if(i){if(this.groupCount()>=Yn.MAX_REPLACER_ARGS)throw new tt("Too many capture groups to safely invoke replacer function");B=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(s+=i?this.appendReplacementFunc(e,o,B):this.appendReplacement(e,n),!!t););return s+=this.appendTail(),s}appendReplacementFunc(e,t,n){let s="";const i=this.start(),o=this.end();this.appendPos<i&&(s+=this.substring(this.appendPos,i)),this.appendPos=o;const B=this.buildReplacerArgs(i,t,n);return s+=String(e(...B)),s}buildReplacerArgs(e,t,n){const s=[this.group(0)],i=this.groupCount();for(let o=1;o<=i;o++){const B=this.start(o);B<0?s.push(void 0):s.push(this.substring(B,this.end(o)))}if(s.push(e),s.push(n),t){const o=this.getNamedGroups();for(const B in o)o[B]===null&&(o[B]=void 0);s.push(o)}return s}},M(Yn,"MAX_REPLACER_ARGS",65535),Yn),Be,N=(Be=class{static isRuneOp(e){return Be.RUNE<=e&&e<=Be.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let n of e)t+=W.escapeRune(n);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=[],this.next=null}matchRune(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&k.FOLD_CASE)!==0?q.equalsIgnoreCase(o,e):e===o}const t=this.runes.length;if(t===0)return!1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return!1;if(e<=this.runes[o+1])return!0}return!1}let n=0,s=t>>1;for(;s>1;){const o=s>>1;n+=this.runes[n+o<<1]<=e?o:0,s-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]}matchRunePos(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&k.FOLD_CASE)!==0?q.equalsIgnoreCase(o,e)?0:-1:e===o?0:-1}const t=this.runes.length;if(t===0)return-1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return-1;if(e<=this.runes[o+1])return Math.floor(o/2)}return-1}let n=0,s=t>>1;for(;s>1;){const o=s>>1;n+=this.runes[n+o<<1]<=e?o:0,s-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]?i:-1}toString(){switch(this.op){case Be.ALT:return`alt -> ${this.out}, ${this.arg}`;case Be.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case Be.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case Be.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case Be.MATCH:return`match${this.arg!==0?` ${this.arg}`:""}`;case Be.FAIL:return"fail";case Be.NOP:return`nop -> ${this.out}`;case Be.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case Be.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case Be.RUNE:return this.runes===null?"rune <null>":["rune ",Be.escapeRunes(this.runes),(this.arg&k.FOLD_CASE)!==0?"/i":""," -> ",this.out].join("");case Be.RUNE1:return`rune1 ${Be.escapeRunes(this.runes)} -> ${this.out}`;case Be.RUNE_ANY:return`any -> ${this.out}`;case Be.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},M(Be,"ALT",1),M(Be,"ALT_MATCH",2),M(Be,"CAPTURE",3),M(Be,"EMPTY_WIDTH",4),M(Be,"FAIL",5),M(Be,"MATCH",6),M(Be,"NOP",7),M(Be,"RUNE",8),M(Be,"RUNE1",9),M(Be,"RUNE_ANY",10),M(Be,"RUNE_ANY_NOT_NL",11),M(Be,"LB_WRITE",12),M(Be,"LB_CHECK",13),Be),Jc=class{constructor(r){this.sparse=new Int32Array(r),this.densePcs=new Int32Array(r),this.denseCaps=null,this.size=0,this.ncap=0}init(r){this.ncap=r;const e=this.densePcs.length*r;(!this.denseCaps||this.denseCaps.length<e)&&(this.denseCaps=new Int32Array(e))}contains(r){const e=this.sparse[r];return e<this.size&&this.densePcs[e]===r}isEmpty(){return this.size===0}add(r){const e=this.size++;return this.sparse[r]=e,this.densePcs[e]=r,e}clear(){this.size=0}toString(){let r="{";for(let e=0;e<this.size;e++)e!==0&&(r+=", "),r+=this.densePcs[e];return r+="}",r}},hm=class za{static fromRE2(e){const t=new za;return t.prog=e.prog,t.re2=e,t.q0=new Jc(t.prog.numInst()),t.q1=new Jc(t.prog.numInst()),t.matched=!1,t.matchcap=new Int32Array(t.prog.numCap<2?2:t.prog.numCap),t.ncap=0,t}static fromMachine(e){return za.fromRE2(e.re2)}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return this.ncap===0?W.emptyInts():W.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,n){const s=this.re2.cond;if(s===W.EMPTY_ALL||(n===k.ANCHOR_START||n===k.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap.fill(-1);let i=this.prog.numLb>0?0:t,o=t,B=this.q0,u=this.q1,c=e.step(i),C=c>>3,f=c&7,m=-1,T=0;c!==Xe.EOF()&&(c=e.step(i+f),m=c>>3,T=c&7);let P;for(i===0?P=W.emptyOpContext(-1,C):P=e.context(i);;){if(B.isEmpty()){if((s&W.EMPTY_BEGIN_TEXT)!==0&&i!==0||(n===k.ANCHOR_START||n===k.ANCHOR_BOTH)&&i!==0||this.matched)break;if(this.prog.numLb===0&&this.re2.prefix.length!==0&&m!==this.re2.prefixRune&&e.canCheckPrefix()){const K=e.index(this.re2,i);if(K<0)break;i+=K,c=e.step(i),C=c>>3,f=c&7,c=e.step(i+f),m=c>>3,T=c&7,P=e.context(i)}}if(i===0&&this.prog.numLb>0)for(let K=0;K<this.prog.lbStarts.length;K++)this.add(B,this.prog.lbStarts[K],i,this.matchcap,0,P);!this.matched&&(i===0||n===k.UNANCHORED)&&i>=o&&(this.ncap>0&&(this.matchcap[0]=i),this.add(B,this.prog.start,i,this.matchcap,0,P));const V=i+f;if(P=e.context(V),this.step(B,u,i,V,C,P,n,i===e.endPos()),f===0||this.ncap===0&&this.matched)break;i+=f,C=m,f=T,C!==-1&&(c=e.step(i+f),m=c>>3,T=c&7);const U=B;B=u,u=U}return u.clear(),this.matched}matchSet(e,t,n){const s=this.re2.cond;if(s===W.EMPTY_ALL)return[];if((n===k.ANCHOR_START||n===k.ANCHOR_BOTH)&&t!==0)return[];let i=this.prog.numLb>0?0:t,o=t,B=this.q0,u=this.q1,c=e.step(i),C=c>>3,f=c&7,m=-1,T=0;c!==Xe.EOF()&&(c=e.step(i+f),m=c>>3,T=c&7);let P=i===0?W.emptyOpContext(-1,C):e.context(i);const V=new Set;for(;!(B.isEmpty()&&((s&W.EMPTY_BEGIN_TEXT)!==0&&i!==0||(n===k.ANCHOR_START||n===k.ANCHOR_BOTH)&&i!==0));){if(i===0&&this.prog.numLb>0)for(let re=0;re<this.prog.lbStarts.length;re++)this.add(B,this.prog.lbStarts[re],i,this.matchcap,0,P);(i===0||n===k.UNANCHORED)&&i>=o&&this.add(B,this.prog.start,i,this.matchcap,0,P);const U=i+f;P=e.context(U);for(let re=0;re<B.size;re++){const De=B.densePcs[re],ke=this.prog.inst[De],Ve=re*this.ncap;let ye=!1;switch(ke.op){case N.MATCH:if(n===k.ANCHOR_BOTH&&i!==e.endPos())break;V.add(ke.arg);break;case N.RUNE:ye=ke.matchRune(C);break;case N.RUNE1:ye=C===ke.runes[0];break;case N.RUNE_ANY:ye=!0;break;case N.RUNE_ANY_NOT_NL:ye=C!==10;break;default:continue}ye&&this.add(u,ke.out,U,B.denseCaps,Ve,P)}if(B.clear(),f===0)break;i+=f,C=m,f=T,C!==-1&&(c=e.step(i+f),m=c>>3,T=c&7);const K=B;B=u,u=K}return u.clear(),Array.from(V).sort((U,K)=>U-K)}step(e,t,n,s,i,o,B,u){const c=this.re2.longest;for(let C=0;C<e.size;C++){const f=e.densePcs[C],m=C*this.ncap;if(c&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[m])continue;const T=this.prog.inst[f];let P=!1;switch(T.op){case N.MATCH:if(B===k.ANCHOR_BOTH&&!u)break;if(this.ncap>0&&(!c||!this.matched||this.matchcap[1]<n)){e.denseCaps[m+1]=n;for(let V=0;V<this.ncap;V++)this.matchcap[V]=e.denseCaps[m+V]}c||(e.size=0),this.matched=!0;break;case N.RUNE:P=T.matchRune(i);break;case N.RUNE1:P=i===T.runes[0];break;case N.RUNE_ANY:P=!0;break;case N.RUNE_ANY_NOT_NL:P=i!==10;break;default:continue}P&&this.add(t,T.out,s,e.denseCaps,m,o)}e.clear()}add(e,t,n,s,i,o){for(;;){if(t===0||e.contains(t))return;const B=e.add(t),u=this.prog.inst[t];switch(u.op){case N.FAIL:return;case N.ALT:case N.ALT_MATCH:this.add(e,u.out,n,s,i,o),t=u.arg;continue;case N.EMPTY_WIDTH:if((u.arg&~o)===0){t=u.out;continue}return;case N.NOP:t=u.out;continue;case N.CAPTURE:if(u.arg<this.ncap){const c=s[i+u.arg];s[i+u.arg]=n,this.add(e,u.out,n,s,i,o),s[i+u.arg]=c;return}else{t=u.out;continue}case N.LB_WRITE:this.lbTable[Math.abs(u.arg)]=n,t=u.out;continue;case N.LB_CHECK:if(u.arg>0){if(this.lbTable[u.arg]===n){t=u.out;continue}}else if(this.lbTable[-u.arg]!==n){t=u.out;continue}return;case N.MATCH:case N.RUNE:case N.RUNE1:case N.RUNE_ANY:case N.RUNE_ANY_NOT_NL:if(this.ncap>0){const c=B*this.ncap;for(let C=0;C<this.ncap;C++)e.denseCaps[c+C]=s[i+C]}return;default:throw new ms("unhandled")}}}};const jc=r=>{let e=-2128831035;for(let t=0;t<r.length;t++)e^=r[t],e=Math.imul(e,16777619);return e},Cm=(r,e)=>{if(r.length!==e.length)return!1;for(let t=0;t<r.length;t++)if(r[t]!==e[t])return!1;return!0};var fm=class{constructor(r,e,t=[]){this.nfaStates=r,this.isMatch=e,this.matchIDs=t,this.nextLatin1=new Array(q.MAX_LATIN1+1).fill(null),this.nextLatin1Anchored=new Array(q.MAX_LATIN1+1).fill(null),this.transKeys=[],this.transVals=[],this.lastSeen=0}},jt,dm=(jt=class{constructor(e,t=8388608){this.prog=e,this.stateCache=new Map,this.stateCount=0,this.startState=null,this.stateLimit=Math.max(1,Math.floor(t/jt.STATE_MEMORY_ESTIMATE)),this.cacheClears=0,this.failed=!1,this.clock=0}computeClosure(e){const t=new Set,n=[...e];let s=!1;const i=[];for(;n.length>0;){const B=n.pop();if(t.has(B))continue;t.add(B);const u=this.prog.getInst(B);switch(u.op){case N.MATCH:s=!0,i.includes(u.arg)||i.push(u.arg);break;case N.ALT:case N.ALT_MATCH:n.push(u.out),n.push(u.arg);break;case N.NOP:case N.CAPTURE:n.push(u.out);break;case N.EMPTY_WIDTH:case N.LB_WRITE:case N.LB_CHECK:return null}}const o=Int32Array.from(t).sort();return i.sort((B,u)=>B-u),{pcs:o,isMatch:s,matchIDs:i}}getState(e){const t=this.computeClosure(e);if(!t)return null;const n=t.pcs,s=jc(n);let i=this.stateCache.get(s);if(i)for(let B=0;B<i.length;B++){const u=i[B];if(Cm(u.nfaStates,n))return u.lastSeen=++this.clock,u}else i=[],this.stateCache.set(s,i);if(this.failed)return null;if(this.stateCount>=this.stateLimit){if(this.cacheClears++,this.cacheClears>=jt.MAX_CACHE_CLEARS)return this.failed=!0,this.stateCache.clear(),this.stateCount=0,this.startState=null,null;this.evictCache(),i=this.stateCache.get(s),i||(i=[],this.stateCache.set(s,i))}const o=new fm(n,t.isMatch,t.matchIDs);return o.lastSeen=++this.clock,i.push(o),this.stateCount++,o}evictCache(){const e=[];for(const o of this.stateCache.values())for(let B=0;B<o.length;B++)e.push(o[B]);e.sort((o,B)=>o.lastSeen-B.lastSeen);const t=Math.max(1,Math.floor(this.stateLimit/2)),n=e.length-t,s=e.slice(n),i=new Set(s);this.stateCache.clear(),this.stateCount=0;for(let o=0;o<s.length;o++){const B=s[o];B.nextLatin1.fill(null),B.nextLatin1Anchored.fill(null),B.transKeys.length=0,B.transVals.length=0;const u=jc(B.nfaStates);let c=this.stateCache.get(u);c||(c=[],this.stateCache.set(u,c)),c.push(B),this.stateCount++}this.startState&&!i.has(this.startState)&&(this.startState=null)}step(e,t,n){if(t<=q.MAX_LATIN1)if(n===k.UNANCHORED){const o=e.nextLatin1[t];if(o!==null)return o}else{const o=e.nextLatin1Anchored[t];if(o!==null)return o}else{const o=t+(n===k.UNANCHORED?0:q.MAX_RUNE+1),B=e.transKeys,u=B.length;for(let c=0;c<u;c++)if(B[c]===o)return e.transVals[c]}const s=[];for(let o=0;o<e.nfaStates.length;o++){const B=e.nfaStates[o],u=this.prog.getInst(B);N.isRuneOp(u.op)&&u.matchRune(t)&&s.push(u.out)}n===k.UNANCHORED&&s.push(this.prog.start);const i=this.getState(s);if(t<=q.MAX_LATIN1)n===k.UNANCHORED?e.nextLatin1[t]=i:e.nextLatin1Anchored[t]=i;else{const o=t+(n===k.UNANCHORED?0:q.MAX_RUNE+1);e.transKeys.push(o),e.transVals.push(i)}return i}match(e,t,n){if((n===k.ANCHOR_START||n===k.ANCHOR_BOTH)&&t!==0)return!1;if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let s=e.endPos(),i=this.startState;if(i.isMatch)if(n===k.ANCHOR_BOTH){if(t===s)return!0}else return!0;let o=t;for(;o<s;){const B=e.step(o),u=B>>3,c=B&7;if(c===0)break;if(i=n===k.UNANCHORED&&u<=q.MAX_LATIN1&&i.nextLatin1[u]||this.step(i,u,n),i===null)return null;if(i.lastSeen=++this.clock,i.isMatch)if(n===k.ANCHOR_BOTH){if(o+c===s)return!0}else return!0;if(i.nfaStates.length===0&&n!==k.UNANCHORED)return!1;o+=c}return!1}matchSet(e,t,n){if((n===k.ANCHOR_START||n===k.ANCHOR_BOTH)&&t!==0)return[];if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let s=e.endPos(),i=this.startState;const o=new Set,B=(c,C)=>{c.isMatch&&(n===k.ANCHOR_BOTH?C===s&&c.matchIDs.forEach(f=>o.add(f)):c.matchIDs.forEach(f=>o.add(f)))};B(i,t);let u=t;for(;u<s;){const c=e.step(u),C=c>>3,f=c&7;if(f===0)break;if(i=n===k.UNANCHORED&&C<=q.MAX_LATIN1&&i.nextLatin1[C]||this.step(i,C,n),i===null)return null;if(i.lastSeen=++this.clock,u+=f,B(i,u),i.nfaStates.length===0&&n!==k.UNANCHORED)break}return Array.from(o).sort((c,C)=>c-C)}},M(jt,"MAX_CACHE_CLEARS",5),M(jt,"STATE_MEMORY_ESTIMATE",838),jt);const pm=32,gm=500,Ta=256,mm=256*1024;var Em=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(Ta),this.jobArg=new Uint8Array(Ta),this.jobPos=new Int32Array(Ta),this.jobLen=0,this.visited=new Uint32Array(0)}reset(r,e,t){this.end=e,this.jobLen=0,this.ncap=t;const n=r.numInst()*(e+1)+pm-1>>>5;this.visited.length<n?this.visited=new Uint32Array(n):this.visited.fill(0,0,n),this.cap.length<t?this.cap=new Int32Array(t).fill(-1):this.cap.fill(-1,0,t),this.matchcap.length<t?this.matchcap=new Int32Array(t).fill(-1):this.matchcap.fill(-1,0,t)}shouldVisit(r,e){const t=r*(this.end+1)+e,n=t>>>5,s=1<<(t&31);return(this.visited[n]&s)!==0?!1:(this.visited[n]|=s,!0)}push(r,e,t,n){if(r.prog.getInst(e).op!==N.FAIL&&(n||this.shouldVisit(e,t))){if(this.jobLen>=this.jobPc.length){const s=this.jobPc.length*2,i=new Int32Array(s);i.set(this.jobPc),this.jobPc=i;const o=new Uint8Array(s);o.set(this.jobArg),this.jobArg=o;const B=new Int32Array(s);B.set(this.jobPos),this.jobPos=B}this.jobPc[this.jobLen]=e,this.jobArg[this.jobLen]=n?1:0,this.jobPos[this.jobLen]=t,this.jobLen++}}tryBacktrack(r,e,t,n,s){const i=r.longest;for(this.push(r,t,n,!1);this.jobLen>0;){this.jobLen--;let o=this.jobPc[this.jobLen],B=this.jobArg[this.jobLen]===1,u=this.jobPos[this.jobLen],c=!0;for(;!(!c&&!this.shouldVisit(o,u));){c=!1;const C=r.prog.getInst(o);switch(C.op){case N.FAIL:throw new ms("unexpected InstFail");case N.ALT:if(B){B=!1,o=C.arg;continue}else{this.push(r,o,u,!0),o=C.out;continue}case N.ALT_MATCH:{const f=r.prog.getInst(C.out);if(N.isRuneOp(f.op)){this.push(r,C.arg,u,!1),o=C.arg,u=this.end;continue}this.push(r,C.out,this.end,!1),o=C.out;continue}case N.RUNE:{const f=e.step(u);if(f===Xe.EOF()||!C.matchRune(f>>3))break;u+=f&7,o=C.out;continue}case N.RUNE1:{const f=e.step(u);if(f===Xe.EOF()||f>>3!==C.runes[0])break;u+=f&7,o=C.out;continue}case N.RUNE_ANY_NOT_NL:{const f=e.step(u);if(f===Xe.EOF()||f>>3===10)break;u+=f&7,o=C.out;continue}case N.RUNE_ANY:{const f=e.step(u);if(f===Xe.EOF())break;u+=f&7,o=C.out;continue}case N.CAPTURE:if(B){this.cap[C.arg]=u;break}else{C.arg<this.ncap&&(this.push(r,o,this.cap[C.arg],!0),this.cap[C.arg]=u),o=C.out;continue}case N.EMPTY_WIDTH:{const f=e.context(u);if((C.arg&~f)!==0)break;o=C.out;continue}case N.NOP:o=C.out;continue;case N.MATCH:{if(s===k.ANCHOR_BOTH&&u!==this.end)break;if(this.ncap===0)return!0;this.ncap>1&&(this.cap[1]=u);const f=this.matchcap[1];if((f===-1||i&&u>0&&u>f)&&this.matchcap.set(this.cap),!i||u===this.end)return!0;break}case N.LB_WRITE:case N.LB_CHECK:throw new ms("Backtracker cannot evaluate Lookbehind instructions");default:throw new ms("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const bi=[];var Oi=class oC{static shouldBacktrack(e){return e.numInst()<=gm}static maxBitStateLen(e){return oC.shouldBacktrack(e)?Math.floor(mm/e.numInst()):0}static execute(e,t,n,s,i){const o=e.cond;if(o===W.EMPTY_ALL||(s===k.ANCHOR_START||s===k.ANCHOR_BOTH)&&n!==0||(o&W.EMPTY_BEGIN_TEXT)!==0&&n!==0)return null;const B=bi.length>0?bi.pop():new Em,u=t.endPos();B.reset(e.prog,u,i);let c=!1;if((o&W.EMPTY_BEGIN_TEXT)!==0||s===k.ANCHOR_START||s===k.ANCHOR_BOTH)B.ncap>0&&(B.cap[0]=n),B.tryBacktrack(e,t,e.prog.start,n,s)&&(c=!0);else{let f=-1;for(;n<=u&&f!==0;n+=f){if(e.prefix.length>0){const T=t.index(e,n);if(T<0)break;n+=T}if(B.ncap>0&&(B.cap[0]=n),B.tryBacktrack(e,t,e.prog.start,n,s)){c=!0;break}const m=t.step(n);f=m===Xe.EOF()?0:m&7}}if(!c)return bi.push(B),null;const C=i===0?[]:W.toArray(B.matchcap.subarray(0,i));return bi.push(B),C}},qc=class{constructor(r){this.sparse=new Uint32Array(r),this.dense=new Uint32Array(r),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(r){return r<this.sparse.length&&this.sparse[r]<this.size&&this.dense[this.sparse[r]]===r}insert(r){this.contains(r)||this.insertNew(r)}insertNew(r){r>=this.sparse.length||(this.sparse[r]=this.size,this.dense[this.size]=r,this.size++)}};const _m=(r,e,t,n)=>{const s=r.length,i=e.length;let o=0,B=0;const u=[],c=[];let C=!0,f=-1;const m=T=>{const P=T?r:e,V=T?o:B,U=T?t:n;return f>0&&P[V]<=u[f]?!1:(u.push(P[V],P[V+1]),T?o+=2:B+=2,f+=2,c.push(U),!0)};for(;o<s||B<i;)if(B>=i?C=m(!0):o>=s||e[B]<r[o]?C=m(!1):C=m(!0),!C)return null;return{merged:u,next:c}};var Dm=class{constructor(r){this.start=r.start,this.numCap=r.numCap,this.inst=new Array(r.inst.length);for(let e=0;e<r.inst.length;e++){const t=r.inst[e],n=new N(t.op);n.out=t.out,n.arg=t.arg,n.runes=t.runes?t.runes.slice():[],n.next=null,this.inst[e]=n}}};const Im=r=>{const e=new Dm(r);for(let t=0;t<e.inst.length;t++){const n=e.inst[t];if(n.op!==N.ALT&&n.op!==N.ALT_MATCH)continue;let s="out",i="arg",o=e.inst[n[i]];if(o.op!==N.ALT&&o.op!==N.ALT_MATCH&&(s="arg",i="out",o=e.inst[n[i]],o.op!==N.ALT&&o.op!==N.ALT_MATCH))continue;const B=e.inst[n[s]];if(B.op===N.ALT||B.op===N.ALT_MATCH)continue;let u="out",c="arg",C=!1;o.out===t?C=!0:o.arg===t&&(C=!0,u="arg",c="out"),C&&(o[u]=n[s]),n[s]===o[u]&&(n[i]=o[c])}return e},wm=r=>{if(r.inst.length>=1e3)return null;const e=new qc(r.inst.length),t=new qc(r.inst.length),n=new Array(r.inst.length),s=new Array(r.inst.length).fill(!1),i=o=>{let B=!0;const u=r.inst[o];if(t.contains(o))return!0;switch(t.insert(o),u.op){case N.ALT:case N.ALT_MATCH:{B=i(u.out)&&i(u.arg);let c=s[u.out],C=s[u.arg];if(c&&C)return!1;if(C){const P=u.out;u.out=u.arg,u.arg=P;const V=c;c=C,C=V}c&&(s[o]=!0,u.op=N.ALT_MATCH);const f=n[u.out]||[],m=n[u.arg]||[],T=_m(f,m,u.out,u.arg);if(!T)return!1;n[o]=T.merged,u.next=new Uint32Array(T.next);break}case N.CAPTURE:case N.EMPTY_WIDTH:case N.NOP:B=i(u.out),s[o]=s[u.out],n[o]=n[u.out]?n[u.out].slice():[],u.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(u.out);break;case N.MATCH:case N.FAIL:s[o]=u.op===N.MATCH;break;case N.RUNE:{if(s[o]=!1,u.next&&u.next.length>0)break;if(e.insert(u.out),!u.runes||u.runes.length===0){n[o]=[],u.next=new Uint32Array([u.out]);break}let c=[];if(u.runes.length===1&&(u.arg&k.FOLD_CASE)!==0){const C=u.runes[0];c.push(C,C);for(let f=q.simpleFold(C);f!==C;f=q.simpleFold(f))c.push(f,f);c.sort((f,m)=>f-m)}else for(let C=0;C<u.runes.length;C++)c.push(u.runes[C]);n[o]=c,u.next=new Uint32Array(Math.floor(c.length/2)+1).fill(u.out),u.op=N.RUNE;break}case N.RUNE1:{if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out);let c=[];if((u.arg&k.FOLD_CASE)!==0){const C=u.runes[0];c.push(C,C);for(let f=q.simpleFold(C);f!==C;f=q.simpleFold(f))c.push(f,f);c.sort((f,m)=>f-m)}else c.push(u.runes[0],u.runes[0]);n[o]=c,u.next=new Uint32Array(Math.floor(c.length/2)+1).fill(u.out),u.op=N.RUNE;break}case N.RUNE_ANY:if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out),n[o]=[0,q.MAX_RUNE],u.next=new Uint32Array([u.out]);break;case N.RUNE_ANY_NOT_NL:if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out),n[o]=[0,9,11,q.MAX_RUNE],u.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(u.out);break}return B};for(e.clear(),e.insert(r.start);!e.empty();)if(t.clear(),!i(e.next()))return null;for(let o=0;o<r.inst.length;o++)n[o]&&(r.inst[o].runes=n[o]);return r},ym=(r,e)=>{for(let t=0;t<e.inst.length;t++){const n=e.inst[t];switch(n.op){case N.ALT:case N.ALT_MATCH:case N.RUNE:break;case N.CAPTURE:case N.EMPTY_WIDTH:case N.NOP:case N.MATCH:case N.FAIL:r.inst[t].next=null;break;case N.RUNE1:case N.RUNE_ANY:case N.RUNE_ANY_NOT_NL:r.inst[t].next=null,r.inst[t].op=n.op,r.inst[t].runes=n.runes?n.runes.slice():[];break}}};var Kc=class aC{static compile(e){if(e.start===0||e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==N.EMPTY_WIDTH||(t.arg&W.EMPTY_BEGIN_TEXT)===0)return null;let n=!1;for(let i=0;i<e.inst.length;i++)if(e.inst[i].op===N.ALT||e.inst[i].op===N.ALT_MATCH){n=!0;break}for(let i=0;i<e.inst.length;i++){const o=e.inst[i],B=e.inst[o.out].op;switch(o.op){case N.ALT:case N.ALT_MATCH:if(B===N.MATCH||e.inst[o.arg].op===N.MATCH)return null;break;case N.EMPTY_WIDTH:if(B===N.MATCH){if((o.arg&W.EMPTY_END_TEXT)===W.EMPTY_END_TEXT)continue;return null}break;default:if(B===N.MATCH&&n)return null;break}}let s=Im(e);return s=wm(s),s!==null&&ym(s,e),s}static next(e,t){const n=e.matchRunePos(t);return n>=0?e.next[n]:e.op===N.ALT_MATCH?e.out:0}static execute(e,t,n,s,i){const o=e.onepass;if(!o)return null;const B=new Int32Array(i).fill(-1);let u=!1,c=t.step(n),C=c>>3,f=c&7,m=Xe.EOF(),T=-1,P=0;c!==Xe.EOF()&&(m=t.step(n+f),m!==Xe.EOF()&&(T=m>>3,P=m&7));let V=n===0?W.emptyOpContext(-1,C):t.context(n),U=o.start,K;for(;;){switch(K=o.inst[U],U=K.out,K.op){case N.MATCH:return s===k.ANCHOR_BOTH&&n!==t.endPos()?null:(u=!0,B.length>0&&(B[0]=0,B[1]=n),i===0?[]:W.toArray(B));case N.RUNE:if(!K.matchRune(C))return null;break;case N.RUNE1:if(C!==K.runes[0])return null;break;case N.RUNE_ANY:break;case N.RUNE_ANY_NOT_NL:if(C===10)return null;break;case N.ALT:case N.ALT_MATCH:U=aC.next(K,C);continue;case N.FAIL:return null;case N.NOP:continue;case N.EMPTY_WIDTH:if((K.arg&~V)!==0)return null;continue;case N.CAPTURE:K.arg<B.length&&(B[K.arg]=n);continue;default:throw new ms("bad inst")}if(f===0)break;V=W.emptyOpContext(C,T),n+=f,C=T,f=P,C!==-1&&(m=t.step(n+f),m!==Xe.EOF()?(T=m>>3,P=m&7):(T=-1,P=0))}return u?i===0?[]:W.toArray(B):null}},$,w=($=class{static isPseudoOp(e){return e>=$.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===O.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new $(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t.lb=e.lb,t}constructor(e){this.op=e,this.flags=0,this.subs=$.emptySubs(),this.runes=[],this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=$.emptySubs(),this.runes=[],this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case $.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case $.Op.EMPTY_MATCH:e+="(?:)";break;case $.Op.STAR:case $.Op.PLUS:case $.Op.QUEST:case $.Op.REPEAT:{const t=this.subs[0];switch(t.op>$.Op.CAPTURE||t.op===$.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case $.Op.STAR:e+="*";break;case $.Op.PLUS:e+="+";break;case $.Op.QUEST:e+="?";break;case $.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}(this.flags&k.NON_GREEDY)!==0&&(e+="?");break}case $.Op.CONCAT:for(let t of this.subs)t.op===$.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break;case $.Op.ALTERNATE:{let t="";for(let n of this.subs)e+=t,t="|",e+=n.appendTo();break}case $.Op.LITERAL:(this.flags&k.FOLD_CASE)!==0&&(e+="(?i:");for(let t of this.runes)e+=W.escapeRune(t);(this.flags&k.FOLD_CASE)!==0&&(e+=")");break;case $.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case $.Op.ANY_CHAR:e+="(?s:.)";break;case $.Op.PLB:e+=`(?<=${this.subs[0].appendTo()})`;break;case $.Op.NLB:e+=`(?<!${this.subs[0].appendTo()})`;break;case $.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==$.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case $.Op.BEGIN_TEXT:e+="\\A";break;case $.Op.END_TEXT:(this.flags&k.WAS_DOLLAR)!==0?e+="(?-m:$)":e+="\\z";break;case $.Op.BEGIN_LINE:e+="^";break;case $.Op.END_LINE:e+="$";break;case $.Op.WORD_BOUNDARY:e+="\\b";break;case $.Op.NO_WORD_BOUNDARY:e+="\\B";break;case $.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===q.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const n=this.runes[t]+1,s=this.runes[t+1]-1;e+=$.quoteIfHyphen(n),e+=W.escapeRune(n),n!==s&&(e+="-",e+=$.quoteIfHyphen(s),e+=W.escapeRune(s))}}else for(let t=0;t<this.runes.length;t+=2){const n=this.runes[t],s=this.runes[t+1];e+=$.quoteIfHyphen(n),e+=W.escapeRune(n),n!==s&&(e+="-",e+=$.quoteIfHyphen(s),e+=W.escapeRune(s))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===$.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const n=t.maxCap();e<n&&(e=n)}return e}equals(e){if(!(e!==null&&e instanceof $)||this.op!==e.op)return!1;switch(this.op){case $.Op.END_TEXT:if((this.flags&k.WAS_DOLLAR)!==(e.flags&k.WAS_DOLLAR))return!1;break;case $.Op.LITERAL:case $.Op.CHAR_CLASS:if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break;case $.Op.ALTERNATE:case $.Op.CONCAT:if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break;case $.Op.STAR:case $.Op.PLUS:case $.Op.QUEST:if((this.flags&k.NON_GREEDY)!==(e.flags&k.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break;case $.Op.REPEAT:if((this.flags&k.NON_GREEDY)!==(e.flags&k.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break;case $.Op.CAPTURE:if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break;case $.Op.PLB:case $.Op.NLB:if(this.lb!==e.lb||!this.subs[0].equals(e.subs[0]))return!1;break}return!0}},M($,"Op",iC(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"])),$),zc=class{constructor(r){this.next=[Object.create(null)],this.fail=[0],this.match=[!1];for(const t of r){let n=0;for(let s=0;s<t.length;s++){const i=t[s];i in this.next[n]||(this.next.push(Object.create(null)),this.fail.push(0),this.match.push(!1),this.next[n][i]=this.next.length-1),n=this.next[n][i]}this.match[n]=!0}const e=[];for(const t in this.next[0])if(Object.prototype.hasOwnProperty.call(this.next[0],t)){const n=this.next[0][t];this.fail[n]=0,e.push(n)}for(;e.length>0;){const t=e.shift();for(const n in this.next[t])if(Object.prototype.hasOwnProperty.call(this.next[t],n)){const s=this.next[t][n];let i=this.fail[t];for(;i!==0&&!(n in this.next[i]);)i=this.fail[i];n in this.next[i]?this.fail[s]=this.next[i][n]:this.fail[s]=0,this.match[s]=this.match[s]||this.match[this.fail[s]],e.push(s)}}}searchUTF16(r,e,t){let n=0;for(let s=e;s<t;s++){const i=r.charCodeAt(s);for(;n!==0&&!(i in this.next[n]);)n=this.fail[n];if(i in this.next[n]&&(n=this.next[n][i]),this.match[n])return!0}return!1}searchUTF8(r,e,t){let n=0;for(let s=e;s<t;s++){const i=r[s];for(;n!==0&&!(i in this.next[n]);)n=this.fail[n];if(i in this.next[n]&&(n=this.next[n][i]),this.match[n])return!0}return!1}},Ft,le=(Ft=class{constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.ac16=null,this.ac8=null}eval(e,t){switch(this.type){case Ft.Type.NONE:return!0;case Ft.Type.EXACT:return e.hasString(this,t);case Ft.Type.AND:for(let n=0;n<this.subs.length;n++)if(!this.subs[n].eval(e,t))return!1;return!0;case Ft.Type.OR:if(this.ac16&&this.ac8)return e.hasAnyString(this,t);for(let n=0;n<this.subs.length;n++)if(this.subs[n].eval(e,t))return!0;return!1;default:return!0}}},M(Ft,"Type",{NONE:0,EXACT:1,AND:2,OR:3}),Ft),Tm=class Jt{static build(e){const t=Jt.fromRegexp(e);return Jt.simplify(t)}static fromRegexp(e){if(!e)return new le(le.Type.NONE);switch(e.op){case w.Op.PLB:case w.Op.NLB:case w.Op.NO_MATCH:case w.Op.EMPTY_MATCH:case w.Op.BEGIN_LINE:case w.Op.END_LINE:case w.Op.BEGIN_TEXT:case w.Op.END_TEXT:case w.Op.WORD_BOUNDARY:case w.Op.NO_WORD_BOUNDARY:case w.Op.CHAR_CLASS:case w.Op.ANY_CHAR_NOT_NL:case w.Op.ANY_CHAR:return new le(le.Type.NONE);case w.Op.LITERAL:{if(e.runes.length===0||(e.flags&k.FOLD_CASE)!==0)return new le(le.Type.NONE);const t=new le(le.Type.EXACT);let n="";for(let s=0;s<e.runes.length;s++)n+=String.fromCodePoint(e.runes[s]);return t.str=n,t.bytes=W.stringToUtf8ByteArray(t.str),t}case w.Op.CAPTURE:case w.Op.PLUS:return Jt.fromRegexp(e.subs[0]);case w.Op.REPEAT:return e.min>=1?Jt.fromRegexp(e.subs[0]):new le(le.Type.NONE);case w.Op.CONCAT:{const t=new le(le.Type.AND);for(const n of e.subs)t.subs.push(Jt.fromRegexp(n));return t}case w.Op.ALTERNATE:{const t=new le(le.Type.OR);for(const n of e.subs)t.subs.push(Jt.fromRegexp(n));return t}default:return new le(le.Type.NONE)}}static simplify(e){if(e.type===le.Type.EXACT||e.type===le.Type.NONE)return e;if(e.type===le.Type.AND){const t=[];for(const n of e.subs){const s=Jt.simplify(n);if(s.type!==le.Type.NONE)if(s.type===le.Type.AND)for(let i=0;i<s.subs.length;i++)t.push(s.subs[i]);else t.push(s)}return t.length===0?new le(le.Type.NONE):t.length===1?t[0]:(e.subs=t,e)}if(e.type===le.Type.OR){const t=[];for(const o of e.subs){const B=Jt.simplify(o);if(B.type===le.Type.NONE)return new le(le.Type.NONE);if(B.type===le.Type.OR)for(let u=0;u<B.subs.length;u++)t.push(B.subs[u]);else t.push(B)}if(t.length===0)return new le(le.Type.NONE);if(t.length===1)return t[0];const n=new Set,s=[];for(const o of t)o.type===le.Type.EXACT?n.has(o.str)||(n.add(o.str),s.push(o)):s.push(o);e.subs=s;let i=!0;for(const o of s)if(o.type!==le.Type.EXACT){i=!1;break}return i&&s.length>1&&(e.ac16=new zc(s.map(o=>{const B=[];for(let u=0;u<o.str.length;u++)B.push(o.str.charCodeAt(u));return B})),e.ac8=new zc(s.map(o=>o.bytes))),e}return e}},Et=class{constructor(r=0,e=0){this.head=r,this.tail=e}},Am=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0}getInst(r){return this.inst[r]}numInst(){return this.inst.length}addInst(r){this.inst.push(new N(r))}skipNop(r){let e=this.inst[r];for(;e.op===N.NOP||e.op===N.CAPTURE;)e=this.inst[r],r=e.out;return e}prefix(){let r="",e=this.skipNop(this.start);if(!N.isRuneOp(e.op)||e.runes.length!==1)return[e.op===N.MATCH,r];for(;N.isRuneOp(e.op)&&e.runes.length===1&&(e.arg&k.FOLD_CASE)===0;)r+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===N.MATCH,r]}startCond(){let r=0,e=this.start;e:for(;;){const t=this.inst[e];switch(t.op){case N.EMPTY_WIDTH:r|=t.arg;break;case N.FAIL:return-1;case N.CAPTURE:case N.NOP:break;default:break e}e=t.out}return r}patch(r,e){let t=r.head;for(;t!==0;){const n=this.inst[t>>1];(t&1)===0?(t=n.out,n.out=e):(t=n.arg,n.arg=e)}}append(r,e){if(r.head===0)return e;if(e.head===0)return r;const t=this.inst[r.tail>>1];return(r.tail&1)===0?t.out=e.head:t.arg=e.head,new Et(r.head,e.tail)}toString(){let r="";for(let e=0;e<this.inst.length;e++){const t=r.length;r+=e,e===this.start&&(r+="*"),r+="        ".substring(r.length-t),r+=this.inst[e],r+=`
`}return r}},Ni=class{constructor(r=0,e=new Et,t=!1){this.i=r,this.out=e,this.nullable=t}},Rm=class mr{static ANY_RUNE_NOT_NL(){return[0,O.CODES.get(`
`)-1,O.CODES.get(`
`)+1,q.MAX_RUNE]}static ANY_RUNE(){return[0,q.MAX_RUNE]}static compileRegexp(e){const t=new mr,n=t.compile(e);return t.prog.patch(n.out,t.newInst(N.MATCH).i),t.prog.start=n.i,t.prog}static compileSet(e){const t=new mr;if(e.length===0)return t.prog.start=t.newInst(N.FAIL).i,t.prog;let n=[];for(let i=0;i<e.length;i++){const o=t.compile(e[i]),B=t.newInst(N.MATCH);t.prog.getInst(B.i).arg=i,t.prog.patch(o.out,B.i),n.push(o.i)}let s=n[0];for(let i=1;i<n.length;i++){const o=t.newInst(N.ALT),B=t.prog.getInst(o.i);B.out=s,B.arg=n[i],s=o.i}return t.prog.start=s,t.prog}constructor(){this.prog=new Am,this.newInst(N.FAIL)}newInst(e){return this.prog.addInst(e),new Ni(this.prog.numInst()-1,new Et,!0)}nop(){const e=this.newInst(N.NOP);return e.out=new Et(e.i<<1,e.i<<1),e}fail(){return new Ni}cap(e){const t=this.newInst(N.CAPTURE);return t.out=new Et(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new Ni(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const n=this.newInst(N.ALT),s=this.prog.getInst(n.i);return s.out=e.i,s.arg=t.i,n.out=this.prog.append(e.out,t.out),n.nullable=e.nullable||t.nullable,n}loop(e,t){const n=this.newInst(N.ALT),s=this.prog.getInst(n.i);return t?(s.arg=e.i,n.out=new Et(n.i<<1,n.i<<1)):(s.out=e.i,n.out=new Et(n.i<<1|1,n.i<<1|1)),this.prog.patch(e.out,n.i),n}quest(e,t){const n=this.newInst(N.ALT),s=this.prog.getInst(n.i);return t?(s.arg=e.i,n.out=new Et(n.i<<1,n.i<<1)):(s.out=e.i,n.out=new Et(n.i<<1|1,n.i<<1|1)),n.out=this.prog.append(n.out,e.out),n}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new Ni(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(N.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new Et(t.i<<1,t.i<<1),t}rune(e,t){const n=this.newInst(N.RUNE);n.nullable=!1;const s=this.prog.getInst(n.i);return s.runes=e,t&=k.FOLD_CASE,(e.length!==1||q.simpleFold(e[0])===e[0])&&(t&=-2),s.arg=t,n.out=new Et(n.i<<1,n.i<<1),(t&k.FOLD_CASE)===0&&e.length===1||e.length===2&&e[0]===e[1]?s.op=N.RUNE1:e.length===2&&e[0]===0&&e[1]===q.MAX_RUNE?s.op=N.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===O.CODES.get(`
`)-1&&e[2]===O.CODES.get(`
`)+1&&e[3]===q.MAX_RUNE&&(s.op=N.RUNE_ANY_NOT_NL),n}lookBehind(e,t){const n=this.newInst(N.LB_WRITE);this.prog.getInst(n.i).arg=t;const s=this.rune(mr.ANY_RUNE(),0),i=this.star(s,!0),o=this.cat(i,e);this.prog.patch(o.out,n.i);const B=this.newInst(N.LB_CHECK);return this.prog.getInst(B.i).arg=t,this.prog.lbStarts.push(o.i),Math.abs(t)>this.prog.numLb&&(this.prog.numLb=Math.abs(t)),B.out=new Et(B.i<<1,B.i<<1),B}compile(e){switch(e.op){case w.Op.NO_MATCH:return this.fail();case w.Op.EMPTY_MATCH:return this.nop();case w.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let n of e.runes){const s=this.rune([n],e.flags);t=t===null?s:this.cat(t,s)}return t}case w.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case w.Op.ANY_CHAR_NOT_NL:return this.rune(mr.ANY_RUNE_NOT_NL(),0);case w.Op.ANY_CHAR:return this.rune(mr.ANY_RUNE(),0);case w.Op.BEGIN_LINE:return this.empty(W.EMPTY_BEGIN_LINE);case w.Op.END_LINE:return this.empty(W.EMPTY_END_LINE);case w.Op.BEGIN_TEXT:return this.empty(W.EMPTY_BEGIN_TEXT);case w.Op.END_TEXT:return this.empty(W.EMPTY_END_TEXT);case w.Op.WORD_BOUNDARY:return this.empty(W.EMPTY_WORD_BOUNDARY);case w.Op.NO_WORD_BOUNDARY:return this.empty(W.EMPTY_NO_WORD_BOUNDARY);case w.Op.PLB:case w.Op.NLB:return this.lookBehind(this.compile(e.subs[0]),e.lb);case w.Op.CAPTURE:{const t=this.cap(e.cap<<1),n=this.compile(e.subs[0]),s=this.cap(e.cap<<1|1);return this.cat(this.cat(t,n),s)}case w.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&k.NON_GREEDY)!==0);case w.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&k.NON_GREEDY)!==0);case w.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&k.NON_GREEDY)!==0);case w.Op.CONCAT:if(e.subs.length===0)return this.nop();{let t=null;for(let n of e.subs){const s=this.compile(n);t=t===null?s:this.cat(t,s)}return t}case w.Op.ALTERNATE:if(e.subs.length===0)return this.nop();{let t=null;for(let n of e.subs){const s=this.compile(n);t=t===null?s:this.alt(t,s)}return t}default:throw new cm("regexp: unhandled case in compile")}}},vm=class lt{static simplify(e){if(e===null)return null;switch(e.op){case w.Op.PLB:case w.Op.NLB:case w.Op.CAPTURE:{const t=lt.simplify(e.subs[0]);if(t!==e.subs[0]){const n=w.fromRegexp(e);return n.runes=[],n.subs=[t],n}return e}case w.Op.CONCAT:case w.Op.ALTERNATE:{const t=[];let n=!1;for(let s=0;s<e.subs.length;s++){const i=e.subs[s],o=lt.simplify(i);if(o!==i&&(n=!0),e.op===w.Op.CONCAT){if(o.op===w.Op.NO_MATCH)return new w(w.Op.NO_MATCH);if(o.op===w.Op.EMPTY_MATCH){n=!0;continue}if(o.op===w.Op.CONCAT){n=!0;for(let B=0;B<o.subs.length;B++)t.push(o.subs[B]);continue}}else if(e.op===w.Op.ALTERNATE){if(o.op===w.Op.NO_MATCH){n=!0;continue}if(o.op===w.Op.ALTERNATE){n=!0;for(let B=0;B<o.subs.length;B++)t.push(o.subs[B]);continue}}t.push(o)}if(n){if(t.length===0)return new w(e.op===w.Op.CONCAT?w.Op.EMPTY_MATCH:w.Op.NO_MATCH);if(t.length===1)return t[0];const s=w.fromRegexp(e);return s.runes=[],s.subs=t,s}return e}case w.Op.CHAR_CLASS:return e.runes===null?e:e.runes.length===0?new w(w.Op.NO_MATCH):e.runes.length===2&&e.runes[0]===0&&e.runes[1]===q.MAX_RUNE?new w(w.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===O.CODES.get(`
`)-1&&e.runes[2]===O.CODES.get(`
`)+1&&e.runes[3]===q.MAX_RUNE?new w(w.Op.ANY_CHAR_NOT_NL):e;case w.Op.STAR:case w.Op.PLUS:case w.Op.QUEST:{const t=lt.simplify(e.subs[0]);return lt.simplify1(e.op,e.flags,t,e)}case w.Op.REPEAT:{if(e.min===0&&e.max===0)return new w(w.Op.EMPTY_MATCH);const t=lt.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return lt.simplify1(w.Op.STAR,e.flags,t,null);if(e.min===1)return lt.simplify1(w.Op.PLUS,e.flags,t,null);const s=new w(w.Op.CONCAT),i=[];for(let o=0;o<e.min-1;o++)i.push(t);return i.push(lt.simplify1(w.Op.PLUS,e.flags,t,null)),s.subs=i.slice(0),lt.simplify(s)}if(e.min===1&&e.max===1)return t;let n=null;if(e.min>0){n=[];for(let s=0;s<e.min;s++)n.push(t)}if(e.max>e.min){let s=lt.simplify1(w.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++){const o=new w(w.Op.CONCAT);o.subs=[t,s],s=lt.simplify1(w.Op.QUEST,e.flags,o,null)}if(n===null)return s;n.push(s)}if(n!==null){const s=new w(w.Op.CONCAT);return s.subs=n.slice(0),lt.simplify(s)}return new w(w.Op.NO_MATCH)}}return e}static simplify1(e,t,n,s){if(n.op===w.Op.EMPTY_MATCH)return n;if(n.op===w.Op.NO_MATCH)return e===w.Op.PLUS?n:new w(w.Op.EMPTY_MATCH);if(e===n.op&&(t&k.NON_GREEDY)===(n.flags&k.NON_GREEDY))return n;if(s!==null&&s.op===e&&(s.flags&k.NON_GREEDY)===(t&k.NON_GREEDY)&&n===s.subs[0])return s;const i=new w(e);return i.flags=t,i.subs=[n],i}},ce=class{constructor(r,e){this.sign=r,this.cls=e}};const Qc=[48,57],Wc=[9,10,12,13,32,32],$c=[48,57,65,90,95,95,97,122],Yc=new Map([["\\d",new ce(1,Qc)],["\\D",new ce(-1,Qc)],["\\s",new ce(1,Wc)],["\\S",new ce(-1,Wc)],["\\w",new ce(1,$c)],["\\W",new ce(-1,$c)]]),Xc=[48,57,65,90,97,122],Zc=[65,90,97,122],el=[0,127],tl=[9,9,32,32],nl=[0,31,127,127],rl=[48,57],sl=[33,126],il=[97,122],ol=[32,126],al=[33,47,58,64,91,96,123,126],Bl=[9,13,32,32],ul=[65,90],cl=[48,57,65,90,95,95,97,122],ll=[48,57,65,70,97,102],hl=new Map([["[:alnum:]",new ce(1,Xc)],["[:^alnum:]",new ce(-1,Xc)],["[:alpha:]",new ce(1,Zc)],["[:^alpha:]",new ce(-1,Zc)],["[:ascii:]",new ce(1,el)],["[:^ascii:]",new ce(-1,el)],["[:blank:]",new ce(1,tl)],["[:^blank:]",new ce(-1,tl)],["[:cntrl:]",new ce(1,nl)],["[:^cntrl:]",new ce(-1,nl)],["[:digit:]",new ce(1,rl)],["[:^digit:]",new ce(-1,rl)],["[:graph:]",new ce(1,sl)],["[:^graph:]",new ce(-1,sl)],["[:lower:]",new ce(1,il)],["[:^lower:]",new ce(-1,il)],["[:print:]",new ce(1,ol)],["[:^print:]",new ce(-1,ol)],["[:punct:]",new ce(1,al)],["[:^punct:]",new ce(-1,al)],["[:space:]",new ce(1,Bl)],["[:^space:]",new ce(-1,Bl)],["[:upper:]",new ce(1,ul)],["[:^upper:]",new ce(-1,ul)],["[:word:]",new ce(1,cl)],["[:^word:]",new ce(-1,cl)],["[:xdigit:]",new ce(1,ll)],["[:^xdigit:]",new ce(-1,ll)]]);var cn=class Cn{static charClassToString(e,t){let n="[";for(let s=0;s<t;s+=2){s>0&&(n+=" ");const i=e[s],o=e[s+1];i===o?n+=`0x${i.toString(16)}`:n+=`0x${i.toString(16)}-0x${o.toString(16)}`}return n+="]",n}static cmp(e,t,n,s){const i=e[t]-n;return i!==0?i:s-e[t+1]}static qsortIntPair(e,t,n){const s=((t+n)/2|0)&-2,i=e[s],o=e[s+1];let B=t,u=n;for(;B<=u;){for(;B<n&&Cn.cmp(e,B,i,o)<0;)B+=2;for(;u>t&&Cn.cmp(e,u,i,o)>0;)u-=2;if(B<=u){if(B!==u){let c=e[B];e[B]=e[u],e[u]=c,c=e[B+1],e[B+1]=e[u+1],e[u+1]=c}B+=2,u-=2}}t<u&&Cn.qsortIntPair(e,t,u),B<n&&Cn.qsortIntPair(e,B,n)}constructor(e=W.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;Cn.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const n=this.r[t],s=this.r[t+1];if(n<=this.r[e-1]+1){s>this.r[e-1]&&(this.r[e-1]=s);continue}this.r[e]=n,this.r[e+1]=s,e+=2}return this.len=e,this}appendLiteral(e,t){return(t&k.FOLD_CASE)!==0?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let n=2;n<=4;n+=2)if(this.len>=n){const s=this.r[this.len-n],i=this.r[this.len-n+1];if(e<=i+1&&s<=t+1)return e<s&&(this.r[this.len-n]=e),t>i&&(this.r[this.len-n+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=q.MIN_FOLD&&t>=q.MAX_FOLD)return this.appendRange(e,t);if(t<q.MIN_FOLD||e>q.MAX_FOLD)return this.appendRange(e,t);e<q.MIN_FOLD&&(this.appendRange(e,q.MIN_FOLD-1),e=q.MIN_FOLD),t>q.MAX_FOLD&&(this.appendRange(q.MAX_FOLD+1,t),t=q.MAX_FOLD);for(let n=e;n<=t;n++){this.appendRange(n,n);for(let s=q.simpleFold(n);s!==n;s=q.simpleFold(s))this.appendRange(s,s)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let n=0;n<e.length;n+=2){const s=e[n],i=e[n+1];t<=s-1&&this.appendRange(t,s-1),t=i+1}return t<=q.MAX_RUNE&&this.appendRange(t,q.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const n=e.getLo(t),s=e.getHi(t),i=e.getStride(t);if(i===1){this.appendRange(n,s);continue}for(let o=n;o<=s;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let n=0;n<e.length;++n){const s=e.getLo(n),i=e.getHi(n),o=e.getStride(n);if(o===1){t<=s-1&&this.appendRange(t,s-1),t=i+1;continue}for(let B=s;B<=i;B+=o)t<=B-1&&this.appendRange(t,B-1),t=B+1}return t<=q.MAX_RUNE&&this.appendRange(t,q.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let n=0;n<this.len;n+=2){const s=this.r[n],i=this.r[n+1];e<=s-1&&(this.r[t]=e,this.r[t+1]=s-1,t+=2),e=i+1}return this.len=t,e<=q.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=q.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let n=e.cls;return t&&(n=new Cn().appendFoldedClass(n).cleanClass().toArray()),this.appendClassWithSign(n,e.sign)}toString(){return Cn.charClassToString(this.r,this.len)}},Pm=class{constructor(r){this.str=r,this.position=0}pos(){return this.position}rewindTo(r){this.position=r}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(r){this.position+=r}skipString(r){this.position+=r.length}pop(){const r=this.str.codePointAt(this.position);return this.position+=W.charCount(r),r}lookingAt(r){return this.str.startsWith(r,this.position)}rest(){return this.str.substring(this.position)}from(r){return this.str.substring(r,this.position)}toString(){return this.rest()}},G,Sm=(G=class{static unicodeTable(e){return e==="Any"?{tab:G.ANY_TABLE,fold:G.ANY_TABLE,sign:1}:e==="Ascii"?{tab:G.ASCII_TABLE,fold:G.ASCII_FOLD_TABLE,sign:1}:e==="Assigned"?{tab:nt.CATEGORIES.get("Cn"),fold:nt.CATEGORIES.get("Cn"),sign:-1}:e==="Lc"?{tab:nt.CATEGORIES.get("LC"),fold:nt.FOLD_CATEGORIES.get("LC"),sign:1}:nt.CATEGORIES.has(e)?{tab:nt.CATEGORIES.get(e),fold:nt.FOLD_CATEGORIES.get(e),sign:1}:nt.SCRIPTS.has(e)?{tab:nt.SCRIPTS.get(e),fold:nt.FOLD_SCRIPT.get(e),sign:1}:null}static minFoldRune(e){if(e<q.MIN_FOLD||e>q.MAX_FOLD)return e;let t=e;const n=e;for(e=q.simpleFold(e);e!==n;e=q.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===w.Op.EMPTY_MATCH)return null;if(e.op===w.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===w.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const n=new w(w.Op.LITERAL);return n.flags=t,n.runes=W.stringToRunes(e),n}static parse(e,t){return new G(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const n=G.parseInt(e);if(n===-1||!e.more())return-1;let s;if(!e.lookingAt(","))s=n;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))s=-1;else if((s=G.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),n<0||n>1e3||s===-2||s>1e3||s>=0&&n>s)throw new pe(G.ERR_INVALID_REPEAT_SIZE,e.from(t));return n<<16|s&q.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const n=e.codePointAt(t);if(n!==O.CODES.get("_")&&!W.isalnum(n))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=O.CODES.get("0")&&e.peek()<=O.CODES.get("9");)e.skip(1);const n=e.from(t);return n.length===0||n.length>1&&n.codePointAt(0)===O.CODES.get("0")?-1:n.length>8?-2:parseInt(n,10)}static isCharClass(e){return e.op===w.Op.LITERAL&&e.runes.length===1||e.op===w.Op.CHAR_CLASS||e.op===w.Op.ANY_CHAR_NOT_NL||e.op===w.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case w.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case w.Op.CHAR_CLASS:for(let n=0;n<e.runes.length;n+=2)if(e.runes[n]<=t&&t<=e.runes[n+1])return!0;return!1;case w.Op.ANY_CHAR_NOT_NL:return t!==O.CODES.get(`
`);case w.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case w.Op.ANY_CHAR:break;case w.Op.ANY_CHAR_NOT_NL:G.matchRune(t,O.CODES.get(`
`))&&(e.op=w.Op.ANY_CHAR);break;case w.Op.CHAR_CLASS:t.op===w.Op.LITERAL?e.runes=new cn(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new cn(e.runes).appendClass(t.runes).toArray();break;case w.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=w.Op.CHAR_CLASS,e.runes=new cn().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new pe(G.ERR_TRAILING_BACKSLASH);let n=e.pop();e:switch(n){case O.CODES.get("1"):case O.CODES.get("2"):case O.CODES.get("3"):case O.CODES.get("4"):case O.CODES.get("5"):case O.CODES.get("6"):case O.CODES.get("7"):if(!e.more()||e.peek()<O.CODES.get("0")||e.peek()>O.CODES.get("7"))break;case O.CODES.get("0"):{let s=n-O.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<O.CODES.get("0")||e.peek()>O.CODES.get("7"));i++)s=s*8+e.peek()-O.CODES.get("0"),e.skip(1);return s}case O.CODES.get("x"):{if(!e.more())break;if(n=e.pop(),n===O.CODES.get("{")){let o=0,B=0;for(;;){if(!e.more())break e;if(n=e.pop(),n===O.CODES.get("}"))break;const u=W.unhex(n);if(u<0||(B=B*16+u,B>q.MAX_RUNE))break e;o++}if(o===0)break e;return B}const s=W.unhex(n);if(!e.more())break;n=e.pop();const i=W.unhex(n);if(s<0||i<0)break;return s*16+i}case O.CODES.get("a"):return O.CODES.get("\x07");case O.CODES.get("f"):return O.CODES.get("\f");case O.CODES.get("n"):return O.CODES.get(`
`);case O.CODES.get("r"):return O.CODES.get("\r");case O.CODES.get("t"):return O.CODES.get("	");case O.CODES.get("v"):return O.CODES.get("\v");default:if(n<=q.MAX_ASCII&&!W.isalnum(n))return n;break}throw new pe(G.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new pe(G.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?G.parseEscape(e):e.pop()}static concatRunes(e,t){for(let n=0;n<t.length;n++)e.push(t[n]);return e}static hasCapture(e){if(e===null)return!1;if(e.op===w.Op.CAPTURE)return!0;if(e.subs){for(let t of e.subs)if(G.hasCapture(t))return!0}return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new w(e),this.numRegexp+=1),t}reuse(e){this.height!==null&&this.height.has(e)&&this.height.delete(e),e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(e){if(this.numRunes>G.MAX_RUNES)throw new pe(G.ERR_LARGE);this.checkSize(e),this.checkHeight(e)}checkSize(e){if(this.size===null){if(this.repeats===0&&(this.repeats=1),e.op===w.Op.REPEAT){let t=e.max;t===-1&&(t=e.min),t<=0&&(t=1),t>Math.floor(G.MAX_SIZE/this.repeats)?this.repeats=G.MAX_SIZE:this.repeats*=t}if(this.numRegexp<Math.floor(G.MAX_SIZE/this.repeats))return;this.size=new Map;for(let t of this.stack)this.checkSize(t)}if(this.calcSize(e,!0)>G.MAX_SIZE)throw new pe(G.ERR_LARGE)}calcSize(e,t=!1){if(!t&&this.size!==null&&this.size.has(e))return this.size.get(e);let n=0;switch(e.op){case w.Op.LITERAL:n=e.runes.length;break;case w.Op.PLB:case w.Op.NLB:case w.Op.CAPTURE:case w.Op.STAR:n=2+this.calcSize(e.subs[0]);break;case w.Op.PLUS:case w.Op.QUEST:n=1+this.calcSize(e.subs[0]);break;case w.Op.CONCAT:for(let s of e.subs)n=n+this.calcSize(s);break;case w.Op.ALTERNATE:for(let s of e.subs)n=n+this.calcSize(s);e.subs.length>1&&(n=n+e.subs.length-1);break;case w.Op.REPEAT:{let s=this.calcSize(e.subs[0]);if(e.max===-1){e.min===0?n=2+s:n=1+e.min*s;break}n=e.max*s+(e.max-e.min);break}}return n=Math.max(1,n),this.size===null&&(this.size=new Map),this.size.set(e,n),n}checkHeight(e){if(!(this.numRegexp<G.MAX_HEIGHT)){if(this.height===null){this.height=new Map;for(let t of this.stack)this.checkHeight(t)}if(this.calcHeight(e,!0)>G.MAX_HEIGHT)throw new pe(G.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&this.height!==null&&this.height.has(e))return this.height.get(e);let n=1;for(let s of e.subs){const i=this.calcHeight(s);n<1+i&&(n=1+i)}return this.height===null&&(this.height=new Map),this.height.set(e,n),n}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!w.isPseudoOp(this.stack[t-1].op);)t--;const n=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),n}push(e){if(this.numRunes+=e.runes.length,e.op===w.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=w.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===w.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&q.simpleFold(e.runes[0])===e.runes[2]&&q.simpleFold(e.runes[2])===e.runes[0]||e.op===w.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&q.simpleFold(e.runes[0])===e.runes[1]&&q.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|k.FOLD_CASE))return null;e.op=w.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|k.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){const n=this.stack.length;if(n<2)return!1;const s=this.stack[n-1],i=this.stack[n-2];return s.op!==w.Op.LITERAL||i.op!==w.Op.LITERAL||(s.flags&k.FOLD_CASE)!==(i.flags&k.FOLD_CASE)?!1:(i.runes=G.concatRunes(i.runes,s.runes),e>=0?(s.runes=[e],s.flags=t,!0):(this.pop(),this.reuse(s),!1))}newLiteral(e,t){const n=this.newRegexp(w.Op.LITERAL);return n.flags=t,(t&k.FOLD_CASE)!==0&&(e=G.minFoldRune(e)),n.runes=[e],n}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,n,s,i,o){let B=this.flags;if((B&k.PERL_X)!==0&&(i.more()&&i.lookingAt("?")&&(i.skip(1),B^=k.NON_GREEDY),o!==-1))throw new pe(G.ERR_INVALID_REPEAT_OP,i.from(o));const u=this.stack.length;if(u===0)throw new pe(G.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const c=this.stack[u-1];if(w.isPseudoOp(c.op))throw new pe(G.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const C=this.newRegexp(e);if(C.min=t,C.max=n,C.flags=B,C.subs=[c],this.stack[u-1]=C,this.checkLimits(C),e===w.Op.REPEAT&&(t>=2||n>=2)&&!this.repeatIsValid(C,1e3))throw new pe(G.ERR_INVALID_REPEAT_SIZE,i.from(s))}repeatIsValid(e,t){if(e.op===w.Op.REPEAT){let n=e.max;if(n===0)return!0;if(n<0&&(n=e.min),n>t)return!1;n>0&&(t=Math.trunc(t/n))}for(let n of e.subs)if(!this.repeatIsValid(n,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(w.Op.EMPTY_MATCH)):this.push(this.collapse(e,w.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(w.Op.NO_MATCH)):this.push(this.collapse(e,w.Op.ALTERNATE))}cleanAlt(e){e.op===w.Op.CHAR_CLASS&&(e.runes=new cn(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===q.MAX_RUNE?(e.runes=[],e.op=w.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===O.CODES.get(`
`)-1&&e.runes[2]===O.CODES.get(`
`)+1&&e.runes[3]===q.MAX_RUNE&&(e.runes=[],e.op=w.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let n=0;for(let B of e)n+=B.op===t?B.subs.length:1;let s=new Array(n).fill(null),i=0;for(let B of e)if(B.op===t){for(let u=0;u<B.subs.length;u++)s[i++]=B.subs[u];this.reuse(B)}else s[i++]=B;let o=this.newRegexp(t);if(o.subs=s,t===w.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const B=o;o=o.subs[0],this.reuse(B)}return o}factor(e){if(e.length<2)return e;let t=0,n=e.length,s=0,i=null,o=0,B=0,u=0;for(let C=0;C<=n;C++){let f=null,m=0,T=0;if(C<n){let P=e[t+C];if(P.op===w.Op.CONCAT&&P.subs.length>0&&(P=P.subs[0]),P.op===w.Op.LITERAL&&(f=P.runes,m=P.runes.length,T=P.flags&k.FOLD_CASE),T===B){let V=0;for(;V<o&&V<m&&i[V]===f[V];)V++;if(V>0){o=V;continue}}}if(C!==u)if(C===u+1)e[s++]=e[t+u];else{const P=this.newRegexp(w.Op.LITERAL);P.flags=B,P.runes=i.slice(0,o);for(let K=u;K<C;K++)e[t+K]=this.removeLeadingString(e[t+K],o),this.checkLimits(e[t+K]);const V=this.collapse(e.slice(t+u,t+C),w.Op.ALTERNATE),U=this.newRegexp(w.Op.CONCAT);U.subs=[P,V],e[s++]=U}u=C,i=f,o=m,B=T}n=s,t=0,u=0,s=0;let c=null;for(let C=0;C<=n;C++){let f=null;if(!(C<n&&(f=G.leadingRegexp(e[t+C]),c!==null&&c.equals(f)&&(G.isCharClass(c)||c.op===w.Op.REPEAT&&c.min===c.max&&G.isCharClass(c.subs[0]))))){if(C!==u)if(C===u+1)e[s++]=e[t+u];else{const m=c;for(let V=u;V<C;V++){const U=V!==u;e[t+V]=this.removeLeadingRegexp(e[t+V],U),this.checkLimits(e[t+V])}const T=this.collapse(e.slice(t+u,t+C),w.Op.ALTERNATE),P=this.newRegexp(w.Op.CONCAT);P.subs=[m,T],e[s++]=P}u=C,c=f}}n=s,t=0,u=0,s=0;for(let C=0;C<=n;C++)if(!(C<n&&G.isCharClass(e[t+C]))){if(C!==u)if(C===u+1)e[s++]=e[t+u];else{let f=u;for(let T=u+1;T<C;T++){const P=e[t+f],V=e[t+T];(P.op<V.op||P.op===V.op&&(P.runes!==null?P.runes.length:0)<(V.runes!==null?V.runes.length:0))&&(f=T)}const m=e[t+u];e[t+u]=e[t+f],e[t+f]=m;for(let T=u+1;T<C;T++)G.mergeCharClass(e[t+u],e[t+T]),this.reuse(e[t+T]);this.cleanAlt(e[t+u]),e[s++]=e[t+u]}C<n&&(e[s++]=e[t+C]),u=C+1}n=s,t=0,u=0,s=0;for(let C=0;C<n;++C)C+1<n&&e[t+C].op===w.Op.EMPTY_MATCH&&e[t+C+1].op===w.Op.EMPTY_MATCH||(e[s++]=e[t+C]);return n=s,t=0,e.slice(t,n)}removeLeadingString(e,t){if(e.op===w.Op.CONCAT&&e.subs.length>0){const n=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=n,n.op===w.Op.EMPTY_MATCH)switch(this.reuse(n),e.subs.length){case 0:case 1:e.op=w.Op.EMPTY_MATCH,e.subs=w.emptySubs();break;case 2:{const s=e;e=e.subs[1],this.reuse(s);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===w.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=w.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===w.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=w.Op.EMPTY_MATCH,e.subs=w.emptySubs();break;case 1:{const n=e;e=e.subs[0],this.reuse(n);break}}return e}return t&&this.reuse(e),this.newRegexp(w.Op.EMPTY_MATCH)}parseInternal(){if((this.flags&k.LITERAL)!==0)return G.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,n=-1;const s=new Pm(this.wholeRegexp);for(;s.more();){let i=-1;e:switch(s.peek()){case O.CODES.get("("):if((this.flags&k.LOOKBEHIND)!==0){if(s.lookingAt("(?<=")){this.parsePosLookBehind(),s.skip(4);break}if(s.lookingAt("(?<!")){this.parseNegLookBehind(),s.skip(4);break}}if((this.flags&k.PERL_X)!==0&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(w.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case O.CODES.get("|"):this.parseVerticalBar(),s.skip(1);break;case O.CODES.get(")"):this.parseRightParen(),s.skip(1);break;case O.CODES.get("^"):(this.flags&k.ONE_LINE)!==0?this.op(w.Op.BEGIN_TEXT):this.op(w.Op.BEGIN_LINE),s.skip(1);break;case O.CODES.get("$"):(this.flags&k.ONE_LINE)!==0?this.op(w.Op.END_TEXT).flags|=k.WAS_DOLLAR:this.op(w.Op.END_LINE),s.skip(1);break;case O.CODES.get("."):(this.flags&k.DOT_NL)!==0?this.op(w.Op.ANY_CHAR):this.op(w.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case O.CODES.get("["):this.parseClass(s);break;case O.CODES.get("*"):case O.CODES.get("+"):case O.CODES.get("?"):{i=s.pos();let o=null;switch(s.pop()){case O.CODES.get("*"):o=w.Op.STAR;break;case O.CODES.get("+"):o=w.Op.PLUS;break;case O.CODES.get("?"):o=w.Op.QUEST;break}this.repeat(o,t,n,i,s,e);break}case O.CODES.get("{"):{i=s.pos();const o=G.parseRepeat(s);if(o<0){s.rewindTo(i),this.literal(s.pop());break}t=o>>16,n=(o&q.MAX_BMP)<<16>>16,this.repeat(w.Op.REPEAT,t,n,i,s,e);break}case O.CODES.get("\\"):{const o=s.pos();if(s.skip(1),(this.flags&k.PERL_X)!==0&&s.more())switch(s.pop()){case O.CODES.get("A"):this.op(w.Op.BEGIN_TEXT);break e;case O.CODES.get("b"):this.op(w.Op.WORD_BOUNDARY);break e;case O.CODES.get("B"):this.op(w.Op.NO_WORD_BOUNDARY);break e;case O.CODES.get("C"):throw new pe(G.ERR_INVALID_ESCAPE,"\\C");case O.CODES.get("Q"):{let c=s.rest();const C=c.indexOf("\\E");C>=0?(c=c.substring(0,C),s.skipString(c),s.skipString("\\E")):s.skipString(c);let f=0;for(;f<c.length;){const m=c.codePointAt(f);this.literal(m),f+=W.charCount(m)}break e}case O.CODES.get("z"):this.op(w.Op.END_TEXT);break e;default:s.rewindTo(o);break}else s.rewindTo(o);const B=this.newRegexp(w.Op.CHAR_CLASS);if(B.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){const c=new cn;if(this.parseUnicodeClass(s,c)){B.runes=c.toArray(),this.push(B);break e}}const u=new cn;if(this.parsePerlClassEscape(s,u)){B.runes=u.toArray(),this.push(B);break e}s.rewindTo(o),this.reuse(B),this.literal(G.parseEscape(s));break}default:this.literal(s.pop());break}e=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new pe(G.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),n=e.rest();if(n.startsWith("(?P<")||n.startsWith("(?<")){const B=n.charAt(2)==="P"?4:3,u=n.indexOf(">");if(u<0)throw new pe(G.ERR_INVALID_NAMED_CAPTURE,n);const c=n.substring(B,u);if(e.skipString(c),e.skip(B+1),!G.isValidCaptureName(c))throw new pe(G.ERR_INVALID_NAMED_CAPTURE,n.substring(0,u+1));const C=this.op(w.Op.LEFT_PAREN);if(C.cap=++this.numCap,this.namedGroups[c])throw new pe(G.ERR_DUPLICATE_NAMED_CAPTURE,c);this.namedGroups[c]=this.numCap,C.name=c;return}e.skip(2);let s=this.flags,i=1,o=!1;e:for(;e.more();){const B=e.pop();switch(B){case O.CODES.get("i"):s|=k.FOLD_CASE,o=!0;break;case O.CODES.get("m"):s&=-17,o=!0;break;case O.CODES.get("s"):s|=k.DOT_NL,o=!0;break;case O.CODES.get("U"):s|=k.NON_GREEDY,o=!0;break;case O.CODES.get("-"):if(i<0)break e;i=-1,s=~s,o=!1;break;case O.CODES.get(":"):case O.CODES.get(")"):if(i<0){if(!o)break e;s=~s}B===O.CODES.get(":")&&this.op(w.Op.LEFT_PAREN),this.flags=s;return;default:break e}}throw new pe(G.ERR_INVALID_PERL_OP,e.from(t))}parsePosLookBehind(){const e=this.newRegexp(w.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(w.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(w.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===w.Op.VERTICAL_BAR&&G.isCharClass(this.stack[e-1])&&G.isCharClass(this.stack[e-3])){let t=this.stack[e-1],n=this.stack[e-3];if(t.op>n.op){const s=n;n=t,t=s,this.stack[e-3]=n}return G.mergeCharClass(n,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],n=this.stack[e-2];if(n.op===w.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=n,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new pe(G.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const e=this.pop(),t=this.pop();if(t.op!==w.Op.LEFT_PAREN)throw new pe(G.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=t.flags,t.lb!==0){if(G.hasCapture(e))throw new pe(G.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);t.lb>0?t.op=w.Op.PLB:t.op=w.Op.NLB,t.subs=[e],this.push(t);return}t.cap===0?this.push(e):(t.op=w.Op.CAPTURE,t.subs=[e],this.push(t))}parsePerlClassEscape(e,t){const n=e.pos();if((this.flags&k.PERL_X)===0||!e.more()||e.pop()!==O.CODES.get("\\")||!e.more())return!1;e.pop();const s=e.from(n),i=Yc.has(s)?Yc.get(s):null;return i===null?!1:(t.appendGroup(i,(this.flags&k.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const n=e.rest(),s=n.indexOf(":]");if(s<0)return!1;const i=n.substring(0,s+2);e.skipString(i);const o=hl.has(i)?hl.get(i):null;if(o===null)throw new pe(G.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&k.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const n=e.pos();if((this.flags&k.UNICODE_GROUPS)===0||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let s=1,i=e.pop();if(i===O.CODES.get("P")&&(s=-1),!e.more())throw e.rewindTo(n),new pe(G.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==O.CODES.get("{"))o=W.runeToString(i);else{const C=e.rest(),f=C.indexOf("}");if(f<0)throw e.rewindTo(n),new pe(G.ERR_INVALID_CHAR_RANGE,e.rest());o=C.substring(0,f),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===O.CODES.get("^")&&(s=0-s,o=o.substring(1));const B=G.unicodeTable(o);if(B===null)throw new pe(G.ERR_INVALID_CHAR_RANGE,e.from(n));B.sign<0&&(s=0-s);const u=B.tab,c=B.fold;if((this.flags&k.FOLD_CASE)===0||c===null)t.appendTableWithSign(u,s);else{const C=new cn().appendTable(u).appendTable(c).cleanClass().toArray();t.appendClassWithSign(C,s)}return!0}parseClass(e){const t=e.pos();e.skip(1);const n=this.newRegexp(w.Op.CHAR_CLASS);n.flags=this.flags;const s=new cn;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),(this.flags&k.CLASS_NL)===0&&s.appendRange(O.CODES.get(`
`),O.CODES.get(`
`)));let o=!0;for(;!e.more()||e.peek()!==O.CODES.get("]")||o;){if(e.more()&&e.lookingAt("-")&&(this.flags&k.PERL_X)===0&&!o){const C=e.rest();if(C==="-"||!C.startsWith("-]"))throw e.rewindTo(t),new pe(G.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const B=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,s))continue;e.rewindTo(B)}if(this.parseUnicodeClass(e,s)||this.parsePerlClassEscape(e,s))continue;e.rewindTo(B);const u=G.parseClassChar(e,t);let c=u;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(c=G.parseClassChar(e,t),c<u)throw new pe(G.ERR_INVALID_CHAR_RANGE,e.from(B))}(this.flags&k.FOLD_CASE)===0?s.appendRange(u,c):s.appendFoldedRange(u,c)}e.skip(1),s.cleanClass(),i<0&&s.negateClass(),n.runes=s.toArray(),this.push(n)}},M(G,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),M(G,"ERR_INVALID_CHAR_RANGE","invalid character class range"),M(G,"ERR_INVALID_ESCAPE","invalid escape sequence"),M(G,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),M(G,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),M(G,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),M(G,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),M(G,"ERR_MISSING_BRACKET","missing closing ]"),M(G,"ERR_MISSING_PAREN","missing closing )"),M(G,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),M(G,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),M(G,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name"),M(G,"ERR_UNEXPECTED_PAREN","unexpected )"),M(G,"ERR_NESTING_DEPTH","expression nests too deeply"),M(G,"ERR_LARGE","expression too large"),M(G,"ERR_INVALID_CAPTURE_IN_LOOKBEHIND","invalid capture in lookbehind"),M(G,"MAX_HEIGHT",1e3),M(G,"MAX_SIZE",3355443),M(G,"MAX_RUNES",33554432),M(G,"ANY_TABLE",new p(new Uint32Array([0,q.MAX_RUNE,1]))),M(G,"ASCII_TABLE",new p(new Uint32Array([0,127,1]))),M(G,"ASCII_FOLD_TABLE",new p(new Uint32Array([0,127,1,383,383,1,8490,8490,1]))),G),bm=class qn{static initTest(e){const t=qn.compile(e),n=new qn(t.expr,t.prog,t.numSubexp,t.longest);return n.cond=t.cond,n.prefix=t.prefix,n.prefixUTF8=t.prefixUTF8,n.prefixComplete=t.prefixComplete,n.prefixRune=t.prefixRune,n.prefilter=t.prefilter,n}static compile(e){return qn.compileImpl(e,k.PERL,!1)}static compilePOSIX(e){return qn.compileImpl(e,k.POSIX,!0)}static compileImpl(e,t,n){let s=Sm.parse(e,t);const i=s.maxCap();s=vm.simplify(s);const o=Tm.build(s),B=Rm.compileRegexp(s),u=new qn(e,B,i,n);u.prefilter=o.type===le.Type.NONE?null:o;const[c,C]=B.prefix();return u.prefixComplete=c,u.prefix=C,u.prefixUTF8=W.stringToUtf8ByteArray(u.prefix),u.prefix.length>0&&(u.prefixRune=u.prefix.codePointAt(0)),u.namedGroups=s.namedGroups,u}static match(e,t){return qn.compile(e).match(t)}constructor(e,t,n=0,s=0){this.expr=e,this.prog=t,this.numSubexp=n,this.longest=s,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.machinePool=[],this.dfa=new dm(this.prog),this.onepass=Kc.compile(this.prog),this.prefilter=null}matchPrefixComplete(e,t,n,s){if((n===k.ANCHOR_START||n===k.ANCHOR_BOTH)&&t!==0)return null;let i=-1,o=-1;const B=e.prefixLength(this);if(n===k.UNANCHORED){const u=e.index(this,t);if(u<0)return null;i=t+u,o=i+B}else if(n===k.ANCHOR_BOTH){if(e.endPos()!==B||e.index(this,0)!==0)return null;i=0,o=B}else if(n===k.ANCHOR_START){if(e.index(this,0)!==0)return null;i=0,o=B}if(i<0)return null;if(s>0){const u=new Int32Array(s).fill(-1);return u[0]=i,u[1]=o,Array.from(u)}return[]}executeEngine(e,t,n,s){if(this.prefixComplete&&(s===0||this.numSubexp===0))return this.matchPrefixComplete(e,t,n,s);if(this.prefilter!==null&&n===k.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(this.onepass!==null)return Kc.execute(this,e,t,n,s);if(s>0)return this.prog.numLb===0&&e.endPos()<=Oi.maxBitStateLen(this.prog)?Oi.execute(this,e,t,n,s):this.doExecuteNFA(e,t,n,s);if(this.prog.numLb===0){const i=this.dfa.match(e,t,n);if(i!==null)return i?[]:null;if(e.endPos()<=Oi.maxBitStateLen(this.prog))return Oi.execute(this,e,t,n,s)}return this.doExecuteNFA(e,t,n,s)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,n,s){let i=this.get();i||(i=hm.fromRE2(this)),i.init(s);const o=i.match(e,t,n)?i.submatches():null;return this.put(i),o}match(e){return this.executeEngine(me.fromUTF16(e),0,k.UNANCHORED,0)!==null}matchWithGroup(e,t,n,s,i){return e instanceof tr||(W.isByteArray(e)?e=zn.utf8(e):e=zn.utf16(e)),this.matchMachineInput(e,t,n,s,i)}matchMachineInput(e,t,n,s,i){if(t>n)return[!1,null];const o=e.isUTF16Encoding()?me.fromUTF16(e.asCharSequence(),0,n):me.fromUTF8(e.asBytes(),0,n),B=this.executeEngine(o,t,s,2*i);return B===null?[!1,null]:[!0,B]}matchUTF8(e){return this.executeEngine(me.fromUTF8(e),0,k.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,n){let s=0,i=0,o="";const B=me.fromUTF16(e);let u=0;for(;i<=e.length;){const c=this.executeEngine(B,i,k.UNANCHORED,2);if(c===null||c.length===0)break;o+=e.substring(s,c[0]),(c[1]>s||c[0]===0)&&(o+=t(e.substring(c[0],c[1])),u++),s=c[1];const C=B.step(i)&7;if(i+C>c[1]?i+=C:i+1>c[1]?i++:i=c[1],u>=n)break}return o+=e.substring(s),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let n=new Array(t).fill(-1);for(let s=0;s<e.length;s++)n[s]=e[s];e=n}return e}allMatches(e,t,n=s=>s){let s=[];const i=e.endPos();t<0&&(t=i+1);let o=0,B=0,u=-1;for(;B<t&&o<=i;){const c=this.executeEngine(e,o,k.UNANCHORED,this.prog.numCap);if(c===null||c.length===0)break;let C=!0;if(c[1]===o){c[0]===u&&(C=!1);const f=e.step(o);f<0?o=i+1:o+=f&7}else o=c[1];u=c[1],C&&(s.push(n(this.pad(c))),B++)}return s}findUTF8(e){const t=this.executeEngine(me.fromUTF8(e),0,k.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine(me.fromUTF8(e),0,k.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.executeEngine(me.fromUTF16(e),0,k.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(me.fromUTF16(e),0,k.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine(me.fromUTF8(e),0,k.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let s=0;s<n.length;s++)2*s<t.length&&t[2*s]>=0&&(n[s]=e.slice(t[2*s],t[2*s+1]));return n}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(me.fromUTF8(e),0,k.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine(me.fromUTF16(e),0,k.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let s=0;s<n.length;s++)2*s<t.length&&t[2*s]>=0&&(n[s]=e.substring(t[2*s],t[2*s+1]));return n}findSubmatchIndex(e){return this.pad(this.executeEngine(me.fromUTF16(e),0,k.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const n=this.allMatches(me.fromUTF8(e),t,s=>e.slice(s[0],s[1]));return n.length===0?null:n}findAllUTF8Index(e,t){const n=this.allMatches(me.fromUTF8(e),t,s=>s.slice(0,2));return n.length===0?null:n}findAll(e,t){const n=this.allMatches(me.fromUTF16(e),t,s=>e.substring(s[0],s[1]));return n.length===0?null:n}findAllIndex(e,t){const n=this.allMatches(me.fromUTF16(e),t,s=>s.slice(0,2));return n.length===0?null:n}findAllUTF8Submatch(e,t){const n=this.allMatches(me.fromUTF8(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.slice(s[2*o],s[2*o+1]));return i});return n.length===0?null:n}findAllUTF8SubmatchIndex(e,t){const n=this.allMatches(me.fromUTF8(e),t);return n.length===0?null:n}findAllSubmatch(e,t){const n=this.allMatches(me.fromUTF16(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.substring(s[2*o],s[2*o+1]));return i});return n.length===0?null:n}findAllSubmatchIndex(e,t){const n=this.allMatches(me.fromUTF16(e),t);return n.length===0?null:n}},Om=class Er{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(e){let t="";if(e instanceof RegExp&&(e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e=e.source),typeof e!="string")return e;let n="",s=!1,i=e.length;i===0&&(n="(?:)",s=!0);let o=!1,B=0;for(;B<i;){let c=e[B];if(c==="\\"){if(B+1<i)switch(c=e[B+1],c){case"\\":n+="\\\\",B+=2;continue;case"c":if(B+2<i){let m=e[B+2].charCodeAt(0);if(m>=65&&m<=90||m>=97&&m<=122){let T=m%32;n+="\\x",n+=(T>>4).toString(16).toUpperCase(),n+=(T&15).toString(16).toUpperCase(),B+=3,s=!0;continue}}n+="c",B+=2,s=!0;continue;case"u":if(B+2<i){if(e[B+2]==="{"){let m=B+3,T=!1,P=!1;for(;m<i;){const V=e[m];if(V==="}"){P=!0;break}if(!Er.isHexadecimal(V))break;T=!0,m++}if(P&&T){n+="\\x",B+=2,s=!0;continue}}else if(B+5<i){let m=!0;for(let T=0;T<4;T++)if(!Er.isHexadecimal(e[B+2+T])){m=!1;break}if(m){n+="\\x{"+e.substring(B+2,B+6)+"}",B+=6,s=!0;continue}}}n+="u",B+=2,s=!0;continue;case"x":{let m=!1;if(B+2<i&&e[B+2]==="{"){let T=B+3,P=!1,V=!1;for(;T<i;){const U=e[T];if(U==="}"){V=!0;break}if(!Er.isHexadecimal(U))break;P=!0,T++}V&&P&&(m=!0)}else B+3<i&&Er.isHexadecimal(e[B+2])&&Er.isHexadecimal(e[B+3])&&(m=!0);m?(n+="\\x",B+=2):(n+="x",B+=2,s=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":n+="\\"+c,B+=2;continue;default:{let m=e.codePointAt(B+1);if(m>=48&&m<=57||m>=65&&m<=90||m>=97&&m<=122){let T=W.charCount(m);n+=e.substring(B+1,B+1+T),B+=T+1,s=!0}else{n+="\\";let T=W.charCount(m);n+=e.substring(B+1,B+1+T),B+=T+1}continue}}}else if(c==="/"){n+="\\/",B+=1,s=!0;continue}else if(c==="[")o=!0;else if(c==="]")o=!1;else if(!o&&c==="("&&B+2<i&&e[B+1]==="?"&&e[B+2]==="<"&&B+3<i&&!"=!>)".includes(e[B+3])){n+="(?P<",B+=3,s=!0;continue}let C=e.codePointAt(B),f=W.charCount(C);n+=e.substring(B,B+f),B+=f}const u=s?n:e;return t.length>0?`(?${t})${u}`:u}},Re,EB=(Re=class{static quote(e){return W.quoteMeta(e)}static quoteReplacement(e,t=!1){return Uc.quoteReplacement(e,t)}static translateRegExp(e){return Om.translate(e)}static compile(e,t=0){let n=e;if((t&Re.CASE_INSENSITIVE)!==0&&(n=`(?i)${n}`),(t&Re.DOTALL)!==0&&(n=`(?s)${n}`),(t&Re.MULTILINE)!==0&&(n=`(?m)${n}`),(t&-544)!==0)throw new lm("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS");let s=k.PERL;(t&Re.DISABLE_UNICODE_GROUPS)!==0&&(s&=-129),(t&Re.LOOKBEHINDS)!==0&&(s|=k.LOOKBEHIND);const i=new Re(e,t);return i.re2Input=bm.compileImpl(n,s,(t&Re.LONGEST_MATCH)!==0),i}static matches(e,t){return Re.compile(e).testExact(t)}static initTest(e,t,n){if(e==null)throw new Error("pattern is null");if(n==null)throw new Error("re2 is null");const s=new Re(e,t);return s.re2Input=n,s}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return W.isByteArray(e)&&(e=zn.utf8(e)),new Uc(this,e)}test(e){return W.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=W.isByteArray(e)?me.fromUTF8(e):me.fromUTF16(e);return this.re2Input.executeEngine(t,0,k.ANCHOR_BOTH,0)!==null}exec(e){const t=this.matcher(e);if(!t.find())return null;const n=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);n.push(o===null?void 0:o)}n.index=t.start(0),n.input=e;const s=this.namedGroups();if(Object.keys(s).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);n.groups=i}else n.groups=void 0;return n}split(e,t=0){const n=this.matcher(e),s=[];let i=0,o=0;for(;n.find();){if(o===0&&n.end()===0){o=n.end();continue}if(t>0&&s.length===t-1)break;if(o===n.start()){if(t===0){i+=1,o=n.end();continue}}else for(;i>0;)s.push(""),i-=1;s.push(n.substring(o,n.start())),o=n.end()}if(t===0&&o!==n.inputLength()){for(;i>0;)s.push(""),i-=1;s.push(n.substring(o,n.inputLength()))}return(t!==0||s.length===0&&!(o===n.inputLength()&&o>0))&&s.push(n.substring(o,n.inputLength())),s}*matchAll(e){const t=this.matcher(e);for(;t.find();){const n=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);n.push(o===null?void 0:o)}n.index=t.start(0),n.input=e;const s=this.namedGroups();if(Object.keys(s).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);n.groups=i}else n.groups=void 0;yield n}}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}},M(Re,"CASE_INSENSITIVE",gr.CASE_INSENSITIVE),M(Re,"DOTALL",gr.DOTALL),M(Re,"MULTILINE",gr.MULTILINE),M(Re,"DISABLE_UNICODE_GROUPS",gr.DISABLE_UNICODE_GROUPS),M(Re,"LONGEST_MATCH",gr.LONGEST_MATCH),M(Re,"LOOKBEHINDS",gr.LOOKBEHINDS),Re);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr="12.18.0";function Nm(r){Mr=r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new wo("@firebase/firestore");function _r(){return nr.logLevel}function j(r,...e){if(nr.logLevel<=ae.DEBUG){const t=e.map(_B);nr.debug(`Firestore (${Mr}): ${r}`,...t)}}function Zt(r,...e){if(nr.logLevel<=ae.ERROR){const t=e.map(_B);nr.error(`Firestore (${Mr}): ${r}`,...t)}}function vt(r,...e){if(nr.logLevel<=ae.WARN){const t=e.map(_B);nr.warn(`Firestore (${Mr}): ${r}`,...t)}}function _B(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,BC(r,n,t)}function BC(r,e,t){let n=`FIRESTORE (${Mr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Zt(n),new Error(n)}function Q(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||BC(e,s,n)}function ne(r,e){return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DB{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Fm(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function oe(r,e){return r<e?-1:r>e?1:0}function Qa(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),i=e.charAt(n);if(s!==i)return Aa(s)===Aa(i)?oe(s,i):Aa(s)?1:-1}return oe(r.length,e.length)}const Lm=55296,km=57343;function Aa(r){const e=r.charCodeAt(0);return e>=Lm&&e<=km}function Sr(r,e,t){return r.length===e.length&&r.every(((n,s)=>t(n,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t){this.comparator=e,this.root=t||He.EMPTY}insert(e,t){return new Ie(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fi(this.root,e,this.comparator,!0)}}class Fi{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??He.RED,this.left=s??He.EMPTY,this.right=i??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new He(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return He.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new He(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Cl(this.data.getIterator())}getIteratorFrom(e){return new Cl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Pe(this.comparator);return t.data=e,t}}class Cl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Pt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="__name__";class Ot{constructor(e,t,n){t===void 0?t=0:t>e.length&&Y(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&Y(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Ot.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ot?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=Ot.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return oe(e.length,t.length)}static compareSegments(e,t){const n=Ot.isNumericId(e),s=Ot.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?Ot.extractNumericId(e).compare(Ot.extractNumericId(t)):Qa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return In.fromString(e.substring(4,e.length-2))}}class he extends Ot{construct(e,t,n){return new he(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new z(x.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((s=>s.length>0)))}return new he(t)}static emptyPath(){return new he([])}}const Vm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let pt=class Dr extends Ot{construct(e,t,n){return new Dr(e,t,n)}static isValidIdentifier(e){return Vm.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dr.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===br}static keyField(){return new Dr([br])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new z(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const B=e[s];if(B==="\\"){if(s+1===e.length)throw new z(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,s+=2}else B==="`"?(o=!o,s++):B!=="."||o?(n+=B,s++):(i(),s++)}if(i(),o)throw new z(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dr(t)}static emptyPath(){return new Dr([])}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new yt([])}unionWith(e){let t=new Pe(pt.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new yt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Sr(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ur(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function xm(r,e){const t=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.push(e(r[n],n,r));return t}function uC(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(he.fromString(e))}static fromName(e){return new X(he.fromString(e).popFirst(5))}static empty(){return new X(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return he.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new he(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(r,e,t){if(!t)throw new z(x.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Gm(r,e,t,n){if(e===!0&&n===!0)throw new z(x.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function fl(r){if(!X.isDocumentKey(r))throw new z(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Zs(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function IB(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Y(12329,{type:typeof r})}function Ss(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new z(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=IB(r);throw new z(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(r,e){const t={typeString:r};return e&&(t.value=e),t}function ei(r,e){if(!Zs(r))throw new z(x.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new z(x.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=-62135596800,pl=1e6;class _e{static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*pl);return new _e(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new z(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new z(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<dl)throw new z(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/pl}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ei(e,_e._jsonSchema))return new _e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-dl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_e._jsonSchemaVersion="firestore/timestamp/1.0",_e._jsonSchema={type:ve("string",_e._jsonSchemaVersion),seconds:ve("number"),nanoseconds:ve("number")};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new cC("Invalid base64 string: "+i):i}})(e);return new Se(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Se(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Se.EMPTY_BYTE_STRING=new Se("");const Hm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(r){if(Q(!!r,39018),typeof r=="string"){let e=0;const t=Hm.exec(r);if(Q(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:we(r.seconds),nanos:we(r.nanos)}}function we(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function vn(r){return typeof r=="string"?Se.fromBase64String(r):Se.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC="server_timestamp",hC="__type__",CC="__previous_value__",fC="__local_write_time__";function To(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[hC])==null?void 0:n.stringValue)===lC}function ti(r){const e=r.mapValue.fields[CC];return To(e)?ti(e):e}function Or(r){const e=Rn(r.mapValue.fields[fC].timestampValue);return new _e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,t,n,s,i,o,B,u,c,C,f,m,T){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=B,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=C,this.apiKey=f,this._customHeaders=m,this.grpcFlowControlWindow=T}}const Zi="(default)";class bs{constructor(e,t){this.projectId=e,this.database=t||Zi}static empty(){return new bs("","")}get isDefaultDatabase(){return this.database===Zi}isEqual(e){return e instanceof bs&&e.projectId===this.projectId&&e.database===this.database}}function Jm(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new z(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bs(r.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wB=-1;function Ao(r){return r==null}function Os(r){return r===0&&1/r==-1/0}function jm(r){return typeof r=="number"&&Number.isInteger(r)&&!Os(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}function qm(r){return typeof r=="string"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC="__type__",Km="__max__",Li={mapValue:{}},pC="__vector__",Ns="value",Nr={nullValue:"NULL_VALUE"},at={booleanValue:!0},Ge={booleanValue:!1};function be(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?To(r)?4:zm(r)?9007199254740991:eo(r)?10:11:Y(28295,{value:r})}function It(r,e,t){if(r===e)return!0;const n=be(r);if(n!==be(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Or(r).isEqual(Or(e));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const B=Rn(i.timestampValue),u=Rn(o.timestampValue);return B.seconds===u.seconds&&B.nanos===u.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(i,o){return vn(i.bytesValue).isEqual(vn(o.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(i,o){return we(i.geoPointValue.latitude)===we(o.geoPointValue.latitude)&&we(i.geoPointValue.longitude)===we(o.geoPointValue.longitude)})(r,e);case 2:return(function(i,o,B){if("integerValue"in i&&"integerValue"in o)return we(i.integerValue)===we(o.integerValue);let u,c;if("doubleValue"in i&&"doubleValue"in o)u=we(i.doubleValue),c=we(o.doubleValue);else{if(!(B!=null&&B.t))return!1;u=we(i.integerValue??i.doubleValue),c=we(o.integerValue??o.doubleValue)}return u===c?!!(B!=null&&B.i)||Os(u)===Os(c):!!(B===void 0||B.o)&&isNaN(u)&&isNaN(c)})(r,e,t);case 9:return Sr(r.arrayValue.values||[],e.arrayValue.values||[],((s,i)=>It(s,i,t)));case 10:case 11:return(function(i,o,B){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Xi(u)!==Xi(c))return!1;for(const C in u)if(u.hasOwnProperty(C)&&(c[C]===void 0||!It(u[C],c[C],B)))return!1;return!0})(r,e,t);default:return Y(52216,{left:r})}}function Fs(r,e){return(r.values||[]).find((t=>It(t,e)))!==void 0}function Bt(r,e){if(r===e)return 0;const t=be(r),n=be(e);if(t!==n)return oe(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return oe(r.booleanValue,e.booleanValue);case 2:return(function(i,o){const B=we(i.integerValue||i.doubleValue),u=we(o.integerValue||o.doubleValue);return B<u?-1:B>u?1:B===u?0:isNaN(B)?isNaN(u)?0:-1:1})(r,e);case 3:return gl(r.timestampValue,e.timestampValue);case 4:return gl(Or(r),Or(e));case 5:return Qa(r.stringValue,e.stringValue);case 6:return(function(i,o){const B=vn(i),u=vn(o);return B.compareTo(u)})(r.bytesValue,e.bytesValue);case 7:return(function(i,o){const B=i.split("/"),u=o.split("/");for(let c=0;c<B.length&&c<u.length;c++){const C=oe(B[c],u[c]);if(C!==0)return C}return oe(B.length,u.length)})(r.referenceValue,e.referenceValue);case 8:return(function(i,o){const B=oe(we(i.latitude),we(o.latitude));return B!==0?B:oe(we(i.longitude),we(o.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return ml(r.arrayValue,e.arrayValue);case 10:return(function(i,o){var m,T,P,V;const B=i.fields||{},u=o.fields||{},c=(m=B[Ns])==null?void 0:m.arrayValue,C=(T=u[Ns])==null?void 0:T.arrayValue,f=oe(((P=c==null?void 0:c.values)==null?void 0:P.length)||0,((V=C==null?void 0:C.values)==null?void 0:V.length)||0);return f!==0?f:ml(c,C)})(r.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Li.mapValue&&o===Li.mapValue)return 0;if(i===Li.mapValue)return 1;if(o===Li.mapValue)return-1;const B=i.fields||{},u=Object.keys(B),c=o.fields||{},C=Object.keys(c);u.sort(),C.sort();for(let f=0;f<u.length&&f<C.length;++f){const m=Qa(u[f],C[f]);if(m!==0)return m;const T=Bt(B[u[f]],c[C[f]]);if(T!==0)return T}return oe(u.length,C.length)})(r.mapValue,e.mapValue);default:throw Y(23264,{u:t})}}function gl(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return oe(r,e);const t=Rn(r),n=Rn(e),s=oe(t.seconds,n.seconds);return s!==0?s:oe(t.nanos,n.nanos)}function ml(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=Bt(t[s],n[s]);if(i!==void 0&&i!==0)return i}return oe(t.length,n.length)}function Fr(r){return Wa(r)}function Wa(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const n=Rn(t);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return vn(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return X.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=Wa(i);return n+"]"})(r.arrayValue):"mapValue"in r?(function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${Wa(t.fields[o])}`;return s+"}"})(r.mapValue):Y(61005,{value:r})}function Ui(r){switch(be(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ti(r);return e?16+Ui(e):16;case 5:return 2*r.stringValue.length;case 6:return vn(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((s,i)=>s+Ui(i)),0)})(r.arrayValue);case 10:case 11:return(function(n){let s=0;return ur(n.fields,((i,o)=>{s+=i.length+Ui(o)})),s})(r.mapValue);default:throw Y(13486,{value:r})}}function Nt(r){return!!r&&"integerValue"in r}function Qn(r){return!!r&&"doubleValue"in r}function Pn(r){return Nt(r)||Qn(r)}function Lr(r){return!!r&&"arrayValue"in r}function dt(r){return!!r&&"nullValue"in r}function ut(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Xn(r){return!!r&&"mapValue"in r}function eo(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[dC])==null?void 0:n.stringValue)===pC}function $a(r){var e,t;return(t=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[Ns])==null?void 0:t.arrayValue}function Es(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return ur(r.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Es(n))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Es(r.arrayValue.values[t]);return e}return{...r}}function zm(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Km}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Xn(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Es(t)}setAll(e){let t=pt.emptyPath(),n={},s=[];e.forEach(((o,B)=>{if(!t.isImmediateParentOf(B)){const u=this.getFieldsMap(t);this.applyChanges(u,n,s),n={},s=[],t=B.popLast()}o?n[B.lastSegment()]=Es(o):s.push(B.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());Xn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return It(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Xn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){ur(t,((s,i)=>e[s]=i));for(const s of n)delete e[s]}clone(){return new ft(Es(this.value))}}function gC(r){const e=[];return ur(r.fields,((t,n)=>{const s=new pt([t]);if(Xn(n)){const i=gC(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new yt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Os(e)?"-0":e}}function yB(r){return{integerValue:""+r}}function TB(r,e,t){return jm(e)?yB(e):Ro(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this._=void 0}}function Qm(r,e,t){return r instanceof Ls?(function(s,i){const o={fields:{[hC]:{stringValue:lC},[fC]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&To(i)&&(i=ti(i)),i&&(o.fields[CC]=i),{mapValue:o}})(t,e):r instanceof ks?EC(r,e):r instanceof Vs?_C(r,e):r instanceof xs?(function(s,i){const o=mC(s,i),B=ro(o)+ro(s.l);return Nt(o)&&Nt(s.l)?yB(B):Ro(s.serializer,B)})(r,e):r instanceof to?(function(s,i){return El(s,i,Math.min)})(r,e):r instanceof no?(function(s,i){return El(s,i,Math.max)})(r,e):void 0}function Wm(r,e,t){return r instanceof ks?EC(r,e):r instanceof Vs?_C(r,e):t}function mC(r,e){return r instanceof xs?Pn(e)?e:{integerValue:0}:null}class Ls extends vo{}class ks extends vo{constructor(e){super(),this.elements=e}}function EC(r,e){const t=DC(e);for(const n of r.elements)t.some((s=>It(s,n)))||t.push(n);return{arrayValue:{values:t}}}class Vs extends vo{constructor(e){super(),this.elements=e}}function _C(r,e){let t=DC(e);for(const n of r.elements)t=t.filter((s=>!It(s,n)));return{arrayValue:{values:t}}}class AB extends vo{constructor(e,t){super(),this.serializer=e,this.l=t}}class xs extends AB{}class to extends AB{}class no extends AB{}function El(r,e,t){if(!Pn(e))return r.l;const n=t(ro(e),ro(r.l));return Nt(e)&&Nt(r.l)?yB(n):Ro(r.serializer,n)}function ro(r){return we(r.integerValue||r.doubleValue)}function DC(r){return Lr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,t){this.field=e,this.transform=t}}function Ym(r,e){return r.field.isEqual(e.field)&&(function(n,s){return n instanceof ks&&s instanceof ks||n instanceof Vs&&s instanceof Vs?Sr(n.elements,s.elements,It):n instanceof xs&&s instanceof xs||n instanceof to&&s instanceof to||n instanceof no&&s instanceof no?It(n.l,s.l):n instanceof Ls&&s instanceof Ls})(r.transform,e.transform)}class Xm{constructor(e,t){this.version=e,this.transformResults=t}}class Wt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ji(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Po{}function IC(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new yC(r.key,Wt.none()):new ni(r.key,r.data,Wt.none());{const t=r.data,n=ft.empty();let s=new Pe(pt.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new cr(r.key,n,new yt(s.toArray()),Wt.none())}}function Zm(r,e,t){r instanceof ni?(function(s,i,o){const B=s.value.clone(),u=Dl(s.fieldTransforms,i,o.transformResults);B.setAll(u),i.convertToFoundDocument(o.version,B).setHasCommittedMutations()})(r,e,t):r instanceof cr?(function(s,i,o){if(!Ji(s.precondition,i))return void i.convertToUnknownDocument(o.version);const B=Dl(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(wC(s)),u.setAll(B),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(r,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function _s(r,e,t,n){return r instanceof ni?(function(i,o,B,u){if(!Ji(i.precondition,o))return B;const c=i.value.clone(),C=Il(i.fieldTransforms,u,o);return c.setAll(C),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null})(r,e,t,n):r instanceof cr?(function(i,o,B,u){if(!Ji(i.precondition,o))return B;const c=Il(i.fieldTransforms,u,o),C=o.data;return C.setAll(wC(i)),C.setAll(c),o.convertToFoundDocument(o.version,C).setHasLocalMutations(),B===null?null:B.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((f=>f.field)))})(r,e,t,n):(function(i,o,B){return Ji(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):B})(r,e,t)}function eE(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=mC(n.transform,s||null);i!=null&&(t===null&&(t=ft.empty()),t.set(n.field,i))}return t||null}function _l(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Sr(n,s,((i,o)=>Ym(i,o)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ni extends Po{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class cr extends Po{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function wC(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}})),e}function Dl(r,e,t){const n=new Map;Q(r.length===t.length,32656,{h:t.length,T:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,B=e.data.field(i.field);n.set(i.field,Wm(o,B,t[s]))}return n}function Il(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,Qm(i,o,e))}return n}class yC extends Po{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tE extends Po{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t){this.position=e,this.inclusive=t}}function wl(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=X.comparator(X.fromName(o.referenceValue),t.key):n=Bt(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function yl(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!It(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{}class Ne extends TC{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new rE(e,t,n):t==="array-contains"?new oE(e,n):t==="in"?new aE(e,n):t==="not-in"?new BE(e,n):t==="array-contains-any"?new uE(e,n):new Ne(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new sE(e,n):new iE(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Bt(t,this.value)):t!==null&&be(this.value)===be(t)&&this.matchesComparison(Bt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gt extends TC{constructor(e,t){super(),this.filters=e,this.op=t,this.P=null}static create(e,t){return new Gt(e,t)}matches(e){return AC(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.P!==null||(this.P=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.P}getFilters(){return Object.assign([],this.filters)}}function AC(r){return r.op==="and"}function RC(r){return nE(r)&&AC(r)}function nE(r){for(const e of r.filters)if(e instanceof Gt)return!1;return!0}function Ya(r){if(r instanceof Ne)return r.field.canonicalString()+r.op.toString()+Fr(r.value);if(RC(r))return r.filters.map((e=>Ya(e))).join(",");{const e=r.filters.map((t=>Ya(t))).join(",");return`${r.op}(${e})`}}function vC(r,e){return r instanceof Ne?(function(n,s){return s instanceof Ne&&n.op===s.op&&n.field.isEqual(s.field)&&It(n.value,s.value)})(r,e):r instanceof Gt?(function(n,s){return s instanceof Gt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((i,o,B)=>i&&vC(o,s.filters[B])),!0):!1})(r,e):void Y(19439)}function PC(r){return r instanceof Ne?(function(t){return`${t.field.canonicalString()} ${t.op} ${Fr(t.value)}`})(r):r instanceof Gt?(function(t){return t.op.toString()+" {"+t.getFilters().map(PC).join(" ,")+"}"})(r):"Filter"}class rE extends Ne{constructor(e,t,n){super(e,t,n),this.key=X.fromName(n.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class sE extends Ne{constructor(e,t){super(e,"in",t),this.keys=SC("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class iE extends Ne{constructor(e,t){super(e,"not-in",t),this.keys=SC("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function SC(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((n=>X.fromName(n.referenceValue)))}class oE extends Ne{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Lr(t)&&Fs(t.arrayValue,this.value)}}class aE extends Ne{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Fs(this.value.arrayValue,t)}}class BE extends Ne{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Fs(this.value.arrayValue,t)}}class uE extends Ne{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Lr(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>Fs(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,t="asc"){this.field=e,this.dir=t}}function cE(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new _e(0,0))}static max(){return new te(new _e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t,n,s,i,o,B){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=B}static newInvalidDocument(e){return new ze(e,0,te.min(),te.min(),te.min(),ft.empty(),0)}static newFoundDocument(e,t,n,s){return new ze(e,1,t,te.min(),n,s,0)}static newNoDocument(e,t){return new ze(e,2,t,te.min(),te.min(),ft.empty(),0)}static newUnknownDocument(e,t){return new ze(e,3,t,te.min(),te.min(),ft.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=-1;function lE(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=te.fromTimestamp(n===1e9?new _e(t+1,0):new _e(t,n));return new Sn(s,X.empty(),e)}function hE(r){return new Sn(r.readTime,r.key,Ms)}class Sn{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Sn(te.min(),X.empty(),Ms)}static max(){return new Sn(te.max(),X.empty(),Ms)}}function CE(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(r.documentKey,e.documentKey),t!==0?t:oe(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,t=null,n=[],s=[],i=null,o=null,B=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=B,this.R=null}}function Tl(r,e=null,t=[],n=[],s=null,i=null,o=null){return new fE(r,e,t,n,s,i,o)}function bC(r){const e=ne(r);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>Ya(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),Ao(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>Fr(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>Fr(n))).join(",")),e.R=t}return e.R}function OC(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!cE(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!vC(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!yl(r.startAt,e.startAt)&&yl(r.endAt,e.endAt)}function Kn(r){return!!r.isCorePipeline}function NC(r){return!!r.path&&X.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t=null,n=[],s=[],i=null,o="F",B=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=B,this.endAt=u,this.I=null,this.A=null,this.V=null,this.startAt,this.endAt}}function dE(r,e,t,n,s,i,o,B){return new So(r,e,t,n,s,i,o,B)}function RB(r){return new So(r)}function Al(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function pE(r){return X.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function gE(r){return r.collectionGroup!==null}function Ds(r){const e=ne(r);if(e.I===null){e.I=[];const t=new Set;for(const i of e.explicitOrderBy)e.I.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let B=new Pe(pt.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((c=>{c.isInequality()&&(B=B.add(c.field))}))})),B})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.I.push(new io(i,n))})),t.has(pt.keyField().canonicalString())||e.I.push(new io(pt.keyField(),n))}return e.I}function Lt(r){const e=ne(r);return e.A||(e.A=mE(e,Ds(r))),e.A}function mE(r,e){if(r.limitType==="F")return Tl(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new io(s.field,i)}));const t=r.endAt?new so(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new so(r.startAt.position,r.startAt.inclusive):null;return Tl(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Xa(r,e,t){return new So(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function EE(r,e){return OC(Lt(r),Lt(e))&&r.limitType===e.limitType}function Is(r){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((s=>PC(s))).join(", ")}]`),Ao(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>Fr(s))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>Fr(s))).join(",")),`Target(${n})`})(Lt(r))}; limitType=${r.limitType})`}function bo(r,e){return e.isFoundDocument()&&(function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):X.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(r,e)&&(function(n,s){for(const i of Ds(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(r,e)&&(function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0})(r,e)&&(function(n,s){return!(n.startAt&&!(function(o,B,u){const c=wl(o,B,u);return o.inclusive?c<=0:c<0})(n.startAt,Ds(n),s)||n.endAt&&!(function(o,B,u){const c=wl(o,B,u);return o.inclusive?c>=0:c>0})(n.endAt,Ds(n),s))})(r,e)}function vB(r){return(e,t)=>{let n=!1;for(const s of Ds(r)){const i=_E(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function _E(r,e,t){const n=r.field.isKeyField()?X.comparator(e.key,t.key):(function(i,o,B){const u=o.data.field(i),c=B.data.field(i);return u!==null&&c!==null?Bt(u,c):Y(42886)})(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return Y(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,ue;function IE(r){switch(r){case x.OK:return Y(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return Y(15467,{code:r})}}function FC(r){if(r===void 0)return Zt("GRPC error has no .code"),x.UNKNOWN;switch(r){case Ae.OK:return x.OK;case Ae.CANCELLED:return x.CANCELLED;case Ae.UNKNOWN:return x.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return x.INTERNAL;case Ae.UNAVAILABLE:return x.UNAVAILABLE;case Ae.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Ae.NOT_FOUND:return x.NOT_FOUND;case Ae.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Ae.ABORTED:return x.ABORTED;case Ae.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Ae.DATA_LOSS:return x.DATA_LOSS;default:return Y(39323,{code:r})}}(ue=Ae||(Ae={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ur(this.inner,((t,n)=>{for(const[s,i]of n)e(s,i)}))}isEmpty(){return uC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=new Ie(X.comparator);function it(){return wE}const LC=new Ie(X.comparator);function Ir(...r){let e=LC;for(const t of r)e=e.insert(t.key,t);return e}function kC(r){let e=LC;return r.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function fn(){return ws()}function VC(){return ws()}function ws(){return new lr((r=>r.toString()),((r,e)=>r.isEqual(e)))}const yE=new Ie(X.comparator),TE=new Pe(X.comparator);function ie(...r){let e=TE;for(const t of r)e=e.add(t);return e}const AE=new Pe(oe);function RE(){return AE}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=new In([4294967295,4294967295],0);function Rl(r){const e=vE().encode(r),t=new $h;return t.update(e),new Uint8Array(t.digest())}function vl(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new In([t,n],0),new In([s,i],0)]}class PB{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ds(`Invalid padding: ${t}`);if(n<0)throw new ds(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new ds(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new ds(`Invalid padding when bitmap length is 0: ${t}`);this.m=8*e.length-t,this.p=In.fromNumber(this.m)}S(e,t,n){let s=e.add(t.multiply(In.fromNumber(n)));return s.compare(PE)===1&&(s=new In([s.getBits(0),s.getBits(1)],0)),s.modulo(this.p).toNumber()}v(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.m===0)return!1;const t=Rl(e),[n,s]=vl(t);for(let i=0;i<this.hashCount;i++){const o=this.S(n,s,i);if(!this.v(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new PB(i,s,t);return n.forEach((B=>o.insert(B))),o}insert(e){if(this.m===0)return;const t=Rl(e),[n,s]=vl(t);for(let i=0;i<this.hashCount;i++){const o=this.S(n,s,i);this.D(o)}}D(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t,n,s,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,si.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ri(te.min(),s,new Ie(oe),it(),it(),ie())}}class si{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new si(n,t,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t,n,s){this.C=e,this.removedTargetIds=t,this.key=n,this.F=s}}class xC{constructor(e,t){this.targetId=e,this.O=t}}class MC{constructor(e,t,n=Se.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Pl{constructor(e){this.targetId=e,this.M=0,this.N=Sl(),this.L=Se.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get k(){return this.M!==0}get q(){return this.U}$(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}K(){let e=ie(),t=ie(),n=ie();return this.N.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:Y(38017,{changeType:i})}})),new si(this.L,this.B,e,t,n)}W(){this.U=!1,this.N=Sl()}G(e,t){this.U=!0,this.N=this.N.insert(e,t)}j(e){this.U=!0,this.N=this.N.remove(e)}H(){this.M+=1}J(){this.M-=1,Q(this.M>=0,3241,{M:this.M,targetId:this.targetId})}Y(){this.U=!0,this.B=!0}}const us="WatchChangeAggregator";class SE{constructor(e){this.Z=e,this.X=new Map,this.ee=it(),this.te=ki(),this.ne=it(),this.re=ki(),this.ie=new Ie(oe)}se(e){for(const t of e.C)e.F&&e.F.isFoundDocument()?this._e(t,e.F):this.oe(t,e.key,e.F);for(const t of e.removedTargetIds)this.oe(t,e.key,e.F)}ae(e){this.forEachTarget(e,(t=>{const n=this.X.get(t);if(n)switch(e.state){case 0:this.ue(t)&&n.$(e.resumeToken);break;case 1:n.J(),n.k||n.W(),n.$(e.resumeToken);break;case 2:n.J(),n.k||this.removeTarget(t);break;case 3:this.ue(t)&&(n.Y(),n.$(e.resumeToken));break;case 4:this.ue(t)&&(this.ce(t),n.$(e.resumeToken));break;default:Y(56790,{state:e.state})}else j(us,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.X.forEach(((n,s)=>{this.ue(s)&&t(s)}))}le(e){var t;return Kn(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:NC(e)}Ee(e){const t=e.targetId,n=e.O.count,s=this.he(t);if(s){const i=s.target;if(this.le(i))if(n===0){const o=new X(Kn(i)?he.fromString(i.getPipelineDocuments()[0]):i.path);this.oe(t,o,ze.newNoDocument(o,te.min()))}else Q(n===1,20013,"Single document existence filter with count: "+n);else{const o=this.Te(t);if(o!==n){const B=this.Pe(e),u=B?this.Re(B,e,o):1;if(u!==0){this.ce(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.ie=this.ie.insert(t,c)}}}}}Pe(e){const t=e.O.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,B;try{o=vn(n).toUint8Array()}catch(u){if(u instanceof cC)return vt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{B=new PB(o,s,i)}catch(u){return vt(u instanceof ds?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return B.m===0?null:B}Re(e,t,n){return t.O.count===n-this.Ve(e,t.targetId)?0:2}Ve(e,t){const n=this.Z.getRemoteKeysForTarget(t);let s=0;return n.forEach((i=>{const o=this.Z.Ae(),B=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(B)||(this.oe(t,i,null),s++)})),s}de(e){const t=new Map;this.X.forEach(((i,o)=>{const B=this.he(o);if(B){if(i.current&&this.le(B.target)){const u=Kn(B.target)?he.fromString(B.target.getPipelineDocuments()[0]):B.target.path,c=new X(u);this.fe(c).has(o)||this.me(o,c)||this.oe(o,c,ze.newNoDocument(c,e))}i.q&&(t.set(o,i.K()),i.W())}}));let n=ie();this.re.forEach(((i,o)=>{let B=!0;o.forEachWhile((u=>{const c=this.he(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(B=!1,!1)})),B&&(n=n.add(i))})),this.ee.forEach(((i,o)=>o.setReadTime(e))),this.ne.forEach(((i,o)=>o.setReadTime(e)));const s=new ri(e,t,this.ie,this.ee,this.ne,n);return this.ee=it(),this.te=ki(),this.ne=it(),this.re=ki(),this.ie=new Ie(oe),s}_e(e,t){const n=this.X.get(e);if(!n||!this.ue(e))return void j(us,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.me(e,t.key)?2:0;n.G(t.key,s),Kn(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t.key,t):this.ee=this.ee.insert(t.key,t),this.te=this.te.insert(t.key,this.fe(t.key).add(e)),this.re=this.re.insert(t.key,this.pe(t.key).add(e))}oe(e,t,n){const s=this.X.get(e);s&&this.ue(e)?(this.me(e,t)?s.G(t,1):s.j(t),this.re=this.re.insert(t,this.pe(t).delete(e)),this.re=this.re.insert(t,this.pe(t).add(e)),n&&(Kn(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t,n):this.ee=this.ee.insert(t,n))):j(us,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.X.delete(e)}Te(e){const t=this.X.get(e);if(!t)return 0;const n=t.K();return this.Z.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}H(e){let t=this.X.get(e);t||(j(us,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Pl(e),this.X.set(e,t)),t.H()}pe(e){let t=this.re.get(e);return t||(t=new Pe(oe),this.re=this.re.insert(e,t)),t}fe(e){let t=this.te.get(e);return t||(t=new Pe(oe),this.te=this.te.insert(e,t)),t}ue(e){const t=this.he(e)!==null;return t||j(us,"Detected inactive target",e),t}he(e){const t=this.X.get(e);return t===void 0||t.k?null:this.Z.ge(e)}ce(e){this.X.set(e,new Pl(e)),this.Z.getRemoteKeysForTarget(e).forEach((t=>{this.oe(e,t,null)}))}me(e,t){return this.Z.getRemoteKeysForTarget(e).has(t)}}function ki(){return new Ie(X.comparator)}function Sl(){return new Ie(X.comparator)}const bE={asc:"ASCENDING",desc:"DESCENDING"},OE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},NE={and:"AND",or:"OR"};class FE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Za(r,e){return r.useProto3Json||Ao(e)?e:{value:e}}function oo(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function SB(r){const e=Rn(r);return new _e(e.seconds,e.nanos)}function GC(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function qi(r,e){return oo(r,e.toTimestamp())}function kt(r){return Q(!!r,49232),te.fromTimestamp(SB(r))}function bB(r,e){return eB(r,e).canonicalString()}function eB(r,e){const t=(function(s){return new he(["projects",s.projectId,"databases",s.database])})(r).child("documents");return e===void 0?t:t.child(e)}function HC(r){const e=he.fromString(r);return Q(KC(e),10190,{key:e.toString()}),e}function ao(r,e){return bB(r.databaseId,e.path)}function Ra(r,e){const t=HC(e);if(t.get(1)!==r.databaseId.projectId)throw new z(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new z(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new X(JC(t))}function UC(r,e){return bB(r.databaseId,e)}function LE(r){const e=HC(r);return e.length===4?he.emptyPath():JC(e)}function tB(r){return new he(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function JC(r){return Q(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function bl(r,e,t){return{name:ao(r,e),fields:t.value.mapValue.fields}}function kE(r,e){let t;if("targetChange"in e){e.targetChange;const n=(function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y(39313,{state:c})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(c,C){return c.useProto3Json?(Q(C===void 0||typeof C=="string",58123),Se.fromBase64String(C||"")):(Q(C===void 0||C instanceof Buffer||C instanceof Uint8Array,16193),Se.fromUint8Array(C||new Uint8Array))})(r,e.targetChange.resumeToken),o=e.targetChange.cause,B=o&&(function(c){const C=c.code===void 0?x.UNKNOWN:FC(c.code);return new z(C,c.message||"")})(o);t=new MC(n,s,i,B||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=Ra(r,n.document.name),i=kt(n.document.updateTime),o=n.document.createTime?kt(n.document.createTime):te.min(),B=new ft({mapValue:{fields:n.document.fields}}),u=ze.newFoundDocument(s,i,o,B),c=n.targetIds||[],C=n.removedTargetIds||[];t=new ji(c,C,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=Ra(r,n.document),i=n.readTime?kt(n.readTime):te.min(),o=ze.newNoDocument(s,i),B=n.removedTargetIds||[];t=new ji([],B,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=Ra(r,n.document),i=n.removedTargetIds||[];t=new ji([],i,s,null)}else{if(!("filter"in e))return Y(11601,{ye:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new DE(s,i),B=n.targetId;t=new xC(B,o)}}return t}function VE(r,e){let t;if(e instanceof ni)t={update:bl(r,e.key,e.value)};else if(e instanceof yC)t={delete:ao(r,e.key)};else if(e instanceof cr)t={update:bl(r,e.key,e.data),updateMask:zE(e.fieldMask)};else{if(!(e instanceof tE))return Y(16599,{we:e.type});t={verify:ao(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(i,o){const B=o.transform;if(B instanceof Ls)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(B instanceof ks)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:B.elements}};if(B instanceof Vs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:B.elements}};if(B instanceof xs)return{fieldPath:o.field.canonicalString(),increment:B.l};if(B instanceof to)return{fieldPath:o.field.canonicalString(),minimum:B.l};if(B instanceof no)return{fieldPath:o.field.canonicalString(),maximum:B.l};throw Y(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:qi(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y(27497)})(r,e.precondition)),t}function xE(r,e){return r&&r.length>0?(Q(e!==void 0,14353),r.map((t=>(function(s,i){let o=s.updateTime?kt(s.updateTime):kt(i);return o.isEqual(te.min())&&(o=kt(i)),new Xm(o,s.transformResults||[])})(t,e)))):[]}function ME(r,e){return{documents:[UC(r,e.path)]}}function GE(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=UC(r,s);const i=(function(c){if(c.length!==0)return qC(Gt.create(c,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(c){if(c.length!==0)return c.map((C=>(function(m){return{field:wr(m.field),direction:jE(m.dir)}})(C)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const B=Za(r,e.limit);return B!==null&&(t.structuredQuery.limit=B),e.startAt&&(t.structuredQuery.startAt=(function(c){return{before:c.inclusive,values:c.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(c){return{before:!c.inclusive,values:c.position}})(e.endAt)),{be:t,parent:s}}function HE(r){let e=LE(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){Q(n===1,65062);const C=t.from[0];C.allDescendants?s=C.collectionId:e=e.child(C.collectionId)}let i=[];t.where&&(i=(function(f){const m=jC(f);return m instanceof Gt&&RC(m)?m.getFilters():[m]})(t.where));let o=[];t.orderBy&&(o=(function(f){return f.map((m=>(function(P){return new io(yr(P.field),(function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(P.direction))})(m)))})(t.orderBy));let B=null;t.limit&&(B=(function(f){let m;return m=typeof f=="object"?f.value:f,Ao(m)?null:m})(t.limit));let u=null;t.startAt&&(u=(function(f){const m=!!f.before,T=f.values||[];return new so(T,m)})(t.startAt));let c=null;return t.endAt&&(c=(function(f){const m=!f.before,T=f.values||[];return new so(T,m)})(t.endAt)),dE(e,s,o,i,B,"F",u,c)}function UE(r,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function JE(r,e){return{structuredPipeline:{pipeline:{stages:e.stages.map((t=>t._toProto(r)))}}}}function jC(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=yr(t.unaryFilter.field);return Ne.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=yr(t.unaryFilter.field);return Ne.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=yr(t.unaryFilter.field);return Ne.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=yr(t.unaryFilter.field);return Ne.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}})(r):r.fieldFilter!==void 0?(function(t){return Ne.create(yr(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Gt.create(t.compositeFilter.filters.map((n=>jC(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y(1026)}})(t.compositeFilter.op))})(r):Y(30097,{filter:r})}function jE(r){return bE[r]}function qE(r){return OE[r]}function KE(r){return NE[r]}function wr(r){return{fieldPath:r.canonicalString()}}function yr(r){return pt.fromServerFormat(r.fieldPath)}function qC(r){return r instanceof Ne?(function(t){if(t.op==="=="){if(ut(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NAN"}};if(dt(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ut(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NOT_NAN"}};if(dt(t.value))return{unaryFilter:{field:wr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wr(t.field),op:qE(t.op),value:t.value}}})(r):r instanceof Gt?(function(t){const n=t.getFilters().map((s=>qC(s)));return n.length===1?n[0]:{compositeFilter:{op:KE(t.op),filters:n}}})(r):Y(54877,{filter:r})}function zE(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function KC(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function zC(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}function Gs(r,e){const t={fields:{}};return e.forEach(((n,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=n._toProto(r)})),{mapValue:t}}function QC(r){return{stringValue:r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(r){return new FE(r,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _t(Se.fromBase64String(e))}catch(t){throw new z(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new _t(Se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:_t._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ei(e,_t._jsonSchema))return _t.fromBase64String(e.bytes)}}_t._jsonSchemaVersion="firestore/bytes/1.0",_t._jsonSchema={type:ve("string",_t._jsonSchemaVersion),bytes:ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OB{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new z(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function QE(){return new OB(br)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NB{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new z(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new z(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Vt._jsonSchemaVersion}}static fromJSON(e){if(ei(e,Vt._jsonSchema))return new Vt(e.latitude,e.longitude)}}Vt._jsonSchemaVersion="firestore/geoPoint/1.0",Vt._jsonSchema={type:ve("string",Vt._jsonSchemaVersion),latitude:ve("number"),longitude:ve("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ke.UNAUTHENTICATED)))}shutdown(){}}class $E{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class YE{constructor(e){this.ve=e,this.currentUser=Ke.UNAUTHENTICATED,this.De=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.xe===void 0,42304);let n=this.De;const s=u=>this.De!==n?(n=this.De,t(u)):Promise.resolve();let i=new wn;this.xe=()=>{this.De++,this.currentUser=this.Ce(),i.resolve(),i=new wn,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},B=u=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.xe&&(this.auth.addAuthTokenListener(this.xe),o())};this.ve.onInit((u=>B(u))),setTimeout((()=>{if(!this.auth){const u=this.ve.getImmediate({optional:!0});u?B(u):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new wn)}}),0),o()}getToken(){const e=this.De,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.De!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Q(typeof n.accessToken=="string",31837,{Fe:n}),new WC(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.xe&&this.auth.removeAuthTokenListener(this.xe),this.xe=void 0}Ce(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string",2055,{Oe:e}),new Ke(e)}}class XE{constructor(e,t,n){this.Me=e,this.Ne=t,this.Le=n,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.Be=new Map}Ue(){return this.Le?this.Le():null}get headers(){this.Be.set("X-Goog-AuthUser",this.Me);const e=this.Ue();return e&&this.Be.set("Authorization",e),this.Ne&&this.Be.set("X-Goog-Iam-Authorization-Token",this.Ne),this.Be}}class ZE{constructor(e,t,n){this.Me=e,this.Ne=t,this.Le=n}getToken(){return Promise.resolve(new XE(this.Me,this.Ne,this.Le))}start(e,t){e.enqueueRetryable((()=>t(Ke.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ol{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class e_{constructor(e,t){this.ke=t,this.forceRefresh=!1,this.appCheck=null,this.qe=null,this.$e=null,Ct(e)&&e.settings.appCheckToken&&(this.$e=e.settings.appCheckToken)}start(e,t){Q(this.xe===void 0,3512);const n=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.qe;return this.qe=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.xe=i=>{e.enqueueRetryable((()=>n(i)))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.xe&&this.appCheck.addTokenListener(this.xe)};this.ke.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.ke.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.$e)return Promise.resolve(new Ol(this.$e));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Q(typeof t.token=="string",44558,{tokenResult:t}),this.qe=t.token,new Ol(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.xe&&this.appCheck.removeTokenListener(this.xe),this.xe=void 0}}function $C(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{Ke(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="ConnectivityMonitor";class Fl{constructor(){this.Qe=()=>this.We(),this.Ge=()=>this.ze(),this.je=[],this.He()}Ke(e){this.je.push(e)}shutdown(){window.removeEventListener("online",this.Qe),window.removeEventListener("offline",this.Ge)}He(){window.addEventListener("online",this.Qe),window.addEventListener("offline",this.Ge)}We(){j(Nl,"Network connectivity changed: AVAILABLE");for(const e of this.je)e(0)}ze(){j(Nl,"Network connectivity changed: UNAVAILABLE");for(const e of this.je)e(1)}static Je(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi=null;function nB(){return Vi===null?Vi=(function(){return 268435456+Math.round(2147483648*Math.random())})():Vi++,"0x"+Vi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va="RestConnection",n_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class r_{get Ye(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ze=t+"://"+e.host,this.Xe=`projects/${n}/databases/${s}`,this.et=this.databaseId.database===Zi?`project_id=${n}`:`project_id=${n}&database_id=${s}`}tt(e,t,n,s,i){const o=nB(),B=this.nt(e,t.toUriEncodedString());j(va,`Sending RPC '${e}' ${o}:`,B,n);const u={"google-cloud-resource-prefix":this.Xe,"x-goog-request-params":this.et};this.rt(u,s,i);const{host:c}=new URL(B),C=Ys(c);return this.it(e,B,u,n,C).then((f=>(j(va,`Received RPC '${e}' ${o}: `,f),f)),(f=>{throw vt(va,`RPC '${e}' ${o} failed with error: `,f,"url: ",B,"request:",n),f}))}st(e,t,n,s,i,o){return this.tt(e,t,n,s,i)}rt(e,t,n){if(e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Mr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),n&&n.headers.forEach(((s,i)=>e[i]=s)),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}nt(e,t){const n=n_[e];let s=`${this.Ze}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){this._t=e._t,this.ot=e.ot}ut(e){this.ct=e}lt(e){this.Et=e}ht(e){this.Tt=e}onMessage(e){this.Pt=e}close(){this.ot()}send(e){this._t(e)}Rt(){this.ct()}It(){this.Et()}At(e){this.Tt(e)}Vt(e){this.Pt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="WebChannelConnection",cs=(r,e,t)=>{r.listen(e,(n=>{try{t(n)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Tr extends r_{constructor(e){super(e),this.dt=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static ft(){if(!Tr.gt){const e=eC();cs(e,Zh.STAT_EVENT,(t=>{t.stat===ja.PROXY?j(qe,"STAT_EVENT: detected buffering proxy"):t.stat===ja.NOPROXY&&j(qe,"STAT_EVENT: detected no buffering proxy")})),Tr.gt=!0}}it(e,t,n,s,i){const o=nB();return new Promise(((B,u)=>{const c=new Yh;c.setWithCredentials(!0),c.listenOnce(Xh.COMPLETE,(()=>{try{switch(c.getLastErrorCode()){case Hi.NO_ERROR:const f=c.getResponseJson();j(qe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),B(f);break;case Hi.TIMEOUT:j(qe,`RPC '${e}' ${o} timed out`),u(new z(x.DEADLINE_EXCEEDED,"Request time out"));break;case Hi.HTTP_ERROR:const m=c.getStatus();if(j(qe,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let T=c.getResponseJson();Array.isArray(T)&&(T=T[0]);const P=T==null?void 0:T.error;if(P&&P.status&&P.message){const V=(function(K){const re=K.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(re)>=0?re:x.UNKNOWN})(P.status);u(new z(V,P.message))}else u(new z(x.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new z(x.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{yt:e,streamId:o,wt:c.getLastErrorCode(),bt:c.getLastError()})}}finally{j(qe,`RPC '${e}' ${o} completed.`)}}));const C=JSON.stringify(s);j(qe,`RPC '${e}' ${o} sending request:`,s),c.send(t,"POST",C,n,15)}))}St(e,t,n){const s=nB(),i=[this.Ze,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),B={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(B.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(B.useFetchStreams=!0),this.rt(B.initMessageHeaders,t,n),B.encodeInitMessageHeaders=!0;const c=i.join("");j(qe,`Creating RPC '${e}' stream ${s}: ${c}`,B);const C=o.createWebChannel(c,B);this.vt(C);let f=!1,m=!1;const T=new s_({_t:P=>{m?j(qe,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(f||(j(qe,`Opening RPC '${e}' stream ${s} transport.`),C.open(),f=!0),j(qe,`RPC '${e}' stream ${s} sending:`,P),C.send(P))},ot:()=>C.close()});return cs(C,fs.EventType.OPEN,(()=>{m||(j(qe,`RPC '${e}' stream ${s} transport opened.`),T.Rt())})),cs(C,fs.EventType.CLOSE,(()=>{m||(m=!0,j(qe,`RPC '${e}' stream ${s} transport closed`),T.At(),this.Dt(C))})),cs(C,fs.EventType.ERROR,(P=>{m||(m=!0,vt(qe,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),T.At(new z(x.UNAVAILABLE,"The operation could not be completed")))})),cs(C,fs.EventType.MESSAGE,(P=>{var V;if(!m){const U=P.data[0];Q(!!U,16349);const K=U,re=(K==null?void 0:K.error)||((V=K[0])==null?void 0:V.error);if(re){j(qe,`RPC '${e}' stream ${s} received error:`,re);const De=re.status;let ke=(function(A){const E=Ae[A];if(E!==void 0)return FC(E)})(De),Ve=re.message;De==="NOT_FOUND"&&Ve.includes("database")&&Ve.includes("does not exist")&&Ve.includes(this.databaseId.database)&&vt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ke===void 0&&(ke=x.INTERNAL,Ve="Unknown error status: "+De+" with message "+re.message),m=!0,T.At(new z(ke,Ve)),C.close()}else j(qe,`RPC '${e}' stream ${s} received:`,U),T.Vt(U)}})),Tr.ft(),setTimeout((()=>{T.It()}),0),T}terminate(){this.dt.forEach((e=>e.close())),this.dt=[]}vt(e){this.dt.push(e)}Dt(e){this.dt=this.dt.filter((t=>t===e))}rt(e,t,n){super.rt(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return tC()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(r){return new Tr(r)}Tr.gt=!1;class YC{constructor(e,t,n=1e3,s=1.5,i=6e4){this.xt=e,this.timerId=t,this.Ct=n,this.Ft=s,this.Ot=i,this.Mt=0,this.Nt=null,this.Lt=Date.now(),this.reset()}reset(){this.Mt=0}Bt(){this.Mt=this.Ot}Ut(e){this.cancel();const t=Math.floor(this.Mt+this.kt()),n=Math.max(0,Date.now()-this.Lt),s=Math.max(0,t-n);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Mt} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Nt=this.xt.enqueueAfterDelay(this.timerId,s,(()=>(this.Lt=Date.now(),e()))),this.Mt*=this.Ft,this.Mt<this.Ct&&(this.Mt=this.Ct),this.Mt>this.Ot&&(this.Mt=this.Ot)}qt(){this.Nt!==null&&(this.Nt.skipDelay(),this.Nt=null)}cancel(){this.Nt!==null&&(this.Nt.cancel(),this.Nt=null)}kt(){return(Math.random()-.5)*this.Mt}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll="PersistentStream";class XC{constructor(e,t,n,s,i,o,B,u){this.xt=e,this.$t=n,this.Kt=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=B,this.listener=u,this.state=0,this.Qt=0,this.Wt=null,this.Gt=null,this.stream=null,this.zt=0,this.jt=new YC(e,t)}Ht(){return this.state===1||this.state===5||this.Jt()}Jt(){return this.state===2||this.state===3}start(){this.zt=0,this.state!==4?this.auth():this.Yt()}async stop(){this.Ht()&&await this.close(0)}Zt(){this.state=0,this.jt.reset()}Xt(){this.Jt()&&this.Wt===null&&(this.Wt=this.xt.enqueueAfterDelay(this.$t,6e4,(()=>this.en())))}tn(e){this.nn(),this.stream.send(e)}async en(){if(this.Jt())return this.close(0)}nn(){this.Wt&&(this.Wt.cancel(),this.Wt=null)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}async close(e,t){this.nn(),this.rn(),this.jt.cancel(),this.Qt++,e!==4?this.jt.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(Zt(t.toString()),Zt("Using maximum backoff delay to prevent overloading the backend."),this.jt.Bt()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.sn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ht(t)}sn(){}auth(){this.state=1;const e=this._n(this.Qt),t=this.Qt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.Qt===t&&this.an(n,s)}),(n=>{e((()=>{const s=new z(x.UNKNOWN,"Fetching auth token failed: "+n.message);return this.un(s)}))}))}an(e,t){const n=this._n(this.Qt);this.stream=this.cn(e,t),this.stream.ut((()=>{n((()=>this.listener.ut()))})),this.stream.lt((()=>{n((()=>(this.state=2,this.Gt=this.xt.enqueueAfterDelay(this.Kt,1e4,(()=>(this.Jt()&&(this.state=3),Promise.resolve()))),this.listener.lt())))})),this.stream.ht((s=>{n((()=>this.un(s)))})),this.stream.onMessage((s=>{n((()=>++this.zt==1?this.En(s):this.onNext(s)))}))}Yt(){this.state=5,this.jt.Ut((async()=>{this.state=0,this.start()}))}un(e){return j(Ll,`close with error: ${e}`),this.stream=null,this.close(4,e)}_n(e){return t=>{this.xt.enqueueAndForget((()=>this.Qt===e?t():(j(Ll,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class o_ extends XC{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}cn(e,t){return this.connection.St("Listen",e,t)}En(e){return this.onNext(e)}onNext(e){this.jt.reset();const t=kE(this.serializer,e),n=(function(i){if(!("targetChange"in i))return te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?kt(o.readTime):te.min()})(e);return this.listener.hn(t,n)}Tn(e){const t={};t.database=tB(this.serializer),t.addTarget=(function(i,o){let B;const u=o.target;if(B=Kn(u)?{pipelineQuery:JE(i,u)}:NC(u)?{documents:ME(i,u)}:{query:GE(i,u).be},B.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){B.resumeToken=GC(i,o.resumeToken);const c=Za(i,o.expectedCount);c!==null&&(B.expectedCount=c)}else if(o.snapshotVersion.compareTo(te.min())>0){B.readTime=oo(i,o.snapshotVersion.toTimestamp());const c=Za(i,o.expectedCount);c!==null&&(B.expectedCount=c)}return B})(this.serializer,e);const n=UE(this.serializer,e);n&&(t.labels=n),this.tn(t)}Pn(e){const t={};t.database=tB(this.serializer),t.removeTarget=e,this.tn(t)}}class a_ extends XC{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get Rn(){return this.zt>0}start(){this.lastStreamToken=void 0,super.start()}sn(){this.Rn&&this.In([])}cn(e,t){return this.connection.St("Write",e,t)}En(e){return Q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0,55816),this.listener.An()}onNext(e){Q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.jt.reset();const t=xE(e.writeResults,e.commitTime),n=kt(e.commitTime);return this.listener.Vn(n,t)}dn(){const e={};e.database=tB(this.serializer),this.tn(e)}In(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>VE(this.serializer,n)))};this.tn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{}class u_ extends B_{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.fn=!1}mn(){if(this.fn)throw new z(x.FAILED_PRECONDITION,"The client has already been terminated.")}tt(e,t,n,s){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.tt(e,eB(t,n),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(x.UNKNOWN,i.toString())}))}st(e,t,n,s,i){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,B])=>this.connection.st(e,eB(t,n),s,o,B,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(x.UNKNOWN,o.toString())}))}terminate(){this.fn=!0,this.connection.terminate()}}function c_(r,e,t,n){return new u_(r,e,t,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_="ComponentProvider",kl=new Map;function h_(r,e,t,n,s){return new Um(r,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,$C(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,n,s._customHeaders,s.grpcFlowControlWindow)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ZC=41943040;class rt{static withCacheSize(e){return new rt(e,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}rt.DEFAULT_COLLECTION_PERCENTILE=10,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rt.DEFAULT=new rt(ZC,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rt.DISABLED=new rt(-1,0,0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.pn(n),this.gn=n=>t.writeSequenceNumber(n))}pn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.gn&&this.gn(e),e}}No.yn=-1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class f_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(r){if(r.code!==x.FAILED_PRECONDITION||r.message!==C_)throw r;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L(((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):L.reject(t)}static resolve(e){return new L(((t,n)=>{t(e)}))}static reject(e){return new L(((t,n)=>{n(e)}))}static waitFor(e){return new L(((t,n)=>{let s=0,i=0,o=!1;e.forEach((B=>{++s,B.next((()=>{++i,o&&i===s&&t()}),(u=>n(u)))})),o=!0,i===s&&t()}))}static or(e){let t=L.resolve(!1);for(const n of e)t=t.next((s=>s?L.resolve(s):n()));return t}static forEach(e,t){const n=[];return e.forEach(((s,i)=>{n.push(t.call(this,s,i))})),this.waitFor(n)}static mapArray(e,t){return new L(((n,s)=>{const i=e.length,o=new Array(i);let B=0;for(let u=0;u<i;u++){const c=u;t(e[c]).next((C=>{o[c]=C,++B,B===i&&n(o)}),(C=>s(C)))}}))}static doWhile(e,t){return new L(((n,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):n()};i()}))}}function d_(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Hr(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="LruGarbageCollector",p_=1048576;function Ml([r,e],[t,n]){const s=oe(r,t);return s===0?oe(e,n):s}class g_{constructor(e){this.Jn=e,this.buffer=new Pe(Ml),this.Yn=0}Zn(){return++this.Yn}Xn(e){const t=[e,this.Zn()];if(this.buffer.size<this.Jn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Ml(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class m_{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.tr(6e4)}stop(){this.er&&(this.er.cancel(),this.er=null)}get started(){return this.er!==null}tr(e){j(xl,`Garbage collection scheduled in ${e}ms`),this.er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Hr(t)?j(xl,"Ignoring IndexedDB error during garbage collection: ",t):await Gr(t)}await this.tr(3e5)}))}}class E_{constructor(e,t){this.nr=e,this.params=t}calculateTargetCount(e,t){return this.nr.rr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return L.resolve(No.yn);const n=new g_(t);return this.nr.forEachTarget(e,(s=>n.Xn(s.sequenceNumber))).next((()=>this.nr.ir(e,(s=>n.Xn(s))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.nr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.nr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Vl)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vl):this.sr(e,t)))}getCacheSize(e){return this.nr.getCacheSize(e)}sr(e,t){let n,s,i,o,B,u,c;const C=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((f=>(f>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s)))).next((f=>(n=f,B=Date.now(),this.removeTargets(e,n,t)))).next((f=>(i=f,u=Date.now(),this.removeOrphanedDocuments(e,n)))).next((f=>(c=Date.now(),_r()<=ae.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-C}ms
	Determined least recently used ${s} in `+(B-o)+`ms
	Removed ${i} targets in `+(u-B)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-C}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f}))))}}function __(r,e){return new E_(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef="firestore.googleapis.com",Gl=!0;class Hl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ef,this.ssl=Gl}else this.host=e.host,this.ssl=e.ssl??Gl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=ZC;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<p_)throw new z(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(Gm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$C(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new z(x.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new z(x.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new z(x.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new z(x.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&(function(n,s){if(n===s)return!0;if(!n||!s)return!1;const i=Object.keys(n),o=Object.keys(s);if(i.length!==o.length)return!1;for(const B of i)if(n[B]!==s[B])return!1;return!0})(this._customHeaders,e._customHeaders)}}let FB=class{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new WE;switch(n.type){case"firstParty":return new ZE(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new z(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=kl.get(t);n&&(j(l_,"Removing Datastore"),kl.delete(t),n.terminate())})(this),Promise.resolve()}};function D_(r,e,t,n={}){var c;r=Ss(r,FB);const s=Ys(e),i=r._getSettings(),o={...i,emulatorOptions:r._getEmulatorOptions()},B=`${e}:${t}`;s&&Jh(`https://${B}`),i.host!==ef&&i.host!==B&&vt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:B,ssl:s,emulatorOptions:n};if(!An(u,o)&&(r._setSettings(u),n.mockUserToken)){let C,f;if(typeof n.mockUserToken=="string")C=n.mockUserToken,f=Ke.MOCK_USER;else{C=Lp(n.mockUserToken,(c=r._app)==null?void 0:c.options.projectId);const m=n.mockUserToken.sub||n.mockUserToken.user_id;if(!m)throw new z(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Ke(m)}r._authCredentials=new $E(new WC(C,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LB{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new LB(this.firestore,e,this._query)}}class Le{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}toJSON(){return{type:Le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(ei(t,Le._jsonSchema))return new Le(e,n||null,new X(he.fromString(t.referencePath)))}}Le._jsonSchemaVersion="firestore/documentReference/1.0",Le._jsonSchema={type:ve("string",Le._jsonSchemaVersion),referencePath:ve("string")};class Hs extends LB{constructor(e,t,n){super(e,t,RB(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new X(e))}withConverter(e){return new Hs(this.firestore,e,this._path)}}function wR(r,e,...t){if(r=Ue(r),arguments.length===1&&(e=DB.newId()),Mm("doc","path",e),r instanceof FB){const n=he.fromString(e,...t);return fl(n),new Le(r,null,new X(n))}{if(!(r instanceof Le||r instanceof Hs))throw new z(x.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(he.fromString(e,...t));return fl(n),new Le(r.firestore,r instanceof Hs?r.converter:null,new X(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ot._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ei(e,ot._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ot(e.vectorValues);throw new z(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ot._jsonSchemaVersion="firestore/vectorValue/1.0",ot._jsonSchema={type:ve("string",ot._jsonSchemaVersion),vectorValues:ve("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=/^__.*__$/;class w_{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new cr(e,this.data,this.fieldMask,t,this.fieldTransforms):new ni(e,this.data,t,this.fieldTransforms)}}function tf(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{dataSource:r})}}class kB{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new kB({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePathSegment(e),n}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePath(),n}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Bo(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(tf(this.dataSource)&&I_.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class y_{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Oo(e)}createContext(e,t,n,s=!1){return new kB({dataSource:e,methodName:t,targetDoc:n,path:pt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function T_(r){const e=r._freezeSettings(),t=Oo(r._databaseId);return new y_(r._databaseId,!!e.ignoreUndefinedProperties,t)}function A_(r,e,t,n,s,i={}){const o=r.createContext(i.merge||i.mergeFields?2:0,e,t,s);sf("Data must be an object, but it was:",o,n);const B=nf(n,o);let u,c;if(i.merge)u=new yt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const C=[];for(const f of i.mergeFields){const m=Fo(e,f,t);if(!o.contains(m))throw new z(x.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);P_(C,m)||C.push(m)}u=new yt(C),c=o.fieldTransforms.filter((f=>u.covers(f.field)))}else u=null,c=o.fieldTransforms;return new w_(new ft(B),u,c)}class VB extends NB{_toFieldTransform(e){return new $m(e.path,new Ls)}isEqual(e){return e instanceof VB}}function Us(r,e,t){if(rf(r=Ue(r)))return sf("Unsupported field value:",e,r),nf(r,e);if(r instanceof NB)return(function(s,i){if(!tf(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,i){const o=[];let B=0;for(const u of s){let c=Us(u,i.childContextForArray(B));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),B++}return{arrayValue:{values:o}}})(r,e)}return(function(s,i,o){if((s=Ue(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return TB(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const B=_e.fromDate(s);return{timestampValue:oo(i.serializer,B)}}if(s instanceof _e){const B=new _e(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:oo(i.serializer,B)}}if(s instanceof Vt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof _t)return{bytesValue:GC(i.serializer,s._byteString)};if(s instanceof Le){const B=i.databaseId,u=s.firestore._databaseId;if(!u.isEqual(B))throw i.createError(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${B.projectId}/${B.database}`);return{referenceValue:bB(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof ot)return(function(u,c){const C=u instanceof ot?u.toArray():u;return{mapValue:{fields:{[dC]:{stringValue:pC},[Ns]:{arrayValue:{values:C.map((m=>{if(typeof m!="number")throw c.createError("VectorValues must only contain numeric values.");return Ro(c.serializer,m)}))}}}}}})(s,i);if(zC(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${IB(s)}`)})(r,e)}function nf(r,e){const t={};return uC(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ur(r,((n,s)=>{const i=Us(s,e.childContextForField(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function rf(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof _e||r instanceof Vt||r instanceof _t||r instanceof Le||r instanceof NB||r instanceof ot||zC(r))}function sf(r,e,t){if(!rf(t)||!Zs(t)){const n=IB(t);throw n==="an object"?e.createError(r+" a custom object"):e.createError(r+" "+n)}}function Fo(r,e,t){if((e=Ue(e))instanceof OB)return e._internalPath;if(typeof e=="string")return v_(r,e);throw Bo("Field path arguments must be of type string or ",r,!1,void 0,t)}const R_=new RegExp("[~\\*/\\[\\]]");function v_(r,e,t){if(e.search(R_)>=0)throw Bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new OB(...e.split("."))._internalPath}catch{throw Bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Bo(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let B=`Function ${e}() called with invalid data`;t&&(B+=" (via `toFirestore()`)"),B+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${n}`),o&&(u+=` in document ${s}`),u+=")"),new z(x.INVALID_ARGUMENT,B+r+u)}function P_(r,e){return r.some((t=>t.isEqual(e)))}function S_(r){return typeof r._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const n=ft.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const o=e[s];let B;i.nestedOptions&&Zs(o)?B={mapValue:{fields:new We(i.nestedOptions).getOptionsProto(t,o)}}:o&&(B=Us(o,t)??void 0),B&&n.set(pt.fromServerFormat(i.serverName),B)}}return n}getOptionsProto(e,t,n){const s=this._getKnownOptions(t,e);if(n){const i=new Map(xm(n,((o,B)=>[pt.fromServerFormat(B),o!==void 0?Us(o,e):null])));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(r){return typeof r=="object"&&r!==null&&!!("nullValue"in r&&(r.nullValue===null||r.nullValue==="NULL_VALUE")||"booleanValue"in r&&(r.booleanValue===null||typeof r.booleanValue=="boolean")||"integerValue"in r&&(r.integerValue===null||typeof r.integerValue=="number"||typeof r.integerValue=="string")||"doubleValue"in r&&(r.doubleValue===null||typeof r.doubleValue=="number")||"timestampValue"in r&&(r.timestampValue===null||(function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")})(r.timestampValue))||"stringValue"in r&&(r.stringValue===null||typeof r.stringValue=="string")||"bytesValue"in r&&(r.bytesValue===null||r.bytesValue instanceof Uint8Array)||"referenceValue"in r&&(r.referenceValue===null||typeof r.referenceValue=="string")||"geoPointValue"in r&&(r.geoPointValue===null||(function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")})(r.geoPointValue))||"arrayValue"in r&&(r.arrayValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))})(r.arrayValue))||"mapValue"in r&&(r.mapValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!Zs(t.fields))})(r.mapValue))||"fieldReferenceValue"in r&&(r.fieldReferenceValue===null||typeof r.fieldReferenceValue=="string")||"functionValue"in r&&(r.functionValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))})(r.functionValue))||"pipelineValue"in r&&(r.pipelineValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))})(r.pipelineValue)))}function yR(){return new VB("serverTimestamp")}function O_(r){return new ot(r)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(r){let e;return r instanceof hr?r:(e=Zs(r)?x_(r):r instanceof Array?M_(r):of(r,void 0),e)}function Pa(r){if(r instanceof hr)return r;if(r instanceof ot)return Js(r);if(Array.isArray(r))return Js(O_(r));throw new Error("Unsupported value: "+typeof r)}function xB(r){return qm(r)?L_(r):H(r)}class hr{constructor(){this._protoValueType="ProtoValue"}add(e){return new F("add",[this,H(e)],"add")}asBoolean(){if(this instanceof bn)return this;if(this instanceof Ur)return new Bf(this);if(this instanceof ii)return new V_(this);if(this instanceof F)return new af(this);throw new z("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new F("subtract",[this,H(e)],"subtract")}multiply(e){return new F("multiply",[this,H(e)],"multiply")}divide(e){return new F("divide",[this,H(e)],"divide")}mod(e){return new F("mod",[this,H(e)],"mod")}equal(e){return new F("equal",[this,H(e)],"equal").asBoolean()}notEqual(e){return new F("not_equal",[this,H(e)],"notEqual").asBoolean()}lessThan(e){return new F("less_than",[this,H(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new F("less_than_or_equal",[this,H(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new F("greater_than",[this,H(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new F("greater_than_or_equal",[this,H(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const n=[e,...t].map((s=>H(s)));return new F("array_concat",[this,...n],"arrayConcat")}arrayContains(e){return new F("array_contains",[this,H(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new ps(e.map(H),"arrayContainsAll"):e;return new F("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new ps(e.map(H),"arrayContainsAny"):e;return new F("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new F("array_reverse",[this])}arrayLength(){return new F("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new ps(e.map(H),"equalAny"):e;return new F("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new ps(e.map(H),"notEqualAny"):e;return new F("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new F("exists",[this],"exists").asBoolean()}charLength(){return new F("char_length",[this],"charLength")}like(e){return new F("like",[this,H(e)],"like").asBoolean()}regexContains(e){return new F("regex_contains",[this,H(e)],"regexContains").asBoolean()}regexFind(e){return new F("regex_find",[this,H(e)],"regexFind")}regexFindAll(e){return new F("regex_find_all",[this,H(e)],"regexFindAll")}regexMatch(e){return new F("regex_match",[this,H(e)],"regexMatch").asBoolean()}stringContains(e){return new F("string_contains",[this,H(e)],"stringContains").asBoolean()}startsWith(e){return new F("starts_with",[this,H(e)],"startsWith").asBoolean()}endsWith(e){return new F("ends_with",[this,H(e)],"endsWith").asBoolean()}toLower(){return new F("to_lower",[this],"toLower")}toUpper(){return new F("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(H(e)),new F("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(H(e)),new F("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(H(e)),new F("rtrim",t,"rtrim")}type(){return new F("type",[this])}isType(e){return new F("is_type",[this,Js(e)],"isType").asBoolean()}stringConcat(e,...t){const n=[e,...t].map(H);return new F("string_concat",[this,...n],"stringConcat")}stringIndexOf(e){return new F("string_index_of",[this,H(e)],"stringIndexOf")}stringRepeat(e){return new F("string_repeat",[this,H(e)],"stringRepeat")}stringReplaceAll(e,t){return new F("string_replace_all",[this,H(e),H(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new F("string_replace_one",[this,H(e),H(t)],"stringReplaceOne")}concat(e,...t){const n=[e,...t].map(H);return new F("concat",[this,...n],"concat")}reverse(){return new F("reverse",[this],"reverse")}arrayFilter(e,t){return new F("array_filter",[this,H(e),t],"arrayFilter")}arrayTransform(e,t){return new F("array_transform",[this,H(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,n){return new F("array_transform",[this,H(e),H(t),n],"arrayTransformWithIndex")}arraySlice(e,t){const n=[this,H(e)];return t!==void 0&&n.push(H(t)),new F("array_slice",n,"arraySlice")}arrayFirst(){return new F("array_first",[this],"arrayFirst")}arrayFirstN(e){return new F("array_first_n",[this,H(e)],"arrayFirstN")}arrayLast(){return new F("array_last",[this],"arrayLast")}arrayLastN(e){return new F("array_last_n",[this,H(e)],"arrayLastN")}arrayMaximum(){return new F("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new F("maximum_n",[this,H(e)],"arrayMaximumN")}arrayMinimum(){return new F("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new F("minimum_n",[this,H(e)],"arrayMinimumN")}arrayIndexOf(e){return new F("array_index_of",[this,H(e),H("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new F("array_index_of",[this,H(e),H("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new F("array_index_of_all",[this,H(e)],"arrayIndexOfAll")}byteLength(){return new F("byte_length",[this],"byteLength")}ceil(){return new F("ceil",[this])}floor(){return new F("floor",[this])}abs(){return new F("abs",[this])}exp(){return new F("exp",[this])}mapGet(e){return new F("map_get",[this,Js(e)],"mapGet")}mapSet(e,t,...n){const s=[this,H(e),H(t),...n.map(H)];return new F("map_set",s,"mapSet")}mapKeys(){return new F("map_keys",[this],"mapKeys")}mapValues(){return new F("map_values",[this],"mapValues")}mapEntries(){return new F("map_entries",[this],"mapEntries")}getField(e){return new F("get_field",[this,H(e)],"get_field")}count(){return ht._create("count",[this],"count")}sum(){return ht._create("sum",[this],"sum")}average(){return ht._create("average",[this],"average")}minimum(){return ht._create("minimum",[this],"minimum")}maximum(){return ht._create("maximum",[this],"maximum")}first(){return ht._create("first",[this],"first")}last(){return ht._create("last",[this],"last")}arrayAgg(){return ht._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return ht._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return ht._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const n=[e,...t];return new F("maximum",[this,...n.map(H)],"logicalMaximum")}logicalMinimum(e,...t){const n=[e,...t];return new F("minimum",[this,...n.map(H)],"minimum")}vectorLength(){return new F("vector_length",[this],"vectorLength")}cosineDistance(e){return new F("cosine_distance",[this,Pa(e)],"cosineDistance")}dotProduct(e){return new F("dot_product",[this,Pa(e)],"dotProduct")}euclideanDistance(e){return new F("euclidean_distance",[this,Pa(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new F("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new F("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new F("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new F("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new F("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new F("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new F("timestamp_add",[this,H(e),H(t)],"timestampAdd")}timestampSubtract(e,t){return new F("timestamp_subtract",[this,H(e),H(t)],"timestampSubtract")}timestampDiff(e,t){return new F("timestamp_diff",[this,xB(e),H(t)],"timestampDiff")}timestampExtract(e,t){const n=[this,H(e)];return t&&n.push(H(t)),new F("timestamp_extract",n,"timestampExtract")}documentId(){return new F("document_id",[this],"documentId")}parent(){return new F("parent",[this],"parent")}substring(e,t){const n=H(e);return new F("substring",t===void 0?[this,n]:[this,n,H(t)],"substring")}arrayGet(e){return new F("array_get",[this,H(e)],"arrayGet")}isError(){return new F("is_error",[this],"isError").asBoolean()}ifError(e){const t=new F("if_error",[this,H(e)],"ifError");return e instanceof bn?t.asBoolean():t}isAbsent(){return new F("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new F("map_remove",[this,H(e)],"mapRemove")}mapMerge(e,...t){const n=H(e),s=t.map(H);return new F("map_merge",[this,n,...s],"mapMerge")}pow(e){return new F("pow",[this,H(e)])}trunc(e){return e===void 0?new F("trunc",[this]):new F("trunc",[this,H(e)],"trunc")}round(e){return e===void 0?new F("round",[this]):new F("round",[this,H(e)],"round")}collectionId(){return new F("collection_id",[this])}length(){return new F("length",[this])}ln(){return new F("ln",[this])}sqrt(){return new F("sqrt",[this])}stringReverse(){return new F("string_reverse",[this])}ifAbsent(e){return new F("if_absent",[this,H(e)],"ifAbsent")}ifNull(e){return new F("if_null",[this,H(e)],"ifNull")}coalesce(e,...t){return new F("coalesce",[this,H(e),...t.map(H)],"coalesce")}join(e){return new F("join",[this,H(e)],"join")}log10(){return new F("log10",[this])}arraySum(){return new F("sum",[this])}split(e){return new F("split",[this,H(e)])}timestampTruncate(e,t){const n=[this,H(e)];return t&&n.push(H(t)),new F("timestamp_trunc",n)}ascending(){return G_(this)}descending(){return H_(this)}as(e){return new F_(this,e,"as")}}class ht{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,n){const s=new ht(e,t);return s._methodName=n,s}as(e){return new N_(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map((t=>t._toProto(e)))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e)))}}class N_{constructor(e,t,n){this.aggregate=e,this.alias=t,this._methodName=n}_readUserData(e){this.aggregate._readUserData(e)}}class F_{constructor(e,t,n){this.expr=e,this.alias=t,this._methodName=n,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class ps extends hr{constructor(e,t){super(),this.ur=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.ur.map((t=>t._toProto(e)))}}}_readUserData(e){this.ur.forEach((t=>t._readUserData(e)))}}class ii extends hr{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new F("geo_distance",[this,H(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function L_(r){return k_(r,"field")}function k_(r,e){return new ii(typeof r=="string"?br===r?QE()._internalPath:Fo("field",r):r._internalPath,e)}class Ur extends hr{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Ur(e,void 0);return t._protoValue=e,t}_toProto(e){return Q(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,b_(this._protoValue)||(this._protoValue=Us(this.value,e))}}function Js(r,e){return of(r,"constant")}function of(r,e){const t=new Ur(r,e);return typeof r=="boolean"?new Bf(t):t}class F extends hr{constructor(e,t,n,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,n!==void 0&&(this._methodName=n),s!==void 0&&(this._options=s)}get _optionsUtil(){return new We({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((n=>n._toProto(e)))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e))),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class bn extends hr{get _methodName(){return this._expr._methodName}countIf(){return ht._create("count_if",[this],"countIf")}not(){return new F("not",[this],"not").asBoolean()}conditional(e,t){return new F("conditional",[this,e,t],"conditional")}ifError(e){const t=H(e),n=new F("if_error",[this,t],"ifError");return t instanceof bn?n.asBoolean():n}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class af extends bn{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class Bf extends bn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class V_ extends bn{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function x_(r,e){const t=[];for(const n in r)if(Object.prototype.hasOwnProperty.call(r,n)){const s=r[n];t.push(Js(n)),t.push(H(s))}return new F("map",t,"map")}function M_(r){return(function(t,n){return new F("array",t.map((s=>H(s))),n)})(r,"array")}function G_(r){return new uf(xB(r),"ascending","ascending")}function H_(r){return new uf(xB(r),"descending","descending")}class uf{constructor(e,t,n){this.expr=e,this.direction=t,this._methodName=n,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:QC(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class cf extends mt{get _name(){return"add_fields"}get _optionsUtil(){return new We({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[Gs(e,this.fields)]}}_readUserData(e){super._readUserData(e),On(this.fields,e)}}class lf extends mt{get _name(){return"aggregate"}get _optionsUtil(){return new We({})}constructor(e,t,n){super(n),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[Gs(e,this.accumulators),Gs(e,this.groups)]}}_readUserData(e){super._readUserData(e),On(this.groups,e),On(this.accumulators,e)}}class hf extends mt{get _name(){return"distinct"}get _optionsUtil(){return new We({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[Gs(e,this.groups)]}}_readUserData(e){super._readUserData(e),On(this.groups,e)}}class Lo extends mt{get _name(){return"collection"}get _optionsUtil(){return new We({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Er=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Er}]}}_readUserData(e){super._readUserData(e)}}class ko extends mt{get _name(){return"collection_group"}get _optionsUtil(){return new We({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class MB extends mt{get _name(){return"database"}get _optionsUtil(){return new We({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class GB extends mt{get _name(){return"documents"}get _optionsUtil(){return new We({})}constructor(e,t){if(super(t),!e||e.length===0)throw new z(x.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const n=e.map((i=>i.startsWith("/")?i:"/"+i)),s=new Set(n);if(s.size!==n.length)throw new z(x.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.hr=n,this.Tr=s}_toProto(e){return{...super._toProto(e),args:this.hr.map((t=>({referenceValue:t})))}}_readUserData(e){super._readUserData(e)}}class HB extends mt{get _name(){return"where"}get _optionsUtil(){return new We({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),On(this.condition,e)}}class js extends mt{get _name(){return"limit"}get _optionsUtil(){return new We({})}constructor(e,t){Q(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[TB(e,this.limit)]}}}class Ul extends mt{get _name(){return"offset"}get _optionsUtil(){return new We({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[TB(e,this.offset)]}}}class U_ extends mt{get _name(){return"select"}get _optionsUtil(){return new We({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[Gs(e,this.selections)]}}_readUserData(e){super._readUserData(e),On(this.selections,e)}}class UB extends mt{get _name(){return"sort"}get _optionsUtil(){return new We({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map((t=>t._toProto(e)))}}_readUserData(e){super._readUserData(e),On(this.orderings,e)}}class JB extends mt{get _name(){return"replace_with"}get _optionsUtil(){return new We({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),QC(JB.Pr)]}}_readUserData(e){super._readUserData(e),On(this.map,e)}}JB.Pr="full_replace";function On(r,e){return S_(r)?r._readUserData(e):Array.isArray(r)?r.forEach((t=>t._readUserData(e))):r instanceof Map?r.forEach((t=>t._readUserData(e))):Object.values(r).forEach((t=>t._readUserData(e))),r}// Copyright 2024 Google LLC* @license
class st{constructor(e,t,n){this.serializer=e,this.stages=t,this.listenOptions=n,this.isCorePipeline=!0}getPipelineCollection(){return Vo(this)}getPipelineCollectionGroup(){return jB(this)}getPipelineCollectionId(){return J_(this)}getPipelineDocuments(){return rB(this)}getPipelineFlavor(){return(function(t){let n="exact";return t.stages.forEach(((s,i)=>{s._name!==hf.name&&s._name!==lf.name||(n="keyless"),s._name===U_.name&&n==="exact"&&(n="augmented"),s._name===cf.name&&i<t.stages.length-1&&n==="exact"&&(n="augmented")})),n})(this)}getPipelineSourceType(){return yn(this)}}function yn(r){const e=r.stages[0];return e instanceof Lo||e instanceof ko||e instanceof MB||e instanceof GB?e._name:"unknown"}function Vo(r){if(yn(r)==="collection")return r.stages[0].Er}function jB(r){if(yn(r)==="collection_group")return r.stages[0].collectionId}function J_(r){switch(yn(r)){case"collection":return he.fromString(Vo(r)).lastSegment();case"collection_group":return jB(r);default:return}}function rB(r){if(yn(r)==="documents")return r.stages[0].hr}class I{constructor(e,t){this.type=e,this.value=t}static dr(){return new I("ERROR",void 0)}static mr(){return new I("UNSET",void 0)}static pr(){return new I("NULL",Nr)}static newValue(e){return dt(e)?new I("NULL",Nr):(function(n){return!!n&&"booleanValue"in n})(e)?new I("BOOLEAN",e):Nt(e)?new I("INT",e):Qn(e)?new I("DOUBLE",e):(function(n){return!!n&&"timestampValue"in n&&!!n.timestampValue})(e)?new I("TIMESTAMP",e):(function(n){return!!n&&"stringValue"in n})(e)?new I("STRING",e):(function(n){return!!n&&"bytesValue"in n})(e)?new I("BYTES",e):e.referenceValue?new I("REFERENCE",e):e.geoPointValue?new I("GEO_POINT",e):Lr(e)?new I("ARRAY",e):eo(e)?new I("VECTOR",e):Xn(e)?new I("MAP",e):new I("ERROR",void 0)}gr(){return this.type==="ERROR"||this.type==="UNSET"}yr(){return this.type==="NULL"}}function ys(r){if(!r.gr())return r.value}function Cf(r){return r instanceof bn?r._expr:r}function Z(r){if((r=Cf(r))instanceof ii)return new j_(r);if(r instanceof Ur)return new q_(r);if(r instanceof ps)return new K_(r);if(r instanceof F){if(r.name==="add")return new W_(r);if(r.name==="subtract")return new $_(r);if(r.name==="multiply")return new Y_(r);if(r.name==="divide")return new X_(r);if(r.name==="mod")return new Z_(r);if(r.name==="and")return new eD(r);if(r.name==="equal")return new hD(r);if(r.name==="not_equal")return new CD(r);if(r.name==="less_than")return new fD(r);if(r.name==="less_than_or_equal")return new dD(r);if(r.name==="greater_than")return new pD(r);if(r.name==="greater_than_or_equal")return new gD(r);if(r.name==="array_concat")return new mD(r);if(r.name==="array_reverse")return new ED(r);if(r.name==="array_contains")return new _D(r);if(r.name==="array_contains_all")return new DD(r);if(r.name==="array_contains_any")return new ID(r);if(r.name==="array_length")return new wD(r);if(r.name==="array_element")return new yD(r);if(r.name==="equal_any")return new ff(r);if(r.name==="not_equal_any")return new nD(r);if(r.name==="is_nan")return new rD(r);if(r.name==="is_not_nan")return new sD(r);if(r.name==="is_null")return new iD(r);if(r.name==="is_not_null")return new oD(r);if(r.name==="is_error")return new aD(r);if(r.name==="exists")return new BD(r);if(r.name==="not")return new xo(r);if(r.name==="or")return new tD(r);if(r.name==="xor")return new qB(r);if(r.name==="conditional")return new uD(r);if(r.name==="maximum")return new cD(r);if(r.name==="minimum")return new lD(r);if(r.name==="reverse")return new TD(r);if(r.name==="replace_first")return new AD(r);if(r.name==="replace_all")return new RD(r);if(r.name==="char_length")return new vD(r);if(r.name==="byte_length")return new PD(r);if(r.name==="like")return new SD(r);if(r.name==="regex_contains")return new bD(r);if(r.name==="regex_match")return new OD(r);if(r.name==="string_contains")return new ND(r);if(r.name==="starts_with")return new FD(r);if(r.name==="ends_with")return new LD(r);if(r.name==="to_lower")return new kD(r);if(r.name==="to_upper")return new VD(r);if(r.name==="trim")return new xD(r);if(r.name==="string_concat")return new MD(r);if(r.name==="map_get")return new GD(r);if(r.name==="cosine_distance")return new HD(r);if(r.name==="dot_product")return new UD(r);if(r.name==="euclidean_distance")return new JD(r);if(r.name==="vector_length")return new jD(r);if(r.name==="unix_micros_to_timestamp")return new WD(r);if(r.name==="timestamp_to_unix_micros")return new XD(r);if(r.name==="unix_millis_to_timestamp")return new $D(r);if(r.name==="timestamp_to_unix_millis")return new ZD(r);if(r.name==="unix_seconds_to_timestamp")return new YD(r);if(r.name==="timestamp_to_unix_seconds")return new eI(r);if(r.name==="timestamp_add")return new tI(r);if(r.name==="timestamp_subtract")return new nI(r)}throw new Error(`Unknown Expr : ${r}`)}class j_{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===br)return I.newValue({referenceValue:ao(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return I.newValue({timestampValue:qi(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return I.newValue({timestampValue:qi(e.serializer,t.createTime)});const n=t.data.field(this.expr._fieldPath);return n?To(n)?I.newValue((function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:qi(i.serializer,te.fromTimestamp(Or(o)))};if(i.serverTimestampBehavior==="previous"){const B=ti(o);if(B)return B}return{nullValue:"NULL_VALUE"}})(e,n)):I.newValue(n):I.mr()}}class q_{constructor(e){this.expr=e}evaluate(e,t){return I.newValue(this.expr._getValue())}}class K_{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.ur.map((s=>Z(s).evaluate(e,t)));return n.some((s=>s.gr()))?I.dr():I.newValue({arrayValue:{values:n.map((s=>s.value))}})}}function Je(r){return Qn(r)?Number(r.doubleValue):Number(r.integerValue)}function Ht(r){return BigInt(r.integerValue)}const z_=BigInt("0x7fffffffffffffff"),Q_=-BigInt("0x8000000000000000");class oi{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length>=2,24778);const n=Z(this.expr.params[0]).evaluate(e,t),s=Z(this.expr.params[1]).evaluate(e,t);let i=this.wr(n,s);for(const o of this.expr.params.slice(2)){const B=Z(o).evaluate(e,t);i=this.wr(i,B)}return i}wr(e,t){if(e.gr()||t.gr())return I.dr();if(e.yr()||t.yr())return I.pr();const n=e.value,s=t.value;if(!Qn(n)&&!Nt(n)||!Qn(s)&&!Nt(s))return I.dr();if(Qn(n)||Qn(s)){const i=this.br(n,s);return i?I.newValue(i):I.dr()}if(Nt(n)&&Nt(s)){const i=this.Sr(n,s);return i===void 0?I.dr():typeof i=="number"?I.newValue({doubleValue:i}):i<Q_||i>z_?I.dr():I.newValue({integerValue:`${i}`})}return I.dr()}}function en(r,e){return be(r)!==be(e)?"TYPE_MISMATCH":ut(r)||ut(e)?"NOT_EQ":dt(r)&&dt(e)?"EQ":dt(r)||dt(e)?"NULL":Lr(r)&&Lr(e)?(function(n,s){var o,B,u;if(((o=n.values)==null?void 0:o.length)!==((B=s.values)==null?void 0:B.length))return"NOT_EQ";let i=!1;for(let c=0;c<(((u=n.values)==null?void 0:u.length)??0);c++){const C=n.values[c],f=s.values[c];switch(en(C,f)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:Y(44609,{vr:C,Dr:f})}}return i?"NULL":"EQ"})(r.arrayValue,e.arrayValue):eo(r)&&eo(e)||Xn(r)&&Xn(e)?(function(n,s){const i=n.fields||{},o=s.fields||{};if(Xi(i)!==Xi(o))return"NOT_EQ";let B=!1;for(const u in i)if(i.hasOwnProperty(u)){if(o[u]===void 0)return"NOT_EQ";switch(en(i[u],o[u])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":B=!0}}return B?"NULL":"EQ"})(r.mapValue,e.mapValue):(function(n,s){return It(n,s,{o:!1,t:!0,i:!0})})(r,e)?"EQ":"NOT_EQ"}class W_ extends oi{Sr(e,t){return Ht(e)+Ht(t)}br(e,t){return{doubleValue:Je(e)+Je(t)}}}class $_ extends oi{constructor(e){super(e),this.expr=e}Sr(e,t){return Ht(e)-Ht(t)}br(e,t){return{doubleValue:Je(e)-Je(t)}}}class Y_ extends oi{constructor(e){super(e),this.expr=e}Sr(e,t){return Ht(e)*Ht(t)}br(e,t){return{doubleValue:Je(e)*Je(t)}}}class X_ extends oi{constructor(e){super(e),this.expr=e}Sr(e,t){const n=Ht(t);if(n!==BigInt(0))return Ht(e)/n}br(e,t){const n=Je(t);return n===0?{doubleValue:Os(n)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:Je(e)/n}}}class Z_ extends oi{constructor(e){super(e),this.expr=e}Sr(e,t){const n=Ht(t);if(n!==BigInt(0))return Ht(e)%n}br(e,t){const n=Je(t);if(n!==0)return{doubleValue:Je(e)%n}}}class eD{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,s=!1;for(const o of this.expr.params){const B=Z(o).evaluate(e,t);switch(B.type){case"BOOLEAN":if(!((i=B.value)!=null&&i.booleanValue))return I.newValue(Ge);break;case"NULL":s=!0;break;default:n=!0}}return n?I.dr():s?I.pr():I.newValue(at)}}class xo{constructor(e){this.expr=e}evaluate(e,t){var s;Q(this.expr.params.length===1,9634);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return I.newValue({booleanValue:!((s=n.value)!=null&&s.booleanValue)});case"NULL":return I.pr();default:return I.dr()}}}class tD{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,s=!1;for(const o of this.expr.params){const B=Z(o).evaluate(e,t);switch(B.type){case"BOOLEAN":if((i=B.value)!=null&&i.booleanValue)return I.newValue(at);break;case"NULL":s=!0;break;default:n=!0}}return n?I.dr():s?I.pr():I.newValue(Ge)}}class qB{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,s=!1;for(const o of this.expr.params){const B=Z(o).evaluate(e,t);switch(B.type){case"BOOLEAN":n=qB.xor(n,!!((i=B.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return I.dr()}}return s?I.pr():I.newValue({booleanValue:n})}static xor(e,t){return(e||t)&&!(e&&t)}}class ff{constructor(e){this.expr=e}evaluate(e,t){var o,B;Q(this.expr.params.length===2,55094);let n=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":n=!0;break;case"ERROR":case"UNSET":return I.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return I.dr()}if(n)return I.pr();for(const u of((B=(o=i.value)==null?void 0:o.arrayValue)==null?void 0:B.values)??[])switch(dt(s.value)&&dt(u)?"EQ":en(s.value,u)){case"EQ":return I.newValue(at);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Y(44608,{value:s.value,candidate:u})}return n?I.pr():I.newValue(Ge)}}class nD{constructor(e){this.expr=e}evaluate(e,t){return new xo(new F("not",[new F("equal_any",this.expr.params)])).evaluate(e,t)}}class rD{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,23322);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return I.newValue(Ge);case"DOUBLE":return I.newValue({booleanValue:isNaN(Je(n.value))});case"NULL":return I.pr();default:return I.dr()}}}class sD{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===1,50406),new xo(new F("not",[new F("is_nan",this.expr.params)])).evaluate(e,t)}}class iD{constructor(e){this.expr=e}evaluate(e,t){switch(Q(this.expr.params.length===1,23123),Z(this.expr.params[0]).evaluate(e,t).type){case"NULL":return I.newValue(at);case"UNSET":case"ERROR":return I.dr();default:return I.newValue(Ge)}}}class oD{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===1,23167),new xo(new F("not",[new F("is_null",this.expr.params)])).evaluate(e,t)}}class aD{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===1,5228),Z(this.expr.params[0]).evaluate(e,t).type==="ERROR"?I.newValue(at):I.newValue(Ge)}}class BD{constructor(e){this.expr=e}evaluate(e,t){switch(Q(this.expr.params.length===1,6877),Z(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return I.dr();case"UNSET":return I.newValue(Ge);default:return I.newValue(at)}}}class uD{constructor(e){this.expr=e}evaluate(e,t){var s;Q(this.expr.params.length===3,11706);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return(s=n.value)!=null&&s.booleanValue?Z(this.expr.params[1]).evaluate(e,t):Z(this.expr.params[2]).evaluate(e,t);case"NULL":return Z(this.expr.params[2]).evaluate(e,t);default:return I.dr()}}}class cD{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((i=>Z(i).evaluate(e,t)));let s;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||Bt(i.value,s.value)>0?i:s}return s===void 0?I.pr():s}}class lD{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((i=>Z(i).evaluate(e,t)));let s;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||Bt(i.value,s.value)<0?i:s}return s===void 0?I.pr():s}}class Jr{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"ERROR":case"UNSET":return I.dr()}const s=Z(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return I.dr()}return this.Cr(n,s)}}class hD extends Jr{constructor(e){super(e),this.expr=e}Cr(e,t){if(e.yr()&&t.yr())return I.newValue(at);if(e.yr()||t.yr()||ut(e.value)||ut(t.value)||be(e.value)!==be(t.value))return I.newValue(Ge);switch(en(e.value,t.value)){case"EQ":return I.newValue(at);case"NOT_EQ":return I.newValue(Ge);case"NULL":return I.pr();default:Y(44615,{left:e,right:t})}}}class CD extends Jr{constructor(e){super(e),this.expr=e}Cr(e,t){switch(en(e.value,t.value)){case"EQ":return I.newValue(Ge);case"NOT_EQ":case"TYPE_MISMATCH":return I.newValue(at);case"NULL":return I.pr();default:Y(44614,{left:e,right:t})}}}class fD extends Jr{constructor(e){super(e),this.expr=e}Cr(e,t){return be(e.value)!==be(t.value)||ut(e.value)||ut(t.value)?I.newValue(Ge):I.newValue({booleanValue:Bt(e.value,t.value)<0})}}class dD extends Jr{constructor(e){super(e),this.expr=e}Cr(e,t){return be(e.value)!==be(t.value)||ut(e.value)||ut(t.value)?I.newValue(Ge):en(e.value,t.value)==="EQ"?I.newValue(at):I.newValue({booleanValue:Bt(e.value,t.value)<0})}}class pD extends Jr{constructor(e){super(e),this.expr=e}Cr(e,t){return be(e.value)!==be(t.value)||ut(e.value)||ut(t.value)?I.newValue(Ge):I.newValue({booleanValue:Bt(e.value,t.value)>0})}}class gD extends Jr{constructor(e){super(e),this.expr=e}Cr(e,t){return be(e.value)!==be(t.value)||ut(e.value)||ut(t.value)?I.newValue(Ge):en(e.value,t.value)==="EQ"?I.newValue(at):I.newValue({booleanValue:Bt(e.value,t.value)>0})}}class mD{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class ED{constructor(e){this.expr=e}evaluate(e,t){var s;Q(this.expr.params.length===1,216);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return I.pr();case"ARRAY":{const i=((s=n.value.arrayValue)==null?void 0:s.values)??[];return I.newValue({arrayValue:{values:[...i].reverse()}})}default:return I.dr()}}}class _D{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===2,52884),new ff(new F("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class DD{constructor(e){this.expr=e}evaluate(e,t){var u,c,C,f;Q(this.expr.params.length===2,1392);let n=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return I.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return I.dr()}if(n)return I.pr();const o=((c=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:c.values)??[],B=((f=(C=s.value)==null?void 0:C.arrayValue)==null?void 0:f.values)??[];for(const m of o){let T=!1;n=!1;for(const P of B){switch(dt(m)&&dt(P)?"EQ":en(m,P)){case"EQ":T=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Y(44613,{value:P,search:m})}if(T)break}if(!T)return I.newValue(Ge)}return I.newValue(at)}}class ID{constructor(e){this.expr=e}evaluate(e,t){var u,c,C,f;Q(this.expr.params.length===2,2680);let n=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return I.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return I.dr()}if(n)return I.pr();const o=((c=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:c.values)??[],B=((f=(C=s.value)==null?void 0:C.arrayValue)==null?void 0:f.values)??[];for(const m of B)for(const T of o)switch(dt(m)&&dt(T)?"EQ":en(m,T)){case"EQ":return I.newValue(at);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Y(60403,{value:m,search:T})}return n?I.pr():I.newValue(Ge)}}class wD{constructor(e){this.expr=e}evaluate(e,t){var s,i,o;Q(this.expr.params.length===1,38605);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return I.pr();case"ARRAY":return I.newValue({integerValue:`${((o=(i=(s=n.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:o.length)??0}`});default:return I.dr()}}}class yD{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class TD{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,1508);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return I.pr();case"BYTES":{const o=(s=n.value)==null?void 0:s.bytesValue;if(typeof o=="string"){const B=Se.fromBase64String(o).toUint8Array();return B.reverse(),I.newValue({bytesValue:Se.fromUint8Array(B).toBase64()})}return I.newValue({bytesValue:new Uint8Array(o).reverse()})}case"STRING":{const o=(i=n.value)==null?void 0:i.stringValue,B=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(o),u=Array.from(B,(c=>c.segment)).reverse();return I.newValue({stringValue:u.join("")})}default:return I.dr()}}}class AD{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class RD{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class vD{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,19400);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return I.pr();case"STRING":{const s=(function(o){let B=0;for(let u=0;u<o.length;u++){const c=o.codePointAt(u);if(c===void 0)return;if(c<=65535)if(c>=55296&&c<=57343)if(c<=56319){const C=o.codePointAt(u+1);C!==void 0&&C>=56320&&C<=57343?(B+=1,u++):B+=1}else B+=1;else B+=1;else{if(!(c<=1114111))return;B+=1,u++}}return B})(n.value.stringValue);return s===void 0?I.dr():I.newValue({integerValue:s})}default:return I.dr()}}}class PD{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,8486);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BYTES":{const o=(s=n.value)==null?void 0:s.bytesValue;return typeof o=="string"?I.newValue({integerValue:Se.fromBase64String(o).toUint8Array().length}):I.newValue({integerValue:new Uint8Array(o).length})}case"STRING":{const o=(function(u){let c=0;for(let C=0;C<u.length;C++){const f=u.codePointAt(C);if(f===void 0)return;if(f>=55296&&f<=57343){if(!(f<=56319))return;{const m=u.codePointAt(C+1);if(m===void 0||!(m>=56320&&m<=57343))return;c+=4,C++}}else if(f<=127)c+=1;else if(f<=2047)c+=2;else if(f<=65535)c+=3;else{if(!(f<=1114111))return;c+=4,C++}}return c})((i=n.value)==null?void 0:i.stringValue);return o===void 0?I.dr():I.newValue({integerValue:o})}case"NULL":return I.pr();default:return I.dr()}}}class jr{constructor(e){this.expr=e}evaluate(e,t){var o,B;Q(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let n=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":n=!0;break;default:return I.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":n=!0;break;default:return I.dr()}return n?I.pr():this.Fr((o=s.value)==null?void 0:o.stringValue,(B=i.value)==null?void 0:B.stringValue)}}class SD extends jr{Fr(e,t){try{const n=(function(o){let B="";for(let u=0;u<o.length;u++){const c=o.charAt(u);switch(c){case"_":B+=".";break;case"%":B+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":B+="\\"+c;break;default:B+=c}}return"^"+B+"$"})(t),s=EB.compile(n);return I.newValue({booleanValue:s.matches(e)})}catch(n){return vt(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${n}`),I.dr()}}}class bD extends jr{Fr(e,t){try{const n=EB.compile(t);return I.newValue({booleanValue:n.test(e)})}catch{return vt(`Invalid regex pattern found in regex_contains: ${t}, returning error`),I.dr()}}}class OD extends jr{Fr(e,t){try{return I.newValue({booleanValue:EB.compile(t).matches(e)})}catch{return vt(`Invalid regex pattern found in regex_match: ${t}, returning error`),I.dr()}}}class ND extends jr{Fr(e,t){return I.newValue({booleanValue:e.includes(t)})}}class FD extends jr{Fr(e,t){return I.newValue({booleanValue:e.startsWith(t)})}}class LD extends jr{Fr(e,t){return I.newValue({booleanValue:e.endsWith(t)})}}class kD{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,29079);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return I.newValue({stringValue:(i=(s=n.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return I.pr();default:return I.dr()}}}class VD{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,60487);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return I.newValue({stringValue:(i=(s=n.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return I.pr();default:return I.dr()}}}class xD{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,28544);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return I.newValue({stringValue:(i=(s=n.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return I.pr();default:return I.dr()}}}class MD{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((o=>Z(o).evaluate(e,t)));let s="",i=!1;for(const o of n)switch(o.type){case"STRING":s+=o.value.stringValue;break;case"NULL":i=!0;break;default:return I.dr()}return i?I.pr():I.newValue({stringValue:s})}}class GD{constructor(e){this.expr=e}evaluate(e,t){var o,B,u,c;Q(this.expr.params.length===2,4483);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"UNSET":return I.mr();case"MAP":break;default:return I.dr()}const s=Z(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return I.dr();const i=(c=(B=(o=n.value)==null?void 0:o.mapValue)==null?void 0:B.fields)==null?void 0:c[(u=s.value)==null?void 0:u.stringValue];return i===void 0?I.mr():I.newValue(i)}}class KB{constructor(e){this.expr=e}evaluate(e,t){var c,C;Q(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let n=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":n=!0;break;default:return I.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":n=!0;break;default:return I.dr()}if(n)return I.pr();const o=$a(s.value),B=$a(i.value);if(o===void 0||B===void 0||((c=o.values)==null?void 0:c.length)!==((C=B.values)==null?void 0:C.length))return I.dr();const u=this.Or(o,B);return u===void 0||isNaN(u)?I.dr():I.newValue({doubleValue:u})}}class HD extends KB{Or(e,t){const n=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(n.length===0)return;let i=0,o=0,B=0;for(let c=0;c<n.length;c++){if(!Pn(n[c])||!Pn(s[c]))return;const C=Je(n[c]),f=Je(s[c]);i+=C*f,o+=C*C,B+=f*f}const u=Math.sqrt(o)*Math.sqrt(B);if(u!==0)return 1-Math.max(-1,Math.min(1,i/u))}}class UD extends KB{Or(e,t){const n=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!Pn(n[o])||!Pn(s[o]))return;i+=Je(n[o])*Je(s[o])}return i}}class JD extends KB{Or(e,t){const n=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!Pn(n[o])||!Pn(s[o]))return;const B=Je(n[o]),u=Je(s[o]);i+=Math.pow(B-u,2)}return Math.sqrt(i)}}class jD{constructor(e){this.expr=e}evaluate(e,t){var s;Q(this.expr.params.length===1,39044);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"VECTOR":{const i=$a(n.value);return I.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return I.pr();default:return I.dr()}}}const qs=BigInt(-62135596800),Ks=BigInt(253402300799),uo=BigInt(1e3),Tn=BigInt(1e6),qD=qs*uo,KD=Ks*uo+BigInt(999),zD=qs*Tn,QD=Ks*Tn+BigInt(999999);function zB(r){return r>=zD&&r<=QD}function df(r){return r>=qs&&r<=Ks}function zs(r,e){const t=BigInt(r);return!(t<qs||t>Ks)&&!(e<0||e>=1e9)&&(t!==qs||e===0)&&!(t===Ks&&e>999999999)}function pf(r,e){return e<0?{seconds:r-1,nanos:e+1e9}:{seconds:r,nanos:e}}function QB(r){return BigInt(r.seconds)*Tn+BigInt(Math.trunc(r.nanoseconds/1e3))}class WB{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return this.toTimestamp(BigInt(n.value.integerValue));case"NULL":return I.pr();default:return I.dr()}}}class WD extends WB{toTimestamp(e){if(!zB(e))return I.dr();let t=Number(e/Tn),n=Number(e%Tn*BigInt(1e3));const s=pf(t,n);return t=s.seconds,n=s.nanos,zs(t,n)?I.newValue({timestampValue:{seconds:t,nanos:n}}):I.dr()}}class $D extends WB{toTimestamp(e){if(!(function(o){return o>=qD&&o<=KD})(e))return I.dr();let t=Number(e/uo),n=Number(e%uo*BigInt(1e6));const s=pf(t,n);return t=s.seconds,n=s.nanos,zs(t,n)?I.newValue({timestampValue:{seconds:t,nanos:n}}):I.dr()}}class YD extends WB{toTimestamp(e){if(!df(e))return I.dr();const t=Number(e);return I.newValue({timestampValue:{seconds:t,nanos:0}})}}class $B{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"TIMESTAMP":break;case"NULL":return I.pr();default:return I.dr()}const s=SB(n.value.timestampValue);return zs(s.seconds,s.nanoseconds)?this.Mr(s):I.dr()}}class XD extends $B{Mr(e){const t=QB(e);return zB(t)?I.newValue({integerValue:`${t.toString()}`}):I.dr()}}class ZD extends $B{Mr(e){const t=QB(e),n=t/BigInt(1e3),s=t%BigInt(1e3);return n>BigInt(0)||s===BigInt(0)?I.newValue({integerValue:n.toString()}):I.newValue({integerValue:(n-BigInt(1)).toString()})}}class eI extends $B{Mr(e){const t=BigInt(e.seconds);return df(t)?I.newValue({integerValue:t.toString()}):I.dr()}}class gf{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let n=!1;const s=Z(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":n=!0;break;default:return I.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=(function(re){switch(re){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}})(i.value.stringValue),o===void 0)return I.dr();break;case"NULL":n=!0;break;default:return I.dr()}const B=Z(this.expr.params[2]).evaluate(e,t);switch(B.type){case"INT":break;case"NULL":n=!0;break;default:return I.dr()}if(n)return I.pr();const u=BigInt(B.value.integerValue);let c;try{switch(o){case"microsecond":c=u;break;case"millisecond":c=u*BigInt(1e3);break;case"second":c=u*BigInt(1e6);break;case"minute":c=u*BigInt(6e7);break;case"hour":c=u*BigInt(36e8);break;case"day":c=u*BigInt(864e8);break;default:return I.dr()}if(o!=="microsecond"&&u!==BigInt(0)&&c/u!==BigInt(this.Nr(o)))return I.dr()}catch(K){return vt(`Error during timestamp arithmetic: ${K}`),I.dr()}const C=SB(s.value.timestampValue);if(!zs(C.seconds,C.nanoseconds))return I.dr();const f=QB(C),m=this.Lr(f,c);if(!zB(m))return I.dr();const T=Number(m/Tn),P=m%Tn,V=Number((P<0?P+Tn:P)*BigInt(1e3)),U=P<0?T-1:T;return zs(U,V)?I.newValue({timestampValue:{seconds:U,nanos:V}}):I.dr()}Nr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class tI extends gf{Lr(e,t){return e+t}}class nI extends gf{Lr(e,t){return e-t}}function Qs(r){if((r=Cf(r))instanceof ii)return`fld(${r.fieldName})`;if(r instanceof Ur)return`cst(${(function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Le?`ref(${t.path})`:t instanceof ot?`vec(${JSON.stringify(t)})`:JSON.stringify(t)})(r.value)})`;if(r instanceof F)return`fn(${r.name},[${r.params.map(Qs).join(",")}])`;if(r.expressionType==="ListOfExpressions")return`list([${r.ur.map(Qs).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(r,null,2)}`)}function rI(r){if(r instanceof cf)return`${r._name}(${xi(r.fields)})`;if(r instanceof lf){let e=`${r._name}(${xi(r.accumulators)})`;return r.groups.size>0&&(e+=`grouping(${xi(r.groups)})`),e}if(r instanceof hf)return`${r._name}(${xi(r.groups)})`;if(r instanceof Lo)return`${r._name}(${r.Er})`;if(r instanceof ko)return`${r._name}(${r.collectionId})`;if(r instanceof MB)return`${r._name}()`;if(r instanceof GB)return`${r._name}(${r.hr.sort()})`;if(r instanceof HB)return`${r._name}(${Qs(r.condition)})`;if(r instanceof js)return`${r._name}(${r.limit})`;if(r instanceof UB)return`${r._name}(${(function(t){return t.map((n=>`${Qs(n.expr)}${n.direction}`)).join(",")})(r.orderings)})`;throw new Error(`Unrecognized stage ${r._name}`)}function xi(r){return`${Array.from(r.entries()).sort().map((([e,t])=>`${e}=${Qs(t)}`)).join(",")}`}function $t(r){return r.stages.map((e=>rI(e))).join("|")}function mf(r,e){return $t(r)===$t(e)}function Fe(r){return r instanceof st}function Jl(r){return Fe(r)?$t(r):Is(r)}function Ef(r){return Fe(r)?$t(r):(function(t){return`${bC(Lt(t))}|lt:${t.limitType}`})(r)}function Mo(r,e){return r instanceof st&&e instanceof st?mf(r,e):!(r instanceof st&&!(e instanceof st)||!(r instanceof st)&&e instanceof st)&&EE(r,e)}function _f(r){return Kn(r)?$t(r):bC(r)}function Df(r,e){return r instanceof st&&e instanceof st?mf(r,e):!(r instanceof st&&!(e instanceof st)||!(r instanceof st)&&e instanceof st)&&OC(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Zm(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=_s(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=_s(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=VC();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let B=this.applyToLocalView(o,i.mutatedFields);B=t.has(s.key)?null:B;const u=IC(o,B);u!==null&&n.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ie())}isEqual(e){return this.batchId===e.batchId&&Sr(this.mutations,e.mutations,((t,n)=>_l(t,n)))&&Sr(this.baseMutations,e.baseMutations,((t,n)=>_l(t,n)))}}class YB{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){Q(e.mutations.length===n.length,58842,{Br:e.mutations.length,Ur:n.length});let s=(function(){return yE})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new YB(e,t,n,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="";function iI(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=jl(e)),e=oI(r.get(t),e);return jl(e)}function oI(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case If:t+="";break;default:t+=i}}return t}function jl(r){return r+If+""}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,t,n,s,i=te.min(),o=te.min(),B=Se.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=B,this.expectedCount=u}withSequenceNumber(e){return new Kt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.qr=e}}function uI(r){const e=HE({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Xa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(){this.Yi=new lI}addToCollectionParentIndex(e,t){return this.Yi.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Yi.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(Sn.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(Sn.min())}updateCollectionGroup(e,t,n){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class lI{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new Pe(he.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new Pe(he.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.gs=e}next(){return this.gs+=2,this.gs}static ys(){return new Nn(0)}static ws(){return new Nn(-1)}}// Copyright 2024 Google LLC* @license
function wf(r,e){var n;let t=e;for(const s of r.stages)t=CI({serializer:r.serializer,serverTimestampBehavior:(n=r.listenOptions)==null?void 0:n.serverTimestampBehavior},s,t);return t}function Go(r,e){return wf(r,[e]).length>0}function hI(r,e){return Fe(r)?Go(r,e):bo(r,e)}function CI(r,e,t){if(e instanceof Lo)return(function(s,i,o){return o.filter((B=>B.isFoundDocument()&&`/${B.key.getCollectionPath().canonicalString()}`===i.Er))})(0,e,t);if(e instanceof HB)return(function(s,i,o){return o.filter((B=>{const u=ys(Z(i.condition).evaluate(s,B));return u!==void 0&&It(u,at)}))})(r,e,t);if(e instanceof ko)return(function(s,i,o){return o.filter((B=>B.isFoundDocument()&&B.key.getCollectionPath().lastSegment()===i.collectionId))})(0,e,t);if(e instanceof MB)return(function(s,i,o){return o.filter((B=>B.isFoundDocument()))})(0,0,t);if(e instanceof GB)return(function(s,i,o){return o.filter((B=>B.isFoundDocument()&&i.Tr.has(B.key.path.toStringWithLeadingSlash())))})(0,e,t);if(e instanceof js)return(function(s,i,o){return o.slice(0,i.limit)})(0,e,t);if(e instanceof UB)return(function(s,i,o){const B=i.orderings.map((u=>({Os:Z(u.expr),direction:u.direction})));return[...o].sort(((u,c)=>{for(const{Os:C,direction:f}of B){const m=ys(C.evaluate(s,u)),T=ys(C.evaluate(s,c)),P=Bt(m??Nr,T??Nr);if(P!==0)return f==="ascending"?P:-P}return 0}))})(r,e,t);throw new Error(`Unknown stage: ${e._name}`)}function sB(r){const e=(function(n){for(let s=n.stages.length-1;s>=0;s--){const i=n.stages[s];if(i instanceof UB)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")})(r);return(t,n)=>{for(const s of e){const i=ys(Z(s.expr).evaluate({serializer:r.serializer},t)),o=ys(Z(s.expr).evaluate({serializer:r.serializer},n)),B=Bt(i||Nr,o||Nr);if(B!==0)return s.direction==="ascending"?B:-B}return 0}}function Sa(r){for(let e=r.stages.length-1;e>=0;e--){const t=r.stages[e];if(t instanceof js)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(){this.changes=new lr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ze.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?L.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(n=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(n!==null&&_s(n.mutation,s,yt.empty(),_e.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,ie()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=ie()){const s=fn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,n).next((i=>{let o=Ir();return i.forEach(((B,u)=>{o=o.insert(B,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=fn();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,ie())))}populateOverlays(e,t,n){const s=[];return n.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,B)=>{t.set(o,B)}))}))}computeViews(e,t,n,s){let i=it();const o=ws(),B=(function(){return ws()})();return t.forEach(((u,c)=>{const C=n.get(c.key);s.has(c.key)&&(C===void 0||C.mutation instanceof cr)?i=i.insert(c.key,c):C!==void 0?(o.set(c.key,C.mutation.getFieldMask()),_s(C.mutation,c,C.mutation.getFieldMask(),_e.now())):o.set(c.key,yt.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((c,C)=>o.set(c,C))),t.forEach(((c,C)=>B.set(c,new dI(C,o.get(c)??null)))),B)))}recalculateAndSaveOverlays(e,t){const n=ws();let s=new Ie(((o,B)=>o-B)),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const B of o)B.keys().forEach((u=>{const c=t.get(u);if(c===null)return;let C=n.get(u)||yt.empty();C=B.applyToLocalView(c,C),n.set(u,C);const f=(s.get(B.batchId)||ie()).add(u);s=s.insert(B.batchId,f)}))})).next((()=>{const o=[],B=s.getReverseIterator();for(;B.hasNext();){const u=B.getNext(),c=u.key,C=u.value,f=VC();C.forEach((m=>{if(!i.has(m)){const T=IC(t.get(m),n.get(m));T!==null&&f.set(m,T),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return L.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,s){return Fe(t)?this.getDocumentsMatchingPipeline(e,t,n,s):pE(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):gE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):L.resolve(fn());let B=Ms,u=i;return o.next((c=>L.forEach(c,((C,f)=>(B<f.largestBatchId&&(B=f.largestBatchId),i.get(C)?L.resolve():this.remoteDocumentCache.getEntry(e,C).next((m=>{u=u.insert(C,m)}))))).next((()=>this.populateOverlays(e,c,i))).next((()=>this.computeViews(e,u,c,ie()))).next((C=>({batchId:B,changes:kC(C)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next((n=>{let s=Ir();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=Ir();return this.indexManager.getCollectionParents(e,i).next((B=>L.forEach(B,(u=>{const c=(function(f,m){return new So(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,n,s).next((C=>{C.forEach(((f,m)=>{o=o.insert(f,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s)))).next((o=>this.retrieveMatchingLocalDocuments(i,o,(B=>bo(t,B)))))}getDocumentsMatchingPipeline(e,t,n,s){if(yn(t)==="collection_group"){const i=jB(t);let o=Ir();return this.indexManager.getCollectionParents(e,i).next((B=>L.forEach(B,(u=>{const c=(function(f,m){const T=f.stages.map((P=>P instanceof ko?new Lo(m.canonicalString(),{}):P));return new st(f.serializer,T)})(t,u.child(i));return this.getDocumentsMatchingPipeline(e,c,n,s).next((C=>{C.forEach(((f,m)=>{o=o.insert(f,m)}))}))})).next((()=>o))))}{let i;return this.getOverlaysForPipeline(e,t,n.largestBatchId).next((o=>{switch(i=o,yn(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s);case"documents":let B=ie();for(const u of rB(t))B=B.add(X.fromPath(u));return this.remoteDocumentCache.getEntries(e,B);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new z("invalid-argument",`Invalid pipeline source to execute offline: ${$t(t)}`)}})).next((o=>this.retrieveMatchingLocalDocuments(i,o,(B=>Go(t,B)))))}}retrieveMatchingLocalDocuments(e,t,n){e.forEach(((i,o)=>{const B=o.getKey();t.get(B)===null&&(t=t.insert(B,ze.newInvalidDocument(B)))}));let s=Ir();return t.forEach(((i,o)=>{const B=e.get(i);B!==void 0&&_s(B.mutation,o,yt.empty(),_e.now()),n(o)&&(s=s.insert(i,o))})),s}getOverlaysForPipeline(e,t,n){switch(yn(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,he.fromString(Vo(t)),n);case"collection_group":throw new z("invalid-argument",`Unexpected collection group pipeline: ${$t(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,rB(t).map((s=>X.fromPath(s))));case"database":return this.documentOverlayCache.getAllOverlays(e,n);default:throw new z("invalid-argument",`Failed to get overlays for pipeline: ${$t(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e){this.serializer=e,this.Ks=new Map,this.Qs=new Map}getBundleMetadata(e,t){return L.resolve(this.Ks.get(t))}saveBundleMetadata(e,t){return this.Ks.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:kt(s.createTime)}})(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.Qs.get(t))}saveNamedQuery(e,t){return this.Qs.set(t.name,(function(s){return{name:s.name,query:uI(s.bundledQuery),readTime:kt(s.readTime)}})(t)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(){this.overlays=new Ie(X.comparator),this.Ws=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const n=fn();return L.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}getAllOverlays(e,t){const n=fn();return this.overlays.forEach(((s,i)=>{i.largestBatchId>t&&n.set(s,i)})),L.resolve(n)}saveOverlays(e,t,n){return n.forEach(((s,i)=>{this.Yr(e,t,i)})),L.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Ws.get(n);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Ws.delete(n)),L.resolve()}getOverlaysForCollection(e,t,n){const s=fn(),i=t.length+1,o=new X(t.child("")),B=this.overlays.getIteratorFrom(o);for(;B.hasNext();){const u=B.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>n&&s.set(u.getKey(),u)}return L.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new Ie(((c,C)=>c-C));const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>n){let C=i.get(c.largestBatchId);C===null&&(C=fn(),i=i.insert(c.largestBatchId,C)),C.set(c.getKey(),c)}}const B=fn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((c,C)=>B.set(c,C))),!(B.size()>=s)););return L.resolve(B)}Yr(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Ws.get(s.largestBatchId).delete(n.key);this.Ws.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new aI(t,n));let i=this.Ws.get(t);i===void 0&&(i=ie(),this.Ws.set(t,i)),this.Ws.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(){this.sessionToken=Se.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XB{constructor(){this.Gs=new Pe(Me.zs),this.js=new Pe(Me.Hs)}isEmpty(){return this.Gs.isEmpty()}addReference(e,t){const n=new Me(e,t);this.Gs=this.Gs.add(n),this.js=this.js.add(n)}Js(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Ys(new Me(e,t))}Zs(e,t){e.forEach((n=>this.removeReference(n,t)))}Xs(e){const t=new X(new he([])),n=new Me(t,e),s=new Me(t,e+1),i=[];return this.js.forEachInRange([n,s],(o=>{this.Ys(o),i.push(o.key)})),i}e_(){this.Gs.forEach((e=>this.Ys(e)))}Ys(e){this.Gs=this.Gs.delete(e),this.js=this.js.delete(e)}t_(e){const t=new X(new he([])),n=new Me(t,e),s=new Me(t,e+1);let i=ie();return this.js.forEachInRange([n,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new Me(e,0),n=this.Gs.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Me{constructor(e,t){this.key=e,this.n_=t}static zs(e,t){return X.comparator(e.key,t.key)||oe(e.n_,t.n_)}static Hs(e,t){return oe(e.n_,t.n_)||X.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Wr=1,this.r_=new Pe(Me.zs)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Wr;this.Wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sI(i,t,n,s);this.mutationQueue.push(o);for(const B of s)this.r_=this.r_.add(new Me(B.key,i)),this.indexManager.addToCollectionParentIndex(e,B.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,t){return L.resolve(this.i_(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.s_(n),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?wB:this.Wr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Me(t,0),s=new Me(t,Number.POSITIVE_INFINITY),i=[];return this.r_.forEachInRange([n,s],(o=>{const B=this.i_(o.n_);i.push(B)})),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Pe(oe);return t.forEach((s=>{const i=new Me(s,0),o=new Me(s,Number.POSITIVE_INFINITY);this.r_.forEachInRange([i,o],(B=>{n=n.add(B.n_)}))})),L.resolve(this.__(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;X.isDocumentKey(i)||(i=i.child(""));const o=new Me(new X(i),0);let B=new Pe(oe);return this.r_.forEachWhile((u=>{const c=u.key.path;return!!n.isPrefixOf(c)&&(c.length===s&&(B=B.add(u.n_)),!0)}),o),L.resolve(this.__(B))}__(e){const t=[];return e.forEach((n=>{const s=this.i_(n);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Q(this.o_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.r_;return L.forEach(t.mutations,(s=>{const i=new Me(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.r_=n}))}jr(e){}containsKey(e,t){const n=new Me(t,0),s=this.r_.firstAfterOrEqual(n);return L.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}o_(e,t){return this.s_(e)}s_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}i_(e){const t=this.s_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.a_=e,this.docs=(function(){return new Ie(X.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.a_(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return L.resolve(n?n.document.mutableCopy():ze.newInvalidDocument(t))}getEntries(e,t){let n=it();return t.forEach((s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ze.newInvalidDocument(s))})),L.resolve(n)}getAllEntries(e){let t=it();return this.docs.forEach(((n,s)=>{t=t.insert(n,s.document)})),L.resolve(t)}getDocumentsMatchingQuery(e,t,n,s){let i,o;Fe(t)?(i=he.fromString(Vo(t)),o=C=>Go(t,C)):(i=t.path,o=C=>bo(t,C));let B=it();const u=new X(i.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:C,value:{document:f}}=c.getNext();if(!i.isPrefixOf(C.path))break;C.path.length>i.length+1||CE(hE(f),n)<=0||(s.has(f.key)||o(f))&&(B=B.insert(f.key,f.mutableCopy()))}return L.resolve(B)}getAllFromCollectionGroup(e,t,n,s){Y(9500)}u_(e,t){return L.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new II(this)}getSize(e){return L.resolve(this.size)}}class II extends fI{constructor(e){super(),this.qs=e}applyChanges(e){const t=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?t.push(this.qs.addEntry(e,s)):this.qs.removeEntry(n)})),L.waitFor(t)}getFromCache(e,t){return this.qs.getEntry(e,t)}getAllFromCache(e,t){return this.qs.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.persistence=e,this.c_=new lr((t=>_f(t)),Df),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.l_=0,this.E_=new XB,this.targetCount=0,this.h_=Nn.ys()}forEachTarget(e,t){return this.c_.forEach(((n,s)=>t(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.l_)}allocateTargetId(e){return this.highestTargetId=this.h_.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.l_&&(this.l_=t),L.resolve()}vs(e){this.c_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.h_=new Nn(t),this.highestTargetId=t),e.sequenceNumber>this.l_&&(this.l_=e.sequenceNumber)}addTargetData(e,t){return this.vs(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.vs(t),L.resolve()}removeTargetData(e,t){return this.c_.delete(t.target),this.E_.Xs(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.c_.forEach(((o,B)=>{B.sequenceNumber<=t&&n.get(B.targetId)===null&&(this.c_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,B.targetId)),s++)})),L.waitFor(i).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const n=this.c_.get(t)||null;return L.resolve(n)}addMatchingKeys(e,t,n){return this.E_.Js(t,n),L.resolve()}removeMatchingKeys(e,t,n){this.E_.Zs(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),L.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.E_.Xs(t),L.resolve()}getMatchingKeysForTargetId(e,t){const n=this.E_.t_(t);return L.resolve(n)}containsKey(e,t){return L.resolve(this.E_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,t){this.T_={},this.overlays={},this.P_=new No(0),this.R_=!1,this.R_=!0,this.I_=new EI,this.referenceDelegate=e(this),this.A_=new wI(this),this.indexManager=new cI,this.remoteDocumentCache=(function(s){return new DI(s)})((n=>this.referenceDelegate.V_(n))),this.serializer=new BI(t),this.d_=new gI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new mI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.T_[e.toKey()];return n||(n=new _I(t,this.referenceDelegate),this.T_[e.toKey()]=n),n}getGlobalsCache(){return this.I_}getTargetCache(){return this.A_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.d_}runTransaction(e,t,n){j("MemoryPersistence","Starting transaction:",e);const s=new yI(this.P_.next());return this.referenceDelegate.f_(),n(s).next((i=>this.referenceDelegate.m_(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}p_(e,t){return L.or(Object.values(this.T_).map((n=>()=>n.containsKey(e,t))))}}class yI extends f_{constructor(e){super(),this.currentSequenceNumber=e}}class ZB{constructor(e){this.persistence=e,this.g_=new XB,this.y_=null}static w_(e){return new ZB(e)}get b_(){if(this.y_)return this.y_;throw Y(60996)}addReference(e,t,n){return this.g_.addReference(n,t),this.b_.delete(n.toString()),L.resolve()}removeReference(e,t,n){return this.g_.removeReference(n,t),this.b_.add(n.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.b_.add(t.toString()),L.resolve()}removeTarget(e,t){this.g_.Xs(t.targetId).forEach((s=>this.b_.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.b_.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}f_(){this.y_=new Set}m_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.b_,(n=>{const s=X.fromPath(n);return this.S_(e,s).next((i=>{i||t.removeEntry(s,te.min())}))})).next((()=>(this.y_=null,t.apply(e))))}updateLimboDocument(e,t){return this.S_(e,t).next((n=>{n?this.b_.delete(t.toString()):this.b_.add(t.toString())}))}V_(e){return 0}S_(e,t){return L.or([()=>L.resolve(this.g_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.p_(e,t)])}}class co{constructor(e,t){this.persistence=e,this.v_=new lr((n=>iI(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=__(this,t)}static w_(e,t){return new co(e,t)}f_(){}m_(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}rr(e){const t=this.xs(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}xs(e){let t=0;return this.ir(e,(n=>{t++})).next((()=>t))}ir(e,t){return L.forEach(this.v_,((n,s)=>this.Fs(e,n,s).next((i=>i?L.resolve():t(s)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.u_(e,(o=>this.Fs(e,o,t).next((B=>{B||(n++,i.removeEntry(o,te.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.v_.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.v_.set(n,e.currentSequenceNumber),L.resolve()}removeReference(e,t,n){return this.v_.set(n,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.v_.set(t,e.currentSequenceNumber),L.resolve()}V_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ui(e.data.value)),t}Fs(e,t,n){return L.or([()=>this.persistence.p_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.v_.get(t);return L.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Ao=n,this.Vo=s}static fo(e,t){let n=ie(),s=ie();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new eu(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(r,e){return X.comparator(r.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(){this.mo=!1,this.po=!1,this.yo=100,this.wo=(function(){return Hp()?8:d_(Qe())>0?6:4})()}initialize(e,t){this.bo=e,this.indexManager=t,this.mo=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.So(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.vo(e,t,s,n).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new AI;return this.Do(e,t,o).next((B=>{if(i.result=B,this.po)return this.xo(e,t,o,B.size)}))})).next((()=>i.result))}xo(e,t,n,s){return Fe(t)?L.resolve():n.documentReadCount<this.yo?(_r()<=ae.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",Is(t),"since it only creates cache indexes for collection contains","more than or equal to",this.yo,"documents"),L.resolve()):(_r()<=ae.DEBUG&&j("QueryEngine","Query:",Is(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.wo*s?(_r()<=ae.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",Is(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Lt(t))):L.resolve())}So(e,t){if(Fe(t))return L.resolve(null);let n=t;if(Al(n))return L.resolve(null);let s=Lt(n);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(n.limit!==null&&i===1&&(n=Xa(n,null,"F"),s=Lt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((o=>{const B=ie(...o);return this.bo.getDocuments(e,B).next((u=>this.indexManager.getMinOffset(e,s).next((c=>{const C=this.Co(n,u);return this.Fo(n,C,B,c.readTime)?this.So(e,Xa(n,null,"F")):this.Oo(e,C,n,c)}))))})))))}vo(e,t,n,s){return(Fe(t)?(function(o){for(const B of o.stages){if(B instanceof js||B instanceof Ul)return!1;if(B instanceof HB){if(B.condition instanceof af&&B.condition._expr.name==="exists"&&B.condition._expr.params[0]instanceof ii&&B.condition._expr.params[0].fieldName===br)continue;return!1}}return!0})(t):Al(t))||s.isEqual(te.min())?L.resolve(null):this.bo.getDocuments(e,n).next((i=>{const o=this.Co(t,i);return this.Fo(t,o,n,s)?L.resolve(null):(_r()<=ae.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Jl(t)),this.Oo(e,o,t,lE(s,Ms)).next((B=>B)))}))}Co(e,t){let n,s;return Fe(e)?(n=new Pe(TI),s=i=>Go(e,i)):(n=new Pe(vB(e)),s=i=>bo(e,i)),t.forEach(((i,o)=>{s(o)&&(n=n.add(o))})),n}Fo(e,t,n,s){if(Fe(e))return(function(B){return B.stages.some((u=>u instanceof js||u instanceof Ul))})(e);if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Do(e,t,n){return _r()<=ae.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Jl(t)),this.bo.getDocumentsMatchingQuery(e,t,Sn.min(),n)}Oo(e,t,n,s){return this.bo.getDocumentsMatchingQuery(e,n,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="LocalStore",vI=3e8;class PI{constructor(e,t,n,s){this.persistence=e,this.Mo=t,this.serializer=s,this.No=new Ie(oe),this.Lo=new lr((i=>_f(i)),Df),this.Bo=new Map,this.Uo=e.getRemoteDocumentCache(),this.A_=e.getTargetCache(),this.d_=e.getBundleCache(),this.ko(n)}ko(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pI(this.Uo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Uo.setIndexManager(this.indexManager),this.Mo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.No)))}}function SI(r,e,t,n){return new PI(r,e,t,n)}async function Tf(r,e){const t=ne(r);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next((i=>(s=i,t.ko(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const o=[],B=[];let u=ie();for(const c of s){o.push(c.batchId);for(const C of c.mutations)u=u.add(C.key)}for(const c of i){B.push(c.batchId);for(const C of c.mutations)u=u.add(C.key)}return t.localDocuments.getDocuments(n,u).next((c=>({qo:c,removedBatchIds:o,addedBatchIds:B})))}))}))}function bI(r,e){const t=ne(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=e.batch.keys(),i=t.Uo.newChangeBuffer({trackRemovals:!0});return(function(B,u,c,C){const f=c.batch,m=f.keys();let T=L.resolve();return m.forEach((P=>{T=T.next((()=>C.getEntry(u,P))).next((V=>{const U=c.docVersions.get(P);Q(U!==null,48541),V.version.compareTo(U)<0&&(f.applyToRemoteDocument(V,c),V.isValidDocument()&&(V.setReadTime(c.commitVersion),C.addEntry(V)))}))})),T.next((()=>B.mutationQueue.removeMutationBatch(u,f)))})(t,n,e,i).next((()=>i.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(B){let u=ie();for(let c=0;c<B.mutationResults.length;++c)B.mutationResults[c].transformResults.length>0&&(u=u.add(B.batch.mutations[c].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(n,s)))}))}function Af(r){const e=ne(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.A_.getLastRemoteSnapshotVersion(t)))}function OI(r,e){const t=ne(r),n=e.snapshotVersion;let s=t.No;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.Uo.newChangeBuffer({trackRemovals:!0});s=t.No;const B=[];e.targetChanges.forEach(((C,f)=>{const m=s.get(f);if(!m)return;B.push(t.A_.removeMatchingKeys(i,C.removedDocuments,f).next((()=>t.A_.addMatchingKeys(i,C.addedDocuments,f))));let T=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?T=T.withResumeToken(Se.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):C.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(C.resumeToken,n)),s=s.insert(f,T),(function(V,U,K){return V.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=vI?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0})(m,T,C)&&B.push(t.A_.updateTargetData(i,T))}));let u=it(),c=ie();if(e.documentUpdates.forEach((C=>{e.resolvedLimboDocuments.has(C)&&B.push(t.persistence.referenceDelegate.updateLimboDocument(i,C))})),B.push(NI(i,o,e.documentUpdates).next((C=>{u=C.$o,c=C.Ko}))),!n.isEqual(te.min())){const C=t.A_.getLastRemoteSnapshotVersion(i).next((f=>t.A_.setTargetsMetadata(i,i.currentSequenceNumber,n)));B.push(C)}return L.waitFor(B).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,c))).next((()=>u))})).then((i=>(t.No=s,i)))}function NI(r,e,t){let n=ie(),s=ie();return t.forEach((i=>n=n.add(i))),e.getEntries(r,n).next((i=>{let o=it();return t.forEach(((B,u)=>{const c=i.get(B);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(B)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(B,u.readTime),o=o.insert(B,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(B,u)):j(tu,"Ignoring outdated watch update for ",B,". Current version:",c.version," Watch version:",u.version)})),{$o:o,Ko:s}}))}function FI(r,e){const t=ne(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=wB),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function LI(r,e){const t=ne(r);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return t.A_.getTargetData(n,e).next((i=>i?(s=i,L.resolve(s)):t.A_.allocateTargetId(n).next((o=>(s=new Kt(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.A_.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=t.No.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.No=t.No.insert(n.targetId,n),t.Lo.set(e,n.targetId)),n}))}async function iB(r,e,t){const n=ne(r),s=n.No.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(o=>n.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Hr(o))throw o;j(tu,`Failed to update sequence numbers for target ${e}: ${o}`)}n.No=n.No.remove(e),n.Lo.delete(s.target)}function ql(r,e,t){const n=ne(r);let s=te.min(),i=ie();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,c,C){const f=ne(u),m=f.Lo.get(C);return m!==void 0?L.resolve(f.No.get(m)):f.A_.getTargetData(c,C)})(n,o,Fe(e)?e:Lt(e)).next((B=>{if(B)return s=B.lastLimboFreeSnapshotVersion,n.A_.getMatchingKeysForTargetId(o,B.targetId).next((u=>{i=u}))})).next((()=>n.Mo.getDocumentsMatchingQuery(o,e,t?s:te.min(),t?i:ie()))).next((B=>(kI(n,B),{documents:B,Qo:i})))))}function kI(r,e){e.forEach(((t,n)=>{const s=n.key.getCollectionGroup(),i=r.Bo.get(s)||te.min();n.readTime.compareTo(i)>0&&r.Bo.set(s,n.readTime)}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Jo=0,this.Yo=null,this.Zo=!0}Xo(){this.Jo===0&&(this.ea("Unknown"),this.Yo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Yo=null,this.ta("Backend didn't respond within 10 seconds."),this.ea("Offline"),Promise.resolve()))))}na(e){this.state==="Online"?this.ea("Unknown"):(this.Jo++,this.Jo>=1&&(this.ra(),this.ta(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ea("Offline")))}set(e){this.ra(),this.Jo=0,e==="Online"&&(this.Zo=!1),this.ea(e)}ea(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ta(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Zo?(Zt(t),this.Zo=!1):j("OnlineStateTracker",t)}ra(){this.Yo!==null&&(this.Yo.cancel(),this.Yo=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="RemoteStore";class xI{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.ia=[],this.sa=new Map,this._a=new Map,this.oa=new Map,this.aa=new Nn(1e3),this.ua=new Nn(1001),this.ca=new Set,this.la=[],this.Ea=i,this.Ea.Ke((o=>{n.enqueueAndForget((async()=>{Cr(this)&&(j(Ut,"Restarting streams for network reachability change."),await(async function(u){const c=ne(u);c.ca.add(4),await ai(c),c.ha.set("Unknown"),c.ca.delete(4),await Ho(c)})(this))}))})),this.ha=new VI(n,s)}}async function Ho(r){if(Cr(r))for(const e of r.la)await e(!0)}async function ai(r){for(const e of r.la)await e(!1)}function oB(r,e){return r._a.get(e)||void 0}function Rf(r,e){const t=ne(r),n=oB(t,e.targetId);if(n!==void 0&&t.sa.has(n))return;const s=(function(B,u){const c=oB(B,u);c!==void 0&&B.oa.delete(c);const C=(function(m,T){return T%2!=0?m.ua.next():m.aa.next()})(B,u);return B._a.set(u,C),B.oa.set(C,u),C})(t,e.targetId);j(Ut,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new Kt(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.sa.set(s,i),iu(t)?su(t):qr(t).Jt()&&ru(t,i)}function nu(r,e){const t=ne(r),n=qr(t),s=oB(t,e);j(Ut,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.sa.delete(s),t._a.delete(e),t.oa.delete(s),n.Jt()&&vf(t,s),t.sa.size===0&&(n.Jt()?n.Xt():Cr(t)&&t.ha.set("Unknown"))}function ru(r,e){if(r.Ta.H(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const t=r.oa.get(e.targetId);if(t===void 0)return void j(Ut,"SDK target ID not found for remote ID: "+e.targetId);const n=r.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(n)}qr(r).Tn(e)}function vf(r,e){r.Ta.H(e),qr(r).Pn(e)}function su(r){r.Ta=new SE({getRemoteKeysForTarget:e=>{const t=r.oa.get(e);return t!==void 0?r.remoteSyncer.getRemoteKeysForTarget(t):ie()},ge:e=>r.sa.get(e)||null,Ae:()=>r.datastore.serializer.databaseId}),qr(r).start(),r.ha.Xo()}function iu(r){return Cr(r)&&!qr(r).Ht()&&r.sa.size>0}function Cr(r){return ne(r).ca.size===0}function Pf(r){r.Ta=void 0}async function MI(r){r.ha.set("Online")}async function GI(r){r.sa.forEach(((e,t)=>{ru(r,e)}))}async function HI(r,e){Pf(r),iu(r)?(r.ha.na(e),su(r)):r.ha.set("Unknown")}async function UI(r,e,t){if(r.ha.set("Online"),e instanceof MC&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const B of i.targetIds){if(s.sa.has(B)){const u=s.oa.get(B);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s._a.delete(u),s.oa.delete(B)),s.sa.delete(B)}s.Ta.removeTarget(B)}})(r,e)}catch(n){j(Ut,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await lo(r,n)}else if(e instanceof ji?r.Ta.se(e):e instanceof xC?r.Ta.Ee(e):r.Ta.ae(e),!t.isEqual(te.min()))try{const n=await Af(r.localStore);t.compareTo(n)>=0&&await(function(i,o){const B=i.Ta.de(o);B.targetChanges.forEach(((c,C)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.sa.get(C);f&&i.sa.set(C,f.withResumeToken(c.resumeToken,o))}})),B.targetMismatches.forEach(((c,C)=>{const f=i.sa.get(c);if(!f)return;i.sa.set(c,f.withResumeToken(Se.EMPTY_BYTE_STRING,f.snapshotVersion)),vf(i,c);const m=new Kt(f.target,c,C,f.sequenceNumber);ru(i,m)}));const u=(function(C,f){const m=new Map;f.targetChanges.forEach(((P,V)=>{const U=C.oa.get(V);U!==void 0&&m.set(U,P)}));let T=new Ie(oe);return f.targetMismatches.forEach(((P,V)=>{const U=C.oa.get(P);U!==void 0&&(T=T.insert(U,V))})),new ri(f.snapshotVersion,m,T,f.documentUpdates,f.augmentedDocumentUpdates,f.resolvedLimboDocuments)})(i,B);return i.remoteSyncer.applyRemoteEvent(u)})(r,t)}catch(n){j(Ut,"Failed to raise snapshot:",n),await lo(r,n)}}async function lo(r,e,t){if(!Hr(e))throw e;r.ca.add(1),await ai(r),r.ha.set("Offline"),t||(t=()=>Af(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{j(Ut,"Retrying IndexedDB access"),await t(),r.ca.delete(1),await Ho(r)}))}function Sf(r,e){return e().catch((t=>lo(r,t,e)))}async function Uo(r){const e=ne(r),t=Fn(e);let n=e.ia.length>0?e.ia[e.ia.length-1].batchId:wB;for(;JI(e);)try{const s=await FI(e.localStore,n);if(s===null){e.ia.length===0&&t.Xt();break}n=s.batchId,jI(e,s)}catch(s){await lo(e,s)}bf(e)&&Of(e)}function JI(r){return Cr(r)&&r.ia.length<10}function jI(r,e){r.ia.push(e);const t=Fn(r);t.Jt()&&t.Rn&&t.In(e.mutations)}function bf(r){return Cr(r)&&!Fn(r).Ht()&&r.ia.length>0}function Of(r){Fn(r).start()}async function qI(r){Fn(r).dn()}async function KI(r){const e=Fn(r);for(const t of r.ia)e.In(t.mutations)}async function zI(r,e,t){const n=r.ia.shift(),s=YB.from(n,e,t);await Sf(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await Uo(r)}async function QI(r,e){e&&Fn(r).Rn&&await(async function(n,s){if((function(o){return IE(o)&&o!==x.ABORTED})(s.code)){const i=n.ia.shift();Fn(n).Zt(),await Sf(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Uo(n)}})(r,e),bf(r)&&Of(r)}async function Kl(r,e){const t=ne(r);t.asyncQueue.verifyOperationInProgress(),j(Ut,"RemoteStore received new credentials");const n=Cr(t);t.ca.add(3),await ai(t),n&&t.ha.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.ca.delete(3),await Ho(t)}async function WI(r,e){const t=ne(r);e?(t.ca.delete(2),await Ho(t)):e||(t.ca.add(2),await ai(t),t.ha.set("Unknown"))}function qr(r){return r.Pa||(r.Pa=(function(t,n,s){const i=ne(t);return i.mn(),new o_(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{ut:MI.bind(null,r),lt:GI.bind(null,r),ht:HI.bind(null,r),hn:UI.bind(null,r)}),r.la.push((async e=>{e?(r.Pa.Zt(),iu(r)?su(r):r.ha.set("Unknown")):(await r.Pa.stop(),Pf(r))}))),r.Pa}function Fn(r){return r.Ra||(r.Ra=(function(t,n,s){const i=ne(t);return i.mn(),new a_(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{ut:()=>Promise.resolve(),lt:qI.bind(null,r),ht:QI.bind(null,r),An:KI.bind(null,r),Vn:zI.bind(null,r)}),r.la.push((async e=>{e?(r.Ra.Zt(),await Uo(r)):(await r.Ra.stop(),r.ia.length>0&&(j(Ut,`Stopping write stream with ${r.ia.length} pending writes`),r.ia=[]))}))),r.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ia(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ia(this.observer.error,e):Zt("Uncaught Error in snapshot listener:",e.toString()))}Aa(){this.muted=!0}Ia(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,B=new ou(e,t,o,s,i);return B.start(n),B}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function au(r,e){if(Zt("AsyncQueue",`${e}: ${r}`),Hr(r))return new z(x.UNAVAILABLE,`${e}: ${r}`);throw r}class zl{constructor(){this.activeTargetIds=RE()}La(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ba(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Na(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YI{constructor(){this.du=new zl,this.fu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.du.La(e),this.fu[e]||"not-current"}updateQueryState(e,t,n){this.fu[e]=t}removeLocalQueryTarget(e){this.du.Ba(e)}isLocalQueryTarget(e){return this.du.activeTargetIds.has(e)}clearQueryState(e){delete this.fu[e]}getAllActiveQueryTargets(){return this.du.activeTargetIds}isActiveQueryTarget(e){return this.du.activeTargetIds.has(e)}start(){return this.du=new zl,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function ba(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{static emptySet(e){return new Zn(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||X.comparator(t.key,n.key):(t,n)=>X.comparator(t.key,n.key),this.keyedMap=Ir(),this.sortedSet=new Ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Zn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Zn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(){this.mu=new Ie(X.comparator)}track(e){const t=e.doc.key,n=this.mu.get(t);n?e.type!==0&&n.type===3?this.mu=this.mu.insert(t,e):e.type===3&&n.type!==1?this.mu=this.mu.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.mu=this.mu.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.mu=this.mu.remove(t):e.type===1&&n.type===2?this.mu=this.mu.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):Y(63341,{ye:e,pu:n}):this.mu=this.mu.insert(t,e)}gu(){const e=[];return this.mu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class kr{constructor(e,t,n,s,i,o,B,u,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=B,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach((B=>{o.push({type:0,doc:B})})),new kr(e,t,Zn.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(){this.yu=void 0,this.wu=[]}bu(){return this.wu.some((e=>e.Su()))}}class ZI{constructor(){this.queries=Wl(),this.onlineState="Unknown",this.vu=new Set}terminate(){(function(t,n){const s=ne(t),i=s.queries;s.queries=Wl(),i.forEach(((o,B)=>{for(const u of B.wu)u.onError(n)}))})(this,new z(x.ABORTED,"Firestore shutting down"))}}function Wl(){return new lr((r=>Ef(r)),Mo)}async function ew(r,e){const t=ne(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.bu()&&e.Su()&&(n=2):(i=new XI,n=e.Su()?0:1);try{switch(n){case 0:i.yu=await t.onListen(s,!0);break;case 1:i.yu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const B=au(o,`Initialization of query '${Fe(e.query)?$t(e.query):Is(e.query)}' failed`);return void e.onError(B)}t.queries.set(s,i),i.wu.push(e),e.Du(t.onlineState),i.yu&&e.xu(i.yu)&&Bu(t)}async function tw(r,e){const t=ne(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.wu.indexOf(e);o>=0&&(i.wu.splice(o,1),i.wu.length===0?s=e.Su()?0:1:!i.bu()&&e.Su()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function nw(r,e){const t=ne(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const B of o.wu)B.xu(s)&&(n=!0);o.yu=s}}n&&Bu(t)}function rw(r,e,t){const n=ne(r),s=n.queries.get(e);if(s)for(const i of s.wu)i.onError(t);n.queries.delete(e)}function Bu(r){r.vu.forEach((e=>{e.next()}))}var aB;(function(r){r.Default="default",r.Cache="cache"})(aB||(aB={}));class sw{constructor(e,t,n){this.query=e,this.Cu=t,this.Fu=!1,this.Ou=null,this.onlineState="Unknown",this.options=n||{}}xu(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new kr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Mu(e)&&(this.Cu.next(e),t=!0):this.Nu(e,this.onlineState)&&(this.Lu(e),t=!0),this.Ou=e,t}onError(e){this.Cu.error(e)}Du(e){this.onlineState=e;let t=!1;return this.Ou&&!this.Fu&&this.Nu(this.Ou,e)&&(this.Lu(this.Ou),t=!0),t}Nu(e,t){if(!e.fromCache||!this.Su())return!0;const n=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Mu(e){if(e.docChanges.length>0)return!0;const t=this.Ou&&this.Ou.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Lu(e){e=kr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Cu.next(e)}Su(){return this.options.source!==aB.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e){this.key=e}}class Ff{constructor(e){this.key=e}}class iw{constructor(e,t){this.query=e,this.Gu=t,this.zu=null,this.hasCachedResults=!1,this.current=!1,this.ju=ie(),this.mutatedKeys=ie(),this.Hu=Fe(e)?sB(e):vB(e),this.Ju=new Zn(this.Hu)}get Yu(){return this.Gu}Zu(e,t){const n=t?t.Xu:new Ql,s=t?t.Ju:this.Ju;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,B=!1;const[u,c]=this.ec(this.query,s);e.inorderTraversal(((f,m)=>{const T=s.get(f),P=hI(this.query,m)?m:null,V=!!T&&this.mutatedKeys.has(T.key),U=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let K=!1;T&&P?T.data.isEqual(P.data)?V!==U&&(n.track({type:3,doc:P}),K=!0):this.tc(T,P)||(n.track({type:2,doc:P}),K=!0,(u&&this.Hu(P,u)>0||c&&this.Hu(P,c)<0)&&(B=!0)):!T&&P?(n.track({type:0,doc:P}),K=!0):T&&!P&&(n.track({type:1,doc:T}),K=!0,(u||c)&&(B=!0)),K&&(P?(o=o.add(P),i=U?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}));const C=this.nc(this.query);if(C)if(Fe(this.query)){const f=[];o.forEach((P=>f.push(P)));const m=wf(this.query,f);let T=new Zn(sB(this.query));for(const P of m)T=T.add(P);o.forEach((P=>{T.has(P.key)||(i=i.delete(P.key),n.track({type:1,doc:P}))})),o=T}else{const f=this.rc(this.query);for(;o.size>C;){const m=f==="F"?o.last():o.first();o=o.delete(m.key),i=i.delete(m.key),n.track({type:1,doc:m})}}return{Ju:o,Xu:n,Fo:B,mutatedKeys:i}}nc(e){var t;return Fe(e)?(t=Sa(e))==null?void 0:t.limit:e.limit||void 0}rc(e){if(Fe(e)){const t=Sa(e);return t&&t.limit<0?"L":"F"}return e.limitType}ec(e,t){var n;if(Fe(e)){const s=(n=Sa(e))==null?void 0:n.limit;return[t.size===s?t.last():null,null]}return[e.limitType==="F"&&t.size===this.nc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.nc(this.query)?t.first():null]}tc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Ju;this.Ju=e.Ju,this.mutatedKeys=e.mutatedKeys;const o=e.Xu.gu();o.sort(((C,f)=>(function(T,P){const V=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{ye:U})}};return V(T)-V(P)})(C.type,f.type)||this.Hu(C.doc,f.doc))),this.sc(n),s=s??!1;const B=t&&!s?this._c():[],u=this.ju.size===0&&this.current&&!s?1:0,c=u!==this.zu;return this.zu=u,o.length!==0||c?{snapshot:new kr(this.query,e.Ju,i,o,e.mutatedKeys,u===0,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),oc:B}:{oc:B}}Du(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ju:this.Ju,Xu:new Ql,mutatedKeys:this.mutatedKeys,Fo:!1},!1)):{oc:[]}}ac(e){return!this.Gu.has(e)&&!!this.Ju.has(e)&&!this.Ju.get(e).hasLocalMutations}sc(e){e&&(e.addedDocuments.forEach((t=>this.Gu=this.Gu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Gu=this.Gu.delete(t))),this.current=e.current)}_c(){if(!this.current)return[];const e=this.ju;this.ju=ie(),this.Ju.forEach((n=>{this.ac(n.key)&&(this.ju=this.ju.add(n.key))}));const t=[];return e.forEach((n=>{this.ju.has(n)||t.push(new Ff(n))})),this.ju.forEach((n=>{e.has(n)||t.push(new Nf(n))})),t}uc(e){this.Gu=e.Qo,this.ju=ie();const t=this.Zu(e.documents);return this.applyChanges(t,!0)}cc(){return kr.fromInitialDocuments(this.query,this.Ju,this.mutatedKeys,this.zu===0,this.hasCachedResults)}}const uu="SyncEngine";class ow{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class aw{constructor(e){this.key=e,this.lc=!1}}class Bw{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ec={},this.hc=new lr((B=>Ef(B)),Mo),this.Tc=new Map,this.Pc=new Set,this.Rc=new Ie(X.comparator),this.Ic=new Map,this.Ac=new XB,this.Vc={},this.dc=new Map,this.fc=Nn.ws(),this.onlineState="Unknown",this.mc=void 0}get isPrimaryClient(){return this.mc===!0}}async function uw(r,e,t=!0){const n=Gf(r);let s;const i=n.hc.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cc()):s=await Lf(n,e,t,!0),s}async function cw(r,e){const t=Gf(r);await Lf(t,e,!0,!1)}async function Lf(r,e,t,n){const s=await LI(r.localStore,Fe(e)?e:Lt(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let B;return n&&(B=await lw(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&Rf(r.remoteStore,s),B}async function lw(r,e,t,n,s){r.gc=(f,m,T)=>(async function(V,U,K,re){let De=U.view.Zu(K);De.Fo&&(De=await ql(V.localStore,U.query,!1).then((({documents:A})=>U.view.Zu(A,De))));const ke=re&&re.targetChanges.get(U.targetId),Ve=re&&re.targetMismatches.get(U.targetId)!=null,ye=U.view.applyChanges(De,V.isPrimaryClient,ke,Ve);return Yl(V,U.targetId,ye.oc),ye.snapshot})(r,f,m,T);const i=await ql(r.localStore,e,!0),o=new iw(e,i.Qo),B=o.Zu(i.documents),u=si.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),c=o.applyChanges(B,r.isPrimaryClient,u);Yl(r,t,c.oc);const C=new ow(e,t,o);return r.hc.set(e,C),r.Tc.has(t)?r.Tc.get(t).push(e):r.Tc.set(t,[e]),c.snapshot}async function hw(r,e,t){const n=ne(r),s=n.hc.get(e),i=n.Tc.get(s.targetId);if(i.length>1)return n.Tc.set(s.targetId,i.filter((o=>!Mo(o,e)))),void n.hc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await iB(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),t&&nu(n.remoteStore,s.targetId),BB(n,s.targetId)})).catch(Gr)):(BB(n,s.targetId),await iB(n.localStore,s.targetId,!0))}async function Cw(r,e){const t=ne(r),n=t.hc.get(e),s=t.Tc.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),nu(t.remoteStore,n.targetId))}async function fw(r,e,t){const n=Dw(r);try{const s=await(function(o,B){const u=ne(o),c=_e.now(),C=B.reduce(((T,P)=>T.add(P.key)),ie());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",(T=>{let P=it(),V=ie();return u.Uo.getEntries(T,C).next((U=>{P=U,P.forEach(((K,re)=>{re.isValidDocument()||(V=V.add(K))}))})).next((()=>u.localDocuments.getOverlayedDocuments(T,P))).next((U=>{f=U;const K=[];for(const re of B){const De=eE(re,f.get(re.key).overlayedDocument);De!=null&&K.push(new cr(re.key,De,gC(De.value.mapValue),Wt.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,K,B)})).next((U=>{m=U;const K=U.applyToLocalDocumentSet(f,V);return u.documentOverlayCache.saveOverlays(T,U.batchId,K)}))})).then((()=>({batchId:m.batchId,changes:kC(f)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),(function(o,B,u){let c=o.Vc[o.currentUser.toKey()];c||(c=new Ie(oe)),c=c.insert(B,u),o.Vc[o.currentUser.toKey()]=c})(n,s.batchId,t),await Bi(n,s.changes),await Uo(n.remoteStore)}catch(s){const i=au(s,"Failed to persist write");t.reject(i)}}async function kf(r,e){const t=ne(r);try{const n=await OI(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Ic.get(i);o&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lc=!0:s.modifiedDocuments.size>0?Q(o.lc,14607):s.removedDocuments.size>0&&(Q(o.lc,42227),o.lc=!1))})),await Bi(t,n,e)}catch(n){await Gr(n)}}function $l(r,e,t){const n=ne(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.hc.forEach(((i,o)=>{const B=o.view.Du(e);B.snapshot&&s.push(B.snapshot)})),(function(o,B){const u=ne(o);u.onlineState=B;let c=!1;u.queries.forEach(((C,f)=>{for(const m of f.wu)m.Du(B)&&(c=!0)})),c&&Bu(u)})(n.eventManager,e),s.length&&n.Ec.hn(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function dw(r,e,t){const n=ne(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Ic.get(e),i=s&&s.key;if(i){let o=new Ie(X.comparator);o=o.insert(i,ze.newNoDocument(i,te.min()));const B=ie().add(i),u=new ri(te.min(),new Map,new Ie(oe),o,it(),B);await kf(n,u),n.Rc=n.Rc.remove(i),n.Ic.delete(e),cu(n)}else await iB(n.localStore,e,!1).then((()=>BB(n,e,t))).catch(Gr)}async function pw(r,e){const t=ne(r),n=e.batch.batchId;try{const s=await bI(t.localStore,e);xf(t,n,null),Vf(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Bi(t,s)}catch(s){await Gr(s)}}async function gw(r,e,t){const n=ne(r);try{const s=await(function(o,B){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",(c=>{let C;return u.mutationQueue.lookupMutationBatch(c,B).next((f=>(Q(f!==null,37113),C=f.keys(),u.mutationQueue.removeMutationBatch(c,f)))).next((()=>u.mutationQueue.performConsistencyCheck(c))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(c,C,B))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,C))).next((()=>u.localDocuments.getDocuments(c,C)))}))})(n.localStore,e);xf(n,e,t),Vf(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Bi(n,s)}catch(s){await Gr(s)}}function Vf(r,e){(r.dc.get(e)||[]).forEach((t=>{t.resolve()})),r.dc.delete(e)}function xf(r,e,t){const n=ne(r);let s=n.Vc[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Vc[n.currentUser.toKey()]=s}}function BB(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Tc.get(e))r.hc.delete(n),t&&r.Ec.yc(n,t);r.Tc.delete(e),r.isPrimaryClient&&r.Ac.Xs(e).forEach((n=>{r.Ac.containsKey(n)||Mf(r,n)}))}function Mf(r,e){r.Pc.delete(e.path.canonicalString());const t=r.Rc.get(e);t!==null&&(nu(r.remoteStore,t),r.Rc=r.Rc.remove(e),r.Ic.delete(t),cu(r))}function Yl(r,e,t){for(const n of t)n instanceof Nf?(r.Ac.addReference(n.key,e),mw(r,n)):n instanceof Ff?(j(uu,"Document no longer in limbo: "+n.key),r.Ac.removeReference(n.key,e),r.Ac.containsKey(n.key)||Mf(r,n.key)):Y(19791,{wc:n})}function mw(r,e){const t=e.key,n=t.path.canonicalString();r.Rc.get(t)||r.Pc.has(n)||(j(uu,"New document in limbo: "+t),r.Pc.add(n),cu(r))}function cu(r){for(;r.Pc.size>0&&r.Rc.size<r.maxConcurrentLimboResolutions;){const e=r.Pc.values().next().value;r.Pc.delete(e);const t=new X(he.fromString(e)),n=r.fc.next();r.Ic.set(n,new aw(t)),r.Rc=r.Rc.insert(t,n),Rf(r.remoteStore,new Kt(Lt(RB(t.path)),n,"TargetPurposeLimboResolution",No.yn))}}async function Bi(r,e,t){const n=ne(r),s=[],i=[],o=[];n.hc.isEmpty()||(n.hc.forEach(((B,u)=>{o.push(n.gc(u,e,t).then((c=>{var C;if((c||t)&&n.isPrimaryClient){const f=c?!c.fromCache:(C=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:C.current;n.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){s.push(c);const f=eu.fo(u.targetId,c);i.push(f)}})))})),await Promise.all(o),n.Ec.hn(s),await(async function(u,c){const C=ne(u);try{await C.persistence.runTransaction("notifyLocalViewChanges","readwrite",(f=>L.forEach(c,(m=>L.forEach(m.Ao,(T=>C.persistence.referenceDelegate.addReference(f,m.targetId,T))).next((()=>L.forEach(m.Vo,(T=>C.persistence.referenceDelegate.removeReference(f,m.targetId,T)))))))))}catch(f){if(!Hr(f))throw f;j(tu,"Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const T=C.No.get(m),P=T.snapshotVersion,V=T.withLastLimboFreeSnapshotVersion(P);C.No=C.No.insert(m,V)}}})(n.localStore,i))}async function Ew(r,e){const t=ne(r);if(!t.currentUser.isEqual(e)){j(uu,"User change. New user:",e.toKey());const n=await Tf(t.localStore,e);t.currentUser=e,(function(i,o){i.dc.forEach((B=>{B.forEach((u=>{u.reject(new z(x.CANCELLED,o))}))})),i.dc.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Bi(t,n.qo)}}function _w(r,e){const t=ne(r),n=t.Ic.get(e);if(n&&n.lc)return ie().add(n.key);{let s=ie();const i=t.Tc.get(e);if(!i)return s;for(const o of i??[]){const B=t.hc.get(o);s=s.unionWith(B.view.Yu)}return s}}function Gf(r){const e=ne(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=kf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_w.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dw.bind(null,e),e.Ec.hn=nw.bind(null,e.eventManager),e.Ec.yc=rw.bind(null,e.eventManager),e}function Dw(r){const e=ne(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gw.bind(null,e),e}class ho{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Oo(e.databaseInfo.databaseId),this.sharedClientState=this.Sc(e),this.persistence=this.vc(e),await this.persistence.start(),this.localStore=this.Dc(e),this.gcScheduler=this.xc(e,this.localStore),this.indexBackfillerScheduler=this.Cc(e,this.localStore)}xc(e,t){return null}Cc(e,t){return null}Dc(e){return SI(this.persistence,new RI,e.initialUser,this.serializer)}vc(e){return new yf(ZB.w_,this.serializer)}Sc(e){return new YI}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ho.provider={build:()=>new ho};class Iw extends ho{constructor(e){super(),this.cacheSizeBytes=e}xc(e,t){Q(this.persistence.referenceDelegate instanceof co,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new m_(n,e.asyncQueue,t)}vc(e){const t=this.cacheSizeBytes!==void 0?rt.withCacheSize(this.cacheSizeBytes):rt.DEFAULT;return new yf((n=>co.w_(n,t)),this.serializer)}}class uB{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>$l(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ew.bind(null,this.syncEngine),await WI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new ZI})()}createDatastore(e){const t=Oo(e.databaseInfo.databaseId),n=i_(e.databaseInfo);return c_(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,s,i,o,B){return new xI(n,s,i,o,B)})(this.localStore,this.datastore,e.asyncQueue,(t=>$l(this.syncEngine,t,0)),(function(){return Fl.Je()?new Fl:new t_})())}createSyncEngine(e,t){return(function(s,i,o,B,u,c,C){const f=new Bw(s,i,o,B,u,c);return C&&(f.mc=!0),f})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=ne(s);j(Ut,"RemoteStore shutting down."),i.ca.add(5),await ai(i),i.Ea.shutdown(),i.ha.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}uB.provider={build:()=>new uB};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="FirestoreClient";class ww{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=s,this.user=Ke.UNAUTHENTICATED,this.clientId=DB.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async o=>{j(Ln,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(j(Ln,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=au(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Oa(r,e){r.asyncQueue.verifyOperationInProgress(),j(Ln,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await Tf(e.localStore,s),n=s)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function Xl(r,e){r.asyncQueue.verifyOperationInProgress();const t=await yw(r);j(Ln,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((n=>Kl(e.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>Kl(e.remoteStore,s))),r._onlineComponents=e}async function yw(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){j(Ln,"Using user provided OfflineComponentProvider");try{await Oa(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;vt("Error using user provided cache. Falling back to memory cache: "+t),await Oa(r,new ho)}}else j(Ln,"Using default OfflineComponentProvider"),await Oa(r,new Iw(void 0));return r._offlineComponents}async function Hf(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(j(Ln,"Using user provided OnlineComponentProvider"),await Xl(r,r._uninitializedComponentsProvider._online)):(j(Ln,"Using default OnlineComponentProvider"),await Xl(r,new uB))),r._onlineComponents}function Tw(r){return Hf(r).then((e=>e.syncEngine))}async function Aw(r){const e=await Hf(r),t=e.eventManager;return t.onListen=uw.bind(null,e.syncEngine),t.onUnlisten=hw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=cw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Cw.bind(null,e.syncEngine),t}function Rw(r,e,t={}){const n=new wn;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,B,u,c){const C=new $I({next:m=>{C.Aa(),o.enqueueAndForget((()=>tw(i,f)));const T=m.docs.has(B);!T&&m.fromCache?c.reject(new z(x.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&m.fromCache&&u&&u.source==="server"?c.reject(new z(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new sw(RB(B.path),C,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return ew(i,f)})(await Aw(r),r.asyncQueue,e,t,n))),n.promise}function vw(r,e){const t=new wn;return r.asyncQueue.enqueueAndForget((async()=>fw(await Tw(r),e,t))),t.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uf=class{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Pw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Fo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Pw=class extends Uf{data(){return super.data()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{convertValue(e,t="none"){switch(be(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(vn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return ur(e,((s,i)=>{n[s]=this.convertValue(i,t)})),n}convertVectorValue(e){var n,s,i;const t=(i=(s=(n=e.fields)==null?void 0:n[Ns].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>we(o.doubleValue)));return new ot(t)}convertGeoPoint(e){return new Vt(we(e.latitude),we(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ti(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Or(e));default:return null}}convertTimestamp(e){const t=Rn(e);return new _e(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=he.fromString(e);Q(KC(n),9688,{name:e});const s=new bs(n.get(1),n.get(3)),i=new X(n.popFirst(5));return s.isEqual(t)||Zt(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl="AsyncQueue";class eh{constructor(e=Promise.resolve()){this.qc=[],this.$c=!1,this.Kc=[],this.Qc=null,this.Wc=!1,this.Gc=!1,this.zc=[],this.jt=new YC(this,"async_queue_retry"),this.jc=()=>{const n=ba();n&&j(Zl,"Visibility state changed to "+n.visibilityState),this.jt.qt()},this.Hc=e;const t=ba();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.$c}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.$c){this.$c=!0,this.Gc=e||!1;const t=ba();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Jc(),this.$c)return new Promise((()=>{}));const t=new wn;return this.Yc((()=>this.$c&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.qc.push(e),this.Zc())))}async Zc(){if(this.qc.length!==0){try{await this.qc[0](),this.qc.shift(),this.jt.reset()}catch(e){if(!Hr(e))throw e;j(Zl,"Operation failed with retryable error: "+e)}this.qc.length>0&&this.jt.Ut((()=>this.Zc()))}}Yc(e){const t=this.Hc.then((()=>(this.Wc=!0,e().catch((n=>{throw this.Qc=n,this.Wc=!1,Zt("INTERNAL UNHANDLED ERROR: ",th(n)),n})).then((n=>(this.Wc=!1,n))))));return this.Hc=t,t}enqueueAfterDelay(e,t,n){this.Jc(),this.zc.indexOf(e)>-1&&(t=0);const s=ou.createAndSchedule(this,e,t,n,(i=>this.Xc(i)));return this.Kc.push(s),s}Jc(){this.Qc&&Y(47125,{el:th(this.Qc)})}verifyOperationInProgress(){}async tl(){let e;do e=this.Hc,await e;while(e!==this.Hc)}nl(e){for(const t of this.Kc)if(t.timerId===e)return!0;return!1}rl(e){return this.tl().then((()=>{this.Kc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.Kc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tl()}))}il(e){this.zc.push(e)}Xc(e){const t=this.Kc.indexOf(e);this.Kc.splice(t,1)}}function th(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class lu extends FB{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new eh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new eh(e),this._firestoreClient=void 0,await e}}}function Ow(r,e){const t=typeof r=="object"?r:yo(),n=typeof r=="string"?r:Zi,s=Br(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=Fp("firestore");i&&D_(s,...i)}return s}function Jf(r){if(r._terminated)throw new z(x.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Nw(r),r._firestoreClient}function Nw(r){var n,s,i,o;const e=r._freezeSettings(),t=h_(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,(s=r._app)==null?void 0:s.options.apiKey,e);r._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new ww(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}})(r._componentsProvider))}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw extends Sw{constructor(e){super(),this.firestore=e}convertBytes(e){return new _t(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,t)}}class gs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class er extends Uf{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ki(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Fo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=er._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}er._jsonSchemaVersion="firestore/documentSnapshot/1.0",er._jsonSchema={type:ve("string",er._jsonSchemaVersion),bundleSource:ve("string","DocumentSnapshot"),bundleName:ve("string"),bundle:ve("string")};class Ki extends er{data(e={}){return super.data(e)}}class Ts{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new gs(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Ki(this._firestore,this._userDataWriter,n.key,n,new gs(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new z(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((B=>{Fe(s._snapshot.query)?sB(s._snapshot.query):vB(s.query._query);const u=new Ki(s._firestore,s._userDataWriter,B.doc.key,B.doc,new gs(s._snapshot.mutatedKeys.has(B.doc.key),s._snapshot.fromCache),s.query.converter);return B.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((B=>i||B.type!==3)).map((B=>{const u=new Ki(s._firestore,s._userDataWriter,B.doc.key,B.doc,new gs(s._snapshot.mutatedKeys.has(B.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,C=-1;return B.type!==0&&(c=o.indexOf(B.doc.key),o=o.delete(B.doc.key)),B.type!==1&&(o=o.add(B.doc),C=o.indexOf(B.doc.key)),{type:Lw(B.type),doc:u,oldIndex:c,newIndex:C}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ts._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=DB.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Lw(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:r})}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ts._jsonSchemaVersion="firestore/querySnapshot/1.0",Ts._jsonSchema={type:ve("string",Ts._jsonSchemaVersion),bundleSource:ve("string","QuerySnapshot"),bundleName:ve("string"),bundle:ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(r){r=Ss(r,Le);const e=Ss(r.firestore,lu),t=Jf(e);return Rw(t,r._key).then((n=>Vw(e,r,n)))}function vR(r,e,t){r=Ss(r,Le);const n=Ss(r.firestore,lu),s=bw(r.converter,e,t),i=T_(n);return kw(n,[A_(i,"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,Wt.none())])}function kw(r,e){const t=Jf(r);return vw(t,e)}function Vw(r,e,t){const n=t.docs.get(e._key),s=new Fw(r);return new er(r,s,e._key,n,new gs(t.hasPendingWrites,t.fromCache),e.converter)}const nh="@firebase/firestore",rh="4.17.1";(function(e,t=!0){Nm(xr),Mt(new Rt("firestore",((n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),B=new lu(new YE(n.getProvider("auth-internal")),new e_(o,n.getProvider("app-check-internal")),Jm(o,s),o);return i={useFetchStreams:t,...i},B._setSettings(i),B}),"PUBLIC").setMultipleInstances(!0)),Dt(nh,rh,e),Dt(nh,rh,"esm2020")})();var xw="firebase",Mw="12.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt(xw,Mw,"app");function jf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gw=jf,qf=new ar("auth","Firebase",jf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new wo("@firebase/auth");function Kf(r,...e){Co.logLevel<=ae.WARN&&Co.warn(`Auth (${xr}): ${r}`,...e)}function zi(r,...e){Co.logLevel<=ae.ERROR&&Co.error(`Auth (${xr}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(r,...e){throw Cu(r,...e)}function At(r,...e){return Cu(r,...e)}function hu(r,e,t){const n={...Gw(),[e]:t};return new ar("auth","Firebase",n).create(e,{appName:r.name})}function Yt(r){return hu(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hw(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&wt(r,"argument-error"),hu(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cu(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return qf.create(r,...e)}function ee(r,e,...t){if(!r)throw Cu(e,...t)}function zt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw zi(e),new Error(e)}function tn(r,e){r||zt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cB(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function Uw(){return sh()==="http:"||sh()==="https:"}function sh(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uw()||fB()||"connection"in navigator)?navigator.onLine:!0}function jw(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t){this.shortDelay=e,this.longDelay=t,tn(t>e,"Short delay should be less than long delay!"),this.isMobile=kp()||Mp()}get(){return Jw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(r,e){tn(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zw=new ui(3e4,6e4);function kn(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function nn(r,e,t,n,s={}){return Qf(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const B=$s({...o,key:r.config.apiKey}).slice(1),u=await r._getAdditionalHeaders();u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode);const c={method:e,headers:u,...i};return xp()||(c.referrerPolicy="strict-origin-when-cross-origin"),r.emulatorConfig&&Ys(r.emulatorConfig.host)&&(c.credentials="include"),zf.fetch()(await Wf(r,r.config.apiHost,t,B),c)})}async function Qf(r,e,t){r._canInitEmulator=!1;const n={...qw,...e};try{const s=new Ww(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Mi(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const B=i.ok?o.errorMessage:o.error.message,[u,c]=B.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mi(r,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Mi(r,"email-already-in-use",o);if(u==="USER_DISABLED")throw Mi(r,"user-disabled",o);const C=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw hu(r,C,c);wt(r,C)}}catch(s){if(s instanceof Pt)throw s;wt(r,"network-request-failed",{message:String(s)})}}async function ci(r,e,t,n,s={}){const i=await nn(r,e,t,n,s);return"mfaPendingCredential"in i&&wt(r,"multi-factor-auth-required",{_serverResponse:i}),i}async function Wf(r,e,t,n){const s=`${e}${t}?${n}`,i=r,o=i.config.emulator?fu(r.config,s):`${r.config.apiScheme}://${s}`;return Kw.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Qw(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ww{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(At(this.auth,"network-request-failed")),zw.get())})}}function Mi(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=At(r,e,n);return s.customData._tokenResponse=t,s}function ih(r){return r!==void 0&&r.enterprise!==void 0}class $w{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Qw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Yw(r,e){return nn(r,"GET","/v2/recaptchaConfig",kn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xw(r,e){return nn(r,"POST","/v1/accounts:delete",e)}async function fo(r,e){return nn(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zw(r,e=!1){const t=Ue(r),n=await t.getIdToken(e),s=du(n);ee(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:As(Na(s.auth_time)),issuedAtTime:As(Na(s.iat)),expirationTime:As(Na(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Na(r){return Number(r)*1e3}function du(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return zi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vh(t);return s?JSON.parse(s):(zi("Failed to decode base64 JWT payload"),null)}catch(s){return zi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function oh(r){const e=du(r);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Pt&&ey(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function ey({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lB{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=As(this.lastLoginAt),this.creationTime=As(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(r){var f;const e=r.auth,t=await r.getIdToken(),n=await Vr(r,fo(e,{idToken:t}));ee(n==null?void 0:n.users.length,e,"internal-error");const s=n.users[0];r._notifyReloadListener(s);const i=(f=s.providerUserInfo)!=null&&f.length?$f(s.providerUserInfo):[],o=ry(r.providerData,i),B=r.isAnonymous,u=!(r.email&&s.passwordHash)&&!(o!=null&&o.length),c=B?u:!1,C={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new lB(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(r,C)}async function ny(r){const e=Ue(r);await po(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ry(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function $f(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sy(r,e){const t=await Qf(r,{},async()=>{const n=$s({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=await Wf(r,s,"/v1/token",`key=${i}`),B=await r._getAdditionalHeaders();B["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:B,body:n};return r.emulatorConfig&&Ys(r.emulatorConfig.host)&&(u.credentials="include"),zf.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function iy(r,e){return nn(r,"POST","/v2/accounts:revokeToken",kn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):oh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const t=oh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await sy(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new Ar;return n&&(ee(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ar,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(r,e){ee(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Tt{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new ty(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new lB(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Vr(this,this.stsTokenManager.getToken(this.auth,e));return ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Zw(this,e)}reload(){return ny(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Tt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await po(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ct(this.auth.app))return Promise.reject(Yt(this.auth));const e=await this.getIdToken();return await Vr(this,Xw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,B=t.tenantId??void 0,u=t._redirectEventId??void 0,c=t.createdAt??void 0,C=t.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:T,providerData:P,stsTokenManager:V}=t;ee(f&&V,e,"internal-error");const U=Ar.fromJSON(this.name,V);ee(typeof f=="string",e,"internal-error"),ln(n,e.name),ln(s,e.name),ee(typeof m=="boolean",e,"internal-error"),ee(typeof T=="boolean",e,"internal-error"),ln(i,e.name),ln(o,e.name),ln(B,e.name),ln(u,e.name),ln(c,e.name),ln(C,e.name);const K=new Tt({uid:f,auth:e,email:s,emailVerified:m,displayName:n,isAnonymous:T,photoURL:o,phoneNumber:i,tenantId:B,stsTokenManager:U,createdAt:c,lastLoginAt:C});return P&&Array.isArray(P)&&(K.providerData=P.map(re=>({...re}))),u&&(K._redirectEventId=u),K}static async _fromIdTokenResponse(e,t,n=!1){const s=new Ar;s.updateFromServerResponse(t);const i=new Tt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await po(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];ee(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?$f(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),B=new Ar;B.updateFromIdToken(n);const u=new Tt({uid:s.localId,auth:e,stsTokenManager:B,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new lB(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=new Map;function Qt(r){tn(r instanceof Function,"Expected a class definition");let e=ah.get(r);return e?(tn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,ah.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Yf.type="NONE";const Bh=Yf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(r,e,t){return`firebase:${r}:${e}:${t}`}class Rr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=Qi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Qi("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await fo(this.auth,{idToken:e}).catch(()=>{});return t?Tt._fromGetAccountInfoResponse(this.auth,t,e):null}return Tt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Rr(Qt(Bh),e,n);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Qt(Bh);const o=Qi(n,e.config.apiKey,e.name);let B=null;for(const c of t)try{const C=await c._get(o);if(C){let f;if(typeof C=="string"){const m=await fo(e,{idToken:C}).catch(()=>{});if(!m)break;f=await Tt._fromGetAccountInfoResponse(e,m,C)}else f=Tt._fromJSON(e,C);c!==i&&(B=f),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Rr(i,e,n):(i=u[0],B&&await i._set(o,B.toJSON()),await Promise.all(t.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Rr(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(td(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rd(e))return"Blackberry";if(sd(e))return"Webos";if(Zf(e))return"Safari";if((e.includes("chrome/")||ed(e))&&!e.includes("edge/"))return"Chrome";if(nd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Xf(r=Qe()){return/firefox\//i.test(r)}function Zf(r=Qe()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ed(r=Qe()){return/crios\//i.test(r)}function td(r=Qe()){return/iemobile/i.test(r)}function nd(r=Qe()){return/android/i.test(r)}function rd(r=Qe()){return/blackberry/i.test(r)}function sd(r=Qe()){return/webos/i.test(r)}function pu(r=Qe()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function oy(r=Qe()){var e;return pu(r)&&!!((e=window.navigator)!=null&&e.standalone)}function ay(){return Gp()&&document.documentMode===10}function id(r=Qe()){return pu(r)||nd(r)||sd(r)||rd(r)||/windows phone/i.test(r)||td(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(r,e=[]){let t;switch(r){case"Browser":t=uh(Qe());break;case"Worker":t=`${uh(Qe())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xr}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,B)=>{try{const u=e(i);o(u)}catch(u){B(u)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uy(r,e={}){return nn(r,"GET","/v2/passwordPolicy",kn(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=6;class ly{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??cy,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ch(this),this.idTokenSubscription=new ch(this),this.beforeStateQueue=new By(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Qt(t)),this._initializationPromise=this.queue(async()=>{var n,s,i;if(!this._deleted&&(this.persistenceManager=await Rr.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await fo(this,{idToken:e}),n=await Tt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(B=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(B,B))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,B=n==null?void 0:n._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===B)&&(u!=null&&u.user)&&(n=u.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(o){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await po(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ct(this.app))return Promise.reject(Yt(this));const t=e?Ue(e):null;return t&&ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ct(this.app)?Promise.reject(Yt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ct(this.app)?Promise.reject(Yt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uy(this),t=new ly(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ar("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await iy(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Qt(e)||this._popupRedirectResolver;ee(t,this,"argument-error"),this.redirectPersistenceManager=await Rr.create(this,[Qt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const B=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(B,this,"internal-error"),B.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,n,s);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=od(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(Ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Kf(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Vn(r){return Ue(r)}class ch{constructor(e){this.auth=e,this.observer=null,this.addObserver=qp(t=>this.observer=t)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Cy(r){Jo=r}function ad(r){return Jo.loadJS(r)}function fy(){return Jo.recaptchaEnterpriseScript}function dy(){return Jo.gapiScript}function py(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class gy{constructor(){this.enterprise=new my}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class my{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="recaptcha-enterprise",Bd="NO_RECAPTCHA",lh="onFirebaseAuthREInstanceReady";class dn{constructor(e){this.type=Ey,this.auth=Vn(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,B)=>{Yw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)B(new Error("recaptcha Enterprise site key undefined"));else{const c=new $w(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{B(u)})})}function s(i,o,B){const u=window.grecaptcha;ih(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Bd)})}):B(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new gy().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{n(this.auth).then(async B=>{if(!t&&ih(window.grecaptcha)&&dn.scriptInjectionDeferred)await dn.scriptInjectionDeferred.promise,s(B,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=fy();u.length!==0&&(u+=B+`&onload=${lh}`),dn.scriptInjectionDeferred=new Hh,window[lh]=()=>{var c;(c=dn.scriptInjectionDeferred)==null||c.resolve()},ad(u).then(()=>{var c;return(c=dn.scriptInjectionDeferred)==null?void 0:c.promise}).then(()=>{s(B,i,o)}).catch(c=>{o(c)})}}).catch(B=>{o(B)})})}}dn.scriptInjectionDeferred=null;async function hh(r,e,t,n=!1,s=!1){const i=new dn(r);let o;if(s)o=Bd;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const B={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in B){const u=B.phoneEnrollmentInfo.phoneNumber,c=B.phoneEnrollmentInfo.recaptchaToken;Object.assign(B,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in B){const u=B.phoneSignInInfo.recaptchaToken;Object.assign(B,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return B}return n?Object.assign(B,{captchaResp:o}):Object.assign(B,{captchaResponse:o}),Object.assign(B,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(B,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),B}async function hB(r,e,t,n,s){var i;if((i=r._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await hh(r,e,t,t==="getOobCode");return n(r,o)}else return n(r,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const B=await hh(r,e,t,t==="getOobCode");return n(r,B)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(r,e){const t=Br(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(An(i,e??{}))return s;wt(s,"already-initialized")}return t.initialize({options:e})}function Dy(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Qt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Iy(r,e,t){const n=Vn(r);ee(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=ud(e),{host:o,port:B}=wy(e),u=B===null?"":`:${B}`,c={url:`${i}//${o}${u}/`},C=Object.freeze({host:o,port:B,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){ee(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),ee(An(c,n.config.emulator)&&An(C,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=c,n.emulatorConfig=C,n.settings.appVerificationDisabledForTesting=!0,Ys(o)?Jh(`${i}//${o}${u}`):yy()}function ud(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function wy(r){const e=ud(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:Ch(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:Ch(o)}}}function Ch(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function yy(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return zt("not implemented")}_getIdTokenResponse(e){return zt("not implemented")}_linkToIdToken(e,t){return zt("not implemented")}_getReauthenticationResolver(e){return zt("not implemented")}}async function Ty(r,e){return nn(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ay(r,e){return ci(r,"POST","/v1/accounts:signInWithPassword",kn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ry(r,e){return ci(r,"POST","/v1/accounts:signInWithEmailLink",kn(r,e))}async function vy(r,e){return ci(r,"POST","/v1/accounts:signInWithEmailLink",kn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws extends gu{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ws(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ws(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hB(e,t,"signInWithPassword",Ay);case"emailLink":return Ry(e,{email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hB(e,n,"signUpPassword",Ty);case"emailLink":return vy(e,{idToken:t,email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(r,e){return ci(r,"POST","/v1/accounts:signInWithIdp",kn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py="http://localhost";class rr extends gu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):wt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...i}=t;if(!n||!s)return null;const o=new rr(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return vr(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,vr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vr(e,t)}buildRequest(){const e={requestUri:Py,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$s(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function by(r){const e=hs(Cs(r)).link,t=e?hs(Cs(e)).deep_link_id:null,n=hs(Cs(r)).deep_link_id;return(n?hs(Cs(n)).link:null)||n||t||e||r}class mu{constructor(e){const t=hs(Cs(e)),n=t.apiKey??null,s=t.oobCode??null,i=Sy(t.mode??null);ee(n&&s&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=by(e);try{return new mu(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.providerId=Kr.PROVIDER_ID}static credential(e,t){return Ws._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=mu.parseLink(t);return ee(n,"argument-error"),Ws._fromEmailAndCode(e,n.code,n.tenantId)}}Kr.PROVIDER_ID="password";Kr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Kr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Eu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends li{constructor(){super("facebook.com")}static credential(e){return rr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return gn.credential(t,n)}catch{return null}}}gn.GOOGLE_SIGN_IN_METHOD="google.com";gn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends li{constructor(){super("github.com")}static credential(e){return rr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends li{constructor(){super("twitter.com")}static credential(e,t){return rr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return En.credential(t,n)}catch{return null}}}En.TWITTER_SIGN_IN_METHOD="twitter.com";En.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oy(r,e){return ci(r,"POST","/v1/accounts:signUp",kn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await Tt._fromIdTokenResponse(e,n,s),o=fh(n);return new sr({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=fh(n);return new sr({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function fh(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends Pt{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,go.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new go(e,t,n,s)}}function cd(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?go._fromErrorAndOperation(r,i,e,n):i})}async function Ny(r,e,t=!1){const n=await Vr(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return sr._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fy(r,e,t=!1){const{auth:n}=r;if(Ct(n.app))return Promise.reject(Yt(n));const s="reauthenticate";try{const i=await Vr(r,cd(n,s,e,r),t);ee(i.idToken,n,"internal-error");const o=du(i.idToken);ee(o,n,"internal-error");const{sub:B}=o;return ee(r.uid===B,n,"user-mismatch"),sr._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&wt(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ld(r,e,t=!1){if(Ct(r.app))return Promise.reject(Yt(r));const n="signIn",s=await cd(r,n,e),i=await sr._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}async function Ly(r,e){return ld(Vn(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hd(r){const e=Vn(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function PR(r,e,t){if(Ct(r.app))return Promise.reject(Yt(r));const n=Vn(r),o=await hB(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Oy).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&hd(r),u}),B=await sr._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(B.user),B}function SR(r,e,t){return Ct(r.app)?Promise.reject(Yt(r)):Ly(Ue(r),Kr.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&hd(r),n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ky(r,e){return nn(r,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bR(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const n=Ue(r),i={idToken:await n.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Vr(n,ky(n.auth,i));n.displayName=o.displayName||null,n.photoURL=o.photoUrl||null;const B=n.providerData.find(({providerId:u})=>u==="password");B&&(B.displayName=n.displayName,B.photoURL=n.photoURL),await n._updateTokensIfNecessary(o)}function Vy(r,e,t,n){return Ue(r).onIdTokenChanged(e,t,n)}function xy(r,e,t){return Ue(r).beforeAuthStateChanged(e,t)}function OR(r,e,t,n){return Ue(r).onAuthStateChanged(e,t,n)}function NR(r){return Ue(r).signOut()}const mo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mo,"1"),this.storage.removeItem(mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My=1e3,Gy=10;class fd extends Cd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=id(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,B,u)=>{this.notifyListeners(o,u)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);ay()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Gy):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},My)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fd.type="LOCAL";const Hy=fd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd extends Cd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}dd.type="SESSION";const pd=dd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new jo(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const B=Array.from(o).map(async c=>c(t.origin,i)),u=await Uy(B);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((B,u)=>{const c=_u("",20);s.port1.start();const C=setTimeout(()=>{u(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(C),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),B(m.data.response);break;default:clearTimeout(C),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return window}function jy(r){xt().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function qy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ky(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function zy(){return gd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="firebaseLocalStorageDb",Qy=1,Eo="firebaseLocalStorage",Ed="fbase_key";class hi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qo(r,e){return r.transaction([Eo],e?"readwrite":"readonly").objectStore(Eo)}function Wy(){const r=indexedDB.deleteDatabase(md);return new hi(r).toPromise()}function _d(){const r=indexedDB.open(md,Qy);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Eo,{keyPath:Ed})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Eo)?e(n):(n.close(),await Wy(),e(await _d()))})})}async function dh(r,e,t){const n=qo(r,!0).put({[Ed]:e,value:t});return new hi(n).toPromise()}async function $y(r,e){const t=qo(r,!1).get(e),n=await new hi(t).toPromise();return n===void 0?null:n.value}function ph(r,e){const t=qo(r,!0).delete(e);return new hi(t).toPromise()}const Yy=800,Xy=3;class Dd{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.isClosing)throw new Error("Database is closing");return this.dbPromise?this.dbPromise:(this.dbPromise=_d(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(this.isClosing||t++>Xy)throw n;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return gd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jo._getInstance(zy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await qy(),!this.activeServiceWorker)return;this.sender=new Jy(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ky()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await dh(e,mo,"1"),await ph(e,mo)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>dh(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>$y(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ph(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(s=>{const i=qo(s,!1).getAll();return new hi(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}catch(e){return this.isClosing||Kf(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Dd.type="LOCAL";const Zy=Dd;new ui(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(r,e){return e?Qt(e):(ee(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends gu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function eT(r){return ld(r.auth,new Du(r),r.bypassAuthState)}function tT(r){const{auth:e,user:t}=r;return ee(t,e,"internal-error"),Fy(t,new Du(r),r.bypassAuthState)}async function nT(r){const{auth:e,user:t}=r;return ee(t,e,"internal-error"),Ny(t,new Du(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:B}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(B)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eT;case"linkViaPopup":case"linkViaRedirect":return nT;case"reauthViaPopup":case"reauthViaRedirect":return tT;default:wt(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=new ui(2e3,1e4);async function FR(r,e,t){if(Ct(r.app))return Promise.reject(At(r,"operation-not-supported-in-this-environment"));const n=Vn(r);Hw(r,e,Eu);const s=Id(n,t);return new Wn(n,"signInViaPopup",e,s).executeNotNull()}class Wn extends wd{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,Wn.currentPopupAction&&Wn.currentPopupAction.cancel(),Wn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=_u();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rT.get())};e()}}Wn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT="pendingRedirect",Wi=new Map;class iT extends wd{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Wi.get(this.auth._key());if(!e){try{const n=await oT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Wi.set(this.auth._key(),e)}return this.bypassAuthState||Wi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oT(r,e){const t=uT(e),n=BT(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function aT(r,e){Wi.set(r._key(),e)}function BT(r){return Qt(r._redirectPersistence)}function uT(r){return Qi(sT,r.config.apiKey,r.name)}async function cT(r,e,t=!1){if(Ct(r.app))return Promise.reject(Yt(r));const n=Vn(r),s=Id(n,e),o=await new iT(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=600*1e3;class hT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!yd(e)){const s=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(At(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lT&&this.cachedEventUids.clear(),this.cachedEventUids.has(gh(e))}saveEventToCache(e){this.cachedEventUids.add(gh(e)),this.lastProcessedEventTime=Date.now()}}function gh(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function yd({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CT(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yd(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fT(r,e={}){return nn(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pT=/^https?/;async function gT(r){if(r.config.emulator)return;const{authorizedDomains:e}=await fT(r);for(const t of e)try{if(mT(t))return}catch{}wt(r,"unauthorized-domain")}function mT(r){const e=cB(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!pT.test(t))return!1;if(dT.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=new ui(3e4,6e4);function mh(){const r=xt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function _T(r){return new Promise((e,t)=>{var s,i,o;function n(){mh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mh(),t(At(r,"network-request-failed"))},timeout:ET.get()})}if((i=(s=xt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=xt().gapi)!=null&&o.load)n();else{const B=py("iframefcb");return xt()[B]=()=>{gapi.load?n():t(At(r,"network-request-failed"))},ad(`${dy()}?onload=${B}`).catch(u=>t(u))}}).catch(e=>{throw $i=null,e})}let $i=null;function DT(r){return $i=$i||_T(r),$i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=new ui(5e3,15e3),wT="__/auth/iframe",yT="emulator/auth/iframe",TT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RT(r){const e=r.config;ee(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?fu(e,yT):`https://${r.config.authDomain}/${wT}`,n={apiKey:e.apiKey,appName:r.name,v:xr},s=AT.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${$s(n).slice(1)}`}async function vT(r){const e=await DT(r),t=xt().gapi;return ee(t,r,"internal-error"),e.open({where:document.body,url:RT(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TT,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=At(r,"network-request-failed"),B=xt().setTimeout(()=>{i(o)},IT.get());function u(){xt().clearTimeout(B),s(n)}n.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ST=500,bT=600,OT="_blank",NT="http://localhost";class Eh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FT(r,e,t,n=ST,s=bT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let B="";const u={...PT,width:n.toString(),height:s.toString(),top:i,left:o},c=Qe().toLowerCase();t&&(B=ed(c)?OT:t),Xf(c)&&(e=e||NT,u.scrollbars="yes");const C=Object.entries(u).reduce((m,[T,P])=>`${m}${T}=${P},`,"");if(oy(c)&&B!=="_self")return LT(e||"",B),new Eh(null);const f=window.open(e||"",B,C);ee(f,r,"popup-blocked");try{f.focus()}catch{}return new Eh(f)}function LT(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT="__/auth/handler",VT="emulator/auth/handler",xT=encodeURIComponent("fac");async function _h(r,e,t,n,s,i){ee(r.config.authDomain,r,"auth-domain-config-required"),ee(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:xr,eventId:s};if(e instanceof Eu){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",jp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[C,f]of Object.entries({}))o[C]=f}if(e instanceof li){const C=e.getScopes().filter(f=>f!=="");C.length>0&&(o.scopes=C.join(","))}r.tenantId&&(o.tid=r.tenantId);const B=o;for(const C of Object.keys(B))B[C]===void 0&&delete B[C];const u=await r._getAppCheckToken(),c=u?`#${xT}=${encodeURIComponent(u)}`:"";return`${MT(r)}?${$s(B).slice(1)}${c}`}function MT({config:r}){return r.emulator?fu(r,VT):`https://${r.authDomain}/${kT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="webStorageSupport";class GT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pd,this._completeRedirectFn=cT,this._overrideRedirectResult=aT}async _openPopup(e,t,n,s){var o;tn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await _h(e,t,n,cB(),s);return FT(e,i,_u())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await _h(e,t,n,cB(),s);return jy(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(tn(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await vT(e),n=new hT(e);return t.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Fa,{type:Fa},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Fa];i!==void 0&&t(!!i),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return id()||Zf()||pu()}}const HT=GT;var Dh="@firebase/auth",Ih="1.13.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jT(r){Mt(new Rt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:B}=n.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:o,authDomain:B,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:od(r)},c=new hy(n,s,i,u);return Dy(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Mt(new Rt("auth-internal",e=>{const t=Vn(e.getProvider("auth").getImmediate());return(n=>new UT(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(Dh,Ih,JT(r)),Dt(Dh,Ih,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=300,KT=Gh("authIdTokenMaxAge")||qT;let wh=null;const zT=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>KT)return;const s=t==null?void 0:t.token;wh!==s&&(wh=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function QT(r=yo()){const e=Br(r,"auth");if(e.isInitialized())return e.getImmediate();const t=_y(r,{popupRedirectResolver:HT,persistence:[Zy,Hy,pd]}),n=Gh("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=zT(i.toString());xy(t,o,()=>o(t.currentUser)),Vy(t,B=>o(B))}}const s=xh("auth");return s&&Iy(t,`http://${s}`),t}function WT(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}Cy({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=At("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",WT().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jT("Browser");const Td="@firebase/installations",Iu="0.6.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=1e4,Rd=`w:${Iu}`,vd="FIS_v2",$T="https://firebaseinstallations.googleapis.com/v1",YT=3600*1e3,XT="installations",ZT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ir=new ar(XT,ZT,eA);function Pd(r){return r instanceof Pt&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd({projectId:r}){return`${$T}/projects/${r}/installations`}function bd(r){return{token:r.token,requestStatus:2,expiresIn:nA(r.expiresIn),creationTime:Date.now()}}async function Od(r,e){const n=(await e.json()).error;return ir.create("request-failed",{requestName:r,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Nd({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function tA(r,{refreshToken:e}){const t=Nd(r);return t.append("Authorization",rA(e)),t}async function Fd(r){const e=await r();return e.status>=500&&e.status<600?r():e}function nA(r){return Number(r.replace("s","000"))}function rA(r){return`${vd} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sA({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const n=Sd(r),s=Nd(r),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:t,authVersion:vd,appId:r.appId,sdkVersion:Rd},B={method:"POST",headers:s,body:JSON.stringify(o)},u=await Fd(()=>fetch(n,B));if(u.ok){const c=await u.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:bd(c.authToken)}}else throw await Od("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=/^[cdef][\w-]{21}$/,CB="";function aA(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=BA(r);return oA.test(t)?t:CB}catch{return CB}}function BA(r){return iA(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=new Map;function Vd(r,e){const t=Ko(r);xd(t,e),uA(t,e)}function xd(r,e){const t=kd.get(r);if(t)for(const n of t)n(e)}function uA(r,e){const t=cA();t&&t.postMessage({key:r,fid:e}),lA()}let $n=null;function cA(){return!$n&&"BroadcastChannel"in self&&($n=new BroadcastChannel("[Firebase] FID Change"),$n.onmessage=r=>{xd(r.data.key,r.data.fid)}),$n}function lA(){kd.size===0&&$n&&($n.close(),$n=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA="firebase-installations-database",CA=1,or="firebase-installations-store";let La=null;function wu(){return La||(La=Kh(hA,CA,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(or)}}})),La}async function _o(r,e){const t=Ko(r),s=(await wu()).transaction(or,"readwrite"),i=s.objectStore(or),o=await i.get(t);return await i.put(e,t),await s.done,(!o||o.fid!==e.fid)&&Vd(r,e.fid),e}async function Md(r){const e=Ko(r),n=(await wu()).transaction(or,"readwrite");await n.objectStore(or).delete(e),await n.done}async function zo(r,e){const t=Ko(r),s=(await wu()).transaction(or,"readwrite"),i=s.objectStore(or),o=await i.get(t),B=e(o);return B===void 0?await i.delete(t):await i.put(B,t),await s.done,B&&(!o||o.fid!==B.fid)&&Vd(r,B.fid),B}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yu(r){let e;const t=await zo(r.appConfig,n=>{const s=fA(n),i=dA(r,s);return e=i.registrationPromise,i.installationEntry});return t.fid===CB?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function fA(r){const e=r||{fid:aA(),registrationStatus:0};return Gd(e)}function dA(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ir.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=pA(r,t);return{installationEntry:t,registrationPromise:n}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:gA(r)}:{installationEntry:e}}async function pA(r,e){try{const t=await sA(r,e);return _o(r.appConfig,t)}catch(t){throw Pd(t)&&t.customData.serverCode===409?await Md(r.appConfig):await _o(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function gA(r){let e=await yh(r.appConfig);for(;e.registrationStatus===1;)await Ld(100),e=await yh(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:n}=await yu(r);return n||t}return e}function yh(r){return zo(r,e=>{if(!e)throw ir.create("installation-not-found");return Gd(e)})}function Gd(r){return mA(r)?{fid:r.fid,registrationStatus:0}:r}function mA(r){return r.registrationStatus===1&&r.registrationTime+Ad<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EA({appConfig:r,heartbeatServiceProvider:e},t){const n=_A(r,t),s=tA(r,t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:Rd,appId:r.appId}},B={method:"POST",headers:s,body:JSON.stringify(o)},u=await Fd(()=>fetch(n,B));if(u.ok){const c=await u.json();return bd(c)}else throw await Od("Generate Auth Token",u)}function _A(r,{fid:e}){return`${Sd(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tu(r,e=!1){let t;const n=await zo(r.appConfig,i=>{if(!Hd(i))throw ir.create("not-registered");const o=i.authToken;if(!e&&wA(o))return i;if(o.requestStatus===1)return t=DA(r,e),i;{if(!navigator.onLine)throw ir.create("app-offline");const B=TA(i);return t=IA(r,B),B}});return t?await t:n.authToken}async function DA(r,e){let t=await Th(r.appConfig);for(;t.authToken.requestStatus===1;)await Ld(100),t=await Th(r.appConfig);const n=t.authToken;return n.requestStatus===0?Tu(r,e):n}function Th(r){return zo(r,e=>{if(!Hd(e))throw ir.create("not-registered");const t=e.authToken;return AA(t)?{...e,authToken:{requestStatus:0}}:e})}async function IA(r,e){try{const t=await EA(r,e),n={...e,authToken:t};return await _o(r.appConfig,n),t}catch(t){if(Pd(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Md(r.appConfig);else{const n={...e,authToken:{requestStatus:0}};await _o(r.appConfig,n)}throw t}}function Hd(r){return r!==void 0&&r.registrationStatus===2}function wA(r){return r.requestStatus===2&&!yA(r)}function yA(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+YT}function TA(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function AA(r){return r.requestStatus===1&&r.requestTime+Ad<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RA(r){const e=r,{installationEntry:t,registrationPromise:n}=await yu(e);return n?n.catch(console.error):Tu(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(r,e=!1){const t=r;return await PA(t),(await Tu(t,e)).token}async function PA(r){const{registrationPromise:e}=await yu(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(r){if(!r||!r.options)throw ka("App Configuration");if(!r.name)throw ka("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw ka(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function ka(r){return ir.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="installations",bA="installations-internal",OA=r=>{const e=r.getProvider("app").getImmediate(),t=SA(e),n=Br(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},NA=r=>{const e=r.getProvider("app").getImmediate(),t=Br(e,Ud).getImmediate();return{getId:()=>RA(t),getToken:s=>vA(t,s)}};function FA(){Mt(new Rt(Ud,OA,"PUBLIC")),Mt(new Rt(bA,NA,"PRIVATE"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */FA();Dt(Td,Iu);Dt(Td,Iu,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="analytics",LA="firebase_id",kA="origin",VA=60*1e3,xA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Au="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new wo("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},gt=new ar("analytics","Analytics",MA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(r){if(!r.startsWith(Au)){const e=gt.create("invalid-gtag-resource",{gtagURL:r});return Ze.warn(e.message),""}return r}function Jd(r){return Promise.all(r.map(e=>e.catch(t=>t)))}function HA(r,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(r,e)),t}function UA(r,e){const t=HA("firebase-js-sdk-policy",{createScriptURL:GA}),n=document.createElement("script"),s=`${Au}?l=${r}&id=${e}`;n.src=t?t==null?void 0:t.createScriptURL(s):s,n.async=!0,document.head.appendChild(n)}function JA(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function jA(r,e,t,n,s,i){const o=n[s];try{if(o)await e[o];else{const u=(await Jd(t)).find(c=>c.measurementId===s);u&&await e[u.appId]}}catch(B){Ze.error(B)}r("config",s,i)}async function qA(r,e,t,n,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const B=await Jd(t);for(const u of o){const c=B.find(f=>f.measurementId===u),C=c&&e[c.appId];if(C)i.push(C);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),r("event",n,s||{})}catch(i){Ze.error(i)}}function KA(r,e,t,n){async function s(i,...o){try{if(i==="event"){const[B,u]=o;await qA(r,e,t,B,u)}else if(i==="config"){const[B,u]=o;await jA(r,e,t,n,B,u)}else if(i==="consent"){const[B,u]=o;r("consent",B,u)}else if(i==="get"){const[B,u,c]=o;r("get",B,u,c)}else if(i==="set"){const[B]=o;r("set",B)}else r(i,...o)}catch(B){Ze.error(B)}}return s}function zA(r,e,t,n,s){let i=function(...o){window[n].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=KA(i,r,e,t),{gtagCore:i,wrappedGtag:window[s]}}function QA(r){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Au)&&t.src.includes(r))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=30,$A=1e3;class YA{constructor(e={},t=$A){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const jd=new YA;function XA(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function ZA(r){var o;const{appId:e,apiKey:t}=r,n={method:"GET",headers:XA(t)},s=xA.replace("{app-id}",e),i=await fetch(s,n);if(i.status!==200&&i.status!==304){let B="";try{const u=await i.json();(o=u.error)!=null&&o.message&&(B=u.error.message)}catch{}throw gt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:B})}return i.json()}async function eR(r,e=jd,t){const{appId:n,apiKey:s,measurementId:i}=r.options;if(!n)throw gt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:n};throw gt.create("no-api-key")}const o=e.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},B=new rR;return setTimeout(async()=>{B.abort()},VA),qd({appId:n,apiKey:s,measurementId:i},o,B,e)}async function qd(r,{throttleEndTimeMillis:e,backoffCount:t},n,s=jd){var B;const{appId:i,measurementId:o}=r;try{await tR(n,e)}catch(u){if(o)return Ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:o};throw u}try{const u=await ZA(r);return s.deleteThrottleMetadata(i),u}catch(u){const c=u;if(!nR(c)){if(s.deleteThrottleMetadata(i),o)return Ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:o};throw u}const C=Number((B=c==null?void 0:c.customData)==null?void 0:B.httpStatus)===503?bc(t,s.intervalMillis,WA):bc(t,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+C,backoffCount:t+1};return s.setThrottleMetadata(i,f),Ze.debug(`Calling attemptFetch again in ${C} millis`),qd(r,f,n,s)}}function tR(r,e){return new Promise((t,n)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);r.addEventListener(()=>{clearTimeout(i),n(gt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function nR(r){if(!(r instanceof Pt)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class rR{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function sR(r,e,t,n,s){if(s&&s.global){r("event",t,n);return}else{const i=await e,o={...n,send_to:i};r("event",t,o)}}async function iR(r,e,t,n){if(n&&n.global){const s={};for(const i of Object.keys(t))s[`user_properties.${i}`]=t[i];return r("set",s),Promise.resolve()}else{const s=await e;r("config",s,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oR(){if(dB())try{await pB()}catch(r){return Ze.warn(gt.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return Ze.warn(gt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function aR(r,e,t,n,s,i,o){const B=eR(r);B.then(m=>{t[m.measurementId]=m.appId,r.options.measurementId&&m.measurementId!==r.options.measurementId&&Ze.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Ze.error(m)),e.push(B);const u=oR().then(m=>{if(m)return n.getId()}),[c,C]=await Promise.all([B,u]);QA(i)||UA(i,c.measurementId),s("js",new Date);const f=(o==null?void 0:o.config)??{};return f[kA]="firebase",f.update=!0,C!=null&&(f[LA]=C),s("config",c.measurementId,f),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e){this.app=e}_delete(){return delete Pr[this.app.options.appId],Promise.resolve()}}let Pr={},Ah=[];const Rh={};let Va="dataLayer",uR="gtag",vh,Ru,Ph=!1;function cR(){const r=[];if(fB()&&r.push("This is a browser extension environment."),Uh()||r.push("Cookies are not available."),r.length>0){const e=r.map((n,s)=>`(${s+1}) ${n}`).join(" "),t=gt.create("invalid-analytics-context",{errorInfo:e});Ze.warn(t.message)}}function lR(r,e,t){cR();const n=r.options.appId;if(!n)throw gt.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)Ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw gt.create("no-api-key");if(Pr[n]!=null)throw gt.create("already-exists",{id:n});if(!Ph){JA(Va);const{wrappedGtag:i,gtagCore:o}=zA(Pr,Ah,Rh,Va,uR);Ru=i,vh=o,Ph=!0}return Pr[n]=aR(r,Ah,Rh,e,vh,Va,t),new BR(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(r=yo()){r=Ue(r);const e=Br(r,Do);return e.isInitialized()?e.getImmediate():CR(r)}function CR(r,e={}){const t=Br(r,Do);if(t.isInitialized()){const s=t.getImmediate();if(An(e,t.getOptions()))return s;throw gt.create("already-initialized")}return t.initialize({options:e})}async function fR(){if(fB()||!Uh()||!dB())return!1;try{return await pB()}catch{return!1}}function dR(r,e,t){r=Ue(r),iR(Ru,Pr[r.app.options.appId],e,t).catch(n=>Ze.error(n))}function pR(r,e,t,n){r=Ue(r),sR(Ru,Pr[r.app.options.appId],e,t,n).catch(s=>Ze.error(s))}const Sh="@firebase/analytics",bh="0.10.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(){Mt(new Rt(Do,(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return lR(n,s,t)},"PUBLIC")),Mt(new Rt("analytics-internal",r,"PRIVATE")),Dt(Sh,bh),Dt(Sh,bh,"esm2020");function r(e){try{const t=e.getProvider(Do).getImmediate();return{logEvent:(n,s,i)=>pR(t,n,s,i),setUserProperties:(n,s)=>dR(t,n,s)}}catch(t){throw gt.create("interop-component-reg-failed",{reason:t})}}}gR();const Gi={apiKey:"AIzaSyBzfwam3hIod9dgUNIDJTzjpiHJIqdWNMQ",authDomain:"modena-lines-4e8d4.firebaseapp.com",projectId:"modena-lines-4e8d4",storageBucket:"modena-lines-4e8d4.firebasestorage.app",messagingSenderId:"892690880192",appId:"1:892690880192:web:fd168e25ef9418fe583f25",measurementId:"G-9RS07B6Q1E"};function mR(){const r="AIzaSyBzfwam3hIod9dgUNIDJTzjpiHJIqdWNMQ",e="modena-lines-4e8d4";return!!(r.trim()!==""&&r!=="your-api-key-here"&&e&&e.trim()!==""&&e!=="your-project-id")}let ls=null,Oh=null,Nh=null,Fh=null;const ER=mR();if(ER)try{ls=Wg().length===0?zh(Gi):yo(),Oh=QT(ls),Nh=Ow(ls),typeof window<"u"&&Gi.measurementId&&fR().then(r=>{r&&(Fh=hR(ls),console.log("[Firebase Analytics] Initialized with measurementId:",Gi.measurementId))}).catch(r=>{console.warn("[Firebase Analytics] Not supported in current environment:",r)}),console.log("[Firebase] Initialized successfully for project:",Gi.projectId)}catch(r){console.warn("[Firebase] Initialization error, falling back to LocalStorage Guest Mode:",r),ls=null,Oh=null,Nh=null,Fh=null}else console.info("[Firebase] Config keys missing or incomplete. Operating in LocalStorage Guest Mode.");export{gn as G,wR as a,yR as b,Oh as c,Nh as d,FR as e,PR as f,RR as g,SR as h,NR as i,OR as o,vR as s,bR as u};
