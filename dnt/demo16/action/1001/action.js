﻿try{objPage.AddJSOnce("jsCanvasHelper","action/CanvasHelper.js")}catch(e){}(function(e){var d,a,k,b,j="action/1001/";function h(){d=document.getElementById("canvasMove");a=new Stage(d);a.removeAllChildren();for(var j=new CanvasHelper(b),e=j.searchRects(),h=0;h<e.length;h++){var i=0,g=new Bitmap(b);f(g,e[h]);a.addChild(g);(function(a){var b=Tween.get(g,{loop:true}).to({rotation:360},1e3).call(function(){a++;if(a>4){a=0;c();b.loop=false}})})(i)}Ticker.addListener(a);e.length=0}function f(b,a){b.sourceRect=new Rectangle(a[0].x,a[0].y,a[1].x-a[0].x,a[1].y-a[0].y);b.regX=Math.round((a[1].x-a[0].x)/2);b.regY=Math.round((a[1].y-a[0].y)/2);b.x=Math.round((a[1].x+a[0].x)/2);b.y=Math.round((a[1].y+a[0].y)/2)}function i(){if(bolDo)return;try{document.createElement("canvas").getContext("2d");bolDo=true;b=document.getElementById("canvas");document.getElementById("canvasMove").style.display="block";document.getElementById("canvas").style.display="none";desenho.setEnd();h()}catch(a){objPage.ShowMessage("游览器版本较低<br/>不支持特效功能")}}function c(){try{bolDo=false;a.removeAllChildren();document.getElementById("canvasMove").style.display="none";document.getElementById("canvas").style.display="block";desenho.setDrawStart()}catch(b){}}function g(){if(bolDo)return;objPage.ShowConfirm("确认清除画板",0,"objPage.InitBoard(true);objPage.SetLineColor(intOldCol);")}e.DoAction=i;e.EndAction=c;if(document.getElementById("draw_reset"))document.getElementById("draw_reset").onclick=g})(window)