<<<<<<< HEAD
const App=()=>{
  return(
    <h1>
      Hello Vishal
    </h1>
=======
import About from './components/About'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Technologies from './components/Technologies'
const App=()=>{
  return(
    <div className='overflow-x-hidden text-neutral-300 antialiased slection:bg-cyan-300 selection:bg-cyan-900'>
     
     
      <div className="fixed top-0 -z-10 h-full w-full">
      
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className='container mx-auto px-8'>
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Experience/>
      </div>
      
    </div>
   
>>>>>>> 62b031b (changes in components)
  )
}
export default App