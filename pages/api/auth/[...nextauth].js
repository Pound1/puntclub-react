import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    /*Providers.Credentials({
          id: "domain-login",
          name: "Domain Account",
          async authorize(credentials) {
            const user = {
              //add function to get user
            };
            return user;
          },
          credentials: {
            username: { label: "Username", type: "text ", placeholder: "jsmith" },
            password: { label: "Password", type: "password" },
          },
        }),*/
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,

      //fires when the next-auth client signin method is called
      async profile(profile, tokens) {
        console.log(profile);
        // You can use the tokens, in case you want to fetch more profile information
        // For example several OAuth provider does not return e-mail by default.
        // Depending on your provider, will have tokens like `access_token`, `id_token` and or `refresh_token`
        return {
          id: profile.id,
          name: profile.name,
          hello: "test",
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],
  session: {
    //use json web tokens for session
    jwt: true,

    //idle session lifetime in seconds
    maxAge: 180 * 24 * 60 * 60, // 180 days
  },
};

export default (req, res) => NextAuth(req, res, options);
