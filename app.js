// Quizdata en catalogusdata blijven buiten de UI-logica zodat functionaliteit bewaard blijft.
const quizData = [
  {
    question: 'Welke wervelkolomregio telt zeven wervels?',
    options: ['Lumbale wervels', 'Thoracale wervels', 'Cervicale wervels', 'Sacrum'],
    correctIndex: 2,
    tip: 'Cervicaal = nekstreek met C1 t.e.m. C7.'
  },
  {
    question: 'Hoe heet de verbinding tussen borstbeen en sleutelbeen?',
    options: ['Glenohumerale verbinding', 'Acromioclaviculaire verbinding', 'Sternoclaviculaire verbinding', 'Costochondrale verbinding'],
    correctIndex: 2,
    tip: 'Het sternum (borstbeen) articuleert met de clavicula.'
  },
  {
    question: 'Wat is de botnaam voor het bovenbeen?',
    options: ['Fibula', 'Femur', 'Tibia', 'Humerus'],
    correctIndex: 1,
    tip: 'Het femur is het langste bot in het lichaam.'
  },
  {
    question: 'Welke structuur vormt de enkelknobbel aan de buitenzijde?',
    options: ['Mediale malleolus', 'Laterale malleolus', 'Talus', 'Calcaneus'],
    correctIndex: 1,
    tip: 'De laterale malleolus is onderdeel van de fibula.'
  },
  {
    question: 'Hoeveel ribbenparen heeft een mens normaal?',
    options: ['9', '10', '12', '14'],
    correctIndex: 2,
    tip: 'Er zijn 7 echte, 3 valse en 2 zwevende paren.'
  },
  {
    question: 'Welke beenderen vormen de schoudergordel?',
    options: ['Scapula en clavicula', 'Humerus en ulna', 'Sternum en ribben', 'Radius en ulna'],
    correctIndex: 0,
    tip: 'Schoudergordel = schouderblad plus sleutelbeen.'
  },
  {
    question: 'Hoe heet het gewricht tussen femur en tibia?',
    options: ['Heupgewricht', 'Enkelgewricht', 'Kniegewricht', 'SI-gewricht'],
    correctIndex: 2,
    tip: 'Dit synoviaal gewricht draagt je lichaamsgewicht bij flexie/extensie.'
  },
  {
    question: 'Welke voetboog vangt vooral laterale krachten op?',
    options: ['Mediale lengteboog', 'Laterale lengteboog', 'Dwarsboog', 'Geen van beide'],
    correctIndex: 1,
    tip: 'De laterale boog is platter en stabieler.'
  }
];

const catalogData = [
  {
    title: 'Wervels & Thorax',
    description: 'Overzicht van wervelkolom, ribben en borstbeen.',
    items: ['C1 t.e.m. C7 (atlas en axis incl.)', 'T1-T12 thoracaal', 'L1-L5 lumbaal', 'Sacrum & coccyx', 'Borstbeen en ribbenbogen']
  },
  {
    title: 'Schoudergordel & Arm',
    description: 'Van sleutelbeen tot handwortel.',
    items: ['Clavicula & scapula', 'Humerus', 'Ulna & radius', 'Carpalia en metacarpalia']
  },
  {
    title: 'Heup & Been',
    description: 'Dragende botten van het onderlichaam.',
    items: ['Bekken: ilium, ischium, pubis', 'Femur', 'Patella', 'Tibia & fibula']
  },
  {
    title: 'Voet',
    description: 'Structuren voor balans en afzet.',
    items: ['Tarsalia (talus, calcaneus, naviculare…)', 'Metatarsalia I-V', 'Falangen (proximaal, mediaal, distaal)']
  }
];

const questionText = document.getElementById('questionText');
const answersGrid = document.getElementById('answersGrid');
const feedbackText = document.getElementById('feedbackText');
const nextButton = document.getElementById('nextButton');
const scoreChip = document.getElementById('scoreChip');
const progressText = document.getElementById('progressText');
const progressValue = document.getElementById('progressValue');
const catalogGrid = document.getElementById('catalogGrid');

let currentQuestion = 0;
let score = 0;
let questionAnswered = false;

function updateProgress() {
  const total = quizData.length;
  progressText.textContent = `Vraag ${Math.min(currentQuestion + 1, total)} van ${total}`;
  const width = (currentQuestion / total) * 100;
  progressValue.style.width = `${width}%`;
  progressValue.setAttribute('aria-valuenow', String(width));
}

function updateScoreChip() {
  scoreChip.textContent = `${score} / ${quizData.length} punten`;
}

function renderQuestion() {
  const data = quizData[currentQuestion];
  questionText.textContent = data.question;
  feedbackText.textContent = 'Kies het juiste antwoord.';
  answersGrid.innerHTML = '';
  questionAnswered = false;
  nextButton.disabled = true;
  nextButton.textContent = currentQuestion === quizData.length - 1 ? 'Bekijk resultaat' : 'Volgende vraag';

  data.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'answer-option';
    button.type = 'button';
    button.textContent = option;
    button.addEventListener('click', () => handleAnswer(index));
    answersGrid.appendChild(button);
  });

  updateProgress();
}

function handleAnswer(selectedIndex) {
  if (questionAnswered) return;
  questionAnswered = true;

  const data = quizData[currentQuestion];
  const buttons = Array.from(answersGrid.querySelectorAll('button'));

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === data.correctIndex) {
      button.classList.add('correct');
    }
    if (index === selectedIndex && index !== data.correctIndex) {
      button.classList.add('wrong');
    }
  });

  const isCorrect = selectedIndex === data.correctIndex;
  if (isCorrect) {
    score += 1;
    feedbackText.textContent = 'Juist! ' + data.tip;
  } else {
    feedbackText.textContent = 'Niet helemaal. ' + data.tip;
  }

  updateScoreChip();
  progressValue.style.width = `${((currentQuestion + 1) / quizData.length) * 100}%`;
  nextButton.disabled = false;
}

function showResults() {
  questionText.textContent = 'Resultaat';
  feedbackText.textContent = 'Klaar voor een nieuwe ronde?';
  answersGrid.innerHTML = `
    <div class="result-card">
      <p>Je haalde <strong>${score}</strong> op <strong>${quizData.length}</strong> vragen.</p>
      <p>Doorloop de catalogus hieronder om te verdiepen of speel opnieuw.</p>
    </div>
  `;
  nextButton.textContent = 'Opnieuw spelen';
  nextButton.disabled = false;
}

nextButton.addEventListener('click', () => {
  if (!questionAnswered && currentQuestion < quizData.length) {
    return;
  }

  if (currentQuestion === quizData.length - 1 && questionAnswered) {
    showResults();
    currentQuestion += 1;
    questionAnswered = true;
    return;
  }

  if (currentQuestion >= quizData.length) {
    // Reset naar begin voor een nieuwe ronde.
    currentQuestion = 0;
    score = 0;
    updateScoreChip();
  } else {
    currentQuestion += 1;
  }

  if (currentQuestion < quizData.length) {
    renderQuestion();
  } else {
    showResults();
  }
});

function renderCatalog() {
  catalogGrid.innerHTML = '';

  catalogData.forEach((category, index) => {
    const card = document.createElement('article');
    card.className = 'catalog-card';

    const toggle = document.createElement('button');
    toggle.className = 'catalog-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = `
      <div>
        <div>${category.title}</div>
        <span>${category.description}</span>
      </div>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    `;

    const content = document.createElement('div');
    content.className = 'catalog-content';
    const list = document.createElement('ul');
    category.items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
    content.appendChild(list);

    toggle.addEventListener('click', () => {
      const currentlyOpen = document.querySelector('.catalog-card.active');
      if (currentlyOpen && currentlyOpen !== card) {
        currentlyOpen.classList.remove('active');
        const openToggle = currentlyOpen.querySelector('.catalog-toggle');
        openToggle?.setAttribute('aria-expanded', 'false');
      }

      const isActive = card.classList.toggle('active');
      toggle.setAttribute('aria-expanded', String(isActive));
    });

    card.appendChild(toggle);
    card.appendChild(content);
    catalogGrid.appendChild(card);

    if (index === 0) {
      // Zorgt dat alles effectief dicht start door expliciet de active-class weg te laten.
      card.classList.remove('active');
    }
  });
}

updateScoreChip();
renderQuestion();
renderCatalog();
*** End of File
