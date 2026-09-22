import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import CreatePost from './pages/CreatePost.jsx'
import Fead from './pages/Fead.jsx'

const App = () => {
  return (
    
    <BrowserRouter>
      <div className='min-h-screen bg-black text-white'>
        <header className='border-b border-zinc-800 px-6 py-4'>
          <nav className='mx-auto flex max-w-4xl items-center justify-between'>
            <Link to='/' className='text-lg font-semibold'>
              Post Frontend
            </Link>
            <Link
              to='/create-post'
              className='rounded-md bg-white px-4 py-2 text-sm font-medium text-black'
            >
              Create post
            </Link>
          </nav>
        </header>

        <main className='mx-auto max-w-4xl px-6 py-8'>
          <Routes>
            <Route path='/fead' element={<Fead />} />
            <Route path='/create-post' element={<CreatePost />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}


export default App