import type { Metadata } from 'next'
import Link from 'next/link'

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
      <nav className="p-4 mt-2 border border-amber-300">
        <Link href="/projects/project1" className="px-2 py-1 mr-2 hover:text-amber-600 transition-colors">Project1</Link>
        <Link href="/projects/project2" className="px-2 py-1 hover:text-amber-600 transition-colors">Project2</Link>
      </nav>
      <section className="p-4">{children}</section>
    </>
  )
}