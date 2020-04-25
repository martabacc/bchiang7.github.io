const options = {
  timeZone: 'America/New_York',
  hour12: false,
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

$(function() {
  const d = new Date();
  const hours = d.getHours();
  let greeting;
  let comment;

  const data = [
    [0, 4, 'Tidur atuh udah jam segini', 'Malem '],
    [5, 11, 'Semangaaaat hari ini 😸', 'Pagi'],
    [12, 17, 'Jangan lupa makan siang qamu 🍽 🍳', 'Siaaaang'],
    [18, 22, 'Ngemil pilus dulu, laper pasti jam segini 😋', 'Sore '],
    [22, 24, 'Sleep tight ya ‎😴 xoxo 😘', 'Nitenite  '],
  ];

  for (let i = 0; i < data.length; i++) {
    if (hours >= data[i][0] && hours <= data[i][1]) {
      greeting = data[i][3];
      comment = data[i][2];
    }
  }

  const night = hours >= 19 || hours <= 7; // between 7pm and 7am
  const body = document.querySelector('body');
  const toggle = document.getElementById('toggle');
  const input = document.getElementById('switch');
  const greet = document.getElementById('greet');
  const commentElement = document.getElementById('comment');
  const timeText = document.getElementById('time__slot');

  if (night) {
    input.checked = true;
    body.classList.add('night');
  }

  greet.innerHTML = greeting;
  timeText.innerHTML = d.toLocaleString('en-US', options);
  commentElement.innerHTML = comment.replace('NAME_PLACEHOLDER', 'Shimon');

  toggle.addEventListener('click', function() {
    const isChecked = input.checked;
    if (isChecked) {
      body.classList.remove('night');
    } else {
      body.classList.add('night');
    }
  });

  const introHeight = document.querySelector('.intro').offsetHeight;
  const topButton = document.getElementById('top-button');
  const $topButton = $('#top-button');

  window.addEventListener(
    'scroll',
    function() {
      if (window.scrollY > introHeight) {
        $topButton.fadeIn();
      } else {
        $topButton.fadeOut();
      }
    },
    false
  );

  topButton.addEventListener('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  const hand = document.querySelector('.emoji.wave-hand');

  function waveOnLoad() {
    hand.classList.add('wave');
    setTimeout(function() {
      hand.classList.remove('wave');
    }, 2000);
  }

  setTimeout(function() {
    waveOnLoad();
  }, 1000);

  hand.addEventListener('mouseover', function() {
    hand.classList.add('wave');
  });

  hand.addEventListener('mouseout', function() {
    hand.classList.remove('wave');
  });

  window.sr = ScrollReveal({
    reset: false,
    duration: 600,
    easing: 'cubic-bezier(.694,0,.335,1)',
    scale: 1,
    viewFactor: 0.3,
  });

  sr.reveal('.background');
  sr.reveal('.skills');
  sr.reveal('.experience', { viewFactor: 0.2 });
  sr.reveal('.featured-projects', { viewFactor: 0.1 });
  sr.reveal('.other-projects', { viewFactor: 0.05 });
});
