const skills = ["Full Stack Development", "Wordpress Development", "Graphic Designing", "Web Designing", "CopyWriting", "SSL Solution", "Shopify & Wix", "Blockchain Development", "Web 3.0", "Artificial Inteligence", "Metaverse", "Game Development"]

const Web_Design = [`<img src="files/data/WD/01.png">`, `<img src="files/data/WD/02.png">`, `<img src="files/data/WD/03.png">`]
const Development = [`<img src="files/data/WD/05.png">`]
const Graphic_Design = [`<img src="files/data/WD/04.png">`]
const Wordpress = []
const Copywriting = []
const All = Web_Design.concat(Development, Graphic_Design, Wordpress, Copywriting)



for (let i = 0; i < skills.length; i++) {
  document.getElementsByClassName("skill")[i].lastElementChild.innerHTML = skills[i]
}



const Category = (name) => {
  document.querySelector(".selected-category").classList.remove("selected-category");
  document.getElementById(name.toString()).classList.add("selected-category");
  pg(1);
}

const pganimation = () => {
  document.getElementById("categories-data").style.animation = "none"
  document.getElementById("categories-data").style.animation = "switchpgs 0.5s ease-in-out"
  setTimeout(() => {
    document.getElementById("categories-data").style.animation = "none"
  }, 500)
}

const pg = (num) => {
  pganimation()
  document.querySelector(".page-selected").classList.remove("page-selected");
  document.getElementById("pg" + num).classList.add("page-selected");
  let arr = document.querySelector(".selected-category").getAttribute("id");
  pgcd(arr, num)
}


const pgcd = (array, pg) => {
  switch (array) {
    case "A":
      cc(All, pg);
      break;
    case "WD":
      cc(Web_Design, pg);
      break;
    case "DV":
      cc(Development, pg);
      break;
    case "GD":
      cc(Graphic_Design, pg);
      break;
    case "WP":
      cc(Wordpress, pg);
      break;
    case "CW":
      cc(Copywriting, pg);
      break;
  }
}

const cc = (array, pg) => {
  if (pg == 1) {
    let i = 0
    for (let j = 0; j < 6; j++) {
      if (array[j]) {
        document.getElementsByClassName("portfolio-data")[i].innerHTML = `${array[j]}`;
        document.getElementsByClassName("portfolio-data")[i].classList.remove("locked");
        i++
      } else {
        document.getElementsByClassName("portfolio-data")[i].innerHTML = `<span class="material-symbols-rounded locked">network_intelligence_history</span>`;
        document.getElementsByClassName("portfolio-data")[i].classList.add("locked");
        i++
      }
    }
  } else if (pg == 2) {
    let i = 0
    for (let j = 6; j < 12; j++) {
      if (array[j]) {
        document.getElementsByClassName("portfolio-data")[i].innerHTML = `${array[j]}`;
        document.getElementsByClassName("portfolio-data")[i].classList.remove("locked");
        i++
      } else {
        document.getElementsByClassName("portfolio-data")[i].innerHTML = `<span class="material-symbols-rounded locked">network_intelligence_history</span>`;
        document.getElementsByClassName("portfolio-data")[i].classList.add("locked");
        i++
      }
    }
  } else if (pg == 3) {
    let i = 0
    for (let j = 12; j < 18; j++) {
      if (array[j]) {
        document.getElementsByClassName("portfolio-data")[i].innerHTML = `${array[j]}`;
        document.getElementsByClassName("portfolio-data")[i].classList.remove("locked");
        i++
      } else {
        document.getElementsByClassName("portfolio-data")[i].innerHTML = `<span class="material-symbols-rounded locked">network_intelligence_history</span>`;
        document.getElementsByClassName("portfolio-data")[i].classList.add("locked");
        i++
      }
    }
  }
}
cc(All, 1);
