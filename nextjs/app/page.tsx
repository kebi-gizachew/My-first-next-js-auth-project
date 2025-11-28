import Link from 'next/link'
export default function Home(){
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to My YYou Page</h1>
      <Link href="/dashboard"><button className="h-[60px] w-[20%] text-[30px] bg-blue-500 text-white rounded">Dashboard</button></Link>
      <Link href="/Login"><button className="h-[60px] w-[20%] text-[30px] bg-green-500 text-white rounded mt-4">Login</button></Link>
    </div>
  )
}