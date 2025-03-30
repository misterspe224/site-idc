
import { Building, Check, Phone, Mail, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import TestimonialCard from "../components/TestimonialCard";
import Stats from "../components/Stats";

const Home = () => {
  // Sample data for services
  const services = [
    {
      title: "Bâtiments",
      description: "Construction résidentielle, commerciale et industrielle avec des standards de qualité internationaux.",
      icon: <Building size={24} />,
      link: "/services",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Infrastructures Routières",
      description: "Construction et réhabilitation de routes, ponts et ouvrages d'art pour améliorer la mobilité.",
      icon: <Building size={24} />,
      link: "/services",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Infrastructures Agricoles",
      description: "Aménagements hydro-agricoles, barrages et systèmes d'irrigation pour le développement rural.",
      icon: <Building size={24} />,
      link: "/services",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Conseils et Expertises",
      description: "Services de consultance technique, études de faisabilité et supervision de projets.",
      icon: <Building size={24} />,
      link: "/services",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80&w=800"
    }
  ];

  // Sample data for projects
  const projects = [
    {
      title: "Résidence Les Palmiers",
      category: "Bâtiment",
      location: "Conakry, Guinée",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80&w=800",
      description: "Complexe résidentiel moderne de 24 appartements avec piscine et espaces verts."
    },
    {
      title: "Route Nationale RN5",
      category: "Infrastructure Routière",
      location: "Sierra Leone",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&q=80&w=800",
      description: "Réhabilitation de 45 km de route avec construction de ponts et systèmes de drainage."
    },
    {
      title: "Campus Universitaire",
      category: "Bâtiment",
      location: "Freetown, Sierra Leone",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80&w=800",
      description: "Construction d'un campus universitaire comprenant 5 bâtiments administratifs et pédagogiques."
    }
  ];

  // Sample testimonials
  const testimonials = [
    {
      quote: "IDC Consulting a réalisé notre complexe industriel avec un professionnalisme remarquable, en respectant les délais et le budget fixés.",
      name: "Jean Dupont",
      title: "Directeur Général",
      company: "Industrie Minière de Guinée"
    },
    {
      quote: "Leur expertise technique et leur approche collaborative ont fait toute la différence dans la réussite de notre projet d'infrastructure.",
      name: "Marie Camara",
      title: "Ministre",
      company: "Ministère des Travaux Publics"
    }
  ];

  // Stats data
  const statsData = [
    {
      value: "120+",
      label: "Projets Réalisés",
      icon: <Check size={28} />
    },
    {
      value: "15+",
      label: "Années d'Expérience",
      icon: <Clock size={28} />
    },
    {
      value: "200+",
      label: "Collaborateurs",
      icon: <Users size={28} />
    },
    {
      value: "12",
      label: "Pays Couverts",
      icon: <Building size={28} />
    }
  ];

  return (
    <>
      <Hero 
        title="Construire aujourd'hui pour façonner demain"
        subtitle="Solutions innovantes en construction et infrastructures en Afrique de l'Ouest"
        backgroundImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1800"
      />

      {/* Services Section */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mb-10">Nos Services</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            IDC Consulting SARL offre une gamme complète de services en construction et infrastructures, 
            avec une expertise reconnue et des solutions adaptées aux besoins spécifiques de l'Afrique de l'Ouest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              image={service.image}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services" className="btn-outline">
            Tous nos services
          </Link>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title text-left mb-6">À Propos d'IDC Consulting</h2>
              <p className="text-gray-600 mb-6">
                Fondée avec la vision de contribuer au développement des infrastructures en Afrique de l'Ouest, 
                IDC Consulting SARL s'est imposée comme un acteur majeur dans le secteur du BTP.
              </p>
              <p className="text-gray-600 mb-6">
                Notre équipe multidisciplinaire combine expertise technique, connaissance du terrain et innovation 
                pour offrir des solutions adaptées aux défis spécifiques de la région.
              </p>
              <div className="mt-8">
                <Link to="/about" className="btn-primary">
                  En savoir plus
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-idc-gold rounded-tl-lg z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800" 
                alt="Notre équipe"
                className="relative z-10 rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats items={statsData} />

      {/* Projects Preview */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mb-10">Nos Réalisations</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Découvrez quelques-uns de nos projets emblématiques qui illustrent notre savoir-faire 
            et notre engagement envers l'excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              category={project.category}
              location={project.location}
              image={project.image}
              description={project.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/projects" className="btn-primary">
            Voir tous nos projets
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-10">Témoignages Clients</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-idc-navy text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à démarrer votre projet?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment 
            IDC Consulting SARL peut vous aider à concrétiser votre vision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-secondary">
              Nous contacter
            </Link>
            <a href="tel:+22412345678" className="flex items-center justify-center bg-white/10 text-white px-6 py-3 rounded-md font-semibold hover:bg-white/20 transition-all duration-200">
              <Phone className="mr-2 h-5 w-5" /> +224 12 345 678
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
