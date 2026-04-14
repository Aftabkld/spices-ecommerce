import { createContext, useContext, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage('spices-user', null);

  const login = (payload) => {
    setUser({
      name: payload.name || payload.email.split('@')[0],
      email: payload.email,
      loggedInAt: new Date().toISOString(),
    });
  };

  const logout = () => setUser(null);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      isAuthenticated: Boolean(user),
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}
