import { useAuthUser } from "./useAuthUser";
import {
  GoogleAuthProvider,
  getIdToken,
  inMemoryPersistence,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";

export const useAuth = () => {
  const { $fireAuth } = useNuxtApp();

  const authUser = useAuthUser();

  const setUser = (user: any) => {
    authUser.value = user;
  };

  const setCookie = (cookie: any) => {
    cookie.value = cookie;
  };

  const me = async () => {
    if (!authUser.value) {
      try {
        
        const data = await $fetch("/api/auth/me", {
          headers: useRequestHeaders(["cookie"]) as HeadersInit,
        });

        setUser(data.user);
      } catch (error) {
        setCookie(null);
      }
    }

    return authUser;
  };

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await setPersistence($fireAuth, inMemoryPersistence);
      const result = await signInWithPopup($fireAuth, provider);
      const firebaseIdToken = await getIdToken(result.user);

      // send firebaseIdToken to server
      const data = await $fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ firebaseIdToken }),
      });

      setUser(data.user);
    } catch (error) {
      console.log(error);
      setCookie(null);
      setUser(null);
    }

    return authUser;
  };

  const logout = async () => {
    const data = await $fetch("/api/auth/logout", {
      method: "POST",
    });

    setUser(data.user);
  };

  return {
    logout,
    loginWithGoogle,
    me,
  };
};
