
import Hero from "../components/Hero";
import { Building, BarChart3, Truck, Ruler, User, MapPin } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "buildings",
      title: "Bâtiments",
      description: "Construction de bâtiments résidentiels, commerciaux et industriels avec un souci constant de qualité et d'innovation.",
      icon: <Building className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800",
      features: [
        "Immeubles résidentiels et logements collectifs",
        "Bâtiments commerciaux et bureaux",
        "Structures industrielles et entrepôts",
        "Établissements scolaires et universitaires",
        "Centres de santé et hôpitaux",
        "Rénovation et réhabilitation"
      ]
    },
    {
      id: "roads",
      title: "Infrastructures Routières",
      description: "Construction et réhabilitation de routes, ponts et ouvrages d'art pour améliorer la mobilité et connecter les communautés.",
      icon: <Truck className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=800",
      features: [
        "Routes nationales et autoroutes",
        "Routes rurales et pistes",
        "Ponts et viaducs",
        "Systèmes de drainage et caniveaux",
        "Réhabilitation et entretien routier",
        "Études techniques et dimensionnement"
      ]
    },
    {
      id: "agricultural",
      title: "Infrastructures Agricoles",
      description: "Développement d'infrastructures agricoles modernes pour soutenir la production alimentaire et le développement rural.",
      icon: <MapPin className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800",
      features: [
        "Barrages et retenues d'eau",
        "Systèmes d'irrigation et de drainage",
        "Aménagements hydro-agricoles",
        "Entrepôts et installations de stockage",
        "Marchés et infrastructures de distribution",
        "Pistes rurales et voies d'accès"
      ]
    },
    {
      id: "civil",
      title: "Génie Civil",
      description: "Réalisation d'ouvrages de génie civil complexes avec expertise technique et respect des normes internationales.",
      icon: <Ruler className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80&w=800",
      features: [
        "Ouvrages hydrauliques et barrages",
        "Ports et infrastructures maritimes",
        "Stations de traitement d'eau",
        "Fondations spéciales",
        "Structures en béton armé",
        "Travaux de terrassement"
      ]
    },
    {
      id: "consulting",
      title: "Conseils et Expertises",
      description: "Services de consultance technique, études de faisabilité et supervision de projets pour garantir leur réussite.",
      icon: <BarChart3 className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80&w=800",
      features: [
        "Études de faisabilité technique",
        "Conception et dimensionnement",
        "Supervision et contrôle de projets",
        "Audits techniques",
        "Expertise en gestion de projets",
        "Formation et renforcement des capacités"
      ]
    }
  ];

  return (
    <>
      <Hero 
        title="Nos Services"
        subtitle="Des solutions complètes en construction et infrastructures pour l'Afrique de l'Ouest"
        backgroundImage="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80&w=1800"
      />

      {/* Services Overview */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mb-10">Excellence et Innovation</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            IDC Consulting SARL offre une gamme complète de services dans le domaine du BTP, 
            combinant expertise technique, connaissance du terrain et approche innovante 
            pour répondre aux défis spécifiques de l'Afrique de l'Ouest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="text-idc-gold mr-3">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-idc-navy">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a 
                  href={`#${service.id}`} 
                  className="text-idc-navy font-medium hover:text-idc-gold transition-colors"
                >
                  En savoir plus
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {services.slice(3, 5).map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="text-idc-gold mr-3">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-idc-navy">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a 
                  href={`#${service.id}`} 
                  className="text-idc-navy font-medium hover:text-idc-gold transition-colors"
                >
                  En savoir plus
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Services */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              id={service.id}
              className={`py-16 ${index !== services.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative">
                    <div className={`absolute -z-10 h-full w-full ${index % 2 === 0 ? '-right-4 -bottom-4' : '-left-4 -bottom-4'} rounded-lg bg-idc-gold/20`}></div>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="rounded-lg shadow-lg w-full h-96 object-cover"
                    />
                  </div>
                </div>
                <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center mb-4">
                    <div className="bg-idc-gold/10 p-3 rounded-full text-idc-gold mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-idc-navy">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-idc-navy mb-4">Nos prestations incluent:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-idc-gold mr-2 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mb-10">Notre Approche</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Chez IDC Consulting SARL, nous suivons une méthodologie rigoureuse pour garantir 
            l'excellence à chaque étape de nos projets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-idc-navy flex items-center justify-center text-white font-bold text-xl">
              1
            </div>
            <h3 className="text-xl font-semibold text-idc-navy mb-3 mt-4">Analyse des Besoins</h3>
            <p className="text-gray-600">
              Nous collaborons étroitement avec nos clients pour comprendre leurs exigences 
              spécifiques et définir clairement les objectifs du projet.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-idc-navy flex items-center justify-center text-white font-bold text-xl">
              2
            </div>
            <h3 className="text-xl font-semibold text-idc-navy mb-3 mt-4">Conception & Planification</h3>
            <p className="text-gray-600">
              Notre équipe technique élabore des solutions adaptées et établit un plan 
              détaillé intégrant coûts, délais et ressources nécessaires.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-idc-navy flex items-center justify-center text-white font-bold text-xl">
              3
            </div>
            <h3 className="text-xl font-semibold text-idc-navy mb-3 mt-4">Exécution & Suivi</h3>
            <p className="text-gray-600">
              Nous mettons en œuvre le projet avec des équipes qualifiées et un suivi rigoureux 
              pour assurer le respect des standards de qualité.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-idc-navy flex items-center justify-center text-white font-bold text-xl">
              4
            </div>
            <h3 className="text-xl font-semibold text-idc-navy mb-3 mt-4">Livraison & Garantie</h3>
            <p className="text-gray-600">
              Nous livrons des projets conformes aux attentes et offrons un service 
              après-vente et une garantie pour assurer une satisfaction durable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-idc-navy text-white py-20 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-8 lg:mb-0 lg:w-2/3">
            <h2 className="text-3xl font-bold mb-4">Prêt à démarrer votre projet avec nous?</h2>
            <p className="text-white/80 text-lg">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment 
              IDC Consulting SARL peut vous aider à concrétiser votre vision.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="btn-secondary">
              Demander un devis
            </a>
            <a href="/projects" className="bg-white/10 text-white px-6 py-3 rounded-md font-semibold hover:bg-white/20 transition-all duration-200">
              Voir nos réalisations
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
