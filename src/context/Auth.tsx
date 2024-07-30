import React, { useContext, useState, useEffect } from "react";
import { supabase } from "../lib/api";
import { AuthError, Session } from "@supabase/supabase-js";
import Loading from "components/Loading";

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

  // Will be passed down to Signup, Login and Dashboard components
  const value = {
    signOut: () => supabase.auth.signOut(),
    userSession,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <Loading />
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
