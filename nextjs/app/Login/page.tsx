'use client'
import {useState} from 'react'
export default function loginForm(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [message, setMessage]=useState('')
    const handleSubmit=(async(e:React.FormEvent)=>{
        e.preventDefault()
        try{
        const tempo=await fetch('/api/login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email,password}),
        })
        const data=await tempo.json()
        if (!data.success){
            setMessage(data.message)
        }
        else{
            setMessage(data.message)
            setEmail('')
            setPassword('')
            return 
        }
    }catch(err:any){
        setMessage('There is an Error.')
    }

    })
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <label className="block mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <label className="block mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
         Login
        </button>

        {message && <p className="mt-4 text-center">{message}</p>}
      </form>
    </div>
    )
}