import { initializeApp, cert, getApp } from "firebase-admin/app";

/**
 * Make sure that we initialize the firebase app only once
 */
const createFirebaseApp = () => {
  const config = useRuntimeConfig();
  try {
    return getApp();
  } catch {
    const firebaseConfig = {
      credential: cert({
        projectId: config.firebaseadmin.projectId,
        clientEmail: config.firebaseadmin.clientEmail,
        privateKey: config.firebaseadmin.privateKey,
      }),
    };
    return initializeApp(firebaseConfig);
  }
};

export default defineNuxtPlugin(() => {
  createFirebaseApp();
});
