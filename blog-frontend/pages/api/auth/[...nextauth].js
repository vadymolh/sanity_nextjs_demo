import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";


export default NextAuth({
    providers: [
        GoogleProvider({
        clientId: '268860003885-m2ga3om545v4t0i0p4kvf3jqhgav2map.apps.googleusercontent.com',
        clientSecret: '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'
    })
    ],
    jwt: {
        encryption: true,
    },
    secret: process.env.SECRET,
    callbacks: {
        async jwt(token, account){
            if (account?.accessToken){
                token.accessToken = account.accessToken;
            }
            return token;
        }
    }
});
