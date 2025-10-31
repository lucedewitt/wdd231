export function setHeaderFooter(data){
  // Modifies the disclaimer with the park link and full name
  let disclaimerLink = document.querySelector(".disclaimer a");
  disclaimerLink.innerHTML = data.fullName;
  disclaimerLink.setAttribute('href', data.url);
  // Changes the web tab to the park name
  let webTitle = document.querySelector("title");
  webTitle.innerHTML = data.fullName;
  // Sets the hero image to the first park image
  let heroImg = document.querySelector(".hero-banner img");
  heroImg.setAttribute('src', data.images[0].url);
  // Changes the banner content to the park content, calls parkInfoTemplate
  let bannerContent = document.querySelector(".hero-banner_content");
  bannerContent.innerHTML = parkInfoTemplate(data);
  // Sets up the footer
  let footer = document.querySelector("#park-footer");
  footer.innerHTML = footerTemplate(data);
}

export function parkInfoTemplate(data) {
    return `<a href="#" class="hero-banner_title">${data.name}</a>
            <p class="hero-banner_subtitle">
              <span>${data.designation}</span>
              <span>${data.states}</span>
            </p>`
}

export function getMailingAddress(addresses) {
  const mailing = addresses.find((address) => address.type === "Mailing");
  return mailing;
}

export function getVoicePhone(phoneNumbers) {
  const phone = phoneNumbers.find((number) => number.type === "Voice");
  return phone.phoneNumber;
}

export function footerTemplate(info) {
  const mailing = getMailingAddress(info.addresses);
  const voice = getVoicePhone(info.contacts.phoneNumbers)
  
  return `<section class="contact">
  <h3 id="footer-heading">Contact Info</h3>
  <h4 id="mail-heading">Mailing Address:</h4>
  <div><p>${mailing.line1}<p>
  <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
  <h4 id="phone-heading">Phone:</h4>
  <p>${voice}</p>
  </section>`;
}

let menuButton = document.querySelector('#global-nav-toggle');

function enableNavigation() {
  menuButton.addEventListener('click', (ev) => {
    let target = ev.target;
    document.querySelector('.global-nav').classList.toggle("show");
    if (target.tagName != "BUTTON") {
      target = target.closest("button");
    }
    if (document.querySelector('.global-nav').classList.contains("show")) {
      target.setAttribute("aria-expanded", true);
    } else {
      target.setAttribute("aria-expanded", false);
    }

    console.log("toggle");
  })
}

enableNavigation();