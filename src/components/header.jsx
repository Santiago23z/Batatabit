import './header.css'
import batataLogo from '../assets/Group19.svg'
const Header = () => {
  return (
    <header className=' relative flex flex-col items-center justify-center w-full min-w-[320px]  h-[400px] text-center'>
        <img src={batataLogo} alt="" className='w-[150px] h-[24px]  self-center'/>
      <div className='w-[90%] min-w-[288px] max-w-[900px] mt-9'>
        <h1 className='text-[1.6rem] font-bold leading-[2rem] text-white'>La próxima revolución en el intercambio de criptomonedas.</h1>
        <p className='text-[1rem] mt-6 font-[500] text-[#ffe9d5]'>Batabit te ayuda a navegar entre los diferentes precios y tendencias.</p>
        <a href="" className='absolute p-4 bottom-[-25px] text-[.9rem] flex items-center'>Conoce Nuestros Planes <span id='span--header'></span></a>
      </div>
    </header>
  )
}

export default Header