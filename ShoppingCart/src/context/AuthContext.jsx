import React, { createContext, useState, useEffect, useContext } from 'react';

// Crea el contexto de autenticación
export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('auth') === 'true';
    });

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('auth', 'true');
    };

 
    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('auth');
    };

   
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};