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