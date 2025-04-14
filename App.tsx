import "react-native-url-polyfill/auto";
import { useState, useEffect } from "react";
import { supabase } from "./lib/supabase";
import { Session } from "@supabase/supabase-js";
import Auth from "./components/Auth";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./components/Tabs";
import { UserProvider } from "./components/UserContext";

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <UserProvider>
      <NavigationContainer>
        {!session ? <Auth /> : <Tabs user={session.user} />}
      </NavigationContainer>
    </UserProvider>
  );
}
