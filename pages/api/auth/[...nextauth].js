import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'

const maxAged = 60*60;

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
            label: "Email",
            type: "email",
            placeholder: "Username/Email",
          },
        password: {  label: "Password", type: "password" }
      },
      authorize: (credentials) => {
        if (
          credentials.username === "abdullah@test.com" &&
          credentials.password === "7ctech"
        ) {
          return {
            id: 2,
            name: "abdullah",
            email: "abdullah@test.com",
          };
        }
        return null;
      },
    })
  ],
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