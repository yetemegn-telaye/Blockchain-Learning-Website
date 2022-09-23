const menuCloseBtn = document.querySelector('#menu-close');
const rowContainer = document.querySelector('#speakers-section');
const speakersData = [
  {
    speakerImg: "/images/profile-img3.jpg",
    speakerName: "Bob Scheldon",
    speakerTitle: "Director of Art Centre Nabi and board member of CC Korea",
    speakerDetail: "As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanitites, and the arts."
  },
  {
    speakerImg: "/images/profile-img3.jpg",
    speakerName: "Bob Scheldon",
    speakerTitle: "Director of Art Centre Nabi and board member of CC Korea",
    speakerDetail: "As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanitites, and the arts."
  },
  {
    speakerImg: "/images/profile-img3.jpg",
    speakerName: "Bob Scheldon",
    speakerTitle: "Director of Art Centre Nabi and board member of CC Korea",
    speakerDetail: "As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanitites, and the arts."
  },
  {
    speakerImg: "/images/profile-img3.jpg",
    speakerName: "Bob Scheldon",
    speakerTitle: "Director of Art Centre Nabi and board member of CC Korea",
    speakerDetail: "As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanitites, and the arts."
  },
  {
    speakerImg: "/images/profile-img3.jpg",
    speakerName: "Bob Scheldon",
    speakerTitle: "Director of Art Centre Nabi and board member of CC Korea",
    speakerDetail: "As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanitites, and the arts."
  },
  {
    speakerImg: "/images/profile-img3.jpg",
    speakerName: "Bob Scheldon",
    speakerTitle: "Director of Art Centre Nabi and board member of CC Korea",
    speakerDetail: "As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanitites, and the arts."
  },
];
let speakerColumns = "";

menuCloseBtn.addEventListener('click', () => {
  const toggleMenuBtn = document.querySelector('#toggleMenuBtn');
  toggleMenuBtn.ariaExpanded = false;
});

function displaySpeakerCard (speakersData) {
  speakersData.forEach(speaker => {
    speakerColumns +=`
    <div class="col-12 col-md-6">
    <div class="d-flex justify-content-center align-items-start">
        <div class="speaker-img">
            <img src=${speaker.speakerImg} class="img-fluid"/>
        </div>
       
        <div class="text-start ms-3 speaker-detail">
            <h3>${speaker.speakerName}</h3>
            <p class="common-h3 fst-italic">${speaker.speakerTitle}</p>
            <hr class="speaker-hr">
            <p class="fs-6">
               <small>${speaker.speakerDetail}</small>
            </p>
        </div>
    </div>
    </div>
    `;
  });
  rowContainer.innerHTML=speakerColumns;
}

displaySpeakerCard(speakersData);