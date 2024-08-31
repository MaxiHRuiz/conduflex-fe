import React, { useContext, useState, useEffect } from "react";
import { supabase } from "../lib/api";
import { AuthError, Session } from "@supabase/supabase-js";
import Loading from "components/Loading";
import SessionDialog from "../components/SessionDialog";

const defaultValues = {
  signOut: function (): Promise<{
    error: AuthError | null;
  }> {
    throw new Error("Function not implemented.");
  },
  userSession: undefined,
};

export const AuthContext = React.createContext<{
  signOut: () => Promise<{
    error: AuthError | null;
  }>;
  userSession: Session | null | undefined;
}>(defaultValues);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userSession, setUserSession] = useState<Session | null>();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserSession(session ?? null);
      setLoading(false);
    });

    // Listen for changes on auth state (logged in, signed out, etc.)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserSession(session);
      setLoading(false);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (userSession) {
      const currentTime = Math.floor(Date.now() / 1000);
      if (userSession.expires_at && userSession.expires_at < currentTime) {
        console.log('Token has expired');
        setDialogOpen(true);
      } else {
        console.log('Token is valid');
      }
    }
  }, [userSession]);

  const handleClose = () => {
    setDialogOpen(false);
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = '/login';
  };

  const handleRefresh = async () => {
    setDialogOpen(true);
    supabase.auth.refreshSession().then(({ data: { session } }) =>{
      setUserSession(session ?? null);
    }).catch((error) => {
      console.error('Error refreshing token:', error);
      window.location.href = '/login';
    }).finally(() => {
      setDialogOpen(false);
    })
  };

  // Will be passed down to Signup, Login and Dashboard components
  const value = {
    signOut: () => supabase.auth.signOut(),
    userSession,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <Loading linearProgress />
      ) : (
        children
      )}
      <SessionDialog open={dialogOpen} onClose={handleClose} onRefresh={handleRefresh} />
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
