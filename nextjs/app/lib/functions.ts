'use client'
export default async function handler(){
    const use=await fetch('/api/logout', 
      {method: 'POST',
      headers:{'Content-Type':'application/json'},

      }
    )

  }