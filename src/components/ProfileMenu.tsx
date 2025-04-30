import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, LogOut, Settings } from 'lucide-react';

const ProfileMenu: React.FC = () => {
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!user) return null;

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
          {user.avatar_url ? (
            <img
              src={user.avatar_url}
              alt={user.full_name || user.email}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <User className="w-5 h-5 text-orange-600" />
          )}
        </div>
        <span className="hidden md:block text-sm font-medium">
          {user.full_name || user.email.split('@')[0]}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          <div className="px-4 py-2 border-b">
            <p className="text-sm font-medium">{user.full_name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
            <p className="text-xs text-orange-600 mt-1 capitalize">{user.role}</p>
          </div>
          
          <a
            href="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
          >
            <Settings className="w-4 h-4 mr-2" />
            Paramètres du profil
          </a>
          
          {user.role === 'expert' && (
            <a
              href="/expert/classes"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Gérer mes classes
            </a>
          )}
          
          {user.role === 'student' && (
            <a
              href="/student/enrollments"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Mes inscriptions
            </a>
          )}
          
          <button
            onClick={signOut}
            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Déconnexion
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;