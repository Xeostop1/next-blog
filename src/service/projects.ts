import path from 'path'
import { promises as fs } from 'fs'

export type Project = {
  id: string
  name: string
  descript: string
  img: string
  href: string
}


export async function getProjects(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), 'data', 'projects.json')
  console.log(filePath)
  const data = await fs.readFile(filePath, 'utf8')
  return JSON.parse(data)
}

export async function getProject(id: string): Promise<Project | undefined> {
  const projects = await getProjects()
  return projects.find((project) => project.id === id)
}
