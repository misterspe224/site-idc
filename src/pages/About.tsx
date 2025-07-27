
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import { Users, Target, CheckCheck, Award, Check } from "lucide-react";

const About = () => {
  // Values data
  const values = [
    {
      title: "Excellence",
      description: "Nous visons l'excellence dans tous nos projets, avec un souci constant du détail et une quête permanente de la qualité.",
      icon: <Award className="h-8 w-8" />
    },
    {
      title: "Innovation",
      description: "Nous adoptons des approches innovantes et des technologies modernes pour relever les défis complexes de construction.",
      icon: <Target className="h-8 w-8" />
    },
    {
      title: "Intégrité",
      description: "Nous agissons avec honnêteté, transparence et éthique dans toutes nos relations d'affaires et nos pratiques professionnelles.",
      icon: <CheckCheck className="h-8 w-8" />
    },
    {
      title: "Collaboration",
      description: "Nous croyons au pouvoir de la collaboration et travaillons en étroite coordination avec nos clients et partenaires.",
      icon: <Users className="h-8 w-8" />
    }
  ];

  // Milestones data
  const milestones = [
    {
      year: "2008",
      title: "Fondation",
      description: "Création d'IDC Consulting SARL à Conakry, Guinée."
    },
    {
      year: "2012",
      title: "Expansion régionale",
      description: "Ouverture d'un bureau à Freetown, Sierra Leone."
    },
    {
      year: "2015",
      title: "Certification ISO",
      description: "Obtention des certifications ISO 9001 et ISO 14001."
    },
    {
      year: "2018",
      title: "Projet majeur",
      description: "Réalisation du premier projet d'infrastructure de plus de 50 millions USD."
    },
    {
      year: "2022",
      title: "Diversification",
      description: "Extension des activités aux infrastructures agricoles et énergétiques."
    }
  ];

  // Team members
  const team = [
    {
      name: "Ahmed Diallo",
      position: "Directeur Général",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Sophie Koné",
      position: "Directrice Technique",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Robert Kamara",
      position: "Directeur des Opérations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Fatou Touré",
      position: "Directrice Financière",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=400"
    }
  ];

  // Certifications
  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Système de management de la qualité"
    },
    {
      name: "ISO 14001:2015",
      description: "Système de management environnemental"
    },
    {
      name: "ISO 45001:2018",
      description: "Système de management de la santé et de la sécurité au travail"
    }
  ];

  return (
    <>
      <Hero 
        title="À Propos de Nous"
        subtitle="Découvrez l'histoire, les valeurs et l'équipe derrière IDC Consulting SARL"
        backgroundImage="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80&w=1800"
      />

      {/* Overview Section */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title text-left mb-6">Notre Histoire</h2>
            <p className="text-gray-600">
              Fondée en mars 2018 par les experts en BTP Mohamed
              Condé et N'Faly Konaté, IDC CONSULTING SARL est une
              entreprise guinéenne spécialisée dans les technologies
              innovantes dans le secteur des bâtiments et travaux
              publics. Basée initialement à Conakry, elle s'est
              développée à l'international en s'implantant à Freetown,
              Sierra Leone. Forte de plusieurs années d'expérience, la
              société a investi dans des équipements de pointe et
              diversifié ses activités, incluant la construction de routes,
              d'immeubles, l'aménagement de terrains agricoles, et
              bien plus, tout en employant un personnel hautement
              qualifié.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/lovable-uploads/ce73bb97-7606-4980-8918-a615b2901c0e.png" 
              alt="Équipe dirigeante IDC Consulting"
              className="rounded-lg shadow-lg h-48 w-full object-cover"
            />
            <img 
              src="/lovable-uploads/b1560255-7e81-49af-a9f9-e9506cca4eda.png" 
              alt="Construction d'immeuble en cours"
              className="rounded-lg shadow-lg h-48 w-full object-cover"
            />
            <img 
              src="/lovable-uploads/2a1672e9-0d8c-4321-9dfc-95f73513e59e.png" 
              alt="Structure métallique et ouvriers"
              className="rounded-lg shadow-lg h-48 w-full object-cover"
            />
            <img 
              src="/lovable-uploads/09060470-f492-4484-9b58-d6f0649d9d65.png" 
              alt="Ouvriers IDC sur chantier"
              className="rounded-lg shadow-lg h-48 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-10">Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-idc-navy mb-4">Notre Mission</h3>
              <p className="text-gray-600">
                Fournir des solutions de construction et d'infrastructures innovantes, durables et de haute qualité 
                qui répondent aux besoins spécifiques de l'Afrique de l'Ouest, tout en contribuant au développement 
                économique et social de la région.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-idc-navy mb-4">Notre Vision</h3>
              <p className="text-gray-600">
                Devenir le leader de référence dans le secteur de la construction et des infrastructures en Afrique de l'Ouest, 
                reconnu pour son excellence technique, son approche durable et son impact positif sur les communautés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title mb-10">Nos Valeurs</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Nos valeurs sont au cœur de tout ce que nous faisons. Elles guident nos décisions, 
            façonnent notre culture d'entreprise et définissent notre approche des projets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-idc-gold/10 p-4 rounded-full inline-flex items-center justify-center mb-4 text-idc-gold">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-idc-navy mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-idc-navy text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
              Jalons Importants
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-1 bg-idc-gold"></span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line for timeline */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-idc-gold/30"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                >
                  {/* Year bubble */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-idc-gold z-10 flex items-center justify-center font-bold">
                    <div className="absolute w-12 h-12 rounded-full border-2 border-idc-gold"></div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2"></div>
                  <div className="w-full md:w-1/2 bg-white/10 p-6 rounded-lg">
                    <div className="text-idc-gold font-bold text-xl mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-white/80">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title mb-10">Notre Équipe Dirigeante</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Notre équipe dirigeante combine expertise technique, vision stratégique et connaissance approfondie 
            du contexte ouest-africain pour mener IDC Consulting SARL vers l'excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg group">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-idc-navy mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-10">Certifications</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Nous sommes fiers de maintenir les plus hauts standards de qualité, de sécurité et 
              de responsabilité environnementale dans toutes nos opérations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-idc-gold">
                <h3 className="text-xl font-bold text-idc-navy mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
