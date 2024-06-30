import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './layout.module.css';

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <title>My Blog</title>
      </head>
      <body className={styles.container}>
        <header className={styles.header}>
         <h2>hello World</h2>
          <nav className={styles.nav}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/projects" className={styles.link}>Projects</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </nav>
        </header>
        <main className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>
          <h1> <Link href="/contact">Contact</Link></h1>
          <nav className={styles.nav}>
      
          </nav>
        </footer>
      </body>
    </html>
  );
}
