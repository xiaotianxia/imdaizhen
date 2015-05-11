//加载成员信息   团队成员   英文版
function memberInfoLoad(jsonName,tableClass){
	var jsonLen=jsonName.length;
	var trString="<tr>";
	for(var i=0;i<jsonLen;i++){
		trString+="<td><img src='../images/teamMember/"+(jsonName[i].hasPic==false?"noPic":jsonName[i].name)+".jpg' style='width:150px;height:190px;' alt='"+jsonName[i].name+"'/>"
				 +"<h5>"+jsonName[i].name+", "+jsonName[i].grade+"</h5>"
				 +"<p class='p p1'>research fields:"+jsonName[i].reseachField+"</p>"
				 +"<p class='p p2'>Email:"+jsonName[i].email+"</p></td>"
		if(i%5==4){
			trString+="</tr>";
		}
		else{
			continue;
		}
	}
	$(trString).appendTo("."+tableClass+" tbody");
}

//加载成员信息   团队成员   中文版
function memberInfoLoad_cn(jsonName,tableClass){
	var jsonLen=jsonName.length;
	var trString="<tr>";
	for(var i=0;i<jsonLen;i++){
		trString+="<td><img src='../images/teamMember/"+(jsonName[i].hasPic==false?"noPic":jsonName[i].name)+".jpg' style='width:150px;height:190px;' alt='"+jsonName[i].name+"'/>"
				 +"<h5>"+jsonName[i].name+", "+jsonName[i].grade+"</h5>"
				 +"<p class='p p1'>研究领域:"+jsonName[i].reseachField+"</p>"
				 +"<p class='p p2'>电子邮箱:"+jsonName[i].email+"</p></td>"
		if(i%5==4){
			trString+="</tr>";
		}
		else{
			continue;
		}
	}
	$(trString).appendTo("."+tableClass+" tbody");
}


//加载出版论文信息  英文版
function publicationsLoad(jsonName,tableClass){
	var jsonLen=jsonName.length;
	var trString="";
	for(var i=0;i<jsonLen;i++){
		trString+="<tr><td>"+jsonName[i].title
				 +"</td><td>"+jsonName[i].publishedIn
				 +"</td><td><a class='button' href='"+jsonName[i].link+"' target='_blank'>download</a>"
				 +"</td><td><a class='button' id='"+i+"' onclick='quoteIt(this);'>reference</a>"
				 +"</td></tr>";
	}
	$(trString).appendTo("."+tableClass);
}

//加载出版论文信息  中文版
function publicationsLoad_cn(jsonName,tableClass){
	var jsonLen=jsonName.length;
	var trString="";
	for(var i=0;i<jsonLen;i++){
		trString+="<tr><td>"+jsonName[i].title
				 +"</td><td>"+jsonName[i].publishedIn
				 +"</td><td><a class='button' href='"+jsonName[i].link+"' target='_blank'>下载</a>"
				 +"</td><td><a class='button' id='"+i+"' onclick='quoteIt_cn(this);'>引用</a>"
				 +"</td></tr>";
	}
	$(trString).appendTo("."+tableClass);
}

//加载项目信息
function projectsLoad(jsonName,tableClass){
	var jsonLen=jsonName.length;
	var trString="<tr>";
	for(var i=0;i<jsonLen;i++){
		trString+="<td id='"+i+"' onclick='showProjectDetail(this);'><img src='../images/projects/"+(jsonName[i].hasPic==false?"noPic":jsonName[i].picName)+".jpg' style='width:160px;height:160px;' alt='"+jsonName[i].info+"'/>"
				 +"<p style='color:#000;'>"+jsonName[i].info+"</p></td>"
		if(i%5==4){
			trString+="</tr>";
		}
		else{
			continue;
		}
	}
	$(trString).appendTo("."+tableClass+" tbody");
}



//加载项目信息  中文版
function projectsLoad_cn(jsonName,tableClass){
	var jsonLen=jsonName.length;
	var trString="<tr>";
	for(var i=0;i<jsonLen;i++){
		trString+="<td id='"+i+"' onclick='showProjectDetail_cn(this);'><img src='../images/projects/"+(jsonName[i].hasPic==false?"noPic":jsonName[i].picName)+".jpg' style='width:160px;height:160px;' alt='"+jsonName[i].info+"'/>"
				 +"<p style='color:#000;'>"+jsonName[i].info+"</p></td>"
		if(i%5==4){
			trString+="</tr>";
		}
		else{
			continue;
		}
	}
	$(trString).appendTo("."+tableClass+" tbody");
}



//显示项目详情   英文版
function showProjectDetail(e){
	popWin("projectDetailDiv");
	var $detailDiv=$("#projectDetailDiv");
	var $index=$(e).attr("id");
	var $projectDetail=projectsInfo[$index].detail;
	$detailDiv.html($projectDetail);
}
              
//显示项目详情 中文版
function showProjectDetail_cn(e){
	popWin("projectDetailDiv");
	var $detailDiv=$("#projectDetailDiv");
	var $index=$(e).attr("id");
	var $projectDetail=projectsInfo_cn[$index].detail;
	$detailDiv.html($projectDetail);
}

//显示复制窗口  英文版
function quoteIt(e){
	popWin("quoteItDiv");
	var $refDiv=$("#quoteItDiv input.refContent");
	var $index=$(e).attr("id");
	var $ref=publicationsInfo[$index].reference;
	$refDiv.val($ref);
}

//显示复制窗口  中文版
function quoteIt_cn(e){
	popWin("quoteItDiv");
	var $refDiv=$("#quoteItDiv input.refContent");
	var $index=$(e).attr("id");
	var $ref=publicationsInfo_cn[$index].reference;
	$refDiv.val($ref);
}