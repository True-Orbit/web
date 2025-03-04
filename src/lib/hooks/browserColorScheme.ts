import { useState, useEffect } from 'react';

export const useBrowserColorScheme = (): 'light' | 'dark' => {
  const [isLightMode, setIsLightMode] = useState(true);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    setIsLightMode(mediaQuery.matches);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (e: any) => {
      if (isLightMode !== e.matches) setIsLightMode(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isLightMode ? 'light' : 'dark';
};
