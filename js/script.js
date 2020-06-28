$(document).ready(function(){
    $("#count").text(localStorage.getItem("c"));
    var btnArr=$(".btn");
    for(i=0;i<btnArr.length;i++){
        btnArr[i].addEventListener("click", (function(){
            return function(){
                var t=+localStorage.getItem("c") + 1;
                localStorage.setItem("c",t);
                $("#count").text(localStorage.getItem("c"));
            };
        })());
    }
});

$(document).ready(function() {
  $("#count").text(localStorage.getItem("c"));
  $(".btn").click( function(event){
    event.preventDefault();
    $("#overlay").fadeIn(297, function(){
      $("#win") 
      .css("display", "block")
      .animate({opacity: 1}, 198);
    });
  });

  $("#winclose, #overlay").click( function(){
    $("#win").animate({opacity: 0}, 198, function(){
      $(this).css("display", "none");
      $("#overlay").fadeOut(297);
    });
  });
});

$(document).ready(function(){
    $.getJSON("/burcevdaniil.github.io/images/guitars.json", function(data){
        var arr=(data["guitars"]);
        for(i=0;i<arr.length;i++){
            $("#prg" + i).attr("src", "images/" + arr[i]["name"] + ".png");
            $("#descg" + i).text(arr[i]["name"]);
            $("#" + i).text(arr[i]["price"] + "€");
        }
    });
});

$(document).ready(function(){
    $.getJSON("/burcevdaniil.github.io/images/keys.json", function(data){
        var arr=(data["keys"]);
        for(i=0;i<arr.length;i++){
            $("#prg" + (i + 9)).attr("src", "images/" + arr[i]["name"] + ".png");
            $("#descg" + (i + 9)).text(arr[i]["name"]);
            $("#" + (i + 9)).text(arr[i]["price"] + "€");
        }
    });
});

$(document).ready(function(){
    $.getJSON("/burcevdaniil.github.io/images/drums.json", function(data){
        var arr=(data["drums"]);
        for(i=0;i<arr.length;i++){
            $("#prg" + (i + 18)).attr("src", "images/" + arr[i]["name"] + ".png");
            $("#descg" + (i + 18)).text(arr[i]["name"]);
            $("#" + (i + 18)).text(arr[i]["price"] + "€");
        }
    });
});

$(document).ready(function(){
    $("#btn1").on("click",function(event){
        event.preventDefault();
            $.getJSON("/burcevdaniil.github.io/images/guitars.json", function(data){
                var arr=(data["guitars"]);
                for(i=0;i<arr.length;i++){
                $("#prg" + i).attr("src", "images/" + arr[i]["name"] + ".png");
                    $("#descg" + i).text(arr[i]["name"]);
                    $("#" + i).text(arr[i]["price"] + "€");
                }
            });
            $('html, body').animate({scrollTop:0}, '300');
    });
    $("#btn2").on("click",function(event){
        event.preventDefault();
            $.getJSON("/burcevdaniil.github.io/images/keys.json", function(data){
                var arr=(data["keys"]);
                for(i=0;i<arr.length;i++){
                $("#prg" + i).attr("src", "images/" + arr[i]["name"] + ".png");
                    $("#descg" + i).text(arr[i]["name"]);
                    $("#" + i).text(arr[i]["price"] + "€");
                }
            });
            $('html, body').animate({scrollTop:0}, '300');
    });
    $("#btn3").on("click",function(event){
        event.preventDefault();
            $.getJSON("/burcevdaniil.github.io/images/drums.json", function(data){
                var arr=(data["drums"]);
                for(i=0;i<arr.length;i++){
                $("#prg" + i).attr("src", "images/" + arr[i]["name"] + ".png");
                    $("#descg" + i).text(arr[i]["name"]);
                    $("#" + i).text(arr[i]["price"] + "€");
                }
            });
            $('html, body').animate({scrollTop:0}, '300');
    });
});
