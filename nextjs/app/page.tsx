'use client'
import Link from 'next/link'
import handler from '@/app/lib/functions'
export default function Home(){
  const handlers=(async()=>{
    await handler()
    window.location.href='/Login'

  })
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to My YYou Page</h1>
      <Link href="/dashboard"><button className="h-[60px] w-[20%] text-[30px] bg-blue-500 text-white rounded">Dashboard</button></Link>
      <Link href="/Login"><button className="h-[60px] w-[20%] text-[30px] bg-green-500 text-white rounded mt-4">Login</button></Link>
      <button className="h-[60px] w-[20%] text-[30px] bg-green-500 text-white rounded mt-4" onClick={()=>handlers()}>LogOut</button>
    </div>
  )
}