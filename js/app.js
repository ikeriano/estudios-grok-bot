(()=>{var m0=Object.defineProperty;var as=(i,e)=>{for(var t in e)m0(i,t,{get:e[t],enumerable:!0})};var ys={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hf=0,Qh=1,uf=2;var ao=1,df=2,$a=3,bs=0,Pt=1,pt=2,Jn=0,Ya=1,Zt=2,eu=3,tu=4,ff=5;var Qs=100,pf=101,mf=102,gf=103,xf=104,_f=200,vf=201,yf=202,Mf=203,nu=204,iu=205,bf=206,Ef=207,Sf=208,Tf=209,wf=210,Af=211,Rf=212,Cf=213,Pf=214,dl=0,fl=1,pl=2,Da=3,ml=4,gl=5,xl=6,_l=7,$l=0,If=1,Lf=2,gi=0,ro=1,oo=2,lo=3,ea=4,co=5,ho=6,uo=7;var su=300,Es=301,ta=302,Yl=303,jl=304,fo=306,ds=1e3,Si=1001,vl=1002,hn=1003,Df=1004;var po=1005;var pn=1006,Kl=1007;var Ss=1008;var Dn=1009,au=1010,ru=1011,ja=1012,Zl=1013,xi=1014,Qn=1015,mn=1016,Jl=1017,Ql=1018,Ka=1020,ou=35902,lu=35899,cu=1021,hu=1022,ei=1023,wi=1026,Ts=1027,ec=1028,tc=1029,ws=1030,nc=1031;var ic=1033,mo=33776,go=33777,xo=33778,_o=33779,sc=35840,ac=35841,rc=35842,oc=35843,lc=36196,cc=37492,hc=37496,uc=37488,dc=37489,vo=37490,fc=37491,pc=37808,mc=37809,gc=37810,xc=37811,_c=37812,vc=37813,yc=37814,Mc=37815,bc=37816,Ec=37817,Sc=37818,Tc=37819,wc=37820,Ac=37821,Rc=36492,Cc=36494,Pc=36495,Ic=36283,Lc=36284,yo=36285,Dc=36286;var Rr=2300,yl=2301,hl=2302,Oh=2303,qh=2400,Bh=2401,Hh=2402;var Nf=3200;var Mo=0,Uf=1,Yi="",Tt="srgb",Cr="srgb-linear",Pr="linear",_t="srgb";var ul=7680;var Ff=519,Of=512,qf=513,Bf=514,Nc=515,Hf=516,zf=517,Uc=518,kf=519,uu=35044,du=35048;var fu="300 es",ci=2e3,Na=2001;function g0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function x0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ua(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gf(){let i=Ua("canvas");return i.style.display="block",i}var Td={},Fa=null;function Ir(...i){let e="THREE."+i.shift();Fa?Fa("log",e,...i):console.log(e,...i)}function Vf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ze(...i){i=Vf(i);let e="THREE."+i.shift();if(Fa)Fa("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function et(...i){i=Vf(i);let e="THREE."+i.shift();if(Fa)Fa("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ws(...i){let e=i.join(" ");e in Td||(Td[e]=!0,Ze(...i))}function Wf(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}var Xf={[dl]:fl,[pl]:xl,[ml]:_l,[Da]:gl,[fl]:dl,[xl]:pl,[_l]:ml,[gl]:Da},hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wd=1234567,Sr=Math.PI/180,Xs=180/Math.PI;function Ti(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function pu(i,e){return(i%e+e)%e}function _0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function v0(i,e,t){return i!==e?(t-i)/(e-i):0}function Tr(i,e,t){return(1-t)*i+t*e}function y0(i,e,t,n){return Tr(i,e,1-Math.exp(-t*n))}function M0(i,e=1){return e-Math.abs(pu(i,e*2)-e)}function b0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function E0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function S0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function T0(i,e){return i+Math.random()*(e-i)}function w0(i){return i*(.5-Math.random())}function A0(i){i!==void 0&&(wd=i);let e=wd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function R0(i){return i*Sr}function C0(i){return i*Xs}function P0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function I0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function L0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function D0(i,e,t,n,s){let a=Math.cos,r=Math.sin,o=a(t/2),l=r(t/2),c=a((e+n)/2),u=r((e+n)/2),d=a((e-n)/2),h=r((e-n)/2),f=a((n-e)/2),g=r((n-e)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:Ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function li(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ji={DEG2RAD:Sr,RAD2DEG:Xs,generateUUID:Ti,clamp:it,euclideanModulo:pu,mapLinear:_0,inverseLerp:v0,lerp:Tr,damp:y0,pingpong:M0,smoothstep:b0,smootherstep:E0,randInt:S0,randFloat:T0,randFloatSpread:w0,seededRandom:A0,degToRad:R0,radToDeg:C0,isPowerOfTwo:P0,ceilPowerOfTwo:I0,floorPowerOfTwo:L0,setQuaternionFromProperEuler:D0,normalize:St,denormalize:li},ae=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*s+e.x,this.y=a*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},en=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,r,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=a[r+0],f=a[r+1],g=a[r+2],_=a[r+3];if(d!==_||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*_;m<0&&(h=-h,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),R=Math.sin(S);p=Math.sin(p*S)/R,o=Math.sin(o*S)/R,l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+_*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+_*o;let S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,a,r){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=a[r],h=a[r+1],f=a[r+2],g=a[r+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(a/2),h=l(n/2),f=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(a-c)*f,this._z=(r-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(a-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(r-s)/f,this._x=(a+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+r*o+s*c-a*l,this._y=s*u+r*l+a*o-n*c,this._z=a*u+r*c+n*l-s*o,this._w=r*u-n*o-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,a=-a,r=-r,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ad.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*s-o*n),u=2*(o*t-a*s),d=2*(a*n-r*t);return this.x=t+l*c+r*d-o*u,this.y=n+l*u+o*c-a*d,this.z=s+l*d+a*u-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=s*l-a*o,this.y=a*r-n*l,this.z=n*o-s*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dh.copy(this).projectOnVector(e),this.sub(dh)}reflect(e){return this.sub(dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dh=new D,Ad=new en,tt=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c)}set(e,t,n,s,a,r,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],S=s[1],R=s[4],M=s[7],E=s[2],w=s[5],b=s[8];return a[0]=r*_+o*S+l*E,a[3]=r*m+o*R+l*w,a[6]=r*p+o*M+l*b,a[1]=c*_+u*S+d*E,a[4]=c*m+u*R+d*w,a[7]=c*p+u*M+d*b,a[2]=h*_+f*S+g*E,a[5]=h*m+f*R+g*w,a[8]=h*p+f*M+g*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*o*c-n*a*u+n*o*l+s*a*c-s*r*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*r-o*c,h=o*l-u*a,f=c*a-r*l,g=t*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*r)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*a-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(r*t-n*a)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-s*c,s*l,-s*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return Ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fh.makeScale(e,t)),this}rotate(e){return Ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fh.makeRotation(-e)),this}translate(e,t){return Ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},fh=new tt,Rd=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cd=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function N0(){let i={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===_t&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===_t&&(s.r=Ia(s.r),s.g=Ia(s.g),s.b=Ia(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yi?Pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Cr]:{primaries:e,whitePoint:n,transfer:Pr,toXYZ:Rd,fromXYZ:Cd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Rd,fromXYZ:Cd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),i}var ot=N0();function Vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ia(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var da,Ml=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{da===void 0&&(da=Ua("canvas")),da.width=e.width,da.height=e.height;let s=da.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=da}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ua("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Vi(a[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vi(t[n]/255)*255):t[n]=Vi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},U0=0,Oa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(ph(s[r].image)):a.push(ph(s[r]))}else a=ph(s);n.url=a}return t||(e.images[this.uuid]=n),n}};function ph(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ml.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}var F0=0,mh=new D,Mn=class i extends hi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Si,s=Si,a=pn,r=Ss,o=ei,l=Dn,c=i.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Ti(),this.name="",this.source=new Oa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mh).x}get height(){return this.source.getSize(mh).y}get depth(){return this.source.getSize(mh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ds:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ds:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=su;Mn.DEFAULT_ANISOTROPY=1;var qt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,M=(f+1)/2,E=(p+1)/2,w=(u+h)/4,b=(d+_)/4,x=(g+m)/4;return R>M&&R>E?R<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(R),s=w/n,a=b/n):M>E?M<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(M),n=w/s,a=x/s):E<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),n=b/a,s=x/a),this.set(n,s,a,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-_)/S,this.z=(h-u)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bl=class extends hi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},a=new Mn(s),r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Oa(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends bl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Lr=class extends Mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var El=class extends Mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var lt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,a,r,o,l,c,u,d,h,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,l,c,u,d,h,f,g,_,m)}set(e,t,n,s,a,r,o,l,c,u,d,h,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=a,p[5]=r,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/fa.setFromMatrixColumn(e,0).length(),a=1/fa.setFromMatrixColumn(e,1).length(),r=1/fa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){let h=r*u,f=r*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h+_*o,t[4]=g*o-f,t[8]=r*c,t[1]=r*d,t[5]=r*u,t[9]=-o,t[2]=f*o-g,t[6]=_+h*o,t[10]=r*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h-_*o,t[4]=-r*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=r*u,t[9]=_-h*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){let h=r*u,f=r*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){let h=r*l,f=r*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=r*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){let h=r*l,f=r*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=r*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(O0,e,q0)}lookAt(e,t,n){let s=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),rs.crossVectors(n,Fn),rs.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),rs.crossVectors(n,Fn)),rs.normalize(),Oo.crossVectors(Fn,rs),s[0]=rs.x,s[4]=Oo.x,s[8]=Fn.x,s[1]=rs.y,s[5]=Oo.y,s[9]=Fn.y,s[2]=rs.z,s[6]=Oo.z,s[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],R=n[7],M=n[11],E=n[15],w=s[0],b=s[4],x=s[8],y=s[12],A=s[1],P=s[5],L=s[9],F=s[13],N=s[2],q=s[6],G=s[10],W=s[14],se=s[3],K=s[7],J=s[11],ee=s[15];return a[0]=r*w+o*A+l*N+c*se,a[4]=r*b+o*P+l*q+c*K,a[8]=r*x+o*L+l*G+c*J,a[12]=r*y+o*F+l*W+c*ee,a[1]=u*w+d*A+h*N+f*se,a[5]=u*b+d*P+h*q+f*K,a[9]=u*x+d*L+h*G+f*J,a[13]=u*y+d*F+h*W+f*ee,a[2]=g*w+_*A+m*N+p*se,a[6]=g*b+_*P+m*q+p*K,a[10]=g*x+_*L+m*G+p*J,a[14]=g*y+_*F+m*W+p*ee,a[3]=S*w+R*A+M*N+E*se,a[7]=S*b+R*P+M*q+E*K,a[11]=S*x+R*L+M*G+E*J,a[15]=S*y+R*F+M*W+E*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],S=l*f-c*h,R=o*f-c*d,M=o*h-l*d,E=r*f-c*u,w=r*h-l*u,b=r*d-o*u;return t*(_*S-m*R+p*M)-n*(g*S-m*E+p*w)+s*(g*R-_*E+p*b)-a*(g*M-_*w+m*b)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],a=e[1],r=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(r*u-o*c)-n*(a*u-o*l)+s*(a*c-r*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=t*o-n*r,R=t*l-s*r,M=t*c-a*r,E=n*l-s*o,w=n*c-a*o,b=s*c-a*l,x=u*_-d*g,y=u*m-h*g,A=u*p-f*g,P=d*m-h*_,L=d*p-f*_,F=h*p-f*m,N=S*F-R*L+M*P+E*A-w*y+b*x;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/N;return e[0]=(o*F-l*L+c*P)*q,e[1]=(s*L-n*F-a*P)*q,e[2]=(_*b-m*w+p*E)*q,e[3]=(h*w-d*b-f*E)*q,e[4]=(l*A-r*F-c*y)*q,e[5]=(t*F-s*A+a*y)*q,e[6]=(m*M-g*b-p*R)*q,e[7]=(u*b-h*M+f*R)*q,e[8]=(r*L-o*A+c*x)*q,e[9]=(n*A-t*L-a*x)*q,e[10]=(g*w-_*M+p*S)*q,e[11]=(d*M-u*w-f*S)*q,e[12]=(o*y-r*P-l*x)*q,e[13]=(t*P-n*y+s*x)*q,e[14]=(_*R-g*E-m*S)*q,e[15]=(u*E-d*R+h*S)*q,this}scale(e){let t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),a=1-n,r=e.x,o=e.y,l=e.z,c=a*r,u=a*o;return this.set(c*r+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*r,0,c*l-s*o,u*l+s*r,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,r){return this.set(1,n,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,u=r+r,d=o+o,h=a*c,f=a*u,g=a*d,_=r*u,m=r*d,p=o*d,S=l*c,R=l*u,M=l*d,E=n.x,w=n.y,b=n.z;return s[0]=(1-(_+p))*E,s[1]=(f+M)*E,s[2]=(g-R)*E,s[3]=0,s[4]=(f-M)*w,s[5]=(1-(h+p))*w,s[6]=(m+S)*w,s[7]=0,s[8]=(g+R)*b,s[9]=(m-S)*b,s[10]=(1-(h+_))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let r=fa.set(s[0],s[1],s[2]).length(),o=fa.set(s[4],s[5],s[6]).length(),l=fa.set(s[8],s[9],s[10]).length();a<0&&(r=-r),ai.copy(this);let c=1/r,u=1/o,d=1/l;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=d,ai.elements[9]*=d,ai.elements[10]*=d,t.setFromRotationMatrix(ai),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,s,a,r,o=ci,l=!1){let c=this.elements,u=2*a/(t-e),d=2*a/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),g,_;if(l)g=a/(r-a),_=r*a/(r-a);else if(o===ci)g=-(r+a)/(r-a),_=-2*r*a/(r-a);else if(o===Na)g=-r/(r-a),_=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,a,r,o=ci,l=!1){let c=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s),g,_;if(l)g=1/(r-a),_=r/(r-a);else if(o===ci)g=-2/(r-a),_=-(r+a)/(r-a);else if(o===Na)g=-1/(r-a),_=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},fa=new D,ai=new lt,O0=new D(0,0,0),q0=new D(1,1,1),rs=new D,Oo=new D,Fn=new D,Pd=new lt,Id=new en,Zn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-it(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Id.setFromEuler(this),this.setFromQuaternion(Id,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var qa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},B0=0,Ld=new D,pa=new en,Oi=new lt,qo=new D,pr=new D,H0=new D,z0=new en,Dd=new D(1,0,0),Nd=new D(0,1,0),Ud=new D(0,0,1),Fd={type:"added"},k0={type:"removed"},ma={type:"childadded",child:null},gh={type:"childremoved",child:null},Xt=class i extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Zn,n=new en,s=new D(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new tt}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pa.setFromAxisAngle(e,t),this.quaternion.multiply(pa),this}rotateOnWorldAxis(e,t){return pa.setFromAxisAngle(e,t),this.quaternion.premultiply(pa),this}rotateX(e){return this.rotateOnAxis(Dd,e)}rotateY(e){return this.rotateOnAxis(Nd,e)}rotateZ(e){return this.rotateOnAxis(Ud,e)}translateOnAxis(e,t){return Ld.copy(e).applyQuaternion(this.quaternion),this.position.add(Ld.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dd,e)}translateY(e){return this.translateOnAxis(Nd,e)}translateZ(e){return this.translateOnAxis(Ud,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qo.copy(e):qo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(pr,qo,this.up):Oi.lookAt(qo,pr,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),pa.setFromRotationMatrix(Oi),this.quaternion.premultiply(pa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fd),ma.child=e,this.dispatchEvent(ma),ma.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(k0),gh.child=e,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fd),ma.child=e,this.dispatchEvent(ma),ma.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,H0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,z0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*s,a[13]+=n-a[1]*t-a[5]*n-a[9]*s,a[14]+=s-a[2]*t-a[6]*n-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(e.animations,l))}}if(t){let o=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),d=r(e.shapes),h=r(e.skeletons),f=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xt.DEFAULT_UP=new D(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ge=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},G0={type:"move"},Ba=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(G0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ge;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},$f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function xh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=pu(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=xh(r,a,e+1/3),this.g=xh(r,a,e),this.b=xh(r,a,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=Tt){function n(a){a!==void 0&&parseFloat(a)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=$f[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return ot.workingToColorSpace(yn.copy(this),e),Math.round(it(yn.r*255,0,255))*65536+Math.round(it(yn.g*255,0,255))*256+Math.round(it(yn.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(yn.copy(this),t);let n=yn.r,s=yn.g,a=yn.b,r=Math.max(n,s,a),o=Math.min(n,s,a),l,c,u=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=u<=.5?d/(r+o):d/(2-r-o),r){case n:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-n)/d+2;break;case a:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Tt){ot.workingToColorSpace(yn.copy(this),e);let t=yn.r,n=yn.g,s=yn.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(os),this.setHSL(os.h+e,os.s+t,os.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(os),e.getHSL(Bo);let n=Tr(os.h,Bo.h,t),s=Tr(os.s,Bo.s,t),a=Tr(os.l,Bo.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new Fe;Fe.NAMES=$f;var Dr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Fe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},$s=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ui=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ri=new D,qi=new D,_h=new D,Bi=new D,ga=new D,xa=new D,Od=new D,vh=new D,yh=new D,Mh=new D,bh=new qt,Eh=new qt,Sh=new qt,Gi=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ri.subVectors(e,t),s.cross(ri);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){ri.subVectors(s,t),qi.subVectors(n,t),_h.subVectors(e,t);let r=ri.dot(ri),o=ri.dot(qi),l=ri.dot(_h),c=qi.dot(qi),u=qi.dot(_h),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,g=(r*u-o*l)*h;return a.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,n,s,a,r,o,l){return this.getBarycoord(e,t,n,s,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Bi.x),l.addScaledVector(r,Bi.y),l.addScaledVector(o,Bi.z),l)}static getInterpolatedAttribute(e,t,n,s,a,r){return bh.setScalar(0),Eh.setScalar(0),Sh.setScalar(0),bh.fromBufferAttribute(e,t),Eh.fromBufferAttribute(e,n),Sh.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(bh,a.x),r.addScaledVector(Eh,a.y),r.addScaledVector(Sh,a.z),r}static isFrontFacing(e,t,n,s){return ri.subVectors(n,t),qi.subVectors(e,t),ri.cross(qi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),ri.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,a=this.c,r,o;ga.subVectors(s,n),xa.subVectors(a,n),vh.subVectors(e,n);let l=ga.dot(vh),c=xa.dot(vh);if(l<=0&&c<=0)return t.copy(n);yh.subVectors(e,s);let u=ga.dot(yh),d=xa.dot(yh);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),t.copy(n).addScaledVector(ga,r);Mh.subVectors(e,a);let f=ga.dot(Mh),g=xa.dot(Mh);if(g>=0&&f<=g)return t.copy(a);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(xa,o);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Od.subVectors(a,s),o=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(Od,o);let p=1/(m+_+h);return r=_*p,o=h*p,t.copy(n).addScaledVector(ga,r).addScaledVector(xa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ai=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,oi):oi.fromBufferAttribute(a,r),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ho.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ho.copy(n.boundingBox)),Ho.applyMatrix4(e.matrixWorld),this.union(Ho)}let s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),zo.subVectors(this.max,mr),_a.subVectors(e.a,mr),va.subVectors(e.b,mr),ya.subVectors(e.c,mr),ls.subVectors(va,_a),cs.subVectors(ya,va),zs.subVectors(_a,ya);let t=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-zs.z,zs.y,ls.z,0,-ls.x,cs.z,0,-cs.x,zs.z,0,-zs.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-zs.y,zs.x,0];return!Th(t,_a,va,ya,zo)||(t=[1,0,0,0,1,0,0,0,1],!Th(t,_a,va,ya,zo))?!1:(ko.crossVectors(ls,cs),t=[ko.x,ko.y,ko.z],Th(t,_a,va,ya,zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Hi=[new D,new D,new D,new D,new D,new D,new D,new D],oi=new D,Ho=new Ai,_a=new D,va=new D,ya=new D,ls=new D,cs=new D,zs=new D,mr=new D,zo=new D,ko=new D,ks=new D;function Th(i,e,t,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){ks.fromArray(i,a);let o=s.x*Math.abs(ks.x)+s.y*Math.abs(ks.y)+s.z*Math.abs(ks.z),l=e.dot(ks),c=t.dot(ks),u=n.dot(ks);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Qt=new D,Go=new ae,V0=0,fn=class extends hi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:V0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uu,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Go.fromBufferAttribute(this,t),Go.applyMatrix3(e),this.setXY(t,Go.x,Go.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=li(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=li(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=li(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),a=St(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Nr=class extends fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ur=class extends fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ft=class extends fn{constructor(e,t,n){super(new Float32Array(e),t,n)}},W0=new Ai,gr=new D,wh=new D,Wi=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):W0.setFromPoints(e).getCenter(n);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);let t=gr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(gr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(wh)),this.expandByPoint(gr.copy(e.center).sub(wh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},X0=0,Kn=new lt,Ah=new Xt,Ma=new D,On=new Ai,xr=new Ai,cn=new D,kt=class i extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(g0(e)?Ur:Nr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let a=new tt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return Ah.lookAt(e),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ma).negate(),this.translate(Ma.x,Ma.y,Ma.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,a=e.length;s<a;s++){let r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ft(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let a=t[n];On.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){let o=t[a];xr.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(On.min,xr.min),On.expandByPoint(cn),cn.addVectors(On.max,xr.max),On.expandByPoint(cn)):(On.expandByPoint(xr.min),On.expandByPoint(xr.max))}On.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)cn.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(cn));if(t)for(let a=0,r=t.length;a<r;a++){let o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)cn.fromBufferAttribute(o,c),l&&(Ma.fromBufferAttribute(e,c),cn.add(Ma)),s=Math.max(s,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,a=t.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new fn(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new D,l[x]=new D;let c=new D,u=new D,d=new D,h=new ae,f=new ae,g=new ae,_=new D,m=new D;function p(x,y,A){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,A),h.fromBufferAttribute(a,x),f.fromBufferAttribute(a,y),g.fromBufferAttribute(a,A),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),o[x].add(_),o[y].add(_),o[A].add(_),l[x].add(m),l[y].add(m),l[A].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,y=S.length;x<y;++x){let A=S[x],P=A.start,L=A.count;for(let F=P,N=P+L;F<N;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let R=new D,M=new D,E=new D,w=new D;function b(x){E.fromBufferAttribute(s,x),w.copy(E);let y=o[x];R.copy(y),R.sub(E.multiplyScalar(E.dot(y))).normalize(),M.crossVectors(w,y);let P=M.dot(l[x])<0?-1:1;r.setXYZW(x,R.x,R.y,R.z,P)}for(let x=0,y=S.length;x<y;++x){let A=S[x],P=A.start,L=A.count;for(let F=P,N=P+L;F<N;F+=3)b(e.getX(F+0)),b(e.getX(F+1)),b(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new D,a=new D,r=new D,o=new D,l=new D,c=new D,u=new D,d=new D;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),r.fromBufferAttribute(t,m),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new fn(h,u,d)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let a=e.morphAttributes;for(let c in a){let u=[],d=a[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let c=0,u=r.length;c<u;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uu,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},wn=new D,Fr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=li(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),a=St(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){Ir("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new fn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ir("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Rh=new D,$0=new D,Y0=new tt,qn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Rh.subVectors(n,t).cross($0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Rh),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(s,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Y0.getNormalMatrix(e),s=this.coplanarPoint(Rh).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},j0=0,di=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=Ya,this.side=bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nu,this.blendDst=iu,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ff,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ul,this.stencilZFail=ul,this.stencilZPass=ul,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(t){let a=s(e.textures),r=s(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new qn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ae().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Pn=class extends di{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ba,_r=new D,Ea=new D,Sa=new D,Ta=new ae,vr=new ae,Yf=new lt,Vo=new D,yr=new D,Wo=new D,qd=new ae,Ch=new ae,Bd=new ae,Bn=class extends Xt{constructor(e=new Pn){if(super(),this.isSprite=!0,this.type="Sprite",ba===void 0){ba=new kt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Sl(t,5);ba.setIndex([0,1,2,0,2,3]),ba.setAttribute("position",new Fr(n,3,0,!1)),ba.setAttribute("uv",new Fr(n,2,3,!1))}this.geometry=ba,this.material=e,this.center=new ae(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&et('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ea.setFromMatrixScale(this.matrixWorld),Yf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Sa.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ea.multiplyScalar(-Sa.z);let n=this.material.rotation,s,a;n!==0&&(a=Math.cos(n),s=Math.sin(n));let r=this.center;Xo(Vo.set(-.5,-.5,0),Sa,r,Ea,s,a),Xo(yr.set(.5,-.5,0),Sa,r,Ea,s,a),Xo(Wo.set(.5,.5,0),Sa,r,Ea,s,a),qd.set(0,0),Ch.set(1,0),Bd.set(1,1);let o=e.ray.intersectTriangle(Vo,yr,Wo,!1,_r);if(o===null&&(Xo(yr.set(-.5,.5,0),Sa,r,Ea,s,a),Ch.set(0,1),o=e.ray.intersectTriangle(Vo,Wo,yr,!1,_r),o===null))return;let l=e.ray.origin.distanceTo(_r);l<e.near||l>e.far||t.push({distance:l,point:_r.clone(),uv:Gi.getInterpolation(_r,Vo,yr,Wo,qd,Ch,Bd,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Xo(i,e,t,n,s,a){Ta.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(vr.x=a*Ta.x-s*Ta.y,vr.y=s*Ta.x+a*Ta.y):vr.copy(Ta),i.copy(e),i.x+=vr.x,i.y+=vr.y,i.applyMatrix4(Yf)}var zi=new D,Ph=new D,$o=new D,Yo=new D,fs=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ph.copy(e).add(t).multiplyScalar(.5),$o.copy(t).sub(e).normalize(),Yo.copy(this.origin).sub(Ph);let a=e.distanceTo(t)*.5,r=-this.direction.dot($o),o=Yo.dot(this.direction),l=-Yo.dot($o),c=Yo.lengthSq(),u=Math.abs(1-r*r),d,h,f,g;if(u>0)if(d=r*l-o,h=r*o-l,g=a*u,d>=0)if(h>=-g)if(h<=g){let _=1/u;d*=_,h*=_,f=d*(d+r*h+2*o)+h*(r*d+h+2*l)+c}else h=a,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*l)+c;else h=-a,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-r*a+o)),h=d>0?-a:Math.min(Math.max(-a,-l),a),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-a,-l),a),f=h*(h+2*l)+c):(d=Math.max(0,-(r*a+o)),h=d>0?a:Math.min(Math.max(-a,-l),a),f=-d*d+h*(h+2*l)+c);else h=r>0?-a:a,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ph).addScaledVector($o,h),f}intersectSphere(e,t){if(e.radius<0)return null;zi.subVectors(e.center,this.origin);let n=zi.dot(this.direction),s=zi.dot(zi)-n*n,a=e.radius*e.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,r,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(a=(e.min.y-h.y)*u,r=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,r=(e.min.y-h.y)*u),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-r.x,h=e.y-r.y,f=e.z-r.z,g=t.x-r.x,_=t.y-r.y,m=t.z-r.z,p=n.x-r.x,S=n.y-r.y,R=n.z-r.z,M=Math.abs(l),E=Math.abs(c),w=Math.abs(u),b,x,y,A,P,L,F,N,q,G,W,se;if(M>=E&&M>=w?(y=l,L=d,q=g,se=p,l>=0?(b=c,x=u,A=h,P=f,F=_,N=m,G=S,W=R):(b=u,x=c,A=f,P=h,F=m,N=_,G=R,W=S)):E>=w?(y=c,L=h,q=_,se=S,c>=0?(b=u,x=l,A=f,P=d,F=m,N=g,G=R,W=p):(b=l,x=u,A=d,P=f,F=g,N=m,G=p,W=R)):(y=u,L=f,q=m,se=R,u>=0?(b=l,x=c,A=d,P=h,F=g,N=_,G=p,W=S):(b=c,x=l,A=h,P=d,F=_,N=g,G=S,W=p)),y===0)return null;let K=b/y,J=x/y,ee=1/y,Ce=A-K*L,$=P-J*L,pe=F-K*q,ve=N-J*q,de=G-K*se,O=W-J*se,V=de*ve-O*pe,ue=Ce*O-$*de,Le=pe*$-ve*Ce;if(s){if(V<0||ue<0||Le<0)return null}else if((V<0||ue<0||Le<0)&&(V>0||ue>0||Le>0))return null;let ge=V+ue+Le;if(ge===0)return null;let Xe=ee*(V*L+ue*q+Le*se);return(ge>0?Xe<0:Xe>0)?null:this.at(Xe/ge,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ut=class extends di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Hd=new lt,Gs=new fs,jo=new Wi,zd=new D,Ko=new D,Zo=new D,Jo=new D,Ih=new D,Qo=new D,kd=new D,el=new D,U=class extends Xt{constructor(e=new kt,t=new ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(a&&o){Qo.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let u=o[l],d=a[l];u!==0&&(Ih.fromBufferAttribute(d,e),r?Qo.addScaledVector(Ih,u):Qo.addScaledVector(Ih.sub(t),u))}t.add(Qo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(a),Gs.copy(e.ray).recast(e.near),!(jo.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(jo,zd)===null||Gs.origin.distanceToSquared(zd)>(e.far-e.near)**2))&&(Hd.copy(a).invert(),Gs.copy(e.ray).applyMatrix4(Hd),!(n.boundingBox!==null&&Gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gs)))}_computeIntersections(e,t,n){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,h=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){let m=h[g],p=r[m.materialIndex],S=Math.max(m.start,f.start),R=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,E=R;M<E;M+=3){let w=o.getX(M),b=o.getX(M+1),x=o.getX(M+2);s=tl(this,p,e,n,c,u,d,w,b,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let S=o.getX(m),R=o.getX(m+1),M=o.getX(m+2);s=tl(this,r,e,n,c,u,d,S,R,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){let m=h[g],p=r[m.materialIndex],S=Math.max(m.start,f.start),R=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,E=R;M<E;M+=3){let w=M,b=M+1,x=M+2;s=tl(this,p,e,n,c,u,d,w,b,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let S=m,R=m+1,M=m+2;s=tl(this,r,e,n,c,u,d,S,R,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function K0(i,e,t,n,s,a,r,o){let l;if(e.side===Pt?l=n.intersectTriangle(r,a,s,!0,o):l=n.intersectTriangle(s,a,r,e.side===bs,o),l===null)return null;el.copy(o),el.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(el);return c<t.near||c>t.far?null:{distance:c,point:el.clone(),object:i}}function tl(i,e,t,n,s,a,r,o,l,c){i.getVertexPosition(o,Ko),i.getVertexPosition(l,Zo),i.getVertexPosition(c,Jo);let u=K0(i,e,t,n,Ko,Zo,Jo,kd);if(u){let d=new D;Gi.getBarycoord(kd,Ko,Zo,Jo,d),s&&(u.uv=Gi.getInterpolatedAttribute(s,o,l,c,d,new ae)),a&&(u.uv1=Gi.getInterpolatedAttribute(a,o,l,c,d,new ae)),r&&(u.normal=Gi.getInterpolatedAttribute(r,o,l,c,d,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new D,materialIndex:0};Gi.getNormal(Ko,Zo,Jo,h.normal),u.face=h,u.barycoord=d}return u}var Or=class extends Mn{constructor(e=null,t=1,n=1,s,a,r,o,l,c=hn,u=hn,d,h){super(null,r,o,l,c,u,s,a,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qr=class extends fn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wa=new lt,Gd=new lt,nl=[],Vd=new Ai,Z0=new lt,Mr=new U,br=new Wi,An=class extends U{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Z0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wa),Vd.copy(e.boundingBox).applyMatrix4(wa),this.boundingBox.union(Vd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wa),br.copy(e.boundingSphere).applyMatrix4(wa),this.boundingSphere.union(br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,r=e*a+1;for(let o=0;o<n.length;o++)n[o]=s[r+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Mr.geometry=this.geometry,Mr.material=this.material,Mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),e.ray.intersectsSphere(br)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,wa),Gd.multiplyMatrices(n,wa),Mr.matrixWorld=Gd,Mr.raycast(e,nl);for(let r=0,o=nl.length;r<o;r++){let l=nl[r];l.instanceId=a,l.object=this,t.push(l)}nl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new qr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Or(new Float32Array(s*this.count),s,this.count,ec,Qn));let a=this.morphTexture.source.data.data,r=0;for(let c=0;c<n.length;c++)r+=n[c];let o=this.geometry.morphTargetsRelative?1:1-r,l=s*e;return a[l]=o,a.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vs=new Wi,J0=new ae(.5,.5),il=new D,Ha=class{constructor(e=new qn,t=new qn,n=new qn,s=new qn,a=new qn,r=new qn){this.planes=[e,t,n,s,a,r]}set(e,t,n,s,a,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ci,n=!1){let s=this.planes,a=e.elements,r=a[0],o=a[1],l=a[2],c=a[3],u=a[4],d=a[5],h=a[6],f=a[7],g=a[8],_=a[9],m=a[10],p=a[11],S=a[12],R=a[13],M=a[14],E=a[15];if(s[0].setComponents(c-r,f-u,p-g,E-S).normalize(),s[1].setComponents(c+r,f+u,p+g,E+S).normalize(),s[2].setComponents(c+o,f+d,p+_,E+R).normalize(),s[3].setComponents(c-o,f-d,p-_,E-R).normalize(),n)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,f-h,p-m,E-M).normalize();else if(s[4].setComponents(c-l,f-h,p-m,E-M).normalize(),t===ci)s[5].setComponents(c+l,f+h,p+m,E+M).normalize();else if(t===Na)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);let t=J0.distanceTo(e.center);return Vs.radius=.7071067811865476+t,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(il.x=s.normal.x>0?e.max.x:e.min.x,il.y=s.normal.y>0?e.max.y:e.min.y,il.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(il)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var za=class extends di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wd=new lt,zh=new fs,sl=new Wi,al=new D,Br=class extends Xt{constructor(e=new kt,t=new za){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sl.copy(n.boundingSphere),sl.applyMatrix4(s),sl.radius+=a,e.ray.intersectsSphere(sl)===!1)return;Wd.copy(s).invert(),zh.copy(e.ray).applyMatrix4(Wd);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=h,_=f;g<_;g++){let m=c.getX(g);al.fromBufferAttribute(d,m),Xd(al,m,l,s,e,t,this)}}else{let h=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=h,_=f;g<_;g++)al.fromBufferAttribute(d,g),Xd(al,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function Xd(i,e,t,n,s,a,r){let o=zh.distanceSqToPoint(i);if(o<t){let l=new D;zh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}var Hr=class extends Mn{constructor(e=[],t=Es,n,s,a,r,o,l,c,u){super(e,t,n,s,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Kt=class extends Mn{constructor(e,t,n,s,a,r,o,l,c){super(e,t,n,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ps=class extends Mn{constructor(e,t,n=xi,s,a,r,o=hn,l=hn,c,u=wi,d=1){if(u!==wi&&u!==Ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,a,r,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Tl=class extends ps{constructor(e,t=xi,n=Es,s,a,r=hn,o=hn,l,c=wi){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,a,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},zr=class extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ie=class i extends kt{constructor(e=1,t=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,s,r,2),g("x","z","y",1,-1,e,n,-t,s,r,3),g("x","y","z",1,-1,e,t,n,s,a,4),g("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(d,2));function g(_,m,p,S,R,M,E,w,b,x,y){let A=M/b,P=E/x,L=M/2,F=E/2,N=w/2,q=b+1,G=x+1,W=0,se=0,K=new D;for(let J=0;J<G;J++){let ee=J*P-F;for(let Ce=0;Ce<q;Ce++){let $=Ce*A-L;K[_]=$*S,K[m]=ee*R,K[p]=N,c.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[p]=w>0?1:-1,u.push(K.x,K.y,K.z),d.push(Ce/b),d.push(1-J/x),W+=1}}for(let J=0;J<x;J++)for(let ee=0;ee<b;ee++){let Ce=h+ee+q*J,$=h+ee+q*(J+1),pe=h+(ee+1)+q*(J+1),ve=h+(ee+1)+q*J;l.push(Ce,$,ve),l.push($,pe,ve),se+=6}o.addGroup(f,se,y),f+=se,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},fi=class i extends kt{constructor(e=1,t=1,n=4,s=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:a},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),a=Math.max(1,Math.floor(a));let r=[],o=[],l=[],c=[],u=t/2,d=Math.PI/2*e,h=t,f=2*d+h,g=n*2+a,_=s+1,m=new D,p=new D;for(let S=0;S<=g;S++){let R=0,M=0,E=0,w=0;if(S<=n){let y=S/n,A=y*Math.PI/2;M=-u-e*Math.cos(A),E=e*Math.sin(A),w=-e*Math.cos(A),R=y*d}else if(S<=n+a){let y=(S-n)/a;M=-u+y*t,E=e,w=0,R=d+y*h}else{let y=(S-n-a)/n,A=y*Math.PI/2;M=u+e*Math.sin(A),E=e*Math.cos(A),w=e*Math.sin(A),R=d+h+y*d}let b=Math.max(0,Math.min(1,R/f)),x=0;S===0?x=.5/s:S===g&&(x=-.5/s);for(let y=0;y<=s;y++){let A=y/s,P=A*Math.PI*2,L=Math.sin(P),F=Math.cos(P);p.x=-E*F,p.y=M,p.z=E*L,o.push(p.x,p.y,p.z),m.set(-E*F,w,E*L),m.normalize(),l.push(m.x,m.y,m.z),c.push(A+x,b)}if(S>0){let y=(S-1)*_;for(let A=0;A<s;A++){let P=y+A,L=y+A+1,F=S*_+A,N=S*_+A+1;r.push(P,L,F),r.push(L,N,F)}}}this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Lt=class i extends kt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let a=[],r=[],o=[],l=[],c=new D,u=new ae;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),r.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(r[h]/e+1)/2,u.y=(r[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(o,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Je=class i extends kt{constructor(e=1,t=1,n=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),a=Math.floor(a);let u=[],d=[],h=[],f=[],g=0,_=[],m=n/2,p=0;S(),r===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new ft(d,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(f,2));function S(){let M=new D,E=new D,w=0,b=(t-e)/n;for(let x=0;x<=a;x++){let y=[],A=x/a,P=A*(t-e)+e;for(let L=0;L<=s;L++){let F=L/s,N=F*l+o,q=Math.sin(N),G=Math.cos(N);E.x=P*q,E.y=-A*n+m,E.z=P*G,d.push(E.x,E.y,E.z),M.set(q,b,G).normalize(),h.push(M.x,M.y,M.z),f.push(F,1-A),y.push(g++)}_.push(y)}for(let x=0;x<s;x++)for(let y=0;y<a;y++){let A=_[y][x],P=_[y+1][x],L=_[y+1][x+1],F=_[y][x+1];(e>0||y!==0)&&(u.push(A,P,F),w+=3),(t>0||y!==a-1)&&(u.push(P,L,F),w+=3)}c.addGroup(p,w,0),p+=w}function R(M){let E=g,w=new ae,b=new D,x=0,y=M===!0?e:t,A=M===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*A,0),h.push(0,A,0),f.push(.5,.5),g++;let P=g;for(let L=0;L<=s;L++){let N=L/s*l+o,q=Math.cos(N),G=Math.sin(N);b.x=y*G,b.y=m*A,b.z=y*q,d.push(b.x,b.y,b.z),h.push(0,A,0),w.x=q*.5+.5,w.y=G*.5*A+.5,f.push(w.x,w.y),g++}for(let L=0;L<s;L++){let F=E+L,N=P+L;M===!0?u.push(N,N+1,F):u.push(N+1,N,F),x+=3}c.addGroup(p,x,M===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xi=class i extends Je{constructor(e=1,t=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,a=n.length,r;t?r=t:r=e*n[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(a-1);let u=n[s],h=n[s+1]-u,f=(r-u)/h;return(s+f)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);let r=this.getPoint(s),o=this.getPoint(a),l=t||(r.isVector2?new ae:new D);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],a=[],r=[],o=new D,l=new lt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new D)}a[0]=new D,r[0]=new D;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(it(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(o,g))}r[f].crossVectors(s[f],a[f])}if(t===!0){let f=Math.acos(it(a[0].dot(a[e]),-1,1));f/=e,s[0].dot(o.crossVectors(a[0],a[e]))>0&&(f=-f);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ka=class extends Hn{constructor(e=0,t=0,n=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ae){let n=t,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+e*a,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},wl=class extends ka{constructor(e,t,n,s,a,r){super(e,t,n,n,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}};function mu(){let i=0,e=0,t=0,n=0;function s(a,r,o,l){i=a,e=o,t=-3*a+3*r-2*o-l,n=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,u,d){let h=(r-a)/c-(o-a)/(c+u)+(o-r)/u,f=(o-r)/u-(l-r)/(u+d)+(l-o)/d;h*=u,f*=u,s(r,o,h,f)},calc:function(a){let r=a*a,o=r*a;return i+e*a+t*r+n*o}}}var $d=new D,Yd=new D,Lh=new mu,Dh=new mu,Nh=new mu,Al=class extends Hn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,a=s.length,r=(a-(this.closed?0:1))*e,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%a]:(Yd.subVectors(s[0],s[1]).add(s[0]),c=Yd);let d=s[o%a],h=s[(o+1)%a];if(this.closed||o+2<a?u=s[(o+2)%a]:($d.subVectors(s[a-1],s[a-2]).add(s[a-1]),u=$d),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Lh.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,_,m),Dh.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,_,m),Nh.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Lh.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Dh.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Nh.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Lh.calc(l),Dh.calc(l),Nh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function jd(i,e,t,n,s){let a=(n-e)*.5,r=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+a+r)*l+(-3*t+3*n-2*a-r)*o+a*i+t}function Q0(i,e){let t=1-i;return t*t*e}function em(i,e){return 2*(1-i)*i*e}function tm(i,e){return i*i*e}function wr(i,e,t,n){return Q0(i,e)+em(i,t)+tm(i,n)}function nm(i,e){let t=1-i;return t*t*t*e}function im(i,e){let t=1-i;return 3*t*t*i*e}function sm(i,e){return 3*(1-i)*i*i*e}function am(i,e){return i*i*i*e}function Ar(i,e,t,n,s){return nm(i,e)+im(i,t)+sm(i,n)+am(i,s)}var kr=class extends Hn{constructor(e=new ae,t=new ae,n=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ae){let n=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Ar(e,s.x,a.x,r.x,o.x),Ar(e,s.y,a.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Rl=class extends Hn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Ar(e,s.x,a.x,r.x,o.x),Ar(e,s.y,a.y,r.y,o.y),Ar(e,s.z,a.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gr=class extends Hn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cl=class extends Hn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vr=class extends Hn{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){let n=t,s=this.v0,a=this.v1,r=this.v2;return n.set(wr(e,s.x,a.x,r.x),wr(e,s.y,a.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pl=class extends Hn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,a=this.v1,r=this.v2;return n.set(wr(e,s.x,a.x,r.x),wr(e,s.y,a.y,r.y),wr(e,s.z,a.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wr=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let n=t,s=this.points,a=(s.length-1)*e,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],u=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return n.set(jd(o,l.x,c.x,u.x,d.x),jd(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},kh=Object.freeze({__proto__:null,ArcCurve:wl,CatmullRomCurve3:Al,CubicBezierCurve:kr,CubicBezierCurve3:Rl,EllipseCurve:ka,LineCurve:Gr,LineCurve3:Cl,QuadraticBezierCurve:Vr,QuadraticBezierCurve3:Pl,SplineCurve:Wr}),Il=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),a=0;for(;a<s.length;){if(s[a]>=n){let r=s[a]-n,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,a=this.curves;s<a.length;s++){let r=a[s],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new kh[s.type]().fromJSON(s))}return this}},Ys=class extends Il{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Gr(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let a=new Vr(this.currentPoint.clone(),new ae(e,t),new ae(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,a,r){let o=new kr(this.currentPoint.clone(),new ae(e,t),new ae(n,s),new ae(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Wr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,a,r){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,a,r),this}absarc(e,t,n,s,a,r){return this.absellipse(e,t,n,n,s,a,r),this}ellipse(e,t,n,s,a,r,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,a,r,o,l),this}absellipse(e,t,n,s,a,r,o,l){let c=new ka(e,t,n,s,a,r,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},In=class extends Ys{constructor(e){super(e),this.uuid=Ti(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ys().fromJSON(s))}return this}};function rm(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,a=jf(i,0,s,t,!0),r=[];if(!a||a.next===a.prev)return r;let o,l,c;if(n&&(a=um(i,e,a,t)),i.length>80*t){o=i[0],l=i[1];let u=o,d=l;for(let h=t;h<s;h+=t){let f=i[h],g=i[h+1];f<o&&(o=f),g<l&&(l=g),f>u&&(u=f),g>d&&(d=g)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return Xr(a,r,t,o,l,c,0),r}function jf(i,e,t,n,s){let a;if(s===bm(i,e,t,n)>0)for(let r=e;r<t;r+=n)a=Kd(r/n|0,i[r],i[r+1],a);else for(let r=t-n;r>=e;r-=n)a=Kd(r/n|0,i[r],i[r+1],a);return a&&Ga(a,a.next)&&(Yr(a),a=a.next),a}function js(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ga(t,t.next)||zt(t.prev,t,t.next)===0)){if(Yr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Xr(i,e,t,n,s,a,r){if(!i)return;!r&&a&&gm(i,n,s,a);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(a?lm(i,n,s,a):om(i)){e.push(l.i,i.i,c.i),Yr(i),i=c.next,o=c.next;continue}if(i=c,i===o){r?r===1?(i=cm(js(i),e),Xr(i,e,t,n,s,a,2)):r===2&&hm(i,e,t,n,s,a):Xr(js(i),e,t,n,s,a,1);break}}}function om(i){let e=i.prev,t=i,n=i.next;if(zt(e,t,n)>=0)return!1;let s=e.x,a=t.x,r=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,a,r),d=Math.min(o,l,c),h=Math.max(s,a,r),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Er(s,o,a,l,r,c,g.x,g.y)&&zt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function lm(i,e,t,n){let s=i.prev,a=i,r=i.next;if(zt(s,a,r)>=0)return!1;let o=s.x,l=a.x,c=r.x,u=s.y,d=a.y,h=r.y,f=Math.min(o,l,c),g=Math.min(u,d,h),_=Math.max(o,l,c),m=Math.max(u,d,h),p=Gh(f,g,e,t,n),S=Gh(_,m,e,t,n),R=i.prevZ,M=i.nextZ;for(;R&&R.z>=p&&M&&M.z<=S;){if(R.x>=f&&R.x<=_&&R.y>=g&&R.y<=m&&R!==s&&R!==r&&Er(o,u,l,d,c,h,R.x,R.y)&&zt(R.prev,R,R.next)>=0||(R=R.prevZ,M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==r&&Er(o,u,l,d,c,h,M.x,M.y)&&zt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;R&&R.z>=p;){if(R.x>=f&&R.x<=_&&R.y>=g&&R.y<=m&&R!==s&&R!==r&&Er(o,u,l,d,c,h,R.x,R.y)&&zt(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;M&&M.z<=S;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==r&&Er(o,u,l,d,c,h,M.x,M.y)&&zt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function cm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ga(n,s)&&Zf(n,t,t.next,s)&&$r(n,s)&&$r(s,n)&&(e.push(n.i,t.i,s.i),Yr(t),Yr(t.next),t=i=s),t=t.next}while(t!==i);return js(t)}function hm(i,e,t,n,s,a){let r=i;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&vm(r,o)){let l=Jf(r,o);r=js(r,r.next),l=js(l,l.next),Xr(r,e,t,n,s,a,0),Xr(l,e,t,n,s,a,0);return}o=o.next}r=r.next}while(r!==i)}function um(i,e,t,n){let s=[];for(let a=0,r=e.length;a<r;a++){let o=e[a]*n,l=a<r-1?e[a+1]*n:i.length,c=jf(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(_m(c))}s.sort(dm);for(let a=0;a<s.length;a++)t=fm(s[a],t);return t}function dm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function fm(i,e){let t=pm(i,e);if(!t)return e;let n=Jf(t,i);return js(n,n.next),js(t,t.next)}function pm(i,e){let t=e,n=i.x,s=i.y,a=-1/0,r;if(Ga(i,t))return t;do{if(Ga(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>a&&(a=d,r=t.x<t.next.x?t:t.next,d===n))return r}t=t.next}while(t!==e);if(!r)return null;let o=r,l=r.x,c=r.y,u=1/0;t=r;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Kf(s<c?n:a,s,l,c,s<c?a:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);$r(t,i)&&(d<u||d===u&&(t.x>r.x||t.x===r.x&&mm(r,t)))&&(r=t,u=d)}t=t.next}while(t!==o);return r}function mm(i,e){return zt(i.prev,i,e.prev)<0&&zt(e.next,i,i.next)<0}function gm(i,e,t,n){let s=i;do s.z===0&&(s.z=Gh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,xm(s)}function xm(i){let e,t=1;do{let n=i,s;i=null;let a=null;for(e=0;n;){e++;let r=n,o=0;for(let c=0;c<t&&(o++,r=r.nextZ,!!r);c++);let l=t;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,o--):(s=r,r=r.nextZ,l--),a?a.nextZ=s:i=s,s.prevZ=a,a=s;n=r}a.nextZ=null,t*=2}while(e>1);return i}function Gh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function _m(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Kf(i,e,t,n,s,a,r,o){return(s-r)*(e-o)>=(i-r)*(a-o)&&(i-r)*(n-o)>=(t-r)*(e-o)&&(t-r)*(a-o)>=(s-r)*(n-o)}function Er(i,e,t,n,s,a,r,o){return!(i===r&&e===o)&&Kf(i,e,t,n,s,a,r,o)}function vm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ym(i,e)&&($r(i,e)&&$r(e,i)&&Mm(i,e)&&(zt(i.prev,i,e.prev)||zt(i,e.prev,e))||Ga(i,e)&&zt(i.prev,i,i.next)>0&&zt(e.prev,e,e.next)>0)}function zt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ga(i,e){return i.x===e.x&&i.y===e.y}function Zf(i,e,t,n){let s=ol(zt(i,e,t)),a=ol(zt(i,e,n)),r=ol(zt(t,n,i)),o=ol(zt(t,n,e));return!!(s!==a&&r!==o||s===0&&rl(i,t,e)||a===0&&rl(i,n,e)||r===0&&rl(t,i,n)||o===0&&rl(t,e,n))}function rl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ol(i){return i>0?1:i<0?-1:0}function ym(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Zf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function $r(i,e){return zt(i.prev,i,i.next)<0?zt(i,e,i.next)>=0&&zt(i,i.prev,e)>=0:zt(i,e,i.prev)<0||zt(i,i.next,e)<0}function Mm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Jf(i,e){let t=Vh(i.i,i.x,i.y),n=Vh(e.i,e.x,e.y),s=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function Kd(i,e,t,n){let s=Vh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Yr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bm(i,e,t,n){let s=0;for(let a=e,r=t-n;a<t;a+=n)s+=(i[r]-i[a])*(i[a+1]+i[r+1]),r=a;return s}var Wh=class{static triangulate(e,t,n=2){return rm(e,t,n)}},us=class i{static area(e){let t=e.length,n=0;for(let s=t-1,a=0;a<t;s=a++)n+=e[s].x*e[a].y-e[a].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],a=[];Zd(e),Jd(n,e);let r=e.length;t.forEach(Zd);for(let l=0;l<t.length;l++)s.push(r),r+=t[l].length,Jd(n,t[l]);let o=Wh.triangulate(n,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function Zd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Jd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ln=class i extends kt{constructor(e=new In([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];r(c)}this.setAttribute("position",new ft(s,3)),this.setAttribute("uv",new ft(a,2)),this.computeVertexNormals();function r(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Em,R,M=!1,E,w,b,x;if(p){R=p.getSpacedPoints(u),M=!0,h=!1;let re=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(u,re),w=new D,b=new D,x=new D}h||(m=0,f=0,g=0,_=0);let y=o.extractPoints(c),A=y.shape,P=y.holes;if(!us.isClockWise(A)){A=A.reverse();for(let re=0,B=P.length;re<B;re++){let te=P[re];us.isClockWise(te)&&(P[re]=te.reverse())}}function F(re){let te=10000000000000001e-36,Q=re[0];for(let he=1;he<=re.length;he++){let Ne=he%re.length,ke=re[Ne],$e=ke.x-Q.x,me=ke.y-Q.y,I=$e*$e+me*me,Ue=Math.max(Math.abs(ke.x),Math.abs(ke.y),Math.abs(Q.x),Math.abs(Q.y)),Se=te*Ue*Ue;if(I<=Se){re.splice(Ne,1),he--;continue}Q=ke}}F(A),P.forEach(F);let N=P.length,q=A;for(let re=0;re<N;re++){let B=P[re];A=A.concat(B)}function G(re,B,te){return B||et("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(B,te)}let W=A.length;function se(re,B,te){let Q,he,Ne,ke=re.x-B.x,$e=re.y-B.y,me=te.x-re.x,I=te.y-re.y,Ue=ke*ke+$e*$e,Se=ke*I-$e*me;if(Math.abs(Se)>Number.EPSILON){let C=Math.sqrt(Ue),v=Math.sqrt(me*me+I*I),k=B.x-$e/C,X=B.y+ke/C,ne=te.x-I/v,xe=te.y+me/v,_e=((ne-k)*I-(xe-X)*me)/(ke*I-$e*me);Q=k+ke*_e-re.x,he=X+$e*_e-re.y;let ie=Q*Q+he*he;if(ie<=2)return new ae(Q,he);Ne=Math.sqrt(ie/2)}else{let C=!1;ke>Number.EPSILON?me>Number.EPSILON&&(C=!0):ke<-Number.EPSILON?me<-Number.EPSILON&&(C=!0):Math.sign($e)===Math.sign(I)&&(C=!0),C?(Q=-$e,he=ke,Ne=Math.sqrt(Ue)):(Q=ke,he=$e,Ne=Math.sqrt(Ue/2))}return new ae(Q/Ne,he/Ne)}let K=[];for(let re=0,B=q.length,te=B-1,Q=re+1;re<B;re++,te++,Q++)te===B&&(te=0),Q===B&&(Q=0),K[re]=se(q[re],q[te],q[Q]);let J=[],ee,Ce=K.concat();for(let re=0,B=N;re<B;re++){let te=P[re];ee=[];for(let Q=0,he=te.length,Ne=he-1,ke=Q+1;Q<he;Q++,Ne++,ke++)Ne===he&&(Ne=0),ke===he&&(ke=0),ee[Q]=se(te[Q],te[Ne],te[ke]);J.push(ee),Ce=Ce.concat(ee)}let $;if(m===0)$=us.triangulateShape(q,P);else{let re=[],B=[];for(let te=0;te<m;te++){let Q=te/m,he=f*Math.cos(Q*Math.PI/2),Ne=g*Math.sin(Q*Math.PI/2)+_;for(let ke=0,$e=q.length;ke<$e;ke++){let me=G(q[ke],K[ke],Ne);ue(me.x,me.y,-he),Q===0&&re.push(me)}for(let ke=0,$e=N;ke<$e;ke++){let me=P[ke];ee=J[ke];let I=[];for(let Ue=0,Se=me.length;Ue<Se;Ue++){let C=G(me[Ue],ee[Ue],Ne);ue(C.x,C.y,-he),Q===0&&I.push(C)}Q===0&&B.push(I)}}$=us.triangulateShape(re,B)}let pe=$.length,ve=g+_;for(let re=0;re<W;re++){let B=h?G(A[re],Ce[re],ve):A[re];M?(b.copy(E.normals[0]).multiplyScalar(B.x),w.copy(E.binormals[0]).multiplyScalar(B.y),x.copy(R[0]).add(b).add(w),ue(x.x,x.y,x.z)):ue(B.x,B.y,0)}for(let re=1;re<=u;re++)for(let B=0;B<W;B++){let te=h?G(A[B],Ce[B],ve):A[B];M?(b.copy(E.normals[re]).multiplyScalar(te.x),w.copy(E.binormals[re]).multiplyScalar(te.y),x.copy(R[re]).add(b).add(w),ue(x.x,x.y,x.z)):ue(te.x,te.y,d/u*re)}for(let re=m-1;re>=0;re--){let B=re/m,te=f*Math.cos(B*Math.PI/2),Q=g*Math.sin(B*Math.PI/2)+_;for(let he=0,Ne=q.length;he<Ne;he++){let ke=G(q[he],K[he],Q);ue(ke.x,ke.y,d+te)}for(let he=0,Ne=P.length;he<Ne;he++){let ke=P[he];ee=J[he];for(let $e=0,me=ke.length;$e<me;$e++){let I=G(ke[$e],ee[$e],Q);M?ue(I.x,I.y+R[u-1].y,R[u-1].x+te):ue(I.x,I.y,d+te)}}}de(),O();function de(){let re=s.length/3;if(h){let B=0,te=W*B;for(let Q=0;Q<pe;Q++){let he=$[Q];Le(he[2]+te,he[1]+te,he[0]+te)}B=u+m*2,te=W*B;for(let Q=0;Q<pe;Q++){let he=$[Q];Le(he[0]+te,he[1]+te,he[2]+te)}}else{for(let B=0;B<pe;B++){let te=$[B];Le(te[2],te[1],te[0])}for(let B=0;B<pe;B++){let te=$[B];Le(te[0]+W*u,te[1]+W*u,te[2]+W*u)}}n.addGroup(re,s.length/3-re,0)}function O(){let re=s.length/3,B=0;V(q,B),B+=q.length;for(let te=0,Q=P.length;te<Q;te++){let he=P[te];V(he,B),B+=he.length}n.addGroup(re,s.length/3-re,1)}function V(re,B){let te=re.length;for(;--te>=0;){let Q=te,he=te-1;he<0&&(he=re.length-1);for(let Ne=0,ke=u+m*2;Ne<ke;Ne++){let $e=W*Ne,me=W*(Ne+1),I=B+Q+$e,Ue=B+he+$e,Se=B+he+me,C=B+Q+me;ge(I,Ue,Se,C)}}}function ue(re,B,te){l.push(re),l.push(B),l.push(te)}function Le(re,B,te){Xe(re),Xe(B),Xe(te);let Q=s.length/3,he=S.generateTopUV(n,s,Q-3,Q-2,Q-1);rt(he[0]),rt(he[1]),rt(he[2])}function ge(re,B,te,Q){Xe(re),Xe(B),Xe(Q),Xe(B),Xe(te),Xe(Q);let he=s.length/3,Ne=S.generateSideWallUV(n,s,he-6,he-3,he-2,he-1);rt(Ne[0]),rt(Ne[1]),rt(Ne[3]),rt(Ne[1]),rt(Ne[2]),rt(Ne[3])}function Xe(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function rt(re){a.push(re.x),a.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Sm(t,n,e)}static fromJSON(e,t){let n=[];for(let a=0,r=e.shapes.length;a<r;a++){let o=t[e.shapes[a]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new kh[s.type]().fromJSON(s)),new i(n,e.options)}},Em={generateTopUV:function(i,e,t,n,s){let a=e[t*3],r=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new ae(a,r),new ae(o,l),new ae(c,u)]},generateSideWallUV:function(i,e,t,n,s,a){let r=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[a*3],m=e[a*3+1],p=e[a*3+2];return Math.abs(o-u)<Math.abs(r-c)?[new ae(r,1-l),new ae(c,1-d),new ae(h,1-g),new ae(_,1-p)]:[new ae(o,1-l),new ae(u,1-d),new ae(f,1-g),new ae(m,1-p)]}};function Sm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let a=i[n];t.shapes.push(a.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ct=class i extends kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let a=e/2,r=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let S=p*h-r;for(let R=0;R<c;R++){let M=R*d-a;g.push(M,-S,0),_.push(0,0,1),m.push(R/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let R=S+c*p,M=S+c*(p+1),E=S+1+c*(p+1),w=S+1+c*p;f.push(R,M,w),f.push(M,E,w)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},pi=class i extends kt{constructor(e=.5,t=1,n=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],d=e,h=(t-e)/s,f=new D,g=new ae;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let p=a+m/n*r;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let _=0;_<s;_++){let m=_*(n+1);for(let p=0;p<n;p++){let S=p+m,R=S,M=S+n+1,E=S+n+2,w=S+1;o.push(R,M,w),o.push(M,E,w)}}this.setIndex(o),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Et=class i extends kt{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(r+o,Math.PI),c=0,u=[],d=new D,h=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let S=[],R=p/n,M=r+R*o,E=e*Math.cos(M),w=Math.sqrt(e*e-E*E),b=0;p===0&&r===0?b=.5/t:p===n&&l===Math.PI&&(b=-.5/t);for(let x=0;x<=t;x++){let y=x/t,A=s+y*a;d.x=-w*Math.cos(A),d.y=E,d.z=w*Math.sin(A),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(y+b,1-R),S.push(c++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){let R=u[p][S+1],M=u[p][S],E=u[p+1][S],w=u[p+1][S+1];(p!==0||r>0)&&f.push(R,M,w),(p!==n-1||l<Math.PI)&&f.push(M,E,w)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var vt=class i extends kt{constructor(e=1,t=.4,n=12,s=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:a,thetaStart:r,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new D,f=new D,g=new D;for(let _=0;_<=n;_++){let m=r+_/n*o;for(let p=0;p<=s;p++){let S=p/s*a;f.x=(e+t*Math.cos(m))*Math.cos(S),f.y=(e+t*Math.cos(m))*Math.sin(S),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){let p=(s+1)*_+m-1,S=(s+1)*(_-1)+m-1,R=(s+1)*(_-1)+m,M=(s+1)*_+m;l.push(p,S,M),l.push(S,R,M)}this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function na(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Qd(s))s.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Qd(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();e[t][n]=a}else e[t][n]=s.slice();else e[t][n]=s}}return e}function bn(i){let e={};for(let t=0;t<i.length;t++){let n=na(i[t]);for(let s in n)e[s]=n[s]}return e}function Qd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Tm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function gu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var Ki={clone:na,merge:bn},wm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gt=class extends di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wm,this.fragmentShader=Am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=Tm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new ae().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new qt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new lt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Va=class extends Gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},yt=class extends di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zn=class extends yt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var jr=class extends di{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=$l,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ll=class extends di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Dl=class extends di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Aa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Uh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ms=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],a=t[n-1];n:{e:{let r;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=s,s=t[++n],e<s)break e}r=t.length;break t}if(!(e>=a)){let o=t[1];e<o&&(n=2,a=o);for(let l=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=a,a=t[--n-1],e>=a)break e}r=n,n=0;break t}break n}for(;n<r;){let o=n+r>>>1;e<t[o]?r=o:n=o+1}if(s=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,s)}return this.interpolate_(n,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s;for(let r=0;r!==s;++r)t[r]=n[a+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Nl=class extends ms{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qh,endingEnd:qh}}intervalChanged_(e,t,n){let s=this.parameterPositions,a=e-2,r=e+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Bh:a=e,o=2*t-n;break;case Hh:a=s.length-2,o=t+s[a]-s[a+1];break;default:a=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bh:r=e,l=2*n-t;break;case Hh:r=1,l=n+s[1]-s[0];break;default:r=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=a*u,this._offsetNext=r*u}interpolate_(e,t,n,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-h*m+2*h*_-h*g,S=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,R=(-1-f)*m+(1.5+f)*_+.5*g,M=f*m-f*_;for(let E=0;E!==o;++E)a[E]=p*r[u+E]+S*r[c+E]+R*r[l+E]+M*r[d+E];return a}},Ul=class extends ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)a[h]=r[c+h]*d+r[l+h]*u;return a}},Fl=class extends ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ol=class extends ms{interpolate_(e,t,n,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-t)/(s-t),_=1-g;for(let m=0;m!==o;++m)a[m]=r[c+m]*_+r[l+m]*g;return a}let h=o*2,f=e-1;for(let g=0;g!==o;++g){let _=r[c+g],m=r[l+g],p=f*h+g*2,S=d[p],R=d[p+1],M=e*h+g*2,E=u[M],w=u[M+1],b=Cm(n,t,S,E,s);a[g]=Qf(b,_,R,w,m)}return a}};function Qf(i,e,t,n,s){let a=1-i;return a*a*a*e+3*a*a*i*t+3*a*i*i*n+i*i*i*s}function Rm(i,e,t,n,s){let a=1-i;return 3*a*a*(t-e)+6*a*i*(n-t)+3*i*i*(s-n)}function Cm(i,e,t,n,s){let a=(i-e)/(s-e);for(let r=0;r<8;r++){let o=Qf(a,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Rm(a,e,t,n,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var kn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Aa(t,this.TimeBufferType),this.values=Aa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Aa(e.times,Array),values:Aa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Uh(e.settings)&&(n.settings={inTangents:Aa(e.settings.inTangents,Array),outTangents:Aa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ol(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Rr:t=this.InterpolantFactoryMethodDiscrete;break;case yl:t=this.InterpolantFactoryMethodLinear;break;case hl:t=this.InterpolantFactoryMethodSmooth;break;case Oh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rr;case this.InterpolantFactoryMethodLinear:return yl;case this.InterpolantFactoryMethodSmooth:return hl;case this.InterpolantFactoryMethodBezier:return Oh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Uh(this.settings)&&(ef(this.settings.inTangents,e),ef(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,a=0,r=s-1;for(;a!==s&&n[a]<e;)++a;for(;r!==-1&&n[r]>t;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=n.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,a=n.length;a===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==a;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){et("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){et("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(s!==void 0&&x0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){et("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===hl,a=e.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[h+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];let d=o*n,h=r*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++r}}if(a>0){e[r]=e[a];for(let o=a*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Uh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ef(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=yl;var gs=class extends kn{constructor(e,t,n){super(e,t,n)}};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Rr;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var ql=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};ql.prototype.ValueTypeName="color";var Bl=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};Bl.prototype.ValueTypeName="number";var Hl=class extends ms{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)en.slerpFlat(a,0,r,c-o,r,c,l);return a}},Kr=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Hl(this.times,this.values,this.getValueSize(),e)}};Kr.prototype.ValueTypeName="quaternion";Kr.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends kn{constructor(e,t,n){super(e,t,n)}};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Rr;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};zl.prototype.ValueTypeName="vector";var La={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(tf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!tf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function tf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var kl=class{constructor(e,t,n){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,a===!1&&s.onStart!==void 0&&s.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ep=new kl,$i=class{constructor(e){this.manager=e!==void 0?e:ep,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};$i.DEFAULT_MATERIAL_NAME="__DEFAULT";var ki={},Xh=class extends Error{constructor(e,t){super(e),this.response=t}},Zr=class extends $i{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=La.get(`file:${e}`);if(a!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0);return}if(ki[e]!==void 0){ki[e].push({onLoad:t,onProgress:n,onError:s});return}ki[e]=[],ki[e].push({onLoad:t,onProgress:n,onError:s});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=ki[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0,_=0,m=new ReadableStream({start(p){S();function S(){d.read().then(({done:R,value:M})=>{if(R)p.close();else{_+=M.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let w=0,b=u.length;w<b;w++){let x=u[w];x.onProgress&&x.onProgress(E)}p.enqueue(M),S()}},R=>{p.error(R)})}}});return new Response(m)}else throw new Xh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{La.add(`file:${e}`,c);let u=ki[e];delete ki[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=ki[e];if(u===void 0)throw this.manager.itemError(e),c;delete ki[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ra=new WeakMap,Gl=class extends $i{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,r=La.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0);else{let d=Ra.get(r);d===void 0&&(d=[],Ra.set(r,d)),d.push({onLoad:t,onError:s})}return r}let o=Ua("img");function l(){u(),t&&t(this);let d=Ra.get(this)||[];for(let h=0;h<d.length;h++){let f=d[h];f.onLoad&&f.onLoad(this)}Ra.delete(this),a.manager.itemEnd(e)}function c(d){u(),s&&s(d),La.remove(`image:${e}`);let h=Ra.get(this)||[];for(let f=0;f<h.length;f++){let g=h[f];g.onError&&g.onError(d)}Ra.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),La.add(`image:${e}`,o),a.manager.itemStart(e),o.src=e,o}};var Ks=class extends $i{constructor(e){super(e)}load(e,t,n,s){let a=new Mn,r=new Gl(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}},_s=class extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},mi=class extends _s{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Fh=new lt,nf=new D,sf=new D,Wa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ha,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;nf.setFromMatrixPosition(e.matrixWorld),t.position.copy(nf),sf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Fh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Fh,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;e.coordinateSystem===Na||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Fh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ll=new D,cl=new en,Ei=new D,Jr=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ll,cl,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ll,cl,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ll,cl,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ll,cl,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hs=new D,af=new ae,rf=new ae,Wt=class extends Jr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hs.x,hs.y).multiplyScalar(-e/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hs.x,hs.y).multiplyScalar(-e/hs.z)}getViewSize(e,t){return this.getViewBounds(e,af,rf),t.subVectors(rf,af)}setViewOffset(e,t,n,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,t-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},$h=class extends Wa{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Xs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(n!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Zs=class extends _s{constructor(e,t,n=0,s=Math.PI/3,a=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=n,this.angle=s,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new $h}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Yh=class extends Wa{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0}},Rn=class extends _s{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},vs=class extends Jr{constructor(e=-1,t=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=n-e,r=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},jh=class extends Wa{constructor(){super(new vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Js=class extends _s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new jh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Qr=class extends _s{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ca=-90,Pa=1,Vl=class extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Wt(Ca,Pa,e,t);s.layers=this.layers,this.add(s);let a=new Wt(Ca,Pa,e,t);a.layers=this.layers,this.add(a);let r=new Wt(Ca,Pa,e,t);r.layers=this.layers,this.add(r);let o=new Wt(Ca,Pa,e,t);o.layers=this.layers,this.add(o);let l=new Wt(Ca,Pa,e,t);l.layers=this.layers,this.add(l);let c=new Wt(Ca,Pa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,a,r,o,l]=t;for(let c of t)this.remove(c);if(e===ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Na)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Wl=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},eo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Pm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Pm(){this._document.hidden===!1&&this.reset()}var xu="\\[\\]\\.:\\/",Im=new RegExp("["+xu+"]","g"),_u="[^"+xu+"]",Lm="[^"+xu.replace("\\.","")+"]",Dm=/((?:WC+[\/:])*)/.source.replace("WC",_u),Nm=/(WCOD+)?/.source.replace("WCOD",Lm),Um=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_u),Fm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_u),Om=new RegExp("^"+Dm+Nm+Um+Fm+"$"),qm=["material","materials","bones","map"],Kh=class{constructor(e,t,n){let s=n||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=n.length;s!==a;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Im,"")}static parseTrackName(e){let t=Om.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=n.nodeName.substring(s+1);qm.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,a=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let r=e[s];if(r===void 0){let c=t.nodeName;et("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=Kh;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var av=new Float32Array(1);var of=new lt,to=class{constructor(e,t,n=0,s=1/0){this.ray=new fs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new qa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return of.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(of),this}intersectObject(e,t=!0,n=[]){return Zh(e,this,n,t),n.sort(lf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,a=e.length;s<a;s++)Zh(e[s],this,n,t);return n.sort(lf),n}};function lf(i,e){return i.distance-e.distance}function Zh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let a=i.children;for(let r=0,o=a.length;r<o;r++)Zh(a[r],e,t,!0)}}var no=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ze("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Xa=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=it(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(it(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Jh=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=s,this}},cf=new ae,Xl=class{constructor(e=new ae(1/0,1/0),t=new ae(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=cf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var io=class{constructor(){this.type="ShapePath",this.color=new Fe,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new Ys,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,a,r){return this.currentPath.bezierCurveTo(e,t,n,s,a,r),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let u=!1,d=c.length;for(let h=0,f=d-1;h<d;f=h++){let g=c[h],_=c[f];g.y>l.y!=_.y>l.y&&l.x<(_.x-g.x)*(l.y-g.y)/(_.y-g.y)+g.x&&(u=!u)}return u}function t(l,c){let u=c.getCenter(new ae);if(e(u,l))return u;let d=u.y,h=[],f=l.length;for(let g=0;g<f;g++){let _=l[g],m=l[(g+1)%f];if(_.y>d!=m.y>d){let p=_.x+(d-_.y)*(m.x-_.x)/(m.y-_.y);h.push(p)}}return h.length>1&&(h.sort((g,_)=>g-_),u.x=(h[0]+h[1])/2),u}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Ze('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let s=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),a=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let u=us.area(c);if(u===0)continue;let d=new Xl;for(let h=0;h<c.length;h++)d.expandByPoint(c[h]);a.push({subPath:l,points:c,boundingBox:d,interiorPoint:t(c,d),absArea:Math.abs(u),winding:u<0?-1:1,container:null,exclude:!1,role:null})}a.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<a.length;l++){let c=a[l],u=0;for(let d=l-1;d>=0;d--){let h=a[d];if(h.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,h.points)){c.container=h.exclude?h.container:h,u=h.winding,c.winding+=u;break}}s(c.winding)===s(u)&&(c.exclude=!0)}for(let l of a)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let r=[],o=new Map;for(let l of a){if(l.exclude||l.role!=="outer")continue;let c=new In;c.curves=l.subPath.curves,r.push(c),o.set(l,c)}for(let l of a){if(l.exclude||l.role!=="hole")continue;let c=o.get(l.container);if(!c)continue;let u=new Ys;u.curves=l.subPath.curves,c.holes.push(u)}return r}},so=class extends hi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function vu(i,e,t,n){let s=Bm(n);switch(t){case cu:return i*e;case ec:return i*e/s.components*s.byteLength;case tc:return i*e/s.components*s.byteLength;case ws:return i*e*2/s.components*s.byteLength;case nc:return i*e*2/s.components*s.byteLength;case hu:return i*e*3/s.components*s.byteLength;case ei:return i*e*4/s.components*s.byteLength;case ic:return i*e*4/s.components*s.byteLength;case mo:case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xo:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ac:case oc:return Math.max(i,16)*Math.max(e,8)/4;case sc:case rc:return Math.max(i,8)*Math.max(e,8)/2;case lc:case cc:case uc:case dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hc:case vo:case fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _c:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case vc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case yc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Rc:case Cc:case Pc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ic:case Lc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yo:case Dc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bm(i){switch(i){case Dn:case au:return{byteLength:1,components:1};case ja:case ru:case mn:return{byteLength:2,components:1};case Jl:case Ql:return{byteLength:2,components:4};case xi:case Zl:case Qn:return{byteLength:4,components:1};case ou:case lu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function bp(){let i=null,e=!1,t=null,n=null;function s(a,r){n=i.requestAnimationFrame(s),t(a,r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function zm(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ym=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Km=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,t1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,n1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,l1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,c1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,h1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,u1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,d1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,f1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,p1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_1="gl_FragColor = linearToOutputTexel( gl_FragColor );",v1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,M1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,b1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,E1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,T1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,P1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,N1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,U1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,H1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,z1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,G1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,W1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,j1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,J1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ng=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ig=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ag=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,og=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ug=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ag=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ig=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ug=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Og=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,i2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,o2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,c2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,h2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,f2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,x2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:km,alphahash_pars_fragment:Gm,alphamap_fragment:Vm,alphamap_pars_fragment:Wm,alphatest_fragment:Xm,alphatest_pars_fragment:$m,aomap_fragment:Ym,aomap_pars_fragment:jm,batching_pars_vertex:Km,batching_vertex:Zm,begin_vertex:Jm,beginnormal_vertex:Qm,bsdfs:e1,iridescence_fragment:t1,bumpmap_pars_fragment:n1,clipping_planes_fragment:i1,clipping_planes_pars_fragment:s1,clipping_planes_pars_vertex:a1,clipping_planes_vertex:r1,color_fragment:o1,color_pars_fragment:l1,color_pars_vertex:c1,color_vertex:h1,common:u1,cube_uv_reflection_fragment:d1,defaultnormal_vertex:f1,displacementmap_pars_vertex:p1,displacementmap_vertex:m1,emissivemap_fragment:g1,emissivemap_pars_fragment:x1,colorspace_fragment:_1,colorspace_pars_fragment:v1,envmap_fragment:y1,envmap_common_pars_fragment:M1,envmap_pars_fragment:b1,envmap_pars_vertex:E1,envmap_physical_pars_fragment:N1,envmap_vertex:S1,fog_vertex:T1,fog_pars_vertex:w1,fog_fragment:A1,fog_pars_fragment:R1,gradientmap_pars_fragment:C1,lightmap_pars_fragment:P1,lights_lambert_fragment:I1,lights_lambert_pars_fragment:L1,lights_pars_begin:D1,lights_toon_fragment:U1,lights_toon_pars_fragment:F1,lights_phong_fragment:O1,lights_phong_pars_fragment:q1,lights_physical_fragment:B1,lights_physical_pars_fragment:H1,lights_fragment_begin:z1,lights_fragment_maps:k1,lights_fragment_end:G1,lightprobes_pars_fragment:V1,logdepthbuf_fragment:W1,logdepthbuf_pars_fragment:X1,logdepthbuf_pars_vertex:$1,logdepthbuf_vertex:Y1,map_fragment:j1,map_pars_fragment:K1,map_particle_fragment:Z1,map_particle_pars_fragment:J1,metalnessmap_fragment:Q1,metalnessmap_pars_fragment:eg,morphinstance_vertex:tg,morphcolor_vertex:ng,morphnormal_vertex:ig,morphtarget_pars_vertex:sg,morphtarget_vertex:ag,normal_fragment_begin:rg,normal_fragment_maps:og,normal_pars_fragment:lg,normal_pars_vertex:cg,normal_vertex:hg,normalmap_pars_fragment:ug,clearcoat_normal_fragment_begin:dg,clearcoat_normal_fragment_maps:fg,clearcoat_pars_fragment:pg,iridescence_pars_fragment:mg,opaque_fragment:gg,packing:xg,premultiplied_alpha_fragment:_g,project_vertex:vg,dithering_fragment:yg,dithering_pars_fragment:Mg,roughnessmap_fragment:bg,roughnessmap_pars_fragment:Eg,shadowmap_pars_fragment:Sg,shadowmap_pars_vertex:Tg,shadowmap_vertex:wg,shadowmask_pars_fragment:Ag,skinbase_vertex:Rg,skinning_pars_vertex:Cg,skinning_vertex:Pg,skinnormal_vertex:Ig,specularmap_fragment:Lg,specularmap_pars_fragment:Dg,tonemapping_fragment:Ng,tonemapping_pars_fragment:Ug,transmission_fragment:Fg,transmission_pars_fragment:Og,uv_pars_fragment:qg,uv_pars_vertex:Bg,uv_vertex:Hg,worldpos_vertex:zg,background_vert:kg,background_frag:Gg,backgroundCube_vert:Vg,backgroundCube_frag:Wg,cube_vert:Xg,cube_frag:$g,depth_vert:Yg,depth_frag:jg,distance_vert:Kg,distance_frag:Zg,equirect_vert:Jg,equirect_frag:Qg,linedashed_vert:e2,linedashed_frag:t2,meshbasic_vert:n2,meshbasic_frag:i2,meshlambert_vert:s2,meshlambert_frag:a2,meshmatcap_vert:r2,meshmatcap_frag:o2,meshnormal_vert:l2,meshnormal_frag:c2,meshphong_vert:h2,meshphong_frag:u2,meshphysical_vert:d2,meshphysical_frag:f2,meshtoon_vert:p2,meshtoon_frag:m2,points_vert:g2,points_frag:x2,shadow_vert:_2,shadow_frag:v2,sprite_vert:y2,sprite_frag:M2},we={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Ci={basic:{uniforms:bn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:bn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:bn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:bn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:bn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Fe(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:bn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:bn([we.points,we.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:bn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:bn([we.common,we.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:bn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:bn([we.sprite,we.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:bn([we.common,we.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:bn([we.lights,we.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Ci.physical={uniforms:bn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var Fc={r:0,b:0,g:0},b2=new lt,Ep=new tt;Ep.set(-1,0,0,0,1,0,0,0,1);function E2(i,e,t,n,s,a){let r=new Fe(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(S){let R=S.isScene===!0?S.background:null;if(R&&R.isTexture){let M=S.backgroundBlurriness>0;R=e.get(R,M)}return R}function g(S){let R=!1,M=f(S);M===null?m(r,o):M&&M.isColor&&(m(M,1),R=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,R){let M=f(R);M&&(M.isCubeTexture||M.mapping===fo)?(c===void 0&&(c=new U(new Ie(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:na(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(b2.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ep),c.material.toneMapped=ot.getTransfer(M.colorSpace)!==_t,(u!==M||d!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new U(new Ct(2,2),new Gt({name:"BackgroundMaterial",uniforms:na(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=ot.getTransfer(M.colorSpace)!==_t,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,R){S.getRGB(Fc,gu(i)),t.buffers.color.setClear(Fc.r,Fc.g,Fc.b,R,a)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(S,R=1){r.set(S),o=R,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(r,o)},render:g,addToRenderList:_,dispose:p}}function S2(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),a=s,r=!1;function o(P,L,F,N,q){let G=!1,W=d(P,N,F,L);a!==W&&(a=W,c(a.object)),G=f(P,N,F,q),G&&g(P,N,F,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(G||r)&&(r=!1,M(P,L,F,N),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function d(P,L,F,N){let q=N.wireframe===!0,G=n[L.id];G===void 0&&(G={},n[L.id]=G);let W=P.isInstancedMesh===!0?P.id:0,se=G[W];se===void 0&&(se={},G[W]=se);let K=se[F.id];K===void 0&&(K={},se[F.id]=K);let J=K[q];return J===void 0&&(J=h(l()),K[q]=J),J}function h(P){let L=[],F=[],N=[];for(let q=0;q<t;q++)L[q]=0,F[q]=0,N[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:N,object:P,attributes:{},index:null}}function f(P,L,F,N){let q=a.attributes,G=L.attributes,W=0,se=F.getAttributes();for(let K in se)if(se[K].location>=0){let ee=q[K],Ce=G[K];if(Ce===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(Ce=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(Ce=P.instanceColor)),ee===void 0||ee.attribute!==Ce||Ce&&ee.data!==Ce.data)return!0;W++}return a.attributesNum!==W||a.index!==N}function g(P,L,F,N){let q={},G=L.attributes,W=0,se=F.getAttributes();for(let K in se)if(se[K].location>=0){let ee=G[K];ee===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));let Ce={};Ce.attribute=ee,ee&&ee.data&&(Ce.data=ee.data),q[K]=Ce,W++}a.attributes=q,a.attributesNum=W,a.index=N}function _(){let P=a.newAttributes;for(let L=0,F=P.length;L<F;L++)P[L]=0}function m(P){p(P,0)}function p(P,L){let F=a.newAttributes,N=a.enabledAttributes,q=a.attributeDivisors;F[P]=1,N[P]===0&&(i.enableVertexAttribArray(P),N[P]=1),q[P]!==L&&(i.vertexAttribDivisor(P,L),q[P]=L)}function S(){let P=a.newAttributes,L=a.enabledAttributes;for(let F=0,N=L.length;F<N;F++)L[F]!==P[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function R(P,L,F,N,q,G,W){W===!0?i.vertexAttribIPointer(P,L,F,q,G):i.vertexAttribPointer(P,L,F,N,q,G)}function M(P,L,F,N){_();let q=N.attributes,G=F.getAttributes(),W=L.defaultAttributeValues;for(let se in G){let K=G[se];if(K.location>=0){let J=q[se];if(J===void 0&&(se==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),se==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){let ee=J.normalized,Ce=J.itemSize,$=e.get(J);if($===void 0)continue;let pe=$.buffer,ve=$.type,de=$.bytesPerElement,O=ve===i.INT||ve===i.UNSIGNED_INT||J.gpuType===Zl;if(J.isInterleavedBufferAttribute){let V=J.data,ue=V.stride,Le=J.offset;if(V.isInstancedInterleavedBuffer){for(let ge=0;ge<K.locationSize;ge++)p(K.location+ge,V.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ge=0;ge<K.locationSize;ge++)m(K.location+ge);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let ge=0;ge<K.locationSize;ge++)R(K.location+ge,Ce/K.locationSize,ve,ee,ue*de,(Le+Ce/K.locationSize*ge)*de,O)}else{if(J.isInstancedBufferAttribute){for(let V=0;V<K.locationSize;V++)p(K.location+V,J.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let V=0;V<K.locationSize;V++)m(K.location+V);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let V=0;V<K.locationSize;V++)R(K.location+V,Ce/K.locationSize,ve,ee,Ce*de,Ce/K.locationSize*V*de,O)}}else if(W!==void 0){let ee=W[se];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(K.location,ee);break;case 3:i.vertexAttrib3fv(K.location,ee);break;case 4:i.vertexAttrib4fv(K.location,ee);break;default:i.vertexAttrib1fv(K.location,ee)}}}}S()}function E(){y();for(let P in n){let L=n[P];for(let F in L){let N=L[F];for(let q in N){let G=N[q];for(let W in G)u(G[W].object),delete G[W];delete N[q]}}delete n[P]}}function w(P){if(n[P.id]===void 0)return;let L=n[P.id];for(let F in L){let N=L[F];for(let q in N){let G=N[q];for(let W in G)u(G[W].object),delete G[W];delete N[q]}}delete n[P.id]}function b(P){for(let L in n){let F=n[L];for(let N in F){let q=F[N];if(q[P.id]===void 0)continue;let G=q[P.id];for(let W in G)u(G[W].object),delete G[W];delete q[P.id]}}}function x(P){for(let L in n){let F=n[L],N=P.isInstancedMesh===!0?P.id:0,q=F[N];if(q!==void 0){for(let G in q){let W=q[G];for(let se in W)u(W[se].object),delete W[se];delete q[G]}delete F[N],Object.keys(F).length===0&&delete n[L]}}}function y(){A(),r=!0,a!==s&&(a=s,c(a.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:y,resetDefaultState:A,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function T2(i,e,t){let n;function s(l){n=l}function a(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function r(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function w2(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(b){return!(b!==ei&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){let x=b===mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Dn&&b!==Qn&&!x&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:R,maxFragmentUniforms:M,maxSamples:E,samples:w}}function A2(i){let e=this,t=null,n=0,s=!1,a=!1,r=new qn,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||a&&!m)a?u(null):c();else{let S=a?0:n,R=S*4,M=p.clippingState||null;l.value=M,M=u(g,h,R,f);for(let E=0;E!==R;++E)M[E]=t[E];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,M=f;R!==_;++R,M+=4)r.copy(d[R]).applyMatrix4(S,o),r.normal.toArray(m,M),m[M+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Ja=4,R2=6,C2=20,P2=256,bo=new vs,tp=new Fe,yu=null,Mu=0,bu=0,Eu=!1,I2=new D,ia=new D,er=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,a={}){let{size:r=256,position:o=I2}=a;yu=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yu,Mu,bu),this._renderer.xr.enabled=Eu,e.scissorTest=!1,Za(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yu=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:mn,format:ei,colorSpace:Cr,depthBuffer:!1},s=np(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=np(e,t,n);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=L2(a)),this._blurMaterial=N2(a,e,t),this._ggxMaterial=D2(a,e,t)}return s}_compileMaterial(e){let t=new U(new kt,e);this._renderer.compile(t,bo)}_sceneToCubeUV(e,t,n,s,a){let l=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(tp),d.toneMapping=gi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new U(new Ie,new ut({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(tp),p=!0);for(let R=0;R<6;R++){let M=R%3;M===0?(l.up.set(0,c[R],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+u[R],a.y,a.z)):M===1?(l.up.set(0,0,c[R]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+u[R],a.z)):(l.up.set(0,c[R],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+u[R]));let E=this._cubeSize;Za(s,M*E,R>2?E:0,E,E),d.setRenderTarget(s),p&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Es||e.mapping===ta;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ip());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=e;let l=this._cubeSize;Za(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,bo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;let l=r.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Ja?n-g+Ja:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Za(a,m,p,3*_,2*_),s.setRenderTarget(a),s.render(o,bo),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=g-n,Za(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(o,bo)}_blur(e,t,n,s){let a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,n,r),this._blurPass(a,e,n,n,r)}_blurPass(e,t,n,s,a){let r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-Ja?s-this._lodMax+Ja:0),h=4*(this._cubeSize-u);Za(t,d,h,3*u,2*u),r.setRenderTarget(t),r.render(l,bo)}};function L2(i){let e=[],t=[],n=i,s=i-Ja+1+R2;for(let a=0;a<s;a++){let r=Math.pow(2,n);e.push(r);let o=1/(r-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,g=new Float32Array(f*h*d),_=new Float32Array(f*h*d);for(let p=0;p<d;p++){let S=p%3*2/3-1,R=p>2?0:-1,M=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];g.set(M,f*h*p);for(let E=0;E<h;E++){let w=u[E*2]*2-1,b=u[E*2+1]*2-1;p===0?ia.set(1,b,w):p===1?ia.set(-w,1,-b):p===2?ia.set(-w,b,1):p===3?ia.set(-1,b,-w):p===4?ia.set(-w,-1,b):ia.set(w,b,-1),ia.toArray(_,(p*h+E)*f)}}let m=new kt;m.setAttribute("position",new fn(g,f)),m.setAttribute("outputDirection",new fn(_,f)),t.push(new U(m,null)),n>Ja&&n--}return{lodMeshes:t,sizeLods:e}}function np(i,e,t){let n=new tn(i,e,t);return n.texture.mapping=fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Za(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function D2(i,e,t){return new Gt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:P2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function N2(i,e,t){return new Gt({name:"SphericalGaussianBlur",defines:{SAMPLES:C2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Hc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ip(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function sp(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Hc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var qc=class extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Hr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ie(5,5,5),a=new Gt({name:"CubemapFromEquirect",uniforms:na(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:Jn});a.uniforms.tEquirect.value=t;let r=new U(s,a),o=t.minFilter;return t.minFilter===Ss&&(t.minFilter=pn),new Vl(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(a)}};function U2(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?r(h):a(h)}function a(h){if(h&&h.isTexture){let f=h.mapping;if(f===Yl||f===jl)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let _=new qc(g.height);return _.fromEquirectangularTexture(i,h),e.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function r(h){if(h&&h.isTexture){let f=h.mapping,g=f===Yl||f===jl,_=f===Es||f===ta;if(g||_){let m=t.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new er(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let S=h.image;return g&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new er(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===Yl?h.mapping=Es:f===jl&&(h.mapping=ta),h}function l(h){let f=0,g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function F2(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ws("WebGLRenderer: "+n+" extension not supported."),s}}}function O2(i,e,t,n){let s={},a=new WeakMap;function r(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",r),delete s[h.id];let f=a.get(h);f&&(e.remove(f),a.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let S=f.array;_=f.version;for(let R=0,M=S.length;R<M;R+=3){let E=S[R+0],w=S[R+1],b=S[R+2];h.push(E,w,w,b,b,E)}}else{let S=g.array;_=g.version;for(let R=0,M=S.length/3-1;R<M;R+=3){let E=R+0,w=R+1,b=R+2;h.push(E,w,w,b,b,E)}}let m=new(g.count>=65535?Ur:Nr)(h,1);m.version=_;let p=a.get(d);p&&e.remove(p),a.set(d,m)}function u(d){let h=a.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function q2(i,e,t){let n;function s(d){n=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,h){i.drawElements(n,h,a,d*r),t.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,a,d*r,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,a,d,0,f);let _=0;for(let m=0;m<f;m++)_+=h[m];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function B2(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:et("WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function H2(i,e,t){let n=new WeakMap,s=new qt;function a(r,o,l){let c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let y=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",y)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],R=0;f===!0&&(R=1),g===!0&&(R=2),_===!0&&(R=3);let M=o.attributes.position.count*R,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let w=new Float32Array(M*E*4*d),b=new Lr(w,M,E,d);b.type=Qn,b.needsUpdate=!0;let x=R*4;for(let A=0;A<d;A++){let P=m[A],L=p[A],F=S[A],N=M*E*4*A;for(let q=0;q<P.count;q++){let G=q*x;f===!0&&(s.fromBufferAttribute(P,q),w[N+G+0]=s.x,w[N+G+1]=s.y,w[N+G+2]=s.z,w[N+G+3]=0),g===!0&&(s.fromBufferAttribute(L,q),w[N+G+4]=s.x,w[N+G+5]=s.y,w[N+G+6]=s.z,w[N+G+7]=0),_===!0&&(s.fromBufferAttribute(F,q),w[N+G+8]=s.x,w[N+G+9]=s.y,w[N+G+10]=s.z,w[N+G+11]=F.itemSize===4?s.w:1)}}h={count:d,texture:b,size:new ae(M,E)},n.set(o,h),o.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:a}}function z2(i,e,t,n,s){let a=new WeakMap;function r(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(a.get(h)!==u&&(e.update(h),a.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;a.get(f)!==u&&(f.update(),a.set(f,u))}return h}function o(){a=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}var k2={[ro]:"LINEAR_TONE_MAPPING",[oo]:"REINHARD_TONE_MAPPING",[lo]:"CINEON_TONE_MAPPING",[ea]:"ACES_FILMIC_TONE_MAPPING",[ho]:"AGX_TONE_MAPPING",[uo]:"NEUTRAL_TONE_MAPPING",[co]:"CUSTOM_TONE_MAPPING"};function G2(i,e,t,n,s,a){let r=new tn(e,t,{type:i,depthBuffer:s,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new kt;c.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ft([0,2,0,0,2,0],2));let u=new Va({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new U(c,u),h=new vs(-1,1,1,-1,0,1),f=null,g=null,_=!1,m,p=null,S=[],R=!1;this.setSize=function(M,E){r.setSize(M,E),o!==null&&o.setSize(M,E),l!==null&&l.setSize(M,E);for(let w=0;w<S.length;w++){let b=S[w];b.setSize&&b.setSize(M,E)}},this.setEffects=function(M){S=M,R=S.length>0&&S[0].isRenderPass===!0;let E=r.width,w=r.height;S.length>0&&o===null&&(o=new tn(E,w,{type:mn,depthBuffer:!1,stencilBuffer:!1}),l=new tn(E,w,{type:mn,depthBuffer:!1,stencilBuffer:!1}));for(let b=0;b<S.length;b++){let x=S[b];x.setSize&&x.setSize(E,w)}},this.begin=function(M,E){if(_||M.toneMapping===gi&&S.length===0)return!1;if(p=E,E!==null){let w=E.width,b=E.height;(r.width!==w||r.height!==b)&&this.setSize(w,b)}return R===!1&&M.setRenderTarget(r),m=M.toneMapping,M.toneMapping=gi,!0},this.hasRenderPass=function(){return R},this.end=function(M,E){M.toneMapping=m,_=!0;let w=r,b=o;for(let x=0;x<S.length;x++){let y=S[x];y.enabled!==!1&&(y.render(M,b,w,E),y.needsSwap!==!1&&(w=b,b=b===o?l:o))}if(f!==M.outputColorSpace||g!==M.toneMapping){f=M.outputColorSpace,g=M.toneMapping,u.defines={},ot.getTransfer(f)===_t&&(u.defines.SRGB_TRANSFER="");let x=k2[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(p),M.render(d,h),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Sp=new Mn,wu=new ps(1,1),Tp=new Lr,wp=new El,Ap=new Hr,ap=[],rp=[],op=new Float32Array(16),lp=new Float32Array(9),cp=new Float32Array(4);function tr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,a=ap[s];if(a===void 0&&(a=new Float32Array(s),ap[s]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(a,o)}return a}function nn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function sn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zc(i,e){let t=rp[e];t===void 0&&(t=new Int32Array(e),rp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function V2(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function W2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2fv(this.addr,e),sn(t,e)}}function X2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;i.uniform3fv(this.addr,e),sn(t,e)}}function $2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4fv(this.addr,e),sn(t,e)}}function Y2(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;cp.set(n),i.uniformMatrix2fv(this.addr,!1,cp),sn(t,n)}}function j2(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;lp.set(n),i.uniformMatrix3fv(this.addr,!1,lp),sn(t,n)}}function K2(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;op.set(n),i.uniformMatrix4fv(this.addr,!1,op),sn(t,n)}}function Z2(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function J2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2iv(this.addr,e),sn(t,e)}}function Q2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3iv(this.addr,e),sn(t,e)}}function ex(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4iv(this.addr,e),sn(t,e)}}function tx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2uiv(this.addr,e),sn(t,e)}}function ix(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3uiv(this.addr,e),sn(t,e)}}function sx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4uiv(this.addr,e),sn(t,e)}}function ax(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(wu.compareFunction=t.isReversedDepthBuffer()?Uc:Nc,a=wu):a=Sp,t.setTexture2D(e||a,s)}function rx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wp,s)}function ox(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ap,s)}function lx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Tp,s)}function cx(i){switch(i){case 5126:return V2;case 35664:return W2;case 35665:return X2;case 35666:return $2;case 35674:return Y2;case 35675:return j2;case 35676:return K2;case 5124:case 35670:return Z2;case 35667:case 35671:return J2;case 35668:case 35672:return Q2;case 35669:case 35673:return ex;case 5125:return tx;case 36294:return nx;case 36295:return ix;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return lx}}function hx(i,e){i.uniform1fv(this.addr,e)}function ux(i,e){let t=tr(e,this.size,2);i.uniform2fv(this.addr,t)}function dx(i,e){let t=tr(e,this.size,3);i.uniform3fv(this.addr,t)}function fx(i,e){let t=tr(e,this.size,4);i.uniform4fv(this.addr,t)}function px(i,e){let t=tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mx(i,e){let t=tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gx(i,e){let t=tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xx(i,e){i.uniform1iv(this.addr,e)}function _x(i,e){i.uniform2iv(this.addr,e)}function vx(i,e){i.uniform3iv(this.addr,e)}function yx(i,e){i.uniform4iv(this.addr,e)}function Mx(i,e){i.uniform1uiv(this.addr,e)}function bx(i,e){i.uniform2uiv(this.addr,e)}function Ex(i,e){i.uniform3uiv(this.addr,e)}function Sx(i,e){i.uniform4uiv(this.addr,e)}function Tx(i,e,t){let n=this.cache,s=e.length,a=zc(t,s);nn(n,a)||(i.uniform1iv(this.addr,a),sn(n,a));let r;this.type===i.SAMPLER_2D_SHADOW?r=wu:r=Sp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||r,a[o])}function wx(i,e,t){let n=this.cache,s=e.length,a=zc(t,s);nn(n,a)||(i.uniform1iv(this.addr,a),sn(n,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||wp,a[r])}function Ax(i,e,t){let n=this.cache,s=e.length,a=zc(t,s);nn(n,a)||(i.uniform1iv(this.addr,a),sn(n,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||Ap,a[r])}function Rx(i,e,t){let n=this.cache,s=e.length,a=zc(t,s);nn(n,a)||(i.uniform1iv(this.addr,a),sn(n,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||Tp,a[r])}function Cx(i){switch(i){case 5126:return hx;case 35664:return ux;case 35665:return dx;case 35666:return fx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return xx;case 35667:case 35671:return _x;case 35668:case 35672:return vx;case 35669:case 35673:return yx;case 5125:return Mx;case 36294:return bx;case 36295:return Ex;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Rx}}var Au=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cx(t.type)}},Ru=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cx(t.type)}},Cu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(e,t[o.id],n)}}},Su=/(\w+)(\])?(\[|\.)?/g;function hp(i,e){i.seq.push(e),i.map[e.id]=e}function Px(i,e,t){let n=i.name,s=n.length;for(Su.lastIndex=0;;){let a=Su.exec(n),r=Su.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){hp(t,c===void 0?new Au(o,i,e):new Ru(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Cu(o),hp(t,d)),t=d}}}var Qa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);Px(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,n,s){let a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,r=t.length;a!==r;++a){let o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,a=e.length;s!==a;++s){let r=e[s];r.id in t&&n.push(r)}return n}};function up(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ix=37297,Lx=0;function Dx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){let o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}var dp=new tt;function Nx(i){ot._getMatrix(dp,ot.workingColorSpace,i);let e=`mat3( ${dp.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case Pr:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+Dx(i.getShaderSource(e),o)}else return a}function Ux(i,e){let t=Nx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Fx={[ro]:"Linear",[oo]:"Reinhard",[lo]:"Cineon",[ea]:"ACESFilmic",[ho]:"AgX",[uo]:"Neutral",[co]:"Custom"};function Ox(i,e){let t=Fx[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Oc=new D;function qx(){ot.getLuminanceCoefficients(Oc);let i=Oc.x.toFixed(4),e=Oc.y.toFixed(4),t=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(So).join(`
`)}function Hx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let a=i.getActiveAttrib(e,s),r=a.name,o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function So(i){return i!==""}function pp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var kx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pu(i){return i.replace(kx,Vx)}var Gx=new Map;function Vx(i,e){let t=at[e];if(t===void 0){let n=Gx.get(e);if(n!==void 0)t=at[n],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Pu(t)}var Wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gp(i){return i.replace(Wx,Xx)}function Xx(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function xp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var $x={[ao]:"SHADOWMAP_TYPE_PCF",[$a]:"SHADOWMAP_TYPE_VSM"};function Yx(i){return $x[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var jx={[Es]:"ENVMAP_TYPE_CUBE",[ta]:"ENVMAP_TYPE_CUBE",[fo]:"ENVMAP_TYPE_CUBE_UV"};function Kx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":jx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Zx={[ta]:"ENVMAP_MODE_REFRACTION"};function Jx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Zx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qx={[$l]:"ENVMAP_BLENDING_MULTIPLY",[If]:"ENVMAP_BLENDING_MIX",[Lf]:"ENVMAP_BLENDING_ADD"};function e_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Qx[i.combine]||"ENVMAP_BLENDING_NONE"}function t_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function n_(i,e,t,n){let s=i.getContext(),a=t.defines,r=t.vertexShader,o=t.fragmentShader,l=Yx(t),c=Kx(t),u=Jx(t),d=e_(t),h=t_(t),f=Bx(t),g=Hx(a),_=s.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(So).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(So).join(`
`),p.length>0&&(p+=`
`)):(m=[xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),p=[xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?at.tonemapping_pars_fragment:"",t.toneMapping!==gi?Ox("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Ux("linearToOutputTexel",t.outputColorSpace),qx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(So).join(`
`)),r=Pu(r),r=pp(r,t),r=mp(r,t),o=Pu(o),o=pp(o,t),o=mp(o,t),r=gp(r),o=gp(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=S+m+r,M=S+p+o,E=up(s,s.VERTEX_SHADER,R),w=up(s,s.FRAGMENT_SHADER,M);s.attachShader(_,E),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(P){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(E)||"",N=s.getShaderInfoLog(w)||"",q=L.trim(),G=F.trim(),W=N.trim(),se=!0,K=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,w);else{let J=fp(s,E,"vertex"),ee=fp(s,w,"fragment");et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+q+`
`+J+`
`+ee)}else q!==""?Ze("WebGLProgram: Program Info Log:",q):(G===""||W==="")&&(K=!1);K&&(P.diagnostics={runnable:se,programLog:q,vertexShader:{log:G,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(E),s.deleteShader(w),x=new Qa(s,_),y=zx(s,_)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(_,Ix)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}var i_=0,Iu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Lu(e),t.set(e,n)),n}},Lu=class{constructor(e){this.id=i_++,this.code=e,this.usedTimes=0}};function s_(i){return i===ws||i===vo||i===yo}function a_(i,e,t,n,s,a){let r=new qa,o=new Iu,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,y,A,P,L,F){let N=P.fog,q=L.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,se=e.get(x.envMap||G,W),K=se&&se.mapping===fo?se.image.height:null,J=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ze("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let ee=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ce=ee!==void 0?ee.length:0,$=0;q.morphAttributes.position!==void 0&&($=1),q.morphAttributes.normal!==void 0&&($=2),q.morphAttributes.color!==void 0&&($=3);let pe,ve,de,O;if(J){let Dt=Ci[J];pe=Dt.vertexShader,ve=Dt.fragmentShader}else{pe=x.vertexShader,ve=x.fragmentShader;let Dt=o.getVertexShaderStage(x),Mt=o.getFragmentShaderStage(x);o.update(x,Dt,Mt),de=Dt.id,O=Mt.id}let V=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),Le=L.isInstancedMesh===!0,ge=L.isBatchedMesh===!0,Xe=!!x.map,rt=!!x.matcap,re=!!se,B=!!x.aoMap,te=!!x.lightMap,Q=!!x.bumpMap&&x.wireframe===!1,he=!!x.normalMap,Ne=!!x.displacementMap,ke=!!x.emissiveMap,$e=!!x.metalnessMap,me=!!x.roughnessMap,I=x.anisotropy>0,Ue=x.clearcoat>0,Se=x.dispersion>0,C=x.retroreflectivity>0,v=x.iridescence>0,k=x.sheen>0,X=x.transmission>0,ne=I&&!!x.anisotropyMap,xe=Ue&&!!x.clearcoatMap,_e=Ue&&!!x.clearcoatNormalMap,ie=Ue&&!!x.clearcoatRoughnessMap,le=v&&!!x.iridescenceMap,ye=v&&!!x.iridescenceThicknessMap,Ye=k&&!!x.sheenColorMap,Te=k&&!!x.sheenRoughnessMap,Me=!!x.specularMap,je=!!x.specularColorMap,Qe=!!x.specularIntensityMap,nt=X&&!!x.transmissionMap,z=X&&!!x.thicknessMap,be=!!x.gradientMap,oe=!!x.alphaMap,Ee=x.alphaTest>0,De=!!x.alphaHash,fe=!!x.extensions,Ke=gi;x.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Ke=i.toneMapping);let Ve={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:pe,fragmentShader:ve,defines:x.defines,customVertexShaderID:de,customFragmentShaderID:O,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:ge,batchingColor:ge&&L._colorsTexture!==null,instancing:Le,instancingColor:Le&&L.instanceColor!==null,instancingMorph:Le&&L.morphTexture!==null,outputColorSpace:V===null?i.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Xe,matcap:rt,envMap:re,envMapMode:re&&se.mapping,envMapCubeUVHeight:K,aoMap:B,lightMap:te,bumpMap:Q,normalMap:he,displacementMap:Ne,emissiveMap:ke,normalMapObjectSpace:he&&x.normalMapType===Uf,normalMapTangentSpace:he&&x.normalMapType===Mo,packedNormalMap:he&&x.normalMapType===Mo&&s_(x.normalMap.format),metalnessMap:$e,roughnessMap:me,anisotropy:I,anisotropyMap:ne,clearcoat:Ue,clearcoatMap:xe,clearcoatNormalMap:_e,clearcoatRoughnessMap:ie,dispersion:Se,retroreflection:C,iridescence:v,iridescenceMap:le,iridescenceThicknessMap:ye,sheen:k,sheenColorMap:Ye,sheenRoughnessMap:Te,specularMap:Me,specularColorMap:je,specularIntensityMap:Qe,transmission:X,transmissionMap:nt,thicknessMap:z,gradientMap:be,opaque:x.transparent===!1&&x.blending===Ya&&x.alphaToCoverage===!1,alphaMap:oe,alphaTest:Ee,alphaHash:De,combine:x.combine,mapUv:Xe&&g(x.map.channel),aoMapUv:B&&g(x.aoMap.channel),lightMapUv:te&&g(x.lightMap.channel),bumpMapUv:Q&&g(x.bumpMap.channel),normalMapUv:he&&g(x.normalMap.channel),displacementMapUv:Ne&&g(x.displacementMap.channel),emissiveMapUv:ke&&g(x.emissiveMap.channel),metalnessMapUv:$e&&g(x.metalnessMap.channel),roughnessMapUv:me&&g(x.roughnessMap.channel),anisotropyMapUv:ne&&g(x.anisotropyMap.channel),clearcoatMapUv:xe&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:_e&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(x.sheenRoughnessMap.channel),specularMapUv:Me&&g(x.specularMap.channel),specularColorMapUv:je&&g(x.specularColorMap.channel),specularIntensityMapUv:Qe&&g(x.specularIntensityMap.channel),transmissionMapUv:nt&&g(x.transmissionMap.channel),thicknessMapUv:z&&g(x.thicknessMap.channel),alphaMapUv:oe&&g(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(he||I),vertexNormals:!!q.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!q.attributes.uv&&(Xe||oe),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||q.attributes.normal===void 0&&he===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ue,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:$,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Xe&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===_t,decodeVideoTextureEmissive:ke&&x.emissiveMap.isVideoTexture===!0&&ot.getTransfer(x.emissiveMap.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===pt,flipSided:x.side===Pt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:fe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&x.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function m(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let A in x.defines)y.push(A),y.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(p(y,x),S(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function p(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numSunLights),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numSunLightShadows),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function S(x,y){r.disableAll(),y.instancing&&r.enable(0),y.instancingColor&&r.enable(1),y.instancingMorph&&r.enable(2),y.matcap&&r.enable(3),y.envMap&&r.enable(4),y.normalMapObjectSpace&&r.enable(5),y.normalMapTangentSpace&&r.enable(6),y.clearcoat&&r.enable(7),y.iridescence&&r.enable(8),y.alphaTest&&r.enable(9),y.vertexColors&&r.enable(10),y.vertexAlphas&&r.enable(11),y.vertexUv1s&&r.enable(12),y.vertexUv2s&&r.enable(13),y.vertexUv3s&&r.enable(14),y.vertexTangents&&r.enable(15),y.anisotropy&&r.enable(16),y.alphaHash&&r.enable(17),y.batching&&r.enable(18),y.dispersion&&r.enable(19),y.retroreflection&&r.enable(24),y.batchingColor&&r.enable(20),y.gradientMap&&r.enable(21),y.packedNormalMap&&r.enable(22),y.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),y.fog&&r.enable(0),y.useFog&&r.enable(1),y.flatShading&&r.enable(2),y.logarithmicDepthBuffer&&r.enable(3),y.reversedDepthBuffer&&r.enable(4),y.skinning&&r.enable(5),y.morphTargets&&r.enable(6),y.morphNormals&&r.enable(7),y.morphColors&&r.enable(8),y.premultipliedAlpha&&r.enable(9),y.shadowMapEnabled&&r.enable(10),y.doubleSided&&r.enable(11),y.flipSided&&r.enable(12),y.useDepthPacking&&r.enable(13),y.dithering&&r.enable(14),y.transmission&&r.enable(15),y.sheen&&r.enable(16),y.opaque&&r.enable(17),y.pointsUvs&&r.enable(18),y.decodeVideoTexture&&r.enable(19),y.decodeVideoTextureEmissive&&r.enable(20),y.alphaToCoverage&&r.enable(21),y.numLightProbeGrids>0&&r.enable(22),y.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function R(x){let y=f[x.type],A;if(y){let P=Ci[y];A=Ki.clone(P.uniforms)}else A=x.uniforms;return A}function M(x,y){let A=u.get(y);return A!==void 0?++A.usedTimes:(A=new n_(i,y,x,s),c.push(A),u.set(y,A)),A}function E(x){if(--x.usedTimes===0){let y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function b(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:R,acquireProgram:M,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:b}}function r_(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,l){i.get(r)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function o_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function _p(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vp(){let i=[],e=0,t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function r(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,_,m,p){let S=i[e];return S===void 0?(S={id:h.id,object:h,geometry:f,material:g,materialVariant:r(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},i[e]=S):(S.id=h.id,S.object=h,S.geometry=f,S.material=g,S.materialVariant=r(h),S.groupOrder=_,S.renderOrder=h.renderOrder,S.z=m,S.group=p),e++,S}function l(h,f,g,_,m,p,S){S.reversedDepth===!0&&(m=-m);let R=o(h,f,g,_,m,p);g.transmission>0?n.push(R):g.transparent===!0?s.push(R):t.push(R)}function c(h,f,g,_,m,p){let S=o(h,f,g,_,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function u(h,f){t.length>1&&t.sort(h||o_),n.length>1&&n.sort(f||_p),s.length>1&&s.sort(f||_p)}function d(){for(let h=e,f=i.length;h<f;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:l,unshift:c,finish:d,sort:u}}function l_(){let i=new WeakMap;function e(n,s){let a=i.get(n),r;return a===void 0?(r=new vp,i.set(n,[r])):s>=a.length?(r=new vp,a.push(r)):r=a[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function c_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Fe};break;case"SpotLight":t={position:new D,direction:new D,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function h_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var u_=0;function d_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function f_(i){let e=new c_,t=h_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,a=new lt,r=new lt;function o(c){let u=0,d=0,h=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,R=0,M=0,E=0,w=0,b=0,x=0,y=0,A=0;c.sort(d_);for(let L=0,F=c.length;L<F;L++){let N=c[L],q=N.color,G=N.intensity,W=N.distance,se=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ws?se=N.shadow.map.texture:se=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=q.r*G,d+=q.g*G,h+=q.b*G;else if(N.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(N.sh.coefficients[K],G);A++}else if(N.isSunLight){let K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let J=N.shadow,ee=t.get(N);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[g]=ee,n.sunShadowMap[g]=se;let Ce=J.getViewportCount();for(let $=0;$<Ce;$++)n.sunShadowMatrix[_+$]=J.getMatrix($),n.sunShadowCascade[_+$]=J._cascadeData[$];_+=Ce,g++}n.sun[f]=K,f++}else if(N.isDirectionalLight){let K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let J=N.shadow,ee=t.get(N);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,n.directionalShadow[m]=ee,n.directionalShadowMap[m]=se,n.directionalShadowMatrix[m]=N.shadow.matrix,E++}n.directional[m]=K,m++}else if(N.isSpotLight){let K=e.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy(q).multiplyScalar(G),K.distance=W,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,n.spot[S]=K;let J=N.shadow;if(N.map&&(n.spotLightMap[x]=N.map,x++,J.updateMatrices(N),N.castShadow&&y++),n.spotLightMatrix[S]=J.matrix,N.castShadow){let ee=t.get(N);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,n.spotShadow[S]=ee,n.spotShadowMap[S]=se,b++}S++}else if(N.isRectAreaLight){let K=e.get(N);K.color.copy(q).multiplyScalar(G),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),n.rectArea[R]=K,R++}else if(N.isPointLight){let K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),K.distance=N.distance,K.decay=N.decay,N.castShadow){let J=N.shadow,ee=t.get(N);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,n.pointShadow[p]=ee,n.pointShadowMap[p]=se,n.pointShadowMatrix[p]=N.shadow.matrix,w++}n.point[p]=K,p++}else if(N.isHemisphereLight){let K=e.get(N);K.skyColor.copy(N.color).multiplyScalar(G),K.groundColor.copy(N.groundColor).multiplyScalar(G),n.hemi[M]=K,M++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let P=n.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==p||P.spotLength!==S||P.rectAreaLength!==R||P.hemiLength!==M||P.numSunShadows!==g||P.numDirectionalShadows!==E||P.numPointShadows!==w||P.numSpotShadows!==b||P.numSpotMaps!==x||P.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=R,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+x-y,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=A,P.sunLength=f,P.directionalLength=m,P.pointLength=p,P.spotLength=S,P.rectAreaLength=R,P.hemiLength=M,P.numSunShadows=g,P.numDirectionalShadows=E,P.numPointShadows=w,P.numSpotShadows=b,P.numSpotMaps=x,P.numLightProbes=A,n.version=u_++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let S=0,R=c.length;S<R;S++){let M=c[S];if(M.isSunLight){let E=n.sun[d];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),d++}else if(M.isDirectionalLight){let E=n.directional[h];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(M.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),r.identity(),a.copy(M.matrixWorld),a.premultiply(p),r.extractRotation(a),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),_++}else if(M.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function yp(i){let e=new f_(i),t=[],n=[],s=[];function a(h){d.camera=h,t.length=0,n.length=0,s.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:c,setupLightsView:u,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function p_(i){let e=new WeakMap;function t(s,a=0){let r=e.get(s),o;return r===void 0?(o=new yp(i),e.set(s,[o])):a>=r.length?(o=new yp(i),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var m_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,x_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],__=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Mp=new lt,Eo=new D,Tu=new D;function v_(i,e,t){let n=new Ha,s=new ae,a=new ae,r=new qt,o=new Ll,l=new Dl,c={},u=t.maxTextureSize,d={[bs]:Pt,[Pt]:bs,[pt]:pt},h=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:m_,fragmentShader:g_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new kt;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new U(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ao;let p=this.type;this.render=function(w,b,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===df&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ao);let y=i.getRenderTarget(),A=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Jn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let F=p!==this.type;F&&b.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(q=>q.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,q=w.length;N<q;N++){let G=w[N],W=G.shadow;if(W===void 0){Ze("WebGLShadowMap:",G,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let se=W.getFrameExtents();s.multiply(se),a.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/se.x),s.x=a.x*se.x,W.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/se.y),s.y=a.y*se.y,W.mapSize.y=a.y));let K=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=K,W.map===null||F===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===$a){if(G.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new tn(s.x,s.y,{format:ws,type:mn,minFilter:pn,magFilter:pn,generateMipmaps:!1}),W.map.texture.name=G.name+".shadowMap",W.map.depthTexture=new ps(s.x,s.y,Qn),W.map.depthTexture.name=G.name+".shadowMapDepth",W.map.depthTexture.format=wi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=hn,W.map.depthTexture.magFilter=hn}else G.isPointLight?(W.map=new qc(s.x),W.map.depthTexture=new Tl(s.x,xi)):(W.map=new tn(s.x,s.y),W.map.depthTexture=new ps(s.x,s.y,xi)),W.map.depthTexture.name=G.name+".shadowMap",W.map.depthTexture.format=wi,this.type===ao?(W.map.depthTexture.compareFunction=K?Uc:Nc,W.map.depthTexture.minFilter=pn,W.map.depthTexture.magFilter=pn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=hn,W.map.depthTexture.magFilter=hn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let J=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();G.isPointLight!==!0&&W.updateMatrices(G,x);for(let ee=0;ee<J;ee++){let Ce=W.getCamera(ee);if(G.isPointLight){let $=W.camera,pe=W.matrix,ve=G.distance||$.far;ve!==$.far&&($.far=ve,$.updateProjectionMatrix()),Eo.setFromMatrixPosition(G.matrixWorld),$.position.copy(Eo),Tu.copy($.position),Tu.add(x_[ee]),$.up.copy(__[ee]),$.lookAt(Tu),$.updateMatrixWorld(),pe.makeTranslation(-Eo.x,-Eo.y,-Eo.z),Mp.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Mp,$.coordinateSystem,$.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(W.map),i.clear());let $=W.getViewport(ee);r.set(a.x*$.x,a.y*$.y,a.x*$.z,a.y*$.w),L.viewport(r)}n=W.getFrustum(ee),M(b,x,Ce,G,this.type)}W.isPointLightShadow!==!0&&this.type===$a&&S(W,x),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,A,P)};function S(w,b){let x=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new tn(s.x,s.y,{format:ws,type:mn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(b,null,x,h,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(b,null,x,f,_,null)}function R(w,b,x,y){let A=null,P=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)A=P;else if(A=x.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let L=A.uuid,F=b.uuid,N=c[L];N===void 0&&(N={},c[L]=N);let q=N[F];q===void 0&&(q=A.clone(),N[F]=q,b.addEventListener("dispose",E)),A=q}if(A.visible=b.visible,A.wireframe=b.wireframe,y===$a?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:d[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,x.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=i.properties.get(A);L.light=x}return A}function M(w,b,x,y,A){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&A===$a)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let F=e.update(w),N=w.material;if(Array.isArray(N)){let q=F.groups;for(let G=0,W=q.length;G<W;G++){let se=q[G],K=N[se.materialIndex];if(K&&K.visible){let J=R(w,K,y,A);w.onBeforeShadow(i,w,b,x,F,J,se),i.renderBufferDirect(x,null,F,J,w,se),w.onAfterShadow(i,w,b,x,F,J,se)}}}else if(N.visible){let q=R(w,N,y,A);w.onBeforeShadow(i,w,b,x,F,q,null),i.renderBufferDirect(x,null,F,q,w,null),w.onAfterShadow(i,w,b,x,F,q,null)}}let L=w.children;for(let F=0,N=L.length;F<N;F++)M(L[F],b,x,y,A)}function E(w){w.target.removeEventListener("dispose",E);for(let x in c){let y=c[x],A=w.target.uuid;A in y&&(y[A].dispose(),delete y[A])}}}function y_(i,e){function t(){let z=!1,be=new qt,oe=null,Ee=new qt(0,0,0,0);return{setMask:function(De){oe!==De&&!z&&(i.colorMask(De,De,De,De),oe=De)},setLocked:function(De){z=De},setClear:function(De,fe,Ke,Ve,Dt){Dt===!0&&(De*=Ve,fe*=Ve,Ke*=Ve),be.set(De,fe,Ke,Ve),Ee.equals(be)===!1&&(i.clearColor(De,fe,Ke,Ve),Ee.copy(be))},reset:function(){z=!1,oe=null,Ee.set(-1,0,0,0)}}}function n(){let z=!1,be=!1,oe=null,Ee=null,De=null;return{setReversed:function(fe){if(be!==fe){let Ke=e.get("EXT_clip_control");fe?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),be=fe;let Ve=De;De=null,this.setClear(Ve)}},getReversed:function(){return be},setTest:function(fe){fe?V(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(fe){oe!==fe&&!z&&(i.depthMask(fe),oe=fe)},setFunc:function(fe){if(be&&(fe=Xf[fe]),Ee!==fe){switch(fe){case dl:i.depthFunc(i.NEVER);break;case fl:i.depthFunc(i.ALWAYS);break;case pl:i.depthFunc(i.LESS);break;case Da:i.depthFunc(i.LEQUAL);break;case ml:i.depthFunc(i.EQUAL);break;case gl:i.depthFunc(i.GEQUAL);break;case xl:i.depthFunc(i.GREATER);break;case _l:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=fe}},setLocked:function(fe){z=fe},setClear:function(fe){De!==fe&&(De=fe,be&&(fe=1-fe),i.clearDepth(fe))},reset:function(){z=!1,oe=null,Ee=null,De=null,be=!1}}}function s(){let z=!1,be=null,oe=null,Ee=null,De=null,fe=null,Ke=null,Ve=null,Dt=null;return{setTest:function(Mt){z||(Mt?V(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(Mt){be!==Mt&&!z&&(i.stencilMask(Mt),be=Mt)},setFunc:function(Mt,si,Mi){(oe!==Mt||Ee!==si||De!==Mi)&&(i.stencilFunc(Mt,si,Mi),oe=Mt,Ee=si,De=Mi)},setOp:function(Mt,si,Mi){(fe!==Mt||Ke!==si||Ve!==Mi)&&(i.stencilOp(Mt,si,Mi),fe=Mt,Ke=si,Ve=Mi)},setLocked:function(Mt){z=Mt},setClear:function(Mt){Dt!==Mt&&(i.clearStencil(Mt),Dt=Mt)},reset:function(){z=!1,be=null,oe=null,Ee=null,De=null,fe=null,Ke=null,Ve=null,Dt=null}}}let a=new t,r=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,S=null,R=null,M=null,E=null,w=null,b=null,x=new Fe(0,0,0),y=0,A=!1,P=null,L=null,F=null,N=null,q=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,se=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(K)[1]),W=se>=1):K.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),W=se>=2);let J=null,ee={},Ce=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),pe=new qt().fromArray(Ce),ve=new qt().fromArray($);function de(z,be,oe,Ee){let De=new Uint8Array(4),fe=i.createTexture();i.bindTexture(z,fe),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<oe;Ke++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(be+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return fe}let O={};O[i.TEXTURE_2D]=de(i.TEXTURE_2D,i.TEXTURE_2D,1),O[i.TEXTURE_CUBE_MAP]=de(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[i.TEXTURE_2D_ARRAY]=de(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),O[i.TEXTURE_3D]=de(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),V(i.DEPTH_TEST),r.setFunc(Da),Q(!1),he(Qh),V(i.CULL_FACE),B(Jn);function V(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function ue(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function Le(z,be){return h[z]!==be?(i.bindFramebuffer(z,be),h[z]=be,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=be),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=be),!0):!1}function ge(z,be){let oe=g,Ee=!1;if(z){oe=f.get(be),oe===void 0&&(oe=[],f.set(be,oe));let De=z.textures;if(oe.length!==De.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,Ke=De.length;fe<Ke;fe++)oe[fe]=i.COLOR_ATTACHMENT0+fe;oe.length=De.length,Ee=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(oe)}function Xe(z){return _!==z?(i.useProgram(z),_=z,!0):!1}let rt={[Qs]:i.FUNC_ADD,[pf]:i.FUNC_SUBTRACT,[mf]:i.FUNC_REVERSE_SUBTRACT};rt[gf]=i.MIN,rt[xf]=i.MAX;let re={[_f]:i.ZERO,[vf]:i.ONE,[yf]:i.SRC_COLOR,[nu]:i.SRC_ALPHA,[wf]:i.SRC_ALPHA_SATURATE,[Sf]:i.DST_COLOR,[bf]:i.DST_ALPHA,[Mf]:i.ONE_MINUS_SRC_COLOR,[iu]:i.ONE_MINUS_SRC_ALPHA,[Tf]:i.ONE_MINUS_DST_COLOR,[Ef]:i.ONE_MINUS_DST_ALPHA,[Af]:i.CONSTANT_COLOR,[Rf]:i.ONE_MINUS_CONSTANT_COLOR,[Cf]:i.CONSTANT_ALPHA,[Pf]:i.ONE_MINUS_CONSTANT_ALPHA};function B(z,be,oe,Ee,De,fe,Ke,Ve,Dt,Mt){if(z===Jn){m===!0&&(ue(i.BLEND),m=!1);return}if(m===!1&&(V(i.BLEND),m=!0),z!==ff){if(z!==p||Mt!==A){if((S!==Qs||E!==Qs)&&(i.blendEquation(i.FUNC_ADD),S=Qs,E=Qs),Mt)switch(z){case Ya:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zt:i.blendFunc(i.ONE,i.ONE);break;case eu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:et("WebGLState: Invalid blending: ",z);break}else switch(z){case Ya:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case eu:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tu:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",z);break}R=null,M=null,w=null,b=null,x.set(0,0,0),y=0,p=z,A=Mt}return}De=De||be,fe=fe||oe,Ke=Ke||Ee,(be!==S||De!==E)&&(i.blendEquationSeparate(rt[be],rt[De]),S=be,E=De),(oe!==R||Ee!==M||fe!==w||Ke!==b)&&(i.blendFuncSeparate(re[oe],re[Ee],re[fe],re[Ke]),R=oe,M=Ee,w=fe,b=Ke),(Ve.equals(x)===!1||Dt!==y)&&(i.blendColor(Ve.r,Ve.g,Ve.b,Dt),x.copy(Ve),y=Dt),p=z,A=!1}function te(z,be){z.side===pt?ue(i.CULL_FACE):V(i.CULL_FACE);let oe=z.side===Pt;be&&(oe=!oe),Q(oe),z.blending===Ya&&z.transparent===!1?B(Jn):B(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),a.setMask(z.colorWrite);let Ee=z.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ke(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?V(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(z){P!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),P=z)}function he(z){z!==hf?(V(i.CULL_FACE),z!==L&&(z===Qh?i.cullFace(i.BACK):z===uf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),L=z}function Ne(z){z!==F&&(W&&i.lineWidth(z),F=z)}function ke(z,be,oe){z?(V(i.POLYGON_OFFSET_FILL),(N!==be||q!==oe)&&(N=be,q=oe,r.getReversed()&&(be=-be),i.polygonOffset(be,oe))):ue(i.POLYGON_OFFSET_FILL)}function $e(z){z?V(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function me(z){z===void 0&&(z=i.TEXTURE0+G-1),J!==z&&(i.activeTexture(z),J=z)}function I(z,be,oe){oe===void 0&&(J===null?oe=i.TEXTURE0+G-1:oe=J);let Ee=ee[oe];Ee===void 0&&(Ee={type:void 0,texture:void 0},ee[oe]=Ee),(Ee.type!==z||Ee.texture!==be)&&(J!==oe&&(i.activeTexture(oe),J=oe),i.bindTexture(z,be||O[z]),Ee.type=z,Ee.texture=be)}function Ue(){let z=ee[J];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Se(){try{i.compressedTexImage2D(...arguments)}catch(z){et("WebGLState:",z)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(z){et("WebGLState:",z)}}function v(){try{i.texSubImage2D(...arguments)}catch(z){et("WebGLState:",z)}}function k(){try{i.texSubImage3D(...arguments)}catch(z){et("WebGLState:",z)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(z){et("WebGLState:",z)}}function ne(){try{i.compressedTexSubImage3D(...arguments)}catch(z){et("WebGLState:",z)}}function xe(){try{i.texStorage2D(...arguments)}catch(z){et("WebGLState:",z)}}function _e(){try{i.texStorage3D(...arguments)}catch(z){et("WebGLState:",z)}}function ie(){try{i.texImage2D(...arguments)}catch(z){et("WebGLState:",z)}}function le(){try{i.texImage3D(...arguments)}catch(z){et("WebGLState:",z)}}function ye(z){return d[z]!==void 0?d[z]:i.getParameter(z)}function Ye(z,be){d[z]!==be&&(i.pixelStorei(z,be),d[z]=be)}function Te(z){pe.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),pe.copy(z))}function Me(z){ve.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),ve.copy(z))}function je(z,be){let oe=c.get(be);oe===void 0&&(oe=new WeakMap,c.set(be,oe));let Ee=oe.get(z);Ee===void 0&&(Ee=i.getUniformBlockIndex(be,z.name),oe.set(z,Ee))}function Qe(z,be){let Ee=c.get(be).get(z);l.get(be)!==Ee&&(i.uniformBlockBinding(be,Ee,z.__bindingPointIndex),l.set(be,Ee))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},J=null,ee={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,S=null,R=null,M=null,E=null,w=null,b=null,x=new Fe(0,0,0),y=0,A=!1,P=null,L=null,F=null,N=null,q=null,pe.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:V,disable:ue,bindFramebuffer:Le,drawBuffers:ge,useProgram:Xe,setBlending:B,setMaterial:te,setFlipSided:Q,setCullFace:he,setLineWidth:Ne,setPolygonOffset:ke,setScissorTest:$e,activeTexture:me,bindTexture:I,unbindTexture:Ue,compressedTexImage2D:Se,compressedTexImage3D:C,texImage2D:ie,texImage3D:le,pixelStorei:Ye,getParameter:ye,updateUBOMapping:je,uniformBlockBinding:Qe,texStorage2D:xe,texStorage3D:_e,texSubImage2D:v,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:ne,scissor:Te,viewport:Me,reset:nt}}function M_(i,e,t,n,s,a,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,v){return g?new OffscreenCanvas(C,v):Ua("canvas")}function m(C,v,k){let X=1,ne=Se(C);if((ne.width>k||ne.height>k)&&(X=k/Math.max(ne.width,ne.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let xe=Math.floor(X*ne.width),_e=Math.floor(X*ne.height);h===void 0&&(h=_(xe,_e));let ie=v?_(xe,_e):h;return ie.width=xe,ie.height=_e,ie.getContext("2d").drawImage(C,0,0,xe,_e),Ze("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+xe+"x"+_e+")."),ie}else return"data"in C&&Ze("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function p(C){return C.generateMipmaps}function S(C){i.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,v,k,X,ne,xe=!1){if(C!==null){if(i[C]!==void 0)return i[C];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let _e;X&&(_e=e.get("EXT_texture_norm16"),_e||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=v;if(v===i.RED&&(k===i.FLOAT&&(ie=i.R32F),k===i.HALF_FLOAT&&(ie=i.R16F),k===i.UNSIGNED_BYTE&&(ie=i.R8),k===i.UNSIGNED_SHORT&&_e&&(ie=_e.R16_EXT),k===i.SHORT&&_e&&(ie=_e.R16_SNORM_EXT)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(ie=i.R8UI),k===i.UNSIGNED_SHORT&&(ie=i.R16UI),k===i.UNSIGNED_INT&&(ie=i.R32UI),k===i.BYTE&&(ie=i.R8I),k===i.SHORT&&(ie=i.R16I),k===i.INT&&(ie=i.R32I)),v===i.RG&&(k===i.FLOAT&&(ie=i.RG32F),k===i.HALF_FLOAT&&(ie=i.RG16F),k===i.UNSIGNED_BYTE&&(ie=i.RG8),k===i.UNSIGNED_SHORT&&_e&&(ie=_e.RG16_EXT),k===i.SHORT&&_e&&(ie=_e.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(ie=i.RG8UI),k===i.UNSIGNED_SHORT&&(ie=i.RG16UI),k===i.UNSIGNED_INT&&(ie=i.RG32UI),k===i.BYTE&&(ie=i.RG8I),k===i.SHORT&&(ie=i.RG16I),k===i.INT&&(ie=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),k===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),k===i.UNSIGNED_INT&&(ie=i.RGB32UI),k===i.BYTE&&(ie=i.RGB8I),k===i.SHORT&&(ie=i.RGB16I),k===i.INT&&(ie=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),k===i.UNSIGNED_INT&&(ie=i.RGBA32UI),k===i.BYTE&&(ie=i.RGBA8I),k===i.SHORT&&(ie=i.RGBA16I),k===i.INT&&(ie=i.RGBA32I)),v===i.RGB&&(k===i.UNSIGNED_SHORT&&_e&&(ie=_e.RGB16_EXT),k===i.SHORT&&_e&&(ie=_e.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),v===i.RGBA){let le=xe?Pr:ot.getTransfer(ne);k===i.FLOAT&&(ie=i.RGBA32F),k===i.HALF_FLOAT&&(ie=i.RGBA16F),k===i.UNSIGNED_BYTE&&(ie=le===_t?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&_e&&(ie=_e.RGBA16_EXT),k===i.SHORT&&_e&&(ie=_e.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function E(C,v){let k;return C?v===null||v===xi||v===Ka?k=i.DEPTH24_STENCIL8:v===Qn?k=i.DEPTH32F_STENCIL8:v===ja&&(k=i.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===xi||v===Ka?k=i.DEPTH_COMPONENT24:v===Qn?k=i.DEPTH_COMPONENT32F:v===ja&&(k=i.DEPTH_COMPONENT16),k}function w(C,v){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==hn&&C.minFilter!==pn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function b(C){let v=C.target;v.removeEventListener("dispose",b),y(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function x(C){let v=C.target;v.removeEventListener("dispose",x),P(v)}function y(C){let v=n.get(C);if(v.__webglInit===void 0)return;let k=C.source,X=f.get(k);if(X){let ne=X[v.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&A(C),Object.keys(X).length===0&&f.delete(k)}n.remove(C)}function A(C){let v=n.get(C);i.deleteTexture(v.__webglTexture);let k=C.source,X=f.get(k);delete X[v.__cacheKey],r.memory.textures--}function P(C){let v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let ne=0;ne<v.__webglFramebuffer[X].length;ne++)i.deleteFramebuffer(v.__webglFramebuffer[X][ne]);else i.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)i.deleteFramebuffer(v.__webglFramebuffer[X]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let k=C.textures;for(let X=0,ne=k.length;X<ne;X++){let xe=n.get(k[X]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),r.memory.textures--),n.remove(k[X])}n.remove(C)}let L=0;function F(){L=0}function N(){return L}function q(C){L=C}function G(){let C=L;return C>=s.maxTextures&&Ze("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function W(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function se(C,v){let k=n.get(C);if(C.isVideoTexture&&I(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){let X=C.image;if(X===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(k,C,v);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function K(C,v){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){ue(k,C,v);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function J(C,v){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){ue(k,C,v);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function ee(C,v){let k=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){Le(k,C,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}let Ce={[ds]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[vl]:i.MIRRORED_REPEAT},$={[hn]:i.NEAREST,[Df]:i.NEAREST_MIPMAP_NEAREST,[po]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[Kl]:i.LINEAR_MIPMAP_NEAREST,[Ss]:i.LINEAR_MIPMAP_LINEAR},pe={[Of]:i.NEVER,[kf]:i.ALWAYS,[qf]:i.LESS,[Nc]:i.LEQUAL,[Bf]:i.EQUAL,[Uc]:i.GEQUAL,[Hf]:i.GREATER,[zf]:i.NOTEQUAL};function ve(C,v){if(v.type===Qn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===pn||v.magFilter===Kl||v.magFilter===po||v.magFilter===Ss||v.minFilter===pn||v.minFilter===Kl||v.minFilter===po||v.minFilter===Ss)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Ce[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Ce[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Ce[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,$[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,$[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,pe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===hn||v.minFilter!==po&&v.minFilter!==Ss||v.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function de(C,v){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",b));let X=v.source,ne=f.get(X);ne===void 0&&(ne={},f.set(X,ne));let xe=W(v);if(xe!==C.__cacheKey){ne[xe]===void 0&&(ne[xe]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,k=!0),ne[xe].usedTimes++;let _e=ne[C.__cacheKey];_e!==void 0&&(ne[C.__cacheKey].usedTimes--,_e.usedTimes===0&&A(v)),C.__cacheKey=xe,C.__webglTexture=ne[xe].texture}return k}function O(C,v,k){return Math.floor(Math.floor(C/k)/v)}function V(C,v,k,X){let xe=C.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,k,X,v.data);else{xe.sort((Ye,Te)=>Ye.start-Te.start);let _e=0;for(let Ye=1;Ye<xe.length;Ye++){let Te=xe[_e],Me=xe[Ye],je=Te.start+Te.count,Qe=O(Me.start,v.width,4),nt=O(Te.start,v.width,4);Me.start<=je+1&&Qe===nt&&O(Me.start+Me.count-1,v.width,4)===Qe?Te.count=Math.max(Te.count,Me.start+Me.count-Te.start):(++_e,xe[_e]=Me)}xe.length=_e+1;let ie=t.getParameter(i.UNPACK_ROW_LENGTH),le=t.getParameter(i.UNPACK_SKIP_PIXELS),ye=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Ye=0,Te=xe.length;Ye<Te;Ye++){let Me=xe[Ye],je=Math.floor(Me.start/4),Qe=Math.ceil(Me.count/4),nt=je%v.width,z=Math.floor(je/v.width),be=Qe,oe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,nt,z,be,oe,k,X,v.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ie),t.pixelStorei(i.UNPACK_SKIP_PIXELS,le),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function ue(C,v,k){let X=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=i.TEXTURE_3D);let ne=de(C,v),xe=v.source;t.bindTexture(X,C.__webglTexture,i.TEXTURE0+k);let _e=n.get(xe);if(xe.version!==_e.__version||ne===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let oe=ot.getPrimaries(ot.workingColorSpace),Ee=v.colorSpace===Yi?null:ot.getPrimaries(v.colorSpace),De=v.colorSpace===Yi||oe===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let le=m(v.image,!1,s.maxTextureSize);le=Ue(v,le);let ye=a.convert(v.format,v.colorSpace),Ye=a.convert(v.type),Te=M(v.internalFormat,ye,Ye,v.normalized,v.colorSpace,v.isVideoTexture);ve(X,v);let Me,je=v.mipmaps,Qe=v.isVideoTexture!==!0,nt=_e.__version===void 0||ne===!0,z=xe.dataReady,be=w(v,le);if(v.isDepthTexture)Te=E(v.format===Ts,v.type),nt&&(Qe?t.texStorage2D(i.TEXTURE_2D,1,Te,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Te,le.width,le.height,0,ye,Ye,null));else if(v.isDataTexture)if(je.length>0){Qe&&nt&&t.texStorage2D(i.TEXTURE_2D,be,Te,je[0].width,je[0].height);for(let oe=0,Ee=je.length;oe<Ee;oe++)Me=je[oe],Qe?z&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Me.width,Me.height,ye,Ye,Me.data):t.texImage2D(i.TEXTURE_2D,oe,Te,Me.width,Me.height,0,ye,Ye,Me.data);v.generateMipmaps=!1}else Qe?(nt&&t.texStorage2D(i.TEXTURE_2D,be,Te,le.width,le.height),z&&V(v,le,ye,Ye)):t.texImage2D(i.TEXTURE_2D,0,Te,le.width,le.height,0,ye,Ye,le.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Qe&&nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Te,je[0].width,je[0].height,le.depth);for(let oe=0,Ee=je.length;oe<Ee;oe++)if(Me=je[oe],v.format!==ei)if(ye!==null)if(Qe){if(z)if(v.layerUpdates.size>0){let De=vu(Me.width,Me.height,v.format,v.type);for(let fe of v.layerUpdates){let Ke=Me.data.subarray(fe*De/Me.data.BYTES_PER_ELEMENT,(fe+1)*De/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,fe,Me.width,Me.height,1,ye,Ke)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Me.width,Me.height,le.depth,ye,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Te,Me.width,Me.height,le.depth,0,Me.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Me.width,Me.height,le.depth,ye,Ye,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Te,Me.width,Me.height,le.depth,0,ye,Ye,Me.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Qe&&nt&&t.texStorage2D(i.TEXTURE_2D,be,Te,je[0].width,je[0].height);for(let oe=0,Ee=je.length;oe<Ee;oe++)Me=je[oe],v.format!==ei?ye!==null?Qe?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,Me.width,Me.height,ye,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Te,Me.width,Me.height,0,Me.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?z&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Me.width,Me.height,ye,Ye,Me.data):t.texImage2D(i.TEXTURE_2D,oe,Te,Me.width,Me.height,0,ye,Ye,Me.data)}else if(v.isDataArrayTexture)if(Qe){if(nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Te,le.width,le.height,le.depth),z)if(v.layerUpdates.size>0){let oe=vu(le.width,le.height,v.format,v.type);for(let Ee of v.layerUpdates){let De=le.data.subarray(Ee*oe/le.data.BYTES_PER_ELEMENT,(Ee+1)*oe/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ee,le.width,le.height,1,ye,Ye,De)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ye,Ye,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,le.width,le.height,le.depth,0,ye,Ye,le.data);else if(v.isData3DTexture)Qe?(nt&&t.texStorage3D(i.TEXTURE_3D,be,Te,le.width,le.height,le.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ye,Ye,le.data)):t.texImage3D(i.TEXTURE_3D,0,Te,le.width,le.height,le.depth,0,ye,Ye,le.data);else if(v.isFramebufferTexture){if(nt)if(Qe)t.texStorage2D(i.TEXTURE_2D,be,Te,le.width,le.height);else{let oe=le.width,Ee=le.height;for(let De=0;De<be;De++)t.texImage2D(i.TEXTURE_2D,De,Te,oe,Ee,0,ye,Ye,null),oe>>=1,Ee>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let oe=i.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),le.parentNode!==oe){oe.appendChild(le),d.add(v),oe.onpaint=Ee=>{let De=Ee.changedElements;for(let fe of d)De.includes(fe.image)&&(fe.needsUpdate=!0)},oe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,le);else{let De=i.RGBA,fe=i.RGBA,Ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,De,fe,Ke,le)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(je.length>0){if(Qe&&nt){let oe=Se(je[0]);t.texStorage2D(i.TEXTURE_2D,be,Te,oe.width,oe.height)}for(let oe=0,Ee=je.length;oe<Ee;oe++)Me=je[oe],Qe?z&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ye,Ye,Me):t.texImage2D(i.TEXTURE_2D,oe,Te,ye,Ye,Me);v.generateMipmaps=!1}else if(Qe){if(nt){let oe=Se(le);t.texStorage2D(i.TEXTURE_2D,be,Te,oe.width,oe.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,Ye,le)}else t.texImage2D(i.TEXTURE_2D,0,Te,ye,Ye,le);p(v)&&S(X),_e.__version=xe.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Le(C,v,k){if(v.image.length!==6)return;let X=de(C,v),ne=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+k);let xe=n.get(ne);if(ne.version!==xe.__version||X===!0){t.activeTexture(i.TEXTURE0+k);let _e=ot.getPrimaries(ot.workingColorSpace),ie=v.colorSpace===Yi?null:ot.getPrimaries(v.colorSpace),le=v.colorSpace===Yi||_e===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let ye=v.isCompressedTexture||v.image[0].isCompressedTexture,Ye=v.image[0]&&v.image[0].isDataTexture,Te=[];for(let fe=0;fe<6;fe++)!ye&&!Ye?Te[fe]=m(v.image[fe],!0,s.maxCubemapSize):Te[fe]=Ye?v.image[fe].image:v.image[fe],Te[fe]=Ue(v,Te[fe]);let Me=Te[0],je=a.convert(v.format,v.colorSpace),Qe=a.convert(v.type),nt=M(v.internalFormat,je,Qe,v.normalized,v.colorSpace),z=v.isVideoTexture!==!0,be=xe.__version===void 0||X===!0,oe=ne.dataReady,Ee=w(v,Me);ve(i.TEXTURE_CUBE_MAP,v);let De;if(ye){z&&be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,nt,Me.width,Me.height);for(let fe=0;fe<6;fe++){De=Te[fe].mipmaps;for(let Ke=0;Ke<De.length;Ke++){let Ve=De[Ke];v.format!==ei?je!==null?z?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ke,0,0,Ve.width,Ve.height,je,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ke,nt,Ve.width,Ve.height,0,Ve.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ke,0,0,Ve.width,Ve.height,je,Qe,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ke,nt,Ve.width,Ve.height,0,je,Qe,Ve.data)}}}else{if(De=v.mipmaps,z&&be){De.length>0&&Ee++;let fe=Se(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,nt,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Ye){z?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Te[fe].width,Te[fe].height,je,Qe,Te[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,nt,Te[fe].width,Te[fe].height,0,je,Qe,Te[fe].data);for(let Ke=0;Ke<De.length;Ke++){let Dt=De[Ke].image[fe].image;z?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ke+1,0,0,Dt.width,Dt.height,je,Qe,Dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ke+1,nt,Dt.width,Dt.height,0,je,Qe,Dt.data)}}else{z?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,je,Qe,Te[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,nt,je,Qe,Te[fe]);for(let Ke=0;Ke<De.length;Ke++){let Ve=De[Ke];z?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ke+1,0,0,je,Qe,Ve.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ke+1,nt,je,Qe,Ve.image[fe])}}}p(v)&&S(i.TEXTURE_CUBE_MAP),xe.__version=ne.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function ge(C,v,k,X,ne,xe){let _e=a.convert(k.format,k.colorSpace),ie=a.convert(k.type),le=M(k.internalFormat,_e,ie,k.normalized,k.colorSpace),ye=n.get(v),Ye=n.get(k);if(Ye.__renderTarget=v,!ye.__hasExternalTextures){let Te=Math.max(1,v.width>>xe),Me=Math.max(1,v.height>>xe);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,xe,le,Te,Me,v.depth,0,_e,ie,null):t.texImage2D(ne,xe,le,Te,Me,0,_e,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),me(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,ne,Ye.__webglTexture,0,$e(v)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,ne,Ye.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(C,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){let X=v.depthTexture,ne=X&&X.isDepthTexture?X.type:null,xe=E(v.stencilBuffer,ne),_e=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e(v),xe,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e(v),xe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,xe,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,C)}else{let X=v.textures;for(let ne=0;ne<X.length;ne++){let xe=X[ne],_e=a.convert(xe.format,xe.colorSpace),ie=a.convert(xe.type),le=M(xe.internalFormat,_e,ie,xe.normalized,xe.colorSpace);me(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e(v),le,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e(v),le,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,le,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(C,v,k){let X=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(v.depthTexture);if(ne.__renderTarget=v,(!ne.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,v.depthTexture.addEventListener("dispose",b)),ne.__webglTexture===void 0){ne.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),ve(i.TEXTURE_CUBE_MAP,v.depthTexture);let ye=a.convert(v.depthTexture.format),Ye=a.convert(v.depthTexture.type),Te;v.depthTexture.format===wi?Te=i.DEPTH_COMPONENT24:v.depthTexture.format===Ts&&(Te=i.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Te,v.width,v.height,0,ye,Ye,null)}}else se(v.depthTexture,0);let xe=ne.__webglTexture,_e=$e(v),ie=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,le=v.depthTexture.format===Ts?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===wi)me(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,ie,xe,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,le,ie,xe,0);else if(v.depthTexture.format===Ts)me(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,ie,xe,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,le,ie,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(C){let v=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let X=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){let ne=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",ne)};X.addEventListener("dispose",ne),v.__depthDisposeCallback=ne}v.__boundDepthTexture=X}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)rt(v.__webglFramebuffer[X],C,X);else{let X=C.texture.mipmaps;X&&X.length>0?rt(v.__webglFramebuffer[0],C,0):rt(v.__webglFramebuffer,C,0)}else if(k){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=i.createRenderbuffer(),Xe(v.__webglDepthbuffer[X],C,!1);else{let ne=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=v.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,xe)}}else{let X=C.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Xe(v.__webglDepthbuffer,C,!1);else{let ne=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,xe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function B(C,v,k){let X=n.get(C);v!==void 0&&ge(X.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&re(C)}function te(C){let v=C.texture,k=n.get(C),X=n.get(v);C.addEventListener("dispose",x);let ne=C.textures,xe=C.isWebGLCubeRenderTarget===!0,_e=ne.length>1;if(_e||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=v.version,r.memory.textures++),xe){k.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[ie]=[];for(let le=0;le<v.mipmaps.length;le++)k.__webglFramebuffer[ie][le]=i.createFramebuffer()}else k.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let ie=0;ie<v.mipmaps.length;ie++)k.__webglFramebuffer[ie]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(_e)for(let ie=0,le=ne.length;ie<le;ie++){let ye=n.get(ne[ie]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),r.memory.textures++)}if(C.samples>0&&me(C)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ie=0;ie<ne.length;ie++){let le=ne[ie];k.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ie]);let ye=a.convert(le.format,le.colorSpace),Ye=a.convert(le.type),Te=M(le.internalFormat,ye,Ye,le.normalized,le.colorSpace,C.isXRRenderTarget===!0),Me=$e(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,Te,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,k.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Xe(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),ve(i.TEXTURE_CUBE_MAP,v);for(let ie=0;ie<6;ie++)if(v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)ge(k.__webglFramebuffer[ie][le],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,le);else ge(k.__webglFramebuffer[ie],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(v)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ie=0,le=ne.length;ie<le;ie++){let ye=ne[ie],Ye=n.get(ye),Te=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Te=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,Ye.__webglTexture),ve(Te,ye),ge(k.__webglFramebuffer,C,ye,i.COLOR_ATTACHMENT0+ie,Te,0),p(ye)&&S(Te)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ie=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,X.__webglTexture),ve(ie,v),v.mipmaps&&v.mipmaps.length>0)for(let le=0;le<v.mipmaps.length;le++)ge(k.__webglFramebuffer[le],C,v,i.COLOR_ATTACHMENT0,ie,le);else ge(k.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,ie,0);p(v)&&S(ie),t.unbindTexture()}C.depthBuffer&&re(C)}function Q(C){let v=C.textures;for(let k=0,X=v.length;k<X;k++){let ne=v[k];if(p(ne)){let xe=R(C),_e=n.get(ne).__webglTexture;t.bindTexture(xe,_e),S(xe),t.unbindTexture()}}}let he=[],Ne=[];function ke(C){if(C.samples>0){if(me(C)===!1){let v=C.textures,k=C.width,X=C.height,ne=i.COLOR_BUFFER_BIT,xe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(C),ie=v.length>1;if(ie)for(let ye=0;ye<v.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);let le=C.texture.mipmaps;le&&le.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ye=0;ye<v.length;ye++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ye]);let Ye=n.get(v[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ye,0)}i.blitFramebuffer(0,0,k,X,0,0,k,X,ne,i.NEAREST),l===!0&&(he.length=0,Ne.length=0,he.push(i.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(he.push(xe),Ne.push(xe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let ye=0;ye<v.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ye]);let Ye=n.get(v[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,Ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function $e(C){return Math.min(s.maxSamples,C.samples)}function me(C){let v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function I(C){let v=r.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function Ue(C,v){let k=C.colorSpace,X=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Cr&&k!==Yi&&(ot.getTransfer(k)===_t?(X!==ei||ne!==Dn)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",k)),v}function Se(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=F,this.getTextureUnits=N,this.setTextureUnits=q,this.setTexture2D=se,this.setTexture2DArray=K,this.setTexture3D=J,this.setTextureCube=ee,this.rebindTextures=B,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function b_(i,e){function t(n,s=Yi){let a,r=ot.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===Jl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ql)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ou)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===au)return i.BYTE;if(n===ru)return i.SHORT;if(n===ja)return i.UNSIGNED_SHORT;if(n===Zl)return i.INT;if(n===xi)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===mn)return i.HALF_FLOAT;if(n===cu)return i.ALPHA;if(n===hu)return i.RGB;if(n===ei)return i.RGBA;if(n===wi)return i.DEPTH_COMPONENT;if(n===Ts)return i.DEPTH_STENCIL;if(n===ec)return i.RED;if(n===tc)return i.RED_INTEGER;if(n===ws)return i.RG;if(n===nc)return i.RG_INTEGER;if(n===ic)return i.RGBA_INTEGER;if(n===mo||n===go||n===xo||n===_o)if(r===_t)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===mo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===mo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sc||n===ac||n===rc||n===oc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===sc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ac)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lc||n===cc||n===hc||n===uc||n===dc||n===vo||n===fc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===lc||n===cc)return r===_t?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===hc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===uc)return a.COMPRESSED_R11_EAC;if(n===dc)return a.COMPRESSED_SIGNED_R11_EAC;if(n===vo)return a.COMPRESSED_RG11_EAC;if(n===fc)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pc||n===mc||n===gc||n===xc||n===_c||n===vc||n===yc||n===Mc||n===bc||n===Ec||n===Sc||n===Tc||n===wc||n===Ac)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===pc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_c)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ec)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wc)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ac)return r===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rc||n===Cc||n===Pc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Rc)return r===_t?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ic||n===Lc||n===yo||n===Dc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Ic)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Lc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ka?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var E_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Du=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new zr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Gt({vertexShader:E_,fragmentShader:S_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new U(new Ct(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nu=class extends hi{constructor(e,t){super();let n=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new Du,p={},S=t.getContextAttributes(),R=null,M=null,E=[],w=[],b=new ae,x=null,y=null,A=new Wt;A.viewport=new qt;let P=new Wt;P.viewport=new qt;let L=[A,P],F=new Wl,N=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let V=E[O];return V===void 0&&(V=new Ba,E[O]=V),V.getTargetRaySpace()},this.getControllerGrip=function(O){let V=E[O];return V===void 0&&(V=new Ba,E[O]=V),V.getGripSpace()},this.getHand=function(O){let V=E[O];return V===void 0&&(V=new Ba,E[O]=V),V.getHandSpace()};function G(O){let V=w.indexOf(O.inputSource);if(V===-1)return;let ue=E[V];ue!==void 0&&(ue.update(O.inputSource,O.frame,c||r),ue.dispatchEvent({type:O.type,data:O.inputSource}))}function W(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",se);for(let O=0;O<E.length;O++){let V=w[O];V!==null&&(w[O]=null,E[O].disconnect(V))}N=null,q=null,m.reset();for(let O in p)delete p[O];if(e.setRenderTarget(R),f=null,h=null,d=null,s=null,M=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),y!==null){let O=y.camera;O.fov=y.fov,O.zoom=y.zoom,O.updateProjectionMatrix(),y=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){a=O,n.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",W),s.addEventListener("inputsourceschange",se),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Le=null,ge=null;S.depth&&(ge=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=S.stencil?Ts:wi,Le=S.stencil?Ka:xi);let Xe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:a};d=this.getBinding(),h=d.createProjectionLayer(Xe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new tn(h.textureWidth,h.textureHeight,{format:ei,type:Dn,depthTexture:new ps(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ue={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new tn(f.framebufferWidth,f.framebufferHeight,{format:ei,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),de.setContext(s),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(O){for(let V=0;V<O.removed.length;V++){let ue=O.removed[V],Le=w.indexOf(ue);Le>=0&&(w[Le]=null,E[Le].disconnect(ue))}for(let V=0;V<O.added.length;V++){let ue=O.added[V],Le=w.indexOf(ue);if(Le===-1){for(let Xe=0;Xe<E.length;Xe++)if(Xe>=w.length){w.push(ue),Le=Xe;break}else if(w[Xe]===null){w[Xe]=ue,Le=Xe;break}if(Le===-1)break}let ge=E[Le];ge&&ge.connect(ue)}}let K=new D,J=new D;function ee(O,V,ue){K.setFromMatrixPosition(V.matrixWorld),J.setFromMatrixPosition(ue.matrixWorld);let Le=K.distanceTo(J),ge=V.projectionMatrix.elements,Xe=ue.projectionMatrix.elements,rt=ge[14]/(ge[10]-1),re=ge[14]/(ge[10]+1),B=(ge[9]+1)/ge[5],te=(ge[9]-1)/ge[5],Q=(ge[8]-1)/ge[0],he=(Xe[8]+1)/Xe[0],Ne=rt*Q,ke=rt*he,$e=Le/(-Q+he),me=$e*-Q;if(V.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(me),O.translateZ($e),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),ge[10]===-1)O.projectionMatrix.copy(V.projectionMatrix),O.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{let I=rt+$e,Ue=re+$e,Se=Ne-me,C=ke+(Le-me),v=B*re/Ue*I,k=te*re/Ue*I;O.projectionMatrix.makePerspective(Se,C,v,k,I,Ue),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function Ce(O,V){V===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(V.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let V=O.near,ue=O.far;m.texture!==null&&(m.depthNear>0&&(V=m.depthNear),m.depthFar>0&&(ue=m.depthFar)),F.near=P.near=A.near=V,F.far=P.far=A.far=ue,(N!==F.near||q!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),N=F.near,q=F.far),F.layers.mask=O.layers.mask|6,A.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;let Le=O.parent,ge=F.cameras;Ce(F,Le);for(let Xe=0;Xe<ge.length;Xe++)Ce(ge[Xe],Le);ge.length===2?ee(F,A,P):F.projectionMatrix.copy(A.projectionMatrix),y===null&&O.isPerspectiveCamera&&(y={camera:O,fov:O.fov,zoom:O.zoom}),$(O,F,Le)};function $(O,V,ue){ue===null?O.matrix.copy(V.matrixWorld):(O.matrix.copy(ue.matrixWorld),O.matrix.invert(),O.matrix.multiply(V.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(V.projectionMatrix),O.projectionMatrixInverse.copy(V.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Xs*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(O){l=O,h!==null&&(h.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(O){return p[O]};let pe=null;function ve(O,V){if(u=V.getViewerPose(c||r),g=V,u!==null){let ue=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Le=!1;ue.length!==F.cameras.length&&(F.cameras.length=0,Le=!0);for(let re=0;re<ue.length;re++){let B=ue[re],te=null;if(f!==null)te=f.getViewport(B);else{let he=d.getViewSubImage(h,B);te=he.viewport,re===0&&(e.setRenderTargetTextures(M,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(M))}let Q=L[re];Q===void 0&&(Q=new Wt,Q.layers.enable(re),Q.viewport=new qt,L[re]=Q),Q.matrix.fromArray(B.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(B.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(te.x,te.y,te.width,te.height),re===0&&(F.matrix.copy(Q.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Le===!0&&F.cameras.push(Q)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let re=d.getDepthInformation(ue[0]);re&&re.isValid&&re.texture&&m.init(re,s.renderState)}if(ge&&ge.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let re=0;re<ue.length;re++){let B=ue[re].camera;if(B){let te=p[B];te||(te=new zr,p[B]=te);let Q=d.getCameraImage(B);te.sourceTexture=Q}}}}for(let ue=0;ue<E.length;ue++){let Le=w[ue],ge=E[ue];Le!==null&&ge!==void 0&&ge.update(Le,V,c||r)}pe&&pe(O,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),g=null}let de=new bp;de.setAnimationLoop(ve),this.setAnimationLoop=function(O){pe=O},this.dispose=function(){}}},T_=new lt,Rp=new tt;Rp.set(-1,0,0,0,1,0,0,0,1);function w_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,R,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?a(m,p):p.isMeshLambertMaterial?(a(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(a(m,p),d(m,p)):p.isMeshPhongMaterial?(a(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(a(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),_(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,R):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Pt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Pt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),R=S.envMap,M=S.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(T_.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Rp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=R*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function A_(i,e,t,n){let s={},a={},r=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){let w=E.program;n.uniformBlockBinding(M,w)}function c(M,E){let w=s[M.id];w===void 0&&(m(M),w=u(M),s[M.id]=w,M.addEventListener("dispose",S));let b=E.program;n.updateUBOMapping(M,b);let x=e.render.frame;a[M.id]!==x&&(h(M),a[M.id]=x)}function u(M){let E=d();M.__bindingPointIndex=E;let w=i.createBuffer(),b=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,b,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,w),w}function d(){for(let M=0;M<o;M++)if(r.indexOf(M)===-1)return r.push(M),M;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let E=s[M.id],w=M.uniforms,b=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let x=0,y=w.length;x<y;x++){let A=w[x];if(Array.isArray(A))for(let P=0,L=A.length;P<L;P++)f(A[P],x,P,b);else f(A,x,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,E,w,b){if(_(M,E,w,b)===!0){let x=M.__offset,y=M.value;if(Array.isArray(y)){let A=0;for(let P=0;P<y.length;P++){let L=y[P],F=p(L);g(L,M.__data,A),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(A+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(y,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,M.__data)}}function g(M,E,w){typeof M=="number"||typeof M=="boolean"?E[0]=M:M.isMatrix3?(E[0]=M.elements[0],E[1]=M.elements[1],E[2]=M.elements[2],E[3]=0,E[4]=M.elements[3],E[5]=M.elements[4],E[6]=M.elements[5],E[7]=0,E[8]=M.elements[6],E[9]=M.elements[7],E[10]=M.elements[8],E[11]=0):ArrayBuffer.isView(M)?E.set(new M.constructor(M.buffer,M.byteOffset,E.length)):M.toArray(E,w)}function _(M,E,w,b){let x=M.value,y=E+"_"+w;if(b[y]===void 0)return typeof x=="number"||typeof x=="boolean"?b[y]=x:ArrayBuffer.isView(x)?b[y]=x.slice():b[y]=x.clone(),!0;{let A=b[y];if(typeof x=="number"||typeof x=="boolean"){if(A!==x)return b[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(A.equals(x)===!1)return A.copy(x),!0}}return!1}function m(M){let E=M.uniforms,w=0,b=16;for(let y=0,A=E.length;y<A;y++){let P=Array.isArray(E[y])?E[y]:[E[y]];for(let L=0,F=P.length;L<F;L++){let N=P[L],q=Array.isArray(N.value)?N.value:[N.value];for(let G=0,W=q.length;G<W;G++){let se=q[G],K=p(se),J=w%b,ee=J%K.boundary,Ce=J+ee;w+=ee,Ce!==0&&b-Ce<K.storage&&(w+=b-Ce),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=K.storage}}}let x=w%b;return x>0&&(w+=b-x),M.__size=w,M.__cache={},this}function p(M){let E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",M),E}function S(M){let E=M.target;E.removeEventListener("dispose",S);let w=r.indexOf(E.__bindingPointIndex);r.splice(w,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete a[E.id]}function R(){for(let M in s)i.deleteBuffer(s[M]);r=[],s={},a={}}return{bind:l,update:c,dispose:R}}var R_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ri=null;function C_(){return Ri===null&&(Ri=new Or(R_,16,16,ws,mn),Ri.name="DFG_LUT",Ri.minFilter=pn,Ri.magFilter=pn,Ri.wrapS=Si,Ri.wrapT=Si,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var Bc=class{constructor(e={}){let{canvas:t=Gf(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Dn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=r;let _=f,m=new Set([ic,nc,tc]),p=new Set([Dn,xi,ja,Ka,Jl,Ql]),S=new Uint32Array(4),R=new Int32Array(4),M=new D,E=null,w=null,b=[],x=[],y=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,P=!1,L=null,F=null,N=null,q=null;this._outputColorSpace=Tt;let G=0,W=0,se=null,K=-1,J=null,ee=new qt,Ce=new qt,$=null,pe=new Fe(0),ve=0,de=t.width,O=t.height,V=1,ue=null,Le=null,ge=new qt(0,0,de,O),Xe=new qt(0,0,de,O),rt=!1,re=new Ha,B=!1,te=!1,Q=new lt,he=new D,Ne=new qt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function me(){return se===null?V:1}let I=n;function Ue(T,H){return t.getContext(T,H)}let Se,C,v,k,X,ne,xe,_e,ie,le,ye,Ye,Te,Me,je,Qe,nt,z,be,oe,Ee,De,fe;try{let T={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Dt,!1),t.addEventListener("webglcontextrestored",Mt,!1),t.addEventListener("webglcontextcreationerror",si,!1),I===null){let H="webgl2";if(I=Ue(H,T),I===null)throw Ue(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ke()}catch(T){throw t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",si,!1),et("WebGLRenderer: "+T.message),T}function Ke(){Se=new F2(I),Se.init(),Ee=new b_(I,Se),C=new w2(I,Se,e,Ee),v=new y_(I,Se),C.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),F=I.createFramebuffer(),N=I.createFramebuffer(),q=I.createFramebuffer(),k=new B2(I),X=new r_,ne=new M_(I,Se,v,X,C,Ee,k),xe=new U2(A),_e=new zm(I),De=new S2(I,_e),ie=new O2(I,_e,k,De),le=new z2(I,ie,_e,De,k),z=new H2(I,C,ne),je=new A2(X),ye=new a_(A,xe,Se,C,De,je),Ye=new w_(A,X),Te=new l_,Me=new p_(Se),nt=new E2(A,xe,v,le,g,l),Qe=new v_(A,le,C),fe=new A_(I,k,C,v),be=new T2(I,Se,k),oe=new q2(I,Se,k),k.programs=ye.programs,A.capabilities=C,A.extensions=Se,A.properties=X,A.renderLists=Te,A.shadowMap=Qe,A.state=v,A.info=k}_!==Dn&&(y=new G2(_,t.width,t.height,o,s,a));let Ve=new Nu(A,I);this.xr=Ve,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let T=Se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(de,O,!1))},this.getSize=function(T){return T.set(de,O)},this.setSize=function(T,H,Z=!0){if(Ve.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}de=T,O=H,t.width=Math.floor(T*V),t.height=Math.floor(H*V),Z===!0&&(t.style.width=T+"px",t.style.height=H+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(de*V,O*V).floor()},this.setDrawingBufferSize=function(T,H,Z){de=T,O=H,V=Z,t.width=Math.floor(T*Z),t.height=Math.floor(H*Z),this.setViewport(0,0,T,H)},this.setEffects=function(T){if(_===Dn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let H=0;H<T.length;H++)if(T[H].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ee)},this.getViewport=function(T){return T.copy(ge)},this.setViewport=function(T,H,Z,Y){T.isVector4?ge.set(T.x,T.y,T.z,T.w):ge.set(T,H,Z,Y),v.viewport(ee.copy(ge).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Xe)},this.setScissor=function(T,H,Z,Y){T.isVector4?Xe.set(T.x,T.y,T.z,T.w):Xe.set(T,H,Z,Y),v.scissor(Ce.copy(Xe).multiplyScalar(V).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(T){v.setScissorTest(rt=T)},this.setOpaqueSort=function(T){ue=T},this.setTransparentSort=function(T){Le=T},this.getClearColor=function(T){return T.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,Z=!0){let Y=0;if(T){let j=!1;if(se!==null){let Pe=se.texture.format;j=m.has(Pe)}if(j){let Pe=se.texture.type,qe=p.has(Pe),Ae=nt.getClearColor(),He=nt.getClearAlpha(),We=Ae.r,st=Ae.g,ht=Ae.b;qe?(S[0]=We,S[1]=st,S[2]=ht,S[3]=He,I.clearBufferuiv(I.COLOR,0,S)):(R[0]=We,R[1]=st,R[2]=ht,R[3]=He,I.clearBufferiv(I.COLOR,0,R))}else Y|=I.COLOR_BUFFER_BIT}H&&(Y|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),L=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",si,!1),nt.dispose(),Te.dispose(),Me.dispose(),X.dispose(),xe.dispose(),le.dispose(),De.dispose(),fe.dispose(),ye.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",gd),Ve.removeEventListener("sessionend",xd),Hs.stop()};function Dt(T){T.preventDefault(),Ir("WebGLRenderer: Context Lost."),P=!0}function Mt(){Ir("WebGLRenderer: Context Restored."),P=!1;let T=k.autoReset,H=Qe.enabled,Z=Qe.autoUpdate,Y=Qe.needsUpdate,j=Qe.type;Ke(),k.autoReset=T,Qe.enabled=H,Qe.autoUpdate=Z,Qe.needsUpdate=Y,Qe.type=j}function si(T){et("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Mi(T){let H=T.target;H.removeEventListener("dispose",Mi),l0(H)}function l0(T){c0(T),X.remove(T)}function c0(T){let H=X.get(T).programs;H!==void 0&&(H.forEach(function(Z){ye.releaseProgram(Z)}),T.isShaderMaterial&&ye.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,Z,Y,j,Pe){H===null&&(H=ke);let qe=j.isMesh&&j.matrixWorld.determinantAffine()<0,Ae=d0(T,H,Z,Y,j);v.setMaterial(Y,qe);let He=Z.index,We=1;if(Y.wireframe===!0){if(He=ie.getWireframeAttribute(Z),He===void 0)return;We=2}let st=Z.drawRange,ht=Z.attributes.position,ze=st.start*We,bt=(st.start+st.count)*We;Pe!==null&&(ze=Math.max(ze,Pe.start*We),bt=Math.min(bt,(Pe.start+Pe.count)*We)),He!==null?(ze=Math.max(ze,0),bt=Math.min(bt,He.count)):ht!=null&&(ze=Math.max(ze,0),bt=Math.min(bt,ht.count));let Jt=bt-ze;if(Jt<0||Jt===1/0)return;De.setup(j,Y,Ae,Z,He);let Ut,It=be;if(He!==null&&(Ut=_e.get(He),It=oe,It.setIndex(Ut)),j.isMesh)Y.wireframe===!0?(v.setLineWidth(Y.wireframeLinewidth*me()),It.setMode(I.LINES)):It.setMode(I.TRIANGLES);else if(j.isLine){let _n=Y.linewidth;_n===void 0&&(_n=1),v.setLineWidth(_n*me()),j.isLineSegments?It.setMode(I.LINES):j.isLineLoop?It.setMode(I.LINE_LOOP):It.setMode(I.LINE_STRIP)}else j.isPoints?It.setMode(I.POINTS):j.isSprite&&It.setMode(I.TRIANGLES);if(j.isBatchedMesh)if(Se.get("WEBGL_multi_draw"))It.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let _n=j._multiDrawStarts,Oe=j._multiDrawCounts,Tn=j._multiDrawCount,gt=He?_e.get(He).bytesPerElement:1,jn=X.get(Y).currentProgram.getUniforms();for(let bi=0;bi<Tn;bi++)jn.setValue(I,"_gl_DrawID",bi),It.render(_n[bi]/gt,Oe[bi])}else if(j.isInstancedMesh)It.renderInstances(ze,Jt,j.count);else if(Z.isInstancedBufferGeometry){let _n=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Oe=Math.min(Z.instanceCount,_n);It.renderInstances(ze,Jt,Oe)}else It.render(ze,Jt)};function md(T,H,Z,Y){L!==null&&T.isNodeMaterial&&L.setObject(Y,T),B===!0&&je.setState(T,Z,!1),T.transparent===!0&&T.side===pt&&T.forceSinglePass===!1?(T.side=Pt,T.needsUpdate=!0,Fo(T,H,Y),T.side=bs,T.needsUpdate=!0,Fo(T,H,Y),T.side=pt):Fo(T,H,Y)}this.compile=function(T,H,Z=null){Z===null&&(Z=T),L!==null&&L.renderStart(T,H,Z),w=Me.get(Z),w.init(H),x.push(w),Z.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),T!==Z&&T.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),te=this.localClippingEnabled,B=je.init(this.clippingPlanes,te),B===!0&&je.setGlobalState(this.clippingPlanes,H),L!==null&&Qe.render(w.state.shadowsArray,Z,H);let Y=new Set;return T.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Pe=j.material;if(Pe)if(Array.isArray(Pe))for(let qe=0;qe<Pe.length;qe++){let Ae=Pe[qe];md(Ae,Z,H,j),Y.add(Ae)}else md(Pe,Z,H,j),Y.add(Pe)}),w=x.pop(),L!==null&&L.renderEnd(),Y},this.compileAsync=function(T,H,Z=null){let Y=this.compile(T,H,Z);return new Promise(j=>{function Pe(){if(Y.forEach(function(qe){let He=X.get(qe).currentProgram;(He===void 0||He.isReady())&&Y.delete(qe)}),Y.size===0){j(T);return}setTimeout(Pe,10)}Se.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let hh=null;function h0(T){hh&&hh(T)}function gd(){Hs.stop()}function xd(){Hs.start()}let Hs=new bp;Hs.setAnimationLoop(h0),typeof self<"u"&&Hs.setContext(self),this.setAnimationLoop=function(T){hh=T,Ve.setAnimationLoop(T),T===null?Hs.stop():Hs.start()},Ve.addEventListener("sessionstart",gd),Ve.addEventListener("sessionend",xd),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(T,H);let Z=Ve.enabled===!0&&Ve.isPresenting===!0,Y=y!==null&&(se===null||Z)&&y.begin(A,se);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(H),H=Ve.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,H,se),w=Me.get(T,x.length),w.init(H),w.state.textureUnits=ne.getTextureUnits(),x.push(w),Q.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),re.setFromProjectionMatrix(Q,ci,H.reversedDepth),te=this.localClippingEnabled,B=je.init(this.clippingPlanes,te),E=Te.get(T,b.length),E.init(),b.push(E),Ve.enabled===!0&&Ve.isPresenting===!0){let qe=A.xr.getDepthSensingMesh();qe!==null&&uh(qe,H,-1/0,A.sortObjects)}uh(T,H,0,A.sortObjects),E.finish(),L!==null&&L.updateLights(w.state.lightsArray),A.sortObjects===!0&&E.sort(ue,Le),$e=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,$e&&nt.addToRenderList(E,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),B===!0&&je.beginShadows();let j=w.state.shadowsArray;if(Qe.render(j,T,H),B===!0&&je.endShadows(),(Y&&y.hasRenderPass())===!1){let qe=E.opaque,Ae=E.transmissive;if(w.setupLights(),H.isArrayCamera){let He=H.cameras;if(Ae.length>0)for(let We=0,st=He.length;We<st;We++){let ht=He[We];vd(qe,Ae,T,ht)}$e&&nt.render(T);for(let We=0,st=He.length;We<st;We++){let ht=He[We];_d(E,T,ht,ht.viewport)}}else Ae.length>0&&vd(qe,Ae,T,H),$e&&nt.render(T),_d(E,T,H)}se!==null&&W===0&&(ne.updateMultisampleRenderTarget(se),ne.updateRenderTargetMipmap(se)),Y&&y.end(A),T.isScene===!0&&T.onAfterRender(A,T,H),De.resetDefaultState(),K=-1,J=null,x.pop(),x.length>0?(w=x[x.length-1],ne.setTextureUnits(w.state.textureUnits),B===!0&&je.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,b.pop(),b.length>0?E=b[b.length-1]:E=null,L!==null&&L.renderEnd()};function uh(T,H,Z,Y){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(re)){Y&&Ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Q);let qe=le.update(T),Ae=T.material;Ae.visible&&E.push(T,qe,Ae,Z,Ne.z,null,H)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(re))){let qe=le.update(T),Ae=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ne.copy(T.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),Ne.copy(qe.boundingSphere.center)),Ne.applyMatrix4(T.matrixWorld).applyMatrix4(Q)),Array.isArray(Ae)){let He=qe.groups;for(let We=0,st=He.length;We<st;We++){let ht=He[We],ze=Ae[ht.materialIndex];ze&&ze.visible&&E.push(T,qe,ze,Z,Ne.z,ht,H)}}else Ae.visible&&E.push(T,qe,Ae,Z,Ne.z,null,H)}}let Pe=T.children;for(let qe=0,Ae=Pe.length;qe<Ae;qe++)uh(Pe[qe],H,Z,Y)}function _d(T,H,Z,Y){let{opaque:j,transmissive:Pe,transparent:qe}=T;w.setupLightsView(Z),B===!0&&je.setGlobalState(A.clippingPlanes,Z),Y&&v.viewport(ee.copy(Y)),j.length>0&&Uo(j,H,Z),Pe.length>0&&Uo(Pe,H,Z),qe.length>0&&Uo(qe,H,Z),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function vd(T,H,Z,Y){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Y.id]===void 0){let ze=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Y.id]=new tn(1,1,{generateMipmaps:!0,type:ze?mn:Dn,minFilter:Ss,samples:Math.max(4,C.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let Pe=w.state.transmissionRenderTarget[Y.id],qe=Y.viewport||ee;Pe.setSize(qe.z*A.transmissionResolutionScale,qe.w*A.transmissionResolutionScale);let Ae=A.getRenderTarget(),He=A.getActiveCubeFace(),We=A.getActiveMipmapLevel();A.setRenderTarget(Pe),A.getClearColor(pe),ve=A.getClearAlpha(),ve<1&&A.setClearColor(16777215,.5),A.clear(),$e&&nt.render(Z);let st=A.toneMapping;A.toneMapping=gi;let ht=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),w.setupLightsView(Y),B===!0&&je.setGlobalState(A.clippingPlanes,Y),Uo(T,Z,Y),ne.updateMultisampleRenderTarget(Pe),ne.updateRenderTargetMipmap(Pe),Se.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let bt=0,Jt=H.length;bt<Jt;bt++){let Ut=H[bt],{object:It,geometry:_n,material:Oe,group:Tn}=Ut;if(Oe.side===pt&&It.layers.test(Y.layers)){let gt=Oe.side;Oe.side=Pt,Oe.needsUpdate=!0,yd(It,Z,Y,_n,Oe,Tn),Oe.side=gt,Oe.needsUpdate=!0,ze=!0}}ze===!0&&(ne.updateMultisampleRenderTarget(Pe),ne.updateRenderTargetMipmap(Pe))}A.setRenderTarget(Ae,He,We),A.setClearColor(pe,ve),ht!==void 0&&(Y.viewport=ht),A.toneMapping=st}function Uo(T,H,Z){let Y=H.isScene===!0?H.overrideMaterial:null;for(let j=0,Pe=T.length;j<Pe;j++){let qe=T[j],{object:Ae,geometry:He,group:We}=qe,st=qe.material;st.allowOverride===!0&&Y!==null&&(st=Y),Ae.layers.test(Z.layers)&&yd(Ae,H,Z,He,st,We)}}function yd(T,H,Z,Y,j,Pe){L!==null&&j.isNodeMaterial&&L.setObject(T,j),T.onBeforeRender(A,H,Z,Y,j,Pe),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(A,H,Z,Y,T,Pe),j.transparent===!0&&j.side===pt&&j.forceSinglePass===!1?(j.side=Pt,j.needsUpdate=!0,A.renderBufferDirect(Z,H,Y,j,T,Pe),j.side=bs,j.needsUpdate=!0,A.renderBufferDirect(Z,H,Y,j,T,Pe),j.side=pt):A.renderBufferDirect(Z,H,Y,j,T,Pe),T.onAfterRender(A,H,Z,Y,j,Pe)}function Fo(T,H,Z){H.isScene!==!0&&(H=ke);let Y=X.get(T),j=w.state.lights,Pe=w.state.shadowsArray,qe=j.state.version,Ae=ye.getParameters(T,j.state,Pe,H,Z,w.state.lightProbeGridArray),He=ye.getProgramCacheKey(Ae),We=Y.programs;Y.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,Y.fog=H.fog;let st=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Y.envMap=xe.get(T.envMap||Y.environment,st),Y.envMapRotation=Y.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,We===void 0&&(T.addEventListener("dispose",Mi),We=new Map,Y.programs=We);let ht=We.get(He);if(ht!==void 0){if(Y.currentProgram===ht&&Y.lightsStateVersion===qe)return bd(T,Ae),ht}else Ae.uniforms=ye.getUniforms(T),L!==null&&T.isNodeMaterial&&L.build(T,Z,Ae),T.onBeforeCompile(Ae,A),ht=ye.acquireProgram(Ae,He),We.set(He,ht),Y.uniforms=Ae.uniforms;let ze=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ze.clippingPlanes=je.uniform),bd(T,Ae),Y.needsLights=p0(T),Y.lightsStateVersion=qe,Y.needsLights&&(ze.ambientLightColor.value=j.state.ambient,ze.lightProbe.value=j.state.probe,ze.sunLights.value=j.state.sun,ze.sunLightShadows.value=j.state.sunShadow,ze.directionalLights.value=j.state.directional,ze.directionalLightShadows.value=j.state.directionalShadow,ze.spotLights.value=j.state.spot,ze.spotLightShadows.value=j.state.spotShadow,ze.rectAreaLights.value=j.state.rectArea,ze.ltc_1.value=j.state.rectAreaLTC1,ze.ltc_2.value=j.state.rectAreaLTC2,ze.pointLights.value=j.state.point,ze.pointLightShadows.value=j.state.pointShadow,ze.hemisphereLights.value=j.state.hemi,ze.sunShadowMatrix.value=j.state.sunShadowMatrix,ze.sunShadowCascade.value=j.state.sunShadowCascade,ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ze.spotLightMatrix.value=j.state.spotLightMatrix,ze.spotLightMap.value=j.state.spotLightMap,ze.pointShadowMatrix.value=j.state.pointShadowMatrix),Y.lightProbeGrid=w.state.lightProbeGridArray.length>0,Y.currentProgram=ht,Y.uniformsList=null,ht}function Md(T){if(T.uniformsList===null){let H=T.currentProgram.getUniforms();T.uniformsList=Qa.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function bd(T,H){let Z=X.get(T);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function u0(T,H){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;M.setFromMatrixPosition(H.matrixWorld);for(let Z=0,Y=T.length;Z<Y;Z++){let j=T[Z];if(j.texture!==null&&j.boundingBox.containsPoint(M))return j}return null}function d0(T,H,Z,Y,j){H.isScene!==!0&&(H=ke),ne.resetTextureUnits();let Pe=H.fog,qe=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?H.environment:null,Ae=se===null?A.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ot.workingColorSpace,He=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,We=xe.get(Y.envMap||qe,He),st=Y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ht=!!Z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ze=!!Z.morphAttributes.position,bt=!!Z.morphAttributes.normal,Jt=!!Z.morphAttributes.color,Ut=gi;Y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ut=A.toneMapping);let It=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,_n=It!==void 0?It.length:0,Oe=X.get(Y),Tn=w.state.lights;if(B===!0&&(te===!0||T!==J)){let Nt=T===J&&Y.id===K;je.setState(Y,T,Nt)}let gt=!1;Y.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Tn.state.version||Oe.outputColorSpace!==Ae||j.isBatchedMesh&&Oe.batching===!1||!j.isBatchedMesh&&Oe.batching===!0||j.isBatchedMesh&&Oe.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Oe.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Oe.instancing===!1||!j.isInstancedMesh&&Oe.instancing===!0||j.isSkinnedMesh&&Oe.skinning===!1||!j.isSkinnedMesh&&Oe.skinning===!0||j.isInstancedMesh&&Oe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Oe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Oe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Oe.instancingMorph===!1&&j.morphTexture!==null||Oe.envMap!==We||Y.fog===!0&&Oe.fog!==Pe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==je.numPlanes||Oe.numIntersection!==je.numIntersection)||Oe.vertexAlphas!==st||Oe.vertexTangents!==ht||Oe.morphTargets!==ze||Oe.morphNormals!==bt||Oe.morphColors!==Jt||Oe.toneMapping!==Ut||Oe.morphTargetsCount!==_n||!!Oe.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Oe.__version=Y.version);let jn=Oe.currentProgram;gt===!0&&(jn=Fo(Y,H,j),L&&Y.isNodeMaterial&&L.onUpdateProgram(Y,jn,Oe));let bi=!1,ns=!1,ha=!1,Rt=jn.getUniforms(),jt=Oe.uniforms;if(v.useProgram(jn.program)&&(bi=!0,ns=!0,ha=!0),Y.id!==K&&(K=Y.id,ns=!0),Oe.needsLights){let Nt=u0(w.state.lightProbeGridArray,j);Oe.lightProbeGrid!==Nt&&(Oe.lightProbeGrid=Nt,ns=!0)}if(bi||J!==T){v.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Rt.setValue(I,"projectionMatrix",T.projectionMatrix),Rt.setValue(I,"viewMatrix",T.matrixWorldInverse);let ss=Rt.map.cameraPosition;ss!==void 0&&ss.setValue(I,he.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&Rt.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Rt.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),J!==T&&(J=T,ns=!0,ha=!0)}if(Oe.needsLights&&(Tn.state.sunShadowMap.length>0&&Rt.setValue(I,"sunShadowMap",Tn.state.sunShadowMap,ne),Tn.state.directionalShadowMap.length>0&&Rt.setValue(I,"directionalShadowMap",Tn.state.directionalShadowMap,ne),Tn.state.spotShadowMap.length>0&&Rt.setValue(I,"spotShadowMap",Tn.state.spotShadowMap,ne),Tn.state.pointShadowMap.length>0&&Rt.setValue(I,"pointShadowMap",Tn.state.pointShadowMap,ne)),j.isSkinnedMesh){Rt.setOptional(I,j,"bindMatrix"),Rt.setOptional(I,j,"bindMatrixInverse");let Nt=j.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Rt.setValue(I,"boneTexture",Nt.boneTexture,ne))}j.isBatchedMesh&&(Rt.setOptional(I,j,"batchingTexture"),Rt.setValue(I,"batchingTexture",j._matricesTexture,ne),Rt.setOptional(I,j,"batchingIdTexture"),Rt.setValue(I,"batchingIdTexture",j._indirectTexture,ne),Rt.setOptional(I,j,"batchingColorTexture"),j._colorsTexture!==null&&Rt.setValue(I,"batchingColorTexture",j._colorsTexture,ne));let is=Z.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0)&&z.update(j,Z,jn),(ns||Oe.receiveShadow!==j.receiveShadow)&&(Oe.receiveShadow=j.receiveShadow,Rt.setValue(I,"receiveShadow",j.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&H.environment!==null&&(jt.envMapIntensity.value=H.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=C_()),ns){if(Rt.setValue(I,"toneMappingExposure",A.toneMappingExposure),Oe.needsLights&&f0(jt,ha),Pe&&Y.fog===!0&&Ye.refreshFogUniforms(jt,Pe),Ye.refreshMaterialUniforms(jt,Y,V,O,w.state.transmissionRenderTarget[T.id]),Oe.needsLights&&Oe.lightProbeGrid){let Nt=Oe.lightProbeGrid;jt.probesSH.value=Nt.texture,jt.probesMin.value.copy(Nt.boundingBox.min),jt.probesMax.value.copy(Nt.boundingBox.max),jt.probesResolution.value.copy(Nt.resolution)}Qa.upload(I,Md(Oe),jt,ne)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Qa.upload(I,Md(Oe),jt,ne),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Rt.setValue(I,"center",j.center),Rt.setValue(I,"modelViewMatrix",j.modelViewMatrix),Rt.setValue(I,"normalMatrix",j.normalMatrix),Rt.setValue(I,"modelMatrix",j.matrixWorld),Y.uniformsGroups!==void 0){let Nt=Y.uniformsGroups;for(let ss=0,ua=Nt.length;ss<ua;ss++){let Sd=Nt[ss];fe.update(Sd,jn),fe.bind(Sd,jn)}}return jn}function f0(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.sunLights.needsUpdate=H,T.sunLightShadows.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function p0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(T,H,Z){let Y=X.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),X.get(T.texture).__webglTexture=H,X.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Z,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,H){let Z=X.get(T);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,Z=0){se=T,G=H,W=Z;let Y=null,j=!1,Pe=!1;if(T){let Ae=X.get(T);if(Ae.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(I.FRAMEBUFFER,Ae.__webglFramebuffer),ee.copy(T.viewport),Ce.copy(T.scissor),$=T.scissorTest,v.viewport(ee),v.scissor(Ce),v.setScissorTest($),K=-1;return}else if(Ae.__webglFramebuffer===void 0)ne.setupRenderTarget(T);else if(Ae.__hasExternalTextures)ne.rebindTextures(T,X.get(T.texture).__webglTexture,X.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let st=T.depthTexture;if(Ae.__boundDepthTexture!==st){if(st!==null&&X.has(st)&&(T.width!==st.image.width||T.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(T)}}let He=T.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Pe=!0);let We=X.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(We[H])?Y=We[H][Z]:Y=We[H],j=!0):T.samples>0&&ne.useMultisampledRTT(T)===!1?Y=X.get(T).__webglMultisampledFramebuffer:Array.isArray(We)?Y=We[Z]:Y=We,ee.copy(T.viewport),Ce.copy(T.scissor),$=T.scissorTest}else ee.copy(ge).multiplyScalar(V).floor(),Ce.copy(Xe).multiplyScalar(V).floor(),$=rt;if(Z!==0&&(Y=F),v.bindFramebuffer(I.FRAMEBUFFER,Y)&&v.drawBuffers(T,Y),v.viewport(ee),v.scissor(Ce),v.setScissorTest($),j){let Ae=X.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ae.__webglTexture,Z)}else if(Pe){let Ae=H;for(let He=0;He<T.textures.length;He++){let We=X.get(T.textures[He]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+He,We.__webglTexture,Z,Ae)}}else if(T!==null&&Z!==0){let Ae=X.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ae.__webglTexture,Z)}K=-1};function Ed(T){let H=X.get(T);return(H.__readFormat!==T.format||H.__readType!==T.type)&&(H.__readFormat=T.format,H.__readType=T.type,H.__formatReadable=C.textureFormatReadable(T.format),H.__typeReadable=C.textureTypeReadable(T.type)),H}this.readRenderTargetPixels=function(T,H,Z,Y,j,Pe,qe,Ae=0){if(!(T&&T.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&qe!==void 0&&(He=He[qe]),He){v.bindFramebuffer(I.FRAMEBUFFER,He);try{let We=T.textures[Ae],st=We.format,ht=We.type;T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ae);let ze=Ed(We);if(ze.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-Y&&Z>=0&&Z<=T.height-j&&I.readPixels(H,Z,Y,j,Ee.convert(st),Ee.convert(ht),Pe)}finally{let We=se!==null?X.get(se).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(T,H,Z,Y,j,Pe,qe,Ae=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&qe!==void 0&&(He=He[qe]),He)if(H>=0&&H<=T.width-Y&&Z>=0&&Z<=T.height-j){v.bindFramebuffer(I.FRAMEBUFFER,He);let We=T.textures[Ae],st=We.format,ht=We.type;T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ae);let ze=Ed(We);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let bt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,bt),I.bufferData(I.PIXEL_PACK_BUFFER,Pe.byteLength,I.STREAM_READ),I.readPixels(H,Z,Y,j,Ee.convert(st),Ee.convert(ht),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let Jt=se!==null?X.get(se).__webglFramebuffer:null;v.bindFramebuffer(I.FRAMEBUFFER,Jt);let Ut=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Wf(I,Ut,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,bt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Pe),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(bt),I.deleteSync(Ut),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,H=null,Z=0){let Y=Math.pow(2,-Z),j=Math.floor(T.image.width*Y),Pe=Math.floor(T.image.height*Y),qe=H!==null?H.x:0,Ae=H!==null?H.y:0;ne.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,Z,0,0,qe,Ae,j,Pe),v.unbindTexture()},this.copyTextureToTexture=function(T,H,Z=null,Y=null,j=0,Pe=0){let qe,Ae,He,We,st,ht,ze,bt,Jt,Ut=T.isCompressedTexture?T.mipmaps[Pe]:T.image;if(Z!==null)qe=Z.max.x-Z.min.x,Ae=Z.max.y-Z.min.y,He=Z.isBox3?Z.max.z-Z.min.z:1,We=Z.min.x,st=Z.min.y,ht=Z.isBox3?Z.min.z:0;else{let jt=Math.pow(2,-j);qe=Math.floor(Ut.width*jt),Ae=Math.floor(Ut.height*jt),T.isDataArrayTexture?He=Ut.depth:T.isData3DTexture?He=Math.floor(Ut.depth*jt):He=1,We=0,st=0,ht=0}Y!==null?(ze=Y.x,bt=Y.y,Jt=Y.z):(ze=0,bt=0,Jt=0);let It=Ee.convert(H.format),_n=Ee.convert(H.type),Oe;H.isData3DTexture?(ne.setTexture3D(H,0),Oe=I.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ne.setTexture2DArray(H,0),Oe=I.TEXTURE_2D_ARRAY):(ne.setTexture2D(H,0),Oe=I.TEXTURE_2D),v.activeTexture(I.TEXTURE0),v.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),v.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),v.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment);let Tn=v.getParameter(I.UNPACK_ROW_LENGTH),gt=v.getParameter(I.UNPACK_IMAGE_HEIGHT),jn=v.getParameter(I.UNPACK_SKIP_PIXELS),bi=v.getParameter(I.UNPACK_SKIP_ROWS),ns=v.getParameter(I.UNPACK_SKIP_IMAGES);v.pixelStorei(I.UNPACK_ROW_LENGTH,Ut.width),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ut.height),v.pixelStorei(I.UNPACK_SKIP_PIXELS,We),v.pixelStorei(I.UNPACK_SKIP_ROWS,st),v.pixelStorei(I.UNPACK_SKIP_IMAGES,ht);let ha=T.isDataArrayTexture||T.isData3DTexture,Rt=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){let jt=X.get(T),is=X.get(H),Nt=X.get(jt.__renderTarget),ss=X.get(is.__renderTarget);v.bindFramebuffer(I.READ_FRAMEBUFFER,Nt.__webglFramebuffer),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,ss.__webglFramebuffer);for(let ua=0;ua<He;ua++)ha&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,X.get(T).__webglTexture,j,ht+ua),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,X.get(H).__webglTexture,Pe,Jt+ua)),I.blitFramebuffer(We,st,qe,Ae,ze,bt,qe,Ae,I.DEPTH_BUFFER_BIT,I.NEAREST);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(j!==0||T.isRenderTargetTexture||X.has(T)){let jt=X.get(T),is=X.get(H);v.bindFramebuffer(I.READ_FRAMEBUFFER,N),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,q);for(let Nt=0;Nt<He;Nt++)ha?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,jt.__webglTexture,j,ht+Nt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,jt.__webglTexture,j),Rt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,is.__webglTexture,Pe,Jt+Nt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,is.__webglTexture,Pe),j!==0?I.blitFramebuffer(We,st,qe,Ae,ze,bt,qe,Ae,I.COLOR_BUFFER_BIT,I.NEAREST):Rt?I.copyTexSubImage3D(Oe,Pe,ze,bt,Jt+Nt,We,st,qe,Ae):I.copyTexSubImage2D(Oe,Pe,ze,bt,We,st,qe,Ae);v.bindFramebuffer(I.READ_FRAMEBUFFER,null),v.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Rt?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Oe,Pe,ze,bt,Jt,qe,Ae,He,It,_n,Ut.data):H.isCompressedArrayTexture?I.compressedTexSubImage3D(Oe,Pe,ze,bt,Jt,qe,Ae,He,It,Ut.data):I.texSubImage3D(Oe,Pe,ze,bt,Jt,qe,Ae,He,It,_n,Ut):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Pe,ze,bt,qe,Ae,It,_n,Ut.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Pe,ze,bt,Ut.width,Ut.height,It,Ut.data):I.texSubImage2D(I.TEXTURE_2D,Pe,ze,bt,qe,Ae,It,_n,Ut);v.pixelStorei(I.UNPACK_ROW_LENGTH,Tn),v.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt),v.pixelStorei(I.UNPACK_SKIP_PIXELS,jn),v.pixelStorei(I.UNPACK_SKIP_ROWS,bi),v.pixelStorei(I.UNPACK_SKIP_IMAGES,ns),Pe===0&&H.generateMipmaps&&I.generateMipmap(Oe),v.unbindTexture()},this.initRenderTarget=function(T){X.get(T).__webglFramebuffer===void 0&&ne.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ne.setTextureCube(T,0):T.isData3DTexture?ne.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ne.setTexture2DArray(T,0):ne.setTexture2D(T,0),v.unbindTexture()},this.resetState=function(){G=0,W=0,se=null,v.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};var Cp={type:"change"},Fu={type:"start"},Ip={type:"end"},kc=new fs,Pp=new qn,P_=Math.cos(70*ji.DEG2RAD),an=new D,Nn=2*Math.PI,wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Uu=1e-6,Gc=class extends so{constructor(e,t=null){super(e,t),this.state=wt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ys.ROTATE,MIDDLE:ys.DOLLY,RIGHT:ys.PAN},this.touches={ONE:Ms.ROTATE,TWO:Ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new en,this._lastTargetPosition=new D,this._quat=new en().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xa,this._sphericalDelta=new Xa,this._scale=1,this._panOffset=new D,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new D,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=L_.bind(this),this._onPointerDown=I_.bind(this),this._onPointerUp=D_.bind(this),this._onContextMenu=H_.bind(this),this._onMouseWheel=F_.bind(this),this._onKeyDown=O_.bind(this),this._onTouchStart=q_.bind(this),this._onTouchMove=B_.bind(this),this._onMouseDown=N_.bind(this),this._onMouseMove=U_.bind(this),this._interceptControlDown=z_.bind(this),this._interceptControlUp=k_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=wt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cp),this.update(),this.state=wt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;an.copy(t).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Nn:n>Math.PI&&(n-=Nn),s<-Math.PI?s+=Nn:s>Math.PI&&(s-=Nn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),t.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let o=an.length();r=this._clampDistance(o*this._scale);let l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){let o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(kc.origin.copy(this.object.position),kc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(kc.direction))<P_?this.object.lookAt(this.target):(Pp.setFromNormalAndCoplanarPoint(this.object.up,this.target),kc.intersectPlane(Pp,this.target))))}else if(this.object.isOrthographicCamera){let r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Uu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Uu||this._lastTargetPosition.distanceToSquared(this.target)>Uu?(this.dispatchEvent(Cp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Nn/60*this.autoRotateSpeed*e:Nn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){an.setFromMatrixColumn(t,0),an.multiplyScalar(-e),this._panOffset.add(an)}_panUp(e,t){this.screenSpacePanning===!0?an.setFromMatrixColumn(t,1):(an.setFromMatrixColumn(t,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(e),this._panOffset.add(an)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;an.copy(s).sub(this.target);let a=an.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,a=t-n.top,r=n.width,o=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function I_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function L_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function D_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ip),this.state=wt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function N_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=wt.DOLLY;break;case ys.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=wt.ROTATE}break;case ys.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=wt.PAN}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(Fu)}function U_(i){switch(this.state){case wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function F_(i){this.enabled===!1||this.enableZoom===!1||this.state!==wt.NONE||(i.preventDefault(),this.dispatchEvent(Fu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ip))}function O_(i){this.enabled!==!1&&this._handleKeyDown(i)}function q_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ms.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=wt.TOUCH_ROTATE;break;case Ms.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=wt.TOUCH_PAN;break;default:this.state=wt.NONE}break;case 2:switch(this.touches.TWO){case Ms.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=wt.TOUCH_DOLLY_PAN;break;case Ms.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=wt.TOUCH_DOLLY_ROTATE;break;default:this.state=wt.NONE}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(Fu)}function B_(i){switch(this._trackPointer(i),this.state){case wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=wt.NONE}}function H_(i){this.enabled!==!1&&i.preventDefault()}function z_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function k_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var nr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Vn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},G_=new vs(-1,1,1,-1,0,1),Ou=class extends kt{constructor(){super(),this.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ft([0,2,0,0,2,0],2))}},V_=new Ou,As=class{constructor(e){this._mesh=new U(V_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,G_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ir=class extends Vn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ki.clone(e.uniforms),this.material=new Gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new As(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var To=class extends Vn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}},Vc=class extends Vn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Rs=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ae);this._width=n.width,this._height=n.height,t=new tn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ir(nr),this.copyPass.material.blending=Jn,this.timer=new eo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,a=this.passes.length;s<a;s++){let r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}To!==void 0&&(r instanceof To?n=!0:r instanceof Vc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Cs=class extends Vn{constructor(e,t,n=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Fe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=s}};var Lp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Fe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Pi=class i extends Vn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256),this.clearColor=new Fe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new tn(a,r,{type:mn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new tn(a,r,{type:mn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let h=new tn(a,r,{type:mn,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),a=Math.round(a/2),r=Math.round(r/2)}let o=Lp;this.highPassUniforms=Ki.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Gt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ae(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ki.clone(nr.uniforms),this.blendMaterial=new Gt({uniforms:this.copyUniforms,vertexShader:nr.vertexShader,fragmentShader:nr.fragmentShader,premultipliedAlpha:!0,blending:Zt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Fe,this._oldClearAlpha=1,this._basic=new ut,this._fsQuad=new As(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,s),this.renderTargetsVertical[a].setSize(n,s),this.separableBlurMaterials[a].uniforms.invSize.value=new ae(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let s=[],a=[];for(let r=1;r<e;r+=2){let o=t[r],l=r+1<e?t[r+1]:0,c=o+l;s.push((r*o+(r+1)*l)/c),a.push(c)}return new Gt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:a}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Gt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Pi.BlurDirectionX=new ae(1,0);Pi.BlurDirectionY=new ae(0,1);var wo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ps=class extends Vn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ki.clone(wo.uniforms),this.material=new Va({name:wo.name,uniforms:this.uniforms,vertexShader:wo.vertexShader,fragmentShader:wo.fragmentShader}),this._fsQuad=new As(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ro?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===oo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===lo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ea?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ho?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===uo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===co&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var zu={};as(zu,{build:()=>K_,cameras:()=>j_,info:()=>Hu});var Wc=class extends $i{constructor(e){super(e)}load(e,t,n,s){let a=this,r=new Zr(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(o){let l=a.parse(JSON.parse(o));t&&t(l)},n,s)}parse(e){return new Ao(e)}},Ao=class{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100,n="ltr"){let s=[],a=W_(e,t,this.data,n);for(let r=0,o=a.length;r<o;r++)s.push(...a[r].toShapes());return s}};function W_(i,e,t,n){let s=Array.from(i),a=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*a,o=[],l=0,c=0;(n=="rtl"||n=="tb")&&s.reverse();for(let u=0;u<s.length;u++){let d=s[u];if(d===`
`)l=0,c-=r;else{let h=X_(d,a,l,c,t);n=="tb"?(l=0,c+=t.ascender*a):l+=h.offsetX,o.push(h.path)}}return o}function X_(i,e,t,n,s){let a=s.glyphs[i]||s.glyphs["?"];if(!a){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}let r=new io,o,l,c,u,d,h,f,g;if(a.o){let _=a._cachedOutline||(a._cachedOutline=a.o.split(" "));for(let m=0,p=_.length;m<p;)switch(_[m++]){case"m":o=_[m++]*e+t,l=_[m++]*e+n,r.moveTo(o,l);break;case"l":o=_[m++]*e+t,l=_[m++]*e+n,r.lineTo(o,l);break;case"q":c=_[m++]*e+t,u=_[m++]*e+n,d=_[m++]*e+t,h=_[m++]*e+n,r.quadraticCurveTo(d,h,c,u);break;case"b":c=_[m++]*e+t,u=_[m++]*e+n,d=_[m++]*e+t,h=_[m++]*e+n,f=_[m++]*e+t,g=_[m++]*e+n,r.bezierCurveTo(d,h,f,g,c,u);break}}return{offsetX:a.ha*e,path:r}}var Ii=class i extends Ln{constructor(e,t={}){let n=t.font;if(n===void 0)super();else{let s=n.generateShapes(e,t.size,t.direction);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}toJSON(){return super.toJSON()}static fromJSON(e){let t=e.options;return t.font=new Ao(t.font.data),new i(t.text,t)}};var Dp={glyphs:{\u03BF:{x_min:0,x_max:764,ha:863,o:"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 "},S:{x_min:0,x_max:826,ha:915,o:"m 826 306 q 701 55 826 148 q 423 -29 587 -29 q 138 60 255 -29 q 0 318 13 154 l 208 318 q 288 192 216 238 q 437 152 352 152 q 559 181 506 152 q 623 282 623 217 q 466 411 623 372 q 176 487 197 478 q 18 719 18 557 q 136 958 18 869 q 399 1040 244 1040 q 670 956 561 1040 q 791 713 791 864 l 591 713 q 526 826 583 786 q 393 866 469 866 q 277 838 326 866 q 218 742 218 804 q 374 617 218 655 q 667 542 646 552 q 826 306 826 471 "},"\xA6":{x_min:0,x_max:143,ha:240,o:"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"/":{x_min:196.109375,x_max:632.5625,ha:828,o:"m 632 1040 l 289 -128 l 196 -128 l 538 1040 l 632 1040 "},\u03A4:{x_min:-.609375,x_max:808,ha:878,o:"m 808 831 l 508 831 l 508 0 l 298 0 l 298 831 l 0 831 l 0 1013 l 808 1013 l 808 831 "},y:{x_min:0,x_max:738.890625,ha:828,o:"m 738 749 l 444 -107 q 361 -238 413 -199 q 213 -277 308 -277 q 156 -275 176 -277 q 120 -271 131 -271 l 120 -110 q 147 -113 134 -111 q 179 -116 161 -116 q 247 -91 226 -116 q 269 -17 269 -67 q 206 173 269 -4 q 84 515 162 301 q 0 749 41 632 l 218 749 l 376 207 l 529 749 l 738 749 "},\u03A0:{x_min:0,x_max:809,ha:922,o:"m 809 0 l 598 0 l 598 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 809 1012 l 809 0 "},\u0390:{x_min:-162,x_max:364,ha:364,o:"m 364 810 l 235 810 l 235 952 l 364 952 l 364 810 m 301 1064 l 86 810 l -12 810 l 123 1064 l 301 1064 m -33 810 l -162 810 l -162 952 l -33 952 l -33 810 m 200 0 l 0 0 l 0 748 l 200 748 l 200 0 "},g:{x_min:0,x_max:724,ha:839,o:"m 724 48 q 637 -223 724 -142 q 357 -304 551 -304 q 140 -253 226 -304 q 23 -72 36 -192 l 243 -72 q 290 -127 255 -110 q 368 -144 324 -144 q 504 -82 470 -144 q 530 71 530 -38 l 530 105 q 441 25 496 51 q 319 0 386 0 q 79 115 166 0 q 0 377 0 219 q 77 647 0 534 q 317 775 166 775 q 534 656 456 775 l 534 748 l 724 748 l 724 48 m 368 167 q 492 237 447 167 q 530 382 530 297 q 490 529 530 466 q 364 603 444 603 q 240 532 284 603 q 201 386 201 471 q 240 239 201 300 q 368 167 286 167 "},"\xB2":{x_min:0,x_max:463,ha:560,o:"m 463 791 q 365 627 463 706 q 151 483 258 555 l 455 483 l 455 382 l 0 382 q 84 565 0 488 q 244 672 97 576 q 331 784 331 727 q 299 850 331 824 q 228 876 268 876 q 159 848 187 876 q 132 762 132 820 l 10 762 q 78 924 10 866 q 228 976 137 976 q 392 925 322 976 q 463 791 463 874 "},"\u2013":{x_min:0,x_max:704.171875,ha:801,o:"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},\u039A:{x_min:0,x_max:899.671875,ha:969,o:"m 899 0 l 646 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 596 l 603 1013 l 863 1013 l 460 603 l 899 0 "},\u0192:{x_min:-46,x_max:440,ha:525,o:"m 440 609 l 316 609 l 149 -277 l -46 -277 l 121 609 l 14 609 l 14 749 l 121 749 q 159 949 121 894 q 344 1019 208 1019 l 440 1015 l 440 855 l 377 855 q 326 841 338 855 q 314 797 314 827 q 314 773 314 786 q 314 749 314 761 l 440 749 l 440 609 "},e:{x_min:0,x_max:708,ha:808,o:"m 708 321 l 207 321 q 254 186 207 236 q 362 141 298 141 q 501 227 453 141 l 700 227 q 566 36 662 104 q 362 -26 477 -26 q 112 72 213 -26 q 0 369 0 182 q 95 683 0 573 q 358 793 191 793 q 619 677 531 793 q 708 321 708 561 m 501 453 q 460 571 501 531 q 353 612 420 612 q 247 570 287 612 q 207 453 207 529 l 501 453 "},\u03CC:{x_min:0,x_max:764,ha:863,o:"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 m 593 1039 l 391 823 l 293 823 l 415 1039 l 593 1039 "},J:{x_min:0,x_max:649,ha:760,o:"m 649 294 q 573 48 649 125 q 327 -29 497 -29 q 61 82 136 -29 q 0 375 0 173 l 200 375 l 199 309 q 219 194 199 230 q 321 145 249 145 q 418 193 390 145 q 441 307 441 232 l 441 1013 l 649 1013 l 649 294 "},"\xBB":{x_min:-.234375,x_max:526,ha:624,o:"m 526 286 l 297 87 l 296 250 l 437 373 l 297 495 l 297 660 l 526 461 l 526 286 m 229 286 l 0 87 l 0 250 l 140 373 l 0 495 l 0 660 l 229 461 l 229 286 "},"\xA9":{x_min:3,x_max:1007,ha:1104,o:"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 758 410 q 676 255 748 313 q 506 197 605 197 q 298 291 374 197 q 229 499 229 377 q 297 713 229 624 q 494 811 372 811 q 666 760 593 811 q 752 616 739 710 l 621 616 q 587 688 621 658 q 509 719 554 719 q 404 658 441 719 q 368 511 368 598 q 403 362 368 427 q 498 298 438 298 q 624 410 606 298 l 758 410 "},\u03CE:{x_min:0,x_max:945,ha:1051,o:"m 566 528 l 372 528 l 372 323 q 372 298 372 311 q 373 271 372 285 q 360 183 373 211 q 292 142 342 142 q 219 222 243 142 q 203 365 203 279 q 241 565 203 461 q 334 748 273 650 l 130 748 q 36 552 68 650 q 0 337 0 444 q 69 96 0 204 q 276 -29 149 -29 q 390 0 337 -29 q 470 78 444 28 q 551 0 495 30 q 668 -29 608 -29 q 874 96 793 -29 q 945 337 945 205 q 910 547 945 444 q 814 748 876 650 l 610 748 q 703 565 671 650 q 742 365 742 462 q 718 189 742 237 q 651 142 694 142 q 577 190 597 142 q 565 289 565 221 l 565 323 l 566 528 m 718 1039 l 516 823 l 417 823 l 540 1039 l 718 1039 "},"^":{x_min:197.21875,x_max:630.5625,ha:828,o:"m 630 836 l 536 836 l 413 987 l 294 836 l 197 836 l 331 1090 l 493 1090 l 630 836 "},"\xAB":{x_min:0,x_max:526.546875,ha:624,o:"m 526 87 l 297 286 l 297 461 l 526 660 l 526 495 l 385 373 l 526 250 l 526 87 m 229 87 l 0 286 l 0 461 l 229 660 l 229 495 l 88 373 l 229 250 l 229 87 "},D:{x_min:0,x_max:864,ha:968,o:"m 400 1013 q 736 874 608 1013 q 864 523 864 735 q 717 146 864 293 q 340 0 570 0 l 0 0 l 0 1013 l 400 1013 m 398 837 l 206 837 l 206 182 l 372 182 q 584 276 507 182 q 657 504 657 365 q 594 727 657 632 q 398 837 522 837 "},"\u2219":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},\u00FF:{x_min:0,x_max:47,ha:125,o:"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "},w:{x_min:0,x_max:1056.953125,ha:1150,o:"m 1056 749 l 848 0 l 647 0 l 527 536 l 412 0 l 211 0 l 0 749 l 202 749 l 325 226 l 429 748 l 633 748 l 740 229 l 864 749 l 1056 749 "},$:{x_min:0,x_max:704,ha:800,o:"m 682 693 l 495 693 q 468 782 491 749 q 391 831 441 824 l 391 579 q 633 462 562 534 q 704 259 704 389 q 616 57 704 136 q 391 -22 528 -22 l 391 -156 l 308 -156 l 308 -22 q 76 69 152 -7 q 0 300 0 147 l 183 300 q 215 191 190 230 q 308 128 245 143 l 308 414 q 84 505 157 432 q 12 700 12 578 q 89 902 12 824 q 308 981 166 981 l 308 1069 l 391 1069 l 391 981 q 595 905 521 981 q 682 693 670 829 m 308 599 l 308 831 q 228 796 256 831 q 200 712 200 762 q 225 642 200 668 q 308 599 251 617 m 391 128 q 476 174 449 140 q 504 258 504 207 q 391 388 504 354 l 391 128 "},"\\":{x_min:-.03125,x_max:434.765625,ha:532,o:"m 434 -128 l 341 -128 l 0 1039 l 91 1040 l 434 -128 "},\u00B5:{x_min:0,x_max:647,ha:754,o:"m 647 0 l 478 0 l 478 68 q 412 9 448 30 q 330 -11 375 -11 q 261 3 296 -11 q 199 43 226 18 l 199 -277 l 0 -277 l 0 749 l 199 749 l 199 358 q 216 221 199 267 q 322 151 244 151 q 435 240 410 151 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},\u0399:{x_min:42,x_max:250,ha:413,o:"m 250 0 l 42 0 l 42 1013 l 250 1013 l 250 0 "},\u038E:{x_min:0,x_max:1211.15625,ha:1289,o:"m 1211 1012 l 907 376 l 907 0 l 697 0 l 697 376 l 374 1012 l 583 1012 l 802 576 l 1001 1012 l 1211 1012 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"\u2019":{x_min:0,x_max:192,ha:289,o:"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 "},\u039D:{x_min:0,x_max:833,ha:946,o:"m 833 0 l 617 0 l 206 696 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"-":{x_min:27.78125,x_max:413.890625,ha:525,o:"m 413 279 l 27 279 l 27 468 l 413 468 l 413 279 "},Q:{x_min:0,x_max:995.59375,ha:1096,o:"m 995 49 l 885 -70 l 762 42 q 641 -12 709 4 q 497 -29 572 -29 q 135 123 271 -29 q 0 504 0 276 q 131 881 0 731 q 497 1040 270 1040 q 859 883 719 1040 q 994 506 994 731 q 966 321 994 413 q 884 152 938 229 l 995 49 m 730 299 q 767 395 755 344 q 779 504 779 446 q 713 743 779 644 q 505 857 638 857 q 284 745 366 857 q 210 501 210 644 q 279 265 210 361 q 492 157 357 157 q 615 181 557 157 l 508 287 l 620 405 l 730 299 "},\u03C2:{x_min:0,x_max:731.78125,ha:768,o:"m 731 448 l 547 448 q 485 571 531 533 q 369 610 440 610 q 245 537 292 610 q 204 394 204 473 q 322 186 204 238 q 540 133 430 159 q 659 -15 659 98 q 643 -141 659 -80 q 595 -278 627 -202 l 423 -278 q 458 -186 448 -215 q 474 -88 474 -133 q 352 0 474 -27 q 123 80 181 38 q 0 382 0 170 q 98 660 0 549 q 367 777 202 777 q 622 683 513 777 q 731 448 731 589 "},M:{x_min:0,x_max:1019,ha:1135,o:"m 1019 0 l 823 0 l 823 819 l 618 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1012 l 510 241 l 707 1013 l 1019 1013 l 1019 0 "},\u03A8:{x_min:0,x_max:995,ha:1085,o:"m 995 698 q 924 340 995 437 q 590 200 841 227 l 590 0 l 404 0 l 404 200 q 70 340 152 227 q 0 698 0 437 l 0 1013 l 188 1013 l 188 694 q 212 472 188 525 q 404 383 254 383 l 404 1013 l 590 1013 l 590 383 q 781 472 740 383 q 807 694 807 525 l 807 1013 l 995 1013 l 995 698 "},C:{x_min:0,x_max:970.828125,ha:1043,o:"m 970 345 q 802 70 933 169 q 490 -29 672 -29 q 130 130 268 -29 q 0 506 0 281 q 134 885 0 737 q 502 1040 275 1040 q 802 939 668 1040 q 965 679 936 838 l 745 679 q 649 809 716 761 q 495 857 582 857 q 283 747 361 857 q 214 508 214 648 q 282 267 214 367 q 493 154 359 154 q 651 204 584 154 q 752 345 718 255 l 970 345 "},"!":{x_min:0,x_max:204,ha:307,o:"m 204 739 q 182 515 204 686 q 152 282 167 398 l 52 282 q 13 589 27 473 q 0 739 0 704 l 0 1013 l 204 1013 l 204 739 m 204 0 l 0 0 l 0 203 l 204 203 l 204 0 "},"{":{x_min:0,x_max:501.390625,ha:599,o:"m 501 -285 q 229 -209 301 -285 q 176 -35 176 -155 q 182 47 176 -8 q 189 126 189 103 q 156 245 189 209 q 0 294 112 294 l 0 438 q 154 485 111 438 q 189 603 189 522 q 186 666 189 636 q 176 783 176 772 q 231 945 176 894 q 501 1015 306 1015 l 501 872 q 370 833 408 872 q 340 737 340 801 q 342 677 340 705 q 353 569 353 579 q 326 451 353 496 q 207 366 291 393 q 327 289 294 346 q 353 164 353 246 q 348 79 353 132 q 344 17 344 26 q 372 -95 344 -58 q 501 -141 408 -141 l 501 -285 "},X:{x_min:0,x_max:894.453125,ha:999,o:"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 659 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"#":{x_min:0,x_max:1019.453125,ha:1117,o:"m 1019 722 l 969 582 l 776 581 l 717 417 l 919 417 l 868 279 l 668 278 l 566 -6 l 413 -5 l 516 279 l 348 279 l 247 -6 l 94 -6 l 196 278 l 0 279 l 49 417 l 245 417 l 304 581 l 98 582 l 150 722 l 354 721 l 455 1006 l 606 1006 l 507 721 l 673 722 l 776 1006 l 927 1006 l 826 721 l 1019 722 m 627 581 l 454 581 l 394 417 l 567 417 l 627 581 "},\u03B9:{x_min:42,x_max:242,ha:389,o:"m 242 0 l 42 0 l 42 749 l 242 749 l 242 0 "},\u0386:{x_min:0,x_max:995.828125,ha:1072,o:"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 995 0 l 776 0 l 708 208 l 315 208 l 247 0 l 29 0 l 390 1012 l 629 1012 l 995 0 m 652 376 l 509 809 l 369 376 l 652 376 "},")":{x_min:0,x_max:389,ha:486,o:"m 389 357 q 319 14 389 187 q 145 -293 259 -134 l 0 -293 q 139 22 90 -142 q 189 358 189 187 q 139 689 189 525 q 0 1013 90 853 l 145 1013 q 319 703 258 857 q 389 357 389 528 "},\u03B5:{x_min:16.671875,x_max:652.78125,ha:742,o:"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 249 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 "},\u0394:{x_min:0,x_max:981.953125,ha:1057,o:"m 981 0 l 0 0 l 386 1013 l 594 1013 l 981 0 m 715 175 l 490 765 l 266 175 l 715 175 "},"}":{x_min:0,x_max:500,ha:597,o:"m 500 294 q 348 246 390 294 q 315 128 315 209 q 320 42 315 101 q 326 -48 326 -17 q 270 -214 326 -161 q 0 -285 196 -285 l 0 -141 q 126 -97 90 -141 q 154 8 154 -64 q 150 91 154 37 q 146 157 146 145 q 172 281 146 235 q 294 366 206 339 q 173 451 208 390 q 146 576 146 500 q 150 655 146 603 q 154 731 154 708 q 126 831 154 799 q 0 872 90 872 l 0 1015 q 270 944 196 1015 q 326 777 326 891 q 322 707 326 747 q 313 593 313 612 q 347 482 313 518 q 500 438 390 438 l 500 294 "},"\u2030":{x_min:0,x_max:1681,ha:1775,o:"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 m 1430 484 q 1618 404 1548 484 q 1681 228 1681 332 q 1618 51 1681 123 q 1429 -29 1548 -29 q 1241 50 1309 -29 q 1179 227 1179 122 q 1241 403 1179 331 q 1430 484 1311 484 m 1431 120 q 1509 151 1481 120 q 1537 226 1537 183 q 1511 299 1537 270 q 1431 333 1482 333 q 1352 301 1380 333 q 1325 226 1325 269 q 1352 151 1325 182 q 1431 120 1379 120 "},a:{x_min:0,x_max:700,ha:786,o:"m 700 0 l 488 0 q 465 93 469 45 q 365 5 427 37 q 233 -26 303 -26 q 65 37 130 -26 q 0 205 0 101 q 120 409 0 355 q 343 452 168 431 q 465 522 465 468 q 424 588 465 565 q 337 611 384 611 q 250 581 285 611 q 215 503 215 552 l 26 503 q 113 707 26 633 q 328 775 194 775 q 538 723 444 775 q 657 554 657 659 l 657 137 q 666 73 657 101 q 700 33 675 45 l 700 0 m 465 297 l 465 367 q 299 322 358 340 q 193 217 193 287 q 223 150 193 174 q 298 127 254 127 q 417 175 370 127 q 465 297 465 224 "},"\u2014":{x_min:0,x_max:941.671875,ha:1039,o:"m 941 297 l 0 297 l 0 450 l 941 450 l 941 297 "},"=":{x_min:29.171875,x_max:798.609375,ha:828,o:"m 798 502 l 29 502 l 29 635 l 798 635 l 798 502 m 798 204 l 29 204 l 29 339 l 798 339 l 798 204 "},N:{x_min:0,x_max:833,ha:949,o:"m 833 0 l 617 0 l 206 695 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},\u03C1:{x_min:0,x_max:722,ha:810,o:"m 364 -17 q 271 0 313 -17 q 194 48 230 16 l 194 -278 l 0 -278 l 0 370 q 87 656 0 548 q 358 775 183 775 q 626 655 524 775 q 722 372 722 541 q 621 95 722 208 q 364 -17 520 -17 m 360 607 q 237 529 280 607 q 201 377 201 463 q 234 229 201 292 q 355 147 277 147 q 467 210 419 147 q 515 374 515 273 q 471 537 515 468 q 360 607 428 607 "},"2":{x_min:64,x_max:764,ha:828,o:"m 764 685 q 675 452 764 541 q 484 325 637 415 q 307 168 357 250 l 754 168 l 754 0 l 64 0 q 193 301 64 175 q 433 480 202 311 q 564 673 564 576 q 519 780 564 737 q 416 824 475 824 q 318 780 358 824 q 262 633 270 730 l 80 633 q 184 903 80 807 q 415 988 276 988 q 654 907 552 988 q 764 685 764 819 "},"\xAF":{x_min:0,x_max:775,ha:771,o:"m 775 958 l 0 958 l 0 1111 l 775 1111 l 775 958 "},Z:{x_min:0,x_max:804.171875,ha:906,o:"m 804 836 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 830 l 11 830 l 11 1013 l 804 1013 l 804 836 "},u:{x_min:0,x_max:668,ha:782,o:"m 668 0 l 474 0 l 474 89 q 363 9 425 37 q 233 -19 301 -19 q 61 53 123 -19 q 0 239 0 126 l 0 749 l 199 749 l 199 296 q 225 193 199 233 q 316 146 257 146 q 424 193 380 146 q 469 304 469 240 l 469 749 l 668 749 l 668 0 "},k:{x_min:0,x_max:688.890625,ha:771,o:"m 688 0 l 450 0 l 270 316 l 196 237 l 196 0 l 0 0 l 0 1013 l 196 1013 l 196 483 l 433 748 l 675 748 l 413 469 l 688 0 "},\u0397:{x_min:0,x_max:837,ha:950,o:"m 837 0 l 627 0 l 627 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 627 635 l 627 1013 l 837 1013 l 837 0 "},\u0391:{x_min:0,x_max:966.671875,ha:1043,o:"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 809 l 340 376 l 623 376 "},s:{x_min:0,x_max:681,ha:775,o:"m 681 229 q 568 33 681 105 q 340 -29 471 -29 q 107 39 202 -29 q 0 245 0 114 l 201 245 q 252 155 201 189 q 358 128 295 128 q 436 144 401 128 q 482 205 482 166 q 363 284 482 255 q 143 348 181 329 q 25 533 25 408 q 129 716 25 647 q 340 778 220 778 q 554 710 465 778 q 658 522 643 643 l 463 522 q 419 596 458 570 q 327 622 380 622 q 255 606 290 622 q 221 556 221 590 q 339 473 221 506 q 561 404 528 420 q 681 229 681 344 "},B:{x_min:0,x_max:835,ha:938,o:"m 674 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 765 630 797 686 q 674 547 734 575 m 438 621 q 538 646 495 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 438 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"\u2026":{x_min:0,x_max:819,ha:963,o:"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 m 512 0 l 306 0 l 306 207 l 512 207 l 512 0 m 819 0 l 613 0 l 613 207 l 819 207 l 819 0 "},"?":{x_min:1,x_max:687,ha:785,o:"m 687 734 q 621 563 687 634 q 501 454 560 508 q 436 293 436 386 l 251 293 l 251 391 q 363 557 251 462 q 476 724 476 653 q 432 827 476 788 q 332 866 389 866 q 238 827 275 866 q 195 699 195 781 l 1 699 q 110 955 1 861 q 352 1040 210 1040 q 582 963 489 1040 q 687 734 687 878 m 446 0 l 243 0 l 243 203 l 446 203 l 446 0 "},H:{x_min:0,x_max:838,ha:953,o:"m 838 0 l 628 0 l 628 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 628 635 l 628 1013 l 838 1013 l 838 0 "},\u03BD:{x_min:0,x_max:740.28125,ha:828,o:"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},c:{x_min:0,x_max:751.390625,ha:828,o:"m 751 282 q 625 58 725 142 q 384 -26 526 -26 q 107 84 215 -26 q 0 366 0 195 q 98 651 0 536 q 370 774 204 774 q 616 700 518 774 q 751 486 715 626 l 536 486 q 477 570 516 538 q 380 607 434 607 q 248 533 298 607 q 204 378 204 466 q 242 219 204 285 q 377 139 290 139 q 483 179 438 139 q 543 282 527 220 l 751 282 "},"\xB6":{x_min:0,x_max:566.671875,ha:678,o:"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "},\u03B2:{x_min:0,x_max:703,ha:789,o:"m 510 539 q 651 429 600 501 q 703 262 703 357 q 617 53 703 136 q 404 -29 532 -29 q 199 51 279 -29 l 199 -278 l 0 -278 l 0 627 q 77 911 0 812 q 343 1021 163 1021 q 551 957 464 1021 q 649 769 649 886 q 613 638 649 697 q 510 539 577 579 m 344 136 q 452 181 408 136 q 497 291 497 227 q 435 409 497 369 q 299 444 381 444 l 299 600 q 407 634 363 600 q 452 731 452 669 q 417 820 452 784 q 329 857 382 857 q 217 775 246 857 q 199 622 199 725 l 199 393 q 221 226 199 284 q 344 136 254 136 "},\u039C:{x_min:0,x_max:1019,ha:1132,o:"m 1019 0 l 823 0 l 823 818 l 617 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1013 l 509 241 l 708 1013 l 1019 1013 l 1019 0 "},\u038C:{x_min:.15625,x_max:1174,ha:1271,o:"m 676 -29 q 312 127 451 -29 q 179 505 179 277 q 311 883 179 733 q 676 1040 449 1040 q 1040 883 901 1040 q 1174 505 1174 733 q 1041 127 1174 277 q 676 -29 903 -29 m 676 154 q 890 266 811 154 q 961 506 961 366 q 891 745 961 648 q 676 857 812 857 q 462 747 541 857 q 392 506 392 648 q 461 266 392 365 q 676 154 540 154 m 314 1034 l 98 779 l 0 779 l 136 1034 l 314 1034 "},\u0389:{x_min:0,x_max:1248,ha:1361,o:"m 1248 0 l 1038 0 l 1038 450 l 621 450 l 621 0 l 411 0 l 411 1012 l 621 1012 l 621 635 l 1038 635 l 1038 1012 l 1248 1012 l 1248 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"\u2022":{x_min:-27.78125,x_max:691.671875,ha:775,o:"m 691 508 q 588 252 691 358 q 331 147 486 147 q 77 251 183 147 q -27 508 -27 355 q 75 761 -27 655 q 331 868 179 868 q 585 763 479 868 q 691 508 691 658 "},"\xA5":{x_min:0,x_max:836,ha:931,o:"m 195 625 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 l 650 625 l 777 625 l 777 472 l 578 472 l 538 389 l 777 389 l 777 236 l 532 236 l 532 0 l 322 0 l 322 236 l 79 236 l 79 389 l 315 389 l 273 472 l 79 472 l 79 625 l 195 625 "},"(":{x_min:0,x_max:388.890625,ha:486,o:"m 388 -293 l 243 -293 q 70 14 130 -134 q 0 357 0 189 q 69 703 0 526 q 243 1013 129 856 l 388 1013 q 248 695 297 860 q 200 358 200 530 q 248 24 200 187 q 388 -293 297 -138 "},U:{x_min:0,x_max:813,ha:926,o:"m 813 362 q 697 79 813 187 q 405 -29 582 -29 q 114 78 229 -29 q 0 362 0 186 l 0 1013 l 210 1013 l 210 387 q 260 226 210 291 q 408 154 315 154 q 554 226 500 154 q 603 387 603 291 l 603 1013 l 813 1013 l 813 362 "},\u03B3:{x_min:.0625,x_max:729.234375,ha:815,o:"m 729 749 l 457 37 l 457 -278 l 257 -278 l 257 37 q 218 155 243 95 q 170 275 194 215 l 0 749 l 207 749 l 363 284 l 522 749 l 729 749 "},\u03B1:{x_min:-1,x_max:722,ha:835,o:"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 "},F:{x_min:0,x_max:706.953125,ha:778,o:"m 706 837 l 206 837 l 206 606 l 645 606 l 645 431 l 206 431 l 206 0 l 0 0 l 0 1013 l 706 1013 l 706 837 "},"\xAD":{x_min:0,x_max:704.171875,ha:801,o:"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},":":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 m 207 0 l 0 0 l 0 207 l 207 207 l 207 0 "},\u03A7:{x_min:0,x_max:894.453125,ha:978,o:"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 660 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"*":{x_min:115,x_max:713,ha:828,o:"m 713 740 l 518 688 l 651 525 l 531 438 l 412 612 l 290 439 l 173 523 l 308 688 l 115 741 l 159 880 l 342 816 l 343 1013 l 482 1013 l 481 816 l 664 880 l 713 740 "},"\u2020":{x_min:0,x_max:809,ha:894,o:"m 509 804 l 809 804 l 809 621 l 509 621 l 509 0 l 299 0 l 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 "},"\xB0":{x_min:-1,x_max:363,ha:460,o:"m 181 808 q 46 862 94 808 q -1 992 -1 917 q 44 1118 -1 1066 q 181 1175 96 1175 q 317 1118 265 1175 q 363 991 363 1066 q 315 862 363 917 q 181 808 267 808 m 181 908 q 240 933 218 908 q 263 992 263 958 q 242 1051 263 1027 q 181 1075 221 1075 q 120 1050 142 1075 q 99 991 99 1026 q 120 933 99 958 q 181 908 142 908 "},V:{x_min:0,x_max:895.828125,ha:997,o:"m 895 1013 l 550 0 l 347 0 l 0 1013 l 231 1013 l 447 256 l 666 1013 l 895 1013 "},\u039E:{x_min:0,x_max:751.390625,ha:800,o:"m 733 826 l 5 826 l 5 1012 l 733 1012 l 733 826 m 681 432 l 65 432 l 65 617 l 681 617 l 681 432 m 751 0 l 0 0 l 0 183 l 751 183 l 751 0 "},"\xA0":{x_min:0,x_max:0,ha:853},\u03AB:{x_min:-.21875,x_max:836.171875,ha:914,o:"m 610 1046 l 454 1046 l 454 1215 l 610 1215 l 610 1046 m 369 1046 l 212 1046 l 212 1215 l 369 1215 l 369 1046 m 836 1012 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1012 l 208 1012 l 427 576 l 626 1012 l 836 1012 "},"0":{x_min:51,x_max:779,ha:828,o:"m 415 -26 q 142 129 242 -26 q 51 476 51 271 q 141 825 51 683 q 415 984 242 984 q 687 825 585 984 q 779 476 779 682 q 688 131 779 271 q 415 -26 587 -26 m 415 137 q 529 242 485 137 q 568 477 568 338 q 530 713 568 619 q 415 821 488 821 q 303 718 344 821 q 262 477 262 616 q 301 237 262 337 q 415 137 341 137 "},"\u201D":{x_min:0,x_max:469,ha:567,o:"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 m 469 834 q 414 692 469 751 q 277 626 360 634 l 277 697 q 379 831 379 723 l 277 831 l 277 1013 l 469 1013 l 469 834 "},"@":{x_min:0,x_max:1276,ha:1374,o:"m 1115 -52 q 895 -170 1015 -130 q 647 -211 776 -211 q 158 -34 334 -211 q 0 360 0 123 q 179 810 0 621 q 698 1019 377 1019 q 1138 859 981 1019 q 1276 514 1276 720 q 1173 210 1276 335 q 884 75 1062 75 q 784 90 810 75 q 737 186 749 112 q 647 104 698 133 q 532 75 596 75 q 360 144 420 75 q 308 308 308 205 q 398 568 308 451 q 638 696 497 696 q 731 671 690 696 q 805 604 772 647 l 840 673 l 964 673 q 886 373 915 490 q 856 239 856 257 q 876 201 856 214 q 920 188 895 188 q 1084 284 1019 188 q 1150 511 1150 380 q 1051 779 1150 672 q 715 905 934 905 q 272 734 439 905 q 121 363 121 580 q 250 41 121 170 q 647 -103 394 -103 q 863 -67 751 -103 q 1061 26 975 -32 l 1115 -52 m 769 483 q 770 500 770 489 q 733 567 770 539 q 651 596 695 596 q 508 504 566 596 q 457 322 457 422 q 483 215 457 256 q 561 175 509 175 q 671 221 625 175 q 733 333 718 268 l 769 483 "},\u038A:{x_min:0,x_max:619,ha:732,o:"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 619 0 l 411 0 l 411 1012 l 619 1012 l 619 0 "},i:{x_min:14,x_max:214,ha:326,o:"m 214 830 l 14 830 l 14 1013 l 214 1013 l 214 830 m 214 0 l 14 0 l 14 748 l 214 748 l 214 0 "},\u0392:{x_min:0,x_max:835,ha:961,o:"m 675 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 766 630 797 686 q 675 547 734 575 m 439 621 q 539 646 496 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 439 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},\u03C5:{x_min:0,x_max:656,ha:767,o:"m 656 416 q 568 55 656 145 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 191 l 0 749 l 200 749 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 749 l 656 749 l 656 416 "},"]":{x_min:0,x_max:349,ha:446,o:"m 349 -300 l 0 -300 l 0 -154 l 163 -154 l 163 866 l 0 866 l 0 1013 l 349 1013 l 349 -300 "},m:{x_min:0,x_max:1065,ha:1174,o:"m 1065 0 l 866 0 l 866 483 q 836 564 866 532 q 759 596 807 596 q 663 555 700 596 q 627 454 627 514 l 627 0 l 433 0 l 433 481 q 403 563 433 531 q 323 596 374 596 q 231 554 265 596 q 197 453 197 513 l 197 0 l 0 0 l 0 748 l 189 748 l 189 665 q 279 745 226 715 q 392 775 333 775 q 509 744 455 775 q 606 659 563 713 q 695 744 640 713 q 814 775 749 775 q 992 702 920 775 q 1065 523 1065 630 l 1065 0 "},\u03C7:{x_min:0,x_max:759.71875,ha:847,o:"m 759 -299 l 548 -299 l 379 66 l 215 -299 l 0 -299 l 261 233 l 13 749 l 230 749 l 379 400 l 527 749 l 738 749 l 500 238 l 759 -299 "},"8":{x_min:57,x_max:770,ha:828,o:"m 625 516 q 733 416 697 477 q 770 284 770 355 q 675 69 770 161 q 415 -29 574 -29 q 145 65 244 -29 q 57 273 57 150 q 93 413 57 350 q 204 516 130 477 q 112 609 142 556 q 83 718 83 662 q 177 905 83 824 q 414 986 272 986 q 650 904 555 986 q 745 715 745 822 q 716 608 745 658 q 625 516 688 558 m 414 590 q 516 624 479 590 q 553 706 553 659 q 516 791 553 755 q 414 828 480 828 q 311 792 348 828 q 275 706 275 757 q 310 624 275 658 q 414 590 345 590 m 413 135 q 527 179 487 135 q 564 279 564 218 q 525 386 564 341 q 411 436 482 436 q 298 387 341 436 q 261 282 261 344 q 300 178 261 222 q 413 135 340 135 "},\u03AF:{x_min:42,x_max:371.171875,ha:389,o:"m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 m 371 1039 l 169 823 l 71 823 l 193 1039 l 371 1039 "},\u0396:{x_min:0,x_max:804.171875,ha:886,o:"m 804 835 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 829 l 11 829 l 11 1012 l 804 1012 l 804 835 "},R:{x_min:0,x_max:836.109375,ha:947,o:"m 836 0 l 608 0 q 588 53 596 20 q 581 144 581 86 q 581 179 581 162 q 581 215 581 197 q 553 345 581 306 q 428 393 518 393 l 208 393 l 208 0 l 0 0 l 0 1013 l 491 1013 q 720 944 630 1013 q 819 734 819 869 q 778 584 819 654 q 664 485 738 513 q 757 415 727 463 q 794 231 794 358 l 794 170 q 800 84 794 116 q 836 31 806 51 l 836 0 m 462 838 l 208 838 l 208 572 l 452 572 q 562 604 517 572 q 612 704 612 640 q 568 801 612 765 q 462 838 525 838 "},o:{x_min:0,x_max:764,ha:871,o:"m 380 -26 q 105 86 211 -26 q 0 371 0 199 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 371 764 544 q 658 86 764 199 q 380 -26 552 -26 m 379 141 q 515 216 466 141 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 217 204 282 q 379 141 294 141 "},"5":{x_min:59,x_max:767,ha:828,o:"m 767 319 q 644 59 767 158 q 382 -29 533 -29 q 158 43 247 -29 q 59 264 59 123 l 252 264 q 295 165 252 201 q 400 129 339 129 q 512 172 466 129 q 564 308 564 220 q 514 437 564 387 q 398 488 464 488 q 329 472 361 488 q 271 420 297 456 l 93 428 l 157 958 l 722 958 l 722 790 l 295 790 l 271 593 q 348 635 306 621 q 431 649 389 649 q 663 551 560 649 q 767 319 767 453 "},"7":{x_min:65.28125,x_max:762.5,ha:828,o:"m 762 808 q 521 435 604 626 q 409 0 438 244 l 205 0 q 313 422 227 234 q 548 789 387 583 l 65 789 l 65 958 l 762 958 l 762 808 "},K:{x_min:0,x_max:900,ha:996,o:"m 900 0 l 647 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 595 l 604 1013 l 863 1013 l 461 603 l 900 0 "},",":{x_min:0,x_max:206,ha:303,o:"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 "},d:{x_min:0,x_max:722,ha:836,o:"m 722 0 l 530 0 l 530 101 q 303 -26 449 -26 q 72 103 155 -26 q 0 373 0 214 q 72 642 0 528 q 305 775 156 775 q 433 743 373 775 q 530 656 492 712 l 530 1013 l 722 1013 l 722 0 m 361 600 q 234 523 280 600 q 196 372 196 458 q 233 220 196 286 q 358 143 278 143 q 489 216 442 143 q 530 369 530 280 q 491 522 530 456 q 361 600 443 600 "},"\xA8":{x_min:212,x_max:609,ha:933,o:"m 609 1046 l 453 1046 l 453 1216 l 609 1216 l 609 1046 m 369 1046 l 212 1046 l 212 1216 l 369 1216 l 369 1046 "},E:{x_min:0,x_max:761.109375,ha:824,o:"m 761 0 l 0 0 l 0 1013 l 734 1013 l 734 837 l 206 837 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},Y:{x_min:0,x_max:836,ha:931,o:"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},'"':{x_min:0,x_max:357,ha:454,o:"m 357 604 l 225 604 l 225 988 l 357 988 l 357 604 m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"\u2039":{x_min:35.984375,x_max:791.671875,ha:828,o:"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"\u201E":{x_min:0,x_max:483,ha:588,o:"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 m 483 5 q 427 -151 483 -88 q 277 -238 371 -213 l 277 -159 q 361 -100 334 -137 q 388 -2 388 -62 l 277 -2 l 277 205 l 483 205 l 483 5 "},\u03B4:{x_min:6,x_max:732,ha:835,o:"m 732 352 q 630 76 732 177 q 354 -25 529 -25 q 101 74 197 -25 q 6 333 6 174 q 89 581 6 480 q 323 690 178 690 q 66 864 201 787 l 66 1013 l 669 1013 l 669 856 l 348 856 q 532 729 461 789 q 673 566 625 651 q 732 352 732 465 m 419 551 q 259 496 321 551 q 198 344 198 441 q 238 208 198 267 q 357 140 283 140 q 484 203 437 140 q 526 344 526 260 q 499 466 526 410 q 419 551 473 521 "},\u03AD:{x_min:16.671875,x_max:652.78125,ha:742,o:"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 250 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},\u03C9:{x_min:0,x_max:945,ha:1051,o:"m 565 323 l 565 289 q 577 190 565 221 q 651 142 597 142 q 718 189 694 142 q 742 365 742 237 q 703 565 742 462 q 610 749 671 650 l 814 749 q 910 547 876 650 q 945 337 945 444 q 874 96 945 205 q 668 -29 793 -29 q 551 0 608 -29 q 470 78 495 30 q 390 0 444 28 q 276 -29 337 -29 q 69 96 149 -29 q 0 337 0 204 q 36 553 0 444 q 130 749 68 650 l 334 749 q 241 565 273 650 q 203 365 203 461 q 219 222 203 279 q 292 142 243 142 q 360 183 342 142 q 373 271 373 211 q 372 298 372 285 q 372 323 372 311 l 372 528 l 566 528 l 565 323 "},"\xB4":{x_min:0,x_max:132,ha:299,o:"m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"\xB1":{x_min:29,x_max:798,ha:828,o:"m 798 480 l 484 480 l 484 254 l 344 254 l 344 480 l 29 480 l 29 615 l 344 615 l 344 842 l 484 842 l 484 615 l 798 615 l 798 480 m 798 0 l 29 0 l 29 136 l 798 136 l 798 0 "},"|":{x_min:0,x_max:143,ha:240,o:"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},\u03CB:{x_min:0,x_max:656,ha:767,o:"m 535 810 l 406 810 l 406 952 l 535 952 l 535 810 m 271 810 l 142 810 l 142 952 l 271 952 l 271 810 m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 "},"\xA7":{x_min:0,x_max:633,ha:731,o:"m 633 469 q 601 356 633 406 q 512 274 569 305 q 570 197 548 242 q 593 105 593 152 q 501 -76 593 -5 q 301 -142 416 -142 q 122 -82 193 -142 q 43 108 43 -15 l 212 108 q 251 27 220 53 q 321 1 283 1 q 389 23 360 1 q 419 83 419 46 q 310 194 419 139 q 108 297 111 295 q 0 476 0 372 q 33 584 0 537 q 120 659 62 626 q 72 720 91 686 q 53 790 53 755 q 133 978 53 908 q 312 1042 207 1042 q 483 984 412 1042 q 574 807 562 921 l 409 807 q 379 875 409 851 q 307 900 349 900 q 244 881 270 900 q 218 829 218 862 q 324 731 218 781 q 524 636 506 647 q 633 469 633 565 m 419 334 q 473 411 473 372 q 451 459 473 436 q 390 502 430 481 l 209 595 q 167 557 182 577 q 153 520 153 537 q 187 461 153 491 q 263 413 212 440 l 419 334 "},b:{x_min:0,x_max:722,ha:822,o:"m 416 -26 q 289 6 346 -26 q 192 101 232 39 l 192 0 l 0 0 l 0 1013 l 192 1013 l 192 656 q 286 743 226 712 q 415 775 346 775 q 649 644 564 775 q 722 374 722 533 q 649 106 722 218 q 416 -26 565 -26 m 361 600 q 232 524 279 600 q 192 371 192 459 q 229 221 192 284 q 357 145 275 145 q 487 221 441 145 q 526 374 526 285 q 488 523 526 460 q 361 600 442 600 "},q:{x_min:0,x_max:722,ha:833,o:"m 722 -298 l 530 -298 l 530 97 q 306 -25 449 -25 q 73 104 159 -25 q 0 372 0 216 q 72 643 0 529 q 305 775 156 775 q 430 742 371 775 q 530 654 488 709 l 530 750 l 722 750 l 722 -298 m 360 601 q 234 527 278 601 q 197 378 197 466 q 233 225 197 291 q 357 144 277 144 q 488 217 441 144 q 530 370 530 282 q 491 523 530 459 q 360 601 443 601 "},\u03A9:{x_min:-.03125,x_max:1008.53125,ha:1108,o:"m 1008 0 l 589 0 l 589 199 q 717 368 670 265 q 764 580 764 471 q 698 778 764 706 q 504 855 629 855 q 311 773 380 855 q 243 563 243 691 q 289 360 243 458 q 419 199 336 262 l 419 0 l 0 0 l 0 176 l 202 176 q 77 355 123 251 q 32 569 32 459 q 165 908 32 776 q 505 1040 298 1040 q 844 912 711 1040 q 977 578 977 785 q 931 362 977 467 q 805 176 886 256 l 1008 176 l 1008 0 "},\u03CD:{x_min:0,x_max:656,ha:767,o:"m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 m 579 1039 l 378 823 l 279 823 l 401 1039 l 579 1039 "},z:{x_min:0,x_max:663.890625,ha:753,o:"m 663 0 l 0 0 l 0 154 l 411 591 l 25 591 l 25 749 l 650 749 l 650 584 l 245 165 l 663 165 l 663 0 "},"\u2122":{x_min:0,x_max:951,ha:1063,o:"m 405 921 l 255 921 l 255 506 l 149 506 l 149 921 l 0 921 l 0 1013 l 405 1013 l 405 921 m 951 506 l 852 506 l 852 916 l 750 506 l 643 506 l 539 915 l 539 506 l 442 506 l 442 1013 l 595 1012 l 695 625 l 794 1013 l 951 1013 l 951 506 "},\u03AE:{x_min:0,x_max:669,ha:779,o:"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 m 495 1039 l 293 823 l 195 823 l 317 1039 l 495 1039 "},\u0398:{x_min:0,x_max:993,ha:1092,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 133 883 0 733 q 497 1040 272 1040 q 861 883 722 1040 q 993 505 993 733 q 861 127 993 277 q 497 -29 722 -29 m 497 154 q 711 266 631 154 q 782 506 782 367 q 712 746 782 648 q 497 858 634 858 q 281 746 361 858 q 211 506 211 648 q 280 266 211 365 q 497 154 359 154 m 676 430 l 316 430 l 316 593 l 676 593 l 676 430 "},"\xAE":{x_min:3,x_max:1007,ha:1104,o:"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 782 190 l 639 190 q 627 225 632 202 q 623 285 623 248 l 623 326 q 603 411 623 384 q 527 439 584 439 l 388 439 l 388 190 l 257 190 l 257 829 l 566 829 q 709 787 654 829 q 772 654 772 740 q 746 559 772 604 q 675 497 720 514 q 735 451 714 483 q 756 341 756 419 l 756 299 q 760 244 756 265 q 782 212 764 223 l 782 190 m 546 718 l 388 718 l 388 552 l 541 552 q 612 572 584 552 q 641 635 641 593 q 614 695 641 672 q 546 718 587 718 "},"~":{x_min:0,x_max:851,ha:949,o:"m 851 968 q 795 750 851 831 q 599 656 730 656 q 406 744 506 656 q 259 832 305 832 q 162 775 193 832 q 139 656 139 730 l 0 656 q 58 871 0 787 q 251 968 124 968 q 442 879 341 968 q 596 791 544 791 q 691 849 663 791 q 712 968 712 892 l 851 968 "},\u0395:{x_min:0,x_max:761.546875,ha:824,o:"m 761 0 l 0 0 l 0 1012 l 735 1012 l 735 836 l 206 836 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"\xB3":{x_min:0,x_max:467,ha:564,o:"m 467 555 q 393 413 467 466 q 229 365 325 365 q 70 413 134 365 q 0 565 0 467 l 123 565 q 163 484 131 512 q 229 461 190 461 q 299 486 269 461 q 329 553 329 512 q 281 627 329 607 q 187 641 248 641 l 187 722 q 268 737 237 722 q 312 804 312 758 q 285 859 312 837 q 224 882 259 882 q 165 858 189 882 q 135 783 140 834 l 12 783 q 86 930 20 878 q 230 976 145 976 q 379 931 314 976 q 444 813 444 887 q 423 744 444 773 q 365 695 402 716 q 439 640 412 676 q 467 555 467 605 "},"[":{x_min:0,x_max:347.21875,ha:444,o:"m 347 -300 l 0 -300 l 0 1013 l 347 1013 l 347 866 l 188 866 l 188 -154 l 347 -154 l 347 -300 "},L:{x_min:0,x_max:704.171875,ha:763,o:"m 704 0 l 0 0 l 0 1013 l 208 1013 l 208 186 l 704 186 l 704 0 "},\u03C3:{x_min:0,x_max:851.3125,ha:940,o:"m 851 594 l 712 594 q 761 369 761 485 q 658 83 761 191 q 379 -25 555 -25 q 104 87 208 -25 q 0 372 0 200 q 103 659 0 544 q 378 775 207 775 q 464 762 407 775 q 549 750 521 750 l 851 750 l 851 594 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 608 465 608 q 244 530 293 608 q 203 373 203 465 q 244 218 203 283 q 379 142 293 142 "},\u03B6:{x_min:0,x_max:622,ha:701,o:"m 622 -32 q 604 -158 622 -98 q 551 -278 587 -218 l 373 -278 q 426 -180 406 -229 q 446 -80 446 -131 q 421 -22 446 -37 q 354 -8 397 -8 q 316 -9 341 -8 q 280 -11 291 -11 q 75 69 150 -11 q 0 283 0 150 q 87 596 0 437 q 291 856 162 730 l 47 856 l 47 1013 l 592 1013 l 592 904 q 317 660 422 800 q 197 318 197 497 q 306 141 197 169 q 510 123 408 131 q 622 -32 622 102 "},\u03B8:{x_min:0,x_max:714,ha:817,o:"m 357 1022 q 633 833 534 1022 q 714 486 714 679 q 634 148 714 288 q 354 -25 536 -25 q 79 147 175 -25 q 0 481 0 288 q 79 831 0 679 q 357 1022 177 1022 m 510 590 q 475 763 510 687 q 351 862 430 862 q 233 763 272 862 q 204 590 204 689 l 510 590 m 510 440 l 204 440 q 233 251 204 337 q 355 131 274 131 q 478 248 434 131 q 510 440 510 337 "},\u039F:{x_min:0,x_max:995,ha:1092,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 132 883 0 733 q 497 1040 270 1040 q 861 883 722 1040 q 995 505 995 733 q 862 127 995 277 q 497 -29 724 -29 m 497 154 q 711 266 632 154 q 781 506 781 365 q 711 745 781 647 q 497 857 632 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},\u0393:{x_min:0,x_max:703.84375,ha:742,o:"m 703 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 703 1012 l 703 836 "}," ":{x_min:0,x_max:0,ha:375},"%":{x_min:0,x_max:1111,ha:1213,o:"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 "},P:{x_min:0,x_max:771,ha:838,o:"m 208 361 l 208 0 l 0 0 l 0 1013 l 450 1013 q 682 919 593 1013 q 771 682 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 421 837 l 208 837 l 208 544 l 410 544 q 525 579 480 544 q 571 683 571 615 q 527 792 571 747 q 421 837 484 837 "},\u0388:{x_min:0,x_max:1172.546875,ha:1235,o:"m 1172 0 l 411 0 l 411 1012 l 1146 1012 l 1146 836 l 617 836 l 617 621 l 1101 621 l 1101 446 l 617 446 l 617 186 l 1172 186 l 1172 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},\u038F:{x_min:.4375,x_max:1189.546875,ha:1289,o:"m 1189 0 l 770 0 l 770 199 q 897 369 849 263 q 945 580 945 474 q 879 778 945 706 q 685 855 810 855 q 492 773 561 855 q 424 563 424 691 q 470 360 424 458 q 600 199 517 262 l 600 0 l 180 0 l 180 176 l 383 176 q 258 355 304 251 q 213 569 213 459 q 346 908 213 776 q 686 1040 479 1040 q 1025 912 892 1040 q 1158 578 1158 785 q 1112 362 1158 467 q 986 176 1067 256 l 1189 176 l 1189 0 m 314 1092 l 99 837 l 0 837 l 136 1092 l 314 1092 "},_:{x_min:61.109375,x_max:766.671875,ha:828,o:"m 766 -333 l 61 -333 l 61 -190 l 766 -190 l 766 -333 "},\u03AA:{x_min:-56,x_max:342,ha:503,o:"m 342 1046 l 186 1046 l 186 1215 l 342 1215 l 342 1046 m 101 1046 l -56 1046 l -56 1215 l 101 1215 l 101 1046 m 249 0 l 41 0 l 41 1012 l 249 1012 l 249 0 "},"+":{x_min:43,x_max:784,ha:828,o:"m 784 353 l 483 353 l 483 0 l 343 0 l 343 353 l 43 353 l 43 489 l 343 489 l 343 840 l 483 840 l 483 489 l 784 489 l 784 353 "},"\xBD":{x_min:0,x_max:1090,ha:1188,o:"m 1090 380 q 992 230 1090 301 q 779 101 886 165 q 822 94 784 95 q 924 93 859 93 l 951 93 l 973 93 l 992 93 l 1009 93 q 1046 93 1027 93 q 1085 93 1066 93 l 1085 0 l 650 0 l 654 38 q 815 233 665 137 q 965 376 965 330 q 936 436 965 412 q 869 461 908 461 q 806 435 831 461 q 774 354 780 409 l 659 354 q 724 505 659 451 q 870 554 783 554 q 1024 506 958 554 q 1090 380 1090 459 m 868 998 l 268 -28 l 154 -27 l 757 999 l 868 998 m 272 422 l 147 422 l 147 799 l 0 799 l 0 875 q 126 900 91 875 q 170 973 162 926 l 272 973 l 272 422 "},\u03A1:{x_min:0,x_max:771,ha:838,o:"m 208 361 l 208 0 l 0 0 l 0 1012 l 450 1012 q 682 919 593 1012 q 771 681 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 422 836 l 209 836 l 209 544 l 410 544 q 525 579 480 544 q 571 683 571 614 q 527 791 571 747 q 422 836 484 836 "},"'":{x_min:0,x_max:192,ha:289,o:"m 192 834 q 137 692 192 751 q 0 626 82 632 l 0 697 q 101 830 101 726 l 0 830 l 0 1013 l 192 1013 l 192 834 "},\u00AA:{x_min:0,x_max:350,ha:393,o:"m 350 625 l 245 625 q 237 648 241 636 q 233 672 233 661 q 117 611 192 611 q 33 643 66 611 q 0 727 0 675 q 116 846 0 828 q 233 886 233 864 q 211 919 233 907 q 168 931 190 931 q 108 877 108 931 l 14 877 q 56 977 14 942 q 165 1013 98 1013 q 270 987 224 1013 q 329 903 329 955 l 329 694 q 332 661 329 675 q 350 641 336 648 l 350 625 m 233 774 l 233 809 q 151 786 180 796 q 97 733 97 768 q 111 700 97 712 q 149 689 126 689 q 210 713 187 689 q 233 774 233 737 "},"\u0385":{x_min:57,x_max:584,ha:753,o:"m 584 810 l 455 810 l 455 952 l 584 952 l 584 810 m 521 1064 l 305 810 l 207 810 l 343 1064 l 521 1064 m 186 810 l 57 810 l 57 952 l 186 952 l 186 810 "},T:{x_min:0,x_max:809,ha:894,o:"m 809 831 l 509 831 l 509 0 l 299 0 l 299 831 l 0 831 l 0 1013 l 809 1013 l 809 831 "},\u03A6:{x_min:0,x_max:949,ha:1032,o:"m 566 0 l 385 0 l 385 121 q 111 230 222 121 q 0 508 0 340 q 112 775 0 669 q 385 892 219 875 l 385 1013 l 566 1013 l 566 892 q 836 776 732 875 q 949 507 949 671 q 838 231 949 341 q 566 121 728 121 l 566 0 m 566 285 q 701 352 650 285 q 753 508 753 419 q 703 658 753 597 q 566 729 653 720 l 566 285 m 385 285 l 385 729 q 245 661 297 717 q 193 516 193 604 q 246 356 193 427 q 385 285 300 285 "},j:{x_min:-45.828125,x_max:242,ha:361,o:"m 242 830 l 42 830 l 42 1013 l 242 1013 l 242 830 m 242 -119 q 180 -267 242 -221 q 20 -308 127 -308 l -45 -308 l -45 -140 l -24 -140 q 25 -130 8 -140 q 42 -88 42 -120 l 42 748 l 242 748 l 242 -119 "},\u03A3:{x_min:0,x_max:772.21875,ha:849,o:"m 772 0 l 0 0 l 0 140 l 368 526 l 18 862 l 18 1012 l 740 1012 l 740 836 l 315 836 l 619 523 l 298 175 l 772 175 l 772 0 "},"1":{x_min:197.609375,x_max:628,ha:828,o:"m 628 0 l 434 0 l 434 674 l 197 674 l 197 810 q 373 837 318 810 q 468 984 450 876 l 628 984 l 628 0 "},"\u203A":{x_min:36.109375,x_max:792,ha:828,o:"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"<":{x_min:35.984375,x_max:791.671875,ha:828,o:"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"\xA3":{x_min:0,x_max:716.546875,ha:814,o:"m 716 38 q 603 -9 658 5 q 502 -24 548 -24 q 398 -10 451 -24 q 239 25 266 25 q 161 12 200 25 q 77 -29 122 0 l 0 113 q 110 211 81 174 q 151 315 151 259 q 117 440 151 365 l 0 440 l 0 515 l 73 515 q 35 610 52 560 q 15 710 15 671 q 119 910 15 831 q 349 984 216 984 q 570 910 480 984 q 693 668 674 826 l 501 668 q 455 791 501 746 q 353 830 414 830 q 256 795 298 830 q 215 705 215 760 q 249 583 215 655 q 283 515 266 548 l 479 515 l 479 440 l 309 440 q 316 394 313 413 q 319 355 319 374 q 287 241 319 291 q 188 135 263 205 q 262 160 225 152 q 332 168 298 168 q 455 151 368 168 q 523 143 500 143 q 588 152 558 143 q 654 189 617 162 l 716 38 "},t:{x_min:0,x_max:412,ha:511,o:"m 412 -6 q 349 -8 391 -6 q 287 -11 307 -11 q 137 38 177 -11 q 97 203 97 87 l 97 609 l 0 609 l 0 749 l 97 749 l 97 951 l 297 951 l 297 749 l 412 749 l 412 609 l 297 609 l 297 191 q 315 152 297 162 q 366 143 334 143 q 389 143 378 143 q 412 143 400 143 l 412 -6 "},"\xAC":{x_min:0,x_max:704,ha:801,o:"m 704 93 l 551 93 l 551 297 l 0 297 l 0 450 l 704 450 l 704 93 "},\u03BB:{x_min:0,x_max:701.390625,ha:775,o:"m 701 0 l 491 0 l 345 444 l 195 0 l 0 0 l 238 697 l 131 1013 l 334 1013 l 701 0 "},W:{x_min:0,x_max:1291.671875,ha:1399,o:"m 1291 1013 l 1002 0 l 802 0 l 645 777 l 490 0 l 288 0 l 0 1013 l 215 1013 l 388 298 l 534 1012 l 757 1013 l 904 299 l 1076 1013 l 1291 1013 "},">":{x_min:36.109375,x_max:792,ha:828,o:"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},v:{x_min:0,x_max:740.28125,ha:828,o:"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},\u03C4:{x_min:.28125,x_max:618.734375,ha:699,o:"m 618 593 l 409 593 l 409 0 l 210 0 l 210 593 l 0 593 l 0 749 l 618 749 l 618 593 "},\u03BE:{x_min:0,x_max:640,ha:715,o:"m 640 -14 q 619 -157 640 -84 q 563 -299 599 -230 l 399 -299 q 442 -194 433 -223 q 468 -85 468 -126 q 440 -25 468 -41 q 368 -10 412 -10 q 333 -11 355 -10 q 302 -13 311 -13 q 91 60 179 -13 q 0 259 0 138 q 56 426 0 354 q 201 530 109 493 q 106 594 144 553 q 65 699 65 642 q 94 787 65 747 q 169 856 123 828 l 22 856 l 22 1013 l 597 1013 l 597 856 l 497 857 q 345 840 398 857 q 257 736 257 812 q 366 614 257 642 q 552 602 416 602 l 552 446 l 513 446 q 313 425 379 446 q 199 284 199 389 q 312 162 199 184 q 524 136 418 148 q 640 -14 640 105 "},"&":{x_min:-1,x_max:910.109375,ha:1007,o:"m 910 -1 l 676 -1 l 607 83 q 291 -47 439 -47 q 50 100 135 -47 q -1 273 -1 190 q 51 431 -1 357 q 218 568 104 505 q 151 661 169 629 q 120 769 120 717 q 201 951 120 885 q 382 1013 276 1013 q 555 957 485 1013 q 635 789 635 894 q 584 644 635 709 q 468 539 548 597 l 615 359 q 664 527 654 440 l 844 527 q 725 223 824 359 l 910 -1 m 461 787 q 436 848 461 826 q 381 870 412 870 q 325 849 349 870 q 301 792 301 829 q 324 719 301 757 q 372 660 335 703 q 430 714 405 680 q 461 787 461 753 m 500 214 l 318 441 q 198 286 198 363 q 225 204 198 248 q 347 135 268 135 q 425 153 388 135 q 500 214 462 172 "},\u039B:{x_min:0,x_max:894.453125,ha:974,o:"m 894 0 l 666 0 l 447 757 l 225 0 l 0 0 l 344 1013 l 547 1013 l 894 0 "},I:{x_min:41,x_max:249,ha:365,o:"m 249 0 l 41 0 l 41 1013 l 249 1013 l 249 0 "},G:{x_min:0,x_max:971,ha:1057,o:"m 971 -1 l 829 -1 l 805 118 q 479 -29 670 -29 q 126 133 261 -29 q 0 509 0 286 q 130 884 0 737 q 493 1040 268 1040 q 790 948 659 1040 q 961 698 920 857 l 736 698 q 643 813 709 769 q 500 857 578 857 q 285 746 364 857 q 213 504 213 644 q 285 263 213 361 q 505 154 365 154 q 667 217 598 154 q 761 374 736 280 l 548 374 l 548 548 l 971 548 l 971 -1 "},\u03B0:{x_min:0,x_max:655,ha:767,o:"m 583 810 l 454 810 l 454 952 l 583 952 l 583 810 m 186 810 l 57 809 l 57 952 l 186 952 l 186 810 m 516 1039 l 315 823 l 216 823 l 338 1039 l 516 1039 m 655 417 q 567 55 655 146 q 326 -25 489 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 439 247 410 142 q 455 422 455 304 l 455 748 l 655 748 l 655 417 "},"`":{x_min:0,x_max:190,ha:288,o:"m 190 654 l 0 654 l 0 830 q 55 970 0 909 q 190 1040 110 1031 l 190 969 q 111 922 134 952 q 88 836 88 892 l 190 836 l 190 654 "},"\xB7":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},\u03A5:{x_min:-.21875,x_max:836.171875,ha:914,o:"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},r:{x_min:0,x_max:431.9375,ha:513,o:"m 431 564 q 269 536 320 564 q 200 395 200 498 l 200 0 l 0 0 l 0 748 l 183 748 l 183 618 q 285 731 224 694 q 431 768 345 768 l 431 564 "},x:{x_min:0,x_max:738.890625,ha:826,o:"m 738 0 l 504 0 l 366 238 l 230 0 l 0 0 l 252 382 l 11 749 l 238 749 l 372 522 l 502 749 l 725 749 l 488 384 l 738 0 "},\u03BC:{x_min:0,x_max:647,ha:754,o:"m 647 0 l 477 0 l 477 68 q 411 9 448 30 q 330 -11 374 -11 q 261 3 295 -11 q 199 43 226 18 l 199 -278 l 0 -278 l 0 749 l 199 749 l 199 358 q 216 222 199 268 q 322 152 244 152 q 435 240 410 152 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},h:{x_min:0,x_max:669,ha:782,o:"m 669 0 l 469 0 l 469 390 q 449 526 469 472 q 353 607 420 607 q 248 554 295 607 q 201 441 201 501 l 201 0 l 0 0 l 0 1013 l 201 1013 l 201 665 q 303 743 245 715 q 425 772 362 772 q 609 684 542 772 q 669 484 669 605 l 669 0 "},".":{x_min:0,x_max:206,ha:303,o:"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 "},\u03C6:{x_min:-1,x_max:921,ha:990,o:"m 542 -278 l 367 -278 l 367 -22 q 99 92 200 -22 q -1 376 -1 206 q 72 627 -1 520 q 288 769 151 742 l 288 581 q 222 495 243 550 q 202 378 202 439 q 240 228 202 291 q 367 145 285 157 l 367 776 l 515 776 q 807 667 694 776 q 921 379 921 558 q 815 93 921 209 q 542 -22 709 -22 l 542 -278 m 542 145 q 672 225 625 145 q 713 381 713 291 q 671 536 713 470 q 542 611 624 611 l 542 145 "},";":{x_min:0,x_max:208,ha:306,o:"m 208 528 l 0 528 l 0 735 l 208 735 l 208 528 m 208 6 q 152 -151 208 -89 q 0 -238 96 -212 l 0 -158 q 87 -100 61 -136 q 113 0 113 -65 l 0 0 l 0 207 l 208 207 l 208 6 "},f:{x_min:0,x_max:424,ha:525,o:"m 424 609 l 300 609 l 300 0 l 107 0 l 107 609 l 0 609 l 0 749 l 107 749 q 145 949 107 894 q 328 1019 193 1019 l 424 1015 l 424 855 l 362 855 q 312 841 324 855 q 300 797 300 827 q 300 773 300 786 q 300 749 300 761 l 424 749 l 424 609 "},"\u201C":{x_min:0,x_max:468,ha:567,o:"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 m 468 631 l 278 631 l 278 807 q 333 947 278 885 q 468 1017 388 1010 l 468 947 q 366 813 366 921 l 468 813 l 468 631 "},A:{x_min:0,x_max:966.671875,ha:1069,o:"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 810 l 340 376 l 623 376 "},"6":{x_min:57,x_max:771,ha:828,o:"m 744 734 l 544 734 q 500 802 533 776 q 425 828 466 828 q 315 769 359 828 q 264 571 264 701 q 451 638 343 638 q 691 537 602 638 q 771 315 771 449 q 683 79 771 176 q 420 -29 586 -29 q 134 123 227 -29 q 57 455 57 250 q 184 865 57 721 q 452 988 293 988 q 657 916 570 988 q 744 734 744 845 m 426 128 q 538 178 498 128 q 578 300 578 229 q 538 422 578 372 q 415 479 493 479 q 303 430 342 479 q 264 313 264 381 q 308 184 264 240 q 426 128 352 128 "},"\u2018":{x_min:0,x_max:190,ha:289,o:"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 "},\u03CA:{x_min:-55,x_max:337,ha:389,o:"m 337 810 l 208 810 l 208 952 l 337 952 l 337 810 m 74 810 l -55 810 l -55 952 l 74 952 l 74 810 m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 "},\u03C0:{x_min:.5,x_max:838.890625,ha:938,o:"m 838 593 l 750 593 l 750 0 l 549 0 l 549 593 l 287 593 l 287 0 l 88 0 l 88 593 l 0 593 l 0 749 l 838 749 l 838 593 "},\u03AC:{x_min:-1,x_max:722,ha:835,o:"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},O:{x_min:0,x_max:994,ha:1094,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 131 883 0 733 q 497 1040 270 1040 q 860 883 721 1040 q 994 505 994 733 q 862 127 994 277 q 497 -29 723 -29 m 497 154 q 710 266 631 154 q 780 506 780 365 q 710 745 780 647 q 497 857 631 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},n:{x_min:0,x_max:669,ha:782,o:"m 669 0 l 469 0 l 469 452 q 442 553 469 513 q 352 601 412 601 q 245 553 290 601 q 200 441 200 505 l 200 0 l 0 0 l 0 748 l 194 748 l 194 659 q 289 744 230 713 q 416 775 349 775 q 600 700 531 775 q 669 509 669 626 l 669 0 "},"3":{x_min:61,x_max:767,ha:828,o:"m 767 290 q 653 51 767 143 q 402 -32 548 -32 q 168 48 262 -32 q 61 300 61 140 l 250 300 q 298 173 250 219 q 405 132 343 132 q 514 169 471 132 q 563 282 563 211 q 491 405 563 369 q 343 432 439 432 l 343 568 q 472 592 425 568 q 534 701 534 626 q 493 793 534 758 q 398 829 453 829 q 306 789 344 829 q 268 669 268 749 l 80 669 q 182 909 80 823 q 410 986 274 986 q 633 916 540 986 q 735 719 735 840 q 703 608 735 656 q 615 522 672 561 q 727 427 687 486 q 767 290 767 369 "},"9":{x_min:58,x_max:769,ha:828,o:"m 769 492 q 646 90 769 232 q 384 -33 539 -33 q 187 35 271 -33 q 83 224 98 107 l 282 224 q 323 154 286 182 q 404 127 359 127 q 513 182 471 127 q 563 384 563 248 q 475 335 532 355 q 372 315 418 315 q 137 416 224 315 q 58 642 58 507 q 144 877 58 781 q 407 984 239 984 q 694 827 602 984 q 769 492 769 699 m 416 476 q 525 521 488 476 q 563 632 563 566 q 521 764 563 709 q 403 826 474 826 q 297 773 337 826 q 258 649 258 720 q 295 530 258 577 q 416 476 339 476 "},l:{x_min:41,x_max:240,ha:363,o:"m 240 0 l 41 0 l 41 1013 l 240 1013 l 240 0 "},"\xA4":{x_min:40.265625,x_max:727.203125,ha:825,o:"m 727 792 l 594 659 q 620 552 620 609 q 598 459 620 504 l 725 331 l 620 224 l 491 352 q 382 331 443 331 q 273 352 322 331 l 144 224 l 40 330 l 167 459 q 147 552 147 501 q 172 658 147 608 l 40 794 l 147 898 l 283 759 q 383 776 330 776 q 482 759 434 776 l 620 898 l 727 792 m 383 644 q 308 617 334 644 q 283 551 283 590 q 309 489 283 517 q 381 462 335 462 q 456 488 430 462 q 482 554 482 515 q 455 616 482 588 q 383 644 429 644 "},\u03BA:{x_min:0,x_max:691.84375,ha:779,o:"m 691 0 l 479 0 l 284 343 l 196 252 l 196 0 l 0 0 l 0 749 l 196 749 l 196 490 l 440 749 l 677 749 l 416 479 l 691 0 "},"4":{x_min:53,x_max:775.21875,ha:828,o:"m 775 213 l 660 213 l 660 0 l 470 0 l 470 213 l 53 213 l 53 384 l 416 958 l 660 958 l 660 370 l 775 370 l 775 213 m 474 364 l 474 786 l 204 363 l 474 364 "},p:{x_min:0,x_max:722,ha:824,o:"m 415 -26 q 287 4 346 -26 q 192 92 228 34 l 192 -298 l 0 -298 l 0 750 l 192 750 l 192 647 q 289 740 230 706 q 416 775 347 775 q 649 645 566 775 q 722 375 722 534 q 649 106 722 218 q 415 -26 564 -26 m 363 603 q 232 529 278 603 q 192 375 192 465 q 230 222 192 286 q 360 146 276 146 q 487 221 441 146 q 526 371 526 285 q 488 523 526 458 q 363 603 443 603 "},"\u2021":{x_min:0,x_max:809,ha:894,o:"m 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 l 809 804 l 809 621 l 509 621 l 509 387 l 809 387 l 809 205 l 509 205 l 509 0 l 299 0 l 299 205 l 0 205 l 0 387 l 299 387 l 299 621 "},\u03C8:{x_min:0,x_max:875,ha:979,o:"m 522 142 q 657 274 620 163 q 671 352 671 316 l 671 748 l 875 748 l 875 402 q 806 134 875 240 q 525 -22 719 -1 l 525 -278 l 349 -278 l 349 -22 q 65 135 152 -1 q 0 402 0 238 l 0 748 l 204 748 l 204 352 q 231 240 204 295 q 353 142 272 159 l 353 922 l 524 922 l 522 142 "},\u03B7:{x_min:0,x_max:669,ha:779,o:"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 "}},cssFontWeight:"bold",ascender:1216,underlinePosition:-100,cssFontStyle:"normal",boundingBox:{yMin:-333,xMin:-162,yMax:1216,xMax:1681},resolution:1e3,original_font_information:{postscript_name:"Helvetiker-Bold",version_string:"Version 1.00 2004 initial release",vendor_url:"http://www.magenta.gr",full_font_name:"Helvetiker Bold",font_family_name:"Helvetiker",copyright:"Copyright (c) Magenta ltd, 2004.",description:"",trademark:"",designer:"",designer_url:"",unique_font_identifier:"Magenta ltd:Helvetiker Bold:22-10-104",license_url:"http://www.ellak.gr/fonts/MgOpen/license.html",license_description:`Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r
\r
Permission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license ("Fonts") and associated documentation files (the "Font Software"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \r
\r
The above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\r
\r
The Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word "MgOpen", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\r
\r
This License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the "MgOpen" name.\r
\r
The Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \r
\r
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`,manufacturer_name:"Magenta ltd",font_sub_family_name:"Bold"},descender:-334,familyName:"Helvetiker",lineHeight:1549,underlineThickness:50};var sa=new Wc().parse(Dp),Wn="ABCDEFGHIJLMN\xD1OPQRSTUVXYZ".split("");function ce(i,e={}){return new yt({color:i,roughness:.45,metalness:.1,...e})}function Be(i,e=1.5,t={}){return new yt({color:0,emissive:i,emissiveIntensity:e,roughness:.6,...t})}function rn(i,{size:e=1,depth:t=.2,bevel:n=!0,material:s,curveSegments:a=6}={}){let r=new Ii(i,{font:sa,size:e,depth:t,curveSegments:a,bevelEnabled:n,bevelThickness:t*.15,bevelSize:e*.02,bevelSegments:2});r.computeBoundingBox();let o=r.boundingBox;return r.translate(-(o.max.x+o.min.x)/2,-o.min.y,-(o.max.z+o.min.z)/2),new U(r,s||ce(16777215))}var qu={};function Xc(i){if(qu[i])return qu[i];let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.fillStyle="#fff",t.font="bold 92px Arial, Helvetica, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(i,64,70);let n=new Kt(e);return n.colorSpace=Tt,n.anisotropy=4,qu[i]=n}function Np(i=2048,e=1024,t=1){let n=document.createElement("canvas");n.width=i,n.height=e;let s=n.getContext("2d"),a=s.createLinearGradient(0,0,0,e);a.addColorStop(0,"#06104a"),a.addColorStop(.6,"#0c2a9a"),a.addColorStop(1,"#1b46c9"),s.fillStyle=a,s.fillRect(0,0,i,e);let r=t*9301,o=()=>(r=(r*9301+49297)%233280)/233280;s.font="bold 90px Arial",s.fillStyle="rgba(120,170,255,0.10)";for(let c=0;c<40;c++)s.fillText(Wn[Math.floor(o()*25)],o()*i,o()*e);for(let c=0;c<500;c++){let u=o()*i,d=o()*e*.85,h=o()*2.2+.4;s.fillStyle=`rgba(255,255,255,${.4+o()*.6})`,s.beginPath(),s.arc(u,d,h,0,Math.PI*2),s.fill()}for(let c=0;c<25;c++){let u=o()*i,d=o()*e*.7,h=6+o()*14;s.fillStyle="rgba(255,255,255,0.9)",s.beginPath(),s.moveTo(u,d-h),s.lineTo(u+h*.2,d-h*.2),s.lineTo(u+h,d),s.lineTo(u+h*.2,d+h*.2),s.lineTo(u,d+h),s.lineTo(u-h*.2,d+h*.2),s.lineTo(u-h,d),s.lineTo(u-h*.2,d-h*.2),s.fill()}let l=new Kt(n);return l.colorSpace=Tt,l}function $t({body:i=3364266,legs:e=2236979,skin:t=13148282,hair:n=2759184,seated:s=!1,scale:a=1}={}){let r=new Ge,o=ce(i,{roughness:.7}),l=ce(e,{roughness:.8}),c=ce(t,{roughness:.8}),u=ce(n,{roughness:.9}),d=new U(new fi(.2,.45,4,12),o);d.scale.set(1.05,1,.7);let h=new U(new Et(.13,16,12),c),f=new U(new Et(.138,16,12,0,Math.PI*2,0,Math.PI*.55),u);f.rotation.x=-.35;let g=new fi(.06,.45,3,8),_=new U(g,o),m=new U(g,o),p=new fi(.08,.6,3,8),S=new U(p,l),R=new U(p,l);return s?(S.position.set(-.1,.05,.25),R.position.set(.1,.05,.25),S.rotation.x=R.rotation.x=Math.PI/2,d.position.y=.4,h.position.y=.86,f.position.y=.88,_.position.set(-.28,.42,.15),m.position.set(.28,.42,.15),_.rotation.x=m.rotation.x=-.9):(S.position.set(-.1,.4,0),R.position.set(.1,.4,0),d.position.y=1.05,h.position.y=1.5,f.position.y=1.52,_.position.set(-.28,1.05,0),m.position.set(.28,1.05,0),_.rotation.z=.12,m.rotation.z=-.12),r.add(d,h,f,_,m,S,R),r.scale.setScalar(a),r.traverse(M=>{M.isMesh&&(M.castShadow=!0)}),r}function gn(i,e,t,{repeatX:n=1}={}){let s=document.createElement("canvas");s.width=i,s.height=e;let a=s.getContext("2d"),r=new Kt(s);r.colorSpace=Tt,n!==1&&(r.wrapS=ds,r.repeat.x=n);let o={tex:r,canvas:s,update(l){t(a,i,e,l),r.needsUpdate=!0}};return o.update(0),o}function sr({radius:i=14,height:e=1.6,y:t=8,start:n=Math.PI*.6,len:s=Math.PI*.8,tex:a,emissive:r=1.1}){let o=new Je(i,i,e,128,1,!0,n,s),l=o.attributes.uv;for(let f=0;f<l.count;f++)l.setX(f,1-l.getX(f));let c=new ut({map:a,side:Pt,toneMapped:!1});c.color.setScalar(r);let u=new U(o,c);u.position.y=t;let d=new U(new Je(i+.05,i+.05,e+.2,128,1,!0,n,s),ce(1119778,{side:pt,metalness:.6}));d.position.y=t;let h=new Ge;return h.add(d,u),h}function aa(i,{bg1:e="#0c3fd8",bg2:t="#1b6dff",color:n="#ffffff",font:s="700 64px Arial",bote:a=null,every:r=3,n:o=6}={}){return(l,c,u,d)=>{let h=l.createLinearGradient(0,0,0,u);h.addColorStop(0,e),h.addColorStop(1,t),l.fillStyle=h,l.fillRect(0,0,c,u),l.strokeStyle="rgba(255,255,255,0.12)",l.lineWidth=2;for(let g=0;g<c;g+=24)l.beginPath(),l.moveTo(g,0),l.lineTo(g,u),l.stroke();l.fillStyle=n,l.font=s,l.textAlign="center",l.textBaseline="middle";let f=o;for(let g=0;g<f;g++){let _=(g+.5)*c/f,m=a&&g%r===1?a:i;l.shadowColor="rgba(255,255,255,0.8)",l.shadowBlur=12,l.fillText(m,_,u/2+4),l.shadowBlur=0}}}function Ro({c1:i="#0a2fae",c2:e="#40a8ff",ring:t="rgba(160,220,255,0.55)",letras:n=!0,texto:s=null,txtColor:a="#fff",font:r="700 90px Arial"}={}){return(o,l,c,u)=>{let d=o.createRadialGradient(l/2,c/2,10,l/2,c/2,l*.7);d.addColorStop(0,e),d.addColorStop(1,i),o.fillStyle=d,o.fillRect(0,0,l,c),o.lineWidth=10;for(let h=0;h<14;h++){let f=(h*45+u*40)%640;o.strokeStyle=t.replace(/[\d.]+\)$/,`${.6*(1-f/640)})`),o.beginPath(),o.arc(l/2,c/2,f,0,Math.PI*2),o.stroke()}if(n){o.font="700 40px Arial",o.textAlign="center",o.textBaseline="middle";for(let h=0;h<16;h++){let f=h*.9+u*.15,g=160+h*37%260;o.fillStyle="rgba(255,255,255,0.75)",o.fillText(Wn[h*7%25],l/2+Math.cos(f)*g*1.4,c/2+Math.sin(f)*g*.8)}}s&&(o.font=r,o.fillStyle=a,o.textAlign="center",o.textBaseline="middle",o.shadowColor="#000",o.shadowBlur=20,o.fillText(s,l/2,c/2),o.shadowBlur=0)}}function Li(i,e,t,{frame:n=1053727}={}){let s=new Ge,a=new U(new Ie(i+.3,e+.3,.25),ce(n,{metalness:.6,roughness:.35})),r=new U(new Ct(i,e),new ut({map:t.tex,toneMapped:!1}));return r.position.z=.13,s.add(a,r),s}function ar({size:i=60,bg:e="#0a2a8a",letter:t="#3ff0e0",glowColor:n=null,outline:s=!0,count:a=26,seed:r=7,lw:o=10,roughness:l=.12,metalness:c=.5,emissiveIntensity:u=.9}){let d=document.createElement("canvas");d.width=d.height=2048;let h=d.getContext("2d");h.fillStyle=e,h.fillRect(0,0,2048,2048);let f=r,g=()=>(f=(f*9301+49297)%233280)/233280;h.font="700 260px Arial",h.textAlign="center",h.textBaseline="middle",h.lineWidth=o;for(let S=0;S<a;S++){h.save(),h.translate(g()*2048,g()*2048),h.rotate(g()*6.28),n&&(h.shadowColor=n,h.shadowBlur=30);let R=Wn[Math.floor(g()*25)];s?(h.strokeStyle=t,h.strokeText(R,0,0)):(h.fillStyle=t,h.fillText(R,0,0)),h.restore()}let _=new Kt(d);_.colorSpace=Tt,_.anisotropy=8;let m=new yt({map:_,emissive:16777215,emissiveMap:_,emissiveIntensity:u*.35,roughness:l,metalness:c}),p=new U(new Lt(i/2,96),m);return p.rotation.x=-Math.PI/2,p.receiveShadow=!0,p}function Zi(i,e=.3,{top:t=15659775,edge:n=5220607,edgeI:s=2}={}){let a=new Ge,r=new U(new Je(i,i,e,96),[ce(14673653,{roughness:.3}),ce(t,{roughness:.2,metalness:.2}),ce(t)]);r.position.y=e/2,r.receiveShadow=!0,a.add(r);let o=new U(new vt(i+.01,.03,6,128),Be(n,s));return o.rotation.x=Math.PI/2,o.position.y=e*.5,a.add(o),a}function Di({rows:i=6,cols:e=18,width:t=16,seat:n=2776319,step:s=1712960,rail:a=null,railTex:r=null,colorsPublico:o}={}){let l=new Ge;for(let S=0;S<i;S++){let R=new U(new Ie(t,.45*(S+1),1),ce(s,{roughness:.5}));R.position.set(0,.225*(S+1),S*1),l.add(R);let M=new U(new Ie(t,.03,.03),Be(10473727,1.2));M.position.set(0,.45*(S+1),S-.5),l.add(M)}let c=i*e,u=new An(new Ie(.55,.5,.12),ce(n,{roughness:.4}),c),d=new An(new fi(.2,.35,3,8),ce(16777215,{roughness:.8}),c),h=new An(new Et(.12,10,8),ce(16777215,{roughness:.9}),c),f=o||[13777723,3104720,15790320,2236968,15245344,2793568,9058992,5921386,15231648,3850448],g=[1708040,3810322,6963232,12103840,13672528,14726282,10119750],_=new lt,m=new Fe,p=0;for(let S=0;S<i;S++)for(let R=0;R<e;R++){let M=-t/2+(R+.5)*t/e,E=.45*(S+1),w=S;_.makeTranslation(M,E+.3,w+.35),u.setMatrixAt(p,_);let b=Math.random()<.85;_.makeTranslation(M,E+.45,w+.1),b||_.scale(new D(0,0,0)),d.setMatrixAt(p,_),d.setColorAt(p,m.setHex(f[Math.random()*f.length|0])),_.makeTranslation(M,E+.95,w+.1),b||_.scale(new D(0,0,0)),h.setMatrixAt(p,_),h.setColorAt(p,m.setHex(g[Math.random()*g.length|0])),p++}if(l.add(u,d,h),a){let S=new U(new Ct(t,1.1),new yt({color:12574975,transparent:!0,opacity:.22,roughness:.05,metalness:.2,side:pt,map:r||null,emissive:r?16777215:0,emissiveMap:r||null,emissiveIntensity:1.2}));S.position.set(0,.55,-.9),S.rotation.y=Math.PI,l.add(S);let R=new U(new Ie(t,.05,.06),Be(a,1.6));R.position.set(0,1.1,-.9),l.add(R)}return l}function $c(i,{color:e="#ffffff",glowC:t="#9fd8ff",w:n=2048,h:s=256,font:a="700 170px Arial",reps:r=2}={}){let o=document.createElement("canvas");o.width=n,o.height=s;let l=o.getContext("2d");l.clearRect(0,0,n,s),l.font=a,l.textAlign="center",l.textBaseline="middle",l.lineWidth=6,l.strokeStyle=e,l.shadowColor=t,l.shadowBlur=25;for(let u=0;u<r;u++)l.strokeText(i,(u+.5)*n/r,s/2);let c=new Kt(o);return c.colorSpace=Tt,c}function Is(i,e,t=[16777215,8374527,11563263]){let n=new Ge,s=ce(1381914,{metalness:.6,roughness:.4});return e.forEach(([a,r,o],l)=>{let c=new Ge;c.position.set(a,r,o),n.add(c);let u=new U(new Ie(.5,.15,.3),s);u.position.y=.25,c.add(u);let d=new U(new Je(.2,.26,.5,12),s);c.add(d);let h=t[l%t.length],f=new U(new Lt(.2,16),Be(h,3));f.rotation.x=Math.PI/2,f.position.y=-.26,c.add(f);let g=r-.3,_=new U(new Xi(1.1,g,20,1,!0),new ut({color:h,transparent:!0,opacity:.02,blending:Zt,depthWrite:!1,side:pt}));_.position.y=-g/2-.26,c.add(_),i.push(m=>{c.rotation.z=Math.sin(m*.6+l)*.4,c.rotation.x=Math.cos(m*.5+l*1.3)*.3})}),n}function ra({steps:i=8,width:e=2.2,rise:t=.3,run:n=.45,color:s=1712704,light:a=16777215}){let r=new Ge;for(let o=0;o<i;o++){let l=new U(new Ie(e,t*(o+1),n),ce(s,{roughness:.4}));l.position.set(0,t*(o+1)/2,-o*n),r.add(l);let c=new U(new Ie(e*.95,.03,.03),Be(a,1.8));c.position.set(0,t*(o+1)-.03,-o*n+n/2+.01),r.add(c)}return r}function ti({radius:i=1,bulb:e=.09,base:t=1331430,letterColor:n=661072,bulbColor:s=16777215,disc:a=!0,letras:r=Wn}={}){let o=new Ge;if(a){let u=new U(new Lt(i*1.22,64),ce(t,{emissive:t,emissiveIntensity:.35}));u.position.z=-.01,o.add(u)}let l=r.map((u,d)=>{let h=Math.PI/2-d/r.length*Math.PI*2,f=Be(s,.7),g=new U(new Lt(e,20),f);g.position.set(Math.cos(h)*i,Math.sin(h)*i,.005);let _=new U(new Ct(e*1.7,e*1.7),new ut({map:Xc(u),transparent:!0,color:n,depthWrite:!1}));return _.position.z=.003,g.add(_),o.add(g),{mat:f,letter:u,state:"idle"}}),c={idle:[s,.7],cur:[16765952,1.8],ok:[1695834,1.4],ko:[16719904,1.4],pasa:[2788351,1]};return o.userData.bulbs=l,o.userData.paint=(u,d=!0)=>l.forEach((h,f)=>{if(h.state==="idle"&&d){let m=u*6%l.length,p=Math.min(Math.abs(f-m),l.length-Math.abs(f-m));h.mat.emissive.setHex(s),h.mat.emissiveIntensity=.5+Math.max(0,1.3-p*.5);return}let[g,_]=c[h.state];h.mat.emissive.setHex(g),h.mat.emissiveIntensity=h.state==="cur"?_*(.6+.4*Math.sin(u*12)):_}),o}function Ls(i,e,t){return{playing:!1,idx:0,nextAt:0,reset(){[i,e].forEach(s=>s.userData.bulbs.forEach(a=>a.state="idle")),this.idx=0},toggle(){return this.playing=!this.playing,this.playing&&this.reset(),this.playing},update(s){if(this.playing&&s>this.nextAt){this.nextAt=s+.6;let a=Math.random();[[i,0],[e,7]].forEach(([r,o],l)=>{let c=r.userData.bulbs[(this.idx+o)%25];(c.state==="idle"||c.state==="cur")&&(c.state=a<.6?"ok":a<.8?"ko":"pasa",l===0&&t.onRosco&&t.onRosco(c.state))}),this.idx++,this.idx>25&&this.reset(),[[i,0],[e,7]].forEach(([r,o])=>{let l=r.userData.bulbs[(this.idx+o)%25];l.state==="idle"&&(l.state="cur")})}i.userData.paint(s,!this.playing),e.userData.paint(s+2,!this.playing)}}}function Y_({color:i=12576511,transparent:e=!0}={}){let t=new Ge,n=e?new zn({color:i,transparent:!0,opacity:.35,roughness:.05,transmission:0,side:pt}):ce(i,{roughness:.5}),s=ce(12633292,{metalness:.9,roughness:.25}),a=new U(new Je(.26,.28,.04,24),s);a.position.y=.02,t.add(a);let r=new U(new Je(.03,.03,.74,8),s);r.position.y=.38,t.add(r);let o=new U(new vt(.2,.012,6,24),s);o.rotation.x=Math.PI/2,o.position.y=.33,t.add(o);let l=new U(new Ie(.46,.06,.44),n);l.position.y=.78,t.add(l);let c=new U(new Ie(.46,.5,.04),n);return c.position.set(0,1.05,-.22),t.add(c),t}function Bu({color:i=2780159,h:e=1.15,r:t=.28}={}){let n=new Ge,s=new U(new Je(t,t,e,32),ce(657938,{metalness:.7,roughness:.15}));s.position.y=e/2,n.add(s);let a=new U(new Lt(t*.6,32),Be(i,2.2));a.position.set(0,e*.62,t+.003),n.add(a);let r=new U(new Je(t+.06,t+.06,.04,32),ce(2105384,{metalness:.8}));r.position.y=e+.02,n.add(r);let o=new U(new vt(t+.05,.025,6,32),Be(i,2));return o.rotation.x=Math.PI/2,o.position.y=.03,n.add(o),n}function ni({label:i="SALIDA \xB7 ESTUDIOS GROK BOT",style:e="puerta",color:t=5220607}={}){let n=new Ge;if(n.userData.salida=!0,n.name="salida",e==="portal"){for(let a=0;a<3;a++){let r=new U(new vt(2.2+a*.28,.06,10,96),Be(a===1?7323903:16777215,2.2));r.position.y=2.4,n.add(r)}for(let a=0;a<6;a++){let r=new U(new Ie(.42,3.6,.1),ce(659234,{emissive:659234}));r.position.set(-1.25+a*.5,2,-.6),n.add(r);for(let o=0;o<10;o++){let l=new U(new Lt(.035,8),Be(16777215,2));l.position.set(-1.25+a*.5+(o%2?.08:-.08),.6+o*.32,-.54),n.add(l)}}}else{let a=new U(new Ie(2.4,3.2,.25),ce(14212584,{metalness:.5}));a.position.y=1.6,n.add(a);let r=new U(new Ie(2,2.9,.28),ce(1714778,{emissive:t,emissiveIntensity:.15}));r.position.y=1.45,n.add(r);let o=new U(new Ie(2.5,.06,.3),Be(t,2));o.position.y=3.22,n.add(o)}let s=_i(i,{w:4.2,h:.5,color:"#ffffff",bg:"rgba(0,10,40,0.85)",font:"700 46px Arial"});return s.position.set(0,e==="portal"?5.2:3.6,.2),n.add(s),n.traverse(a=>{a.userData.salida=!0}),n}function _i(i,{w:e=4,h:t=1,color:n="#fff",bg:s=null,font:a="700 80px Arial",emissive:r=!0}={}){let o=document.createElement("canvas");o.width=1024,o.height=Math.round(1024*t/e);let l=o.getContext("2d");s&&(l.fillStyle=s,l.fillRect(0,0,o.width,o.height)),l.fillStyle=n,l.font=a,l.textAlign="center",l.textBaseline="middle";let c=parseInt(a.match(/(\d+)px/)[1]);for(;l.measureText(i).width>o.width*.92&&c>10;)c-=4,l.font=a.replace(/\d+px/,c+"px");l.fillText(i,o.width/2,o.height/2);let u=new Kt(o);return u.colorSpace=Tt,new U(new Ct(e,t),new ut({map:u,transparent:!s,toneMapped:!r,side:pt}))}function Ni(i,{hemi:e=[10471679,1054768,.7],key:t=120,puntos:n=[]}={}){i.add(new mi(...e));let s=new Zs(16777215,t,45,Math.PI/6,.5,1.4);s.position.set(0,15,10),s.target.position.set(0,0,-2),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),s.shadow.bias=-5e-4,i.add(s,s.target);for(let[a,r,o,l,c,u=20]of n){let d=new Rn(a,r,u,1.6);d.position.set(o,l,c),i.add(d)}}function Up({r:i=3.2,led:e=2784255,centro:t=null}={}){let n=new Ge,s=new U(new Je(i,i,.06,96),new zn({color:13625599,transparent:!0,opacity:.35,roughness:.05,metalness:.1}));s.position.y=1.08,n.add(s);let a=new U(new Je(i+.02,i+.02,.32,96,1,!0),new ut({color:16777215,side:pt,toneMapped:!1}));a.position.y=.92,n.add(a),n.userData.band=a;let r=new U(new vt(i+.02,.025,6,128),Be(e,2.5));r.rotation.x=Math.PI/2,r.position.y=1.1,n.add(r);let o=r.clone();o.position.y=.76,n.add(o);let l=new U(new Je(i*.45,i*.55,.76,48),ce(15265012,{roughness:.3}));if(l.position.y=.38,n.add(l),t){let c=new U(new Lt(i*.42,64),new ut({map:t,toneMapped:!1}));c.rotation.x=-Math.PI/2,c.position.y=1.115,n.add(c)}return n}function rr(i,e,t,n,{chair:s={transparent:!0},center:a=[0,0]}={}){e.forEach((r,o)=>{let l=Y_(s);if(l.position.set(a[0]+Math.sin(r)*t,0,a[1]+Math.cos(r)*t),l.rotation.y=r+Math.PI,i.add(l),n[o]){let c=$t({...n[o],seated:!0,scale:1.05});c.position.set(0,.8,.02),l.add(c)}})}var or=[{body:2899594,legs:1973800,hair:3810322},{body:13650506,legs:2236970,hair:1118481},{body:15921906,legs:820,hair:6963232},{body:16747040,legs:2236970,hair:2759182},{body:1842210,legs:1842210,hair:12105912},{body:2793600,legs:2236970,hair:13672528}];var Yc={normal:{nombre:"Programa normal"},navidad:{nombre:"Especial Navidad"},nochevieja:{nombre:"Especial Nochevieja"},famosos:{nombre:"Especial famosos"},aniversario:{nombre:"Especial aniversario"}},Fp=["Lola Marquina (cantante)","Bruno Tejada (actor)","Cata Ribas (humorista)","Iker Solano (chef)","Maribel Ondas (locutora)","Rub\xE9n Faro (deportista)","Nerea Vals (bailarina)","Teo Pizarra (mago)","Alma Reyes (escritora)","Quique Br\xEDo (youtuber)","Sonia Lince (presentadora)","Pablo Cometa (m\xFAsico)"];function jc(i,e,t,{centro:n=[0,0,-2],radio:s=9,anios:a="20"}={}){let r=new Ge;r.name="especial-"+e,i.add(r);let[o,l,c]=n;if(e==="navidad"||e==="nochevieja"){let d=new Float32Array(4500),h=new Float32Array(1500*3);for(let _=0;_<1500;_++){d[_*3]=o+(Math.random()-.5)*40,d[_*3+1]=Math.random()*14,d[_*3+2]=c+(Math.random()-.5)*30;let m=new Fe(e==="navidad"?16777215:[16766720,16726891,3920383,16777215][_%4]);h.set([m.r,m.g,m.b],_*3)}let f=new kt;f.setAttribute("position",new fn(d,3)),f.setAttribute("color",new fn(h,3));let g=new Br(f,new za({size:e==="navidad"?.09:.12,vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1}));r.add(g),t.push((_,m)=>{let p=f.attributes.position.array;for(let S=0;S<1500;S++)p[S*3+1]-=m*(e==="navidad"?.6:1.4),p[S*3]+=Math.sin(_+S)*m*.2,p[S*3+1]<0&&(p[S*3+1]=14);f.attributes.position.needsUpdate=!0})}if(e==="navidad"){for(let d of[-1,1]){let h=new Ge;h.position.set(o+d*s,0,c-2),r.add(h);for(let _=0;_<4;_++){let m=new U(new Xi(1.6-_*.32,1.6,16),ce(1010229,{roughness:.8}));m.position.y=1.2+_*.9,h.add(m)}let f=new U(new Je(.2,.25,.6,8),ce(5913114));f.position.y=.3,h.add(f);let g=rn("*",{size:1,depth:.15,material:Be(16766720,2.5)});g.position.y=4.4,h.add(g);for(let _=0;_<40;_++){let m=Math.random()*3.4,p=(1.6-m*.38)*.95,S=Math.random()*6.28,R=new U(new Et(.07,8,6),Be([16719904,16766720,2788351,16777215][_%4],2));R.position.set(Math.cos(S)*p,.9+m,Math.sin(S)*p),h.add(R),t.push(M=>{R.material.emissiveIntensity=1+Math.sin(M*3+_)*1})}}for(let d=0;d<60;d++){let h=Math.PI*.15+d/59*Math.PI*.7,f=new U(new Et(.08,8,6),Be([16719904,2162528,16766720][d%3],2));f.position.set(o+Math.cos(h)*s*1.2,7+Math.sin(d*.5)*.25,c-Math.sin(h)*s*1.2),r.add(f)}let u=rn("FELIZ NAVIDAD",{size:.7,depth:.12,material:Be(16724016,1.6)});u.position.set(o,9.6,c-s),r.add(u)}if(e==="nochevieja"){let u=new Ge;u.position.set(o,9.5,c-s),r.add(u);let d=new U(new Lt(1.3,48),ce(16775392,{emissive:16772812,emissiveIntensity:.6}));u.add(d);let h=new U(new vt(1.32,.08,8,48),Be(16766720,1.5));u.add(h);let f=new U(new Ie(.06,1,.03),ce(1118481));f.geometry.translate(0,.5,0),f.position.z=.03,u.add(f);let g=new U(new Ie(.08,.7,.03),ce(1118481));g.geometry.translate(0,.35,0),g.position.z=.04,g.rotation.z=-.02,u.add(g),t.push(m=>{f.rotation.z=-m*.5});let _=rn("FELIZ A\xD1O NUEVO",{size:.6,depth:.1,material:Be(16766720,1.8)});_.position.set(o,7.4,c-s),r.add(_);for(let m=0;m<14;m++){let p=new U(new Et(.35,16,12),ce([16766720,12632256,16726891][m%3],{metalness:.8,roughness:.2}));p.position.set(o+(Math.random()-.5)*s*2.2,8+Math.random()*3,c+(Math.random()-.5)*s),r.add(p)}}if(e==="famosos"){let u=new U(new Ct(2.4,s*1.6),ce(11538458,{roughness:.9}));u.rotation.x=-Math.PI/2,u.position.set(o,.36,c+s*.9),r.add(u);for(let h=0;h<8;h++){let f=rn("*",{size:1.2,depth:.1,material:Be(16765514,2)});f.position.set(o+(h%2?1:-1)*s*.9,1+(h>>1)*1.8,c-s*.7),r.add(f),t.push(g=>{f.rotation.y=g+h})}let d=rn("ESPECIAL FAMOSOS",{size:.6,depth:.1,material:Be(16765514,1.6)});d.position.set(o,9.4,c-s),r.add(d)}if(e==="aniversario"){let u=rn(a,{size:2.6,depth:.6,material:ce(16765514,{metalness:.9,roughness:.2,emissive:6702080,emissiveIntensity:.6})});u.position.set(o,6.8,c-s),r.add(u);let d=rn("ANIVERSARIO",{size:.6,depth:.1,material:Be(16777215,1.4)});d.position.set(o,6,c-s+.4),r.add(d);for(let h=0;h<24;h++){let f=new U(new Et(.4,16,12),ce([16726891,3920383,16765514,8257387][h%4],{roughness:.3}));f.scale.y=1.2;let g=o+(Math.random()-.5)*s*2.4,_=c+(Math.random()-.5)*s*1.6;f.position.set(g,3+Math.random()*6,_),r.add(f),t.push(m=>{f.position.y+=Math.sin(m+h)*.003})}}return r}var Hu={id:"antena3-2000",nombre:"Antena 3",anios:"2000-2006",disponible:!0},j_={general:{label:"\u{1F3A5} Plano general",pos:[0,6.8,21],target:[0,3.2,-4],mode:null},atril:{label:"\u{1F534}\u{1F535} Atril / Rosco",pos:[0,2.4,7.2],target:[0,1.9,-3],mode:"rosco"},mesa:{label:"\u{1FA91} Mesa",pos:[.5,3.4,8.5],target:[0,2.2,-4],mode:"pruebas"},salida:{label:"\u{1F6AA} Salida",pos:[-7,2.6,8],target:[-16,2.2,8],mode:null},publico:{label:"\u{1F44F} P\xFAblico",pos:[6,3.6,6],target:[-15,3,5],mode:null}},Xn={azulOscuro:531036,azul:1525462,azulClaro:4169983,naranja:16742912,amarillo:16761370,rojo:14685214,blanco:16777215,verde:1618810,marron:9067051};function K_(i,e){let t=new Ge;t.name="plato-antena3-2000",i.add(t);let n=[];i.background=new Fe(131850),i.fog=new $s(131850,35,80),t.add(new mi(7310591,1052704,.55)),t.add(new Qr(4210784,.35));let s=new Zs(16773856,120,40,Math.PI/7,.5,1.4);s.position.set(0,14,10),s.target.position.set(0,1,-2),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),s.shadow.bias=-5e-4,t.add(s,s.target);let a=(me,I,Ue,Se,C,v=18)=>{let k=new Rn(me,I,v,1.6);return k.position.set(Ue,Se,C),t.add(k),k};a(2780159,60,0,6,-8,20),a(16742928,45,-9,4,-6),a(16742928,45,9,4,-6),a(4881919,35,-14,6,4,22),a(4881919,35,14,6,4,22),a(16777215,8,0,4,6,14);let r=new U(new Ct(80,60),ce(660544,{roughness:.22,metalness:.4}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,t.add(r);let o=new Ge;o.position.set(0,0,-2.5),t.add(o);let l=new U(new Je(7.5,7.6,.32,96),[ce(15659775,{roughness:.3}),ce(1058170,{roughness:.25,metalness:.35}),ce(1058170)]);l.position.y=.16,l.receiveShadow=!0,o.add(l);let c=new U(new vt(7.62,.04,8,160),Be(Xn.naranja,2));c.rotation.x=Math.PI/2,c.position.y=.03,o.add(c);let u=new U(new vt(7.45,.035,8,160),Be(16777215,2));u.rotation.x=Math.PI/2,u.position.y=.33,o.add(u);for(let me=0;me<4;me++){let I=new U(new pi(2+me*1.3,2.05+me*1.3,96),Be(me%2?Xn.azulClaro:7327999,.9,{side:pt,transparent:!0,opacity:.8}));I.rotation.x=-Math.PI/2,I.position.y=.325,o.add(I)}let d=new In,h=Math.PI*.22,f=Math.PI*.78;d.absarc(0,0,10,h,f,!1),d.absarc(0,0,8.4,f,h,!0),d.closePath();let g=new U(new Ln(d,{depth:.55,bevelEnabled:!1,curveSegments:64}),[ce(16054015,{roughness:.3}),ce(14673663,{roughness:.3})]);g.rotation.x=-Math.PI/2,g.position.set(0,0,.5),g.receiveShadow=!0,t.add(g);let _=new U(new vt(8.4,.035,6,120,f-h),Be(Xn.naranja,2));_.rotation.set(-Math.PI/2,0,h),_.position.set(0,.05,.5),t.add(_);let m=Np(2048,1024,3),p=new U(new Je(24,24,16,96,1,!0,Math.PI*.62,Math.PI*.76),new yt({map:m,emissive:16777215,emissiveMap:m,emissiveIntensity:.35,side:Pt,roughness:.8}));p.position.set(0,8,11),t.add(p);let S=new Ge;S.position.set(0,0,-10.6),t.add(S);let R=new U(new Ie(9.4,5.6,.5),ce(10466264,{metalness:.7,roughness:.25}));R.position.y=4.3,S.add(R);let M=new U(new Ie(8.9,5.1,.1),ce(1715302,{metalness:.5}));M.position.set(0,4.3,.26),S.add(M);let E=document.createElement("canvas");E.width=1024,E.height=576;let w=new Kt(E);w.colorSpace=Tt;let b=new U(new Ct(8.6,4.84),new ut({map:w,toneMapped:!1}));b.position.set(0,4.3,.32),S.add(b);let x=new Rn(3832831,30,12,1.5);x.position.set(0,4.3,2),S.add(x);let y=new U(new Ie(9.4,1.5,.8),ce(925547,{metalness:.4,roughness:.3}));y.position.y=.75,S.add(y);let A=new U(new Ie(9.4,.06,.05),Be(Xn.azulClaro,3));A.position.set(0,1.4,.42),S.add(A);let P=new Ge;P.position.set(0,7.9,.1),S.add(P);let L=new U(new Ie(8.2,1.5,.5),ce(661072,{roughness:.4,metalness:.4}));P.add(L);let F=new U(new Ie(8.35,1.62,.4),Be(8369919,1.2));F.position.z=-.08,P.add(F);let N=rn("PASAPALABRA",{size:.95,depth:.18,material:new yt({color:16777215,emissive:16777215,emissiveIntensity:1,roughness:.3})});N.position.set(0,-.48,.3),P.add(N);let q=new Ge;P.add(q);let G=Be(16777215,1.4);for(let me of[-1,1])for(let I=0;I<7;I++){let Ue=.7+I%2*.6+Math.random()*.3,Se=new U(new Ie(.07,Ue,.05),G),C=me*(.15+I*.22),v=me*3.8;Se.position.set(v+Math.sin(-C)*-(.5+Ue/2)*me*me,.55+Math.cos(C)*(.5+Ue/2),.1),Se.position.x=v-Math.sin(C)*(.6+Ue/2),Se.rotation.z=C,Se.userData.phase=Math.random()*6,q.add(Se)}n.push(me=>q.children.forEach(I=>{I.scale.y=.75+.25*Math.sin(me*4+I.userData.phase)}));for(let me of[-1,1]){let I=new U(new Ie(1.8,7.5,.4),ce(Xn.naranja,{emissive:16734720,emissiveIntensity:.35}));I.position.set(me*5.7,3.75,0),S.add(I);let Ue=new U(new Ie(.12,7.5,.42),Be(Xn.amarillo,1.6));Ue.position.set(me*5.7-me*.8,3.75,0),S.add(Ue);for(let Se=0;Se<6;Se++){let C=rn(Se%3===2?"c":"e",{size:.42,depth:.05,bevel:!1,material:Be(16773280,2.2)});C.position.set(me*5.7+(Se%2?.35:-.35),1.2+Se*1.05,.22),S.add(C)}}let W=Be(16777215,1.8,{side:pt});[[-7.4,6.5],[-7,3.5],[-6.5,8.6],[7.2,6.9],[7.6,4.1],[6.6,9],[-8.4,5.2],[8.5,2.8]].forEach(([me,I],Ue)=>{let Se=new U(new pi(.22,.29,3),W);Se.position.set(me,I,-10.2),Se.rotation.z=Ue*.7,Se.userData.s=.3+Math.random()*.5,t.add(Se),n.push(C=>{Se.rotation.z+=.004*Se.userData.s,Se.position.y=I+Math.sin(C*Se.userData.s+Ue)*.08})});let K=new Ge;K.position.set(-8.6,0,-9.2),K.rotation.y=.35,t.add(K);let J=new U(new Ie(2.6,9,.9),ce(1858815,{emissive:666265,emissiveIntensity:.6,roughness:.3,metalness:.2}));J.position.y=4.5,K.add(J);let ee=new U(new Je(1.5,1.5,.4,32,1,!1,0,Math.PI),ce(2847999));ee.rotation.set(Math.PI/2,0,Math.PI/2),ee.position.set(0,9,0),K.add(ee);let Ce=rn("A",{size:5.2,depth:.5,material:new yt({color:5223679,emissive:2919679,emissiveIntensity:1.1,transparent:!0,opacity:.92,roughness:.15,metalness:.3})});Ce.position.set(0,1.1,.6),K.add(Ce);let $=rn("A",{size:5.35,depth:.08,bevel:!1,material:Be(12576511,1.4)});$.position.set(0,1,.45),K.add($);let pe=new Ge;pe.position.set(-15.5,0,-9.5),pe.rotation.y=.75,t.add(pe);let ve=new U(new Je(5,5,9,48,1,!0,-Math.PI/2.6,Math.PI/1.3),ce(2068362,{emissive:872298,emissiveIntensity:.6,side:Pt}));ve.position.set(0,4.5,4.4),pe.add(ve),"PASAPALABRA".split("").forEach((me,I,Ue)=>{let Se=Math.PI*.95-I/(Ue.length-1)*Math.PI*.55,C=rn(me,{size:.55,depth:.12,material:ce(15919826,{emissive:5590842,emissiveIntensity:.4})});C.position.set(Math.cos(Se)*3.2,4.2+Math.sin(Se)*3.2,.2),C.rotation.z=Se-Math.PI/2,pe.add(C)});let de=rn("D",{size:2.2,depth:.35,material:ce(15328204,{emissive:4209192,emissiveIntensity:.5})});de.position.set(-2.4,5.6,.4),pe.add(de);let O=(me,I,Ue,Se,C,v=3.6,k=.25)=>{let X=rn(me,{size:v,depth:.8,material:ce(I,{emissive:I,emissiveIntensity:k,roughness:.35})});return X.position.set(Ue,0,Se),X.rotation.y=C,X.castShadow=!0,t.add(X),X};O("F",16053492,-12.6,-2.4,.8,3.4,.12),O("R",Xn.rojo,-10.6,-5.2,.6,4.2,.25),O("P",Xn.naranja,-12.2,1.4,1.1,2.6,.3),O("S",Xn.amarillo,12.4,-2.6,-.8,3.6,.25),O("Z",3654655,10.6,-5.4,-.6,4,.3),O("M",Xn.naranja,12,1.4,-1.1,2.6,.3);for(let me of[-1,1]){let I=new U(new Je(3.5,3.5,7,32,1,!0,0,Math.PI),ce(Xn.naranja,{emissive:16730624,emissiveIntensity:.4,side:pt}));I.position.set(me*11.6,3.5,-7.6),I.rotation.y=me<0?Math.PI*.85:-Math.PI*.85+Math.PI,t.add(I)}let V=K.clone();V.position.set(8.6,0,-9.2),V.rotation.y=-.35,t.add(V),V.remove(V.children[2],V.children[3]);let ue=rn("B",{size:5.2,depth:.5,material:Ce.material});ue.position.set(0,1.1,.6),V.add(ue);let Le=rn("B",{size:5.35,depth:.08,bevel:!1,material:$.material});Le.position.set(0,1,.45),V.add(Le);let ge=J_(n,e);ge.position.set(0,.32,.6),t.add(ge);let Xe=new U(new Ie(4.6,.3,1.4),ce(926832));Xe.position.set(0,.47,-1.05),ge.add(Xe);let rt=$t({body:15849160,legs:2237498,hair:1905676,scale:1.12});rt.position.set(-1.25,.15,-1.1),ge.add(rt);let re=$t({body:15263984,legs:2829117,hair:2825232,scale:1.12});re.position.set(1.25,.15,-1.1),ge.add(re);let B=new U(new Ie(.25,.08,.02),Be(Xn.rojo,2));B.position.set(-1.33,1.38,-.95),ge.add(B);let te=new U(new Ie(.25,.08,.02),Be(2780159,2));te.position.set(1.17,1.38,-.95),ge.add(te);let Q=t3(n);Q.position.set(0,.32,-3.2),t.add(Q),t.add(qp(-1)),t.add(qp(1)),t.add(n3(n));let he=ni({style:"puerta",color:16742912});he.position.set(-17,0,8),he.rotation.y=Math.PI/2,t.add(he),e.especial&&e.especial!=="normal"&&jc(t,e.especial,n,{centro:[0,0,-3],radio:10,anios:"5"}),n.push(me=>e3(E,me,e.screenMode,e.logoPantalla)),n.push(()=>{w.needsUpdate=!0});let Ne="rosco",ke={atril:0,mesa:-4.5};Q.position.y=ke.mesa,Q.visible=!1;function $e(me){Ne=me,e.screenMode=me}return $e("rosco"),n.push((me,I)=>{let Ue=Ne==="rosco"?.32:-4.5,Se=Ne==="pruebas"?.32:-4.5,C=1-Math.pow(.002,I);ge.position.y+=(Ue-ge.position.y)*C,Q.position.y+=(Se-Q.position.y)*C,ge.visible=ge.position.y>-4.3,Q.visible=Q.position.y>-4.3}),{root:t,clickables:[he],setMode:$e,getMode:()=>Ne,rosco:ge.userData.rosco,update(me,I){for(let Ue of n)Ue(me,I)},dispose(){i.remove(t)}}}function Z_(i=1.35,e=1.08,t=.62,n=.95){let s=new In;return s.moveTo(-i+e*Math.cos(n),e*Math.sin(n)),s.quadraticCurveTo(0,t,i-e*Math.cos(n),e*Math.sin(n)),s.absarc(i,0,e,Math.PI-n,-(Math.PI-n),!0),s.quadraticCurveTo(0,-t,-i+e*Math.cos(n),-e*Math.sin(n)),s.absarc(-i,0,e,-n,n,!0),s}function J_(i,e){let t=new Ge;t.name="atril";let n=new Ge;n.position.y=1.5,n.rotation.x=-.12,t.add(n);let s=Z_(),a=new Ln(s,{depth:.45,bevelEnabled:!0,bevelThickness:.08,bevelSize:.08,bevelSegments:4,curveSegments:48}),r=ce(15774720,{emissive:16746496,emissiveIntensity:.08,roughness:.5}),o=ce(16747008,{emissive:16734720,emissiveIntensity:.3,roughness:.4}),l=new U(a,[r,o]);l.position.z=-.45,l.castShadow=!0,n.add(l);let c=.081,u=s.getSpacedPoints(110),d=new Et(.028,8,6),h=new An(d,Be(16774336,1.2),u.length-1),f=new lt;for(let L=0;L<u.length-1;L++){let F=u[L],N=u[(L+u.length-2)%(u.length-1)],q=u[L+1],G=q.x-N.x,W=q.y-N.y,se=Math.hypot(G,W),K=-W/se,J=G/se;f.makeTranslation(F.x+K*.07,F.y+J*.07,c),h.setMatrixAt(L,f)}n.add(h);let g=new U(new Ie(.03,1.15,.01),ce(11758080));g.position.set(0,0,c),n.add(g);let _={};for(let[L,F,N,q]of[["rojo",-1.35,14881820,7995400],["azul",1.35,1331430,401008]]){let G=new Ge;G.position.set(F,0,c+.002),n.add(G);let W=new U(new Lt(.95,64),ce(16773296,{emissive:16769162,emissiveIntensity:.2}));G.add(W);let se=new U(new Lt(.9,64),ce(N,{emissive:N,emissiveIntensity:.3,roughness:.3}));se.position.z=.003,G.add(se);let K=new U(new Lt(.5,48),ce(q,{emissive:N,emissiveIntensity:.35}));K.position.z=.006,G.add(K);let J=new U(new Et(.3,14,10),new ut({color:14673663,wireframe:!0,transparent:!0,opacity:.8}));J.scale.z=.25,J.position.z=.04,G.add(J),i.push(Ce=>{J.rotation.y=Ce*.6});let ee=[];Wn.forEach((Ce,$)=>{let pe=Math.PI/2-$/Wn.length*Math.PI*2,ve=Be(16777215,.9),de=new U(new Lt(.088,20),ve);de.position.set(Math.cos(pe)*.71,Math.sin(pe)*.71,.01);let O=new ut({map:Xc(Ce),transparent:!0,color:661072,depthWrite:!1}),V=new U(new Ct(.15,.15),O);V.position.z=.003,de.add(V),G.add(de),ee.push({mesh:de,mat:ve,letter:Ce,state:"idle"})}),_[L]=ee}let m=new In;m.moveTo(0,.13),m.lineTo(.2,0),m.lineTo(0,-.13),m.closePath();let p=new Ln(m,{depth:.03,bevelEnabled:!1}),S=new U(p,Be(16718362,1.6));S.rotation.z=Math.PI,S.position.set(-.14,.12,c),n.add(S);let R=new U(p,Be(2345215,1.6));R.position.set(.14,.12,c),n.add(R);let M=document.createElement("canvas");M.width=512,M.height=96;let E=new Kt(M);E.colorSpace=Tt;let w=new U(new Ie(1.25,.28,.12),ce(5913104,{metalness:.5}));w.position.set(0,-.86,c+.02),n.add(w);let b=new U(new Ct(1.15,.2),new ut({map:E,toneMapped:!1}));b.position.set(0,-.86,c+.081),n.add(b);let x=new U(new Je(.35,.6,.45,24),ce(926832,{metalness:.5,roughness:.3}));x.position.set(0,.22,-.2),t.add(x);let y=new U(new vt(.6,.03,6,48),Be(Xn.naranja,3));y.rotation.x=Math.PI/2,y.position.set(0,.02,-.2),t.add(y);let A={playing:!1,idx:0,timer:150,nextAt:0,reset(){for(let L of["rojo","azul"])_[L].forEach(F=>F.state="idle");this.idx=0,this.timer=150},toggle(){return this.playing=!this.playing,this.playing&&this.reset(),this.playing}};t.userData.rosco=A;let P={idle:[16777215,.6],cur:[16765952,1.8],ok:[1695834,1.4],ko:[16719904,1.4],pasa:[2788351,1]};return i.push((L,F)=>{for(let N of["rojo","azul"]){let q=_[N];q.forEach((G,W)=>{let se=G.state;if(!A.playing){let ee=(L*6+(N==="azul"?12:0))%q.length,Ce=Math.min(Math.abs(W-ee),q.length-Math.abs(W-ee));G.mat.emissive.setHex(16777215),G.mat.emissiveIntensity=.5+Math.max(0,1.3-Ce*.5);return}N==="rojo"&&W===A.idx%25&&se==="idle"&&(se="cur"),N==="azul"&&W===(A.idx+7)%25&&se==="idle"&&(se="cur");let[K,J]=P[se];G.mat.emissive.setHex(K),G.mat.emissiveIntensity=se==="cur"?J*(.6+.4*Math.sin(L*12)):J})}if(A.playing&&L>A.nextAt){A.nextAt=L+.6;let N=Math.random();for(let[q,G]of[["rojo",0],["azul",7]]){let W=_[q][(A.idx+G)%25];W.state==="idle"&&(W.state=N<.6?"ok":N<.8?"ko":"pasa"),q==="rojo"&&e.onRosco&&e.onRosco(W.state)}A.idx++,A.timer=Math.max(0,A.timer-3),A.idx>25&&A.reset()}Q_(M,L,A),E.needsUpdate=!0}),t.traverse(L=>{L.isMesh&&(L.castShadow=!0)}),t}function Q_(i,e,t){let n=i.getContext("2d");if(n.fillStyle="#120600",n.fillRect(0,0,i.width,i.height),n.font='bold 64px "Courier New", monospace',n.textBaseline="middle",n.shadowColor="#ff9a00",n.shadowBlur=16,n.fillStyle="#ffb020",t.playing)n.textAlign="left",n.fillText(String(Math.ceil(t.timer)).padStart(3,"0"),20,52),n.textAlign="right",n.fillText(String(Math.ceil(t.timer*.9)).padStart(3,"0"),i.width-20,52);else{let s="  PASAPALABRA  \xB7  ANTENA 3  \xB7  2000-2006  ",a=n.measureText(s).width,r=-(e*120%a);n.textAlign="left",n.fillText(s+s,r,52)}n.shadowBlur=0,n.fillStyle="rgba(0,0,0,0.35)";for(let s=0;s<i.height;s+=6)n.fillRect(0,s,i.width,2)}function e3(i,e,t,n){let s=i.getContext("2d"),a=i.width,r=i.height,o=s.createRadialGradient(a/2,r/2,40,a/2,r/2,a*.7);o.addColorStop(0,"#3d8cff"),o.addColorStop(.55,"#1238b8"),o.addColorStop(1,"#06135a"),s.fillStyle=o,s.fillRect(0,0,a,r),s.font="bold 54px Arial",s.textAlign="center",s.textBaseline="middle";for(let p=0;p<26;p++){let S=(p*97+e*30*(1+p%3))%(a+100)-50,R=p*173%r;s.fillStyle=`rgba(160,200,255,${.12+p%4*.04})`,s.save(),s.translate(S,R),s.rotate(Math.sin(e+p)*.6),s.fillText(String.fromCharCode(65+p%26),0,0),s.restore()}let l=a/2-40,c=r/2-20,u=190,d=s.createRadialGradient(l-50,c-60,20,l,c,u);d.addColorStop(0,"#9fd2ff"),d.addColorStop(1,"#1a5be0"),s.fillStyle=d,s.beginPath(),s.arc(l,c,u,0,Math.PI*2),s.fill(),s.strokeStyle="rgba(255,255,255,0.45)",s.lineWidth=2;for(let p=-3;p<=3;p++)s.beginPath(),s.ellipse(l,c+p*u/4,Math.sqrt(1-(p/4)**2)*u,6,0,0,Math.PI*2),s.stroke();for(let p=0;p<6;p++){let S=(e*.5+p/6)%1*Math.PI;s.beginPath(),s.ellipse(l,c,Math.abs(Math.cos(S))*u,u,0,0,Math.PI*2),s.stroke()}if(n&&n.complete&&n.naturalWidth){let p=Math.min(a*.7/n.naturalWidth,r*.6/n.naturalHeight)*(1+.03*Math.sin(e*3)),S=n.naturalWidth*p,R=n.naturalHeight*p;s.drawImage(n,(a-S)/2,(r-R)/2,S,R);return}s.save(),s.translate(a/2+30,r/2+10),s.rotate(-.12);let h=t==="pruebas"?"PALABRA":"PASAPALABRA";s.font="italic 900 96px Arial Black, Arial, sans-serif";let f=s.measureText(h).width;s.fillStyle="rgba(10,30,90,0.75)",s.fillRect(-f/2-30,-62,f+60,124),s.strokeStyle="#ffe14a",s.lineWidth=4,s.strokeRect(-f/2-30,-62,f+60,124);let g=-f/2;for(let p=0;p<h.length;p++){let S=h[p],R=s.measureText(S).width,M=Math.sin(e*5-p*.6)*10;s.lineWidth=10,s.strokeStyle="#0b5a1f",s.strokeText(S,g+R/2,M);let E=s.createLinearGradient(0,M-40,0,M+40);E.addColorStop(0,"#f4ff6a"),E.addColorStop(1,"#5fd31f"),s.fillStyle=E,s.fillText(S,g+R/2,M),g+=R}s.restore();let _=e*260%(a*2)-a/2,m=s.createLinearGradient(_-80,0,_+80,0);m.addColorStop(0,"rgba(255,255,255,0)"),m.addColorStop(.5,"rgba(255,255,255,0.18)"),m.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=m,s.fillRect(0,0,a,r)}function t3(i){let e=new Ge;e.name="mesa";let t=1.7,n=2.9,s=1.05,a=new In;a.absarc(0,0,n,Math.PI,Math.PI*2,!1),a.absarc(0,0,t,Math.PI*2,Math.PI,!0),a.closePath();let r=new Ln(a,{depth:.1,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:2,curveSegments:64}),o=new U(r,ce(3821512,{roughness:.25,metalness:.3}));o.rotation.x=-Math.PI/2,o.position.y=s,o.castShadow=o.receiveShadow=!0,e.add(o);let l=new U(new vt(n+.03,.06,8,96,Math.PI),Be(16747024,1.8));l.rotation.x=Math.PI/2,l.position.y=s+.06,e.add(l);let c=new U(new vt(t-.02,.04,8,64,Math.PI),Be(16756768,1.4));c.rotation.x=Math.PI/2,c.position.y=s+.06,e.add(c);let u=new U(new Je(n-.15,n-.25,s,64,1,!0,-Math.PI/2,Math.PI),ce(16756736,{emissive:16742912,emissiveIntensity:.45,side:pt}));u.position.y=s/2,e.add(u);let d=new U(new Je(n-.13,n-.13,.16,64,1,!0,-Math.PI/2,Math.PI),ce(16738816,{emissive:16730624,emissiveIntensity:.7}));d.position.y=s-.12,e.add(d);let h=new U(new Je(t+.1,t+.1,s,48,1,!0,-Math.PI/2,Math.PI),ce(1714810,{side:pt}));h.position.y=s/2,e.add(h);let f=document.createElement("canvas");f.width=f.height=128;let g=f.getContext("2d");g.fillStyle="#c9d0dc",g.fillRect(0,0,128,128),g.fillStyle="#6d7686";for(let b=4;b<128;b+=8)for(let x=b/8%2*4+2;x<128;x+=8)g.beginPath(),g.arc(x,b,2.2,0,7),g.fill();let _=new Kt(f);_.wrapS=_.wrapT=ds,_.repeat.set(3,3);let m=new U(new Je(n-.13,n-.13,s*.75,24,1,!0,-.28,.56),ce(16777215,{map:_,metalness:.8,roughness:.3,side:pt}));m.position.y=s*.38,e.add(m);let p=ce(1118481,{metalness:.6});for(let b of[-1.15,-.75,-.35,.35,.75,1.15,0]){let x=b===0?t+.25:n-.35,y=new U(new Je(.012,.012,.45,6),p);y.position.set(Math.sin(b)*x,s+.3,Math.cos(b)*x),y.rotation.x=b===0?-.5:.5,y.rotation.z=-b*.3,e.add(y);let A=new U(new Ie(.3,.01,.22),ce(16185072));A.position.set(Math.sin(b)*(x-.05),s+.11,Math.cos(b)*(x-.05)),A.rotation.y=b,e.add(A)}let S=[],R=[{body:13187642,hair:3810322},{body:2763306,hair:6961948},{body:1842210,hair:2759182},{body:15986662,hair:2759182},{body:5906234,hair:1118481},{body:2894906,hair:12105912}];[-1.55,-1.18,-.82,.82,1.18,1.55].forEach((b,x)=>{let y=n+.55,A=Op(x<3?4864650:11565626);A.position.set(Math.sin(b)*y,0,Math.cos(b)*y),A.lookAt(0,0,0),e.add(A);let P=$t({...R[x],legs:1973800,seated:!0,scale:1.05});P.position.set(0,.78,.02),A.add(P),S.push(A)});let E=$t({body:1118488,legs:1118488,hair:2364424,seated:!0,scale:1.05});E.position.set(0,.78,t-.75),e.add(E);let w=Op(3811866);return w.position.set(0,0,t-.8),e.add(w),w.remove(w.getObjectByName("back")),e.traverse(b=>{b.isMesh&&(b.castShadow=!0)}),e}function Op(i){let e=new Ge,t=ce(i,{roughness:.55}),n=ce(12106952,{metalness:.9,roughness:.25}),s=new U(new Je(.25,.28,.04,24),n);s.position.y=.02,e.add(s);let a=new U(new Je(.035,.035,.72,8),n);a.position.y=.38,e.add(a);let r=new U(new vt(.2,.012,6,24),n);r.rotation.x=Math.PI/2,r.position.y=.35,e.add(r);let o=new U(new Je(.24,.22,.09,24),t);o.position.y=.76,e.add(o);let l=new U(new Je(.25,.25,.42,24,1,!0,Math.PI*.7,Math.PI*.6),ce(i,{side:pt,roughness:.55}));return l.position.set(0,1,0),l.name="back",e.add(l),e}function qp(i){let e=new Ge;e.name="gradas";let t=7,n=20,s=-3,a=13,r=ce(793173,{roughness:.6});for(let b=0;b<t;b++){let x=new U(new Ie(1.1,.5*(b+1),a-s+1),r);x.position.set(i*(14+b*1.1),.25*(b+1),(s+a)/2),x.receiveShadow=!0,e.add(x);let y=new U(new Ie(.04,.04,a-s+1),Be(b%2?4164863:16747040,1.4));y.position.set(i*(14+b*1.1-.55),.5*(b+1),(s+a)/2),e.add(y)}let o=new U(new Ie(.08,.9,a-s+1),ce(14673663,{metalness:.7,roughness:.3}));o.position.set(i*13.3,.45,(s+a)/2),e.add(o);let l=new U(new Ie(.1,.05,a-s+1),Be(3645695,2.5));l.position.set(i*13.3,.92,(s+a)/2),e.add(l);let c=t*n,u=new fi(.2,.35,3,8),d=new Et(.12,10,8),h=new An(u,ce(16777215,{roughness:.8}),c),f=new An(d,ce(16777215,{roughness:.9}),c),g=[13777723,3104720,15790320,2236968,15245344,2793568,9058992,5921386,15231648,3850448],_=[14726282,13146222,10119750,1578e4,8015408],m=[1708040,3810322,6963232,12103840,13672528],p=new lt,S=new en,R=new D(1,1,1),M=new D,E=new Fe,w=0;for(let b=0;b<t;b++)for(let x=0;x<n;x++){let y=i*(14+b*1.1)+i*.1,A=.5*(b+1),P=s+(x+.5)*(a-s)/n+(Math.random()-.5)*.15;M.set(y,A+.5,P),p.compose(M,S,R),h.setMatrixAt(w,p),h.setColorAt(w,E.setHex(g[Math.random()*g.length|0])),M.set(y,A+1,P),p.compose(M,S,R),f.setMatrixAt(w,p),f.setColorAt(w,E.setHex(Math.random()<.6?m[Math.random()*m.length|0]:_[Math.random()*_.length|0])),w++}return e.add(h,f),e}function n3(i){let e=new Ge;e.name="techo";let t=ce(10133674,{metalness:.85,roughness:.35}),n=12.5;for(let o=-10;o<=14;o+=4){let l=new U(new Ie(34,.25,.25),t);l.position.set(0,n,o),e.add(l);let c=l.clone();c.position.y=n+.6,e.add(c)}for(let o=-16;o<=16;o+=4){let l=new U(new Ie(.25,.25,24),t);l.position.set(o,n+.3,2),e.add(l)}let s=ce(1579036,{metalness:.6,roughness:.4}),a=[16777215,7317759,16751152,16777215,16732112,5963720],r=0;for(let o=-10;o<=14;o+=4)for(let l=-14;l<=14;l+=4){r++;let c=new Ge;c.position.set(l,n-.35,o),e.add(c);let u=new U(new Je(.22,.3,.55,12),s);c.add(u);let d=a[r%a.length],h=new U(new Lt(.26,16),Be(d,3));if(h.rotation.x=Math.PI/2,h.position.y=-.28,c.add(h),r%4===0){let g=new U(new Xi(1.2,11,24,1,!0),new ut({color:d,transparent:!0,opacity:.018,blending:Zt,depthWrite:!1,side:pt}));g.position.y=-11/2-.3,c.add(g);let _=r*.7;i.push(m=>{c.rotation.z=Math.sin(m*.5+_)*.35,c.rotation.x=Math.cos(m*.4+_)*.25})}}return e}var Gu={};as(Gu,{build:()=>s3,cameras:()=>i3,info:()=>ku});function Ui(i,e,{nombre:t,fondo:n=132108,niebla:s=[40,90],especial:a=null,especialOpts:r={}},o){let l=new Ge;l.name=t,i.add(l),i.background=new Fe(n),i.fog=new $s(n,s[0],s[1]);let c=[],u="rosco",d=o(l,c)||{};return a&&a!=="normal"&&jc(l,a,c,r),l.traverse(h=>{h.isMesh&&!h.material.transparent&&(h.castShadow=h.castShadow||!1)}),{root:l,rosco:d.rosco,clickables:d.clickables||[],setMode(h){u=h,e.screenMode=h,d.onMode&&d.onMode(h)},getMode:()=>u,update(h,f){for(let g of c)g(h,f)},dispose(){i.remove(l),l.traverse(h=>{h.geometry&&h.geometry.dispose()})}}}function Kc(i,e,t,n,s,{texto:a="Pasapalabra",colorTexto:r="#ffffff",font:o="700 72px Arial",colores:l=["#ffffff","#ff8a20","#9fd0ff"]}={}){i.save();let c=i.createRadialGradient(e-n*.3,t-n*.3,5,e,t,n);c.addColorStop(0,"rgba(180,220,255,0.6)"),c.addColorStop(1,"rgba(20,60,160,0.15)"),i.fillStyle=c,i.beginPath(),i.arc(e,t,n,0,6.29),i.fill(),i.font=`700 ${Math.round(n*.22)}px Arial`,i.textAlign="center",i.textBaseline="middle";let u="ABCDEFGHIJLMNOPQRSTUVXYZ";for(let d=0;d<60;d++){let h=Math.acos(1-2*(d+.5)/60),f=d*2.39996+s*.6,g=Math.sin(h)*Math.cos(f),_=Math.sin(h)*Math.sin(f),m=Math.cos(h);_<-.1||(i.globalAlpha=.35+.65*_,i.fillStyle=l[d%l.length],i.fillText(u[d%u.length],e+g*n*.9,t-m*n*.9))}i.globalAlpha=1,i.font=o,i.fillStyle=r,i.shadowColor="rgba(0,0,40,0.9)",i.shadowBlur=18,i.fillText(a,e,t+4),i.restore()}function Ds(i,e,t,n,s){let a=n.logoPantalla;if(a&&a.complete&&a.naturalWidth){let r=Math.min(e*.6/a.naturalWidth,t*.6/a.naturalHeight)*(1+.02*Math.sin(s*3));return i.drawImage(a,(e-a.naturalWidth*r)/2,(t-a.naturalHeight*r)/2,a.naturalWidth*r,a.naturalHeight*r),!0}return!1}var ku={id:"telecinco-2007",nombre:"Telecinco",anios:"2007-2018",disponible:!0},i3={general:{label:"\u{1F3A5} Plano general",pos:[14,13,18],target:[0,1,-2]},mesa:{label:"\u{1FA91} Mesa",pos:[0,3.2,7.5],target:[0,1.4,-1],mode:"pruebas"},atril:{label:"\u{1F534}\u{1F535} Rosco",pos:[-6,3,2.5],target:[-9,2.4,-8],mode:"rosco"},publico:{label:"\u{1F44F} P\xFAblico",pos:[-2,3,2],target:[12,3,-2]},salida:{label:"\u{1F6AA} Salida",pos:[-8,2.6,5],target:[-15,2.2,5]}};function s3(i,e){return Ui(i,e,{nombre:"plato-telecinco-2007",fondo:197900,especial:e.especial,especialOpts:{centro:[0,0,-2],radio:10,anios:"10"}},(t,n)=>{Ni(t,{hemi:[9417983,659232,.6],key:140,puntos:[[2776063,60,-8,6,-6],[4161023,50,10,6,-2],[7310591,30,0,8,8],[16751168,15,0,3,0,8]]});let s=ar({size:70,bg:"#1b1e27",letter:"#8a8f9c",outline:!1,count:60,seed:11,roughness:.35,metalness:.3,emissiveIntensity:.25});t.add(s);for(let[b,x]of[[-6,4],[-3,-6],[4,-5],[6,3],[-8,-1],[1,7]]){let y=new U(new Lt(1.6,32),new ut({color:3166463,transparent:!0,opacity:.35,blending:Zt,depthWrite:!1}));y.rotation.x=-Math.PI/2,y.position.set(b,.02,x),t.add(y)}let a=Zi(4.6,.3,{top:14212326,edge:5209599,edgeI:2.4});t.add(a);let r=new Ge;r.position.y=.3,t.add(r);let o=new U(new vt(2.3,.55,16,96),ce(15922424,{roughness:.3}));o.rotation.x=Math.PI/2,o.scale.z=.45,o.position.y=1,r.add(o);let l=new U(new pi(1.75,2.85,96,1,Math.PI*.05,Math.PI*.9),ce(16742928,{emissive:16734720,emissiveIntensity:.35,side:pt}));l.rotation.x=-Math.PI/2,l.position.y=1.26,r.add(l);let c=new U(new pi(1.75,2.85,96,1,Math.PI*1.05,Math.PI*.9),ce(2776319,{emissive:1719551,emissiveIntensity:.35,side:pt}));c.rotation.x=-Math.PI/2,c.position.y=1.26,r.add(c);let u=new U(new Je(1.9,2.2,.8,64,1,!0),ce(13159640,{side:pt}));u.position.y=.4,r.add(u),rr(r,[Math.PI,.55,0,-.55,1.6,-1.6,2.3],3.3,[{body:1842210,legs:1842210,hair:3810322},...or],{chair:{transparent:!1,color:3159102}});let d=gn(1024,576,(b,x,y,A)=>{let P=b.createLinearGradient(0,0,0,y);P.addColorStop(0,"#1f6fff"),P.addColorStop(1,"#0a2a9a"),b.fillStyle=P,b.fillRect(0,0,x,y),Ds(b,x,y,e,A)||Kc(b,x/2,y/2,200,A,{font:"700 86px Arial"})});n.push(b=>d.update(b));let h=Li(7,3.94,d,{frame:10134712});h.position.set(-9,4.2,-9),h.rotation.y=.55,t.add(h);let f=Zi(4,.5,{top:1712448,edge:4161023,edgeI:2.4});f.position.set(-9,0,-7.5),t.add(f);let g=ti({radius:.62,bulb:.07,base:16738816}),_=ti({radius:.62,bulb:.07,base:1331430});[[g,-10.6,0],[_,-7.6,0]].forEach(([b,x])=>{let y=new U(new Ie(1.2,1.1,.6),ce(15265012,{roughness:.3}));y.position.set(x,1.05,-6.4),y.rotation.y=.55,t.add(y),b.position.set(x+.45,2.6,-6.1),b.rotation.y=.55,b.scale.setScalar(.9),t.add(b);let A=$t({body:x<-9?16747040:2776319,legs:2236970,hair:2759184});A.position.set(x-.3,.5,-7),A.rotation.y=.55,t.add(A)});let m=Ls(g,_,e);n.push(b=>m.update(b));let S=Di({rows:7,cols:22,width:18,seat:14672874,step:2764604,rail:12107984,railTex:null});S.position.set(13,0,-2),S.rotation.y=Math.PI/2,t.add(S);let R=Di({rows:6,cols:20,width:16,seat:14672874,step:2764604,rail:12107984});R.position.set(1,0,11),t.add(R);let M=ce(13686496,{metalness:.9,roughness:.2});for(let b=0;b<18;b++){let x=new U(new Je(.03,.03,1.1,6),M);x.position.set(12,.55,-10.5+b),t.add(x)}let E=ra({steps:8,width:2.4,color:2764866,light:10469631});E.position.set(3,0,-10),t.add(E);for(let b=0;b<9;b++){let x=new U(new Ie(3,7,.3),ce(b%2?1713488:2768e3,{emissive:662112,emissiveIntensity:.5})),y=Math.PI*.62+b*.12;x.position.set(Math.cos(y)*20,3.5,-Math.sin(y)*20+2),x.lookAt(0,3.5,2),t.add(x);let A=new U(new Ie(.08,7,.32),Be(7314687,1.6));A.position.copy(x.position),A.quaternion.copy(x.quaternion),A.translateX(1.5),t.add(A)}t.add(Is(n,[[-6,12,-4],[0,12,-6],[6,12,-4],[-4,12,4],[4,12,4],[0,12,1]]));let w=ni({style:"puerta",color:5209599});return w.position.set(-15,0,5),w.rotation.y=Math.PI/2,t.add(w),{rosco:m,clickables:[w]}})}var Wu={};as(Wu,{build:()=>r3,cameras:()=>a3,info:()=>Vu});var Vu={id:"telecinco-2018",nombre:"Telecinco",anios:"2018-2019",disponible:!0},a3={general:{label:"\u{1F3A5} Plano general",pos:[0,12,19],target:[0,1.5,-3]},mesa:{label:"\u{1FA91} Mesa",pos:[0,3.4,7],target:[0,1.4,-1],mode:"pruebas"},atril:{label:"\u{1F534}\u{1F535} Rosco",pos:[0,3.2,1.5],target:[0,3.2,-9],mode:"rosco"},publico:{label:"\u{1F44F} P\xFAblico",pos:[-3,3.2,1],target:[14,2.5,0]},salida:{label:"\u{1F6AA} Salida",pos:[-8,2.6,4],target:[-15,2.2,4]}};function r3(i,e){return Ui(i,e,{nombre:"plato-telecinco-2018",fondo:133668,especial:e.especial,especialOpts:{centro:[0,0,-2],radio:10,anios:"19"}},(t,n)=>{Ni(t,{hemi:[10471679,662096,.9],key:120,puntos:[[2784255,70,0,7,-8,24],[4169983,50,12,6,0],[4169983,50,-12,6,0],[16777215,15,0,5,6,12]]}),t.add(ar({size:70,bg:"#0a2a9a",letter:"#e8f4ff",outline:!0,glowColor:"#9fd8ff",count:55,seed:21,lw:9,roughness:.1,metalness:.5,emissiveIntensity:1.6}));let s=Zi(4.8,.3,{top:15265528,edge:8376575,edgeI:2.4});t.add(s);let a=new Ge;a.position.y=.3,t.add(a);let r=new In;r.absarc(0,0,3,-Math.PI*.15,Math.PI*1.15,!1),r.absarc(0,0,2,Math.PI*1.15,-Math.PI*.15,!0),r.closePath();let o=new U(new Ln(r,{depth:.1,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,curveSegments:64}),ce(16185596,{roughness:.25}));o.rotation.x=Math.PI/2,o.position.y=1.15,a.add(o);let l=new U(new Je(2.85,2.6,1.05,96,1,!0,Math.PI*.35,Math.PI*1.3),ce(14673390,{side:pt,roughness:.3}));l.rotation.y=Math.PI,l.position.y=.55,a.add(l);let c=gn(512,512,(b,x,y,A)=>{b.fillStyle="#0a1240",b.fillRect(0,0,x,y);for(let P=0;P<4;P++)b.strokeStyle=P%2?"#2a6bff":"#ff3030",b.lineWidth=26,b.beginPath(),b.arc(x/2,y/2,220-P*40,Math.PI*(P%2),Math.PI*(1+P%2)),b.stroke();b.fillStyle="#fff",b.font="700 54px Arial",b.textAlign="center",b.fillText("Pasapalabra",x/2,y/2+18)}),u=new U(new Je(1.2,1.2,.5,48,1,!0),new ut({map:c.tex,toneMapped:!1,side:pt}));u.position.set(0,1,-.2),a.add(u),rr(a,[Math.PI,.5,0,-.5,1.2,-1.2,1.9],3.4,[{body:1711402,legs:1711402,hair:2759184},...or],{chair:{transparent:!1,color:2764346}});let d=gn(4096,256,aa("Pasapalabra",{bote:"1.024.000 \u20AC",bg1:"#0a2fae",bg2:"#1e6aff",font:"700 120px Arial"}));t.add(sr({radius:17,height:1.8,y:8.3,start:Math.PI*.55,len:Math.PI*.9,tex:d.tex}));let h=gn(1280,640,(b,x,y,A)=>{b.fillStyle="#1550e6",b.fillRect(0,0,x,y),b.font="700 70px Arial";for(let P=0;P<90;P++)b.save(),b.translate(P*151%x,(P*97+A*20)%y),b.rotate(P),b.fillStyle=`rgba(200,230,255,${.15+P%5*.08})`,b.fillText("ABCDEFGHIJLMNOPQRSTUVXYZ"[P%24],0,0),b.restore();Ds(b,x,y,e,A)||Kc(b,x/2,y/2,190,A,{font:"700 80px Arial"})});n.push(b=>{h.update(b)});let f=Li(10,5,h,{frame:661072});f.position.set(0,3.6,-11),t.add(f);let g=Zi(5,.35,{top:2772944,edge:10475775});g.position.set(0,0,-8.5),t.add(g);let _=ti({radius:.6,bulb:.07,base:16738816}),m=ti({radius:.6,bulb:.07,base:1331430});[[_,-2],[m,2]].forEach(([b,x])=>{let y=new U(new Je(.4,.5,1.1,32),ce(15922940));y.position.set(x,.9,-7.8),t.add(y),b.position.set(x,2.9,-8.2),t.add(b);let A=$t({body:x<0?16747040:2776319,legs:2236970,hair:2759184});A.position.set(x,.35,-8.6),t.add(A)});let p=Ls(_,m,e);n.push(b=>{p.update(b),d.update(b)});for(let[b,x,y]of[[-13,-6,.9],[13,-6,-.9],[-7,-10.5,.3],[7,-10.5,-.3]]){let A=new Ge;A.position.set(b,5,x),A.rotation.y=y,t.add(A);let P=new U(new Lt(1.3,48),ce(16734752,{emissive:16726528,emissiveIntensity:.8}));A.add(P);let L=new U(new pi(1.3,1.55,48),Be(16777215,1.4));A.add(L);let F=new U(new Et(.7,14,10),new ut({color:16769232,wireframe:!0}));F.position.z=.1,F.scale.z=.3,A.add(F),n.push(N=>{F.rotation.y=N*.5})}for(let b=0;b<12;b++){let x=Math.PI*.58+b*.075*Math.PI,y=new U(new Ie(4.6,9,.3),ce(1727728,{emissive:801488,emissiveIntensity:.6}));y.position.set(Math.cos(x)*19,4.5,-Math.sin(x)*19+2),y.lookAt(0,4.5,2),t.add(y);let A=new U(new Ie(.1,9,.32),Be(10477823,2));A.position.copy(y.position),A.quaternion.copy(y.quaternion),A.translateX(2.3),t.add(A)}let S=$c("A B C \xD1 G S Y R F",{font:"700 150px Arial",reps:1}),R=Di({rows:6,cols:22,width:18,seat:2776319,step:993920,rail:10475775,railTex:S});R.position.set(13,0,-1),R.rotation.y=Math.PI/2,t.add(R);let M=Di({rows:5,cols:20,width:16,seat:2776319,step:993920,rail:10475775,railTex:S});M.position.set(0,0,11),t.add(M);let E=ra({steps:9,width:2.2,color:1719456,light:16777215});E.position.set(8,0,-9),t.add(E),t.add(Is(n,[[-6,11,-4],[0,11,-6],[6,11,-4],[-4,11,4],[4,11,4],[0,11,0]],[16777215,10475775]));let w=ni({style:"puerta",color:7323903});return w.position.set(-15,0,4),w.rotation.y=Math.PI/2,t.add(w),{rosco:p,clickables:[w]}})}var $u={};as($u,{build:()=>c3,cameras:()=>o3,info:()=>Xu});var Xu={id:"antena3-2020",nombre:"Antena 3",anios:"2020-2026",disponible:!0},o3={general:{label:"\u{1F3A5} Plano general",pos:[-4,9,19],target:[0,2,-3]},mesa:{label:"\u{1FA91} Mesa",pos:[0,3.6,8],target:[0,1.3,0],mode:"pruebas"},atril:{label:"\u{1F534}\u{1F535} Atriles / Final",pos:[-3,3,1],target:[-7,2.2,-8],mode:"rosco"},publico:{label:"\u{1F44F} P\xFAblico",pos:[-2,3,2],target:[14,3,1]},salida:{label:"\u{1F6AA} Portal (salida)",pos:[4,2.6,0],target:[10,2.6,-9]}},l3="760.000 \u20AC";function c3(i,e){return Ui(i,e,{nombre:"plato-antena3-2020",fondo:199202,especial:e.especial,especialOpts:{centro:[0,0,-2],radio:10,anios:"25"}},(t,n)=>{Ni(t,{hemi:[12574975,663648,1],key:120,puntos:[[3836927,70,0,7,-8,24],[7323903,50,12,6,0],[7323903,40,-12,6,0],[16777215,20,0,5,6,14]]}),t.add(ar({size:70,bg:"#0b3cc0",letter:"#5ff5e8",outline:!1,glowColor:"#5ff5e8",count:40,seed:5,roughness:.06,metalness:.55,emissiveIntensity:1.2}));let s=Zi(5.2,.32,{top:15922943,edge:6271231,edgeI:2.6});t.add(s);let a=gn(512,512,(E,w,b,x)=>{E.fillStyle="#071a5a",E.fillRect(0,0,w,b);for(let y=0;y<25;y++){let A=-Math.PI/2+y/25*Math.PI*2;E.fillStyle=Math.floor(x*4)%25===y?"#ffd400":"#3fa0ff",E.beginPath(),E.arc(w/2+Math.cos(A)*200,b/2+Math.sin(A)*200,20,0,7),E.fill(),E.fillStyle="#fff",E.font="700 24px Arial",E.textAlign="center",E.textBaseline="middle",E.fillText(Wn[y],w/2+Math.cos(A)*200,b/2+Math.sin(A)*200+1)}E.fillStyle="#fff",E.font="700 58px Arial",E.fillText("pasapalabra",w/2,b/2)}),r=Up({r:3.2,led:2784255,centro:a.tex});r.position.y=.32,t.add(r);let o=gn(2048,128,aa("pasapalabra",{bg1:"#0a3bd0",bg2:"#1a6aff",font:"700 80px Arial"}));r.userData.band.material.map=o.tex,r.userData.band.material.needsUpdate=!0,rr(r,[Math.PI,.45,0,-.45,1.25,-1.25,2],3.7,[{body:15790304,legs:5601194,hair:2759184},...or]);let l=gn(4096,256,aa("pasapalabra",{bote:l3,bg1:"#0a39c8",bg2:"#1f74ff",font:"700 130px Arial",every:2}));t.add(sr({radius:18,height:2.2,y:8.8,start:Math.PI*.5,len:Math.PI,tex:l.tex}));let c=gn(1280,720,(E,w,b,x)=>{Ro({c1:"#0a2fae",c2:"#3fa8ff",texto:"pasapalabra",font:"700 110px Arial"})(E,w,b,x),Ds(E,w,b,e,x)}),u=Li(9,5.06,c,{frame:726080});u.position.set(-9.5,3.8,-9),u.rotation.y=.5,t.add(u);let d=["P","H","D"].map((E,w)=>gn(256,768,(b,x,y,A)=>{let P=b.createLinearGradient(0,0,0,y);P.addColorStop(0,"#ff9a20"),P.addColorStop(1,"#ff5a00"),b.fillStyle=P,b.fillRect(0,0,x,y),b.strokeStyle="rgba(255,220,150,0.5)",b.lineWidth=6;for(let L=0;L<6;L++)b.beginPath(),b.arc(x/2,y/2,40+L*40+A*20%40,0,7),b.stroke();b.fillStyle="rgba(255,255,255,0.85)",b.font="700 150px Arial",b.textAlign="center",b.fillText(E,x/2,y*.75)}));d.forEach((E,w)=>{let b=Li(1.8,5.4,E,{frame:1053727});b.position.set(-3+w*2.3,3.4,-11),t.add(b)});let h=ti({radius:.55,bulb:.065,base:16738816}),f=ti({radius:.55,bulb:.065,base:1331430});[[h,-8.5,-6],[f,-5.5,-7.2]].forEach(([E,w,b],x)=>{let y=Zi(1.3,.3,{top:15397631,edge:6271231});y.position.set(w,0,b),t.add(y);let A=new U(new Je(.25,.32,1.1,24),ce(14674168,{metalness:.3}));A.position.set(w,.85,b+.4),t.add(A);let P=new U(new vt(.27,.02,6,32),Be(5222655,2.5));P.rotation.x=Math.PI/2,P.position.set(w,1.4,b+.4),t.add(P),E.position.set(w,2.9,b+.6),E.rotation.y=.4,t.add(E);let L=$t({body:x?2776319:16747040,legs:2236970,hair:2759184});L.position.set(w,.3,b-.1),L.rotation.y=.4,t.add(L)});let g=Ls(h,f,e);n.push(E=>{g.update(E),l.update(E),c.update(E),a.update(E),o.update(E),d.forEach(w=>w.update(E))});let _=$c("pasapalabra",{font:"700 150px Arial",reps:2}),m=Di({rows:6,cols:24,width:20,seat:15922424,step:1194650,rail:12576511,railTex:_});m.position.set(13,0,0),m.rotation.y=Math.PI/2,t.add(m);let p=ra({steps:8,width:2.2,color:1450570,light:16777215});p.position.set(7.2,0,-9.5),t.add(p);let S=ra({steps:8,width:2.2,color:1450570,light:16777215});S.position.set(12.8,0,-9.5),t.add(S);let R=ni({style:"portal",label:"ESTUDIOS GROK BOT \u25B8"});R.position.set(10,0,-10.5),t.add(R);let M=_i("pasapalabra",{w:6,h:1.1,color:"#ffffff",font:"700 160px Arial"});M.position.set(10,6.3,-10.4),t.add(M);for(let E=0;E<12;E++){let w=Math.PI*.55+E*.08*Math.PI,b=new U(new Ie(4.8,7.5,.3),ce(2780415,{emissive:1723616,emissiveIntensity:.55}));b.position.set(Math.cos(w)*20,3.75,-Math.sin(w)*20+2),b.lookAt(0,3.75,2),t.add(b)}return t.add(Is(n,[[-7,11.5,-5],[-2,11.5,-7],[3,11.5,-7],[8,11.5,-5],[-5,11.5,4],[5,11.5,4],[0,11.5,1]],[16777215,10475775,8363263])),{rosco:g,clickables:[R]}})}var ju={};as(ju,{build:()=>u3,cameras:()=>h3,drawLogoEsfera:()=>Hp,drawLogoRosco:()=>Bp,info:()=>Yu});var Yu={id:"rueda-letra",nombre:"Rueda la letra",anios:"Telecinco 2026-",disponible:!0},h3={general:{label:"\u{1F3A5} Plano general",pos:[0,7.5,13.5],target:[0,2.2,-5]},mesa:{label:"\u{1FA91} Mesa",pos:[0,3,6],target:[0,1.4,0],mode:"pruebas"},atril:{label:"\u{1F535}\u{1F7E3} Final La Rueda",pos:[0,2.6,0],target:[0,2.4,-9],mode:"rosco"},publico:{label:"\u{1F44F} P\xFAblico",pos:[0,3,-3],target:[0,3,14]},salida:{label:"\u{1F6AA} Salida",pos:[-8,2.6,2],target:[-15,2.2,2]}};function Bp(i,e,t,n,s){let a=Wn;for(let r=0;r<25;r++){let o=-Math.PI/2+r/25*Math.PI*2+s*.2,l=e+Math.cos(o)*n,c=t+Math.sin(o)*n,u=i.createRadialGradient(l-5,c-5,2,l,c,22);u.addColorStop(0,"#ffffff"),u.addColorStop(1,r%2?"#2ee8d0":"#ff5fb0"),i.fillStyle=u,i.beginPath(),i.arc(l,c,20,0,7),i.fill(),i.fillStyle="#1a1040",i.font="700 22px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText(a[r],l,c+1)}i.fillStyle="#fff",i.strokeStyle="#2a1060",i.lineWidth=10,i.font="900 78px Arial Black, Arial",i.textAlign="center";for(let[r,o]of[["RUEDA",-55],["LA",10],["LETRA",75]])i.strokeText(r,e,t+o),i.fillText(r,e,t+o)}function Hp(i,e,t,n,s){for(let a=0;a<90;a++){let r=Math.acos(1-2*(a+.5)/90),o=a*2.39996+s*.5,l=Math.sin(r)*Math.cos(o),c=Math.sin(r)*Math.sin(o),u=Math.cos(r);if(c<-.05)continue;let d=Math.round(150+105*c);i.fillStyle=`rgb(${d},${d},${d+10})`,i.font=`700 ${Math.round(18+22*c)}px Arial`,i.textAlign="center",i.textBaseline="middle",i.fillText(Wn[a%25],e+l*n,t-u*n)}i.fillStyle="#fff",i.font="700 84px Arial",i.shadowColor="#40106a",i.shadowBlur=20,i.fillText("Rueda la letra",e,t+10),i.shadowBlur=0}function u3(i,e){return Ui(i,e,{nombre:"plato-rueda-letra",fondo:459802,especial:e.especial,especialOpts:{centro:[0,0,-3],radio:10,anios:"1"}},(t,n)=>{Ni(t,{hemi:[13676799,1050666,.8],key:110,puntos:[[3074256,50,-8,5,-6],[11555071,50,8,5,-6],[16747104,40,0,6,10,22],[16777215,15,0,5,4,12]]});let s=gn(1024,1024,(P,L,F,N)=>{P.fillStyle="#0a0628",P.fillRect(0,0,L,F);for(let q=0;q<3;q++){P.lineWidth=14;for(let G=0;G<260;G++){let W=G*.09+N*.4+q*2.09,se=G*1.9;P.strokeStyle=`hsla(${175+G/260*110},90%,55%,${.6-G/600})`,P.beginPath(),P.arc(L/2+Math.cos(W)*se,F/2+Math.sin(W)*se,6,0,7),P.stroke()}}}),a=new U(new Lt(32,96),new yt({map:s.tex,emissive:16777215,emissiveMap:s.tex,emissiveIntensity:.6,roughness:.15,metalness:.4}));a.rotation.x=-Math.PI/2,t.add(a);let r=new U(new Ie(9,.5,4),ce(15921910,{roughness:.2}));r.position.set(0,.25,-8),t.add(r);for(let P of[.1,.45]){let L=new U(new Ie(9.05,.04,.04),Be(16777215,2.4));L.position.set(0,P,-5.98),t.add(L)}let o=Bu({color:2788351});o.position.set(-1.6,.5,-8),t.add(o);let l=Bu({color:11555071});l.position.set(1.6,.5,-8),t.add(l);let c=$t({body:2780159,legs:2236970,hair:2759184});c.position.set(-1.6,.5,-8.6),t.add(c);let u=$t({body:9059024,legs:2236970,hair:3810322});u.position.set(1.6,.5,-8.6),t.add(u);for(let[P,L]of[[-2.4,2799871],[2.4,12603647]]){let F=new U(new vt(1.1,.07,10,64),Be(L,2.6));F.rotation.x=Math.PI/2.4,F.position.set(P,8.2,-9.6),t.add(F)}let d=ti({radius:.62,bulb:.07,base:797322,bulbColor:10483180}),h=ti({radius:.62,bulb:.07,base:3804266,bulbColor:16756960}),f=gn(1280,720,(P,L,F,N)=>{Ro({c1:"#3a1080",c2:"#18c8c0",ring:"rgba(200,255,250,0.6)",letras:!0})(P,L,F,N),!Ds(P,L,F,e,N)&&(Math.floor(N/8)%2===0?Bp(P,L/2,F/2,240,N):Hp(P,L/2,F/2,230,N))}),g=Li(10,5.6,f,{frame:328716});g.position.set(0,4.2,-10.2),t.add(g);let _=gn(720,900,Ro({c1:"#4a10a0",c2:"#20d8c8",ring:"rgba(220,255,250,0.6)"}));for(let P of[-1,1]){let L=Li(5.4,6.8,_,{frame:328716});L.position.set(P*8.6,3.9,-9.2),L.rotation.y=-P*.25,t.add(L)}d.position.set(-1.6,2.35,-7.68),d.scale.setScalar(.35),t.add(d),h.position.set(1.6,2.35,-7.68),h.scale.setScalar(.35),t.add(h);let m=Ls(d,h,e);n.push(P=>{m.update(P),f.update(P),_.update(P),s.update(P)});let p=new Ge;p.position.set(0,0,0),t.add(p);let S=new U(new Ie(9,.05,1.1),new zn({color:13625599,transparent:!0,opacity:.35,roughness:.05}));S.position.y=1.18,p.add(S);let R=new U(new Ie(9.05,.03,1.12),Be(3832831,1.6));R.position.y=1.15,p.add(R);let M=[{body:2780159},{body:2780159},{body:2780159},{body:9059024},{body:9059024},{body:9059024}];for(let P=0;P<6;P++){let L=-3.9+P*1.56+(P>=3?.3:-.3),F=new U(new Je(.42,.42,1.15,32),ce(526350,{metalness:.75,roughness:.12}));F.position.set(L,.575,0),p.add(F);let N=new U(new Lt(.2,24),ce(3158074,{metalness:.5}));N.position.set(L,.65,.421),p.add(N);let q=$t({...M[P],legs:2236970,hair:[2759184,6963232,1118481][P%3]});q.position.set(L,0,-.75),p.add(q)}let E=$t({body:2763316,legs:1710626,hair:9079440});E.position.set(0,0,2.2),E.rotation.y=Math.PI,t.add(E);let w=Di({rows:5,cols:26,width:22,seat:3836927,step:1710650});w.position.set(0,0,9),t.add(w);let b=new U(new Je(20,20,12,96,1,!0,-Math.PI*.42,Math.PI*.84),ce(16747120,{emissive:16734784,emissiveIntensity:.35,side:Pt}));b.position.set(0,6,-3),t.add(b);for(let P=0;P<40;P++){let L=-Math.PI*.4+Math.random()*Math.PI*.8,F=new U(new Lt(.15+Math.random()*.25,20),ce(2232344));F.position.set(Math.sin(L)*19.9,9+Math.random()*2.6,Math.cos(L)*19.9-3),F.lookAt(0,F.position.y,-3),t.add(F)}let x=gn(4096,192,aa("RUEDA LA LETRA",{bg1:"#111018",bg2:"#1a1828",color:"#f4e6c8",font:"700 110px Arial",n:4}));for(let P of[5.4,6.9]){let L=sr({radius:19.5,height:1.1,y:P,start:-Math.PI*.4,len:Math.PI*.8,tex:x.tex});L.position.z=-3,L.rotation.y=0,t.add(L)}let y=new U(new vt(3,.04,6,64,Math.PI),Be(16777215,2));y.position.set(0,8.3,16),y.rotation.y=Math.PI,t.add(y),t.add(Is(n,[[-6,11,-4],[0,11,-6],[6,11,-4],[-5,11,4],[5,11,4]],[3074256,12603647,16777215]));let A=ni({style:"puerta",color:12603647});return A.position.set(-15,0,2),A.rotation.y=Math.PI/2,t.add(A),{rosco:m,clickables:[A]}})}var Zu={};as(Zu,{build:()=>f3,cameras:()=>d3,info:()=>Ku});var Ku={id:"estudios",nombre:"Estudios Grok Bot",anios:"Recepci\xF3n",disponible:!0,hub:!0},d3={general:{label:"\u{1F3E2} Exterior",pos:[0,6,34],target:[0,5,12]},recepcion:{label:"\u{1F6CE}\uFE0F Recepci\xF3n",pos:[0,2.2,10],target:[0,1.8,2]},pasillo:{label:"\u{1F6AA} Pasillo de plat\xF3s",pos:[0,2,0],target:[0,1.8,-26]}};function f3(i,e){return Ui(i,e,{nombre:"estudios-grok-bot",fondo:857648,niebla:[60,140]},(t,n)=>{Ni(t,{hemi:[14674175,3160136,.75],key:60,puntos:[[16777215,10,0,3.5,6,14],[16777215,8,0,3.5,-8,14],[16777215,8,0,3.5,-20,14],[10473727,30,0,6,24,30]]});let s=new U(new Et(120,32,16),new ut({color:1318986,side:Pt}));t.add(s);let a=new U(new Ct(200,200),ce(3817290,{roughness:.9}));a.rotation.x=-Math.PI/2,a.position.y=-.01,t.add(a);let r=new U(new Ct(30,20),ce(12106948,{roughness:.7}));r.rotation.x=-Math.PI/2,r.position.set(0,.005,24),t.add(r);let o=new U(new Ie(40,12,1),ce(2767466,{roughness:.4,metalness:.3}));o.position.set(0,6,14),t.add(o);let l=new U(new Ie(5,3.5,1.05),new zn({color:10473727,transparent:!0,opacity:.35,roughness:.05}));l.position.set(0,1.75,14),t.add(l),o.material.transparent=!1;let c=_i("ESTUDIOS GROK BOT",{w:22,h:2.4,color:"#ffffff",font:"900 180px Arial"});c.position.set(0,9.2,14.6),t.add(c);let u=_i("Complejo de producci\xF3n de concursos \xB7 Plat\xF3s 1 a 5",{w:16,h:.9,color:"#9fd0ff",font:"600 70px Arial"});u.position.set(0,6.9,14.6),t.add(u);let d=new U(new Ie(24,.1,.1),Be(7323903,2.5));d.position.set(0,7.9,14.6),t.add(d),[["PLAT\xD3 1","Pasapalabra 2000-2006","#ff7a00"],["PLAT\xD3 2","Pasapalabra 2007-2018","#3f7dff"],["PLAT\xD3 3","Pasapalabra 2018-2019","#2ab8ff"],["PLAT\xD3 4","Pasapalabra 2020-2026","#1f74ff"],["PLAT\xD3 5","Rueda la letra","#c050ff"]].forEach(([x,y,A],P)=>{let L=_i(`${x} \xB7 ${y}`,{w:5.8,h:.8,color:"#fff",bg:A,font:"700 60px Arial"});L.position.set(-13+P*6.5,4.6,14.6),t.add(L)});for(let x of[-12,-6,6,12]){let y=new U(new Je(.08,.1,4,8),ce(2236962));y.position.set(x,2,28),t.add(y);let A=new U(new Et(.3,12,8),Be(16773312,2));A.position.set(x,4.1,28),t.add(A)}let f=new U(new Ct(14,40),ce(12106952,{roughness:.35,metalness:.1}));f.rotation.x=-Math.PI/2,f.position.set(0,.01,-6),t.add(f);let g=new U(new Ct(14,40),ce(16053494));g.rotation.x=Math.PI/2,g.position.set(0,4,-6),t.add(g);for(let x of[-1,1]){let y=new U(new Ie(.3,4,40),ce(14672874));y.position.set(x*7,2,-6),t.add(y)}for(let x=10;x>-26;x-=4){let y=new U(new Ie(6,.05,.4),Be(16777215,.6));y.position.set(0,3.97,x),t.add(y)}let _=new U(new Ie(5,1.1,1),ce(2061567,{roughness:.3}));_.position.set(0,.55,5),t.add(_);let m=new U(new Ie(5.2,.06,1.2),ce(16777215));m.position.set(0,1.13,5),t.add(m);let p=_i("RECEPCI\xD3N \xB7 ESTUDIOS GROK BOT",{w:4.8,h:.5,color:"#fff",font:"700 60px Arial"});p.position.set(0,.6,5.51),t.add(p);let S=$t({body:2763316,legs:1710626,hair:3810322});S.position.set(0,0,4),t.add(S);let R=_i("\u2190 Plat\xF3s por la puerta del fondo \xB7 Pasillo de plat\xF3s \u2192",{w:8,h:.6,color:"#1a2a5a",font:"700 50px Arial"});R.position.set(0,3.2,1.2),t.add(R);for(let x of[-1,1]){let y=new U(new Ie(2.4,.5,.9),ce(16742912));y.position.set(x*5,.25,8),t.add(y);let A=new U(new Et(.5,12,8),ce(2787904));A.position.set(x*6.3,.9,11),t.add(A);let P=new U(new Je(.35,.3,.6,12),ce(16777215));P.position.set(x*6.3,.3,11),t.add(P)}let M=e.platos||[],E=[];M.forEach((x,y)=>{let A=y%2?1:-1,P=-4-Math.floor(y/2)*7-(A>0?3.5:0),L=ni({style:"puerta",label:`${x.nombre} ${x.anios}`,color:x.color||5220607});L.position.set(A*6.8,0,P),L.rotation.y=-A*Math.PI/2,t.add(L),L.traverse(q=>{q.userData.salida=!1,q.userData.destino=x.id});let F=_i(`PLAT\xD3 ${y+1}`,{w:1.6,h:.5,color:"#fff",bg:"#1a2a5a",font:"700 70px Arial"});F.position.set(A*6.75,3,P+1.5*A),F.rotation.y=-A*Math.PI/2,t.add(F);let N=new U(new Et(.12,12,8),Be(16719904,2.5));N.position.set(A*6.75,3.45,P),t.add(N),n.push(q=>{N.material.emissiveIntensity=1.5+Math.sin(q*3+y)*1}),E.push(L)});let w=_i("EN EL AIRE",{w:3,h:.7,color:"#ff3030",bg:"#200000",font:"900 90px Arial"});w.position.set(0,3,-25.8),t.add(w);let b=new U(new Ie(14,4,.3),ce(1714778));return b.position.set(0,2,-26),t.add(b),{clickables:E}})}var eh={};as(eh,{DURACION:()=>E3,crearCabecera:()=>C3,programarAudioRespaldo:()=>Qc});var p3="pasapalabra3d",Qu="media",m3=["mp3","ogg","wav","m4a"],g3=["png","webp","jpg","jpeg","svg"];function x3(){return new Promise((i,e)=>{if(!("indexedDB"in window))return e(new Error("Sin IndexedDB"));let t=indexedDB.open(p3,1);t.onupgradeneeded=()=>t.result.createObjectStore(Qu),t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error)})}async function Ju(i,e){let t=await x3();return new Promise((n,s)=>{let a=t.transaction(Qu,i),r=a.objectStore(Qu),o=e(r);a.oncomplete=()=>n(o&&o.result),a.onerror=()=>s(a.error)})}var ed={get:i=>Ju("readonly",e=>e.get(i)).catch(()=>{}),put:(i,e)=>Ju("readwrite",t=>t.put(e,i)),del:i=>Ju("readwrite",e=>e.delete(i))};function _3(i){return new Promise(e=>{let t=new Audio,n=!1,s=a=>{n||(n=!0,e(a?i:null))};t.preload="metadata",t.onloadedmetadata=()=>s(!0),t.onerror=()=>s(!1),setTimeout(()=>s(!1),2500),t.src=i})}function v3(i){return new Promise(e=>{let t=new Image;t.onload=()=>e(i),t.onerror=()=>e(null),t.src=i,setTimeout(()=>e(null),2500)})}async function zp(i,e,t){for(let n of e){let s=await t(`${i}.${n}`);if(s)return s}return null}var kp={};function Jc(i){return kp["a:"+i]??=zp(`audio/${i}`,m3,_3)}function y3(i){return kp["i:"+i]??=zp(`logos/${i}`,g3,v3)}var Zc={};async function M3(i){let e=await ed.get(i);return!e||!e.blob?null:(Zc[i]&&URL.revokeObjectURL(Zc[i].url),Zc[i]={url:URL.createObjectURL(e.blob),name:e.name},Zc[i])}async function lr(i,e){let t=await M3(`${i}:${e.id}`);if(t)return{url:t.url,origen:"subido",nombre:t.name};let n=i==="musica"?e.archivosMusica:e.archivosLogo;for(let s of n||[]){let a=i==="musica"?await Jc(s):await y3(s);if(a)return{url:a,origen:"carpeta",nombre:a}}return null}async function Gp(i,e,t){await ed.put(`${i}:${e}`,{blob:t,name:t.name,type:t.type,fecha:Date.now()})}async function Vp(i,e){await ed.del(`${i}:${e}`)}var Po=null;function Ji(){return Po||(Po=new(window.AudioContext||window.webkitAudioContext)),Po.state==="suspended"&&Po.resume(),Po}var dt={tone(i,e,t,n,s,a="sine",r=.2){let o=i.createOscillator(),l=i.createGain();o.type=a,o.frequency.setValueAtTime(n,t),l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(r,t+.01),l.gain.exponentialRampToValueAtTime(1e-4,t+s),o.connect(l).connect(e),o.start(t),o.stop(t+s+.05)},noiseBuffer(i,e=2){let t=i.createBuffer(1,i.sampleRate*e,i.sampleRate),n=t.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1;return t},whoosh(i,e,t,n=.7,s=-1,a=1,r=.35){let o=i.createBufferSource();o.buffer=dt.noiseBuffer(i,n+.1);let l=i.createBiquadFilter();l.type="bandpass",l.Q.value=1.2,l.frequency.setValueAtTime(300,t),l.frequency.exponentialRampToValueAtTime(3500,t+n*.6),l.frequency.exponentialRampToValueAtTime(600,t+n);let c=i.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(r,t+n*.55),c.gain.exponentialRampToValueAtTime(1e-4,t+n);let u=i.createStereoPanner?i.createStereoPanner():null;o.connect(l).connect(c),u?(u.pan.setValueAtTime(s,t),u.pan.linearRampToValueAtTime(a,t+n),c.connect(u).connect(e)):c.connect(e),o.start(t),o.stop(t+n+.1)},kick(i,e,t,n=.5){let s=i.createOscillator(),a=i.createGain();s.frequency.setValueAtTime(140,t),s.frequency.exponentialRampToValueAtTime(42,t+.18),a.gain.setValueAtTime(n,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.3),s.connect(a).connect(e),s.start(t),s.stop(t+.35)},hat(i,e,t,n=.06){let s=i.createBufferSource();s.buffer=dt.noiseBuffer(i,.06);let a=i.createBiquadFilter();a.type="highpass",a.frequency.value=7e3;let r=i.createGain();r.gain.setValueAtTime(n,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.05),s.connect(a).connect(r).connect(e),s.start(t)},chord(i,e,t,n,s=2.5,a=.09){let r=i.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(400,t),r.frequency.exponentialRampToValueAtTime(4e3,t+.08),r.frequency.exponentialRampToValueAtTime(900,t+s),r.connect(e);for(let o of n)for(let l of[-6,6]){let c=i.createOscillator(),u=i.createGain();c.type="sawtooth",c.frequency.value=o,c.detune.value=l,u.gain.setValueAtTime(0,t),u.gain.linearRampToValueAtTime(a,t+.03),u.gain.setTargetAtTime(0,t+s*.5,s*.25),c.connect(u).connect(r),c.start(t),c.stop(t+s+.5)}},applause(i,e,t,n=3.5,s=.5){let a=dt.noiseBuffer(i,.03),r=i.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(s,t+.4),r.gain.setValueAtTime(s,t+n-1),r.gain.exponentialRampToValueAtTime(1e-4,t+n),r.connect(e);let o=Math.floor(n*160);for(let l=0;l<o;l++){let c=i.createBufferSource();c.buffer=a;let u=i.createBiquadFilter();u.type="bandpass",u.frequency.value=900+Math.random()*2200,u.Q.value=.8;let d=i.createGain();d.gain.value=.25+Math.random()*.5;let h=i.createStereoPanner?i.createStereoPanner():null;c.connect(u).connect(d),h?(h.pan.value=Math.random()*2-1,d.connect(h).connect(r)):d.connect(r),c.start(t+Math.random()*n)}}},b3={acierto:(i,e,t)=>{dt.tone(i,e,t,880,.15,"triangle",.2),dt.tone(i,e,t+.12,1320,.3,"triangle",.2)},fallo:(i,e,t)=>{dt.tone(i,e,t,220,.45,"square",.08),dt.tone(i,e,t+.05,165,.5,"square",.06)},pasapalabra:(i,e,t)=>{dt.tone(i,e,t,660,.12,"sine",.2),dt.tone(i,e,t+.13,520,.2,"sine",.2)},rosco:(i,e,t)=>{for(let n=0;n<4;n++)dt.tone(i,e,t+n*.12,500+n*120,.1,"triangle",.12)},aplausos:(i,e,t)=>dt.applause(i,e,t,3,.4)};async function Io(i){let e=await Jc(i);if(e){let n=new Audio(e);return n.play().catch(()=>{}),n}let t=Ji();return b3[i]?.(t,t.destination,t.currentTime+.01),null}var E3=15.6,S3="PASALBRCDEFGHIJMNOQTUVXYZ".split(""),td=24,T3=[16742912,16185078,728412],$n=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},nd=i=>Math.min(1,Math.max(0,i));function w3(i){if(i<=1)return 70*i;if(i<=6)return 70+45*(i-1);if(i<=7)return 295+25*(i-6);if(i<=10){let e=i-7;return 320+25*e-25*e*e/6}return 357.5}var Lo=i=>10-w3(i),Ns=new D(0,0,Lo(10)-16),A3=Lo(8.5);function R3(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new Kt(i)}function C3(i,{logoUrl:e=null}={}){let t=new ui;t.background=new Fe(133936),t.fog=new Dr(267592,.013);let n=new Wt(62,i.domElement.width/i.domElement.height,.1,600);t.add(new mi(12574975,528448,.8));let s=new Js(16777215,1.6);s.position.set(4,8,6),t.add(s,s.target);let a=new Rn(8382719,14,30,1.8);t.add(a);let r=new Rn(16752704,10,25,1.8);t.add(r);let o=R3(),l=new Ge;t.add(l);for(let B=0;B<70;B++){let te=new Bn(new Pn({map:o,color:B%3?10480127:16777215,transparent:!0,opacity:.06+Math.random()*.12,blending:Zt,depthWrite:!1,fog:!1})),Q=Math.random()*Math.PI*2,he=30+Math.random()*50;te.position.set(Math.cos(Q)*he,Math.sin(Q)*he,20-Math.random()*420),te.scale.setScalar(20+Math.random()*45),l.add(te)}let c=new zn({color:16777215,roughness:.22,metalness:.05,clearcoat:1,clearcoatRoughness:.08}),u=[],d=[],h=[];S3.forEach((B,te)=>{let Q=new Ii(B,{font:sa,size:1,depth:.42,curveSegments:4,bevelEnabled:!0,bevelThickness:.1,bevelSize:.06,bevelSegments:3});Q.center();let he=new An(Q,c,td);he.instanceMatrix.setUsage(du),he.frustumCulled=!1;for(let Ne=0;Ne<td;Ne++){let ke=te*td+Ne;he.setColorAt(Ne,new Fe(T3[ke%3]));let $e=Math.random()<.36,me=$e?-312-Math.random()*36:-20-Math.random()*262,Ue={mesh:he,i:Ne,z:me,r:($e?2.8:3.4)+Math.pow(Math.random(),.7)*11,a:Math.random()*Math.PI*2,dir:Math.random()<.5?1:-1,scale:.7+Math.random()*.9,axis:new D(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),spin:.8+Math.random()*2.5,q0:new en().setFromEuler(new Zn(Math.random()*6,Math.random()*6,Math.random()*6)),globe:$e||me<-205};u.push(Ue),Ue.globe&&h.push(u.length-1)}d.push(he),t.add(he)});let f=h.length,g=5.2;h.forEach((B,te)=>{let Q=1-(te+.5)/f*2,he=Math.sqrt(1-Q*Q),Ne=te*Math.PI*(3-Math.sqrt(5));u[B].sphereDir=new D(Math.cos(Ne)*he,Q,Math.sin(Ne)*he)});let _=[];[[1.5,16747008],[2,16761370],[2.5,16747008],[3,16767050],[3.6,16777215],[4.3,8382719],[4.9,16777215],[5.5,8382719]].forEach(([B,te],Q)=>{let he=new U(new vt(6.2,.14,12,96),new ut({color:te,transparent:!0,opacity:.55,blending:Zt,depthWrite:!1}));he.position.z=Lo(B)-2,he.rotation.set((Math.random()-.5)*.5,(Math.random()-.5)*.5,0),he.userData.tilt=(Q%2?1:-1)*.4,_.push(he),t.add(he)});let m=new Ge;t.add(m);let p=new U(new Et(.45,24,16),new ut({color:16777215})),S=new Bn(new Pn({map:o,color:13629183,blending:Zt,depthWrite:!1,transparent:!0}));S.scale.setScalar(5),p.add(S),m.add(p);let R=[];for(let B=0;B<26;B++){let te=new Bn(new Pn({map:o,color:12578815,blending:Zt,depthWrite:!1,transparent:!0,opacity:.8*(1-B/26)}));te.scale.setScalar(2.4*(1-B/30)),R.push(te),m.add(te)}let M=(B,te)=>{let Q=nd((B-3.6)/1.2),he=Lo(B);return te.set(-11+22*Q,-7+14*Q+Math.sin(Q*Math.PI)*1.5,he-20-3*Q)},E=new Ge;E.position.set(0,0,A3),t.add(E);let w=new ut({color:14677759,transparent:!0,opacity:.9,blending:Zt,depthWrite:!1}),b=new U(new vt(4.2,.09,12,128),w),x=new U(new vt(4.2,.09,12,128),w);E.add(b,x);let y=new Bn(new Pn({map:o,color:14678271,blending:Zt,depthWrite:!1,transparent:!0,opacity:.7}));y.scale.setScalar(3),E.add(y);let A=new zn({color:16777215,roughness:.18,clearcoat:1,emissive:0,emissiveIntensity:0}),P=B=>{let te=new Ii(B,{font:sa,size:1.35,depth:.5,curveSegments:8,bevelEnabled:!0,bevelThickness:.12,bevelSize:.05,bevelSegments:4});te.computeBoundingBox();let Q=te.boundingBox;return te.translate(-Q.min.x,-(Q.max.y+Q.min.y)/2,-Q.max.z/2),{mesh:new U(te,A),w:Q.max.x-Q.min.x}},L=P("Pasa"),F=P("palabra"),N=L.w+F.w+.06,q=-N/2,G=-N/2+L.w+.06,W=Ns.z+7.2;L.mesh.position.set(-40,0,W),F.mesh.position.set(40,0,W),t.add(L.mesh,F.mesh);let se=(()=>{let B=document.createElement("canvas");B.width=256,B.height=64;let te=B.getContext("2d"),Q=te.createRadialGradient(128,32,4,128,32,120);return Q.addColorStop(0,"rgba(0,0,20,0.85)"),Q.addColorStop(1,"rgba(0,0,20,0)"),te.fillStyle=Q,te.fillRect(0,0,256,64),new Kt(B)})(),K=new U(new Ct(N*1.25,2.6),new ut({map:se,transparent:!0,depthWrite:!1,opacity:0}));K.position.set(.4,-.5,Ns.z+5.4),t.add(K);let J=null;if(e){let B=new Ks().load(e,Q=>{let he=Q.image.width/Q.image.height;J.scale.set(he,1,1)});B.colorSpace=Tt,J=new U(new Ct(4.2,4.2),new ut({map:B,transparent:!0,toneMapped:!1})),J.position.set(0,0,W),J.visible=!1;let te=new Ge;te.add(J),t.add(te),L.mesh.visible=F.mesh.visible=!1}let ee=new Rs(i);ee.addPass(new Cs(t,n));let Ce=new Pi(new ae(i.domElement.width,i.domElement.height),.45,.4,.88);ee.addPass(Ce),ee.addPass(new Ps);let $=new lt,pe=new D,ve=new en,de=new en,O=new D,V=new D,ue=new D,Le=new lt,ge=new D(0,1,0),Xe=[];function rt(B){let te=Lo(B),Q=$n(5.8,6.4,B)*(1-$n(6.8,7.4,B))*.42,he=$n(1,1.6,B)*(1-$n(5.6,6.2,B))*.16*Math.sin(B*1.4)+(B>7&&B<10?.06*Math.sin(B*2):0);if(B<10)n.position.set(Math.sin(B*.9)*.6*(B>1?1:0),Math.cos(B*.7)*.4*(B>1?1:0),te),ue.set(n.position.x*.3,Math.tan(Q)*10,te-10);else{let I=$n(10,12,B);n.position.set(0,.6*I,te+0),ue.set(0,0,te-10).lerp(Ns,I)}let Ne=B>13.2&&B<13.8?(1-(B-13.2)/.6)*.12:0;n.position.x+=Math.sin(B*90)*Ne,n.position.y+=Math.cos(B*77)*Ne,n.up.set(Math.sin(he),Math.cos(he),0),n.lookAt(ue),a.position.copy(n.position).add(V.set(-3,2,-4)),r.position.copy(n.position).add(V.set(3,-2,-6));let ke=$n(10,12.2,B),$e=new en().setFromAxisAngle(ge,B*.45);for(let I of u){let Ue=I.a+I.dir*B*.55;if(pe.set(Math.cos(Ue)*I.r,Math.sin(Ue)*I.r,I.z),ve.setFromAxisAngle(I.axis,B*I.spin).multiply(I.q0),O.setScalar(I.scale),I.globe&&ke>0){let C=V.copy(I.sphereDir).applyQuaternion($e).multiplyScalar(g).add(Ns),v=ke,k=pe.sub(Ns).lerp(C.clone().sub(Ns),v);k.applyAxisAngle(new D(0,0,1),(1-v)*3.2),pe.copy(k).add(Ns),Le.lookAt(C.clone().sub(Ns).normalize().add(pe),pe,ge),de.setFromRotationMatrix(Le),ve.slerp(de,v),O.setScalar(ji.lerp(I.scale,.85,v))}else!I.globe&&B>10&&O.multiplyScalar(1-$n(10,11.5,B));let Se=n.position.z-pe.z;B<10.5&&Se<1.5&&Se>-3&&O.multiplyScalar(Math.max(0,(Se+3)/4.5)),$.compose(pe,ve,O),I.mesh.setMatrixAt(I.i,$)}d.forEach(I=>{I.instanceMatrix.needsUpdate=!0}),_.forEach((I,Ue)=>{I.rotation.z=B*.8*(Ue%2?1:-1),I.rotation.x=I.userData.tilt*Math.sin(B),I.material.opacity=.55*(1-$n(5.6,6.2,B))}),m.visible=B>3.5&&B<5.2,m.visible&&(M(B,p.position),R.forEach((I,Ue)=>M(B-(Ue+1)*.022,I.position))),E.visible=B>6.6&&B<10.6,w.opacity=.9*$n(6.6,7.4,B)*(1-$n(9.9,10.5,B)),b.rotation.set(B*1.6,B*.9,.5),x.rotation.set(-B*1.3,.8+B*1.1,-.5),y.material.opacity=.35*w.opacity;let me=13.2;if(J){J.visible=B>12.6;let I=nd((B-12.6)/.6),Ue=I<1?I*I*(1+1.7*(1-I)):1+Math.exp(-(B-me)*6)*Math.sin((B-me)*25)*.08;J.parent.scale.setScalar(Math.max(.001,Ue)),K.material.opacity=.6*$n(12.8,me,B)}else{let I=nd((B-12.1)/(me-12.1)),Ue=I*I*I,Se=B>me?Math.exp(-(B-me)*7)*Math.sin((B-me)*30)*.35:0;L.mesh.position.x=ji.lerp(-34,q,Ue)-Se,F.mesh.position.x=ji.lerp(34,G,Ue)+Se,L.mesh.rotation.y=(1-Ue)*.9,F.mesh.rotation.y=-(1-Ue)*.9,L.mesh.visible=F.mesh.visible=B>12,K.material.opacity=.75*$n(12.6,me,B)}}function re(B){let te=B<1.1?Math.exp(-Math.pow((B-.15)/.25,2)):0,Q=Math.max(B<.4?1-B/.4:0,Math.exp(-Math.pow((B-10.05)/.18,2)),.55*Math.exp(-Math.pow((B-13.22)/.08,2)),.35*Math.exp(-Math.pow((B-6.5)/.4,2))),he=$n(14.7,15.3,B);return{streak:te,flash:Q,fade:he}}return{scene:t,camera:n,update:rt,overlay:re,render(B){rt(B),ee.render()},resize(B,te){n.aspect=B/te,n.updateProjectionMatrix(),ee.setSize(B,te)},dispose(){t.traverse(B=>{B.geometry&&B.geometry.dispose()}),ee.dispose?.()}}}function Qc(i,e,t){let n=i.createGain();n.gain.value=.8,n.connect(e);let s=60/135;for(let a=0;a*s<13;a++){let r=t+.9+a*s;r-t>9.8&&r-t<10.6||(dt.kick(i,n,r,.45),dt.hat(i,n,r+s/2,.05))}for(let a=0;a*s<13;a++){let r=t+.9+a*s+s/2;dt.tone(i,n,r,a%8<4?55:49,s*.45,"sawtooth",.05)}dt.whoosh(i,n,t+0,1,0,0,.5),[1.5,2,2.5,3,3.6,4.3,4.9,5.5].forEach((a,r)=>dt.whoosh(i,n,t+a-.35,.6,r%2?.8:-.8,r%2?-.8:.8,.28)),dt.whoosh(i,n,t+3.6,1.2,-1,1,.45),dt.whoosh(i,n,t+8,1,.6,-.6,.35),dt.whoosh(i,n,t+9.9,2.2,-1,1,.5),dt.whoosh(i,n,t+12.3,.9,-1,0,.35),dt.whoosh(i,n,t+12.3,.9,1,0,.35),dt.kick(i,n,t+13.2,.9),dt.chord(i,n,t+13.2,[130.8,196,261.6,329.6,392],2.6,.06),dt.applause(i,n,t+13.6,3.2,.45)}var rd={};as(rd,{DURACION:()=>P3,LLEGADAS:()=>Xp,crearCabecera:()=>N3,programarAudioRespaldo:()=>U3});var th=class extends ui{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Ie;e.deleteAttribute("uv");let t=new yt({side:Pt}),n=new yt,s=new Rn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let a=new U(e,t);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let r=new An(e,n,6),o=new Xt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),r.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),r.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),r.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),r.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),r.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),r.setMatrixAt(5,o.matrix),this.add(r);let l=new U(e,cr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new U(e,cr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new U(e,cr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new U(e,cr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new U(e,cr(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let f=new U(e,cr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function cr(i){return new jr({color:0,emissive:16777215,emissiveIntensity:i})}var P3=10.4,oa="ABCDEFGHIJKLMN\xD1OPQRSTUVWXYZ".split(""),id=2285776,sd=16727976,I3=9059032,nh=14673134,Qi=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},ad=i=>Math.min(1,Math.max(0,i)),Ot=(()=>{let i=12345;return()=>(i=i*16807%2147483647)/2147483647})(),Wp=[["RUEDA",2.25],["LA",0],["LETRA",-2.25]],Xp=(()=>{let i=[],e=0;return Wp.forEach(([t])=>[...t].forEach(()=>{i.push(5.35+e*.17+.55),e++})),i})();function ih(i,{fg:e="#ffffff",bg:t=null,size:n=128,silver:s=!1}={}){let a=document.createElement("canvas");a.width=a.height=n;let r=a.getContext("2d");if(t&&(r.fillStyle=t,r.beginPath(),r.arc(n/2,n/2,n/2,0,7),r.fill()),r.font=`900 ${n*.62}px Arial`,r.textAlign="center",r.textBaseline="middle",s){let l=r.createLinearGradient(0,0,0,n);l.addColorStop(0,"#ffffff"),l.addColorStop(.5,"#9aa3b4"),l.addColorStop(1,"#f0f4ff"),r.fillStyle=l}else r.fillStyle=e;r.fillText(i,n/2,n/2+n*.04);let o=new Kt(a);return o.colorSpace=Tt,o}function L3(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new Kt(i)}function D3(i=3,e=1.25,t=.8){let n=new In;for(let a=0;a<10;a++){let r=Math.PI/2+a*Math.PI/5,o=a%2?e:i,l=Math.cos(r)*o,c=Math.sin(r)*o;a?n.lineTo(l,c):n.moveTo(l,c)}n.closePath();let s=new Ln(n,{depth:t,bevelEnabled:!0,bevelThickness:.35,bevelSize:.3,bevelSegments:4});return s.center(),s}function N3(i,{logoUrl:e=null}={}){let t=new ui,n=new Wt(60,i.domElement.width/i.domElement.height,.1,800),s=new er(i),a=s.fromScene(new th,.04);i.toneMappingExposure=.9,t.environment=a.texture,t.add(new mi(12638463,4196944,.6));let r=new Js(16777215,1.8);r.position.set(3,6,8),t.add(r);let o=new Rn(12577023,8,30,1.6);t.add(o);let l=new U(new Et(400,48,24),new Gt({side:Pt,depthWrite:!1,fog:!1,uniforms:{uT:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform float uT;
      void main(){ float h = vP.y*0.5+0.5 + 0.15*sin(vP.x*3.0+uT*0.4);
        vec3 a = vec3(0.02,0.05,0.38), b = vec3(0.36,0.02,0.38), c = vec3(0.12,0.01,0.22);
        vec3 col = mix(c, mix(a, b, smoothstep(0.25,0.85,h)), smoothstep(0.0,0.4,h));
        gl_FragColor = vec4(col,1.0); }`}));t.add(l);let c=L3(),u=new Ge;t.add(u);for(let $=0;$<90;$++){let pe=new Bn(new Pn({map:c,color:[8378623,16744400,16777215,11567359][$%4],transparent:!0,opacity:.04+Ot()*.09,blending:Zt,depthWrite:!1}));pe.position.set((Ot()-.5)*120,(Ot()-.5)*80,30-Ot()*200),pe.scale.setScalar(3+Ot()*12),u.add(pe)}let d=new yt({color:nh,metalness:1,roughness:.2,envMapIntensity:.8}),h=new yt({color:16777215,roughness:.3,emissive:16777215,emissiveIntensity:.05}),f=[],g={},_=($,pe,ve,de=!0)=>{let O=$+pe+ve;if(g[O])return g[O];let V=new Ii($,{font:sa,size:pe,depth:ve,curveSegments:5,bevelEnabled:de,bevelThickness:ve*.25,bevelSize:pe*.05,bevelSegments:3});return V.center(),g[O]=V};for(let $=0;$<70;$++){let pe=new U(_(oa[$%26],.6,.15),h);pe.position.set((Ot()-.5)*50,(Ot()-.5)*30,20-Ot()*160),pe.userData.rv=new D(Ot(),Ot(),Ot()).multiplyScalar(1.5),pe.userData.p0=pe.position.clone(),t.add(pe),f.push(pe)}let m=new Ge;t.add(m);let p=[id,sd,nh],S=[],R=new Et(.55,24,16);for(let $=0;$<70;$++){let pe=p[$%3],ve=new U(R,new yt({color:pe,metalness:pe===nh?1:.2,roughness:.2,emissive:pe===nh?0:pe,emissiveIntensity:.25})),de=new Bn(new Pn({map:ih(oa[$%27]),transparent:!0,depthTest:!0}));de.scale.setScalar(.75),de.position.z=.56,ve.add(de);let O=new D((Ot()-.5)*1.6,(Ot()-.5)*1,.6+Ot()*.8).normalize();ve.userData={dir:O,speed:22+Ot()*30,delay:Ot()*.25},m.add(ve),S.push(ve)}let M=[];for(let $=0;$<160;$++){let pe=$*.42,ve=-12-$*.75,de=5.5+Math.sin($*.3)*.8,O=new U(new Ct(1.6,1.6),new yt({map:ih(oa[$%27],{silver:!0,size:128}),transparent:!0,metalness:.6,roughness:.3,side:pt,emissive:16777215,emissiveIntensity:.15,emissiveMap:null}));O.position.set(Math.cos(pe)*de,Math.sin(pe)*de,ve),O.lookAt(0,0,ve+4),O.userData.a=pe,O.userData.r=de,m.add(O),M.push(O)}let E=new U(_("A",4.2,1.2),d);E.position.set(2.4,.4,-36),m.add(E);let w=new Je(1,1,.28,40),b=[];[[-4.5,-40,9],[4.2,-68,14],[-3.6,-85,10],[3,-100,40]].forEach(([$,pe,ve],de)=>{let O=new Ge;O.position.set($,-6,pe),m.add(O),b.push(O);for(let V=0;V<ve;V++){let ue=[id,sd,I3][(V+de)%3],Le=new U(w,[new yt({color:ue,metalness:.5,roughness:.25,emissive:ue,emissiveIntensity:.2}),new yt({map:ih(oa[(V*5+de)%27],{bg:"#"+new Fe(ue).getHexString()}),metalness:.3,roughness:.3}),new yt({color:ue})]);Le.position.y=V*.34,Le.rotation.y=V*.3,Le.rotation.x=.05*Math.sin(V),O.add(Le)}});let y=new U(D3(),new yt({color:15659770,metalness:1,roughness:.15,envMapIntensity:.9}));t.add(y);let A=new Ge;A.position.set(0,0,-400),t.add(A);let P=[],L=new yt({color:13686500,metalness:1,roughness:.16,envMapIntensity:.9}),F=0;Wp.forEach(([$,pe])=>{let ve=[...$].map(ue=>{let Le=new Ii(ue,{font:sa,size:1.7,depth:.7,curveSegments:6,bevelEnabled:!0,bevelThickness:.18,bevelSize:.08,bevelSegments:4});return Le.computeBoundingBox(),Le}),de=ve.map(ue=>ue.boundingBox.max.x-ue.boundingBox.min.x+.18),V=-de.reduce((ue,Le)=>ue+Le,0)/2;ve.forEach((ue,Le)=>{ue.center();let ge=new U(ue,L),Xe=V+de[Le]/2;V+=de[Le],ge.userData={target:new D(Xe,pe,0),from:new D((Ot()-.5)*16,(Ot()-.5)*10,30+Ot()*6),t0:5.35+F*.17,spin:(Ot()-.5)*6},A.add(ge),P.push(ge),F++})});let N=null;if(e){let $=new Ks().load(e);$.colorSpace=Tt,N=new U(new Ct(9,9),new ut({map:$,transparent:!0,toneMapped:!1})),N.position.z=.8,A.add(N)}let q=new U(new vt(6.3,.12,16,160),new ut({color:6289663,transparent:!0,toneMapped:!1}));q.position.z=-1.5,A.add(q);let G=new Bn(new Pn({map:c,color:4253951,transparent:!0,opacity:0,blending:Zt,depthWrite:!1}));G.scale.setScalar(20),G.position.z=-2,A.add(G);let W=oa.map(($,pe)=>{let ve=Math.PI/2-pe/oa.length*Math.PI*2,de=pe%2?sd:id,O=new U(new Et(.42,20,14),new yt({color:de,emissive:de,emissiveIntensity:.3,roughness:.25})),V=new Bn(new Pn({map:ih($),transparent:!0}));return V.scale.setScalar(.62),V.position.z=.43,O.add(V),O.position.set(Math.cos(ve)*6.3,Math.sin(ve)*6.3,-1.3),O.userData.t0=6.9+pe*.055,A.add(O),O}),se=new yt({color:15397119,metalness:.9,roughness:.15,transparent:!0,opacity:.45,depthWrite:!1}),K=Array.from({length:40},($,pe)=>{let ve=new U(_(oa[pe*7%27],1.4,.4),se);return ve.userData={dir:new D((Ot()-.5)*1.4,(Ot()-.5)*1,1).normalize(),d:Ot()*.4,rv:Ot()*4},A.add(ve),ve}),J=new Rs(i);J.addPass(new Cs(t,n)),J.addPass(new Pi(new ae(i.domElement.width,i.domElement.height),.28,.35,.93)),J.addPass(new Ps);function ee($){l.material.uniforms.uT.value=$;let pe=$>=4.55;if(m.visible=!pe,A.visible=pe,pe){let de=Qi(4.55,10.4,$);n.position.set(.3*Math.sin($*.7),.2,-383-de*5),n.lookAt(0,.1,-400),n.rotation.z=0}else{let de=10,O=0;if($>1){let ue=$-1;de=10-(ue*22+ue*ue*6)}$>3&&(O=Qi(3,4.3,$)*10+($-3)*1.5),n.position.set(Math.sin($*1.3)*.4,O,de);let V=new D(Math.sin($*.9)*.6,O+($>3?1.8+Qi(3,4,$)*2:0),de-10);n.lookAt(V),n.rotateZ(Math.sin($*1.7)*.06+($>1?($-1)*.12:0))}o.position.copy(n.position),l.position.copy(n.position),u.position.set(0,0,pe?-400:0),f.forEach((de,O)=>{de.rotation.x=$*de.userData.rv.x,de.rotation.y=$*de.userData.rv.y,de.position.copy(de.userData.p0),pe&&(de.position.z=-406-O%30*2)}),pe||(S.forEach(de=>{let O=Math.max(0,$-de.userData.delay),V=O*de.userData.speed;de.position.copy(de.userData.dir).multiplyScalar(V),de.position.z+=-16,de.visible=$<1.8,de.rotation.y=O*3;let ue=Qi(0,.25,O);de.scale.setScalar(Math.max(.001,ue))}),M.forEach((de,O)=>{let V=de.userData.a+$*.9;de.position.x=Math.cos(V)*de.userData.r,de.position.y=Math.sin(V)*de.userData.r,de.rotation.z+=0,de.visible=$>.6}),E.visible=$>1.6,E.rotation.y=-.6+$*.5,E.scale.setScalar(Math.max(.001,Qi(1.6,2.1,$))),b.forEach((de,O)=>{de.rotation.y=$*(O%2?.8:-.8)}));let ve=ad(($-3.95)/1);if(y.visible=$>3.9&&$<5,y.visible){let de=new D;n.getWorldDirection(de);let O=new D().crossVectors(de,n.up).normalize(),V=new D().crossVectors(O,de).normalize(),ue=ji.lerp(-9,9,ve);y.position.copy(n.position).addScaledVector(de,4.2-Math.sin(ve*Math.PI)*1.6).addScaledVector(O,ue).addScaledVector(V,ue*.65),y.quaternion.copy(n.quaternion),y.rotateZ(-ve*2.4),y.rotateY(.35),y.scale.setScalar(.9+Math.sin(ve*Math.PI)*.9)}if(pe){if(P.forEach(O=>{let{target:V,from:ue,t0:Le,spin:ge}=O.userData,Xe=ad(($-Le)/.55),rt=1-Math.pow(1-Xe,3);O.visible=$>Le&&!N,O.position.lerpVectors(ue,V,rt),O.rotation.set((1-rt)*ge,(1-rt)*ge*.7,0);let re=Xe>=1?1+Math.exp(-($-Le-.55)*9)*.12:1;if(O.scale.setScalar(re),$>9){let B=ad(($-9)/.9);O.position.z=V.z+B*2}}),N){let O=Qi(5.6,6.4,$);N.scale.setScalar(Math.max(.001,O))}let de=Qi(6.3,6.9,$);q.material.opacity=de,q.scale.setScalar(.6+.4*de),G.material.opacity=.12*de,q.rotation.z=$*.1,W.forEach((O,V)=>{let ue=Qi(O.userData.t0,O.userData.t0+.3,$);O.visible=ue>0,O.scale.setScalar(Math.max(.001,ue*(1+.25*Math.sin(Math.PI*ue))))}),K.forEach(O=>{let V=$-9-O.userData.d;O.visible=V>0,V>0&&(O.position.copy(O.userData.dir).multiplyScalar(V*28),O.position.z+=1,O.rotation.set(V*O.userData.rv,V*2,0))})}}function Ce($){let pe=Math.max($<.5?1-$/.5:0,.7*Math.exp(-Math.pow(($-4.55)/.12,2)),.5*Math.exp(-Math.pow(($-9.9)/.2,2))),ve=0,de=Qi(9.9,10.35,$);return{streak:ve,flash:pe,fade:de}}return{scene:t,camera:n,update:ee,overlay:Ce,render($){ee($),J.render()},resize($,pe){n.aspect=$/pe,n.updateProjectionMatrix(),J.setSize($,pe)},dispose(){i.toneMappingExposure=1,t.traverse($=>{$.geometry&&$.geometry.dispose()}),a.dispose(),s.dispose(),J.dispose?.()}}}function U3(i,e,t){let n=i.createGain();n.gain.value=.85,n.connect(e);let s=(a,r=.18)=>{[523,1187,1810,2650].forEach((o,l)=>dt.tone(i,n,a,o*(1+Ot()*.01),.5-l*.08,l?"sine":"triangle",r/(l+1))),dt.kick(i,n,a,.15)};dt.whoosh(i,n,t+0,.9,0,0,.55),dt.kick(i,n,t+.05,.5),[1.1,1.8,2.5,3.1].forEach((a,r)=>dt.whoosh(i,n,t+a,.7,r%2?.8:-.8,r%2?-.8:.8,.3)),dt.whoosh(i,n,t+3.9,1,-1,1,.55),Xp.forEach(a=>s(t+a)),[1568,2093,3136].forEach((a,r)=>dt.tone(i,n,t+8+r*.02,a,1.8,"sine",.12/(r+1))),dt.whoosh(i,n,t+8.9,1.2,0,0,.5),dt.applause(i,n,t+9.7,3.5,.45)}var es=[{...Hu,modulo:zu,cabecera:null,color:16742912,especiales:!1,archivosMusica:["cabecera_antena3_2000"],archivosLogo:["antena3_2000"]},{...ku,modulo:Gu,cabecera:eh,color:4161023,especiales:!0,archivosMusica:["cabecera_telecinco_2007","cabecera_telecinco"],archivosLogo:["telecinco_2007","telecinco"]},{...Vu,modulo:Wu,cabecera:eh,color:2799871,especiales:!0,archivosMusica:["cabecera_telecinco_2018","cabecera_telecinco"],archivosLogo:["telecinco_2018","telecinco"]},{...Xu,modulo:$u,cabecera:null,color:2061567,especiales:!0,archivosMusica:["cabecera_antena3_2020"],archivosLogo:["antena3_2020"]},{...Yu,modulo:ju,cabecera:rd,color:12603647,especiales:!1,archivosMusica:["cabecera_rueda_letra"],archivosLogo:["rueda_letra"]}],$p={...Ku,modulo:Zu,cabecera:null,archivosMusica:[],archivosLogo:[]};var Yp={_info:"Bancos de preguntas ORIGINALES de ejemplo. Puedes ampliarlos editando este archivo (y recompilando) o, sin recompilar, a\xF1adiendo elementos en data/preguntas_extra.js con la misma estructura.",una_de_cuatro:[{p:"\xBFCu\xE1l es el r\xEDo m\xE1s largo de la pen\xEDnsula ib\xE9rica?",op:["Ebro","Tajo","Duero","Guadalquivir"],r:1},{p:"\xBFCu\xE1ntas patas tiene una ara\xF1a?",op:["Seis","Ocho","Diez","Doce"],r:1},{p:"\xBFQu\xE9 planeta es conocido como el planeta rojo?",op:["Venus","J\xFApiter","Marte","Saturno"],r:2},{p:"\xBFEn qu\xE9 ciudad est\xE1 la Alhambra?",op:["C\xF3rdoba","Sevilla","Granada","Toledo"],r:2},{p:"\xBFCu\xE1l es el s\xEDmbolo qu\xEDmico del oro?",op:["Or","Au","Ag","Go"],r:1},{p:"\xBFQui\xE9n escribi\xF3 'Don Quijote de la Mancha'?",op:["Lope de Vega","Quevedo","Cervantes","G\xF3ngora"],r:2},{p:"\xBFCu\xE1ntos minutos tiene un d\xEDa?",op:["1.240","1.440","1.640","1.400"],r:1},{p:"\xBFQu\xE9 instrumento tiene 88 teclas?",op:["\xD3rgano","Acorde\xF3n","Piano","Clavicordio"],r:2},{p:"\xBFCu\xE1l es el oc\xE9ano m\xE1s grande?",op:["Atl\xE1ntico","\xCDndico","Pac\xEDfico","\xC1rtico"],r:2},{p:"\xBFQu\xE9 animal es el m\xE1s r\xE1pido en tierra?",op:["Le\xF3n","Guepardo","Gacela","Caballo"],r:1},{p:"\xBFEn qu\xE9 a\xF1o lleg\xF3 Col\xF3n a Am\xE9rica?",op:["1492","1500","1488","1512"],r:0},{p:"\xBFCu\xE1l es la capital de Portugal?",op:["Oporto","Lisboa","Co\xEDmbra","Braga"],r:1}],una_de_dos:[{p:"Ave nocturna que gira mucho la cabeza",op:["B\xFAho","Gaviota"],r:0},{p:"Metal l\xEDquido a temperatura ambiente",op:["Mercurio","Plomo"],r:0},{p:"Capital de Italia",op:["Mil\xE1n","Roma"],r:1},{p:"N\xFAmero de lados de un hex\xE1gono",op:["Seis","Ocho"],r:0},{p:"Pintor de 'Las Meninas'",op:["Goya","Vel\xE1zquez"],r:1},{p:"Gas que respiramos para vivir",op:["Ox\xEDgeno","Helio"],r:0},{p:"Estaci\xF3n del a\xF1o que empieza en diciembre en Espa\xF1a",op:["Invierno","Oto\xF1o"],r:0},{p:"Instrumento de viento de metal",op:["Trompeta","Viol\xEDn"],r:0},{p:"Continente donde est\xE1 Egipto",op:["Asia","\xC1frica"],r:1},{p:"Hueso m\xE1s largo del cuerpo humano",op:["F\xE9mur","H\xFAmero"],r:0}],silla_azul:[{letras:["A","B"],A:{p:"Empieza por A: \xE1rbol que da bellotas en la dehesa",r:"alcornoque"},B:{p:"Empieza por B: embarcaci\xF3n de vela grande",r:"barco"}},{letras:["C","D"],C:{p:"Empieza por C: p\xE1jaro amarillo que canta y se tiene en jaula",r:"canario"},D:{p:"Empieza por D: d\xEDa que sigue al s\xE1bado",r:"domingo"}},{letras:["E","F"],E:{p:"Empieza por E: mam\xEDfero con trompa",r:"elefante"},F:{p:"Empieza por F: fruta roja peque\xF1a con semillas por fuera",r:"fresa"}},{letras:["G","H"],G:{p:"Empieza por G: insecto verde que salta en el campo",r:"grillo"},H:{p:"Empieza por H: herramienta para cortar madera con hoja met\xE1lica y mango",r:"hacha"}},{letras:["L","M"],L:{p:"Empieza por L: fruto c\xEDtrico \xE1cido y amarillo",r:"limon"},M:{p:"Empieza por M: dulce elaborado por las abejas",r:"miel"}},{letras:["P","R"],P:{p:"Empieza por P: ave que puede imitar la voz humana",r:"papagayo"},R:{p:"Empieza por R: flor con espinas en el tallo",r:"rosa"}},{letras:["S","T"],S:{p:"Empieza por S: prenda que se pone en la cabeza para protegerse del sol",r:"sombrero"},T:{p:"Empieza por T: felino de rayas",r:"tigre"}}],piramides:[{palabras:["solanas","solana","salon","losa","sol"],defs:["Lugares donde da el sol de lleno (plural)","Lugar donde da el sol de lleno","Habitaci\xF3n principal de una casa para recibir visitas","Piedra llana y poco gruesa para pavimentar","Estrella que ilumina la Tierra"]},{palabras:["piratas","pirata","tapir","pita","tia"],defs:["Ladrones del mar (plural)","Ladr\xF3n del mar","Mam\xEDfero con una peque\xF1a trompa que vive en Am\xE9rica y Asia","Planta de hojas carnosas y puntiagudas","Hermana del padre o de la madre"]}],pulsador:[{tema:"Animales",p:"Mam\xEDfero que lleva a sus cr\xEDas en una bolsa",r:"canguro"},{tema:"Animales",p:"Ave de plumaje rosado que se apoya en una pata",r:"flamenco"},{tema:"Animales",p:"Reptil de larga vida con caparaz\xF3n",r:"tortuga"},{tema:"Animales",p:"Insecto que fabrica miel",r:"abeja"},{tema:"Animales",p:"Felino conocido como rey de la selva",r:"leon"},{tema:"Cocina",p:"Plato de arroz t\xEDpico valenciano",r:"paella"},{tema:"Cocina",p:"Sopa fr\xEDa de tomate andaluza",r:"gazpacho"},{tema:"Cocina",p:"Tortilla hecha con patatas y huevo",r:"tortilla de patatas|tortilla"},{tema:"Cocina",p:"Dulce frito que se moja en chocolate",r:"churro|churros"},{tema:"Cocina",p:"Utensilio para fre\xEDr con mango largo",r:"sarten"},{tema:"Deportes",p:"Deporte con raqueta y red baja que se juega en pista",r:"tenis"},{tema:"Deportes",p:"Deporte que se juega con canasta",r:"baloncesto"},{tema:"Deportes",p:"Carrera de 42 kil\xF3metros y 195 metros",r:"maraton"},{tema:"Deportes",p:"Deporte que se practica sobre olas con una tabla",r:"surf"},{tema:"Deportes",p:"Disciplina de nataci\xF3n en la que se nada boca arriba",r:"espalda"}],de_par_en_par:[{tema:"Pa\xEDses y capitales",pares:[["Francia","Par\xEDs"],["Alemania","Berl\xEDn"],["Grecia","Atenas"],["Per\xFA","Lima"],["Jap\xF3n","Tokio"],["Egipto","El Cairo"],["Noruega","Oslo"],["Chile","Santiago"],["Cuba","La Habana"]]}],antes_y_despues:[{modo:"inicio",parte:"PAN",items:[["Prenda que cubre desde la cintura hasta los pies","pantalon"],["Persona que hace o vende pan","panadero"],["Felino de pelaje negro","pantera"],["Vista amplia de un paisaje","panorama"],["Pandereta grande","pandero"],["Folleto de propaganda","panfleto"],["Terreno con agua estancada y fango","pantano"],["Conjunto de celdillas de cera de las abejas","panal"],["Cartel grande que se lleva en una manifestaci\xF3n","pancarta"]]},{modo:"fin",parte:"ERO",items:[["Persona que reparte las cartas","cartero"],["Primer mes del a\xF1o","enero"],["Persona que apaga incendios","bombero"],["Persona que atiende en un bar o restaurante","camarero"],["Persona que trabaja la madera","carpintero"],["Recipiente para guardar dinero, a menudo con forma de cerdito","hucha|monedero"],["Persona que cuida ovejas","pastor|ovejero"],["Persona que cocina profesionalmente","cocinero"],["Persona que conduce un barco o avi\xF3n","piloto|timonero"]]}],palabra_imposible:[{palabras:["Bonhom\xEDa","Petricor","Acendrado","Ataraxia","Procrastinar","Serendipia","Inefable","Ef\xEDmero"],defs:[["Afabilidad, sencillez y bondad en el car\xE1cter","Bonhom\xEDa"],["Olor que produce la lluvia al caer sobre suelo seco","Petricor"],["Puro, sin mancha ni defecto","Acendrado"],["Imperturbabilidad, serenidad del \xE1nimo","Ataraxia"],["Aplazar o retrasar una tarea","Procrastinar"],["Hallazgo valioso que se produce por casualidad","Serendipia"],["Que no se puede explicar con palabras","Inefable"],["Que dura muy poco tiempo","Ef\xEDmero"]]}],letra_a_letra:[{palabras:["casa","capa","capo","ca\xF1o","pa\xF1o"],defs:["Edificio para vivir","Prenda larga y suelta sin mangas","Jefe de una banda mafiosa","Tubo corto por el que sale agua","Trozo de tela"]},{palabras:["mano","mono","mojo","moja","hoja"],defs:["Parte del cuerpo al final del brazo","Primate de cola larga","Salsa canaria","Tercera persona del verbo mojar","Parte verde de una planta"]}],coco_loco:[{pista:"Mam\xEDfero volador nocturno",r:"murcielago"},{pista:"Brilla en el cielo de noche",r:"estrella"},{pista:"Veh\xEDculo de dos ruedas a pedales",r:"bicicleta"},{pista:"Dulce hecho con cacao",r:"chocolate"},{pista:"Instrumento para observar astros",r:"telescopio"},{pista:"Insecto de alas de colores",r:"mariposa"}],que_es_que:[[["Cuita","Pena"],["\xD3sculo","Beso"],["Galeno","M\xE9dico"]],[["Can","Perro"],["\xCDnclito","Famoso"],["\xC1gape","Banquete"],["\xD3bice","Obst\xE1culo"]],[["Prosapia","Linaje"],["F\xE1mulo","Criado"],["G\xE1rrulo","Charlat\xE1n"],["Albur","Azar"],["Cefalea","Dolor de cabeza"]]],pista_musical:[{titulo:"Himno de la alegr\xEDa",acepta:"himno de la alegria|oda a la alegria|novena sinfonia",notas:"E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4",pistas:["Fragmento (5 s)","Verso: 'canta, oh dios, la alegr\xEDa que nos une' (verso inventado de ejemplo)","Fragmento m\xE1s largo (3 s)","T\xEDtulo con otras palabras: 'Canci\xF3n de la felicidad'","Fragmento completo (1 s)"]},{titulo:"Para Elisa",acepta:"para elisa|fur elise",notas:"E5 D#5 E5 D#5 E5 B4 D5 C5 A4",pistas:["Fragmento (5 s)","Pista: pieza para piano dedicada a una mujer","Fragmento m\xE1s largo (3 s)","T\xEDtulo con otras palabras: 'Dedicada a Eli'","Fragmento completo (1 s)"]},{titulo:"Martinillo",acepta:"martinillo|frere jacques|campanero",notas:"C4 D4 E4 C4 C4 D4 E4 C4 E4 F4 G4 E4 F4 G4",pistas:["Fragmento (5 s)","Verso: '\xBFduermes t\xFA?' (canci\xF3n popular)","Fragmento m\xE1s largo (3 s)","T\xEDtulo con otras palabras: 'Peque\xF1o Mart\xEDn'","Fragmento completo (1 s)"]}],sopa_letras:[{tema:"Frutas",palabras:["PERA","KIWI","LIMA"]},{tema:"Colores",palabras:["ROJO","AZUL","GRIS"]},{tema:"Animales",palabras:["GATO","LORO","OSO"]},{tema:"Cuerpo humano",palabras:["MANO","PIE","OJO"]},{tema:"Muebles",palabras:["SOFA","MESA","CAMA"]},{tema:"Metales",palabras:["ORO","COBRE","ZINC"]},{tema:"R\xEDos de Espa\xF1a",palabras:["EBRO","TAJO","SIL"]},{tema:"Notas musicales",palabras:["DO","SOL","MI"]}],palabras_cruzadas:[{tema:"El mar",items:[["Animal de ocho brazos","pulpo"],["Movimiento del agua que rompe en la playa","ola"],["Construcci\xF3n para que atraquen los barcos","puerto"],["Pez muy grande con aleta dorsal temida","tiburon"],["Concha que puede tener una perla","ostra"],["Subida y bajada del nivel del mar","marea"],["Persona que trabaja en un barco","marinero"],["Crust\xE1ceo de pinzas que camina de lado","cangrejo"],["Arena junto al mar","playa"]]}],donde_estan:[{tema:"Objetos de casa",palabras:["L\xC1MPARA","ESPEJO","CORTINA","ALFOMBRA","RELOJ","COJ\xCDN","JARR\xD3N","ESTANTE","PERCHA"]},{tema:"Ciudades",palabras:["BILBAO","C\xC1DIZ","SORIA","LUGO","MURCIA","VIGO","\xC1VILA","REUS","JA\xC9N"]}],rosco:[[["A","e","Ave rapaz diurna de gran tama\xF1o, presente en muchos escudos","aguila"],["B","e","Tambor grande que se toca con una maza","bombo"],["C","e","Rumiante con jorobas propio de los desiertos de Asia","camello"],["D","e","Juego de 28 fichas rectangulares marcadas con puntos","domino"],["E","e","Mam\xEDfero enorme con trompa y colmillos de marfil","elefante"],["F","e","Torre con una luz potente que gu\xEDa a los barcos","faro"],["G","e","Instrumento de cuerda con caja en forma de ocho","guitarra"],["H","e","Agua en estado s\xF3lido","hielo"],["I","e","Porci\xF3n de tierra rodeada de agua","isla"],["J","e","Terreno con plantas y flores junto a una casa","jardin"],["L","e","Sat\xE9lite natural de la Tierra","luna"],["M","e","Persona que ense\xF1a en una escuela","maestro|maestra"],["N","e","Tiempo entre la puesta y la salida del sol","noche"],["\xD1","c","Periodo de doce meses","a\xF1o"],["O","e","Mam\xEDfero plant\xEDgrado que hiberna","oso"],["P","e","Ave que no vuela y vive en zonas fr\xEDas del hemisferio sur","pinguino"],["Q","e","Producto que se obtiene cuajando la leche","queso"],["R","e","Aparato para medir el tiempo que se lleva en la mu\xF1eca","reloj"],["S","e","Estrella que ilumina la Tierra","sol"],["T","e","Fruto rojo muy usado en ensaladas y salsas","tomate"],["U","e","Fruto de la vid","uva"],["V","e","Recipiente de cristal para beber","vaso"],["X","c","Coche con conductor que se alquila por trayectos","taxi"],["Y","c","Orilla del mar cubierta de arena","playa"],["Z","e","Calzado que cubre el pie","zapato"]],[["A","e","Veh\xEDculo con alas y motores que vuela","avion"],["B","e","Acci\xF3n de mover el cuerpo al ritmo de la m\xFAsica","baile"],["C","e","Habitaci\xF3n de la casa donde se preparan los alimentos","cocina"],["D","e","Mam\xEDfero marino muy inteligente que vive en grupos","delfin"],["E","e","Serie de pelda\xF1os para subir o bajar","escalera"],["F","e","Parte colorida y perfumada de muchas plantas","flor"],["G","e","Animal dom\xE9stico que caza ratones","gato"],["H","e","Herramienta de hoja curva para segar","hoz"],["I","e","Templo cristiano","iglesia"],["J","e","Recipiente con asa para servir l\xEDquidos","jarra"],["L","e","Conjunto de p\xE1ginas encuadernadas para leer","libro"],["M","e","Gran masa de agua salada","mar"],["N","e","Precipitaci\xF3n de agua helada en forma de copos","nieve"],["\xD1","c","Persona de corta edad","ni\xF1o|ni\xF1a"],["O","e","\xD3rgano de la vista","ojo"],["P","e","Alimento de harina, agua, sal y levadura cocido al horno","pan"],["Q","e","Que est\xE1 sin movimiento","quieto|quieta"],["R","e","Corriente natural de agua que desemboca en el mar","rio"],["S","e","Asiento con respaldo para una persona","silla"],["T","e","Aparato para hablar a distancia","telefono"],["U","e","Pieza dura en el extremo de los dedos","u\xF1a"],["V","e","Prenda femenina de una sola pieza","vestido"],["X","c","Prueba para evaluar conocimientos","examen"],["Y","e","Parte amarilla del huevo","yema"],["Z","e","Bebida que se obtiene exprimiendo frutas","zumo"]]],la_oportunidad:[["A","Prenda gruesa para abrigarse en invierno","abrigo"],["B","Embarcaci\xF3n grande","barco"],["C","Lugar donde se guardan los coches","cochera"],["D","Pieza blanca y dura de la boca","diente"],["E","Planta trepadora que cubre muros","enredadera|hiedra"],["F","Fruta roja peque\xF1a con semillas por fuera","fresa"],["G","Prenda para las manos","guante|guantes"],["H","Herramienta para cortar le\xF1a","hacha"],["I","Templo cristiano","iglesia"],["J","Planta de flores blancas muy arom\xE1ticas","jazmin"],["A","\xC1rbol que da aceitunas","aceituno"],["B","Calzado alto que cubre parte de la pierna","bota"],["C","Casita del perro","caseta"],["D","Periodo de veinticuatro horas","dia"],["E","Mam\xEDfero con trompa","elefante"],["F","Medio de transporte que circula sobre ra\xEDles","ferrocarril"],["G","Ave de corral que pone huevos","gallina"],["H","Aparato cerrado para asar o cocer alimentos","horno"],["I","Centro de ense\xF1anza secundaria","instituto"],["J","Mam\xEDfero salvaje con colmillos, parecido al cerdo","jabali"]],he_dicho:[["Julio C\xE9sar","Llegu\xE9, vi, venc\xED"],["Arqu\xEDmedes","\xA1Eureka!"],["S\xF3crates","Solo s\xE9 que no s\xE9 nada"],["Ren\xE9 Descartes","Pienso, luego existo"],["Galileo Galilei","Y sin embargo, se mueve"],["Her\xE1clito","Nadie se ba\xF1a dos veces en el mismo r\xEDo"],["Isaac Newton","Si he visto m\xE1s lejos es porque estoy sobre hombros de gigantes"],["William Shakespeare (Hamlet)","Ser o no ser, esa es la cuesti\xF3n"],["Francisco de Quevedo","Poderoso caballero es don Dinero"],["Miguel de Cervantes","En un lugar de la Mancha, de cuyo nombre no quiero acordarme"]],cantando_espero:[{titulo:"Himno de la alegr\xEDa",acepta:"himno de la alegria|oda a la alegria",notas:"E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4"},{titulo:"Martinillo",acepta:"martinillo|frere jacques",notas:"C4 D4 E4 C4 C4 D4 E4 C4 E4 F4 G4"},{titulo:"Estrellita d\xF3nde est\xE1s",acepta:"estrellita|estrellita donde estas|twinkle twinkle",notas:"C4 C4 G4 G4 A4 A4 G4 F4 F4 E4 E4 D4 D4 C4"},{titulo:"Cumplea\xF1os feliz",acepta:"cumplea\xF1os feliz|cumpleanos feliz",notas:"G4 G4 A4 G4 C5 B4 G4 G4 A4 G4 D5 C5"}],con_dos_palabras:[["paraguas","lluvia protege"],["biblioteca","libros prestados"],["sem\xE1foro","luces tr\xE1fico"],["playa","arena mar"],["dentista","m\xE9dico dientes"],["calendario","d\xEDas meses"],["bombilla","luz el\xE9ctrica"],["pijama","ropa dormir"],["cohete","viaje espacial"],["llave","abre puertas"],["volc\xE1n","monta\xF1a lava"],["helado","postre fr\xEDo"]],palabras_ocultas:[["Animal que ma\xFAlla","GA","TO"],["Parte de la cara para oler","NA","RIZ"],["Mueble para dormir","CA","MA"],["Color del cielo despejado","A","ZUL"],["Fruta amarilla y alargada","PLA","TANO"],["Prenda para los pies","ZA","PATO"],["Lugar donde se ven pel\xEDculas","CI","NE"],["Estaci\xF3n m\xE1s calurosa","VE","RANO"]]};function Bt(i){let e=window.PREGUNTAS_EXTRA&&window.PREGUNTAS_EXTRA[i]||[];return[...Yp[i]||[],...e]}var jp=i=>String(i||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zñ0-9 ]/g,"").replace(/\s+/g," ").trim(),Fi=(i,e)=>String(e).split("|").some(t=>jp(t).replace(/ñ/g,"n")===jp(i).replace(/ñ/g,"n")),vi=i=>new Promise(e=>setTimeout(e,i)),Kp=i=>i[Math.floor(Math.random()*i.length)],un=i=>{i=i.slice();for(let e=i.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}return i},Re=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Zp=!1;function Jp(i){Zp=i}function Us(i,{pitch:e=1,rate:t=1.05}={}){if(!Zp||!("speechSynthesis"in window))return;let n=new SpeechSynthesisUtterance(i);n.lang="es-ES",n.pitch=e,n.rate=t;let s=speechSynthesis.getVoices().find(a=>/^es(-|_)ES/i.test(a.lang))||speechSynthesis.getVoices().find(a=>/^es/i.test(a.lang));s&&(n.voice=s),speechSynthesis.cancel(),speechSynthesis.speak(n)}var on=class{constructor(e,t){this.rest=e,this.onTick=t,this.corriendo=!1,this.terminado=!1,this.fin=new Promise(n=>this._res=n),this._iv=setInterval(()=>{!this.corriendo||this.terminado||(this.rest=Math.max(0,this.rest-.1),this.onTick&&this.onTick(this.rest),this.rest<=0&&(this.terminado=!0,clearInterval(this._iv),this._res("TIEMPO")))},100),t&&t(e)}start(){return this.corriendo=!0,this}pause(){this.corriendo=!1}quitar(e){this.rest=Math.max(.1,this.rest-e)}stop(){this.terminado=!0,clearInterval(this._iv),this._res("STOP")}},hr=class{constructor(e){this.el=e}abrir(){this.el.classList.add("abierto")}cerrar(){this.el.classList.remove("abierto"),this.el.innerHTML=""}pantalla(e){return this.el.innerHTML=`<div class="j-cab"></div><div class="j-cuerpo">${e}</div>`,this.abrir(),this.el.querySelector(".j-cuerpo")}cabecera(e,t,n=null){let s=this.el.querySelector(".j-cab");if(!s)return;let a=e.equipos.map((r,o)=>`<span class="eq" style="--c:${r.color}">${Re(r.nombre)}${o===0?" (t\xFA)":""}: <b>${r.seg}</b> s</span>`).join("");s.innerHTML=`<div class="j-tit">${Re(t)}</div><div class="j-eqs">${a}</div><div class="j-reloj">${n!=null?Math.ceil(n)+" s":""}</div>`}setReloj(e){let t=this.el.querySelector(".j-reloj");t&&(t.textContent=Math.ceil(e)+" s")}clic(e,t="[data-v]",n=[]){return Promise.race([new Promise(s=>e.querySelectorAll(t).forEach(a=>a.onclick=()=>s(a.dataset.v))),...n])}respuesta(e,{pasa:t="Pasapalabra",letra:n=!1,placeholder:s="Escribe tu respuesta y pulsa Intro"}={},a=[]){let r=document.createElement("div");r.className="j-resp",r.innerHTML=`<input type="text" autocomplete="off" placeholder="${Re(s)}"><button data-a="ok">Responder</button>${t?`<button data-a="pasa" class="pasa">${Re(t)}</button>`:""}${n?'<button data-a="letra">Letra (\u22125 s)</button>':""}`,e.appendChild(r);let o=r.querySelector("input");return setTimeout(()=>o.focus(),50),Promise.race([new Promise(l=>{o.onkeydown=c=>{c.key==="Enter"&&l(o.value)},r.querySelectorAll("button").forEach(c=>c.onclick=()=>l(c.dataset.a==="ok"?o.value:c.dataset.a==="pasa"?"PASA":"LETRA"))}),...a]).finally(()=>r.remove())}async aviso(e,t,n=1400){let s=document.createElement("div");s.className="j-aviso",s.innerHTML=t,e.appendChild(s),await vi(n),s.remove()}async continuar(e,t="Continuar \u25B8"){let n=document.createElement("button");n.className="j-cont",n.textContent=t,e.appendChild(n),await new Promise(s=>n.onclick=s)}};function xt(i){try{Io(i)}catch{}}var O3={C:0,"C#":1,D:2,"D#":3,E:4,F:5,"F#":6,G:7,"G#":8,A:9,"A#":10,B:11};function od(i,{n:e=99,tempo:t=.32}={}){try{let n=Ji(),s=n.currentTime+.05;i.split(" ").slice(0,e).forEach(a=>{let r=a.match(/^([A-G]#?)(\d)$/);if(!r)return;let o=440*Math.pow(2,(O3[r[1]]+(parseInt(r[2])+1)*12-69)/12);dt.tone(n,n.destination,s,o,t*.95,"triangle",.18),s+=t})}catch{}}var At=0,Ht=1,xn=(i=.55)=>Math.random()<i;function ct(i,e,t){i.equipos[e].seg+=t}function ld(i,e,t,n,s){return e===0&&t===0?[0,0]:n&&s?[10,10]:n?[20,0]:s?[0,20]:e===t?[5,5]:e>t?[10,0]:[0,10]}async function sh(i,e,{titulo:t,reglas:n,items:s,seg:a,pts:r,falloResetea:o=!1,maxItems:l=99,extraHtml:c=()=>""}){let u=e.pantalla(`<p class="j-reglas">${n}</p>`);e.cabecera(i,t,a),await e.continuar(u,"Empezar \u25B8");let d=new on(a,m=>e.setReloj(m)).start(),h=s.slice(0,l).map((m,p)=>({...m,i:p})),f=0,g=h.length;for(;h.length&&!d.terminado;){let m=h[0];u=e.pantalla(`${c(m)}<div class="j-def">${Re(m.def)}</div><div class="j-sub">${f}/${g} aciertos</div>`),e.cabecera(i,t,d.rest),Us(m.def);let p=await e.respuesta(u,{},[d.fin]);if(p==="TIEMPO"||p==="STOP")break;if(p==="PASA"){h.push(h.shift());continue}Fi(p,m.r)?(f++,ct(i,At,r),xt("acierto"),h.shift(),await e.aviso(u,`\u2705 \xA1Correcto! +${r} s`,600)):(xt("fallo"),await e.aviso(u,`\u274C Era: <b>${Re(String(m.r).split("|")[0])}</b> \xB7 turno al compa\xF1ero`,1200),h.shift())}d.stop();let _=0;for(let m=0;m<g;m++)xn()&&_++;return ct(i,Ht,_*r),{aH:f,aR:_,total:g}}async function Un(i,e,t,n){let s=e.pantalla(`<div class="j-def">${n}</div>`);e.cabecera(i,t),await e.continuar(s)}var la={silla_azul:{nombre:"Silla azul",async jugar(i,e){let t=un(Bt("silla_azul")),n=0,s=0,a=0,r=e.pantalla('<p class="j-reglas">No suma segundos. Eres el aspirante: eliges entre dos letras y respondes. Tu rival (el que perdi\xF3 la final anterior) responde tambi\xE9n. Quien falle dos preguntas abandona el concurso.</p>');for(e.cabecera(i,"Silla azul"),await e.continuar(r,"Empezar \u25B8");n<2&&s<2&&a<t.length*2;){let o=t[a%t.length];a++,r=e.pantalla(`<div class="j-def">Elige letra:</div><div class="j-opc">${o.letras.map(f=>`<button data-v="${f}">${f}</button>`).join("")}</div><div class="j-sub">Fallos: t\xFA ${n} \xB7 rival ${s}</div>`),e.cabecera(i,"Silla azul");let l=await e.clic(r),c=o.letras.find(f=>f!==l);r=e.pantalla(`<div class="j-def">${Re(o[l].p)}</div>`),e.cabecera(i,"Silla azul"),Us(o[l].p);let u=new on(10,f=>e.setReloj(f)).start(),d=await e.respuesta(r,{pasa:null},[u.fin]);if(u.stop(),d!=="TIEMPO"&&Fi(d,o[l].r)?(xt("acierto"),await e.aviso(r,"\u2705 Correcto",700)):(n++,xt("fallo"),await e.aviso(r,`\u274C Era <b>${Re(o[l].r.split("|")[0])}</b>`,1200)),n>=2)break;let h=xn(.7);h||s++,await e.aviso(r,`El rival responde la letra ${c}: ${h?"\u2705 acierta":"\u274C falla"}`,1200)}await Un(i,e,"Silla azul",n>=2?"Has fallado dos preguntas: el rival conserva la silla azul (en este juego sigues para practicar).":"\xA1Ocupas la silla azul! Sigues en el programa.")}},una_de_cuatro:{nombre:"Una de cuatro",async jugar(i,e){await Qp(i,e,"Una de cuatro",Bt("una_de_cuatro"),90,2,"Pregunta con cuatro opciones. Durante 90 segundos, cada acierto suma 2 segundos; si fallas, el turno pasa al compa\xF1ero.")}},una_de_dos:{nombre:"Una de dos",async jugar(i,e){await Qp(i,e,"Una de dos",Bt("una_de_dos"),60,1,"Por cada pregunta, elige entre dos opciones. (El texto de referencia no fija tiempo ni segundos exactos: aqu\xED 60 s y 1 s por acierto.)")}},piramides:{nombre:"Pir\xE1mides (La escalera)",async jugar(i,e){let t=Bt("piramides").flatMap(n=>n.palabras.map((s,a)=>({def:`${n.defs[a]} \u2014 empieza por ${s[0].toUpperCase()} (${s.length} letras)`,r:s})));await sh(i,e,{titulo:"Pir\xE1mides / La escalera",reglas:"Paneles de 5 palabras: se empieza con una de 7 letras y cada siguiente es un anagrama de la anterior con una letra menos, hasta 3 letras. 90 segundos, 1 segundo por palabra; cada fallo pasa el turno al compa\xF1ero.",items:t,seg:90,pts:1})}},letra_a_letra:{nombre:"Letra a letra",async jugar(i,e){let t=Bt("letra_a_letra").flatMap(n=>n.palabras.map((s,a)=>({def:`${n.defs[a]} (${s.length} letras)`,r:s})));await sh(i,e,{titulo:"Letra a letra",reglas:"Paneles de cinco palabras; cada palabra se obtiene cambiando una letra de la anterior. 90 segundos; tantos segundos como palabras acertadas. Puedes decir \xABPasapalabra\xBB.",items:t,seg:90,pts:1})}},antes_y_despues:{nombre:"Antes y despu\xE9s",async jugar(i,e){let t=e.pantalla('<p class="j-reglas">Elige inicio o fin de palabra. Panel de 9 palabras; 2 segundos por acierto (m\xE1x. 18) en 60 segundos. Si fallas, se lee la siguiente y el turno pasa al compa\xF1ero.</p><div class="j-opc"><button data-v="inicio">Inicio</button><button data-v="fin">Fin</button></div>');e.cabecera(i,"Antes y despu\xE9s");let n=await e.clic(t),s=Bt("antes_y_despues").find(r=>r.modo===n)||Bt("antes_y_despues")[0],a=s.items.map(([r,o])=>({def:`${r} (${s.modo==="inicio"?"empieza por":"termina en"} ${s.parte})`,r:o}));await sh(i,e,{titulo:"Antes y despu\xE9s",reglas:`Palabras que ${s.modo==="inicio"?"empiezan por":"terminan en"} \xAB${s.parte}\xBB.`,items:a,seg:60,pts:2})}},palabras_cruzadas:{nombre:"Palabras cruzadas",async jugar(i,e){let t=Kp(Bt("palabras_cruzadas")),n=t.items.map(([s,a])=>({def:`${s} (${a.split("|")[0].length} letras)`,r:a}));await sh(i,e,{titulo:`Palabras cruzadas \xB7 ${t.tema}`,reglas:`Tema: ${t.tema}. Nueve palabras en dos columnas; 2 segundos por acierto (18 en total) y 75 segundos. Si fallas, turno al compa\xF1ero.`,items:n,seg:75,pts:2})}},pulsador:{nombre:"El pulsador (los melones)",async jugar(i,e){let t=Bt("pulsador"),n=[...new Set(t.map(a=>a.tema))].slice(0,3),s=["Invitadas","Concursantes","Invitados"];for(let a=0;a<3;a++){let r=t.filter(l=>l.tema===n[a%n.length]).slice(0,5),o=e.pantalla(`<p class="j-reglas">Turno ${a+1} (${s[a]}). Tema: <b>${Re(n[a%n.length])}</b>. 5 definiciones: pulsa antes que el rival. Si fallas, rebota al rival. 1 segundo por acierto.</p>`);e.cabecera(i,"El pulsador"),await e.continuar(o,"Empezar \u25B8");for(let l of r)await q3(i,e,"El pulsador",l.p,l.r,1)}}},pista_musical:{nombre:"La pista musical",async jugar(i,e){let t=un(Bt("pista_musical")).slice(0,3),n=e.pantalla('<p class="j-reglas">Tres turnos cara a cara. Adivina la canci\xF3n con hasta 5 pistas: con la 1\xAA ganas 5 s, con la 2\xAA 4 s... y con la 5\xAA 1 s. Si fallas, rebota al rival. Aqu\xED suenan melod\xEDas de dominio p\xFAblico sintetizadas (o tus audios de la carpeta audio/).</p>');e.cabecera(i,"La pista musical"),await e.continuar(n,"Empezar \u25B8");for(let s of t){let a=!1;for(let r=0;r<5&&!a;r++){let o=5-r;n=e.pantalla(`<div class="j-def">Pista ${r+1} (${o} s): ${Re(s.pistas[r])}</div><div class="j-opc"><button data-v="buzz" class="buzz">\u{1F534} \xA1Pulsar!</button><button data-v="no">Esperar pista</button></div>`),e.cabecera(i,"La pista musical"),[0,2,4].includes(r)&&od(s.notas,{n:[5,9,99][r/2]});let l=vi(2500+Math.random()*4e3).then(()=>"CPU"),c=Math.random()<.15+r*.17,u=await e.clic(n,"[data-v]",c?[l]:[]);if(u==="CPU"){let d=xn(.6);await e.aviso(n,`El rival pulsa... ${d?"\u2705 acierta: "+Re(s.titulo):"\u274C falla"}`,1400),d?(ct(i,Ht,o),a=!0):await Fs(e,n,s.acepta,8)&&(ct(i,At,o),a=!0)}else u==="buzz"&&(await Fs(e,n,s.acepta,8)?(ct(i,At,o),a=!0):xn(.5)&&(ct(i,Ht,o),a=!0,await e.aviso(n,`Rebote: el rival acierta (${Re(s.titulo)})`,1300)))}a||await e.aviso(n,`Nadie acert\xF3: era \xAB${Re(s.titulo)}\xBB`,1500)}}},coco_loco:{nombre:"Coco loco",async jugar(i,e){let t=e.pantalla('<p class="j-reglas">El ahorcado. 75 segundos. Si fallas 5 letras se resuelve la palabra y se pasa a otra; si dices la palabra y no es correcta, no hay m\xE1s oportunidades. Cada palabra acertada: 5 segundos.</p>');e.cabecera(i,"Coco loco",75),await e.continuar(t,"Empezar \u25B8");let n=new on(75,r=>e.setReloj(r)).start(),s=0;for(let r of un(Bt("coco_loco"))){if(n.terminado)break;let o=r.r.toUpperCase(),l=new Set,c=0,u=!1;for(;!u&&!n.terminado;){let d=[...o].map(f=>l.has(f)?f:"_").join(" ");t=e.pantalla(`<div class="j-def">${Re(r.pista)}</div><div class="j-hang">${d}</div><div class="j-sub">Fallos: ${"\u2716".repeat(c)}${"\xB7".repeat(5-c)}</div><div class="j-teclado">${"ABCDEFGHIJKLMN\xD1OPQRSTUVWXYZ".split("").map(f=>`<button data-v="${f}" ${l.has(f)?"disabled":""}>${f}</button>`).join("")}<button data-v="!" class="res">Resolver</button></div>`),e.cabecera(i,"Coco loco",n.rest);let h=await e.clic(t,"[data-v]",[n.fin]);if(h==="TIEMPO")break;if(h==="!"){let f=await e.respuesta(t,{pasa:null},[n.fin]);Fi(f,r.r)?(s++,ct(i,At,5),xt("acierto"),await e.aviso(t,"\u2705 \xA1Correcto! +5 s",700)):(xt("fallo"),await e.aviso(t,`\u274C Era ${Re(o)}`,1100)),u=!0;continue}l.add(h),o.includes(h)||(c++,xt("fallo")),[...o].every(f=>l.has(f))?(s++,ct(i,At,5),xt("acierto"),await e.aviso(t,"\u2705 \xA1Completada! +5 s",700),u=!0):c>=5&&(await e.aviso(t,`Se resuelve: ${Re(o)}`,1100),u=!0)}}n.stop();let a=0;for(let r=0;r<3;r++)xn(.45)&&a++;ct(i,Ht,a*5),await Un(i,e,"Coco loco",`T\xFA: ${s} palabras (+${s*5} s) \xB7 Rival: ${a} (+${a*5} s)`)}},que_es_que:{nombre:"\xBFQu\xE9 es qu\xE9?",async jugar(i,e){let t=Bt("que_es_que").slice(0,3),n=0,s=t.flat().length,a=e.pantalla('<p class="j-reglas">Tres paneles de palabras at\xEDpicas (3, 4 y 5). Relaciona cada palabra com\xFAn con su palabra rara. 60 segundos. Si fallas tras acertar alguna, se vuelve a empezar el panel. 20 s si completas los tres paneles (10 si ambos), 10 s al que m\xE1s acierte sin completar, 5 s cada uno si empatan.</p>');e.cabecera(i,"\xBFQu\xE9 es qu\xE9?",60),await e.continuar(a,"Empezar \u25B8");let r=new on(60,h=>e.setReloj(h)).start(),o=!0;for(let h of t){let f=0,g=un(h.map(_=>_[0]));for(;f<h.length&&!r.terminado;){a=e.pantalla(`<div class="j-def">Palabra com\xFAn: <b>${Re(h[f][1])}</b></div><div class="j-opc">${g.map(m=>`<button data-v="${Re(m)}">${Re(m)}</button>`).join("")}</div><div class="j-sub">Panel de ${h.length} \xB7 ${f}/${h.length}</div>`),e.cabecera(i,"\xBFQu\xE9 es qu\xE9?",r.rest);let _=await e.clic(a,"[data-v]",[r.fin]);if(_==="TIEMPO")break;_===h[f][0]?(f++,n++,xt("acierto")):(xt("fallo"),await e.aviso(a,"\u274C Fallo: turno al compa\xF1ero y se empieza el panel",1e3),n-=f,f=0)}if(f<h.length){o=!1;break}}r.stop();let l=Math.round(s*(.3+Math.random()*.6)),c=l>=s,[u,d]=ld(i,n,l,o,c);ct(i,At,u),ct(i,Ht,d),await Un(i,e,"\xBFQu\xE9 es qu\xE9?",`T\xFA: ${n} aciertos${o?" (paneles completos)":""} \u2192 +${u} s \xB7 Rival: ${l} \u2192 +${d} s`)}},palabra_imposible:{nombre:"La palabra imposible",async jugar(i,e){let t=Bt("palabra_imposible")[0],n=un(t.defs),s=0,a=e.pantalla('<p class="j-reglas">Panel de 8 palabras. Relaciona cada definici\xF3n con su palabra. Si fallas, el turno pasa al compa\xF1ero y hay que volver a acertar las palabras. 60 segundos. Reparto: 20 s si completas (10 si ambos), 10 s al que m\xE1s acierte, 5 s si empate.</p>');e.cabecera(i,"La palabra imposible",60),await e.continuar(a,"Empezar \u25B8");let r=new on(60,d=>e.setReloj(d)).start(),o=0;for(;s<n.length&&!r.terminado;){a=e.pantalla(`<div class="j-def">${Re(n[s][0])}</div><div class="j-opc">${t.palabras.map(h=>`<button data-v="${Re(h)}">${Re(h)}</button>`).join("")}</div><div class="j-sub">${s}/8</div>`),e.cabecera(i,"La palabra imposible",r.rest),Us(n[s][0]);let d=await e.clic(a,"[data-v]",[r.fin]);if(d==="TIEMPO")break;d===n[s][1]?(s++,o=Math.max(o,s),xt("acierto")):(xt("fallo"),await e.aviso(a,"\u274C Turno al compa\xF1ero: se vuelve a empezar",1e3),s=0)}r.stop();let l=Math.floor(Math.random()*9),[c,u]=ld(i,o,l,o===8,l===8);ct(i,At,c),ct(i,Ht,u),await Un(i,e,"La palabra imposible",`T\xFA: ${o}/8 \u2192 +${c} s \xB7 Rival: ${l}/8 \u2192 +${u} s`)}},de_par_en_par:{nombre:"De par en par",async jugar(i,e){let t=Bt("de_par_en_par")[0],n=un(t.pares.map(c=>c[1])),s=0,a=e.pantalla(`<p class="j-reglas">Tema: ${Re(t.tema)}. Relaciona la palabra le\xEDda con la de tu panel (9 parejas). 2 segundos por acierto (m\xE1x. 18) en 60 segundos; si fallas se lee la siguiente.</p>`);e.cabecera(i,"De par en par",60),await e.continuar(a,"Empezar \u25B8");let r=new on(60,c=>e.setReloj(c)).start(),o=new Set;for(let[c,u]of un(t.pares)){if(r.terminado)break;a=e.pantalla(`<div class="j-def">${Re(c)}</div><div class="j-opc">${n.map(h=>`<button data-v="${Re(h)}" ${o.has(h)?"disabled":""}>${Re(h)}</button>`).join("")}</div>`),e.cabecera(i,"De par en par",r.rest);let d=await e.clic(a,"[data-v]",[r.fin]);if(d==="TIEMPO")break;d===u?(s++,o.add(d),ct(i,At,2),xt("acierto")):(xt("fallo"),await e.aviso(a,`\u274C Era ${Re(u)}`,900))}r.stop();let l=0;for(let c=0;c<9;c++)xn()&&l++;ct(i,Ht,l*2),await Un(i,e,"De par en par",`T\xFA: ${s} parejas (+${s*2} s) \xB7 Rival: ${l} (+${l*2} s)`)}},sopa_letras:{nombre:"Sopa de letras",async jugar(i,e){let t=e.pantalla('<p class="j-reglas">Encuentra las tres palabras del tema escondidas en un panel de 5\xD75 (escr\xEDbelas). Si fallas o pasas 5 veces, se revela el panel. 5 segundos por panel completo. 90 segundos, hasta 8 paneles (40 s).</p>');e.cabecera(i,"Sopa de letras",90),await e.continuar(t,"Empezar \u25B8");let n=new on(90,r=>e.setReloj(r)).start(),s=0;for(let r of un(Bt("sopa_letras")).slice(0,8)){if(n.terminado)break;let o=B3(r.palabras),l=new Set,c=0;for(;l.size<3&&c<5&&!n.terminado;){t=e.pantalla(`<div class="j-def">Tema: <b>${Re(r.tema)}</b> \xB7 encontradas ${l.size}/3</div><div class="j-sopa">${o.map(h=>h.map(f=>`<span>${f}</span>`).join("")).join("<br>")}</div><div class="j-sub">Fallos/pasos: ${c}/5</div>`),e.cabecera(i,"Sopa de letras",n.rest);let u=await e.respuesta(t,{pasa:"Paso"},[n.fin]);if(u==="TIEMPO")break;let d=r.palabras.find(h=>Fi(u,h));u!=="PASA"&&d&&!l.has(d)?(l.add(d),xt("acierto")):(c++,xt("fallo"))}l.size===3?(s++,ct(i,At,5),await e.aviso(t,"\u2705 Panel completo: +5 s",700)):n.terminado||await e.aviso(t,`Se revela: ${r.palabras.join(", ")}`,1300)}n.stop();let a=Math.floor(Math.random()*6);ct(i,Ht,a*5),await Un(i,e,"Sopa de letras",`T\xFA: ${s} paneles (+${s*5} s) \xB7 Rival: ${a} (+${a*5} s)`)}},donde_estan:{nombre:"\xBFD\xF3nde est\xE1n?",async jugar(i,e){let t=un(Bt("donde_estan")).slice(0,2),n=e.pantalla(`<p class="j-reglas">Elige tema. Prueba de memoria: 9 casillas numeradas con 9 palabras. Recuerda d\xF3nde est\xE1 cada una. Si fallas, todo se oculta y el turno pasa al compa\xF1ero. 20 s si completas (10 si ambos), 10 s al que m\xE1s destape, 5 s cada uno si empate.</p><div class="j-opc">${t.map((g,_)=>`<button data-v="${_}">${Re(g.tema)}</button>`).join("")}</div>`);e.cabecera(i,"\xBFD\xF3nde est\xE1n?");let s=t[+await e.clic(n)],a=un(s.palabras);n=e.pantalla(`<div class="j-def">Memoriza (8 s)</div><div class="j-grid9">${a.map((g,_)=>`<div><small>${_+1}</small>${Re(g)}</div>`).join("")}</div>`),e.cabecera(i,"\xBFD\xF3nde est\xE1n?"),await vi(8e3);let r=new on(60,g=>e.setReloj(g)).start(),o=new Set,l=0,c=un(a.map((g,_)=>_)),u=0;for(;o.size<9&&!r.terminado;){let g=c[u%9];if(o.has(g)){u++;continue}n=e.pantalla(`<div class="j-def">\xBFD\xF3nde est\xE1 <b>${Re(a[g])}</b>?</div><div class="j-grid9">${a.map((m,p)=>o.has(p)?`<div class="ok"><small>${p+1}</small>${Re(m)}</div>`:`<button data-v="${p}"><small>${p+1}</small>?</button>`).join("")}</div>`),e.cabecera(i,"\xBFD\xF3nde est\xE1n?",r.rest);let _=await e.clic(n,"[data-v]",[r.fin]);if(_==="TIEMPO")break;+_===g?(o.add(g),l=Math.max(l,o.size),xt("acierto"),u++):(xt("fallo"),await e.aviso(n,"\u274C Se oculta todo \xB7 turno al compa\xF1ero",1e3),o=new Set,u++)}r.stop();let d=Math.floor(Math.random()*10),[h,f]=ld(i,o.size,d,o.size===9,d===9);ct(i,At,h),ct(i,Ht,f),await Un(i,e,"\xBFD\xF3nde est\xE1n?",`T\xFA: ${o.size}/9 destapadas \u2192 +${h} s \xB7 Rival: ${d}/9 \u2192 +${f} s`)}},la_oportunidad:{nombre:"La oportunidad",async jugar(i,e){let t=Bt("la_oportunidad").slice(0,10),n=0,s=0,a=At,r=0,o=e.pantalla('<p class="j-reglas">Repesca en el atril azul. Tira de 10 letras en orden alfab\xE9tico con una definici\xF3n por letra. 5 segundos para responder; fallo o tiempo = rebote al rival. Si se acierta el rebote, suma y sigue en su turno. Gana el primero en llegar a 6 aciertos.</p>');for(e.cabecera(i,"La oportunidad"),await e.continuar(o,"Empezar \u25B8");n<6&&s<6;){let[l,c,u]=t[r%t.length];r++;let d=`<div class="j-tira">${t.map((h,f)=>`<span class="${f===(r-1)%10?"cur":""}">${h[0]}</span>`).join("")}</div>`;a===At?(o=e.pantalla(`${d}<div class="j-def">${l}: ${Re(c)}</div><div class="j-sub">T\xFA ${n} \xB7 Rival ${s}</div>`),e.cabecera(i,"La oportunidad"),await Fs(e,o,u,5)?n++:xn(.55)&&(s++,a=Ht,await e.aviso(o,"Rebote: el rival acierta y se queda el turno",1100))):(o=e.pantalla(`${d}<div class="j-def">${l}: ${Re(c)}</div><div class="j-sub">Turno del rival \xB7 T\xFA ${n} \xB7 Rival ${s}</div>`),e.cabecera(i,"La oportunidad"),await vi(1200),xn(.6)?(s++,await e.aviso(o,`El rival acierta: ${Re(u.split("|")[0])}`,900)):(await e.aviso(o,"El rival falla: \xA1rebote para ti!",700),await Fs(e,o,u,5)&&(n++,a=At)))}await Un(i,e,"La oportunidad",n>=6?"\xA1Ganas La oportunidad! Entras en el programa.":"El rival gana La oportunidad (sigues para practicar).")}},he_dicho:{nombre:"\xA1He dicho!",async jugar(i,e){let t=Bt("he_dicho").slice(0,10),n=un(t.map(c=>c[1])),s=0,a=new Set,r=e.pantalla('<p class="j-reglas">10 personajes y 10 frases c\xE9lebres (hist\xF3ricas, de dominio p\xFAblico). 90 segundos para emparejarlos: +1 s por acierto y +5 s extra si completas la lista.</p>');e.cabecera(i,"\xA1He dicho!",90),await e.continuar(r,"Empezar \u25B8");let o=new on(90,c=>e.setReloj(c)).start();for(let[c,u]of t){if(o.terminado)break;r=e.pantalla(`<div class="j-def">\xBFQu\xE9 dijo <b>${Re(c)}</b>?</div><div class="j-opc vert">${n.map((h,f)=>`<button data-v="${f}" ${a.has(f)?"disabled":""}>\xAB${Re(h)}\xBB</button>`).join("")}</div>`),e.cabecera(i,"\xA1He dicho!",o.rest);let d=await e.clic(r,"[data-v]",[o.fin]);if(d==="TIEMPO")break;n[+d]===u?(s++,a.add(+d),ct(i,At,1),xt("acierto")):(xt("fallo"),await e.aviso(r,"\u274C",500))}o.stop(),s===10&&ct(i,At,5);let l=0;for(let c=0;c<10;c++)xn(.6)&&l++;ct(i,Ht,l+(l===10?5:0)),await Un(i,e,"\xA1He dicho!",`T\xFA: ${s}/10 (+${s+(s===10?5:0)} s) \xB7 Rival: ${l}/10`)}},cantando_espero:{nombre:"Cantando espero",async jugar(i,e){let t=un(Bt("cantando_espero")).slice(0,4),n=e.pantalla('<p class="j-reglas">Duelo de pulsador: 15 segundos por tema. Los primeros 5 s son exclusivos del equipo con m\xE1s segundos; despu\xE9s se habilita el rival. En la siguiente ronda se invierte. Fallo = rebote. +5 s por acierto. (Melod\xEDas de dominio p\xFAblico sintetizadas o tus audios.)</p>');e.cabecera(i,"Cantando espero"),await e.continuar(n,"Empezar \u25B8");let s=i.equipos[At].seg>=i.equipos[Ht].seg?At:Ht;for(let a of t){n=e.pantalla(`<div class="j-def">\u{1F3B5} Suena el tema... (${s===At?"tienes 5 s exclusivos":"5 s exclusivos del rival"})</div><div class="j-opc"><button data-v="buzz" class="buzz">\u{1F534} \xA1Pulsar!</button></div>`),e.cabecera(i,"Cantando espero",15),od(a.notas);let r=new on(15,u=>e.setReloj(u)).start(),o=(s===Ht?1500:5200)+Math.random()*6e3,l=await e.clic(n,"[data-v]",[vi(o).then(()=>"CPU"),r.fin]),c=s===At||15-r.rest>=5;r.stop(),l==="buzz"&&c?await Fs(e,n,a.acepta,8)?ct(i,At,5):xn(.5)&&(ct(i,Ht,5),await e.aviso(n,`Rebote: acierta el rival (\xAB${Re(a.titulo)}\xBB)`,1200)):l==="buzz"?(await e.aviso(n,"A\xFAn no puedes pulsar (5 s exclusivos del rival)",1e3),xn(.6)&&(ct(i,Ht,5),await e.aviso(n,`El rival acierta (\xAB${Re(a.titulo)}\xBB)`,1100))):l==="CPU"?xn(.6)?(ct(i,Ht,5),await e.aviso(n,`El rival acierta (\xAB${Re(a.titulo)}\xBB)`,1200)):(await e.aviso(n,"El rival falla: \xA1rebote!",700),await Fs(e,n,a.acepta,8)&&ct(i,At,5)):await e.aviso(n,`Tiempo: era \xAB${Re(a.titulo)}\xBB`,1200),s=s===At?Ht:At}}},con_dos_palabras:{nombre:"Con dos palabras",async jugar(i,e){let t=Bt("con_dos_palabras");for(let n=1;n<=3;n++){let s=un(t).slice(0,12),a=e.pantalla(`<p class="j-reglas">Ronda ${n}/3 \xB7 Lista de 12 palabras. Apuesta cu\xE1ntas adivinar\xE1s con pistas de m\xE1ximo 2 palabras de tu compa\xF1ero (virtual). Juega la apuesta m\xE1s alta; 90 s; 5 s en juego por ronda.</p><div class="j-opc">${[3,4,5,6,7,8,9,10,11,12].map(l=>`<button data-v="${l}">${l}</button>`).join("")}</div>`);e.cabecera(i,"Con dos palabras");let r=+await e.clic(a),o=3+Math.floor(Math.random()*6);if(r>=o){await e.aviso(a,`Tu apuesta (${r}) supera la del rival (${o}): juegas t\xFA`,1300);let l=new on(90,u=>e.setReloj(u)).start(),c=0;for(let[u,d]of s){if(l.terminado||c>=r)break;a=e.pantalla(`<div class="j-def">Pista: \xAB${Re(d)}\xBB</div><div class="j-sub">${c}/${r}</div>`),e.cabecera(i,"Con dos palabras",l.rest);let h=await e.respuesta(a,{pasa:"Paso"},[l.fin]);if(h==="TIEMPO")break;h!=="PASA"&&Fi(h,u)?(c++,xt("acierto")):xt("fallo")}l.stop(),c>=r?(ct(i,At,5),await Un(i,e,"Con dos palabras",`\xA1Conseguido! ${c}/${r}: +5 s`)):(ct(i,Ht,5),await Un(i,e,"Con dos palabras",`No llegas (${c}/${r}): los 5 s van al rival`))}else{let l=xn(.5);ct(i,l?Ht:At,5),await Un(i,e,"Con dos palabras",`El rival apuesta ${o} y juega: ${l?"lo consigue (+5 s rival)":"no lo consigue (+5 s para ti)"}`)}}}},palabras_ocultas:{nombre:"Palabras ocultas",async jugar(i,e){let t=Bt("palabras_ocultas").slice(0,8),n=H3(t),s=0,a=new Set,r=e.pantalla('<p class="j-reglas">Panel de 16 s\xEDlabas desordenadas. Forma la palabra de cada definici\xF3n uniendo s\xEDlabas que NO est\xE9n juntas (ni en horizontal, ni en vertical, ni en diagonal). 90 segundos, +1 s por acierto.</p>');e.cabecera(i,"Palabras ocultas",90),await e.continuar(r,"Empezar \u25B8");let o=new on(90,c=>e.setReloj(c)).start();for(let[c,u,d]of t){if(o.terminado)break;r=e.pantalla(`<div class="j-def">${Re(c)}</div><div class="j-grid16">${n.map(f=>`<span class="${a.has(f)?"off":""}">${f}</span>`).join("")}</div>`),e.cabecera(i,"Palabras ocultas",o.rest);let h=await e.respuesta(r,{pasa:"Paso"},[o.fin]);if(h==="TIEMPO")break;h!=="PASA"&&Fi(h,u+d)?(s++,a.add(u),a.add(d),ct(i,At,1),xt("acierto")):(xt("fallo"),await e.aviso(r,`Era ${u}+${d}`,900))}o.stop();let l=0;for(let c=0;c<8;c++)xn(.5)&&l++;ct(i,Ht,l),await Un(i,e,"Palabras ocultas",`T\xFA: ${s} (+${s} s) \xB7 Rival: ${l} (+${l} s)`)}}};async function Qp(i,e,t,n,s,a,r){let o=e.pantalla(`<p class="j-reglas">${r}</p>`);e.cabecera(i,t,s),await e.continuar(o,"Empezar \u25B8");let l=new on(s,h=>e.setReloj(h)).start(),c=0,u=0;for(let h of un(n)){if(l.terminado)break;u++,o=e.pantalla(`<div class="j-def">${Re(h.p)}</div><div class="j-opc">${h.op.map((g,_)=>`<button data-v="${_}">${"ABCD"[_]}. ${Re(g)}</button>`).join("")}</div>`),e.cabecera(i,t,l.rest),Us(h.p);let f=await e.clic(o,"[data-v]",[l.fin]);if(f==="TIEMPO")break;+f===h.r?(c++,ct(i,At,a),xt("acierto"),await e.aviso(o,`\u2705 +${a} s`,500)):(xt("fallo"),await e.aviso(o,`\u274C Era ${Re(h.op[h.r])} \xB7 turno al compa\xF1ero`,1e3))}l.stop();let d=0;for(let h=0;h<Math.max(u,6);h++)xn()&&d++;ct(i,Ht,d*a),await Un(i,e,t,`T\xFA: ${c} aciertos (+${c*a} s) \xB7 Rival: ${d} (+${d*a} s)`)}async function Fs(i,e,t,n){let s=new on(n,o=>i.setReloj(o)).start(),a=await i.respuesta(e,{pasa:null},[s.fin]);s.stop();let r=a!=="TIEMPO"&&Fi(a,t);return xt(r?"acierto":"fallo"),await i.aviso(e,r?"\u2705 \xA1Correcto!":`\u274C Era \xAB${Re(String(t).split("|")[0])}\xBB`,900),r}async function q3(i,e,t,n,s,a){let r=e.pantalla(`<div class="j-def">${Re(n)}</div><div class="j-opc"><button data-v="buzz" class="buzz">\u{1F534} \xA1Pulsar!</button></div>`);e.cabecera(i,t),Us(n),await e.clic(r,"[data-v]",[vi(2500+Math.random()*5e3).then(()=>"CPU")])==="buzz"?await Fs(e,r,s,7)?ct(i,At,a):xn(.6)&&(ct(i,Ht,a),await e.aviso(r,"Rebote: el rival acierta",900)):xn(.6)?(ct(i,Ht,a),await e.aviso(r,`El rival pulsa y acierta: ${Re(s.split("|")[0])}`,1100)):(await e.aviso(r,"El rival falla: \xA1rebote!",700),await Fs(e,r,s,7)&&ct(i,At,a))}function B3(i){let e="ABCDEFGHIJLMNOPRSTUVZ";for(let t=0;t<200;t++){let n=Array.from({length:5},()=>Array(5).fill(null)),s=!0;for(let a of i){let r=!1;for(let o=0;o<50&&!r;o++){let l=Math.random()<.5,c=Math.floor(Math.random()*(l?5:6-a.length)),u=Math.floor(Math.random()*(l?6-a.length:5));c<0||u<0||[...a].every((d,h)=>{let f=n[c+(l?0:h)][u+(l?h:0)];return f===null||f===d})&&([...a].forEach((d,h)=>n[c+(l?0:h)][u+(l?h:0)]=d),r=!0)}if(!r){s=!1;break}}if(s)return n.map(a=>a.map(r=>r||e[Math.floor(Math.random()*e.length)]))}return[i.join("").padEnd(25,"X").slice(0,25).split("")].flatMap(t=>[t.slice(0,5),t.slice(5,10),t.slice(10,15),t.slice(15,20),t.slice(20,25)])}function H3(i){let e=i.flatMap(t=>[t[1],t[2]]);for(let t=0;t<500;t++){let n=un(e),s=a=>{let r=n.indexOf(a);return[Math.floor(r/4),r%4]};if(i.every(a=>{let[r,o]=[s(a[1]),s(a[2])];return Math.max(Math.abs(r[0]-o[0]),Math.abs(r[1]-o[1]))>1}))return n}return un(e)}function e0(i,e,t,n){let s=i.length,a=92;return`<svg viewBox="0 0 220 220" class="j-rosco">${i.map((o,l)=>{let c=-Math.PI/2+l/s*Math.PI*2,u=110+Math.cos(c)*a,d=110+Math.sin(c)*a,h=e[l];return`<circle cx="${u}" cy="${d}" r="11" fill="${h==="ok"?"#19c25a":h==="ko"?"#e02020":l===t?"#ffd400":n}" stroke="#fff" stroke-width="1.5"/><text x="${u}" y="${d+4}" font-size="11" text-anchor="middle" fill="#fff" font-weight="700">${o[0]}</text>`}).join("")}</svg>`}async function ah(i,e,{tipo:t="rosco",base:n=85,nombre:s="El rosco"}){let a=Bt("rosco"),r=a[0],o=a[1]||a[0],l=n+i.equipos[0].seg,c=n+i.equipos[1].seg,u=l>=c,d=e.pantalla(`<p class="j-reglas">${G3(t,n)}</p><div class="j-def">Tu tiempo: <b>${l} s</b> (${n} + ${i.equipos[0].seg}) \xB7 Rival: <b>${c} s</b></div>`);if(e.cabecera(i,s),t==="rueda")if(u){d.insertAdjacentHTML("beforeend",'<div class="j-def">Tienes m\xE1s segundos: elige sobre</div><div class="j-opc"><button data-v="0">\u2709\uFE0F Sobre 1</button><button data-v="1">\u2709\uFE0F Sobre 2</button></div>');let x=+await e.clic(d);r=a[x]||a[0],o=a[1-x]||a[0]}else await e.aviso(d,"El rival tiene m\xE1s segundos: elige sobre y empieza",1300);else if(t==="alaz"){if(u)d.insertAdjacentHTML("beforeend",'<div class="j-def">Elige secuencia</div><div class="j-opc"><button data-v="az">De la A a la Z</button><button data-v="za">De la Z a la A</button></div>'),await e.clic(d)==="za"?r=r.slice().reverse():o=o.slice().reverse();else{let x=Math.random()<.5;x?o=o.slice().reverse():r=r.slice().reverse(),await e.aviso(d,`El rival elige ${x?"de la Z a la A":"de la A a la Z"}: t\xFA juegas la otra`,1500)}await e.continuar(d,"Empezar \u25B8")}else await e.continuar(d,"Empezar \u25B8");let h={H:{set:r,e:Array(25).fill(null),i:0,t:l,letras:{}},R:{set:o,e:Array(25).fill(null),i:0,t:c}},f=x=>x.e.some(y=>y===null),g=x=>{for(let y=0;y<25;y++){let A=(x.i+y)%25;if(x.e[A]===null)return x.i=A,!0}return!1},_=u?"H":"R",m=(x="")=>(d=e.pantalla(`<div class="j-final"><div><h4>T\xFA \xB7 ${Math.ceil(h.H.t)} s</h4>${e0(h.H.set,h.H.e,_==="H"?h.H.i:-1,"#ff7a00")}</div><div class="j-fcentro">${x}</div><div><h4>Rival \xB7 ${Math.ceil(h.R.t)} s</h4>${e0(h.R.set,h.R.e,_==="R"?h.R.i:-1,"#2a5cff")}</div></div>`),e.cabecera(i,s),d.querySelector(".j-fcentro"));for(;h.H.t>0&&f(h.H)||h.R.t>0&&f(h.R);){if(_==="H"&&(h.H.t<=0||!f(h.H))&&(_="R"),_==="R"&&(h.R.t<=0||!f(h.R)))if(h.H.t>0&&f(h.H))_="H";else break;if(_==="H"){let x=new on(h.H.t,A=>{h.H.t=A;let P=d.querySelector("h4");P&&(P.textContent=`T\xFA \xB7 ${Math.ceil(A)} s`)}).start(),y=!0;for(;y&&g(h.H)&&!x.terminado;){let[A,P,L,F]=h.H.set[h.H.i],N=z3(t,A,P,F,h.H.letras[h.H.i]),q=m(`<div class="j-letra">${P==="e"?"Empieza por":"Contiene la"} <b>${A}</b></div><div class="j-def">${Re(L)}</div>${N}`);Us(`${P==="e"?"Con la":"Contiene la"} ${A}. ${L}`);let G=await e.respuesta(q,{pasa:t==="rueda"?"Paso":"Pasapalabra",letra:t==="alaz"},[x.fin]);if(G==="TIEMPO")break;if(G==="LETRA"){h.H.letras[h.H.i]||(x.quitar(5),h.H.letras[h.H.i]=k3(F));continue}if(G==="PASA"){xt("pasapalabra"),h.H.i=(h.H.i+1)%25,y=!1;break}Fi(G,F)?(h.H.e[h.H.i]="ok",xt("acierto"),h.H.i=(h.H.i+1)%25):(h.H.e[h.H.i]="ko",xt("fallo"),await e.aviso(q,`\u274C Era <b>${Re(F.split("|")[0])}</b>`,1300),h.H.i=(h.H.i+1)%25,y=!1)}x.stop(),_="R"}else{let x=!0;for(;x&&g(h.R)&&h.R.t>0;){let y=m(`<div class="j-def">Juega el rival\u2026 (${h.R.set[h.R.i][0]})</div>`);await vi(900),h.R.t=Math.max(0,h.R.t-(3+Math.random()*3));let A=Math.random();A<.62?(h.R.e[h.R.i]="ok",h.R.i=(h.R.i+1)%25):A<.8?(h.R.i=(h.R.i+1)%25,x=!1,await e.aviso(y,`Rival: \xAB${t==="rueda"?"Paso":"Pasapalabra"}\xBB`,700)):(h.R.e[h.R.i]="ko",h.R.i=(h.R.i+1)%25,x=!1,await e.aviso(y,"El rival falla",700))}_="H"}}let p=x=>x.e.filter(y=>y==="ok").length,S=x=>x.e.filter(y=>y==="ko").length,R=p(h.H),M=p(h.R),E=S(h.H),w=S(h.R),b;R===25?(b=`\u{1F3C6} \xA1PLENO! Te llevas el bote de ${i.bote.toLocaleString("es-ES")} \u20AC`,i.ganado+=i.bote,i.bote=i.boteInicial):M===25?(b=`El rival hace pleno y se lleva el bote (${i.bote.toLocaleString("es-ES")} \u20AC)`,i.bote=i.boteInicial):(i.bote+=6e3,R>M||R===M&&E<w?(i.ganado+=1200,b=`\xA1Ganas el programa! +1.200 \u20AC y vuelves ma\xF1ana. El bote sube a ${i.bote.toLocaleString("es-ES")} \u20AC`):R===M&&E===w?(i.ganado+=600,b=`Empate total: 600 \u20AC para cada uno y segu\xEDs los dos. Bote: ${i.bote.toLocaleString("es-ES")} \u20AC`):b=`Gana el rival. Ma\xF1ana tendr\xEDas tu oportunidad en ${t==="rueda"?"La oportunidad":"la silla azul"}. Bote: ${i.bote.toLocaleString("es-ES")} \u20AC`),xt("aplausos"),d=e.pantalla(`<div class="j-def">T\xFA: ${R} aciertos, ${E} fallos \xB7 Rival: ${M} aciertos, ${w} fallos</div><div class="j-def grande">${b}</div>`),e.cabecera(i,s),await e.continuar(d,"Terminar")}function z3(i,e,t,n,s){return i!=="alaz"?"":`<div class="j-hang peq">${[...n.split("|")[0].toUpperCase()].map((o,l)=>o===e&&(t==="c"||l===0)||o===s?o:"_").join(" ")}</div>`}function k3(i){let e=i.split("|")[0].toUpperCase();return e[Math.floor(Math.random()*e.length)]}function G3(i,e){return i==="alaz"?`AlaZ (desde el 19 de junio de 2026): el que tiene m\xE1s segundos elige hacer la secuencia de la A a la Z o al rev\xE9s; el otro hace la contraria. ${e} s + acumulados. Ves la estructura de la palabra y puedes decir \xABLetra\xBB para revelar una letra (\u22125 s). Pleno = bote; si no, bote +6.000 \u20AC y 1.200 \u20AC al que m\xE1s acierte (empate: menos fallos; si persiste, 600 \u20AC cada uno).`:i==="rueda"?`La Rueda: 25 definiciones (empieza por / contiene). ${e} s + segundos acumulados. El que tiene m\xE1s segundos elige entre 2 sobres y empieza. Mantienes el turno mientras aciertas; \xABPaso\xBB para el reloj y pasa el turno. Pleno = bote; si no, bote +6.000 \u20AC y 1.200 \u20AC al que m\xE1s acierte (empate: menos fallos; si persiste, se reparten).`:`El rosco: 25 palabras, ${e} s + los acumulados. Empieza el que m\xE1s segundos tiene. Contestas mientras no falles o digas \xABPasapalabra\xBB. Pleno = bote; si no, el bote sube 6.000 \u20AC y el que m\xE1s acierte gana 1.200 \u20AC (empate: menos fallos; si persiste, 600 \u20AC cada uno).`}var Do={"antena3-2000":{equipos:[["Veterano","#ff7a00"],["Aspirante","#2a5cff"]],bote:6e3,variantes:[{id:"a3-2001",nombre:"2001-2006 (rosco de 25 letras, 90 s + acumulado)",pruebas:["una_de_dos","pulsador","de_par_en_par","piramides","antes_y_despues","palabra_imposible"],final:{tipo:"rosco",base:90,nombre:"El rosco"}}],nota:"En 2000 el rosco ten\xEDa 28 letras (con K, LL y W) y 100 s; entre 2003 y 2005 ambos part\xEDan con 110 s. Aqu\xED se juega la f\xF3rmula de 25 letras y 90 s + acumulado."},"telecinco-2007":{equipos:[["Naranja","#ff7a00"],["Azul","#2a5cff"]],bote:6e3,variantes:[{id:"t5-hasta2018",nombre:"Hasta el 7 de septiembre de 2018",pruebas:["silla_azul","letra_a_letra","pista_musical","coco_loco","que_es_que"],final:{tipo:"rosco",base:85,nombre:"El rosco"}},{id:"t5-primeros",nombre:"Primeros a\xF1os de Telecinco (pruebas hist\xF3ricas, aprox.)",pruebas:["piramides","pulsador","de_par_en_par","antes_y_despues","palabra_imposible"],final:{tipo:"rosco",base:85,nombre:"El rosco"}}]},"telecinco-2018":{equipos:[["Naranja","#ff7a00"],["Azul","#2a5cff"]],bote:6e3,variantes:[{id:"t5-desde2018",nombre:"Desde el 10 de septiembre de 2018",pruebas:["silla_azul","una_de_cuatro","pista_musical","sopa_letras","donde_estan"],final:{tipo:"rosco",base:85,nombre:"El rosco"}}]},"antena3-2020":{equipos:[["Naranja","#ff7a00"],["Azul","#2a5cff"]],bote:1e5,variantes:[{id:"a3-2020",nombre:"13 may 2020 \u2013 4 dic 2023 (Sopa de letras + Rosco)",pruebas:["silla_azul","una_de_cuatro","pista_musical","sopa_letras","donde_estan"],final:{tipo:"rosco",base:85,nombre:"El rosco"}},{id:"a3-2023",nombre:"5 dic 2023 \u2013 18 jun 2026 (Palabras cruzadas + Rosco)",pruebas:["silla_azul","una_de_cuatro","pista_musical","palabras_cruzadas","donde_estan"],final:{tipo:"rosco",base:85,nombre:"El rosco"}},{id:"a3-2026",nombre:"Desde el 19 jun 2026 (Palabras cruzadas + AlaZ)",pruebas:["silla_azul","una_de_cuatro","pista_musical","palabras_cruzadas","donde_estan"],final:{tipo:"alaz",base:110,nombre:"AlaZ"}}]},"rueda-letra":{equipos:[["Morado","#a040e0"],["Azul","#2a8bff"]],bote:2e5,variantes:[{id:"rueda",nombre:"Rueda la letra (desde el 7 sep 2026)",pruebas:["la_oportunidad","he_dicho","cantando_espero","con_dos_palabras","palabras_ocultas"],final:{tipo:"rueda",base:85,nombre:"La Rueda"}}]}},t0=i=>"pp3d-bote-"+i;async function n0(i,e,{onCamara:t,especial:n="normal"}={}){let s=Do[e.id];if(!s)return;let a=new hr(i),r=a.pantalla(`<h3>${Re(e.nombre)} \xB7 ${Re(e.anios)}</h3><p>Elige la fecha / variante del programa:</p>
    <div class="j-opc vert">${s.variantes.map((h,f)=>`<button data-v="${f}">${Re(h.nombre)}</button>`).join("")}</div>
    ${s.nota?`<p class="j-sub">${Re(s.nota)}</p>`:""}
    <label class="j-sub"><input type="checkbox" id="j-voz"> Voz del presentador (s\xEDntesis es-ES)</label>
    <div class="j-opc"><button data-v="x" class="pasa">Cancelar</button></div>`),o=await a.clic(r);if(Jp(!!i.querySelector("#j-voz")?.checked),o==="x")return a.cerrar();let l=s.variantes[+o],c=+localStorage.getItem(t0(e.id))||s.bote,u=[...Fp].sort(()=>Math.random()-.5).slice(0,4),d={equipos:s.equipos.map(([h,f])=>({nombre:h,color:f,seg:0})),bote:c,boteInicial:s.bote,ganado:0};r=a.pantalla(`<div class="j-def">${n!=="normal"?`<b>${Re(Yc[n].nombre)}</b><br>`:""}Equipo ${Re(d.equipos[0].nombre)} (t\xFA) con ${Re(u[0])} y ${Re(u[1])}<br>Equipo ${Re(d.equipos[1].nombre)} con ${Re(u[2])} y ${Re(u[3])}</div>
    <p class="j-sub">Famosos virtuales ficticios. Bote actual: <b>${d.bote.toLocaleString("es-ES")} \u20AC</b></p>
    <p>Pruebas: ${l.pruebas.map(h=>Re(la[h].nombre)).join(" \xB7 ")} \xB7 Final: ${Re(l.final.nombre)}</p>`),a.cabecera(d,"Programa"),await a.continuar(r,"\xA1Empezamos! \u25B8"),t&&t("mesa");for(let h of l.pruebas)r=a.pantalla(`<div class="j-def grande">${Re(la[h].nombre)}</div>`),a.cabecera(d,la[h].nombre),await a.continuar(r,"Jugar \u25B8"),await la[h].jugar(d,a);t&&t("atril"),await ah(d,a,l.final),localStorage.setItem(t0(e.id),String(d.bote)),r=a.pantalla(`<div class="j-def grande">Fin del programa</div><p>Has ganado hoy: <b>${d.ganado.toLocaleString("es-ES")} \u20AC</b>. Bote para el pr\xF3ximo programa: <b>${d.bote.toLocaleString("es-ES")} \u20AC</b>.</p>`),a.cabecera(d,"Resultado"),await a.continuar(r,"Cerrar"),a.cerrar(),t&&t("general")}var V3={sofia:{nombre:"Sof\xEDa Brisa",estilo:"Cercana y elegante",etapa:"2000-2002",color:"#ff7a00",traje:8006234,pitch:1.15,rate:1},ramiro:{nombre:"Don Ramiro",estilo:"Voz grave y mucho aplomo",etapa:"2002-2003",color:"#8a5a2b",traje:1710626,pitch:.55,rate:.9},nico:{nombre:"Nico Chispa",estilo:"Din\xE1mico y simp\xE1tico",etapa:"2006",color:"#2ab8ff",traje:2771594,pitch:1.05,rate:1.12},toni:{nombre:"Toni Risas",estilo:"Bromista y con mucha energ\xEDa",etapa:"2007-2019",color:"#3f7dff",traje:1714794,pitch:1.1,rate:1.18},dani:{nombre:"Dani Sonrisa",estilo:"Natural, alegre y cercano",etapa:"2020-2026",color:"#1f74ff",traje:14211272,pitch:1,rate:1.05},aurelio:{nombre:"Aurelio Guasa",estilo:"Veterano, ir\xF3nico y simp\xE1tico",etapa:"Rueda la letra",color:"#c050ff",traje:2763316,pitch:.8,rate:.98}},W3={estudios:{pres:[0,0,22],cam:[.6,1.9,27.5],tgt:[0,3.2,14]},"antena3-2000":{pres:[2.2,0,6.5],cam:[3.2,1.9,11.5],tgt:[0,2.6,-3]},"telecinco-2007":{pres:[.5,0,5.4],cam:[1.4,1.9,9.8],tgt:[0,2.2,-4]},"telecinco-2018":{pres:[.5,0,5.6],cam:[1.4,1.9,10],tgt:[0,2.6,-6]},"antena3-2020":{pres:[1.2,0,6.2],cam:[2.2,1.9,10.8],tgt:[-1,2.6,-6]},"rueda-letra":{pres:[.4,0,4.2],cam:[1.2,1.9,8.2],tgt:[0,3,-9]}},X3=[{plato:"estudios",cam:"general",p:"dani",textos:["\xA1Bienvenidos a los Estudios Grok Bot! Hoy os voy a contar la historia de Pasapalabra, un concurso de palabras que lleva en la tele espa\xF1ola desde el a\xF1o 2000.","Est\xE1 basado en el formato brit\xE1nico The Alphabet Game: dos concursantes acumulan segundos en pruebas con palabras para tener m\xE1s tiempo en la prueba final. \xA1Acompa\xF1adme plat\xF3 por plat\xF3!"]},{plato:"antena3-2000",cam:"general",p:"sofia",textos:["Encantada. Estamos en el primer plat\xF3: Antena 3, desde el 24 de julio de 2000. Letras gigantes de colores, el atril doble rojo y azul\u2026 \xA1qu\xE9 recuerdos!","Al principio el rosco ten\xEDa 28 definiciones, con la K, la LL y la W, y 100 segundos. Un a\xF1o despu\xE9s se qued\xF3 para siempre en 25 letras y 90 segundos m\xE1s lo acumulado."]},{plato:"antena3-2000",cam:"atril",p:"ramiro",textos:["Buenas noches. Entre noviembre de 2002 y enero de 2003 el programa tuvo un presentador sustituto durante unas semanas.","Y en 2003 lleg\xF3 otro cambio: los dos finalistas part\xEDan con 110 segundos cada uno. En 2005 se volvi\xF3 a la f\xF3rmula de 90 segundos m\xE1s el acumulado."]},{plato:"antena3-2000",cam:"mesa",p:"nico",textos:["\xA1Hola, hola! En 2006 cambi\xF3 el presentador y, con ese cambio, se entreg\xF3 el mayor premio de la tele espa\xF1ola hasta entonces: \xA12.190.000 euros!","Antena 3 retir\xF3 el concurso ese a\xF1o tras 1.282 programas. Pero esto no acaba aqu\xED\u2026 \xA1nos vamos a Telecinco!"]},{plato:"telecinco-2007",cam:"general",p:"toni",textos:["\xA1Ey, qu\xE9 pasa! Bienvenidos a Telecinco: el concurso lleg\xF3 el 16 de julio de 2007 y se emit\xEDa de lunes a viernes de 20:05 a 21:05, liderando su franja.","En 2010 gan\xF3 el Premio Especial del Jurado de los Premios Ondas por sus 10 a\xF1os de \xE9xito. Y hubo botes de r\xE9cord: \xA1m\xE1s de 1,8 millones de euros en esta etapa!"]},{plato:"telecinco-2018",cam:"general",p:"toni",textos:["Cambio de plat\xF3, \xA1todo azul! El 10 de septiembre de 2018 llegaron nuevas pruebas: Una de cuatro, Sopa de letras y \xBFD\xF3nde est\xE1n?, adem\xE1s de la Silla azul y La pista musical.","El programa dej\xF3 de emitirse el 1 de octubre de 2019 por una sentencia del Tribunal Supremo tras el litigio iniciado por ITV. En total, 3.292 programas en Telecinco."]},{plato:"antena3-2020",cam:"general",p:"dani",textos:["\xA1Y volvimos! El 13 de mayo de 2020 Pasapalabra regres\xF3 a Antena 3, con el bote empezando en 100.000 euros.","En esta etapa se gan\xF3 el bote m\xE1s alto de su historia: 2.272.000 euros, y por primera vez acertando las 25 palabras en un solo turno. A 31 de diciembre de 2025 se llevaban 6.030 programas en total."]},{plato:"antena3-2020",cam:"atril",p:"dani",textos:["Desde el 5 de diciembre de 2023 la Sopa de letras dej\xF3 paso a Palabras cruzadas.","Y el 18 de junio de 2026 se jug\xF3 el \xFAltimo rosco: la justicia decidi\xF3 que los derechos de ese juego pertenecen a MC&F. Desde el 19 de junio la final es AlaZ, con 110 segundos m\xE1s lo acumulado."]},{plato:"rueda-letra",cam:"general",p:"aurelio",textos:["Muy buenas\u2026 y no me miren as\xED, que no muerdo. Les presento Rueda la letra, estrenado en Telecinco el 7 de septiembre de 2026.","Nace porque el Supremo confirm\xF3 el 19 de mayo de 2026 que la mec\xE1nica pertenece a MC&F. Antena 3 cambi\xF3 a AlaZ y Mediaset us\xF3 esa mec\xE1nica como La Rueda, producido con Bulldog TV. Equipos morado y azul, y un bote que empieza en 200.000 euros. \xBFSe atreven?"]}];async function i0(i,e){i.classList.add("abierto");let t=!1;for(let n of X3){if(t)break;let s=V3[n.p];await e.cargar(n.plato),await vi(300),e.presentador(s,W3[n.plato]);for(let[a,r]of n.textos.entries()){if(t)break;a>0&&e.camara(n.cam),i.innerHTML=`<div class="h-bocadillo"><div class="h-avatar" style="background:${s.color}"><span>${Re(s.nombre[0])}</span></div>
        <div class="h-texto"><b>${Re(s.nombre)}</b> <small>${Re(s.estilo)} \xB7 ${Re(s.etapa)}</small><p>${Re(r)}</p>
        <div class="h-bts"><button data-a="sig">Siguiente \u25B8</button><button data-a="fin" class="pasa">Salir del modo historia</button></div></div></div>`,await new Promise(c=>{if(i.querySelectorAll("button").forEach(u=>u.onclick=()=>c(u.dataset.a)),"speechSynthesis"in window){let u=new SpeechSynthesisUtterance(r);u.lang="es-ES",u.pitch=s.pitch,u.rate=s.rate;let d=speechSynthesis.getVoices().find(h=>/^es(-|_)ES/i.test(h.lang))||speechSynthesis.getVoices().find(h=>/^es/i.test(h.lang));d&&(u.voice=d),u.onend=()=>setTimeout(()=>c("auto"),900),speechSynthesis.cancel(),speechSynthesis.speak(u)}else setTimeout(()=>c("auto"),7e3)})==="fin"&&(t=!0)}}"speechSynthesis"in window&&speechSynthesis.cancel(),e.presentador(null),i.classList.remove("abierto"),i.innerHTML=""}var Os=new URLSearchParams(location.search),mt=i=>document.getElementById(i),Sn=new Bc({antialias:!0,preserveDrawingBuffer:Os.has("capture")});Sn.setPixelRatio(Math.min(devicePixelRatio,2));Sn.setSize(innerWidth,innerHeight);Sn.toneMapping=ea;Sn.toneMappingExposure=1;Sn.shadowMap.enabled=!0;mt("app").appendChild(Sn.domElement);var ca=new ui,Yt=new Wt(50,innerWidth/innerHeight,.1,200),ln=new Gc(Yt,Sn.domElement);ln.enableDamping=!0;ln.dampingFactor=.08;ln.maxPolarAngle=Math.PI*.495;ln.minDistance=2;ln.maxDistance=45;var $3={uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ vec4 c = texture2D(tDiffuse, vUv); if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0,0.0,0.0,1.0); gl_FragColor = clamp(c, 0.0, 30.0); }"},fr=new Rs(Sn);fr.addPass(new Cs(ca,Yt));fr.addPass(new ir($3));var Y3=new Pi(new ae(innerWidth,innerHeight),.32,.4,.9);fr.addPass(Y3);fr.addPass(new Ps);var rh=!Os.has("nobloom"),yi={screenMode:"rosco",onRosco:null,logoPantalla:null},dn=null,En=null,dd=!1;yi.onRosco=i=>{dd&&Io(i==="ok"?"acierto":i==="ko"?"fallo":"pasapalabra")};async function hd(i){let e=await lr("logo",i);if(!e){yi.logoPantalla=null;return}let t=new Image;t.src=e.url,yi.logoPantalla=t}var j3=[...es,$p];yi.platos=es.map(i=>({id:i.id,nombre:i.nombre,anios:i.anios,color:i.color}));yi.especial="normal";function qs(i,{conCabecera:e=!0,camara:t="general"}={}){let n=j3.find(s=>s.id===i);!n||!n.modulo||(dn&&dn.dispose(),Yn&&(ca.remove(Yn),Yn=null),En=n,n.especiales||(yi.especial="normal"),dn=n.modulo.build(ca,yi),hd(n),document.querySelectorAll("#epocas button").forEach(s=>s.classList.toggle("activa",s.dataset.id===i)),K3(),Z3(),No(n.modulo.cameras[t]?t:"general",!0),mt("btnJugar").disabled=!Do[i],n.cabecera&&e&&ch(n))}function K3(){let i=mt("camaras");i.innerHTML="";for(let[e,t]of Object.entries(En.modulo.cameras)){let n=document.createElement("button");n.dataset.cam=e,n.textContent=t.label||e,n.onclick=()=>No(e),i.appendChild(n)}if(!En.hub){let e=document.createElement("button");e.textContent="\u{1F3E2} Estudios Grok Bot",e.onclick=()=>qs("estudios",{camara:"pasillo"}),i.appendChild(e)}}function Z3(){let i=mt("selEspecial");i.style.display=En.especiales?"":"none",i.innerHTML=Object.entries(Yc).map(([e,t])=>`<option value="${e}" ${e===yi.especial?"selected":""}>${t.nombre}</option>`).join("")}var Yn=null;function J3(i,e){if(Yn&&(ca.remove(Yn),Yn=null),!i)return;Yn=$t({body:i.traje,legs:1710626,hair:2759184,scale:1.05});let[t,n,s]=e?e.pres:[ln.target.x,0,ln.target.z];Yn.position.set(t,n,s),e&&(Bs&&pd(),Cn=null,Yt.position.set(...e.cam),ln.target.set(...e.tgt),ln.update()),Yn.lookAt(Yt.position.x,n,Yt.position.z),ca.add(Yn),Yn.userData.t0=performance.now()}var Cn=null,r0="general";function No(i,e=!1){let t=En.modulo.cameras[i];if(!t)return;Bs&&pd(),t.mode&&dn.setMode(t.mode);let n=new D(...t.pos),s=new D(...t.target);if(r0=i,document.querySelectorAll("#camaras button").forEach(a=>a.classList.toggle("activa",a.dataset.cam===i)),e){Yt.position.copy(n),ln.target.copy(s),ln.update(),Cn=null;return}Cn={t:0,dur:1.6,fromPos:Yt.position.clone(),fromTgt:ln.target.clone(),toPos:n,toTgt:s}}var Vt=null;async function ch(i,e=null){fd();let t=await lr("logo",i),n=e==null?await lr("musica",i):null,s=i.cabecera.crearCabecera(Sn,{logoUrl:t?t.url:null});if(s.resize(innerWidth,innerHeight),Vt={def:i,inst:s,start:performance.now()/1e3,audio:null,fixedT:e,srcNode:null},document.body.classList.add("en-cabecera"),e==null)if(n)Vt.audio=new Audio(n.url),Vt.audio.play().catch(()=>{});else try{let a=Ji(),r=a.createGain();r.connect(a.destination),Vt.gain=r,(i.cabecera.programarAudioRespaldo||Qc)(a,r,a.currentTime+.05)}catch{}}function fd(){if(Vt){if(Vt.audio){let i=Vt.audio,e=1,t=setInterval(()=>{e-=.1,i.volume=Math.max(0,e),e<=0&&(i.pause(),clearInterval(t))},80)}if(Vt.gain){let i=Ji();Vt.gain.gain.setTargetAtTime(0,i.currentTime,.3),setTimeout(()=>Vt?.gain?.disconnect?.(),2500)}Vt.inst.dispose(),Vt=null,document.body.classList.remove("en-cabecera"),mt("fx-flash").style.opacity=0,mt("fx-streak").style.opacity=0,mt("fx-fade").style.opacity=1,mt("fx-fade").classList.add("saliendo"),setTimeout(()=>{mt("fx-fade").style.opacity=0},30)}}window.__renderCabecera=(i,e)=>{let t=es.find(n=>n.id===i);return!Vt||Vt.def!==t?ch(t,e).then(()=>window.__renderCabecera(i,e)):(Vt.fixedT=e,o0(e),Promise.resolve(!0))};function o0(i){Vt.inst.render(i);let e=Vt.inst.overlay(i);mt("fx-streak").style.opacity=e.streak,mt("fx-flash").style.opacity=e.flash,mt("fx-fade").classList.remove("saliendo"),mt("fx-fade").style.opacity=e.fade}function dr(i){let e=mt("aviso");e.textContent=i,e.classList.add("visible"),clearTimeout(dr.t),dr.t=setTimeout(()=>e.classList.remove("visible"),5e3)}es.forEach(i=>{let e=document.createElement("button");e.dataset.id=i.id,e.innerHTML=`<strong>${i.nombre}</strong><span>${i.anios}</span>${i.cabecera?"<em>con cabecera</em>":""}`,e.onclick=()=>qs(i.id),mt("epocas").appendChild(e)});mt("btnModo").onclick=()=>{dn.setMode(dn.getMode()==="rosco"?"pruebas":"rosco")};function Q3(){dn.getMode&&(mt("btnModo").textContent=dn.getMode()==="rosco"?"\u{1F399}\uFE0F Ver mesa de pruebas":"\u{1F534}\u{1F535} Ver atril del rosco")}mt("btnRosco").onclick=i=>{if(dd=!0,Ji(),dn.getMode()!=="rosco"&&dn.setMode("rosco"),!dn.rosco)return;let e=dn.rosco.toggle();i.target.textContent=e?"\u23F9\uFE0F Parar rosco":"\u25B6\uFE0F Simular rosco",e&&Io("rosco")};mt("btnBloom").onclick=i=>{rh=!rh,i.target.textContent=rh?"\u2728 Brillo: s\xED":"\u2728 Brillo: no"};mt("btnUI").onclick=()=>document.body.classList.toggle("sin-ui");mt("btnCabecera").onclick=()=>{let i=En&&En.cabecera?En:es.find(e=>e.cabecera);ch(i)};mt("selEspecial").onchange=i=>{yi.especial=i.target.value;let e=r0;qs(En.id,{conCabecera:!1,camara:e})};mt("btnJugar").onclick=async()=>{if(Do[En.id]){dd=!0,Ji(),document.body.classList.add("jugando");try{await n0(mt("juego"),En,{especial:yi.especial,onCamara:i=>No(i)})}finally{document.body.classList.remove("jugando")}}};mt("btnHistoria").onclick=async()=>{document.body.classList.add("jugando"),Ji();try{await i0(mt("historia"),{cargar:async i=>{(!En||En.id!==i)&&qs(i,{conCabecera:!1})},camara:i=>No(i,!0),presentador:J3})}finally{document.body.classList.remove("jugando")}};mt("btnPaseo").onclick=()=>Bs?pd():ev();var s0=new to,a0=new ae,oh=null;Sn.domElement.addEventListener("pointerdown",i=>{oh=[i.clientX,i.clientY]});Sn.domElement.addEventListener("pointerup",i=>{if(!oh||Math.hypot(i.clientX-oh[0],i.clientY-oh[1])>5||!dn)return;a0.set(i.clientX/innerWidth*2-1,-(i.clientY/innerHeight)*2+1),s0.setFromCamera(a0,Yt);let e=s0.intersectObjects(dn.clickables||[],!0)[0];if(!e)return;let t=e.object.userData;t.destino?(dr("Entrando al plat\xF3\u2026"),qs(t.destino)):t.salida&&(dr("Saliendo a los Estudios Grok Bot\u2026"),qs("estudios",{camara:"pasillo"}))});var Bs=!1,ii={},ts=0,lh=0;function ev(){Bs=!0,ln.enabled=!1,Cn=null;let i=new D().subVectors(ln.target,Yt.position);ts=Math.atan2(-i.x,-i.z),lh=0,Yt.position.y=1.7,mt("btnPaseo").textContent="\u{1F6B6} Salir del paseo",dr("Paseo: W A S D (o flechas) para moverte, arrastra para mirar, May\xFAs para correr.")}function pd(){Bs=!1,ln.enabled=!0,mt("btnPaseo").textContent="\u{1F6B6} Paseo (WASD)";let i=new D(-Math.sin(ts),0,-Math.cos(ts));ln.target.copy(Yt.position).addScaledVector(i,4),ln.update()}addEventListener("keydown",i=>{i.target.tagName!=="INPUT"&&(ii[i.code]=!0)});addEventListener("keyup",i=>{ii[i.code]=!1});var ur=null;Sn.domElement.addEventListener("pointerdown",i=>{Bs&&(ur=[i.clientX,i.clientY])});addEventListener("pointerup",()=>{ur=null});addEventListener("pointermove",i=>{!Bs||!ur||(ts-=(i.clientX-ur[0])*.004,lh=Math.max(-1.2,Math.min(1.2,lh-(i.clientY-ur[1])*.004)),ur=[i.clientX,i.clientY])});function tv(i){let e=(ii.ShiftLeft||ii.ShiftRight?9:4)*i,t=new D(-Math.sin(ts),0,-Math.cos(ts)),n=new D(Math.cos(ts),0,-Math.sin(ts));(ii.KeyW||ii.ArrowUp)&&Yt.position.addScaledVector(t,e),(ii.KeyS||ii.ArrowDown)&&Yt.position.addScaledVector(t,-e),(ii.KeyA||ii.ArrowLeft)&&Yt.position.addScaledVector(n,-e),(ii.KeyD||ii.ArrowRight)&&Yt.position.addScaledVector(n,e),Yt.position.y=1.7,Yt.rotation.set(lh,ts,0,"YXZ")}mt("btnSaltar").onclick=()=>fd();mt("btnMedios").onclick=()=>mt("medios").classList.toggle("abierto");async function ud(){let i=mt("medios-lista");i.innerHTML="";for(let e of es){let t=document.createElement("div");t.className="fila-medio";let[n,s]=await Promise.all([lr("musica",e),lr("logo",e)]),a=o=>o?o.origen==="subido"?`subido: ${o.nombre}`:`carpeta: ${o.nombre.split("/").pop()}`:"<i>respaldo</i>";t.innerHTML=`<b>${e.nombre} ${e.anios}</b>
      <div>\u{1F3B5} M\xFAsica: <span>${a(n)}</span></div>
      <div class="bts">
        <label class="bt">Subir m\xFAsica de cabecera<input type="file" accept="audio/*" data-t="musica"></label>
        ${n&&n.origen==="subido"?'<button data-q="musica">Quitar m\xFAsica</button>':""}
      </div>
      <div>\u{1F5BC}\uFE0F Logo: <span>${a(s)}</span></div>
      <div class="bts">
        <label class="bt">Subir logo<input type="file" accept="image/*" data-t="logo"></label>
        ${s&&s.origen==="subido"?'<button data-q="logo">Quitar logo</button>':""}
        ${e.cabecera?'<button data-ver="1">\u25B6\uFE0F Ver cabecera</button>':""}
      </div>`,t.querySelectorAll("input[type=file]").forEach(o=>o.onchange=async()=>{let l=o.files[0];l&&(await Gp(o.dataset.t,e.id,l),dr(`Guardado "${l.name}" para ${e.nombre} ${e.anios}`),o.dataset.t==="logo"&&En===e&&hd(e),ud())}),t.querySelectorAll("button[data-q]").forEach(o=>o.onclick=async()=>{await Vp(o.dataset.q,e.id),o.dataset.q==="logo"&&En===e&&hd(e),ud()});let r=t.querySelector("button[data-ver]");r&&(r.onclick=()=>ch(e)),i.appendChild(t)}}ud();addEventListener("resize",()=>{Yt.aspect=innerWidth/innerHeight,Yt.updateProjectionMatrix(),Sn.setSize(innerWidth,innerHeight),fr.setSize(innerWidth,innerHeight),Vt&&Vt.inst.resize(innerWidth,innerHeight)});var nv=new no,cd=0;function iv(){let i=Math.min(nv.getDelta(),.05);if(cd+=i,Vt){if(Vt.fixedT!=null)return;let e=performance.now()/1e3-Vt.start;if(e>=Vt.def.cabecera.DURACION)fd();else{o0(e);return}}if(Cn){Cn.t+=i/Cn.dur;let e=Cn.t>=1?1:1-Math.pow(1-Cn.t,3);Yt.position.lerpVectors(Cn.fromPos,Cn.toPos,e),ln.target.lerpVectors(Cn.fromTgt,Cn.toTgt,e),Cn.t>=1&&(Cn=null)}Bs?tv(i):ln.update(),Yn&&(Yn.rotation.z=Math.sin(cd*2.2)*.03),dn&&(dn.update(cd,i),Q3()),rh?fr.render():Sn.render(ca,Yt)}Sn.setAnimationLoop(iv);qs(Os.get("plato")||es[0].id,{conCabecera:!1});Os.get("especial")&&(yi.especial=Os.get("especial"),qs(En.id,{conCabecera:!1}));Os.get("cam")&&No(Os.get("cam"),!0);Os.has("rosco")&&dn.rosco.toggle();mt("cargando").remove();window.__juego={PRUEBAS:la,jugarFinal:ah,UI:hr,FORMATOS:Do};window.__audioRespaldoWav=async(i=16.5,e="telecinco-2007")=>{let n=new OfflineAudioContext(2,44100*i,44100),s=(es.find(g=>g.id===e)||{}).cabecera;(s&&s.programarAudioRespaldo||Qc)(n,n.destination,0);let a=await n.startRendering(),r=a.length,o=a.getChannelData(0),l=a.getChannelData(1),c=new ArrayBuffer(44+r*4),u=new DataView(c),d=(g,_)=>{for(let m=0;m<_.length;m++)u.setUint8(g+m,_.charCodeAt(m))};d(0,"RIFF"),u.setUint32(4,36+r*4,!0),d(8,"WAVE"),d(12,"fmt "),u.setUint32(16,16,!0),u.setUint16(20,1,!0),u.setUint16(22,2,!0),u.setUint32(24,44100,!0),u.setUint32(28,44100*4,!0),u.setUint16(32,4,!0),u.setUint16(34,16,!0),d(36,"data"),u.setUint32(40,r*4,!0);for(let g=0,_=44;g<r;g++,_+=4)u.setInt16(_,Math.max(-1,Math.min(1,o[g]))*32767,!0),u.setInt16(_+2,Math.max(-1,Math.min(1,l[g]))*32767,!0);let h="",f=new Uint8Array(c);for(let g=0;g<f.length;g+=32768)h+=String.fromCharCode.apply(null,f.subarray(g,g+32768));return btoa(h)};window.__plato={scene:ca,camera:Yt,renderer:Sn,etapa:()=>dn,ok:!0,findAudioFile:Jc};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
