import { deleteSession } from '@/app/lib/session'
import { NextResponse } from 'next/server'

export async function POST() {
  await deleteSession()
  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000'
  return NextResponse.redirect(new URL('/Login', baseUrl))
}