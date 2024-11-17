import React from 'react';
import { BoxesIcon } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function AuthLayout({ children, title }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-primary to-primary-dark flex items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="w-full max-w-[90%] xl:max-w-[1200px] bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-6 md:p-8 lg:p-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl mb-4">
            <BoxesIcon className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">LOCO</h1>
          <p className="text-gray-600 mt-2 text-base md:text-lg">{title}</p>
        </div>
        {children}
      </div>
    </div>
  );
}