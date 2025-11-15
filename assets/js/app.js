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
  },
  {
    id: "sacrum",
    title: "Quiz 6 — Os sacrum",
    level: "Moeilijk • 20 vragen",
    questions: [
      {
        prompt: "Waaruit bestaat het os sacrum?",
        options: ["3 vergroeide wervels", "5 vergroeide wervels", "7 vergroeide wervels", "2 vergroeide wervels"],
        answer: 1
      },
      {
        prompt: "Hoe heet de bovenste uitstekende rand van het sacrum?",
        options: ["Basis ossis sacri", "Ala sacralis", "Promontorium", "Crista sacralis"],
        answer: 2
      },
      {
        prompt: "Wat loopt door het canalis sacralis?",
        options: ["Ruggenmerg", "Zenuwwortels", "Aorta", "Slokdarm"],
        answer: 1
      },
      {
        prompt: "Hoe noemen we de openingen aan de voorzijde van het sacrum?",
        options: ["Foramina sacralia posteriora", "Foramina sacralia anteriora", "Hiatus sacralis", "Foramen obturatum"],
        answer: 1
      },
      {
        prompt: "Wat bevindt zich op de dorsale middenlijn van het sacrum?",
        options: ["Crista sacralis mediana", "Processus dentatus", "Processus spinosus", "Linea glutea"],
        answer: 0
      },
      {
        prompt: "Wat ligt er lateraal van de crista sacralis mediana?",
        options: ["Foramina anteriora", "Tuberositas sacralis", "Crista sacralis lateralis", "Ala ossis sacri"],
        answer: 2
      },
      {
        prompt: "Hoe heet de achterste opening van het sacraal kanaal?",
        options: ["Hiatus sacralis", "Foramen sacrale", "Fossa sacralis", "Incisura sacralis"],
        answer: 0
      },
      {
        prompt: "Hoe heet de ruwe zone voor ligamentaanhechting?",
        options: ["Facies auricularis", "Tuberositas ossis sacri", "Fovea sacralis", "Sinus sacralis"],
        answer: 1
      },
      {
        prompt: "Met welk bot articuleert het sacrum lateraal?",
        options: ["Os pubis", "Os ilium", "Os ischii", "Femur"],
        answer: 1
      },
      {
        prompt: "Hoe heet het oorvormige gewrichtsvlak?",
        options: ["Facies ophthalmica", "Facies auricularis", "Facies articularis superior", "Facies sacralis"],
        answer: 1
      },
      {
        prompt: "Wat vormen de vergroeide processus spinosi van het sacrum?",
        options: ["Crista glutea", "Crista sacralis mediana", "Crista sacralis posterior", "Crista intermedia"],
        answer: 1
      },
      {
        prompt: "Wat is de functie van het sacrum?",
        options: ["Beweging mogelijk maken", "Verbinding tussen beide os coxae", "Rotatie van wervelkolom", "Aanhechting van ribben"],
        answer: 1
      },
      {
        prompt: "Wat loopt door de foramina sacralia anteriora?",
        options: ["Slagaders", "Spinale zenuwen", "Wervelslagader", "Spieraanhechtingen"],
        answer: 1
      },
      {
        prompt: "Welke structuur ligt direct boven het sacrum?",
        options: ["L2", "L3", "L4", "L5"],
        answer: 3
      },
      {
        prompt: "Wat bevindt zich naast de ala ossis sacri?",
        options: ["Foramina posteriora", "Facies auricularis", "Foramen obturatum", "Symphysis pubica"],
        answer: 1
      },
      {
        prompt: "Waar eindigt het canalis sacralis caudaal?",
        options: ["Promontorium", "Crista sacralis", "Hiatus sacralis", "Corpus sacri"],
        answer: 2
      },
      {
        prompt: "Wat is de vorm van het sacrum dorsaal gezien?",
        options: ["Recht", "Hol", "Bol", "Driehoekig"],
        answer: 2
      },
      {
        prompt: "Hoe heet de laterale rand van het sacrum?",
        options: ["Tuberositas arcuata", "Margo lateralis", "Linea arcuata", "Linea intermedia"],
        answer: 1
      },
      {
        prompt: "Wat zit er ventraal op het sacrum?",
        options: ["Crista sacralis medialis", "Lineae transversae", "Facies auricularis", "Foramina posteriora"],
        answer: 1
      },
      {
        prompt: "Wat is typisch aan het sacrum?",
        options: ["Zeer beweeglijk", "Geen tussenwervelschijven", "7 processus transversi", "Het bevat een dens"],
        answer: 1
      }
    ]
  },
  {
    id: "coccygis",
    title: "Quiz 7 — Os coccygis",
    level: "Moeilijk • 20 vragen",
    questions: [
      {
        prompt: "Waaruit bestaat het os coccygis?",
        options: ["2–3 vergroeide wervels", "3–5 vergroeide wervels", "7 vergroeide wervels", "1 wervel"],
        answer: 1
      },
      {
        prompt: "Waar bevindt het staartbeen zich?",
        options: ["Tussen de lumbale wervels", "Onder het sacrum", "Voor het os pubis", "Achter de ribben"],
        answer: 1
      },
      {
        prompt: "Hoe heet het gewricht tussen sacrum en coccyx?",
        options: ["Articulatio sacrococcygea", "Articulatio sacroiliaca", "Articulatio interpubica", "Articulatio lumbo-sacralis"],
        answer: 0
      },
      {
        prompt: "Wat is de belangrijkste functie van het os coccygis?",
        options: ["Gewicht dragen", "Spier- en ligamentaanhechting", "Bescherming van organen", "Articulatie met femur"],
        answer: 1
      },
      {
        prompt: "Hoe is de vorm van het coccyx best te omschrijven?",
        options: ["Hartvormig", "Driehoekig", "Zwaardvormig", "Boogvormig"],
        answer: 2
      },
      {
        prompt: "Wat bevindt zich boven het os coccygis?",
        options: ["Femur", "Sacrum", "L3", "Pubis"],
        answer: 1
      },
      {
        prompt: "Hoe heet het eerste segment van het staartbeen?",
        options: ["Cornu coccygeum", "Corpus coccygis", "Basis coccygis", "Apex coccygis"],
        answer: 2
      },
      {
        prompt: "Hoe heet het onderste puntje van het coccyx?",
        options: ["Apex coccygis", "Promontorium", "Tuberositas coccygea", "Cornu sacralis"],
        answer: 0
      },
      {
        prompt: "Wat zijn de cornua coccygea?",
        options: ["Kleine ribuitsteeksels", "Processus spinosi", "Uitsteeksels die naar het sacrum wijzen", "Inkepingen voor zenuwen"],
        answer: 2
      },
      {
        prompt: "Wat gebeurt er meestal met het coccyx bij volwassenen?",
        options: ["Het vergroot", "Het wordt botweefsel met tussenwervelschijven", "Het vergroeid volledig", "Het draait naar craniaal"],
        answer: 2
      },
      {
        prompt: "Welke beweging is mogelijk in de articulatio sacrococcygea?",
        options: ["Rotatie", "Extensie", "Lichte flexie", "Geen enkele beweging"],
        answer: 2
      },
      {
        prompt: "Bij vrouwen is het coccyx vaak…",
        options: ["Veel korter", "Naar ventraal gericht", "Meer beweeglijk", "Groter dan bij mannen"],
        answer: 2
      },
      {
        prompt: "Wat hecht er onder meer aan het os coccygis?",
        options: ["Gluteus medius", "Ligamenten van bekkenbodem", "Hamstrings", "Quadriceps"],
        answer: 1
      },
      {
        prompt: "Wat ligt er ventraal van het coccyx?",
        options: ["Sacraal kanaal", "Rectum", "Spina ischiadica", "Blaswand"],
        answer: 1
      },
      {
        prompt: "Hoe noemen we een pijnlijke kneuzing van het coccyx?",
        options: ["Coccygodynie", "Sacrodynie", "Coccytitis", "Coxalgie"],
        answer: 0
      },
      {
        prompt: "Het coccyx bevat…",
        options: ["Grote gewrichtsvlakken", "Kleine rudimentaire processus", "Een dens", "Foramina zoals het sacrum"],
        answer: 1
      },
      {
        prompt: "Wat is de positie van het coccyx bij anatomische houding?",
        options: ["Ventraal gekromd", "Dorsaal gekromd", "Helemaal recht", "Naar links gericht"],
        answer: 0
      },
      {
        prompt: "De coccygeale wervels bevatten…",
        options: ["Geen corpus", "Een zeer klein corpus", "Grote processus transversi", "Een volledig wervellichaam zoals L1"],
        answer: 1
      },
      {
        prompt: "Wat is het grootste verschil met het sacrum?",
        options: ["Het sacrum beweegt veel meer", "Het coccyx is langer", "Het coccyx is veel kleiner en eenvoudiger", "Het coccyx articuleert met ribben"],
        answer: 2
      },
      {
        prompt: "Wat is de bovenste rand van het os coccygis?",
        options: ["Apex", "Basis", "Cornu", "Tuberositas"],
        answer: 1
      }
    ]
  },
  {
    id: "sternum",
    title: "Quiz 8 — Sternum",
    level: "Moeilijk • 20 vragen",
    questions: [
      {
        prompt: "Uit welke delen bestaat het sternum?",
        options: ["Manubrium – Corpus – Processus xiphoideus", "Basis – Corpus – Ala", "Caput – Collum – Corpus", "Manubrium – Arcus – Tuberculum"],
        answer: 0
      },
      {
        prompt: "Hoe heet de bovenste inkeping van het sternum?",
        options: ["Incisura costalis", "Incisura clavicularis", "Incisura jugularis", "Fovea sternalis"],
        answer: 2
      },
      {
        prompt: "Waar articuleren de claviculae met het sternum?",
        options: ["Op het corpus sterni", "Op de incisura costalis", "Op de incisura clavicularis", "Op het xiphoïd"],
        answer: 2
      },
      {
        prompt: "Waar articuleren de ribben met het sternum?",
        options: ["Incisura jugularis", "Incisura costalis", "Foramen sternale", "Crista sterni"],
        answer: 1
      },
      {
        prompt: "Hoe heet het onderste deel van het sternum?",
        options: ["Processus xiphoideus", "Corpus sterni", "Manubrium", "Tuberculum sterni"],
        answer: 0
      },
      {
        prompt: "Wat ligt er tussen het manubrium en corpus sterni?",
        options: ["Corpus costae", "Angulus sterni", "Tuberositas sterni", "Arcus sterni"],
        answer: 1
      },
      {
        prompt: "Wat is het Angulus Sterni?",
        options: ["Een aanhechtingsplaats voor de ribben", "De overgang tussen corpus en xiphoid", "Een voelbare hoek tussen manubrium en corpus", "De verbinding tussen sternum en clavicula"],
        answer: 2
      },
      {
        prompt: "Hoeveel incisurae costales zijn er aan elke zijde van het sternum?",
        options: ["3", "5", "7", "12"],
        answer: 2
      },
      {
        prompt: "Wat hecht vast aan de Processus xiphoideus?",
        options: ["Rib 1", "Clavicula", "Buikspieren", "Trapzius"],
        answer: 2
      },
      {
        prompt: "Hoe heet het kraakbeen dat ribben met sternum verbindt?",
        options: ["Cartilago costalis", "Ligamentum costosternale", "Capsula costalis", "Cartilago sternale"],
        answer: 0
      },
      {
        prompt: "Waar ligt het sternum anatomisch?",
        options: ["Lateraal in de thorax", "Dorsaal in de thorax", "Anterieur in de thorax", "Onder de clavicula alleen"],
        answer: 2
      },
      {
        prompt: "Welke vorm heeft het sternum?",
        options: ["Driehoekig", "Zwaardvormig", "Kubusvormig", "C-vormig"],
        answer: 1
      },
      {
        prompt: "Het sternum beschermt vooral…",
        options: ["Hersenen", "Ruggenmerg", "Longen en hart", "Bekkenorganen"],
        answer: 2
      },
      {
        prompt: "Wat is een kenmerk van het corpus sterni?",
        options: ["Heeft een incisura jugularis", "Heeft meerdere incisurae costales", "Articuleert met clavicula", "Heeft de dens"],
        answer: 1
      },
      {
        prompt: "Wat is een klinisch herkenningspunt voor borstcompressies?",
        options: ["Angulus sterni", "Incisura clavicularis", "Processus xiphoideus", "Corpus sterni"],
        answer: 3
      },
      {
        prompt: "Wat ligt er onder de Processus xiphoideus?",
        options: ["Diaphragma", "Patella", "Pubis", "Humerus"],
        answer: 0
      },
      {
        prompt: "Wat gebeurt er met het sternum bij ouder worden?",
        options: ["Het verkalkt en kan vergroeien", "Het wordt zachter", "Het verdwijnt", "Het wordt cartilage"],
        answer: 0
      },
      {
        prompt: "Hoe heet het gewricht tussen sternum en ribkraakbeen?",
        options: ["Articulatio sternoclavicularis", "Articulatio costosternalis", "Articulatio sternoxiphoidea", "Articulatio manubristerni"],
        answer: 1
      },
      {
        prompt: "Met welk bot vormt het sternum een gewricht aan de bovenkant?",
        options: ["Scapula", "Clavicula", "Costae III", "Vertebra C7"],
        answer: 1
      },
      {
        prompt: "Wat is het middenste en grootste deel van het sternum?",
        options: ["Manubrium sterni", "Corpus sterni", "Processus xiphoideus", "Tuberculum costae"],
        answer: 1
      }
    ]
  },
  {
    id: "clavicula",
    title: "Quiz 9 — Clavicula",
    level: "Moeilijk • 20 vragen",
    questions: [
      {
        prompt: "Welke vorm heeft de clavicula?",
        options: ["Rechte buis", "S-vormige kromming", "Zwaardvorm", "Volledig ronde staaf"],
        answer: 1
      },
      {
        prompt: "Met welk bot articuleert de laterale zijde van de clavicula?",
        options: ["Sternum", "Scapula", "Humerus", "Costa I"],
        answer: 1
      },
      {
        prompt: "Hoe heet het gewricht tussen clavicula en sternum?",
        options: ["Acromioclaviculair gewricht", "Sternoclaviculair gewricht", "Glenohumerale gewricht", "Costoclaviculair gewricht"],
        answer: 1
      },
      {
        prompt: "Hoe heet het gewricht tussen clavicula en acromion?",
        options: ["Sternoclaviculair", "Scapuloclaviculair", "Acromioclaviculair", "Claviculohumeral"],
        answer: 2
      },
      {
        prompt: "Hoe heet het ruwe gebied onderaan de clavicula voor ligamentaanhechting?",
        options: ["Linea costalis", "Facies articularis", "Tuberositas coracoidea", "Conoid tubercle"],
        answer: 3
      },
      {
        prompt: "Welke zijde van de clavicula is bol naar voren gericht?",
        options: ["Laterale zijde", "Mediale zijde", "Caudale zijde", "Dorsale zijde"],
        answer: 1
      },
      {
        prompt: "De mediale clavicula is…",
        options: ["Plat", "Rond en dik", "Ovaal en dun", "Driehoekig"],
        answer: 1
      },
      {
        prompt: "De laterale clavicula articuleert met…",
        options: ["Scapula (acromion)", "Os coxae", "Humeruskop", "Sternum"],
        answer: 0
      },
      {
        prompt: "Wat is de belangrijkste functie van de clavicula?",
        options: ["Bescherming van longen", "Stabiliserende verbinding arm-romp", "Aanmaken van bloedcellen", "Draaipunt voor elleboog"],
        answer: 1
      },
      {
        prompt: "Waar ligt de impressio ligamenti costoclavicularis?",
        options: ["Lateraal", "Mediaal", "Op dorsale zijde", "Op craniale zijde"],
        answer: 1
      },
      {
        prompt: "Welke structuur ligt aan de laterale clavicula?",
        options: ["Conoid tubercle", "Impressio costalis", "Sternal facet", "Linea intermedia"],
        answer: 0
      },
      {
        prompt: "Hoe heet het vlak waarmee de clavicula met het sternum articuleert?",
        options: ["Facies articularis sternalis", "Facies glenoidalis", "Facies costalis", "Facies humeralis"],
        answer: 0
      },
      {
        prompt: "Waarvoor dient het conoid tubercle?",
        options: ["Aanhechting coracoclaviculair ligament", "Aanhechting van borstspieren", "Aanhechting voor trapezius", "Aanhechting voor deltoideus"],
        answer: 0
      },
      {
        prompt: "De clavicula is het enige bot dat…",
        options: ["Met de ribben articuleert", "De arm met de romp verbindt", "Geen gewrichten heeft", "Met twee wervels articuleert"],
        answer: 1
      },
      {
        prompt: "Welke zijde van de clavicula is vlakker en breder?",
        options: ["Mediale", "Laterale", "Dorsale", "Caudale"],
        answer: 1
      },
      {
        prompt: "Waar ligt het acromiale uiteinde?",
        options: ["Mediaal", "Lateraal", "Ventraal", "Dorsaal"],
        answer: 1
      },
      {
        prompt: "Waar ligt het sternale uiteinde?",
        options: ["Lateraal", "Dorsaal", "Mediaal", "Onder scapula"],
        answer: 2
      },
      {
        prompt: "Welke spier hecht aan de onderkant van de clavicula?",
        options: ["Trapezius", "Subclavius", "Latissimus dorsi", "Rhomboideus"],
        answer: 1
      },
      {
        prompt: "Wat is typisch voor de clavicula bij een breuk?",
        options: ["Breekt zelden", "Breekt vaak in het midden", "Breekt alleen aan de uiteinden", "Breekt steeds verticaal"],
        answer: 1
      },
      {
        prompt: "Wat ligt ventraal van de clavicula?",
        options: ["Scapula", "Longtop", "Humerus", "Ribben"],
        answer: 3
      }
    ]
  },
  {
    id: "scapula",
    title: "Quiz 10 — Scapula",
    level: "Moeilijk • 20 vragen",
    questions: [
      {
        prompt: "Welke structuur loopt uit in het acromion?",
        options: ["Spina scapulae", "Processus coracoideus", "Cavitas glenoidalis", "Fossa subscapularis"],
        answer: 0
      },
      {
        prompt: "Hoe heet het ravenbekvormige uitsteeksel van de scapula?",
        options: ["Acromion", "Angulus superior", "Processus coracoideus", "Tuberculum supraglenoidale"],
        answer: 2
      },
      {
        prompt: "Hoe heet de gewrichtskom van de scapula?",
        options: ["Fossa supraspinata", "Cavitas glenoidalis", "Angulus inferior", "Fossa infraspinata"],
        answer: 1
      },
      {
        prompt: "Wat ligt er boven de spina scapulae?",
        options: ["Fossa infraspinata", "Fossa supraspinata", "Cavitas glenoidalis", "Fossa subscapularis"],
        answer: 1
      },
      {
        prompt: "Wat ligt er onder de spina scapulae?",
        options: ["Fossa supraspinata", "Fossa subscapularis", "Fossa infraspinata", "Angulus superior"],
        answer: 2
      },
      {
        prompt: "Hoe heet het botpunt onderaan de scapula?",
        options: ["Angulus superior", "Angulus inferor", "Angulus inferior", "Angulus medialis"],
        answer: 2
      },
      {
        prompt: "De margo medialis ligt…",
        options: ["Tegen de wervelkolom", "Tegen de ribben", "Tegen de humerus", "Tegen de clavicula"],
        answer: 0
      },
      {
        prompt: "De margo lateralis ligt…",
        options: ["Naar het sternum gericht", "Dicht bij de humerus", "Tegen de wervelkolom", "Achter de clavicula"],
        answer: 1
      },
      {
        prompt: "Welke structuur ligt aan de voorzijde van de scapula?",
        options: ["Fossa subscapularis", "Fossa infraspinata", "Fossa supraspinata", "Acromion"],
        answer: 0
      },
      {
        prompt: "Wat ligt er boven op de cavitas glenoidalis?",
        options: ["Tuberculum infraglenoidale", "Processus coracoideus", "Tuberculum supraglenoidale", "Acromion"],
        answer: 2
      },
      {
        prompt: "Wat ligt er onder de cavitas glenoidalis?",
        options: ["Tuberculum supraglenoidale", "Tuberculum infraglenoidale", "Processus coracoideus", "Fossa subscapularis"],
        answer: 1
      },
      {
        prompt: "Wat is de functie van het acromion?",
        options: ["Aanhechting hamstrings", "Gewrichtsvlak voor clavicula", "Bescherming van ribben", "Aanhechting sternum"],
        answer: 1
      },
      {
        prompt: "Wat is de positie van de cavitas glenoidalis?",
        options: ["Lateraal gericht", "Mediaal gericht", "Ventraal gericht", "Dorsaal gericht"],
        answer: 0
      },
      {
        prompt: "Hoe noem je de bovenste hoek van de scapula?",
        options: ["Angulus inferior", "Angulus superior", "Angulus medialis", "Angulus centralis"],
        answer: 1
      },
      {
        prompt: "Hoe noem je de rand onder de cavitas glenoidalis richting de oksel?",
        options: ["Margo medialis", "Margo superior", "Margo lateralis", "Crista glenoidalis"],
        answer: 2
      },
      {
        prompt: "Wat vormt de spina scapulae?",
        options: ["Een scheiding tussen supra- en infraspinata", "De gewrichtskom", "Het ventrale oppervlak", "De mediale rand"],
        answer: 0
      },
      {
        prompt: "De facies costalis is het oppervlak dat…",
        options: ["Tegen de ribben ligt", "Tegen de wervels ligt", "De humerus draagt", "De clavicula draagt"],
        answer: 0
      },
      {
        prompt: "Wat bevindt zich op de dorsale zijde van de scapula?",
        options: ["Fossa subscapularis", "Cavitas costalis", "Fossa supra- en infraspinata", "Processus xiphoideus"],
        answer: 2
      },
      {
        prompt: "Hoe heet de bovenste inkeping aan de mediale bovenrand?",
        options: ["Incisura scapulae", "Incisura glenoidalis", "Incisura medialis", "Incisura coracoidea"],
        answer: 0
      },
      {
        prompt: "Waar articuleert de scapula rechtstreeks mee?",
        options: ["Humerus & clavicula", "Ribben & clavicula", "Sternum & humerus", "Sternum & clavicula"],
        answer: 0
      }
    ]
  },
  {
    id: "humerus",
    title: "Quiz 11 — Humerus",
    level: "Moeilijk • 20 vragen",
    questions: [
      {
        prompt: "Hoe heet de kop van de humerus?",
        options: ["Caput humeri", "Tuberculum majus", "Collum anatomicum", "Glenoid head"],
        answer: 0
      },
      {
        prompt: "Wat articuleert met de cavitas glenoidalis van de scapula?",
        options: ["Trochlea humeri", "Caput humeri", "Epicondylus lateralis", "Fossa olecrani"],
        answer: 1
      },
      {
        prompt: "Wat ligt lateraal van de sulcus intertubercularis?",
        options: ["Tuberculum minus", "Tuberculum majus", "Trochlea humeri", "Fossa coronoidea"],
        answer: 1
      },
      {
        prompt: "Wat ligt mediaal van de sulcus intertubercularis?",
        options: ["Tuberculum majus", "Tuberculum minus", "Caput humeri", "Collum chirurgicum"],
        answer: 1
      },
      {
        prompt: "Hoe heet het smalle deel onder de caput humeri?",
        options: ["Collum anatomicum", "Corpus humeri", "Collum chirurgicum", "Crista humeri"],
        answer: 2
      },
      {
        prompt: "Wat zit er aan de achterzijde van de humerus distaal?",
        options: ["Fossa olecrani", "Fossa radialis", "Tuberositas deltoidea", "Fovea articularis"],
        answer: 0
      },
      {
        prompt: "Hoe heet het uitsteeksel aan de laterale zijde distaal?",
        options: ["Epicondylus medialis", "Epicondylus lateralis", "Trochlea humeri", "Caput laterale"],
        answer: 1
      },
      {
        prompt: "Welke structuur articuleert met de ulna?",
        options: ["Capitulum humeri", "Trochlea humeri", "Tuberculum minus", "Fossa radialis"],
        answer: 1
      },
      {
        prompt: "Welke structuur articuleert met de radius?",
        options: ["Trochlea humeri", "Fossa olecrani", "Capitulum humeri", "Epicondylus medialis"],
        answer: 2
      },
      {
        prompt: "Hoe heet de groeve voor de m. latissimus dorsi?",
        options: ["Sulcus intertubercularis", "Sulcus nervi radialis", "Tuberositas deltoidea", "Sulcus bicipitalis"],
        answer: 1
      },
      {
        prompt: "Wat loopt door de sulcus nervi radialis?",
        options: ["A. subclavia", "N. medianus", "N. radialis", "N. musculocutaneus"],
        answer: 2
      },
      {
        prompt: "Waar ligt de tuberositas deltoidea?",
        options: ["Helemaal distaal", "Lateraal op het corpus humeri", "Mediaal op de humeruskop", "Op de trochlea"],
        answer: 1
      },
      {
        prompt: "Wat ligt boven de capitulum humeri?",
        options: ["Fossa olecrani", "Fossa radialis", "Fossa coronoidea", "Caput humeri"],
        answer: 2
      },
      {
        prompt: "Wat ligt boven de trochlea humeri?",
        options: ["Fossa radialis", "Fossa coronoidea", "Epicondylus lateralis", "Collum chirurgicum"],
        answer: 1
      },
      {
        prompt: "Waarvoor dient het collum chirurgicum als klinisch punt?",
        options: ["Breukgevoelig gebied", "Aanhechting triceps", "Gewrichtsvlak", "Biceps-aanhechting"],
        answer: 0
      },
      {
        prompt: "Welke zijde heeft een grotere epicondylus?",
        options: ["Lateraal", "Mediaal", "Distaal", "Craniaal"],
        answer: 1
      },
      {
        prompt: "Wat ligt aan de voorzijde van de humerus distaal?",
        options: ["Fossa olecrani", "Fossa radialis & coronoidea", "Tuberculum majus", "Collum anatomicum"],
        answer: 1
      },
      {
        prompt: "Welke structuur maakt pronatie-supinatie mogelijk?",
        options: ["Capitulum humeri", "Trochlea humeri", "Tuberculum minus", "Epicondylus"],
        answer: 0
      },
      {
        prompt: "Wat is de aanhechtingsplaats voor de m. deltoideus?",
        options: ["Tuberositas deltoidea", "Tuberculum majus", "Trochlea humeri", "Sulcus intertubercularis"],
        answer: 0
      },
      {
        prompt: "Wat ligt posterieur op de humerus?",
        options: ["Fossa radialis", "Tuberculum minus", "Sulcus nervi radialis", "Capitulum humeri"],
        answer: 2
      }
    ]
  },
  {
    id: "ulna",
    title: "Quiz 12 — Ulna",
    level: "Moeilijk • 20 vragen",
    questions: [
      {
        prompt: "Hoe heet het grote proximale uitsteeksel van de ulna dat de punt van de elleboog vormt?",
        options: ["Processus coronoideus", "Tuberculum ulnare", "Olecranon", "Capitulum"],
        answer: 2
      },
      {
        prompt: "Hoe heet de gewrichtsuitsparing op de ulna die met de trochlea humeri articuleert?",
        options: ["Incisura radialis", "Incisura trochlearis", "Fovea ulnaris", "Facies trochlearis"],
        answer: 1
      },
      {
        prompt: "Waar ligt de incisura trochlearis?",
        options: ["Distaal", "Proximaal", "Lateraal", "Op de radius"],
        answer: 1
      },
      {
        prompt: "Welke structuur ligt onder de incisura trochlearis?",
        options: ["Olecranon", "Processus coronoideus", "Caput ulnae", "Incisura radialis"],
        answer: 1
      },
      {
        prompt: "Hoe heet het kleine gewrichtsvlak voor de radius op de ulna?",
        options: ["Processus styloideus", "Incisura radialis", "Fovea capitis", "Sulcus radialis"],
        answer: 1
      },
      {
        prompt: "Wat vormt de achterzijde van de elleboog?",
        options: ["Processus styloideus", "Tuberositas ulnae", "Olecranon", "Collum ulnae"],
        answer: 2
      },
      {
        prompt: "Hoe heet de knokkelvormige verdikking aan het distale einde?",
        options: ["Caput ulnae", "Collum ulnare", "Fovea carpalis", "Tuberositas ulnaris"],
        answer: 0
      },
      {
        prompt: "Welk uitsteeksel ligt distaal aan de ulna?",
        options: ["Trochlea", "Processus styloideus", "Tuberositas coronoidea", "Facies carpalis"],
        answer: 1
      },
      {
        prompt: "Wat articuleert met het caput ulnae?",
        options: ["Humerus", "Radius", "Carpus direct", "Scapula"],
        answer: 1
      },
      {
        prompt: "Hoe heet de aanhechtingsplaats onder de processus coronoideus?",
        options: ["Tuberositas ulnae", "Tuberositas radii", "Tuberculum carpale", "Groove ulnaris"],
        answer: 0
      },
      {
        prompt: "Wat is de vorm van de ulna?",
        options: ["Rechte buis", "S-vormig", "Licht gekromde pijp", "Volledig plat"],
        answer: 2
      },
      {
        prompt: "Welke zijde van de onderarm vormt de ulna?",
        options: ["Lateraal (duimzijde)", "Mediaal (pinkzijde)", "Craniaal", "Caudaal"],
        answer: 1
      },
      {
        prompt: "Welke structuur articuleert met het olecranon?",
        options: ["Fossa olecrani (humerus)", "Fossa radialis", "Capitulum", "Collum humeri"],
        answer: 0
      },
      {
        prompt: "Wat articuleert met de incisura radialis?",
        options: ["Caput humeri", "Caput radii", "Trochlea humeri", "Carpus"],
        answer: 1
      },
      {
        prompt: "Welke structuur zorgt voor de belangrijkste aanhechting van de m. brachialis?",
        options: ["Processus styloideus", "Tuberculum ulnare", "Tuberositas ulnae", "Collum ulnae"],
        answer: 2
      },
      {
        prompt: "Welk bot is langer, ulna of radius?",
        options: ["Ulna", "Radius", "Beide even lang", "Verschilt per persoon sterk"],
        answer: 0
      },
      {
        prompt: "Wat vormt het proximaal deel van het ellebooggewricht?",
        options: ["Processus styloideus", "Olecranon + incisura trochlearis", "Caput ulnae", "Incisura radialis"],
        answer: 1
      },
      {
        prompt: "Hoe heet het eindpunt van de ulna aan de pols?",
        options: ["Processus trochlearis", "Processus styloideus ulnae", "Olecranon", "Tuberculum carpale"],
        answer: 1
      },
      {
        prompt: "Waar bevindt zich de incisura radialis op de ulna?",
        options: ["Mediale zijde", "Laterale zijde", "Dorsale zijde", "Distaal"],
        answer: 1
      },
      {
        prompt: "Wat is de functie van de ulna in de onderarm?",
        options: ["Draaias voor pronatie-supinatie", "Hoofdondersteuning van pols", "Zorgt voor flexie-extensie elleboog", "Draagt bovenarmgewicht"],
        answer: 2
      }
    ]
  },
  {
    id: "radius",
    title: "Quiz 13 — Radius",
    level: "Moeilijk • 20 vragen",
    questions: [
      {
        prompt: "Hoe heet het bovenste uiteinde van de radius?",
        options: ["Caput radii", "Collum radii", "Tuberositas radii", "Facies radialis"],
        answer: 0
      },
      {
        prompt: "Welk deel articuleert met het capitulum humeri?",
        options: ["Collum radii", "Caput radii", "Processus styloideus radii", "Facies carpalis"],
        answer: 1
      },
      {
        prompt: "Hoe heet het kleine nekje net onder de radiuskop?",
        options: ["Fovea radii", "Collum radii", "Fossa radialis", "Circumferentia radii"],
        answer: 1
      },
      {
        prompt: "Wat ligt er mediaal van de proximale radius?",
        options: ["Tuberositas radii", "Tuberculum dorsale", "Incisura trochlearis", "Processus styloideus"],
        answer: 0
      },
      {
        prompt: "Wat hecht aan op de tuberositas radii?",
        options: ["Biceps brachii", "Triceps brachii", "Brachialis", "Pronator teres"],
        answer: 0
      },
      {
        prompt: "Hoe heet het distale uitsteeksel dat je aan de duimzijde voelt?",
        options: ["Olecranon", "Tuberositas radii", "Processus styloideus radii", "Caput radii"],
        answer: 2
      },
      {
        prompt: "Wat articuleert er met de incisura ulnaris van de radius?",
        options: ["Caput humeri", "Olecranon", "Caput ulnae", "Carpus"],
        answer: 2
      },
      {
        prompt: "De radius ligt in anatomische houding…",
        options: ["Pinkzijde", "Mediaal", "Duimzijde", "Dorsaal"],
        answer: 2
      },
      {
        prompt: "Welke beweging maakt de radius mogelijk rond de ulna?",
        options: ["Flexie", "Extensie", "Pronatie en supinatie", "Circumductie"],
        answer: 2
      },
      {
        prompt: "Wat ligt op de distale voorzijde van de radius?",
        options: ["Fovea carpalis", "Facies articularis carpalis", "Sulcus radialis", "Trochlea radii"],
        answer: 1
      },
      {
        prompt: "Met welke carpale beenderen articuleert de radius?",
        options: ["Pisiforme & triquetrum", "Scaphoideum & lunatum", "Trapezium & hamatum", "Capitatum & trapezoideum"],
        answer: 1
      },
      {
        prompt: "Hoe heet de achterste groef waar pezen doorheen lopen?",
        options: ["Tuberositas dorsalis", "Tuberculum dorsale", "Crista radialis", "Sulcus radii posterior"],
        answer: 1
      },
      {
        prompt: "Waarvoor dient het tuberculum dorsale van Lister?",
        options: ["Aanhechting carpalisch ligament", "Katrol voor extensorpezen", "Aanhechting bicepspees", "Stabilisator van elleboog"],
        answer: 1
      },
      {
        prompt: "Wat loopt door de incisura ulnaris van de radius?",
        options: ["Fovea capitis", "Olecranon", "Caput ulnae", "Tuberositas ulnae"],
        answer: 2
      },
      {
        prompt: "Welke zijde van het distale radiusvlak is breder?",
        options: ["Dorsaal", "Ventraal", "Lateraal", "Mediaal"],
        answer: 2
      },
      {
        prompt: "Wat is de vorm van de caput radii?",
        options: ["Zadelvormig", "Schotelvormig", "Ovaal", "Hartvormig"],
        answer: 1
      },
      {
        prompt: "Welke structuur articuleert met de humerus bij flexie-extensie?",
        options: ["Tuberositas radii", "Caput radii", "Circumferentia articularis", "Fovea capitis radii"],
        answer: 3
      },
      {
        prompt: "Waar bevindt zich de tuberositas radii?",
        options: ["Lateraal", "Dorsaal", "Mediaal", "Distaal"],
        answer: 2
      },
      {
        prompt: "Waar ligt de circumferentia articularis radii?",
        options: ["Rond de radiuskop", "Op de distale rand", "Op de radiusbasis", "Bij de tuberositas"],
        answer: 0
      },
      {
        prompt: "Wat vormt samen met de ulna het ellebooggewricht?",
        options: ["Caput radii", "Trochlea en capitulum", "Scaphoideum", "Glenoid"],
        answer: 1
      }
    ]
  },
  {
    id: "carpi",
    title: "Quiz 14 — Ossa carpi",
    level: "Moeilijk • 20 vragen",
    questions: [
      {
        prompt: "Hoeveel handwortelbeentjes heeft een mens?",
        options: ["6", "7", "8", "9"],
        answer: 2
      },
      {
        prompt: "In welke volgorde liggen de proximale carpalia van radiaal naar ulna?",
        options: [
          "Trapezium – trapezoideum – capitatum – hamatum",
          "Pisiforme – triquetrum – lunatum – scaphoideum",
          "Scaphoideum – lunatum – triquetrum – pisiforme",
          "Lunatum – scaphoideum – pisiforme – hamatum"
        ],
        answer: 2
      },
      {
        prompt: "Welk os ligt het meest radiaal in de proximale rij?",
        options: ["Lunatum", "Scaphoideum", "Triquetrum", "Pisiforme"],
        answer: 1
      },
      {
        prompt: "Welk os ligt het meest ulnair in de proximale rij?",
        options: ["Scaphoideum", "Hamatum", "Pisiforme", "Capitatum"],
        answer: 2
      },
      {
        prompt: "Welk bot hecht aan op het os pisiforme?",
        options: ["Flexor carpi radialis", "Flexor carpi ulnaris", "Extensor digitorum", "Pronator quadratus"],
        answer: 1
      },
      {
        prompt: "Welk carpale bot articuleert met de radius?",
        options: ["Hamatus", "Capitatum", "Scaphoideum en lunatum", "Triquetrum en pisiforme"],
        answer: 2
      },
      {
        prompt: "Wat is het grootste carpale bot?",
        options: ["Trapezoideum", "Hamatum", "Capitatum", "Scaphoideum"],
        answer: 2
      },
      {
        prompt: "Welk bot heeft een haakvormig uitsteeksel (‘hamulus’)?",
        options: ["Hamatum", "Capitatum", "Trapezium", "Pisiforme"],
        answer: 0
      },
      {
        prompt: "Welk carpale bot ligt onder de duim?",
        options: ["Pisiforme", "Trapezium", "Hamatum", "Lunatum"],
        answer: 1
      },
      {
        prompt: "Welke botten vormen de distale carpale rij?",
        options: [
          "Scaphoideum – lunatum – triquetrum – pisiforme",
          "Trapezium – trapezoideum – capitatum – hamatum",
          "Radius – ulna – pisiforme – scaphoideum",
          "Capitatum – lunatum – pisiforme – trapezoideum"
        ],
        answer: 1
      },
      {
        prompt: "Welk bot vormt een belangrijk deel van het ‘snuff box’-gebied?",
        options: ["Triquetrum", "Capitatum", "Scaphoideum", "Lunatum"],
        answer: 2
      },
      {
        prompt: "Welk carpale bot luxeert het snelst?",
        options: ["Capitatum", "Scaphoideum", "Lunatum", "Trapezoideum"],
        answer: 2
      },
      {
        prompt: "Welk bot ligt direct ventraal op het triquetrum?",
        options: ["Pisiforme", "Lunatum", "Capitatum", "Trapezium"],
        answer: 0
      },
      {
        prompt: "Wat articuleert met het trapezium?",
        options: ["Ulna", "Duimmetacarpale (MC I)", "Radius", "Hamatum"],
        answer: 1
      },
      {
        prompt: "Welk bot ligt centraal in de distale rij?",
        options: ["Trapezium", "Trapezoideum", "Capitatum", "Hamatum"],
        answer: 2
      },
      {
        prompt: "Wat is de functie van het hamulus ossis hamati?",
        options: ["Aanhechting biceps", "Beschermen van zenuwen en pezen", "Hechting aan de ulna", "Ondersteunen van duimoppositie"],
        answer: 1
      },
      {
        prompt: "Wat is het kleinste carpale bot?",
        options: ["Pisiforme", "Scaphoideum", "Lunatum", "Trapezium"],
        answer: 0
      },
      {
        prompt: "Welk bot ligt tussen scaphoideum en capitatum?",
        options: ["Lunatum", "Pisiforme", "Hamatum", "Trapezoideum"],
        answer: 0
      },
      {
        prompt: "Wat articuleert met het hamatum aan de laterale zijde?",
        options: ["Trapezium", "Pisiforme", "Capitatum", "Scaphoideum"],
        answer: 2
      },
      {
        prompt: "Met welke twee botten articuleert het triquetrum?",
        options: ["Scaphoideum & trapezium", "Lunatum & pisiforme", "Radius & ulna", "Trapezoideum & capitatum"],
        answer: 1
      }
    ]
  },
  {
    id: "os-coxae",
    title: "Quiz 15 — Os coxae",
    level: "Moeilijk • 20 vragen",
    questions: [
      {
        prompt: "Uit welke drie botstukken bestaat het os coxae bij kinderen?",
        options: ["Ilium – sacrum – pubis", "Ilium – ischium – pubis", "Ilium – femur – pubis", "Ilium – ischium – coccyx"],
        answer: 1
      },
      {
        prompt: "Waar komen deze drie botten samen?",
        options: ["Fossa iliaca", "Ala ossis ilii", "Acetabulum", "Foramen obturatum"],
        answer: 2
      },
      {
        prompt: "Hoe heet de grote holte waar de femurkop in past?",
        options: ["Fovea capitis", "Cavitas glenoidalis", "Acetabulum", "Fossa iliaca"],
        answer: 2
      },
      {
        prompt: "Hoe heet het grote gat in het os coxae?",
        options: ["Foramen vertebrale", "Foramen obturatum", "Foramen magnum", "Foramen ischiadicum majus"],
        answer: 1
      },
      {
        prompt: "Hoe heet de bovenrand van het ilium?",
        options: ["Crista iliaca", "Margo superioris", "Linea arcuata", "Arcus iliacus"],
        answer: 0
      },
      {
        prompt: "Hoe heet de voorste bovenste uitsteeksel van het ilium?",
        options: ["AIIS", "PIIS", "ASIS", "PSIS"],
        answer: 2
      },
      {
        prompt: "Wat is de afkorting voor ‘anterior inferior iliac spine’?",
        options: ["ASIS", "AIIS", "PIIS", "PSIS"],
        answer: 1
      },
      {
        prompt: "Welke structuur voel je achteraan bovenaan op je bekken?",
        options: ["ASIS", "PSIS", "Ischiale knobbel", "Acetabular rim"],
        answer: 1
      },
      {
        prompt: "Waar ligt de tuber ischiadicum?",
        options: ["Onderkant van het ischium", "Voorzijde van de pubis", "Laterale zijde van het ilium", "Bovenrand van het acetabulum"],
        answer: 0
      },
      {
        prompt: "Wat vormt de zitknobbel?",
        options: ["Tuber pubicum", "Tuber ischiadicum", "Crista iliaca", "Spina iliaca posterior"],
        answer: 1
      },
      {
        prompt: "Hoe heet de scherpe rand aan de binnenzijde van het bekken?",
        options: ["Linea intertrochanterica", "Linea arcuata", "Linea glutea", "Linea terminalis"],
        answer: 1
      },
      {
        prompt: "Welke structuur vormt de bovenrand van het acetabulum?",
        options: ["Limbus acetabuli", "Fovea capitis", "Ala ossis ilii", "Incisura ischiadica major"],
        answer: 0
      },
      {
        prompt: "Hoe heet de diepe inkeping achteraan het os coxae?",
        options: ["Incisura acetabuli", "Incisura ischiadica major", "Incisura iliaca", "Incisura obturatoria"],
        answer: 1
      },
      {
        prompt: "Welk ligament passeert door de incisura ischiadica major?",
        options: ["Lig. inguinale", "Lig. sacrotuberale", "Lig. capitis femoris", "Lig. pubicum"],
        answer: 1
      },
      {
        prompt: "Hoe heet het voorste deel van het os coxae?",
        options: ["Ilium", "Pubis", "Sacrum", "Femur"],
        answer: 1
      },
      {
        prompt: "Hoe heet de verbinding tussen beide pubisbeenderen?",
        options: ["Symphysis pubica", "Articulatio sacroiliaca", "Fissura pelvis", "Linea terminalis"],
        answer: 0
      },
      {
        prompt: "Welke zijde van het os coxae is bol en naar buiten gericht?",
        options: ["Facies pelvina", "Facies glutea", "Facies obturatoria", "Facies sacralis"],
        answer: 1
      },
      {
        prompt: "Hoe heet het kleine uitsteeksel boven de acetabulumrand?",
        options: ["Spina ischiadica", "Spina iliaca anterior superior", "Tuberculum pubicum", "Eminentia iliopubica"],
        answer: 3
      },
      {
        prompt: "Wat ligt posterieur van het acetabulum?",
        options: ["Foramen obturatum", "Incisura ischiadica major", "Symfyse", "Pubisramus"],
        answer: 1
      },
      {
        prompt: "Waar ligt de facies lunata?",
        options: ["Op de femurkop", "Binnenin het acetabulum", "Op de crista iliaca", "Aan de voorzijde van de pubis"],
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
    items: ["atlas", "axis", "cervicaal", "thoracaal", "lumbaal", "sacrum", "coccygis", "costae", "sternum"]
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
