import path from 'path'
import { promises as fs } from 'fs'
//두개 모두 next path  파일경로 처리 알아서 해줌 넘 좋아!
// fs는 콜백없이 비동기 작업가능 async await 사용가능 


export type Project = {
  id: string
  name: string
  descript: string
}

//ts는 렌더링 될 필요없는것 
// 프로젝트는 배열 -> 여기는 서버!
export async function getProjects(): Promise<Project[]> {
  // json data 할당 전 array로 data test
  // return ['envSettings', 'UI', 'TypeScript', 'Next.js', 'React18']

  //재사용 때문에 쓴것 
  const filePath = path.join(process.cwd(), 'data', 'projects.json')
  //JSON 경로 구선 cwd 현재 디렉토리 위치 알려줌. 그래서 json하고 전체 경로 형성

  console.log(filePath)
  //읽어오는걸 비동기로 걸어준것!(나는 이걸 가져와서 먼저 써야 하니까)
  const data = await fs.readFile(filePath, 'utf8')
  // 파일읽기
  return JSON.parse(data)
}

// 디폴트가 ssr

//1차적으로 getProject 가져오고 's 가져오기 id로 json 값 찾아서 보여주기 
//-> 타입정의로 언디파인드로 보이기 
export async function getProject(id: string): Promise<Project | undefined> {
  const projects = await getProjects()
  //파라미터가 어레이라서 가능 find로 id찾기 
  return projects.find((project) => project.id === id)
}


// 그런데 이건 어디에 쓰이죠???? 
//데이터 저장 검색 같은 걸로 쓰이나? 일단 json 보여 줬으니까?? 