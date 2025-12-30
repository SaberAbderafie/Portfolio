// Composant About avec timeline et description
const Holla = () => {
  // Rendu du composant About
  return (
    <section id="about" className="scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Colonne gauche */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-mono mb-6">
            MON{" "}
            <span className="text-green-400 font-bold text-2xl">AVENTURE</span>{" "}
            DANS L'{" "}
            <span className="text-green-300 font-bold text-2xl">
              UNIVERS DIGITAL
            </span>{" "}
          </h2>
          <div className="relative w-auto h-auto overflow-hidden rounded-2xl border-4 border-white shadow-[0_0_24px_8px_rgba(74, 185, 63,0.7)]">
            <img
              src="/profil/me.jpeg"
              alt="Profil"
              className="max-w-[300px] w-auto h-auto object-contain transition-transform duration-500 transform hover:rotate-12"
            />
          </div>
          <div className="bg-white/10 p-4 rounded-lg shadow-md w-3/4 text-left mt-6 relative z-10">
            <p>
              <span className="text-green-400 font-semibold">Passionné</span>{" "}
              par le{" "}
              <span className="text-green-400 font-semibold">
                développement web
              </span>
              , j'ai découvert le frontend en créant mon premier{" "}
              <span className="text-green-400 font-semibold">
                site e-commerce
              </span>
              . J'ai adoré concevoir l'interface, jouer avec les couleurs et les
              animations pour offrir une{" "}
              <span className="text-green-400 font-semibold">
                expérience fluide
              </span>
              . Ce projet m'a donné envie d'approfondir les{" "}
              <span className="text-green-400 font-semibold">
                bonnes pratiques
              </span>{" "}
              et de{" "}
              <span className="text-green-400 font-semibold">structurer</span>{" "}
              mon code. En formation de{" "}
              <span className="text-green-400 font-semibold">
                développement de logiciels
              </span>
              , j'ai consolidé mes bases en{" "}
              <span className="text-green-400 font-semibold">HTML/CSS</span> et
              appris <span className="text-green-400 font-semibold">React</span>
              , <span className="text-green-400 font-semibold">Tailwind</span>{" "}
              et les logiques{" "}
              <span className="text-green-400 font-semibold">backend</span>. Je
              continue à explorer le design tech et à développer mes compétences
              sur la{" "}
              <span className="text-green-400 font-semibold">
                logique métier
              </span>
              , tout en m'initiant avec enthousiasme au{" "}
              <span className="text-green-400 font-semibold">
                développement mobile
              </span>{" "}
              avec <span className="text-green-400 font-semibold">Flutter</span>
              . Je suis actuellement à la recherche d'un{" "}
              <span className="text-green-400 font-semibold">stage</span> pour
              mettre en pratique mes compétences et contribuer à des{" "}
              <span className="text-green-400 font-semibold">
                projets innovants
              </span>
              .
            </p>
          </div>
        </div>

        {/* Colonne droite */}
        <div className=" ">
          <div className="w-full max-w-8xl flex flex-col">
            {/* Timeline*/}
            <div className="p-4 rounded-lg shadow-md w-3/4 text-left mt-6 relative z-10">
              {/* Corde verticale */}
              {/* <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-green-400 via-green-500 to-green-400 z-0"></div> */}
              {/* <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-10"> */}
              {/* <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 via-green-500 to-green-400 shadow-[0_0_24px_8px_rgba(6,172,153,0.7)] border-4 border-white"></div> */}
              {/* </div> */}

              {/* Colonne gauche : timeline */}
              <div className="flex flex-col items-end space-y-12">
                <div className="bg-white/10 p-4 rounded-lg shadow-md w-full text-left">
                  <span className="font-bold text-green-400">2024</span>
                  <div>
                    <span className="font-bold text-green-700">
                      Création de mon premier site web :{" "}
                    </span>
                    C’est à travers ce projet que j’ai découvert les
                    fondamentaux du design web avec HTML et CSS.
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg shadow-md w-full text-left">
                  <span className="font-bold text-green-400">2025</span>
                  <div>
                    <span className="font-bold text-green-700">
                      Premier cours de programmation web :{" "}
                    </span>
                    J’ai approfondi les bases du développement web à travers
                    HTML et CSS et j'ai pu apprendre les premières notions de
                    JavaScript. Ce cours m’a permis de comprendre la structure
                    d’une page, le rôle du style dans l’expérience utilisateur,
                    et l’importance d’un code clair et bien organisé.
                    <br />
                    <span className="font-bold text-green-700">
                      Programmation approfondie :{" "}
                    </span>
                    J'ai consolidé mes compétences en programmation orientée
                    objet à travers le langage Java. Ce module m'a permis de
                    comprendre les concepts clés comme les classes, l'héritage,
                    l'encapsulation et la gestion des exceptions.
                    <br />
                    <span className="font-bold text-green-700">
                      Découverte des services web, Apprentissage de Scrum en
                      tant que Scrum Master, Apprentissage des algorithmes,
                      Apprentissage de la base de données{" "}
                    </span>
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg shadow-md w-full text-left">
                  <span className="font-bold text-green-400">2025</span>
                  <div>
                    <span className="font-bold text-green-700">
                      Apprentissage du web transactionnel, de Flutter et de la
                      cybersécurité ::{" "}
                    </span>
                    J'apprends à concevoir des applications web
                    transactionnelles en intégrant la gestion des paiements, des
                    sessions et de la sécurité des échanges. Je développe
                    également des interfaces mobiles avec Flutter, en tirant
                    parti de son approche multiplateforme et réactive. En
                    parallèle, je me forme aux principes de la cybersécurité.
                    J'identifie les vulnérabilités, je sécurise les données
                    utilisateurs et j'applique les bonnes pratiques pour
                    protéger les applications web.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Holla;
