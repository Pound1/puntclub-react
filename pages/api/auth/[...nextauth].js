import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import prepare from "sql-template-strings";

import query from "../../../lib/db";

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
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
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
    maxAge: 18000 * 24 * 60 * 60, // 180 days
  },
  callbacks: {
    /**
     * @param  {object} user     User object
     * @param  {object} account  Provider account
     * @param  {object} profile  Provider profile
     * @return {boolean|string}  Return `true` to allow sign in
     *                           Return `false` to deny access
     *                           Return `string` to redirect to (eg.: "/unauthorized")
     */
    async session(session, token) {
      // Add property to session, like an access_token from a provider.

      //setup query values
      let qv = session;

      let userLookup = await query(
        prepare`SELECT * FROM users WHERE email = ${qv.user.email} LIMIT 1`
      );

      if (!Object.keys(userLookup.data).length) {
        if (process.env.DEBUG >= 1) {
          console.log(
            "[DEBUG] Sign In: User couldn't be found. Creating user..."
          );
        }

        //Get a nickname
        let nickname = qv.user.email.substring(0, qv.user.email.indexOf("@"));

        //Set signup date
        qv.signupTime = Math.round(Date.now() / 1000);

        const insert = await query(
          prepare`INSERT INTO users (email, name, nickname, joindate) VALUES (${qv.user.email}, ${nickname}, ${session.user.name}, ${qv.signupTime})`
        );

        session.user.nickname = nickname;
      } else {
        //de-nest the user data
        userLookup = userLookup.data[0];
        session.user.nickname = userLookup.nickname;
      }

      session.accessToken = token.accessToken;
      return session;
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
