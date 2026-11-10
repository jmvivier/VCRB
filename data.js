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
    "prix": "46564€ aménagé",
    "photo": "images/grand-tpmr-connect.jpg",
    "pdf": "docs/tpmr-connect.pdf",
    "amenagementPdf": "pdfs/Fiche-Amenagement-tpmr court.pdf",
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
    "prix": "44766€ aménagé",
    "photo": "images/tpmr-connect.jpg",
    "pdf": "docs/grand-tpmr-connect.pdf",
    "amenagementPdf": "pdfs/Fiche-Amenagement-tpmr long.pdf",
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
      "Système multimédia openR link 10 pouces avec Google intégré",
      "Tableau de bord numérique couleur 10 pouces personnalisable",
      "Compatibilité Android Auto et Apple CarPlay",
      "Carte Renault mains libres pour l'accès et le démarrage",
      "Feux LED Adaptive Vision avec fonction antibrouillard intégrée",
      "Système Multi-Sense avec personnalisation des modes de conduite",
      "Frein de parking électrique assisté avec fonction Auto-Hold",
      "Rétroviseurs extérieurs électriques, dégivrants et rabattables automatiquement",
      "Essuie-glaces automatiques avec capteur de pluie"
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
    "prix": "31.059€",
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
    "prix": "30579€",
    "photo": "images/tourneo-courier.jpg",
    "pdf": "docs/e-tourneo-courier.pdf",
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
    "id": 7,
    "nom": "Peugeot 308SW",
    "marque": "Peugeot",
    "categorie": "Service",
    "energie": "Hybride",
    "puissance": "145CV",
    "places": 5,
    "prix": "25709€",
    "photo": "images/peugeot308SW.jpg",
    "pdf": "docs/tourneo-courier.pdf",
    "description": "Break.",
    "modeleExact": "Peugeot 308 SW Style Hybrid 145 ch",
    "equipements": [
      "Boîte automatique",
      "Pack Drive Assist",
      "Détecteurs d’obstacles avant et arrière",
      "Pack Access & Navigation",
      "Mirror Screen sans fil (Apple CarPlay / Android Auto)"
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
    "prix": 25443,
    "photo": "images/tourneo-courier.jpg",
    "pdf": "docs/tourneo-courier.pdf",
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
    "prix": 30579,
    "photo": "images/tourneo-courier.jpg",
    "pdf": "docs/e-tourneo-courier.pdf",
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
    "id": 13,
    "nom": "Ford Transit Custom Kombi M1 320S Trend",
    "marque": "Ford",
    "categorie": "Transport personnes",
    "energie": "Diesel",
    "puissance": "136CV",
    "places": 9,
    "prix": "34271€",
    "photo": "images/transit-custom-320l.jpg",
    "pdf": "docs/FORD Transit Custom V710 KOMBI M1 320S TREND 2.0TDI.pdf",
    "description": "Version courte.",
    "modeleExact": "FORD Transit Custom V710 Kombi M1 320S Trend 2.0 TDCi 136 ch / 100 kW A8 FWD SWB",
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
      "Dimensions extérieures (L × l × H, hors rétroviseurs) : 5,05 m × 2,00 m × 1,95–1,96 m",
      "Empattement : 3,10 m ; longueur utile : 2 647 mm ; PTAC : 3 225 kg"
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
    "prix": "36416€",
    "photo": "images/transit-custom-320l.jpg",
    "pdf": "docs/FORD Transit Custom V710 KOMBI M1 340L TREND.pdf",
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
    "id": 18,
    "nom": "Toyota Proace City EV",
    "marque": "Toyota",
    "categorie": "Transport matériel",
    "energie": "Electrique",
    "autonomie": 330,
    "puissance": 136,
    "places": 3,
    "prix": 29716,
    "photo": "images/proace-city-ev.jpg",
    "pdf": "docs/proace-city-ev.pdf",
    "description": "Utilitaire compact électrique.",
    "modeleExact": "Toyota Proace City EV Panel Van SWB Full Electric 50 kWh 136 hp Comfort",
    "equipements": [
      "Portes latérales coulissantes droite et gauche",
      "Régulateur et limiteur de vitesse",
      "Alerte de franchissement de ligne",
      "Reconnaissance des panneaux",
      "Écran central 8 ou 10 pouces",
      "Bluetooth",
      "Prises USB",
      "Compatibilité MirrorLink / smartphone",
      "Climatisation manuelle"
    ],
    "avantages": [
      "Dimensions extérieures (L × l × H, hors rétroviseurs) : 4,403 m × 1,848 m × 1,880 m",
      "Empattement : 2,785 m ; longueur utile : 1 781 mm ; PTAC : 2 390 kg"
    ],
    "garage": {
      "nom": "Garage Gégo — Toyota Namur",
      "adresse": "Chaussée de Marche 718, 5100 Naninne (Namur)",
      "telephone": "081/40.24.24",
      "email": "info.toyotanamur@gegoteam.be",
      "contact": "Geoffroy Tillieux — 0479/205.366 — geoffroy.tilieux@gegoteam.be"
    }
  },
  {
    "id": 19,
    "nom": "Toyota Proace EV Medium 75 kWh",
    "marque": "Toyota",
    "categorie": "Transport matériel",
    "energie": "Electrique",
    "puissance": 136,
    "places": 3,
    "prix": 30492,
    "photo": "images/proace-ev.jpg",
    "pdf": "docs/proace-ev.pdf",
    "description": "Utilitaire électrique.",
    "modeleExact": "Toyota Proace EV Medium Full Electric 75 kWh E-Toggle Comfort",
    "equipements": [
      "Portes latérales coulissantes droite et gauche",
      "Régulateur et limiteur de vitesse",
      "Alerte de franchissement de ligne",
      "Reconnaissance des panneaux",
      "Écran central 8 ou 10 pouces",
      "Bluetooth",
      "Prises USB",
      "Compatibilité MirrorLink / smartphone",
      "Climatisation manuelle"
    ],
    "avantages": [
      "Dimensions extérieures (L × l × H, hors rétroviseurs) : 4,96 m × 1,92 m × 1,90 m",
      "Empattement : 3,28 m ; longueur utile : 2 512 mm ; PTAC : 3 025 kg"
    ],
    "garage": {
      "nom": "Garage Gégo — Toyota Namur",
      "adresse": "Chaussée de Marche 718, 5100 Naninne (Namur)",
      "telephone": "081/40.24.24",
      "email": "info.toyotanamur@gegoteam.be",
      "contact": "Geoffroy Tillieux — 0479/205.366 — geoffroy.tilieux@gegoteam.be"
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
    "prix": 30445,
    "photo": "images/transit-l2.jpg",
    "pdf": "docs/transit-l2.pdf",
    "description": "Fourgon L2.",
    "modeleExact": "FORD Transit 2T MCA 310M Fourgon tôlé L2 Trend A8 2.0 TD 130 ch / 96 kW",
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
    "prix": 33095,
    "photo": "images/transit-l3.jpg",
    "pdf": "docs/transit-l3.pdf",
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
    "prix": 29289,
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
    "prix": "31.059€",
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
    "prix": "36.566€",
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
    "prix": 40983,
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
    "prix": 37214,
    "photo": "images/explorer.jpg",
    "pdf": "docs/explorer.pdf",
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
  }
];
