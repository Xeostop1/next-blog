import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Blog | Projects ',
  description: 'first next JS blog',
}

//정말로 레이아웃을 정의하는 함수 (네비랑 섹션)
//네비는 a(link)로 구성
//섹션은 칠드런(리액트)노드를 그려줌 
export default function ProductsLayout({
  children,   //리액트 컴포넌트 받기(또는 노드 형식은 리액트 노드만 쓸꺼야!-> 파라미터예유 쫄지마요)
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <nav className={styles.nav}>  
        <Link href="/projects/project1">Project1</Link>
        <Link href="/projects/project2">Project2</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  )
}
