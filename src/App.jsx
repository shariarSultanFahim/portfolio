import './App.css'
import Experience from './Sections/Experience';
import Profile from './Sections/Profile';

function App() {


  return (
    <section className='max-h-screen mx-auto space-y-2 lg:space-y-4'>
      <Profile/>
      <Experience/>
    </section>
  )
}

export default App
