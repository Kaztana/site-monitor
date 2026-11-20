async function loadData(){

 const res=await fetch(
   "./data/result.json?t="+Date.now()
 );

 const data=await res.json();

 const tbody=document.getElementById("tbody");

 tbody.innerHTML="";

 data.forEach(site=>{

  tbody.innerHTML+=`
  <tr>
   <td>${site.name}</td>
   <td>${site.status}</td>
  </tr>`;
 });

}

loadData();
