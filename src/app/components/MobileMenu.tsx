'use client';

import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  openDropdowns: string[];
  toggleDropdown: (name: string) => void;
}

export default function MobileMenu({ isOpen, onClose, openDropdowns, toggleDropdown }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose}>
      <div 
        className="bg-white w-4/5 h-full overflow-y-auto transform transition-transform duration-300 ease-in-out translate-x-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-[#F2277E] focus:outline-none"
              aria-label="Close menu"
            >
              <i className="icofont-close text-2xl"></i>
            </button>
          </div>

          <nav>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="block py-2 px-4 text-gray-700 hover:bg-[#F2277E] hover:text-white rounded transition-colors"
                  onClick={onClose}
                >
                  Home
                </Link>
              </li>

              <li>
                <button
                  onClick={() => toggleDropdown('about')}
                  className="w-full flex justify-between items-center py-2 px-4 text-gray-700 hover:bg-[#F2277E] hover:text-white rounded transition-colors"
                >
                  <span>About Us</span>
                  <i className={`icofont-rounded-${openDropdowns.includes('about') ? 'up' : 'down'} text-xs`}></i>
                </button>
                {openDropdowns.includes('about') && (
                  <ul className="pl-4 mt-1 space-y-1">
                    <li>
                      <Link 
                        href="/AboutElgi" 
                        className="block py-2 px-4 text-gray-700 hover:bg-[#F2277E] hover:text-white rounded transition-colors"
                        onClick={onClose}
                      >
                        About ELGI
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/DirectorMessage" 
                        className="block py-2 px-4 text-gray-700 hover:bg-[#F2277E] hover:text-white rounded transition-colors"
                        onClick={onClose}
                      >
                        Director&apos;s Message
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/ChairmanMessage" 
                        className="block py-2 px-4 text-gray-700 hover:bg-[#F2277E] hover:text-white rounded transition-colors"
                        onClick={onClose}
                      >
                        Chairman&apos;s Message
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/PrincipalDesk" 
                        className="block py-2 px-4 text-gray-700 hover:bg-[#F2277E] hover:text-white rounded transition-colors"
                        onClick={onClose}
                      >
                        Principal Desk
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Add other mobile menu items here */}
              
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
