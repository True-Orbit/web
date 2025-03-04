import { useState, useEffect } from 'react';

export const useBrowserColorScheme = (): 'light' | 'dark' => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
  const [isLightMode, setIsLightMode] = useState(mediaQuery.matches);
  
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (e: any) => {
      if (isLightMode !== e.matches) setIsLightMode(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isLightMode ? 'light' : 'dark';
};
