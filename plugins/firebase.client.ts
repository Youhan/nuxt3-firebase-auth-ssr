import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin(async(nuxtApp) => {
  const config = useRuntimeConfig()

  const firebaseConfig = config.public.firebase;

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  return {
    provide: {
      fireAuth: auth,
      fireStore: firestore,
      fireAnalytics: analytics,
    },
  };

});
