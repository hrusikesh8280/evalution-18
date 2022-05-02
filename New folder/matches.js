// write js code here corresponding to matches.html

var crickTeam=JSON.parse(localStorage.getItem("schedule"));
var body=document.querySelector("tbody");
display(crickTeam);

function display(crickTeam){
  body.innerHTML="";
    crickTeam.forEach(function(el) {
        

        var row=document.createElement("tr");

        var col1=document.createElement("td");
        col1.innerText=el.matchNum;
        var col2=document.createElement("td");
        col2.innerText=el.teamA;
        var col3=document.createElement("td");
        col3.innerText=el.teamB;
        var col4=document.createElement("td");
        col4.innerText=el.date;
        var col5=document.createElement("td");
        col5.innerText=el.venue;
        var col6=document.createElement("td");
        col6.innerText="Add to favorite"
        col6.addEventListener("click",function(){
            addFab(el);
        })
        col6.style.backgroundColor="green";

        row.append(col1,col2,col3,col4,col5,col6);
        body.append(row);
    });
    var fav=(JSON.parse(localStorage.getItem("favourites")))||[];
    function addFab(el){
        fav.push(el);
        localStorage.setItem("favourites",JSON.stringify(fav));
    }


}


function filterMatch(){
    var val=document.querySelector("select").value;
   // console.log(val)
   var newA=[];
   crickTeam.forEach(function(el){
       if(el.venue==val){
        newA.push(el);
       }
   });
   display(newA);
}