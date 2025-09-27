import { getParkData, getParkInfoLinks } from "./parkService.mjs";
import { parkIntroductionTemplate, mediaCardTemplate } from "./templates.mjs";
import { setHeaderFooter, footerTemplate} from "./setHeaderFooter.mjs";

const parkData = getParkData();
const linkData = getParkInfoLinks();

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

setHeaderFooter(parkData);
setParkInfoLinks(linkData);
setParkIntro(parkData);