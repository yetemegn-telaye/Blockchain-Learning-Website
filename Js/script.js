const menuCloseBtn = document.querySelector('#menu-close');
const rowContainer = document.querySelector('#speakers-section');
const speakersData = [
  {
    speakerImg: '/images/profile-img3.jpg',
    speakerName: 'Bob Scheldon',
    speakerTitle: 'Director of Art Centre Nabi and board member of CC Korea',
    speakerDetail: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanitites, and the arts.',
  },
  {
    speakerImg: '/images/profile-img3.jpg',
    speakerName: 'Bob Scheldon',
    speakerTitle: 'Berkman Professor of Entrepreneurial Studies at Harvard',
    speakerDetail: 'As the main venue for new media art production in UK.',
  },
  {
    speakerImg: '/images/profile-img3.jpg',
    speakerName: 'Bob Scheldon',
    speakerTitle: 'Director of Art Centre Nabi and board member of CC Korea',
    speakerDetail: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanitites, and the arts.',
  },
  {
    speakerImg: '/images/profile-img3.jpg',
    speakerName: 'Bob Scheldon',
    speakerTitle: 'Director of Art Centre Nabi and board member of CC Korea',
    speakerDetail: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanitites, and the arts.',
  },
  {
    speakerImg: '/images/profile-img3.jpg',
    speakerName: 'Bob Scheldon',
    speakerTitle: 'Director of Art Centre Nabi and board member of CC Korea',
    speakerDetail: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanitites, and the arts.',
  },
  {
    speakerImg: '/images/profile-img3.jpg',
    speakerName: 'Bob Scheldon',
    speakerTitle: 'Director of Art Centre Nabi and board member of CC Korea',
    speakerDetail: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanitites, and the arts.',
  },
];
let speakerColumns = '';

menuCloseBtn.addEventListener('click', () => {
  const toggleMenuBtn = document.querySelector('#toggleMenuBtn');
  toggleMenuBtn.ariaExpanded = false;
});

const mediaQuery = window.matchMedia('(min-width: 768px)');
function displaySpeakerCard(data) {
  data.forEach((speaker) => {
    speakerColumns += `
      <div class="col-12 col-md-6">
      <div class="d-flex justify-content-center align-items-start">
          <div class="speaker-img">
              <img src=${speaker.speakerImg} class="speaker-img"/>
          </div>
         
          <div class="text-start ms-3 speaker-detail">
              <h5 class="fw-semibold">${speaker.speakerName}</h5>
              <p class="text-color-orange fst-italic lh-sm fs-6">${speaker.speakerTitle}</p>
              <hr class="speaker-hr">
              <p class="fs-6">
                 <small>${speaker.speakerDetail}</small>
              </p>
          </div>
      </div>
      </div>
      `;
  });

  rowContainer.innerHTML = speakerColumns;
}

const slicedSpeakersData = speakersData.slice(0, 2);

function handleTabletChange(e) {
  if (e.matches) {
    speakerColumns = '';
    displaySpeakerCard(speakersData);
  } else {
    speakerColumns = '';
    displaySpeakerCard(slicedSpeakersData);
  }
}

mediaQuery.addEventListener('change', handleTabletChange);

handleTabletChange(mediaQuery);

const moreBtn = document.querySelector('#more-btn');
const afterSlicedSpeakers = speakersData.slice(2, speakersData.length);

moreBtn.addEventListener('click', () => {
  displaySpeakerCard(afterSlicedSpeakers);
  moreBtn.style.display = 'none';
});