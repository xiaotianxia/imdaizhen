//------id:要弹出的div的id-----------
//------调用之前将div的display改为none-----------
//-------2015.01.28  by dz-----------------
function popWin(id){	
	//出现遮罩
	var $mask=$('<div id="mask"></div>');
	var wDoc=$(document).width();
	var hDoc=$(document).height();
	$mask.css({
		"position":"absolute",
		"width":wDoc,
		"height":hDoc,
		"top":0,
		"left":0,
		"background": "#000",
		"filter":"alpha(opacity=40)",
		"-moz-opacity":0.3,
		"opacity":0.3,
		"zIndex": 998
	});
	$mask.appendTo("body");
	//出现弹窗
	var $Win=$(document.getElementById(id));
	var wWin=$Win.width();
	var hWin=$Win.height();
	var lWin=parseInt((wDoc-wWin)/2);
	var tWin=parseInt((hDoc-hWin)/2);
	var $winCont=$('<div id="winCont"></div>');
	$winCont.css({
		"position":"absolute",
		// "height":hWin+22,
		"left":lWin,
		"top":tWin-200,
		"display":"block",
		"padding":"5px",
		"max-height":"600",
		"background":"#ddd",
		"border":"10px solid #eee",
		"border-radius":"5px",
		"zIndex":999
	});
	$Win.css({
		"marginTop":16,
		"display":"block",
		"marginTop":-2,
		"padding":25,
		"overflow":"auto",
		"border":"1px dashed #009ad6",
		"zIndex":999
	});
	// $wClose=$('<div id="wClose"><b>×</b></div>');

	$Win.appendTo($winCont);
	$winCont.appendTo("body");
	// 关闭
	// $wClose.click(function(){
	// 	$winCont.hide();
	// 	$mask.remove();
	// })
	$mask.click(function(){
		$winCont.hide();
		$mask.remove();
	})
	//窗口变化
	$(window).resize(function(){
			if($mask&&$Win){
				var wDoc=$(document).width();
				var hDoc=$(document).height();
				$mask.css({"width":wDoc,"height":hDoc});
				var wWin=$Win.width();
				var hWin=$Win.height();
				var lWin=parseInt((wDoc-wWin)/2);
				var tWin=parseInt((hDoc-hWin)/2);
				$Win.css({"left":lWin,"top":tWin});	
			}
		});
}