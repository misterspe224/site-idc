
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Adresse",
      details: [
        "Siège Social: Quartier Almamya, Conakry, Guinée",
        "Bureau Régional: Downtown, Freetown, Sierra Leone"
      ]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Téléphone",
      details: [
        "+224 622 61 32 18",
        "+224 627 90 90 90"
      ]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: [
        "contact@idcconsultinguinee.com"
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horaires d'Ouverture",
      details: [
        "Lundi - Vendredi: 8h00 - 17h00",
        "Samedi: 9h00 - 13h00"
      ]
    }
  ];

  return (
    <>
      <Hero 
        title="Contactez-Nous"
        subtitle="Notre équipe est prête à répondre à toutes vos questions et à discuter de vos projets"
        backgroundImage="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80&w=1800"
      />

      {/* Contact Details & Form */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-idc-navy mb-6">Comment Nous Joindre</h2>
            <p className="text-gray-600 mb-8">
              Que vous ayez une question, souhaitiez discuter d'un projet potentiel ou explorer 
              une opportunité de collaboration, notre équipe est à votre disposition.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex">
                  <div className="bg-idc-gold/10 p-3 rounded-full text-idc-gold mr-4 h-12 w-12 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-idc-navy mb-1">{item.title}</h3>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-idc-navy mb-4">Siège Social - Conakry</h3>
              <div className="rounded-lg overflow-hidden h-64 shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62856.69747382294!2d-13.712437583203101!3d9.535450099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd81ed204e963%3A0x882456496e56c152!2sConakry%2C%20Guinea!5e0!3m2!1sen!2sus!4v1654129505211!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-idc-navy mb-6">Envoyez-nous un Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-10">Questions Fréquentes</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-idc-navy mb-2">Comment obtenir un devis pour mon projet?</h3>
                <p className="text-gray-600">
                  Vous pouvez nous contacter par téléphone, email ou en remplissant le formulaire ci-dessus. 
                  Après une première discussion pour comprendre vos besoins, nous organiserons une visite sur 
                  site si nécessaire, puis vous fournirons un devis détaillé.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-idc-navy mb-2">Quelles sont les zones géographiques couvertes par IDC Consulting?</h3>
                <p className="text-gray-600">
                  Nous opérons principalement en Guinée et en Sierra Leone, avec notre siège à Conakry et un 
                  bureau régional à Freetown. Nous intervenons également dans d'autres pays d'Afrique de l'Ouest 
                  pour des projets spécifiques.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-idc-navy mb-2">Quels types de projets prenez-vous en charge?</h3>
                <p className="text-gray-600">
                  Nous réalisons une large gamme de projets allant des bâtiments résidentiels et commerciaux aux 
                  infrastructures routières, agricoles et de génie civil. Consultez notre page Services pour plus de détails.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-idc-navy mb-2">Comment assurez-vous la qualité de vos constructions?</h3>
                <p className="text-gray-600">
                  Nous suivons un système de management de la qualité certifié ISO 9001:2015, avec des contrôles 
                  rigoureux à chaque étape du projet. Nous utilisons des matériaux de qualité supérieure et 
                  employons des professionnels qualifiés et expérimentés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
