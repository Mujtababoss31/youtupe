
import { useEffect, useState } from 'react';

export default function IntroScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return show ? (
    <div className="fixed top-0 left-0 w-full h-full bg-black text-white flex items-center justify-center z-50 text-3xl animate-fadeOut">
      🔥 Welcome to Youtupe 🔥
    </div>
  ) : null;
}
