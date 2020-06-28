$(document).ready(function() {
  $("#count").text(localStorage.getItem("c"));
  $("#confirm").click( function(event){
    event.preventDefault();
    $("#overlay").fadeIn(297, function(){
      $("#win") 
      .css("display", "block")
      .animate({opacity: 1}, 198);
    });
  });

  $(".close, #overlay").click(function(){
    $("#win").animate({opacity: 0}, 198, function(){
      $(this).css("display", "none");
      $("#overlay").fadeOut(297);
    });
  });
});

$(document).ready(function(){
    $.getJSON("burcevdaniil.github.io/images/guitars.json", function(data){
    var arr=(data["guitars"]);
    for(i=0;i<arr.length;i++){
        if(localStorage.getItem("#prg" + i)!==null){
            $("#products #p1").append(arr[i]["name"] + "<br><br>");
            $("#products #p2").append(localStorage.getItem("#prg" + i) + " x " + arr[i]["price"] +"€<br><br>");
        }
    }
});
$.getJSON("burcevdaniil.github.io/images/keys.json", function(data){
    var arr=(data["keys"]);
    for(i=0;i<arr.length;i++){
        if(localStorage.getItem("#prg" + i + 9)!==null){
            $("#products #p1").append(arr[i]["name"] + "<br><br>");
            $("#products #p2").append(localStorage.getItem("#prg" + i + 9) + " x " + arr[i]["price"] +"€<br><br>");
        }
    }
});
$.getJSON("burcevdaniil.github.io/images/drums.json", function(data){
    var arr=(data["drums"]);
    for(i=0;i<arr.length;i++){
        if(localStorage.getItem("#prg" + i + 18)!==null){
            $("#products #p1").append(arr[i]["name"] + "<br><br>");
            $("#products #p2").append(localStorage.getItem("#prg" + i + 18) + " x " + arr[i]["price"] +"€<br><br>");
        }
    }
});
});

$(document).ready(function(){
    var sum=+$("#sum").text().substr(0,$("#sum").text().length-2);
    $.getJSON("burcevdaniil.github.io/images/guitars.json", function(data){
        var arr=(data["guitars"]);
        for(i=0;i<arr.length;i++){
            if(localStorage.getItem("#prg" + i)!==null){
                sum=sum + arr[i]["price"];
                $("#sum").text(sum + " €");
            }
        }
    });
    $.getJSON("burcevdaniil.github.io/images/keys.json", function(data){
        var arr=(data["keys"]);
        for(i=0;i<arr.length;i++){
            if(localStorage.getItem("#prg" + i + 9)!==null){
                sum=sum + arr[i]["price"];
                $("#sum").text(sum + " €");
            }
        }
    });
    $.getJSON("burcevdaniil.github.io/images/drums.json", function(data){
        var arr=(data["drums"]);
        for(i=0;i<arr.length;i++){
            if(localStorage.getItem("#prg" + i + 18)!==null){
                sum=sum + arr[i]["price"];7
                $("#sum").text(sum + " €");
            }
        }
    });
    $("#sum").text("0 €")
});

$(document).ready(function(){
    $("#clrbin").on("click",function(){
        localStorage.clear();
        $("#count").text("");
        $("#sum").text("0 €");
        $("#products").text("");
    });
});
