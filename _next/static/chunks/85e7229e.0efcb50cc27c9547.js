"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2894],{6992:function(e,t,n){n.d(t,{mainnet:function(){return X},sepolia:function(){return Y}});var r=n(80534);function a(e){return{formatters:void 0,fees:void 0,serializers:void 0,...e}}let s={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844"};function i(e){let t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?(0,r.h)(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerBlobGas:e.maxFeePerBlobGas?BigInt(e.maxFeePerBlobGas):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?(0,r.h)(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?s[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return t.yParity=(()=>{if(e.yParity)return Number(e.yParity);if("bigint"==typeof t.v){if(0n===t.v||27n===t.v)return 0;if(1n===t.v||28n===t.v)return 1;if(t.v>=35n)return t.v%2n===0n?1:0}})(),"legacy"===t.type&&(delete t.accessList,delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas,delete t.yParity),"eip2930"===t.type&&(delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),"eip1559"===t.type&&delete t.maxFeePerBlobGas,t}let o=(0,r.d)("transaction",i),l=(0,r.d)("block",function(e){var t;let n=null===(t=e.transactions)||void 0===t?void 0:t.map(e=>"string"==typeof e?e:i(e));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,blobGasUsed:e.blobGasUsed?BigInt(e.blobGasUsed):void 0,difficulty:e.difficulty?BigInt(e.difficulty):void 0,excessBlobGas:e.excessBlobGas?BigInt(e.excessBlobGas):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:n,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}});function c(e){let{args:t,eventName:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...n?{args:t,eventName:n}:{}}}let u={"0x0":"reverted","0x1":"success"},d=(0,r.d)("transactionReceipt",function(e){let t={...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(e=>c(e)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?(0,r.h)(e.transactionIndex):null,status:e.status?u[e.status]:null,type:e.type?s[e.type]||e.type:null};return e.blobGasPrice&&(t.blobGasPrice=BigInt(e.blobGasPrice)),e.blobGasUsed&&(t.blobGasUsed=BigInt(e.blobGasUsed)),t}),h={block:l({format(e){var t;return{transactions:null===(t=e.transactions)||void 0===t?void 0:t.map(e=>{if("string"==typeof e)return e;let t=i(e);return"0x7e"===t.typeHex&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?(0,r.a)(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}),stateRoot:e.stateRoot}}}),transaction:o({format(e){let t={};return"0x7e"===e.type&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?(0,r.a)(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}}),transactionReceipt:d({format:e=>({l1GasPrice:e.l1GasPrice?(0,r.a)(e.l1GasPrice):null,l1GasUsed:e.l1GasUsed?(0,r.a)(e.l1GasUsed):null,l1Fee:e.l1Fee?(0,r.a)(e.l1Fee):null,l1FeeScalar:e.l1FeeScalar?Number(e.l1FeeScalar):null})})};function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hex",n=function e(t){return Array.isArray(t)?function(e){let t=e.reduce((e,t)=>e+t.length,0),n=m(t);return{length:t<=55?1+t:1+n+t,encode(r){for(let{encode:a}of(t<=55?r.pushByte(192+t):(r.pushByte(247+n),1===n?r.pushUint8(t):2===n?r.pushUint16(t):3===n?r.pushUint24(t):r.pushUint32(t)),e))a(r)}}}(t.map(t=>e(t))):function(e){let t="string"==typeof e?(0,r.e)(e):e,n=m(t.length);return{length:1===t.length&&t[0]<128?1:t.length<=55?1+t.length:1+n+t.length,encode(e){1===t.length&&t[0]<128||(t.length<=55?e.pushByte(128+t.length):(e.pushByte(183+n),1===n?e.pushUint8(t.length):2===n?e.pushUint16(t.length):3===n?e.pushUint24(t.length):e.pushUint32(t.length))),e.pushBytes(t)}}}(t)}(e),a=(0,r.c)(new Uint8Array(n.length));return(n.encode(a),"hex"===t)?(0,r.b)(a.bytes):a.bytes}function m(e){if(e<256)return 1;if(e<65536)return 2;if(e<16777216)return 3;if(e<4294967296)return 4;throw new r.B("Length is too large.")}function b(e){var t;let{kzg:n}=e,a=null!==(t=e.to)&&void 0!==t?t:"string"==typeof e.blobs[0]?"hex":"bytes",s="string"==typeof e.blobs[0]?e.blobs.map(e=>(0,r.e)(e)):e.blobs,i=[];for(let e of s)i.push(Uint8Array.from(n.blobToKzgCommitment(e)));return"bytes"===a?i:i.map(e=>(0,r.b)(e))}function f(e){var t;let{kzg:n}=e,a=null!==(t=e.to)&&void 0!==t?t:"string"==typeof e.blobs[0]?"hex":"bytes",s="string"==typeof e.blobs[0]?e.blobs.map(e=>(0,r.e)(e)):e.blobs,i="string"==typeof e.commitments[0]?e.commitments.map(e=>(0,r.e)(e)):e.commitments,o=[];for(let e=0;e<s.length;e++){let t=s[e],r=i[e];o.push(Uint8Array.from(n.computeBlobKzgProof(t,r)))}return"bytes"===a?o:o.map(e=>(0,r.b)(e))}class y extends r.H{update(e){(0,r.g)(this);let{view:t,buffer:n,blockLen:a}=this,s=(e=(0,r.t)(e)).length;for(let i=0;i<s;){let o=Math.min(a-this.pos,s-i);if(o===a){let t=(0,r.f)(e);for(;a<=s-i;i+=a)this.process(t,i);continue}n.set(e.subarray(i,i+o),this.pos),this.pos+=o,i+=o,this.pos===a&&(this.process(t,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){(0,r.g)(this),(0,r.o)(e,this),this.finished=!0;let{buffer:t,view:n,blockLen:a,isLE:s}=this,{pos:i}=this;t[i++]=128,this.buffer.subarray(i).fill(0),this.padOffset>a-i&&(this.process(n,0),i=0);for(let e=i;e<a;e++)t[e]=0;!function(e,t,n,r){if("function"==typeof e.setBigUint64)return e.setBigUint64(t,n,r);let a=BigInt(32),s=BigInt(4294967295),i=Number(n>>a&s),o=Number(n&s),l=r?4:0,c=r?0:4;e.setUint32(t+l,i,r),e.setUint32(t+c,o,r)}(n,a-8,BigInt(8*this.length),s),this.process(n,0);let o=(0,r.f)(e),l=this.outputLen;if(l%4)throw Error("_sha2: outputLen should be aligned to 32bit");let c=l/4,u=this.get();if(c>u.length)throw Error("_sha2: outputLen bigger than state");for(let e=0;e<c;e++)o.setUint32(4*e,u[e],s)}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let n=e.slice(0,t);return this.destroy(),n}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());let{blockLen:t,buffer:n,length:r,finished:a,destroyed:s,pos:i}=this;return e.length=r,e.pos=i,e.finished=a,e.destroyed=s,r%t&&e.buffer.set(n),e}constructor(e,t,n,a){super(),this.blockLen=e,this.outputLen=t,this.padOffset=n,this.isLE=a,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=(0,r.f)(this.buffer)}}let g=(e,t,n)=>e&t^~e&n,x=(e,t,n)=>e&t^e&n^t&n,v=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),B=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),w=new Uint32Array(64);class k extends y{get(){let{A:e,B:t,C:n,D:r,E:a,F:s,G:i,H:o}=this;return[e,t,n,r,a,s,i,o]}set(e,t,n,r,a,s,i,o){this.A=0|e,this.B=0|t,this.C=0|n,this.D=0|r,this.E=0|a,this.F=0|s,this.G=0|i,this.H=0|o}process(e,t){for(let n=0;n<16;n++,t+=4)w[n]=e.getUint32(t,!1);for(let e=16;e<64;e++){let t=w[e-15],n=w[e-2],a=(0,r.r)(t,7)^(0,r.r)(t,18)^t>>>3,s=(0,r.r)(n,17)^(0,r.r)(n,19)^n>>>10;w[e]=s+w[e-7]+a+w[e-16]|0}let{A:n,B:a,C:s,D:i,E:o,F:l,G:c,H:u}=this;for(let e=0;e<64;e++){let t=u+((0,r.r)(o,6)^(0,r.r)(o,11)^(0,r.r)(o,25))+g(o,l,c)+v[e]+w[e]|0,d=((0,r.r)(n,2)^(0,r.r)(n,13)^(0,r.r)(n,22))+x(n,a,s)|0;u=c,c=l,l=o,o=i+t|0,i=s,s=a,a=n,n=t+d|0}n=n+this.A|0,a=a+this.B|0,s=s+this.C|0,i=i+this.D|0,o=o+this.E|0,l=l+this.F|0,c=c+this.G|0,u=u+this.H|0,this.set(n,a,s,i,o,l,c,u)}roundClean(){w.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}constructor(){super(64,32,8,!1),this.A=0|B[0],this.B=0|B[1],this.C=0|B[2],this.D=0|B[3],this.E=0|B[4],this.F=0|B[5],this.G=0|B[6],this.H=0|B[7]}}let P=(0,r.w)(()=>new k);function I(e,t){let n=P((0,r.i)(e,{strict:!1})?(0,r.j)(e):e);return"bytes"===(t||"hex")?n:(0,r.k)(n)}class F extends r.B{constructor({maxSize:e,size:t}){super("Blob size is too large.",{metaMessages:["Max: ".concat(e," bytes"),"Given: ".concat(t," bytes")]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlobSizeTooLargeError"})}}class G extends r.B{constructor(){super("Blob data must not be empty."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EmptyBlobError"})}}class E extends r.B{constructor({hash:e,size:t}){super('Versioned hash "'.concat(e,'" size is invalid.'),{metaMessages:["Expected: 32","Received: ".concat(t)]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidVersionedHashSizeError"})}}class U extends r.B{constructor({hash:e,version:t}){super('Versioned hash "'.concat(e,'" version is invalid.'),{metaMessages:["Expected: ".concat(1),"Received: ".concat(t)]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidVersionedHashVersionError"})}}function C(e){let{chainId:t,maxPriorityFeePerGas:n,maxFeePerGas:a,to:s}=e;if(t<=0)throw new r.I({chainId:t});if(s&&!(0,r.m)(s))throw new r.n({address:s});if(a&&a>2n**256n-1n)throw new r.F({maxFeePerGas:a});if(n&&a&&n>a)throw new r.T({maxFeePerGas:a,maxPriorityFeePerGas:n})}function T(e){if(!e||0===e.length)return[];let t=[];for(let n=0;n<e.length;n++){let{address:a,storageKeys:s}=e[n];for(let e=0;e<s.length;e++)if(s[e].length-2!=64)throw new r.q({storageKey:s[e]});if(!(0,r.m)(a,{strict:!1}))throw new r.n({address:a});t.push([a,s])}return t}function H(e,t){let n=function(e){if(e.type)return e.type;if(void 0!==e.blobs||void 0!==e.blobVersionedHashes||void 0!==e.maxFeePerBlobGas||void 0!==e.sidecars)return"eip4844";if(void 0!==e.maxFeePerGas||void 0!==e.maxPriorityFeePerGas)return"eip1559";if(void 0!==e.gasPrice)return void 0!==e.accessList?"eip2930":"legacy";throw new r.p({transaction:e})}(e);return"eip1559"===n?function(e,t){let{chainId:n,gas:a,nonce:s,to:i,value:o,maxFeePerGas:l,maxPriorityFeePerGas:c,accessList:u,data:d}=e;C(e);let h=T(u),m=[(0,r.k)(n),s?(0,r.k)(s):"0x",c?(0,r.k)(c):"0x",l?(0,r.k)(l):"0x",a?(0,r.k)(a):"0x",null!=i?i:"0x",o?(0,r.k)(o):"0x",null!=d?d:"0x",h,...L(e,t)];return(0,r.u)(["0x02",p(m)])}(e,t):"eip2930"===n?function(e,t){let{chainId:n,gas:a,data:s,nonce:i,to:o,value:l,accessList:c,gasPrice:u}=e;!function(e){let{chainId:t,maxPriorityFeePerGas:n,gasPrice:a,maxFeePerGas:s,to:i}=e;if(t<=0)throw new r.I({chainId:t});if(i&&!(0,r.m)(i))throw new r.n({address:i});if(n||s)throw new r.B("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(a&&a>2n**256n-1n)throw new r.F({maxFeePerGas:a})}(e);let d=T(c),h=[(0,r.k)(n),i?(0,r.k)(i):"0x",u?(0,r.k)(u):"0x",a?(0,r.k)(a):"0x",null!=o?o:"0x",l?(0,r.k)(l):"0x",null!=s?s:"0x",d,...L(e,t)];return(0,r.u)(["0x01",p(h)])}(e,t):"eip4844"===n?function(e,t){let{chainId:n,gas:a,nonce:s,to:i,value:o,maxFeePerBlobGas:l,maxFeePerGas:c,maxPriorityFeePerGas:u,accessList:d,data:h}=e;!function(e){let{blobVersionedHashes:t}=e;if(t){if(0===t.length)throw new G;for(let e of t){let t=(0,r.s)(e),n=(0,r.h)((0,r.l)(e,0,1));if(32!==t)throw new E({hash:e,size:t});if(1!==n)throw new U({hash:e,version:n})}}C(e)}(e);let m=e.blobVersionedHashes,y=e.sidecars;if(e.blobs&&(void 0===m||void 0===y)){let t="string"==typeof e.blobs[0]?e.blobs:e.blobs.map(e=>(0,r.b)(e)),n=e.kzg,a=b({blobs:t,kzg:n});if(void 0===m&&(m=function(e){var t;let{commitments:n,version:a}=e,s=null!==(t=e.to)&&void 0!==t?t:"string"==typeof n[0]?"hex":"bytes",i=[];for(let e of n)i.push(function(e){var t;let{commitment:n,version:a=1}=e,s=null!==(t=e.to)&&void 0!==t?t:"string"==typeof n?"hex":"bytes",i=I(n,"bytes");return i.set([a],0),"bytes"===s?i:(0,r.b)(i)}({commitment:e,to:s,version:a}));return i}({commitments:a})),void 0===y){let e=f({blobs:t,commitments:a,kzg:n});y=function(e){var t,n,a;let{data:s,kzg:i,to:o}=e,l=null!==(t=e.blobs)&&void 0!==t?t:function(e){var t;let n=null!==(t=e.to)&&void 0!==t?t:"string"==typeof e.data?"hex":"bytes",a="string"==typeof e.data?(0,r.e)(e.data):e.data,s=(0,r.s)(a);if(!s)throw new G;if(s>761855)throw new F({maxSize:761855,size:s});let i=[],o=!0,l=0;for(;o;){let e=(0,r.c)(new Uint8Array(131072)),t=0;for(;t<4096;){let n=a.slice(l,l+31);if(e.pushByte(0),e.pushBytes(n),n.length<31){e.pushByte(128),o=!1;break}t++,l+=31}i.push(e)}return"bytes"===n?i.map(e=>e.bytes):i.map(e=>(0,r.b)(e.bytes))}({data:s,to:o}),c=null!==(n=e.commitments)&&void 0!==n?n:b({blobs:l,kzg:i,to:o}),u=null!==(a=e.proofs)&&void 0!==a?a:f({blobs:l,commitments:c,kzg:i,to:o}),d=[];for(let e=0;e<l.length;e++)d.push({blob:l[e],commitment:c[e],proof:u[e]});return d}({blobs:t,commitments:a,proofs:e})}}let g=T(d),x=[(0,r.k)(n),s?(0,r.k)(s):"0x",u?(0,r.k)(u):"0x",c?(0,r.k)(c):"0x",a?(0,r.k)(a):"0x",null!=i?i:"0x",o?(0,r.k)(o):"0x",null!=h?h:"0x",g,l?(0,r.k)(l):"0x",null!=m?m:[],...L(e,t)],v=[],B=[],w=[];if(y)for(let e=0;e<y.length;e++){let{blob:t,commitment:n,proof:r}=y[e];v.push(t),B.push(n),w.push(r)}return(0,r.u)(["0x03",y?p([x,v,B,w]):p(x)])}(e,t):function(e,t){let{chainId:n=0,gas:a,data:s,nonce:i,to:o,value:l,gasPrice:c}=e;!function(e){let{chainId:t,maxPriorityFeePerGas:n,gasPrice:a,maxFeePerGas:s,to:i,accessList:o}=e;if(i&&!(0,r.m)(i))throw new r.n({address:i});if(void 0!==t&&t<=0)throw new r.I({chainId:t});if(n||s)throw new r.B("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(a&&a>2n**256n-1n)throw new r.F({maxFeePerGas:a});if(o)throw new r.B("`accessList` is not a valid Legacy Transaction attribute.")}(e);let u=[i?(0,r.k)(i):"0x",c?(0,r.k)(c):"0x",a?(0,r.k)(a):"0x",null!=o?o:"0x",l?(0,r.k)(l):"0x",null!=s?s:"0x"];if(t){let e=(()=>{if(t.v>=35n)return(t.v-35n)/2n>0?t.v:27n+(35n===t.v?0n:1n);if(n>0)return BigInt(2*n)+BigInt(35n+t.v-27n);let e=27n+(27n===t.v?0n:1n);if(t.v!==e)throw new r.v({v:t.v});return e})();u=[...u,(0,r.k)(e),t.r,t.s]}else n>0&&(u=[...u,(0,r.k)(n),"0x","0x"]);return p(u)}(e,t)}function L(e,t){let{r:n,s:a,v:s,yParity:i}=null!=t?t:e;return void 0===n||void 0===a||void 0===s&&void 0===i?[]:["number"==typeof i?i?(0,r.k)(1):"0x":0n===s?"0x":1n===s?(0,r.k)(1):27n===s?"0x":(0,r.k)(1),(0,r.x)(n),(0,r.x)(a)]}let D={contracts:{gasPriceOracle:{address:"0x420000000000000000000000000000000000000F"},l1Block:{address:"0x4200000000000000000000000000000000000015"},l2CrossDomainMessenger:{address:"0x4200000000000000000000000000000000000007"},l2Erc721Bridge:{address:"0x4200000000000000000000000000000000000014"},l2StandardBridge:{address:"0x4200000000000000000000000000000000000010"},l2ToL1MessagePasser:{address:"0x4200000000000000000000000000000000000016"}},formatters:h,serializers:{transaction:function(e,t){return"deposit"===e.type||void 0!==e.sourceHash?function(e){!function(e){let{from:t,to:n}=e;if(t&&!(0,r.m)(t))throw new r.n({address:t});if(n&&!(0,r.m)(n))throw new r.n({address:n})}(e);let{sourceHash:t,data:n,from:a,gas:s,isSystemTx:i,mint:o,to:l,value:c}=e,u=[t,a,null!=l?l:"0x",o?(0,r.k)(o):"0x",c?(0,r.k)(c):"0x",s?(0,r.k)(s):"0x",i?"0x1":"0x",null!=n?n:"0x"];return(0,r.u)(["0x7e",p(u)])}(e):H(e,t)}}};async function S(e,t){return BigInt(await e.request({method:"eth_gasPrice",params:[t]}))}async function N(e,t){return BigInt(await e.request({method:"eth_maxPriorityFeePerGas",params:[t]}))}function A(e){return 0===e||0n===e||null==e||"0"===e||""===e||"string"==typeof e&&("0x"===(0,r.x)(e).toLowerCase()||"0x00"===(0,r.x)(e).toLowerCase())}function z(e){return"cip64"===e.type||void 0!==e.maxFeePerGas&&void 0!==e.maxPriorityFeePerGas&&!A(e.feeCurrency)}D.contracts,D.contracts,D.contracts,D.contracts,D.contracts,a({id:60808,name:"BOB",nativeCurrency:{decimals:18,name:"ETH",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.gobob.xyz"],webSocket:["wss://rpc.gobob.xyz"]}},blockExplorers:{default:{name:"Blockscout",url:"https://explorer.gobob.xyz"}},contracts:{multicall3:{address:"0x63f8279bccDb75c0F38e0CD6B6A0c72a0a760FF9",blockCreated:457045}},testnet:!1});let O={block:l({exclude:["difficulty","gasLimit","mixHash","nonce","uncles"],format(e){var t;let n=null===(t=e.transactions)||void 0===t?void 0:t.map(e=>"string"==typeof e?e:{...i(e),feeCurrency:e.feeCurrency,..."0x7b"!==e.type?{gatewayFee:e.gatewayFee?(0,r.a)(e.gatewayFee):null,gatewayFeeRecipient:e.gatewayFeeRecipient||null}:{}});return{randomness:e.randomness,transactions:n}}}),transaction:o({format(e){let t={feeCurrency:e.feeCurrency};return"0x7b"===e.type?t.type="cip64":("0x7c"===e.type&&(t.type="cip42"),t.gatewayFee=e.gatewayFee?(0,r.a)(e.gatewayFee):null,t.gatewayFeeRecipient=e.gatewayFeeRecipient),t}}),transactionRequest:(0,r.y)({format(e){let t={feeCurrency:e.feeCurrency};return z(e)&&(t.type="0x7b"),t}})},R=2n**256n-1n;a({id:53457,name:"DODOchain Testnet",nativeCurrency:{decimals:18,name:"DODO",symbol:"DODO"},rpcUrls:{default:{http:["https://dodochain-testnet.alt.technology"],webSocket:["wss://dodochain-testnet.alt.technology/ws"]}},blockExplorers:{default:{name:"DODOchain Testnet (Sepolia) Explorer",url:"https://testnet-scan.dodochain.com"}},testnet:!0}),D.contracts,D.contracts,a({...D,id:3397901,network:"funkiSepolia",name:"Funki Sepolia Sandbox",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://funki-testnet.alt.technology"]}},blockExplorers:{default:{name:"Funki Sepolia Sandbox Explorer",url:"https://sepolia-sandbox.funkichain.com/"}},testnet:!0,contracts:{...D.contracts,multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:1620204}},sourceId:11155111});let j=32n*(2n**16n-1n),M={block:l({format(e){var t;let n=null===(t=e.transactions)||void 0===t?void 0:t.map(e=>{var t;if("string"==typeof e)return e;let n=null===(t=M.transaction)||void 0===t?void 0:t.format(e);return"0x71"===n.typeHex?n.type="eip712":"0xff"===n.typeHex&&(n.type="priority"),n});return{l1BatchNumber:e.l1BatchNumber?(0,r.a)(e.l1BatchNumber):null,l1BatchTimestamp:e.l1BatchTimestamp?(0,r.a)(e.l1BatchTimestamp):null,transactions:n}}}),transaction:o({format(e){let t={};return"0x71"===e.type?t.type="eip712":"0xff"===e.type&&(t.type="priority"),{...t,l1BatchNumber:e.l1BatchNumber?(0,r.a)(e.l1BatchNumber):null,l1BatchTxIndex:e.l1BatchTxIndex?(0,r.a)(e.l1BatchTxIndex):null}}}),transactionReceipt:d({format:e=>({l1BatchNumber:e.l1BatchNumber?(0,r.a)(e.l1BatchNumber):null,l1BatchTxIndex:e.l1BatchTxIndex?(0,r.a)(e.l1BatchTxIndex):null,logs:e.logs.map(e=>({...c(e),l1BatchNumber:e.l1BatchNumber?(0,r.a)(e.l1BatchNumber):null,transactionLogIndex:(0,r.h)(e.transactionLogIndex),logType:e.logType})),l2ToL1Logs:e.l2ToL1Logs.map(e=>({blockNumber:(0,r.a)(e.blockHash),blockHash:e.blockHash,l1BatchNumber:(0,r.a)(e.l1BatchNumber),transactionIndex:(0,r.a)(e.transactionIndex),shardId:(0,r.a)(e.shardId),isService:e.isService,sender:e.sender,key:e.key,value:e.value,transactionHash:e.transactionHash,logIndex:(0,r.a)(e.logIndex)}))})}),transactionRequest:(0,r.y)({exclude:["customSignature","factoryDeps","gasPerPubdata","paymaster","paymasterInput"],format:e=>e.gasPerPubdata||e.paymaster&&e.paymasterInput||e.factoryDeps||e.customSignature?{eip712Meta:{...e.gasPerPubdata?{gasPerPubdata:(0,r.k)(e.gasPerPubdata)}:{gasPerPubdata:(0,r.k)(50000n)},...e.paymaster&&e.paymasterInput?{paymasterParams:{paymaster:e.paymaster,paymasterInput:Array.from((0,r.e)(e.paymasterInput))}}:{},...e.factoryDeps?{factoryDeps:e.factoryDeps.map(e=>Array.from((0,r.e)(e)))}:{},...e.customSignature?{customSignature:Array.from((0,r.e)(e.customSignature))}:{}},type:"0x71"}:{}})};class _ extends r.B{constructor(){super('Transaction is not an EIP712 transaction.\n\nTransaction must:\n  - include `type: "eip712"`\n  - include one of the following: `customSignature`, `paymaster`, `paymasterInput`, `gasPerPubdata`, `factoryDeps`'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidEip712TransactionError"})}}function V(e){return"eip712"===e.type||"customSignature"in e&&!!e.customSignature||"paymaster"in e&&!!e.paymaster||"paymasterInput"in e&&!!e.paymasterInput||"gasPerPubdata"in e&&"bigint"==typeof e.gasPerPubdata||"factoryDeps"in e&&!!e.factoryDeps}function q(e){let{chainId:t,to:n,from:a,paymaster:s,paymasterInput:i}=e;if(!V(e))throw new _;if(!t||t<=0)throw new r.I({chainId:t});if(n&&!(0,r.m)(n))throw new r.n({address:n});if(a&&!(0,r.m)(a))throw new r.n({address:a});if(s&&!(0,r.m)(s))throw new r.n({address:s});if(s&&!i)throw new r.B("`paymasterInput` must be provided when `paymaster` is defined");if(!s&&i)throw new r.B("`paymaster` must be provided when `paymasterInput` is defined")}class K extends r.B{constructor({givenLength:e,maxBytecodeSize:t}){super("Bytecode cannot be longer than ".concat(t," bytes. Given length: ").concat(e)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytecodeLengthExceedsMaxSizeError"})}}class W extends r.B{constructor({givenLengthInWords:e}){super("Bytecode length in 32-byte words must be odd. Given length in words: ".concat(e)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytecodeLengthInWordsMustBeOddError"})}}class J extends r.B{constructor({givenLength:e}){super("The bytecode length in bytes must be divisible by 32. Given length: ".concat(e)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytecodeLengthMustBeDivisibleBy32Error"})}}let Q={formatters:M,serializers:{transaction:function(e,t){return V(e)?function(e){let{chainId:t,gas:n,nonce:a,to:s,from:i,value:o,maxFeePerGas:l,maxPriorityFeePerGas:c,customSignature:u,factoryDeps:d,paymaster:h,paymasterInput:m,gasPerPubdata:b,data:f}=e;q(e);let y=[a?(0,r.k)(a):"0x",c?(0,r.k)(c):"0x",l?(0,r.k)(l):"0x",n?(0,r.k)(n):"0x",null!=s?s:"0x",o?(0,r.k)(o):"0x",null!=f?f:"0x0",(0,r.k)(t),(0,r.k)(""),(0,r.k)(""),(0,r.k)(t),null!=i?i:"0x",b?(0,r.k)(b):(0,r.k)(50000n),null!=d?d:[],null!=u?u:"0x",h&&m?[h,m]:[]];return(0,r.u)(["0x71",p(y)])}(e):H(e,t)}},custom:{getEip712Domain:e=>{q(e);let t=function(e){var t;let{gas:n,nonce:a,to:s,from:i,value:o,maxFeePerGas:l,maxPriorityFeePerGas:c,factoryDeps:u,paymaster:d,paymasterInput:h,gasPerPubdata:p,data:m}=e;return{txType:113n,from:BigInt(i),to:s?BigInt(s):0n,gasLimit:null!=n?n:0n,gasPerPubdataByteLimit:null!=p?p:50000n,maxFeePerGas:null!=l?l:0n,maxPriorityFeePerGas:null!=c?c:0n,paymaster:d?BigInt(d):0n,nonce:a?BigInt(a):0n,value:null!=o?o:0n,data:m||"0x0",factoryDeps:null!==(t=null==u?void 0:u.map(e=>(0,r.k)(function(e){let t=(0,r.j)(e);if(t.length%32!=0)throw new J({givenLength:t.length});if(t.length>j)throw new K({givenLength:t.length,maxBytecodeSize:j});let n=I(t),a=(0,r.j)(n),s=t.length/32;if(s%2==0)throw new W({givenLengthInWords:s});let i=(0,r.j)(s),o=(0,r.z)(i,{size:2}),l=new Uint8Array([1,0]);return a.set(l,0),a.set(o,2),a}(e))))&&void 0!==t?t:[],paymasterInput:h||"0x"}}(e);return{domain:{name:"zkSync",version:"2",chainId:e.chainId},types:{Transaction:[{name:"txType",type:"uint256"},{name:"from",type:"uint256"},{name:"to",type:"uint256"},{name:"gasLimit",type:"uint256"},{name:"gasPerPubdataByteLimit",type:"uint256"},{name:"maxFeePerGas",type:"uint256"},{name:"maxPriorityFeePerGas",type:"uint256"},{name:"paymaster",type:"uint256"},{name:"nonce",type:"uint256"},{name:"value",type:"uint256"},{name:"data",type:"bytes"},{name:"factoryDeps",type:"bytes32[]"},{name:"paymasterInput",type:"bytes"}]},primaryType:"Transaction",message:t}}}};({...D,contracts:{...D.contracts,l2OutputOracle:{11155111:{address:"0xA0E35F56C318DE1bD5D9ca6A94Fe7e37C5663348"}},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11"},portal:{11155111:{address:"0xe3d90F21490686Ec7eF37BE788E02dfC12787264"}},l1StandardBridge:{11155111:{address:"0x1Fb30e446eA791cd1f011675E5F3f5311b70faF5"}}}});let X=a({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}});D.contracts,D.contracts,D.contracts,D.contracts,D.contracts,D.contracts;let Y=a({id:11155111,name:"Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.sepolia.org"]}},blockExplorers:{default:{name:"Etherscan",url:"https://sepolia.etherscan.io",apiUrl:"https://api-sepolia.etherscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:751532},ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",blockCreated:5317080}},testnet:!0});D.contracts,D.contracts,D.contracts}}]);