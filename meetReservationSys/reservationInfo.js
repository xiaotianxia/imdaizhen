
$(function(){
	drag('reservationTitle');
	
//预定
	
//预定按钮 禁用
		var oReservationBtn=$('#reservationBtn');
		var isReservationBtnDis=false;        ////后台判断
		BtnDisabled(oReservationBtn,isReservationBtnDis);
//预定按钮 禁用end

	$('#reservationBtn').click(function(){
		var $mask=$('<div id="mask"></div>');
		var wDoc=$(document).width();
		var hDoc=$(document).height();
		$mask.css({"width":wDoc,"height":hDoc});
		$mask.appendTo("body");
		var wWin=$('#reservationDiv').width();
		var lWin=parseInt((wDoc-wWin)/2);		
		$('#reservationDiv').css("left",lWin);
		$('#reservationDiv').slideDown(200);
	//关闭
		$('#wClose').click(function(){
		$(this).parent().hide(200);
		$mask.remove();
		});

		$('#reservationCancel').click(function(){
		$('#reservationDiv').hide(200);
		$mask.remove();
		});
	//窗口调整
	$(window).resize(function(){
		var wDoc=$(document).width();
		var hDoc=$(document).height();
		$mask.css({"width":wDoc,"height":hDoc});
		var wWin=$('#reservationDiv').width();
		var lWin=parseInt((wDoc-wWin)/2);
		$('#reservationDiv').css("left",lWin);	
	});
	//窗口调整end
	});

//选时间
		$("#timeGoRightBtn").click(function(){
            $("#allTime option:checked").appendTo('#thisTime');
        });
        $("#timeGoLeftBtn").click(function(){
            $("#thisTime option:checked").appendTo('#allTime');
        });
		$("#thisTime option").dblclick(function(){
        	$(this).appendTo('#allTime');//回不去  不知道why
        }); 
        $("#allTime option").dblclick(function(){
        	$(this).appendTo('#thisTime');
        });   
//选时间end

//选参会人员
		$("#participantsGoRightBtn").click(function(){
            $("#allParticipants option:checked").appendTo('#thisParticipants');
        });
        $("#participantsGoLeftBtn").click(function(){
            $("#thisParticipants option:checked").appendTo('#allParticipants');
        });
        $("#allParticipants option").dblclick(function(){
        	$(this).appendTo('#thisParticipants');
        });
		$("#thisParticipants option").dblclick(function(){
        	$(this).appendTo('#allParticipants');//回不去  不知道why
        });      
//选参会人员end
		
//预定时间变红
		$('#reservationConfirm').click(function(){
			if($('#meetRoomSel').val()=='null'||
				$('#chooseResevDate').val()==''||
				$('#chooseTime').val()=='null'||
				$('#meetContent').val()==''){
				alert("请完成未填选项！");
			};

	});
//预定时间变红end

//会议室详情弹窗

//后台数据
		var roomInfo = [
			{"roomNum":1001,"roomCapacity":"20人","equipmentInfo":"齐全"},
			{"roomNum":1002,"roomCapacity":"30人","equipmentInfo":"齐全"},
			{"roomNum":1003,"roomCapacity":"40人","equipmentInfo":"齐全"},
			{"roomNum":1004,"roomCapacity":"50人","equipmentInfo":"齐全"},
			{"roomNum":1005,"roomCapacity":"60人","equipmentInfo":"齐全"},
			{"roomNum":1006,"roomCapacity":"70人","equipmentInfo":"齐全"},
			{"roomNum":1007,"roomCapacity":"80人","equipmentInfo":"齐全"},
			{"roomNum":1008,"roomCapacity":"10人","equipmentInfo":"齐全"},
			{"roomNum":1009,"roomCapacity":"20人","equipmentInfo":"齐全"},
			{"roomNum":1010,"roomCapacity":"30人","equipmentInfo":"齐全"},
			{"roomNum":1011,"roomCapacity":"50人","equipmentInfo":"齐全"},
			{"roomNum":1012,"roomCapacity":"20人","equipmentInfo":"齐全"},
			{"roomNum":1013,"roomCapacity":"100人","equipmentInfo":"齐全"},
			{"roomNum":1014,"roomCapacity":"120人","equipmentInfo":"齐全"},
			{"roomNum":1015,"roomCapacity":"50人","equipmentInfo":"齐全"},
			{"roomNum":1016,"roomCapacity":"80人","equipmentInfo":"齐全"}
					 ]; 

			var $roomInfoDiv=$("#table tr .roomNum");
			$roomInfoDiv.each(function(index){
				$(this).mouseover(function(e){
					$(this).css("cursor","pointer");
					$(".roomInfo span:eq(0)").html(roomInfo[index].roomNum);
					$(".roomInfo span:eq(1)").html(roomInfo[index].roomCapacity);	
					$(".roomInfo span:eq(2)").html(roomInfo[index].equipmentInfo);				
					$(".roomInfo").show();
					$(".roomInfo").css({	
						"top": (e.pageY+10) + "px",
						"left": (e.pageX-5)  + "px"
						}).fadeIn(100);
				$(this).mousemove(function(e){
					$(".roomInfo").css({
					"top": (e.pageY+10) + "px",
					"left": (e.pageX-5)  + "px"
					})
				})
				$(this).mouseout(function(){
					$(".roomInfo").hide();
			})


		 })

});//each end

//会议室详情弹窗end



//预定变红for test
	var a=3;
	var b=5;
	$("#table tr:nth-child("+a+") td:nth-child("+b+")").addClass('backgroundRed');

//预定详情悬浮弹窗
	$("#table tr:nth-child("+a+") td:nth-child("+b+")").mouseover(function(e){
		//后台调取数据
		var jsonInfo={
			'conferName':'例会',
			'conferType':'公开',
			'conferTheme':'学术例会',
			'name':'张二',
			'roomNum':'1001'
			};

		$(".reservInfo span:eq(0)").html(jsonInfo.conferName);
		$(".reservInfo span:eq(1)").html(jsonInfo.conferType);	
		$(".reservInfo span:eq(2)").html(jsonInfo.conferTheme);	
		$(".reservInfo span:eq(3)").html(jsonInfo.name);	
		$(".reservInfo span:eq(4)").html(jsonInfo.roomNum);		
		$(".reservInfo").show();
		$('.reservInfo')
		.css({	
			"top": (e.pageY+10) + "px",
			"left": (e.pageX-15)  + "px"
			}).fadeIn(100);
		$(this).mousemove(function(e){
		$(".reservInfo").css({
			"top": (e.pageY+10) + "px",
			"left": (e.pageX-15)  + "px"
		})
	})	

//会议详细信息 按钮禁用
		var oDetailedInfoBtn=$(".reservInfo #detailedInfo");
		var isDetailedInfoBtnDis=false;           /////后台判断
		BtnDisabled(oDetailedInfoBtn,isDetailedInfoBtnDis);                  
//会议详细信息 按钮禁用end
//取消预订按钮
		$("#cancelReservBtn").click(function(){
			if(confirm("确定取消此预定吗？")){
				//后台删除预订信息
				alert("取消成功！");
			}
			else{
				$(".reservInfo").hide();
		}
			})
//取消预订按钮end
		$('#wClose1').click(function(){  //关闭
		$(".reservInfo").hide();
	});




	})
//预定详情悬浮弹窗end




//函数


//按钮禁用函数
	function BtnDisabled(elem,isBtnDisabled){    
		if(isBtnDisabled){
			elem.attr("disabled", "disabled")//按钮禁用
			elem.addClass("btnDisabled");
		}
		else{
			elem.removeAttr("disabled");//解禁

		}

		};
		
//按钮禁用函数end





//函数end



})
