import { getAuth } from "firebase-admin/auth";


export default defineEventHandler(async (event) => {

  const config = useRuntimeConfig();

  const { firebaseIdToken } = await readBody(event);
  
  
  try {
    const sessionCookie = await getAuth().createSessionCookie(firebaseIdToken, {expiresIn: config.public.authCookieExpires});
    
    
    setCookie(event, config.public.authCookieName, sessionCookie, {
      maxAge: config.public.authCookieExpires,
      sameSite: "strict",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });
    
    const token = await getAuth().verifySessionCookie(sessionCookie, true);

    // ser custom claims
    // doc https://firebase.google.com/docs/auth/admin/custom-claims
    await getAuth().setCustomUserClaims(token.uid, {
      admin: true,
      username: "admin",
    });

    const user = await getAuth().getUser(token.uid);
    return { user };

  } catch (error) {
    console.log(error);

    return createError({
      statusCode: 401,
      message: "Not authenticated",
    });
  }
});
