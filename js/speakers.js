const speakersData = [
  {
    id: 1,
    name: 'Shola Akinlade',
    photo: 'images/speakers/shola-akinlade.jpg',
    description: 'Co-founder and CEO of Paystack',
    about: 'Shola is Nigerian software engineer and entrepreneur focused on building payment solutions'
  },
  {
    id: 2,
    name: 'Amaka Osakwe',
    photo: 'images/speakers/amaka-osakwe.jpg',
    description: 'Enterpreneur and Fashion Designer',
    about: 'Amaka Osakwe is a Nigerian fashion designer and creator of the African-based fashion label named Maki Oh.'
  },
  {
    id: 3,
    name: 'Arvind Krishna',
    photo: 'images/speakers/arvind-krishna.jpg',
    description: 'Chairman and CEO IBM',
    about: 'Arvind Krishna is an Indian-American business executive serving as the Chairman and CEO of IBM.'
  },
  {
    id: 4,
    name: 'Segun Agbaje',
    photo: 'images/speakers/segun-agbaje.jpg',
    description: 'MD Guaranty Trust Bank',
    about: 'Segun Agbaje is the Managing Director of Guaranty Trust Bank (GTBank), a Nigerian financial institution.'
  },
  {
    id: 5,
    name: 'Odun Eweniyi',
    photo: 'images/speakers/odun-eweniyi.jpg',
    description: 'Co-founder/COO PiggyVest',
    about: 'Odunayo Eweniyi is a Nigerian business executive and activist. She is the Co-founder and Chief Operations Officer PiggyVest'
  },
  {
    id: 6,
    name: 'Sara Blakely',
    photo: 'images/speakers/sara-blakely.jpg',
    description: 'Founder, Spanx',
    about: 'Sara Blakely is an American businesswoman and philanthropist.'
  }
]

const speakersBody = document.querySelector('.speaker-list')
const seeMoreButton = document.querySelector('.see-more')
// add speakers dynamically to page
speakersData.map((speaker) => {
  
  speakersBody.innerHTML += 
    `
    <div id = "${speaker.id}" class="speaker">
      <span class="speaker-img">
        <img src=${speaker.photo} alt="Paystack, CEO">
      </span>
      <div class="speaker-details">
        <h5 class="color-2 font-2">${speaker.name}</h5>
        <p class="color-1 font-1 description">${speaker.description}</p>
        <div class="dash"></div>
        <p class="about font-2 color-2">
          ${speaker.about}
        </p>
      </div>
    </div> `
})
const removeSeeMore = (openSpeaker) => {
  seeMoreButton.addEventListener('click', () => {
    openSpeaker.style.display = 'grid'
    seeMoreButton.style.display = 'none'
  })
}

const seeMore = () => {
  const speakerList = document.querySelectorAll('.speaker');
  if (seeMoreButton.style.display !== 'none') {
    speakerList.forEach((speaker) => {
      if (Number(speaker.id) > 2) {
        speaker.style.display = 'none'
      }
      removeSeeMore(speaker)
    })
  }

}
seeMore()

