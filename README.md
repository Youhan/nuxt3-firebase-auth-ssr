# Nuxt 3 Firebase Auth


I got the ideas from [damien-hl/nuxt3-auth-example](https://github.com/damien-hl/nuxt3-auth-example) and tried to integrate it with Firebase as the Auth provider. 

## Key features

1. Based on nuxt 3
2. Firebase Auth (Google oAuth)
3. SSR support
4. Server side cookie based auth

## How it works

The idea is to authenticate the user using Firebase client Auth library. Then we get an `idToken` as a result of successful authentication. We then send the `idToken` to a Nuxt 3 server route. The server route is named `login.post.ts`. It uses the token to ask Firebase to create a session cookie using `firebase-admin`. Then we set that cookie for the browser along with any custom claims. We then return the `User` object back to the client.

The client sets the User object and makes it accessible for the app using Nuxt's `useState` composable.

Now on any subsequent client side navigation, the User state is available and the app can use it by `const user = useAuthUser()`.

Now if you reload the page, there is a plugin named `plugins/auth.ts` that awaits for response of a request to a server route and asks for the user. The `api/auth/me` reads the cookie, gets the user object from Firestore and sends the User object back or sends null. All of this will happen on the server without any HTTP calls thanks to Nuxt 3 Nitro and H3. If it gets a user object back, it sets the state. Then all the middleware and other parts of the app can use the User object.

Hope this helps someone.

## How to setup and run 

1. Clone the repo
2. Create a Firebase project and get your config
3. Create a service account in Firebase dashboard and download the json file
4. Enable Google oAuth in Firebase dashboard
5. Using 2 and 3, create a `.env` file in the root of the project (use the env.sample as a template)
6. `yarn install` and `yarn dev` to run the project