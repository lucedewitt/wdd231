import "../css/style.css";
import "../css/home.css";

import { getParkData, getInfoLinks } from "./parkService.mjs";
import { parkIntroductionTemplate, mediaCardTemplate } from "./templates.mjs";
import { setHeaderFooter, footerTemplate} from "./setHeaderFooter.mjs";

function setParkIntro(data){
  // Changes intro section to park content
  let introContent = document.querySelector(".intro");
  introContent.innerHTML = parkIntroductionTemplate(data);
}

function setParkInfoLinks(data) {
  // Uses park info to change body to links
  let infoContent = document.querySelector(".info");
  let infoHTML = data.map(mediaCardTemplate).join("");
  infoContent.innerHTML = infoHTML;
}

async function init() {
  let parkData = await getParkData();
  let linkData = getInfoLinks(parkData.images);

  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(linkData);
}

init();