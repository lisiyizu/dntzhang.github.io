function Desenho(u,j){function C(f,d,e){var a,c;a=d,c=e;if(b[d][e]==f){while(b[a+1][c]==f)a++;var g=a;do{a=d-1,c++;while(b[a+1][c]==f&&a+1<=g)a++}while(a==g);c--;var h=g-d,i=c-e;return{x:d,y:e,w:h,h:i}}return{w:-1,h:-1}}function E(f,d,g){var a,c;a=d,c=g;if(b[d][g]==f){while(b[a-1][c]==f)a--;var e=a;do{a=d+1,c--;while(b[a-1][c]==f&&a-1>=e)a--}while(a==e);c++;var h=d-e,i=g-c;return{x:e,y:c,w:h,h:i}}return{w:-1,h:-1}}function F(e,f,d){var c,a;c=f,a=d;if(b[f][d]==e){while(b[c][a+1]==e)a++;var g=a;do{a=d-1,c--;while(b[c][a+1]==e&&a+1<=g)a++}while(a==g);c++;var h=f-c,i=g-d;return{x:c,y:d,w:h,h:i}}return{w:-1,h:-1}}function G(g,d,e){var c,a;c=d,a=e;if(b[d][e]==g){while(b[c][a-1]==g)a--;var f=a;do{a=e+1,c++;while(b[c][a-1]==g&&a-1>=f)a--}while(a==f);c--;var h=c-d,i=e-f;return{x:d,y:f,w:h,h:i}}return{w:-1,h:-1}}function v(a,b,c,d,e,f){this.x=a,this.y=b,this.w=c,this.h=d,this.ref=e,this.andada=f}function w(c){if(!r&&x){document.onmousemove=y,document.addEventListener("touchmove",y,false),document.onmouseup=z,document.addEventListener("touchend",z,false),y(c),r=true,k=h,l=e;switch(q){case 0:c-=1;a.linha(k-1,l,k,l,0);a.gLinha(k-1,l,k,l);c+=1;i=k-1+"#"+l+"#"+k+"#"+l;break;case 7:a.balde(k,l),r=false;break;case 8:a.mudaCor(b[k][l],true),a.onSelCor instanceof Function&&a.onSelCor(),r=false;break;case 1:i=k+"#"+l,a.borracha(h,e,0,true)}a.onStartDraw instanceof Function&&a.onStartDraw()}}function D(a){var d,b,c,e;b=c=0;if(a.getBoundingClientRect)d=a.getBoundingClientRect(),b=Math.round(d.left),c=Math.round(d.top),b+=document.documentElement.scrollLeft,c+=document.documentElement.scrollTop;else if(document.getBoxObjectFor)d=document.getBoxObjectFor(a),b=d.x,c=d.y;else while(a&&a.nodeName!="BODY")b+=a.offsetLeft,c+=a.offsetTop,window.opera?(b-=1,c-=1):(b+=1,c+=1),e=parseInt(document.defaultView.getComputedStyle(a,null).getPropertyValue("border-width")),e>0&&(b+=e,c+=e),a=a.offsetParent;return{x:b,y:c}}function y(d){d.touches?(h=d.touches[0].pageX,e=d.touches[0].pageY):(h=d.clientX,e=d.clientY),h=h+document.documentElement.scrollLeft-D(j).x,e=e+document.documentElement.scrollTop-D(j).y-B,A.style.pixelLeft=h-4,B==0?A.style.pixelTop=e-1:A.style.pixelTop=e+1;var b=Math.floor(c/2);h>=m-b?h=m-b:h<=b&&(h=b),e>=p-b?e=p-b:e<=b&&(e=b);if(r&&x)if(q==0){if(i.length>230){var f="2@"+i;n.push(f),a.onCodigo instanceof Function&&a.onCodigo(f),i=k+"#"+l}if(h!=160||e!=160||Math.pow(k-h,2)+Math.pow(l-e,2)<25)a.linha(k,l,h,e,0),k=h,l=e,i+="#"+k+"#"+l}else if(q==1){if(i.length>230){var f="21@"+i;n.push(f),a.onCodigo instanceof Function&&a.onCodigo(f),i=h+"#"+e}a.borracha(h,e,0,true),i+="#"+h+"#"+e}else o.clearRect(0,0,m,p),a.desenhar(k,l,h,e,q,1,false);d.preventDefault(),d.stopPropagation()}function z(){if(r&&x){var b;q==0?(b="2@"+i,n.push(b),a.onCodigo instanceof Function&&a.onCodigo(b)):q==1?(b="21@"+i,n.push(b),a.onCodigo instanceof Function&&a.onCodigo(b)):(a.desenhar(k,l,h,e,q,0,true),o.clearRect(0,0,m,p)),r=false}}var a=this,x=false,r=false,I=false,i="",n=[],f=u.getContext("2d"),o,J,K,d=[f],m=u.offsetWidth,p=u.offsetHeight,g=1,c=4,q=0,s=arrColor,k,l,h,e,b=[],t=[];this.onSelCor=null,this.onCodigo=null,this.onStartDraw=null;var A=document.getElementById("draw_pen"),B=0,H=20;this.drawImage=function(a,b,c){f.drawImage(a,b,c)},this.borracha=function(f,g,h){f-=c*3,g-=c*3,d[h].clearRect(f,g,c*6+1,c*6+1);for(var a=f;a<=f+c*6;a++)for(var e=g;e<=g+c*6;e++)a>=0&&e>=0&&a<m&&e<p&&(b[a][e]=14)},this.linha=function(b,e,f,g,a){d[a].beginPath(),d[a].lineWidth=c,d[a].moveTo(b,e),d[a].lineTo(f,g),d[a].stroke(),d[a].closePath()},this.gLinha=function(b,d,e,g){var f,l=Math.abs(g-d)>Math.abs(e-b);l&&(f=b,b=d,d=f,f=e,e=g,g=f),b>e&&(f=b,b=e,e=f,f=d,d=g,g=f);var m=e-b,n=Math.abs(g-d),i=-m/2,j,k=d;d<g?j=1:j=-1;for(var h=b;h<=e;h++)l?a.gElipseF(k,h,Math.floor(c/2),Math.floor(c/2)):a.gElipseF(h,k,Math.floor(c/2),Math.floor(c/2)),i+=n,i>=0&&(k+=j,i-=m)},this.retanguloF=function(a,b,c,e,f){d[f].clearRect(a,b,c,e)},this.gRetanguloF=function(a,c,f,h){var j=a+f,k=c+h;i+="#"+a+"#"+c+"#"+f+"#"+h;for(var d=a;d<j;d++)for(var e=c;e<k;e++)b[d][e]=g},this.retanguloB=function(a,b,c,e,f){d[f].strokeRect(a,b,c,e)},this.gRetanguloB=function(d,e,l,m){var f=Math.ceil(c/2),j=d+l+f-1,k=e+m+f-1;d-=f,e-=f;for(var h=d;h<=j;h++)for(var a=0;a<c;a++)b[h][e+a]=g,b[h][k-a]=g;for(var i=e;i<=k;i++)for(var a=0;a<c;a++)b[d+a][i]=g,b[j-a][i]=g},this.elipseF=function(a,b,e,c,g){var f=4*((Math.sqrt(2)-1)/3);d[g].beginPath(),d[g].moveTo(a,b-c),d[g].bezierCurveTo(a+f*e,b-c,a+e,b-f*c,a+e,b),d[g].bezierCurveTo(a+e,b+f*c,a+f*e,b+c,a,b+c),d[g].bezierCurveTo(a-f*e,b+c,a-e,b+f*c,a-e,b),d[g].bezierCurveTo(a-e,b-f*c,a-f*e,b-c,a,b-c),d[g].fill()},this.gElipseF=function(f,h,d,e){if(d>0&&e>0){var l,a,j,k,i,m,n,o,p;m=2*d*d,n=2*e*e,l=d,a=0,j=e*e*(1-2*d),k=d*d,i=0,o=n*d,p=0;while(o>=p){for(var c=l;c>=1;c--)b[f+c-1][h+a-1]=g,b[f-c][h+a-1]=g,b[f-c][h-a]=g,b[f+c-1][h-a]=g;a++,p+=m,i+=k,k+=m,2*i+j>0&&(l--,o-=n,i+=j,j+=n)}l=0,a=e,j=e*e,k=d*d*(1-2*e),i=0,o=0,p=m*e;while(o<=p){for(var c=l;c>=1;c--)b[f+c-1][h+a-1]=g,b[f-c][h+a-1]=g,b[f-c][h-a]=g,b[f+c-1][h-a]=g;l++,o+=n,i+=j,j+=n,2*i+k>0&&(a--,p-=m,i+=k,k+=m)}}},this.elipseB=function(a,b,e,c,g){var f=4*((Math.sqrt(2)-1)/3);d[g].beginPath(),d[g].moveTo(a,b-c),d[g].bezierCurveTo(a+f*e,b-c,a+e,b-f*c,a+e,b),d[g].bezierCurveTo(a+e,b+f*c,a+f*e,b+c,a,b+c),d[g].bezierCurveTo(a-f*e,b+c,a-e,b+f*c,a-e,b),d[g].bezierCurveTo(a-e,b-f*c,a-f*e,b-c,a,b-c),d[g].stroke()},this.gElipseB=function(g,h,e,f){if(e>0&&f>0){var b,d,j,k,i,l,m,n,o;l=2*e*e,m=2*f*f,b=e,d=0,j=f*f*(1-2*e),k=e*e,i=0,n=m*e,o=0;while(n>o)a.gElipseF(g+b,h+d,Math.floor(c/2),Math.floor(c/2)),a.gElipseF(g-b,h+d,Math.floor(c/2),Math.floor(c/2)),a.gElipseF(g-b,h-d,Math.floor(c/2),Math.floor(c/2)),a.gElipseF(g+b,h-d,Math.floor(c/2),Math.floor(c/2)),d++,o+=l,i+=k,k+=l,2*i+j>0&&(b--,n-=m,i+=j,j+=m);b=0,d=f,j=f*f,k=e*e*(1-2*f),i=0,n=0,o=l*f;while(n<=o)a.gElipseF(g+b,h+d,Math.floor(c/2),Math.floor(c/2)),a.gElipseF(g-b,h+d,Math.floor(c/2),Math.floor(c/2)),a.gElipseF(g-b,h-d,Math.floor(c/2),Math.floor(c/2)),a.gElipseF(g+b,h-d,Math.floor(c/2),Math.floor(c/2)),b++,n+=m,i+=j,j+=m,2*i+k>0&&(d--,o-=l,i+=k,k+=l)}},this.balde=function(l,m){var k=b[l][m];if(g!=k){while(b[l-1][m]==k)l--;while(b[l][m-1]==k)m--;var c=C(k,l,m),d=new v(l,m,c.w,c.h,0,0),e,j=c.w,h;i="",f.clearRect(c.x,c.y,c.w+1,c.h+1),a.gRetanguloF(c.x,c.y,c.w+1,c.h+1),i=i.substr(1,i.length);do{e=0,d.ref==2&&(e+=d.andada);while(e<=d.h)c=G(k,d.x+d.w+1,d.y+d.h+1-e),h=c.h,h!=-1?(t[h].push(new v(c.x,c.y,c.w,c.h,1,d.h+1-e)),f.clearRect(c.x,c.y,c.w+1,c.h+1),a.gRetanguloF(c.x,c.y,c.w+1,c.h+1),h>j&&(j=h),e+=h):e++;e=0,d.ref==1&&(e+=d.andada);while(e<=d.h)c=F(k,d.x-1,d.y+e),h=c.h,h!=-1?(t[h].push(new v(c.x,c.y,c.w,c.h,2,d.h+1-e)),f.clearRect(c.x,c.y,c.w+1,c.h+1),a.gRetanguloF(c.x,c.y,c.w+1,c.h+1),h>j&&(j=h),e+=h):e++;e=0,d.ref==4&&(e+=d.andada);while(e<=d.w)c=C(k,d.x+e,d.y+d.h+1),h=c.w,h!=-1?(t[h].push(new v(c.x,c.y,c.w,c.h,3,d.w+1-e)),f.clearRect(c.x,c.y,c.w+1,c.h+1),a.gRetanguloF(c.x,c.y,c.w+1,c.h+1),h>j&&(j=h),e+=h):e++;e=0,d.ref==3&&(e+=d.andada);while(e<=d.w)c=E(k,d.x+d.w+1-e,d.y-1),h=c.w,h!=-1?(t[h].push(new v(c.x,c.y,c.w,c.h,4,d.w+1-e)),f.clearRect(c.x,c.y,c.w+1,c.h+1),a.gRetanguloF(c.x,c.y,c.w+1,c.h+1),h>j&&(j=h),e+=h):e++;d=t[j].pop();while(d==null&&j>0)d=t[--j].pop()}while(d!=null);var o="3@"+i;n.push(o),a.onCodigo instanceof Function&&a.onCodigo(o)}},this.desenhar=function(g,h,i,j,q,m,f){if(g==i&&h==j)return;var b,d,c,e;g>=i?(b=i,d=g):(b=g,d=i),h>=j?(c=j,e=h):(c=h,e=j);switch(q){case 6:a.linha(g,h,i,j,m),f&&a.gLinha(g,h,i,j);break;case 2:if(b==d||c==e){f=false;break}a.retanguloF(b,c,d-b,e-c,m),f&&a.gRetanguloF(b,c,d-b,e-c);break;case 3:a.retanguloB(b,c,d-b,e-c,m),f&&a.gRetanguloB(b,c,d-b,e-c);break;case 4:if(b==d||c==e){f=false;break}var k=Math.floor((d-b)/2),l=Math.floor((e-c)/2),o=Math.round(b+k),p=Math.round(c+l);a.elipseF(o,p,k,l,m),f&&a.gElipseF(o,p,k,l);break;case 5:var k=Math.floor((d-b)/2),l=Math.floor((e-c)/2),o=Math.round(b+k),p=Math.round(c+l);a.elipseB(o,p,k,l,m),f&&a.gElipseB(o,p,k,l)}if(f){var r="1@"+q+"#"+g+"#"+h+"#"+i+"#"+j;n.push(r),a.onCodigo instanceof Function&&a.onCodigo(r)}},this.mudaOpcao=function(a){a==1?f.fillStyle="#FFFFFF":q==1&&(f.fillStyle=s[g]),q=a},this.mudaBorda=function(b,e){f.lineWidth=b,j!=null&&(o.lineWidth=b),c=b;if(e){var d="6@"+b;n.push(d),a.onCodigo instanceof Function&&a.onCodigo(d)}},this.mudaCor=function(b,d){b=parseInt(b),f.strokeStyle=s[b],j!=null&&(o.strokeStyle=s[b],o.fillStyle=s[b]),q!=1&&(f.fillStyle=s[b]),g=b;if(d){var c="5@"+b;n.push(c),a.onCodigo instanceof Function&&a.onCodigo(c)}},this.limparTela=function(h,i){if(h){b=new Array(m);for(var d=0;d<m;d++){b[d]=new Array(p);for(var e=0;e<p;e++)b[d][e]=14}b[-1]=[],b[m]=[];for(var d=-1;d<=p;d++)b[-1][d]=0,b[m][d]=0;for(d=0;d<m;d++)b[d][-1]=0,b[d][p]=0;n=["5@"+g,"6@"+c],i||a.onCodigo instanceof Function&&a.onCodigo("4@")}f.clearRect(0,0,m,p),f.fillStyle="#FFF",a.retanguloF(0,0,m,p,0),f.fillStyle=s[g],j!=null&&o.clearRect(0,0,m,p),r=false},this.getSequencia=function(){return n.join("|")},this.setSequencia=function(a){n=a.split("|")},this.getCor=function(){return g},this.getCorReal=function(){return s[g]},this.getLargura=function(){return m},this.getAltura=function(){return p},this.getUltimaAcao=function(){return n.length>0?n[n.length-1]:null},this.liberar=function(a){x=a,a?(u.style.cursor="crosshair",j!=null&&(j.style.cursor="crosshair")):(u.style.cursor="default",j!=null&&(j.style.cursor="default"))},this.setScale=function(){o.scale(1,1)},this.setPenOffsetTop=function(a){B=a},this.setEnd=function(){j.onmousedown="",j.removeEventListener("touchstart",w,false),document.removeEventListener("touchmove",y,false),document.removeEventListener("touchend",z,false),document.onmousemove="",document.onmouseup=""},this.setStart=function(){j!=null&&(o=j.getContext("2d"),d.push(o),j.onmousedown=w,j.addEventListener("touchstart",w,false),o.lineCap="round",o.fillStyle="#000000",o.strokeStyle="#000000",o.lineWidth=c),f.lineCap="round",f.fillStyle="#000000",f.strokeStyle="#000000",f.lineWidth=c;for(var b=0;b<=m;b++)t[b]=[];a.limparTela(true)},this.setDrawStart=function(){j!=null&&(j.onmousedown=w,j.addEventListener("touchstart",w,false))},this.ClearAll=function(){f.clearRect(0,0,500,500)},this.setStart()}