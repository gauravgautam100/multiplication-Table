function table(){
    var number = parseInt(document.getElementById("number").value);
    
    var count = 1;

    while(count<=10){
       var total = number*count;
       document.write(total, "<br>");
       count++;

    }
}