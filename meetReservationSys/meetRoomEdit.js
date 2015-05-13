$(function(){

//添加会议室按钮 禁用
		var oEditMeetRoomBtn=$('#editMeetRoomBtn');
		var iseditMeetRoomBtnDis=false;        ////后台判断  true:禁用
		BtnDisabled1(oEditMeetRoomBtn,iseditMeetRoomBtnDis);
//添加会议室按钮 禁用end

//出现弹窗
	$(".editMeetRoomBtn").click(function(){
		var $mask=$('<div id="mask"></div>');
		var wDoc=$(document).width();
		var hDoc=$(document).height();
		$mask.css({"width":wDoc,"height":hDoc});
		$mask.appendTo("body");

		var $addMeetRoomWin=$('<div id="addMeetRoomWin"><p>添加会议室：</p><form><label for="meetRoomName">会议室名称:</label><input type="text" class="text meetRoomName" id="meetRoomName" autocomplete="off"/> <br /><label for="meetRoomCapacity">会议室容量:</label><input type="text" class="text meetRoomCapacity" id="meetRoomCapacity" autocomplete="off"/> <br /><label for="meetRoomLocation">会议室位置:</label><input type="text" class="text meetRoomLocation" id="meetRoomLocation" autocomplete="off"/> <br /><label for="meetRoomEqui">会议室设备:</label><input type="text" class="text meetRoomEqui" id="meetRoomEqui" autocomplete="off"/> <br /><input type="button" class="button confirmBtn" id="confirmBtn" value="确定"/><input type="button" class="button cancelBtn" id="cancelBtn" value="取消"/></form></div>');
		$addMeetRoomWin.appendTo("body");
		var wWin=$addMeetRoomWin.width();
		var hWin=$addMeetRoomWin.height();
		var lWin=parseInt((wDoc-wWin)/2);
		var tWin=parseInt((hDoc-hWin)/2);
		$addMeetRoomWin.css({"left":lWin,"top":tWin});
		
		$(window).resize(function(){
			if($("#mask")&&$("#addMeetRoomWin")){
				var wDoc=$(document).width();
				var hDoc=$(document).height();
				$mask.css({"width":wDoc,"height":hDoc});
				var wWin=$addMeetRoomWin.width();
				var hWin=$addMeetRoomWin.height();
				var lWin=parseInt((wDoc-wWin)/2);
				var tWin=parseInt((hDoc-hWin)/2);
				$addMeetRoomWin.css({"left":lWin,"top":tWin});	
			}
		});

	//确定按钮
		$("#confirmBtn").click(function(){
			if($("#meetRoomName").val()==""||
				$("#meetRoomCapacity").val()==""||
				$("#meetRoomLocation").val()==""||
				$("#meetRoomEqui").val()==""){
				alert("请填写未完成项！");
			}
			else{
				var newNeetRoomInfo="会议室名称："+$("#meetRoomName").val()+"\n"+
				"会议室容量："+$("#meetRoomCapacity").val()+"\n"+
				"会议室位置："+$("#meetRoomLocation").val()+"\n"+
				"会议室设备："+$("#meetRoomEqui").val()+"\n";
				if(confirm("您要添加的会议室为："+"\n"+newNeetRoomInfo)){
					//传后台  保存，若成功：
					alert("添加会议室成功！");
					$addMeetRoomWin.remove();
					$mask.remove();
					window.open('reservationInfo.html','_parent');
				}
			}
			
		});
	//确定按钮end
	//取消按钮
	$("#cancelBtn").click(function(){
			$addMeetRoomWin.remove();
			$mask.remove();
	})
	//取消按钮end

	});
//出现弹窗end



//按钮禁用函数
	function BtnDisabled1(elem,isBtnDisabled){    
		if(isBtnDisabled){
			elem.attr("disabled", "disabled")//按钮禁用
			elem.addClass("btnDisabled");
		}
		else{
			elem.removeAttr("disabled");//解禁

		}

		};
		
//按钮禁用函数end



});