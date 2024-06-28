import path from 'path';
import { promises as fs } from 'fs';
import { Project } from '../types';

export async function getProjects(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
}

export async function getProject(id: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find((project) => project.path ===project.path );
}
