
import Hero from "../components/Hero";
import { Shield, Leaf, Users, Award, CheckCircle2 } from "lucide-react";

const Commitments = () => {
  // HSE commitments
  const hseCommitments = [
    {
      title: "Santé et Sécurité",
      description: "Nous mettons en place des mesures strictes pour garantir un environnement de travail sûr et sain pour tous nos collaborateurs et partenaires.",
      icon: <Shield className="h-8 w-8" />,
      points: [
        "Formation régulière de tout le personnel aux procédures de sécurité",
        "Équipements de protection individuelle adaptés pour chaque type de travail",
        "Contrôles et audits de sécurité réguliers sur nos chantiers",
        "Procédures d'intervention d'urgence bien définies"
      ]
    },
    {
      title: "Environnement",
      description: "Nous nous engageons à minimiser l'impact environnemental de nos activités et à promouvoir des pratiques durables dans tous nos projets.",
      icon: <Leaf className="h-8 w-8" />,
      points: [
        "Gestion efficace des déchets et réduction de la pollution",
        "Utilisation rationnelle des ressources naturelles",
        "Préservation de la biodiversité locale",
        "Technologies et méthodes de construction éco-responsables"
      ]
    },
    {
      title: "Social",
      description: "Nous contribuons au développement socio-économique des communautés où nous opérons et valorisons le capital humain local.",
      icon: <Users className="h-8 w-8" />,
      points: [
        "Embauche et formation de main-d'œuvre locale",
        "Soutien aux initiatives communautaires",
        "Respect des cultures et traditions locales",
        "Transparence et éthique dans nos pratiques commerciales"
      ]
    }
  ];

  // Quality commitments
  const qualityCommitments = [
    "Respect des normes internationales de construction",
    "Utilisation de matériaux de qualité supérieure",
    "Contrôles qualité rigoureux à chaque étape du projet",
    "Formation continue de nos équipes aux meilleures pratiques",
    "Documentation complète et transparente des processus",
    "Amélioration continue basée sur le retour d'expérience"
  ];

  // Sustainable development initiatives
  const sustainableInitiatives = [
    {
      title: "Efficacité Énergétique",
      description: "Conception de bâtiments économes en énergie avec une isolation optimale et des systèmes d'éclairage LED."
    },
    {
      title: "Matériaux Durables",
      description: "Utilisation de matériaux locaux et écologiques, réduisant l'empreinte carbone liée au transport."
    },
    {
      title: "Gestion de l'Eau",
      description: "Systèmes de récupération des eaux pluviales et installations de traitement des eaux usées."
    },
    {
      title: "Énergies Renouvelables",
      description: "Intégration de solutions solaires dans nos projets et sur nos propres installations."
    },
    {
      title: "Réduction des Déchets",
      description: "Programmes de recyclage et réutilisation des matériaux de construction."
    },
    {
      title: "Sensibilisation",
      description: "Formation de nos équipes et clients aux pratiques durables dans le secteur de la construction."
    }
  ];

  return (
    <>
      <Hero 
        title="Nos Engagements"
        subtitle="Découvrez comment nous intégrons qualité, sécurité et responsabilité environnementale dans chaque projet"
        backgroundImage="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=1800"
      />

      {/* HSE Commitments */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mb-10">Approche HSE</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Chez IDC Consulting SARL, notre politique HSE (Hygiène, Sécurité, Environnement) est au cœur de toutes nos opérations. 
            Nous sommes résolument engagés à créer un environnement de travail sûr, à préserver l'environnement 
            et à contribuer positivement aux communautés locales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hseCommitments.map((commitment, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-idc-gold/10 p-3 rounded-full text-idc-gold mr-4">
                    {commitment.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-idc-navy">{commitment.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{commitment.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-idc-navy mb-3">Nos actions:</h4>
                  <ul className="space-y-2">
                    {commitment.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-idc-gold mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -z-10 h-full w-full -left-4 -bottom-4 rounded-lg bg-idc-gold/20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800" 
                  alt="Contrôle qualité"
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <div className="bg-idc-gold/10 p-3 rounded-full text-idc-gold mr-4">
                  <Award className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-idc-navy">Engagement Qualité</h2>
              </div>
              <p className="text-gray-600 mb-6">
                La qualité est la pierre angulaire de notre réputation. Nous sommes fiers de livrer des 
                projets qui surpassent les attentes de nos clients et qui résistent à l'épreuve du temps.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-idc-navy mb-4">Notre système de management de la qualité comprend:</h4>
                <ul className="space-y-3">
                  {qualityCommitments.map((commitment, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-idc-gold mr-2 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{commitment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mb-10">Nos Certifications</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Notre engagement envers la qualité, la sécurité et l'environnement est attesté par 
            plusieurs certifications internationales reconnues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-idc-gold">
            <div className="h-16 flex items-center justify-center mb-4">
              <svg className="h-12 w-12 text-idc-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-idc-navy mb-2">ISO 9001:2015</h3>
            <p className="text-gray-600">Système de management de la qualité</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-idc-gold">
            <div className="h-16 flex items-center justify-center mb-4">
              <svg className="h-12 w-12 text-idc-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-idc-navy mb-2">ISO 14001:2015</h3>
            <p className="text-gray-600">Système de management environnemental</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center border-t-4 border-idc-gold">
            <div className="h-16 flex items-center justify-center mb-4">
              <svg className="h-12 w-12 text-idc-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.93 4.93l14.14 14.14"></path>
                <path d="M14.83 9.17l-.34-.34a2.5 2.5 0 0 0-3.53 0l-.34.34a2.5 2.5 0 0 0 0 3.53l.34.34a2.5 2.5 0 0 0 3.53 0l.34-.34a2.5 2.5 0 0 0 0-3.53z"></path>
                <path d="M19.07 4.93l-1.41 1.41"></path>
                <path d="M1.39 19.6l1.41-1.41"></path>
                <path d="M10 5.5V1"></path>
                <path d="M14 7l1-1"></path>
                <path d="M18.5 10H23"></path>
                <path d="M7 14l-1 1"></path>
                <path d="M5.5 18H1"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-idc-navy mb-2">ISO 45001:2018</h3>
            <p className="text-gray-600">Système de management de la santé et sécurité au travail</p>
          </div>
        </div>
      </section>

      {/* Sustainable Development */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-10">Développement Durable</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Conscients des enjeux environnementaux actuels, nous intégrons les principes du développement 
              durable dans toutes nos activités et encourageons des pratiques responsables dans l'industrie de la construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sustainableInitiatives.map((initiative, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-idc-navy mb-2">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-idc-navy mb-6">Engagement Communautaire</h2>
            <p className="text-gray-600 mb-4">
              Au-delà de nos projets de construction, nous nous engageons activement auprès des communautés 
              locales, contribuant à leur développement socio-économique de diverses manières.
            </p>
            <p className="text-gray-600 mb-6">
              Nous croyons fermement que notre réussite doit se traduire par un impact positif sur les 
              communautés où nous opérons, en créant des opportunités et en améliorant la qualité de vie.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-idc-gold/10 p-2 rounded-full text-idc-gold mr-3 mt-1">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-idc-navy">Formation professionnelle</h4>
                  <p className="text-gray-600">Programmes de formation technique pour les jeunes locaux</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-idc-gold/10 p-2 rounded-full text-idc-gold mr-3 mt-1">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-idc-navy">Infrastructure communautaire</h4>
                  <p className="text-gray-600">Rénovation d'écoles et centres de santé dans les zones rurales</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-idc-gold/10 p-2 rounded-full text-idc-gold mr-3 mt-1">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-idc-navy">Soutien économique local</h4>
                  <p className="text-gray-600">Approvisionnement auprès de fournisseurs locaux quand c'est possible</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=500" 
              alt="Formation locale"
              className="rounded-lg shadow-lg h-48 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&q=80&w=500" 
              alt="Infrastructure communautaire"
              className="rounded-lg shadow-lg h-48 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=500" 
              alt="Soutien local"
              className="rounded-lg shadow-lg h-48 w-full object-cover col-span-2"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Commitments;
