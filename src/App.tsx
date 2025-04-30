import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GraduationCap, Lightbulb, Building2, Users, ArrowRight, Target, Globe } from 'lucide-react';
import AboutPage from './pages/AboutPage';
import ProfileMenu from './components/ProfileMenu';


// Composant de la page d'accueil
const HomePage: React.FC = () => {
  // const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* <Lightbulb className="w-8 h-8" /> */}
            <span className="text-2xl font-bold"><img src='../logo.jpg' className="w-12 h-12" /></span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {/* <Link to="/about" className="hover:text-orange-200">À propos</Link> */}
            {/* <Link to="#experts" className="hover:text-orange-200">Experts</Link>
            <Link to="#partners" className="hover:text-orange-200">Partenaires</Link> */}
            
            {/* {user ? (
              <ProfileMenu />
            ) : (
              <>
                <Link to="/login" className="hover:text-orange-200">Connexion</Link>
                <Link to="/signup" className="bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-100">
                  S'inscrire
                </Link>
              </>
            )} */}
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-20">
          <div className="md:w-2/3">
            <h1 className="text-5xl font-bold mb-6">Bâtir le Future des Nations</h1>
            <p className="text-xl mb-8">BTFN est un mouvement qui consiste à réunir des personnes qui veulent résoudre les problèmes de leurs communautés
en mettant en place des actions entrepreneuriales. Avec des ressources limitées sur le continent africain, il est
nécessaire de repenser le modèle d’entrepreneuriat afin d’inciter une dynamique créative au sein des populations.
Pour cela, nous voulons encourager le principe de frugalité qui consiste à faire beaucoup avec peu . Nous souhaitons
valoriser l’importance des idées créatrices, collaboratrices, et montrer qu’il est possible d’avoir un impact sur sa
génération en partant d’une simple idée. Car nous croyons que chaque entreprise réussit parce qu’elle a su discerner
un problème de société auquel elle s’est attelée à résoudre. Il en est de même pour chaque projet entrepreneurial:
Observer, réfléchir, résoudre.</p>
            {/* <Link to={user ? (user.role === 'student' ? '/experts' : '/dashboard') : '/signup'} className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-orange-100 flex items-center inline-block">
              {user ? 'Accéder à mon espace' : 'Rejoindre le programme'}
              <ArrowRight className="ml-2" />
            </Link> */}
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSf6uovpR5dh4NDVOOstXzHOjIbvxIVjY6VnkxeVpJUR7NisZA/viewform" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-orange-100 flex items-center inline-block">
              Rejoindre le programme
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">À Propos de BTFN</h2>
            <p className="text-lg text-gray-600 mb-12">
            BTFN est un mouvement qui consiste à réunir des personnes qui veulent résoudre les problèmes de leurs communautés en mettant en place des actions entrepreneuriales.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Notre Mission</h3>
                <p className="text-gray-600">
                  Booster l'innovation et l'entrepreneuriat en Afrique.
                </p>
              </div>
              <div>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Notre Approche</h3>
                <p className="text-gray-600">
                  Mentorat personnalisé et accompagnement sur mesure.
                </p>
              </div>
              <div>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Notre Vision</h3>
                <p className="text-gray-600">
                Transformer nos communautés sur les principes 
                du Royaume de Dieu.
                </p>
              </div>
            </div>
            <Link 
              to="/about"
              className="mt-12 inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition duration-200"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section id="experts" className="bg-orange-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-center mb-12">Rejoindre le mouvement</h2>
            {/* <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Diallo",
                  expertise: "Tech & Innovation",
                  image: "https://images.unsplash.com/photo-1539935483303-bc4b7bc081a3?w=400&h=400&fit=crop",
                },
                {
                  name: "Jean Kouassi",
                  expertise: "Finance & Investment",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
                },
                {
                  name: "Aminata Touré",
                  expertise: "Marketing Digital",
                  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
                }
              ].map((expert, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img src={expert.image} alt={expert.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{expert.name}</h3>
                    <p className="text-gray-600">{expert.expertise}</p>
                    <Link to={user ? '/class/' + (index + 1) : '/signup'} className="mt-4 text-orange-600 font-semibold hover:text-orange-700 inline-block">
                      Rejoindre la classe →
                    </Link>
                  </div>
                </div>
              ))}
            </div> */}
            <div>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Vous souhaitez devenir candidat, partenaire, rejoindre notre communauté d’experts?
                </h3>
                <p className="text-gray-600">
                Contactez-nous ! Nous ne manquerons pas de vous répondre rapidement.
                </p>
              </div>
            <div className="grid display-flex justify-center">
              <Link 
                to="https://docs.google.com/forms/d/e/1FAIpQLSf6uovpR5dh4NDVOOstXzHOjIbvxIVjY6VnkxeVpJUR7NisZA/viewform"
                className="mt-12 inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition duration-200"
              >
                S'inscrire
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Partners Section */}
      {/* <section id="partners" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Partenaires</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((partner) => (
              <div key={partner} className="bg-gray-100 h-32 rounded-lg flex items-center justify-center">
                <Building2 className="w-12 h-12 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="bg-orange-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à Commencer Votre Voyage Entrepreneurial?</h2>
          <p className="text-xl mb-8">Rejoignez notre communauté et transformez votre vision en réalité.</p>
          <Link to={user ? (user.role === 'student' ? '/experts' : '/dashboard') : '/signup'} className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-orange-100 inline-block">
            {user ? 'Accéder à mon espace' : 'S\'inscrire Maintenant'}
          </Link>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Lightbulb className="w-6 h-6" />
                <span className="text-xl font-bold">BTFN</span>
              </div>
              <p className="text-gray-400">Construisons ensemble le future des Nations.</p>
            </div>
            <div>
            <Link to="/about">
              <h4 className="text-lg font-semibold mb-4">Programme</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Comment ça marche</li>
              </ul>
            </Link>
              {/* <h4 className="text-lg font-semibold mb-4">Programme</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Comment ça marche</li>
                <li>Nos experts</li>
                <li>Témoignages</li>
              </ul> */}
            </div>
              {/* <div>
                <h4 className="text-lg font-semibold mb-4">Ressources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Blog</li>
                  <li>Guides</li>
                  <li>FAQ</li>
                </ul>
              </div> */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Buildingthefutureofnations@gmail.com</li>
                <li>+33774936611</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BTFN. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      {/* <AuthProvider> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<SignInPage />} /> */}
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/experts" element={<ExpertsPage />} /> */}
        </Routes>
      {/* </AuthProvider> */}
    </Router>
  );
}

export default App;