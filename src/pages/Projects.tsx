
import { useState } from "react";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("all");

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Résidence Les Palmiers",
      category: "Bâtiment",
      location: "Conakry, Guinée",
      year: "2022",
      client: "Société Immobilière de Guinée",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800"
      ],
      description: "Complexe résidentiel moderne de 24 appartements avec piscine et espaces verts. Ce projet combine confort, sécurité et respect de l'environnement.",
      challenge: "Le principal défi était de construire un complexe résidentiel de haut standing répondant aux normes internationales tout en s'adaptant au climat tropical.",
      solution: "Nous avons utilisé des matériaux locaux de qualité et intégré des solutions d'efficacité énergétique, comme l'orientation optimale des bâtiments pour la ventilation naturelle."
    },
    {
      id: 2,
      title: "Route Nationale RN5",
      category: "Infrastructure Routière",
      location: "Sierra Leone",
      year: "2021",
      client: "Ministère des Travaux Publics",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&q=80&w=800"
      ],
      description: "Réhabilitation de 45 km de route avec construction de ponts et systèmes de drainage. Ce projet a considérablement amélioré la mobilité et le commerce dans la région.",
      challenge: "Le terrain montagneux et les fortes précipitations saisonnières présentaient des défis majeurs pour la durabilité de l'infrastructure.",
      solution: "Nous avons mis en place des systèmes de drainage robustes et utilisé des techniques de stabilisation des sols adaptées aux conditions locales."
    },
    {
      id: 3,
      title: "Campus Universitaire",
      category: "Bâtiment",
      location: "Freetown, Sierra Leone",
      year: "2020",
      client: "Ministère de l'Éducation",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=800"
      ],
      description: "Construction d'un campus universitaire comprenant 5 bâtiments administratifs et pédagogiques, une bibliothèque et des installations sportives.",
      challenge: "Le projet devait être achevé dans un délai serré tout en respectant des normes élevées de qualité et de fonctionnalité.",
      solution: "Nous avons adopté une approche de construction modulaire et mobilisé plusieurs équipes travaillant en parallèle pour respecter les délais."
    },
    {
      id: 4,
      title: "Barrage Hydroélectrique",
      category: "Génie Civil",
      location: "Macenta, Guinée",
      year: "2019",
      client: "Ministère de l'Énergie",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&q=80&w=800"
      ],
      description: "Construction d'un barrage hydroélectrique de moyenne capacité pour fournir de l'électricité à plus de 50 000 foyers dans la région.",
      challenge: "Le site difficile d'accès et les préoccupations environnementales nécessitaient une planification minutieuse.",
      solution: "Nous avons collaboré avec des experts environnementaux pour minimiser l'impact écologique et mis en place une logistique adaptée aux contraintes du terrain."
    },
    {
      id: 5,
      title: "Périmètre Irrigué de Boké",
      category: "Infrastructure Agricole",
      location: "Boké, Guinée",
      year: "2018",
      client: "Ministère de l'Agriculture",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&q=80&w=800"
      ],
      description: "Aménagement d'un périmètre irrigué de 500 hectares incluant un système de canaux, des stations de pompage et des routes d'accès.",
      challenge: "La gestion efficace de l'eau dans une région sujette à des périodes de sécheresse représentait le principal défi.",
      solution: "Nous avons conçu un système d'irrigation économe en eau avec des canaux revêtus et des techniques de micro-irrigation pour certaines cultures."
    },
    {
      id: 6,
      title: "Centre Commercial Conakry Plaza",
      category: "Bâtiment",
      location: "Conakry, Guinée",
      year: "2018",
      client: "Groupe Commercial de Guinée",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80&w=800",
      gallery: [
        "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800"
      ],
      description: "Construction d'un centre commercial moderne de 4 étages avec parking souterrain, comprenant des boutiques, restaurants et espaces de loisirs.",
      challenge: "La construction en milieu urbain dense avec des contraintes liées au trafic et à l'espace limité était particulièrement complexe.",
      solution: "Nous avons élaboré un plan logistique détaillé pour la livraison des matériaux et utilisé des techniques de construction minimisant les perturbations."
    }
  ];

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
  };

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === activeTab);

  return (
    <>
      <Hero 
        title="Nos Réalisations"
        subtitle="Découvrez notre portefeuille de projets réalisés avec excellence en Afrique de l'Ouest"
        backgroundImage="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80&w=1800"
      />

      {/* Projects Filter & Gallery */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mb-10">Projets Réalisés</h2>
          <p className="max-w-3xl mx-auto text-gray-600 mb-8">
            Explorez nos projets emblématiques qui témoignent de notre expertise et de notre 
            engagement envers l'excellence dans divers domaines de la construction et des infrastructures.
          </p>

          {/* Filtering tabs */}
          <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 md:grid-cols-5">
              <TabsTrigger value="all">Tous</TabsTrigger>
              <TabsTrigger value="bâtiment">Bâtiments</TabsTrigger>
              <TabsTrigger value="infrastructure routière">Routes</TabsTrigger>
              <TabsTrigger value="infrastructure agricole">Agriculture</TabsTrigger>
              <TabsTrigger value="génie civil">Génie Civil</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              category={project.category}
              location={project.location}
              image={project.image}
              description={project.description.substring(0, 80) + "..."}
              onClick={() => openProjectModal(project)}
            />
          ))}
        </div>
      </section>

      {/* Project Modal */}
      <Dialog open={isModalOpen} onOpenChange={closeProjectModal}>
        {selectedProject && (
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-idc-navy">{selectedProject.title}</DialogTitle>
            </DialogHeader>
            
            {/* Image Gallery */}
            <div className="mb-6">
              <div className="relative h-64 md:h-80 overflow-hidden rounded-lg mb-3">
                <img 
                  src={selectedProject.gallery[0]} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {selectedProject.gallery.slice(1).map((image: string, idx: number) => (
                  <div key={idx} className="h-20 overflow-hidden rounded-lg">
                    <img 
                      src={image} 
                      alt={`${selectedProject.title} gallery ${idx + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Project Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-idc-navy mb-2">Localisation</h4>
                <p>{selectedProject.location}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-idc-navy mb-2">Année</h4>
                <p>{selectedProject.year}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-idc-navy mb-2">Client</h4>
                <p>{selectedProject.client}</p>
              </div>
            </div>
            
            {/* Project Description */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-idc-navy mb-3">Description du Projet</h4>
              <p className="text-gray-700 mb-4">{selectedProject.description}</p>
              
              <h4 className="text-xl font-semibold text-idc-navy mb-3">Défis</h4>
              <p className="text-gray-700 mb-4">{selectedProject.challenge}</p>
              
              <h4 className="text-xl font-semibold text-idc-navy mb-3">Notre Solution</h4>
              <p className="text-gray-700">{selectedProject.solution}</p>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* CTA Section */}
      <section className="bg-idc-navy text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vous avez un projet en tête?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Faites confiance à notre expertise pour transformer votre vision en réalité. 
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <a href="/contact" className="btn-secondary">
            Demander un devis
          </a>
        </div>
      </section>
    </>
  );
};

export default Projects;
