// Catalogue VCRB — exporté depuis l'éditeur local
const vehicles = [
  {
    "id": 9,
    "nom": "Ford Tourneo Connect TPMR",
    "marque": "Ford",
    "photoHover": "images/tpmr court fiche.jpg",
    "categorie": "TPMR",
    "energie": "Essence",
    "puissance": "115CV",
    "places": 6,
    "prix": "46.144€ aménagé",
    "photo": "images/grand-tpmr-connect.jpg",
    "pdf": "docs/Croix-Rouge Transport PMR - Tourneo Connect L1 19-11-2026.pdf",
    "amenagementPdf": "pdfs/ACM - OFFRE aménagement PMR Connect L1.pdf",
    "description": "Version courte TPMR.",
    "modeleExact": "FORD V761 Tourneo Connect Titanium 1.5 EcoBoost 115 PS A7",
    "equipements": [
      "ABS / ESP / airbags frontaux et latéraux",
      "Caméra de recul",
      "Radars avant et arrière",
      "Détecteur d’angle mort (BLIS)",
      "Climatisation",
      "GPS / multimédia / Bluetooth",
      "Allumage automatique des feux",
      "Essuie-glaces automatiques",
      "Boîte automatique",
      "Sièges réglables en hauteur"
    ],
    "avantages": [
      "Lettrage compris et intégré dans la commande",
      "Transport du véhicule vers la maison Croix-Rouge compris",
      "Maintien en stock d’un véhicule prêt à être aménagé"
    ],
    "garage": {
      "nom": "Spirlet Automobiles (Ford)",
      "adresse": "Rue Haroun Tazieff 10, 4032 Chênée",
      "telephone": "04/344.01.01",
      "email": "info@spirletautomobiles.be",
      "contact": "Christophe VAN DER KELEN — 04/247.76.64 — christophe.vanderkelen@spirletautomobiles.be"
    }
  },
  {
    "id": 10,
    "nom": "Ford Grand Tourneo Connect TPMR",
    "marque": "Ford",
    "photoHover": "images/tpmr long fiche.jpg",
    "categorie": "TPMR",
    "energie": "Essence",
    "puissance": "115CV",
    "places": 7,
    "prix": "46.786€ aménagé",
    "photo": "images/tpmr-connect.jpg",
    "pdf": "docs/Croix-Rouge Transport PMR - Tourneo Connect L2 19-11-2026.pdf",
    "amenagementPdf": "pdfs/ACM - OFFRE aménagement PMR Connect L2.pdf",
    "description": "Version longue TPMR.",
    "modeleExact": "FORD V761 Grand Tourneo Connect Titanium 1.5 EcoBoost 115 PS A7",
    "equipements": [
      "ABS / ESP / airbags frontaux et latéraux",
      "Caméra de recul",
      "Radars avant et arrière",
      "Détecteur d’angle mort (BLIS)",
      "Climatisation",
      "GPS / multimédia / Bluetooth",
      "Allumage automatique des feux",
      "Essuie-glaces automatiques",
      "Boîte automatique",
      "Sièges réglables en hauteur"
    ],
    "avantages": [
      "Lettrage compris et intégré dans la commande",
      "Transport du véhicule vers la maison Croix-Rouge compris",
      "Maintien en stock de 2 véhicules aménagés et de 2 véhicules prêts à être aménagés"
    ],
    "garage": {
      "nom": "Spirlet Automobiles (Ford)",
      "adresse": "Rue Haroun Tazieff 10, 4032 Chênée",
      "telephone": "04/344.01.01",
      "email": "info@spirletautomobiles.be",
      "contact": "Christophe VAN DER KELEN — 04/247.76.64 — christophe.vanderkelen@spirletautomobiles.be"
    }
  },
  {
    "id": 6,
    "nom": "Renault Clio Full Hybrid E-Tech 160",
    "marque": "Renault",
    "categorie": "Service",
    "energie": "Hybride",
    "puissance": "160CV",
    "places": 5,
    "prix": "25582€",
    "photo": "images/clio-hybrid.jpg",
    "pdf": "docs/Renault clio full hybrid.pdf",
    "description": "Citadine hybride.",
    "modeleExact": "Renault New Clio Techno Full Hybrid E-Tech 160 hp",
    "equipements": [
      "Pack attelage",
      "Boîte automatique",
      "Détecteur d’angle mort",
      "Caméra de recul",
      "Radars avant et arrière",
      "Pack Access & Navigation"
    ],
    "avantages": [],
    "garage": {
      "nom": "Renard & Fils",
      "adresse": "Avenue Provinciale 51, 1341 Ottignies",
      "telephone": "010/620.400",
      "email": "damien@renardetfils.be",
      "contact": "Damien Renard — 010/620.405"
    }
  },
  {
    "id": 5,
    "nom": "Renault Clio TCe 115 Techno",
    "marque": "Renault",
    "categorie": "Service",
    "energie": "Essence",
    "puissance": "115CV",
    "places": 5,
    "prix": "23553€",
    "photo": "images/clio-essence.jpg",
    "pdf": "docs/Renault clio essence.pdf",
    "description": "Citadine essence.",
    "modeleExact": "Renault New Clio Techno TCe 115 EDC",
    "equipements": [
      "Pack attelage",
      "Boîte automatique",
      "Détecteur d’angle mort",
      "Caméra de recul",
      "Radars avant et arrière",
      "Pack Access & Navigation"
    ],
    "avantages": [],
    "garage": {
      "nom": "Renard & Fils",
      "adresse": "Avenue Provinciale 51, 1341 Ottignies",
      "telephone": "010/620.400",
      "email": "damien@renardetfils.be",
      "contact": "Damien Renard — 010/620.405"
    }
  },
  {
    "id": 24,
    "nom": "Peugeot e-2008 Allure",
    "marque": "Peugeot",
    "photoHover": "images/Fiche 2008 Allure electrique.jpg",
    "categorie": "Service",
    "energie": "Electrique",
    "puissance": "156CV",
    "places": 5,
    "atn": 122,
    "loyer": 725,
    "prix": "31059€",
    "coffre": 434,
    "photo": "images/peugeot-e2008.jpg",
    "pdf": "docs/peugeot-e2008.pdf",
    "description": "SUV compact électrique.",
    "modeleExact": "Peugeot 2008 Allure électrique 156 ch (115 kW)",
    "equipements": [
      "Visiopark 2",
      "Pack Navigation",
      "Recharge smartphone sans fil (15 W)",
      "Peugeot i-Connect Advanced (navigation 3D connectée)",
      "Crochet d’attelage"
    ],
    "avantages": [],
    "garage": {
      "nom": "Stellantis &You Grimbergen",
      "adresse": "Sint-Annalaan 273, 1853 Strombeek-Bever",
      "telephone": "02/267.31.99",
      "email": "frederic.schulte@stellantis.com",
      "contact": "Frédéric Schulte — 0473/82.58.59"
    }
  },
  {
    "id": 22,
    "nom": "Ford Tourneo Courier Titanium BEV",
    "marque": "Ford",
    "photoHover": "images/Fiche Ford tourneo V769 courier electrique.jpg",
    "categorie": "Service",
    "energie": "Electrique",
    "autonomie": 288,
    "puissance": "136CV",
    "places": 5,
    "prix": "31.722€",
    "photo": "images/tourneo-courier.jpg",
    "pdf": "docs/Croix-Rouge Transport pers - Tourneo E-Courier 13-11-2026 1.pdf",
    "description": "Version électrique.",
    "modeleExact": "FORD V769 Tourneo Courier Titanium BEV 43 kWh 136 ch / 100 kW A1",
    "equipements": [
      "Équipements de sécurité complets",
      "Caméra et capteurs avant/arrière disponibles",
      "Détecteur d’angle mort",
      "Climatisation automatique Titanium",
      "Navigation et CarPlay / Android Auto",
      "Feux et essuie-glaces automatiques",
      "Transmission automatique A1",
      "Sellerie tissu",
      "Réglages des sièges 6/4 directions",
      "USB avant/arrière et connectivité smartphone"
    ],
    "avantages": [
      "Flocage réalisé chez Ford via Vektor",
      "Dimensions extérieures (L × l × H, hors rétroviseurs) : 4,337 m × 1,800 m × 1,836 m",
      "Empattement : 2,692 m ; longueur utile : 1 492 mm ; PTAC : 2 000 kg"
    ],
    "garage": {
      "nom": "Spirlet Automobiles (Ford)",
      "adresse": "Rue Haroun Tazieff 10, 4032 Chênée",
      "telephone": "04/344.01.01",
      "email": "info@spirletautomobiles.be",
      "contact": "Christophe VAN DER KELEN — 04/247.76.64 — christophe.vanderkelen@spirletautomobiles.be"
    }
  },
  {
    "id": 8,
    "nom": "Peugeot 308SW",
    "marque": "Peugeot",
    "categorie": "Service",
    "energie": "Electrique",
    "autonomie": 443,
    "puissance": "151CV",
    "places": 5,
    "prix": "36566€",
    "photo": "images/peugeot308SW.jpg",
    "pdf": "docs/Peugeot 308SW BEV.pdf",
    "description": "Version électrique.",
    "modeleExact": "",
    "equipements": [],
    "avantages": [],
    "garage": {
      "nom": "",
      "adresse": "",
      "telephone": "",
      "email": "",
      "contact": ""
    }
  },
  {
    "id": 11,
    "nom": "Ford Tourneo Courier Titanium 1.0 Ecoboost",
    "marque": "Ford",
    "categorie": "Transport personnes",
    "energie": "Essence",
    "puissance": 125,
    "places": 5,
    "prix": "25319€",
    "photo": "images/tourneo-courier.jpg",
    "pdf": "docs/Croix-Rouge Transport pers - Tourneo E-Courier Essence bte auto 13-11-2026 1.pdf",
    "description": "Ludospace compact.",
    "modeleExact": "FORD V769 Tourneo Courier Titanium 1.0 EcoBoost 125 ch / 92 kW A7",
    "equipements": [
      "Équipements de sécurité complets",
      "Caméra et capteurs avant/arrière disponibles",
      "Détecteur d’angle mort",
      "Climatisation automatique Titanium",
      "Navigation et CarPlay / Android Auto",
      "Feux et essuie-glaces automatiques",
      "Transmission automatique A1",
      "Sellerie tissu",
      "Réglages des sièges 6/4 directions",
      "USB avant/arrière et connectivité smartphone"
    ],
    "avantages": [
      "Flocage réalisé chez Ford via Vektor",
      "Dimensions extérieures (L × l × H, hors rétroviseurs) : 4,337 m × 1,800 m × 1,836 m",
      "Empattement : 2,692 m ; longueur utile : 1 492 mm ; PTAC : 2 000 kg"
    ],
    "garage": {
      "nom": "Spirlet Automobiles (Ford)",
      "adresse": "Rue Haroun Tazieff 10, 4032 Chênée",
      "telephone": "04/344.01.01",
      "email": "info@spirletautomobiles.be",
      "contact": "Christophe VAN DER KELEN — 04/247.76.64 — christophe.vanderkelen@spirletautomobiles.be"
    }
  },
  {
    "id": 12,
    "nom": "Ford Tourneo Courier Titanium BEV",
    "marque": "Ford",
    "categorie": "Transport personnes",
    "energie": "Electrique",
    "autonomie": 288,
    "puissance": 136,
    "places": 5,
    "prix": "31.722€",
    "photo": "images/tourneo-courier.jpg",
    "pdf": "docs/Croix-Rouge Transport pers - Tourneo E-Courier 13-11-2026 1.pdf",
    "description": "Version électrique.",
    "modeleExact": "FORD V769 Tourneo Courier Titanium BEV 43 kWh 136 ch / 100 kW A1",
    "equipements": [
      "Équipements de sécurité complets",
      "Caméra et capteurs avant/arrière disponibles",
      "Détecteur d’angle mort",
      "Climatisation automatique Titanium",
      "Navigation et CarPlay / Android Auto",
      "Feux et essuie-glaces automatiques",
      "Transmission automatique A1",
      "Sellerie tissu",
      "Réglages des sièges 6/4 directions",
      "USB avant/arrière et connectivité smartphone"
    ],
    "avantages": [
      "Flocage réalisé chez Ford via Vektor",
      "Dimensions extérieures (L × l × H, hors rétroviseurs) : 4,337 m × 1,800 m × 1,836 m",
      "Empattement : 2,692 m ; longueur utile : 1 492 mm ; PTAC : 2 000 kg"
    ],
    "garage": {
      "nom": "Spirlet Automobiles (Ford)",
      "adresse": "Rue Haroun Tazieff 10, 4032 Chênée",
      "telephone": "04/344.01.01",
      "email": "info@spirletautomobiles.be",
      "contact": "Christophe VAN DER KELEN — 04/247.76.64 — christophe.vanderkelen@spirletautomobiles.be"
    }
  },
  {
    "id": 14,
    "nom": "Ford Transit Custom Kombi 320L Trend",
    "marque": "Ford",
    "categorie": "Transport personnes",
    "energie": "Diesel",
    "puissance": "136CV",
    "places": 9,
    "prix": "35070€",
    "photo": "images/transit-custom-320l.jpg",
    "pdf": "docs/FORD Transit Custom V710 KOMBI 320L TREND 2.0TDI.pdf",
    "description": "Version longue.",
    "modeleExact": "FORD Transit Custom V710 Kombi 320L Trend 2.0 TDCi 136 ch / 100 kW A8 FWD LWB",
    "equipements": [
      "ABS / ESP et airbags",
      "Caméra 360° et aide au stationnement",
      "Détecteur d’angle mort et alerte trafic transversal",
      "Climatisation automatique",
      "Navigation et Bluetooth",
      "Feux et essuie-glaces automatiques",
      "Boîte automatique A8",
      "Sellerie vinyle",
      "Réglages du siège conducteur",
      "Attelage fixe inclus"
    ],
    "avantages": [
      "Flocage réalisé chez Ford via Vektor",
      "Dimensions extérieures (L × l × H, hors rétroviseurs) : 5,45 m × 2,28 m × 1,96 m",
      "Empattement : 3,50 m ; longueur utile : 3 002 mm ; PTAC : 3 225 kg"
    ],
    "garage": {
      "nom": "Spirlet Automobiles (Ford)",
      "adresse": "Rue Haroun Tazieff 10, 4032 Chênée",
      "telephone": "04/344.01.01",
      "email": "info@spirletautomobiles.be",
      "contact": "Christophe VAN DER KELEN — 04/247.76.64 — christophe.vanderkelen@spirletautomobiles.be"
    }
  },
  {
    "id": 15,
    "nom": "Ford Transit Custom Kombi PHEV",
    "marque": "Ford",
    "categorie": "Transport personnes",
    "energie": "Hybride rechargeable",
    "puissance": "232CV",
    "places": 9,
    "prix": "39.078€",
    "photo": "images/transit-custom-320l.jpg",
    "pdf": "docs/Croix-Rouge Transport pers - Minibus Custom L2 PHEV 13-11-2026 1.pdf",
    "description": "Version hybride rechargeable.",
    "modeleExact": "FORD Transit Custom V710 Kombi M1 340L Trend PHEV 2.5 232 ch / 171 kW",
    "equipements": [
      "ABS / ESP et airbags",
      "Caméra 360° et aide au stationnement",
      "Détecteur d’angle mort et alerte trafic transversal",
      "Climatisation automatique",
      "Navigation et Bluetooth",
      "Feux et essuie-glaces automatiques",
      "Boîte automatique A8",
      "Sellerie vinyle",
      "Réglages du siège conducteur",
      "Attelage fixe inclus"
    ],
    "avantages": [
      "Flocage réalisé chez Ford via Vektor",
      "Dimensions extérieures (L × l × H, hors rétroviseurs) : 5,45 m × 2,00–2,03 m × 1,96 m",
      "Empattement : 3,50 m ; longueur utile : 3 047 mm ; PTAC : ≈ 3 400 kg"
    ],
    "garage": {
      "nom": "Spirlet Automobiles (Ford)",
      "adresse": "Rue Haroun Tazieff 10, 4032 Chênée",
      "telephone": "04/344.01.01",
      "email": "info@spirletautomobiles.be",
      "contact": "Christophe VAN DER KELEN — 04/247.76.64 — christophe.vanderkelen@spirletautomobiles.be"
    }
  },
  {
    "id": 17,
    "nom": "Volkswagen Caddy Cargo Maxi",
    "marque": "Volkswagen",
    "categorie": "Transport matériel",
    "energie": "Essence",
    "puissance": 115,
    "places": 2,
    "prix": 28130,
    "photo": "images/caddy-cargo.jpg",
    "pdf": "docs/caddy-cargo.pdf",
    "description": "Utilitaire compact.",
    "modeleExact": "Volkswagen Caddy Cargo Maxi 1.5 TSI DSG 115 ch (85 kW)",
    "equipements": [
      "Porte latérale coulissante droite dans le compartiment de chargement",
      "Portes arrière battantes sans vitres, division asymétrique",
      "Allumage automatique des projecteurs et feux de jour",
      "Start/Stop avec récupération d’énergie au freinage",
      "Écran tactile couleur 10 pouces",
      "Deux ports USB-C à l’avant",
      "Cloison de séparation haute sans fenêtre",
      "Revêtement de sol en caoutchouc dans le compartiment de charge"
    ],
    "avantages": [
      "Dimensions extérieures (L × l × H, hors rétroviseurs) : 4,853 m × 1,855 m × 1,860 m",
      "Empattement : 2,970 m ; longueur utile : 2 150 mm ; PTAC : 2 250 kg"
    ],
    "garage": {
      "nom": "D’Ieteren Auto — Public Affairs",
      "adresse": "Arthur De Coninckstraat 3, 3071 Kortenberg",
      "telephone": "",
      "email": "delphine.draps@dieteren.be",
      "contact": "Delphine Draps"
    }
  },
  {
    "id": 20,
    "nom": "Ford Transit 310M L2 Trend",
    "marque": "Ford",
    "categorie": "Transport matériel",
    "energie": "Diesel",
    "puissance": 130,
    "places": 3,
    "prix": "33.487€",
    "photo": "images/transit-l2.jpg",
    "pdf": "docs/Croix-Rouge Transport matos - Transit 2T L2H2 DIESEL 13-11-2026.pdf",
    "description": "Fourgon L2.",
    "modeleExact": "FORD Transit 2T MCA Fourgon 350L Trend 2.0 TD 130ch / 96kW N1 A8 FWD 2.0 TD 130ch /  96kW N1",
    "equipements": [
      "Système d’atténuation de collision",
      "Régulateur adaptatif avec Lane Centering et Stop & Go",
      "Aide au maintien dans la voie",
      "Reconnaissance des panneaux de vitesse",
      "Capteurs de stationnement arrière",
      "Assistance au freinage en marche arrière",
      "Projecteur LED au-dessus des portes arrière",
      "Système de navigation",
      "Détection d’obstacles dans les angles morts",
      "Caméra 360°"
    ],
    "avantages": [
      "Dimensions extérieures (L × l × H, hors rétroviseurs) : 5,531 m × 2,059 m × 2,49 m",
      "Empattement : 3,30 m ; longueur utile : 3 044 mm ; PTAC : 3 100 kg"
    ],
    "garage": {
      "nom": "Spirlet Automobiles (Ford)",
      "adresse": "Rue Haroun Tazieff 10, 4032 Chênée",
      "telephone": "04/344.01.01",
      "email": "info@spirletautomobiles.be",
      "contact": "Christophe VAN DER KELEN — 04/247.76.64 — christophe.vanderkelen@spirletautomobiles.be"
    }
  },
  {
    "id": 21,
    "nom": "Ford Transit 350L L3 Trend",
    "marque": "Ford",
    "categorie": "Transport matériel",
    "energie": "Diesel",
    "puissance": 130,
    "places": 3,
    "prix": "34.793€",
    "photo": "images/transit-l3.jpg",
    "pdf": "docs/Croix-Rouge Transport matos - Transit 2T L3H3 DIESEL 13-11-2026.pdf",
    "description": "Fourgon L3.",
    "modeleExact": "FORD Transit 2T MCA 350L Fourgon tôlé L3 Trend A8 2.0 TD 130 ch / 96 kW",
    "equipements": [
      "Système d’atténuation de collision",
      "Régulateur adaptatif avec Lane Centering et Stop & Go",
      "Aide au maintien dans la voie",
      "Reconnaissance des panneaux de vitesse",
      "Capteurs de stationnement arrière",
      "Assistance au freinage en marche arrière",
      "Projecteur LED au-dessus des portes arrière",
      "Système de navigation",
      "Détection d’obstacles dans les angles morts",
      "Caméra 360°"
    ],
    "avantages": [
      "Dimensions extérieures (L × l × H, hors rétroviseurs) : 5,981 m × 2,059 m × 2,55 m",
      "Empattement : 3,75 m ; longueur utile : 3 494 mm ; PTAC : 3 500 kg"
    ],
    "garage": {
      "nom": "Spirlet Automobiles (Ford)",
      "adresse": "Rue Haroun Tazieff 10, 4032 Chênée",
      "telephone": "04/344.01.01",
      "email": "info@spirletautomobiles.be",
      "contact": "Christophe VAN DER KELEN — 04/247.76.64 — christophe.vanderkelen@spirletautomobiles.be"
    }
  },
  {
    "id": 1,
    "nom": "Peugeot e-208 Allure",
    "marque": "Peugeot",
    "categorie": "Fonction",
    "energie": "Electrique",
    "autonomie": 398,
    "puissance": 156,
    "places": 5,
    "atn": 114,
    "loyer": 668,
    "prix": "29.289€",
    "photo": "images/peugeot-e208.jpg",
    "pdf": "docs/peugeot-e208.pdf",
    "description": "Citadine électrique de fonction.",
    "modeleExact": "Peugeot 208 Allure électrique 156 ch (115 kW)",
    "equipements": [
      "Radars avant et arrière",
      "Régulateur et limiteur de vitesse",
      "Reconnaissance des panneaux",
      "Alerte active de franchissement de ligne",
      "i-Cockpit avec combiné numérique",
      "i-Connect (Mirror Screen sans fil)"
    ],
    "avantages": [],
    "garage": {
      "nom": "Stellantis &You Grimbergen",
      "adresse": "Sint-Annalaan 273, 1853 Strombeek-Bever",
      "telephone": "02/267.31.99",
      "email": "frederic.schulte@stellantis.com",
      "contact": "Frédéric Schulte — 0473/82.58.59"
    }
  },
  {
    "id": 2,
    "nom": "Peugeot e-2008 Allure",
    "marque": "Peugeot",
    "categorie": "Fonction",
    "energie": "Electrique",
    "autonomie": 406,
    "puissance": 156,
    "places": 5,
    "atn": 122,
    "loyer": 725,
    "prix": "30.677€",
    "coffre": 434,
    "photo": "images/peugeot-e2008.jpg",
    "pdf": "docs/peugeot-e2008.pdf",
    "description": "SUV compact électrique.",
    "modeleExact": "Peugeot 2008 Allure électrique 156 ch (115 kW)",
    "equipements": [
      "Visiopark 2",
      "Pack Navigation",
      "Recharge smartphone sans fil (15 W)",
      "Peugeot i-Connect Advanced (navigation 3D connectée)"
    ],
    "avantages": [],
    "garage": {
      "nom": "Stellantis &You Grimbergen",
      "adresse": "Sint-Annalaan 273, 1853 Strombeek-Bever",
      "telephone": "02/267.31.99",
      "email": "frederic.schulte@stellantis.com",
      "contact": "Frédéric Schulte — 0473/82.58.59"
    }
  },
  {
    "id": 23,
    "nom": "Peugeot 308SW",
    "marque": "Peugeot",
    "categorie": "Fonction",
    "energie": "Electrique",
    "autonomie": 443,
    "puissance": 151,
    "places": 5,
    "prix": "36.884€",
    "photo": "images/peugeot308SW.jpg",
    "pdf": "docs/Peugeot 308SW BEV.pdf",
    "description": "Version électrique.",
    "modeleExact": "",
    "equipements": [],
    "avantages": [],
    "garage": {
      "nom": "",
      "adresse": "",
      "telephone": "",
      "email": "",
      "contact": ""
    }
  },
  {
    "id": 3,
    "nom": "Renault Scenic E-Tech Long Range",
    "marque": "Renault",
    "categorie": "Fonction",
    "energie": "Electrique",
    "autonomie": 625,
    "puissance": 220,
    "places": 5,
    "atn": 144,
    "loyer": 716,
    "prix": "40.983€",
    "photo": "images/scenic.jpg",
    "pdf": "docs/scenic.pdf",
    "description": "SUV électrique grande autonomie.",
    "modeleExact": "Renault Scenic E-Tech Electric Techno 220 hp Long Range",
    "equipements": [
      "Caméra 360° et Park Assist automatique",
      "Détection avancée des angles morts",
      "Driver Assist : régulateur adaptatif et centrage dans la voie",
      "OpenR Link 9 pouces avec Google intégré",
      "Android Auto et Apple CarPlay sans fil",
      "Navigation Arkamys",
      "Sièges avant chauffants",
      "Volant chauffant",
      "Siège conducteur électrique avec réglage lombaire et massage"
    ],
    "avantages": [],
    "garage": {
      "nom": "Renard & Fils",
      "adresse": "Avenue Provinciale 51, 1341 Ottignies",
      "telephone": "010/620.400",
      "email": "damien@renardetfils.be",
      "contact": "Damien Renard — 010/620.405"
    }
  },
  {
    "id": 4,
    "nom": "Ford Explorer Select Extended Range",
    "marque": "Ford",
    "categorie": "Fonction",
    "energie": "Electrique",
    "autonomie": 602,
    "puissance": 286,
    "places": 5,
    "atn": 154,
    "loyer": 728,
    "prix": "37.214€",
    "photo": "images/explorer.jpg",
    "pdf": "docs/Croix-Rouge Fonction - Explorer 13-11-2026 1.pdf",
    "description": "SUV électrique Ford.",
    "modeleExact": "FORD Explorer (CX740S) Select 79 kWh Extended Range RWD 286 ch / 210 kW",
    "equipements": [
      "BLIS : alerte d’angle mort et trafic transversal",
      "Régulateur adaptatif et limiteur intelligent",
      "Reconnaissance des panneaux",
      "Freinage d’urgence avec détection des piétons et cyclistes",
      "Aide au maintien dans la voie",
      "Écran central coulissant verticalement 14,6 pouces",
      "SYNC Move avec navigation connectée",
      "Apple CarPlay et Android Auto sans fil"
    ],
    "avantages": [],
    "garage": {
      "nom": "Spirlet Automobiles (Ford)",
      "adresse": "Rue Haroun Tazieff 10, 4032 Chênée",
      "telephone": "04/344.01.01",
      "email": "info@spirletautomobiles.be",
      "contact": "Christophe VAN DER KELEN — 04/247.76.64 — christophe.vanderkelen@spirletautomobiles.be"
    }
  },
  {
    "id": 25,
    "nom": "FORD Transit Custom V710 Kombi 340L Trend Electric",
    "marque": "Ford",
    "categorie": "Transport personnes",
    "energie": "Electrique",
    "modeleExact": "FORD Transit Custom V710 Kombi 340L Trend Electric 71kWh 136ch / 100kW A1 RWD  Electric 71kWh 136ch / 100kW",
    "equipements": [
      "Climatisation automatique",
      "Écran tactile central de 13 pouces",
      "Système multimédia Ford SYNC 4",
      "Modem intégré 5G",
      "Phares avant LED avec feux de route automatiques",
      "Pare-brise chauffant électrique Quickclear",
      "Caméra de recul numérique",
      "Aide au stationnement avant et arrière",
      "Régulateur de vitesse",
      "Rétroviseurs extérieurs électriques et chauffants"
    ],
    "avantages": [
      "5,45 m de long × 2,03 m de large × environ 2 m de haut."
    ],
    "garage": {
      "nom": "Spirlet Automobiles (Ford)",
      "adresse": "Rue Haroun Tazieff 10, 4032 Chênée",
      "telephone": "04/344.01.01",
      "email": "info@spirletautomobiles.be",
      "contact": "Christophe VAN DER KELEN — 04/247.76.64 — christophe.vanderkelen@spirletautomobiles.be"
    },
    "puissance": "136",
    "places": 9,
    "autonomie": 362,
    "prix": "44.438.46€",
    "description": "",
    "photo": "images/transit-custom-320l.jpg",
    "pdf": "docs/Croix-Rouge Transport pers - Minibus Custom L2 BEV 13-11-2026 1.pdf"
  },
  {
    "id": 26,
    "nom": "FORD V769 Transit Courier Fourgon",
    "marque": "Ford",
    "categorie": "Transport matériel",
    "energie": "Electrique",
    "modeleExact": "FORD V769 Transit Courier Fourgon Trend Marketing level 1 BEV A1 FWD BEV 46kWh - 100  kW / 136ch",
    "equipements": [
      "Climatisation automatique",
      "Écran tactile central 12 pouces",
      "Pack Parking avec caméra de recul et capteurs de stationnement avant",
      "Démarrage sans clé",
      "Coffre de rangement avant Frunk 44 litres",
      "Jantes en acier 16 pouces avec enjoliveurs et pneus 205/65 R16",
      "Préconditionnement de la batterie et de l'habitacle",
      "Système Pre-Collision Assist avec détection des piétons et cyclistes",
      "Système de maintien dans la voie Lane Keeping System",
      "Régulateur de vitesse avec limiteur réglable"
    ],
    "avantages": [],
    "garage": {
      "nom": "Spirlet Automobiles (Ford)",
      "adresse": "Rue Haroun Tazieff 10, 4032 Chênée",
      "telephone": "04/344.01.01",
      "email": "info@spirletautomobiles.be",
      "contact": "Christophe VAN DER KELEN — 04/247.76.64 — christophe.vanderkelen@spirletautomobiles.be"
    },
    "puissance": "136ch",
    "prix": "31.427€",
    "description": "",
    "autonomie": 300,
    "photo": "images/FORD V769 Transit Courier Fourgon.jpg",
    "pdf": "docs/Croix-Rouge Fonction - Transport matos - E-Courier Transit 13-11-2026 1.pdf",
    "places": 2
  },
  {
    "id": 27,
    "nom": "FORD transit City Van L2H2 Electrique",
    "marque": "Ford",
    "categorie": "Transport matériel",
    "energie": "Electrique",
    "modeleExact": "FORD V837 Transit City Van L2H2 330M Trend BEV A1 FWD BEV",
    "equipements": [
      "Freinage d'urgence automatique",
      "Aide au maintien dans la voie",
      "Régulateur de vitesse adaptatif",
      "Reconnaissance des panneaux de signalisation",
      "Aide au stationnement avant et arrière",
      "Caméra de recul",
      "Écran tactile central de 12,3 pouces",
      "Climatisation manuelle",
      "Démarrage sans clé",
      "Phares automatiques"
    ],
    "avantages": [
      "Longueur\t5,285 m",
      "Largeur avec rétroviseurs\t2,260 m",
      "Hauteur\t2,285 m",
      "Empattement\t3,360 m"
    ],
    "garage": {
      "nom": "Spirlet Automobiles (Ford)",
      "adresse": "Rue Haroun Tazieff 10, 4032 Chênée",
      "telephone": "04/344.01.01",
      "email": "info@spirletautomobiles.be",
      "contact": "Christophe VAN DER KELEN — 04/247.76.64 — christophe.vanderkelen@spirletautomobiles.be"
    },
    "puissance": "110KW",
    "prix": "34.139€",
    "description": "",
    "pdf": "docs/Croix-Rouge Transport matos - Transit City L2H2 13-11-2026 2.pdf",
    "places": 3,
    "autonomie": 224,
    "photo": "images/Ford transit city l2h2.jpg"
  }
];
