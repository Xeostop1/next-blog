//라우터 -> 여기는 서버리스 함수로 쓰임
//증거: next.js에서 서버리스 함수인, GET 사용(이벤트 기반)
// 이 경로를통해서 get post 처리 가능 restful 가능 여기가 엔드 포인트가 되는가보네
//또는 데이터 동기 비동기로 불러옴
//SSG

//@ 절대경로 지정
import { getProjects } from '@/service/projects'
import { NextResponse } from 'next/server'

//클라우드 서비스의 트리거 , 웹 API 웹 요청 및 응답 처리 또는 자동화
export async function GET(request: Request) {
  const projects = await getProjects()
  return NextResponse.json({ projects })
}
