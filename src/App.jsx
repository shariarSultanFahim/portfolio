import './App.css'
import Experience from './Sections/Experience';
import Profile from './Sections/Profile';
import Skills from './Sections/Skills';
import Works from './Sections/Works';

function App() {


  return (
    <section className='max-h-screen mx-auto space-y-2 lg:space-y-4'>
      <Profile/>
      <Experience/>
      <Skills/>
      <Works/>
    </section>
  )
}

export default App
