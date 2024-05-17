import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Blog | Projects ',
  description: 'first next JS blog',
}


export default function ProductsLayout({
  children,   
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
