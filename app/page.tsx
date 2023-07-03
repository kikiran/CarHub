import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css';
import Hero from '@/components/Hero';


export default function Home() {
  return (
    <main className="container">
      <Hero />
    </main>
  )
}
