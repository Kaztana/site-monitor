let sites = [];

async function loadSites() {

  const res =
    await fetch("./data/sites.json");

  sites = await res.json();

  renderSites();
}

function renderSites() {

  const list =
    document.getElementById("siteList");

  list.innerHTML = "";

  sites.forEach((site,index)=>{

    list.innerHTML += `
      <li>
        ${site.name}
        <button onclick="deleteSite(${index})">
        削除
        </button>
      </li>
    `;
  });
}

function addSite(){

  const name =
    document.getElementById("siteName").value;

  const url =
    document.getElementById("siteUrl").value;

  sites.push({
    name,
    url
  });

  renderSites();
}

function deleteSite(index){

  sites.splice(index,1);

  renderSites();
}

loadSites();
