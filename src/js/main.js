import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

let disclaimerLink = document.querySelector(".disclaimer a");
disclaimerLink.innerHTML = parkData.fullName;
disclaimerLink.setAttribute('href', parkData.url);

let webTitle = document.querySelector("title");
webTitle.innerHTML = parkData.fullName;

let heroImg = document.querySelector(".hero-banner img");
heroImg.setAttribute('src', parkData.images[0].url);

let bannerContent = document.querySelector(".hero-banner_content");
bannerContent.innerHTML = parkInfoTemplate(parkData);

function parkInfoTemplate(info) {
    return `<a href="#" class="hero-banner_title">${info.name}</a>
            <p class="hero-banner_subtitle">
              <span>${info.designation}</span>
              <span>${info.states}</span>
            </p>`
}