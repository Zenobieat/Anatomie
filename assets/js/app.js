const quizData = [
  {
    id: "atlas",
    emoji: "✅",
    title: "Quiz 1 — Atlas (C1)",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Welke structuur ligt ventraal op de atlas?",
        options: [
          "Tuberculum posterius",
          "Massa lateralis",
          "Fovea dentis",
          "Sulcus arteriae vertebralis"
        ],
        answer: 2
      },
      {
        prompt: "Welke structuur articuleert rechtstreeks met de dens van de axis?",
        options: [
          "Facies articularis superior",
          "Fovea dentis",
          "Tuberculum anterius",
          "Facies articularis inferior"
        ],
        answer: 1
      },
      {
        prompt: "Welke uitspraak is correct over de massa lateralis?",
        options: [
          "Ligt posterieur en dient als aanhechting voor de ligamenta flava",
          "Draagt het gewicht van de schedel op de atlas",
          "Is een structuur op de processus spinosus",
          "Is alleen zichtbaar aan de dorsale zijde"
        ],
        answer: 1
      },
      {
        prompt: "Welke structuur loopt op de achterzijde van de arcus posterior?",
        options: [
          "Facies articularis superior",
          "Sulcus arteriae vertebralis",
          "Tuberculum anterius",
          "Densdrukvlak"
        ],
        answer: 1
      },
      {
        prompt: "Waar bevinden de foramina transversaria zich relatief tot het corpus?",
        options: ["Mediaal", "Lateraal", "Ventraal", "Dorsaal"],
        answer: 1
      },
      {
        prompt:
          "Welk gewricht wordt o.a. gevormd door de facies articularis superior van de atlas?",
        options: [
          "Articulatio atlantoaxialis mediana",
          "Articulatio atlantooccipitalis",
          "Articulatio zygapophysialis",
          "Articulatio uncovertebralis"
        ],
        answer: 1
      },
      {
        prompt: "Welk kenmerk is uniek voor C1 vergeleken met andere cervicale wervels?",
        options: [
          "Processus transversus",
          "Processus spinosus",
          "Ringvormige bouw zonder corpus",
          "Groot corpus"
        ],
        answer: 2
      },
      {
        prompt: "Welke structuur ligt het meest dorsaal op de atlas?",
        options: [
          "Tuberculum posterius",
          "Fovea dentis",
          "Arcus anterior",
          "Facies articularis superior"
        ],
        answer: 0
      }
    ]
  },
  {
    id: "axis",
    emoji: "✅",
    title: "Quiz 2 — Axis (C2)",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Welke structuur ligt ventraal op de axis?",
        options: ["Dens", "Lamina", "Processus spinosus", "Arcus posterior"],
        answer: 0
      },
      {
        prompt: "Wat is de functie van de dens?",
        options: [
          "Flexiebeweging mogelijk maken",
          "Lateroflexie beperken",
          "Rotatie tussen C1 en C2 mogelijk maken",
          "Bescherming van ruggenmerg"
        ],
        answer: 2
      },
      {
        prompt: "Welke structuur articuleert met de fovea dentis van C1?",
        options: [
          "Apex dentis",
          "Facies articularis anterior dentis",
          "Foramen transversarium",
          "Facies articularis inferior"
        ],
        answer: 1
      },
      {
        prompt: "Waar ligt de apex dentis?",
        options: [
          "Caudaal op de dens",
          "Lateraal op de dens",
          "Craniaal op de dens",
          "Ventraal van de dens"
        ],
        answer: 2
      },
      {
        prompt: "Wat bevindt zich dorsaal van de dens?",
        options: [
          "Ligamentum transversum atlantis",
          "Facies articularis anterior",
          "Arcus anterior atlantis",
          "Processus transversus"
        ],
        answer: 0
      },
      {
        prompt: "Welke structuur is typisch voor de axis vergeleken met andere cervicale wervels?",
        options: ["Groot corpus", "Dens", "Tuberculum anterius", "Foramen transversarium"],
        answer: 1
      },
      {
        prompt: "Welke structuur ligt het meest dorsaal op de axis?",
        options: [
          "Lamina arcus vertebrae",
          "Dens",
          "Corpus vertebrae",
          "Facies articularis anterior"
        ],
        answer: 0
      },
      {
        prompt: "De facies articularis inferior van de axis behoort tot:",
        options: [
          "Het bovenste thoracale gewricht",
          "De articulatie met de atlas",
          "De articulatie met C3",
          "De articulatie met schedelbasis"
        ],
        answer: 2
      }
    ]
  },
  {
    id: "cervicaal",
    emoji: "🟦",
    title: "Quiz 3 — Cervicale wervels (C3–C7)",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt:
          "Welke structuur ligt ventraal op een typische cervicale wervel (C3–C7)?",
        options: [
          "Processus spinosus",
          "Corpus vertebrae",
          "Lamina arcus vertebrae",
          "Foramen transversarium"
        ],
        answer: 1
      },
      {
        prompt: "Wat is typisch voor cervicale processus spinosi?",
        options: [
          "Ze zijn stomp en niet gespleten",
          "Ze zijn lang en horizontaal",
          "Ze zijn kort en vaak gespleten",
          "Ze articuleren met ribben"
        ],
        answer: 2
      },
      {
        prompt: "Welk kenmerk onderscheidt cervicale wervels van alle andere wervels?",
        options: [
          "Foramen vertebrale",
          "Foramen transversarium",
          "Groot corpus",
          "Sterke processus spinosi"
        ],
        answer: 1
      },
      {
        prompt: "Welke structuur ligt het meest lateraal?",
        options: [
          "Processus costalis",
          "Processus articularis superior",
          "Corpus vertebrae",
          "Processus transversus"
        ],
        answer: 3
      },
      {
        prompt: "Wat is de functie van de processus uncinatus?",
        options: [
          "Beschermt het ruggenmerg",
          "Maakt rotatie tussen C1–C2 mogelijk",
          "Stabiliseert wervels tegen laterale verschuiving",
          "Verbindt ribben met wervel"
        ],
        answer: 2
      },
      {
        prompt: "Welke structuur vormt het zygapophysair gewricht?",
        options: [
          "Corpus vertebrae",
          "Processus spinosus",
          "Facies articularis superior/inferior",
          "Processus transversarius"
        ],
        answer: 2
      },
      {
        prompt: "Wat ligt dorsaal van het corpus?",
        options: ["Lamina", "Processus transversus", "Foramen transversarium", "Dens"],
        answer: 0
      },
      {
        prompt: "Wat ligt ventraal van het foramen vertebrale?",
        options: [
          "Arcus vertebrae",
          "Corpus vertebrae",
          "Processus spinosus",
          "Processus articularis"
        ],
        answer: 1
      }
    ]
  },
  {
    id: "thoracaal",
    emoji: "🟧",
    title: "Quiz 4 — Thoracale wervels (T1–T12)",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Welk kenmerk is typisch voor thoracale wervels?",
        options: [
          "Gedeelde processus spinosus",
          "Foveae costales",
          "Groot foramen transversarium",
          "Dens"
        ],
        answer: 1
      },
      {
        prompt: "Wat ligt dorsaal op een thoracale wervel?",
        options: [
          "Corpus",
          "Processus spinosus",
          "Fovea costalis superior",
          "Facies articularis capitis costae"
        ],
        answer: 1
      },
      {
        prompt: "Wat articuleert met het tuberculum costae?",
        options: [
          "Corpus vertebrae",
          "Processus articularis",
          "Processus transversus",
          "Processus spinosus"
        ],
        answer: 2
      },
      {
        prompt: "Thoracale wervels zijn beperkt in flexie/extensie door:",
        options: [
          "Slechte bloedvoorziening",
          "Ribben + steile facetoriëntatie",
          "Groot foramen vertebrale",
          "Afwezigheid van rond corpus"
        ],
        answer: 1
      },
      {
        prompt: "Welke structuur ligt ventraal?",
        options: ["Lamina", "Arcus", "Processus spinosus", "Corpus"],
        answer: 3
      },
      {
        prompt: "Welke wervels hebben demi-facetten?",
        options: ["Cervicale", "Thoracale", "Lumbale", "Sacrale"],
        answer: 1
      },
      {
        prompt: "Wat ligt het meest lateraal?",
        options: ["Corpus", "Processus spinosus", "Processus transversus", "Lamina"],
        answer: 2
      },
      {
        prompt: "Wat is de vorm van het foramen vertebrale in thoracale wervels?",
        options: ["Rond", "Driehoekig", "Ovaal", "Hartvormig"],
        answer: 1
      }
    ]
  },
  {
    id: "lumbaal",
    emoji: "🟩",
    title: "Quiz 5 — Lumbale wervels (L1–L5)",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Welke structuur ligt ventraal op een lumbale wervel?",
        options: ["Lamina", "Processus spinosus", "Corpus", "Processus transversus"],
        answer: 2
      },
      {
        prompt: "Wat is typisch voor lumbale wervels?",
        options: ["Groot corpus", "Foramen transversarium", "Ribgewrichten", "Gespleten doornuitsteeksel"],
        answer: 0
      },
      {
        prompt: "De processus articularis staan in lumbaal vooral:",
        options: ["Horizontaal", "Coronaal", "Saggitaal", "Transversaal"],
        answer: 2
      },
      {
        prompt: "Wat ligt dorsaal van het corpus?",
        options: ["Processus costalis", "Arcus vertebrae", "Fovea dentis", "Processus transversus"],
        answer: 1
      },
      {
        prompt: "De processus spinosus van lumbale wervels zijn:",
        options: ["Puntig en gespleten", "Kort en stomp", "Lang en horizontaal", "Driehoekig"],
        answer: 1
      },
      {
        prompt: "Welk gewricht wordt gevormd door de lumbale facetten?",
        options: [
          "Articulatio costotransversaria",
          "Articulatio zygapophysialis",
          "Articulatio atlantoaxialis",
          "Articulatio uncovertebralis"
        ],
        answer: 1
      },
      {
        prompt: "De incisura vertebralis superior en inferior vormen samen:",
        options: ["Ligament", "Tussenwervelforamem", "Tussenwervelschijf", "Facetgewricht"],
        answer: 1
      },
      {
        prompt: "Wat ligt het meest lateraal?",
        options: ["Lamina", "Corpus", "Processus transversus", "Arcus"],
        answer: 2
      }
    ]
  },
  {
    id: "sacrum",
    emoji: "🔶",
    title: "Quiz 6 — Os sacrum",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Welke structuur ligt ventraal op het sacrum?",
        options: ["Crista sacralis mediana", "Facies pelvina", "Canalis sacralis", "Hiatus sacralis"],
        answer: 1
      },
      {
        prompt: "Welke structuren zijn overblijfselen van corpora van vergroeide wervels?",
        options: ["Lineae transversae", "Cornua sacralia", "Crista sacralis lateralis", "Foramina sacralia posteriora"],
        answer: 0
      },
      {
        prompt: "Waar bevindt zich de facies auricularis?",
        options: ["Lateraal", "Ventraal", "Dorsaal", "Mediaal"],
        answer: 0
      },
      {
        prompt: "Welke structuur vormt de dorsale kam van het sacrum?",
        options: ["Crista sacralis lateralis", "Crista sacralis mediana", "Crista sacralis intermedia", "Linea transversa"],
        answer: 1
      },
      {
        prompt: "Wat ligt het meest dorsaal?",
        options: ["Foramina sacralia anteriora", "Facies pelvina", "Crista sacralis mediana", "Ala ossis sacri"],
        answer: 2
      },
      {
        prompt: "Wat is de functie van het promontorium?",
        options: [
          "Aanhechting voor ligamenten",
          "Articulatie met L5",
          "Doorlaat voor zenuwen",
          "Aanhechting van spieren"
        ],
        answer: 1
      },
      {
        prompt: "Wat is de uitgang van het canalis sacralis?",
        options: ["Cornua sacralia", "Hiatus sacralis", "Crista sacralis mediana", "Ala sacri"],
        answer: 1
      },
      {
        prompt: "Waar liggen de foramina sacralia posteriora?",
        options: ["Dorsaal", "Ventraal", "Lateraal", "Mediaal"],
        answer: 0
      }
    ]
  },
  {
    id: "costae",
    emoji: "🔷",
    title: "Quiz 7 — Costae (ribben)",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Welke structuur ligt op de ventrale zijde van een rib?",
        options: ["Sulcus costae", "Caput costae", "Corpus costae", "Tuberculum costae"],
        answer: 0
      },
      {
        prompt: "Het tuberculum costae articuleert met:",
        options: ["Processus transversus", "Corpus vertebrae", "Facies articularis capitis costae", "Incisura costalis"],
        answer: 0
      },
      {
        prompt: "Welke structuur is direct mediaal gelegen?",
        options: ["Angulus costae", "Caput costae", "Tuberculum costae", "Corpus costae"],
        answer: 1
      },
      {
        prompt: "Welk onderdeel bevat de facies articularis capitis costae?",
        options: ["Tuberculum costae", "Caput costae", "Angulus costae", "Collum costae"],
        answer: 1
      },
      {
        prompt: "Wat ligt het meest dorsaal op een rib?",
        options: ["Corpus costae", "Caput costae", "Costale kraakbeen", "Angulus costae"],
        answer: 1
      },
      {
        prompt: "Welke structuur ligt tussen caput en corpus?",
        options: ["Collum costae", "Sulcus costae", "Tuberculum costae", "Processus uncinatus"],
        answer: 0
      },
      {
        prompt: "Aan welke zijde ligt de sulcus costae?",
        options: ["Bovenrand rib", "Onderzijde rib (inferieur)", "Dorsaal", "Mediaal"],
        answer: 1
      },
      {
        prompt: "Welke ribben hebben GEEN tuberculum costae?",
        options: ["1 en 2", "11 en 12", "6 en 7", "8 en 9"],
        answer: 1
      }
    ]
  },
  {
    id: "sternum",
    emoji: "🔶",
    title: "Quiz 8 — Sternum",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Welke structuur ligt het meest cranio-ventraal op het sternum?",
        options: ["Corpus sterni", "Manubrium sterni", "Incisura jugularis", "Processus xiphoideus"],
        answer: 2
      },
      {
        prompt: "Welke structuur articuleert met de clavicula?",
        options: ["Incisura costalis", "Incisura jugularis", "Incisura clavicularis", "Angulus sterni"],
        answer: 2
      },
      {
        prompt: "Wat ligt caudaal op het sternum?",
        options: ["Manubrium", "Corpus", "Processus xiphoideus", "Incisura clavicularis"],
        answer: 2
      },
      {
        prompt: "De incisurae costales bevinden zich:",
        options: ["Op manubrium en corpus", "Enkel op het xiphoïd", "Enkel op manubrium", "Enkel op corpus"],
        answer: 0
      },
      {
        prompt: "Wat markeert de overgang tussen manubrium en corpus?",
        options: ["Incisura jugularis", "Processus xiphoideus", "Angulus sterni", "Incisura clavicularis"],
        answer: 2
      },
      {
        prompt: "Wat ligt het meest dorsaal t.o.v. de rest van het sternum?",
        options: ["Processus xiphoideus", "Corpus", "Manubrium", "Niets – sternum is volledig ventraal"],
        answer: 3
      },
      {
        prompt: "Welke structuur articuleert met rib 2?",
        options: ["Incisura jugularis", "Incisura costalis superior manubrii", "Angulus sterni", "Incisura costalis inferior xiphoidei"],
        answer: 2
      },
      {
        prompt: "Het sternum is een voorbeeld van welk type bot?",
        options: ["Kort bot", "Plat bot", "Lang bot", "Sesamoïd bot"],
        answer: 1
      }
    ]
  },
  {
    id: "clavicula",
    emoji: "🟦",
    title: "Quiz 9 — Clavicula",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Welke zijde van de clavicula is ventraal voelbaar en goed zichtbaar?",
        options: ["Facies acromialis", "Facies sternalis", "Corpus claviculae", "Tuberculum conoideum"],
        answer: 2
      },
      {
        prompt: "Wat ligt aan de inferieure zijde van de clavicula?",
        options: ["Tuberculum conoideum", "Acromiaal uiteinde", "Sternaalkraag", "Facies superior claviculae"],
        answer: 0
      },
      {
        prompt: "Welke structuur articuleert met het sternum?",
        options: ["Extremitas acromialis", "Extremitas sternalis", "Tuberculum trapezoideum", "Linea trapezoidea"],
        answer: 1
      },
      {
        prompt: "Wat ligt lateraal op de clavicula?",
        options: ["Extremitas acromialis", "Extremitas sternalis", "Tuberculum conoideum", "Impressio ligamenti costoclavicularis"],
        answer: 0
      },
      {
        prompt: "Wat ligt posterieur op de clavicula?",
        options: ["Tuberculum conoideum", "Voorvlak clavicula", "Acromiaal facet", "Sternaalkant"],
        answer: 0
      },
      {
        prompt: "Wat is NIET waar over de clavicula?",
        options: [
          "Het is een plat bot",
          "Het is het enige bot dat horizontaal ligt",
          "Het articuleert met scapula en sternum",
          "Het breekt vaak in het midden"
        ],
        answer: 0
      },
      {
        prompt: "De inferieure ribband (lig. costoclaviculare) hecht aan op:",
        options: ["Acromiale zijde", "Sternalis zijde", "Impressio ligamenti costoclavicularis", "Linea trapezoidea"],
        answer: 2
      },
      {
        prompt: "Wat ligt ventraal?",
        options: ["Tuberculum conoideum", "Corpus claviculae", "Groeve voor subclavius", "Facies articularis acromialis"],
        answer: 1
      }
    ]
  },
  {
    id: "scapula",
    emoji: "🟧",
    title: "Quiz 10 — Scapula",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Wat ligt op de dorsale zijde van de scapula?",
        options: ["Fossa subscapularis", "Processus coracoideus", "Spina scapulae", "Facies costalis"],
        answer: 2
      },
      {
        prompt: "Welke structuur ligt ventraal?",
        options: ["Fossa infraspinata", "Acromion", "Fossa subscapularis", "Spina scapula"],
        answer: 2
      },
      {
        prompt: "Wat is de meest laterale structuur?",
        options: ["Acromion", "Margo medialis", "Angulus inferior", "Colum scapulae"],
        answer: 0
      },
      {
        prompt: "Wat articuleert met de humerus?",
        options: ["Processus coracoideus", "Acromion", "Cavitas glenoidalis", "Margo lateralis"],
        answer: 2
      },
      {
        prompt: "Waar ligt het tuberculum supraglenoidale?",
        options: ["Boven cavitas glenoidalis", "Onder cavitas glenoidalis", "Op margo medialis", "Op fossa infraspinata"],
        answer: 0
      },
      {
        prompt: "Wat ligt inferieur op de scapula?",
        options: ["Angulus superior", "Angulus inferior", "Fossa supraspinata", "Processus coracoideus"],
        answer: 1
      },
      {
        prompt: "Wat ligt aan de laterale hoek van de scapula?",
        options: ["Cavitas glenoidalis", "Angulus superior", "Spina scapula", "Fossa supraspinata"],
        answer: 0
      },
      {
        prompt: "Waar bevindt zich de incisura scapulae?",
        options: ["Aan de superior border", "Aan de inferior border", "Aan de laterale border", "In de fossa subscapularis"],
        answer: 0
      }
    ]
  },
  {
    id: "humerus",
    emoji: "🟩",
    title: "Quiz 11 — Humerus",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Welke structuur ligt ventraal?",
        options: ["Fossa olecrani", "Tuberculum majus", "Fossa radialis", "Tuberositas teres minor"],
        answer: 2
      },
      {
        prompt: "Wat ligt lateraal op de humerus?",
        options: ["Tuberculum minus", "Tuberculum majus", "Caput humeri", "Fossa olecrani"],
        answer: 1
      },
      {
        prompt: "Wat ligt posterieur?",
        options: ["Sulcus intertubercularis", "Fossa radialis", "Fossa coronoidea", "Fossa olecrani"],
        answer: 3
      },
      {
        prompt: "De tuberositas deltoidea bevindt zich:",
        options: ["Mediaal", "Anterolateraal", "Anteromediaal", "Posterior"],
        answer: 1
      },
      {
        prompt: "Wat ligt distaal aan de mediale zijde?",
        options: ["Capitulum humeri", "Trochlea humeri", "Tuberculum majus", "Facies posterior"],
        answer: 1
      },
      {
        prompt: "Wat articuleert met de radius?",
        options: ["Trochlea", "Fossa coronoidea", "Capitulum", "Fossa olecrani"],
        answer: 2
      },
      {
        prompt: "Wat ligt tussen tuberculum majus en minus?",
        options: ["Fossa proximale", "Crista lateralis humeri", "Sulcus intertubercularis", "Collum chirurgicum"],
        answer: 2
      },
      {
        prompt: "Wat vormt de aanhechting van m. pectoralis major?",
        options: ["Crista tuberculi majoris", "Crista tuberculi minoris", "Tuberositas deltoidea", "Sulcus condylaris"],
        answer: 0
      }
    ]
  },
  {
    id: "radius",
    emoji: "🟦",
    title: "Quiz 12 — Radius",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Welke zijde van de radius is lateraal?",
        options: ["De zijde van de ulna", "De duimzijde", "De posterieure zijde", "De mediale zijde"],
        answer: 1
      },
      {
        prompt: "Wat ligt aan de proximale radius?",
        options: ["Incisura ulnaris", "Fovea capitis radii", "Processus styloideus radii", "Facies articularis carpalis"],
        answer: 1
      },
      {
        prompt: "Wat ligt ventraal?",
        options: ["Tuberositas radii", "Sulcus extensorius", "Dorsale tuberkel", "Incisura ulnaris"],
        answer: 0
      },
      {
        prompt: "Wat articuleert met de capitulum humeri?",
        options: ["Circumferentia articularis", "Fovea capitis radii", "Tuberositas radii", "Processus styloideus radii"],
        answer: 1
      },
      {
        prompt: "Wat ligt aan de distale radius?",
        options: ["Fovea capitis", "Tuberositas radii", "Processus styloideus radii", "Collum radii"],
        answer: 2
      },
      {
        prompt: "Wat ligt mediaal op de distale radius?",
        options: ["Dorsale tuberkel", "Incisura ulnaris", "Fovea radialis", "Facies lateralis"],
        answer: 1
      },
      {
        prompt: "Welke structuur ligt dorsaal?",
        options: ["Tuberositas radii", "Sulci tendinum extensorum", "Circumferentia articularis", "Facies articularis carpalis"],
        answer: 1
      },
      {
        prompt: "Met welke carpale articuleert de radius direct?",
        options: ["Capitatum", "Scaphoideum + lunatum", "Pisiforme", "Hamatum"],
        answer: 1
      }
    ]
  },
  {
    id: "ulna",
    emoji: "🟧",
    title: "Quiz 13 — Ulna",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Wat ligt proximocaudaal op de ulna?",
        options: ["Olecranon", "Processus styloideus", "Circumferentia articularis", "Tuberculum minus"],
        answer: 0
      },
      {
        prompt: "Welke structuur vormt het gewricht met de trochlea humeri?",
        options: ["Processus coronoideus", "Incisura trochlearis", "Fovea olecrani", "Caput ulnae"],
        answer: 1
      },
      {
        prompt: "Wat ligt ventraal op de ulna?",
        options: ["Margo interosseus", "Processus coronoideus", "Olecranon", "Fovea radialis"],
        answer: 1
      },
      {
        prompt: "Wat ligt op de distale epifyse?",
        options: ["Olecranon", "Processus coronoideus", "Incisura trochlearis", "Circumferentia articularis"],
        answer: 3
      },
      {
        prompt: "Wat articuleert met de radius?",
        options: ["Incisura radialis ulnae", "Fovea olecrani", "Tuberositas ulnae", "Caput humeri"],
        answer: 0
      },
      {
        prompt: "De processus styloideus ulnae bevindt zich:",
        options: ["Lateraal", "Mediaal", "Ventraal", "Geen van beiden"],
        answer: 1
      },
      {
        prompt: "Wat ligt dorsaal op de proximale ulna?",
        options: ["Olecranon", "Tuberositas ulnae", "Incisura radialis", "Caput ulnae"],
        answer: 0
      },
      {
        prompt: "Wat ligt inferomediaal?",
        options: ["Tuberositas ulnae", "Olecranon", "Incisura trochlearis", "Processus coronoideus"],
        answer: 0
      }
    ]
  },
  {
    id: "carpi",
    emoji: "🟪",
    title: "Quiz 14 — Ossa carpi",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Welk carpale bot ligt het meest radiaal in de proximale rij?",
        options: ["Lunatum", "Scaphoideum", "Trapezium", "Hamatum"],
        answer: 1
      },
      {
        prompt: "Welk bot heeft een haakvormig uitsteeksel?",
        options: ["Capitatum", "Hamatus", "Trapezium", "Pisiforme"],
        answer: 1
      },
      {
        prompt: "Wat ligt palmaar op het os pisiforme?",
        options: ["Hele bot", "Niets, het ligt volledig dorsaal", "Het hamulus", "De fovea"],
        answer: 0
      },
      {
        prompt: "Welke botten articuleren met de radius?",
        options: ["Scaphoideum + lunatum", "Lunate + capitatum", "Triquetrum + pisiforme", "Pisiforme + scaphoideum"],
        answer: 0
      },
      {
        prompt: "Welk bot ligt in het centrum van de distale rij en is het grootste carpale bot?",
        options: ["Hamatum", "Capitatum", "Trapezoideum", "Lunatum"],
        answer: 1
      },
      {
        prompt: "Welk bot is sesamoïd en ligt in de pees van m. flexor carpi ulnaris?",
        options: ["Triquetrum", "Pisiforme", "Scaphoideum", "Trapezium"],
        answer: 1
      },
      {
        prompt: "Wat ligt het meest ulnair in de proximale rij?",
        options: ["Scaphoideum", "Lunatum", "Triquetrum", "Trapezium"],
        answer: 2
      },
      {
        prompt: "Welk paar vormt de radiale grens van de carpus?",
        options: ["Hamulus + pisiforme", "Scaphoideum + trapezium", "Lunatum + capitatum", "Trapezoïdeum + hamatum"],
        answer: 1
      }
    ]
  },
  {
    id: "hand",
    emoji: "🟦",
    title: "Quiz 15 — Metacarpalia + Phalanges",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Wat ligt het meest proximaal aan een metacarpaal?",
        options: ["Caput", "Basis", "Corpus", "Tuberositas distalis"],
        answer: 1
      },
      {
        prompt: "Welke vinger heeft GEEN phalanx media?",
        options: ["Pink", "Duim", "Ringvinger", "Middenvinger"],
        answer: 1
      },
      {
        prompt: "Wat ligt dorsaal op de hand?",
        options: ["Flexorpezen", "Extensorpezen", "Thenar", "Basis metacarpi"],
        answer: 1
      },
      {
        prompt: "Welke structuur ligt distaal op een metacarpaal?",
        options: ["Basis", "Corpus", "Caput", "Tuberculum"],
        answer: 2
      },
      {
        prompt: "Wat vormt de knokkels van de vuist?",
        options: ["Basis metacarpi", "Corpus metacarpi", "Capita metacarpi", "Phalanges proximales"],
        answer: 2
      },
      {
        prompt: "Wat ligt lateraal bij de anatomische houding?",
        options: ["Metacarpaal V", "Metacarpaal I", "Phalanx distalis II", "Caput metacarpi II"],
        answer: 1
      },
      {
        prompt: "Wat articuleert met de carpus?",
        options: ["Caput metacarpi", "Corpus metacarpi", "Basis metacarpi", "Phalanx proximalis"],
        answer: 2
      },
      {
        prompt: "Waar ligt de tuberositas ossis metacarpalis V?",
        options: ["Op de duimzijde", "Op de pinkzijde", "Op de dorsale zijde", "Op de ventrale zijde"],
        answer: 1
      }
    ]
  },
  {
    id: "os-coxae",
    emoji: "🟧",
    title: "Quiz 16 — Os coxae",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Wat ligt ventraal op het os ilium?",
        options: [
          "Spina iliaca anterior superior",
          "Spina iliaca posterior superior",
          "Linea glutea posterior",
          "Facies auricularis"
        ],
        answer: 0
      },
      {
        prompt: "Welke structuur ligt op de mediale zijde?",
        options: ["Facies glutea", "Fossa acetabuli", "Facies auricularis", "Spina iliaca anterior inferior"],
        answer: 2
      },
      {
        prompt: "Wat vormt de bovenrand van het ilium?",
        options: ["Crista iliaca", "Linea arcuata", "Eminentia iliopubica", "Pecten ossis pubis"],
        answer: 0
      },
      {
        prompt: "Welke structuur ligt inferieur en ventraal?",
        options: [
          "Ramus superior ossis pubis",
          "Ramus inferior ossis pubis",
          "Spina ischiadica",
          "Tuber ischiadicum"
        ],
        answer: 1
      },
      {
        prompt: "Wat ligt posterieur op os ischii?",
        options: ["Eminentia iliopubica", "Tuber ischiadicum", "Symphysis pubica", "Crista iliaca"],
        answer: 1
      },
      {
        prompt: "Wat articuleert met het femur?",
        options: ["Acetabulum", "Ala ossis ilii", "Corpus ossis pubis", "Ramus inferior"],
        answer: 0
      },
      {
        prompt: "Wat is de grootste opening in het os coxae?",
        options: ["Foramen nutritium", "Foramen obturatum", "Foramen ischiadicum majus", "Acetabulum"],
        answer: 1
      },
      {
        prompt: "Wat vormt de scheiding tussen ilium en pubis?",
        options: ["Linea arcuata", "Crista iliaca", "Facies glutea", "Ramus superior"],
        answer: 0
      }
    ]
  },
  {
    id: "femur",
    emoji: "🟩",
    title: "Quiz 17 — Femur",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Welke structuur ligt ventraal op het proximale femur?",
        options: ["Fossa trochanterica", "Trochanter minor", "Trochanter major", "Linea pectinea"],
        answer: 3
      },
      {
        prompt: "Wat ligt lateraal?",
        options: ["Trochanter major", "Trochanter minor", "Linea aspera", "Caput femoris"],
        answer: 0
      },
      {
        prompt: "Wat articuleert met het acetabulum?",
        options: ["Trochanter major", "Caput femoris", "Linea intertrochanterica", "Trochanter minor"],
        answer: 1
      },
      {
        prompt: "Wat ligt posterieur op het femur?",
        options: ["Linea aspera", "Trochanter major", "Collum femoris", "Fovea capitis"],
        answer: 0
      },
      {
        prompt: "Wat ligt distaal en mediaal?",
        options: ["Condylus lateralis", "Epicondylus lateralis", "Condylus medialis", "Trochanter minor"],
        answer: 2
      },
      {
        prompt: "Wat is de fovea capitis?",
        options: [
          "Aanhechtingsplek lig. capitis femoris",
          "Gewrichtsvlak",
          "Laterale knobbel",
          "Spierenaanhechting van gluteus"
        ],
        answer: 0
      },
      {
        prompt: "Wat ligt anterieur op de distale femur?",
        options: ["Fossa intercondylaris", "Patellofemorale groeve", "Epicondylus lateralis", "Condylus medialis"],
        answer: 1
      },
      {
        prompt: "Wat ligt posterieur aan de distale epifyse?",
        options: ["Patellofemorale groeve", "Epicondylen", "Fossa intercondylaris", "Caput femoris"],
        answer: 2
      }
    ]
  },
  {
    id: "patella",
    emoji: "🟦",
    title: "Quiz 18 — Patella",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Wat ligt ventraal?",
        options: ["Facies articularis", "Apex", "Basis", "Tuberculum"],
        answer: 2
      },
      {
        prompt: "Wat ligt dorsaal?",
        options: ["Basis", "Apex", "Facies articularis", "Pees van quadriceps"],
        answer: 2
      },
      {
        prompt: "Wat articuleert met de patella?",
        options: ["Tibia", "Fibula", "Femur", "Talus"],
        answer: 2
      },
      {
        prompt: "Welke zijde is het breedst?",
        options: ["Lateraal", "Mediaal", "Geen verschil", "Dorsaal"],
        answer: 0
      },
      {
        prompt: "Wat ligt het meest proximaal?",
        options: ["Basis", "Apex", "Facies articularis", "Tuberculum decussatum"],
        answer: 0
      },
      {
        prompt: "De apex patellae wijst:",
        options: ["Omhoog", "Omlaag", "Lateraal", "Mediaal"],
        answer: 1
      },
      {
        prompt: "Patella is een:",
        options: ["Kort bot", "Plat bot", "Sesamoïd bot", "Pneumatisch bot"],
        answer: 2
      }
    ]
  },
  {
    id: "tibia",
    emoji: "🟧",
    title: "Quiz 19 — Tibia",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Wat ligt ventraal op de tibia?",
        options: ["Malleolus medialis", "Tuberositas tibiae", "Apex capitis", "Facies articularis superior"],
        answer: 1
      },
      {
        prompt: "Wat ligt mediaal?",
        options: ["Margo anterior", "Tuberositas", "Malleolus medialis", "Facies fibularis"],
        answer: 2
      },
      {
        prompt: "Wat articuleert met het femur?",
        options: ["Condylus medialis + lateralis", "Malleolus", "Corpus", "Facies fibularis"],
        answer: 0
      },
      {
        prompt: "Wat ligt op de distale epifyse?",
        options: ["Tuberositas tibiae", "Mediale malleolus", "Intercondylaire eminentie", "Epicondylen"],
        answer: 1
      },
      {
        prompt: "Wat ligt lateraal?",
        options: ["Malleolus medialis", "Facies fibularis", "Tuberculum intercondylare", "Condylus medialis"],
        answer: 1
      },
      {
        prompt: "Wat ligt dorsaal op de tibia?",
        options: ["Linea musculi solei", "Tuberositas tibiae", "Margo anterior", "Facies medialis"],
        answer: 0
      },
      {
        prompt: "De crista tibiae bevindt zich:",
        options: ["Ventraal", "Mediaal", "Lateraal", "Dorsaal"],
        answer: 0
      }
    ]
  },
  {
    id: "fibula",
    emoji: "🟩",
    title: "Quiz 20 — Fibula",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Wat ligt proximaal?",
        options: ["Malleolus lateralis", "Caput fibulae", "Corpus fibulae", "Facies articularis malleoli"],
        answer: 1
      },
      {
        prompt: "Wat ligt lateraal?",
        options: ["Facies articularis capitis", "Malleolus lateralis", "Linea interossea", "Crista medialis"],
        answer: 1
      },
      {
        prompt: "Wat ligt ventraal?",
        options: ["Crista medialis", "Facies lateralis", "Facies posterior", "Margo posterior"],
        answer: 1
      },
      {
        prompt: "Wat articuleert met de tibia?",
        options: ["Caput fibulae", "Malleolus lateralis", "Facies lateralis", "Tuberculum anterior"],
        answer: 0
      },
      {
        prompt: "Wat ligt op de distale epifyse?",
        options: ["Caput fibulae", "Linea interossea", "Malleolus lateralis", "Apex"],
        answer: 2
      },
      {
        prompt: "Wat ligt dorsaal op de fibula?",
        options: ["Facies posterior", "Facies medialis", "Margo anterior", "Malleolus lateralis"],
        answer: 0
      },
      {
        prompt: "Wat is de functie van de fibula?",
        options: ["Draagt gewicht", "Beschermt meniscus", "Spieraanhechting + stabiliteit enkel", "Verbindt met femur"],
        answer: 2
      }
    ]
  },
  {
    id: "talus",
    emoji: "🟦",
    title: "Quiz 21 — Talus",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Wat ligt superieur op de talus?",
        options: ["Facies malleolaris posterior", "Trochlea tali", "Caput tali", "Sulcus tali"],
        answer: 1
      },
      {
        prompt: "Wat articuleert met het naviculare?",
        options: ["Caput tali", "Trochlea tali", "Sustentaculum tali", "Tuberculum laterale"],
        answer: 0
      },
      {
        prompt: "Wat ligt ventraal op de talus?",
        options: ["Trochlea", "Caput tali", "Sulcus tali", "Collum tali"],
        answer: 1
      },
      {
        prompt: "Wat ligt mediaal?",
        options: ["Tuberculum laterale", "Facies malleolaris posterior", "Sustentaculum tali", "Trochlea tali"],
        answer: 2
      },
      {
        prompt: "Wat ligt dorsaal?",
        options: ["Tuberculum posterior tali", "Caput tali", "Collum tali", "Sustentaculum tali"],
        answer: 0
      }
    ]
  },
  {
    id: "calcaneus",
    emoji: "🟧",
    title: "Quiz 22 — Calcaneus",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Wat ligt superieur op de calcaneus?",
        options: ["Sustentaculum tali", "Tuber calcanei", "Facies articularis cuboidea", "Trochlea fibularis"],
        answer: 0
      },
      {
        prompt: "Wat articuleert met de talus?",
        options: ["Tuber calcanei", "Sustentaculum tali", "Facies articularis posterior", "Processus anterior"],
        answer: 2
      },
      {
        prompt: "Wat ligt lateraal?",
        options: ["Sustentaculum tali", "Trochlea fibularis", "Tuberositas calcanei", "Sulcus calcanei"],
        answer: 1
      },
      {
        prompt: "Wat ligt plantair/posterieur?",
        options: ["Tractus calcaneus", "Tuber calcanei", "Sustentaculum tali", "Facies navicularis"],
        answer: 1
      },
      {
        prompt: "Wat ligt mediaal?",
        options: ["Trochlea fibularis", "Facies articularis posterior", "Sustentaculum tali", "Tuber calcanei"],
        answer: 2
      }
    ]
  },
  {
    id: "naviculare",
    emoji: "🟪",
    title: "Quiz 23 — Os naviculare",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Welke structuur ligt aan de mediale zijde van het os naviculare?",
        options: ["Tuberositas ossis navicularis", "Facies articularis cuboidea", "Sulcus tali", "Processus lateralis"],
        answer: 0
      },
      {
        prompt: "Wat articuleert met het naviculare?",
        options: ["Calcaneus", "Talus", "Metatarsaal I", "Fibula"],
        answer: 1
      },
      {
        prompt: "Wat ligt ventraal op het naviculare?",
        options: ["Facies articularis tali", "Facies articularis cuneiformis", "Tuberositas navicularis", "Sulcus calcanei"],
        answer: 1
      },
      {
        prompt: "Welke structuur ligt dorsaal?",
        options: ["Facies articulares (voor cuneiformia)", "Tuberositas navicularis", "Sustentaculum tali", "Processus anterior"],
        answer: 0
      },
      {
        prompt: "Wat ligt het meest proximaal?",
        options: ["Facies articularis cuboidea", "Facies articularis tali", "Tuberculum mediale", "Facies cuneiformis intermedia"],
        answer: 1
      }
    ]
  },
  {
    id: "cuboideum",
    emoji: "🟦",
    title: "Quiz 24 — Os cuboideum",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Wat ligt lateraal op het cuboideum?",
        options: ["Sulcus tendinis peronei longi", "Facies articularis navicularis", "Facies articularis lateralis", "Processus medialis"],
        answer: 0
      },
      {
        prompt: "Het cuboideum articuleert met:",
        options: ["Tibia", "Talus + naviculare + metatarsalen", "Calcaneus + laterale cuneiform + MT IV en V", "Alle cuneiformia"],
        answer: 2
      },
      {
        prompt: "Wat ligt plantair op het cuboideum?",
        options: ["Sulcus tendinis peronei longi", "Facies articularis calcanei", "Facies dorsalis", "Facet voor MT I"],
        answer: 0
      },
      {
        prompt: "Wat ligt dorsaal?",
        options: ["Tuber calcanei", "Facies dorsalis ossis cuboidei", "Processus anterior tali", "Sustentaculum tali"],
        answer: 1
      },
      {
        prompt: "Wat ligt mediaal?",
        options: ["Groeven voor peroneus brevis", "Facies articularis voor os cuneiforme laterale", "Crista medialis tali", "Facies lateralis ossis cuboidei"],
        answer: 1
      }
    ]
  },
  {
    id: "cuneiformia",
    emoji: "🟥",
    title: "Quiz 25 — Ossa cuneiformia",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Welk cuneiforme ligt het meest mediaal?",
        options: ["Cuneiforme mediale (I)", "Cuneiforme intermedium (II)", "Cuneiforme laterale (III)", "Cuboideum"],
        answer: 0
      },
      {
        prompt: "Wat ligt dorsaal op alle cuneiformia?",
        options: ["Facies plantaris", "Facies dorsalis", "Tuberositas cuneiforme", "Sulcus tendineus"],
        answer: 1
      },
      {
        prompt: "Cuneiforme II articuleert met:",
        options: ["MT I en III", "MT II", "MT III en IV", "Geen metatarsaal"],
        answer: 1
      },
      {
        prompt: "Wat ligt plantair op cuneiforme I?",
        options: ["Sulcus voor m. tibialis posterior", "Facies dorsalis", "Facies articularis cuboidea", "Tuberculum mediale"],
        answer: 0
      },
      {
        prompt: "Welke structuur ligt lateraal op cuneiforme III?",
        options: ["MT II", "MT III", "MT IV", "Naviculare"],
        answer: 2
      },
      {
        prompt: "Wat articuleert met alle drie de cuneiformia?",
        options: ["Talus", "Naviculare", "Calcaneus", "Cuboideum"],
        answer: 1
      },
      {
        prompt: "Wat ligt proximaal?",
        options: ["Gezichtsvlak naar metatarsalen", "Facies articularis navicularis", "Tuberositas mediale", "Sulcus tendineus"],
        answer: 1
      }
    ]
  },
  {
    id: "metatarsalia",
    emoji: "🟩",
    title: "Quiz 26 — Metatarsalia + Phalanges",
    level: "Moeilijk niveau",
    questions: [
      {
        prompt: "Welke metatarsaal ligt het meest mediaal?",
        options: ["MT II", "MT V", "MT I", "MT III"],
        answer: 2
      },
      {
        prompt: "Wat ligt lateraal op de voet in anatomische houding?",
        options: ["MT I", "MT II", "MT V", "Os naviculare"],
        answer: 2
      },
      {
        prompt: "Welke structuur ligt proximaal aan een metatarsaal?",
        options: ["Caput", "Corpus", "Basis", "Trochlea"],
        answer: 2
      },
      {
        prompt: "Welke teen heeft geen phalanx media?",
        options: ["Hallux", "Digitus IV", "Digitus III", "Digitus V"],
        answer: 0
      },
      {
        prompt: "Wat ligt dorsaal op de metatarsalen?",
        options: ["Buigpezen", "Strekpezen", "Sesambeentjes", "Facies plantaris"],
        answer: 1
      },
      {
        prompt: "Wat articuleert met MT I?",
        options: ["Cuboideum", "Cuneiforme mediale", "Cuneiforme laterale", "Naviculare"],
        answer: 1
      },
      {
        prompt: "Waar ligt de tuberositas MT V?",
        options: ["Plantair", "Lateraal", "Mediaal", "Proximaal plantair"],
        answer: 1
      },
      {
        prompt: "Wat ligt distaal aan elke metatarsaal?",
        options: ["Caput", "Basis", "Corpus", "Facies plantaris"],
        answer: 0
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

const state = {
  currentQuiz: null,
  currentIndex: 0,
  selectedOption: null,
  answers: []
};

const letters = ["A", "B", "C", "D"];
const questionAnimationClass = "question-zone--animate";

function renderMenu() {
  if (!quizGrid) return;
  quizGrid.innerHTML = quizData
    .map(
      (quiz) => `
      <article class="quiz-card" data-id="${quiz.id}">
        <span class="quiz-card__tag">${quiz.emoji} ${quiz.level}</span>
        <h3>${quiz.title}</h3>
        <span>${quiz.questions.length} vragen · score op 20</span>
      </article>
    `
    )
    .join("");

  quizGrid.querySelectorAll(".quiz-card").forEach((card) => {
    card.addEventListener("click", () => startQuiz(card.dataset.id));
  });
}

function startQuiz(id) {
  const quiz = quizData.find((q) => q.id === id);
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
