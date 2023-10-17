// -console.log(datas);
// Structure de datas:
// - fullname: string
// - profil: string
// - email : string
// - description : string
// - socials : [Social, Social, ...]
// - works : [Work, Work, ...]
// - experience : [Experience, Experience, ...]

// Structure de Social:
// name : string
// url : string
// link : string

// Structure de Work:
// name: string,
// url: string,
// technology: [Techo, Techno, ...],
// preview: string

// Structure de Experience:
// name: string,
// link: string,
// technology: [Techo, Techno, ...]

// 1.
const Titre = document.getElementById('fullName');
Titre.innerText = 'Hey , I m ' + datas.fullname;

// 2.
const TitreSuivant = document.getElementById('profil');
TitreSuivant.innerText = datas.profil

// 3.
const paragraph = document.getElementById('description');
paragraph.innerText = datas.description
// 4.
const imege = document.querySelector('img')
imege.setAttribute('src',datas.picture)

// 5.
const selection = document.querySelectorAll('.socials');
selection.forEach(function(selection) {
    selection.innerHTML = "";
    datas.socials.forEach(function(socials) {
        selection.innerHTML += ` <li>
        <a href="${socials.url}"><img src="${socials.link}" alt="${socials.name}"></a>
      </li>`
    })
    
})

// 6.

const list = (technology) => {
  let elementTab = "";
  technology.forEach(element =>{
    elementTab += `<li>
    <span class="card-link">${element}</span>
  </li>`;
  })

return elementTab;

}


const card = document.getElementById('works');
console.log(card);

for (let i = 0; i < datas.works.length; i++) {
    card.innerHTML += ` <div class="col-xl-4 col-lg-4 col-sm-6 col-12 my-2">
    <div class="card">
      <img class="card-img-top" src="${datas.works[i].preview}" alt="datasWorksName">
      <div class="card-body w-100 px-0">
        <h2 class="card-title mt-0 mb-4 text-center">${datas.works[i].name}</h2>
        <ul class="list-unstyled w-100 d-flex justify-content-center flex-wrap ">
        ${list(datas.works[i].technology)}
            
        </ul>
        <div class="row w-100">
          <div class="d-flex justify-content-center">
            <a href="${datas.works[i].url}" class="text-decoration-none px-4 py-3 mt-2 rounded">See Project</a>
          </div>
        </div>
      </div>
    </div>
  </div>
 `
    
}



// 7.
const listDesEXperience = (technology) => {
  let elementTab = "";
  technology.forEach(element =>{
    elementTab += `<li>
    <span class="card-link">${element}</span>
  </li>`;
  })

return elementTab;

}

const experience = document.getElementById('experiences') ;

for (let i = 0; i < datas.experiences.length; i++) {
    experience.innerHTML += `  <div class="col-xl-4 col-lg-4 col-sm-6 col-12 my-2">
    <div class="card h-100">
      <img class="card-img-top" src="${datas.experiences[i].link}" alt="${datas.experiences[i].name}">
      <div class="card-body w-100 px-0">
        <h2 class="card-title mt-0 mb-4 text-center">${datas.experiences[i].name}</h2>
        <ul class="list-unstyled w-100 d-flex justify-content-center flex-wrap">
          
              ${listDesEXperience(datas.experiences[i].technology)}</span>
          
          
        </ul>
      </div>
    </div>
  </div>
 `
    
}


// 8.
const changeDeEmail = document.getElementById('mail');
changeDeEmail.innerText = datas.email