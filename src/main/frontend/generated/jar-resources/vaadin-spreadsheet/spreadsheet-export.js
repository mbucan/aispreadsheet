function SpreadsheetApi(){var Fb='',Gb=0,Hb='gwt.codesvr=',Ib='gwt.hosted=',Jb='gwt.hybrid',Kb='SpreadsheetApi',Lb='#',Mb='?',Nb='/',Ob=1,Pb='img',Qb='clear.cache.gif',Rb='baseUrl',Sb='script',Tb='SpreadsheetApi.nocache.js',Ub='base',Vb='//',Wb='meta',Xb='name',Yb='gwt:property',Zb='content',$b='=',_b='gwt:onPropertyErrorFn',ac='Bad handler "',bc='" for "gwt:onPropertyErrorFn"',cc='gwt:onLoadErrorFn',dc='" for "gwt:onLoadErrorFn"',ec='modernie',fc='MSIE',gc='Trident',hc='yes',ic='none',jc='user.agent',kc='webkit',lc='safari',mc='gecko',nc=11,oc='gecko1_8',pc='Single-script hosted mode not yet implemented. See issue ',qc='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',rc='98000277C44FDEE2DCBDD5CA2B5E3DFD',sc=':1',tc=':2',uc=':',vc='DOMContentLoaded',wc=50;var l=Fb,m=Gb,n=Hb,o=Ib,p=Jb,q=Kb,r=Lb,s=Mb,t=Nb,u=Ob,v=Pb,w=Qb,A=Rb,B=Sb,C=Tb,D=Ub,F=Vb,G=Wb,H=Xb,I=Yb,J=Zb,K=$b,L=_b,M=ac,N=bc,O=cc,P=dc,Q=ec,R=fc,S=gc,T=hc,U=ic,V=jc,W=kc,X=lc,Y=mc,Z=nc,$=oc,_=pc,ab=qc,bb=rc,cb=sc,db=tc,eb=uc,fb=vc,gb=wc;var hb=window,ib=document,jb,kb,lb=l,mb={},nb=[],ob=[],pb=[],qb=m,rb,sb;if(!hb.__gwt_stylesLoaded){hb.__gwt_stylesLoaded={}}if(!hb.__gwt_scriptsLoaded){hb.__gwt_scriptsLoaded={}}function tb(){var b=false;try{var c=hb.location.search;return (c.indexOf(n)!=-1||(c.indexOf(o)!=-1||hb.external&&hb.external.gwtOnLoad))&&c.indexOf(p)==-1}catch(a){}tb=function(){return b};return b}
function ub(){if(jb&&kb){jb(rb,q,lb,qb)}}
function vb(){function e(a){var b=a.lastIndexOf(r);if(b==-1){b=a.length}var c=a.indexOf(s);if(c==-1){c=a.length}var d=a.lastIndexOf(t,Math.min(c,b));return d>=m?a.substring(m,d+u):l}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=ib.createElement(v);b.src=a+w;a=e(b.src)}return a}
function g(){var a=yb(A);if(a!=null){return a}return l}
function h(){var a=ib.getElementsByTagName(B);for(var b=m;b<a.length;++b){if(a[b].src.indexOf(C)!=-1){return e(a[b].src)}}return l}
function i(){var a=ib.getElementsByTagName(D);if(a.length>m){return a[a.length-u].href}return l}
function j(){var a=ib.location;return a.href==a.protocol+F+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==l){k=h()}if(k==l){k=i()}if(k==l&&j()){k=e(ib.location.href)}k=f(k);return k}
function wb(){var b=document.getElementsByTagName(G);for(var c=m,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(H),g;if(f){if(f==I){g=e.getAttribute(J);if(g){var h,i=g.indexOf(K);if(i>=m){f=g.substring(m,i);h=g.substring(i+u)}else{f=g;h=l}mb[f]=h}}else if(f==L){g=e.getAttribute(J);if(g){try{sb=eval(g)}catch(a){alert(M+g+N)}}}else if(f==O){g=e.getAttribute(J);if(g){try{rb=eval(g)}catch(a){alert(M+g+P)}}}}}}
var xb=function(a,b){return b in nb[a]};var yb=function(a){var b=mb[a];return b==null?null:b};function zb(a,b){var c=pb;for(var d=m,e=a.length-u;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function Ab(a){var b=ob[a](),c=nb[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(sb){sb(a,d,b)}throw null}
ob[Q]=function(){{var a=hb.navigator.userAgent;if(a.indexOf(R)==-1&&a.indexOf(S)!=-1){return T}return U}};nb[Q]={'none':m,'yes':u};ob[V]=function(){var a=navigator.userAgent.toLowerCase();var b=ib.documentMode;if(function(){return a.indexOf(W)!=-1}())return X;if(function(){return a.indexOf(Y)!=-1||b>=Z}())return $;return X};nb[V]={'gecko1_8':m,'safari':u};SpreadsheetApi.onScriptLoad=function(a){SpreadsheetApi=null;jb=a;ub()};if(tb()){alert(_+ab);return}vb();wb();try{var Bb;zb([U,$],bb);zb([T,$],bb+cb);zb([U,X],bb+db);Bb=pb[Ab(Q)][Ab(V)];var Cb=Bb.indexOf(eb);if(Cb!=-1){qb=Number(Bb.substring(Cb+u))}}catch(a){return}var Db;function Eb(){if(!kb){kb=true;ub();if(ib.removeEventListener){ib.removeEventListener(fb,Eb,false)}if(Db){clearInterval(Db)}}}
if(ib.addEventListener){ib.addEventListener(fb,function(){Eb()},false)}var Db=setInterval(function(){if(/loaded|complete/.test(ib.readyState)){Eb()}},gb)}
SpreadsheetApi();(function () {var $gwt_version = "2.10.0";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {$wnd.__gwtStatsEvent(a)} : null;var $strongName = '98000277C44FDEE2DCBDD5CA2B5E3DFD';function K(){}
function FE(){}
function BE(){}
function Mg(){}
function Tg(){}
function fb(){}
function sb(){}
function sn(){}
function dn(){}
function ln(){}
function En(){}
function Ln(){}
function Sn(){}
function Zn(){}
function mf(){}
function mo(){}
function fo(){}
function to(){}
function Eo(){}
function Lo(){}
function To(){}
function $o(){}
function kp(){}
function qp(){}
function wp(){}
function VE(){}
function FF(){}
function HF(){}
function kG(){}
function JH(){}
function LH(){}
function dI(){}
function fI(){}
function uK(){}
function YK(){}
function $K(){}
function ZL(){}
function jM(){}
function jO(){}
function OO(){}
function cQ(){}
function gQ(){}
function gR(){}
function vT(){}
function xT(){}
function CT(){}
function PT(){}
function GZ(){}
function r$(){}
function N1(){}
function M2(){}
function X2(){}
function X3(){}
function C3(){}
function Z3(){}
function _3(){}
function c4(){}
function e4(){}
function g4(){}
function i4(){}
function k4(){}
function m4(){}
function o4(){}
function p4(){}
function r4(){}
function t4(){}
function u4(){}
function w4(){}
function y4(){}
function z4(){}
function B4(){}
function C4(){}
function E4(){}
function F4(){}
function H4(){}
function J4(){}
function L4(){}
function N4(){}
function P4(){}
function R4(){}
function R7(){}
function H7(){}
function J7(){}
function L7(){}
function N7(){}
function P7(){}
function T7(){}
function V7(){}
function V6(){}
function X7(){}
function Y7(){}
function Z7(){}
function _7(){}
function b8(){}
function d8(){}
function f8(){}
function j8(){}
function l8(){}
function n8(){}
function p8(){}
function itb(){}
function mcb(){}
function Fdb(){}
function Odb(){}
function Pdb(){}
function Vdb(){}
function Wdb(){}
function Gmb(){}
function Pmb(){}
function Xmb(){}
function dnb(){}
function Kob(){}
function iqb(){}
function mqb(){}
function oqb(){}
function jrb(){}
function mrb(){}
function prb(){}
function srb(){}
function vrb(){}
function yrb(){}
function Brb(){}
function Erb(){}
function Hrb(){}
function Usb(){}
function t3(a){}
function si(){Fh()}
function Mi(){Fh()}
function RG(){QG()}
function CH(){AH()}
function FH(){jH()}
function dM(){XL()}
function gM(){XL()}
function qM(){pM()}
function mH(a){TF(a)}
function Gcb(){vcb()}
function keb(){keb=BE}
function Zm(a,b){a.b=b}
function Um(a,b){a.f=b}
function Ym(a,b){a.a=b}
function dc(a,b){a.a=b}
function IE(a,b){a.a=b}
function JE(a,b){a.b=b}
function JN(a,b){a.q=b}
function nN(a,b){a.s=b}
function jG(a,b){a.d=b}
function NO(a,b){a.d=b}
function bO(a,b){a.o=b}
function MO(a,b){a.a=b}
function XI(a,b){a.a=b}
function dS(a,b){a.a=b}
function eS(a,b){a.b=b}
function YQ(a,b){a.b=b}
function wR(a,b){a.b=b}
function lR(a,b){a.c=b}
function mR(a,b){a.e=b}
function AR(a,b){a.k=b}
function oX(a,b){a.G=b}
function pX(a,b){a.H=b}
function p0(a,b){a.g=b}
function o0(a,b){a.f=b}
function BZ(a,b){a.f=b}
function B0(a,b){a.w=b}
function q0(a,b){a.i=b}
function u0(a,b){a.p=b}
function v0(a,b){a.q=b}
function O0(a,b){a.L=b}
function S0(a,b){a.M=b}
function U0(a,b){a.O=b}
function V0(a,b){a.R=b}
function $0(a,b){a.W=b}
function _0(a,b){a.Z=b}
function a1(a,b){a.$=b}
function pe(a,b){a.Zc=b}
function vh(b,a){b.id=a}
function bb(a){this.a=a}
function jb(a){this.a=a}
function Fb(a){this.a=a}
function Lb(a){this.a=a}
function Ag(a){this.a=a}
function Cg(a){this.a=a}
function ep(a){this.a=a}
function Sp(a){this.a=a}
function SI(a){this.a=a}
function VI(a){this.a=a}
function RE(a){this.a=a}
function XE(a){this.a=a}
function _E(a){this.b=a}
function LJ(a){this.a=a}
function NJ(a){this.a=a}
function wK(a){this.a=a}
function yK(a){this.a=a}
function xM(a){this.a=a}
function CO(a){this.a=a}
function KO(a){this.a=a}
function DP(a){this.a=a}
function FP(a){this.a=a}
function JP(a){this.a=a}
function LP(a){this.a=a}
function NP(a){this.a=a}
function PP(a){this.a=a}
function RP(a){this.a=a}
function VP(a){this.a=a}
function XP(a){this.a=a}
function jQ(a){this.a=a}
function HR(a){this.a=a}
function JR(a){this.a=a}
function MS(a){this.a=a}
function OS(a){this.a=a}
function QS(a){this.a=a}
function oT(a){this.a=a}
function nU(a){this.a=a}
function pU(a){this.a=a}
function rU(a){this.a=a}
function HY(a){this.a=a}
function TY(a){this.a=a}
function ZY(a){this.a=a}
function _Y(a){this.a=a}
function hZ(a){this.a=a}
function jZ(a){this.a=a}
function oZ(a){this.a=a}
function qZ(a){this.a=a}
function vZ(a){this.a=a}
function h$(a){this.a=a}
function l$(a){this.a=a}
function q$(a){this.a=a}
function x$(a){this.a=a}
function y$(a){this.a=a}
function C$(a){this.a=a}
function y1(a){this.a=a}
function B1(a){this.b=a}
function PL(a){this.c=a}
function Y2(a){this.a=a}
function L3(a){this.a=a}
function N3(a){this.a=a}
function C5(a){this.a=a}
function H5(a){this.a=a}
function J5(a){this.a=a}
function N5(a){this.a=a}
function v6(a){this.a=a}
function B6(a){this.a=a}
function D6(a){this.a=a}
function F6(a){this.a=a}
function r7(a){this.a=a}
function h8(a){this.a=a}
function Ao(){this.a={}}
function B2(){this.a={}}
function BX(a,b){a.gc=b}
function AX(a,b){a.fc=b}
function FX(a,b){a.Gc=b}
function nX(a,b){a.lb=b}
function zX(a,b){a.mb=b}
function sbb(a,b){a.b=b}
function rbb(a,b){a.a=b}
function tbb(a,b){a.c=b}
function ubb(a,b){a.e=b}
function vbb(a,b){a.f=b}
function wbb(a,b){a.g=b}
function xbb(a,b){a.i=b}
function zbb(a,b){a.j=b}
function Abb(a,b){a.k=b}
function Bbb(a,b){a.n=b}
function Cbb(a,b){a.o=b}
function Dbb(a,b){a.p=b}
function Ebb(a,b){a.q=b}
function Fbb(a,b){a.r=b}
function Gbb(a,b){a.s=b}
function Hbb(a,b){a.t=b}
function Ibb(a,b){a.u=b}
function Kbb(a,b){a.v=b}
function Lbb(a,b){a.w=b}
function Mbb(a,b){a.A=b}
function Nbb(a,b){a.B=b}
function Obb(a,b){a.d=b}
function Pbb(a,b){a.C=b}
function Qbb(a,b){a.D=b}
function Rbb(a,b){a.F=b}
function Sbb(a,b){a.G=b}
function Tbb(a,b){a.H=b}
function Ubb(a,b){a.I=b}
function Vbb(a,b){a.J=b}
function Wbb(a,b){a.K=b}
function Xbb(a,b){a.L=b}
function Ybb(a,b){a.M=b}
function Zbb(a,b){a.N=b}
function $bb(a,b){a.O=b}
function _bb(a,b){a.P=b}
function acb(a,b){a.Q=b}
function bcb(a,b){a.R=b}
function ccb(a,b){a.S=b}
function dcb(a,b){a.T=b}
function ecb(a,b){a.U=b}
function fcb(a,b){a.V=b}
function gcb(a,b){a.W=b}
function wcb(a,b){a.a=b}
function xcb(a,b){a.b=b}
function ycb(a,b){a.c=b}
function zcb(a,b){a.d=b}
function Acb(a,b){a.e=b}
function Bcb(a,b){a.f=b}
function Ccb(a,b){a.g=b}
function Dcb(a,b){a.i=b}
function Ecb(a,b){a.j=b}
function Fcb(a,b){a.k=b}
function Prb(a,b){a.b=b}
function rj(b,a){b.src=a}
function rcb(a){this.a=a}
function tcb(a){this.a=a}
function Kab(a){this.a=a}
function Mab(a){this.a=a}
function eeb(a){this.a=a}
function bfb(a){this.a=a}
function mfb(a){this.a=a}
function yfb(a){this.a=a}
function $jb(a){this.a=a}
function Rkb(a){this.a=a}
function Xkb(a){this.a=a}
function Bkb(a){this.d=a}
function alb(a){this.a=a}
function flb(a){this.a=a}
function fmb(a){this.c=a}
function Vnb(a){this.c=a}
function hnb(a){this.b=a}
function wnb(a){this.b=a}
function vob(a){this.a=a}
function zob(a){this.a=a}
function uqb(a){this.a=a}
function wqb(a){this.a=a}
function wsb(a){this.a=a}
function rsb(a){this.a=a}
function Nsb(a){this.a=a}
function Ssb(a){this.a=a}
function ctb(a){this.a=a}
function An(){this.c=++xn}
function KK(){KK=BE;OK()}
function UL(){UL=BE;TL()}
function rf(a){qf=a;gg()}
function ZE(a,b){ZE(a.b,b)}
function nP(a,b){kL(a.j,b)}
function pP(a,b){bf(a.j,b)}
function jR(a,b){xh(a.a,b)}
function xR(a,b){kR(a.g,b)}
function NH(a,b){Qe(b,a)}
function VS(a,b){Vg(b,a.k)}
function iT(a,b){Vg(b,a.B)}
function R$(a,b){wU(a.V,b)}
function V$(a,b){FU(a.V,b)}
function d0(a,b){QW(a.V,b)}
function e0(a,b){PW(a.V,b)}
function l0(a,b){nX(a.V,b)}
function m0(a,b){oX(a.V,b)}
function n0(a,b){pX(a.V,b)}
function w0(a,b){qX(a.V,b)}
function x0(a,b){rX(a.V,b)}
function C0(a,b){tX(a.V,b)}
function E0(a,b){mX(a.V,b)}
function F0(a,b){yW(a.V,b)}
function G0(a,b){eU(a.U,b)}
function H0(a,b){wX(a.V,b)}
function I0(a,b){xX(a.V,b)}
function N0(a,b){qP(a.t,b)}
function A_(a,b){nP(a.t,b)}
function P0(a,b){zX(a.V,b)}
function Q0(a,b){AX(a.V,b)}
function R0(a,b){BX(a.V,b)}
function W0(a,b){sX(a.V,b)}
function Z0(a,b){FX(a.V,b)}
function b1(a,b){GX(a.V,b)}
function g1(a,b){YX(a.V,b)}
function h1(a,b){ZX(a.V,b)}
function n1(a,b){zY(a.V,b)}
function o1(a,b){AY(a.V,b)}
function d1(a,b){fU(a.U,b)}
function kP(a){kL(a.j,a.c)}
function S3(a){T3(a);U3(a)}
function TR(a){a.a=0;a.b=0}
function gN(a){a.t=new Jlb}
function Q2(){Q2=BE;new R2}
function Fh(){Fh=BE;Eh=QD()}
function LF(){LF=BE;JF=RD()}
function HG(){HG=BE;DG=SD()}
function WI(){WI=BE;new Zob}
function VJ(){VJ=BE;UJ=UD()}
function pM(){pM=BE;oM=vM()}
function qR(){pR.call(this)}
function Sdb(){Rdb(this)}
function Jlb(){zlb(this)}
function Zob(){Mjb(this)}
function $sb(a,b){a.push(b)}
function EX(a,b){xS(a.zc,b)}
function t_(a,b){hcb(a.W,b)}
function D_(a,b){fbb(a.W,b)}
function Q_(a,b){jbb(a.W,b)}
function Y_(a,b){gbb(a.W,b)}
function k0(a,b){ybb(a.W,b)}
function sj(b,a){b.value=a}
function Pm(b,a){b.value=a}
function Vf(b,a){b.length=a}
function j5(a,b){a.a[Hyb]=b}
function zo(a,b,c){a.a[b]=c}
function z1(){sb.call(this)}
function O1(){pR.call(this)}
function heb(){Kf.call(this)}
function Jfb(){Kf.call(this)}
function Ycb(a){Ucb(this,a)}
function ahb(a){Vgb(this,a)}
function ec(a){dc(this,a.id)}
function wg(a){return a.Ld()}
function ytb(a){return a>>>0}
function ktb(){return ++htb}
function A2(a,b){return null}
function HL(a,b){JL(a,b,a.c)}
function BO(a,b){Y_(a.a.a,b)}
function re(a,b){uh(a.od(),b)}
function te(a,b){De(a.od(),b)}
function Gg(a){Fg();Eg.Nd(a)}
function vcb(){vcb=BE;Lcb()}
function Pf(){Pf=BE;Of=new K}
function PE(){PE=BE;OE=new VE}
function ng(){ng=BE;mg=new X2}
function QG(){QG=BE;PG=new An}
function oL(){oL=BE;af();wL()}
function z2(){z2=BE;y2=new An}
function s3(){s3=BE;r3=new An}
function mF(){this.a=new ygb}
function Qdb(){this.a=new Jlb}
function dpb(){this.a=new Zob}
function Nrb(){this.a=new Zob}
function ifb(){Kf.call(this)}
function Ggb(){Kf.call(this)}
function Mob(){Kf.call(this)}
function rqb(){Kf.call(this)}
function Lf(a){Jf.call(this,a)}
function Mb(a){Lb.call(this,a)}
function yc(a){Lb.call(this,a)}
function of(b,a){b.fillStyle=a}
function Uf(b,a){b[b.length]=a}
function Wf(b,a){b[b.length]=a}
function Ah(b,a){b.tabIndex=a}
function zh(b,a){b.scrollTop=a}
function Oh(a,b,c){a.add(b,c)}
function fJ(a,b){lJ(a,b,b,-1)}
function eK(a,b){zI(a,b);_J(a)}
function xX(a,b){a.ub=b;XX(a)}
function yo(a,b){return a.a[b]}
function dP(a){return a.g&&a.f}
function _h(a){Fh();return a|0}
function Cj(a){(Fh(),Eh).Yd(a)}
function Vp(a){Tp.call(this,a)}
function bI(a){Vp.call(this,a)}
function dF(a){_E.call(this,a)}
function d$(a,b){h1(DQ(a.a),b)}
function c$(a,b){g1(DQ(a.a),b)}
function f$(a,b){n1(DQ(a.a),b)}
function g$(a,b){o1(DQ(a.a),b)}
function ZZ(a,b){V$(DQ(a.a),b)}
function a_(a,b,c){aV(a.V,b,c)}
function i0(a,b,c){lX(a.V,b,c)}
function D0(a,b,c){uX(a.V,b,c)}
function l1(a,b,c){qY(a.V,b,c)}
function p1(a){wW(a.V);jU(a.U)}
function t0(a,b){a.o=b;_R(a.Q)}
function Z4(a){Jf.call(this,a)}
function ieb(a){Lf.call(this,a)}
function Lfb(a){Lf.call(this,a)}
function Kfb(a){Nf.call(this,a)}
function Hb(){Fb.call(this,hub)}
function Ib(){Fb.call(this,iub)}
function Qb(){Fb.call(this,jub)}
function Sb(){Fb.call(this,kub)}
function Ub(){Fb.call(this,lub)}
function Vb(){Fb.call(this,mub)}
function Wb(){Fb.call(this,nub)}
function gc(){Fb.call(this,oub)}
function sc(){Fb.call(this,pub)}
function tc(){Fb.call(this,qub)}
function uc(){Fb.call(this,rub)}
function wc(){Fb.call(this,tub)}
function xc(){Fb.call(this,uub)}
function Ac(){Fb.call(this,vub)}
function Fc(){Fb.call(this,wub)}
function Yd(){Fb.call(this,xub)}
function wE(){uE==null&&(uE=[])}
function ag(){ag=BE;!!(Fg(),Eg)}
function oe(a,b){pe(a,(LF(),b))}
function iI(a,b){jI((LF(),a),b)}
function ie(a){return LF(),a.Zc}
function ke(a){return LF(),a.Zc}
function dJ(a){return LF(),a.Zc}
function jJ(a){return LF(),a.Zc}
function ON(a){return !a?null:a}
function cW(a,b){return b<=a.ob}
function z0(a,b){a.u=new Llb(b)}
function A0(a,b){a.v=new Llb(b)}
function dH(a,b){a.__listener=b}
function Rdb(a){a.a=(Cdb(),Adb)}
function aeb(a){Lf.call(this,a)}
function geb(a){Lf.call(this,a)}
function hfb(a){Lf.call(this,a)}
function jfb(a){Lf.call(this,a)}
function Hgb(a){Lf.call(this,a)}
function Bgb(a){ieb.call(this,a)}
function smb(a){rtb(a);this.a=a}
function lW(a){Qe(a,null);Oe(a)}
function ef(a){pe(this,(LF(),a))}
function kf(a){pe(this,(LF(),a))}
function dq(a,b){return Jeb(a,b)}
function XF(a,b){LF();JF.Ne(a,b)}
function YF(a,b){LF();JF.Oe(a,b)}
function fG(a,b){LF();JF.Oe(a,b)}
function N_(a,b,c){ebb(a.W,c,b)}
function p_(a,b,c){dbb(a.W,b,c)}
function $_(a,b,c){jcb(a.W,b,c)}
function a2(a,b,c){Jjb(a.c,b,c)}
function JI(a,b){tI(a.a,b,false)}
function mN(a,b){bK(a,b);kN(a,1)}
function pN(a,b){fK(a,b);kN(a,1)}
function SM(a,b){a.j=b;Vg(a.d,b)}
function DX(a,b,c){a.tc=c;a.sc=b}
function b_(a){return a.S[a.a-1]}
function FO(a){!a.b&&(a.b=aG(a))}
function BI(a){pe(this,(LF(),a))}
function v3(a){t3(this);this.a=a}
function jeb(a){ieb.call(this,a)}
function Nfb(a){hfb.call(this,a)}
function rgb(){eeb.call(this,'')}
function ygb(){eeb.call(this,'')}
function zgb(){eeb.call(this,'')}
function $G(){Ep.call(this,null)}
function pf(){this.a=Date.now()}
function Qo(){this.a=tvb in $wnd}
function Omb(){throw WD(new rqb)}
function vnb(){throw WD(new Ggb)}
function Unb(){throw WD(new Ggb)}
function $db(a){return Object(a)}
function atb(a,b){return jq(a,b)}
function zeb(a){yeb(a);return a.k}
function Aeb(a){yeb(a);return a.i}
function Dh(a){a=lgb(a);return a}
function mob(a){hnb.call(this,a)}
function Gob(a){Anb.call(this,a)}
function qob(a){mob.call(this,a)}
function dtb(a){ctb.call(this,a)}
function $d(){Fb.call(this,'tab')}
function Rd(){Fb.call(this,'row')}
function kc(){Fb.call(this,'log')}
function fc(){Fb.call(this,'img')}
function ek(){_j.call(this,bvb,3)}
function ul(){rl.call(this,bvb,1)}
function Am(){wm.call(this,bvb,1)}
function Apb(){Apb=BE;zpb=Cpb()}
function Q1(){Q1=BE;P1=V1();W1()}
function lg(){Xf!=0&&(Xf=0);_f=-1}
function Lj(a){(Fh(),a).opacity=0}
function Lq(a){return a.l|a.m<<22}
function Dp(a,b){return Pp(a.a,b)}
function cE(a,b){return ZD(a,b)>0}
function fE(a,b){return ZD(a,b)<0}
function kF(b,a){return b.test(a)}
function Db(a,b){th(b,'role',a.a)}
function mV(a,b){return e_(a.a,b)}
function se(a,b,c){Be(a.od(),b,c)}
function U4(a,b,c){s5(a).Lf(b,c)}
function _sb(a,b,c){a.splice(b,c)}
function Mqb(a,b,c){b.Tf(a.a[c])}
function x7(a,b){b<0&&(b=0);a.a=b}
function y7(a,b){b<0&&(b=0);a.d=b}
function qgb(a,b){a.a+=b;return a}
function tgb(a,b){a.a+=b;return a}
function yqb(a,b){while(a.rg(b));}
function Jab(a){pe(this,(LF(),a))}
function WF(a){LF();KF=a;JF.Me(a)}
function dG(a){LF();KF=a;JF.Me(a)}
function $2(){$2=BE;LF();Qi($doc)}
function Iob(){Iob=BE;Hob=new Kob}
function Nmb(){Nmb=BE;Mmb=new Pmb}
function zsb(){zsb=BE;ysb=new Usb}
function Dsb(a){lsb(a);return a.a}
function Bb(a,b){this.b=a;this.a=b}
function SH(){this.o=new ML(this)}
function xG(){this.a=new Ep(null)}
function GJ(){HJ.call(this,false)}
function $b(){Fb.call(this,'form')}
function _b(){Fb.call(this,'grid')}
function lc(){Fb.call(this,'main')}
function nc(){Fb.call(this,'math')}
function oc(){Fb.call(this,'menu')}
function hc(){Fb.call(this,'list')}
function vc(){Fb.call(this,'note')}
function fe(){Fb.call(this,'tree')}
function ue(a,b){Ee((LF(),a.Zc),b)}
function we(a,b){XF((LF(),a.Zc),b)}
function df(a,b){Ah((LF(),a.Zc),b)}
function eh(a,b){(Fh(),Eh).Sd(a,b)}
function xh(a,b){(Fh(),Eh).ge(a,b)}
function yh(a,b){(Fh(),Eh).he(a,b)}
function _j(a,b){Nj.call(this,a,b)}
function Ak(a,b){Nj.call(this,a,b)}
function rl(a,b){Nj.call(this,a,b)}
function Cl(a,b){Nj.call(this,a,b)}
function Nl(a,b){Nj.call(this,a,b)}
function Wl(a,b){Nj.call(this,a,b)}
function im(a,b){Nj.call(this,a,b)}
function km(){im.call(this,'PX',0)}
function nm(){im.call(this,'EX',3)}
function mm(){im.call(this,'EM',2)}
function om(){im.call(this,'PT',4)}
function pm(){im.call(this,'PC',5)}
function qm(){im.call(this,'IN',6)}
function rm(){im.call(this,'CM',7)}
function sm(){im.call(this,'MM',8)}
function wm(a,b){Nj.call(this,a,b)}
function Im(a,b){Nj.call(this,a,b)}
function bq(a,b){Nj.call(this,a,b)}
function Nj(a,b){this.b=a;this.c=b}
function Pp(a,b){return Djb(a.d,b)}
function aE(a,b){return ZD(a,b)==0}
function dE(a,b){return ZD(a,b)>=0}
function gE(a,b){return ZD(a,b)<=0}
function Wg(a){return Jh((Fh(),a))}
function lh(a){return Ih((Fh(),a))}
function bG(a){return aH((LF(),a))}
function rg(a){return !!a.b||!!a.g}
function CM(a){Qp(a.a,a.d,a.c,a.b)}
function VN(a){iN(a,false);ah(a.i)}
function xL(a,b){Nj.call(this,a,b)}
function tO(a,b){rO.call(this,a,b)}
function LR(a,b){rO.call(this,a,b)}
function hR(a,b){this.b=a;this.a=b}
function hO(a,b){this.a=a;this.b=b}
function IO(a,b){this.a=a;this.b=b}
function bJ(a,b){this.a=a;this.b=b}
function ZP(a,b){this.a=a;this.b=b}
function NY(a,b){this.a=a;this.b=b}
function PY(a,b){this.a=a;this.b=b}
function RY(a,b){this.a=a;this.b=b}
function VY(a,b){this.a=a;this.b=b}
function XY(a,b){this.a=a;this.b=b}
function sZ(a,b){this.a=a;this.b=b}
function j$(a,b){this.a=a;this.b=b}
function t$(a,b){this.a=a;this.b=b}
function A$(a,b){this.a=a;this.b=b}
function F1(a,b){this.a=a;this.b=b}
function W3(a,b){this.a=a;this.b=b}
function zZ(a,b){this.b=a;this.a=b}
function V4(a,b){this.b=a;this.a=b}
function L6(a,b){this.b=a;this.a=b}
function L5(a,b){this.a=a;this.b=b}
function t7(a,b){this.a=a;this.b=b}
function v7(a,b){this.a=a;this.b=b}
function fS(a,b){this.c=b;this.d=a}
function GX(a,b){a.Uc=b;wS(a.zc,b)}
function $1(a,b){return Gjb(a.c,b)}
function Njb(a){return a.a.c+a.c.c}
function uh(b,a){b.className=a||''}
function wh(b,a){b.innerHTML=a||''}
function Gj(b,a){b.selectedIndex=a}
function Ysb(a,b,c){a.splice(b,0,c)}
function $Z(a,b,c){a_(DQ(a.a),b,c)}
function nJ(a,b){Gj((LF(),a.Zc),b)}
function Ke(a,b){!!a.Xc&&Cp(a.Xc,b)}
function Hj(a){return (Fh(),a)[Zub]}
function Ij(a){return (Fh(),a)[Aub]}
function Jj(a){return (Fh(),a)[$ub]}
function Kj(a){return (Fh(),a)[_ub]}
function Bj(a){return (Fh(),a).type}
function tG(a){sG();return wG(qG,a)}
function ub(a){$wnd.clearTimeout(a)}
function kg(a){$wnd.clearTimeout(a)}
function bc(){Fb.call(this,'group')}
function Ec(){Fb.call(this,'radio')}
function Gb(){Fb.call(this,'alert')}
function ce(){Fb.call(this,'timer')}
function lm(){im.call(this,'PCT',1)}
function Mm(){Im.call(this,'PRE',2)}
function lL(a){af();ef.call(this,a)}
function MU(a){RU(a);NU(a);a.v=true}
function MG(){if(!GG){IH();GG=true}}
function LG(){if(!BG){HH();BG=true}}
function GE(){ZF();PE();QE();new Z1}
function P5(){s3();v3.call(this,{})}
function Mcb(a,b){Nj.call(this,a,b)}
function hdb(a,b){Nj.call(this,a,b)}
function qdb(a,b){Nj.call(this,a,b)}
function ydb(a,b){Nj.call(this,a,b)}
function Ddb(a,b){Nj.call(this,a,b)}
function kfb(a,b){Mf.call(this,a,b)}
function plb(a,b){this.a=a;this.b=b}
function M_(a,b){hW(a.V)||jY(a.V,b)}
function bpb(a,b){return Djb(a.a,b)}
function Gpb(a,b){return a.a.get(b)}
function J(a,b){return cr(a)===cr(b)}
function Zq(a){return typeof a===Gtb}
function $q(a){return typeof a===Htb}
function br(a){return typeof a===Jtb}
function cr(a){return a==null?null:a}
function T4(a){return a.b.a+'.'+a.a}
function K$(a){x6(a.f);CJ(a.f,null)}
function i1(a,b,c,d){lcb(a.W,b,c,d)}
function Kb(a,b,c){th(b,a.a,Jb(a,c))}
function ncb(a,b,c){a[b.a]=$db(c.a)}
function ocb(a,b,c){a[b.a]=$db(c.a)}
function v5(a,b,c,d){a[b][c].type=d}
function Isb(a,b){this.a=a;this.b=b}
function bf(a,b){(LF(),a.Zc)[Hub]=!b}
function AH(){AH=BE;jH();gH[Ovb]=nH}
function Epb(){Apb();return new zpb}
function tb(a){$wnd.clearInterval(a)}
function Xb(){Fb.call(this,'dialog')}
function Pb(){Fb.call(this,'banner')}
function Xd(){Fb.call(this,'slider')}
function Vd(){Fb.call(this,'search')}
function Zd(){Fb.call(this,'status')}
function Gc(){Fb.call(this,'region')}
function bk(){_j.call(this,'NONE',0)}
function Ck(){Ak.call(this,'NONE',0)}
function Yl(){Wl.call(this,'CLIP',0)}
function wl(){rl.call(this,'AUTO',3)}
function Rl(){Nl.call(this,'LEFT',2)}
function BL(){xL.call(this,'LEFT',2)}
function Ep(a){Fp.call(this,a,false)}
function RJ(a,b){SJ.call(this,a.a,b)}
function EK(a){V.call(this);this.a=a}
function v2(a){this.a=w2(a);this.b=a}
function A7(a){this.a=a;V.call(this)}
function Xg(a){return !!Jh((Fh(),a))}
function eE(a){return typeof a===Htb}
function eG(a,b){LF();a.__listener=b}
function VH(a,b){QH(a,b,(LF(),a.Zc))}
function vI(a,b){QH(a,b,(LF(),a.Zc))}
function KN(a){rN(a);SN((LF(),a.Zc))}
function _1(a,b){a.b=b;nN(b,DQ(a.d))}
function Eqb(a,b){Bqb.call(this,a,b)}
function Gqb(a,b){Bqb.call(this,a,b)}
function Iqb(a,b){Bqb.call(this,a,b)}
function Ob(){Fb.call(this,'article')}
function cc(){Fb.call(this,'heading')}
function ic(){Fb.call(this,'listbox')}
function mc(){Fb.call(this,'marquee')}
function qc(){Fb.call(this,'menubar')}
function _d(){Fb.call(this,'tablist')}
function be(){Fb.call(this,'textbox')}
function de(){Fb.call(this,'toolbar')}
function ee(){Fb.call(this,'tooltip')}
function zb(a){this.a=a;sb.call(this)}
function oH(a){(Fh(),Eh).Yd(a);pH(a)}
function gh(a){return (Fh(),Eh).Zd(a)}
function ih(a){return (Fh(),Eh).$d(a)}
function mh(a){return (Fh(),Eh).ce(a)}
function ph(a){return (Fh(),Eh).de(a)}
function qh(a){return (Fh(),Eh).ie(a)}
function ij(a){return (Fh(),Eh).ae(a)}
function hj(a){return (Fh(),Eh)._d(a)}
function nj(a){return Kh((Fh(),Eh),a)}
function oj(a){return Lh((Fh(),Eh),a)}
function tj(a){return (Fh(),Eh).Td(a)}
function vj(a){return (Fh(),Eh).Ud(a)}
function wj(a){return (Fh(),Eh).Vd(a)}
function xj(a){return (Fh(),Eh).Xd(a)}
function $eb(a){return dr((rtb(a),a))}
function neb(a){keb();return rtb(a),a}
function ugb(a,b){a.a+=''+b;return a}
function vgb(a,b){a.a+=''+b;return a}
function wgb(a,b){a.a+=''+b;return a}
function Zfb(a,b){return a.indexOf(b)}
function mq(a){return nq(a.l,a.m,a.h)}
function Sm(a){return (Fh(),a).target}
function OF(a){LF();return JF.He(a,0)}
function af(){af=BE;_e=(XL(),XL(),WL)}
function HI(){HI=BE;GI=(XL(),XL(),VL)}
function gL(a){return zM((LF(),a.Zc))}
function hL(a){return AM((LF(),a.Zc))}
function YL(a){return (Fh(),Eh).ee(a)}
function Yk(){Ak.call(this,'BLOCK',1)}
function Uk(){Ak.call(this,'FLEX',17)}
function il(){Ak.call(this,'TABLE',7)}
function Hl(){Cl.call(this,'FIXED',3)}
function Sl(){Nl.call(this,'RIGHT',3)}
function CL(){xL.call(this,'RIGHT',3)}
function fk(){_j.call(this,'SOLID',4)}
function vR(a,b){Hlb(a.f,b);EL(a.i,b)}
function qY(a,b,c){VT(Gjb(a.Cc,b),c)}
function f_(a,b,c){return w1(a.I,b,c)}
function g_(a,b,c){return x1(a.I,b,c)}
function i_(a,b,c){return XV(a.V,b,c)}
function E_(a,b,c){!!a.R&&o$(a.R,b,c)}
function R_(a,b,c){!!a.R&&p$(a.R,b,c)}
function OM(a,b){a.p=b;VM(a);a.g=true}
function IK(a){this.a=a;sb.call(this)}
function HP(a){this.a=a;sb.call(this)}
function TP(a){this.a=a;sb.call(this)}
function T6(a){this.a=a;sb.call(this)}
function M6(a){this.a=a;sb.call(this)}
function KS(a){this.a=a;sb.call(this)}
function bZ(a){this.a=a;sb.call(this)}
function fZ(a){this.a=a;sb.call(this)}
function H1(a){this.a=a;sb.call(this)}
function E5(a){this.a=a;sb.call(this)}
function m7(a){this.a=a;sb.call(this)}
function rpb(a){this.a=Epb();this.b=a}
function Jpb(a){this.a=Epb();this.b=a}
function _ob(a){Mjb(this);jjb(this,a)}
function qjb(a){return !a?null:a.kg()}
function tqb(a){return a!=null?Q(a):0}
function gW(a){return WV(a,a.sc,a.tc)}
function I_(a){U$(a,a.b,true);dV(a.V)}
function gtb(){ctb.call(this,'UTF-8')}
function Rb(){Fb.call(this,'checkbox')}
function Tb(){Fb.call(this,'combobox')}
function Zb(){Fb.call(this,'document')}
function ac(){Fb.call(this,'gridcell')}
function ae(){Fb.call(this,'tabpanel')}
function he(){Fb.call(this,'treeitem')}
function ge(){Fb.call(this,'treegrid')}
function Sd(){Fb.call(this,'rowgroup')}
function jc(){Fb.call(this,'listitem')}
function rc(){Fb.call(this,'menuitem')}
function ck(){_j.call(this,'DOTTED',1)}
function dk(){_j.call(this,'DASHED',2)}
function $k(){Ak.call(this,'INLINE',2)}
function gl(){Ak.call(this,'RUN_IN',6)}
function El(){Cl.call(this,'STATIC',0)}
function Pl(){Nl.call(this,'CENTER',0)}
function vl(){rl.call(this,'SCROLL',2)}
function Km(){Im.call(this,'NORMAL',0)}
function Lm(){Im.call(this,'NOWRAP',1)}
function zL(){xL.call(this,'CENTER',0)}
function sf(a){a.i=fq(OB,Etb,74,0,0,1)}
function vg(a,b){a.d=xg(a.d,[b,false])}
function IN(a,b){VJ();Qd();Eb(HN(a),b)}
function Ri(a,b){return Gh((Fh(),a),b)}
function Aj(a){return (Fh(),a).touches}
function Fj(a){return (Fh(),a).options}
function TO(a){W2((ng(),mg),new XP(a))}
function WO(a){W2((ng(),mg),new PP(a))}
function AP(a){W2((ng(),mg),new JP(a))}
function $T(a){W2((ng(),mg),new rU(a))}
function dV(a){W2((ng(),mg),new TY(a))}
function a0(a){FW(a.V);HW(a.V);IW(a.V)}
function GW(a){KU(a);bY(a);eY(a);bV(a)}
function Qhb(a){shb();Rhb.call(this,a)}
function _P(a,b,c){XM.call(this,a,b,c)}
function e$(a,b,c,d){j1(DQ(a.a),b,c,d)}
function D3(a,b){a.d=1;V3(new W3(a,b))}
function th(c,a,b){c.setAttribute(a,b)}
function esb(a,b){if(Trb){return}a.b=b}
function qsb(a,b){return a[a.length]=b}
function vsb(a,b){return a[a.length]=b}
function Sob(a){return a<10?'0'+a:''+a}
function WD(a){return a.backingJsObject}
function bH(a){if(!_G){a.Je();_G=true}}
function Rp(a){this.d=new Zob;this.c=a}
function Y1(){Y1=BE;new Xpb;X1=new Jlb}
function Vl(){Vl=BE;Tl=new Yl;Ul=new Zl}
function vm(){vm=BE;um=new ym;tm=new Am}
function ym(){wm.call(this,'VISIBLE',0)}
function tl(){rl.call(this,'VISIBLE',0)}
function Ql(){Nl.call(this,'JUSTIFY',1)}
function Yb(){Fb.call(this,'directory')}
function Wd(){Fb.call(this,'separator')}
function Td(){Fb.call(this,'rowheader')}
function Ud(){Fb.call(this,'scrollbar')}
function AL(){xL.call(this,'JUSTIFY',1)}
function zlb(a){a.a=fq(MB,Etb,1,0,5,1)}
function a5(a,b){_4.call(this,null,a,b)}
function hI(a,b){(LF(),a)['align']=b.a}
function j_(a,b){return bpb(a.G,vfb(b))}
function n_(a,b){return bpb(a.H,vfb(b))}
function nfb(a,b){return a<b?-1:a>b?1:0}
function nq(a,b,c){return {l:a,m:b,h:c}}
function Yq(a,b){return a!=null&&Wq(a,b)}
function Vg(b,a){return b.appendChild(a)}
function _g(b,a){return b.removeChild(a)}
function nh(b,a){return parseInt(b[a])|0}
function DV(a){return wwb+a.sc+xwb+a.tc}
function cmb(a){return a.a<a.c.a.length}
function yj(a){return (Fh(),a).keyCode|0}
function PF(a){LF();return Ih((Fh(),a))}
function QF(a){LF();return Jh((Fh(),a))}
function UM(a){LM(a);NM(a);MM(a);a.kf()}
function YE(a,b){rtb(b);cF(a,b,b.length)}
function Ej(a){(Fh(),a).options.length=0}
function aI(){aI=BE;ZH=new dI;_H=new fI}
function o5(a,b,c){a.f[(new c5(b)).a]=c}
function RF(a,b,c){LF();JF.Ke(a,VF(b),c)}
function jF(c,a,b){return a.replace(c,b)}
function MM(a){if(a.e){ah(a.e);a.e=null}}
function LM(a){if(a.a){ah(a.a);a.a=null}}
function NM(a){if(a.j){ah(a.j);a.j=null}}
function jP(a){kL(a.a,a.b);cf(a.a,false)}
function XO(a){kL(a.j,'');rP(a,'');ZO(a)}
function aT(a){ah(a.B);fG(a.B,-15736909)}
function rP(a,b){a.b=b;kL(a.a,b);xP(a,b)}
function vP(a){a.v=false;a.u=false;uP(a)}
function _T(a){return aU(a,a.u.length-1)}
function w$(a,b){return Hjb(pQ(a.a).c,b)}
function S$(a){return (!a.T||!a.D)&&!a.Z}
function T$(a){return (!a.T||!a.F)&&!a.Z}
function jdb(a){return !!a&&!a.isEmpty()}
function $gb(a){Rgb();_gb.call(this,a,0)}
function qeb(a){keb();return a?true:false}
function gsb(a){if(Trb){return}a.e=false}
function Blb(a,b){$sb(a.a,b);return true}
function CX(a,b,c){yh(a.Ac,b);zh(a.Ac,c)}
function $fb(a,b,c){return a.indexOf(b,c)}
function agb(a,b){return a.lastIndexOf(b)}
function _eb(a){return Wfb(Htb,typeof(a))}
function _fb(a){return Wfb(Jtb,typeof(a))}
function ltb(a){return a.$H||(a.$H=++htb)}
function je(a){return nh((LF(),a.Zc),yub)}
function qe(a,b){(LF(),a.Zc).style[Aub]=b}
function ve(a,b){(LF(),a.Zc).style[Bub]=b}
function Zg(a,b){return (Fh(),Eh).fe(a,b)}
function zj(a){return !!(Fh(),a).shiftKey}
function Dj(a){(Fh(),a).stopPropagation()}
function vtb(a){if(!a){throw WD(new ifb)}}
function ptb(a){if(!a){throw WD(new rqb)}}
function rn(){rn=BE;qn=new Bn(Yub,new sn)}
function eo(){eo=BE;co=new Bn(Xub,new fo)}
function so(){so=BE;ro=new Bn(qvb,new to)}
function Do(){Do=BE;Co=new Bn(svb,new Eo)}
function Zo(){Zo=BE;Yo=new Bn(uvb,new $o)}
function Zl(){Wl.call(this,'ELLIPSIS',1)}
function Fl(){Cl.call(this,'RELATIVE',1)}
function Gl(){Cl.call(this,'ABSOLUTE',2)}
function el(){Ak.call(this,'LIST_ITEM',5)}
function Sk(){Ak.call(this,'INITIAL',16)}
function Nm(){Im.call(this,'PRE_LINE',3)}
function Om(){Im.call(this,'PRE_WRAP',4)}
function ZQ(){XQ.call(this);this.a=new gR}
function Kf(){sf(this);uf(this);this.Jd()}
function cL(a){this.c=a;this.a=!!this.c.P}
function qL(){oL();rL.call(this,ej($doc))}
function mJ(a){(LF(),a.Zc).multiple=false}
function TN(a){(LF(),a.Zc).style[_ub]='1'}
function XN(a){(LF(),a.Zc).style[_ub]='0'}
function XS(a){(LF(),a.Zc).style[_ub]='2'}
function lT(a){(LF(),a.Zc).style[_ub]='2'}
function YJ(a){return nh((LF(),a.Zc),yub)}
function XJ(a){return nh((LF(),a.Zc),gwb)}
function Dfb(a){return rE(nE(a,32))^rE(a)}
function cpb(a,b){return Kjb(a.a,b)!=null}
function DU(a,b){return !!a.r&&Hjb(a.r,b)}
function s0(a,b){Mjb(a.k);!!b&&jjb(a.k,b)}
function Agb(a){eeb.call(this,(rtb(a),a))}
function Anb(a){hnb.call(this,a);this.a=a}
function Onb(a){wnb.call(this,a);this.a=a}
function W(a){this.j=new bb(this);this.s=a}
function Fp(a,b){this.a=new Rp(b);this.b=a}
function xgb(a,b,c){deb(a,b,b,c);return a}
function VO(a,b){W2((ng(),mg),new ZP(a,b))}
function Gh(a,b){return a.createElement(b)}
function wq(a){return a.l+a.m*Bvb+a.h*Cvb}
function l_(a){return i_(a,a.V.sc,a.V.tc)}
function Mj(a){return a.b!=null?a.b:''+a.c}
function web(a){return a>=56320&&a<=57343}
function aW(a,b,c){return b<=a.ob&&c<=a.Uc}
function Jg(a){Fg();return parseInt(a)||-1}
function xJ(a){if(BJ(a)){return}a.i&&DJ(a)}
function yeb(a){if(a.k!=null){return}Neb(a)}
function DO(a){if(a.b){CM(a.b.a);a.b=null}}
function sR(a){if(a.c){vR(a,a.c);a.c=null}}
function TW(a){T_(a.a,a.db,a.zb,a.bb,a.xb)}
function tR(a,b){b?dh(a.j,Ywb):sh(a.j,Ywb)}
function Y0(a,b){HT(a.V.Fc);!!b&&yU(a.V,b)}
function k1(a,b){W2((ng(),mg),new F1(a,b))}
function Z1(){Y1();new Zob;new Zob;new Zob}
function LK(b,a){KK();b.__gwt_resolve=MK(a)}
function lj(b,a){return b.getElementById(a)}
function fj(b,a){return b.createTextNode(a)}
function bP(a){return !a.v||a.v&&!a.u&&!a.f}
function leb(a){return (rtb(a),a)?1231:1237}
function _6(a){return !a.F&&(a.F=CQ(a)),a.F}
function E2(b,a){return b.hasOwnProperty(a)}
function lfb(a,b){return Yq(b,92)&&b.a==a.a}
function Zrb(a,b){if(Trb){return}Blb(a.a,b)}
function zJ(a){if(BJ(a)){return}!a.i&&DJ(a)}
function b0(a){a.d?(a.d=false):JW(a.V,true)}
function tW(a,b){a.Gb=b;a.Hb=CY(b);K6(a.Ib)}
function V_(a,b,c){pbb(a.W,c,b);qb(a.r,200)}
function psb(a,b){nsb.call(this,a);this.a=b}
function usb(a,b){nsb.call(this,a);this.a=b}
function Qk(){Ak.call(this,'TABLE_ROW',15)}
function Mk(){Ak.call(this,'TABLE_CELL',13)}
function AI(){BI.call(this,(LF(),Qi($doc)))}
function lF(a){wgb(a.a,yF('Fill'));return a}
function ug(a,b){a.b=xg(a.b,[b,false]);sg(a)}
function yf(a,b){a.backingJsObject=b;vf(a,b)}
function yb(a,b){return $wnd.setTimeout(a,b)}
function Ksb(a,b){return a.a.og(new Nsb(b))}
function Psb(a,b){return a.a.og(new Ssb(b))}
function bg(a,b,c){return a.apply(b,c);var d}
function ar(a,b){return a&&b&&a instanceof b}
function pJ(a,b){return vJ(a,b,a.b.a.length)}
function _F(a){return LF(),aH((Fh(),a).type)}
function aL(){TK.call(this,(SK(),$doc.body))}
function al(){Ak.call(this,'INLINE_BLOCK',3)}
function cl(){Ak.call(this,'INLINE_TABLE',4)}
function Wk(){Ak.call(this,'INLINE_FLEX',18)}
function IT(a){return String.fromCharCode(a)}
function xW(a){return Wfb(a,swb)||Wfb(a,twb)}
function Oob(a){this.a=new $wnd.Date(qE(a))}
function xpb(a,b){var c;c=a[FAb];c.call(a,b)}
function ypb(a,b){var c;c=a[FAb];c.call(a,b)}
function q6(a,b){dh(b,Kzb);a.b&&apb(a.a.p,b)}
function qN(a,b){(LF(),a.Zc).style[_ub]=b+''}
function oeb(a,b){keb();return a==b?0:a?1:-1}
function Zeb(a,b){return rtb(a),cr(a)===cr(b)}
function Wfb(a,b){return rtb(a),cr(a)===cr(b)}
function xb(a,b){return $wnd.setInterval(a,b)}
function bgb(a,b,c){return a.lastIndexOf(b,c)}
function Yg(c,a,b){return c.insertBefore(a,b)}
function Hh(a,b){return a.getAttribute(b)||''}
function uj(a){return (Fh(),a).changedTouches}
function Qm(a){return _h((Fh(),a).clientX||0)}
function Rm(a){return _h((Fh(),a).clientY||0)}
function kn(){kn=BE;jn=new Bn('click',new ln)}
function cn(){cn=BE;bn=new Bn('blur',new dn)}
function Dn(){Dn=BE;Cn=new Bn('focus',new En)}
function Yn(){Yn=BE;Xn=new Bn('keyup',new Zn)}
function sG(){sG=BE;new zG;qG=new xG;rG=uG()}
function sp(a){var b;if(pp){b=new qp;Cp(a,b)}}
function mp(a){var b;if(jp){b=new kp;a.vd(b)}}
function zS(a){if(!a.N){a.N=true;rb(a.M,50)}}
function BS(a){a.k=0;a.n=0;pb(a.M);a.N=false}
function pQ(a){!a.M&&(a.M=a.vf());return a.M}
function DQ(a){!a.F&&(a.F=a.Af());return a.F}
function D1(a,b,c){this.a=a;this.b=b;this.c=c}
function lZ(a,b,c){this.a=a;this.b=b;this.c=c}
function J1(a,b,c){this.a=a;this.c=b;this.b=c}
function d5(a,b){this.a=a;this.b=e5(this.a,b)}
function YX(a,b){_X(a,a.db,a.zb,1,a.ob,a.d,b)}
function yR(a,b){b!=null?mN(a.e,b):mN(a.e,'')}
function zR(a,b){b!=null?pN(a.e,b):pN(a.e,'')}
function Bp(a,b,c){return new Sp(Ip(a.a,b,c))}
function opb(a,b){return mpb(b,npb(a,Yob(b)))}
function _kb(a,b){return a.a.containsValue(b)}
function fsb(a,b){if(Trb){return}!!b&&(a.d=b)}
function otb(a,b){if(a!=b){throw WD(new Mob)}}
function mtb(a,b){if(!a){throw WD(new hfb(b))}}
function kL(a,b){(LF(),a.Zc)[nwb]=b!=null?b:''}
function Xcb(a,b){a.b=b;a.c=0;a.d=a.b+'.'+a.c}
function TS(a,b,c,d,e){a.i=b;a.f=c;a.g=d;a.e=e}
function fT(a,b,c,d,e){a.t=b;a.r=c;a.s=d;a.q=e}
function SX(a){a.X=0;a.Y=0;pb(a.nc);a.oc=false}
function sW(a){!a.o&&a.k!=-1&&a.n!=-1&&K6(a.p)}
function gb(a){$wnd.cancelAnimationFrame(a.id)}
function x6(a){(XL(),XL(),VL).df((LF(),a.Zc))}
function AY(a,b){_X(a,1,a.Uc,a.bb,a.xb,a.Sc,b)}
function m5(a,b,c,d){v5(a.c,(yeb(b),b.k),c,d)}
function c5(a){d5.call(this,(yeb(a),a.k),null)}
function Ok(){Ak.call(this,'TABLE_COLUMN',14)}
function kl(){Ak.call(this,'TABLE_CAPTION',8)}
function Ldb(a,b,c){Nj.call(this,a,b);this.a=c}
function Oab(a,b,c){this.a=a;this.b=b;this.c=c}
function Qpb(a,b,c){this.a=a;this.b=b;this.c=c}
function aqb(a,b,c){this.d=a;this.b=c;this.a=b}
function Qqb(a){this.b=(rtb(a),a);this.a=16464}
function lqb(){lqb=BE;jqb=new mqb;kqb=new oqb}
function Kn(){Kn=BE;Jn=new Bn('keydown',new Ln)}
function iV(a,b,c){return Gjb(a.e,wwb+b+xwb+c)}
function lE(a,b){return $D(Gq(eE(a)?pE(a):a,b))}
function mE(a,b){return $D(Hq(eE(a)?pE(a):a,b))}
function nE(a,b){return $D(Iq(eE(a)?pE(a):a,b))}
function meb(a){keb();return Wfb(Gtb,typeof(a))}
function Ydb(a){if(a==null){return 0}return +a}
function OX(a){if(!a.oc){a.oc=true;rb(a.nc,50)}}
function vW(a){K6(a.mc);oW(a);oY(a);FW(a);IW(a)}
function Z_(a){!a.V.Gc&&!!a.o&&!!a.B&&f1(a,a.B)}
function Hp(a,b){!a.a&&(a.a=new Jlb);Blb(a.a,b)}
function yp(a){var b;if(vp){b=new wp;Cp(a.a,b)}}
function Wsb(a){var b;b=a.slice();return jq(b,a)}
function Jp(a,b,c,d){var e;e=Mp(a,b,c);e.add(d)}
function Zsb(a,b,c){Xsb(c,0,a,b,c.length,false)}
function bhb(a,b){this.e=b;Xgb(this,(rtb(a),a))}
function nb(){this.a=new Jlb;this.b=new zb(this)}
function Ko(){Ko=BE;Jo=new Bn('touchend',new Lo)}
function Rn(){Rn=BE;Qn=new Bn('keypress',new Sn)}
function xfb(){xfb=BE;wfb=fq(GB,Etb,92,256,0,1)}
function Kk(){Ak.call(this,'TABLE_ROW_GROUP',12)}
function hX(a){dX(a,a.zc.e,a.zc.f,a.zc.K,a.zc.L)}
function l2(a){if(!a.a.s){return -1}return a.a.a}
function rE(a){if(eE(a)){return a|0}return Lq(a)}
function EU(a,b){return !!a.tb&&a.tb.contains(b)}
function vb(a,b){return Atb(function(){a.ld(b)})}
function K2(a,b){return a[0]!==b[0]||a[2]!==b[2]}
function L2(a,b){return a[1]!==b[1]||a[3]!==b[3]}
function o2(a){return a.a.t==4||a.a.t==2&&j2()>2}
function hq(a){return Array.isArray(a)&&a.ug===FE}
function Ui(a){return (Fh(),a).createElement(oub)}
function Xi(a){return (Fh(),a).createElement(tub)}
function kh(b,a){return b.getElementsByTagName(a)}
function sE(a){if(eE(a)){return ''+a}return Mq(a)}
function ZO(a){a.k=-1;a.n=-1;a.o=-1;a.p=-1;YO(a)}
function K6(a){!a.c&&(a.c=new M6(a));qb(a.c,a.b)}
function Y$(a,b){TR(a.Q);XO(a.t);X$(a);JU(a.V,b)}
function w3(a,b){s3();t3(this);this.c=a;this.b=b}
function jI(a,b){a.style['verticalAlign']=b.a}
function Geb(a,b){var c;c=Deb(a,b);c.f=2;return c}
function QW(a,b){var c;c=Ljb(a.Cc,b);!!c&&KW(a,c)}
function SO(a){var b;a.c=(b=iL(a.j),b==null?'':b)}
function ZX(a,b){_X(a,a.db,a.zb,a.bb,a.xb,a.lc,b)}
function _cb(a,b){this.a=a;this.b=b;this.c='poll'}
function pR(){this.rb=new Zob;this.hb=(pdb(),ndb)}
function So(){So=BE;Ro=new Bn('touchmove',new To)}
function lo(){lo=BE;ko=new Bn('mousedown',new mo)}
function Ifb(){Ifb=BE;Hfb=fq(IB,Etb,105,256,0,1)}
function Lrb(a,b){Jjb(a.a,(Wrb(),Trb)?null:b.c,b)}
function Dlb(a,b){qtb(b,a.a.length);return a.a[b]}
function pmb(a,b){ntb(b,a.length);nmb(a,0,b,null)}
function Job(a,b){return rtb(a),peb(a,(rtb(b),b))}
function kdb(a){return a.kb==null||a.kb.length==0}
function ldb(a){return a.ob==null||a.ob.length==0}
function Xq(a){return !Array.isArray(a)&&a.ug===FE}
function aj(a){return (Fh(),a).createElement('td')}
function bj(a){return (Fh(),a).createElement('tr')}
function BQ(a){l3(ie(a.Cf()),true);!!a.s&&pb(a.s)}
function QJ(a){se(a,ye((LF(),a.Zc))+'-'+ewb,false)}
function gg(){ag();if(Yf){return}Yf=true;hg(false)}
function HE(a){if(a.b){return a.b}return erb(),Xqb}
function ZV(a,b,c){return c>a.Uc&&c<=a.zb&&b<=a.ob}
function bW(a,b,c){return b>a.ob&&b<=a.xb&&c<=a.Uc}
function h_(a,b){return a.M.length>=b?a.M[b-1]:a.q}
function xg(a,b){!a&&(a=[]);a[a.length]=b;return a}
function Esb(a,b){zsb();nsb.call(this,a);this.a=b}
function ZI(a){WI();YI.call(this,(DF(),new zF(a)))}
function gF(a){dF.call(this,new _E(null));this.a=a}
function Ek(){Ak.call(this,'TABLE_COLUMN_GROUP',9)}
function ML(a){this.b=a;this.a=fq(lw,Etb,13,4,0,1)}
function g0(a,b,c,d,e,f,g,h){bS(a.Q,b,c,d,e,f,g,h)}
function Alb(a,b,c){ttb(b,a.a.length);Ysb(a.a,b,c)}
function Kjb(a,b){return br(b)?Ljb(a,b):qpb(a.a,b)}
function Fpb(a,b){return !(a.a.get(b)===undefined)}
function dW(a){return !Wfb((zk(),zub),Hj(a.style))}
function UK(a){SK();try{a.zd()}finally{cpb(RK,a)}}
function r2(){f2();return $wnd.navigator.userAgent}
function UD(){if(PD==2){return new jM}return new qM}
function TD(){if(PD==2){return new gM}return new dM}
function SD(){if(PD==2){return new JH}return new LH}
function RD(){if(PD==2){return new FH}return new CH}
function QD(){if(PD==2){return new Mi}return new si}
function E3(a){var b;a.d=2;return b=a.a,a.a=null,b}
function Ehb(a){var b;b=a.a[0];return a.e>0?b:-b|0}
function beb(a,b){if(b<0||b>a){throw WD(new heb)}}
function stb(a,b){if(a==null){throw WD(new Lfb(b))}}
function R5(a,b){N2(b,ie(_6(a.c)));oQ(a.a,hB).vg()}
function zq(a,b){return nq(a.l&b.l,a.m&b.m,a.h&b.h)}
function Fq(a,b){return nq(a.l|b.l,a.m|b.m,a.h|b.h)}
function Nq(a,b){return nq(a.l^b.l,a.m^b.m,a.h^b.h)}
function Qi(a){return (Fh(),a).createElement('div')}
function Ti(a){return (Fh(),a).createElement('img')}
function p3(){p3=BE;o3=ksb('spreadsheet RpcProxy')}
function SE(a){a.a=ksb('');gsb(a.a);UE(a.a);TE(a.a)}
function Jf(a){sf(this);this.f=a;uf(this);this.Jd()}
function jK(){iK.call(this);this.v=true;this.w=true}
function wI(){SH.call(this);oe(this,Ri($doc,'div'))}
function Gk(){Ak.call(this,'TABLE_HEADER_GROUP',10)}
function Ik(){Ak.call(this,'TABLE_FOOTER_GROUP',11)}
function NN(){VJ();FN.call(this);QN((LF(),this.Zc))}
function UF(a){LF();!!KF&&a==KF&&(KF=null);JF.Le(a)}
function cG(a){LF();!!KF&&a==KF&&(KF=null);JF.Le(a)}
function HW(a){a.k!=-1&&a.n!=-1&&a.j!=null&&YN(a.q)}
function AJ(a){if(BJ(a)){return}a.i?undefined:EJ(a)}
function yJ(a){if(BJ(a)){return}a.i?EJ(a):undefined}
function rR(a,b){return Je(a.e,b,jp?jp:(jp=new An))}
function T_(a,b,c,d,e){kbb(a.W,b,d,c,e);qb(a.r,200)}
function l5(a,b,c,d){a.b[T4(new V4(new c5(b),c))]=d}
function n5(a,b,c,d){a.e[T4(new V4(new c5(b),c))]=d}
function Qab(a,b){Tab(a.a,iq(dq(MB,1),Etb,1,5,[b]))}
function Rab(a,b){Tab(a.b,iq(dq(MB,1),Etb,1,5,[b]))}
function Sab(a,b){Tab(a.c,iq(dq(MB,1),Etb,1,5,[b]))}
function gbb(a,b){Tab(a.C,iq(dq(MB,1),Etb,1,5,[b]))}
function hcb(a,b){Tab(a.S,iq(dq(MB,1),Etb,1,5,[b]))}
function lb(a,b){Hlb(a.a,b);a.a.a.length==0&&pb(a.b)}
function Llb(a){zlb(this);Zsb(this.a,0,a.toArray())}
function Bqb(a,b){this.d=a;this.c=(b&64)!=0?b|Nvb:b}
function zfb(a,b){return ZD(a,b)<0?-1:ZD(a,b)>0?1:0}
function jh(a){return (Fh(),a).getAttribute(Kub)||''}
function Zi(a){return (Fh(),a).createElement('span')}
function le(a){return (LF(),a.Zc).style.display!=zub}
function Eq(a){return nq(~a.l&yvb,~a.m&yvb,~a.h&zvb)}
function oh(b,a){return b[a]==null?null:String(b[a])}
function Dgb(){Dgb=BE;Cgb=new dF(null);new dF(null)}
function SK(){SK=BE;PK=new YK;QK=new Zob;RK=new dpb}
function XL(){XL=BE;VL=TD();WL=Yq(VL,149)?new ZL:VL}
function MI(){LI.call(this);tI(this.a,'\u25BC',true)}
function mP(a,b){b.length==0?kL(a.j,b):kL(a.j,'='+b)}
function m_(a,b){return !!a.v&&Elb(a.v,vfb(b),0)!=-1}
function k_(a,b){return !!a.u&&Elb(a.u,vfb(b),0)!=-1}
function m2(a){return a.a.t==5&&(a.a.u==3||a.a.u==4)}
function k6(a,b){a.a.e=a.c+(a.b-a.c)*b;e6(a.a,a.a.e)}
function Mjb(a){a.a=new rpb(a);a.c=new Jpb(a);++a.b}
function bK(a,b){a.A=b;_J(a);b.length==0&&(a.A=null)}
function fK(a,b){a.B=b;_J(a);b.length==0&&(a.B=null)}
function M$(a,b,c,d){a.b=b;L$(a,c,d);SN((LF(),a.Zc))}
function Q$(a,b,c,d){var e;e=new WT(c,d);xU(a.V,b,e)}
function s2(a,b){var c,d;d=u2(a,b);c=x2(d);return c}
function Djb(a,b){return br(b)?Hjb(a,b):!!opb(a.a,b)}
function Vi(a){return (Fh(),Eh).Qd(a,Xub,false,false)}
function $i(a){return (Fh(),a).createElement('style')}
function cj(a){return (Fh(),a).createElement('table')}
function _i(a){return (Fh(),a).createElement('tbody')}
function $J(a){return !Wfb(lvb,Jj((LF(),a.Zc).style))}
function JG(a,b){return Bp((!CG&&(CG=new $G),CG),a,b)}
function V3(a){R3(a);K3((!F3&&(F3=new P3),F3),a.a.c)}
function emb(a){vtb(a.b!=-1);Glb(a.c,a.a=a.b);a.b=-1}
function epb(a){this.a=new $ob(a.size());Sib(this,a)}
function ig(a){$wnd.setTimeout(function(){throw a},0)}
function mI(a){if(a.bb){return a.bb.wd()}return false}
function uQ(a,b){if(a.J==b){return}a.J=b;Cmb();Nmb()}
function Aqb(a,b){zqb(b,a.length);return new Nqb(a,b)}
function UT(a,b){(LF(),a.Zc).style[Bub]=b+(hm(),hwb)}
function RT(a,b){(LF(),a.Zc).style[Aub]=b+(hm(),'pt')}
function hgb(a,b){xtb(b,a.length+1);return a.substr(b)}
function apb(a,b){var c;c=Ijb(a.a,b,a);return c==null}
function Deb(a,b){var c;c=new Beb;c.g=a;c.d=b;return c}
function Eeb(a,b,c){var d;d=Deb(a,b);Reb(c,d);return d}
function qcb(a){var b;b=[];qqb(a,new rcb(b));return b}
function rtb(a){if(a==null){throw WD(new Jfb)}return a}
function Ghb(a){return a.e==0?a:new Ohb(-a.e,a.d,a.a)}
function Pi(a){return (Fh(),a).createElement('canvas')}
function Si(a){return (Fh(),a).createElement('iframe')}
function Yi(a){return (Fh(),a).createElement('select')}
function q_(a){a.C?Y$(a,false):(a.C=true);s_(a,a.a-1)}
function uP(a){a.f=false;a.e=null;a.q=-1;a.s=-1;ZO(a)}
function bF(a,b){a.Ee(b);a.Ee(String.fromCharCode(10))}
function hJ(a,b){gJ(a,b);return iJ(Fj((LF(),a.Zc))[b])}
function $U(a,b){var c;c=CV(a);if(!c){return}_U(a,b,c)}
function GU(a){var b;b=AU(a);VU(a,new Jlb,a.bb,a.xb,b)}
function KX(a,b,c){var d,e;d=b+10;e=c-25;oN(a.Yb,d,e)}
function b$(a,b,c,d,e,f,g,h){g0(DQ(a.a),b,c,d,e,f,g,h)}
function o_(a,b,c,d,e,f,g,h,i){cS(a.Q,b,c,d,e,f,g,h,i)}
function Ohb(a,b,c){shb();this.e=a;this.d=b;this.a=c}
function II(a){pe(this,(LF(),a));this.a=new uI(this.Zc)}
function Xpb(){this.a=new iqb;this.c=new iqb;Wpb(this)}
function TK(a){SH.call(this);pe(this,(LF(),a));Le(this)}
function rQ(a){if(!a.xf().pb){return false}return true}
function IG(a){HG();LG();return JG(jp?jp:(jp=new An),a)}
function wG(a,b){return Bp(a.a,(!vp&&(vp=new An),vp),b)}
function d_(a,b){return b>0&&a.f.length>=b?a.f[b-1]:a.p}
function hW(a){return !!a.T&&Hjb(a.T,wwb+a.sc+xwb+a.tc)}
function Fjb(a,b){return br(b)?Gjb(a,b):qjb(opb(a.a,b))}
function Xob(a,b){return cr(a)===cr(b)||a!=null&&M(a,b)}
function sqb(a,b){return cr(a)===cr(b)||a!=null&&M(a,b)}
function C2(b,a){return Object.hasOwnProperty.call(b,a)}
function Xl(){Vl();return iq(dq(Ot,1),Etb,96,0,[Tl,Ul])}
function xm(){vm();return iq(dq(_t,1),Etb,97,0,[um,tm])}
function mgb(a){return String.fromCharCode.apply(null,a)}
function sgb(a,b){a.a+=String.fromCharCode(b);return a}
function h6(a,b){U5();var c;c=new t6;r6(c,a,b);return c}
function Heb(a,b){var c;c=Deb('',a);c.j=b;c.f=1;return c}
function I3(a){var b;b=a.a['__eager'];b.d==0&&D3(b,a.c)}
function Q3(a){this.a=new Jlb;this.c='__eager';this.b=a}
function GM(a,b,c,d){this.a=a;this.d=b;this.c=c;this.b=d}
function _M(a,b,c,d){this.d=a;this.a=b;this.c=c;this.b=d}
function JY(a,b,c,d){this.a=a;this.d=b;this.b=c;this.c=d}
function LY(a,b,c,d){this.a=a;this.d=b;this.b=c;this.c=d}
function k5(a,b,c){a.b[T4(new V4(new c5(b),'!new'))]=c}
function o7(a,b,c,d){this.a=a;this.b=b;this.c=c;this.d=d}
function Sfb(a,b){xtb(b,a.length);return a.charCodeAt(b)}
function _ab(a,b){Tab(a.p,iq(dq(MB,1),Etb,1,5,[vfb(b)]))}
function fbb(a,b){Tab(a.B,iq(dq(MB,1),Etb,1,5,[vfb(b)]))}
function jbb(a,b){Tab(a.F,iq(dq(MB,1),Etb,1,5,[vfb(b)]))}
function mbb(a,b){Tab(a.M,iq(dq(MB,1),Etb,1,5,[vfb(b)]))}
function ybb(a,b){Tab(a.R,iq(dq(MB,1),Etb,1,5,[qcb(b)]))}
function lsb(a){if(!a.b){msb(a);a.c=true}else{lsb(a.b)}}
function ZJ(a){if(!a.N){return}DK(a.M,false,false);mp(a)}
function dj(a){return (Fh(),a).createElement('textarea')}
function Ijb(a,b,c){return br(b)?Jjb(a,b,c):ppb(a.a,b,c)}
function Tdb(a,b,c){Rdb(this);this.c=a;this.b=b;this.a=c}
function DM(a,b,c){this.a=a;this.d=b;this.c=null;this.b=c}
function EM(a,b,c){this.a=a;this.d=b;this.c=null;this.b=c}
function Ofb(a,b,c){this.a=Ftb;this.d=a;this.b=b;this.c=c}
function cf(a,b){b?_e.df((LF(),a.Zc)):_e.bf((LF(),a.Zc))}
function I$(a){!Wfb(lvb,Jj((LF(),a.Zc).style))&&a.nf()}
function ah(a){var b;b=Jh((Fh(),a));!!b&&b.removeChild(a)}
function $6(){var a;a=null;a+=($cb(),'?v='+Zcb);return a}
function Ljb(a,b){return b==null?qpb(a.a,null):Ipb(a.c,b)}
function jW(a,b){return b==a.c||b==a.Pc||b==a.Rc||b==a.Ac}
function Nqb(a,b){this.c=0;this.d=b;this.b=17488;this.a=a}
function nsb(a){if(!a){this.b=null;new Jlb}else{this.b=a}}
function Bsb(a,b){msb(a);return new psb(a,new Lsb(b,a.a))}
function Csb(a,b){msb(a);return new usb(a,new Qsb(b,a.a))}
function Eb(a,b){Kb((Dc(),Cc),a,iq(dq(SB,1),Stb,2,6,[b]))}
function _Z(a,b,c,d,e,f,g,h,i){h0(DQ(a.a),b,c,d,e,f,g,h,i)}
function TE(a){var b,c;b=new KE;Zrb(a,b);c=new ME;Zrb(a,c)}
function qH(a){var b;b=(Fh(),Eh).Vd(a);b[Zvb]=a.type;pH(a)}
function b3(a){$2();var b,c;b=j3(a);c=k3(a);return a3(b,c)}
function Fg(){Fg=BE;var a,b;b=!Lg();a=new Tg;Eg=b?new Mg:a}
function Cmb(){Cmb=BE;zmb=new Gmb;Amb=new Xmb;Bmb=new dnb}
function U5(){U5=BE;S5=m2((f2(),!e2&&(e2=new q2),f2(),e2))}
function t6(){this.b=p2((f2(),!e2&&(e2=new q2),f2(),e2))}
function V(){W.call(this,(!db&&(db=eb()?new fb:new nb),db))}
function KE(){IE(this,new XE(true));JE(this,(erb(),Xqb))}
function ME(){IE(this,new XE(false));JE(this,(erb(),Xqb))}
function AG(a){return $wnd.decodeURI(a.replace('%23','#'))}
function U2(a){if(!a){return Mtb}return V2(a)+' ('+a.I+')'}
function n2(a){if(a.a.b==8){return a.a.c>=0}return a.a.b>8}
function Wpb(a){a.a.a=a.c;a.c.b=a.a;a.a.b=a.c.a=null;a.b=0}
function l6(a,b,c){this.a=a;this.c=b;this.b=c;V.call(this)}
function yT(a,b){if(!a.a.f){sX(a.b,true);y_(a.b.a)}Dj(b.a)}
function YD(a,b){return $D(zq(eE(a)?pE(a):a,eE(b)?pE(b):b))}
function kE(a,b){return $D(Fq(eE(a)?pE(a):a,eE(b)?pE(b):b))}
function tE(a,b){return $D(Nq(eE(a)?pE(a):a,eE(b)?pE(b):b))}
function cq(){aq();return iq(dq(Nu,1),Etb,111,0,[_p,$p,Zp])}
function pc(a,b){Kb((Dc(),Bc),a,iq(dq(Or,1),Etb,177,0,[b]))}
function qO(a,b){if(a.b){a.tf(0);a.f||a.rf(b)}else{a.tf(b)}}
function EN(a){if(a.s){T2(a.s);return a.r}else{return null}}
function Pqb(a){if(!a.d){a.d=new fmb(a.b);a.c=a.b.a.length}}
function bsb(a,b){if(!Srb){return}dsb(a,(erb(),arb),b,null)}
function hsb(a,b){if(!Urb){return}dsb(a,(erb(),crb),b,null)}
function isb(a,b){if(!Vrb){return}dsb(a,(erb(),drb),b,null)}
function Hjb(a,b){return b==null?!!opb(a.a,null):Fpb(a.c,b)}
function igb(a,b,c){wtb(b,c,a.length);return a.substr(b,c-b)}
function zf(a,b){var c;c=zeb(a.sg);return b==null?c:c+': '+b}
function C7(a,b){var c;c=a.Sf();Object.assign(c,b);return c}
function WH(a,b){var c;c=RH(a,b);c&&XH((LF(),b.Zc));return c}
function _4(a,b,c){this.b=b;this.c=Fmb(new smb(c));this.a=a}
function BM(b,c,d){try{b.setSelectionRange(c,c+d)}catch(a){}}
function sP(b,c,d){try{b.setSelectionRange(c,c+d)}catch(a){}}
function VK(){SK();try{cI(RK,PK)}finally{Mjb(RK.a);Mjb(QK)}}
function vG(){sG();var a;a=uG();if(!Wfb(a,rG)){rG=a;yp(qG)}}
function AO(a){a.a.C&&Tab(a.a.a.W.n,iq(dq(MB,1),Etb,1,5,[]))}
function jcb(a,b,c){Tab(a.U,iq(dq(MB,1),Etb,1,5,[vfb(b),c]))}
function Edb(){Cdb();return iq(dq(eB,1),Etb,143,0,[Adb,Bdb])}
function _V(a,b,c){return b>=a.bb&&b<=a.xb&&c>=a.db&&c<=a.zb}
function wX(a,b){WX(a,fV(a),b);lY(a,b);a.tb=zW(b,a.tb);XX(a)}
function hh(a){return (Fh(),Eh).Zd(a)+((a.offsetWidth||0)|0)}
function Fmb(a){Cmb();return Yq(a,180)?new Gob(a):new Anb(a)}
function Yob(a){var b;if(a==null){return 0}b=Q(a);return b|0}
function Xdb(a,b){if(a==null){return b==null}return Wfb(a,b)}
function Leb(a){if(a.Zf()){return null}var b=a.j;return zE[b]}
function CE(a){function b(){}
;b.prototype=a||{};return new b}
function Ufb(a,b){return Tfb(a.toLowerCase(),b.toLowerCase())}
function Je(a,b,c){return Bp(!a.Xc?(a.Xc=new Ep(a)):a.Xc,c,b)}
function Qp(a,b,c,d){a.b>0?Hp(a,new GM(a,b,c,d)):Lp(a,b,c,d)}
function z7(a,b,c,d){this.b=a;this.c=b;y7(this,c);x7(this,d)}
function $g(a){while(a.lastChild){a.removeChild(a.lastChild)}}
function dr(a){return Math.max(Math.min(a,Ktb),-2147483648)|0}
function fh(a){return (Fh(),Eh).$d(a)+((a.offsetHeight||0)|0)}
function sI(a){var b;b=a.c?lh(a.a):a.a;return (Fh(),Eh).ce(b)}
function pob(a,b){var c;for(c=0;c<b;++c){a[c]=new zob(a[c])}}
function gp(a,b){var c;if(dp){c=new ep(b);!!a.Xc&&Cp(a.Xc,c)}}
function zM(b){try{return b.selectionStart}catch(a){return 0}}
function sl(){ql();return iq(dq(Bt,1),Etb,63,0,[pl,nl,ol,ml])}
function Dl(){Bl();return iq(dq(Gt,1),Etb,64,0,[Al,zl,xl,yl])}
function Ol(){Ml();return iq(dq(Lt,1),Etb,65,0,[Il,Jl,Kl,Ll])}
function yL(){wL();return iq(dq(gw,1),Etb,66,0,[sL,tL,uL,vL])}
function hU(a,b){if(!a)return;(Fh(),Eh).ge(a,b);a.title=b||''}
function KU(a){HT(a.Ec);if(a.pb){HT(a.pb);ah(a.pb);a.pb=null}}
function Mf(a,b){sf(this);this.e=b;this.f=a;uf(this);this.Jd()}
function FN(){jK.call(this);this.J=false;gN(this);qN(this,cN)}
function LX(a,b,c,d){a.$b=false;W2((ng(),mg),new LY(a,b,c,d))}
function NX(a,b,c,d){a.$b=false;W2((ng(),mg),new JY(a,b,c,d))}
function QH(a,b,c){Oe(b);HL(a.o,b);LF();Vg(c,VF(b.Zc));Qe(b,a)}
function AW(a,b){if(b){Mjb(b);!!a&&jjb(b,a)}else{b=a}return b}
function ttb(a,b){if(a<0||a>b){throw WD(new ieb(Xtb+a+Ytb+b))}}
function nQ(a,b){if(!a.K){return Cmb(),Cmb(),zmb}return a.K[b]}
function j0(a,b){if(!a.e){a.e=b}else{Mjb(a.e);!!b&&jjb(a.e,b)}}
function r0(a,b){if(!a.j){a.j=b}else{Mjb(a.j);!!b&&jjb(a.j,b)}}
function T0(a,b){if(!a.N){a.N=b}else{Mjb(a.N);!!b&&jjb(a.N,b)}}
function kjb(a,b){return b===a?'(this Map)':b==null?Mtb:EE(b)}
function cgb(a){return (new RegExp('^([^A-z0-9:!])$')).test(a)}
function lP(a){a.t.Z?qb(new TP(a),100):W2((ng(),mg),new VP(a))}
function Zhb(a){shb();return ZD(a,0)>=0?Uhb(a):Ghb(Uhb(jE(a)))}
function VF(a){LF();return a.__gwt_resolve?a.__gwt_resolve():a}
function t5(a){return (!F3&&(F3=new P3),F3).c.d[(new c5(a)).b]}
function Gjb(a,b){return b==null?qjb(opb(a.a,null)):Gpb(a.c,b)}
function Zjb(a,b){if(Yq(b,102)){return hjb(a.a,b)}return false}
function zqb(a,b){if(0>a||a>b){throw WD(new jeb(Vtb+a+Wtb+b))}}
function qtb(a,b){if(a<0||a>=b){throw WD(new ieb(Xtb+a+Ytb+b))}}
function xtb(a,b){if(a<0||a>=b){throw WD(new Bgb(Xtb+a+Ytb+b))}}
function Jeb(a,b){var c=a.a=a.a||[];return c[b]||(c[b]=a.Uf(b))}
function cH(a){var b=a.__listener;return !_q(b)&&Yq(b,9)?b:null}
function SN(a){var b=a&&a.showPopover;typeof b===Itb&&b.call(a)}
function uI(a){this.a=a;this.c=false;this.b=Xp(a);this.d=this.b}
function XH(a){a.style[_vb]='';a.style[awb]='';a.style[Sub]=''}
function Bl(){Bl=BE;Al=new El;zl=new Fl;xl=new Gl;yl=new Hl}
function ql(){ql=BE;pl=new tl;nl=new ul;ol=new vl;ml=new wl}
function Ml(){Ml=BE;Il=new Pl;Jl=new Ql;Kl=new Rl;Ll=new Sl}
function wL(){wL=BE;sL=new zL;tL=new AL;uL=new BL;vL=new CL}
function DF(){DF=BE;new RegExp('%5B','g');new RegExp('%5D','g')}
function ak(){$j();return iq(dq(ct,1),Etb,56,0,[Yj,Wj,Vj,Xj,Zj])}
function Jm(){Hm();return iq(dq(fu,1),Etb,57,0,[Cm,Dm,Em,Fm,Gm])}
function Jjb(a,b,c){return b==null?ppb(a.a,null,c):Hpb(a.c,b,c)}
function CR(a,b,c){a.n=c;a.d=b;nN(a.e,b);JN(a.e,b.Lb);mR(a.g,b)}
function uX(a,b,c){a.Rb=b;a.Lb=c;JN(a.qb,c);JN(a.Yb,c);JN(a.q,c)}
function d6(a,b){a.a=b;if(S5){b+=a.n;e6(a,-b)}else{e6(a,-a.a)}}
function H2(a,b){if(a.b!=b){a.b=b;return true}else{return false}}
function I2(a,b){if(a.e!=b){a.e=b;return true}else{return false}}
function Ch(a){if(bh(a)){return !!a&&a.nodeType==1}return false}
function KG(a){HG();LG();MG();return JG((!pp&&(pp=new An),pp),a)}
function Ncb(){Lcb();return iq(dq(UA,1),Etb,121,0,[Icb,Kcb,Jcb])}
function idb(){gdb();return iq(dq(YA,1),Etb,117,0,[edb,fdb,ddb])}
function rdb(){pdb();return iq(dq(aB,1),Etb,113,0,[odb,ndb,mdb])}
function AV(a,b){return m_(a.a,b)?0:b>=a.W.length?oV(a):a.W[b-1]}
function nf(a,b){return !!a&&!!a.equals?a.equals(b):cr(a)===cr(b)}
function GH(a,b){for(var c in a){a.hasOwnProperty(c)&&b(c,a[c])}}
function b6(a,b){var c;if(!T5&&Aj(b.a).length==1){c=b.a;Y5(a,c)}}
function ztb(a,b){var c,d;d=YD(a,uAb);c=lE(b,32);return kE(c,d)}
function Z$(a,b){var c,d;c=a>0?c_(a):'';d=b>0?''+b:'';return c+d}
function qE(a){var b;if(eE(a)){b=a;return b==-0.?0:b}return Kq(a)}
function iW(a){var b;b=iV(a,a.sc,a.tc);return !!b&&b.isPercentage}
function QU(a){var b;b=hV(a,a.sc,a.tc);a.nb=null;!!b&&sh(b.d,zxb)}
function wP(a){var b;t_(a.t,egb((b=iL(a.a),b==null?'':b),' ',''))}
function o$(a,b,c){if(pQ(a.a).u){a.a.i=b;a.a.g=null;_ab(a.a.k,c)}}
function p$(a,b,c){if(pQ(a.a).u){a.a.i=b;a.a.g=null;mbb(a.a.k,c)}}
function L0(a,b){if(!a.G){a.G=b}else{Mjb(a.G.a);!!b&&Sib(a.G,b)}}
function M0(a,b){if(!a.H){a.H=b}else{Mjb(a.H.a);!!b&&Sib(a.H,b)}}
function gK(a){if(a.N){return}else a.Vc&&Oe(a);DK(a.M,true,false)}
function X$(a){if(a.J){while(0<a.J.a.length){OW(a.V,Glb(a.J,0))}}}
function Rf(a){Pf();Nf.call(this,a);this.a='';this.b=a;this.a=''}
function J_(a,b){a.s&&(a.c=false,W2((ng(),mg),new J1(a,b,false)))}
function OZ(a,b,c,d){a.f=b;a.j=d;D0((!a.F&&(a.F=new q1),a.F),c,d)}
function Uab(a,b,c){Tab(a.e,iq(dq(MB,1),Etb,1,5,[vfb(b),vfb(c)]))}
function $ab(a,b,c){Tab(a.o,iq(dq(MB,1),Etb,1,5,[vfb(b),vfb(c)]))}
function bbb(a,b,c){Tab(a.r,iq(dq(MB,1),Etb,1,5,[vfb(b),vfb(c)]))}
function cbb(a,b,c){Tab(a.t,iq(dq(MB,1),Etb,1,5,[vfb(b),vfb(c)]))}
function ebb(a,b,c){Tab(a.A,iq(dq(MB,1),Etb,1,5,[vfb(b),vfb(c)]))}
function hbb(a,b,c){Tab(a.I,iq(dq(MB,1),Etb,1,5,[vfb(b),vfb(c)]))}
function ibb(a,b,c){Tab(a.J,iq(dq(MB,1),Etb,1,5,[vfb(b),vfb(c)]))}
function lbb(a,b,c){Tab(a.L,iq(dq(MB,1),Etb,1,5,[vfb(b),vfb(c)]))}
function nbb(a,b,c){Tab(a.N,iq(dq(MB,1),Etb,1,5,[vfb(b),vfb(c)]))}
function pbb(a,b,c){Tab(a.P,iq(dq(MB,1),Etb,1,5,[vfb(b),vfb(c)]))}
function icb(a,b,c){Tab(a.T,iq(dq(MB,1),Etb,1,5,[vfb(b),vfb(c)]))}
function Nhb(a,b){Ohb.call(this,1,2,iq(dq(ir,1),Jxb,20,15,[a,b]))}
function Lsb(a,b){Eqb.call(this,b.ng(),b.mg()&-6);rtb(a);this.a=b}
function Qsb(a,b){Gqb.call(this,b.ng(),b.mg()&-6);rtb(a);this.a=b}
function Qrb(a,b){this.a=a;this.d=b;this.c=(Dgb(),bE(Date.now()))}
function dmb(a){ptb(a.a<a.c.a.length);a.b=a.a++;return a.c.a[a.b]}
function Feb(a,b,c,d){var e;e=Deb(a,b);Reb(c,e);e.f=d?8:0;return e}
function egb(a,b,c){c=ogb(c);return a.replace(new RegExp(b,'g'),c)}
function fU(a,b){a.j=b;a.a.style[Zub]=(b?(zk(),ok):(zk(),kk)).le()}
function dT(a,b){a.k.style[Aub]=b+(hm(),hwb);a.u.style[Aub]=b+hwb}
function W2(a,b){++a.a;a.b=xg(a.b,[b,false]);sg(a);ug(a,new Y2(a))}
function qX(a,b){b?sh(a.Hc,'nogrid'):dh(a.Hc,'nogrid');a.Db&&xY(a)}
function QN(a){!!a&&(a.setAttribute('popover','manual'),undefined)}
function Kh(a,b){var c;return ph((c=a.be(b),c?c:b.documentElement))}
function rh(a,b){var c;b=Dh(b);c=Bh(a.className||'',b);return c!=-1}
function SU(a,b,c,d){var e;e=wwb+c+xwb+d;Jjb(a.r,e,b);i1(a.a,b,c,d)}
function zW(a,b){if(b){b.clear();!!a&&b.addAll(a)}else{b=a}return b}
function Bf(b){if(!('stack' in b)){try{throw b}catch(a){}}return b}
function bh(b){try{return !!b&&!!b.nodeType}catch(a){return false}}
function NK(){throw 'A PotentialElement cannot be resolved twice.'}
function Wrb(){Wrb=BE;Trb=false;Rrb=true;Srb=true;Vrb=true;Urb=true}
function Akb(a){vtb(a.c!=-1);a.d.removeAtIndex(a.c);a.b=a.c;a.c=-1}
function Lkb(a,b,c){utb(b,c,a.size());this.c=a;this.a=b;this.b=c-b}
function EZ(a,b,c,d,e){this.g=a;this.c=b;this.d=d;this.e=e;this.a=c}
function zF(a){if(a==null){throw WD(new Lfb('uri is null'))}this.a=a}
function JM(a){if(Yq(a,170)){return false}return !!f_(a.n.a,a.c,a.k)}
function GV(a){return iq(dq(ir,1),Jxb,20,15,[a.db,a.bb,a.zb,a.xb])}
function qj(a){return Wfb(a.compatMode,Mub)?a.documentElement:a.body}
function vhb(a){while(a.d>0&&a.a[--a.d]==0);a.a[a.d++]==0&&(a.e=0)}
function ab(a,b){U(a.a,b)?(a.a.q=a.a.s.jd(a.a.j,a.a.n)):(a.a.q=null)}
function lX(a,b,c){sY(a,fV(a),b);kY(a,b);a.r=AW(b,a.r);a.i=AW(c,a.i)}
function LL(a,b){var c;c=IL(a,b);if(c==-1){throw WD(new rqb)}KL(a,c)}
function kV(a,b,c){var d;d=Gjb(a.e,wwb+b+xwb+c);return !d?'':d.value}
function pW(a,b){!!a.gb&&XN(a.gb);(LF(),b.Zc).style[_ub]='1';a.gb=b}
function Fkb(a,b){this.a=a;Bkb.call(this,a);ttb(b,a.size());this.b=b}
function kR(a,b){(LF(),a.Zc).style[Zub]=(b?(zk(),ok):(zk(),gk)).le()}
function eV(a,b){b?W2((ng(),mg),new TY(a)):(a.Ac.focus(),undefined)}
function fg(a){a&&pg((ng(),mg));--Xf;if(a){if(_f!=-1){kg(_f);_f=-1}}}
function tP(a){a.v=true;VO(a,a.w);zP(a,true);W2((ng(),mg),new PP(a))}
function UI(){UI=BE;new VI('bottom');new VI('middle');TI=new VI(awb)}
function Hm(){Hm=BE;Cm=new Km;Dm=new Lm;Em=new Mm;Fm=new Nm;Gm=new Om}
function $j(){$j=BE;Yj=new bk;Wj=new ck;Vj=new dk;Xj=new ek;Zj=new fk}
function Cdb(){Cdb=BE;Adb=new Ddb('ALERT',0);Bdb=new Ddb('STATUS',1)}
function Mdb(){Kdb();return iq(dq(gB,1),Etb,100,0,[Idb,Jdb,Hdb,Gdb])}
function Yab(a,b,c,d){Tab(a.j,iq(dq(MB,1),Etb,1,5,[vfb(b),vfb(c),d]))}
function lcb(a,b,c,d){Tab(a.W,iq(dq(MB,1),Etb,1,5,[b,vfb(c),vfb(d)]))}
function n$(a,b,c,d){if(pQ(a.a).u){a.a.g=b;a.a.i=null;cbb(a.a.k,d,c)}}
function pb(a){if(!a.j){return}++a.g;a.i?tb(a.j.a):ub(a.j.a);a.j=null}
function nF(a){if(a==null){throw WD(new Lfb('html is null'))}this.a=a}
function c7(){XQ.call(this);this.a=null;new l7(this,this);this.b=null}
function l7(a,b){this.a=a;this.f=new C5(this);this.c=b;this.b='click'}
function Gsb(a,b){Iqb.call(this,b.ng(),b.mg()&-16449);rtb(a);this.b=b}
function Mhb(a,b){shb();Ohb.call(this,a,1,iq(dq(ir,1),Jxb,20,15,[b]))}
function qmb(a,b){return new Esb(null,(zqb(b,a.length),new Nqb(a,b)))}
function KT(a,b){return a.sheet.insertRule(b,a.sheet.cssRules.length)}
function O2(a,b){return a-(Fh(),Eh).Zd(b)+Eh.de(b)+nj(b.ownerDocument)}
function MK(a){return function(){this.__gwt_resolve=NK;return a.pd()}}
function x2(a){var b=parseInt(a,10);if(isNaN(b))return 0;else return b}
function EV(a){var b;b=Gjb(a.e,wwb+a.sc+xwb+a.tc);return !b?'':b.value}
function ksb(a){Wrb();if(Trb){return new jsb(null)}return Mrb(Orb(),a)}
function Fhb(a,b){if(b.e==0||a.e==0){return rhb}return Eib(),Fib(a,b)}
function Vfb(a,b){var c;c=b.length;return Wfb(a.substr(a.length-c,c),b)}
function KI(a){var b;II.call(this,(b=a,Xfb('span',(Fh(),a).tagName),b))}
function rL(a){pL.call(this,a);(LF(),this.Zc).className='gwt-TextBox'}
function gJ(a,b){if(b<0||b>=Fj((LF(),a.Zc)).length){throw WD(new heb)}}
function sX(a,b){b?Be((LF(),a.Zc),Wxb,false):Be((LF(),a.Zc),Wxb,true)}
function p5(a,b,c){var d;d=!c?null:(yeb(c),c.k);x5(a.c,(yeb(b),b.k),d)}
function Upb(a,b,c,d){var e;e=new iqb;e.c=b;e.b=c;e.a=d;d.b=c.a=e;++a.b}
function PM(a,b,c,d,e){if(!Wfb(a.b,c)){a.b=c;a.kf()}a.f=e;a.o=d;OM(a,b)}
function fgb(a,b,c){var d;c=ogb(c);d=new RegExp(b);return a.replace(d,c)}
function zhb(a,b){var c;for(c=a.d-1;c>=0&&a.a[c]===b[c];c--);return c<0}
function Jh(a){var b=a.parentNode;(!b||b.nodeType!=1)&&(b=null);return b}
function i2(){var a=$wnd.document.documentMode;if(!a)return -1;return a}
function uf(a){if(a.k){a.backingJsObject!==Otb&&a.Jd();a.i=null}return a}
function iG(a){a.e=false;a.f=null;a.a=false;a.b=false;a.c=true;a.d=null}
function IM(a){!!a.a&&Vg(a.d,a.a);!!a.e&&Vg(a.d,a.e);!!a.j&&Vg(a.d,a.j)}
function w_(a,b){a.A&&!a.t.f&&(a.c=false,W2((ng(),mg),new J1(a,b,true)))}
function gj(a){!a.gwt_uid&&(a.gwt_uid=1);return 'gwt-uid-'+a.gwt_uid++}
function dg(b){ag();return function(){return eg(b,this,arguments);var a}}
function zdb(){xdb();return iq(dq(cB,1),Etb,77,0,[udb,wdb,tdb,sdb,vdb])}
function Asb(a,b){return (msb(a),Dsb(new Esb(a,new Gsb(b,a.a)))).og(ysb)}
function me(a,b){se(a,ye((VJ(),UJ).gf((LF(),LF(),lh(a.Zc))))+'-'+b,false)}
function LI(){KI.call(this,Qi($doc));(LF(),this.Zc).className='gwt-HTML'}
function LN(){VJ();iK.call(this);gN(this);qN(this,cN);QN((LF(),this.Zc))}
function MN(){VJ();jK.call(this);gN(this);qN(this,cN);QN((LF(),this.Zc))}
function Lpb(a){this.d=a;this.b=this.d.a.entries();this.a=this.b.next()}
function jsb(a){Wrb();if(Trb){return}this.c=a;this.e=true;this.a=new Jlb}
function npb(a,b){var c;c=a.a.get(b);return c==null?fq(MB,Etb,1,0,5,1):c}
function BU(a){var b,c;c=0;for(b=a.Uc+1;b<a.db;b++){c+=a.W[b-1]}return c}
function AU(a){var b,c;c=0;for(b=a.ob+1;b<a.bb;b++){c+=d_(a.a,b)}return c}
function lq(a){var b,c,d;b=a&yvb;c=a>>22&yvb;d=a<0?zvb:0;return nq(b,c,d)}
function kW(a){var b;b=new Jlb;Blb(b,a.sb);Clb(b,nV(a));return new fmb(b)}
function QE(){var a;SE(OE);if(!qf){a=ksb((yeb(Su),Su.k));rf(new RE(a))}}
function zG(){var a;a=Atb(vG);$wnd.addEventListener('hashchange',a,false)}
function CS(a){a.N&&BS(a);G_(a.Q.a,a.Q.sc,a.U,a.Q.tc,a.V);a.o=false;yS(a)}
function f0(a){DX(a.V,1,1);U_(a,a.g,a.O);G_(a,1,a.g,1,a.O);m1(a,1,1,null)}
function rN(a){dN=a;jN(a);a.G?T(new A7(a),200,Date.now()):kN(a,1);dN=null}
function f2(){f2=BE;var a;a=h2((!e2&&(e2=new q2),e2));SK();se(WK(),a,true)}
function zib(a,b,c,d){var e;e=fq(ir,Jxb,20,b,15,1);Aib(e,a,b,c,d);return e}
function Glb(a,b){var c;c=(qtb(b,a.a.length),a.a[b]);_sb(a.a,b,1);return c}
function Uqb(a,b){!a.a?(a.a=new Agb(a.d)):wgb(a.a,a.b);ugb(a.a,b);return a}
function Flb(a,b,c){for(;c>=0;--c){if(sqb(b,a.a[c])){return c}}return -1}
function Tfb(a,b){var c,d;c=(rtb(a),a);d=(rtb(b),b);return c==d?0:c<d?-1:1}
function O_(a){var b,c;b=ph(a.V.Ac);c=(a.V.Ac.scrollTop||0)|0;icb(a.W,b,c)}
function B_(a,b,c,d){if(a.R){(c!=a.V.sc||d!=a.V.tc)&&_$(a);n$(a.R,b,c,d)}}
function kcb(a,b,c,d){Tab(a.V,iq(dq(MB,1),Etb,1,5,[vfb(b),vfb(c),vfb(d)]))}
function Jhb(a,b){if(b==0||a.e==0){return a}return b>0?aib(a,b):dib(a,-b)}
function Khb(a,b){if(b==0||a.e==0){return a}return b>0?dib(a,b):aib(a,-b)}
function wtb(a,b,c){if(a<0||b>c||b<a){throw WD(new Bgb(Ztb+a+$tb+b+Wtb+c))}}
function Vqb(a,b){this.b=', ';this.d=a;this.e=b;this.c=this.d+(''+this.e)}
function q5(){this.a={};this.f={};this.d={};this.e={};this.b={};this.c={}}
function YI(a){XI(this,new eJ(this,a));(LF(),this.Zc).className='gwt-Image'}
function WN(a){sI(a.a).length==0?Ee((LF(),a.Zc),false):Ee((LF(),a.Zc),true)}
function Re(a,b){a.Wc==-1?YF((LF(),a.Zc),b|(a.Zc.__eventBits||0)):(a.Wc|=b)}
function IL(a,b){var c;for(c=0;c<a.c;++c){if(a.a[c]==b){return c}}return -1}
function jV(a,b,c){var d;d=Gjb(a.e,wwb+b+xwb+c);return !d?'':d.formulaValue}
function $E(a,b,c){var d;rtb(b);beb(b.length,c);for(d=0;d<c;d++){ZE(a,b[d])}}
function pH(a){var b;b=tH(a);if(!b){return}NF(a,b.nodeType!=1?null:b,cH(b))}
function _J(a){var b;b=a.P;if(b){a.A!=null&&b.qd(a.A);a.B!=null&&b.sd(a.B)}}
function pL(a){var b;lL.call(this,(b=a,!GF&&(GF=new HF),!EF&&(EF=new FF),b))}
function Klb(a){zlb(this);mtb(a>=0,'Initial capacity must not be negative')}
function Web(a){return Wfb(Htb,typeof(a))||ar(a,$wnd.java.lang.Number$impl)}
function jm(){hm();return iq(dq(Yt,1),Etb,34,0,[gm,em,_l,am,fm,dm,bm,$l,cm])}
function SF(b){LF();try{return !!b&&!!b.__gwt_resolve}catch(a){return false}}
function AM(b){try{return b.selectionEnd-b.selectionStart}catch(a){return 0}}
function _2(){$2();$wnd.getSelection&&$wnd.getSelection().removeAllRanges()}
function MV(a){WV(a,a.sc,a.tc)||gX(a,a.sc,a.tc);W2((ng(),mg),new PY(a,true))}
function H_(a,b){Yab(a.W,a.V.tc,a.V.sc,b);U$(a,b,true);dV(a.V);XR(a.Q,false)}
function Jqb(a,b){rtb(b);if(a.c<a.d){Mqb(a,b,a.c++);return true}return false}
function vV(a,b,c){var d;d=Gjb(a.e,wwb+b+xwb+c);return !d?'':d.originalValue}
function uib(a,b,c,d){var e;e=fq(ir,Jxb,20,b+1,15,1);vib(e,a,b,c,d);return e}
function fq(a,b,c,d,e,f){var g;g=gq(e,d);e!=10&&iq(dq(a,f),b,c,e,g);return g}
function CU(a,b,c){var d,e,f;f=0;for(e=b;e<=c;e++){d=d_(a.a,e);f+=d}return f}
function MF(a,b){LF();var c;c=cH(b);if(!c){return false}NF(a,b,c);return true}
function jq(a,b){eq(b)!=10&&iq(O(b),b.tg,b.__elementTypeId$,eq(b),a);return a}
function ej(a){var b;return b=(Fh(),a).createElement('INPUT'),b.type='text',b}
function ZG(a){var b;YG();b=WG.get(a);return !b?null:b.getAtIndex(b.size()-1)}
function jE(a){var b;if(eE(a)){b=0-a;if(!isNaN(b)){return b}}return $D(Dq(a))}
function qQ(a,b){var c;c=(!a.M&&(a.M=lQ(a)),a.M).qb;return !!c&&c.contains(b)}
function DS(a){var b;b=lS(a);a.v=(Fh(),Eh).Zd(b);a.w=Eh.$d(b);a.O=a.e;a.P=a.K}
function LW(a){if(a.R&&a.Gc){a.R=false;MW(a,wwb+a.sc+xwb+a.tc,a.S);a.S=null}}
function bL(a){if(!a.a||!a.c.P){throw WD(new rqb)}a.a=false;return a.b=a.c.P}
function kI(a){if(!a.bb){throw WD(new jfb('initWidget() is not called yet'))}}
function f6(a,b,c,d){if(b>0){a.r=true;a.i=new l6(a,c,d);T(a.i,b,Date.now())}}
function TT(a,b,c){(LF(),a.Zc).style[pxb]=b+(hm(),hwb);a.Zc.style[qxb]=c+'pt'}
function K0(a,b){a.F=b;a.F?Be((LF(),a.Zc),syb,true):Be((LF(),a.Zc),syb,false)}
function s8(a){var b;b=egb((yeb(cy),cy.k),Rtb,'.');return nQ(a.e,b).Qe()._e()}
function Chb(a){var b;if(a.e==0){return -1}b=Bhb(a);return (b<<5)+tfb(a.a[b])}
function HJ(a){var b;this.b=new Jlb;this.f=new Jlb;uJ(this,(b=a,PJ(),UL(),b))}
function tpb(a){this.e=a;this.b=this.e.a.entries();this.a=fq(MB,Etb,1,0,5,1)}
function nmb(a,b,c,d){var e;d=(Iob(),!d?Hob:d);e=a.slice(b,c);omb(e,a,b,c,-b)}
function Xrb(a,b,c,d){var e;e=new Qrb(b,c);e.e=d;Prb(e,Trb?null:a.c);Yrb(a,e)}
function dbb(a,b,c){Tab(a.w,iq(dq(MB,1),Etb,1,5,[(keb(),b?true:false),vfb(c)]))}
function VT(a,b){ST(a,b.col,b.row);RT(a,b.height);UT(a,b.width);TT(a,b.dx,b.dy)}
function zP(a,b){if(b){W2((ng(),mg),new FP(a))}else if(a.f){a.q=gL(a.e);UO(a)}}
function K_(a){a.s=true;a.c=true;a.A?(a.A=false):hW(a.V)?(a.b=''):(a.b=EV(a.V))}
function OL(a){if(a.b>=a.c.c){throw WD(new rqb)}a.a=a.c.a[a.b];++a.b;return a.a}
function Ppb(a){if(a.a.d!=a.c){return Gpb(a.a,a.b.value[0])}return a.b.value[1]}
function g2(){try{document.createEvent(rvb);return true}catch(a){return false}}
function eb(){return !!$wnd.requestAnimationFrame&&!!$wnd.cancelAnimationFrame}
function eq(a){return a.__elementTypeCategory$==null?10:a.__elementTypeCategory$}
function _q(a){return a!=null&&(typeof a===Btb||typeof a===Itb)&&!(a.ug===FE)}
function Lh(a,b){var c;return ((c=a.be(b),c?c:b.documentElement).scrollTop||0)|0}
function Ih(a){var b=a.firstChild;while(b&&b.nodeType!=1)b=b.nextSibling;return b}
function osb(a){var b;lsb(a);b=fq(gr,Etb,20,0,15,1);yqb(a.a,new rsb(b));return b}
function tsb(a){var b;lsb(a);b=fq(ir,Jxb,20,0,15,1);yqb(a.a,new wsb(b));return b}
function tH(a){var b;b=(Fh(),Eh).Vd(a);while(!!b&&!cH(b)){b=b.parentNode}return b}
function NG(){HG();var a;if(BG){a=new RG;!!CG&&Cp(CG,a);return null}return null}
function Elb(a,b,c){for(;c<a.a.length;++c){if(sqb(b,a.a[c])){return c}}return -1}
function L_(a,b,c){Yab(a.W,a.V.tc,a.V.sc,b);U$(a,b,c);if(c){dV(a.V);ZR(a.Q,false)}}
function j1(a,b,c,d){if(a.V.sc==c&&a.V.tc==d){m1(a,c,d,null);b!=null&&rP(a.t,b)}}
function SV(a,b){var c;if(a.Gc){return false}c=a.a.o;return !!c&&Hjb(pQ(c.a).c,b)}
function Kq(a){if(Aq(a,(Sq(),Rq))<0){return -wq(Dq(a))}return a.l+a.m*Bvb+a.h*Cvb}
function K3(a,b){var c,d;d=E3(a.a[b]);for(c=new fmb(d);c.a<c.c.a.length;){dmb(c)}}
function t8(a,b,c){var d;d=egb((yeb(cy),cy.k),Rtb,'.');$Z(nQ(a.e,d).Qe()._e(),b,c)}
function jgb(a,b){return b==(lqb(),lqb(),kqb)?a.toLocaleLowerCase():a.toLowerCase()}
function kgb(a,b){return b==(lqb(),lqb(),kqb)?a.toLocaleUpperCase():a.toUpperCase()}
function P2(a,b){return a-(Fh(),Eh).$d(b)+((b.scrollTop||0)|0)+oj(b.ownerDocument)}
function btb(){btb=BE;new gtb;new dtb('ISO-LATIN-1');new dtb('ISO-8859-1')}
function aq(){aq=BE;_p=new bq('RTL',0);$p=new bq('LTR',1);Zp=new bq('DEFAULT',2)}
function Sq(){Sq=BE;Oq=nq(yvb,yvb,524287);Pq=nq(0,0,Avb);Qq=lq(1);lq(2);Rq=lq(0)}
function Wab(a,b,c,d,e){Tab(a.g,iq(dq(MB,1),Etb,1,5,[vfb(b),vfb(c),vfb(d),vfb(e)]))}
function Zab(a,b,c,d,e){Tab(a.k,iq(dq(MB,1),Etb,1,5,[vfb(b),vfb(c),vfb(d),vfb(e)]))}
function kbb(a,b,c,d,e){Tab(a.G,iq(dq(MB,1),Etb,1,5,[vfb(b),vfb(c),vfb(d),vfb(e)]))}
function qbb(a,b,c,d,e){Tab(a.Q,iq(dq(MB,1),Etb,1,5,[vfb(b),vfb(c),vfb(d),vfb(e)]))}
function tI(a,b,c){a.c=false;c?wh(a.a,b):xh(a.a,b);if(a.d!=a.b){a.d=a.b;Yp(a.a,a.b)}}
function yZ(a,b,c){var d;c.a?a.appendChild(b):(d=Jh((Fh(),b)),!!d&&d.removeChild(b))}
function pg(a){var b,c;if(a.d){c=null;do{b=a.d;a.d=null;c=yg(b,c)}while(a.d);a.d=c}}
function og(a){var b,c;if(a.c){c=null;do{b=a.c;a.c=null;c=yg(b,c)}while(a.c);a.c=c}}
function fkb(a){var b;otb(a.f.b,a.d);ptb(a.b);a.c=a.a;b=a.a._e();a.b=ekb(a);return b}
function EL(a,b){var c,d;d=QF((LF(),b.Zc));c=RH(a,b);c&&_g(a.c,Jh((Fh(),d)));return c}
function dK(a,b){a.mf(false);a.nf();b.Ze(nh((LF(),a.Zc),yub),nh(a.Zc,gwb));a.mf(true)}
function GQ(a,b){l3(ie(a.Cf()),true);!!a.s&&pb(a.s);if(a.t){!!b.a&&Cj(b.a);a.t=false}}
function wJ(a,b,c){if(!!b&&!b.b){return}CJ(a,b);c&&a.e&&a.Ve();!!b&&a.c&&sJ(a,b,false)}
function WV(a,b,c){return (b<=a.ob||b>=rV(a)&&b<=yV(a))&&(c<=a.Uc||c<=HV(a)&&c>=gV(a))}
function e_(a,b){return !!a.u&&Elb(a.u,vfb(b),0)!=-1?0:b>0&&a.f.length>=b?a.f[b-1]:a.p}
function kj(a){return (Wfb(a.compatMode,Mub)?a.documentElement:a.body).clientWidth|0}
function jj(a){return (Wfb(a.compatMode,Mub)?a.documentElement:a.body).clientHeight|0}
function ne(a,b){var c=a.parentNode;if(!c){return}c.insertBefore(b,a);c.removeChild(a)}
function Reb(a,b){var c;if(!a){return}b.j=a;var d=Leb(b);if(!d){zE[a]=[b];return}d.sg=b}
function V2(a){var b;if(!a){return '(null)'}b=zeb(a.sg);return hgb(b,agb(b,ngb(46))+1)}
function Wp(a){if(null==a){throw WD(new Lfb('encodedURLComponent cannot be null'))}}
function oJ(){af();ef.call(this,Yi($doc));(LF(),this.Zc).className='gwt-ListBox'}
function b2(){this.c=new Zob;this.a=new B2;I3((!F3&&(F3=new P3),F3));this.d=new c7}
function YG(){var a;a=(HG(),$wnd.location.search);if(!WG||!Wfb(VG,a)){WG=XG(a);VG=a}}
function WJ(a,b){var c;c=(Fh(),Eh).Xd(b);if(Ch(c)){return Zg((LF(),a.Zc),c)}return false}
function oQ(a,b){var c;c=(yeb(b),b.k);C2(a.L,c)||(a.L[c]=q3(b),undefined);return a.L[c]}
function Vpb(a,b){var c;c=b.c;b.a.b=b.b;b.b.a=b.a;b.a=b.b=null;b.c=null;--a.b;return c}
function bU(a,b){var c,d,e;e=a.u[b];d=g3(e);c=new v2(e);d+=t2(c)[1];d+=t2(c)[3];return d}
function XV(a,b,c){var d;d=Gjb(a.e,wwb+b+xwb+c);return !d?j_(a.a,b)&&n_(a.a,c):d.locked}
function T(a,b,c){S(a);a.o=true;a.p=false;a.k=b;a.t=c;a.n=null;++a.r;ab(a.j,Date.now())}
function qg(a){var b;if(a.b){b=a.b;a.b=null;!a.g&&(a.g=[]);yg(b,a.g)}!!a.g&&(a.g=tg(a.g))}
function OU(a){var b,c;for(c=new fmb(a);c.a<c.c.a.length;){b=dmb(c);ah(b.d)}a.a.length=0}
function aX(a,b){var c;HT(a);for(c=0;c<b.a.length;c++){KT(a,(qtb(c,b.a.length),b.a[c]))}}
function SW(a,b,c,d,e){var f,g;RU(a);for(g=b;g<=c;g++){jX(a,g)}for(f=d;f<=e;f++){iX(a,f)}}
function dX(a,b,c,d,e){var f;f=eX(a,b,c,true);fX(a,d,e,true)&&(f=true);if(f){uW(a);oW(a)}}
function Xab(a,b,c,d){Tab(a.i,iq(dq(MB,1),Etb,1,5,[vfb(b),vfb(c),(keb(),d?true:false)]))}
function pO(a,b){a.f=b;b?Be((LF(),a.Zc),'inversed',true):Be((LF(),a.Zc),'inversed',false)}
function SS(a,b){a.k.style[Aub]=b+(hm(),hwb);a.d.style[Aub]=b+hwb;a.j.style[Aub]=b+hwb}
function vE(){wE();var a=uE;for(var b=0;b<arguments.length;b++){a.push(arguments[b])}}
function jjb(a,b){var c,d;rtb(b);for(d=b.bg().Qe();d.$e();){c=d._e();a.put(c.jg(),c.kg())}}
function Ig(a){var b=/function(?:\s+([\w$]+))?\s*\(/;var c=b.exec(a);return c&&c[1]||Ctb}
function CV(a){var b;b=wwb+a.sc+xwb+a.tc;if(fW(a,b)){return sV(a,b)}return hV(a,a.sc,a.tc)}
function UE(a){var b,c;c=ZG('logLevel');b=c==null?null:hrb(c);b?esb(a,b):esb(a,(erb(),arb))}
function tfb(a){var b,c;if(a==0){return 32}else{c=0;for(b=1;(b&a)==0;b<<=1){++c}return c}}
function D2(c){var a=[];for(var b in c){Object.hasOwnProperty.call(c,b)&&a.push(b)}return a}
function Di(a){return a.ownerDocument.defaultView.getComputedStyle(a,'').direction=='rtl'}
function pj(a){return ((Wfb(a.compatMode,Mub)?a.documentElement:a.body).scrollWidth||0)|0}
function mj(a){return ((Wfb(a.compatMode,Mub)?a.documentElement:a.body).scrollHeight||0)|0}
function yE(a,b){typeof window===Btb&&typeof window['$gwt']===Btb&&(window['$gwt'][a]=b)}
function XM(a,b,c){this.n=a;this.c=b;this.k=c;this.d=Qi($doc);this.d.part.add(vwb);UM(this)}
function XQ(){this.L={};this.u=[];Bp((!this.H&&(this.H=new Ep(this)),this.H),(z2(),y2),this)}
function G$(a,b,c,d,e,f){this.e=a;this.f=b;this.a=c;this.b=d;this.d=e;this.c=f;sb.call(this)}
function Nf(a){sf(this);uf(this);this.backingJsObject=a;vf(this,a);this.f=a==null?Mtb:EE(a)}
function RZ(){XQ.call(this);this.a=new h$(this);this.n=new Jlb;this.c=new dpb;this.e=null}
function Lcb(){Lcb=BE;Icb=new Mcb('LEFT',0);Kcb=new Mcb('RIGHT',1);Jcb=new Mcb('MIDDLE',2)}
function uhb(a){var b;b=fq(ir,Jxb,20,a.d,15,1);Egb(a.a,0,b,0,a.d);return new Ohb(a.e,a.d,b)}
function iL(a){var b,c;c=oh((LF(),a.Zc),nwb);b=(rtb(c),c);if(Wfb('',c)){return null}return b}
function aJ(a,b){var c;c=oh((LF(),b.Zc),Zvb);Wfb(Xub,c)&&(a.a=new bJ(a,b),W2((ng(),mg),a.a))}
function ST(a,b,c){var d;a.a=b;a.b=c;(LF(),a.Zc).className=oxb;d=wwb+b+xwb+c;Be(a.Zc,d,true)}
function cib(a,b,c){var d,e,f;d=0;for(e=0;e<c;e++){f=b[e];a[e]=f<<1|d;d=f>>>31}d!=0&&(a[c]=d)}
function NF(a,b,c){LF();var d;d=IF;IF=a;b==KF&&aH((Fh(),a).type)==8192&&(KF=null);c.yd(a);IF=d}
function TF(a){LF();var b;b=mG($F,a);if(!b&&!!a){(Fh(),a).stopPropagation();Eh.Yd(a)}return b}
function j2(){if($wnd.navigator.maxTouchPoints){return $wnd.navigator.maxTouchPoints}return 0}
function CY(a){if(!a.target||a.target.shadowRoot){return a.composedPath()[0]}return a.target}
function Ygb(a){if(a.a<54){return a.f<0?-1:a.f>0?1:0}return (!a.c&&(a.c=Zhb(bE(a.f))),a.c).e}
function wV(a,b,c){if(b<=a.ob){return c<=a.Uc?a.Pc:a.c}else if(c<=a.Uc){return a.Rc}return a.Ac}
function $rb(a){if(!Rrb){return}dsb(a,(erb(),Zqb),'invalid column index, halting parse',null)}
function khb(a){if(a==0){return Igb[0]}if(a>=0&&a<Pgb.length){return Pgb[a]}return new _gb(0,a)}
function Rhb(a){rtb(a);if(a.length==0){throw WD(new Nfb('Zero length BigInteger'))}Xhb(this,a)}
function Bhb(a){var b;if(a.b==-2){if(a.e==0){b=-1}else{for(b=0;a.a[b]==0;b++);}a.b=b}return a.b}
function Sib(a,b){var c,d,e;rtb(b);c=false;for(e=b.Qe();e.$e();){d=e._e();c=c|a.add(d)}return c}
function IH(){var b=$wnd.onresize;$wnd.onresize=Atb(function(a){try{OG()}finally{b&&b(a)}})}
function kJ(a){var b;b=(LF(),a.Zc).selectedIndex;return b==-1?null:(gJ(a,b),Fj(a.Zc)[b].value)}
function LQ(a){if(a.B){CM(a.B.a);a.B=null}if(a.A){CM(a.A.a);a.A=null}if(a.w){CM(a.w.a);a.w=null}}
function Z5(a){if(S5){if(a.q[Jzb]||null){return nh(a.q,Jzb)}return 0}return (a.q.scrollTop||0)|0}
function bE(a){if(Evb<a&&a<Cvb){return a<0?$wnd.Math.ceil(a):$wnd.Math.floor(a)}return $D(Bq(a))}
function Orb(){var a;if(!Krb){Krb=new Nrb;a=new jsb('');esb(a,(erb(),arb));Lrb(Krb,a)}return Krb}
function pdb(){pdb=BE;odb=new qdb('TEXT',0);ndb=new qdb('PREFORMATTED',1);mdb=new qdb('HTML',2)}
function obb(a,b,c,d,e,f){Tab(a.O,iq(dq(MB,1),Etb,1,5,[qcb(b),vfb(c),vfb(d),vfb(e),vfb(f)]))}
function Jbb(a,b,c,d){Tab(a.v,iq(dq(MB,1),Etb,1,5,[(keb(),b?true:false),vfb(c),d?true:false]))}
function F2(a,b){Wib(new smb(iq(dq(ir,2),Etb,26,0,[a])));Wib(new smb(iq(dq(ir,2),Etb,26,0,[b])))}
function x_(a,b,c){Yab(a.W,a.V.tc,a.V.sc,b);U$(a,b,true);dV(a.V);c?$R(a.Q,false):XR(a.Q,false)}
function z_(a,b,c){Yab(a.W,a.V.tc,a.V.sc,b);U$(a,b,true);dV(a.V);c?YR(a.Q,false):ZR(a.Q,false)}
function deb(a,b,c,d){var e;e=a.a.length;c>e?(c=e):xtb(b,c+1);a.a=igb(a.a,0,b)+(''+d)+hgb(a.a,c)}
function EQ(a,b){var c;N2(b.a,ie(a.Cf()));!!b.a&&Cj(b.a);Dj(b.a);(c=a,xj(b.a),c).wf(TA).vg();_2()}
function lN(a,b){var c,d;ZJ(a);for(d=new fmb(a.t);d.a<d.c.a.length;){c=dmb(d);DZ(c)}a.t.a.length=0}
function pE(a){var b,c,d,e;e=a;d=0;if(e<0){e+=Cvb;d=zvb}c=dr(e/Bvb);b=dr(e-c*Bvb);return nq(b,c,d)}
function $D(a){var b;b=a.h;if(b==0){return a.l+a.m*Bvb}if(b==zvb){return a.l+a.m*Bvb-Cvb}return a}
function c3(){$2();if($wnd.document.activeElement){return $wnd.document.activeElement}return null}
function zg(b,c){ng();function d(){var a=Atb(wg)(b);a&&$wnd.setTimeout(d,c)}
$wnd.setTimeout(d,c)}
function Ee(a,b){a.style.display=b?'':zub;b?a.removeAttribute(Eub):a.setAttribute(Eub,'true')}
function Egb(a,b,c,d,e){Dgb();stb(a,'src');stb(c,'dest');Fgb(a,b,c,d,e);Xsb(a,b,c,d,e,true);return}
function qqb(a,b){var c,d;rtb(b);for(d=new gkb((new $jb(a)).a);d.b;){c=fkb(d);b.Gf(c.jg(),c.kg())}}
function gkb(a){this.f=a;this.e=new Lpb(this.f.c);this.a=this.e;this.b=ekb(this);this.d=this.f.b}
function J2(){this.d=fq(ir,Jxb,20,4,15,1);this.a=fq(ir,Jxb,20,4,15,1);this.c=fq(ir,Jxb,20,4,15,1)}
function Wi(a,b,c,d,e,f){return (Fh(),Eh).Rd(a,Yub,true,true,0,b,c,d,e,false,false,false,false,2,f)}
function j3(a){$2();return (Fh(),a).type.indexOf(axb)!=-1?Qm(a.changedTouches[0]):_h(a.clientX||0)}
function k3(a){$2();return (Fh(),a).type.indexOf(axb)!=-1?Rm(a.changedTouches[0]):_h(a.clientY||0)}
function m3(a){$2();var b,c;c=a.getElementsByTagName('img');for(b=0;b<c.length;b++){YF(c[b],Mvb)}}
function sg(a){if(!a.j){a.j=true;!a.f&&(a.f=new Ag(a));zg(a.f,1);!a.i&&(a.i=new Cg(a));zg(a.i,50)}}
function S(a){if(!a.o){return}a.u=a.p;a.n=null;a.o=false;a.p=false;if(a.q){a.q.kd();a.q=null}a.dd()}
function xI(a,b){if(a.P){throw WD(new jfb('SimplePanel can only contain one child widget'))}a.Ue(b)}
function lf(){af();var a;!jf&&(jf=new mf);a=Pi($doc);if(!a.getContext){return null}return new kf(a)}
function lhb(a){if(a==dr(a)){return khb(dr(a))}if(a>=0){return new _gb(0,Ktb)}return new _gb(0,Ntb)}
function asb(a){if(Trb){return fq(iD,GAb,112,0,0,1)}return Ilb(a.a,fq(iD,GAb,112,a.a.a.length,0,1))}
function RM(a){if(!a.e){a.e=Qi($doc);a.e.className=twb;a.e.part.add('invalid-triangle');Vg(a.d,a.e)}}
function QM(a){if(!a.a){a.a=Qi($doc);a.a.className=swb;a.a.part.add('comment-triangle');Vg(a.d,a.a)}}
function ZT(a){var b;b=Qi($doc);hU(b,a);b.className='sheet-tabsheet-tab';b.part.add('tab');return b}
function c_(a){var b;b='';while(a>0){b=String.fromCharCode(65+(a-1)%26&Utb)+b;a=(a-1)/26|0}return b}
function VD(a){var b;if(Yq(a,19)){return a}b=a&&a.__java$exception;if(!b){b=new Rf(a);Gg(b)}return b}
function rX(a,b){a.Z=b;b?sh(a.Hc,'noheaders'):dh(a.Hc,'noheaders');if(a.Db){oW(a);xY(a);dY(a);tY(a)}}
function uR(a){var b;b=Wg(a.j);b?dK(a.e,a.a):W2((ng(),mg),new JR(a));!!a.d&&jR(a.g,kV(a.d,a.b,a.k))}
function nS(a){return (LF(),a.Zc).style.display!=zub||!!a.a&&le(a.a)||!!a.X&&le(a.X)||!!a.W&&le(a.W)}
function $V(a,b,c){return c<=a.Uc&&(b>=a.bb&&b<=a.xb||b<=a.ob)||b<=a.ob&&(c>=a.db&&c<=a.zb||c<=a.Uc)}
function wY(a,b,c,d,e){var f;if(fW(a,wwb+c+xwb+e)){f=g_(a.a,c,e);c=f.col2;e=f.row2}uS(a.zc,b,c,d,e)}
function Ejb(a,b){var c,d;for(d=b.Qe();d.$e();){c=d._e();if(Xob(a,c.kg())){return true}}return false}
function kkb(a,b){var c,d;for(c=0,d=a.size();c<d;++c){if(sqb(b,a.getAtIndex(c))){return c}}return -1}
function Ipb(a,b){var c;c=a.a.get(b);if(c===undefined){++a.d}else{ypb(a.a,b);--a.c;++a.b.b}return c}
function ri(a){var b=a.ownerDocument.defaultView.getComputedStyle(a,null);return b.direction=='rtl'}
function yq(a,b){var c,d,e;c=a.l+b.l;d=a.m+b.m+(c>>22);e=a.h+b.h+(d>>22);return nq(c&yvb,d&yvb,e&zvb)}
function Jq(a,b){var c,d,e;c=a.l-b.l;d=a.m-b.m+(c>>22);e=a.h-b.h+(d>>22);return nq(c&yvb,d&yvb,e&zvb)}
function kS(a,b,c){var d,e;if(a==null||a.length<c-1){return 0}e=0;for(d=b;d<c;d++){e+=a[d-1]}return e}
function iq(a,b,c,d,e){e.sg=a;e.tg=b;e.ug=FE;e.__elementTypeId$=c;e.__elementTypeCategory$=d;return e}
function iJ(a){var b;b=a.text;(Fh(),a).hasAttribute(dwb)&&b.length>1&&(b=igb(b,1,b.length-1));return b}
function De(a,b){if(!a){throw WD(new Lf(Cub))}b=lgb(b);if(b.length==0){throw WD(new hfb(Dub))}He(a,b)}
function g6(a){U5();this.s=fq(ir,Jxb,20,3,15,1);this.b=fq(gr,Etb,20,3,15,1);this.p=new epb(new smb(a))}
function y6(a){this.a=a;HJ.call(this,true);Ie(this,this,(eo(),eo(),co));Ie(this,this,(Yn(),Yn(),Xn))}
function nH(a){jH();var b;b=!TF(a);if(b||!fH){return}MF(a,fH)&&((Fh(),a).stopPropagation(),undefined)}
function Hlb(a,b){var c;c=Elb(a,b,0);if(c==-1){return false}qtb(c,a.a.length);_sb(a.a,c,1);return true}
function ekb(a){if(a.a.$e()){return true}if(a.a!=a.e){return false}a.a=new tpb(a.f.a);return a.a.$e()}
function Teb(a){if(a==null){return false}return a.$implements__java_lang_Cloneable||Array.isArray(a)}
function reb(a){if(Wfb(typeof(a),Jtb)){return true}return a!=null&&a.$implements__java_lang_CharSequence}
function Beb(){++xeb;this.k=null;this.i=null;this.g=null;this.d=null;this.b=null;this.j=null;this.a=null}
function Dmb(a){Cmb();var b,c,d;d=0;for(c=a.Qe();c.$e();){b=c._e();d=d+(b!=null?Q(b):0);d=d|0}return d}
function Dq(a){var b,c,d;b=~a.l+1&yvb;c=~a.m+(b==0?1:0)&yvb;d=~a.h+(b==0&&c==0?1:0)&zvb;return nq(b,c,d)}
function G3(a,b){var c,d,e,f,g,h;h=b.c;a.a[h]=b;g=b.b;for(d=g,e=0,f=d.length;e<f;++e){c=d[e];a.d[c]=h}}
function XT(a,b){var c,d,e,f,g;for(e=b,f=0,g=e.length;f<g;++f){d=e[f];c=ZT(d);Vg(a.c,c);Uf(a.u,c)}jU(a)}
function NZ(a,b){var c,d;for(d=a.c.Qe();d.$e();){c=d._e();b.contains(c)||d0((!a.F&&(a.F=new q1),a.F),c)}}
function cT(a,b){a.i.style[Zub]=(b?(zk(),ok):(zk(),gk)).le();a.g.style[Zub]=(b?(zk(),ok):(zk(),gk)).le()}
function Vab(a,b,c,d,e,f,g){Tab(a.f,iq(dq(MB,1),Etb,1,5,[vfb(b),vfb(c),vfb(d),vfb(e),vfb(f),vfb(g)]))}
function Fgb(a,b,c,d,e){var f,g;g=a.length;f=c.length;if(b<0||d<0||e<0||b+e>g||d+e>f){throw WD(new heb)}}
function Wcb(a,b,c){b<0&&(b=0);(c<0||c>a.length)&&(c=a.length);return wtb(b,c,a.length),a.substr(b,c-b)}
function MZ(a){IQ(a);Y$((!a.F&&(a.F=new q1),a.F),true);!!a.c&&a.c.clear();a.n.a.length=0;!!a.b&&CM(a.b.a)}
function aG(a){LF();bH(JF);!gG&&(gG=new An);if(!$F){$F=new Fp(null,true);hG=new kG}return Bp($F,gG,a)}
function gdb(){gdb=BE;edb=new hdb('DISABLED',0);fdb=new hdb('MANUAL',1);ddb=new hdb('AUTOMATIC',2)}
function RI(){RI=BE;new SI((Ml(),'center'));new SI('justify');OI=new SI(_vb);new SI('right');QI=OI;NI=QI}
function $ob(a){mtb(a>=0,'Negative initial capacity');mtb(true,'Non-positive load factor');Mjb(this)}
function Emb(a){Cmb();var b,c,d;d=1;for(c=a.Qe();c.$e();){b=c._e();d=31*d+(b!=null?Q(b):0);d=d|0}return d}
function tq(a){var b,c,d;b=~a.l+1&yvb;c=~a.m+(b==0?1:0)&yvb;d=~a.h+(b==0&&c==0?1:0)&zvb;a.l=b;a.m=c;a.h=d}
function uq(a){var b,c;c=sfb(a.h);if(c==32){b=sfb(a.m);return b==32?sfb(a.l)+32:b+20-10}else{return c-12}}
function Clb(a,b){var c,d;c=b.toArray();d=c.length;if(d==0){return false}Zsb(a.a,a.a.length,c);return true}
function Yfb(a){var b,c;b=0;for(c=0;c<a.length;c++){b=(b<<5)-b+(xtb(c,a.length),a.charCodeAt(c))|0}return b}
function qq(a,b,c,d,e){var f;f=Hq(a,b);c&&tq(f);if(e){a=sq(a,b);d?(kq=Dq(a)):(kq=nq(a.l,a.m,a.h))}return f}
function wib(a,b,c){var d;for(d=c-1;d>=0&&a[d]===b[d];d--);return d<0?0:fE(YD(a[d],uAb),YD(b[d],uAb))?-1:1}
function x5(a,b,c){var d=a[c];if(d!==undefined){var e=function(){};e.prototype=d;a[b]=new e}else{a[b]={}}}
function nW(a,b,c){var d;Vg(a.Ac,a.hb);uh(a.hb,'cell '+b);xh(a.hb,c);d=a.hb.clientWidth|0;ah(a.hb);return d}
function WS(a,b){Ee((LF(),a.Zc),b);b?(a.Zc.style[kwb]='',undefined):(a.Zc.style[kwb]=(ql(),lvb),undefined)}
function sN(a,b){a.style[_vb]=b.b+(hm(),hwb);a.style[awb]=b.c+hwb;a.style[Bub]=b.d+hwb;a.style[Aub]=b.a+hwb}
function DZ(a){a.d==0?Rab(a.c,a.a):a.d==1?Sab(a.c,a.a):Qab(a.c,a.a);iN(a.g.a.a.G.b,false);eV(a.e.V,true)}
function Uib(a,b){var c,d;rtb(b);for(d=b.Qe();d.$e();){c=d._e();if(!a.contains(c)){return false}}return true}
function mpb(a,b){var c,d,e,f;for(d=b,e=0,f=d.length;e<f;++e){c=d[e];if(Xob(a,c.jg())){return c}}return null}
function yI(a,b){if(a.P!=b){return false}try{Qe(b,null)}finally{_g(a.Te(),(LF(),b.Zc));a.P=null}return true}
function r6(a,b,c){if(a.b){a.a=new g6(iq(dq(Js,1),Etb,0,2,[]));Ie(b,a,(Zo(),Zo(),Yo))}else{a.a=null}s6(a,c)}
function Op(a){var b,c;if(a.a){try{for(c=new fmb(a.a);c.a<c.c.a.length;){b=dmb(c);b.Md()}}finally{a.a=null}}}
function YU(a){var b,c,d;for(d=1;d<=a.Uc;d++){for(c=1;c<=a.ob;c++){b=new XM(a,c,d);Vg(a.Pc,b.d);Blb(a.Oc,b)}}}
function PV(a,b,c){var d,e,f;if(c==0){return}e=a.a.L;f=b-e;d=a.Nc+b+a.pc+e;f<0&&(f=0);c>0?QV(a,f,d):RV(a,f,d)}
function JV(a,b,c){var d,e,f;if(c==0){return}d=a.a.i;e=b-d;f=a.Bb+b+a.qc+d;e<0&&(e=0);c>0?LV(a,e,f):KV(a,e,f)}
function ZD(a,b){var c;if(eE(a)&&eE(b)){c=a-b;if(!isNaN(c)){return c}}return Aq(eE(a)?pE(a):a,eE(b)?pE(b):b)}
function bT(a,b){a.b=b;a.a.style[$ub]=(b?(vm(),tm):(vm(),um)).le();a.d.style[$ub]=(b?(vm(),tm):(vm(),um)).le()}
function eT(a,b){a.n=b;a.k.style[$ub]=(b?(vm(),tm):(vm(),um)).le();a.p.style[$ub]=(b?(vm(),tm):(vm(),um)).le()}
function hT(a,b){a.v=b;a.u.style[$ub]=(b?(vm(),tm):(vm(),um)).le();a.A.style[$ub]=(b?(vm(),tm):(vm(),um)).le()}
function kT(a,b){a.H=b;a.G.style[$ub]=(b?(vm(),tm):(vm(),um)).le();a.J.style[$ub]=(b?(vm(),tm):(vm(),um)).le()}
function eW(a,b){var c,d;if(a.S){d=CY(b);c=ie(a.S);return (Fh(),Eh).fe(c,d)||!!Jh(c)&&Zg(Jh(c),d)}return false}
function __(a,b){var c,d;if(a.t.f){vP(a.t);QX(a.V,false)}c=ph(a.V.Ac);d=(a.V.Ac.scrollTop||0)|0;kcb(a.W,b,c,d)}
function Pe(a,b){a.Vc&&(LF(),a.Zc.__listener=null,undefined);!!a.Zc&&ne(a.Zc,b);a.Zc=b;a.Vc&&(LF(),dH(a.Zc,a))}
function rb(a,b){if(b<=0){throw WD(new hfb('must be positive'))}!!a.j&&pb(a);a.i=true;a.j=vfb(xb(vb(a,a.g),b))}
function KL(a,b){var c;if(b<0||b>=a.c){throw WD(new heb)}--a.c;for(c=b;c<a.c;++c){a.a[c]=a.a[c+1]}a.a[a.c]=null}
function xP(a,b){var c,d;d=Fj(jJ(a.B)).length;for(c=0;c<d;c++){if(Wfb(hJ(a.B,c),b)){nJ(a.B,c);return}}nJ(a.B,0)}
function jY(a,b){if(a.R);else{kL(a.sb,b);a._&&(WV(a,a.sc,a.tc)||gX(a,a.sc,a.tc),W2((ng(),mg),new PY(a,false)))}}
function zI(a,b){if(b==a.P){return}!!b&&Oe(b);!!a.P&&yI(a,a.P);a.P=b;if(b){LF();Vg(a.Te(),VF(ie(a.P)));Qe(b,a)}}
function oY(a){var b,c;for(c=new gkb((new $jb(a.Kb)).a);c.b;){b=fkb(c);DW(a,b.jg(),b.kg());EW(a,b.jg(),b.kg())}}
function _db(c){var a=[];for(var b in c){Object.prototype.hasOwnProperty.call(c,b)&&b!='$H'&&a.push(b)}return a}
function zU(a,b,c){var d,e,f,g;g=0;for(d=b;d<=c;d++){e=h_(a.a,d);f=Wgb(jhb(e*a.Mb/72));g+=f;a.W[d-1]=f}return g}
function Ugb(a){var b,c;b=Ygb(a);c=a.a-a.e/sAb;c<-149||b==0?(b*=0):c>129?(b*=Infinity):(b=Xeb(Zgb(a)));return b}
function dhb(a){var b;ZD(a,0)<0&&(a=$D(Eq(eE(a)?pE(a):a)));return b=rE(nE(a,32)),64-(b!=0?sfb(b):sfb(rE(a))+32)}
function Hf(a){var b;if(a!=null){b=a.__java$exception;if(b){return b}}return ar(a,TypeError)?new Kfb(a):new Nf(a)}
function OG(){HG();var a,b;if(GG){b=kj($doc);a=jj($doc);if(FG!=b||EG!=a){FG=b;EG=a;sp((!CG&&(CG=new $G),CG))}}}
function qJ(a,b,c){var d;if(a.i){d=(LF(),bj($doc));RF(a.d,d,b);Vg(d,VF(c))}else{d=OF(a.d);LF();JF.Ke(d,VF(c),b)}}
function Be(a,b,c){if(!a){throw WD(new Lf(Cub))}b=lgb(b);if(b.length==0){throw WD(new hfb(Dub))}c?dh(a,b):sh(a,b)}
function ntb(a,b){if(0>a){throw WD(new hfb('fromIndex: 0 > toIndex: '+a))}if(a>b){throw WD(new jeb(Vtb+a+Wtb+b))}}
function hK(a){if(a.K){CM(a.K.a);a.K=null}if(a.F){CM(a.F.a);a.F=null}if(a.N){a.K=aG(new wK(a));a.F=tG(new yK(a))}}
function O(a){return br(a)?SB:$q(a)?zB:Zq(a)?xB:Xq(a)?a.sg:hq(a)?a.sg:a.sg||Array.isArray(a)&&dq(Js,1)||Js}
function cM(){return function(a){var b=this.parentNode;b.onfocus&&$wnd.setTimeout(function(){b.focus()},0)}}
function P3(){this.a={};this.d={};this.c=new q5;this.b=new Jlb;G3(this,new Q3(iq(dq(SB,1),Stb,2,6,[Hyb])))}
function L1(a,b,c,d,e,f,g,h,i){this.a=a;this.f=b;this.i=c;this.j=d;this.b=e;this.d=f;this.c=g;this.e=h;this.g=i}
function h0(a,b,c,d,e,f,g,h,i){if(!a.V.Db){W2((ng(),mg),new L1(a,b,c,d,e,f,g,h,i));return}cS(a.Q,b,c,d,e,f,g,h,i)}
function mmb(a,b,c,d,e,f,g){var h;h=c;while(f<g){h>=d||b<c&&Job(a[b],a[h])<=0?(e[f++]=a[b++]):(e[f++]=a[h++])}}
function qb(a,b){if(b<0){throw WD(new hfb('must be non-negative'))}!!a.j&&pb(a);a.i=false;a.j=vfb(yb(vb(a,a.g),b))}
function a3(a,b){$2();var c=$wnd.document.elementFromPoint(a,b);c!=null&&c.nodeType==3&&(c=c.parentNode);return c}
function tJ(a,b){var c,d;for(d=new fmb(a.f);d.a<d.c.a.length;){c=dmb(d);if(Zg((LF(),c.Zc),b)){return c}}return null}
function Dhb(a){var b;if(a.c!=0){return a.c}for(b=0;b<a.a.length;b++){a.c=a.c*33+(a.a[b]&-1)}a.c=a.c*a.e;return a.c}
function ye(a){var b,c;b=a.className||'';c=Zfb(b,ngb(32));if(c>=0){return wtb(0,c,b.length),b.substr(0,c)}return b}
function uG(){var a;a=(HG(),DG).Pe();if(a==null||a.length==0){return ''}return AG((xtb(1,a.length+1),a.substr(1)))}
function XD(a,b){var c;if(eE(a)&&eE(b)){c=a+b;if(Evb<c&&c<Cvb){return c}}return $D(yq(eE(a)?pE(a):a,eE(b)?pE(b):b))}
function iE(a,b){var c;if(eE(a)&&eE(b)){c=a*b;if(Evb<c&&c<Cvb){return c}}return $D(Cq(eE(a)?pE(a):a,eE(b)?pE(b):b))}
function oE(a,b){var c;if(eE(a)&&eE(b)){c=a-b;if(Evb<c&&c<Cvb){return c}}return $D(Jq(eE(a)?pE(a):a,eE(b)?pE(b):b))}
function Xgb(a,b){var c;a.c=b;a.a=$hb(b);a.a<54&&(a.f=(c=b.d>1?ztb(b.a[0],b.a[1]):ztb(b.a[0],0),qE(b.e>0?c:jE(c))))}
function _gb(a,b){this.e=b;this.a=dhb(a);this.a<54?(this.f=qE(a)):(this.c=(shb(),ZD(a,0)>=0?Uhb(a):Ghb(Uhb(jE(a)))))}
function M(a,b){return br(a)?Wfb(a,b):$q(a)?Zeb(a,b):Zq(a)?(rtb(a),cr(a)===cr(b)):Xq(a)?a.$c(b):hq(a)?J(a,b):nf(a,b)}
function DL(a,b){var c,d,e;d=(LF(),bj($doc));c=(e=aj($doc),hI(e,a.a),iI(e,a.b),e);Vg(d,VF(c));Vg(a.c,VF(d));QH(a,b,c)}
function PW(a,b){var c,d;c=b.b;d=b.k;Ljb(a.Dc,wwb+c+xwb+d);KW(a,b);c>=a.bb&&c<=a.xb&&d>=a.db&&d<=a.zb&&NM(hV(a,c,d))}
function Mp(a,b,c){var d,e;e=Fjb(a.d,b);if(!e){e=new Zob;Ijb(a.d,b,e)}d=e.get(c);if(!d){d=new Jlb;e.put(c,d)}return d}
function F7(a){var b,c;if(a==null||a.length==0||Wfb(Mtb,a)){return null}c=Zdb(a);b=new qR;Object.assign(b,c);return b}
function b5(a){var b,c;b=r5(a);c=b.Lf(null,iq(dq(MB,1),Etb,1,5,[]));Yq(c,101)&&H3((!F3&&(F3=new P3),F3),a.a);return c}
function vfb(a){var b,c;if(a>-129&&a<128){return xfb(),b=a+128,c=wfb[b],!c&&(c=wfb[b]=new mfb(a)),c}return new mfb(a)}
function jhb(a){Rgb();if(!isNaN(a)&&!isFinite(a)||isNaN(a)){throw WD(new Nfb('Infinite or NaN'))}return new ahb(''+a)}
function Xp(a){var b;b=oh(a,'dir');if(Xfb('rtl',b)){return aq(),_p}else if(Xfb('ltr',b)){return aq(),$p}return aq(),Zp}
function f3(a){$2();var b,c;c=d3(a);if((f2(),!e2&&(e2=new q2),f2(),e2).a.j){b=e3(a);if(b>c&&b<=c+1){return b}}return c}
function i3(a){$2();var b,c;c=g3(a);if((f2(),!e2&&(e2=new q2),f2(),e2).a.j){b=h3(a);if(b>c&&b<=c+1){return b}}return c}
function cF(b,c,d){rtb(c);beb(c.length,d);if(!b.b){return}try{$E(b.b,c,d)}catch(a){a=VD(a);if(!Yq(a,89))throw WD(a)}}
function peb(a,b){keb();return br(a)?Tfb(a,b):$q(a)?afb((rtb(a),a),(rtb(b),b)):Zq(a)?oeb((rtb(a),a),(rtb(b),b)):a.ke(b)}
function abb(a,b,c,d,e,f){var g;Tab(a.q,iq(dq(MB,1),Etb,1,5,[(g=[],qqb(b,new tcb(g)),g),vfb(c),vfb(d),vfb(e),vfb(f)]))}
function Bk(){zk();return iq(dq(wt,1),Etb,23,0,[ok,gk,jk,kk,mk,nk,pk,qk,rk,uk,wk,vk,yk,sk,tk,xk,ik,hk,lk])}
function hm(){hm=BE;gm=new km;em=new lm;_l=new mm;am=new nm;fm=new om;dm=new pm;bm=new qm;$l=new rm;cm=new sm}
function Jb(a,b){var c,d,e,f,g;c=new ygb;for(e=b,f=0,g=e.length;f<g;++f){d=e[f];wgb(wgb(c,a.nd(d)),' ')}return lgb(c.a)}
function NW(a){var b,c,d;for(c=new fmb(a);c.a<c.c.a.length;){b=dmb(c);d=Jh((Fh(),b));!!d&&d.removeChild(b)}a.a.length=0}
function lmb(a,b,c){var d,e,f;for(d=b+1;d<c;++d){for(e=d;e>b&&Job(a[e-1],a[e])>0;--e){f=a[e];a[e]=a[e-1];a[e-1]=f}}}
function Gib(a,b,c,d,e){if(b==0||d==0){return}b==1?(e[d]=Iib(e,c,d,a[0])):d==1?(e[b]=Iib(e,a,b,c[0])):Hib(a,c,e,b,d)}
function r1(a){var b;b=nj($doc);return $2(),(Fh(),a).type.indexOf(axb)!=-1?Qm(a.changedTouches[0])+b:_h(a.clientX||0)+b}
function s1(a){var b;b=oj($doc);return $2(),(Fh(),a).type.indexOf(axb)!=-1?Rm(a.changedTouches[0])+b:_h(a.clientY||0)+b}
function J0(a,b){a.D=b;a.D?((LF(),a.Zc).className||'').indexOf(ryb)!=-1||Be(a.Zc,ryb,true):Be((LF(),a.Zc),ryb,false)}
function y0(a,b){b!=null&&b.length!=0?((LF(),a.Zc).style[Aub]=b,undefined):((LF(),a.Zc).style[Aub]='400.0px',undefined)}
function c1(a,b){b!=null&&b.length!=0?((LF(),a.Zc).style[Bub]=b,undefined):((LF(),a.Zc).style[Bub]='500.0px',undefined)}
function cK(a,b,c){var d;a.I=b;a.O=c;b-=hj($doc);c-=ij($doc);d=(LF(),a.Zc);d.style[_vb]=b+(hm(),hwb);d.style[awb]=c+hwb}
function Np(a,b,c){var d,e;e=Fjb(a.d,b);if(!e){return Cmb(),Cmb(),zmb}d=e.get(c);if(!d){return Cmb(),Cmb(),zmb}return d}
function WK(){SK();var a;a=Fjb(QK,null);if(a){return a}Njb(QK)==0&&IG(new $K);a=new aL;Ijb(QK,null,a);apb(RK,a);return a}
function ib(b,c){var d=Atb(function(){var a=Date.now();b.hd(a)});var e=$wnd.requestAnimationFrame(d,c);return {id:e}}
function yhb(a,b){var c;if(cr(a)===cr(b)){return true}if(Yq(b,10)){c=b;return a.e==c.e&&a.d==c.d&&zhb(a,c.a)}return false}
function afb(a,b){if(a<b){return -1}if(a>b){return 1}if(a==b){return a==0?afb(1/a,1/b):0}return isNaN(a)?isNaN(b)?0:1:-1}
function msb(a){if(a.b){msb(a.b)}else if(a.c){throw WD(new jfb("Stream already terminated, can't be modified or used"))}}
function hhb(a){if(a<Ntb){throw WD(new geb('Overflow'))}else if(a>Ktb){throw WD(new geb('Underflow'))}else{return dr(a)}}
function sib(a,b,c){var d,e,f,g;f=0;for(d=b-1;d>=0;d--){g=XD(lE(f,32),YD(a[d],uAb));e=oib(g,c);f=rE(mE(e,32))}return rE(f)}
function Hpb(a,b,c){var d;d=a.a.get(b);a.a.set(b,c===undefined?null:c);if(d===undefined){++a.c;++a.b.b}else{++a.d}return d}
function tQ(a,b,c){var d;d=egb((yeb(b),b.k),Rtb,'.');!a.K&&(a.K={});null==a.K[d]&&(a.K[d]=new Jlb,undefined);a.K[d].add(c)}
function W_(a,b,c,d,e){var f;f=dQ(a.I,d,e,b,c);if(f.col1==b&&f.col2==c&&f.row1==d&&f.row2==e){qbb(a.W,d,b,e,c);qb(a.r,200)}}
function JZ(a,b,c,d){var e,f;e=QT(c,oh(a.f,iyb));f=new xZ('custom-component-'+c,e,a.f);d==null?ppb(b.a,null,f):Hpb(b.c,d,f)}
function xib(a,b,c){var d,e;d=YD(c,uAb);for(e=0;ZD(d,0)!=0&&e<b;e++){d=XD(d,YD(a[e],uAb));a[e]=rE(d);d=mE(d,32)}return rE(d)}
function i6(a){var b,c,d,e;b=a.childNodes;e=new Jlb;for(c=0;c<b.length;c++){d=b[c];d.nodeType==1&&($sb(e.a,d),true)}return e}
function NT(a){var b=a.length;var c=0;var d=0;var e=0;while(c<b){d=a.charCodeAt(c);d>47&&d<58&&(e=e*10+d-48);c++}return e}
function BJ(a){var b,c;if(!a.g){for(c=new fmb(a.f);c.a<c.c.a.length;){b=dmb(c);if(b.b){CJ(a,b);break}}return true}return false}
function e6(a,b){var c,d,e;for(d=new fmb(a.g);d.a<d.c.a.length;){c=dmb(d);e=c.style;e[Hwb]='translate3d(0px,'+b+'px,0px)'}}
function eZ(a,b,c,d,e){var f,g,h;for(g=b;g<=c;g++){for(h=d;h<=e;h++){f=hV(a.a,h,g);!!f&&f.p!=null&&f.p.length!=0&&f.g&&WM(f)}}}
function dZ(a,b,c,d,e){var f,g,h;for(g=b;g<=c;g++){for(h=d;h<=e;h++){f=hV(a.a,h,g);!!f&&f.p!=null&&f.p.length!=0&&f.g&&KM(f)}}}
function hQ(a){oL();qL.call(this);this.a=a;this.Wc==-1?YF((LF(),this.Zc),Avb|(this.Zc.__eventBits||0)):(this.Wc|=Avb)}
function Bn(a,b){var c;An.call(this);this.a=b;!Xm&&(Xm=new Ao);c=yo(Xm,a);if(!c){c=new Jlb;zo(Xm,a,c)}c.add(this);this.b=a}
function Me(a,b){var c;switch(LF(),aH((Fh(),b).type)){case 16:case 32:c=Eh.Wd(b);if(!!c&&Zg(a.Zc,c)){return}}$m(b,a,a.Zc)}
function sT(a,b){switch(LF(),aH((Fh(),b).type)){case Bvb:case Tvb:rW(a.c,b);case 8:case 8192:TX(a.c,b);break;case 64:qW(a.c,b);}}
function hE(a,b){var c;if(eE(a)&&eE(b)){c=a%b;if(Evb<c&&c<Cvb){return c}}return $D((oq(eE(a)?pE(a):a,eE(b)?pE(b):b,true),kq))}
function sJ(a,b,c){var d;if(!b.b){return}CJ(a,b);if(c&&!!b.a){CJ(a,null);(HI(),GI).bf((LF(),a.Zc));d=b.a;vg((ng(),mg),new LJ(d))}}
function EE(a){var b;if(Array.isArray(a)&&a.ug===FE){return zeb(O(a))+'@'+(b=Q(a)>>>0,b.toString(16))}return a.toString()}
function pq(a,b){if(a.h==Avb&&a.m==0&&a.l==0){b&&(kq=nq(0,0,0));return mq((Sq(),Qq))}b&&(kq=nq(a.l,a.m,a.h));return nq(0,0,0)}
function a$(a,b){var c,d;if(a.a.g){c=($2(),j3(a.a.g));d=k3(a.a.g)}else{c=($2(),j3(a.a.i));d=k3(a.a.i)}M$(a.a.G.b,new j$(a,b),c,d)}
function SR(a,b,c){var d;d=f_(a.d,b,c);if(d){a.a=b;a.b=c;b=d.col1;c=d.row1}else{a.a=0;a.b=0}gX(a.c,b,c);aS(a,b,c,(kV(a.c,b,c),d))}
function y_(a){var b;if(!a.A&&!a.t.f){a.A=true;a.c=true;if(a.s){a.s=false}else{MX(a.V,false,(b=iL(a.t.j),b==null?'':b));tP(a.t)}}}
function _rb(a){var b,c;if(a.b){return a.b}c=Trb?null:a.d;while(c){b=Trb?null:c.b;if(b){return b}c=Trb?null:c.d}return erb(),arb}
function $hb(a){var b,c,d;if(a.e==0){return 0}b=a.d<<5;c=a.a[a.d-1];if(a.e<0){d=Bhb(a);if(d==a.d-1){--c;c=c|0}}b-=sfb(c);return b}
function ftb(a){var b,c,d,e;e=a.length;b=fq(er,Etb,20,0,15,1);for(d=0;d<e;){c=ueb(a,d,a.length);d+=c>=Ttb?2:1;etb(b,c)}return b}
function e5(a,b){var c,d;d=a;if(b!=null&&b.length!=0){d+='<';for(c=0;c<b.length;c++){c!=0&&(d+=',');d+=''+b[c]}d+='>'}return d}
function Vhb(a){var b,c,d;if(a<qhb.length){return qhb[a]}c=a>>5;b=a&31;d=fq(ir,Jxb,20,c+1,15,1);d[c]=1<<b;return new Ohb(1,c+1,d)}
function Uhb(a){shb();var b,c;c=rE(a);b=rE(nE(a,32));if(b!=0){return new Nhb(c,b)}if(c>10||c<0){return new Mhb(1,c)}return ohb[c]}
function Tib(a,b,c){var d,e;for(e=a.Qe();e.$e();){d=e._e();if(cr(b)===cr(d)||b!=null&&M(b,d)){c&&e.af();return true}}return false}
function Q(a){return br(a)?Yfb(a):$q(a)?$eb(a):Zq(a)?leb(a):Xq(a)?a.ad():hq(a)?ltb(a):!!a&&!!a.hashCode?a.hashCode():ltb(a)}
function AK(a){if(!a.i){zK(a);a.c||WH((SK(),WK()),a.a)}(VJ(),UJ).hf(ie(a.a),'rect(auto, auto, auto, auto)');ie(a.a).style[kwb]=kvb}
function mT(a){var b,c;c=e_(a.F.q,a.e);for(b=a.e+1;b<=a.f;b++){c+=e_(a.F.q,b)}a.G.style[Bub]=c+1+(hm(),hwb);a.a.style[Bub]=c+1+hwb}
function Nh(a){var b=0;var c=a;while(c.offsetParent){b-=c.scrollTop;c=c.parentNode}while(a){b+=a.offsetTop;a=a.offsetParent}return b}
function Udb(){this.b=(gdb(),edb);this.c=new Zob;this.c.put('transport',(Kdb(),Idb).a);this.c.put('fallbackTransport',Gdb.a)}
function H6(){LI.call(this);(LF(),this.Zc).className='v-label';this.Wc==-1?YF(this.Zc,241|(this.Zc.__eventBits||0)):(this.Wc|=241)}
function WT(a,b){AI.call(this);a.sd('100%');a.qd('100%');(LF(),this.Zc).style[uwb]=zub;a.Zc.style[uwb]='all';xI(this,a);VT(this,b)}
function utb(a,b,c){if(a<0||b>c){throw WD(new ieb(Ztb+a+$tb+b+', size: '+c))}if(a>b){throw WD(new hfb(Ztb+a+' > toIndex: '+b))}}
function erb(){erb=BE;Xqb=new jrb;Yqb=new mrb;Zqb=new prb;$qb=new srb;_qb=new vrb;arb=new yrb;brb=new Brb;crb=new Erb;drb=new Hrb}
function g3(a){$2();if(a.getBoundingClientRect){var b=a.getBoundingClientRect();return b.right-b.left}else{return a.offsetWidth}}
function PJ(){PJ=BE;DF();new zF('data:image/gif;base64,R0lGODlhBQAJAIAAAAAAAAAAACH5BAEAAAEALAAAAAAFAAkAAAIMRB5gp9v2YlJsJRQKADs=')}
function YV(a,b,c){return b>=a.bb&&b<=a.xb&&c>=a.db&&c<=a.zb||b<=a.ob&&c<=a.Uc||b>a.ob&&b<=a.xb&&c<=a.Uc||c>a.Uc&&c<=a.zb&&b<=a.ob}
function oV(a){if(a.V==-1){if(a.Mb==0){Xg(a.Nb)&&(a.Mb=(a.Nb.offsetWidth||0)|0);a.Mb==0&&(a.Mb=96)}a.V=dr(a.a.q*a.Mb/72)}return a.V}
function RH(a,b){var c;if(b.Yc!=a){return false}try{Qe(b,null)}finally{c=(LF(),b.Zc);_g((null,Jh((Fh(),c))),c);LL(a.o,b)}return true}
function x1(a,b,c){var d,e;if(a.a.J){for(e=new fmb(a.a.J);e.a<e.c.a.length;){d=dmb(e);if(d.col1==b&&d.row1==c){return d}}}return null}
function pY(a,b){var c,d;if(b){mW(a.lc);mW(a.Sc);mW(a.d);for(d=new fmb(a.Oc);d.a<d.c.a.length;){c=dmb(d);!!c&&(c.g=true)}}qb(a.Jb,20)}
function mW(a){var b,c,d,e;for(e=new fmb(a);e.a<e.c.a.length;){d=dmb(e);for(c=new fmb(d);c.a<c.c.a.length;){b=dmb(c);!!b&&(b.g=true)}}}
function kmb(a){var b,c,d,e,f;if(a==null){return 0}f=1;for(c=a,d=0,e=c.length;d<e;++d){b=c[d];f=31*f+(b!=null?Q(b):0);f=f|0}return f}
function Qeb(a,b){var c=0;while(!b[c]||b[c]==''){c++}var d=b[c++];for(;c<b.length;c++){if(!b[c]||b[c]==''){continue}d+=a+b[c]}return d}
function aib(a,b){var c,d,e,f;c=b>>5;b&=31;e=a.d+c+(b==0?0:1);d=fq(ir,Jxb,20,e,15,1);bib(d,a.a,c,b);f=new Ohb(a.e,e,d);vhb(f);return f}
function $$(a,b,c,d){var e;e=new rgb;qgb(e,$wnd.Math.abs(d-c)+1);e.a+='R';e.a+=' x ';qgb(e,$wnd.Math.abs(b-a)+1);e.a+='C';return e.a}
function Lp(a,b,c,d){var e,f,g;e=Np(a,b,c);f=e.remove(d);f&&e.isEmpty()&&(g=Fjb(a.d,b),g.remove(c),g.isEmpty()&&Kjb(a.d,b),undefined)}
function pgb(a,b,c){var d,e,f,g;f=b+c;wtb(b,f,a.length);g='';for(e=b;e<f;){d=$wnd.Math.min(e+10000,f);g+=mgb(a.slice(e,d));e=d}return g}
function Lg(){if(Error.stackTraceLimit>0){$wnd.Error.stackTraceLimit=Error.stackTraceLimit=64;return true}return 'stack' in new Error}
function Gfb(a){var b,c;if(ZD(a,-129)>0&&ZD(a,128)<0){return Ifb(),b=rE(a)+128,c=Hfb[b],!c&&(c=Hfb[b]=new yfb(a)),c}return new yfb(a)}
function ffb(a){var b;b=Xeb(a);if(b>3.4028234663852886E38){return Infinity}else if(b<-3.4028234663852886E38){return -Infinity}return b}
function yX(a,b,c,d,e,f){var g,h;h=a.a.o;if(!!h&&Hjb(pQ(h.a).c,b)){return false}g=sV(a,b);if(g){PM(g,c,d,e,f);return true}return false}
function lS(a){if(bW(a.Q,a.e,a.K)){return ie(a.X)}if(ZV(a.Q,a.e,a.K)){return ie(a.a)}if(aW(a.Q,a.e,a.K)){return ie(a.W)}return ie(a.b)}
function thb(a,b){if(a.e>b.e){return 1}if(a.e<b.e){return -1}if(a.d>b.d){return a.e}if(a.d<b.d){return -b.e}return a.e*wib(a.a,b.a,a.d)}
function jtb(a){switch(typeof(a)){case Jtb:return Yfb(a);case Htb:return $eb(a);case Gtb:return leb(a);default:return a==null?0:ltb(a);}}
function Ueb(a){var b;b=typeof(a);if(Wfb(b,Gtb)||Wfb(b,Htb)||Wfb(b,Jtb)){return true}return a!=null&&a.$implements__java_lang_Comparable}
function Mh(a){var b=0;var c=a;while(c.offsetParent){b-=c.scrollLeft;c=c.parentNode}while(a){b+=a.offsetLeft;a=a.offsetParent}return b}
function d3(a){var b;if(a.getBoundingClientRect!=null){var c=a.getBoundingClientRect();b=c.bottom-c.top}else{b=a.offsetHeight}return b}
function dsb(a,b,c,d){(Rrb?b.$f()>=_rb(a).$f():Srb?b.$f()>=(erb(),800):Vrb?b.$f()>=(erb(),900):Urb&&b.$f()>=(erb(),Qub))&&Xrb(a,b,c,d)}
function csb(a,b,c){(Rrb?b.$f()>=_rb(a).$f():Srb?b.$f()>=(erb(),800):Vrb?b.$f()>=(erb(),900):Urb&&b.$f()>=(erb(),Qub))&&Xrb(a,b,c,null)}
function xf(a,b,c){var d,e,f,g,h;for(e=(a.i==null&&(a.i=(Fg(),h=Eg.Od(a),Hg(h))),a.i),f=0,g=e.length;f<g;++f){d=e[f];b.Fe(c+'\tat '+d)}}
function hP(a,b){var c,d,e,f,g;g=new Jlb;for(d=ggb(b,'[^A-z0-9:!]+',0),e=0,f=d.length;e<f;++e){c=d[e];cP(a,c)&&($sb(g.a,c),true)}return g}
function Ilb(a,b){var c,d;d=a.a.length;b.length<d&&(b=atb(new Array(d),b));for(c=0;c<d;++c){b[c]=a.a[c]}b.length>d&&(b[d]=null);return b}
function rmb(a,b){var c,d;d=a.a.length;b.length<d&&(b=atb(new Array(d),b));for(c=0;c<d;++c){b[c]=a.a[c]}b.length>d&&(b[d]=null);return b}
function pV(a,b){var c,d;d=0;for(c=new fmb(b);c.a<c.c.a.length;){dmb(c);if(!k_(a.a,d+1)){return qtb(d,b.a.length),b.a[d]}++d}return null}
function gV(a){var b,c,d;d=a.zb;b=fh(a.Ac);for(c=a.lc.a.length-1;c>0;c--){if(fh(Dlb(Dlb(a.lc,c),0).d)<=b){return d}else{--d}}return a.zb}
function PU(a){var b,c,d,e;HT(a.Fb);for(d=(e=(new alb(a.Eb)).a.bg().Qe(),new flb(e));d.a.$e();){c=(b=d.a._e(),b.kg());ah(c.d)}Mjb(a.Eb)}
function t2(a){var b;b=iq(dq(ir,1),Jxb,20,15,[0,0,0,0]);b[0]=s2(a,Cwb);b[1]=s2(a,sxb);b[2]=s2(a,'marginBottom');b[3]=s2(a,Bwb);return b}
function xdb(){xdb=BE;udb=new ydb('INFO',0);wdb=new ydb(oAb,1);tdb=new ydb('ERROR',2);sdb=new ydb('CRITICAL',3);vdb=new ydb('SYSTEM',4)}
function QT(a,b){return $wnd.Vaadin&&$wnd.Vaadin.Flow&&$wnd.Vaadin.Flow.clients[b]&&$wnd.Vaadin.Flow.clients[b].getByNodeId(parseInt(a))}
function veb(a){if(a>=48&&a<48+$wnd.Math.min(10,10)){return a-48}if(a>=97&&a<97){return a-97+10}if(a>=65&&a<65){return a-65+10}return -1}
function BR(a,b,c){var d;d=a.e.s;!!d&&Yq(d,157)&&rY(d,a,a.k,a.b,b,c);sh((LF(),a.Zc),'c'+a.b+'r'+a.k);a.b=c;a.k=b;dh(a.Zc,'c'+a.b+'r'+a.k)}
function mS(a,b,c){var d,e,f,g;g=a3(b,c);if(g){d=(Fh(),g).getAttribute(Kub)||'';MT(a.Q.wb,d);e=a.Q.wb.a;f=a.Q.wb.b;e!=0&&f!=0&&FS(a,e,f)}}
function $cb(){$cb=BE;var b;Zcb='8.32.0';b=ggb(Zcb,'[-.]',4);Yeb(b[0]);Yeb(b[1]);try{Yeb(b[2])}catch(a){a=VD(a);if(!Yq(a,50))throw WD(a)}}
function aF(b,c){var d;if(!b.b){return}if(c==null){b.Ee(Mtb);return}try{YE(b,ftb((d=c,btb(),d)))}catch(a){a=VD(a);if(!Yq(a,89))throw WD(a)}}
function Xfb(a,b){rtb(a);if(b==null){return false}if(Wfb(a,b)){return true}return a.length==b.length&&Wfb(a.toLowerCase(),b.toLowerCase())}
function HZ(a,b){var c,d;for(d=b.keySet().Qe();d.$e();){c=d._e();a.c.contains(c)?l1((!a.F&&(a.F=new q1),a.F),c,b.get(c)):IZ(a,c,b.get(c))}}
function sY(a,b,c){var d,e,f;for(e=new fmb(b);e.a<e.c.a.length;){d=dmb(e);f=wwb+d.c+xwb+d.k;!!c&&Fpb(c.c,f)?QM(d):!!a.r&&Hjb(a.r,f)&&LM(d)}}
function r_(a){var b;if(!hW(a.V)&&!i_(a,a.V.sc,a.V.tc)&&!!a.o&&w$(a.o,DV(a.V))){b=v$(a.o,DV(a.V));if(b){a.n=true;pP(a.t,false);$U(a.V,b)}}}
function s_(a,b){var c,d;a.w.length>b?(c=a.w[b]):(c=0);a.$.length>b?(d=a.$[b]):(d=0);WW(a.V,c,d);(c!=0||d!=0)&&W2((ng(),mg),new D1(a,c,d))}
function Iib(a,b,c,d){Eib();var e,f;e=0;for(f=0;f<c;f++){e=XD(iE(YD(b[f],uAb),YD(d,uAb)),YD(rE(e),uAb));a[f]=rE(e);e=nE(e,32)}return rE(e)}
function cg(){var a;if(Xf!=0){a=Date.now();if(a-$f>2000){$f=a;_f=$wnd.setTimeout(lg,10)}}if(Xf++==0){og((ng(),mg));return true}return false}
function sS(a,b,c,d,e){a.G=b;a.I=d;a.H=c;a.J=e;US(a.B,b,c,d,e);a.ab>0&a.r>0&&US(a.D,b,c,d,e);a.ab>0&&US(a.F,b,c,d,e);a.r>0&&US(a.A,b,c,d,e)}
function QX(a,b){a._=false;a.ab=false;OT(a.$,Gxb,0);cf(a.sb,false);kL(a.sb,'');ve(a.sb,'0');qe(a.sb,'');re(a.sb,'');b&&W2((ng(),mg),new TY(a))}
function uT(a,b,c,d,e){LF();JF.Oe(b,nxb);b.__listener=a;JF.Oe(c,nxb);c.__listener=a;JF.Oe(d,nxb);d.__listener=a;JF.Oe(e,nxb);e.__listener=a}
function nZ(a,b){var c;c=Jh((Fh(),b))?LT(jh(Jh(b))):0;if(a.a.cc||c==1){return T$(a.a.a)}else if(a.a.bc||c==2){return S$(a.a.a)}return false}
function uV(a,b){var c,d;d=iV(a,b.col1,b.row1);if(!!d&&d.cellStyle!=null){return d.textColor}c=hV(a,b.col1,b.row1);if(c){return c.o}return null}
function r5(a){var b;b=(!F3&&(F3=new P3),F3).c.b[T4(new V4(a,'!new'))];if(!b){throw WD(new Z4('There is no constructor for '+a.b))}return b}
function s5(a){var b;b=(!F3&&(F3=new P3),F3).c.b[a.b.a+'.'+a.a];if(!b){throw WD(new Z4('There is no invoker for '+(a.b.b+'.'+a.a)))}return b}
function Zdb(b){var c;try{return c=$wnd.JSON.parse(b),c}catch(a){a=VD(a);if(Yq(a,21)){throw WD(new aeb("Can't parse "+b))}else throw WD(a)}}
function lQ(b){var c,d,e;try{e=yQ(b);d=b5(e);return d}catch(a){a=VD(a);if(Yq(a,79)){c=a;throw WD(new kfb(Vwb+Aeb(b.sg)+Wwb,c))}else throw WD(a)}}
function Phb(a){shb();if(a.length==0){this.e=0;this.d=1;this.a=iq(dq(ir,1),Jxb,20,15,[0])}else{this.e=1;this.d=a.length;this.a=a;vhb(this)}}
function cV(a){var b,c,d;d=hV(a,a.sc,a.tc);c=lh(d.d).assignedElements();if(c!=null&&c.length==1){b=c[0];b.nodeType==1&&(b.focus(),undefined)}}
function W$(a){var b,c;if(i_(a,a.V.sc,a.V.tc)){if(!a.K){return}c=new H1(a);qb(c,Qub);a.K=false;T2(a);b=q3(ry);Tab(b.K,iq(dq(MB,1),Etb,1,5,[]))}}
function nV(a){var b;b=new Jlb;!!a.S&&a.S.Vc&&Blb(b,a.S);Clb(b,new alb(a.Cc));!!a.T&&Clb(b,new alb(a.T));!!a.Dc&&Clb(b,new alb(a.Dc));return b}
function TU(a){var b,c,d,e;for(e=a.Uc>0?a.Uc+1:1;e<=a.zb;e++){d=new Jlb;for(c=1;c<=a.ob;c++){b=new XM(a,c,e);Vg(a.c,b.d);$sb(d.a,b)}Blb(a.d,d)}}
function ZU(a){var b,c,d,e;for(e=1;e<=a.Uc;e++){d=new Jlb;for(c=a.ob>0?a.ob+1:1;c<=a.xb;c++){b=new XM(a,c,e);Vg(a.Rc,b.d);$sb(d.a,b)}Blb(a.Sc,d)}}
function O6(){AI.call(this);new L6(200,new V6);(LF(),this.Zc).tabIndex=-1;!this.b&&(this.b=h6(this,iq(dq(Js,1),Etb,0,2,[])));q6(this.b,this.Zc)}
function Yp(a,b){switch(b.c){case 0:{a['dir']='rtl';break}case 1:{a['dir']='ltr';break}case 2:{Xp(a)!=(aq(),Zp)&&(a['dir']='',undefined);break}}}
function zK(a){if(a.i){if(a.a.H){Vg($doc.body,a.a.C);a.f=KG(a.a.D);tK();a.b=true}}else if(a.b){_g($doc.body,a.a.C);CM(a.f.a);a.f=null;a.b=false}}
function e1(a,b,c,d){if(a.C){if(a.a!=c){iU(a.U,b,d);gU(a.U,c)}else (a.S==null||!jmb(a.S,b))&&iU(a.U,b,false)}else{XT(a.U,b);gU(a.U,c)}a.S=b;a.a=c}
function TL(){var a,b;TL=BE;DF();new zF((ag(),a='__gwtDevModeHook:'+$moduleName+':moduleBase',b=$wnd||self,b[a]||$moduleBase)+'clear.cache.gif')}
function tV(a,b){var c,d;d=iV(a,b.col1,b.row1);if(!!d&&d.cellStyle!=null){return d.cellStyle}c=hV(a,b.col1,b.row1);if(c){return c.b}return 'cs0'}
function u5(a){var b;b=(!F3&&(F3=new P3),F3).c.e[a.b.a+'.'+a.a];if(!b){throw WD(new Z4('There is no return type for '+(a.b.b+'.'+a.a)))}return b}
function Wq(a,b){if(br(a)){return !!Vq[b]}else if(a.tg){return !!a.tg[b]}else if($q(a)){return !!Uq[b]}else if(Zq(a)){return !!Tq[b]}return false}
function BV(a){var b=a.sheet.cssRules?a.sheet.cssRules:a.sheet.rules;var c=[];for(var d=0;d<b.length;d++){c.push(b[d].cssText)}return c.join(' ')}
function HT(a){var b=a.sheet.cssRules?a.sheet.cssRules:a.sheet.rules;while(b.length>0){a.sheet.deleteRule?a.sheet.deleteRule(0):a.sheet.removeRule(0)}}
function tX(a,b){a.ob=b;rS(a.zc,b);b>0?OT(a.$,'.'+a.Bc+' .top-left-pane .cell.col'+b+', .'+a.Bc+' .bottom-left-pane .cell.col'+b,1):OT(a.$,Gxb,1)}
function aY(a,b,c,d,e){var f,g,h;if(b==16){JI(a.rb,e);g=wwb+c+xwb+d;h=sV(a,g);h?(f=h.d):(f=hV(a,c,d).d);dK(a.qb,new NY(a,f))}else{iN(a.qb,false)}}
function Fsb(a,b,c){if(c.nodeType==1&&(Fh(),c).tagName=='SLOT'&&Wfb(((Fh(),c).getAttribute(fyb)||'').substr(0,pyb.length),pyb)){a.a=true;b.Tf(c)}}
function TM(a,b,c,d){a.c=b;a.k=c;a.b=!d?'cs0':d.cellStyle;a.p=!d?null:d.value;a.f=!!d&&d.needsMeasure;a.o=!d?null:d.textColor;VM(a);UM(a);a.g=true}
function WX(a,b,c){var d,e,f;for(e=new fmb(b);e.a<e.c.a.length;){d=dmb(e);f=wwb+d.c+xwb+d.k;!!c&&Hjb(c.a,f)?RM(d):!!a.tb&&a.tb.contains(f)&&MM(d)}}
function WW(a,b,c){a.Db=false;Mjb(a.e);Mjb(a.rc);Xg(a.Nb)&&(a.Mb=(a.Nb.offsetWidth||0)|0);LW(a);uS(a.zc,1,1,1,1);a.V=-1;W2((ng(),mg),new lZ(a,b,c))}
function Tp(a){var b,c,d;Mf.call(this,Up(a),a.isEmpty()?null:a.Qe()._e());this.a=a;d=0;for(c=a.Qe();c.$e();){b=c._e();if(d++==0){continue}tf(this,b)}}
function oN(a,b,c){var d;d=(LF(),a.Zc).style;d[Bwb]=(eN==-1&&(eN=tN(_vb)),-eN+(hm(),hwb));d[Cwb]=(fN==-1&&(fN=tN(awb)),-fN+hwb);cK(a,b,c);kN(a,a.G?0:1)}
function OV(a,b,c){var d,e,f,g;g=a3(b,c);if(g){d=(Fh(),g).getAttribute(Kub)||'';MT(a.wb,d);e=a.wb.a;f=a.wb.b;if(e!=0&&f!=0){U_(a.a,e,f);a.Lc=e;a.Mc=f}}}
function Vib(a,b){var c,d,e,f;f=a.size();b.length<f&&(b=atb(new Array(f),b));e=b;d=a.Qe();for(c=0;c<f;++c){e[c]=d._e()}b.length>f&&(b[f]=null);return b}
function Ie(a,b,c){var d;d=bG(c.b);d==-1?we(a,c.b):a.Wc==-1?YF((LF(),a.Zc),d|(a.Zc.__eventBits||0)):(a.Wc|=d);return Bp(!a.Xc?(a.Xc=new Ep(a)):a.Xc,c,b)}
function sq(a,b){var c,d,e;if(b<=22){c=a.l&(1<<b)-1;d=e=0}else if(b<=44){c=a.l;d=a.m&(1<<b-22)-1;e=0}else{c=a.l;d=a.m;e=a.h&(1<<b-44)-1}return nq(c,d,e)}
function U$(a,b,c){a.A=false;vP(a.t);a.s=false;if(!hW(a.V)){b==null&&(b='');a.P=Wfb(b.substr(0,1),'=')||Wfb(b.substr(0,1),'+');QX(a.V,c);a.P||vY(a.V,b)}}
function E7(a){var b,c,d;b=osb(Bsb(new Esb(null,new Qqb(D7(a,new _7))),new Y7));d=fq(hr,Etb,20,b.length,15,1);for(c=0;c<b.length;c++){d[c]=b[c]}return d}
function YS(a){var b,c;c=e_(a.p.q,a.b);for(b=a.b+1;b<=a.c;b++){c+=e_(a.p.q,b)}a.k.style[Bub]=c+1+(hm(),hwb);a.q.style[Bub]=c+1+hwb;a.a.style[Bub]=c+1+hwb}
function gq(a,b){var c=new Array(b);var d;switch(a){case 14:case 15:d=0;break;case 16:d=false;break;default:return c;}for(var e=0;e<b;++e){c[e]=d}return c}
function dgb(a,b,c){var d,e;d=egb(b,'([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])','\\\\$1');e=egb(egb(c,'\\\\','\\\\\\\\'),Rtb,'\\\\$');return egb(a,d,e)}
function iY(a){var b,c;c=QF(ie(a.sb));a.tc<=a.Uc?a.sc<=a.ob?(b=a.Pc):(b=a.Rc):a.sc<=a.ob?(b=a.c):(b=a.Ac);if(c!=b){_g(c,ie(a.sb));LF();Vg(b,VF(ie(a.sb)))}}
function T2(a){var b,c,d,e;e=(Y1(),Y1(),X1);for(c=new fmb(e);c.a<c.c.a.length;){b=dmb(c);d=b.a;!a?null:(A2(d,(LF(),a.Zc).tkPid),null);continue}return null}
function HV(a){var b,c,d,e,f;d=a.db;b=ih(a.Ac);for(f=new fmb(a.lc);f.a<f.c.a.length;){e=dmb(f);c=pV(a,e);if(!!c&&ih(c.d)>=b){return d}else{++d}}return a.db}
function w1(a,b,c){var d,e;if(a.a.J){for(e=new fmb(a.a.J);e.a<e.c.a.length;){d=dmb(e);if(d.col1<=b&&d.row1<=c&&d.col2>=b&&d.row2>=c){return d}}}return null}
function ueb(a,b,c){var d,e;d=Sfb(a,b++);if(d>=55296&&d<=56319&&b<c&&web(e=(xtb(b,a.length),a.charCodeAt(b)))){return Ttb+((d&1023)<<10)+(e&1023)}return d}
function ceb(a){var b;if(a==null){return false}b=typeof(a);return Wfb(b,Gtb)||Wfb(b,Htb)||Wfb(b,Jtb)||a.$implements__java_io_Serializable||Array.isArray(a)}
function BK(a){zK(a);if(a.i){ie(a.a).style[Sub]=Uub;a.a.O!=-1&&a.a.Ye(a.a.I,a.a.O);VH((SK(),WK()),a.a)}else{a.c||WH((SK(),WK()),a.a)}ie(a.a).style[kwb]=kvb}
function Pcb(a,b){var c,d;if(b.indexOf('android')==-1){return}c=Wcb(b,b.indexOf('android ')+8,b.length);c=Wcb(c,0,c.indexOf(';'));d=ggb(c,'\\.',0);Tcb(a,d)}
function aV(a,b,c){var d;++b;++c;d=wwb+b+xwb+c;if(Hjb(a.b,d)){a.o=true;a.Q=Gjb(a.b,d);_N(a.Q,true)}else{a.o=true;a.k=b;a.n=c;HX(a,b,c);a.Q=a.q;_N(a.q,true)}}
function IW(a){var b,c,d,e;if(a.Dc){for(e=(c=(new alb(a.Dc)).a.bg().Qe(),new flb(c));e.a.$e();){d=(b=e.a._e(),b.kg());d.e.N&&!!d.d&&YV(d.d,d.b,d.k)&&uR(d)}}}
function sV(a,b){var c,d,e,f;for(d=(f=(new alb(a.Eb)).a.bg().Qe(),new flb(f));d.a.$e();){c=(e=d.a._e(),e.kg());if(Wfb(b,wwb+c.c+xwb+c.k)){return c}}return null}
function D7(a,b){var c,d,e,f,g;d=new Jlb;if(a==null||a.length==0||Wfb(Mtb,a)){return d}e=Zdb(a);for(c=0;c<e.length;c++){f=(g=e[c],g);Blb(d,b.Rf(f))}return d}
function xq(a,b){var c,d,e;e=a.h-b.h;if(e<0){return false}c=a.l-b.l;d=a.m-b.m+(c>>22);e+=d>>22;if(e<0){return false}a.l=c&yvb;a.m=d&yvb;a.h=e&zvb;return true}
function LT(b){try{var c=b.charAt(0);if(c==='r'){c=b.charAt(1);if(c==='h'){return 1}}else if(c==='c'){c=b.charAt(1);if(c==='h'){return 2}}}catch(a){}return 0}
function XK(a){SK();var b;b=Fjb(QK,a);if(b){if(!a||(LF(),b.Zc==a)){return b}}Njb(QK)==0&&IG(new $K);!a?(b=new aL):(b=new TK(a));Ijb(QK,a,b);apb(RK,b);return b}
function yQ(b){var c;try{return u5(new V4(new c5(b.sg),'getState'))}catch(a){a=VD(a);if(Yq(a,79)){c=a;throw WD(new kfb(Vwb+Aeb(b.sg)+Wwb,c))}else throw WD(a)}}
function tS(a,b){if(b==(le(a.B)||!!a.A&&le(a.A)||!!a.F&&le(a.F)||!!a.D&&le(a.D))){return}WS(a.B,b);!!a.D&&WS(a.D,b);!!a.F&&WS(a.F,b);!!a.A&&WS(a.A,b);vS(a,!b)}
function B3(a,b){var c=a.split('.');while(typeof b==Btb){var d=c.shift();if(!(d in b)){return false}else if(c.length==0){return true}else{b=b[d]}}return false}
function AT(a,b){var c,d;c=yj(b.a);if(a.b._){if(c==13){x_(a.b.a,(d=iL(a.b.sb),d==null?'':d),zj(b.a))}else{MV(a.b);zP(a.a,true);tP(a.a);AP(a.a);WO(a.a)}}Dj(b.a)}
function eU(a,b){if(b==null){a.f.style[Zub]=(zk(),zub);a.c.style[sxb]=(hm(),iwb)}else{a.c.style[sxb]=(hm(),'206.0px');a.f.style[Zub]=(zk(),'inline');xh(a.f,b)}}
function xZ(a,b,c){var d;this.a=b;d=Ri($doc,'slot');d.setAttribute(fyb,a);pe(this,(LF(),d));b.setAttribute('slot',a);Je(this,new zZ(c,b),(!dp&&(dp=new An),dp))}
function c0(a,b){var c,d,e,f;if(!b||b.a.c+b.c.c==0){return}for(d=(f=(new alb(b)).a.bg().Qe(),new flb(f));d.a.$e();){c=(e=d.a._e(),e.kg());!!c&&MW(a.V,c.c.a,c)}}
function fW(a,b){var c,d,e,f;for(d=(f=(new alb(a.Eb)).a.bg().Qe(),new flb(f));d.a.$e();){c=(e=d.a._e(),e.kg());if(Wfb(b,wwb+c.c+xwb+c.k)){return true}}return false}
function NU(a){var b,c,d,e;for(c=(e=(new Rkb(a.t.a)).a.bg().Qe(),new Xkb(e));c.a.$e();){b=(d=c.a._e(),d.jg());sh(b.d,yxb);b.d.part.remove(yxb)}Mjb(a.t.a);Mjb(a.u.a)}
function _D(a,b){var c;if(eE(a)&&eE(b)){c=a/b;if(Evb<c&&c<Cvb){return c<0?$wnd.Math.ceil(c):$wnd.Math.floor(c)}}return $D(oq(eE(a)?pE(a):a,eE(b)?pE(b):b,false))}
function Scb(a,b){var c,d;if(b.indexOf('os ')==-1||b.indexOf(' like mac')==-1){return}c=Wcb(b,b.indexOf('os ')+3,b.indexOf(' like mac'));d=ggb(c,'_',0);Tcb(a,d)}
function ZW(a){var b,c,d;d=new Jlb;WU(a,a.w,d);c=BU(a);XU(a,d,a.db,a.zb,c);b=AU(a);VU(a,d,a.bb,a.xb,b);a.ob>0&&VU(a,d,1,a.ob,0);a.Uc>0&&XU(a,d,1,a.Uc,0);aX(a.w,d)}
function Aq(a,b){var c,d,e,f,g,h,i,j;i=a.h>>19;j=b.h>>19;if(i!=j){return j-i}e=a.h;h=b.h;if(e!=h){return e-h}d=a.m;g=b.m;if(d!=g){return d-g}c=a.l;f=b.l;return c-f}
function JX(a,b,c,d,e,f){var g,h,i,j,k;for(k=e;k<=f;k++){for(g=c;g<=d;g++){j=wwb+g+xwb+k;if(Fpb(b.c,j)){fW(a,j)?(h=sV(a,j)):(h=hV(a,g,k));i=Gpb(b.c,j);uU(a,h,i)}}}}
function Y6(a){if(a.b){pb(a.b);a.b=null}if((!a.M&&(a.M=lQ(a)),a.M).i>=0){a.b=new m7(a);rb(a.b,(!a.M&&(a.M=lQ(a)),a.M).i)}else{null.vg(new _cb(a.I,(yeb(hB),hB.k)))}}
function hjb(a,b){var c,d,e;c=b.jg();e=b.kg();d=a.get(c);if(!(cr(e)===cr(d)||e!=null&&M(e,d))){return false}if(d==null&&!a.containsKey(c)){return false}return true}
function eJ(a,b){Pe(a,Ti($doc));fG((LF(),a.Zc),Mvb);a.Wc==-1?YF(a.Zc,133398655|(a.Zc.__eventBits||0)):(a.Wc|=133398655);!!a.a&&(a.Zc[Zvb]='',undefined);rj(a.Zc,b.a)}
function xU(a,b,c){var d,e;e=a.Uc>=c.b;d=a.ob>=c.a;e&&d?Vg(a.Pc,(LF(),c.Zc)):e?Vg(a.Rc,(LF(),c.Zc)):d?Vg(a.c,(LF(),c.Zc)):Vg(a.Ac,(LF(),c.Zc));Qe(c,a);Jjb(a.Cc,b,c)}
function Oe(a){if(!a.Yc){SK();bpb(RK,a)&&UK(a)}else if(Yq(a.Yc,32)){a.Yc.Re(a)}else if(a.Yc){throw WD(new jfb("This widget's parent does not implement HasWidgets"))}}
function y5(a,b){var c;if(_F(b.d)==8){CM(a.e.a);c=b3(b.d);!!a.d&&c==a.d?(a.g=true):bsb(ksb((yeb(Ez),Ez.k)),'Ignoring mouseup from '+c+' when mousedown was on '+a.d)}}
function FJ(a,b){var c,d,e,f;if(!a.i){return}d=Elb(a.b,b,0);if(d==-1){return}c=a.i?a.d:OF(a.d);f=(LF(),JF.He(c,d));e=JF.Ie(f);e==2&&_g(f,JF.He(f,1));b.Zc['colSpan']=2}
function _R(a){var b;if(a.d.n){a.d.n=false;LW(a.c)}if(!hW(a.c)&&!l_(a.d)&&!!a.d.o&&w$(a.d.o,DV(a.c))){b=v$(a.d.o,DV(a.c));if(b){a.d.n=true;pP(a.d.t,false);$U(a.c,b)}}}
function V5(a,b,c){var d,e,f;$wnd.Math.abs(b-c);e=350;e<=0&&(e=1);bsb(ksb((yeb(Tz),Tz.k)),'Animate '+e+' '+c+' '+b);f=-b+a.n;d=-c+a.n;if(S5){d-=a.n;f-=a.n}f6(a,e,d,f)}
function iib(a){var b,c,d;if(ZD(a,0)>=0){c=_D(a,Dvb);d=hE(a,Dvb)}else{b=nE(a,1);c=_D(b,500000000);d=hE(b,500000000);d=XD(lE(d,1),YD(a,1))}return kE(lE(d,32),YD(c,uAb))}
function xE(b,c,d,e){wE();var f=uE;$moduleName=c;$moduleBase=d;PD=e;function g(){for(var a=0;a<f.length;a++){f[a]()}}
if(b){try{Atb(g)()}catch(a){b(c,a)}}else{Atb(g)()}}
function Hg(a){var b,c,d,e;b='Gg';c='Gf';e=$wnd.Math.min(a.length,5);for(d=e-1;d>=0;d--){if(Wfb(a[d].d,b)||Wfb(a[d].d,c)){a.length>=d+1&&a.splice(0,d+1);break}}return a}
function $m(a,b,c){var d,e,f,g,h;if(Xm){h=yo(Xm,(Fh(),a).type);if(h){for(g=h.Qe();g.$e();){f=g._e();d=f.a.a;e=f.a.b;Ym(f.a,a);Zm(f.a,c);Ke(b,f.a);Ym(f.a,d);Zm(f.a,e)}}}}
function Rcb(b,c){b.u=-1;b.v=-1;if(c.length>2){try{b.u=Yeb(c[1])}catch(a){a=VD(a);if(!Yq(a,21))throw WD(a)}try{b.v=Yeb(c[0])}catch(a){a=VD(a);if(!Yq(a,21))throw WD(a)}}}
function uU(a,b,c){var d;if(!b||!c){return}OM(b,null);d=c.Yc;if(d){if(a==d){Vg(b.d,(LF(),c.Zc))}else{Oe(c);Vg(b.d,(LF(),c.Zc));Qe(c,a)}}else{Vg(b.d,(LF(),c.Zc));Qe(c,a)}}
function ijb(a,b,c){var d,e,f;for(e=a.bg().Qe();e.$e();){d=e._e();f=d.jg();if(cr(b)===cr(f)||b!=null&&M(b,f)){if(c){d=new plb(d.jg(),d.kg());e.af()}return d}}return null}
function Kg(a){Fg();var b=a.backingJsObject;if(b&&b.stack){var c=b.stack;var d=b+'\n';c.substring(0,d.length)==d&&(c=c.substring(d.length));return c.split('\n')}return []}
function Aib(a,b,c,d,e){var f,g;f=0;for(g=0;g<e;g++){f=XD(f,oE(YD(b[g],uAb),YD(d[g],uAb)));a[g]=rE(f);f=mE(f,32)}for(;g<c;g++){f=XD(f,YD(b[g],uAb));a[g]=rE(f);f=mE(f,32)}}
function xF(){xF=BE;new nF('');tF=new RegExp('[&<>\'"]');rF=new RegExp('&','g');sF=new RegExp('>','g');uF=new RegExp('<','g');wF=new RegExp("'",'g');vF=new RegExp('"','g')}
function dh(a,b){var c,d;b=Dh(b);d=a.className||'';c=Bh(d,b);if(c==-1){d.length>0?(a.className=d+' '+b||'',undefined):(a.className=b||'',undefined);return true}return false}
function DJ(a){var b,c,d;if(!a.g){return}c=Elb(a.f,a.g,0);b=c;while(true){c=c+1;c==a.f.a.length&&(c=0);if(c==b){d=Dlb(a.f,b);break}else{d=Dlb(a.f,c);if(d.b){break}}}CJ(a,d)}
function EJ(a){var b,c,d;if(!a.g){return}c=Elb(a.f,a.g,0);b=c;while(true){c=c-1;c<0&&(c=a.f.a.length-1);if(c==b){d=Dlb(a.f,b);break}else{d=Dlb(a.f,c);if(d.b){break}}}CJ(a,d)}
function k$(a){var b,c,d,e,f;for(e=(f=(new Rkb(a)).a.bg().Qe(),new Xkb(f));e.a.$e();){d=(c=e.a._e(),c.jg());b=(LF(),lj($doc,d));Vg(b,d==null?qjb(opb(a.a,null)):Gpb(a.c,d))}}
function Z6(a){var b,c,d;d=kh($doc.getElementsByTagName(Dyb)[0],oub);for(b=0;b<d.length;b++){c=d[b];if(Wfb(Eyb,c.rel)&&Wfb(Qxb,c.type)&&Wfb(a,c.href)){return c}}return null}
function mG(a,b){var c,d,e,f,g;if(!!gG&&!!a&&Dp(a,gG)){c=hG.a;d=hG.b;e=hG.c;f=hG.d;iG(hG);jG(hG,b);Cp(a,hG);g=!(hG.a&&!hG.b);hG.a=c;hG.b=d;hG.c=e;hG.d=f;return g}return true}
function RR(a,b,c){var d;d=f_(a.d,b,c);if(d){a.a=b;a.b=c;b=d.col1;c=d.row1}else{a.a=0;a.b=0}VX(a.c,b,c);gX(a.c,b,c);m1(a.d,b,c,null);_R(a);Xab(a.d.W,c,b,false);qb(a.d.r,200)}
function xS(a,b){if(b==((LF(),a.Zc).style.display!=zub||!!a.a&&le(a.a)||!!a.X&&le(a.X)||!!a.W&&le(a.W))){return}Ee(a.Zc,b);!!a.W&&ue(a.W,b);!!a.X&&ue(a.X,b);!!a.a&&ue(a.a,b)}
function _U(a,b,c){var d,e;a.R=true;OT(a.$,Gxb,0);a.S=b;OM(c,null);e=b.Yc;!!e&&a!=e&&Oe(b);d=c.d;dh(d,Hxb);Vg(d,(LF(),b.Zc));(!e||!!e&&a!=e)&&Qe(b,a);W2((ng(),mg),new TY(a))}
function $5(a){var b,c,d;if(S5){a.q[Jzb]=a.c}else{for(c=new fmb(a.g);c.a<c.c.a.length;){b=dmb(c);d=b.style;d[Hwb]='translate3d(0,0,0)'}zh(a.q,a.c)}T5=null;CM(a.d.a);a.d=null}
function Cpb(){function b(){try{return (new Map).entries().next().done}catch(a){return false}}
if(typeof Map===Itb&&Map.prototype.entries&&b()){return Map}else{return Dpb()}}
function G5(a,b){var c,d,e,f;if(!a.a.s){return false}f=uj(b.a)[0];d=_h((Fh(),f).clientX||0)-a.a.C;e=_h(f.clientY||0)-a.a.D;c=d*d+e*e;if(c>a.a.o*a.a.o){return true}return false}
function yV(a){var b,c,d,e;if(a.lc.a.length==0){return a.xb}d=a.xb;b=Dlb(a.lc,0);e=b.size();for(c=e-1;c>0;c--){if(hh(b.getAtIndex(c).d)<hh(a.Ac)){return d}else{--d}}return a.xb}
function KM(a){var b;if(a.i){VM(a);!!a.j&&Vg(a.d,a.j)}b=Fjb(a.n.rc,new _M(a.p,a.b,a.k,a.c));if(!b){b=vfb((a.d.scrollWidth||0)|0);Ijb(a.n.rc,new _M(a.p,a.b,a.k,a.c),b)}return b.a}
function Wib(a){var b,c,d;d=new Vqb('[',']');for(c=a.Qe();c.$e();){b=c._e();Uqb(d,b===a?'(this Collection)':b==null?Mtb:EE(b))}return !d.a?d.c:d.e.length==0?d.a.a:d.a.a+(''+d.e)}
function kH(){hH=Atb(pH);iH=Atb(qH);var c=GH;var d=eH;c(d,function(a,b){d[a]=Atb(b)});var e=gH;c(e,function(a,b){e[a]=Atb(b)});c(e,function(a,b){$wnd.addEventListener(a,b,true)})}
function SJ(a,b){pe(this,(LF(),aj($doc)));se(this,ye(this.Zc)+'-'+ewb,false);wh(this.Zc,a);this.Zc.className='gwt-MenuItem';th(this.Zc,'id',gj($doc));Qd();Db(ld,this.Zc);this.a=b}
function kY(a,b){var c,d,e,f,g;for(f=(g=(new alb(a.Eb)).a.bg().Qe(),new flb(g));f.a.$e();){e=(c=f.a._e(),c.kg());d=wwb+e.c+xwb+e.k;!!b&&Fpb(b.c,d)?QM(e):!!a.r&&Hjb(a.r,d)&&LM(e)}}
function lV(a){var b,c;if(a.K.a.length==0){return 0}b=0;while(k_(a.a,b+1)){++b}c=new J2;!!a.ib&&a.ib.a.length>0&&b<=a.ib.a.length?G2(c,Dlb(a.ib,b)):G2(c,Dlb(a.K,b));return dr(c.b)}
function zV(a){var b,c;if(a.jc.a.length==0){return 0}b=0;while(m_(a.a,b+1)){++b}c=new J2;!!a.jb&&a.jb.a.length>0&&b<=a.jb.a.length?G2(c,Dlb(a.jb,b)):G2(c,Dlb(a.jc,b));return dr(c.e)}
function _$(a){var b,c;if(a.t.f);else if(a.A||a.s){a.c=true;b=(c=iL(a.t.j),c==null?'':c);Yab(a.W,a.V.tc,a.V.sc,b);U$(a,b,true)}else if(a.n){a.n=false;a.V.Gc&&LW(a.V);pP(a.t,true)}}
function p2(a){if(!a.b){return false}if(a.a.t==5&&a.a.s&&l2(a)>=534){return false}if((a.a.t==4||a.a.t==2&&j2()>2)&&a.a.s&&a.a.u>=6){return false}if(a.a.j){return false}return true}
function jg(a,b){ag();var c;c=qf;if(c){if(c==Zf){return}dsb(c.a,(erb(),crb),a.Id(),a);return}if(b){ig(Yq(a,81)?a.Kd():a)}else{aF((Dgb(),Cgb),'Uncaught exception ');wf(a,Cgb,'','')}}
function Lib(a,b){Eib();var c,d;d=(shb(),nhb);c=a;for(;b>1;b>>=1){(b&1)!=0&&(d=Fhb(d,c));c.d==1?(c=Fhb(c,c)):(c=new Phb(Nib(c.a,c.d,fq(ir,Jxb,20,c.d<<1,15,1))))}d=Fhb(d,c);return d}
function dU(a,b){if(a.s<b){do{a.t-=bU(a,a.s);++a.s}while(a.s<b);a.c.style[Bwb]=a.t+(hm(),hwb)}else if(a.s>b){do{--a.s;a.t+=bU(a,a.s)}while(a.s>b);a.c.style[Bwb]=a.t+(hm(),hwb)}jU(a)}
function q3(a){p3();bsb(o3,(yeb(a),'asking for '+a.k));if(ry==a){bsb(o3,(yeb(QA),'Returning '+QA.k+' from fake RpcProxy'));return new mcb}throw WD(new jfb(''+a+' is not supported'))}
function yg(b,c){var d,e,f,g;for(e=0,f=b.length;e<f;e++){g=b[e];try{g[1]?g[0].Ld()&&(c=xg(c,g)):g[0].Md()}catch(a){a=VD(a);if(Yq(a,19)){d=a;ag();jg(d,true)}else throw WD(a)}}return c}
function wW(a){var b,c;if(a.Db){b=(a.Ac.offsetHeight||0)|0;c=(a.Ac.offsetWidth||0)|0;if(b>a.pc||c>a.qc){a.pc=b;a.qc=c;a.Pb=-a.a.i;a.Qb=-a.a.L;K6(a.mc)}else{a.pc=b;a.qc=c}FW(a);xY(a)}}
function _hb(a,b){var c,d,e;e=a.e;if(b==0||a.e==0){return}d=b>>5;a.d-=d;if(!eib(a.a,a.d,a.a,d,b&31)&&e<0){for(c=0;c<a.d&&a.a[c]==-1;c++){a.a[c]=0}c==a.d&&++a.d;++a.a[c]}vhb(a);a.b=-2}
function bib(a,b,c,d){var e,f,g;if(d==0){Egb(b,0,a,c,a.length-c)}else{g=32-d;a[a.length-1]=0;for(f=a.length-1;f>c;f--){a[f]|=b[f-c-1]>>>g;a[f-1]=b[f-c-1]<<d}}for(e=0;e<c;e++){a[e]=0}}
function tf(a,b){stb(b,'Cannot suppress a null exception.');mtb(b!=a,'Exception can not suppress itself.');if(a.g){return}a.j==null?(a.j=iq(dq(TB,1),Etb,19,0,[b])):(a.j[a.j.length]=b)}
function eg(b,c,d){var e,f;e=cg();try{if(qf){try{return bg(b,c,d)}catch(a){a=VD(a);if(Yq(a,19)){f=a;jg(f,true);return undefined}else throw WD(a)}}else{return bg(b,c,d)}}finally{fg(e)}}
function dO(a,b,c,d){a.c=b;a.d=c;a.b=d;(LF(),a.Zc).style[$ub]=lvb;!!a.u&&(a.u.style[$ub]=lvb,undefined);a.i.style[$ub]=(vm(),lvb);rN(a);SN(a.Zc);a.k=nh(a.Zc,gwb);a.n=nh(a.Zc,yub);YN(a)}
function H3(a,b){var c,d,e;if(a.b.a.length!=0){for(d=new fmb(a.b);d.a<d.c.a.length;){c=dmb(d);e=null.vg();if(Wfb(b.substr(0,e.length),e)){J3(a,null.wg+' '+null.wg);Hlb(a.b,c);return}}}}
function Cp(b,c){var d,e;!c.e||c.pe();e=c.f;Um(c,b.b);try{Kp(b.a,c)}catch(a){a=VD(a);if(Yq(a,91)){d=a;throw WD(new Vp(d.a))}else throw WD(a)}finally{e==null?(c.e=true,c.f=null):(c.f=e)}}
function tN(b){try{var c=$wnd.document.body;var d=c.currentStyle?c.currentStyle:getComputedStyle(c);if(d&&d.position=='relative'){return c.getBoundingClientRect()[b]}}catch(a){}return 0}
function lY(a,b){var c,d,e,f,g;for(f=(g=(new alb(a.Eb)).a.bg().Qe(),new flb(g));f.a.$e();){e=(c=f.a._e(),c.kg());d=wwb+e.c+xwb+e.k;!!b&&Hjb(b.a,d)?RM(e):!!a.tb&&a.tb.contains(d)&&MM(e)}}
function YO(a){var b,c,d,e;for(c=(e=(new Rkb(a.F.a)).a.bg().Qe(),new Xkb(e));c.a.$e();){b=(d=c.a._e(),d.jg());b.d.style[Nwb]='';b.d.style[Owb]=''}Mjb(a.F.a);a.i.a.length=0;Mjb(a.D);$g(a.r)}
function vY(a,b){var c,d,e;e=CV(a);(_V(a,a.sc,a.tc)||$V(a,a.sc,a.tc))&&!!e&&!SV(a,wwb+a.sc+xwb+a.tc)&&OM(e,b);d=a.Uc>0?0:a.bb;for(;d<a.sc;d++){c=hV(a,d,a.tc);!!c&&(c.g=true)}pY(a,false)}
function W1(){var a=document.createElement(zyb);var b=['animation','oAnimation','mozAnimation','webkitAnimation'];for(var c=0;c<b.length;c++){if(a.style[b[c]]!==undefined){return b[c]}}}
function ngb(a){var b,c;if(a>=Ttb){b=55296+(a-Ttb>>10&1023)&Utb;c=56320+(a-Ttb&1023)&Utb;return String.fromCharCode(b)+(''+String.fromCharCode(c))}else{return String.fromCharCode(a&Utb)}}
function Mrb(a,b){var c,d,e,f;c=Gjb(a.a,b);if(!c){d=new jsb(b);e=(Wrb(),Trb)?null:d.c;f=igb(e,0,$wnd.Math.max(0,agb(e,ngb(46))));fsb(d,Mrb(a,f));Jjb(a.a,Trb?null:d.c,d);return d}return c}
function QV(a,b,c){var d;d=a.a.O;while(a.Ab<c&&a.zb<d){if(a.eb+AV(a,a.db)<b){a.eb+=AV(a,a.db);++a.db}++a.zb;a.Ab+=AV(a,a.zb)}while(b>a.eb+AV(a,a.db)&&a.db<d){a.eb+=AV(a,a.db);++a.db}$W(a)}
function nY(a,b){var c,d,e,f;e=wwb+b.col1+xwb+b.row1;f=Fjb(a.Eb,vfb(b.id));Kjb(a.Kb,b);mY(a,b,f);d=f.d;if(Hjb(a.b,e)){c=Gjb(a.b,e);Wfb(Hj(d.style),(zk(),zub))?(iN(c,false),ah(c.i)):YN(c)}}
function rJ(a){var b,c,d;CJ(a,null);b=a.i?a.d:OF(a.d);while(LF(),JF.Ie(b)>0){_g(b,JF.He(b,0))}for(d=new fmb(a.b);d.a<d.c.a.length;){c=dmb(d);c.Zc['colSpan']=1}a.f.a.length=0;a.b.a.length=0}
function n3(a,b,c){var d,e,f,g,h;for(f=(xdb(),iq(dq(cB,1),Etb,77,0,[udb,wdb,tdb,sdb,vdb])),g=0,h=f.length;g<h;++g){e=f[g];d=b+'-'+jgb(e.b!=null?e.b:''+e.c,(lqb(),jqb));c==e?dh(a,d):sh(a,d)}}
function Wob(){Wob=BE;Uob=iq(dq(SB,1),Stb,2,6,['Sun','Mon','Tue','Wed','Thu','Fri','Sat']);Vob=iq(dq(SB,1),Stb,2,6,['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'])}
function FL(){SH.call(this);this.d=(LF(),cj($doc));this.c=_i($doc);Vg(this.d,VF(this.c));oe(this,this.d);this.a=(RI(),NI);this.b=(UI(),TI);this.d['cellSpacing']='0';this.d['cellPadding']='0'}
function q2(){f2();var a;this.a=new Ycb(r2());if(this.a.j){a=i2();a!=-1&&Xcb(this.a,a)}this.a.e?(this.b=tvb in window):this.a.j?(this.b=!!navigator.msMaxTouchPoints):(this.b=!this.a.p&&g2())}
function W5(a){var b,c,d,e,f;if(a.k<3){bsb(ksb((yeb(Tz),Tz.k)),'Not enough data for speed calculation');return 0}d=a.k%3;b=a.s[d];c=a.b[d];d+=3;--d;d=d%3;e=a.s[d];f=a.b[d];return (b-e)/(f-c)}
function u8(a,b,c){this.c=new Zob;this.a=new Zob;this.b=new Zob;this.d=fq(SB,Stb,2,0,6,1);!!a&&(this.e=new RZ,OZ(this.e,a,b,c),mQ(this.e,new b2),this.f=DQ(this.e),VH(XK(b),this.f),undefined)}
function cI(b,c){aI();var d,e,f,g;d=null;for(g=b.Qe();g.$e();){f=g._e();try{c.Se(f)}catch(a){a=VD(a);if(Yq(a,19)){e=a;!d&&(d=new dpb);Ijb(d.a,e,d)}else throw WD(a)}}if(d){throw WD(new bI(d))}}
function i5(a,b,c){var d,e,f,g;d=(!F3&&(F3=new P3),F3).c.d[(new c5(b)).b];if(!d){d={};a.d[(new c5(b)).b]=d}for(f=new wnb(c.c.b.Qe());f.b.$e();){e=f.b._e();g=d[e];if(!g){g=[];d[e]=g}g.push(c)}}
function Kdb(){Kdb=BE;Idb=new Ldb('WEBSOCKET',0,'websocket');Jdb=new Ldb('WEBSOCKET_XHR',1,'websocket-xhr');Hdb=new Ldb('STREAMING',2,'streaming');Gdb=new Ldb('LONG_POLLING',3,'long-polling')}
function KQ(a,b,c,d){var e,f;Wfb(c.substr(0,1),'-')?(f='-'.length,Wfb(b.substr(b.length-f,f),'-')&&fgb(c,'-','')):(e='-'.length,Wfb(b.substr(b.length-e,e),'-')||(b+='-'));a.Cf().rd(b+(''+c),d)}
function OT(a,b,c){if(!a.sheet.cssRules[c]){return -1}var d=a.sheet.cssRules[c].selectorText;var e=a.sheet.cssRules[c].cssText.replace(d,b);a.sheet.deleteRule(c);return a.sheet.insertRule(e,c)}
function Xeb(a){Veb==null&&(Veb=new RegExp('^\\s*[+-]?(NaN|Infinity|((\\d+\\.?\\d*)|(\\.\\d+))([eE][+-]?\\d+)?[dDfF]?)\\s*$'));if(!Veb.test(a)){throw WD(new Nfb(Ltb+a+'"'))}return parseFloat(a)}
function Gq(a,b){var c,d,e;b&=63;if(b<22){c=a.l<<b;d=a.m<<b|a.l>>22-b;e=a.h<<b|a.m>>22-b}else if(b<44){c=0;d=a.l<<b-22;e=a.m<<b-22|a.l>>44-b}else{c=0;d=0;e=a.l<<b-44}return nq(c&yvb,d&yvb,e&zvb)}
function MT(h,a){var b=a.length;var c=0;var d=0;var e=0;var f=0;var g=0;while(c<b){d=a.charCodeAt(c);d===32?(e=e+1):d>47&&d<58&&(e===0?(g=g*10+d-48):(f=f*10+d-48));if(e===2){break}c++}h.b=f;h.a=g}
function Qe(a,b){var c;c=a.Yc;if(!b){try{!!c&&c.wd()&&a.zd()}finally{a.Yc=null}}else{if(c){throw WD(new jfb('Cannot set a new parent without first clearing the old parent'))}a.Yc=b;b.wd()&&a.xd()}}
function lJ(a,b,c,d){var e,f,g,h;h=(LF(),a.Zc);g=Xi($doc);g.text=b;g.removeAttribute(dwb);g.value=c;f=(Fh(),h).options.length;(d<0||d>f)&&(d=f);if(d==f){Oh(h,g,null)}else{e=h.options[d];Oh(h,g,e)}}
function oO(a,b){if(a.b==b){return}if(b){a.a.innerHTML='+';Be((LF(),a.Zc),'minus',false);Be(a.Zc,'plus',true)}else{a.a.innerHTML='&#x2212;';Be((LF(),a.Zc),'plus',false);Be(a.Zc,'minus',true)}a.b=b}
function yS(a){var b;if(a._){!!a.$&&iN(a.$,false);a.$=new MN;JN(a.$,a.Q.Lb);nN(a.$,a.Q.a);se(a.$,exb,true);b=new GJ;pJ(b,new RJ(new nF(lF(new mF).a.a),new MS(a)));xI(a.$,b);W2((ng(),mg),new OS(a))}}
function aU(a,b){var c;c=((a.k.offsetWidth||0)|0)-((a.i.offsetWidth||0)|0);Wfb(Hj(a.f.style),zub)||(c-=(a.f.offsetWidth||0)|0);c=dr(c-bU(a,b));while(b>0&&c-bU(a,b-1)>0){--b;c=dr(c-bU(a,b))}return b}
function LU(a){var b,c,d,e;VN(a.q);for(c=(e=(new alb(a.b)).a.bg().Qe(),new flb(e));c.a.$e();){b=(d=c.a._e(),d.kg());iN(b,false);ah(b.i)}Mjb(a.b);!!a.r&&Mjb(a.r);!!a.i&&Mjb(a.i);!!a.tb&&a.tb.clear()}
function LV(a,b,c){var d;d=a.a.g;while(a.yb<c&&a.xb<d){if(a.cb+e_(a.a,a.bb)<b){a.cb+=e_(a.a,a.bb);++a.bb}++a.xb;a.yb+=e_(a.a,a.xb)}while(b>a.cb+e_(a.a,a.bb)&&a.bb<d){a.cb+=e_(a.a,a.bb);++a.bb}VW(a)}
function omb(a,b,c,d,e){var f,g,h,i;f=d-c;if(f<7){lmb(b,c,d);return}h=c+e;g=d+e;i=h+(g-h>>1);omb(b,a,h,i,-e);omb(b,a,i,g,-e);if(Job(a[i-1],a[i])<=0){while(c<d){b[c++]=a[h++]}return}mmb(a,h,i,g,b,c,d)}
function Qf(a){var b;if(a.c==null){b=cr(a.b)===cr(Of)?null:a.b;a.d=b==null?Mtb:_q(b)?b==null?null:b.name:br(b)?'String':zeb(O(b));a.a=a.a+': '+(_q(b)?b==null?null:b.message:b+'');a.c='('+a.d+') '+a.a}}
function eib(a,b,c,d,e){var f,g,h;f=true;for(g=0;g<d;g++){f=f&c[g]==0}if(e==0){Egb(c,d,a,0,b);g=b}else{h=32-e;f=f&c[g]<<h==0;for(g=0;g<b-1;g++){a[g]=c[g+d]>>>e|c[g+d+1]<<h}a[g]=c[g+d]>>>e;++g}return f}
function wf(a,b,c,d){var e,f,g,h,i;b.Fe(d+c+a);xf(a,b,d);for(f=(a.j==null&&(a.j=fq(TB,Etb,19,0,0,1)),a.j),g=0,h=f.length;g<h;++g){e=f[g];wf(e,b,'Suppressed: ','\t'+d)}i=a.e;!!i&&wf(i,b,'Caused by: ',d)}
function Iq(a,b){var c,d,e,f;b&=63;c=a.h&zvb;if(b<22){f=c>>>b;e=a.m>>b|c<<22-b;d=a.l>>b|a.m<<22-b}else if(b<44){f=0;e=c>>>b-22;d=a.m>>b-22|a.h<<44-b}else{f=0;e=0;d=c>>>b-44}return nq(d&yvb,e&yvb,f&zvb)}
function YM(a,b,c,d){this.n=a;this.c=b;this.k=c;this.d=Qi($doc);this.d.part.add(vwb);if(!d){this.p=null}else{this.f=d.needsMeasure;this.p=d.value;this.b=d.cellStyle;this.o=d.textColor}UM(this);VM(this)}
function CK(a,b){var c,d,e,f,g,h;a.i||(b=1-b);g=0;e=0;f=0;c=0;d=dr(b*a.d);h=dr(b*a.e);switch(0){case 0:g=a.d-d>>1;e=a.e-h>>1;f=e+h;c=g+d;}(VJ(),UJ).hf(ie(a.a),'rect('+g+'px, '+f+'px, '+c+'px, '+e+'px)')}
function sQ(a,b){var c,d,e,f,g,h,i,j,k;a.zf(rQ(a));c=t5(a.sg);if(c){e=new dpb;k=D2(c);for(d=0;d<k.length;d++){j=k[d];if(b.Kf(j)){i=c[j];for(f=0;f<i.length;f++){g=i[f];h=Ijb(e.a,g,e);h==null&&$4(g,b)}}}}}
function jS(a,b,c,d){var e,f;f=0;e=0;if(c<0){if(b>1){while(b>1&&e>c){--b;e-=a[b-1]}d&&e<c&&++b;f=b}else{f=1}}else{if(b<a.length){while(b<=a.length&&e<c){e+=a[b-1];++b}f=b}else{f=a.length}}return d?f:f-1}
function k2(a){if(a.a.t==5){return 'v-android'}else if(a.a.t==4){return 'v-ios v-ios'+a.a.u}else if(a.a.t==1){return 'v-win'}else if(a.a.t==3){return 'v-lin'}else if(a.a.t==2){return 'v-mac'}return null}
function vJ(a,b,c){var d,e;if(c<0||c>a.b.a.length){throw WD(new heb)}Alb(a.b,c,b);e=0;for(d=0;d<c;d++){Yq(Dlb(a.b,d),99)&&++e}Alb(a.f,e,b);qJ(a,c,(LF(),b.Zc));se(b,ye(b.Zc)+'-'+ewb,false);FJ(a,b);return b}
function BT(a,b,c){var d;a.b=b;a.a=c;d=b.sb;Ie(d,a,(Dn(),Dn(),Cn));Ie(d,a,(cn(),cn(),bn));Ie(d,a,(Rn(),Rn(),Qn));Ie(d,a,(Kn(),Kn(),Jn));Ie(d,a,(kn(),kn(),jn));Ie(d,a,(lo(),lo(),ko));Ie(d,a,(so(),so(),ro))}
function G7(a,b,c){var d,e,f,g,h,i,j,k;if(a==null||a.length==0||Wfb(Mtb,a)){return null}f=Zdb(a);d=new Zob;for(e=0;e<(i=_db(f),i).length;e++){g=(h=_db(f),h)[e];j=(k=f[g],k);Ijb(d,b.Rf(g),c.Rf(j))}return d}
function ppb(a,b,c){var d,e,f,g;g=Yob(b);e=(d=a.a.get(g),d==null?fq(MB,Etb,1,0,5,1):d);if(e.length==0){a.a.set(g,e)}else{f=mpb(b,e);if(f){return f.lg(c)}}e[e.length]=new plb(b,c);++a.c;++a.b.b;return null}
function oW(a){var b,c;b=-ph(a.Ac);c=-((a.Ac.scrollTop||0)|0);a.Rc.style[Bwb]=b+(hm(),hwb);a.I.style[Bwb]=b+hwb;a.c.style[Cwb]=c+hwb;a.hc.style[Cwb]=c+hwb;a.D.style[Bwb]=b-a.g+hwb;a.dc.style[Cwb]=c-a.f+hwb}
function l3(a,b){$2();if(!b){a.ondrag=function(){return false};a.onselectstart=function(){return false};a.style.webkitUserSelect=zub}else{a.ondrag=null;a.onselectstart=null;a.style.webkitUserSelect='text'}}
function XX(a){var b,c,d,e,f;if(!a.tb){return}if(a.b){for(d=new gkb((new $jb(a.b)).a);d.b;){c=fkb(d);f=c.jg();b=c.kg();e=a.tb.contains(f)?a.ub:null;aO(b,e)}}if(a.q){e=a.tb.contains(a.j)?a.ub:null;aO(a.q,e)}}
function Tab(b,c){if(!b){return}var d=[];for(var e=0;e<c.length;e++){var f=c[e];var g=Object.getOwnPropertyNames(f).find(function(a){return /^(a|value_0|value.*g\$)$/.test(a)});var h=g?f[g]:f;d.push(h)}b(d)}
function EW(a,b,c){var d,e,f;if(b.col1<=a.ob&&b.col2>a.ob){d=a.a.f;f=kS(d,b.col1,a.ob+1);e=kS(d,a.ob+1,b.col2+1)-ph(a.Ac)+1;if(e>0){f+=e;c.d.style[Qwb]=''}else{c.d.style[Qwb]='0'}c.d.style[Bub]=f+(hm(),hwb)}}
function Vcb(b,c){var d,e;d=Zfb(c,ngb(46));d<0&&(d=c.length);b.b=Yeb(Wcb(c,0,d));e=$fb(c,ngb(46),d+1);e<0&&(e=c.length);try{b.c=Yeb(egb(Wcb(c,d+1,e),'[^0-9].*',''))}catch(a){a=VD(a);if(!Yq(a,50))throw WD(a)}}
function zk(){zk=BE;ok=new Ck;gk=new Yk;jk=new $k;kk=new al;mk=new cl;nk=new el;pk=new gl;qk=new il;rk=new kl;uk=new Ek;wk=new Gk;vk=new Ik;yk=new Kk;sk=new Mk;tk=new Ok;xk=new Qk;ik=new Sk;hk=new Uk;lk=new Wk}
function X0(a,b){if(a.T!=b){a.T=b;b?Be((LF(),a.Zc),'protected',true):Be((LF(),a.Zc),'protected',false);if(a.C){if(b){if(a.n){a.n=false;LW(a.V)}}else{_R(a.Q);if(a.n){Xab(a.W,a.V.tc,a.V.sc,false);qb(a.r,200)}}}}}
function m1(a,b,c,d){var e;if(!a.V._){e=jV(a.V,b,c);if(e!=null&&e.length!=0){mP(a.t,e);jY(a.V,'='+e)}else{nP(a.t,vV(a.V,b,c))}}a.n?$U(a.V,v$(a.o,DV(a.V))):pP(a.t,!XV(a.V,b,c));d!=null?rP(a.t,d):rP(a.t,Z$(b,c))}
function lgb(a){var b,c,d;c=a.length;d=0;while(d<c&&(xtb(d,a.length),a.charCodeAt(d)<=32)){++d}b=c;while(b>d&&(xtb(b-1,a.length),a.charCodeAt(b-1)<=32)){--b}return d>0||b<c?(wtb(d,b,a.length),a.substr(d,b-d)):a}
function JL(a,b,c){var d,e,f;if(c<0||c>a.c){throw WD(new heb)}if(a.c==a.a.length){f=fq(lw,Etb,13,a.a.length*2,0,1);for(e=0;e<a.a.length;++e){f[e]=a.a[e]}a.a=f}++a.c;for(d=a.c-1;d>c;--d){a.a[d]=a.a[d-1]}a.a[c]=b}
function iX(a,b){var c,d;if(!!a.ib&&a.ib.a.length>b-1){apb(a.vc,vfb(b));c=Dlb(a.ib,b-1);dh(c,Cxb);c.part.add(Bxb)}else{apb(a.uc,vfb(b));d=b-a.bb;if(d>=0&&a.K.a.length>d){c=Dlb(a.K,d);dh(c,Cxb);c.part.add(Bxb)}}}
function U1(a,b){Q1();if(a._vaadin_animationend_callbacks){var c=a._vaadin_animationend_callbacks;for(var d=0;d<c.length;d++){if(c[d].listener==b){a.removeEventListener(P1,c[d],false);return true}}return false}}
function Up(a){var b,c,d,e,f;c=a.size();if(c==0){return null}b=new Agb(c==1?'Exception caught: ':c+' exceptions caught: ');d=true;for(f=a.Qe();f.$e();){e=f._e();d?(d=false):(b.a+='; ',b);wgb(b,e.Id())}return b.a}
function GO(a,b){oL();pL.call(this,dj($doc));(LF(),this.Zc).className='gwt-TextArea';this.c=a;this.a=b;this.Zc.style[Sub]=(Bl(),Uub);this.Zc.style[_ub]='1';this.Zc.style[_vb]=(hm(),'-1000.0px');Lj(this.Zc.style)}
function rV(a){var b,c,d,e,f,g;g=a.bb;b=gh(a.Ac);e=new Jlb;f=0;for(f=0;f<a.lc.a.length;f++){m_(a.a,f+1)||(e=Dlb(a.lc,f))}for(d=new fmb(e);d.a<d.c.a.length;){c=dmb(d);if(gh(c.d)>=b){return g}else{++g}}return a.bb}
function TX(a,b){SX(a);cG(a.Ac);(a.sc!=a.Lc||a.tc!=a.Mc)&&a.Lc!=-1&&a.Mc!=-1?G_(a.a,a.sc,a.Lc,a.tc,a.Mc):u_(a.a,a.Lc,a.Mc,(mh(CY(b)),!!(Fh(),b).shiftKey),!!b.metaKey||!!b.ctrlKey,true);a.yc=false;a.Lc=-1;a.Mc=-1}
function Yrb(a,b){var c,d,e,f,g,h,i,j;for(e=asb(a),g=0,i=e.length;g<i;++g){c=e[g];c.De(b)}j=!Trb&&a.e?Trb?null:a.d:null;while(j){for(d=asb(j),f=0,h=d.length;f<h;++f){c=d[f];c.De(b)}j=!Trb&&j.e?Trb?null:j.d:null}}
function ZN(a,b){JI(a.a,b);WN(a.a);le(a.f)&&(le(a.a)||le(a.g)||Wfb((zk(),dvb),Hj(a.e.style)))?(ke(a.f).className||'').indexOf(Iwb)!=-1||se(a.f,Iwb,true):(ke(a.f).className||'').indexOf(Iwb)!=-1&&se(a.f,Iwb,false)}
function $N(a,b){JI(a.g,b);WN(a.g);le(a.f)&&(le(a.a)||le(a.g)||Wfb((zk(),dvb),Hj(a.e.style)))?(ke(a.f).className||'').indexOf(Iwb)!=-1||se(a.f,Iwb,true):(ke(a.f).className||'').indexOf(Iwb)!=-1&&se(a.f,Iwb,false)}
function aO(a,b){JI(a.f,b);WN(a.f);le(a.f)&&(le(a.a)||le(a.g)||Wfb((zk(),dvb),Hj(a.e.style)))?(ke(a.f).className||'').indexOf(Iwb)!=-1||se(a.f,Iwb,true):(ke(a.f).className||'').indexOf(Iwb)!=-1&&se(a.f,Iwb,false)}
function JQ(a,b){a.Cf().rd('v-disabled',!b);Yq(a.Cf(),73)&&a.Cf().Cd(b);Yq(a,137)||hsb(ksb((yeb(Kz),Kz.k)),'Parent of connector '+U2(a)+' is null. This is typically an indication of a broken component hierarchy')}
function jX(a,b){var c,d;if(!!a.jb&&a.jb.a.length>b-1){apb(a.wc,vfb(b));c=Dlb(a.jb,b-1);dh(c,Axb);c.part.add(Bxb)}else{apb(a.xc,vfb(b));d=b-a.db;if(d>=0&&a.jc.a.length>d){c=Dlb(a.jc,d);dh(c,Axb);c.part.add(Bxb)}}}
function u3(a,b){if(a.b){return true}else if(a.c){return B3(b,a.c)}else{if(a.a){return E2(a.a,b)}else{throw WD(new jfb('StateChangeEvent should have either stateJson, changedProperties or changePropertiesSet'))}}}
function ogb(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){xtb(b+1,a.length);a.charCodeAt(b+1)==36?(a=(wtb(0,b,a.length),a.substr(0,b)+'$'+hgb(a,++b))):(a=(wtb(0,b,a.length),a.substr(0,b)+(''+hgb(a,++b))))}return a}
function YT(a){var b,c,d;a.d=false;ah(a.g);c=a.u[a.r];c.style[Bub]='';d=a.g.value;if(lU(d)&&!Wfb(a.b,d)){for(b=0;b<a.u.length;b++){if(Wfb(d,mh(a.u[b]))){hU(c,a.b);return}}$_(a.e,a.r,d);hU(c,d);jU(a)}else{hU(c,a.b)}}
function PX(a,b){var c,d;cG((LF(),a.Zc));a.Vb.className=Oxb;sh(a.Wb,wwb+a._b);ie(a.zc).style[Bwb]='';if(a.$b){c=new Zob;d=b-a.Tb;d<0&&(d=0);d!=e_(a.a,a._b)&&Ijb(c,vfb(a._b),vfb(d));c.a.c+c.c.c==0||F_(a.a,c)}a._b=-1}
function WE(a,b){var c,d,e;c=new ygb;wgb(c,(d=new Oob(b.c),e=new ygb,wgb(e,Nob(d)),e.a+=' ',wgb(e,b.b),e.a+='\n',wgb(e,b.a.Wf()),e.a+=': ',e.a));wgb(c,b.d);if(a.a&&!!b.e){c.a+='\n';wf(b.e,new gF(c),'','')}return c.a}
function Ne(a){if(!a.wd()){throw WD(new jfb("Should only call onDetach when the widget is attached to the browser's document"))}try{a.Bd();gp(a,false)}finally{try{a.ud()}finally{LF();a.Zc.__listener=null;a.Vc=false}}}
function w2(a){if(a.nodeType!=1){return {}}if($wnd.document.defaultView&&$wnd.document.defaultView.getComputedStyle){return $wnd.document.defaultView.getComputedStyle(a,null)}if(a.currentStyle){return a.currentStyle}}
function mb(a){var b,c,d,e,f,g;b=fq(or,{735:1,3:1},176,a.a.a.length,0,1);b=Ilb(a.a,b);c=new pf;for(e=b,f=0,g=e.length;f<g;++f){d=e[f];Hlb(a.a,d);d.a.hd(c.a)}a.a.a.length>0&&qb(a.b,$wnd.Math.max(5,16-(Date.now()-c.a)))}
function Ip(a,b,c){var d;if(!b){throw WD(new Lfb('Cannot add a handler with a null type'))}if(!c){throw WD(new Lfb('Cannot add a null handler'))}a.b>0?Hp(a,new EM(a,b,c)):(d=Mp(a,b,null),d.add(c));return new DM(a,b,c)}
function S1(a){Q1();if(a.webkitAnimationName)return a.webkitAnimationName;if(a.animationName)return a.animationName;if(a.mozAnimationName)return a.mozAnimationName;if(a.oAnimationName)return a.oAnimationName;return ''}
function Bh(a,b){var c,d,e;c=a.indexOf(b);while(c!=-1){if(c==0||(xtb(c-1,a.length),a.charCodeAt(c-1)==32)){d=c+b.length;e=a.length;if(d==e||d<e&&(xtb(d,a.length),a.charCodeAt(d)==32)){break}}c=a.indexOf(b,c+1)}return c}
function hN(a){var b;if(!a.u&&(b=(f2(),!e2&&(e2=new q2),f2(),e2),b.a.j&&n2(b))){a.u=Si($doc);a.u.style[Sub]=(Bl(),Uub);a.u.style['borderStyle']=($j(),zub);a.u.tabIndex=-1;a.u.frameBorder=0;a.u.marginHeight=0}return a.u}
function qP(a,b){var c,d,e;Ej(ie(a.B));fJ(a.B,'');if(!!b&&b.a.length!=0){ue(a.B,true);ue(a.C,true);for(d=new fmb(b);d.a<d.c.a.length;){c=dmb(d);fJ(a.B,c)}xP(a,(e=iL(a.a),e==null?'':e))}else{ue(a.B,false);ue(a.C,false)}}
function s6(a,b){var c,d,e,f,g,h,i;if(a.b){for(f=(i=(new Rkb(a.a.p.a)).a.bg().Qe(),new Xkb(i));f.a.$e();){c=(h=f.a._e(),h.jg());sh(c,Kzb)}Mjb(a.a.p.a)}for(d=b,e=0,g=d.length;e<g;++e){c=d[e];dh(c,Kzb);a.b&&apb(a.a.p,c)}}
function chb(a){var b,c;if(a>-140737488355328&&a<140737488355328){if(a==0){return 0}b=a<0;b&&(a=-a);c=dr($wnd.Math.floor($wnd.Math.log(a)/0.6931471805599453));(!b||a!=$wnd.Math.pow(2,c))&&++c;return c}return dhb(bE(a))}
function hg(g){ag();function h(a,b,c,d,e){var f=Hf(e);jg(f,false)}
;function i(a){var b=a.onerror;if(b&&!g){return}a.onerror=function(){h.apply(this,arguments);b&&b.apply(this,arguments);return false}}
i($wnd);i(window)}
function qi(a,b){if(Element.prototype.getBoundingClientRect){return b.getBoundingClientRect().top+a.scrollTop|0}else{var c=b.ownerDocument;return c.getBoxObjectFor(b).screenY-c.getBoxObjectFor(c.documentElement).screenY}}
function pi(a,b){if(Element.prototype.getBoundingClientRect){return b.getBoundingClientRect().left+a.scrollLeft|0}else{var c=b.ownerDocument;return c.getBoxObjectFor(b).screenX-c.getBoxObjectFor(c.documentElement).screenX}}
function R1(b,c){Q1();var d=Atb(function(a){c.Hf(a)});d.listener=c;b.addEventListener(P1,d,false);!b._vaadin_animationend_callbacks&&(b._vaadin_animationend_callbacks=[]);b._vaadin_animationend_callbacks.push(d);return d}
function _S(a,b){switch(LF(),aH((Fh(),b).type)){case Rvb:if(b.touches.length>1){return}case 4:gS(a.F,b);break;case 8:case Bvb:case Tvb:UF(a.Zc);case 8192:AS(a.F);break;case 64:oS(a.F,b);break;case Svb:oS(a.F,b);Eh.Yd(b);}}
function HN(a){VJ();var b,c,d;c=null.vg();c+='-overlays';b=(LF(),lj($doc,c));if(!b){b=Qi($doc);b.id=c;d=DQ(a.d).Yc.od().className||'';d!=null&&d.length!=0&&dh(b,d);dh(b,'v-overlay-container');Vg(ie((SK(),WK())),b)}return b}
function jT(a,b,c,d,e){a.J.style[$ub]=(b&&!a.H?(vm(),um):(vm(),tm)).le();a.p.style[$ub]=(e&&!a.n?(vm(),um):(vm(),tm)).le();a.A.style[$ub]=(c&&!a.v?(vm(),um):(vm(),tm)).le();a.d.style[$ub]=(d&&!a.b?(vm(),um):(vm(),tm)).le()}
function c6(a){if(a.c<0){V5(a,0,a.c);a.c=0}else if(a.c>((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)){V5(a,((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0),a.c);a.c=((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)}else{$5(a)}}
function jmb(a,b){var c,d,e;if(cr(a)===cr(b)){return true}if(a==null||b==null){return false}if(a.length!=b.length){return false}for(c=0;c<a.length;++c){d=a[c];e=b[c];if(!(d==e||d!=null&&Wfb(d,e))){return false}}return true}
function tT(a,b){var c,d,e;d=CY(b);e=(Fh(),d).getAttribute(Kub)||'';if(!Jh(d)){return}if(jh(Jh(d)).indexOf(mxb)!=-1&&e!=null&&e.indexOf(vwb)!=-1){c=a.c.wb;if(LT(e)==0){MT(c,e);v_(a.c.a,c.a,c.b,Eh.ce(d))}b.stopPropagation()}}
function fV(a){var b,c,d,e,f;b=new Llb(a.Oc);for(e=new fmb(a.Sc);e.a<e.c.a.length;){c=dmb(e);Clb(b,c)}for(f=new fmb(a.d);f.a<f.c.a.length;){c=dmb(f);Clb(b,c)}for(d=new fmb(a.lc);d.a<d.c.a.length;){c=dmb(d);Clb(b,c)}return b}
function RV(a,b,c){var d;d=a.Uc+1;while(a.eb>b&&a.db>d){if(a.Ab-AV(a,a.zb)>c){a.Ab-=AV(a,a.zb);--a.zb}--a.db;a.eb-=AV(a,a.db)}if(a.eb<=0||a.db<=1){a.eb=0;a.db=d}while(c<a.Ab-AV(a,a.zb)&&a.zb>1){a.Ab-=AV(a,a.zb);--a.zb}$W(a)}
function V1(){var a=document.createElement(zyb);var b={'animationName':Ayb,'OAnimationName':'oAnimationEnd','MozAnimation':Ayb,'WebkitAnimation':'webkitAnimationEnd'};for(var c in b){if(a.style[c]!==undefined){return b[c]}}}
function DW(a,b,c){var d,e,f;if(b.row1<=a.Uc&&b.row2>a.Uc){f=a.a.V.W;e=kS(f,b.row1,a.Uc+1);d=kS(f,a.Uc+1,b.row2+1)+1-((a.Ac.scrollTop||0)|0);if(d>0){e+=d;c.d.style[Rwb]=''}else{c.d.style[Rwb]='0'}c.d.style[Aub]=e+(hm(),hwb)}}
function IZ(a,b,c){var d,e;switch(c.type){case 'IMAGE':Q$((!a.F&&(a.F=new q1),a.F),b,new ZI($1(a.G,b)),c);break;case 'COMPONENT':d=QT(b,oh(a.f,iyb));e=new xZ('overlay-component-'+b,d,a.f);Q$((!a.F&&(a.F=new q1),a.F),b,e,c);}}
function vM(){function b(a){return parseInt(a[1])*Qub+parseInt(a[2])}
var c=navigator.userAgent;if(c.indexOf('Macintosh')!=-1){var d=/rv:([0-9]+)\.([0-9]+)/.exec(c);if(d&&d.length==3){if(b(d)<=1008){return true}}}return false}
function HX(a,b,c){var d,e,f,g;d=wwb+b+xwb+c;if(Hjb(a.b,d)){return}g=sV(a,d);if(g){e=g.d}else{e=hV(a,b,c).d;bO(a.q,Jh((Fh(),e)))}ZN(a.q,Gjb(a.i,d));$N(a.q,Gjb(a.r,d));f=a.tb.contains(d)?a.ub:null;aO(a.q,f);cO(a.q,e,c,b);a.j=d}
function JT(a,b){var c=[];var d=a.sheet.cssRules?a.sheet.cssRules:a.sheet.rules;for(var e=0;e<d.length;e++){var f=d[e];for(var g=0;g<b.length;g++){f['selectorText'].indexOf('.row'+b[g]+',')!==-1&&c.push(f['cssText'])}}return c}
function Hib(a,b,c,d,e){var f,g,h,i;if(cr(a)===cr(b)&&d==e){Nib(a,d,c);return}for(h=0;h<d;h++){g=0;f=a[h];for(i=0;i<e;i++){g=XD(XD(iE(YD(f,uAb),YD(b[i],uAb)),YD(c[h+i],uAb)),YD(rE(g),uAb));c[h+i]=rE(g);g=nE(g,32)}c[h+e]=rE(g)}}
function U(a,b){var c,d,e;c=a.r;d=b>=a.t+a.k;if(a.p&&!d){e=(b-a.t)/a.k;a.gd(a.cd(e));return a.o&&a.r==c}if(!a.p&&b>=a.t){a.p=true;a.fd();if(!(a.o&&a.r==c)){return false}}if(d){a.o=false;a.p=false;a.ed();return false}return true}
function DE(a,b){var c=$wnd;if(a===''){return c}var d=a.split('.');!(d[0] in c)&&c.execScript&&c.execScript('var '+d[0]);if(b){var e=b.prototype.sg;e.e=b}for(var f;d.length&&(f=d.shift());){c=c[f]=c[f]||!d.length&&b||{}}return c}
function yi(){var a=/rv:([0-9]+)\.([0-9]+)(\.([0-9]+))?.*?/.exec(navigator.userAgent.toLowerCase());if(a&&a.length>=3){var b=parseInt(a[1])*1000000+parseInt(a[2])*Qub+parseInt(a.length>=5&&!isNaN(a[4])?a[4]:0);return b}return -1}
function lI(a,b){var c;if(a.bb){throw WD(new jfb('Composite.initWidget() may only be called once.'))}if(!b){throw WD(new Lfb('widget cannot be null'))}Yq(b,179)&&b;Oe(b);c=(LF(),b.Zc);pe(a,c);(KK(),SF(c))&&LK(c,a);a.bb=b;Qe(b,a)}
function gU(a,b){var c,d,e;if(a.r!=-1){d=a.u[a.r];sh(d,txb);d.part.remove(uxb)}a.r=b-1;c=a.u[a.r];dh(c,txb);c.part.add(uxb);if(a.s>a.r){dU(a,a.r)}else if(hh(a.k)<(Fh(),Eh).Zd(c)+((c.offsetWidth||0)|0)&&!a.d){e=aU(a,a.r);dU(a,e)}}
function WU(a,b,c){var d,e,f,g,h,i,j;h=new dpb;for(e=new gkb((new $jb(a.Cc)).a);e.b;){d=fkb(e);g=d.kg();apb(h,''+g.b)}j=fq(SB,Stb,2,Njb(h.a),6,1);Vib(h,j);i=JT(b,j);for(f=0;f<i.length;f++){Elb(c,i[f],0)!=-1||($sb(c.a,i[f]),true)}}
function X6(a,b){var c;if(a.a!=null){(!a.F&&(a.F=CQ(a)),a.F).Yc.rd(a.a,false);sh(HN(a.G),a.a)}a.a=b;if(b!=null){(!a.F&&(a.F=CQ(a)),a.F).Yc.rd(b,true);dh(HN(a.G),a.a);b7(b)}null.vg();c=new P5;!!a.H&&Cp(a.H,c);Cmb();Nmb();null.vg()}
function sfb(a){var b,c,d;if(a<0){return 0}else if(a==0){return 32}else{d=-(a>>16);b=d>>16&16;c=16-b;a=a>>b;d=a-256;b=d>>16&8;c+=b;a<<=b;d=a-4096;b=d>>16&4;c+=b;a<<=b;d=a-Nvb;b=d>>16&2;c+=b;a<<=b;d=a>>14;b=d&~(d>>1);return c+2-b}}
function Hhb(a,b){var c;if(b<0){throw WD(new geb('Negative exponent'))}if(b==0){return nhb}else if(b==1||yhb(a,nhb)||yhb(a,rhb)){return a}if(!Lhb(a,0)){c=1;while(!Lhb(a,c)){++c}return Fhb(Vhb(c*b),Hhb(Khb(a,c),b))}return Lib(a,b)}
function iK(){AI.call(this);this.D=new uK;this.G=false;this.I=-1;this.M=new EK(this);this.O=-1;Vg((LF(),this.Zc),UJ.ef());this.Ye(0,0);UJ.gf((null,lh(this.Zc))).className='gwt-PopupPanel';UJ.ff(PF(this.Zc)).className='popupContent'}
function FQ(a,b,c){var d;if(!!a.s&&!!a.s.j){return}l3((LF(),b.Zc),false);if((f2(),!e2&&(e2=new q2),f2(),e2).a.t==5){return}N2(c.a,b.Zc);xj(c.a);a.s=new E5(a);d=uj(c.a)[0];a.C=_h((Fh(),d).clientX||0);a.D=_h(d.clientY||0);qb(a.s,500)}
function Xsb(a,b,c,d,e,f){var g,h,i,j,k;if(e==0){return}if(cr(a)===cr(c)){a=a.slice(b,b+e);b=0}i=c;for(h=b,j=b+e;h<j;){g=$wnd.Math.min(h+10000,j);e=g-h;k=a.slice(h,g);k.splice(0,0,d,f?e:0);Array.prototype.splice.apply(i,k);h=g;d+=e}}
function XW(a){var b,c;if(a.ob<a.ib.a.length){while(a.ib.a.length>a.ob){ah(Glb(a.ib,a.ib.a.length-1))}}else{for(c=a.ib.a.length+1;c<=a.ob;c++){b=Qi($doc);b.part.add(Sxb);wh(b,c_(c)+Txb);b.className=Rxb+c||'';Blb(a.ib,b);Vg(a.Pc,b)}}}
function sh(a,b){var c,d,e,f,g;b=Dh(b);g=a.className||'';e=Bh(g,b);if(e!=-1){c=lgb((wtb(0,e,g.length),g.substr(0,e)));d=lgb(hgb(g,e+b.length));c.length==0?(f=d):d.length==0?(f=c):(f=c+' '+d);a.className=f||'';return true}return false}
function KV(a,b,c){var d;d=a.ob+1;while(a.cb>b&&a.bb>d){if(a.yb-e_(a.a,a.xb)>c){a.yb-=e_(a.a,a.xb);--a.xb}--a.bb;a.cb-=e_(a.a,a.bb)}if(a.cb<=0||a.bb<=1){a.cb=0;a.bb=d}while(c<a.yb-e_(a.a,a.xb)&&a.xb>1){a.yb-=e_(a.a,a.xb);--a.xb}VW(a)}
function qpb(a,b){var c,d,e,f,g;f=Yob(b);d=(c=a.a.get(f),c==null?fq(MB,Etb,1,0,5,1):c);for(g=0;g<d.length;g++){e=d[g];if(Xob(b,e.jg())){if(d.length==1){d.length=0;xpb(a.a,f)}else{d.splice(g,1)}--a.c;++a.b.b;return e.kg()}}return null}
function aS(a,b,c,d){_$(a.d);a.c.C||(a.c.C=true,undefined);if(!nS(a.c.zc)){EX(a.c,true);QU(a.c)}DX(a.c,b,c);wY(a.c,b,b,c,c);d?uY(a.c,b,d.col2,c,d.row2,true):uY(a.c,b,b,c,c,true);_R(a);m1(a.d,b,c,null);Xab(a.d.W,c,b,true);qb(a.d.r,200)}
function X5(a,b){var c,d,e,f,g;g=(Fh(),b).target;for(d=(f=(new Rkb(a.p.a)).a.bg().Qe(),new Xkb(f));d.a.$e();){c=(e=d.a._e(),e.jg());if(Eh.fe(c,g)&&((c.scrollHeight||0)|0)>(c.clientHeight|0)){a.q=c;a.g=i6(a.q);return true}}return false}
function AE(a,b,c){var d=zE,h;var e=d[a];var f=e instanceof Array?e[0]:null;if(e&&!f){_=e}else{_=(h=b&&b.prototype,!h&&(h=zE[b]),CE(h));_.tg=c;!b&&(_.ug=FE);d[a]=_}for(var g=3;g<arguments.length;++g){arguments[g].prototype=_}f&&(_.sg=f)}
function v$(a,b){var c,d,e,f,g;d=Gjb(pQ(a.a).c,b);if(Hjb(a.a.e,d)){g=Gjb(a.a.e,d);MO(g.c,b);return g}c=QT(d,oh(a.a.f,iyb));f=new xZ(pyb+d,c,a.a.f);Jjb(a.a.e,d,f);e=new OO;NO(e,DQ(a.a));e.b=f;e.a=b;eG(f.a,e);YF(f.a,1054852);f.c=e;return f}
function v_(a,b,c,d){var e,f;if(a.V.tc!=c&&a.V.sc!=b){u_(a,b,c,false,false,true)}else{e=hV(a.V,b,c);d=e.p;a.b=d;SO(a.t);d=(f=iL(a.t.j),f==null?'':f)}a.s=false;W$(a);if(!XV(a.V,b,c)&&!a.A&&!a.n){a.A=true;MX(a.V,true,d);a.t.u=true;tP(a.t)}}
function He(a,b){var c=(a.className||'').split(/\s+/);if(!c){return}var d=c[0];var e=d.length;c[0]=b;for(var f=1,g=c.length;f<g;f++){var h=c[f];h.length>e&&h.charAt(e)=='-'&&h.indexOf(d)==0&&(c[f]=b+h.substring(e))}a.className=c.join(' ')}
function HS(a,b){var c;this.M=new KS(this);this.q=a;this.Q=b;this._=b.Tc;this.b=new nT(this);lI(this,this.b);lT(this.b);se(this.b,fxb,true);xS(this,false);this.B=new ZS(this);se(this.B,fxb,true);XS(this.B);c=b.Ac;iT(this.b,c);VS(this.B,c)}
function $4(b,c){var d,e,f,g;d=c.f;e=b.a;!e&&(e=O(d));f=new c5(e);try{U4(new V4(f,b.b),d,iq(dq(MB,1),Etb,1,5,[]))}catch(a){a=VD(a);if(Yq(a,79)){g=a;throw WD(new Mf("Couldn't invoke @OnStateChange method "+f.b+'.'+b.b,g))}else throw WD(a)}}
function Wgb(a){return a.e<=-32||a.e>(a.d>0?a.d:$wnd.Math.floor((a.a-1)*sAb)+1)?0:Ehb(a.e==0||a.a==0&&a.f!=-1?(!a.c&&(a.c=Zhb(bE(a.f))),a.c):a.e<0?Fhb((!a.c&&(a.c=Zhb(bE(a.f))),a.c),Mib(-a.e)):whb((!a.c&&(a.c=Zhb(bE(a.f))),a.c),Mib(a.e)))}
function rS(a,b){a.r=b;if(b>0&&!a.a){a.a=new nT(a);iT(a.a,a.Q.c);ue(a.a,false);lT(a.a);se(a.a,cxb,true);a.A=new ZS(a);VS(a.A,a.Q.c);WS(a.A,false);XS(a.A);se(a.A,cxb,true)}else if(b==0&&!!a.a){aT(a.a);a.a=null;ah(a.A.k);a.A=null}GS(a);ES(a)}
function GS(a){if(a.ab>0&&a.r>0&&!a.W){a.W=new nT(a);iT(a.W,a.Q.Pc);ue(a.W,false);lT(a.W);se(a.W,dxb,true);a.D=new ZS(a);VS(a.D,a.Q.Pc);WS(a.D,false);XS(a.D);se(a.D,dxb,true)}else if(!!a.W&&(a.ab==0||a.r==0)){aT(a.W);a.W=null;ah(a.D.k);a.D=null}}
function wS(a,b){a.ab=b;if(b>0&&!a.X){a.X=new nT(a);iT(a.X,a.Q.Rc);ue(a.X,false);lT(a.X);se(a.X,'top-right',true);a.F=new ZS(a);VS(a.F,a.Q.Rc);WS(a.F,false);XS(a.F);se(a.F,dxb,true)}else if(b==0&&!!a.X){aT(a.X);a.X=null;ah(a.F.k);a.F=null}GS(a);ES(a)}
function Lhb(a,b){var c,d,e;if(b==0){return (a.a[0]&1)!=0}if(b<0){throw WD(new geb('Negative bit address'))}e=b>>5;if(e>=a.d){return a.e<0}c=a.a[e];b=1<<(b&31);if(a.e<0){d=Bhb(a);if(e<d){return false}else d==e?(c=-c):(c=~c)}return (c&b)!=0}
function IQ(a){!a.F&&(a.F=new q1);if(!!a.F&&mI((!a.F&&(a.F=new q1),a.F))){Oe((!a.F&&(a.F=new q1),a.F));hsb(ksb((yeb(Kz),Kz.k)),'Widget is still attached to the DOM after the connector ('+U2(a)+') has been unregistered. Widget was removed.')}}
function YW(a){var b,c;if(a.Uc<a.jb.a.length){while(a.jb.a.length>a.Uc){ah(Glb(a.jb,a.jb.a.length-1))}}else{for(b=a.jb.a.length+1;b<=a.Uc;b++){c=Qi($doc);c.innerHTML=''+b+Txb||'';c.className=Uxb+b||'';c.part.add(Vxb);Blb(a.jb,c);Vg(a.Pc,c)}}}
function Hq(a,b){var c,d,e,f,g;b&=63;c=a.h;d=(c&Avb)!=0;d&&(c|=-1048576);if(b<22){g=c>>b;f=a.m>>b|c<<22-b;e=a.l>>b|a.m<<22-b}else if(b<44){g=d?zvb:0;f=c>>b-22;e=a.m>>b-22|c<<44-b}else{g=d?zvb:0;f=d?yvb:0;e=c>>b-44}return nq(e&yvb,f&yvb,g&zvb)}
function RX(a,b){var c,d,e;cG((LF(),a.Zc));a.Vb.className=Oxb;ie(a.zc).style[Cwb]='';sh(a.Wb,'row'+a.ac);if(a.$b){c=new Zob;e=b-a.Tb;d=Ugb(jhb(e/a.Mb*72));d<0&&(d=0);d!=h_(a.a,a.ac)&&Ijb(c,vfb(a.ac),new bfb(d));c.a.c+c.c.c==0||S_(a.a,c)}a.ac=-1}
function tK(){var a,b,c,d;null.vg();d=(HG(),qj($doc).clientWidth|0);c=qj($doc).clientHeight|0;null.vg((zk(),zub));null.vg((hm(),iwb));null.vg(iwb);b=pj($doc);a=mj($doc);null.vg($wnd.Math.max(b,d)+hwb);null.vg($wnd.Math.max(a,c)+hwb);null.vg(dvb)}
function rib(a,b,c,d,e){var f,g,h;f=0;g=0;for(h=0;h<d;h++){f=(Eib(),XD(iE(YD(c[h],uAb),YD(e,uAb)),YD(rE(f),uAb)));g=XD(oE(YD(a[b+h],uAb),YD(f,uAb)),g);a[b+h]=rE(g);g=mE(g,32);f=nE(f,32)}g=XD(oE(YD(a[b+d],uAb),f),g);a[b+d]=rE(g);return rE(mE(g,32))}
function RW(a,b,c,d,e){var f,g,h,i;NU(a);for(i=d;i<=e;i++){for(f=b;f<=c;f++){if(a.sc!=f||a.tc!=i){g=hV(a,f,i);apb(a.u,new sZ(f,i));if(g){apb(a.t,g);dh(g.d,yxb);g.d.part.add(yxb)}h=sV(a,wwb+f+xwb+i);if(h){apb(a.t,h);dh(h.d,yxb);h.d.part.add(yxb)}}}}}
function f1(a,b){var c,d,e,f,g,h,i;a.B=!b?null:new _ob(b);if(!b||!a.o){return}h=a.V.wb;for(g=new gkb((new $jb(b)).a);g.b;){f=fkb(g);e=v$(a.o,f.jg());if(e){MT(h,f.jg());d=h.a;i=h.b;fW(a.V,f.jg())?(c=sV(a.V,f.jg())):(c=hV(a.V,d,i));!!c&&_U(a.V,e,c)}}}
function iU(a,b,c){var d,e,f,g,h;if(c){a.c.style[Bwb]='';a.s=0;a.t=0}for(e=b.length;e<a.u.length;e++){ah(a.u[e])}Vf(a.u,b.length);for(d=0;d<b.length;d++){f=a.u[d];if(f){h=f;hU(h,b[d])}else{g=ZT(b[d]);Vg(a.c,g);a.u[d]=g}}a.r>=a.u.length&&(a.r=-1);jU(a)}
function Neb(a){if(a.Yf()){var b=a.c;b.Zf()?(a.k='['+b.j):!b.Yf()?(a.k='[L'+b.Wf()+';'):(a.k='['+b.Wf());a.b=b.Vf()+'[]';a.i=b.Xf()+'[]';return}var c=a.g;var d=a.d;d=d.split('/');a.k=Qeb('.',[c,Qeb('$',d)]);a.b=Qeb('.',[c,Qeb('.',d)]);a.i=d[d.length-1]}
function cS(a,b,c,d,e,f,g,h,i){var j,k;m1(a.d,c,d,b);a.c.C||(a.c.C=true,undefined);if(!nS(a.c.zc)){EX(a.c,true);QU(a.c)}j=a.c.sc;k=a.c.tc;if(j!=c||k!=d){DX(a.c,c,d);_R(a)}wY(a.c,e,f,g,h);uY(a.c,e,f,g,h,true);i&&!VV(a.c,e,f,g,h)&&dX(a.c,e,f,g,h);dV(a.c)}
function Qcb(a,b){var c,d,e,f,g;g=b.indexOf('; cros ');if(g==-1){return}d=$fb(b,ngb(41),g);if(d==-1){return}c=d;while(c>=g&&(xtb(c,b.length),b.charCodeAt(c)!=32)){--c}if(c==g){return}e=(wtb(c+1,d,b.length),b.substr(c+1,d-(c+1)));f=ggb(e,'\\.',0);Rcb(a,f)}
function yF(a){xF();if(!kF(tF,a)){return a}a.indexOf('&')!=-1&&(a=jF(rF,a,'&amp;'));a.indexOf('<')!=-1&&(a=jF(uF,a,'&lt;'));a.indexOf('>')!=-1&&(a=jF(sF,a,'&gt;'));a.indexOf('"')!=-1&&(a=jF(vF,a,'&quot;'));a.indexOf("'")!=-1&&(a=jF(wF,a,'&#39;'));return a}
function N$(a){VJ();FN.call(this);this.f=new y6(this);this.c=new L6(100,new B6(this));eK(this,this.f);UJ.gf((LF(),LF(),lh(this.Zc))).className=exb;vh(this.Zc,gj($doc));Je(this,new v6(this),jp?jp:(jp=new An));this.a=a;this.Zc['id']='PID_VAADIN_CM';QN(this.Zc)}
function Le(a){var b;if(a.wd()){throw WD(new jfb("Should only call onAttach when the widget is detached from the browser's document"))}a.Vc=true;LF();dH(a.Zc,a);b=a.Wc;a.Wc=-1;b>0&&(a.Wc==-1?YF(a.Zc,b|(a.Zc.__eventBits||0)):(a.Wc|=b));a.td();a.Ad();gp(a,true)}
function MQ(a,b,c){var d,e,f;e='%'.length;Wfb(b.substr(b.length-e,e),'%')!=Vfb(a.r,'%');d='%'.length;Wfb(c.substr(c.length-d,d),'%')!=Vfb(a.q,'%');a.r=b;a.q=c;f=a.Cf();f.rd('v-has-width',!ldb(a.Bf()));f.rd('v-has-height',!kdb(a.Bf()));a.Cf().sd(b);a.Cf().qd(c)}
function AS(a){var b,c,d,e;a.C=false;tS(a,false);a.N&&BS(a);if(a.j){V_(a.q,a.G,a.I)}else if(a.s){b=$wnd.Math.min(a.e,a.G);c=$wnd.Math.max(a.f,a.H);d=$wnd.Math.min(a.K,a.I);e=$wnd.Math.max(a.L,a.J);b<=c&&d<=e&&W_(a.q,b,c,d,e)}sh(ie(a.Q),'selecting');vS(a,false)}
function Ihb(a,b){var c,d,e,f,g,h;if(b.e==0){throw WD(new geb(tAb))}h=a.d;c=b.d;if((h!=c?h>c?1:-1:wib(a.a,b.a,h))==-1){return a}f=c;e=fq(ir,Jxb,20,f,15,1);if(f==1){e[0]=sib(a.a,h,b.a[0])}else{d=h-c+1;e=lib(null,d,a.a,h,b.a,c)}g=new Ohb(a.e,f,e);vhb(g);return g}
function cO(a,b,c,d){a.c=b;a.d=c;a.b=d;(LF(),a.Zc).style[$ub]=lvb;!!a.u&&(a.u.style[$ub]=lvb,undefined);a.i.style[$ub]=(vm(),lvb);rN(a);SN(a.Zc);a.k=nh(a.Zc,gwb);a.n=nh(a.Zc,yub);UN(a);a.Zc.style[$ub]=kvb;!!a.u&&(a.u.style[$ub]=kvb,undefined);a.i.style[$ub]=kvb}
function h3(a){var b=a.ownerDocument.defaultView.getComputedStyle(a);var c=b.width;if(c==rwb){return g3(a)}var d=parseFloat(c);var e=parseFloat(b.borderLeftWidth)+parseFloat(b.borderRightWidth);var f=parseFloat(b.paddingLeft)+parseFloat(b.paddingRight);return d+e+f}
function e3(a){var b=a.ownerDocument.defaultView.getComputedStyle(a);var c=b.height;if(c==rwb){return d3(a)}var d=parseFloat(c);var e=parseFloat(b.borderTopWidth)+parseFloat(b.borderBottomWidth);var f=parseFloat(b.paddingTop)+parseFloat(b.paddingBottom);return d+e+f}
function BW(a){var b,c,d,e,f,g,h;g=new Rkb(a.a.e);b=new Zob;Vg(a.Ac,a.hb);xh(a.hb,Pxb);for(f=(h=g.a.bg().Qe(),new Xkb(h));f.a.$e();){e=(d=f.a._e(),d.jg());uh(a.hb,'cell cs'+e);c=a.hb.clientWidth|0;Ijb(b,e,new bfb(Ugb(Tgb(new $gb(c),new $gb(10)))))}ah(a.hb);k0(a.a,b)}
function Y5(a,b){var c;a.r&&S(a.i);c=(Fh(),b).touches[0];if(X5(a,c)){bsb(ksb((yeb(Tz),Tz.k)),'TouchDelegate takes over');b.stopPropagation();a.d=aG(a);T5=a;a.o=_h(c.clientY||0);a.s[0]=a.o;a.b[0]=Date.now();a.k=1;a.n=Z5(a);bsb(ksb((yeb(Tz),Tz.k)),'ST'+a.n);a.j=false}}
function vq(a){var b,c,d;c=a.l;if((c&c-1)!=0){return -1}d=a.m;if((d&d-1)!=0){return -1}b=a.h;if((b&b-1)!=0){return -1}if(b==0&&d==0&&c==0){return -1}if(b==0&&d==0&&c!=0){return tfb(c)}if(b==0&&d!=0&&c==0){return tfb(d)+22}if(b!=0&&d==0&&c==0){return tfb(b)+44}return -1}
function hV(a,b,c){var d,e,f,g;if(c<=a.Uc&&(b>=a.bb&&b<=a.xb||b<=a.ob)||b<=a.ob&&(c>=a.db&&c<=a.zb||c<=a.Uc)){return qV(a,b,c)}else{e=b-a.bb;f=c-a.db;if(e<0||f<0){return null}g=a.lc.a.length>f;if(g){d=Dlb(a.lc,f).a.length>e;if(d){return Dlb(Dlb(a.lc,f),e)}}}return null}
function CJ(a,b){var c,d;if(b==a.g){return}if(a.g){QJ(a.g);if(a.i){d=QF(ie(a.g));LF();if(JF.Ie(d)==2){c=JF.He(d,1);Be(c,fwb,false)}}}if(b){se(b,ye((LF(),b.Zc))+'-'+ewb,true);if(a.i){d=QF(b.Zc);if(JF.Ie(d)==2){c=JF.He(d,1);Be(c,fwb,true)}}Qd();pc(a.Zc,new ec(b.Zc))}a.g=b}
function UV(a){var b,c;b=new vT;b.c=a;b.a=a.vb;uT(b,a.Pc,a.Rc,a.c,a.Ac);if(a.Tc&&o2((f2(),!e2&&(e2=new q2),f2(),e2))){c=new C$(a);Ie(a,c,(Zo(),Zo(),Yo));Ie(a,c,(Ko(),Ko(),Jo));Ie(a,c,(So(),So(),Ro));Ie(a,c,(Do(),Do(),Co))}a.Ob=aG(new oZ(a));Ie(a,new qZ(a),(rn(),rn(),qn))}
function jL(a,b,c){if(!a.Vc){return}if(c<0){throw WD(new ieb('Length must be a positive integer. Length: '+c))}if(b<0||c+b>oh((LF(),a.Zc),nwb).length){throw WD(new ieb('From Index: '+b+'  To Index: '+(b+c)+'  Text Length: '+oh((LF(),a.Zc),nwb).length))}BM((LF(),a.Zc),b,c)}
function kX(a,b,c){var d,e,f,g,h,i,j;if(b){MT(a.wb,c);j=a.wb.b;i=a.wb.a;h=sV(a,c);d=h?h:hV(a,i,j);e=new eO(a,Wg(d.d));JN(e,a.Lb);ZN(e,Gjb(a.i,c));$N(e,Gjb(a.r,c));g=a.tb.contains(c)?a.ub:null;aO(e,g);dO(e,d.d,j,i);Jjb(a.b,c,e)}else{f=Ljb(a.b,c);!!f&&(iN(f,false),ah(f.i))}}
function zO(a){var b,c,d,e,f,g,h,i,j;if(a.a.C){g=a.a.zc.f;h=a.a.zc.e;j=a.a.zc.K;i=a.a.zc.L;f=new ygb;for(e=j;e<=i;e++){for(c=h;c<=g;c++){b=kV(a.a,c,e);b!=null&&(f.a+=''+b,f);c!=g&&(f.a+='\t',f)}e!=i&&(f.a+='\n',f)}d=f.a;return d}return "non-continous selection, can't copy"}
function cP(a,b){var c,d,e,f,g,h,i;c=a.d;if(!c){i='';for(f=a.t.S,g=0,h=f.length;g<h;++g){e=f[g];i+=e+'|'}i=igb(i,0,i.length-1);d='^(('+i+')!){0,1}';d+='([A-Za-z]{1,3}[0-9]{1,7})';d+='(:([A-Za-z]{1,3}[0-9]{1,7})){0,1}';a.d=c=new RegExp(d);qb(new HP(a),2000)}return c.test(b)}
function Bq(a){var b,c,d,e,f;if(isNaN(a)){return Sq(),Rq}if(a<-9223372036854775808){return Sq(),Pq}if(a>=9223372036854775807){return Sq(),Oq}e=false;if(a<0){e=true;a=-a}d=0;if(a>=Cvb){d=dr(a/Cvb);a-=d*Cvb}c=0;if(a>=Bvb){c=dr(a/Bvb);a-=c*Bvb}b=dr(a);f=nq(b,c,d);e&&tq(f);return f}
function eP(a,b,c,d,e){var f;if(!a.f){return}if(a.k==-1){a.k=a.I.sc;a.n=a.I.tc}c?--a.n:d?++a.k:e?++a.n:--a.k;a.n==0&&(a.n=1);a.k==0&&(a.k=1);f=GV(a.I);a.n>f[2]-1&&(a.n=f[2]-1);a.k>f[3]-1&&(a.k=f[3]-1);if(b&&a.o!=-1);else{a.o=a.k;a.p=a.n}oP(a,a.o,a.p,a.k,a.n,false);gX(a.I,a.k,a.n)}
function QZ(a){var b,c,d,e,f;e=(!a.M&&(a.M=new O1),a.M).bb;f=(!a.F&&(a.F=new q1),a.F);for(d=new fmb(a.n);d.a<d.c.a.length;){b=dmb(d);Elb(e,b,0)!=-1||kX(f.V,false,b)}if(e){for(c=new fmb(e);c.a<c.c.a.length;){b=dmb(c);Elb(a.n,b,0)!=-1||kX(f.V,true,b)}}a.n.a.length=0;!!e&&Clb(a.n,e)}
function IX(a,b){var c,d,e,f;if(a.T){for(f=(d=(new alb(a.T)).a.bg().Qe(),new flb(d));f.a.$e();){e=(c=f.a._e(),c.kg());_kb(new alb(b),e)||Oe(e)}}a.Uc>0&&a.ob>0&&JX(a,b,1,a.Uc,1,a.ob);a.Uc>0&&JX(a,b,1,a.Uc,a.bb,a.xb);a.ob>0&&JX(a,b,1,a.db,a.zb,a.ob);JX(a,b,a.bb,a.xb,a.db,a.zb);a.T=b}
function Fib(a,b){Eib();var c,d,e,f,g,h,i,j,k;if(b.d>a.d){h=a;a=b;b=h}if(b.d<63){return Kib(a,b)}g=(a.d&-2)<<4;j=Khb(a,g);k=Khb(b,g);d=yib(a,Jhb(j,g));e=yib(b,Jhb(k,g));i=Fib(j,k);c=Fib(d,e);f=Fib(yib(j,d),yib(e,k));f=tib(tib(f,i),c);f=Jhb(f,g);i=Jhb(i,g<<1);return tib(tib(i,f),c)}
function qS(a,b){a.p=b;if(b){se(a.b,bxb,true);cT(a.b,b);if(a.W){cT(a.W,b);se(a.W,bxb,true)}if(a.X){cT(a.X,b);se(a.X,bxb,true)}if(a.a){cT(a.a,b);se(a.a,bxb,true)}vS(a,true)}else{se(a.b,bxb,false);!!a.W&&se(a.W,bxb,false);!!a.X&&se(a.X,bxb,false);!!a.a&&se(a.a,bxb,false);vS(a,false)}}
function FW(a){var b,c,d,e,f,g;for(c=(f=(new alb(a.b)).a.bg().Qe(),new flb(f));c.a.$e();){b=(e=c.a._e(),e.kg());g=b.d;d=b.b;k_(a.a,d)||m_(a.a,g)||!(d>=a.bb&&d<=a.xb&&g>=a.db&&g<=a.zb||d<=a.ob&&g<=a.Uc||d>a.ob&&d<=a.xb&&g<=a.Uc||g>a.Uc&&g<=a.zb&&d<=a.ob)?(iN(b,false),ah(b.i)):YN(b)}}
function bS(a,b,c,d,e,f,g,h){if(a.d.n){a.d.n=false;LW(a.c)}DX(a.c,c,d);_R(a);a.c.C||(a.c.C=true,undefined);if(!nS(a.c.zc)){EX(a.c,true);QU(a.c)}wY(a.c,c,c,d,d);uY(a.c,c,c,d,d,true);f?mP(a.d.t,e):nP(a.d.t,e);pP(a.d.t,!g);b!=null?rP(a.d.t,b):rP(a.d.t,Z$(c,d));gW(a.c)||gX(a.c,c,d);h||dV(a.c)}
function MW(a,b,c){var d,e,f;if(!c||!c.Vc){return}sh((LF(),c.Zc),Hxb);if((f2(),!e2&&(e2=new q2),f2(),e2).a.g){(!db&&(db=eb()?new fb:new nb),db).jd(new vZ(c),null)}else{Qe(c,null);Oe(c)}if(a.Db){f=a.wb;MT(f,b);fW(a,b)?(e=sV(a,b)):(e=hV(a,f.a,f.b));if(e){d=Gjb(a.e,b);OM(e,!d?null:d.value)}}}
function PZ(a){if(!(!a.M&&(a.M=new O1),a.M).c){(!a.F&&(a.F=new q1),a.F).V.Gc||c0((!a.F&&(a.F=new q1),a.F),a.e);a.e=null;t0((!a.F&&(a.F=new q1),a.F),null)}else if(!(!a.F&&(a.F=new q1),a.F).o){a.e=new Zob;!a.d&&(a.d=new x$(a));t0((!a.F&&(a.F=new q1),a.F),a.d)}else{r_((!a.F&&(a.F=new q1),a.F))}}
function J$(a,b,c){var d,e;b=je(a.f);d=a.e;e=a.g;if(b+d>(HG(),qj($doc).clientWidth|0)){d=d-b;d<0&&(d=0)}c+e>(qj($doc).clientHeight|0)&&(e=$wnd.Math.max(0,(qj($doc).clientHeight|0)-c));e==0&&mN(a,(qj($doc).clientHeight|0)+hwb);oN(a,d,e);(LF(),a.Zc).style[Sub]=(Bl(),Tub);W2((ng(),mg),new F6(a))}
function Nob(a){var b,c,d;d=-a.a.getTimezoneOffset();b=(d>=0?'+':'')+(d/60|0);c=Sob($wnd.Math.abs(d)%60);return (Wob(),Uob)[a.a.getDay()]+' '+Vob[a.a.getMonth()]+' '+Sob(a.a.getDate())+' '+Sob(a.a.getHours())+':'+Sob(a.a.getMinutes())+':'+Sob(a.a.getSeconds())+' GMT'+b+c+' '+a.a.getFullYear()}
function $O(a){var b,c,d,e,f,g,h,i;if(a.A!=null){g=iP(a,a.A);if(!g){return}e=$wnd.Math.min(g.col1,g.col2);d=$wnd.Math.max(g.col1,g.col2);i=$wnd.Math.min(g.row1,g.row2);h=$wnd.Math.max(g.row1,g.row2);for(b=e;b<=d;b++){for(f=i;f<=h;f++){c=hV(a.I,b,f);!!c&&(c.d.style[Owb]='',undefined)}}}a.A=null}
function Kib(a,b){var c,d,e,f,g,h,i,j,k,l,m;d=a.d;f=b.d;h=d+f;i=a.e!=b.e?-1:1;if(h==2){k=iE(YD(a.a[0],uAb),YD(b.a[0],uAb));m=rE(k);l=rE(nE(k,32));return l==0?new Mhb(i,m):new Ohb(i,2,iq(dq(ir,1),Jxb,20,15,[m,l]))}c=a.a;e=b.a;g=fq(ir,Jxb,20,h,15,1);Gib(c,d,e,f,g);j=new Ohb(i,h,g);vhb(j);return j}
function Jib(a,b){Eib();var c,d,e,f,g,h,i,j,k;j=a.e;if(j==0){return shb(),rhb}d=a.d;c=a.a;if(d==1){e=iE(YD(c[0],uAb),YD(b,uAb));i=rE(e);g=rE(nE(e,32));return g==0?new Mhb(j,i):new Ohb(j,2,iq(dq(ir,1),Jxb,20,15,[i,g]))}h=d+1;f=fq(ir,Jxb,20,h,15,1);f[d]=Iib(f,c,d,b);k=new Ohb(j,h,f);vhb(k);return k}
function vf(d,b){if(b instanceof Object){try{b.__java$exception=d;if(navigator.userAgent.toLowerCase().indexOf('msie')!=-1&&$doc.documentMode<9){return}var c=d;Object.defineProperties(b,{cause:{get:function(){var a=c.Hd();return a&&a.Fd()}},suppressed:{get:function(){return c.Gd()}}})}catch(a){}}}
function jH(){jH=BE;eH={_default_:pH,dragenter:oH,dragover:oH};gH={click:nH,dblclick:nH,mousedown:nH,mouseup:nH,mousemove:nH,mouseover:nH,mouseout:nH,mousewheel:nH,keydown:mH,keyup:mH,keypress:mH,touchstart:nH,touchend:nH,touchmove:nH,touchcancel:nH,gesturestart:nH,gestureend:nH,gesturechange:nH}}
function dib(a,b){var c,d,e,f,g;d=b>>5;b&=31;if(d>=a.d){return a.e<0?(shb(),mhb):(shb(),rhb)}f=a.d-d;e=fq(ir,Jxb,20,f+1,15,1);eib(e,f,a.a,d,b);if(a.e<0){for(c=0;c<d&&a.a[c]==0;c++);if(c<d||b>0&&a.a[c]<<32-b!=0){for(c=0;c<f&&e[c]==-1;c++){e[c]=0}c==f&&++f;++e[c]}}g=new Ohb(a.e,f,e);vhb(g);return g}
function oib(a,b){var c,d,e,f,g;d=YD(b,uAb);if(ZD(a,0)>=0){f=_D(a,d);g=hE(a,d)}else{c=nE(a,1);e=b>>>1;f=_D(c,e);g=hE(c,e);g=XD(lE(g,1),YD(a,1));if((b&1)!=0){if(ZD(f,g)<=0){g=oE(g,f)}else{if(gE(oE(f,g),d)){g=XD(g,oE(d,f));f=oE(f,1)}else{g=XD(g,oE(lE(d,1),f));f=oE(f,2)}}}}return kE(lE(g,32),YD(f,uAb))}
function DK(a,b,c){var d;a.c=c;S(a);if(a.g){pb(a.g);a.g=null;AK(a)}a.a.N=b;hK(a.a);d=!c&&a.a.G;a.i=b;if(d){if(b){zK(a);ie(a.a).style[Sub]=Uub;a.a.O!=-1&&a.a.Ye(a.a.I,a.a.O);(VJ(),UJ).hf(ie(a.a),'rect(0px, 0px, 0px, 0px)');VH((SK(),WK()),a.a);a.g=new IK(a);qb(a.g,1)}else{T(a,200,Date.now())}}else{BK(a)}}
function rO(a,b){wI.call(this);this.a=Qi($doc);this.b=false;this.f=false;this.k=-1;this.g=-1;this.i=-1;this.j=-1;this.n=-1;this.d=-1;this.e=a;this.c=b;(LF(),this.Zc).className='grouping';Be(this.Zc,'minus',true);this.a.innerHTML='&#x2212;';this.a.className='expand';Vg(this.Zc,this.a);fG(this.Zc,262145)}
function T1(a){Q1();var b=a.a;if(!b.getPropertyValue)return '';if(b.getPropertyValue(vyb))return b.getPropertyValue(vyb);if(b.getPropertyValue(wyb))return b.getPropertyValue(wyb);if(b.getPropertyValue(xyb))return b.getPropertyValue(xyb);if(b.getPropertyValue(yyb))return b.getPropertyValue(yyb);return ''}
function nR(){this.d=Qi($doc);this.b=Qi($doc);this.a=Qi($doc);this.d.className='v-spreadsheet-popupbutton-overlay-header';this.b.className='v-window-closebox';this.b.setAttribute('role',jub);this.a.className='header-caption';Vg(this.d,this.b);Vg(this.d,this.a);fG(this.b,1);eG(this.b,this);oe(this,this.d)}
function uS(a,b,c,d,e){var f;a.e=b;a.K=d;a.f=c;a.L=e;a.Y=kS(a.q.V.W,d,e+1);a.Z=kS(a.q.f,b,c+1);f=a.Z==0||a.Y==0;gT(a.b,b,c,d,e);f&&cT(a.b,true);if(a.ab>0&a.r>0){gT(a.W,b,c,d,e);f&&cT(a.W,true)}if(a.ab>0){gT(a.X,b,c,d,e);f&&cT(a.X,true)}if(a.r>0){gT(a.a,b,c,d,e);f&&cT(a.a,true)}a.p&&qS(a,false);a.o||yS(a)}
function zY(a,b){var c,d,e;if(a.Oc.a.length!=0){d=new fmb(b);while(d.a<d.c.a.length){c=dmb(d);PM(Dlb(a.Oc,(c.row-1)*a.ob+c.col-1),c.value,c.cellStyle,c.textColor,c.needsMeasure);e=wwb+c.col+xwb+c.row;yX(a,e,c.value,c.cellStyle,c.textColor,c.needsMeasure);c.value==null?Ljb(a.e,e):Jjb(a.e,e,c)}}pY(a,false)}
function Ocb(a,b){var c,d,e;d=b;e=a.length;while(d<e){c=(xtb(d,a.length),a.charCodeAt(d));teb==null&&(teb=new RegExp('[A-Z]','i'));if(!(teb.test(String.fromCharCode(c))||(seb==null&&(seb=new RegExp('\\d')),seb.test(String.fromCharCode(c)))||c==95||c==46)){break}++d}return wtb(b,d,a.length),a.substr(b,d-b)}
function fM(a){var b=$doc.createElement('div');b.tabIndex=0;var c=$doc.createElement('input');c.type='text';c.tabIndex=-1;c.setAttribute(Eub,'true');var d=c.style;d.opacity=0;d.height='1px';d.width='1px';d.zIndex=-1;d.overflow=lvb;d.position=Uub;c.addEventListener('focus',a,false);b.appendChild(c);return b}
function Tcb(b,c){b.u=-1;b.v=-1;if(c.length>=1){try{b.u=Yeb(c[0])}catch(a){a=VD(a);if(!Yq(a,21))throw WD(a)}}if(c.length>=2){try{b.v=Yeb(c[1])}catch(a){a=VD(a);if(!Yq(a,21))throw WD(a)}if(b.v==-1&&c[1].indexOf('-')!=-1){try{b.v=Yeb(igb(c[1],0,Zfb(c[1],ngb(45))))}catch(a){a=VD(a);if(!Yq(a,21))throw WD(a)}}}}
function jN(a){var b,c,d;d=a.Vc&&a.N;gK(a);if(d){return false}else{a.mf(false);se(a,ye(UJ.gf((LF(),LF(),lh(a.Zc))))+'-'+zwb,true);c=new v2(a.Zc);b=T1(c);b==null&&(b='');a.mf(true);if(b.indexOf(zwb)!=-1){a.G=false;R1(a.Zc,new r7(a));return true}else{se(a,ye(UJ.gf((null,lh(a.Zc))))+'-'+zwb,false);return false}}}
function yU(b,c){var d,e,f,g;if(c.a.length>0){e=new Agb(BV(b.Fc));for(g=new fmb(c);g.a<g.c.a.length;){f=dmb(g);try{wgb(e,dgb(f,wxb,xxb+b.Bc+' .cell.col'))}catch(a){a=VD(a);if(Yq(a,21)){d=a;csb(b.U,(erb(),crb),'Invalid custom cell border style: '+f+', '+d.Id())}else throw WD(a)}}$g(b.Fc);Vg(b.Fc,fj($doc,e.a))}}
function q1(){this.k=new Zob;this.I=new y1(this);this.r=new z1;_0(this,(!Bo&&(Bo=new Qo),Bo.a));this.V=new BY(this,this.Z);this.t=new BP(this,this.V);this.U=new mU(this);this.Q=new fS(this,this.V);Vg(ie(this.V),ie(this.t));Vg(ie(this.V),ie(this.U));lI(this,this.V);Je(this.V,new B1(this),(!dp&&(dp=new An),dp))}
function VM(a){a.d.style[kwb]=(ql(),lvb);a.d.style['color']='';if(a.p==null||a.p.length==0){xh(a.d,'');a.d.style[_ub]=''}else{JM(a)?(a.d.style[_ub]='',undefined):(a.d.style[_ub]='1',undefined);a.f&&a.jf()>0&&nW(a.n,a.b,a.p)>a.jf()?xh(a.d,'###'):xh(a.d,a.p)}a.o!=null&&(a.d.style['color']='#'+a.o,undefined);IM(a)}
function iP(a,b){var c,d,e,f,g,h;f=new cQ;if(b.indexOf('!')!=-1){h=ggb(b,'!',0)[0];return Wfb(b_(a.t),h)?iP(a,ggb(b,'!',0)[1]):null}else if(b.indexOf(':')!=-1){g=ggb(b,':',0);c=CP(g[0]);f.col1=c.a;f.row1=c.b;d=CP(g[1]);f.col2=d.a;f.row2=d.b}else{e=CP(b);f.col1=e.a;f.row1=e.b;f.col2=f.col1;f.row2=f.row1}return f}
function S2(a,b,c){Q2();a.onload=Atb(function(){a.onload=null;a.onerror=null;a.onreadystatechange=null;b.Jf(c)});a.onerror=Atb(function(){a.onload=null;a.onerror=null;a.onreadystatechange=null;b.If(c)});a.onreadystatechange=function(){('loaded'===a.readyState||'complete'===a.readyState)&&a.onload(arguments[0])}}
function tg(a){var b,c,d,e,f,g,h;f=a.length;if(f==0){return null}b=false;c=new pf;while(Date.now()-c.a<16){d=false;for(e=0;e<f;e++){h=a[e];if(!h){continue}d=true;if(!h[0].Ld()){a[e]=null;b=true}}if(!d){break}}if(b){g=[];for(e=0;e<f;e++){!!a[e]&&(g[g.length]=a[e],undefined)}return g.length==0?null:g}else{return a}}
function OK(){var c=function(){};c.prototype={className:'',clientHeight:0,clientWidth:0,dir:'',getAttribute:function(a,b){return this[a]},href:'',id:'',lang:'',nodeType:1,removeAttribute:function(a,b){this[a]=undefined},setAttribute:function(a,b){this[a]=b},src:'',style:{},title:''};$wnd.GwtPotentialElementShim=c}
function mU(a){this.k=Qi($doc);this.c=Qi($doc);this.i=Qi($doc);this.n=Qi($doc);this.o=Qi($doc);this.p=Qi($doc);this.q=Qi($doc);this.a=Qi($doc);this.g=ej($doc);this.v=Qi($doc);this.u=[];this.f=Qi($doc);this.e=a;cU(this);fG(this.k,3);eG(this.k,new nU(this));fG(this.g,4736);eG(this.g,new pU(this));this.g.maxLength=31}
function nT(a){this.F=a;this.B=Qi($doc);this.G=Qi($doc);this.k=Qi($doc);this.u=Qi($doc);this.a=Qi($doc);this.g=Qi($doc);this.i=Qi($doc);this.I=Qi($doc);this.o=Qi($doc);this.w=Qi($doc);this.c=Qi($doc);this.J=Qi($doc);this.p=Qi($doc);this.A=Qi($doc);this.d=Qi($doc);$S(this);fG(this.B,15736908);eG(this.B,new oT(this))}
function G_(a,b,c,d,e){var f,g,h,i;if(b==0||c==0||d==0||e==0||b==c&&d==e&&b==a.V.sc&&d==a.V.tc){return}f=c;g=e;if(b>c){i=b;b=c;c=i}if(d>e){i=d;d=e;e=i}if(a.t.f){oP(a.t,a.X,a.Y,f,g,false);ZO(a.t)}else{h=dQ(a.I,d,e,b,c);Vab(a.W,a.V.tc,a.V.sc,h.row1,h.col1,h.row2,h.col2);rP(a.t,Z$(a.V.sc,a.V.tc));_R(a.Q);qb(a.r,200)}}
function ES(a){fT(a.b,a.ab==0?0:a.ab+1,0,a.r==0?0:a.r+1,0);!!a.a&&fT(a.a,a.ab==0?0:a.ab+1,0,0,a.r);!!a.X&&fT(a.X,0,a.ab,a.r==0?0:a.r+1,0);!!a.W&&fT(a.W,0,a.ab,0,a.r);TS(a.B,a.ab==0?0:a.ab+1,0,a.r==0?0:a.r+1,0);!!a.A&&TS(a.A,a.ab==0?0:a.ab+1,0,0,a.r);!!a.F&&TS(a.F,0,a.ab,a.r==0?0:a.r+1,0);!!a.D&&TS(a.D,0,a.ab,0,a.r)}
function hrb(a){erb();var b;b=kgb(a,(lqb(),jqb));switch(b){case 'ALL':return Xqb;case 'CONFIG':return Yqb;case 'FINE':return Zqb;case 'FINER':return $qb;case 'FINEST':return _qb;case 'INFO':return arb;case 'OFF':return brb;case 'SEVERE':return crb;case oAb:return drb;default:throw WD(new hfb('Invalid level "'+a+'"'));}}
function Mq(a){var b,c,d,e,f;if(a.l==0&&a.m==0&&a.h==0){return '0'}if(a.h==Avb&&a.m==0&&a.l==0){return '-9223372036854775808'}if(a.h>>19!=0){return '-'+Mq(Dq(a))}c=a;d='';while(!(c.l==0&&c.m==0&&c.h==0)){e=lq(Dvb);c=oq(c,e,true);b=''+Lq(kq);if(!(c.l==0&&c.m==0&&c.h==0)){f=9-b.length;for(;f>0;f--){b='0'+b}}d=b+d}return d}
function Bpb(){if(!Object.create||!Object.getOwnPropertyNames){return false}var a='__proto__';var b=Object.create(null);if(b[a]!==undefined){return false}var c=Object.getOwnPropertyNames(b);if(c.length!=0){return false}b[a]=42;if(b[a]!==42){return false}if(Object.getOwnPropertyNames(b).length==0){return false}return true}
function ZS(a){this.p=a;this.k=Qi($doc);this.q=Qi($doc);this.d=Qi($doc);this.j=Qi($doc);this.a=Qi($doc);this.k.className=gxb;dh(this.k,'paintmode');this.q.className='s-top';this.d.className=hxb;this.j.className=ixb;this.a.className=jxb;Vg(this.q,this.d);Vg(this.q,this.j);Vg(this.d,this.a);Vg(this.k,this.q);oe(this,this.k)}
function b7(a){var b,c,d,e,f;e=$doc.querySelectorAll('link[rel~="icon"]');for(c=0;c<e.length;c++){d=e[c];b=(Fh(),d).getAttribute('href')||'';if(b!=null&&b.indexOf('VAADIN/themes')!=-1&&(f=Mzb.length,Wfb(b.substr(b.length-f,f),Mzb))){b=fgb(b,'VAADIN/themes/.+?/favicon.ico','VAADIN/themes/'+a+Mzb);d.setAttribute('href',b)}}}
function _O(a){var b,c,d,e,f,g,h;for(c=(h=(new Rkb(a.F.a)).a.bg().Qe(),new Xkb(h));c.a.$e();){b=(g=c.a._e(),g.jg());d=new sZ(b.c,b.k);if(!Djb(a.D,d)){b.d.style[Nwb]='';b.d.style[Owb]=''}}Mjb(a.F.a);a.f&&UO(a);for(f=new gkb((new $jb(a.D)).a);f.b;){e=fkb(f);b=hV(a.I,e.jg().a,e.jg().b);if(b){b.d.style[Nwb]=e.kg();apb(a.F,b)}}}
function iN(a,b){var c,d;if((UJ.gf((LF(),LF(),lh(a.Zc))).className||'').indexOf(zwb)!=-1){R1(a.Zc,new t7(a,b))}else{se(a,ye(UJ.gf((null,lh(a.Zc))))+'-'+Awb,true);d=new v2(a.Zc);c=T1(d);c==null&&(c='');if(c.indexOf(Awb)!=-1){a.G=false;R1(a.Zc,new v7(a,b));a.L=false}else{se(a,ye(UJ.gf((null,lh(a.Zc))))+'-'+Awb,false);lN(a,b)}}}
function N2(a,b){var c;c=new Gcb;Fcb(c,bG((Fh(),a).type));ycb(c,($2(),j3(a)));zcb(c,k3(a));Eh.Td(a)==1?xcb(c,(Lcb(),Icb)):Eh.Td(a)==2?xcb(c,(Lcb(),Kcb)):Eh.Td(a)==4?xcb(c,(Lcb(),Jcb)):xcb(c,(Lcb(),Icb));wcb(c,!!a.altKey);Acb(c,!!a.ctrlKey);Bcb(c,!!a.metaKey);Ecb(c,!!a.shiftKey);if(b){Ccb(c,O2(c.c,b));Dcb(c,P2(c.d,b))}return c}
function fP(a,b,c){var d,e,f,g,h,i,j,k;g=$wnd.Math.min(b.col1,b.col2);f=$wnd.Math.max(b.col1,b.col2);k=$wnd.Math.min(b.row1,b.row2);j=$wnd.Math.max(b.row1,b.row2);if(f>20000){$rb(ksb((yeb(Xw),Xw.i)));return}for(d=g;d<=f;d++){for(i=k;i<=j;i++){e=hV(a.I,d,i);if(e){h=e.d;h.style[Nwb]=c;apb(a.F,e);Ijb(a.D,new sZ(d,i),c)}}}Blb(a.i,b)}
function CP(a){var b,c,d,e,f,g,h,i,j;b='';g='';if(a!=null){j=ggb(a.toUpperCase(),'[0-9]',0);i=ggb(a,'[A-z]',0);j.length>0&&(b=j[0]);i.length>0&&(g=i[i.length-1])}h=g.length>0?vfb(Yeb(g)).a:0;d=0;for(f=0;f<b.length;f++){e=(xtb(f,b.length),b.charCodeAt(f));c=0;e>=65&&e<=90?(c=e-64):e>=97&&e<=122&&(c=e-96);d=d*26+c}return new sZ(d,h)}
function bV(a){var b,c,d,e,f,g;for(d=(g=(new Rkb(a.u.a)).a.bg().Qe(),new Xkb(g));d.a.$e();){c=(e=d.a._e(),e.jg());if(c.a!=a.sc||c.b!=a.tc){b=hV(a,c.a,c.b);if(b){dh(b.d,yxb);b.d.part.add(yxb);apb(a.t,b)}f=sV(a,wwb+c.a+xwb+c.b);if(f){apb(a.t,f);dh(f.d,yxb);f.d.part.add(yxb)}}}if(a.nb){b=hV(a,a.nb.a,a.nb.b);!!b&&dh(b.d,zxb)}_O(a.a.t)}
function F_(a,b){var c,d,e,f,g,h,i;for(d=new gkb((new $jb(b)).a);d.b;){c=fkb(d);e=c.jg().a;h=c.kg().a;if(h==0){if(!a.u){a.u=new Jlb;Blb(a.u,vfb(e))}else Elb(a.u,vfb(e),0)!=-1||Blb(a.u,vfb(e))}a.f[e-1]=h}JW(a.V,false);if(a.J){for(g=new fmb(a.J);g.a<g.c.a.length;){f=dmb(g);nY(a.V,f)}}a.d=true;i=GV(a.V);abb(a.W,b,i[0],i[1],i[2],i[3])}
function S_(a,b){var c,d,e,f,g,h,i;for(d=new gkb((new $jb(b)).a);d.b;){c=fkb(d);e=c.jg().a;h=c.kg().a;if(h==0){if(!a.v){a.v=new Jlb;Blb(a.v,vfb(e))}else Elb(a.v,vfb(e),0)!=-1||Blb(a.v,vfb(e))}a.M[e-1]=h}JW(a.V,false);if(a.J){for(g=new fmb(a.J);g.a<g.c.a.length;){f=dmb(g);nY(a.V,f)}}a.d=true;i=GV(a.V);obb(a.W,b,i[0],i[1],i[2],i[3])}
function BH(){$wnd.addEventListener('mouseout',Atb(function(a){var b=(jH(),fH);if(b&&!a.relatedTarget){if('html'==a.target.tagName.toLowerCase()){var c=$doc.createEvent(Oub);c.initMouseEvent(qvb,true,true,$wnd,0,a.screenX,a.screenY,a.clientX,a.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.button,null);b.dispatchEvent(c)}}}),true)}
function NQ(a){var b,c,d,e,f,g;g=a.Bf();f=ye(a.Cf().od());a.Cf().rd('v-widget',true);KQ(a,f,'-error',null!=g.jb);for(b=0;b<a.u.length;b++){e=a.u[b];a.Cf().rd(e,false);KQ(a,f+'-',e,false)}a.u.length=0;if(jdb(g.nb)){for(d=g.nb.Qe();d.$e();){c=d._e();a.Cf().rd(c,true);KQ(a,f+'-',c,true);Wf(a.u,c)}}g.mb!=null&&!Wfb(g.mb,f)&&te(a.Cf(),g.mb)}
function FV(a,b,c,d){var e,f,g,h;h=new Agb(xxb);vgb(wgb(wgb(h,a.Bc),' .sheet .cell.cs'),b);for(g=new gkb((new $jb(c)).a);g.b;){e=fkb(g);lfb(e.kg(),b)&&wgb(vgb(wgb(wgb((h.a+=Ixb,h),a.Bc),Fxb),e.jg()),'.cell.cs0')}for(f=new gkb((new $jb(d)).a);f.b;){e=fkb(f);lfb(e.kg(),b)&&wgb(vgb(wgb(wgb((h.a+=Ixb,h),a.Bc),Exb),e.jg()),'.cell.cs0')}return h.a}
function tY(a){var b,c,d,e,f,g;hY(a,a.hc,a.ec,a.mb,a.jb,false,a.gc);g=a.Z?a.gc+1:a.gc;if(a.ic.childNodes.length==g){return}$g(a.ic);for(e=1;e<=g;e++){c=Qi($doc);Vg(a.ic,c);(Fh(),Eh).ge(c,''+e);c.className=Zxb;f=e;LF();JF.Oe(c,1);eG(c,new XY(a,f))}$g(a.dc);for(d=1;d<=g-1;d++){b=Qi($doc);Vg(a.dc,b);b.className=Owb;b.style[Bwb]=15*d+(hm(),hwb)}}
function HQ(a,b){b.Kf('id')&&(a.Bf().lb!=null?vh(ie(a.Cf()),a.Bf().lb):b.b||(ie(a.Cf()).removeAttribute('id'),undefined));Yq(a.Bf(),126)?Yq(a.Cf(),61)&&a.Cf().Dd((a.Bf(),0)):Yq(a.Bf(),165)&&Yq(a.Cf(),61)&&a.Cf().Dd(a.Bf().n);sQ(a,b);NQ(a);MQ(a,a.Bf().ob==null?'':a.Bf().ob,a.Bf().kb==null?'':a.Bf().kb);if(!a.v&&a.Ef()){a.v=true;null.vg(a.Cf())}}
function vS(a,b){var c,d,e,f;if(a._){c=!(!!a.a&&a.a.K>a.b.K)&&b;e=!(!!a.X&&a.X.j>a.b.j)&&b;jT(a.b,c,e,c,e);if(a.a){c=!(!!a.b&&a.b.K>=a.a.K)&&b;d=!(!!a.W&&a.W.j>a.a.j)&&b;jT(a.a,c,d,c,d)}if(a.X){f=!(!!a.W&&a.W.K>a.X.K)&&b;e=!(!!a.b&&a.b.j>=a.X.j)&&b;jT(a.X,f,e,f,e)}if(a.W){f=!(!!a.X&&a.X.K>=a.W.K)&&b;d=!(!!a.a&&a.a.j>=a.W.j)&&b;jT(a.W,f,d,f,d)}}}
function lU(a){var b,c,d;if(a==null){return false}d=a.length;if(d<1||d>31){return false}for(c=0;c<d;c++){b=(xtb(c,a.length),a.charCodeAt(c));switch(b){case 47:case 92:case 63:case 42:case 93:case 91:case 58:return false;default:continue;}}xtb(0,a.length);if(a.charCodeAt(0)==39||(xtb(d-1,a.length),a.charCodeAt(d-1)==39)){return false}return true}
function HH(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var b,c;try{b=Atb(NG)()}finally{c=d&&d(a)}if(b!=null){return b}if(c!=null){return c}};$wnd.onunload=Atb(function(a){try{HG();BG&&mp((!CG&&(CG=new $G),CG))}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}})}
function Kp(b,c){var d,e,f,g,h,i;if(!c){throw WD(new Lfb('Cannot fire null event'))}try{++b.b;h=(e=Np(b,c.oe(),null),e);d=null;i=b.c?h.dg(h.size()):h.cg();while(b.c?i.gg():i.$e()){g=b.c?i.hg():i._e();try{c.me(g)}catch(a){a=VD(a);if(Yq(a,19)){f=a;!d&&(d=new dpb);Ijb(d.a,f,d)}else throw WD(a)}}if(d){throw WD(new Tp(d))}}finally{--b.b;b.b==0&&Op(b)}}
function vX(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;k=(d.offsetWidth||0)|0;j=b-k;i=(Fh(),Eh).Zd(d);if(j>0){o=(HG(),(qj($doc).clientWidth|0)+nj($doc));n=nj($doc);h=o-i;e=i-n;h<b&&e>=j&&(i-=j)}l=Eh.$d(d);p=(HG(),oj($doc));m=oj($doc)+(qj($doc).clientHeight|0);f=l-p;g=m-(l+((d.offsetHeight||0)|0));g<c&&f>=c?(l-=c):(l+=(d.offsetHeight||0)|0);oN(a.qb,i,l)}
function shb(){shb=BE;var a;nhb=new Mhb(1,1);phb=new Mhb(1,10);rhb=new Mhb(0,0);mhb=new Mhb(-1,1);ohb=iq(dq(WB,1),Etb,10,0,[rhb,nhb,new Mhb(1,2),new Mhb(1,3),new Mhb(1,4),new Mhb(1,5),new Mhb(1,6),new Mhb(1,7),new Mhb(1,8),new Mhb(1,9),phb]);qhb=fq(WB,Etb,10,32,0,1);for(a=0;a<qhb.length;a++){qhb[a]=dE(lE(1,a),0)?Uhb(lE(1,a)):Ghb(Uhb(jE(lE(1,a))))}}
function kU(a){var b,c,d,e,f,g;e=a.g.value;if(e.length>31){e=(wtb(0,31,e.length),e.substr(0,31));sj(a.g,e)}xh(a.v,e);f=(a.v.offsetWidth||0)|0;f<50&&(f=50);c=a.u[a.r];b=hh(a.k);d=(Fh(),Eh).Zd(c)+((c.offsetWidth||0)|0)+10;while(d>b&&a.s<a.u.length-1){g=bU(a,a.s);d=dr(d-g);a.t-=g;++a.s}a.c.style[Bwb]=a.t+(hm(),hwb);a.g.style[Bub]=f+5+hwb;c.style[Bub]=f+hwb}
function U3(c){var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.Nf(fB,'title',d);var d={setter:function(a,b){a.q=b},getter:function(a){return a.q}};c.Nf(pB,Fzb,d);var d={setter:function(a,b){a.n=neb(b)},getter:function(a){return qeb(a.n)}};c.Nf(jB,Gzb,d);var d={setter:function(a,b){a.ob=b},getter:function(a){return a.ob}};c.Nf(RA,Bub,d)}
function nO(a,b){var c;b.b=a.b;b.e=a.e;b.f=a.f;xh(b.a,mh(a.a));c=(LF(),b.Zc).style;re(b,a.Zc.className||'');a.i>-1&&(c[Bwb]=a.i+(hm(),hwb),undefined);a.j>-1&&(c[Cwb]=a.j+(hm(),hwb),undefined);a.d>-1&&(c[Aub]=a.d+(hm(),hwb),undefined);a.n>-1&&(c[Bub]=a.n+(hm(),hwb),undefined);a.k>-1&&(c[awb]=a.k+(hm(),hwb),undefined);a.g>-1&&(c[_vb]=a.g+(hm(),hwb),undefined)}
function pib(a,b){var c,d,e,f,g,h;f=(d=rE(a),d!=0?tfb(d):tfb(rE(nE(a,32)))+32);g=(e=rE(b),e!=0?tfb(e):tfb(rE(nE(b,32)))+32);h=$wnd.Math.min(f,g);f!=0&&(a=nE(a,f));g!=0&&(b=nE(b,g));do{if(ZD(a,b)>=0){a=oE(a,b);a=nE(a,(c=rE(a),c!=0?tfb(c):tfb(rE(nE(a,32)))+32))}else{b=oE(b,a);b=nE(b,(c=rE(b),c!=0?tfb(c):tfb(rE(nE(b,32)))+32))}}while(ZD(a,0)!=0);return lE(b,h)}
function mY(a,b,c){var d,e,f;f=0;e=0;d=c.d;if(a.ob>=b.col1&&b.col2>a.ob){EW(a,b,c);Ijb(a.Kb,b,c);f=1}else{f=kS(a.a.f,b.col1,b.col2+1);d.style[Bub]=f+(hm(),hwb)}if(a.Uc>=b.row1&&b.row2>a.Uc){DW(a,b,c);Ijb(a.Kb,b,c);e=1}else{e=kS(a.a.V.W,b.row1,b.row2+1);d.style[Aub]=e+(hm(),hwb)}f==0||e==0?(c.d.style[Zub]=(zk(),zub),undefined):(c.d.style[Zub]='flex',undefined)}
function dY(a){var b,c,d,e,f,g,h;hY(a,a.I,a.F,a.lb,a.ib,true,a.H);g=a.Z?a.H+1:a.H;if(a.J.childNodes.length==g){return}$g(a.J);for(e=1;e<=g;e++){h=Zi($doc);c=Qi($doc);Vg(a.J,c);c.appendChild(h);(Fh(),Eh).ge(h,''+e);c.className=Zxb;f=e;LF();JF.Oe(c,1);eG(c,new VY(a,f))}$g(a.D);for(d=1;d<=g-1;d++){b=Qi($doc);Vg(a.D,b);b.className=Owb;b.style[Cwb]=18*d+(hm(),hwb)}}
function nib(a,b,c,d){var e,f,g,h,i,j,k;j=0;f=YD(d,uAb);for(h=c-1;h>=0;h--){k=kE(lE(j,32),YD(b[h],uAb));if(ZD(k,0)>=0){i=_D(k,f);j=hE(k,f)}else{e=nE(k,1);g=d>>>1;i=_D(e,g);j=hE(e,g);j=XD(lE(j,1),YD(k,1));if((d&1)!=0){if(ZD(i,j)<=0){j=oE(j,i)}else{if(gE(oE(i,j),f)){j=XD(j,oE(f,i));i=oE(i,1)}else{j=XD(j,oE(lE(f,1),i));i=oE(i,2)}}}}a[h]=rE(YD(i,uAb))}return rE(j)}
function hS(a,b){var c,d;a.S=aW(a.Q,a.f,a.L);a.T=bW(a.Q,a.f,a.L);a.R=ZV(a.Q,a.f,a.L);a.g=!a.S&&!a.T;a.i=!a.S&&!a.R;a.t=ph(a.Q.Ac);a.u=(a.Q.Ac.scrollTop||0)|0;a.c=(c=nj($doc),$2(),(Fh(),b).type.indexOf(axb)!=-1?Qm(b.changedTouches[0])+c:_h(b.clientX||0)+c);a.d=(d=oj($doc),b.type.indexOf(axb)!=-1?Rm(b.changedTouches[0])+d:_h(b.clientY||0)+d);a.U=a.f;a.V=a.L;DS(a)}
function Xhb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;n=b.length;i=n;xtb(0,b.length);if(b.charCodeAt(0)==45){l=-1;m=1;--n}else{l=1;m=0}f=(hib(),gib)[10];e=n/f|0;q=n%f;q!=0&&++e;h=fq(ir,Jxb,20,e,15,1);c=fib[8];g=0;o=m+(q==0?f:q);for(p=m;p<i;p=o,o=p+f){d=Yeb((wtb(p,o,b.length),b.substr(p,o-p)));j=(Eib(),Iib(h,h,g,c));j+=xib(h,g,d);h[g++]=j}k=g;a.e=l;a.d=k;a.a=h;vhb(a)}
function Nib(a,b,c){var d,e,f,g,h;for(f=0;f<b;f++){d=0;for(h=f+1;h<b;h++){d=XD(XD(iE(YD(a[f],uAb),YD(a[h],uAb)),YD(c[f+h],uAb)),YD(rE(d),uAb));c[f+h]=rE(d);d=nE(d,32)}c[f+b]=rE(d)}cib(c,c,b<<1);d=0;for(e=0,g=0;e<b;++e,g++){d=XD(XD(iE(YD(a[e],uAb),YD(a[e],uAb)),YD(c[g],uAb)),YD(rE(d),uAb));c[g]=rE(d);d=nE(d,32);++g;d=XD(d,YD(c[g],uAb));c[g]=rE(d);d=nE(d,32)}return c}
function CQ(b){var c,d,e,f;e=new c5(b.sg);try{f=u5(new V4(e,'getWidget'));d=b5(f);return d}catch(a){a=VD(a);if(Yq(a,79)){c=a;throw WD(new kfb('Default implementation of createWidget() does not work for '+Aeb(b.sg)+'. This might be caused by explicitely using '+'super.createWidget() or some unspecified '+'problem with the widgetset compilation.',c))}else throw WD(a)}}
function xhb(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;f=b.e;if(f==0){throw WD(new geb(tAb))}e=b.d;d=b.a;if(e==1){return mib(a,d[0],f)}n=a.a;o=a.d;c=o!=e?o>e?1:-1:wib(n,d,o);if(c<0){return iq(dq(WB,1),Etb,10,0,[rhb,a])}p=a.e;h=o-e+1;k=e;i=p==f?1:-1;g=fq(ir,Jxb,20,h,15,1);j=lib(g,h,n,o,d,e);l=new Ohb(i,h,g);m=new Ohb(p,k,j);vhb(l);vhb(m);return iq(dq(WB,1),Etb,10,0,[l,m])}
function DR(){af();this.j=Qi($doc);this.a=new HR(this);this.f=new Jlb;this.j.className=_wb;this.j.setAttribute('role',jub);this.j.part.add('popup-button');this.e=new NN;re(this.e,'v-spreadsheet-popupbutton-overlay');this.i=new FL;te(this.i,'overlay-layout');this.g=new nR;lR(this.g,this.e);DL(this.i,this.g);xI(this.e,this.i);oe(this,this.j);Ie(this,this,(kn(),kn(),jn))}
function _N(a,b){if(b){Pm(a.e,sI(a.g.a));ue(a.g,false);a.e.style[Zub]=(zk(),dvb);a.e.focus();a.e.select()}else{JI(a.g,a.e.value);ue(a.g,true);a.e.style[Zub]=(zk(),zub);SU(a.s,sI(a.g.a),a.b,a.d)}le(a.f)&&(le(a.a)||le(a.g)||Wfb((zk(),dvb),Hj(a.e.style)))?(ke(a.f).className||'').indexOf(Iwb)!=-1||se(a.f,Iwb,true):(ke(a.f).className||'').indexOf(Iwb)!=-1&&se(a.f,Iwb,false)}
function Ahb(a,b){var c,d,e,f;c=a.e<0?a.e==0?a:new Ohb(-a.e,a.d,a.a):a;d=b.e<0?b.e==0?b:new Ohb(-b.e,b.d,b.a):b;if(c.e==0){return d}else if(d.e==0){return c}if((c.d==1||c.d==2&&c.a[1]>0)&&(d.d==1||d.d==2&&d.a[1]>0)){return Zhb(pib((f=c.d>1?ztb(c.a[0],c.a[1]):ztb(c.a[0],0),c.e>0?f:jE(f)),(e=d.d>1?ztb(d.a[0],d.a[1]):ztb(d.a[0],0),d.e>0?e:jE(e))))}return qib(uhb(c),uhb(d))}
function IU(a){var b,c,d,e,f,g,h,i;ah(a.fb);for(f=new fmb(a.K);f.a<f.c.a.length;){d=dmb(f);g=Jh((Fh(),d));!!g&&g.removeChild(d)}a.K.a.length=0;for(e=new fmb(a.jc);e.a<e.c.a.length;){d=dmb(e);g=Jh((Fh(),d));!!g&&g.removeChild(d)}a.jc.a.length=0;for(i=new fmb(a.lc);i.a<i.c.a.length;){h=dmb(i);for(c=new fmb(h);c.a<c.c.a.length;){b=dmb(c);ah(b.d)}h.a.length=0}a.lc.a.length=0}
function uY(a,b,c,d,e,f){var g,h,i,j,k,l;a.v=false;if(f){NU(a);RU(a);i=hV(a,a.sc,a.tc);a.nb=null;!!i&&sh(i.d,zxb)}for(l=d;l<=e;l++){for(h=b;h<=c;h++){if(h!=a.sc||l!=a.tc){i=hV(a,h,l);apb(a.u,new sZ(h,l));if(i){apb(a.t,i);dh(i.d,yxb);i.d.part.add(yxb)}j=sV(a,wwb+h+xwb+l);if(j){apb(a.t,j);dh(j.d,yxb);j.d.part.add(yxb)}}}}for(k=d;k<=e;k++){jX(a,k)}for(g=b;g<=c;g++){iX(a,g)}}
function MX(a,b,c){var d,e;a._=true;OT(a.$,'.'+a.Bc+' .sheet div'+(wxb+a.sc+'.row'+a.tc),0);re(a.sb,wwb+a.sc+xwb+a.tc+' cell'+' '+(e=iV(a,a.sc,a.tc),!e?'cs0':e.cellStyle));if(fW(a,wwb+a.sc+xwb+a.tc)){a.ab=true;d=sV(a,wwb+a.sc+xwb+a.tc);!!d&&qe(a.sb,Ij(d.d.style))}iY(a);b&&(WV(a,a.sc,a.tc)||gX(a,a.sc,a.tc),W2((ng(),mg),new PY(a,false)));W2((ng(),mg),new RY(a,c));kL(a.sb,c)}
function jU(a){var b;if(a.s==0){dh(a.p,lvb);a.p.part.replace(rxb,vxb);dh(a.n,lvb);a.n.part.replace(rxb,vxb)}else{sh(a.p,lvb);a.p.part.replace(vxb,rxb);sh(a.n,lvb);a.n.part.replace(vxb,rxb)}b=aU(a,a.u.length-1);if(a.s<b){sh(a.q,lvb);a.q.part.replace(vxb,rxb);sh(a.o,lvb);a.o.part.replace(vxb,rxb)}else{dh(a.q,lvb);a.q.part.replace(rxb,vxb);dh(a.o,lvb);a.o.part.replace(rxb,vxb)}}
function Yeb(a){var b,c,d,e,f;if(a==null){throw WD(new Nfb(Mtb))}d=a.length;e=d>0&&(xtb(0,a.length),a.charCodeAt(0)==45||(xtb(0,a.length),a.charCodeAt(0)==43))?1:0;for(b=e;b<d;b++){if(veb((xtb(b,a.length),a.charCodeAt(b)))==-1){throw WD(new Nfb(Ltb+a+'"'))}}f=parseInt(a,10);c=f<Ntb;if(isNaN(f)){throw WD(new Nfb(Ltb+a+'"'))}else if(c||f>Ktb){throw WD(new Nfb(Ltb+a+'"'))}return f}
function U_(a,b,c){var d,e,f,g,h,i,j;b==0?(b=1):b<0&&(b=yV(a.V)+1);b>a.g&&(b=a.g);c==0?(c=1):c<0&&(c=gV(a.V)+1);c>a.O&&(c=a.O);h=a.V.sc;i=a.V.tc;if(b<=h){d=b;e=h}else{d=h;e=b}if(c<=i){f=c;g=i}else{f=i;g=c}if(a.t.f){oP(a.t,a.X,a.Y,b,c,false)}else{j=dQ(a.I,f,g,d,e);wY(a.V,j.col1,j.col2,j.row1,j.row2);uY(a.V,j.col1,j.col2,j.row1,j.row2,true);rP(a.t,$$(j.col1,j.col2,j.row1,j.row2))}}
function rq(a,b,c,d,e,f){var g,h,i,j,k,l,m;j=uq(b)-uq(a);g=Gq(b,j);i=nq(0,0,0);while(j>=0){h=xq(a,g);if(h){j<22?(i.l|=1<<j,undefined):j<44?(i.m|=1<<j-22,undefined):(i.h|=1<<j-44,undefined);if(a.l==0&&a.m==0&&a.h==0){break}}k=g.m;l=g.h;m=g.l;g.h=l>>>1;g.m=k>>>1|(l&1)<<21;g.l=m>>>1|(k&1)<<21;--j}c&&tq(i);if(f){if(d){kq=Dq(a);e&&(kq=Jq(kq,(Sq(),Qq)))}else{kq=nq(a.l,a.m,a.h)}}return i}
function VX(a,b,c){var d,e,f,g;e=hV(a,b,c);d=sV(a,wwb+b+xwb+c);g=hV(a,a.sc,a.tc);f=sV(a,wwb+a.sc+xwb+a.tc);apb(a.u,new sZ(a.sc,a.tc));if(g){apb(a.t,g);sh(g.d,zxb);dh(g.d,yxb);g.d.part.add(yxb)}if(f){apb(a.t,f);sh(f.d,zxb);dh(f.d,yxb);f.d.part.add(yxb)}cpb(a.u,new sZ(b,c));if(e){cpb(a.t,e);sh(e.d,yxb);e.d.part.remove(yxb)}if(d){cpb(a.t,d);sh(d.d,yxb);d.d.part.remove(yxb)}a.tc=c;a.sc=b}
function EO(a,b){var c,d,e,f;d=!a.c.vb&&!!(Fh(),b).ctrlKey||!!(Fh(),b).metaKey;f=CY(b);e=jW(a.c,f);if(!d||!e){return}if(((Fh(),b).keyCode|0)==67||(b.keyCode|0)==88){(af(),_e).df((LF(),a.Zc));kL(a,zO(a.a));c=oh(a.Zc,nwb).length;c>0&&jL(a,0,c);a.Zc.style[_vb]=(hm(),'100.0px');zg((ng(),new IO(a,b)),100)}if((b.keyCode|0)==86){(LF(),a.Zc)[nwb]='';(af(),_e).df(a.Zc);zg((ng(),new KO(a)),100)}}
function R2(){var a,b,c,d,e,f,g,h,i,j;this.a=new dpb;new Zob;a=$doc;a.getElementsByTagName(Dyb)[0];i=a.getElementsByTagName('script');for(e=0;e<i.length;e++){b=i[e];j=b.src;j!=null&&j.length!=0&&apb(this.a,j)}g=a.getElementsByTagName(oub);for(d=0;d<g.length;d++){f=g[d];h=f.rel;c=f.href;Xfb(Eyb,h)&&c!=null&&c.length!=0&&apb(this.a,c);Xfb('import',h)&&c!=null&&c.length!=0&&apb(this.a,c)}}
function rT(a,b){var c,d;if(!a.c._){if(!a.b){return}d=(Fh(),b).keyCode|0;c=Eh.Ud(b);if((c==122||c==121)&&(!!b.ctrlKey||!!b.metaKey)){Eh.Yd(b);b.stopPropagation();return}if(c==0){switch(d){case 38:case 40:case 37:case 39:case 9:case 8:case 46:case 32:Eh.Yd(b);b.stopPropagation();break;case 13:X_(a.c.a,b,String.fromCharCode(c));}}else !b.ctrlKey&&!b.metaKey&&X_(a.c.a,b,String.fromCharCode(c))}}
function vib(a,b,c,d,e){var f,g;f=XD(YD(b[0],uAb),YD(d[0],uAb));a[0]=rE(f);f=mE(f,32);if(c>=e){for(g=1;g<e;g++){f=XD(f,XD(YD(b[g],uAb),YD(d[g],uAb)));a[g]=rE(f);f=mE(f,32)}for(;g<c;g++){f=XD(f,YD(b[g],uAb));a[g]=rE(f);f=mE(f,32)}}else{for(g=1;g<c;g++){f=XD(f,XD(YD(b[g],uAb),YD(d[g],uAb)));a[g]=rE(f);f=mE(f,32)}for(;g<e;g++){f=XD(f,YD(d[g],uAb));a[g]=rE(f);f=mE(f,32)}}ZD(f,0)!=0&&(a[g]=rE(f))}
function qV(a,b,c){var d,e,f,g,h,i,j,k,l;f=b-1;j=c-1;if(j<0||f<0){return null}if(a.Uc<c){l=c>=a.db;k=a.d.a.length>c-a.db;if(l&&k){g=Dlb(a.d,c-a.db).a.length>f;if(g){return Dlb(Dlb(a.d,c-a.db),f)}}}else if(a.ob<b){h=b-a.bb;k=a.Sc.a.length>j;if(k){i=b>=a.bb;g=Dlb(a.Sc,j).a.length>h;if(i&&g){return Dlb(Dlb(a.Sc,j),h)}}}else{e=j*a.ob+f;d=a.Oc.a.length>e;if(e>=0&&d){return Dlb(a.Oc,e)}}return null}
function a7(a,b,c,d,e){var f,g;f=null;if(b!=null){f=Z6(d);!f&&isb(ksb((yeb(iA),iA.k)),'Did not find the link tag for the old theme ('+d+'), adding a new stylesheet for the new theme ('+e+')')}if(c!=null){g=Ui($doc);g.rel=Eyb;g.type=Qxb;g.href=e;S2(g,new o7(a,c,e,f),null);f?Yg($doc.getElementsByTagName(Dyb)[0],g,f):Vg($doc.getElementsByTagName(Dyb)[0],g)}else{!!f&&_g(Jh((Fh(),f)),f);X6(a,null)}}
function pS(a,b){var c,d,e,f,g,h,i,j;a.o=true;c=(g=nj($doc),$2(),(Fh(),b).type.indexOf(axb)!=-1?Qm(b.changedTouches[0])+g:_h(b.clientX||0)+g);d=(h=oj($doc),b.type.indexOf(axb)!=-1?Rm(b.changedTouches[0])+h:_h(b.clientY||0)+h);if(iS(a,d,c)){return}i=c-a.v+ph(a.Q.Ac)-a.t;j=d-a.w+((a.Q.Ac.scrollTop||0)|0)-a.u;i-=70;j-=20;e=a.q.f;f=a.q.V.W;a.U=jS(e,a.O,i,true);a.V=jS(f,a.P,j,true);U_(a.Q.a,a.U,a.V)}
function oS(a,b){var c,d,e,f,g,h,i,j,k,l;a.j=false;a.s=false;c=(i=nj($doc),$2(),(Fh(),b).type.indexOf(axb)!=-1?Qm(b.changedTouches[0])+i:_h(b.clientX||0)+i);d=(j=oj($doc),b.type.indexOf(axb)!=-1?Rm(b.changedTouches[0])+j:_h(b.clientY||0)+j);if(iS(a,d,c)){return}k=c-a.v+ph(a.Q.Ac)-a.t;l=d-a.w+((a.Q.Ac.scrollTop||0)|0)-a.u;f=a.q.f;h=a.q.V.W;e=jS(f,a.e,k,false);g=jS(h,a.K,l,false);e>=0&&g>=0&&FS(a,e,g)}
function eY(b){var c,d,e,f,g,h,i,j;i=b.a.k;try{f=new Llb(new Rkb(i));Cmb();pmb(f.a,f.a.length);g=f.a.length;h=new Agb(BV(b.Ec));for(d=0;d<g;d++){e=(qtb(d,f.a.length),f.a[d]);j=qjb(opb(i.a,e));wgb(h,xxb+b.Bc+' .sheet .cell.cf'+e+' {'+j+'}')}$g(b.Ec);Vg(b.Ec,fj($doc,h.a))}catch(a){a=VD(a);if(Yq(a,21)){c=a;hsb(b.U,'SheetWidget:updateConditionalFormattingStyles: '+zf(c,c.Id())+Yxb)}else throw WD(a)}}
function uW(b){var c,d,e,f,g;e=(b.Ac.scrollTop||0)|0;d=ph(b.Ac);g=e-b.Qb;c=d-b.Pb;if($wnd.Math.abs(g)<(b.a.L/2|0)&&$wnd.Math.abs(c)<(b.a.i/2|0)){return}try{if($wnd.Math.abs(c)>(b.a.i/2|0)){b.Pb=d;JV(b,d,c)}if($wnd.Math.abs(g)>(b.a.L/2|0)){b.Qb=e;PV(b,e,g)}K6(b.Sb)}catch(a){a=VD(a);if(Yq(a,19)){f=a;hsb(b.U,'SheetWidget:updateSheetDisplay: '+zf(f,f.Id()))}else throw WD(a)}ZW(b);cY(b,g,c);bV(b);Z_(b.a)}
function Eib(){Eib=BE;var a,b;Bib=fq(WB,Etb,10,32,0,1);Cib=fq(WB,Etb,10,32,0,1);Dib=iq(dq(ir,1),Jxb,20,15,[1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,qAb,rAb]);a=1;for(b=0;b<=18;b++){Bib[b]=(shb(),ZD(a,0)>=0?Uhb(a):Ghb(Uhb(jE(a))));Cib[b]=dE(lE(a,b),0)?Uhb(lE(a,b)):Ghb(Uhb(jE(lE(a,b))));a=iE(a,5)}for(;b<Cib.length;b++){Bib[b]=Fhb(Bib[b-1],Bib[1]);Cib[b]=Fhb(Cib[b-1],(shb(),phb))}}
function RU(a){var b,c,d,e,f,g;for(g=new fmb(a.jc);g.a<g.c.a.length;){e=dmb(g);sh(e,Axb);e.part.remove(Bxb)}for(d=new fmb(a.K);d.a<d.c.a.length;){b=dmb(d);sh(b,Cxb);b.part.remove(Bxb)}if(a.jb){for(f=new fmb(a.jb);f.a<f.c.a.length;){e=dmb(f);sh(e,Axb);e.part.remove(Bxb)}}if(a.ib){for(c=new fmb(a.ib);c.a<c.c.a.length;){b=dmb(c);sh(b,Cxb);b.part.remove(Bxb)}}Mjb(a.xc.a);Mjb(a.uc.a);Mjb(a.wc.a);Mjb(a.vc.a)}
function mQ(a,b){a.G=b;a.I='1';!!a&&(ie((!a.F&&(a.F=new q1),a.F)).tkPid='1',undefined);Bp((!a.H&&(a.H=new Ep(a)),a.H),(s3(),r3),a);_1(a.G,new N$(a.j));F0((!a.F&&(a.F=new q1),a.F),a.I);tQ(a,cy,a.a);!a.F&&(a.F=new q1);a.k=new mcb;$0((!a.F&&(a.F=new q1),a.F),a.k);V0((!a.F&&(a.F=new q1),a.F),new q$(a));a.b=Ie(a.G.b,new r$,(rn(),rn(),qn));Je(a.G.b,new y$(a),jp?jp:(jp=new An));Tab(a.k.d,iq(dq(MB,1),Etb,1,5,[]))}
function wU(a,b){var c,d,e,f,g;!a.Dc&&(a.Dc=new Zob);d=b.b;g=b.k;e=wwb+d+xwb+g;if(d!=0&&g!=0){Jjb(a.Dc,e,b);if(d>=a.bb&&d<=a.xb&&g>=a.db&&g<=a.zb||d<=a.ob&&g<=a.Uc||d>a.ob&&d<=a.xb&&g<=a.Uc||g>a.Uc&&g<=a.zb&&d<=a.ob){c=hV(a,d,g);f=b.Yc;if(f){if(a==f){SM(c,(LF(),b.Zc))}else{Oe(b);SM(c,(LF(),b.Zc));Qe(b,a)}}else{SM(c,(LF(),b.Zc));Qe(b,a)}}}else{while(Hjb(a.Dc,e)){wR(b,--d);e=wwb+d+xwb+g}Jjb(a.Dc,e,b)}CR(b,a,a.Ac)}
function JU(a,b){var c,d,e,f,g,h;a.Db=false;for(e=new fmb(nV(a));e.a<e.c.a.length;){d=dmb(e);KW(a,d)}a.S=null;for(h=(f=(new alb(a.Cc)).a.bg().Qe(),new flb(f));h.a.$e();){g=(c=h.a._e(),c.kg());KW(a,g)}Mjb(a.Cc);if(a.T){Mjb(a.T);a.T=null}IU(a);Mjb(a.e);Mjb(a.rc);HT(a.w);MU(a);QU(a);KU(a);PU(a);LU(a);if(b){HT(a.Fc);ah(a.w);ah(a.Ec);ah(a.Fc);ah(a.$);ah(a.Xb);ah(a.Fb);!!a.pb&&ah(a.pb);if(a.Ob){CM(a.Ob.a);a.Ob=null}}}
function VV(a,b,c,d,e){return (b<=a.ob||b>=rV(a)&&b<=yV(a))&&(d<=a.Uc||d<=HV(a)&&d>=gV(a))&&(b>=a.bb&&b<=a.xb&&e>=a.db&&e<=a.zb||b<=a.ob&&e<=a.Uc||b>a.ob&&b<=a.xb&&e<=a.Uc||e>a.Uc&&e<=a.zb&&b<=a.ob)&&(c>=a.bb&&c<=a.xb&&d>=a.db&&d<=a.zb||c<=a.ob&&d<=a.Uc||c>a.ob&&c<=a.xb&&d<=a.Uc||d>a.Uc&&d<=a.zb&&c<=a.ob)&&(c>=a.bb&&c<=a.xb&&e>=a.db&&e<=a.zb||c<=a.ob&&e<=a.Uc||c>a.ob&&c<=a.xb&&e<=a.Uc||e>a.Uc&&e<=a.zb&&c<=a.ob)}
function L$(a,b,c){var d,e,f,g,h,i;h=i$(a.b);if(h==null||h.length==0){return}a.e=b;a.g=c;rJ(a.f);for(e=h,f=0,g=e.length;f<g;++f){d=e[f];pJ(a.f,new SJ((i=new ygb,i.a+='<div style="display:flex; align-items: baseline; gap: 5px;">',d.b!=null&&d.b.length!=0&&wgb(wgb((i.a+='<div id="',i),d.b),'" style="display:contents"><\/div>'),wgb(i,d.f),i.a+='<\/div>',i.a),d))}m3(ie(a.f));a.d=c3();bK(a,'');kN(a,1);dK(a,new D6(a))}
function Sgb(a,b){var c,d,e,f,g,h;e=Ygb(a);h=Ygb(b);if(e==h){if(a.e==b.e&&a.a<54&&b.a<54){return a.f<b.f?-1:a.f>b.f?1:0}d=a.e-b.e;c=(a.d>0?a.d:$wnd.Math.floor((a.a-1)*sAb)+1)-(b.d>0?b.d:$wnd.Math.floor((b.a-1)*sAb)+1);if(c>d+1){return e}else if(c<d-1){return -e}else{f=(!a.c&&(a.c=Zhb(bE(a.f))),a.c);g=(!b.c&&(b.c=Zhb(bE(b.f))),b.c);d<0?(f=Fhb(f,Mib(-d))):d>0&&(g=Fhb(g,Mib(d)));return thb(f,g)}}else return e<h?-1:1}
function uJ(a,b){var c,d,e;d=(LF(),cj($doc));a.d=_i($doc);Vg(d,VF(a.d));if(!b){e=bj($doc);Vg(a.d,VF(e))}a.i=b;c=(HI(),GI).cf();Vg(c,VF(d));pe(a,c);Qd();Db(kd,a.Zc);a.Wc==-1?YF(a.Zc,2225|(a.Zc.__eventBits||0)):(a.Wc|=2225);a.Zc.className='gwt-MenuBar';b?se(a,ye(a.Zc)+'-'+'vertical',true):se(a,ye(a.Zc)+'-'+'horizontal',true);a.Zc.style['outline']='0px';a.Zc.setAttribute('hideFocus','true');Ie(a,new NJ(a),(cn(),cn(),bn))}
function i$(a){var b,c,d,e,f,g,h,i,j;e=new Jlb;j=DQ(a.a.a);h=a.a.a.k;b=oh(a.a.a.f,iyb);g=new Zob;for(d=new fmb(a.b);d.a<d.c.a.length;){c=dmb(d);i=new EZ(a,h,c.key,c.type,j);BZ(i,c.caption);if(c.iconNodeId!=null){f='spreadsheet-icon-container-'+c.iconNodeId;Jjb(g,f,QT(c.iconNodeId,b));i.b=f}$sb(e.a,i)}g.a.c+g.c.c==0||(!db&&(db=eb()?new fb:new nb),db).jd(new l$(g),null);return Ilb(e,fq(Pz,{725:1,3:1},125,e.a.length,0,1))}
function mib(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;n=a.a;o=a.d;p=a.e;if(o==1){d=YD(n[0],uAb);e=YD(b,uAb);f=_D(d,e);j=hE(d,e);p!=c&&(f=jE(f));p<0&&(j=jE(j));return iq(dq(WB,1),Etb,10,0,[(shb(),ZD(f,0)>=0?Uhb(f):Ghb(Uhb(jE(f)))),ZD(j,0)>=0?Uhb(j):Ghb(Uhb(jE(j)))])}h=o;i=p==c?1:-1;g=fq(ir,Jxb,20,h,15,1);k=iq(dq(ir,1),Jxb,20,15,[nib(g,n,o,b)]);l=new Ohb(i,h,g);m=new Ohb(p,1,k);vhb(l);vhb(m);return iq(dq(WB,1),Etb,10,0,[l,m])}
function KW(b,c){var d,e,f,g,h;try{d=(LF(),c.Zc);g=Jh((Fh(),d));h=c.Yc;e=nf(b.Ac,g)||nf(b.Pc,g)||nf(b.Rc,g)||nf(b.c,g);if(e||M(c,b.S)||!!g&&!!g.parentNode&&Zg(b.Ac,g.parentNode)){Qe(c,null);f=Jh(d);!!f&&f.removeChild(d);return true}else if(M(b,h)){Qe(c,null);return true}else{return false}}catch(a){a=VD(a);if(Yq(a,21)){csb(b.U,(erb(),drb),'Exception while removing child widget from SheetWidget')}else throw WD(a)}return false}
function YN(a){var b,c;if(a.c){b=hh(a.c);c=ih(a.c);if(b>=gh(a.o)&&b<hh(a.o)&&c>=ih(a.o)&&c<=fh(a.o)){UN(a);(LF(),a.Zc).style[$ub]=kvb;!!a.u&&(a.u.style[$ub]=kvb,undefined);a.i.style[$ub]=(vm(),kvb);a.N||(rN(a),SN(a.Zc))}else{(LF(),a.Zc).style[$ub]=lvb;!!a.u&&(a.u.style[$ub]=lvb,undefined);a.i.style[$ub]=(vm(),lvb)}}else{(LF(),a.Zc).style[$ub]=lvb;!!a.u&&(a.u.style[$ub]=lvb,undefined);a.i.style[$ub]=(vm(),lvb);iN(a,false);ah(a.i)}}
function Ndb(){pR.call(this);this.q=new Wdb;this.c=new Odb;this.e=new Zob;this.e.put('error',new Tdb('Error: ',' - close with ESC-key',(Cdb(),Adb)));this.e.put('warning',new Tdb('Warning: ',null,Adb));this.e.put('humanized',new Tdb('Info: ',null,Adb));this.e.put('tray',new Tdb('Status: ',null,Adb));this.e.put('assistive',new Tdb('Note: ',null,Adb));this.g=new Fdb;this.d=new Qdb;this.j=new Udb;this.k=new Vdb;this.mb='v-ui';this.n=1}
function oP(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(b==d&&c==e){g=Z$(b,c)}else{if(b>d){o=b;b=d;d=o}if(c>e){o=c;c=e;e=o}g=Z$(b,c)+':'+Z$(d,e)}if(f&&a.s>=0){g=','+g;++a.q}k=hL(a.e);i=k>0;if(i){l=gL(a.e);h=l+k;a.s=l;a.q=h}else if(f||a.s<0){l=a.q;h=a.q;a.s=a.q}else{l=a.s;h=a.q}p=(j=iL(a.e),j==null?'':j);m=(wtb(0,l,p.length),p.substr(0,l));n=igb(p,h,p.length);p=m+g+n;a.q=(m+g).length;kL(a.e,p);a.e==a.w&&kL(a.j,p);W2((ng(),mg),new RP(a))}
function gP(a,b){var c,d,e,f,g,h,i,j,k,l;YO(a);k=hP(a,b);Mjb(a.G);e=0;d=0;for(j=new fmb(k);j.a<j.c.a.length;){i=dmb(j);h=iP(a,i);if(!h){continue}if(Hjb(a.G,i)){c=Gjb(a.G,i)}else{d=d%QO.a.length;c=Dlb(QO,d);Jjb(a.G,i,c);++d}c=dgb(c,'%s','0.25');fP(a,h,c);g=b.indexOf(i,e);f=(LF(),Zi($doc));l=(wtb(e,g,b.length),b.substr(e,g-e));l=egb(l,' ','&nbsp;');f.innerHTML=l||'';Vg(a.r,f);e=g+i.length;f=Zi($doc);(Fh(),Eh).ge(f,i);f.style[Nwb]=c;Vg(a.r,f)}}
function mX(a,b){var c,d,e,f,g;if(!a.s){a.s=b}else{Mjb(a.s);!!b&&jjb(a.s,b)}if(!!b&&b.a.c+b.c.c!=0){g=new ygb;for(e=(f=(new Rkb(b)).a.bg().Qe(),new Xkb(f));e.a.$e();){c=dgb(dgb((d=e.a._e(),d.jg()),wwb,wxb),' r','.r');g.a+=''+c;e.a.$e()&&(g.a+=',',g)}if(!a.pb){a.pb=$i($doc);a.pb.type=Qxb;vh(a.pb,a.Bc+'-hyperlinkstyle');Vg(a.w.parentNode,a.pb);g.a+='{ cursor: pointer !important; }';KT(a.pb,g.a)}else{OT(a.pb,g.a,0)}}else{!!a.pb&&OT(a.pb,Gxb,0)}}
function cY(a,b,c){var d,e,f,g,h,i,j;e=Dlb(Dlb(a.lc,0),0);j=Dlb(a.lc,a.lc.a.length-1);h=Dlb(j,j.a.length-1);f=e.k;i=h.k;d=e.c;g=h.c;LW(a);if(f>a.zb||i<a.db||d>a.xb||g<a.bb){bX(a,a.db,a.zb,a.bb,a.xb,a.lc,a.Ac);b!=0&&a.ob>0&&bX(a,a.db,a.zb,1,a.ob,a.d,a.c);c!=0&&a.Uc>0&&bX(a,1,a.Uc,a.bb,a.xb,a.Sc,a.Rc)}else{cX(a,b,c,a.db,a.zb,a.bb,a.xb,a.lc,a.Ac);b!=0&&a.ob>0&&cX(a,b,0,a.db,a.zb,1,a.ob,a.d,a.c);c!=0&&a.Uc>0&&cX(a,0,c,1,a.Uc,a.bb,a.xb,a.Sc,a.Rc)}}
function ggb(a,b,c){var d,e,f,g,h,i,j,k;d=new RegExp(b,'g');j=fq(SB,Stb,2,0,6,1);e=0;k=a;g=null;while(true){i=d.exec(k);if(i==null||k==''||e==c-1&&c>0){j[e]=k;break}else{h=i.index;j[e]=(wtb(0,h,k.length),k.substr(0,h));k=igb(k,h+i[0].length,k.length);d.lastIndex=0;if(g==k){j[e]=(wtb(0,1,k.length),k.substr(0,1));k=(xtb(1,k.length+1),k.substr(1))}g=k;++e}}if(c==0&&a.length>0){f=j.length;while(f>0&&j[f-1]==''){--f}f<j.length&&(j.length=f)}return j}
function UW(a){var b,c,d,e,f,g,h;OU(a.Oc);for(g=new fmb(a.Sc);g.a<g.c.a.length;){e=dmb(g);OU(e)}a.Sc.a.length=0;for(h=new fmb(a.d);h.a<h.c.a.length;){e=dmb(h);OU(e)}a.d.a.length=0;for(f=new fmb(a.lc);f.a<f.c.a.length;){e=dmb(f);OU(e)}a.lc.a.length=0;Vg(a.Ac,a.fb);if(a.Uc>0&&a.ob>0){YU(a);ZU(a);TU(a)}else a.Uc>0?ZU(a):a.ob>0&&TU(a);for(c=a.db;c<=a.zb;c++){e=new Klb(a.xb);for(d=a.bb;d<=a.xb;d++){b=new XM(a,d,c);Vg(a.Ac,b.d);$sb(e.a,b)}Blb(a.lc,e)}}
function rY(a,b,c,d,e,f){var g,h;Ljb(a.Dc,wwb+d+xwb+c);Jjb(a.Dc,wwb+f+xwb+e,b);h=b.Yc;if(f>=a.bb&&f<=a.xb&&e>=a.db&&e<=a.zb||f<=a.ob&&e<=a.Uc||f>a.ob&&f<=a.xb&&e<=a.Uc||e>a.Uc&&e<=a.zb&&f<=a.ob){g=hV(a,f,e);if(h){if(M(a,h)){(d>=a.bb&&d<=a.xb&&c>=a.db&&c<=a.zb||d<=a.ob&&c<=a.Uc||d>a.ob&&d<=a.xb&&c<=a.Uc||c>a.Uc&&c<=a.zb&&d<=a.ob)&&NM(hV(a,d,c));SM(g,(LF(),b.Zc))}else{Oe(b);SM(g,(LF(),b.Zc));Qe(b,a)}}else{SM(g,(LF(),b.Zc));Qe(b,a)}}else !!h&&Oe(b)}
function gS(a,b){var c,d;a.S=aW(a.Q,a.f,a.L);a.T=bW(a.Q,a.f,a.L);a.R=ZV(a.Q,a.f,a.L);a.g=!a.S&&!a.T;a.i=!a.S&&!a.R;a.t=ph(a.Q.Ac);a.u=(a.Q.Ac.scrollTop||0)|0;a.c=(c=nj($doc),$2(),(Fh(),b).type.indexOf(axb)!=-1?Qm(b.changedTouches[0])+c:_h(b.clientX||0)+c);a.d=(d=oj($doc),b.type.indexOf(axb)!=-1?Rm(b.changedTouches[0])+d:_h(b.clientY||0)+d);a.U=a.f;a.V=a.L;a.C=true;a.j=false;a.s=false;DS(a);WF((LF(),a.Zc));Eh.Yd(b);dh(ie(a.Q),'selecting');vS(a,true)}
function Mib(a){Eib();var b,c,d,e;b=dr(a);if(a<Cib.length){return Cib[b]}else if(a<=50){return Hhb((shb(),phb),b)}else if(a<=Qub){return Jhb(Hhb(Bib[1],b),b)}if(a>1000000){throw WD(new geb('power of ten too big'))}if(a<=Ktb){return Jhb(Hhb(Bib[1],b),b)}d=Hhb(Bib[1],Ktb);e=d;c=bE(a-Ktb);b=dr(a%Ktb);while(ZD(c,Ktb)>0){e=Fhb(e,d);c=oE(c,Ktb)}e=Fhb(e,Hhb(Bib[1],b));e=Jhb(e,Ktb);c=bE(a-Ktb);while(ZD(c,Ktb)>0){e=Jhb(e,Ktb);c=oE(c,Ktb)}e=Jhb(e,b);return e}
function qib(a,b){var c,d,e,f,g,h;c=Chb(a);d=Chb(b);e=$wnd.Math.min(c,d);_hb(a,c);_hb(b,d);if(thb(a,b)==1){f=a;a=b;b=f}do{if(b.d==1||b.d==2&&b.a[1]>0){b=Zhb(pib((h=a.d>1?ztb(a.a[0],a.a[1]):ztb(a.a[0],0),a.e>0?h:jE(h)),(g=b.d>1?ztb(b.a[0],b.a[1]):ztb(b.a[0],0),b.e>0?g:jE(g))));break}if(b.d>a.d*1.2){b=Ihb(b,a);b.e!=0&&_hb(b,Chb(b))}else{do{Aib(b.a,b.a,b.d,a.a,a.d);vhb(b);b.b=-2;_hb(b,Chb(b))}while(thb(b,a)>=0)}f=b;b=a;a=f}while(a.e!=0);return Jhb(b,e)}
function Ii(a){if(a.offsetTop==null){return 0}var b=0;var c=a.ownerDocument;var d=a.parentNode;if(d){while(d.offsetParent){b-=d.scrollTop;d=d.parentNode}}while(a){b+=a.offsetTop;if(c.defaultView.getComputedStyle(a,'')[Sub]==Tub){b+=c.body.scrollTop;return b}var e=a.offsetParent;e&&$wnd.devicePixelRatio&&(b+=parseInt(c.defaultView.getComputedStyle(e,'').getPropertyValue('border-top-width')));if(e&&e.tagName=='BODY'&&a.style.position==Uub){break}a=e}return b}
function yY(a){var b,c,d;a.W=fq(ir,Jxb,20,a.a.O,15,1);a.Nc=0;d=0;if(a.Uc>0){d=zU(a,1,a.Uc);a.Nc=dr(d+1)}b=zU(a,a.Uc+1,a.a.O);a.Bb=0;a.ob>0&&(a.Bb=CU(a,1,a.ob));c=CU(a,a.ob+1,a.a.g);xY(a);d>0&&a.Bb>0?sh(a.Pc,_xb):dh(a.Pc,_xb);d>0?sh(a.Rc,_xb):dh(a.Rc,_xb);a.Bb>0?sh(a.c,_xb):dh(a.c,_xb);a.Rc.style[Bwb]=(hm(),iwb);a.c.style[Cwb]=iwb;a.I.style[Bwb]=iwb;a.hc.style[Bwb]=iwb;oW(a);a.fb.style[Aub]=b+hwb;a.fb.style[Bub]=c+hwb;a.c.style[Aub]=b+hwb;a.Rc.style[Bub]=c+hwb}
function XG(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;k=new Zob;if(b!=null&&b.length>1){l=(xtb(1,b.length+1),b.substr(1));for(h=ggb(l,'&',0),i=0,j=h.length;i<j;++i){g=h[i];f=ggb(g,'=',2);e=f[0];if(e.length==0){continue}m=f.length>1?f[1]:'';try{m=(Wp(m),o=/\+/g,decodeURIComponent(m.replace(o,'%20')))}catch(a){a=VD(a);if(!Yq(a,81))throw WD(a)}n=k.get(e);if(!n){n=new Jlb;k.put(e,n)}n.add(m)}}for(d=k.bg().Qe();d.$e();){c=d._e();c.lg(Fmb(c.kg()))}k=(Cmb(),new Vnb(k));return k}
function xV(a,b,c,d){var e,f,g,h,i;f=sV(a,wwb+d.c+xwb+d.k);if(!f){i=d.d;g=d.c;h=d.k;e=false;if(b<(Fh(),Eh).Zd(i)&&d.c>a.bb){--g;while(k_(a.a,g)&&g>a.bb){--g}e=true}else if(b>Eh.Zd(i)+((i.offsetWidth||0)|0)&&d.c<a.xb){++g;while(k_(a.a,g)&&g<a.xb){++g}e=true}if(c<Eh.$d(i)&&d.k>a.db){--h;while(m_(a.a,h)&&h>a.db){--h}e=true}else if(c>Eh.$d(i)+((i.offsetHeight||0)|0)&&d.k<a.zb){++h;while(m_(a.a,h)&&h<a.zb){++h}e=true}if(e){return xV(a,b,c,hV(a,g,h))}return d}else{return f}}
function $R(a,b){var c,d,e,f,g,h,i;e=a.c.zc.e;g=a.c.zc.f;i=a.c.zc.K;c=a.c.zc.L;d=a.c.sc;h=a.c.tc;f=f_(a.d,d,h);if(!!f&&a.a!=0){d=a.a;h=f.row1}--h;while(!!a.d.v&&Elb(a.d.v,vfb(h),0)!=-1&&h>1){--h}if(!b&&(e!=g||i!=c)&&(!f||e!=f.col1||g!=f.col2||i!=f.row1||c!=f.row2)){if(h<i){h=c;while(!!a.d.v&&Elb(a.d.v,vfb(h),0)!=-1&&h>i){--h}--d;while(!!a.d.u&&Elb(a.d.u,vfb(d),0)!=-1&&d>=e){--d}d<e&&(d=g);while(!!a.d.u&&Elb(a.d.u,vfb(d),0)!=-1&&d>=e){--d}}RR(a,d,h)}else{h>0&&SR(a,d,h)}}
function XR(a,b){var c,d,e,f,g,h,i;e=a.c.zc.e;g=a.c.zc.f;i=a.c.zc.K;c=a.c.zc.L;d=a.c.sc;h=a.c.tc;f=f_(a.d,d,h);if(!!f&&a.a!=0){d=a.a;h=f.row2}++h;while(!!a.d.v&&Elb(a.d.v,vfb(h),0)!=-1&&h<a.d.O){++h}if(!b&&(e!=g||i!=c)&&(!f||e!=f.col1||g!=f.col2||i!=f.row1||c!=f.row2)){if(h>c){h=i;while(!!a.d.v&&Elb(a.d.v,vfb(h),0)!=-1&&h<c){++h}++d;while(!!a.d.u&&Elb(a.d.u,vfb(d),0)!=-1&&d<=g){++d}d>g&&(d=e);while(!!a.d.u&&Elb(a.d.u,vfb(d),0)!=-1&&d<=g){++d}}RR(a,d,h)}else{h<=a.d.O&&SR(a,d,h)}}
function ZR(a,b){var c,d,e,f,g,h,i;e=a.c.zc.e;g=a.c.zc.f;i=a.c.zc.K;c=a.c.zc.L;d=a.c.sc;h=a.c.tc;f=f_(a.d,d,h);if(!!f&&a.b!=0){d=f.col2;h=a.b}++d;while(!!a.d.u&&Elb(a.d.u,vfb(d),0)!=-1&&d<a.d.g){++d}if(!b&&(e!=g||i!=c)&&(!f||e!=f.col1||g!=f.col2||i!=f.row1||c!=f.row2)){if(d>g){d=e;while(!!a.d.u&&Elb(a.d.u,new mfb(d),0)!=-1&&d<=g){++d}++h;while(!!a.d.v&&Elb(a.d.v,vfb(h),0)!=-1&&h<=c){++h}h>c&&(h=i);while(!!a.d.v&&Elb(a.d.v,vfb(h),0)!=-1&&h<=c){++h}}RR(a,d,h)}else{d<=a.d.g&&SR(a,d,h)}}
function YR(a,b){var c,d,e,f,g,h,i;e=a.c.zc.e;g=a.c.zc.f;i=a.c.zc.K;c=a.c.zc.L;d=a.c.sc;h=a.c.tc;f=f_(a.d,d,h);if(!!f&&a.b!=0){d=f.col1;h=a.b}--d;while(!!a.d.u&&Elb(a.d.u,vfb(d),0)!=-1&&d>0){--d}if(!b&&(e!=g||i!=c)&&(!f||e!=f.col1||g!=f.col2||i!=f.row1||c!=f.row2)){if(d<e){d=g;while(!!a.d.u&&Elb(a.d.u,vfb(d),0)!=-1&&d>=e){--d}--h;while(!!a.d.v&&Elb(a.d.v,vfb(h),0)!=-1&&h>=i){--h}h<i&&(h=c);while(!!a.d.v&&Elb(a.d.v,vfb(h),0)!=-1&&h>=i){--h}}RR(a,d,h)}else{d>0&&SR(a,d,h)}}
function whb(a,b){var c,d,e,f,g,h,i,j,k,l;if(b.e==0){throw WD(new geb(tAb))}e=b.e;if(b.d==1&&b.a[0]==1){return b.e>0?a:a.e==0?a:new Ohb(-a.e,a.d,a.a)}k=a.e;j=a.d;d=b.d;if(j+d==2){l=_D(YD(a.a[0],uAb),YD(b.a[0],uAb));k!=e&&(l=jE(l));return ZD(l,0)>=0?Uhb(l):Ghb(Uhb(jE(l)))}c=j!=d?j>d?1:-1:wib(a.a,b.a,j);if(c==0){return k==e?nhb:mhb}if(c==-1){return rhb}g=j-d+1;f=fq(ir,Jxb,20,g,15,1);h=k==e?1:-1;d==1?nib(f,a.a,j,b.a[0]):lib(f,g,a.a,j,b.a,d);i=new Ohb(h,g,f);vhb(i);return i}
function CW(b,c){var d,e,f,g,h,i;try{g=CV(b);if(!g){hsb(b.U,'Selected cell is null');return}OM(g,c);h=nW(b,g.b,c);d=g.c;if(b.ab){f=g_(b.a,b.sc,b.tc);d=f.col2;i=kS(b.a.f,f.col1,f.col2+1)}else{i=e_(b.a,d)}while(i<h&&d<b.a.g){i+=e_(b.a,++d)}ve(b.sb,i+1+hwb)}catch(a){a=VD(a);if(Yq(a,21)){e=a;hsb(b.U,'SheetWidget:recalculateInputElementWidth: '+zf(e,e.Id())+' while calculating input element width');WV(b,b.sc,b.tc)||gX(b,b.sc,b.tc);W2((ng(),mg),new PY(b,false))}else throw WD(a)}}
function hib(){hib=BE;fib=iq(dq(ir,1),Jxb,20,15,[Ntb,1162261467,vAb,rAb,362797056,1977326743,vAb,387420489,Dvb,214358881,429981696,815730721,1475789056,170859375,268435456,410338673,612220032,893871739,1280000000,1801088541,113379904,148035889,191102976,qAb,308915776,387420489,481890304,594823321,729000000,887503681,vAb,1291467969,1544804416,1838265625,60466176]);gib=iq(dq(ir,1),Jxb,20,15,[-1,-1,31,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5])}
function yib(a,b){var c,d,e,f,g,h,i,j,k,l;g=a.e;i=b.e;if(i==0){return a}if(g==0){return b.e==0?b:new Ohb(-b.e,b.d,b.a)}f=a.d;h=b.d;if(f+h==2){c=YD(a.a[0],uAb);d=YD(b.a[0],uAb);g<0&&(c=jE(c));i<0&&(d=jE(d));return shb(),dE(oE(c,d),0)?Uhb(oE(c,d)):Ghb(Uhb(jE(oE(c,d))))}e=f!=h?f>h?1:-1:wib(a.a,b.a,f);if(e==-1){l=-i;k=g==i?zib(b.a,h,a.a,f):uib(b.a,h,a.a,f)}else{l=g;if(g==i){if(e==0){return shb(),rhb}k=zib(a.a,f,b.a,h)}else{k=uib(a.a,f,b.a,h)}}j=new Ohb(l,k.length,k);vhb(j);return j}
function UO(a){var b,c,d,e,f,g,h,i;i=(f=iL(a.e),f==null?'':f);c=gL(a.e);e=0;while(--c>0){xtb(c,i.length);i.charCodeAt(c)==34&&(c==0||(xtb(c-1,i.length),i.charCodeAt(c-1)!=92))&&++e}if(e%2==1){return}g=-1;d=-1;c=gL(a.e);while(c>0){b=(xtb(c-1,i.length),i.charCodeAt(c-1));if(cgb(String.fromCharCode(b))){g=c;break}--c}c=gL(a.e);while(c<i.length){b=(xtb(c,i.length),i.charCodeAt(c));if(cgb(String.fromCharCode(b))){d=c;break}++c}h=(wtb(g,d,i.length),i.substr(g,d-g));$O(a);if(cP(a,h)){a.s=g;a.q=d;yP(a,h)}}
function UU(a){var b,c,d,e,f;f=Qi($doc);dh(f,'cell-range-bg-color');f.style[Bub]=(hm(),iwb);f.style[Aub]=iwb;Vg(a.Ac,f);e=new v2(f);b=u2(e,Nwb);b=dgb(b,'!important','');_g(a.Ac,f);if(b!=null&&lgb(b).length!=0){d=lf();(LF(),d.Zc).height=1;d.Zc.width=1;of(d.Zc.getContext('2d'),b);d.Zc.getContext('2d').fillRect(0,0,1,1);c='url("'+d.Zc.toDataURL()+'")';KT(a.Ec,'.'+a.Bc+Dxb+'background-image: '+c+' !important;'+'}')}else{KT(a.Ec,'.'+a.Bc+Dxb+'background-color: rgba(232, 242, 252, 0.8) !important;'+'}')}}
function bX(a,b,c,d,e,f,g){var h,i,j,k,l;for(k=b;k<=c;k++){if(f.a.length>k-b){l=(qtb(k-b,f.a.length),f.a[k-b])}else{l=new Jlb;ttb(k-b,f.a.length);Ysb(f.a,k-b,l)}for(h=d;h<=e;h++){if(l.a.length>h-d){i=(qtb(h-d,l.a.length),l.a[h-d]);TM(i,h,k,Gjb(a.e,wwb+h+xwb+k))}else{i=new YM(a,h,k,Gjb(a.e,wwb+h+xwb+k));Vg(g,i.d);ttb(h-d,l.a.length);Ysb(l.a,h-d,i)}}while(l.a.length>e-d+1){ah(Glb(l,l.a.length-1).d)}}while(f.a.length>c-b+1){for(j=new fmb(Glb(f,f.a.length-1));j.a<j.c.a.length;){i=dmb(j);ah(i.d)}}pY(a,false)}
function yP(a,b){var c,d,e,f,g,h,i,j,k,l;if(Hjb(a.G,b)){j=iP(a,b);if(!j){return}f=$wnd.Math.min(j.col1,j.col2);e=$wnd.Math.max(j.col1,j.col2);l=$wnd.Math.min(j.row1,j.row2);k=$wnd.Math.max(j.row1,j.row2);if(e>20000){$rb(ksb((yeb(Xw),Xw.i)));return}for(c=f;c<=e;c++){for(i=l;i<=k;i++){d=hV(a.I,c,i);if(d){h=d.d;g=dgb(Gjb(a.G,b),'%s','0.75');c==f&&(h.style['borderLeft']=Pwb+g,undefined);c==e&&(h.style[Qwb]=Pwb+g,undefined);i==l&&(h.style['borderTop']=Pwb+g,undefined);i==k&&(h.style[Rwb]=Pwb+g,undefined)}}}a.A=b}}
function VW(a){var b,c;if(a.ib){if(a.ob>0){XW(a)}else{NW(a.ib);a.ib=null}}else if(a.ob>0){a.ib=new Jlb;XW(a)}for(c=a.bb;c<=a.xb;c++){if(c>a.ob){if(c-a.bb<a.K.a.length){b=Dlb(a.K,c-a.bb)}else{b=Qi($doc);Vg(a.Rc,b);Alb(a.K,c-a.bb,b)}b.className=Rxb+c||'';b.part.add(Sxb);b.part.remove(Bxb);wh(b,c_(c)+Txb);if(bpb(a.uc,vfb(c))){dh(b,Cxb);b.part.add(Bxb)}}else{hsb(a.U,'Trying to add plain column header (index:'+c+') into frozen pane, horizontalSplitPosition: '+a.ob)}}while(a.K.a.length>a.xb-a.bb+1){ah(Glb(a.K,a.K.a.length-1))}}
function $W(a){var b,c;if(a.jb){if(a.Uc>0){YW(a)}else{NW(a.jb);a.jb=null}}else if(a.Uc>0){a.jb=new Jlb;YW(a)}for(b=a.db;b<=a.zb;b++){if(a.Uc<b){if(b-a.db<a.jc.a.length){c=Dlb(a.jc,b-a.db)}else{c=Qi($doc);Vg(a.c,c);Alb(a.jc,b-a.db,c)}c.className=Uxb+b||'';c.part.add(Vxb);c.part.remove(Bxb);c.innerHTML=''+b+Txb||'';if(bpb(a.xc,vfb(b))){dh(c,Axb);c.part.add(Bxb)}}else{hsb(a.U,'Trying to add plain row header (index:'+b+') into frozen pane, verticalSplitPosition: '+a.Uc)}}while(a.jc.a.length>a.zb-a.db+1){ah(Glb(a.jc,a.jc.a.length-1))}}
function C_(a,b,c,d){var e,f,g,h,i;_$(a);g=a.V.Uc>0?1:HV(a.V);c||m1(a,b,g,null);if(c){i=a.V.sc;e=i>b?b:i;f=i>b?i:b;h=a.O;if(nS(a.V.zc)){wY(a.V,e,f,1,h);uY(a.V,e,f,1,h,true)}else{uY(a.V,e,f,1,h,false)}nS(a.V.zc)?Wab(a.W,1,e,h,f):Zab(a.W,1,e,h,f)}else if(d){a.V.C&&(a.V.C=false,undefined);nS(a.V.zc)&&EX(a.V,false);UX(a.V,b,g);_R(a.Q);uY(a.V,b,b,1,a.O,false);$ab(a.W,g,b)}else{a.V.C||(a.V.C=true,undefined);if(!nS(a.V.zc)){EX(a.V,true);QU(a.V)}DX(a.V,b,g);wY(a.V,b,b,1,a.O);uY(a.V,b,b,1,a.O,true);_R(a.Q);bbb(a.W,b,g)}qb(a.r,200)}
function P_(a,b,c,d){var e,f,g,h,i;f=a.V.ob>0?1:rV(a.V);_$(a);c||m1(a,f,b,null);if(c){e=a.g;i=a.V.tc;g=i>b?b:i;h=i>b?i:b;if(nS(a.V.zc)){wY(a.V,1,e,g,h);uY(a.V,1,e,g,h,true)}else{uY(a.V,1,e,g,h,false)}nS(a.V.zc)?Wab(a.W,g,1,h,e):Zab(a.W,g,1,h,e)}else if(d){a.V.C&&(a.V.C=false,undefined);nS(a.V.zc)&&EX(a.V,false);UX(a.V,f,b);_R(a.Q);uY(a.V,1,a.g,b,b,false);lbb(a.W,b,f)}else{a.V.C||(a.V.C=true,undefined);if(!nS(a.V.zc)){EX(a.V,true);QU(a.V)}DX(a.V,f,b);wY(a.V,1,a.g,b,b);uY(a.V,1,a.g,b,b,true);_R(a.Q);nbb(a.W,b,f)}qb(a.r,200)}
function bY(b){var c,d,e,f,g,h,i,j,k,l;h=(Y1(),false&&ZG('debug')!=null);l=b.a.e;k=0;h&&(k=(Dgb(),bE(Date.now())));i=b.a.N;c=b.a.j;if(l){try{j=new Agb(BV(b.Ec));for(g=new gkb((new $jb(l)).a);g.b;){f=fkb(g);f.jg().a==0?wgb(j,xxb+b.Bc+' .sheet .cell {'+f.kg()+'}'):wgb(j,FV(b,f.jg(),i,c)+' {'+f.kg()+'}')}$g(b.Ec);Vg(b.Ec,fj($doc,j.a))}catch(a){a=VD(a);if(Yq(a,21)){d=a;hsb(b.U,'SheetWidget:updateStyles: '+zf(d,d.Id())+Yxb)}else throw WD(a)}}if(h){e=(Dgb(),bE(Date.now()));bsb(b.U,'Style update took:'+sE(oE(e,k))+'ms')}BW(b);UU(b)}
function FS(a,b,c){var d,e,f,g,h,i,j;if(b>=a.e&&b<=a.f&&c>=a.K&&c<=a.L){j=$wnd.Math.abs(a.L-c);h=$wnd.Math.abs(a.f-b);if(a._||j==0&&h==0){sS(a,0,0,0,0);tS(a,false);return}tS(a,true);a.j=true;if(j>h){i=$wnd.Math.max(a.K+1,a.L-j+1);sS(a,a.e,a.f,i,a.L)}else{i=$wnd.Math.max(a.e+1,a.f-h+1);sS(a,i,a.f,a.K,a.L)}}else if(c<a.K||c>a.L||b<a.e||b>a.f){tS(a,true);a.s=true;d=c-a.L;g=a.K-c;e=a.e-b;f=b-a.f;$wnd.Math.max(d,g)>$wnd.Math.max(e,f)?d>g?sS(a,a.e,a.f,a.L+1,c):sS(a,a.e,a.f,c+1,a.K-1):f>e?sS(a,a.f+1,b,a.K,a.L):sS(a,b+1,a.e-1,a.K,a.L)}}
function Zgb(a){var b,c,d,e,f;if(a.g!=null){return a.g}if(a.a<32){a.g=jib(bE(a.f),dr(a.e));return a.g}e=kib((!a.c&&(a.c=Zhb(bE(a.f))),a.c),0);if(a.e==0){return e}b=(!a.c&&(a.c=Zhb(bE(a.f))),a.c).e<0?2:1;c=e.length;d=-a.e+c-b;f=new ygb;f.a+=''+e;if(a.e>0&&d>=-6){if(d>=0){xgb(f,c-dr(a.e),String.fromCharCode(46))}else{deb(f,b-1,b-1,'0.');xgb(f,b+1,pgb(Jgb,0,-dr(d)-1))}}else{if(c-b>=1){xgb(f,b,String.fromCharCode(46));++c}xgb(f,c,String.fromCharCode(69));d>0&&xgb(f,++c,String.fromCharCode(43));xgb(f,++c,''+sE(bE(d)))}a.g=f.a;return a.g}
function gT(a,b,c,d,e){var f;sh(a.B,wwb+a.e+xwb+a.C);if(a.s>0&&b<a.s){b=a.s;eT(a,true)}else{eT(a,false)}if(a.t>0&&d<a.t){d=a.t;kT(a,true)}else{kT(a,false)}if(a.r>0&&e>a.r){e=a.r;bT(a,true);a.i.style[Zub]=(zk(),zub);a.g.style[Zub]=zub}else{bT(a,false);a.i.style[Zub]=(zk(),dvb);a.g.style[Zub]=dvb}if(a.q>0&&a.q<c){c=a.q;hT(a,true)}else{hT(a,false)}a.e=b;a.C=d;a.f=c;a.D=e;a.K=c-b;a.j=e-d;if(b<=c&&d<=e){dh(a.B,wwb+a.e+xwb+a.C);Ee((LF(),a.Zc),true);mT(a);f=a.F.q.V.W;f!=null&&f.length!=0&&dT(a,kS(a.F.q.V.W,a.C,a.D+1))}else{Ee((LF(),a.Zc),false)}}
function aK(a,b){var c,d,e,f;if(b.a||!a.L&&b.b){a.J&&(b.a=true);return}b.c&&false&&(b.a=true);if(b.a){return}d=b.d;c=WJ(a,d);c&&(b.b=true);a.J&&(b.a=true);f=(LF(),aH((Fh(),d).type));switch(f){case 512:case 256:case 128:{(d.keyCode|0)&Utb;(d.shiftKey?1:0)|(d.metaKey?8:0)|(d.ctrlKey?2:0)|(d.altKey?4:0);return}case 4:case Rvb:{if(KF){b.b=true;return}}if(!c&&a.v){a.Xe(true);return}break;case 8:case 64:case 1:case 2:case Bvb:{if(KF){b.b=true;return}break}case Lvb:{e=Eh.Xd(d);if(a.J&&!c&&!!e){e.blur&&e!=$doc.body&&e.blur();b.a=true;return}break}}}
function vU(a,b){var c,d,e,f,g,h,i,j,k,l;k=new ygb;for(j=b.row1;j<=b.row2;j++){for(c=b.col1;c<=b.col2;c++){k.a+=wxb+c+'.row'+j;(j!=b.row2||c!=b.col2)&&(k.a+=',',k)}}if(k.a.length!=0){k.a+='{ display: none; }';KT(a.Fb,k.a)}h=wwb+b.col1+xwb+b.row1;i=new _P(a,b.col1,b.row1);e=tV(a,b);l=uV(a,b);PM(i,kV(a,b.col1,b.row1),e,l,false);g=i.d;dh(g,Twb);mY(a,b,i);Vg(wV(a,b.col1,b.row1),g);Ijb(a.Eb,vfb(b.id),i);!!a.r&&Hjb(a.r,h)&&QM(i);!!a.tb&&a.tb.contains(h)&&RM(i);if(Hjb(a.b,h)){d=Gjb(a.b,h);dO(d,g,b.row1,b.col1)}if(!!a.T&&Hjb(a.T,h)){f=Gjb(a.T,h);uU(a,i,f)}}
function XU(a,b,c,d,e){var f,g,h,i,j,k,l,m;l=e;m=new Zob;for(h=c;h<=d;h++){k=new ygb;j=a.W[h-1];wgb(tgb(wgb(tgb(wgb(wgb(wgb(tgb(wgb(wgb(wgb(tgb(wgb(wgb((k.a+='.',k),a.Bc),Fxb),h),', .'),a.Bc),'>.resize-line.row'),h),' { '),m_(a.a,h)?'display:none;':'display: flex;'),'height: '),j),'px; top:'),l),'px; }\n');l+=j;Ijb(m,vfb(h),vfb(l));Blb(b,k.a)}for(g=new gkb((new $jb(a.Eb)).a);g.b;){f=fkb(g);i=f.kg().k-1;!(i==d&&d==a.Uc)&&Djb(m,vfb(i))?(f.kg().d.style[awb]=Fjb(m,vfb(i)).a+(hm(),hwb),undefined):i<c&&d!=a.Uc&&(f.kg().d.style[awb]=(hm(),iwb),undefined)}}
function VU(a,b,c,d,e){var f,g,h,i,j,k,l,m,n;l=e;m=new Zob;for(k=c;k<=d;k++){n=new ygb;h=d_(a.a,k);wgb(tgb(wgb(tgb(wgb(wgb(wgb(tgb(wgb(wgb(wgb(tgb(wgb(wgb((n.a+='.',n),a.Bc),Exb),k),', .'),a.Bc),'>.resize-line.col'),k),' { '),k_(a.a,k)?'display:none !important;':''),'width: '),h),'px; left:'),l),'px; }\n');l+=h;Ijb(m,vfb(k),vfb(l));Blb(b,n.a)}f=hh((LF(),a.Zc));for(j=new gkb((new $jb(a.Eb)).a);j.b;){i=fkb(j);g=i.kg().c-1;!(g==d&&d==a.ob)&&Djb(m,vfb(g))?(i.kg().d.style[_vb]=Fjb(m,vfb(g)).a+(hm(),hwb),undefined):g>d&&d!=a.ob&&(i.kg().d.style[_vb]=f+(hm(),hwb),undefined)}}
function RO(){RO=BE;QO=new Jlb;Blb(QO,'rgba(48, 144, 240, %s)');Blb(QO,'rgba(236, 100, 100, %s)');Blb(QO,'rgba(152, 223, 88, %s)');Blb(QO,'rgba(249, 221, 81, %s)');Blb(QO,'rgba(36, 220, 212, %s)');Blb(QO,'rgba(236, 100, 165, %s)');Blb(QO,'rgba(104, 92, 176, %s)');Blb(QO,'rgba(255, 125, 66, %s)');Blb(QO,'rgba(51, 97, 144, %s)');Blb(QO,'rgba(170, 81, 77, %s)');Blb(QO,'rgba(127, 176, 83, %s)');Blb(QO,'rgba(187, 168, 91, %s)');Blb(QO,'rgba(36, 121, 129, %s)');Blb(QO,'rgba(150, 57, 112, %s)');Blb(QO,'rgba(75, 86, 168, %s)');Blb(QO,'rgba(154, 89, 61, %s)')}
function eX(a,b,c,d){var e,f,g,h,i,j;j=false;b<=a.ob&&(b=a.ob+1);f=rV(a);h=yV(a);if(d){if(b<f){i=0;for(e=f-1;e>=b-1&&e>0;e--){i+=e_(a.a,e)}yh(a.Ac,ph(a.Ac)-i);(b<=a.bb||i>(a.a.i/2|0))&&(j=true)}else if(b>h){i=0;g=a.a.g;for(e=h+1;e<=b+1&&e<=g;e++){i+=e_(a.a,e)}yh(a.Ac,ph(a.Ac)+i);(b>=a.xb||i>(a.a.i/2|0))&&(j=true)}}else{if(c>h){i=0;g=a.a.g;for(e=h+1;e<=c+1&&e<=g;e++){i+=e_(a.a,e)}yh(a.Ac,ph(a.Ac)+i);(c>=a.xb||i>(a.a.i/2|0))&&(j=true)}else if(c<f){i=0;for(e=f-1;e>=c-1&&e>0;e--){i+=e_(a.a,e)}yh(a.Ac,ph(a.Ac)-i);(c<=a.bb||i>(a.a.i/2|0))&&(j=true)}}return j}
function Cq(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;c=a.l&8191;d=a.l>>13|(a.m&15)<<9;e=a.m>>4&8191;f=a.m>>17|(a.h&255)<<5;g=(a.h&1048320)>>8;h=b.l&8191;i=b.l>>13|(b.m&15)<<9;j=b.m>>4&8191;k=b.m>>17|(b.h&255)<<5;l=(b.h&1048320)>>8;B=c*h;C=d*h;D=e*h;F=f*h;G=g*h;if(i!=0){C+=c*i;D+=d*i;F+=e*i;G+=f*i}if(j!=0){D+=c*j;F+=d*j;G+=e*j}if(k!=0){F+=c*k;G+=d*k}l!=0&&(G+=c*l);n=B&yvb;o=(C&511)<<13;m=n+o;q=B>>22;r=C>>9;s=(D&262143)<<4;t=(F&31)<<17;p=q+r+s+t;v=D>>18;w=F>>5;A=(G&4095)<<8;u=v+w+A;p+=m>>22;m&=yvb;u+=p>>22;p&=yvb;u&=zvb;return nq(m,p,u)}
function HU(a,b,c){var d,e,f,g,h,i,j;i=ih(a.Ac);g=gh(a.Ac);f=fh(a.Ac);h=hh(a.Ac);a.A=c;a.B=b;b<i?(a.O||!a.Kc&&!a.Jc)&&(a.Y=b-i):b>f?(a.Y=b-f):(a.Y=0);c<g?(a.P||!a.Ic&&!a.Jc)&&(a.X=c-g):c>h?(a.X=c-h):(a.X=0);j=false;if(((a.Ac.scrollTop||0)|0)!=0){e=b<i;if(!a.O&&(a.Jc||a.Kc)&&$V(a,a.Lc,a.Mc)&&!e){a.Ac.scrollTop=0;vW(a);a.O=true;j=true}}if(ph(a.Ac)!=0){d=c<g;if(!a.P&&(a.Jc||a.Ic)&&$V(a,a.Lc,a.Mc)&&!d){yh(a.Ac,0);vW(a);a.P=true;j=true}}if(a.Y<0&&((a.Ac.scrollTop||0)|0)!=0||a.Y>0||a.X<0&&ph(a.Ac)!=0||a.X>0){OX(a);j=true}if(j){return true}else{SX(a);return false}}
function iS(a,b,c){var d,e,f,g,h,i,j;i=ih(a.Q.Ac);g=gh(a.Q.Ac);f=fh(a.Q.Ac);h=hh(a.Q.Ac);a.c=c;a.d=b;b<i?(a.g||!a.T&&!a.S)&&(a.n=b-i):b>f?(a.n=b-f):(a.n=0);c<g?(a.i||!a.R&&!a.S)&&(a.k=c-g):c>h?(a.k=c-h):(a.k=0);j=false;if(((a.Q.Ac.scrollTop||0)|0)!=0){e=b<i;if(!a.g&&(a.S||a.T)&&$V(a.Q,a.U,a.V)&&!e){a.Q.Ac.scrollTop=0;vW(a.Q);a.u=0;a.g=true;j=true}}if(ph(a.Q.Ac)!=0){d=c<g;if(!a.i&&(a.S||a.R)&&$V(a.Q,a.U,a.V)&&!d){yh(a.Q.Ac,0);vW(a.Q);a.t=0;a.i=true;j=true}}if(a.n<0&&((a.Q.Ac.scrollTop||0)|0)!=0||a.n>0||a.k<0&&ph(a.Q.Ac)!=0||a.k>0){zS(a);j=true}if(j){return true}else{BS(a);return false}}
function gY(a,b){var c,d,e,f;c=0;if(a.H>0){d=a.Z?a.H+1:a.H;c=3+d*18}f=0;if(a.gc>0){e=a.Z?a.gc+1:a.gc;f=1+e*15}if(f==0){a.hc.style[Zub]=(zk(),zub);a.ic.style[Zub]=zub}else{a.hc.style[Zub]=(zk(),dvb);a.ic.style[Zub]=dvb}a.Z||(a.ic.style[Zub]=(zk(),zub),undefined);!!a.jb&&a.gc>0?(a.ec.style[Zub]=(zk(),dvb),undefined):(a.ec.style[Zub]=(zk(),zub),undefined);a.hc.style[Bub]=f+(hm(),hwb);a.hc.style[awb]=b+hwb;a.ec.style[Bub]=f+hwb;a.ec.style[awb]=b+hwb;a.ic.style[awb]=b+c+hwb;if(a.Db){a.ic.style[Aub]=lV(a)+hwb;a.ic.style[$xb]=lV(a)+hwb}a.ic.style[Bub]=f+hwb;return f}
function h2(a){var b,c,d,e,f;if(d2==null){c='';d='';e='';b='';if(a.a.g){c='ff';d=c+a.a.b;e=d+a.a.c;b='gecko'}else if(a.a.e){c='sa';d='ch';b=Byb}else if(a.a.q){c='sa';d=c+a.a.b;e=d+a.a.c;b=Byb}else if(a.a.p){c='sa';d=c+a.a.b;e=d+a.a.c;b=Byb}else if(a.a.j){c='ie';d=c+a.a.b;e=d+a.a.c;b='trident'}else if(a.a.f){c='edge';d=c+a.a.b;e=d+a.a.c;b=''}else if(a.a.o){c='op';d=c+a.a.b;e=d+a.a.c;b='presto'}d2='v-'+c;d.length==0||(d2=d2+' '+'v-'+d);e.length==0||(d2=d2+' '+'v-'+e);b.length==0||(d2=d2+' '+'v-'+b);f=k2(a);f!=null&&(d2=d2+' '+f);a.b&&(d2=d2+' '+'v-'+axb)}return d2}
function Gi(a){if(a.offsetLeft==null){return 0}var b=0;var c=a.ownerDocument;var d=a.parentNode;if(d){while(d.offsetParent){b-=d.scrollLeft;c.defaultView.getComputedStyle(d,'').getPropertyValue('direction')=='rtl'&&(b+=d.scrollWidth-d.clientWidth);d=d.parentNode}}while(a){b+=a.offsetLeft;if(c.defaultView.getComputedStyle(a,'')[Sub]==Tub){b+=c.body.scrollLeft;return b}var e=a.offsetParent;e&&$wnd.devicePixelRatio&&(b+=parseInt(c.defaultView.getComputedStyle(e,'').getPropertyValue('border-left-width')));if(e&&e.tagName=='BODY'&&a.style.position==Uub){break}a=e}return b}
function $S(a){a.B.className=gxb;a.F._&&dh(a.B,axb);a.G.className='s-top';a.k.className=hxb;a.u.className=ixb;a.a.className=jxb;a.g.className='s-corner';a.g.part.add('selection-corner');a.i.className='s-corner-touch';a.I.className=kxb;a.o.className=kxb;a.w.className=kxb;a.c.className=kxb;a.J.className=lxb;a.p.className=lxb;a.A.className=lxb;a.d.className=lxb;if(a.F._){Vg(a.u,a.i);Vg(a.i,a.g)}else{Vg(a.u,a.g)}Vg(a.G,a.k);Vg(a.G,a.u);Vg(a.k,a.a);Vg(a.B,a.G);if(a.F._){Vg(a.G,a.J);Vg(a.k,a.p);Vg(a.u,a.A);Vg(a.a,a.d);Vg(a.J,a.I);Vg(a.p,a.o);Vg(a.A,a.w);Vg(a.d,a.c)}oe(a,a.B)}
function yW(a,b){a.Bc='spreadsheet-'+b;dh(a.Hc,a.Bc);a.w.type=Qxb;vh(a.w,a.Bc+'-dynamicStyle');Vg(a.Rb,a.w);a.Ec.type=Qxb;vh(a.Ec,a.Bc+'-sheetStyle');Vg(a.Rb,a.Ec);a.Fc.type=Qxb;vh(a.Fc,a.Bc+'-customCellSizeStyle');Vg(a.Rb,a.Fc);a.$.type=Qxb;vh(a.$,a.Bc+'-editedCellStyle');Vg(a.Rb,a.$);KT(a.$,'.notusedselector{ display: inline !important; outline: none !important; width: auto !important; z-index: -10; }');KT(a.$,'.notusedselector{ overflow: hidden; }');a.Fb.type=Qxb;vh(a.Fb,a.Bc+'-mergedRegionStyle');Vg(a.Rb,a.Fb);a.Xb.type=Qxb;vh(a.Xb,a.Bc+'-resizeStyle');Vg(a.Rb,a.Xb)}
function etb(a,b){if(b<128){a.push((b&127)<<24>>24)}else if(b<Lvb){a.push((b>>6&31|192)<<24>>24);a.push((b&63|128)<<24>>24)}else if(b<Ttb){a.push((b>>12&15|224)<<24>>24);a.push((b>>6&63|128)<<24>>24);a.push((b&63|128)<<24>>24)}else if(b<Svb){a.push((b>>18&7|240)<<24>>24);a.push((b>>12&63|128)<<24>>24);a.push((b>>6&63|128)<<24>>24);a.push((b&63|128)<<24>>24)}else if(b<Wvb){a.push((b>>24&3|248)<<24>>24);a.push((b>>18&63|128)<<24>>24);a.push((b>>12&63|128)<<24>>24);a.push((b>>6&63|128)<<24>>24);a.push((b&63|128)<<24>>24)}else{throw WD(new hfb('Character out of range: '+b))}}
function tib(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;g=a.e;i=b.e;if(g==0){return b}if(i==0){return a}f=a.d;h=b.d;if(f+h==2){c=YD(a.a[0],uAb);d=YD(b.a[0],uAb);if(g==i){k=XD(c,d);o=rE(k);n=rE(nE(k,32));return n==0?new Mhb(g,o):new Ohb(g,2,iq(dq(ir,1),Jxb,20,15,[o,n]))}return shb(),dE(g<0?oE(d,c):oE(c,d),0)?Uhb(g<0?oE(d,c):oE(c,d)):Ghb(Uhb(jE(g<0?oE(d,c):oE(c,d))))}else if(g==i){m=g;l=f>=h?uib(a.a,f,b.a,h):uib(b.a,h,a.a,f)}else{e=f!=h?f>h?1:-1:wib(a.a,b.a,f);if(e==0){return shb(),rhb}if(e==1){m=g;l=zib(a.a,f,b.a,h)}else{m=i;l=zib(b.a,h,a.a,f)}}j=new Ohb(m,l.length,l);vhb(j);return j}
function kN(b,c){var d,e,f,g,h,i,j;if(!b.Vc){return}h=-1;try{h=Yeb(Kj((LF(),b.Zc).style))}catch(a){a=VD(a);if(Yq(a,21)){h=Qub}else throw WD(a)}h==-1&&(h=cN);if((f2(),!e2&&(e2=new q2),f2(),e2).a.j){nh((LF(),b.Zc),gwb);nh(b.Zc,yub)}f=(!e2&&(e2=new q2),e2);if(f.a.j&&n2(f)){g=new z7((i=gh((LF(),b.Zc)),i-=hj($doc),i-=(eN==-1&&(eN=tN(_vb)),eN),i),(j=ih(b.Zc),j-=ij($doc),j-=(fN==-1&&(fN=tN(awb)),fN),j),nh(b.Zc,yub),nh(b.Zc,gwb));g.b+=dr(g.d*(1-c)/2);g.c+=dr(g.a*(1-c)/2);g.d=dr(g.d*c);g.a=dr(g.a*c);d=Wg(b.Zc);e=(!e2&&(e2=new q2),e2);if(e.a.j&&n2(e)){sN(hN(b),g);!Wg(b.u)&&Yg(d,b.u,b.Zc)}}}
function KZ(a,b){var c,d,e,f,g,h,i,j;i=(!a.F&&(a.F=new q1),a.F);h=(!a.M&&(a.M=new O1),a.M);d=b.Kf('componentIDtoCellKeysMap');f=b.Kf('cellKeysToEditorIdMap');g=b.Kf(jyb);if(d){c=h.o;e=new Zob;!!c&&c.a.c+c.c.c!=0&&qqb(c,new A$(a,e));IX(i.V,e)}f&&PZ(a);g&&h.$?c0(i,a.e):(d||f||g)&&!h.$&&f1(i,h.c);(b.Kf('cellComments')||b.Kf('cellCommentAuthors'))&&i0(i,h.b,h.a);b.Kf('visibleCellComments')&&QZ(a);b.Kf('invalidFormulaCells')&&H0(i,h.F);b.Kf('overlays')&&(j=!(!a.M&&(a.M=new O1),a.M).N?(Cmb(),Cmb(),Amb):(!a.M&&(a.M=new O1),a.M).N,NZ(a,j.keySet()),HZ(a,j),a.c=j.keySet(),undefined);xY(i.V)}
function FU(a,b){var c,d,e,f,g,h,i,j,k,l,m;i=a.a.o;j=false;for(e=new fmb(b);e.a<e.c.a.length;){d=dmb(e);m=wwb+d.col+xwb+d.row;d.value==null?Ljb(a.e,m):Jjb(a.e,m,d);if(!yX(a,m,d.value,d.cellStyle,d.textColor,d.needsMeasure)){f=null;_V(a,d.col,d.row)?(f=Dlb(Dlb(a.lc,d.row-a.db),d.col-a.bb)):$V(a,d.col,d.row)&&(f=qV(a,d.col,d.row));if(f){g=wwb+f.c+xwb+f.k;k=!!i&&Hjb(pQ(i.a).c,g);if(k){h=v$(i,g);h.b&&(j=true)}if(!k||a.Gc){PM(f,d.value,d.cellStyle,d.textColor,d.needsMeasure);f.g=true}}l=a.Uc>0?0:a.bb;for(;l<d.col;l++){c=hV(a,l,d.row);!!c&&(c.g=true)}}}pY(a,false);j||W2((ng(),mg),new TY(a))}
function oq(a,b,c){var d,e,f,g,h,i;if(b.l==0&&b.m==0&&b.h==0){throw WD(new geb('divide by zero'))}if(a.l==0&&a.m==0&&a.h==0){c&&(kq=nq(0,0,0));return nq(0,0,0)}if(b.h==Avb&&b.m==0&&b.l==0){return pq(a,c)}i=false;if(b.h>>19!=0){b=Dq(b);i=!i}g=vq(b);f=false;e=false;d=false;if(a.h==Avb&&a.m==0&&a.l==0){e=true;f=true;if(g==-1){a=mq((Sq(),Oq));d=true;i=!i}else{h=Hq(a,g);i&&tq(h);c&&(kq=nq(0,0,0));return h}}else if(a.h>>19!=0){f=true;a=Dq(a);d=true;i=!i}if(g!=-1){return qq(a,g,i,f,c)}if(Aq(a,b)<0){c&&(f?(kq=Dq(a)):(kq=nq(a.l,a.m,a.h)));return nq(0,0,0)}return rq(d?a:nq(a.l,a.m,a.h),b,i,f,e,c)}
function _W(a,b,c){var d,e;yh(a.Ac,b);zh(a.Ac,c);a.pc=(a.Ac.offsetHeight||0)|0;a.qc=(a.Ac.offsetWidth||0)|0;a.Pb=b;a.Qb=c;a.db=1;a.eb=0;a.Uc>0&&(a.db=a.Uc+1);a.bb=1;a.cb=0;a.ob>0&&(a.bb=a.ob+1);a.xb=0;QU(a);MU(a);d=a.a.i;if(a.cb<b-d){do{a.cb+=e_(a.a,a.bb);++a.bb}while(a.cb<b-d)}a.xb=a.bb;a.yb=a.cb+e_(a.a,a.bb);e=a.a.L;if(a.eb<c-e){do{a.db>=a.a.M.length?(a.eb+=oV(a)):(a.eb+=AV(a,a.db));++a.db}while(a.eb<c-e)}a.zb=a.db;a.Ab=a.eb+AV(a,a.zb);while(a.yb<b+a.qc+d&&a.xb<a.a.g){++a.xb;a.yb+=e_(a.a,a.xb)}while(a.Ab<c+a.pc+e&&a.zb<a.a.O){++a.zb;a.zb>=a.a.M.length?(a.Ab+=oV(a)):(a.Ab+=AV(a,a.zb))}}
function US(a,b,c,d,e){var f;sh(a.k,wwb+a.b+xwb+a.n);if(a.g>0&&b<a.g){b=a.g;a.d.style[$ub]=(vm(),lvb)}else{a.d.style[$ub]=(vm(),kvb)}if(a.i>0&&d<a.i){d=a.i;a.q.style[$ub]=(vm(),lvb)}else{a.q.style[$ub]=(vm(),kvb)}if(a.f>0&&e>a.f){e=a.f;a.a.style[$ub]=(vm(),lvb)}else{a.a.style[$ub]=(vm(),kvb)}if(a.e>0&&a.e<c){c=a.e;a.j.style[$ub]=(vm(),lvb)}else{a.j.style[$ub]=(vm(),kvb)}a.b=b;a.n=d;a.c=c;a.o=e;if(b<=c&&d<=e){dh(a.k,wwb+a.b+xwb+a.n);Ee((LF(),a.Zc),true);a.Zc.style[kwb]='';YS(a);f=a.p.q.V.W;f!=null&&f.length!=0&&SS(a,kS(a.p.q.V.W,a.n,a.o+1))}else{Ee((LF(),a.Zc),false);a.Zc.style[kwb]=(ql(),lvb)}}
function qT(a,b){var c,d;if(!a.c._){if(!a.b||(c=b.composedPath(),Asb(new Esb(null,Aqb(c,c.length)),new xT))){return}d=(Fh(),b).keyCode|0;switch(d){case 8:case 113:case 38:case 40:case 37:case 39:case 9:case 46:case 32:if(Eh.Ud(b)==0){X_(a.c.a,b,'');Eh.Yd(b);b.stopPropagation()}break;case 89:if(!a.a&&!!b.ctrlKey||!!b.metaKey){Tab(a.c.a.W.D,iq(dq(MB,1),Etb,1,5,[]));Eh.Yd(b);b.stopPropagation()}break;case 90:if(!a.a&&!!b.ctrlKey||!!b.metaKey){Tab(a.c.a.W.H,iq(dq(MB,1),Etb,1,5,[]));Eh.Yd(b);b.stopPropagation()}break;case 65:if(!a.a&&!!b.ctrlKey||!!b.metaKey){f0(a.c.a);Eh.Yd(b);b.stopPropagation()}}}}
function IV(a,b,c){var d,e,f,g,h,i,j,k;a.$b=true;d=b-a.Tb;d<0&&(d=0);HT(a.Xb);d>0?JI(a.Zb,'Width: '+d+hwb):JI(a.Zb,Kxb);j='.'+a.Bc+Lxb+a._b+'{width:'+d+Mxb;KT(a.Xb,j);e=0;k=hh(a.Ac)-b;for(g=a._b+1;g<=a.xb&&e<k;g++){e+=e_(a.a,g)}i=b-a.Ub;i<a.Tb-a.Ub&&(i=a.Tb-a.Ub);j='';for(h=a._b+1;h<=a.xb;h++){j+='.'+a.Bc+Lxb+h;a.xb!=h&&(j+=',')}if(!!a.ib&&a._b>=a.ib.a.length){for(f=1;f<=a.ib.a.length;f++){i+=e_(a.a,f)}}i=a.Cb+i;(!a.ib||a._b>a.ib.a.length)&&(i-=ph(a.Ac));if(j.length!=0){j+='{margin-left:'+i+Mxb;KT(a.Xb,j)}j='.'+a.Bc+'.col-resizing > div.resize-line.ch {margin-left:'+(i-1)+Mxb;KT(a.Xb,j);KX(a,b,c)}
function UX(a,b,c){var d,e,f,g,h,i;h=hV(a,a.sc,a.tc);g=sV(a,wwb+a.sc+xwb+a.tc);if(a.v){apb(a.u,new sZ(a.sc,a.tc));if(h){apb(a.t,h);dh(h.d,yxb);h.d.part.add(yxb)}if(g){apb(a.t,g);dh(g.d,yxb);g.d.part.add(yxb)}a.v=false}else{apb(a.u,new sZ(a.sc,a.tc));if(h){apb(a.t,h);dh(h.d,yxb);h.d.part.add(yxb)}if(g){apb(a.t,g);dh(g.d,yxb);g.d.part.add(yxb)}i=g_(a.a,b,c);jX(a,c);if(i){for(d=i.row1+1;d<=i.row2;d++){jX(a,d)}}iX(a,b);if(i){for(d=i.col1+1;d<=i.col2;d++){iX(a,d)}}}if(h){a.nb=null;sh(h.d,zxb)}!!g&&sh(g.d,zxb);f=hV(a,b,c);if(f){a.nb=new sZ(f.c,f.k);dh(f.d,zxb)}e=sV(a,wwb+b+xwb+c);!!e&&dh(e.d,zxb);a.tc=c;a.sc=b}
function J3(a,b){var c,d;if(!a.e){a.e=new LI;Ie(a.e,new L3(a),(kn(),kn(),jn));Ie(a.e,new N3(a),(Zo(),Zo(),Yo))}c=lgb(sI(a.e.a));c+=c.length==0?'Using Evaluation License of: ':', ';JI(a.e,c+b);VH((SK(),WK()),a.e);ie(a.e).className='';d=ie(a.e).style;d[Sub]=(Bl(),Tub);d[Swb]=(Ml(),'center');d['right']=(hm(),iwb);d[_vb]=iwb;d['bottom']=iwb;d['padding']='0.5em 1em';d['font-family']='sans-serif';d['fontSize']='12.0px';d[$xb]='1.1em';d['color']='white';d[Nwb]='black';(Fh(),d).opacity=0.7;d[_ub]='2147483646';d[awb]=rwb;d[Bub]=rwb;d[Zub]=(zk(),dvb);d['whiteSpace']=(Hm(),'normal');d[$ub]=(vm(),kvb);d['margin']=iwb}
function u2(j,a){var b=j.a;var c=j.b;if(a.indexOf(Owb)>-1&&a.indexOf('Width')>-1){var d=a.substring(0,a.length-5)+'Style';if(b.getPropertyValue)var e=b.getPropertyValue(d);else var e=b[d];if(e==zub)return '0px'}if(b.getPropertyValue){a=a.replace(/([A-Z])/g,'-$1').toLowerCase('en');var f=b.getPropertyValue(a)}else{var f=b[a];var g=c.style;if(!/^\d+(px)?$/i.test(f)&&/^\d/.test(f)){var h=g.left,i=c.runtimeStyle.left;c.runtimeStyle.left=b.left;g.left=f||0;f=g.pixelLeft+hwb;g.left=h;c.runtimeStyle.left=i}}if(a.indexOf('margin')>-1&&f==rwb){return '0px'}a==Bub&&f==rwb?(f=c.clientWidth+hwb):a==Aub&&f==rwb&&(f=c.clientHeight+hwb);return f}
function _X(a,b,c,d,e,f,g){var h,i,j,k,l,m;if(f.a.length==0){return}j=new fmb(g);l=null;m=-1;i=a.a.o;while(j.a<j.c.a.length){h=dmb(j);if(h.row>=b&&h.row<=c&&h.col>=d&&h.col<=e){if(m!=h.row){(qtb(0,f.a.length),f.a[0]).a.length>0&&Dlb((qtb(0,f.a.length),f.a[0]),0).k!=b&&(b=Dlb((qtb(0,f.a.length),f.a[0]),0).k);l=Dlb(f,h.row-b);m=h.row;(qtb(0,l.a.length),l.a[0]).c!=d&&(d=(qtb(0,l.a.length),l.a[0]).c)}a.sc==h.col&&a.tc==h.row&&!!i&&w$(i,wwb+h.col+xwb+h.row)||PM(Dlb(l,h.col-d),h.value,h.cellStyle,h.textColor,h.needsMeasure)}k=wwb+h.col+xwb+h.row;yX(a,k,h.value,h.cellStyle,h.textColor,h.needsMeasure);h.value==null?Ljb(a.e,k):Jjb(a.e,k,h)}pY(a,false)}
function Dc(){Dc=BE;Bc=new Mb('aria-activedescendant');new yc('aria-atomic');new Mb('aria-autocomplete');new Mb('aria-controls');new Mb('aria-describedby');new Mb('aria-dropeffect');new Mb('aria-flowto');new yc('aria-haspopup');Cc=new yc('aria-label');new Mb('aria-labelledby');new yc('aria-level');new Mb('aria-live');new yc('aria-multiline');new yc('aria-multiselectable');new Mb('aria-orientation');new Mb('aria-owns');new yc('aria-posinset');new yc('aria-readonly');new Mb('aria-relevant');new yc('aria-required');new yc('aria-setsize');new Mb('aria-sort');new yc('aria-valuemax');new yc('aria-valuemin');new yc('aria-valuenow');new yc('aria-valuetext')}
function LZ(a,b){var c,d,e,f;d=(!a.F&&(a.F=new q1),a.F);c=(!a.M&&(a.M=new O1),a.M);if(c.O||b.b){c.O=false;e=(!a.M&&(a.M=new O1),a.M);f=(!a.F&&(a.F=new q1),a.F);PZ(a);e1(f,e.X,e.W,b.Kf(kyb));X0(f,e.Y);f.C?Y$(f,false):(f.C=true);s_(f,f.a-1);k1(f,e.L);W2((ng(),mg),new t$(a,b))}else{(b.Kf('sheetNames')||b.Kf('sheetIndex'))&&e1(d,c.X,c.W,b.Kf(kyb));if(b.Kf(lyb)||b.Kf(myb)||b.Kf('colW')||b.Kf('rowH')||b.Kf('rows')||b.Kf('cols')||b.Kf(nyb)||b.Kf(oyb)){d.d?(d.d=false):JW(d.V,true);k1((!a.F&&(a.F=new q1),a.F),(!a.M&&(a.M=new O1),a.M).L)}else b.Kf('mergedRegions')&&k1((!a.F&&(a.F=new q1),a.F),(!a.M&&(a.M=new O1),a.M).L);b.Kf('sheetProtected')&&X0(d,c.Y);KZ(a,b)}}
function a6(a,b){var c,d,e,f,g,h,i;if(!a.j){f=Date.now()-a.b[0];bsb(ksb((yeb(Tz),Tz.k)),f+' ms from start to move')}e=(h=(Fh(),b).changedTouches[0],a.f=_h(h.clientY||0),i=a.k++,i=i%3,a.b[i]=Date.now(),a.s[i]=a.f,a.j?a.j:$wnd.Math.abs(a.o-a.f)>=3);if(e){c=a.o-a.f;d=a.n+c;if(d>((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)){g=c+a.n-(((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0));g=g/2|0;g>(S5?0:(a.q.clientHeight|0)/3|0)&&(g=S5?0:(a.q.clientHeight|0)/3|0);c=((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)+g-a.n}else if(d<0){g=d/2|0;-g>(S5?0:(a.q.clientHeight|0)/3|0)&&(g=-(S5?0:(a.q.clientHeight|0)/3|0));c=g-a.n}d6(a,c);a.j=true;Eh.Yd(b);b.stopPropagation()}}
function gX(a,b,c){var d,e,f,g,h,i,j,k,l,m;l=false;f=rV(a);if(b<f&&b>a.ob){k=0;for(e=f-1;e>=b-1&&e>0;e--){k+=e_(a.a,e)}yh(a.Ac,ph(a.Ac)-k);(b<=a.bb||k>(a.a.i/2|0))&&(l=true)}else{j=yV(a);if(b>j){k=0;g=a.a.g;for(e=j+1;e<=b+1&&e<=g;e++){k+=e_(a.a,e)}yh(a.Ac,ph(a.Ac)+k);(b>=a.xb||k>(a.a.i/2|0))&&(l=true)}}m=HV(a);if(c<m&&c>a.Uc){k=0;for(e=m-1;e>=c-1&&e>0;e--){k+=m_(a.a,e)?0:e>=a.W.length?oV(a):a.W[e-1]}i=((a.Ac.scrollTop||0)|0)-k;zh(a.Ac,i>0?i:0);(c<=a.db||k>(a.a.L/2|0))&&(l=true)}else{d=gV(a);if(c>d){k=0;h=a.a.O;for(e=d+1;e<=c+1&&e<=h;e++){k+=m_(a.a,e)?0:e>=a.W.length?oV(a):a.W[e-1]}zh(a.Ac,((a.Ac.scrollTop||0)|0)+k);(c>=a.zb||k>(a.a.L/2|0))&&(l=true)}}if(l){uW(a);oW(a)}}
function G2(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;e=false;l=false;d=new v2(b);i=(m=iq(dq(ir,1),Jxb,20,15,[0,0,0,0]),m[0]=s2(d,qxb),m[1]=s2(d,'paddingRight'),m[2]=s2(d,'paddingBottom'),m[3]=s2(d,pxb),m);if(!e&&K2(a.d,i)){F2(a.d,i);e=true}if(!l&&L2(a.d,i)){F2(a.d,i);l=true}a.d=i;f=t2(d);if(!e&&K2(a.c,f)){F2(a.c,f);e=true}if(!l&&L2(a.c,f)){F2(a.c,f);l=true}a.c=f;c=(n=iq(dq(ir,1),Jxb,20,15,[0,0,0,0]),n[0]=s2(d,'borderTopWidth'),n[1]=s2(d,'borderRightWidth'),n[2]=s2(d,'borderBottomWidth'),n[3]=s2(d,'borderLeftWidth'),n);if(!e&&K2(a.a,c)){F2(a.a,c);e=true}if(!l&&L2(a.a,c)){F2(a.a,c);l=true}a.a=c;j=f3(b);g=j+(f[0]+f[2]);H2(a,g)&&(e=true);k=i3(b);h=k+(f[1]+f[3]);I2(a,h)&&(l=true);return new M2}
function tU(a){a.U=ksb('spreadsheet SheetWidget');a.rc=new Zob;a.Hc=Qi($doc);a.Ac=Qi($doc);a.N=Qi($doc);a.fb=Qi($doc);a.Vb=Qi($doc);a.Wb=Qi($doc);a.jc=new Jlb;a.jb=new Jlb;a.K=new Jlb;a.ib=new Jlb;a.lc=new Jlb;a.Oc=new Jlb;a.Sc=new Jlb;a.d=new Jlb;a.w=$i($doc);a.Ec=$i($doc);a.Fc=$i($doc);a.$=$i($doc);a.Xb=$i($doc);a.Fb=$i($doc);a.Nb=Qi($doc);a.Pc=Qi($doc);a.Rc=Qi($doc);a.c=Qi($doc);a.I=Qi($doc);a.hc=Qi($doc);a.F=Qi($doc);a.ec=Qi($doc);a.kb=Qi($doc);a.J=Qi($doc);a.ic=Qi($doc);a.D=Qi($doc);a.dc=Qi($doc);a.hb=Zi($doc);a.wb=new PT;a.t=new dpb;a.u=new dpb;a.xc=new dpb;a.uc=new dpb;a.wc=new dpb;a.vc=new dpb;a.p=new L6(300,new HY(a));a.Ib=new L6(100,new _Y(a));a.nc=new bZ(a);a.Jb=new fZ(a)}
function fY(a,b){var c,d,e;a.kb.style[awb]=b+(hm(),hwb);c=0;if(a.H>0){d=a.Z?a.H+1:a.H;c=3+d*18}e=0;a.gc>0&&(e=1+(a.gc+1)*15);if(c==0){a.I.style[Zub]=(zk(),zub);a.J.style[Zub]=zub}else{a.I.style[Zub]=(zk(),dvb);a.J.style[Zub]=dvb}a.Z||(a.J.style[Zub]=(zk(),zub),undefined);!!a.ib&&a.H>0?(a.F.style[Zub]=(zk(),dvb),undefined):(a.F.style[Zub]=(zk(),zub),undefined);a.I.style[Aub]=c+hwb;a.I.style[awb]=b+hwb;a.F.style[Aub]=c+hwb;a.F.style[awb]=b+hwb;a.J.style[awb]=b+hwb;a.J.style[Aub]=c+hwb;a.Db&&(a.J.style[Bub]=zV(a)+hwb,undefined);a.J.style[_vb]=e+hwb;a.D.style[awb]=b+hwb;a.D.style[_vb]=e+hwb;a.D.style[Aub]=c+hwb;a.dc.style[awb]=b+c+hwb;a.dc.style[_vb]=iwb;a.dc.style[Bub]=e+hwb;a.g=e;a.f=c;return c}
function cU(a){a.n.className='scroll-tabs-beginning';a.n.part.add(rxb,'scroll-tabs-to-start-button');a.o.className='scroll-tabs-end';a.o.part.add(rxb,'scroll-tabs-to-end-button');a.p.className='scroll-tabs-left';a.p.part.add(rxb,'scroll-tabs-backward-button');a.q.className='scroll-tabs-right';a.q.part.add(rxb,'scroll-tabs-forward-button');a.a.className='add-new-tab';a.a.part.add('new-tab-button');a.i.className='sheet-tabsheet-options';Vg(a.i,a.n);Vg(a.i,a.p);Vg(a.i,a.q);Vg(a.i,a.o);Vg(a.i,a.a);a.c.className='sheet-tabsheet-container';a.v.className='sheet-tabsheet-temp';Vg(a.k,a.v);a.k.className='sheet-tabsheet';Vg(a.k,a.i);Vg(a.k,a.c);a.f.className='sheet-tabsheet-infolabel';Vg(a.k,a.f);oe(a,a.k)}
function aP(a,b){var c,d;switch((Fh(),b).keyCode|0){case 8:case 46:a.t.Z?qb(new TP(a),100):W2((ng(),mg),new VP(a));W2((ng(),mg),new XP(a));break;case 27:kL(a.j,a.c);I_(a.t);uP(a);b.stopPropagation();Eh.Yd(b);break;case 13:H_(a.t,(d=iL(a.j),d==null?'':d));uP(a);b.stopPropagation();Eh.Yd(b);break;case 9:L_(a.t,(c=iL(a.j),c==null?'':c),!b.shiftKey);uP(a);b.stopPropagation();break;case 38:if(a.g){eP(a,!!b.shiftKey,true,false,false);Eh.Yd(b)}break;case 39:if(a.g){eP(a,!!b.shiftKey,false,true,false);Eh.Yd(b)}break;case 40:if(a.g){eP(a,!!b.shiftKey,false,false,true);Eh.Yd(b)}break;case 37:if(a.g){eP(a,!!b.shiftKey,false,false,false);Eh.Yd(b)}break;default:VO(a,a.j);}if(a.e){zP(a,false);W2((ng(),mg),new JP(a))}}
function Tgb(a,b){var c,d,e,f,g,h,i,j,k,l;j=(!a.c&&(a.c=Zhb(bE(a.f))),a.c);k=(!b.c&&(b.c=Zhb(bE(b.f))),b.c);c=a.e-b.e;g=0;e=1;h=Ogb.length-1;if(b.a==0&&b.f!=-1){throw WD(new geb('Division by zero'))}if(j.e==0){return lhb(c)}d=Ahb(j,k);j=whb(j,d);k=whb(k,d);f=Chb(k);k=Khb(k,f);do{l=xhb(k,Ogb[e]);if(l[1].e==0){g+=e;e<h&&++e;k=l[0]}else{if(e==1){break}e=1}}while(true);if(!yhb(k.e<0?k.e==0?k:new Ohb(-k.e,k.d,k.a):k,(shb(),nhb))){throw WD(new geb('Non-terminating decimal expansion; no exact representable decimal result'))}k.e<0&&(j=j.e==0?j:new Ohb(-j.e,j.d,j.a));i=hhb(c+$wnd.Math.max(f,g));e=f-g;j=e>0?(Eib(),e<Dib.length?Jib(j,Dib[e]):e<Bib.length?Fhb(j,Bib[e]):Fhb(j,Hhb(Bib[1],e))):Jhb(j,-e);return new bhb(j,i)}
function NV(a,b,c){var d,e,f,g,h,i,j,k;a.$b=true;d=c-a.Tb;d<0&&(d=0);HT(a.Xb);d>0?JI(a.Zb,'Height: '+d+'px \u2248 '+Ugb(jhb(d/a.Mb*72))+'pt'):JI(a.Zb,'Hide row');j='.'+a.Bc+Nxb+a.ac+'{height:'+d+Mxb;KT(a.Xb,j);e=0;k=fh(a.Ac)-c;for(g=a.ac+1;g<=a.zb&&e<k;g++){e+=m_(a.a,g)?0:g>=a.W.length?oV(a):a.W[g-1]}i=c-a.Ub;i<a.Tb-a.Ub&&(i=a.Tb-a.Ub);j='';for(h=a.ac+1;h<=a.zb;h++){j+='.'+a.Bc+Nxb+h;a.zb!=h&&(j+=',')}if(!!a.jb&&a.ac>=a.jb.a.length){for(f=1;f<=a.jb.a.length;f++){i+=m_(a.a,f)?0:f>=a.W.length?oV(a):a.W[f-1]}}i+=a.Qc;(!a.jb||a.ac>a.jb.a.length)&&(i-=(a.Ac.scrollTop||0)|0);if(j.length!=0){j+='{margin-top:'+i+Mxb;KT(a.Xb,j)}j='.'+a.Bc+'.row-resizing > div.resize-line.rh {margin-top:'+(i-1)+Mxb;KT(a.Xb,j);KX(a,b,c)}
function WM(a){var b,c,d,e,f,g,h,i,j,k,l,m;k=jh(a.d).indexOf(' r ')!=-1||Vfb(jh(a.d),' r');e=d_(a.n.a,a.c);l=Fjb(a.n.rc,new _M(a.p,a.b,a.k,a.c));!l&&(l=vfb(KM(a)));j=l.a-e;if(!k&&j>0){j+=2;c=a.c;m=0;d=a.n.a.f;g=cW(a.n,c);while(c<d.length&&m<j){if(g&&!cW(a.n,c+1)){break}h=hV(a.n,c+1,a.k);if(!!h&&h.p!=null&&h.p.length!=0){break}m+=d[c];++c}m+=e;i=Qi($doc);i.style[uwb]=zub;i.style[Bub]=m+(hm(),hwb);i.style[kwb]=(ql(),lvb);i.style['textOverflow']=(Vl(),'ellipsis');b=a.d.childNodes;if(b){for(f=b.length-1;f>=0;f--){i.appendChild(b[f])}}a.d.innerHTML='';Vg(a.d,i);IM(a);a.i=true}else{a.i=false}JM(a)?(a.d.style[kwb]=(ql(),lvb),undefined):j>0?(a.d.style[kwb]=(ql(),kvb),undefined):(a.d.style[kwb]=(ql(),lvb),undefined);a.g=false}
function qW(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(!!(Fh(),b).changedTouches&&b.changedTouches.length>0){k=b.changedTouches;i=Sm(k[k.length-1])}else if(!!b.touches&&b.touches.length>0){k=b.touches;i=Sm(k[k.length-1])}else{i=CY(b)}m=(g=oj($doc),$2(),b.type.indexOf(axb)!=-1?Rm(b.changedTouches[0])+g:_h(b.clientY||0)+g);l=(f=nj($doc),b.type.indexOf(axb)!=-1?Qm(b.changedTouches[0])+f:_h(b.clientX||0)+f);if(HU(a,m,l)){return}d=0;e=0;c=null;if(i){c=i.getAttribute(Kub)||'';MT(a.wb,c);d=a.wb.a;e=a.wb.b}if(e==0||d==0){return}h=Twb.length;if(!Wfb(c.substr(c.length-h,h),Twb)){j=xV(a,l,m,hV(a,d,e));d=j.c;e=j.k}if(d!=a.Lc||e!=a.Mc){d==0&&(l>hh(Jh(i))?(d=yV(a)+1):(d=a.Lc));e==0&&(m>fh(a.Ac)?(e=gV(a)+1):(e=a.Mc));U_(a.a,d,e);a.Lc=d;a.Mc=e}}
function aH(a){switch(a){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return Lvb;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case Xub:return Mvb;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case qvb:return 8;case 'scroll':return Nvb;case 'error':return Ttb;case Ovb:case 'mousewheel':return Pvb;case Yub:return Qvb;case 'paste':return Avb;case uvb:return Rvb;case 'touchmove':return Svb;case 'touchend':return Bvb;case svb:return Tvb;case 'gesturestart':return Uvb;case 'gesturechange':return Vvb;case 'gestureend':return Wvb;default:return -1;}}
function OW(b,c){var d,e,f,g,h,i,j;h=wwb+c.col1+xwb+c.row1;b.Fb.sheet.deleteRule(0);i=Fjb(b.Eb,vfb(c.id));j=hV(b,c.col1,c.row1);!!j&&PM(j,i.p,i.b,i.o,false);ah(Kjb(b.Eb,vfb(c.id)).d);Kjb(b.Kb,c);c.col1>=b.zc.e&&c.col2<=b.zc.f&&c.row1>=b.zc.K&&c.row2<=b.zc.L&&uY(b,c.col1,c.col2,c.row1,c.row2,false);f=null;if(!!b.r&&Hjb(b.r,h)){try{d=Dlb(Dlb(b.lc,c.row1-b.db),c.col1-b.bb);QM(d);f=d.d}catch(a){a=VD(a);if(!Yq(a,21))throw WD(a)}}if(!!b.tb&&b.tb.contains(h)){try{d=Dlb(Dlb(b.lc,c.row1-b.db),c.col1-b.bb);RM(d);f=d.d}catch(a){a=VD(a);if(!Yq(a,21))throw WD(a)}}if(Hjb(b.b,h)&&!!f){e=Gjb(b.b,h);dO(e,f,c.row1,c.col1)}if(!!b.T&&Hjb(b.T,h)){try{d=Dlb(Dlb(b.lc,c.row1-b.db),c.col1-b.bb);g=Gjb(b.T,h);uU(b,d,g)}catch(a){a=VD(a);if(!Yq(a,21))throw WD(a)}}}
function BY(a,b){var c;tU(this);c=r2().toLowerCase();this.vb=c.indexOf('macintosh')!=-1||c.indexOf('mac osx')!=-1||c.indexOf('mac os x')!=-1;this.a=a;this.Tc=b;this.e=new Zob;this.b=new Zob;this.Cc=new Zob;this.Eb=new Zob;this.Kb=new Zob;this.rb=new H6;re(this.rb,'v-spreadsheet-hyperlink-tooltip-label');this.qb=new LN;re(this.qb,'v-tooltip');this.qb.s=this;xI(this.qb,this.rb);this.Zb=new H6;re(this.Zb,'v-spreadsheet-resize-tooltip-label');this.Yb=new LN;re(this.Yb,'v-tooltip');this.Yb.s=this;xI(this.Yb,this.Zb);this.q=new eO(this,this.Ac);TN(this.q);TV(this);Be((LF(),this.Zc),Wxb,true);this.zc=new HS(a,this);this.M=new GO(this,new CO(this));Vg(this.Zc,ie(this.M));UV(this);this.mc=new L6(20,new hZ(this));this.Sb=new L6(100,new jZ(this))}
function xY(a){var b,c,d,e,f,g,h,i;d=a.ob>0?1:0;jh(a.Hc).indexOf('report')!=-1&&(d=0);i=0;a.jc.a.length==0||(i=zV(a));f=0;a.K.a.length==0||(f=lV(a));e=0;if(a.a.t){g=new J2;G2(g,ie(a.a.t));e=dr(g.b)}b=fY(a,e);c=gY(a,e);a.kb.style[awb]=e+(hm(),hwb);c==0||b==0?(a.kb.style[Zub]=(zk(),zub),undefined):(a.kb.style[Zub]=(zk(),dvb),undefined);a.kb.style[Aub]=b+hwb;a.kb.style[Bub]=c+hwb;W2((ng(),mg),new ZY(a));if(!a.Z){i=0;f=0}a.Qc=f+e+b;a.Cb=i+c;h=a.Pc.style;h[Bub]=a.Bb+i+1+hwb;h[Aub]=a.Nc+f+hwb;h[awb]=e+b+hwb;h[_vb]=c+hwb;h=a.Rc.style;h[_vb]=a.Bb+a.Cb+d+hwb;h[Aub]=a.Nc+f+hwb;h[awb]=e+b+hwb;h=a.c.style;h[Bub]=a.Bb+i+1+hwb;h[awb]=a.Nc+a.Qc+hwb;h[_vb]=c+hwb;h=a.Ac.style;h[_vb]=a.Bb+a.Cb+d+hwb;h[awb]=a.Nc+a.Qc+hwb;h=a.N.style;h[awb]=e+b+hwb;h[_vb]=c+hwb}
function lib(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A;q=fq(ir,Jxb,20,d+1,15,1);r=fq(ir,Jxb,20,f+1,15,1);s=f;i=sfb(e[f-1]);if(i!=0){bib(r,e,0,i);bib(q,c,0,i)}else{Egb(c,0,q,0,d);Egb(e,0,r,0,f)}j=r[s-1];l=b-1;m=d;while(l>=0){k=0;if(q[m]==j){k=-1}else{t=XD(lE(YD(q[m],uAb),32),YD(q[m-1],uAb));w=oib(t,j);k=rE(w);v=rE(mE(w,32));if(k!=0){o=0;A=0;u=false;++k;do{--k;if(u){break}o=iE(YD(k,uAb),YD(r[s-2],uAb));A=XD(lE(v,32),YD(q[m-2],uAb));p=XD(YD(v,uAb),YD(j,uAb));sfb(rE(nE(p,32)))<32?(u=true):(v=rE(p))}while(cE(tE(o,wAb),tE(A,wAb)))}}if(k!=0){g=rib(q,m-s,r,s,k);if(g!=0){--k;h=0;for(n=0;n<s;n++){h=XD(h,XD(YD(q[m-s+n],uAb),YD(r[n],uAb)));q[m-s+n]=rE(h);h=nE(h,32)}}}a!=null&&(a[l]=k);--m;--l}if(i!=0){eib(r,s,q,0,i);return r}Egb(q,0,r,0,f);return q}
function UN(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;h=hh(a.c);e=(a.c.offsetLeft||0)|0;g=(a.c.offsetWidth||0)|0;f=(a.c.offsetTop||0)|0;i=ih(a.c);k=h+15;if(k+a.n>hh(a.o)){o=gh(a.c)-15-a.n;gh(a.o)<o&&(k=o)}l=i-15;m=fh(a.o);if(l+a.k>m){l-=l+a.k-m+5;n=ih(a.o);l<n&&(l=n)}else l<ih(a.o)&&(l+=ih(a.o)-l);oN(a,k,l);a.j!=null&&sh(a.i,a.j);a.j=wwb+a.b+xwb+a.d;l+=2;k+=2;c=i-l;if(k>h){b=k-h;if(c>0){j=-($wnd.Math.atan(c/b)*Fwb)}else{c=$wnd.Math.abs(c);j=0}}else{k-=2;b=h-(k+a.n);if(c>0){j=-180+$wnd.Math.atan(c/b)*Fwb}else{c=$wnd.Math.abs(c);j=-180}}d=$wnd.Math.sqrt(b*b+c*c)+1;a.i.style[Bub]=d+(hm(),hwb);a.i.style[awb]=f+hwb;a.i.style[_vb]=e+g+hwb;a.i.style['transform']=Gwb+j+'deg)';a.i.style['msTransform']=Gwb+j+'deg)';a.i.style[Hwb]=Gwb+j+'deg)';dh(a.i,a.j);Vg(a.o,a.i)}
function fX(a,b,c,d){var e,f,g,h,i,j,k;j=false;b<=a.Uc&&(b=a.Uc+1);k=HV(a);e=gV(a);if(d){if(b<k){i=0;for(f=k-1;f>=b-1&&f>0;f--){i+=m_(a.a,f)?0:f>=a.W.length?oV(a):a.W[f-1]}h=((a.Ac.scrollTop||0)|0)-i;zh(a.Ac,h>0?h:0);(b<=a.db||i>(a.a.L/2|0))&&(j=true)}else if(b>e){i=0;g=a.a.O;for(f=e+1;f<=b+1&&f<=g;f++){i+=m_(a.a,f)?0:f>=a.W.length?oV(a):a.W[f-1]}zh(a.Ac,((a.Ac.scrollTop||0)|0)+i);(b>=a.zb||i>(a.a.L/2|0))&&(j=true)}}else{if(c>e){i=0;g=a.a.O;for(f=e+1;f<=c+1&&f<=g;f++){i+=m_(a.a,f)?0:f>=a.W.length?oV(a):a.W[f-1]}zh(a.Ac,((a.Ac.scrollTop||0)|0)+i);(c>=a.zb||i>(a.a.L/2|0))&&(j=true)}else if(c<k){i=0;for(f=k-1;f>=c-1&&f>0;f--){i+=m_(a.a,f)?0:f>=a.W.length?oV(a):a.W[f-1]}h=((a.Ac.scrollTop||0)|0)-i;zh(a.Ac,h>0?h:0);(c<=a.db||i>(a.a.L/2|0))&&(j=true)}}return j}
function Pg(a,b){var c,d,e,f,g,h,i,j,k;j='';if(b.length==0){return a.Pd(Ftb,Ctb,-1,-1)}k=lgb(b);Wfb(k.substr(0,3),'at ')&&(k=(xtb(3,k.length+1),k.substr(3)));k=k.replace(/\[.*?\]/g,'');g=k.indexOf('(');if(g==-1){g=k.indexOf('@');if(g==-1){j=k;k=''}else{j=lgb((xtb(g+1,k.length+1),k.substr(g+1)));k=lgb((wtb(0,g,k.length),k.substr(0,g)))}}else{c=k.indexOf(')',g);j=(wtb(g+1,c,k.length),k.substr(g+1,c-(g+1)));k=lgb((wtb(0,g,k.length),k.substr(0,g)))}g=Zfb(k,ngb(46));g!=-1&&(k=(xtb(g+1,k.length+1),k.substr(g+1)));(k.length==0||Wfb(k,'Anonymous function'))&&(k=Ctb);h=agb(j,ngb(58));e=bgb(j,ngb(58),h-1);i=-1;d=-1;f=Ftb;if(h!=-1&&e!=-1){f=(wtb(0,e,j.length),j.substr(0,e));i=Jg((wtb(e+1,h,j.length),j.substr(e+1,h-(e+1))));d=Jg((xtb(h+1,j.length+1),j.substr(h+1)))}return a.Pd(f,k,i,d)}
function _5(a){var b,c,d,e,f,g,h,i,j;if(!a.j){T5=null;CM(a.d.a);a.d=null;return}b=a.n+a.a;g=((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0);c=-1;if(b>g){i=g-b;d=g}else if(b<0){i=-b;d=0}else{h=W5(a);bsb(ksb((yeb(Tz),Tz.k)),'pxPerMs'+h);i=dr(0.5*h*h/0.002);h<0&&(i=-i);d=b+i;if(d>g+(S5?0:(a.q.clientHeight|0)/3|0)){d=((a.q.scrollHeight||0)|0)-(a.q.clientHeight|0)+(S5?0:(a.q.clientHeight|0)/3|0);e=d-b;i=e}else if(d<-(S5?0:(a.q.clientHeight|0)/3|0)){d=-(S5?0:(a.q.clientHeight|0)/3|0);e=d-b;i=e}else{c=dr($wnd.Math.abs(h/0.002))}}c==-1&&(c=350);if(c>1500){bsb(ksb((yeb(Tz),Tz.k)),'Max animation time. '+c);c=1500}a.c=d;if($wnd.Math.abs(i)<3||c<20){bsb(ksb((yeb(Tz),Tz.k)),"Small 'momentum' "+i+' |  '+c+' Skipping animation,');$5(a);return}j=-d+a.n;f=-b+a.n;if(S5){f-=a.n;j-=a.n}f6(a,c,f,j)}
function $X(b,c,d){var e,f,g,h,i,j,k;g=(LF(),aH((Fh(),c).type));j=d.getAttribute(Kub)||'';if(Wfb(j,swb)||Wfb(j,twb)){e=Jh(d);f=e.getAttribute(Kub)||'';i=Twb.length;Wfb(f.substr(f.length-i,i),Twb)&&(f=dgb(f,Xxb,''));if(Hjb(b.b,f)){return}if(g==16){if(!($J(b.q)&&Wfb(f,b.j))){MT(b.wb,f);b.k=b.wb.a;b.n=b.wb.b;K6(b.p)}}else{k=Eh.Wd(c);if(!b.o&&!(!!k&&!!k.equals?k.equals(e):k==e)){VN(b.q);b.j=null;b.k=-1;b.n=-1}}}else{i=Twb.length;Wfb(j.substr(j.length-i,i),Twb)&&(j=dgb(j,Xxb,''));if(Hjb(b.b,j)){return}if(g==16){if(!($J(b.q)&&Wfb(j,b.j))){dG(b.Ac);MT(b.wb,j);b.k=b.wb.a;b.n=b.wb.b;K6(b.p)}}else if(g==32){k=Eh.Wd(c);if(!b.o&&!!k&&!!Jh(k)){try{if(!(xW(k.getAttribute(Kub)||'')&&nf(Jh(k),d))){VN(b.q);b.j=null;b.n=-1;b.k=-1}}catch(a){a=VD(a);if(Yq(a,52)){h=a;isb(b.U,'SheetWidget:updateCellCommentDisplay: NPE ONMOUSEOUT, '+h.f)}else throw WD(a)}}}}}
function Rgb(){Rgb=BE;var a,b,c;new _gb(1,0);new _gb(10,0);new _gb(0,0);Igb=fq(VB,Etb,36,11,0,1);Jgb=fq(fr,Etb,20,100,15,1);Kgb=iq(dq(gr,1),Etb,20,15,[1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,qAb,rAb,6103515625,30517578125,152587890625,762939453125,3814697265625,19073486328125,95367431640625,476837158203125,2384185791015625]);Lgb=fq(ir,Jxb,20,Kgb.length,15,1);Mgb=iq(dq(gr,1),Etb,20,15,[1,10,100,Qub,10000,100000,1000000,10000000,100000000,Dvb,10000000000,100000000000,1000000000000,10000000000000,100000000000000,1000000000000000,10000000000000000]);Ngb=fq(ir,Jxb,20,Mgb.length,15,1);Pgb=fq(VB,Etb,36,11,0,1);a=0;for(;a<Pgb.length;a++){Igb[a]=new _gb(a,0);Pgb[a]=new _gb(0,a);Jgb[a]=48}for(;a<Jgb.length;a++){Jgb[a]=48}for(c=0;c<Lgb.length;c++){Lgb[c]=chb(Kgb[c])}for(b=0;b<Ngb.length;b++){Ngb[b]=chb(Mgb[b])}Eib();Ogb=Bib}
function Dpb(){function e(){this.obj=this.createObject()}
;e.prototype.createObject=function(a){return Object.create(null)};e.prototype.get=function(a){return this.obj[a]};e.prototype.set=function(a,b){this.obj[a]=b};e.prototype[FAb]=function(a){delete this.obj[a]};e.prototype.keys=function(){return Object.getOwnPropertyNames(this.obj)};e.prototype.entries=function(){var b=this.keys();var c=this;var d=0;return {next:function(){if(d>=b.length)return {done:true};var a=b[d++];return {value:[a,c.get(a)],done:false}}}};if(!Bpb()){e.prototype.createObject=function(){return {}};e.prototype.get=function(a){return this.obj[':'+a]};e.prototype.set=function(a,b){this.obj[':'+a]=b};e.prototype[FAb]=function(a){delete this.obj[':'+a]};e.prototype.keys=function(){var a=[];for(var b in this.obj){b.charCodeAt(0)==58&&a.push(b.substring(1))}return a}}return e}
function eO(a,b){VJ();var c;LN.call(this);this.e=dj($doc);this.o=b;this.p=new wI;xI(this,this.p);this.i=Qi($doc);this.i.className=Jwb;this.a=new H6;ue(this.a,false);re(this.a,'comment-overlay-author');this.g=new H6;ue(this.g,false);re(this.g,'comment-overlay-label');UJ.gf((LF(),LF(),lh(this.Zc))).className='v-spreadsheet-comment-overlay';Be(UJ.gf((null,lh(this.Zc))),'v-spreadsheet-comment-overlay-shadow',true);this.s=a;this.G=false;this.Zc.style[$ub]=lvb;!!this.u&&(this.u.style[$ub]=lvb,undefined);this.i.style[$ub]=(vm(),lvb);this.Zc.style[_ub]='0';this.f=new H6;ue(this.f,false);re(this.f,'comment-overlay-invalidformula');vI(this.p,this.f);vI(this.p,this.a);vI(this.p,this.g);dh(this.e,'comment-overlay-input');this.e.style[Zub]=(zk(),zub);Vg(this.Zc,this.e);this.e.rows=4;this.e.style[Bub]=(hm(),'200.0px');c=new hO(this,a);Ie(this.a,c,(kn(),kn(),jn));Ie(this.g,c,(null,jn))}
function BP(a,b){RO();var c,d,e;this.r=(LF(),Qi($doc));this.i=new Jlb;this.F=new dpb;this.D=new Zob;this.G=new Zob;this.t=a;this.I=b;this.w=b.sb;this.H=new CT;BT(this.H,b,this);this.j=new qL;df(this.j,2);this.a=new qL;df(this.a,1);re(this.j,'functionfield');ie(this.j).part.add('formula-field');re(this.a,'addressfield');ie(this.a).part.add('address-field');this.B=new oJ;re(this.B,'namedrangebox');mJ(this.B);fJ(this.B,'');this.C=new MI;re(this.C,'arrow');ue(this.B,false);ue(this.C,false);d=new wI;c=new wI;e=new wI;c.Zc.className='fixed-left-panel';e.Zc.className='adjusting-right-panel';vI(c,this.a);vI(c,this.C);vI(c,this.B);vI(e,this.j);QH(d,c,d.Zc);QH(d,e,d.Zc);lI(this,d);this.Zc.className='functionbar';fG(ie(this.B),1024);eG(ie(this.B),new DP(this));fG(ie(this.a),6656);eG(ie(this.a),new LP(this));fG(ie(this.j),7048);eG(ie(this.j),new NP(this));this.r.className='formulaoverlay';Vg(this.Zc,this.r)}
function jib(a,b){hib();var c,d,e,f,g,h,i,j,k,l,m,n,o,p;i=ZD(a,0)<0;i&&(a=jE(a));if(ZD(a,0)==0){switch(b){case 0:return '0';case 1:return '0.0';case 2:return '0.00';case 3:return '0.000';case 4:return '0.0000';case 5:return '0.00000';case 6:return '0.000000';default:n=new ygb;b<0?(n.a+='0E+',n):(n.a+='0E',n);n.a+=b==Ntb?'2147483648':''+-b;return n.a;}}k=18;l=fq(fr,Etb,20,k+1,15,1);c=k;p=a;do{j=p;p=_D(p,10);l[--c]=rE(XD(48,oE(j,iE(p,10))))&Utb}while(ZD(p,0)!=0);e=oE(oE(oE(k,c),b),1);if(b==0){i&&(l[--c]=45);return pgb(l,c,k-c)}if(b>0&&ZD(e,-6)>=0){if(ZD(e,0)>=0){f=c+rE(e);for(h=k-1;h>=f;h--){l[h+1]=l[h]}l[++f]=46;i&&(l[--c]=45);return pgb(l,c,k-c+1)}for(g=2;fE(g,XD(jE(e),1));g++){l[--c]=48}l[--c]=46;l[--c]=48;i&&(l[--c]=45);return pgb(l,c,k-c)}o=c+1;d=k;m=new zgb;i&&(m.a+='-',m);if(d-o>=1){sgb(m,l[c]);m.a+='.';m.a+=pgb(l,c+1,k-c-1)}else{m.a+=pgb(l,c,k-c)}m.a+='E';ZD(e,0)>0&&(m.a+='+',m);m.a+=''+sE(e);return m.a}
function hY(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;n=kW(a);while(n.a<n.c.a.length){q=dmb(n);Yq(q,98)&&Qe(q,null)}$g(b);$g(c);h=0;f&&!a.G?(h=5):!f&&!a.fc&&(h=2);if(g>0){if(f){s=a.hc.clientWidth|0;a.Z&&(s+=zV(a))}else{s=a.I.clientHeight|0;a.Z&&(s+=lV(a))}s+=h;for(l=new fmb(d);l.a<l.c.a.length;){k=dmb(l);if(f){p=new tO(k.uniqueIndex,a.a);pO(p,a.G)}else{p=new LR(k.uniqueIndex,a.a);pO(p,a.fc)}r=s;for(m=0;m<k.startIndex;m++){f?(r+=e_(a.a,m+1)):(r+=m_(a.a,m+1)?0:m+1>=a.W.length?oV(a):a.W[m+1-1])}p.f&&(f?(r-=mV(a,k.startIndex)/2|0):(r-=AV(a,k.startIndex)/2|0));p.sf(r,k.level-1);oO(p,k.collapsed);Vg(b,(LF(),p.Zc));Qe(p,a);o=0;for(j=k.startIndex;j<=k.endIndex;j++){f?(o+=e_(a.a,j+1)):(o+=m_(a.a,j+1)?0:j+1>=a.W.length?oV(a):a.W[j+1-1])}o-=h;p.f?f?(o+=mV(a,k.startIndex)/2):(o+=AV(a,k.startIndex)/2):f?(o+=mV(a,k.endIndex+2)/2):(o+=AV(a,k.endIndex+2)/2);qO(p,o);if(!!e&&e.a.length>k.startIndex){i=p.pf();Vg(c,i.Zc);Qe(i,a)}}}}
function ZF(){var a,b,c;b=$doc.compatMode;a=iq(dq(SB,1),Stb,2,6,[Mub]);for(c=0;c<a.length;c++){if(Wfb(a[c],b)){return}}a.length==1&&Wfb(Mub,a[0])&&Wfb('BackCompat',b)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\""+b+'"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' "+b+"').<br>Modify your application's host HTML page doctype, or update your custom "+"'document.compatMode' configuration property settings."}
function lH(a,b){var c=(a.__eventBits||0)^b;a.__eventBits=b;if(!c)return;c&1&&(a.onclick=b&1?hH:null);c&2&&(a.ondblclick=b&2?hH:null);c&4&&(a.onmousedown=b&4?hH:null);c&8&&(a.onmouseup=b&8?hH:null);c&16&&(a.onmouseover=b&16?hH:null);c&32&&(a.onmouseout=b&32?hH:null);c&64&&(a.onmousemove=b&64?hH:null);c&128&&(a.onkeydown=b&128?hH:null);c&256&&(a.onkeypress=b&256?hH:null);c&512&&(a.onkeyup=b&512?hH:null);c&1024&&(a.onchange=b&1024?hH:null);c&Lvb&&(a.onfocus=b&Lvb?hH:null);c&4096&&(a.onblur=b&4096?hH:null);c&8192&&(a.onlosecapture=b&8192?hH:null);c&Nvb&&(a.onscroll=b&Nvb?hH:null);c&Mvb&&(a.onload=b&Mvb?iH:null);c&Ttb&&(a.onerror=b&Ttb?hH:null);c&Pvb&&(a.onmousewheel=b&Pvb?hH:null);c&Qvb&&(a.oncontextmenu=b&Qvb?hH:null);c&Avb&&(a.onpaste=b&Avb?hH:null);c&Rvb&&(a.ontouchstart=b&Rvb?hH:null);c&Svb&&(a.ontouchmove=b&Svb?hH:null);c&Bvb&&(a.ontouchend=b&Bvb?hH:null);c&Tvb&&(a.ontouchcancel=b&Tvb?hH:null);c&Uvb&&(a.ongesturestart=b&Uvb?hH:null);c&Vvb&&(a.ongesturechange=b&Vvb?hH:null);c&Wvb&&(a.ongestureend=b&Wvb?hH:null)}
function dQ(a,b,c,d,e){var f,g,h,i,j,k;if(b==c&&d==e){h=w1(a,d,b);if(!h){h=new cQ;h.col1=d;h.col2=e;h.row1=b;h.row2=c}return h}else{g=x1(a,d,b);if(!!g&&g.col2>=e&&g.row2>=c){return g}}k=false;f=d;while(f<=e){i=w1(a,f,b);if(i){f=i.col2+1;if(d>i.col1){d=i.col1;k=true}if(e<i.col2){e=i.col2;k=true}if(b>i.row1){b=i.row1;k=true}}else{++f}}b>c&&(b=c);f=b;while(f<=c){i=w1(a,e,f);if(i){f=i.row2+1;if(e<i.col2){e=i.col2;k=true}if(b>i.row1){b=i.row1;k=true}if(c<i.row2){c=i.row2;k=true}}else{++f}}e<d&&(e=d);f=d;while(f<=e){i=w1(a,f,c);if(i){f=i.col2+1;if(d>i.col1){d=i.col1;k=true}if(e<i.col2){e=i.col2;k=true}if(c<i.row2){c=i.row2;k=true}}else{++f}}c<b&&(c=b);f=b;while(f<=c){i=w1(a,d,f);if(i){f=i.row2+1;if(d>i.col1){d=i.col1;k=true}if(b>i.row1){b=i.row1;k=true}if(c<i.row2){c=i.row2;k=true}}else{++f}}d>e&&(d=e);if(k){return dQ(a,b,c,d,e)}else if(b==c&&d==e){h=w1(a,d,b);if(!h){h=new cQ;h.col1=d;h.col2=e;h.row1=b;h.row2=c}return h}else{g=x1(a,d,b);if(!!g&&g.col2>=e&&g.row2>=c){return g}}j=new cQ;j.col1=d;j.col2=e;j.row1=b;j.row2=c;return j}
function zT(a,b){var c,d,e,f,g,h;e=yj(b.a);d=a.b.a;if(a.b._){switch(e){case 8:case 46:MV(a.b);AP(a.a);zP(a.a,true);WO(a.a);TO(a.a);break;case 27:U$(d,d.b,true);kP(d.t);dV(d.V);ZO(a.a);break;case 9:z_(d,(h=iL(a.b.sb),h==null?'':h),zj(b.a));ZO(a.a);!!b.a&&Cj(b.a);break;case 38:if(bP(a.a)){x_(d,(g=iL(a.b.sb),g==null?'':g),true);!!b.a&&Cj(b.a)}else if(dP(a.a)){eP(a.a,zj(b.a),true,false,false);!!b.a&&Cj(b.a)}break;case 40:if(bP(a.a)){x_(d,(g=iL(a.b.sb),g==null?'':g),false);!!b.a&&Cj(b.a)}else if(dP(a.a)){eP(a.a,zj(b.a),false,false,true);!!b.a&&Cj(b.a)}break;case 37:if(bP(a.a)){z_(d,(g=iL(a.b.sb),g==null?'':g),true);!!b.a&&Cj(b.a)}else if(dP(a.a)){eP(a.a,zj(b.a),false,false,false);!!b.a&&Cj(b.a)}else if(a.a.v){zP(a.a,true);gL(a.b.sb)==0&&!!b.a&&Cj(b.a)}break;case 39:if(bP(a.a)){z_(d,(g=iL(a.b.sb),g==null?'':g),false);!!b.a&&Cj(b.a)}else if(dP(a.a)){eP(a.a,zj(b.a),false,true,false);!!b.a&&Cj(b.a)}else if(a.a.v){zP(a.a,true);c=gL(a.b.sb);f=(g=iL(a.b.sb),g==null?'':g).length;c==f&&!!b.a&&Cj(b.a)}}}else{X_(d,b.a,IT(vj(b.a)))}Dj(b.a)}
function u_(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;_$(a);if(b==0||c==0){return}j=false;f||(j=c!=a.V.tc||b!=a.V.sc);if(d){m=a.V.sc;n=a.V.tc;g=m>b?b:m;h=m>b?m:b;k=n>c?c:n;l=n>c?n:c;o=dQ(a.I,k,l,g,h);if(a.t.f);else if(nS(a.V.zc)){wY(a.V,o.col1,o.col2,o.row1,o.row2);uY(a.V,o.col1,o.col2,o.row1,o.row2,true)}else{uY(a.V,o.col1,o.col2,o.row1,o.row2,false)}if(a.t.f){oP(a.t,a.X,a.Y,b,c,false)}else if(f){nS(a.V.zc)?Wab(a.W,o.row1,o.col1,o.row2,o.col2):Zab(a.W,o.row1,o.col1,o.row2,o.col2);qb(a.r,200)}}else if(e){if(b==a.V.sc&&c==a.V.tc){return}if(a.t.f){oP(a.t,b,c,b,c,true)}else{a.V.C&&(a.V.C=false,undefined);nS(a.V.zc)&&EX(a.V,false);UX(a.V,b,c);_R(a.Q);j&&m1(a,b,c,null);if(f){Uab(a.W,c,b);qb(a.r,200)}}}else{i=x1(a.I,b,c);if(a.t.f){a.X=b;a.Y=c;oP(a.t,b,c,b,c,false)}else{a.V.C||(a.V.C=true,undefined);if(!nS(a.V.zc)){EX(a.V,true);QU(a.V)}DX(a.V,b,c);if(i){wY(a.V,i.col1,i.col2,i.row1,i.row2);uY(a.V,i.col1,i.col2,i.row1,i.row2,true);dS(a.Q,i.col1);eS(a.Q,i.row1)}else{wY(a.V,b,b,c,c);uY(a.V,b,b,c,c,true)}j&&m1(a,b,c,null);if(f){_R(a.Q);Xab(a.W,c,b,true);qb(a.r,200)}}}}
function TV(a){oe(a,a.Hc);Vg(a.Hc,a.Ac);dh(a.Hc,'v-spreadsheet');a.Ac.className='bottom-right-pane';dh(a.Ac,mxb);a.Ac.tabIndex=3;a.Rc.className='top-right-pane';dh(a.Rc,mxb);Vg(a.Hc,a.Rc);a.c.className='bottom-left-pane';dh(a.c,mxb);Vg(a.Hc,a.c);a.Pc.className='top-left-pane';dh(a.Pc,mxb);Vg(a.Hc,a.Pc);a.I.className='col-group-pane';Vg(a.Hc,a.I);a.hc.className='row-group-pane';Vg(a.Hc,a.hc);a.F.className='col-group-freeze-pane';Vg(a.Hc,a.F);a.ec.className='row-group-freeze-pane';Vg(a.Hc,a.ec);a.ic.className='row-group-summary';Vg(a.Hc,a.ic);a.J.className='col-group-summary';Vg(a.Hc,a.J);a.D.className='col-group-border';Vg(a.Hc,a.D);a.dc.className='row-group-border';Vg(a.Hc,a.dc);a.kb.className='grouping-corner';Vg(a.Hc,a.kb);a.Vb.className=Oxb;Vg(a.Hc,a.Vb);a.Wb.className=Oxb;Vg(a.Ac,a.Wb);a.N.className='corner';Vg(a.Hc,a.N);a.fb.className='floater';a.sb=new hQ(a);ve(a.sb,'0');kL(a.sb,'x');ie(a.sb).id='cellinput';ie(a.sb).part.add('cell-input');LF();Vg(a.Ac,VF(ie(a.sb)));NH(a,a.sb);a.Nb.style[Bub]=(hm(),'1.0in');a.Nb.style[Sub]=(Bl(),Uub);a.Nb.style[$ub]=(vm(),lvb);a.Nb.style['padding']=iwb;Vg(a.Hc,a.Nb);a.hb.style[$ub]=lvb;xh(a.hb,Pxb)}
function Vgb(a,b){var c,d,e,f,g,h,i,j;c=0;g=0;f=b.length;h=null;j=new zgb;if(g<f&&(xtb(g,b.length),b.charCodeAt(g)==43)){++g;++c;if(g<f&&(xtb(g,b.length),b.charCodeAt(g)==43||(xtb(g,b.length),b.charCodeAt(g)==45))){throw WD(new Nfb(Ltb+b+'"'))}}while(g<f&&(xtb(g,b.length),b.charCodeAt(g)!=46)&&(xtb(g,b.length),b.charCodeAt(g)!=101)&&(xtb(g,b.length),b.charCodeAt(g)!=69)){++g}j.a+=''+(wtb(c,g,b.length),b.substr(c,g-c));if(g<f&&(xtb(g,b.length),b.charCodeAt(g)==46)){++g;c=g;while(g<f&&(xtb(g,b.length),b.charCodeAt(g)!=101)&&(xtb(g,b.length),b.charCodeAt(g)!=69)){++g}a.e=g-c;j.a+=''+(wtb(c,g,b.length),b.substr(c,g-c))}else{a.e=0}if(g<f&&(xtb(g,b.length),b.charCodeAt(g)==101||(xtb(g,b.length),b.charCodeAt(g)==69))){++g;c=g;if(g<f&&(xtb(g,b.length),b.charCodeAt(g)==43)){++g;g<f&&(xtb(g,b.length),b.charCodeAt(g)!=45)&&++c}h=(wtb(c,f,b.length),b.substr(c,f-c));a.e=a.e-Yeb(h);if(a.e!=dr(a.e)){throw WD(new Nfb('Scale out of range.'))}}i=j.a;if(i.length<16){a.f=(Qgb==null&&(Qgb=new RegExp('^[+-]?\\d*$','i')),Qgb.test(i)?parseInt(i,10):NaN);if(isNaN(a.f)){throw WD(new Nfb(Ltb+b+'"'))}a.a=chb(a.f)}else{Xgb(a,new Qhb(i))}a.d=j.a.length;for(e=0;e<j.a.length;++e){d=Sfb(j.a,e);if(d!=45&&d!=48){break}--a.d}a.d==0&&(a.d=1)}
function r8(a,b,c){var d,e,f,g,h,i;for(e=iq(dq(SB,1),Stb,2,6,[Pzb,Qzb,'rows','cols',Rzb,Szb,Tzb,Uzb,Vzb,Wzb,'defRowH','defColW','rowH','colW',Xzb,Yzb,Zzb,$zb,_zb,aAb,bAb,lyb,myb,cAb,dAb,eAb,fAb,gAb,hAb,nyb,oyb,iAb,jAb,kAb,lAb,mAb,Aub,Bub,Syb,Tyb,Oyb,Bzb,'id',qzb,_yb,Pyb,Czb,Zyb,jyb]),f=0,g=e.length;f<g;++f){d=e[f];if(c.b||u3(c,d)){i=(!b.F&&(b.F=new q1),b.F);h=pQ(a.e);Wfb(Pzb,d)&&O0(i,h.P);Wfb(Qzb,d)&&q0(i,h.k);Wfb('rows',d)&&U0(i,h.V);Wfb('cols',d)&&p0(i,h.j);Wfb(Rzb,d)&&l0(i,h.e);Wfb(Szb,d)&&P0(i,h.Q);Wfb(Tzb,d)&&n0(i,h.g);Wfb(Uzb,d)&&R0(i,h.S);Wfb(Vzb,d)&&m0(i,h.f);Wfb(Wzb,d)&&Q0(i,h.R);Wfb('defRowH',d)&&v0(i,h.r);Wfb('defColW',d)&&u0(i,h.q);Wfb('rowH',d)&&S0(i,h.T);Wfb('colW',d)&&o0(i,h.i);Wfb(Xzb,d)&&j0(i,h.d);Wfb(Yzb,d)&&T0(i,h.U);Wfb(Zzb,d)&&r0(i,h.n);Wfb($zb,d)&&L0(i,h.J);Wfb(_zb,d)&&M0(i,h.K);Wfb(aAb,d)&&Y0(i,h.Z);Wfb(bAb,d)&&s0(i,h.p);Wfb(lyb,d)&&z0(i,h.v);Wfb(myb,d)&&A0(i,h.w);Wfb(cAb,d)&&a1(i,h._);Wfb(dAb,d)&&B0(i,h.A);Wfb(eAb,d)&&d1(i,h.db);Wfb(fAb,d)&&E0(i,h.C);Wfb(gAb,d)&&w0(i,h.s);Wfb(hAb,d)&&x0(i,h.t);Wfb(nyb,d)&&b1(i,h.ab);Wfb(oyb,d)&&C0(i,h.B);Wfb(iAb,d)&&G0(i,h.D);Wfb(jAb,d)&&I0(i,h.G);Wfb(kAb,d)&&J0(i,h.H);Wfb(lAb,d)&&K0(i,h.I);Wfb(mAb,d)&&N0(i,h.M);Wfb(Aub,d)&&y0(i,h.kb);Wfb(Bub,d)&&c1(i,h.ob);Wfb('id',d)&&F0(i,h.lb);Wfb(jyb,d)&&Z0(i,h.$)}}}
function kib(a,b){hib();var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H;B=a.e;o=a.d;e=a.a;if(B==0){switch(b){case 0:return '0';case 1:return '0.0';case 2:return '0.00';case 3:return '0.000';case 4:return '0.0000';case 5:return '0.00000';case 6:return '0.000000';default:w=new ygb;b<0?(w.a+='0E+',w):(w.a+='0E',w);w.a+=-b;return w.a;}}t=o*10+1+7;u=fq(fr,Etb,20,t+1,15,1);c=t;if(o==1){h=e[0];if(h<0){H=YD(h,uAb);do{p=H;H=_D(H,10);u[--c]=48+rE(oE(p,iE(H,10)))&Utb}while(ZD(H,0)!=0)}else{H=h;do{p=H;H=H/10|0;u[--c]=48+(p-H*10)&Utb}while(H!=0)}}else{D=fq(ir,Jxb,20,o,15,1);G=o;Egb(e,0,D,0,G);I:while(true){A=0;for(j=G-1;j>=0;j--){F=XD(lE(A,32),YD(D[j],uAb));r=iib(F);D[j]=rE(r);A=rE(mE(r,32))}s=rE(A);q=c;do{u[--c]=48+s%10&Utb}while((s=s/10|0)!=0&&c!=0);d=9-q+c;for(i=0;i<d&&c>0;i++){u[--c]=48}l=G-1;for(;D[l]==0;l--){if(l==0){break I}}G=l+1}while(u[c]==48){++c}}n=B<0;g=t-c-b-1;if(b==0){n&&(u[--c]=45);return pgb(u,c,t-c)}if(b>0&&g>=-6){if(g>=0){k=c+g;for(m=t-1;m>=k;m--){u[m+1]=u[m]}u[++k]=46;n&&(u[--c]=45);return pgb(u,c,t-c+1)}for(l=2;l<-g+1;l++){u[--c]=48}u[--c]=46;u[--c]=48;n&&(u[--c]=45);return pgb(u,c,t-c)}C=c+1;f=t;v=new zgb;n&&(v.a+='-',v);if(f-C>=1){sgb(v,u[c]);v.a+='.';v.a+=pgb(u,c+1,t-c-1)}else{v.a+=pgb(u,c,t-c)}v.a+='E';g>0&&(v.a+='+',v);v.a+=''+g;return v.a}
function UR(a,b,c,d,e){var f,g,h,i,j,k,l,m;if(b==c&&d==e){h=f_(a.d,d,b);if(!h){h=new cQ;h.col1=d;h.col2=e;h.row1=b;h.row2=c}return h}else{g=g_(a.d,d,b);if(!!g&&g.col2>=e&&g.row2>=c){return g}}k=a.c.sc;l=a.c.tc;if(k<d||k>e||l<b||l>c){return f_(a.d,k,a.c.tc)}m=false;f=d;while(f<=e){i=f_(a.d,f,b);if(i){f=i.col2+1;if(b>i.row1){m=true;if(b<c){i.row2>c?(b=i.row2+1):(b=c);f=d}else{if(k<i.col1){e=i.col1-1}else if(k>i.col2){d=i.col2+1}else{d=i.col1;e=i.col2;break}}}}else{++f}}b>c&&(b=c);f=b;while(f<=c){i=f_(a.d,e,f);if(i){f=i.row2+1;if(e<i.col2){m=true;if(e>d){i.col1>d?(e=i.col1-1):(e=d);f=b}else{if(l<i.row1){c=i.row1-1}else if(l>i.row2){b=i.row2+1}else{b=i.row1;c=i.row2;break}}}}else{++f}}e<d&&(e=d);f=d;while(f<=e){i=f_(a.d,f,c);if(i){f=i.col2+1;if(c<i.row2){m=true;if(c>b){b<i.row1?(c=i.row1-1):(c=b);f=d}else{if(k<i.col1){e=i.col1-1}else if(k>i.col2){d=i.col2+1}else{e=i.col1;d=i.col2;break}}}}else{++f}}c<b&&(c=b);f=b;while(f<=c){i=f_(a.d,d,f);if(i){f=i.row2+1;if(d>i.col1){m=true;if(d<e){e>i.col2?(d=i.col2+1):(d=e);f=b}else{if(l<i.row1){c=i.row1-1}else if(l>i.row2){b=i.row2+1}else{b=i.row1;c=i.row2;break}}}}else{++f}}d>e&&(d=e);if(m){return UR(a,b,c,d,e)}else if(b==c&&d==e){h=f_(a.d,d,b);if(!h){h=new cQ;h.col1=d;h.col2=e;h.row1=b;h.row2=c}return h}else{g=g_(a.d,d,b);if(!!g&&g.col2>=e&&g.row2>=c){return g}}j=new cQ;j.col1=d;j.col2=e;j.row1=b;j.row2=c;return j}
function JW(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;yY(b);D=b.Nc+((b.Ac.scrollTop||0)|0);C=ph(b.Ac);G=D-b.Qb;l=C-b.Pb;try{if(b.zb>b.a.O){b.zb=b.a.O;while(b.zb-b.db+1<b.lc.a.length){A=Glb(b.lc,b.lc.a.length-1);for(g=new fmb(A);g.a<g.c.a.length;){f=dmb(g);ah(f.d)}ah(Glb(b.jc,b.jc.a.length-1))}}if(b.xb>b.a.g){b.xb=b.a.g;for(B=new fmb(b.lc);B.a<B.c.a.length;){A=dmb(B);while(b.xb-b.bb+1<A.a.length){ah(Glb(A,A.a.length-1).d)}}while(b.xb-b.bb+1<b.K.a.length){ah(Glb(b.K,b.K.a.length-1))}}r=1;for(n=1;n<b.db;n++){r+=m_(b.a,n)?0:n>=b.W.length?oV(b):b.W[n-1];n==b.Uc&&(b.Nc=r)}t=r;for(o=b.db;o<=b.zb;o++){t+=m_(b.a,o)?0:o>=b.W.length?oV(b):b.W[o-1]}d=b.Nc+D+b.pc+b.a.L;F=r-b.eb;e=t-b.Ab;b.eb=r;b.Ab=t;q=0;for(p=1;p<b.bb;p++){q+=e_(b.a,p);b.ob==p&&(b.Bb=q)}s=q;for(m=b.bb;m<=b.xb;m++){s+=e_(b.a,m)}v=b.Bb+C+b.qc+b.a.i;w=s-b.yb;b.cb=q;b.yb=s;JV(b,C,l);cY(b,0,-1);(w<0||l>0||b.xb<b.a.g&&b.yb<v)&&cY(b,0,1);PV(b,D,G);(F>0||G<0)&&cY(b,-1,0);(e!=0||G>0||b.zb<b.a.O&&b.Ab<d)&&cY(b,1,0);ZW(b);b.Pb=C;b.Qb=D;c&&K6(b.Sb);for(i=(u=(new alb(b.b)).a.bg().Qe(),new flb(u));i.a.$e();){h=(k=i.a._e(),k.kg());k_(b.a,h.b)||m_(b.a,h.d)?(iN(h,false),ah(h.i)):YN(h)}oW(b);wY(b,b.zc.e,b.zc.f,b.zc.K,b.zc.L);dY(b);tY(b);pY(b,true)}catch(a){a=VD(a);if(Yq(a,21)){j=a;hsb(b.U,'SheetWidget:relayoutSheet: '+zf(j,j.Id())+' while relayouting spreadsheet');_W(b,C,D);ZW(b);T_(b.a,b.db,b.zb,b.bb,b.xb);VW(b);$W(b);dY(b);tY(b);UW(b);FW(b);oY(b)}else throw WD(a)}}
function X_(a,b,c){var d,e,f,g;if((Fh(),Eh).Ud(b)==0&&(b.keyCode|0)!=32||Eh.Ud(b)==13){switch(b.keyCode|0){case 8:case 46:W$(a);if(!i_(a,a.V.sc,a.V.tc)){Tab(a.W.u,iq(dq(MB,1),Etb,1,5,[]));nP(a.t,'')}break;case 40:b.shiftKey?WR(a.Q,true):XR(a.Q,true);break;case 37:b.shiftKey?VR(a.Q,false):YR(a.Q,true);break;case 9:b.shiftKey?YR(a.Q,Elb(a.u,vfb(a.V.sc),0)!=-1||Elb(a.v,vfb(a.V.tc),0)!=-1):ZR(a.Q,Elb(a.u,vfb(a.V.sc),0)!=-1||Elb(a.v,vfb(a.V.tc),0)!=-1);break;case 39:b.shiftKey?VR(a.Q,true):ZR(a.Q,true);break;case 38:b.shiftKey?WR(a.Q,false):$R(a.Q,true);break;case 113:case 13:if(13==(b.keyCode|0)){if(Elb(a.u,vfb(a.V.sc),0)!=-1||Elb(a.v,vfb(a.V.tc),0)!=-1){XR(a.Q,true);break}else{if(a.V.zc.e!=a.V.zc.f||a.V.zc.K!=a.V.zc.L){b.shiftKey?$R(a.Q,false):XR(a.Q,false);break}}}W$(a);if(!hW(a.V)&&!a.A&&!i_(a,a.V.sc,a.V.tc)&&!a.n){a.b=EV(a.V);SO(a.t);a.s=false;a.A=true;MX(a.V,true,(f=iL(a.t.j),f==null?'':f));a.t.u=true;tP(a.t)}else a.n&&cV(a.V);}}else{if(!(Elb(a.u,vfb(a.V.sc),0)!=-1||Elb(a.v,vfb(a.V.tc),0)!=-1)){W$(a);if(!hW(a.V)&&!a.A&&!i_(a,a.V.sc,a.V.tc)&&!a.n){a.A=true;a.b=EV(a.V);tP(a.t);if(Vfb(a.b,'%')||iW(a.V)){(g=new dpb,Jjb(g.a,'0',g),Jjb(g.a,'1',g),Jjb(g.a,'2',g),Jjb(g.a,'3',g),Jjb(g.a,'4',g),Jjb(g.a,'5',g),Jjb(g.a,'6',g),Jjb(g.a,'7',g),Jjb(g.a,'8',g),Jjb(g.a,'9',g),Jjb(g.a,'-',g),Jjb(g.a,'+',g),Hjb(g.a,c))&&(c=c+'%');MX(a.V,true,c)}else{MX(a.V,true,c);SO(a.t)}nP(a.t,c)}else if(!!a.o&&w$(a.o,DV(a.V))){e=v$(a.o,DV(a.V));if(e){d=e.a;d.focus();(f2(),!e2&&(e2=new q2),f2(),e2).a.g&&(d[nwb]=c,undefined)}}}}}
function WR(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;o=a.c.zc.K;h=o;f=a.c.zc.e;d=a.c.zc.L;g=d;j=a.c.zc.f;m=a.c.tc;l=a.c.sc;i=g_(a.d,l,m);c=false;if(a.c.C){!!i&&(b&&i.row1!=o||!b&&i.row2==d)&&(m=i.row2);n=null;if(m==o){if(b&&d+1<=a.d.O){++d;while(!!a.d.v&&Elb(a.d.v,vfb(d),0)!=-1&&d<a.d.O){++d}n=dQ(a.d.I,o,d,f,j)}else if(!b){if(o!=d){--d;while(!!a.d.v&&Elb(a.d.v,vfb(d),0)!=-1&&d>o){--d}n=UR(a,o,d,f,j)}else if(o-1>0){c=true;--o;while(!!a.d.v&&Elb(a.d.v,vfb(o),0)!=-1&&o>1){--o}n=dQ(a.d.I,o,d,f,j)}}}else if(m==d){if(b){if(o!=d){c=true;++o;while(!!a.d.v&&Elb(a.d.v,vfb(o),0)!=-1&&o<d){++o}n=UR(a,o,d,f,j)}else if(d+1<=a.d.O){++d;while(!!a.d.v&&Elb(a.d.v,vfb(d),0)!=-1&&d<a.d.O){++d}n=dQ(a.d.I,o,d,f,j)}}else if(!b&&o-1>0){c=true;--o;while(!!a.d.v&&Elb(a.d.v,vfb(o),0)!=-1&&o>1){--o}n=dQ(a.d.I,o,d,f,j)}}else{if(b){if(d+1<=a.d.O){++d;while(!!a.d.v&&Elb(a.d.v,vfb(d),0)!=-1&&d<a.d.O){++d}n=dQ(a.d.I,o,d,f,j)}}else{c=true;if(o-1>0){--o;while(!!a.d.v&&Elb(a.d.v,vfb(o),0)!=-1&&o>1){--o}n=dQ(a.d.I,o,d,f,j)}}}if(!n){return}wY(a.c,n.col1,n.col2,n.row1,n.row2);RW(a.c,n.col1,n.col2,n.row1,n.row2);SW(a.c,n.row1,n.row2,n.col1,n.col2);fX(a.c,n.row1,n.row2,c)}else{if(i){k=i.row2;e=i.col2}else{k=m;e=l}if(b){++k;while(!!a.d.v&&Elb(a.d.v,vfb(k),0)!=-1&&k<a.d.O){++k}}else{--m;while(!!a.d.v&&Elb(a.d.v,vfb(m),0)!=-1&&m>1){--m}}if(m>0&&k<=a.d.O){n=dQ(a.d.I,m,k,l,e);if(n){a.c.C=true;EX(a.c,true);QU(a.c);wY(a.c,n.col1,n.col2,n.row1,n.row2);uY(a.c,n.col1,n.col2,n.row1,n.row2,true)}}hX(a.c)}if(f!=a.c.zc.e||j!=a.c.zc.f||h!=a.c.zc.K||g!=a.c.zc.L){Wab(a.d.W,a.c.zc.K,a.c.zc.e,a.c.zc.L,a.c.zc.f);qb(a.d.r,200)}}
function VR(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;o=a.c.zc.K;f=a.c.zc.e;g=f;j=a.c.zc.f;h=j;d=a.c.zc.L;l=a.c.sc;m=a.c.tc;i=x1(a.d.I,l,m);c=false;if(a.c.C){!!i&&(b&&i.col1!=f||!b&&i.col2==j)&&(l=i.col2);n=null;if(l==f){if(b&&j+1<=a.d.g){++j;while(!!a.d.u&&Elb(a.d.u,vfb(j),0)!=-1&&j<a.d.g){++j}n=dQ(a.d.I,o,d,f,j)}else if(!b){if(j!=f){--j;while(!!a.d.u&&Elb(a.d.u,vfb(j),0)!=-1&&j>f){--j}n=UR(a,o,d,f,j)}else if(f-1>0){c=true;--f;while(!!a.d.u&&Elb(a.d.u,vfb(f),0)!=-1&&f>1){--f}n=dQ(a.d.I,o,d,f,j)}}}else if(l==j){if(b){if(j!=f){c=true;++f;while(!!a.d.u&&Elb(a.d.u,vfb(f),0)!=-1&&f<j){++f}n=UR(a,o,d,f,j)}else if(j+1<=a.d.g){++j;while(!!a.d.u&&Elb(a.d.u,vfb(j),0)!=-1&&j<a.d.g){++j}n=dQ(a.d.I,o,d,f,j)}}else if(!b&&f-1>0){c=true;--f;while(!!a.d.u&&Elb(a.d.u,vfb(f),0)!=-1&&f>1){--f}n=dQ(a.d.I,o,d,f,j)}}else{if(b){if(j+1<=a.d.g){++j;while(!!a.d.u&&Elb(a.d.u,vfb(j),0)!=-1&&j<a.d.g){++j}n=dQ(a.d.I,o,d,f,j)}}else{c=true;if(f-1>0){--f;while(!!a.d.u&&Elb(a.d.u,vfb(f),0)!=-1&&f>1){--f}n=dQ(a.d.I,o,d,f,j)}}}if(!n){return}wY(a.c,n.col1,n.col2,n.row1,n.row2);RW(a.c,n.col1,n.col2,n.row1,n.row2);SW(a.c,n.row1,n.row2,n.col1,n.col2);eX(a.c,n.col1,n.col2,c)}else{if(i){k=i.row2;e=i.col2}else{k=m;e=l}if(b){++e;while(!!a.d.u&&Elb(a.d.u,vfb(e),0)!=-1&&e<a.d.g){++e}}else{--l;while(!!a.d.u&&Elb(a.d.u,vfb(l),0)!=-1&&l>1){--l}}if(l>0&&e<a.d.g){n=dQ(a.d.I,m,k,l,e);if(n){a.c.C=true;EX(a.c,true);QU(a.c);wY(a.c,n.col1,n.col2,n.row1,n.row2);uY(a.c,n.col1,n.col2,n.row1,n.row2,true)}}hX(a.c)}if(g!=a.c.zc.e||h!=a.c.zc.f||o!=a.c.zc.K||d!=a.c.zc.L){Wab(a.d.W,a.c.zc.K,a.c.zc.e,a.c.zc.L,a.c.zc.f);qb(a.d.r,200)}}
function cX(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,A;o=Dlb((qtb(0,h.a.length),h.a[0]),0).k;s=Dlb(Dlb(h,h.a.length-1),0).k;n=Dlb((qtb(0,h.a.length),h.a[0]),0).c;r=Dlb((qtb(0,h.a.length),h.a[0]),(qtb(0,h.a.length),h.a[0]).a.length-1).c;A=new Jlb;for(q=new fmb(h);q.a<q.c.a.length;){u=dmb(q);t=(qtb(0,u.a.length),u.a[0]).k;if(b>0){if(t<d){if(s<e){t=++s;emb(q);$sb(A.a,u)}else{for(l=new fmb(u);l.a<l.c.a.length;){k=dmb(l);ah(k.d)}emb(q);continue}}}else if(b<0){if(t>e){if(o>d){t=--o;emb(q);$sb(A.a,u)}else{for(l=new fmb(u);l.a<l.c.a.length;){k=dmb(l);ah(k.d)}emb(q);continue}}}n=(qtb(0,u.a.length),u.a[0]).c;r=Dlb(u,u.a.length-1).c;w=new Jlb;for(m=new fmb(u);m.a<m.c.a.length;){k=dmb(m);if(!k){continue}j=k.c;if(c>0){if(j<f){if(r<g){j=++r;emb(m);$sb(w.a,k)}else{ah(k.d);emb(m);continue}}}else if(c<0){if(j>g){if(n>f){j=--n;emb(m);$sb(w.a,k)}else{ah(k.d);emb(m);continue}}}(j!=k.c||t!=k.k)&&TM(k,j,t,Gjb(a.e,wwb+j+xwb+t))}if(c>0){for(l=new fmb(w);l.a<l.c.a.length;){k=dmb(l);$sb(u.a,k)}while(r<g){++r;k=new YM(a,r,t,Gjb(a.e,wwb+r+xwb+t));Vg(i,k.d);$sb(u.a,k)}}else if(c<0){for(l=new fmb(w);l.a<l.c.a.length;){k=dmb(l);ttb(0,u.a.length);Ysb(u.a,0,k)}while(n>f){--n;k=new YM(a,n,t,Gjb(a.e,wwb+n+xwb+t));Vg(i,k.d);ttb(0,u.a.length);Ysb(u.a,0,k)}}}if(b>0){for(v=new fmb(A);v.a<v.c.a.length;){u=dmb(v);$sb(h.a,u)}}else{for(v=new fmb(A);v.a<v.c.a.length;){u=dmb(v);ttb(0,h.a.length);Ysb(h.a,0,u)}}if(b>0){while(s<e){u=new Klb(g-f+1);++s;for(p=f;p<=g;p++){k=new YM(a,p,s,Gjb(a.e,wwb+p+xwb+s));$sb(u.a,k);Vg(i,k.d)}$sb(h.a,u)}}else if(b<0){while(o>d){u=new Jlb;--o;for(p=f;p<=g;p++){k=new YM(a,p,o,Gjb(a.e,wwb+p+xwb+o));$sb(u.a,k);Vg(i,k.d)}ttb(0,h.a.length);Ysb(h.a,0,u)}}pY(a,false)}
function rW(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;k=CY(c);d=(Fh(),k).getAttribute(Kub)||'';if(b.o&&d.indexOf('comment-overlay')==-1){b.o=false;_N(b.Q,false);if(M(b.Q,b.q)){VN(b.q);b.j=null;b.k=-1;b.n=-1}}if(d.indexOf(mxb)!=-1||Wfb(k.tagName,'input')||Wfb(d,'floater')){return}o=b.Tc&&(Wfb('s-top',d)||Wfb(hxb,d)||Wfb(jxb,d)||Wfb(ixb,d));if(eW(b,c)||o){Wfb(Yub,c.type)?B_(b.a,c,b.sc,b.tc):b.yc&&TX(b,c)}else if(d.indexOf(vwb)!=-1){Wfb(d,swb)||Wfb(d,twb)?MT(b.wb,jh(Jh(k))):MT(b.wb,d);m=b.wb.a;n=b.wb.b;try{j=Twb.length;if(!Wfb(d.substr(d.length-j,j),Twb)){e=(h=nj($doc),$2(),c.type.indexOf(axb)!=-1?Qm(c.changedTouches[0])+h:_h(c.clientX||0)+h);f=(i=oj($doc),c.type.indexOf(axb)!=-1?Rm(c.changedTouches[0])+i:_h(c.clientY||0)+i);l=xV(b,e,f,hV(b,m,n));k=l.d;m=l.c;n=l.k}}catch(a){a=VD(a);if(Yq(a,81)){hsb(b.U,'SheetWidget:onSheetMouseDown - JSE while trying to find real event target, className:'+d)}else if(Yq(a,31)){hsb(b.U,'SheetWidget:onSheetMouseDown - IOOBE while trying to find real event target, className:'+d)}else throw WD(a)}c.stopPropagation();Eh.Yd(c);if(Wfb(Yub,c.type)){cG(b.Ac);B_(b.a,c,m,n)}else{b.Ac.focus();b._&&!Zg(ie(b.sb),k)&&w_(b.a,(g=iL(b.sb),g==null?'':g));if(!!c.ctrlKey||!!c.metaKey||!!c.shiftKey){u_(b.a,m,n,(Eh.ce(k),!!c.shiftKey),!!c.metaKey||!!c.ctrlKey,true);b.Lc=-1;b.Mc=-1}else{if(!!b.s&&Hjb(b.s,wwb+b.wb.a+xwb+b.wb.b)){N_(b.a,m,n)}else{u_(b.a,m,n,(Eh.ce(k),!!c.shiftKey),!!c.metaKey||!!c.ctrlKey,false);b.yc=true;b.Lc=m;b.Mc=n;b.Jc=m<=b.ob&&n<=b.Uc;b.Kc=m>b.ob&&m<=b.xb&&n<=b.Uc;b.Ic=n>b.Uc&&n<=b.zb&&m<=b.ob;b.O=!b.Jc&&!b.Kc;b.P=!b.Jc&&!b.Ic;b.A=(h=nj($doc),$2(),c.type.indexOf(axb)!=-1?Qm(c.changedTouches[0])+h:_h(c.clientX||0)+h);b.B=(i=oj($doc),c.type.indexOf(axb)!=-1?Rm(c.changedTouches[0])+i:_h(c.clientY||0)+i);dG(b.Ac)}}}}}
function Qd(){Qd=BE;Ic=new Hb;Hc=new Gb;Jc=new Ib;Kc=new Ob;Lc=new Pb;Mc=new Qb;Nc=new Rb;Oc=new Sb;Pc=new Tb;Qc=new Ub;Rc=new Vb;Sc=new Wb;Tc=new Xb;Uc=new Yb;Vc=new Zb;Wc=new $b;Yc=new ac;Xc=new _b;Zc=new bc;$c=new cc;_c=new fc;ad=new gc;cd=new ic;dd=new jc;bd=new hc;ed=new kc;fd=new lc;gd=new mc;hd=new nc;kd=new qc;md=new sc;nd=new tc;ld=new rc;jd=new oc;od=new uc;pd=new vc;qd=new wc;rd=new xc;sd=new Ac;ud=new Fc;td=new Ec;vd=new Gc;yd=new Sd;zd=new Td;xd=new Rd;Ad=new Ud;Bd=new Vd;Cd=new Wd;Dd=new Xd;Ed=new Yd;Fd=new Zd;Hd=new _d;Id=new ae;Gd=new $d;Jd=new be;Kd=new ce;Ld=new de;Md=new ee;Od=new ge;Pd=new he;Nd=new fe;wd=new Zob;Jjb(wd,'region',vd);Jjb(wd,'alert',Hc);Jjb(wd,'dialog',Tc);Jjb(wd,hub,Ic);Jjb(wd,iub,Jc);Jjb(wd,'document',Vc);Jjb(wd,'article',Kc);Jjb(wd,'banner',Lc);Jjb(wd,jub,Mc);Jjb(wd,'checkbox',Nc);Jjb(wd,'gridcell',Yc);Jjb(wd,kub,Oc);Jjb(wd,'group',Zc);Jjb(wd,'combobox',Pc);Jjb(wd,lub,Qc);Jjb(wd,mub,Rc);Jjb(wd,nub,Sc);Jjb(wd,'list',bd);Jjb(wd,'directory',Uc);Jjb(wd,'form',Wc);Jjb(wd,'grid',Xc);Jjb(wd,'heading',$c);Jjb(wd,'img',_c);Jjb(wd,oub,ad);Jjb(wd,'listbox',cd);Jjb(wd,'listitem',dd);Jjb(wd,'log',ed);Jjb(wd,'main',fd);Jjb(wd,'marquee',gd);Jjb(wd,'math',hd);Jjb(wd,'menu',jd);Jjb(wd,'menubar',kd);Jjb(wd,'menuitem',ld);Jjb(wd,pub,md);Jjb(wd,tub,qd);Jjb(wd,'radio',td);Jjb(wd,qub,nd);Jjb(wd,rub,od);Jjb(wd,'note',pd);Jjb(wd,uub,rd);Jjb(wd,vub,sd);Jjb(wd,wub,ud);Jjb(wd,'row',xd);Jjb(wd,'rowgroup',yd);Jjb(wd,'rowheader',zd);Jjb(wd,'search',Bd);Jjb(wd,'separator',Cd);Jjb(wd,'scrollbar',Ad);Jjb(wd,'slider',Dd);Jjb(wd,xub,Ed);Jjb(wd,'status',Fd);Jjb(wd,'tab',Gd);Jjb(wd,'tablist',Hd);Jjb(wd,'tabpanel',Id);Jjb(wd,'textbox',Jd);Jjb(wd,'timer',Kd);Jjb(wd,'toolbar',Ld);Jjb(wd,'tooltip',Md);Jjb(wd,'tree',Nd);Jjb(wd,'treegrid',Od);Jjb(wd,'treeitem',Pd)}
function Ucb(b,c){var d,e,f;c=jgb(c,(lqb(),jqb));b.i=c.indexOf('gecko')!=-1&&c.indexOf(Byb)==-1&&c.indexOf(nAb)==-1;c.indexOf(' presto/')!=-1;b.r=c.indexOf(nAb)!=-1;b.s=!b.r&&c.indexOf('applewebkit')!=-1;b.e=c.indexOf(' chrome/')!=-1||c.indexOf(' crios/')!=-1;b.o=c.indexOf('opera')!=-1;b.j=c.indexOf('msie')!=-1&&!b.o&&c.indexOf('webtv')==-1;b.j=b.j||b.r;b.p=c.indexOf('phantomjs/')!=-1;b.g=c.indexOf(' firefox/')!=-1||c.indexOf('fxios/')!=-1;b.q=!b.e&&!b.j&&!b.p&&!b.g&&c.indexOf('safari')!=-1;if(c.indexOf(' edge/')!=-1){b.f=true;b.e=false;b.o=false;b.j=false;b.q=false;b.g=false;b.s=false;b.i=false;b.p=false}c.indexOf('chromeframe')!=-1;try{if(b.i){e=c.indexOf('rv:');if(e>=0){f=(xtb(e+3,c.length+1),c.substr(e+3));f=fgb(f,'(\\.[0-9]+).+','$1');b.a=ffb(f)}}else if(b.s){f=hgb(c,c.indexOf('webkit/')+7);f=fgb(f,'([0-9]+)[^0-9].+','$1');b.a=ffb(f)}else if(b.r){f=hgb(c,c.indexOf(nAb)+8);f=fgb(f,'([0-9]+\\.[0-9]+).*','$1');b.a=ffb(f);b.a>7&&(b.a=7)}else b.f&&(b.a=0)}catch(a){a=VD(a);if(Yq(a,21)){bF((Dgb(),Cgb),'Browser engine version parsing failed for: '+c)}else throw WD(a)}try{if(b.j){if(c.indexOf('msie')==-1){e=c.indexOf('rv:');if(e>=0){d=e+3;b.d=Ocb(c,d);Vcb(b,b.d)}}else if(b.r){Xcb(b,dr(b.a)+4)}else{d=c.indexOf('msie ')+5;b.d=Ocb(c,d);Vcb(b,b.d)}}else if(b.g){d=c.indexOf(' firefox/');d!=-1?(d+=9):(d=c.indexOf(' fxios/')+7);b.d=Ocb(c,d);Vcb(b,b.d)}else if(b.e){d=c.indexOf(' chrome/');d!=-1?(d+=8):(d=c.indexOf(' crios/')+7);b.d=Ocb(c,d);Vcb(b,b.d)}else if(b.q){d=c.indexOf(' version/')+9;b.d=Ocb(c,d);Vcb(b,b.d)}else if(b.o){d=c.indexOf(' version/');d!=-1?(d+=9):(d=c.indexOf('opera/')+6);b.d=Ocb(c,d);Vcb(b,b.d)}else if(b.f){d=c.indexOf(' edge/')+6;b.d=Ocb(c,d);Vcb(b,b.d)}else if(b.p){d=c.indexOf(' phantomjs/')+11;b.d=Ocb(c,d);Vcb(b,b.d)}}catch(a){a=VD(a);if(Yq(a,21)){bF((Dgb(),Cgb),'Browser version parsing failed for: '+c)}else throw WD(a)}if(c.indexOf('windows ')!=-1){b.t=1;c.indexOf('windows phone')!=-1}else if(c.indexOf('android')!=-1){b.t=5;Pcb(b,c)}else if(c.indexOf('linux')!=-1){b.t=3}else if(c.indexOf('macintosh')!=-1||c.indexOf('mac osx')!=-1||c.indexOf('mac os x')!=-1){b.k=c.indexOf('ipad')!=-1;b.n=c.indexOf('iphone')!=-1;if(b.k||c.indexOf('ipod')!=-1||b.n){b.t=4;Scb(b,c)}else{b.t=2}}else if(c.indexOf('; cros ')!=-1){b.t=6;Qcb(b,c)}}
function R3(a){p5(a.b,MB,null);p5(a.b,fB,MB);p5(a.b,ZA,MB);p5(a.b,iB,MB);p5(a.b,jB,MB);p5(a.b,kB,MB);p5(a.b,lB,MB);p5(a.b,mB,MB);p5(a.b,nB,MB);p5(a.b,oB,MB);p5(a.b,RA,ZA);p5(a.b,_A,RA);p5(a.b,pB,_A);j5(a.b,iA);k5(a.b,eA,new X3);k5(a.b,iA,new u4);k5(a.b,fB,new F4);k5(a.b,pB,new H4);k5(a.b,iB,new J4);k5(a.b,jB,new L4);k5(a.b,kB,new N4);k5(a.b,lB,new P4);k5(a.b,mB,new R4);k5(a.b,nB,new Z3);k5(a.b,oB,new _3);n5(a.b,iA,'getWidget',new c5(eA));n5(a.b,iA,'getState',new c5(pB));l5(a.b,Kz,Iyb,new c4);l5(a.b,Kz,Jyb,new e4);l5(a.b,iA,Kyb,new g4);l5(a.b,iA,Lyb,new i4);l5(a.b,iA,Myb,new k4);S3(a.b);m5(a.b,mB,Nyb,new c5(xB));m5(a.b,jB,'am',new c5(SB));m5(a.b,RA,Oyb,new c5(SB));m5(a.b,RA,Pyb,new c5(xB));m5(a.b,oB,Qyb,new c5(GB));m5(a.b,jB,Ryb,new c5(SB));m5(a.b,jB,'dayNames',new c5(dq(SB,1)));m5(a.b,RA,Syb,new c5(SB));m5(a.b,RA,Tyb,new c5(aB));m5(a.b,nB,Uyb,new c5(GB));m5(a.b,nB,Vyb,new c5(xB));m5(a.b,nB,Wyb,new c5(SB));m5(a.b,nB,Xyb,new c5(SB));m5(a.b,pB,Yyb,new c5(xB));m5(a.b,ZA,Zyb,new c5(xB));m5(a.b,RA,$yb,new c5(cB));m5(a.b,RA,_yb,new c5(SB));m5(a.b,jB,azb,new c5(GB));m5(a.b,iB,bzb,new c5(GB));m5(a.b,fB,czb,new c5(xB));m5(a.b,RA,Aub,new c5(SB));m5(a.b,jB,dzb,new c5(SB));m5(a.b,RA,'id',new c5(SB));m5(a.b,pB,ezb,new c5(IB));m5(a.b,pB,fzb,new c5(iB));m5(a.b,kB,gzb,new d5(hzb,iq(dq(Cz,1),Etb,5,0,[new c5(jB)])));m5(a.b,pB,izb,new c5(kB));m5(a.b,oB,'maxWidth',new c5(GB));m5(a.b,mB,'mode',new c5(YA));m5(a.b,jB,jzb,new c5(dq(SB,1)));m5(a.b,jB,fyb,new c5(SB));m5(a.b,pB,kzb,new d5(lzb,iq(dq(Cz,1),Etb,5,0,[new c5(SB),new c5(lB)])));m5(a.b,lB,mzb,new c5(eB));m5(a.b,oB,'openDelay',new c5(GB));m5(a.b,pB,nzb,new c5(SB));m5(a.b,pB,'pageState',new c5(fB));m5(a.b,mB,ozb,new d5(lzb,iq(dq(Cz,1),Etb,5,0,[new c5(SB),new c5(SB)])));m5(a.b,jB,'pm',new c5(SB));m5(a.b,pB,pzb,new c5(GB));m5(a.b,lB,'postfix',new c5(SB));m5(a.b,lB,'prefix',new c5(SB));m5(a.b,RA,qzb,new c5(SB));m5(a.b,pB,rzb,new c5(mB));m5(a.b,mB,'pushUrl',new c5(SB));m5(a.b,oB,szb,new c5(GB));m5(a.b,oB,tzb,new c5(GB));m5(a.b,nB,uzb,new c5(GB));m5(a.b,pB,vzb,new c5(nB));m5(a.b,nB,wzb,new c5(GB));m5(a.b,ZA,xzb,new d5('java.util.Set',iq(dq(Cz,1),Etb,5,0,[new c5(SB)])));m5(a.b,ZA,'resources',new d5(lzb,iq(dq(Cz,1),Etb,5,0,[new c5(SB),new c5($A)])));m5(a.b,iB,yzb,new c5(GB));m5(a.b,jB,zzb,new c5(dq(SB,1)));m5(a.b,jB,Azb,new c5(dq(SB,1)));m5(a.b,RA,Bzb,new d5(hzb,iq(dq(Cz,1),Etb,5,0,[new c5(SB)])));m5(a.b,pB,Czb,new c5(GB));m5(a.b,pB,'theme',new c5(SB));m5(a.b,iB,Dzb,new c5(GB));m5(a.b,pB,Ezb,new c5(xB));m5(a.b,fB,'title',new c5(SB));m5(a.b,pB,Fzb,new c5(oB));m5(a.b,jB,Gzb,new c5(xB));m5(a.b,RA,Bub,new c5(SB));o5(a.b,YA,new m4);o5(a.b,$A,new p4);o5(a.b,aB,new r4);o5(a.b,cB,new w4);o5(a.b,eB,new z4);o5(a.b,dq(SB,1),new C4);i5(a.b,iA,new _4(Kz,Iyb,iq(dq(SB,1),Stb,2,6,[_yb,$yb])));i5(a.b,iA,new _4(Kz,Jyb,iq(dq(SB,1),Stb,2,6,[xzb])));i5(a.b,iA,new a5(Kyb,iq(dq(SB,1),Stb,2,6,['theme'])));i5(a.b,iA,new a5(Lyb,iq(dq(SB,1),Stb,2,6,[Ezb])));i5(a.b,iA,new a5(Myb,iq(dq(SB,1),Stb,2,6,[ezb])))}
function T3(c){var d={setter:function(a,b){a.a=neb(b)},getter:function(a){return qeb(a.a)}};c.Nf(mB,Nyb,d);var d={setter:function(a,b){a.a=b},getter:function(a){return a.a}};c.Nf(jB,'am',d);var d={setter:function(a,b){a.eb=b},getter:function(a){return a.eb}};c.Nf(RA,Oyb,d);var d={setter:function(a,b){a.fb=neb(b)},getter:function(a){return qeb(a.fb)}};c.Nf(RA,Pyb,d);var d={setter:function(a,b){a.a=b.$f()},getter:function(a){return vfb(a.a)}};c.Nf(oB,Qyb,d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.Nf(jB,Ryb,d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.Nf(jB,'dayNames',d);var d={noLayout:1,setter:function(a,b){a.gb=b},getter:function(a){return a.gb}};c.Nf(RA,Syb,d);var d={noLayout:1,setter:function(a,b){a.hb=b},getter:function(a){return a.hb}};c.Nf(RA,Tyb,d);var d={setter:function(a,b){a.a=b.$f()},getter:function(a){return vfb(a.a)}};c.Nf(nB,Uyb,d);var d={setter:function(a,b){a.b=neb(b)},getter:function(a){return qeb(a.b)}};c.Nf(nB,Vyb,d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.Nf(nB,Wyb,d);var d={setter:function(a,b){a.d=b},getter:function(a){return a.d}};c.Nf(nB,Xyb,d);var d={setter:function(a,b){a.a=neb(b)},getter:function(a){return qeb(a.a)}};c.Nf(pB,Yyb,d);var d={setter:function(a,b){a.pb=neb(b)},getter:function(a){return qeb(a.pb)}};c.Nf(ZA,Zyb,d);var d={setter:function(a,b){a.ib=b},getter:function(a){return a.ib}};c.Nf(RA,$yb,d);var d={setter:function(a,b){a.jb=b},getter:function(a){return a.jb}};c.Nf(RA,_yb,d);var d={setter:function(a,b){a.d=b.$f()},getter:function(a){return vfb(a.d)}};c.Nf(jB,azb,d);var d={setter:function(a,b){a.a=b.$f()},getter:function(a){return vfb(a.a)}};c.Nf(iB,bzb,d);var d={setter:function(a,b){a.a=neb(b)},getter:function(a){return qeb(a.a)}};c.Nf(fB,czb,d);var d={setter:function(a,b){a.kb=b},getter:function(a){return a.kb}};c.Nf(RA,Aub,d);var d={setter:function(a,b){a.e=b},getter:function(a){return a.e}};c.Nf(jB,dzb,d);var d={setter:function(a,b){a.lb=b},getter:function(a){return a.lb}};c.Nf(RA,'id',d);var d={setter:function(a,b){a.b=b._f()},getter:function(a){return Gfb(a.b)}};c.Nf(pB,ezb,d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.Nf(pB,fzb,d);var d={setter:function(a,b){a.a=b},getter:function(a){return a.a}};c.Nf(kB,gzb,d);var d={setter:function(a,b){a.d=b},getter:function(a){return a.d}};c.Nf(pB,izb,d);var d={setter:function(a,b){a.b=b.$f()},getter:function(a){return vfb(a.b)}};c.Nf(oB,'maxWidth',d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.Nf(mB,'mode',d);var d={setter:function(a,b){a.f=b},getter:function(a){return a.f}};c.Nf(jB,jzb,d);var d={setter:function(a,b){a.g=b},getter:function(a){return a.g}};c.Nf(jB,fyb,d);var d={setter:function(a,b){a.e=b},getter:function(a){return a.e}};c.Nf(pB,kzb,d);var d={setter:function(a,b){a.a=b},getter:function(a){return a.a}};c.Nf(lB,mzb,d);var d={setter:function(a,b){a.c=b.$f()},getter:function(a){return vfb(a.c)}};c.Nf(oB,'openDelay',d);var d={setter:function(a,b){a.f=b},getter:function(a){return a.f}};c.Nf(pB,nzb,d);var d={setter:function(a,b){a.g=b},getter:function(a){return a.g}};c.Nf(pB,'pageState',d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.Nf(mB,ozb,d);var d={setter:function(a,b){a.i=b},getter:function(a){return a.i}};c.Nf(jB,'pm',d);var d={setter:function(a,b){a.i=b.$f()},getter:function(a){return vfb(a.i)}};c.Nf(pB,pzb,d);var d={setter:function(a,b){a.b=b},getter:function(a){return a.b}};c.Nf(lB,'postfix',d);var d={setter:function(a,b){a.c=b},getter:function(a){return a.c}};c.Nf(lB,'prefix',d);var d={setter:function(a,b){a.mb=b},getter:function(a){return a.mb}};c.Nf(RA,qzb,d);var d={setter:function(a,b){a.j=b},getter:function(a){return a.j}};c.Nf(pB,rzb,d);var d={setter:function(a,b){a.d=b},getter:function(a){return a.d}};c.Nf(mB,'pushUrl',d);var d={setter:function(a,b){a.d=b.$f()},getter:function(a){return vfb(a.d)}};c.Nf(oB,szb,d);var d={setter:function(a,b){a.e=b.$f()},getter:function(a){return vfb(a.e)}};c.Nf(oB,tzb,d);var d={setter:function(a,b){a.e=b.$f()},getter:function(a){return vfb(a.e)}};c.Nf(nB,uzb,d);var d={setter:function(a,b){a.k=b},getter:function(a){return a.k}};c.Nf(pB,vzb,d);var d={setter:function(a,b){a.f=b.$f()},getter:function(a){return vfb(a.f)}};c.Nf(nB,wzb,d);var d={noLayout:1,setter:function(a,b){a.qb=b},getter:function(a){return a.qb}};c.Nf(ZA,xzb,d);var d={setter:function(a,b){a.rb=b},getter:function(a){return a.rb}};c.Nf(ZA,'resources',d);var d={setter:function(a,b){a.b=b.$f()},getter:function(a){return vfb(a.b)}};c.Nf(iB,yzb,d);var d={setter:function(a,b){a.j=b},getter:function(a){return a.j}};c.Nf(jB,zzb,d);var d={setter:function(a,b){a.k=b},getter:function(a){return a.k}};c.Nf(jB,Azb,d);var d={setter:function(a,b){a.nb=b},getter:function(a){return a.nb}};c.Nf(RA,Bzb,d);var d={noLayout:1,setter:function(a,b){a.n=b.$f()},getter:function(a){return vfb(a.n)}};c.Nf(pB,Czb,d);var d={setter:function(a,b){a.o=b},getter:function(a){return a.o}};c.Nf(pB,'theme',d);var d={setter:function(a,b){a.c=b.$f()},getter:function(a){return vfb(a.c)}};c.Nf(iB,Dzb,d);var d={setter:function(a,b){a.p=neb(b)},getter:function(a){return qeb(a.p)}};c.Nf(pB,Ezb,d)}
var Btb='object',Ctb='anonymous',Dtb='fnStack',Etb={3:1},Ftb='Unknown',Gtb='boolean',Htb='number',Itb='function',Jtb='string',Ktb=2147483647,Ltb='For input string: "',Mtb='null',Ntb=-2147483648,Otb='__noinit__',Ptb={3:1,21:1,25:1,19:1},Qtb={3:1,21:1,31:1,25:1,19:1},Rtb='\\$',Stb={3:1,42:1},Ttb=65536,Utb=65535,Vtb='fromIndex: 0, toIndex: ',Wtb=', length: ',Xtb='Index: ',Ytb=', Size: ',Ztb='fromIndex: ',$tb=', toIndex: ',_tb='java.lang',aub='com.google.gwt.core.client',bub='com.google.gwt.core.client.impl',cub='javaemul.internal',dub=3.141592653589793,eub='com.google.gwt.animation.client',fub='com.google.gwt.user.client',gub='com.google.gwt.aria.client',hub='alertdialog',iub='application',jub='button',kub='columnheader',lub='complementary',mub='contentinfo',nub='definition',oub='link',pub='menuitemcheckbox',qub='menuitemradio',rub='navigation',tub='option',uub='presentation',vub='progressbar',wub='radiogroup',xub='spinbutton',yub='offsetWidth',zub='none',Aub='height',Bub='width',Cub='Null widget handle. If you are creating a composite, ensure that initWidget() has been called.',Dub='Style names cannot be empty',Eub='aria-hidden',Fub='com.google.gwt.user.client.ui',Gub={17:1,14:1,9:1,16:1,18:1,12:1,13:1},Hub='disabled',Iub={17:1,14:1,9:1,61:1,73:1,16:1,18:1,12:1,13:1},Jub='com.google.gwt.canvas.client',Kub='class',Lub={116:1},Mub='CSS1Compat',Nub='com.google.gwt.dom.client',Oub='MouseEvents',Pub='DOMImplStandard',Qub=1000,Rub='DOMImplMozilla',Sub='position',Tub='fixed',Uub='absolute',Vub='DOMImplStandardBase',Wub='DOMImplWebkit',Xub='load',Yub='contextmenu',Zub='display',$ub='visibility',_ub='zIndex',avb={56:1,15:1,3:1,6:1,4:1},bvb='HIDDEN',cvb={23:1,15:1,3:1,6:1,4:1},dvb='block',evb={15:1,63:1,3:1,6:1,4:1},fvb={15:1,64:1,3:1,6:1,4:1},gvb={15:1,65:1,3:1,6:1,4:1},hvb={15:1,96:1,3:1,6:1,4:1},ivb={34:1,3:1,6:1,4:1},jvb={15:1,97:1,3:1,6:1,4:1},kvb='visible',lvb='hidden',mvb={15:1,57:1,3:1,6:1,4:1},nvb='com.google.web.bindery.event.shared',ovb='com.google.gwt.event.shared',pvb='com.google.gwt.event.dom.client',qvb='mouseup',rvb='TouchEvent',svb='touchcancel',tvb='ontouchstart',uvb='touchstart',vvb='com.google.gwt.event.logical.shared',wvb={91:1,3:1,21:1,25:1,19:1},xvb='UmbrellaException',yvb=4194303,zvb=1048575,Avb=524288,Bvb=4194304,Cvb=17592186044416,Dvb=1000000000,Evb=-17592186044416,Fvb='java.util.logging',Gvb='com.google.gwt.logging.client',Hvb='com.google.gwt.logging.impl',Ivb='java.io',Jvb='com.google.gwt.safehtml.shared',Kvb='com.google.gwt.text.shared.testing',Lvb=2048,Mvb=32768,Nvb=16384,Ovb='DOMMouseScroll',Pvb=131072,Qvb=262144,Rvb=1048576,Svb=2097152,Tvb=8388608,Uvb=16777216,Vvb=33554432,Wvb=67108864,Xvb={115:1},Yvb='com.google.gwt.user.client.impl',Zvb='__gwtLastUnhandledEvent',$vb={17:1,14:1,9:1,16:1,32:1,18:1,12:1,13:1},_vb='left',awb='top',bwb={17:1,14:1,9:1,16:1,179:1,18:1,12:1,13:1},cwb={24:1},dwb='bidiwrapped',ewb='selected',fwb='subMenuIcon-selected',gwb='offsetHeight',hwb='px',iwb='0.0px',jwb={27:1,182:1},kwb='overflow',lwb={17:1,14:1,9:1,16:1,32:1,18:1,134:1,12:1,13:1},mwb={250:1,27:1},nwb='value',owb={66:1,3:1,6:1,4:1},pwb='com.google.gwt.user.client.ui.impl',qwb={147:1,149:1},rwb='auto',swb='cell-comment-triangle',twb='cell-invalidformula-triangle',uwb='pointerEvents',vwb='cell',wwb='col',xwb=' row',ywb='com.vaadin.addon.spreadsheet.client',zwb='animate-in',Awb='animate-out',Bwb='marginLeft',Cwb='marginTop',Dwb='com.vaadin.client.widgets',Ewb='com.vaadin.client.ui',Fwb=57.29577951308232,Gwb='rotate(',Hwb='webkitTransform',Iwb='comment-overlay-separator',Jwb='comment-overlay-line',Kwb={181:1,27:1},Lwb={17:1,14:1,9:1,16:1,32:1,18:1,12:1,13:1,98:1},Mwb={9:1},Nwb='backgroundColor',Owb='border',Pwb='2px solid ',Qwb='borderRight',Rwb='borderBottom',Swb='textAlign',Twb='merged-cell',Uwb='com.vaadin.shared',Vwb='There is no information about the state for ',Wwb='. Did you remember to compile the right widgetset?',Xwb={27:1,101:1,122:1,3:1},Ywb='active',Zwb='com.vaadin.shared.communication',$wb={68:1,75:1,3:1},_wb='popupbutton',axb='touch',bxb='fill',cxb='bottom-left',dxb='top-left',exb='v-contextmenu',fxb='bottom-right',gxb='sheet-selection',hxb='s-left',ixb='s-right',jxb='s-bottom',kxb='square',lxb='fill-touch-square',mxb='sheet',nxb=16022015,oxb='sheet-image',pxb='paddingLeft',qxb='paddingTop',rxb='scroll-tabs-button',sxb='marginRight',txb='selected-tab',uxb='tab-selected',vxb='scroll-tabs-button-disabled',wxb='.col',xxb='.v-spreadsheet.',yxb='cell-range',zxb='selected-cell-highlight',Axb='selected-row-header',Bxb='header-selected',Cxb='selected-column-header',Dxb=' .sheet .cell.cell-range {',Exb=' .sheet .col',Fxb=' .sheet .row',Gxb='.notusedselector',Hxb='custom-editor-cell',Ixb=', .v-spreadsheet.',Jxb={26:1,3:1},Kxb='Hide column',Lxb=' > div.ch.col',Mxb='px;}',Nxb=' > div.rh.row',Oxb='resize-line',Pxb='5555555555',Qxb='text/css',Rxb='ch col',Sxb='column-header',Txb='<div class="header-resize-dnd-first" ><\/div><div class="header-resize-dnd-second" ><\/div>',Uxb='rh row',Vxb='row-header',Wxb='notfocused',Xxb=' merged-cell',Yxb=' while creating the cell styles',Zxb='expandbutton',$xb='lineHeight',_xb='inactive',ayb='row-resizing',byb='col-resizing',cyb='header-resize-dnd-first',dyb='header-resize-dnd-second',eyb={150:1,27:1},fyb='name',gyb={717:1,27:1},hyb={24:1,720:1,125:1},iyb='appId',jyb='showCustomEditorOnFocus',kyb='workbookChangeToggle',lyb='hiddenColumnIndexes',myb='hiddenRowIndexes',nyb='verticalSplitPosition',oyb='horizontalSplitPosition',pyb='custom-editor-',qyb='com.vaadin.client',ryb='lock-format-columns',syb='lock-format-rows',tyb='com.vaadin.addon.spreadsheet.shared',uyb='com.vaadin.shared.ui',vyb='-webkit-animation-name',wyb='animation-name',xyb='-moz-animation-name',yyb='-o-animation-name',zyb='fakeelement',Ayb='animationend',Byb='webkit',Cyb='com.vaadin.client.communication',Dyb='head',Eyb='stylesheet',Fyb='com.vaadin.client.metadata',Gyb={249:1,27:1},Hyb='com.vaadin.ui.UI',Iyb='setErrorLevel',Jyb='handleContextClickListenerChange',Kyb='onThemeChange',Lyb='onThoroughSizeChckChange',Myb='signalRoundTripCompleted',Nyb='alwaysUseXhrForServerRequests',Oyb='caption',Pyb='captionAsHtml',Qyb='closeTimeout',Ryb='dateFormat',Syb='description',Tyb='descriptionContentMode',Uyb='dialogGracePeriod',Vyb='dialogModal',Wyb='dialogText',Xyb='dialogTextGaveUp',Yyb='enableMobileHTML5DnD',Zyb='enabled',$yb='errorLevel',_yb='errorMessage',azb='firstDayOfWeek',bzb='firstDelay',czb='hasResizeListeners',dzb='hourMinuteDelimiter',ezb='latestDelayedCallbackID',fzb='loadingIndicatorConfiguration',gzb='localeData',hzb='java.util.List',izb='localeServiceState',jzb='monthNames',kzb='notificationConfigurations',lzb='java.util.Map',mzb='notificationRole',nzb='overlayContainerLabel',ozb='parameters',pzb='pollInterval',qzb='primaryStyleName',rzb='pushConfiguration',szb='quickOpenDelay',tzb='quickOpenTimeout',uzb='reconnectAttempts',vzb='reconnectDialogConfiguration',wzb='reconnectInterval',xzb='registeredEventListeners',yzb='secondDelay',zzb='shortDayNames',Azb='shortMonthNames',Bzb='styles',Czb='tabIndex',Dzb='thirdDelay',Ezb='thoroughSizeCheck',Fzb='tooltipConfiguration',Gzb='twelveHourClock',Hzb={33:1},Izb={150:1,251:1,252:1,27:1},Jzb='_vScrollTop',Kzb='v-scrollable',Lzb='v-label-undef-w',Mzb='/favicon.ico',Nzb='com.vaadin.client.ui.ui',Ozb='com.vaadin.component.spreadsheet.client.js',Pzb='rowBufferSize',Qzb='columnBufferSize',Rzb='colGroupingData',Szb='rowGroupingData',Tzb='colGroupingMax',Uzb='rowGroupingMax',Vzb='colGroupingInversed',Wzb='rowGroupingInversed',Xzb='cellStyleToCSSStyle',Yzb='rowIndexToStyleIndex',Zzb='columnIndexToStyleIndex',$zb='lockedColumnIndexes',_zb='lockedRowIndexes',aAb='shiftedCellBorderStyles',bAb='conditionalFormattingStyles',cAb='verticalScrollPositions',dAb='horizontalScrollPositions',eAb='workbookProtected',fAb='hyperlinksTooltips',gAb='displayGridlines',hAb='displayRowColHeadings',iAb='infoLabelValue',jAb='invalidFormulaErrorMessage',kAb='lockFormatColumns',lAb='lockFormatRows',mAb='namedRanges',nAb='trident/',oAb='WARNING',pAb='com.vaadin.shared.ui.ui',qAb=244140625,rAb=1220703125,sAb=0.3010299956639812,tAb='BigInteger divide by zero',uAb=4294967295,vAb=1073741824,wAb={l:0,m:0,h:524288},xAb={6:1,88:1},yAb='java.util',zAb={39:1,103:1},AAb={39:1,80:1},BAb={102:1},CAb={3:1,39:1,80:1,180:1},DAb={3:1,151:1},EAb={3:1,39:1,103:1},FAb='delete',GAb={3:1,722:1},HAb='java.util.stream',IAb='locale',JAb='default',KAb='user.agent';var _,zE,uE,PD=-1;$wnd.goog=$wnd.goog||{};$wnd.goog.global=$wnd.goog.global||$wnd;zE={};AE(1,null,{},K);_.$c=function L(a){return J(this,a)};_._c=function N(){return this.sg};_.ad=function P(){return ltb(this)};_.bd=function R(){var a;return zeb(O(this))+'@'+(a=Q(this)>>>0,a.toString(16))};_.equals=function(a){return this.$c(a)};_.hashCode=function(){return this.ad()};_.toString=function(){return this.bd()};var Eg;AE(687,1,{});AE(309,687,{},Mg);_.Nd=function Ng(a){var b={},j;var c=[];a[Dtb]=c;var d=arguments.callee.caller;while(d){var e=(Fg(),d.name||(d.name=Ig(d.toString())));c.push(e);var f=':'+e;var g=b[f];if(g){var h,i;for(h=0,i=g.length;h<i;h++){if(g[h]===d){return}}}(g||(b[f]=[])).push(d);d=d.caller}};_.Od=function Og(a){var b,c,d,e;d=(Fg(),a&&a[Dtb]?a[Dtb]:[]);c=d.length;e=fq(OB,Etb,74,c,0,1);for(b=0;b<c;b++){e[b]=new Ofb(d[b],null,-1)}return e};AE(688,687,{});_.Nd=function Qg(a){};_.Pd=function Rg(a,b,c,d){return new Ofb(b,a+'@'+d,c<0?-1:c)};_.Od=function Sg(a){var b,c,d,e,f,g;e=Kg(a);f=fq(OB,Etb,74,0,0,1);b=0;d=e.length;if(d==0){return f}g=Pg(this,e[0]);Wfb(g.d,Ctb)||(f[b++]=g);for(c=1;c<d;c++){f[b++]=Pg(this,e[c])}return f};AE(310,688,{},Tg);_.Pd=function Ug(a,b,c,d){return new Ofb(b,a,-1)};var Tq,Uq,Vq;Tq={3:1,306:1,6:1};AE(183,1,{},Beb);_.Uf=function Ceb(a){var b;b=new Beb;b.f=4;a>1?(b.c=Jeb(this,a-1)):(b.c=this);return b};_.Vf=function Ieb(){yeb(this);return this.b};_.Wf=function Keb(){return zeb(this)};_.Xf=function Meb(){return Aeb(this)};_.Yf=function Oeb(){return (this.f&4)!=0};_.Zf=function Peb(){return (this.f&1)!=0};_.bd=function Seb(){return ((this.f&2)!=0?'interface ':(this.f&1)!=0?'':'class ')+(yeb(this),this.k)};_.f=0;var xeb=1;AE(82,1,{3:1,82:1});var Veb;Uq={3:1,6:1,307:1,82:1};AE(19,1,{3:1,19:1});_.Ed=function Af(a){return new Error(a)};_.Fd=function Cf(){return this.backingJsObject};_.Gd=function Df(){var a,b,c;c=(this.j==null&&(this.j=fq(TB,Etb,19,0,0,1)),this.j);b=fq(MB,Etb,1,c.length,5,1);for(a=0;a<c.length;a++){b[a]=c[a].backingJsObject}return b};_.Hd=function Ef(){return this.e};_.Id=function Ff(){return this.f};_.Jd=function Gf(){yf(this,Bf(this.Ed(zf(this,this.f))));Gg(this)};_.bd=function If(){return zf(this,this.Id())};_.backingJsObject=Otb;_.g=false;_.k=true;AE(21,19,{3:1,21:1,19:1});AE(25,21,Ptb,Lf,Mf);AE(31,25,Qtb,heb,ieb);AE(104,25,Ptb,Nf);AE(52,104,{3:1,21:1,52:1,25:1,19:1},Jfb,Kfb,Lfb);_.Ed=function Mfb(a){return new TypeError(a)};Vq={3:1,184:1,6:1,2:1};AE(217,31,Qtb,Bgb);AE(819,1,{});AE(685,1,{},itb);var htb=0;AE(686,1,{});var MB=Eeb(_tb,'Object',1);var Js=Eeb(aub,'JavaScriptObject$',0);var Ts=Eeb(bub,'StackTraceCreator/Collector',687);var Qs=Eeb(bub,'StackTraceCreator/CollectorLegacy',309);var Ss=Eeb(bub,'StackTraceCreator/CollectorModern',688);var Rs=Eeb(bub,'StackTraceCreator/CollectorModernNoSourceMap',310);var xB=Eeb(_tb,'Boolean',306);var yB=Eeb(_tb,'Class',183);var LB=Eeb(_tb,'Number',82);var zB=Eeb(_tb,'Double',307);var TB=Eeb(_tb,'Throwable',19);var BB=Eeb(_tb,'Exception',21);var NB=Eeb(_tb,'RuntimeException',25);var FB=Eeb(_tb,'IndexOutOfBoundsException',31);var HB=Eeb(_tb,'JsException',104);var JB=Eeb(_tb,'NullPointerException',52);var SB=Eeb(_tb,'String',2);var RB=Eeb(_tb,'StringIndexOutOfBoundsException',217);var ND=Eeb(cub,'HashCodes',685);var OD=Eeb(cub,'JsUtils',686);AE(132,1,{});_.cd=function X(a){return (1+$wnd.Math.cos(dub+a*dub))/2};_.dd=function Y(){this.u&&this.ed()};_.ed=function Z(){this.gd(this.cd(1))};_.fd=function $(){this.gd(this.cd(0))};_.k=-1;_.o=false;_.p=false;_.r=-1;_.t=-1;_.u=false;var rr=Eeb(eub,'Animation',132);AE(328,1,{},bb);_.hd=function cb(a){ab(this,a)};var jr=Eeb(eub,'Animation/1',328);AE(708,1,{});var db;var qr=Eeb(eub,'AnimationScheduler',708);AE(174,1,{174:1});var kr=Eeb(eub,'AnimationScheduler/AnimationHandle',174);AE(173,708,{},fb);_.jd=function hb(a,b){var c;c=ib(a,b);return new jb(c)};var mr=Eeb(eub,'AnimationSchedulerImplStandard',173);AE(573,174,{174:1},jb);_.kd=function kb(){gb(this.a)};var lr=Eeb(eub,'AnimationSchedulerImplStandard/1',573);AE(175,708,{},nb);_.jd=function ob(a,b){var c;c=new Bb(this,a);Blb(this.a,c);this.a.a.length==1&&qb(this.b,16);return c};var pr=Eeb(eub,'AnimationSchedulerImplTimer',175);AE(43,1,{});_.ld=function wb(a){if(a!=this.g){return}this.i||(this.j=null);this.md()};_.g=0;_.i=false;_.j=null;var dv=Eeb(fub,'Timer',43);AE(574,43,{},zb);_.md=function Ab(){mb(this.a)};var nr=Eeb(eub,'AnimationSchedulerImplTimer/1',574);AE(176,174,{174:1,176:1},Bb);_.kd=function Cb(){lb(this.b,this)};var or=Eeb(eub,'AnimationSchedulerImplTimer/AnimationHandleImpl',176);AE(8,1,{});var ks=Eeb(gub,'RoleImpl',8);AE(579,8,{},Gb);var sr=Eeb(gub,'AlertRoleImpl',579);AE(578,8,{},Hb);var tr=Eeb(gub,'AlertdialogRoleImpl',578);AE(580,8,{},Ib);var ur=Eeb(gub,'ApplicationRoleImpl',580);AE(248,1,{});var xr=Eeb(gub,'Attribute',248);AE(58,248,{},Mb);_.nd=function Nb(a){return a.a};var vr=Eeb(gub,'AriaValueAttribute',58);AE(581,8,{},Ob);var wr=Eeb(gub,'ArticleRoleImpl',581);AE(582,8,{},Pb);var yr=Eeb(gub,'BannerRoleImpl',582);AE(583,8,{},Qb);var zr=Eeb(gub,'ButtonRoleImpl',583);AE(584,8,{},Rb);var Ar=Eeb(gub,'CheckboxRoleImpl',584);AE(585,8,{},Sb);var Br=Eeb(gub,'ColumnheaderRoleImpl',585);AE(586,8,{},Tb);var Cr=Eeb(gub,'ComboboxRoleImpl',586);AE(587,8,{},Ub);var Dr=Eeb(gub,'ComplementaryRoleImpl',587);AE(588,8,{},Vb);var Er=Eeb(gub,'ContentinfoRoleImpl',588);AE(589,8,{},Wb);var Fr=Eeb(gub,'DefinitionRoleImpl',589);AE(590,8,{},Xb);var Gr=Eeb(gub,'DialogRoleImpl',590);AE(591,8,{},Yb);var Hr=Eeb(gub,'DirectoryRoleImpl',591);AE(592,8,{},Zb);var Ir=Eeb(gub,'DocumentRoleImpl',592);AE(593,8,{},$b);var Jr=Eeb(gub,'FormRoleImpl',593);AE(595,8,{},_b);var Kr=Eeb(gub,'GridRoleImpl',595);AE(594,8,{},ac);var Lr=Eeb(gub,'GridcellRoleImpl',594);AE(596,8,{},bc);var Mr=Eeb(gub,'GroupRoleImpl',596);AE(597,8,{},cc);var Nr=Eeb(gub,'HeadingRoleImpl',597);AE(177,1,{738:1,177:1},ec);var Or=Eeb(gub,'Id',177);AE(598,8,{},fc);var Pr=Eeb(gub,'ImgRoleImpl',598);AE(599,8,{},gc);var Qr=Eeb(gub,'LinkRoleImpl',599);AE(602,8,{},hc);var Rr=Eeb(gub,'ListRoleImpl',602);AE(600,8,{},ic);var Sr=Eeb(gub,'ListboxRoleImpl',600);AE(601,8,{},jc);var Tr=Eeb(gub,'ListitemRoleImpl',601);AE(603,8,{},kc);var Ur=Eeb(gub,'LogRoleImpl',603);AE(604,8,{},lc);var Vr=Eeb(gub,'MainRoleImpl',604);AE(605,8,{},mc);var Wr=Eeb(gub,'MarqueeRoleImpl',605);AE(606,8,{},nc);var Xr=Eeb(gub,'MathRoleImpl',606);AE(611,8,{},oc);var Yr=Eeb(gub,'MenuRoleImpl',611);AE(607,8,{},qc);var Zr=Eeb(gub,'MenubarRoleImpl',607);AE(610,8,{},rc);var $r=Eeb(gub,'MenuitemRoleImpl',610);AE(608,8,{},sc);var _r=Eeb(gub,'MenuitemcheckboxRoleImpl',608);AE(609,8,{},tc);var as=Eeb(gub,'MenuitemradioRoleImpl',609);AE(612,8,{},uc);var bs=Eeb(gub,'NavigationRoleImpl',612);AE(613,8,{},vc);var cs=Eeb(gub,'NoteRoleImpl',613);AE(614,8,{},wc);var ds=Eeb(gub,'OptionRoleImpl',614);AE(615,8,{},xc);var es=Eeb(gub,'PresentationRoleImpl',615);AE(47,248,{},yc);_.nd=function zc(a){return a==null?Mtb:EE(a)};var fs=Eeb(gub,'PrimitiveValueAttribute',47);AE(616,8,{},Ac);var gs=Eeb(gub,'ProgressbarRoleImpl',616);var Bc,Cc;AE(618,8,{},Ec);var hs=Eeb(gub,'RadioRoleImpl',618);AE(617,8,{},Fc);var is=Eeb(gub,'RadiogroupRoleImpl',617);AE(619,8,{},Gc);var js=Eeb(gub,'RegionRoleImpl',619);var Hc,Ic,Jc,Kc,Lc,Mc,Nc,Oc,Pc,Qc,Rc,Sc,Tc,Uc,Vc,Wc,Xc,Yc,Zc,$c,_c,ad,bd,cd,dd,ed,fd,gd,hd,jd,kd,ld,md,nd,od,pd,qd,rd,sd,td,ud,vd,wd,xd,yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od,Pd;AE(622,8,{},Rd);var ls=Eeb(gub,'RowRoleImpl',622);AE(620,8,{},Sd);var ms=Eeb(gub,'RowgroupRoleImpl',620);AE(621,8,{},Td);var ns=Eeb(gub,'RowheaderRoleImpl',621);AE(623,8,{},Ud);var os=Eeb(gub,'ScrollbarRoleImpl',623);AE(624,8,{},Vd);var ps=Eeb(gub,'SearchRoleImpl',624);AE(625,8,{},Wd);var qs=Eeb(gub,'SeparatorRoleImpl',625);AE(626,8,{},Xd);var rs=Eeb(gub,'SliderRoleImpl',626);AE(627,8,{},Yd);var ss=Eeb(gub,'SpinbuttonRoleImpl',627);AE(628,8,{},Zd);var ts=Eeb(gub,'StatusRoleImpl',628);AE(631,8,{},$d);var us=Eeb(gub,'TabRoleImpl',631);AE(629,8,{},_d);var vs=Eeb(gub,'TablistRoleImpl',629);AE(630,8,{},ae);var ws=Eeb(gub,'TabpanelRoleImpl',630);AE(632,8,{},be);var xs=Eeb(gub,'TextboxRoleImpl',632);AE(633,8,{},ce);var ys=Eeb(gub,'TimerRoleImpl',633);AE(634,8,{},de);var zs=Eeb(gub,'ToolbarRoleImpl',634);AE(635,8,{},ee);var As=Eeb(gub,'TooltipRoleImpl',635);AE(638,8,{},fe);var Bs=Eeb(gub,'TreeRoleImpl',638);AE(636,8,{},ge);var Cs=Eeb(gub,'TreegridRoleImpl',636);AE(637,8,{},he);var Ds=Eeb(gub,'TreeitemRoleImpl',637);AE(12,1,{16:1,12:1});_.od=function xe(){return ke(this)};_.pd=function ze(){throw WD(new Ggb)};_.qd=function Ae(a){qe(this,a)};_.rd=function Ce(a,b){se(this,a,b)};_.sd=function Fe(a){ve(this,a)};_.bd=function Ge(){if(!this.Zc){return '(null handle)'}return qh((LF(),this.Zc))};var bw=Eeb(Fub,'UIObject',12);AE(13,12,Gub);_.td=function Se(){};_.ud=function Te(){};_.vd=function Ue(a){Ke(this,a)};_.wd=function Ve(){return this.Vc};_.xd=function We(){Le(this)};_.yd=function Xe(a){Me(this,a)};_.zd=function Ye(){Ne(this)};_.Ad=function Ze(){};_.Bd=function $e(){};_.Vc=false;_.Wc=0;var lw=Eeb(Fub,'Widget',13);var xv=Geb(Fub,'Focusable');AE(212,13,Iub);_.xd=function ff(){var a;Le(this);a=YL((LF(),this.Zc));-1==a&&(this.Zc.tabIndex=0,undefined)};_.Cd=function gf(a){bf(this,a)};_.Dd=function hf(a){df(this,a)};var _e;var wv=Eeb(Fub,'FocusWidget',212);AE(657,212,Iub,kf);var jf;var Gs=Eeb(Jub,'Canvas',657);AE(714,1,{});var Fs=Eeb(Jub,'Canvas/CanvasElementSupportDetector',714);AE(658,714,{},mf);var Es=Eeb(Jub,'Canvas/CanvasElementSupportDetectedMaybe',658);AE(214,1,{},pf);_.a=0;var Hs=Eeb(aub,'Duration',214);var qf=null;AE(353,104,Ptb);var Ms=Eeb(bub,'JavaScriptExceptionBase',353);AE(81,353,{81:1,3:1,21:1,25:1,19:1},Rf);_.Id=function Sf(){Qf(this);return this.c};_.Kd=function Tf(){return cr(this.b)===cr(Of)?null:this.b};var Of;var Is=Eeb(aub,'JavaScriptException',81);var Ks=Geb(aub,'RunAsyncCallback');AE(667,1,{});var Ls=Eeb(aub,'Scheduler',667);var Xf=0,Yf=false,Zf,$f=0,_f=-1;AE(354,667,{});_.e=false;_.j=false;var mg;var Ps=Eeb(bub,'SchedulerImpl',354);AE(355,1,{},Ag);_.Ld=function Bg(){this.a.e=true;qg(this.a);this.a.e=false;return this.a.j=rg(this.a)};var Ns=Eeb(bub,'SchedulerImpl/Flusher',355);AE(356,1,{},Cg);_.Ld=function Dg(){this.a.e&&zg(this.a.f,1);return this.a.j};var Os=Eeb(bub,'SchedulerImpl/Rescuer',356);AE(116,1,Lub);_.Td=function Ph(a){return a.button|0};_.Vd=function Qh(a){return a.currentTarget};_.Zd=function Rh(a){return _h(Mh(a))};_.$d=function Sh(a){return _h(Nh(a))};_._d=function Th(a){return 0};_.ae=function Uh(a){return 0};_.be=function Vh(a){return Wfb(a.compatMode,Mub)?a.documentElement:a.body};_.ce=function Wh(a){var b='',c=a.firstChild;while(c){c.nodeType==1?(b+=this.ce(c)):c.nodeValue&&(b+=c.nodeValue);c=c.nextSibling}return b};_.de=function Xh(a){return _h(a.scrollLeft||0)};_.ee=function Yh(a){return a.tabIndex};_.ge=function Zh(a,b){while(a.firstChild){a.removeChild(a.firstChild)}b!=null&&a.appendChild(a.ownerDocument.createTextNode(b))};_.he=function $h(a,b){a.scrollLeft=b};_.ie=function ai(a){return a.outerHTML};var Eh;var Ys=Eeb(Nub,'DOMImpl',116);AE(700,116,Lub);_.Qd=function bi(a,b,c,d){var e=a.createEvent('HTMLEvents');e.initEvent(b,c,d);return e};_.Rd=function ci(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){n==1?(n=0):n==4?(n=1):(n=2);var p=a.createEvent(Oub);p.initMouseEvent(b,c,d,null,e,f,g,h,i,j,k,l,m,n,o);return p};_.Sd=function di(a,b){a.dispatchEvent(b)};_.Td=function ei(a){var b=a.button;if(b==1){return 4}else if(b==2){return 2}return 1};_.Ud=function fi(a){return a.charCode||0};_.Wd=function gi(a){return a.relatedTarget};_.Xd=function hi(a){return a.target};_.Yd=function ii(a){a.preventDefault()};_.be=function ji(a){if(a.scrollingElement){return a.scrollingElement}return this.je(a)};_.ce=function ki(a){return a.textContent};_.je=function li(a){return Wfb(a.compatMode,Mub)?a.documentElement:a.body};_.fe=function mi(a,b){return a.contains(b)};_.ge=function ni(a,b){a.textContent=b||''};var Ws=Eeb(Nub,Pub,700);AE(478,700,Lub,si);_.Wd=function ti(b){var c=b.relatedTarget;if(!c){return null}try{var d=c.nodeName;return c}catch(a){return null}};_.Zd=function ui(a){return pi(qj(a.ownerDocument),a)};_.$d=function vi(a){return qi(qj(a.ownerDocument),a)};_._d=function wi(a){var b=$wnd.getComputedStyle(a.documentElement,null);if(b==null){return 0}return parseInt(b.marginLeft,10)+parseInt(b.borderLeftWidth,10)};_.ae=function xi(a){var b=$wnd.getComputedStyle(a.documentElement,null);if(b==null){return 0}return parseInt(b.marginTop,10)+parseInt(b.borderTopWidth,10)};_.de=function zi(a){var b;b=(oi==-2&&(oi=yi()),oi);if(!(b!=-1&&b>=1009000)&&ri(a)){return _h(a.scrollLeft||0)-(((a.scrollWidth||0)|0)-(a.clientWidth|0))}return _h(a.scrollLeft||0)};_.fe=function Ai(a,b){return a===b||!!(a.compareDocumentPosition(b)&16)};_.he=function Bi(a,b){var c;c=(oi==-2&&(oi=yi()),oi);!(c!=-1&&c>=1009000)&&ri(a)&&(b+=((a.scrollWidth||0)|0)-(a.clientWidth|0));a.scrollLeft=b};_.ie=function Ci(a){var b=a.ownerDocument;var c=a.cloneNode(true);var d=b.createElement('DIV');d.appendChild(c);outer=d.innerHTML;c.innerHTML='';return outer};var oi=-2;var Us=Eeb(Nub,Rub,478);AE(701,700,Lub);_.Vd=function Ei(a){return a.currentTarget||$wnd};_.Zd=function Fi(a){var b,c;c=a.getBoundingClientRect&&a.getBoundingClientRect();b=c?c.left+Kh(this,a.ownerDocument):Gi(a);return Fh(),b|0};_.$d=function Hi(a){var b,c,d;b=a.getBoundingClientRect&&a.getBoundingClientRect();c=b?b.top+Lh(this,a.ownerDocument):Ii(a);return Fh(),c|0};_.de=function Ji(a){if(!Xfb('body',(Fh(),a).tagName)&&Di(a)){return _h(a.scrollLeft||0)-(((a.scrollWidth||0)|0)-(a.clientWidth|0))}return _h(a.scrollLeft||0)};_.ee=function Ki(a){return typeof a.tabIndex!='undefined'?a.tabIndex:-1};_.he=function Li(a,b){!Xfb('body',(Fh(),a).tagName)&&Di(a)&&(b+=((a.scrollWidth||0)|0)-(a.clientWidth|0));a.scrollLeft=b};var Vs=Eeb(Nub,Vub,701);AE(477,701,Lub,Mi);_.Xd=function Ni(a){var b=a.target;b&&b.nodeType==3&&(b=b.parentNode);return b};_.je=function Oi(a){return a.body};var Xs=Eeb(Nub,Wub,477);AE(4,1,{3:1,6:1,4:1});_.ke=function Pj(a){return this.c-a.c};_.compareTo=function Oj(a){return this.c-a.c};_.equals=function Qj(a){return this===a};_.$c=function(a){return this.equals(a)};_.hashCode=function Rj(){return ltb(this)};_.ad=function(){return this.hashCode()};_.name=function Sj(){return this.b!=null?this.b:''+this.c};_.ordinal=function Tj(){return this.c};_.toString=function Uj(){return Mj(this)};_.bd=function(){return this.toString()};_.c=0;var AB=Eeb(_tb,'Enum',4);AE(56,4,avb);var Vj,Wj,Xj,Yj,Zj;var ct=Feb(Nub,'Style/BorderStyle',56,ak);AE(430,56,avb,bk);var Zs=Feb(Nub,'Style/BorderStyle/1',430,null);AE(431,56,avb,ck);var $s=Feb(Nub,'Style/BorderStyle/2',431,null);AE(432,56,avb,dk);var _s=Feb(Nub,'Style/BorderStyle/3',432,null);AE(433,56,avb,ek);var at=Feb(Nub,'Style/BorderStyle/4',433,null);AE(434,56,avb,fk);var bt=Feb(Nub,'Style/BorderStyle/5',434,null);AE(23,4,cvb);var gk,hk,ik,jk,kk,lk,mk,nk,ok,pk,qk,rk,sk,tk,uk,vk,wk,xk,yk;var wt=Feb(Nub,'Style/Display',23,Bk);AE(435,23,cvb,Ck);_.le=function Dk(){return zub};var nt=Feb(Nub,'Style/Display/1',435,null);AE(444,23,cvb,Ek);_.le=function Fk(){return 'table-column-group'};var dt=Feb(Nub,'Style/Display/10',444,null);AE(445,23,cvb,Gk);_.le=function Hk(){return 'table-header-group'};var et=Feb(Nub,'Style/Display/11',445,null);AE(446,23,cvb,Ik);_.le=function Jk(){return 'table-footer-group'};var ft=Feb(Nub,'Style/Display/12',446,null);AE(447,23,cvb,Kk);_.le=function Lk(){return 'table-row-group'};var gt=Feb(Nub,'Style/Display/13',447,null);AE(448,23,cvb,Mk);_.le=function Nk(){return 'table-cell'};var ht=Feb(Nub,'Style/Display/14',448,null);AE(449,23,cvb,Ok);_.le=function Pk(){return 'table-column'};var it=Feb(Nub,'Style/Display/15',449,null);AE(450,23,cvb,Qk);_.le=function Rk(){return 'table-row'};var jt=Feb(Nub,'Style/Display/16',450,null);AE(451,23,cvb,Sk);_.le=function Tk(){return 'initial'};var kt=Feb(Nub,'Style/Display/17',451,null);AE(452,23,cvb,Uk);_.le=function Vk(){return 'flex'};var lt=Feb(Nub,'Style/Display/18',452,null);AE(453,23,cvb,Wk);_.le=function Xk(){return 'inline-flex'};var mt=Feb(Nub,'Style/Display/19',453,null);AE(436,23,cvb,Yk);_.le=function Zk(){return dvb};var ot=Feb(Nub,'Style/Display/2',436,null);AE(437,23,cvb,$k);_.le=function _k(){return 'inline'};var pt=Feb(Nub,'Style/Display/3',437,null);AE(438,23,cvb,al);_.le=function bl(){return 'inline-block'};var qt=Feb(Nub,'Style/Display/4',438,null);AE(439,23,cvb,cl);_.le=function dl(){return 'inline-table'};var rt=Feb(Nub,'Style/Display/5',439,null);AE(440,23,cvb,el);_.le=function fl(){return 'list-item'};var st=Feb(Nub,'Style/Display/6',440,null);AE(441,23,cvb,gl);_.le=function hl(){return 'run-in'};var tt=Feb(Nub,'Style/Display/7',441,null);AE(442,23,cvb,il);_.le=function jl(){return 'table'};var ut=Feb(Nub,'Style/Display/8',442,null);AE(443,23,cvb,kl);_.le=function ll(){return 'table-caption'};var vt=Feb(Nub,'Style/Display/9',443,null);AE(63,4,evb);var ml,nl,ol,pl;var Bt=Feb(Nub,'Style/Overflow',63,sl);AE(454,63,evb,tl);var xt=Feb(Nub,'Style/Overflow/1',454,null);AE(455,63,evb,ul);var yt=Feb(Nub,'Style/Overflow/2',455,null);AE(456,63,evb,vl);var zt=Feb(Nub,'Style/Overflow/3',456,null);AE(457,63,evb,wl);var At=Feb(Nub,'Style/Overflow/4',457,null);AE(64,4,fvb);var xl,yl,zl,Al;var Gt=Feb(Nub,'Style/Position',64,Dl);AE(458,64,fvb,El);var Ct=Feb(Nub,'Style/Position/1',458,null);AE(459,64,fvb,Fl);var Dt=Feb(Nub,'Style/Position/2',459,null);AE(460,64,fvb,Gl);var Et=Feb(Nub,'Style/Position/3',460,null);AE(461,64,fvb,Hl);var Ft=Feb(Nub,'Style/Position/4',461,null);AE(65,4,gvb);var Il,Jl,Kl,Ll;var Lt=Feb(Nub,'Style/TextAlign',65,Ol);AE(462,65,gvb,Pl);var Ht=Feb(Nub,'Style/TextAlign/1',462,null);AE(463,65,gvb,Ql);var It=Feb(Nub,'Style/TextAlign/2',463,null);AE(464,65,gvb,Rl);var Jt=Feb(Nub,'Style/TextAlign/3',464,null);AE(465,65,gvb,Sl);var Kt=Feb(Nub,'Style/TextAlign/4',465,null);AE(96,4,hvb);var Tl,Ul;var Ot=Feb(Nub,'Style/TextOverflow',96,Xl);AE(466,96,hvb,Yl);var Mt=Feb(Nub,'Style/TextOverflow/1',466,null);AE(467,96,hvb,Zl);var Nt=Feb(Nub,'Style/TextOverflow/2',467,null);AE(34,4,ivb);var $l,_l,am,bm,cm,dm,em,fm,gm;var Yt=Feb(Nub,'Style/Unit',34,jm);AE(421,34,ivb,km);var Pt=Feb(Nub,'Style/Unit/1',421,null);AE(422,34,ivb,lm);var Qt=Feb(Nub,'Style/Unit/2',422,null);AE(423,34,ivb,mm);var Rt=Feb(Nub,'Style/Unit/3',423,null);AE(424,34,ivb,nm);var St=Feb(Nub,'Style/Unit/4',424,null);AE(425,34,ivb,om);var Tt=Feb(Nub,'Style/Unit/5',425,null);AE(426,34,ivb,pm);var Ut=Feb(Nub,'Style/Unit/6',426,null);AE(427,34,ivb,qm);var Vt=Feb(Nub,'Style/Unit/7',427,null);AE(428,34,ivb,rm);var Wt=Feb(Nub,'Style/Unit/8',428,null);AE(429,34,ivb,sm);var Xt=Feb(Nub,'Style/Unit/9',429,null);AE(97,4,jvb);var tm,um;var _t=Feb(Nub,'Style/Visibility',97,xm);AE(468,97,jvb,ym);_.le=function zm(){return kvb};var Zt=Feb(Nub,'Style/Visibility/1',468,null);AE(469,97,jvb,Am);_.le=function Bm(){return lvb};var $t=Feb(Nub,'Style/Visibility/2',469,null);AE(57,4,mvb);var Cm,Dm,Em,Fm,Gm;var fu=Feb(Nub,'Style/WhiteSpace',57,Jm);AE(470,57,mvb,Km);var au=Feb(Nub,'Style/WhiteSpace/1',470,null);AE(471,57,mvb,Lm);var bu=Feb(Nub,'Style/WhiteSpace/2',471,null);AE(472,57,mvb,Mm);var cu=Feb(Nub,'Style/WhiteSpace/3',472,null);AE(473,57,mvb,Nm);var du=Feb(Nub,'Style/WhiteSpace/4',473,null);AE(474,57,mvb,Om);var eu=Feb(Nub,'Style/WhiteSpace/5',474,null);AE(681,1,{});_.bd=function Tm(){return 'An event type'};var uw=Eeb(nvb,'Event',681);AE(682,681,{});_.oe=function Vm(){return this.ne()};_.pe=function Wm(){this.e=false;this.f=null};_.e=false;var Iu=Eeb(ovb,'GwtEvent',682);AE(695,682,{});_.ne=function _m(){return this.qe()};_.oe=function an(){return this.qe()};var Xm;var ku=Eeb(pvb,'DomEvent',695);AE(544,695,{},dn);_.me=function en(a){a.re(this)};_.ne=function gn(){return bn};_.oe=function hn(){return bn};_.qe=function fn(){return bn};var bn;var gu=Eeb(pvb,'BlurEvent',544);AE(696,695,{});var mu=Eeb(pvb,'HumanInputEvent',696);AE(697,696,{});var uu=Eeb(pvb,'MouseEvent',697);AE(420,697,{},ln);_.me=function mn(a){a.se(this)};_.ne=function on(){return jn};_.oe=function pn(){return jn};_.qe=function nn(){return jn};var jn;var hu=Eeb(pvb,'ClickEvent',420);AE(484,695,{},sn);_.me=function tn(a){a.te(this)};_.ne=function vn(){return qn};_.oe=function wn(){return qn};_.qe=function un(){return qn};var qn;var iu=Eeb(pvb,'ContextMenuEvent',484);AE(293,1,{});_.ad=function yn(){return this.c};_.bd=function zn(){return 'Event type'};_.c=0;var xn=0;var sw=Eeb(nvb,'Event/Type',293);AE(48,293,{},An);var Hu=Eeb(ovb,'GwtEvent/Type',48);AE(40,48,{40:1},Bn);var ju=Eeb(pvb,'DomEvent/Type',40);AE(543,695,{},En);_.me=function Fn(a){yT(a,this)};_.ne=function Hn(){return Cn};_.oe=function In(){return Cn};_.qe=function Gn(){return Cn};var Cn;var lu=Eeb(pvb,'FocusEvent',543);AE(706,695,{});var pu=Eeb(pvb,'KeyEvent',706);AE(707,706,{});var nu=Eeb(pvb,'KeyCodeEvent',707);AE(542,707,{},Ln);_.me=function Mn(a){zT(a,this)};_.ne=function On(){return Jn};_.oe=function Pn(){return Jn};_.qe=function Nn(){return Jn};var Jn;var ou=Eeb(pvb,'KeyDownEvent',542);AE(653,706,{},Sn);_.me=function Tn(a){AT(a,this)};_.ne=function Vn(){return Qn};_.oe=function Wn(){return Qn};_.qe=function Un(){return Qn};var Qn;var qu=Eeb(pvb,'KeyPressEvent',653);AE(652,707,{},Zn);_.me=function $n(a){a.ue(this)};_.ne=function ao(){return Xn};_.oe=function bo(){return Xn};_.qe=function _n(){return Xn};var Xn;var ru=Eeb(pvb,'KeyUpEvent',652);AE(651,695,{},fo);_.me=function go(a){K6(a.a.c)};_.ne=function io(){return co};_.oe=function jo(){return co};_.qe=function ho(){return co};var co;var su=Eeb(pvb,'LoadEvent',651);AE(541,697,{},mo);_.me=function no(a){a.ve(this)};_.ne=function po(){return ko};_.oe=function qo(){return ko};_.qe=function oo(){return ko};var ko;var tu=Eeb(pvb,'MouseDownEvent',541);AE(654,697,{},to);_.me=function uo(a){a.we(this)};_.ne=function wo(){return ro};_.oe=function xo(){return ro};_.qe=function vo(){return ro};var ro;var vu=Eeb(pvb,'MouseUpEvent',654);AE(556,1,{},Ao);var wu=Eeb(pvb,'PrivateMap',556);AE(711,696,{});var Bo;var Au=Eeb(pvb,rvb,711);AE(650,711,{},Eo);_.me=function Fo(a){!!a.b&&pb(a.b)};_.ne=function Ho(){return Co};_.oe=function Io(){return Co};_.qe=function Go(){return Co};var Co;var xu=Eeb(pvb,'TouchCancelEvent',650);AE(648,711,{},Lo);_.me=function Mo(a){a.xe(this)};_.ne=function Oo(){return Jo};_.oe=function Po(){return Jo};_.qe=function No(){return Jo};var Jo;var yu=Eeb(pvb,'TouchEndEvent',648);AE(555,1,{},Qo);_.a=false;var zu=Eeb(pvb,'TouchEvent/TouchSupportDetector',555);AE(649,711,{},To);_.me=function Uo(a){a.ye(this)};_.ne=function Wo(){return Ro};_.oe=function Xo(){return Ro};_.qe=function Vo(){return Ro};var Ro;var Bu=Eeb(pvb,'TouchMoveEvent',649);AE(647,711,{},$o);_.me=function _o(a){a.ze(this)};_.ne=function bp(){return Yo};_.oe=function cp(){return Yo};_.qe=function ap(){return Yo};var Yo;var Cu=Eeb(pvb,'TouchStartEvent',647);AE(305,682,{},ep);_.me=function fp(a){a.Ae(this)};_.oe=function ip(){return dp};_.ne=function hp(){return dp};_.a=false;var dp;var Du=Eeb(vvb,'AttachEvent',305);AE(545,682,{},kp);_.me=function lp(a){a.Be(this)};_.oe=function op(){return jp};_.ne=function np(){return jp};var jp;var Eu=Eeb(vvb,'CloseEvent',545);AE(559,682,{},qp);_.me=function rp(a){a.Ce(this)};_.oe=function up(){return pp};_.ne=function tp(){return pp};var pp;var Fu=Eeb(vvb,'ResizeEvent',559);AE(577,682,{},wp);_.me=function xp(a){a.a.w&&a.a.We()};_.oe=function Ap(){return vp};_.ne=function zp(){return vp};var vp;var Gu=Eeb(vvb,'ValueChangeEvent',577);AE(76,1,{14:1},Ep,Fp);_.vd=function Gp(a){Cp(this,a)};var Ku=Eeb(ovb,'HandlerManager',76);AE(693,1,{});var tw=Eeb(nvb,'EventBus',693);AE(359,693,{});_.b=0;_.c=false;var yw=Eeb(nvb,'SimpleEventBus',359);AE(360,359,{},Rp);var Ju=Eeb(ovb,'HandlerManager/Bus',360);AE(552,1,{},Sp);var Lu=Eeb(ovb,'LegacyHandlerWrapper',552);AE(91,25,wvb,Tp);var zw=Eeb(nvb,xvb,91);AE(197,91,wvb,Vp);var Mu=Eeb(ovb,xvb,197);AE(111,4,{111:1,3:1,6:1,4:1},bq);var Zp,$p,_p;var Nu=Feb('com.google.gwt.i18n.client','HasDirection/Direction',111,cq);var kq;var Oq,Pq,Qq,Rq;AE(112,1,{112:1});var iD=Eeb(Fvb,'Handler',112);AE(263,112,{112:1},KE);_.De=function LE(a){var b,c;if(!window.console||(HE(this),Ntb>a.a.$f())){return}b=WE(this.a,a);c=a.a.$f();c>=(erb(),Qub)?(window.console.error(b),undefined):c>=900?(window.console.warn(b),undefined):c>=800?(window.console.info(b),undefined):(window.console.log(b),undefined)};var Ou=Eeb(Gvb,'ConsoleLogHandler',263);AE(264,112,{112:1},ME);_.De=function NE(a){return};var Pu=Eeb(Gvb,'DevelopmentModeLogHandler',264);var OE;var Su=Eeb(Gvb,'LogConfiguration',null);AE(262,1,{},RE);var Qu=Eeb(Gvb,'LogConfiguration/1',262);AE(261,1,{},VE);var Ru=Eeb(Gvb,'LogConfiguration/LogConfigurationImplRegular',261);AE(709,1,{});var hD=Eeb(Fvb,'Formatter',709);AE(710,709,{});var Uu=Eeb(Hvb,'FormatterImpl',710);AE(245,710,{},XE);_.a=false;var Tu=Eeb(Gvb,'TextLogFormatter',245);AE(669,1,{});var sB=Eeb(Ivb,'OutputStream',669);AE(191,669,{},_E);var rB=Eeb(Ivb,'FilterOutputStream',191);AE(153,191,{},dF);_.Ee=function eF(a){aF(this,a)};_.Fe=function fF(a){bF(this,a)};var tB=Eeb(Ivb,'PrintStream',153);AE(641,153,{},gF);_.Ee=function hF(a){wgb(this.a,a)};_.Fe=function iF(a){wgb(this.a,a);wgb(this.a,'\n')};var Vu=Eeb(Hvb,'StackTracePrintStream',641);AE(561,1,{},mF);var Wu=Eeb(Jvb,'SafeHtmlBuilder',561);AE(148,1,{733:1,148:1,3:1},nF);_.$c=function oF(a){if(!Yq(a,148)){return false}return Wfb(this.a,a.a)};_.ad=function pF(){return Yfb(this.a)};_.bd=function qF(){return 'safe: "'+this.a+'"'};var Xu=Eeb(Jvb,'SafeHtmlString',148);var rF,sF,tF,uF,vF,wF;AE(120,1,{737:1,120:1},zF);_.$c=function AF(a){if(!Yq(a,120)){return false}return Wfb(this.a,a.a)};_.ad=function BF(){return Yfb(this.a)};_.bd=function CF(){return 'safe: "'+this.a+'"'};var Yu=Eeb(Jvb,'SafeUriString',120);AE(713,1,{});var Zu=Eeb('com.google.gwt.text.shared','AbstractRenderer',713);AE(656,1,{},FF);var EF;var $u=Eeb(Kvb,'PassthroughParser',656);AE(655,713,{},HF);var GF;var _u=Eeb(Kvb,'PassthroughRenderer',655);var IF=null,JF,KF;var $F;AE(329,682,{},kG);_.me=function lG(a){a.Ge(this);hG.c=false};_.oe=function oG(){return gG};_.ne=function nG(){return gG};_.pe=function pG(){iG(this)};_.a=false;_.b=false;_.c=false;var gG,hG;var av=Eeb(fub,'Event/NativePreviewEvent',329);var qG,rG;AE(550,1,{14:1},xG);_.vd=function yG(a){Cp(this.a,a)};var bv=Eeb(fub,'History/HistoryEventSource',550);AE(551,1,{},zG);var cv=Eeb(fub,'History/HistoryImpl',551);var BG=false,CG,DG,EG=0,FG=0,GG=false;AE(358,682,{},RG);_.me=function SG(a){null.vg()};_.oe=function UG(){return PG};_.ne=function TG(){return PG};var PG;var ev=Eeb(fub,'Window/ClosingEvent',358);var VG='',WG;AE(158,76,{14:1},$G);var fv=Eeb(fub,'Window/WindowHandlers',158);AE(115,1,Xvb);var _G=false;var kv=Eeb(Yvb,'DOMImpl',115);AE(698,115,Xvb);_.He=function rH(a,b){var c=0,d=a.firstChild;while(d){if(d.nodeType==1){if(b==c)return d;++c}d=d.nextSibling}return null};_.Ie=function sH(a){var b=0,c=a.firstChild;while(c){c.nodeType==1&&++b;c=c.nextSibling}return b};_.Je=function uH(){kH()};_.Ke=function vH(a,b,c){var d=0,e=a.firstChild,f=null;while(e){if(e.nodeType==1){if(d==c){f=e;break}++d}e=e.nextSibling}a.insertBefore(b,f)};_.Le=function wH(a){bH(this);fH==a&&(fH=null)};_.Me=function xH(a){bH(this);fH=a};_.Ne=function yH(a,b){var c,d;bH(this);c=eH;d=c[b]||c['_default_'];a.addEventListener(b,d,false)};_.Oe=function zH(a,b){bH(this);lH(a,b)};var eH,fH,gH,hH,iH;var iv=Eeb(Yvb,Pub,698);AE(475,698,Xvb,CH);_.Je=function DH(){kH();BH()};_.Oe=function EH(a,b){bH(this);lH(a,b);b&Pvb&&a.addEventListener(Ovb,(jH(),hH),false)};var gv=Eeb(Yvb,Rub,475);AE(699,698,Xvb);var hv=Eeb(Yvb,Vub,699);AE(476,699,Xvb,FH);var jv=Eeb(Yvb,Wub,476);AE(169,1,{169:1},JH);_.Pe=function KH(){return $wnd.location.hash};var mv=Eeb(Yvb,'WindowImpl',169);AE(553,169,{169:1},LH);_.Pe=function MH(){var a=$wnd.location.href;var b=a.indexOf('#');return b>0?a.substring(b):''};var lv=Eeb(Yvb,'WindowImplMozilla',553);AE(680,13,$vb);_.td=function OH(){cI(this,(aI(),ZH))};_.ud=function PH(){cI(this,(aI(),_H))};var Nv=Eeb(Fub,'Panel',680);AE(154,680,$vb);_.Qe=function TH(){return new PL(this.o)};_.Re=function UH(a){return RH(this,a)};var sv=Eeb(Fub,'ComplexPanel',154);AE(351,154,$vb);_.Re=function YH(a){return WH(this,a)};var nv=Eeb(Fub,'AbsolutePanel',351);AE(274,197,wvb,bI);var ZH,_H;var qv=Eeb(Fub,'AttachDetachException',274);AE(275,1,{},dI);_.Se=function eI(a){a.xd()};var ov=Eeb(Fub,'AttachDetachException/1',275);AE(276,1,{},fI);_.Se=function gI(a){a.zd()};var pv=Eeb(Fub,'AttachDetachException/2',276);AE(479,154,$vb);var rv=Eeb(Fub,'CellPanel',479);AE(684,13,bwb);_.wd=function nI(){return mI(this)};_.xd=function oI(){kI(this);if(this.Wc!=-1){Re(this.bb,this.Wc);this.Wc=-1}this.bb.xd();LF();this.Zc.__listener=this;gp(this,true)};_.yd=function pI(a){Me(this,a);this.bb.yd(a)};_.zd=function qI(){try{gp(this,false)}finally{this.bb.zd()}};_.pd=function rI(){oe(this,this.bb.pd());return LF(),this.Zc};var tv=Eeb(Fub,'Composite',684);AE(640,1,{},uI);_.c=false;var uv=Eeb(Fub,'DirectionalTextHelper',640);AE(90,154,$vb,wI);var vv=Eeb(Fub,'FlowPanel',90);AE(131,680,$vb);_.Te=function CI(){return LF(),this.Zc};_.Qe=function DI(){return new cL(this)};_.Re=function EI(a){return yI(this,a)};_.Ue=function FI(a){zI(this,a)};var Zv=Eeb(Fub,'SimplePanel',131);var GI;var NI,OI,QI;AE(240,13,Gub);var Gv=Eeb(Fub,'LabelBase',240);AE(554,240,Gub);var Hv=Eeb(Fub,'Label',554);AE(146,554,Gub,LI,MI);var yv=Eeb(Fub,'HTML',146);var TI;AE(702,1,{});var zv=Eeb(Fub,'HasHorizontalAlignment/AutoHorizontalAlignmentConstant',702);AE(141,702,{},SI);var Av=Eeb(Fub,'HasHorizontalAlignment/HorizontalAlignmentConstant',141);AE(166,1,{},VI);var Bv=Eeb(Fub,'HasVerticalAlignment/VerticalAlignmentConstant',166);AE(243,13,Gub,ZI);_.yd=function $I(a){LF();aH((Fh(),a).type)==Mvb&&!!this.a&&(this.Zc[Zvb]='',undefined);Me(this,a)};_.Ad=function _I(){aJ(this.a,this)};var Fv=Eeb(Fub,'Image',243);AE(575,1,{});_.a=null;var Dv=Eeb(Fub,'Image/State',575);AE(576,1,cwb,bJ);_.Md=function cJ(){var a;if(this.b.a!=this.a||this!=this.a.a){return}this.a.a=null;if(!this.b.Vc){dJ(this.b)[Zvb]=Xub;return}a=Vi($doc);eh(dJ(this.b),a)};var Cv=Eeb(Fub,'Image/State/1',576);AE(244,575,{},eJ);var Ev=Eeb(Fub,'Image/UnclippedState',244);AE(525,212,Iub,oJ);var Iv=Eeb(Fub,'ListBox',525);AE(136,13,Gub,GJ);_.Ve=function IJ(){(HI(),GI).df((LF(),this.Zc))};_.yd=function JJ(a){var b,c;b=tJ(this,(LF(),(Fh(),Eh).Xd(a)));switch(aH(a.type)){case 1:{(HI(),GI).df(this.Zc);!!b&&sJ(this,b,true);break}case 16:{!!b&&wJ(this,b,true);break}case 32:{!!b&&wJ(this,null,false);break}case Lvb:{BJ(this);break}case 128:{c=a.keyCode|0;c=c;switch(c){case 37:AJ(this);a.stopPropagation();Eh.Yd(a);break;case 39:zJ(this);a.stopPropagation();Eh.Yd(a);break;case 38:yJ(this);a.stopPropagation();Eh.Yd(a);break;case 40:xJ(this);a.stopPropagation();Eh.Yd(a);break;case 27:CJ(this,null);a.stopPropagation();Eh.Yd(a);break;case 9:CJ(this,null);break;case 13:if(!BJ(this)){sJ(this,this.g,true);a.stopPropagation();Eh.Yd(a)}}break}}Me(this,a)};_.zd=function KJ(){Ne(this)};_.c=false;_.e=true;_.i=false;var Lv=Eeb(Fub,'MenuBar',136);AE(376,1,cwb,LJ);_.Md=function MJ(){this.a.Md()};var Jv=Eeb(Fub,'MenuBar/1',376);AE(377,1,{721:1,27:1},NJ);_.re=function OJ(a){CJ(this.a,null)};var Kv=Eeb(Fub,'MenuBar/2',377);AE(99,12,{16:1,99:1,12:1},RJ,SJ);_.Cd=function TJ(a){a?se(this,ye((LF(),this.Zc))+'-'+Hub,false):se(this,ye((LF(),this.Zc))+'-'+Hub,true);this.b=a};_.b=true;var Mv=Eeb(Fub,'MenuItem',99);AE(109,131,$vb);_.Te=function kK(){return UJ.ff(PF((LF(),this.Zc)))};_.od=function lK(){return UJ.gf((LF(),LF(),lh(this.Zc)))};_.We=function mK(){this.Xe(false)};_.Xe=function nK(a){ZJ(this)};_.Bd=function oK(){this.N&&DK(this.M,false,true)};_.qd=function pK(a){bK(this,a)};_.Ye=function qK(a,b){cK(this,a,b)};_.Ue=function rK(a){eK(this,a)};_.sd=function sK(a){fK(this,a)};_.v=false;_.w=false;_.G=false;_.H=false;_.I=0;_.J=false;_.L=false;_.N=false;_.O=0;var UJ;var Tv=Eeb(Fub,'PopupPanel',109);AE(324,1,{718:1,27:1},uK);_.Ce=function vK(a){tK()};var Ov=Eeb(Fub,'PopupPanel/1',324);AE(325,1,jwb,wK);_.Ge=function xK(a){aK(this.a,a)};var Pv=Eeb(Fub,'PopupPanel/3',325);AE(326,1,{728:1,27:1},yK);var Qv=Eeb(Fub,'PopupPanel/4',326);AE(322,132,{},EK);_.ed=function FK(){AK(this)};_.fd=function GK(){this.d=XJ(this.a);this.e=YJ(this.a);ie(this.a).style[kwb]=lvb;CK(this,(1+$wnd.Math.cos(dub))/2)};_.gd=function HK(a){CK(this,a)};_.a=null;_.b=false;_.c=false;_.d=0;_.e=-1;_.i=false;var Sv=Eeb(Fub,'PopupPanel/ResizeAnimation',322);AE(323,43,{},IK);_.md=function JK(){this.a.g=null;T(this.a,200,Date.now())};var Rv=Eeb(Fub,'PopupPanel/ResizeAnimation/1',323);AE(134,351,lwb,TK);var PK,QK,RK;var Xv=Eeb(Fub,'RootPanel',134);AE(352,1,{},YK);_.Se=function ZK(a){a.wd()&&a.zd()};var Uv=Eeb(Fub,'RootPanel/1',352);AE(216,1,mwb,$K);_.Be=function _K(a){VK()};var Vv=Eeb(Fub,'RootPanel/2',216);AE(215,134,lwb,aL);var Wv=Eeb(Fub,'RootPanel/DefaultRootPanel',215);AE(327,1,{},cL);_._e=function eL(){return bL(this)};_.$e=function dL(){return this.a};_.af=function fL(){!!this.b&&yI(this.c,this.b)};_.a=false;_.b=null;var Yv=Eeb(Fub,'SimplePanel/1',327);AE(526,212,Iub);_.yd=function mL(a){var b;b=(LF(),aH((Fh(),a).type));(b&896)!=0?Me(this,a):Me(this,a)};_.Ad=function nL(){};var hw=Eeb(Fub,'ValueBoxBase',526);AE(237,526,Iub);var _v=Eeb(Fub,'TextBoxBase',237);AE(568,237,Iub);var $v=Eeb(Fub,'TextArea',568);AE(144,237,Iub,qL);var aw=Eeb(Fub,'TextBox',144);AE(66,4,owb);var sL,tL,uL,vL;var gw=Feb(Fub,'ValueBoxBase/TextAlignment',66,yL);AE(527,66,owb,zL);var cw=Feb(Fub,'ValueBoxBase/TextAlignment/1',527,null);AE(528,66,owb,AL);var dw=Feb(Fub,'ValueBoxBase/TextAlignment/2',528,null);AE(529,66,owb,BL);var ew=Feb(Fub,'ValueBoxBase/TextAlignment/3',529,null);AE(530,66,owb,CL);var fw=Feb(Fub,'ValueBoxBase/TextAlignment/4',530,null);AE(480,479,$vb,FL);_.Re=function GL(a){return EL(this,a)};var iw=Eeb(Fub,'VerticalPanel',480);AE(515,1,{},ML);_.Qe=function NL(){return new PL(this)};_.c=0;var kw=Eeb(Fub,'WidgetCollection',515);AE(236,1,{},PL);_._e=function RL(){return OL(this)};_.$e=function QL(){return this.b<this.c.c};_.af=function SL(){if(!this.a){throw WD(new ifb)}this.c.b.Re(this.a);--this.b;this.a=null};_.b=0;var jw=Eeb(Fub,'WidgetCollection/WidgetIterator',236);AE(147,1,{147:1},ZL);_.bf=function $L(a){a.blur()};_.cf=function _L(){var a;a=Qi($doc);a.tabIndex=0;return a};_.df=function aM(a){a.focus()};var VL,WL;var ow=Eeb(pwb,'FocusImpl',147);AE(149,147,qwb,dM);_.cf=function eM(){return fM(bM?bM:(bM=cM()))};var bM;var nw=Eeb(pwb,'FocusImplStandard',149);AE(642,149,qwb,gM);_.bf=function hM(a){$wnd.setTimeout(function(){a.blur()},0)};_.df=function iM(a){$wnd.setTimeout(function(){a.focus()},0)};var mw=Eeb(pwb,'FocusImplSafari',642);AE(171,1,{171:1},jM);_.ef=function kM(){return Qi($doc)};_.ff=function lM(a){return a};_.gf=function mM(a){return Jh((Fh(),a))};_.hf=function nM(a,b){a.style['clip']=b};var rw=Eeb(pwb,'PopupImpl',171);AE(557,171,{171:1},qM);_.ef=function rM(){var a;a=(LF(),Qi($doc));if(oM){a.innerHTML='<div><\/div>';W2((ng(),mg),new xM(a))}return a};_.ff=function sM(a){return oM?Ih((Fh(),a)):a};_.gf=function uM(a){return oM?a:Jh((Fh(),a))};_.hf=function wM(a,b){a.style['clip']=b;a.style[Zub]=(zk(),zub);a.style[Zub]=''};var oM=false;var qw=Eeb(pwb,'PopupImplMozilla',557);AE(558,1,cwb,xM);_.Md=function yM(){this.a.style[kwb]=(ql(),rwb)};var pw=Eeb(pwb,'PopupImplMozilla/1',558);AE(361,1,{},DM);var vw=Eeb(nvb,'SimpleEventBus/1',361);AE(362,1,{719:1},EM);_.Md=function FM(){Jp(this.a,this.d,this.c,this.b)};var ww=Eeb(nvb,'SimpleEventBus/2',362);AE(363,1,{719:1},GM);_.Md=function HM(){Lp(this.a,this.d,this.c,this.b)};var xw=Eeb(nvb,'SimpleEventBus/3',363);AE(55,1,{55:1},XM,YM);_.jf=function ZM(){return d_(this.n.a,this.c)};_.kf=function $M(){uh(this.d,wwb+this.c+xwb+this.k+' cell '+this.b)};_.b='cs0';_.c=0;_.f=false;_.g=true;_.i=false;_.k=0;var Ew=Eeb(ywb,'Cell',55);AE(114,1,{114:1},_M);_.$c=function aN(a){var b;if(this===a){return true}if(a==null){return false}if(!Yq(a,114)){return false}b=a;return this.d==b.d&&this.a==b.a&&sqb(vfb(this.c),vfb(b.c))&&sqb(vfb(this.b),vfb(b.b))};_.ad=function bN(){return kmb(iq(dq(MB,1),Etb,1,5,[this.d,this.a,vfb(this.c),vfb(this.b)]))};_.b=0;_.c=0;var Aw=Eeb(ywb,'Cell/CellValueStyleKey',114);AE(159,109,$vb);_.lf=function uN(){return ie((SK(),WK()))};_.We=function vN(){iN(this,false)};_.Xe=function wN(a){iN(this,a)};_.xd=function xN(){var a,b;b=dN;if(b){a=b.lf();Vg(a,(LF(),this.Zc))}Le(this)};_.zd=function yN(){Ne(this);!!this.u&&ah(this.u)};_.qd=function zN(a){mN(this,a)};_.Ye=function AN(a,b){oN(this,a,b)};_.mf=function BN(a){(LF(),this.Zc).style[$ub]=a?kvb:lvb;!!this.u&&(this.u.style[$ub]=a?kvb:lvb,undefined)};_.sd=function CN(a){pN(this,a)};_.nf=function DN(){rN(this)};var cN=20000,dN,eN=-1,fN=-1;var oA=Eeb(Dwb,'Overlay',159);AE(135,159,$vb);_.lf=function GN(){EN(this);isb(ksb(Aeb(this.sg)),'Could not determine ApplicationConnection for Overlay. Overlay will be attached directly to the root panel');return ie((SK(),WK()))};var bA=Eeb(Ewb,'VOverlay',135);AE(110,135,$vb,LN,MN,NN);_.lf=function PN(){return ON(this.q)};_.nf=function RN(){KN(this)};var qy=Eeb(ywb,'SpreadsheetOverlay',110);AE(164,110,{17:1,14:1,9:1,16:1,32:1,18:1,12:1,13:1,164:1},eO);_.We=function fO(){VN(this)};_.mf=function gO(a){(LF(),this.Zc).style[$ub]=a?kvb:lvb;!!this.u&&(this.u.style[$ub]=a?kvb:lvb,undefined);this.i.style[$ub]=(a?(vm(),um):(vm(),tm)).le()};_.b=0;_.d=0;_.k=0;_.n=0;var Cw=Eeb(ywb,'CellComment',164);AE(406,1,Kwb,hO);_.se=function iO(a){pW(this.b,this.a)};var Bw=Eeb(ywb,'CellComment/1',406);AE(192,1,{192:1,3:1},jO);_.equals=function kO(a){var b;if(this===a){return true}if(a==null){return false}if(Dw!=O(a)){return false}b=a;if(this.col!=b.col){return false}if(this.row!=b.row){return false}return true};_.$c=function(a){return this.equals(a)};_.hashCode=function lO(){var a;a=this.row+((this.col+1)/2|0);return 31*(this.col+a*a)};_.ad=function(){return this.hashCode()};_.toString=function mO(){return wgb(wgb(wgb(wgb(wgb(tgb(wgb(tgb(wgb(new ygb,'r'),this.row),'c'),this.col),this.cellStyle),'tc'),this.textColor),'|'),this.value).a};_.bd=function(){return this.toString()};_.cellStyle='cs0';_.col=0;_.isPercentage=false;_.locked=false;_.needsMeasure=false;_.row=0;var Dw=Eeb(ywb,'CellData',192);AE(98,90,Lwb);_.yd=function sO(a){(Fh(),Eh).Yd(a);a.stopPropagation();if(Eh.Td(a)==1){this.c.uf(this.qf(),this.e,!this.b);oO(this,!this.b)}};_.b=false;_.d=0;_.e=0;_.f=false;_.g=0;_.i=0;_.j=0;_.k=0;_.n=0;var Yw=Eeb(ywb,'GroupingWidget',98);AE(241,98,Lwb,tO);_.pf=function uO(){var a;a=new tO(this.e,this.c);nO(this,a);return a};_.qf=function vO(){return true};_.rf=function wO(a){(LF(),this.Zc).style[Bwb]=a+(hm(),hwb);this.i=a};_.sf=function xO(a,b){this.k=9+b*18;this.g=a;(LF(),this.Zc).style[awb]=this.k+(hm(),hwb);this.Zc.style[_vb]=a+hwb};_.tf=function yO(a){(LF(),this.Zc).style[Bub]=a+(hm(),hwb);this.n=a};var Fw=Eeb(ywb,'ColumnGrouping',241);AE(643,1,{},CO);var Gw=Eeb(ywb,'CopyPasteHandlerImpl',643);AE(569,568,{17:1,27:1,14:1,182:1,9:1,61:1,73:1,16:1,18:1,12:1,13:1},GO);_.Ge=function HO(a){var b;b=a.d;bG((Fh(),b).type)==128&&EO(this,b)};var Jw=Eeb(ywb,'CopyPasteTextBox',569);AE(570,1,{},IO);_.Ld=function JO(){dV(this.a.c);ie(this.a).style[_vb]=(hm(),'-1000.0px');yj(this.b)==67?this.a.a:yj(this.b)==88&&AO(this.a.a);return false};var Hw=Eeb(ywb,'CopyPasteTextBox/1',570);AE(571,1,{},KO);_.Ld=function LO(){var a,b;a=(b=iL(this.a),b==null?'':b);BO(this.a.a,a);dV(this.a.c);return false};var Iw=Eeb(ywb,'CopyPasteTextBox/2',571);AE(547,1,Mwb,OO);_.yd=function PO(a){var b,c,d,e;switch(LF(),aH((Fh(),a).type)){case 128:e=this.d.V;switch(a.keyCode|0){case 9:Eh.Yd(a);dV(this.d.V);X_(this.d.V.a,a,'');break;case 27:W2((ng(),mg),new TY(e));}break;case 4:case Rvb:this.c=true;break;case Lvb:this.b.b=true;if(this.c){this.c=false;c=this.d.V.wb;MT(c,this.a);b=c.a;d=c.b;DX(this.d.V,b,d);wY(this.d.V,b,b,d,d);uY(this.d.V,b,b,d,d,true);Xab(this.d.W,d,b,true)}else Wfb(this.a,DV(this.d.V))||dV(this.d.V);break;case 4096:this.b.b=false;this.c=false;}};_.c=false;var Kw=Eeb(ywb,'CustomEditorEventListener',547);AE(388,684,bwb,BP);_.f=false;_.g=false;_.k=-1;_.n=-1;_.o=-1;_.p=-1;_.q=-1;_.s=-1;_.u=false;_.v=false;_.A=null;var QO;var Xw=Eeb(ywb,'FormulaBarWidget',388);AE(389,1,Mwb,DP);_.yd=function EP(a){kL(this.a.a,kJ(this.a.B));wP(this.a)};var Ow=Eeb(ywb,'FormulaBarWidget/1',389);AE(394,1,cwb,FP);_.Md=function GP(){if(this.a.f){this.a.s=-1;this.a.q=gL(this.a.e);UO(this.a)}};var Lw=Eeb(ywb,'FormulaBarWidget/10',394);AE(395,43,{},HP);_.md=function IP(){this.a.d=null};var Mw=Eeb(ywb,'FormulaBarWidget/11',395);AE(223,1,cwb,JP);_.Md=function KP(){var a;if(!this.a.f){return}gP(this.a,(a=iL(this.a.e),a==null?'':a));UO(this.a)};var Nw=Eeb(ywb,'FormulaBarWidget/12',223);AE(390,1,Mwb,LP);_.yd=function MP(a){var b,c,d;d=(LF(),aH((Fh(),a).type));if(d==512){b=a.keyCode|0;if(b==13){wP(this.a);xP(this.a,(c=iL(this.a.a),c==null?'':c));cf(this.a.a,false)}else if(b==27){jP(this.a);dV(this.a.t.V)}}else if(d==Lvb){W0(this.a.t,true);ie(this.a.a).style[Swb]=(Ml(),_vb)}else{W0(this.a.t,false);ie(this.a.a).style[Swb]=''}};var Pw=Eeb(ywb,'FormulaBarWidget/2',390);AE(391,1,Mwb,NP);_.yd=function OP(a){var b;switch(LF(),aH((Fh(),a).type)){case Lvb:if(this.a.f&&this.a.e==this.a.w){this.a.f=false;VO(this.a,this.a.j)}else{W0(this.a.t,true);this.a.c=(b=iL(this.a.j),b==null?'':b);K_(this.a.t);VO(this.a,this.a.j)}break;case 4096:if(!this.a.f){W0(this.a.t,false);J_(this.a.t,(b=iL(this.a.j),b==null?'':b))}break;case 128:aP(this.a,a);break;case Avb:case 256:WO(this.a);zP(this.a,true);lP(this.a);break;case 8:this.a.f&&zP(this.a,true);}};var Qw=Eeb(ywb,'FormulaBarWidget/3',391);AE(219,1,cwb,PP);_.Md=function QP(){var a,b,c,d;if(!this.a.f){return}d=(c=iL(this.a.e),c==null?'':c);b=gL(this.a.e);a=b>0?(xtb(b-1,d.length),d.charCodeAt(b-1)):0;this.a.g=false;a==40||a==43||a==45||a==47||a==42?(this.a.g=true):a==61&&d.length==1&&(this.a.g=true)};var Rw=Eeb(ywb,'FormulaBarWidget/4',219);AE(392,1,cwb,RP);_.Md=function SP(){var a;cf(this.a.e,true);sP(ie(this.a.e),this.a.q,0);gP(this.a,(a=iL(this.a.e),a==null?'':a));UO(this.a)};var Sw=Eeb(ywb,'FormulaBarWidget/5',392);AE(220,43,{},TP);_.md=function UP(){var a;M_(this.a.t,(a=iL(this.a.j),a==null?'':a))};var Tw=Eeb(ywb,'FormulaBarWidget/6',220);AE(221,1,cwb,VP);_.Md=function WP(){var a;M_(this.a.t,(a=iL(this.a.j),a==null?'':a))};var Uw=Eeb(ywb,'FormulaBarWidget/7',221);AE(222,1,cwb,XP);_.Md=function YP(){var a;!!this.a.e&&(a=iL(this.a.e),a==null?'':a).length==0&&(this.a.e==this.a.w?vP(this.a):uP(this.a))};var Vw=Eeb(ywb,'FormulaBarWidget/8',222);AE(393,1,cwb,ZP);_.Md=function $P(){var a,b;if(!this.a.f){b=(a=iL(this.b),a==null?'':a);if(Wfb(b.substr(0,1),'=')||Wfb(b.substr(0,1),'+')){this.a.f=true;this.a.e=this.b;gP(this.a,b);UO(this.a)}}};var Ww=Eeb(ywb,'FormulaBarWidget/9',393);AE(170,55,{55:1,170:1},_P);_.jf=function aQ(){return this.d.clientWidth|0};_.kf=function bQ(){uh(this.d,wwb+this.c+xwb+this.k+' cell '+this.b+' '+Twb)};var Zw=Eeb(ywb,'MergedCell',170);AE(71,1,{71:1,3:1},cQ);_.col1=0;_.col2=0;_.id=0;_.row1=0;_.row2=0;var $w=Eeb(ywb,'MergedRegion',71);AE(193,1,{193:1,3:1},gQ);_.col=0;_.dx=0;_.dy=0;_.height=0;_.row=0;_.type='IMAGE';_.width=0;var eQ='COMPONENT',fQ='IMAGE';var _w=Eeb(ywb,'OverlayInfo',193);AE(562,144,Iub,hQ);_.yd=function iQ(a){var b;LF();aH((Fh(),a).type)==Avb&&W2((ng(),mg),new jQ(this));b=aH(a.type);(b&896)!=0?Me(this,a):Me(this,a)};var bx=Eeb(ywb,'PasteAwareTextBox',562);AE(563,1,cwb,jQ);_.Md=function kQ(){MV(this.a.a)};var ax=Eeb(ywb,'PasteAwareTextBox/1',563);var cx=Geb(ywb,'PopupButtonClientRpc');var SA=Geb(Uwb,'Connector');AE(266,1,Xwb);_.vf=function vQ(){return lQ(this)};_.wf=function wQ(a){return oQ(this,a)};_.xf=function xQ(){return pQ(this)};_.yf=function zQ(a){sQ(this,a)};_.zf=function AQ(a){uQ(this,a)};_.J=true;var Mz=Eeb(Ewb,'AbstractConnector',266);AE(267,266,Xwb);_.xf=function QQ(){return this.Bf()};_.Af=function OQ(){return CQ(this)};_.Bf=function PQ(){return !this.M&&(this.M=this.vf()),this.M};_.Cf=function RQ(){return DQ(this)};_.Df=function SQ(){var a,b,c;if(!this.p&&(b=this.xf().qb,!!b&&b.contains('cClick'))){this.p=Ie(this.Cf(),new J5(this),(rn(),rn(),qn));(f2(),!e2&&(e2=new q2),f2(),e2).b&&(c=this.Cf(),this.B=Ie(c,new L5(this,c),(Zo(),Zo(),Yo)),this.A=Ie(c,new H5(this),(So(),So(),Ro)),this.w=Ie(c,new N5(this),(Ko(),Ko(),Jo)),undefined)}else if(!!this.p&&(a=this.xf().qb,!(!!a&&a.contains('cClick')))){CM(this.p.a);this.p=null;LQ(this)}};_.Ef=function TQ(){var a;a=this.Bf();if(a.gb!=null&&a.gb.length!=0){return true}return a.jb!=null&&a.jb.length!=0};_.yf=function UQ(a){HQ(this,a)};_.Ff=function VQ(){var a;a=this.Cf();n3((LF(),a.Zc),ye(a.od())+'-error',this.Bf().ib)};_.zf=function WQ(a){uQ(this,a);JQ(this,rQ(this))};_.o=20;_.p=null;_.q='';_.r='';_.t=false;_.v=false;_.C=0;_.D=0;var Kz=Eeb(Ewb,'AbstractComponentConnector',267);AE(155,267,Xwb);var Nz=Eeb(Ewb,'AbstractHasComponentsConnector',155);AE(330,155,{181:1,250:1,27:1,101:1,122:1,3:1},ZQ);_.Bf=function aR(){return !this.M&&(this.M=lQ(this)),this.M};_.xf=function bR(){return !this.M&&(this.M=lQ(this)),this.M};_.Cf=function cR(){return !this.F&&(this.F=new DR),this.F};_.Af=function $Q(){return new DR};_.wf=function _Q(a){return this.b};_.se=function dR(a){var b;b=(!this.F&&(this.F=new DR),this.F);hbb(this.b,b.k,b.b)};_.Be=function eR(a){var b;b=(!this.F&&(this.F=new DR),this.F);b.Vc&&ibb(this.b,b.k,b.b)};_.yf=function fR(a){var b,c;c=(!this.F&&(this.F=new DR),this.F);b=(!this.M&&(this.M=lQ(this)),this.M);(a.Kf(wwb)||a.Kf('row'))&&W2((ng(),mg),new hR(c,b));a.Kf(Ywb)&&tR(c,b.active);a.Kf('popupHeight')&&yR(c,b.popupHeight);a.Kf('popupWidth')&&zR(c,b.popupWidth);a.Kf('headerHidden')&&xR(c,b.headerHidden)};var fx=Eeb(ywb,'PopupButtonConnector',330);AE(331,1,Etb,gR);var dx=Eeb(ywb,'PopupButtonConnector/1',331);AE(332,1,cwb,hR);_.Md=function iR(){BR(this.b,this.a.row,this.a.col)};var ex=Eeb(ywb,'PopupButtonConnector/2',332);AE(357,13,Gub,nR);_.yd=function oR(a){if(nf(CY(a),this.b)){iN(this.c,false);dV(this.e)}else{Me(this,a)}};var gx=Eeb(ywb,'PopupButtonHeader',357);var hx=Geb(ywb,'PopupButtonServerRpc');AE(75,1,{75:1,3:1});_.pb=true;var ZA=Eeb(Zwb,'SharedState',75);AE(68,75,$wb);_.eb=null;_.fb=false;_.gb='';_.ib=null;_.jb=null;_.kb='';_.lb=null;_.mb=null;_.nb=null;_.ob='';var RA=Eeb(Uwb,'AbstractComponentState',68);AE(194,68,{194:1,68:1,75:1,3:1},qR);_.active=false;_.col=0;_.headerHidden=false;_.popupHeight=null;_.popupWidth=null;_.row=0;var ix=Eeb(ywb,'PopupButtonState',194);AE(70,212,{181:1,17:1,27:1,14:1,9:1,61:1,73:1,16:1,18:1,12:1,13:1,70:1},DR);_.se=function ER(a){uR(this);Dj(a.a)};_.zd=function FR(){iN(this.e,false);sR(this);Ne(this)};_.rd=function GR(a,b){Be((LF(),this.Zc),a,b);se(this.e,a,b)};_.b=0;_.k=0;var lx=Eeb(ywb,'PopupButtonWidget',70);AE(320,1,{},HR);_.Ze=function IR(a,b){var c,d,e,f,g;f=Wg(this.a.j);c=(Fh(),Eh).$d(f)+((f.offsetHeight||0)|0);d=Eh.Zd(f)+((f.offsetWidth||0)|0);e=d-a;e<gh(this.a.n)&&(e=d);g=c;g+b>fh(this.a.n)&&(g=Eh.$d(f)-b);g<ih(this.a.n)&&(g=ih(this.a.n));oN(this.a.e,e,g)};var jx=Eeb(ywb,'PopupButtonWidget/1',320);AE(321,1,cwb,JR);_.Md=function KR(){dK(this.a.e,this.a.a)};var kx=Eeb(ywb,'PopupButtonWidget/2',321);AE(242,98,Lwb,LR);_.pf=function MR(){var a;a=new LR(this.e,this.c);nO(this,a);return a};_.qf=function NR(){return false};_.rf=function OR(a){(LF(),this.Zc).style[Cwb]=a+(hm(),hwb);this.j=a};_.sf=function PR(a,b){this.g=6+b*15;this.k=a;(LF(),this.Zc).style[_vb]=this.g+(hm(),hwb);this.Zc.style[awb]=a+hwb};_.tf=function QR(a){(LF(),this.Zc).style[Aub]=a+(hm(),hwb);this.d=a};var mx=Eeb(ywb,'RowGrouping',242);AE(405,1,{},fS);_.a=0;_.b=0;var nx=Eeb(ywb,'SelectionHandler',405);AE(408,684,bwb,HS);_.qd=function IS(a){};_.sd=function JS(a){};_.c=0;_.d=0;_.e=0;_.f=0;_.g=false;_.i=false;_.j=false;_.k=0;_.n=0;_.o=false;_.p=false;_.r=0;_.s=false;_.t=0;_.u=0;_.v=0;_.w=0;_.C=false;_.G=0;_.H=0;_.I=0;_.J=0;_.K=0;_.L=0;_.N=false;_.O=0;_.P=0;_.R=false;_.S=false;_.T=false;_.U=0;_.V=0;_.Y=0;_.Z=0;_._=false;_.ab=0;var vx=Eeb(ywb,'SelectionWidget',408);AE(410,43,{},KS);_.md=function LS(){var a,b,c,d,e,f,g,h,i;zh(this.a.Q.Ac,((this.a.Q.Ac.scrollTop||0)|0)+(this.a.n/2|0));yh(this.a.Q.Ac,ph(this.a.Q.Ac)+(this.a.k/2|0));vW(this.a.Q);g=this.a.c;h=this.a.d;this.a.k<0?(g=gh(this.a.Q.Ac)+5):this.a.k>0&&(g=hh(this.a.Q.Ac)-25);this.a.n<0?(h=ih(this.a.Q.Ac)+5):this.a.n>0&&(h=fh(this.a.Q.Ac)-25);if(this.a.n!=0&&((this.a.Q.Ac.scrollTop||0)|0)==0){e=new J2;G2(e,this.a.Q.Hc);d=ih(this.a.Q.Hc)+e.d[0]+5;this.a.d>d?(h=this.a.d):(h=d)}if(this.a.k!=0&&ph(this.a.Q.Ac)==0){e=new J2;G2(e,this.a.Q.Hc);c=gh(this.a.Q.Hc)+e.d[3]+5;this.a.c>c?(g=this.a.c):(g=c)}if(this.a.C){mS(this.a,g,h)}else{i=a3(g,h);if(i){a=(Fh(),i).getAttribute(Kub)||'';MT(this.a.Q.wb,a);b=this.a.Q.wb.a;f=this.a.Q.wb.b;b!=0&&f!=0&&U_(this.a.Q.a,b,f)}}};var ox=Eeb(ywb,'SelectionWidget/1',410);AE(411,1,cwb,MS);_.Md=function NS(){qS(this.a,true);iN(this.a.$,false)};var px=Eeb(ywb,'SelectionWidget/2',411);AE(412,1,cwb,OS);_.Md=function PS(){dK(this.a.$,new QS(this));KN(this.a.$)};var rx=Eeb(ywb,'SelectionWidget/3',412);AE(413,1,{},QS);_.Ze=function RS(a,b){var c,d,e,f,g;f=0;d=0;c=0;g=0;e=0;if(!!this.a.a.X&&le(this.a.a.X)){f=ih(this.a.a.X.G);d=gh(this.a.a.X.G);g=this.a.a.X.G.clientWidth|0;c=fh(this.a.a.X.a)+5;le(this.a.a.W)&&(g+=this.a.a.W.G.clientWidth|0);le(this.a.a.b)&&(c=fh(this.a.a.b.a)+5)}else if(!!this.a.a.W&&le(this.a.a.W)){f=ih(this.a.a.W.G);d=gh(this.a.a.W.G);g=this.a.a.W.G.clientWidth|0;c=fh(this.a.a.W.a)+5;le(this.a.a.a)&&(c=fh(this.a.a.a.a)+5)}else if(!!this.a.a.a&&le(this.a.a.a)){f=ih(this.a.a.a.G);d=gh(this.a.a.a.G);g=this.a.a.a.G.clientWidth|0;c=fh(this.a.a.a.a)+5;le(this.a.a.b)&&(g+=this.a.a.b.G.clientWidth|0)}else{f=ih(this.a.a.b.G);d=gh(this.a.a.b.G);g=this.a.a.b.G.clientWidth|0;c=fh(this.a.a.b.a)+5}g>(ie(this.a.a.Q).clientWidth|0)&&(g=ie(this.a.a.Q).clientWidth|0);this.a.a.Q.Uc>0?(e=ih(this.a.a.Q.Rc)):(e=ih(this.a.a.Q.Ac));f-=b+5;d+=(g/2|0)-(a/2|0);e>f&&(f=c+5);oN(this.a.a.$,d,f)};var qx=Eeb(ywb,'SelectionWidget/3/1',413);AE(140,13,Gub,ZS);_.b=0;_.c=0;_.e=0;_.f=0;_.g=0;_.i=0;_.n=0;_.o=0;var sx=Eeb(ywb,'SelectionWidget/PaintOutlineWidget',140);AE(139,13,Gub,nT);_.b=false;_.e=0;_.f=0;_.j=0;_.n=false;_.q=0;_.r=0;_.s=0;_.t=0;_.v=false;_.C=0;_.D=0;_.H=false;_.K=0;var ux=Eeb(ywb,'SelectionWidget/SelectionOutlineWidget',139);AE(409,1,Mwb,oT);_.yd=function pT(a){var b,c,d;b=(LF(),(Fh(),Eh).Xd(a));d=aH(a.type);c=d==Rvb||d==Bvb||d==Svb||d==Tvb;if(this.a.F.C){_S(this.a,a);a.stopPropagation()}else if(d==4){if(nf(b,this.a.g)){_S(this.a,a);a.stopPropagation()}else if(nf(b,this.a.G));else if(nf(b,this.a.k));else if(nf(b,this.a.u));else nf(b,this.a.a)}else if(c){if(d==Bvb||d==Tvb){cG(this.a.B);CS(this.a.F)}else if(nf(b,this.a.g)||nf(b,this.a.i)){if(d==Rvb){dG(this.a.B);hS(this.a.F,a)}else{pS(this.a.F,a)}}else{this.a.F.p&&_S(this.a,a)}a.stopPropagation()}};var tx=Eeb(ywb,'SelectionWidget/SelectionOutlineWidget/1',409);AE(644,1,Mwb,vT);_.yd=function wT(a){var b,c,d;c=(b=a.composedPath(),Asb(qmb(b,b.length),new xT));if(jh(CY(a)).indexOf(_wb)!=-1){sX(this.c,true);return}d=(LF(),aH((Fh(),a).type));if(d==Lvb){sX(this.c,true);this.b=true}else if(d==4096&&!c){sX(this.c,false);this.b=false}else if(d==Svb){a.stopPropagation()}else if(this.c.yc){Nvb==d&&vW(this.c);sT(this,a)}else{switch(d){case Nvb:vW(this.c);break;case 256:rT(this,a);break;case 128:qT(this,a);break;case 4:Eh.Td(a)!=2&&rW(this.c,a);break;case Qvb:rW(this.c,a);break;case 2:tT(this,a);break;case 32:case 16:tW(this.c,a);break;case 64:sW(this.c);}}};_.a=false;_.b=false;var xx=Eeb(ywb,'SheetEventListener',644);AE(246,1,{},xT);var wx=Eeb(ywb,'SheetEventListener/lambda$0$Type',246);AE(572,1,{721:1,181:1,732:1,731:1,734:1,251:1,252:1,27:1},CT);_.re=function DT(a){var b;sX(this.b,false);if(this.a.f){zP(this.a,false)}else if(this.b._){w_(this.b.a,(b=iL(this.b.sb),b==null?'':b));ZO(this.a)}Dj(a.a)};_.se=function ET(a){this.b._&&(this.a.v=true);Dj(a.a)};_.ve=function FT(a){var b;if(tj(a.a)==2){b=this.b.wb;MT(b,DV(this.b));B_(this.b.a,a.a,b.a,b.b)}Dj(a.a)};_.we=function GT(a){zP(this.a,false)};var yx=Eeb(ywb,'SheetInputEventListener',572);AE(350,1,{},PT);_.a=0;_.b=0;var zx=Eeb(ywb,'SheetJsniUtil',350);AE(238,131,{17:1,14:1,9:1,16:1,32:1,18:1,12:1,13:1,238:1},WT);_.a=0;_.b=0;var Ax=Eeb(ywb,'SheetOverlay',238);AE(301,13,Gub,mU);_.b='';_.d=false;_.j=false;_.r=-1;_.s=0;_.t=0;var Ex=Eeb(ywb,'SheetTabSheet',301);AE(302,1,Mwb,nU);_.yd=function oU(a){var b,c,d,e,f;d=CY(a);f=(LF(),aH((Fh(),a).type));if(nf(d,this.a.g)){return}a.stopPropagation();if(f==1){this.a.d&&!this.a.j&&YT(this.a);eV(this.a.e.V,false);if(Zg(this.a.i,d)&&!rh(d,lvb)){if(nf(d,this.a.n)){this.a.t=0;this.a.s=0;this.a.c.style[Bwb]=this.a.t+(hm(),hwb);jU(this.a)}else if(nf(d,this.a.p)){if(this.a.s>0){--this.a.s;this.a.s==0?(this.a.t=0):(this.a.t+=bU(this.a,this.a.s));this.a.c.style[Bwb]=this.a.t+(hm(),hwb)}jU(this.a)}else if(nf(d,this.a.q)){if(this.a.s<this.a.u.length-1){this.a.t-=bU(this.a,this.a.s);this.a.c.style[Bwb]=this.a.t+(hm(),hwb);++this.a.s;jU(this.a)}}else if(nf(d,this.a.o)){e=_T(this.a);dU(this.a,e)}else nf(d,this.a.a)&&(this.a.j||O_(this.a.e))}else if(Zg(this.a.c,d)){for(c=0;c<this.a.u.length;c++){nf(this.a.u[c],d)&&c!=this.a.r&&__(this.a.e,c)}}}else if(f==2){if(!this.a.j){for(c=0;c<this.a.u.length;c++){if(nf(this.a.u[c],d)){if(c!=this.a.r){__(this.a.e,c)}else{this.a.d=true;b=this.a.u[c];this.a.b=Eh.ce(b);sj(this.a.g,this.a.b);Eh.ge(b,'');Vg(b,this.a.g);this.a.g.focus();kU(this.a)}}}}}};var Bx=Eeb(ywb,'SheetTabSheet/1',302);AE(303,1,Mwb,pU);_.yd=function qU(a){var b,c;c=(LF(),aH((Fh(),a).type));if(this.a.d){if(c==4096){YT(this.a)}else{switch(a.keyCode|0){case 13:case 9:YT(this.a);break;case 27:this.a.d=false;ah(this.a.g);b=this.a.u[this.a.r];b.style[Bub]='';hU(b,this.a.b);dV(this.a.e.V);break;default:$T(this.a);}}}a.stopPropagation()};var Cx=Eeb(ywb,'SheetTabSheet/2',303);AE(304,1,cwb,rU);_.Md=function sU(){kU(this.a)};var Dx=Eeb(ywb,'SheetTabSheet/3',304);AE(157,680,{17:1,14:1,9:1,16:1,32:1,18:1,12:1,13:1,157:1},BY);_.Qe=function DY(){return kW(this)};_.xd=function EY(){Le(this);FO(this.M);!this.M.Yc&&NH(this,this.M)};_.Bd=function FY(){iN(this.qb,false);iN(this.Yb,false);DO(this.M)};_.Re=function GY(a){return KW(this,a)};_.f=0;_.g=0;_.k=-1;_.n=-1;_.o=false;_.v=true;_.A=0;_.B=0;_.C=true;_.G=false;_.H=0;_.L=false;_.O=false;_.P=false;_.R=false;_.V=-1;_.X=0;_.Y=0;_.Z=false;_._=false;_.ab=false;_.bb=0;_.cb=0;_.db=0;_.eb=0;_.nb=null;_.ob=0;_.ub=null;_.vb=false;_.xb=0;_.yb=0;_.zb=0;_.Ab=0;_.Bb=0;_.Cb=0;_.Db=false;_.Mb=0;_.Pb=0;_.Qb=0;_.Tb=0;_.Ub=0;_.$b=false;_._b=-1;_.ac=-1;_.bc=false;_.cc=false;_.fc=false;_.gc=0;_.kc=false;_.oc=false;_.pc=0;_.qc=0;_.sc=0;_.tc=0;_.yc=false;_.Gc=false;_.Ic=false;_.Jc=false;_.Kc=false;_.Lc=0;_.Mc=0;_.Nc=0;_.Qc=0;_.Tc=false;_.Uc=0;var Zx=Eeb(ywb,'SheetWidget',157);AE(333,1,cwb,HY);_.Md=function IY(){this.a.k!=-1&&this.a.n!=-1&&HX(this.a,this.a.k,this.a.n)};var Ox=Eeb(ywb,'SheetWidget/1',333);AE(342,1,cwb,JY);_.Md=function KY(){var a,b;if(this.a.kc){return}b=this.d;while(m_(this.a.a,b)){--b}if(b==0){return}dG(ie(this.a));this.a.cc=true;this.a.ac=b;this.a._b=-1;this.a.ac<=this.a.Uc?(a=Dlb(this.a.jb,this.a.ac-1)):(a=Dlb(this.a.jc,b-this.a.db));this.a.Tb=(Fh(),Eh).$d(a);this.a.Ub=Eh.$d(a)+((a.offsetHeight||0)|0);h_(this.a.a,b)>0?JI(this.a.Zb,'Height: '+h_(this.a.a,b)+'pt'):JI(this.a.Zb,'Hide row');KX(this.a,this.b,this.c);KN(this.a.Yb);dh(this.a.Hc,ayb);dh(this.a.Wb,'row'+b);++b;while(this.d<this.a.a.O&&m_(this.a.a,b)){++b}dh(this.a.Vb,Uxb+b);NV(this.a,this.b,this.c)};_.b=0;_.c=0;_.d=0;var Fx=Eeb(ywb,'SheetWidget/10',342);AE(343,1,cwb,LY);_.Md=function MY(){var a,b;if(this.a.L){return}b=this.d;while(k_(this.a.a,b)){--b}if(b<1){return}dG(ie(this.a));this.a.bc=true;this.a._b=b;this.a.ac=-1;this.a._b<=this.a.ob?(a=Dlb(this.a.ib,this.a._b-1)):(a=Dlb(this.a.K,b-this.a.bb));this.a.Tb=(Fh(),Eh).Zd(a);this.a.Ub=Eh.Zd(a)+((a.offsetWidth||0)|0);d_(this.a.a,b)>0?JI(this.a.Zb,'Width: '+d_(this.a.a,b)+hwb):JI(this.a.Zb,Kxb);KX(this.a,this.b,this.c);KN(this.a.Yb);dh(this.a.Hc,byb);dh(this.a.Wb,wwb+b);++b;while(this.d<=this.a.a.g&&k_(this.a.a,b)){++b}dh(this.a.Vb,Rxb+b);IV(this.a,this.b,this.c)};_.b=0;_.c=0;_.d=0;var Gx=Eeb(ywb,'SheetWidget/11',343);AE(344,1,{},NY);_.Ze=function OY(a,b){vX(this.a,a,b,this.b)};var Hx=Eeb(ywb,'SheetWidget/12',344);AE(133,1,cwb,PY);_.Md=function QY(){var a,b;b=(a=iL(this.a.sb),a==null?'':a);CW(this.a,b);this.b&&A_(this.a.a,b)};_.b=false;var Ix=Eeb(ywb,'SheetWidget/13',133);AE(346,1,cwb,RY);_.Md=function SY(){cf(this.a.sb,true);Vfb(this.b,'%')?jL(this.a.sb,this.b.length-1,0):jL(this.a.sb,this.b.length,0)};var Jx=Eeb(ywb,'SheetWidget/14',346);AE(93,1,cwb,TY);_.Md=function UY(){this.a.Ac.focus()};var Kx=Eeb(ywb,'SheetWidget/15',93);AE(347,1,Mwb,VY);_.yd=function WY(a){p_(this.a.a,true,this.b)};_.b=0;var Lx=Eeb(ywb,'SheetWidget/16',347);AE(348,1,Mwb,XY);_.yd=function YY(a){p_(this.a.a,false,this.b)};_.b=0;var Mx=Eeb(ywb,'SheetWidget/17',348);AE(349,1,cwb,ZY);_.Md=function $Y(){var a,b,c,d,e,f,g,h,i,j;g=this.a.Pc.clientWidth|0;e=this.a.hc.clientWidth|0;j=g+e;if(e==0&&!dW(this.a.F)){j-=1}else if(e!=0&&!dW(this.a.F));else e!=0&&dW(this.a.F)&&(j+=2);this.a.F.style[Bub]=j+(hm(),hwb);f=this.a.Pc.clientHeight|0;b=this.a.I.clientHeight|0;c=f+b;if(b==0&&!dW(this.a.ec));else b!=0&&!dW(this.a.ec)?(c+=1):b!=0&&dW(this.a.ec)&&(c+=2);this.a.ec.style[Aub]=c+hwb;a=this.a.c.clientHeight|0;i=this.a.Rc.clientWidth|0;h=i+j;d=a+c;dW(this.a.F)&&(h+=1);dW(this.a.ec)&&(d+=1);this.a.I.style[Bub]=h+hwb;this.a.D.style[Bub]=h+hwb;this.a.hc.style[Aub]=d+hwb;this.a.dc.style[Aub]=d+hwb};var Nx=Eeb(ywb,'SheetWidget/18',349);AE(334,1,cwb,_Y);_.Md=function aZ(){var b,c,d,e,f;if(this.a._){return}e=this.a.Hb;if(!Jh((Fh(),e))){return}f=jh(Jh(e)).indexOf(mxb)!=-1;b=e.getAttribute(Kub)||'';if(Wfb(b.substr(0,20),Jwb)){return}b.indexOf(vwb)!=-1&&(b=igb(b,0,b.indexOf(' cell')));if(Wfb(b,oxb)){e=wj(this.a.Gb);b=e.getAttribute(Kub)||''}else if(_F(this.a.Gb)==16&&f){MT(this.a.wb,b);try{c=this.a.wb.a;d=this.a.wb.b;if(c==0||d==0){return}e=xV(this.a,r1(this.a.Gb),s1(this.a.Gb),hV(this.a,c,d)).d;b=e.getAttribute(Kub)||'';b.indexOf(vwb)!=-1&&(b=igb(b,0,b.indexOf(' cell')))}catch(a){a=VD(a);if(Yq(a,81)){hsb(this.a.U,'SheetWidget:onSheetMouseOverOrOut: JSE while trying to find real event target, className:'+b)}else if(Yq(a,31)){isb(this.a.U,'SheetWidget:onSheetMouseOverOrOut: IOOBE while trying to find correct event target, className:'+b)}else throw WD(a)}}MT(this.a.wb,b);if(Wfb(b,swb)||Wfb(b,twb)||Wfb(b,this.a.j)||DU(this.a,b)||EU(this.a,b)){$X(this.a,this.a.Gb,e)}else{if(!this.a.o&&this.a.q.N&&b.indexOf('comment')==-1){cG(this.a.Ac);VN(this.a.q);this.a.j=null;this.a.k=-1;this.a.n=-1}}if(f&&!!this.a.s&&Hjb(this.a.s,b)){aY(this.a,_F(this.a.Gb),this.a.wb.a,this.a.wb.b,Gjb(this.a.s,b));return}else $J(this.a.qb)&&iN(this.a.qb,false)};var Px=Eeb(ywb,'SheetWidget/2',334);AE(335,43,{},bZ);_.md=function cZ(){var a,b,c,d,e;zh(this.a.Ac,((this.a.Ac.scrollTop||0)|0)+(this.a.Y/2|0));yh(this.a.Ac,ph(this.a.Ac)+(this.a.X/2|0));vW(this.a);d=this.a.A;e=this.a.B;this.a.X<0?(d=gh(this.a.Ac)+5):this.a.X>0&&(d=hh(this.a.Ac)-25);this.a.Y<0?(e=ih(this.a.Ac)+5):this.a.Y>0&&(e=fh(this.a.Ac)-25);if(this.a.Y!=0&&((this.a.Ac.scrollTop||0)|0)==0){c=new J2;G2(c,this.a.Hc);b=ih(this.a.Hc)+c.d[0]+5;this.a.B>b?(e=this.a.B):(e=b)}if(this.a.X!=0&&ph(this.a.Ac)==0){c=new J2;G2(c,this.a.Hc);a=gh(this.a.Hc)+c.d[3]+5;this.a.A>a?(d=this.a.A):(d=a)}OV(this.a,d,e)};var Qx=Eeb(ywb,'SheetWidget/3',335);AE(336,43,{},fZ);_.md=function gZ(){dZ(this,this.a.db,this.a.zb,this.a.bb,this.a.xb);dZ(this,0,this.a.Uc,0,this.a.ob);dZ(this,0,this.a.Uc,this.a.bb,this.a.xb);dZ(this,this.a.db,this.a.zb,0,this.a.ob);eZ(this,this.a.db,this.a.zb,this.a.bb,this.a.xb);eZ(this,0,this.a.Uc,0,this.a.ob);eZ(this,0,this.a.Uc,this.a.bb,this.a.xb);eZ(this,this.a.db,this.a.zb,0,this.a.ob)};var Rx=Eeb(ywb,'SheetWidget/4',336);AE(337,1,cwb,hZ);_.Md=function iZ(){this.a.Db&&uW(this.a)};var Sx=Eeb(ywb,'SheetWidget/5',337);AE(338,1,cwb,jZ);_.Md=function kZ(){TW(this.a)};var Tx=Eeb(ywb,'SheetWidget/6',338);AE(339,1,cwb,lZ);_.Md=function mZ(){this.a.Mb==0&&Xg(this.a.Nb)&&(this.a.Mb=(this.a.Nb.offsetWidth||0)|0);yY(this.a);bY(this.a);eY(this.a);_W(this.a,this.b,this.c);ZW(this.a);T_(this.a.a,this.a.db,this.a.zb,this.a.bb,this.a.xb);VW(this.a);$W(this.a);dY(this.a);tY(this.a);UW(this.a);JW(this.a,false);this.a.Db=true};_.b=0;_.c=0;var Ux=Eeb(ywb,'SheetWidget/7',339);AE(340,1,jwb,oZ);_.Ge=function pZ(a){var b,c,d,e,f,g;c=_F(a.d);f=a.d;g=CY(f);b='';!!g&&g.nodeType==1&&(b=(Fh(),g).getAttribute(Kub)||'');Zg(ie(this.a),CY(f))&&(Rvb==c||4==c||8==c||2==c||1==c)&&sX(this.a,true);if((this.a.bc||this.a.cc)&&c==64){if(this.a._b!=-1){IV(this.a,r1(f),s1(f))}else if(this.a.ac!=-1){NV(this.a,r1(f),s1(f))}else{this.a.bc=false;this.a.cc=false}a.a=true}else if(c==8&&nZ(this,g)){if(this.a.bc||this.a.cc||Wfb(b,cyb)||Wfb(b,dyb)){this.a.L=true;this.a.kc=true;this.a.bc=false;this.a.cc=false;HT(this.a.Xb);iN(this.a.Yb,false);a.a=true;if(this.a._b!=-1){sh(this.a.Hc,byb);PX(this.a,r1(a.d))}else if(this.a.ac!=-1){sh(this.a.Hc,ayb);RX(this.a,s1(a.d))}}}else{if(Zg(ie(this.a),g)){if(c==1){d=LT(b);if(d==1||d==2){e=NT(b);d==1?P_(this.a.a,e,!!(Fh(),f).shiftKey,!!f.metaKey||!!f.ctrlKey):C_(this.a.a,e,!!(Fh(),f).shiftKey,!!f.metaKey||!!f.ctrlKey);a.a=true;this.a.Ac.focus()}}else if(c==4&&nZ(this,g)){if(Wfb(b,cyb)){b=jh(Jh((Fh(),g)));d=LT(b);if(d==1){d=NT(b);this.a.kc=false;NX(this.a,d-1,r1(f),s1(f))}else if(d==2){d=NT(b);this.a.L=false;LX(this.a,d-1,r1(f),s1(f))}a.a=true}else if(Wfb(b,dyb)){b=jh(Jh((Fh(),g)));d=LT(b);if(d==1){d=NT(b);this.a.kc=false;NX(this.a,d,r1(f),s1(f))}else if(d==2){d=NT(b);this.a.L=false;LX(this.a,d,r1(f),s1(f))}a.a=true}}else if(c==2&&nZ(this,g)){if(Wfb(b,cyb)){b=jh(Jh((Fh(),g)));d=LT(b);if(d==1){d=NT(b)-1;while(m_(this.a.a,d)&&d>0){--d}d>0&&Q_(this.a.a,d)}else if(d==2){d=NT(b)-1;while(k_(this.a.a,d)&&d>0){--d}d>0&&D_(this.a.a,d)}a.a=true}else if(Wfb(b,dyb)){b=jh(Jh((Fh(),g)));d=LT(b);if(d==1){d=NT(b);while(m_(this.a.a,d)&&d>0){--d}d>0&&Q_(this.a.a,d)}else if(d==2){d=NT(b);while(k_(this.a.a,d)&&d>0){--d}d>0&&D_(this.a.a,d)}a.a=true}}}}};var Vx=Eeb(ywb,'SheetWidget/8',340);AE(341,1,eyb,qZ);_.te=function rZ(a){var b,c,d,e;if(this.a.a.R){e=CY(a.a);b=(Fh(),e).getAttribute(Kub)||'';c=LT(b);if(c==1||c==2){d=NT(b);c==1?R_(this.a.a,a.a,d):E_(this.a.a,a.a,d)}!!a.a&&Cj(a.a);Dj(a.a)}};var Wx=Eeb(ywb,'SheetWidget/9',341);AE(54,1,{54:1},sZ);_.$c=function tZ(a){if(a==null||!Yq(a,54)){return false}return this.b==a.b&&this.a==a.a};_.ad=function uZ(){var a;a=this.b+((this.a+1)/2|0);return 31*(this.a+a*a)};_.a=0;_.b=0;var Xx=Eeb(ywb,'SheetWidget/CellCoord',54);AE(345,1,{},vZ);_.hd=function wZ(a){lW(this.a)};var Yx=Eeb(ywb,'SheetWidget/lambda$0$Type',345);AE(145,13,{17:1,14:1,9:1,16:1,18:1,12:1,13:1,145:1},xZ);_.b=false;var _x=Eeb(ywb,'Slot',145);AE(546,1,gyb,zZ);_.Ae=function AZ(a){yZ(this.b,this.a,a)};var $x=Eeb(ywb,'Slot/lambda$0$Type',546);AE(125,1,hyb);_.bd=function CZ(){return 'Action [owner='+this.g+', iconUrl='+null+', caption='+this.f+']'};_.f='';var Pz=Eeb(Ewb,'Action',125);AE(247,125,hyb,EZ);_.Md=function FZ(){DZ(this)};_.a='';_.d=0;var by=Eeb(ywb,'SpreadsheetAction',247);AE(195,1,{195:1,3:1},GZ);_.type=0;var ay=Eeb(ywb,'SpreadsheetActionDetails',195);var cy=Geb(ywb,'SpreadsheetClientRpc');AE(277,155,Xwb,RZ);_.Bf=function VZ(){return !this.M&&(this.M=new O1),this.M};_.xf=function WZ(){return !this.M&&(this.M=new O1),this.M};_.Cf=function XZ(){return !this.F&&(this.F=new q1),this.F};_.vf=function SZ(){return new O1};_.Af=function TZ(){return new q1};_.wf=function UZ(a){return this.k};_.yf=function YZ(a){LZ(this,a)};var my=Eeb(ywb,'SpreadsheetConnector',277);AE(278,1,{726:1,3:1},h$);var fy=Eeb(ywb,'SpreadsheetConnector/1',278);AE(279,1,{},j$);var ey=Eeb(ywb,'SpreadsheetConnector/1/1',279);AE(280,1,{},l$);_.hd=function m$(a){k$(this.a)};var dy=Eeb(ywb,'SpreadsheetConnector/1/1/lambda$0$Type',280);AE(281,1,{},q$);var gy=Eeb(ywb,'SpreadsheetConnector/4',281);AE(282,1,eyb,r$);_.te=function s$(a){!!a.a&&Cj(a.a);Dj(a.a)};var hy=Eeb(ywb,'SpreadsheetConnector/5',282);AE(284,1,cwb,t$);_.Md=function u$(){KZ(this.a,this.b)};var iy=Eeb(ywb,'SpreadsheetConnector/6',284);AE(286,1,{},x$);var jy=Eeb(ywb,'SpreadsheetConnector/7',286);AE(283,1,mwb,y$);_.Be=function z$(a){Tab(this.a.k.s,iq(dq(MB,1),Etb,1,5,[]))};var ky=Eeb(ywb,'SpreadsheetConnector/lambda$0$Type',283);AE(285,1,{},A$);_.Gf=function B$(a,b){JZ(this.a,this.b,a,b)};var ly=Eeb(ywb,'SpreadsheetConnector/lambda$1$Type',285);AE(645,1,{736:1,716:1,715:1,249:1,27:1},C$);_.xe=function D$(a){!!this.b&&pb(this.b)};_.ye=function E$(a){!!this.b&&pb(this.b)};_.ze=function F$(a){var b,c,d,e,f,g,h,i,j,k,l;e=a.a;j=(Fh(),Eh).Xd(e);!j&&(j=ie(this.a));d=j;k=e.targetTouches;l=null;!!k&&k.length>0&&(l=k[0]);h=l?_h(l.screenX||0):_h(e.screenX||0);i=!l?_h(e.screenY||0):_h(l.screenY||0);b=l?_h(l.clientX||0):_h(e.clientX||0);c=l?_h(l.clientY||0):_h(e.clientY||0);f=l?l.target:Eh.Xd(e);g=f?f:null;this.b=new G$(h,i,b,c,g,d);qb(this.b,750)};var oy=Eeb(ywb,'SpreadsheetContextMenuPolyfill',645);AE(646,43,{},G$);_.md=function H$(){var a;a=Wi($doc,this.e,this.f,this.a,this.b,this.d);eh(this.c,a)};_.a=0;_.b=0;_.e=0;_.f=0;var ny=Eeb(ywb,'SpreadsheetContextMenuPolyfill/1',646);AE(369,135,$vb);_.e=0;_.g=0;var Zz=Eeb(Ewb,'VContextMenu',369);AE(370,369,$vb,N$);_.lf=function O$(){return ON(this.a)};_.nf=function P$(){rN(this);SN((LF(),this.Zc))};var py=Eeb(ywb,'SpreadsheetOverlay/SpreadsheetContextMenu',370);var ry=Geb(ywb,'SpreadsheetServerRpc');var Iy=Geb(qyb,'Focusable');AE(28,684,{17:1,14:1,9:1,16:1,179:1,18:1,12:1,13:1,28:1},q1);_.uf=function t1(a,b,c){Jbb(this.W,a,b,c)};_.qd=function u1(a){y0(this,a)};_.sd=function v1(a){c1(this,a)};_.a=0;_.c=false;_.d=false;_.g=0;_.i=0;_.n=false;_.p=0;_.q=0;_.s=false;_.A=false;_.C=false;_.D=true;_.F=true;_.K=true;_.L=0;_.O=0;_.P=false;_.T=false;_.X=0;_.Y=0;_.Z=false;var Ay=Eeb(ywb,'SpreadsheetWidget',28);AE(294,1,Etb,y1);var sy=Eeb(ywb,'SpreadsheetWidget/1',294);AE(295,43,{},z1);_.md=function A1(){};var ty=Eeb(ywb,'SpreadsheetWidget/2',295);AE(296,1,gyb,B1);_.Ae=function C1(a){if(a.a){CX(this.b.V,this.a,this.c)}else{this.a=ph(this.b.V.Ac);this.c=(this.b.V.Ac.scrollTop||0)|0}};_.a=0;_.c=0;var uy=Eeb(ywb,'SpreadsheetWidget/3',296);AE(297,1,cwb,D1);_.Md=function E1(){CX(this.a.V,this.b,this.c)};_.b=0;_.c=0;var vy=Eeb(ywb,'SpreadsheetWidget/4',297);AE(298,1,cwb,F1);_.Md=function G1(){var a,b,c;X$(this.a);!this.b?(this.a.J=null):(this.a.J=new Llb(this.b));if(this.b){b=0;while(b<this.b.a.length){c=Dlb(this.b,b);vU(this.a.V,c);a=hV(this.a.V,c.col1,c.row1);!!a&&PM(a,a.p,a.b,a.o,false);++b}GU(this.a.V)}f1(this.a,this.a.B)};var wy=Eeb(ywb,'SpreadsheetWidget/5',298);AE(299,43,{},H1);_.md=function I1(){this.a.K=true};var xy=Eeb(ywb,'SpreadsheetWidget/6',299);AE(199,1,cwb,J1);_.Md=function K1(){if(!this.a.c){Yab(this.a.W,this.a.V.tc,this.a.V.sc,this.c);U$(this.a,this.c,this.b)}};_.b=false;var yy=Eeb(ywb,'SpreadsheetWidget/7',199);AE(300,1,cwb,L1);_.Md=function M1(){o_(this.a,this.f,this.i,this.j,this.b,this.d,this.c,this.e,this.g)};_.b=0;_.c=0;_.d=0;_.e=0;_.g=false;_.i=0;_.j=0;var zy=Eeb(ywb,'SpreadsheetWidget/lambda$0$Type',300);AE(239,1,{239:1,3:1},N1);_.collapsed=false;_.endIndex=0;_.level=0;_.startIndex=0;_.uniqueIndex=0;var By=Eeb(tyb,'GroupingData',239);AE(126,68,{68:1,75:1,126:1,3:1});var dB=Eeb(uyb,'TabIndexState',126);AE(49,126,{49:1,68:1,75:1,126:1,3:1},O1);_.d=null;_.f=false;_.g=0;_.j=0;_.k=200;_.n=null;_.p=null;_.q=0;_.r=0;_.s=true;_.t=true;_.u=false;_.v=null;_.w=null;_.B=0;_.G='Invalid formula';_.H=true;_.I=true;_.J=null;_.K=null;_.O=false;_.P=200;_.R=false;_.S=0;_.U=null;_.V=0;_.W=1;_.X=null;_.Y=false;_.Z=null;_.$=false;_.ab=0;_.cb=false;_.db=false;var Cy=Eeb(tyb,'SpreadsheetState',49);var P1;AE(253,1,{},Z1);var X1;var Dy=Eeb(qyb,'ApplicationConfiguration',253);AE(213,1,{14:1,213:1},b2);_.vd=function c2(a){};_.b=null;var Ey=Eeb(qyb,'ApplicationConnection',213);AE(46,1,{},q2);_.b=false;var d2=null,e2;var Fy=Eeb(qyb,'BrowserInfo',46);AE(118,1,{},v2);var Gy=Eeb(qyb,'ComputedStyle',118);AE(683,682,{});var Oy=Eeb(Cyb,'AbstractServerConnectorEvent',683);var y2;AE(485,1,{},B2);var Hy=Eeb(qyb,'ConnectorMap',485);AE(84,1,{},J2);_.b=-1;_.e=-1;var Ky=Eeb(qyb,'MeasuredSize',84);AE(532,1,{},M2);var Jy=Eeb(qyb,'MeasuredSize/MeasureResult',532);AE(387,1,{},R2);var Ly=Eeb(qyb,'ResourceLoader',387);AE(414,354,{},X2);_.a=0;var Ny=Eeb(qyb,'VSchedulerImpl',414);AE(415,1,cwb,Y2);_.Md=function Z2(){this.a.a--};var My=Eeb(qyb,'VSchedulerImpl/lambda$0$Type',415);var o3;AE(198,683,{},w3);_.me=function x3(a){a.yf(this)};_.oe=function z3(){return r3};_.ne=function y3(){return r3};_.Kf=function A3(a){return u3(this,a)};_.b=false;var r3;var Py=Eeb(Cyb,'StateChangeEvent',198);AE(660,1,{},C3);var Qy=Eeb(Cyb,'URLReference_Serializer',660);AE(167,1,{167:1});_.d=0;var Ry=Eeb(Fyb,'AsyncBundleLoader',167);AE(378,1,{});var F3;var wz=Eeb(Fyb,'ConnectorBundleLoader',378);AE(379,1,Kwb,L3);_.se=function M3(a){Oe(this.a.e)};var Sy=Eeb(Fyb,'ConnectorBundleLoader/lambda$0$Type',379);AE(380,1,Gyb,N3);_.ze=function O3(a){Oe(this.a.e)};var Ty=Eeb(Fyb,'ConnectorBundleLoader/lambda$1$Type',380);AE(78,378,{},P3);var vz=Eeb(Fyb,'ConnectorBundleLoaderXXImpl',78);AE(486,167,{167:1},Q3);var uz=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1',486);AE(487,1,{},W3);var tz=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1',487);AE(488,1,Hzb,X3);_.Lf=function Y3(a,b){return new O6};var ez=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/1',488);AE(497,1,Hzb,Z3);_.Lf=function $3(a,b){return new Vdb};var Uy=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/10',497);AE(498,1,Hzb,_3);_.Lf=function a4(a,b){return new Wdb};var Vy=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/11',498);AE(704,1,Hzb);_.Lf=function b4(a,b){var c,d,e,f,g;c=[];for(e=b,f=0,g=e.length;f<g;++f){d=e[f];c.push(d)}return this.Mf(a,c)};var xz=Eeb(Fyb,'JsniInvoker',704);AE(499,704,Hzb,c4);_.Mf=function d4(a,b){a.Ff();return null};var Wy=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/12',499);AE(500,704,Hzb,e4);_.Mf=function f4(a,b){a.Df();return null};var Xy=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/13',500);AE(501,704,Hzb,g4);_.Mf=function h4(a,b){a.Of();return null};var Yy=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/14',501);AE(502,704,Hzb,i4);_.Mf=function j4(a,b){a.Pf();return null};var Zy=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/15',502);AE(503,704,Hzb,k4);_.Mf=function l4(a,b){a.Qf();return null};var $y=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/16',503);AE(504,1,Hzb,m4);_.Lf=function n4(a,b){return new o4};var az=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/17',504);AE(505,1,{},o4);var _y=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/17/1',505);AE(506,1,Hzb,p4);_.Lf=function q4(a,b){return new C3};var bz=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/18',506);AE(507,1,Hzb,r4);_.Lf=function s4(a,b){return new t4};var dz=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/19',507);AE(508,1,{},t4);var cz=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/19/1',508);AE(489,1,Hzb,u4);_.Lf=function v4(a,b){return new c7};var lz=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/2',489);AE(509,1,Hzb,w4);_.Lf=function x4(a,b){return new y4};var gz=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/20',509);AE(510,1,{},y4);var fz=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/20/1',510);AE(511,1,Hzb,z4);_.Lf=function A4(a,b){return new B4};var iz=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/21',511);AE(512,1,{},B4);var hz=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/21/1',512);AE(513,1,Hzb,C4);_.Lf=function D4(a,b){return new E4};var kz=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/22',513);AE(514,1,{},E4);var jz=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/22/1',514);AE(490,1,Hzb,F4);_.Lf=function G4(a,b){return new Fdb};var mz=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/3',490);AE(491,1,Hzb,H4);_.Lf=function I4(a,b){return new Ndb};var nz=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/4',491);AE(492,1,Hzb,J4);_.Lf=function K4(a,b){return new Odb};var oz=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/5',492);AE(493,1,Hzb,L4);_.Lf=function M4(a,b){return new Pdb};var pz=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/6',493);AE(494,1,Hzb,N4);_.Lf=function O4(a,b){return new Qdb};var qz=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/7',494);AE(495,1,Hzb,P4);_.Lf=function Q4(a,b){return new Sdb};var rz=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/8',495);AE(496,1,Hzb,R4);_.Lf=function S4(a,b){return new Udb};var sz=Eeb(Fyb,'ConnectorBundleLoaderXXImpl/1/1/9',496);AE(72,1,{72:1},V4);_.$c=function W4(a){var b;if(a===this){return true}else if(Yq(a,72)){b=a;return Wfb(b.b.b+'.'+b.a,this.b.b+'.'+this.a)}else{return false}};_.ad=function X4(){return Yfb(this.b.b+'.'+this.a)};_.bd=function Y4(){return this.b.b+'.'+this.a};var yz=Eeb(Fyb,'Method',72);AE(79,21,{79:1,3:1,21:1,19:1},Z4);var zz=Eeb(Fyb,'NoDataException',79);AE(83,1,{83:1},_4,a5);var Az=Eeb(Fyb,'OnStateChangeMethod',83);AE(5,1,{5:1},c5,d5);_.$c=function f5(a){var b;if(a===this){return true}else if(Yq(a,5)){b=a;return Wfb(b.b,this.b)}else{return false}};_.ad=function g5(){return Yfb(this.b)};_.bd=function h5(){return this.b};var Cz=Eeb(Fyb,'Type',5);AE(417,1,{},q5);_.Nf=function w5(a,b,c){this.c[yeb(a),a.k][b]=c};var Bz=Eeb(Fyb,'TypeDataStore',417);AE(382,1,Izb);_.te=function z5(a){qQ(this.c,this.b)&&!!a.a&&Cj(a.a)};_.ve=function A5(a){this.d=b3(a.a);this.g=false;this.e=aG(this.f)};_.we=function B5(a){qQ(this.c,this.b)&&this.g&&!!this.d&&b3(a.a)==this.d&&R5(this,a.a);this.g=false;this.d=null};_.g=false;var Ez=Eeb(Ewb,'AbstractClickEventHandler',382);AE(386,1,jwb,C5);_.Ge=function D5(a){y5(this.a,a)};var Dz=Eeb(Ewb,'AbstractClickEventHandler/lambda$0$Type',386);AE(288,43,{},E5);_.md=function F5(){this.a.wf(TA).vg();_2();this.a.t=true};var Fz=Eeb(Ewb,'AbstractComponentConnector/2',288);AE(290,1,{715:1,27:1},H5);_.ye=function I5(a){G5(this,a)&&BQ(this.a)};var Gz=Eeb(Ewb,'AbstractComponentConnector/3',290);AE(287,1,eyb,J5);_.te=function K5(a){EQ(this.a,a)};var Hz=Eeb(Ewb,'AbstractComponentConnector/lambda$0$Type',287);AE(289,1,Gyb,L5);_.ze=function M5(a){FQ(this.a,this.b,a)};var Iz=Eeb(Ewb,'AbstractComponentConnector/lambda$1$Type',289);AE(291,1,{716:1,27:1},N5);_.xe=function O5(a){GQ(this.a,a)};var Jz=Eeb(Ewb,'AbstractComponentConnector/lambda$2$Type',291);AE(292,198,{},P5);_.Kf=function Q5(a){return true};var Lz=Eeb(Ewb,'AbstractConnector/FullStateChangeEvent',292);AE(381,155,Xwb);var Oz=Eeb(Ewb,'AbstractSingleComponentContainerConnector',381);AE(218,382,Izb);var Qz=Eeb(Ewb,'ClickEventHandler',218);AE(662,1,jwb,g6);_.Ge=function j6(a){var b;b=_F(a.d);if(this.r){a.a=true;b==Rvb&&Y5(this,a.d);return}switch(b){case Svb:if(!a.a){a6(this,a.d);this.j&&(a.a=true)}break;case Bvb:case Tvb:if(!a.a){this.j&&(a.a=true);_5(this)}break;case 64:this.j&&(a.a=true);break;default:bsb(ksb((yeb(Tz),Tz.k)),'Non touch event:'+Bj(a.d));a.a=true;}};_.a=0;_.c=0;_.e=0;_.f=0;_.j=false;_.k=0;_.n=0;_.o=0;_.r=false;var S5=false,T5;var Tz=Eeb(Ewb,'TouchScrollDelegate',662);AE(664,132,{},l6);_.cd=function m6(a){return 1+$wnd.Math.pow(a-1,3)};_.dd=function n6(){var a;a=dr(this.b-this.a.e);this.a.c-=a;$5(this.a);this.a.r=false};_.ed=function o6(){k6(this,1+$wnd.Math.pow(0,3));this.a.r=false;c6(this.a)};_.gd=function p6(a){k6(this,a)};_.b=0;_.c=0;var Rz=Eeb(Ewb,'TouchScrollDelegate/1',664);AE(663,1,Gyb,t6);_.ze=function u6(a){b6(this.a,a)};_.b=false;var Sz=Eeb(Ewb,'TouchScrollDelegate/TouchScrollHandler',663);AE(373,1,mwb,v6);_.Be=function w6(a){var b;b=c3();if(!!this.a.d&&(!b||Zg(ie(this.a.f),b)||nf((SK(),$doc.body),b))){this.a.d.focus();this.a.d=null}};var Uz=Eeb(Ewb,'VContextMenu/1',373);AE(371,136,{730:1,729:1,17:1,27:1,14:1,9:1,16:1,18:1,12:1,13:1},y6);_.Ve=function z6(){(XL(),XL(),VL).df((LF(),this.Zc))};_.ue=function A6(a){yj(a.a)==27&&iN(this.a,false)};var Vz=Eeb(Ewb,'VContextMenu/CMenuBar',371);AE(372,1,cwb,B6);_.Md=function C6(){I$(this.a)};var Wz=Eeb(Ewb,'VContextMenu/lambda$0$Type',372);AE(375,1,{},D6);_.Ze=function E6(a,b){J$(this.a,a,b)};var Xz=Eeb(Ewb,'VContextMenu/lambda$1$Type',375);AE(374,1,cwb,F6);_.Md=function G6(){K$(this.a)};var Yz=Eeb(Ewb,'VContextMenu/lambda$2$Type',374);AE(119,146,Gub,H6);_.yd=function I6(a){Me(this,a);LF();if(aH((Fh(),a).type)==Mvb){T2(this);a.stopPropagation();return}};_.sd=function J6(a){(LF(),this.Zc).style[Bub]=a;a==null||a.length==0?Be(this.Zc,Lzb,true):Be(this.Zc,Lzb,false)};var $z=Eeb(Ewb,'VLabel',119);AE(94,1,{},L6);_.b=0;var aA=Eeb(Ewb,'VLazyExecutor',94);AE(407,43,{},M6);_.md=function N6(){this.a.c=null;this.a.a.Md()};var _z=Eeb(Ewb,'VLazyExecutor/1',407);AE(235,131,{17:1,718:1,27:1,14:1,9:1,61:1,16:1,32:1,18:1,12:1,13:1,235:1},O6);_.Ad=function P6(){if(((LF(),this.Zc).ownerDocument.body.className||'').indexOf('v-generated-body')==-1){this.a=new T6(this);qb(this.a,Qub)}};_.Ce=function Q6(a){HG();qj($doc).clientWidth|0;qj($doc).clientHeight|0};_.Bd=function R6(){if(this.a){pb(this.a);this.a=null}};_.Dd=function S6(a){Ah((LF(),this.Zc),a)};var eA=Eeb(Ewb,'VUI',235);AE(549,43,{},T6);_.md=function U6(){HG();qj($doc).clientWidth|0;qj($doc).clientHeight|0;qb(this.a.a,Qub)};var cA=Eeb(Ewb,'VUI/1',549);AE(548,1,cwb,V6);_.Md=function W6(){HG();qj($doc).clientWidth|0;qj($doc).clientHeight|0};var dA=Eeb(Ewb,'VUI/lambda$0$Type',548);AE(137,381,{27:1,101:1,122:1,137:1,3:1},c7);_.Bf=function d7(){return !this.M&&(this.M=lQ(this)),this.M};_.xf=function e7(){return !this.M&&(this.M=lQ(this)),this.M};_.Cf=function f7(){return _6(this)};_.Ef=function g7(){return true};_.yf=function h7(a){var b;HQ(this,a);if(a.Kf(Fzb)){null.vg((!this.M&&(this.M=lQ(this)),this.M).q.a);null.vg((!this.M&&(this.M=lQ(this)),this.M).q.c);null.vg((!this.M&&(this.M=lQ(this)),this.M).q.d);null.vg((!this.M&&(this.M=lQ(this)),this.M).q.e);null.vg((!this.M&&(this.M=lQ(this)),this.M).q.b)}if(a.Kf(fzb)){null.vg((!this.M&&(this.M=lQ(this)),this.M).c.a);null.vg((!this.M&&(this.M=lQ(this)),this.M).c.b);null.vg((!this.M&&(this.M=lQ(this)),this.M).c.c)}a.Kf(pzb)&&Y6(this);if(a.Kf('pageState.title')){b=(!this.M&&(this.M=lQ(this)),this.M).g.b;b!=null&&(HG(),$doc.title=b,undefined)}a.Kf(rzb)&&null.vg((!this.M&&(this.M=lQ(this)),this.M).j.b!=(gdb(),edb));a.Kf(vzb)&&null.vg();a.Kf(nzb)&&IN(this.G,(!this.M&&(this.M=lQ(this)),this.M).f)};_.Of=function i7(){var a,b,c,d;c=this.a;a=(!this.M&&(this.M=lQ(this)),this.M).o;d=$6();b=$6();if(Xdb(c,a)){if(a==null){return}!Z6(d)?a7(this,null,a,null,b):rh(ie((!this.F&&(this.F=CQ(this)),this.F).Yc),a)||X6(this,a);return}bsb(ksb((yeb(iA),iA.k)),'Changing theme from '+c+' to '+a);a7(this,c,a,d,b)};_.Pf=function j7(){null.vg((!this.M&&(this.M=lQ(this)),this.M).p)};_.Qf=function k7(){oQ(this,bB).vg((!this.M&&(this.M=lQ(this)),this.M).b)};var iA=Eeb(Nzb,'UIConnector',137);AE(383,218,Izb,l7);var hA=Eeb(Nzb,'UIConnector/1',383);AE(384,43,{},m7);_.md=function n7(){if(pQ(this.a).i<0){pb(this.a.b);this.a.b=null;return}oQ(this.a,hB).vg();null.vg()};var fA=Eeb(Nzb,'UIConnector/10',384);AE(385,1,{},o7);_.If=function p7(a){isb(ksb((yeb(iA),iA.k)),'Could not load theme from '+$6())};_.Jf=function q7(a){bsb(ksb((yeb(iA),iA.k)),'Loading of '+this.b+' from '+this.c+' completed');!!this.d&&_g(Wg(this.d),this.d);X6(this.a,this.b)};var gA=Eeb(Nzb,'UIConnector/11',385);AE(366,1,{},r7);_.Hf=function s7(a){var b;b=S1(a);if(b.indexOf(zwb)!=-1){U1(ie(this.a),this);me(this.a,zwb)}};var jA=Eeb(Dwb,'Overlay/1',366);AE(367,1,{},t7);_.Hf=function u7(a){if(S1(a).indexOf(zwb)!=-1){U1(ie(this.a),this);lN(this.a,this.b)}};_.b=false;var kA=Eeb(Dwb,'Overlay/2',367);AE(368,1,{},v7);_.Hf=function w7(a){var b;b=S1(a);if(b.indexOf(Awb)!=-1){U1(ie(this.a),this);me(this.a,zwb);me(this.a,Awb);lN(this.a,this.b)}};_.b=false;var lA=Eeb(Dwb,'Overlay/3',368);AE(364,1,{},z7);_.a=0;_.b=0;_.c=0;_.d=0;var mA=Eeb(Dwb,'Overlay/PositionAndSize',364);AE(365,132,{},A7);_.gd=function B7(a){kN(this.a,a)};var nA=Eeb(Dwb,'Overlay/ResizeAnimation',365);AE(107,1,{},H7);_.Rf=function I7(a){return EE(a)};var pA=Eeb(Ozb,'Parser/10methodref$toString$Type',107);AE(312,1,{},J7);_.Rf=function K7(a){return EE(a)};var qA=Eeb(Ozb,'Parser/11methodref$toString$Type',312);AE(315,1,{},L7);_.Rf=function M7(a){return EE(a)};var rA=Eeb(Ozb,'Parser/12methodref$toString$Type',315);AE(203,1,{},N7);_.Sf=function O7(){return new N1};var sA=Eeb(Ozb,'Parser/2methodref$ctor$Type',203);AE(204,1,{},P7);_.Rf=function Q7(a){return vfb(Yeb(a))};var tA=Eeb(Ozb,'Parser/3methodref$valueOf$Type',204);AE(205,1,{},R7);_.Rf=function S7(a){return EE(a)};var uA=Eeb(Ozb,'Parser/4methodref$toString$Type',205);AE(206,1,{},T7);_.Rf=function U7(a){return vfb(Yeb(a))};var vA=Eeb(Ozb,'Parser/5methodref$valueOf$Type',206);AE(128,1,{},V7);_.Rf=function W7(a){return EE(a)};var wA=Eeb(Ozb,'Parser/6methodref$toString$Type',128);AE(156,1,{},X7);var xA=Eeb(Ozb,'Parser/7methodref$intValue$Type',156);AE(311,1,{},Y7);var yA=Eeb(Ozb,'Parser/8methodref$doubleValue$Type',311);AE(106,1,{},Z7);_.Rf=function $7(a){return EE(a)};var zA=Eeb(Ozb,'Parser/9methodref$toString$Type',106);AE(129,1,{},_7);_.Rf=function a8(a){return _q(a)?Ydb(a):Xeb(EE(a))};var AA=Eeb(Ozb,'Parser/lambda$12$Type',129);AE(313,1,{},b8);_.Sf=function c8(){return new cQ};var BA=Eeb(Ozb,'Parser/lambda$17$Type',313);AE(108,1,{},d8);_.Sf=function e8(){return new jO};var CA=Eeb(Ozb,'Parser/lambda$18$Type',108);AE(314,1,{},f8);_.Sf=function g8(){return new GZ};var DA=Eeb(Ozb,'Parser/lambda$19$Type',314);AE(69,1,{},h8);_.Rf=function i8(a){return C7(this.a,a)};var EA=Eeb(Ozb,'Parser/lambda$20$Type',69);AE(316,1,{},j8);_.Rf=function k8(a){var b;return b=new gQ,Object.assign(b,a),b};var FA=Eeb(Ozb,'Parser/lambda$22$Type',316);AE(207,1,{},l8);_.Rf=function m8(a){return vfb(dr(_q(a)?Ydb(a):Xeb(EE(a))))};var GA=Eeb(Ozb,'Parser/lambda$6$Type',207);AE(208,1,{},n8);_.Rf=function o8(a){return vfb(dr(_q(a)?Ydb(a):Xeb(EE(a))))};var HA=Eeb(Ozb,'Parser/lambda$7$Type',208);AE(209,1,{},p8);_.Rf=function q8(a){return vfb(dr(_q(a)?Ydb(a):Xeb(EE(a))))};var IA=Eeb(Ozb,'Parser/lambda$9$Type',209);AE(679,1,{},u8);_.addPopupButton=function v8(a){var b,c,d,e;d=F7(a);c=d.sheet+'_'+d.row+'_'+d.col;if(Hjb(this.c,c)){e=Gjb(this.c,c)}else{Jjb(this.a,c,b=new ZQ);Jjb(this.c,c,e=(!b.F&&(b.F=new DR),b.F));Jjb(this.b,c,d);YQ(b,this.e.k);tQ(b,cx,b.a);Ie((!b.F&&(b.F=new DR),b.F),b,(kn(),kn(),jn));rR((!b.F&&(b.F=new DR),b.F),b);wR(e,d.col);AR(e,d.row);xR(e,d.headerHidden);CR(e,this.f.V,ie(this.f.V));zR(e,d.popupWidth);yR(e,d.popupHeight)}tR(e,d.active);R$(this.f,e)};_.cellsUpdated=function w8(a){var b;b=egb((yeb(cy),cy.k),Rtb,'.');ZZ(nQ(this.e,b).Qe()._e(),D7(a,new h8(new d8)))};_.closePopup=function x8(a,b){var c;c=Gjb(this.c,b_(this.f)+'_'+a+'_'+b);!!c&&(iN(c.e,false),sR(c))};_.disconnected=function y8(){!!this.e&&MZ(this.e)};_.editCellComment=function z8(a,b){W2((ng(),mg),new Oab(this,a,b))};_.invalidCellAddress=function A8(){var a;a=egb((yeb(cy),cy.k),Rtb,'.');jP(DQ(nQ(this.e,a).Qe()._e().a).t)};_.layout=function B8(){b0(this.f);a0(DQ(this.e))};_.load=function C8(){q_(this.f)};_.notifyStateChanges=function D8(a,b){var c,d,e,f,g,h;h={};for(e=a,f=0,g=e.length;f<g;++f){d=e[f];h[d]=''}c=new w3(h,b);r8(this,this.e,c);LZ(this.e,c)};_.onPopupButtonOpened=function E8(a,b,c,d){var e,f,g;e=QT(c,d);if(!e){return}f=new Jab(Ih((Fh(),e)));LF();if(f.Zc){g=Gjb(this.c,b_(this.f)+'_'+a+'_'+b);g.e.N||!!g.d&&YV(g.d,g.b,g.k)&&uR(g);g.c=f;Blb(g.f,f);DL(g.i,f)}};_.refreshCellStyles=function F8(){W2((ng(),mg),new Mab(this))};_.relayout=function G8(){W2((ng(),mg),new Kab(this))};_.relayoutSheet=function H8(){b0(this.f)};_.removePopupButton=function I8(a){var b,c,d;d=F7(a);b=d.sheet+'_'+d.row+'_'+d.col;c=Gjb(this.c,b);if(c){e0(this.f,c);Ljb(this.c,b);Ljb(this.a,b);Ljb(this.b,b)}};_.resize=function J8(){p1(this.f)};_.setActionOnColumnHeaderCallback=function K8(a){rbb(this.e.k,a)};_.setActionOnCurrentSelectionCallback=function L8(a){sbb(this.e.k,a)};_.setActionOnRowHeaderCallback=function M8(a){tbb(this.e.k,a)};_.setCellAddedToSelectionAndSelectedCallback=function N8(a){ubb(this.e.k,a)};_.setCellCommentAuthors=function O8(a){pQ(this.e).a=G7(a,new Z7,new H7)};_.setCellComments=function P8(a){pQ(this.e).b=G7(a,new Z7,new H7)};_.setCellKeysToEditorIdMap=function Q8(a){pQ(this.e).c=G7(a,new Z7,new H7)};_.setCellRangePaintedCallback=function R8(a){vbb(this.e.k,a)};_.setCellRangeSelectedCallback=function S8(a){wbb(this.e.k,a)};_.setCellSelectedCallback=function T8(a){xbb(this.e.k,a)};_.setCellStyleToCSSStyle=function U8(a){pQ(this.e).d=G7(a,new P7,new R7)};_.setCellValueEditedCallback=function V8(a){zbb(this.e.k,a)};_.setCellsAddedToRangeSelectionCallback=function W8(a){Abb(this.e.k,a)};_.setClass=function X8(a){var b,c,d,e,f,g,h;for(d=this.d,f=0,h=d.length;f<h;++f){b=d[f];se(this.f,b,false)}this.d=a.length==0?fq(SB,Stb,2,0,6,1):ggb(a,' ',0);for(c=this.d,e=0,g=c.length;e<g;++e){b=c[e];se(this.f,b,true)}};_.setClearSelectedCellsOnCutCallback=function Y8(a){Bbb(this.e.k,a)};_.setColGroupingData=function Z8(a){pQ(this.e).e=D7(a,new h8(new N7))};_.setColGroupingInversed=function $8(a){pQ(this.e).f=a};_.setColGroupingMax=function _8(a){pQ(this.e).g=a};_.setColW=function a9(a){pQ(this.e).i=tsb(Csb(new Esb(null,new Qqb(D7(a,new _7))),new X7))};_.setCols=function b9(a){pQ(this.e).j=a};_.setColumnAddedToSelectionCallback=function c9(a){Cbb(this.e.k,a)};_.setColumnBufferSize=function d9(a){pQ(this.e).k=a};_.setColumnHeaderContextMenuOpenCallback=function e9(a){Dbb(this.e.k,a)};_.setColumnIndexToStyleIndex=function f9(a){pQ(this.e).n=G7(a,new T7,new l8)};_.setColumnResizedCallback=function g9(a){Ebb(this.e.k,a)};_.setColumnSelectedCallback=function h9(a){Fbb(this.e.k,a)};_.setComponentIDtoCellKeysMap=function i9(a){pQ(this.e).o=G7(a,new Z7,new H7)};_.setConditionalFormattingStyles=function j9(a){pQ(this.e).p=G7(a,new P7,new R7)};_.setContextMenuClosedCallback=function k9(a){Gbb(this.e.k,a)};_.setContextMenuOpenOnSelectionCallback=function l9(a){Hbb(this.e.k,a)};_.setDefColW=function m9(a){pQ(this.e).q=a};_.setDefRowH=function n9(a){pQ(this.e).r=a};_.setDeleteSelectedCellsCallback=function o9(a){Ibb(this.e.k,a)};_.setDisplayGridlines=function p9(a){pQ(this.e).s=a};_.setDisplayRowColHeadings=function q9(a){pQ(this.e).t=a};_.setGroupingCollapsedCallback=function r9(a){Kbb(this.e.k,a)};_.setHasActions=function s9(a){pQ(this.e).u=a};_.setHeight=function t9(a){pQ(this.e).kb=a};_.setHiddenColumnIndexes=function u9(a){pQ(this.e).v=D7(a,new p8)};_.setHiddenRowIndexes=function v9(a){pQ(this.e).w=D7(a,new p8)};_.setHorizontalScrollPositions=function w9(a){pQ(this.e).A=tsb(Csb(new Esb(null,new Qqb(D7(a,new _7))),new X7))};_.setHorizontalSplitPosition=function x9(a){pQ(this.e).B=a};_.setHyperlinksTooltips=function y9(a){pQ(this.e).C=G7(a,new Z7,new H7)};_.setId=function z9(a){pQ(this.e).lb=a};_.setInfoLabelValue=function A9(a){pQ(this.e).D=a};_.setInvalidFormulaCells=function B9(a){pQ(this.e).F=new epb(D7(a,new J7))};_.setInvalidFormulaErrorMessage=function C9(a){pQ(this.e).G=a};_.setLevelHeaderClickedCallback=function D9(a){Lbb(this.e.k,a)};_.setLinkCellClickedCallback=function E9(a){Mbb(this.e.k,a)};_.setLockFormatColumns=function F9(a){pQ(this.e).H=a};_.setLockFormatRows=function G9(a){pQ(this.e).I=a};_.setLockedColumnIndexes=function H9(a){pQ(this.e).J=new epb(D7(a,new n8))};_.setLockedRowIndexes=function I9(a){pQ(this.e).K=new epb(D7(a,new n8))};_.setMergedRegions=function J9(a){pQ(this.e).L=D7(a,new h8(new b8))};_.setNamedRanges=function K9(a){pQ(this.e).M=D7(a,new V7)};_.setOnColumnAutofitCallback=function L9(a){Nbb(this.e.k,a)};_.setOnConnectorInitCallback=function M9(a){Obb(this.e.k,a)};_.setOnPasteCallback=function N9(a){Pbb(this.e.k,a)};_.setOnRedoCallback=function O9(a){Qbb(this.e.k,a)};_.setOnRowAutofitCallback=function P9(a){Rbb(this.e.k,a)};_.setOnSheetScrollCallback=function Q9(a){Sbb(this.e.k,a)};_.setOnUndoCallback=function R9(a){Tbb(this.e.k,a)};_.setOverlays=function S9(a){pQ(this.e).N=G7(a,new L7,new j8)};_.setPopupButtonClickCallback=function T9(a){Ubb(this.e.k,a)};_.setPopupCloseCallback=function U9(a){Vbb(this.e.k,a)};_.setProtectedCellWriteAttemptedCallback=function V9(a){Wbb(this.e.k,a)};_.setReload=function W9(a){pQ(this.e).O=true};_.setResources=function X9(a,b){var c,d,e,f;for(d=b,e=0,f=d.length;e<f;++e){c=d[e];a2(this.e.G,c,Hh((Fh(),a),'resource-'+c))}};_.setRowAddedToRangeSelectionCallback=function Y9(a){Xbb(this.e.k,a)};_.setRowBufferSize=function Z9(a){pQ(this.e).P=a};_.setRowGroupingData=function $9(a){pQ(this.e).Q=D7(a,new h8(new N7))};_.setRowGroupingInversed=function _9(a){pQ(this.e).R=a};_.setRowGroupingMax=function aab(a){pQ(this.e).S=a};_.setRowH=function bab(a){pQ(this.e).T=E7(a)};_.setRowHeaderContextMenuOpenCallback=function cab(a){Ybb(this.e.k,a)};_.setRowIndexToStyleIndex=function dab(a){pQ(this.e).U=G7(a,new T7,new l8)};_.setRowSelectedCallback=function eab(a){Zbb(this.e.k,a)};_.setRows=function fab(a){pQ(this.e).V=a};_.setRowsResizedCallback=function gab(a){$bb(this.e.k,a)};_.setSelectedCellAndRange=function hab(a,b,c,d,e,f,g,h){var i;i=egb((yeb(cy),cy.k),Rtb,'.');_Z(nQ(this.e,i).Qe()._e(),a,b,c,d,e,f,g,h)};_.setSelectionDecreasePaintedCallback=function iab(a){_bb(this.e.k,a)};_.setSelectionIncreasePaintedCallback=function jab(a){acb(this.e.k,a)};_.setSetCellStyleWidthRatiosCallback=function kab(a){bcb(this.e.k,a)};_.setSheetAddressChangedCallback=function lab(a){ccb(this.e.k,a)};_.setSheetCreatedCallback=function mab(a){dcb(this.e.k,a)};_.setSheetIndex=function nab(a){pQ(this.e).W=a};_.setSheetNames=function oab(a){pQ(this.e).X=Ilb(D7(a,new V7),fq(SB,Stb,2,0,6,1))};_.setSheetProtected=function pab(a){pQ(this.e).Y=a};_.setSheetRenamedCallback=function qab(a){ecb(this.e.k,a)};_.setSheetSelectedCallback=function rab(a){fcb(this.e.k,a)};_.setShiftedCellBorderStyles=function sab(a){pQ(this.e).Z=D7(a,new V7)};_.setShowCustomEditorOnFocus=function tab(a){pQ(this.e).$=a};_.setUpdateCellCommentCallback=function uab(a){gcb(this.e.k,a)};_.setVerticalScrollPositions=function vab(a){pQ(this.e)._=tsb(Csb(new Esb(null,new Qqb(D7(a,new _7))),new X7))};_.setVerticalSplitPosition=function wab(a){pQ(this.e).ab=a};_.setVisibleCellComments=function xab(a){pQ(this.e).bb=D7(a,new V7)};_.setWidth=function yab(a){pQ(this.e).ob=a};_.setWorkbookChangeToggle=function zab(a){pQ(this.e).cb=a};_.setWorkbookProtected=function Aab(a){pQ(this.e).db=a};_.showActions=function Bab(a){var b;b=egb((yeb(cy),cy.k),Rtb,'.');a$(nQ(this.e,b).Qe()._e(),D7(a,new h8(new f8)))};_.showSelectedCell=function Cab(a,b,c,d,e,f,g){var h;h=egb((yeb(cy),cy.k),Rtb,'.');b$(nQ(this.e,h).Qe()._e(),a,b,c,d,e,f,g)};_.updateBottomLeftCellValues=function Dab(a){var b;b=egb((yeb(cy),cy.k),Rtb,'.');c$(nQ(this.e,b).Qe()._e(),D7(a,new h8(new d8)))};_.updateBottomRightCellValues=function Eab(a){var b;b=egb((yeb(cy),cy.k),Rtb,'.');d$(nQ(this.e,b).Qe()._e(),D7(a,new h8(new d8)))};_.updateCellsAndRefreshCellStyles=function Fab(){};_.updateFormulaBar=function Gab(a,b,c){var d;d=egb((yeb(cy),cy.k),Rtb,'.');e$(nQ(this.e,d).Qe()._e(),a,b,c)};_.updateTopLeftCellValues=function Hab(a){var b;b=egb((yeb(cy),cy.k),Rtb,'.');f$(nQ(this.e,b).Qe()._e(),D7(a,new h8(new d8)))};_.updateTopRightCellValues=function Iab(a){var b;b=egb((yeb(cy),cy.k),Rtb,'.');g$(nQ(this.e,b).Qe()._e(),D7(a,new h8(new d8)))};var NA=Eeb(Ozb,'SpreadsheetJsApi',679);AE(268,13,Gub,Jab);var JA=Eeb(Ozb,'SpreadsheetJsApi/ContentWidget',268);AE(269,1,cwb,Kab);_.Md=function Lab(){b0(this.a.f)};var KA=Eeb(Ozb,'SpreadsheetJsApi/lambda$0$Type',269);AE(270,1,cwb,Mab);_.Md=function Nab(){GW(DQ(s8(this.a).a).V)};var LA=Eeb(Ozb,'SpreadsheetJsApi/lambda$1$Type',270);AE(271,1,cwb,Oab);_.Md=function Pab(){t8(this.a,this.b,this.c)};_.b=0;_.c=0;var MA=Eeb(Ozb,'SpreadsheetJsApi/lambda$2$Type',271);AE(196,1,{724:1,3:1},mcb);_.uf=function pcb(a,b,c){Jbb(this,a,b,c)};var QA=Eeb(Ozb,'SpreadsheetServerRpcImpl',196);AE(272,1,{},rcb);_.Gf=function scb(a,b){ncb(this.a,a,b)};var OA=Eeb(Ozb,'SpreadsheetServerRpcImpl/lambda$0$Type',272);AE(273,1,{},tcb);_.Gf=function ucb(a,b){ocb(this.a,a,b)};var PA=Eeb(Ozb,'SpreadsheetServerRpcImpl/lambda$1$Type',273);AE(665,1,Etb,Gcb);_.bd=function Hcb(){return Mj(this.b)+','+this.c+','+this.d+','+this.a+','+this.e+','+this.f+','+this.j+','+this.k+','+this.g+','+this.i};_.a=false;_.c=0;_.d=0;_.e=false;_.f=false;_.g=-1;_.i=-1;_.j=false;_.k=0;var VA=Eeb(Uwb,'MouseEventDetails',665);AE(121,4,{121:1,3:1,6:1,4:1},Mcb);var Icb,Jcb,Kcb;var UA=Feb(Uwb,'MouseEventDetails/MouseButton',121,Ncb);AE(560,1,Etb,Ycb);_.a=-1;_.b=-1;_.c=-1;_.e=false;_.f=false;_.g=false;_.i=false;_.j=false;_.k=false;_.n=false;_.o=false;_.p=false;_.q=false;_.r=false;_.s=false;_.t=0;_.u=-1;_.v=-1;var WA=Eeb(Uwb,'VBrowserDetails',560);var Zcb;AE(172,1,{172:1,3:1},_cb);_.$c=function adb(a){var b;if(!Yq(a,172)){return false}b=a;if(!Xdb(this.a,b.a)){return false}if(!Xdb(this.b,b.b)){return false}if(!Xdb(this.c,b.c)){return false}if(!Xdb(this.d,b.d)){return false}return true};_.ad=function bdb(){var a;a=1;a=31*a+(this.a==null?0:Yfb(this.a));a=31*a+(this.b==null?0:Yfb(this.b));a=31*a+(this.c==null?0:Yfb(this.c));a=31*a+kmb(this.d);return a};_.bd=function cdb(){return this.a+':'+this.b+'.'+this.c+'('+Mtb+')'};var XA=Eeb(Zwb,'MethodInvocation',172);AE(117,4,{117:1,3:1,6:1,4:1},hdb);var ddb,edb,fdb;var YA=Feb(Zwb,'PushMode',117,idb);AE(418,68,$wb);var _A=Eeb(uyb,'AbstractSingleComponentContainerState',418);AE(113,4,{113:1,3:1,6:1,4:1},qdb);var mdb,ndb,odb;var aB=Feb(uyb,'ContentMode',113,rdb);AE(77,4,{77:1,3:1,6:1,4:1},ydb);var sdb,tdb,udb,vdb,wdb;var cB=Feb(uyb,'ErrorLevel',77,zdb);AE(143,4,{143:1,3:1,6:1,4:1},Ddb);var Adb,Bdb;var eB=Feb(pAb,'NotificationRole',143,Edb);AE(234,1,Etb,Fdb);_.a=false;_.b=null;var fB=Eeb(pAb,'PageState',234);AE(100,4,{100:1,3:1,6:1,4:1},Ldb);var Gdb,Hdb,Idb,Jdb;var gB=Feb(pAb,'Transport',100,Mdb);AE(165,418,{68:1,75:1,165:1,3:1},Ndb);_.a=false;_.b=0;_.f='This content is announced automatically and does not need to be navigated into.';_.i=-1;_.n=0;_.p=true;var pB=Eeb(pAb,'UIState',165);AE(227,1,Etb,Odb);_.a=300;_.b=1500;_.c=5000;var iB=Eeb(pAb,'UIState/LoadingIndicatorConfigurationState',227);AE(419,1,Etb,Pdb);_.d=0;_.n=false;var jB=Eeb(pAb,'UIState/LocaleData',419);AE(231,1,Etb,Qdb);var kB=Eeb(pAb,'UIState/LocaleServiceState',231);AE(95,1,Etb,Sdb,Tdb);var lB=Eeb(pAb,'UIState/NotificationTypeConfiguration',95);AE(229,1,Etb,Udb);_.a=false;_.d=null;var mB=Eeb(pAb,'UIState/PushConfigurationState',229);AE(230,1,Etb,Vdb);_.a=400;_.b=false;_.c='Server connection lost, trying to reconnect...';_.d='Server connection lost.';_.e=10000;_.f=5000;var nB=Eeb(pAb,'UIState/ReconnectDialogConfigurationState',230);AE(228,1,Etb,Wdb);_.a=300;_.b=500;_.c=750;_.d=100;_.e=Qub;var oB=Eeb(pAb,'UIState/TooltipConfigurationState',228);AE(416,25,Ptb,aeb);var qB=Eeb('elemental.json','JsonException',416);AE(124,1,{184:1});_.bd=function feb(){return this.a};var uB=Eeb(_tb,'AbstractStringBuilder',124);AE(60,25,Ptb,geb);var vB=Eeb(_tb,'ArithmeticException',60);AE(188,31,Qtb,jeb);var wB=Eeb(_tb,'ArrayIndexOutOfBoundsException',188);var seb,teb;AE(127,82,{3:1,6:1,127:1,82:1},bfb);_.ke=function cfb(a){return afb(this.a,a.a)};_.$c=function dfb(a){return Yq(a,127)&&Zeb(this.a,a.a)};_.ad=function efb(){return dr(this.a)};_.bd=function gfb(){return ''+this.a};_.a=0;var CB=Eeb(_tb,'Float',127);AE(62,25,Ptb,hfb);var DB=Eeb(_tb,'IllegalArgumentException',62);AE(38,25,Ptb,ifb,jfb,kfb);var EB=Eeb(_tb,'IllegalStateException',38);AE(92,82,{3:1,6:1,92:1,82:1},mfb);_.ke=function ofb(a){return nfb(this.a,a.a)};_.$c=function pfb(a){return lfb(this,a)};_.ad=function qfb(){return this.a};_.$f=function rfb(){return this.a};_.bd=function ufb(){return ''+this.a};_.a=0;var GB=Eeb(_tb,'Integer',92);var wfb;AE(105,82,{3:1,6:1,105:1,82:1},yfb);_.ke=function Afb(a){return zfb(this.a,a.a)};_.$c=function Bfb(a){return Yq(a,105)&&aE(a.a,this.a)};_.ad=function Cfb(){return Dfb(this.a)};_._f=function Efb(){return this.a};_.bd=function Ffb(){return ''+sE(this.a)};_.a=0;var IB=Eeb(_tb,'Long',105);var Hfb;AE(823,1,{});AE(50,62,{3:1,21:1,50:1,25:1,19:1},Nfb);var KB=Eeb(_tb,'NumberFormatException',50);AE(74,1,{3:1,74:1},Ofb);_.$c=function Pfb(a){var b;if(Yq(a,74)){b=a;return this.c==b.c&&this.d==b.d&&this.a==b.a&&this.b==b.b}return false};_.ad=function Qfb(){return kmb(iq(dq(MB,1),Etb,1,5,[vfb(this.c),this.a,this.d,this.b]))};_.bd=function Rfb(){return this.a+'.'+this.d+'('+(this.b!=null?this.b:'Unknown Source')+(this.c>=0?':'+this.c:'')+')'};_.c=0;var OB=Eeb(_tb,'StackTraceElement',74);AE(258,124,{184:1},rgb);var PB=Eeb(_tb,'StringBuffer',258);AE(30,124,{184:1},ygb,zgb,Agb);var QB=Eeb(_tb,'StringBuilder',30);AE(825,1,{});var Cgb;AE(29,25,Ptb,Ggb,Hgb);var UB=Eeb(_tb,'UnsupportedOperationException',29);AE(36,82,{3:1,6:1,82:1,36:1},$gb,_gb,ahb,bhb);_.ke=function ehb(a){return Sgb(this,a)};_.$c=function fhb(a){var b;if(this===a){return true}if(Yq(a,36)){b=a;return this.e==b.e&&Sgb(this,b)==0}return false};_.ad=function ghb(){var a;if(this.b!=0){return this.b}if(this.a<54){a=bE(this.f);this.b=rE(YD(a,-1));this.b=33*this.b+rE(YD(mE(a,32),-1));this.b=17*this.b+dr(this.e);return this.b}this.b=17*Dhb(this.c)+dr(this.e);return this.b};_.bd=function ihb(){return Zgb(this)};_.a=0;_.b=0;_.d=0;_.e=0;_.f=0;var Igb,Jgb,Kgb,Lgb,Mgb,Ngb,Ogb,Pgb,Qgb;var VB=Eeb('java.math','BigDecimal',36);AE(10,82,{3:1,6:1,82:1,10:1},Mhb,Nhb,Ohb,Phb,Qhb);_.ke=function Shb(a){return thb(this,a)};_.$c=function Thb(a){return yhb(this,a)};_.ad=function Whb(){return Dhb(this)};_.bd=function Yhb(){return kib(this,0)};_.b=-2;_.c=0;_.d=0;_.e=0;var mhb,nhb,ohb,phb,qhb,rhb;var WB=Eeb('java.math','BigInteger',10);var fib,gib;var Bib,Cib,Dib;AE(88,1,xAb);_.ke=function Oib(a){return Ufb(this.a,a.a)};_.$c=function Pib(a){var b;if(a===this){return true}if(!Yq(a,88)){return false}b=a;return Wfb(this.a,b.a)};_.ad=function Qib(){return Yfb(this.a)};_.bd=function Rib(){return this.a};var XB=Eeb('java.nio.charset','Charset',88);AE(690,1,{39:1});_.add=function Xib(a){throw WD(new Hgb('Add not supported on this collection'))};_.addAll=function Yib(a){return Sib(this,a)};_.clear=function Zib(){var a;for(a=this.Qe();a.$e();){a._e();a.af()}};_.contains=function $ib(a){return Tib(this,a,false)};_.containsAll=function _ib(a){return Uib(this,a)};_.isEmpty=function ajb(){return this.size()==0};_.remove=function bjb(a){return Tib(this,a,true)};_.removeAll=function cjb(a){var b,c,d;rtb(a);b=false;for(c=this.Qe();c.$e();){d=c._e();if(a.contains(d)){c.af();b=true}}return b};_.retainAll=function djb(a){var b,c,d;rtb(a);b=false;for(c=this.Qe();c.$e();){d=c._e();if(!a.contains(d)){c.af();b=true}}return b};_.toArray=function ejb(){return this.ag(fq(MB,Etb,1,this.size(),5,1))};_.ag=function fjb(a){return Vib(this,a)};_.bd=function gjb(){return Wib(this)};var YB=Eeb(yAb,'AbstractCollection',690);var WC=Geb(yAb,'Map');AE(689,1,{151:1});_.getOrDefault=function rjb(a,b){var c;return c=this.get(a),c==null&&!this.containsKey(a)?b:c};_.putIfAbsent=function xjb(a,b){var c;return c=this.get(a),c!=null?c:this.put(a,b)};_.replace=function zjb(a,b){return this.containsKey(a)?this.put(a,b):null};_.clear=function ljb(){this.bg().clear()};_.containsKey=function mjb(a){return !!ijb(this,a,false)};_.containsValue=function njb(a){var b,c,d;for(c=this.bg().Qe();c.$e();){b=c._e();d=b.kg();if(cr(a)===cr(d)||a!=null&&M(a,d)){return true}}return false};_.$c=function ojb(a){var b,c,d;if(a===this){return true}if(!Yq(a,151)){return false}d=a;if(this.size()!=d.size()){return false}for(c=d.bg().Qe();c.$e();){b=c._e();if(!hjb(this,b)){return false}}return true};_.get=function pjb(a){return qjb(ijb(this,a,false))};_.ad=function sjb(){return Dmb(this.bg())};_.isEmpty=function tjb(){return this.size()==0};_.keySet=function ujb(){return new Rkb(this)};_.put=function vjb(a,b){throw WD(new Hgb('Put not supported on this map'))};_.putAll=function wjb(a){jjb(this,a)};_.remove=function yjb(a){return qjb(ijb(this,a,true))};_.size=function Ajb(){return this.bg().size()};_.bd=function Bjb(){var a,b,c;c=new Vqb('{','}');for(b=this.bg().Qe();b.$e();){a=b._e();Uqb(c,kjb(this,a.jg())+'='+kjb(this,a.kg()))}return !c.a?c.c:c.e.length==0?c.a.a:c.a.a+(''+c.e)};_.values=function Cjb(){return new alb(this)};var lC=Eeb(yAb,'AbstractMap',689);AE(130,689,{151:1});_.clear=function Ojb(){Mjb(this)};_.containsKey=function Pjb(a){return Djb(this,a)};_.containsValue=function Qjb(a){return Ejb(a,this.c)||Ejb(a,this.a)};_.bg=function Rjb(){return new $jb(this)};_.get=function Sjb(a){return Fjb(this,a)};_.put=function Tjb(a,b){return Ijb(this,a,b)};_.remove=function Ujb(a){return Kjb(this,a)};_.size=function Vjb(){return Njb(this)};_.b=0;var _B=Eeb(yAb,'AbstractHashMap',130);var YC=Geb(yAb,'Set');AE(691,690,zAb);_.$c=function Wjb(a){var b;if(a===this){return true}if(!Yq(a,103)){return false}b=a;if(b.size()!=this.size()){return false}return Uib(this,b)};_.ad=function Xjb(){return Dmb(this)};_.removeAll=function Yjb(a){var b,c,d,e;rtb(a);e=this.size();if(e<a.size()){for(b=this.Qe();b.$e();){c=b._e();a.contains(c)&&b.af()}}else{for(d=a.Qe();d.$e();){c=d._e();this.remove(c)}}return e!=this.size()};var nC=Eeb(yAb,'AbstractSet',691);AE(44,691,zAb,$jb);_.clear=function _jb(){Mjb(this.a)};_.contains=function akb(a){return Zjb(this,a)};_.Qe=function bkb(){return new gkb(this.a)};_.remove=function ckb(a){var b;if(Zjb(this,a)){b=a.jg();Kjb(this.a,b);return true}return false};_.size=function dkb(){return Njb(this.a)};var $B=Eeb(yAb,'AbstractHashMap/EntrySet',44);AE(45,1,{},gkb);_._e=function ikb(){return fkb(this)};_.$e=function hkb(){return this.b};_.af=function jkb(){vtb(!!this.c);otb(this.f.b,this.d);this.c.af();this.c=null;this.b=ekb(this);this.d=this.f.b};_.b=false;_.d=0;var ZB=Eeb(yAb,'AbstractHashMap/EntrySetIterator',45);var SC=Geb(yAb,'List');AE(692,690,AAb);_.addAtIndex=function lkb(a,b){throw WD(new Hgb('Add not supported on this list'))};_.add=function mkb(a){this.addAtIndex(this.size(),a);return true};_.addAllAtIndex=function nkb(a,b){var c,d,e;rtb(b);c=false;for(e=b.Qe();e.$e();){d=e._e();this.addAtIndex(a++,d);c=true}return c};_.clear=function okb(){this.eg(0,this.size())};_.$c=function pkb(a){var b,c,d,e,f;if(a===this){return true}if(!Yq(a,80)){return false}f=a;if(this.size()!=f.size()){return false}e=f.Qe();for(c=this.Qe();c.$e();){b=c._e();d=e._e();if(!(cr(b)===cr(d)||b!=null&&M(b,d))){return false}}return true};_.ad=function qkb(){return Emb(this)};_.indexOf=function rkb(a){return kkb(this,a)};_.Qe=function skb(){return new Bkb(this)};_.lastIndexOf=function tkb(a){var b;for(b=this.size()-1;b>-1;--b){if(sqb(a,this.getAtIndex(b))){return b}}return -1};_.cg=function ukb(){return this.dg(0)};_.dg=function vkb(a){return new Fkb(this,a)};_.removeAtIndex=function wkb(a){throw WD(new Hgb('Remove not supported on this list'))};_.eg=function xkb(a,b){var c,d;d=this.dg(a);for(c=a;c<b;++c){d._e();d.af()}};_.setAtIndex=function ykb(a,b){throw WD(new Hgb('Set not supported on this list'))};_.subList=function zkb(a,b){return new Lkb(this,a,b)};var dC=Eeb(yAb,'AbstractList',692);AE(211,1,{},Bkb);_.$e=function Ckb(){return this.b<this.d.size()};_._e=function Dkb(){ptb(this.b<this.d.size());return this.d.getAtIndex(this.c=this.b++)};_.af=function Ekb(){Akb(this)};_.b=0;_.c=-1;var aC=Eeb(yAb,'AbstractList/IteratorImpl',211);AE(318,211,{},Fkb);_.af=function Jkb(){Akb(this)};_.fg=function Gkb(a){this.a.addAtIndex(this.b,a);++this.b;this.c=-1};_.gg=function Hkb(){return this.b>0};_.hg=function Ikb(){ptb(this.b>0);return this.a.getAtIndex(this.c=--this.b)};_.ig=function Kkb(a){vtb(this.c!=-1);this.a.setAtIndex(this.c,a)};var bC=Eeb(yAb,'AbstractList/ListIteratorImpl',318);AE(319,692,AAb,Lkb);_.addAtIndex=function Mkb(a,b){ttb(a,this.b);this.c.addAtIndex(this.a+a,b);++this.b};_.getAtIndex=function Nkb(a){qtb(a,this.b);return this.c.getAtIndex(this.a+a)};_.removeAtIndex=function Okb(a){var b;qtb(a,this.b);b=this.c.removeAtIndex(this.a+a);--this.b;return b};_.setAtIndex=function Pkb(a,b){qtb(a,this.b);return this.c.setAtIndex(this.a+a,b)};_.size=function Qkb(){return this.b};_.a=0;_.b=0;var cC=Eeb(yAb,'AbstractList/SubList',319);AE(53,691,zAb,Rkb);_.clear=function Skb(){this.a.clear()};_.contains=function Tkb(a){return this.a.containsKey(a)};_.Qe=function Ukb(){var a;return a=this.a.bg().Qe(),new Xkb(a)};_.remove=function Vkb(a){if(this.a.containsKey(a)){this.a.remove(a);return true}return false};_.size=function Wkb(){return this.a.size()};var fC=Eeb(yAb,'AbstractMap/1',53);AE(59,1,{},Xkb);_.$e=function Ykb(){return this.a.$e()};_._e=function Zkb(){var a;return a=this.a._e(),a.jg()};_.af=function $kb(){this.a.af()};var eC=Eeb(yAb,'AbstractMap/1/1',59);AE(37,690,{39:1},alb);_.clear=function blb(){this.a.clear()};_.contains=function clb(a){return _kb(this,a)};_.Qe=function dlb(){var a;return a=this.a.bg().Qe(),new flb(a)};_.size=function elb(){return this.a.size()};var hC=Eeb(yAb,'AbstractMap/2',37);AE(51,1,{},flb);_.$e=function glb(){return this.a.$e()};_._e=function hlb(){var a;return a=this.a._e(),a.kg()};_.af=function ilb(){this.a.af()};var gC=Eeb(yAb,'AbstractMap/2/1',51);AE(317,1,BAb);_.$c=function jlb(a){var b;if(!Yq(a,102)){return false}b=a;return sqb(this.a,b.jg())&&sqb(this.b,b.kg())};_.jg=function klb(){return this.a};_.kg=function llb(){return this.b};_.ad=function mlb(){return tqb(this.a)^tqb(this.b)};_.lg=function nlb(a){var b;b=this.b;this.b=a;return b};_.bd=function olb(){return this.a+'='+this.b};var iC=Eeb(yAb,'AbstractMap/AbstractEntry',317);AE(210,317,BAb,plb);var jC=Eeb(yAb,'AbstractMap/SimpleEntry',210);AE(703,1,BAb);_.$c=function qlb(a){var b;if(!Yq(a,102)){return false}b=a;return sqb(this.b.value[0],b.jg())&&sqb(Ppb(this),b.kg())};_.ad=function rlb(){return tqb(this.b.value[0])^tqb(Ppb(this))};_.bd=function slb(){return this.b.value[0]+'='+Ppb(this)};var kC=Eeb(yAb,'AbstractMapEntry',703);AE(694,692,AAb);_.addAtIndex=function tlb(a,b){var c;c=this.dg(a);c.fg(b)};_.addAllAtIndex=function ulb(a,b){var c,d,e,f;rtb(b);f=false;e=this.dg(a);for(d=b.Qe();d.$e();){c=d._e();e.fg(c);f=true}return f};_.getAtIndex=function vlb(b){var c;c=this.dg(b);try{return c._e()}catch(a){a=VD(a);if(Yq(a,67)){throw WD(new ieb("Can't get element "+b))}else throw WD(a)}};_.Qe=function wlb(){return this.dg(0)};_.removeAtIndex=function xlb(b){var c,d;c=this.dg(b);try{d=c._e();c.af();return d}catch(a){a=VD(a);if(Yq(a,67)){throw WD(new ieb("Can't remove element "+b))}else throw WD(a)}};_.setAtIndex=function ylb(b,c){var d,e;d=this.dg(b);try{e=d._e();d.ig(c);return e}catch(a){a=VD(a);if(Yq(a,67)){throw WD(new ieb("Can't set element "+b))}else throw WD(a)}};var mC=Eeb(yAb,'AbstractSequentialList',694);AE(11,692,{3:1,11:1,39:1,80:1,180:1},Jlb,Klb,Llb);_.addAtIndex=function Mlb(a,b){Alb(this,a,b)};_.add=function Nlb(a){return Blb(this,a)};_.addAllAtIndex=function Olb(a,b){var c,d;ttb(a,this.a.length);c=b.toArray();d=c.length;if(d==0){return false}Zsb(this.a,a,c);return true};_.addAll=function Plb(a){return Clb(this,a)};_.clear=function Qlb(){this.a.length=0};_.contains=function Rlb(a){return Elb(this,a,0)!=-1};_.getAtIndex=function Slb(a){return Dlb(this,a)};_.indexOf=function Tlb(a){return Elb(this,a,0)};_.isEmpty=function Ulb(){return this.a.length==0};_.Qe=function Vlb(){return new fmb(this)};_.lastIndexOf=function Wlb(a){return Flb(this,a,this.a.length-1)};_.removeAtIndex=function Xlb(a){return Glb(this,a)};_.remove=function Ylb(a){return Hlb(this,a)};_.eg=function Zlb(a,b){var c;utb(a,b,this.a.length);c=b-a;_sb(this.a,a,c)};_.setAtIndex=function $lb(a,b){var c;c=(qtb(a,this.a.length),this.a[a]);this.a[a]=b;return c};_.size=function _lb(){return this.a.length};_.toArray=function amb(){return Wsb(this.a)};_.ag=function bmb(a){return Ilb(this,a)};var pC=Eeb(yAb,'ArrayList',11);AE(7,1,{},fmb);_.$e=function gmb(){return cmb(this)};_._e=function hmb(){return dmb(this)};_.af=function imb(){emb(this)};_.a=0;_.b=-1;var oC=Eeb(yAb,'ArrayList/1',7);AE(142,692,CAb,smb);_.contains=function tmb(a){return kkb(this,a)!=-1};_.getAtIndex=function umb(a){return qtb(a,this.a.length),this.a[a]};_.setAtIndex=function vmb(a,b){var c;c=(qtb(a,this.a.length),this.a[a]);this.a[a]=b;return c};_.size=function wmb(){return this.a.length};_.toArray=function xmb(){return rmb(this,fq(MB,Etb,1,this.a.length,5,1))};_.ag=function ymb(a){return rmb(this,a)};var qC=Eeb(yAb,'Arrays/ArrayList',142);var zmb,Amb,Bmb;AE(396,692,CAb,Gmb);_.contains=function Hmb(a){return false};_.getAtIndex=function Imb(a){return qtb(a,0),null};_.Qe=function Jmb(){return Cmb(),Nmb(),Mmb};_.cg=function Kmb(){return Cmb(),Nmb(),Mmb};_.size=function Lmb(){return 0};var sC=Eeb(yAb,'Collections/EmptyList',396);AE(397,1,{},Pmb);_.fg=function Qmb(a){throw WD(new Ggb)};_.$e=function Rmb(){return false};_.gg=function Smb(){return false};_._e=function Tmb(){return Omb()};_.hg=function Umb(){throw WD(new rqb)};_.af=function Vmb(){throw WD(new ifb)};_.ig=function Wmb(a){throw WD(new ifb)};var Mmb;var rC=Eeb(yAb,'Collections/EmptyListIterator',397);AE(399,689,DAb,Xmb);_.containsKey=function Ymb(a){return false};_.containsValue=function Zmb(a){return false};_.bg=function $mb(){return Cmb(),Bmb};_.get=function _mb(a){return null};_.keySet=function anb(){return Cmb(),Bmb};_.size=function bnb(){return 0};_.values=function cnb(){return Cmb(),zmb};var tC=Eeb(yAb,'Collections/EmptyMap',399);AE(398,691,EAb,dnb);_.contains=function enb(a){return false};_.Qe=function fnb(){return Cmb(),Nmb(),Mmb};_.size=function gnb(){return 0};var uC=Eeb(yAb,'Collections/EmptySet',398);AE(160,1,{39:1},hnb);_.add=function inb(a){throw WD(new Ggb)};_.addAll=function jnb(a){throw WD(new Ggb)};_.clear=function knb(){throw WD(new Ggb)};_.contains=function lnb(a){return this.b.contains(a)};_.containsAll=function mnb(a){return this.b.containsAll(a)};_.isEmpty=function nnb(){return this.b.isEmpty()};_.Qe=function onb(){return new wnb(this.b.Qe())};_.remove=function pnb(a){throw WD(new Ggb)};_.removeAll=function qnb(a){throw WD(new Ggb)};_.retainAll=function rnb(a){throw WD(new Ggb)};_.size=function snb(){return this.b.size()};_.toArray=function tnb(){return this.b.toArray()};_.bd=function unb(){return EE(this.b)};var wC=Eeb(yAb,'Collections/UnmodifiableCollection',160);AE(162,1,{},wnb);_.$e=function xnb(){return this.b.$e()};_._e=function ynb(){return this.b._e()};_.af=function znb(){vnb()};var vC=Eeb(yAb,'Collections/UnmodifiableCollectionIterator',162);AE(161,160,AAb,Anb);_.addAtIndex=function Bnb(a,b){throw WD(new Ggb)};_.addAllAtIndex=function Cnb(a,b){throw WD(new Ggb)};_.$c=function Dnb(a){return M(this.a,a)};_.getAtIndex=function Enb(a){return this.a.getAtIndex(a)};_.ad=function Fnb(){return Q(this.a)};_.indexOf=function Gnb(a){return this.a.indexOf(a)};_.isEmpty=function Hnb(){return this.a.isEmpty()};_.lastIndexOf=function Inb(a){return this.a.lastIndexOf(a)};_.cg=function Jnb(){return new Onb(this.a.dg(0))};_.dg=function Knb(a){return new Onb(this.a.dg(a))};_.removeAtIndex=function Lnb(a){throw WD(new Ggb)};_.setAtIndex=function Mnb(a,b){throw WD(new Ggb)};_.subList=function Nnb(a,b){return new Anb(this.a.subList(a,b))};var yC=Eeb(yAb,'Collections/UnmodifiableList',161);AE(226,162,{},Onb);_.af=function Snb(){vnb()};_.fg=function Pnb(a){throw WD(new Ggb)};_.gg=function Qnb(){return this.a.gg()};_.hg=function Rnb(){return this.a.hg()};_.ig=function Tnb(a){throw WD(new Ggb)};var xC=Eeb(yAb,'Collections/UnmodifiableListIterator',226);AE(400,1,{151:1},Vnb);_.getOrDefault=function aob(a,b){var c;return c=this.c.get(a),c==null&&!this.c.containsKey(a)?b:c};_.putIfAbsent=function gob(a,b){var c;return c=this.c.get(a),c!=null?c:Unb()};_.replace=function iob(a,b){return this.c.containsKey(a)?Unb():null};_.clear=function Wnb(){throw WD(new Ggb)};_.containsKey=function Xnb(a){return this.c.containsKey(a)};_.containsValue=function Ynb(a){return this.c.containsValue(a)};_.bg=function Znb(){!this.a&&(this.a=new qob(this.c.bg()));return this.a};_.$c=function $nb(a){return M(this.c,a)};_.get=function _nb(a){return this.c.get(a)};_.ad=function bob(){return Q(this.c)};_.isEmpty=function cob(){return this.c.isEmpty()};_.keySet=function dob(){!this.b&&(this.b=new mob(this.c.keySet()));return this.b};_.put=function eob(a,b){return Unb()};_.putAll=function fob(a){throw WD(new Ggb)};_.remove=function hob(a){throw WD(new Ggb)};_.size=function job(){return this.c.size()};_.bd=function kob(){return EE(this.c)};_.values=function lob(){!this.d&&(this.d=new hnb(this.c.values()));return this.d};var CC=Eeb(yAb,'Collections/UnmodifiableMap',400);AE(224,160,zAb,mob);_.$c=function nob(a){return M(this.b,a)};_.ad=function oob(){return Q(this.b)};var EC=Eeb(yAb,'Collections/UnmodifiableSet',224);AE(401,224,zAb,qob);_.contains=function rob(a){return this.b.contains(a)};_.containsAll=function sob(a){return this.b.containsAll(a)};_.Qe=function tob(){var a;a=this.b.Qe();return new vob(a)};_.toArray=function uob(){var a;a=this.b.toArray();pob(a,a.length);return a};var BC=Eeb(yAb,'Collections/UnmodifiableMap/UnmodifiableEntrySet',401);AE(403,1,{},vob);_._e=function xob(){return new zob(this.a._e())};_.$e=function wob(){return this.a.$e()};_.af=function yob(){throw WD(new Ggb)};var zC=Eeb(yAb,'Collections/UnmodifiableMap/UnmodifiableEntrySet/1',403);AE(225,1,BAb,zob);_.$c=function Aob(a){return this.a.$c(a)};_.jg=function Bob(){return this.a.jg()};_.kg=function Cob(){return this.a.kg()};_.ad=function Dob(){return this.a.ad()};_.lg=function Eob(a){throw WD(new Ggb)};_.bd=function Fob(){return EE(this.a)};var AC=Eeb(yAb,'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry',225);AE(402,161,{39:1,80:1,180:1},Gob);var DC=Eeb(yAb,'Collections/UnmodifiableRandomAccessList',402);var Hob;AE(661,1,Etb,Kob);_.$c=function Lob(a){return this===a};var FC=Eeb(yAb,'Comparators/NaturalOrderComparator',661);AE(659,25,Ptb,Mob);var GC=Eeb(yAb,'ConcurrentModificationException',659);AE(178,1,{3:1,6:1,178:1},Oob);_.ke=function Pob(a){return zfb(bE(this.a.getTime()),bE(a.a.getTime()))};_.$c=function Qob(a){return Yq(a,178)&&aE(bE(this.a.getTime()),bE(a.a.getTime()))};_.ad=function Rob(){var a;a=bE(this.a.getTime());return rE(tE(a,nE(a,32)))};_.bd=function Tob(){return Nob(this)};var HC=Eeb(yAb,'Date',178);var Uob,Vob;AE(22,130,DAb,Zob,$ob,_ob);var IC=Eeb(yAb,'HashMap',22);AE(35,691,EAb,dpb,epb);_.add=function fpb(a){return apb(this,a)};_.clear=function gpb(){Mjb(this.a)};_.contains=function hpb(a){return bpb(this,a)};_.isEmpty=function ipb(){return Njb(this.a)==0};_.Qe=function jpb(){var a;return a=(new Rkb(this.a)).a.bg().Qe(),new Xkb(a)};_.remove=function kpb(a){return cpb(this,a)};_.size=function lpb(){return Njb(this.a)};var JC=Eeb(yAb,'HashSet',35);AE(483,1,{},rpb);_.Qe=function spb(){return new tpb(this)};_.c=0;var LC=Eeb(yAb,'InternalHashCodeMap',483);AE(233,1,{},tpb);_._e=function vpb(){return this.d=this.a[this.c++],this.d};_.$e=function upb(){var a;if(this.c<this.a.length){return true}a=this.b.next();if(!a.done){this.a=a.value[1];this.c=0;return true}return false};_.af=function wpb(){qpb(this.e,this.d.jg());this.c!=0&&--this.c};_.c=0;_.d=null;var KC=Eeb(yAb,'InternalHashCodeMap/1',233);var zpb;AE(481,1,{},Jpb);_.Qe=function Kpb(){return new Lpb(this)};_.c=0;_.d=0;var OC=Eeb(yAb,'InternalStringMap',481);AE(232,1,{},Lpb);_._e=function Npb(){return this.c=this.a,this.a=this.b.next(),new Qpb(this.d,this.c,this.d.d)};_.$e=function Mpb(){return !this.a.done};_.af=function Opb(){Ipb(this.d,this.c.value[0])};var MC=Eeb(yAb,'InternalStringMap/1',232);AE(482,703,BAb,Qpb);_.jg=function Rpb(){return this.b.value[0]};_.kg=function Spb(){return Ppb(this)};_.lg=function Tpb(a){return Hpb(this.a,this.b.value[0],a)};_.c=0;var NC=Eeb(yAb,'InternalStringMap/2',482);AE(265,694,{3:1,39:1,80:1},Xpb);_.add=function Ypb(a){Upb(this,a,this.c.b,this.c);return true};_.clear=function Zpb(){Wpb(this)};_.dg=function $pb(a){var b,c;ttb(a,this.b);if(a>=this.b>>1){c=this.c;for(b=this.b;b>a;--b){c=c.b}}else{c=this.a.a;for(b=0;b<a;++b){c=c.a}}return new aqb(this,a,c)};_.size=function _pb(){return this.b};_.b=0;var RC=Eeb(yAb,'LinkedList',265);AE(404,1,{},aqb);_.fg=function bqb(a){Upb(this.d,a,this.b.b,this.b);++this.a;this.c=null};_.$e=function cqb(){return this.b!=this.d.c};_.gg=function dqb(){return this.b.b!=this.d.a};_._e=function eqb(){ptb(this.b!=this.d.c);this.c=this.b;this.b=this.b.a;++this.a;return this.c.c};_.hg=function fqb(){ptb(this.b.b!=this.d.a);this.c=this.b=this.b.b;--this.a;return this.c.c};_.af=function gqb(){var a;vtb(!!this.c);a=this.c.a;Vpb(this.d,this.c);this.b==this.c?(this.b=a):--this.a;this.c=null};_.ig=function hqb(a){vtb(!!this.c);this.c.c=a};_.a=0;_.c=null;var PC=Eeb(yAb,'LinkedList/ListIteratorImpl',404);AE(163,1,{},iqb);var QC=Eeb(yAb,'LinkedList/Node',163);AE(668,1,{});var jqb,kqb;var VC=Eeb(yAb,'Locale',668);AE(259,668,{},mqb);_.bd=function nqb(){return ''};var TC=Eeb(yAb,'Locale/1',259);AE(260,668,{},oqb);_.bd=function pqb(){return 'unknown'};var UC=Eeb(yAb,'Locale/4',260);AE(67,25,{3:1,21:1,25:1,19:1,67:1},rqb);var XC=Eeb(yAb,'NoSuchElementException',67);AE(189,1,{185:1},uqb);_.pg=function vqb(a){this.a.Tf(a)};var ZC=Eeb(yAb,'Spliterator/OfDouble/0methodref$accept$Type',189);AE(190,1,{186:1},wqb);_.qg=function xqb(a){this.a.Tf(vfb(a))};var $C=Eeb(yAb,'Spliterator/OfInt/2methodref$accept$Type',190);AE(152,1,{});_.mg=function Cqb(){return this.c};_.ng=function Dqb(){return this.d};_.c=0;_.d=0;var eD=Eeb(yAb,'Spliterators/BaseSpliterator',152);AE(255,152,{});_.og=function Fqb(a){return Yq(a,185)?Ksb(this,a):Ksb(this,new uqb(a))};var _C=Eeb(yAb,'Spliterators/AbstractDoubleSpliterator',255);AE(256,152,{});_.og=function Hqb(a){return Yq(a,186)?Psb(this,a):Psb(this,new wqb(a))};var aD=Eeb(yAb,'Spliterators/AbstractIntSpliterator',256);AE(254,152,{});var bD=Eeb(yAb,'Spliterators/AbstractSpliterator',254);AE(257,1,{});_.mg=function Kqb(){return this.b};_.ng=function Lqb(){return this.d-this.c};_.b=0;_.c=0;_.d=0;var dD=Eeb(yAb,'Spliterators/BaseArraySpliterator',257);AE(187,257,{},Nqb);_.og=function Oqb(a){return Jqb(this,a)};var cD=Eeb(yAb,'Spliterators/ArraySpliterator',187);AE(123,1,{},Qqb);_.mg=function Rqb(){return this.a};_.ng=function Sqb(){Pqb(this);return this.c};_.og=function Tqb(a){rtb(a);Pqb(this);if(cmb(this.d)){a.Tf(dmb(this.d));return true}return false};_.a=0;_.c=0;var fD=Eeb(yAb,'Spliterators/IteratorSpliterator',123);AE(200,1,{},Vqb);_.bd=function Wqb(){return !this.a?this.c:this.e.length==0?this.a.a:this.a.a+(''+this.e)};var gD=Eeb(yAb,'StringJoiner',200);AE(705,1,Etb);_.Wf=function frb(){return 'DUMMY'};_.$f=function grb(){return -1};_.bd=function irb(){return this.Wf()};var Xqb,Yqb,Zqb,$qb,_qb,arb,brb,crb,drb;var sD=Eeb(Fvb,'Level',705);AE(516,705,Etb,jrb);_.Wf=function krb(){return 'ALL'};_.$f=function lrb(){return Ntb};var jD=Eeb(Fvb,'Level/LevelAll',516);AE(517,705,Etb,mrb);_.Wf=function nrb(){return 'CONFIG'};_.$f=function orb(){return 700};var kD=Eeb(Fvb,'Level/LevelConfig',517);AE(518,705,Etb,prb);_.Wf=function qrb(){return 'FINE'};_.$f=function rrb(){return 500};var lD=Eeb(Fvb,'Level/LevelFine',518);AE(519,705,Etb,srb);_.Wf=function trb(){return 'FINER'};_.$f=function urb(){return 400};var mD=Eeb(Fvb,'Level/LevelFiner',519);AE(520,705,Etb,vrb);_.Wf=function wrb(){return 'FINEST'};_.$f=function xrb(){return 300};var nD=Eeb(Fvb,'Level/LevelFinest',520);AE(521,705,Etb,yrb);_.Wf=function zrb(){return 'INFO'};_.$f=function Arb(){return 800};var oD=Eeb(Fvb,'Level/LevelInfo',521);AE(522,705,Etb,Brb);_.Wf=function Crb(){return 'OFF'};_.$f=function Drb(){return Ktb};var pD=Eeb(Fvb,'Level/LevelOff',522);AE(523,705,Etb,Erb);_.Wf=function Frb(){return 'SEVERE'};_.$f=function Grb(){return Qub};var qD=Eeb(Fvb,'Level/LevelSevere',523);AE(524,705,Etb,Hrb);_.Wf=function Irb(){return oAb};_.$f=function Jrb(){return 900};var rD=Eeb(Fvb,'Level/LevelWarning',524);AE(531,1,{},Nrb);var Krb;var tD=Eeb(Fvb,'LogManager',531);AE(639,1,Etb,Qrb);_.b='';_.c=0;_.e=null;var uD=Eeb(Fvb,'LogRecord',639);AE(138,1,{138:1},jsb);_.e=false;var Rrb=false,Srb=false,Trb=false,Urb=false,Vrb=false;var vD=Eeb(Fvb,'Logger',138);AE(168,1,{});_.c=false;var ID=Eeb(HAb,'TerminatableStream',168);AE(566,168,{},psb);var xD=Eeb(HAb,'DoubleStreamImpl',566);AE(567,1,{185:1},rsb);_.pg=function ssb(a){qsb(this.a,a)};var wD=Eeb(HAb,'DoubleStreamImpl/lambda$0$Type',567);AE(564,168,{},usb);var zD=Eeb(HAb,'IntStreamImpl',564);AE(565,1,{186:1},wsb);_.qg=function xsb(a){vsb(this.a,a)};var yD=Eeb(HAb,'IntStreamImpl/lambda$6$Type',565);AE(85,168,{},Esb);var ysb;var HD=Eeb(HAb,'StreamImpl',85);AE(535,254,{},Gsb);_.og=function Hsb(a){this.a=false;while(!this.a&&this.b.og(new Isb(this,a)));return this.a};_.a=false;var BD=Eeb(HAb,'StreamImpl/FilterSpliterator',535);AE(538,1,{},Isb);_.Tf=function Jsb(a){Fsb(this.a,this.b,a)};var AD=Eeb(HAb,'StreamImpl/FilterSpliterator/lambda$0$Type',538);AE(534,255,{},Lsb);_.rg=function Msb(a){return Ksb(this,a)};var DD=Eeb(HAb,'StreamImpl/MapToDoubleSpliterator',534);AE(537,1,{},Nsb);_.Tf=function Osb(a){this.a.pg((rtb(a),a))};var CD=Eeb(HAb,'StreamImpl/MapToDoubleSpliterator/lambda$0$Type',537);AE(533,256,{},Qsb);_.rg=function Rsb(a){return Psb(this,a)};var FD=Eeb(HAb,'StreamImpl/MapToIntSpliterator',533);AE(536,1,{},Ssb);_.Tf=function Tsb(a){this.a.qg(dr((rtb(a),a)))};var ED=Eeb(HAb,'StreamImpl/MapToIntSpliterator/lambda$0$Type',536);AE(539,1,{},Usb);_.Tf=function Vsb(a){zsb()};var GD=Eeb(HAb,'StreamImpl/lambda$0$Type',539);AE(712,1,{});var JD=Eeb(cub,'ConsoleLogger',712);AE(201,88,xAb);var MD=Eeb(cub,'EmulatedCharset',201);AE(202,201,xAb,dtb);var KD=Eeb(cub,'EmulatedCharset/LatinCharset',202);AE(308,201,xAb,gtb);var LD=Eeb(cub,'EmulatedCharset/UtfCharset',308);var fr=Heb('char','C');var ir=Heb('int','I');var TA=Geb(Uwb,'ContextClickRpc');var er=Heb('byte','B');var gr=Heb('double','D');var hr=Heb('float','F');var hB=Geb(pAb,'UIServerRpc');var bB=Geb(uyb,'DelayedCallbackRpc');var $A=Eeb(Zwb,'URLReference',null);_=DE('Vaadin.Spreadsheet.Api',u8);_=DE('Vaadin.Spreadsheet.CellData',jO);_=DE('Vaadin.Spreadsheet.OverlayInfo',gQ);_.COMPONENT=eQ;_.IMAGE=fQ;_=DE('Vaadin.Spreadsheet.PopupButtonState',qR);_=DE('Vaadin.Spreadsheet.SpreadsheetActionDetails',GZ);_=DE('java.io.Serializable');_.$isInstance=ceb;keb();_=DE('java.lang.Boolean');_.$isInstance=meb;_=DE('java.lang.CharSequence');_.$isInstance=reb;_=DE('java.lang.Cloneable');_.$isInstance=Teb;_=DE('java.lang.Comparable');_.$isInstance=Ueb;_=DE('java.lang.Double');_.$isInstance=_eb;_=DE('java.lang.Number');_.$isInstance=Web;_=DE('java.lang.String');_.$isInstance=_fb;_=DE('java.lang.Throwable');_.of=Hf;_=DE('javaemul.internal.HashCodes',itb);_.getIdentityHashCode=jtb;_.getNextHash=ktb;_.getObjectIdentityHashCode=ltb;_=DE('javaemul.internal.JsUtils');_.toDoubleFromUnsignedInt=ytb;var Atb=(ag(),dg);var gwtOnLoad=gwtOnLoad=xE;vE(GE);yE('permProps',[[[IAb,JAb],[KAb,'gecko1_8']],[[IAb,JAb],[KAb,'gecko1_8']],[[IAb,JAb],[KAb,'safari']]]);if (SpreadsheetApi) SpreadsheetApi.onScriptLoad(gwtOnLoad);})();

let Spreadsheet = Vaadin.Spreadsheet.Api;

export { Spreadsheet };
