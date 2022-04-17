/*
      <article class="tab">
        <div>
          <figure class="fig-flex">
            <img
              src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg"
              alt="">
            <span>Eddard "Ned" Stark</span>
          </figure>
        </div>
        <p>Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark</p>
        <div class="link">
          <a href="http://gameofthrones.wikia.com/wiki/House_Stark">Learn More !</a>
        </div>

      </article>

*/

got.houses.forEach((house) => {
  house.people.forEach((person) => {
    let article = document.createElement(`article`)
    article.classList.add(`tab`)
    let elements = `<div>
          <figure class="fig-flex">
            <img
              src= "${person.image}" 
              alt="">
            <span>${person.name}</span>
          </figure>
        </div>
        <p>${person.description}</p>
        <div class="link">
          <a href="${person.wikiLink}">Learn More !</a>
        </div>`
    article.innerHTML = elements
    document.querySelector('section').append(article)
  })
})