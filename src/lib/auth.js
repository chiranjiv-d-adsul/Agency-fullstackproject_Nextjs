import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { connectToDb } from "./utils";
import { User } from "./models";
import CredentialsProvider from "next-auth/providers/credentials"


export const {
   handlers:{ GET,POST },
    signIn,
    signOut,
    auth,
   } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    CredentialsProvider({
        async authorize(credentials){

        }
    })
  ],
  callbacks:{
    async signIn({user,account,profile}){
      // console.log(user,account,profile);

      console.log(profile);
      if(account.provider === "github"){
        connectToDb();
        try {
            const user  = await User.findOne({email: profile.email});

            if(!user){
              const newUser = new User({
                  username: profile.login,
                  email: profile.email,
                  image:profile.avatar_url,
              });
              await newUser.save();
            }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
  },

});
