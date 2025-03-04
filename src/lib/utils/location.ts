export const setPreloginLocation = (path: string) => {
  sessionStorage.setItem('preLoginLocation', path);
};

export const getPreloginLocation = (): string | null => sessionStorage.getItem('preLoginLocation');

export const clearPreloginLocation = () => {
  sessionStorage.removeItem('preLoginLocation');
};