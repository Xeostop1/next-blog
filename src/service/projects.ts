import path from 'path';
import { promises as fs } from 'fs';
import { Project } from '../types/project';

export async function getProjects(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
}

export async function getProject(id: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find((project) => project.path ===project.path );
}


//서비스와 필요한 것만 넣기
//작은 어플에는 서비스->에서 넣고 정리 하게 만약에 
//재사용할떄는 그냥 안에서 정의하는 것이 좋다! 