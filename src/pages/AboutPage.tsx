import React from 'react';
import MainNav from '../components/MainNav';
import { Lightbulb, Users, Target, Globe, Calendar, CheckCircle, ArrowRight, BookOpen, Heart, Brain, SprayCan as Pray, Book } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <MainNav />

      {/* Contexte Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contexte</h1>
          <div className="md:w-2/3">
            <p className="text-xl mb-6 leading-relaxed">
BFN est un mouvement qui consiste à réunir des personnes qui veulent résoudre les problèmes de leurs communautés
en mettant en place des actions entrepreneuriales. Avec des ressources limitées sur le continent africain, il est
nécessaire de repenser le modèle d’entrepreneuriat afin d’inciter une dynamique créative au sein des populations.
Pour cela, nous voulons encourager le principe de frugalité qui consiste à faire beaucoup avec peu . Nous souhaitons
valoriser l’importance des idées créatrices, collaboratrices, et montrer qu’il est possible d’avoir un impact sur sa
génération en partant d’une simple idée. Car nous croyons que chaque entreprise réussit parce qu’elle a su discerner
un problème de société auquel elle s’est attelée à résoudre. Il en est de même pour chaque projet entrepreneurial:
Observer, réfléchir, résoudre.
            </p>
            <p className="text-xl mb-6 leading-relaxed">
Nous avons choisi de créer ce mouvement parce que nous croyons que Dieu est le Dieu du mouvement et non d’un
monument. Il y a beaucoup de dons, de qualités, de richesses qui ont été déversés sur le continent africain, mais cela a
entrainé un contentement, plutôt que de créer une dynamique, un mouvement, un changement avec les ressources
disponibles. A travers ce mouvement, nous souhaitons impulser cette dynamique de transformation de nos
communautés.
            </p>
            <div className="bg-white/10 p-6 rounded-lg mt-8">
              <p className="text-lg italic">
                "Toutes nos actions sont basées sur des principes du Royaume de Dieu : l'excellence, l'amour, 
                la persévérance, la joie, la paix, la patience, la bonté, la bénignité, la fidélité, la douceur, 
                la tempérance, la discipline, l'honnêteté et l'humilité."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Raison d'être Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Pourquoi ce Programme ?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Raison d'être</h3>
              <p className="text-gray-700 mb-6">
              Notre volonté de créer ce mouvement a été motivée par la nécessité de voir nos communautés transformées à
l’image de Dieu, en adoptant les principes solides pour bâtir nos communautés. Nous voulons inciter et préparer les
générations à résoudre les problèmes de leurs communautés à travers des œuvres entrepreneuriales, tout en ayant
la culture du Royaume de Dieu.
Après avoir observé nos communautés, nous avons compris que le véritable problème n’était pas de créer des
entreprises ou de financer des projets, mais plutôt de construire des personnes capables de porter les projets.
Lorsqu’une maison est bâtie sur le roc, elle ne s’écroulera pas facilement lorsque le vent et la tempête arriveront.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 bg-orange-50 p-4 rounded-lg">
                  <Heart className="w-8 h-8 text-orange-600" />
                  <span>Accompagnement personnalisé par des entrepreneurs africains ayant réussi</span>
                </div>
                <div className="flex items-center space-x-4 bg-orange-50 p-4 rounded-lg">
                  <Target className="w-8 h-8 text-orange-600" />
                  <span>Focus sur les projets à fort potentiel d'impact</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Particularités du Programme</h3>
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <Brain className="w-8 h-8 text-orange-600 mb-4" />
                  <h4 className="font-semibold mb-2">Apprentissage Innovant</h4> {/* à modifier avec Miche*/}
                  <p>Accompagnement personnalisé par des entrepreneurs africains ayant réussi</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <Pray className="w-8 h-8 text-orange-600 mb-4" />
                  <h4 className="font-semibold mb-2">Développement Holistique</h4> {/* à modifier avec Miche*/}
                  <p>Focus sur les projets à fort potentiel d'impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organisation du Programme Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Organisation du Programme</h2>
          
          {/* Étapes */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8">Les Deux Étapes du Programme</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 font-bold">1</span>
                  </div>
                  <h4 className="text-xl font-semibold">Phase Théorique</h4>
                </div>
                <p className="text-gray-700">
                  3 jours intensifs d'ateliers, rencontres et moments ludiques. Les participants seront soumis 
                  à des défis à relever pendant cette période.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 font-bold">2</span>
                  </div>
                  <h4 className="text-xl font-semibold">Phase Pratique</h4>
                </div>
                <p className="text-gray-700">
                  4 mois de travail intense avec accompagnement senior. Les participants développeront 
                  leurs propres projets avec un suivi personnalisé.
                </p>
              </div>
            </div>
          </div>

          {/* Dates Clés */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8">Dates Clés</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Calendar className="w-8 h-8 text-orange-600 mb-4" />
                <h4 className="font-semibold mb-2">Phase Théorique</h4>
                <p className="text-gray-600">30 mai - 1er juin 2025</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Calendar className="w-8 h-8 text-orange-600 mb-4" />
                <h4 className="font-semibold mb-2">Phase Pratique</h4>
                <p className="text-gray-600">1er juillet - 31 octobre 2025</p>
              </div>
            </div>
          </div>

          {/* Attendus */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Les Attendus</h3>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Activités du Programme</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <ArrowRight className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                      <span>Réunions avec les coachs, parrains et leaders spirituels</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                      <span>Ateliers de formation</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                      <span>Sessions de présentation/pitch</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Livrables Attendus</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Book className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                      <span>Document de projet (5-10 pages)</span>
                    </li>
                    <li className="flex items-start">
                      <Book className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                      <span>Présentation PowerPoint</span>
                    </li>
                    <li className="flex items-start">
                      <Book className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                      <span>Vidéo de présentation (optionnelle)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Participation au Programme Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Participation au Programme</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Conditions de Participation</h3>
              <div className="bg-orange-50 p-6 rounded-lg">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Programme gratuit et ouvert à tous</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Maîtrise du français requise</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Inscription préalable obligatoire</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Engagement à respecter la vision et les règles du programme</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <p className="font-semibold mb-2">Capacité d'accueil :</p>
                  <ul className="space-y-2">
                    <li>• Phase Théorique : 200 participants</li>
                    <li>• Phase Pratique : 50 participants (10 groupes de 5)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Accompagnement</h3>
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <Users className="w-8 h-8 text-orange-600 mb-4" />
                  <h4 className="font-semibold mb-2">Coachs Professionnels</h4>
                  <p>Professionnels actifs dans des entreprises locales</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <Target className="w-8 h-8 text-orange-600 mb-4" />
                  <h4 className="font-semibold mb-2">Mentors Spécialisés</h4>
                  <p>Experts avec une expérience spécifique liée aux projets</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <Pray className="w-8 h-8 text-orange-600 mb-4" />
                  <h4 className="font-semibold mb-2">Leaders Spirituels</h4>
                  <p>Accompagnement spirituel et enseignement des principes bibliques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Résultats Escomptés Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Résultats Escomptés</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Objectifs du Programme</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Target className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <span>Développement des idées et projets transformateurs</span>
                </li>
                <li className="flex items-start">
                  <Target className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <span>Création d'une expérience inoubliable</span>
                </li>
                <li className="flex items-start">
                  <Target className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <span>Établissement de relations de valeur entre participants et mentors</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Support Post-Programme</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Globe className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <span>Accompagnement pour les concours nationaux et internationaux</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <span>Partage continu de ressources entrepreneuriales</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                  <span>Maintien du réseau et des contacts professionnels</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <blockquote className="text-xl italic text-gray-700 mb-6">
              "Dieu les bénit, et Dieu leur dit : Soyez féconds, multipliez, remplissez la terre, et l'assujettissez"
            </blockquote>
            <p className="text-gray-600">- Genèse 1:28</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;