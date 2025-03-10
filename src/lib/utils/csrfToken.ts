export const getCsrfToken = () => {
  const tokenString = localStorage.getItem('csrfToken');
  return tokenString === 'undefined' || tokenString === 'null' ? null : tokenString;
};

export const setCsrfToken = (csrfToken: string) => {
  localStorage.setItem('csrfToken', csrfToken);
};

export const removeCsrfToken = () => {
  localStorage.removeItem('csrfToken');
};

export const getCsrfExpiration = () => {
  const expiration = localStorage.getItem('csrf_expiration');
  return expiration ? parseInt(expiration) : null;
};

export const setCsrfExpiration = (expiration: string) => {
  localStorage.setItem('csrf_expiration', expiration);
};

export const removeCsrfExpiration = () => {
  localStorage.removeItem('csrf_expiration');
};
