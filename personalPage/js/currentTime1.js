      setInterval(function(){
        var time=new Date();
        var year=time.getFullYear();
        var month=checkTime(time.getMonth()+1);
        var date=checkTime(time.getDate());
        var week=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][time.getDay()];
        var hour=checkTime(time.getHours());
        var minute=checkTime(time.getMinutes());
        var second=checkTime(time.getSeconds());
        $("#timeText").text("您好，欢迎光临！ 现在时间: "+year+"年"+month+"月"+date+"日      "+week+"     "+hour+":"+minute+":"+second);
      },1000);  
      //个位数时补0
      function checkTime(i){
        if (i<10){
          i="0" + i
        }
        return i
      } 