import axiosCore from 'api/createAxiosClient';
import Loading from 'components/Loading';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'react-toastify';
import { IRole } from 'types/role';
import { useAuth } from './Auth';

// Define el tipo para el contexto
interface AppContextType {
  role: string | null;
  setRole: (role: string) => void;
}

// Crea el contexto
const AppContext = createContext<AppContextType | undefined>(undefined);

// Proveedor del contexto
const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const {userSession} = useAuth()
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false)

  // Efecto para obtener el rol del usuario al cargar la app
  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        setLoading(true)
        const {data} = await axiosCore.get<IRole>(`/user/rol`) // URL del API para obtener el rol
        setRole(data.rol);
      } catch (error) {
        toast.error(`Error al obtener el rol del usuario: ${error}`)
        console.error('Error al obtener el rol del usuario:', error);
      } finally {
        setLoading(false)
      }
    };
    if (userSession) {
      fetchUserRole();
    }
  }, [userSession]);

  return (
    <AppContext.Provider value={{ role, setRole }}>
      {loading ? <Loading linearProgress /> : children}
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
