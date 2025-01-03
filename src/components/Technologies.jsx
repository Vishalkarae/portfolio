import {RiReactjsLine} from 'react-icons/ri'
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import {motion} from 'framer-motion'


const iconVariants=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse"
    }
  }
 

})
const Technologies=()=>{
    return(
     <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiHtml5 className='text-7xl text-red-400 ' />    
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
              <DiCss3 className='text-7xl text-blue-400 ' /> 
            </motion.div>
            <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiJsBadge className='text-7xl text-orange-400 '/>
            </motion.div>
            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
              <RiReactjsLine className='text-7xl text-cyan-400 '/>
            </motion.div>
           
            <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiGithubBadge className='text-7xl text-grey-400 ' />
            </motion.div>
            <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiNodejs className='text-7xl text-green-400 ' />
             
            </motion.div>

        </div>
         
     </div>
    )
}
export default Technologies