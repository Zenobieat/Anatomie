const quizData = [
  {
    id: "atlas",
    title: "Quiz 1 — Atlas (C1)",
    level: "Moeilijk • 20 vragen",
    questions: [
      {
        prompt: "Waar zit de fovea dentis?",
        options: [
          "Op de arcus posterior",
          "Op de massa lateralis",
          "Op de arcus anterior",
          "Op het processus transversus"
        ],
        answer: 2
      },
      {
        prompt: "Wat schuift in de fovea dentis?",
        options: ["Caput radii", "Dens van axis", "Tuberculum posterius", "Processus costalis"],
        answer: 1
      },
      {
        prompt: "Hoe heet de voorkant van de ring van de atlas?",
        options: ["Arcus posterior", "Arcus anterior", "Lamina arcus", "Crista anterior"],
        answer: 1
      },
      {
        prompt: "Welk deel van de atlas draagt het gewicht van het hoofd?",
        options: ["Tuberculum anterius", "Massa lateralis", "Arcus posterior", "Foramen transversarium"],
        answer: 1
      },
      {
        prompt: "Wat loopt door het foramen transversarium?",
        options: ["Ruggenmerg", "Vertebrale arteriën", "N. phrenicus", "V. jugularis interna"],
        answer: 1
      },
      {
        prompt: "Hoe heet het kleine knobbeltje aan de achterkant van de atlas?",
        options: ["Tuberculum posterius", "Spina atlas", "Processus spinosus", "Crista dorsalis"],
        answer: 0
      },
      {
        prompt: "Wat ontbreekt bij de atlas t.o.v. andere wervels?",
        options: ["Arcus", "Processus transversus", "Corpus vertebrae", "Foramen vertebrale"],
        answer: 2
      },
      {
        prompt: "Hoe heet het gewrichtsvlak voor de condyli occipitales?",
        options: ["Facies costalis", "Facies articularis superior", "Facies articularis inferior", "Fovea cranialis"],
        answer: 1
      },
      {
        prompt: "Wat is de functie van de massa lateralis?",
        options: ["Aanhechting ribben", "Draaibeweging mogelijk maken", "Gewrichtsvlak voor schedel dragen", "Aanhechting rugspieren"],
        answer: 2
      },
      {
        prompt: "Wat is kenmerkend voor de atlas?",
        options: ["Een dikke processus spinosus", "Een dens", "Een ringvormige structuur", "Een groot corpus"],
        answer: 2
      },
      {
        prompt: "Wat ligt er direct achter de arcus anterior?",
        options: ["Tuberculum posterius", "Fovea dentis", "Facies articularis superior", "Foramen transversarium"],
        answer: 1
      },
      {
        prompt: "Hoe heet het grote gat in de atlas?",
        options: ["Foramen transversarium", "Foramen magnum", "Foramen vertebrale", "Foramen intervertebrale"],
        answer: 2
      },
      {
        prompt: "Welke structuur articuleert met de axis?",
        options: ["Facies articularis superior", "Fovea dentis", "Facies articularis inferior", "Arcus posterior"],
        answer: 2
      },
      {
        prompt: "Wat is de functie van de arcus posterior?",
        options: ["Beschermt ruggenmerg", "Verankert ribben", "Vormt draaipunt met dens", "Vormt gewricht met schedel"],
        answer: 0
      },
      {
        prompt: "Wat is de naam van het knobbeltje aan de voorzijde?",
        options: ["Tuberculum anterius", "Tuberculum laterale", "Tuberculum articulare", "Processus anterior"],
        answer: 0
      },
      {
        prompt: "De atlas laat voornamelijk welke beweging toe?",
        options: ["‘Nee’-beweging", "‘Ja’-beweging", "Lateroflexie", "Hyperextensie"],
        answer: 1
      },
      {
        prompt: "Op welke structuur rust de schedel?",
        options: ["Facies articularis inferior", "Tuberculum anterius", "Facies articularis superior", "Arcus posterior"],
        answer: 2
      },
      {
        prompt: "Wat vormt het dorsale deel van de ring?",
        options: ["Arcus anterior", "Tuberculum anterius", "Arcus posterior", "Massa lateralis"],
        answer: 2
      },
      {
        prompt: "Wat bevindt zich posterieur aan het foramen vertebrale?",
        options: ["Arcus posterior", "Dens", "Corpus vertebrae", "Massa lateralis"],
        answer: 0
      },
      {
        prompt: "Welke uitspraak klopt over de atlas?",
        options: ["Atlas heeft een corpus", "Atlas heeft geen processus transversus", "Atlas heeft een typische processus spinosus", "Atlas heeft geen corpus"],
        answer: 3
      }
    ]
  },
  {
    id: "axis",
    title: "Quiz 2 — Axis (C2)",
    level: "Moeilijk • 20 vragen",
    questions: [
      {
        prompt: "Wat is het meest kenmerkende deel van de axis?",
        options: ["Tuberculum anterius", "Dens", "Corpus vertebrae ontbreekt", "Foramen transversarium ontbreekt"],
        answer: 1
      },
      {
        prompt: "Hoe heet het puntje bovenaan de dens?",
        options: ["Crista dentis", "Apex dentis", "Tuberculum dentale", "Spina dentis"],
        answer: 1
      },
      {
        prompt: "Waar articuleert de dens mee?",
        options: ["Arcus posterior van de atlas", "Facies articularis inferior van de atlas", "Fovea dentis in de atlas", "Corpus atlantis"],
        answer: 2
      },
      {
        prompt: "Waarvoor dient de dens?",
        options: ["Voor flexie/extensie", "Voor de draaibeweging (‘nee’-beweging)", "Voor lateroflexie", "Voor stabiliteit van het sacrum"],
        answer: 1
      },
      {
        prompt: "De axis heeft een duidelijk ontwikkeld…",
        options: ["Corpus vertebrae", "Apex costalis", "Ramus vertebralis", "Tuberculum posterior"],
        answer: 0
      },
      {
        prompt: "De processus spinosus van de axis is…",
        options: ["Niet aanwezig", "Dubbel gespleten", "Zeer lang", "Glad en rond"],
        answer: 1
      },
      {
        prompt: "Waar liggen de facies articulares superiores van de axis?",
        options: ["Boven op de dens", "Lateraal van de dens", "Onder de massa lateralis", "Dorsaal van de arcus anterior"],
        answer: 1
      },
      {
        prompt: "Wat loopt door het foramen transversarium van de axis?",
        options: ["Spinale zenuwen", "Vena cava", "A. vertebralis", "Slagaders naar het sacrum"],
        answer: 2
      },
      {
        prompt: "Waar bevindt zich het corpus vertebrae van de axis?",
        options: ["Het is afwezig", "Onder de dens", "Op de arcus posterior", "Onder de fovea dentis"],
        answer: 1
      },
      {
        prompt: "Welke beweging gebeurt tussen atlas en axis?",
        options: ["‘Ja’-beweging", "Lateroflexie", "‘Nee’-beweging", "Extensie"],
        answer: 2
      },
      {
        prompt: "Welk deel van de axis articuleert met de atlas?",
        options: ["Processus spinosus", "Facies articularis superior", "Arcus posterior", "Apex dentis"],
        answer: 1
      },
      {
        prompt: "Waar ligt de dens t.o.v. de axis?",
        options: ["Ventraal", "Dorsaal", "Lateraal", "Caudaal"],
        answer: 0
      },
      {
        prompt: "Wat ligt dorsaal van het corpus van de axis?",
        options: ["Dens", "Foramen vertebrale", "Processus spinosus", "Processus articularis inferior"],
        answer: 1
      },
      {
        prompt: "Hoe heet het botdeel waar ruggenmerg doorheen loopt?",
        options: ["Foramen dentis", "Foramen transversarium", "Foramen articulare", "Foramen vertebrale"],
        answer: 3
      },
      {
        prompt: "Welke structuur ligt direct achter de dens?",
        options: ["Ligamenten", "Ruggenmerg", "Arcus posterior atlas", "Fovea dentis"],
        answer: 2
      },
      {
        prompt: "Wat zit er op de apex dentis?",
        options: ["Niets, het is een punt", "Een gewrichtsvlak", "Aanhechting voor ribben", "Een peesgroeve"],
        answer: 0
      },
      {
        prompt: "De processus articularis inferior staat in verbinding met…",
        options: ["Axis", "Atlas", "C3 (cervicale wervel)", "Sacrum"],
        answer: 2
      },
      {
        prompt: "De axis maakt deel uit van welke groep wervels?",
        options: ["Thoracaal", "Sacraal", "Cervicaal", "Lumbaal"],
        answer: 2
      },
      {
        prompt: "Wat ligt er lateraal op de axis?",
        options: ["Processus transversus", "Dens", "Apex dentis", "Tuberculum transversum"],
        answer: 0
      },
      {
        prompt: "Wat is de functie van de processus spinosus bij de axis?",
        options: ["Draagt schedel", "Geeft aanhechting aan spieren", "Articuleert met atlas", "Maakt rotatie mogelijk"],
        answer: 1
      }
    ]
  },
  {
    id: "cervicaal",
    title: "Quiz 3 — Cervicale wervels (C3–C7)",
    level: "Moeilijk • 20 vragen",
    questions: [
      {
        prompt: "Wat is het typische kenmerk van cervicale wervels?",
        options: ["Geen foramen transversarium", "Foramen transversarium aanwezig", "Ze hebben een dens", "Ze hebben zeer lange spinosi"],
        answer: 1
      },
      {
        prompt: "Welke vorm heeft het corpus van een cervicale wervel?",
        options: ["Rond", "Driehoekig", "Rechthoekig", "Hartvormig"],
        answer: 1
      },
      {
        prompt: "Hoe ziet het foramen vertebrale eruit bij cervicale wervels?",
        options: ["Rond", "Driehoekig", "Ovaal", "Klein en smal"],
        answer: 1
      },
      {
        prompt: "Wat loopt door het foramen transversarium?",
        options: ["Ruggenmerg", "A. vertebralis", "N. vagus", "V. cava superior"],
        answer: 1
      },
      {
        prompt: "Wat is kenmerkend voor de processus spinosus bij C3–C6?",
        options: ["Ze zijn gespleten", "Ze zijn niet aanwezig", "Ze zijn massief en rond", "Ze wijzen recht naar boven"],
        answer: 0
      },
      {
        prompt: "Wat is het belangrijkste verschil tussen C7 en andere cervicale wervels?",
        options: ["C7 heeft geen corpus", "C7 heeft geen foramen transversarium", "C7 heeft een zeer prominente processus spinosus", "C7 heeft een dens"],
        answer: 2
      },
      {
        prompt: "Hoe noemt men de wervel C7?",
        options: ["Atlas", "Axis", "Vertebra prominens", "Cervicale tuberculum"],
        answer: 2
      },
      {
        prompt: "Wat is de functie van de processus transversus?",
        options: ["Beschermen van ruggenmerg", "Aanhechting van spieren", "Draaipunt van rotatie", "Contactvlak met ribben"],
        answer: 1
      },
      {
        prompt: "Hoe staat de processus spinosus t.o.v. de wervelboog?",
        options: ["Ventraal", "Lateraal", "Dorsaal", "Craniaal"],
        answer: 2
      },
      {
        prompt: "Wat ligt er direct achter het corpus vertebrae?",
        options: ["Processus transversus", "Foramen transversarium", "Arcus vertebrae", "Processus articularis superior"],
        answer: 2
      },
      {
        prompt: "Welke structuur vormt het gewricht met bovenliggende wervel?",
        options: ["Facies articularis superior", "Facies costalis", "Fovea ribalis", "Tuberculum articulare"],
        answer: 0
      },
      {
        prompt: "Hoe ziet de processus transversus eruit in cervicale wervels?",
        options: ["Verdikt en naar boven gericht", "Bevat een opening (foramen)", "Zeer kort", "Naar mediaal gericht"],
        answer: 1
      },
      {
        prompt: "Welke bewegingen zijn het meest mogelijk in de cervicale regio?",
        options: ["Rotatie", "Flexie-extensie + rotatie", "Alleen extensie", "Enkel lateroflexie"],
        answer: 1
      },
      {
        prompt: "Wat ligt er in het foramen vertebrale?",
        options: ["Longslagaders", "Ruggenmerg", "Slokdarm", "Luchtpijp"],
        answer: 1
      },
      {
        prompt: "Waarvoor dient het corpus vertebrae vooral?",
        options: ["Bescherming", "Aanhechting spieren", "Dragende functie", "Rotatiefunctie"],
        answer: 2
      },
      {
        prompt: "Welke structuur hoort NIET bij cervicale wervels?",
        options: ["Foramen transversarium", "Dens", "Processus spinosus", "Corpus vertebrae"],
        answer: 1
      },
      {
        prompt: "Hoe staan de gewrichtsoppervlakken bij cervicale wervels?",
        options: ["Heel vlak", "Heel steil", "Loodrecht", "Horizontaal"],
        answer: 0
      },
      {
        prompt: "Welke wervel is het meest beweeglijk?",
        options: ["Sacraal", "Lumbaal", "Thoracaal", "Cervicaal"],
        answer: 3
      },
      {
        prompt: "Hoe heet het deel tussen corpus en processus spinosus?",
        options: ["Arcus vertebrae", "Tuberculum posterior", "Ramus dorsalis", "Fovea arcus"],
        answer: 0
      },
      {
        prompt: "Waar zit de processus articularis inferior?",
        options: ["Boven de massa lateralis", "Onder de processus articularis superior", "Op het corpus", "In het foramen vertebrale"],
        answer: 1
      }
    ]
  },
  {
    id: "thoracaal",
    title: "Quiz 4 — Thoracale wervels (T1–T12)",
    level: "Moeilijk • 20 vragen",
    questions: [
      {
        prompt: "Wat is het typische kenmerk van thoracale wervels?",
        options: ["Ze hebben foramen transversarium", "Ze articuleren met ribben", "Ze hebben een dens", "Ze hebben geen processus spinosus"],
        answer: 1
      },
      {
        prompt: "Welke vorm heeft het foramen vertebrale bij thoracale wervels?",
        options: ["Driehoekig", "Rond", "Rechthoekig", "Hartvormig"],
        answer: 0
      },
      {
        prompt: "Wat is de vorm van het corpus bij een thoracale wervel?",
        options: ["Rechthoekig", "Klein en rond", "Hartvormig", "Zeer plat"],
        answer: 2
      },
      {
        prompt: "Waarvoor dient de fovea costalis op de wervel?",
        options: ["Bevestiging van ligamenten", "Aanhechting van spieren", "Gewrichtsvlak voor ribben", "Doorlaat voor bloedvaten"],
        answer: 2
      },
      {
        prompt: "Waar bevindt de fovea costalis superior/inferior zich?",
        options: ["Op het corpus vertebrae", "Op de arcus", "Op de processus transversus", "Op de processus spinosus"],
        answer: 0
      },
      {
        prompt: "Wat ligt er op de processus transversus van een thoracale wervel?",
        options: ["Fovea costalis transversalis", "Fovea dentis", "Fovea capitis", "Fovea transversaria"],
        answer: 0
      },
      {
        prompt: "Hoe ziet de processus spinosus eruit bij thoracale wervels?",
        options: ["Kort en gespleten", "Lang en naar caudaal gericht", "Helemaal afwezig", "Zeer horizontaal"],
        answer: 1
      },
      {
        prompt: "Wat is de oriëntatie van de gewrichtsvlakken bij thoracaal?",
        options: ["Heel vlak", "Steil en gehoekt", "Loodrecht", "Naar boven gedraaid"],
        answer: 1
      },
      {
        prompt: "Welke beweging is in thoracale wervels het meest mogelijk?",
        options: ["Flexie-extensie", "Rotatie", "Circumductie", "Hyperextensie"],
        answer: 1
      },
      {
        prompt: "Wat ligt er achter het corpus van de wervel?",
        options: ["Processus transversus", "Arcus vertebrae", "Foramen transversarium", "Discus articularis"],
        answer: 1
      },
      {
        prompt: "Welke structuur articuleert met het tuberculum costae van de rib?",
        options: ["Corpus", "Processus transversus", "Lamina", "Processus spinosus"],
        answer: 1
      },
      {
        prompt: "Wat vormt samen de arcus vertebrae?",
        options: ["Lamina + pediculi", "Corpus + processus spinosus", "Discus + foramen", "Rib + tuberculum"],
        answer: 0
      },
      {
        prompt: "Met welke wervelkolomregio vormt de thoracale wervel een kyfose?",
        options: ["Lumbaal", "Cervicaal", "Sacraal", "Thoracaal zelf"],
        answer: 3
      },
      {
        prompt: "Het corpus van thoracale wervels is…",
        options: ["Slecht ontwikkeld", "Erg klein", "Meer ontwikkeld dan cervicaal", "Minder ontwikkeld dan lumbaal"],
        answer: 2
      },
      {
        prompt: "De rib articuleert met…",
        options: ["Alleen corpus", "Alleen processus transversus", "Corpus én processus transversus", "Alleen lamina"],
        answer: 2
      },
      {
        prompt: "Welke wervelregio is het minst beweeglijk?",
        options: ["Lumbaal", "Thoracaal", "Cervicaal", "Sacraal"],
        answer: 1
      },
      {
        prompt: "Hoe ziet de processus transversus eruit?",
        options: ["Kort en dun", "Groot met fovea costalis", "Verdikt en naar craniaal gericht", "Naar mediaal gericht"],
        answer: 1
      },
      {
        prompt: "Wat is de belangrijkste reden voor beperkte beweging in thoracaal?",
        options: ["Discus is te groot", "De ribben beperken beweging", "De processus spinosus is te kort", "De wervel is te klein"],
        answer: 1
      },
      {
        prompt: "Waar bevindt zich het gewrichtsvlak voor het caput costae?",
        options: ["Op lamina", "Op corpus vertebrae", "Op het foramen", "Op de spinosus"],
        answer: 1
      },
      {
        prompt: "Wat is het meest herkenbare kenmerk van thoracale wervels?",
        options: ["Fovea costalis", "Dens", "Gespleten spinosus", "Groot foramen transversarium"],
        answer: 0
      }
    ]
  },
  {
    id: "lumbaal",
    title: "Quiz 5 — Lumbale wervels (L1–L5)",
    level: "Moeilijk • 20 vragen",
    questions: [
      {
        prompt: "Wat is het meest herkenbare kenmerk van lumbale wervels?",
        options: ["Een dens", "Groot en massief corpus", "Fovea costalis", "Foramen transversarium"],
        answer: 1
      },
      {
        prompt: "Hoe ziet het corpus vertebrae eruit bij een lumbale wervel?",
        options: ["Driehoekig", "Hartvormig", "Boonvormig", "Rond"],
        answer: 2
      },
      {
        prompt: "Waarom is het corpus zo groot?",
        options: ["Voor rotatie", "Om ribben te dragen", "Om gewicht te dragen", "Voor lateroflexie"],
        answer: 2
      },
      {
        prompt: "Hoe ziet het foramen vertebrale eruit bij lumbale wervels?",
        options: ["Cirkelvormig", "Driehoekig", "Zeer klein", "Onderbroken"],
        answer: 1
      },
      {
        prompt: "Hoe ziet de processus spinosus eruit?",
        options: ["Lang en caudaal gericht", "Kort en stomp", "Gespleten", "Niet aanwezig"],
        answer: 1
      },
      {
        prompt: "Wat is een typisch kenmerk van de processus transversus in lumbaal?",
        options: ["Zeer groot", "Horizontaal gericht", "Met foramen transversarium", "Naar craniaal gericht"],
        answer: 1
      },
      {
        prompt: "Wat is de oriëntatie van de gewrichtsvlakken bij lumbaal?",
        options: ["Horizontaal", "Verticaler/loodrecht", "Steil en gehoekt", "Plat en ovaal"],
        answer: 1
      },
      {
        prompt: "Welke beweging is het minst mogelijk in de lumbale regio?",
        options: ["Flexie", "Extensie", "Lateroflexie", "Rotatie"],
        answer: 3
      },
      {
        prompt: "Wat bevindt zich tussen twee corpussen van lumbale wervels?",
        options: ["Geen schijf", "Tussenwervelschijf", "Ligament transversum", "Fovea lumbalis"],
        answer: 1
      },
      {
        prompt: "Wat is een functie van de lumbale wervelkolom?",
        options: ["Rotatie zoals in cervicale regio", "Draagt het bovenlichaam", "Verbinding met ribben", "Ondersteunt de schedel"],
        answer: 1
      },
      {
        prompt: "Hoe ziet de arcus vertebrae eruit in een lumbale wervel?",
        options: ["Heel dik en stevig", "Dun en lang", "Geen arcus aanwezig", "Zoals cervicaal"],
        answer: 0
      },
      {
        prompt: "Wat vormt het foramen vertebrale?",
        options: ["Corpus + spieraanhechtingen", "Arcus + corpus", "Tuberculum + processus", "Costale koppelingen"],
        answer: 1
      },
      {
        prompt: "Wat ligt er dorsaal van het corpus vertebrae?",
        options: ["Discus", "Arcus vertebrae", "Ribben", "Processus transversus"],
        answer: 1
      },
      {
        prompt: "Hoe heet het uitsteeksel dat achteraan zit?",
        options: ["Processus articularis", "Arcus posterior", "Processus spinosus", "Manubrium"],
        answer: 2
      },
      {
        prompt: "Waarom is rotatie beperkt in lumbaal?",
        options: ["Door ribben", "Door hoge processus spinosus", "Door oriëntatie gewrichtsvlakken", "Door dens"],
        answer: 2
      },
      {
        prompt: "Welke wervelregio is het meest stabiel?",
        options: ["Cervicaal", "Thoracaal", "Lumbaal", "Sacraal"],
        answer: 2
      },
      {
        prompt: "Hoe heten de gewrichtsuitsteeksels?",
        options: ["Processus dentales", "Processus articularis", "Processus obliqui", "Tuberculum anterior"],
        answer: 1
      },
      {
        prompt: "Hoe ziet de processus transversus eruit t.o.v. cervicale wervels?",
        options: ["Groter en zonder foramen", "Kleiner en met foramen", "Gespleten", "Niet aanwezig"],
        answer: 0
      },
      {
        prompt: "Wat ligt er in het foramen vertebrale?",
        options: ["Nieren", "Ruggenmerg", "Longen", "Slokdarm"],
        answer: 1
      },
      {
        prompt: "Waarvoor dient de lumbale lordose?",
        options: ["Voor bescherming van ribben", "Voor balans en schokabsorptie", "Om rotaties mogelijk te maken", "Om het sacrum te verbinden"],
        answer: 1
      }
    ]
  }
];

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
