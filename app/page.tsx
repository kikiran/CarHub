import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css';
import Hero from '@/components/Hero';
import { CardDetails } from '@/components';


export default function Home() {
  return (
    <main className="container">
      <div className='row'>
        <Hero />
        <CardDetails />
      </div>
    </main>
  )
}
