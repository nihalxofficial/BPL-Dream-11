import { Suspense } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players';

const fetchPlayer = async() => {
  const res = await fetch("/data.json")
  return res.json();
}

function App() {
  const playerPromise = fetchPlayer();

  return (
    <div className='space-y-8'>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>

      <Players playerPromise = {playerPromise}></Players>
      </Suspense>
    </div>
  )
}

export default App
