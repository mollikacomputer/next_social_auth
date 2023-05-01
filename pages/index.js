
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Link href='/login' > LogIn Page </Link>
     <h2 className="text-3xl">Next Social Auth with Facebook Home Page</h2>
     <button class="btn btn-secondary">Testing Daisy UI </button>
    </main>
  )
}
