/**
 * Created by admin on 2017/5/26.
 */
!function(){function a(a){var d,e,b=a.naturalWidth,c=a.naturalHeight;return b*c>1048576?(d=document.createElement("canvas"),d.width=d.height=1,e=d.getContext("2d"),e.drawImage(a,-b+1,0),0===e.getImageData(0,0,1,1).data[3]):!1}function b(a,b,c){var e,f,g,h,i,j,k,d=document.createElement("canvas");for(d.width=1,d.height=c,e=d.getContext("2d"),e.drawImage(a,0,0),f=e.getImageData(0,0,1,c).data,g=0,h=c,i=c;i>g;)j=f[4*(i-1)+3],0===j?h=i:g=i,i=h+g>>1;return k=i/c,0===k?1:k}function c(a,b,c){var e=document.createElement("canvas");return d(a,e,b,c),e.toDataURL("image/jpeg",b.quality||.8)}function d(c,d,f,g){var m,n,o,p,q,r,s,t,u,v,w,h=c.naturalWidth,i=c.naturalHeight,j=f.width,k=f.height,l=d.getContext("2d");for(l.save(),e(d,l,j,k,f.orientation),m=a(c),m&&(h/=2,i/=2),n=1024,o=document.createElement("canvas"),o.width=o.height=n,p=o.getContext("2d"),q=g?b(c,h,i):1,r=Math.ceil(n*j/h),s=Math.ceil(n*k/i/q),t=0,u=0;i>t;){for(v=0,w=0;h>v;)p.clearRect(0,0,n,n),p.drawImage(c,-v,-t),l.drawImage(o,0,0,n,n,w,u,r,s),v+=n,w+=r;t+=n,u+=s}l.restore(),o=p=null}function e(a,b,c,d,e){switch(e){case 5:case 6:case 7:case 8:a.width=d,a.height=c;break;default:a.width=c,a.height=d}switch(e){case 2:b.translate(c,0),b.scale(-1,1);break;case 3:b.translate(c,d),b.rotate(Math.PI);break;case 4:b.translate(0,d),b.scale(1,-1);break;case 5:b.rotate(.5*Math.PI),b.scale(1,-1);break;case 6:b.rotate(.5*Math.PI),b.translate(0,-d);break;case 7:b.rotate(.5*Math.PI),b.translate(c,-d),b.scale(-1,1);break;case 8:b.rotate(-.5*Math.PI),b.translate(-c,0)}}function f(a){var b,c,d;if(window.Blob&&a instanceof Blob){if(b=new Image,c=window.URL&&window.URL.createObjectURL?window.URL:window.webkitURL&&window.webkitURL.createObjectURL?window.webkitURL:null,!c)throw Error("No createObjectURL function found to create blob url");b.src=c.createObjectURL(a),this.blob=a,a=b}a.naturalWidth||a.naturalHeight||(d=this,a.onload=function(){var b,c,a=d.imageLoadListeners;if(a)for(d.imageLoadListeners=null,b=0,c=a.length;c>b;b++)a[b]()},this.imageLoadListeners=[]),this.srcImage=a}f.prototype.render=function(a,b,e){var f,g,h,i,j,k,l,m,n,o,p;if(this.imageLoadListeners)return f=this,this.imageLoadListeners.push(function(){f.render(a,b,e)}),void 0;b=b||{},g=this.srcImage.naturalWidth,h=this.srcImage.naturalHeight,i=b.width,j=b.height,k=b.maxWidth,l=b.maxHeight,m=!this.blob||"image/jpeg"===this.blob.type,i&&!j?j=h*i/g<<0:j&&!i?i=g*j/h<<0:(i=g,j=h),k&&i>k&&(i=k,j=h*i/g<<0),l&&j>l&&(j=l,i=g*j/h<<0),n={width:i,height:j};for(o in b)n[o]=b[o];p=a.tagName.toLowerCase(),"img"===p?a.src=c(this.srcImage,n,m):"canvas"===p&&d(this.srcImage,a,n,m),"function"==typeof this.onrender&&this.onrender(a),e&&e()},"function"==typeof define&&define.amd?define([],function(){return f}):this.MegaPixImage=f}();
