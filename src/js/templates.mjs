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
  return `<div class="center-section"><h3>${center.name}</h3>
          <p>${center.description}</p>
          <p>${center.directionsInfo}</p></div>`
}

export function activityTemplate(activity) {
  return `<li>${activity.name}</li>`
}