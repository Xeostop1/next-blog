import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h2>Not Found 🤪 404</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Click Me. Return Home</Link>
    </div>
  )
}
