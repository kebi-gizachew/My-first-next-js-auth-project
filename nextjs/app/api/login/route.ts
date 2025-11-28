import {prisma} from '@/lib/prisma'
import {createSession} from '@/app/lib/session'

export async function POST(req:Request){
    try{
        const {email,password}=await req.json()
        const tempo=await prisma.user.findUnique({
            where:{email},
            select:{
                id:true,
                email:true,
                password:true
            }
        })
        
        if (!tempo){
            return new Response(JSON.stringify({
                success:false,
                message:"Incorrect Email address."
            }), { status: 401 })
        }
        
        if (password!==tempo.password){
            return new Response(JSON.stringify({
                success:false,
                message:"Incorrect Password."
            }), { status: 401 })
        }
        
        await createSession(tempo.id)
        return new Response(JSON.stringify({
            success:true,
            message:"Logged in successfully."
        }), { status: 200 })
        
    }catch(err){
        console.error("Login error:", err)         
        return new Response(JSON.stringify({
            success:false,
            message:`Login error: Error finding`
        }), { status: 500 })
    }
}