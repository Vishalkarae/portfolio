import logo from '../assets/logo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa'
const Navbar=()=>{
    return(
        <>
        <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className='mx-4 w-16' src={logo} alt='logo'/>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a className='cursor-pointer hover:shadow-glow bg-black text-white' href='https://www.linkedin.com/in/vishal-karae-84b80026b/'><FaLinkedin/></a>
        <a className='cursor-pointer hover:shadow-glow bg-black text-white' href='https://github.com/Vishalkarae'><FaGithub/></a>
        <a className='cursor-pointer hover:shadow-glow bg-black text-white' href='https://x.com/KaraeVishal'> <FaSquareXTwitter/></a>
        <a className='cursor-pointer hover:shadow-glow bg-black text-white' href='https://www.linkedin.com/in/vishal-karae-84b80026b/'> <FaInstagram/></a>
    
   
   
   </div>
   </nav>
   
        </>
    )
}
export default Navbar