# Nuxt 3 Firebase Auth


I got the ideas from [damien-hl/nuxt3-auth-example](https://github.com/damien-hl/nuxt3-auth-example) and tried to integrate it with Firebase as the Auth provider. 

## Blog post
[https://ajahandideh.com/articles/nuxt3-ssr-firebase-auth](https://ajahandideh.com/articles/nuxt3-ssr-firebase-auth)

## How to setup and run 

1. Clone the repo
2. Create a Firebase project and get your config
3. Create a service account in Firebase dashboard and download the json file
4. Enable Google oAuth in Firebase dashboard
5. Using 2 and 3, create a `.env` file in the root of the project (use the env.sample as a template)
6. `yarn install` and `yarn dev` to run the project