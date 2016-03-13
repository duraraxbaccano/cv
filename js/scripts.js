window.onload = function(){

  $('p#menubar a[data-target]').click(function() {
      var moveTo=$($(this).attr("data-target"));

        $('html,body').animate({
          scrollTop: moveTo.offset().top
        }, 1000);
  });

  $("p#menubar").affix({
  	offset: {
  		top: $("div.piechart").offset().top
  	}
  });

  //link email
  $("div.contact_email h1 a[data-target]").click(function() {
      var moveTo=$($(this).attr("data-target"));

        $('html,body').animate({
          scrollTop: moveTo.offset().top
        }, 1000);
  });

  //redraw pie chart
  var pie = false , files = false , levels = false , banqiao =false , night=false;
  var player = document.getElementById('player');
  var b;
  $("div.languages").waypoint(function(){
    if(pie)
      return;
    else
    {
      $(player).empty();
      b = bonsai.run(player, {
        code: document.getElementById('bs').innerHTML,
        height: 450,
        width: 600,
        framerate: 50
      });

      $.plot($("#flot-placeholder"), dataset, options);
      pie=true;
    }
  },{ offset: '25%' });

  //prepare for konami
  registerKonami();

  $("div.source").waypoint(function(){
      if(files)
        return;
      else
        {
          arr_file = $("div.logo ul li i");
          oneByone();
        }
      files = true;
  },{ offset: '40%' });

  //prepare for levels drawing
  $("div#levels").waypoint(function(){
    if( levels )
      return;
    else{
      levelDrawing();
    }
    levels = true;
  },{ offset: '25%' });

  //prepare for Banqiao City
  $("div.new-taipei-city").waypoint(function(){
    if(stopCloud)
      ;
    else
    {
      removeCloud("air");
    }

    if(banqiao)
    {
      return;
    }
    else
    {
      buildingUp();

      //set cloud area
      xmax = document.getElementById("new-taipei-city").clientWidth*0.6;
      ymax = 100;
      summonCloud("new-taipei-city");
    }
    banqiao = true;
  },{ offset: '25%' });

  //prepare for Banqiao night
    $("div.hobby").waypoint(function(){

    if(night)
    {
      nightDown();
      night = false;
      //set cloud area
      xmax = document.getElementById("new-taipei-city").clientWidth*0.6;
      ymax = 100;
      summonCloud("new-taipei-city");
    }
    else
    {
      removeCloud();
      nightUp();
      night = true;
    }
  },{ offset: '70%' });

  //prepare for window dimension for cloud.js

  $("li.cloudjs").mouseover(function(){
    if(banqiao)
    {
      removeCloud("new-taipei-city");
      banqiao = false;
    }
    else
      ;
    if(stopCloud)
    {
        xmax = document.getElementById("air").clientWidth*0.6;
        ymax = document.getElementById("air").clientHeight*0.8;
        summonCloud("air");
        setTimeout("removeCloud(\"air\");",10000);
    }
  });

  //prepare notification when mouseover konami.js
  $.notify.addStyle("leonstyle",{ 
    html: "<div><i class=\"glyphicon glyphicon-exclamation-sign\"></i><span data-notify-text></span>\n</div>",
    classes: {
      base: {
        "font-weight": "bold",
        "padding": "8px 15px 8px 14px",
        "text-shadow": "0 1px 0 rgba(255, 255, 255, 0.5)",
        "background-color": "#fcf8e3",
        "border": "1px solid #fbeed5",
        "border-radius": "4px",
        "white-space": "nowrap",
        "padding-left": "25px",
        "background-repeat": "no-repeat",
        "background-position": "3px 7px"
      },
      info: {
      "color": "#3A87AD",
      "background-color": "#D9EDF7",
      "border-color": "#BCE8F1",
      },
      map: {
      "color": "#C09853",
      "background-color": "#FCF8E3",
      "border-color": "#FBEED5"
      }
    }
  });

  $("li.konamijs").mouseover(function(){
    $(this).notify("type with arrow key : ↑ ↓ ← → B A",{ style : "leonstyle", className : "info", position : "top center" });
  });
};
 var arr_file,index_file=0;
function oneByone(){
  if(typeof(arr_file) == "undefined")
    return;
  else if(index_file >= arr_file.length)
    return;
  else
  {
    $(arr_file[index_file]).animate({opacity:1},500);
    index_file++;
    setTimeout("oneByone();", 200 );
  }
}

function levelDrawing(){
  $("div.level_java").animate({width:"70%"},3000, function(){
    //show skill
    $("div.java_skill").animate({opacity:"0.6"},1000);
    //in java animate
  } );
  $("div.level_php").animate({width:"50%"},3000, function(){

    $("div.php_skill").animate({opacity:"0.6"},1000);
    //in php animate
  } );

  $("div.level_js").animate({width:"55%"},3000, function(){

    $("div.js_skill").animate({opacity:"0.6"},1000);
    //in js animate
  } );

  $("div.level_c").animate({width:"55%"},3000, function(){

    $("div.c_skill").animate({opacity:"0.6"},1000);
  //in c animate
  } );

  $("div.level_other").animate({width:"70%"},3000, function(){

    $("div.other_skill").animate({opacity:"0.6"},1000);
  //in other animate
  } );
}

function buildingUp(){
  $("i.tree").animate({bottom:"100px"},1000, function(){
      //$("i.star").animate({bottom:"100px"},1000, function(){});
      //$("i.building").animate({bottom:"0px"},2000, function(){
          $("i.Banqiao").animate({bottom:"0px"},2000, function(){

              $("i.megacity").animate({bottom:"0px"},1000, function(){

              });
          });
      //});
  });
}
function nightUp(){
    $("i.star").animate({bottom:"100px"},1000, function(){

      $("i.building").animate({bottom:"0px"},2000, function(){

      });

    });
}
function nightDown(){
    $("i.star").animate({bottom:"-400px"},1000, function(){

      $("i.building").animate({bottom:"-400px"},2000, function(){

      });

    });
}

