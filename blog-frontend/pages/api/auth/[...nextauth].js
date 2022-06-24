import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
    providers: [
        GoogleProvider({
        clientId: '268860003885-m2ga3om545v4t0i0p4kvf3jqhgav2map.apps.googleusercontent.com',
        clientSecret: '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'
    }),
        GitHubProvider({
        clientId: '1cbb7a72a601e11c3be2',
        clientSecret: '748e83c8a28b1e82685a03ed7ee6c01eb64fcf7a'
    }),
        
    ],
    jwt: {
        encryption: true,
    },
    secret: process.env.SECRET,
   
});
