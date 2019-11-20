var ctboxs=document.getElementById('ct1');
var ctbox=ctboxs.getElementsByClassName('ctbox');
var title=ctboxs.getElementsByClassName('title');
var titleHeight=60;//标题高
var contentHeight=470;//内容高
var n=0;
for(var i=0;i<title.length;i++){
	title[i].index=i;//把序号保存到自定义的index属性中
	title[i].onclick=function(){
		for(var i=0;i<ctbox.length;i++){
			n=this.index;//点击的序号记为n，点击序号的存储
			if(i<=n){
				ctbox[i].style.top=i*titleHeight+'px';
			}else{
				ctbox[i].style.top=i*titleHeight+contentHeight+'px';
			}
		}
	}
}
/*
点击的序号记为n，则
ctbox序号小于等于n的时候
ctbox的left值计算公式为序号*titleWidth
ctbox序号大于n的时候
ctbox的left值计算公式为序号*titleWidth+contentWidth
点击第0个标题
0 650px 710px 770px
点击第1个标题
0 60px 710px 770px
点击第2个标题
0 60px 120px 770px
点击第3个标题
0 60px 120px 180px

 */