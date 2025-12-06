import "../css/style.css";
import "../css/visitor-center.css";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { getParkData, getParkVisitorCenterDetails } from "./parkService.mjs";
import { vcIntroTemplate, vcTitleTemplate, vcDetailsTemplate, vcAmenityTemplate, vcImageTemplate, listTemplate, vcAddressesListTemplate, vcDirectionsTemplate, vcContactsTemplate } from "./templates.mjs";

function getParam(param) {
    let search = location.search;
    let params = new URLSearchParams(search);
    return params.get(param);
}

function buildPage(data) {
  document.querySelector(".center-name").innerHTML = vcTitleTemplate(data.name);
  document.querySelector(".center-intro").innerHTML = vcIntroTemplate(data);
  const detailsEl = document.querySelector(".center-info");
  detailsEl.innerHTML = "";
  // adresses
  const addressHTML = vcAddressesListTemplate(data.addresses);
  detailsEl.insertAdjacentHTML("beforeend", vcDetailsTemplate("cAddresses", "Addresses", "heading-icon_map-pin", addressHTML));
  // directions
  detailsEl.insertAdjacentHTML("beforeend", vcDetailsTemplate("cDirections", "Directions", "directions", vcDirectionsTemplate(data.directionsInfo)));
  // amenities
  const amenitiesHTML = listTemplate(data.amenities, vcAmenityTemplate);
  detailsEl.insertAdjacentHTML("beforeend", vcDetailsTemplate("cAmenities", "Amenities", "heading-icon_info", amenitiesHTML));
  // contact
  const contactHTML = vcContactsTemplate(data.contacts);
  detailsEl.insertAdjacentHTML("beforeend", vcDetailsTemplate("cContacts", "Contacts", "phone", contactHTML));
  // gallery
  const galleryHTML = listTemplate(data.images, vcImageTemplate);
  document.querySelector(".center-gallery").insertAdjacentHTML("beforeend", galleryHTML);
}

async function init() {
  const parkData = await getParkData();
  const id = getParam("id");
  const details = await getParkVisitorCenterDetails(id);
  setHeaderFooter(parkData);
  buildPage(details);
  // const galleryHTML = listTemplate(data.images, vcImageTemplate);
  // document.querySelector('vc-gallery').insertAdjacentHTML("beforeend", galleryHTML);
}

init();