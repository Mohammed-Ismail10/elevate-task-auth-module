import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
export const options = {
  pages: {
    newUser: "/signup",
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          console.log(credentials);
          const response = await fetch(
            "https://exam.elevateegy.com/api/v1/auth/signin",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
            }
          );
          const data = await response.json();
          console.log(data);
          if(data?.user?.email === credentials?.email) return data;
        } catch (error) {
          console.log(error);
        }
      },
      credentials: {},
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
    }),
  ],
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
