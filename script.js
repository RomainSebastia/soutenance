// JE CREER MES VARIABLES POUR CIBLER MES BALISES POUR L'ARTICLE 1 ET 2 AVEC LE TITRE L'AUTEUR ET LA DATE
let titre = document.getElementById('titre1')
let date = document.getElementById('date')
let auteur = document.getElementById('auteur')


// CREATION DES PARAGRAPHE QUE JE CREER DANS LE MODAL

let description1 = document.getElementById('description1')
let description2 = document.getElementById('description2')
let description3 = document.getElementById('description3')
let img = document.getElementById('img-modal')

// CONST QUI CIBLE MON BOUTON 1

const bouton1 = document.getElementById('bouton');


// CREATION PREMIER BLOC ARTICLE MODAL
let titreNews = document.getElementById('titre-news')
let text = document.getElementById('text-1')
let clicArticle = document.getElementById('clic-article')




// CREATION VARIABLE DEUXIEME BLOC ARTICLE MODAL
let titreNews2 = document.getElementById("titre-news2")
let text2 = document.getElementById("text-2")
let clicArticle2 = document.getElementById("clic-article2")

// CONST QUI CIBLE MON BOUTON 2
const bouton2 = document.getElementById('bouton2');


// BLOC ARTICLE 1 ET 2 AVANT DE CLIQUEZ SUR LE BOUTON AVEC L'EVENEMENT DOMCONTENTLOADED QUI SE DECLENCHE
// LORSQUE LE DOCUMENT EST ENTIEREMENT CHARGER

async function getData(articleId) {

  return await fetch(`https://www.tbads.eu/greta/kercode/ajax/?article=${articleId}`)
    .then(response => response.json())
    .catch(error => console.log(error));
}





document.addEventListener('DOMContentLoaded', function () {
  getData(1)

    .then(data => {
      titreNews.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`
      text.innerHTML = `${data.title}`
      text.style.fontWeight = 'bold';
      clicArticle.innerHTML = "Plus d'infos cliquez-ici"

    })





  // APELLE DE LA FONCTION GET DATA POUR LARTICLE 2

  getData(2)


    .then(data => {
      titreNews2.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`
      text2.innerHTML = `${data.title}`
      text2.style.fontWeight = 'bold';
      clicArticle2.innerHTML = "Plus d'infos cliquez-ici";
    })


});




// POUR M'ENTRAINER AU JAVASCRIPT J'AI CREER DES STYLES POUR LE TITRE DES MODAL


function titleStyle() {
  titre.style.color = "orange";
  titre.style.fontSize = "2rem";
  titre.onmouseover = function () {
    this.style.color = 'green';
  }

  titre.onmouseout = function () {
    this.style.color = "orange";
    this.style.cursor = "pointer";
  }
}


// LA FONCTION DISPLAYARTICLE PREND EN PARAMETRE LES DONNEE(DATA)
//  D'UN ARTICLE ET UTILISE CES DONNES POUR REMPLIR DES ELEMENT DE LA PAGE WEB


function displayArticle(data) {
  titre.innerHTML = data.title
  date.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`
  auteur.innerHTML = ` Auteur : ${data.author.surname} ${data.author.name}`
  description1.innerHTML = data.content[0]
  description2.innerHTML = data.content[1]
  description3.innerHTML = data.content[2]
  img.src = data.picture

}





// CETTE FONCTION SE DECLANCHE LORS DU CLIQUE SUR LES BOUTONS 1 ET 2

// L'OPERATEUR AWAIT SIGNIFIE QUE L'EXECUTION DE LA FONCTION GETDATA SERA SUSPENDU JUSQU'A CE QUE LA FONCTION GETDATA RENVOIE UNE REPONSE



async function textModal(articleId) {
  const articleData = await getData(articleId);

  displayArticle(articleData);

  titleStyle();
}



// LA FONCTION ATTENTEREPONSE PREND EN PARAMETRE UN NUMERO D'ARTICLE (articleNew)


async function getData(articleId) {

  return await fetch(`https://www.tbads.eu/greta/kercode/ajax/?article=${articleId}`)
    .then(response => response.json())
    .catch(error => console.log(error))
}






// BOUTON 1 ET 2 ON DES EVENEMENT CLICK QUI PASSE EN PARAMETRE LE NUMERO D'ARTICLE DE NOTRE CHOIX

bouton1.addEventListener('click', () => {
  textModal(1);
});
bouton2.addEventListener('click', () => {
  textModal(2);
});