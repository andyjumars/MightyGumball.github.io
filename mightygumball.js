window.onload = function() {
    var url = "http://localhost/sales.json";
    var requset = new XMLHttpRequest();
    request.open("GET",url);
    request.onload = function() {
         if (request.status == 200) {
         	 updateSales(request.responsrText);
         }


    };
requset.send(null);




}