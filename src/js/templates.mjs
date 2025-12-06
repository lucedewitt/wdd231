import spritePath from '../images/sprite.symbol.svg';

export function mediaCardTemplate(data){
  return `<div class="info-group">
          <a class="img-link" href="${data.link}"><img src="${data.image}" alt=""></a>
          <a class="subheader-link" href="${data.link}"><h2>${data.name}</h2></a>
          <p>${data.description}</p></div>`
}

export function parkIntroductionTemplate(data){
  return `<h1>${data.fullName}</h1>
          <p>${data.description}</p>`
}

export function alertTemplate(alert){
  let alertType = "";
  switch (alert.category) {
    case "Park Closure":
      alertType = "closure";
      break;
    default:
      alertType = alert.category.toLowerCase();
  }
  return `<li class="alert">
            <svg class="icon" focusable="false" aria-hidden="true">
              <use xlink:href="${spritePath}#alert-${alertType}"></use>
            </svg>
            <div>
              <h3 class="alert-${alertType}">${alert.title}</h3>
              <p>${alert.description}</p>
            </div>
          </li>`
}

export function visitorCentersTemplate(center) {
  return `<div class="center-section"><a href="visitor-center.html?id=${center.id}">${center.name}</a>
          <p>${center.description}</p>
          <p>${center.directionsInfo}</p></div>`
}

export function activityTemplate(activity) {
  return `<li>${activity.name}</li>`
}

export function vcAmenityTemplate(data) {
  return `<li>${data}</li>`;
}

export function vcImageTemplate(data) {
  return `<li><img src="${data.url}" alt="${data.altText}" ><li>`;
}

export function listTemplate(data, contentTemplate) {
  const html = data.map(contentTemplate);
  return `<ul>${html.join("")}</ul>`;
}

export function vcTitleTemplate(text) {
  return `${iconTemplate("ranger-station")} <h1>${text}</h1>`;
}

export function vcIntroTemplate(data) {
  const image = data.images[0];
  return `<figure>
          <img src="${image.url}" alt="${image.altText}" />
          <figcaption>${image.caption} <span>${image.credit}</span></figcaption>
        </figure>
        <p>${data.description}</p>`;
}

function vcAddressesTemplate(data) {
  return `<section>
            <h3>${data.type} Address</h3>
            <address>
              ${data.line1}<br />
              ${data.city}, ${data.stateCode} ${data.postalCode}
            </address>
          </section>`;
}

export function vcAddressesListTemplate(data) {
  const physical = data.find((address) => address.type === "Physical");
  const mailing = data.find((address) => address.type === "Mailing");
  let html = vcAddressesTemplate(physical);
  if (mailing) {
    html += vcAddressesTemplate(mailing);
  }
  return html;
}

export function vcDirectionsTemplate(data) {
  return `<p>${data}<p>`;
}

export function vcContactsTemplate(data) {
  return `<section class="vc-contact__email">
            <h3>Email Address</h3>
            <a href="email:${data.emailAddresses[0].emailAddress}">Send this visitor center an email</a>
          </section>
          <section class="vc-contact__phone">
            <h3>Phone numbers</h3>
            <a href="tel:+1${data.phoneNumbers[0].phoneNumber}">${data.phoneNumbers[0].phoneNumber}</a>
          </section>`;
}

export function iconTemplate(iconID) {
  return `<svg class="icon" role="presentation" focusable="false">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/sprite.symbol.svg#${iconID}"></use>
          </svg>`;
}

export function vcDetailsTemplate(elementID, summaryText, iconID, content) {
  return `<details name="vc-details" id="${elementID}">
            <summary>
              ${iconTemplate(iconID)}
              ${summaryText}<img src="./images/arrow.svg">
            </summary>
            ${content}
          </details>`;
}