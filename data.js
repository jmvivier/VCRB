const vehicles = [
/* ===========================
   TPMR
=========================== */

{
id:9,
nom:"Ford Tourneo Connect TPMR",
marque:"Ford",
photoHover: "images/tpmr court fiche.jpg",
categorie:"TPMR",
energie:"Essence",
puissance:"115CV" ,
places:6,
prix:"46564€ aménagé",
photo:"images/grand-tpmr-connect.jpg",
pdf:"docs/tpmr-connect.pdf",
amenagementPdf: "pdfs/Fiche-Amenagement-tpmr court.pdf",
description:"Version courte TPMR."
},

{
id:10,
nom:"Ford Grand Tourneo Connect TPMR",
marque:"Ford",
photoHover: "images/tpmr long fiche.jpg",
categorie:"TPMR",
energie:"Essence",
puissance:"115CV" ,
places:7,
prix:"44766€ aménagé",
photo:"images/tpmr-connect.jpg",
pdf:"docs/grand-tpmr-connect.pdf",
amenagementPdf: "pdfs/Fiche-Amenagement-tpmr long.pdf",
description:"Version longue TPMR."
},


/* ===========================
   VEHICULES DE SERVICE
=========================== */
{
id:6,
nom:"Renault Clio Full Hybrid E-Tech 160",
marque:"Renault",
categorie:"Service",
energie:"Hybride",
puissance:"160CV",
places:5,
prix:"25582€",
photo:"images/clio-hybrid.jpg",
pdf:"docs/Renault clio full hybrid.pdf",
description:"Citadine hybride."
},
{
id:5,
nom:"Renault Clio TCe 115 Techno",
marque:"Renault",
categorie:"Service",
energie:"Essence",
puissance:"115CV",
places:5,
prix:"23553€",
photo:"images/clio-essence.jpg",
pdf:"docs/Renault clio essence.pdf",
description:"Citadine essence."
},
{
id:24,
nom:"Peugeot e-2008 Allure",
marque:"Peugeot",
photoHover: "images/Fiche 2008 Allure electrique.jpg",
categorie:"Service",
energie:"Electrique",
autonomie:"406KM",
puissance:"156CV",
places:5,
atn:122,
loyer:725,
prix:"31059€",
coffre:434,
photo:"images/peugeot-e2008.jpg",
pdf:"docs/peugeot-e2008.pdf",
description:"SUV compact électrique."
},

{
id:22,
nom:"Ford Tourneo Courier Titanium BEV",
marque:"Ford",
photoHover: "images/Fiche Ford tourneo V769 courier electrique.jpg",
categorie:"Service",
energie:"Electrique",
autonomie:288,
puissance:"136CV",
places:5,
prix:"30579€",
photo:"images/tourneo-courier.jpg",
pdf:"docs/e-tourneo-courier.pdf",
description:"Version électrique."
},


{
id:7,
nom:"Peugeot 308SW",
marque:"Peugeot",
categorie:"Service",
energie:"Hybride",
puissance:"145CV",
places:5,
prix:"25709€",
photo:"images/peugeot308SW.jpg",
pdf:"docs/tourneo-courier.pdf",
description:"Break."
},

{
id:8,
nom:"Peugeot 308SW",
marque:"Peugeot",
categorie:"Service",
energie:"Electrique",
autonomie:443,
puissance:"151CV",
places:5,
prix:"36566€",
photo:"images/peugeot308SW.jpg",
pdf:"docs/Peugeot 308SW BEV.pdf",
description:"Version électrique."
},


/* ===========================
   TRANSPORT DE PERSONNES
=========================== */


{
id:11,
nom:"Ford Tourneo Courier Titanium 1.0 Ecoboost",
marque:"Ford",
categorie:"Transport personnes",
energie:"Essence",
puissance:125,
places:5,
prix:25443,
photo:"images/tourneo-courier.jpg",
pdf:"docs/tourneo-courier.pdf",
description:"Ludospace compact."
},

{
id:12,
nom:"Ford Tourneo Courier Titanium BEV",
marque:"Ford",
categorie:"Transport personnes",
energie:"Electrique",
autonomie:288,
puissance:136,
places:5,
prix:30579,
photo:"images/tourneo-courier.jpg",
pdf:"docs/e-tourneo-courier.pdf",
description:"Version électrique."
},

{
id:13,
nom:"Ford Transit Custom Kombi M1 320S Trend",
marque:"Ford",
categorie:"Transport personnes",
energie:"Diesel",
puissance:"136CV",
places:9,
prix:"34271€",
photo:"images/transit-custom-320l.jpg",
pdf:"docs/FORD Transit Custom V710 KOMBI M1 320S TREND 2.0TDI.pdf",
description:"Version courte."
},

{
id:14,
nom:"Ford Transit Custom Kombi 320L Trend",
marque:"Ford",
categorie:"Transport personnes",
energie:"Diesel",
puissance:"136CV",
places:9,
prix:"35070€",
photo:"images/transit-custom-320l.jpg",
pdf:"docs/FORD Transit Custom V710 KOMBI 320L TREND 2.0TDI.pdf",
description:"Version longue."
},

{
id:15,
nom:"Ford Transit Custom Kombi PHEV",
marque:"Ford",
categorie:"Transport personnes",
energie:"Hybride rechargeable",
puissance:"232CV",
places:9,
prix:"36416€",
photo:"images/transit-custom-320l.jpg",
pdf:"docs/FORD Transit Custom V710 KOMBI M1 340L TREND.pdf",
description:"Version hybride rechargeable."
},


/* ===========================
   TRANSPORT DE MATERIEL
=========================== */

{
id:17,
nom:"Volkswagen Caddy Cargo Maxi",
marque:"Volkswagen",
categorie:"Transport matériel",
energie:"Essence",
puissance:115,
places:2,
prix:28130,
photo:"images/caddy-cargo.jpg",
pdf:"docs/caddy-cargo.pdf",
description:"Utilitaire compact."
},

{
id:18,
nom:"Toyota Proace City EV",
marque:"Toyota",
categorie:"Transport matériel",
energie:"Electrique",
autonomie:330,
puissance:136,
places:3,
prix:29716,
photo:"images/proace-city-ev.jpg",
pdf:"docs/proace-city-ev.pdf",
description:"Utilitaire compact électrique."
},

{
id:19,
nom:"Toyota Proace EV Medium 75 kWh",
marque:"Toyota",
categorie:"Transport matériel",
energie:"Electrique",
puissance:136,
places:3,
prix:30492,
photo:"images/proace-ev.jpg",
pdf:"docs/proace-ev.pdf",
description:"Utilitaire électrique."
},

{
id:20,
nom:"Ford Transit 310M L2 Trend",
marque:"Ford",
categorie:"Transport matériel",
energie:"Diesel",
puissance:130,
places:3,
prix:30445,
photo:"images/transit-l2.jpg",
pdf:"docs/transit-l2.pdf",
description:"Fourgon L2."
},

{
id:21,
nom:"Ford Transit 350L L3 Trend",
marque:"Ford",
categorie:"Transport matériel",
energie:"Diesel",
puissance:130,
places:3,
prix:33095,
photo:"images/transit-l3.jpg",
pdf:"docs/transit-l3.pdf",
description:"Fourgon L3."
},

/* ===========================
   VEHICULES DE FONCTION
=========================== */

{
id:1,
nom:"Peugeot e-208 Allure",
marque:"Peugeot",
categorie:"Fonction",
energie:"Electrique",
autonomie:398,
puissance:156,
places:5,
atn:114,
loyer:668,
prix:29289,
photo:"images/peugeot-e208.jpg",
pdf:"docs/peugeot-e208.pdf",
energie: "Electrique",
description:"Citadine électrique de fonction."
},

{
id:2,
nom:"Peugeot e-2008 Allure",
marque:"Peugeot",
categorie:"Fonction",
energie:"Electrique",
autonomie:406,
puissance:156,
places:5,
atn:122,
loyer:725,
prix:31059,
coffre:434,
photo:"images/peugeot-e2008.jpg",
pdf:"docs/peugeot-e2008.pdf",
description:"SUV compact électrique."
},
{
id:23,
nom:"Peugeot 308SW",
marque:"Peugeot",
categorie:"Fonction",
energie:"Electrique",
autonomie:443,
puissance:151,
places:5,
prix:36566,
photo:"images/peugeot308SW.jpg",
pdf:"docs/Peugeot 308SW BEV.pdf",
description:"Version électrique."
},

{
id:3,
nom:"Renault Scenic E-Tech Long Range",
marque:"Renault",
categorie:"Fonction",
energie:"Electrique",
autonomie:625,
puissance:220,
places:5,
atn:144,
loyer:716,
prix:40983,
photo:"images/scenic.jpg",
pdf:"docs/scenic.pdf",
description:"SUV électrique grande autonomie."
},

{
id:4,
nom:"Ford Explorer Select Extended Range",
marque:"Ford",
categorie:"Fonction",
energie:"Electrique",
autonomie:602,
puissance:286,
places:5,
atn:154,
loyer:728,
prix:37214,
photo:"images/explorer.jpg",
pdf:"docs/explorer.pdf",
description:"SUV électrique Ford."
},

];
