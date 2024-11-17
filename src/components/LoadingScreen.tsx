import React, { useEffect, useState } from 'react';
import { BoxesIcon } from 'lucide-react';

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide loader after 800ms
    const timer = setTimeout(() => {
      setShow(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-light via-primary to-primary-dark flex items-center justify-center z-50">
      <div className="text-center">
        <div className="inline-block animate-[bounce_0.5s_ease-in-out_infinite]">
          <BoxesIcon className="w-16 h-16 text-white/90" />
        </div>
        <h1 className="text-3xl font-bold text-white/90 mt-4 animate-[pulse_1s_ease-in-out_infinite]">
          LOCO
        </h1>
      </div>
    </div>
  );
}