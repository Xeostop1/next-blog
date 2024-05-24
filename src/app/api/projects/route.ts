
import { getProjects } from '@/service/projects'
import { NextResponse } from 'next/server'


export async function GET(request: Request) {
  const projects = await getProjects()
  return NextResponse.json({ projects })
}
