$(document).ready(function(){
    var btnArr=$(".btn");
    for(i=0;i<btnArr.length;i++){
        btnArr[i].addEventListener("click", (function(i){
            return function(){
                var txt="#prg" + i + 18;
                var c=+localStorage.getItem(txt) + 1;
                localStorage.setItem(txt, c);
            };
        })(i));
    }
});
