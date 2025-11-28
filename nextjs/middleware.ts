import {cookies} from 'next/headers'
import {NextResponse,NextRequest} from 'next/server'
import {decrypt} from '@/app/lib/session'
const hiddenPlaces=['/dashboard']
const revealed=['/Login']
export default async function middleware(req:NextRequest){
    const path=req.nextUrl.pathname
    const isPublic=revealed.includes(path)
    const isProtected=hiddenPlaces.includes(path)
    const cookie=(await cookies()).get("session")?.value
    const session=await decrypt(cookie)
    if (isProtected && !session?.userId){
        return NextResponse.redirect(new URL("/Login",req.nextUrl) )
    }
    if (isPublic && session?.userId){
        return NextResponse.redirect(new URL("/dashboard",req.nextUrl))
    }
    return NextResponse.next()
}
