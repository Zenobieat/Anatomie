const quizData = [];

const quizGrid = document.getElementById("quizGrid");
const quizPlayground = document.getElementById("quizPlayground");
const quizMenu = document.getElementById("quizMenu");
const resultPanel = document.getElementById("resultPanel");
const questionZone = document.getElementById("questionZone");
const progressCounter = document.getElementById("progressCounter");
const progressBar = document.getElementById("progressBar");
const nextQuestionBtn = document.getElementById("nextQuestion");
const quizTitle = document.getElementById("quizTitle");
const quizLevel = document.getElementById("quizLevel");
const resultTitle = document.getElementById("resultTitle");
const resultScore = document.getElementById("resultScore");
const resultDetails = document.getElementById("resultDetails");
const screens = document.querySelectorAll("[data-screen]");
const catalogScreen = document.getElementById("catalogScreen");

const menuSections = [
  {
    title: "Wervels & Thorax",
    items: ["atlas", "axis", "cervicaal", "thoracaal", "lumbaal", "sacrum", "costae", "sternum"]
  },
  {
    title: "Schoudergordel & Arm",
    items: ["clavicula", "scapula", "humerus", "radius", "ulna", "carpi", "hand"]
  },
  {
    title: "Heup & Been",
    items: ["os-coxae", "femur", "patella", "tibia", "fibula"]
  },
  {
    title: "Voet",
    items: ["talus", "calcaneus", "naviculare", "cuboideum", "cuneiformia", "metatarsalia"]
  }
];

const state = {
  currentQuiz: null,
  currentIndex: 0,
  selectedOption: null,
  answers: []
};

const letters = ["A", "B", "C", "D"];
const questionAnimationClass = "question-zone--animate";

function shortQuizLabel(quiz) {
  const parts = quiz.title.split("—");
  return parts[1] ? parts[1].trim() : quiz.title;
}

function renderMenu() {
  if (!quizGrid) return;

  if (!quizData.length) {
    quizGrid.innerHTML = `
      <div class="empty-state">
        <p class="hero__eyebrow">Nieuwe reeks in opbouw</p>
        <h4>De quizdatabase is leeg</h4>
        <p>
          We bouwen de twintig-vragen quizzen opnieuw op, bot per bot. Laat het
          weten wanneer we de eerste vijf modules mogen toevoegen – het menu is
          er al klaar voor.
        </p>
      </div>
    `;
    return;
  }

  const itemsById = quizData.reduce((acc, quiz) => {
    acc[quiz.id] = quiz;
    return acc;
  }, {});

  const sectionsWithContent = menuSections
    .map((section) => ({
      title: section.title,
      quizzes: section.items
        .map((quizId) => itemsById[quizId])
        .filter(Boolean)
    }))
    .filter((section) => section.quizzes.length);

  if (!sectionsWithContent.length) {
    quizGrid.innerHTML = `
      <div class="empty-state">
        <p class="hero__eyebrow">Bijna klaar</p>
        <h4>Voeg quizgegevens toe om het overzicht te activeren</h4>
        <p>Zo gauw er vragen zijn ingeladen verschijnen ze hier automatisch.</p>
      </div>
    `;
    return;
  }

  quizGrid.innerHTML = sectionsWithContent
    .map((section, index) => {
      const itemsMarkup = section.quizzes
        .map(
          (quiz) => `
            <li>
              <button class="quiz-option" data-id="${quiz.id}">
                <span>${shortQuizLabel(quiz)}</span>
              </button>
            </li>
          `
        )
        .join("");

      return `
        <details class="menu-section" ${index === 0 ? "open" : ""}>
          <summary>
            <span>${section.title}</span>
            <span class="menu-section__count">${section.quizzes.length}</span>
          </summary>
          <ul class="menu-section__list">
            ${itemsMarkup}
          </ul>
        </details>
      `;
    })
    .join("");

  quizGrid.querySelectorAll(".quiz-option").forEach((button) => {
    button.addEventListener("click", () => startQuiz(button.dataset.id));
  });
}

function startQuiz(id) {
  const quiz = quizData.find((q) => q.id === id);
  if (!quiz) return;
  state.currentQuiz = quiz;
  state.currentIndex = 0;
  state.answers = [];
  state.selectedOption = null;
  quizTitle.textContent = quiz.title;
  quizLevel.textContent = quiz.level;
  togglePanels("quiz");
  renderQuestion();
}

function togglePanels(view) {
  quizMenu.classList.toggle("panel--hidden", view !== "menu");
  quizPlayground.classList.toggle("panel--hidden", view !== "quiz");
  resultPanel.classList.toggle("panel--hidden", view !== "result");
}

function renderQuestion() {
  const quiz = state.currentQuiz;
  if (!quiz) return;
  const question = quiz.questions[state.currentIndex];
  nextQuestionBtn.disabled = true;
  state.selectedOption = null;
  progressCounter.textContent = `Vraag ${state.currentIndex + 1} van ${quiz.questions.length}`;
  const progressValue = (state.currentIndex / quiz.questions.length) * 100;
  progressBar.style.width = `${progressValue}%`;

  const optionsMarkup = question.options
    .map(
      (option, index) => `
        <button class="option" data-index="${index}">
          <strong>${letters[index]}</strong>
          <span>${option}</span>
        </button>
      `
    )
    .join("");

  questionZone.innerHTML = `
    <h4>${question.prompt}</h4>
    <div class="options">${optionsMarkup}</div>
  `;
  animateQuestionZone();

  questionZone.querySelectorAll(".option").forEach((optionBtn) => {
    optionBtn.addEventListener("click", () => selectOption(optionBtn));
  });

  nextQuestionBtn.textContent =
    state.currentIndex === quiz.questions.length - 1 ? "Toon resultaat" : "Volgende vraag";
}

function selectOption(button) {
  questionZone.querySelectorAll(".option").forEach((btn) => btn.classList.remove("selected"));
  button.classList.add("selected");
  state.selectedOption = Number(button.dataset.index);
  nextQuestionBtn.disabled = false;
}

nextQuestionBtn.addEventListener("click", () => {
  if (state.selectedOption === null) return;
  const quiz = state.currentQuiz;
  state.answers.push({
    questionIndex: state.currentIndex,
    selected: state.selectedOption,
    correct: quiz.questions[state.currentIndex].answer
  });

  if (state.currentIndex < quiz.questions.length - 1) {
    state.currentIndex += 1;
    renderQuestion();
  } else {
    showResults();
  }
});

function animateQuestionZone() {
  if (!questionZone) return;
  questionZone.classList.remove(questionAnimationClass);
  void questionZone.offsetWidth;
  questionZone.classList.add(questionAnimationClass);
}

function showResults() {
  const quiz = state.currentQuiz;
  const correctAnswers = state.answers.filter((answer) => answer.selected === answer.correct).length;
  const scoreOn20 = (correctAnswers / quiz.questions.length) * 20;
  resultTitle.textContent = quiz.title;
  resultScore.innerHTML = `<span class="result-score">${scoreOn20.toFixed(1)} / 20</span><br>${correctAnswers} van ${quiz.questions.length} juist`;

  const detailsMarkup = state.answers
    .map((answer, idx) => {
      const question = quiz.questions[answer.questionIndex];
      const isCorrect = answer.selected === answer.correct;
      return `
        <div class="result-detail ${isCorrect ? "correct" : "incorrect"}">
          <p><strong>${idx + 1}.</strong> ${question.prompt}</p>
          <p>Jouw antwoord: ${letters[answer.selected]} – ${question.options[answer.selected]}</p>
          ${
            isCorrect
              ? "<p>✅ Helemaal goed!</p>"
              : `<p>Correct: ${letters[answer.correct]} – ${question.options[answer.correct]}</p>`
          }
        </div>
      `;
    })
    .join("");

  resultDetails.innerHTML = detailsMarkup;
  progressBar.style.width = "100%";
  togglePanels("result");
}

const backToMenu = document.getElementById("backToMenu");
const retryQuiz = document.getElementById("retryQuiz");
const returnHome = document.getElementById("returnHome");
const scrollToQuizzes = document.getElementById("scrollToQuizzes");
const goToLanding = document.getElementById("goToLanding");

function showScreen(target) {
  if (!screens.length) return;
  screens.forEach((screen) => {
    screen.classList.toggle("is-visible", screen.dataset.screen === target);
  });
}

function openCatalogView() {
  showScreen("catalog");
  togglePanels("menu");
  if (catalogScreen) {
    catalogScreen.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

backToMenu.addEventListener("click", () => {
  state.currentQuiz = null;
  togglePanels("menu");
});

retryQuiz.addEventListener("click", () => {
  if (!state.currentQuiz) return;
  startQuiz(state.currentQuiz.id);
});

returnHome.addEventListener("click", () => {
  state.currentQuiz = null;
  togglePanels("menu");
  showScreen("catalog");
});

if (scrollToQuizzes) {
  scrollToQuizzes.addEventListener("click", openCatalogView);
}

if (goToLanding) {
  goToLanding.addEventListener("click", () => {
    showScreen("start");
  });
}

showScreen("start");

renderMenu();
