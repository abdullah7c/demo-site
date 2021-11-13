import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'

const maxAged = 60*60;

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Your Mail" },
        password: {  label: "Password", type: "Password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
  
        if (
          credentials.username === "abdullah@test.com" &&
          credentials.password === "7ctech"
        ) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null or false then the credentials will be rejected
          return null
          // You can also Reject this callback with an Error or with a URL:
          // throw new Error('error message') // Redirect to error page
          // throw '/path/to/redirect'        // Redirect to a URL
        }
      }
    })
  ],
  // providers: [
  //   CredentialsProvider({
  //     name: 'Credentials',
  //     credentials: {
  //       username: {
  //           label: "Email",
  //           type: "email",
  //           placeholder: "Username/Email",
  //         },
  //       password: {  label: "Password", type: "password" }
  //     },
  //     authorize: (credentials) => {
  //       if (
  //         credentials.username === "abdullah@test.com" &&
  //         credentials.password === "7ctech"
  //       ) {
  //         return {
  //           id: 2,
  //           name: "abdullah",
  //           email: "abdullah@test.com",
  //         };
  //       }
  //       return null;
  //     },
  //   })
  // ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  secret: "test",
  jwt: {
    signingKey: 'Dl89-iVEL029EC5BEVmlJUgGm5Hc5Q7cD3BEVVE-x9oZHc52TDteDl893BEV-iVE-x9E-x9E52TDJUg99_ZC5DmlJUgGm9oZ99_25Hc5Qch',
    verificationKey: "oct",
    verificationOptions :   {
        maxTokenAge: `${maxAged}s`, // e.g. `${30 * 24 * 60 * 60}s` = 30 days
        algorithms: ['HS512']
      },
    secret: "test",
    encryption: true,
  },
  session: {
  maxAge: maxAged,

},
//   pages: {
//     signIn: "auth/signin",
//   },
})