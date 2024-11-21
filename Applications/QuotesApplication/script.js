'use strict';
document.getElementById("btn").addEventListener("click", function(){
 var xmlHttp= new XMLHttpRequest();

  xmlHttp.onreadystatechange=function(){

    if(xmlHttp.readyState==4 && xmlHttp.status==200)
    {
        var result=JSON.parse(this.responseText);
        var details="";

        if(result)
        {
            var author=result.author;
            var quote=result.quote;
            document.getElementById("quote").innerHTML=`
            
            
            <p>Quote:${quote}</p>
            <p>author:${author}</p>`;
        }

        else
        {
            document.getElementById("quote").innerHTML=`<p>Quote is not available</p>`;
        }
    }
    else 
    {
     document.getElementById("quote").innerHTML=`<p>Unable to fetch data. please try again later</p>`;   
    }

  }


  xmlHttp.open("GET","https://programming-quotesapi.vercel.app/api/random", true);
  xmlHttp.send();


})