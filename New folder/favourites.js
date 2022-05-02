// write js code here corresponding to favourites.html


var data=JSON.parse(localStorage.getItem("favourites"));
var body=document.querySelector("tbody");
display(data);

function display(data){
  body.innerHTML="";
    data.forEach(function(el,index) {
        

        var row=document.createElement("tr");

        var col1=document.createElement("td");
        col1.innerText=el.matchNo;
        var col2=document.createElement("td");
        col2.innerText=el.teamA;
        var col3=document.createElement("td");
        col3.innerText=el.teamB;
        var col4=document.createElement("td");
        col4.innerText=el.date;
        var col5=document.createElement("td");
        col5.innerText=el.venue;
        var col6=document.createElement("td");
        col6.innerText="Delete"
        col6.addEventListener("click",function(){
            removeF(el,index);
        })
        col6.style.backgroundColor="red";

        row.append(col1,col2,col3,col4,col5,col6);
        body.append(row);
    });

    function removeF(el,index){
        console.log(index)
      data.splice(index,1);
      localStorage.setItem("favourites",JSON.stringify(data));
      display(data);
    }

}