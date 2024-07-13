import { BsGithub, BsTwitterX, BsInstagram, BsYoutube } from 'react-icons/bs'
import heroImg from '../image/heroIMG.jpg'
import Tartaglia from '../image/Tartaglia.webp'
export default function Hero() {
    return(
        <>
        <div className="hero min-h-screen bg-base-100 border-b-2 flex md:flex-row xsm:flex-col-reverse justify-center xl:px-48 xsm:px-12">
            <div className="xl:w-1/2 md:w-1/2 xsm:w-full flex flex-col gap-4">
                <div>
                    <h1 className="font-bold text-3xl">Hello👋, I am Subham, and</h1>
                    <h1 className="font-extrabold xl:text-6xl xsm:text-3xl">I'm a Full-Stack  <br className='xsm:hidden'/> Web Developper</h1>
                </div>
                <div>
                    <p className="font-semibold text-lg">I build things for the web to provide the best User Experience Possible.</p>
                    <p className="font-semibold text-lg">I am a fast learner, always looking to improve and learn new technologies.</p>
                </div>
                <div className='flex xl:gap-8 xsm:justify-between xl:justify-normal p-0 '>
                        <a href="https://github.com/Subham15112001" target='_blank'><button className="btn btn-circle w-12 h-12 p-0 bg-gray-400"><BsGithub/></button></a>
                    {/* <a href="https://twitter.com/flackjsx" target='_blank'><button className="btn btn-circle"><BsTwitterX/></button></a>
                    <a href="https://www.instagram.com/flackwav/" target='_blank'><button className="btn btn-circle"><BsInstagram/></button></a>
                    <a href="https://www.youtube.com/channel/UCV5DS_mBLPdfjpyrTFWYVBg" target='_blank'><button className="btn btn-circle"><BsYoutube/></button></a> */}
                </div>
            </div>
                <div className='xl:w-1/3 md:w-1/3 xsm:w-full flex md:justify-end xsm:mb-4 md:mb-0 shadow-md shadow-blue-500 bg-blend-darken'>
                    <img src={Tartaglia} alt="" className='md:w-auto rounded-xl'/>
            </div>
        </div>
        </>
    ) 
}