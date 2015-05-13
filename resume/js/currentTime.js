      setInterval(function(){
        var time=new Date();
        var year=time.getFullYear();
        var month=checkTime(time.getMonth()+1);
        var date=checkTime(time.getDate());
        var week=["Sun.","Mon.","Tues.","Wed.","Thur.","Fri.","Sat."][time.getDay()];
        var hour=checkTime(time.getHours());
        var minute=checkTime(time.getMinutes());
        var second=checkTime(time.getSeconds());
        $("#timeText").html(year+"/"+month+"/"+date+"      "+week+"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+hour+":"+minute+":"+second);
      },1000);  
      //个位数时补0
      function checkTime(i){
        if (i<10){
          i="0" + i
        }
        return i
      } 