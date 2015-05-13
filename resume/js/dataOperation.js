
//加载项目信息  中文版
function projectsLoad(jsonName,tableClass){
	var jsonLen=jsonName.length;
	var trString="<tr>";
	for(var i=0;i<jsonLen;i++){
		trString+="<td align='center' id='"+i
				+"' onclick='showProjectDetail(this);'><img src='images/"
				+(jsonName[i].picName==''?"noPic":jsonName[i].picName)
				+".jpg' width='200' height='150' alt='"+jsonName[i].info
				+"' title='点击查看详情' /><p style='color:#fff;'>"
				+jsonName[i].info+"</p></td>"
		if(i==jsonLen-1){   //如果遍历完，只加tr的结束标签
			trString+="</tr>";
		}
		else{
			if(i%3==2){  //换行，还要加上tr开始标签
				trString+="</tr><tr>";
			}
		} 
	}
	$(trString).appendTo("."+tableClass+" tbody");
}
              
//显示项目详情
function showProjectDetail(e){
	popWin("projectDetailDiv");
	var $detailDiv=$("#projectDetailDiv");
	var $index=$(e).attr("id");
	var $projectDetail="<img src='images/"
					  +(projectsInfo[$index].picName==''?"noPic":projectsInfo[$index].picName)
				      +".jpg' class='imgShadow' width='500' height='360' style='margin-left:20px;' /><br />"
				      +"<p style='text-indent:20px;'>"
					  +projectsInfo[$index].detail
				      +"</p>"
					  +"\nwebsite:<a href='"+projectsInfo[$index].url
					  +"' target='_blank'>"
					  +(projectsInfo[$index].url=="#"?"暂无":projectsInfo[$index].url)
					  +"</a>";
	$detailDiv.html($projectDetail);
}

