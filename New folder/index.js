// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("form").addEventListener("submit",cricket);
var cricketTeam=(JSON.parse(localStorage.getItem("schedule"))) || [];

function cricket(){
   event.preventDefault();
   


   var dataObj={
        matchnum:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value,
    };
    cricketTeam.push(dataObj);
    // console.log(cricketTeam)
    localStorage.setItem("schedule",JSON.stringify(cricketTeam));
}
