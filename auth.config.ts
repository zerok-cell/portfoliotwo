import NextAuth, {NextAuthConfig} from "next-auth"

export const { handlers, signIn, signOut, auth } = NextAuth({
    pages:{
            signIn:'/login',
        signOut:'dwd'
    }
})satisfies NextAuthConfig