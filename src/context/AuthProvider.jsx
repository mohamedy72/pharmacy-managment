import supabase from "@/config/supabaseClient";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [sessionObj, setSessionObj] = useState(null);
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getCurrentSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) throw error;
      setAuthUser(session?.user || null);
      setSessionObj(session || null);
      setLoading(false);
    };

    const { data: authSession } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event == "SIGNED_IN") {
          console.log("sign in", session);
          setSessionObj(session);
          setAuthUser(session?.user);
          setLoading(false);
        } else if (event == "SIGNED_OUT") {
          console.log("sign out", session);
          setSessionObj(null);
          setAuthUser(null);
          setLoading(false);
        }
      }
    );
    getCurrentSession();
    return () => {
      authSession?.subscription.unsubscribe();
    };
  }, []);

  const value = {
    authUser,
    sessionObj,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
