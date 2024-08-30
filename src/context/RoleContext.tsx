import axiosCore from 'api/createAxiosClient';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useGetRole } from 'services/hooks/useGetRole';
import { IRole } from 'types/role';

// Define el tipo para el contexto
interface AppContextType {
  name: string;
  setName: (name: string) => void;
  role: string | null;
  setRole: (role: string) => void;
}

// Crea el contexto
const AppContext = createContext<AppContextType | undefined>(undefined);

// Proveedor del contexto
const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { data: roleData, isFetching: roleIsFetching, isError: isErrorRole } = useGetRole()
  const [name, setName] = useState<string>('John Doe');
  const [role, setRole] = useState<string | null>(null);

  // Efecto para obtener el rol del usuario al cargar la app
  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const {data} = await axiosCore.get<IRole>(`/user/rol`) // URL del API para obtener el rol
        setRole(data.rol);
      } catch (error) {
        console.error('Error al obtener el rol del usuario:', error);
      }
    };

    fetchUserRole();
  }, []);

  return (
    <AppContext.Provider value={{ name, setName, role, setRole }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook para usar el contexto
const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext debe ser utilizado dentro de un AppProvider');
  }
  return context;
};

export { AppProvider, useAppContext };
