$(function(){
    let input = $('#city'),
        inpVal = input.val();
    
    $('.select').on('change', function(){
      input.val(inpVal + $(this).val());
    });
  });
  
  $('#cityB').on('click', function(){
      $('#tablo').css('display','flex');
              
      var city=$('#city').val();
      var apiURI2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=d368c66a15c9f33b4f12618d21e3141d`;
          console.log("success getWeather2");
          console.log(apiURI2);
          $.ajax({
            url: apiURI2,
            dataType: "jsonp",
            type: "GET",
            async: "true",		 
            timeout : 500,
                      success : function(data) {
                          console.log("Success");
                      },
                      error : function(e) {
                          console.log("Error");
                          $('#cityC').html('<p style="color: red";>Проверьте корректность названия города</p>');
                          $('#tablo').css('display','none');
                      },
                      done : function(e) {
                          console.log("DONE");
                      },  
          }).done(dataHandler3);
      
  $('#cityC').text('в' + ' ' + city);	 
  function dataHandler3(data) {
      dataString = JSON.stringify(data);
      var now = new Date();
      let h = now.getHours();
      var num = 8-(Math.floor(h/3));
  //завтра
          document.getElementById("demo6").innerHTML = data.list[num+3].dt_txt;
          document.getElementById("demo4").innerHTML = "Макс." + " " + Math.floor((data.list[num+3].main["temp"])-273,15)+"°C";
          document.getElementById("demo7").innerHTML = data.list[num].dt_txt;
          document.getElementById("demo5").innerHTML = "Мин." +  " " + Math.floor((data.list[num].main["temp"])-273,15)+"°C";
          var imgURL = "https://openweathermap.org/img/w/" + data.list[num+3].weather[0].icon + ".png";
          $("#tmp4").attr("src", imgURL);
  //послезавтра
          document.getElementById("demo8").innerHTML = data.list[num+11].dt_txt;
          document.getElementById("demo9").innerHTML = "Макс. " + " " + Math.floor((data.list[num+11].main["temp"])-273,15)+"°C";
          document.getElementById("demo10").innerHTML = data.list[num+8].dt_txt;
          document.getElementById("demo11").innerHTML = "Мин." +  " " + Math.floor((data.list[num+9].main["temp"])-273,15)+"°C";
          var imgURL = "https://openweathermap.org/img/w/" + data.list[num+11].weather[0].icon + ".png";
          $("#tmp5").attr("src", imgURL);
  //после-послезавтра
          document.getElementById("demo12").innerHTML = data.list[num+19].dt_txt;
          document.getElementById("demo13").innerHTML = "Макс." + " " + Math.floor((data.list[num+19].main["temp"])-273,15)+"°C";
          document.getElementById("demo14").innerHTML = data.list[num+16].dt_txt;
          document.getElementById("demo15").innerHTML = "Мин." +  " " + Math.floor((data.list[num+17].main["temp"])-273,15)+"°C";
          var imgURL = "https://openweathermap.org/img/w/" + data.list[num+19].weather[0].icon + ".png";
          $("#tmp6").attr("src", imgURL);		
  //после-после-послезавтра	
          document.getElementById("demo16").innerHTML = data.list[num+27].dt_txt;
          document.getElementById("demo17").innerHTML = "Макс." + " " + Math.floor((data.list[num+27].main["temp"])-273,15)+"°C";
          document.getElementById("demo18").innerHTML = data.list[num+24].dt_txt;
          document.getElementById("demo19").innerHTML = "Мин." +  " " + Math.floor((data.list[num+25].main["temp"])-273,15)+"°C";
          var imgURL = "https://openweathermap.org/img/w/" + data.list[num+27].weather[0].icon + ".png";
          $("#tmp7").attr("src", imgURL);		
                  
     }
   
     });
   //Показ дни недели 
    function showDateTime() {
                  var d = new Date();
                  var n1, n2, n3, n4, n5;
                  var weekday = new Array(7);
                      weekday[0] = "Воскресенье";
                      weekday[1] = "Понедельник";
                      weekday[2] = "Вторник";
                      weekday[3] = "Среда";
                      weekday[4] = "Четверг";
                      weekday[5] = "Пятница";
                      weekday[6] = "Суббота";
                       
                       if(d.getDay() >= 3){
                             n1 = weekday[(d.getDay()+1)];
                             n2 = weekday[(d.getDay()+2)];
                             n3 = weekday[(d.getDay()+3)];
                             n4 = weekday[7-(d.getDay()+4)];} if(d.getDay() >= 4)
                           {
                             n1 = weekday[(d.getDay()+1)];
                             n2 = weekday[(d.getDay()+2)];
                             n3 = weekday[7-(d.getDay()+3)];
                             n4 = weekday[9-(d.getDay()+4)];} if(d.getDay() >= 5)
                           {
                             n1 = weekday[(d.getDay()+1)];
                             n2 = weekday[7-(d.getDay()+2)];
                             n3 = weekday[9-(d.getDay()+3)];
                             n4 = weekday[11-(d.getDay()+4)];} if(d.getDay() >= 6)
                           {
                             n1 = weekday[7-(d.getDay()+1)];
                             n2 = weekday[9-(d.getDay()+2)];
                             n3 = weekday[11-(d.getDay()+3)];
                             n4 = weekday[13-(d.getDay()+4)];}  if(d.getDay() < 3) 
                           {
                             n1 = weekday[(d.getDay()+1)];
                             n2 = weekday[(d.getDay()+2)];
                             n3 = weekday[(d.getDay()+3)];
                             n4 = weekday[(d.getDay()+4)];
                            
                           }
                          
                                  document.getElementById("day1").innerHTML = n1;
                                  document.getElementById("day2").innerHTML = n2;
                                  document.getElementById("day3").innerHTML = n3;
                                  document.getElementById("day4").innerHTML = n4;								
              }
                  showDateTime(); 