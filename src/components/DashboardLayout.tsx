import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BoxesIcon, Settings, LogOut, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const userMenuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: BoxesIcon },
    { label: 'Workflows', path: '/workflows', icon: BoxesIcon },
    { label: 'Automations', path: '/automations', icon: BoxesIcon },
    { label: 'Analytics', path: '/analytics', icon: BoxesIcon },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-dark transition-colors">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gradient-sidebar border-r border-gray-200 dark:border-primary-darker/20">
          <div className="flex items-center mb-8 pl-2.5">
            <BoxesIcon className="w-8 h-8 text-primary mr-3" />
            <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">LOCO</span>
          </div>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center px-4 py-3 text-gray-700 dark:text-primary-light/90 rounded-lg
                  hover:bg-primary-light/20 dark:hover:bg-primary-dark/20 hover:text-primary-dark 
                  dark:hover:text-primary-light transition-all duration-300 hover:translate-x-1"
              >
                <item.icon className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:scale-110" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className="md:ml-64 min-h-screen">
        {/* Top bar */}
        <header className="bg-white dark:bg-gradient-sidebar border-b border-gray-200 dark:border-primary-darker/20 px-4 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-primary-darker/20"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* User menu */}
            <div className="relative ml-auto" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-primary-darker/20"
              >
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
                <span className="hidden md:block text-sm font-medium dark:text-gray-200">John Doe</span>
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-primary-darker/95 backdrop-blur-sm rounded-lg shadow-lg py-1 border border-gray-200 dark:border-primary-dark/20 animate-slideDown">
                  <button 
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-primary-dark/20 flex items-center"
                    onClick={toggleTheme}
                  >
                    {theme === 'dark' ? (
                      <>
                        <Sun size={16} className="mr-2" /> Light Mode
                      </>
                    ) : (
                      <>
                        <Moon size={16} className="mr-2" /> Dark Mode
                      </>
                    )}
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-primary-dark/20 flex items-center">
                    <Settings size={16} className="mr-2" /> Settings
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-primary-dark/20 flex items-center">
                    <LogOut size={16} className="mr-2" /> Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="p-4 md:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}