import path from 'path';
import { promises as fs } from 'fs';
import { Project } from '../types';

// 프로젝트 목록을 가져오는 함수
export async function getProjects(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), 'data', 'projects.json'); // JSON 파일 경로 설정
  const data = await fs.readFile(filePath, 'utf8'); // JSON 읽기
  const projects: Project[] = JSON.parse(data); // JSON 파싱

  // 각 프로젝트에 대해 이미지 경로 확인
  for (const project of projects) {
    const imagePathPng = path.join(process.cwd(), 'public/images', `${project.path}.png`);
    const imagePathJpg = path.join(process.cwd(), 'public/images', `${project.path}.jpg`);

    try {
      await fs.access(imagePathPng); // PNG 파일 존재 확인
      project.path = `${project.path}.png`;
    } catch {
      try {
        await fs.access(imagePathJpg); // JPG 파일 존재 확인
        project.path = `${project.path}.jpg`;
      } catch {
        project.path = null; // 이미지가 없을 때 기본 값
      }
    }
  }
  return projects;
}

// 특정 프로젝트를 가져오는 함수
export async function getProject(id: string): Promise<Project | undefined> {
  const projects = await getProjects(); // 모든 프로젝트 가져오기
  return projects.find((project) => project.path === id); // 특정 프로젝트 찾기
}
