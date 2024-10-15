import logo from '../assets/kevinRushLogo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa'
const Navbar=()=>{
    return(
        <>
        <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className='mx-2 w-10' src={logo} alt='logo'/>
    </div>
   </nav>
   <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
    <a className='no-underline cursor-pointer hover:shadow-lg hover:shadow-blue-500 transition duration-300' href='https://www.linkedin.com/in/vishal-karae-84b80026b/'><FaLinkedin/></a>
    <a className='no-underline cursor-pointer hover:shadow-lg hover:shadow-blue-500 transition duration-300' href='https://github.com/Vishalkarae'><FaGithub/></a>
    <a className='no-underline cursor-pointer hover:shadow-lg hover:shadow-blue-500 transition duration-300' href='/'><FaSquareXTwitter/></a>
    <a className='no-underline cursor-pointer hover:shadow-lg hover:shadow-blue-500 transition duration-300' href='/'><FaInstagram/></a>
   </div>
        </>
    )
}
export default Navbar